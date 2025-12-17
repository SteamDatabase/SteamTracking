(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6700],
  {
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = _.memo(function (_) {
        const {
            virtualizer: _,
            bDynamic: __webpack_require__,
            idx: _,
            rowGap: _,
            renderItem: _,
          } = _,
          _ = _.useCallback(
            (_, _, _) => (
              _.scrollToIndex(_, {
                align: "center",
              }),
              !0
            ),
            [_, _],
          );
        return _.createElement(
          _._,
          {
            ref: __webpack_require__ ? _.measureElement : void 0,
            "data-index": _,
            fnScrollIntoViewHandler: _,
            scrollIntoViewWhenChildFocused: "force",
            style: {
              width: "100%",
              paddingBottom: _,
            },
          },
          _(_),
        );
      });
      _.forwardRef(function (_, _) {
        const {
            nRows: __webpack_require__,
            nItemHeight: _,
            nRowGap: _,
            overscan: _,
            renderItem: _,
            bDynamic: _,
            measureElement: _,
            className: _,
            forceVirtualizeType: _,
            initialOffset: _,
            onOffsetChange: _,
            ..._
          } = _,
          [_, _] = (0, _.useState)(_),
          [_, _] = _.useState(),
          [_, _] = _.useState(),
          _ = _.useCallback(
            (_) => {
              if (!_ || "window" == _) return;
              const _ = (0, _._)(_, "y");
              (0, _.startTransition)(() => {
                _(_ || void 0),
                  _(_.offsetTop),
                  _ || _(_ ? "element" : "window");
              });
            },
            [_],
          ),
          _ = (0, _._)(_, _),
          _ = {
            nRows: __webpack_require__,
            nItemHeight: _,
            nRowGap: _,
            overscan: _,
            renderItem: _,
            bDynamic: _,
            measureElement: _,
            forceVirtualizeType: _,
            initialOffset: _,
            onOffsetChange: _,
          };
        return _.createElement(
          _._,
          {
            className: _,
            ref: _,
            ..._,
          },
          _.createElement(
            _.Suspense,
            null,
            "element" === _ &&
              _.createElement(_, {
                ..._,
                nScrollMargin: _ || 0,
                elScrollable: _,
              }),
            "window" === _ &&
              _.createElement(_, {
                ..._,
                nScrollMargin: _,
              }),
          ),
        );
      });
      function _(_) {
        const {
            nScrollMargin: _,
            nRows: __webpack_require__,
            nItemHeight: _,
            nRowGap: _ = 10,
            overscan: _ = 6,
            initialOffset: _,
            onOffsetChange: _,
            measureElement: _,
          } = _,
          _ = _ + _,
          _ = (0, _._)({
            count: __webpack_require__,
            scrollMargin: _,
            estimateSize: _.useCallback(() => _, [_]),
            measureElement: _,
            overscan: _,
            initialOffset: _,
            initialRect: void 0,
            observeElementOffset: _,
            observeElementRect: _,
            onChange(_, _) {
              _?.(_.scrollOffset);
            },
          });
        return (
          _.useEffect(() => {
            (0, _.startTransition)(() => {
              _.measure();
            });
          }, [_, _]),
          _.createElement(_, {
            ..._,
            virtualizer: _,
          })
        );
      }
      function _(_) {
        const {
            nRows: _,
            nScrollMargin: __webpack_require__,
            elScrollable: _,
            nItemHeight: _,
            nRowGap: _ = 10,
            overscan: _ = 6,
            initialOffset: _,
            onOffsetChange: _,
            measureElement: _,
          } = _,
          _ = _ + _,
          _ = (0, _._)({
            count: _,
            scrollMargin: __webpack_require__ - (_?.offsetTop || 0),
            getScrollElement: () => _,
            estimateSize: _.useCallback(() => _, [_]),
            measureElement: _,
            overscan: _,
            initialRect: _
              ? void 0
              : {
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
          _.useEffect(() => {
            (0, _.startTransition)(() => {
              _.measure();
            });
          }, [_, _]),
          _.createElement(_, {
            ..._,
            virtualizer: _,
          })
        );
      }
      function _(_) {
        const {
            virtualizer: _,
            nRowGap: __webpack_require__,
            renderItem: _,
            bDynamic: _,
          } = _,
          _ = _.getVirtualItems(),
          _ = _.length ? _[0].start - _.options.scrollMargin : 0,
          _ = Math.max(0, _.getTotalSize());
        return _.createElement(
          _._,
          {
            "flow-children": "column",
            navEntryPreferPosition: _._.MAINTAIN_Y,
            style: {
              height: `${_}px`,
              width: "100%",
              position: "relative",
            },
          },
          _.createElement(
            "div",
            {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY( ${_}px )`,
              },
            },
            _.map((_) =>
              _.createElement(_, {
                key: _.key,
                virtualizer: _,
                bDynamic: _,
                idx: _.index,
                rowGap: __webpack_require__,
                renderItem: _,
              }),
            ),
          ),
        );
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
        _ = _(
          "scrollX" in _
            ? (_) => _(_[_.options.horizontal ? "scrollX" : "scrollY"], _)
            : (_) => _(_[_.options.horizontal ? "scrollLeft" : "scrollTop"], _),
        );
        const _ = () => _(!0),
          _ = () => _(!1);
        return (
          _(),
          __webpack_require__.addEventListener("scroll", _, {
            passive: !0,
          }),
          __webpack_require__.addEventListener("scrollend", _, {
            passive: !0,
          }),
          () => {
            __webpack_require__.removeEventListener("scroll", _),
              __webpack_require__.removeEventListener("scrollend", _);
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
          __webpack_require__.addEventListener("resize", _, {
            passive: !0,
          }),
          () => {
            __webpack_require__.removeEventListener("resize", _);
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
        _(__webpack_require__.getBoundingClientRect());
        const _ = _.ownerDocument.defaultView;
        if (!_?.ResizeObserver) return () => {};
        const _ = new _.ResizeObserver((_) => {
          _[0]?.borderBoxSize[0]
            ? _({
                width: _[0].borderBoxSize[0].inlineSize,
                height: _[0].borderBoxSize[0].blockSize,
              })
            : _(__webpack_require__.getBoundingClientRect());
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
      const _ = _.createContext(void 0);
      function _(_) {
        const { table: _, setColumnSizeOverride: __webpack_require__ } = _,
          _ = (0, _.useRef)(_);
        _.current = _;
        const _ = (0, _.useMemo)(
          () => ({
            table: _.current,
            setColumnSizeOverride: __webpack_require__,
          }),
          [__webpack_require__],
        );
        return _.createElement(
          _.Provider,
          {
            value: _,
          },
          _.children,
        );
      }
      const _ = _.forwardRef(function (_, _) {
        const {
            data: __webpack_require__,
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
              void 0 === _ && "accessorKey" in _ && (_ = _[_.accessorKey]),
              (_ ??= _.size),
              {
                ..._,
                size: _,
              }
            );
          }),
          _ = (0, _._)({
            data: __webpack_require__,
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
              () => ("element" === _ ? _.current : window),
              [_],
            ),
            scrollToFn: (_, _, _) =>
              "window" === _ ? (0, _._)(_, _, _) : (0, _._)(_, _, _),
            estimateSize: _.useCallback(() => _, [_]),
            overscan: _,
            initialRect: void 0,
            observeElementOffset: _,
            observeElementRect: (_, _) => ("window" === _ ? _(_, _) : _(_, _)),
            getItemKey(_) {
              const _ = _[_];
              return _(_, _.original);
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
            estimateSize: (_) =>
              _[0]?.getVisibleCells()[_].column.getSize() ?? 0,
            count: _[0]?.getVisibleCells().length ?? 0,
            overscan: 6,
            horizontal: !0,
            getScrollElement: _.useCallback(
              () => ("element" === _ ? _.current : window),
              [_],
            ),
            scrollToFn: (_, _, _) =>
              "window" === _ ? (0, _._)(_, _, _) : (0, _._)(_, _, _),
            rangeExtractor(_) {
              const _ = _[0]?.getVisibleCells() ?? [],
                _ = new Set((0, _._)(_));
              return (
                _.forEach((_, _) => {
                  _.column.getIsPinned() && __webpack_require__.add(_);
                }),
                Array.from(_).sort((_, _) => _ - _)
              );
            },
            observeElementOffset: _,
            observeElementRect: (_, _) => ("window" === _ ? _(_, _) : _(_, _)),
          });
        (0, _.useEffect)(() => {
          _.measure();
        }, [_.current]),
          (0, _.useImperativeHandle)(
            _,
            () => ({
              getData: () => _.map((_) => _.original),
              getVisibleRows: () => _,
              getState: _.getState,
              getColumns: _.getAllColumns,
              getColumnDefs: () => _,
              setColumnFilters: _.setColumnFilters,
              resetColumnFilters: _.resetColumnFilters,
              setColumnFilterFnOverride: _,
              getColumnFilterFnOverride: () => _,
              getContainerElement: () => _.current,
              getTableElement: () => _.current,
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
        for (const _ of _) {
          const _ = _[_.index];
          _?.column.getIsPinned() && (_ += _.size);
        }
        return _.createElement(
          _,
          {
            table: _,
            setColumnSizeOverride: _,
          },
          _.createElement(
            "div",
            {
              className: _,
              ref: _,
              style: {
                width: _,
                height: _,
                overflow: "element" === _ ? "auto" : void 0,
                maxWidth: "fit-content",
                scrollPadding: `${_}px 0 0 ${_}px`,
              },
            },
            _.createElement(
              "div",
              {
                role: "table",
                ref: _,
                "aria-rowcount": __webpack_require__.length,
                style: {
                  minHeight: _,
                  width: _.getTotalSize(),
                  "--virtualPos": `${_}px`,
                  ..._,
                },
              },
              _.getHeaderGroups().map((_) =>
                _.createElement(_, {
                  key: _._,
                  group: _,
                  sticky: _,
                  nHeaderHeight: _,
                }),
              ),
              _.map((_) =>
                _.createElement(_, {
                  key: _.key,
                  row: _[_.index],
                  size: _.size,
                  rowVirtualizer: _,
                  index: _.index,
                  measureRef: _.measureElement,
                  scrollContainerRef: _,
                  nItemHeight: _,
                  renderGroup: _,
                  rowEnd: _,
                }),
              ),
            ),
          ),
        );
      });
      function _(_) {
        const _ = _.getIsPinned();
        return {
          borderRight:
            "left" === _ && _.getIsLastColumn("left")
              ? "var(--fancy-table-last-pinned-border, var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
          borderLeft:
            "right" === _ && _.getIsFirstColumn("right")
              ? "var(--fancy-table-last-pinned-border,var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
          left: "left" === _ ? `${_.getStart("left")}px` : void 0,
          right: "right" === _ ? `${_.getAfter("right")}px` : void 0,
          position: _ ? "sticky" : "relative",
          minWidth: _.getSize(),
          zIndex: _ ? 1 : 0,
        };
      }
      function _(_) {
        const { group: _, sticky: __webpack_require__, nHeaderHeight: _ } = _;
        return _.createElement(
          "div",
          {
            role: "row",
            className: _()(
              _().FancyTableRow,
              _().FancyTableHeader,
              __webpack_require__ && _().StickyHeader,
            ),
          },
          _.headers.map((_, _) => {
            const _ = _.headers[_ - 1],
              _ = {},
              _ = _.column.getIsSorted();
            _ &&
              !_.column.columnDef.meta?.bDisableSortButton &&
              (_["aria-sort"] = "asc" === _ ? "ascending" : "descending");
            let _ = "div";
            return (
              _.column.getCanSort() &&
                !_.column.columnDef.meta?.bDisableSortButton &&
                ((_ = "button"),
                (_.onClick = _.column.getToggleSortingHandler())),
              _.column.columnDef.meta?.strHeaderTooltip &&
                (_.title = _.column.columnDef.meta?.strHeaderTooltip),
              _.createElement(_, {
                key: _._,
                header: _,
                prevHeader: _,
                HeaderElement: _,
                nHeaderHeight: _,
                sortDirection: _,
                conditionalProps: _,
              })
            );
          }),
        );
      }
      const _ = _.memo(function (_) {
        const {
          row: _,
          size: __webpack_require__,
          rowVirtualizer: _,
          measureRef: _,
          index: _,
          nItemHeight: _,
          renderGroup: _,
        } = _;
        return _.createElement(
          "div",
          {
            role: "row",
            className: _()(
              _().FancyTableRow,
              _.getCanExpand() && _().ExpandableRow,
            ),
            style: {
              minHeight: _.getCanExpand() ? void 0 : `${__webpack_require__}px`,
              transform: "translateY(var(--virtualPos))",
            },
            "data-even": _ % 2 == 0,
            "data-index": _,
            ref: _,
          },
          _.createElement(_, {
            row: _,
            rowVirtualizer: _,
            nItemHeight: _,
            renderGroup: _,
          }),
        );
      });
      function _(_) {
        const {
          row: _,
          rowVirtualizer: __webpack_require__,
          renderGroup: _,
        } = _;
        if (_.getCanExpand()) {
          const _ = _ ?? (() => _.groupingValue);
          return _.createElement(
            "button",
            {
              className: _().RowGroup,
              "aria-expanded": _.getIsExpanded(),
              onClick: _.getToggleExpandedHandler(),
            },
            _.createElement("div", {
              className: _().GroupExpandIndicator,
            }),
            _(_),
          );
        }
        const _ = __webpack_require__.getVirtualItems(),
          _ = _.getVisibleCells();
        let _,
          _ = 0;
        return _.createElement(
          _.Fragment,
          null,
          _.map((_) => {
            const _ = _[_.index],
              _ = _.column.getIsPinned();
            return (
              _ ? (_ += _.size) : void 0 === _ && (_ = _.start),
              _.createElement(_, {
                cell: _,
                key: _._,
                rowVirtualizer: __webpack_require__,
                index: _.index,
                transform: _ ? void 0 : `translateX(${_ - _}px)`,
              })
            );
          }),
        );
      }
      function _(_, _) {
        const _ = (0, _.useContext)(_),
          _ = _.columnDef.meta?.bGrowToFit,
          _ = _._,
          _ = _ ? _.getSize() : 0,
          _ = _.getIsSorted();
        (0, _.useLayoutEffect)(() => {
          if (!_) return;
          if (!_.current) return;
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
            __webpack_require__.setColumnSizeOverride((_) =>
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
            prevHeader: __webpack_require__,
            HeaderElement: _,
            nHeaderHeight: _,
            sortDirection: _,
            conditionalProps: _,
          } = _,
          _ = (0, _.useRef)(null);
        return (
          _(_.column, _),
          _.createElement(
            _,
            {
              role: "columnheader",
              key: _._,
              ref: _,
              "data-pinned": !!_.column.getIsPinned(),
              className: _()(
                _().ColumnHeader,
                "button" === _ && _().SortButton,
                _.column.columnDef.meta?.headerClassname,
              ),
              style: {
                width: `var(--header-${_._}-size)`,
                height: void 0 !== _ ? `${_}px` : void 0,
                ..._(_.column),
              },
              ..._,
            },
            __webpack_require__?.column.getCanResize() &&
              _.createElement("div", {
                role: "presentation",
                onDoubleClick: () => __webpack_require__.column.resetSize(),
                onMouseDown: __webpack_require__.getResizeHandler(),
                onTouchStart: __webpack_require__.getResizeHandler(),
                onClick: (_) => _.stopPropagation(),
                className: _()(_().ResizeHandle, _().PrevResizeHandle),
              }),
            _.isPlaceholder
              ? null
              : (0, _._)(_.column.columnDef.header, _.getContext()),
            _ &&
              !_.column.columnDef.meta?.bDisableSortButton &&
              _.createElement("div", {
                className: _().SortIndicator,
              }),
            _.column.getCanResize() &&
              _.createElement("div", {
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
          )
        );
      }
      function _(_) {
        const {
            cell: _,
            rowVirtualizer: __webpack_require__,
            index: _,
            transform: _,
          } = _,
          _ = _.useRef(null),
          _ = (0, _._)(_, __webpack_require__.measure);
        return (
          _(_.column, _),
          _.createElement(
            "div",
            {
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
            },
            _.createElement(_, {
              CellComponent: _.column.columnDef.cell,
              context: _.getContext(),
            }),
          )
        );
      }
      const _ = _.memo(
        function (_) {
          return (0, _._)(_.CellComponent, _.context);
        },
        (_, _) => _.context.getValue() === _.context.getValue(),
      );
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      class _ {
        static ParseCSVFile(_) {
          return new Promise((_, _) => {
            const _ = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: _,
              error: (_) =>
                __webpack_require__({
                  errors: [_],
                }),
            };
            _().parse(_, _);
          });
        }
        static ReadFile(_) {
          return new Promise((_, _) => {
            const _ = new FileReader();
            (_.onload = (_) => _(_.result)), _.readAsText(_);
          });
        }
        static WriteFile(_, _) {
          let _ = document.createElement("a");
          if (navigator.msSaveBlob) navigator.msSaveBlob(_, _);
          else {
            const _ = window.URL.createObjectURL(_);
            _.href = _;
          }
          __webpack_require__.setAttribute("download", _),
            __webpack_require__.click();
          try {
            document.removeChild(_);
          } catch (_) {}
        }
        static WriteCSVToFile(_, _) {
          const _ = _().unparse(_, {
            header: !0,
          });
          _.WriteFile(
            new Blob([_], {
              type: "text/csv:charset=utf-8;",
            }),
            _,
          );
        }
        static m_DummyValueForQuestionHack = 0;
        static WriteXMLToFile(_, _) {
          const _ = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let _ =
            "<" +
            __webpack_require__() +
            'xml version="1.0" encoding="UTF-8" ' +
            __webpack_require__() +
            ">\n";
          (_ += new XMLSerializer().serializeToString(_)),
            _.WriteFile(
              new Blob([_], {
                type: "application/xml:charset=utf-8;",
              }),
              _,
            );
        }
      }
    },
  },
]);
