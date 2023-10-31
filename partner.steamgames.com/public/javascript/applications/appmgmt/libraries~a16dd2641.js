/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [402],
  {
    92994: (e) => {
      "use strict";
      var t,
        r = (function () {
          function e(e, t) {
            if ("function" != typeof e)
              throw new TypeError(
                "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " +
                  e +
                  ".",
              );
            (this._batchLoadFn = e),
              (this._maxBatchSize = (function (e) {
                var t = !e || !1 !== e.batch;
                if (!t) return 1;
                var r = e && e.maxBatchSize;
                if (void 0 === r) return 1 / 0;
                if ("number" != typeof r || r < 1)
                  throw new TypeError(
                    "maxBatchSize must be a positive number: " + r,
                  );
                return r;
              })(t)),
              (this._batchScheduleFn = (function (e) {
                var t = e && e.batchScheduleFn;
                if (void 0 === t) return i;
                if ("function" != typeof t)
                  throw new TypeError(
                    "batchScheduleFn must be a function: " + t,
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
                var r = e && e.cacheMap;
                if (void 0 === r) return new Map();
                if (null !== r) {
                  var i = ["get", "set", "delete", "clear"].filter(
                    function (e) {
                      return r && "function" != typeof r[e];
                    },
                  );
                  if (0 !== i.length)
                    throw new TypeError(
                      "Custom cacheMap missing methods: " + i.join(", "),
                    );
                }
                return r;
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
                    ".",
                );
              var t = (function (e) {
                  var t = e._batch;
                  if (
                    null !== t &&
                    !t.hasDispatched &&
                    t.keys.length < e._maxBatchSize
                  )
                    return t;
                  var r = { hasDispatched: !1, keys: [], callbacks: [] };
                  return (
                    (e._batch = r),
                    e._batchScheduleFn(function () {
                      !(function (e, t) {
                        if (((t.hasDispatched = !0), 0 === t.keys.length))
                          return void a(t);
                        var r;
                        try {
                          r = e._batchLoadFn(t.keys);
                        } catch (r) {
                          return n(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " +
                                String(r) +
                                ".",
                            ),
                          );
                        }
                        if (!r || "function" != typeof r.then)
                          return n(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                String(r) +
                                ".",
                            ),
                          );
                        r.then(function (e) {
                          if (!s(e))
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " +
                                String(e) +
                                ".",
                            );
                          if (e.length !== t.keys.length)
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" +
                                String(t.keys) +
                                "\n\nValues:\n" +
                                String(e),
                            );
                          a(t);
                          for (var r = 0; r < t.callbacks.length; r++) {
                            var i = e[r];
                            i instanceof Error
                              ? t.callbacks[r].reject(i)
                              : t.callbacks[r].resolve(i);
                          }
                        }).catch(function (r) {
                          n(e, t, r);
                        });
                      })(e, r);
                    }),
                    r
                  );
                })(this),
                r = this._cacheMap,
                i = this._cacheKeyFn(e);
              if (r) {
                var o = r.get(i);
                if (o) {
                  var c = t.cacheHits || (t.cacheHits = []);
                  return new Promise(function (e) {
                    c.push(function () {
                      e(o);
                    });
                  });
                }
              }
              t.keys.push(e);
              var l = new Promise(function (e, r) {
                t.callbacks.push({ resolve: e, reject: r });
              });
              return r && r.set(i, l), l;
            }),
            (t.loadMany = function (e) {
              if (!s(e))
                throw new TypeError(
                  "The loader.loadMany() function must be called with Array<key> but got: " +
                    e +
                    ".",
                );
              for (var t = [], r = 0; r < e.length; r++)
                t.push(
                  this.load(e[r]).catch(function (e) {
                    return e;
                  }),
                );
              return Promise.all(t);
            }),
            (t.clear = function (e) {
              var t = this._cacheMap;
              if (t) {
                var r = this._cacheKeyFn(e);
                t.delete(r);
              }
              return this;
            }),
            (t.clearAll = function () {
              var e = this._cacheMap;
              return e && e.clear(), this;
            }),
            (t.prime = function (e, t) {
              var r = this._cacheMap;
              if (r) {
                var i,
                  n = this._cacheKeyFn(e);
                if (void 0 === r.get(n))
                  t instanceof Error
                    ? (i = Promise.reject(t)).catch(function () {})
                    : (i = Promise.resolve(t)),
                    r.set(n, i);
              }
              return this;
            }),
            e
          );
        })(),
        i =
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
      function n(e, t, r) {
        a(t);
        for (var i = 0; i < t.keys.length; i++)
          e.clear(t.keys[i]), t.callbacks[i].reject(r);
      }
      function a(e) {
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
      e.exports = r;
    },
    5556: (e, t, r) => {
      e.exports = (function (e) {
        var t = {};
        function r(i) {
          if (t[i]) return t[i].exports;
          var n = (t[i] = { i, l: !1, exports: {} });
          return e[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
        }
        return (
          (r.m = e),
          (r.c = t),
          (r.d = function (e, t, i) {
            r.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: i });
          }),
          (r.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (r.t = function (e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (
              (r.r(i),
              Object.defineProperty(i, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var n in e)
                r.d(
                  i,
                  n,
                  function (t) {
                    return e[t];
                  }.bind(null, n),
                );
            return i;
          }),
          (r.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return r.d(t, "a", t), t;
          }),
          (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (r.p = ""),
          r((r.s = 4))
        );
      })([
        function (e, t) {
          e.exports = r(89526);
        },
        function (e, t) {
          e.exports = r(36105);
        },
        function (e, t) {
          e.exports = r(73961);
        },
        function (e, t, r) {
          e.exports = r(5)();
        },
        function (e, t, r) {
          e.exports = r(7);
        },
        function (e, t, r) {
          "use strict";
          var i = r(6);
          function n() {}
          function a() {}
          (a.resetWarningCache = n),
            (e.exports = function () {
              function e(e, t, r, n, a, s) {
                if (s !== i) {
                  var o = new Error(
                    "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                  );
                  throw ((o.name = "Invariant Violation"), o);
                }
              }
              function t() {
                return e;
              }
              e.isRequired = e;
              var r = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: a,
                resetWarningCache: n,
              };
              return (r.PropTypes = r), r;
            });
        },
        function (e, t, r) {
          "use strict";
          e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
        function (e, t, r) {
          "use strict";
          r.r(t);
          var i = r(3),
            n = r.n(i),
            a = r(1),
            s = r.n(a),
            o = r(0),
            c = r.n(o);
          function l() {
            return (l = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r)
                      Object.prototype.hasOwnProperty.call(r, i) &&
                        (e[i] = r[i]);
                  }
                  return e;
                }).apply(this, arguments);
          }
          function u(e) {
            var t = e.onClickPrev,
              r = e.onClickSwitch,
              i = e.onClickNext,
              n = e.switchContent,
              a = e.switchColSpan,
              s = e.switchProps;
            return c.a.createElement(
              "tr",
              null,
              c.a.createElement(
                "th",
                { className: "rdtPrev", onClick: t },
                c.a.createElement("span", null, "‹"),
              ),
              c.a.createElement(
                "th",
                l({ className: "rdtSwitch", colSpan: a, onClick: r }, s),
                n,
              ),
              c.a.createElement(
                "th",
                { className: "rdtNext", onClick: i },
                c.a.createElement("span", null, "›"),
              ),
            );
          }
          function m(e) {
            return (m =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function d(e, t) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          function y(e, t) {
            return (y = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
          }
          function f(e) {
            var t = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var r,
                i = p(e);
              if (t) {
                var n = p(this).constructor;
                r = Reflect.construct(i, arguments, n);
              } else r = i.apply(this, arguments);
              return (function (e, t) {
                if (t && ("object" === m(t) || "function" == typeof t))
                  return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return B(e);
              })(this, r);
            };
          }
          function B(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return e;
          }
          function p(e) {
            return (p = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function b(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          var _ = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && y(e, t);
            })(n, e);
            var t,
              r,
              i = f(n);
            function n() {
              var e;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n);
              for (
                var t = arguments.length, r = new Array(t), a = 0;
                a < t;
                a++
              )
                r[a] = arguments[a];
              return (
                b(
                  B((e = i.call.apply(i, [this].concat(r)))),
                  "_setDate",
                  function (t) {
                    e.props.updateDate(t);
                  },
                ),
                e
              );
            }
            return (
              (t = n),
              (r = [
                {
                  key: "render",
                  value: function () {
                    return c.a.createElement(
                      "div",
                      { className: "rdtDays" },
                      c.a.createElement(
                        "table",
                        null,
                        c.a.createElement(
                          "thead",
                          null,
                          this.renderNavigation(),
                          this.renderDayHeaders(),
                        ),
                        c.a.createElement("tbody", null, this.renderDays()),
                        this.renderFooter(),
                      ),
                    );
                  },
                },
                {
                  key: "renderNavigation",
                  value: function () {
                    var e = this,
                      t = this.props.viewDate,
                      r = t.localeData();
                    return c.a.createElement(u, {
                      onClickPrev: function () {
                        return e.props.navigate(-1, "months");
                      },
                      onClickSwitch: function () {
                        return e.props.showView("months");
                      },
                      onClickNext: function () {
                        return e.props.navigate(1, "months");
                      },
                      switchContent: r.months(t) + " " + t.year(),
                      switchColSpan: 5,
                      switchProps: {
                        "data-value": this.props.viewDate.month(),
                      },
                    });
                  },
                },
                {
                  key: "renderDayHeaders",
                  value: function () {
                    var e = (function (e) {
                      var t = e.firstDayOfWeek(),
                        r = [],
                        i = 0;
                      return (
                        e._weekdaysMin.forEach(function (e) {
                          r[(7 + i++ - t) % 7] = e;
                        }),
                        r
                      );
                    })(this.props.viewDate.localeData()).map(function (e, t) {
                      return c.a.createElement(
                        "th",
                        { key: e + t, className: "dow" },
                        e,
                      );
                    });
                    return c.a.createElement("tr", null, e);
                  },
                },
                {
                  key: "renderDays",
                  value: function () {
                    var e = this.props.viewDate,
                      t = e.clone().startOf("month"),
                      r = e.clone().endOf("month"),
                      i = [[], [], [], [], [], []],
                      n = e.clone().subtract(1, "months");
                    n.date(n.daysInMonth()).startOf("week");
                    for (var a = n.clone().add(42, "d"), s = 0; n.isBefore(a); )
                      g(i, s++).push(this.renderDay(n, t, r)), n.add(1, "d");
                    return i.map(function (e, t) {
                      return c.a.createElement(
                        "tr",
                        { key: "".concat(a.month(), "_").concat(t) },
                        e,
                      );
                    });
                  },
                },
                {
                  key: "renderDay",
                  value: function (e, t, r) {
                    var i = this.props.selectedDate,
                      n = {
                        key: e.format("M_D"),
                        "data-value": e.date(),
                        "data-month": e.month(),
                        "data-year": e.year(),
                      },
                      a = "rdtDay";
                    return (
                      e.isBefore(t)
                        ? (a += " rdtOld")
                        : e.isAfter(r) && (a += " rdtNew"),
                      i && e.isSame(i, "day") && (a += " rdtActive"),
                      e.isSame(this.props.moment(), "day") &&
                        (a += " rdtToday"),
                      this.props.isValidDate(e)
                        ? (n.onClick = this._setDate)
                        : (a += " rdtDisabled"),
                      (n.className = a),
                      this.props.renderDay(n, e.clone(), i && i.clone())
                    );
                  },
                },
                {
                  key: "renderFooter",
                  value: function () {
                    var e = this;
                    if (this.props.timeFormat) {
                      var t = this.props.viewDate;
                      return c.a.createElement(
                        "tfoot",
                        null,
                        c.a.createElement(
                          "tr",
                          null,
                          c.a.createElement(
                            "td",
                            {
                              onClick: function () {
                                return e.props.showView("time");
                              },
                              colSpan: 7,
                              className: "rdtTimeToggle",
                            },
                            t.format(this.props.timeFormat),
                          ),
                        ),
                      );
                    }
                  },
                },
              ]) && d(t.prototype, r),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              n
            );
          })(c.a.Component);
          function g(e, t) {
            return e[Math.floor(t / 7)];
          }
          function h(e) {
            return (h =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function w(e, t) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          function z(e, t) {
            return (z = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
          }
          function v(e) {
            var t = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var r,
                i = F(e);
              if (t) {
                var n = F(this).constructor;
                r = Reflect.construct(i, arguments, n);
              } else r = i.apply(this, arguments);
              return (function (e, t) {
                if (t && ("object" === h(t) || "function" == typeof t))
                  return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return M(e);
              })(this, r);
            };
          }
          function M(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return e;
          }
          function F(e) {
            return (F = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          b(_, "defaultProps", {
            isValidDate: function () {
              return !0;
            },
            renderDay: function (e, t) {
              return c.a.createElement("td", e, t.date());
            },
          });
          var S = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && z(e, t);
            })(n, e);
            var t,
              r,
              i = v(n);
            function n() {
              var e;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n);
              for (
                var t = arguments.length, r = new Array(t), a = 0;
                a < t;
                a++
              )
                r[a] = arguments[a];
              return (
                (function (e, t, r) {
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r);
                })(
                  M((e = i.call.apply(i, [this].concat(r)))),
                  "_updateSelectedMonth",
                  function (t) {
                    e.props.updateDate(t);
                  },
                ),
                e
              );
            }
            return (
              (t = n),
              (r = [
                {
                  key: "render",
                  value: function () {
                    return c.a.createElement(
                      "div",
                      { className: "rdtMonths" },
                      c.a.createElement(
                        "table",
                        null,
                        c.a.createElement(
                          "thead",
                          null,
                          this.renderNavigation(),
                        ),
                      ),
                      c.a.createElement(
                        "table",
                        null,
                        c.a.createElement("tbody", null, this.renderMonths()),
                      ),
                    );
                  },
                },
                {
                  key: "renderNavigation",
                  value: function () {
                    var e = this,
                      t = this.props.viewDate.year();
                    return c.a.createElement(u, {
                      onClickPrev: function () {
                        return e.props.navigate(-1, "years");
                      },
                      onClickSwitch: function () {
                        return e.props.showView("years");
                      },
                      onClickNext: function () {
                        return e.props.navigate(1, "years");
                      },
                      switchContent: t,
                      switchColSpan: "2",
                    });
                  },
                },
                {
                  key: "renderMonths",
                  value: function () {
                    for (var e = [[], [], []], t = 0; t < 12; t++)
                      R(e, t).push(this.renderMonth(t));
                    return e.map(function (e, t) {
                      return c.a.createElement("tr", { key: t }, e);
                    });
                  },
                },
                {
                  key: "renderMonth",
                  value: function (e) {
                    var t,
                      r = this.props.selectedDate,
                      i = "rdtMonth";
                    this.isDisabledMonth(e)
                      ? (i += " rdtDisabled")
                      : (t = this._updateSelectedMonth),
                      r &&
                        r.year() === this.props.viewDate.year() &&
                        r.month() === e &&
                        (i += " rdtActive");
                    var n = {
                      key: e,
                      className: i,
                      "data-value": e,
                      onClick: t,
                    };
                    return this.props.renderMonth
                      ? this.props.renderMonth(
                          n,
                          e,
                          this.props.viewDate.year(),
                          this.props.selectedDate &&
                            this.props.selectedDate.clone(),
                        )
                      : c.a.createElement("td", n, this.getMonthText(e));
                  },
                },
                {
                  key: "isDisabledMonth",
                  value: function (e) {
                    var t = this.props.isValidDate;
                    if (!t) return !1;
                    for (
                      var r = this.props.viewDate.clone().set({ month: e }),
                        i = r.endOf("month").date() + 1;
                      i-- > 1;

                    )
                      if (t(r.date(i))) return !1;
                    return !0;
                  },
                },
                {
                  key: "getMonthText",
                  value: function (e) {
                    var t,
                      r = this.props.viewDate;
                    return (
                      (t = r
                        .localeData()
                        .monthsShort(r.month(e))
                        .substring(0, 3))
                        .charAt(0)
                        .toUpperCase() + t.slice(1)
                    );
                  },
                },
              ]) && w(t.prototype, r),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              n
            );
          })(c.a.Component);
          function R(e, t) {
            return t < 4 ? e[0] : t < 8 ? e[1] : e[2];
          }
          function O(e) {
            return (O =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function j(e, t) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          function W(e, t) {
            return (W = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
          }
          function T(e) {
            var t = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var r,
                i = P(e);
              if (t) {
                var n = P(this).constructor;
                r = Reflect.construct(i, arguments, n);
              } else r = i.apply(this, arguments);
              return (function (e, t) {
                if (t && ("object" === O(t) || "function" == typeof t))
                  return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return E(e);
              })(this, r);
            };
          }
          function E(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return e;
          }
          function P(e) {
            return (P = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function C(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          var k = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && W(e, t);
            })(n, e);
            var t,
              r,
              i = T(n);
            function n() {
              var e;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n);
              for (
                var t = arguments.length, r = new Array(t), a = 0;
                a < t;
                a++
              )
                r[a] = arguments[a];
              return (
                C(
                  E((e = i.call.apply(i, [this].concat(r)))),
                  "disabledYearsCache",
                  {},
                ),
                C(E(e), "_updateSelectedYear", function (t) {
                  e.props.updateDate(t);
                }),
                e
              );
            }
            return (
              (t = n),
              (r = [
                {
                  key: "render",
                  value: function () {
                    return c.a.createElement(
                      "div",
                      { className: "rdtYears" },
                      c.a.createElement(
                        "table",
                        null,
                        c.a.createElement(
                          "thead",
                          null,
                          this.renderNavigation(),
                        ),
                      ),
                      c.a.createElement(
                        "table",
                        null,
                        c.a.createElement("tbody", null, this.renderYears()),
                      ),
                    );
                  },
                },
                {
                  key: "renderNavigation",
                  value: function () {
                    var e = this,
                      t = this.getViewYear();
                    return c.a.createElement(u, {
                      onClickPrev: function () {
                        return e.props.navigate(-10, "years");
                      },
                      onClickSwitch: function () {
                        return e.props.showView("years");
                      },
                      onClickNext: function () {
                        return e.props.navigate(10, "years");
                      },
                      switchContent: "".concat(t, "-").concat(t + 9),
                    });
                  },
                },
                {
                  key: "renderYears",
                  value: function () {
                    for (
                      var e = this.getViewYear(), t = [[], [], []], r = e - 1;
                      r < e + 11;
                      r++
                    )
                      I(t, r - e).push(this.renderYear(r));
                    return t.map(function (e, t) {
                      return c.a.createElement("tr", { key: t }, e);
                    });
                  },
                },
                {
                  key: "renderYear",
                  value: function (e) {
                    var t,
                      r = this.getSelectedYear(),
                      i = "rdtYear";
                    this.isDisabledYear(e)
                      ? (i += " rdtDisabled")
                      : (t = this._updateSelectedYear),
                      r === e && (i += " rdtActive");
                    var n = {
                      key: e,
                      className: i,
                      "data-value": e,
                      onClick: t,
                    };
                    return this.props.renderYear(
                      n,
                      e,
                      this.props.selectedDate &&
                        this.props.selectedDate.clone(),
                    );
                  },
                },
                {
                  key: "getViewYear",
                  value: function () {
                    return 10 * parseInt(this.props.viewDate.year() / 10, 10);
                  },
                },
                {
                  key: "getSelectedYear",
                  value: function () {
                    return (
                      this.props.selectedDate && this.props.selectedDate.year()
                    );
                  },
                },
                {
                  key: "isDisabledYear",
                  value: function (e) {
                    var t = this.disabledYearsCache;
                    if (void 0 !== t[e]) return t[e];
                    var r = this.props.isValidDate;
                    if (!r) return !1;
                    for (
                      var i = this.props.viewDate.clone().set({ year: e }),
                        n = i.endOf("year").dayOfYear() + 1;
                      n-- > 1;

                    )
                      if (r(i.dayOfYear(n))) return (t[e] = !1), !1;
                    return (t[e] = !0), !0;
                  },
                },
              ]) && j(t.prototype, r),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              n
            );
          })(c.a.Component);
          function I(e, t) {
            return t < 3 ? e[0] : t < 7 ? e[1] : e[2];
          }
          function U(e) {
            return (U =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function D(e, t) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          function A(e, t) {
            return (A = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
          }
          function x(e) {
            var t = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var r,
                i = X(e);
              if (t) {
                var n = X(this).constructor;
                r = Reflect.construct(i, arguments, n);
              } else r = i.apply(this, arguments);
              return (function (e, t) {
                if (t && ("object" === U(t) || "function" == typeof t))
                  return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return e;
                })(e);
              })(this, r);
            };
          }
          function X(e) {
            return (X = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function N(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              t &&
                (i = i.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, i);
            }
            return r;
          }
          function Z(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? N(Object(r), !0).forEach(function (t) {
                    G(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : N(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t),
                    );
                  });
            }
            return e;
          }
          function G(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          C(k, "defaultProps", {
            renderYear: function (e, t) {
              return c.a.createElement("td", e, t);
            },
          });
          var q = {
              hours: { min: 0, max: 23, step: 1 },
              minutes: { min: 0, max: 59, step: 1 },
              seconds: { min: 0, max: 59, step: 1 },
              milliseconds: { min: 0, max: 999, step: 1 },
            },
            L = (function (e) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function",
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(e, "prototype", { writable: !1 }),
                  t && A(e, t);
              })(n, e);
              var t,
                r,
                i = x(n);
              function n(e) {
                var t, r, a;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, n),
                  ((t = i.call(this, e)).constraints =
                    ((r = e.timeConstraints),
                    (a = {}),
                    Object.keys(q).forEach(function (e) {
                      a[e] = Z(Z({}, q[e]), r[e] || {});
                    }),
                    a)),
                  (t.state = t.getTimeParts(e.selectedDate || e.viewDate)),
                  t
                );
              }
              return (
                (t = n),
                (r = [
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = [],
                        r = this.state;
                      return (
                        this.getCounters().forEach(function (i, n) {
                          n &&
                            "ampm" !== i &&
                            t.push(
                              c.a.createElement(
                                "div",
                                {
                                  key: "sep".concat(n),
                                  className: "rdtCounterSeparator",
                                },
                                ":",
                              ),
                            ),
                            t.push(e.renderCounter(i, r[i]));
                        }),
                        c.a.createElement(
                          "div",
                          { className: "rdtTime" },
                          c.a.createElement(
                            "table",
                            null,
                            this.renderHeader(),
                            c.a.createElement(
                              "tbody",
                              null,
                              c.a.createElement(
                                "tr",
                                null,
                                c.a.createElement(
                                  "td",
                                  null,
                                  c.a.createElement(
                                    "div",
                                    { className: "rdtCounters" },
                                    t,
                                  ),
                                ),
                              ),
                            ),
                          ),
                        )
                      );
                    },
                  },
                  {
                    key: "renderCounter",
                    value: function (e, t) {
                      var r = this;
                      return (
                        "hours" === e &&
                          this.isAMPM() &&
                          0 == (t = ((t - 1) % 12) + 1) &&
                          (t = 12),
                        "ampm" === e &&
                          (t =
                            -1 !== this.props.timeFormat.indexOf(" A")
                              ? this.props.viewDate.format("A")
                              : this.props.viewDate.format("a")),
                        c.a.createElement(
                          "div",
                          { key: e, className: "rdtCounter" },
                          c.a.createElement(
                            "span",
                            {
                              className: "rdtBtn",
                              onMouseDown: function (t) {
                                return r.onStartClicking(t, "increase", e);
                              },
                            },
                            "▲",
                          ),
                          c.a.createElement(
                            "div",
                            { className: "rdtCount" },
                            t,
                          ),
                          c.a.createElement(
                            "span",
                            {
                              className: "rdtBtn",
                              onMouseDown: function (t) {
                                return r.onStartClicking(t, "decrease", e);
                              },
                            },
                            "▼",
                          ),
                        )
                      );
                    },
                  },
                  {
                    key: "renderHeader",
                    value: function () {
                      var e = this;
                      if (this.props.dateFormat) {
                        var t = this.props.selectedDate || this.props.viewDate;
                        return c.a.createElement(
                          "thead",
                          null,
                          c.a.createElement(
                            "tr",
                            null,
                            c.a.createElement(
                              "td",
                              {
                                className: "rdtSwitch",
                                colSpan: "4",
                                onClick: function () {
                                  return e.props.showView("days");
                                },
                              },
                              t.format(this.props.dateFormat),
                            ),
                          ),
                        );
                      }
                    },
                  },
                  {
                    key: "onStartClicking",
                    value: function (e, t, r) {
                      var i = this;
                      if (!e || !e.button || 0 === e.button) {
                        if ("ampm" === r) return this.toggleDayPart();
                        var n = {},
                          a = document.body;
                        (n[r] = this[t](r)),
                          this.setState(n),
                          (this.timer = setTimeout(function () {
                            i.increaseTimer = setInterval(function () {
                              (n[r] = i[t](r)), i.setState(n);
                            }, 70);
                          }, 500)),
                          (this.mouseUpListener = function () {
                            clearTimeout(i.timer),
                              clearInterval(i.increaseTimer),
                              i.props.setTime(r, parseInt(i.state[r], 10)),
                              a.removeEventListener(
                                "mouseup",
                                i.mouseUpListener,
                              ),
                              a.removeEventListener(
                                "touchend",
                                i.mouseUpListener,
                              );
                          }),
                          a.addEventListener("mouseup", this.mouseUpListener),
                          a.addEventListener("touchend", this.mouseUpListener);
                      }
                    },
                  },
                  {
                    key: "toggleDayPart",
                    value: function () {
                      var e = parseInt(this.state.hours, 10);
                      e >= 12 ? (e -= 12) : (e += 12),
                        this.props.setTime("hours", e);
                    },
                  },
                  {
                    key: "increase",
                    value: function (e) {
                      var t = this.constraints[e],
                        r = parseInt(this.state[e], 10) + t.step;
                      return (
                        r > t.max && (r = t.min + (r - (t.max + 1))), V(e, r)
                      );
                    },
                  },
                  {
                    key: "decrease",
                    value: function (e) {
                      var t = this.constraints[e],
                        r = parseInt(this.state[e], 10) - t.step;
                      return (
                        r < t.min && (r = t.max + 1 - (t.min - r)), V(e, r)
                      );
                    },
                  },
                  {
                    key: "getCounters",
                    value: function () {
                      var e = [],
                        t = this.props.timeFormat;
                      return (
                        -1 !== t.toLowerCase().indexOf("h") &&
                          (e.push("hours"),
                          -1 !== t.indexOf("m") &&
                            (e.push("minutes"),
                            -1 !== t.indexOf("s") &&
                              (e.push("seconds"),
                              -1 !== t.indexOf("S") &&
                                e.push("milliseconds")))),
                        this.isAMPM() && e.push("ampm"),
                        e
                      );
                    },
                  },
                  {
                    key: "isAMPM",
                    value: function () {
                      return (
                        -1 !== this.props.timeFormat.toLowerCase().indexOf(" a")
                      );
                    },
                  },
                  {
                    key: "getTimeParts",
                    value: function (e) {
                      var t = e.hours();
                      return {
                        hours: V("hours", t),
                        minutes: V("minutes", e.minutes()),
                        seconds: V("seconds", e.seconds()),
                        milliseconds: V("milliseconds", e.milliseconds()),
                        ampm: t < 12 ? "am" : "pm",
                      };
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      this.props.selectedDate
                        ? this.props.selectedDate !== e.selectedDate &&
                          this.setState(
                            this.getTimeParts(this.props.selectedDate),
                          )
                        : e.viewDate !== this.props.viewDate &&
                          this.setState(this.getTimeParts(this.props.viewDate));
                    },
                  },
                ]) && D(t.prototype, r),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                n
              );
            })(c.a.Component);
          function V(e, t) {
            for (
              var r = { hours: 1, minutes: 2, seconds: 2, milliseconds: 3 },
                i = t + "";
              i.length < r[e];

            )
              i = "0" + i;
            return i;
          }
          var H = r(2);
          function $(e, t) {
            return ($ =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function K(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return e;
          }
          function Y(e, t, r) {
            return (
              e === t ||
              (e.correspondingElement
                ? e.correspondingElement.classList.contains(r)
                : e.classList.contains(r))
            );
          }
          var J,
            Q,
            ee =
              (void 0 === J && (J = 0),
              function () {
                return ++J;
              }),
            te = {},
            re = {},
            ie = ["touchstart", "touchmove"];
          function ne(e, t) {
            var r = null;
            return (
              -1 !== ie.indexOf(t) &&
                Q &&
                (r = { passive: !e.props.preventDefault }),
              r
            );
          }
          function ae(e) {
            return (ae =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function se(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              t &&
                (i = i.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, i);
            }
            return r;
          }
          function oe(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? se(Object(r), !0).forEach(function (t) {
                    pe(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : se(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t),
                    );
                  });
            }
            return e;
          }
          function ce(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function le(e, t) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          function ue(e, t, r) {
            return (
              t && le(e.prototype, t),
              r && le(e, r),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              e
            );
          }
          function me(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && de(e, t);
          }
          function de(e, t) {
            return (de = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
          }
          function ye(e) {
            var t = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var r,
                i = Be(e);
              if (t) {
                var n = Be(this).constructor;
                r = Reflect.construct(i, arguments, n);
              } else r = i.apply(this, arguments);
              return (function (e, t) {
                if (t && ("object" === ae(t) || "function" == typeof t))
                  return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return fe(e);
              })(this, r);
            };
          }
          function fe(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return e;
          }
          function Be(e) {
            return (Be = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function pe(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          r.d(t, "default", function () {
            return Me;
          });
          var be = "years",
            _e = "months",
            ge = "days",
            he = "time",
            we = n.a,
            ze = function () {},
            ve = we.oneOfType([
              we.instanceOf(s.a),
              we.instanceOf(Date),
              we.string,
            ]),
            Me = (function (e) {
              me(r, e);
              var t = ye(r);
              function r(e) {
                var i;
                return (
                  ce(this, r),
                  pe(fe((i = t.call(this, e))), "_renderCalendar", function () {
                    var e = i.props,
                      t = i.state,
                      r = {
                        viewDate: t.viewDate.clone(),
                        selectedDate: i.getSelectedDate(),
                        isValidDate: e.isValidDate,
                        updateDate: i._updateDate,
                        navigate: i._viewNavigate,
                        moment: s.a,
                        showView: i._showView,
                      };
                    switch (t.currentView) {
                      case be:
                        return (
                          (r.renderYear = e.renderYear), c.a.createElement(k, r)
                        );
                      case _e:
                        return (
                          (r.renderMonth = e.renderMonth),
                          c.a.createElement(S, r)
                        );
                      case ge:
                        return (
                          (r.renderDay = e.renderDay),
                          (r.timeFormat = i.getFormat("time")),
                          c.a.createElement(_, r)
                        );
                      default:
                        return (
                          (r.dateFormat = i.getFormat("date")),
                          (r.timeFormat = i.getFormat("time")),
                          (r.timeConstraints = e.timeConstraints),
                          (r.setTime = i._setTime),
                          c.a.createElement(L, r)
                        );
                    }
                  }),
                  pe(fe(i), "_showView", function (e, t) {
                    var r = (t || i.state.viewDate).clone(),
                      n = i.props.onBeforeNavigate(e, i.state.currentView, r);
                    n &&
                      i.state.currentView !== n &&
                      (i.props.onNavigate(n), i.setState({ currentView: n }));
                  }),
                  pe(fe(i), "viewToMethod", {
                    days: "date",
                    months: "month",
                    years: "year",
                  }),
                  pe(fe(i), "nextView", {
                    days: "time",
                    months: "days",
                    years: "months",
                  }),
                  pe(fe(i), "_updateDate", function (e) {
                    var t = i.state.currentView,
                      r = i.getUpdateOn(i.getFormat("date")),
                      n = i.state.viewDate.clone();
                    n[i.viewToMethod[t]](
                      parseInt(e.target.getAttribute("data-value"), 10),
                    ),
                      "days" === t &&
                        (n.month(
                          parseInt(e.target.getAttribute("data-month"), 10),
                        ),
                        n.year(
                          parseInt(e.target.getAttribute("data-year"), 10),
                        ));
                    var a = { viewDate: n };
                    t === r
                      ? ((a.selectedDate = n.clone()),
                        (a.inputValue = n.format(i.getFormat("datetime"))),
                        void 0 === i.props.open &&
                          i.props.input &&
                          i.props.closeOnSelect &&
                          i._closeCalendar(),
                        i.props.onChange(n.clone()))
                      : i._showView(i.nextView[t], n),
                      i.setState(a);
                  }),
                  pe(fe(i), "_viewNavigate", function (e, t) {
                    var r = i.state.viewDate.clone();
                    r.add(e, t),
                      e > 0
                        ? i.props.onNavigateForward(e, t)
                        : i.props.onNavigateBack(-e, t),
                      i.setState({ viewDate: r });
                  }),
                  pe(fe(i), "_setTime", function (e, t) {
                    var r = (i.getSelectedDate() || i.state.viewDate).clone();
                    r[e](t),
                      i.props.value ||
                        i.setState({
                          selectedDate: r,
                          viewDate: r.clone(),
                          inputValue: r.format(i.getFormat("datetime")),
                        }),
                      i.props.onChange(r);
                  }),
                  pe(fe(i), "_openCalendar", function () {
                    i.isOpen() || i.setState({ open: !0 }, i.props.onOpen);
                  }),
                  pe(fe(i), "_closeCalendar", function () {
                    i.isOpen() &&
                      i.setState({ open: !1 }, function () {
                        i.props.onClose(
                          i.state.selectedDate || i.state.inputValue,
                        );
                      });
                  }),
                  pe(fe(i), "_handleClickOutside", function () {
                    var e = i.props;
                    e.input &&
                      i.state.open &&
                      void 0 === e.open &&
                      e.closeOnClickOutside &&
                      i._closeCalendar();
                  }),
                  pe(fe(i), "_onInputFocus", function (e) {
                    i.callHandler(i.props.inputProps.onFocus, e) &&
                      i._openCalendar();
                  }),
                  pe(fe(i), "_onInputChange", function (e) {
                    if (i.callHandler(i.props.inputProps.onChange, e)) {
                      var t = e.target ? e.target.value : e,
                        r = i.localMoment(t, i.getFormat("datetime")),
                        n = { inputValue: t };
                      r.isValid()
                        ? ((n.selectedDate = r),
                          (n.viewDate = r.clone().startOf("month")))
                        : (n.selectedDate = null),
                        i.setState(n, function () {
                          i.props.onChange(
                            r.isValid() ? r : i.state.inputValue,
                          );
                        });
                    }
                  }),
                  pe(fe(i), "_onInputKeyDown", function (e) {
                    i.callHandler(i.props.inputProps.onKeyDown, e) &&
                      9 === e.which &&
                      i.props.closeOnTab &&
                      i._closeCalendar();
                  }),
                  pe(fe(i), "_onInputClick", function (e) {
                    i.callHandler(i.props.inputProps.onClick, e) &&
                      i._openCalendar();
                  }),
                  (i.state = i.getInitialState()),
                  i
                );
              }
              return (
                ue(r, [
                  {
                    key: "render",
                    value: function () {
                      return c.a.createElement(
                        Se,
                        {
                          className: this.getClassName(),
                          onClickOut: this._handleClickOutside,
                        },
                        this.renderInput(),
                        c.a.createElement(
                          "div",
                          { className: "rdtPicker" },
                          this.renderView(),
                        ),
                      );
                    },
                  },
                  {
                    key: "renderInput",
                    value: function () {
                      if (this.props.input) {
                        var e = oe(
                          oe(
                            {
                              type: "text",
                              className: "form-control",
                              value: this.getInputValue(),
                            },
                            this.props.inputProps,
                          ),
                          {},
                          {
                            onFocus: this._onInputFocus,
                            onChange: this._onInputChange,
                            onKeyDown: this._onInputKeyDown,
                            onClick: this._onInputClick,
                          },
                        );
                        return this.props.renderInput
                          ? c.a.createElement(
                              "div",
                              null,
                              this.props.renderInput(
                                e,
                                this._openCalendar,
                                this._closeCalendar,
                              ),
                            )
                          : c.a.createElement("input", e);
                      }
                    },
                  },
                  {
                    key: "renderView",
                    value: function () {
                      return this.props.renderView(
                        this.state.currentView,
                        this._renderCalendar,
                      );
                    },
                  },
                  {
                    key: "getInitialState",
                    value: function () {
                      var e = this.props,
                        t = this.getFormat("datetime"),
                        r = this.parseDate(e.value || e.initialValue, t);
                      return (
                        this.checkTZ(),
                        {
                          open: !e.input,
                          currentView:
                            e.initialViewMode || this.getInitialView(),
                          viewDate: this.getInitialViewDate(r),
                          selectedDate: r && r.isValid() ? r : void 0,
                          inputValue: this.getInitialInputValue(r),
                        }
                      );
                    },
                  },
                  {
                    key: "getInitialViewDate",
                    value: function (e) {
                      var t,
                        r = this.props.initialViewDate;
                      if (r) {
                        if (
                          (t = this.parseDate(r, this.getFormat("datetime"))) &&
                          t.isValid()
                        )
                          return t;
                        Fe(
                          'The initialViewDated given "' +
                            r +
                            '" is not valid. Using current date instead.',
                        );
                      } else if (e && e.isValid()) return e.clone();
                      return this.getInitialDate();
                    },
                  },
                  {
                    key: "getInitialDate",
                    value: function () {
                      var e = this.localMoment();
                      return e.hour(0).minute(0).second(0).millisecond(0), e;
                    },
                  },
                  {
                    key: "getInitialView",
                    value: function () {
                      var e = this.getFormat("date");
                      return e ? this.getUpdateOn(e) : he;
                    },
                  },
                  {
                    key: "parseDate",
                    value: function (e, t) {
                      var r;
                      return (
                        e && "string" == typeof e
                          ? (r = this.localMoment(e, t))
                          : e && (r = this.localMoment(e)),
                        r && !r.isValid() && (r = null),
                        r
                      );
                    },
                  },
                  {
                    key: "getClassName",
                    value: function () {
                      var e = "rdt",
                        t = this.props,
                        r = t.className;
                      return (
                        Array.isArray(r)
                          ? (e += " " + r.join(" "))
                          : r && (e += " " + r),
                        t.input || (e += " rdtStatic"),
                        this.isOpen() && (e += " rdtOpen"),
                        e
                      );
                    },
                  },
                  {
                    key: "isOpen",
                    value: function () {
                      return (
                        !this.props.input ||
                        (void 0 === this.props.open
                          ? this.state.open
                          : this.props.open)
                      );
                    },
                  },
                  {
                    key: "getUpdateOn",
                    value: function (e) {
                      return this.props.updateOnView
                        ? this.props.updateOnView
                        : e.match(/[lLD]/)
                        ? ge
                        : -1 !== e.indexOf("M")
                        ? _e
                        : -1 !== e.indexOf("Y")
                        ? be
                        : ge;
                    },
                  },
                  {
                    key: "getLocaleData",
                    value: function () {
                      var e = this.props;
                      return this.localMoment(
                        e.value || e.defaultValue || new Date(),
                      ).localeData();
                    },
                  },
                  {
                    key: "getDateFormat",
                    value: function () {
                      var e = this.getLocaleData(),
                        t = this.props.dateFormat;
                      return !0 === t ? e.longDateFormat("L") : t || "";
                    },
                  },
                  {
                    key: "getTimeFormat",
                    value: function () {
                      var e = this.getLocaleData(),
                        t = this.props.timeFormat;
                      return !0 === t ? e.longDateFormat("LT") : t || "";
                    },
                  },
                  {
                    key: "getFormat",
                    value: function (e) {
                      if ("date" === e) return this.getDateFormat();
                      if ("time" === e) return this.getTimeFormat();
                      var t = this.getDateFormat(),
                        r = this.getTimeFormat();
                      return t && r ? t + " " + r : t || r;
                    },
                  },
                  {
                    key: "updateTime",
                    value: function (e, t, r, i) {
                      var n = {},
                        a = i ? "selectedDate" : "viewDate";
                      (n[a] = this.state[a].clone()[e](t, r)), this.setState(n);
                    },
                  },
                  {
                    key: "localMoment",
                    value: function (e, t, r) {
                      var i = null;
                      return (
                        (i = (r = r || this.props).utc
                          ? s.a.utc(e, t, r.strictParsing)
                          : r.displayTimeZone
                          ? s.a.tz(e, t, r.displayTimeZone)
                          : s()(e, t, r.strictParsing)),
                        r.locale && i.locale(r.locale),
                        i
                      );
                    },
                  },
                  {
                    key: "checkTZ",
                    value: function () {
                      var e = this.props.displayTimeZone;
                      !e ||
                        this.tzWarning ||
                        s.a.tz ||
                        ((this.tzWarning = !0),
                        Fe(
                          'displayTimeZone prop with value "' +
                            e +
                            '" is used but moment.js timezone is not loaded.',
                          "error",
                        ));
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      if (e !== this.props) {
                        var t = !1,
                          r = this.props;
                        [
                          "locale",
                          "utc",
                          "displayZone",
                          "dateFormat",
                          "timeFormat",
                        ].forEach(function (i) {
                          e[i] !== r[i] && (t = !0);
                        }),
                          t && this.regenerateDates(),
                          r.value &&
                            r.value !== e.value &&
                            this.setViewDate(r.value),
                          this.checkTZ();
                      }
                    },
                  },
                  {
                    key: "regenerateDates",
                    value: function () {
                      var e = this.props,
                        t = this.state.viewDate.clone(),
                        r =
                          this.state.selectedDate &&
                          this.state.selectedDate.clone();
                      e.locale && (t.locale(e.locale), r && r.locale(e.locale)),
                        e.utc
                          ? (t.utc(), r && r.utc())
                          : e.displayTimeZone
                          ? (t.tz(e.displayTimeZone),
                            r && r.tz(e.displayTimeZone))
                          : (t.locale(), r && r.locale());
                      var i = { viewDate: t, selectedDate: r };
                      r &&
                        r.isValid() &&
                        (i.inputValue = r.format(this.getFormat("datetime"))),
                        this.setState(i);
                    },
                  },
                  {
                    key: "getSelectedDate",
                    value: function () {
                      if (void 0 === this.props.value)
                        return this.state.selectedDate;
                      var e = this.parseDate(
                        this.props.value,
                        this.getFormat("datetime"),
                      );
                      return !(!e || !e.isValid()) && e;
                    },
                  },
                  {
                    key: "getInitialInputValue",
                    value: function (e) {
                      var t = this.props;
                      return t.inputProps.value
                        ? t.inputProps.value
                        : e && e.isValid()
                        ? e.format(this.getFormat("datetime"))
                        : t.value && "string" == typeof t.value
                        ? t.value
                        : t.initialValue && "string" == typeof t.initialValue
                        ? t.initialValue
                        : "";
                    },
                  },
                  {
                    key: "getInputValue",
                    value: function () {
                      var e = this.getSelectedDate();
                      return e
                        ? e.format(this.getFormat("datetime"))
                        : this.state.inputValue;
                    },
                  },
                  {
                    key: "setViewDate",
                    value: function (e) {
                      var t;
                      return e &&
                        (t =
                          "string" == typeof e
                            ? this.localMoment(e, this.getFormat("datetime"))
                            : this.localMoment(e)) &&
                        t.isValid()
                        ? void this.setState({ viewDate: t })
                        : Fe(
                            "Invalid date passed to the `setViewDate` method: " +
                              e,
                          );
                    },
                  },
                  {
                    key: "navigate",
                    value: function (e) {
                      this._showView(e);
                    },
                  },
                  {
                    key: "callHandler",
                    value: function (e, t) {
                      return !e || !1 !== e(t);
                    },
                  },
                ]),
                r
              );
            })(c.a.Component);
          function Fe(e, t) {
            var r = "undefined" != typeof window && window.console;
            r && (t || (t = "warn"), r[t]("***react-datetime:" + e));
          }
          pe(Me, "propTypes", {
            value: ve,
            initialValue: ve,
            initialViewDate: ve,
            initialViewMode: we.oneOf([be, _e, ge, he]),
            onOpen: we.func,
            onClose: we.func,
            onChange: we.func,
            onNavigate: we.func,
            onBeforeNavigate: we.func,
            onNavigateBack: we.func,
            onNavigateForward: we.func,
            updateOnView: we.string,
            locale: we.string,
            utc: we.bool,
            displayTimeZone: we.string,
            input: we.bool,
            dateFormat: we.oneOfType([we.string, we.bool]),
            timeFormat: we.oneOfType([we.string, we.bool]),
            inputProps: we.object,
            timeConstraints: we.object,
            isValidDate: we.func,
            open: we.bool,
            strictParsing: we.bool,
            closeOnSelect: we.bool,
            closeOnTab: we.bool,
            renderView: we.func,
            renderInput: we.func,
            renderDay: we.func,
            renderMonth: we.func,
            renderYear: we.func,
          }),
            pe(Me, "defaultProps", {
              onOpen: ze,
              onClose: ze,
              onCalendarOpen: ze,
              onCalendarClose: ze,
              onChange: ze,
              onNavigate: ze,
              onBeforeNavigate: function (e) {
                return e;
              },
              onNavigateBack: ze,
              onNavigateForward: ze,
              dateFormat: !0,
              timeFormat: !0,
              utc: !1,
              className: "",
              input: !0,
              inputProps: {},
              timeConstraints: {},
              isValidDate: function () {
                return !0;
              },
              strictParsing: !0,
              closeOnSelect: !1,
              closeOnTab: !0,
              closeOnClickOutside: !0,
              renderView: function (e, t) {
                return t();
              },
            }),
            pe(Me, "moment", s.a);
          var Se = (function (e, t) {
            var r,
              i,
              n = e.displayName || e.name || "Component";
            return (
              (i = r =
                (function (r) {
                  var i, a;
                  function s(e) {
                    var i;
                    return (
                      ((i = r.call(this, e) || this).__outsideClickHandler =
                        function (e) {
                          if (
                            "function" != typeof i.__clickOutsideHandlerProp
                          ) {
                            var t = i.getInstance();
                            if (
                              "function" != typeof t.props.handleClickOutside
                            ) {
                              if ("function" != typeof t.handleClickOutside)
                                throw new Error(
                                  "WrappedComponent: " +
                                    n +
                                    " lacks a handleClickOutside(event) function for processing outside click events.",
                                );
                              t.handleClickOutside(e);
                            } else t.props.handleClickOutside(e);
                          } else i.__clickOutsideHandlerProp(e);
                        }),
                      (i.__getComponentNode = function () {
                        var e = i.getInstance();
                        return t && "function" == typeof t.setClickOutsideRef
                          ? t.setClickOutsideRef()(e)
                          : "function" == typeof e.setClickOutsideRef
                          ? e.setClickOutsideRef()
                          : Object(H.findDOMNode)(e);
                      }),
                      (i.enableOnClickOutside = function () {
                        if ("undefined" != typeof document && !re[i._uid]) {
                          void 0 === Q &&
                            (Q = (function () {
                              if (
                                "undefined" != typeof window &&
                                "function" == typeof window.addEventListener
                              ) {
                                var e = !1,
                                  t = Object.defineProperty({}, "passive", {
                                    get: function () {
                                      e = !0;
                                    },
                                  }),
                                  r = function () {};
                                return (
                                  window.addEventListener(
                                    "testPassiveEventSupport",
                                    r,
                                    t,
                                  ),
                                  window.removeEventListener(
                                    "testPassiveEventSupport",
                                    r,
                                    t,
                                  ),
                                  e
                                );
                              }
                            })()),
                            (re[i._uid] = !0);
                          var e = i.props.eventTypes;
                          e.forEach || (e = [e]),
                            (te[i._uid] = function (e) {
                              var t;
                              null !== i.componentNode &&
                                (i.props.preventDefault && e.preventDefault(),
                                i.props.stopPropagation && e.stopPropagation(),
                                (i.props.excludeScrollbar &&
                                  ((t = e),
                                  document.documentElement.clientWidth <=
                                    t.clientX ||
                                    document.documentElement.clientHeight <=
                                      t.clientY)) ||
                                  ((function (e, t, r) {
                                    if (e === t) return !0;
                                    for (; e.parentNode || e.host; ) {
                                      if (e.parentNode && Y(e, t, r)) return !0;
                                      e = e.parentNode || e.host;
                                    }
                                    return e;
                                  })(
                                    (e.composed &&
                                      e.composedPath &&
                                      e.composedPath().shift()) ||
                                      e.target,
                                    i.componentNode,
                                    i.props.outsideClickIgnoreClass,
                                  ) === document &&
                                    i.__outsideClickHandler(e)));
                            }),
                            e.forEach(function (e) {
                              document.addEventListener(
                                e,
                                te[i._uid],
                                ne(K(i), e),
                              );
                            });
                        }
                      }),
                      (i.disableOnClickOutside = function () {
                        delete re[i._uid];
                        var e = te[i._uid];
                        if (e && "undefined" != typeof document) {
                          var t = i.props.eventTypes;
                          t.forEach || (t = [t]),
                            t.forEach(function (t) {
                              return document.removeEventListener(
                                t,
                                e,
                                ne(K(i), t),
                              );
                            }),
                            delete te[i._uid];
                        }
                      }),
                      (i.getRef = function (e) {
                        return (i.instanceRef = e);
                      }),
                      (i._uid = ee()),
                      i
                    );
                  }
                  (a = r),
                    ((i = s).prototype = Object.create(a.prototype)),
                    (i.prototype.constructor = i),
                    $(i, a);
                  var c = s.prototype;
                  return (
                    (c.getInstance = function () {
                      if (e.prototype && !e.prototype.isReactComponent)
                        return this;
                      var t = this.instanceRef;
                      return t.getInstance ? t.getInstance() : t;
                    }),
                    (c.componentDidMount = function () {
                      if (
                        "undefined" != typeof document &&
                        document.createElement
                      ) {
                        var e = this.getInstance();
                        if (
                          t &&
                          "function" == typeof t.handleClickOutside &&
                          ((this.__clickOutsideHandlerProp =
                            t.handleClickOutside(e)),
                          "function" != typeof this.__clickOutsideHandlerProp)
                        )
                          throw new Error(
                            "WrappedComponent: " +
                              n +
                              " lacks a function for processing outside click events specified by the handleClickOutside config option.",
                          );
                        (this.componentNode = this.__getComponentNode()),
                          this.props.disableOnClickOutside ||
                            this.enableOnClickOutside();
                      }
                    }),
                    (c.componentDidUpdate = function () {
                      this.componentNode = this.__getComponentNode();
                    }),
                    (c.componentWillUnmount = function () {
                      this.disableOnClickOutside();
                    }),
                    (c.render = function () {
                      var t = this.props;
                      t.excludeScrollbar;
                      var r = (function (e, t) {
                        if (null == e) return {};
                        var r,
                          i,
                          n = {},
                          a = Object.keys(e);
                        for (i = 0; i < a.length; i++)
                          (r = a[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                        return n;
                      })(t, ["excludeScrollbar"]);
                      return (
                        e.prototype && e.prototype.isReactComponent
                          ? (r.ref = this.getRef)
                          : (r.wrappedRef = this.getRef),
                        (r.disableOnClickOutside = this.disableOnClickOutside),
                        (r.enableOnClickOutside = this.enableOnClickOutside),
                        Object(o.createElement)(e, r)
                      );
                    }),
                    s
                  );
                })(o.Component)),
              (r.displayName = "OnClickOutside(" + n + ")"),
              (r.defaultProps = {
                eventTypes: ["mousedown", "touchstart"],
                excludeScrollbar: (t && t.excludeScrollbar) || !1,
                outsideClickIgnoreClass: "ignore-react-onclickoutside",
                preventDefault: !1,
                stopPropagation: !1,
              }),
              (r.getClass = function () {
                return e.getClass ? e.getClass() : e;
              }),
              i
            );
          })(
            (function (e) {
              me(r, e);
              var t = ye(r);
              function r() {
                var e;
                ce(this, r);
                for (
                  var i = arguments.length, n = new Array(i), a = 0;
                  a < i;
                  a++
                )
                  n[a] = arguments[a];
                return (
                  pe(
                    fe((e = t.call.apply(t, [this].concat(n)))),
                    "container",
                    c.a.createRef(),
                  ),
                  e
                );
              }
              return (
                ue(r, [
                  {
                    key: "render",
                    value: function () {
                      return c.a.createElement(
                        "div",
                        {
                          className: this.props.className,
                          ref: this.container,
                        },
                        this.props.children,
                      );
                    },
                  },
                  {
                    key: "handleClickOutside",
                    value: function (e) {
                      this.props.onClickOut(e);
                    },
                  },
                  {
                    key: "setClickOutsideRef",
                    value: function () {
                      return this.container.current;
                    },
                  },
                ]),
                r
              );
            })(c.a.Component),
          );
        },
      ]);
    },
    94738: (e, t, r) => {
      "use strict";
      r.d(t, {
        AP: () => Rt,
        No: () => Tt,
        Oz: () => Et,
        Sv: () => _e,
        bM: () => dt,
        kv: () => B,
        lk: () => b,
        n8: () => St,
      });
      var i = r(45878),
        n = r(43898),
        a = r(67328),
        s = r(76322);
      const o = i.Message;
      var c, l, u, m, d, y, f, B, p, b, _;
      !(function (e) {
        (e[(e.k_EUserBadgeInvalid = 0)] = "k_EUserBadgeInvalid"),
          (e[(e.k_EUserBadgeYearsOfService = 1)] =
            "k_EUserBadgeYearsOfService"),
          (e[(e.k_EUserBadgeCommunity = 2)] = "k_EUserBadgeCommunity"),
          (e[(e.k_EUserBadgePortal2PotatoARG = 3)] =
            "k_EUserBadgePortal2PotatoARG"),
          (e[(e.k_EUserBadgeTreasureHunt = 4)] = "k_EUserBadgeTreasureHunt"),
          (e[(e.k_EUserBadgeSummerSale2011 = 5)] =
            "k_EUserBadgeSummerSale2011"),
          (e[(e.k_EUserBadgeWinterSale2011 = 6)] =
            "k_EUserBadgeWinterSale2011"),
          (e[(e.k_EUserBadgeSummerSale2012 = 7)] =
            "k_EUserBadgeSummerSale2012"),
          (e[(e.k_EUserBadgeWinterSale2012 = 8)] =
            "k_EUserBadgeWinterSale2012"),
          (e[(e.k_EUserBadgeCommunityTranslator = 9)] =
            "k_EUserBadgeCommunityTranslator"),
          (e[(e.k_EUserBadgeCommunityModerator = 10)] =
            "k_EUserBadgeCommunityModerator"),
          (e[(e.k_EUserBadgeValveEmployee = 11)] = "k_EUserBadgeValveEmployee"),
          (e[(e.k_EUserBadgeGameDeveloper = 12)] = "k_EUserBadgeGameDeveloper"),
          (e[(e.k_EUserBadgeGameCollector = 13)] = "k_EUserBadgeGameCollector"),
          (e[(e.k_EUserBadgeTradingCardBetaParticipant = 14)] =
            "k_EUserBadgeTradingCardBetaParticipant"),
          (e[(e.k_EUserBadgeSteamBoxBeta = 15)] = "k_EUserBadgeSteamBoxBeta"),
          (e[(e.k_EUserBadgeSummer2014RedTeam = 16)] =
            "k_EUserBadgeSummer2014RedTeam"),
          (e[(e.k_EUserBadgeSummer2014BlueTeam = 17)] =
            "k_EUserBadgeSummer2014BlueTeam"),
          (e[(e.k_EUserBadgeSummer2014PinkTeam = 18)] =
            "k_EUserBadgeSummer2014PinkTeam"),
          (e[(e.k_EUserBadgeSummer2014GreenTeam = 19)] =
            "k_EUserBadgeSummer2014GreenTeam"),
          (e[(e.k_EUserBadgeSummer2014PurpleTeam = 20)] =
            "k_EUserBadgeSummer2014PurpleTeam"),
          (e[(e.k_EUserBadgeAuction2014 = 21)] = "k_EUserBadgeAuction2014"),
          (e[(e.k_EUserBadgeGoldenProfile2014 = 22)] =
            "k_EUserBadgeGoldenProfile2014"),
          (e[(e.k_EUserBadgeTowerAttackMiniGame = 23)] =
            "k_EUserBadgeTowerAttackMiniGame"),
          (e[(e.k_EUserBadgeWinter2015ARG_RedHerring = 24)] =
            "k_EUserBadgeWinter2015ARG_RedHerring"),
          (e[(e.k_EUserBadgeSteamAwards2016Nominations = 25)] =
            "k_EUserBadgeSteamAwards2016Nominations"),
          (e[(e.k_EUserBadgeStickerCompletionist2017 = 26)] =
            "k_EUserBadgeStickerCompletionist2017"),
          (e[(e.k_EUserBadgeSteamAwards2017Nominations = 27)] =
            "k_EUserBadgeSteamAwards2017Nominations"),
          (e[(e.k_EUserBadgeSpringCleaning2018 = 28)] =
            "k_EUserBadgeSpringCleaning2018"),
          (e[(e.k_EUserBadgeSalien = 29)] = "k_EUserBadgeSalien"),
          (e[(e.k_EUserBadgeRetiredModerator = 30)] =
            "k_EUserBadgeRetiredModerator"),
          (e[(e.k_EUserBadgeSteamAwards2018Nominations = 31)] =
            "k_EUserBadgeSteamAwards2018Nominations"),
          (e[(e.k_EUserBadgeValveModerator = 32)] =
            "k_EUserBadgeValveModerator"),
          (e[(e.k_EUserBadgeWinterSale2018 = 33)] =
            "k_EUserBadgeWinterSale2018"),
          (e[(e.k_EUserBadgeLunarNewYearSale2019 = 34)] =
            "k_EUserBadgeLunarNewYearSale2019"),
          (e[(e.k_EUserBadgeLunarNewYearSale2019GoldenProfile = 35)] =
            "k_EUserBadgeLunarNewYearSale2019GoldenProfile"),
          (e[(e.k_EUserBadgeSpringCleaning2019 = 36)] =
            "k_EUserBadgeSpringCleaning2019"),
          (e[(e.k_EUserBadgeSummerSale2019 = 37)] =
            "k_EUserBadgeSummerSale2019"),
          (e[(e.k_EUserBadgeSummerSale2019_TeamHare = 38)] =
            "k_EUserBadgeSummerSale2019_TeamHare"),
          (e[(e.k_EUserBadgeSummerSale2019_TeamTortoise = 39)] =
            "k_EUserBadgeSummerSale2019_TeamTortoise"),
          (e[(e.k_EUserBadgeSummerSale2019_TeamCorgi = 40)] =
            "k_EUserBadgeSummerSale2019_TeamCorgi"),
          (e[(e.k_EUserBadgeSummerSale2019_TeamCockatiel = 41)] =
            "k_EUserBadgeSummerSale2019_TeamCockatiel"),
          (e[(e.k_EUserBadgeSummerSale2019_TeamPig = 42)] =
            "k_EUserBadgeSummerSale2019_TeamPig"),
          (e[(e.k_EUserBadgeSteamAwards2019Nominations = 43)] =
            "k_EUserBadgeSteamAwards2019Nominations"),
          (e[(e.k_EUserBadgeWinterSaleEvent2019 = 44)] =
            "k_EUserBadgeWinterSaleEvent2019"),
          (e[(e.k_EUserBadgeWinterSale2019Steamville = 45)] =
            "k_EUserBadgeWinterSale2019Steamville"),
          (e[(e.k_EUserBadgeLunarNewYearSale2020 = 46)] =
            "k_EUserBadgeLunarNewYearSale2020"),
          (e[(e.k_EUserBadgeSpringCleaning2020 = 47)] =
            "k_EUserBadgeSpringCleaning2020"),
          (e[(e.k_EUserBadgeAwardsCommunityContributor = 48)] =
            "k_EUserBadgeAwardsCommunityContributor"),
          (e[(e.k_EUserBadgeAwardsCommunityPatron = 49)] =
            "k_EUserBadgeAwardsCommunityPatron"),
          (e[(e.k_EUserBadgeSteamAwards2020Nominations = 50)] =
            "k_EUserBadgeSteamAwards2020Nominations"),
          (e[(e.k_EUserBadgeSummerSale2021_MaskedAvenger = 51)] =
            "k_EUserBadgeSummerSale2021_MaskedAvenger"),
          (e[(e.k_EUserBadgeSummerSale2021_TrailblazingExplorer = 52)] =
            "k_EUserBadgeSummerSale2021_TrailblazingExplorer"),
          (e[(e.k_EUserBadgeSummerSale2021_GorillaScientist = 53)] =
            "k_EUserBadgeSummerSale2021_GorillaScientist"),
          (e[(e.k_EUserBadgeSummerSale2021_ParanormalProfessor = 54)] =
            "k_EUserBadgeSummerSale2021_ParanormalProfessor"),
          (e[(e.k_EUserBadgeSummerSale2021_GhostDetective = 55)] =
            "k_EUserBadgeSummerSale2021_GhostDetective"),
          (e[(e.k_EUserBadgeSteamAwards2021Nominations = 56)] =
            "k_EUserBadgeSteamAwards2021Nominations"),
          (e[(e.k_EUserBadgeSteamAwards2021NominationsClassic = 57)] =
            "k_EUserBadgeSteamAwards2021NominationsClassic"),
          (e[(e.k_EUserBadgeRetiredCommunityTranslator = 58)] =
            "k_EUserBadgeRetiredCommunityTranslator"),
          (e[(e.k_EUserBadgeRacingSale2022 = 59)] =
            "k_EUserBadgeRacingSale2022"),
          (e[(e.k_EUserBadgeNextFestSummer2022 = 60)] =
            "k_EUserBadgeNextFestSummer2022"),
          (e[(e.k_EUserBadgeSummerMiniGame2022 = 61)] =
            "k_EUserBadgeSummerMiniGame2022"),
          (e[(e.k_EUserBadgeNextFestAutumn2022 = 62)] =
            "k_EUserBadgeNextFestAutumn2022"),
          (e[(e.k_EUserBadgeSteamAwards2022Nominations = 63)] =
            "k_EUserBadgeSteamAwards2022Nominations"),
          (e[(e.k_EUserBadgeReplay2022 = 64)] = "k_EUserBadgeReplay2022"),
          (e[(e.k_EUserBadgeSteamAwards2023Nominations = 65)] =
            "k_EUserBadgeSteamAwards2023Nominations");
      })(c || (c = {})),
        (function (e) {
          (e[(e.k_EAuctionBadgeLevel_Invalid = 0)] =
            "k_EAuctionBadgeLevel_Invalid"),
            (e[(e.k_EAuctionBadgeLevel_MadeGoo = 1)] =
              "k_EAuctionBadgeLevel_MadeGoo"),
            (e[(e.k_EAuctionBadgeLevel_BidInAuction = 2)] =
              "k_EAuctionBadgeLevel_BidInAuction"),
            (e[(e.k_EAuctionBadgeLevel_WonInAuction = 3)] =
              "k_EAuctionBadgeLevel_WonInAuction");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_EProfileCustomizationStyleDefault = 0)] =
            "k_EProfileCustomizationStyleDefault"),
            (e[(e.k_EProfileCustomizationStyleSelected = 1)] =
              "k_EProfileCustomizationStyleSelected"),
            (e[(e.k_EProfileCustomizationStyleRarest = 2)] =
              "k_EProfileCustomizationStyleRarest"),
            (e[(e.k_EProfileCustomizationStyleMostRecent = 3)] =
              "k_EProfileCustomizationStyleMostRecent"),
            (e[(e.k_EProfileCustomizationStyleRandom = 4)] =
              "k_EProfileCustomizationStyleRandom"),
            (e[(e.k_EProfileCustomizationStyleHighestRated = 5)] =
              "k_EProfileCustomizationStyleHighestRated");
        })(u || (u = {})),
        (function (e) {
          e[(e.k_EProfileItemEquippedFlag_FullScreen = 1)] =
            "k_EProfileItemEquippedFlag_FullScreen";
        })(m || (m = {})),
        (function (e) {
          (e[(e.k_EProfileColorStyle_Invalid = 0)] =
            "k_EProfileColorStyle_Invalid"),
            (e[(e.k_EProfileColorStyle_BackgroundGradient_Left = 1)] =
              "k_EProfileColorStyle_BackgroundGradient_Left"),
            (e[(e.k_EProfileColorStyle_BackgroundGradient_Right = 2)] =
              "k_EProfileColorStyle_BackgroundGradient_Right"),
            (e[(e.k_EProfileColorStyle_BackgroundGradient_Center = 3)] =
              "k_EProfileColorStyle_BackgroundGradient_Center"),
            (e[(e.k_EProfileColorStyle_ShowcaseGradient_Left = 4)] =
              "k_EProfileColorStyle_ShowcaseGradient_Left"),
            (e[(e.k_EProfileColorStyle_ShowcaseGradient_Right = 5)] =
              "k_EProfileColorStyle_ShowcaseGradient_Right");
        })(d || (d = {})),
        (function (e) {
          (e[(e.k_EAgreementType_Invalid = -1)] = "k_EAgreementType_Invalid"),
            (e[(e.k_EAgreementType_GlobalSSA = 0)] =
              "k_EAgreementType_GlobalSSA"),
            (e[(e.k_EAgreementType_ChinaSSA = 1)] =
              "k_EAgreementType_ChinaSSA");
        })(y || (y = {})),
        (function (e) {
          (e[(e.k_ENotificationSettingNotifyUseDefault = 0)] =
            "k_ENotificationSettingNotifyUseDefault"),
            (e[(e.k_ENotificationSettingAlways = 1)] =
              "k_ENotificationSettingAlways"),
            (e[(e.k_ENotificationSettingNever = 2)] =
              "k_ENotificationSettingNever");
        })(f || (f = {})),
        (function (e) {
          (e[(e.k_ETextFilterSettingSteamLabOptedOut = 0)] =
            "k_ETextFilterSettingSteamLabOptedOut"),
            (e[(e.k_ETextFilterSettingEnabled = 1)] =
              "k_ETextFilterSettingEnabled"),
            (e[(e.k_ETextFilterSettingEnabledAllowProfanity = 2)] =
              "k_ETextFilterSettingEnabledAllowProfanity"),
            (e[(e.k_ETextFilterSettingDisabled = 3)] =
              "k_ETextFilterSettingDisabled");
        })(B || (B = {})),
        (function (e) {
          (e[(e.k_ETextFilterOperationAddWords = 0)] =
            "k_ETextFilterOperationAddWords"),
            (e[(e.k_ETextFilterOperationRemoveWords = 1)] =
              "k_ETextFilterOperationRemoveWords"),
            (e[(e.k_ETextFilterOperationReplaceWords = 2)] =
              "k_ETextFilterOperationReplaceWords");
        })(p || (p = {}));
      class g extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.min_last_played || n.aR(g.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  min_last_played: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Request";
        }
      }
      class h extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.games || n.aR(h.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { games: { n: 1, c: w, r: !0, q: !0 } },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response";
        }
      }
      class w extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.appid || n.aR(w.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  appid: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  last_playtime: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  playtime_2weeks: {
                    n: 3,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  first_playtime: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  playtime_windows_forever: {
                    n: 6,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 7,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 8,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  first_windows_playtime: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  first_mac_playtime: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  first_linux_playtime: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  last_windows_playtime: {
                    n: 12,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  last_mac_playtime: {
                    n: 13,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  last_linux_playtime: {
                    n: 14,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  playtime_disconnected: {
                    n: 15,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response_Game";
        }
      }
      class z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.steamids || n.aR(z.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  steamids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint64String,
                    pbr: n.FE.readPackedUint64String,
                    bw: n.Xc.writeRepeatedUint64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Request";
        }
      }
      class v extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.accounts || n.aR(v.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: { accounts: { n: 1, c: M, r: !0, q: !0 } },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response";
        }
      }
      class M extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.public_data || n.aR(M.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  public_data: { n: 1, c: F },
                  private_data: { n: 2, c: S },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = n.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails";
        }
      }
      class F extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.steamid || n.aR(F.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  steamid: {
                    n: 1,
                    q: !0,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  visibility_state: {
                    n: 2,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  privacy_state: {
                    n: 3,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  profile_state: {
                    n: 4,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  ban_expires_time: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  account_flags: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  sha_digest_avatar: {
                    n: 9,
                    br: n.FE.readBytes,
                    bw: n.Xc.writeBytes,
                  },
                  persona_name: {
                    n: 10,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  profile_url: {
                    n: 11,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  content_country_restricted: {
                    n: 12,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData";
        }
      }
      class S extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.persona_state || n.aR(S.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  persona_state: {
                    n: 1,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  persona_state_flags: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_created: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  game_id: {
                    n: 4,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  game_server_steam_id: {
                    n: 5,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  game_server_ip_address: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  game_server_port: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  game_extra_info: {
                    n: 8,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  account_name: {
                    n: 9,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  lobby_steam_id: {
                    n: 10,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  rich_presence_kv: {
                    n: 11,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  broadcast_session_id: {
                    n: 12,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  watching_broadcast_accountid: {
                    n: 13,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  watching_broadcast_appid: {
                    n: 14,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  watching_broadcast_viewers: {
                    n: 15,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  watching_broadcast_title: {
                    n: 16,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  last_logoff_time: {
                    n: 17,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  last_seen_online: {
                    n: 18,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  game_os_type: {
                    n: 19,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  game_device_type: {
                    n: 20,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  game_device_name: {
                    n: 21,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData";
        }
      }
      class R extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new R();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMutualFriendsForIncomingInvites_Request";
        }
      }
      class O extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.steamid || n.aR(O.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  mutual_friend_account_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = n.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IncomingInviteMutualFriendList";
        }
      }
      class j extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.incoming_invite_mutual_friends_lists || n.aR(j.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  incoming_invite_mutual_friends_lists: {
                    n: 1,
                    c: O,
                    r: !0,
                    q: !0,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = n.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMutualFriendsForIncomingInvites_Response";
        }
      }
      class W extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.steamid || n.aR(W.M()),
            o.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  include_appinfo: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  include_played_free_games: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  appids_filter: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  include_free_sub: {
                    n: 5,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  skip_unvetted_apps: {
                    n: 6,
                    d: !0,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  language: { n: 7, br: n.FE.readString, bw: n.Xc.writeString },
                  include_extended_appinfo: {
                    n: 8,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = n.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Request";
        }
      }
      class T extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.game_count || n.aR(T.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  game_count: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  games: { n: 2, c: E, r: !0, q: !0 },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = n.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response";
        }
      }
      class E extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.appid || n.aR(E.M()),
            o.initialize(this, e, 0, -1, [18], null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  appid: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  name: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  playtime_2weeks: {
                    n: 3,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  img_icon_url: {
                    n: 5,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  has_community_visible_stats: {
                    n: 7,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  playtime_windows_forever: {
                    n: 8,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 9,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 10,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  rtime_last_played: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  capsule_filename: {
                    n: 12,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  sort_as: { n: 13, br: n.FE.readString, bw: n.Xc.writeString },
                  has_workshop: {
                    n: 14,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  has_market: { n: 15, br: n.FE.readBool, bw: n.Xc.writeBool },
                  has_dlc: { n: 16, br: n.FE.readBool, bw: n.Xc.writeBool },
                  has_leaderboards: {
                    n: 17,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  content_descriptorids: {
                    n: 18,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  playtime_disconnected: {
                    n: 19,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = n.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response_Game";
        }
      }
      class P extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.max_age_seconds || n.aR(P.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  max_age_seconds: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  ignore_appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = n.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(P.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayNext_Request";
        }
      }
      class C extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.last_update_time || n.aR(C.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  last_update_time: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = n.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayNext_Response";
        }
      }
      class k extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.play_sessions || n.aR(k.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: { play_sessions: { n: 3, c: I, r: !0, q: !0 } },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = n.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Request";
        }
      }
      class I extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.appid || n.aR(I.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  session_time_start: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  seconds: { n: 3, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  offline: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                  owner: { n: 5, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = n.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory";
        }
      }
      class U extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new U();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Response";
        }
      }
      class D extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.appid || n.aR(D.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = n.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Request";
        }
      }
      class A extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.player_level || n.aR(A.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  player_level: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  badges: { n: 2, c: x, r: !0, q: !0 },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = n.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(A.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Response";
        }
      }
      class x extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.level || n.aR(x.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  level: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  series: { n: 2, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  border_color: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = n.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Response_Badge";
        }
      }
      class X extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.communityitemid || n.aR(X.M()),
            o.initialize(this, e, 0, -1, [15], null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  image_small: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  image_large: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  name: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  item_title: {
                    n: 5,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_description: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  appid: { n: 7, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  item_type: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  item_class: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  movie_webm: {
                    n: 10,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  movie_mp4: {
                    n: 11,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  movie_webm_small: {
                    n: 13,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  movie_mp4_small: {
                    n: 14,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  equipped_flags: {
                    n: 12,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  profile_colors: { n: 15, c: N, r: !0, q: !0 },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = n.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(X.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileItem";
        }
      }
      class N extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.style_name || n.aR(N.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  style_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  color: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = n.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileItem_ProfileColor";
        }
      }
      class Z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.steamid || n.aR(Z.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = n.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileBackground_Request";
        }
      }
      class G extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.profile_background || n.aR(G.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: { profile_background: { n: 1, c: X } },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = n.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileBackground_Response";
        }
      }
      class q extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.communityitemid || n.aR(q.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = n.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(q.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Request";
        }
      }
      class L extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new L();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Response";
        }
      }
      class V extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.steamid || n.aR(V.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = n.Bh(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(V.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMiniProfileBackground_Request";
        }
      }
      class H extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.profile_background || n.aR(H.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: { profile_background: { n: 1, c: X } },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = n.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(H.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMiniProfileBackground_Response";
        }
      }
      class $ extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.communityitemid || n.aR($.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = n.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA($.M(), e, t);
        }
        static fromObject(e) {
          return n.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2($.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Request";
        }
      }
      class K extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new K();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Response";
        }
      }
      class Y extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.steamid || n.aR(Y.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = n.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAvatarFrame_Request";
        }
      }
      class J extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.avatar_frame || n.aR(J.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = { proto: J, fields: { avatar_frame: { n: 1, c: X } } }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = n.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(J.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAvatarFrame_Response";
        }
      }
      class Q extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.communityitemid || n.aR(Q.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = n.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Q.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Request";
        }
      }
      class ee extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ee();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Response";
        }
      }
      class te extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.steamid || n.aR(te.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = n.Bh(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(te.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAnimatedAvatar_Request";
        }
      }
      class re extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.avatar || n.aR(re.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = { proto: re, fields: { avatar: { n: 1, c: X } } }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = n.Bh(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(re.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAnimatedAvatar_Response";
        }
      }
      class ie extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.communityitemid || n.aR(ie.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = n.Bh(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ie.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Request";
        }
      }
      class ne extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ne();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Response";
        }
      }
      class ae extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.steamid || n.aR(ae.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = n.Bh(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ae.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetSteamDeckKeyboardSkin_Request";
        }
      }
      class se extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.steam_deck_keyboard_skin || n.aR(se.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: { steam_deck_keyboard_skin: { n: 1, c: X } },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = n.Bh(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(se.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetSteamDeckKeyboardSkin_Response";
        }
      }
      class oe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.communityitemid || n.aR(oe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = n.Bh(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(oe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Request";
        }
      }
      class ce extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ce();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Response";
        }
      }
      class le extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.language || n.aR(le.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  language: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  filters: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readEnum,
                    pbr: n.FE.readPackedEnum,
                    bw: n.Xc.writeRepeatedEnum,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = n.Bh(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(le.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsOwned_Request";
        }
      }
      class ue extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.profile_backgrounds || n.aR(ue.M()),
            o.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6, 7], null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  profile_backgrounds: { n: 1, c: X, r: !0, q: !0 },
                  mini_profile_backgrounds: { n: 2, c: X, r: !0, q: !0 },
                  avatar_frames: { n: 3, c: X, r: !0, q: !0 },
                  animated_avatars: { n: 4, c: X, r: !0, q: !0 },
                  profile_modifiers: { n: 5, c: X, r: !0, q: !0 },
                  steam_deck_keyboard_skins: { n: 6, c: X, r: !0, q: !0 },
                  steam_deck_startup_movies: { n: 7, c: X, r: !0, q: !0 },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = n.Bh(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ue.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsOwned_Response";
        }
      }
      class me extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.steamid || n.aR(me.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = n.Bh(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(me.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Request";
        }
      }
      class de extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.profile_background || n.aR(de.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  profile_background: { n: 1, c: X },
                  mini_profile_background: { n: 2, c: X },
                  avatar_frame: { n: 3, c: X },
                  animated_avatar: { n: 4, c: X },
                  profile_modifier: { n: 5, c: X },
                  steam_deck_keyboard_skin: { n: 6, c: X },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = n.Bh(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(de.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Response";
        }
      }
      class ye extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.communityitemid || n.aR(ye.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  flags: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = n.Bh(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ye.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetEquippedProfileItemFlags_Request";
        }
      }
      class fe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new fe();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetEquippedProfileItemFlags_Response";
        }
      }
      class Be extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Be();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Request";
        }
      }
      class pe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.emoticons || n.aR(pe.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: { emoticons: { n: 1, c: be, r: !0, q: !0 } },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = n.Bh(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(pe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response";
        }
      }
      class be extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.name || n.aR(be.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  name: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  count: { n: 2, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  time_last_used: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  use_count: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_received: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appid: { n: 6, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = n.Bh(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(be.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response_Emoticon";
        }
      }
      class _e extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.appid || n.aR(_e.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  status_text: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = n.Bh(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_e.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Request";
        }
      }
      class ge extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ge();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Response";
        }
      }
      class he extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.steamid || n.aR(he.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  postid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = n.Bh(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(he.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPostedStatus_Request";
        }
      }
      class we extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.accountid || n.aR(we.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  postid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  status_text: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  deleted: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                  appid: { n: 5, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = n.Bh(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(we.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPostedStatus_Response";
        }
      }
      class ze extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.postid || n.aR(ze.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  postid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = n.Bh(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ze.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_DeletePostedStatus_Request";
        }
      }
      class ve extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ve();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_DeletePostedStatus_Response";
        }
      }
      class Me extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.steamid || n.aR(Me.M()),
            o.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  max_achievements: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = n.Bh(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Me.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Request";
        }
      }
      class Fe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.games || n.aR(Fe.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: { games: { n: 1, c: Re, r: !0, q: !0 } },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = n.Bh(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Fe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response";
        }
      }
      class Se extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.statid || n.aR(Se.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  statid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  bit: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  name: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  desc: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  icon: { n: 5, br: n.FE.readString, bw: n.Xc.writeString },
                  icon_gray: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  hidden: { n: 7, br: n.FE.readBool, bw: n.Xc.writeBool },
                  player_percent_unlocked: {
                    n: 8,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = n.Bh(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Se.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response_Achievement";
        }
      }
      class Re extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.appid || n.aR(Re.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  total_achievements: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  achievements: { n: 3, c: Se, r: !0, q: !0 },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = n.Bh(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Re.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response_Game";
        }
      }
      class Oe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.steamid || n.aR(Oe.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  appids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = n.Bh(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Oe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Request";
        }
      }
      class je extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.achievement_progress || n.aR(je.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: { achievement_progress: { n: 1, c: We, r: !0, q: !0 } },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = n.Bh(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(je.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response";
        }
      }
      class We extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.appid || n.aR(We.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  unlocked: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  total: { n: 3, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  percentage: { n: 4, br: n.FE.readFloat, bw: n.Xc.writeFloat },
                  all_unlocked: { n: 5, br: n.FE.readBool, bw: n.Xc.writeBool },
                  cache_time: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = n.Bh(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(We.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response_AchievementProgress";
        }
      }
      class Te extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.appid || n.aR(Te.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = n.Bh(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Te.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Request";
        }
      }
      class Ee extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.achievements || n.aR(Ee.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: { achievements: { n: 1, c: Pe, r: !0, q: !0 } },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = n.Bh(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ee.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response";
        }
      }
      class Pe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.internal_name || n.aR(Pe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  internal_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  localized_name: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  localized_desc: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  icon: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  icon_gray: {
                    n: 5,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  hidden: { n: 6, br: n.FE.readBool, bw: n.Xc.writeBool },
                  player_percent_unlocked: {
                    n: 7,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = n.Bh(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Pe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response_Achievement";
        }
      }
      class Ce extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.steamid || n.aR(Ce.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = n.Bh(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ce.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFavoriteBadge_Request";
        }
      }
      class ke extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.has_favorite_badge || n.aR(ke.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  has_favorite_badge: {
                    n: 1,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  badgeid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  communityitemid: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  item_type: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  border_color: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appid: { n: 6, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  level: { n: 7, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = n.Bh(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ke.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFavoriteBadge_Response";
        }
      }
      class Ie extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.communityitemid || n.aR(Ie.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  badgeid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = n.Bh(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ie.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetFavoriteBadge_Request";
        }
      }
      class Ue extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ue();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetFavoriteBadge_Response";
        }
      }
      class De extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.slot || n.aR(De.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  slot: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  publishedfileid: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  item_assetid: {
                    n: 4,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  item_contextid: {
                    n: 5,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  notes: { n: 6, br: n.FE.readString, bw: n.Xc.writeString },
                  title: { n: 7, br: n.FE.readString, bw: n.Xc.writeString },
                  accountid: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  badgeid: { n: 9, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  border_color: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  item_classid: {
                    n: 11,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  item_instanceid: {
                    n: 12,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  ban_check_result: {
                    n: 13,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  replay_year: {
                    n: 14,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = n.Bh(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(De.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(De.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(De.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(De.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomizationSlot";
        }
      }
      class Ae extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.customization_type || n.aR(Ae.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  customization_type: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  large: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                  slots: { n: 3, c: De, r: !0, q: !0 },
                  active: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                  customization_style: {
                    n: 5,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  purchaseid: {
                    n: 6,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  level: { n: 7, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = n.Bh(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ae.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ae();
          return Ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomization";
        }
      }
      class xe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.theme_id || n.aR(xe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  theme_id: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  title: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = n.Bh(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(xe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileTheme";
        }
      }
      class Xe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xe.prototype.hide_profile_awards || n.aR(Xe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  hide_profile_awards: {
                    n: 1,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = n.Bh(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Xe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Xe();
          return Xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfilePreferences";
        }
      }
      class Ne extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.steamid || n.aR(Ne.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  include_inactive_customizations: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  include_purchased_customizations: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = n.Bh(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ne.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Request";
        }
      }
      class Ze extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ze.prototype.customizations || n.aR(Ze.M()),
            o.initialize(this, e, 0, -1, [1, 4], null);
        }
        static M() {
          return (
            Ze.sm_m ||
              (Ze.sm_m = {
                proto: Ze,
                fields: {
                  customizations: { n: 1, c: Ae, r: !0, q: !0 },
                  slots_available: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  profile_theme: { n: 3, c: xe },
                  purchased_customizations: { n: 4, c: Ge, r: !0, q: !0 },
                  profile_preferences: { n: 5, c: Xe },
                },
              }),
            Ze.sm_m
          );
        }
        static MBF() {
          return Ze.sm_mbf || (Ze.sm_mbf = n.Bh(Ze.M())), Ze.sm_mbf;
        }
        toObject(e = !1) {
          return Ze.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ze.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ze();
          return Ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response";
        }
      }
      class Ge extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.purchaseid || n.aR(Ge.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  level: { n: 3, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = n.Bh(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ge.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response_PurchasedCustomization";
        }
      }
      class qe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.steamid || n.aR(qe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = n.Bh(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(qe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Request";
        }
      }
      class Le extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.purchased_customizations || n.aR(Le.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  purchased_customizations: { n: 1, c: Ve, r: !0, q: !0 },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = n.Bh(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Le.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Le();
          return Le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Le.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response";
        }
      }
      class Ve extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ve.prototype.purchaseid || n.aR(Ve.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ve.sm_m ||
              (Ve.sm_m = {
                proto: Ve,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                },
              }),
            Ve.sm_m
          );
        }
        static MBF() {
          return Ve.sm_mbf || (Ve.sm_mbf = n.Bh(Ve.M())), Ve.sm_mbf;
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ve.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ve();
          return Ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class He extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            He.prototype.steamid || n.aR(He.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            He.sm_m
          );
        }
        static MBF() {
          return He.sm_mbf || (He.sm_mbf = n.Bh(He.M())), He.sm_mbf;
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(He.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(He.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new He();
          return He.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(He.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(He.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request";
        }
      }
      class $e extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $e.prototype.purchased_customizations || n.aR($e.M()),
            o.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: {
                  purchased_customizations: { n: 1, c: Ke, r: !0, q: !0 },
                  upgraded_customizations: { n: 2, c: Ye, r: !0, q: !0 },
                },
              }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = n.Bh($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA($e.M(), e, t);
        }
        static fromObject(e) {
          return n.aD($e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new $e();
          return $e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F($e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2($e.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response";
        }
      }
      class Ke extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ke.prototype.customization_type || n.aR(Ke.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ke.sm_m ||
              (Ke.sm_m = {
                proto: Ke,
                fields: {
                  customization_type: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  count: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = n.Bh(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ke.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ke();
          return Ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class Ye extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ye.prototype.customization_type || n.aR(Ye.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ye.sm_m ||
              (Ye.sm_m = {
                proto: Ye,
                fields: {
                  customization_type: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  level: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            Ye.sm_m
          );
        }
        static MBF() {
          return Ye.sm_mbf || (Ye.sm_mbf = n.Bh(Ye.M())), Ye.sm_mbf;
        }
        toObject(e = !1) {
          return Ye.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ye.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ye();
          return Ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization";
        }
      }
      class Je extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Je();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Je();
          return Je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileThemesAvailable_Request";
        }
      }
      class Qe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qe.prototype.profile_themes || n.aR(Qe.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Qe.sm_m ||
              (Qe.sm_m = {
                proto: Qe,
                fields: { profile_themes: { n: 1, c: xe, r: !0, q: !0 } },
              }),
            Qe.sm_m
          );
        }
        static MBF() {
          return Qe.sm_mbf || (Qe.sm_mbf = n.Bh(Qe.M())), Qe.sm_mbf;
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Qe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Qe();
          return Qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileThemesAvailable_Response";
        }
      }
      class et extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            et.prototype.theme_id || n.aR(et.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            et.sm_m ||
              (et.sm_m = {
                proto: et,
                fields: {
                  theme_id: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            et.sm_m
          );
        }
        static MBF() {
          return et.sm_mbf || (et.sm_mbf = n.Bh(et.M())), et.sm_mbf;
        }
        toObject(e = !1) {
          return et.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(et.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(et.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new et();
          return et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(et.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(et.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileTheme_Request";
        }
      }
      class tt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return tt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new tt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new tt();
          return tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileTheme_Response";
        }
      }
      class rt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            rt.prototype.profile_preferences || n.aR(rt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            rt.sm_m ||
              (rt.sm_m = {
                proto: rt,
                fields: { profile_preferences: { n: 1, c: Xe } },
              }),
            rt.sm_m
          );
        }
        static MBF() {
          return rt.sm_mbf || (rt.sm_mbf = n.Bh(rt.M())), rt.sm_mbf;
        }
        toObject(e = !1) {
          return rt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(rt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(rt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new rt();
          return rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfilePreferences_Request";
        }
      }
      class it extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return it.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new it();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new it();
          return it.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return it.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfilePreferences_Response";
        }
      }
      class nt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            nt.prototype.appid || n.aR(nt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            nt.sm_m ||
              (nt.sm_m = {
                proto: nt,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            nt.sm_m
          );
        }
        static MBF() {
          return nt.sm_mbf || (nt.sm_mbf = n.Bh(nt.M())), nt.sm_mbf;
        }
        toObject(e = !1) {
          return nt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(nt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(nt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new nt();
          return nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(nt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(nt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Request";
        }
      }
      class at extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            at.prototype.your_info || n.aR(at.M()),
            o.initialize(this, e, 0, -1, [2, 3, 4, 5, 6], null);
        }
        static M() {
          return (
            at.sm_m ||
              (at.sm_m = {
                proto: at,
                fields: {
                  your_info: { n: 1, c: ot },
                  in_game: { n: 2, c: st, r: !0, q: !0 },
                  played_recently: { n: 3, c: st, r: !0, q: !0 },
                  played_ever: { n: 4, c: st, r: !0, q: !0 },
                  owns: { n: 5, c: st, r: !0, q: !0 },
                  in_wishlist: { n: 6, c: st, r: !0, q: !0 },
                },
              }),
            at.sm_m
          );
        }
        static MBF() {
          return at.sm_mbf || (at.sm_mbf = n.Bh(at.M())), at.sm_mbf;
        }
        toObject(e = !1) {
          return at.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(at.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(at.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new at();
          return at.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(at.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(at.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return at.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response";
        }
      }
      class st extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            st.prototype.steamid || n.aR(st.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            st.sm_m ||
              (st.sm_m = {
                proto: st,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            st.sm_m
          );
        }
        static MBF() {
          return st.sm_mbf || (st.sm_mbf = n.Bh(st.M())), st.sm_mbf;
        }
        toObject(e = !1) {
          return st.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(st.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(st.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new st();
          return st.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(st.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(st.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return st.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo";
        }
      }
      class ot extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ot.prototype.steamid || n.aR(ot.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ot.sm_m ||
              (ot.sm_m = {
                proto: ot,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  in_wishlist: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                  owned: { n: 5, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            ot.sm_m
          );
        }
        static MBF() {
          return ot.sm_mbf || (ot.sm_mbf = n.Bh(ot.M())), ot.sm_mbf;
        }
        toObject(e = !1) {
          return ot.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ot.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ot.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ot();
          return ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ot.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ot.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo";
        }
      }
      class ct extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ct.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ct();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ct();
          return ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Request";
        }
      }
      class lt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            lt.prototype.time_ssa_accepted || n.aR(lt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            lt.sm_m ||
              (lt.sm_m = {
                proto: lt,
                fields: {
                  time_ssa_accepted: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_ssa_updated: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_chinassa_accepted: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            lt.sm_m
          );
        }
        static MBF() {
          return lt.sm_mbf || (lt.sm_mbf = n.Bh(lt.M())), lt.sm_mbf;
        }
        toObject(e = !1) {
          return lt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(lt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(lt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new lt();
          return lt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(lt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(lt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return lt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Response";
        }
      }
      class ut extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ut.prototype.agreement_type || n.aR(ut.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ut.sm_m ||
              (ut.sm_m = {
                proto: ut,
                fields: {
                  agreement_type: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  time_signed_utc: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            ut.sm_m
          );
        }
        static MBF() {
          return ut.sm_mbf || (ut.sm_mbf = n.Bh(ut.M())), ut.sm_mbf;
        }
        toObject(e = !1) {
          return ut.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ut.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ut.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ut();
          return ut.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ut.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ut.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ut.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AcceptSSA_Request";
        }
      }
      class mt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return mt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new mt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new mt();
          return mt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return mt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AcceptSSA_Response";
        }
      }
      class dt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return dt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new dt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new dt();
          return dt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return dt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Request";
        }
      }
      class yt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            yt.prototype.nicknames || n.aR(yt.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            yt.sm_m ||
              (yt.sm_m = {
                proto: yt,
                fields: { nicknames: { n: 1, c: ft, r: !0, q: !0 } },
              }),
            yt.sm_m
          );
        }
        static MBF() {
          return yt.sm_mbf || (yt.sm_mbf = n.Bh(yt.M())), yt.sm_mbf;
        }
        toObject(e = !1) {
          return yt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(yt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(yt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new yt();
          return yt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(yt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(yt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return yt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response";
        }
      }
      class ft extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ft.prototype.accountid || n.aR(ft.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ft.sm_m ||
              (ft.sm_m = {
                proto: ft,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readFixed32,
                    bw: n.Xc.writeFixed32,
                  },
                  nickname: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            ft.sm_m
          );
        }
        static MBF() {
          return ft.sm_mbf || (ft.sm_mbf = n.Bh(ft.M())), ft.sm_mbf;
        }
        toObject(e = !1) {
          return ft.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ft.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ft.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ft();
          return ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ft.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ft.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response_PlayerNickname";
        }
      }
      class Bt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Bt.prototype.accountid || n.aR(Bt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Bt.sm_m ||
              (Bt.sm_m = {
                proto: Bt,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readFixed32,
                    bw: n.Xc.writeFixed32,
                  },
                  nickname: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  notifications_showingame: {
                    n: 3,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  notifications_showonline: {
                    n: 4,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  notifications_showmessages: {
                    n: 5,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  sounds_showingame: {
                    n: 6,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  sounds_showonline: {
                    n: 7,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  sounds_showmessages: {
                    n: 8,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  notifications_sendmobile: {
                    n: 9,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                },
              }),
            Bt.sm_m
          );
        }
        static MBF() {
          return Bt.sm_mbf || (Bt.sm_mbf = n.Bh(Bt.M())), Bt.sm_mbf;
        }
        toObject(e = !1) {
          return Bt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Bt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Bt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Bt();
          return Bt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Bt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Bt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Bt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PerFriendPreferences";
        }
      }
      class pt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return pt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new pt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new pt();
          return pt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return pt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Request";
        }
      }
      class bt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            bt.prototype.preferences || n.aR(bt.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            bt.sm_m ||
              (bt.sm_m = {
                proto: bt,
                fields: { preferences: { n: 1, c: Bt, r: !0, q: !0 } },
              }),
            bt.sm_m
          );
        }
        static MBF() {
          return bt.sm_mbf || (bt.sm_mbf = n.Bh(bt.M())), bt.sm_mbf;
        }
        toObject(e = !1) {
          return bt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(bt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(bt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new bt();
          return bt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(bt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(bt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return bt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Response";
        }
      }
      class _t extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _t.prototype.preferences || n.aR(_t.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _t.sm_m ||
              (_t.sm_m = {
                proto: _t,
                fields: { preferences: { n: 1, c: Bt } },
              }),
            _t.sm_m
          );
        }
        static MBF() {
          return _t.sm_mbf || (_t.sm_mbf = n.Bh(_t.M())), _t.sm_mbf;
        }
        toObject(e = !1) {
          return _t.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_t.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_t.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _t();
          return _t.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_t.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _t.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_t.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _t.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetPerFriendPreferences_Request";
        }
      }
      class gt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return gt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new gt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new gt();
          return gt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return gt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetPerFriendPreferences_Response";
        }
      }
      class ht extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ht.prototype.steamid || n.aR(ht.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ht.sm_m ||
              (ht.sm_m = {
                proto: ht,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            ht.sm_m
          );
        }
        static MBF() {
          return ht.sm_mbf || (ht.sm_mbf = n.Bh(ht.M())), ht.sm_mbf;
        }
        toObject(e = !1) {
          return ht.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ht.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ht.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ht();
          return ht.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ht.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ht.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ht.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AddFriend_Request";
        }
      }
      class wt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            wt.prototype.invite_sent || n.aR(wt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            wt.sm_m ||
              (wt.sm_m = {
                proto: wt,
                fields: {
                  invite_sent: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  friend_relationship: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  result: { n: 3, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                },
              }),
            wt.sm_m
          );
        }
        static MBF() {
          return wt.sm_mbf || (wt.sm_mbf = n.Bh(wt.M())), wt.sm_mbf;
        }
        toObject(e = !1) {
          return wt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(wt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(wt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new wt();
          return wt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(wt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(wt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return wt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AddFriend_Response";
        }
      }
      class zt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            zt.prototype.steamid || n.aR(zt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            zt.sm_m ||
              (zt.sm_m = {
                proto: zt,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            zt.sm_m
          );
        }
        static MBF() {
          return zt.sm_mbf || (zt.sm_mbf = n.Bh(zt.M())), zt.sm_mbf;
        }
        toObject(e = !1) {
          return zt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(zt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(zt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new zt();
          return zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(zt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(zt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RemoveFriend_Request";
        }
      }
      class vt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            vt.prototype.friend_relationship || n.aR(vt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            vt.sm_m ||
              (vt.sm_m = {
                proto: vt,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            vt.sm_m
          );
        }
        static MBF() {
          return vt.sm_mbf || (vt.sm_mbf = n.Bh(vt.M())), vt.sm_mbf;
        }
        toObject(e = !1) {
          return vt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(vt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(vt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new vt();
          return vt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(vt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(vt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return vt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RemoveFriend_Response";
        }
      }
      class Mt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mt.prototype.steamid || n.aR(Mt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Mt.sm_m ||
              (Mt.sm_m = {
                proto: Mt,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  unignore: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            Mt.sm_m
          );
        }
        static MBF() {
          return Mt.sm_mbf || (Mt.sm_mbf = n.Bh(Mt.M())), Mt.sm_mbf;
        }
        toObject(e = !1) {
          return Mt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Mt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Mt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Mt();
          return Mt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Mt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Mt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IgnoreFriend_Request";
        }
      }
      class Ft extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ft.prototype.friend_relationship || n.aR(Ft.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ft.sm_m ||
              (Ft.sm_m = {
                proto: Ft,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            Ft.sm_m
          );
        }
        static MBF() {
          return Ft.sm_mbf || (Ft.sm_mbf = n.Bh(Ft.M())), Ft.sm_mbf;
        }
        toObject(e = !1) {
          return Ft.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ft.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ft.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ft();
          return Ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ft.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ft.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IgnoreFriend_Response";
        }
      }
      class St extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            St.prototype.parenthesize_nicknames || n.aR(St.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            St.sm_m ||
              (St.sm_m = {
                proto: St,
                fields: {
                  parenthesize_nicknames: {
                    n: 4,
                    d: !1,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  text_filter_setting: {
                    n: 5,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  text_filter_ignore_friends: {
                    n: 6,
                    d: !0,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  text_filter_words_revision: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  timestamp_updated: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            St.sm_m
          );
        }
        static MBF() {
          return St.sm_mbf || (St.sm_mbf = n.Bh(St.M())), St.sm_mbf;
        }
        toObject(e = !1) {
          return St.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(St.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(St.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new St();
          return St.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(St.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(St.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return St.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferences";
        }
      }
      class Rt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Rt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Rt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Rt();
          return Rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Request";
        }
      }
      class Ot extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ot.prototype.preferences || n.aR(Ot.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ot.sm_m ||
              (Ot.sm_m = {
                proto: Ot,
                fields: {
                  preferences: { n: 1, c: St },
                  content_descriptor_preferences: { n: 2, c: s.cF },
                },
              }),
            Ot.sm_m
          );
        }
        static MBF() {
          return Ot.sm_mbf || (Ot.sm_mbf = n.Bh(Ot.M())), Ot.sm_mbf;
        }
        toObject(e = !1) {
          return Ot.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ot.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ot.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ot();
          return Ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ot.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ot.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Response";
        }
      }
      class jt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            jt.prototype.preferences || n.aR(jt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            jt.sm_m ||
              (jt.sm_m = {
                proto: jt,
                fields: { preferences: { n: 1, c: St } },
              }),
            jt.sm_m
          );
        }
        static MBF() {
          return jt.sm_mbf || (jt.sm_mbf = n.Bh(jt.M())), jt.sm_mbf;
        }
        toObject(e = !1) {
          return jt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(jt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(jt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new jt();
          return jt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(jt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(jt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return jt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetCommunityPreferences_Request";
        }
      }
      class Wt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Wt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Wt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Wt();
          return Wt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Wt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetCommunityPreferences_Response";
        }
      }
      class Tt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tt.prototype.text_filter_custom_banned_words || n.aR(Tt.M()),
            o.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            Tt.sm_m ||
              (Tt.sm_m = {
                proto: Tt,
                fields: {
                  text_filter_custom_banned_words: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeRepeatedString,
                  },
                  text_filter_custom_clean_words: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeRepeatedString,
                  },
                  text_filter_words_revision: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            Tt.sm_m
          );
        }
        static MBF() {
          return Tt.sm_mbf || (Tt.sm_mbf = n.Bh(Tt.M())), Tt.sm_mbf;
        }
        toObject(e = !1) {
          return Tt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Tt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Tt();
          return Tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWords";
        }
      }
      class Et extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Et.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Et();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Et();
          return Et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Request";
        }
      }
      class Pt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pt.prototype.words || n.aR(Pt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Pt.sm_m ||
              (Pt.sm_m = { proto: Pt, fields: { words: { n: 1, c: Tt } } }),
            Pt.sm_m
          );
        }
        static MBF() {
          return Pt.sm_mbf || (Pt.sm_mbf = n.Bh(Pt.M())), Pt.sm_mbf;
        }
        toObject(e = !1) {
          return Pt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Pt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Pt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Pt();
          return Pt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Pt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Pt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Pt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Response";
        }
      }
      class Ct extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ct.prototype.language || n.aR(Ct.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ct.sm_m ||
              (Ct.sm_m = {
                proto: Ct,
                fields: {
                  language: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                },
              }),
            Ct.sm_m
          );
        }
        static MBF() {
          return Ct.sm_mbf || (Ct.sm_mbf = n.Bh(Ct.M())), Ct.sm_mbf;
        }
        toObject(e = !1) {
          return Ct.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ct.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ct.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ct();
          return Ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ct.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ct.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNewSteamAnnouncementState_Request";
        }
      }
      class kt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            kt.prototype.state || n.aR(kt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            kt.sm_m ||
              (kt.sm_m = {
                proto: kt,
                fields: {
                  state: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  announcement_headline: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            kt.sm_m
          );
        }
        static MBF() {
          return kt.sm_mbf || (kt.sm_mbf = n.Bh(kt.M())), kt.sm_mbf;
        }
        toObject(e = !1) {
          return kt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(kt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(kt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new kt();
          return kt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(kt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(kt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return kt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNewSteamAnnouncementState_Response";
        }
      }
      class It extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            It.prototype.announcement_gid || n.aR(It.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            It.sm_m ||
              (It.sm_m = {
                proto: It,
                fields: {
                  announcement_gid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  time_posted: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            It.sm_m
          );
        }
        static MBF() {
          return It.sm_mbf || (It.sm_mbf = n.Bh(It.M())), It.sm_mbf;
        }
        toObject(e = !1) {
          return It.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(It.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(It.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new It();
          return It.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(It.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(It.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return It.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_UpdateSteamAnnouncementLastRead_Request";
        }
      }
      class Ut extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ut.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ut();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ut();
          return Ut.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_UpdateSteamAnnouncementLastRead_Response";
        }
      }
      class Dt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Dt.prototype.privacy_state || n.aR(Dt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Dt.sm_m ||
              (Dt.sm_m = {
                proto: Dt,
                fields: {
                  privacy_state: {
                    n: 1,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  privacy_state_inventory: {
                    n: 2,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  privacy_state_gifts: {
                    n: 3,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  privacy_state_ownedgames: {
                    n: 4,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  privacy_state_playtime: {
                    n: 5,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  privacy_state_friendslist: {
                    n: 6,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                },
              }),
            Dt.sm_m
          );
        }
        static MBF() {
          return Dt.sm_mbf || (Dt.sm_mbf = n.Bh(Dt.M())), Dt.sm_mbf;
        }
        toObject(e = !1) {
          return Dt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Dt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Dt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Dt();
          return Dt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Dt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Dt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Dt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPrivacySettings";
        }
      }
      class At extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return At.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new At();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new At();
          return At.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return At.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return At.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPrivacySettings_Request";
        }
      }
      class xt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xt.prototype.privacy_settings || n.aR(xt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            xt.sm_m ||
              (xt.sm_m = {
                proto: xt,
                fields: { privacy_settings: { n: 1, c: Dt } },
              }),
            xt.sm_m
          );
        }
        static MBF() {
          return xt.sm_mbf || (xt.sm_mbf = n.Bh(xt.M())), xt.sm_mbf;
        }
        toObject(e = !1) {
          return xt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(xt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(xt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new xt();
          return xt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(xt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(xt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return xt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPrivacySettings_Response";
        }
      }
      class Xt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xt.prototype.appid || n.aR(Xt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Xt.sm_m ||
              (Xt.sm_m = {
                proto: Xt,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            Xt.sm_m
          );
        }
        static MBF() {
          return Xt.sm_mbf || (Xt.sm_mbf = n.Bh(Xt.M())), Xt.sm_mbf;
        }
        toObject(e = !1) {
          return Xt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Xt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Xt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Xt();
          return Xt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Xt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Xt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Xt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetDurationControl_Request";
        }
      }
      class Nt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nt.prototype.is_enabled || n.aR(Nt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Nt.sm_m ||
              (Nt.sm_m = {
                proto: Nt,
                fields: {
                  is_enabled: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  seconds: { n: 2, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  seconds_today: {
                    n: 3,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  is_steamchina_account: {
                    n: 4,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  is_age_verified: {
                    n: 5,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  seconds_allowed_today: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  age_verification_pending: {
                    n: 7,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  block_minors: { n: 8, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            Nt.sm_m
          );
        }
        static MBF() {
          return Nt.sm_mbf || (Nt.sm_mbf = n.Bh(Nt.M())), Nt.sm_mbf;
        }
        toObject(e = !1) {
          return Nt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Nt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Nt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Nt();
          return Nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Nt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Nt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetDurationControl_Response";
        }
      }
      class Zt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Zt.prototype.games || n.aR(Zt.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Zt.sm_m ||
              (Zt.sm_m = {
                proto: Zt,
                fields: { games: { n: 1, c: w, r: !0, q: !0 } },
              }),
            Zt.sm_m
          );
        }
        static MBF() {
          return Zt.sm_mbf || (Zt.sm_mbf = n.Bh(Zt.M())), Zt.sm_mbf;
        }
        toObject(e = !1) {
          return Zt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Zt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Zt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Zt();
          return Zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Zt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Zt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_LastPlayedTimes_Notification";
        }
      }
      class Gt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Gt.prototype.accountid || n.aR(Gt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Gt.sm_m ||
              (Gt.sm_m = {
                proto: Gt,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readFixed32,
                    bw: n.Xc.writeFixed32,
                  },
                  nickname: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  is_echo_to_self: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            Gt.sm_m
          );
        }
        static MBF() {
          return Gt.sm_mbf || (Gt.sm_mbf = n.Bh(Gt.M())), Gt.sm_mbf;
        }
        toObject(e = !1) {
          return Gt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Gt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Gt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Gt();
          return Gt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Gt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Gt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Gt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendNicknameChanged_Notification";
        }
      }
      class qt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qt.prototype.accountid || n.aR(qt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            qt.sm_m ||
              (qt.sm_m = {
                proto: qt,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readFixed32,
                    bw: n.Xc.writeFixed32,
                  },
                },
              }),
            qt.sm_m
          );
        }
        static MBF() {
          return qt.sm_mbf || (qt.sm_mbf = n.Bh(qt.M())), qt.sm_mbf;
        }
        toObject(e = !1) {
          return qt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(qt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(qt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new qt();
          return qt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(qt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return qt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(qt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return qt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendEquippedProfileItemsChanged_Notification";
        }
      }
      class Lt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Lt.prototype.state || n.aR(Lt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Lt.sm_m ||
              (Lt.sm_m = {
                proto: Lt,
                fields: {
                  state: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  announcement_headline: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            Lt.sm_m
          );
        }
        static MBF() {
          return Lt.sm_mbf || (Lt.sm_mbf = n.Bh(Lt.M())), Lt.sm_mbf;
        }
        toObject(e = !1) {
          return Lt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Lt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Lt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Lt();
          return Lt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Lt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Lt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Lt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_NewSteamAnnouncementState_Notification";
        }
      }
      class Vt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Vt.prototype.preferences || n.aR(Vt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Vt.sm_m ||
              (Vt.sm_m = {
                proto: Vt,
                fields: {
                  preferences: { n: 1, c: St },
                  content_descriptor_preferences: { n: 2, c: s.cF },
                },
              }),
            Vt.sm_m
          );
        }
        static MBF() {
          return Vt.sm_mbf || (Vt.sm_mbf = n.Bh(Vt.M())), Vt.sm_mbf;
        }
        toObject(e = !1) {
          return Vt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Vt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Vt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Vt();
          return Vt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Vt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Vt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Vt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferencesChanged_Notification";
        }
      }
      class Ht extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ht.prototype.words || n.aR(Ht.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ht.sm_m ||
              (Ht.sm_m = { proto: Ht, fields: { words: { n: 1, c: Tt } } }),
            Ht.sm_m
          );
        }
        static MBF() {
          return Ht.sm_mbf || (Ht.sm_mbf = n.Bh(Ht.M())), Ht.sm_mbf;
        }
        toObject(e = !1) {
          return Ht.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ht.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ht.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ht();
          return Ht.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ht.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ht.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ht.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWordsChanged_Notification";
        }
      }
      class $t extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $t.prototype.accountid || n.aR($t.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $t.sm_m ||
              ($t.sm_m = {
                proto: $t,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readFixed32,
                    bw: n.Xc.writeFixed32,
                  },
                  preferences: { n: 2, c: Bt },
                },
              }),
            $t.sm_m
          );
        }
        static MBF() {
          return $t.sm_mbf || ($t.sm_mbf = n.Bh($t.M())), $t.sm_mbf;
        }
        toObject(e = !1) {
          return $t.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA($t.M(), e, t);
        }
        static fromObject(e) {
          return n.aD($t.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new $t();
          return $t.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F($t.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $t.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2($t.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $t.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PerFriendPreferencesChanged_Notification";
        }
      }
      class Kt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Kt.prototype.privacy_settings || n.aR(Kt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Kt.sm_m ||
              (Kt.sm_m = {
                proto: Kt,
                fields: { privacy_settings: { n: 1, c: Dt } },
              }),
            Kt.sm_m
          );
        }
        static MBF() {
          return Kt.sm_mbf || (Kt.sm_mbf = n.Bh(Kt.M())), Kt.sm_mbf;
        }
        toObject(e = !1) {
          return Kt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Kt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Kt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Kt();
          return Kt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Kt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Kt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Kt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PrivacySettingsChanged_Notification";
        }
      }
      !(function (e) {
        (e.GetPlayerLinkDetails = function (e, t) {
          return e.SendMsg(
            "Player.GetPlayerLinkDetails#1",
            (0, a.MD)(z, t),
            v,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetMutualFriendsForIncomingInvites = function (e, t) {
            return e.SendMsg(
              "Player.GetMutualFriendsForIncomingInvites#1",
              (0, a.MD)(R, t),
              j,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetOwnedGames = function (e, t) {
            return e.SendMsg("Player.GetOwnedGames#1", (0, a.MD)(W, t), T, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetPlayNext = function (e, t) {
            return e.SendMsg("Player.GetPlayNext#1", (0, a.MD)(P, t), C, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFriendsGameplayInfo = function (e, t) {
            return e.SendMsg(
              "Player.GetFriendsGameplayInfo#1",
              (0, a.MD)(nt, t),
              at,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetGameBadgeLevels = function (e, t) {
            return e.SendMsg(
              "Player.GetGameBadgeLevels#1",
              (0, a.MD)(D, t),
              A,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetProfileBackground = function (e, t) {
            return e.SendMsg(
              "Player.GetProfileBackground#1",
              (0, a.MD)(Z, t),
              G,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetProfileBackground = function (e, t) {
            return e.SendMsg(
              "Player.SetProfileBackground#1",
              (0, a.MD)(q, t),
              L,
              { ePrivilege: 1 },
            );
          }),
          (e.GetMiniProfileBackground = function (e, t) {
            return e.SendMsg(
              "Player.GetMiniProfileBackground#1",
              (0, a.MD)(V, t),
              H,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetMiniProfileBackground = function (e, t) {
            return e.SendMsg(
              "Player.SetMiniProfileBackground#1",
              (0, a.MD)($, t),
              K,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAvatarFrame = function (e, t) {
            return e.SendMsg("Player.GetAvatarFrame#1", (0, a.MD)(Y, t), J, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetAvatarFrame = function (e, t) {
            return e.SendMsg("Player.SetAvatarFrame#1", (0, a.MD)(Q, t), ee, {
              ePrivilege: 1,
            });
          }),
          (e.GetAnimatedAvatar = function (e, t) {
            return e.SendMsg(
              "Player.GetAnimatedAvatar#1",
              (0, a.MD)(te, t),
              re,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetAnimatedAvatar = function (e, t) {
            return e.SendMsg(
              "Player.SetAnimatedAvatar#1",
              (0, a.MD)(ie, t),
              ne,
              { ePrivilege: 1 },
            );
          }),
          (e.GetSteamDeckKeyboardSkin = function (e, t) {
            return e.SendMsg(
              "Player.GetSteamDeckKeyboardSkin#1",
              (0, a.MD)(ae, t),
              se,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetSteamDeckKeyboardSkin = function (e, t) {
            return e.SendMsg(
              "Player.SetSteamDeckKeyboardSkin#1",
              (0, a.MD)(oe, t),
              ce,
              { ePrivilege: 1 },
            );
          }),
          (e.GetProfileItemsOwned = function (e, t) {
            return e.SendMsg(
              "Player.GetProfileItemsOwned#1",
              (0, a.MD)(le, t),
              ue,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetProfileItemsEquipped = function (e, t) {
            return e.SendMsg(
              "Player.GetProfileItemsEquipped#1",
              (0, a.MD)(me, t),
              de,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetEquippedProfileItemFlags = function (e, t) {
            return e.SendMsg(
              "Player.SetEquippedProfileItemFlags#1",
              (0, a.MD)(ye, t),
              fe,
              { ePrivilege: 1 },
            );
          }),
          (e.GetEmoticonList = function (e, t) {
            return e.SendMsg("Player.GetEmoticonList#1", (0, a.MD)(Be, t), pe, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetTopAchievementsForGames = function (e, t) {
            return e.SendMsg(
              "Player.GetTopAchievementsForGames#1",
              (0, a.MD)(Me, t),
              Fe,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetAchievementsProgress = function (e, t) {
            return e.SendMsg(
              "Player.GetAchievementsProgress#1",
              (0, a.MD)(Oe, t),
              je,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetGameAchievements = function (e, t) {
            return e.SendMsg(
              "Player.GetGameAchievements#1",
              (0, a.MD)(Te, t),
              Ee,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetFavoriteBadge = function (e, t) {
            return e.SendMsg(
              "Player.GetFavoriteBadge#1",
              (0, a.MD)(Ce, t),
              ke,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetFavoriteBadge = function (e, t) {
            return e.SendMsg(
              "Player.SetFavoriteBadge#1",
              (0, a.MD)(Ie, t),
              Ue,
              { ePrivilege: 1 },
            );
          }),
          (e.GetProfileCustomization = function (e, t) {
            return e.SendMsg(
              "Player.GetProfileCustomization#1",
              (0, a.MD)(Ne, t),
              Ze,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPurchasedProfileCustomizations = function (e, t) {
            return e.SendMsg(
              "Player.GetPurchasedProfileCustomizations#1",
              (0, a.MD)(qe, t),
              Le,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPurchasedAndUpgradedProfileCustomizations = function (e, t) {
            return e.SendMsg(
              "Player.GetPurchasedAndUpgradedProfileCustomizations#1",
              (0, a.MD)(He, t),
              $e,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetProfileThemesAvailable = function (e, t) {
            return e.SendMsg(
              "Player.GetProfileThemesAvailable#1",
              (0, a.MD)(Je, t),
              Qe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetProfileTheme = function (e, t) {
            return e.SendMsg("Player.SetProfileTheme#1", (0, a.MD)(et, t), tt, {
              ePrivilege: 1,
            });
          }),
          (e.SetProfilePreferences = function (e, t) {
            return e.SendMsg(
              "Player.SetProfilePreferences#1",
              (0, a.MD)(rt, t),
              it,
              { ePrivilege: 1 },
            );
          }),
          (e.PostStatusToFriends = function (e, t) {
            return e.SendMsg(
              "Player.PostStatusToFriends#1",
              (0, a.MD)(_e, t),
              ge,
              { ePrivilege: 3 },
            );
          }),
          (e.GetPostedStatus = function (e, t) {
            return e.SendMsg("Player.GetPostedStatus#1", (0, a.MD)(he, t), we, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.DeletePostedStatus = function (e, t) {
            return e.SendMsg(
              "Player.DeletePostedStatus#1",
              (0, a.MD)(ze, t),
              ve,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetLastPlayedTimes = function (e, t) {
            return e.SendMsg(
              "Player.ClientGetLastPlayedTimes#1",
              (0, a.MD)(g, t),
              h,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetTimeSSAAccepted = function (e, t) {
            return e.SendMsg(
              "Player.GetTimeSSAAccepted#1",
              (0, a.MD)(ct, t),
              lt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.AcceptSSA = function (e, t) {
            return e.SendMsg("Player.AcceptSSA#1", (0, a.MD)(ut, t), mt, {
              ePrivilege: 1,
            });
          }),
          (e.GetNicknameList = function (e, t) {
            return e.SendMsg("Player.GetNicknameList#1", (0, a.MD)(dt, t), yt, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetPerFriendPreferences = function (e, t) {
            return e.SendMsg(
              "Player.GetPerFriendPreferences#1",
              (0, a.MD)(pt, t),
              bt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetPerFriendPreferences = function (e, t) {
            return e.SendMsg(
              "Player.SetPerFriendPreferences#1",
              (0, a.MD)(_t, t),
              gt,
              { ePrivilege: 1 },
            );
          }),
          (e.AddFriend = function (e, t) {
            return e.SendMsg("Player.AddFriend#1", (0, a.MD)(ht, t), wt, {
              ePrivilege: 1,
            });
          }),
          (e.RemoveFriend = function (e, t) {
            return e.SendMsg("Player.RemoveFriend#1", (0, a.MD)(zt, t), vt, {
              ePrivilege: 1,
            });
          }),
          (e.IgnoreFriend = function (e, t) {
            return e.SendMsg("Player.IgnoreFriend#1", (0, a.MD)(Mt, t), Ft, {
              ePrivilege: 1,
            });
          }),
          (e.GetCommunityPreferences = function (e, t) {
            return e.SendMsg(
              "Player.GetCommunityPreferences#1",
              (0, a.MD)(Rt, t),
              Ot,
              { ePrivilege: 1 },
            );
          }),
          (e.SetCommunityPreferences = function (e, t) {
            return e.SendMsg(
              "Player.SetCommunityPreferences#1",
              (0, a.MD)(jt, t),
              Wt,
              { ePrivilege: 1 },
            );
          }),
          (e.GetTextFilterWords = function (e, t) {
            return e.SendMsg(
              "Player.GetTextFilterWords#1",
              (0, a.MD)(Et, t),
              Pt,
              { ePrivilege: 1 },
            );
          }),
          (e.GetNewSteamAnnouncementState = function (e, t) {
            return e.SendMsg(
              "Player.GetNewSteamAnnouncementState#1",
              (0, a.MD)(Ct, t),
              kt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.UpdateSteamAnnouncementLastRead = function (e, t) {
            return e.SendMsg(
              "Player.UpdateSteamAnnouncementLastRead#1",
              (0, a.MD)(It, t),
              Ut,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPrivacySettings = function (e, t) {
            return e.SendMsg(
              "Player.GetPrivacySettings#1",
              (0, a.MD)(At, t),
              xt,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDurationControl = function (e, t) {
            return e.SendMsg(
              "Player.GetDurationControl#1",
              (0, a.MD)(Xt, t),
              Nt,
              { ePrivilege: 1 },
            );
          }),
          (e.RecordDisconnectedPlaytime = function (e, t) {
            return e.SendMsg(
              "Player.RecordDisconnectedPlaytime#1",
              (0, a.MD)(k, t),
              U,
              { ePrivilege: 1 },
            );
          });
      })(b || (b = {})),
        (function (e) {
          (e.NotifyLastPlayedTimesHandler = {
            name: "PlayerClient.NotifyLastPlayedTimes#1",
            request: Zt,
          }),
            (e.NotifyFriendNicknameChangedHandler = {
              name: "PlayerClient.NotifyFriendNicknameChanged#1",
              request: Gt,
            }),
            (e.NotifyFriendEquippedProfileItemsChangedHandler = {
              name: "PlayerClient.NotifyFriendEquippedProfileItemsChanged#1",
              request: qt,
            }),
            (e.NotifyNewSteamAnnouncementStateHandler = {
              name: "PlayerClient.NotifyNewSteamAnnouncementState#1",
              request: Lt,
            }),
            (e.NotifyCommunityPreferencesChangedHandler = {
              name: "PlayerClient.NotifyCommunityPreferencesChanged#1",
              request: Vt,
            }),
            (e.NotifyTextFilterWordsChangedHandler = {
              name: "PlayerClient.NotifyTextFilterWordsChanged#1",
              request: Ht,
            }),
            (e.NotifyPerFriendPreferencesChangedHandler = {
              name: "PlayerClient.NotifyPerFriendPreferencesChanged#1",
              request: $t,
            }),
            (e.NotifyPrivacyPrivacySettingsChangedHandler = {
              name: "PlayerClient.NotifyPrivacyPrivacySettingsChanged#1",
              request: Kt,
            });
        })(_ || (_ = {}));
    },
    23048: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => d });
      const i = function () {
        (this.__data__ = []), (this.size = 0);
      };
      var n = r(72831);
      const a = function (e, t) {
        for (var r = e.length; r--; ) if ((0, n.Z)(e[r][0], t)) return r;
        return -1;
      };
      var s = Array.prototype.splice;
      const o = function (e) {
        var t = this.__data__,
          r = a(t, e);
        return (
          !(r < 0) &&
          (r == t.length - 1 ? t.pop() : s.call(t, r, 1), --this.size, !0)
        );
      };
      const c = function (e) {
        var t = this.__data__,
          r = a(t, e);
        return r < 0 ? void 0 : t[r][1];
      };
      const l = function (e) {
        return a(this.__data__, e) > -1;
      };
      const u = function (e, t) {
        var r = this.__data__,
          i = a(r, e);
        return i < 0 ? (++this.size, r.push([e, t])) : (r[i][1] = t), this;
      };
      function m(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      (m.prototype.clear = i),
        (m.prototype.delete = o),
        (m.prototype.get = c),
        (m.prototype.has = l),
        (m.prototype.set = u);
      const d = m;
    },
    93681: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => a });
      var i = r(83437),
        n = r(57649);
      const a = (0, i.Z)(n.Z, "Map");
    },
    37040: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => v });
      const i = (0, r(83437).Z)(Object, "create");
      const n = function () {
        (this.__data__ = i ? i(null) : {}), (this.size = 0);
      };
      const a = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
      var s = Object.prototype.hasOwnProperty;
      const o = function (e) {
        var t = this.__data__;
        if (i) {
          var r = t[e];
          return "__lodash_hash_undefined__" === r ? void 0 : r;
        }
        return s.call(t, e) ? t[e] : void 0;
      };
      var c = Object.prototype.hasOwnProperty;
      const l = function (e) {
        var t = this.__data__;
        return i ? void 0 !== t[e] : c.call(t, e);
      };
      const u = function (e, t) {
        var r = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (r[e] = i && void 0 === t ? "__lodash_hash_undefined__" : t),
          this
        );
      };
      function m(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      (m.prototype.clear = n),
        (m.prototype.delete = a),
        (m.prototype.get = o),
        (m.prototype.has = l),
        (m.prototype.set = u);
      const d = m;
      var y = r(23048),
        f = r(93681);
      const B = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new d(),
            map: new (f.Z || y.Z)(),
            string: new d(),
          });
      };
      const p = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
      const b = function (e, t) {
        var r = e.__data__;
        return p(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
      };
      const _ = function (e) {
        var t = b(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
      const g = function (e) {
        return b(this, e).get(e);
      };
      const h = function (e) {
        return b(this, e).has(e);
      };
      const w = function (e, t) {
        var r = b(this, e),
          i = r.size;
        return r.set(e, t), (this.size += r.size == i ? 0 : 1), this;
      };
      function z(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      (z.prototype.clear = B),
        (z.prototype.delete = _),
        (z.prototype.get = g),
        (z.prototype.has = h),
        (z.prototype.set = w);
      const v = z;
    },
    13953: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => d });
      var i = r(23048);
      const n = function () {
        (this.__data__ = new i.Z()), (this.size = 0);
      };
      const a = function (e) {
        var t = this.__data__,
          r = t.delete(e);
        return (this.size = t.size), r;
      };
      const s = function (e) {
        return this.__data__.get(e);
      };
      const o = function (e) {
        return this.__data__.has(e);
      };
      var c = r(93681),
        l = r(37040);
      const u = function (e, t) {
        var r = this.__data__;
        if (r instanceof i.Z) {
          var n = r.__data__;
          if (!c.Z || n.length < 199)
            return n.push([e, t]), (this.size = ++r.size), this;
          r = this.__data__ = new l.Z(n);
        }
        return r.set(e, t), (this.size = r.size), this;
      };
      function m(e) {
        var t = (this.__data__ = new i.Z(e));
        this.size = t.size;
      }
      (m.prototype.clear = n),
        (m.prototype.delete = a),
        (m.prototype.get = s),
        (m.prototype.has = o),
        (m.prototype.set = u);
      const d = m;
    },
    56137: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i = r(57649).Z.Symbol;
    },
    61259: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i = r(57649).Z.Uint8Array;
    },
    66662: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i = function (e, t) {
        for (
          var r = -1, i = null == e ? 0 : e.length;
          ++r < i && !1 !== t(e[r], r, e);

        );
        return e;
      };
    },
    36658: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => u });
      const i = function (e, t) {
        for (var r = -1, i = Array(e); ++r < e; ) i[r] = t(r);
        return i;
      };
      var n = r(84431),
        a = r(92170),
        s = r(62246),
        o = r(56423),
        c = r(70770),
        l = Object.prototype.hasOwnProperty;
      const u = function (e, t) {
        var r = (0, a.Z)(e),
          u = !r && (0, n.Z)(e),
          m = !r && !u && (0, s.Z)(e),
          d = !r && !u && !m && (0, c.Z)(e),
          y = r || u || m || d,
          f = y ? i(e.length, String) : [],
          B = f.length;
        for (var p in e)
          (!t && !l.call(e, p)) ||
            (y &&
              ("length" == p ||
                (m && ("offset" == p || "parent" == p)) ||
                (d &&
                  ("buffer" == p || "byteLength" == p || "byteOffset" == p)) ||
                (0, o.Z)(p, B))) ||
            f.push(p);
        return f;
      };
    },
    72160: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i = function (e, t) {
        for (var r = -1, i = null == e ? 0 : e.length, n = Array(i); ++r < i; )
          n[r] = t(e[r], r, e);
        return n;
      };
    },
    46049: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i = function (e, t) {
        for (var r = -1, i = t.length, n = e.length; ++r < i; ) e[n + r] = t[r];
        return e;
      };
    },
    43786: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s });
      var i = r(24077),
        n = r(72831),
        a = Object.prototype.hasOwnProperty;
      const s = function (e, t, r) {
        var s = e[t];
        (a.call(e, t) && (0, n.Z)(s, r) && (void 0 !== r || t in e)) ||
          (0, i.Z)(e, t, r);
      };
    },
    24077: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      var i = r(13819);
      const n = function (e, t, r) {
        "__proto__" == t && i.Z
          ? (0, i.Z)(e, t, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (e[t] = r);
      };
    },
    73154: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => a });
      var i = r(96288),
        n = Object.create;
      const a = (function () {
        function e() {}
        return function (t) {
          if (!(0, i.Z)(t)) return {};
          if (n) return n(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    },
    63392: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => a });
      var i = r(79926),
        n = r(50641);
      const a = (function (e, t) {
        return function (r, i) {
          if (null == r) return r;
          if (!(0, n.Z)(r)) return e(r, i);
          for (
            var a = r.length, s = t ? a : -1, o = Object(r);
            (t ? s-- : ++s < a) && !1 !== i(o[s], s, o);

          );
          return r;
        };
      })(i.Z);
    },
    14211: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i = (function (e) {
        return function (t, r, i) {
          for (var n = -1, a = Object(t), s = i(t), o = s.length; o--; ) {
            var c = s[e ? o : ++n];
            if (!1 === r(a[c], c, a)) break;
          }
          return t;
        };
      })();
    },
    79926: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => a });
      var i = r(14211),
        n = r(10646);
      const a = function (e, t) {
        return e && (0, i.Z)(e, t, n.Z);
      };
    },
    57673: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => a });
      var i = r(30475),
        n = r(82508);
      const a = function (e, t) {
        for (var r = 0, a = (t = (0, i.Z)(t, e)).length; null != e && r < a; )
          e = e[(0, n.Z)(t[r++])];
        return r && r == a ? e : void 0;
      };
    },
    4403: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => a });
      var i = r(46049),
        n = r(92170);
      const a = function (e, t, r) {
        var a = t(e);
        return (0, n.Z)(e) ? a : (0, i.Z)(a, r(e));
      };
    },
    3823: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => d });
      var i = r(56137),
        n = Object.prototype,
        a = n.hasOwnProperty,
        s = n.toString,
        o = i.Z ? i.Z.toStringTag : void 0;
      const c = function (e) {
        var t = a.call(e, o),
          r = e[o];
        try {
          e[o] = void 0;
          var i = !0;
        } catch (e) {}
        var n = s.call(e);
        return i && (t ? (e[o] = r) : delete e[o]), n;
      };
      var l = Object.prototype.toString;
      const u = function (e) {
        return l.call(e);
      };
      var m = i.Z ? i.Z.toStringTag : void 0;
      const d = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : m && m in Object(e)
          ? c(e)
          : u(e);
      };
    },
    71084: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => P });
      var i = r(13953),
        n = r(37040);
      const a = function (e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this;
      };
      const s = function (e) {
        return this.__data__.has(e);
      };
      function o(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.__data__ = new n.Z(); ++t < r; ) this.add(e[t]);
      }
      (o.prototype.add = o.prototype.push = a), (o.prototype.has = s);
      const c = o;
      const l = function (e, t) {
        for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
          if (t(e[r], r, e)) return !0;
        return !1;
      };
      const u = function (e, t) {
        return e.has(t);
      };
      const m = function (e, t, r, i, n, a) {
        var s = 1 & r,
          o = e.length,
          m = t.length;
        if (o != m && !(s && m > o)) return !1;
        var d = a.get(e),
          y = a.get(t);
        if (d && y) return d == t && y == e;
        var f = -1,
          B = !0,
          p = 2 & r ? new c() : void 0;
        for (a.set(e, t), a.set(t, e); ++f < o; ) {
          var b = e[f],
            _ = t[f];
          if (i) var g = s ? i(_, b, f, t, e, a) : i(b, _, f, e, t, a);
          if (void 0 !== g) {
            if (g) continue;
            B = !1;
            break;
          }
          if (p) {
            if (
              !l(t, function (e, t) {
                if (!u(p, t) && (b === e || n(b, e, r, i, a))) return p.push(t);
              })
            ) {
              B = !1;
              break;
            }
          } else if (b !== _ && !n(b, _, r, i, a)) {
            B = !1;
            break;
          }
        }
        return a.delete(e), a.delete(t), B;
      };
      var d = r(56137),
        y = r(61259),
        f = r(72831);
      const B = function (e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e, i) {
            r[++t] = [i, e];
          }),
          r
        );
      };
      const p = function (e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e) {
            r[++t] = e;
          }),
          r
        );
      };
      var b = d.Z ? d.Z.prototype : void 0,
        _ = b ? b.valueOf : void 0;
      const g = function (e, t, r, i, n, a, s) {
        switch (r) {
          case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case "[object ArrayBuffer]":
            return !(
              e.byteLength != t.byteLength || !a(new y.Z(e), new y.Z(t))
            );
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return (0, f.Z)(+e, +t);
          case "[object Error]":
            return e.name == t.name && e.message == t.message;
          case "[object RegExp]":
          case "[object String]":
            return e == t + "";
          case "[object Map]":
            var o = B;
          case "[object Set]":
            var c = 1 & i;
            if ((o || (o = p), e.size != t.size && !c)) return !1;
            var l = s.get(e);
            if (l) return l == t;
            (i |= 2), s.set(e, t);
            var u = m(o(e), o(t), i, n, a, s);
            return s.delete(e), u;
          case "[object Symbol]":
            if (_) return _.call(e) == _.call(t);
        }
        return !1;
      };
      var h = r(69094),
        w = Object.prototype.hasOwnProperty;
      const z = function (e, t, r, i, n, a) {
        var s = 1 & r,
          o = (0, h.Z)(e),
          c = o.length;
        if (c != (0, h.Z)(t).length && !s) return !1;
        for (var l = c; l--; ) {
          var u = o[l];
          if (!(s ? u in t : w.call(t, u))) return !1;
        }
        var m = a.get(e),
          d = a.get(t);
        if (m && d) return m == t && d == e;
        var y = !0;
        a.set(e, t), a.set(t, e);
        for (var f = s; ++l < c; ) {
          var B = e[(u = o[l])],
            p = t[u];
          if (i) var b = s ? i(p, B, u, t, e, a) : i(B, p, u, e, t, a);
          if (!(void 0 === b ? B === p || n(B, p, r, i, a) : b)) {
            y = !1;
            break;
          }
          f || (f = "constructor" == u);
        }
        if (y && !f) {
          var _ = e.constructor,
            g = t.constructor;
          _ == g ||
            !("constructor" in e) ||
            !("constructor" in t) ||
            ("function" == typeof _ &&
              _ instanceof _ &&
              "function" == typeof g &&
              g instanceof g) ||
            (y = !1);
        }
        return a.delete(e), a.delete(t), y;
      };
      var v = r(70783),
        M = r(92170),
        F = r(62246),
        S = r(70770),
        R = "[object Arguments]",
        O = "[object Array]",
        j = "[object Object]",
        W = Object.prototype.hasOwnProperty;
      const T = function (e, t, r, n, a, s) {
        var o = (0, M.Z)(e),
          c = (0, M.Z)(t),
          l = o ? O : (0, v.Z)(e),
          u = c ? O : (0, v.Z)(t),
          d = (l = l == R ? j : l) == j,
          y = (u = u == R ? j : u) == j,
          f = l == u;
        if (f && (0, F.Z)(e)) {
          if (!(0, F.Z)(t)) return !1;
          (o = !0), (d = !1);
        }
        if (f && !d)
          return (
            s || (s = new i.Z()),
            o || (0, S.Z)(e) ? m(e, t, r, n, a, s) : g(e, t, l, r, n, a, s)
          );
        if (!(1 & r)) {
          var B = d && W.call(e, "__wrapped__"),
            p = y && W.call(t, "__wrapped__");
          if (B || p) {
            var b = B ? e.value() : e,
              _ = p ? t.value() : t;
            return s || (s = new i.Z()), a(b, _, r, n, s);
          }
        }
        return !!f && (s || (s = new i.Z()), z(e, t, r, n, a, s));
      };
      var E = r(25197);
      const P = function e(t, r, i, n, a) {
        return (
          t === r ||
          (null == t || null == r || (!(0, E.Z)(t) && !(0, E.Z)(r))
            ? t != t && r != r
            : T(t, r, i, n, e, a))
        );
      };
    },
    52942: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => j });
      var i = r(13953),
        n = r(71084);
      const a = function (e, t, r, a) {
        var s = r.length,
          o = s,
          c = !a;
        if (null == e) return !o;
        for (e = Object(e); s--; ) {
          var l = r[s];
          if (c && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1;
        }
        for (; ++s < o; ) {
          var u = (l = r[s])[0],
            m = e[u],
            d = l[1];
          if (c && l[2]) {
            if (void 0 === m && !(u in e)) return !1;
          } else {
            var y = new i.Z();
            if (a) var f = a(m, d, u, e, t, y);
            if (!(void 0 === f ? (0, n.Z)(d, m, 3, a, y) : f)) return !1;
          }
        }
        return !0;
      };
      var s = r(96288);
      const o = function (e) {
        return e == e && !(0, s.Z)(e);
      };
      var c = r(10646);
      const l = function (e) {
        for (var t = (0, c.Z)(e), r = t.length; r--; ) {
          var i = t[r],
            n = e[i];
          t[r] = [i, n, o(n)];
        }
        return t;
      };
      const u = function (e, t) {
        return function (r) {
          return null != r && r[e] === t && (void 0 !== t || e in Object(r));
        };
      };
      const m = function (e) {
        var t = l(e);
        return 1 == t.length && t[0][2]
          ? u(t[0][0], t[0][1])
          : function (r) {
              return r === e || a(r, e, t);
            };
      };
      var d = r(57673);
      const y = function (e, t, r) {
        var i = null == e ? void 0 : (0, d.Z)(e, t);
        return void 0 === i ? r : i;
      };
      const f = function (e, t) {
        return null != e && t in Object(e);
      };
      var B = r(30475),
        p = r(84431),
        b = r(92170),
        _ = r(56423),
        g = r(44957),
        h = r(82508);
      const w = function (e, t, r) {
        for (var i = -1, n = (t = (0, B.Z)(t, e)).length, a = !1; ++i < n; ) {
          var s = (0, h.Z)(t[i]);
          if (!(a = null != e && r(e, s))) break;
          e = e[s];
        }
        return a || ++i != n
          ? a
          : !!(n = null == e ? 0 : e.length) &&
              (0, g.Z)(n) &&
              (0, _.Z)(s, n) &&
              ((0, b.Z)(e) || (0, p.Z)(e));
      };
      const z = function (e, t) {
        return null != e && w(e, t, f);
      };
      var v = r(10206);
      const M = function (e, t) {
        return (0, v.Z)(e) && o(t)
          ? u((0, h.Z)(e), t)
          : function (r) {
              var i = y(r, e);
              return void 0 === i && i === t ? z(r, e) : (0, n.Z)(t, i, 3);
            };
      };
      var F = r(59996);
      const S = function (e) {
        return function (t) {
          return null == t ? void 0 : t[e];
        };
      };
      const R = function (e) {
        return function (t) {
          return (0, d.Z)(t, e);
        };
      };
      const O = function (e) {
        return (0, v.Z)(e) ? S((0, h.Z)(e)) : R(e);
      };
      const j = function (e) {
        return "function" == typeof e
          ? e
          : null == e
          ? F.Z
          : "object" == typeof e
          ? (0, b.Z)(e)
            ? M(e[0], e[1])
            : m(e)
          : O(e);
      };
    },
    3145: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => a });
      var i = r(63392),
        n = r(50641);
      const a = function (e, t) {
        var r = -1,
          a = (0, n.Z)(e) ? Array(e.length) : [];
        return (
          (0, i.Z)(e, function (e, i, n) {
            a[++r] = t(e, i, n);
          }),
          a
        );
      };
    },
    35651: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s });
      var i = r(59996),
        n = r(13031),
        a = r(11871);
      const s = function (e, t) {
        return (0, a.Z)((0, n.Z)(e, t, i.Z), e + "");
      };
    },
    86176: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i = function (e) {
        return function (t) {
          return e(t);
        };
      };
    },
    30475: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => _ });
      var i = r(92170),
        n = r(10206),
        a = r(37040);
      function s(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw new TypeError("Expected a function");
        var r = function () {
          var i = arguments,
            n = t ? t.apply(this, i) : i[0],
            a = r.cache;
          if (a.has(n)) return a.get(n);
          var s = e.apply(this, i);
          return (r.cache = a.set(n, s) || a), s;
        };
        return (r.cache = new (s.Cache || a.Z)()), r;
      }
      s.Cache = a.Z;
      const o = s;
      var c =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        l = /\\(\\)?/g;
      const u = (function (e) {
        var t = o(e, function (e) {
            return 500 === r.size && r.clear(), e;
          }),
          r = t.cache;
        return t;
      })(function (e) {
        var t = [];
        return (
          46 === e.charCodeAt(0) && t.push(""),
          e.replace(c, function (e, r, i, n) {
            t.push(i ? n.replace(l, "$1") : r || e);
          }),
          t
        );
      });
      var m = r(56137),
        d = r(72160),
        y = r(62816),
        f = m.Z ? m.Z.prototype : void 0,
        B = f ? f.toString : void 0;
      const p = function e(t) {
        if ("string" == typeof t) return t;
        if ((0, i.Z)(t)) return (0, d.Z)(t, e) + "";
        if ((0, y.Z)(t)) return B ? B.call(t) : "";
        var r = t + "";
        return "0" == r && 1 / t == -Infinity ? "-0" : r;
      };
      const b = function (e) {
        return null == e ? "" : p(e);
      };
      const _ = function (e, t) {
        return (0, i.Z)(e) ? e : (0, n.Z)(e, t) ? [e] : u(b(e));
      };
    },
    11225: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      var i = r(61259);
      const n = function (e) {
        var t = new e.constructor(e.byteLength);
        return new i.Z(t).set(new i.Z(e)), t;
      };
    },
    77408: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => c });
      var i = r(57649),
        n =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        a =
          n &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        s = a && a.exports === n ? i.Z.Buffer : void 0,
        o = s ? s.allocUnsafe : void 0;
      const c = function (e, t) {
        if (t) return e.slice();
        var r = e.length,
          i = o ? o(r) : new e.constructor(r);
        return e.copy(i), i;
      };
    },
    97558: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      var i = r(11225);
      const n = function (e, t) {
        var r = t ? (0, i.Z)(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      };
    },
    32291: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i = function (e, t) {
        var r = -1,
          i = e.length;
        for (t || (t = Array(i)); ++r < i; ) t[r] = e[r];
        return t;
      };
    },
    7172: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => a });
      var i = r(43786),
        n = r(24077);
      const a = function (e, t, r, a) {
        var s = !r;
        r || (r = {});
        for (var o = -1, c = t.length; ++o < c; ) {
          var l = t[o],
            u = a ? a(r[l], e[l], l, r, e) : void 0;
          void 0 === u && (u = e[l]), s ? (0, n.Z)(r, l, u) : (0, i.Z)(r, l, u);
        }
        return r;
      };
    },
    13819: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      var i = r(83437);
      const n = (function () {
        try {
          var e = (0, i.Z)(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch (e) {}
      })();
    },
    49923: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i =
        "object" == typeof global &&
        global &&
        global.Object === Object &&
        global;
    },
    69094: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s });
      var i = r(4403),
        n = r(20993),
        a = r(10646);
      const s = function (e) {
        return (0, i.Z)(e, a.Z, n.Z);
      };
    },
    83437: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => _ });
      var i = r(2619);
      const n = r(57649).Z["__core-js_shared__"];
      var a,
        s = (a = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + a
          : "";
      const o = function (e) {
        return !!s && s in e;
      };
      var c = r(96288),
        l = r(37311),
        u = /^\[object .+?Constructor\]$/,
        m = Function.prototype,
        d = Object.prototype,
        y = m.toString,
        f = d.hasOwnProperty,
        B = RegExp(
          "^" +
            y
              .call(f)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        );
      const p = function (e) {
        return (
          !(!(0, c.Z)(e) || o(e)) && ((0, i.Z)(e) ? B : u).test((0, l.Z)(e))
        );
      };
      const b = function (e, t) {
        return null == e ? void 0 : e[t];
      };
      const _ = function (e, t) {
        var r = b(e, t);
        return p(r) ? r : void 0;
      };
    },
    12545: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i = (0, r(29962).Z)(Object.getPrototypeOf, Object);
    },
    20993: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => o });
      const i = function (e, t) {
        for (
          var r = -1, i = null == e ? 0 : e.length, n = 0, a = [];
          ++r < i;

        ) {
          var s = e[r];
          t(s, r, e) && (a[n++] = s);
        }
        return a;
      };
      var n = r(3612),
        a = Object.prototype.propertyIsEnumerable,
        s = Object.getOwnPropertySymbols;
      const o = s
        ? function (e) {
            return null == e
              ? []
              : ((e = Object(e)),
                i(s(e), function (t) {
                  return a.call(e, t);
                }));
          }
        : n.Z;
    },
    70783: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => v });
      var i = r(83437),
        n = r(57649);
      const a = (0, i.Z)(n.Z, "DataView");
      var s = r(93681);
      const o = (0, i.Z)(n.Z, "Promise");
      const c = (0, i.Z)(n.Z, "Set");
      const l = (0, i.Z)(n.Z, "WeakMap");
      var u = r(3823),
        m = r(37311),
        d = "[object Map]",
        y = "[object Promise]",
        f = "[object Set]",
        B = "[object WeakMap]",
        p = "[object DataView]",
        b = (0, m.Z)(a),
        _ = (0, m.Z)(s.Z),
        g = (0, m.Z)(o),
        h = (0, m.Z)(c),
        w = (0, m.Z)(l),
        z = u.Z;
      ((a && z(new a(new ArrayBuffer(1))) != p) ||
        (s.Z && z(new s.Z()) != d) ||
        (o && z(o.resolve()) != y) ||
        (c && z(new c()) != f) ||
        (l && z(new l()) != B)) &&
        (z = function (e) {
          var t = (0, u.Z)(e),
            r = "[object Object]" == t ? e.constructor : void 0,
            i = r ? (0, m.Z)(r) : "";
          if (i)
            switch (i) {
              case b:
                return p;
              case _:
                return d;
              case g:
                return y;
              case h:
                return f;
              case w:
                return B;
            }
          return t;
        });
      const v = z;
    },
    23775: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s });
      var i = r(73154),
        n = r(12545),
        a = r(41212);
      const s = function (e) {
        return "function" != typeof e.constructor || (0, a.Z)(e)
          ? {}
          : (0, i.Z)((0, n.Z)(e));
      };
    },
    56423: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      var i = /^(?:0|[1-9]\d*)$/;
      const n = function (e, t) {
        var r = typeof e;
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ("number" == r || ("symbol" != r && i.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      };
    },
    15974: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => o });
      var i = r(72831),
        n = r(50641),
        a = r(56423),
        s = r(96288);
      const o = function (e, t, r) {
        if (!(0, s.Z)(r)) return !1;
        var o = typeof t;
        return (
          !!("number" == o
            ? (0, n.Z)(r) && (0, a.Z)(t, r.length)
            : "string" == o && t in r) && (0, i.Z)(r[t], e)
        );
      };
    },
    10206: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => o });
      var i = r(92170),
        n = r(62816),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        s = /^\w*$/;
      const o = function (e, t) {
        if ((0, i.Z)(e)) return !1;
        var r = typeof e;
        return (
          !(
            "number" != r &&
            "symbol" != r &&
            "boolean" != r &&
            null != e &&
            !(0, n.Z)(e)
          ) ||
          s.test(e) ||
          !a.test(e) ||
          (null != t && e in Object(t))
        );
      };
    },
    41212: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      var i = Object.prototype;
      const n = function (e) {
        var t = e && e.constructor;
        return e === (("function" == typeof t && t.prototype) || i);
      };
    },
    40690: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => o });
      var i = r(49923),
        n =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        a =
          n &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        s = a && a.exports === n && i.Z.process;
      const o = (function () {
        try {
          var e = a && a.require && a.require("util").types;
          return e || (s && s.binding && s.binding("util"));
        } catch (e) {}
      })();
    },
    29962: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i = function (e, t) {
        return function (r) {
          return e(t(r));
        };
      };
    },
    13031: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => a });
      const i = function (e, t, r) {
        switch (r.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, r[0]);
          case 2:
            return e.call(t, r[0], r[1]);
          case 3:
            return e.call(t, r[0], r[1], r[2]);
        }
        return e.apply(t, r);
      };
      var n = Math.max;
      const a = function (e, t, r) {
        return (
          (t = n(void 0 === t ? e.length - 1 : t, 0)),
          function () {
            for (
              var a = arguments, s = -1, o = n(a.length - t, 0), c = Array(o);
              ++s < o;

            )
              c[s] = a[t + s];
            s = -1;
            for (var l = Array(t + 1); ++s < t; ) l[s] = a[s];
            return (l[t] = r(c)), i(e, this, l);
          }
        );
      };
    },
    57649: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => a });
      var i = r(49923),
        n = "object" == typeof self && self && self.Object === Object && self;
      const a = i.Z || n || Function("return this")();
    },
    11871: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => c });
      const i = function (e) {
        return function () {
          return e;
        };
      };
      var n = r(13819),
        a = r(59996);
      const s = n.Z
        ? function (e, t) {
            return (0, n.Z)(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: i(t),
              writable: !0,
            });
          }
        : a.Z;
      var o = Date.now;
      const c = (function (e) {
        var t = 0,
          r = 0;
        return function () {
          var i = o(),
            n = 16 - (i - r);
          if (((r = i), n > 0)) {
            if (++t >= 800) return arguments[0];
          } else t = 0;
          return e.apply(void 0, arguments);
        };
      })(s);
    },
    82508: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      var i = r(62816);
      const n = function (e) {
        if ("string" == typeof e || (0, i.Z)(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -Infinity ? "-0" : t;
      };
    },
    37311: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      var i = Function.prototype.toString;
      const n = function (e) {
        if (null != e) {
          try {
            return i.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      };
    },
    72831: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i = function (e, t) {
        return e === t || (e != e && t != t);
      };
    },
    59996: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i = function (e) {
        return e;
      };
    },
    84431: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => l });
      var i = r(3823),
        n = r(25197);
      const a = function (e) {
        return (0, n.Z)(e) && "[object Arguments]" == (0, i.Z)(e);
      };
      var s = Object.prototype,
        o = s.hasOwnProperty,
        c = s.propertyIsEnumerable;
      const l = a(
        (function () {
          return arguments;
        })(),
      )
        ? a
        : function (e) {
            return (0, n.Z)(e) && o.call(e, "callee") && !c.call(e, "callee");
          };
    },
    92170: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i = Array.isArray;
    },
    50641: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => a });
      var i = r(2619),
        n = r(44957);
      const a = function (e) {
        return null != e && (0, n.Z)(e.length) && !(0, i.Z)(e);
      };
    },
    62246: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => c });
      var i = r(57649);
      const n = function () {
        return !1;
      };
      var a =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        s =
          a &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        o = s && s.exports === a ? i.Z.Buffer : void 0;
      const c = (o ? o.isBuffer : void 0) || n;
    },
    2619: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => a });
      var i = r(3823),
        n = r(96288);
      const a = function (e) {
        if (!(0, n.Z)(e)) return !1;
        var t = (0, i.Z)(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      };
    },
    44957: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
    },
    96288: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    25197: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i = function (e) {
        return null != e && "object" == typeof e;
      };
    },
    44199: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => m });
      var i = r(3823),
        n = r(12545),
        a = r(25197),
        s = Function.prototype,
        o = Object.prototype,
        c = s.toString,
        l = o.hasOwnProperty,
        u = c.call(Object);
      const m = function (e) {
        if (!(0, a.Z)(e) || "[object Object]" != (0, i.Z)(e)) return !1;
        var t = (0, n.Z)(e);
        if (null === t) return !0;
        var r = l.call(t, "constructor") && t.constructor;
        return "function" == typeof r && r instanceof r && c.call(r) == u;
      };
    },
    62816: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => a });
      var i = r(3823),
        n = r(25197);
      const a = function (e) {
        return (
          "symbol" == typeof e ||
          ((0, n.Z)(e) && "[object Symbol]" == (0, i.Z)(e))
        );
      };
    },
    70770: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => m });
      var i = r(3823),
        n = r(44957),
        a = r(25197),
        s = {};
      (s["[object Float32Array]"] =
        s["[object Float64Array]"] =
        s["[object Int8Array]"] =
        s["[object Int16Array]"] =
        s["[object Int32Array]"] =
        s["[object Uint8Array]"] =
        s["[object Uint8ClampedArray]"] =
        s["[object Uint16Array]"] =
        s["[object Uint32Array]"] =
          !0),
        (s["[object Arguments]"] =
          s["[object Array]"] =
          s["[object ArrayBuffer]"] =
          s["[object Boolean]"] =
          s["[object DataView]"] =
          s["[object Date]"] =
          s["[object Error]"] =
          s["[object Function]"] =
          s["[object Map]"] =
          s["[object Number]"] =
          s["[object Object]"] =
          s["[object RegExp]"] =
          s["[object Set]"] =
          s["[object String]"] =
          s["[object WeakMap]"] =
            !1);
      const o = function (e) {
        return (0, a.Z)(e) && (0, n.Z)(e.length) && !!s[(0, i.Z)(e)];
      };
      var c = r(86176),
        l = r(40690),
        u = l.Z && l.Z.isTypedArray;
      const m = u ? (0, c.Z)(u) : o;
    },
    10646: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => l });
      var i = r(36658),
        n = r(41212);
      const a = (0, r(29962).Z)(Object.keys, Object);
      var s = Object.prototype.hasOwnProperty;
      const o = function (e) {
        if (!(0, n.Z)(e)) return a(e);
        var t = [];
        for (var r in Object(e))
          s.call(e, r) && "constructor" != r && t.push(r);
        return t;
      };
      var c = r(50641);
      const l = function (e) {
        return (0, c.Z)(e) ? (0, i.Z)(e) : o(e);
      };
    },
    85889: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => u });
      var i = r(36658),
        n = r(96288),
        a = r(41212);
      const s = function (e) {
        var t = [];
        if (null != e) for (var r in Object(e)) t.push(r);
        return t;
      };
      var o = Object.prototype.hasOwnProperty;
      const c = function (e) {
        if (!(0, n.Z)(e)) return s(e);
        var t = (0, a.Z)(e),
          r = [];
        for (var i in e)
          ("constructor" != i || (!t && o.call(e, i))) && r.push(i);
        return r;
      };
      var l = r(50641);
      const u = function (e) {
        return (0, l.Z)(e) ? (0, i.Z)(e, !0) : c(e);
      };
    },
    3612: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const i = function () {
        return [];
      };
    },
    90312: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => y });
      var i = /\s/;
      const n = function (e) {
        for (var t = e.length; t-- && i.test(e.charAt(t)); );
        return t;
      };
      var a = /^\s+/;
      const s = function (e) {
        return e ? e.slice(0, n(e) + 1).replace(a, "") : e;
      };
      var o = r(96288),
        c = r(62816),
        l = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        m = /^0o[0-7]+$/i,
        d = parseInt;
      const y = function (e) {
        if ("number" == typeof e) return e;
        if ((0, c.Z)(e)) return NaN;
        if ((0, o.Z)(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = (0, o.Z)(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = s(e);
        var r = u.test(e);
        return r || m.test(e) ? d(e.slice(2), r ? 2 : 8) : l.test(e) ? NaN : +e;
      };
    },
  },
]);
