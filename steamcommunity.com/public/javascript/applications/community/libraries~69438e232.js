/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [7055],
  {
    65731: (e, t, n) => {
      n.d(t, {
        Ap: () => at,
        CC: () => Oe,
        Yc: () => ee,
        Yw: () => L,
        _X: () => pe,
        cL: () => Ne,
        gi: () => se,
        q7: () => Je,
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
      function s(e) {
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
      function a(e, t) {
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
      function m(e, t) {
        if (null == e) return {};
        var n,
          i,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              r = {},
              s = Object.keys(e);
            for (i = 0; i < s.length; i++)
              (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (i = 0; i < s.length; i++)
            (n = s[i]),
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
      function f(e) {
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
      function b(e) {
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
      function E(e) {
        return e
          .map(function (e) {
            return !1 === e ? null : e;
          })
          .join(" ")
          .replace(/\s+/g, " ")
          .trim();
      }
      function O(e, t) {
        return ((100 / e) * t) / t;
      }
      function C(e, t) {
        return (100 * e) / t;
      }
      function w(e) {
        return "".concat(e, "%");
      }
      function T(e, t, n) {
        if (e === t) return !0;
        var i = X[Y(e)],
          r = X[Y(t)];
        return !(!i || i !== r) && i(e, t, n);
      }
      function M(e) {
        return function (t, n, i) {
          if (!i) return e(t, n, []);
          for (var r, s = i.length; (r = i[--s]); )
            if (r[0] === t && r[1] === n) return !0;
          return e(t, n, i);
        };
      }
      function P(e) {
        var t = [];
        for (var n in e) "constructor" !== n && t.push(n);
        return t;
      }
      function x(e) {
        var t = Object.prototype.toString.call(e);
        return (
          "[object RegExp]" === t ||
          "[object Date]" === t ||
          (function (e) {
            return e.$$typeof === $;
          })(e)
        );
      }
      function N(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? A(
              (function (e) {
                return Array.isArray(e) ? [] : {};
              })(e),
              e,
              t,
            )
          : e;
      }
      function _(e, t, n) {
        return e.concat(t).map(function (e) {
          return N(e, n);
        });
      }
      function D(e) {
        return Object.keys(e).concat(
          (function (e) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(e).filter(function (t) {
                  return Object.propertyIsEnumerable.call(e, t);
                })
              : [];
          })(e),
        );
      }
      function R(e, t) {
        try {
          return t in e;
        } catch (e) {
          return !1;
        }
      }
      function j(e, t, n) {
        var i = {};
        return (
          n.isMergeableObject(e) &&
            D(e).forEach(function (t) {
              i[t] = N(e[t], n);
            }),
          D(t).forEach(function (r) {
            (function (e, t) {
              return (
                R(e, t) &&
                !(
                  Object.hasOwnProperty.call(e, t) &&
                  Object.propertyIsEnumerable.call(e, t)
                )
              );
            })(e, r) ||
              (R(e, r) && n.isMergeableObject(t[r])
                ? (i[r] = (function (e, t) {
                    if (!t.customMerge) return A;
                    var n = t.customMerge(e);
                    return "function" == typeof n ? n : A;
                  })(r, n)(e[r], t[r], n))
                : (i[r] = N(t[r], n)));
          }),
          i
        );
      }
      function A(e, t, n) {
        ((n = n || {}).arrayMerge = n.arrayMerge || _),
          (n.isMergeableObject = n.isMergeableObject || Q),
          (n.cloneUnlessOtherwiseSpecified = N);
        var i = Array.isArray(t);
        return i === Array.isArray(e)
          ? i
            ? n.arrayMerge(e, t, n)
            : j(e, t, n)
          : N(t, n);
      }
      function L(e) {
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
                a(this, r),
                ((i = o.call(this, e, n)).state = t(s({}, n.state))),
                (i.updateStateProps = i.updateStateProps.bind(S(i))),
                i
              );
            }
            d(r, n);
            var o = f(r);
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
                    return !Z(t, this.state) || !Z(e, this.props);
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
                    this.setState(t(s({}, this.context.state)));
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this,
                      n = this.props,
                      r = n.children,
                      s = m(n, he),
                      a = J(this.state, s, B);
                    return i.createElement(
                      e,
                      u(
                        {
                          ref: function (e) {
                            t.instance = e;
                          },
                        },
                        a,
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
                      r,
                    );
                  },
                },
              ]),
              r
            );
          })(i.Component);
        return (
          c(n, "contextType", ee),
          c(n, "propTypes", { children: z.children }),
          c(n, "defaultProps", { children: null }),
          n
        );
      }
      k.resetWarningCache = y;
      var q = g(function (e) {
          e.exports = (function () {
            function e(e, t, n, i, r, s) {
              if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== s) {
                var a = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                );
                throw ((a.name = "Invariant Violation"), a);
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
        I = "loading",
        W = "success",
        H = "error",
        z = {
          children: q.oneOfType([q.arrayOf(q.node), q.node]),
          direction: q.oneOf(["forward", "backward"]),
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
          orientation: q.oneOf(["horizontal", "vertical"]),
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
        B = {
          arrayMerge: function (e, t) {
            return t;
          },
          clone: !1,
          customMerge: function (e) {
            if (
              "$$typeof" === e ||
              "_owner" === e ||
              "_store" === e ||
              "ref" === e ||
              "key" === e
            )
              return function (e, t) {
                return t;
              };
          },
        },
        V = "buttonBack___1mlaL",
        U = [
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
        K = (function (e) {
          function t(e) {
            var i;
            return (
              a(this, t),
              ((i = n.call(this, e)).handleOnClick = i.handleOnClick.bind(
                S(i),
              )),
              i
            );
          }
          d(t, e);
          var n = f(t);
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
                      s = t.step,
                      a = t.infinite,
                      o = t.visibleSlides,
                      l = t.totalSlides - o,
                      c = Math.max(i - s, 0);
                    a && (c = 0 === i ? l : c),
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
                      s = m(e, U),
                      a = E([V, "carousel__back-button", n]),
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
                          className: a,
                          onClick: this.handleOnClick,
                          disabled: o,
                        },
                        s,
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
      c(K, "propTypes", {
        carouselStore: q.object.isRequired,
        children: z.children.isRequired,
        className: q.string,
        currentSlide: q.number.isRequired,
        disabled: q.bool,
        onClick: q.func,
        step: q.number.isRequired,
        totalSlides: q.number.isRequired,
        visibleSlides: q.number.isRequired,
        infinite: q.bool,
      }),
        c(K, "defaultProps", {
          className: null,
          disabled: null,
          onClick: null,
          infinite: !1,
        });
      var Y = g(function (e, t) {
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
        X =
          (Y.types,
          {
            number: function (e, t) {
              return e != e && t != t;
            },
            function: function (e, t, n) {
              return (
                e.toString() === t.toString() &&
                X.object(e, t, n) &&
                T(e.prototype, t.prototype)
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
      (X.arguments =
        X["bit-array"] =
        X.array =
          M(function (e, t, n) {
            var i = e.length;
            if (i !== t.length) return !1;
            for (n.push([e, t]); i--; ) if (!T(e[i], t[i], n)) return !1;
            return !0;
          })),
        (X.object = M(function (e, t, n) {
          if ("function" == typeof e.equal)
            return n.push([e, t]), e.equal(t, n);
          var i = P(e),
            r = P(t),
            s = i.length;
          if (s !== r.length) return !1;
          for (i.sort(), r.sort(); s--; ) if (i[s] !== r[s]) return !1;
          for (n.push([e, t]), s = i.length; s--; ) {
            var a = i[s];
            if (!T(e[a], t[a], n)) return !1;
          }
          return !0;
        }));
      var Z = T,
        Q = function (e) {
          return (
            (function (e) {
              return !!e && "object" == typeof e;
            })(e) && !x(e)
          );
        },
        $ =
          "function" == typeof Symbol && Symbol.for
            ? Symbol.for("react.element")
            : 60103;
      A.all = function (e, t) {
        if (!Array.isArray(e))
          throw new Error("first argument should be an array");
        return e.reduce(function (e, n) {
          return A(e, n, t);
        }, {});
      };
      var G,
        J = A,
        ee = i.createContext(),
        te = function e(t) {
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
        ne = { masterSpinnerFinished: !1 },
        ie = (function () {
          function e(t) {
            a(this, e),
              (this.state = te(J(ne, t, B))),
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
                  (this.state = te(J(this.state, e, B))),
                    this.updateSubscribers(t);
                },
              },
              {
                key: "getStoreState",
                value: function () {
                  return J({}, this.state, B);
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
        re = [
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
        se =
          (c(
            (G = (function (e) {
              function t(e) {
                var i;
                if (
                  (a(this, t),
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
                  slideSize: O(e.totalSlides, e.visibleSlides),
                  slideTraySize: C(e.totalSlides, e.visibleSlides),
                  step: e.step,
                  dragStep: e.dragStep,
                  totalSlides: e.totalSlides,
                  touchEnabled: e.touchEnabled,
                  dragEnabled: e.dragEnabled,
                  visibleSlides: e.visibleSlides,
                  infinite: e.infinite,
                  isIntrinsicHeight: e.isIntrinsicHeight,
                };
                return (i.carouselStore = new ie(r)), i;
              }
              d(t, e);
              var n = f(t);
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
                          ((n.slideSize = O(
                            this.props.totalSlides,
                            this.props.visibleSlides,
                          )),
                          (n.slideTraySize = C(
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
                          m(e, re)),
                        r = E(["carousel", this.props.className]);
                      return i.createElement(
                        t,
                        u({ className: r }, n),
                        i.createElement(
                          ee.Provider,
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
              children: z.children.isRequired,
              className: q.string,
              currentSlide: q.number,
              disableAnimation: q.bool,
              disableKeyboard: q.bool,
              hasMasterSpinner: q.bool,
              interval: q.number,
              isPageScrollLocked: q.bool,
              isPlaying: q.bool,
              lockOnWindowScroll: q.bool,
              naturalSlideHeight: q.number.isRequired,
              naturalSlideWidth: q.number.isRequired,
              orientation: z.orientation,
              playDirection: z.direction,
              step: q.number,
              dragStep: q.number,
              tag: q.string,
              totalSlides: q.number.isRequired,
              touchEnabled: q.bool,
              dragEnabled: q.bool,
              visibleSlides: q.number,
              infinite: q.bool,
              isIntrinsicHeight: q.bool,
            },
          ),
          c(G, "defaultProps", {
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
          G);
      ee.Consumer;
      var ae,
        oe,
        le,
        ce,
        ue,
        de,
        he = ["children"],
        pe = L(K, function (e) {
          return {
            currentSlide: e.currentSlide,
            step: e.step,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
            infinite: e.infinite,
          };
        }),
        me = "buttonFirst___2rhFr",
        Se = [
          "carouselStore",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "totalSlides",
        ],
        fe =
          ((ae = (function (e) {
            function t() {
              var e;
              return (
                a(this, t),
                ((e = n.call(this)).handleOnClick = e.handleOnClick.bind(S(e))),
                e
              );
            }
            d(t, e);
            var n = f(t);
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
                      s = (e.onClick, e.totalSlides, m(e, Se)),
                      a = E([me, "carousel__first-button", t]),
                      o = null !== r ? r : 0 === n;
                    return i.createElement(
                      "button",
                      u(
                        {
                          type: "button",
                          "aria-label": "first",
                          className: a,
                          onClick: this.handleOnClick,
                          disabled: o,
                        },
                        s,
                      ),
                      this.props.children,
                    );
                  },
                },
              ]),
              t
            );
          })(i.Component)),
          c(ae, "propTypes", {
            carouselStore: q.object.isRequired,
            children: z.children.isRequired,
            className: q.string,
            currentSlide: q.number.isRequired,
            disabled: q.bool,
            onClick: q.func,
            totalSlides: q.number.isRequired,
          }),
          c(ae, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          ae),
        be =
          (L(fe, function (e) {
            return { currentSlide: e.currentSlide, totalSlides: e.totalSlides };
          }),
          "buttonLast___2yuh0"),
        ve = [
          "carouselStore",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "totalSlides",
          "visibleSlides",
        ],
        ge =
          ((oe = (function (e) {
            function t() {
              var e;
              return (
                a(this, t),
                ((e = n.call(this)).handleOnClick = e.handleOnClick.bind(S(e))),
                e
              );
            }
            d(t, e);
            var n = f(t);
            return (
              l(t, [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props,
                      n = t.carouselStore,
                      i = t.onClick,
                      r = t.totalSlides,
                      s = t.visibleSlides;
                    n.setStoreState(
                      { currentSlide: r - s, isPlaying: !1 },
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
                      s = (e.onClick, e.totalSlides),
                      a = e.visibleSlides,
                      o = m(e, ve),
                      l = E([be, "carousel__last-button", t]),
                      c = null !== r ? r : n >= s - a;
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
          c(oe, "propTypes", {
            carouselStore: q.object.isRequired,
            children: z.children.isRequired,
            className: q.string,
            currentSlide: q.number.isRequired,
            disabled: q.bool,
            onClick: q.func,
            totalSlides: q.number.isRequired,
            visibleSlides: q.number.isRequired,
          }),
          c(oe, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          oe),
        ye =
          (L(ge, function (e) {
            return {
              currentSlide: e.currentSlide,
              totalSlides: e.totalSlides,
              visibleSlides: e.visibleSlides,
            };
          }),
          "buttonNext___2mOCa"),
        ke = [
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
        Ee =
          ((le = (function (e) {
            function t(e) {
              var i;
              return (
                a(this, t),
                ((i = n.call(this, e)).handleOnClick = i.handleOnClick.bind(
                  S(i),
                )),
                i
              );
            }
            d(t, e);
            var n = f(t);
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
                        s = t.carouselStore,
                        a = t.infinite,
                        o = t.totalSlides - t.visibleSlides,
                        l = r + n,
                        c = Math.min(l, o);
                      a && (c = o === n ? 0 : c),
                        s.setStoreState(
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
                        s = e.disabled,
                        a = (e.onClick, e.step, e.totalSlides),
                        o = e.visibleSlides,
                        l = e.infinite,
                        c = m(e, ke),
                        d = E([ye, "carousel__next-button", n]),
                        h = t.setDisabled(s, r, o, a, l);
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
          c(le, "propTypes", {
            carouselStore: q.object.isRequired,
            children: z.children.isRequired,
            className: q.string,
            currentSlide: q.number.isRequired,
            disabled: q.bool,
            onClick: q.func,
            step: q.number.isRequired,
            totalSlides: q.number.isRequired,
            visibleSlides: q.number.isRequired,
            infinite: q.bool,
          }),
          c(le, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
            infinite: !1,
          }),
          le),
        Oe = L(Ee, function (e) {
          return {
            currentSlide: e.currentSlide,
            step: e.step,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
            infinite: e.infinite,
          };
        }),
        Ce = "buttonNext___3Lm3s",
        we = [
          "carouselStore",
          "children",
          "childrenPaused",
          "childrenPlaying",
          "className",
          "isPlaying",
          "onClick",
        ],
        Te =
          ((ce = (function (e) {
            function t(e) {
              var i;
              return (
                a(this, t),
                ((i = n.call(this, e)).handleOnClick = i.handleOnClick.bind(
                  S(i),
                )),
                i
              );
            }
            d(t, e);
            var n = f(t);
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
                      s = e.isPlaying,
                      a = (e.onClick, m(e, we)),
                      o = E([Ce, "carousel__play-button", r]);
                    return i.createElement(
                      "button",
                      u(
                        {
                          type: "button",
                          "aria-label": "play",
                          className: o,
                          onClick: this.handleOnClick,
                        },
                        a,
                      ),
                      s && n,
                      !s && t,
                      this.props.children,
                    );
                  },
                },
              ]),
              t
            );
          })(i.PureComponent)),
          c(ce, "propTypes", {
            carouselStore: q.object.isRequired,
            children: q.node,
            childrenPaused: q.node,
            childrenPlaying: q.node,
            className: q.string,
            isPlaying: q.bool.isRequired,
            onClick: q.func,
          }),
          c(ce, "defaultProps", {
            children: null,
            childrenPaused: null,
            childrenPlaying: null,
            className: null,
            onClick: null,
          }),
          ce),
        Me =
          (L(Te, function (e) {
            return { isPlaying: e.isPlaying };
          }),
          { dot: "dot___3c3SI" }),
        Pe = [
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
        xe =
          ((ue = (function (e) {
            function t(e) {
              var i;
              return (
                a(this, t),
                ((i = n.call(this, e)).handleOnClick = i.handleOnClick.bind(
                  S(i),
                )),
                i
              );
            }
            d(t, e);
            var n = f(t);
            return (
              l(t, [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props,
                      n = t.carouselStore,
                      i = t.onClick,
                      r = t.slide,
                      s = t.totalSlides,
                      a = t.visibleSlides,
                      o = r >= s - a ? s - a : r;
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
                      s = (e.onClick, e.selected),
                      a = e.slide,
                      o = (e.totalSlides, e.visibleSlides),
                      l = m(e, Pe),
                      c = a >= n && a < n + o,
                      d = "boolean" == typeof s ? s : c,
                      h = "boolean" == typeof r ? r : !0 === c,
                      p = E([
                        Me.dot,
                        d && Me.dotSelected,
                        "carousel__dot",
                        "carousel__dot--".concat(a),
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
          c(ue, "propTypes", {
            carouselStore: q.object.isRequired,
            children: z.children,
            className: q.string,
            currentSlide: q.number.isRequired,
            disabled: q.bool,
            onClick: q.func,
            selected: q.bool,
            slide: q.number.isRequired,
            totalSlides: q.number.isRequired,
            visibleSlides: q.number.isRequired,
          }),
          c(ue, "defaultProps", {
            children: null,
            className: null,
            disabled: null,
            onClick: null,
            selected: null,
          }),
          ue),
        Ne = L(xe, function (e) {
          return {
            currentSlide: e.currentSlide,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
          };
        }),
        _e = {},
        De = ["renderDots"],
        Re = [
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
        je =
          ((de = (function (e) {
            function t() {
              return a(this, t), n.apply(this, arguments);
            }
            d(t, e);
            var n = f(t);
            return (
              l(t, [
                {
                  key: "renderDots",
                  value: function () {
                    var e = this.props,
                      t = e.currentSlide,
                      n = e.totalSlides,
                      r = e.visibleSlides,
                      s = e.disableActiveDots,
                      a = e.showAsSelectedForCurrentSlideOnly,
                      o = e.renderDots;
                    if (o) {
                      var l = this.props;
                      return l.renderDots, o(m(l, De));
                    }
                    for (var c = [], u = 0; u < n; u += 1) {
                      var d = a ? u === t : u >= t && u < t + r,
                        h = u >= n - r ? n - r : u;
                      c.push(
                        i.createElement(
                          Ne,
                          { key: u, slide: h, selected: d, disabled: !!s && d },
                          i.createElement(
                            "span",
                            { className: E["carousel__dot-group-dot"] },
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
                        m(e, Re)),
                      s = E([_e.DotGroup, "carousel__dot-group", n]);
                    return i.createElement(
                      "div",
                      u({ className: s }, r),
                      this.renderDots(),
                      t,
                    );
                  },
                },
              ]),
              t
            );
          })(i.Component)),
          c(de, "propTypes", {
            children: z.children,
            className: q.string,
            currentSlide: q.number.isRequired,
            carouselStore: q.object.isRequired,
            totalSlides: q.number.isRequired,
            visibleSlides: q.number.isRequired,
            dotNumbers: q.bool,
            disableActiveDots: q.bool,
            showAsSelectedForCurrentSlideOnly: q.bool,
            renderDots: q.func,
          }),
          c(de, "defaultProps", {
            children: null,
            className: null,
            dotNumbers: !1,
            disableActiveDots: !0,
            showAsSelectedForCurrentSlideOnly: !1,
            renderDots: null,
          }),
          de),
        Ae =
          (L(je, function (e) {
            return {
              currentSlide: e.currentSlide,
              totalSlides: e.totalSlides,
              visibleSlides: e.visibleSlides,
            };
          }),
          { image: "image___xtQGH" }),
        Le = ["src", "alt"],
        qe = [
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
        Ie = (function (e) {
          function t(e) {
            var i;
            return (
              a(this, t),
              ((i = n.call(this, e)).state = { imageStatus: I }),
              (i.handleImageLoad = i.handleImageLoad.bind(S(i))),
              (i.handleImageError = i.handleImageError.bind(S(i))),
              (i.image = null),
              i
            );
          }
          d(t, e);
          var n = f(t);
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
                      (this.setState({ imageStatus: I }),
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
                    this.setState({ imageStatus: W }),
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
                    this.setState({ imageStatus: H }),
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
                      n = E([
                        Ae.image,
                        Ae.imageLoading,
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
                      n = E([
                        Ae.image,
                        Ae.imageError,
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
                      s = E([
                        Ae.image,
                        "carousel__image",
                        this.props.isBgImage &&
                          "carousel__image--with-background",
                        "carousel__image--success",
                        this.props.className,
                      ]),
                      a = u({}, n),
                      o = e;
                    if ("img" !== r) {
                      var l = e.src;
                      e.alt,
                        (o = m(e, Le)),
                        (a = u({}, n, {
                          backgroundImage: 'url("'.concat(l, '")'),
                          backgroundSize: "cover",
                        }));
                    }
                    return i.createElement(
                      r,
                      u({ className: s, style: a }, o),
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
                        m(e, qe));
                    switch (this.state.imageStatus) {
                      case I:
                        return this.renderLoading(t);
                      case W:
                        return this.renderSuccess(t);
                      case H:
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
      c(Ie, "propTypes", {
        alt: q.string,
        carouselStore: q.object.isRequired,
        children: z.children,
        className: q.string,
        hasMasterSpinner: q.bool.isRequired,
        isBgImage: z.isBgImage,
        onError: q.func,
        onLoad: q.func,
        renderError: q.func,
        renderLoading: q.func,
        src: q.string.isRequired,
        style: q.object,
        tag: q.string,
      }),
        c(Ie, "defaultProps", {
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
      var We,
        He,
        ze,
        Fe,
        Be = L(Ie, function (e) {
          return {
            hasMasterSpinner: e.hasMasterSpinner,
            orientation: e.orientation,
          };
        }),
        Ve = "spinner___27VUp",
        Ue = ["className"],
        Ke =
          (c(
            (We = (function (e) {
              function t() {
                return a(this, t), n.apply(this, arguments);
              }
              d(t, e);
              var n = f(t);
              return (
                l(t, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        n = m(e, Ue),
                        r = E([Ve, "carousel__spinner", t]);
                      return i.createElement("div", u({ className: r }, n));
                    },
                  },
                ]),
                t
              );
            })(i.PureComponent)),
            "propTypes",
            { className: q.string },
          ),
          c(We, "defaultProps", { className: null }),
          We),
        Ye = {
          container: "container___2O72F",
          overlay: "overlay___IV4qY",
          hover: "hover___MYy31",
          zoom: "zoom___3kqYk",
          loading: "loading___1pvNI",
          imageLoadingSpinnerContainer: "imageLoadingSpinnerContainer___3UIPD",
        },
        Xe = [
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
        Ze =
          ((He = (function (e) {
            function t(e) {
              var i;
              return (
                a(this, t),
                ((i = n.call(this, e)).state = {
                  isImageLoading: !0,
                  isImageLoadingError: !0,
                  isHovering: !1,
                  isZooming: !1,
                  x: null,
                  y: null,
                  scale: 1,
                }),
                (i.tpCache = {}),
                (i.handleImageComplete = i.handleImageComplete.bind(S(i))),
                (i.handleImageLoadError = i.handleImageLoadError.bind(S(i))),
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
            var n = f(t);
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
                    value: function (e) {
                      this.setState({ isImageLoading: !1 }),
                        this.props && this.props.onLoad && this.props.onLoad(e);
                    },
                  },
                  {
                    key: "handleImageLoadError",
                    value: function (e) {
                      this.setState({
                        isImageLoadingError: !0,
                        isImageLoading: !1,
                      }),
                        this.props &&
                          this.props.onError &&
                          this.props.onError(e);
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
                        var t = w(
                            (e.nativeEvent.offsetX / e.target.offsetWidth) *
                              100,
                          ),
                          n = w(
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
                        (b(e.targetTouches).forEach(function (e) {
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
                        var i = b(e.targetTouches)
                          .filter(function (e) {
                            return n.tpCache[e.identifier];
                          })
                          .slice(0, 2);
                        if (2 === i.length) {
                          e.stopPropagation();
                          var r = e.target.getBoundingClientRect(),
                            a = i[0].identifier,
                            o = i[1].identifier,
                            l = {
                              x1: this.tpCache[a].clientX,
                              y1: this.tpCache[a].clientY,
                              x2: this.tpCache[o].clientX,
                              y2: this.tpCache[o].clientY,
                            };
                          l.distance = t.distanceBetweenTwoTouches(s({}, l));
                          var c = t.midpointBetweenTwoTouches(s({}, l));
                          (l.cx = c.x), (l.cy = c.y);
                          var u = {
                            x1: i[0].clientX,
                            y1: i[0].clientY,
                            x2: i[1].clientX,
                            y2: i[1].clientY,
                          };
                          u.distance = t.distanceBetweenTwoTouches(s({}, u));
                          var d = t.midpointBetweenTwoTouches(s({}, u));
                          (u.cx = d.x), (u.cy = d.y);
                          var h = w(
                              F({
                                min: 0,
                                max: 100,
                                x: ((u.cx - r.left) / r.width) * 100,
                              }),
                            ),
                            p = w(
                              F({
                                min: 0,
                                max: 100,
                                x: ((u.cy - r.top) / r.height) * 100,
                              }),
                            ),
                            m = function (e) {
                              return F({
                                min: 1,
                                max: 3,
                                x: e.scale + (u.distance - l.distance) / 100,
                              });
                            };
                          this.setState(function (e) {
                            return {
                              isZooming: 1 !== m(e),
                              scale: m(e),
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
                        (b(e.changedTouches).forEach(function (e) {
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
                            className: E([
                              Ye.imageLoadingSpinnerContainer,
                              "carousel__image-loading-spinner-container",
                            ]),
                          },
                          e && e(),
                          !e && i.createElement(Ke, null),
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
                        s = (e.carouselStore, e.className),
                        a = e.imageClassName,
                        o = e.overlayClassName,
                        l = (e.isPinchZoomEnabled, e.spinner, e.src),
                        c = e.srcZoomed,
                        d = e.tag,
                        h = m(e, Xe),
                        p = E([Ye.container, s]),
                        S = E([Ye.image, "carousel__zoom-image", a]),
                        f = E([
                          Ye.overlay,
                          "carousel__zoom-image-overlay",
                          this.state.isHovering && Ye.hover,
                          this.state.isZooming && Ye.zoom,
                          this.state.isHovering &&
                            "carousel__zoom-image-overlay--hovering",
                          this.state.isZooming &&
                            "carousel__zoom-image-overlay--zooming",
                          o,
                        ]),
                        b = {};
                      return (
                        (this.state.isHovering || this.state.isZooming) &&
                          ((b.transformOrigin = ""
                            .concat(this.state.x, " ")
                            .concat(this.state.y)),
                          (b.transform = "scale(".concat(
                            this.state.scale,
                            ")",
                          ))),
                        i.createElement(
                          d,
                          u({ className: p }, h),
                          i.createElement(
                            Be,
                            u(
                              {
                                alt: t,
                                className: S,
                                tag: r,
                                src: l,
                                onLoad: this.handleImageComplete,
                                onError: this.handleImageLoadError,
                              },
                              n,
                            ),
                          ),
                          i.createElement(Be, {
                            className: f,
                            tag: "div",
                            src: c || l,
                            style: b,
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
          c(He, "propTypes", {
            alt: q.string,
            bgImageProps: q.object,
            bgImageTag: q.string,
            carouselStore: q.object.isRequired,
            className: q.string,
            imageClassName: q.string,
            overlayClassName: q.string,
            spinner: q.func,
            onLoad: q.func,
            onError: q.func,
            src: q.string.isRequired,
            srcZoomed: q.string,
            tag: q.string,
            isPinchZoomEnabled: q.bool,
          }),
          c(He, "defaultProps", {
            alt: void 0,
            bgImageProps: {},
            bgImageTag: "div",
            className: null,
            imageClassName: null,
            overlayClassName: null,
            isPinchZoomEnabled: !0,
            spinner: null,
            onLoad: null,
            onError: null,
            srcZoomed: null,
            tag: "div",
          }),
          He),
        Qe =
          (L(Ze, function () {
            return {};
          }),
          {
            slide: "slide___3-Nqo",
            slideHorizontal: "slideHorizontal___1NzNV",
            slideInner: "slideInner___2mfX9",
            focusRing: "focusRing___1airF",
          }),
        $e = [
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
          "tag",
          "totalSlides",
          "visibleSlides",
          "isIntrinsicHeight",
        ],
        Ge =
          ((ze = (function (e) {
            function t(e) {
              var i;
              return (
                a(this, t),
                ((i = n.call(this, e)).handleOnFocus = i.handleOnFocus.bind(
                  S(i),
                )),
                (i.handleOnBlur = i.handleOnBlur.bind(S(i))),
                (i.state = { focused: !1 }),
                i
              );
            }
            d(t, e);
            var n = f(t);
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
                            Qe.focusRing,
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
                      s = t.classNameHidden,
                      a = t.classNameVisible,
                      o = (t.currentSlide, t.index, t.innerClassName),
                      l = t.innerTag,
                      c = t.naturalSlideHeight,
                      d = t.naturalSlideWidth,
                      h = (t.onBlur, t.onFocus, t.orientation),
                      p = t.slideSize,
                      S = t.style,
                      f = t.tag,
                      b = t.totalSlides,
                      v = (t.visibleSlides, t.isIntrinsicHeight),
                      g = m(t, $e),
                      y = {};
                    "horizontal" === h
                      ? ((y.width = w(p)),
                        (y.paddingBottom = w((100 * c) / (d * b))))
                      : ((y.width = w(100)),
                        (y.paddingBottom = w((100 * c) / d)));
                    var k = {};
                    v &&
                      ("horizontal" === h
                        ? (y.height = "unset")
                        : (y.width = "unset"),
                      (y.paddingBottom = "unset"),
                      (k.position = "unset"));
                    var O = u({}, y, S),
                      C = this.isVisible(),
                      T = E([
                        Qe.slide,
                        "horizontal" === h && Qe.slideHorizontal,
                        "carousel__slide",
                        this.state.focused && "carousel__slide--focused",
                        C && a,
                        C && "carousel__slide--visible",
                        !C && s,
                        !C && "carousel__slide--hidden",
                        r,
                      ]),
                      M = E([Qe.slideInner, "carousel__inner-slide", o]);
                    return i.createElement(
                      f,
                      u(
                        {
                          ref: function (t) {
                            e.tagRef = t;
                          },
                          "aria-selected": this.isVisible(),
                          "aria-label": n,
                          role: this.props.role,
                          onFocus: this.handleOnFocus,
                          onBlur: this.handleOnBlur,
                          className: T,
                          style: O,
                        },
                        g,
                      ),
                      i.createElement(
                        l,
                        {
                          ref: function (t) {
                            e.innerTagRef = t;
                          },
                          className: M,
                          style: k,
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
          c(ze, "propTypes", {
            ariaLabel: q.string,
            carouselStore: q.object,
            children: z.children,
            className: q.string,
            classNameHidden: q.string,
            classNameVisible: q.string,
            currentSlide: q.number.isRequired,
            index: q.number.isRequired,
            innerClassName: q.string,
            innerTag: q.string,
            naturalSlideHeight: q.number.isRequired,
            naturalSlideWidth: q.number.isRequired,
            onBlur: q.func,
            onFocus: q.func,
            orientation: z.orientation.isRequired,
            slideSize: q.number.isRequired,
            role: q.string,
            style: q.object,
            tag: q.string,
            totalSlides: q.number.isRequired,
            visibleSlides: q.number.isRequired,
            isIntrinsicHeight: q.bool,
          }),
          c(ze, "defaultProps", {
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
            role: "option",
            style: {},
            tag: "div",
            isIntrinsicHeight: !1,
          }),
          ze),
        Je = L(Ge, function (e) {
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
        et = (function () {
          function e() {
            a(this, e);
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
        tt = {
          horizontalSlider: "horizontalSlider___281Ls",
          touchDisabled: "touchDisabled___2qs4y",
          horizontalSliderTray: "horizontalSliderTray___1L-0W",
          verticalSlider: "verticalSlider___34ZFD",
          verticalSliderTray: "verticalSliderTray___267D8",
          verticalTray: "verticalTray___12Key",
          verticalSlideTrayWrap: "verticalSlideTrayWrap___2nO7o",
          sliderTray: "sliderTray___-vHFQ",
          sliderAnimation: "sliderAnimation___300FY",
          masterSpinnerContainer: "masterSpinnerContainer___1Z6hB",
        },
        nt = [
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
          "totalSlides",
          "touchEnabled",
          "trayProps",
          "trayTag",
          "visibleSlides",
          "isIntrinsicHeight",
        ],
        it = [
          "dragStep",
          "step",
          "infinite",
          "preventVerticalScrollOnTouch",
          "preventingVerticalScroll",
          "horizontalPixelThreshold",
          "verticalPixelThreshold",
        ],
        rt = [
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
        st =
          ((Fe = (function (e) {
            function t(e) {
              var i;
              return (
                a(this, t),
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
            var n = f(t);
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
                      if (((this.sliderTrayElement = e), e && window)) {
                        var t = e.closest(".carousel");
                        t &&
                          (this.rtl =
                            "rtl" ===
                            window
                              .getComputedStyle(t, null)
                              .getPropertyValue("direction"));
                      }
                    },
                  },
                  {
                    key: "fakeOnDragStart",
                    value: function (e) {
                      var t = e.screenX,
                        n = e.screenY,
                        i = e.touchDrag,
                        r = void 0 !== i && i,
                        s = e.mouseDrag,
                        a = void 0 !== s && s;
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
                          isBeingMouseDragged: a,
                          startX: t,
                          startY: n,
                        });
                    },
                  },
                  {
                    key: "fakeOnDragMove",
                    value: function (e, t) {
                      var n = this;
                      window.cancelAnimationFrame.call(window, this.moveTimer),
                        (this.moveTimer = window.requestAnimationFrame.call(
                          window,
                          function () {
                            n.setState(function (i) {
                              return {
                                deltaX: (e - i.startX) * (n.rtl ? -1 : 1),
                                deltaY: t - i.startY,
                                preventingVerticalScroll:
                                  Math.abs(t - i.startY) <=
                                    n.props.verticalPixelThreshold &&
                                  Math.abs(e - i.startX) >=
                                    n.props.horizontalPixelThreshold,
                              };
                            });
                          },
                        ));
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
                        s = n.disableKeyboard,
                        a = n.totalSlides,
                        o = n.visibleSlides,
                        l = {};
                      !0 === s ||
                        a <= o ||
                        (37 === t &&
                          (e.preventDefault(),
                          this.focus(),
                          (l.currentSlide = Math.max(0, r - 1)),
                          (l.isPlaying = !1)),
                        39 === t &&
                          (e.preventDefault(),
                          this.focus(),
                          (l.currentSlide = Math.min(a - o, r + 1)),
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
                      var e = new et();
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
                              className: E([
                                tt.masterSpinnerContainer,
                                "carousel__master-spinner-container",
                              ]),
                            },
                            r && r(),
                            !r && i.createElement(Ke, null),
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
                        s = t.className,
                        a = t.classNameAnimation,
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
                        f =
                          (t.playDirection,
                          t.privateUnDisableAnimation,
                          t.slideSize),
                        b = t.slideTraySize,
                        v = (t.spinner, t.style),
                        g = (t.totalSlides, t.touchEnabled),
                        y = t.trayProps,
                        k = t.trayTag,
                        O = t.visibleSlides,
                        C = t.isIntrinsicHeight,
                        T = m(t, nt),
                        M = u({}, v),
                        P = {};
                      "vertical" === S &&
                        ((P.height = 0),
                        (P.paddingBottom = w((100 * h * O) / p)),
                        (P.width = w(100)));
                      var x = {},
                        N = w(f * c * -1);
                      (this.state.isBeingTouchDragged ||
                        this.state.isBeingMouseDragged ||
                        d) &&
                        (x.transition = "none"),
                        C && ((x.display = "flex"), (x.alignItems = "stretch")),
                        "vertical" === S
                          ? ((x.transform = "translateY("
                              .concat(N, ") translateY(")
                              .concat(this.state.deltaY, "px)")),
                            (x.width = w(100)),
                            (x.flexDirection = "column"))
                          : ((x.width = w(b)),
                            (x.transform = "translateX("
                              .concat(N, ") translateX(")
                              .concat(this.state.deltaX, "px)")),
                            (x.flexDirection = "row"));
                      var _ = E([
                          "vertical" === S
                            ? tt.verticalSlider
                            : tt.horizontalSlider,
                          !g && tt.touchDisabled,
                          "carousel__slider",
                          "vertical" === S
                            ? "carousel__slider--vertical"
                            : "carousel__slider--horizontal",
                          s,
                        ]),
                        D = E([
                          tt.sliderTrayWrap,
                          "carousel__slider-tray-wrapper",
                          "vertical" === S
                            ? tt.verticalSlideTrayWrap
                            : tt.horizontalTrayWrap,
                          "vertical" === S
                            ? "carousel__slider-tray-wrap--vertical"
                            : "carousel__slider-tray-wrap--horizontal",
                          l,
                        ]),
                        R = E([
                          tt.sliderTray,
                          a || tt.sliderAnimation,
                          "carousel__slider-tray",
                          "vertical" === S
                            ? tt.verticalTray
                            : tt.horizontalTray,
                          "vertical" === S
                            ? "carousel__slider-tray--vertical"
                            : "carousel__slider-tray--horizontal",
                          o,
                        ]),
                        j =
                          (T.dragStep,
                          T.step,
                          T.infinite,
                          T.preventVerticalScrollOnTouch,
                          T.preventingVerticalScroll,
                          T.horizontalPixelThreshold,
                          T.verticalPixelThreshold,
                          m(T, it)),
                        A =
                          (y.className,
                          y.onClickCapture,
                          y.onMouseDown,
                          y.onTouchCancel,
                          y.onTouchEnd,
                          y.onTouchMove,
                          y.onTouchStart,
                          y.ref,
                          y.style,
                          m(y, rt));
                      return i.createElement(
                        "div",
                        u(
                          {
                            ref: function (t) {
                              e.sliderElement = t;
                            },
                            className: _,
                            "aria-live": "polite",
                            "aria-label": n,
                            role: this.props.role,
                            style: M,
                            onKeyDown: this.handleOnKeyDown,
                          },
                          j,
                        ),
                        i.createElement(
                          "div",
                          { className: D, style: P },
                          i.createElement(
                            k,
                            u(
                              {
                                ref: this.getSliderRef,
                                className: R,
                                style: x,
                                onTouchStart: this.handleOnTouchStart,
                                onTouchMove: this.handleOnTouchMove,
                                onTouchEnd: this.handleOnTouchEnd,
                                onTouchCancel: this.handleOnTouchCancel,
                                onMouseDown: this.handleOnMouseDown,
                                onClickCapture: this.handleOnClickCapture,
                              },
                              A,
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
                    value: function (e, t, n, i, r, s) {
                      var a = "horizontal" === t ? n : i,
                        o = Math.abs(Math.round(a / r)),
                        l = Math.abs(a) >= r * e ? s : 0,
                        c = Math.max(l, o);
                      if (a < 0) return c;
                      var u = -c;
                      return 0 === u ? 0 : u;
                    },
                  },
                ],
              ),
              t
            );
          })(i.Component)),
          c(Fe, "propTypes", {
            ariaLabel: q.string,
            carouselStore: q.object.isRequired,
            children: q.node.isRequired,
            className: q.string,
            classNameAnimation: q.string,
            classNameTray: q.string,
            classNameTrayWrap: q.string,
            currentSlide: q.number.isRequired,
            disableAnimation: q.bool,
            disableKeyboard: q.bool,
            dragEnabled: q.bool.isRequired,
            dragStep: q.number,
            hasMasterSpinner: q.bool.isRequired,
            infinite: q.bool,
            interval: q.number.isRequired,
            isPageScrollLocked: q.bool.isRequired,
            isPlaying: q.bool.isRequired,
            lockOnWindowScroll: q.bool.isRequired,
            preventVerticalScrollOnTouch: q.bool,
            horizontalPixelThreshold: q.number,
            verticalPixelThreshold: q.number,
            masterSpinnerFinished: q.bool.isRequired,
            moveThreshold: q.number,
            naturalSlideHeight: q.number.isRequired,
            naturalSlideWidth: q.number.isRequired,
            onMasterSpinner: q.func,
            orientation: z.orientation.isRequired,
            playDirection: z.direction.isRequired,
            privateUnDisableAnimation: q.bool,
            role: q.string,
            slideSize: q.number.isRequired,
            slideTraySize: q.number.isRequired,
            spinner: q.func,
            step: q.number.isRequired,
            style: q.object,
            totalSlides: q.number.isRequired,
            touchEnabled: q.bool.isRequired,
            trayProps: q.shape({
              className: q.string,
              onClickCapture: q.func,
              onMouseDown: q.func,
              onTouchCancel: q.func,
              onTouchEnd: q.func,
              onTouchMove: q.func,
              onTouchStart: q.func,
              ref: q.shape({}),
              style: q.string,
            }),
            trayTag: q.string,
            visibleSlides: q.number,
            isIntrinsicHeight: q.bool,
          }),
          c(Fe, "defaultProps", {
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
            role: "listbox",
            spinner: null,
            style: {},
            trayProps: {},
            trayTag: "div",
            visibleSlides: 1,
            isIntrinsicHeight: !1,
          }),
          Fe),
        at = L(st, function (e) {
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
    63741: (e, t, n) => {
      n.d(t, { A: () => E });
      var i = n(58584),
        r = n(81115),
        s = n(42891);
      function a(e, t) {
        return e
          .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      var o = n(90626),
        l = n(72739);
      const c = !1;
      var u = n(28679),
        d = function (e) {
          return e.scrollTop;
        },
        h = "unmounted",
        p = "exited",
        m = "entering",
        S = "entered",
        f = "exiting",
        b = (function (e) {
          function t(t, n) {
            var i;
            i = e.call(this, t, n) || this;
            var r,
              s = n && !n.isMounting ? t.enter : t.appear;
            return (
              (i.appearStatus = null),
              t.in
                ? s
                  ? ((r = p), (i.appearStatus = m))
                  : (r = S)
                : (r = t.unmountOnExit || t.mountOnEnter ? h : p),
              (i.state = { status: r }),
              (i.nextCallback = null),
              i
            );
          }
          (0, s.A)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === h ? { status: p } : null;
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== m && n !== S && (t = m)
                  : (n !== m && n !== S) || (t = f);
              }
              this.updateStatus(!1, t);
            }),
            (n.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
              var e,
                t,
                n,
                i = this.props.timeout;
              return (
                (e = t = n = i),
                null != i &&
                  "number" != typeof i &&
                  ((e = i.exit),
                  (t = i.enter),
                  (n = void 0 !== i.appear ? i.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (n.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === m)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : l.findDOMNode(this);
                    n && d(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === p &&
                  this.setState({ status: h });
            }),
            (n.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                i = this.context ? this.context.isMounting : e,
                r = this.props.nodeRef ? [i] : [l.findDOMNode(this), i],
                s = r[0],
                a = r[1],
                o = this.getTimeouts(),
                u = i ? o.appear : o.enter;
              (!e && !n) || c
                ? this.safeSetState({ status: S }, function () {
                    t.props.onEntered(s);
                  })
                : (this.props.onEnter(s, a),
                  this.safeSetState({ status: m }, function () {
                    t.props.onEntering(s, a),
                      t.onTransitionEnd(u, function () {
                        t.safeSetState({ status: S }, function () {
                          t.props.onEntered(s, a);
                        });
                      });
                  }));
            }),
            (n.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                i = this.props.nodeRef ? void 0 : l.findDOMNode(this);
              t && !c
                ? (this.props.onExit(i),
                  this.safeSetState({ status: f }, function () {
                    e.props.onExiting(i),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: p }, function () {
                          e.props.onExited(i);
                        });
                      });
                  }))
                : this.safeSetState({ status: p }, function () {
                    e.props.onExited(i);
                  });
            }),
            (n.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (n.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (i) {
                  n && ((n = !1), (t.nextCallback = null), e(i));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (n.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : l.findDOMNode(this),
                i = null == e && !this.props.addEndListener;
              if (n && !i) {
                if (this.props.addEndListener) {
                  var r = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    s = r[0],
                    a = r[1];
                  this.props.addEndListener(s, a);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (n.render = function () {
              var e = this.state.status;
              if (e === h) return null;
              var t = this.props,
                n = t.children,
                i =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  (0, r.A)(t, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return o.createElement(
                u.A.Provider,
                { value: null },
                "function" == typeof n
                  ? n(e, i)
                  : o.cloneElement(o.Children.only(n), i),
              );
            }),
            t
          );
        })(o.Component);
      function v() {}
      (b.contextType = u.A),
        (b.propTypes = {}),
        (b.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: v,
          onEntering: v,
          onEntered: v,
          onExit: v,
          onExiting: v,
          onExited: v,
        }),
        (b.UNMOUNTED = h),
        (b.EXITED = p),
        (b.ENTERING = m),
        (b.ENTERED = S),
        (b.EXITING = f);
      const g = b;
      var y = function (e, t) {
          return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
              return (
                (i = t),
                void ((n = e).classList
                  ? n.classList.remove(i)
                  : "string" == typeof n.className
                    ? (n.className = a(n.className, i))
                    : n.setAttribute(
                        "class",
                        a((n.className && n.className.baseVal) || "", i),
                      ))
              );
              var n, i;
            })
          );
        },
        k = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, i = new Array(n), r = 0;
              r < n;
              r++
            )
              i[r] = arguments[r];
            return (
              ((t = e.call.apply(e, [this].concat(i)) || this).appliedClasses =
                { appear: {}, enter: {}, exit: {} }),
              (t.onEnter = function (e, n) {
                var i = t.resolveArguments(e, n),
                  r = i[0],
                  s = i[1];
                t.removeClasses(r, "exit"),
                  t.addClass(r, s ? "appear" : "enter", "base"),
                  t.props.onEnter && t.props.onEnter(e, n);
              }),
              (t.onEntering = function (e, n) {
                var i = t.resolveArguments(e, n),
                  r = i[0],
                  s = i[1] ? "appear" : "enter";
                t.addClass(r, s, "active"),
                  t.props.onEntering && t.props.onEntering(e, n);
              }),
              (t.onEntered = function (e, n) {
                var i = t.resolveArguments(e, n),
                  r = i[0],
                  s = i[1] ? "appear" : "enter";
                t.removeClasses(r, s),
                  t.addClass(r, s, "done"),
                  t.props.onEntered && t.props.onEntered(e, n);
              }),
              (t.onExit = function (e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, "appear"),
                  t.removeClasses(n, "enter"),
                  t.addClass(n, "exit", "base"),
                  t.props.onExit && t.props.onExit(e);
              }),
              (t.onExiting = function (e) {
                var n = t.resolveArguments(e)[0];
                t.addClass(n, "exit", "active"),
                  t.props.onExiting && t.props.onExiting(e);
              }),
              (t.onExited = function (e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, "exit"),
                  t.addClass(n, "exit", "done"),
                  t.props.onExited && t.props.onExited(e);
              }),
              (t.resolveArguments = function (e, n) {
                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
              }),
              (t.getClassNames = function (e) {
                var n = t.props.classNames,
                  i = "string" == typeof n,
                  r = i ? "" + (i && n ? n + "-" : "") + e : n[e];
                return {
                  baseClassName: r,
                  activeClassName: i ? r + "-active" : n[e + "Active"],
                  doneClassName: i ? r + "-done" : n[e + "Done"],
                };
              }),
              t
            );
          }
          (0, s.A)(t, e);
          var n = t.prototype;
          return (
            (n.addClass = function (e, t, n) {
              var i = this.getClassNames(t)[n + "ClassName"],
                r = this.getClassNames("enter").doneClassName;
              "appear" === t && "done" === n && r && (i += " " + r),
                "active" === n && e && d(e),
                i &&
                  ((this.appliedClasses[t][n] = i),
                  (function (e, t) {
                    e &&
                      t &&
                      t.split(" ").forEach(function (t) {
                        return (
                          (i = t),
                          void ((n = e).classList
                            ? n.classList.add(i)
                            : (function (e, t) {
                                return e.classList
                                  ? !!t && e.classList.contains(t)
                                  : -1 !==
                                      (
                                        " " +
                                        (e.className.baseVal || e.className) +
                                        " "
                                      ).indexOf(" " + t + " ");
                              })(n, i) ||
                              ("string" == typeof n.className
                                ? (n.className = n.className + " " + i)
                                : n.setAttribute(
                                    "class",
                                    ((n.className && n.className.baseVal) ||
                                      "") +
                                      " " +
                                      i,
                                  )))
                        );
                        var n, i;
                      });
                  })(e, i));
            }),
            (n.removeClasses = function (e, t) {
              var n = this.appliedClasses[t],
                i = n.base,
                r = n.active,
                s = n.done;
              (this.appliedClasses[t] = {}),
                i && y(e, i),
                r && y(e, r),
                s && y(e, s);
            }),
            (n.render = function () {
              var e = this.props,
                t = (e.classNames, (0, r.A)(e, ["classNames"]));
              return o.createElement(
                g,
                (0, i.A)({}, t, {
                  onEnter: this.onEnter,
                  onEntered: this.onEntered,
                  onEntering: this.onEntering,
                  onExit: this.onExit,
                  onExiting: this.onExiting,
                  onExited: this.onExited,
                }),
              );
            }),
            t
          );
        })(o.Component);
      (k.defaultProps = { classNames: "" }), (k.propTypes = {});
      const E = k;
    },
    28679: (e, t, n) => {
      n.d(t, { A: () => i });
      const i = n(90626).createContext(null);
    },
    30724: (e, t, n) => {
      n.d(t, { q: () => o });
      var i = n(48767),
        r = n(45995),
        s = class extends i.$ {
          constructor(e, t) {
            super(e, t);
          }
          bindMethods() {
            super.bindMethods(),
              (this.fetchNextPage = this.fetchNextPage.bind(this)),
              (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
          }
          setOptions(e, t) {
            super.setOptions({ ...e, behavior: (0, r.PL)() }, t);
          }
          getOptimisticResult(e) {
            return (e.behavior = (0, r.PL)()), super.getOptimisticResult(e);
          }
          fetchNextPage(e) {
            return this.fetch({
              ...e,
              meta: { fetchMore: { direction: "forward" } },
            });
          }
          fetchPreviousPage(e) {
            return this.fetch({
              ...e,
              meta: { fetchMore: { direction: "backward" } },
            });
          }
          createResult(e, t) {
            var n, i;
            const { state: s } = e,
              a = super.createResult(e, t),
              {
                isFetching: o,
                isRefetching: l,
                isError: c,
                isRefetchError: u,
              } = a,
              d =
                null == (i = null == (n = s.fetchMeta) ? void 0 : n.fetchMore)
                  ? void 0
                  : i.direction,
              h = c && "forward" === d,
              p = o && "forward" === d,
              m = c && "backward" === d,
              S = o && "backward" === d;
            return {
              ...a,
              fetchNextPage: this.fetchNextPage,
              fetchPreviousPage: this.fetchPreviousPage,
              hasNextPage: (0, r.rB)(t, s.data),
              hasPreviousPage: (0, r.RQ)(t, s.data),
              isFetchNextPageError: h,
              isFetchingNextPage: p,
              isFetchPreviousPageError: m,
              isFetchingPreviousPage: S,
              isRefetchError: u && !h && !m,
              isRefetching: l && !p && !S,
            };
          }
        },
        a = n(25081);
      function o(e, t) {
        return (0, a.t)(e, s, t);
      }
    },
    33861: (e, t, n) => {
      n.d(t, { E: () => A });
      var i,
        r,
        s,
        a,
        o,
        l,
        c,
        u,
        d,
        h,
        p,
        m,
        S,
        f,
        b,
        v,
        g,
        y,
        k = n(90626),
        E = n(86843),
        O = n(6561),
        C = n(48767),
        w = n(57152),
        T = n(57956);
      function M(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var P = class extends w.Q {
        constructor(e, t, n) {
          super(),
            (0, E.VK)(this, d),
            (0, E.VK)(this, p),
            (0, E.VK)(this, S),
            (0, E.VK)(this, b),
            (0, E.VK)(this, g),
            (0, E.VK)(this, i, void 0),
            (0, E.VK)(this, r, void 0),
            (0, E.VK)(this, s, void 0),
            (0, E.VK)(this, a, void 0),
            (0, E.VK)(this, o, void 0),
            (0, E.VK)(this, l, void 0),
            (0, E.VK)(this, c, void 0),
            (0, E.VK)(this, u, void 0),
            (0, E.OV)(this, i, e),
            (0, E.OV)(this, a, n),
            (0, E.OV)(this, s, []),
            (0, E.OV)(this, o, []),
            (0, E.OV)(this, r, []),
            this.setQueries(t);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (0, E.S7)(this, o).forEach((e) => {
              e.subscribe((t) => {
                (0, E.jq)(this, b, v).call(this, e, t);
              });
            });
        }
        onUnsubscribe() {
          this.listeners.size || this.destroy();
        }
        destroy() {
          (this.listeners = new Set()),
            (0, E.S7)(this, o).forEach((e) => {
              e.destroy();
            });
        }
        setQueries(e, t, n) {
          (0, E.OV)(this, s, e),
            (0, E.OV)(this, a, t),
            O.j.batch(() => {
              const e = (0, E.S7)(this, o),
                t = (0, E.jq)(this, S, f).call(this, (0, E.S7)(this, s));
              t.forEach((e) =>
                e.observer.setOptions(e.defaultedQueryOptions, n),
              );
              const i = t.map((e) => e.observer),
                a = i.map((e) => e.getCurrentResult()),
                l = i.some((t, n) => t !== e[n]);
              (e.length !== i.length || l) &&
                ((0, E.OV)(this, o, i),
                (0, E.OV)(this, r, a),
                this.hasListeners() &&
                  (M(e, i).forEach((e) => {
                    e.destroy();
                  }),
                  M(i, e).forEach((e) => {
                    e.subscribe((t) => {
                      (0, E.jq)(this, b, v).call(this, e, t);
                    });
                  }),
                  (0, E.jq)(this, g, y).call(this)));
            });
        }
        getCurrentResult() {
          return (0, E.S7)(this, r);
        }
        getQueries() {
          return (0, E.S7)(this, o).map((e) => e.getCurrentQuery());
        }
        getObservers() {
          return (0, E.S7)(this, o);
        }
        getOptimisticResult(e, t) {
          const n = (0, E.jq)(this, S, f)
            .call(this, e)
            .map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions),
            );
          return [
            n,
            (e) => (0, E.jq)(this, p, m).call(this, e ?? n, t),
            () => (0, E.jq)(this, d, h).call(this, n, e),
          ];
        }
      };
      (i = new WeakMap()),
        (r = new WeakMap()),
        (s = new WeakMap()),
        (a = new WeakMap()),
        (o = new WeakMap()),
        (l = new WeakMap()),
        (c = new WeakMap()),
        (u = new WeakMap()),
        (d = new WeakSet()),
        (h = function (e, t) {
          const n = (0, E.jq)(this, S, f).call(this, t);
          return n.map((t, i) => {
            const r = e[i];
            return t.defaultedQueryOptions.notifyOnChangeProps
              ? r
              : t.observer.trackResult(r, (e) => {
                  n.forEach((t) => {
                    t.observer.trackProp(e);
                  });
                });
          });
        }),
        (p = new WeakSet()),
        (m = function (e, t) {
          return t
            ? (((0, E.S7)(this, l) &&
                (0, E.S7)(this, r) === (0, E.S7)(this, u) &&
                t === (0, E.S7)(this, c)) ||
                ((0, E.OV)(this, c, t),
                (0, E.OV)(this, u, (0, E.S7)(this, r)),
                (0, E.OV)(this, l, (0, T.BH)((0, E.S7)(this, l), t(e)))),
              (0, E.S7)(this, l))
            : e;
        }),
        (S = new WeakSet()),
        (f = function (e) {
          const t = new Map(
              (0, E.S7)(this, o).map((e) => [e.options.queryHash, e]),
            ),
            n = [];
          return (
            e.forEach((e) => {
              const r = (0, E.S7)(this, i).defaultQueryOptions(e),
                s = t.get(r.queryHash);
              s
                ? n.push({ defaultedQueryOptions: r, observer: s })
                : n.push({
                    defaultedQueryOptions: r,
                    observer: new C.$((0, E.S7)(this, i), r),
                  });
            }),
            n
          );
        }),
        (b = new WeakSet()),
        (v = function (e, t) {
          const n = (0, E.S7)(this, o).indexOf(e);
          -1 !== n &&
            ((0, E.OV)(
              this,
              r,
              (function (e, t, n) {
                const i = e.slice(0);
                return (i[t] = n), i;
              })((0, E.S7)(this, r), n, t),
            ),
            (0, E.jq)(this, g, y).call(this));
        }),
        (g = new WeakSet()),
        (y = function () {
          var e;
          if (this.hasListeners()) {
            (0, E.S7)(this, l) !==
              (0, E.jq)(this, p, m).call(
                this,
                (0, E.jq)(this, d, h).call(
                  this,
                  (0, E.S7)(this, r),
                  (0, E.S7)(this, s),
                ),
                null == (e = (0, E.S7)(this, a)) ? void 0 : e.combine,
              ) &&
              O.j.batch(() => {
                this.listeners.forEach((e) => {
                  e((0, E.S7)(this, r));
                });
              });
          }
        });
      var x = n(29385),
        N = n(85010),
        _ = n(8184),
        D = n(33478),
        R = n(99583),
        j = n(61314);
      function A({ queries: e, ...t }, n) {
        const i = (0, x.jE)(n),
          r = (0, N.w)(),
          s = (0, _.h)(),
          a = k.useMemo(
            () =>
              e.map((e) => {
                const t = i.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = r ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, i, r],
          );
        a.forEach((e) => {
          (0, R.jv)(e), (0, D.LJ)(e, s);
        }),
          (0, D.wZ)(s);
        const [o] = k.useState(() => new P(i, a, t)),
          [l, c, u] = o.getOptimisticResult(a, t.combine);
        k.useSyncExternalStore(
          k.useCallback(
            (e) => (r ? j.l : o.subscribe(O.j.batchCalls(e))),
            [o, r],
          ),
          () => o.getCurrentResult(),
          () => o.getCurrentResult(),
        ),
          k.useEffect(() => {
            o.setQueries(a, t, { listeners: !1 });
          }, [a, t, o]);
        const d = l.some((e, t) => (0, R.EU)(a[t], e))
          ? l.flatMap((e, t) => {
              const n = a[t];
              if (n) {
                const t = new C.$(i, n);
                if ((0, R.EU)(n, e)) return (0, R.iL)(n, t, s);
                (0, R.nE)(e, r) && (0, R.iL)(n, t, s);
              }
              return [];
            })
          : [];
        if (d.length > 0) throw Promise.all(d);
        const h = l.find((e, t) => {
          const n = a[t];
          return (
            n &&
            (0, D.$1)({
              result: e,
              errorResetBoundary: s,
              throwOnError: n.throwOnError,
              query: i.getQueryCache().get(n.queryHash),
            })
          );
        });
        if (null == h ? void 0 : h.error) throw h.error;
        return c(u());
      }
    },
  },
]);
