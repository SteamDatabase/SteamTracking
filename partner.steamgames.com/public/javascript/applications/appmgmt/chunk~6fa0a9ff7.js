/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6700],
  {
    31718: (e) => {
      e.exports = {
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
    66051: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => y });
      var r = n(8871),
        o = n(67796),
        i = n(16666),
        l = n(92148),
        a = n(59366),
        s = n(64238),
        c = n.n(s),
        u = n(90626),
        d = n(31718),
        m = n.n(d),
        g = n(76217),
        f = n(23310),
        p = n(94104);
      const h = u.memo(function (e) {
        const {
            virtualizer: t,
            bDynamic: n,
            idx: r,
            rowGap: o,
            renderItem: i,
          } = e,
          l = u.useCallback(
            (e, n, o) => (t.scrollToIndex(r, { align: "center" }), !0),
            [t, r],
          );
        return u.createElement(
          g.Z,
          {
            ref: n ? t.measureElement : void 0,
            "data-index": r,
            fnScrollIntoViewHandler: l,
            scrollIntoViewWhenChildFocused: "force",
            style: { width: "100%", paddingBottom: o },
          },
          i(r),
        );
      });
      u.forwardRef(function (e, t) {
        const {
            nRows: n,
            nItemHeight: o,
            nRowGap: i,
            overscan: l,
            renderItem: a,
            bDynamic: s,
            measureElement: c,
            className: d,
            forceVirtualizeType: m,
            initialOffset: f,
            onOffsetChange: h,
            ...b
          } = e,
          [E, C] = (0, u.useState)(m),
          [S, z] = u.useState(),
          [x, R] = u.useState(),
          y = u.useCallback(
            (e) => {
              if (!e || "window" == m) return;
              const t = (0, p._f)(e, "y");
              (0, u.startTransition)(() => {
                z(t || void 0),
                  R(e.offsetTop),
                  m || C(t ? "element" : "window");
              });
            },
            [m],
          ),
          H = (0, r.Ue)(y, t),
          I = {
            nRows: n,
            nItemHeight: o,
            nRowGap: i,
            overscan: l,
            renderItem: a,
            bDynamic: s,
            measureElement: c,
            forceVirtualizeType: m,
            initialOffset: f,
            onOffsetChange: h,
          };
        return u.createElement(
          g.Z,
          { className: d, ref: H, ...b },
          u.createElement(
            u.Suspense,
            null,
            "element" === E &&
              u.createElement(w, {
                ...I,
                nScrollMargin: x || 0,
                elScrollable: S,
              }),
            "window" === E && u.createElement(v, { ...I, nScrollMargin: x }),
          ),
        );
      });
      function v(e) {
        const {
            nScrollMargin: t,
            nRows: n,
            nItemHeight: r,
            nRowGap: o = 10,
            overscan: i = 6,
            initialOffset: a,
            onOffsetChange: s,
            measureElement: c,
          } = e,
          d = r + o,
          m = (0, l.XW)({
            count: n,
            scrollMargin: t,
            estimateSize: u.useCallback(() => d, [d]),
            measureElement: c,
            overscan: i,
            initialOffset: a,
            initialRect: void 0,
            observeElementOffset: C,
            observeElementRect: S,
            onChange(e, t) {
              s?.(e.scrollOffset);
            },
          });
        return (
          u.useEffect(() => {
            (0, u.startTransition)(() => {
              m.measure();
            });
          }, [m, d]),
          u.createElement(b, { ...e, virtualizer: m })
        );
      }
      function w(e) {
        const {
            nRows: t,
            nScrollMargin: n,
            elScrollable: r,
            nItemHeight: o,
            nRowGap: i = 10,
            overscan: a = 6,
            initialOffset: s,
            onOffsetChange: c,
            measureElement: d,
          } = e,
          m = o + i,
          g = (0, l.Te)({
            count: t,
            scrollMargin: n - (r?.offsetTop || 0),
            getScrollElement: () => r,
            estimateSize: u.useCallback(() => m, [m]),
            measureElement: d,
            overscan: a,
            initialRect: r ? void 0 : { height: 1e3, width: 1e3 },
            initialOffset: s,
            observeElementOffset: C,
            observeElementRect: z,
            onChange(e, t) {
              c?.(e.scrollOffset);
            },
          });
        return (
          u.useEffect(() => {
            (0, u.startTransition)(() => {
              g.measure();
            });
          }, [g, m]),
          u.createElement(b, { ...e, virtualizer: g })
        );
      }
      function b(e) {
        const { virtualizer: t, nRowGap: n, renderItem: r, bDynamic: o } = e,
          i = t.getVirtualItems(),
          l = i.length ? i[0].start - t.options.scrollMargin : 0,
          a = Math.max(0, t.getTotalSize());
        return u.createElement(
          g.Z,
          {
            "flow-children": "column",
            navEntryPreferPosition: f.iU.MAINTAIN_Y,
            style: { height: `${a}px`, width: "100%", position: "relative" },
          },
          u.createElement(
            "div",
            {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY( ${l}px )`,
              },
            },
            i.map((e) =>
              u.createElement(h, {
                key: e.key,
                virtualizer: t,
                bDynamic: o,
                idx: e.index,
                rowGap: n,
                renderItem: r,
              }),
            ),
          ),
        );
      }
      function E(e) {
        return (...t) => {
          queueMicrotask(() => {
            (0, u.startTransition)(() => {
              e(...t);
            });
          });
        };
      }
      function C(e, t) {
        const n = e.scrollElement;
        if (!n) return;
        let r;
        r = E(
          "scrollX" in n
            ? (r) => t(n[e.options.horizontal ? "scrollX" : "scrollY"], r)
            : (r) => t(n[e.options.horizontal ? "scrollLeft" : "scrollTop"], r),
        );
        const o = () => r(!0),
          i = () => r(!1);
        return (
          i(),
          n.addEventListener("scroll", o, { passive: !0 }),
          n.addEventListener("scrollend", i, { passive: !0 }),
          () => {
            n.removeEventListener("scroll", o),
              n.removeEventListener("scrollend", i);
          }
        );
      }
      function S(e, t) {
        const n = e.scrollElement;
        if (!n) return;
        const r = E(() => t({ width: n.innerWidth, height: n.innerHeight }));
        return (
          r(),
          n.addEventListener("resize", r, { passive: !0 }),
          () => {
            n.removeEventListener("resize", r);
          }
        );
      }
      function z(e, t) {
        const n = e.scrollElement;
        if (!n) return;
        const r = E((e) =>
          t({ width: Math.round(e.width), height: Math.round(e.height) }),
        );
        r(n.getBoundingClientRect());
        const o = n.ownerDocument.defaultView;
        if (!o?.ResizeObserver) return () => {};
        const i = new o.ResizeObserver((e) => {
          e[0]?.borderBoxSize[0]
            ? r({
                width: e[0].borderBoxSize[0].inlineSize,
                height: e[0].borderBoxSize[0].blockSize,
              })
            : r(n.getBoundingClientRect());
        });
        return (
          i.observe(n, { box: "border-box" }),
          () => {
            i.unobserve(n);
          }
        );
      }
      const x = u.createContext(void 0);
      function R(e) {
        const { table: t, setColumnSizeOverride: n } = e,
          r = (0, u.useRef)(t);
        r.current = t;
        const o = (0, u.useMemo)(
          () => ({ table: r.current, setColumnSizeOverride: n }),
          [n],
        );
        return u.createElement(x.Provider, { value: o }, e.children);
      }
      const y = u.forwardRef(function (e, t) {
        const {
            data: n,
            columns: r,
            className: s,
            width: c,
            height: d,
            nScrollMargin: m,
            nItemHeight: g,
            nHeaderHeight: f,
            overscan: p = 6,
            stickyHeader: h,
            getRowKey: v,
            initialSorting: w,
            initialColumnFilters: b,
            initialGrouping: E,
            initialExpanded: x,
            initialColumnPinning: y,
            initialColumnVisibility: H,
            onGroupingChange: F,
            onVisibleRowsChange: k,
            renderGroup: V,
            virtualizeType: D = "element",
          } = e,
          M = (0, u.useRef)(null),
          [O, G] = (0, u.useState)({}),
          [N, P] = (0, u.useState)({}),
          L = r.map((e) =>
            "accessorKey" in e
              ? { ...e, filterFn: O[e.accessorKey] ?? e.filterFn }
              : e,
          ),
          B = L.map((e) => {
            let t = N[e.id];
            return (
              void 0 === t && "accessorKey" in e && (t = N[e.accessorKey]),
              (t ??= e.size),
              { ...e, size: t }
            );
          }),
          _ = (0, o.N4)({
            data: n,
            columns: B,
            defaultColumn: { minSize: 60, maxSize: 800 },
            initialState: {
              sorting: w,
              grouping: E ?? [],
              expanded: x,
              columnPinning: y ?? {},
              columnFilters: b,
              columnVisibility: H,
            },
            getCoreRowModel: (0, i.HT)(),
            getSortedRowModel: (0, i.h5)(),
            getFilteredRowModel: (0, i.hM)(),
            getGroupedRowModel: (0, i.cU)(),
            columnResizeMode: "onChange",
          }),
          { rows: $, flatRows: W } = _.getRowModel(),
          A = $.flatMap((e) => (e.getIsExpanded() ? [e, ...e.subRows] : e)),
          X = _.getState().grouping;
        (0, u.useEffect)(() => {
          F?.(X);
        }, [F, X]),
          (0, u.useEffect)(() => {
            k?.(A);
          }, [k, A.length]);
        const K = (0, l.Te)({
            count: A.length,
            scrollMargin: m,
            getScrollElement: u.useCallback(
              () => ("element" === D ? J.current : window),
              [D],
            ),
            scrollToFn: (e, t, n) =>
              "window" === D ? (0, a.e8)(e, t, n) : (0, a.Ox)(e, t, n),
            estimateSize: u.useCallback(() => g, [g]),
            overscan: p,
            initialRect: void 0,
            observeElementOffset: C,
            observeElementRect: (e, t) => ("window" === D ? S(e, t) : z(e, t)),
            getItemKey(e) {
              const t = A[e];
              return v(e, t.original);
            },
          }),
          U = (0, u.useRef)(0),
          Z = u.useMemo(() => {
            const e = _.getFlatHeaders(),
              t = {};
            for (let n = 0; n < e.length; n++) {
              const r = e[n];
              (t[`--header-${r.id}-size`] = `${r.getSize()}px`),
                (t[`--col-${r.column.id}-size`] = `${r.column.getSize()}px`);
            }
            return (U.current += 1), t;
          }, [_.getState().columnSizingInfo, _.getState().columnSizing, r]);
        u.useEffect(() => {
          (0, u.startTransition)(() => {
            K.measure();
          });
        }, [K, g]);
        const q = K.getVirtualItems(),
          Q = q[0]?.start ?? 0,
          Y = K.getTotalSize(),
          j = (0, l.Te)({
            estimateSize: (e) =>
              A[0]?.getVisibleCells()[e].column.getSize() ?? 0,
            count: A[0]?.getVisibleCells().length ?? 0,
            overscan: 6,
            horizontal: !0,
            getScrollElement: u.useCallback(
              () => ("element" === D ? J.current : window),
              [D],
            ),
            scrollToFn: (e, t, n) =>
              "window" === D ? (0, a.e8)(e, t, n) : (0, a.Ox)(e, t, n),
            rangeExtractor(e) {
              const t = A[0]?.getVisibleCells() ?? [],
                n = new Set((0, a.vp)(e));
              return (
                t.forEach((e, t) => {
                  e.column.getIsPinned() && n.add(t);
                }),
                Array.from(n).sort((e, t) => e - t)
              );
            },
            observeElementOffset: C,
            observeElementRect: (e, t) => ("window" === D ? S(e, t) : z(e, t)),
          });
        (0, u.useEffect)(() => {
          j.measure();
        }, [U.current]),
          (0, u.useImperativeHandle)(
            t,
            () => ({
              getData: () => W.map((e) => e.original),
              getVisibleRows: () => A,
              getState: _.getState,
              getColumns: _.getAllColumns,
              getColumnDefs: () => L,
              setColumnFilters: _.setColumnFilters,
              resetColumnFilters: _.resetColumnFilters,
              setColumnFilterFnOverride: G,
              getColumnFilterFnOverride: () => O,
              getContainerElement: () => J.current,
              getTableElement: () => M.current,
              scrollToColumn(e, t) {
                j.scrollToIndex(e.getIndex(), t);
              },
            }),
            [
              W,
              A,
              _.setColumnFilters,
              _.resetColumnFilters,
              _.getState,
              _.getAllColumns,
              O,
              L,
              j,
            ],
          );
        const J = (0, u.useRef)(null),
          ee = h ? (f ?? 0) : 0;
        let te = 0;
        const ne = A[0]?.getVisibleCells(),
          re = j.getVirtualItems(),
          oe = re[re.length - 1]?.end;
        for (const e of re) {
          const t = ne[e.index];
          t?.column.getIsPinned() && (te += e.size);
        }
        return u.createElement(
          R,
          { table: _, setColumnSizeOverride: P },
          u.createElement(
            "div",
            {
              className: s,
              ref: J,
              style: {
                width: c,
                height: d,
                overflow: "element" === D ? "auto" : void 0,
                maxWidth: "fit-content",
                scrollPadding: `${ee}px 0 0 ${te}px`,
              },
            },
            u.createElement(
              "div",
              {
                role: "table",
                ref: M,
                "aria-rowcount": n.length,
                style: {
                  minHeight: Y,
                  width: _.getTotalSize(),
                  "--virtualPos": `${Q}px`,
                  ...Z,
                },
              },
              _.getHeaderGroups().map((e) =>
                u.createElement(I, {
                  key: e.id,
                  group: e,
                  sticky: h,
                  nHeaderHeight: f,
                }),
              ),
              q.map((e) =>
                u.createElement(T, {
                  key: e.key,
                  row: A[e.index],
                  size: e.size,
                  rowVirtualizer: j,
                  index: e.index,
                  measureRef: K.measureElement,
                  scrollContainerRef: J,
                  nItemHeight: g,
                  renderGroup: V,
                  rowEnd: oe,
                }),
              ),
            ),
          ),
        );
      });
      function H(e) {
        const t = e.getIsPinned();
        return {
          borderRight:
            "left" === t && e.getIsLastColumn("left")
              ? "var(--fancy-table-last-pinned-border, var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
          borderLeft:
            "right" === t && e.getIsFirstColumn("right")
              ? "var(--fancy-table-last-pinned-border,var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
          left: "left" === t ? `${e.getStart("left")}px` : void 0,
          right: "right" === t ? `${e.getAfter("right")}px` : void 0,
          position: t ? "sticky" : "relative",
          minWidth: e.getSize(),
          zIndex: t ? 1 : 0,
        };
      }
      function I(e) {
        const { group: t, sticky: n, nHeaderHeight: r } = e;
        return u.createElement(
          "div",
          {
            role: "row",
            className: c()(
              m().FancyTableRow,
              m().FancyTableHeader,
              n && m().StickyHeader,
            ),
          },
          t.headers.map((e, n) => {
            const o = t.headers[n - 1],
              i = {},
              l = e.column.getIsSorted();
            l &&
              !e.column.columnDef.meta?.bDisableSortButton &&
              (i["aria-sort"] = "asc" === l ? "ascending" : "descending");
            let a = "div";
            return (
              e.column.getCanSort() &&
                !e.column.columnDef.meta?.bDisableSortButton &&
                ((a = "button"),
                (i.onClick = e.column.getToggleSortingHandler())),
              e.column.columnDef.meta?.strHeaderTooltip &&
                (i.title = e.column.columnDef.meta?.strHeaderTooltip),
              u.createElement(V, {
                key: e.id,
                header: e,
                prevHeader: o,
                HeaderElement: a,
                nHeaderHeight: r,
                sortDirection: l,
                conditionalProps: i,
              })
            );
          }),
        );
      }
      const T = u.memo(function (e) {
        const {
          row: t,
          size: n,
          rowVirtualizer: r,
          measureRef: o,
          index: i,
          nItemHeight: l,
          renderGroup: a,
        } = e;
        return u.createElement(
          "div",
          {
            role: "row",
            className: c()(
              m().FancyTableRow,
              t.getCanExpand() && m().ExpandableRow,
            ),
            style: {
              minHeight: t.getCanExpand() ? void 0 : `${n}px`,
              transform: "translateY(var(--virtualPos))",
            },
            "data-even": i % 2 == 0,
            "data-index": i,
            ref: o,
          },
          u.createElement(F, {
            row: t,
            rowVirtualizer: r,
            nItemHeight: l,
            renderGroup: a,
          }),
        );
      });
      function F(e) {
        const { row: t, rowVirtualizer: n, renderGroup: r } = e;
        if (t.getCanExpand()) {
          const e = r ?? (() => t.groupingValue);
          return u.createElement(
            "button",
            {
              className: m().RowGroup,
              "aria-expanded": t.getIsExpanded(),
              onClick: t.getToggleExpandedHandler(),
            },
            u.createElement("div", { className: m().GroupExpandIndicator }),
            e(t),
          );
        }
        const o = n.getVirtualItems(),
          i = t.getVisibleCells();
        let l,
          a = 0;
        return u.createElement(
          u.Fragment,
          null,
          o.map((e) => {
            const t = i[e.index],
              r = t.column.getIsPinned();
            return (
              r ? (a += e.size) : void 0 === l && (l = e.start),
              u.createElement(D, {
                cell: t,
                key: t.id,
                rowVirtualizer: n,
                index: e.index,
                transform: r ? void 0 : `translateX(${l - a}px)`,
              })
            );
          }),
        );
      }
      function k(e, t) {
        const n = (0, u.useContext)(x),
          r = e.columnDef.meta?.bGrowToFit,
          o = e.id,
          i = r ? e.getSize() : 0,
          l = e.getIsSorted();
        (0, u.useLayoutEffect)(() => {
          if (!r) return;
          if (!t.current) return;
          const e = t.current?.scrollWidth;
          if (!e) return;
          const l = t.current.getBoundingClientRect().width,
            a = window.getComputedStyle(t.current);
          let s = e;
          if (e > l) {
            if (a.paddingLeft) {
              let e = parseInt(a.paddingLeft);
              isNaN(e) || (s += e);
            }
            if (a.paddingRight) {
              let e = parseInt(a.paddingRight);
              isNaN(e) || (s += e);
            }
          }
          s > i &&
            n.setColumnSizeOverride((e) => (e[o] > s ? e : { ...e, [o]: s }));
        }, [r, o, n, i, t, l]);
      }
      function V(e) {
        const {
            header: t,
            prevHeader: n,
            HeaderElement: r,
            nHeaderHeight: i,
            sortDirection: l,
            conditionalProps: a,
          } = e,
          s = (0, u.useRef)(null);
        return (
          k(t.column, s),
          u.createElement(
            r,
            {
              role: "columnheader",
              key: t.id,
              ref: s,
              "data-pinned": !!t.column.getIsPinned(),
              className: c()(
                m().ColumnHeader,
                "button" === r && m().SortButton,
                t.column.columnDef.meta?.headerClassname,
              ),
              style: {
                width: `var(--header-${t.id}-size)`,
                height: void 0 !== i ? `${i}px` : void 0,
                ...H(t.column),
              },
              ...a,
            },
            n?.column.getCanResize() &&
              u.createElement("div", {
                role: "presentation",
                onDoubleClick: () => n.column.resetSize(),
                onMouseDown: n.getResizeHandler(),
                onTouchStart: n.getResizeHandler(),
                onClick: (e) => e.stopPropagation(),
                className: c()(m().ResizeHandle, m().PrevResizeHandle),
              }),
            t.isPlaceholder
              ? null
              : (0, o.Kv)(t.column.columnDef.header, t.getContext()),
            l &&
              !t.column.columnDef.meta?.bDisableSortButton &&
              u.createElement("div", { className: m().SortIndicator }),
            t.column.getCanResize() &&
              u.createElement("div", {
                role: "presentation",
                onDoubleClick: () => t.column.resetSize(),
                onMouseDown: t.getResizeHandler(),
                onTouchStart: t.getResizeHandler(),
                onClick: (e) => e.stopPropagation(),
                className: c()(
                  m().ResizeHandle,
                  t.column.getIsResizing() && m().IsResizing,
                ),
              }),
          )
        );
      }
      function D(e) {
        const { cell: t, rowVirtualizer: n, index: o, transform: i } = e,
          l = u.useRef(null),
          a = (0, r.XB)(l, n.measure);
        return (
          k(t.column, l),
          u.createElement(
            "div",
            {
              className: c()(
                m().FancyTableCell,
                t.column.columnDef.meta?.cellClassname,
              ),
              "data-index": o,
              "data-table-column-id": t.column.id,
              ref: a,
              style: {
                width: `var(--col-${t.column.id}-size)`,
                transform: i,
                ...H(t.column),
              },
            },
            u.createElement(M, {
              CellComponent: t.column.columnDef.cell,
              context: t.getContext(),
            }),
          )
        );
      }
      const M = u.memo(
        function (e) {
          return (0, o.Kv)(e.CellComponent, e.context);
        },
        (e, t) => e.context.getValue() === t.context.getValue(),
      );
    },
    9161: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => i });
      var r = n(40323),
        o = n.n(r);
      class i {
        static ParseCSVFile(e) {
          return new Promise((t, n) => {
            const r = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: t,
              error: (e) => n({ errors: [e] }),
            };
            o().parse(e, r);
          });
        }
        static ReadFile(e) {
          return new Promise((t, n) => {
            const r = new FileReader();
            (r.onload = (e) => t(r.result)), r.readAsText(e);
          });
        }
        static WriteFile(e, t) {
          let n = document.createElement("a");
          if (navigator.msSaveBlob) navigator.msSaveBlob(e, t);
          else {
            const t = window.URL.createObjectURL(e);
            n.href = t;
          }
          n.setAttribute("download", t), n.click();
          try {
            document.removeChild(n);
          } catch (e) {}
        }
        static WriteCSVToFile(e, t) {
          const n = o().unparse(e, { header: !0 });
          i.WriteFile(new Blob([n], { type: "text/csv:charset=utf-8;" }), t);
        }
        static m_DummyValueForQuestionHack = 0;
        static WriteXMLToFile(e, t) {
          const n = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let r =
            "<" + n() + 'xml version="1.0" encoding="UTF-8" ' + n() + ">\n";
          (r += new XMLSerializer().serializeToString(e)),
            i.WriteFile(
              new Blob([r], { type: "application/xml:charset=utf-8;" }),
              t,
            );
        }
      }
    },
  },
]);
