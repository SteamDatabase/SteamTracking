/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [9954],
  {
    67796: (e, t, n) => {
      n.d(t, { Kv: () => i, N4: () => s });
      var o = n(90626),
        l = n(16666);
      /**
       * react-table
       *
       * Copyright (c) TanStack
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
      function i(e, t) {
        return e
          ? (function (e) {
              return (
                "function" == typeof e &&
                (() => {
                  const t = Object.getPrototypeOf(e);
                  return t.prototype && t.prototype.isReactComponent;
                })()
              );
            })((n = e)) ||
            "function" == typeof n ||
            (function (e) {
              return (
                "object" == typeof e &&
                "symbol" == typeof e.$$typeof &&
                ["react.memo", "react.forward_ref"].includes(
                  e.$$typeof.description,
                )
              );
            })(n)
            ? o.createElement(e, t)
            : e
          : null;
        var n;
      }
      function s(e) {
        const t = {
            state: {},
            onStateChange: () => {},
            renderFallbackValue: null,
            ...e,
          },
          [n] = o.useState(() => ({ current: (0, l.ZR)(t) })),
          [i, s] = o.useState(() => n.current.initialState);
        return (
          n.current.setOptions((t) => ({
            ...t,
            ...e,
            state: { ...i, ...e.state },
            onStateChange: (t) => {
              s(t), null == e.onStateChange || e.onStateChange(t);
            },
          })),
          n.current
        );
      }
    },
    16666: (e, t, n) => {
      /**
       * table-core
       *
       * Copyright (c) TanStack
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
      function o() {
        return {
          accessor: (e, t) =>
            "function" == typeof e
              ? { ...t, accessorFn: e }
              : { ...t, accessorKey: e },
          display: (e) => e,
          group: (e) => e,
        };
      }
      function l(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function i(e, t) {
        return (n) => {
          t.setState((t) => ({ ...t, [e]: l(n, t[e]) }));
        };
      }
      function s(e) {
        return e instanceof Function;
      }
      function r(e, t) {
        const n = [],
          o = (e) => {
            e.forEach((e) => {
              n.push(e);
              const l = t(e);
              null != l && l.length && o(l);
            });
          };
        return o(e), n;
      }
      function a(e, t, n) {
        let o,
          l = [];
        return (i) => {
          let s;
          n.key && n.debug && (s = Date.now());
          const r = e(i);
          if (!(r.length !== l.length || r.some((e, t) => l[t] !== e)))
            return o;
          let a;
          if (
            ((l = r),
            n.key && n.debug && (a = Date.now()),
            (o = t(...r)),
            null == n || null == n.onChange || n.onChange(o),
            n.key && n.debug && null != n && n.debug())
          ) {
            const e = Math.round(100 * (Date.now() - s)) / 100,
              t = Math.round(100 * (Date.now() - a)) / 100,
              o = t / 16,
              l = (e, t) => {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              `%c⏱ ${l(t, 5)} /${l(e, 5)} ms`,
              `\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0, Math.min(120 - 120 * o, 120))}deg 100% 31%);`,
              null == n ? void 0 : n.key,
            );
          }
          return o;
        };
      }
      function u(e, t, n, o) {
        return {
          debug: () => {
            var n;
            return null != (n = null == e ? void 0 : e.debugAll) ? n : e[t];
          },
          key: !1,
          onChange: o,
        };
      }
      n.d(t, {
        FB: () => o,
        HT: () => Y,
        ZR: () => X,
        cU: () => Q,
        h5: () => ee,
        hM: () => J,
      });
      const g = "debugHeaders";
      function d(e, t, n) {
        var o;
        let l = {
          id: null != (o = n.id) ? o : t.id,
          column: t,
          index: n.index,
          isPlaceholder: !!n.isPlaceholder,
          placeholderId: n.placeholderId,
          depth: n.depth,
          subHeaders: [],
          colSpan: 0,
          rowSpan: 0,
          headerGroup: null,
          getLeafHeaders: () => {
            const e = [],
              t = (n) => {
                n.subHeaders && n.subHeaders.length && n.subHeaders.map(t),
                  e.push(n);
              };
            return t(l), e;
          },
          getContext: () => ({ table: e, header: l, column: t }),
        };
        return (
          e._features.forEach((t) => {
            null == t.createHeader || t.createHeader(l, e);
          }),
          l
        );
      }
      const c = {
        createTable: (e) => {
          (e.getHeaderGroups = a(
            () => [
              e.getAllColumns(),
              e.getVisibleLeafColumns(),
              e.getState().columnPinning.left,
              e.getState().columnPinning.right,
            ],
            (t, n, o, l) => {
              var i, s;
              const r =
                  null !=
                  (i =
                    null == o
                      ? void 0
                      : o.map((e) => n.find((t) => t.id === e)).filter(Boolean))
                    ? i
                    : [],
                a =
                  null !=
                  (s =
                    null == l
                      ? void 0
                      : l.map((e) => n.find((t) => t.id === e)).filter(Boolean))
                    ? s
                    : [];
              return h(
                t,
                [
                  ...r,
                  ...n.filter(
                    (e) =>
                      !(
                        (null != o && o.includes(e.id)) ||
                        (null != l && l.includes(e.id))
                      ),
                  ),
                  ...a,
                ],
                e,
              );
            },
            u(e.options, g),
          )),
            (e.getCenterHeaderGroups = a(
              () => [
                e.getAllColumns(),
                e.getVisibleLeafColumns(),
                e.getState().columnPinning.left,
                e.getState().columnPinning.right,
              ],
              (t, n, o, l) =>
                h(
                  t,
                  (n = n.filter(
                    (e) =>
                      !(
                        (null != o && o.includes(e.id)) ||
                        (null != l && l.includes(e.id))
                      ),
                  )),
                  e,
                  "center",
                ),
              u(e.options, g),
            )),
            (e.getLeftHeaderGroups = a(
              () => [
                e.getAllColumns(),
                e.getVisibleLeafColumns(),
                e.getState().columnPinning.left,
              ],
              (t, n, o) => {
                var l;
                return h(
                  t,
                  null !=
                    (l =
                      null == o
                        ? void 0
                        : o
                            .map((e) => n.find((t) => t.id === e))
                            .filter(Boolean))
                    ? l
                    : [],
                  e,
                  "left",
                );
              },
              u(e.options, g),
            )),
            (e.getRightHeaderGroups = a(
              () => [
                e.getAllColumns(),
                e.getVisibleLeafColumns(),
                e.getState().columnPinning.right,
              ],
              (t, n, o) => {
                var l;
                return h(
                  t,
                  null !=
                    (l =
                      null == o
                        ? void 0
                        : o
                            .map((e) => n.find((t) => t.id === e))
                            .filter(Boolean))
                    ? l
                    : [],
                  e,
                  "right",
                );
              },
              u(e.options, g),
            )),
            (e.getFooterGroups = a(
              () => [e.getHeaderGroups()],
              (e) => [...e].reverse(),
              u(e.options, g),
            )),
            (e.getLeftFooterGroups = a(
              () => [e.getLeftHeaderGroups()],
              (e) => [...e].reverse(),
              u(e.options, g),
            )),
            (e.getCenterFooterGroups = a(
              () => [e.getCenterHeaderGroups()],
              (e) => [...e].reverse(),
              u(e.options, g),
            )),
            (e.getRightFooterGroups = a(
              () => [e.getRightHeaderGroups()],
              (e) => [...e].reverse(),
              u(e.options, g),
            )),
            (e.getFlatHeaders = a(
              () => [e.getHeaderGroups()],
              (e) => e.map((e) => e.headers).flat(),
              u(e.options, g),
            )),
            (e.getLeftFlatHeaders = a(
              () => [e.getLeftHeaderGroups()],
              (e) => e.map((e) => e.headers).flat(),
              u(e.options, g),
            )),
            (e.getCenterFlatHeaders = a(
              () => [e.getCenterHeaderGroups()],
              (e) => e.map((e) => e.headers).flat(),
              u(e.options, g),
            )),
            (e.getRightFlatHeaders = a(
              () => [e.getRightHeaderGroups()],
              (e) => e.map((e) => e.headers).flat(),
              u(e.options, g),
            )),
            (e.getCenterLeafHeaders = a(
              () => [e.getCenterFlatHeaders()],
              (e) =>
                e.filter((e) => {
                  var t;
                  return !(null != (t = e.subHeaders) && t.length);
                }),
              u(e.options, g),
            )),
            (e.getLeftLeafHeaders = a(
              () => [e.getLeftFlatHeaders()],
              (e) =>
                e.filter((e) => {
                  var t;
                  return !(null != (t = e.subHeaders) && t.length);
                }),
              u(e.options, g),
            )),
            (e.getRightLeafHeaders = a(
              () => [e.getRightFlatHeaders()],
              (e) =>
                e.filter((e) => {
                  var t;
                  return !(null != (t = e.subHeaders) && t.length);
                }),
              u(e.options, g),
            )),
            (e.getLeafHeaders = a(
              () => [
                e.getLeftHeaderGroups(),
                e.getCenterHeaderGroups(),
                e.getRightHeaderGroups(),
              ],
              (e, t, n) => {
                var o, l, i, s, r, a;
                return [
                  ...(null != (o = null == (l = e[0]) ? void 0 : l.headers)
                    ? o
                    : []),
                  ...(null != (i = null == (s = t[0]) ? void 0 : s.headers)
                    ? i
                    : []),
                  ...(null != (r = null == (a = n[0]) ? void 0 : a.headers)
                    ? r
                    : []),
                ]
                  .map((e) => e.getLeafHeaders())
                  .flat();
              },
              u(e.options, g),
            ));
        },
      };
      function h(e, t, n, o) {
        var l, i;
        let s = 0;
        const r = function (e, t) {
          void 0 === t && (t = 1),
            (s = Math.max(s, t)),
            e
              .filter((e) => e.getIsVisible())
              .forEach((e) => {
                var n;
                null != (n = e.columns) && n.length && r(e.columns, t + 1);
              }, 0);
        };
        r(e);
        let a = [];
        const u = (e, t) => {
            const l = {
                depth: t,
                id: [o, `${t}`].filter(Boolean).join("_"),
                headers: [],
              },
              i = [];
            e.forEach((e) => {
              const s = [...i].reverse()[0];
              let r,
                a = !1;
              if (
                (e.column.depth === l.depth && e.column.parent
                  ? (r = e.column.parent)
                  : ((r = e.column), (a = !0)),
                s && (null == s ? void 0 : s.column) === r)
              )
                s.subHeaders.push(e);
              else {
                const l = d(n, r, {
                  id: [o, t, r.id, null == e ? void 0 : e.id]
                    .filter(Boolean)
                    .join("_"),
                  isPlaceholder: a,
                  placeholderId: a
                    ? `${i.filter((e) => e.column === r).length}`
                    : void 0,
                  depth: t,
                  index: i.length,
                });
                l.subHeaders.push(e), i.push(l);
              }
              l.headers.push(e), (e.headerGroup = l);
            }),
              a.push(l),
              t > 0 && u(i, t - 1);
          },
          g = t.map((e, t) => d(n, e, { depth: s, index: t }));
        u(g, s - 1), a.reverse();
        const c = (e) =>
          e
            .filter((e) => e.column.getIsVisible())
            .map((e) => {
              let t = 0,
                n = 0,
                o = [0];
              e.subHeaders && e.subHeaders.length
                ? ((o = []),
                  c(e.subHeaders).forEach((e) => {
                    let { colSpan: n, rowSpan: l } = e;
                    (t += n), o.push(l);
                  }))
                : (t = 1);
              return (
                (n += Math.min(...o)),
                (e.colSpan = t),
                (e.rowSpan = n),
                { colSpan: t, rowSpan: n }
              );
            });
        return (
          c(null != (l = null == (i = a[0]) ? void 0 : i.headers) ? l : []), a
        );
      }
      const f = (e, t, n, o, l, i, s) => {
          let g = {
            id: t,
            index: o,
            original: n,
            depth: l,
            parentId: s,
            _valuesCache: {},
            _uniqueValuesCache: {},
            getValue: (t) => {
              if (g._valuesCache.hasOwnProperty(t)) return g._valuesCache[t];
              const n = e.getColumn(t);
              return null != n && n.accessorFn
                ? ((g._valuesCache[t] = n.accessorFn(g.original, o)),
                  g._valuesCache[t])
                : void 0;
            },
            getUniqueValues: (t) => {
              if (g._uniqueValuesCache.hasOwnProperty(t))
                return g._uniqueValuesCache[t];
              const n = e.getColumn(t);
              return null != n && n.accessorFn
                ? n.columnDef.getUniqueValues
                  ? ((g._uniqueValuesCache[t] = n.columnDef.getUniqueValues(
                      g.original,
                      o,
                    )),
                    g._uniqueValuesCache[t])
                  : ((g._uniqueValuesCache[t] = [g.getValue(t)]),
                    g._uniqueValuesCache[t])
                : void 0;
            },
            renderValue: (t) => {
              var n;
              return null != (n = g.getValue(t))
                ? n
                : e.options.renderFallbackValue;
            },
            subRows: null != i ? i : [],
            getLeafRows: () => r(g.subRows, (e) => e.subRows),
            getParentRow: () =>
              g.parentId ? e.getRow(g.parentId, !0) : void 0,
            getParentRows: () => {
              let e = [],
                t = g;
              for (;;) {
                const n = t.getParentRow();
                if (!n) break;
                e.push(n), (t = n);
              }
              return e.reverse();
            },
            getAllCells: a(
              () => [e.getAllLeafColumns()],
              (t) =>
                t.map((t) =>
                  (function (e, t, n, o) {
                    const l = {
                      id: `${t.id}_${n.id}`,
                      row: t,
                      column: n,
                      getValue: () => t.getValue(o),
                      renderValue: () => {
                        var t;
                        return null != (t = l.getValue())
                          ? t
                          : e.options.renderFallbackValue;
                      },
                      getContext: a(
                        () => [e, n, t, l],
                        (e, t, n, o) => ({
                          table: e,
                          column: t,
                          row: n,
                          cell: o,
                          getValue: o.getValue,
                          renderValue: o.renderValue,
                        }),
                        u(e.options, "debugCells"),
                      ),
                    };
                    return (
                      e._features.forEach((o) => {
                        null == o.createCell || o.createCell(l, n, t, e);
                      }, {}),
                      l
                    );
                  })(e, g, t, t.id),
                ),
              u(e.options, "debugRows"),
            ),
            _getAllCellsByColumnId: a(
              () => [g.getAllCells()],
              (e) => e.reduce((e, t) => ((e[t.column.id] = t), e), {}),
              u(e.options, "debugRows"),
            ),
          };
          for (let t = 0; t < e._features.length; t++) {
            const n = e._features[t];
            null == n || null == n.createRow || n.createRow(g, e);
          }
          return g;
        },
        p = {
          createColumn: (e, t) => {
            (e._getFacetedRowModel =
              t.options.getFacetedRowModel &&
              t.options.getFacetedRowModel(t, e.id)),
              (e.getFacetedRowModel = () =>
                e._getFacetedRowModel
                  ? e._getFacetedRowModel()
                  : t.getPreFilteredRowModel()),
              (e._getFacetedUniqueValues =
                t.options.getFacetedUniqueValues &&
                t.options.getFacetedUniqueValues(t, e.id)),
              (e.getFacetedUniqueValues = () =>
                e._getFacetedUniqueValues
                  ? e._getFacetedUniqueValues()
                  : new Map()),
              (e._getFacetedMinMaxValues =
                t.options.getFacetedMinMaxValues &&
                t.options.getFacetedMinMaxValues(t, e.id)),
              (e.getFacetedMinMaxValues = () => {
                if (e._getFacetedMinMaxValues)
                  return e._getFacetedMinMaxValues();
              });
          },
        },
        m = (e, t, n) => {
          var o, l;
          const i =
            null == n || null == (o = n.toString()) ? void 0 : o.toLowerCase();
          return Boolean(
            null == (l = e.getValue(t)) ||
              null == (l = l.toString()) ||
              null == (l = l.toLowerCase())
              ? void 0
              : l.includes(i),
          );
        };
      m.autoRemove = (e) => x(e);
      const v = (e, t, n) => {
        var o;
        return Boolean(
          null == (o = e.getValue(t)) || null == (o = o.toString())
            ? void 0
            : o.includes(n),
        );
      };
      v.autoRemove = (e) => x(e);
      const w = (e, t, n) => {
        var o;
        return (
          (null == (o = e.getValue(t)) || null == (o = o.toString())
            ? void 0
            : o.toLowerCase()) === (null == n ? void 0 : n.toLowerCase())
        );
      };
      w.autoRemove = (e) => x(e);
      const S = (e, t, n) => {
        var o;
        return null == (o = e.getValue(t)) ? void 0 : o.includes(n);
      };
      S.autoRemove = (e) => x(e) || !(null != e && e.length);
      const b = (e, t, n) =>
        !n.some((n) => {
          var o;
          return !(null != (o = e.getValue(t)) && o.includes(n));
        });
      b.autoRemove = (e) => x(e) || !(null != e && e.length);
      const C = (e, t, n) =>
        n.some((n) => {
          var o;
          return null == (o = e.getValue(t)) ? void 0 : o.includes(n);
        });
      C.autoRemove = (e) => x(e) || !(null != e && e.length);
      const R = (e, t, n) => e.getValue(t) === n;
      R.autoRemove = (e) => x(e);
      const F = (e, t, n) => e.getValue(t) == n;
      F.autoRemove = (e) => x(e);
      const M = (e, t, n) => {
        let [o, l] = n;
        const i = e.getValue(t);
        return i >= o && i <= l;
      };
      (M.resolveFilterValue = (e) => {
        let [t, n] = e,
          o = "number" != typeof t ? parseFloat(t) : t,
          l = "number" != typeof n ? parseFloat(n) : n,
          i = null === t || Number.isNaN(o) ? -1 / 0 : o,
          s = null === n || Number.isNaN(l) ? 1 / 0 : l;
        if (i > s) {
          const e = i;
          (i = s), (s = e);
        }
        return [i, s];
      }),
        (M.autoRemove = (e) => x(e) || (x(e[0]) && x(e[1])));
      const I = {
        includesString: m,
        includesStringSensitive: v,
        equalsString: w,
        arrIncludes: S,
        arrIncludesAll: b,
        arrIncludesSome: C,
        equals: R,
        weakEquals: F,
        inNumberRange: M,
      };
      function x(e) {
        return null == e || "" === e;
      }
      const V = {
        getDefaultColumnDef: () => ({ filterFn: "auto" }),
        getInitialState: (e) => ({ columnFilters: [], ...e }),
        getDefaultOptions: (e) => ({
          onColumnFiltersChange: i("columnFilters", e),
          filterFromLeafRows: !1,
          maxLeafRowFilterDepth: 100,
        }),
        createColumn: (e, t) => {
          (e.getAutoFilterFn = () => {
            const n = t.getCoreRowModel().flatRows[0],
              o = null == n ? void 0 : n.getValue(e.id);
            return "string" == typeof o
              ? I.includesString
              : "number" == typeof o
                ? I.inNumberRange
                : "boolean" == typeof o || (null !== o && "object" == typeof o)
                  ? I.equals
                  : Array.isArray(o)
                    ? I.arrIncludes
                    : I.weakEquals;
          }),
            (e.getFilterFn = () => {
              var n, o;
              return s(e.columnDef.filterFn)
                ? e.columnDef.filterFn
                : "auto" === e.columnDef.filterFn
                  ? e.getAutoFilterFn()
                  : null !=
                      (n =
                        null == (o = t.options.filterFns)
                          ? void 0
                          : o[e.columnDef.filterFn])
                    ? n
                    : I[e.columnDef.filterFn];
            }),
            (e.getCanFilter = () => {
              var n, o, l;
              return (
                (null == (n = e.columnDef.enableColumnFilter) || n) &&
                (null == (o = t.options.enableColumnFilters) || o) &&
                (null == (l = t.options.enableFilters) || l) &&
                !!e.accessorFn
              );
            }),
            (e.getIsFiltered = () => e.getFilterIndex() > -1),
            (e.getFilterValue = () => {
              var n;
              return null == (n = t.getState().columnFilters) ||
                null == (n = n.find((t) => t.id === e.id))
                ? void 0
                : n.value;
            }),
            (e.getFilterIndex = () => {
              var n, o;
              return null !=
                (n =
                  null == (o = t.getState().columnFilters)
                    ? void 0
                    : o.findIndex((t) => t.id === e.id))
                ? n
                : -1;
            }),
            (e.setFilterValue = (n) => {
              t.setColumnFilters((t) => {
                const o = e.getFilterFn(),
                  i = null == t ? void 0 : t.find((t) => t.id === e.id),
                  s = l(n, i ? i.value : void 0);
                var r;
                if (P(o, s, e))
                  return null !=
                    (r = null == t ? void 0 : t.filter((t) => t.id !== e.id))
                    ? r
                    : [];
                const a = { id: e.id, value: s };
                var u;
                return i
                  ? null !=
                    (u =
                      null == t
                        ? void 0
                        : t.map((t) => (t.id === e.id ? a : t)))
                    ? u
                    : []
                  : null != t && t.length
                    ? [...t, a]
                    : [a];
              });
            });
        },
        createRow: (e, t) => {
          (e.columnFilters = {}), (e.columnFiltersMeta = {});
        },
        createTable: (e) => {
          (e.setColumnFilters = (t) => {
            const n = e.getAllLeafColumns();
            null == e.options.onColumnFiltersChange ||
              e.options.onColumnFiltersChange((e) => {
                var o;
                return null == (o = l(t, e))
                  ? void 0
                  : o.filter((e) => {
                      const t = n.find((t) => t.id === e.id);
                      if (t) {
                        if (P(t.getFilterFn(), e.value, t)) return !1;
                      }
                      return !0;
                    });
              });
          }),
            (e.resetColumnFilters = (t) => {
              var n, o;
              e.setColumnFilters(
                t
                  ? []
                  : null !=
                      (n =
                        null == (o = e.initialState) ? void 0 : o.columnFilters)
                    ? n
                    : [],
              );
            }),
            (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
            (e.getFilteredRowModel = () => (
              !e._getFilteredRowModel &&
                e.options.getFilteredRowModel &&
                (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
              e.options.manualFiltering || !e._getFilteredRowModel
                ? e.getPreFilteredRowModel()
                : e._getFilteredRowModel()
            ));
        },
      };
      function P(e, t, n) {
        return (
          (!(!e || !e.autoRemove) && e.autoRemove(t, n)) ||
          void 0 === t ||
          ("string" == typeof t && !t)
        );
      }
      const y = {
          sum: (e, t, n) =>
            n.reduce((t, n) => {
              const o = n.getValue(e);
              return t + ("number" == typeof o ? o : 0);
            }, 0),
          min: (e, t, n) => {
            let o;
            return (
              n.forEach((t) => {
                const n = t.getValue(e);
                null != n && (o > n || (void 0 === o && n >= n)) && (o = n);
              }),
              o
            );
          },
          max: (e, t, n) => {
            let o;
            return (
              n.forEach((t) => {
                const n = t.getValue(e);
                null != n && (o < n || (void 0 === o && n >= n)) && (o = n);
              }),
              o
            );
          },
          extent: (e, t, n) => {
            let o, l;
            return (
              n.forEach((t) => {
                const n = t.getValue(e);
                null != n &&
                  (void 0 === o
                    ? n >= n && (o = l = n)
                    : (o > n && (o = n), l < n && (l = n)));
              }),
              [o, l]
            );
          },
          mean: (e, t) => {
            let n = 0,
              o = 0;
            if (
              (t.forEach((t) => {
                let l = t.getValue(e);
                null != l && (l = +l) >= l && (++n, (o += l));
              }),
              n)
            )
              return o / n;
          },
          median: (e, t) => {
            if (!t.length) return;
            const n = t.map((t) => t.getValue(e));
            if (
              ((o = n),
              !Array.isArray(o) || !o.every((e) => "number" == typeof e))
            )
              return;
            var o;
            if (1 === n.length) return n[0];
            const l = Math.floor(n.length / 2),
              i = n.sort((e, t) => e - t);
            return n.length % 2 != 0 ? i[l] : (i[l - 1] + i[l]) / 2;
          },
          unique: (e, t) =>
            Array.from(new Set(t.map((t) => t.getValue(e))).values()),
          uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
          count: (e, t) => t.length,
        },
        E = {
          getDefaultColumnDef: () => ({
            aggregatedCell: (e) => {
              var t, n;
              return null !=
                (t =
                  null == (n = e.getValue()) || null == n.toString
                    ? void 0
                    : n.toString())
                ? t
                : null;
            },
            aggregationFn: "auto",
          }),
          getInitialState: (e) => ({ grouping: [], ...e }),
          getDefaultOptions: (e) => ({
            onGroupingChange: i("grouping", e),
            groupedColumnMode: "reorder",
          }),
          createColumn: (e, t) => {
            (e.toggleGrouping = () => {
              t.setGrouping((t) =>
                null != t && t.includes(e.id)
                  ? t.filter((t) => t !== e.id)
                  : [...(null != t ? t : []), e.id],
              );
            }),
              (e.getCanGroup = () => {
                var n, o;
                return (
                  (null == (n = e.columnDef.enableGrouping) || n) &&
                  (null == (o = t.options.enableGrouping) || o) &&
                  (!!e.accessorFn || !!e.columnDef.getGroupingValue)
                );
              }),
              (e.getIsGrouped = () => {
                var n;
                return null == (n = t.getState().grouping)
                  ? void 0
                  : n.includes(e.id);
              }),
              (e.getGroupedIndex = () => {
                var n;
                return null == (n = t.getState().grouping)
                  ? void 0
                  : n.indexOf(e.id);
              }),
              (e.getToggleGroupingHandler = () => {
                const t = e.getCanGroup();
                return () => {
                  t && e.toggleGrouping();
                };
              }),
              (e.getAutoAggregationFn = () => {
                const n = t.getCoreRowModel().flatRows[0],
                  o = null == n ? void 0 : n.getValue(e.id);
                return "number" == typeof o
                  ? y.sum
                  : "[object Date]" === Object.prototype.toString.call(o)
                    ? y.extent
                    : void 0;
              }),
              (e.getAggregationFn = () => {
                var n, o;
                if (!e) throw new Error();
                return s(e.columnDef.aggregationFn)
                  ? e.columnDef.aggregationFn
                  : "auto" === e.columnDef.aggregationFn
                    ? e.getAutoAggregationFn()
                    : null !=
                        (n =
                          null == (o = t.options.aggregationFns)
                            ? void 0
                            : o[e.columnDef.aggregationFn])
                      ? n
                      : y[e.columnDef.aggregationFn];
              });
          },
          createTable: (e) => {
            (e.setGrouping = (t) =>
              null == e.options.onGroupingChange
                ? void 0
                : e.options.onGroupingChange(t)),
              (e.resetGrouping = (t) => {
                var n, o;
                e.setGrouping(
                  t
                    ? []
                    : null !=
                        (n = null == (o = e.initialState) ? void 0 : o.grouping)
                      ? n
                      : [],
                );
              }),
              (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
              (e.getGroupedRowModel = () => (
                !e._getGroupedRowModel &&
                  e.options.getGroupedRowModel &&
                  (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
                e.options.manualGrouping || !e._getGroupedRowModel
                  ? e.getPreGroupedRowModel()
                  : e._getGroupedRowModel()
              ));
          },
          createRow: (e, t) => {
            (e.getIsGrouped = () => !!e.groupingColumnId),
              (e.getGroupingValue = (n) => {
                if (e._groupingValuesCache.hasOwnProperty(n))
                  return e._groupingValuesCache[n];
                const o = t.getColumn(n);
                return null != o && o.columnDef.getGroupingValue
                  ? ((e._groupingValuesCache[n] = o.columnDef.getGroupingValue(
                      e.original,
                    )),
                    e._groupingValuesCache[n])
                  : e.getValue(n);
              }),
              (e._groupingValuesCache = {});
          },
          createCell: (e, t, n, o) => {
            (e.getIsGrouped = () =>
              t.getIsGrouped() && t.id === n.groupingColumnId),
              (e.getIsPlaceholder = () =>
                !e.getIsGrouped() && t.getIsGrouped()),
              (e.getIsAggregated = () => {
                var t;
                return (
                  !e.getIsGrouped() &&
                  !e.getIsPlaceholder() &&
                  !(null == (t = n.subRows) || !t.length)
                );
              });
          },
        };
      const _ = {
          getInitialState: (e) => ({ columnOrder: [], ...e }),
          getDefaultOptions: (e) => ({
            onColumnOrderChange: i("columnOrder", e),
          }),
          createColumn: (e, t) => {
            (e.getIndex = a(
              (e) => [L(t, e)],
              (t) => t.findIndex((t) => t.id === e.id),
              u(t.options, "debugColumns"),
            )),
              (e.getIsFirstColumn = (n) => {
                var o;
                return (null == (o = L(t, n)[0]) ? void 0 : o.id) === e.id;
              }),
              (e.getIsLastColumn = (n) => {
                var o;
                const l = L(t, n);
                return (null == (o = l[l.length - 1]) ? void 0 : o.id) === e.id;
              });
          },
          createTable: (e) => {
            (e.setColumnOrder = (t) =>
              null == e.options.onColumnOrderChange
                ? void 0
                : e.options.onColumnOrderChange(t)),
              (e.resetColumnOrder = (t) => {
                var n;
                e.setColumnOrder(
                  t ? [] : null != (n = e.initialState.columnOrder) ? n : [],
                );
              }),
              (e._getOrderColumnsFn = a(
                () => [
                  e.getState().columnOrder,
                  e.getState().grouping,
                  e.options.groupedColumnMode,
                ],
                (e, t, n) => (o) => {
                  let l = [];
                  if (null != e && e.length) {
                    const t = [...e],
                      n = [...o];
                    for (; n.length && t.length; ) {
                      const e = t.shift(),
                        o = n.findIndex((t) => t.id === e);
                      o > -1 && l.push(n.splice(o, 1)[0]);
                    }
                    l = [...l, ...n];
                  } else l = o;
                  return (function (e, t, n) {
                    if (null == t || !t.length || !n) return e;
                    const o = e.filter((e) => !t.includes(e.id));
                    return "remove" === n
                      ? o
                      : [
                          ...t
                            .map((t) => e.find((e) => e.id === t))
                            .filter(Boolean),
                          ...o,
                        ];
                  })(l, t, n);
                },
                u(e.options, "debugTable"),
              ));
          },
        },
        z = {
          getInitialState: (e) => ({
            columnPinning: { left: [], right: [] },
            ...e,
          }),
          getDefaultOptions: (e) => ({
            onColumnPinningChange: i("columnPinning", e),
          }),
          createColumn: (e, t) => {
            (e.pin = (n) => {
              const o = e
                .getLeafColumns()
                .map((e) => e.id)
                .filter(Boolean);
              t.setColumnPinning((e) => {
                var t, l, i, s, r, a;
                return "right" === n
                  ? {
                      left: (null != (i = null == e ? void 0 : e.left)
                        ? i
                        : []
                      ).filter((e) => !(null != o && o.includes(e))),
                      right: [
                        ...(null != (s = null == e ? void 0 : e.right)
                          ? s
                          : []
                        ).filter((e) => !(null != o && o.includes(e))),
                        ...o,
                      ],
                    }
                  : "left" === n
                    ? {
                        left: [
                          ...(null != (r = null == e ? void 0 : e.left)
                            ? r
                            : []
                          ).filter((e) => !(null != o && o.includes(e))),
                          ...o,
                        ],
                        right: (null != (a = null == e ? void 0 : e.right)
                          ? a
                          : []
                        ).filter((e) => !(null != o && o.includes(e))),
                      }
                    : {
                        left: (null != (t = null == e ? void 0 : e.left)
                          ? t
                          : []
                        ).filter((e) => !(null != o && o.includes(e))),
                        right: (null != (l = null == e ? void 0 : e.right)
                          ? l
                          : []
                        ).filter((e) => !(null != o && o.includes(e))),
                      };
              });
            }),
              (e.getCanPin = () =>
                e.getLeafColumns().some((e) => {
                  var n, o, l;
                  return (
                    (null == (n = e.columnDef.enablePinning) || n) &&
                    (null ==
                      (o =
                        null != (l = t.options.enableColumnPinning)
                          ? l
                          : t.options.enablePinning) ||
                      o)
                  );
                })),
              (e.getIsPinned = () => {
                const n = e.getLeafColumns().map((e) => e.id),
                  { left: o, right: l } = t.getState().columnPinning,
                  i = n.some((e) => (null == o ? void 0 : o.includes(e))),
                  s = n.some((e) => (null == l ? void 0 : l.includes(e)));
                return i ? "left" : !!s && "right";
              }),
              (e.getPinnedIndex = () => {
                var n, o;
                const l = e.getIsPinned();
                return l
                  ? null !=
                    (n =
                      null == (o = t.getState().columnPinning) ||
                      null == (o = o[l])
                        ? void 0
                        : o.indexOf(e.id))
                    ? n
                    : -1
                  : 0;
              });
          },
          createRow: (e, t) => {
            (e.getCenterVisibleCells = a(
              () => [
                e._getAllVisibleCells(),
                t.getState().columnPinning.left,
                t.getState().columnPinning.right,
              ],
              (e, t, n) => {
                const o = [...(null != t ? t : []), ...(null != n ? n : [])];
                return e.filter((e) => !o.includes(e.column.id));
              },
              u(t.options, "debugRows"),
            )),
              (e.getLeftVisibleCells = a(
                () => [
                  e._getAllVisibleCells(),
                  t.getState().columnPinning.left,
                ],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.column.id === t))
                    .filter(Boolean)
                    .map((e) => ({ ...e, position: "left" })),
                u(t.options, "debugRows"),
              )),
              (e.getRightVisibleCells = a(
                () => [
                  e._getAllVisibleCells(),
                  t.getState().columnPinning.right,
                ],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.column.id === t))
                    .filter(Boolean)
                    .map((e) => ({ ...e, position: "right" })),
                u(t.options, "debugRows"),
              ));
          },
          createTable: (e) => {
            (e.setColumnPinning = (t) =>
              null == e.options.onColumnPinningChange
                ? void 0
                : e.options.onColumnPinningChange(t)),
              (e.resetColumnPinning = (t) => {
                var n, o;
                return e.setColumnPinning(
                  t
                    ? { left: [], right: [] }
                    : null !=
                        (n =
                          null == (o = e.initialState)
                            ? void 0
                            : o.columnPinning)
                      ? n
                      : { left: [], right: [] },
                );
              }),
              (e.getIsSomeColumnsPinned = (t) => {
                var n;
                const o = e.getState().columnPinning;
                var l, i;
                return t
                  ? Boolean(null == (n = o[t]) ? void 0 : n.length)
                  : Boolean(
                      (null == (l = o.left) ? void 0 : l.length) ||
                        (null == (i = o.right) ? void 0 : i.length),
                    );
              }),
              (e.getLeftLeafColumns = a(
                () => [e.getAllLeafColumns(), e.getState().columnPinning.left],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.id === t))
                    .filter(Boolean),
                u(e.options, "debugColumns"),
              )),
              (e.getRightLeafColumns = a(
                () => [e.getAllLeafColumns(), e.getState().columnPinning.right],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.id === t))
                    .filter(Boolean),
                u(e.options, "debugColumns"),
              )),
              (e.getCenterLeafColumns = a(
                () => [
                  e.getAllLeafColumns(),
                  e.getState().columnPinning.left,
                  e.getState().columnPinning.right,
                ],
                (e, t, n) => {
                  const o = [...(null != t ? t : []), ...(null != n ? n : [])];
                  return e.filter((e) => !o.includes(e.id));
                },
                u(e.options, "debugColumns"),
              ));
          },
        },
        O = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
        A = {
          getDefaultColumnDef: () => O,
          getInitialState: (e) => ({
            columnSizing: {},
            columnSizingInfo: {
              startOffset: null,
              startSize: null,
              deltaOffset: null,
              deltaPercentage: null,
              isResizingColumn: !1,
              columnSizingStart: [],
            },
            ...e,
          }),
          getDefaultOptions: (e) => ({
            columnResizeMode: "onEnd",
            columnResizeDirection: "ltr",
            onColumnSizingChange: i("columnSizing", e),
            onColumnSizingInfoChange: i("columnSizingInfo", e),
          }),
          createColumn: (e, t) => {
            (e.getSize = () => {
              var n, o, l;
              const i = t.getState().columnSizing[e.id];
              return Math.min(
                Math.max(
                  null != (n = e.columnDef.minSize) ? n : O.minSize,
                  null != (o = null != i ? i : e.columnDef.size) ? o : O.size,
                ),
                null != (l = e.columnDef.maxSize) ? l : O.maxSize,
              );
            }),
              (e.getStart = a(
                (e) => [e, L(t, e), t.getState().columnSizing],
                (t, n) =>
                  n
                    .slice(0, e.getIndex(t))
                    .reduce((e, t) => e + t.getSize(), 0),
                u(t.options, "debugColumns"),
              )),
              (e.getAfter = a(
                (e) => [e, L(t, e), t.getState().columnSizing],
                (t, n) =>
                  n
                    .slice(e.getIndex(t) + 1)
                    .reduce((e, t) => e + t.getSize(), 0),
                u(t.options, "debugColumns"),
              )),
              (e.resetSize = () => {
                t.setColumnSizing((t) => {
                  let { [e.id]: n, ...o } = t;
                  return o;
                });
              }),
              (e.getCanResize = () => {
                var n, o;
                return (
                  (null == (n = e.columnDef.enableResizing) || n) &&
                  (null == (o = t.options.enableColumnResizing) || o)
                );
              }),
              (e.getIsResizing = () =>
                t.getState().columnSizingInfo.isResizingColumn === e.id);
          },
          createHeader: (e, t) => {
            (e.getSize = () => {
              let t = 0;
              const n = (e) => {
                var o;
                e.subHeaders.length
                  ? e.subHeaders.forEach(n)
                  : (t += null != (o = e.column.getSize()) ? o : 0);
              };
              return n(e), t;
            }),
              (e.getStart = () => {
                if (e.index > 0) {
                  const t = e.headerGroup.headers[e.index - 1];
                  return t.getStart() + t.getSize();
                }
                return 0;
              }),
              (e.getResizeHandler = (n) => {
                const o = t.getColumn(e.column.id),
                  l = null == o ? void 0 : o.getCanResize();
                return (i) => {
                  if (!o || !l) return;
                  if (
                    (null == i.persist || i.persist(),
                    G(i) && i.touches && i.touches.length > 1)
                  )
                    return;
                  const s = e.getSize(),
                    r = e
                      ? e
                          .getLeafHeaders()
                          .map((e) => [e.column.id, e.column.getSize()])
                      : [[o.id, o.getSize()]],
                    a = G(i) ? Math.round(i.touches[0].clientX) : i.clientX,
                    u = {},
                    g = (e, n) => {
                      "number" == typeof n &&
                        (t.setColumnSizingInfo((e) => {
                          var o, l;
                          const i =
                              "rtl" === t.options.columnResizeDirection
                                ? -1
                                : 1,
                            s =
                              (n -
                                (null !=
                                (o = null == e ? void 0 : e.startOffset)
                                  ? o
                                  : 0)) *
                              i,
                            r = Math.max(
                              s /
                                (null != (l = null == e ? void 0 : e.startSize)
                                  ? l
                                  : 0),
                              -0.999999,
                            );
                          return (
                            e.columnSizingStart.forEach((e) => {
                              let [t, n] = e;
                              u[t] =
                                Math.round(100 * Math.max(n + n * r, 0)) / 100;
                            }),
                            { ...e, deltaOffset: s, deltaPercentage: r }
                          );
                        }),
                        ("onChange" !== t.options.columnResizeMode &&
                          "end" !== e) ||
                          t.setColumnSizing((e) => ({ ...e, ...u })));
                    },
                    d = (e) => g("move", e),
                    c = (e) => {
                      g("end", e),
                        t.setColumnSizingInfo((e) => ({
                          ...e,
                          isResizingColumn: !1,
                          startOffset: null,
                          startSize: null,
                          deltaOffset: null,
                          deltaPercentage: null,
                          columnSizingStart: [],
                        }));
                    },
                    h = n || "undefined" != typeof document ? document : null,
                    f = {
                      moveHandler: (e) => d(e.clientX),
                      upHandler: (e) => {
                        null == h ||
                          h.removeEventListener("mousemove", f.moveHandler),
                          null == h ||
                            h.removeEventListener("mouseup", f.upHandler),
                          c(e.clientX);
                      },
                    },
                    p = {
                      moveHandler: (e) => (
                        e.cancelable &&
                          (e.preventDefault(), e.stopPropagation()),
                        d(e.touches[0].clientX),
                        !1
                      ),
                      upHandler: (e) => {
                        var t;
                        null == h ||
                          h.removeEventListener("touchmove", p.moveHandler),
                          null == h ||
                            h.removeEventListener("touchend", p.upHandler),
                          e.cancelable &&
                            (e.preventDefault(), e.stopPropagation()),
                          c(null == (t = e.touches[0]) ? void 0 : t.clientX);
                      },
                    },
                    m = !!(function () {
                      if ("boolean" == typeof D) return D;
                      let e = !1;
                      try {
                        const t = {
                            get passive() {
                              return (e = !0), !1;
                            },
                          },
                          n = () => {};
                        window.addEventListener("test", n, t),
                          window.removeEventListener("test", n);
                      } catch (t) {
                        e = !1;
                      }
                      return (D = e), D;
                    })() && { passive: !1 };
                  G(i)
                    ? (null == h ||
                        h.addEventListener("touchmove", p.moveHandler, m),
                      null == h ||
                        h.addEventListener("touchend", p.upHandler, m))
                    : (null == h ||
                        h.addEventListener("mousemove", f.moveHandler, m),
                      null == h ||
                        h.addEventListener("mouseup", f.upHandler, m)),
                    t.setColumnSizingInfo((e) => ({
                      ...e,
                      startOffset: a,
                      startSize: s,
                      deltaOffset: 0,
                      deltaPercentage: 0,
                      columnSizingStart: r,
                      isResizingColumn: o.id,
                    }));
                };
              });
          },
          createTable: (e) => {
            (e.setColumnSizing = (t) =>
              null == e.options.onColumnSizingChange
                ? void 0
                : e.options.onColumnSizingChange(t)),
              (e.setColumnSizingInfo = (t) =>
                null == e.options.onColumnSizingInfoChange
                  ? void 0
                  : e.options.onColumnSizingInfoChange(t)),
              (e.resetColumnSizing = (t) => {
                var n;
                e.setColumnSizing(
                  t ? {} : null != (n = e.initialState.columnSizing) ? n : {},
                );
              }),
              (e.resetHeaderSizeInfo = (t) => {
                var n;
                e.setColumnSizingInfo(
                  t
                    ? {
                        startOffset: null,
                        startSize: null,
                        deltaOffset: null,
                        deltaPercentage: null,
                        isResizingColumn: !1,
                        columnSizingStart: [],
                      }
                    : null != (n = e.initialState.columnSizingInfo)
                      ? n
                      : {
                          startOffset: null,
                          startSize: null,
                          deltaOffset: null,
                          deltaPercentage: null,
                          isResizingColumn: !1,
                          columnSizingStart: [],
                        },
                );
              }),
              (e.getTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getLeftTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getLeftHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getCenterTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getCenterHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getRightTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getRightHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              });
          },
        };
      let D = null;
      function G(e) {
        return "touchstart" === e.type;
      }
      function L(e, t) {
        return t
          ? "center" === t
            ? e.getCenterVisibleLeafColumns()
            : "left" === t
              ? e.getLeftVisibleLeafColumns()
              : e.getRightVisibleLeafColumns()
          : e.getVisibleLeafColumns();
      }
      const T = {
          getInitialState: (e) => ({ rowSelection: {}, ...e }),
          getDefaultOptions: (e) => ({
            onRowSelectionChange: i("rowSelection", e),
            enableRowSelection: !0,
            enableMultiRowSelection: !0,
            enableSubRowSelection: !0,
          }),
          createTable: (e) => {
            (e.setRowSelection = (t) =>
              null == e.options.onRowSelectionChange
                ? void 0
                : e.options.onRowSelectionChange(t)),
              (e.resetRowSelection = (t) => {
                var n;
                return e.setRowSelection(
                  t ? {} : null != (n = e.initialState.rowSelection) ? n : {},
                );
              }),
              (e.toggleAllRowsSelected = (t) => {
                e.setRowSelection((n) => {
                  t = void 0 !== t ? t : !e.getIsAllRowsSelected();
                  const o = { ...n },
                    l = e.getPreGroupedRowModel().flatRows;
                  return (
                    t
                      ? l.forEach((e) => {
                          e.getCanSelect() && (o[e.id] = !0);
                        })
                      : l.forEach((e) => {
                          delete o[e.id];
                        }),
                    o
                  );
                });
              }),
              (e.toggleAllPageRowsSelected = (t) =>
                e.setRowSelection((n) => {
                  const o = void 0 !== t ? t : !e.getIsAllPageRowsSelected(),
                    l = { ...n };
                  return (
                    e.getRowModel().rows.forEach((t) => {
                      H(l, t.id, o, !0, e);
                    }),
                    l
                  );
                })),
              (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
              (e.getSelectedRowModel = a(
                () => [e.getState().rowSelection, e.getCoreRowModel()],
                (t, n) =>
                  Object.keys(t).length
                    ? B(e, n)
                    : { rows: [], flatRows: [], rowsById: {} },
                u(e.options, "debugTable"),
              )),
              (e.getFilteredSelectedRowModel = a(
                () => [e.getState().rowSelection, e.getFilteredRowModel()],
                (t, n) =>
                  Object.keys(t).length
                    ? B(e, n)
                    : { rows: [], flatRows: [], rowsById: {} },
                u(e.options, "debugTable"),
              )),
              (e.getGroupedSelectedRowModel = a(
                () => [e.getState().rowSelection, e.getSortedRowModel()],
                (t, n) =>
                  Object.keys(t).length
                    ? B(e, n)
                    : { rows: [], flatRows: [], rowsById: {} },
                u(e.options, "debugTable"),
              )),
              (e.getIsAllRowsSelected = () => {
                const t = e.getFilteredRowModel().flatRows,
                  { rowSelection: n } = e.getState();
                let o = Boolean(t.length && Object.keys(n).length);
                return (
                  o && t.some((e) => e.getCanSelect() && !n[e.id]) && (o = !1),
                  o
                );
              }),
              (e.getIsAllPageRowsSelected = () => {
                const t = e
                    .getPaginationRowModel()
                    .flatRows.filter((e) => e.getCanSelect()),
                  { rowSelection: n } = e.getState();
                let o = !!t.length;
                return o && t.some((e) => !n[e.id]) && (o = !1), o;
              }),
              (e.getIsSomeRowsSelected = () => {
                var t;
                const n = Object.keys(
                  null != (t = e.getState().rowSelection) ? t : {},
                ).length;
                return n > 0 && n < e.getFilteredRowModel().flatRows.length;
              }),
              (e.getIsSomePageRowsSelected = () => {
                const t = e.getPaginationRowModel().flatRows;
                return (
                  !e.getIsAllPageRowsSelected() &&
                  t
                    .filter((e) => e.getCanSelect())
                    .some((e) => e.getIsSelected() || e.getIsSomeSelected())
                );
              }),
              (e.getToggleAllRowsSelectedHandler = () => (t) => {
                e.toggleAllRowsSelected(t.target.checked);
              }),
              (e.getToggleAllPageRowsSelectedHandler = () => (t) => {
                e.toggleAllPageRowsSelected(t.target.checked);
              });
          },
          createRow: (e, t) => {
            (e.toggleSelected = (n, o) => {
              const l = e.getIsSelected();
              t.setRowSelection((i) => {
                var s;
                if (((n = void 0 !== n ? n : !l), e.getCanSelect() && l === n))
                  return i;
                const r = { ...i };
                return (
                  H(
                    r,
                    e.id,
                    n,
                    null == (s = null == o ? void 0 : o.selectChildren) || s,
                    t,
                  ),
                  r
                );
              });
            }),
              (e.getIsSelected = () => {
                const { rowSelection: n } = t.getState();
                return k(e, n);
              }),
              (e.getIsSomeSelected = () => {
                const { rowSelection: n } = t.getState();
                return "some" === j(e, n);
              }),
              (e.getIsAllSubRowsSelected = () => {
                const { rowSelection: n } = t.getState();
                return "all" === j(e, n);
              }),
              (e.getCanSelect = () => {
                var n;
                return "function" == typeof t.options.enableRowSelection
                  ? t.options.enableRowSelection(e)
                  : null == (n = t.options.enableRowSelection) || n;
              }),
              (e.getCanSelectSubRows = () => {
                var n;
                return "function" == typeof t.options.enableSubRowSelection
                  ? t.options.enableSubRowSelection(e)
                  : null == (n = t.options.enableSubRowSelection) || n;
              }),
              (e.getCanMultiSelect = () => {
                var n;
                return "function" == typeof t.options.enableMultiRowSelection
                  ? t.options.enableMultiRowSelection(e)
                  : null == (n = t.options.enableMultiRowSelection) || n;
              }),
              (e.getToggleSelectedHandler = () => {
                const t = e.getCanSelect();
                return (n) => {
                  var o;
                  t &&
                    e.toggleSelected(
                      null == (o = n.target) ? void 0 : o.checked,
                    );
                };
              });
          },
        },
        H = (e, t, n, o, l) => {
          var i;
          const s = l.getRow(t, !0);
          n
            ? (s.getCanMultiSelect() ||
                Object.keys(e).forEach((t) => delete e[t]),
              s.getCanSelect() && (e[t] = !0))
            : delete e[t],
            o &&
              null != (i = s.subRows) &&
              i.length &&
              s.getCanSelectSubRows() &&
              s.subRows.forEach((t) => H(e, t.id, n, o, l));
        };
      function B(e, t) {
        const n = e.getState().rowSelection,
          o = [],
          l = {},
          i = function (e, t) {
            return e
              .map((e) => {
                var t;
                const s = k(e, n);
                if (
                  (s && (o.push(e), (l[e.id] = e)),
                  null != (t = e.subRows) &&
                    t.length &&
                    (e = { ...e, subRows: i(e.subRows) }),
                  s)
                )
                  return e;
              })
              .filter(Boolean);
          };
        return { rows: i(t.rows), flatRows: o, rowsById: l };
      }
      function k(e, t) {
        var n;
        return null != (n = t[e.id]) && n;
      }
      function j(e, t, n) {
        var o;
        if (null == (o = e.subRows) || !o.length) return !1;
        let l = !0,
          i = !1;
        return (
          e.subRows.forEach((e) => {
            if (
              (!i || l) &&
              (e.getCanSelect() && (k(e, t) ? (i = !0) : (l = !1)),
              e.subRows && e.subRows.length)
            ) {
              const n = j(e, t);
              "all" === n
                ? (i = !0)
                : "some" === n
                  ? ((i = !0), (l = !1))
                  : (l = !1);
            }
          }),
          l ? "all" : !!i && "some"
        );
      }
      const q = /([0-9]+)/gm;
      function N(e, t) {
        return e === t ? 0 : e > t ? 1 : -1;
      }
      function U(e) {
        return "number" == typeof e
          ? isNaN(e) || e === 1 / 0 || e === -1 / 0
            ? ""
            : String(e)
          : "string" == typeof e
            ? e
            : "";
      }
      function $(e, t) {
        const n = e.split(q).filter(Boolean),
          o = t.split(q).filter(Boolean);
        for (; n.length && o.length; ) {
          const e = n.shift(),
            t = o.shift(),
            l = parseInt(e, 10),
            i = parseInt(t, 10),
            s = [l, i].sort();
          if (isNaN(s[0])) {
            if (e > t) return 1;
            if (t > e) return -1;
          } else {
            if (isNaN(s[1])) return isNaN(l) ? -1 : 1;
            if (l > i) return 1;
            if (i > l) return -1;
          }
        }
        return n.length - o.length;
      }
      const W = {
          alphanumeric: (e, t, n) =>
            $(U(e.getValue(n)).toLowerCase(), U(t.getValue(n)).toLowerCase()),
          alphanumericCaseSensitive: (e, t, n) =>
            $(U(e.getValue(n)), U(t.getValue(n))),
          text: (e, t, n) =>
            N(U(e.getValue(n)).toLowerCase(), U(t.getValue(n)).toLowerCase()),
          textCaseSensitive: (e, t, n) => N(U(e.getValue(n)), U(t.getValue(n))),
          datetime: (e, t, n) => {
            const o = e.getValue(n),
              l = t.getValue(n);
            return o > l ? 1 : o < l ? -1 : 0;
          },
          basic: (e, t, n) => N(e.getValue(n), t.getValue(n)),
        },
        K = [
          c,
          {
            getInitialState: (e) => ({ columnVisibility: {}, ...e }),
            getDefaultOptions: (e) => ({
              onColumnVisibilityChange: i("columnVisibility", e),
            }),
            createColumn: (e, t) => {
              (e.toggleVisibility = (n) => {
                e.getCanHide() &&
                  t.setColumnVisibility((t) => ({
                    ...t,
                    [e.id]: null != n ? n : !e.getIsVisible(),
                  }));
              }),
                (e.getIsVisible = () => {
                  var n, o;
                  const l = e.columns;
                  return (
                    null ==
                      (n = l.length
                        ? l.some((e) => e.getIsVisible())
                        : null == (o = t.getState().columnVisibility)
                          ? void 0
                          : o[e.id]) || n
                  );
                }),
                (e.getCanHide = () => {
                  var n, o;
                  return (
                    (null == (n = e.columnDef.enableHiding) || n) &&
                    (null == (o = t.options.enableHiding) || o)
                  );
                }),
                (e.getToggleVisibilityHandler = () => (t) => {
                  null == e.toggleVisibility ||
                    e.toggleVisibility(t.target.checked);
                });
            },
            createRow: (e, t) => {
              (e._getAllVisibleCells = a(
                () => [e.getAllCells(), t.getState().columnVisibility],
                (e) => e.filter((e) => e.column.getIsVisible()),
                u(t.options, "debugRows"),
              )),
                (e.getVisibleCells = a(
                  () => [
                    e.getLeftVisibleCells(),
                    e.getCenterVisibleCells(),
                    e.getRightVisibleCells(),
                  ],
                  (e, t, n) => [...e, ...t, ...n],
                  u(t.options, "debugRows"),
                ));
            },
            createTable: (e) => {
              const t = (t, n) =>
                a(
                  () => [
                    n(),
                    n()
                      .filter((e) => e.getIsVisible())
                      .map((e) => e.id)
                      .join("_"),
                  ],
                  (e) =>
                    e.filter((e) =>
                      null == e.getIsVisible ? void 0 : e.getIsVisible(),
                    ),
                  u(e.options, "debugColumns"),
                );
              (e.getVisibleFlatColumns = t(0, () => e.getAllFlatColumns())),
                (e.getVisibleLeafColumns = t(0, () => e.getAllLeafColumns())),
                (e.getLeftVisibleLeafColumns = t(0, () =>
                  e.getLeftLeafColumns(),
                )),
                (e.getRightVisibleLeafColumns = t(0, () =>
                  e.getRightLeafColumns(),
                )),
                (e.getCenterVisibleLeafColumns = t(0, () =>
                  e.getCenterLeafColumns(),
                )),
                (e.setColumnVisibility = (t) =>
                  null == e.options.onColumnVisibilityChange
                    ? void 0
                    : e.options.onColumnVisibilityChange(t)),
                (e.resetColumnVisibility = (t) => {
                  var n;
                  e.setColumnVisibility(
                    t
                      ? {}
                      : null != (n = e.initialState.columnVisibility)
                        ? n
                        : {},
                  );
                }),
                (e.toggleAllColumnsVisible = (t) => {
                  var n;
                  (t = null != (n = t) ? n : !e.getIsAllColumnsVisible()),
                    e.setColumnVisibility(
                      e
                        .getAllLeafColumns()
                        .reduce(
                          (e, n) => ({
                            ...e,
                            [n.id]:
                              t || !(null != n.getCanHide && n.getCanHide()),
                          }),
                          {},
                        ),
                    );
                }),
                (e.getIsAllColumnsVisible = () =>
                  !e
                    .getAllLeafColumns()
                    .some(
                      (e) => !(null != e.getIsVisible && e.getIsVisible()),
                    )),
                (e.getIsSomeColumnsVisible = () =>
                  e
                    .getAllLeafColumns()
                    .some((e) =>
                      null == e.getIsVisible ? void 0 : e.getIsVisible(),
                    )),
                (e.getToggleAllColumnsVisibilityHandler = () => (t) => {
                  var n;
                  e.toggleAllColumnsVisible(
                    null == (n = t.target) ? void 0 : n.checked,
                  );
                });
            },
          },
          _,
          z,
          p,
          V,
          {
            createTable: (e) => {
              (e._getGlobalFacetedRowModel =
                e.options.getFacetedRowModel &&
                e.options.getFacetedRowModel(e, "__global__")),
                (e.getGlobalFacetedRowModel = () =>
                  e.options.manualFiltering || !e._getGlobalFacetedRowModel
                    ? e.getPreFilteredRowModel()
                    : e._getGlobalFacetedRowModel()),
                (e._getGlobalFacetedUniqueValues =
                  e.options.getFacetedUniqueValues &&
                  e.options.getFacetedUniqueValues(e, "__global__")),
                (e.getGlobalFacetedUniqueValues = () =>
                  e._getGlobalFacetedUniqueValues
                    ? e._getGlobalFacetedUniqueValues()
                    : new Map()),
                (e._getGlobalFacetedMinMaxValues =
                  e.options.getFacetedMinMaxValues &&
                  e.options.getFacetedMinMaxValues(e, "__global__")),
                (e.getGlobalFacetedMinMaxValues = () => {
                  if (e._getGlobalFacetedMinMaxValues)
                    return e._getGlobalFacetedMinMaxValues();
                });
            },
          },
          {
            getInitialState: (e) => ({ globalFilter: void 0, ...e }),
            getDefaultOptions: (e) => ({
              onGlobalFilterChange: i("globalFilter", e),
              globalFilterFn: "auto",
              getColumnCanGlobalFilter: (t) => {
                var n;
                const o =
                  null == (n = e.getCoreRowModel().flatRows[0]) ||
                  null == (n = n._getAllCellsByColumnId()[t.id])
                    ? void 0
                    : n.getValue();
                return "string" == typeof o || "number" == typeof o;
              },
            }),
            createColumn: (e, t) => {
              e.getCanGlobalFilter = () => {
                var n, o, l, i;
                return (
                  (null == (n = e.columnDef.enableGlobalFilter) || n) &&
                  (null == (o = t.options.enableGlobalFilter) || o) &&
                  (null == (l = t.options.enableFilters) || l) &&
                  (null ==
                    (i =
                      null == t.options.getColumnCanGlobalFilter
                        ? void 0
                        : t.options.getColumnCanGlobalFilter(e)) ||
                    i) &&
                  !!e.accessorFn
                );
              };
            },
            createTable: (e) => {
              (e.getGlobalAutoFilterFn = () => I.includesString),
                (e.getGlobalFilterFn = () => {
                  var t, n;
                  const { globalFilterFn: o } = e.options;
                  return s(o)
                    ? o
                    : "auto" === o
                      ? e.getGlobalAutoFilterFn()
                      : null !=
                          (t =
                            null == (n = e.options.filterFns) ? void 0 : n[o])
                        ? t
                        : I[o];
                }),
                (e.setGlobalFilter = (t) => {
                  null == e.options.onGlobalFilterChange ||
                    e.options.onGlobalFilterChange(t);
                }),
                (e.resetGlobalFilter = (t) => {
                  e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
                });
            },
          },
          {
            getInitialState: (e) => ({ sorting: [], ...e }),
            getDefaultColumnDef: () => ({
              sortingFn: "auto",
              sortUndefined: 1,
            }),
            getDefaultOptions: (e) => ({
              onSortingChange: i("sorting", e),
              isMultiSortEvent: (e) => e.shiftKey,
            }),
            createColumn: (e, t) => {
              (e.getAutoSortingFn = () => {
                const n = t.getFilteredRowModel().flatRows.slice(10);
                let o = !1;
                for (const t of n) {
                  const n = null == t ? void 0 : t.getValue(e.id);
                  if ("[object Date]" === Object.prototype.toString.call(n))
                    return W.datetime;
                  if ("string" == typeof n && ((o = !0), n.split(q).length > 1))
                    return W.alphanumeric;
                }
                return o ? W.text : W.basic;
              }),
                (e.getAutoSortDir = () => {
                  const n = t.getFilteredRowModel().flatRows[0];
                  return "string" ==
                    typeof (null == n ? void 0 : n.getValue(e.id))
                    ? "asc"
                    : "desc";
                }),
                (e.getSortingFn = () => {
                  var n, o;
                  if (!e) throw new Error();
                  return s(e.columnDef.sortingFn)
                    ? e.columnDef.sortingFn
                    : "auto" === e.columnDef.sortingFn
                      ? e.getAutoSortingFn()
                      : null !=
                          (n =
                            null == (o = t.options.sortingFns)
                              ? void 0
                              : o[e.columnDef.sortingFn])
                        ? n
                        : W[e.columnDef.sortingFn];
                }),
                (e.toggleSorting = (n, o) => {
                  const l = e.getNextSortingOrder(),
                    i = null != n;
                  t.setSorting((s) => {
                    const r = null == s ? void 0 : s.find((t) => t.id === e.id),
                      a =
                        null == s ? void 0 : s.findIndex((t) => t.id === e.id);
                    let u,
                      g = [],
                      d = i ? n : "desc" === l;
                    var c;
                    ((u =
                      null != s && s.length && e.getCanMultiSort() && o
                        ? r
                          ? "toggle"
                          : "add"
                        : null != s && s.length && a !== s.length - 1
                          ? "replace"
                          : r
                            ? "toggle"
                            : "replace"),
                    "toggle" === u && (i || l || (u = "remove")),
                    "add" === u)
                      ? ((g = [...s, { id: e.id, desc: d }]),
                        g.splice(
                          0,
                          g.length -
                            (null != (c = t.options.maxMultiSortColCount)
                              ? c
                              : Number.MAX_SAFE_INTEGER),
                        ))
                      : (g =
                          "toggle" === u
                            ? s.map((t) =>
                                t.id === e.id ? { ...t, desc: d } : t,
                              )
                            : "remove" === u
                              ? s.filter((t) => t.id !== e.id)
                              : [{ id: e.id, desc: d }]);
                    return g;
                  });
                }),
                (e.getFirstSortDir = () => {
                  var n, o;
                  return (
                    null !=
                    (n =
                      null != (o = e.columnDef.sortDescFirst)
                        ? o
                        : t.options.sortDescFirst)
                      ? n
                      : "desc" === e.getAutoSortDir()
                  )
                    ? "desc"
                    : "asc";
                }),
                (e.getNextSortingOrder = (n) => {
                  var o, l;
                  const i = e.getFirstSortDir(),
                    s = e.getIsSorted();
                  return s
                    ? !!(
                        s === i ||
                        (null != (o = t.options.enableSortingRemoval) && !o) ||
                        (n && null != (l = t.options.enableMultiRemove) && !l)
                      ) && ("desc" === s ? "asc" : "desc")
                    : i;
                }),
                (e.getCanSort = () => {
                  var n, o;
                  return (
                    (null == (n = e.columnDef.enableSorting) || n) &&
                    (null == (o = t.options.enableSorting) || o) &&
                    !!e.accessorFn
                  );
                }),
                (e.getCanMultiSort = () => {
                  var n, o;
                  return null !=
                    (n =
                      null != (o = e.columnDef.enableMultiSort)
                        ? o
                        : t.options.enableMultiSort)
                    ? n
                    : !!e.accessorFn;
                }),
                (e.getIsSorted = () => {
                  var n;
                  const o =
                    null == (n = t.getState().sorting)
                      ? void 0
                      : n.find((t) => t.id === e.id);
                  return !!o && (o.desc ? "desc" : "asc");
                }),
                (e.getSortIndex = () => {
                  var n, o;
                  return null !=
                    (n =
                      null == (o = t.getState().sorting)
                        ? void 0
                        : o.findIndex((t) => t.id === e.id))
                    ? n
                    : -1;
                }),
                (e.clearSorting = () => {
                  t.setSorting((t) =>
                    null != t && t.length ? t.filter((t) => t.id !== e.id) : [],
                  );
                }),
                (e.getToggleSortingHandler = () => {
                  const n = e.getCanSort();
                  return (o) => {
                    n &&
                      (null == o.persist || o.persist(),
                      null == e.toggleSorting ||
                        e.toggleSorting(
                          void 0,
                          !!e.getCanMultiSort() &&
                            (null == t.options.isMultiSortEvent
                              ? void 0
                              : t.options.isMultiSortEvent(o)),
                        ));
                  };
                });
            },
            createTable: (e) => {
              (e.setSorting = (t) =>
                null == e.options.onSortingChange
                  ? void 0
                  : e.options.onSortingChange(t)),
                (e.resetSorting = (t) => {
                  var n, o;
                  e.setSorting(
                    t
                      ? []
                      : null !=
                          (n =
                            null == (o = e.initialState) ? void 0 : o.sorting)
                        ? n
                        : [],
                  );
                }),
                (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
                (e.getSortedRowModel = () => (
                  !e._getSortedRowModel &&
                    e.options.getSortedRowModel &&
                    (e._getSortedRowModel = e.options.getSortedRowModel(e)),
                  e.options.manualSorting || !e._getSortedRowModel
                    ? e.getPreSortedRowModel()
                    : e._getSortedRowModel()
                ));
            },
          },
          E,
          {
            getInitialState: (e) => ({ expanded: {}, ...e }),
            getDefaultOptions: (e) => ({
              onExpandedChange: i("expanded", e),
              paginateExpandedRows: !0,
            }),
            createTable: (e) => {
              let t = !1,
                n = !1;
              (e._autoResetExpanded = () => {
                var o, l;
                if (t) {
                  if (
                    null !=
                    (o =
                      null != (l = e.options.autoResetAll)
                        ? l
                        : e.options.autoResetExpanded)
                      ? o
                      : !e.options.manualExpanding
                  ) {
                    if (n) return;
                    (n = !0),
                      e._queue(() => {
                        e.resetExpanded(), (n = !1);
                      });
                  }
                } else
                  e._queue(() => {
                    t = !0;
                  });
              }),
                (e.setExpanded = (t) =>
                  null == e.options.onExpandedChange
                    ? void 0
                    : e.options.onExpandedChange(t)),
                (e.toggleAllRowsExpanded = (t) => {
                  (null != t ? t : !e.getIsAllRowsExpanded())
                    ? e.setExpanded(!0)
                    : e.setExpanded({});
                }),
                (e.resetExpanded = (t) => {
                  var n, o;
                  e.setExpanded(
                    t
                      ? {}
                      : null !=
                          (n =
                            null == (o = e.initialState) ? void 0 : o.expanded)
                        ? n
                        : {},
                  );
                }),
                (e.getCanSomeRowsExpand = () =>
                  e
                    .getPrePaginationRowModel()
                    .flatRows.some((e) => e.getCanExpand())),
                (e.getToggleAllRowsExpandedHandler = () => (t) => {
                  null == t.persist || t.persist(), e.toggleAllRowsExpanded();
                }),
                (e.getIsSomeRowsExpanded = () => {
                  const t = e.getState().expanded;
                  return !0 === t || Object.values(t).some(Boolean);
                }),
                (e.getIsAllRowsExpanded = () => {
                  const t = e.getState().expanded;
                  return "boolean" == typeof t
                    ? !0 === t
                    : !!Object.keys(t).length &&
                        !e
                          .getRowModel()
                          .flatRows.some((e) => !e.getIsExpanded());
                }),
                (e.getExpandedDepth = () => {
                  let t = 0;
                  return (
                    (!0 === e.getState().expanded
                      ? Object.keys(e.getRowModel().rowsById)
                      : Object.keys(e.getState().expanded)
                    ).forEach((e) => {
                      const n = e.split(".");
                      t = Math.max(t, n.length);
                    }),
                    t
                  );
                }),
                (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
                (e.getExpandedRowModel = () => (
                  !e._getExpandedRowModel &&
                    e.options.getExpandedRowModel &&
                    (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
                  e.options.manualExpanding || !e._getExpandedRowModel
                    ? e.getPreExpandedRowModel()
                    : e._getExpandedRowModel()
                ));
            },
            createRow: (e, t) => {
              (e.toggleExpanded = (n) => {
                t.setExpanded((o) => {
                  var l;
                  const i = !0 === o || !(null == o || !o[e.id]);
                  let s = {};
                  if (
                    (!0 === o
                      ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
                          s[e] = !0;
                        })
                      : (s = o),
                    (n = null != (l = n) ? l : !i),
                    !i && n)
                  )
                    return { ...s, [e.id]: !0 };
                  if (i && !n) {
                    const { [e.id]: t, ...n } = s;
                    return n;
                  }
                  return o;
                });
              }),
                (e.getIsExpanded = () => {
                  var n;
                  const o = t.getState().expanded;
                  return !!(null !=
                  (n =
                    null == t.options.getIsRowExpanded
                      ? void 0
                      : t.options.getIsRowExpanded(e))
                    ? n
                    : !0 === o || (null == o ? void 0 : o[e.id]));
                }),
                (e.getCanExpand = () => {
                  var n, o, l;
                  return null !=
                    (n =
                      null == t.options.getRowCanExpand
                        ? void 0
                        : t.options.getRowCanExpand(e))
                    ? n
                    : (null == (o = t.options.enableExpanding) || o) &&
                        !(null == (l = e.subRows) || !l.length);
                }),
                (e.getIsAllParentsExpanded = () => {
                  let n = !0,
                    o = e;
                  for (; n && o.parentId; )
                    (o = t.getRow(o.parentId, !0)), (n = o.getIsExpanded());
                  return n;
                }),
                (e.getToggleExpandedHandler = () => {
                  const t = e.getCanExpand();
                  return () => {
                    t && e.toggleExpanded();
                  };
                });
            },
          },
          {
            getInitialState: (e) => ({
              ...e,
              pagination: {
                pageIndex: 0,
                pageSize: 10,
                ...(null == e ? void 0 : e.pagination),
              },
            }),
            getDefaultOptions: (e) => ({
              onPaginationChange: i("pagination", e),
            }),
            createTable: (e) => {
              let t = !1,
                n = !1;
              (e._autoResetPageIndex = () => {
                var o, l;
                if (t) {
                  if (
                    null !=
                    (o =
                      null != (l = e.options.autoResetAll)
                        ? l
                        : e.options.autoResetPageIndex)
                      ? o
                      : !e.options.manualPagination
                  ) {
                    if (n) return;
                    (n = !0),
                      e._queue(() => {
                        e.resetPageIndex(), (n = !1);
                      });
                  }
                } else
                  e._queue(() => {
                    t = !0;
                  });
              }),
                (e.setPagination = (t) =>
                  null == e.options.onPaginationChange
                    ? void 0
                    : e.options.onPaginationChange((e) => l(t, e))),
                (e.resetPagination = (t) => {
                  var n;
                  e.setPagination(
                    t
                      ? { pageIndex: 0, pageSize: 10 }
                      : null != (n = e.initialState.pagination)
                        ? n
                        : { pageIndex: 0, pageSize: 10 },
                  );
                }),
                (e.setPageIndex = (t) => {
                  e.setPagination((n) => {
                    let o = l(t, n.pageIndex);
                    const i =
                      void 0 === e.options.pageCount ||
                      -1 === e.options.pageCount
                        ? Number.MAX_SAFE_INTEGER
                        : e.options.pageCount - 1;
                    return (
                      (o = Math.max(0, Math.min(o, i))), { ...n, pageIndex: o }
                    );
                  });
                }),
                (e.resetPageIndex = (t) => {
                  var n, o;
                  e.setPageIndex(
                    t
                      ? 0
                      : null !=
                          (n =
                            null == (o = e.initialState) ||
                            null == (o = o.pagination)
                              ? void 0
                              : o.pageIndex)
                        ? n
                        : 0,
                  );
                }),
                (e.resetPageSize = (t) => {
                  var n, o;
                  e.setPageSize(
                    t
                      ? 10
                      : null !=
                          (n =
                            null == (o = e.initialState) ||
                            null == (o = o.pagination)
                              ? void 0
                              : o.pageSize)
                        ? n
                        : 10,
                  );
                }),
                (e.setPageSize = (t) => {
                  e.setPagination((e) => {
                    const n = Math.max(1, l(t, e.pageSize)),
                      o = e.pageSize * e.pageIndex,
                      i = Math.floor(o / n);
                    return { ...e, pageIndex: i, pageSize: n };
                  });
                }),
                (e.setPageCount = (t) =>
                  e.setPagination((n) => {
                    var o;
                    let i = l(t, null != (o = e.options.pageCount) ? o : -1);
                    return (
                      "number" == typeof i && (i = Math.max(-1, i)),
                      { ...n, pageCount: i }
                    );
                  })),
                (e.getPageOptions = a(
                  () => [e.getPageCount()],
                  (e) => {
                    let t = [];
                    return (
                      e &&
                        e > 0 &&
                        (t = [...new Array(e)].fill(null).map((e, t) => t)),
                      t
                    );
                  },
                  u(e.options, "debugTable"),
                )),
                (e.getCanPreviousPage = () =>
                  e.getState().pagination.pageIndex > 0),
                (e.getCanNextPage = () => {
                  const { pageIndex: t } = e.getState().pagination,
                    n = e.getPageCount();
                  return -1 === n || (0 !== n && t < n - 1);
                }),
                (e.previousPage = () => e.setPageIndex((e) => e - 1)),
                (e.nextPage = () => e.setPageIndex((e) => e + 1)),
                (e.firstPage = () => e.setPageIndex(0)),
                (e.lastPage = () => e.setPageIndex(e.getPageCount() - 1)),
                (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
                (e.getPaginationRowModel = () => (
                  !e._getPaginationRowModel &&
                    e.options.getPaginationRowModel &&
                    (e._getPaginationRowModel =
                      e.options.getPaginationRowModel(e)),
                  e.options.manualPagination || !e._getPaginationRowModel
                    ? e.getPrePaginationRowModel()
                    : e._getPaginationRowModel()
                )),
                (e.getPageCount = () => {
                  var t;
                  return null != (t = e.options.pageCount)
                    ? t
                    : Math.ceil(
                        e.getRowCount() / e.getState().pagination.pageSize,
                      );
                }),
                (e.getRowCount = () => {
                  var t;
                  return null != (t = e.options.rowCount)
                    ? t
                    : e.getPrePaginationRowModel().rows.length;
                });
            },
          },
          {
            getInitialState: (e) => ({
              rowPinning: { top: [], bottom: [] },
              ...e,
            }),
            getDefaultOptions: (e) => ({
              onRowPinningChange: i("rowPinning", e),
            }),
            createRow: (e, t) => {
              (e.pin = (n, o, l) => {
                const i = o
                    ? e.getLeafRows().map((e) => {
                        let { id: t } = e;
                        return t;
                      })
                    : [],
                  s = l
                    ? e.getParentRows().map((e) => {
                        let { id: t } = e;
                        return t;
                      })
                    : [],
                  r = new Set([...s, e.id, ...i]);
                t.setRowPinning((e) => {
                  var t, o, l, i, s, a;
                  return "bottom" === n
                    ? {
                        top: (null != (l = null == e ? void 0 : e.top)
                          ? l
                          : []
                        ).filter((e) => !(null != r && r.has(e))),
                        bottom: [
                          ...(null != (i = null == e ? void 0 : e.bottom)
                            ? i
                            : []
                          ).filter((e) => !(null != r && r.has(e))),
                          ...Array.from(r),
                        ],
                      }
                    : "top" === n
                      ? {
                          top: [
                            ...(null != (s = null == e ? void 0 : e.top)
                              ? s
                              : []
                            ).filter((e) => !(null != r && r.has(e))),
                            ...Array.from(r),
                          ],
                          bottom: (null != (a = null == e ? void 0 : e.bottom)
                            ? a
                            : []
                          ).filter((e) => !(null != r && r.has(e))),
                        }
                      : {
                          top: (null != (t = null == e ? void 0 : e.top)
                            ? t
                            : []
                          ).filter((e) => !(null != r && r.has(e))),
                          bottom: (null != (o = null == e ? void 0 : e.bottom)
                            ? o
                            : []
                          ).filter((e) => !(null != r && r.has(e))),
                        };
                });
              }),
                (e.getCanPin = () => {
                  var n;
                  const { enableRowPinning: o, enablePinning: l } = t.options;
                  return "function" == typeof o
                    ? o(e)
                    : null == (n = null != o ? o : l) || n;
                }),
                (e.getIsPinned = () => {
                  const n = [e.id],
                    { top: o, bottom: l } = t.getState().rowPinning,
                    i = n.some((e) => (null == o ? void 0 : o.includes(e))),
                    s = n.some((e) => (null == l ? void 0 : l.includes(e)));
                  return i ? "top" : !!s && "bottom";
                }),
                (e.getPinnedIndex = () => {
                  var n, o;
                  const l = e.getIsPinned();
                  if (!l) return -1;
                  const i =
                    null ==
                    (n = "top" === l ? t.getTopRows() : t.getBottomRows())
                      ? void 0
                      : n.map((e) => {
                          let { id: t } = e;
                          return t;
                        });
                  return null != (o = null == i ? void 0 : i.indexOf(e.id))
                    ? o
                    : -1;
                });
            },
            createTable: (e) => {
              (e.setRowPinning = (t) =>
                null == e.options.onRowPinningChange
                  ? void 0
                  : e.options.onRowPinningChange(t)),
                (e.resetRowPinning = (t) => {
                  var n, o;
                  return e.setRowPinning(
                    t
                      ? { top: [], bottom: [] }
                      : null !=
                          (n =
                            null == (o = e.initialState)
                              ? void 0
                              : o.rowPinning)
                        ? n
                        : { top: [], bottom: [] },
                  );
                }),
                (e.getIsSomeRowsPinned = (t) => {
                  var n;
                  const o = e.getState().rowPinning;
                  var l, i;
                  return t
                    ? Boolean(null == (n = o[t]) ? void 0 : n.length)
                    : Boolean(
                        (null == (l = o.top) ? void 0 : l.length) ||
                          (null == (i = o.bottom) ? void 0 : i.length),
                      );
                }),
                (e._getPinnedRows = (t, n, o) => {
                  var l;
                  return (
                    null == (l = e.options.keepPinnedRows) || l
                      ? (null != n ? n : []).map((t) => {
                          const n = e.getRow(t, !0);
                          return n.getIsAllParentsExpanded() ? n : null;
                        })
                      : (null != n ? n : []).map((e) =>
                          t.find((t) => t.id === e),
                        )
                  )
                    .filter(Boolean)
                    .map((e) => ({ ...e, position: o }));
                }),
                (e.getTopRows = a(
                  () => [e.getRowModel().rows, e.getState().rowPinning.top],
                  (t, n) => e._getPinnedRows(t, n, "top"),
                  u(e.options, "debugRows"),
                )),
                (e.getBottomRows = a(
                  () => [e.getRowModel().rows, e.getState().rowPinning.bottom],
                  (t, n) => e._getPinnedRows(t, n, "bottom"),
                  u(e.options, "debugRows"),
                )),
                (e.getCenterRows = a(
                  () => [
                    e.getRowModel().rows,
                    e.getState().rowPinning.top,
                    e.getState().rowPinning.bottom,
                  ],
                  (e, t, n) => {
                    const o = new Set([
                      ...(null != t ? t : []),
                      ...(null != n ? n : []),
                    ]);
                    return e.filter((e) => !o.has(e.id));
                  },
                  u(e.options, "debugRows"),
                ));
            },
          },
          T,
          A,
        ];
      function X(e) {
        var t, n;
        const o = [...K, ...(null != (t = e._features) ? t : [])];
        let i = { _features: o };
        const s = i._features.reduce(
          (e, t) =>
            Object.assign(
              e,
              null == t.getDefaultOptions ? void 0 : t.getDefaultOptions(i),
            ),
          {},
        );
        let r = { ...(null != (n = e.initialState) ? n : {}) };
        i._features.forEach((e) => {
          var t;
          r =
            null !=
            (t = null == e.getInitialState ? void 0 : e.getInitialState(r))
              ? t
              : r;
        });
        const g = [];
        let d = !1;
        const c = {
          _features: o,
          options: { ...s, ...e },
          initialState: r,
          _queue: (e) => {
            g.push(e),
              d ||
                ((d = !0),
                Promise.resolve()
                  .then(() => {
                    for (; g.length; ) g.shift()();
                    d = !1;
                  })
                  .catch((e) =>
                    setTimeout(() => {
                      throw e;
                    }),
                  ));
          },
          reset: () => {
            i.setState(i.initialState);
          },
          setOptions: (e) => {
            const t = l(e, i.options);
            i.options = ((e) =>
              i.options.mergeOptions
                ? i.options.mergeOptions(s, e)
                : { ...s, ...e })(t);
          },
          getState: () => i.options.state,
          setState: (e) => {
            null == i.options.onStateChange || i.options.onStateChange(e);
          },
          _getRowId: (e, t, n) => {
            var o;
            return null !=
              (o =
                null == i.options.getRowId
                  ? void 0
                  : i.options.getRowId(e, t, n))
              ? o
              : `${n ? [n.id, t].join(".") : t}`;
          },
          getCoreRowModel: () => (
            i._getCoreRowModel ||
              (i._getCoreRowModel = i.options.getCoreRowModel(i)),
            i._getCoreRowModel()
          ),
          getRowModel: () => i.getPaginationRowModel(),
          getRow: (e, t) => {
            let n = (t ? i.getPrePaginationRowModel() : i.getRowModel())
              .rowsById[e];
            if (!n && ((n = i.getCoreRowModel().rowsById[e]), !n))
              throw new Error();
            return n;
          },
          _getDefaultColumnDef: a(
            () => [i.options.defaultColumn],
            (e) => {
              var t;
              return (
                (e = null != (t = e) ? t : {}),
                {
                  header: (e) => {
                    const t = e.header.column.columnDef;
                    return t.accessorKey
                      ? t.accessorKey
                      : t.accessorFn
                        ? t.id
                        : null;
                  },
                  cell: (e) => {
                    var t, n;
                    return null !=
                      (t =
                        null == (n = e.renderValue()) || null == n.toString
                          ? void 0
                          : n.toString())
                      ? t
                      : null;
                  },
                  ...i._features.reduce(
                    (e, t) =>
                      Object.assign(
                        e,
                        null == t.getDefaultColumnDef
                          ? void 0
                          : t.getDefaultColumnDef(),
                      ),
                    {},
                  ),
                  ...e,
                }
              );
            },
            u(e, "debugColumns"),
          ),
          _getColumnDefs: () => i.options.columns,
          getAllColumns: a(
            () => [i._getColumnDefs()],
            (e) => {
              const t = function (e, n, o) {
                return (
                  void 0 === o && (o = 0),
                  e.map((e) => {
                    const l = (function (e, t, n, o) {
                        var l, i;
                        const s = { ...e._getDefaultColumnDef(), ...t },
                          r = s.accessorKey;
                        let g,
                          d =
                            null !=
                            (l =
                              null != (i = s.id)
                                ? i
                                : r
                                  ? "function" ==
                                    typeof String.prototype.replaceAll
                                    ? r.replaceAll(".", "_")
                                    : r.replace(/\./g, "_")
                                  : void 0)
                              ? l
                              : "string" == typeof s.header
                                ? s.header
                                : void 0;
                        if (
                          (s.accessorFn
                            ? (g = s.accessorFn)
                            : r &&
                              (g = r.includes(".")
                                ? (e) => {
                                    let t = e;
                                    for (const e of r.split(".")) {
                                      var n;
                                      t = null == (n = t) ? void 0 : n[e];
                                    }
                                    return t;
                                  }
                                : (e) => e[s.accessorKey]),
                          !d)
                        )
                          throw new Error();
                        let c = {
                          id: `${String(d)}`,
                          accessorFn: g,
                          parent: o,
                          depth: n,
                          columnDef: s,
                          columns: [],
                          getFlatColumns: a(
                            () => [!0],
                            () => {
                              var e;
                              return [
                                c,
                                ...(null == (e = c.columns)
                                  ? void 0
                                  : e.flatMap((e) => e.getFlatColumns())),
                              ];
                            },
                            u(e.options, "debugColumns"),
                          ),
                          getLeafColumns: a(
                            () => [e._getOrderColumnsFn()],
                            (e) => {
                              var t;
                              if (null != (t = c.columns) && t.length) {
                                let t = c.columns.flatMap((e) =>
                                  e.getLeafColumns(),
                                );
                                return e(t);
                              }
                              return [c];
                            },
                            u(e.options, "debugColumns"),
                          ),
                        };
                        for (const t of e._features)
                          null == t.createColumn || t.createColumn(c, e);
                        return c;
                      })(i, e, o, n),
                      s = e;
                    return (
                      (l.columns = s.columns ? t(s.columns, l, o + 1) : []), l
                    );
                  })
                );
              };
              return t(e);
            },
            u(e, "debugColumns"),
          ),
          getAllFlatColumns: a(
            () => [i.getAllColumns()],
            (e) => e.flatMap((e) => e.getFlatColumns()),
            u(e, "debugColumns"),
          ),
          _getAllFlatColumnsById: a(
            () => [i.getAllFlatColumns()],
            (e) => e.reduce((e, t) => ((e[t.id] = t), e), {}),
            u(e, "debugColumns"),
          ),
          getAllLeafColumns: a(
            () => [i.getAllColumns(), i._getOrderColumnsFn()],
            (e, t) => t(e.flatMap((e) => e.getLeafColumns())),
            u(e, "debugColumns"),
          ),
          getColumn: (e) => i._getAllFlatColumnsById()[e],
        };
        Object.assign(i, c);
        for (let e = 0; e < i._features.length; e++) {
          const t = i._features[e];
          null == t || null == t.createTable || t.createTable(i);
        }
        return i;
      }
      function Y() {
        return (e) =>
          a(
            () => [e.options.data],
            (t) => {
              const n = { rows: [], flatRows: [], rowsById: {} },
                o = function (t, l, i) {
                  void 0 === l && (l = 0);
                  const s = [];
                  for (let a = 0; a < t.length; a++) {
                    const u = f(
                      e,
                      e._getRowId(t[a], a, i),
                      t[a],
                      a,
                      l,
                      void 0,
                      null == i ? void 0 : i.id,
                    );
                    var r;
                    if (
                      (n.flatRows.push(u),
                      (n.rowsById[u.id] = u),
                      s.push(u),
                      e.options.getSubRows)
                    )
                      (u.originalSubRows = e.options.getSubRows(t[a], a)),
                        null != (r = u.originalSubRows) &&
                          r.length &&
                          (u.subRows = o(u.originalSubRows, l + 1, u));
                  }
                  return s;
                };
              return (n.rows = o(t)), n;
            },
            u(e.options, "debugTable", 0, () => e._autoResetPageIndex()),
          );
      }
      function Z(e, t, n) {
        return n.options.filterFromLeafRows
          ? (function (e, t, n) {
              var o;
              const l = [],
                i = {},
                s = null != (o = n.options.maxLeafRowFilterDepth) ? o : 100,
                r = function (e, o) {
                  void 0 === o && (o = 0);
                  const a = [];
                  for (let g = 0; g < e.length; g++) {
                    var u;
                    let d = e[g];
                    const c = f(
                      n,
                      d.id,
                      d.original,
                      d.index,
                      d.depth,
                      void 0,
                      d.parentId,
                    );
                    if (
                      ((c.columnFilters = d.columnFilters),
                      null != (u = d.subRows) && u.length && o < s)
                    ) {
                      if (
                        ((c.subRows = r(d.subRows, o + 1)),
                        (d = c),
                        t(d) && !c.subRows.length)
                      ) {
                        a.push(d), (i[d.id] = d), l.push(d);
                        continue;
                      }
                      if (t(d) || c.subRows.length) {
                        a.push(d), (i[d.id] = d), l.push(d);
                        continue;
                      }
                    } else
                      (d = c), t(d) && (a.push(d), (i[d.id] = d), l.push(d));
                  }
                  return a;
                };
              return { rows: r(e), flatRows: l, rowsById: i };
            })(e, t, n)
          : (function (e, t, n) {
              var o;
              const l = [],
                i = {},
                s = null != (o = n.options.maxLeafRowFilterDepth) ? o : 100,
                r = function (e, o) {
                  void 0 === o && (o = 0);
                  const a = [];
                  for (let g = 0; g < e.length; g++) {
                    let d = e[g];
                    if (t(d)) {
                      var u;
                      if (null != (u = d.subRows) && u.length && o < s) {
                        const e = f(
                          n,
                          d.id,
                          d.original,
                          d.index,
                          d.depth,
                          void 0,
                          d.parentId,
                        );
                        (e.subRows = r(d.subRows, o + 1)), (d = e);
                      }
                      a.push(d), l.push(d), (i[d.id] = d);
                    }
                  }
                  return a;
                };
              return { rows: r(e), flatRows: l, rowsById: i };
            })(e, t, n);
      }
      function J() {
        return (e) =>
          a(
            () => [
              e.getPreFilteredRowModel(),
              e.getState().columnFilters,
              e.getState().globalFilter,
            ],
            (t, n, o) => {
              if (!t.rows.length || ((null == n || !n.length) && !o)) {
                for (let e = 0; e < t.flatRows.length; e++)
                  (t.flatRows[e].columnFilters = {}),
                    (t.flatRows[e].columnFiltersMeta = {});
                return t;
              }
              const l = [],
                i = [];
              (null != n ? n : []).forEach((t) => {
                var n;
                const o = e.getColumn(t.id);
                if (!o) return;
                const i = o.getFilterFn();
                i &&
                  l.push({
                    id: t.id,
                    filterFn: i,
                    resolvedValue:
                      null !=
                      (n =
                        null == i.resolveFilterValue
                          ? void 0
                          : i.resolveFilterValue(t.value))
                        ? n
                        : t.value,
                  });
              });
              const s = (null != n ? n : []).map((e) => e.id),
                r = e.getGlobalFilterFn(),
                a = e.getAllLeafColumns().filter((e) => e.getCanGlobalFilter());
              let u, g;
              o &&
                r &&
                a.length &&
                (s.push("__global__"),
                a.forEach((e) => {
                  var t;
                  i.push({
                    id: e.id,
                    filterFn: r,
                    resolvedValue:
                      null !=
                      (t =
                        null == r.resolveFilterValue
                          ? void 0
                          : r.resolveFilterValue(o))
                        ? t
                        : o,
                  });
                }));
              for (let e = 0; e < t.flatRows.length; e++) {
                const n = t.flatRows[e];
                if (((n.columnFilters = {}), l.length))
                  for (let e = 0; e < l.length; e++) {
                    u = l[e];
                    const t = u.id;
                    n.columnFilters[t] = u.filterFn(
                      n,
                      t,
                      u.resolvedValue,
                      (e) => {
                        n.columnFiltersMeta[t] = e;
                      },
                    );
                  }
                if (i.length) {
                  for (let e = 0; e < i.length; e++) {
                    g = i[e];
                    const t = g.id;
                    if (
                      g.filterFn(n, t, g.resolvedValue, (e) => {
                        n.columnFiltersMeta[t] = e;
                      })
                    ) {
                      n.columnFilters.__global__ = !0;
                      break;
                    }
                  }
                  !0 !== n.columnFilters.__global__ &&
                    (n.columnFilters.__global__ = !1);
                }
              }
              return Z(
                t.rows,
                (e) => {
                  for (let t = 0; t < s.length; t++)
                    if (!1 === e.columnFilters[s[t]]) return !1;
                  return !0;
                },
                e,
              );
            },
            u(e.options, "debugTable", 0, () => e._autoResetPageIndex()),
          );
      }
      function Q() {
        return (e) =>
          a(
            () => [e.getState().grouping, e.getPreGroupedRowModel()],
            (t, n) => {
              if (!n.rows.length || !t.length)
                return (
                  n.rows.forEach((e) => {
                    (e.depth = 0), (e.parentId = void 0);
                  }),
                  n
                );
              const o = t.filter((t) => e.getColumn(t)),
                l = [],
                i = {},
                s = function (t, n, a) {
                  if ((void 0 === n && (n = 0), n >= o.length))
                    return t.map(
                      (e) => (
                        (e.depth = n),
                        l.push(e),
                        (i[e.id] = e),
                        e.subRows && (e.subRows = s(e.subRows, n + 1, e.id)),
                        e
                      ),
                    );
                  const u = o[n],
                    g = (function (e, t) {
                      const n = new Map();
                      return e.reduce((e, n) => {
                        const o = `${n.getGroupingValue(t)}`,
                          l = e.get(o);
                        return l ? l.push(n) : e.set(o, [n]), e;
                      }, n);
                    })(t, u),
                    d = Array.from(g.entries()).map((t, g) => {
                      let [d, c] = t,
                        h = `${u}:${d}`;
                      h = a ? `${a}>${h}` : h;
                      const p = s(c, n + 1, h);
                      p.forEach((e) => {
                        e.parentId = h;
                      });
                      const m = n ? r(c, (e) => e.subRows) : c,
                        v = f(e, h, m[0].original, g, n, void 0, a);
                      return (
                        Object.assign(v, {
                          groupingColumnId: u,
                          groupingValue: d,
                          subRows: p,
                          leafRows: m,
                          getValue: (t) => {
                            if (o.includes(t)) {
                              if (v._valuesCache.hasOwnProperty(t))
                                return v._valuesCache[t];
                              var n;
                              if (c[0])
                                v._valuesCache[t] =
                                  null != (n = c[0].getValue(t)) ? n : void 0;
                              return v._valuesCache[t];
                            }
                            if (v._groupingValuesCache.hasOwnProperty(t))
                              return v._groupingValuesCache[t];
                            const l = e.getColumn(t),
                              i = null == l ? void 0 : l.getAggregationFn();
                            return i
                              ? ((v._groupingValuesCache[t] = i(t, m, c)),
                                v._groupingValuesCache[t])
                              : void 0;
                          },
                        }),
                        p.forEach((e) => {
                          l.push(e), (i[e.id] = e);
                        }),
                        v
                      );
                    });
                  return d;
                },
                a = s(n.rows, 0);
              return (
                a.forEach((e) => {
                  l.push(e), (i[e.id] = e);
                }),
                { rows: a, flatRows: l, rowsById: i }
              );
            },
            u(e.options, "debugTable", 0, () => {
              e._queue(() => {
                e._autoResetExpanded(), e._autoResetPageIndex();
              });
            }),
          );
      }
      function ee() {
        return (e) =>
          a(
            () => [e.getState().sorting, e.getPreSortedRowModel()],
            (t, n) => {
              if (!n.rows.length || null == t || !t.length) return n;
              const o = e.getState().sorting,
                l = [],
                i = o.filter((t) => {
                  var n;
                  return null == (n = e.getColumn(t.id))
                    ? void 0
                    : n.getCanSort();
                }),
                s = {};
              i.forEach((t) => {
                const n = e.getColumn(t.id);
                n &&
                  (s[t.id] = {
                    sortUndefined: n.columnDef.sortUndefined,
                    invertSorting: n.columnDef.invertSorting,
                    sortingFn: n.getSortingFn(),
                  });
              });
              const r = (e) => {
                const t = e.map((e) => ({ ...e }));
                return (
                  t.sort((e, t) => {
                    for (let o = 0; o < i.length; o += 1) {
                      var n;
                      const l = i[o],
                        r = s[l.id],
                        a = r.sortUndefined,
                        u = null != (n = null == l ? void 0 : l.desc) && n;
                      let g = 0;
                      if (a) {
                        const n = void 0 === e.getValue(l.id),
                          o = void 0 === t.getValue(l.id);
                        if (n || o) {
                          if ("first" === a) return n ? -1 : 1;
                          if ("last" === a) return n ? 1 : -1;
                          g = n && o ? 0 : n ? a : -a;
                        }
                      }
                      if ((0 === g && (g = r.sortingFn(e, t, l.id)), 0 !== g))
                        return u && (g *= -1), r.invertSorting && (g *= -1), g;
                    }
                    return e.index - t.index;
                  }),
                  t.forEach((e) => {
                    var t;
                    l.push(e),
                      null != (t = e.subRows) &&
                        t.length &&
                        (e.subRows = r(e.subRows));
                  }),
                  t
                );
              };
              return { rows: r(n.rows), flatRows: l, rowsById: n.rowsById };
            },
            u(e.options, "debugTable", 0, () => e._autoResetPageIndex()),
          );
      }
    },
    92148: (e, t, n) => {
      n.d(t, { Te: () => a, XW: () => u });
      var o = n(90626),
        l = n(72739),
        i = n(59366);
      const s =
        "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      function r(e) {
        const t = o.useReducer(() => ({}), {})[1],
          n = {
            ...e,
            onChange: (n, o) => {
              var i;
              o ? (0, l.flushSync)(t) : t(),
                null == (i = e.onChange) || i.call(e, n, o);
            },
          },
          [r] = o.useState(() => new i.YV(n));
        return (
          r.setOptions(n),
          o.useEffect(() => r._didMount(), []),
          s(() => r._willUpdate()),
          r
        );
      }
      function a(e) {
        return r({
          observeElementRect: i.T6,
          observeElementOffset: i.AO,
          scrollToFn: i.Ox,
          ...e,
        });
      }
      function u(e) {
        return r({
          getScrollElement: () =>
            "undefined" != typeof document ? window : null,
          observeElementRect: i.TH,
          observeElementOffset: i.MH,
          scrollToFn: i.e8,
          initialOffset: () =>
            "undefined" != typeof document ? window.scrollY : 0,
          ...e,
        });
      }
    },
    59366: (e, t, n) => {
      function o(e, t, n) {
        let o,
          l = n.initialDeps ?? [];
        return () => {
          var i, s, r, a;
          let u;
          n.key &&
            (null == (i = n.debug) ? void 0 : i.call(n)) &&
            (u = Date.now());
          const g = e();
          if (!(g.length !== l.length || g.some((e, t) => l[t] !== e)))
            return o;
          let d;
          if (
            ((l = g),
            n.key &&
              (null == (s = n.debug) ? void 0 : s.call(n)) &&
              (d = Date.now()),
            (o = t(...g)),
            n.key && (null == (r = n.debug) ? void 0 : r.call(n)))
          ) {
            const e = Math.round(100 * (Date.now() - u)) / 100,
              t = Math.round(100 * (Date.now() - d)) / 100,
              o = t / 16,
              l = (e, t) => {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              `%c⏱ ${l(t, 5)} /${l(e, 5)} ms`,
              `\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0, Math.min(120 - 120 * o, 120))}deg 100% 31%);`,
              null == n ? void 0 : n.key,
            );
          }
          return (
            null == (a = null == n ? void 0 : n.onChange) || a.call(n, o), o
          );
        };
      }
      function l(e, t) {
        if (void 0 === e)
          throw new Error("Unexpected undefined" + (t ? `: ${t}` : ""));
        return e;
      }
      n.d(t, {
        YV: () => v,
        vp: () => r,
        Ox: () => m,
        AO: () => c,
        T6: () => a,
        MH: () => h,
        TH: () => g,
        e8: () => p,
      });
      const i = (e, t, n) => {
          let o;
          return function (...l) {
            e.clearTimeout(o), (o = e.setTimeout(() => t.apply(this, l), n));
          };
        },
        s = (e) => e,
        r = (e) => {
          const t = Math.max(e.startIndex - e.overscan, 0),
            n = Math.min(e.endIndex + e.overscan, e.count - 1),
            o = [];
          for (let e = t; e <= n; e++) o.push(e);
          return o;
        },
        a = (e, t) => {
          const n = e.scrollElement;
          if (!n) return;
          const o = e.targetWindow;
          if (!o) return;
          const l = (e) => {
            const { width: n, height: o } = e;
            t({ width: Math.round(n), height: Math.round(o) });
          };
          if ((l(n.getBoundingClientRect()), !o.ResizeObserver))
            return () => {};
          const i = new o.ResizeObserver((e) => {
            const t = e[0];
            if (null == t ? void 0 : t.borderBoxSize) {
              const e = t.borderBoxSize[0];
              if (e)
                return void l({ width: e.inlineSize, height: e.blockSize });
            }
            l(n.getBoundingClientRect());
          });
          return (
            i.observe(n, { box: "border-box" }),
            () => {
              i.unobserve(n);
            }
          );
        },
        u = { passive: !0 },
        g = (e, t) => {
          const n = e.scrollElement;
          if (!n) return;
          const o = () => {
            t({ width: n.innerWidth, height: n.innerHeight });
          };
          return (
            o(),
            n.addEventListener("resize", o, u),
            () => {
              n.removeEventListener("resize", o);
            }
          );
        },
        d = "undefined" == typeof window || "onscrollend" in window,
        c = (e, t) => {
          const n = e.scrollElement;
          if (!n) return;
          const o = e.targetWindow;
          if (!o) return;
          let l = 0;
          const s = d
              ? () => {}
              : i(
                  o,
                  () => {
                    t(l, !1);
                  },
                  e.options.isScrollingResetDelay,
                ),
            r = (o) => () => {
              const { horizontal: i, isRtl: r } = e.options;
              (l = i ? n.scrollLeft * (r ? -1 : 1) : n.scrollTop), s(), t(l, o);
            },
            a = r(!0),
            g = r(!1);
          return (
            g(),
            n.addEventListener("scroll", a, u),
            n.addEventListener("scrollend", g, u),
            () => {
              n.removeEventListener("scroll", a),
                n.removeEventListener("scrollend", g);
            }
          );
        },
        h = (e, t) => {
          const n = e.scrollElement;
          if (!n) return;
          const o = e.targetWindow;
          if (!o) return;
          let l = 0;
          const s = d
              ? () => {}
              : i(
                  o,
                  () => {
                    t(l, !1);
                  },
                  e.options.isScrollingResetDelay,
                ),
            r = (o) => () => {
              (l = n[e.options.horizontal ? "scrollX" : "scrollY"]),
                s(),
                t(l, o);
            },
            a = r(!0),
            g = r(!1);
          return (
            g(),
            n.addEventListener("scroll", a, u),
            n.addEventListener("scrollend", g, u),
            () => {
              n.removeEventListener("scroll", a),
                n.removeEventListener("scrollend", g);
            }
          );
        },
        f = (e, t, n) => {
          if (null == t ? void 0 : t.borderBoxSize) {
            const e = t.borderBoxSize[0];
            if (e) {
              return Math.round(
                e[n.options.horizontal ? "inlineSize" : "blockSize"],
              );
            }
          }
          return Math.round(
            e.getBoundingClientRect()[
              n.options.horizontal ? "width" : "height"
            ],
          );
        },
        p = (e, { adjustments: t = 0, behavior: n }, o) => {
          var l, i;
          const s = e + t;
          null == (i = null == (l = o.scrollElement) ? void 0 : l.scrollTo) ||
            i.call(l, {
              [o.options.horizontal ? "left" : "top"]: s,
              behavior: n,
            });
        },
        m = (e, { adjustments: t = 0, behavior: n }, o) => {
          var l, i;
          const s = e + t;
          null == (i = null == (l = o.scrollElement) ? void 0 : l.scrollTo) ||
            i.call(l, {
              [o.options.horizontal ? "left" : "top"]: s,
              behavior: n,
            });
        };
      class v {
        constructor(e) {
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
              let e = null;
              const t = () =>
                e ||
                (this.targetWindow && this.targetWindow.ResizeObserver
                  ? (e = new this.targetWindow.ResizeObserver((e) => {
                      e.forEach((e) => {
                        this._measureElement(e.target, e);
                      });
                    }))
                  : null);
              return {
                disconnect: () => {
                  var e;
                  return null == (e = t()) ? void 0 : e.disconnect();
                },
                observe: (e) => {
                  var n;
                  return null == (n = t())
                    ? void 0
                    : n.observe(e, { box: "border-box" });
                },
                unobserve: (e) => {
                  var n;
                  return null == (n = t()) ? void 0 : n.unobserve(e);
                },
              };
            })()),
            (this.range = null),
            (this.setOptions = (e) => {
              Object.entries(e).forEach(([t, n]) => {
                void 0 === n && delete e[t];
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
                  getItemKey: s,
                  rangeExtractor: r,
                  onChange: () => {},
                  measureElement: f,
                  initialRect: { width: 0, height: 0 },
                  scrollMargin: 0,
                  gap: 0,
                  indexAttribute: "data-index",
                  initialMeasurementsCache: [],
                  lanes: 1,
                  isScrollingResetDelay: 150,
                  enabled: !0,
                  isRtl: !1,
                  ...e,
                });
            }),
            (this.notify = (e) => {
              var t, n;
              null == (n = (t = this.options).onChange) || n.call(t, this, e);
            }),
            (this.maybeNotify = o(
              () => (
                this.calculateRange(),
                [
                  this.isScrolling,
                  this.range ? this.range.startIndex : null,
                  this.range ? this.range.endIndex : null,
                ]
              ),
              (e) => {
                this.notify(e);
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
              this.unsubs.filter(Boolean).forEach((e) => e()),
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
              var e;
              const t = this.options.enabled
                ? this.options.getScrollElement()
                : null;
              if (this.scrollElement !== t) {
                if ((this.cleanup(), !t)) return void this.maybeNotify();
                (this.scrollElement = t),
                  this.scrollElement && "ownerDocument" in this.scrollElement
                    ? (this.targetWindow =
                        this.scrollElement.ownerDocument.defaultView)
                    : (this.targetWindow =
                        (null == (e = this.scrollElement)
                          ? void 0
                          : e.window) ?? null),
                  this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: void 0,
                    behavior: void 0,
                  }),
                  this.unsubs.push(
                    this.options.observeElementRect(this, (e) => {
                      (this.scrollRect = e), this.maybeNotify();
                    }),
                  ),
                  this.unsubs.push(
                    this.options.observeElementOffset(this, (e, t) => {
                      (this.scrollAdjustments = 0),
                        (this.scrollDirection = t
                          ? this.getScrollOffset() < e
                            ? "forward"
                            : "backward"
                          : null),
                        (this.scrollOffset = e),
                        (this.isScrolling = t),
                        this.maybeNotify();
                    }),
                  );
              }
            }),
            (this.getSize = () =>
              this.options.enabled
                ? ((this.scrollRect =
                    this.scrollRect ?? this.options.initialRect),
                  this.scrollRect[this.options.horizontal ? "width" : "height"])
                : ((this.scrollRect = null), 0)),
            (this.getScrollOffset = () =>
              this.options.enabled
                ? ((this.scrollOffset =
                    this.scrollOffset ??
                    ("function" == typeof this.options.initialOffset
                      ? this.options.initialOffset()
                      : this.options.initialOffset)),
                  this.scrollOffset)
                : ((this.scrollOffset = null), 0)),
            (this.getFurthestMeasurement = (e, t) => {
              const n = new Map(),
                o = new Map();
              for (let l = t - 1; l >= 0; l--) {
                const t = e[l];
                if (n.has(t.lane)) continue;
                const i = o.get(t.lane);
                if (
                  (null == i || t.end > i.end
                    ? o.set(t.lane, t)
                    : t.end < i.end && n.set(t.lane, !0),
                  n.size === this.options.lanes)
                )
                  break;
              }
              return o.size === this.options.lanes
                ? Array.from(o.values()).sort((e, t) =>
                    e.end === t.end ? e.index - t.index : e.end - t.end,
                  )[0]
                : void 0;
            }),
            (this.getMeasurementOptions = o(
              () => [
                this.options.count,
                this.options.paddingStart,
                this.options.scrollMargin,
                this.options.getItemKey,
                this.options.enabled,
              ],
              (e, t, n, o, l) => (
                (this.pendingMeasuredCacheIndexes = []),
                {
                  count: e,
                  paddingStart: t,
                  scrollMargin: n,
                  getItemKey: o,
                  enabled: l,
                }
              ),
              { key: !1 },
            )),
            (this.getMeasurements = o(
              () => [this.getMeasurementOptions(), this.itemSizeCache],
              (
                {
                  count: e,
                  paddingStart: t,
                  scrollMargin: n,
                  getItemKey: o,
                  enabled: l,
                },
                i,
              ) => {
                if (!l)
                  return (
                    (this.measurementsCache = []),
                    this.itemSizeCache.clear(),
                    []
                  );
                0 === this.measurementsCache.length &&
                  ((this.measurementsCache =
                    this.options.initialMeasurementsCache),
                  this.measurementsCache.forEach((e) => {
                    this.itemSizeCache.set(e.key, e.size);
                  }));
                const s =
                  this.pendingMeasuredCacheIndexes.length > 0
                    ? Math.min(...this.pendingMeasuredCacheIndexes)
                    : 0;
                this.pendingMeasuredCacheIndexes = [];
                const r = this.measurementsCache.slice(0, s);
                for (let l = s; l < e; l++) {
                  const e = o(l),
                    s =
                      1 === this.options.lanes
                        ? r[l - 1]
                        : this.getFurthestMeasurement(r, l),
                    a = s ? s.end + this.options.gap : t + n,
                    u = i.get(e),
                    g = "number" == typeof u ? u : this.options.estimateSize(l),
                    d = a + g,
                    c = s ? s.lane : l % this.options.lanes;
                  r[l] = {
                    index: l,
                    start: a,
                    size: g,
                    end: d,
                    key: e,
                    lane: c,
                  };
                }
                return (this.measurementsCache = r), r;
              },
              { key: !1, debug: () => this.options.debug },
            )),
            (this.calculateRange = o(
              () => [
                this.getMeasurements(),
                this.getSize(),
                this.getScrollOffset(),
              ],
              (e, t, n) =>
                (this.range =
                  e.length > 0 && t > 0
                    ? (function ({
                        measurements: e,
                        outerSize: t,
                        scrollOffset: n,
                      }) {
                        const o = e.length - 1,
                          l = (t) => e[t].start,
                          i = w(0, o, l, n);
                        let s = i;
                        for (; s < o && e[s].end < n + t; ) s++;
                        return { startIndex: i, endIndex: s };
                      })({ measurements: e, outerSize: t, scrollOffset: n })
                    : null),
              { key: !1, debug: () => this.options.debug },
            )),
            (this.getIndexes = o(
              () => [
                this.options.rangeExtractor,
                this.calculateRange(),
                this.options.overscan,
                this.options.count,
              ],
              (e, t, n, o) =>
                null === t
                  ? []
                  : e({
                      startIndex: t.startIndex,
                      endIndex: t.endIndex,
                      overscan: n,
                      count: o,
                    }),
              { key: !1, debug: () => this.options.debug },
            )),
            (this.indexFromElement = (e) => {
              const t = this.options.indexAttribute,
                n = e.getAttribute(t);
              return n
                ? parseInt(n, 10)
                : (console.warn(
                    `Missing attribute name '${t}={index}' on measured element.`,
                  ),
                  -1);
            }),
            (this._measureElement = (e, t) => {
              const n = this.indexFromElement(e),
                o = this.measurementsCache[n];
              if (!o) return;
              const l = o.key,
                i = this.elementsCache.get(l);
              i !== e &&
                (i && this.observer.unobserve(i),
                this.observer.observe(e),
                this.elementsCache.set(l, e)),
                e.isConnected &&
                  this.resizeItem(n, this.options.measureElement(e, t, this));
            }),
            (this.resizeItem = (e, t) => {
              const n = this.measurementsCache[e];
              if (!n) return;
              const o = t - (this.itemSizeCache.get(n.key) ?? n.size);
              0 !== o &&
                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                  ? this.shouldAdjustScrollPositionOnItemSizeChange(n, o, this)
                  : n.start <
                    this.getScrollOffset() + this.scrollAdjustments) &&
                  this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: (this.scrollAdjustments += o),
                    behavior: void 0,
                  }),
                this.pendingMeasuredCacheIndexes.push(n.index),
                (this.itemSizeCache = new Map(
                  this.itemSizeCache.set(n.key, t),
                )),
                this.notify(!1));
            }),
            (this.measureElement = (e) => {
              e
                ? this._measureElement(e, void 0)
                : this.elementsCache.forEach((e, t) => {
                    e.isConnected ||
                      (this.observer.unobserve(e),
                      this.elementsCache.delete(t));
                  });
            }),
            (this.getVirtualItems = o(
              () => [this.getIndexes(), this.getMeasurements()],
              (e, t) => {
                const n = [];
                for (let o = 0, l = e.length; o < l; o++) {
                  const l = t[e[o]];
                  n.push(l);
                }
                return n;
              },
              { key: !1, debug: () => this.options.debug },
            )),
            (this.getVirtualItemForOffset = (e) => {
              const t = this.getMeasurements();
              if (0 !== t.length)
                return l(t[w(0, t.length - 1, (e) => l(t[e]).start, e)]);
            }),
            (this.getOffsetForAlignment = (e, t) => {
              const n = this.getSize(),
                o = this.getScrollOffset();
              "auto" === t &&
                (t = e <= o ? "start" : e >= o + n ? "end" : "start"),
                "start" === t ||
                  ("end" === t ? (e -= n) : "center" === t && (e -= n / 2));
              const l = this.options.horizontal
                  ? "scrollWidth"
                  : "scrollHeight",
                i =
                  (this.scrollElement
                    ? "document" in this.scrollElement
                      ? this.scrollElement.document.documentElement[l]
                      : this.scrollElement[l]
                    : 0) - n;
              return Math.max(Math.min(i, e), 0);
            }),
            (this.getOffsetForIndex = (e, t = "auto") => {
              e = Math.max(0, Math.min(e, this.options.count - 1));
              const n = this.measurementsCache[e];
              if (!n) return;
              const o = this.getSize(),
                l = this.getScrollOffset();
              if ("auto" === t)
                if (n.end >= l + o - this.options.scrollPaddingEnd) t = "end";
                else {
                  if (!(n.start <= l + this.options.scrollPaddingStart))
                    return [l, t];
                  t = "start";
                }
              const i =
                "end" === t
                  ? n.end + this.options.scrollPaddingEnd
                  : n.start - this.options.scrollPaddingStart;
              return [this.getOffsetForAlignment(i, t), t];
            }),
            (this.isDynamicMode = () => this.elementsCache.size > 0),
            (this.cancelScrollToIndex = () => {
              null !== this.scrollToIndexTimeoutId &&
                this.targetWindow &&
                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),
                (this.scrollToIndexTimeoutId = null));
            }),
            (this.scrollToOffset = (
              e,
              { align: t = "start", behavior: n } = {},
            ) => {
              this.cancelScrollToIndex(),
                "smooth" === n &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                this._scrollToOffset(this.getOffsetForAlignment(e, t), {
                  adjustments: void 0,
                  behavior: n,
                });
            }),
            (this.scrollToIndex = (
              e,
              { align: t = "auto", behavior: n } = {},
            ) => {
              (e = Math.max(0, Math.min(e, this.options.count - 1))),
                this.cancelScrollToIndex(),
                "smooth" === n &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  );
              const o = this.getOffsetForIndex(e, t);
              if (!o) return;
              const [i, s] = o;
              this._scrollToOffset(i, { adjustments: void 0, behavior: n }),
                "smooth" !== n &&
                  this.isDynamicMode() &&
                  this.targetWindow &&
                  (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(
                    () => {
                      this.scrollToIndexTimeoutId = null;
                      if (this.elementsCache.has(this.options.getItemKey(e))) {
                        const [i] = l(this.getOffsetForIndex(e, s));
                        (t = i),
                          (o = this.getScrollOffset()),
                          Math.abs(t - o) < 1 ||
                            this.scrollToIndex(e, { align: s, behavior: n });
                      } else this.scrollToIndex(e, { align: s, behavior: n });
                      var t, o;
                    },
                  ));
            }),
            (this.scrollBy = (e, { behavior: t } = {}) => {
              this.cancelScrollToIndex(),
                "smooth" === t &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                this._scrollToOffset(this.getScrollOffset() + e, {
                  adjustments: void 0,
                  behavior: t,
                });
            }),
            (this.getTotalSize = () => {
              var e;
              const t = this.getMeasurements();
              let n;
              return (
                (n =
                  0 === t.length
                    ? this.options.paddingStart
                    : 1 === this.options.lanes
                      ? ((null == (e = t[t.length - 1]) ? void 0 : e.end) ?? 0)
                      : Math.max(
                          ...t.slice(-this.options.lanes).map((e) => e.end),
                        )),
                n - this.options.scrollMargin + this.options.paddingEnd
              );
            }),
            (this._scrollToOffset = (e, { adjustments: t, behavior: n }) => {
              this.options.scrollToFn(e, { behavior: n, adjustments: t }, this);
            }),
            (this.measure = () => {
              (this.itemSizeCache = new Map()), this.notify(!1);
            }),
            this.setOptions(e);
        }
      }
      const w = (e, t, n, o) => {
        for (; e <= t; ) {
          const l = ((e + t) / 2) | 0,
            i = n(l);
          if (i < o) e = l + 1;
          else {
            if (!(i > o)) return l;
            t = l - 1;
          }
        }
        return e > 0 ? e - 1 : 0;
      };
    },
  },
]);
