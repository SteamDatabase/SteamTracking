(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [74298],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _.memo(function (_) {
          const {
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
          return (0, _.jsx)(_._, {
            ref: _ ? _.measureElement : void 0,
            navKey: `VirtualizedListIndex-${_}`,
            "data-index": _,
            fnScrollIntoViewHandler: _ ? void 0 : _,
            scrollIntoViewWhenChildFocused: "force",
            style: {
              width: "100%",
              paddingBottom: _,
            },
            children: _(_),
          });
        });
        function _(_) {
          return (0, _._)(
            (_) => {
              if (!_) return;
              const _ = new _.ownerDocument.defaultView.ResizeObserver((_) => {
                _(_[0]);
              });
              let _ = [],
                _ = _;
              for (; _ && _ != null; )
                _.observe(_), _.push(_), (_ = _.parentElement);
              return () => {
                _.forEach((_) => _.unobserve(_));
              };
            },
            [_],
          );
        }
        function _(_, _) {
          const _ = _.getBoundingClientRect().top;
          return _
            ? _ - _.getBoundingClientRect().top - _.clientTop + _.scrollTop
            : _ + (_.ownerDocument.defaultView?.scrollY ?? 0);
        }
        const _ = _.forwardRef(function (_, _) {
          const {
              nRows: _,
              nItemHeight: _,
              nRowGap: _,
              overscan: _,
              renderItem: _,
              getItemKey: _,
              bDynamic: _,
              measureElement: _,
              className: _,
              forceVirtualizeType: _,
              hintVirtualizeType: _,
              scrollAlign: _,
              bNativeScrollIntoView: _,
              bNoOverscanOffscreen: _,
              bBrowserScrollAnchoring: _,
              initialOffset: _,
              onOffsetChange: _,
              ..._
            } = _,
            [_, _] = (0, _.useState)(_ ?? _),
            [_, _] = _.useState(),
            [_, _] = _.useState(),
            [_, _] = _.useState(),
            _ = _.useRef(null),
            _ = _.useCallback(
              (_) => {
                if (!_) return;
                const _ = (0, _._)(_, "y"),
                  _ = _(_, _ == "window" ? null : _),
                  _ = _?.getBoundingClientRect(),
                  _ = () => {
                    _ != "window" &&
                      (_(_ || void 0),
                      _((_) => {
                        if (!_) return;
                        const _ = Math.round(_.width),
                          _ = Math.round(_.height);
                        return _?.width == _ && _?.height == _
                          ? _
                          : {
                              width: _,
                              height: _,
                            };
                      })),
                      _(_),
                      _ || _(_ ? "element" : "window");
                  };
                _ ? _() : (0, _.startTransition)(_);
              },
              [_, _],
            ),
            _ = _.useRef(_);
          _.current = _;
          const _ = _.useCallback(() => {
              if (!_.current) return;
              const _ = _(_.current, _.current);
              (0, _.startTransition)(() => {
                _(_);
              });
            }, []),
            _ = _(_),
            _ = (0, _._)(_, _, _, _),
            _ = {
              nRows: _,
              nItemHeight: _,
              nRowGap: _,
              overscan: _,
              renderItem: _,
              getItemKey: _,
              bDynamic: _,
              measureElement: _,
              forceVirtualizeType: _,
              hintVirtualizeType: _,
              scrollAlign: _,
              bNativeScrollIntoView: _,
              bNoOverscanOffscreen: _,
              bBrowserScrollAnchoring: _,
              initialOffset: _,
              onOffsetChange: _,
            };
          return (0, _.jsx)(_._, {
            className: _,
            ref: _,
            ..._,
            children: (0, _.jsxs)(_.Suspense, {
              children: [
                _ === "element" &&
                  (0, _.jsx)(_, {
                    ..._,
                    nScrollMargin: _,
                    elScrollable: _,
                    rectScrollable: _,
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
        function _(_, _, _) {
          _.useEffect(() => {
            _ ||
              (0, _.startTransition)(() => {
                _.measure();
              });
          }, [_, _, _]);
        }
        function _(_, _, _) {
          if (!_) return "first";
          const _ = _.options.scrollMargin,
            _ = _ + _.getTotalSize(),
            _ = _.scrollOffset ?? 0,
            _ = (_.scrollRect ?? _.options.initialRect).height;
          return _ > _ + _ + _ ? "first" : _ < _ - _ ? "last" : "all";
        }
        function _(_, _, _) {
          const [, _] = (0, _.useState)(0),
            _ = _.useRef({
              bPositionKnown: _,
              nMargin: _,
              eRowWindow: "all",
            });
          (_.current.bPositionKnown = _), (_.current.nMargin = _);
          const _ = _.useCallback(
            (_, _) =>
              _(_, (_, _) => {
                _(_, _);
                const {
                  bPositionKnown: _,
                  nMargin: _,
                  eRowWindow: _,
                } = _.current;
                _(_, _, _) != _ && _((_) => _ + 1);
              }),
            [],
          );
          return {
            observeElementOffset: _ ? _ : _,
            fnGetRowWindow: (_) => {
              const _ = _ ? _(_, _, _) : "all";
              return (_.current.eRowWindow = _), _;
            },
          };
        }
        function _(_) {
          const {
              nScrollMargin: _,
              nRows: _,
              nItemHeight: _,
              nRowGap: _ = 10,
              overscan: _ = 6,
              initialOffset: _,
              onOffsetChange: _,
              measureElement: _,
              getItemKey: _,
              bDynamic: _,
              bNoOverscanOffscreen: _,
              bBrowserScrollAnchoring: _,
            } = _,
            _ = (0, _._)(),
            _ = _ + _,
            { observeElementOffset: _, fnGetRowWindow: _ } = _(
              _,
              _ !== void 0,
              _ * _,
            ),
            _ = (0, _._)({
              count: _,
              scrollMargin: _,
              estimateSize: _.useCallback(() => _, [_]),
              measureElement: _,
              getItemKey: _,
              overscan: _,
              initialOffset: _ ?? (() => window.scrollY),
              initialRect: void 0,
              observeElementOffset: _,
              observeElementRect: _,
              onChange(_, _) {
                _?.(_.scrollOffset);
              },
            });
          return (
            (_.shouldAdjustScrollPositionOnItemSizeChange = (_) =>
              !_ && _ !== void 0 && _.start < (_.scrollOffset ?? 0)),
            _(_, _, _),
            (0, _.jsx)(_, {
              ..._,
              virtualizer: _,
              eRowWindow: _(_),
            })
          );
        }
        function _(_) {
          const {
              nRows: _,
              nScrollMargin: _,
              elScrollable: _,
              rectScrollable: _,
              nItemHeight: _,
              nRowGap: _ = 10,
              overscan: _ = 6,
              initialOffset: _,
              onOffsetChange: _,
              measureElement: _,
              getItemKey: _,
              bDynamic: _,
              bNoOverscanOffscreen: _,
              bBrowserScrollAnchoring: _,
            } = _,
            _ = _ + _,
            _ = (0, _._)(),
            { observeElementOffset: _, fnGetRowWindow: _ } = _(
              _,
              _ !== void 0 && _ !== void 0,
              _ * _,
            ),
            _ = (0, _._)({
              count: _,
              scrollMargin: _ ?? 0,
              getScrollElement: () => (
                _ &&
                  _.scrollElement !== _ &&
                  _ === void 0 &&
                  (_.scrollOffset = _.scrollTop),
                _ ?? null
              ),
              estimateSize: _.useCallback(() => _, [_]),
              measureElement: _,
              getItemKey: _,
              overscan: _,
              initialRect: _
                ? _
                : {
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
              !_ && _ !== void 0 && _.start < (_.scrollOffset ?? 0)),
            _(_, _, _),
            (0, _.jsx)(_, {
              ..._,
              virtualizer: _,
              eRowWindow: _(_),
            })
          );
        }
        function _(_) {
          const {
              virtualizer: _,
              eRowWindow: _,
              nRowGap: _,
              renderItem: _,
              bDynamic: _,
              scrollAlign: _ = "center",
              bNativeScrollIntoView: _,
            } = _,
            _ = _.getVirtualItems(),
            _ =
              _ == "first"
                ? _.measurementsCache[0]
                : _.measurementsCache[_.measurementsCache.length - 1],
            _ = _ == "all" ? _ : _ ? [_] : [],
            _ = _.length ? _[0].start - _.options.scrollMargin : 0,
            _ = Math.max(0, _.getTotalSize());
          return (0, _.jsx)(_._, {
            "flow-children": "column",
            navEntryPreferPosition: _._.MAINTAIN_Y,
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
          const _ = _.scrollElement;
          if (!_) return;
          let _;
          "scrollX" in _
            ? (_ = _((_) =>
                _(_[_.options.horizontal ? "scrollX" : "scrollY"], _),
              ))
            : (_ = _((_) =>
                _(_[_.options.horizontal ? "scrollLeft" : "scrollTop"], _),
              ));
          const _ = () => _(!0),
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
              _.removeEventListener("scroll", _),
                _.removeEventListener("scrollend", _);
            }
          );
        }
        function _(_, _) {
          const _ = _.scrollElement;
          if (!_) return;
          const _ = _(() =>
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
          const _ = _.scrollElement;
          if (!_) return;
          const _ = _((_) =>
            _({
              width: Math.round(_.width),
              height: Math.round(_.height),
            }),
          );
          _(_.getBoundingClientRect());
          const _ = _.ownerDocument.defaultView;
          if (!_?.ResizeObserver) return () => {};
          const _ = new _.ResizeObserver((_) => {
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
        var _ = __webpack_require__("chunkid");
        const _ = _.createContext(void 0);
        function _(_) {
          const { table: _, setColumnSizeOverride: _ } = _,
            _ = (0, _.useRef)(_);
          _.current = _;
          const _ = (0, _.useMemo)(
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
        const _ = _.forwardRef(function (_, _) {
          const {
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
              virtualizeType: _ = "element",
            } = _,
            _ = (0, _.useRef)(null),
            [_, _] = (0, _.useState)({}),
            [_, _] = (0, _.useState)({}),
            _ = _.map((_) =>
              "accessorKey" in _
                ? {
                    ..._,
                    filterFn: _[_.accessorKey] ?? _.filterFn,
                  }
                : _,
            ),
            _ = _.map((_) => {
              let _ = _[_._];
              return (
                _ === void 0 && "accessorKey" in _ && (_ = _[_.accessorKey]),
                (_ ??= _.size),
                {
                  ..._,
                  size: _,
                }
              );
            }),
            _ = (0, _._)({
              data: _,
              columns: _,
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
              getCoreRowModel: (0, _._)(),
              getSortedRowModel: (0, _._)(),
              getFilteredRowModel: (0, _._)(),
              getGroupedRowModel: (0, _._)(),
              columnResizeMode: "onChange",
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
          const _ = (0, _._)({
              count: _.length,
              scrollMargin: _,
              getScrollElement: _.useCallback(
                () => (_ === "element" ? _.current : window),
                [_],
              ),
              scrollToFn(_, _, _) {
                return _ === "window" ? (0, _._)(_, _, _) : (0, _._)(_, _, _);
              },
              estimateSize: _.useCallback(() => _, [_]),
              overscan: _,
              initialRect: void 0,
              observeElementOffset: _,
              observeElementRect(_, _) {
                return _ === "window" ? _(_, _) : _(_, _);
              },
              getItemKey(_) {
                const _ = _[_];
                return `${_.parentId ?? ""}${_(_, _.original)}`;
              },
            }),
            _ = (0, _.useRef)(0),
            _ = _.useMemo(() => {
              const _ = _.getFlatHeaders(),
                _ = {};
              for (let _ = 0; _ < _.length; _++) {
                const _ = _[_];
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
          const _ = _.getVirtualItems(),
            _ = _[0]?.start ?? 0,
            _ = _.getTotalSize(),
            _ = (0, _._)({
              estimateSize(_) {
                return _[0]?.getVisibleCells()[_].column.getSize() ?? 0;
              },
              count: _[0]?.getVisibleCells().length ?? 0,
              overscan: 6,
              horizontal: !0,
              getScrollElement: _.useCallback(
                () => (_ === "element" ? _.current : window),
                [_],
              ),
              scrollToFn(_, _, _) {
                return _ === "window" ? (0, _._)(_, _, _) : (0, _._)(_, _, _);
              },
              rangeExtractor(_) {
                const _ = _[0]?.getVisibleCells() ?? [],
                  _ = new Set((0, _._)(_));
                return (
                  _.forEach((_, _) => {
                    _.column.getIsPinned() && _.add(_);
                  }),
                  Array.from(_).sort((_, _) => _ - _)
                );
              },
              observeElementOffset: _,
              observeElementRect(_, _) {
                return _ === "window" ? _(_, _) : _(_, _);
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
          const _ = (0, _.useRef)(null),
            _ = _ ? (_ ?? 0) : 0;
          let _ = 0;
          const _ = _[0]?.getVisibleCells(),
            _ = _.getVirtualItems(),
            _ = _[_.length - 1]?.end;
          for (const _ of _) _[_.index]?.column.getIsPinned() && (_ += _.size);
          return (0, _.jsx)(_, {
            table: _,
            setColumnSizeOverride: _,
            children: (0, _.jsx)("div", {
              className: _,
              ref: _,
              style: {
                width: _,
                height: _,
                overflow: _ === "element" ? "auto" : void 0,
                maxWidth: "fit-content",
                scrollPadding: `${_}px 0 0 ${_}px`,
              },
              children: (0, _.jsxs)("div", {
                role: "table",
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
          const _ = _.getIsPinned(),
            _ = _ === "left" && _.getIsLastColumn("left"),
            _ = _ === "right" && _.getIsFirstColumn("right");
          return {
            borderRight: _
              ? "var(--fancy-table-last-pinned-border, var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
            borderLeft: _
              ? "var(--fancy-table-last-pinned-border,var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
            left: _ === "left" ? `${_.getStart("left")}px` : void 0,
            right: _ === "right" ? `${_.getAfter("right")}px` : void 0,
            position: _ ? "sticky" : "relative",
            minWidth: _.getSize(),
            zIndex: _ ? 1 : 0,
          };
        }
        function _(_) {
          const { group: _, sticky: _, nHeaderHeight: _ } = _;
          return (0, _.jsx)("div", {
            role: "row",
            className: _()(
              _().FancyTableRow,
              _().FancyTableHeader,
              _ && _().StickyHeader,
            ),
            children: _.headers.map((_, _) => {
              const _ = _.headers[_ - 1],
                _ = {},
                _ = _.column.getIsSorted();
              _ &&
                !_.column.columnDef.meta?.bDisableSortButton &&
                (_["aria-sort"] = _ === "asc" ? "ascending" : "descending");
              let _ = "div";
              return (
                _.column.getCanSort() &&
                  !_.column.columnDef.meta?.bDisableSortButton &&
                  ((_ = "button"),
                  (_.onClick = _.column.getToggleSortingHandler())),
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
        const _ = _.memo(function (_) {
          const {
            row: _,
            size: _,
            rowVirtualizer: _,
            measureRef: _,
            index: _,
            nItemHeight: _,
            renderGroup: _,
          } = _;
          return (0, _.jsx)("div", {
            role: "row",
            className: _()(
              _().FancyTableRow,
              _.getCanExpand() && _().ExpandableRow,
            ),
            style: {
              minHeight: _.getCanExpand() ? void 0 : `${_}px`,
              transform: "translateY(var(--virtualPos))",
            },
            "data-even": _ % 2 === 0,
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
          const { row: _, rowVirtualizer: _, renderGroup: _ } = _;
          if (_.getCanExpand()) {
            const _ = _ ?? (() => _.groupingValue);
            return (0, _.jsxs)("button", {
              className: _().RowGroup,
              "aria-expanded": _.getIsExpanded(),
              onClick: _.getToggleExpandedHandler(),
              children: [
                (0, _.jsx)("div", {
                  className: _().GroupExpandIndicator,
                }),
                _(_),
              ],
            });
          }
          const _ = _.getVirtualItems(),
            _ = _.getVisibleCells();
          let _ = 0,
            _;
          return (0, _.jsx)(_.Fragment, {
            children: _.map((_) => {
              const _ = _[_.index],
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
          const _ = (0, _.useContext)(_),
            _ = _.columnDef.meta?.bGrowToFit,
            _ = _._,
            _ = _ ? _.getSize() : 0,
            _ = _.getIsSorted();
          (0, _.useLayoutEffect)(() => {
            if (!_ || !_.current) return;
            const _ = _.current?.scrollWidth;
            if (!_) return;
            const _ = _.current.getBoundingClientRect().width,
              _ = window.getComputedStyle(_.current);
            let _ = _;
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
          }, [_, _, _, _, _, _]);
        }
        function _(_) {
          const {
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
                role: "columnheader",
                ref: _,
                "data-pinned": !!_.column.getIsPinned(),
                className: _()(
                  _().ColumnHeader,
                  _ === "button" && _().SortButton,
                  _.column.columnDef.meta?.headerClassname,
                ),
                style: {
                  width: `var(--header-${_._}-size)`,
                  height: _ !== void 0 ? `${_}px` : void 0,
                  ..._(_.column),
                },
                ..._,
                children: [
                  _?.column.getCanResize() &&
                    (0, _.jsx)("div", {
                      role: "presentation",
                      onDoubleClick: () => _.column.resetSize(),
                      onMouseDown: _.getResizeHandler(),
                      onTouchStart: _.getResizeHandler(),
                      onClick: (_) => _.stopPropagation(),
                      className: _()(_().ResizeHandle, _().PrevResizeHandle),
                    }),
                  _.isPlaceholder
                    ? null
                    : (0, _._)(_.column.columnDef.header, _.getContext()),
                  _ &&
                    (0, _.jsx)(_._, {
                      tooltip: _,
                    }),
                  _ &&
                    !_.column.columnDef.meta?.bDisableSortButton &&
                    (0, _.jsx)("div", {
                      className: _().SortIndicator,
                    }),
                  _.column.getCanResize() &&
                    (0, _.jsx)("div", {
                      role: "presentation",
                      onDoubleClick: () => _.column.resetSize(),
                      onMouseDown: _.getResizeHandler(),
                      onTouchStart: _.getResizeHandler(),
                      onClick: (_) => _.stopPropagation(),
                      className: _()(
                        _().ResizeHandle,
                        _.column.getIsResizing() && _().IsResizing,
                      ),
                    }),
                ],
              },
              _._,
            )
          );
        }
        function _(_) {
          const { cell: _, rowVirtualizer: _, index: _, transform: _ } = _,
            _ = _.useRef(null),
            _ = (0, _._)(_, _.measure);
          return (
            _(_.column, _),
            (0, _.jsx)("div", {
              className: _()(
                _().FancyTableCell,
                _.column.columnDef.meta?.cellClassname,
              ),
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
          return (0, _._)(_.CellComponent, _.context);
        }
        const _ = _.memo(
          _,
          (_, _) => _.context.getValue() === _.context.getValue(),
        );
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
            _: () => _,
            _: () => _,
            _: () => _,
          });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7,
          _ = 8;
        function _(_) {
          return "unknown ESeason ( " + _ + " )";
        }
        function _(_) {
          return "unknown EUserActionEventType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EYearInReviewPrivacyState ( " + _ + " )";
        }
        function _(_) {
          return "unknown EYearInReviewAccessSource ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.total_playtime_seconds || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    total_playtime_seconds: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_sessions: {
                      _: 20,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    vr_sessions: {
                      _: 21,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    deck_sessions: {
                      _: 22,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    controller_sessions: {
                      _: 23,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    linux_sessions: {
                      _: 24,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    macos_sessions: {
                      _: 25,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    windows_sessions: {
                      _: 26,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_playtime_percentagex100: {
                      _: 27,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    vr_playtime_percentagex100: {
                      _: 28,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    deck_playtime_percentagex100: {
                      _: 29,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    controller_playtime_percentagex100: {
                      _: 30,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    linux_playtime_percentagex100: {
                      _: 31,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    macos_playtime_percentagex100: {
                      _: 32,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    windows_playtime_percentagex100: {
                      _: 33,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStreakGame";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.longest_consecutive_days || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    longest_consecutive_days: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rtime_start: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    streak_games: {
                      _: 3,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStreak";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.overall_rank || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    overall_rank: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    vr_rank: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    deck_rank: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    controller_rank: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    linux_rank: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    mac_rank: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    windows_rank: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeRanks";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    stats: {
                      _: 2,
                      _: _,
                    },
                    playtime_streak: {
                      _: 3,
                      _: _,
                    },
                    playtime_ranks: {
                      _: 4,
                      _: _,
                    },
                    rtime_first_played: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    relative_game_stats: {
                      _: 6,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGamePlaytimeStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    new_this_year: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    rtime_first_played_lifetime: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    demo: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    playtest: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_during_early_access: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_vr: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_deck: {
                      _: 8,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_controller: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_linux: {
                      _: 10,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_mac: {
                      _: 11,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_windows: {
                      _: 12,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    total_playtime_percentagex100: {
                      _: 13,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_sessions: {
                      _: 14,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rtime_release_date: {
                      _: 15,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    parent_appid: {
                      _: 16,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameSummary";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_playtime_percentagex100: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    relative_playtime_percentagex100: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSimpleGameSummary";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rank: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    relative_playtime_percentagex100: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRank";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.category || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    category: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    rankings: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CRankingCategory";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.overall_ranking || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    overall_ranking: {
                      _: 1,
                      _: _,
                    },
                    vr_ranking: {
                      _: 2,
                      _: _,
                    },
                    deck_ranking: {
                      _: 3,
                      _: _,
                    },
                    controller_ranking: {
                      _: 4,
                      _: _,
                    },
                    linux_ranking: {
                      _: 5,
                      _: _,
                    },
                    mac_ranking: {
                      _: 6,
                      _: _,
                    },
                    windows_ranking: {
                      _: 7,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRankings";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.total_achievements || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    total_achievements: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_games_with_achievements: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_rare_achievements: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserPlaytimeSummaryStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.stats || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    stats: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserTagStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.tag_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    tag_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    tag_weight: {
                      _: 2,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    tag_weight_pre_selection: {
                      _: 3,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserTagStats_Tag";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.screenshots_shared || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    screenshots_shared: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    gifts_sent: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    loyalty_reactions: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    written_reviews: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    guides_submitted: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    workshop_contributions: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    badges_earned: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    friends_added: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    forum_posts: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    workshop_subscriptions: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    guide_subscribers: {
                      _: 11,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    workshop_subscribers: {
                      _: 12,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    games_played_pct: {
                      _: 13,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    achievements_pct: {
                      _: 14,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    game_streak_pct: {
                      _: 15,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    games_played_avg: {
                      _: 16,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    achievements_avg: {
                      _: 17,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    game_streak_avg: {
                      _: 18,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeByNumbers";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.total_stats || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2, 5, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    total_stats: {
                      _: 1,
                      _: _,
                    },
                    games: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    playtime_streak: {
                      _: 3,
                      _: _,
                    },
                    months: {
                      _: 5,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    game_summary: {
                      _: 6,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    demos_played: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    game_rankings: {
                      _: 8,
                      _: _,
                    },
                    playtests_played: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    summary_stats: {
                      _: 10,
                      _: _,
                    },
                    substantial: {
                      _: 11,
                      _: !0,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    tag_stats: {
                      _: 12,
                      _: _,
                    },
                    by_numbers: {
                      _: 13,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserPlaytimeStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rtime_month || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [4, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    rtime_month: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    stats: {
                      _: 2,
                      _: _,
                    },
                    appid: {
                      _: 4,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    relative_monthly_stats: {
                      _: 5,
                      _: _,
                    },
                    game_summary: {
                      _: 6,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMonthlyPlaytimeStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.account_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    account_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    playtime_stats: {
                      _: 3,
                      _: _,
                    },
                    privacy_state: {
                      _: 4,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserYearInReviewStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.from_dbo || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    from_dbo: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    overall_time_ms: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    dbo_load_ms: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    query_execution_ms: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    message_population_ms: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    dbo_lock_load_ms: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CYearInReviewPerformanceStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.statid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    statid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    fieldid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    achievement_name_internal: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    rtime_unlocked: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAchievementDetails";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    achievements: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    all_time_unlocked_achievements: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    unlocked_more_in_future: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameAchievements";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.median_achievements || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    median_achievements: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    median_games: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    median_streak: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGlobalPercentiles";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.new_releases || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    new_releases: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    recent_releases: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    classic_releases: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    recent_cutoff_year: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGlobalPlaytimeDistribution";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.games_played || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    games_played: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    unlocked_achievements: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    longest_streak: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPreviousYIRSummaryData";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    force_regenerate: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    access_source: {
                      _: 4,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    fetch_previous_year_summary: {
                      _: 5,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReview_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.stats || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    stats: {
                      _: 1,
                      _: _,
                    },
                    performance_stats: {
                      _: 2,
                      _: _,
                    },
                    percentiles: {
                      _: 3,
                      _: _,
                    },
                    distribution: {
                      _: 4,
                      _: _,
                    },
                    previous_year_summary: {
                      _: 5,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReview_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    privacy_state: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_SetUserSharingPermissions_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.privacy_state || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    privacy_state: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_SetUserSharingPermissions_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserSharingPermissions_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.privacy_state || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    privacy_state: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    generated_value: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    steamid: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    rt_privacy_updated: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserSharingPermissions_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    appids: {
                      _: 3,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    total_only: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearAchievements_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_achievements || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_achievements: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    total_achievements: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_rare_achievements: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_games_with_achievements: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearAchievements_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    appids: {
                      _: 3,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.apps || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    apps: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.image_url || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    image_url: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    preview_url: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    image_width: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    image_height: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    maybe_inappropriate_sex: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    maybe_inappropriate_violence: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    visibility: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    spoiler_tag: {
                      _: 8,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response_Screenshot";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    screenshots: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    gid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    type: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserActionData_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.jsondata || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    jsondata: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserActionData_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    gids: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readFixed64String,
                      pbr: _._.readPackedFixed64String,
                      _: _._.writeRepeatedFixed64String,
                    },
                    type: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.entries || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    entries: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    jsondata: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    steamid: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Response_Entry";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    type: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    count: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    last_account_index: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.entries || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    entries: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    last_account_index: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    jsondata: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    steamid: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Response_Entry";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    return_private: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetFriendsSharedYearInReview_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    privacy_state: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    rt_privacy_updated: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    privacy_override: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendSharedYearInView";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.friend_shares || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    friend_shares: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetFriendsSharedYearInReview_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    language: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.images || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    images: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    url_path: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Response_Image";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetYIRCurrentMonthlySummary_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.year || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    year: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    month: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    games_played: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    top_played_appid: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    longest_streak_days: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rt_streak_start: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    achievements: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    screenshots: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetYIRCurrentMonthlySummary_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetUserYearInReview#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.GetUserYearInReview = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetUserSharingPermissions#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetUserSharingPermissions = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.SetUserSharingPermissions#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.SetUserSharingPermissions = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetUserYearAchievements#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.GetUserYearAchievements = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetUserYearScreenshots#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.GetUserYearScreenshots = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetUserActionData#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetUserActionData = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetMultipleUserActionData#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetMultipleUserActionData = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetAllUserActionDataForType#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 4,
              },
            );
          }
          _.GetAllUserActionDataForType = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetFriendsSharedYearInReview#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetFriendsSharedYearInReview = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetUserYearInReviewShareImage#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.GetUserYearInReviewShareImage = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetYIRCurrentMonthlySummary#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetYIRCurrentMonthlySummary = _;
        })(_ || (_ = {}));
      },
      chunkid: (module) => {
        module.exports = {
          FancyTableRow: "_36QJs1BZ3so19Xl2es3ihH",
          ExpandableRow: "g86xV6xEGOZ54uRvK3oQ4",
          FancyTableHeader: "_2mHaS291U0AFO1q99AVdLy",
          StickyHeader: "_4y4yrbyr89wNqTGLp049k",
          FancyTableCell: "_3m5AH2HSnsvjImS7uUpvxv",
          SortButton: "_2xr81ssapVQO5aalcANmCk",
          ColumnHeader: "_2XdcqH-eLWVp_qatDebc6J",
          ResizeHandle: "USh_UNRX22s8Wml0mCY3M",
          PrevResizeHandle: "_3wzyEuMO8BdQHAkXnneNRR",
          SortIndicator: "_6z0ftV9RCqbZFmC4EOzYZ",
          GroupExpandIndicator: "_3I86V1lT4xbDJ6FDjMIaMq",
          RowGroup: "_uckWydn-lyPGWjFKZ4Tm",
        };
      },
    },
  ]);
})();
