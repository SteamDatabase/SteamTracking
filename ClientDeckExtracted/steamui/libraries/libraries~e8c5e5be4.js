(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [8553, 4535],
  {
    45933: (e) => {
      "use strict";
      var t,
        n = (function () {
          function e(e, t) {
            if ("function" != typeof e)
              throw new TypeError(
                "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " +
                  e +
                  "."
              );
            (this._batchLoadFn = e),
              (this._maxBatchSize = (function (e) {
                var t = !e || !1 !== e.batch;
                if (!t) return 1;
                var n = e && e.maxBatchSize;
                if (void 0 === n) return 1 / 0;
                if ("number" != typeof n || n < 1)
                  throw new TypeError(
                    "maxBatchSize must be a positive number: " + n
                  );
                return n;
              })(t)),
              (this._batchScheduleFn = (function (e) {
                var t = e && e.batchScheduleFn;
                if (void 0 === t) return r;
                if ("function" != typeof t)
                  throw new TypeError(
                    "batchScheduleFn must be a function: " + t
                  );
                return t;
              })(t)),
              (this._cacheKeyFn = (function (e) {
                var t = e && e.cacheKeyFn;
                if (void 0 === t)
                  return function (e) {
                    return e;
                  };
                if ("function" != typeof t)
                  throw new TypeError("cacheKeyFn must be a function: " + t);
                return t;
              })(t)),
              (this._cacheMap = (function (e) {
                var t = !e || !1 !== e.cache;
                if (!t) return null;
                var n = e && e.cacheMap;
                if (void 0 === n) return new Map();
                if (null !== n) {
                  var r = ["get", "set", "delete", "clear"].filter(function (
                    e
                  ) {
                    return n && "function" != typeof n[e];
                  });
                  if (0 !== r.length)
                    throw new TypeError(
                      "Custom cacheMap missing methods: " + r.join(", ")
                    );
                }
                return n;
              })(t)),
              (this._batch = null),
              (this.name = (function (e) {
                if (e && e.name) return e.name;
                return null;
              })(t));
          }
          var t = e.prototype;
          return (
            (t.load = function (e) {
              if (null == e)
                throw new TypeError(
                  "The loader.load() function must be called with a value, but got: " +
                    String(e) +
                    "."
                );
              var t = (function (e) {
                  var t = e._batch;
                  if (
                    null !== t &&
                    !t.hasDispatched &&
                    t.keys.length < e._maxBatchSize
                  )
                    return t;
                  var n = { hasDispatched: !1, keys: [], callbacks: [] };
                  return (
                    (e._batch = n),
                    e._batchScheduleFn(function () {
                      !(function (e, t) {
                        if (((t.hasDispatched = !0), 0 === t.keys.length))
                          return void i(t);
                        var n;
                        try {
                          n = e._batchLoadFn(t.keys);
                        } catch (n) {
                          return o(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " +
                                String(n) +
                                "."
                            )
                          );
                        }
                        if (!n || "function" != typeof n.then)
                          return o(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                String(n) +
                                "."
                            )
                          );
                        n.then(function (e) {
                          if (!s(e))
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " +
                                String(e) +
                                "."
                            );
                          if (e.length !== t.keys.length)
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" +
                                String(t.keys) +
                                "\n\nValues:\n" +
                                String(e)
                            );
                          i(t);
                          for (var n = 0; n < t.callbacks.length; n++) {
                            var r = e[n];
                            r instanceof Error
                              ? t.callbacks[n].reject(r)
                              : t.callbacks[n].resolve(r);
                          }
                        }).catch(function (n) {
                          o(e, t, n);
                        });
                      })(e, n);
                    }),
                    n
                  );
                })(this),
                n = this._cacheMap,
                r = this._cacheKeyFn(e);
              if (n) {
                var l = n.get(r);
                if (l) {
                  var a = t.cacheHits || (t.cacheHits = []);
                  return new Promise(function (e) {
                    a.push(function () {
                      e(l);
                    });
                  });
                }
              }
              t.keys.push(e);
              var c = new Promise(function (e, n) {
                t.callbacks.push({ resolve: e, reject: n });
              });
              return n && n.set(r, c), c;
            }),
            (t.loadMany = function (e) {
              if (!s(e))
                throw new TypeError(
                  "The loader.loadMany() function must be called with Array<key> but got: " +
                    e +
                    "."
                );
              for (var t = [], n = 0; n < e.length; n++)
                t.push(
                  this.load(e[n]).catch(function (e) {
                    return e;
                  })
                );
              return Promise.all(t);
            }),
            (t.clear = function (e) {
              var t = this._cacheMap;
              if (t) {
                var n = this._cacheKeyFn(e);
                t.delete(n);
              }
              return this;
            }),
            (t.clearAll = function () {
              var e = this._cacheMap;
              return e && e.clear(), this;
            }),
            (t.prime = function (e, t) {
              var n = this._cacheMap;
              if (n) {
                var r,
                  o = this._cacheKeyFn(e);
                if (void 0 === n.get(o))
                  t instanceof Error
                    ? (r = Promise.reject(t)).catch(function () {})
                    : (r = Promise.resolve(t)),
                    n.set(o, r);
              }
              return this;
            }),
            e
          );
        })(),
        r =
          "object" == typeof process && "function" == typeof process.nextTick
            ? function (e) {
                t || (t = Promise.resolve()),
                  t.then(function () {
                    process.nextTick(e);
                  });
              }
            : "function" == typeof setImmediate
            ? function (e) {
                setImmediate(e);
              }
            : function (e) {
                setTimeout(e);
              };
      function o(e, t, n) {
        i(t);
        for (var r = 0; r < t.keys.length; r++)
          e.clear(t.keys[r]), t.callbacks[r].reject(n);
      }
      function i(e) {
        if (e.cacheHits)
          for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
      }
      function s(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "number" == typeof e.length &&
          (0 === e.length ||
            (e.length > 0 &&
              Object.prototype.hasOwnProperty.call(e, e.length - 1)))
        );
      }
      e.exports = n;
    },
    40217: function (e, t, n) {
      !(function (e, t) {
        "use strict";
        function n(e, t, n, r, o, i, s) {
          try {
            var l = e[i](s),
              a = l.value;
          } catch (e) {
            return void n(e);
          }
          l.done ? t(a) : Promise.resolve(a).then(r, o);
        }
        function r(e) {
          return function () {
            var t = this,
              r = arguments;
            return new Promise(function (o, i) {
              var s = e.apply(t, r);
              function l(e) {
                n(s, o, i, l, a, "next", e);
              }
              function a(e) {
                n(s, o, i, l, a, "throw", e);
              }
              l(void 0);
            });
          };
        }
        function o() {
          return (o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
        }
        function i(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        }
        function s(e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        }
        t =
          t && Object.prototype.hasOwnProperty.call(t, "default")
            ? t.default
            : t;
        var l = { init: "init" },
          a = function (e) {
            var t = e.value;
            return void 0 === t ? "" : t;
          },
          c = function () {
            return t.createElement(t.Fragment, null, " ");
          },
          u = {
            Cell: a,
            width: 150,
            minWidth: 0,
            maxWidth: Number.MAX_SAFE_INTEGER,
          };
        function d() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce(function (e, t) {
            var n = t.style,
              r = t.className;
            return (
              (e = o({}, e, {}, i(t, ["style", "className"]))),
              n && (e.style = e.style ? o({}, e.style || {}, {}, n || {}) : n),
              r && (e.className = e.className ? e.className + " " + r : r),
              "" === e.className && delete e.className,
              e
            );
          }, {});
        }
        var h = function (e, t) {
            return (
              void 0 === t && (t = {}),
              function (n) {
                return (
                  void 0 === n && (n = {}),
                  [].concat(e, [n]).reduce(function (e, r) {
                    return (function e(t, n, r) {
                      return "function" == typeof n
                        ? e({}, n(t, r))
                        : Array.isArray(n)
                        ? d.apply(void 0, [t].concat(n))
                        : d(t, n);
                    })(e, r, o({}, t, { userProps: n }));
                  }, {})
                );
              }
            );
          },
          p = function (e, t, n, r) {
            return (
              void 0 === n && (n = {}),
              e.reduce(function (e, t) {
                return t(e, n);
              }, t)
            );
          },
          f = function (e, t, n) {
            return (
              void 0 === n && (n = {}),
              e.forEach(function (e) {
                e(t, n);
              })
            );
          };
        function m(e, t, n, r) {
          e.findIndex(function (e) {
            return e.pluginName === n;
          }),
            t.forEach(function (t) {
              e.findIndex(function (e) {
                return e.pluginName === t;
              });
            });
        }
        function g(e, t) {
          return "function" == typeof e ? e(t) : e;
        }
        function y(e) {
          var n = t.useRef();
          return (
            (n.current = e),
            t.useCallback(function () {
              return n.current;
            }, [])
          );
        }
        var v =
          "undefined" != typeof document ? t.useLayoutEffect : t.useEffect;
        function w(e, n) {
          var r = t.useRef(!1);
          v(function () {
            r.current && e(), (r.current = !0);
          }, n);
        }
        function b(e, t, n) {
          return (
            void 0 === n && (n = {}),
            function (r, i) {
              void 0 === i && (i = {});
              var s = "string" == typeof r ? t[r] : r;
              if (void 0 === s)
                throw (console.info(t), new Error("Renderer Error ☝️"));
              return S(s, o({}, e, { column: t }, n, {}, i));
            }
          );
        }
        function S(e, n) {
          return (function (e) {
            return (
              "function" == typeof e &&
              (t = Object.getPrototypeOf(e)).prototype &&
              t.prototype.isReactComponent
            );
            var t;
          })((r = e)) ||
            "function" == typeof r ||
            (function (e) {
              return (
                "object" == typeof e &&
                "symbol" == typeof e.$$typeof &&
                ["react.memo", "react.forward_ref"].includes(
                  e.$$typeof.description
                )
              );
            })(r)
            ? t.createElement(e, n)
            : e;
          var r;
        }
        function x(e, t, n) {
          return (
            void 0 === n && (n = 0),
            e.map(function (e) {
              return (
                C((e = o({}, e, { parent: t, depth: n }))),
                e.columns && (e.columns = x(e.columns, e, n + 1)),
                e
              );
            })
          );
        }
        function k(e) {
          return E(e, "columns");
        }
        function C(e) {
          var t = e.id,
            n = e.accessor,
            r = e.Header;
          if ("string" == typeof n) {
            t = t || n;
            var o = n.split(".");
            n = function (e) {
              return (function (e, t, n) {
                if (!t) return e;
                var r,
                  o = "function" == typeof t ? t : JSON.stringify(t),
                  i =
                    O.get(o) ||
                    (function () {
                      var e = (function (e) {
                        return (function e(t, n) {
                          if ((void 0 === n && (n = []), Array.isArray(t)))
                            for (var r = 0; r < t.length; r += 1) e(t[r], n);
                          else n.push(t);
                          return n;
                        })(e)
                          .map(function (e) {
                            return String(e).replace(".", "_");
                          })
                          .join(".")
                          .replace(F, ".")
                          .replace(z, "")
                          .split(".");
                      })(t);
                      return O.set(o, e), e;
                    })();
                try {
                  r = i.reduce(function (e, t) {
                    return e[t];
                  }, e);
                } catch (e) {}
                return void 0 !== r ? r : n;
              })(e, o);
            };
          }
          if ((!t && "string" == typeof r && r && (t = r), !t && e.columns))
            throw (
              (console.error(e),
              new Error('A column ID (or unique "Header" value) is required!'))
            );
          if (!t)
            throw (
              (console.error(e),
              new Error("A column ID (or string accessor) is required!"))
            );
          return Object.assign(e, { id: t, accessor: n }), e;
        }
        function R(e, t) {
          if (!t) throw new Error();
          return (
            Object.assign(e, o({ Header: c, Footer: c }, u, {}, t, {}, e)),
            Object.assign(e, { originalWidth: e.width }),
            e
          );
        }
        function M(e, t, n) {
          void 0 === n &&
            (n = function () {
              return {};
            });
          for (
            var r = [],
              i = e,
              s = 0,
              l = function () {
                return s++;
              },
              a = function () {
                var e = { headers: [] },
                  s = [],
                  a = i.some(function (e) {
                    return e.parent;
                  });
                i.forEach(function (r) {
                  var i,
                    c = [].concat(s).reverse()[0];
                  a &&
                    ((i = r.parent
                      ? o(
                          {},
                          r.parent,
                          {
                            originalId: r.parent.id,
                            id: r.parent.id + "_" + l(),
                            headers: [r],
                          },
                          n(r)
                        )
                      : R(
                          o(
                            {
                              originalId: r.id + "_placeholder",
                              id: r.id + "_placeholder_" + l(),
                              placeholderOf: r,
                              headers: [r],
                            },
                            n(r)
                          ),
                          t
                        )),
                    c && c.originalId === i.originalId
                      ? c.headers.push(r)
                      : s.push(i)),
                    e.headers.push(r);
                }),
                  r.push(e),
                  (i = s);
              };
            i.length;

          )
            a();
          return r.reverse();
        }
        var O = new Map();
        function T() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          for (var r = 0; r < t.length; r += 1)
            if (void 0 !== t[r]) return t[r];
        }
        function N(e) {
          if ("function" == typeof e) return e;
        }
        function E(e, t) {
          var n = [];
          return (
            (function e(r) {
              r.forEach(function (r) {
                r[t] ? e(r[t]) : n.push(r);
              });
            })(e),
            n
          );
        }
        function D(e, t) {
          var n = t.manualExpandedKey,
            r = t.expanded,
            o = t.expandSubRows,
            i = void 0 === o || o,
            s = [];
          return (
            e.forEach(function (e) {
              return (function e(t, o) {
                void 0 === o && (o = !0),
                  (t.isExpanded = (t.original && t.original[n]) || r[t.id]),
                  (t.canExpand = t.subRows && !!t.subRows.length),
                  o && s.push(t),
                  t.subRows &&
                    t.subRows.length &&
                    t.isExpanded &&
                    t.subRows.forEach(function (t) {
                      return e(t, i);
                    });
              })(e);
            }),
            s
          );
        }
        function A(e, t, n) {
          return N(e) || t[e] || n[e] || n.text;
        }
        function I(e, t, n) {
          return e ? e(t, n) : void 0 === t;
        }
        function P() {
          throw new Error(
            "React-Table: You have not called prepareRow(row) one or more rows you are attempting to render."
          );
        }
        var B = null,
          F = /\[/g,
          z = /\]/g,
          V = function (e) {
            return o({ role: "table" }, e);
          },
          H = function (e) {
            return o({ role: "rowgroup" }, e);
          },
          $ = function (e, t) {
            var n = t.column;
            return o(
              {
                key: "header_" + n.id,
                colSpan: n.totalVisibleHeaderCount,
                role: "columnheader",
              },
              e
            );
          },
          W = function (e, t) {
            var n = t.column;
            return o(
              { key: "footer_" + n.id, colSpan: n.totalVisibleHeaderCount },
              e
            );
          },
          L = function (e, t) {
            return o({ key: "headerGroup_" + t.index, role: "row" }, e);
          },
          G = function (e, t) {
            return o({ key: "footerGroup_" + t.index }, e);
          },
          q = function (e, t) {
            return o({ key: "row_" + t.row.id, role: "row" }, e);
          },
          j = function (e, t) {
            var n = t.cell;
            return o(
              { key: "cell_" + n.row.id + "_" + n.column.id, role: "cell" },
              e
            );
          };
        function J() {
          return {
            useOptions: [],
            stateReducers: [],
            useControlledState: [],
            columns: [],
            columnsDeps: [],
            allColumns: [],
            allColumnsDeps: [],
            accessValue: [],
            materializedColumns: [],
            materializedColumnsDeps: [],
            useInstanceAfterData: [],
            visibleColumns: [],
            visibleColumnsDeps: [],
            headerGroups: [],
            headerGroupsDeps: [],
            useInstanceBeforeDimensions: [],
            useInstance: [],
            prepareRow: [],
            getTableProps: [V],
            getTableBodyProps: [H],
            getHeaderGroupProps: [L],
            getFooterGroupProps: [G],
            getHeaderProps: [$],
            getFooterProps: [W],
            getRowProps: [q],
            getCellProps: [j],
            useFinalInstance: [],
          };
        }
        (l.resetHiddenColumns = "resetHiddenColumns"),
          (l.toggleHideColumn = "toggleHideColumn"),
          (l.setHiddenColumns = "setHiddenColumns"),
          (l.toggleHideAllColumns = "toggleHideAllColumns");
        var _ = function (e) {
          (e.getToggleHiddenProps = [K]),
            (e.getToggleHideAllColumnsProps = [Y]),
            e.stateReducers.push(U),
            e.useInstanceBeforeDimensions.push(X),
            e.headerGroupsDeps.push(function (e, t) {
              var n = t.instance;
              return [].concat(e, [n.state.hiddenColumns]);
            }),
            e.useInstance.push(Z);
        };
        _.pluginName = "useColumnVisibility";
        var K = function (e, t) {
            var n = t.column;
            return [
              e,
              {
                onChange: function (e) {
                  n.toggleHidden(!e.target.checked);
                },
                style: { cursor: "pointer" },
                checked: n.isVisible,
                title: "Toggle Column Visible",
              },
            ];
          },
          Y = function (e, t) {
            var n = t.instance;
            return [
              e,
              {
                onChange: function (e) {
                  n.toggleHideAllColumns(!e.target.checked);
                },
                style: { cursor: "pointer" },
                checked: !n.allColumnsHidden && !n.state.hiddenColumns.length,
                title: "Toggle All Columns Hidden",
                indeterminate:
                  !n.allColumnsHidden && n.state.hiddenColumns.length,
              },
            ];
          };
        function U(e, t, n, r) {
          if (t.type === l.init) return o({ hiddenColumns: [] }, e);
          if (t.type === l.resetHiddenColumns)
            return o({}, e, {
              hiddenColumns: r.initialState.hiddenColumns || [],
            });
          if (t.type === l.toggleHideColumn) {
            var i = (
              void 0 !== t.value
                ? t.value
                : !e.hiddenColumns.includes(t.columnId)
            )
              ? [].concat(e.hiddenColumns, [t.columnId])
              : e.hiddenColumns.filter(function (e) {
                  return e !== t.columnId;
                });
            return o({}, e, { hiddenColumns: i });
          }
          return t.type === l.setHiddenColumns
            ? o({}, e, { hiddenColumns: g(t.value, e.hiddenColumns) })
            : t.type === l.toggleHideAllColumns
            ? o({}, e, {
                hiddenColumns: (
                  void 0 !== t.value ? t.value : !e.hiddenColumns.length
                )
                  ? r.allColumns.map(function (e) {
                      return e.id;
                    })
                  : [],
              })
            : void 0;
        }
        function X(e) {
          var n = e.headers,
            r = e.state.hiddenColumns;
          t.useRef(!1).current;
          var o = 0;
          n.forEach(function (e) {
            return (o += (function e(t, n) {
              t.isVisible = n && !r.includes(t.id);
              var o = 0;
              return (
                t.headers && t.headers.length
                  ? t.headers.forEach(function (n) {
                      return (o += e(n, t.isVisible));
                    })
                  : (o = t.isVisible ? 1 : 0),
                (t.totalVisibleHeaderCount = o),
                o
              );
            })(e, !0));
          });
        }
        function Z(e) {
          var n = e.columns,
            r = e.flatHeaders,
            o = e.dispatch,
            i = e.allColumns,
            s = e.getHooks,
            a = e.state.hiddenColumns,
            c = e.autoResetHiddenColumns,
            u = void 0 === c || c,
            d = y(e),
            p = i.length === a.length,
            f = t.useCallback(
              function (e, t) {
                return o({ type: l.toggleHideColumn, columnId: e, value: t });
              },
              [o]
            ),
            m = t.useCallback(
              function (e) {
                return o({ type: l.setHiddenColumns, value: e });
              },
              [o]
            ),
            g = t.useCallback(
              function (e) {
                return o({ type: l.toggleHideAllColumns, value: e });
              },
              [o]
            ),
            v = h(s().getToggleHideAllColumnsProps, { instance: d() });
          r.forEach(function (e) {
            (e.toggleHidden = function (t) {
              o({ type: l.toggleHideColumn, columnId: e.id, value: t });
            }),
              (e.getToggleHiddenProps = h(s().getToggleHiddenProps, {
                instance: d(),
                column: e,
              }));
          });
          var b = y(u);
          w(
            function () {
              b() && o({ type: l.resetHiddenColumns });
            },
            [o, n]
          ),
            Object.assign(e, {
              allColumnsHidden: p,
              toggleHideColumn: f,
              setHiddenColumns: m,
              toggleHideAllColumns: g,
              getToggleHideAllColumnsProps: v,
            });
        }
        var Q = {},
          ee = {},
          te = function (e, t, n) {
            return e;
          },
          ne = function (e, t) {
            return e.subRows || [];
          },
          re = function (e, t, n) {
            return "" + (n ? [n.id, t].join(".") : t);
          },
          oe = function (e) {
            return e;
          };
        function ie(e) {
          var t = e.initialState,
            n = void 0 === t ? Q : t,
            r = e.defaultColumn,
            s = void 0 === r ? ee : r,
            l = e.getSubRows,
            a = void 0 === l ? ne : l,
            c = e.getRowId,
            u = void 0 === c ? re : c,
            d = e.stateReducer,
            h = void 0 === d ? te : d,
            p = e.useControlledState,
            f = void 0 === p ? oe : p;
          return o(
            {},
            i(e, [
              "initialState",
              "defaultColumn",
              "getSubRows",
              "getRowId",
              "stateReducer",
              "useControlledState",
            ]),
            {
              initialState: n,
              defaultColumn: s,
              getSubRows: a,
              getRowId: u,
              stateReducer: h,
              useControlledState: f,
            }
          );
        }
        function se(e, t) {
          void 0 === t && (t = 0);
          var n = 0,
            r = 0,
            o = 0,
            i = 0;
          return (
            e.forEach(function (e) {
              var s = e.headers;
              if (((e.totalLeft = t), s && s.length)) {
                var l = se(s, t),
                  a = l[0],
                  c = l[1],
                  u = l[2],
                  d = l[3];
                (e.totalMinWidth = a),
                  (e.totalWidth = c),
                  (e.totalMaxWidth = u),
                  (e.totalFlexWidth = d);
              } else (e.totalMinWidth = e.minWidth), (e.totalWidth = Math.min(Math.max(e.minWidth, e.width), e.maxWidth)), (e.totalMaxWidth = e.maxWidth), (e.totalFlexWidth = e.canResize ? e.totalWidth : 0);
              e.isVisible &&
                ((t += e.totalWidth),
                (n += e.totalMinWidth),
                (r += e.totalWidth),
                (o += e.totalMaxWidth),
                (i += e.totalFlexWidth));
            }),
            [n, r, o, i]
          );
        }
        function le(e) {
          var t = e.data,
            n = e.rows,
            r = e.flatRows,
            o = e.rowsById,
            i = e.column,
            s = e.getRowId,
            l = e.getSubRows,
            a = e.accessValueHooks,
            c = e.getInstance;
          t.forEach(function (e, u) {
            return (function e(n, u, d, h, f) {
              void 0 === d && (d = 0);
              var m = n,
                g = s(n, u, h),
                y = o[g];
              if (y)
                y.subRows &&
                  y.originalSubRows.forEach(function (t, n) {
                    return e(t, n, d + 1, y);
                  });
              else if (
                (((y = {
                  id: g,
                  original: m,
                  index: u,
                  depth: d,
                  cells: [{}],
                }).cells.map = P),
                (y.cells.filter = P),
                (y.cells.forEach = P),
                (y.cells[0].getCellProps = P),
                (y.values = {}),
                f.push(y),
                r.push(y),
                (o[g] = y),
                (y.originalSubRows = l(n, u)),
                y.originalSubRows)
              ) {
                var v = [];
                y.originalSubRows.forEach(function (t, n) {
                  return e(t, n, d + 1, y, v);
                }),
                  (y.subRows = v);
              }
              i.accessor && (y.values[i.id] = i.accessor(n, u, y, f, t)),
                (y.values[i.id] = p(a, y.values[i.id], {
                  row: y,
                  column: i,
                  instance: c(),
                }));
            })(e, u, 0, void 0, n);
          });
        }
        (l.resetExpanded = "resetExpanded"),
          (l.toggleRowExpanded = "toggleRowExpanded"),
          (l.toggleAllRowsExpanded = "toggleAllRowsExpanded");
        var ae = function (e) {
          (e.getToggleAllRowsExpandedProps = [ce]),
            (e.getToggleRowExpandedProps = [ue]),
            e.stateReducers.push(de),
            e.useInstance.push(he),
            e.prepareRow.push(pe);
        };
        ae.pluginName = "useExpanded";
        var ce = function (e, t) {
            var n = t.instance;
            return [
              e,
              {
                onClick: function (e) {
                  n.toggleAllRowsExpanded();
                },
                style: { cursor: "pointer" },
                title: "Toggle All Rows Expanded",
              },
            ];
          },
          ue = function (e, t) {
            var n = t.row;
            return [
              e,
              {
                onClick: function () {
                  n.toggleRowExpanded();
                },
                style: { cursor: "pointer" },
                title: "Toggle Row Expanded",
              },
            ];
          };
        function de(e, t, n, r) {
          if (t.type === l.init) return o({ expanded: {} }, e);
          if (t.type === l.resetExpanded)
            return o({}, e, { expanded: r.initialState.expanded || {} });
          if (t.type === l.toggleAllRowsExpanded) {
            var a = t.value,
              c = r.rowsById,
              u = Object.keys(c).length === Object.keys(e.expanded).length;
            if (void 0 !== a ? a : !u) {
              var d = {};
              return (
                Object.keys(c).forEach(function (e) {
                  d[e] = !0;
                }),
                o({}, e, { expanded: d })
              );
            }
            return o({}, e, { expanded: {} });
          }
          if (t.type === l.toggleRowExpanded) {
            var h,
              p = t.id,
              f = t.value,
              m = e.expanded[p],
              g = void 0 !== f ? f : !m;
            if (!m && g)
              return o({}, e, {
                expanded: o({}, e.expanded, ((h = {}), (h[p] = !0), h)),
              });
            if (m && !g) {
              var y = e.expanded;
              return y[p], o({}, e, { expanded: i(y, [p].map(s)) });
            }
            return e;
          }
        }
        function he(e) {
          var n = e.data,
            r = e.rows,
            o = e.rowsById,
            i = e.manualExpandedKey,
            s = void 0 === i ? "expanded" : i,
            a = e.paginateExpandedRows,
            c = void 0 === a || a,
            u = e.expandSubRows,
            d = void 0 === u || u,
            p = e.autoResetExpanded,
            f = void 0 === p || p,
            g = e.getHooks,
            v = e.plugins,
            b = e.state.expanded,
            S = e.dispatch;
          m(
            v,
            ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"],
            "useExpanded"
          );
          var x = y(f),
            k = Boolean(Object.keys(o).length && Object.keys(b).length);
          k &&
            Object.keys(o).some(function (e) {
              return !b[e];
            }) &&
            (k = !1),
            w(
              function () {
                x() && S({ type: l.resetExpanded });
              },
              [S, n]
            );
          var C = t.useCallback(
              function (e, t) {
                S({ type: l.toggleRowExpanded, id: e, value: t });
              },
              [S]
            ),
            R = t.useCallback(
              function (e) {
                return S({ type: l.toggleAllRowsExpanded, value: e });
              },
              [S]
            ),
            M = t.useMemo(
              function () {
                return c
                  ? D(r, {
                      manualExpandedKey: s,
                      expanded: b,
                      expandSubRows: d,
                    })
                  : r;
              },
              [c, r, s, b, d]
            ),
            O = t.useMemo(
              function () {
                return (function (e) {
                  var t = 0;
                  return (
                    Object.keys(e).forEach(function (e) {
                      var n = e.split(".");
                      t = Math.max(t, n.length);
                    }),
                    t
                  );
                })(b);
              },
              [b]
            ),
            T = y(e),
            N = h(g().getToggleAllRowsExpandedProps, { instance: T() });
          Object.assign(e, {
            preExpandedRows: r,
            expandedRows: M,
            rows: M,
            expandedDepth: O,
            isAllRowsExpanded: k,
            toggleRowExpanded: C,
            toggleAllRowsExpanded: R,
            getToggleAllRowsExpandedProps: N,
          });
        }
        function pe(e, t) {
          var n = t.instance.getHooks,
            r = t.instance;
          (e.toggleRowExpanded = function (t) {
            return r.toggleRowExpanded(e.id, t);
          }),
            (e.getToggleRowExpandedProps = h(n().getToggleRowExpandedProps, {
              instance: r,
              row: e,
            }));
        }
        var fe = function (e, t, n) {
          return e.filter(function (e) {
            return t.some(function (t) {
              var r = e.values[t];
              return String(r).toLowerCase().includes(String(n).toLowerCase());
            });
          });
        };
        fe.autoRemove = function (e) {
          return !e;
        };
        var me = function (e, t, n) {
          return e.filter(function (e) {
            return t.some(function (t) {
              var r = e.values[t];
              return (
                void 0 === r ||
                String(r).toLowerCase() === String(n).toLowerCase()
              );
            });
          });
        };
        me.autoRemove = function (e) {
          return !e;
        };
        var ge = function (e, t, n) {
          return e.filter(function (e) {
            return t.some(function (t) {
              var r = e.values[t];
              return void 0 === r || String(r) === String(n);
            });
          });
        };
        ge.autoRemove = function (e) {
          return !e;
        };
        var ye = function (e, t, n) {
          return e.filter(function (e) {
            return t.some(function (t) {
              return e.values[t].includes(n);
            });
          });
        };
        ye.autoRemove = function (e) {
          return !e || !e.length;
        };
        var ve = function (e, t, n) {
          return e.filter(function (e) {
            return t.some(function (t) {
              var r = e.values[t];
              return (
                r &&
                r.length &&
                n.every(function (e) {
                  return r.includes(e);
                })
              );
            });
          });
        };
        ve.autoRemove = function (e) {
          return !e || !e.length;
        };
        var we = function (e, t, n) {
          return e.filter(function (e) {
            return t.some(function (t) {
              var r = e.values[t];
              return (
                r &&
                r.length &&
                n.some(function (e) {
                  return r.includes(e);
                })
              );
            });
          });
        };
        we.autoRemove = function (e) {
          return !e || !e.length;
        };
        var be = function (e, t, n) {
          return e.filter(function (e) {
            return t.some(function (t) {
              var r = e.values[t];
              return n.includes(r);
            });
          });
        };
        be.autoRemove = function (e) {
          return !e || !e.length;
        };
        var Se = function (e, t, n) {
          return e.filter(function (e) {
            return t.some(function (t) {
              return e.values[t] === n;
            });
          });
        };
        Se.autoRemove = function (e) {
          return void 0 === e;
        };
        var xe = function (e, t, n) {
          return e.filter(function (e) {
            return t.some(function (t) {
              return e.values[t] == n;
            });
          });
        };
        xe.autoRemove = function (e) {
          return null == e;
        };
        var ke = function (e, t, n) {
          var r = n || [],
            o = r[0],
            i = r[1];
          if (
            (o = "number" == typeof o ? o : -1 / 0) >
            (i = "number" == typeof i ? i : 1 / 0)
          ) {
            var s = o;
            (o = i), (i = s);
          }
          return e.filter(function (e) {
            return t.some(function (t) {
              var n = e.values[t];
              return n >= o && n <= i;
            });
          });
        };
        ke.autoRemove = function (e) {
          return !e || ("number" != typeof e[0] && "number" != typeof e[1]);
        };
        var Ce = Object.freeze({
          __proto__: null,
          text: fe,
          exactText: me,
          exactTextCase: ge,
          includes: ye,
          includesAll: ve,
          includesSome: we,
          includesValue: be,
          exact: Se,
          equals: xe,
          between: ke,
        });
        (l.resetFilters = "resetFilters"),
          (l.setFilter = "setFilter"),
          (l.setAllFilters = "setAllFilters");
        var Re = function (e) {
          e.stateReducers.push(Me), e.useInstance.push(Oe);
        };
        function Me(e, t, n, r) {
          if (t.type === l.init) return o({ filters: [] }, e);
          if (t.type === l.resetFilters)
            return o({}, e, { filters: r.initialState.filters || [] });
          if (t.type === l.setFilter) {
            var i = t.columnId,
              s = t.filterValue,
              a = r.allColumns,
              c = r.filterTypes,
              u = a.find(function (e) {
                return e.id === i;
              });
            if (!u)
              throw new Error(
                "React-Table: Could not find a column with id: " + i
              );
            var d = A(u.filter, c || {}, Ce),
              h = e.filters.find(function (e) {
                return e.id === i;
              }),
              p = g(s, h && h.value);
            return I(d.autoRemove, p, u)
              ? o({}, e, {
                  filters: e.filters.filter(function (e) {
                    return e.id !== i;
                  }),
                })
              : o(
                  {},
                  e,
                  h
                    ? {
                        filters: e.filters.map(function (e) {
                          return e.id === i ? { id: i, value: p } : e;
                        }),
                      }
                    : { filters: [].concat(e.filters, [{ id: i, value: p }]) }
                );
          }
          if (t.type === l.setAllFilters) {
            var f = t.filters,
              m = r.allColumns,
              y = r.filterTypes;
            return o({}, e, {
              filters: g(f, e.filters).filter(function (e) {
                var t = m.find(function (t) {
                  return t.id === e.id;
                });
                return !I(A(t.filter, y || {}, Ce).autoRemove, e.value, t);
              }),
            });
          }
        }
        function Oe(e) {
          var n = e.data,
            r = e.rows,
            o = e.flatRows,
            i = e.rowsById,
            s = e.allColumns,
            a = e.filterTypes,
            c = e.manualFilters,
            u = e.defaultCanFilter,
            d = void 0 !== u && u,
            h = e.disableFilters,
            p = e.state.filters,
            f = e.dispatch,
            m = e.autoResetFilters,
            g = void 0 === m || m,
            v = t.useCallback(
              function (e, t) {
                f({ type: l.setFilter, columnId: e, filterValue: t });
              },
              [f]
            ),
            b = t.useCallback(
              function (e) {
                f({ type: l.setAllFilters, filters: e });
              },
              [f]
            );
          s.forEach(function (e) {
            var t = e.id,
              n = e.accessor,
              r = e.defaultCanFilter,
              o = e.disableFilters;
            (e.canFilter = n
              ? T(!0 !== o && void 0, !0 !== h && void 0, !0)
              : T(r, d, !1)),
              (e.setFilter = function (t) {
                return v(e.id, t);
              });
            var i = p.find(function (e) {
              return e.id === t;
            });
            e.filterValue = i && i.value;
          });
          var S = t.useMemo(
              function () {
                if (c || !p.length) return [r, o, i];
                var e = [],
                  t = {};
                return [
                  (function n(r, o) {
                    void 0 === o && (o = 0);
                    var i = r;
                    return (
                      (i = p.reduce(function (e, t) {
                        var n = t.id,
                          r = t.value,
                          i = s.find(function (e) {
                            return e.id === n;
                          });
                        if (!i) return e;
                        0 === o && (i.preFilteredRows = e);
                        var l = A(i.filter, a || {}, Ce);
                        return l
                          ? ((i.filteredRows = l(e, [n], r)), i.filteredRows)
                          : (console.warn(
                              "Could not find a valid 'column.filter' for column with the ID: " +
                                i.id +
                                "."
                            ),
                            e);
                      }, r)).forEach(function (r) {
                        e.push(r),
                          (t[r.id] = r),
                          r.subRows &&
                            (r.subRows =
                              r.subRows && r.subRows.length > 0
                                ? n(r.subRows, o + 1)
                                : r.subRows);
                      }),
                      i
                    );
                  })(r),
                  e,
                  t,
                ];
              },
              [c, p, r, o, i, s, a]
            ),
            x = S[0],
            k = S[1],
            C = S[2];
          t.useMemo(
            function () {
              s.filter(function (e) {
                return !p.find(function (t) {
                  return t.id === e.id;
                });
              }).forEach(function (e) {
                (e.preFilteredRows = x), (e.filteredRows = x);
              });
            },
            [x, p, s]
          );
          var R = y(g);
          w(
            function () {
              R() && f({ type: l.resetFilters });
            },
            [f, c ? null : n]
          ),
            Object.assign(e, {
              preFilteredRows: r,
              preFilteredFlatRows: o,
              preFilteredRowsById: i,
              filteredRows: x,
              filteredFlatRows: k,
              filteredRowsById: C,
              rows: x,
              flatRows: k,
              rowsById: C,
              setFilter: v,
              setAllFilters: b,
            });
        }
        (Re.pluginName = "useFilters"),
          (l.resetGlobalFilter = "resetGlobalFilter"),
          (l.setGlobalFilter = "setGlobalFilter");
        var Te = function (e) {
          e.stateReducers.push(Ne), e.useInstance.push(Ee);
        };
        function Ne(e, t, n, r) {
          if (t.type === l.resetGlobalFilter)
            return o({}, e, {
              globalFilter: r.initialState.globalFilter || void 0,
            });
          if (t.type === l.setGlobalFilter) {
            var s = t.filterValue,
              a = r.userFilterTypes,
              c = A(r.globalFilter, a || {}, Ce),
              u = g(s, e.globalFilter);
            return I(c.autoRemove, u)
              ? (e.globalFilter, i(e, ["globalFilter"]))
              : o({}, e, { globalFilter: u });
          }
        }
        function Ee(e) {
          var n = e.data,
            r = e.rows,
            o = e.flatRows,
            i = e.rowsById,
            s = e.allColumns,
            a = e.filterTypes,
            c = e.globalFilter,
            u = e.manualGlobalFilter,
            d = e.state.globalFilter,
            h = e.dispatch,
            p = e.autoResetGlobalFilter,
            f = void 0 === p || p,
            m = e.disableGlobalFilter,
            g = t.useCallback(
              function (e) {
                h({ type: l.setGlobalFilter, filterValue: e });
              },
              [h]
            ),
            v = t.useMemo(
              function () {
                if (u || void 0 === d) return [r, o, i];
                var e = [],
                  t = {},
                  n = A(c, a || {}, Ce);
                if (!n)
                  return (
                    console.warn(
                      "Could not find a valid 'globalFilter' option."
                    ),
                    r
                  );
                s.forEach(function (e) {
                  var t = e.disableGlobalFilter;
                  e.canFilter = T(!0 !== t && void 0, !0 !== m && void 0, !0);
                });
                var l = s.filter(function (e) {
                  return !0 === e.canFilter;
                });
                return [
                  (function r(o) {
                    return (
                      (o = n(
                        o,
                        l.map(function (e) {
                          return e.id;
                        }),
                        d
                      )).forEach(function (n) {
                        e.push(n),
                          (t[n.id] = n),
                          (n.subRows =
                            n.subRows && n.subRows.length
                              ? r(n.subRows)
                              : n.subRows);
                      }),
                      o
                    );
                  })(r),
                  e,
                  t,
                ];
              },
              [u, d, c, a, s, r, o, i, m]
            ),
            b = v[0],
            S = v[1],
            x = v[2],
            k = y(f);
          w(
            function () {
              k() && h({ type: l.resetGlobalFilter });
            },
            [h, u ? null : n]
          ),
            Object.assign(e, {
              preGlobalFilteredRows: r,
              preGlobalFilteredFlatRows: o,
              preGlobalFilteredRowsById: i,
              globalFilteredRows: b,
              globalFilteredFlatRows: S,
              globalFilteredRowsById: x,
              rows: b,
              flatRows: S,
              rowsById: x,
              setGlobalFilter: g,
              disableGlobalFilter: m,
            });
        }
        function De(e, t) {
          return t.reduce(function (e, t) {
            return e + ("number" == typeof t ? t : 0);
          }, 0);
        }
        Te.pluginName = "useGlobalFilter";
        var Ae = Object.freeze({
            __proto__: null,
            sum: De,
            min: function (e) {
              var t = e[0] || 0;
              return (
                e.forEach(function (e) {
                  "number" == typeof e && (t = Math.min(t, e));
                }),
                t
              );
            },
            max: function (e) {
              var t = e[0] || 0;
              return (
                e.forEach(function (e) {
                  "number" == typeof e && (t = Math.max(t, e));
                }),
                t
              );
            },
            minMax: function (e) {
              var t = e[0] || 0,
                n = e[0] || 0;
              return (
                e.forEach(function (e) {
                  "number" == typeof e &&
                    ((t = Math.min(t, e)), (n = Math.max(n, e)));
                }),
                t + ".." + n
              );
            },
            average: function (e) {
              return De(0, e) / e.length;
            },
            median: function (e) {
              if (!e.length) return null;
              var t = Math.floor(e.length / 2),
                n = [].concat(e).sort(function (e, t) {
                  return e - t;
                });
              return e.length % 2 != 0 ? n[t] : (n[t - 1] + n[t]) / 2;
            },
            unique: function (e) {
              return Array.from(new Set(e).values());
            },
            uniqueCount: function (e) {
              return new Set(e).size;
            },
            count: function (e) {
              return e.length;
            },
          }),
          Ie = [],
          Pe = {};
        (l.resetGroupBy = "resetGroupBy"),
          (l.setGroupBy = "setGroupBy"),
          (l.toggleGroupBy = "toggleGroupBy");
        var Be = function (e) {
          (e.getGroupByToggleProps = [Fe]),
            e.stateReducers.push(ze),
            e.visibleColumnsDeps.push(function (e, t) {
              var n = t.instance;
              return [].concat(e, [n.state.groupBy]);
            }),
            e.visibleColumns.push(Ve),
            e.useInstance.push($e),
            e.prepareRow.push(We);
        };
        Be.pluginName = "useGroupBy";
        var Fe = function (e, t) {
          var n = t.header;
          return [
            e,
            {
              onClick: n.canGroupBy
                ? function (e) {
                    e.persist(), n.toggleGroupBy();
                  }
                : void 0,
              style: { cursor: n.canGroupBy ? "pointer" : void 0 },
              title: "Toggle GroupBy",
            },
          ];
        };
        function ze(e, t, n, r) {
          if (t.type === l.init) return o({ groupBy: [] }, e);
          if (t.type === l.resetGroupBy)
            return o({}, e, { groupBy: r.initialState.groupBy || [] });
          if (t.type === l.setGroupBy) return o({}, e, { groupBy: t.value });
          if (t.type === l.toggleGroupBy) {
            var i = t.columnId,
              s = t.value,
              a = void 0 !== s ? s : !e.groupBy.includes(i);
            return o(
              {},
              e,
              a
                ? { groupBy: [].concat(e.groupBy, [i]) }
                : {
                    groupBy: e.groupBy.filter(function (e) {
                      return e !== i;
                    }),
                  }
            );
          }
        }
        function Ve(e, t) {
          var n = t.instance.state.groupBy,
            r = n
              .map(function (t) {
                return e.find(function (e) {
                  return e.id === t;
                });
              })
              .filter(Boolean),
            o = e.filter(function (e) {
              return !n.includes(e.id);
            });
          return (
            (e = [].concat(r, o)).forEach(function (e) {
              (e.isGrouped = n.includes(e.id)),
                (e.groupedIndex = n.indexOf(e.id));
            }),
            e
          );
        }
        var He = {};
        function $e(e) {
          var n = e.data,
            r = e.rows,
            i = e.flatRows,
            s = e.rowsById,
            a = e.allColumns,
            c = e.flatHeaders,
            u = e.groupByFn,
            d = void 0 === u ? Le : u,
            p = e.manualGroupBy,
            f = e.aggregations,
            g = void 0 === f ? He : f,
            v = e.plugins,
            b = e.state.groupBy,
            S = e.dispatch,
            x = e.autoResetGroupBy,
            k = void 0 === x || x,
            C = e.disableGroupBy,
            R = e.defaultCanGroupBy,
            M = e.getHooks;
          m(v, ["useColumnOrder", "useFilters"], "useGroupBy");
          var O = y(e);
          a.forEach(function (t) {
            var n = t.accessor,
              r = t.defaultGroupBy,
              o = t.disableGroupBy;
            (t.canGroupBy = n
              ? T(t.canGroupBy, !0 !== o && void 0, !0 !== C && void 0, !0)
              : T(t.canGroupBy, r, R, !1)),
              t.canGroupBy &&
                (t.toggleGroupBy = function () {
                  return e.toggleGroupBy(t.id);
                }),
              (t.Aggregated = t.Aggregated || t.Cell);
          });
          var N = t.useCallback(
              function (e, t) {
                S({ type: l.toggleGroupBy, columnId: e, value: t });
              },
              [S]
            ),
            D = t.useCallback(
              function (e) {
                S({ type: l.setGroupBy, value: e });
              },
              [S]
            );
          c.forEach(function (e) {
            e.getGroupByToggleProps = h(M().getGroupByToggleProps, {
              instance: O(),
              header: e,
            });
          });
          var A = t.useMemo(
              function () {
                if (p || !b.length) return [r, i, s, Ie, Pe, i, s];
                var e = b.filter(function (e) {
                    return a.find(function (t) {
                      return t.id === e;
                    });
                  }),
                  t = [],
                  n = {},
                  l = [],
                  c = {},
                  u = [],
                  h = {},
                  f = (function r(i, s, p) {
                    if ((void 0 === s && (s = 0), s === e.length))
                      return i.map(function (e) {
                        return o({}, e, { depth: s });
                      });
                    var f = e[s],
                      m = d(i, f);
                    return Object.entries(m).map(function (o, i) {
                      var d = o[0],
                        m = o[1],
                        y = f + ":" + d,
                        v = r(m, s + 1, (y = p ? p + ">" + y : y)),
                        w = s ? E(m, "leafRows") : m,
                        b = (function (t, n, r) {
                          var o = {};
                          return (
                            a.forEach(function (i) {
                              if (e.includes(i.id))
                                o[i.id] = n[0] ? n[0].values[i.id] : null;
                              else {
                                var s =
                                  "function" == typeof i.aggregate
                                    ? i.aggregate
                                    : g[i.aggregate] || Ae[i.aggregate];
                                if (s) {
                                  var l = n.map(function (e) {
                                      return e.values[i.id];
                                    }),
                                    a = t.map(function (e) {
                                      var t = e.values[i.id];
                                      if (!r && i.aggregateValue) {
                                        var n =
                                          "function" == typeof i.aggregateValue
                                            ? i.aggregateValue
                                            : g[i.aggregateValue] ||
                                              Ae[i.aggregateValue];
                                        if (!n)
                                          throw (
                                            (console.info({ column: i }),
                                            new Error(
                                              "React Table: Invalid column.aggregateValue option for column listed above"
                                            ))
                                          );
                                        t = n(t, e, i);
                                      }
                                      return t;
                                    });
                                  o[i.id] = s(a, l);
                                } else {
                                  if (i.aggregate)
                                    throw (
                                      (console.info({ column: i }),
                                      new Error(
                                        "React Table: Invalid column.aggregate option for column listed above"
                                      ))
                                    );
                                  o[i.id] = null;
                                }
                              }
                            }),
                            o
                          );
                        })(w, m, s),
                        S = {
                          id: y,
                          isGrouped: !0,
                          groupByID: f,
                          groupByVal: d,
                          values: b,
                          subRows: v,
                          leafRows: w,
                          depth: s,
                          index: i,
                        };
                      return (
                        v.forEach(function (e) {
                          t.push(e),
                            (n[e.id] = e),
                            e.isGrouped
                              ? (l.push(e), (c[e.id] = e))
                              : (u.push(e), (h[e.id] = e));
                        }),
                        S
                      );
                    });
                  })(r);
                return (
                  f.forEach(function (e) {
                    t.push(e),
                      (n[e.id] = e),
                      e.isGrouped
                        ? (l.push(e), (c[e.id] = e))
                        : (u.push(e), (h[e.id] = e));
                  }),
                  [f, t, n, l, c, u, h]
                );
              },
              [p, b, r, i, s, a, g, d]
            ),
            I = A[0],
            P = A[1],
            B = A[2],
            F = A[3],
            z = A[4],
            V = A[5],
            H = A[6],
            $ = y(k);
          w(
            function () {
              $() && S({ type: l.resetGroupBy });
            },
            [S, p ? null : n]
          ),
            Object.assign(e, {
              preGroupedRows: r,
              preGroupedFlatRow: i,
              preGroupedRowsById: s,
              groupedRows: I,
              groupedFlatRows: P,
              groupedRowsById: B,
              onlyGroupedFlatRows: F,
              onlyGroupedRowsById: z,
              nonGroupedFlatRows: V,
              nonGroupedRowsById: H,
              rows: I,
              flatRows: P,
              rowsById: B,
              toggleGroupBy: N,
              setGroupBy: D,
            });
        }
        function We(e) {
          e.allCells.forEach(function (t) {
            var n;
            (t.isGrouped = t.column.isGrouped && t.column.id === e.groupByID),
              (t.isPlaceholder = !t.isGrouped && t.column.isGrouped),
              (t.isAggregated =
                !t.isGrouped &&
                !t.isPlaceholder &&
                (null == (n = e.subRows) ? void 0 : n.length));
          });
        }
        function Le(e, t) {
          return e.reduce(function (e, n, r) {
            var o = "" + n.values[t];
            return (e[o] = Array.isArray(e[o]) ? e[o] : []), e[o].push(n), e;
          }, {});
        }
        var Ge = /([0-9]+)/gm;
        function qe(e, t) {
          return e === t ? 0 : e > t ? 1 : -1;
        }
        function je(e, t, n) {
          return [e.values[n], t.values[n]];
        }
        function Je(e) {
          return "number" == typeof e
            ? isNaN(e) || e === 1 / 0 || e === -1 / 0
              ? ""
              : String(e)
            : "string" == typeof e
            ? e
            : "";
        }
        var _e = Object.freeze({
          __proto__: null,
          alphanumeric: function (e, t, n) {
            var r = je(e, t, n),
              o = r[0],
              i = r[1];
            for (
              o = Je(o),
                i = Je(i),
                o = o.split(Ge).filter(Boolean),
                i = i.split(Ge).filter(Boolean);
              o.length && i.length;

            ) {
              var s = o.shift(),
                l = i.shift(),
                a = parseInt(s, 10),
                c = parseInt(l, 10),
                u = [a, c].sort();
              if (isNaN(u[0])) {
                if (s > l) return 1;
                if (l > s) return -1;
              } else {
                if (isNaN(u[1])) return isNaN(a) ? -1 : 1;
                if (a > c) return 1;
                if (c > a) return -1;
              }
            }
            return o.length - i.length;
          },
          datetime: function (e, t, n) {
            var r = je(e, t, n),
              o = r[0],
              i = r[1];
            return qe((o = o.getTime()), (i = i.getTime()));
          },
          basic: function (e, t, n) {
            var r = je(e, t, n);
            return qe(r[0], r[1]);
          },
          string: function (e, t, n) {
            var r = je(e, t, n),
              o = r[0],
              i = r[1];
            for (
              o = o.split("").filter(Boolean), i = i.split("").filter(Boolean);
              o.length && i.length;

            ) {
              var s = o.shift(),
                l = i.shift(),
                a = s.toLowerCase(),
                c = l.toLowerCase();
              if (a > c) return 1;
              if (c > a) return -1;
              if (s > l) return 1;
              if (l > s) return -1;
            }
            return o.length - i.length;
          },
          number: function (e, t, n) {
            var r = je(e, t, n),
              o = r[0],
              i = r[1],
              s = /[^0-9.]/gi;
            return qe(
              (o = Number(String(o).replace(s, ""))),
              (i = Number(String(i).replace(s, "")))
            );
          },
        });
        (l.resetSortBy = "resetSortBy"),
          (l.setSortBy = "setSortBy"),
          (l.toggleSortBy = "toggleSortBy"),
          (l.clearSortBy = "clearSortBy"),
          (u.sortType = "alphanumeric"),
          (u.sortDescFirst = !1);
        var Ke = function (e) {
          (e.getSortByToggleProps = [Ye]),
            e.stateReducers.push(Ue),
            e.useInstance.push(Xe);
        };
        Ke.pluginName = "useSortBy";
        var Ye = function (e, t) {
          var n = t.instance,
            r = t.column,
            o = n.isMultiSortEvent,
            i =
              void 0 === o
                ? function (e) {
                    return e.shiftKey;
                  }
                : o;
          return [
            e,
            {
              onClick: r.canSort
                ? function (e) {
                    e.persist(),
                      r.toggleSortBy(void 0, !n.disableMultiSort && i(e));
                  }
                : void 0,
              style: { cursor: r.canSort ? "pointer" : void 0 },
              title: r.canSort ? "Toggle SortBy" : void 0,
            },
          ];
        };
        function Ue(e, t, n, r) {
          if (t.type === l.init) return o({ sortBy: [] }, e);
          if (t.type === l.resetSortBy)
            return o({}, e, { sortBy: r.initialState.sortBy || [] });
          if (t.type === l.clearSortBy)
            return o({}, e, {
              sortBy: e.sortBy.filter(function (e) {
                return e.id !== t.columnId;
              }),
            });
          if (t.type === l.setSortBy) return o({}, e, { sortBy: t.sortBy });
          if (t.type === l.toggleSortBy) {
            var i,
              s = t.columnId,
              a = t.desc,
              c = t.multi,
              u = r.allColumns,
              d = r.disableMultiSort,
              h = r.disableSortRemove,
              p = r.disableMultiRemove,
              f = r.maxMultiSortColCount,
              m = void 0 === f ? Number.MAX_SAFE_INTEGER : f,
              g = e.sortBy,
              y = u.find(function (e) {
                return e.id === s;
              }).sortDescFirst,
              v = g.find(function (e) {
                return e.id === s;
              }),
              w = g.findIndex(function (e) {
                return e.id === s;
              }),
              b = null != a,
              S = [];
            return (
              "toggle" !=
                (i =
                  !d && c
                    ? v
                      ? "toggle"
                      : "add"
                    : w !== g.length - 1 || 1 !== g.length
                    ? "replace"
                    : v
                    ? "toggle"
                    : "replace") ||
                h ||
                b ||
                (c && p) ||
                !((v && v.desc && !y) || (!v.desc && y)) ||
                (i = "remove"),
              "replace" === i
                ? (S = [{ id: s, desc: b ? a : y }])
                : "add" === i
                ? (S = [].concat(g, [{ id: s, desc: b ? a : y }])).splice(
                    0,
                    S.length - m
                  )
                : "toggle" === i
                ? (S = g.map(function (e) {
                    return e.id === s ? o({}, e, { desc: b ? a : !v.desc }) : e;
                  }))
                : "remove" === i &&
                  (S = g.filter(function (e) {
                    return e.id !== s;
                  })),
              o({}, e, { sortBy: S })
            );
          }
        }
        function Xe(e) {
          var n = e.data,
            r = e.rows,
            o = e.flatRows,
            i = e.allColumns,
            s = e.orderByFn,
            a = void 0 === s ? Ze : s,
            c = e.sortTypes,
            u = e.manualSortBy,
            d = e.defaultCanSort,
            p = e.disableSortBy,
            f = e.flatHeaders,
            g = e.state.sortBy,
            v = e.dispatch,
            b = e.plugins,
            S = e.getHooks,
            x = e.autoResetSortBy,
            k = void 0 === x || x;
          m(
            b,
            ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"],
            "useSortBy"
          );
          var C = t.useCallback(
              function (e) {
                v({ type: l.setSortBy, sortBy: e });
              },
              [v]
            ),
            R = t.useCallback(
              function (e, t, n) {
                v({ type: l.toggleSortBy, columnId: e, desc: t, multi: n });
              },
              [v]
            ),
            M = y(e);
          f.forEach(function (e) {
            var t = e.accessor,
              n = e.canSort,
              r = e.disableSortBy,
              o = e.id,
              i = t
                ? T(!0 !== r && void 0, !0 !== p && void 0, !0)
                : T(d, n, !1);
            (e.canSort = i),
              e.canSort &&
                ((e.toggleSortBy = function (t, n) {
                  return R(e.id, t, n);
                }),
                (e.clearSortBy = function () {
                  v({ type: l.clearSortBy, columnId: e.id });
                })),
              (e.getSortByToggleProps = h(S().getSortByToggleProps, {
                instance: M(),
                column: e,
              }));
            var s = g.find(function (e) {
              return e.id === o;
            });
            (e.isSorted = !!s),
              (e.sortedIndex = g.findIndex(function (e) {
                return e.id === o;
              })),
              (e.isSortedDesc = e.isSorted ? s.desc : void 0);
          });
          var O = t.useMemo(
              function () {
                if (u || !g.length) return [r, o];
                var e = [],
                  t = g.filter(function (e) {
                    return i.find(function (t) {
                      return t.id === e.id;
                    });
                  });
                return [
                  (function n(r) {
                    var o = a(
                      r,
                      t.map(function (e) {
                        var t = i.find(function (t) {
                          return t.id === e.id;
                        });
                        if (!t)
                          throw new Error(
                            "React-Table: Could not find a column with id: " +
                              e.id +
                              " while sorting"
                          );
                        var n = t.sortType,
                          r = N(n) || (c || {})[n] || _e[n];
                        if (!r)
                          throw new Error(
                            "React-Table: Could not find a valid sortType of '" +
                              n +
                              "' for column '" +
                              e.id +
                              "'."
                          );
                        return function (t, n) {
                          return r(t, n, e.id, e.desc);
                        };
                      }),
                      t.map(function (e) {
                        var t = i.find(function (t) {
                          return t.id === e.id;
                        });
                        return t && t.sortInverted ? e.desc : !e.desc;
                      })
                    );
                    return (
                      o.forEach(function (t) {
                        e.push(t),
                          t.subRows &&
                            0 !== t.subRows.length &&
                            (t.subRows = n(t.subRows));
                      }),
                      o
                    );
                  })(r),
                  e,
                ];
              },
              [u, g, r, o, i, a, c]
            ),
            E = O[0],
            D = O[1],
            A = y(k);
          w(
            function () {
              A() && v({ type: l.resetSortBy });
            },
            [u ? null : n]
          ),
            Object.assign(e, {
              preSortedRows: r,
              preSortedFlatRows: o,
              sortedRows: E,
              sortedFlatRows: D,
              rows: E,
              flatRows: D,
              setSortBy: C,
              toggleSortBy: R,
            });
        }
        function Ze(e, t, n) {
          return [].concat(e).sort(function (e, r) {
            for (var o = 0; o < t.length; o += 1) {
              var i = t[o],
                s = !1 === n[o] || "desc" === n[o],
                l = i(e, r);
              if (0 !== l) return s ? -l : l;
            }
            return n[0] ? e.index - r.index : r.index - e.index;
          });
        }
        (l.resetPage = "resetPage"),
          (l.gotoPage = "gotoPage"),
          (l.setPageSize = "setPageSize");
        var Qe = function (e) {
          e.stateReducers.push(et), e.useInstance.push(tt);
        };
        function et(e, t, n, r) {
          if (t.type === l.init) return o({ pageSize: 10, pageIndex: 0 }, e);
          if (t.type === l.resetPage)
            return o({}, e, { pageIndex: r.initialState.pageIndex || 0 });
          if (t.type === l.gotoPage) {
            var i = r.pageCount,
              s = r.page,
              a = g(t.pageIndex, e.pageIndex),
              c = !1;
            return (
              a > e.pageIndex
                ? (c = -1 === i ? s.length >= e.pageSize : a < i)
                : a < e.pageIndex && (c = a > -1),
              c ? o({}, e, { pageIndex: a }) : e
            );
          }
          if (t.type === l.setPageSize) {
            var u = t.pageSize,
              d = e.pageSize * e.pageIndex;
            return o({}, e, { pageIndex: Math.floor(d / u), pageSize: u });
          }
        }
        function tt(e) {
          var n = e.rows,
            r = e.autoResetPage,
            o = void 0 === r || r,
            i = e.manualExpandedKey,
            s = void 0 === i ? "expanded" : i,
            a = e.plugins,
            c = e.pageCount,
            u = e.paginateExpandedRows,
            d = void 0 === u || u,
            h = e.expandSubRows,
            p = void 0 === h || h,
            f = e.state,
            g = f.pageSize,
            v = f.pageIndex,
            b = f.expanded,
            S = f.globalFilter,
            x = f.filters,
            k = f.groupBy,
            C = f.sortBy,
            R = e.dispatch,
            M = e.data,
            O = e.manualPagination;
          m(
            a,
            [
              "useGlobalFilter",
              "useFilters",
              "useGroupBy",
              "useSortBy",
              "useExpanded",
            ],
            "usePagination"
          );
          var T = y(o);
          w(
            function () {
              T() && R({ type: l.resetPage });
            },
            [R, O ? null : M, S, x, k, C]
          );
          var N = O ? c : Math.ceil(n.length / g),
            E = t.useMemo(
              function () {
                return N > 0
                  ? []
                      .concat(new Array(N))
                      .fill(null)
                      .map(function (e, t) {
                        return t;
                      })
                  : [];
              },
              [N]
            ),
            A = t.useMemo(
              function () {
                var e;
                if (O) e = n;
                else {
                  var t = g * v,
                    r = t + g;
                  e = n.slice(t, r);
                }
                return d
                  ? e
                  : D(e, {
                      manualExpandedKey: s,
                      expanded: b,
                      expandSubRows: p,
                    });
              },
              [p, b, s, O, v, g, d, n]
            ),
            I = v > 0,
            P = -1 === N ? A.length >= g : v < N - 1,
            B = t.useCallback(
              function (e) {
                R({ type: l.gotoPage, pageIndex: e });
              },
              [R]
            ),
            F = t.useCallback(
              function () {
                return B(function (e) {
                  return e - 1;
                });
              },
              [B]
            ),
            z = t.useCallback(
              function () {
                return B(function (e) {
                  return e + 1;
                });
              },
              [B]
            ),
            V = t.useCallback(
              function (e) {
                R({ type: l.setPageSize, pageSize: e });
              },
              [R]
            );
          Object.assign(e, {
            pageOptions: E,
            pageCount: N,
            page: A,
            canPreviousPage: I,
            canNextPage: P,
            gotoPage: B,
            previousPage: F,
            nextPage: z,
            setPageSize: V,
          });
        }
        (Qe.pluginName = "usePagination"),
          (l.resetPivot = "resetPivot"),
          (l.togglePivot = "togglePivot");
        var nt = function (e) {
          (e.getPivotToggleProps = [ot]),
            e.stateReducers.push(it),
            e.useInstanceAfterData.push(st),
            e.allColumns.push(lt),
            e.accessValue.push(at),
            e.materializedColumns.push(ct),
            e.materializedColumnsDeps.push(ut),
            e.visibleColumns.push(dt),
            e.visibleColumnsDeps.push(ht),
            e.useInstance.push(pt),
            e.prepareRow.push(ft);
        };
        nt.pluginName = "usePivotColumns";
        var rt = [],
          ot = function (e, t) {
            var n = t.header;
            return [
              e,
              {
                onClick: n.canPivot
                  ? function (e) {
                      e.persist(), n.togglePivot();
                    }
                  : void 0,
                style: { cursor: n.canPivot ? "pointer" : void 0 },
                title: "Toggle Pivot",
              },
            ];
          };
        function it(e, t, n, r) {
          if (t.type === l.init) return o({ pivotColumns: rt }, e);
          if (t.type === l.resetPivot)
            return o({}, e, {
              pivotColumns: r.initialState.pivotColumns || rt,
            });
          if (t.type === l.togglePivot) {
            var i = t.columnId,
              s = t.value,
              a = void 0 !== s ? s : !e.pivotColumns.includes(i);
            return o(
              {},
              e,
              a
                ? { pivotColumns: [].concat(e.pivotColumns, [i]) }
                : {
                    pivotColumns: e.pivotColumns.filter(function (e) {
                      return e !== i;
                    }),
                  }
            );
          }
        }
        function st(e) {
          e.allColumns.forEach(function (t) {
            t.isPivotSource = e.state.pivotColumns.includes(t.id);
          });
        }
        function lt(e, t) {
          var n = t.instance;
          return (
            e.forEach(function (e) {
              (e.isPivotSource = n.state.pivotColumns.includes(e.id)),
                (e.uniqueValues = new Set());
            }),
            e
          );
        }
        function at(e, t) {
          var n = t.column;
          return n.uniqueValues && void 0 !== e && n.uniqueValues.add(e), e;
        }
        function ct(e, t) {
          var n = t.instance,
            r = n.allColumns,
            i = n.state;
          if (!i.pivotColumns.length || !i.groupBy || !i.groupBy.length)
            return e;
          var s = i.pivotColumns
              .map(function (e) {
                return r.find(function (t) {
                  return t.id === e;
                });
              })
              .filter(Boolean),
            l = r.filter(function (e) {
              return (
                !e.isPivotSource &&
                !i.groupBy.includes(e.id) &&
                !i.pivotColumns.includes(e.id)
              );
            }),
            a = k(
              (function e(t, n, r) {
                void 0 === t && (t = 0), void 0 === r && (r = []);
                var i = s[t];
                return i
                  ? Array.from(i.uniqueValues)
                      .sort()
                      .map(function (s) {
                        var l = o({}, i, {
                          Header:
                            i.PivotHeader || "string" == typeof i.header
                              ? i.Header + ": " + s
                              : s,
                          isPivotGroup: !0,
                          parent: n,
                          depth: t,
                          id: n ? n.id + "." + i.id + "." + s : i.id + "." + s,
                          pivotValue: s,
                        });
                        return (
                          (l.columns = e(
                            t + 1,
                            l,
                            [].concat(r, [
                              function (e) {
                                return e.values[i.id] === s;
                              },
                            ])
                          )),
                          l
                        );
                      })
                  : l.map(function (e) {
                      return o({}, e, {
                        canPivot: !1,
                        isPivoted: !0,
                        parent: n,
                        depth: t,
                        id: "" + (n ? n.id + "." + e.id : e.id),
                        accessor: function (t, n, o) {
                          if (
                            r.every(function (e) {
                              return e(o);
                            })
                          )
                            return o.values[e.id];
                        },
                      });
                    });
              })()
            );
          return [].concat(e, a);
        }
        function ut(e, t) {
          var n = t.instance.state,
            r = n.pivotColumns,
            o = n.groupBy;
          return [].concat(e, [r, o]);
        }
        function dt(e, t) {
          var n = t.instance.state;
          return (
            (e = e.filter(function (e) {
              return !e.isPivotSource;
            })),
            n.pivotColumns.length &&
              n.groupBy &&
              n.groupBy.length &&
              (e = e.filter(function (e) {
                return e.isGrouped || e.isPivoted;
              })),
            e
          );
        }
        function ht(e, t) {
          var n = t.instance;
          return [].concat(e, [n.state.pivotColumns, n.state.groupBy]);
        }
        function pt(e) {
          var t = e.columns,
            n = e.allColumns,
            r = e.flatHeaders,
            o = e.getHooks,
            i = e.plugins,
            s = e.dispatch,
            a = e.autoResetPivot,
            c = void 0 === a || a,
            u = e.manaulPivot,
            d = e.disablePivot,
            p = e.defaultCanPivot;
          m(i, ["useGroupBy"], "usePivotColumns");
          var f = y(e);
          n.forEach(function (t) {
            var n = t.accessor,
              r = t.defaultPivot,
              o = t.disablePivot;
            (t.canPivot = n
              ? T(t.canPivot, !0 !== o && void 0, !0 !== d && void 0, !0)
              : T(t.canPivot, r, p, !1)),
              t.canPivot &&
                (t.togglePivot = function () {
                  return e.togglePivot(t.id);
                }),
              (t.Aggregated = t.Aggregated || t.Cell);
          }),
            r.forEach(function (e) {
              e.getPivotToggleProps = h(o().getPivotToggleProps, {
                instance: f(),
                header: e,
              });
            });
          var g = y(c);
          w(
            function () {
              g() && s({ type: l.resetPivot });
            },
            [s, u ? null : t]
          ),
            Object.assign(e, {
              togglePivot: function (e, t) {
                s({ type: l.togglePivot, columnId: e, value: t });
              },
            });
        }
        function ft(e) {
          e.allCells.forEach(function (e) {
            e.isPivoted = e.column.isPivoted;
          });
        }
        (l.resetSelectedRows = "resetSelectedRows"),
          (l.toggleAllRowsSelected = "toggleAllRowsSelected"),
          (l.toggleRowSelected = "toggleRowSelected"),
          (l.toggleAllPageRowsSelected = "toggleAllPageRowsSelected");
        var mt = function (e) {
          (e.getToggleRowSelectedProps = [gt]),
            (e.getToggleAllRowsSelectedProps = [yt]),
            (e.getToggleAllPageRowsSelectedProps = [vt]),
            e.stateReducers.push(wt),
            e.useInstance.push(bt),
            e.prepareRow.push(St);
        };
        mt.pluginName = "useRowSelect";
        var gt = function (e, t) {
            var n = t.instance,
              r = t.row,
              o = n.manualRowSelectedKey,
              i = void 0 === o ? "isSelected" : o;
            return [
              e,
              {
                onChange: function (e) {
                  r.toggleRowSelected(e.target.checked);
                },
                style: { cursor: "pointer" },
                checked: !(!r.original || !r.original[i]) || r.isSelected,
                title: "Toggle Row Selected",
                indeterminate: r.isSomeSelected,
              },
            ];
          },
          yt = function (e, t) {
            var n = t.instance;
            return [
              e,
              {
                onChange: function (e) {
                  n.toggleAllRowsSelected(e.target.checked);
                },
                style: { cursor: "pointer" },
                checked: n.isAllRowsSelected,
                title: "Toggle All Rows Selected",
                indeterminate: Boolean(
                  !n.isAllRowsSelected &&
                    Object.keys(n.state.selectedRowIds).length
                ),
              },
            ];
          },
          vt = function (e, t) {
            var n = t.instance;
            return [
              e,
              {
                onChange: function (e) {
                  n.toggleAllPageRowsSelected(e.target.checked);
                },
                style: { cursor: "pointer" },
                checked: n.isAllPageRowsSelected,
                title: "Toggle All Current Page Rows Selected",
                indeterminate: Boolean(
                  !n.isAllPageRowsSelected &&
                    n.page.some(function (e) {
                      var t = e.id;
                      return n.state.selectedRowIds[t];
                    })
                ),
              },
            ];
          };
        function wt(e, t, n, r) {
          if (t.type === l.init) return o({ selectedRowIds: {} }, e);
          if (t.type === l.resetSelectedRows)
            return o({}, e, {
              selectedRowIds: r.initialState.selectedRowIds || {},
            });
          if (t.type === l.toggleAllRowsSelected) {
            var i = t.value,
              s = r.isAllRowsSelected,
              a = r.rowsById,
              c = r.nonGroupedRowsById,
              u = void 0 === c ? a : c,
              d = void 0 !== i ? i : !s,
              h = Object.assign({}, e.selectedRowIds);
            return (
              d
                ? Object.keys(u).forEach(function (e) {
                    h[e] = !0;
                  })
                : Object.keys(u).forEach(function (e) {
                    delete h[e];
                  }),
              o({}, e, { selectedRowIds: h })
            );
          }
          if (t.type === l.toggleRowSelected) {
            var p = t.id,
              f = t.value,
              m = r.rowsById,
              g = r.selectSubRows,
              y = void 0 === g || g,
              v = r.getSubRows,
              w = e.selectedRowIds[p],
              b = void 0 !== f ? f : !w;
            if (w === b) return e;
            var S = o({}, e.selectedRowIds);
            return (
              (function e(t) {
                var n = m[t];
                if (
                  n &&
                  (n.isGrouped || (b ? (S[t] = !0) : delete S[t]), y && v(n))
                )
                  return v(n).forEach(function (t) {
                    return e(t.id);
                  });
              })(p),
              o({}, e, { selectedRowIds: S })
            );
          }
          if (t.type === l.toggleAllPageRowsSelected) {
            var x = t.value,
              k = r.page,
              C = r.rowsById,
              R = r.selectSubRows,
              M = void 0 === R || R,
              O = r.isAllPageRowsSelected,
              T = r.getSubRows,
              N = void 0 !== x ? x : !O,
              E = o({}, e.selectedRowIds);
            return (
              k.forEach(function (e) {
                return (function e(t) {
                  var n = C[t];
                  if (
                    (n.isGrouped || (N ? (E[t] = !0) : delete E[t]), M && T(n))
                  )
                    return T(n).forEach(function (t) {
                      return e(t.id);
                    });
                })(e.id);
              }),
              o({}, e, { selectedRowIds: E })
            );
          }
          return e;
        }
        function bt(e) {
          var n = e.data,
            r = e.rows,
            o = e.getHooks,
            i = e.plugins,
            s = e.rowsById,
            a = e.nonGroupedRowsById,
            c = void 0 === a ? s : a,
            u = e.autoResetSelectedRows,
            d = void 0 === u || u,
            p = e.state.selectedRowIds,
            f = e.selectSubRows,
            g = void 0 === f || f,
            v = e.dispatch,
            b = e.page,
            S = e.getSubRows;
          m(
            i,
            [
              "useFilters",
              "useGroupBy",
              "useSortBy",
              "useExpanded",
              "usePagination",
            ],
            "useRowSelect"
          );
          var x = t.useMemo(
              function () {
                var e = [];
                return (
                  r.forEach(function (t) {
                    var n = g
                      ? (function e(t, n, r) {
                          if (n[t.id]) return !0;
                          var o = r(t);
                          if (o && o.length) {
                            var i = !0,
                              s = !1;
                            return (
                              o.forEach(function (t) {
                                (s && !i) || (e(t, n, r) ? (s = !0) : (i = !1));
                              }),
                              !!i || (!!s && null)
                            );
                          }
                          return !1;
                        })(t, p, S)
                      : !!p[t.id];
                    (t.isSelected = !!n),
                      (t.isSomeSelected = null === n),
                      n && e.push(t);
                  }),
                  e
                );
              },
              [r, g, p, S]
            ),
            k = Boolean(Object.keys(c).length && Object.keys(p).length),
            C = k;
          k &&
            Object.keys(c).some(function (e) {
              return !p[e];
            }) &&
            (k = !1),
            k ||
              (b &&
                b.length &&
                b.some(function (e) {
                  var t = e.id;
                  return !p[t];
                }) &&
                (C = !1));
          var R = y(d);
          w(
            function () {
              R() && v({ type: l.resetSelectedRows });
            },
            [v, n]
          );
          var M = t.useCallback(
              function (e) {
                return v({ type: l.toggleAllRowsSelected, value: e });
              },
              [v]
            ),
            O = t.useCallback(
              function (e) {
                return v({ type: l.toggleAllPageRowsSelected, value: e });
              },
              [v]
            ),
            T = t.useCallback(
              function (e, t) {
                return v({ type: l.toggleRowSelected, id: e, value: t });
              },
              [v]
            ),
            N = y(e),
            E = h(o().getToggleAllRowsSelectedProps, { instance: N() }),
            D = h(o().getToggleAllPageRowsSelectedProps, { instance: N() });
          Object.assign(e, {
            selectedFlatRows: x,
            isAllRowsSelected: k,
            isAllPageRowsSelected: C,
            toggleRowSelected: T,
            toggleAllRowsSelected: M,
            getToggleAllRowsSelectedProps: E,
            getToggleAllPageRowsSelectedProps: D,
            toggleAllPageRowsSelected: O,
          });
        }
        function St(e, t) {
          var n = t.instance;
          (e.toggleRowSelected = function (t) {
            return n.toggleRowSelected(e.id, t);
          }),
            (e.getToggleRowSelectedProps = h(
              n.getHooks().getToggleRowSelectedProps,
              { instance: n, row: e }
            ));
        }
        var xt = function (e) {
            return {};
          },
          kt = function (e) {
            return {};
          };
        (l.setRowState = "setRowState"),
          (l.setCellState = "setCellState"),
          (l.resetRowState = "resetRowState");
        var Ct = function (e) {
          e.stateReducers.push(Rt),
            e.useInstance.push(Mt),
            e.prepareRow.push(Ot);
        };
        function Rt(e, t, n, r) {
          var i = r.initialRowStateAccessor,
            s = void 0 === i ? xt : i,
            a = r.initialCellStateAccessor,
            c = void 0 === a ? kt : a,
            u = r.rowsById;
          if (t.type === l.init) return o({ rowState: {} }, e);
          if (t.type === l.resetRowState)
            return o({}, e, { rowState: r.initialState.rowState || {} });
          if (t.type === l.setRowState) {
            var d,
              h = t.rowId,
              p = t.value,
              f = void 0 !== e.rowState[h] ? e.rowState[h] : s(u[h]);
            return o({}, e, {
              rowState: o({}, e.rowState, ((d = {}), (d[h] = g(p, f)), d)),
            });
          }
          if (t.type === l.setCellState) {
            var m,
              y,
              v,
              w,
              b,
              S = t.rowId,
              x = t.columnId,
              k = t.value,
              C = void 0 !== e.rowState[S] ? e.rowState[S] : s(u[S]),
              R =
                void 0 !==
                (null == C || null == (m = C.cellState) ? void 0 : m[x])
                  ? C.cellState[x]
                  : c(
                      null == (y = u[S]) || null == (v = y.cells)
                        ? void 0
                        : v.find(function (e) {
                            return e.column.id === x;
                          })
                    );
            return o({}, e, {
              rowState: o(
                {},
                e.rowState,
                ((b = {}),
                (b[S] = o({}, C, {
                  cellState: o(
                    {},
                    C.cellState || {},
                    ((w = {}), (w[x] = g(k, R)), w)
                  ),
                })),
                b)
              ),
            });
          }
        }
        function Mt(e) {
          var n = e.autoResetRowState,
            r = void 0 === n || n,
            o = e.data,
            i = e.dispatch,
            s = t.useCallback(
              function (e, t) {
                return i({ type: l.setRowState, rowId: e, value: t });
              },
              [i]
            ),
            a = t.useCallback(
              function (e, t, n) {
                return i({
                  type: l.setCellState,
                  rowId: e,
                  columnId: t,
                  value: n,
                });
              },
              [i]
            ),
            c = y(r);
          w(
            function () {
              c() && i({ type: l.resetRowState });
            },
            [o]
          ),
            Object.assign(e, { setRowState: s, setCellState: a });
        }
        function Ot(e, t) {
          var n = t.instance,
            r = n.initialRowStateAccessor,
            o = void 0 === r ? xt : r,
            i = n.initialCellStateAccessor,
            s = void 0 === i ? kt : i,
            l = n.state.rowState;
          e &&
            ((e.state = void 0 !== l[e.id] ? l[e.id] : o(e)),
            (e.setState = function (t) {
              return n.setRowState(e.id, t);
            }),
            e.cells.forEach(function (t) {
              e.state.cellState || (e.state.cellState = {}),
                (t.state =
                  void 0 !== e.state.cellState[t.column.id]
                    ? e.state.cellState[t.column.id]
                    : s(t)),
                (t.setState = function (r) {
                  return n.setCellState(e.id, t.column.id, r);
                });
            }));
        }
        (Ct.pluginName = "useRowState"),
          (l.resetColumnOrder = "resetColumnOrder"),
          (l.setColumnOrder = "setColumnOrder");
        var Tt = function (e) {
          e.stateReducers.push(Nt),
            e.visibleColumnsDeps.push(function (e, t) {
              var n = t.instance;
              return [].concat(e, [n.state.columnOrder]);
            }),
            e.visibleColumns.push(Et),
            e.useInstance.push(Dt);
        };
        function Nt(e, t, n, r) {
          return t.type === l.init
            ? o({ columnOrder: [] }, e)
            : t.type === l.resetColumnOrder
            ? o({}, e, { columnOrder: r.initialState.columnOrder || [] })
            : t.type === l.setColumnOrder
            ? o({}, e, { columnOrder: g(t.columnOrder, e.columnOrder) })
            : void 0;
        }
        function Et(e, t) {
          var n = t.instance.state.columnOrder;
          if (!n || !n.length) return e;
          for (
            var r = [].concat(n),
              o = [].concat(e),
              i = [],
              s = function () {
                var e = r.shift(),
                  t = o.findIndex(function (t) {
                    return t.id === e;
                  });
                t > -1 && i.push(o.splice(t, 1)[0]);
              };
            o.length && r.length;

          )
            s();
          return [].concat(i, o);
        }
        function Dt(e) {
          var n = e.dispatch;
          e.setColumnOrder = t.useCallback(
            function (e) {
              return n({ type: l.setColumnOrder, columnOrder: e });
            },
            [n]
          );
        }
        (Tt.pluginName = "useColumnOrder"),
          (u.canResize = !0),
          (l.columnStartResizing = "columnStartResizing"),
          (l.columnResizing = "columnResizing"),
          (l.columnDoneResizing = "columnDoneResizing"),
          (l.resetResize = "resetResize");
        var At = function (e) {
            (e.getResizerProps = [It]),
              e.getHeaderProps.push({ style: { position: "relative" } }),
              e.stateReducers.push(Pt),
              e.useInstance.push(Ft),
              e.useInstanceBeforeDimensions.push(Bt);
          },
          It = function (e, t) {
            var n = t.instance,
              r = t.header,
              o = n.dispatch,
              i = function (e, t) {
                var n = !1;
                if ("touchstart" === e.type) {
                  if (e.touches && e.touches.length > 1) return;
                  n = !0;
                }
                var r,
                  i,
                  s = (function (e) {
                    var t = [];
                    return (
                      (function e(n) {
                        n.columns && n.columns.length && n.columns.map(e),
                          t.push(n);
                      })(e),
                      t
                    );
                  })(t).map(function (e) {
                    return [e.id, e.totalWidth];
                  }),
                  a = n ? Math.round(e.touches[0].clientX) : e.clientX,
                  c = function () {
                    window.cancelAnimationFrame(r),
                      (r = null),
                      o({ type: l.columnDoneResizing });
                  },
                  u = function () {
                    window.cancelAnimationFrame(r),
                      (r = null),
                      o({ type: l.columnResizing, clientX: i });
                  },
                  d = function (e) {
                    (i = e), r || (r = window.requestAnimationFrame(u));
                  },
                  h = {
                    mouse: {
                      moveEvent: "mousemove",
                      moveHandler: function (e) {
                        return d(e.clientX);
                      },
                      upEvent: "mouseup",
                      upHandler: function (e) {
                        document.removeEventListener(
                          "mousemove",
                          h.mouse.moveHandler
                        ),
                          document.removeEventListener(
                            "mouseup",
                            h.mouse.upHandler
                          ),
                          c();
                      },
                    },
                    touch: {
                      moveEvent: "touchmove",
                      moveHandler: function (e) {
                        return (
                          e.cancelable &&
                            (e.preventDefault(), e.stopPropagation()),
                          d(e.touches[0].clientX),
                          !1
                        );
                      },
                      upEvent: "touchend",
                      upHandler: function (e) {
                        document.removeEventListener(
                          h.touch.moveEvent,
                          h.touch.moveHandler
                        ),
                          document.removeEventListener(
                            h.touch.upEvent,
                            h.touch.moveHandler
                          ),
                          c();
                      },
                    },
                  },
                  p = n ? h.touch : h.mouse,
                  f = !!(function () {
                    if ("boolean" == typeof B) return B;
                    var e = !1;
                    try {
                      var t = {
                        get passive() {
                          return (e = !0), !1;
                        },
                      };
                      window.addEventListener("test", null, t),
                        window.removeEventListener("test", null, t);
                    } catch (t) {
                      e = !1;
                    }
                    return (B = e);
                  })() && { passive: !1 };
                document.addEventListener(p.moveEvent, p.moveHandler, f),
                  document.addEventListener(p.upEvent, p.upHandler, f),
                  o({
                    type: l.columnStartResizing,
                    columnId: t.id,
                    columnWidth: t.totalWidth,
                    headerIdWidths: s,
                    clientX: a,
                  });
              };
            return [
              e,
              {
                onMouseDown: function (e) {
                  return e.persist() || i(e, r);
                },
                onTouchStart: function (e) {
                  return e.persist() || i(e, r);
                },
                style: { cursor: "col-resize" },
                draggable: !1,
                role: "separator",
              },
            ];
          };
        function Pt(e, t) {
          if (t.type === l.init)
            return o({ columnResizing: { columnWidths: {} } }, e);
          if (t.type === l.resetResize)
            return o({}, e, { columnResizing: { columnWidths: {} } });
          if (t.type === l.columnStartResizing) {
            var n = t.clientX,
              r = t.columnId,
              i = t.columnWidth,
              s = t.headerIdWidths;
            return o({}, e, {
              columnResizing: o({}, e.columnResizing, {
                startX: n,
                headerIdWidths: s,
                columnWidth: i,
                isResizingColumn: r,
              }),
            });
          }
          if (t.type === l.columnResizing) {
            var a = t.clientX,
              c = e.columnResizing,
              u = c.startX,
              d = c.columnWidth,
              h = c.headerIdWidths,
              p = (a - u) / d,
              f = {};
            return (
              (void 0 === h ? [] : h).forEach(function (e) {
                var t = e[0],
                  n = e[1];
                f[t] = Math.max(n + n * p, 0);
              }),
              o({}, e, {
                columnResizing: o({}, e.columnResizing, {
                  columnWidths: o({}, e.columnResizing.columnWidths, {}, f),
                }),
              })
            );
          }
          return t.type === l.columnDoneResizing
            ? o({}, e, {
                columnResizing: o({}, e.columnResizing, {
                  startX: null,
                  isResizingColumn: null,
                }),
              })
            : void 0;
        }
        At.pluginName = "useResizeColumns";
        var Bt = function (e) {
          var t = e.flatHeaders,
            n = e.disableResizing,
            r = e.getHooks,
            o = e.state.columnResizing,
            i = y(e);
          t.forEach(function (e) {
            var t = T(
              !0 !== e.disableResizing && void 0,
              !0 !== n && void 0,
              !0
            );
            (e.canResize = t),
              (e.width = o.columnWidths[e.id] || e.originalWidth || e.width),
              (e.isResizing = o.isResizingColumn === e.id),
              t &&
                (e.getResizerProps = h(r().getResizerProps, {
                  instance: i(),
                  header: e,
                }));
          });
        };
        function Ft(e) {
          var n = e.plugins,
            r = e.dispatch,
            o = e.autoResetResize,
            i = void 0 === o || o,
            s = e.columns;
          m(n, ["useAbsoluteLayout"], "useResizeColumns");
          var a = y(i);
          w(
            function () {
              a() && r({ type: l.resetResize });
            },
            [s]
          );
          var c = t.useCallback(
            function () {
              return r({ type: l.resetResize });
            },
            [r]
          );
          Object.assign(e, { resetResizing: c });
        }
        var zt = { position: "absolute", top: 0 },
          Vt = function (e) {
            e.getTableBodyProps.push(Ht),
              e.getRowProps.push(Ht),
              e.getHeaderGroupProps.push(Ht),
              e.getFooterGroupProps.push(Ht),
              e.getHeaderProps.push(function (e, t) {
                var n = t.column;
                return [
                  e,
                  {
                    style: o({}, zt, {
                      left: n.totalLeft + "px",
                      width: n.totalWidth + "px",
                    }),
                  },
                ];
              }),
              e.getCellProps.push(function (e, t) {
                var n = t.cell;
                return [
                  e,
                  {
                    style: o({}, zt, {
                      left: n.column.totalLeft + "px",
                      width: n.column.totalWidth + "px",
                    }),
                  },
                ];
              }),
              e.getFooterProps.push(function (e, t) {
                var n = t.column;
                return [
                  e,
                  {
                    style: o({}, zt, {
                      left: n.totalLeft + "px",
                      width: n.totalWidth + "px",
                    }),
                  },
                ];
              });
          };
        Vt.pluginName = "useAbsoluteLayout";
        var Ht = function (e, t) {
            return [
              e,
              {
                style: {
                  position: "relative",
                  width: t.instance.totalColumnsWidth + "px",
                },
              },
            ];
          },
          $t = { display: "inline-block", boxSizing: "border-box" },
          Wt = function (e, t) {
            return [
              e,
              {
                style: {
                  display: "flex",
                  width: t.instance.totalColumnsWidth + "px",
                },
              },
            ];
          },
          Lt = function (e) {
            e.getRowProps.push(Wt),
              e.getHeaderGroupProps.push(Wt),
              e.getFooterGroupProps.push(Wt),
              e.getHeaderProps.push(function (e, t) {
                var n = t.column;
                return [
                  e,
                  { style: o({}, $t, { width: n.totalWidth + "px" }) },
                ];
              }),
              e.getCellProps.push(function (e, t) {
                var n = t.cell;
                return [
                  e,
                  { style: o({}, $t, { width: n.column.totalWidth + "px" }) },
                ];
              }),
              e.getFooterProps.push(function (e, t) {
                var n = t.column;
                return [
                  e,
                  { style: o({}, $t, { width: n.totalWidth + "px" }) },
                ];
              });
          };
        function Gt(e) {
          e.getTableProps.push(qt),
            e.getRowProps.push(jt),
            e.getHeaderGroupProps.push(jt),
            e.getFooterGroupProps.push(jt),
            e.getHeaderProps.push(Jt),
            e.getCellProps.push(_t),
            e.getFooterProps.push(Kt);
        }
        (Lt.pluginName = "useBlockLayout"), (Gt.pluginName = "useFlexLayout");
        var qt = function (e, t) {
            return [
              e,
              { style: { minWidth: t.instance.totalColumnsMinWidth + "px" } },
            ];
          },
          jt = function (e, t) {
            return [
              e,
              {
                style: {
                  display: "flex",
                  flex: "1 0 auto",
                  minWidth: t.instance.totalColumnsMinWidth + "px",
                },
              },
            ];
          },
          Jt = function (e, t) {
            var n = t.column;
            return [
              e,
              {
                style: {
                  boxSizing: "border-box",
                  flex: n.totalFlexWidth
                    ? n.totalFlexWidth + " 0 auto"
                    : void 0,
                  minWidth: n.totalMinWidth + "px",
                  width: n.totalWidth + "px",
                },
              },
            ];
          },
          _t = function (e, t) {
            var n = t.cell;
            return [
              e,
              {
                style: {
                  boxSizing: "border-box",
                  flex: n.column.totalFlexWidth + " 0 auto",
                  minWidth: n.column.totalMinWidth + "px",
                  width: n.column.totalWidth + "px",
                },
              },
            ];
          },
          Kt = function (e, t) {
            var n = t.column;
            return [
              e,
              {
                style: {
                  boxSizing: "border-box",
                  flex: n.totalFlexWidth
                    ? n.totalFlexWidth + " 0 auto"
                    : void 0,
                  minWidth: n.totalMinWidth + "px",
                  width: n.totalWidth + "px",
                },
              },
            ];
          };
        function Yt(e) {
          e.stateReducers.push(Qt),
            e.getTableProps.push(Ut),
            e.getHeaderProps.push(Xt),
            e.getRowProps.push(Zt);
        }
        (l.columnStartResizing = "columnStartResizing"),
          (l.columnResizing = "columnResizing"),
          (l.columnDoneResizing = "columnDoneResizing"),
          (l.resetResize = "resetResize"),
          (Yt.pluginName = "useGridLayout");
        var Ut = function (e, t) {
            var n = t.instance;
            return [
              e,
              {
                style: {
                  display: "grid",
                  gridTemplateColumns: n.visibleColumns
                    .map(function (e) {
                      var t;
                      return n.state.gridLayout.columnWidths[e.id]
                        ? n.state.gridLayout.columnWidths[e.id] + "px"
                        : (
                            null == (t = n.state.columnResizing)
                              ? void 0
                              : t.isResizingColumn
                          )
                        ? n.state.gridLayout.startWidths[e.id] + "px"
                        : "number" == typeof e.width
                        ? e.width + "px"
                        : e.width;
                    })
                    .join(" "),
                },
              },
            ];
          },
          Xt = function (e, t) {
            var n = t.column;
            return [
              e,
              {
                id: "header-cell-" + n.id,
                style: {
                  position: "sticky",
                  gridColumn: "span " + n.totalVisibleHeaderCount,
                },
              },
            ];
          },
          Zt = function (e, t) {
            var n = t.row;
            return n.isExpanded
              ? [e, { style: { gridColumn: "1 / " + (n.cells.length + 1) } }]
              : [e, {}];
          };
        function Qt(e, t, n, r) {
          if (t.type === l.init)
            return o({ gridLayout: { columnWidths: {} } }, e);
          if (t.type === l.resetResize)
            return o({}, e, { gridLayout: { columnWidths: {} } });
          if (t.type === l.columnStartResizing) {
            var i = t.columnId,
              s = t.headerIdWidths,
              a = en(i);
            if (void 0 !== a) {
              var c = r.visibleColumns.reduce(function (e, t) {
                  var n;
                  return o({}, e, (((n = {})[t.id] = en(t.id)), n));
                }, {}),
                u = r.visibleColumns.reduce(function (e, t) {
                  var n;
                  return o({}, e, (((n = {})[t.id] = t.minWidth), n));
                }, {}),
                d = r.visibleColumns.reduce(function (e, t) {
                  var n;
                  return o({}, e, (((n = {})[t.id] = t.maxWidth), n));
                }, {}),
                h = s.map(function (e) {
                  var t = e[0];
                  return [t, en(t)];
                });
              return o({}, e, {
                gridLayout: o({}, e.gridLayout, {
                  startWidths: c,
                  minWidths: u,
                  maxWidths: d,
                  headerIdGridWidths: h,
                  columnWidth: a,
                }),
              });
            }
            return e;
          }
          if (t.type === l.columnResizing) {
            var p = t.clientX,
              f = e.columnResizing.startX,
              m = e.gridLayout,
              g = m.columnWidth,
              y = m.minWidths,
              v = m.maxWidths,
              w = m.headerIdGridWidths,
              b = (p - f) / g,
              S = {};
            return (
              (void 0 === w ? [] : w).forEach(function (e) {
                var t = e[0],
                  n = e[1];
                S[t] = Math.min(Math.max(y[t], n + n * b), v[t]);
              }),
              o({}, e, {
                gridLayout: o({}, e.gridLayout, {
                  columnWidths: o({}, e.gridLayout.columnWidths, {}, S),
                }),
              })
            );
          }
          return t.type === l.columnDoneResizing
            ? o({}, e, {
                gridLayout: o({}, e.gridLayout, {
                  startWidths: {},
                  minWidths: {},
                  maxWidths: {},
                }),
              })
            : void 0;
        }
        function en(e) {
          var t,
            n =
              null == (t = document.getElementById("header-cell-" + e))
                ? void 0
                : t.offsetWidth;
          if (void 0 !== n) return n;
        }
        (e._UNSTABLE_usePivotColumns = nt),
          (e.actions = l),
          (e.defaultColumn = u),
          (e.defaultGroupByFn = Le),
          (e.defaultOrderByFn = Ze),
          (e.defaultRenderer = a),
          (e.emptyRenderer = c),
          (e.ensurePluginOrder = m),
          (e.flexRender = S),
          (e.functionalUpdate = g),
          (e.loopHooks = f),
          (e.makePropGetter = h),
          (e.makeRenderer = b),
          (e.reduceHooks = p),
          (e.safeUseLayoutEffect = v),
          (e.useAbsoluteLayout = Vt),
          (e.useAsyncDebounce = function (e, n) {
            void 0 === n && (n = 0);
            var o = t.useRef({}),
              i = y(e),
              s = y(n);
            return t.useCallback(
              (function () {
                var e = r(
                  regeneratorRuntime.mark(function e() {
                    var t,
                      n,
                      l,
                      a = arguments;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            for (
                              t = a.length, n = new Array(t), l = 0;
                              l < t;
                              l++
                            )
                              n[l] = a[l];
                            return (
                              o.current.promise ||
                                (o.current.promise = new Promise(function (
                                  e,
                                  t
                                ) {
                                  (o.current.resolve = e),
                                    (o.current.reject = t);
                                })),
                              o.current.timeout &&
                                clearTimeout(o.current.timeout),
                              (o.current.timeout = setTimeout(
                                r(
                                  regeneratorRuntime.mark(function e() {
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                delete o.current.timeout,
                                                (e.prev = 1),
                                                (e.t0 = o.current),
                                                (e.next = 5),
                                                i().apply(void 0, n)
                                              );
                                            case 5:
                                              (e.t1 = e.sent),
                                                e.t0.resolve.call(e.t0, e.t1),
                                                (e.next = 12);
                                              break;
                                            case 9:
                                              (e.prev = 9),
                                                (e.t2 = e.catch(1)),
                                                o.current.reject(e.t2);
                                            case 12:
                                              return (
                                                (e.prev = 12),
                                                delete o.current.promise,
                                                e.finish(12)
                                              );
                                            case 15:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      null,
                                      [[1, 9, 12, 15]]
                                    );
                                  })
                                ),
                                s()
                              )),
                              e.abrupt("return", o.current.promise)
                            );
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              [i, s]
            );
          }),
          (e.useBlockLayout = Lt),
          (e.useColumnOrder = Tt),
          (e.useExpanded = ae),
          (e.useFilters = Re),
          (e.useFlexLayout = Gt),
          (e.useGetLatest = y),
          (e.useGlobalFilter = Te),
          (e.useGridLayout = Yt),
          (e.useGroupBy = Be),
          (e.useMountedLayoutEffect = w),
          (e.usePagination = Qe),
          (e.useResizeColumns = At),
          (e.useRowSelect = mt),
          (e.useRowState = Ct),
          (e.useSortBy = Ke),
          (e.useTable = function (e) {
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
              i < n;
              i++
            )
              r[i - 1] = arguments[i];
            (e = ie(e)), (r = [_].concat(r));
            var s = y(t.useRef({}).current);
            Object.assign(s(), o({}, e, { plugins: r, hooks: J() })),
              r.filter(Boolean).forEach(function (e) {
                e(s().hooks);
              });
            var a = y(s().hooks);
            (s().getHooks = a),
              delete s().hooks,
              Object.assign(s(), p(a().useOptions, ie(e)));
            var c = s(),
              u = c.data,
              d = c.columns,
              m = c.initialState,
              g = c.defaultColumn,
              v = c.getSubRows,
              w = c.getRowId,
              S = c.stateReducer,
              O = c.useControlledState,
              T = y(S),
              N = t.useCallback(
                function (e, t) {
                  if (!t.type)
                    throw (
                      (console.info({ action: t }),
                      new Error("Unknown Action 👆"))
                    );
                  return []
                    .concat(a().stateReducers, Array.isArray(T()) ? T() : [T()])
                    .reduce(function (n, r) {
                      return r(n, t, e, s()) || n;
                    }, e);
                },
                [a, T, s]
              ),
              E = t.useReducer(N, void 0, function () {
                return N(m, { type: l.init });
              }),
              D = E[0],
              A = E[1],
              I = p([].concat(a().useControlledState, [O]), D, {
                instance: s(),
              });
            Object.assign(s(), { state: I, dispatch: A });
            var P = t.useMemo(function () {
              return x(p(a().columns, d, { instance: s() }));
            }, [a, s, d].concat(p(a().columnsDeps, [], { instance: s() })));
            s().columns = P;
            var B = t.useMemo(function () {
              return p(a().allColumns, k(P), { instance: s() }).map(C);
            }, [P, a, s].concat(p(a().allColumnsDeps, [], { instance: s() })));
            s().allColumns = B;
            var F = t.useMemo(
                function () {
                  for (
                    var e = [], t = [], n = {}, r = [].concat(B);
                    r.length;

                  ) {
                    var o = r.shift();
                    le({
                      data: u,
                      rows: e,
                      flatRows: t,
                      rowsById: n,
                      column: o,
                      getRowId: w,
                      getSubRows: v,
                      accessValueHooks: a().accessValue,
                      getInstance: s,
                    });
                  }
                  return [e, t, n];
                },
                [B, u, w, v, a, s]
              ),
              z = F[0],
              V = F[1],
              H = F[2];
            Object.assign(s(), {
              rows: z,
              initialRows: [].concat(z),
              flatRows: V,
              rowsById: H,
            }),
              f(a().useInstanceAfterData, s());
            var $ = t.useMemo(function () {
              return p(a().visibleColumns, B, { instance: s() }).map(function (
                e
              ) {
                return R(e, g);
              });
            }, [a, B, s, g].concat(
              p(a().visibleColumnsDeps, [], { instance: s() })
            ));
            (B = t.useMemo(
              function () {
                var e = [].concat($);
                return (
                  B.forEach(function (t) {
                    e.find(function (e) {
                      return e.id === t.id;
                    }) || e.push(t);
                  }),
                  e
                );
              },
              [B, $]
            )),
              (s().allColumns = B);
            var W = t.useMemo(function () {
              return p(a().headerGroups, M($, g), s());
            }, [a, $, g, s].concat(
              p(a().headerGroupsDeps, [], { instance: s() })
            ));
            s().headerGroups = W;
            var L = t.useMemo(
              function () {
                return W.length ? W[0].headers : [];
              },
              [W]
            );
            (s().headers = L),
              (s().flatHeaders = W.reduce(function (e, t) {
                return [].concat(e, t.headers);
              }, [])),
              f(a().useInstanceBeforeDimensions, s());
            var G = $.filter(function (e) {
              return e.isVisible;
            })
              .map(function (e) {
                return e.id;
              })
              .sort()
              .join("_");
            ($ = t.useMemo(
              function () {
                return $.filter(function (e) {
                  return e.isVisible;
                });
              },
              [$, G]
            )),
              (s().visibleColumns = $);
            var q = se(L),
              j = q[0],
              K = q[1],
              Y = q[2];
            return (
              (s().totalColumnsMinWidth = j),
              (s().totalColumnsWidth = K),
              (s().totalColumnsMaxWidth = Y),
              f(a().useInstance, s()),
              [].concat(s().flatHeaders, s().allColumns).forEach(function (e) {
                (e.render = b(s(), e)),
                  (e.getHeaderProps = h(a().getHeaderProps, {
                    instance: s(),
                    column: e,
                  })),
                  (e.getFooterProps = h(a().getFooterProps, {
                    instance: s(),
                    column: e,
                  }));
              }),
              (s().headerGroups = t.useMemo(
                function () {
                  return W.filter(function (e, t) {
                    return (
                      (e.headers = e.headers.filter(function (e) {
                        return e.headers
                          ? (function e(t) {
                              return t.filter(function (t) {
                                return t.headers ? e(t.headers) : t.isVisible;
                              }).length;
                            })(e.headers)
                          : e.isVisible;
                      })),
                      !!e.headers.length &&
                        ((e.getHeaderGroupProps = h(a().getHeaderGroupProps, {
                          instance: s(),
                          headerGroup: e,
                          index: t,
                        })),
                        (e.getFooterGroupProps = h(a().getFooterGroupProps, {
                          instance: s(),
                          headerGroup: e,
                          index: t,
                        })),
                        !0)
                    );
                  });
                },
                [W, s, a]
              )),
              (s().footerGroups = [].concat(s().headerGroups).reverse()),
              (s().prepareRow = t.useCallback(
                function (e) {
                  (e.getRowProps = h(a().getRowProps, {
                    instance: s(),
                    row: e,
                  })),
                    (e.allCells = B.map(function (t) {
                      var n = e.values[t.id],
                        r = { column: t, row: e, value: n };
                      return (
                        (r.getCellProps = h(a().getCellProps, {
                          instance: s(),
                          cell: r,
                        })),
                        (r.render = b(s(), t, { row: e, cell: r, value: n })),
                        r
                      );
                    })),
                    (e.cells = $.map(function (t) {
                      return e.allCells.find(function (e) {
                        return e.column.id === t.id;
                      });
                    })),
                    f(a().prepareRow, e, { instance: s() });
                },
                [a, s, B, $]
              )),
              (s().getTableProps = h(a().getTableProps, { instance: s() })),
              (s().getTableBodyProps = h(a().getTableBodyProps, {
                instance: s(),
              })),
              f(a().useFinalInstance, s()),
              s()
            );
          }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t, n(67294));
    },
    79521: (e, t, n) => {
      e.exports = n(40217);
    },
    25804: (e, t, n) => {
      "use strict";
      n.d(t, {
        QF: () => x,
        YR: () => O,
        uJ: () => b,
        uo: () => p,
        w9: () => S,
      });
      var r = n(16560),
        o = n(87823),
        i = n(2376);
      const s = (e, t) =>
        !e.selection.empty &&
        (t && t(e.tr.deleteSelection().scrollIntoView()), !0);
      function l(e, t) {
        let { $cursor: n } = e.selection;
        return !n || (t ? !t.endOfTextblock("backward", e) : n.parentOffset > 0)
          ? null
          : n;
      }
      function a(e, t, n = !1) {
        for (let r = e; r; r = "start" == t ? r.firstChild : r.lastChild) {
          if (r.isTextblock) return !0;
          if (n && 1 != r.childCount) return !1;
        }
        return !1;
      }
      function c(e) {
        if (!e.parent.type.spec.isolating)
          for (let t = e.depth - 1; t >= 0; t--) {
            if (e.index(t) > 0) return e.doc.resolve(e.before(t + 1));
            if (e.node(t).type.spec.isolating) break;
          }
        return null;
      }
      function u(e, t) {
        let { $cursor: n } = e.selection;
        return !n ||
          (t
            ? !t.endOfTextblock("forward", e)
            : n.parentOffset < n.parent.content.size)
          ? null
          : n;
      }
      function d(e) {
        if (!e.parent.type.spec.isolating)
          for (let t = e.depth - 1; t >= 0; t--) {
            let n = e.node(t);
            if (e.index(t) + 1 < n.childCount)
              return e.doc.resolve(e.after(t + 1));
            if (n.type.spec.isolating) break;
          }
        return null;
      }
      function h(e) {
        for (let t = 0; t < e.edgeCount; t++) {
          let { type: n } = e.edge(t);
          if (n.isTextblock && !n.hasRequiredAttrs()) return n;
        }
        return null;
      }
      const p = (e, t) => {
        let { $head: n, $anchor: r } = e.selection;
        if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
        let o = n.node(-1),
          s = n.indexAfter(-1),
          l = h(o.contentMatchAt(s));
        if (!l || !o.canReplaceWith(s, s, l)) return !1;
        if (t) {
          let r = n.after(),
            o = e.tr.replaceWith(r, r, l.createAndFill());
          o.setSelection(i.Y1.near(o.doc.resolve(r), 1)), t(o.scrollIntoView());
        }
        return !0;
      };
      const f = (e, t) => {
        let { $from: n, $to: o } = e.selection;
        if (e.selection instanceof i.qv && e.selection.node.isBlock)
          return !(
            !n.parentOffset ||
            !(0, r.Ax)(e.doc, n.pos) ||
            (t && t(e.tr.split(n.pos).scrollIntoView()), 0)
          );
        if (!n.parent.isBlock) return !1;
        if (t) {
          let s = o.parentOffset == o.parent.content.size,
            l = e.tr;
          (e.selection instanceof i.Bs || e.selection instanceof i.C1) &&
            l.deleteSelection();
          let a =
              0 == n.depth
                ? null
                : h(n.node(-1).contentMatchAt(n.indexAfter(-1))),
            c = m && m(o.parent, s),
            u = c ? [c] : s && a ? [{ type: a }] : void 0,
            d = (0, r.Ax)(l.doc, l.mapping.map(n.pos), 1, u);
          if (
            (u ||
              d ||
              !(0, r.Ax)(
                l.doc,
                l.mapping.map(n.pos),
                1,
                a ? [{ type: a }] : void 0
              ) ||
              (a && (u = [{ type: a }]), (d = !0)),
            d &&
              (l.split(l.mapping.map(n.pos), 1, u),
              !s && !n.parentOffset && n.parent.type != a))
          ) {
            let e = l.mapping.map(n.before()),
              t = l.doc.resolve(e);
            a &&
              n.node(-1).canReplaceWith(t.index(), t.index() + 1, a) &&
              l.setNodeMarkup(l.mapping.map(n.before()), a);
          }
          t(l.scrollIntoView());
        }
        return !0;
      };
      var m;
      function g(e, t, n) {
        let s,
          l,
          c = t.nodeBefore,
          u = t.nodeAfter;
        if (c.type.spec.isolating || u.type.spec.isolating) return !1;
        if (
          (function (e, t, n) {
            let o = t.nodeBefore,
              i = t.nodeAfter,
              s = t.index();
            return !(
              !(o && i && o.type.compatibleContent(i.type)) ||
              (!o.content.size && t.parent.canReplace(s - 1, s)
                ? (n &&
                    n(e.tr.delete(t.pos - o.nodeSize, t.pos).scrollIntoView()),
                  0)
                : !t.parent.canReplace(s, s + 1) ||
                  (!i.isTextblock && !(0, r.Mn)(e.doc, t.pos)) ||
                  (n &&
                    n(
                      e.tr
                        .clearIncompatible(
                          t.pos,
                          o.type,
                          o.contentMatchAt(o.childCount)
                        )
                        .join(t.pos)
                        .scrollIntoView()
                    ),
                  0))
            );
          })(e, t, n)
        )
          return !0;
        let d = t.parent.canReplace(t.index(), t.index() + 1);
        if (
          d &&
          (s = (l = c.contentMatchAt(c.childCount)).findWrapping(u.type)) &&
          l.matchType(s[0] || u.type).validEnd
        ) {
          if (n) {
            let i = t.pos + u.nodeSize,
              l = o.HY.empty;
            for (let e = s.length - 1; e >= 0; e--)
              l = o.HY.from(s[e].create(null, l));
            l = o.HY.from(c.copy(l));
            let a = e.tr.step(
                new r.FC(
                  t.pos - 1,
                  i,
                  t.pos,
                  i,
                  new o.p2(l, 1, 0),
                  s.length,
                  !0
                )
              ),
              d = i + 2 * s.length;
            (0, r.Mn)(a.doc, d) && a.join(d), n(a.scrollIntoView());
          }
          return !0;
        }
        let h = i.Y1.findFrom(t, 1),
          p = h && h.$from.blockRange(h.$to),
          f = p && (0, r.k9)(p);
        if (null != f && f >= t.depth)
          return n && n(e.tr.lift(p, f).scrollIntoView()), !0;
        if (d && a(u, "start", !0) && a(c, "end")) {
          let i = c,
            s = [];
          for (; s.push(i), !i.isTextblock; ) i = i.lastChild;
          let l = u,
            a = 1;
          for (; !l.isTextblock; l = l.firstChild) a++;
          if (i.canReplace(i.childCount, i.childCount, l.content)) {
            if (n) {
              let i = o.HY.empty;
              for (let e = s.length - 1; e >= 0; e--)
                i = o.HY.from(s[e].copy(i));
              n(
                e.tr
                  .step(
                    new r.FC(
                      t.pos - s.length,
                      t.pos + u.nodeSize,
                      t.pos + a,
                      t.pos + u.nodeSize - a,
                      new o.p2(i, s.length, 0),
                      0,
                      !0
                    )
                  )
                  .scrollIntoView()
              );
            }
            return !0;
          }
        }
        return !1;
      }
      function y(e) {
        return function (t, n) {
          let r = t.selection,
            o = e < 0 ? r.$from : r.$to,
            s = o.depth;
          for (; o.node(s).isInline; ) {
            if (!s) return !1;
            s--;
          }
          return (
            !!o.node(s).isTextblock &&
            (n &&
              n(
                t.tr.setSelection(
                  i.Bs.create(t.doc, e < 0 ? o.start(s) : o.end(s))
                )
              ),
            !0)
          );
        };
      }
      const v = y(-1),
        w = y(1);
      function b(e, t = null) {
        return function (n, r) {
          let o = !1;
          for (let r = 0; r < n.selection.ranges.length && !o; r++) {
            let {
              $from: { pos: i },
              $to: { pos: s },
            } = n.selection.ranges[r];
            n.doc.nodesBetween(i, s, (r, i) => {
              if (o) return !1;
              if (r.isTextblock && !r.hasMarkup(e, t))
                if (r.type == e) o = !0;
                else {
                  let t = n.doc.resolve(i),
                    r = t.index();
                  o = t.parent.canReplaceWith(r, r + 1, e);
                }
            });
          }
          if (!o) return !1;
          if (r) {
            let o = n.tr;
            for (let r = 0; r < n.selection.ranges.length; r++) {
              let {
                $from: { pos: i },
                $to: { pos: s },
              } = n.selection.ranges[r];
              o.setBlockType(i, s, e, t);
            }
            r(o.scrollIntoView());
          }
          return !0;
        };
      }
      function S(e, t = null) {
        return function (n, r) {
          let { empty: o, $cursor: i, ranges: s } = n.selection;
          if (
            (o && !i) ||
            !(function (e, t, n) {
              for (let r = 0; r < t.length; r++) {
                let { $from: o, $to: i } = t[r],
                  s =
                    0 == o.depth && e.inlineContent && e.type.allowsMarkType(n);
                if (
                  (e.nodesBetween(o.pos, i.pos, (e) => {
                    if (s) return !1;
                    s = e.inlineContent && e.type.allowsMarkType(n);
                  }),
                  s)
                )
                  return !0;
              }
              return !1;
            })(n.doc, s, e)
          )
            return !1;
          if (r)
            if (i)
              e.isInSet(n.storedMarks || i.marks())
                ? r(n.tr.removeStoredMark(e))
                : r(n.tr.addStoredMark(e.create(t)));
            else {
              let o = !1,
                i = n.tr;
              for (let t = 0; !o && t < s.length; t++) {
                let { $from: r, $to: i } = s[t];
                o = n.doc.rangeHasMark(r.pos, i.pos, e);
              }
              for (let n = 0; n < s.length; n++) {
                let { $from: r, $to: l } = s[n];
                if (o) i.removeMark(r.pos, l.pos, e);
                else {
                  let n = r.pos,
                    o = l.pos,
                    s = r.nodeAfter,
                    a = l.nodeBefore,
                    c = s && s.isText ? /^\s*/.exec(s.text)[0].length : 0,
                    u = a && a.isText ? /\s*$/.exec(a.text)[0].length : 0;
                  n + c < o && ((n += c), (o -= u)),
                    i.addMark(n, o, e.create(t));
                }
              }
              r(i.scrollIntoView());
            }
          return !0;
        };
      }
      function x(...e) {
        return function (t, n, r) {
          for (let o = 0; o < e.length; o++) if (e[o](t, n, r)) return !0;
          return !1;
        };
      }
      let k = x(
          s,
          (e, t, n) => {
            let s = l(e, n);
            if (!s) return !1;
            let u = c(s);
            if (!u) {
              let n = s.blockRange(),
                o = n && (0, r.k9)(n);
              return (
                null != o && (t && t(e.tr.lift(n, o).scrollIntoView()), !0)
              );
            }
            let d = u.nodeBefore;
            if (!d.type.spec.isolating && g(e, u, t)) return !0;
            if (
              0 == s.parent.content.size &&
              (a(d, "end") || i.qv.isSelectable(d))
            ) {
              let n = (0, r.dR)(e.doc, s.before(), s.after(), o.p2.empty);
              if (n && n.slice.size < n.to - n.from) {
                if (t) {
                  let r = e.tr.step(n);
                  r.setSelection(
                    a(d, "end")
                      ? i.Y1.findFrom(
                          r.doc.resolve(r.mapping.map(u.pos, -1)),
                          -1
                        )
                      : i.qv.create(r.doc, u.pos - d.nodeSize)
                  ),
                    t(r.scrollIntoView());
                }
                return !0;
              }
            }
            return (
              !(!d.isAtom || u.depth != s.depth - 1) &&
              (t && t(e.tr.delete(u.pos - d.nodeSize, u.pos).scrollIntoView()),
              !0)
            );
          },
          (e, t, n) => {
            let { $head: r, empty: o } = e.selection,
              s = r;
            if (!o) return !1;
            if (r.parent.isTextblock) {
              if (n ? !n.endOfTextblock("backward", e) : r.parentOffset > 0)
                return !1;
              s = c(r);
            }
            let l = s && s.nodeBefore;
            return (
              !(!l || !i.qv.isSelectable(l)) &&
              (t &&
                t(
                  e.tr
                    .setSelection(i.qv.create(e.doc, s.pos - l.nodeSize))
                    .scrollIntoView()
                ),
              !0)
            );
          }
        ),
        C = x(
          s,
          (e, t, n) => {
            let s = u(e, n);
            if (!s) return !1;
            let l = d(s);
            if (!l) return !1;
            let c = l.nodeAfter;
            if (g(e, l, t)) return !0;
            if (
              0 == s.parent.content.size &&
              (a(c, "start") || i.qv.isSelectable(c))
            ) {
              let n = (0, r.dR)(e.doc, s.before(), s.after(), o.p2.empty);
              if (n && n.slice.size < n.to - n.from) {
                if (t) {
                  let r = e.tr.step(n);
                  r.setSelection(
                    a(c, "start")
                      ? i.Y1.findFrom(r.doc.resolve(r.mapping.map(l.pos)), 1)
                      : i.qv.create(r.doc, r.mapping.map(l.pos))
                  ),
                    t(r.scrollIntoView());
                }
                return !0;
              }
            }
            return (
              !(!c.isAtom || l.depth != s.depth - 1) &&
              (t && t(e.tr.delete(l.pos, l.pos + c.nodeSize).scrollIntoView()),
              !0)
            );
          },
          (e, t, n) => {
            let { $head: r, empty: o } = e.selection,
              s = r;
            if (!o) return !1;
            if (r.parent.isTextblock) {
              if (
                n
                  ? !n.endOfTextblock("forward", e)
                  : r.parentOffset < r.parent.content.size
              )
                return !1;
              s = d(r);
            }
            let l = s && s.nodeAfter;
            return (
              !(!l || !i.qv.isSelectable(l)) &&
              (t &&
                t(
                  e.tr.setSelection(i.qv.create(e.doc, s.pos)).scrollIntoView()
                ),
              !0)
            );
          }
        );
      const R = {
          Enter: x(
            (e, t) => {
              let { $head: n, $anchor: r } = e.selection;
              return (
                !(!n.parent.type.spec.code || !n.sameParent(r)) &&
                (t && t(e.tr.insertText("\n").scrollIntoView()), !0)
              );
            },
            (e, t) => {
              let n = e.selection,
                { $from: r, $to: o } = n;
              if (
                n instanceof i.C1 ||
                r.parent.inlineContent ||
                o.parent.inlineContent
              )
                return !1;
              let s = h(o.parent.contentMatchAt(o.indexAfter()));
              if (!s || !s.isTextblock) return !1;
              if (t) {
                let n = (
                    !r.parentOffset && o.index() < o.parent.childCount ? r : o
                  ).pos,
                  l = e.tr.insert(n, s.createAndFill());
                l.setSelection(i.Bs.create(l.doc, n + 1)),
                  t(l.scrollIntoView());
              }
              return !0;
            },
            (e, t) => {
              let { $cursor: n } = e.selection;
              if (!n || n.parent.content.size) return !1;
              if (n.depth > 1 && n.after() != n.end(-1)) {
                let o = n.before();
                if ((0, r.Ax)(e.doc, o))
                  return t && t(e.tr.split(o).scrollIntoView()), !0;
              }
              let o = n.blockRange(),
                i = o && (0, r.k9)(o);
              return (
                null != i && (t && t(e.tr.lift(o, i).scrollIntoView()), !0)
              );
            },
            f
          ),
          "Mod-Enter": p,
          Backspace: k,
          "Mod-Backspace": k,
          "Shift-Backspace": k,
          Delete: C,
          "Mod-Delete": C,
          "Mod-a": (e, t) => (t && t(e.tr.setSelection(new i.C1(e.doc))), !0),
        },
        M = {
          "Ctrl-h": R.Backspace,
          "Alt-Backspace": R["Mod-Backspace"],
          "Ctrl-d": R.Delete,
          "Ctrl-Alt-Backspace": R["Mod-Delete"],
          "Alt-Delete": R["Mod-Delete"],
          "Alt-d": R["Mod-Delete"],
          "Ctrl-a": v,
          "Ctrl-e": w,
        };
      for (let e in R) M[e] = R[e];
      const O = (
        "undefined" != typeof navigator
          ? /Mac|iP(hone|[oa]d)/.test(navigator.platform)
          : !("undefined" == typeof os || !os.platform) &&
            "darwin" == os.platform()
      )
        ? M
        : R;
    },
    5284: (e, t, n) => {
      "use strict";
      n.d(t, {
        m8: () => x,
        KX: () => C,
        AH: () => M,
        Yw: () => k,
        of: () => R,
      });
      var r = 200,
        o = function () {};
      (o.prototype.append = function (e) {
        return e.length
          ? ((e = o.from(e)),
            (!this.length && e) ||
              (e.length < r && this.leafAppend(e)) ||
              (this.length < r && e.leafPrepend(this)) ||
              this.appendInner(e))
          : this;
      }),
        (o.prototype.prepend = function (e) {
          return e.length ? o.from(e).append(this) : this;
        }),
        (o.prototype.appendInner = function (e) {
          return new s(this, e);
        }),
        (o.prototype.slice = function (e, t) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = this.length),
            e >= t
              ? o.empty
              : this.sliceInner(Math.max(0, e), Math.min(this.length, t))
          );
        }),
        (o.prototype.get = function (e) {
          if (!(e < 0 || e >= this.length)) return this.getInner(e);
        }),
        (o.prototype.forEach = function (e, t, n) {
          void 0 === t && (t = 0),
            void 0 === n && (n = this.length),
            t <= n
              ? this.forEachInner(e, t, n, 0)
              : this.forEachInvertedInner(e, t, n, 0);
        }),
        (o.prototype.map = function (e, t, n) {
          void 0 === t && (t = 0), void 0 === n && (n = this.length);
          var r = [];
          return (
            this.forEach(
              function (t, n) {
                return r.push(e(t, n));
              },
              t,
              n
            ),
            r
          );
        }),
        (o.from = function (e) {
          return e instanceof o ? e : e && e.length ? new i(e) : o.empty;
        });
      var i = (function (e) {
        function t(t) {
          e.call(this), (this.values = t);
        }
        e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t);
        var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
        return (
          (t.prototype.flatten = function () {
            return this.values;
          }),
          (t.prototype.sliceInner = function (e, n) {
            return 0 == e && n == this.length
              ? this
              : new t(this.values.slice(e, n));
          }),
          (t.prototype.getInner = function (e) {
            return this.values[e];
          }),
          (t.prototype.forEachInner = function (e, t, n, r) {
            for (var o = t; o < n; o++)
              if (!1 === e(this.values[o], r + o)) return !1;
          }),
          (t.prototype.forEachInvertedInner = function (e, t, n, r) {
            for (var o = t - 1; o >= n; o--)
              if (!1 === e(this.values[o], r + o)) return !1;
          }),
          (t.prototype.leafAppend = function (e) {
            if (this.length + e.length <= r)
              return new t(this.values.concat(e.flatten()));
          }),
          (t.prototype.leafPrepend = function (e) {
            if (this.length + e.length <= r)
              return new t(e.flatten().concat(this.values));
          }),
          (n.length.get = function () {
            return this.values.length;
          }),
          (n.depth.get = function () {
            return 0;
          }),
          Object.defineProperties(t.prototype, n),
          t
        );
      })(o);
      o.empty = new i([]);
      var s = (function (e) {
        function t(t, n) {
          e.call(this),
            (this.left = t),
            (this.right = n),
            (this.length = t.length + n.length),
            (this.depth = Math.max(t.depth, n.depth) + 1);
        }
        return (
          e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.flatten = function () {
            return this.left.flatten().concat(this.right.flatten());
          }),
          (t.prototype.getInner = function (e) {
            return e < this.left.length
              ? this.left.get(e)
              : this.right.get(e - this.left.length);
          }),
          (t.prototype.forEachInner = function (e, t, n, r) {
            var o = this.left.length;
            return (
              !(
                t < o && !1 === this.left.forEachInner(e, t, Math.min(n, o), r)
              ) &&
              !(
                n > o &&
                !1 ===
                  this.right.forEachInner(
                    e,
                    Math.max(t - o, 0),
                    Math.min(this.length, n) - o,
                    r + o
                  )
              ) &&
              void 0
            );
          }),
          (t.prototype.forEachInvertedInner = function (e, t, n, r) {
            var o = this.left.length;
            return (
              !(
                t > o &&
                !1 ===
                  this.right.forEachInvertedInner(
                    e,
                    t - o,
                    Math.max(n, o) - o,
                    r + o
                  )
              ) &&
              !(
                n < o &&
                !1 === this.left.forEachInvertedInner(e, Math.min(t, o), n, r)
              ) &&
              void 0
            );
          }),
          (t.prototype.sliceInner = function (e, t) {
            if (0 == e && t == this.length) return this;
            var n = this.left.length;
            return t <= n
              ? this.left.slice(e, t)
              : e >= n
              ? this.right.slice(e - n, t - n)
              : this.left.slice(e, n).append(this.right.slice(0, t - n));
          }),
          (t.prototype.leafAppend = function (e) {
            var n = this.right.leafAppend(e);
            if (n) return new t(this.left, n);
          }),
          (t.prototype.leafPrepend = function (e) {
            var n = this.left.leafPrepend(e);
            if (n) return new t(n, this.right);
          }),
          (t.prototype.appendInner = function (e) {
            return this.left.depth >= Math.max(this.right.depth, e.depth) + 1
              ? new t(this.left, new t(this.right, e))
              : new t(this, e);
          }),
          t
        );
      })(o);
      const l = o;
      var a = n(16560),
        c = n(2376);
      class u {
        constructor(e, t) {
          (this.items = e), (this.eventCount = t);
        }
        popEvent(e, t) {
          if (0 == this.eventCount) return null;
          let n,
            r,
            o = this.items.length;
          for (; ; o--) {
            if (this.items.get(o - 1).selection) {
              --o;
              break;
            }
          }
          t &&
            ((n = this.remapping(o, this.items.length)), (r = n.maps.length));
          let i,
            s,
            l = e.tr,
            a = [],
            c = [];
          return (
            this.items.forEach(
              (e, t) => {
                if (!e.step)
                  return (
                    n || ((n = this.remapping(o, t + 1)), (r = n.maps.length)),
                    r--,
                    void c.push(e)
                  );
                if (n) {
                  c.push(new d(e.map));
                  let t,
                    o = e.step.map(n.slice(r));
                  o &&
                    l.maybeStep(o).doc &&
                    ((t = l.mapping.maps[l.mapping.maps.length - 1]),
                    a.push(new d(t, void 0, void 0, a.length + c.length))),
                    r--,
                    t && n.appendMap(t, r);
                } else l.maybeStep(e.step);
                return e.selection
                  ? ((i = n ? e.selection.map(n.slice(r)) : e.selection),
                    (s = new u(
                      this.items.slice(0, o).append(c.reverse().concat(a)),
                      this.eventCount - 1
                    )),
                    !1)
                  : void 0;
              },
              this.items.length,
              0
            ),
            { remaining: s, transform: l, selection: i }
          );
        }
        addTransform(e, t, n, r) {
          let o = [],
            i = this.eventCount,
            s = this.items,
            l = !r && s.length ? s.get(s.length - 1) : null;
          for (let n = 0; n < e.steps.length; n++) {
            let a,
              c = e.steps[n].invert(e.docs[n]),
              u = new d(e.mapping.maps[n], c, t);
            (a = l && l.merge(u)) &&
              ((u = a), n ? o.pop() : (s = s.slice(0, s.length - 1))),
              o.push(u),
              t && (i++, (t = void 0)),
              r || (l = u);
          }
          let a = i - n.depth;
          return (
            a > p &&
              ((s = (function (e, t) {
                let n;
                return (
                  e.forEach((e, r) => {
                    if (e.selection && 0 == t--) return (n = r), !1;
                  }),
                  e.slice(n)
                );
              })(s, a)),
              (i -= a)),
            new u(s.append(o), i)
          );
        }
        remapping(e, t) {
          let n = new a.vs();
          return (
            this.items.forEach(
              (t, r) => {
                let o =
                  null != t.mirrorOffset && r - t.mirrorOffset >= e
                    ? n.maps.length - t.mirrorOffset
                    : void 0;
                n.appendMap(t.map, o);
              },
              e,
              t
            ),
            n
          );
        }
        addMaps(e) {
          return 0 == this.eventCount
            ? this
            : new u(this.items.append(e.map((e) => new d(e))), this.eventCount);
        }
        rebased(e, t) {
          if (!this.eventCount) return this;
          let n = [],
            r = Math.max(0, this.items.length - t),
            o = e.mapping,
            i = e.steps.length,
            s = this.eventCount;
          this.items.forEach((e) => {
            e.selection && s--;
          }, r);
          let l = t;
          this.items.forEach((t) => {
            let r = o.getMirror(--l);
            if (null == r) return;
            i = Math.min(i, r);
            let a = o.maps[r];
            if (t.step) {
              let i = e.steps[r].invert(e.docs[r]),
                c = t.selection && t.selection.map(o.slice(l + 1, r));
              c && s++, n.push(new d(a, i, c));
            } else n.push(new d(a));
          }, r);
          let a = [];
          for (let e = t; e < i; e++) a.push(new d(o.maps[e]));
          let c = this.items.slice(0, r).append(a).append(n),
            h = new u(c, s);
          return (
            h.emptyItemCount() > 500 &&
              (h = h.compress(this.items.length - n.length)),
            h
          );
        }
        emptyItemCount() {
          let e = 0;
          return (
            this.items.forEach((t) => {
              t.step || e++;
            }),
            e
          );
        }
        compress(e = this.items.length) {
          let t = this.remapping(0, e),
            n = t.maps.length,
            r = [],
            o = 0;
          return (
            this.items.forEach(
              (i, s) => {
                if (s >= e) r.push(i), i.selection && o++;
                else if (i.step) {
                  let e = i.step.map(t.slice(n)),
                    s = e && e.getMap();
                  if ((n--, s && t.appendMap(s, n), e)) {
                    let l = i.selection && i.selection.map(t.slice(n));
                    l && o++;
                    let a,
                      c = new d(s.invert(), e, l),
                      u = r.length - 1;
                    (a = r.length && r[u].merge(c)) ? (r[u] = a) : r.push(c);
                  }
                } else i.map && n--;
              },
              this.items.length,
              0
            ),
            new u(l.from(r.reverse()), o)
          );
        }
      }
      u.empty = new u(l.empty, 0);
      class d {
        constructor(e, t, n, r) {
          (this.map = e),
            (this.step = t),
            (this.selection = n),
            (this.mirrorOffset = r);
        }
        merge(e) {
          if (this.step && e.step && !e.selection) {
            let t = e.step.merge(this.step);
            if (t) return new d(t.getMap().invert(), t, this.selection);
          }
        }
      }
      class h {
        constructor(e, t, n, r) {
          (this.done = e),
            (this.undone = t),
            (this.prevRanges = n),
            (this.prevTime = r);
        }
      }
      const p = 20;
      function f(e) {
        let t = [];
        return e.forEach((e, n, r, o) => t.push(r, o)), t;
      }
      function m(e, t) {
        if (!e) return null;
        let n = [];
        for (let r = 0; r < e.length; r += 2) {
          let o = t.map(e[r], 1),
            i = t.map(e[r + 1], -1);
          o <= i && n.push(o, i);
        }
        return n;
      }
      function g(e, t, n, r) {
        let o = w(t),
          i = b.get(t).spec.config,
          s = (r ? e.undone : e.done).popEvent(t, o);
        if (!s) return;
        let l = s.selection.resolve(s.transform.doc),
          a = (r ? e.done : e.undone).addTransform(
            s.transform,
            t.selection.getBookmark(),
            i,
            o
          ),
          c = new h(r ? a : s.remaining, r ? s.remaining : a, null, 0);
        n(
          s.transform
            .setSelection(l)
            .setMeta(b, { redo: r, historyState: c })
            .scrollIntoView()
        );
      }
      let y = !1,
        v = null;
      function w(e) {
        let t = e.plugins;
        if (v != t) {
          (y = !1), (v = t);
          for (let e = 0; e < t.length; e++)
            if (t[e].spec.historyPreserveItems) {
              y = !0;
              break;
            }
        }
        return y;
      }
      const b = new c.H$("history"),
        S = new c.H$("closeHistory");
      function x(e = {}) {
        return (
          (e = {
            depth: e.depth || 100,
            newGroupDelay: e.newGroupDelay || 500,
          }),
          new c.Sy({
            key: b,
            state: {
              init: () => new h(u.empty, u.empty, null, 0),
              apply: (t, n, r) =>
                (function (e, t, n, r) {
                  let o,
                    i = n.getMeta(b);
                  if (i) return i.historyState;
                  n.getMeta(S) && (e = new h(e.done, e.undone, null, 0));
                  let s = n.getMeta("appendedTransaction");
                  if (0 == n.steps.length) return e;
                  if (s && s.getMeta(b))
                    return s.getMeta(b).redo
                      ? new h(
                          e.done.addTransform(n, void 0, r, w(t)),
                          e.undone,
                          f(n.mapping.maps[n.steps.length - 1]),
                          e.prevTime
                        )
                      : new h(
                          e.done,
                          e.undone.addTransform(n, void 0, r, w(t)),
                          null,
                          e.prevTime
                        );
                  if (
                    !1 === n.getMeta("addToHistory") ||
                    (s && !1 === s.getMeta("addToHistory"))
                  )
                    return (o = n.getMeta("rebased"))
                      ? new h(
                          e.done.rebased(n, o),
                          e.undone.rebased(n, o),
                          m(e.prevRanges, n.mapping),
                          e.prevTime
                        )
                      : new h(
                          e.done.addMaps(n.mapping.maps),
                          e.undone.addMaps(n.mapping.maps),
                          m(e.prevRanges, n.mapping),
                          e.prevTime
                        );
                  {
                    let o =
                        0 == e.prevTime ||
                        (!s &&
                          (e.prevTime < (n.time || 0) - r.newGroupDelay ||
                            !(function (e, t) {
                              if (!t) return !1;
                              if (!e.docChanged) return !0;
                              let n = !1;
                              return (
                                e.mapping.maps[0].forEach((e, r) => {
                                  for (let o = 0; o < t.length; o += 2)
                                    e <= t[o + 1] && r >= t[o] && (n = !0);
                                }),
                                n
                              );
                            })(n, e.prevRanges))),
                      i = s
                        ? m(e.prevRanges, n.mapping)
                        : f(n.mapping.maps[n.steps.length - 1]);
                    return new h(
                      e.done.addTransform(
                        n,
                        o ? t.selection.getBookmark() : void 0,
                        r,
                        w(t)
                      ),
                      u.empty,
                      i,
                      n.time
                    );
                  }
                })(n, r, t, e),
            },
            config: e,
            props: {
              handleDOMEvents: {
                beforeinput(e, t) {
                  let n = t.inputType,
                    r = "historyUndo" == n ? k : "historyRedo" == n ? C : null;
                  return !!r && (t.preventDefault(), r(e.state, e.dispatch));
                },
              },
            },
          })
        );
      }
      const k = (e, t) => {
          let n = b.getState(e);
          return !(!n || 0 == n.done.eventCount) && (t && g(n, e, t, !1), !0);
        },
        C = (e, t) => {
          let n = b.getState(e);
          return !(!n || 0 == n.undone.eventCount) && (t && g(n, e, t, !0), !0);
        };
      function R(e) {
        let t = b.getState(e);
        return t ? t.done.eventCount : 0;
      }
      function M(e) {
        let t = b.getState(e);
        return t ? t.undone.eventCount : 0;
      }
    },
    36912: (e, t, n) => {
      "use strict";
      n.d(t, {
        Hw: () => l,
        S0: () => u,
        VK: () => i,
        dU: () => c,
        zK: () => d,
      });
      var r = n(2376),
        o = n(16560);
      class i {
        constructor(e, t) {
          var n;
          (this.match = e),
            (this.match = e),
            (this.handler =
              "string" == typeof t
                ? ((n = t),
                  function (e, t, r, o) {
                    let i = n;
                    if (t[1]) {
                      let e = t[0].lastIndexOf(t[1]);
                      i += t[0].slice(e + t[1].length);
                      let n = (r += e) - o;
                      n > 0 && ((i = t[0].slice(e - n, e) + i), (r = o));
                    }
                    return e.tr.insertText(i, r, o);
                  })
                : t);
        }
      }
      const s = 500;
      function l({ rules: e }) {
        let t = new r.Sy({
          state: {
            init: () => null,
            apply(e, t) {
              let n = e.getMeta(this);
              return n || (e.selectionSet || e.docChanged ? null : t);
            },
          },
          props: {
            handleTextInput: (n, r, o, i) => a(n, r, o, i, e, t),
            handleDOMEvents: {
              compositionend: (n) => {
                setTimeout(() => {
                  let { $cursor: r } = n.state.selection;
                  r && a(n, r.pos, r.pos, "", e, t);
                });
              },
            },
          },
          isInputRules: !0,
        });
        return t;
      }
      function a(e, t, n, r, o, i) {
        if (e.composing) return !1;
        let l = e.state,
          a = l.doc.resolve(t);
        if (a.parent.type.spec.code) return !1;
        let c =
          a.parent.textBetween(
            Math.max(0, a.parentOffset - s),
            a.parentOffset,
            null,
            "￼"
          ) + r;
        for (let s = 0; s < o.length; s++) {
          let a = o[s].match.exec(c),
            u = a && o[s].handler(l, a, t - (a[0].length - r.length), n);
          if (u)
            return (
              e.dispatch(
                u.setMeta(i, { transform: u, from: t, to: n, text: r })
              ),
              !0
            );
        }
        return !1;
      }
      const c = (e, t) => {
        let n = e.plugins;
        for (let r = 0; r < n.length; r++) {
          let o,
            i = n[r];
          if (i.spec.isInputRules && (o = i.getState(e))) {
            if (t) {
              let n = e.tr,
                r = o.transform;
              for (let e = r.steps.length - 1; e >= 0; e--)
                n.step(r.steps[e].invert(r.docs[e]));
              if (o.text) {
                let t = n.doc.resolve(o.from).marks();
                n.replaceWith(o.from, o.to, e.schema.text(o.text, t));
              } else n.delete(o.from, o.to);
              t(n);
            }
            return !0;
          }
        }
        return !1;
      };
      new i(/--$/, "—"),
        new i(/\.\.\.$/, "…"),
        new i(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/, "“"),
        new i(/"$/, "”"),
        new i(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/, "‘"),
        new i(/'$/, "’");
      function u(e, t, n = null, r) {
        return new i(e, (e, i, s, l) => {
          let a = n instanceof Function ? n(i) : n,
            c = e.tr.delete(s, l),
            u = c.doc.resolve(s).blockRange(),
            d = u && (0, o.nd)(u, t, a);
          if (!d) return null;
          c.wrap(u, d);
          let h = c.doc.resolve(s - 1).nodeBefore;
          return (
            h &&
              h.type == t &&
              (0, o.Mn)(c.doc, s - 1) &&
              (!r || r(i, h)) &&
              c.join(s - 1),
            c
          );
        });
      }
      function d(e, t, n = null) {
        return new i(e, (e, r, o, i) => {
          let s = e.doc.resolve(o),
            l = n instanceof Function ? n(r) : n;
          return s.node(-1).canReplaceWith(s.index(-1), s.indexAfter(-1), t)
            ? e.tr.delete(o, i).setBlockType(o, o, t, l)
            : null;
        });
      }
    },
    7327: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => m });
      for (
        var r = {
            8: "Backspace",
            9: "Tab",
            10: "Enter",
            12: "NumLock",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            44: "PrintScreen",
            45: "Insert",
            46: "Delete",
            59: ";",
            61: "=",
            91: "Meta",
            92: "Meta",
            106: "*",
            107: "+",
            108: ",",
            109: "-",
            110: ".",
            111: "/",
            144: "NumLock",
            145: "ScrollLock",
            160: "Shift",
            161: "Shift",
            162: "Control",
            163: "Control",
            164: "Alt",
            165: "Alt",
            173: "-",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
          },
          o = {
            48: ")",
            49: "!",
            50: "@",
            51: "#",
            52: "$",
            53: "%",
            54: "^",
            55: "&",
            56: "*",
            57: "(",
            59: ":",
            61: "+",
            173: "_",
            186: ":",
            187: "+",
            188: "<",
            189: "_",
            190: ">",
            191: "?",
            192: "~",
            219: "{",
            220: "|",
            221: "}",
            222: '"',
          },
          i =
            "undefined" != typeof navigator &&
            /Chrome\/(\d+)/.exec(navigator.userAgent),
          s =
            ("undefined" != typeof navigator &&
              /Gecko\/\d+/.test(navigator.userAgent),
            "undefined" != typeof navigator && /Mac/.test(navigator.platform)),
          l =
            "undefined" != typeof navigator &&
            /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(
              navigator.userAgent
            ),
          a = s || (i && +i[1] < 57),
          c = 0;
        c < 10;
        c++
      )
        r[48 + c] = r[96 + c] = String(c);
      for (c = 1; c <= 24; c++) r[c + 111] = "F" + c;
      for (c = 65; c <= 90; c++)
        (r[c] = String.fromCharCode(c + 32)), (o[c] = String.fromCharCode(c));
      for (var u in r) o.hasOwnProperty(u) || (o[u] = r[u]);
      var d = n(2376);
      const h =
        "undefined" != typeof navigator &&
        /Mac|iP(hone|[oa]d)/.test(navigator.platform);
      function p(e) {
        let t,
          n,
          r,
          o,
          i = e.split(/-(?!$)/),
          s = i[i.length - 1];
        "Space" == s && (s = " ");
        for (let e = 0; e < i.length - 1; e++) {
          let s = i[e];
          if (/^(cmd|meta|m)$/i.test(s)) o = !0;
          else if (/^a(lt)?$/i.test(s)) t = !0;
          else if (/^(c|ctrl|control)$/i.test(s)) n = !0;
          else if (/^s(hift)?$/i.test(s)) r = !0;
          else {
            if (!/^mod$/i.test(s))
              throw new Error("Unrecognized modifier name: " + s);
            h ? (o = !0) : (n = !0);
          }
        }
        return (
          t && (s = "Alt-" + s),
          n && (s = "Ctrl-" + s),
          o && (s = "Meta-" + s),
          r && (s = "Shift-" + s),
          s
        );
      }
      function f(e, t, n = !0) {
        return (
          t.altKey && (e = "Alt-" + e),
          t.ctrlKey && (e = "Ctrl-" + e),
          t.metaKey && (e = "Meta-" + e),
          n && t.shiftKey && (e = "Shift-" + e),
          e
        );
      }
      function m(e) {
        return new d.Sy({ props: { handleKeyDown: g(e) } });
      }
      function g(e) {
        let t = (function (e) {
          let t = Object.create(null);
          for (let n in e) t[p(n)] = e[n];
          return t;
        })(e);
        return function (e, n) {
          let i,
            s = (function (e) {
              var t =
                (!(
                  (a && (e.ctrlKey || e.altKey || e.metaKey)) ||
                  (l && e.shiftKey && e.key && 1 == e.key.length) ||
                  "Unidentified" == e.key
                ) &&
                  e.key) ||
                (e.shiftKey ? o : r)[e.keyCode] ||
                e.key ||
                "Unidentified";
              return (
                "Esc" == t && (t = "Escape"),
                "Del" == t && (t = "Delete"),
                "Left" == t && (t = "ArrowLeft"),
                "Up" == t && (t = "ArrowUp"),
                "Right" == t && (t = "ArrowRight"),
                "Down" == t && (t = "ArrowDown"),
                t
              );
            })(n),
            c = t[f(s, n)];
          if (c && c(e.state, e.dispatch, e)) return !0;
          if (1 == s.length && " " != s) {
            if (n.shiftKey) {
              let r = t[f(s, n, !1)];
              if (r && r(e.state, e.dispatch, e)) return !0;
            }
            if (
              (n.shiftKey || n.altKey || n.metaKey || s.charCodeAt(0) > 127) &&
              (i = r[n.keyCode]) &&
              i != s
            ) {
              let r = t[f(i, n)];
              if (r && r(e.state, e.dispatch, e)) return !0;
            }
          }
          return !1;
        };
      }
    },
    87823: (e, t, n) => {
      "use strict";
      function r(e) {
        this.content = e;
      }
      n.d(t, {
        aw: () => X,
        PW: () => ue,
        HY: () => l,
        vc: () => d,
        ZU: () => K,
        NB: () => D,
        Ts: () => N,
        e4: () => h,
        V_: () => Y,
        p2: () => p,
      }),
        (r.prototype = {
          constructor: r,
          find: function (e) {
            for (var t = 0; t < this.content.length; t += 2)
              if (this.content[t] === e) return t;
            return -1;
          },
          get: function (e) {
            var t = this.find(e);
            return -1 == t ? void 0 : this.content[t + 1];
          },
          update: function (e, t, n) {
            var o = n && n != e ? this.remove(n) : this,
              i = o.find(e),
              s = o.content.slice();
            return (
              -1 == i ? s.push(n || e, t) : ((s[i + 1] = t), n && (s[i] = n)),
              new r(s)
            );
          },
          remove: function (e) {
            var t = this.find(e);
            if (-1 == t) return this;
            var n = this.content.slice();
            return n.splice(t, 2), new r(n);
          },
          addToStart: function (e, t) {
            return new r([e, t].concat(this.remove(e).content));
          },
          addToEnd: function (e, t) {
            var n = this.remove(e).content.slice();
            return n.push(e, t), new r(n);
          },
          addBefore: function (e, t, n) {
            var o = this.remove(t),
              i = o.content.slice(),
              s = o.find(e);
            return i.splice(-1 == s ? i.length : s, 0, t, n), new r(i);
          },
          forEach: function (e) {
            for (var t = 0; t < this.content.length; t += 2)
              e(this.content[t], this.content[t + 1]);
          },
          prepend: function (e) {
            return (e = r.from(e)).size
              ? new r(e.content.concat(this.subtract(e).content))
              : this;
          },
          append: function (e) {
            return (e = r.from(e)).size
              ? new r(this.subtract(e).content.concat(e.content))
              : this;
          },
          subtract: function (e) {
            var t = this;
            e = r.from(e);
            for (var n = 0; n < e.content.length; n += 2)
              t = t.remove(e.content[n]);
            return t;
          },
          toObject: function () {
            var e = {};
            return (
              this.forEach(function (t, n) {
                e[t] = n;
              }),
              e
            );
          },
          get size() {
            return this.content.length >> 1;
          },
        }),
        (r.from = function (e) {
          if (e instanceof r) return e;
          var t = [];
          if (e) for (var n in e) t.push(n, e[n]);
          return new r(t);
        });
      const o = r;
      function i(e, t, n) {
        for (let r = 0; ; r++) {
          if (r == e.childCount || r == t.childCount)
            return e.childCount == t.childCount ? null : n;
          let o = e.child(r),
            s = t.child(r);
          if (o != s) {
            if (!o.sameMarkup(s)) return n;
            if (o.isText && o.text != s.text) {
              for (let e = 0; o.text[e] == s.text[e]; e++) n++;
              return n;
            }
            if (o.content.size || s.content.size) {
              let e = i(o.content, s.content, n + 1);
              if (null != e) return e;
            }
            n += o.nodeSize;
          } else n += o.nodeSize;
        }
      }
      function s(e, t, n, r) {
        for (let o = e.childCount, i = t.childCount; ; ) {
          if (0 == o || 0 == i) return o == i ? null : { a: n, b: r };
          let l = e.child(--o),
            a = t.child(--i),
            c = l.nodeSize;
          if (l != a) {
            if (!l.sameMarkup(a)) return { a: n, b: r };
            if (l.isText && l.text != a.text) {
              let e = 0,
                t = Math.min(l.text.length, a.text.length);
              for (
                ;
                e < t &&
                l.text[l.text.length - e - 1] == a.text[a.text.length - e - 1];

              )
                e++, n--, r--;
              return { a: n, b: r };
            }
            if (l.content.size || a.content.size) {
              let e = s(l.content, a.content, n - 1, r - 1);
              if (e) return e;
            }
            (n -= c), (r -= c);
          } else (n -= c), (r -= c);
        }
      }
      class l {
        constructor(e, t) {
          if (((this.content = e), (this.size = t || 0), null == t))
            for (let t = 0; t < e.length; t++) this.size += e[t].nodeSize;
        }
        nodesBetween(e, t, n, r = 0, o) {
          for (let i = 0, s = 0; s < t; i++) {
            let l = this.content[i],
              a = s + l.nodeSize;
            if (a > e && !1 !== n(l, r + s, o || null, i) && l.content.size) {
              let o = s + 1;
              l.nodesBetween(
                Math.max(0, e - o),
                Math.min(l.content.size, t - o),
                n,
                r + o
              );
            }
            s = a;
          }
        }
        descendants(e) {
          this.nodesBetween(0, this.size, e);
        }
        textBetween(e, t, n, r) {
          let o = "",
            i = !0;
          return (
            this.nodesBetween(
              e,
              t,
              (s, l) => {
                s.isText
                  ? ((o += s.text.slice(Math.max(e, l) - l, t - l)), (i = !n))
                  : s.isLeaf
                  ? (r
                      ? (o += "function" == typeof r ? r(s) : r)
                      : s.type.spec.leafText && (o += s.type.spec.leafText(s)),
                    (i = !n))
                  : !i && s.isBlock && ((o += n), (i = !0));
              },
              0
            ),
            o
          );
        }
        append(e) {
          if (!e.size) return this;
          if (!this.size) return e;
          let t = this.lastChild,
            n = e.firstChild,
            r = this.content.slice(),
            o = 0;
          for (
            t.isText &&
            t.sameMarkup(n) &&
            ((r[r.length - 1] = t.withText(t.text + n.text)), (o = 1));
            o < e.content.length;
            o++
          )
            r.push(e.content[o]);
          return new l(r, this.size + e.size);
        }
        cut(e, t = this.size) {
          if (0 == e && t == this.size) return this;
          let n = [],
            r = 0;
          if (t > e)
            for (let o = 0, i = 0; i < t; o++) {
              let s = this.content[o],
                l = i + s.nodeSize;
              l > e &&
                ((i < e || l > t) &&
                  (s = s.isText
                    ? s.cut(Math.max(0, e - i), Math.min(s.text.length, t - i))
                    : s.cut(
                        Math.max(0, e - i - 1),
                        Math.min(s.content.size, t - i - 1)
                      )),
                n.push(s),
                (r += s.nodeSize)),
                (i = l);
            }
          return new l(n, r);
        }
        cutByIndex(e, t) {
          return e == t
            ? l.empty
            : 0 == e && t == this.content.length
            ? this
            : new l(this.content.slice(e, t));
        }
        replaceChild(e, t) {
          let n = this.content[e];
          if (n == t) return this;
          let r = this.content.slice(),
            o = this.size + t.nodeSize - n.nodeSize;
          return (r[e] = t), new l(r, o);
        }
        addToStart(e) {
          return new l([e].concat(this.content), this.size + e.nodeSize);
        }
        addToEnd(e) {
          return new l(this.content.concat(e), this.size + e.nodeSize);
        }
        eq(e) {
          if (this.content.length != e.content.length) return !1;
          for (let t = 0; t < this.content.length; t++)
            if (!this.content[t].eq(e.content[t])) return !1;
          return !0;
        }
        get firstChild() {
          return this.content.length ? this.content[0] : null;
        }
        get lastChild() {
          return this.content.length
            ? this.content[this.content.length - 1]
            : null;
        }
        get childCount() {
          return this.content.length;
        }
        child(e) {
          let t = this.content[e];
          if (!t)
            throw new RangeError("Index " + e + " out of range for " + this);
          return t;
        }
        maybeChild(e) {
          return this.content[e] || null;
        }
        forEach(e) {
          for (let t = 0, n = 0; t < this.content.length; t++) {
            let r = this.content[t];
            e(r, n, t), (n += r.nodeSize);
          }
        }
        findDiffStart(e, t = 0) {
          return i(this, e, t);
        }
        findDiffEnd(e, t = this.size, n = e.size) {
          return s(this, e, t, n);
        }
        findIndex(e, t = -1) {
          if (0 == e) return c(0, e);
          if (e == this.size) return c(this.content.length, e);
          if (e > this.size || e < 0)
            throw new RangeError(`Position ${e} outside of fragment (${this})`);
          for (let n = 0, r = 0; ; n++) {
            let o = r + this.child(n).nodeSize;
            if (o >= e) return o == e || t > 0 ? c(n + 1, o) : c(n, r);
            r = o;
          }
        }
        toString() {
          return "<" + this.toStringInner() + ">";
        }
        toStringInner() {
          return this.content.join(", ");
        }
        toJSON() {
          return this.content.length
            ? this.content.map((e) => e.toJSON())
            : null;
        }
        static fromJSON(e, t) {
          if (!t) return l.empty;
          if (!Array.isArray(t))
            throw new RangeError("Invalid input for Fragment.fromJSON");
          return new l(t.map(e.nodeFromJSON));
        }
        static fromArray(e) {
          if (!e.length) return l.empty;
          let t,
            n = 0;
          for (let r = 0; r < e.length; r++) {
            let o = e[r];
            (n += o.nodeSize),
              r && o.isText && e[r - 1].sameMarkup(o)
                ? (t || (t = e.slice(0, r)),
                  (t[t.length - 1] = o.withText(t[t.length - 1].text + o.text)))
                : t && t.push(o);
          }
          return new l(t || e, n);
        }
        static from(e) {
          if (!e) return l.empty;
          if (e instanceof l) return e;
          if (Array.isArray(e)) return this.fromArray(e);
          if (e.attrs) return new l([e], e.nodeSize);
          throw new RangeError(
            "Can not convert " +
              e +
              " to a Fragment" +
              (e.nodesBetween
                ? " (looks like multiple versions of prosemirror-model were loaded)"
                : "")
          );
        }
      }
      l.empty = new l([], 0);
      const a = { index: 0, offset: 0 };
      function c(e, t) {
        return (a.index = e), (a.offset = t), a;
      }
      function u(e, t) {
        if (e === t) return !0;
        if (!e || "object" != typeof e || !t || "object" != typeof t) return !1;
        let n = Array.isArray(e);
        if (Array.isArray(t) != n) return !1;
        if (n) {
          if (e.length != t.length) return !1;
          for (let n = 0; n < e.length; n++) if (!u(e[n], t[n])) return !1;
        } else {
          for (let n in e) if (!(n in t) || !u(e[n], t[n])) return !1;
          for (let n in t) if (!(n in e)) return !1;
        }
        return !0;
      }
      class d {
        constructor(e, t) {
          (this.type = e), (this.attrs = t);
        }
        addToSet(e) {
          let t,
            n = !1;
          for (let r = 0; r < e.length; r++) {
            let o = e[r];
            if (this.eq(o)) return e;
            if (this.type.excludes(o.type)) t || (t = e.slice(0, r));
            else {
              if (o.type.excludes(this.type)) return e;
              !n &&
                o.type.rank > this.type.rank &&
                (t || (t = e.slice(0, r)), t.push(this), (n = !0)),
                t && t.push(o);
            }
          }
          return t || (t = e.slice()), n || t.push(this), t;
        }
        removeFromSet(e) {
          for (let t = 0; t < e.length; t++)
            if (this.eq(e[t])) return e.slice(0, t).concat(e.slice(t + 1));
          return e;
        }
        isInSet(e) {
          for (let t = 0; t < e.length; t++) if (this.eq(e[t])) return !0;
          return !1;
        }
        eq(e) {
          return this == e || (this.type == e.type && u(this.attrs, e.attrs));
        }
        toJSON() {
          let e = { type: this.type.name };
          for (let t in this.attrs) {
            e.attrs = this.attrs;
            break;
          }
          return e;
        }
        static fromJSON(e, t) {
          if (!t) throw new RangeError("Invalid input for Mark.fromJSON");
          let n = e.marks[t.type];
          if (!n)
            throw new RangeError(
              `There is no mark type ${t.type} in this schema`
            );
          return n.create(t.attrs);
        }
        static sameSet(e, t) {
          if (e == t) return !0;
          if (e.length != t.length) return !1;
          for (let n = 0; n < e.length; n++) if (!e[n].eq(t[n])) return !1;
          return !0;
        }
        static setFrom(e) {
          if (!e || (Array.isArray(e) && 0 == e.length)) return d.none;
          if (e instanceof d) return [e];
          let t = e.slice();
          return t.sort((e, t) => e.type.rank - t.type.rank), t;
        }
      }
      d.none = [];
      class h extends Error {}
      class p {
        constructor(e, t, n) {
          (this.content = e), (this.openStart = t), (this.openEnd = n);
        }
        get size() {
          return this.content.size - this.openStart - this.openEnd;
        }
        insertAt(e, t) {
          let n = m(this.content, e + this.openStart, t);
          return n && new p(n, this.openStart, this.openEnd);
        }
        removeBetween(e, t) {
          return new p(
            f(this.content, e + this.openStart, t + this.openStart),
            this.openStart,
            this.openEnd
          );
        }
        eq(e) {
          return (
            this.content.eq(e.content) &&
            this.openStart == e.openStart &&
            this.openEnd == e.openEnd
          );
        }
        toString() {
          return this.content + "(" + this.openStart + "," + this.openEnd + ")";
        }
        toJSON() {
          if (!this.content.size) return null;
          let e = { content: this.content.toJSON() };
          return (
            this.openStart > 0 && (e.openStart = this.openStart),
            this.openEnd > 0 && (e.openEnd = this.openEnd),
            e
          );
        }
        static fromJSON(e, t) {
          if (!t) return p.empty;
          let n = t.openStart || 0,
            r = t.openEnd || 0;
          if ("number" != typeof n || "number" != typeof r)
            throw new RangeError("Invalid input for Slice.fromJSON");
          return new p(l.fromJSON(e, t.content), n, r);
        }
        static maxOpen(e, t = !0) {
          let n = 0,
            r = 0;
          for (
            let r = e.firstChild;
            r && !r.isLeaf && (t || !r.type.spec.isolating);
            r = r.firstChild
          )
            n++;
          for (
            let n = e.lastChild;
            n && !n.isLeaf && (t || !n.type.spec.isolating);
            n = n.lastChild
          )
            r++;
          return new p(e, n, r);
        }
      }
      function f(e, t, n) {
        let { index: r, offset: o } = e.findIndex(t),
          i = e.maybeChild(r),
          { index: s, offset: l } = e.findIndex(n);
        if (o == t || i.isText) {
          if (l != n && !e.child(s).isText)
            throw new RangeError("Removing non-flat range");
          return e.cut(0, t).append(e.cut(n));
        }
        if (r != s) throw new RangeError("Removing non-flat range");
        return e.replaceChild(r, i.copy(f(i.content, t - o - 1, n - o - 1)));
      }
      function m(e, t, n, r) {
        let { index: o, offset: i } = e.findIndex(t),
          s = e.maybeChild(o);
        if (i == t || s.isText)
          return r && !r.canReplace(o, o, n)
            ? null
            : e.cut(0, t).append(n).append(e.cut(t));
        let l = m(s.content, t - i - 1, n);
        return l && e.replaceChild(o, s.copy(l));
      }
      function g(e, t, n) {
        if (n.openStart > e.depth)
          throw new h("Inserted content deeper than insertion position");
        if (e.depth - n.openStart != t.depth - n.openEnd)
          throw new h("Inconsistent open depths");
        return y(e, t, n, 0);
      }
      function y(e, t, n, r) {
        let o = e.index(r),
          i = e.node(r);
        if (o == t.index(r) && r < e.depth - n.openStart) {
          let s = y(e, t, n, r + 1);
          return i.copy(i.content.replaceChild(o, s));
        }
        if (n.content.size) {
          if (n.openStart || n.openEnd || e.depth != r || t.depth != r) {
            let { start: o, end: s } = (function (e, t) {
              let n = t.depth - e.openStart,
                r = t.node(n).copy(e.content);
              for (let e = n - 1; e >= 0; e--) r = t.node(e).copy(l.from(r));
              return {
                start: r.resolveNoCache(e.openStart + n),
                end: r.resolveNoCache(r.content.size - e.openEnd - n),
              };
            })(n, e);
            return x(i, k(e, o, s, t, r));
          }
          {
            let r = e.parent,
              o = r.content;
            return x(
              r,
              o
                .cut(0, e.parentOffset)
                .append(n.content)
                .append(o.cut(t.parentOffset))
            );
          }
        }
        return x(i, C(e, t, r));
      }
      function v(e, t) {
        if (!t.type.compatibleContent(e.type))
          throw new h("Cannot join " + t.type.name + " onto " + e.type.name);
      }
      function w(e, t, n) {
        let r = e.node(n);
        return v(r, t.node(n)), r;
      }
      function b(e, t) {
        let n = t.length - 1;
        n >= 0 && e.isText && e.sameMarkup(t[n])
          ? (t[n] = e.withText(t[n].text + e.text))
          : t.push(e);
      }
      function S(e, t, n, r) {
        let o = (t || e).node(n),
          i = 0,
          s = t ? t.index(n) : o.childCount;
        e &&
          ((i = e.index(n)),
          e.depth > n ? i++ : e.textOffset && (b(e.nodeAfter, r), i++));
        for (let e = i; e < s; e++) b(o.child(e), r);
        t && t.depth == n && t.textOffset && b(t.nodeBefore, r);
      }
      function x(e, t) {
        return e.type.checkContent(t), e.copy(t);
      }
      function k(e, t, n, r, o) {
        let i = e.depth > o && w(e, t, o + 1),
          s = r.depth > o && w(n, r, o + 1),
          a = [];
        return (
          S(null, e, o, a),
          i && s && t.index(o) == n.index(o)
            ? (v(i, s), b(x(i, k(e, t, n, r, o + 1)), a))
            : (i && b(x(i, C(e, t, o + 1)), a),
              S(t, n, o, a),
              s && b(x(s, C(n, r, o + 1)), a)),
          S(r, null, o, a),
          new l(a)
        );
      }
      function C(e, t, n) {
        let r = [];
        if ((S(null, e, n, r), e.depth > n)) {
          b(x(w(e, t, n + 1), C(e, t, n + 1)), r);
        }
        return S(t, null, n, r), new l(r);
      }
      p.empty = new p(l.empty, 0, 0);
      class R {
        constructor(e, t, n) {
          (this.pos = e),
            (this.path = t),
            (this.parentOffset = n),
            (this.depth = t.length / 3 - 1);
        }
        resolveDepth(e) {
          return null == e ? this.depth : e < 0 ? this.depth + e : e;
        }
        get parent() {
          return this.node(this.depth);
        }
        get doc() {
          return this.node(0);
        }
        node(e) {
          return this.path[3 * this.resolveDepth(e)];
        }
        index(e) {
          return this.path[3 * this.resolveDepth(e) + 1];
        }
        indexAfter(e) {
          return (
            (e = this.resolveDepth(e)),
            this.index(e) + (e != this.depth || this.textOffset ? 1 : 0)
          );
        }
        start(e) {
          return 0 == (e = this.resolveDepth(e)) ? 0 : this.path[3 * e - 1] + 1;
        }
        end(e) {
          return (
            (e = this.resolveDepth(e)),
            this.start(e) + this.node(e).content.size
          );
        }
        before(e) {
          if (!(e = this.resolveDepth(e)))
            throw new RangeError(
              "There is no position before the top-level node"
            );
          return e == this.depth + 1 ? this.pos : this.path[3 * e - 1];
        }
        after(e) {
          if (!(e = this.resolveDepth(e)))
            throw new RangeError(
              "There is no position after the top-level node"
            );
          return e == this.depth + 1
            ? this.pos
            : this.path[3 * e - 1] + this.path[3 * e].nodeSize;
        }
        get textOffset() {
          return this.pos - this.path[this.path.length - 1];
        }
        get nodeAfter() {
          let e = this.parent,
            t = this.index(this.depth);
          if (t == e.childCount) return null;
          let n = this.pos - this.path[this.path.length - 1],
            r = e.child(t);
          return n ? e.child(t).cut(n) : r;
        }
        get nodeBefore() {
          let e = this.index(this.depth),
            t = this.pos - this.path[this.path.length - 1];
          return t
            ? this.parent.child(e).cut(0, t)
            : 0 == e
            ? null
            : this.parent.child(e - 1);
        }
        posAtIndex(e, t) {
          t = this.resolveDepth(t);
          let n = this.path[3 * t],
            r = 0 == t ? 0 : this.path[3 * t - 1] + 1;
          for (let t = 0; t < e; t++) r += n.child(t).nodeSize;
          return r;
        }
        marks() {
          let e = this.parent,
            t = this.index();
          if (0 == e.content.size) return d.none;
          if (this.textOffset) return e.child(t).marks;
          let n = e.maybeChild(t - 1),
            r = e.maybeChild(t);
          if (!n) {
            let e = n;
            (n = r), (r = e);
          }
          let o = n.marks;
          for (var i = 0; i < o.length; i++)
            !1 !== o[i].type.spec.inclusive ||
              (r && o[i].isInSet(r.marks)) ||
              (o = o[i--].removeFromSet(o));
          return o;
        }
        marksAcross(e) {
          let t = this.parent.maybeChild(this.index());
          if (!t || !t.isInline) return null;
          let n = t.marks,
            r = e.parent.maybeChild(e.index());
          for (var o = 0; o < n.length; o++)
            !1 !== n[o].type.spec.inclusive ||
              (r && n[o].isInSet(r.marks)) ||
              (n = n[o--].removeFromSet(n));
          return n;
        }
        sharedDepth(e) {
          for (let t = this.depth; t > 0; t--)
            if (this.start(t) <= e && this.end(t) >= e) return t;
          return 0;
        }
        blockRange(e = this, t) {
          if (e.pos < this.pos) return e.blockRange(this);
          for (
            let n =
              this.depth -
              (this.parent.inlineContent || this.pos == e.pos ? 1 : 0);
            n >= 0;
            n--
          )
            if (e.pos <= this.end(n) && (!t || t(this.node(n))))
              return new N(this, e, n);
          return null;
        }
        sameParent(e) {
          return this.pos - this.parentOffset == e.pos - e.parentOffset;
        }
        max(e) {
          return e.pos > this.pos ? e : this;
        }
        min(e) {
          return e.pos < this.pos ? e : this;
        }
        toString() {
          let e = "";
          for (let t = 1; t <= this.depth; t++)
            e +=
              (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
          return e + ":" + this.parentOffset;
        }
        static resolve(e, t) {
          if (!(t >= 0 && t <= e.content.size))
            throw new RangeError("Position " + t + " out of range");
          let n = [],
            r = 0,
            o = t;
          for (let t = e; ; ) {
            let { index: e, offset: i } = t.content.findIndex(o),
              s = o - i;
            if ((n.push(t, e, r + i), !s)) break;
            if (((t = t.child(e)), t.isText)) break;
            (o = s - 1), (r += i + 1);
          }
          return new R(t, n, o);
        }
        static resolveCached(e, t) {
          for (let n = 0; n < M.length; n++) {
            let r = M[n];
            if (r.pos == t && r.doc == e) return r;
          }
          let n = (M[O] = R.resolve(e, t));
          return (O = (O + 1) % T), n;
        }
      }
      let M = [],
        O = 0,
        T = 12;
      class N {
        constructor(e, t, n) {
          (this.$from = e), (this.$to = t), (this.depth = n);
        }
        get start() {
          return this.$from.before(this.depth + 1);
        }
        get end() {
          return this.$to.after(this.depth + 1);
        }
        get parent() {
          return this.$from.node(this.depth);
        }
        get startIndex() {
          return this.$from.index(this.depth);
        }
        get endIndex() {
          return this.$to.indexAfter(this.depth);
        }
      }
      const E = Object.create(null);
      class D {
        constructor(e, t, n, r = d.none) {
          (this.type = e),
            (this.attrs = t),
            (this.marks = r),
            (this.content = n || l.empty);
        }
        get nodeSize() {
          return this.isLeaf ? 1 : 2 + this.content.size;
        }
        get childCount() {
          return this.content.childCount;
        }
        child(e) {
          return this.content.child(e);
        }
        maybeChild(e) {
          return this.content.maybeChild(e);
        }
        forEach(e) {
          this.content.forEach(e);
        }
        nodesBetween(e, t, n, r = 0) {
          this.content.nodesBetween(e, t, n, r, this);
        }
        descendants(e) {
          this.nodesBetween(0, this.content.size, e);
        }
        get textContent() {
          return this.isLeaf && this.type.spec.leafText
            ? this.type.spec.leafText(this)
            : this.textBetween(0, this.content.size, "");
        }
        textBetween(e, t, n, r) {
          return this.content.textBetween(e, t, n, r);
        }
        get firstChild() {
          return this.content.firstChild;
        }
        get lastChild() {
          return this.content.lastChild;
        }
        eq(e) {
          return (
            this == e || (this.sameMarkup(e) && this.content.eq(e.content))
          );
        }
        sameMarkup(e) {
          return this.hasMarkup(e.type, e.attrs, e.marks);
        }
        hasMarkup(e, t, n) {
          return (
            this.type == e &&
            u(this.attrs, t || e.defaultAttrs || E) &&
            d.sameSet(this.marks, n || d.none)
          );
        }
        copy(e = null) {
          return e == this.content
            ? this
            : new D(this.type, this.attrs, e, this.marks);
        }
        mark(e) {
          return e == this.marks
            ? this
            : new D(this.type, this.attrs, this.content, e);
        }
        cut(e, t = this.content.size) {
          return 0 == e && t == this.content.size
            ? this
            : this.copy(this.content.cut(e, t));
        }
        slice(e, t = this.content.size, n = !1) {
          if (e == t) return p.empty;
          let r = this.resolve(e),
            o = this.resolve(t),
            i = n ? 0 : r.sharedDepth(t),
            s = r.start(i),
            l = r.node(i).content.cut(r.pos - s, o.pos - s);
          return new p(l, r.depth - i, o.depth - i);
        }
        replace(e, t, n) {
          return g(this.resolve(e), this.resolve(t), n);
        }
        nodeAt(e) {
          for (let t = this; ; ) {
            let { index: n, offset: r } = t.content.findIndex(e);
            if (((t = t.maybeChild(n)), !t)) return null;
            if (r == e || t.isText) return t;
            e -= r + 1;
          }
        }
        childAfter(e) {
          let { index: t, offset: n } = this.content.findIndex(e);
          return { node: this.content.maybeChild(t), index: t, offset: n };
        }
        childBefore(e) {
          if (0 == e) return { node: null, index: 0, offset: 0 };
          let { index: t, offset: n } = this.content.findIndex(e);
          if (n < e)
            return { node: this.content.child(t), index: t, offset: n };
          let r = this.content.child(t - 1);
          return { node: r, index: t - 1, offset: n - r.nodeSize };
        }
        resolve(e) {
          return R.resolveCached(this, e);
        }
        resolveNoCache(e) {
          return R.resolve(this, e);
        }
        rangeHasMark(e, t, n) {
          let r = !1;
          return (
            t > e &&
              this.nodesBetween(
                e,
                t,
                (e) => (n.isInSet(e.marks) && (r = !0), !r)
              ),
            r
          );
        }
        get isBlock() {
          return this.type.isBlock;
        }
        get isTextblock() {
          return this.type.isTextblock;
        }
        get inlineContent() {
          return this.type.inlineContent;
        }
        get isInline() {
          return this.type.isInline;
        }
        get isText() {
          return this.type.isText;
        }
        get isLeaf() {
          return this.type.isLeaf;
        }
        get isAtom() {
          return this.type.isAtom;
        }
        toString() {
          if (this.type.spec.toDebugString)
            return this.type.spec.toDebugString(this);
          let e = this.type.name;
          return (
            this.content.size &&
              (e += "(" + this.content.toStringInner() + ")"),
            I(this.marks, e)
          );
        }
        contentMatchAt(e) {
          let t = this.type.contentMatch.matchFragment(this.content, 0, e);
          if (!t)
            throw new Error(
              "Called contentMatchAt on a node with invalid content"
            );
          return t;
        }
        canReplace(e, t, n = l.empty, r = 0, o = n.childCount) {
          let i = this.contentMatchAt(e).matchFragment(n, r, o),
            s = i && i.matchFragment(this.content, t);
          if (!s || !s.validEnd) return !1;
          for (let e = r; e < o; e++)
            if (!this.type.allowsMarks(n.child(e).marks)) return !1;
          return !0;
        }
        canReplaceWith(e, t, n, r) {
          if (r && !this.type.allowsMarks(r)) return !1;
          let o = this.contentMatchAt(e).matchType(n),
            i = o && o.matchFragment(this.content, t);
          return !!i && i.validEnd;
        }
        canAppend(e) {
          return e.content.size
            ? this.canReplace(this.childCount, this.childCount, e.content)
            : this.type.compatibleContent(e.type);
        }
        check() {
          this.type.checkContent(this.content);
          let e = d.none;
          for (let t = 0; t < this.marks.length; t++)
            e = this.marks[t].addToSet(e);
          if (!d.sameSet(e, this.marks))
            throw new RangeError(
              `Invalid collection of marks for node ${
                this.type.name
              }: ${this.marks.map((e) => e.type.name)}`
            );
          this.content.forEach((e) => e.check());
        }
        toJSON() {
          let e = { type: this.type.name };
          for (let t in this.attrs) {
            e.attrs = this.attrs;
            break;
          }
          return (
            this.content.size && (e.content = this.content.toJSON()),
            this.marks.length && (e.marks = this.marks.map((e) => e.toJSON())),
            e
          );
        }
        static fromJSON(e, t) {
          if (!t) throw new RangeError("Invalid input for Node.fromJSON");
          let n = null;
          if (t.marks) {
            if (!Array.isArray(t.marks))
              throw new RangeError("Invalid mark data for Node.fromJSON");
            n = t.marks.map(e.markFromJSON);
          }
          if ("text" == t.type) {
            if ("string" != typeof t.text)
              throw new RangeError("Invalid text node in JSON");
            return e.text(t.text, n);
          }
          let r = l.fromJSON(e, t.content);
          return e.nodeType(t.type).create(t.attrs, r, n);
        }
      }
      D.prototype.text = void 0;
      class A extends D {
        constructor(e, t, n, r) {
          if ((super(e, t, null, r), !n))
            throw new RangeError("Empty text nodes are not allowed");
          this.text = n;
        }
        toString() {
          return this.type.spec.toDebugString
            ? this.type.spec.toDebugString(this)
            : I(this.marks, JSON.stringify(this.text));
        }
        get textContent() {
          return this.text;
        }
        textBetween(e, t) {
          return this.text.slice(e, t);
        }
        get nodeSize() {
          return this.text.length;
        }
        mark(e) {
          return e == this.marks
            ? this
            : new A(this.type, this.attrs, this.text, e);
        }
        withText(e) {
          return e == this.text
            ? this
            : new A(this.type, this.attrs, e, this.marks);
        }
        cut(e = 0, t = this.text.length) {
          return 0 == e && t == this.text.length
            ? this
            : this.withText(this.text.slice(e, t));
        }
        eq(e) {
          return this.sameMarkup(e) && this.text == e.text;
        }
        toJSON() {
          let e = super.toJSON();
          return (e.text = this.text), e;
        }
      }
      function I(e, t) {
        for (let n = e.length - 1; n >= 0; n--)
          t = e[n].type.name + "(" + t + ")";
        return t;
      }
      class P {
        constructor(e) {
          (this.validEnd = e), (this.next = []), (this.wrapCache = []);
        }
        static parse(e, t) {
          let n = new B(e, t);
          if (null == n.next) return P.empty;
          let r = F(n);
          n.next && n.err("Unexpected trailing text");
          let o = (function (e) {
            let t = Object.create(null);
            return n(L(e, 0));
            function n(r) {
              let o = [];
              r.forEach((t) => {
                e[t].forEach(({ term: t, to: n }) => {
                  if (!t) return;
                  let r;
                  for (let e = 0; e < o.length; e++)
                    o[e][0] == t && (r = o[e][1]);
                  L(e, n).forEach((e) => {
                    r || o.push([t, (r = [])]), -1 == r.indexOf(e) && r.push(e);
                  });
                });
              });
              let i = (t[r.join(",")] = new P(r.indexOf(e.length - 1) > -1));
              for (let e = 0; e < o.length; e++) {
                let r = o[e][1].sort(W);
                i.next.push({ type: o[e][0], next: t[r.join(",")] || n(r) });
              }
              return i;
            }
          })(
            (function (e) {
              let t = [[]];
              return o(i(e, 0), n()), t;
              function n() {
                return t.push([]) - 1;
              }
              function r(e, n, r) {
                let o = { term: r, to: n };
                return t[e].push(o), o;
              }
              function o(e, t) {
                e.forEach((e) => (e.to = t));
              }
              function i(e, t) {
                if ("choice" == e.type)
                  return e.exprs.reduce((e, n) => e.concat(i(n, t)), []);
                if ("seq" != e.type) {
                  if ("star" == e.type) {
                    let s = n();
                    return r(t, s), o(i(e.expr, s), s), [r(s)];
                  }
                  if ("plus" == e.type) {
                    let s = n();
                    return o(i(e.expr, t), s), o(i(e.expr, s), s), [r(s)];
                  }
                  if ("opt" == e.type) return [r(t)].concat(i(e.expr, t));
                  if ("range" == e.type) {
                    let s = t;
                    for (let t = 0; t < e.min; t++) {
                      let t = n();
                      o(i(e.expr, s), t), (s = t);
                    }
                    if (-1 == e.max) o(i(e.expr, s), s);
                    else
                      for (let t = e.min; t < e.max; t++) {
                        let t = n();
                        r(s, t), o(i(e.expr, s), t), (s = t);
                      }
                    return [r(s)];
                  }
                  if ("name" == e.type) return [r(t, void 0, e.value)];
                  throw new Error("Unknown expr type");
                }
                for (let r = 0; ; r++) {
                  let s = i(e.exprs[r], t);
                  if (r == e.exprs.length - 1) return s;
                  o(s, (t = n()));
                }
              }
            })(r)
          );
          return (
            (function (e, t) {
              for (let n = 0, r = [e]; n < r.length; n++) {
                let e = r[n],
                  o = !e.validEnd,
                  i = [];
                for (let t = 0; t < e.next.length; t++) {
                  let { type: n, next: s } = e.next[t];
                  i.push(n.name),
                    !o || n.isText || n.hasRequiredAttrs() || (o = !1),
                    -1 == r.indexOf(s) && r.push(s);
                }
                o &&
                  t.err(
                    "Only non-generatable nodes (" +
                      i.join(", ") +
                      ") in a required position (see https://prosemirror.net/docs/guide/#generatable)"
                  );
              }
            })(o, n),
            o
          );
        }
        matchType(e) {
          for (let t = 0; t < this.next.length; t++)
            if (this.next[t].type == e) return this.next[t].next;
          return null;
        }
        matchFragment(e, t = 0, n = e.childCount) {
          let r = this;
          for (let o = t; r && o < n; o++) r = r.matchType(e.child(o).type);
          return r;
        }
        get inlineContent() {
          return 0 != this.next.length && this.next[0].type.isInline;
        }
        get defaultType() {
          for (let e = 0; e < this.next.length; e++) {
            let { type: t } = this.next[e];
            if (!t.isText && !t.hasRequiredAttrs()) return t;
          }
          return null;
        }
        compatible(e) {
          for (let t = 0; t < this.next.length; t++)
            for (let n = 0; n < e.next.length; n++)
              if (this.next[t].type == e.next[n].type) return !0;
          return !1;
        }
        fillBefore(e, t = !1, n = 0) {
          let r = [this];
          return (function o(i, s) {
            let a = i.matchFragment(e, n);
            if (a && (!t || a.validEnd))
              return l.from(s.map((e) => e.createAndFill()));
            for (let e = 0; e < i.next.length; e++) {
              let { type: t, next: n } = i.next[e];
              if (!t.isText && !t.hasRequiredAttrs() && -1 == r.indexOf(n)) {
                r.push(n);
                let e = o(n, s.concat(t));
                if (e) return e;
              }
            }
            return null;
          })(this, []);
        }
        findWrapping(e) {
          for (let t = 0; t < this.wrapCache.length; t += 2)
            if (this.wrapCache[t] == e) return this.wrapCache[t + 1];
          let t = this.computeWrapping(e);
          return this.wrapCache.push(e, t), t;
        }
        computeWrapping(e) {
          let t = Object.create(null),
            n = [{ match: this, type: null, via: null }];
          for (; n.length; ) {
            let r = n.shift(),
              o = r.match;
            if (o.matchType(e)) {
              let e = [];
              for (let t = r; t.type; t = t.via) e.push(t.type);
              return e.reverse();
            }
            for (let e = 0; e < o.next.length; e++) {
              let { type: i, next: s } = o.next[e];
              i.isLeaf ||
                i.hasRequiredAttrs() ||
                i.name in t ||
                (r.type && !s.validEnd) ||
                (n.push({ match: i.contentMatch, type: i, via: r }),
                (t[i.name] = !0));
            }
          }
          return null;
        }
        get edgeCount() {
          return this.next.length;
        }
        edge(e) {
          if (e >= this.next.length)
            throw new RangeError(
              `There's no ${e}th edge in this content match`
            );
          return this.next[e];
        }
        toString() {
          let e = [];
          return (
            (function t(n) {
              e.push(n);
              for (let r = 0; r < n.next.length; r++)
                -1 == e.indexOf(n.next[r].next) && t(n.next[r].next);
            })(this),
            e
              .map((t, n) => {
                let r = n + (t.validEnd ? "*" : " ") + " ";
                for (let n = 0; n < t.next.length; n++)
                  r +=
                    (n ? ", " : "") +
                    t.next[n].type.name +
                    "->" +
                    e.indexOf(t.next[n].next);
                return r;
              })
              .join("\n")
          );
        }
      }
      P.empty = new P(!0);
      class B {
        constructor(e, t) {
          (this.string = e),
            (this.nodeTypes = t),
            (this.inline = null),
            (this.pos = 0),
            (this.tokens = e.split(/\s*(?=\b|\W|$)/)),
            "" == this.tokens[this.tokens.length - 1] && this.tokens.pop(),
            "" == this.tokens[0] && this.tokens.shift();
        }
        get next() {
          return this.tokens[this.pos];
        }
        eat(e) {
          return this.next == e && (this.pos++ || !0);
        }
        err(e) {
          throw new SyntaxError(
            e + " (in content expression '" + this.string + "')"
          );
        }
      }
      function F(e) {
        let t = [];
        do {
          t.push(z(e));
        } while (e.eat("|"));
        return 1 == t.length ? t[0] : { type: "choice", exprs: t };
      }
      function z(e) {
        let t = [];
        do {
          t.push(V(e));
        } while (e.next && ")" != e.next && "|" != e.next);
        return 1 == t.length ? t[0] : { type: "seq", exprs: t };
      }
      function V(e) {
        let t = (function (e) {
          if (e.eat("(")) {
            let t = F(e);
            return e.eat(")") || e.err("Missing closing paren"), t;
          }
          if (!/\W/.test(e.next)) {
            let t = (function (e, t) {
              let n = e.nodeTypes,
                r = n[t];
              if (r) return [r];
              let o = [];
              for (let e in n) {
                let r = n[e];
                r.groups.indexOf(t) > -1 && o.push(r);
              }
              0 == o.length && e.err("No node type or group '" + t + "' found");
              return o;
            })(e, e.next).map(
              (t) => (
                null == e.inline
                  ? (e.inline = t.isInline)
                  : e.inline != t.isInline &&
                    e.err("Mixing inline and block content"),
                { type: "name", value: t }
              )
            );
            return e.pos++, 1 == t.length ? t[0] : { type: "choice", exprs: t };
          }
          e.err("Unexpected token '" + e.next + "'");
        })(e);
        for (;;)
          if (e.eat("+")) t = { type: "plus", expr: t };
          else if (e.eat("*")) t = { type: "star", expr: t };
          else if (e.eat("?")) t = { type: "opt", expr: t };
          else {
            if (!e.eat("{")) break;
            t = $(e, t);
          }
        return t;
      }
      function H(e) {
        /\D/.test(e.next) && e.err("Expected number, got '" + e.next + "'");
        let t = Number(e.next);
        return e.pos++, t;
      }
      function $(e, t) {
        let n = H(e),
          r = n;
        return (
          e.eat(",") && (r = "}" != e.next ? H(e) : -1),
          e.eat("}") || e.err("Unclosed braced range"),
          { type: "range", min: n, max: r, expr: t }
        );
      }
      function W(e, t) {
        return t - e;
      }
      function L(e, t) {
        let n = [];
        return (
          (function t(r) {
            let o = e[r];
            if (1 == o.length && !o[0].term) return t(o[0].to);
            n.push(r);
            for (let e = 0; e < o.length; e++) {
              let { term: r, to: i } = o[e];
              r || -1 != n.indexOf(i) || t(i);
            }
          })(t),
          n.sort(W)
        );
      }
      function G(e) {
        let t = Object.create(null);
        for (let n in e) {
          let r = e[n];
          if (!r.hasDefault) return null;
          t[n] = r.default;
        }
        return t;
      }
      function q(e, t) {
        let n = Object.create(null);
        for (let r in e) {
          let o = t && t[r];
          if (void 0 === o) {
            let t = e[r];
            if (!t.hasDefault)
              throw new RangeError("No value supplied for attribute " + r);
            o = t.default;
          }
          n[r] = o;
        }
        return n;
      }
      function j(e) {
        let t = Object.create(null);
        if (e) for (let n in e) t[n] = new _(e[n]);
        return t;
      }
      class J {
        constructor(e, t, n) {
          (this.name = e),
            (this.schema = t),
            (this.spec = n),
            (this.markSet = null),
            (this.groups = n.group ? n.group.split(" ") : []),
            (this.attrs = j(n.attrs)),
            (this.defaultAttrs = G(this.attrs)),
            (this.contentMatch = null),
            (this.inlineContent = null),
            (this.isBlock = !(n.inline || "text" == e)),
            (this.isText = "text" == e);
        }
        get isInline() {
          return !this.isBlock;
        }
        get isTextblock() {
          return this.isBlock && this.inlineContent;
        }
        get isLeaf() {
          return this.contentMatch == P.empty;
        }
        get isAtom() {
          return this.isLeaf || !!this.spec.atom;
        }
        get whitespace() {
          return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
        }
        hasRequiredAttrs() {
          for (let e in this.attrs) if (this.attrs[e].isRequired) return !0;
          return !1;
        }
        compatibleContent(e) {
          return this == e || this.contentMatch.compatible(e.contentMatch);
        }
        computeAttrs(e) {
          return !e && this.defaultAttrs ? this.defaultAttrs : q(this.attrs, e);
        }
        create(e = null, t, n) {
          if (this.isText)
            throw new Error("NodeType.create can't construct text nodes");
          return new D(this, this.computeAttrs(e), l.from(t), d.setFrom(n));
        }
        createChecked(e = null, t, n) {
          return (
            (t = l.from(t)),
            this.checkContent(t),
            new D(this, this.computeAttrs(e), t, d.setFrom(n))
          );
        }
        createAndFill(e = null, t, n) {
          if (((e = this.computeAttrs(e)), (t = l.from(t)).size)) {
            let e = this.contentMatch.fillBefore(t);
            if (!e) return null;
            t = e.append(t);
          }
          let r = this.contentMatch.matchFragment(t),
            o = r && r.fillBefore(l.empty, !0);
          return o ? new D(this, e, t.append(o), d.setFrom(n)) : null;
        }
        validContent(e) {
          let t = this.contentMatch.matchFragment(e);
          if (!t || !t.validEnd) return !1;
          for (let t = 0; t < e.childCount; t++)
            if (!this.allowsMarks(e.child(t).marks)) return !1;
          return !0;
        }
        checkContent(e) {
          if (!this.validContent(e))
            throw new RangeError(
              `Invalid content for node ${this.name}: ${e
                .toString()
                .slice(0, 50)}`
            );
        }
        allowsMarkType(e) {
          return null == this.markSet || this.markSet.indexOf(e) > -1;
        }
        allowsMarks(e) {
          if (null == this.markSet) return !0;
          for (let t = 0; t < e.length; t++)
            if (!this.allowsMarkType(e[t].type)) return !1;
          return !0;
        }
        allowedMarks(e) {
          if (null == this.markSet) return e;
          let t;
          for (let n = 0; n < e.length; n++)
            this.allowsMarkType(e[n].type)
              ? t && t.push(e[n])
              : t || (t = e.slice(0, n));
          return t ? (t.length ? t : d.none) : e;
        }
        static compile(e, t) {
          let n = Object.create(null);
          e.forEach((e, r) => (n[e] = new J(e, t, r)));
          let r = t.spec.topNode || "doc";
          if (!n[r])
            throw new RangeError(
              "Schema is missing its top node type ('" + r + "')"
            );
          if (!n.text) throw new RangeError("Every schema needs a 'text' type");
          for (let e in n.text.attrs)
            throw new RangeError(
              "The text node type should not have attributes"
            );
          return n;
        }
      }
      class _ {
        constructor(e) {
          (this.hasDefault = Object.prototype.hasOwnProperty.call(
            e,
            "default"
          )),
            (this.default = e.default);
        }
        get isRequired() {
          return !this.hasDefault;
        }
      }
      class K {
        constructor(e, t, n, r) {
          (this.name = e),
            (this.rank = t),
            (this.schema = n),
            (this.spec = r),
            (this.attrs = j(r.attrs)),
            (this.excluded = null);
          let o = G(this.attrs);
          this.instance = o ? new d(this, o) : null;
        }
        create(e = null) {
          return !e && this.instance
            ? this.instance
            : new d(this, q(this.attrs, e));
        }
        static compile(e, t) {
          let n = Object.create(null),
            r = 0;
          return e.forEach((e, o) => (n[e] = new K(e, r++, t, o))), n;
        }
        removeFromSet(e) {
          for (var t = 0; t < e.length; t++)
            e[t].type == this &&
              ((e = e.slice(0, t).concat(e.slice(t + 1))), t--);
          return e;
        }
        isInSet(e) {
          for (let t = 0; t < e.length; t++) if (e[t].type == this) return e[t];
        }
        excludes(e) {
          return this.excluded.indexOf(e) > -1;
        }
      }
      class Y {
        constructor(e) {
          this.cached = Object.create(null);
          let t = (this.spec = {});
          for (let n in e) t[n] = e[n];
          (t.nodes = o.from(e.nodes)),
            (t.marks = o.from(e.marks || {})),
            (this.nodes = J.compile(this.spec.nodes, this)),
            (this.marks = K.compile(this.spec.marks, this));
          let n = Object.create(null);
          for (let e in this.nodes) {
            if (e in this.marks)
              throw new RangeError(e + " can not be both a node and a mark");
            let t = this.nodes[e],
              r = t.spec.content || "",
              o = t.spec.marks;
            (t.contentMatch = n[r] || (n[r] = P.parse(r, this.nodes))),
              (t.inlineContent = t.contentMatch.inlineContent),
              (t.markSet =
                "_" == o
                  ? null
                  : o
                  ? U(this, o.split(" "))
                  : "" != o && t.inlineContent
                  ? null
                  : []);
          }
          for (let e in this.marks) {
            let t = this.marks[e],
              n = t.spec.excludes;
            t.excluded = null == n ? [t] : "" == n ? [] : U(this, n.split(" "));
          }
          (this.nodeFromJSON = this.nodeFromJSON.bind(this)),
            (this.markFromJSON = this.markFromJSON.bind(this)),
            (this.topNodeType = this.nodes[this.spec.topNode || "doc"]),
            (this.cached.wrappings = Object.create(null));
        }
        node(e, t = null, n, r) {
          if ("string" == typeof e) e = this.nodeType(e);
          else {
            if (!(e instanceof J))
              throw new RangeError("Invalid node type: " + e);
            if (e.schema != this)
              throw new RangeError(
                "Node type from different schema used (" + e.name + ")"
              );
          }
          return e.createChecked(t, n, r);
        }
        text(e, t) {
          let n = this.nodes.text;
          return new A(n, n.defaultAttrs, e, d.setFrom(t));
        }
        mark(e, t) {
          return "string" == typeof e && (e = this.marks[e]), e.create(t);
        }
        nodeFromJSON(e) {
          return D.fromJSON(this, e);
        }
        markFromJSON(e) {
          return d.fromJSON(this, e);
        }
        nodeType(e) {
          let t = this.nodes[e];
          if (!t) throw new RangeError("Unknown node type: " + e);
          return t;
        }
      }
      function U(e, t) {
        let n = [];
        for (let r = 0; r < t.length; r++) {
          let o = t[r],
            i = e.marks[o],
            s = i;
          if (i) n.push(i);
          else
            for (let t in e.marks) {
              let r = e.marks[t];
              ("_" == o ||
                (r.spec.group && r.spec.group.split(" ").indexOf(o) > -1)) &&
                n.push((s = r));
            }
          if (!s) throw new SyntaxError("Unknown mark type: '" + t[r] + "'");
        }
        return n;
      }
      class X {
        constructor(e, t) {
          (this.schema = e),
            (this.rules = t),
            (this.tags = []),
            (this.styles = []),
            t.forEach((e) => {
              e.tag ? this.tags.push(e) : e.style && this.styles.push(e);
            }),
            (this.normalizeLists = !this.tags.some((t) => {
              if (!/^(ul|ol)\b/.test(t.tag) || !t.node) return !1;
              let n = e.nodes[t.node];
              return n.contentMatch.matchType(n);
            }));
        }
        parse(e, t = {}) {
          let n = new se(this, t, !1);
          return n.addAll(e, t.from, t.to), n.finish();
        }
        parseSlice(e, t = {}) {
          let n = new se(this, t, !0);
          return n.addAll(e, t.from, t.to), p.maxOpen(n.finish());
        }
        matchTag(e, t, n) {
          for (
            let r = n ? this.tags.indexOf(n) + 1 : 0;
            r < this.tags.length;
            r++
          ) {
            let n = this.tags[r];
            if (
              le(e, n.tag) &&
              (void 0 === n.namespace || e.namespaceURI == n.namespace) &&
              (!n.context || t.matchesContext(n.context))
            ) {
              if (n.getAttrs) {
                let t = n.getAttrs(e);
                if (!1 === t) continue;
                n.attrs = t || void 0;
              }
              return n;
            }
          }
        }
        matchStyle(e, t, n, r) {
          for (
            let o = r ? this.styles.indexOf(r) + 1 : 0;
            o < this.styles.length;
            o++
          ) {
            let r = this.styles[o],
              i = r.style;
            if (
              !(
                0 != i.indexOf(e) ||
                (r.context && !n.matchesContext(r.context)) ||
                (i.length > e.length &&
                  (61 != i.charCodeAt(e.length) || i.slice(e.length + 1) != t))
              )
            ) {
              if (r.getAttrs) {
                let e = r.getAttrs(t);
                if (!1 === e) continue;
                r.attrs = e || void 0;
              }
              return r;
            }
          }
        }
        static schemaRules(e) {
          let t = [];
          function n(e) {
            let n = null == e.priority ? 50 : e.priority,
              r = 0;
            for (; r < t.length; r++) {
              let e = t[r];
              if ((null == e.priority ? 50 : e.priority) < n) break;
            }
            t.splice(r, 0, e);
          }
          for (let t in e.marks) {
            let r = e.marks[t].spec.parseDOM;
            r &&
              r.forEach((e) => {
                n((e = ae(e))),
                  e.mark || e.ignore || e.clearMark || (e.mark = t);
              });
          }
          for (let t in e.nodes) {
            let r = e.nodes[t].spec.parseDOM;
            r &&
              r.forEach((e) => {
                n((e = ae(e))), e.node || e.ignore || e.mark || (e.node = t);
              });
          }
          return t;
        }
        static fromSchema(e) {
          return (
            e.cached.domParser ||
            (e.cached.domParser = new X(e, X.schemaRules(e)))
          );
        }
      }
      const Z = {
          address: !0,
          article: !0,
          aside: !0,
          blockquote: !0,
          canvas: !0,
          dd: !0,
          div: !0,
          dl: !0,
          fieldset: !0,
          figcaption: !0,
          figure: !0,
          footer: !0,
          form: !0,
          h1: !0,
          h2: !0,
          h3: !0,
          h4: !0,
          h5: !0,
          h6: !0,
          header: !0,
          hgroup: !0,
          hr: !0,
          li: !0,
          noscript: !0,
          ol: !0,
          output: !0,
          p: !0,
          pre: !0,
          section: !0,
          table: !0,
          tfoot: !0,
          ul: !0,
        },
        Q = {
          head: !0,
          noscript: !0,
          object: !0,
          script: !0,
          style: !0,
          title: !0,
        },
        ee = { ol: !0, ul: !0 },
        te = 1,
        ne = 2,
        re = 4;
      function oe(e, t, n) {
        return null != t
          ? (t ? te : 0) | ("full" === t ? ne : 0)
          : e && "pre" == e.whitespace
          ? te | ne
          : n & ~re;
      }
      class ie {
        constructor(e, t, n, r, o, i, s) {
          (this.type = e),
            (this.attrs = t),
            (this.marks = n),
            (this.pendingMarks = r),
            (this.solid = o),
            (this.options = s),
            (this.content = []),
            (this.activeMarks = d.none),
            (this.stashMarks = []),
            (this.match = i || (s & re ? null : e.contentMatch));
        }
        findWrapping(e) {
          if (!this.match) {
            if (!this.type) return [];
            let t = this.type.contentMatch.fillBefore(l.from(e));
            if (!t) {
              let t,
                n = this.type.contentMatch;
              return (t = n.findWrapping(e.type))
                ? ((this.match = n), t)
                : null;
            }
            this.match = this.type.contentMatch.matchFragment(t);
          }
          return this.match.findWrapping(e.type);
        }
        finish(e) {
          if (!(this.options & te)) {
            let e,
              t = this.content[this.content.length - 1];
            if (t && t.isText && (e = /[ \t\r\n\u000c]+$/.exec(t.text))) {
              let n = t;
              t.text.length == e[0].length
                ? this.content.pop()
                : (this.content[this.content.length - 1] = n.withText(
                    n.text.slice(0, n.text.length - e[0].length)
                  ));
            }
          }
          let t = l.from(this.content);
          return (
            !e &&
              this.match &&
              (t = t.append(this.match.fillBefore(l.empty, !0))),
            this.type ? this.type.create(this.attrs, t, this.marks) : t
          );
        }
        popFromStashMark(e) {
          for (let t = this.stashMarks.length - 1; t >= 0; t--)
            if (e.eq(this.stashMarks[t]))
              return this.stashMarks.splice(t, 1)[0];
        }
        applyPending(e) {
          for (let t = 0, n = this.pendingMarks; t < n.length; t++) {
            let r = n[t];
            (this.type ? this.type.allowsMarkType(r.type) : ce(r.type, e)) &&
              !r.isInSet(this.activeMarks) &&
              ((this.activeMarks = r.addToSet(this.activeMarks)),
              (this.pendingMarks = r.removeFromSet(this.pendingMarks)));
          }
        }
        inlineContext(e) {
          return this.type
            ? this.type.inlineContent
            : this.content.length
            ? this.content[0].isInline
            : e.parentNode &&
              !Z.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
        }
      }
      class se {
        constructor(e, t, n) {
          (this.parser = e),
            (this.options = t),
            (this.isOpen = n),
            (this.open = 0);
          let r,
            o = t.topNode,
            i = oe(null, t.preserveWhitespace, 0) | (n ? re : 0);
          (r = o
            ? new ie(
                o.type,
                o.attrs,
                d.none,
                d.none,
                !0,
                t.topMatch || o.type.contentMatch,
                i
              )
            : new ie(
                n ? null : e.schema.topNodeType,
                null,
                d.none,
                d.none,
                !0,
                null,
                i
              )),
            (this.nodes = [r]),
            (this.find = t.findPositions),
            (this.needsBlock = !1);
        }
        get top() {
          return this.nodes[this.open];
        }
        addDOM(e) {
          if (3 == e.nodeType) this.addTextNode(e);
          else if (1 == e.nodeType) {
            let t = e.getAttribute("style");
            if (t) {
              let n = this.readStyles(
                (function (e) {
                  let t,
                    n = /\s*([\w-]+)\s*:\s*([^;]+)/g,
                    r = [];
                  for (; (t = n.exec(e)); ) r.push(t[1], t[2].trim());
                  return r;
                })(t)
              );
              if (!n) return;
              let [r, o] = n,
                i = this.top;
              for (let e = 0; e < o.length; e++)
                this.removePendingMark(o[e], i);
              for (let e = 0; e < r.length; e++) this.addPendingMark(r[e]);
              this.addElement(e);
              for (let e = 0; e < r.length; e++)
                this.removePendingMark(r[e], i);
              for (let e = 0; e < o.length; e++) this.addPendingMark(o[e]);
            } else this.addElement(e);
          }
        }
        addTextNode(e) {
          let t = e.nodeValue,
            n = this.top;
          if (
            n.options & ne ||
            n.inlineContext(e) ||
            /[^ \t\r\n\u000c]/.test(t)
          ) {
            if (n.options & te)
              t =
                n.options & ne
                  ? t.replace(/\r\n?/g, "\n")
                  : t.replace(/\r?\n|\r/g, " ");
            else if (
              ((t = t.replace(/[ \t\r\n\u000c]+/g, " ")),
              /^[ \t\r\n\u000c]/.test(t) && this.open == this.nodes.length - 1)
            ) {
              let r = n.content[n.content.length - 1],
                o = e.previousSibling;
              (!r ||
                (o && "BR" == o.nodeName) ||
                (r.isText && /[ \t\r\n\u000c]$/.test(r.text))) &&
                (t = t.slice(1));
            }
            t && this.insertNode(this.parser.schema.text(t)),
              this.findInText(e);
          } else this.findInside(e);
        }
        addElement(e, t) {
          let n,
            r = e.nodeName.toLowerCase();
          ee.hasOwnProperty(r) &&
            this.parser.normalizeLists &&
            (function (e) {
              for (let t = e.firstChild, n = null; t; t = t.nextSibling) {
                let e = 1 == t.nodeType ? t.nodeName.toLowerCase() : null;
                e && ee.hasOwnProperty(e) && n
                  ? (n.appendChild(t), (t = n))
                  : "li" == e
                  ? (n = t)
                  : e && (n = null);
              }
            })(e);
          let o =
            (this.options.ruleFromNode && this.options.ruleFromNode(e)) ||
            (n = this.parser.matchTag(e, this, t));
          if (o ? o.ignore : Q.hasOwnProperty(r))
            this.findInside(e), this.ignoreFallback(e);
          else if (!o || o.skip || o.closeParent) {
            o && o.closeParent
              ? (this.open = Math.max(0, this.open - 1))
              : o && o.skip.nodeType && (e = o.skip);
            let t,
              n = this.top,
              i = this.needsBlock;
            if (Z.hasOwnProperty(r))
              n.content.length &&
                n.content[0].isInline &&
                this.open &&
                (this.open--, (n = this.top)),
                (t = !0),
                n.type || (this.needsBlock = !0);
            else if (!e.firstChild) return void this.leafFallback(e);
            this.addAll(e), t && this.sync(n), (this.needsBlock = i);
          } else this.addElementByRule(e, o, !1 === o.consuming ? n : void 0);
        }
        leafFallback(e) {
          "BR" == e.nodeName &&
            this.top.type &&
            this.top.type.inlineContent &&
            this.addTextNode(e.ownerDocument.createTextNode("\n"));
        }
        ignoreFallback(e) {
          "BR" != e.nodeName ||
            (this.top.type && this.top.type.inlineContent) ||
            this.findPlace(this.parser.schema.text("-"));
        }
        readStyles(e) {
          let t = d.none,
            n = d.none;
          e: for (let r = 0; r < e.length; r += 2)
            for (let o; ; ) {
              let i = this.parser.matchStyle(e[r], e[r + 1], this, o);
              if (!i) continue e;
              if (i.ignore) return null;
              if (
                (i.clearMark
                  ? this.top.pendingMarks.forEach((e) => {
                      i.clearMark(e) && (n = e.addToSet(n));
                    })
                  : (t = this.parser.schema.marks[i.mark]
                      .create(i.attrs)
                      .addToSet(t)),
                !1 !== i.consuming)
              )
                break;
              o = i;
            }
          return [t, n];
        }
        addElementByRule(e, t, n) {
          let r, o, i;
          if (t.node)
            (o = this.parser.schema.nodes[t.node]),
              o.isLeaf
                ? this.insertNode(o.create(t.attrs)) || this.leafFallback(e)
                : (r = this.enter(o, t.attrs || null, t.preserveWhitespace));
          else {
            (i = this.parser.schema.marks[t.mark].create(t.attrs)),
              this.addPendingMark(i);
          }
          let s = this.top;
          if (o && o.isLeaf) this.findInside(e);
          else if (n) this.addElement(e, n);
          else if (t.getContent)
            this.findInside(e),
              t
                .getContent(e, this.parser.schema)
                .forEach((e) => this.insertNode(e));
          else {
            let n = e;
            "string" == typeof t.contentElement
              ? (n = e.querySelector(t.contentElement))
              : "function" == typeof t.contentElement
              ? (n = t.contentElement(e))
              : t.contentElement && (n = t.contentElement),
              this.findAround(e, n, !0),
              this.addAll(n);
          }
          r && this.sync(s) && this.open--, i && this.removePendingMark(i, s);
        }
        addAll(e, t, n) {
          let r = t || 0;
          for (
            let o = t ? e.childNodes[t] : e.firstChild,
              i = null == n ? null : e.childNodes[n];
            o != i;
            o = o.nextSibling, ++r
          )
            this.findAtPoint(e, r), this.addDOM(o);
          this.findAtPoint(e, r);
        }
        findPlace(e) {
          let t, n;
          for (let r = this.open; r >= 0; r--) {
            let o = this.nodes[r],
              i = o.findWrapping(e);
            if (
              i &&
              (!t || t.length > i.length) &&
              ((t = i), (n = o), !i.length)
            )
              break;
            if (o.solid) break;
          }
          if (!t) return !1;
          this.sync(n);
          for (let e = 0; e < t.length; e++) this.enterInner(t[e], null, !1);
          return !0;
        }
        insertNode(e) {
          if (e.isInline && this.needsBlock && !this.top.type) {
            let e = this.textblockFromContext();
            e && this.enterInner(e);
          }
          if (this.findPlace(e)) {
            this.closeExtra();
            let t = this.top;
            t.applyPending(e.type),
              t.match && (t.match = t.match.matchType(e.type));
            let n = t.activeMarks;
            for (let r = 0; r < e.marks.length; r++)
              (t.type && !t.type.allowsMarkType(e.marks[r].type)) ||
                (n = e.marks[r].addToSet(n));
            return t.content.push(e.mark(n)), !0;
          }
          return !1;
        }
        enter(e, t, n) {
          let r = this.findPlace(e.create(t));
          return r && this.enterInner(e, t, !0, n), r;
        }
        enterInner(e, t = null, n = !1, r) {
          this.closeExtra();
          let o = this.top;
          o.applyPending(e), (o.match = o.match && o.match.matchType(e));
          let i = oe(e, r, o.options);
          o.options & re && 0 == o.content.length && (i |= re),
            this.nodes.push(
              new ie(e, t, o.activeMarks, o.pendingMarks, n, null, i)
            ),
            this.open++;
        }
        closeExtra(e = !1) {
          let t = this.nodes.length - 1;
          if (t > this.open) {
            for (; t > this.open; t--)
              this.nodes[t - 1].content.push(this.nodes[t].finish(e));
            this.nodes.length = this.open + 1;
          }
        }
        finish() {
          return (
            (this.open = 0),
            this.closeExtra(this.isOpen),
            this.nodes[0].finish(this.isOpen || this.options.topOpen)
          );
        }
        sync(e) {
          for (let t = this.open; t >= 0; t--)
            if (this.nodes[t] == e) return (this.open = t), !0;
          return !1;
        }
        get currentPos() {
          this.closeExtra();
          let e = 0;
          for (let t = this.open; t >= 0; t--) {
            let n = this.nodes[t].content;
            for (let t = n.length - 1; t >= 0; t--) e += n[t].nodeSize;
            t && e++;
          }
          return e;
        }
        findAtPoint(e, t) {
          if (this.find)
            for (let n = 0; n < this.find.length; n++)
              this.find[n].node == e &&
                this.find[n].offset == t &&
                (this.find[n].pos = this.currentPos);
        }
        findInside(e) {
          if (this.find)
            for (let t = 0; t < this.find.length; t++)
              null == this.find[t].pos &&
                1 == e.nodeType &&
                e.contains(this.find[t].node) &&
                (this.find[t].pos = this.currentPos);
        }
        findAround(e, t, n) {
          if (e != t && this.find)
            for (let r = 0; r < this.find.length; r++)
              if (
                null == this.find[r].pos &&
                1 == e.nodeType &&
                e.contains(this.find[r].node)
              ) {
                t.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) &&
                  (this.find[r].pos = this.currentPos);
              }
        }
        findInText(e) {
          if (this.find)
            for (let t = 0; t < this.find.length; t++)
              this.find[t].node == e &&
                (this.find[t].pos =
                  this.currentPos - (e.nodeValue.length - this.find[t].offset));
        }
        matchesContext(e) {
          if (e.indexOf("|") > -1)
            return e.split(/\s*\|\s*/).some(this.matchesContext, this);
          let t = e.split("/"),
            n = this.options.context,
            r = !(this.isOpen || (n && n.parent.type != this.nodes[0].type)),
            o = -(n ? n.depth + 1 : 0) + (r ? 0 : 1),
            i = (e, s) => {
              for (; e >= 0; e--) {
                let l = t[e];
                if ("" == l) {
                  if (e == t.length - 1 || 0 == e) continue;
                  for (; s >= o; s--) if (i(e - 1, s)) return !0;
                  return !1;
                }
                {
                  let e =
                    s > 0 || (0 == s && r)
                      ? this.nodes[s].type
                      : n && s >= o
                      ? n.node(s - o).type
                      : null;
                  if (!e || (e.name != l && -1 == e.groups.indexOf(l)))
                    return !1;
                  s--;
                }
              }
              return !0;
            };
          return i(t.length - 1, this.open);
        }
        textblockFromContext() {
          let e = this.options.context;
          if (e)
            for (let t = e.depth; t >= 0; t--) {
              let n = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
              if (n && n.isTextblock && n.defaultAttrs) return n;
            }
          for (let e in this.parser.schema.nodes) {
            let t = this.parser.schema.nodes[e];
            if (t.isTextblock && t.defaultAttrs) return t;
          }
        }
        addPendingMark(e) {
          let t = (function (e, t) {
            for (let n = 0; n < t.length; n++) if (e.eq(t[n])) return t[n];
          })(e, this.top.pendingMarks);
          t && this.top.stashMarks.push(t),
            (this.top.pendingMarks = e.addToSet(this.top.pendingMarks));
        }
        removePendingMark(e, t) {
          for (let n = this.open; n >= 0; n--) {
            let r = this.nodes[n];
            if (r.pendingMarks.lastIndexOf(e) > -1)
              r.pendingMarks = e.removeFromSet(r.pendingMarks);
            else {
              r.activeMarks = e.removeFromSet(r.activeMarks);
              let t = r.popFromStashMark(e);
              t &&
                r.type &&
                r.type.allowsMarkType(t.type) &&
                (r.activeMarks = t.addToSet(r.activeMarks));
            }
            if (r == t) break;
          }
        }
      }
      function le(e, t) {
        return (
          e.matches ||
          e.msMatchesSelector ||
          e.webkitMatchesSelector ||
          e.mozMatchesSelector
        ).call(e, t);
      }
      function ae(e) {
        let t = {};
        for (let n in e) t[n] = e[n];
        return t;
      }
      function ce(e, t) {
        let n = t.schema.nodes;
        for (let r in n) {
          let o = n[r];
          if (!o.allowsMarkType(e)) continue;
          let i = [],
            s = (e) => {
              i.push(e);
              for (let n = 0; n < e.edgeCount; n++) {
                let { type: r, next: o } = e.edge(n);
                if (r == t) return !0;
                if (i.indexOf(o) < 0 && s(o)) return !0;
              }
            };
          if (s(o.contentMatch)) return !0;
        }
      }
      class ue {
        constructor(e, t) {
          (this.nodes = e), (this.marks = t);
        }
        serializeFragment(e, t = {}, n) {
          n || (n = he(t).createDocumentFragment());
          let r = n,
            o = [];
          return (
            e.forEach((e) => {
              if (o.length || e.marks.length) {
                let n = 0,
                  i = 0;
                for (; n < o.length && i < e.marks.length; ) {
                  let t = e.marks[i];
                  if (this.marks[t.type.name]) {
                    if (!t.eq(o[n][0]) || !1 === t.type.spec.spanning) break;
                    n++, i++;
                  } else i++;
                }
                for (; n < o.length; ) r = o.pop()[1];
                for (; i < e.marks.length; ) {
                  let n = e.marks[i++],
                    s = this.serializeMark(n, e.isInline, t);
                  s &&
                    (o.push([n, r]),
                    r.appendChild(s.dom),
                    (r = s.contentDOM || s.dom));
                }
              }
              r.appendChild(this.serializeNodeInner(e, t));
            }),
            n
          );
        }
        serializeNodeInner(e, t) {
          let { dom: n, contentDOM: r } = ue.renderSpec(
            he(t),
            this.nodes[e.type.name](e)
          );
          if (r) {
            if (e.isLeaf)
              throw new RangeError(
                "Content hole not allowed in a leaf node spec"
              );
            this.serializeFragment(e.content, t, r);
          }
          return n;
        }
        serializeNode(e, t = {}) {
          let n = this.serializeNodeInner(e, t);
          for (let r = e.marks.length - 1; r >= 0; r--) {
            let o = this.serializeMark(e.marks[r], e.isInline, t);
            o && ((o.contentDOM || o.dom).appendChild(n), (n = o.dom));
          }
          return n;
        }
        serializeMark(e, t, n = {}) {
          let r = this.marks[e.type.name];
          return r && ue.renderSpec(he(n), r(e, t));
        }
        static renderSpec(e, t, n = null) {
          if ("string" == typeof t) return { dom: e.createTextNode(t) };
          if (null != t.nodeType) return { dom: t };
          if (t.dom && null != t.dom.nodeType) return t;
          let r,
            o = t[0],
            i = o.indexOf(" ");
          i > 0 && ((n = o.slice(0, i)), (o = o.slice(i + 1)));
          let s = n ? e.createElementNS(n, o) : e.createElement(o),
            l = t[1],
            a = 1;
          if (
            l &&
            "object" == typeof l &&
            null == l.nodeType &&
            !Array.isArray(l)
          ) {
            a = 2;
            for (let e in l)
              if (null != l[e]) {
                let t = e.indexOf(" ");
                t > 0
                  ? s.setAttributeNS(e.slice(0, t), e.slice(t + 1), l[e])
                  : s.setAttribute(e, l[e]);
              }
          }
          for (let o = a; o < t.length; o++) {
            let i = t[o];
            if (0 === i) {
              if (o < t.length - 1 || o > a)
                throw new RangeError(
                  "Content hole must be the only child of its parent node"
                );
              return { dom: s, contentDOM: s };
            }
            {
              let { dom: t, contentDOM: o } = ue.renderSpec(e, i, n);
              if ((s.appendChild(t), o)) {
                if (r) throw new RangeError("Multiple content holes");
                r = o;
              }
            }
          }
          return { dom: s, contentDOM: r };
        }
        static fromSchema(e) {
          return (
            e.cached.domSerializer ||
            (e.cached.domSerializer = new ue(
              this.nodesFromSchema(e),
              this.marksFromSchema(e)
            ))
          );
        }
        static nodesFromSchema(e) {
          let t = de(e.nodes);
          return t.text || (t.text = (e) => e.text), t;
        }
        static marksFromSchema(e) {
          return de(e.marks);
        }
      }
      function de(e) {
        let t = {};
        for (let n in e) {
          let r = e[n].spec.toDOM;
          r && (t[n] = r);
        }
        return t;
      }
      function he(e) {
        return e.document || window.document;
      }
    },
    53833: (e, t, n) => {
      "use strict";
      n.d(t, {
        IB: () => f,
        KI: () => h,
        bw: () => m,
        dq: () => c,
        iI: () => u,
        qb: () => d,
        s6: () => p,
      });
      var r = n(16560),
        o = n(87823),
        i = n(2376);
      const s = ["ol", 0],
        l = ["ul", 0],
        a = ["li", 0],
        c = {
          attrs: { order: { default: 1 } },
          parseDOM: [
            {
              tag: "ol",
              getAttrs: (e) => ({
                order: e.hasAttribute("start") ? +e.getAttribute("start") : 1,
              }),
            },
          ],
          toDOM: (e) =>
            1 == e.attrs.order ? s : ["ol", { start: e.attrs.order }, 0],
        },
        u = { parseDOM: [{ tag: "ul" }], toDOM: () => l },
        d = { parseDOM: [{ tag: "li" }], toDOM: () => a, defining: !0 };
      function h(e, t = null) {
        return function (n, i) {
          let { $from: s, $to: l } = n.selection,
            a = s.blockRange(l),
            c = !1,
            u = a;
          if (!a) return !1;
          if (
            a.depth >= 2 &&
            s.node(a.depth - 1).type.compatibleContent(e) &&
            0 == a.startIndex
          ) {
            if (0 == s.index(a.depth - 1)) return !1;
            let e = n.doc.resolve(a.start - 2);
            (u = new o.Ts(e, e, a.depth)),
              a.endIndex < a.parent.childCount &&
                (a = new o.Ts(s, n.doc.resolve(l.end(a.depth)), a.depth)),
              (c = !0);
          }
          let d = (0, r.nd)(u, e, t, a);
          return (
            !!d &&
            (i &&
              i(
                (function (e, t, n, i, s) {
                  let l = o.HY.empty;
                  for (let e = n.length - 1; e >= 0; e--)
                    l = o.HY.from(n[e].type.create(n[e].attrs, l));
                  e.step(
                    new r.FC(
                      t.start - (i ? 2 : 0),
                      t.end,
                      t.start,
                      t.end,
                      new o.p2(l, 0, 0),
                      n.length,
                      !0
                    )
                  );
                  let a = 0;
                  for (let e = 0; e < n.length; e++)
                    n[e].type == s && (a = e + 1);
                  let c = n.length - a,
                    u = t.start + n.length - (i ? 2 : 0),
                    d = t.parent;
                  for (
                    let n = t.startIndex, o = t.endIndex, i = !0;
                    n < o;
                    n++, i = !1
                  )
                    !i &&
                      (0, r.Ax)(e.doc, u, c) &&
                      (e.split(u, c), (u += 2 * c)),
                      (u += d.child(n).nodeSize);
                  return e;
                })(n.tr, a, d, c, e).scrollIntoView()
              ),
            !0)
          );
        };
      }
      function p(e) {
        return function (t, n) {
          let { $from: s, $to: l, node: a } = t.selection;
          if ((a && a.isBlock) || s.depth < 2 || !s.sameParent(l)) return !1;
          let c = s.node(-1);
          if (c.type != e) return !1;
          if (
            0 == s.parent.content.size &&
            s.node(-1).childCount == s.indexAfter(-1)
          ) {
            if (
              3 == s.depth ||
              s.node(-3).type != e ||
              s.index(-2) != s.node(-2).childCount - 1
            )
              return !1;
            if (n) {
              let r = o.HY.empty,
                l = s.index(-1) ? 1 : s.index(-2) ? 2 : 3;
              for (let e = s.depth - l; e >= s.depth - 3; e--)
                r = o.HY.from(s.node(e).copy(r));
              let a =
                s.indexAfter(-1) < s.node(-2).childCount
                  ? 1
                  : s.indexAfter(-2) < s.node(-3).childCount
                  ? 2
                  : 3;
              r = r.append(o.HY.from(e.createAndFill()));
              let c = s.before(s.depth - (l - 1)),
                u = t.tr.replace(c, s.after(-a), new o.p2(r, 4 - l, 0)),
                d = -1;
              u.doc.nodesBetween(c, u.doc.content.size, (e, t) => {
                if (d > -1) return !1;
                e.isTextblock && 0 == e.content.size && (d = t + 1);
              }),
                d > -1 && u.setSelection(i.Y1.near(u.doc.resolve(d))),
                n(u.scrollIntoView());
            }
            return !0;
          }
          let u = l.pos == s.end() ? c.contentMatchAt(0).defaultType : null,
            d = t.tr.delete(s.pos, l.pos),
            h = u ? [null, { type: u }] : void 0;
          return (
            !!(0, r.Ax)(d.doc, s.pos, 2, h) &&
            (n && n(d.split(s.pos, 2, h).scrollIntoView()), !0)
          );
        };
      }
      function f(e) {
        return function (t, n) {
          let { $from: i, $to: s } = t.selection,
            l = i.blockRange(
              s,
              (t) => t.childCount > 0 && t.firstChild.type == e
            );
          return (
            !!l &&
            (!n ||
              (i.node(l.depth - 1).type == e
                ? (function (e, t, n, i) {
                    let s = e.tr,
                      l = i.end,
                      a = i.$to.end(i.depth);
                    l < a &&
                      (s.step(
                        new r.FC(
                          l - 1,
                          a,
                          l,
                          a,
                          new o.p2(
                            o.HY.from(n.create(null, i.parent.copy())),
                            1,
                            0
                          ),
                          1,
                          !0
                        )
                      ),
                      (i = new o.Ts(
                        s.doc.resolve(i.$from.pos),
                        s.doc.resolve(a),
                        i.depth
                      )));
                    const c = (0, r.k9)(i);
                    if (null == c) return !1;
                    s.lift(i, c);
                    let u = s.mapping.map(l, -1) - 1;
                    (0, r.Mn)(s.doc, u) && s.join(u);
                    return t(s.scrollIntoView()), !0;
                  })(t, n, e, l)
                : (function (e, t, n) {
                    let i = e.tr,
                      s = n.parent;
                    for (
                      let e = n.end, t = n.endIndex - 1, r = n.startIndex;
                      t > r;
                      t--
                    )
                      (e -= s.child(t).nodeSize), i.delete(e - 1, e + 1);
                    let l = i.doc.resolve(n.start),
                      a = l.nodeAfter;
                    if (i.mapping.map(n.end) != n.start + l.nodeAfter.nodeSize)
                      return !1;
                    let c = 0 == n.startIndex,
                      u = n.endIndex == s.childCount,
                      d = l.node(-1),
                      h = l.index(-1);
                    if (
                      !d.canReplace(
                        h + (c ? 0 : 1),
                        h + 1,
                        a.content.append(u ? o.HY.empty : o.HY.from(s))
                      )
                    )
                      return !1;
                    let p = l.pos,
                      f = p + a.nodeSize;
                    return (
                      i.step(
                        new r.FC(
                          p - (c ? 1 : 0),
                          f + (u ? 1 : 0),
                          p + 1,
                          f - 1,
                          new o.p2(
                            (c
                              ? o.HY.empty
                              : o.HY.from(s.copy(o.HY.empty))
                            ).append(
                              u ? o.HY.empty : o.HY.from(s.copy(o.HY.empty))
                            ),
                            c ? 0 : 1,
                            u ? 0 : 1
                          ),
                          c ? 0 : 1
                        )
                      ),
                      t(i.scrollIntoView()),
                      !0
                    );
                  })(t, n, l)))
          );
        };
      }
      function m(e) {
        return function (t, n) {
          let { $from: i, $to: s } = t.selection,
            l = i.blockRange(
              s,
              (t) => t.childCount > 0 && t.firstChild.type == e
            );
          if (!l) return !1;
          let a = l.startIndex;
          if (0 == a) return !1;
          let c = l.parent,
            u = c.child(a - 1);
          if (u.type != e) return !1;
          if (n) {
            let i = u.lastChild && u.lastChild.type == c.type,
              s = o.HY.from(i ? e.create() : null),
              a = new o.p2(
                o.HY.from(e.create(null, o.HY.from(c.type.create(null, s)))),
                i ? 3 : 1,
                0
              ),
              d = l.start,
              h = l.end;
            n(
              t.tr
                .step(new r.FC(d - (i ? 3 : 1), h, d, h, a, 1, !0))
                .scrollIntoView()
            );
          }
          return !0;
        };
      }
    },
    2376: (e, t, n) => {
      "use strict";
      n.d(t, {
        Bs: () => u,
        C1: () => f,
        H$: () => T,
        Sy: () => R,
        Y1: () => s,
        qv: () => h,
        yy: () => k,
      });
      var r = n(87823),
        o = n(16560);
      const i = Object.create(null);
      class s {
        constructor(e, t, n) {
          (this.$anchor = e),
            (this.$head = t),
            (this.ranges = n || [new l(e.min(t), e.max(t))]);
        }
        get anchor() {
          return this.$anchor.pos;
        }
        get head() {
          return this.$head.pos;
        }
        get from() {
          return this.$from.pos;
        }
        get to() {
          return this.$to.pos;
        }
        get $from() {
          return this.ranges[0].$from;
        }
        get $to() {
          return this.ranges[0].$to;
        }
        get empty() {
          let e = this.ranges;
          for (let t = 0; t < e.length; t++)
            if (e[t].$from.pos != e[t].$to.pos) return !1;
          return !0;
        }
        content() {
          return this.$from.doc.slice(this.from, this.to, !0);
        }
        replace(e, t = r.p2.empty) {
          let n = t.content.lastChild,
            o = null;
          for (let e = 0; e < t.openEnd; e++) (o = n), (n = n.lastChild);
          let i = e.steps.length,
            s = this.ranges;
          for (let l = 0; l < s.length; l++) {
            let { $from: a, $to: c } = s[l],
              u = e.mapping.slice(i);
            e.replaceRange(u.map(a.pos), u.map(c.pos), l ? r.p2.empty : t),
              0 == l && y(e, i, (n ? n.isInline : o && o.isTextblock) ? -1 : 1);
          }
        }
        replaceWith(e, t) {
          let n = e.steps.length,
            r = this.ranges;
          for (let o = 0; o < r.length; o++) {
            let { $from: i, $to: s } = r[o],
              l = e.mapping.slice(n),
              a = l.map(i.pos),
              c = l.map(s.pos);
            o
              ? e.deleteRange(a, c)
              : (e.replaceRangeWith(a, c, t), y(e, n, t.isInline ? -1 : 1));
          }
        }
        static findFrom(e, t, n = !1) {
          let r = e.parent.inlineContent
            ? new u(e)
            : g(e.node(0), e.parent, e.pos, e.index(), t, n);
          if (r) return r;
          for (let r = e.depth - 1; r >= 0; r--) {
            let o =
              t < 0
                ? g(e.node(0), e.node(r), e.before(r + 1), e.index(r), t, n)
                : g(e.node(0), e.node(r), e.after(r + 1), e.index(r) + 1, t, n);
            if (o) return o;
          }
          return null;
        }
        static near(e, t = 1) {
          return (
            this.findFrom(e, t) || this.findFrom(e, -t) || new f(e.node(0))
          );
        }
        static atStart(e) {
          return g(e, e, 0, 0, 1) || new f(e);
        }
        static atEnd(e) {
          return g(e, e, e.content.size, e.childCount, -1) || new f(e);
        }
        static fromJSON(e, t) {
          if (!t || !t.type)
            throw new RangeError("Invalid input for Selection.fromJSON");
          let n = i[t.type];
          if (!n) throw new RangeError(`No selection type ${t.type} defined`);
          return n.fromJSON(e, t);
        }
        static jsonID(e, t) {
          if (e in i)
            throw new RangeError("Duplicate use of selection JSON ID " + e);
          return (i[e] = t), (t.prototype.jsonID = e), t;
        }
        getBookmark() {
          return u.between(this.$anchor, this.$head).getBookmark();
        }
      }
      s.prototype.visible = !0;
      class l {
        constructor(e, t) {
          (this.$from = e), (this.$to = t);
        }
      }
      let a = !1;
      function c(e) {
        a ||
          e.parent.inlineContent ||
          ((a = !0),
          console.warn(
            "TextSelection endpoint not pointing into a node with inline content (" +
              e.parent.type.name +
              ")"
          ));
      }
      class u extends s {
        constructor(e, t = e) {
          c(e), c(t), super(e, t);
        }
        get $cursor() {
          return this.$anchor.pos == this.$head.pos ? this.$head : null;
        }
        map(e, t) {
          let n = e.resolve(t.map(this.head));
          if (!n.parent.inlineContent) return s.near(n);
          let r = e.resolve(t.map(this.anchor));
          return new u(r.parent.inlineContent ? r : n, n);
        }
        replace(e, t = r.p2.empty) {
          if ((super.replace(e, t), t == r.p2.empty)) {
            let t = this.$from.marksAcross(this.$to);
            t && e.ensureMarks(t);
          }
        }
        eq(e) {
          return (
            e instanceof u && e.anchor == this.anchor && e.head == this.head
          );
        }
        getBookmark() {
          return new d(this.anchor, this.head);
        }
        toJSON() {
          return { type: "text", anchor: this.anchor, head: this.head };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.anchor || "number" != typeof t.head)
            throw new RangeError("Invalid input for TextSelection.fromJSON");
          return new u(e.resolve(t.anchor), e.resolve(t.head));
        }
        static create(e, t, n = t) {
          let r = e.resolve(t);
          return new this(r, n == t ? r : e.resolve(n));
        }
        static between(e, t, n) {
          let r = e.pos - t.pos;
          if (((n && !r) || (n = r >= 0 ? 1 : -1), !t.parent.inlineContent)) {
            let e = s.findFrom(t, n, !0) || s.findFrom(t, -n, !0);
            if (!e) return s.near(t, n);
            t = e.$head;
          }
          return (
            e.parent.inlineContent ||
              ((0 == r ||
                (e = (s.findFrom(e, -n, !0) || s.findFrom(e, n, !0)).$anchor)
                  .pos <
                  t.pos !=
                  r < 0) &&
                (e = t)),
            new u(e, t)
          );
        }
      }
      s.jsonID("text", u);
      class d {
        constructor(e, t) {
          (this.anchor = e), (this.head = t);
        }
        map(e) {
          return new d(e.map(this.anchor), e.map(this.head));
        }
        resolve(e) {
          return u.between(e.resolve(this.anchor), e.resolve(this.head));
        }
      }
      class h extends s {
        constructor(e) {
          let t = e.nodeAfter,
            n = e.node(0).resolve(e.pos + t.nodeSize);
          super(e, n), (this.node = t);
        }
        map(e, t) {
          let { deleted: n, pos: r } = t.mapResult(this.anchor),
            o = e.resolve(r);
          return n ? s.near(o) : new h(o);
        }
        content() {
          return new r.p2(r.HY.from(this.node), 0, 0);
        }
        eq(e) {
          return e instanceof h && e.anchor == this.anchor;
        }
        toJSON() {
          return { type: "node", anchor: this.anchor };
        }
        getBookmark() {
          return new p(this.anchor);
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.anchor)
            throw new RangeError("Invalid input for NodeSelection.fromJSON");
          return new h(e.resolve(t.anchor));
        }
        static create(e, t) {
          return new h(e.resolve(t));
        }
        static isSelectable(e) {
          return !e.isText && !1 !== e.type.spec.selectable;
        }
      }
      (h.prototype.visible = !1), s.jsonID("node", h);
      class p {
        constructor(e) {
          this.anchor = e;
        }
        map(e) {
          let { deleted: t, pos: n } = e.mapResult(this.anchor);
          return t ? new d(n, n) : new p(n);
        }
        resolve(e) {
          let t = e.resolve(this.anchor),
            n = t.nodeAfter;
          return n && h.isSelectable(n) ? new h(t) : s.near(t);
        }
      }
      class f extends s {
        constructor(e) {
          super(e.resolve(0), e.resolve(e.content.size));
        }
        replace(e, t = r.p2.empty) {
          if (t == r.p2.empty) {
            e.delete(0, e.doc.content.size);
            let t = s.atStart(e.doc);
            t.eq(e.selection) || e.setSelection(t);
          } else super.replace(e, t);
        }
        toJSON() {
          return { type: "all" };
        }
        static fromJSON(e) {
          return new f(e);
        }
        map(e) {
          return new f(e);
        }
        eq(e) {
          return e instanceof f;
        }
        getBookmark() {
          return m;
        }
      }
      s.jsonID("all", f);
      const m = {
        map() {
          return this;
        },
        resolve: (e) => new f(e),
      };
      function g(e, t, n, r, o, i = !1) {
        if (t.inlineContent) return u.create(e, n);
        for (
          let s = r - (o > 0 ? 0 : 1);
          o > 0 ? s < t.childCount : s >= 0;
          s += o
        ) {
          let r = t.child(s);
          if (r.isAtom) {
            if (!i && h.isSelectable(r))
              return h.create(e, n - (o < 0 ? r.nodeSize : 0));
          } else {
            let t = g(e, r, n + o, o < 0 ? r.childCount : 0, o, i);
            if (t) return t;
          }
          n += r.nodeSize * o;
        }
        return null;
      }
      function y(e, t, n) {
        let r = e.steps.length - 1;
        if (r < t) return;
        let i,
          l = e.steps[r];
        (l instanceof o.Pu || l instanceof o.FC) &&
          (e.mapping.maps[r].forEach((e, t, n, r) => {
            null == i && (i = r);
          }),
          e.setSelection(s.near(e.doc.resolve(i), n)));
      }
      class v extends o.wx {
        constructor(e) {
          super(e.doc),
            (this.curSelectionFor = 0),
            (this.updated = 0),
            (this.meta = Object.create(null)),
            (this.time = Date.now()),
            (this.curSelection = e.selection),
            (this.storedMarks = e.storedMarks);
        }
        get selection() {
          return (
            this.curSelectionFor < this.steps.length &&
              ((this.curSelection = this.curSelection.map(
                this.doc,
                this.mapping.slice(this.curSelectionFor)
              )),
              (this.curSelectionFor = this.steps.length)),
            this.curSelection
          );
        }
        setSelection(e) {
          if (e.$from.doc != this.doc)
            throw new RangeError(
              "Selection passed to setSelection must point at the current document"
            );
          return (
            (this.curSelection = e),
            (this.curSelectionFor = this.steps.length),
            (this.updated = -3 & (1 | this.updated)),
            (this.storedMarks = null),
            this
          );
        }
        get selectionSet() {
          return (1 & this.updated) > 0;
        }
        setStoredMarks(e) {
          return (this.storedMarks = e), (this.updated |= 2), this;
        }
        ensureMarks(e) {
          return (
            r.vc.sameSet(this.storedMarks || this.selection.$from.marks(), e) ||
              this.setStoredMarks(e),
            this
          );
        }
        addStoredMark(e) {
          return this.ensureMarks(
            e.addToSet(this.storedMarks || this.selection.$head.marks())
          );
        }
        removeStoredMark(e) {
          return this.ensureMarks(
            e.removeFromSet(this.storedMarks || this.selection.$head.marks())
          );
        }
        get storedMarksSet() {
          return (2 & this.updated) > 0;
        }
        addStep(e, t) {
          super.addStep(e, t),
            (this.updated = -3 & this.updated),
            (this.storedMarks = null);
        }
        setTime(e) {
          return (this.time = e), this;
        }
        replaceSelection(e) {
          return this.selection.replace(this, e), this;
        }
        replaceSelectionWith(e, t = !0) {
          let n = this.selection;
          return (
            t &&
              (e = e.mark(
                this.storedMarks ||
                  (n.empty
                    ? n.$from.marks()
                    : n.$from.marksAcross(n.$to) || r.vc.none)
              )),
            n.replaceWith(this, e),
            this
          );
        }
        deleteSelection() {
          return this.selection.replace(this), this;
        }
        insertText(e, t, n) {
          let r = this.doc.type.schema;
          if (null == t)
            return e
              ? this.replaceSelectionWith(r.text(e), !0)
              : this.deleteSelection();
          {
            if ((null == n && (n = t), (n = null == n ? t : n), !e))
              return this.deleteRange(t, n);
            let o = this.storedMarks;
            if (!o) {
              let e = this.doc.resolve(t);
              o = n == t ? e.marks() : e.marksAcross(this.doc.resolve(n));
            }
            return (
              this.replaceRangeWith(t, n, r.text(e, o)),
              this.selection.empty ||
                this.setSelection(s.near(this.selection.$to)),
              this
            );
          }
        }
        setMeta(e, t) {
          return (this.meta["string" == typeof e ? e : e.key] = t), this;
        }
        getMeta(e) {
          return this.meta["string" == typeof e ? e : e.key];
        }
        get isGeneric() {
          for (let e in this.meta) return !1;
          return !0;
        }
        scrollIntoView() {
          return (this.updated |= 4), this;
        }
        get scrolledIntoView() {
          return (4 & this.updated) > 0;
        }
      }
      function w(e, t) {
        return t && e ? e.bind(t) : e;
      }
      class b {
        constructor(e, t, n) {
          (this.name = e),
            (this.init = w(t.init, n)),
            (this.apply = w(t.apply, n));
        }
      }
      const S = [
        new b("doc", {
          init: (e) => e.doc || e.schema.topNodeType.createAndFill(),
          apply: (e) => e.doc,
        }),
        new b("selection", {
          init: (e, t) => e.selection || s.atStart(t.doc),
          apply: (e) => e.selection,
        }),
        new b("storedMarks", {
          init: (e) => e.storedMarks || null,
          apply: (e, t, n, r) => (r.selection.$cursor ? e.storedMarks : null),
        }),
        new b("scrollToSelection", {
          init: () => 0,
          apply: (e, t) => (e.scrolledIntoView ? t + 1 : t),
        }),
      ];
      class x {
        constructor(e, t) {
          (this.schema = e),
            (this.plugins = []),
            (this.pluginsByKey = Object.create(null)),
            (this.fields = S.slice()),
            t &&
              t.forEach((e) => {
                if (this.pluginsByKey[e.key])
                  throw new RangeError(
                    "Adding different instances of a keyed plugin (" +
                      e.key +
                      ")"
                  );
                this.plugins.push(e),
                  (this.pluginsByKey[e.key] = e),
                  e.spec.state &&
                    this.fields.push(new b(e.key, e.spec.state, e));
              });
        }
      }
      class k {
        constructor(e) {
          this.config = e;
        }
        get schema() {
          return this.config.schema;
        }
        get plugins() {
          return this.config.plugins;
        }
        apply(e) {
          return this.applyTransaction(e).state;
        }
        filterTransaction(e, t = -1) {
          for (let n = 0; n < this.config.plugins.length; n++)
            if (n != t) {
              let t = this.config.plugins[n];
              if (
                t.spec.filterTransaction &&
                !t.spec.filterTransaction.call(t, e, this)
              )
                return !1;
            }
          return !0;
        }
        applyTransaction(e) {
          if (!this.filterTransaction(e))
            return { state: this, transactions: [] };
          let t = [e],
            n = this.applyInner(e),
            r = null;
          for (;;) {
            let o = !1;
            for (let i = 0; i < this.config.plugins.length; i++) {
              let s = this.config.plugins[i];
              if (s.spec.appendTransaction) {
                let l = r ? r[i].n : 0,
                  a = r ? r[i].state : this,
                  c =
                    l < t.length &&
                    s.spec.appendTransaction.call(s, l ? t.slice(l) : t, a, n);
                if (c && n.filterTransaction(c, i)) {
                  if ((c.setMeta("appendedTransaction", e), !r)) {
                    r = [];
                    for (let e = 0; e < this.config.plugins.length; e++)
                      r.push(
                        e < i
                          ? { state: n, n: t.length }
                          : { state: this, n: 0 }
                      );
                  }
                  t.push(c), (n = n.applyInner(c)), (o = !0);
                }
                r && (r[i] = { state: n, n: t.length });
              }
            }
            if (!o) return { state: n, transactions: t };
          }
        }
        applyInner(e) {
          if (!e.before.eq(this.doc))
            throw new RangeError("Applying a mismatched transaction");
          let t = new k(this.config),
            n = this.config.fields;
          for (let r = 0; r < n.length; r++) {
            let o = n[r];
            t[o.name] = o.apply(e, this[o.name], this, t);
          }
          return t;
        }
        get tr() {
          return new v(this);
        }
        static create(e) {
          let t = new x(e.doc ? e.doc.type.schema : e.schema, e.plugins),
            n = new k(t);
          for (let r = 0; r < t.fields.length; r++)
            n[t.fields[r].name] = t.fields[r].init(e, n);
          return n;
        }
        reconfigure(e) {
          let t = new x(this.schema, e.plugins),
            n = t.fields,
            r = new k(t);
          for (let t = 0; t < n.length; t++) {
            let o = n[t].name;
            r[o] = this.hasOwnProperty(o) ? this[o] : n[t].init(e, r);
          }
          return r;
        }
        toJSON(e) {
          let t = {
            doc: this.doc.toJSON(),
            selection: this.selection.toJSON(),
          };
          if (
            (this.storedMarks &&
              (t.storedMarks = this.storedMarks.map((e) => e.toJSON())),
            e && "object" == typeof e)
          )
            for (let n in e) {
              if ("doc" == n || "selection" == n)
                throw new RangeError(
                  "The JSON fields `doc` and `selection` are reserved"
                );
              let r = e[n],
                o = r.spec.state;
              o && o.toJSON && (t[n] = o.toJSON.call(r, this[r.key]));
            }
          return t;
        }
        static fromJSON(e, t, n) {
          if (!t)
            throw new RangeError("Invalid input for EditorState.fromJSON");
          if (!e.schema)
            throw new RangeError("Required config field 'schema' missing");
          let o = new x(e.schema, e.plugins),
            i = new k(o);
          return (
            o.fields.forEach((o) => {
              if ("doc" == o.name) i.doc = r.NB.fromJSON(e.schema, t.doc);
              else if ("selection" == o.name)
                i.selection = s.fromJSON(i.doc, t.selection);
              else if ("storedMarks" == o.name)
                t.storedMarks &&
                  (i.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
              else {
                if (n)
                  for (let r in n) {
                    let s = n[r],
                      l = s.spec.state;
                    if (
                      s.key == o.name &&
                      l &&
                      l.fromJSON &&
                      Object.prototype.hasOwnProperty.call(t, r)
                    )
                      return void (i[o.name] = l.fromJSON.call(s, e, t[r], i));
                  }
                i[o.name] = o.init(e, i);
              }
            }),
            i
          );
        }
      }
      function C(e, t, n) {
        for (let r in e) {
          let o = e[r];
          o instanceof Function
            ? (o = o.bind(t))
            : "handleDOMEvents" == r && (o = C(o, t, {})),
            (n[r] = o);
        }
        return n;
      }
      class R {
        constructor(e) {
          (this.spec = e),
            (this.props = {}),
            e.props && C(e.props, this, this.props),
            (this.key = e.key ? e.key.key : O("plugin"));
        }
        getState(e) {
          return e[this.key];
        }
      }
      const M = Object.create(null);
      function O(e) {
        return e in M ? e + "$" + ++M[e] : ((M[e] = 0), e + "$");
      }
      class T {
        constructor(e = "key") {
          this.key = O(e);
        }
        get(e) {
          return e.config.pluginsByKey[this.key];
        }
        getState(e) {
          return e[this.key];
        }
      }
    },
    16560: (e, t, n) => {
      "use strict";
      n.d(t, {
        Ax: () => C,
        FC: () => v,
        Mn: () => R,
        Pu: () => y,
        dR: () => T,
        k9: () => S,
        nd: () => x,
        nj: () => O,
        vs: () => a,
        wx: () => W,
      });
      var r = n(87823);
      const o = Math.pow(2, 16);
      function i(e) {
        return 65535 & e;
      }
      class s {
        constructor(e, t, n) {
          (this.pos = e), (this.delInfo = t), (this.recover = n);
        }
        get deleted() {
          return (8 & this.delInfo) > 0;
        }
        get deletedBefore() {
          return (5 & this.delInfo) > 0;
        }
        get deletedAfter() {
          return (6 & this.delInfo) > 0;
        }
        get deletedAcross() {
          return (4 & this.delInfo) > 0;
        }
      }
      class l {
        constructor(e, t = !1) {
          if (((this.ranges = e), (this.inverted = t), !e.length && l.empty))
            return l.empty;
        }
        recover(e) {
          let t = 0,
            n = i(e);
          if (!this.inverted)
            for (let e = 0; e < n; e++)
              t += this.ranges[3 * e + 2] - this.ranges[3 * e + 1];
          return (
            this.ranges[3 * n] +
            t +
            (function (e) {
              return (e - (65535 & e)) / o;
            })(e)
          );
        }
        mapResult(e, t = 1) {
          return this._map(e, t, !1);
        }
        map(e, t = 1) {
          return this._map(e, t, !0);
        }
        _map(e, t, n) {
          let r = 0,
            i = this.inverted ? 2 : 1,
            l = this.inverted ? 1 : 2;
          for (let a = 0; a < this.ranges.length; a += 3) {
            let c = this.ranges[a] - (this.inverted ? r : 0);
            if (c > e) break;
            let u = this.ranges[a + i],
              d = this.ranges[a + l],
              h = c + u;
            if (e <= h) {
              let i =
                c + r + ((u ? (e == c ? -1 : e == h ? 1 : t) : t) < 0 ? 0 : d);
              if (n) return i;
              let l = e == (t < 0 ? c : h) ? null : a / 3 + (e - c) * o,
                p = e == c ? 2 : e == h ? 1 : 4;
              return (t < 0 ? e != c : e != h) && (p |= 8), new s(i, p, l);
            }
            r += d - u;
          }
          return n ? e + r : new s(e + r, 0, null);
        }
        touches(e, t) {
          let n = 0,
            r = i(t),
            o = this.inverted ? 2 : 1,
            s = this.inverted ? 1 : 2;
          for (let t = 0; t < this.ranges.length; t += 3) {
            let i = this.ranges[t] - (this.inverted ? n : 0);
            if (i > e) break;
            let l = this.ranges[t + o];
            if (e <= i + l && t == 3 * r) return !0;
            n += this.ranges[t + s] - l;
          }
          return !1;
        }
        forEach(e) {
          let t = this.inverted ? 2 : 1,
            n = this.inverted ? 1 : 2;
          for (let r = 0, o = 0; r < this.ranges.length; r += 3) {
            let i = this.ranges[r],
              s = i - (this.inverted ? o : 0),
              l = i + (this.inverted ? 0 : o),
              a = this.ranges[r + t],
              c = this.ranges[r + n];
            e(s, s + a, l, l + c), (o += c - a);
          }
        }
        invert() {
          return new l(this.ranges, !this.inverted);
        }
        toString() {
          return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
        }
        static offset(e) {
          return 0 == e ? l.empty : new l(e < 0 ? [0, -e, 0] : [0, 0, e]);
        }
      }
      l.empty = new l([]);
      class a {
        constructor(e = [], t, n = 0, r = e.length) {
          (this.maps = e), (this.mirror = t), (this.from = n), (this.to = r);
        }
        slice(e = 0, t = this.maps.length) {
          return new a(this.maps, this.mirror, e, t);
        }
        copy() {
          return new a(
            this.maps.slice(),
            this.mirror && this.mirror.slice(),
            this.from,
            this.to
          );
        }
        appendMap(e, t) {
          (this.to = this.maps.push(e)),
            null != t && this.setMirror(this.maps.length - 1, t);
        }
        appendMapping(e) {
          for (let t = 0, n = this.maps.length; t < e.maps.length; t++) {
            let r = e.getMirror(t);
            this.appendMap(e.maps[t], null != r && r < t ? n + r : void 0);
          }
        }
        getMirror(e) {
          if (this.mirror)
            for (let t = 0; t < this.mirror.length; t++)
              if (this.mirror[t] == e) return this.mirror[t + (t % 2 ? -1 : 1)];
        }
        setMirror(e, t) {
          this.mirror || (this.mirror = []), this.mirror.push(e, t);
        }
        appendMappingInverted(e) {
          for (
            let t = e.maps.length - 1, n = this.maps.length + e.maps.length;
            t >= 0;
            t--
          ) {
            let r = e.getMirror(t);
            this.appendMap(
              e.maps[t].invert(),
              null != r && r > t ? n - r - 1 : void 0
            );
          }
        }
        invert() {
          let e = new a();
          return e.appendMappingInverted(this), e;
        }
        map(e, t = 1) {
          if (this.mirror) return this._map(e, t, !0);
          for (let n = this.from; n < this.to; n++) e = this.maps[n].map(e, t);
          return e;
        }
        mapResult(e, t = 1) {
          return this._map(e, t, !1);
        }
        _map(e, t, n) {
          let r = 0;
          for (let n = this.from; n < this.to; n++) {
            let o = this.maps[n].mapResult(e, t);
            if (null != o.recover) {
              let t = this.getMirror(n);
              if (null != t && t > n && t < this.to) {
                (n = t), (e = this.maps[t].recover(o.recover));
                continue;
              }
            }
            (r |= o.delInfo), (e = o.pos);
          }
          return n ? e : new s(e, r, null);
        }
      }
      const c = Object.create(null);
      class u {
        getMap() {
          return l.empty;
        }
        merge(e) {
          return null;
        }
        static fromJSON(e, t) {
          if (!t || !t.stepType)
            throw new RangeError("Invalid input for Step.fromJSON");
          let n = c[t.stepType];
          if (!n) throw new RangeError(`No step type ${t.stepType} defined`);
          return n.fromJSON(e, t);
        }
        static jsonID(e, t) {
          if (e in c)
            throw new RangeError("Duplicate use of step JSON ID " + e);
          return (c[e] = t), (t.prototype.jsonID = e), t;
        }
      }
      class d {
        constructor(e, t) {
          (this.doc = e), (this.failed = t);
        }
        static ok(e) {
          return new d(e, null);
        }
        static fail(e) {
          return new d(null, e);
        }
        static fromReplace(e, t, n, o) {
          try {
            return d.ok(e.replace(t, n, o));
          } catch (e) {
            if (e instanceof r.e4) return d.fail(e.message);
            throw e;
          }
        }
      }
      function h(e, t, n) {
        let o = [];
        for (let r = 0; r < e.childCount; r++) {
          let i = e.child(r);
          i.content.size && (i = i.copy(h(i.content, t, i))),
            i.isInline && (i = t(i, n, r)),
            o.push(i);
        }
        return r.HY.fromArray(o);
      }
      class p extends u {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = e.resolve(this.from),
            o = n.node(n.sharedDepth(this.to)),
            i = new r.p2(
              h(
                t.content,
                (e, t) =>
                  e.isAtom && t.type.allowsMarkType(this.mark.type)
                    ? e.mark(this.mark.addToSet(e.marks))
                    : e,
                o
              ),
              t.openStart,
              t.openEnd
            );
          return d.fromReplace(e, this.from, this.to, i);
        }
        invert() {
          return new f(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos
            ? null
            : new p(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof p &&
            e.mark.eq(this.mark) &&
            this.from <= e.to &&
            this.to >= e.from
            ? new p(
                Math.min(this.from, e.from),
                Math.max(this.to, e.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for AddMarkStep.fromJSON");
          return new p(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      u.jsonID("addMark", p);
      class f extends u {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = new r.p2(
              h(t.content, (e) => e.mark(this.mark.removeFromSet(e.marks)), e),
              t.openStart,
              t.openEnd
            );
          return d.fromReplace(e, this.from, this.to, n);
        }
        invert() {
          return new p(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos
            ? null
            : new f(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof f &&
            e.mark.eq(this.mark) &&
            this.from <= e.to &&
            this.to >= e.from
            ? new f(
                Math.min(this.from, e.from),
                Math.max(this.to, e.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
          return new f(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      u.jsonID("removeMark", f);
      class m extends u {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return d.fail("No node at mark step's position");
          let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
          return d.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(n), 0, t.isLeaf ? 0 : 1)
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          if (t) {
            let e = this.mark.addToSet(t.marks);
            if (e.length == t.marks.length) {
              for (let n = 0; n < t.marks.length; n++)
                if (!t.marks[n].isInSet(e)) return new m(this.pos, t.marks[n]);
              return new m(this.pos, this.mark);
            }
          }
          return new g(this.pos, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new m(t.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos)
            throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
          return new m(t.pos, e.markFromJSON(t.mark));
        }
      }
      u.jsonID("addNodeMark", m);
      class g extends u {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return d.fail("No node at mark step's position");
          let n = t.type.create(
            t.attrs,
            null,
            this.mark.removeFromSet(t.marks)
          );
          return d.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(n), 0, t.isLeaf ? 0 : 1)
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          return t && this.mark.isInSet(t.marks)
            ? new m(this.pos, this.mark)
            : this;
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new g(t.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos)
            throw new RangeError(
              "Invalid input for RemoveNodeMarkStep.fromJSON"
            );
          return new g(t.pos, e.markFromJSON(t.mark));
        }
      }
      u.jsonID("removeNodeMark", g);
      class y extends u {
        constructor(e, t, n, r = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.slice = n),
            (this.structure = r);
        }
        apply(e) {
          return this.structure && w(e, this.from, this.to)
            ? d.fail("Structure replace would overwrite content")
            : d.fromReplace(e, this.from, this.to, this.slice);
        }
        getMap() {
          return new l([this.from, this.to - this.from, this.slice.size]);
        }
        invert(e) {
          return new y(
            this.from,
            this.from + this.slice.size,
            e.slice(this.from, this.to)
          );
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return t.deletedAcross && n.deletedAcross
            ? null
            : new y(t.pos, Math.max(t.pos, n.pos), this.slice);
        }
        merge(e) {
          if (!(e instanceof y) || e.structure || this.structure) return null;
          if (
            this.from + this.slice.size != e.from ||
            this.slice.openEnd ||
            e.slice.openStart
          ) {
            if (e.to != this.from || this.slice.openStart || e.slice.openEnd)
              return null;
            {
              let t =
                this.slice.size + e.slice.size == 0
                  ? r.p2.empty
                  : new r.p2(
                      e.slice.content.append(this.slice.content),
                      e.slice.openStart,
                      this.slice.openEnd
                    );
              return new y(e.from, this.to, t, this.structure);
            }
          }
          {
            let t =
              this.slice.size + e.slice.size == 0
                ? r.p2.empty
                : new r.p2(
                    this.slice.content.append(e.slice.content),
                    this.slice.openStart,
                    e.slice.openEnd
                  );
            return new y(
              this.from,
              this.to + (e.to - e.from),
              t,
              this.structure
            );
          }
        }
        toJSON() {
          let e = { stepType: "replace", from: this.from, to: this.to };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for ReplaceStep.fromJSON");
          return new y(t.from, t.to, r.p2.fromJSON(e, t.slice), !!t.structure);
        }
      }
      u.jsonID("replace", y);
      class v extends u {
        constructor(e, t, n, r, o, i, s = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.gapFrom = n),
            (this.gapTo = r),
            (this.slice = o),
            (this.insert = i),
            (this.structure = s);
        }
        apply(e) {
          if (
            this.structure &&
            (w(e, this.from, this.gapFrom) || w(e, this.gapTo, this.to))
          )
            return d.fail("Structure gap-replace would overwrite content");
          let t = e.slice(this.gapFrom, this.gapTo);
          if (t.openStart || t.openEnd)
            return d.fail("Gap is not a flat range");
          let n = this.slice.insertAt(this.insert, t.content);
          return n
            ? d.fromReplace(e, this.from, this.to, n)
            : d.fail("Content does not fit in gap");
        }
        getMap() {
          return new l([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert,
          ]);
        }
        invert(e) {
          let t = this.gapTo - this.gapFrom;
          return new v(
            this.from,
            this.from + this.slice.size + t,
            this.from + this.insert,
            this.from + this.insert + t,
            e
              .slice(this.from, this.to)
              .removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
            this.gapFrom - this.from,
            this.structure
          );
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1),
            r = e.map(this.gapFrom, -1),
            o = e.map(this.gapTo, 1);
          return (t.deletedAcross && n.deletedAcross) || r < t.pos || o > n.pos
            ? null
            : new v(
                t.pos,
                n.pos,
                r,
                o,
                this.slice,
                this.insert,
                this.structure
              );
        }
        toJSON() {
          let e = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert,
          };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(e, t) {
          if (
            "number" != typeof t.from ||
            "number" != typeof t.to ||
            "number" != typeof t.gapFrom ||
            "number" != typeof t.gapTo ||
            "number" != typeof t.insert
          )
            throw new RangeError(
              "Invalid input for ReplaceAroundStep.fromJSON"
            );
          return new v(
            t.from,
            t.to,
            t.gapFrom,
            t.gapTo,
            r.p2.fromJSON(e, t.slice),
            t.insert,
            !!t.structure
          );
        }
      }
      function w(e, t, n) {
        let r = e.resolve(t),
          o = n - t,
          i = r.depth;
        for (; o > 0 && i > 0 && r.indexAfter(i) == r.node(i).childCount; )
          i--, o--;
        if (o > 0) {
          let e = r.node(i).maybeChild(r.indexAfter(i));
          for (; o > 0; ) {
            if (!e || e.isLeaf) return !0;
            (e = e.firstChild), o--;
          }
        }
        return !1;
      }
      function b(e, t, n) {
        return (
          (0 == t || e.canReplace(t, e.childCount)) &&
          (n == e.childCount || e.canReplace(0, n))
        );
      }
      function S(e) {
        let t = e.parent.content.cutByIndex(e.startIndex, e.endIndex);
        for (let n = e.depth; ; --n) {
          let r = e.$from.node(n),
            o = e.$from.index(n),
            i = e.$to.indexAfter(n);
          if (n < e.depth && r.canReplace(o, i, t)) return n;
          if (0 == n || r.type.spec.isolating || !b(r, o, i)) break;
        }
        return null;
      }
      function x(e, t, n = null, r = e) {
        let o = (function (e, t) {
            let { parent: n, startIndex: r, endIndex: o } = e,
              i = n.contentMatchAt(r).findWrapping(t);
            if (!i) return null;
            let s = i.length ? i[0] : t;
            return n.canReplaceWith(r, o, s) ? i : null;
          })(e, t),
          i =
            o &&
            (function (e, t) {
              let { parent: n, startIndex: r, endIndex: o } = e,
                i = n.child(r),
                s = t.contentMatch.findWrapping(i.type);
              if (!s) return null;
              let l = (s.length ? s[s.length - 1] : t).contentMatch;
              for (let e = r; l && e < o; e++) l = l.matchType(n.child(e).type);
              return l && l.validEnd ? s : null;
            })(r, t);
        return i
          ? o.map(k).concat({ type: t, attrs: n }).concat(i.map(k))
          : null;
      }
      function k(e) {
        return { type: e, attrs: null };
      }
      function C(e, t, n = 1, r) {
        let o = e.resolve(t),
          i = o.depth - n,
          s = (r && r[r.length - 1]) || o.parent;
        if (
          i < 0 ||
          o.parent.type.spec.isolating ||
          !o.parent.canReplace(o.index(), o.parent.childCount) ||
          !s.type.validContent(
            o.parent.content.cutByIndex(o.index(), o.parent.childCount)
          )
        )
          return !1;
        for (let e = o.depth - 1, t = n - 2; e > i; e--, t--) {
          let n = o.node(e),
            i = o.index(e);
          if (n.type.spec.isolating) return !1;
          let s = n.content.cutByIndex(i, n.childCount),
            l = (r && r[t]) || n;
          if (
            (l != n && (s = s.replaceChild(0, l.type.create(l.attrs))),
            !n.canReplace(i + 1, n.childCount) || !l.type.validContent(s))
          )
            return !1;
        }
        let l = o.indexAfter(i),
          a = r && r[0];
        return o.node(i).canReplaceWith(l, l, a ? a.type : o.node(i + 1).type);
      }
      function R(e, t) {
        let n = e.resolve(t),
          r = n.index();
        return M(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
      }
      function M(e, t) {
        return !(!e || !t || e.isLeaf || !e.canAppend(t));
      }
      function O(e, t, n) {
        let r = e.resolve(t);
        if (!n.content.size) return t;
        let o = n.content;
        for (let e = 0; e < n.openStart; e++) o = o.firstChild.content;
        for (let e = 1; e <= (0 == n.openStart && n.size ? 2 : 1); e++)
          for (let t = r.depth; t >= 0; t--) {
            let n =
                t == r.depth
                  ? 0
                  : r.pos <= (r.start(t + 1) + r.end(t + 1)) / 2
                  ? -1
                  : 1,
              i = r.index(t) + (n > 0 ? 1 : 0),
              s = r.node(t),
              l = !1;
            if (1 == e) l = s.canReplace(i, i, o);
            else {
              let e = s.contentMatchAt(i).findWrapping(o.firstChild.type);
              l = e && s.canReplaceWith(i, i, e[0]);
            }
            if (l)
              return 0 == n ? r.pos : n < 0 ? r.before(t + 1) : r.after(t + 1);
          }
        return null;
      }
      function T(e, t, n = t, o = r.p2.empty) {
        if (t == n && !o.size) return null;
        let i = e.resolve(t),
          s = e.resolve(n);
        return N(i, s, o) ? new y(t, n, o) : new E(i, s, o).fit();
      }
      function N(e, t, n) {
        return (
          !n.openStart &&
          !n.openEnd &&
          e.start() == t.start() &&
          e.parent.canReplace(e.index(), t.index(), n.content)
        );
      }
      u.jsonID("replaceAround", v);
      class E {
        constructor(e, t, n) {
          (this.$from = e),
            (this.$to = t),
            (this.unplaced = n),
            (this.frontier = []),
            (this.placed = r.HY.empty);
          for (let t = 0; t <= e.depth; t++) {
            let n = e.node(t);
            this.frontier.push({
              type: n.type,
              match: n.contentMatchAt(e.indexAfter(t)),
            });
          }
          for (let t = e.depth; t > 0; t--)
            this.placed = r.HY.from(e.node(t).copy(this.placed));
        }
        get depth() {
          return this.frontier.length - 1;
        }
        fit() {
          for (; this.unplaced.size; ) {
            let e = this.findFittable();
            e ? this.placeNodes(e) : this.openMore() || this.dropNode();
          }
          let e = this.mustMoveInline(),
            t = this.placed.size - this.depth - this.$from.depth,
            n = this.$from,
            o = this.close(e < 0 ? this.$to : n.doc.resolve(e));
          if (!o) return null;
          let i = this.placed,
            s = n.depth,
            l = o.depth;
          for (; s && l && 1 == i.childCount; )
            (i = i.firstChild.content), s--, l--;
          let a = new r.p2(i, s, l);
          return e > -1
            ? new v(n.pos, e, this.$to.pos, this.$to.end(), a, t)
            : a.size || n.pos != this.$to.pos
            ? new y(n.pos, o.pos, a)
            : null;
        }
        findFittable() {
          let e = this.unplaced.openStart;
          for (
            let t = this.unplaced.content, n = 0, r = this.unplaced.openEnd;
            n < e;
            n++
          ) {
            let o = t.firstChild;
            if (
              (t.childCount > 1 && (r = 0), o.type.spec.isolating && r <= n)
            ) {
              e = n;
              break;
            }
            t = o.content;
          }
          for (let t = 1; t <= 2; t++)
            for (let n = 1 == t ? e : this.unplaced.openStart; n >= 0; n--) {
              let e,
                o = null;
              n
                ? ((o = I(this.unplaced.content, n - 1).firstChild),
                  (e = o.content))
                : (e = this.unplaced.content);
              let i = e.firstChild;
              for (let e = this.depth; e >= 0; e--) {
                let s,
                  { type: l, match: a } = this.frontier[e],
                  c = null;
                if (
                  1 == t &&
                  (i
                    ? a.matchType(i.type) ||
                      (c = a.fillBefore(r.HY.from(i), !1))
                    : o && l.compatibleContent(o.type))
                )
                  return {
                    sliceDepth: n,
                    frontierDepth: e,
                    parent: o,
                    inject: c,
                  };
                if (2 == t && i && (s = a.findWrapping(i.type)))
                  return {
                    sliceDepth: n,
                    frontierDepth: e,
                    parent: o,
                    wrap: s,
                  };
                if (o && a.matchType(o.type)) break;
              }
            }
        }
        openMore() {
          let { content: e, openStart: t, openEnd: n } = this.unplaced,
            o = I(e, t);
          return (
            !(!o.childCount || o.firstChild.isLeaf) &&
            ((this.unplaced = new r.p2(
              e,
              t + 1,
              Math.max(n, o.size + t >= e.size - n ? t + 1 : 0)
            )),
            !0)
          );
        }
        dropNode() {
          let { content: e, openStart: t, openEnd: n } = this.unplaced,
            o = I(e, t);
          if (o.childCount <= 1 && t > 0) {
            let i = e.size - t <= t + o.size;
            this.unplaced = new r.p2(D(e, t - 1, 1), t - 1, i ? t - 1 : n);
          } else this.unplaced = new r.p2(D(e, t, 1), t, n);
        }
        placeNodes({
          sliceDepth: e,
          frontierDepth: t,
          parent: n,
          inject: o,
          wrap: i,
        }) {
          for (; this.depth > t; ) this.closeFrontierNode();
          if (i) for (let e = 0; e < i.length; e++) this.openFrontierNode(i[e]);
          let s = this.unplaced,
            l = n ? n.content : s.content,
            a = s.openStart - e,
            c = 0,
            u = [],
            { match: d, type: h } = this.frontier[t];
          if (o) {
            for (let e = 0; e < o.childCount; e++) u.push(o.child(e));
            d = d.matchFragment(o);
          }
          let p = l.size + e - (s.content.size - s.openEnd);
          for (; c < l.childCount; ) {
            let e = l.child(c),
              t = d.matchType(e.type);
            if (!t) break;
            c++,
              (c > 1 || 0 == a || e.content.size) &&
                ((d = t),
                u.push(
                  P(
                    e.mark(h.allowedMarks(e.marks)),
                    1 == c ? a : 0,
                    c == l.childCount ? p : -1
                  )
                ));
          }
          let f = c == l.childCount;
          f || (p = -1),
            (this.placed = A(this.placed, t, r.HY.from(u))),
            (this.frontier[t].match = d),
            f &&
              p < 0 &&
              n &&
              n.type == this.frontier[this.depth].type &&
              this.frontier.length > 1 &&
              this.closeFrontierNode();
          for (let e = 0, t = l; e < p; e++) {
            let e = t.lastChild;
            this.frontier.push({
              type: e.type,
              match: e.contentMatchAt(e.childCount),
            }),
              (t = e.content);
          }
          this.unplaced = f
            ? 0 == e
              ? r.p2.empty
              : new r.p2(
                  D(s.content, e - 1, 1),
                  e - 1,
                  p < 0 ? s.openEnd : e - 1
                )
            : new r.p2(D(s.content, e, c), s.openStart, s.openEnd);
        }
        mustMoveInline() {
          if (!this.$to.parent.isTextblock) return -1;
          let e,
            t = this.frontier[this.depth];
          if (
            !t.type.isTextblock ||
            !B(this.$to, this.$to.depth, t.type, t.match, !1) ||
            (this.$to.depth == this.depth &&
              (e = this.findCloseLevel(this.$to)) &&
              e.depth == this.depth)
          )
            return -1;
          let { depth: n } = this.$to,
            r = this.$to.after(n);
          for (; n > 1 && r == this.$to.end(--n); ) ++r;
          return r;
        }
        findCloseLevel(e) {
          e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
            let { match: n, type: r } = this.frontier[t],
              o = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)),
              i = B(e, t, r, n, o);
            if (i) {
              for (let n = t - 1; n >= 0; n--) {
                let { match: t, type: r } = this.frontier[n],
                  o = B(e, n, r, t, !0);
                if (!o || o.childCount) continue e;
              }
              return {
                depth: t,
                fit: i,
                move: o ? e.doc.resolve(e.after(t + 1)) : e,
              };
            }
          }
        }
        close(e) {
          let t = this.findCloseLevel(e);
          if (!t) return null;
          for (; this.depth > t.depth; ) this.closeFrontierNode();
          t.fit.childCount && (this.placed = A(this.placed, t.depth, t.fit)),
            (e = t.move);
          for (let n = t.depth + 1; n <= e.depth; n++) {
            let t = e.node(n),
              r = t.type.contentMatch.fillBefore(t.content, !0, e.index(n));
            this.openFrontierNode(t.type, t.attrs, r);
          }
          return e;
        }
        openFrontierNode(e, t = null, n) {
          let o = this.frontier[this.depth];
          (o.match = o.match.matchType(e)),
            (this.placed = A(
              this.placed,
              this.depth,
              r.HY.from(e.create(t, n))
            )),
            this.frontier.push({ type: e, match: e.contentMatch });
        }
        closeFrontierNode() {
          let e = this.frontier.pop().match.fillBefore(r.HY.empty, !0);
          e.childCount &&
            (this.placed = A(this.placed, this.frontier.length, e));
        }
      }
      function D(e, t, n) {
        return 0 == t
          ? e.cutByIndex(n, e.childCount)
          : e.replaceChild(
              0,
              e.firstChild.copy(D(e.firstChild.content, t - 1, n))
            );
      }
      function A(e, t, n) {
        return 0 == t
          ? e.append(n)
          : e.replaceChild(
              e.childCount - 1,
              e.lastChild.copy(A(e.lastChild.content, t - 1, n))
            );
      }
      function I(e, t) {
        for (let n = 0; n < t; n++) e = e.firstChild.content;
        return e;
      }
      function P(e, t, n) {
        if (t <= 0) return e;
        let o = e.content;
        return (
          t > 1 &&
            (o = o.replaceChild(
              0,
              P(o.firstChild, t - 1, 1 == o.childCount ? n - 1 : 0)
            )),
          t > 0 &&
            ((o = e.type.contentMatch.fillBefore(o).append(o)),
            n <= 0 &&
              (o = o.append(
                e.type.contentMatch.matchFragment(o).fillBefore(r.HY.empty, !0)
              ))),
          e.copy(o)
        );
      }
      function B(e, t, n, r, o) {
        let i = e.node(t),
          s = o ? e.indexAfter(t) : e.index(t);
        if (s == i.childCount && !n.compatibleContent(i.type)) return null;
        let l = r.fillBefore(i.content, !0, s);
        return l &&
          !(function (e, t, n) {
            for (let r = n; r < t.childCount; r++)
              if (!e.allowsMarks(t.child(r).marks)) return !0;
            return !1;
          })(n, i.content, s)
          ? l
          : null;
      }
      function F(e) {
        return e.spec.defining || e.spec.definingForContent;
      }
      function z(e, t, n, o, i) {
        if (t < n) {
          let r = e.firstChild;
          e = e.replaceChild(0, r.copy(z(r.content, t + 1, n, o, r)));
        }
        if (t > o) {
          let t = i.contentMatchAt(0),
            n = t.fillBefore(e).append(e);
          e = n.append(t.matchFragment(n).fillBefore(r.HY.empty, !0));
        }
        return e;
      }
      function V(e, t) {
        let n = [];
        for (let r = Math.min(e.depth, t.depth); r >= 0; r--) {
          let o = e.start(r);
          if (
            o < e.pos - (e.depth - r) ||
            t.end(r) > t.pos + (t.depth - r) ||
            e.node(r).type.spec.isolating ||
            t.node(r).type.spec.isolating
          )
            break;
          (o == t.start(r) ||
            (r == e.depth &&
              r == t.depth &&
              e.parent.inlineContent &&
              t.parent.inlineContent &&
              r &&
              t.start(r - 1) == o - 1)) &&
            n.push(r);
        }
        return n;
      }
      class H extends u {
        constructor(e, t, n) {
          super(), (this.pos = e), (this.attr = t), (this.value = n);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return d.fail("No node at attribute step's position");
          let n = Object.create(null);
          for (let e in t.attrs) n[e] = t.attrs[e];
          n[this.attr] = this.value;
          let o = t.type.create(n, null, t.marks);
          return d.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(o), 0, t.isLeaf ? 0 : 1)
          );
        }
        getMap() {
          return l.empty;
        }
        invert(e) {
          return new H(
            this.pos,
            this.attr,
            e.nodeAt(this.pos).attrs[this.attr]
          );
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new H(t.pos, this.attr, this.value);
        }
        toJSON() {
          return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos || "string" != typeof t.attr)
            throw new RangeError("Invalid input for AttrStep.fromJSON");
          return new H(t.pos, t.attr, t.value);
        }
      }
      u.jsonID("attr", H);
      let $ = class extends Error {};
      ($ = function e(t) {
        let n = Error.call(this, t);
        return (n.__proto__ = e.prototype), n;
      }),
        (($.prototype = Object.create(Error.prototype)).constructor = $),
        ($.prototype.name = "TransformError");
      class W {
        constructor(e) {
          (this.doc = e),
            (this.steps = []),
            (this.docs = []),
            (this.mapping = new a());
        }
        get before() {
          return this.docs.length ? this.docs[0] : this.doc;
        }
        step(e) {
          let t = this.maybeStep(e);
          if (t.failed) throw new $(t.failed);
          return this;
        }
        maybeStep(e) {
          let t = e.apply(this.doc);
          return t.failed || this.addStep(e, t.doc), t;
        }
        get docChanged() {
          return this.steps.length > 0;
        }
        addStep(e, t) {
          this.docs.push(this.doc),
            this.steps.push(e),
            this.mapping.appendMap(e.getMap()),
            (this.doc = t);
        }
        replace(e, t = e, n = r.p2.empty) {
          let o = T(this.doc, e, t, n);
          return o && this.step(o), this;
        }
        replaceWith(e, t, n) {
          return this.replace(e, t, new r.p2(r.HY.from(n), 0, 0));
        }
        delete(e, t) {
          return this.replace(e, t, r.p2.empty);
        }
        insert(e, t) {
          return this.replaceWith(e, e, t);
        }
        replaceRange(e, t, n) {
          return (
            (function (e, t, n, o) {
              if (!o.size) return e.deleteRange(t, n);
              let i = e.doc.resolve(t),
                s = e.doc.resolve(n);
              if (N(i, s, o)) return e.step(new y(t, n, o));
              let l = V(i, e.doc.resolve(n));
              0 == l[l.length - 1] && l.pop();
              let a = -(i.depth + 1);
              l.unshift(a);
              for (let e = i.depth, t = i.pos - 1; e > 0; e--, t--) {
                let n = i.node(e).type.spec;
                if (n.defining || n.definingAsContext || n.isolating) break;
                l.indexOf(e) > -1
                  ? (a = e)
                  : i.before(e) == t && l.splice(1, 0, -e);
              }
              let c = l.indexOf(a),
                u = [],
                d = o.openStart;
              for (let e = o.content, t = 0; ; t++) {
                let n = e.firstChild;
                if ((u.push(n), t == o.openStart)) break;
                e = n.content;
              }
              for (let e = d - 1; e >= 0; e--) {
                let t = u[e].type,
                  n = F(t);
                if (n && i.node(c).type != t) d = e;
                else if (n || !t.isTextblock) break;
              }
              for (let t = o.openStart; t >= 0; t--) {
                let a = (t + d + 1) % (o.openStart + 1),
                  h = u[a];
                if (h)
                  for (let t = 0; t < l.length; t++) {
                    let u = l[(t + c) % l.length],
                      d = !0;
                    u < 0 && ((d = !1), (u = -u));
                    let p = i.node(u - 1),
                      f = i.index(u - 1);
                    if (p.canReplaceWith(f, f, h.type, h.marks))
                      return e.replace(
                        i.before(u),
                        d ? s.after(u) : n,
                        new r.p2(z(o.content, 0, o.openStart, a), a, o.openEnd)
                      );
                  }
              }
              let h = e.steps.length;
              for (
                let r = l.length - 1;
                r >= 0 && (e.replace(t, n, o), !(e.steps.length > h));
                r--
              ) {
                let e = l[r];
                e < 0 || ((t = i.before(e)), (n = s.after(e)));
              }
            })(this, e, t, n),
            this
          );
        }
        replaceRangeWith(e, t, n) {
          return (
            (function (e, t, n, o) {
              if (
                !o.isInline &&
                t == n &&
                e.doc.resolve(t).parent.content.size
              ) {
                let r = (function (e, t, n) {
                  let r = e.resolve(t);
                  if (r.parent.canReplaceWith(r.index(), r.index(), n))
                    return t;
                  if (0 == r.parentOffset)
                    for (let e = r.depth - 1; e >= 0; e--) {
                      let t = r.index(e);
                      if (r.node(e).canReplaceWith(t, t, n))
                        return r.before(e + 1);
                      if (t > 0) return null;
                    }
                  if (r.parentOffset == r.parent.content.size)
                    for (let e = r.depth - 1; e >= 0; e--) {
                      let t = r.indexAfter(e);
                      if (r.node(e).canReplaceWith(t, t, n))
                        return r.after(e + 1);
                      if (t < r.node(e).childCount) return null;
                    }
                  return null;
                })(e.doc, t, o.type);
                null != r && (t = n = r);
              }
              e.replaceRange(t, n, new r.p2(r.HY.from(o), 0, 0));
            })(this, e, t, n),
            this
          );
        }
        deleteRange(e, t) {
          return (
            (function (e, t, n) {
              let r = e.doc.resolve(t),
                o = e.doc.resolve(n),
                i = V(r, o);
              for (let t = 0; t < i.length; t++) {
                let n = i[t],
                  s = t == i.length - 1;
                if ((s && 0 == n) || r.node(n).type.contentMatch.validEnd)
                  return e.delete(r.start(n), o.end(n));
                if (
                  n > 0 &&
                  (s ||
                    r
                      .node(n - 1)
                      .canReplace(r.index(n - 1), o.indexAfter(n - 1)))
                )
                  return e.delete(r.before(n), o.after(n));
              }
              for (let i = 1; i <= r.depth && i <= o.depth; i++)
                if (
                  t - r.start(i) == r.depth - i &&
                  n > r.end(i) &&
                  o.end(i) - n != o.depth - i
                )
                  return e.delete(r.before(i), n);
              e.delete(t, n);
            })(this, e, t),
            this
          );
        }
        lift(e, t) {
          return (
            (function (e, t, n) {
              let { $from: o, $to: i, depth: s } = t,
                l = o.before(s + 1),
                a = i.after(s + 1),
                c = l,
                u = a,
                d = r.HY.empty,
                h = 0;
              for (let e = s, t = !1; e > n; e--)
                t || o.index(e) > 0
                  ? ((t = !0), (d = r.HY.from(o.node(e).copy(d))), h++)
                  : c--;
              let p = r.HY.empty,
                f = 0;
              for (let e = s, t = !1; e > n; e--)
                t || i.after(e + 1) < i.end(e)
                  ? ((t = !0), (p = r.HY.from(i.node(e).copy(p))), f++)
                  : u++;
              e.step(
                new v(c, u, l, a, new r.p2(d.append(p), h, f), d.size - h, !0)
              );
            })(this, e, t),
            this
          );
        }
        join(e, t = 1) {
          return (
            (function (e, t, n) {
              let o = new y(t - n, t + n, r.p2.empty, !0);
              e.step(o);
            })(this, e, t),
            this
          );
        }
        wrap(e, t) {
          return (
            (function (e, t, n) {
              let o = r.HY.empty;
              for (let e = n.length - 1; e >= 0; e--) {
                if (o.size) {
                  let t = n[e].type.contentMatch.matchFragment(o);
                  if (!t || !t.validEnd)
                    throw new RangeError(
                      "Wrapper type given to Transform.wrap does not form valid content of its parent wrapper"
                    );
                }
                o = r.HY.from(n[e].type.create(n[e].attrs, o));
              }
              let i = t.start,
                s = t.end;
              e.step(new v(i, s, i, s, new r.p2(o, 0, 0), n.length, !0));
            })(this, e, t),
            this
          );
        }
        setBlockType(e, t = e, n, o = null) {
          return (
            (function (e, t, n, o, i) {
              if (!o.isTextblock)
                throw new RangeError(
                  "Type given to setBlockType should be a textblock"
                );
              let s = e.steps.length;
              e.doc.nodesBetween(t, n, (t, n) => {
                if (
                  t.isTextblock &&
                  !t.hasMarkup(o, i) &&
                  (function (e, t, n) {
                    let r = e.resolve(t),
                      o = r.index();
                    return r.parent.canReplaceWith(o, o + 1, n);
                  })(e.doc, e.mapping.slice(s).map(n), o)
                ) {
                  e.clearIncompatible(e.mapping.slice(s).map(n, 1), o);
                  let l = e.mapping.slice(s),
                    a = l.map(n, 1),
                    c = l.map(n + t.nodeSize, 1);
                  return (
                    e.step(
                      new v(
                        a,
                        c,
                        a + 1,
                        c - 1,
                        new r.p2(r.HY.from(o.create(i, null, t.marks)), 0, 0),
                        1,
                        !0
                      )
                    ),
                    !1
                  );
                }
              });
            })(this, e, t, n, o),
            this
          );
        }
        setNodeMarkup(e, t, n = null, o) {
          return (
            (function (e, t, n, o, i) {
              let s = e.doc.nodeAt(t);
              if (!s) throw new RangeError("No node at given position");
              n || (n = s.type);
              let l = n.create(o, null, i || s.marks);
              if (s.isLeaf) return e.replaceWith(t, t + s.nodeSize, l);
              if (!n.validContent(s.content))
                throw new RangeError("Invalid content for node type " + n.name);
              e.step(
                new v(
                  t,
                  t + s.nodeSize,
                  t + 1,
                  t + s.nodeSize - 1,
                  new r.p2(r.HY.from(l), 0, 0),
                  1,
                  !0
                )
              );
            })(this, e, t, n, o),
            this
          );
        }
        setNodeAttribute(e, t, n) {
          return this.step(new H(e, t, n)), this;
        }
        addNodeMark(e, t) {
          return this.step(new m(e, t)), this;
        }
        removeNodeMark(e, t) {
          if (!(t instanceof r.vc)) {
            let n = this.doc.nodeAt(e);
            if (!n) throw new RangeError("No node at position " + e);
            if (!(t = t.isInSet(n.marks))) return this;
          }
          return this.step(new g(e, t)), this;
        }
        split(e, t = 1, n) {
          return (
            (function (e, t, n = 1, o) {
              let i = e.doc.resolve(t),
                s = r.HY.empty,
                l = r.HY.empty;
              for (
                let e = i.depth, t = i.depth - n, a = n - 1;
                e > t;
                e--, a--
              ) {
                s = r.HY.from(i.node(e).copy(s));
                let t = o && o[a];
                l = r.HY.from(
                  t ? t.type.create(t.attrs, l) : i.node(e).copy(l)
                );
              }
              e.step(new y(t, t, new r.p2(s.append(l), n, n), !0));
            })(this, e, t, n),
            this
          );
        }
        addMark(e, t, n) {
          return (
            (function (e, t, n, r) {
              let o,
                i,
                s = [],
                l = [];
              e.doc.nodesBetween(t, n, (e, a, c) => {
                if (!e.isInline) return;
                let u = e.marks;
                if (!r.isInSet(u) && c.type.allowsMarkType(r.type)) {
                  let c = Math.max(a, t),
                    d = Math.min(a + e.nodeSize, n),
                    h = r.addToSet(u);
                  for (let e = 0; e < u.length; e++)
                    u[e].isInSet(h) ||
                      (o && o.to == c && o.mark.eq(u[e])
                        ? (o.to = d)
                        : s.push((o = new f(c, d, u[e]))));
                  i && i.to == c ? (i.to = d) : l.push((i = new p(c, d, r)));
                }
              }),
                s.forEach((t) => e.step(t)),
                l.forEach((t) => e.step(t));
            })(this, e, t, n),
            this
          );
        }
        removeMark(e, t, n) {
          return (
            (function (e, t, n, o) {
              let i = [],
                s = 0;
              e.doc.nodesBetween(t, n, (e, l) => {
                if (!e.isInline) return;
                s++;
                let a = null;
                if (o instanceof r.ZU) {
                  let t,
                    n = e.marks;
                  for (; (t = o.isInSet(n)); )
                    (a || (a = [])).push(t), (n = t.removeFromSet(n));
                } else o ? o.isInSet(e.marks) && (a = [o]) : (a = e.marks);
                if (a && a.length) {
                  let r = Math.min(l + e.nodeSize, n);
                  for (let e = 0; e < a.length; e++) {
                    let n,
                      o = a[e];
                    for (let e = 0; e < i.length; e++) {
                      let t = i[e];
                      t.step == s - 1 && o.eq(i[e].style) && (n = t);
                    }
                    n
                      ? ((n.to = r), (n.step = s))
                      : i.push({
                          style: o,
                          from: Math.max(l, t),
                          to: r,
                          step: s,
                        });
                  }
                }
              }),
                i.forEach((t) => e.step(new f(t.from, t.to, t.style)));
            })(this, e, t, n),
            this
          );
        }
        clearIncompatible(e, t, n) {
          return (
            (function (e, t, n, o = n.contentMatch) {
              let i = e.doc.nodeAt(t),
                s = [],
                l = t + 1;
              for (let t = 0; t < i.childCount; t++) {
                let a = i.child(t),
                  c = l + a.nodeSize,
                  u = o.matchType(a.type);
                if (u) {
                  o = u;
                  for (let t = 0; t < a.marks.length; t++)
                    n.allowsMarkType(a.marks[t].type) ||
                      e.step(new f(l, c, a.marks[t]));
                } else s.push(new y(l, c, r.p2.empty));
                l = c;
              }
              if (!o.validEnd) {
                let t = o.fillBefore(r.HY.empty, !0);
                e.replace(l, l, new r.p2(t, 0, 0));
              }
              for (let t = s.length - 1; t >= 0; t--) e.step(s[t]);
            })(this, e, t, n),
            this
          );
        }
      }
    },
    84348: (e, t, n) => {
      "use strict";
      n.d(t, { tk: () => an });
      var r = n(2376),
        o = n(87823),
        i = n(16560);
      const s = function (e) {
          for (var t = 0; ; t++) if (!(e = e.previousSibling)) return t;
        },
        l = function (e) {
          let t = e.assignedSlot || e.parentNode;
          return t && 11 == t.nodeType ? t.host : t;
        };
      let a = null;
      const c = function (e, t, n) {
          let r = a || (a = document.createRange());
          return (
            r.setEnd(e, null == n ? e.nodeValue.length : n),
            r.setStart(e, t || 0),
            r
          );
        },
        u = function (e, t, n, r) {
          return n && (h(e, t, n, r, -1) || h(e, t, n, r, 1));
        },
        d = /^(img|br|input|textarea|hr)$/i;
      function h(e, t, n, r, o) {
        for (;;) {
          if (e == n && t == r) return !0;
          if (t == (o < 0 ? 0 : p(e))) {
            let n = e.parentNode;
            if (
              !n ||
              1 != n.nodeType ||
              f(e) ||
              d.test(e.nodeName) ||
              "false" == e.contentEditable
            )
              return !1;
            (t = s(e) + (o < 0 ? 0 : 1)), (e = n);
          } else {
            if (1 != e.nodeType) return !1;
            if (
              "false" ==
              (e = e.childNodes[t + (o < 0 ? -1 : 0)]).contentEditable
            )
              return !1;
            t = o < 0 ? p(e) : 0;
          }
        }
      }
      function p(e) {
        return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
      }
      function f(e) {
        let t;
        for (let n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
        return (
          t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e)
        );
      }
      const m = function (e) {
        return (
          e.focusNode &&
          u(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
        );
      };
      function g(e, t) {
        let n = document.createEvent("Event");
        return (
          n.initEvent("keydown", !0, !0),
          (n.keyCode = e),
          (n.key = n.code = t),
          n
        );
      }
      const y = "undefined" != typeof navigator ? navigator : null,
        v = "undefined" != typeof document ? document : null,
        w = (y && y.userAgent) || "",
        b = /Edge\/(\d+)/.exec(w),
        S = /MSIE \d/.exec(w),
        x = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(w),
        k = !!(S || x || b),
        C = S ? document.documentMode : x ? +x[1] : b ? +b[1] : 0,
        R = !k && /gecko\/(\d+)/i.test(w);
      R && (/Firefox\/(\d+)/.exec(w) || [0, 0])[1];
      const M = !k && /Chrome\/(\d+)/.exec(w),
        O = !!M,
        T = M ? +M[1] : 0,
        N = !k && !!y && /Apple Computer/.test(y.vendor),
        E = N && (/Mobile\/\w+/.test(w) || (!!y && y.maxTouchPoints > 2)),
        D = E || (!!y && /Mac/.test(y.platform)),
        A = /Android \d/.test(w),
        I = !!v && "webkitFontSmoothing" in v.documentElement.style,
        P = I
          ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
          : 0;
      function B(e) {
        return {
          left: 0,
          right: e.documentElement.clientWidth,
          top: 0,
          bottom: e.documentElement.clientHeight,
        };
      }
      function F(e, t) {
        return "number" == typeof e ? e : e[t];
      }
      function z(e) {
        let t = e.getBoundingClientRect(),
          n = t.width / e.offsetWidth || 1,
          r = t.height / e.offsetHeight || 1;
        return {
          left: t.left,
          right: t.left + e.clientWidth * n,
          top: t.top,
          bottom: t.top + e.clientHeight * r,
        };
      }
      function V(e, t, n) {
        let r = e.someProp("scrollThreshold") || 0,
          o = e.someProp("scrollMargin") || 5,
          i = e.dom.ownerDocument;
        for (let s = n || e.dom; s; s = l(s)) {
          if (1 != s.nodeType) continue;
          let e = s,
            n = e == i.body,
            l = n ? B(i) : z(e),
            a = 0,
            c = 0;
          if (
            (t.top < l.top + F(r, "top")
              ? (c = -(l.top - t.top + F(o, "top")))
              : t.bottom > l.bottom - F(r, "bottom") &&
                (c = t.bottom - l.bottom + F(o, "bottom")),
            t.left < l.left + F(r, "left")
              ? (a = -(l.left - t.left + F(o, "left")))
              : t.right > l.right - F(r, "right") &&
                (a = t.right - l.right + F(o, "right")),
            a || c)
          )
            if (n) i.defaultView.scrollBy(a, c);
            else {
              let n = e.scrollLeft,
                r = e.scrollTop;
              c && (e.scrollTop += c), a && (e.scrollLeft += a);
              let o = e.scrollLeft - n,
                i = e.scrollTop - r;
              t = {
                left: t.left - o,
                top: t.top - i,
                right: t.right - o,
                bottom: t.bottom - i,
              };
            }
          if (n) break;
        }
      }
      function H(e) {
        let t = [],
          n = e.ownerDocument;
        for (
          let r = e;
          r &&
          (t.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), e != n);
          r = l(r)
        );
        return t;
      }
      function $(e, t) {
        for (let n = 0; n < e.length; n++) {
          let { dom: r, top: o, left: i } = e[n];
          r.scrollTop != o + t && (r.scrollTop = o + t),
            r.scrollLeft != i && (r.scrollLeft = i);
        }
      }
      let W = null;
      function L(e, t) {
        let n,
          r,
          o = 2e8,
          i = 0,
          s = t.top,
          l = t.top;
        for (let a = e.firstChild, u = 0; a; a = a.nextSibling, u++) {
          let e;
          if (1 == a.nodeType) e = a.getClientRects();
          else {
            if (3 != a.nodeType) continue;
            e = c(a).getClientRects();
          }
          for (let c = 0; c < e.length; c++) {
            let d = e[c];
            if (d.top <= s && d.bottom >= l) {
              (s = Math.max(d.bottom, s)), (l = Math.min(d.top, l));
              let e =
                d.left > t.left
                  ? d.left - t.left
                  : d.right < t.left
                  ? t.left - d.right
                  : 0;
              if (e < o) {
                (n = a),
                  (o = e),
                  (r =
                    e && 3 == n.nodeType
                      ? {
                          left: d.right < t.left ? d.right : d.left,
                          top: t.top,
                        }
                      : t),
                  1 == a.nodeType &&
                    e &&
                    (i = u + (t.left >= (d.left + d.right) / 2 ? 1 : 0));
                continue;
              }
            }
            !n &&
              ((t.left >= d.right && t.top >= d.top) ||
                (t.left >= d.left && t.top >= d.bottom)) &&
              (i = u + 1);
          }
        }
        return n && 3 == n.nodeType
          ? (function (e, t) {
              let n = e.nodeValue.length,
                r = document.createRange();
              for (let o = 0; o < n; o++) {
                r.setEnd(e, o + 1), r.setStart(e, o);
                let n = J(r, 1);
                if (n.top != n.bottom && G(t, n))
                  return {
                    node: e,
                    offset: o + (t.left >= (n.left + n.right) / 2 ? 1 : 0),
                  };
              }
              return { node: e, offset: 0 };
            })(n, r)
          : !n || (o && 1 == n.nodeType)
          ? { node: e, offset: i }
          : L(n, r);
      }
      function G(e, t) {
        return (
          e.left >= t.left - 1 &&
          e.left <= t.right + 1 &&
          e.top >= t.top - 1 &&
          e.top <= t.bottom + 1
        );
      }
      function q(e, t, n) {
        let r = e.childNodes.length;
        if (r && n.top < n.bottom)
          for (
            let o = Math.max(
                0,
                Math.min(
                  r - 1,
                  Math.floor((r * (t.top - n.top)) / (n.bottom - n.top)) - 2
                )
              ),
              i = o;
            ;

          ) {
            let n = e.childNodes[i];
            if (1 == n.nodeType) {
              let e = n.getClientRects();
              for (let r = 0; r < e.length; r++) {
                let o = e[r];
                if (G(t, o)) return q(n, t, o);
              }
            }
            if ((i = (i + 1) % r) == o) break;
          }
        return e;
      }
      function j(e, t) {
        let n,
          r = e.dom.ownerDocument,
          o = 0;
        if (r.caretPositionFromPoint)
          try {
            let e = r.caretPositionFromPoint(t.left, t.top);
            e && ({ offsetNode: n, offset: o } = e);
          } catch (e) {}
        if (!n && r.caretRangeFromPoint) {
          let e = r.caretRangeFromPoint(t.left, t.top);
          e && ({ startContainer: n, startOffset: o } = e);
        }
        let i,
          s = (e.root.elementFromPoint ? e.root : r).elementFromPoint(
            t.left,
            t.top
          );
        if (!s || !e.dom.contains(1 != s.nodeType ? s.parentNode : s)) {
          let n = e.dom.getBoundingClientRect();
          if (!G(t, n)) return null;
          if (((s = q(e.dom, t, n)), !s)) return null;
        }
        if (N) for (let e = s; n && e; e = l(e)) e.draggable && (n = void 0);
        if (
          ((s = (function (e, t) {
            let n = e.parentNode;
            return n &&
              /^li$/i.test(n.nodeName) &&
              t.left < e.getBoundingClientRect().left
              ? n
              : e;
          })(s, t)),
          n)
        ) {
          if (
            R &&
            1 == n.nodeType &&
            ((o = Math.min(o, n.childNodes.length)), o < n.childNodes.length)
          ) {
            let e,
              r = n.childNodes[o];
            "IMG" == r.nodeName &&
              (e = r.getBoundingClientRect()).right <= t.left &&
              e.bottom > t.top &&
              o++;
          }
          n == e.dom &&
          o == n.childNodes.length - 1 &&
          1 == n.lastChild.nodeType &&
          t.top > n.lastChild.getBoundingClientRect().bottom
            ? (i = e.state.doc.content.size)
            : (0 != o &&
                1 == n.nodeType &&
                "BR" == n.childNodes[o - 1].nodeName) ||
              (i = (function (e, t, n, r) {
                let o = -1;
                for (let n = t, i = !1; n != e.dom; ) {
                  let t = e.docView.nearestDesc(n, !0);
                  if (!t) return null;
                  if (
                    1 == t.dom.nodeType &&
                    ((t.node.isBlock && t.parent && !i) || !t.contentDOM)
                  ) {
                    let e = t.dom.getBoundingClientRect();
                    if (
                      (t.node.isBlock &&
                        t.parent &&
                        !i &&
                        ((i = !0),
                        e.left > r.left || e.top > r.top
                          ? (o = t.posBefore)
                          : (e.right < r.left || e.bottom < r.top) &&
                            (o = t.posAfter)),
                      !t.contentDOM && o < 0)
                    )
                      return (
                        t.node.isBlock
                          ? r.top < (e.top + e.bottom) / 2
                          : r.left < (e.left + e.right) / 2
                      )
                        ? t.posBefore
                        : t.posAfter;
                  }
                  n = t.dom.parentNode;
                }
                return o > -1 ? o : e.docView.posFromDOM(t, n, -1);
              })(e, n, o, t));
        }
        null == i &&
          (i = (function (e, t, n) {
            let { node: r, offset: o } = L(t, n),
              i = -1;
            if (1 == r.nodeType && !r.firstChild) {
              let e = r.getBoundingClientRect();
              i = e.left != e.right && n.left > (e.left + e.right) / 2 ? 1 : -1;
            }
            return e.docView.posFromDOM(r, o, i);
          })(e, s, t));
        let a = e.docView.nearestDesc(s, !0);
        return { pos: i, inside: a ? a.posAtStart - a.border : -1 };
      }
      function J(e, t) {
        let n = e.getClientRects();
        return n.length
          ? n[t < 0 ? 0 : n.length - 1]
          : e.getBoundingClientRect();
      }
      const _ = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
      function K(e, t, n) {
        let {
            node: r,
            offset: o,
            atom: i,
          } = e.docView.domFromPos(t, n < 0 ? -1 : 1),
          s = I || R;
        if (3 == r.nodeType) {
          if (
            !s ||
            (!_.test(r.nodeValue) && (n < 0 ? o : o != r.nodeValue.length))
          ) {
            let e = o,
              t = o,
              i = n < 0 ? 1 : -1;
            return (
              n < 0 && !o
                ? (t++, (i = -1))
                : n >= 0 && o == r.nodeValue.length
                ? (e--, (i = 1))
                : n < 0
                ? e--
                : t++,
              Y(J(c(r, e, t), 1), i < 0)
            );
          }
          {
            let e = J(c(r, o, o), n);
            if (
              R &&
              o &&
              /\s/.test(r.nodeValue[o - 1]) &&
              o < r.nodeValue.length
            ) {
              let t = J(c(r, o - 1, o - 1), -1);
              if (t.top == e.top) {
                let n = J(c(r, o, o + 1), -1);
                if (n.top != e.top) return Y(n, n.left < t.left);
              }
            }
            return e;
          }
        }
        if (!e.state.doc.resolve(t - (i || 0)).parent.inlineContent) {
          if (null == i && o && (n < 0 || o == p(r))) {
            let e = r.childNodes[o - 1];
            if (1 == e.nodeType) return U(e.getBoundingClientRect(), !1);
          }
          if (null == i && o < p(r)) {
            let e = r.childNodes[o];
            if (1 == e.nodeType) return U(e.getBoundingClientRect(), !0);
          }
          return U(r.getBoundingClientRect(), n >= 0);
        }
        if (null == i && o && (n < 0 || o == p(r))) {
          let e = r.childNodes[o - 1],
            t =
              3 == e.nodeType
                ? c(e, p(e) - (s ? 0 : 1))
                : 1 != e.nodeType || ("BR" == e.nodeName && e.nextSibling)
                ? null
                : e;
          if (t) return Y(J(t, 1), !1);
        }
        if (null == i && o < p(r)) {
          let e = r.childNodes[o];
          for (; e.pmViewDesc && e.pmViewDesc.ignoreForCoords; )
            e = e.nextSibling;
          let t = e
            ? 3 == e.nodeType
              ? c(e, 0, s ? 0 : 1)
              : 1 == e.nodeType
              ? e
              : null
            : null;
          if (t) return Y(J(t, -1), !0);
        }
        return Y(J(3 == r.nodeType ? c(r) : r, -n), n >= 0);
      }
      function Y(e, t) {
        if (0 == e.width) return e;
        let n = t ? e.left : e.right;
        return { top: e.top, bottom: e.bottom, left: n, right: n };
      }
      function U(e, t) {
        if (0 == e.height) return e;
        let n = t ? e.top : e.bottom;
        return { top: n, bottom: n, left: e.left, right: e.right };
      }
      function X(e, t, n) {
        let r = e.state,
          o = e.root.activeElement;
        r != t && e.updateState(t), o != e.dom && e.focus();
        try {
          return n();
        } finally {
          r != t && e.updateState(r), o != e.dom && o && o.focus();
        }
      }
      const Z = /[\u0590-\u08ac]/;
      let Q = null,
        ee = null,
        te = !1;
      function ne(e, t, n) {
        return Q == t && ee == n
          ? te
          : ((Q = t),
            (ee = n),
            (te =
              "up" == n || "down" == n
                ? (function (e, t, n) {
                    let r = t.selection,
                      o = "up" == n ? r.$from : r.$to;
                    return X(e, t, () => {
                      let { node: t } = e.docView.domFromPos(
                        o.pos,
                        "up" == n ? -1 : 1
                      );
                      for (;;) {
                        let n = e.docView.nearestDesc(t, !0);
                        if (!n) break;
                        if (n.node.isBlock) {
                          t = n.contentDOM || n.dom;
                          break;
                        }
                        t = n.dom.parentNode;
                      }
                      let r = K(e, o.pos, 1);
                      for (let e = t.firstChild; e; e = e.nextSibling) {
                        let t;
                        if (1 == e.nodeType) t = e.getClientRects();
                        else {
                          if (3 != e.nodeType) continue;
                          t = c(e, 0, e.nodeValue.length).getClientRects();
                        }
                        for (let e = 0; e < t.length; e++) {
                          let o = t[e];
                          if (
                            o.bottom > o.top + 1 &&
                            ("up" == n
                              ? r.top - o.top > 2 * (o.bottom - r.top)
                              : o.bottom - r.bottom > 2 * (r.bottom - o.top))
                          )
                            return !1;
                        }
                      }
                      return !0;
                    });
                  })(e, t, n)
                : (function (e, t, n) {
                    let { $head: r } = t.selection;
                    if (!r.parent.isTextblock) return !1;
                    let o = r.parentOffset,
                      i = !o,
                      s = o == r.parent.content.size,
                      l = e.domSelection();
                    return Z.test(r.parent.textContent) && l.modify
                      ? X(e, t, () => {
                          let {
                              focusNode: t,
                              focusOffset: o,
                              anchorNode: i,
                              anchorOffset: s,
                            } = e.domSelectionRange(),
                            a = l.caretBidiLevel;
                          l.modify("move", n, "character");
                          let c = r.depth
                              ? e.docView.domAfterPos(r.before())
                              : e.dom,
                            { focusNode: u, focusOffset: d } =
                              e.domSelectionRange(),
                            h =
                              (u &&
                                !c.contains(
                                  1 == u.nodeType ? u : u.parentNode
                                )) ||
                              (t == u && o == d);
                          try {
                            l.collapse(i, s),
                              t &&
                                (t != i || o != s) &&
                                l.extend &&
                                l.extend(t, o);
                          } catch (e) {}
                          return null != a && (l.caretBidiLevel = a), h;
                        })
                      : "left" == n || "backward" == n
                      ? i
                      : s;
                  })(e, t, n)));
      }
      class re {
        constructor(e, t, n, r) {
          (this.parent = e),
            (this.children = t),
            (this.dom = n),
            (this.contentDOM = r),
            (this.dirty = 0),
            (n.pmViewDesc = this);
        }
        matchesWidget(e) {
          return !1;
        }
        matchesMark(e) {
          return !1;
        }
        matchesNode(e, t, n) {
          return !1;
        }
        matchesHack(e) {
          return !1;
        }
        parseRule() {
          return null;
        }
        stopEvent(e) {
          return !1;
        }
        get size() {
          let e = 0;
          for (let t = 0; t < this.children.length; t++)
            e += this.children[t].size;
          return e;
        }
        get border() {
          return 0;
        }
        destroy() {
          (this.parent = void 0),
            this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
          for (let e = 0; e < this.children.length; e++)
            this.children[e].destroy();
        }
        posBeforeChild(e) {
          for (let t = 0, n = this.posAtStart; ; t++) {
            let r = this.children[t];
            if (r == e) return n;
            n += r.size;
          }
        }
        get posBefore() {
          return this.parent.posBeforeChild(this);
        }
        get posAtStart() {
          return this.parent
            ? this.parent.posBeforeChild(this) + this.border
            : 0;
        }
        get posAfter() {
          return this.posBefore + this.size;
        }
        get posAtEnd() {
          return this.posAtStart + this.size - 2 * this.border;
        }
        localPosFromDOM(e, t, n) {
          if (
            this.contentDOM &&
            this.contentDOM.contains(1 == e.nodeType ? e : e.parentNode)
          ) {
            if (n < 0) {
              let n, r;
              if (e == this.contentDOM) n = e.childNodes[t - 1];
              else {
                for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
                n = e.previousSibling;
              }
              for (; n && (!(r = n.pmViewDesc) || r.parent != this); )
                n = n.previousSibling;
              return n ? this.posBeforeChild(r) + r.size : this.posAtStart;
            }
            {
              let n, r;
              if (e == this.contentDOM) n = e.childNodes[t];
              else {
                for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
                n = e.nextSibling;
              }
              for (; n && (!(r = n.pmViewDesc) || r.parent != this); )
                n = n.nextSibling;
              return n ? this.posBeforeChild(r) : this.posAtEnd;
            }
          }
          let r;
          if (e == this.dom && this.contentDOM) r = t > s(this.contentDOM);
          else if (
            this.contentDOM &&
            this.contentDOM != this.dom &&
            this.dom.contains(this.contentDOM)
          )
            r = 2 & e.compareDocumentPosition(this.contentDOM);
          else if (this.dom.firstChild) {
            if (0 == t)
              for (let t = e; ; t = t.parentNode) {
                if (t == this.dom) {
                  r = !1;
                  break;
                }
                if (t.previousSibling) break;
              }
            if (null == r && t == e.childNodes.length)
              for (let t = e; ; t = t.parentNode) {
                if (t == this.dom) {
                  r = !0;
                  break;
                }
                if (t.nextSibling) break;
              }
          }
          return (null == r ? n > 0 : r) ? this.posAtEnd : this.posAtStart;
        }
        nearestDesc(e, t = !1) {
          for (let n = !0, r = e; r; r = r.parentNode) {
            let o,
              i = this.getDesc(r);
            if (i && (!t || i.node)) {
              if (
                !n ||
                !(o = i.nodeDOM) ||
                (1 == o.nodeType
                  ? o.contains(1 == e.nodeType ? e : e.parentNode)
                  : o == e)
              )
                return i;
              n = !1;
            }
          }
        }
        getDesc(e) {
          let t = e.pmViewDesc;
          for (let e = t; e; e = e.parent) if (e == this) return t;
        }
        posFromDOM(e, t, n) {
          for (let r = e; r; r = r.parentNode) {
            let o = this.getDesc(r);
            if (o) return o.localPosFromDOM(e, t, n);
          }
          return -1;
        }
        descAt(e) {
          for (let t = 0, n = 0; t < this.children.length; t++) {
            let r = this.children[t],
              o = n + r.size;
            if (n == e && o != n) {
              for (; !r.border && r.children.length; ) r = r.children[0];
              return r;
            }
            if (e < o) return r.descAt(e - n - r.border);
            n = o;
          }
        }
        domFromPos(e, t) {
          if (!this.contentDOM)
            return { node: this.dom, offset: 0, atom: e + 1 };
          let n = 0,
            r = 0;
          for (let t = 0; n < this.children.length; n++) {
            let o = this.children[n],
              i = t + o.size;
            if (i > e || o instanceof ue) {
              r = e - t;
              break;
            }
            t = i;
          }
          if (r)
            return this.children[n].domFromPos(r - this.children[n].border, t);
          for (
            let e;
            n &&
            !(e = this.children[n - 1]).size &&
            e instanceof oe &&
            e.side >= 0;
            n--
          );
          if (t <= 0) {
            let e,
              r = !0;
            for (
              ;
              (e = n ? this.children[n - 1] : null),
                e && e.dom.parentNode != this.contentDOM;
              n--, r = !1
            );
            return e && t && r && !e.border && !e.domAtom
              ? e.domFromPos(e.size, t)
              : { node: this.contentDOM, offset: e ? s(e.dom) + 1 : 0 };
          }
          {
            let e,
              r = !0;
            for (
              ;
              (e = n < this.children.length ? this.children[n] : null),
                e && e.dom.parentNode != this.contentDOM;
              n++, r = !1
            );
            return e && r && !e.border && !e.domAtom
              ? e.domFromPos(0, t)
              : {
                  node: this.contentDOM,
                  offset: e ? s(e.dom) : this.contentDOM.childNodes.length,
                };
          }
        }
        parseRange(e, t, n = 0) {
          if (0 == this.children.length)
            return {
              node: this.contentDOM,
              from: e,
              to: t,
              fromOffset: 0,
              toOffset: this.contentDOM.childNodes.length,
            };
          let r = -1,
            o = -1;
          for (let i = n, l = 0; ; l++) {
            let n = this.children[l],
              a = i + n.size;
            if (-1 == r && e <= a) {
              let o = i + n.border;
              if (
                e >= o &&
                t <= a - n.border &&
                n.node &&
                n.contentDOM &&
                this.contentDOM.contains(n.contentDOM)
              )
                return n.parseRange(e, t, o);
              e = i;
              for (let t = l; t > 0; t--) {
                let n = this.children[t - 1];
                if (
                  n.size &&
                  n.dom.parentNode == this.contentDOM &&
                  !n.emptyChildAt(1)
                ) {
                  r = s(n.dom) + 1;
                  break;
                }
                e -= n.size;
              }
              -1 == r && (r = 0);
            }
            if (r > -1 && (a > t || l == this.children.length - 1)) {
              t = a;
              for (let e = l + 1; e < this.children.length; e++) {
                let n = this.children[e];
                if (
                  n.size &&
                  n.dom.parentNode == this.contentDOM &&
                  !n.emptyChildAt(-1)
                ) {
                  o = s(n.dom);
                  break;
                }
                t += n.size;
              }
              -1 == o && (o = this.contentDOM.childNodes.length);
              break;
            }
            i = a;
          }
          return {
            node: this.contentDOM,
            from: e,
            to: t,
            fromOffset: r,
            toOffset: o,
          };
        }
        emptyChildAt(e) {
          if (this.border || !this.contentDOM || !this.children.length)
            return !1;
          let t = this.children[e < 0 ? 0 : this.children.length - 1];
          return 0 == t.size || t.emptyChildAt(e);
        }
        domAfterPos(e) {
          let { node: t, offset: n } = this.domFromPos(e, 0);
          if (1 != t.nodeType || n == t.childNodes.length)
            throw new RangeError("No node after pos " + e);
          return t.childNodes[n];
        }
        setSelection(e, t, n, r = !1) {
          let o = Math.min(e, t),
            i = Math.max(e, t);
          for (let s = 0, l = 0; s < this.children.length; s++) {
            let a = this.children[s],
              c = l + a.size;
            if (o > l && i < c)
              return a.setSelection(e - l - a.border, t - l - a.border, n, r);
            l = c;
          }
          let l = this.domFromPos(e, e ? -1 : 1),
            a = t == e ? l : this.domFromPos(t, t ? -1 : 1),
            c = n.getSelection(),
            d = !1;
          if ((R || N) && e == t) {
            let { node: e, offset: t } = l;
            if (3 == e.nodeType) {
              if (
                ((d = !(!t || "\n" != e.nodeValue[t - 1])),
                d && t == e.nodeValue.length)
              )
                for (let t, n = e; n; n = n.parentNode) {
                  if ((t = n.nextSibling)) {
                    "BR" == t.nodeName &&
                      (l = a = { node: t.parentNode, offset: s(t) + 1 });
                    break;
                  }
                  let e = n.pmViewDesc;
                  if (e && e.node && e.node.isBlock) break;
                }
            } else {
              let n = e.childNodes[t - 1];
              d = n && ("BR" == n.nodeName || "false" == n.contentEditable);
            }
          }
          if (
            R &&
            c.focusNode &&
            c.focusNode != a.node &&
            1 == c.focusNode.nodeType
          ) {
            let e = c.focusNode.childNodes[c.focusOffset];
            e && "false" == e.contentEditable && (r = !0);
          }
          if (
            !(r || (d && N)) &&
            u(l.node, l.offset, c.anchorNode, c.anchorOffset) &&
            u(a.node, a.offset, c.focusNode, c.focusOffset)
          )
            return;
          let h = !1;
          if ((c.extend || e == t) && !d) {
            c.collapse(l.node, l.offset);
            try {
              e != t && c.extend(a.node, a.offset), (h = !0);
            } catch (e) {}
          }
          if (!h) {
            if (e > t) {
              let e = l;
              (l = a), (a = e);
            }
            let n = document.createRange();
            n.setEnd(a.node, a.offset),
              n.setStart(l.node, l.offset),
              c.removeAllRanges(),
              c.addRange(n);
          }
        }
        ignoreMutation(e) {
          return !this.contentDOM && "selection" != e.type;
        }
        get contentLost() {
          return (
            this.contentDOM &&
            this.contentDOM != this.dom &&
            !this.dom.contains(this.contentDOM)
          );
        }
        markDirty(e, t) {
          for (let n = 0, r = 0; r < this.children.length; r++) {
            let o = this.children[r],
              i = n + o.size;
            if (n == i ? e <= i && t >= n : e < i && t > n) {
              let r = n + o.border,
                s = i - o.border;
              if (e >= r && t <= s)
                return (
                  (this.dirty = e == n || t == i ? 2 : 1),
                  void (e != r ||
                  t != s ||
                  (!o.contentLost && o.dom.parentNode == this.contentDOM)
                    ? o.markDirty(e - r, t - r)
                    : (o.dirty = 3))
                );
              o.dirty =
                o.dom != o.contentDOM ||
                o.dom.parentNode != this.contentDOM ||
                o.children.length
                  ? 3
                  : 2;
            }
            n = i;
          }
          this.dirty = 2;
        }
        markParentsDirty() {
          let e = 1;
          for (let t = this.parent; t; t = t.parent, e++) {
            let n = 1 == e ? 2 : 1;
            t.dirty < n && (t.dirty = n);
          }
        }
        get domAtom() {
          return !1;
        }
        get ignoreForCoords() {
          return !1;
        }
      }
      class oe extends re {
        constructor(e, t, n, r) {
          let o,
            i = t.type.toDOM;
          if (
            ("function" == typeof i &&
              (i = i(n, () =>
                o ? (o.parent ? o.parent.posBeforeChild(o) : void 0) : r
              )),
            !t.type.spec.raw)
          ) {
            if (1 != i.nodeType) {
              let e = document.createElement("span");
              e.appendChild(i), (i = e);
            }
            (i.contentEditable = "false"),
              i.classList.add("ProseMirror-widget");
          }
          super(e, [], i, null),
            (this.widget = t),
            (this.widget = t),
            (o = this);
        }
        matchesWidget(e) {
          return 0 == this.dirty && e.type.eq(this.widget.type);
        }
        parseRule() {
          return { ignore: !0 };
        }
        stopEvent(e) {
          let t = this.widget.spec.stopEvent;
          return !!t && t(e);
        }
        ignoreMutation(e) {
          return "selection" != e.type || this.widget.spec.ignoreSelection;
        }
        destroy() {
          this.widget.type.destroy(this.dom), super.destroy();
        }
        get domAtom() {
          return !0;
        }
        get side() {
          return this.widget.type.side;
        }
      }
      class ie extends re {
        constructor(e, t, n, r) {
          super(e, [], t, null), (this.textDOM = n), (this.text = r);
        }
        get size() {
          return this.text.length;
        }
        localPosFromDOM(e, t) {
          return e != this.textDOM
            ? this.posAtStart + (t ? this.size : 0)
            : this.posAtStart + t;
        }
        domFromPos(e) {
          return { node: this.textDOM, offset: e };
        }
        ignoreMutation(e) {
          return "characterData" === e.type && e.target.nodeValue == e.oldValue;
        }
      }
      class se extends re {
        constructor(e, t, n, r) {
          super(e, [], n, r), (this.mark = t);
        }
        static create(e, t, n, r) {
          let i = r.nodeViews[t.type.name],
            s = i && i(t, r, n);
          return (
            (s && s.dom) ||
              (s = o.PW.renderSpec(document, t.type.spec.toDOM(t, n))),
            new se(e, t, s.dom, s.contentDOM || s.dom)
          );
        }
        parseRule() {
          return 3 & this.dirty || this.mark.type.spec.reparseInView
            ? null
            : {
                mark: this.mark.type.name,
                attrs: this.mark.attrs,
                contentElement: this.contentDOM || void 0,
              };
        }
        matchesMark(e) {
          return 3 != this.dirty && this.mark.eq(e);
        }
        markDirty(e, t) {
          if ((super.markDirty(e, t), 0 != this.dirty)) {
            let e = this.parent;
            for (; !e.node; ) e = e.parent;
            e.dirty < this.dirty && (e.dirty = this.dirty), (this.dirty = 0);
          }
        }
        slice(e, t, n) {
          let r = se.create(this.parent, this.mark, !0, n),
            o = this.children,
            i = this.size;
          t < i && (o = ke(o, t, i, n)), e > 0 && (o = ke(o, 0, e, n));
          for (let e = 0; e < o.length; e++) o[e].parent = r;
          return (r.children = o), r;
        }
      }
      class le extends re {
        constructor(e, t, n, r, o, i, s, l, a) {
          super(e, [], o, i),
            (this.node = t),
            (this.outerDeco = n),
            (this.innerDeco = r),
            (this.nodeDOM = s),
            i && this.updateChildren(l, a);
        }
        static create(e, t, n, r, i, s) {
          let l,
            a = i.nodeViews[t.type.name],
            c =
              a &&
              a(
                t,
                i,
                () =>
                  l ? (l.parent ? l.parent.posBeforeChild(l) : void 0) : s,
                n,
                r
              ),
            u = c && c.dom,
            d = c && c.contentDOM;
          if (t.isText)
            if (u) {
              if (3 != u.nodeType)
                throw new RangeError(
                  "Text must be rendered as a DOM text node"
                );
            } else u = document.createTextNode(t.text);
          else
            u ||
              ({ dom: u, contentDOM: d } = o.PW.renderSpec(
                document,
                t.type.spec.toDOM(t)
              ));
          d ||
            t.isText ||
            "BR" == u.nodeName ||
            (u.hasAttribute("contenteditable") || (u.contentEditable = "false"),
            t.type.spec.draggable && (u.draggable = !0));
          let h = u;
          return (
            (u = ve(u, n, t)),
            c
              ? (l = new de(e, t, n, r, u, d || null, h, c, i, s + 1))
              : t.isText
              ? new ce(e, t, n, r, u, h, i)
              : new le(e, t, n, r, u, d || null, h, i, s + 1)
          );
        }
        parseRule() {
          if (this.node.type.spec.reparseInView) return null;
          let e = { node: this.node.type.name, attrs: this.node.attrs };
          if (
            ("pre" == this.node.type.whitespace &&
              (e.preserveWhitespace = "full"),
            this.contentDOM)
          )
            if (this.contentLost) {
              for (let t = this.children.length - 1; t >= 0; t--) {
                let n = this.children[t];
                if (this.dom.contains(n.dom.parentNode)) {
                  e.contentElement = n.dom.parentNode;
                  break;
                }
              }
              e.contentElement || (e.getContent = () => o.HY.empty);
            } else e.contentElement = this.contentDOM;
          else e.getContent = () => this.node.content;
          return e;
        }
        matchesNode(e, t, n) {
          return (
            0 == this.dirty &&
            e.eq(this.node) &&
            we(t, this.outerDeco) &&
            n.eq(this.innerDeco)
          );
        }
        get size() {
          return this.node.nodeSize;
        }
        get border() {
          return this.node.isLeaf ? 0 : 1;
        }
        updateChildren(e, t) {
          let n = this.node.inlineContent,
            r = t,
            i = e.composing ? this.localCompositionInfo(e, t) : null,
            s = i && i.pos > -1 ? i : null,
            l = i && i.pos < 0,
            a = new Se(this, s && s.node, e);
          !(function (e, t, n, r) {
            let o = t.locals(e),
              i = 0;
            if (0 == o.length) {
              for (let n = 0; n < e.childCount; n++) {
                let s = e.child(n);
                r(s, o, t.forChild(i, s), n), (i += s.nodeSize);
              }
              return;
            }
            let s = 0,
              l = [],
              a = null;
            for (let c = 0; ; ) {
              if (s < o.length && o[s].to == i) {
                let e,
                  t = o[s++];
                for (; s < o.length && o[s].to == i; )
                  (e || (e = [t])).push(o[s++]);
                if (e) {
                  e.sort(xe);
                  for (let t = 0; t < e.length; t++) n(e[t], c, !!a);
                } else n(t, c, !!a);
              }
              let u, d;
              if (a) (d = -1), (u = a), (a = null);
              else {
                if (!(c < e.childCount)) break;
                (d = c), (u = e.child(c++));
              }
              for (let e = 0; e < l.length; e++)
                l[e].to <= i && l.splice(e--, 1);
              for (; s < o.length && o[s].from <= i && o[s].to > i; )
                l.push(o[s++]);
              let h = i + u.nodeSize;
              if (u.isText) {
                let e = h;
                s < o.length && o[s].from < e && (e = o[s].from);
                for (let t = 0; t < l.length; t++) l[t].to < e && (e = l[t].to);
                e < h &&
                  ((a = u.cut(e - i)),
                  (u = u.cut(0, e - i)),
                  (h = e),
                  (d = -1));
              }
              r(
                u,
                u.isInline && !u.isLeaf
                  ? l.filter((e) => !e.inline)
                  : l.slice(),
                t.forChild(i, u),
                d
              ),
                (i = h);
            }
          })(
            this.node,
            this.innerDeco,
            (t, i, s) => {
              t.spec.marks
                ? a.syncToMarks(t.spec.marks, n, e)
                : t.type.side >= 0 &&
                  !s &&
                  a.syncToMarks(
                    i == this.node.childCount
                      ? o.vc.none
                      : this.node.child(i).marks,
                    n,
                    e
                  ),
                a.placeWidget(t, e, r);
            },
            (t, o, s, c) => {
              let u;
              a.syncToMarks(t.marks, n, e),
                a.findNodeMatch(t, o, s, c) ||
                  (l &&
                    e.state.selection.from > r &&
                    e.state.selection.to < r + t.nodeSize &&
                    (u = a.findIndexWithChild(i.node)) > -1 &&
                    a.updateNodeAt(t, o, s, u, e)) ||
                  a.updateNextNode(t, o, s, e, c) ||
                  a.addNode(t, o, s, e, r),
                (r += t.nodeSize);
            }
          ),
            a.syncToMarks([], n, e),
            this.node.isTextblock && a.addTextblockHacks(),
            a.destroyRest(),
            (a.changed || 2 == this.dirty) &&
              (s && this.protectLocalComposition(e, s),
              he(this.contentDOM, this.children, e),
              E &&
                (function (e) {
                  if ("UL" == e.nodeName || "OL" == e.nodeName) {
                    let t = e.style.cssText;
                    (e.style.cssText = t + "; list-style: square !important"),
                      window.getComputedStyle(e).listStyle,
                      (e.style.cssText = t);
                  }
                })(this.dom));
        }
        localCompositionInfo(e, t) {
          let { from: n, to: o } = e.state.selection;
          if (
            !(e.state.selection instanceof r.Bs) ||
            n < t ||
            o > t + this.node.content.size
          )
            return null;
          let i = e.domSelectionRange(),
            s = (function (e, t) {
              for (;;) {
                if (3 == e.nodeType) return e;
                if (1 == e.nodeType && t > 0) {
                  if (e.childNodes.length > t && 3 == e.childNodes[t].nodeType)
                    return e.childNodes[t];
                  t = p((e = e.childNodes[t - 1]));
                } else {
                  if (!(1 == e.nodeType && t < e.childNodes.length))
                    return null;
                  (e = e.childNodes[t]), (t = 0);
                }
              }
            })(i.focusNode, i.focusOffset);
          if (!s || !this.dom.contains(s.parentNode)) return null;
          if (this.node.inlineContent) {
            let e = s.nodeValue,
              r = (function (e, t, n, r) {
                for (let o = 0, i = 0; o < e.childCount && i <= r; ) {
                  let s = e.child(o++),
                    l = i;
                  if (((i += s.nodeSize), !s.isText)) continue;
                  let a = s.text;
                  for (; o < e.childCount; ) {
                    let t = e.child(o++);
                    if (((i += t.nodeSize), !t.isText)) break;
                    a += t.text;
                  }
                  if (i >= n) {
                    let e = l < r ? a.lastIndexOf(t, r - l - 1) : -1;
                    if (e >= 0 && e + t.length + l >= n) return l + e;
                    if (
                      n == r &&
                      a.length >= r + t.length - l &&
                      a.slice(r - l, r - l + t.length) == t
                    )
                      return r;
                  }
                }
                return -1;
              })(this.node.content, e, n - t, o - t);
            return r < 0 ? null : { node: s, pos: r, text: e };
          }
          return { node: s, pos: -1, text: "" };
        }
        protectLocalComposition(e, { node: t, pos: n, text: r }) {
          if (this.getDesc(t)) return;
          let o = t;
          for (; o.parentNode != this.contentDOM; o = o.parentNode) {
            for (; o.previousSibling; )
              o.parentNode.removeChild(o.previousSibling);
            for (; o.nextSibling; ) o.parentNode.removeChild(o.nextSibling);
            o.pmViewDesc && (o.pmViewDesc = void 0);
          }
          let i = new ie(this, o, t, r);
          e.input.compositionNodes.push(i),
            (this.children = ke(this.children, n, n + r.length, e, i));
        }
        update(e, t, n, r) {
          return (
            !(3 == this.dirty || !e.sameMarkup(this.node)) &&
            (this.updateInner(e, t, n, r), !0)
          );
        }
        updateInner(e, t, n, r) {
          this.updateOuterDeco(t),
            (this.node = e),
            (this.innerDeco = n),
            this.contentDOM && this.updateChildren(r, this.posAtStart),
            (this.dirty = 0);
        }
        updateOuterDeco(e) {
          if (we(e, this.outerDeco)) return;
          let t = 1 != this.nodeDOM.nodeType,
            n = this.dom;
          (this.dom = ge(
            this.dom,
            this.nodeDOM,
            me(this.outerDeco, this.node, t),
            me(e, this.node, t)
          )),
            this.dom != n &&
              ((n.pmViewDesc = void 0), (this.dom.pmViewDesc = this)),
            (this.outerDeco = e);
        }
        selectNode() {
          1 == this.nodeDOM.nodeType &&
            this.nodeDOM.classList.add("ProseMirror-selectednode"),
            (!this.contentDOM && this.node.type.spec.draggable) ||
              (this.dom.draggable = !0);
        }
        deselectNode() {
          1 == this.nodeDOM.nodeType &&
            this.nodeDOM.classList.remove("ProseMirror-selectednode"),
            (!this.contentDOM && this.node.type.spec.draggable) ||
              this.dom.removeAttribute("draggable");
        }
        get domAtom() {
          return this.node.isAtom;
        }
      }
      function ae(e, t, n, r, o) {
        return ve(r, t, e), new le(void 0, e, t, n, r, r, r, o, 0);
      }
      class ce extends le {
        constructor(e, t, n, r, o, i, s) {
          super(e, t, n, r, o, null, i, s, 0);
        }
        parseRule() {
          let e = this.nodeDOM.parentNode;
          for (; e && e != this.dom && !e.pmIsDeco; ) e = e.parentNode;
          return { skip: e || !0 };
        }
        update(e, t, n, r) {
          return (
            !(
              3 == this.dirty ||
              (0 != this.dirty && !this.inParent()) ||
              !e.sameMarkup(this.node)
            ) &&
            (this.updateOuterDeco(t),
            (0 == this.dirty && e.text == this.node.text) ||
              e.text == this.nodeDOM.nodeValue ||
              ((this.nodeDOM.nodeValue = e.text),
              r.trackWrites == this.nodeDOM && (r.trackWrites = null)),
            (this.node = e),
            (this.dirty = 0),
            !0)
          );
        }
        inParent() {
          let e = this.parent.contentDOM;
          for (let t = this.nodeDOM; t; t = t.parentNode) if (t == e) return !0;
          return !1;
        }
        domFromPos(e) {
          return { node: this.nodeDOM, offset: e };
        }
        localPosFromDOM(e, t, n) {
          return e == this.nodeDOM
            ? this.posAtStart + Math.min(t, this.node.text.length)
            : super.localPosFromDOM(e, t, n);
        }
        ignoreMutation(e) {
          return "characterData" != e.type && "selection" != e.type;
        }
        slice(e, t, n) {
          let r = this.node.cut(e, t),
            o = document.createTextNode(r.text);
          return new ce(
            this.parent,
            r,
            this.outerDeco,
            this.innerDeco,
            o,
            o,
            n
          );
        }
        markDirty(e, t) {
          super.markDirty(e, t),
            this.dom == this.nodeDOM ||
              (0 != e && t != this.nodeDOM.nodeValue.length) ||
              (this.dirty = 3);
        }
        get domAtom() {
          return !1;
        }
      }
      class ue extends re {
        parseRule() {
          return { ignore: !0 };
        }
        matchesHack(e) {
          return 0 == this.dirty && this.dom.nodeName == e;
        }
        get domAtom() {
          return !0;
        }
        get ignoreForCoords() {
          return "IMG" == this.dom.nodeName;
        }
      }
      class de extends le {
        constructor(e, t, n, r, o, i, s, l, a, c) {
          super(e, t, n, r, o, i, s, a, c), (this.spec = l);
        }
        update(e, t, n, r) {
          if (3 == this.dirty) return !1;
          if (this.spec.update) {
            let o = this.spec.update(e, t, n);
            return o && this.updateInner(e, t, n, r), o;
          }
          return !(!this.contentDOM && !e.isLeaf) && super.update(e, t, n, r);
        }
        selectNode() {
          this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
        }
        deselectNode() {
          this.spec.deselectNode
            ? this.spec.deselectNode()
            : super.deselectNode();
        }
        setSelection(e, t, n, r) {
          this.spec.setSelection
            ? this.spec.setSelection(e, t, n)
            : super.setSelection(e, t, n, r);
        }
        destroy() {
          this.spec.destroy && this.spec.destroy(), super.destroy();
        }
        stopEvent(e) {
          return !!this.spec.stopEvent && this.spec.stopEvent(e);
        }
        ignoreMutation(e) {
          return this.spec.ignoreMutation
            ? this.spec.ignoreMutation(e)
            : super.ignoreMutation(e);
        }
      }
      function he(e, t, n) {
        let r = e.firstChild,
          o = !1;
        for (let i = 0; i < t.length; i++) {
          let s = t[i],
            l = s.dom;
          if (l.parentNode == e) {
            for (; l != r; ) (r = be(r)), (o = !0);
            r = r.nextSibling;
          } else (o = !0), e.insertBefore(l, r);
          if (s instanceof se) {
            let t = r ? r.previousSibling : e.lastChild;
            he(s.contentDOM, s.children, n),
              (r = t ? t.nextSibling : e.firstChild);
          }
        }
        for (; r; ) (r = be(r)), (o = !0);
        o && n.trackWrites == e && (n.trackWrites = null);
      }
      const pe = function (e) {
        e && (this.nodeName = e);
      };
      pe.prototype = Object.create(null);
      const fe = [new pe()];
      function me(e, t, n) {
        if (0 == e.length) return fe;
        let r = n ? fe[0] : new pe(),
          o = [r];
        for (let i = 0; i < e.length; i++) {
          let s = e[i].type.attrs;
          if (s) {
            s.nodeName && o.push((r = new pe(s.nodeName)));
            for (let e in s) {
              let i = s[e];
              null != i &&
                (n &&
                  1 == o.length &&
                  o.push((r = new pe(t.isInline ? "span" : "div"))),
                "class" == e
                  ? (r.class = (r.class ? r.class + " " : "") + i)
                  : "style" == e
                  ? (r.style = (r.style ? r.style + ";" : "") + i)
                  : "nodeName" != e && (r[e] = i));
            }
          }
        }
        return o;
      }
      function ge(e, t, n, r) {
        if (n == fe && r == fe) return t;
        let o = t;
        for (let t = 0; t < r.length; t++) {
          let i = r[t],
            s = n[t];
          if (t) {
            let t;
            (s &&
              s.nodeName == i.nodeName &&
              o != e &&
              (t = o.parentNode) &&
              t.nodeName.toLowerCase() == i.nodeName) ||
              ((t = document.createElement(i.nodeName)),
              (t.pmIsDeco = !0),
              t.appendChild(o),
              (s = fe[0])),
              (o = t);
          }
          ye(o, s || fe[0], i);
        }
        return o;
      }
      function ye(e, t, n) {
        for (let r in t)
          "class" == r ||
            "style" == r ||
            "nodeName" == r ||
            r in n ||
            e.removeAttribute(r);
        for (let r in n)
          "class" != r &&
            "style" != r &&
            "nodeName" != r &&
            n[r] != t[r] &&
            e.setAttribute(r, n[r]);
        if (t.class != n.class) {
          let r = t.class ? t.class.split(" ").filter(Boolean) : [],
            o = n.class ? n.class.split(" ").filter(Boolean) : [];
          for (let t = 0; t < r.length; t++)
            -1 == o.indexOf(r[t]) && e.classList.remove(r[t]);
          for (let t = 0; t < o.length; t++)
            -1 == r.indexOf(o[t]) && e.classList.add(o[t]);
          0 == e.classList.length && e.removeAttribute("class");
        }
        if (t.style != n.style) {
          if (t.style) {
            let n,
              r =
                /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g;
            for (; (n = r.exec(t.style)); ) e.style.removeProperty(n[1]);
          }
          n.style && (e.style.cssText += n.style);
        }
      }
      function ve(e, t, n) {
        return ge(e, e, fe, me(t, n, 1 != e.nodeType));
      }
      function we(e, t) {
        if (e.length != t.length) return !1;
        for (let n = 0; n < e.length; n++)
          if (!e[n].type.eq(t[n].type)) return !1;
        return !0;
      }
      function be(e) {
        let t = e.nextSibling;
        return e.parentNode.removeChild(e), t;
      }
      class Se {
        constructor(e, t, n) {
          (this.lock = t),
            (this.view = n),
            (this.index = 0),
            (this.stack = []),
            (this.changed = !1),
            (this.top = e),
            (this.preMatch = (function (e, t) {
              let n = t,
                r = n.children.length,
                o = e.childCount,
                i = new Map(),
                s = [];
              e: for (; o > 0; ) {
                let l;
                for (;;)
                  if (r) {
                    let e = n.children[r - 1];
                    if (!(e instanceof se)) {
                      (l = e), r--;
                      break;
                    }
                    (n = e), (r = e.children.length);
                  } else {
                    if (n == t) break e;
                    (r = n.parent.children.indexOf(n)), (n = n.parent);
                  }
                let a = l.node;
                if (a) {
                  if (a != e.child(o - 1)) break;
                  --o, i.set(l, o), s.push(l);
                }
              }
              return { index: o, matched: i, matches: s.reverse() };
            })(e.node.content, e));
        }
        destroyBetween(e, t) {
          if (e != t) {
            for (let n = e; n < t; n++) this.top.children[n].destroy();
            this.top.children.splice(e, t - e), (this.changed = !0);
          }
        }
        destroyRest() {
          this.destroyBetween(this.index, this.top.children.length);
        }
        syncToMarks(e, t, n) {
          let r = 0,
            o = this.stack.length >> 1,
            i = Math.min(o, e.length);
          for (
            ;
            r < i &&
            (r == o - 1 ? this.top : this.stack[(r + 1) << 1]).matchesMark(
              e[r]
            ) &&
            !1 !== e[r].type.spec.spanning;

          )
            r++;
          for (; r < o; )
            this.destroyRest(),
              (this.top.dirty = 0),
              (this.index = this.stack.pop()),
              (this.top = this.stack.pop()),
              o--;
          for (; o < e.length; ) {
            this.stack.push(this.top, this.index + 1);
            let r = -1;
            for (
              let t = this.index;
              t < Math.min(this.index + 3, this.top.children.length);
              t++
            ) {
              let n = this.top.children[t];
              if (n.matchesMark(e[o]) && !this.isLocked(n.dom)) {
                r = t;
                break;
              }
            }
            if (r > -1)
              r > this.index &&
                ((this.changed = !0), this.destroyBetween(this.index, r)),
                (this.top = this.top.children[this.index]);
            else {
              let r = se.create(this.top, e[o], t, n);
              this.top.children.splice(this.index, 0, r),
                (this.top = r),
                (this.changed = !0);
            }
            (this.index = 0), o++;
          }
        }
        findNodeMatch(e, t, n, r) {
          let o,
            i = -1;
          if (
            r >= this.preMatch.index &&
            (o = this.preMatch.matches[r - this.preMatch.index]).parent ==
              this.top &&
            o.matchesNode(e, t, n)
          )
            i = this.top.children.indexOf(o, this.index);
          else
            for (
              let r = this.index, o = Math.min(this.top.children.length, r + 5);
              r < o;
              r++
            ) {
              let o = this.top.children[r];
              if (o.matchesNode(e, t, n) && !this.preMatch.matched.has(o)) {
                i = r;
                break;
              }
            }
          return (
            !(i < 0) && (this.destroyBetween(this.index, i), this.index++, !0)
          );
        }
        updateNodeAt(e, t, n, r, o) {
          let i = this.top.children[r];
          return (
            3 == i.dirty && i.dom == i.contentDOM && (i.dirty = 2),
            !!i.update(e, t, n, o) &&
              (this.destroyBetween(this.index, r), this.index++, !0)
          );
        }
        findIndexWithChild(e) {
          for (;;) {
            let t = e.parentNode;
            if (!t) return -1;
            if (t == this.top.contentDOM) {
              let t = e.pmViewDesc;
              if (t)
                for (let e = this.index; e < this.top.children.length; e++)
                  if (this.top.children[e] == t) return e;
              return -1;
            }
            e = t;
          }
        }
        updateNextNode(e, t, n, r, o) {
          for (let i = this.index; i < this.top.children.length; i++) {
            let s = this.top.children[i];
            if (s instanceof le) {
              let l = this.preMatch.matched.get(s);
              if (null != l && l != o) return !1;
              let a = s.dom;
              if (
                !(
                  this.isLocked(a) &&
                  !(
                    e.isText &&
                    s.node &&
                    s.node.isText &&
                    s.nodeDOM.nodeValue == e.text &&
                    3 != s.dirty &&
                    we(t, s.outerDeco)
                  )
                ) &&
                s.update(e, t, n, r)
              )
                return (
                  this.destroyBetween(this.index, i),
                  s.dom != a && (this.changed = !0),
                  this.index++,
                  !0
                );
              break;
            }
          }
          return !1;
        }
        addNode(e, t, n, r, o) {
          this.top.children.splice(
            this.index++,
            0,
            le.create(this.top, e, t, n, r, o)
          ),
            (this.changed = !0);
        }
        placeWidget(e, t, n) {
          let r =
            this.index < this.top.children.length
              ? this.top.children[this.index]
              : null;
          if (
            !r ||
            !r.matchesWidget(e) ||
            (e != r.widget && r.widget.type.toDOM.parentNode)
          ) {
            let r = new oe(this.top, e, t, n);
            this.top.children.splice(this.index++, 0, r), (this.changed = !0);
          } else this.index++;
        }
        addTextblockHacks() {
          let e = this.top.children[this.index - 1],
            t = this.top;
          for (; e instanceof se; )
            (t = e), (e = t.children[t.children.length - 1]);
          (!e ||
            !(e instanceof ce) ||
            /\n$/.test(e.node.text) ||
            (this.view.requiresGeckoHackNode && /\s$/.test(e.node.text))) &&
            ((N || O) &&
              e &&
              "false" == e.dom.contentEditable &&
              this.addHackNode("IMG", t),
            this.addHackNode("BR", this.top));
        }
        addHackNode(e, t) {
          if (
            t == this.top &&
            this.index < t.children.length &&
            t.children[this.index].matchesHack(e)
          )
            this.index++;
          else {
            let n = document.createElement(e);
            "IMG" == e &&
              ((n.className = "ProseMirror-separator"), (n.alt = "")),
              "BR" == e && (n.className = "ProseMirror-trailingBreak");
            let r = new ue(this.top, [], n, null);
            t != this.top
              ? t.children.push(r)
              : t.children.splice(this.index++, 0, r),
              (this.changed = !0);
          }
        }
        isLocked(e) {
          return (
            this.lock &&
            (e == this.lock ||
              (1 == e.nodeType && e.contains(this.lock.parentNode)))
          );
        }
      }
      function xe(e, t) {
        return e.type.side - t.type.side;
      }
      function ke(e, t, n, r, o) {
        let i = [];
        for (let s = 0, l = 0; s < e.length; s++) {
          let a = e[s],
            c = l,
            u = (l += a.size);
          c >= n || u <= t
            ? i.push(a)
            : (c < t && i.push(a.slice(0, t - c, r)),
              o && (i.push(o), (o = void 0)),
              u > n && i.push(a.slice(n - c, a.size, r)));
        }
        return i;
      }
      function Ce(e, t = null) {
        let n = e.domSelectionRange(),
          o = e.state.doc;
        if (!n.focusNode) return null;
        let i = e.docView.nearestDesc(n.focusNode),
          l = i && 0 == i.size,
          a = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
        if (a < 0) return null;
        let c,
          u,
          d = o.resolve(a);
        if (m(n)) {
          for (c = d; i && !i.node; ) i = i.parent;
          let e = i.node;
          if (
            i &&
            e.isAtom &&
            r.qv.isSelectable(e) &&
            i.parent &&
            (!e.isInline ||
              !(function (e, t, n) {
                for (let r = 0 == t, o = t == p(e); r || o; ) {
                  if (e == n) return !0;
                  let t = s(e);
                  if (!(e = e.parentNode)) return !1;
                  (r = r && 0 == t), (o = o && t == p(e));
                }
              })(n.focusNode, n.focusOffset, i.dom))
          ) {
            let e = i.posBefore;
            u = new r.qv(a == e ? d : o.resolve(e));
          }
        } else {
          let t = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
          if (t < 0) return null;
          c = o.resolve(t);
        }
        if (!u) {
          u = Ie(
            e,
            c,
            d,
            "pointer" == t || (e.state.selection.head < d.pos && !l) ? 1 : -1
          );
        }
        return u;
      }
      function Re(e) {
        return e.editable
          ? e.hasFocus()
          : Be(e) &&
              document.activeElement &&
              document.activeElement.contains(e.dom);
      }
      function Me(e, t = !1) {
        let n = e.state.selection;
        if ((De(e, n), Re(e))) {
          if (!t && e.input.mouseDown && e.input.mouseDown.allowDefault && O) {
            let t = e.domSelectionRange(),
              n = e.domObserver.currentSelection;
            if (
              t.anchorNode &&
              n.anchorNode &&
              u(t.anchorNode, t.anchorOffset, n.anchorNode, n.anchorOffset)
            )
              return (
                (e.input.mouseDown.delayedSelectionSync = !0),
                void e.domObserver.setCurSelection()
              );
          }
          if ((e.domObserver.disconnectSelection(), e.cursorWrapper))
            !(function (e) {
              let t = e.domSelection(),
                n = document.createRange(),
                r = e.cursorWrapper.dom,
                o = "IMG" == r.nodeName;
              o ? n.setEnd(r.parentNode, s(r) + 1) : n.setEnd(r, 0);
              n.collapse(!1),
                t.removeAllRanges(),
                t.addRange(n),
                !o &&
                  !e.state.selection.visible &&
                  k &&
                  C <= 11 &&
                  ((r.disabled = !0), (r.disabled = !1));
            })(e);
          else {
            let o,
              i,
              { anchor: s, head: l } = n;
            !Oe ||
              n instanceof r.Bs ||
              (n.$from.parent.inlineContent || (o = Te(e, n.from)),
              n.empty || n.$from.parent.inlineContent || (i = Te(e, n.to))),
              e.docView.setSelection(s, l, e.root, t),
              Oe && (o && Ee(o), i && Ee(i)),
              n.visible
                ? e.dom.classList.remove("ProseMirror-hideselection")
                : (e.dom.classList.add("ProseMirror-hideselection"),
                  "onselectionchange" in document &&
                    (function (e) {
                      let t = e.dom.ownerDocument;
                      t.removeEventListener(
                        "selectionchange",
                        e.input.hideSelectionGuard
                      );
                      let n = e.domSelectionRange(),
                        r = n.anchorNode,
                        o = n.anchorOffset;
                      t.addEventListener(
                        "selectionchange",
                        (e.input.hideSelectionGuard = () => {
                          (n.anchorNode == r && n.anchorOffset == o) ||
                            (t.removeEventListener(
                              "selectionchange",
                              e.input.hideSelectionGuard
                            ),
                            setTimeout(() => {
                              (Re(e) && !e.state.selection.visible) ||
                                e.dom.classList.remove(
                                  "ProseMirror-hideselection"
                                );
                            }, 20));
                        })
                      );
                    })(e));
          }
          e.domObserver.setCurSelection(), e.domObserver.connectSelection();
        }
      }
      const Oe = N || (O && T < 63);
      function Te(e, t) {
        let { node: n, offset: r } = e.docView.domFromPos(t, 0),
          o = r < n.childNodes.length ? n.childNodes[r] : null,
          i = r ? n.childNodes[r - 1] : null;
        if (N && o && "false" == o.contentEditable) return Ne(o);
        if (
          !(
            (o && "false" != o.contentEditable) ||
            (i && "false" != i.contentEditable)
          )
        ) {
          if (o) return Ne(o);
          if (i) return Ne(i);
        }
      }
      function Ne(e) {
        return (
          (e.contentEditable = "true"),
          N && e.draggable && ((e.draggable = !1), (e.wasDraggable = !0)),
          e
        );
      }
      function Ee(e) {
        (e.contentEditable = "false"),
          e.wasDraggable && ((e.draggable = !0), (e.wasDraggable = null));
      }
      function De(e, t) {
        if (t instanceof r.qv) {
          let n = e.docView.descAt(t.from);
          n != e.lastSelectedViewDesc &&
            (Ae(e), n && n.selectNode(), (e.lastSelectedViewDesc = n));
        } else Ae(e);
      }
      function Ae(e) {
        e.lastSelectedViewDesc &&
          (e.lastSelectedViewDesc.parent &&
            e.lastSelectedViewDesc.deselectNode(),
          (e.lastSelectedViewDesc = void 0));
      }
      function Ie(e, t, n, o) {
        return (
          e.someProp("createSelectionBetween", (r) => r(e, t, n)) ||
          r.Bs.between(t, n, o)
        );
      }
      function Pe(e) {
        return !(e.editable && !e.hasFocus()) && Be(e);
      }
      function Be(e) {
        let t = e.domSelectionRange();
        if (!t.anchorNode) return !1;
        try {
          return (
            e.dom.contains(
              3 == t.anchorNode.nodeType
                ? t.anchorNode.parentNode
                : t.anchorNode
            ) &&
            (e.editable ||
              e.dom.contains(
                3 == t.focusNode.nodeType ? t.focusNode.parentNode : t.focusNode
              ))
          );
        } catch (e) {
          return !1;
        }
      }
      function Fe(e, t) {
        let { $anchor: n, $head: o } = e.selection,
          i = t > 0 ? n.max(o) : n.min(o),
          s = i.parent.inlineContent
            ? i.depth
              ? e.doc.resolve(t > 0 ? i.after() : i.before())
              : null
            : i;
        return s && r.Y1.findFrom(s, t);
      }
      function ze(e, t) {
        return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0;
      }
      function Ve(e, t, n) {
        let o = e.state.selection;
        if (!(o instanceof r.Bs)) {
          if (o instanceof r.qv && o.node.isInline)
            return ze(e, new r.Bs(t > 0 ? o.$to : o.$from));
          {
            let n = Fe(e.state, t);
            return !!n && ze(e, n);
          }
        }
        if (!o.empty || n.indexOf("s") > -1) return !1;
        if (e.endOfTextblock(t > 0 ? "right" : "left")) {
          let n = Fe(e.state, t);
          return !!(n && n instanceof r.qv) && ze(e, n);
        }
        if (!(D && n.indexOf("m") > -1)) {
          let n,
            i = o.$head,
            s = i.textOffset ? null : t < 0 ? i.nodeBefore : i.nodeAfter;
          if (!s || s.isText) return !1;
          let l = t < 0 ? i.pos - s.nodeSize : i.pos;
          return (
            !!(s.isAtom || ((n = e.docView.descAt(l)) && !n.contentDOM)) &&
            (r.qv.isSelectable(s)
              ? ze(
                  e,
                  new r.qv(t < 0 ? e.state.doc.resolve(i.pos - s.nodeSize) : i)
                )
              : !!I &&
                ze(
                  e,
                  new r.Bs(e.state.doc.resolve(t < 0 ? l : l + s.nodeSize))
                ))
          );
        }
      }
      function He(e) {
        return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
      }
      function $e(e) {
        let t = e.pmViewDesc;
        return t && 0 == t.size && (e.nextSibling || "BR" != e.nodeName);
      }
      function We(e) {
        let t = e.domSelectionRange(),
          n = t.focusNode,
          r = t.focusOffset;
        if (!n) return;
        let o,
          i,
          l = !1;
        for (
          R && 1 == n.nodeType && r < He(n) && $e(n.childNodes[r]) && (l = !0);
          ;

        )
          if (r > 0) {
            if (1 != n.nodeType) break;
            {
              let e = n.childNodes[r - 1];
              if ($e(e)) (o = n), (i = --r);
              else {
                if (3 != e.nodeType) break;
                (n = e), (r = n.nodeValue.length);
              }
            }
          } else {
            if (Ge(n)) break;
            {
              let t = n.previousSibling;
              for (; t && $e(t); )
                (o = n.parentNode), (i = s(t)), (t = t.previousSibling);
              if (t) (n = t), (r = He(n));
              else {
                if (((n = n.parentNode), n == e.dom)) break;
                r = 0;
              }
            }
          }
        l ? qe(e, n, r) : o && qe(e, o, i);
      }
      function Le(e) {
        let t = e.domSelectionRange(),
          n = t.focusNode,
          r = t.focusOffset;
        if (!n) return;
        let o,
          i,
          l = He(n);
        for (;;)
          if (r < l) {
            if (1 != n.nodeType) break;
            if (!$e(n.childNodes[r])) break;
            (o = n), (i = ++r);
          } else {
            if (Ge(n)) break;
            {
              let t = n.nextSibling;
              for (; t && $e(t); )
                (o = t.parentNode), (i = s(t) + 1), (t = t.nextSibling);
              if (t) (n = t), (r = 0), (l = He(n));
              else {
                if (((n = n.parentNode), n == e.dom)) break;
                r = l = 0;
              }
            }
          }
        o && qe(e, o, i);
      }
      function Ge(e) {
        let t = e.pmViewDesc;
        return t && t.node && t.node.isBlock;
      }
      function qe(e, t, n) {
        let r = e.domSelection();
        if (m(r)) {
          let e = document.createRange();
          e.setEnd(t, n), e.setStart(t, n), r.removeAllRanges(), r.addRange(e);
        } else r.extend && r.extend(t, n);
        e.domObserver.setCurSelection();
        let { state: o } = e;
        setTimeout(() => {
          e.state == o && Me(e);
        }, 50);
      }
      function je(e, t, n) {
        let o = e.state.selection;
        if ((o instanceof r.Bs && !o.empty) || n.indexOf("s") > -1) return !1;
        if (D && n.indexOf("m") > -1) return !1;
        let { $from: i, $to: s } = o;
        if (
          !i.parent.inlineContent ||
          e.endOfTextblock(t < 0 ? "up" : "down")
        ) {
          let n = Fe(e.state, t);
          if (n && n instanceof r.qv) return ze(e, n);
        }
        if (!i.parent.inlineContent) {
          let n = t < 0 ? i : s,
            l = o instanceof r.C1 ? r.Y1.near(n, t) : r.Y1.findFrom(n, t);
          return !!l && ze(e, l);
        }
        return !1;
      }
      function Je(e, t) {
        if (!(e.state.selection instanceof r.Bs)) return !0;
        let { $head: n, $anchor: o, empty: i } = e.state.selection;
        if (!n.sameParent(o)) return !0;
        if (!i) return !1;
        if (e.endOfTextblock(t > 0 ? "forward" : "backward")) return !0;
        let s = !n.textOffset && (t < 0 ? n.nodeBefore : n.nodeAfter);
        if (s && !s.isText) {
          let r = e.state.tr;
          return (
            t < 0
              ? r.delete(n.pos - s.nodeSize, n.pos)
              : r.delete(n.pos, n.pos + s.nodeSize),
            e.dispatch(r),
            !0
          );
        }
        return !1;
      }
      function _e(e, t, n) {
        e.domObserver.stop(), (t.contentEditable = n), e.domObserver.start();
      }
      function Ke(e, t) {
        let n = t.keyCode,
          r = (function (e) {
            let t = "";
            return (
              e.ctrlKey && (t += "c"),
              e.metaKey && (t += "m"),
              e.altKey && (t += "a"),
              e.shiftKey && (t += "s"),
              t
            );
          })(t);
        return 8 == n || (D && 72 == n && "c" == r)
          ? Je(e, -1) || We(e)
          : 46 == n || (D && 68 == n && "c" == r)
          ? Je(e, 1) || Le(e)
          : 13 == n ||
            27 == n ||
            (37 == n || (D && 66 == n && "c" == r)
              ? Ve(e, -1, r) || We(e)
              : 39 == n || (D && 70 == n && "c" == r)
              ? Ve(e, 1, r) || Le(e)
              : 38 == n || (D && 80 == n && "c" == r)
              ? je(e, -1, r) || We(e)
              : 40 == n || (D && 78 == n && "c" == r)
              ? (function (e) {
                  if (!N || e.state.selection.$head.parentOffset > 0) return !1;
                  let { focusNode: t, focusOffset: n } = e.domSelectionRange();
                  if (
                    t &&
                    1 == t.nodeType &&
                    0 == n &&
                    t.firstChild &&
                    "false" == t.firstChild.contentEditable
                  ) {
                    let n = t.firstChild;
                    _e(e, n, "true"), setTimeout(() => _e(e, n, "false"), 20);
                  }
                  return !1;
                })(e) ||
                je(e, 1, r) ||
                Le(e)
              : r == (D ? "m" : "c") &&
                (66 == n || 73 == n || 89 == n || 90 == n));
      }
      function Ye(e, t) {
        e.someProp("transformCopied", (n) => {
          t = n(t, e);
        });
        let n = [],
          { content: r, openStart: i, openEnd: s } = t;
        for (
          ;
          i > 1 && s > 1 && 1 == r.childCount && 1 == r.firstChild.childCount;

        ) {
          i--, s--;
          let e = r.firstChild;
          n.push(e.type.name, e.attrs != e.type.defaultAttrs ? e.attrs : null),
            (r = e.content);
        }
        let l =
            e.someProp("clipboardSerializer") ||
            o.PW.fromSchema(e.state.schema),
          a = it(),
          c = a.createElement("div");
        c.appendChild(l.serializeFragment(r, { document: a }));
        let u,
          d = c.firstChild,
          h = 0;
        for (; d && 1 == d.nodeType && (u = rt[d.nodeName.toLowerCase()]); ) {
          for (let e = u.length - 1; e >= 0; e--) {
            let t = a.createElement(u[e]);
            for (; c.firstChild; ) t.appendChild(c.firstChild);
            c.appendChild(t), h++;
          }
          d = c.firstChild;
        }
        return (
          d &&
            1 == d.nodeType &&
            d.setAttribute(
              "data-pm-slice",
              `${i} ${s}${h ? ` -${h}` : ""} ${JSON.stringify(n)}`
            ),
          {
            dom: c,
            text:
              e.someProp("clipboardTextSerializer", (n) => n(t, e)) ||
              t.content.textBetween(0, t.content.size, "\n\n"),
          }
        );
      }
      function Ue(e, t, n, r, i) {
        let s,
          l,
          a = i.parent.type.spec.code;
        if (!n && !t) return null;
        let c = t && (r || a || !n);
        if (c) {
          if (
            (e.someProp("transformPastedText", (n) => {
              t = n(t, a || r, e);
            }),
            a)
          )
            return t
              ? new o.p2(
                  o.HY.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))),
                  0,
                  0
                )
              : o.p2.empty;
          let n = e.someProp("clipboardTextParser", (n) => n(t, i, r, e));
          if (n) l = n;
          else {
            let n = i.marks(),
              { schema: r } = e.state,
              l = o.PW.fromSchema(r);
            (s = document.createElement("div")),
              t.split(/(?:\r\n?|\n)+/).forEach((e) => {
                let t = s.appendChild(document.createElement("p"));
                e && t.appendChild(l.serializeNode(r.text(e, n)));
              });
          }
        } else
          e.someProp("transformPastedHTML", (t) => {
            n = t(n, e);
          }),
            (s = (function (e) {
              let t = /^(\s*<meta [^>]*>)*/.exec(e);
              t && (e = e.slice(t[0].length));
              let n,
                r = it().createElement("div"),
                o = /<([a-z][^>\s]+)/i.exec(e);
              (n = o && rt[o[1].toLowerCase()]) &&
                (e =
                  n.map((e) => "<" + e + ">").join("") +
                  e +
                  n
                    .map((e) => "</" + e + ">")
                    .reverse()
                    .join(""));
              if (((r.innerHTML = e), n))
                for (let e = 0; e < n.length; e++)
                  r = r.querySelector(n[e]) || r;
              return r;
            })(n)),
            I &&
              (function (e) {
                let t = e.querySelectorAll(
                  O
                    ? "span:not([class]):not([style])"
                    : "span.Apple-converted-space"
                );
                for (let n = 0; n < t.length; n++) {
                  let r = t[n];
                  1 == r.childNodes.length &&
                    " " == r.textContent &&
                    r.parentNode &&
                    r.parentNode.replaceChild(
                      e.ownerDocument.createTextNode(" "),
                      r
                    );
                }
              })(s);
        let u = s && s.querySelector("[data-pm-slice]"),
          d =
            u &&
            /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(
              u.getAttribute("data-pm-slice") || ""
            );
        if (d && d[3])
          for (let e = +d[3]; e > 0; e--) {
            let e = s.firstChild;
            for (; e && 1 != e.nodeType; ) e = e.nextSibling;
            if (!e) break;
            s = e;
          }
        if (!l) {
          let t =
            e.someProp("clipboardParser") ||
            e.someProp("domParser") ||
            o.aw.fromSchema(e.state.schema);
          l = t.parseSlice(s, {
            preserveWhitespace: !(!c && !d),
            context: i,
            ruleFromNode: (e) =>
              "BR" != e.nodeName ||
              e.nextSibling ||
              !e.parentNode ||
              Xe.test(e.parentNode.nodeName)
                ? null
                : { ignore: !0 },
          });
        }
        if (d)
          l = (function (e, t) {
            if (!e.size) return e;
            let n,
              r = e.content.firstChild.type.schema;
            try {
              n = JSON.parse(t);
            } catch (t) {
              return e;
            }
            let { content: i, openStart: s, openEnd: l } = e;
            for (let e = n.length - 2; e >= 0; e -= 2) {
              let t = r.nodes[n[e]];
              if (!t || t.hasRequiredAttrs()) break;
              (i = o.HY.from(t.create(n[e + 1], i))), s++, l++;
            }
            return new o.p2(i, s, l);
          })(nt(l, +d[1], +d[2]), d[4]);
        else if (
          ((l = o.p2.maxOpen(
            (function (e, t) {
              if (e.childCount < 2) return e;
              for (let n = t.depth; n >= 0; n--) {
                let r,
                  i = t.node(n).contentMatchAt(t.index(n)),
                  s = [];
                if (
                  (e.forEach((e) => {
                    if (!s) return;
                    let t,
                      n = i.findWrapping(e.type);
                    if (!n) return (s = null);
                    if (
                      (t =
                        s.length && r.length && Qe(n, r, e, s[s.length - 1], 0))
                    )
                      s[s.length - 1] = t;
                    else {
                      s.length &&
                        (s[s.length - 1] = et(s[s.length - 1], r.length));
                      let t = Ze(e, n);
                      s.push(t), (i = i.matchType(t.type)), (r = n);
                    }
                  }),
                  s)
                )
                  return o.HY.from(s);
              }
              return e;
            })(l.content, i),
            !0
          )),
          l.openStart || l.openEnd)
        ) {
          let e = 0,
            t = 0;
          for (
            let t = l.content.firstChild;
            e < l.openStart && !t.type.spec.isolating;
            e++, t = t.firstChild
          );
          for (
            let e = l.content.lastChild;
            t < l.openEnd && !e.type.spec.isolating;
            t++, e = e.lastChild
          );
          l = nt(l, e, t);
        }
        return (
          e.someProp("transformPasted", (t) => {
            l = t(l, e);
          }),
          l
        );
      }
      const Xe =
        /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
      function Ze(e, t, n = 0) {
        for (let r = t.length - 1; r >= n; r--)
          e = t[r].create(null, o.HY.from(e));
        return e;
      }
      function Qe(e, t, n, r, i) {
        if (i < e.length && i < t.length && e[i] == t[i]) {
          let s = Qe(e, t, n, r.lastChild, i + 1);
          if (s) return r.copy(r.content.replaceChild(r.childCount - 1, s));
          if (
            r
              .contentMatchAt(r.childCount)
              .matchType(i == e.length - 1 ? n.type : e[i + 1])
          )
            return r.copy(r.content.append(o.HY.from(Ze(n, e, i + 1))));
        }
      }
      function et(e, t) {
        if (0 == t) return e;
        let n = e.content.replaceChild(
            e.childCount - 1,
            et(e.lastChild, t - 1)
          ),
          r = e.contentMatchAt(e.childCount).fillBefore(o.HY.empty, !0);
        return e.copy(n.append(r));
      }
      function tt(e, t, n, r, i, s) {
        let l = t < 0 ? e.firstChild : e.lastChild,
          a = l.content;
        return (
          i < r - 1 && (a = tt(a, t, n, r, i + 1, s)),
          i >= n &&
            (a =
              t < 0
                ? l
                    .contentMatchAt(0)
                    .fillBefore(a, e.childCount > 1 || s <= i)
                    .append(a)
                : a.append(
                    l.contentMatchAt(l.childCount).fillBefore(o.HY.empty, !0)
                  )),
          e.replaceChild(t < 0 ? 0 : e.childCount - 1, l.copy(a))
        );
      }
      function nt(e, t, n) {
        return (
          t < e.openStart &&
            (e = new o.p2(
              tt(e.content, -1, t, e.openStart, 0, e.openEnd),
              t,
              e.openEnd
            )),
          n < e.openEnd &&
            (e = new o.p2(
              tt(e.content, 1, n, e.openEnd, 0, 0),
              e.openStart,
              n
            )),
          e
        );
      }
      const rt = {
        thead: ["table"],
        tbody: ["table"],
        tfoot: ["table"],
        caption: ["table"],
        colgroup: ["table"],
        col: ["table", "colgroup"],
        tr: ["table", "tbody"],
        td: ["table", "tbody", "tr"],
        th: ["table", "tbody", "tr"],
      };
      let ot = null;
      function it() {
        return ot || (ot = document.implementation.createHTMLDocument("title"));
      }
      const st = {},
        lt = {},
        at = { touchstart: !0, touchmove: !0 };
      class ct {
        constructor() {
          (this.shiftKey = !1),
            (this.mouseDown = null),
            (this.lastKeyCode = null),
            (this.lastKeyCodeTime = 0),
            (this.lastClick = { time: 0, x: 0, y: 0, type: "" }),
            (this.lastSelectionOrigin = null),
            (this.lastSelectionTime = 0),
            (this.lastIOSEnter = 0),
            (this.lastIOSEnterFallbackTimeout = -1),
            (this.lastFocus = 0),
            (this.lastTouch = 0),
            (this.lastAndroidDelete = 0),
            (this.composing = !1),
            (this.composingTimeout = -1),
            (this.compositionNodes = []),
            (this.compositionEndedAt = -2e8),
            (this.domChangeCount = 0),
            (this.eventHandlers = Object.create(null)),
            (this.hideSelectionGuard = null);
        }
      }
      function ut(e, t) {
        (e.input.lastSelectionOrigin = t),
          (e.input.lastSelectionTime = Date.now());
      }
      function dt(e) {
        e.someProp("handleDOMEvents", (t) => {
          for (let n in t)
            e.input.eventHandlers[n] ||
              e.dom.addEventListener(
                n,
                (e.input.eventHandlers[n] = (t) => ht(e, t))
              );
        });
      }
      function ht(e, t) {
        return e.someProp("handleDOMEvents", (n) => {
          let r = n[t.type];
          return !!r && (r(e, t) || t.defaultPrevented);
        });
      }
      function pt(e, t) {
        if (!t.bubbles) return !0;
        if (t.defaultPrevented) return !1;
        for (let n = t.target; n != e.dom; n = n.parentNode)
          if (
            !n ||
            11 == n.nodeType ||
            (n.pmViewDesc && n.pmViewDesc.stopEvent(t))
          )
            return !1;
        return !0;
      }
      function ft(e) {
        return { left: e.clientX, top: e.clientY };
      }
      function mt(e, t, n, r, o) {
        if (-1 == r) return !1;
        let i = e.state.doc.resolve(r);
        for (let r = i.depth + 1; r > 0; r--)
          if (
            e.someProp(t, (t) =>
              r > i.depth
                ? t(e, n, i.nodeAfter, i.before(r), o, !0)
                : t(e, n, i.node(r), i.before(r), o, !1)
            )
          )
            return !0;
        return !1;
      }
      function gt(e, t, n) {
        e.focused || e.focus();
        let r = e.state.tr.setSelection(t);
        "pointer" == n && r.setMeta("pointer", !0), e.dispatch(r);
      }
      function yt(e, t, n, o, i) {
        return (
          mt(e, "handleClickOn", t, n, o) ||
          e.someProp("handleClick", (n) => n(e, t, o)) ||
          (i
            ? (function (e, t) {
                if (-1 == t) return !1;
                let n,
                  o,
                  i = e.state.selection;
                i instanceof r.qv && (n = i.node);
                let s = e.state.doc.resolve(t);
                for (let e = s.depth + 1; e > 0; e--) {
                  let t = e > s.depth ? s.nodeAfter : s.node(e);
                  if (r.qv.isSelectable(t)) {
                    o =
                      n &&
                      i.$from.depth > 0 &&
                      e >= i.$from.depth &&
                      s.before(i.$from.depth + 1) == i.$from.pos
                        ? s.before(i.$from.depth)
                        : s.before(e);
                    break;
                  }
                }
                return (
                  null != o &&
                  (gt(e, r.qv.create(e.state.doc, o), "pointer"), !0)
                );
              })(e, n)
            : (function (e, t) {
                if (-1 == t) return !1;
                let n = e.state.doc.resolve(t),
                  o = n.nodeAfter;
                return (
                  !!(o && o.isAtom && r.qv.isSelectable(o)) &&
                  (gt(e, new r.qv(n), "pointer"), !0)
                );
              })(e, n))
        );
      }
      function vt(e, t, n, r) {
        return (
          mt(e, "handleDoubleClickOn", t, n, r) ||
          e.someProp("handleDoubleClick", (n) => n(e, t, r))
        );
      }
      function wt(e, t, n, o) {
        return (
          mt(e, "handleTripleClickOn", t, n, o) ||
          e.someProp("handleTripleClick", (n) => n(e, t, o)) ||
          (function (e, t, n) {
            if (0 != n.button) return !1;
            let o = e.state.doc;
            if (-1 == t)
              return (
                !!o.inlineContent &&
                (gt(e, r.Bs.create(o, 0, o.content.size), "pointer"), !0)
              );
            let i = o.resolve(t);
            for (let t = i.depth + 1; t > 0; t--) {
              let n = t > i.depth ? i.nodeAfter : i.node(t),
                s = i.before(t);
              if (n.inlineContent)
                gt(e, r.Bs.create(o, s + 1, s + 1 + n.content.size), "pointer");
              else {
                if (!r.qv.isSelectable(n)) continue;
                gt(e, r.qv.create(o, s), "pointer");
              }
              return !0;
            }
          })(e, n, o)
        );
      }
      function bt(e) {
        return Ot(e);
      }
      (lt.keydown = (e, t) => {
        let n = t;
        if (
          ((e.input.shiftKey = 16 == n.keyCode || n.shiftKey),
          !kt(e, n) &&
            ((e.input.lastKeyCode = n.keyCode),
            (e.input.lastKeyCodeTime = Date.now()),
            !A || !O || 13 != n.keyCode))
        )
          if (
            (229 != n.keyCode && e.domObserver.forceFlush(),
            !E || 13 != n.keyCode || n.ctrlKey || n.altKey || n.metaKey)
          )
            e.someProp("handleKeyDown", (t) => t(e, n)) || Ke(e, n)
              ? n.preventDefault()
              : ut(e, "key");
          else {
            let t = Date.now();
            (e.input.lastIOSEnter = t),
              (e.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
                e.input.lastIOSEnter == t &&
                  (e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter"))),
                  (e.input.lastIOSEnter = 0));
              }, 200));
          }
      }),
        (lt.keyup = (e, t) => {
          16 == t.keyCode && (e.input.shiftKey = !1);
        }),
        (lt.keypress = (e, t) => {
          let n = t;
          if (
            kt(e, n) ||
            !n.charCode ||
            (n.ctrlKey && !n.altKey) ||
            (D && n.metaKey)
          )
            return;
          if (e.someProp("handleKeyPress", (t) => t(e, n)))
            return void n.preventDefault();
          let o = e.state.selection;
          if (!(o instanceof r.Bs && o.$from.sameParent(o.$to))) {
            let t = String.fromCharCode(n.charCode);
            /[\r\n]/.test(t) ||
              e.someProp("handleTextInput", (n) =>
                n(e, o.$from.pos, o.$to.pos, t)
              ) ||
              e.dispatch(e.state.tr.insertText(t).scrollIntoView()),
              n.preventDefault();
          }
        });
      const St = D ? "metaKey" : "ctrlKey";
      st.mousedown = (e, t) => {
        let n = t;
        e.input.shiftKey = n.shiftKey;
        let r = bt(e),
          o = Date.now(),
          i = "singleClick";
        o - e.input.lastClick.time < 500 &&
          (function (e, t) {
            let n = t.x - e.clientX,
              r = t.y - e.clientY;
            return n * n + r * r < 100;
          })(n, e.input.lastClick) &&
          !n[St] &&
          ("singleClick" == e.input.lastClick.type
            ? (i = "doubleClick")
            : "doubleClick" == e.input.lastClick.type && (i = "tripleClick")),
          (e.input.lastClick = {
            time: o,
            x: n.clientX,
            y: n.clientY,
            type: i,
          });
        let s = e.posAtCoords(ft(n));
        s &&
          ("singleClick" == i
            ? (e.input.mouseDown && e.input.mouseDown.done(),
              (e.input.mouseDown = new xt(e, s, n, !!r)))
            : ("doubleClick" == i ? vt : wt)(e, s.pos, s.inside, n)
            ? n.preventDefault()
            : ut(e, "pointer"));
      };
      class xt {
        constructor(e, t, n, o) {
          let i, s;
          if (
            ((this.view = e),
            (this.pos = t),
            (this.event = n),
            (this.flushed = o),
            (this.delayedSelectionSync = !1),
            (this.mightDrag = null),
            (this.startDoc = e.state.doc),
            (this.selectNode = !!n[St]),
            (this.allowDefault = n.shiftKey),
            t.inside > -1)
          )
            (i = e.state.doc.nodeAt(t.inside)), (s = t.inside);
          else {
            let n = e.state.doc.resolve(t.pos);
            (i = n.parent), (s = n.depth ? n.before() : 0);
          }
          const l = o ? null : n.target,
            a = l ? e.docView.nearestDesc(l, !0) : null;
          this.target = a ? a.dom : null;
          let { selection: c } = e.state;
          ((0 == n.button &&
            i.type.spec.draggable &&
            !1 !== i.type.spec.selectable) ||
            (c instanceof r.qv && c.from <= s && c.to > s)) &&
            (this.mightDrag = {
              node: i,
              pos: s,
              addAttr: !(!this.target || this.target.draggable),
              setUneditable: !(
                !this.target ||
                !R ||
                this.target.hasAttribute("contentEditable")
              ),
            }),
            this.target &&
              this.mightDrag &&
              (this.mightDrag.addAttr || this.mightDrag.setUneditable) &&
              (this.view.domObserver.stop(),
              this.mightDrag.addAttr && (this.target.draggable = !0),
              this.mightDrag.setUneditable &&
                setTimeout(() => {
                  this.view.input.mouseDown == this &&
                    this.target.setAttribute("contentEditable", "false");
                }, 20),
              this.view.domObserver.start()),
            e.root.addEventListener("mouseup", (this.up = this.up.bind(this))),
            e.root.addEventListener(
              "mousemove",
              (this.move = this.move.bind(this))
            ),
            ut(e, "pointer");
        }
        done() {
          this.view.root.removeEventListener("mouseup", this.up),
            this.view.root.removeEventListener("mousemove", this.move),
            this.mightDrag &&
              this.target &&
              (this.view.domObserver.stop(),
              this.mightDrag.addAttr &&
                this.target.removeAttribute("draggable"),
              this.mightDrag.setUneditable &&
                this.target.removeAttribute("contentEditable"),
              this.view.domObserver.start()),
            this.delayedSelectionSync && setTimeout(() => Me(this.view)),
            (this.view.input.mouseDown = null);
        }
        up(e) {
          if ((this.done(), !this.view.dom.contains(e.target))) return;
          let t = this.pos;
          this.view.state.doc != this.startDoc &&
            (t = this.view.posAtCoords(ft(e))),
            this.updateAllowDefault(e),
            this.allowDefault || !t
              ? ut(this.view, "pointer")
              : yt(this.view, t.pos, t.inside, e, this.selectNode)
              ? e.preventDefault()
              : 0 == e.button &&
                (this.flushed ||
                  (N && this.mightDrag && !this.mightDrag.node.isAtom) ||
                  (O &&
                    !this.view.state.selection.visible &&
                    Math.min(
                      Math.abs(t.pos - this.view.state.selection.from),
                      Math.abs(t.pos - this.view.state.selection.to)
                    ) <= 2))
              ? (gt(
                  this.view,
                  r.Y1.near(this.view.state.doc.resolve(t.pos)),
                  "pointer"
                ),
                e.preventDefault())
              : ut(this.view, "pointer");
        }
        move(e) {
          this.updateAllowDefault(e),
            ut(this.view, "pointer"),
            0 == e.buttons && this.done();
        }
        updateAllowDefault(e) {
          !this.allowDefault &&
            (Math.abs(this.event.x - e.clientX) > 4 ||
              Math.abs(this.event.y - e.clientY) > 4) &&
            (this.allowDefault = !0);
        }
      }
      function kt(e, t) {
        return (
          !!e.composing ||
          (!!(N && Math.abs(t.timeStamp - e.input.compositionEndedAt) < 500) &&
            ((e.input.compositionEndedAt = -2e8), !0))
        );
      }
      (st.touchstart = (e) => {
        (e.input.lastTouch = Date.now()), bt(e), ut(e, "pointer");
      }),
        (st.touchmove = (e) => {
          (e.input.lastTouch = Date.now()), ut(e, "pointer");
        }),
        (st.contextmenu = (e) => bt(e));
      const Ct = A ? 5e3 : -1;
      function Rt(e, t) {
        clearTimeout(e.input.composingTimeout),
          t > -1 && (e.input.composingTimeout = setTimeout(() => Ot(e), t));
      }
      function Mt(e) {
        for (
          e.composing &&
          ((e.input.composing = !1),
          (e.input.compositionEndedAt = (function () {
            let e = document.createEvent("Event");
            return e.initEvent("event", !0, !0), e.timeStamp;
          })()));
          e.input.compositionNodes.length > 0;

        )
          e.input.compositionNodes.pop().markParentsDirty();
      }
      function Ot(e, t = !1) {
        if (!(A && e.domObserver.flushingSoon >= 0)) {
          if (
            (e.domObserver.forceFlush(),
            Mt(e),
            t || (e.docView && e.docView.dirty))
          ) {
            let t = Ce(e);
            return (
              t && !t.eq(e.state.selection)
                ? e.dispatch(e.state.tr.setSelection(t))
                : e.updateState(e.state),
              !0
            );
          }
          return !1;
        }
      }
      (lt.compositionstart = lt.compositionupdate =
        (e) => {
          if (!e.composing) {
            e.domObserver.flush();
            let { state: t } = e,
              n = t.selection.$from;
            if (
              t.selection.empty &&
              (t.storedMarks ||
                (!n.textOffset &&
                  n.parentOffset &&
                  n.nodeBefore.marks.some((e) => !1 === e.type.spec.inclusive)))
            )
              (e.markCursor = e.state.storedMarks || n.marks()),
                Ot(e, !0),
                (e.markCursor = null);
            else if (
              (Ot(e),
              R &&
                t.selection.empty &&
                n.parentOffset &&
                !n.textOffset &&
                n.nodeBefore.marks.length)
            ) {
              let t = e.domSelectionRange();
              for (
                let n = t.focusNode, r = t.focusOffset;
                n && 1 == n.nodeType && 0 != r;

              ) {
                let t = r < 0 ? n.lastChild : n.childNodes[r - 1];
                if (!t) break;
                if (3 == t.nodeType) {
                  e.domSelection().collapse(t, t.nodeValue.length);
                  break;
                }
                (n = t), (r = -1);
              }
            }
            e.input.composing = !0;
          }
          Rt(e, Ct);
        }),
        (lt.compositionend = (e, t) => {
          e.composing &&
            ((e.input.composing = !1),
            (e.input.compositionEndedAt = t.timeStamp),
            Rt(e, 20));
        });
      const Tt = (k && C < 15) || (E && P < 604);
      function Nt(e, t, n, r, i) {
        let s = Ue(e, t, n, r, e.state.selection.$from);
        if (e.someProp("handlePaste", (t) => t(e, i, s || o.p2.empty)))
          return !0;
        if (!s) return !1;
        let l = (function (e) {
            return 0 == e.openStart &&
              0 == e.openEnd &&
              1 == e.content.childCount
              ? e.content.firstChild
              : null;
          })(s),
          a = l
            ? e.state.tr.replaceSelectionWith(l, e.input.shiftKey)
            : e.state.tr.replaceSelection(s);
        return (
          e.dispatch(
            a.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")
          ),
          !0
        );
      }
      (st.copy = lt.cut =
        (e, t) => {
          let n = t,
            r = e.state.selection,
            o = "cut" == n.type;
          if (r.empty) return;
          let i = Tt ? null : n.clipboardData,
            s = r.content(),
            { dom: l, text: a } = Ye(e, s);
          i
            ? (n.preventDefault(),
              i.clearData(),
              i.setData("text/html", l.innerHTML),
              i.setData("text/plain", a))
            : (function (e, t) {
                if (!e.dom.parentNode) return;
                let n = e.dom.parentNode.appendChild(
                  document.createElement("div")
                );
                n.appendChild(t),
                  (n.style.cssText =
                    "position: fixed; left: -10000px; top: 10px");
                let r = getSelection(),
                  o = document.createRange();
                o.selectNodeContents(t),
                  e.dom.blur(),
                  r.removeAllRanges(),
                  r.addRange(o),
                  setTimeout(() => {
                    n.parentNode && n.parentNode.removeChild(n), e.focus();
                  }, 50);
              })(e, l),
            o &&
              e.dispatch(
                e.state.tr
                  .deleteSelection()
                  .scrollIntoView()
                  .setMeta("uiEvent", "cut")
              );
        }),
        (lt.paste = (e, t) => {
          let n = t;
          if (e.composing && !A) return;
          let r = Tt ? null : n.clipboardData;
          r &&
          Nt(
            e,
            r.getData("text/plain"),
            r.getData("text/html"),
            e.input.shiftKey,
            n
          )
            ? n.preventDefault()
            : (function (e, t) {
                if (!e.dom.parentNode) return;
                let n =
                    e.input.shiftKey ||
                    e.state.selection.$from.parent.type.spec.code,
                  r = e.dom.parentNode.appendChild(
                    document.createElement(n ? "textarea" : "div")
                  );
                n || (r.contentEditable = "true"),
                  (r.style.cssText =
                    "position: fixed; left: -10000px; top: 10px"),
                  r.focus(),
                  setTimeout(() => {
                    e.focus(),
                      r.parentNode && r.parentNode.removeChild(r),
                      n
                        ? Nt(e, r.value, null, e.input.shiftKey, t)
                        : Nt(
                            e,
                            r.textContent,
                            r.innerHTML,
                            e.input.shiftKey,
                            t
                          );
                  }, 50);
              })(e, n);
        });
      class Et {
        constructor(e, t) {
          (this.slice = e), (this.move = t);
        }
      }
      const Dt = D ? "altKey" : "ctrlKey";
      (st.dragstart = (e, t) => {
        let n = t,
          o = e.input.mouseDown;
        if ((o && o.done(), !n.dataTransfer)) return;
        let i = e.state.selection,
          s = i.empty ? null : e.posAtCoords(ft(n));
        if (
          s &&
          s.pos >= i.from &&
          s.pos <= (i instanceof r.qv ? i.to - 1 : i.to)
        );
        else if (o && o.mightDrag)
          e.dispatch(
            e.state.tr.setSelection(r.qv.create(e.state.doc, o.mightDrag.pos))
          );
        else if (n.target && 1 == n.target.nodeType) {
          let t = e.docView.nearestDesc(n.target, !0);
          t &&
            t.node.type.spec.draggable &&
            t != e.docView &&
            e.dispatch(
              e.state.tr.setSelection(r.qv.create(e.state.doc, t.posBefore))
            );
        }
        let l = e.state.selection.content(),
          { dom: a, text: c } = Ye(e, l);
        n.dataTransfer.clearData(),
          n.dataTransfer.setData(Tt ? "Text" : "text/html", a.innerHTML),
          (n.dataTransfer.effectAllowed = "copyMove"),
          Tt || n.dataTransfer.setData("text/plain", c),
          (e.dragging = new Et(l, !n[Dt]));
      }),
        (st.dragend = (e) => {
          let t = e.dragging;
          window.setTimeout(() => {
            e.dragging == t && (e.dragging = null);
          }, 50);
        }),
        (lt.dragover = lt.dragenter = (e, t) => t.preventDefault()),
        (lt.drop = (e, t) => {
          let n = t,
            s = e.dragging;
          if (((e.dragging = null), !n.dataTransfer)) return;
          let l = e.posAtCoords(ft(n));
          if (!l) return;
          let a = e.state.doc.resolve(l.pos),
            c = s && s.slice;
          c
            ? e.someProp("transformPasted", (t) => {
                c = t(c, e);
              })
            : (c = Ue(
                e,
                n.dataTransfer.getData(Tt ? "Text" : "text/plain"),
                Tt ? null : n.dataTransfer.getData("text/html"),
                !1,
                a
              ));
          let u = !(!s || n[Dt]);
          if (e.someProp("handleDrop", (t) => t(e, n, c || o.p2.empty, u)))
            return void n.preventDefault();
          if (!c) return;
          n.preventDefault();
          let d = c ? (0, i.nj)(e.state.doc, a.pos, c) : a.pos;
          null == d && (d = a.pos);
          let h = e.state.tr;
          u && h.deleteSelection();
          let p = h.mapping.map(d),
            f = 0 == c.openStart && 0 == c.openEnd && 1 == c.content.childCount,
            m = h.doc;
          if (
            (f
              ? h.replaceRangeWith(p, p, c.content.firstChild)
              : h.replaceRange(p, p, c),
            h.doc.eq(m))
          )
            return;
          let g = h.doc.resolve(p);
          if (
            f &&
            r.qv.isSelectable(c.content.firstChild) &&
            g.nodeAfter &&
            g.nodeAfter.sameMarkup(c.content.firstChild)
          )
            h.setSelection(new r.qv(g));
          else {
            let t = h.mapping.map(d);
            h.mapping.maps[h.mapping.maps.length - 1].forEach(
              (e, n, r, o) => (t = o)
            ),
              h.setSelection(Ie(e, g, h.doc.resolve(t)));
          }
          e.focus(), e.dispatch(h.setMeta("uiEvent", "drop"));
        }),
        (st.focus = (e) => {
          (e.input.lastFocus = Date.now()),
            e.focused ||
              (e.domObserver.stop(),
              e.dom.classList.add("ProseMirror-focused"),
              e.domObserver.start(),
              (e.focused = !0),
              setTimeout(() => {
                e.docView &&
                  e.hasFocus() &&
                  !e.domObserver.currentSelection.eq(e.domSelectionRange()) &&
                  Me(e);
              }, 20));
        }),
        (st.blur = (e, t) => {
          let n = t;
          e.focused &&
            (e.domObserver.stop(),
            e.dom.classList.remove("ProseMirror-focused"),
            e.domObserver.start(),
            n.relatedTarget &&
              e.dom.contains(n.relatedTarget) &&
              e.domObserver.currentSelection.clear(),
            (e.focused = !1));
        }),
        (st.beforeinput = (e, t) => {
          if (O && A && "deleteContentBackward" == t.inputType) {
            e.domObserver.flushSoon();
            let { domChangeCount: t } = e.input;
            setTimeout(() => {
              if (e.input.domChangeCount != t) return;
              if (
                (e.dom.blur(),
                e.focus(),
                e.someProp("handleKeyDown", (t) => t(e, g(8, "Backspace"))))
              )
                return;
              let { $cursor: n } = e.state.selection;
              n &&
                n.pos > 0 &&
                e.dispatch(
                  e.state.tr.delete(n.pos - 1, n.pos).scrollIntoView()
                );
            }, 50);
          }
        });
      for (let e in lt) st[e] = lt[e];
      function At(e, t) {
        if (e == t) return !0;
        for (let n in e) if (e[n] !== t[n]) return !1;
        for (let n in t) if (!(n in e)) return !1;
        return !0;
      }
      class It {
        constructor(e, t) {
          (this.toDOM = e),
            (this.spec = t || Vt),
            (this.side = this.spec.side || 0);
        }
        map(e, t, n, r) {
          let { pos: o, deleted: i } = e.mapResult(
            t.from + r,
            this.side < 0 ? -1 : 1
          );
          return i ? null : new Ft(o - n, o - n, this);
        }
        valid() {
          return !0;
        }
        eq(e) {
          return (
            this == e ||
            (e instanceof It &&
              ((this.spec.key && this.spec.key == e.spec.key) ||
                (this.toDOM == e.toDOM && At(this.spec, e.spec))))
          );
        }
        destroy(e) {
          this.spec.destroy && this.spec.destroy(e);
        }
      }
      class Pt {
        constructor(e, t) {
          (this.attrs = e), (this.spec = t || Vt);
        }
        map(e, t, n, r) {
          let o = e.map(t.from + r, this.spec.inclusiveStart ? -1 : 1) - n,
            i = e.map(t.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
          return o >= i ? null : new Ft(o, i, this);
        }
        valid(e, t) {
          return t.from < t.to;
        }
        eq(e) {
          return (
            this == e ||
            (e instanceof Pt &&
              At(this.attrs, e.attrs) &&
              At(this.spec, e.spec))
          );
        }
        static is(e) {
          return e.type instanceof Pt;
        }
        destroy() {}
      }
      class Bt {
        constructor(e, t) {
          (this.attrs = e), (this.spec = t || Vt);
        }
        map(e, t, n, r) {
          let o = e.mapResult(t.from + r, 1);
          if (o.deleted) return null;
          let i = e.mapResult(t.to + r, -1);
          return i.deleted || i.pos <= o.pos
            ? null
            : new Ft(o.pos - n, i.pos - n, this);
        }
        valid(e, t) {
          let n,
            { index: r, offset: o } = e.content.findIndex(t.from);
          return (
            o == t.from && !(n = e.child(r)).isText && o + n.nodeSize == t.to
          );
        }
        eq(e) {
          return (
            this == e ||
            (e instanceof Bt &&
              At(this.attrs, e.attrs) &&
              At(this.spec, e.spec))
          );
        }
        destroy() {}
      }
      class Ft {
        constructor(e, t, n) {
          (this.from = e), (this.to = t), (this.type = n);
        }
        copy(e, t) {
          return new Ft(e, t, this.type);
        }
        eq(e, t = 0) {
          return (
            this.type.eq(e.type) &&
            this.from + t == e.from &&
            this.to + t == e.to
          );
        }
        map(e, t, n) {
          return this.type.map(e, this, t, n);
        }
        static widget(e, t, n) {
          return new Ft(e, e, new It(t, n));
        }
        static inline(e, t, n, r) {
          return new Ft(e, t, new Pt(n, r));
        }
        static node(e, t, n, r) {
          return new Ft(e, t, new Bt(n, r));
        }
        get spec() {
          return this.type.spec;
        }
        get inline() {
          return this.type instanceof Pt;
        }
      }
      const zt = [],
        Vt = {};
      class Ht {
        constructor(e, t) {
          (this.local = e.length ? e : zt), (this.children = t.length ? t : zt);
        }
        static create(e, t) {
          return t.length ? jt(t, e, 0, Vt) : $t;
        }
        find(e, t, n) {
          let r = [];
          return (
            this.findInner(null == e ? 0 : e, null == t ? 1e9 : t, r, 0, n), r
          );
        }
        findInner(e, t, n, r, o) {
          for (let i = 0; i < this.local.length; i++) {
            let s = this.local[i];
            s.from <= t &&
              s.to >= e &&
              (!o || o(s.spec)) &&
              n.push(s.copy(s.from + r, s.to + r));
          }
          for (let i = 0; i < this.children.length; i += 3)
            if (this.children[i] < t && this.children[i + 1] > e) {
              let s = this.children[i] + 1;
              this.children[i + 2].findInner(e - s, t - s, n, r + s, o);
            }
        }
        map(e, t, n) {
          return this == $t || 0 == e.maps.length
            ? this
            : this.mapInner(e, t, 0, 0, n || Vt);
        }
        mapInner(e, t, n, r, o) {
          let i;
          for (let s = 0; s < this.local.length; s++) {
            let l = this.local[s].map(e, n, r);
            l && l.type.valid(t, l)
              ? (i || (i = [])).push(l)
              : o.onRemove && o.onRemove(this.local[s].spec);
          }
          return this.children.length
            ? (function (e, t, n, r, o, i, s) {
                let l = e.slice();
                for (let e = 0, t = i; e < n.maps.length; e++) {
                  let r = 0;
                  n.maps[e].forEach((e, n, i, s) => {
                    let a = s - i - (n - e);
                    for (let s = 0; s < l.length; s += 3) {
                      let c = l[s + 1];
                      if (c < 0 || e > c + t - r) continue;
                      let u = l[s] + t - r;
                      n >= u
                        ? (l[s + 1] = e <= u ? -2 : -1)
                        : i >= o && a && ((l[s] += a), (l[s + 1] += a));
                    }
                    r += a;
                  }),
                    (t = n.maps[e].map(t, -1));
                }
                let a = !1;
                for (let t = 0; t < l.length; t += 3)
                  if (l[t + 1] < 0) {
                    if (-2 == l[t + 1]) {
                      (a = !0), (l[t + 1] = -1);
                      continue;
                    }
                    let c = n.map(e[t] + i),
                      u = c - o;
                    if (u < 0 || u >= r.content.size) {
                      a = !0;
                      continue;
                    }
                    let d = n.map(e[t + 1] + i, -1) - o,
                      { index: h, offset: p } = r.content.findIndex(u),
                      f = r.maybeChild(h);
                    if (f && p == u && p + f.nodeSize == d) {
                      let r = l[t + 2].mapInner(n, f, c + 1, e[t] + i + 1, s);
                      r != $t
                        ? ((l[t] = u), (l[t + 1] = d), (l[t + 2] = r))
                        : ((l[t + 1] = -2), (a = !0));
                    } else a = !0;
                  }
                if (a) {
                  let a = (function (e, t, n, r, o, i, s) {
                      function l(e, t) {
                        for (let i = 0; i < e.local.length; i++) {
                          let l = e.local[i].map(r, o, t);
                          l
                            ? n.push(l)
                            : s.onRemove && s.onRemove(e.local[i].spec);
                        }
                        for (let n = 0; n < e.children.length; n += 3)
                          l(e.children[n + 2], e.children[n] + t + 1);
                      }
                      for (let n = 0; n < e.length; n += 3)
                        -1 == e[n + 1] && l(e[n + 2], t[n] + i + 1);
                      return n;
                    })(l, e, t, n, o, i, s),
                    c = jt(a, r, 0, s);
                  t = c.local;
                  for (let e = 0; e < l.length; e += 3)
                    l[e + 1] < 0 && (l.splice(e, 3), (e -= 3));
                  for (let e = 0, t = 0; e < c.children.length; e += 3) {
                    let n = c.children[e];
                    for (; t < l.length && l[t] < n; ) t += 3;
                    l.splice(
                      t,
                      0,
                      c.children[e],
                      c.children[e + 1],
                      c.children[e + 2]
                    );
                  }
                }
                return new Ht(t.sort(Jt), l);
              })(this.children, i || [], e, t, n, r, o)
            : i
            ? new Ht(i.sort(Jt), zt)
            : $t;
        }
        add(e, t) {
          return t.length
            ? this == $t
              ? Ht.create(e, t)
              : this.addInner(e, t, 0)
            : this;
        }
        addInner(e, t, n) {
          let r,
            o = 0;
          e.forEach((e, i) => {
            let s,
              l = i + n;
            if ((s = Gt(t, e, l))) {
              for (r || (r = this.children.slice()); o < r.length && r[o] < i; )
                o += 3;
              r[o] == i
                ? (r[o + 2] = r[o + 2].addInner(e, s, l + 1))
                : r.splice(o, 0, i, i + e.nodeSize, jt(s, e, l + 1, Vt)),
                (o += 3);
            }
          });
          let i = Lt(o ? qt(t) : t, -n);
          for (let t = 0; t < i.length; t++)
            i[t].type.valid(e, i[t]) || i.splice(t--, 1);
          return new Ht(
            i.length ? this.local.concat(i).sort(Jt) : this.local,
            r || this.children
          );
        }
        remove(e) {
          return 0 == e.length || this == $t ? this : this.removeInner(e, 0);
        }
        removeInner(e, t) {
          let n = this.children,
            r = this.local;
          for (let r = 0; r < n.length; r += 3) {
            let o,
              i = n[r] + t,
              s = n[r + 1] + t;
            for (let t, n = 0; n < e.length; n++)
              (t = e[n]) &&
                t.from > i &&
                t.to < s &&
                ((e[n] = null), (o || (o = [])).push(t));
            if (!o) continue;
            n == this.children && (n = this.children.slice());
            let l = n[r + 2].removeInner(o, i + 1);
            l != $t ? (n[r + 2] = l) : (n.splice(r, 3), (r -= 3));
          }
          if (r.length)
            for (let n, o = 0; o < e.length; o++)
              if ((n = e[o]))
                for (let e = 0; e < r.length; e++)
                  r[e].eq(n, t) &&
                    (r == this.local && (r = this.local.slice()),
                    r.splice(e--, 1));
          return n == this.children && r == this.local
            ? this
            : r.length || n.length
            ? new Ht(r, n)
            : $t;
        }
        forChild(e, t) {
          if (this == $t) return this;
          if (t.isLeaf) return Ht.empty;
          let n, r;
          for (let t = 0; t < this.children.length; t += 3)
            if (this.children[t] >= e) {
              this.children[t] == e && (n = this.children[t + 2]);
              break;
            }
          let o = e + 1,
            i = o + t.content.size;
          for (let e = 0; e < this.local.length; e++) {
            let t = this.local[e];
            if (t.from < i && t.to > o && t.type instanceof Pt) {
              let e = Math.max(o, t.from) - o,
                n = Math.min(i, t.to) - o;
              e < n && (r || (r = [])).push(t.copy(e, n));
            }
          }
          if (r) {
            let e = new Ht(r.sort(Jt), zt);
            return n ? new Wt([e, n]) : e;
          }
          return n || $t;
        }
        eq(e) {
          if (this == e) return !0;
          if (
            !(e instanceof Ht) ||
            this.local.length != e.local.length ||
            this.children.length != e.children.length
          )
            return !1;
          for (let t = 0; t < this.local.length; t++)
            if (!this.local[t].eq(e.local[t])) return !1;
          for (let t = 0; t < this.children.length; t += 3)
            if (
              this.children[t] != e.children[t] ||
              this.children[t + 1] != e.children[t + 1] ||
              !this.children[t + 2].eq(e.children[t + 2])
            )
              return !1;
          return !0;
        }
        locals(e) {
          return _t(this.localsInner(e));
        }
        localsInner(e) {
          if (this == $t) return zt;
          if (e.inlineContent || !this.local.some(Pt.is)) return this.local;
          let t = [];
          for (let e = 0; e < this.local.length; e++)
            this.local[e].type instanceof Pt || t.push(this.local[e]);
          return t;
        }
      }
      (Ht.empty = new Ht([], [])), (Ht.removeOverlap = _t);
      const $t = Ht.empty;
      class Wt {
        constructor(e) {
          this.members = e;
        }
        map(e, t) {
          const n = this.members.map((n) => n.map(e, t, Vt));
          return Wt.from(n);
        }
        forChild(e, t) {
          if (t.isLeaf) return Ht.empty;
          let n = [];
          for (let r = 0; r < this.members.length; r++) {
            let o = this.members[r].forChild(e, t);
            o != $t &&
              (o instanceof Wt ? (n = n.concat(o.members)) : n.push(o));
          }
          return Wt.from(n);
        }
        eq(e) {
          if (!(e instanceof Wt) || e.members.length != this.members.length)
            return !1;
          for (let t = 0; t < this.members.length; t++)
            if (!this.members[t].eq(e.members[t])) return !1;
          return !0;
        }
        locals(e) {
          let t,
            n = !0;
          for (let r = 0; r < this.members.length; r++) {
            let o = this.members[r].localsInner(e);
            if (o.length)
              if (t) {
                n && ((t = t.slice()), (n = !1));
                for (let e = 0; e < o.length; e++) t.push(o[e]);
              } else t = o;
          }
          return t ? _t(n ? t : t.sort(Jt)) : zt;
        }
        static from(e) {
          switch (e.length) {
            case 0:
              return $t;
            case 1:
              return e[0];
            default:
              return new Wt(
                e.every((e) => e instanceof Ht)
                  ? e
                  : e.reduce(
                      (e, t) => e.concat(t instanceof Ht ? t : t.members),
                      []
                    )
              );
          }
        }
      }
      function Lt(e, t) {
        if (!t || !e.length) return e;
        let n = [];
        for (let r = 0; r < e.length; r++) {
          let o = e[r];
          n.push(new Ft(o.from + t, o.to + t, o.type));
        }
        return n;
      }
      function Gt(e, t, n) {
        if (t.isLeaf) return null;
        let r = n + t.nodeSize,
          o = null;
        for (let t, i = 0; i < e.length; i++)
          (t = e[i]) &&
            t.from > n &&
            t.to < r &&
            ((o || (o = [])).push(t), (e[i] = null));
        return o;
      }
      function qt(e) {
        let t = [];
        for (let n = 0; n < e.length; n++) null != e[n] && t.push(e[n]);
        return t;
      }
      function jt(e, t, n, r) {
        let o = [],
          i = !1;
        t.forEach((t, s) => {
          let l = Gt(e, t, s + n);
          if (l) {
            i = !0;
            let e = jt(l, t, n + s + 1, r);
            e != $t && o.push(s, s + t.nodeSize, e);
          }
        });
        let s = Lt(i ? qt(e) : e, -n).sort(Jt);
        for (let e = 0; e < s.length; e++)
          s[e].type.valid(t, s[e]) ||
            (r.onRemove && r.onRemove(s[e].spec), s.splice(e--, 1));
        return s.length || o.length ? new Ht(s, o) : $t;
      }
      function Jt(e, t) {
        return e.from - t.from || e.to - t.to;
      }
      function _t(e) {
        let t = e;
        for (let n = 0; n < t.length - 1; n++) {
          let r = t[n];
          if (r.from != r.to)
            for (let o = n + 1; o < t.length; o++) {
              let i = t[o];
              if (i.from != r.from) {
                i.from < r.to &&
                  (t == e && (t = e.slice()),
                  (t[n] = r.copy(r.from, i.from)),
                  Kt(t, o, r.copy(i.from, r.to)));
                break;
              }
              i.to != r.to &&
                (t == e && (t = e.slice()),
                (t[o] = i.copy(i.from, r.to)),
                Kt(t, o + 1, i.copy(r.to, i.to)));
            }
        }
        return t;
      }
      function Kt(e, t, n) {
        for (; t < e.length && Jt(n, e[t]) > 0; ) t++;
        e.splice(t, 0, n);
      }
      function Yt(e) {
        let t = [];
        return (
          e.someProp("decorations", (n) => {
            let r = n(e.state);
            r && r != $t && t.push(r);
          }),
          e.cursorWrapper &&
            t.push(Ht.create(e.state.doc, [e.cursorWrapper.deco])),
          Wt.from(t)
        );
      }
      const Ut = {
          childList: !0,
          characterData: !0,
          characterDataOldValue: !0,
          attributes: !0,
          attributeOldValue: !0,
          subtree: !0,
        },
        Xt = k && C <= 11;
      class Zt {
        constructor() {
          (this.anchorNode = null),
            (this.anchorOffset = 0),
            (this.focusNode = null),
            (this.focusOffset = 0);
        }
        set(e) {
          (this.anchorNode = e.anchorNode),
            (this.anchorOffset = e.anchorOffset),
            (this.focusNode = e.focusNode),
            (this.focusOffset = e.focusOffset);
        }
        clear() {
          this.anchorNode = this.focusNode = null;
        }
        eq(e) {
          return (
            e.anchorNode == this.anchorNode &&
            e.anchorOffset == this.anchorOffset &&
            e.focusNode == this.focusNode &&
            e.focusOffset == this.focusOffset
          );
        }
      }
      class Qt {
        constructor(e, t) {
          (this.view = e),
            (this.handleDOMChange = t),
            (this.queue = []),
            (this.flushingSoon = -1),
            (this.observer = null),
            (this.currentSelection = new Zt()),
            (this.onCharData = null),
            (this.suppressingSelectionUpdates = !1),
            (this.observer =
              window.MutationObserver &&
              new window.MutationObserver((e) => {
                for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
                k &&
                C <= 11 &&
                e.some(
                  (e) =>
                    ("childList" == e.type && e.removedNodes.length) ||
                    ("characterData" == e.type &&
                      e.oldValue.length > e.target.nodeValue.length)
                )
                  ? this.flushSoon()
                  : this.flush();
              })),
            Xt &&
              (this.onCharData = (e) => {
                this.queue.push({
                  target: e.target,
                  type: "characterData",
                  oldValue: e.prevValue,
                }),
                  this.flushSoon();
              }),
            (this.onSelectionChange = this.onSelectionChange.bind(this));
        }
        flushSoon() {
          this.flushingSoon < 0 &&
            (this.flushingSoon = window.setTimeout(() => {
              (this.flushingSoon = -1), this.flush();
            }, 20));
        }
        forceFlush() {
          this.flushingSoon > -1 &&
            (window.clearTimeout(this.flushingSoon),
            (this.flushingSoon = -1),
            this.flush());
        }
        start() {
          this.observer &&
            (this.observer.takeRecords(),
            this.observer.observe(this.view.dom, Ut)),
            this.onCharData &&
              this.view.dom.addEventListener(
                "DOMCharacterDataModified",
                this.onCharData
              ),
            this.connectSelection();
        }
        stop() {
          if (this.observer) {
            let e = this.observer.takeRecords();
            if (e.length) {
              for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
              window.setTimeout(() => this.flush(), 20);
            }
            this.observer.disconnect();
          }
          this.onCharData &&
            this.view.dom.removeEventListener(
              "DOMCharacterDataModified",
              this.onCharData
            ),
            this.disconnectSelection();
        }
        connectSelection() {
          this.view.dom.ownerDocument.addEventListener(
            "selectionchange",
            this.onSelectionChange
          );
        }
        disconnectSelection() {
          this.view.dom.ownerDocument.removeEventListener(
            "selectionchange",
            this.onSelectionChange
          );
        }
        suppressSelectionUpdates() {
          (this.suppressingSelectionUpdates = !0),
            setTimeout(() => (this.suppressingSelectionUpdates = !1), 50);
        }
        onSelectionChange() {
          if (Pe(this.view)) {
            if (this.suppressingSelectionUpdates) return Me(this.view);
            if (k && C <= 11 && !this.view.state.selection.empty) {
              let e = this.view.domSelectionRange();
              if (
                e.focusNode &&
                u(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
              )
                return this.flushSoon();
            }
            this.flush();
          }
        }
        setCurSelection() {
          this.currentSelection.set(this.view.domSelectionRange());
        }
        ignoreSelectionChange(e) {
          if (!e.focusNode) return !0;
          let t,
            n = new Set();
          for (let t = e.focusNode; t; t = l(t)) n.add(t);
          for (let r = e.anchorNode; r; r = l(r))
            if (n.has(r)) {
              t = r;
              break;
            }
          let r = t && this.view.docView.nearestDesc(t);
          return r &&
            r.ignoreMutation({
              type: "selection",
              target: 3 == t.nodeType ? t.parentNode : t,
            })
            ? (this.setCurSelection(), !0)
            : void 0;
        }
        flush() {
          let { view: e } = this;
          if (!e.docView || this.flushingSoon > -1) return;
          let t = this.observer ? this.observer.takeRecords() : [];
          this.queue.length &&
            ((t = this.queue.concat(t)), (this.queue.length = 0));
          let n = e.domSelectionRange(),
            o =
              !this.suppressingSelectionUpdates &&
              !this.currentSelection.eq(n) &&
              Pe(e) &&
              !this.ignoreSelectionChange(n),
            i = -1,
            s = -1,
            l = !1,
            a = [];
          if (e.editable)
            for (let e = 0; e < t.length; e++) {
              let n = this.registerMutation(t[e], a);
              n &&
                ((i = i < 0 ? n.from : Math.min(n.from, i)),
                (s = s < 0 ? n.to : Math.max(n.to, s)),
                n.typeOver && (l = !0));
            }
          if (R && a.length > 1) {
            let e = a.filter((e) => "BR" == e.nodeName);
            if (2 == e.length) {
              let t = e[0],
                n = e[1];
              t.parentNode && t.parentNode.parentNode == n.parentNode
                ? n.remove()
                : t.remove();
            }
          }
          let c = null;
          i < 0 &&
          o &&
          e.input.lastFocus > Date.now() - 200 &&
          Math.max(e.input.lastTouch, e.input.lastClick.time) <
            Date.now() - 300 &&
          m(n) &&
          (c = Ce(e)) &&
          c.eq(r.Y1.near(e.state.doc.resolve(0), 1))
            ? ((e.input.lastFocus = 0),
              Me(e),
              this.currentSelection.set(n),
              e.scrollToSelection())
            : (i > -1 || o) &&
              (i > -1 &&
                (e.docView.markDirty(i, s),
                (function (e) {
                  if (en.has(e)) return;
                  if (
                    (en.set(e, null),
                    -1 !==
                      ["normal", "nowrap", "pre-line"].indexOf(
                        getComputedStyle(e.dom).whiteSpace
                      ))
                  ) {
                    if (((e.requiresGeckoHackNode = R), tn)) return;
                    console.warn(
                      "ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."
                    ),
                      (tn = !0);
                  }
                })(e)),
              this.handleDOMChange(i, s, l, a),
              e.docView && e.docView.dirty
                ? e.updateState(e.state)
                : this.currentSelection.eq(n) || Me(e),
              this.currentSelection.set(n));
        }
        registerMutation(e, t) {
          if (t.indexOf(e.target) > -1) return null;
          let n = this.view.docView.nearestDesc(e.target);
          if (
            "attributes" == e.type &&
            (n == this.view.docView ||
              "contenteditable" == e.attributeName ||
              ("style" == e.attributeName &&
                !e.oldValue &&
                !e.target.getAttribute("style")))
          )
            return null;
          if (!n || n.ignoreMutation(e)) return null;
          if ("childList" == e.type) {
            for (let n = 0; n < e.addedNodes.length; n++)
              t.push(e.addedNodes[n]);
            if (
              n.contentDOM &&
              n.contentDOM != n.dom &&
              !n.contentDOM.contains(e.target)
            )
              return { from: n.posBefore, to: n.posAfter };
            let r = e.previousSibling,
              o = e.nextSibling;
            if (k && C <= 11 && e.addedNodes.length)
              for (let t = 0; t < e.addedNodes.length; t++) {
                let { previousSibling: n, nextSibling: i } = e.addedNodes[t];
                (!n || Array.prototype.indexOf.call(e.addedNodes, n) < 0) &&
                  (r = n),
                  (!i || Array.prototype.indexOf.call(e.addedNodes, i) < 0) &&
                    (o = i);
              }
            let i = r && r.parentNode == e.target ? s(r) + 1 : 0,
              l = n.localPosFromDOM(e.target, i, -1),
              a =
                o && o.parentNode == e.target
                  ? s(o)
                  : e.target.childNodes.length;
            return { from: l, to: n.localPosFromDOM(e.target, a, 1) };
          }
          return "attributes" == e.type
            ? { from: n.posAtStart - n.border, to: n.posAtEnd + n.border }
            : {
                from: n.posAtStart,
                to: n.posAtEnd,
                typeOver: e.target.nodeValue == e.oldValue,
              };
        }
      }
      let en = new WeakMap(),
        tn = !1;
      function nn(e) {
        let t = e.pmViewDesc;
        if (t) return t.parseRule();
        if ("BR" == e.nodeName && e.parentNode) {
          if (N && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
            let e = document.createElement("div");
            return e.appendChild(document.createElement("li")), { skip: e };
          }
          if (
            e.parentNode.lastChild == e ||
            (N && /^(tr|table)$/i.test(e.parentNode.nodeName))
          )
            return { ignore: !0 };
        } else if ("IMG" == e.nodeName && e.getAttribute("mark-placeholder"))
          return { ignore: !0 };
        return null;
      }
      const rn =
        /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
      function on(e, t, n, i, s) {
        if (t < 0) {
          let t =
              e.input.lastSelectionTime > Date.now() - 50
                ? e.input.lastSelectionOrigin
                : null,
            n = Ce(e, t);
          if (n && !e.state.selection.eq(n)) {
            if (
              O &&
              A &&
              13 === e.input.lastKeyCode &&
              Date.now() - 100 < e.input.lastKeyCodeTime &&
              e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter")))
            )
              return;
            let r = e.state.tr.setSelection(n);
            "pointer" == t
              ? r.setMeta("pointer", !0)
              : "key" == t && r.scrollIntoView(),
              e.dispatch(r);
          }
          return;
        }
        let l = e.state.doc.resolve(t),
          a = l.sharedDepth(n);
        (t = l.before(a + 1)), (n = e.state.doc.resolve(n).after(a + 1));
        let c,
          u,
          d = e.state.selection,
          h = (function (e, t, n) {
            let r,
              {
                node: i,
                fromOffset: s,
                toOffset: l,
                from: a,
                to: c,
              } = e.docView.parseRange(t, n),
              u = e.domSelectionRange(),
              d = u.anchorNode;
            if (
              (d &&
                e.dom.contains(1 == d.nodeType ? d : d.parentNode) &&
                ((r = [{ node: d, offset: u.anchorOffset }]),
                m(u) || r.push({ node: u.focusNode, offset: u.focusOffset })),
              O && 8 === e.input.lastKeyCode)
            )
              for (let e = l; e > s; e--) {
                let t = i.childNodes[e - 1],
                  n = t.pmViewDesc;
                if ("BR" == t.nodeName && !n) {
                  l = e;
                  break;
                }
                if (!n || n.size) break;
              }
            let h = e.state.doc,
              p = e.someProp("domParser") || o.aw.fromSchema(e.state.schema),
              f = h.resolve(a),
              g = null,
              y = p.parse(i, {
                topNode: f.parent,
                topMatch: f.parent.contentMatchAt(f.index()),
                topOpen: !0,
                from: s,
                to: l,
                preserveWhitespace: "pre" != f.parent.type.whitespace || "full",
                findPositions: r,
                ruleFromNode: nn,
                context: f,
              });
            if (r && null != r[0].pos) {
              let e = r[0].pos,
                t = r[1] && r[1].pos;
              null == t && (t = e), (g = { anchor: e + a, head: t + a });
            }
            return { doc: y, sel: g, from: a, to: c };
          })(e, t, n),
          p = e.state.doc,
          f = p.slice(h.from, h.to);
        8 === e.input.lastKeyCode && Date.now() - 100 < e.input.lastKeyCodeTime
          ? ((c = e.state.selection.to), (u = "end"))
          : ((c = e.state.selection.from), (u = "start")),
          (e.input.lastKeyCode = null);
        let y = (function (e, t, n, r, o) {
          let i = e.findDiffStart(t, n);
          if (null == i) return null;
          let { a: s, b: l } = e.findDiffEnd(t, n + e.size, n + t.size);
          if ("end" == o) {
            r -= s + Math.max(0, i - Math.min(s, l)) - i;
          }
          if (s < i && e.size < t.size) {
            (i -= r <= i && r >= s ? i - r : 0), (l = i + (l - s)), (s = i);
          } else if (l < i) {
            (i -= r <= i && r >= l ? i - r : 0), (s = i + (s - l)), (l = i);
          }
          return { start: i, endA: s, endB: l };
        })(f.content, h.doc.content, h.from, c, u);
        if (
          ((E && e.input.lastIOSEnter > Date.now() - 225) || A) &&
          s.some((e) => 1 == e.nodeType && !rn.test(e.nodeName)) &&
          (!y || y.endA >= y.endB) &&
          e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter")))
        )
          return void (e.input.lastIOSEnter = 0);
        if (!y) {
          if (
            !(
              i &&
              d instanceof r.Bs &&
              !d.empty &&
              d.$head.sameParent(d.$anchor)
            ) ||
            e.composing ||
            (h.sel && h.sel.anchor != h.sel.head)
          ) {
            if (h.sel) {
              let t = sn(e, e.state.doc, h.sel);
              t &&
                !t.eq(e.state.selection) &&
                e.dispatch(e.state.tr.setSelection(t));
            }
            return;
          }
          y = { start: d.from, endA: d.to, endB: d.to };
        }
        if (
          O &&
          e.cursorWrapper &&
          h.sel &&
          h.sel.anchor == e.cursorWrapper.deco.from &&
          h.sel.head == h.sel.anchor
        ) {
          let e = y.endB - y.start;
          h.sel = { anchor: h.sel.anchor + e, head: h.sel.anchor + e };
        }
        e.input.domChangeCount++,
          e.state.selection.from < e.state.selection.to &&
            y.start == y.endB &&
            e.state.selection instanceof r.Bs &&
            (y.start > e.state.selection.from &&
            y.start <= e.state.selection.from + 2 &&
            e.state.selection.from >= h.from
              ? (y.start = e.state.selection.from)
              : y.endA < e.state.selection.to &&
                y.endA >= e.state.selection.to - 2 &&
                e.state.selection.to <= h.to &&
                ((y.endB += e.state.selection.to - y.endA),
                (y.endA = e.state.selection.to))),
          k &&
            C <= 11 &&
            y.endB == y.start + 1 &&
            y.endA == y.start &&
            y.start > h.from &&
            "  " ==
              h.doc.textBetween(y.start - h.from - 1, y.start - h.from + 1) &&
            (y.start--, y.endA--, y.endB--);
        let v,
          w = h.doc.resolveNoCache(y.start - h.from),
          b = h.doc.resolveNoCache(y.endB - h.from),
          S = p.resolve(y.start),
          x = w.sameParent(b) && w.parent.inlineContent && S.end() >= y.endA;
        if (
          ((E &&
            e.input.lastIOSEnter > Date.now() - 225 &&
            (!x || s.some((e) => "DIV" == e.nodeName || "P" == e.nodeName))) ||
            (!x &&
              w.pos < h.doc.content.size &&
              (v = r.Y1.findFrom(h.doc.resolve(w.pos + 1), 1, !0)) &&
              v.head == b.pos)) &&
          e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter")))
        )
          return void (e.input.lastIOSEnter = 0);
        if (
          e.state.selection.anchor > y.start &&
          (function (e, t, n, r, o) {
            if (
              !r.parent.isTextblock ||
              n - t <= o.pos - r.pos ||
              ln(r, !0, !1) < o.pos
            )
              return !1;
            let i = e.resolve(t);
            if (i.parentOffset < i.parent.content.size || !i.parent.isTextblock)
              return !1;
            let s = e.resolve(ln(i, !0, !0));
            return (
              !(!s.parent.isTextblock || s.pos > n || ln(s, !0, !1) < n) &&
              r.parent.content.cut(r.parentOffset).eq(s.parent.content)
            );
          })(p, y.start, y.endA, w, b) &&
          e.someProp("handleKeyDown", (t) => t(e, g(8, "Backspace")))
        )
          return void (A && O && e.domObserver.suppressSelectionUpdates());
        O && A && y.endB == y.start && (e.input.lastAndroidDelete = Date.now()),
          A &&
            !x &&
            w.start() != b.start() &&
            0 == b.parentOffset &&
            w.depth == b.depth &&
            h.sel &&
            h.sel.anchor == h.sel.head &&
            h.sel.head == y.endA &&
            ((y.endB -= 2),
            (b = h.doc.resolveNoCache(y.endB - h.from)),
            setTimeout(() => {
              e.someProp("handleKeyDown", function (t) {
                return t(e, g(13, "Enter"));
              });
            }, 20));
        let R,
          M,
          T,
          N = y.start,
          D = y.endA;
        if (x)
          if (w.pos == b.pos)
            k &&
              C <= 11 &&
              0 == w.parentOffset &&
              (e.domObserver.suppressSelectionUpdates(),
              setTimeout(() => Me(e), 20)),
              (R = e.state.tr.delete(N, D)),
              (M = p.resolve(y.start).marksAcross(p.resolve(y.endA)));
          else if (
            y.endA == y.endB &&
            (T = (function (e, t) {
              let n,
                r,
                i,
                s = e.firstChild.marks,
                l = t.firstChild.marks,
                a = s,
                c = l;
              for (let e = 0; e < l.length; e++) a = l[e].removeFromSet(a);
              for (let e = 0; e < s.length; e++) c = s[e].removeFromSet(c);
              if (1 == a.length && 0 == c.length)
                (r = a[0]),
                  (n = "add"),
                  (i = (e) => e.mark(r.addToSet(e.marks)));
              else {
                if (0 != a.length || 1 != c.length) return null;
                (r = c[0]),
                  (n = "remove"),
                  (i = (e) => e.mark(r.removeFromSet(e.marks)));
              }
              let u = [];
              for (let e = 0; e < t.childCount; e++) u.push(i(t.child(e)));
              if (o.HY.from(u).eq(e)) return { mark: r, type: n };
            })(
              w.parent.content.cut(w.parentOffset, b.parentOffset),
              S.parent.content.cut(S.parentOffset, y.endA - S.start())
            ))
          )
            (R = e.state.tr),
              "add" == T.type
                ? R.addMark(N, D, T.mark)
                : R.removeMark(N, D, T.mark);
          else if (
            w.parent.child(w.index()).isText &&
            w.index() == b.index() - (b.textOffset ? 0 : 1)
          ) {
            let t = w.parent.textBetween(w.parentOffset, b.parentOffset);
            if (e.someProp("handleTextInput", (n) => n(e, N, D, t))) return;
            R = e.state.tr.insertText(t, N, D);
          }
        if (
          (R ||
            (R = e.state.tr.replace(
              N,
              D,
              h.doc.slice(y.start - h.from, y.endB - h.from)
            )),
          h.sel)
        ) {
          let t = sn(e, R.doc, h.sel);
          t &&
            !(
              (O &&
                A &&
                e.composing &&
                t.empty &&
                (y.start != y.endB ||
                  e.input.lastAndroidDelete < Date.now() - 100) &&
                (t.head == N || t.head == R.mapping.map(D) - 1)) ||
              (k && t.empty && t.head == N)
            ) &&
            R.setSelection(t);
        }
        M && R.ensureMarks(M), e.dispatch(R.scrollIntoView());
      }
      function sn(e, t, n) {
        return Math.max(n.anchor, n.head) > t.content.size
          ? null
          : Ie(e, t.resolve(n.anchor), t.resolve(n.head));
      }
      function ln(e, t, n) {
        let r = e.depth,
          o = t ? e.end() : e.pos;
        for (; r > 0 && (t || e.indexAfter(r) == e.node(r).childCount); )
          r--, o++, (t = !1);
        if (n) {
          let t = e.node(r).maybeChild(e.indexAfter(r));
          for (; t && !t.isLeaf; ) (t = t.firstChild), o++;
        }
        return o;
      }
      class an {
        constructor(e, t) {
          (this._root = null),
            (this.focused = !1),
            (this.trackWrites = null),
            (this.mounted = !1),
            (this.markCursor = null),
            (this.cursorWrapper = null),
            (this.lastSelectedViewDesc = void 0),
            (this.input = new ct()),
            (this.prevDirectPlugins = []),
            (this.pluginViews = []),
            (this.requiresGeckoHackNode = !1),
            (this.dragging = null),
            (this._props = t),
            (this.state = t.state),
            (this.directPlugins = t.plugins || []),
            this.directPlugins.forEach(pn),
            (this.dispatch = this.dispatch.bind(this)),
            (this.dom = (e && e.mount) || document.createElement("div")),
            e &&
              (e.appendChild
                ? e.appendChild(this.dom)
                : "function" == typeof e
                ? e(this.dom)
                : e.mount && (this.mounted = !0)),
            (this.editable = dn(this)),
            un(this),
            (this.nodeViews = hn(this)),
            (this.docView = ae(
              this.state.doc,
              cn(this),
              Yt(this),
              this.dom,
              this
            )),
            (this.domObserver = new Qt(this, (e, t, n, r) =>
              on(this, e, t, n, r)
            )),
            this.domObserver.start(),
            (function (e) {
              for (let t in st) {
                let n = st[t];
                e.dom.addEventListener(
                  t,
                  (e.input.eventHandlers[t] = (t) => {
                    !pt(e, t) ||
                      ht(e, t) ||
                      (!e.editable && t.type in lt) ||
                      n(e, t);
                  }),
                  at[t] ? { passive: !0 } : void 0
                );
              }
              N && e.dom.addEventListener("input", () => null), dt(e);
            })(this),
            this.updatePluginViews();
        }
        get composing() {
          return this.input.composing;
        }
        get props() {
          if (this._props.state != this.state) {
            let e = this._props;
            this._props = {};
            for (let t in e) this._props[t] = e[t];
            this._props.state = this.state;
          }
          return this._props;
        }
        update(e) {
          e.handleDOMEvents != this._props.handleDOMEvents && dt(this);
          let t = this._props;
          (this._props = e),
            e.plugins &&
              (e.plugins.forEach(pn), (this.directPlugins = e.plugins)),
            this.updateStateInner(e.state, t);
        }
        setProps(e) {
          let t = {};
          for (let e in this._props) t[e] = this._props[e];
          t.state = this.state;
          for (let n in e) t[n] = e[n];
          this.update(t);
        }
        updateState(e) {
          this.updateStateInner(e, this._props);
        }
        updateStateInner(e, t) {
          let n = this.state,
            r = !1,
            o = !1;
          e.storedMarks && this.composing && (Mt(this), (o = !0)),
            (this.state = e);
          let i = n.plugins != e.plugins || this._props.plugins != t.plugins;
          if (
            i ||
            this._props.plugins != t.plugins ||
            this._props.nodeViews != t.nodeViews
          ) {
            let e = hn(this);
            (function (e, t) {
              let n = 0,
                r = 0;
              for (let r in e) {
                if (e[r] != t[r]) return !0;
                n++;
              }
              for (let e in t) r++;
              return n != r;
            })(e, this.nodeViews) && ((this.nodeViews = e), (r = !0));
          }
          (i || t.handleDOMEvents != this._props.handleDOMEvents) && dt(this),
            (this.editable = dn(this)),
            un(this);
          let s = Yt(this),
            l = cn(this),
            a =
              n.plugins == e.plugins || n.doc.eq(e.doc)
                ? e.scrollToSelection > n.scrollToSelection
                  ? "to selection"
                  : "preserve"
                : "reset",
            c = r || !this.docView.matchesNode(e.doc, l, s);
          (!c && e.selection.eq(n.selection)) || (o = !0);
          let d =
            "preserve" == a &&
            o &&
            null == this.dom.style.overflowAnchor &&
            (function (e) {
              let t,
                n,
                r = e.dom.getBoundingClientRect(),
                o = Math.max(0, r.top);
              for (
                let i = (r.left + r.right) / 2, s = o + 1;
                s < Math.min(innerHeight, r.bottom);
                s += 5
              ) {
                let r = e.root.elementFromPoint(i, s);
                if (!r || r == e.dom || !e.dom.contains(r)) continue;
                let l = r.getBoundingClientRect();
                if (l.top >= o - 20) {
                  (t = r), (n = l.top);
                  break;
                }
              }
              return { refDOM: t, refTop: n, stack: H(e.dom) };
            })(this);
          if (o) {
            this.domObserver.stop();
            let t =
              c &&
              (k || O) &&
              !this.composing &&
              !n.selection.empty &&
              !e.selection.empty &&
              (function (e, t) {
                let n = Math.min(
                  e.$anchor.sharedDepth(e.head),
                  t.$anchor.sharedDepth(t.head)
                );
                return e.$anchor.start(n) != t.$anchor.start(n);
              })(n.selection, e.selection);
            if (c) {
              let n = O
                ? (this.trackWrites = this.domSelectionRange().focusNode)
                : null;
              (!r && this.docView.update(e.doc, l, s, this)) ||
                (this.docView.updateOuterDeco([]),
                this.docView.destroy(),
                (this.docView = ae(e.doc, l, s, this.dom, this))),
                n && !this.trackWrites && (t = !0);
            }
            t ||
            !(
              this.input.mouseDown &&
              this.domObserver.currentSelection.eq(this.domSelectionRange()) &&
              (function (e) {
                let t = e.docView.domFromPos(e.state.selection.anchor, 0),
                  n = e.domSelectionRange();
                return u(t.node, t.offset, n.anchorNode, n.anchorOffset);
              })(this)
            )
              ? Me(this, t)
              : (De(this, e.selection), this.domObserver.setCurSelection()),
              this.domObserver.start();
          }
          this.updatePluginViews(n),
            "reset" == a
              ? (this.dom.scrollTop = 0)
              : "to selection" == a
              ? this.scrollToSelection()
              : d &&
                (function ({ refDOM: e, refTop: t, stack: n }) {
                  let r = e ? e.getBoundingClientRect().top : 0;
                  $(n, 0 == r ? 0 : r - t);
                })(d);
        }
        scrollToSelection() {
          let e = this.domSelectionRange().focusNode;
          if (this.someProp("handleScrollToSelection", (e) => e(this)));
          else if (this.state.selection instanceof r.qv) {
            let t = this.docView.domAfterPos(this.state.selection.from);
            1 == t.nodeType && V(this, t.getBoundingClientRect(), e);
          } else V(this, this.coordsAtPos(this.state.selection.head, 1), e);
        }
        destroyPluginViews() {
          let e;
          for (; (e = this.pluginViews.pop()); ) e.destroy && e.destroy();
        }
        updatePluginViews(e) {
          if (
            e &&
            e.plugins == this.state.plugins &&
            this.directPlugins == this.prevDirectPlugins
          )
            for (let t = 0; t < this.pluginViews.length; t++) {
              let n = this.pluginViews[t];
              n.update && n.update(this, e);
            }
          else {
            (this.prevDirectPlugins = this.directPlugins),
              this.destroyPluginViews();
            for (let e = 0; e < this.directPlugins.length; e++) {
              let t = this.directPlugins[e];
              t.spec.view && this.pluginViews.push(t.spec.view(this));
            }
            for (let e = 0; e < this.state.plugins.length; e++) {
              let t = this.state.plugins[e];
              t.spec.view && this.pluginViews.push(t.spec.view(this));
            }
          }
        }
        someProp(e, t) {
          let n,
            r = this._props && this._props[e];
          if (null != r && (n = t ? t(r) : r)) return n;
          for (let r = 0; r < this.directPlugins.length; r++) {
            let o = this.directPlugins[r].props[e];
            if (null != o && (n = t ? t(o) : o)) return n;
          }
          let o = this.state.plugins;
          if (o)
            for (let r = 0; r < o.length; r++) {
              let i = o[r].props[e];
              if (null != i && (n = t ? t(i) : i)) return n;
            }
        }
        hasFocus() {
          if (k) {
            let e = this.root.activeElement;
            if (e == this.dom) return !0;
            if (!e || !this.dom.contains(e)) return !1;
            for (; e && this.dom != e && this.dom.contains(e); ) {
              if ("false" == e.contentEditable) return !1;
              e = e.parentElement;
            }
            return !0;
          }
          return this.root.activeElement == this.dom;
        }
        focus() {
          this.domObserver.stop(),
            this.editable &&
              (function (e) {
                if (e.setActive) return e.setActive();
                if (W) return e.focus(W);
                let t = H(e);
                e.focus(
                  null == W
                    ? {
                        get preventScroll() {
                          return (W = { preventScroll: !0 }), !0;
                        },
                      }
                    : void 0
                ),
                  W || ((W = !1), $(t, 0));
              })(this.dom),
            Me(this),
            this.domObserver.start();
        }
        get root() {
          let e = this._root;
          if (null == e)
            for (let e = this.dom.parentNode; e; e = e.parentNode)
              if (9 == e.nodeType || (11 == e.nodeType && e.host))
                return (
                  e.getSelection ||
                    (Object.getPrototypeOf(e).getSelection = () =>
                      e.ownerDocument.getSelection()),
                  (this._root = e)
                );
          return e || document;
        }
        posAtCoords(e) {
          return j(this, e);
        }
        coordsAtPos(e, t = 1) {
          return K(this, e, t);
        }
        domAtPos(e, t = 0) {
          return this.docView.domFromPos(e, t);
        }
        nodeDOM(e) {
          let t = this.docView.descAt(e);
          return t ? t.nodeDOM : null;
        }
        posAtDOM(e, t, n = -1) {
          let r = this.docView.posFromDOM(e, t, n);
          if (null == r)
            throw new RangeError("DOM position not inside the editor");
          return r;
        }
        endOfTextblock(e, t) {
          return ne(this, t || this.state, e);
        }
        pasteHTML(e, t) {
          return Nt(this, "", e, !1, t || new ClipboardEvent("paste"));
        }
        pasteText(e, t) {
          return Nt(this, e, null, !0, t || new ClipboardEvent("paste"));
        }
        destroy() {
          this.docView &&
            (!(function (e) {
              e.domObserver.stop();
              for (let t in e.input.eventHandlers)
                e.dom.removeEventListener(t, e.input.eventHandlers[t]);
              clearTimeout(e.input.composingTimeout),
                clearTimeout(e.input.lastIOSEnterFallbackTimeout);
            })(this),
            this.destroyPluginViews(),
            this.mounted
              ? (this.docView.update(this.state.doc, [], Yt(this), this),
                (this.dom.textContent = ""))
              : this.dom.parentNode &&
                this.dom.parentNode.removeChild(this.dom),
            this.docView.destroy(),
            (this.docView = null));
        }
        get isDestroyed() {
          return null == this.docView;
        }
        dispatchEvent(e) {
          return (function (e, t) {
            ht(e, t) ||
              !st[t.type] ||
              (!e.editable && t.type in lt) ||
              st[t.type](e, t);
          })(this, e);
        }
        dispatch(e) {
          let t = this._props.dispatchTransaction;
          t ? t.call(this, e) : this.updateState(this.state.apply(e));
        }
        domSelectionRange() {
          return N &&
            11 === this.root.nodeType &&
            (function (e) {
              let t = e.activeElement;
              for (; t && t.shadowRoot; ) t = t.shadowRoot.activeElement;
              return t;
            })(this.dom.ownerDocument) == this.dom
            ? (function (e) {
                let t;
                function n(e) {
                  e.preventDefault(),
                    e.stopImmediatePropagation(),
                    (t = e.getTargetRanges()[0]);
                }
                e.dom.addEventListener("beforeinput", n, !0),
                  document.execCommand("indent"),
                  e.dom.removeEventListener("beforeinput", n, !0);
                let r = t.startContainer,
                  o = t.startOffset,
                  i = t.endContainer,
                  s = t.endOffset,
                  l = e.domAtPos(e.state.selection.anchor);
                return (
                  u(l.node, l.offset, i, s) && ([r, o, i, s] = [i, s, r, o]),
                  {
                    anchorNode: r,
                    anchorOffset: o,
                    focusNode: i,
                    focusOffset: s,
                  }
                );
              })(this)
            : this.domSelection();
        }
        domSelection() {
          return this.root.getSelection();
        }
      }
      function cn(e) {
        let t = Object.create(null);
        return (
          (t.class = "ProseMirror"),
          (t.contenteditable = String(e.editable)),
          (t.translate = "no"),
          e.someProp("attributes", (n) => {
            if (("function" == typeof n && (n = n(e.state)), n))
              for (let e in n)
                "class" == e && (t.class += " " + n[e]),
                  "style" == e
                    ? (t.style = (t.style ? t.style + ";" : "") + n[e])
                    : t[e] ||
                      "contenteditable" == e ||
                      "nodeName" == e ||
                      (t[e] = String(n[e]));
          }),
          [Ft.node(0, e.state.doc.content.size, t)]
        );
      }
      function un(e) {
        if (e.markCursor) {
          let t = document.createElement("img");
          (t.className = "ProseMirror-separator"),
            t.setAttribute("mark-placeholder", "true"),
            t.setAttribute("alt", ""),
            (e.cursorWrapper = {
              dom: t,
              deco: Ft.widget(e.state.selection.head, t, {
                raw: !0,
                marks: e.markCursor,
              }),
            });
        } else e.cursorWrapper = null;
      }
      function dn(e) {
        return !e.someProp("editable", (t) => !1 === t(e.state));
      }
      function hn(e) {
        let t = Object.create(null);
        function n(e) {
          for (let n in e)
            Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
        }
        return e.someProp("nodeViews", n), e.someProp("markViews", n), t;
      }
      function pn(e) {
        if (
          e.spec.state ||
          e.spec.filterTransaction ||
          e.spec.appendTransaction
        )
          throw new RangeError(
            "Plugins passed directly to the view must not have a state component"
          );
      }
    },
  },
]);
//# sourceMappingURL=../sourcemaps\libraries/libraries~e8c5e5be4.js.map
