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
      n.d(t, { k: () => z });
      var r = n(67796),
        o = n(16666),
        l = n(92148),
        i = n(59366),
        a = n(64238),
        s = n.n(a),
        c = n(90626),
        u = n(31718),
        m = n.n(u),
        d = n(76217),
        g = n(23310),
        f = n(8871),
        p = n(94104);
      const h = c.memo(function (e) {
        const {
            virtualizer: t,
            bDynamic: n,
            idx: r,
            rowGap: o,
            renderItem: l,
          } = e,
          i = c.useCallback(
            (e, n, o) => (t.scrollToIndex(r, { align: "center" }), !0),
            [t, r],
          );
        return c.createElement(
          d.Z,
          {
            ref: n ? t.measureElement : void 0,
            "data-index": r,
            fnScrollIntoViewHandler: i,
            scrollIntoViewWhenChildFocused: "force",
            style: { width: "100%", paddingBottom: o },
          },
          l(r),
        );
      });
      c.forwardRef(function (e, t) {
        const {
            nRows: n,
            nItemHeight: r,
            nRowGap: o,
            overscan: l,
            renderItem: i,
            bDynamic: a,
            className: s,
            forceVirtualizeType: u,
            initialOffset: m,
            onOffsetChange: g,
            ...h
          } = e,
          [w, C] = (0, c.useState)(u),
          [E, S] = c.useState(),
          [x, z] = c.useState(),
          R = c.useCallback(
            (e) => {
              if (!e || "window" == u) return;
              const t = (0, p._f)(e, "y");
              (0, c.startTransition)(() => {
                S(t || void 0),
                  z(e.offsetTop),
                  u || C(t ? "element" : "window");
              });
            },
            [u],
          ),
          y = (0, f.Ue)(R, t),
          H = {
            nRows: n,
            nItemHeight: r,
            nRowGap: o,
            overscan: l,
            renderItem: i,
            bDynamic: a,
            forceVirtualizeType: u,
            initialOffset: m,
            onOffsetChange: g,
          };
        return c.createElement(
          d.Z,
          { className: s, ref: y, ...h },
          c.createElement(
            c.Suspense,
            null,
            "element" === w &&
              c.createElement(b, {
                ...H,
                nScrollMargin: x || 0,
                elScrollable: E,
              }),
            "window" === w && c.createElement(v, { ...H, nScrollMargin: x }),
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
          } = e,
          u = r + o,
          m = (0, l.XW)({
            count: n,
            scrollMargin: t,
            estimateSize: c.useCallback(() => u, [u]),
            overscan: i,
            initialOffset: a,
            initialRect: void 0,
            observeElementOffset: E,
            observeElementRect: S,
            onChange(e, t) {
              s?.(e.scrollOffset);
            },
          });
        return (
          c.useEffect(() => {
            (0, c.startTransition)(() => {
              m.measure();
            });
          }, [m, u]),
          c.createElement(w, { ...e, virtualizer: m })
        );
      }
      function b(e) {
        const {
            nRows: t,
            nScrollMargin: n,
            elScrollable: r,
            nItemHeight: o,
            nRowGap: i = 10,
            overscan: a = 6,
            initialOffset: s,
            onOffsetChange: u,
          } = e,
          m = o + i,
          d = (0, l.Te)({
            count: t,
            scrollMargin: n - (r?.offsetTop || 0),
            getScrollElement: () => r,
            estimateSize: c.useCallback(() => m, [m]),
            overscan: a,
            initialRect: r ? void 0 : { height: 1e3, width: 1e3 },
            initialOffset: s,
            observeElementOffset: E,
            observeElementRect: x,
            onChange(e, t) {
              u?.(e.scrollOffset);
            },
          });
        return (
          c.useEffect(() => {
            (0, c.startTransition)(() => {
              d.measure();
            });
          }, [d, m]),
          c.createElement(w, { ...e, virtualizer: d })
        );
      }
      function w(e) {
        const { virtualizer: t, nRowGap: n, renderItem: r, bDynamic: o } = e,
          l = t.getVirtualItems(),
          i = l.length ? l[0].start - t.options.scrollMargin : 0,
          a = Math.max(0, t.getTotalSize());
        return c.createElement(
          d.Z,
          {
            "flow-children": "column",
            navEntryPreferPosition: g.iU.MAINTAIN_Y,
            style: { height: `${a}px`, width: "100%", position: "relative" },
          },
          c.createElement(
            "div",
            {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY( ${i}px )`,
              },
            },
            l.map((e) =>
              c.createElement(h, {
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
      function C(e) {
        return (...t) => {
          queueMicrotask(() => {
            (0, c.startTransition)(() => {
              e(...t);
            });
          });
        };
      }
      function E(e, t) {
        const n = e.scrollElement;
        if (!n) return;
        let r;
        r = C(
          "scrollX" in n
            ? (r) => t(n[e.options.horizontal ? "scrollX" : "scrollY"], r)
            : (r) => t(n[e.options.horizontal ? "scrollLeft" : "scrollTop"], r),
        );
        const o = () => r(!0),
          l = () => r(!1);
        return (
          l(),
          n.addEventListener("scroll", o, { passive: !0 }),
          n.addEventListener("scrollend", l, { passive: !0 }),
          () => {
            n.removeEventListener("scroll", o),
              n.removeEventListener("scrollend", l);
          }
        );
      }
      function S(e, t) {
        const n = e.scrollElement;
        if (!n) return;
        const r = C(() => t({ width: n.innerWidth, height: n.innerHeight }));
        return (
          r(),
          n.addEventListener("resize", r, { passive: !0 }),
          () => {
            n.removeEventListener("resize", r);
          }
        );
      }
      function x(e, t) {
        const n = e.scrollElement;
        if (!n) return;
        const r = C((e) =>
          t({ width: Math.round(e.width), height: Math.round(e.height) }),
        );
        r(n.getBoundingClientRect());
        const o = n.ownerDocument.defaultView;
        if (!o?.ResizeObserver) return () => {};
        const l = new o.ResizeObserver((e) => {
          e[0]?.borderBoxSize[0]
            ? r({
                width: e[0].borderBoxSize[0].inlineSize,
                height: e[0].borderBoxSize[0].blockSize,
              })
            : r(n.getBoundingClientRect());
        });
        return (
          l.observe(n, { box: "border-box" }),
          () => {
            l.unobserve(n);
          }
        );
      }
      const z = c.forwardRef(function (e, t) {
        const {
            data: n,
            columns: a,
            className: s,
            width: u,
            height: m,
            nScrollMargin: d,
            nItemHeight: g,
            nHeaderHeight: f,
            overscan: p = 6,
            stickyHeader: h,
            initialSorting: v,
            initialColumnFilters: b,
            initialGrouping: w,
            initialExpanded: C,
            initialColumnPinning: S,
            initialColumnVisibility: z,
            onGroupingChange: R,
            onVisibleRowsChange: I,
            renderGroup: T,
          } = e,
          F = (0, c.useRef)(null),
          [k, V] = (0, c.useState)({}),
          M = a.map((e) =>
            "accessorKey" in e
              ? { ...e, filterFn: k[e.accessorKey] ?? e.filterFn }
              : e,
          ),
          D = (0, r.N4)({
            data: n,
            columns: M,
            defaultColumn: { minSize: 60, maxSize: 800 },
            initialState: {
              sorting: v,
              grouping: w ?? [],
              expanded: C,
              columnPinning: S ?? {},
              columnFilters: b,
              columnVisibility: z,
            },
            getCoreRowModel: (0, o.HT)(),
            getSortedRowModel: (0, o.h5)(),
            getFilteredRowModel: (0, o.hM)(),
            getGroupedRowModel: (0, o.cU)(),
            columnResizeMode: "onChange",
          }),
          { rows: O, flatRows: G } = D.getRowModel(),
          P = O.flatMap((e) => (e.getIsExpanded() ? [e, ...e.subRows] : e)),
          N = D.getState().grouping;
        (0, c.useEffect)(() => {
          R?.(N);
        }, [R, N]),
          (0, c.useEffect)(() => {
            I?.(P);
          }, [I, P.length]);
        const _ = (0, l.Te)({
            count: P.length,
            scrollMargin: d,
            getScrollElement: c.useCallback(() => X.current, []),
            estimateSize: c.useCallback(() => g, [g]),
            overscan: p,
            initialRect: void 0,
            observeElementOffset: E,
            observeElementRect: x,
          }),
          B = (0, c.useRef)(0),
          L = c.useMemo(() => {
            const e = D.getFlatHeaders(),
              t = {};
            for (let n = 0; n < e.length; n++) {
              const r = e[n];
              (t[`--header-${r.id}-size`] = `${r.getSize()}px`),
                (t[`--col-${r.column.id}-size`] = `${r.column.getSize()}px`);
            }
            return (B.current += 1), t;
          }, [D.getState().columnSizingInfo, D.getState().columnSizing, a]);
        c.useEffect(() => {
          (0, c.startTransition)(() => {
            _.measure();
          });
        }, [_, g]);
        const $ = _.getVirtualItems(),
          A = $[0]?.start ?? 0,
          W = _.getTotalSize(),
          U = (0, l.Te)({
            estimateSize: (e) =>
              P[0]?.getVisibleCells()[e].column.getSize() ?? 0,
            count: P[0]?.getVisibleCells().length ?? 0,
            overscan: 6,
            horizontal: !0,
            getScrollElement: () => X.current,
            rangeExtractor(e) {
              const t = P[0]?.getVisibleCells() ?? [],
                n = new Set((0, i.vp)(e));
              return (
                t.forEach((e, t) => {
                  e.column.getIsPinned() && n.add(t);
                }),
                Array.from(n).sort((e, t) => e - t)
              );
            },
            observeElementOffset: E,
            observeElementRect: x,
          });
        (0, c.useEffect)(() => {
          U.measure();
        }, [B.current]),
          (0, c.useImperativeHandle)(
            t,
            () => ({
              getData: () => G.map((e) => e.original),
              getVisibleRows: () => P,
              getState: D.getState,
              getColumns: D.getAllColumns,
              getColumnDefs: () => M,
              setColumnFilters: D.setColumnFilters,
              resetColumnFilters: D.resetColumnFilters,
              setColumnFilterFnOverride: V,
              getColumnFilterFnOverride: () => k,
              getContainerElement: () => X.current,
              getTableElement: () => F.current,
              scrollToColumn(e, t) {
                U.scrollToIndex(e.getIndex(), t);
              },
            }),
            [
              G,
              P,
              D.setColumnFilters,
              D.resetColumnFilters,
              D.getState,
              D.getAllColumns,
              k,
              M,
              U,
            ],
          );
        const X = (0, c.useRef)(null),
          Z = h ? f : 0;
        let q = 0;
        const K = P[0]?.getVisibleCells(),
          Q = U.getVirtualItems(),
          Y = Q[Q.length - 1]?.end;
        for (const e of Q) {
          const t = K[e.index];
          t?.column.getIsPinned() && (q += e.size);
        }
        return c.createElement(
          "div",
          {
            className: s,
            ref: X,
            style: {
              width: u,
              height: m,
              overflow: "auto",
              maxWidth: "fit-content",
              scrollPadding: `${Z}px 0 0 ${q}px`,
            },
          },
          c.createElement(
            "div",
            {
              role: "table",
              ref: F,
              "aria-rowcount": n.length,
              style: {
                minHeight: W,
                width: D.getTotalSize(),
                "--virtualPos": `${A}px`,
                ...L,
              },
            },
            D.getHeaderGroups().map((e) =>
              c.createElement(y, {
                key: e.id,
                group: e,
                sticky: h,
                nHeaderHeight: f,
              }),
            ),
            $.map((e) =>
              c.createElement(H, {
                key: e.key,
                row: P[e.index],
                size: e.size,
                rowVirtualizer: U,
                index: e.index,
                measureRef: _.measureElement,
                scrollContainerRef: X,
                nItemHeight: g,
                renderGroup: T,
                rowEnd: Y,
              }),
            ),
          ),
        );
      });
      function R(e) {
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
          width: e.getSize(),
          zIndex: t ? 1 : 0,
        };
      }
      function y(e) {
        const { group: t, sticky: n, nHeaderHeight: o } = e;
        return c.createElement(
          "div",
          {
            role: "row",
            className: s()(
              m().FancyTableRow,
              m().FancyTableHeader,
              n && m().StickyHeader,
            ),
          },
          t.headers.map((e, n) => {
            const l = t.headers[n - 1],
              i = {},
              a = e.column.getIsSorted();
            a &&
              !e.column.columnDef.meta?.bDisableSortButton &&
              (i["aria-sort"] = "asc" === a ? "ascending" : "descending");
            let u = "div";
            return (
              e.column.getCanSort() &&
                !e.column.columnDef.meta?.bDisableSortButton &&
                ((u = "button"),
                (i.onClick = e.column.getToggleSortingHandler())),
              e.column.columnDef.meta?.strHeaderTooltip &&
                (i.title = e.column.columnDef.meta?.strHeaderTooltip),
              c.createElement(
                u,
                {
                  role: "columnheader",
                  key: e.id,
                  "data-pinned": !!e.column.getIsPinned(),
                  className: s()(
                    m().ColumnHeader,
                    "button" === u && m().SortButton,
                    e.column.columnDef.meta?.headerClassname,
                  ),
                  style: {
                    width: `var(--header-${e.id}-size)`,
                    height: void 0 !== o ? `${o}px` : void 0,
                    ...R(e.column),
                  },
                  ...i,
                },
                l?.column.getCanResize() &&
                  c.createElement("div", {
                    role: "presentation",
                    onDoubleClick: () => l.column.resetSize(),
                    onMouseDown: l.getResizeHandler(),
                    onTouchStart: l.getResizeHandler(),
                    onClick: (e) => e.stopPropagation(),
                    className: s()(m().ResizeHandle, m().PrevResizeHandle),
                  }),
                e.isPlaceholder
                  ? null
                  : (0, r.Kv)(e.column.columnDef.header, e.getContext()),
                a &&
                  !e.column.columnDef.meta?.bDisableSortButton &&
                  c.createElement("div", { className: m().SortIndicator }),
                e.column.getCanResize() &&
                  c.createElement("div", {
                    role: "presentation",
                    onDoubleClick: () => e.column.resetSize(),
                    onMouseDown: e.getResizeHandler(),
                    onTouchStart: e.getResizeHandler(),
                    onClick: (e) => e.stopPropagation(),
                    className: s()(
                      m().ResizeHandle,
                      e.column.getIsResizing() && m().IsResizing,
                    ),
                  }),
              )
            );
          }),
        );
      }
      const H = c.memo(function (e) {
        const {
          row: t,
          size: n,
          rowVirtualizer: r,
          measureRef: o,
          index: l,
          nItemHeight: i,
          renderGroup: a,
        } = e;
        return c.createElement(
          "div",
          {
            role: "row",
            className: s()(
              m().FancyTableRow,
              t.getCanExpand() && m().ExpandableRow,
            ),
            style: {
              minHeight: t.getCanExpand() ? void 0 : `${n}px`,
              transform: "translateY(var(--virtualPos))",
            },
            "data-even": l % 2 == 0,
            "data-index": l,
            ref: o,
          },
          c.createElement(I, {
            row: t,
            rowVirtualizer: r,
            nItemHeight: i,
            renderGroup: a,
          }),
        );
      });
      function I(e) {
        const { row: t, rowVirtualizer: n, renderGroup: r } = e;
        if (t.getCanExpand()) {
          const e = r ?? (() => t.groupingValue);
          return c.createElement(
            "button",
            {
              className: m().RowGroup,
              "aria-expanded": t.getIsExpanded(),
              onClick: t.getToggleExpandedHandler(),
            },
            c.createElement("div", { className: m().GroupExpandIndicator }),
            e(t),
          );
        }
        const o = n.getVirtualItems(),
          l = t.getVisibleCells();
        let i,
          a = 0;
        return c.createElement(
          c.Fragment,
          null,
          o.map((e) => {
            const t = l[e.index],
              r = t.column.getIsPinned();
            return (
              r ? (a += e.size) : void 0 === i && (i = e.start),
              c.createElement(
                "div",
                {
                  className: s()(
                    m().FancyTableCell,
                    t.column.columnDef.meta?.cellClassname,
                  ),
                  key: t.id,
                  "data-index": e.index,
                  "data-table-column-id": t.column.id,
                  ref: n.measureElement,
                  style: {
                    width: `var(--col-${t.column.id}-size)`,
                    transform: r ? void 0 : `translateX(${i - a}px)`,
                    ...R(t.column),
                  },
                },
                c.createElement(T, {
                  CellComponent: t.column.columnDef.cell,
                  context: t.getContext(),
                }),
              )
            );
          }),
        );
      }
      const T = c.memo(
        function (e) {
          return (0, r.Kv)(e.CellComponent, e.context);
        },
        (e, t) => e.context.getValue() === t.context.getValue(),
      );
    },
    9161: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => l });
      var r = n(40323),
        o = n.n(r);
      class l {
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
          l.WriteFile(new Blob([n], { type: "text/csv:charset=utf-8;" }), t);
        }
        static m_DummyValueForQuestionHack = 0;
        static WriteXMLToFile(e, t) {
          const n = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let r =
            "<" + n() + 'xml version="1.0" encoding="UTF-8" ' + n() + ">\n";
          (r += new XMLSerializer().serializeToString(e)),
            l.WriteFile(
              new Blob([r], { type: "application/xml:charset=utf-8;" }),
              t,
            );
        }
      }
    },
  },
]);
