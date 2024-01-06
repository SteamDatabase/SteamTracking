/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5785],
  {
    73799: (e) => {
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
                  var l = t.cacheHits || (t.cacheHits = []);
                  return new Promise(function (e) {
                    l.push(function () {
                      e(o);
                    });
                  });
                }
              }
              t.keys.push(e);
              var c = new Promise(function (e, r) {
                t.callbacks.push({ resolve: e, reject: r });
              });
              return r && r.set(i, c), c;
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
    43344: (e, t, r) => {
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
          e.exports = r(47427);
        },
        function (e, t) {
          e.exports = r(37485);
        },
        function (e, t) {
          e.exports = r(42287);
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
            l = r.n(o);
          function c() {
            return (c = Object.assign
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
            return l.a.createElement(
              "tr",
              null,
              l.a.createElement(
                "th",
                { className: "rdtPrev", onClick: t },
                l.a.createElement("span", null, "‹"),
              ),
              l.a.createElement(
                "th",
                c({ className: "rdtSwitch", colSpan: a, onClick: r }, s),
                n,
              ),
              l.a.createElement(
                "th",
                { className: "rdtNext", onClick: i },
                l.a.createElement("span", null, "›"),
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
          function B(e) {
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
                i = b(e);
              if (t) {
                var n = b(this).constructor;
                r = Reflect.construct(i, arguments, n);
              } else r = i.apply(this, arguments);
              return (function (e, t) {
                if (t && ("object" === m(t) || "function" == typeof t))
                  return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return f(e);
              })(this, r);
            };
          }
          function f(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return e;
          }
          function b(e) {
            return (b = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function p(e, t, r) {
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
          var g = (function (e) {
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
              i = B(n);
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
                p(
                  f((e = i.call.apply(i, [this].concat(r)))),
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
                    return l.a.createElement(
                      "div",
                      { className: "rdtDays" },
                      l.a.createElement(
                        "table",
                        null,
                        l.a.createElement(
                          "thead",
                          null,
                          this.renderNavigation(),
                          this.renderDayHeaders(),
                        ),
                        l.a.createElement("tbody", null, this.renderDays()),
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
                    return l.a.createElement(u, {
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
                      return l.a.createElement(
                        "th",
                        { key: e + t, className: "dow" },
                        e,
                      );
                    });
                    return l.a.createElement("tr", null, e);
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
                      w(i, s++).push(this.renderDay(n, t, r)), n.add(1, "d");
                    return i.map(function (e, t) {
                      return l.a.createElement(
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
                      return l.a.createElement(
                        "tfoot",
                        null,
                        l.a.createElement(
                          "tr",
                          null,
                          l.a.createElement(
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
          })(l.a.Component);
          function w(e, t) {
            return e[Math.floor(t / 7)];
          }
          function _(e) {
            return (_ =
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
          function h(e, t) {
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
          function M(e) {
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
                i = R(e);
              if (t) {
                var n = R(this).constructor;
                r = Reflect.construct(i, arguments, n);
              } else r = i.apply(this, arguments);
              return (function (e, t) {
                if (t && ("object" === _(t) || "function" == typeof t))
                  return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return F(e);
              })(this, r);
            };
          }
          function F(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return e;
          }
          function R(e) {
            return (R = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          p(g, "defaultProps", {
            isValidDate: function () {
              return !0;
            },
            renderDay: function (e, t) {
              return l.a.createElement("td", e, t.date());
            },
          });
          var v = (function (e) {
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
              i = M(n);
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
                  F((e = i.call.apply(i, [this].concat(r)))),
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
                    return l.a.createElement(
                      "div",
                      { className: "rdtMonths" },
                      l.a.createElement(
                        "table",
                        null,
                        l.a.createElement(
                          "thead",
                          null,
                          this.renderNavigation(),
                        ),
                      ),
                      l.a.createElement(
                        "table",
                        null,
                        l.a.createElement("tbody", null, this.renderMonths()),
                      ),
                    );
                  },
                },
                {
                  key: "renderNavigation",
                  value: function () {
                    var e = this,
                      t = this.props.viewDate.year();
                    return l.a.createElement(u, {
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
                      S(e, t).push(this.renderMonth(t));
                    return e.map(function (e, t) {
                      return l.a.createElement("tr", { key: t }, e);
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
                      : l.a.createElement("td", n, this.getMonthText(e));
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
              ]) && h(t.prototype, r),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              n
            );
          })(l.a.Component);
          function S(e, t) {
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
          function W(e, t) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          function j(e, t) {
            return (j = Object.setPrototypeOf
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
                i = C(e);
              if (t) {
                var n = C(this).constructor;
                r = Reflect.construct(i, arguments, n);
              } else r = i.apply(this, arguments);
              return (function (e, t) {
                if (t && ("object" === O(t) || "function" == typeof t))
                  return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return P(e);
              })(this, r);
            };
          }
          function P(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return e;
          }
          function C(e) {
            return (C = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function E(e, t, r) {
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
          var I = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && j(e, t);
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
                E(
                  P((e = i.call.apply(i, [this].concat(r)))),
                  "disabledYearsCache",
                  {},
                ),
                E(P(e), "_updateSelectedYear", function (t) {
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
                    return l.a.createElement(
                      "div",
                      { className: "rdtYears" },
                      l.a.createElement(
                        "table",
                        null,
                        l.a.createElement(
                          "thead",
                          null,
                          this.renderNavigation(),
                        ),
                      ),
                      l.a.createElement(
                        "table",
                        null,
                        l.a.createElement("tbody", null, this.renderYears()),
                      ),
                    );
                  },
                },
                {
                  key: "renderNavigation",
                  value: function () {
                    var e = this,
                      t = this.getViewYear();
                    return l.a.createElement(u, {
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
                      D(t, r - e).push(this.renderYear(r));
                    return t.map(function (e, t) {
                      return l.a.createElement("tr", { key: t }, e);
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
              ]) && W(t.prototype, r),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              n
            );
          })(l.a.Component);
          function D(e, t) {
            return t < 3 ? e[0] : t < 7 ? e[1] : e[2];
          }
          function X(e) {
            return (X =
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
          function U(e, t) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          function k(e, t) {
            return (k = Object.setPrototypeOf
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
                i = A(e);
              if (t) {
                var n = A(this).constructor;
                r = Reflect.construct(i, arguments, n);
              } else r = i.apply(this, arguments);
              return (function (e, t) {
                if (t && ("object" === X(t) || "function" == typeof t))
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
          function A(e) {
            return (A = Object.setPrototypeOf
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
          function G(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? N(Object(r), !0).forEach(function (t) {
                    q(e, t, r[t]);
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
          function q(e, t, r) {
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
          E(I, "defaultProps", {
            renderYear: function (e, t) {
              return l.a.createElement("td", e, t);
            },
          });
          var V = {
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
                  t && k(e, t);
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
                    Object.keys(V).forEach(function (e) {
                      a[e] = G(G({}, V[e]), r[e] || {});
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
                              l.a.createElement(
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
                        l.a.createElement(
                          "div",
                          { className: "rdtTime" },
                          l.a.createElement(
                            "table",
                            null,
                            this.renderHeader(),
                            l.a.createElement(
                              "tbody",
                              null,
                              l.a.createElement(
                                "tr",
                                null,
                                l.a.createElement(
                                  "td",
                                  null,
                                  l.a.createElement(
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
                        l.a.createElement(
                          "div",
                          { key: e, className: "rdtCounter" },
                          l.a.createElement(
                            "span",
                            {
                              className: "rdtBtn",
                              onMouseDown: function (t) {
                                return r.onStartClicking(t, "increase", e);
                              },
                            },
                            "▲",
                          ),
                          l.a.createElement(
                            "div",
                            { className: "rdtCount" },
                            t,
                          ),
                          l.a.createElement(
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
                        return l.a.createElement(
                          "thead",
                          null,
                          l.a.createElement(
                            "tr",
                            null,
                            l.a.createElement(
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
                        r > t.max && (r = t.min + (r - (t.max + 1))), K(e, r)
                      );
                    },
                  },
                  {
                    key: "decrease",
                    value: function (e) {
                      var t = this.constraints[e],
                        r = parseInt(this.state[e], 10) - t.step;
                      return (
                        r < t.min && (r = t.max + 1 - (t.min - r)), K(e, r)
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
                        hours: K("hours", t),
                        minutes: K("minutes", e.minutes()),
                        seconds: K("seconds", e.seconds()),
                        milliseconds: K("milliseconds", e.milliseconds()),
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
                ]) && U(t.prototype, r),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                n
              );
            })(l.a.Component);
          function K(e, t) {
            for (
              var r = { hours: 1, minutes: 2, seconds: 2, milliseconds: 3 },
                i = t + "";
              i.length < r[e];

            )
              i = "0" + i;
            return i;
          }
          var H = r(2);
          function Y(e, t) {
            return (Y =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function $(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return e;
          }
          function Z(e, t, r) {
            return (
              e === t ||
              (e.correspondingElement
                ? e.correspondingElement.classList.contains(r)
                : e.classList.contains(r))
            );
          }
          var Q,
            J,
            ee =
              (void 0 === Q && (Q = 0),
              function () {
                return ++Q;
              }),
            te = {},
            re = {},
            ie = ["touchstart", "touchmove"];
          function ne(e, t) {
            var r = null;
            return (
              -1 !== ie.indexOf(t) &&
                J &&
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
                    be(e, t, r[t]);
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
          function le(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function ce(e, t) {
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
              t && ce(e.prototype, t),
              r && ce(e, r),
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
                i = fe(e);
              if (t) {
                var n = fe(this).constructor;
                r = Reflect.construct(i, arguments, n);
              } else r = i.apply(this, arguments);
              return (function (e, t) {
                if (t && ("object" === ae(t) || "function" == typeof t))
                  return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return Be(e);
              })(this, r);
            };
          }
          function Be(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return e;
          }
          function fe(e) {
            return (fe = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function be(e, t, r) {
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
            return Fe;
          });
          var pe = "years",
            ge = "months",
            we = "days",
            _e = "time",
            he = n.a,
            ze = function () {},
            Me = he.oneOfType([
              he.instanceOf(s.a),
              he.instanceOf(Date),
              he.string,
            ]),
            Fe = (function (e) {
              me(r, e);
              var t = ye(r);
              function r(e) {
                var i;
                return (
                  le(this, r),
                  be(Be((i = t.call(this, e))), "_renderCalendar", function () {
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
                      case pe:
                        return (
                          (r.renderYear = e.renderYear), l.a.createElement(I, r)
                        );
                      case ge:
                        return (
                          (r.renderMonth = e.renderMonth),
                          l.a.createElement(v, r)
                        );
                      case we:
                        return (
                          (r.renderDay = e.renderDay),
                          (r.timeFormat = i.getFormat("time")),
                          l.a.createElement(g, r)
                        );
                      default:
                        return (
                          (r.dateFormat = i.getFormat("date")),
                          (r.timeFormat = i.getFormat("time")),
                          (r.timeConstraints = e.timeConstraints),
                          (r.setTime = i._setTime),
                          l.a.createElement(L, r)
                        );
                    }
                  }),
                  be(Be(i), "_showView", function (e, t) {
                    var r = (t || i.state.viewDate).clone(),
                      n = i.props.onBeforeNavigate(e, i.state.currentView, r);
                    n &&
                      i.state.currentView !== n &&
                      (i.props.onNavigate(n), i.setState({ currentView: n }));
                  }),
                  be(Be(i), "viewToMethod", {
                    days: "date",
                    months: "month",
                    years: "year",
                  }),
                  be(Be(i), "nextView", {
                    days: "time",
                    months: "days",
                    years: "months",
                  }),
                  be(Be(i), "_updateDate", function (e) {
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
                  be(Be(i), "_viewNavigate", function (e, t) {
                    var r = i.state.viewDate.clone();
                    r.add(e, t),
                      e > 0
                        ? i.props.onNavigateForward(e, t)
                        : i.props.onNavigateBack(-e, t),
                      i.setState({ viewDate: r });
                  }),
                  be(Be(i), "_setTime", function (e, t) {
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
                  be(Be(i), "_openCalendar", function () {
                    i.isOpen() || i.setState({ open: !0 }, i.props.onOpen);
                  }),
                  be(Be(i), "_closeCalendar", function () {
                    i.isOpen() &&
                      i.setState({ open: !1 }, function () {
                        i.props.onClose(
                          i.state.selectedDate || i.state.inputValue,
                        );
                      });
                  }),
                  be(Be(i), "_handleClickOutside", function () {
                    var e = i.props;
                    e.input &&
                      i.state.open &&
                      void 0 === e.open &&
                      e.closeOnClickOutside &&
                      i._closeCalendar();
                  }),
                  be(Be(i), "_onInputFocus", function (e) {
                    i.callHandler(i.props.inputProps.onFocus, e) &&
                      i._openCalendar();
                  }),
                  be(Be(i), "_onInputChange", function (e) {
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
                  be(Be(i), "_onInputKeyDown", function (e) {
                    i.callHandler(i.props.inputProps.onKeyDown, e) &&
                      9 === e.which &&
                      i.props.closeOnTab &&
                      i._closeCalendar();
                  }),
                  be(Be(i), "_onInputClick", function (e) {
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
                      return l.a.createElement(
                        ve,
                        {
                          className: this.getClassName(),
                          onClickOut: this._handleClickOutside,
                        },
                        this.renderInput(),
                        l.a.createElement(
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
                          ? l.a.createElement(
                              "div",
                              null,
                              this.props.renderInput(
                                e,
                                this._openCalendar,
                                this._closeCalendar,
                              ),
                            )
                          : l.a.createElement("input", e);
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
                        Re(
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
                      return e ? this.getUpdateOn(e) : _e;
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
                        ? we
                        : -1 !== e.indexOf("M")
                        ? ge
                        : -1 !== e.indexOf("Y")
                        ? pe
                        : we;
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
                        Re(
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
                        : Re(
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
            })(l.a.Component);
          function Re(e, t) {
            var r = "undefined" != typeof window && window.console;
            r && (t || (t = "warn"), r[t]("***react-datetime:" + e));
          }
          be(Fe, "propTypes", {
            value: Me,
            initialValue: Me,
            initialViewDate: Me,
            initialViewMode: he.oneOf([pe, ge, we, _e]),
            onOpen: he.func,
            onClose: he.func,
            onChange: he.func,
            onNavigate: he.func,
            onBeforeNavigate: he.func,
            onNavigateBack: he.func,
            onNavigateForward: he.func,
            updateOnView: he.string,
            locale: he.string,
            utc: he.bool,
            displayTimeZone: he.string,
            input: he.bool,
            dateFormat: he.oneOfType([he.string, he.bool]),
            timeFormat: he.oneOfType([he.string, he.bool]),
            inputProps: he.object,
            timeConstraints: he.object,
            isValidDate: he.func,
            open: he.bool,
            strictParsing: he.bool,
            closeOnSelect: he.bool,
            closeOnTab: he.bool,
            renderView: he.func,
            renderInput: he.func,
            renderDay: he.func,
            renderMonth: he.func,
            renderYear: he.func,
          }),
            be(Fe, "defaultProps", {
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
            be(Fe, "moment", s.a);
          var ve = (function (e, t) {
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
                          void 0 === J &&
                            (J = (function () {
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
                                      if (e.parentNode && Z(e, t, r)) return !0;
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
                                ne($(i), e),
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
                                ne($(i), t),
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
                    Y(i, a);
                  var l = s.prototype;
                  return (
                    (l.getInstance = function () {
                      if (e.prototype && !e.prototype.isReactComponent)
                        return this;
                      var t = this.instanceRef;
                      return t.getInstance ? t.getInstance() : t;
                    }),
                    (l.componentDidMount = function () {
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
                    (l.componentDidUpdate = function () {
                      this.componentNode = this.__getComponentNode();
                    }),
                    (l.componentWillUnmount = function () {
                      this.disableOnClickOutside();
                    }),
                    (l.render = function () {
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
                le(this, r);
                for (
                  var i = arguments.length, n = new Array(i), a = 0;
                  a < i;
                  a++
                )
                  n[a] = arguments[a];
                return (
                  be(
                    Be((e = t.call.apply(t, [this].concat(n)))),
                    "container",
                    l.a.createRef(),
                  ),
                  e
                );
              }
              return (
                ue(r, [
                  {
                    key: "render",
                    value: function () {
                      return l.a.createElement(
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
            })(l.a.Component),
          );
        },
      ]);
    },
    82182: (e, t, r) => {
      "use strict";
      r.d(t, {
        AP: () => wt,
        No: () => Mt,
        Oz: () => Ft,
        Sv: () => ue,
        bM: () => nt,
        lk: () => Gt,
        n8: () => gt,
      });
      var i = r(10059),
        n = r(39087),
        a = r(21928),
        s = r(23722);
      const o = i.Message;
      class l extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.min_last_played || n.aR(l.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  min_last_played: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Request";
        }
      }
      class c extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.games || n.aR(c.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: { games: { n: 1, c: u, r: !0, q: !0 } },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response";
        }
      }
      class u extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.appid || n.aR(u.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
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
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response_Game";
        }
      }
      class m extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.steamids || n.aR(m.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
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
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Request";
        }
      }
      class d extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.accounts || n.aR(d.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: { accounts: { n: 1, c: y, r: !0, q: !0 } },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response";
        }
      }
      class y extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.public_data || n.aR(y.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  public_data: { n: 1, c: B },
                  private_data: { n: 2, c: f },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails";
        }
      }
      class B extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.steamid || n.aR(B.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
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
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData";
        }
      }
      class f extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.persona_state || n.aR(f.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
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
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData";
        }
      }
      class b extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new b();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMutualFriendsForIncomingInvites_Request";
        }
      }
      class p extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.steamid || n.aR(p.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
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
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IncomingInviteMutualFriendList";
        }
      }
      class g extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.incoming_invite_mutual_friends_lists || n.aR(g.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  incoming_invite_mutual_friends_lists: {
                    n: 1,
                    c: p,
                    r: !0,
                    q: !0,
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
          return "CPlayer_GetMutualFriendsForIncomingInvites_Response";
        }
      }
      class w extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.steamid || n.aR(w.M()),
            o.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
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
          return "CPlayer_GetOwnedGames_Request";
        }
      }
      class _ extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.game_count || n.aR(_.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  game_count: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  games: { n: 2, c: h, r: !0, q: !0 },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response";
        }
      }
      class h extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.appid || n.aR(h.M()),
            o.initialize(this, e, 0, -1, [18], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
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
          return "CPlayer_GetOwnedGames_Response_Game";
        }
      }
      class z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.max_age_seconds || n.aR(z.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
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
          return "CPlayer_GetPlayNext_Request";
        }
      }
      class M extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.last_update_time || n.aR(M.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
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
          return "CPlayer_GetPlayNext_Response";
        }
      }
      class F extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.play_sessions || n.aR(F.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: { play_sessions: { n: 3, c: R, r: !0, q: !0 } },
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
          return "CPlayer_RecordDisconnectedPlaytime_Request";
        }
      }
      class R extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.appid || n.aR(R.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
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
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory";
        }
      }
      class v extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new v();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Response";
        }
      }
      class S extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.appid || n.aR(S.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
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
          return "CPlayer_GetGameBadgeLevels_Request";
        }
      }
      class O extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.player_level || n.aR(O.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  player_level: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  badges: { n: 2, c: W, r: !0, q: !0 },
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
          return "CPlayer_GetGameBadgeLevels_Response";
        }
      }
      class W extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.level || n.aR(W.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
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
          return "CPlayer_GetGameBadgeLevels_Response_Badge";
        }
      }
      class j extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.communityitemid || n.aR(j.M()),
            o.initialize(this, e, 0, -1, [15], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
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
                  profile_colors: { n: 15, c: T, r: !0, q: !0 },
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
          return "ProfileItem";
        }
      }
      class T extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.style_name || n.aR(T.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  style_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  color: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
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
          return "ProfileItem_ProfileColor";
        }
      }
      class P extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.steamid || n.aR(P.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
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
          return "CPlayer_GetProfileBackground_Request";
        }
      }
      class C extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.profile_background || n.aR(C.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: { profile_background: { n: 1, c: j } },
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
          return "CPlayer_GetProfileBackground_Response";
        }
      }
      class E extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.communityitemid || n.aR(E.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
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
          return "CPlayer_SetProfileBackground_Request";
        }
      }
      class I extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new I();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Response";
        }
      }
      class D extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.steamid || n.aR(D.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
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
          return "CPlayer_GetMiniProfileBackground_Request";
        }
      }
      class X extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.profile_background || n.aR(X.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: { profile_background: { n: 1, c: j } },
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
          return "CPlayer_GetMiniProfileBackground_Response";
        }
      }
      class U extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.communityitemid || n.aR(U.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = n.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Request";
        }
      }
      class k extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Response";
        }
      }
      class x extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.steamid || n.aR(x.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
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
          return "CPlayer_GetAvatarFrame_Request";
        }
      }
      class A extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.avatar_frame || n.aR(A.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = { proto: A, fields: { avatar_frame: { n: 1, c: j } } }),
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
          return "CPlayer_GetAvatarFrame_Response";
        }
      }
      class N extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.communityitemid || n.aR(N.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
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
          return "CPlayer_SetAvatarFrame_Request";
        }
      }
      class G extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new G();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Response";
        }
      }
      class q extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.steamid || n.aR(q.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
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
          return "CPlayer_GetAnimatedAvatar_Request";
        }
      }
      class V extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.avatar || n.aR(V.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = { proto: V, fields: { avatar: { n: 1, c: j } } }),
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
          return "CPlayer_GetAnimatedAvatar_Response";
        }
      }
      class L extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.communityitemid || n.aR(L.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = n.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(L.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Request";
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
          return "CPlayer_SetAnimatedAvatar_Response";
        }
      }
      class H extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.steamid || n.aR(H.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
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
          return "CPlayer_GetSteamDeckKeyboardSkin_Request";
        }
      }
      class Y extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.steam_deck_keyboard_skin || n.aR(Y.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: { steam_deck_keyboard_skin: { n: 1, c: j } },
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
          return "CPlayer_GetSteamDeckKeyboardSkin_Response";
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
          return "CPlayer_SetSteamDeckKeyboardSkin_Request";
        }
      }
      class Z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Z();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Response";
        }
      }
      class Q extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.language || n.aR(Q.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
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
          return "CPlayer_GetProfileItemsOwned_Request";
        }
      }
      class J extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.profile_backgrounds || n.aR(J.M()),
            o.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6, 7], null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  profile_backgrounds: { n: 1, c: j, r: !0, q: !0 },
                  mini_profile_backgrounds: { n: 2, c: j, r: !0, q: !0 },
                  avatar_frames: { n: 3, c: j, r: !0, q: !0 },
                  animated_avatars: { n: 4, c: j, r: !0, q: !0 },
                  profile_modifiers: { n: 5, c: j, r: !0, q: !0 },
                  steam_deck_keyboard_skins: { n: 6, c: j, r: !0, q: !0 },
                  steam_deck_startup_movies: { n: 7, c: j, r: !0, q: !0 },
                },
              }),
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
          return "CPlayer_GetProfileItemsOwned_Response";
        }
      }
      class ee extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.steamid || n.aR(ee.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = n.Bh(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ee.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Request";
        }
      }
      class te extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.profile_background || n.aR(te.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  profile_background: { n: 1, c: j },
                  mini_profile_background: { n: 2, c: j },
                  avatar_frame: { n: 3, c: j },
                  animated_avatar: { n: 4, c: j },
                  profile_modifier: { n: 5, c: j },
                  steam_deck_keyboard_skin: { n: 6, c: j },
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
          return "CPlayer_GetProfileItemsEquipped_Response";
        }
      }
      class re extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.communityitemid || n.aR(re.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  flags: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
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
          return "CPlayer_SetEquippedProfileItemFlags_Request";
        }
      }
      class ie extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ie();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetEquippedProfileItemFlags_Response";
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
          return "CPlayer_GetEmoticonList_Request";
        }
      }
      class ae extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.emoticons || n.aR(ae.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: { emoticons: { n: 1, c: se, r: !0, q: !0 } },
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
          return "CPlayer_GetEmoticonList_Response";
        }
      }
      class se extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.name || n.aR(se.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
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
          return "CPlayer_GetEmoticonList_Response_Emoticon";
        }
      }
      class oe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.steamid || n.aR(oe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  badgeid: { n: 2, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
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
          return "CPlayer_GetCommunityBadgeProgress_Request";
        }
      }
      class le extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.quests || n.aR(le.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: { quests: { n: 1, c: ce, r: !0, q: !0 } },
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
          return "CPlayer_GetCommunityBadgeProgress_Response";
        }
      }
      class ce extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.questid || n.aR(ce.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  questid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  completed: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = n.Bh(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ce.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityBadgeProgress_Response_Quest";
        }
      }
      class ue extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.appid || n.aR(ue.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  status_text: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
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
          return "CPlayer_PostStatusToFriends_Request";
        }
      }
      class me extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new me();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Response";
        }
      }
      class de extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.steamid || n.aR(de.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
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
          return "CPlayer_GetPostedStatus_Request";
        }
      }
      class ye extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.accountid || n.aR(ye.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
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
          return "CPlayer_GetPostedStatus_Response";
        }
      }
      class Be extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.postid || n.aR(Be.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  postid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = n.Bh(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Be.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_DeletePostedStatus_Request";
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
          return "CPlayer_DeletePostedStatus_Response";
        }
      }
      class be extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.steamid || n.aR(be.M()),
            o.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
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
          return "CPlayer_GetTopAchievementsForGames_Request";
        }
      }
      class pe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.games || n.aR(pe.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: { games: { n: 1, c: we, r: !0, q: !0 } },
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
          return "CPlayer_GetTopAchievementsForGames_Response";
        }
      }
      class ge extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.statid || n.aR(ge.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
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
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = n.Bh(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ge.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response_Achievement";
        }
      }
      class we extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.appid || n.aR(we.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  total_achievements: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  achievements: { n: 3, c: ge, r: !0, q: !0 },
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
          return "CPlayer_GetTopAchievementsForGames_Response_Game";
        }
      }
      class _e extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.steamid || n.aR(_e.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
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
          return "CPlayer_GetAchievementsProgress_Request";
        }
      }
      class he extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.achievement_progress || n.aR(he.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: { achievement_progress: { n: 1, c: ze, r: !0, q: !0 } },
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
          return "CPlayer_GetAchievementsProgress_Response";
        }
      }
      class ze extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.appid || n.aR(ze.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
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
          return "CPlayer_GetAchievementsProgress_Response_AchievementProgress";
        }
      }
      class Me extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.appid || n.aR(Me.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
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
          return "CPlayer_GetGameAchievements_Request";
        }
      }
      class Fe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.achievements || n.aR(Fe.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: { achievements: { n: 1, c: Re, r: !0, q: !0 } },
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
          return "CPlayer_GetGameAchievements_Response";
        }
      }
      class Re extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.internal_name || n.aR(Re.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
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
          return "CPlayer_GetGameAchievements_Response_Achievement";
        }
      }
      class ve extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.steamid || n.aR(ve.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = n.Bh(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ve.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFavoriteBadge_Request";
        }
      }
      class Se extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.has_favorite_badge || n.aR(Se.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
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
          return "CPlayer_GetFavoriteBadge_Response";
        }
      }
      class Oe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.communityitemid || n.aR(Oe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  badgeid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
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
          return "CPlayer_SetFavoriteBadge_Request";
        }
      }
      class We extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new We();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetFavoriteBadge_Response";
        }
      }
      class je extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.slot || n.aR(je.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
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
          return "ProfileCustomizationSlot";
        }
      }
      class Te extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.customization_type || n.aR(Te.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  customization_type: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  large: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                  slots: { n: 3, c: je, r: !0, q: !0 },
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
          return "ProfileCustomization";
        }
      }
      class Pe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.theme_id || n.aR(Pe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  theme_id: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  title: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
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
          return "ProfileTheme";
        }
      }
      class Ce extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.hide_profile_awards || n.aR(Ce.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  hide_profile_awards: {
                    n: 1,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
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
          return "ProfilePreferences";
        }
      }
      class Ee extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.steamid || n.aR(Ee.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
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
          return "CPlayer_GetProfileCustomization_Request";
        }
      }
      class Ie extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.customizations || n.aR(Ie.M()),
            o.initialize(this, e, 0, -1, [1, 4], null);
        }
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  customizations: { n: 1, c: Te, r: !0, q: !0 },
                  slots_available: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  profile_theme: { n: 3, c: Pe },
                  purchased_customizations: { n: 4, c: De, r: !0, q: !0 },
                  profile_preferences: { n: 5, c: Ce },
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
          return "CPlayer_GetProfileCustomization_Response";
        }
      }
      class De extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.purchaseid || n.aR(De.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
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
          return "CPlayer_GetProfileCustomization_Response_PurchasedCustomization";
        }
      }
      class Xe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xe.prototype.steamid || n.aR(Xe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
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
          return "CPlayer_GetPurchasedProfileCustomizations_Request";
        }
      }
      class Ue extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.purchased_customizations || n.aR(Ue.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  purchased_customizations: { n: 1, c: ke, r: !0, q: !0 },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = n.Bh(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ue.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response";
        }
      }
      class ke extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.purchaseid || n.aR(ke.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
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
          return "CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class xe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.steamid || n.aR(xe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
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
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request";
        }
      }
      class Ae extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.purchased_customizations || n.aR(Ae.M()),
            o.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  purchased_customizations: { n: 1, c: Ne, r: !0, q: !0 },
                  upgraded_customizations: { n: 2, c: Ge, r: !0, q: !0 },
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
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response";
        }
      }
      class Ne extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.customization_type || n.aR(Ne.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  customization_type: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  count: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
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
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class Ge extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.customization_type || n.aR(Ge.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  customization_type: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  level: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
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
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization";
        }
      }
      class qe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new qe();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileThemesAvailable_Request";
        }
      }
      class Ve extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ve.prototype.profile_themes || n.aR(Ve.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ve.sm_m ||
              (Ve.sm_m = {
                proto: Ve,
                fields: { profile_themes: { n: 1, c: Pe, r: !0, q: !0 } },
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
          return "CPlayer_GetProfileThemesAvailable_Response";
        }
      }
      class Le extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.theme_id || n.aR(Le.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  theme_id: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
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
          return "CPlayer_SetProfileTheme_Request";
        }
      }
      class Ke extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ke();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ke();
          return Ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileTheme_Response";
        }
      }
      class He extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            He.prototype.profile_preferences || n.aR(He.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: { profile_preferences: { n: 1, c: Ce } },
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
          return "CPlayer_SetProfilePreferences_Request";
        }
      }
      class Ye extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ye.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ye();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ye();
          return Ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfilePreferences_Response";
        }
      }
      class $e extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $e.prototype.appid || n.aR($e.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
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
          return "CPlayer_GetFriendsGameplayInfo_Request";
        }
      }
      class Ze extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ze.prototype.your_info || n.aR(Ze.M()),
            o.initialize(this, e, 0, -1, [2, 3, 4, 5, 6], null);
        }
        static M() {
          return (
            Ze.sm_m ||
              (Ze.sm_m = {
                proto: Ze,
                fields: {
                  your_info: { n: 1, c: Je },
                  in_game: { n: 2, c: Qe, r: !0, q: !0 },
                  played_recently: { n: 3, c: Qe, r: !0, q: !0 },
                  played_ever: { n: 4, c: Qe, r: !0, q: !0 },
                  owns: { n: 5, c: Qe, r: !0, q: !0 },
                  in_wishlist: { n: 6, c: Qe, r: !0, q: !0 },
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
          return "CPlayer_GetFriendsGameplayInfo_Response";
        }
      }
      class Qe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qe.prototype.steamid || n.aR(Qe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Qe.sm_m ||
              (Qe.sm_m = {
                proto: Qe,
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
          return "CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo";
        }
      }
      class Je extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Je.prototype.steamid || n.aR(Je.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Je.sm_m ||
              (Je.sm_m = {
                proto: Je,
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
            Je.sm_m
          );
        }
        static MBF() {
          return Je.sm_mbf || (Je.sm_mbf = n.Bh(Je.M())), Je.sm_mbf;
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Je.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Je();
          return Je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Je.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo";
        }
      }
      class et extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return et.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new et();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new et();
          return et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Request";
        }
      }
      class tt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            tt.prototype.time_ssa_accepted || n.aR(tt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            tt.sm_m ||
              (tt.sm_m = {
                proto: tt,
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
            tt.sm_m
          );
        }
        static MBF() {
          return tt.sm_mbf || (tt.sm_mbf = n.Bh(tt.M())), tt.sm_mbf;
        }
        toObject(e = !1) {
          return tt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(tt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new tt();
          return tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Response";
        }
      }
      class rt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            rt.prototype.agreement_type || n.aR(rt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            rt.sm_m ||
              (rt.sm_m = {
                proto: rt,
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
          return "CPlayer_AcceptSSA_Request";
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
          return "CPlayer_AcceptSSA_Response";
        }
      }
      class nt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return nt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new nt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new nt();
          return nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Request";
        }
      }
      class at extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            at.prototype.nicknames || n.aR(at.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            at.sm_m ||
              (at.sm_m = {
                proto: at,
                fields: { nicknames: { n: 1, c: st, r: !0, q: !0 } },
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
          return "CPlayer_GetNicknameList_Response";
        }
      }
      class st extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            st.prototype.accountid || n.aR(st.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            st.sm_m ||
              (st.sm_m = {
                proto: st,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readFixed32,
                    bw: n.Xc.writeFixed32,
                  },
                  nickname: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
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
          return "CPlayer_GetNicknameList_Response_PlayerNickname";
        }
      }
      class ot extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ot.prototype.accountid || n.aR(ot.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ot.sm_m ||
              (ot.sm_m = {
                proto: ot,
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
          return "PerFriendPreferences";
        }
      }
      class lt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return lt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new lt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new lt();
          return lt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return lt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Request";
        }
      }
      class ct extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ct.prototype.preferences || n.aR(ct.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ct.sm_m ||
              (ct.sm_m = {
                proto: ct,
                fields: { preferences: { n: 1, c: ot, r: !0, q: !0 } },
              }),
            ct.sm_m
          );
        }
        static MBF() {
          return ct.sm_mbf || (ct.sm_mbf = n.Bh(ct.M())), ct.sm_mbf;
        }
        toObject(e = !1) {
          return ct.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ct.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ct.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ct();
          return ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ct.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ct.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Response";
        }
      }
      class ut extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ut.prototype.preferences || n.aR(ut.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ut.sm_m ||
              (ut.sm_m = {
                proto: ut,
                fields: { preferences: { n: 1, c: ot } },
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
          return "CPlayer_SetPerFriendPreferences_Request";
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
          return "CPlayer_SetPerFriendPreferences_Response";
        }
      }
      class dt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            dt.prototype.steamid || n.aR(dt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            dt.sm_m ||
              (dt.sm_m = {
                proto: dt,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            dt.sm_m
          );
        }
        static MBF() {
          return dt.sm_mbf || (dt.sm_mbf = n.Bh(dt.M())), dt.sm_mbf;
        }
        toObject(e = !1) {
          return dt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(dt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(dt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new dt();
          return dt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(dt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(dt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return dt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AddFriend_Request";
        }
      }
      class yt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            yt.prototype.invite_sent || n.aR(yt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            yt.sm_m ||
              (yt.sm_m = {
                proto: yt,
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
          return "CPlayer_AddFriend_Response";
        }
      }
      class Bt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Bt.prototype.steamid || n.aR(Bt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Bt.sm_m ||
              (Bt.sm_m = {
                proto: Bt,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
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
          return "CPlayer_RemoveFriend_Request";
        }
      }
      class ft extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ft.prototype.friend_relationship || n.aR(ft.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ft.sm_m ||
              (ft.sm_m = {
                proto: ft,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
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
          return "CPlayer_RemoveFriend_Response";
        }
      }
      class bt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            bt.prototype.steamid || n.aR(bt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            bt.sm_m ||
              (bt.sm_m = {
                proto: bt,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  unignore: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
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
          return "CPlayer_IgnoreFriend_Request";
        }
      }
      class pt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pt.prototype.friend_relationship || n.aR(pt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            pt.sm_m ||
              (pt.sm_m = {
                proto: pt,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            pt.sm_m
          );
        }
        static MBF() {
          return pt.sm_mbf || (pt.sm_mbf = n.Bh(pt.M())), pt.sm_mbf;
        }
        toObject(e = !1) {
          return pt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(pt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(pt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new pt();
          return pt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(pt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(pt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return pt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IgnoreFriend_Response";
        }
      }
      class gt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            gt.prototype.parenthesize_nicknames || n.aR(gt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            gt.sm_m ||
              (gt.sm_m = {
                proto: gt,
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
            gt.sm_m
          );
        }
        static MBF() {
          return gt.sm_mbf || (gt.sm_mbf = n.Bh(gt.M())), gt.sm_mbf;
        }
        toObject(e = !1) {
          return gt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(gt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(gt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new gt();
          return gt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(gt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(gt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return gt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferences";
        }
      }
      class wt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return wt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new wt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new wt();
          return wt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return wt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Request";
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
                fields: {
                  preferences: { n: 1, c: gt },
                  content_descriptor_preferences: { n: 2, c: s.cF },
                },
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
          return "CPlayer_GetCommunityPreferences_Response";
        }
      }
      class ht extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ht.prototype.preferences || n.aR(ht.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ht.sm_m ||
              (ht.sm_m = {
                proto: ht,
                fields: { preferences: { n: 1, c: gt } },
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
          return "CPlayer_SetCommunityPreferences_Request";
        }
      }
      class zt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return zt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new zt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new zt();
          return zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetCommunityPreferences_Response";
        }
      }
      class Mt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mt.prototype.text_filter_custom_banned_words || n.aR(Mt.M()),
            o.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            Mt.sm_m ||
              (Mt.sm_m = {
                proto: Mt,
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
          return "CPlayer_TextFilterWords";
        }
      }
      class Ft extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ft.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ft();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ft();
          return Ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Request";
        }
      }
      class Rt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Rt.prototype.words || n.aR(Rt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Rt.sm_m ||
              (Rt.sm_m = { proto: Rt, fields: { words: { n: 1, c: Mt } } }),
            Rt.sm_m
          );
        }
        static MBF() {
          return Rt.sm_mbf || (Rt.sm_mbf = n.Bh(Rt.M())), Rt.sm_mbf;
        }
        toObject(e = !1) {
          return Rt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Rt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Rt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Rt();
          return Rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Response";
        }
      }
      class vt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            vt.prototype.language || n.aR(vt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            vt.sm_m ||
              (vt.sm_m = {
                proto: vt,
                fields: {
                  language: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
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
          return "CPlayer_GetNewSteamAnnouncementState_Request";
        }
      }
      class St extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            St.prototype.state || n.aR(St.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            St.sm_m ||
              (St.sm_m = {
                proto: St,
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
          return "CPlayer_GetNewSteamAnnouncementState_Response";
        }
      }
      class Ot extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ot.prototype.announcement_gid || n.aR(Ot.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ot.sm_m ||
              (Ot.sm_m = {
                proto: Ot,
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
          return "CPlayer_UpdateSteamAnnouncementLastRead_Request";
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
          return "CPlayer_UpdateSteamAnnouncementLastRead_Response";
        }
      }
      class jt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            jt.prototype.privacy_state || n.aR(jt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            jt.sm_m ||
              (jt.sm_m = {
                proto: jt,
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
          return "CPrivacySettings";
        }
      }
      class Tt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Tt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Tt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Tt();
          return Tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPrivacySettings_Request";
        }
      }
      class Pt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pt.prototype.privacy_settings || n.aR(Pt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Pt.sm_m ||
              (Pt.sm_m = {
                proto: Pt,
                fields: { privacy_settings: { n: 1, c: jt } },
              }),
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
          return "CPlayer_GetPrivacySettings_Response";
        }
      }
      class Ct extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ct.prototype.appid || n.aR(Ct.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ct.sm_m ||
              (Ct.sm_m = {
                proto: Ct,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
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
          return "CPlayer_GetDurationControl_Request";
        }
      }
      class Et extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Et.prototype.is_enabled || n.aR(Et.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Et.sm_m ||
              (Et.sm_m = {
                proto: Et,
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
            Et.sm_m
          );
        }
        static MBF() {
          return Et.sm_mbf || (Et.sm_mbf = n.Bh(Et.M())), Et.sm_mbf;
        }
        toObject(e = !1) {
          return Et.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Et.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Et.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Et();
          return Et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Et.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Et.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetDurationControl_Response";
        }
      }
      class It extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            It.prototype.games || n.aR(It.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            It.sm_m ||
              (It.sm_m = {
                proto: It,
                fields: { games: { n: 1, c: u, r: !0, q: !0 } },
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
          return "CPlayer_LastPlayedTimes_Notification";
        }
      }
      class Dt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Dt.prototype.accountid || n.aR(Dt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Dt.sm_m ||
              (Dt.sm_m = {
                proto: Dt,
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
          return "CPlayer_FriendNicknameChanged_Notification";
        }
      }
      class Xt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xt.prototype.accountid || n.aR(Xt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Xt.sm_m ||
              (Xt.sm_m = {
                proto: Xt,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readFixed32,
                    bw: n.Xc.writeFixed32,
                  },
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
          return "CPlayer_FriendEquippedProfileItemsChanged_Notification";
        }
      }
      class Ut extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ut.prototype.state || n.aR(Ut.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ut.sm_m ||
              (Ut.sm_m = {
                proto: Ut,
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
            Ut.sm_m
          );
        }
        static MBF() {
          return Ut.sm_mbf || (Ut.sm_mbf = n.Bh(Ut.M())), Ut.sm_mbf;
        }
        toObject(e = !1) {
          return Ut.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ut.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ut.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ut();
          return Ut.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ut.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ut.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_NewSteamAnnouncementState_Notification";
        }
      }
      class kt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            kt.prototype.preferences || n.aR(kt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            kt.sm_m ||
              (kt.sm_m = {
                proto: kt,
                fields: {
                  preferences: { n: 1, c: gt },
                  content_descriptor_preferences: { n: 2, c: s.cF },
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
          return "CPlayer_CommunityPreferencesChanged_Notification";
        }
      }
      class xt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xt.prototype.words || n.aR(xt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            xt.sm_m ||
              (xt.sm_m = { proto: xt, fields: { words: { n: 1, c: Mt } } }),
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
          return "CPlayer_TextFilterWordsChanged_Notification";
        }
      }
      class At extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            At.prototype.accountid || n.aR(At.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            At.sm_m ||
              (At.sm_m = {
                proto: At,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readFixed32,
                    bw: n.Xc.writeFixed32,
                  },
                  preferences: { n: 2, c: ot },
                },
              }),
            At.sm_m
          );
        }
        static MBF() {
          return At.sm_mbf || (At.sm_mbf = n.Bh(At.M())), At.sm_mbf;
        }
        toObject(e = !1) {
          return At.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(At.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(At.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new At();
          return At.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(At.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return At.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(At.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return At.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PerFriendPreferencesChanged_Notification";
        }
      }
      class Nt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nt.prototype.privacy_settings || n.aR(Nt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Nt.sm_m ||
              (Nt.sm_m = {
                proto: Nt,
                fields: { privacy_settings: { n: 1, c: jt } },
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
          return "CPlayer_PrivacySettingsChanged_Notification";
        }
      }
      var Gt, qt;
      !(function (e) {
        (e.GetPlayerLinkDetails = function (e, t) {
          return e.SendMsg(
            "Player.GetPlayerLinkDetails#1",
            (0, a.MD)(m, t),
            d,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetMutualFriendsForIncomingInvites = function (e, t) {
            return e.SendMsg(
              "Player.GetMutualFriendsForIncomingInvites#1",
              (0, a.MD)(b, t),
              g,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetOwnedGames = function (e, t) {
            return e.SendMsg("Player.GetOwnedGames#1", (0, a.MD)(w, t), _, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetPlayNext = function (e, t) {
            return e.SendMsg("Player.GetPlayNext#1", (0, a.MD)(z, t), M, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFriendsGameplayInfo = function (e, t) {
            return e.SendMsg(
              "Player.GetFriendsGameplayInfo#1",
              (0, a.MD)($e, t),
              Ze,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetGameBadgeLevels = function (e, t) {
            return e.SendMsg(
              "Player.GetGameBadgeLevels#1",
              (0, a.MD)(S, t),
              O,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetProfileBackground = function (e, t) {
            return e.SendMsg(
              "Player.GetProfileBackground#1",
              (0, a.MD)(P, t),
              C,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetProfileBackground = function (e, t) {
            return e.SendMsg(
              "Player.SetProfileBackground#1",
              (0, a.MD)(E, t),
              I,
              { ePrivilege: 1 },
            );
          }),
          (e.GetMiniProfileBackground = function (e, t) {
            return e.SendMsg(
              "Player.GetMiniProfileBackground#1",
              (0, a.MD)(D, t),
              X,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetMiniProfileBackground = function (e, t) {
            return e.SendMsg(
              "Player.SetMiniProfileBackground#1",
              (0, a.MD)(U, t),
              k,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAvatarFrame = function (e, t) {
            return e.SendMsg("Player.GetAvatarFrame#1", (0, a.MD)(x, t), A, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetAvatarFrame = function (e, t) {
            return e.SendMsg("Player.SetAvatarFrame#1", (0, a.MD)(N, t), G, {
              ePrivilege: 1,
            });
          }),
          (e.GetAnimatedAvatar = function (e, t) {
            return e.SendMsg("Player.GetAnimatedAvatar#1", (0, a.MD)(q, t), V, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetAnimatedAvatar = function (e, t) {
            return e.SendMsg("Player.SetAnimatedAvatar#1", (0, a.MD)(L, t), K, {
              ePrivilege: 1,
            });
          }),
          (e.GetSteamDeckKeyboardSkin = function (e, t) {
            return e.SendMsg(
              "Player.GetSteamDeckKeyboardSkin#1",
              (0, a.MD)(H, t),
              Y,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetSteamDeckKeyboardSkin = function (e, t) {
            return e.SendMsg(
              "Player.SetSteamDeckKeyboardSkin#1",
              (0, a.MD)($, t),
              Z,
              { ePrivilege: 1 },
            );
          }),
          (e.GetProfileItemsOwned = function (e, t) {
            return e.SendMsg(
              "Player.GetProfileItemsOwned#1",
              (0, a.MD)(Q, t),
              J,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetProfileItemsEquipped = function (e, t) {
            return e.SendMsg(
              "Player.GetProfileItemsEquipped#1",
              (0, a.MD)(ee, t),
              te,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetEquippedProfileItemFlags = function (e, t) {
            return e.SendMsg(
              "Player.SetEquippedProfileItemFlags#1",
              (0, a.MD)(re, t),
              ie,
              { ePrivilege: 1 },
            );
          }),
          (e.GetEmoticonList = function (e, t) {
            return e.SendMsg("Player.GetEmoticonList#1", (0, a.MD)(ne, t), ae, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetCommunityBadgeProgress = function (e, t) {
            return e.SendMsg(
              "Player.GetCommunityBadgeProgress#1",
              (0, a.MD)(oe, t),
              le,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetTopAchievementsForGames = function (e, t) {
            return e.SendMsg(
              "Player.GetTopAchievementsForGames#1",
              (0, a.MD)(be, t),
              pe,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetAchievementsProgress = function (e, t) {
            return e.SendMsg(
              "Player.GetAchievementsProgress#1",
              (0, a.MD)(_e, t),
              he,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetGameAchievements = function (e, t) {
            return e.SendMsg(
              "Player.GetGameAchievements#1",
              (0, a.MD)(Me, t),
              Fe,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetFavoriteBadge = function (e, t) {
            return e.SendMsg(
              "Player.GetFavoriteBadge#1",
              (0, a.MD)(ve, t),
              Se,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetFavoriteBadge = function (e, t) {
            return e.SendMsg(
              "Player.SetFavoriteBadge#1",
              (0, a.MD)(Oe, t),
              We,
              { ePrivilege: 1 },
            );
          }),
          (e.GetProfileCustomization = function (e, t) {
            return e.SendMsg(
              "Player.GetProfileCustomization#1",
              (0, a.MD)(Ee, t),
              Ie,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPurchasedProfileCustomizations = function (e, t) {
            return e.SendMsg(
              "Player.GetPurchasedProfileCustomizations#1",
              (0, a.MD)(Xe, t),
              Ue,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPurchasedAndUpgradedProfileCustomizations = function (e, t) {
            return e.SendMsg(
              "Player.GetPurchasedAndUpgradedProfileCustomizations#1",
              (0, a.MD)(xe, t),
              Ae,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetProfileThemesAvailable = function (e, t) {
            return e.SendMsg(
              "Player.GetProfileThemesAvailable#1",
              (0, a.MD)(qe, t),
              Ve,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetProfileTheme = function (e, t) {
            return e.SendMsg("Player.SetProfileTheme#1", (0, a.MD)(Le, t), Ke, {
              ePrivilege: 1,
            });
          }),
          (e.SetProfilePreferences = function (e, t) {
            return e.SendMsg(
              "Player.SetProfilePreferences#1",
              (0, a.MD)(He, t),
              Ye,
              { ePrivilege: 1 },
            );
          }),
          (e.PostStatusToFriends = function (e, t) {
            return e.SendMsg(
              "Player.PostStatusToFriends#1",
              (0, a.MD)(ue, t),
              me,
              { ePrivilege: 3 },
            );
          }),
          (e.GetPostedStatus = function (e, t) {
            return e.SendMsg("Player.GetPostedStatus#1", (0, a.MD)(de, t), ye, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.DeletePostedStatus = function (e, t) {
            return e.SendMsg(
              "Player.DeletePostedStatus#1",
              (0, a.MD)(Be, t),
              fe,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetLastPlayedTimes = function (e, t) {
            return e.SendMsg(
              "Player.ClientGetLastPlayedTimes#1",
              (0, a.MD)(l, t),
              c,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetTimeSSAAccepted = function (e, t) {
            return e.SendMsg(
              "Player.GetTimeSSAAccepted#1",
              (0, a.MD)(et, t),
              tt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.AcceptSSA = function (e, t) {
            return e.SendMsg("Player.AcceptSSA#1", (0, a.MD)(rt, t), it, {
              ePrivilege: 1,
            });
          }),
          (e.GetNicknameList = function (e, t) {
            return e.SendMsg("Player.GetNicknameList#1", (0, a.MD)(nt, t), at, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetPerFriendPreferences = function (e, t) {
            return e.SendMsg(
              "Player.GetPerFriendPreferences#1",
              (0, a.MD)(lt, t),
              ct,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetPerFriendPreferences = function (e, t) {
            return e.SendMsg(
              "Player.SetPerFriendPreferences#1",
              (0, a.MD)(ut, t),
              mt,
              { ePrivilege: 1 },
            );
          }),
          (e.AddFriend = function (e, t) {
            return e.SendMsg("Player.AddFriend#1", (0, a.MD)(dt, t), yt, {
              ePrivilege: 1,
            });
          }),
          (e.RemoveFriend = function (e, t) {
            return e.SendMsg("Player.RemoveFriend#1", (0, a.MD)(Bt, t), ft, {
              ePrivilege: 1,
            });
          }),
          (e.IgnoreFriend = function (e, t) {
            return e.SendMsg("Player.IgnoreFriend#1", (0, a.MD)(bt, t), pt, {
              ePrivilege: 1,
            });
          }),
          (e.GetCommunityPreferences = function (e, t) {
            return e.SendMsg(
              "Player.GetCommunityPreferences#1",
              (0, a.MD)(wt, t),
              _t,
              { ePrivilege: 1 },
            );
          }),
          (e.SetCommunityPreferences = function (e, t) {
            return e.SendMsg(
              "Player.SetCommunityPreferences#1",
              (0, a.MD)(ht, t),
              zt,
              { ePrivilege: 1 },
            );
          }),
          (e.GetTextFilterWords = function (e, t) {
            return e.SendMsg(
              "Player.GetTextFilterWords#1",
              (0, a.MD)(Ft, t),
              Rt,
              { ePrivilege: 1 },
            );
          }),
          (e.GetNewSteamAnnouncementState = function (e, t) {
            return e.SendMsg(
              "Player.GetNewSteamAnnouncementState#1",
              (0, a.MD)(vt, t),
              St,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.UpdateSteamAnnouncementLastRead = function (e, t) {
            return e.SendMsg(
              "Player.UpdateSteamAnnouncementLastRead#1",
              (0, a.MD)(Ot, t),
              Wt,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPrivacySettings = function (e, t) {
            return e.SendMsg(
              "Player.GetPrivacySettings#1",
              (0, a.MD)(Tt, t),
              Pt,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDurationControl = function (e, t) {
            return e.SendMsg(
              "Player.GetDurationControl#1",
              (0, a.MD)(Ct, t),
              Et,
              { ePrivilege: 1 },
            );
          }),
          (e.RecordDisconnectedPlaytime = function (e, t) {
            return e.SendMsg(
              "Player.RecordDisconnectedPlaytime#1",
              (0, a.MD)(F, t),
              v,
              { ePrivilege: 1 },
            );
          });
      })(Gt || (Gt = {})),
        (function (e) {
          (e.NotifyLastPlayedTimesHandler = {
            name: "PlayerClient.NotifyLastPlayedTimes#1",
            request: It,
          }),
            (e.NotifyFriendNicknameChangedHandler = {
              name: "PlayerClient.NotifyFriendNicknameChanged#1",
              request: Dt,
            }),
            (e.NotifyFriendEquippedProfileItemsChangedHandler = {
              name: "PlayerClient.NotifyFriendEquippedProfileItemsChanged#1",
              request: Xt,
            }),
            (e.NotifyNewSteamAnnouncementStateHandler = {
              name: "PlayerClient.NotifyNewSteamAnnouncementState#1",
              request: Ut,
            }),
            (e.NotifyCommunityPreferencesChangedHandler = {
              name: "PlayerClient.NotifyCommunityPreferencesChanged#1",
              request: kt,
            }),
            (e.NotifyTextFilterWordsChangedHandler = {
              name: "PlayerClient.NotifyTextFilterWordsChanged#1",
              request: xt,
            }),
            (e.NotifyPerFriendPreferencesChangedHandler = {
              name: "PlayerClient.NotifyPerFriendPreferencesChanged#1",
              request: At,
            }),
            (e.NotifyPrivacyPrivacySettingsChangedHandler = {
              name: "PlayerClient.NotifyPrivacyPrivacySettingsChanged#1",
              request: Nt,
            });
        })(qt || (qt = {}));
    },
  },
]);
