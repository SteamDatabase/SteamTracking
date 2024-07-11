/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4253],
  {
    58632: (e) => {
      var t,
        n = (function () {
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
                var n = e && e.maxBatchSize;
                if (void 0 === n) return 1 / 0;
                if ("number" != typeof n || n < 1)
                  throw new TypeError(
                    "maxBatchSize must be a positive number: " + n,
                  );
                return n;
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
                var n = e && e.cacheMap;
                if (void 0 === n) return new Map();
                if (null !== n) {
                  var i = ["get", "set", "delete", "clear"].filter(
                    function (e) {
                      return n && "function" != typeof n[e];
                    },
                  );
                  if (0 !== i.length)
                    throw new TypeError(
                      "Custom cacheMap missing methods: " + i.join(", "),
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
                  var n = { hasDispatched: !1, keys: [], callbacks: [] };
                  return (
                    (e._batch = n),
                    e._batchScheduleFn(function () {
                      !(function (e, t) {
                        if (((t.hasDispatched = !0), 0 === t.keys.length))
                          return void a(t);
                        var n;
                        try {
                          n = e._batchLoadFn(t.keys);
                        } catch (n) {
                          return r(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " +
                                String(n) +
                                ".",
                            ),
                          );
                        }
                        if (!n || "function" != typeof n.then)
                          return r(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                String(n) +
                                ".",
                            ),
                          );
                        n.then(function (e) {
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
                          for (var n = 0; n < t.callbacks.length; n++) {
                            var i = e[n];
                            i instanceof Error
                              ? t.callbacks[n].reject(i)
                              : t.callbacks[n].resolve(i);
                          }
                        }).catch(function (n) {
                          r(e, t, n);
                        });
                      })(e, n);
                    }),
                    n
                  );
                })(this),
                n = this._cacheMap,
                i = this._cacheKeyFn(e);
              if (n) {
                var o = n.get(i);
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
              var c = new Promise(function (e, n) {
                t.callbacks.push({ resolve: e, reject: n });
              });
              return n && n.set(i, c), c;
            }),
            (t.loadMany = function (e) {
              if (!s(e))
                throw new TypeError(
                  "The loader.loadMany() function must be called with Array<key> but got: " +
                    e +
                    ".",
                );
              for (var t = [], n = 0; n < e.length; n++)
                t.push(
                  this.load(e[n]).catch(function (e) {
                    return e;
                  }),
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
                var i,
                  r = this._cacheKeyFn(e);
                if (void 0 === n.get(r))
                  t instanceof Error
                    ? (i = Promise.reject(t)).catch(function () {})
                    : (i = Promise.resolve(t)),
                    n.set(r, i);
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
      function r(e, t, n) {
        a(t);
        for (var i = 0; i < t.keys.length; i++)
          e.clear(t.keys[i]), t.callbacks[i].reject(n);
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
      e.exports = n;
    },
    65731: (e, t, n) => {
      n.d(t, {
        Ap: () => tt,
        CC: () => Se,
        Yc: () => G,
        Yw: () => A,
        _X: () => le,
        cL: () => _e,
        gi: () => te,
        q7: () => Ke,
      });
      var i = n(90626);
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                c(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function l(e, t, n) {
        return (
          t && o(e.prototype, t),
          n && o(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      function d(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && p(e, t);
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, t) {
        return (p = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function b(e, t) {
        if (null == e) return {};
        var n,
          i,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              r = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++)
              (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (n = a[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function S(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function m(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
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
          var n,
            i = h(e);
          if (t) {
            var r = h(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" == typeof t || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return S(e);
          })(this, n);
        };
      }
      function f(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return v(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return v(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? v(e, t)
                    : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function g(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
      }
      function y() {}
      function k() {}
      function O(e) {
        return e
          .map(function (e) {
            return !1 === e ? null : e;
          })
          .join(" ")
          .replace(/\s+/g, " ")
          .trim();
      }
      function w(e, t) {
        return ((100 / e) * t) / t;
      }
      function T(e, t) {
        return (100 * e) / t;
      }
      function _(e) {
        return "".concat(e, "%");
      }
      function M(e, t, n) {
        if (e === t) return !0;
        var i = U[W(e)],
          r = U[W(t)];
        return !(!i || i !== r) && i(e, t, n);
      }
      function C(e) {
        return function (t, n, i) {
          if (!i) return e(t, n, []);
          for (var r, a = i.length; (r = i[--a]); )
            if (r[0] === t && r[1] === n) return !0;
          return e(t, n, i);
        };
      }
      function E(e) {
        var t = [];
        for (var n in e) "constructor" !== n && t.push(n);
        return t;
      }
      function P(e) {
        var t = Object.prototype.toString.call(e);
        return (
          "[object RegExp]" === t ||
          "[object Date]" === t ||
          (function (e) {
            return e.$$typeof === Z;
          })(e)
        );
      }
      function N(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? x(
              (function (e) {
                return Array.isArray(e) ? [] : {};
              })(e),
              e,
              t,
            )
          : e;
      }
      function D(e, t, n) {
        return e.concat(t).map(function (e) {
          return N(e, n);
        });
      }
      function x(e, t, n) {
        ((n = n || {}).arrayMerge = n.arrayMerge || D),
          (n.isMergeableObject = n.isMergeableObject || V);
        var i = Array.isArray(t);
        return i === Array.isArray(e)
          ? i
            ? n.arrayMerge(e, t, n)
            : (function (e, t, n) {
                var i = {};
                return (
                  n.isMergeableObject(e) &&
                    Object.keys(e).forEach(function (t) {
                      i[t] = N(e[t], n);
                    }),
                  Object.keys(t).forEach(function (r) {
                    n.isMergeableObject(t[r]) && e[r]
                      ? (i[r] = x(e[r], t[r], n))
                      : (i[r] = N(t[r], n));
                  }),
                  i
                );
              })(e, t, n)
          : N(t, n);
      }
      function A(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function () {
                  return {};
                },
          n = (function (n) {
            function r(e, n) {
              var i;
              return (
                s(this, r),
                ((i = o.call(this, e, n)).state = t(a({}, n.state))),
                (i.updateStateProps = i.updateStateProps.bind(S(i))),
                i
              );
            }
            d(r, n);
            var o = m(r);
            return (
              l(r, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.context.subscribe(this.updateStateProps);
                  },
                },
                {
                  key: "shouldComponentUpdate",
                  value: function (e, t) {
                    return !Y(t, this.state) || !Y(e, this.props);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.context.unsubscribe(this.updateStateProps);
                  },
                },
                {
                  key: "updateStateProps",
                  value: function () {
                    this.setState(t(a({}, this.context.state)));
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this,
                      n = X(this.state, this.props);
                    return i.createElement(
                      e,
                      u(
                        {
                          ref: function (e) {
                            t.instance = e;
                          },
                        },
                        n,
                        {
                          carouselStore: {
                            getStoreState: this.context.getStoreState,
                            masterSpinnerError: this.context.masterSpinnerError,
                            masterSpinnerSuccess:
                              this.context.masterSpinnerSuccess,
                            setStoreState: this.context.setStoreState,
                            subscribeMasterSpinner:
                              this.context.subscribeMasterSpinner,
                            unsubscribeAllMasterSpinner:
                              this.context.unsubscribeAllMasterSpinner,
                            unsubscribeMasterSpinner:
                              this.context.unsubscribeMasterSpinner,
                          },
                        },
                      ),
                      this.props.children,
                    );
                  },
                },
              ]),
              r
            );
          })(i.Component);
        return (
          c(n, "contextType", G),
          c(n, "propTypes", { children: q.children }),
          c(n, "defaultProps", { children: null }),
          n
        );
      }
      k.resetWarningCache = y;
      var j = g(function (e) {
          e.exports = (function () {
            function e(e, t, n, i, r, a) {
              if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== a) {
                var s = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                );
                throw ((s.name = "Invariant Violation"), s);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
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
              checkPropTypes: k,
              resetWarningCache: y,
            };
            return (n.PropTypes = n), n;
          })();
        }),
        R = "loading",
        I = "success",
        L = "error",
        q = {
          children: j.oneOfType([j.arrayOf(j.node), j.node]),
          direction: j.oneOf(["forward", "backward"]),
          height: function (e, t) {
            var n = e[t];
            return "vertical" !== e.orientation ||
              (null !== n && "number" == typeof n)
              ? null
              : new Error(
                  "Missing required property '".concat(
                    t,
                    "' when orientation is vertical.  You must supply a number representing the height in pixels",
                  ),
                );
          },
          orientation: j.oneOf(["horizontal", "vertical"]),
          isBgImage: function (e, t) {
            return !0 === e[t] && "img" === e.tag
              ? new Error(
                  "HTML img elements should not have a backgroundImage.  Please use ".concat(
                    t,
                    " for other block-level HTML tags, like div, a, section, etc...",
                  ),
                )
              : null;
          },
        },
        F = function (e) {
          var t = e.min,
            n = e.max,
            i = e.x;
          return Math.min(n, Math.max(t, i));
        },
        z = "buttonBack___1mlaL",
        H = [
          "carouselStore",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "step",
          "totalSlides",
          "visibleSlides",
          "infinite",
        ],
        B = (function (e) {
          function t(e) {
            var i;
            return (
              s(this, t),
              ((i = n.call(this, e)).handleOnClick = i.handleOnClick.bind(
                S(i),
              )),
              i
            );
          }
          d(t, e);
          var n = m(t);
          return (
            l(
              t,
              [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props,
                      n = t.carouselStore,
                      i = t.currentSlide,
                      r = t.onClick,
                      a = t.step,
                      s = t.infinite,
                      o = t.visibleSlides,
                      l = t.totalSlides - o,
                      c = Math.max(i - a, 0);
                    s && (c = 0 === i ? l : c),
                      n.setStoreState(
                        { currentSlide: c, isPlaying: !1 },
                        null !== r && r.call(this, e),
                      );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      n = (e.carouselStore, e.className),
                      r =
                        (e.currentSlide,
                        e.disabled,
                        e.onClick,
                        e.step,
                        e.totalSlides,
                        e.visibleSlides,
                        e.infinite),
                      a = b(e, H),
                      s = O([z, "carousel__back-button", n]),
                      o = t.setDisabled(
                        this.props.disabled,
                        this.props.currentSlide,
                        r,
                      );
                    return i.createElement(
                      "button",
                      u(
                        {
                          type: "button",
                          "aria-label": "previous",
                          className: s,
                          onClick: this.handleOnClick,
                          disabled: o,
                        },
                        a,
                      ),
                      this.props.children,
                    );
                  },
                },
              ],
              [
                {
                  key: "setDisabled",
                  value: function (e, t, n) {
                    return null !== e ? e : 0 === t && !n;
                  },
                },
              ],
            ),
            t
          );
        })(i.Component);
      c(B, "propTypes", {
        carouselStore: j.object.isRequired,
        children: q.children.isRequired,
        className: j.string,
        currentSlide: j.number.isRequired,
        disabled: j.bool,
        onClick: j.func,
        step: j.number.isRequired,
        totalSlides: j.number.isRequired,
        visibleSlides: j.number.isRequired,
        infinite: j.bool,
      }),
        c(B, "defaultProps", {
          className: null,
          disabled: null,
          onClick: null,
          infinite: !1,
        });
      var W = g(function (e, t) {
          var n = {}.toString,
            i = "undefined" != typeof window ? window.Node : Function;
          e.exports = t = function (e) {
            var t = typeof e;
            if ("object" != t) return t;
            if ("object" == (t = r[n.call(e)]))
              return e instanceof Map
                ? "map"
                : e instanceof Set
                  ? "set"
                  : "object";
            if (t) return t;
            if (e instanceof i)
              switch (e.nodeType) {
                case 1:
                  return "element";
                case 3:
                  return "text-node";
                case 9:
                  return "document";
                case 11:
                  return "document-fragment";
                default:
                  return "dom-node";
              }
          };
          var r = (t.types = {
            "[object Function]": "function",
            "[object Date]": "date",
            "[object RegExp]": "regexp",
            "[object Arguments]": "arguments",
            "[object Array]": "array",
            "[object Set]": "set",
            "[object String]": "string",
            "[object Null]": "null",
            "[object Undefined]": "undefined",
            "[object Number]": "number",
            "[object Boolean]": "boolean",
            "[object Object]": "object",
            "[object Map]": "map",
            "[object Text]": "text-node",
            "[object Uint8Array]": "bit-array",
            "[object Uint16Array]": "bit-array",
            "[object Uint32Array]": "bit-array",
            "[object Uint8ClampedArray]": "bit-array",
            "[object Error]": "error",
            "[object FormData]": "form-data",
            "[object File]": "file",
            "[object Blob]": "blob",
          });
        }),
        U =
          (W.types,
          {
            number: function (e, t) {
              return e != e && t != t;
            },
            function: function (e, t, n) {
              return (
                e.toString() === t.toString() &&
                U.object(e, t, n) &&
                M(e.prototype, t.prototype)
              );
            },
            date: function (e, t) {
              return +e == +t;
            },
            regexp: function (e, t) {
              return e.toString() === t.toString();
            },
            element: function (e, t) {
              return e.outerHTML === t.outerHTML;
            },
            textnode: function (e, t) {
              return e.textContent === t.textContent;
            },
          });
      (U.arguments =
        U["bit-array"] =
        U.array =
          C(function (e, t, n) {
            var i = e.length;
            if (i !== t.length) return !1;
            for (n.push([e, t]); i--; ) if (!M(e[i], t[i], n)) return !1;
            return !0;
          })),
        (U.object = C(function (e, t, n) {
          if ("function" == typeof e.equal)
            return n.push([e, t]), e.equal(t, n);
          var i = E(e),
            r = E(t),
            a = i.length;
          if (a !== r.length) return !1;
          for (i.sort(), r.sort(); a--; ) if (i[a] !== r[a]) return !1;
          for (n.push([e, t]), a = i.length; a--; ) {
            var s = i[a];
            if (!M(e[s], t[s], n)) return !1;
          }
          return !0;
        }));
      var Y = M,
        V = function (e) {
          return (
            (function (e) {
              return !!e && "object" == typeof e;
            })(e) && !P(e)
          );
        },
        Z =
          "function" == typeof Symbol && Symbol.for
            ? Symbol.for("react.element")
            : 60103;
      x.all = function (e, t) {
        if (!Array.isArray(e))
          throw new Error("first argument should be an array");
        return e.reduce(function (e, n) {
          return x(e, n, t);
        }, {});
      };
      var K,
        X = x,
        G = i.createContext(),
        Q = function e(t) {
          return (
            Object.freeze(t),
            Object.getOwnPropertyNames(t).forEach(function (n) {
              !t.hasOwnProperty(n) ||
                null === t[n] ||
                ("object" != typeof t[n] && "function" != typeof t[n]) ||
                Object.isFrozen(t[n]) ||
                e(t[n]);
            }),
            t
          );
        },
        $ = { masterSpinnerFinished: !1 },
        J = (function () {
          function e(t) {
            s(this, e),
              (this.state = Q(X($, t))),
              (this.subscriptions = []),
              (this.masterSpinnerSubscriptions = {}),
              (this.setStoreState = this.setStoreState.bind(this)),
              (this.getStoreState = this.getStoreState.bind(this)),
              (this.subscribe = this.subscribe.bind(this)),
              (this.unsubscribe = this.unsubscribe.bind(this)),
              (this.updateSubscribers = this.updateSubscribers.bind(this)),
              (this.subscribeMasterSpinner =
                this.subscribeMasterSpinner.bind(this)),
              (this.unsubscribeMasterSpinner =
                this.unsubscribeMasterSpinner.bind(this)),
              (this.unsubscribeAllMasterSpinner =
                this.unsubscribeAllMasterSpinner.bind(this)),
              (this.masterSpinnerSuccess =
                this.masterSpinnerSuccess.bind(this)),
              (this.masterSpinnerError = this.masterSpinnerError.bind(this));
          }
          return (
            l(e, [
              {
                key: "setStoreState",
                value: function (e, t) {
                  (this.state = Q(X(this.state, e))), this.updateSubscribers(t);
                },
              },
              {
                key: "getStoreState",
                value: function () {
                  return X({}, this.state);
                },
              },
              {
                key: "subscribe",
                value: function (e) {
                  this.subscriptions.push(e);
                },
              },
              {
                key: "unsubscribe",
                value: function (e) {
                  var t = this.subscriptions.indexOf(e);
                  -1 !== t && this.subscriptions.splice(t, 1);
                },
              },
              {
                key: "updateSubscribers",
                value: function (e) {
                  this.subscriptions.forEach(function (e) {
                    return e();
                  }),
                    "function" == typeof e && e(this.getStoreState());
                },
              },
              {
                key: "subscribeMasterSpinner",
                value: function (e) {
                  -1 ===
                    Object.keys(this.masterSpinnerSubscriptions).indexOf(e) &&
                    (this.masterSpinnerSubscriptions[e] = {
                      success: !1,
                      error: !1,
                      complete: !1,
                    });
                },
              },
              {
                key: "unsubscribeMasterSpinner",
                value: function (e) {
                  return (
                    -1 !==
                      Object.keys(this.masterSpinnerSubscriptions).indexOf(e) &&
                    (this.setMasterSpinnerFinished(),
                    delete this.masterSpinnerSubscriptions[e])
                  );
                },
              },
              {
                key: "unsubscribeAllMasterSpinner",
                value: function () {
                  (this.masterSpinnerSubscriptions = {}),
                    this.setMasterSpinnerFinished();
                },
              },
              {
                key: "masterSpinnerSuccess",
                value: function (e) {
                  (this.masterSpinnerSubscriptions[e].success = !0),
                    (this.masterSpinnerSubscriptions[e].complete = !0),
                    this.setMasterSpinnerFinished();
                },
              },
              {
                key: "masterSpinnerError",
                value: function (e) {
                  (this.masterSpinnerSubscriptions[e].error = !0),
                    (this.masterSpinnerSubscriptions[e].complete = !0),
                    this.setMasterSpinnerFinished();
                },
              },
              {
                key: "setMasterSpinnerFinished",
                value: function () {
                  this.setStoreState({
                    masterSpinnerFinished: this.isMasterSpinnerFinished(),
                  });
                },
              },
              {
                key: "isMasterSpinnerFinished",
                value: function () {
                  var e = this;
                  return (
                    0 ===
                    Object.keys(this.masterSpinnerSubscriptions).filter(
                      function (t) {
                        return !0 !== e.masterSpinnerSubscriptions[t].complete;
                      },
                    ).length
                  );
                },
              },
            ]),
            e
          );
        })(),
        ee = [
          "children",
          "className",
          "currentSlide",
          "disableAnimation",
          "disableKeyboard",
          "hasMasterSpinner",
          "interval",
          "isPageScrollLocked",
          "isPlaying",
          "lockOnWindowScroll",
          "naturalSlideHeight",
          "naturalSlideWidth",
          "orientation",
          "playDirection",
          "step",
          "dragStep",
          "tag",
          "totalSlides",
          "touchEnabled",
          "dragEnabled",
          "visibleSlides",
          "infinite",
          "isIntrinsicHeight",
        ],
        te =
          (c(
            (K = (function (e) {
              function t(e) {
                var i;
                if (
                  (s(this, t),
                  (i = n.call(this, e)),
                  e.isIntrinsicHeight && "horizontal" !== e.orientation)
                )
                  throw Error(
                    'isIntrinsicHeight can only be used in "horizontal" orientation. See Readme for more information.',
                  );
                var r = {
                  currentSlide: e.currentSlide,
                  disableAnimation: e.disableAnimation,
                  disableKeyboard: e.disableKeyboard,
                  hasMasterSpinner: e.hasMasterSpinner,
                  imageErrorCount: 0,
                  imageSuccessCount: 0,
                  interval: e.interval,
                  isPageScrollLocked: e.isPageScrollLocked,
                  isPlaying: e.isPlaying,
                  lockOnWindowScroll: e.lockOnWindowScroll,
                  masterSpinnerThreshold: 0,
                  naturalSlideHeight: e.naturalSlideHeight,
                  naturalSlideWidth: e.naturalSlideWidth,
                  orientation: e.orientation,
                  playDirection: e.playDirection,
                  privateUnDisableAnimation: !1,
                  slideSize: w(e.totalSlides, e.visibleSlides),
                  slideTraySize: T(e.totalSlides, e.visibleSlides),
                  step: e.step,
                  dragStep: e.dragStep,
                  totalSlides: e.totalSlides,
                  touchEnabled: e.touchEnabled,
                  dragEnabled: e.dragEnabled,
                  visibleSlides: e.visibleSlides,
                  infinite: e.infinite,
                  isIntrinsicHeight: e.isIntrinsicHeight,
                };
                return (i.carouselStore = new J(r)), i;
              }
              d(t, e);
              var n = m(t);
              return (
                l(t, [
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      var t = this,
                        n = {};
                      [
                        "currentSlide",
                        "disableAnimation",
                        "disableKeyboard",
                        "hasMasterSpinner",
                        "interval",
                        "isPlaying",
                        "naturalSlideHeight",
                        "naturalSlideWidth",
                        "lockOnWindowScroll",
                        "orientation",
                        "playDirection",
                        "step",
                        "dragStep",
                        "totalSlides",
                        "touchEnabled",
                        "dragEnabled",
                        "visibleSlides",
                      ].forEach(function (i) {
                        e[i] !== t.props[i] && (n[i] = t.props[i]);
                      }),
                        this.props.currentSlide !== e.currentSlide &&
                          !this.props.disableAnimation &&
                          ((n.disableAnimation = !0),
                          (n.privateUnDisableAnimation = !0)),
                        (this.props.totalSlides === e.totalSlides &&
                          this.props.visibleSlides === e.visibleSlides) ||
                          ((n.slideSize = w(
                            this.props.totalSlides,
                            this.props.visibleSlides,
                          )),
                          (n.slideTraySize = T(
                            this.props.totalSlides,
                            this.props.visibleSlides,
                          ))),
                        this.carouselStore.state.currentSlide >=
                          this.props.totalSlides &&
                          (n.currentSlide = Math.max(
                            this.props.totalSlides - 1,
                            0,
                          )),
                        Object.keys(n).length > 0 &&
                          this.carouselStore.setStoreState(n);
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this.carouselStore.unsubscribeAllMasterSpinner();
                    },
                  },
                  {
                    key: "getStore",
                    value: function () {
                      return this.carouselStore;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t =
                          (e.children,
                          e.className,
                          e.currentSlide,
                          e.disableAnimation,
                          e.disableKeyboard,
                          e.hasMasterSpinner,
                          e.interval,
                          e.isPageScrollLocked,
                          e.isPlaying,
                          e.lockOnWindowScroll,
                          e.naturalSlideHeight,
                          e.naturalSlideWidth,
                          e.orientation,
                          e.playDirection,
                          e.step,
                          e.dragStep,
                          e.tag),
                        n =
                          (e.totalSlides,
                          e.touchEnabled,
                          e.dragEnabled,
                          e.visibleSlides,
                          e.infinite,
                          e.isIntrinsicHeight,
                          b(e, ee)),
                        r = O(["carousel", this.props.className]);
                      return i.createElement(
                        t,
                        u({ className: r }, n),
                        i.createElement(
                          G.Provider,
                          { value: this.carouselStore },
                          this.props.children,
                        ),
                      );
                    },
                  },
                ]),
                t
              );
            })(i.Component)),
            "propTypes",
            {
              children: q.children.isRequired,
              className: j.string,
              currentSlide: j.number,
              disableAnimation: j.bool,
              disableKeyboard: j.bool,
              hasMasterSpinner: j.bool,
              interval: j.number,
              isPageScrollLocked: j.bool,
              isPlaying: j.bool,
              lockOnWindowScroll: j.bool,
              naturalSlideHeight: j.number.isRequired,
              naturalSlideWidth: j.number.isRequired,
              orientation: q.orientation,
              playDirection: q.direction,
              step: j.number,
              dragStep: j.number,
              tag: j.string,
              totalSlides: j.number.isRequired,
              touchEnabled: j.bool,
              dragEnabled: j.bool,
              visibleSlides: j.number,
              infinite: j.bool,
              isIntrinsicHeight: j.bool,
            },
          ),
          c(K, "defaultProps", {
            className: null,
            currentSlide: 0,
            disableAnimation: !1,
            disableKeyboard: !1,
            hasMasterSpinner: !1,
            interval: 5e3,
            isPageScrollLocked: !1,
            isPlaying: !1,
            lockOnWindowScroll: !1,
            orientation: "horizontal",
            playDirection: "forward",
            step: 1,
            dragStep: 1,
            tag: "div",
            touchEnabled: !0,
            dragEnabled: !0,
            visibleSlides: 1,
            infinite: !1,
            isIntrinsicHeight: !1,
          }),
          K);
      G.Consumer;
      var ne,
        ie,
        re,
        ae,
        se,
        oe,
        le = A(B, function (e) {
          return {
            currentSlide: e.currentSlide,
            step: e.step,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
            infinite: e.infinite,
          };
        }),
        ce = "buttonFirst___2rhFr",
        ue = [
          "carouselStore",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "totalSlides",
        ],
        de =
          ((ne = (function (e) {
            function t() {
              var e;
              return (
                s(this, t),
                ((e = n.call(this)).handleOnClick = e.handleOnClick.bind(S(e))),
                e
              );
            }
            d(t, e);
            var n = m(t);
            return (
              l(t, [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props,
                      n = t.carouselStore,
                      i = t.onClick;
                    n.setStoreState(
                      { currentSlide: 0, isPlaying: !1 },
                      null !== i && i.call(this, e),
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = (e.carouselStore, e.className),
                      n = e.currentSlide,
                      r = e.disabled,
                      a = (e.onClick, e.totalSlides, b(e, ue)),
                      s = O([ce, "carousel__first-button", t]),
                      o = null !== r ? r : 0 === n;
                    return i.createElement(
                      "button",
                      u(
                        {
                          type: "button",
                          "aria-label": "first",
                          className: s,
                          onClick: this.handleOnClick,
                          disabled: o,
                        },
                        a,
                      ),
                      this.props.children,
                    );
                  },
                },
              ]),
              t
            );
          })(i.Component)),
          c(ne, "propTypes", {
            carouselStore: j.object.isRequired,
            children: q.children.isRequired,
            className: j.string,
            currentSlide: j.number.isRequired,
            disabled: j.bool,
            onClick: j.func,
            totalSlides: j.number.isRequired,
          }),
          c(ne, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          ne),
        he =
          (A(de, function (e) {
            return { currentSlide: e.currentSlide, totalSlides: e.totalSlides };
          }),
          "buttonNext___2mOCa"),
        pe = [
          "carouselStore",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "step",
          "totalSlides",
          "visibleSlides",
          "infinite",
        ],
        be =
          ((ie = (function (e) {
            function t(e) {
              var i;
              return (
                s(this, t),
                ((i = n.call(this, e)).handleOnClick = i.handleOnClick.bind(
                  S(i),
                )),
                i
              );
            }
            d(t, e);
            var n = m(t);
            return (
              l(
                t,
                [
                  {
                    key: "handleOnClick",
                    value: function (e) {
                      var t = this.props,
                        n = t.currentSlide,
                        i = t.onClick,
                        r = t.step,
                        a = t.carouselStore,
                        s = t.infinite,
                        o = t.totalSlides - t.visibleSlides,
                        l = r + n,
                        c = Math.min(l, o);
                      s && (c = o === n ? 0 : c),
                        a.setStoreState(
                          { currentSlide: c, isPlaying: !1 },
                          null !== i && i.call(this, e),
                        );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        n = (e.carouselStore, e.className),
                        r = e.currentSlide,
                        a = e.disabled,
                        s = (e.onClick, e.step, e.totalSlides),
                        o = e.visibleSlides,
                        l = e.infinite,
                        c = b(e, pe),
                        d = O([he, "carousel__next-button", n]),
                        h = t.setDisabled(a, r, o, s, l);
                      return i.createElement(
                        "button",
                        u(
                          {
                            type: "button",
                            "aria-label": "next",
                            className: d,
                            onClick: this.handleOnClick,
                            disabled: h,
                          },
                          c,
                        ),
                        this.props.children,
                      );
                    },
                  },
                ],
                [
                  {
                    key: "setDisabled",
                    value: function (e, t, n, i, r) {
                      return null !== e ? e : t >= i - n && !r;
                    },
                  },
                ],
              ),
              t
            );
          })(i.PureComponent)),
          c(ie, "propTypes", {
            carouselStore: j.object.isRequired,
            children: q.children.isRequired,
            className: j.string,
            currentSlide: j.number.isRequired,
            disabled: j.bool,
            onClick: j.func,
            step: j.number.isRequired,
            totalSlides: j.number.isRequired,
            visibleSlides: j.number.isRequired,
            infinite: j.bool,
          }),
          c(ie, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
            infinite: !1,
          }),
          ie),
        Se = A(be, function (e) {
          return {
            currentSlide: e.currentSlide,
            step: e.step,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
            infinite: e.infinite,
          };
        }),
        me = "buttonLast___2yuh0",
        fe = [
          "carouselStore",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "totalSlides",
          "visibleSlides",
        ],
        ve =
          ((re = (function (e) {
            function t() {
              var e;
              return (
                s(this, t),
                ((e = n.call(this)).handleOnClick = e.handleOnClick.bind(S(e))),
                e
              );
            }
            d(t, e);
            var n = m(t);
            return (
              l(t, [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props,
                      n = t.carouselStore,
                      i = t.onClick,
                      r = t.totalSlides,
                      a = t.visibleSlides;
                    n.setStoreState(
                      { currentSlide: r - a, isPlaying: !1 },
                      null !== i && i.call(this, e),
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = (e.carouselStore, e.className),
                      n = e.currentSlide,
                      r = e.disabled,
                      a = (e.onClick, e.totalSlides),
                      s = e.visibleSlides,
                      o = b(e, fe),
                      l = O([me, "carousel__last-button", t]),
                      c = null !== r ? r : n >= a - s;
                    return i.createElement(
                      "button",
                      u(
                        {
                          type: "button",
                          "aria-label": "last",
                          className: l,
                          onClick: this.handleOnClick,
                          disabled: c,
                        },
                        o,
                      ),
                      this.props.children,
                    );
                  },
                },
              ]),
              t
            );
          })(i.Component)),
          c(re, "propTypes", {
            carouselStore: j.object.isRequired,
            children: q.children.isRequired,
            className: j.string,
            currentSlide: j.number.isRequired,
            disabled: j.bool,
            onClick: j.func,
            totalSlides: j.number.isRequired,
            visibleSlides: j.number.isRequired,
          }),
          c(re, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          re),
        ge =
          (A(ve, function (e) {
            return {
              currentSlide: e.currentSlide,
              totalSlides: e.totalSlides,
              visibleSlides: e.visibleSlides,
            };
          }),
          "buttonNext___3Lm3s"),
        ye = [
          "carouselStore",
          "children",
          "childrenPaused",
          "childrenPlaying",
          "className",
          "isPlaying",
          "onClick",
        ],
        ke =
          ((ae = (function (e) {
            function t(e) {
              var i;
              return (
                s(this, t),
                ((i = n.call(this, e)).handleOnClick = i.handleOnClick.bind(
                  S(i),
                )),
                i
              );
            }
            d(t, e);
            var n = m(t);
            return (
              l(t, [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props.onClick;
                    this.props.carouselStore.setStoreState(
                      { isPlaying: !this.props.isPlaying },
                      null !== t && t.call(this, e),
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = (e.carouselStore, e.children, e.childrenPaused),
                      n = e.childrenPlaying,
                      r = e.className,
                      a = e.isPlaying,
                      s = (e.onClick, b(e, ye)),
                      o = O([ge, "carousel__play-button", r]);
                    return i.createElement(
                      "button",
                      u(
                        {
                          type: "button",
                          "aria-label": "play",
                          className: o,
                          onClick: this.handleOnClick,
                        },
                        s,
                      ),
                      a && n,
                      !a && t,
                      this.props.children,
                    );
                  },
                },
              ]),
              t
            );
          })(i.PureComponent)),
          c(ae, "propTypes", {
            carouselStore: j.object.isRequired,
            children: j.node,
            childrenPaused: j.node,
            childrenPlaying: j.node,
            className: j.string,
            isPlaying: j.bool.isRequired,
            onClick: j.func,
          }),
          c(ae, "defaultProps", {
            children: null,
            childrenPaused: null,
            childrenPlaying: null,
            className: null,
            onClick: null,
          }),
          ae),
        Oe =
          (A(ke, function (e) {
            return { isPlaying: e.isPlaying };
          }),
          { dot: "dot___3c3SI" }),
        we = [
          "carouselStore",
          "children",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "selected",
          "slide",
          "totalSlides",
          "visibleSlides",
        ],
        Te =
          ((se = (function (e) {
            function t(e) {
              var i;
              return (
                s(this, t),
                ((i = n.call(this, e)).handleOnClick = i.handleOnClick.bind(
                  S(i),
                )),
                i
              );
            }
            d(t, e);
            var n = m(t);
            return (
              l(t, [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props,
                      n = t.carouselStore,
                      i = t.onClick,
                      r = t.slide,
                      a = t.totalSlides,
                      s = t.visibleSlides,
                      o = r >= a - s ? a - s : r;
                    n.setStoreState(
                      { currentSlide: o, isPlaying: !1 },
                      null !== i && i.call(this, e),
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = (e.carouselStore, e.children, e.className),
                      n = e.currentSlide,
                      r = e.disabled,
                      a = (e.onClick, e.selected),
                      s = e.slide,
                      o = (e.totalSlides, e.visibleSlides),
                      l = b(e, we),
                      c = s >= n && s < n + o,
                      d = "boolean" == typeof a ? a : c,
                      h = "boolean" == typeof r ? r : !0 === c,
                      p = O([
                        Oe.dot,
                        d && Oe.dotSelected,
                        "carousel__dot",
                        "carousel__dot--".concat(s),
                        d && "carousel__dot--selected",
                        t,
                      ]);
                    return i.createElement(
                      "button",
                      u(
                        {
                          "aria-label": "slide dot",
                          type: "button",
                          onClick: this.handleOnClick,
                          className: p,
                          disabled: h,
                        },
                        l,
                      ),
                      this.props.children,
                    );
                  },
                },
              ]),
              t
            );
          })(i.Component)),
          c(se, "propTypes", {
            carouselStore: j.object.isRequired,
            children: q.children,
            className: j.string,
            currentSlide: j.number.isRequired,
            disabled: j.bool,
            onClick: j.func,
            selected: j.bool,
            slide: j.number.isRequired,
            totalSlides: j.number.isRequired,
            visibleSlides: j.number.isRequired,
          }),
          c(se, "defaultProps", {
            children: null,
            className: null,
            disabled: null,
            onClick: null,
            selected: null,
          }),
          se),
        _e = A(Te, function (e) {
          return {
            currentSlide: e.currentSlide,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
          };
        }),
        Me = {},
        Ce = ["renderDots"],
        Ee = [
          "carouselStore",
          "children",
          "className",
          "currentSlide",
          "dotNumbers",
          "totalSlides",
          "visibleSlides",
          "disableActiveDots",
          "showAsSelectedForCurrentSlideOnly",
          "renderDots",
        ],
        Pe =
          ((oe = (function (e) {
            function t() {
              return s(this, t), n.apply(this, arguments);
            }
            d(t, e);
            var n = m(t);
            return (
              l(t, [
                {
                  key: "renderDots",
                  value: function () {
                    var e = this.props,
                      t = e.currentSlide,
                      n = e.totalSlides,
                      r = e.visibleSlides,
                      a = e.disableActiveDots,
                      s = e.showAsSelectedForCurrentSlideOnly,
                      o = e.renderDots;
                    if (o) {
                      var l = this.props;
                      return l.renderDots, o(b(l, Ce));
                    }
                    for (var c = [], u = 0; u < n; u += 1) {
                      var d = s ? u === t : u >= t && u < t + r,
                        h = u >= n - r ? n - r : u;
                      c.push(
                        i.createElement(
                          _e,
                          { key: u, slide: h, selected: d, disabled: !!a && d },
                          i.createElement(
                            "span",
                            { className: O["carousel__dot-group-dot"] },
                            this.props.dotNumbers && u + 1,
                          ),
                        ),
                      );
                    }
                    return c;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = (e.carouselStore, e.children),
                      n = e.className,
                      r =
                        (e.currentSlide,
                        e.dotNumbers,
                        e.totalSlides,
                        e.visibleSlides,
                        e.disableActiveDots,
                        e.showAsSelectedForCurrentSlideOnly,
                        e.renderDots,
                        b(e, Ee)),
                      a = O([Me.DotGroup, "carousel__dot-group", n]);
                    return i.createElement(
                      "div",
                      u({ className: a }, r),
                      this.renderDots(),
                      t,
                    );
                  },
                },
              ]),
              t
            );
          })(i.Component)),
          c(oe, "propTypes", {
            children: q.children,
            className: j.string,
            currentSlide: j.number.isRequired,
            carouselStore: j.object.isRequired,
            totalSlides: j.number.isRequired,
            visibleSlides: j.number.isRequired,
            dotNumbers: j.bool,
            disableActiveDots: j.bool,
            showAsSelectedForCurrentSlideOnly: j.bool,
            renderDots: j.func,
          }),
          c(oe, "defaultProps", {
            children: null,
            className: null,
            dotNumbers: !1,
            disableActiveDots: !0,
            showAsSelectedForCurrentSlideOnly: !1,
            renderDots: null,
          }),
          oe),
        Ne =
          (A(Pe, function (e) {
            return {
              currentSlide: e.currentSlide,
              totalSlides: e.totalSlides,
              visibleSlides: e.visibleSlides,
            };
          }),
          { image: "image___xtQGH" }),
        De = ["src", "alt"],
        xe = [
          "carouselStore",
          "children",
          "className",
          "hasMasterSpinner",
          "isBgImage",
          "onError",
          "onLoad",
          "renderError",
          "renderLoading",
          "style",
          "tag",
        ],
        Ae = (function (e) {
          function t(e) {
            var i;
            return (
              s(this, t),
              ((i = n.call(this, e)).state = { imageStatus: R }),
              (i.handleImageLoad = i.handleImageLoad.bind(S(i))),
              (i.handleImageError = i.handleImageError.bind(S(i))),
              (i.image = null),
              i
            );
          }
          d(t, e);
          var n = m(t);
          return (
            l(
              t,
              [
                {
                  key: "componentDidMount",
                  value: function () {
                    t.subscribeMasterSpinner(this.props), this.initImage();
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    e.src !== this.props.src &&
                      (t.unsubscribeMasterSpinner(e),
                      t.subscribeMasterSpinner(this.props),
                      this.initImage());
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    t.unsubscribeMasterSpinner(this.props),
                      this.image.removeEventListener(
                        "load",
                        this.handleImageLoad,
                      ),
                      this.image.removeEventListener(
                        "error",
                        this.handleImageError,
                      ),
                      (this.image = null);
                  },
                },
                {
                  key: "initImage",
                  value: function () {
                    if (
                      (this.setState({ imageStatus: R }),
                      (this.image = document.createElement("img")),
                      this.image.addEventListener(
                        "load",
                        this.handleImageLoad,
                        !1,
                      ),
                      this.image.addEventListener(
                        "error",
                        this.handleImageError,
                        !1,
                      ),
                      (this.image.src = this.props.src),
                      this.image.readyState || this.image.complete)
                    ) {
                      var e = this.image.src;
                      (this.image.src =
                        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="),
                        (this.image.src = e);
                    }
                  },
                },
                {
                  key: "handleImageLoad",
                  value: function (e) {
                    this.setState({ imageStatus: I }),
                      this.props.hasMasterSpinner &&
                        this.props.carouselStore.masterSpinnerSuccess(
                          this.props.src,
                        ),
                      this.props.onLoad && this.props.onLoad(e);
                  },
                },
                {
                  key: "handleImageError",
                  value: function (e) {
                    this.setState({ imageStatus: L }),
                      this.props.hasMasterSpinner &&
                        this.props.carouselStore.masterSpinnerError(
                          this.props.src,
                        ),
                      this.props.onError && this.props.onError(e);
                  },
                },
                {
                  key: "tempTag",
                  value: function () {
                    return "img" === this.props.tag ? "div" : this.props.tag;
                  },
                },
                {
                  key: "customRender",
                  value: function (e) {
                    return "function" == typeof this.props[e]
                      ? this.props[e]()
                      : this.props.children;
                  },
                },
                {
                  key: "renderLoading",
                  value: function (e) {
                    var t = this.tempTag(),
                      n = O([
                        Ne.image,
                        Ne.imageLoading,
                        "carousel__image",
                        this.props.isBgImage &&
                          "carousel__image--with-background",
                        "carousel__image--loading",
                        this.props.className,
                      ]);
                    return i.createElement(
                      t,
                      u({ className: n }, e),
                      this.customRender("renderLoading"),
                    );
                  },
                },
                {
                  key: "renderError",
                  value: function (e) {
                    var t = this.tempTag(),
                      n = O([
                        Ne.image,
                        Ne.imageError,
                        "carousel__image",
                        this.props.isBgImage &&
                          "carousel__image--with-background",
                        "carousel__image--error",
                        this.props.className,
                      ]);
                    return i.createElement(
                      t,
                      u({ className: n }, e),
                      this.customRender("renderError"),
                    );
                  },
                },
                {
                  key: "renderSuccess",
                  value: function (e) {
                    var t = this.props,
                      n = t.style,
                      r = t.tag,
                      a = O([
                        Ne.image,
                        "carousel__image",
                        this.props.isBgImage &&
                          "carousel__image--with-background",
                        "carousel__image--success",
                        this.props.className,
                      ]),
                      s = u({}, n),
                      o = e;
                    if ("img" !== r) {
                      var l = e.src;
                      e.alt,
                        (o = b(e, De)),
                        (s = u({}, n, {
                          backgroundImage: 'url("'.concat(l, '")'),
                          backgroundSize: "cover",
                        }));
                    }
                    return i.createElement(
                      r,
                      u({ className: a, style: s }, o),
                      this.props.children,
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t =
                        (e.carouselStore,
                        e.children,
                        e.className,
                        e.hasMasterSpinner,
                        e.isBgImage,
                        e.onError,
                        e.onLoad,
                        e.renderError,
                        e.renderLoading,
                        e.style,
                        e.tag,
                        b(e, xe));
                    switch (this.state.imageStatus) {
                      case R:
                        return this.renderLoading(t);
                      case I:
                        return this.renderSuccess(t);
                      case L:
                        return this.renderError(t);
                      default:
                        throw new Error(
                          "unknown value for this.state.imageStatus",
                        );
                    }
                  },
                },
              ],
              [
                {
                  key: "subscribeMasterSpinner",
                  value: function (e) {
                    e.hasMasterSpinner &&
                      e.carouselStore.subscribeMasterSpinner(e.src);
                  },
                },
                {
                  key: "unsubscribeMasterSpinner",
                  value: function (e) {
                    e.hasMasterSpinner &&
                      e.carouselStore.unsubscribeMasterSpinner(e.src);
                  },
                },
              ],
            ),
            t
          );
        })(i.Component);
      c(Ae, "propTypes", {
        alt: j.string,
        carouselStore: j.object.isRequired,
        children: q.children,
        className: j.string,
        hasMasterSpinner: j.bool.isRequired,
        isBgImage: q.isBgImage,
        onError: j.func,
        onLoad: j.func,
        renderError: j.func,
        renderLoading: j.func,
        src: j.string.isRequired,
        style: j.object,
        tag: j.string,
      }),
        c(Ae, "defaultProps", {
          alt: "",
          children: null,
          className: null,
          isBgImage: !1,
          onError: null,
          onLoad: null,
          renderError: null,
          renderLoading: null,
          style: null,
          tag: "img",
        });
      var je,
        Re,
        Ie,
        Le,
        qe = A(Ae, function (e) {
          return {
            hasMasterSpinner: e.hasMasterSpinner,
            orientation: e.orientation,
          };
        }),
        Fe = "spinner___27VUp",
        ze = ["className"],
        He =
          (c(
            (je = (function (e) {
              function t() {
                return s(this, t), n.apply(this, arguments);
              }
              d(t, e);
              var n = m(t);
              return (
                l(t, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        n = b(e, ze),
                        r = O([Fe, "carousel__spinner", t]);
                      return i.createElement("div", u({ className: r }, n));
                    },
                  },
                ]),
                t
              );
            })(i.PureComponent)),
            "propTypes",
            { className: j.string },
          ),
          c(je, "defaultProps", { className: null }),
          je),
        Be = {
          container: "container___2O72F",
          overlay: "overlay___IV4qY",
          hover: "hover___MYy31",
          zoom: "zoom___3kqYk",
          loading: "loading___1pvNI",
          imageLoadingSpinnerContainer: "imageLoadingSpinnerContainer___3UIPD",
        },
        We = [
          "alt",
          "bgImageProps",
          "bgImageTag",
          "carouselStore",
          "className",
          "imageClassName",
          "overlayClassName",
          "isPinchZoomEnabled",
          "spinner",
          "src",
          "srcZoomed",
          "tag",
        ],
        Ue =
          ((Re = (function (e) {
            function t(e) {
              var i;
              return (
                s(this, t),
                ((i = n.call(this, e)).state = {
                  isImageLoading: !0,
                  isHovering: !1,
                  isZooming: !1,
                  x: null,
                  y: null,
                  scale: 1,
                }),
                (i.tpCache = {}),
                (i.handleImageComplete = i.handleImageComplete.bind(S(i))),
                (i.handleOnMouseMove = i.handleOnMouseMove.bind(S(i))),
                (i.handleOnMouseOut = i.handleOnMouseOut.bind(S(i))),
                (i.handleOnMouseOver = i.handleOnMouseOver.bind(S(i))),
                (i.handleOnTouchEnd = i.handleOnTouchEnd.bind(S(i))),
                (i.handleOnTouchMove = i.handleOnTouchMove.bind(S(i))),
                (i.handleOnTouchStart = i.handleOnTouchStart.bind(S(i))),
                i
              );
            }
            d(t, e);
            var n = m(t);
            return (
              l(
                t,
                [
                  {
                    key: "componentDidUpdate",
                    value: function (e, t) {
                      !1 === t.isZooming &&
                        !0 === this.state.isZooming &&
                        this.props.carouselStore.setStoreState({
                          isPageScrollLocked: !0,
                        }),
                        !0 === t.isZooming &&
                          !1 === this.state.isZooming &&
                          this.props.carouselStore.setStoreState({
                            isPageScrollLocked: !1,
                          });
                    },
                  },
                  {
                    key: "handleImageComplete",
                    value: function () {
                      this.setState({ isImageLoading: !1 });
                    },
                  },
                  {
                    key: "handleOnMouseOver",
                    value: function () {
                      this.state.isZooming ||
                        this.setState({ isHovering: !0, scale: 2 });
                    },
                  },
                  {
                    key: "handleOnMouseOut",
                    value: function () {
                      this.state.isZooming ||
                        this.setState({ isHovering: !1, scale: 1 });
                    },
                  },
                  {
                    key: "handleOnMouseMove",
                    value: function (e) {
                      if (!this.state.isZooming) {
                        var t = _(
                            (e.nativeEvent.offsetX / e.target.offsetWidth) *
                              100,
                          ),
                          n = _(
                            (e.nativeEvent.offsetY / e.target.offsetHeight) *
                              100,
                          );
                        this.setState({ x: t, y: n });
                      }
                    },
                  },
                  {
                    key: "handleOnTouchStart",
                    value: function (e) {
                      var t = this;
                      this.props.isPinchZoomEnabled &&
                        (f(e.targetTouches).forEach(function (e) {
                          t.tpCache[e.identifier] = {
                            clientX: e.clientX,
                            clientY: e.clientY,
                          };
                        }),
                        this.setState(function (e) {
                          return {
                            isZooming:
                              e.isZooming || Object.keys(t.tpCache).length > 1,
                          };
                        }));
                    },
                  },
                  {
                    key: "handleOnTouchMove",
                    value: function (e) {
                      var n = this;
                      if (this.state.isZooming) {
                        e.persist();
                        var i = f(e.targetTouches)
                          .filter(function (e) {
                            return n.tpCache[e.identifier];
                          })
                          .slice(0, 2);
                        if (2 === i.length) {
                          e.stopPropagation();
                          var r = e.target.getBoundingClientRect(),
                            s = i[0].identifier,
                            o = i[1].identifier,
                            l = {
                              x1: this.tpCache[s].clientX,
                              y1: this.tpCache[s].clientY,
                              x2: this.tpCache[o].clientX,
                              y2: this.tpCache[o].clientY,
                            };
                          l.distance = t.distanceBetweenTwoTouches(a({}, l));
                          var c = t.midpointBetweenTwoTouches(a({}, l));
                          (l.cx = c.x), (l.cy = c.y);
                          var u = {
                            x1: i[0].clientX,
                            y1: i[0].clientY,
                            x2: i[1].clientX,
                            y2: i[1].clientY,
                          };
                          u.distance = t.distanceBetweenTwoTouches(a({}, u));
                          var d = t.midpointBetweenTwoTouches(a({}, u));
                          (u.cx = d.x), (u.cy = d.y);
                          var h = _(
                              F({
                                min: 0,
                                max: 100,
                                x: ((u.cx - r.left) / r.width) * 100,
                              }),
                            ),
                            p = _(
                              F({
                                min: 0,
                                max: 100,
                                x: ((u.cy - r.top) / r.height) * 100,
                              }),
                            ),
                            b = function (e) {
                              return F({
                                min: 1,
                                max: 3,
                                x: e.scale + (u.distance - l.distance) / 100,
                              });
                            };
                          this.setState(function (e) {
                            return {
                              isZooming: 1 !== b(e),
                              scale: b(e),
                              x: h,
                              y: p,
                            };
                          });
                        }
                      }
                    },
                  },
                  {
                    key: "handleOnTouchEnd",
                    value: function (e) {
                      var t = this;
                      this.props.isPinchZoomEnabled &&
                        (f(e.changedTouches).forEach(function (e) {
                          delete t.tpCache[e.identifier];
                        }),
                        0 === Object.keys(this.tpCache).length &&
                          this.setState({ isZooming: !1 }));
                    },
                  },
                  {
                    key: "renderLoading",
                    value: function () {
                      if (this.state.isImageLoading) {
                        var e = this.props.spinner;
                        return i.createElement(
                          "div",
                          {
                            className: O([
                              Be.imageLoadingSpinnerContainer,
                              "carousel__image-loading-spinner-container",
                            ]),
                          },
                          e && e(),
                          !e && i.createElement(He, null),
                        );
                      }
                      return null;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.alt,
                        n = e.bgImageProps,
                        r = e.bgImageTag,
                        a = (e.carouselStore, e.className),
                        s = e.imageClassName,
                        o = e.overlayClassName,
                        l = (e.isPinchZoomEnabled, e.spinner, e.src),
                        c = e.srcZoomed,
                        d = e.tag,
                        h = b(e, We),
                        p = O([Be.container, a]),
                        S = O([Be.image, "carousel__zoom-image", s]),
                        m = O([
                          Be.overlay,
                          "carousel__zoom-image-overlay",
                          this.state.isHovering && Be.hover,
                          this.state.isZooming && Be.zoom,
                          this.state.isHovering &&
                            "carousel__zoom-image-overlay--hovering",
                          this.state.isZooming &&
                            "carousel__zoom-image-overlay--zooming",
                          o,
                        ]),
                        f = {};
                      return (
                        (this.state.isHovering || this.state.isZooming) &&
                          ((f.transformOrigin = ""
                            .concat(this.state.x, " ")
                            .concat(this.state.y)),
                          (f.transform = "scale(".concat(
                            this.state.scale,
                            ")",
                          ))),
                        i.createElement(
                          d,
                          u({ className: p }, h),
                          i.createElement(
                            qe,
                            u(
                              {
                                alt: t,
                                className: S,
                                tag: r,
                                src: l,
                                onLoad: this.handleImageComplete,
                                onError: this.handleImageComplete,
                              },
                              n,
                            ),
                          ),
                          i.createElement(qe, {
                            className: m,
                            tag: "div",
                            src: c || l,
                            style: f,
                            isBgImage: !0,
                            onFocus: this.handleOnMouseOver,
                            onMouseOver: this.handleOnMouseOver,
                            onBlur: this.handleOnMouseOut,
                            onMouseOut: this.handleOnMouseOut,
                            onMouseMove: this.handleOnMouseMove,
                            onTouchStart: this.handleOnTouchStart,
                            onTouchEnd: this.handleOnTouchEnd,
                            onTouchMove: this.handleOnTouchMove,
                          }),
                          this.renderLoading(),
                        )
                      );
                    },
                  },
                ],
                [
                  {
                    key: "midpointBetweenTwoTouches",
                    value: function (e) {
                      var t = e.x1,
                        n = e.y1;
                      return { x: (t + e.x2) / 2, y: (n + e.y2) / 2 };
                    },
                  },
                  {
                    key: "distanceBetweenTwoTouches",
                    value: function (e) {
                      var t = e.x1,
                        n = e.y1,
                        i = e.x2,
                        r = e.y2;
                      return Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - n, 2));
                    },
                  },
                ],
              ),
              t
            );
          })(i.Component)),
          c(Re, "propTypes", {
            alt: j.string,
            bgImageProps: j.object,
            bgImageTag: j.string,
            carouselStore: j.object.isRequired,
            className: j.string,
            imageClassName: j.string,
            overlayClassName: j.string,
            spinner: j.func,
            src: j.string.isRequired,
            srcZoomed: j.string,
            tag: j.string,
            isPinchZoomEnabled: j.bool,
          }),
          c(Re, "defaultProps", {
            alt: void 0,
            bgImageProps: {},
            bgImageTag: "div",
            className: null,
            imageClassName: null,
            overlayClassName: null,
            isPinchZoomEnabled: !0,
            spinner: null,
            srcZoomed: null,
            tag: "div",
          }),
          Re),
        Ye =
          (A(Ue, function () {
            return {};
          }),
          {
            slide: "slide___3-Nqo",
            slideHorizontal: "slideHorizontal___1NzNV",
            slideInner: "slideInner___2mfX9",
            focusRing: "focusRing___1airF",
          }),
        Ve = [
          "ariaLabel",
          "carouselStore",
          "children",
          "className",
          "classNameHidden",
          "classNameVisible",
          "currentSlide",
          "index",
          "innerClassName",
          "innerTag",
          "naturalSlideHeight",
          "naturalSlideWidth",
          "onBlur",
          "onFocus",
          "orientation",
          "slideSize",
          "style",
          "tabIndex",
          "tag",
          "totalSlides",
          "visibleSlides",
          "isIntrinsicHeight",
        ],
        Ze =
          ((Ie = (function (e) {
            function t(e) {
              var i;
              return (
                s(this, t),
                ((i = n.call(this, e)).handleOnFocus = i.handleOnFocus.bind(
                  S(i),
                )),
                (i.handleOnBlur = i.handleOnBlur.bind(S(i))),
                (i.state = { focused: !1 }),
                i
              );
            }
            d(t, e);
            var n = m(t);
            return (
              l(t, [
                {
                  key: "isVisible",
                  value: function () {
                    var e = this.props,
                      t = e.currentSlide,
                      n = e.index,
                      i = e.visibleSlides;
                    return n >= t && n < t + i;
                  },
                },
                {
                  key: "handleOnFocus",
                  value: function (e) {
                    var t = this,
                      n = this.props.onFocus;
                    this.setState({ focused: !0 }, function () {
                      null !== n && n.call(t, e);
                    });
                  },
                },
                {
                  key: "handleOnBlur",
                  value: function (e) {
                    var t = this,
                      n = this.props.onBlur;
                    this.setState({ focused: !1 }, function () {
                      null !== n && n.call(t, e);
                    });
                  },
                },
                {
                  key: "renderFocusRing",
                  value: function () {
                    return this.state.focused
                      ? i.createElement("div", {
                          className: [
                            Ye.focusRing,
                            "carousel__slide-focus-ring",
                          ].join(" "),
                        })
                      : null;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props,
                      n = t.ariaLabel,
                      r = (t.carouselStore, t.children, t.className),
                      a = t.classNameHidden,
                      s = t.classNameVisible,
                      o = (t.currentSlide, t.index, t.innerClassName),
                      l = t.innerTag,
                      c = t.naturalSlideHeight,
                      d = t.naturalSlideWidth,
                      h = (t.onBlur, t.onFocus, t.orientation),
                      p = t.slideSize,
                      S = t.style,
                      m = t.tabIndex,
                      f = t.tag,
                      v = t.totalSlides,
                      g = (t.visibleSlides, t.isIntrinsicHeight),
                      y = b(t, Ve),
                      k = {};
                    "horizontal" === h
                      ? ((k.width = _(p)),
                        (k.paddingBottom = _((100 * c) / (d * v))))
                      : ((k.width = _(100)),
                        (k.paddingBottom = _((100 * c) / d)));
                    var w = {};
                    g &&
                      ("horizontal" === h
                        ? (k.height = "unset")
                        : (k.width = "unset"),
                      (k.paddingBottom = "unset"),
                      (w.position = "unset"));
                    var T = u({}, k, S),
                      M = this.isVisible(),
                      C = O([
                        Ye.slide,
                        "horizontal" === h && Ye.slideHorizontal,
                        "carousel__slide",
                        this.state.focused && "carousel__slide--focused",
                        M && s,
                        M && "carousel__slide--visible",
                        !M && a,
                        !M && "carousel__slide--hidden",
                        r,
                      ]),
                      E = O([Ye.slideInner, "carousel__inner-slide", o]),
                      P = this.isVisible() ? 0 : -1,
                      N = "number" == typeof m ? m : P;
                    return i.createElement(
                      f,
                      u(
                        {
                          ref: function (t) {
                            e.tagRef = t;
                          },
                          tabIndex: N,
                          "aria-selected": this.isVisible(),
                          "aria-label": n,
                          role: "option",
                          onFocus: this.handleOnFocus,
                          onBlur: this.handleOnBlur,
                          className: C,
                          style: T,
                        },
                        y,
                      ),
                      i.createElement(
                        l,
                        {
                          ref: function (t) {
                            e.innerTagRef = t;
                          },
                          className: E,
                          style: w,
                        },
                        this.props.children,
                        this.renderFocusRing(),
                      ),
                    );
                  },
                },
              ]),
              t
            );
          })(i.PureComponent)),
          c(Ie, "propTypes", {
            ariaLabel: j.string,
            carouselStore: j.object,
            children: q.children,
            className: j.string,
            classNameHidden: j.string,
            classNameVisible: j.string,
            currentSlide: j.number.isRequired,
            index: j.number.isRequired,
            innerClassName: j.string,
            innerTag: j.string,
            naturalSlideHeight: j.number.isRequired,
            naturalSlideWidth: j.number.isRequired,
            onBlur: j.func,
            onFocus: j.func,
            orientation: q.orientation.isRequired,
            slideSize: j.number.isRequired,
            style: j.object,
            tabIndex: j.number,
            tag: j.string,
            totalSlides: j.number.isRequired,
            visibleSlides: j.number.isRequired,
            isIntrinsicHeight: j.bool,
          }),
          c(Ie, "defaultProps", {
            ariaLabel: "slide",
            carouselStore: null,
            children: null,
            className: null,
            classNameHidden: null,
            classNameVisible: null,
            innerClassName: null,
            innerTag: "div",
            onBlur: null,
            onFocus: null,
            style: {},
            tabIndex: null,
            tag: "div",
            isIntrinsicHeight: !1,
          }),
          Ie),
        Ke = A(Ze, function (e) {
          return {
            currentSlide: e.currentSlide,
            naturalSlideHeight: e.naturalSlideHeight,
            naturalSlideWidth: e.naturalSlideWidth,
            orientation: e.orientation,
            slideSize: e.slideSize,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
            isIntrinsicHeight: e.isIntrinsicHeight,
          };
        }),
        Xe = (function () {
          function e() {
            s(this, e);
          }
          return (
            l(
              e,
              [
                {
                  key: "parents",
                  value: function (e, t) {
                    return null === e.parentNode
                      ? t
                      : this.parents(e.parentNode, t.concat([e]));
                  },
                },
                {
                  key: "scrollParent",
                  value: function (t) {
                    for (
                      var n = this.parents(t.parentNode, []), i = 0;
                      i < n.length;
                      i += 1
                    )
                      if (e.scroll(n[i])) return n[i];
                    return (
                      document.scrollingElement || document.documentElement
                    );
                  },
                },
                {
                  key: "getScrollParent",
                  value: function (t) {
                    return e.isNodeValid(t) ? this.scrollParent(t) : null;
                  },
                },
              ],
              [
                {
                  key: "style",
                  value: function (e, t) {
                    return getComputedStyle(e, null).getPropertyValue(t);
                  },
                },
                {
                  key: "overflow",
                  value: function (t) {
                    return (
                      e.style(t, "overflow") +
                      e.style(t, "overflow-y") +
                      e.style(t, "overflow-x")
                    );
                  },
                },
                {
                  key: "scroll",
                  value: function (t) {
                    return /(auto|scroll)/.test(e.overflow(t));
                  },
                },
                {
                  key: "isNodeValid",
                  value: function (e) {
                    return e instanceof HTMLElement || e instanceof SVGElement;
                  },
                },
              ],
            ),
            e
          );
        })(),
        Ge = {
          horizontalSlider: "horizontalSlider___281Ls",
          horizontalSliderTray: "horizontalSliderTray___1L-0W",
          verticalSlider: "verticalSlider___34ZFD",
          verticalSliderTray: "verticalSliderTray___267D8",
          verticalTray: "verticalTray___12Key",
          verticalSlideTrayWrap: "verticalSlideTrayWrap___2nO7o",
          sliderTray: "sliderTray___-vHFQ",
          sliderAnimation: "sliderAnimation___300FY",
          masterSpinnerContainer: "masterSpinnerContainer___1Z6hB",
        },
        Qe = [
          "ariaLabel",
          "carouselStore",
          "children",
          "className",
          "classNameAnimation",
          "classNameTray",
          "classNameTrayWrap",
          "currentSlide",
          "disableAnimation",
          "disableKeyboard",
          "dragEnabled",
          "hasMasterSpinner",
          "interval",
          "isPageScrollLocked",
          "isPlaying",
          "lockOnWindowScroll",
          "masterSpinnerFinished",
          "moveThreshold",
          "naturalSlideHeight",
          "naturalSlideWidth",
          "onMasterSpinner",
          "orientation",
          "playDirection",
          "privateUnDisableAnimation",
          "slideSize",
          "slideTraySize",
          "spinner",
          "style",
          "tabIndex",
          "totalSlides",
          "touchEnabled",
          "trayProps",
          "trayTag",
          "visibleSlides",
          "isIntrinsicHeight",
        ],
        $e = [
          "dragStep",
          "step",
          "infinite",
          "preventVerticalScrollOnTouch",
          "preventingVerticalScroll",
          "horizontalPixelThreshold",
          "verticalPixelThreshold",
        ],
        Je = [
          "className",
          "onClickCapture",
          "onMouseDown",
          "onTouchCancel",
          "onTouchEnd",
          "onTouchMove",
          "onTouchStart",
          "ref",
          "style",
        ],
        et =
          ((Le = (function (e) {
            function t(e) {
              var i;
              return (
                s(this, t),
                ((i = n.call(this, e)).getSliderRef = i.getSliderRef.bind(
                  S(i),
                )),
                (i.handleDocumentScroll = i.handleDocumentScroll.bind(S(i))),
                (i.handleOnClickCapture = i.handleOnClickCapture.bind(S(i))),
                (i.handleOnKeyDown = i.handleOnKeyDown.bind(S(i))),
                (i.handleOnMouseDown = i.handleOnMouseDown.bind(S(i))),
                (i.handleOnMouseMove = i.handleOnMouseMove.bind(S(i))),
                (i.handleOnMouseUp = i.handleOnMouseUp.bind(S(i))),
                (i.handleOnTouchCancel = i.handleOnTouchCancel.bind(S(i))),
                (i.handleOnTouchEnd = i.handleOnTouchEnd.bind(S(i))),
                (i.handleOnTouchMove = i.handleOnTouchMove.bind(S(i))),
                (i.handleOnTouchStart = i.handleOnTouchStart.bind(S(i))),
                (i.playBackward = i.playBackward.bind(S(i))),
                (i.playForward = i.playForward.bind(S(i))),
                (i.callCallback = i.callCallback.bind(S(i))),
                (i.blockWindowScroll = i.blockWindowScroll.bind(S(i))),
                (i.state = {
                  cancelNextClick: !1,
                  deltaX: 0,
                  deltaY: 0,
                  isBeingMouseDragged: !1,
                  isBeingTouchDragged: !1,
                  preventingVerticalScroll: !1,
                  startX: 0,
                  startY: 0,
                }),
                (i.interval = null),
                (i.isDocumentScrolling = null),
                (i.moveTimer = null),
                (i.originalOverflow = null),
                (i.scrollParent = null),
                (i.scrollStopTimer = null),
                i
              );
            }
            d(t, e);
            var n = m(t);
            return (
              l(
                t,
                [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.props.lockOnWindowScroll &&
                        window.addEventListener(
                          "scroll",
                          this.handleDocumentScroll,
                          !1,
                        ),
                        (this.props.touchEnabled ||
                          this.props.preventVerticalScrollOnTouch) &&
                          window.addEventListener(
                            "touchmove",
                            this.blockWindowScroll,
                            !1,
                          ),
                        document.documentElement.addEventListener(
                          "mouseleave",
                          this.handleOnMouseUp,
                          !1,
                        ),
                        document.documentElement.addEventListener(
                          "mousemove",
                          this.handleOnMouseMove,
                          !1,
                        ),
                        document.documentElement.addEventListener(
                          "mouseup",
                          this.handleOnMouseUp,
                          !1,
                        ),
                        this.props.isPlaying && this.play();
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      !e.isPlaying && this.props.isPlaying && this.play(),
                        e.isPlaying && !this.props.isPlaying && this.stop(),
                        !e.isPageScrollLocked &&
                          this.props.isPageScrollLocked &&
                          this.lockScroll(),
                        e.isPageScrollLocked &&
                          !this.props.isPageScrollLocked &&
                          this.unlockScroll(),
                        !1 === e.privateUnDisableAnimation &&
                          !0 === this.props.privateUnDisableAnimation &&
                          this.props.carouselStore.setStoreState({
                            privateUnDisableAnimation: !1,
                            disableAnimation: !1,
                          });
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      document.documentElement.removeEventListener(
                        "mouseleave",
                        this.handleOnMouseUp,
                        !1,
                      ),
                        document.documentElement.removeEventListener(
                          "mousemove",
                          this.handleOnMouseMove,
                          !1,
                        ),
                        document.documentElement.removeEventListener(
                          "mouseup",
                          this.handleOnMouseUp,
                          !1,
                        ),
                        window.removeEventListener(
                          "scroll",
                          this.handleDocumentScroll,
                          !1,
                        ),
                        window.removeEventListener(
                          "touchmove",
                          this.blockWindowScroll,
                          !1,
                        ),
                        this.stop(),
                        window.cancelAnimationFrame.call(
                          window,
                          this.moveTimer,
                        ),
                        window.clearTimeout(this.scrollStopTimer),
                        (this.isDocumentScrolling = null),
                        (this.moveTimer = null),
                        (this.scrollStopTimer = null);
                    },
                  },
                  {
                    key: "getSliderRef",
                    value: function (e) {
                      this.sliderTrayElement = e;
                    },
                  },
                  {
                    key: "fakeOnDragStart",
                    value: function (e) {
                      var t = e.screenX,
                        n = e.screenY,
                        i = e.touchDrag,
                        r = void 0 !== i && i,
                        a = e.mouseDrag,
                        s = void 0 !== a && a;
                      this.props.carouselStore.setStoreState({ isPlaying: !1 }),
                        window.cancelAnimationFrame.call(
                          window,
                          this.moveTimer,
                        ),
                        "vertical" === this.props.orientation &&
                          this.props.carouselStore.setStoreState({
                            isPageScrollLocked: !0,
                          }),
                        this.setState({
                          isBeingTouchDragged: r,
                          isBeingMouseDragged: s,
                          startX: t,
                          startY: n,
                        });
                    },
                  },
                  {
                    key: "fakeOnDragMove",
                    value: function (e, t) {
                      var n = this;
                      this.moveTimer = window.requestAnimationFrame.call(
                        window,
                        function () {
                          n.setState(function (i) {
                            return {
                              deltaX: e - i.startX,
                              deltaY: t - i.startY,
                              preventingVerticalScroll:
                                Math.abs(t - i.startY) <=
                                  n.props.verticalPixelThreshold &&
                                Math.abs(e - i.startX) >=
                                  n.props.horizontalPixelThreshold,
                            };
                          });
                        },
                      );
                    },
                  },
                  {
                    key: "fakeOnDragEnd",
                    value: function () {
                      window.cancelAnimationFrame.call(window, this.moveTimer),
                        this.computeCurrentSlide(),
                        "vertical" === this.props.orientation &&
                          this.props.carouselStore.setStoreState({
                            isPageScrollLocked: !1,
                          }),
                        this.setState({
                          deltaX: 0,
                          deltaY: 0,
                          isBeingTouchDragged: !1,
                          isBeingMouseDragged: !1,
                        }),
                        (this.isDocumentScrolling =
                          !this.props.lockOnWindowScroll && null);
                    },
                  },
                  {
                    key: "callCallback",
                    value: function (e, t) {
                      var n = this.props.trayProps;
                      n && "function" == typeof n[e] && (t.persist(), n[e](t));
                    },
                  },
                  {
                    key: "handleOnMouseDown",
                    value: function (e) {
                      this.props.dragEnabled
                        ? (e.preventDefault(),
                          this.fakeOnDragStart({
                            screenX: e.screenX,
                            screenY: e.screenY,
                            mouseDrag: !0,
                          }),
                          this.callCallback("onMouseDown", e))
                        : this.callCallback("onMouseDown", e);
                    },
                  },
                  {
                    key: "handleOnMouseMove",
                    value: function (e) {
                      this.state.isBeingMouseDragged &&
                        (this.setState({ cancelNextClick: !0 }),
                        e.preventDefault(),
                        this.fakeOnDragMove(e.screenX, e.screenY));
                    },
                  },
                  {
                    key: "handleOnMouseUp",
                    value: function (e) {
                      this.state.isBeingMouseDragged &&
                        (e.preventDefault(), this.fakeOnDragEnd());
                    },
                  },
                  {
                    key: "handleOnClickCapture",
                    value: function (e) {
                      this.state.cancelNextClick
                        ? (e.preventDefault(),
                          this.setState({ cancelNextClick: !1 }),
                          this.callCallback("onClickCapture", e))
                        : this.callCallback("onClickCapture", e);
                    },
                  },
                  {
                    key: "handleOnTouchStart",
                    value: function (e) {
                      if (this.props.touchEnabled) {
                        "vertical" === this.props.orientation &&
                          e.preventDefault();
                        var t = e.targetTouches[0];
                        this.fakeOnDragStart({
                          screenX: t.screenX,
                          screenY: t.screenY,
                          touchDrag: !0,
                        }),
                          this.callCallback("onTouchStart", e);
                      } else this.callCallback("onTouchStart", e);
                    },
                  },
                  {
                    key: "handleDocumentScroll",
                    value: function () {
                      var e = this;
                      this.props.touchEnabled &&
                        ((this.isDocumentScrolling = !0),
                        window.clearTimeout(this.scrollStopTimer),
                        (this.scrollStopTimer = window.setTimeout(function () {
                          e.isDocumentScrolling = !1;
                        }, 66)));
                    },
                  },
                  {
                    key: "handleOnTouchMove",
                    value: function (e) {
                      if (
                        !this.props.touchEnabled ||
                        (this.props.lockOnWindowScroll &&
                          this.isDocumentScrolling)
                      )
                        this.callCallback("onTouchMove", e);
                      else {
                        window.cancelAnimationFrame.call(
                          window,
                          this.moveTimer,
                        );
                        var t = e.targetTouches[0];
                        t &&
                          (this.fakeOnDragMove(t.screenX, t.screenY),
                          this.callCallback("onTouchMove", e));
                      }
                    },
                  },
                  {
                    key: "forward",
                    value: function () {
                      var e = this.props,
                        t = e.currentSlide,
                        n = e.step,
                        i = e.totalSlides,
                        r = e.visibleSlides;
                      return Math.min(t + n, i - r);
                    },
                  },
                  {
                    key: "backward",
                    value: function () {
                      var e = this.props,
                        t = e.currentSlide,
                        n = e.step;
                      return Math.max(t - n, 0);
                    },
                  },
                  {
                    key: "handleOnKeyDown",
                    value: function (e) {
                      var t = e.keyCode,
                        n = this.props,
                        i = n.carouselStore,
                        r = n.currentSlide,
                        a = n.disableKeyboard,
                        s = n.totalSlides,
                        o = n.visibleSlides,
                        l = {};
                      !0 === a ||
                        s <= o ||
                        (37 === t &&
                          (e.preventDefault(),
                          this.focus(),
                          (l.currentSlide = Math.max(0, r - 1)),
                          (l.isPlaying = !1)),
                        39 === t &&
                          (e.preventDefault(),
                          this.focus(),
                          (l.currentSlide = Math.min(s - o, r + 1)),
                          (l.isPlaying = !1)),
                        i.setStoreState(l));
                    },
                  },
                  {
                    key: "playForward",
                    value: function () {
                      var e = this.props,
                        t = e.carouselStore,
                        n = e.currentSlide;
                      t.setStoreState({
                        currentSlide: this.forward() === n ? 0 : this.forward(),
                      });
                    },
                  },
                  {
                    key: "playBackward",
                    value: function () {
                      var e = this.props,
                        t = e.carouselStore,
                        n = e.currentSlide,
                        i = e.totalSlides,
                        r = e.visibleSlides;
                      t.setStoreState({
                        currentSlide:
                          this.backward() === n ? i - r : this.backward(),
                      });
                    },
                  },
                  {
                    key: "play",
                    value: function () {
                      var e = this.props.playDirection;
                      this.interval = setInterval(
                        "forward" === e ? this.playForward : this.playBackward,
                        this.props.interval,
                      );
                    },
                  },
                  {
                    key: "stop",
                    value: function () {
                      window.clearInterval(this.interval),
                        (this.interval = null);
                    },
                  },
                  {
                    key: "lockScroll",
                    value: function () {
                      var e = new Xe();
                      (this.scrollParent = e.getScrollParent(
                        this.sliderTrayElement,
                      )),
                        this.scrollParent &&
                          ((this.originalOverflow =
                            this.originalOverflow ||
                            this.scrollParent.style.overflow),
                          (this.scrollParent.style.overflow = "hidden"));
                    },
                  },
                  {
                    key: "unlockScroll",
                    value: function () {
                      this.scrollParent &&
                        ((this.scrollParent.style.overflow =
                          this.originalOverflow),
                        (this.originalOverflow = null),
                        (this.scrollParent = null));
                    },
                  },
                  {
                    key: "blockWindowScroll",
                    value: function (e) {
                      this.state.preventingVerticalScroll &&
                        (e.preventDefault(), e.stopImmediatePropagation());
                    },
                  },
                  {
                    key: "computeCurrentSlide",
                    value: function () {
                      var e = t.slideSizeInPx(
                          this.props.orientation,
                          this.sliderTrayElement.clientWidth,
                          this.sliderTrayElement.clientHeight,
                          this.props.totalSlides,
                        ),
                        n = t.slidesMoved(
                          this.props.moveThreshold,
                          this.props.orientation,
                          this.state.deltaX,
                          this.state.deltaY,
                          e,
                          this.props.dragStep,
                        ),
                        i =
                          this.props.totalSlides -
                          Math.min(
                            this.props.totalSlides,
                            this.props.visibleSlides,
                          ),
                        r = F({
                          min: 0,
                          max: i,
                          x: this.props.currentSlide + n,
                        });
                      this.props.infinite &&
                        (this.props.currentSlide >= i && n > 0 && (r = 0),
                        0 === this.props.currentSlide && n < 0 && (r = i)),
                        this.props.carouselStore.setStoreState({
                          currentSlide: r,
                        });
                    },
                  },
                  {
                    key: "focus",
                    value: function () {
                      this.sliderElement.focus();
                    },
                  },
                  {
                    key: "handleOnTouchEnd",
                    value: function (e) {
                      this.endTouchMove(), this.callCallback("onTouchEnd", e);
                    },
                  },
                  {
                    key: "handleOnTouchCancel",
                    value: function (e) {
                      this.endTouchMove(),
                        this.callCallback("onTouchCancel", e);
                    },
                  },
                  {
                    key: "endTouchMove",
                    value: function () {
                      this.props.touchEnabled && this.fakeOnDragEnd();
                    },
                  },
                  {
                    key: "renderMasterSpinner",
                    value: function () {
                      var e = this.props,
                        t = e.hasMasterSpinner,
                        n = e.masterSpinnerFinished,
                        r = e.spinner;
                      return t && !n
                        ? ("function" == typeof this.props.onMasterSpinner &&
                            this.props.onMasterSpinner(),
                          i.createElement(
                            "div",
                            {
                              className: O([
                                Ge.masterSpinnerContainer,
                                "carousel__master-spinner-container",
                              ]),
                            },
                            r && r(),
                            !r && i.createElement(He, null),
                          ))
                        : null;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props,
                        n = t.ariaLabel,
                        r = (t.carouselStore, t.children),
                        a = t.className,
                        s = t.classNameAnimation,
                        o = t.classNameTray,
                        l = t.classNameTrayWrap,
                        c = t.currentSlide,
                        d = t.disableAnimation,
                        h =
                          (t.disableKeyboard,
                          t.dragEnabled,
                          t.hasMasterSpinner,
                          t.interval,
                          t.isPageScrollLocked,
                          t.isPlaying,
                          t.lockOnWindowScroll,
                          t.masterSpinnerFinished,
                          t.moveThreshold,
                          t.naturalSlideHeight),
                        p = t.naturalSlideWidth,
                        S = (t.onMasterSpinner, t.orientation),
                        m =
                          (t.playDirection,
                          t.privateUnDisableAnimation,
                          t.slideSize),
                        f = t.slideTraySize,
                        v = (t.spinner, t.style),
                        g = t.tabIndex,
                        y = (t.totalSlides, t.touchEnabled, t.trayProps),
                        k = t.trayTag,
                        w = t.visibleSlides,
                        T = t.isIntrinsicHeight,
                        M = b(t, Qe),
                        C = u({}, v),
                        E = {};
                      "vertical" === S &&
                        ((E.height = 0),
                        (E.paddingBottom = _((100 * h * w) / p)),
                        (E.width = _(100)));
                      var P = {},
                        N = _(m * c * -1);
                      (this.state.isBeingTouchDragged ||
                        this.state.isBeingMouseDragged ||
                        d) &&
                        (P.transition = "none"),
                        T && ((P.display = "flex"), (P.alignItems = "stretch")),
                        "vertical" === S
                          ? ((P.transform = "translateY("
                              .concat(N, ") translateY(")
                              .concat(this.state.deltaY, "px)")),
                            (P.width = _(100)),
                            (P.flexDirection = "column"))
                          : ((P.width = _(f)),
                            (P.transform = "translateX("
                              .concat(N, ") translateX(")
                              .concat(this.state.deltaX, "px)")),
                            (P.flexDirection = "row"));
                      var D = O([
                          "vertical" === S
                            ? Ge.verticalSlider
                            : Ge.horizontalSlider,
                          "carousel__slider",
                          "vertical" === S
                            ? "carousel__slider--vertical"
                            : "carousel__slider--horizontal",
                          a,
                        ]),
                        x = O([
                          Ge.sliderTrayWrap,
                          "carousel__slider-tray-wrapper",
                          "vertical" === S
                            ? Ge.verticalSlideTrayWrap
                            : Ge.horizontalTrayWrap,
                          "vertical" === S
                            ? "carousel__slider-tray-wrap--vertical"
                            : "carousel__slider-tray-wrap--horizontal",
                          l,
                        ]),
                        A = O([
                          Ge.sliderTray,
                          s || Ge.sliderAnimation,
                          "carousel__slider-tray",
                          "vertical" === S
                            ? Ge.verticalTray
                            : Ge.horizontalTray,
                          "vertical" === S
                            ? "carousel__slider-tray--vertical"
                            : "carousel__slider-tray--horizontal",
                          o,
                        ]),
                        j = null !== g ? g : 0,
                        R =
                          (M.dragStep,
                          M.step,
                          M.infinite,
                          M.preventVerticalScrollOnTouch,
                          M.preventingVerticalScroll,
                          M.horizontalPixelThreshold,
                          M.verticalPixelThreshold,
                          b(M, $e)),
                        I =
                          (y.className,
                          y.onClickCapture,
                          y.onMouseDown,
                          y.onTouchCancel,
                          y.onTouchEnd,
                          y.onTouchMove,
                          y.onTouchStart,
                          y.ref,
                          y.style,
                          b(y, Je));
                      return i.createElement(
                        "div",
                        u(
                          {
                            ref: function (t) {
                              e.sliderElement = t;
                            },
                            className: D,
                            "aria-live": "polite",
                            "aria-label": n,
                            style: C,
                            tabIndex: j,
                            onKeyDown: this.handleOnKeyDown,
                            role: "listbox",
                          },
                          R,
                        ),
                        i.createElement(
                          "div",
                          { className: x, style: E },
                          i.createElement(
                            k,
                            u(
                              {
                                ref: this.getSliderRef,
                                className: A,
                                style: P,
                                onTouchStart: this.handleOnTouchStart,
                                onTouchMove: this.handleOnTouchMove,
                                onTouchEnd: this.handleOnTouchEnd,
                                onTouchCancel: this.handleOnTouchCancel,
                                onMouseDown: this.handleOnMouseDown,
                                onClickCapture: this.handleOnClickCapture,
                              },
                              I,
                            ),
                            r,
                          ),
                          this.renderMasterSpinner(),
                        ),
                      );
                    },
                  },
                ],
                [
                  {
                    key: "slideSizeInPx",
                    value: function (e, t, n, i) {
                      return ("horizontal" === e ? t : n) / i;
                    },
                  },
                  {
                    key: "slidesMoved",
                    value: function (e, t, n, i, r, a) {
                      var s = "horizontal" === t ? n : i,
                        o = Math.abs(Math.round(s / r)),
                        l = Math.abs(s) >= r * e ? a : 0,
                        c = Math.max(l, o);
                      if (s < 0) return c;
                      var u = -c;
                      return 0 === u ? 0 : u;
                    },
                  },
                ],
              ),
              t
            );
          })(i.Component)),
          c(Le, "propTypes", {
            ariaLabel: j.string,
            carouselStore: j.object.isRequired,
            children: j.node.isRequired,
            className: j.string,
            classNameAnimation: j.string,
            classNameTray: j.string,
            classNameTrayWrap: j.string,
            currentSlide: j.number.isRequired,
            disableAnimation: j.bool,
            disableKeyboard: j.bool,
            dragEnabled: j.bool.isRequired,
            dragStep: j.number,
            hasMasterSpinner: j.bool.isRequired,
            infinite: j.bool,
            interval: j.number.isRequired,
            isPageScrollLocked: j.bool.isRequired,
            isPlaying: j.bool.isRequired,
            lockOnWindowScroll: j.bool.isRequired,
            preventVerticalScrollOnTouch: j.bool,
            horizontalPixelThreshold: j.number,
            verticalPixelThreshold: j.number,
            masterSpinnerFinished: j.bool.isRequired,
            moveThreshold: j.number,
            naturalSlideHeight: j.number.isRequired,
            naturalSlideWidth: j.number.isRequired,
            onMasterSpinner: j.func,
            orientation: q.orientation.isRequired,
            playDirection: q.direction.isRequired,
            privateUnDisableAnimation: j.bool,
            slideSize: j.number.isRequired,
            slideTraySize: j.number.isRequired,
            spinner: j.func,
            step: j.number.isRequired,
            style: j.object,
            tabIndex: j.number,
            totalSlides: j.number.isRequired,
            touchEnabled: j.bool.isRequired,
            trayProps: j.shape({
              className: j.string,
              onClickCapture: j.func,
              onMouseDown: j.func,
              onTouchCancel: j.func,
              onTouchEnd: j.func,
              onTouchMove: j.func,
              onTouchStart: j.func,
              ref: j.shape({}),
              style: j.string,
            }),
            trayTag: j.string,
            visibleSlides: j.number,
            isIntrinsicHeight: j.bool,
          }),
          c(Le, "defaultProps", {
            ariaLabel: "slider",
            className: null,
            classNameAnimation: null,
            classNameTray: null,
            classNameTrayWrap: null,
            disableAnimation: !1,
            disableKeyboard: !1,
            dragStep: 1,
            infinite: !1,
            preventVerticalScrollOnTouch: !0,
            horizontalPixelThreshold: 15,
            verticalPixelThreshold: 10,
            moveThreshold: 0.1,
            onMasterSpinner: null,
            privateUnDisableAnimation: !1,
            spinner: null,
            style: {},
            tabIndex: null,
            trayProps: {},
            trayTag: "div",
            visibleSlides: 1,
            isIntrinsicHeight: !1,
          }),
          Le),
        tt = A(et, function (e) {
          return {
            currentSlide: e.currentSlide,
            disableAnimation: e.disableAnimation,
            privateUnDisableAnimation: e.privateUnDisableAnimation,
            disableKeyboard: e.disableKeyboard,
            dragEnabled: e.dragEnabled,
            hasMasterSpinner: e.hasMasterSpinner,
            infinite: e.infinite,
            interval: e.interval,
            isPageScrollLocked: e.isPageScrollLocked,
            isPlaying: e.isPlaying,
            lockOnWindowScroll: e.lockOnWindowScroll,
            preventingVerticalScroll: e.preventingVerticalScroll,
            masterSpinnerFinished: e.masterSpinnerFinished,
            naturalSlideHeight: e.naturalSlideHeight,
            naturalSlideWidth: e.naturalSlideWidth,
            orientation: e.orientation,
            playDirection: e.playDirection,
            slideSize: e.slideSize,
            slideTraySize: e.slideTraySize,
            step: e.step,
            dragStep: e.dragStep,
            totalSlides: e.totalSlides,
            touchEnabled: e.touchEnabled,
            visibleSlides: e.visibleSlides,
            isIntrinsicHeight: e.isIntrinsicHeight,
          };
        });
    },
  },
]);
