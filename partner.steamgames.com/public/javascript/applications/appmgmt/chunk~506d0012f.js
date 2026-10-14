/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [74298],
    {
      32: (Ei, Ni, k) => {
        "use strict";
        k.d(Ni, { k: () => L });
        var y = k(7850),
          Wi = k(18938),
          d = k(67796),
          n = k(16666),
          r = k(92148),
          bi = k(59366),
          Xi = k(64238),
          Mi = k.n(Xi),
          M = k(90626),
          Hi = k(31718),
          mi = k.n(Hi),
          xi = k(19298),
          Zi = k(20169),
          Qi = k(79089),
          qi = k(33902);
        const Ji = M.memo(function (s) {
          const {
              virtualizer: o,
              bDynamic: l,
              scrollAlign: f,
              bNativeScrollIntoView: b,
              idx: B,
              rowGap: g,
              renderItem: m,
            } = s,
            a = M.useCallback(
              (z, u, W) => (o.scrollToIndex(B, { align: f }), !0),
              [o, B, f],
            );
          return (0, y.jsx)(xi.Z, {
            ref: l ? o.measureElement : void 0,
            navKey: `VirtualizedListIndex-${B}`,
            "data-index": B,
            fnScrollIntoViewHandler: b ? void 0 : a,
            scrollIntoViewWhenChildFocused: "force",
            style: { width: "100%", paddingBottom: g },
            children: m(B),
          });
        });
        function ki(e) {
          return (0, Wi.QS)(
            (s) => {
              if (!s) return;
              const o = new s.ownerDocument.defaultView.ResizeObserver((b) => {
                e(b[0]);
              });
              let l = [],
                f = s;
              for (; f && f != null; )
                o.observe(f), l.push(f), (f = f.parentElement);
              return () => {
                l.forEach((b) => o.unobserve(b));
              };
            },
            [e],
          );
        }
        function Ti(e, s) {
          const o = e.getBoundingClientRect().top;
          return s
            ? o - s.getBoundingClientRect().top - s.clientTop + s.scrollTop
            : o + (e.ownerDocument.defaultView?.scrollY ?? 0);
        }
        const Ui = M.forwardRef(function (s, o) {
          const {
              nRows: l,
              nItemHeight: f,
              nRowGap: b,
              overscan: B,
              renderItem: g,
              getItemKey: m,
              bDynamic: a,
              measureElement: z,
              className: u,
              forceVirtualizeType: W,
              hintVirtualizeType: x,
              scrollAlign: T,
              bNativeScrollIntoView: E,
              bNoOverscanOffscreen: N,
              bBrowserScrollAnchoring: v,
              initialOffset: q,
              onOffsetChange: O,
              ...V
            } = s,
            [$, F] = (0, M.useState)(W ?? x),
            [p, U] = M.useState(),
            [Z, Y] = M.useState(),
            [Q, A] = M.useState(),
            K = M.useRef(null),
            R = M.useCallback(
              (t) => {
                if (!t) return;
                const c = (0, Qi._f)(t, "y"),
                  pi = Ti(t, W == "window" ? null : c),
                  ui = c?.getBoundingClientRect(),
                  Oi = () => {
                    W != "window" &&
                      (U(c || void 0),
                      Y((yi) => {
                        if (!ui) return;
                        const ai = Math.round(ui.width),
                          wi = Math.round(ui.height);
                        return yi?.width == ai && yi?.height == wi
                          ? yi
                          : { width: ai, height: wi };
                      })),
                      A(pi),
                      W || F(c ? "element" : "window");
                  };
                N ? Oi() : (0, M.startTransition)(Oi);
              },
              [W, N],
            ),
            j = M.useRef(p);
          j.current = p;
          const G = M.useCallback(() => {
              if (!K.current) return;
              const t = Ti(K.current, j.current);
              (0, M.startTransition)(() => {
                A(t);
              });
            }, []),
            zi = ki(G),
            H = (0, Wi.Ue)(R, K, zi, o),
            i = {
              nRows: l,
              nItemHeight: f,
              nRowGap: b,
              overscan: B,
              renderItem: g,
              getItemKey: m,
              bDynamic: a,
              measureElement: z,
              forceVirtualizeType: W,
              hintVirtualizeType: x,
              scrollAlign: T,
              bNativeScrollIntoView: E,
              bNoOverscanOffscreen: N,
              bBrowserScrollAnchoring: v,
              initialOffset: q,
              onOffsetChange: O,
            };
          return (0, y.jsx)(xi.Z, {
            className: u,
            ref: H,
            ...V,
            children: (0, y.jsxs)(M.Suspense, {
              children: [
                $ === "element" &&
                  (0, y.jsx)(Di, {
                    ...i,
                    nScrollMargin: Q,
                    elScrollable: p,
                    rectScrollable: Z,
                  }),
                $ === "window" && (0, y.jsx)(Ii, { ...i, nScrollMargin: Q }),
              ],
            }),
          });
        });
        function Vi(e, s, o) {
          M.useEffect(() => {
            o ||
              (0, M.startTransition)(() => {
                e.measure();
              });
          }, [e, s, o]);
        }
        function Li(e, s, o) {
          if (!s) return "first";
          const l = e.options.scrollMargin,
            f = l + e.getTotalSize(),
            b = e.scrollOffset ?? 0,
            B = (e.scrollRect ?? e.options.initialRect).height;
          return l > b + B + o ? "first" : f < b - o ? "last" : "all";
        }
        function Ki(e, s, o) {
          const [, l] = (0, M.useState)(0),
            f = M.useRef({ bPositionKnown: s, nMargin: o, eRowWindow: "all" });
          (f.current.bPositionKnown = s), (f.current.nMargin = o);
          const b = M.useCallback(
            (g, m) =>
              X(g, (a, z) => {
                m(a, z);
                const {
                  bPositionKnown: u,
                  nMargin: W,
                  eRowWindow: x,
                } = f.current;
                Li(g, u, W) != x && l((T) => T + 1);
              }),
            [],
          );
          return {
            observeElementOffset: e ? b : X,
            fnGetRowWindow: (g) => {
              const m = e ? Li(g, s, o) : "all";
              return (f.current.eRowWindow = m), m;
            },
          };
        }
        function Ii(e) {
          const {
              nScrollMargin: s,
              nRows: o,
              nItemHeight: l,
              nRowGap: f = 10,
              overscan: b = 6,
              initialOffset: B,
              onOffsetChange: g,
              measureElement: m,
              getItemKey: a,
              bDynamic: z,
              bNoOverscanOffscreen: u,
              bBrowserScrollAnchoring: W,
            } = e,
            x = (0, qi.d)(),
            T = l + f,
            { observeElementOffset: E, fnGetRowWindow: N } = Ki(
              u,
              s !== void 0,
              b * T,
            ),
            v = (0, r.XW)({
              count: o,
              scrollMargin: s,
              estimateSize: M.useCallback(() => T, [T]),
              measureElement: m,
              getItemKey: a,
              overscan: b,
              initialOffset: B ?? (() => window.scrollY),
              initialRect: void 0,
              observeElementOffset: E,
              observeElementRect: P,
              onChange(q, O) {
                g?.(q.scrollOffset);
              },
            });
          return (
            (v.shouldAdjustScrollPositionOnItemSizeChange = (q) =>
              !W && s !== void 0 && q.start < (v.scrollOffset ?? 0)),
            Vi(v, T, z),
            (0, y.jsx)(h, { ...e, virtualizer: v, eRowWindow: N(v) })
          );
        }
        function Di(e) {
          const {
              nRows: s,
              nScrollMargin: o,
              elScrollable: l,
              rectScrollable: f,
              nItemHeight: b,
              nRowGap: B = 10,
              overscan: g = 6,
              initialOffset: m,
              onOffsetChange: a,
              measureElement: z,
              getItemKey: u,
              bDynamic: W,
              bNoOverscanOffscreen: x,
              bBrowserScrollAnchoring: T,
            } = e,
            E = b + B,
            N = (0, qi.d)(),
            { observeElementOffset: v, fnGetRowWindow: q } = Ki(
              x,
              l !== void 0 && o !== void 0,
              g * E,
            ),
            O = (0, r.Te)({
              count: s,
              scrollMargin: o ?? 0,
              getScrollElement: () => (
                l &&
                  O.scrollElement !== l &&
                  m === void 0 &&
                  (O.scrollOffset = l.scrollTop),
                l ?? null
              ),
              estimateSize: M.useCallback(() => E, [E]),
              measureElement: z,
              getItemKey: u,
              overscan: g,
              initialRect: l
                ? f
                : {
                    height: N.viewportHeight?.value ?? 1e3,
                    width: N.viewportWidth?.value ?? 1e3,
                  },
              initialOffset: m,
              observeElementOffset: v,
              observeElementRect: D,
              onChange(V, $) {
                a?.(V.scrollOffset);
              },
            });
          return (
            (O.shouldAdjustScrollPositionOnItemSizeChange = (V) =>
              !T && l !== void 0 && V.start < (O.scrollOffset ?? 0)),
            Vi(O, E, W),
            (0, y.jsx)(h, { ...e, virtualizer: O, eRowWindow: q(O) })
          );
        }
        function h(e) {
          const {
              virtualizer: s,
              eRowWindow: o,
              nRowGap: l,
              renderItem: f,
              bDynamic: b,
              scrollAlign: B = "center",
              bNativeScrollIntoView: g,
            } = e,
            m = s.getVirtualItems(),
            a =
              o == "first"
                ? s.measurementsCache[0]
                : s.measurementsCache[s.measurementsCache.length - 1],
            z = o == "all" ? m : a ? [a] : [],
            u = z.length ? z[0].start - s.options.scrollMargin : 0,
            W = Math.max(0, s.getTotalSize());
          return (0, y.jsx)(xi.Z, {
            "flow-children": "column",
            navEntryPreferPosition: Zi.iU.MAINTAIN_Y,
            style: { height: `${W}px`, width: "100%", position: "relative" },
            children: (0, y.jsx)("div", {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY( ${u}px )`,
              },
              children: z.map((x) =>
                (0, y.jsx)(
                  Ji,
                  {
                    virtualizer: s,
                    bDynamic: b,
                    scrollAlign: B,
                    bNativeScrollIntoView: g,
                    idx: x.index,
                    rowGap: l,
                    renderItem: f,
                  },
                  x.key,
                ),
              ),
            }),
          });
        }
        function I(e) {
          return (...s) => {
            queueMicrotask(() => {
              (0, M.startTransition)(() => {
                e(...s);
              });
            });
          };
        }
        function X(e, s) {
          const o = e.scrollElement;
          if (!o) return;
          let l;
          "scrollX" in o
            ? (l = I((B) =>
                s(o[e.options.horizontal ? "scrollX" : "scrollY"], B),
              ))
            : (l = I((B) =>
                s(o[e.options.horizontal ? "scrollLeft" : "scrollTop"], B),
              ));
          const f = () => l(!0),
            b = () => l(!1);
          return (
            b(),
            o.addEventListener("scroll", f, { passive: !0 }),
            o.addEventListener("scrollend", b, { passive: !0 }),
            () => {
              o.removeEventListener("scroll", f),
                o.removeEventListener("scrollend", b);
            }
          );
        }
        function P(e, s) {
          const o = e.scrollElement;
          if (!o) return;
          const l = I(() => s({ width: o.innerWidth, height: o.innerHeight }));
          return (
            l(),
            o.addEventListener("resize", l, { passive: !0 }),
            () => {
              o.removeEventListener("resize", l);
            }
          );
        }
        function D(e, s) {
          const o = e.scrollElement;
          if (!o) return;
          const l = I((B) =>
            s({ width: Math.round(B.width), height: Math.round(B.height) }),
          );
          l(o.getBoundingClientRect());
          const f = o.ownerDocument.defaultView;
          if (!f?.ResizeObserver) return () => {};
          const b = new f.ResizeObserver((B) => {
            if (B[0]?.borderBoxSize[0]) {
              l({
                width: B[0].borderBoxSize[0].inlineSize,
                height: B[0].borderBoxSize[0].blockSize,
              });
              return;
            }
            l(o.getBoundingClientRect());
          });
          return (
            b.observe(o, { box: "border-box" }),
            () => {
              b.unobserve(o);
            }
          );
        }
        var ri = k(11243);
        const S = M.createContext(void 0);
        function ti(e) {
          const { table: s, setColumnSizeOverride: o } = e,
            l = (0, M.useRef)(s);
          l.current = s;
          const f = (0, M.useMemo)(
            () => ({ table: l.current, setColumnSizeOverride: o }),
            [o],
          );
          return (0, y.jsx)(S.Provider, { value: f, children: e.children });
        }
        const L = M.forwardRef(function (s, o) {
          const {
              data: l,
              columns: f,
              className: b,
              width: B,
              height: g,
              nScrollMargin: m,
              nItemHeight: a,
              nHeaderHeight: z,
              overscan: u = 6,
              stickyHeader: W,
              getRowKey: x,
              initialSorting: T,
              initialColumnFilters: E,
              initialGrouping: N,
              initialExpanded: v,
              initialColumnPinning: q,
              initialColumnVisibility: O,
              onGroupingChange: V,
              onVisibleRowsChange: $,
              renderGroup: F,
              virtualizeType: p = "element",
            } = s,
            U = (0, M.useRef)(null),
            [Z, Y] = (0, M.useState)({}),
            [Q, A] = (0, M.useState)({}),
            K = f.map((w) =>
              "accessorKey" in w
                ? { ...w, filterFn: Z[w.accessorKey] ?? w.filterFn }
                : w,
            ),
            R = K.map((w) => {
              let J = Q[w.id];
              return (
                J === void 0 && "accessorKey" in w && (J = Q[w.accessorKey]),
                (J ??= w.size),
                { ...w, size: J }
              );
            }),
            j = (0, d.N4)({
              data: l,
              columns: R,
              defaultColumn: { minSize: 60, maxSize: 800 },
              initialState: {
                sorting: T,
                grouping: N ?? [],
                expanded: v,
                columnPinning: q ?? {},
                columnFilters: E,
                columnVisibility: O,
              },
              getCoreRowModel: (0, n.HT)(),
              getSortedRowModel: (0, n.h5)(),
              getFilteredRowModel: (0, n.hM)(),
              getGroupedRowModel: (0, n.cU)(),
              columnResizeMode: "onChange",
            }),
            { rows: G, flatRows: zi } = j.getRowModel(),
            H = G.flatMap((w) => (w.getIsExpanded() ? [w, ...w.subRows] : w)),
            i = j.getState().grouping;
          (0, M.useEffect)(() => {
            V?.(i);
          }, [V, i]),
            (0, M.useEffect)(() => {
              $?.(H);
            }, [$, H.length]);
          const t = (0, r.Te)({
              count: H.length,
              scrollMargin: m,
              getScrollElement: M.useCallback(
                () => (p === "element" ? wi.current : window),
                [p],
              ),
              scrollToFn(w, J, gi) {
                return p === "window"
                  ? (0, bi.e8)(w, J, gi)
                  : (0, bi.Ox)(w, J, gi);
              },
              estimateSize: M.useCallback(() => a, [a]),
              overscan: u,
              initialRect: void 0,
              observeElementOffset: X,
              observeElementRect(w, J) {
                return p === "window" ? P(w, J) : D(w, J);
              },
              getItemKey(w) {
                const J = H[w];
                return `${J.parentId ?? ""}${x(w, J.original)}`;
              },
            }),
            c = (0, M.useRef)(0),
            pi = M.useMemo(() => {
              const w = j.getFlatHeaders(),
                J = {};
              for (let gi = 0; gi < w.length; gi++) {
                const ji = w[gi];
                (J[`--header-${ji.id}-size`] = `${ji.getSize()}px`),
                  (J[`--col-${ji.column.id}-size`] =
                    `${ji.column.getSize()}px`);
              }
              return (c.current += 1), J;
            }, [j.getState().columnSizingInfo, j.getState().columnSizing, f]);
          M.useEffect(() => {
            (0, M.startTransition)(() => {
              t.measure();
            });
          }, [t, a]);
          const ui = t.getVirtualItems(),
            Oi = ui[0]?.start ?? 0,
            yi = t.getTotalSize(),
            ai = (0, r.Te)({
              estimateSize(w) {
                return H[0]?.getVisibleCells()[w].column.getSize() ?? 0;
              },
              count: H[0]?.getVisibleCells().length ?? 0,
              overscan: 6,
              horizontal: !0,
              getScrollElement: M.useCallback(
                () => (p === "element" ? wi.current : window),
                [p],
              ),
              scrollToFn(w, J, gi) {
                return p === "window"
                  ? (0, bi.e8)(w, J, gi)
                  : (0, bi.Ox)(w, J, gi);
              },
              rangeExtractor(w) {
                const J = H[0]?.getVisibleCells() ?? [],
                  gi = new Set((0, bi.vp)(w));
                return (
                  J.forEach((ji, $i) => {
                    ji.column.getIsPinned() && gi.add($i);
                  }),
                  Array.from(gi).sort((ji, $i) => ji - $i)
                );
              },
              observeElementOffset: X,
              observeElementRect(w, J) {
                return p === "window" ? P(w, J) : D(w, J);
              },
            });
          (0, M.useEffect)(() => {
            ai.measure();
          }, [c.current]),
            (0, M.useImperativeHandle)(
              o,
              () => ({
                getData() {
                  return zi.map((w) => w.original);
                },
                getVisibleRows() {
                  return H;
                },
                getState: j.getState,
                getColumns: j.getAllColumns,
                getColumnDefs() {
                  return K;
                },
                setColumnFilters: j.setColumnFilters,
                resetColumnFilters: j.resetColumnFilters,
                setColumnFilterFnOverride: Y,
                getColumnFilterFnOverride() {
                  return Z;
                },
                getContainerElement() {
                  return wi.current;
                },
                getTableElement() {
                  return U.current;
                },
                scrollToColumn(w, J) {
                  ai.scrollToIndex(w.getIndex(), J);
                },
              }),
              [
                zi,
                H,
                j.setColumnFilters,
                j.resetColumnFilters,
                j.getState,
                j.getAllColumns,
                Z,
                K,
                ai,
              ],
            );
          const wi = (0, M.useRef)(null),
            hi = W ? (z ?? 0) : 0;
          let vi = 0;
          const fi = H[0]?.getVisibleCells(),
            ii = ai.getVirtualItems(),
            Bi = ii[ii.length - 1]?.end;
          for (const w of ii)
            fi[w.index]?.column.getIsPinned() && (vi += w.size);
          return (0, y.jsx)(ti, {
            table: j,
            setColumnSizeOverride: A,
            children: (0, y.jsx)("div", {
              className: b,
              ref: wi,
              style: {
                width: B,
                height: g,
                overflow: p === "element" ? "auto" : void 0,
                maxWidth: "fit-content",
                scrollPadding: `${hi}px 0 0 ${vi}px`,
              },
              children: (0, y.jsxs)("div", {
                role: "table",
                ref: U,
                "aria-rowcount": l.length,
                style: {
                  minHeight: yi,
                  width: j.getTotalSize(),
                  "--virtualPos": `${Oi}px`,
                  ...pi,
                },
                children: [
                  j
                    .getHeaderGroups()
                    .map((w) =>
                      (0, y.jsx)(
                        ni,
                        { group: w, sticky: W, nHeaderHeight: z },
                        w.id,
                      ),
                    ),
                  ui.map((w) =>
                    (0, y.jsx)(
                      si,
                      {
                        row: H[w.index],
                        size: w.size,
                        rowVirtualizer: ai,
                        index: w.index,
                        measureRef: t.measureElement,
                        scrollContainerRef: wi,
                        nItemHeight: a,
                        renderGroup: F,
                        rowEnd: Bi,
                      },
                      w.key,
                    ),
                  ),
                ],
              }),
            }),
          });
        });
        function C(e) {
          const s = e.getIsPinned(),
            o = s === "left" && e.getIsLastColumn("left"),
            l = s === "right" && e.getIsFirstColumn("right");
          return {
            borderRight: o
              ? "var(--fancy-table-last-pinned-border, var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
            borderLeft: l
              ? "var(--fancy-table-last-pinned-border,var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
            left: s === "left" ? `${e.getStart("left")}px` : void 0,
            right: s === "right" ? `${e.getAfter("right")}px` : void 0,
            position: s ? "sticky" : "relative",
            minWidth: e.getSize(),
            zIndex: s ? 1 : 0,
          };
        }
        function ni(e) {
          const { group: s, sticky: o, nHeaderHeight: l } = e;
          return (0, y.jsx)("div", {
            role: "row",
            className: Mi()(
              mi().FancyTableRow,
              mi().FancyTableHeader,
              o && mi().StickyHeader,
            ),
            children: s.headers.map((f, b) => {
              const B = s.headers[b - 1],
                g = {},
                m = f.column.getIsSorted();
              m &&
                !f.column.columnDef.meta?.bDisableSortButton &&
                (g["aria-sort"] = m === "asc" ? "ascending" : "descending");
              let a = "div";
              return (
                f.column.getCanSort() &&
                  !f.column.columnDef.meta?.bDisableSortButton &&
                  ((a = "button"),
                  (g.onClick = f.column.getToggleSortingHandler())),
                (0, y.jsx)(
                  di,
                  {
                    header: f,
                    prevHeader: B,
                    HeaderElement: a,
                    nHeaderHeight: l,
                    sortDirection: m,
                    strTooltip: f.column.columnDef.meta?.strHeaderTooltip,
                    conditionalProps: g,
                  },
                  f.id,
                )
              );
            }),
          });
        }
        const si = M.memo(function (s) {
          const {
            row: o,
            size: l,
            rowVirtualizer: f,
            measureRef: b,
            index: B,
            nItemHeight: g,
            renderGroup: m,
          } = s;
          return (0, y.jsx)("div", {
            role: "row",
            className: Mi()(
              mi().FancyTableRow,
              o.getCanExpand() && mi().ExpandableRow,
            ),
            style: {
              minHeight: o.getCanExpand() ? void 0 : `${l}px`,
              transform: "translateY(var(--virtualPos))",
            },
            "data-even": B % 2 === 0,
            "data-index": B,
            ref: b,
            children: (0, y.jsx)(ci, {
              row: o,
              rowVirtualizer: f,
              nItemHeight: g,
              renderGroup: m,
            }),
          });
        });
        function ci(e) {
          const { row: s, rowVirtualizer: o, renderGroup: l } = e;
          if (s.getCanExpand()) {
            const m = l ?? (() => s.groupingValue);
            return (0, y.jsxs)("button", {
              className: mi().RowGroup,
              "aria-expanded": s.getIsExpanded(),
              onClick: s.getToggleExpandedHandler(),
              children: [
                (0, y.jsx)("div", { className: mi().GroupExpandIndicator }),
                m(s),
              ],
            });
          }
          const f = o.getVirtualItems(),
            b = s.getVisibleCells();
          let B = 0,
            g;
          return (0, y.jsx)(y.Fragment, {
            children: f.map((m) => {
              const a = b[m.index],
                z = a.column.getIsPinned();
              return (
                z ? (B += m.size) : g === void 0 && (g = m.start),
                (0, y.jsx)(
                  oi,
                  {
                    cell: a,
                    rowVirtualizer: o,
                    index: m.index,
                    transform: z ? void 0 : `translateX(${g - B}px)`,
                  },
                  a.id,
                )
              );
            }),
          });
        }
        function _(e, s) {
          const o = (0, M.useContext)(S),
            l = e.columnDef.meta?.bGrowToFit,
            f = e.id,
            b = l ? e.getSize() : 0,
            B = e.getIsSorted();
          (0, M.useLayoutEffect)(() => {
            if (!l || !s.current) return;
            const g = s.current?.scrollWidth;
            if (!g) return;
            const m = s.current.getBoundingClientRect().width,
              a = window.getComputedStyle(s.current);
            let z = g;
            if (g > m) {
              if (a.paddingLeft) {
                let u = parseInt(a.paddingLeft);
                isNaN(u) || (z += u);
              }
              if (a.paddingRight) {
                let u = parseInt(a.paddingRight);
                isNaN(u) || (z += u);
              }
            }
            z > b &&
              o.setColumnSizeOverride((u) => (u[f] > z ? u : { ...u, [f]: z }));
          }, [l, f, o, b, s, B]);
        }
        function di(e) {
          const {
              header: s,
              prevHeader: o,
              HeaderElement: l,
              nHeaderHeight: f,
              sortDirection: b,
              strTooltip: B,
              conditionalProps: g,
            } = e,
            m = (0, M.useRef)(null);
          return (
            _(s.column, m),
            (0, y.jsxs)(
              l,
              {
                role: "columnheader",
                ref: m,
                "data-pinned": !!s.column.getIsPinned(),
                className: Mi()(
                  mi().ColumnHeader,
                  l === "button" && mi().SortButton,
                  s.column.columnDef.meta?.headerClassname,
                ),
                style: {
                  width: `var(--header-${s.id}-size)`,
                  height: f !== void 0 ? `${f}px` : void 0,
                  ...C(s.column),
                },
                ...g,
                children: [
                  o?.column.getCanResize() &&
                    (0, y.jsx)("div", {
                      role: "presentation",
                      onDoubleClick: () => o.column.resetSize(),
                      onMouseDown: o.getResizeHandler(),
                      onTouchStart: o.getResizeHandler(),
                      onClick: (a) => a.stopPropagation(),
                      className: Mi()(mi().ResizeHandle, mi().PrevResizeHandle),
                    }),
                  s.isPlaceholder
                    ? null
                    : (0, d.Kv)(s.column.columnDef.header, s.getContext()),
                  B && (0, y.jsx)(ri.o, { tooltip: B }),
                  b &&
                    !s.column.columnDef.meta?.bDisableSortButton &&
                    (0, y.jsx)("div", { className: mi().SortIndicator }),
                  s.column.getCanResize() &&
                    (0, y.jsx)("div", {
                      role: "presentation",
                      onDoubleClick: () => s.column.resetSize(),
                      onMouseDown: s.getResizeHandler(),
                      onTouchStart: s.getResizeHandler(),
                      onClick: (a) => a.stopPropagation(),
                      className: Mi()(
                        mi().ResizeHandle,
                        s.column.getIsResizing() && mi().IsResizing,
                      ),
                    }),
                ],
              },
              s.id,
            )
          );
        }
        function oi(e) {
          const { cell: s, rowVirtualizer: o, index: l, transform: f } = e,
            b = M.useRef(null),
            B = (0, Wi.XB)(b, o.measure);
          return (
            _(s.column, b),
            (0, y.jsx)("div", {
              className: Mi()(
                mi().FancyTableCell,
                s.column.columnDef.meta?.cellClassname,
              ),
              "data-index": l,
              "data-table-column-id": s.column.id,
              ref: B,
              style: {
                width: `var(--col-${s.column.id}-size)`,
                transform: f,
                ...C(s.column),
              },
              children: (0, y.jsx)(li, {
                CellComponent: s.column.columnDef.cell,
                context: s.getContext(),
              }),
            })
          );
        }
        function ei(e) {
          return (0, d.Kv)(e.CellComponent, e.context);
        }
        const li = M.memo(
          ei,
          (e, s) => e.context.getValue() === s.context.getValue(),
        );
      },
      45926: (Ei, Ni, k) => {
        "use strict";
        k.d(Ni, { j3: () => O, BI: () => y, Dk: () => Wi, Nl: () => zi });
        var y = {};
        k.r(y),
          k.d(y, { lI: () => Hi, jZ: () => Mi, Vg: () => M, Fi: () => mi });
        var Wi = {};
        k.r(Wi), k.d(Wi, { rV: () => Ti });
        var d = k(80613),
          n = k.n(d),
          r = k(75245),
          bi = k(35038);
        const Xi = 0,
          Mi = 1,
          M = 2,
          Hi = 3,
          mi = 4,
          xi = 0,
          Zi = 1,
          Qi = 2,
          qi = 3,
          Ji = 4,
          ki = 5,
          Ti = 6,
          Ui = 7,
          Vi = 8;
        function Li(H) {
          return "unknown ESeason ( " + H + " )";
        }
        function Ki(H) {
          return "unknown EUserActionEventType ( " + H + " )";
        }
        function Ii(H) {
          return "unknown EYearInReviewPrivacyState ( " + H + " )";
        }
        function Di(H) {
          return "unknown EYearInReviewAccessSource ( " + H + " )";
        }
        class h extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              h.prototype.total_playtime_seconds || r.Sg(h.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    total_playtime_seconds: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    total_sessions: {
                      n: 20,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    vr_sessions: {
                      n: 21,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    deck_sessions: {
                      n: 22,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    controller_sessions: {
                      n: 23,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    linux_sessions: {
                      n: 24,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    macos_sessions: {
                      n: 25,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    windows_sessions: {
                      n: 26,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    total_playtime_percentagex100: {
                      n: 27,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    vr_playtime_percentagex100: {
                      n: 28,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    deck_playtime_percentagex100: {
                      n: 29,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    controller_playtime_percentagex100: {
                      n: 30,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    linux_playtime_percentagex100: {
                      n: 31,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    macos_playtime_percentagex100: {
                      n: 32,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    windows_playtime_percentagex100: {
                      n: 33,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = r.w0(h.M())), h.sm_mbf;
          }
          toObject(i = !1) {
            return h.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(h.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(h.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new h();
            return h.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(h.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return h.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(h.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStats";
          }
        }
        class I extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              I.prototype.appid || r.Sg(I.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = r.w0(I.M())), I.sm_mbf;
          }
          toObject(i = !1) {
            return I.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(I.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(I.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new I();
            return I.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(I.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return I.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(I.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStreakGame";
          }
        }
        class X extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              X.prototype.longest_consecutive_days || r.Sg(X.M()),
              d.Message.initialize(this, i, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    longest_consecutive_days: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    rtime_start: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    streak_games: { n: 3, c: I, r: !0, q: !0 },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = r.w0(X.M())), X.sm_mbf;
          }
          toObject(i = !1) {
            return X.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(X.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(X.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new X();
            return X.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(X.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return X.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(X.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStreak";
          }
        }
        class P extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              P.prototype.overall_rank || r.Sg(P.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    overall_rank: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    vr_rank: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    deck_rank: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    controller_rank: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    linux_rank: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    mac_rank: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    windows_rank: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = r.w0(P.M())), P.sm_mbf;
          }
          toObject(i = !1) {
            return P.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(P.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(P.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new P();
            return P.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(P.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return P.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(P.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeRanks";
          }
        }
        class D extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              D.prototype.appid || r.Sg(D.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    stats: { n: 2, c: h },
                    playtime_streak: { n: 3, c: X },
                    playtime_ranks: { n: 4, c: P },
                    rtime_first_played: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    relative_game_stats: { n: 6, c: h },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = r.w0(D.M())), D.sm_mbf;
          }
          toObject(i = !1) {
            return D.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(D.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(D.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new D();
            return D.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(D.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return D.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(D.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CGamePlaytimeStats";
          }
        }
        class ri extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ri.prototype.appid || r.Sg(ri.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ri.sm_m ||
                (ri.sm_m = {
                  proto: ri,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    new_this_year: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    rtime_first_played_lifetime: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    demo: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                    playtest: { n: 5, br: r.qM.readBool, bw: r.gp.writeBool },
                    played_during_early_access: {
                      n: 6,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    played_vr: { n: 7, br: r.qM.readBool, bw: r.gp.writeBool },
                    played_deck: {
                      n: 8,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    played_controller: {
                      n: 9,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    played_linux: {
                      n: 10,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    played_mac: {
                      n: 11,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    played_windows: {
                      n: 12,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    total_playtime_percentagex100: {
                      n: 13,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    total_sessions: {
                      n: 14,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    rtime_release_date: {
                      n: 15,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    parent_appid: {
                      n: 16,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              ri.sm_m
            );
          }
          static MBF() {
            return ri.sm_mbf || (ri.sm_mbf = r.w0(ri.M())), ri.sm_mbf;
          }
          toObject(i = !1) {
            return ri.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(ri.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(ri.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new ri();
            return ri.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(ri.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return ri.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(ri.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              ri.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameSummary";
          }
        }
        class S extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              S.prototype.appid || r.Sg(S.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    total_playtime_percentagex100: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    relative_playtime_percentagex100: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = r.w0(S.M())), S.sm_mbf;
          }
          toObject(i = !1) {
            return S.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(S.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(S.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new S();
            return S.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(S.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return S.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(S.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSimpleGameSummary";
          }
        }
        class ti extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ti.prototype.appid || r.Sg(ti.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ti.sm_m ||
                (ti.sm_m = {
                  proto: ti,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    rank: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    relative_playtime_percentagex100: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              ti.sm_m
            );
          }
          static MBF() {
            return ti.sm_mbf || (ti.sm_mbf = r.w0(ti.M())), ti.sm_mbf;
          }
          toObject(i = !1) {
            return ti.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(ti.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(ti.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new ti();
            return ti.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(ti.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return ti.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(ti.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              ti.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRank";
          }
        }
        class L extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              L.prototype.category || r.Sg(L.M()),
              d.Message.initialize(this, i, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    category: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    rankings: { n: 2, c: ti, r: !0, q: !0 },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = r.w0(L.M())), L.sm_mbf;
          }
          toObject(i = !1) {
            return L.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(L.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(L.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new L();
            return L.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(L.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return L.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(L.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CRankingCategory";
          }
        }
        class C extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              C.prototype.overall_ranking || r.Sg(C.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    overall_ranking: { n: 1, c: L },
                    vr_ranking: { n: 2, c: L },
                    deck_ranking: { n: 3, c: L },
                    controller_ranking: { n: 4, c: L },
                    linux_ranking: { n: 5, c: L },
                    mac_ranking: { n: 6, c: L },
                    windows_ranking: { n: 7, c: L },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = r.w0(C.M())), C.sm_mbf;
          }
          toObject(i = !1) {
            return C.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(C.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(C.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new C();
            return C.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(C.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return C.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(C.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRankings";
          }
        }
        class ni extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ni.prototype.total_achievements || r.Sg(ni.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ni.sm_m ||
                (ni.sm_m = {
                  proto: ni,
                  fields: {
                    total_achievements: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    total_games_with_achievements: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    total_rare_achievements: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              ni.sm_m
            );
          }
          static MBF() {
            return ni.sm_mbf || (ni.sm_mbf = r.w0(ni.M())), ni.sm_mbf;
          }
          toObject(i = !1) {
            return ni.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(ni.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(ni.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new ni();
            return ni.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(ni.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return ni.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(ni.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              ni.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserPlaytimeSummaryStats";
          }
        }
        class si extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              si.prototype.stats || r.Sg(si.M()),
              d.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              si.sm_m ||
                (si.sm_m = {
                  proto: si,
                  fields: { stats: { n: 1, c: ci, r: !0, q: !0 } },
                }),
              si.sm_m
            );
          }
          static MBF() {
            return si.sm_mbf || (si.sm_mbf = r.w0(si.M())), si.sm_mbf;
          }
          toObject(i = !1) {
            return si.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(si.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(si.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new si();
            return si.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(si.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return si.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(si.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              si.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserTagStats";
          }
        }
        class ci extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ci.prototype.tag_id || r.Sg(ci.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ci.sm_m ||
                (ci.sm_m = {
                  proto: ci,
                  fields: {
                    tag_id: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    tag_weight: {
                      n: 2,
                      br: r.qM.readFloat,
                      bw: r.gp.writeFloat,
                    },
                    tag_weight_pre_selection: {
                      n: 3,
                      br: r.qM.readFloat,
                      bw: r.gp.writeFloat,
                    },
                  },
                }),
              ci.sm_m
            );
          }
          static MBF() {
            return ci.sm_mbf || (ci.sm_mbf = r.w0(ci.M())), ci.sm_mbf;
          }
          toObject(i = !1) {
            return ci.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(ci.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(ci.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new ci();
            return ci.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(ci.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return ci.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(ci.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              ci.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserTagStats_Tag";
          }
        }
        class _ extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              _.prototype.screenshots_shared || r.Sg(_.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
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
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    gifts_sent: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    loyalty_reactions: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    written_reviews: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    guides_submitted: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    workshop_contributions: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    badges_earned: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    friends_added: {
                      n: 8,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    forum_posts: {
                      n: 9,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    workshop_subscriptions: {
                      n: 10,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    guide_subscribers: {
                      n: 11,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    workshop_subscribers: {
                      n: 12,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    games_played_pct: {
                      n: 13,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    achievements_pct: {
                      n: 14,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    game_streak_pct: {
                      n: 15,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    games_played_avg: {
                      n: 16,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    achievements_avg: {
                      n: 17,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    game_streak_avg: {
                      n: 18,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = r.w0(_.M())), _.sm_mbf;
          }
          toObject(i = !1) {
            return _.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(_.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(_.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new _();
            return _.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(_.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return _.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(_.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeByNumbers";
          }
        }
        class di extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              di.prototype.total_stats || r.Sg(di.M()),
              d.Message.initialize(this, i, 0, -1, [2, 5, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              di.sm_m ||
                (di.sm_m = {
                  proto: di,
                  fields: {
                    total_stats: { n: 1, c: h },
                    games: { n: 2, c: D, r: !0, q: !0 },
                    playtime_streak: { n: 3, c: X },
                    months: { n: 5, c: oi, r: !0, q: !0 },
                    game_summary: { n: 6, c: ri, r: !0, q: !0 },
                    demos_played: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    game_rankings: { n: 8, c: C },
                    playtests_played: {
                      n: 9,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    summary_stats: { n: 10, c: ni },
                    substantial: {
                      n: 11,
                      d: !0,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    tag_stats: { n: 12, c: si },
                    by_numbers: { n: 13, c: _ },
                  },
                }),
              di.sm_m
            );
          }
          static MBF() {
            return di.sm_mbf || (di.sm_mbf = r.w0(di.M())), di.sm_mbf;
          }
          toObject(i = !1) {
            return di.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(di.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(di.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new di();
            return di.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(di.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return di.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(di.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              di.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserPlaytimeStats";
          }
        }
        class oi extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              oi.prototype.rtime_month || r.Sg(oi.M()),
              d.Message.initialize(this, i, 0, -1, [4, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oi.sm_m ||
                (oi.sm_m = {
                  proto: oi,
                  fields: {
                    rtime_month: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    stats: { n: 2, c: h },
                    appid: { n: 4, c: D, r: !0, q: !0 },
                    relative_monthly_stats: { n: 5, c: h },
                    game_summary: { n: 6, c: S, r: !0, q: !0 },
                  },
                }),
              oi.sm_m
            );
          }
          static MBF() {
            return oi.sm_mbf || (oi.sm_mbf = r.w0(oi.M())), oi.sm_mbf;
          }
          toObject(i = !1) {
            return oi.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(oi.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(oi.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new oi();
            return oi.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(oi.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return oi.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(oi.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              oi.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CMonthlyPlaytimeStats";
          }
        }
        class ei extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ei.prototype.account_id || r.Sg(ei.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ei.sm_m ||
                (ei.sm_m = {
                  proto: ei,
                  fields: {
                    account_id: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    year: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    playtime_stats: { n: 3, c: di },
                    privacy_state: {
                      n: 4,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                  },
                }),
              ei.sm_m
            );
          }
          static MBF() {
            return ei.sm_mbf || (ei.sm_mbf = r.w0(ei.M())), ei.sm_mbf;
          }
          toObject(i = !1) {
            return ei.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(ei.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(ei.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new ei();
            return ei.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(ei.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return ei.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(ei.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              ei.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserYearInReviewStats";
          }
        }
        class li extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              li.prototype.from_dbo || r.Sg(li.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              li.sm_m ||
                (li.sm_m = {
                  proto: li,
                  fields: {
                    from_dbo: { n: 1, br: r.qM.readBool, bw: r.gp.writeBool },
                    overall_time_ms: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    dbo_load_ms: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    query_execution_ms: {
                      n: 4,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    message_population_ms: {
                      n: 5,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    dbo_lock_load_ms: {
                      n: 6,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              li.sm_m
            );
          }
          static MBF() {
            return li.sm_mbf || (li.sm_mbf = r.w0(li.M())), li.sm_mbf;
          }
          toObject(i = !1) {
            return li.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(li.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(li.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new li();
            return li.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(li.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return li.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(li.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              li.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CYearInReviewPerformanceStats";
          }
        }
        class e extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              e.prototype.statid || r.Sg(e.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              e.sm_m ||
                (e.sm_m = {
                  proto: e,
                  fields: {
                    statid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    fieldid: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    achievement_name_internal: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    rtime_unlocked: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              e.sm_m
            );
          }
          static MBF() {
            return e.sm_mbf || (e.sm_mbf = r.w0(e.M())), e.sm_mbf;
          }
          toObject(i = !1) {
            return e.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(e.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(e.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new e();
            return e.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(e.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return e.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(e.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              e.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CAchievementDetails";
          }
        }
        class s extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              s.prototype.appid || r.Sg(s.M()),
              d.Message.initialize(this, i, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              s.sm_m ||
                (s.sm_m = {
                  proto: s,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    achievements: { n: 2, c: e, r: !0, q: !0 },
                    all_time_unlocked_achievements: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    unlocked_more_in_future: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              s.sm_m
            );
          }
          static MBF() {
            return s.sm_mbf || (s.sm_mbf = r.w0(s.M())), s.sm_mbf;
          }
          toObject(i = !1) {
            return s.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(s.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(s.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new s();
            return s.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(s.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return s.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(s.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              s.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameAchievements";
          }
        }
        class o extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              o.prototype.median_achievements || r.Sg(o.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    median_achievements: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    median_games: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    median_streak: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = r.w0(o.M())), o.sm_mbf;
          }
          toObject(i = !1) {
            return o.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(o.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(o.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new o();
            return o.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(o.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return o.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(o.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CGlobalPercentiles";
          }
        }
        class l extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              l.prototype.new_releases || r.Sg(l.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    new_releases: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    recent_releases: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    classic_releases: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    recent_cutoff_year: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = r.w0(l.M())), l.sm_mbf;
          }
          toObject(i = !1) {
            return l.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(l.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(l.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new l();
            return l.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(l.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return l.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(l.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CGlobalPlaytimeDistribution";
          }
        }
        class f extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              f.prototype.games_played || r.Sg(f.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: {
                    games_played: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    unlocked_achievements: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    longest_streak: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = r.w0(f.M())), f.sm_mbf;
          }
          toObject(i = !1) {
            return f.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(f.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(f.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new f();
            return f.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(f.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return f.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(f.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CPreviousYIRSummaryData";
          }
        }
        class b extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              b.prototype.steamid || r.Sg(b.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    year: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    force_regenerate: {
                      n: 3,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    access_source: {
                      n: 4,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    fetch_previous_year_summary: {
                      n: 5,
                      d: !1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = r.w0(b.M())), b.sm_mbf;
          }
          toObject(i = !1) {
            return b.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(b.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(b.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new b();
            return b.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(b.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return b.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(b.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReview_Request";
          }
        }
        class B extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              B.prototype.stats || r.Sg(B.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    stats: { n: 1, c: ei },
                    performance_stats: { n: 2, c: li },
                    percentiles: { n: 3, c: o },
                    distribution: { n: 4, c: l },
                    previous_year_summary: { n: 5, c: f },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = r.w0(B.M())), B.sm_mbf;
          }
          toObject(i = !1) {
            return B.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(B.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(B.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new B();
            return B.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(B.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return B.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(B.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReview_Response";
          }
        }
        class g extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              g.prototype.steamid || r.Sg(g.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    year: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    privacy_state: {
                      n: 3,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = r.w0(g.M())), g.sm_mbf;
          }
          toObject(i = !1) {
            return g.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(g.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(g.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new g();
            return g.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(g.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return g.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(g.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_SetUserSharingPermissions_Request";
          }
        }
        class m extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              m.prototype.privacy_state || r.Sg(m.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    privacy_state: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = r.w0(m.M())), m.sm_mbf;
          }
          toObject(i = !1) {
            return m.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(m.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(m.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new m();
            return m.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(m.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return m.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(m.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_SetUserSharingPermissions_Response";
          }
        }
        class a extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              a.prototype.steamid || r.Sg(a.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              a.sm_m ||
                (a.sm_m = {
                  proto: a,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    year: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = r.w0(a.M())), a.sm_mbf;
          }
          toObject(i = !1) {
            return a.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(a.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(a.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new a();
            return a.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(a.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return a.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(a.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserSharingPermissions_Request";
          }
        }
        class z extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              z.prototype.privacy_state || r.Sg(z.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    privacy_state: {
                      n: 1,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    generated_value: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    steamid: {
                      n: 3,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    rt_privacy_updated: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = r.w0(z.M())), z.sm_mbf;
          }
          toObject(i = !1) {
            return z.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(z.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(z.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new z();
            return z.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(z.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return z.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(z.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserSharingPermissions_Response";
          }
        }
        class u extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              u.prototype.steamid || r.Sg(u.M()),
              d.Message.initialize(this, i, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    year: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    appids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    total_only: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = r.w0(u.M())), u.sm_mbf;
          }
          toObject(i = !1) {
            return u.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(u.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(u.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new u();
            return u.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(u.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return u.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(u.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearAchievements_Request";
          }
        }
        class W extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              W.prototype.game_achievements || r.Sg(W.M()),
              d.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    game_achievements: { n: 1, c: s, r: !0, q: !0 },
                    total_achievements: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    total_rare_achievements: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    total_games_with_achievements: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = r.w0(W.M())), W.sm_mbf;
          }
          toObject(i = !1) {
            return W.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(W.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(W.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new W();
            return W.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(W.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return W.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(W.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearAchievements_Response";
          }
        }
        class x extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              x.prototype.steamid || r.Sg(x.M()),
              d.Message.initialize(this, i, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    year: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    appids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = r.w0(x.M())), x.sm_mbf;
          }
          toObject(i = !1) {
            return x.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(x.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(x.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new x();
            return x.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(x.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return x.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(x.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Request";
          }
        }
        class T extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              T.prototype.apps || r.Sg(T.M()),
              d.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: { apps: { n: 1, c: N, r: !0, q: !0 } },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = r.w0(T.M())), T.sm_mbf;
          }
          toObject(i = !1) {
            return T.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(T.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(T.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new T();
            return T.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(T.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return T.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(T.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response";
          }
        }
        class E extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              E.prototype.image_url || r.Sg(E.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    image_url: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    preview_url: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    image_width: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    image_height: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    maybe_inappropriate_sex: {
                      n: 5,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    maybe_inappropriate_violence: {
                      n: 6,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    visibility: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    spoiler_tag: {
                      n: 8,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = r.w0(E.M())), E.sm_mbf;
          }
          toObject(i = !1) {
            return E.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(E.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(E.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new E();
            return E.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(E.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return E.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(E.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response_Screenshot";
          }
        }
        class N extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              N.prototype.appid || r.Sg(N.M()),
              d.Message.initialize(this, i, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    screenshots: { n: 2, c: E, r: !0, q: !0 },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = r.w0(N.M())), N.sm_mbf;
          }
          toObject(i = !1) {
            return N.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(N.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(N.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new N();
            return N.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(N.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return N.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(N.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp";
          }
        }
        class v extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              v.prototype.steamid || r.Sg(v.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    gid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    type: { n: 3, br: r.qM.readEnum, bw: r.gp.writeEnum },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = r.w0(v.M())), v.sm_mbf;
          }
          toObject(i = !1) {
            return v.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(v.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(v.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new v();
            return v.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(v.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return v.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(v.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserActionData_Request";
          }
        }
        class q extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              q.prototype.jsondata || r.Sg(q.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    jsondata: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = r.w0(q.M())), q.sm_mbf;
          }
          toObject(i = !1) {
            return q.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(q.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(q.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new q();
            return q.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(q.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return q.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(q.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserActionData_Response";
          }
        }
        class O extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              O.prototype.steamid || r.Sg(O.M()),
              d.Message.initialize(this, i, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    gids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readFixed64String,
                      pbr: r.qM.readPackedFixed64String,
                      bw: r.gp.writeRepeatedFixed64String,
                    },
                    type: { n: 3, br: r.qM.readEnum, bw: r.gp.writeEnum },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = r.w0(O.M())), O.sm_mbf;
          }
          toObject(i = !1) {
            return O.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(O.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(O.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new O();
            return O.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(O.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return O.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(O.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Request";
          }
        }
        class V extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              V.prototype.entries || r.Sg(V.M()),
              d.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: { entries: { n: 1, c: $, r: !0, q: !0 } },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = r.w0(V.M())), V.sm_mbf;
          }
          toObject(i = !1) {
            return V.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(V.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(V.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new V();
            return V.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(V.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return V.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(V.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Response";
          }
        }
        class $ extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              $.prototype.gid || r.Sg($.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    gid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    jsondata: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    steamid: {
                      n: 3,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = r.w0($.M())), $.sm_mbf;
          }
          toObject(i = !1) {
            return $.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT($.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq($.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new $();
            return $.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj($.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return $.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0($.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Response_Entry";
          }
        }
        class F extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              F.prototype.gid || r.Sg(F.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    gid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    type: { n: 2, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    count: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    last_account_index: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = r.w0(F.M())), F.sm_mbf;
          }
          toObject(i = !1) {
            return F.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(F.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(F.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new F();
            return F.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(F.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return F.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(F.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Request";
          }
        }
        class p extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              p.prototype.entries || r.Sg(p.M()),
              d.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    entries: { n: 1, c: U, r: !0, q: !0 },
                    last_account_index: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = r.w0(p.M())), p.sm_mbf;
          }
          toObject(i = !1) {
            return p.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(p.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(p.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new p();
            return p.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(p.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return p.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(p.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Response";
          }
        }
        class U extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              U.prototype.gid || r.Sg(U.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    gid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    jsondata: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    steamid: {
                      n: 3,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = r.w0(U.M())), U.sm_mbf;
          }
          toObject(i = !1) {
            return U.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(U.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(U.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new U();
            return U.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(U.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return U.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(U.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Response_Entry";
          }
        }
        class Z extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Z.prototype.steamid || r.Sg(Z.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    year: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    return_private: {
                      n: 3,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = r.w0(Z.M())), Z.sm_mbf;
          }
          toObject(i = !1) {
            return Z.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(Z.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(Z.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new Z();
            return Z.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(Z.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(Z.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetFriendsSharedYearInReview_Request";
          }
        }
        class Y extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Y.prototype.steamid || r.Sg(Y.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    privacy_state: {
                      n: 3,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    rt_privacy_updated: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    privacy_override: {
                      n: 5,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = r.w0(Y.M())), Y.sm_mbf;
          }
          toObject(i = !1) {
            return Y.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(Y.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(Y.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new Y();
            return Y.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(Y.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(Y.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendSharedYearInView";
          }
        }
        class Q extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Q.prototype.friend_shares || r.Sg(Q.M()),
              d.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    friend_shares: { n: 1, c: Y, r: !0, q: !0 },
                    year: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = r.w0(Q.M())), Q.sm_mbf;
          }
          toObject(i = !1) {
            return Q.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(Q.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(Q.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new Q();
            return Q.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(Q.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(Q.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetFriendsSharedYearInReview_Response";
          }
        }
        class A extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              A.prototype.steamid || r.Sg(A.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    year: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    language: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = r.w0(A.M())), A.sm_mbf;
          }
          toObject(i = !1) {
            return A.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(A.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(A.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new A();
            return A.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(A.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return A.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(A.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Request";
          }
        }
        class K extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              K.prototype.images || r.Sg(K.M()),
              d.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: { images: { n: 1, c: R, r: !0, q: !0 } },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = r.w0(K.M())), K.sm_mbf;
          }
          toObject(i = !1) {
            return K.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(K.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(K.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new K();
            return K.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(K.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return K.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(K.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Response";
          }
        }
        class R extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              R.prototype.name || r.Sg(R.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    name: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    url_path: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = r.w0(R.M())), R.sm_mbf;
          }
          toObject(i = !1) {
            return R.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(R.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(R.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new R();
            return R.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(R.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return R.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(R.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Response_Image";
          }
        }
        class j extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              j.prototype.steamid || r.Sg(j.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = r.w0(j.M())), j.sm_mbf;
          }
          toObject(i = !1) {
            return j.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(j.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(j.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new j();
            return j.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(j.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return j.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(j.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetYIRCurrentMonthlySummary_Request";
          }
        }
        class G extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              G.prototype.year || r.Sg(G.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    year: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    month: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    games_played: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    top_played_appid: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    longest_streak_days: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    rt_streak_start: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    achievements: {
                      n: 8,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    screenshots: {
                      n: 9,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = r.w0(G.M())), G.sm_mbf;
          }
          toObject(i = !1) {
            return G.toObject(i, this);
          }
          static toObject(i, t) {
            return r.BT(G.M(), i, t);
          }
          static fromObject(i) {
            return r.Uq(G.M(), i);
          }
          static deserializeBinary(i) {
            let t = new (n().BinaryReader)(i),
              c = new G();
            return G.deserializeBinaryFromReader(c, t);
          }
          static deserializeBinaryFromReader(i, t) {
            return r.zj(G.MBF(), i, t);
          }
          serializeBinary() {
            var i = new (n().BinaryWriter)();
            return G.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, t) {
            r.i0(G.M(), i, t);
          }
          serializeBase64String() {
            var i = new (n().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetYIRCurrentMonthlySummary_Response";
          }
        }
        var zi;
        ((H) => {
          function i(fi, ii, Bi) {
            return fi.SendMsg(
              "SaleFeature.GetUserYearInReview#1",
              (0, bi.I8)(b, ii, Bi),
              B,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          H.GetUserYearInReview = i;
          function t(fi, ii, Bi) {
            return fi.SendMsg(
              "SaleFeature.GetUserSharingPermissions#1",
              (0, bi.I8)(a, ii, Bi),
              z,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          H.GetUserSharingPermissions = t;
          function c(fi, ii, Bi) {
            return fi.SendMsg(
              "SaleFeature.SetUserSharingPermissions#1",
              (0, bi.I8)(g, ii, Bi),
              m,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          H.SetUserSharingPermissions = c;
          function pi(fi, ii, Bi) {
            return fi.SendMsg(
              "SaleFeature.GetUserYearAchievements#1",
              (0, bi.I8)(u, ii, Bi),
              W,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          H.GetUserYearAchievements = pi;
          function ui(fi, ii, Bi) {
            return fi.SendMsg(
              "SaleFeature.GetUserYearScreenshots#1",
              (0, bi.I8)(x, ii, Bi),
              T,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          H.GetUserYearScreenshots = ui;
          function Oi(fi, ii, Bi) {
            return fi.SendMsg(
              "SaleFeature.GetUserActionData#1",
              (0, bi.I8)(v, ii, Bi),
              q,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          H.GetUserActionData = Oi;
          function yi(fi, ii, Bi) {
            return fi.SendMsg(
              "SaleFeature.GetMultipleUserActionData#1",
              (0, bi.I8)(O, ii, Bi),
              V,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          H.GetMultipleUserActionData = yi;
          function ai(fi, ii, Bi) {
            return fi.SendMsg(
              "SaleFeature.GetAllUserActionDataForType#1",
              (0, bi.I8)(F, ii, Bi),
              p,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          H.GetAllUserActionDataForType = ai;
          function wi(fi, ii, Bi) {
            return fi.SendMsg(
              "SaleFeature.GetFriendsSharedYearInReview#1",
              (0, bi.I8)(Z, ii, Bi),
              Q,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          H.GetFriendsSharedYearInReview = wi;
          function hi(fi, ii, Bi) {
            return fi.SendMsg(
              "SaleFeature.GetUserYearInReviewShareImage#1",
              (0, bi.I8)(A, ii, Bi),
              K,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          H.GetUserYearInReviewShareImage = hi;
          function vi(fi, ii, Bi) {
            return fi.SendMsg(
              "SaleFeature.GetYIRCurrentMonthlySummary#1",
              (0, bi.I8)(j, ii, Bi),
              G,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          H.GetYIRCurrentMonthlySummary = vi;
        })(zi || (zi = {}));
      },
      31718: (Ei) => {
        Ei.exports = {
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
