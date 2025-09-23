/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [7055],
  {
    65731: (e, t, n) => {
      n.d(t, {
        Ap: () => at,
        CC: () => Te,
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
      function S(e, t) {
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
      function b(e) {
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
            return b(e);
          })(this, n);
        };
      }
      function f(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return g(e);
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
              if ("string" == typeof e) return g(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? g(e, t)
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
      function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function v(e, t) {
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
      function T(e, t) {
        return ((100 / e) * t) / t;
      }
      function w(e, t) {
        return (100 * e) / t;
      }
      function _(e) {
        return "".concat(e, "%");
      }
      function C(e, t, n) {
        if (e === t) return !0;
        var i = X[Z(e)],
          r = X[Z(t)];
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
            return e.$$typeof === G;
          })(e)
        );
      }
      function N(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? R(
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
      function j(e) {
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
      function x(e, t) {
        try {
          return t in e;
        } catch (e) {
          return !1;
        }
      }
      function A(e, t, n) {
        var i = {};
        return (
          n.isMergeableObject(e) &&
            j(e).forEach(function (t) {
              i[t] = N(e[t], n);
            }),
          j(t).forEach(function (r) {
            (function (e, t) {
              return (
                x(e, t) &&
                !(
                  Object.hasOwnProperty.call(e, t) &&
                  Object.propertyIsEnumerable.call(e, t)
                )
              );
            })(e, r) ||
              (x(e, r) && n.isMergeableObject(t[r])
                ? (i[r] = (function (e, t) {
                    if (!t.customMerge) return R;
                    var n = t.customMerge(e);
                    return "function" == typeof n ? n : R;
                  })(r, n)(e[r], t[r], n))
                : (i[r] = N(t[r], n)));
          }),
          i
        );
      }
      function R(e, t, n) {
        ((n = n || {}).arrayMerge = n.arrayMerge || D),
          (n.isMergeableObject = n.isMergeableObject || $),
          (n.cloneUnlessOtherwiseSpecified = N);
        var i = Array.isArray(t);
        return i === Array.isArray(e)
          ? i
            ? n.arrayMerge(e, t, n)
            : A(e, t, n)
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
                (i.updateStateProps = i.updateStateProps.bind(b(i))),
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
                    return !K(t, this.state) || !K(e, this.props);
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
                      s = S(n, he),
                      a = J(this.state, s, W);
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
          c(n, "propTypes", { children: B.children }),
          c(n, "defaultProps", { children: null }),
          n
        );
      }
      k.resetWarningCache = y;
      var I = v(function (e) {
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
        q = "loading",
        z = "success",
        H = "error",
        B = {
          children: I.oneOfType([I.arrayOf(I.node), I.node]),
          direction: I.oneOf(["forward", "backward"]),
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
          orientation: I.oneOf(["horizontal", "vertical"]),
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
        W = {
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
        U = "buttonBack___1mlaL",
        Y = [
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
        V = (function (e) {
          function t(e) {
            var i;
            return (
              a(this, t),
              ((i = n.call(this, e)).handleOnClick = i.handleOnClick.bind(
                b(i),
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
                      s = S(e, Y),
                      a = O([U, "carousel__back-button", n]),
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
      c(V, "propTypes", {
        carouselStore: I.object.isRequired,
        children: B.children.isRequired,
        className: I.string,
        currentSlide: I.number.isRequired,
        disabled: I.bool,
        onClick: I.func,
        step: I.number.isRequired,
        totalSlides: I.number.isRequired,
        visibleSlides: I.number.isRequired,
        infinite: I.bool,
      }),
        c(V, "defaultProps", {
          className: null,
          disabled: null,
          onClick: null,
          infinite: !1,
        });
      var Z = v(function (e, t) {
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
          (Z.types,
          {
            number: function (e, t) {
              return e != e && t != t;
            },
            function: function (e, t, n) {
              return (
                e.toString() === t.toString() &&
                X.object(e, t, n) &&
                C(e.prototype, t.prototype)
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
            for (n.push([e, t]); i--; ) if (!C(e[i], t[i], n)) return !1;
            return !0;
          })),
        (X.object = M(function (e, t, n) {
          if ("function" == typeof e.equal)
            return n.push([e, t]), e.equal(t, n);
          var i = E(e),
            r = E(t),
            s = i.length;
          if (s !== r.length) return !1;
          for (i.sort(), r.sort(); s--; ) if (i[s] !== r[s]) return !1;
          for (n.push([e, t]), s = i.length; s--; ) {
            var a = i[s];
            if (!C(e[a], t[a], n)) return !1;
          }
          return !0;
        }));
      var K = C,
        $ = function (e) {
          return (
            (function (e) {
              return !!e && "object" == typeof e;
            })(e) && !P(e)
          );
        },
        G =
          "function" == typeof Symbol && Symbol.for
            ? Symbol.for("react.element")
            : 60103;
      R.all = function (e, t) {
        if (!Array.isArray(e))
          throw new Error("first argument should be an array");
        return e.reduce(function (e, n) {
          return R(e, n, t);
        }, {});
      };
      var Q,
        J = R,
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
              (this.state = te(J(ne, t, W))),
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
                  (this.state = te(J(this.state, e, W))),
                    this.updateSubscribers(t);
                },
              },
              {
                key: "getStoreState",
                value: function () {
                  return J({}, this.state, W);
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
            (Q = (function (e) {
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
                  slideSize: T(e.totalSlides, e.visibleSlides),
                  slideTraySize: w(e.totalSlides, e.visibleSlides),
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
                          ((n.slideSize = T(
                            this.props.totalSlides,
                            this.props.visibleSlides,
                          )),
                          (n.slideTraySize = w(
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
                          S(e, re)),
                        r = O(["carousel", this.props.className]);
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
              children: B.children.isRequired,
              className: I.string,
              currentSlide: I.number,
              disableAnimation: I.bool,
              disableKeyboard: I.bool,
              hasMasterSpinner: I.bool,
              interval: I.number,
              isPageScrollLocked: I.bool,
              isPlaying: I.bool,
              lockOnWindowScroll: I.bool,
              naturalSlideHeight: I.number.isRequired,
              naturalSlideWidth: I.number.isRequired,
              orientation: B.orientation,
              playDirection: B.direction,
              step: I.number,
              dragStep: I.number,
              tag: I.string,
              totalSlides: I.number.isRequired,
              touchEnabled: I.bool,
              dragEnabled: I.bool,
              visibleSlides: I.number,
              infinite: I.bool,
              isIntrinsicHeight: I.bool,
            },
          ),
          c(Q, "defaultProps", {
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
          Q);
      ee.Consumer;
      var ae,
        oe,
        le,
        ce,
        ue,
        de,
        he = ["children"],
        pe = L(V, function (e) {
          return {
            currentSlide: e.currentSlide,
            step: e.step,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
            infinite: e.infinite,
          };
        }),
        Se = "buttonFirst___2rhFr",
        be = [
          "carouselStore",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "totalSlides",
        ],
        me =
          ((ae = (function (e) {
            function t() {
              var e;
              return (
                a(this, t),
                ((e = n.call(this)).handleOnClick = e.handleOnClick.bind(b(e))),
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
                      s = (e.onClick, e.totalSlides, S(e, be)),
                      a = O([Se, "carousel__first-button", t]),
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
            carouselStore: I.object.isRequired,
            children: B.children.isRequired,
            className: I.string,
            currentSlide: I.number.isRequired,
            disabled: I.bool,
            onClick: I.func,
            totalSlides: I.number.isRequired,
          }),
          c(ae, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          ae),
        fe =
          (L(me, function (e) {
            return { currentSlide: e.currentSlide, totalSlides: e.totalSlides };
          }),
          "buttonLast___2yuh0"),
        ge = [
          "carouselStore",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "totalSlides",
          "visibleSlides",
        ],
        ve =
          ((oe = (function (e) {
            function t() {
              var e;
              return (
                a(this, t),
                ((e = n.call(this)).handleOnClick = e.handleOnClick.bind(b(e))),
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
                      o = S(e, ge),
                      l = O([fe, "carousel__last-button", t]),
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
            carouselStore: I.object.isRequired,
            children: B.children.isRequired,
            className: I.string,
            currentSlide: I.number.isRequired,
            disabled: I.bool,
            onClick: I.func,
            totalSlides: I.number.isRequired,
            visibleSlides: I.number.isRequired,
          }),
          c(oe, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          oe),
        ye =
          (L(ve, function (e) {
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
        Oe =
          ((le = (function (e) {
            function t(e) {
              var i;
              return (
                a(this, t),
                ((i = n.call(this, e)).handleOnClick = i.handleOnClick.bind(
                  b(i),
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
                        c = S(e, ke),
                        d = O([ye, "carousel__next-button", n]),
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
            carouselStore: I.object.isRequired,
            children: B.children.isRequired,
            className: I.string,
            currentSlide: I.number.isRequired,
            disabled: I.bool,
            onClick: I.func,
            step: I.number.isRequired,
            totalSlides: I.number.isRequired,
            visibleSlides: I.number.isRequired,
            infinite: I.bool,
          }),
          c(le, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
            infinite: !1,
          }),
          le),
        Te = L(Oe, function (e) {
          return {
            currentSlide: e.currentSlide,
            step: e.step,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
            infinite: e.infinite,
          };
        }),
        we = "buttonNext___3Lm3s",
        _e = [
          "carouselStore",
          "children",
          "childrenPaused",
          "childrenPlaying",
          "className",
          "isPlaying",
          "onClick",
        ],
        Ce =
          ((ce = (function (e) {
            function t(e) {
              var i;
              return (
                a(this, t),
                ((i = n.call(this, e)).handleOnClick = i.handleOnClick.bind(
                  b(i),
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
                      s = e.isPlaying,
                      a = (e.onClick, S(e, _e)),
                      o = O([we, "carousel__play-button", r]);
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
            carouselStore: I.object.isRequired,
            children: I.node,
            childrenPaused: I.node,
            childrenPlaying: I.node,
            className: I.string,
            isPlaying: I.bool.isRequired,
            onClick: I.func,
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
          (L(Ce, function (e) {
            return { isPlaying: e.isPlaying };
          }),
          { dot: "dot___3c3SI" }),
        Ee = [
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
        Pe =
          ((ue = (function (e) {
            function t(e) {
              var i;
              return (
                a(this, t),
                ((i = n.call(this, e)).handleOnClick = i.handleOnClick.bind(
                  b(i),
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
                      l = S(e, Ee),
                      c = a >= n && a < n + o,
                      d = "boolean" == typeof s ? s : c,
                      h = "boolean" == typeof r ? r : !0 === c,
                      p = O([
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
            carouselStore: I.object.isRequired,
            children: B.children,
            className: I.string,
            currentSlide: I.number.isRequired,
            disabled: I.bool,
            onClick: I.func,
            selected: I.bool,
            slide: I.number.isRequired,
            totalSlides: I.number.isRequired,
            visibleSlides: I.number.isRequired,
          }),
          c(ue, "defaultProps", {
            children: null,
            className: null,
            disabled: null,
            onClick: null,
            selected: null,
          }),
          ue),
        Ne = L(Pe, function (e) {
          return {
            currentSlide: e.currentSlide,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
          };
        }),
        De = {},
        je = ["renderDots"],
        xe = [
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
        Ae =
          ((de = (function (e) {
            function t() {
              return a(this, t), n.apply(this, arguments);
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
                      s = e.disableActiveDots,
                      a = e.showAsSelectedForCurrentSlideOnly,
                      o = e.renderDots;
                    if (o) {
                      var l = this.props;
                      return l.renderDots, o(S(l, je));
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
                        S(e, xe)),
                      s = O([De.DotGroup, "carousel__dot-group", n]);
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
            children: B.children,
            className: I.string,
            currentSlide: I.number.isRequired,
            carouselStore: I.object.isRequired,
            totalSlides: I.number.isRequired,
            visibleSlides: I.number.isRequired,
            dotNumbers: I.bool,
            disableActiveDots: I.bool,
            showAsSelectedForCurrentSlideOnly: I.bool,
            renderDots: I.func,
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
        Re =
          (L(Ae, function (e) {
            return {
              currentSlide: e.currentSlide,
              totalSlides: e.totalSlides,
              visibleSlides: e.visibleSlides,
            };
          }),
          { image: "image___xtQGH" }),
        Le = ["src", "alt"],
        Ie = [
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
        qe = (function (e) {
          function t(e) {
            var i;
            return (
              a(this, t),
              ((i = n.call(this, e)).state = { imageStatus: q }),
              (i.handleImageLoad = i.handleImageLoad.bind(b(i))),
              (i.handleImageError = i.handleImageError.bind(b(i))),
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
                      (this.setState({ imageStatus: q }),
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
                    this.setState({ imageStatus: z }),
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
                      n = O([
                        Re.image,
                        Re.imageLoading,
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
                        Re.image,
                        Re.imageError,
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
                      s = O([
                        Re.image,
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
                        (o = S(e, Le)),
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
                        S(e, Ie));
                    switch (this.state.imageStatus) {
                      case q:
                        return this.renderLoading(t);
                      case z:
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
      c(qe, "propTypes", {
        alt: I.string,
        carouselStore: I.object.isRequired,
        children: B.children,
        className: I.string,
        hasMasterSpinner: I.bool.isRequired,
        isBgImage: B.isBgImage,
        onError: I.func,
        onLoad: I.func,
        renderError: I.func,
        renderLoading: I.func,
        src: I.string.isRequired,
        style: I.object,
        tag: I.string,
      }),
        c(qe, "defaultProps", {
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
      var ze,
        He,
        Be,
        Fe,
        We = L(qe, function (e) {
          return {
            hasMasterSpinner: e.hasMasterSpinner,
            orientation: e.orientation,
          };
        }),
        Ue = "spinner___27VUp",
        Ye = ["className"],
        Ve =
          (c(
            (ze = (function (e) {
              function t() {
                return a(this, t), n.apply(this, arguments);
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
                        n = S(e, Ye),
                        r = O([Ue, "carousel__spinner", t]);
                      return i.createElement("div", u({ className: r }, n));
                    },
                  },
                ]),
                t
              );
            })(i.PureComponent)),
            "propTypes",
            { className: I.string },
          ),
          c(ze, "defaultProps", { className: null }),
          ze),
        Ze = {
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
        Ke =
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
                (i.handleImageComplete = i.handleImageComplete.bind(b(i))),
                (i.handleImageLoadError = i.handleImageLoadError.bind(b(i))),
                (i.handleOnMouseMove = i.handleOnMouseMove.bind(b(i))),
                (i.handleOnMouseOut = i.handleOnMouseOut.bind(b(i))),
                (i.handleOnMouseOver = i.handleOnMouseOver.bind(b(i))),
                (i.handleOnTouchEnd = i.handleOnTouchEnd.bind(b(i))),
                (i.handleOnTouchMove = i.handleOnTouchMove.bind(b(i))),
                (i.handleOnTouchStart = i.handleOnTouchStart.bind(b(i))),
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
                            S = function (e) {
                              return F({
                                min: 1,
                                max: 3,
                                x: e.scale + (u.distance - l.distance) / 100,
                              });
                            };
                          this.setState(function (e) {
                            return {
                              isZooming: 1 !== S(e),
                              scale: S(e),
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
                              Ze.imageLoadingSpinnerContainer,
                              "carousel__image-loading-spinner-container",
                            ]),
                          },
                          e && e(),
                          !e && i.createElement(Ve, null),
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
                        h = S(e, Xe),
                        p = O([Ze.container, s]),
                        b = O([Ze.image, "carousel__zoom-image", a]),
                        m = O([
                          Ze.overlay,
                          "carousel__zoom-image-overlay",
                          this.state.isHovering && Ze.hover,
                          this.state.isZooming && Ze.zoom,
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
                            We,
                            u(
                              {
                                alt: t,
                                className: b,
                                tag: r,
                                src: l,
                                onLoad: this.handleImageComplete,
                                onError: this.handleImageLoadError,
                              },
                              n,
                            ),
                          ),
                          i.createElement(We, {
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
          c(He, "propTypes", {
            alt: I.string,
            bgImageProps: I.object,
            bgImageTag: I.string,
            carouselStore: I.object.isRequired,
            className: I.string,
            imageClassName: I.string,
            overlayClassName: I.string,
            spinner: I.func,
            onLoad: I.func,
            onError: I.func,
            src: I.string.isRequired,
            srcZoomed: I.string,
            tag: I.string,
            isPinchZoomEnabled: I.bool,
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
        $e =
          (L(Ke, function () {
            return {};
          }),
          {
            slide: "slide___3-Nqo",
            slideHorizontal: "slideHorizontal___1NzNV",
            slideInner: "slideInner___2mfX9",
            focusRing: "focusRing___1airF",
          }),
        Ge = [
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
        Qe =
          ((Be = (function (e) {
            function t(e) {
              var i;
              return (
                a(this, t),
                ((i = n.call(this, e)).handleOnFocus = i.handleOnFocus.bind(
                  b(i),
                )),
                (i.handleOnBlur = i.handleOnBlur.bind(b(i))),
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
                            $e.focusRing,
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
                      b = t.style,
                      m = t.tag,
                      f = t.totalSlides,
                      g = (t.visibleSlides, t.isIntrinsicHeight),
                      v = S(t, Ge),
                      y = {};
                    "horizontal" === h
                      ? ((y.width = _(p)),
                        (y.paddingBottom = _((100 * c) / (d * f))))
                      : ((y.width = _(100)),
                        (y.paddingBottom = _((100 * c) / d)));
                    var k = {};
                    g &&
                      ("horizontal" === h
                        ? (y.height = "unset")
                        : (y.width = "unset"),
                      (y.paddingBottom = "unset"),
                      (k.position = "unset"));
                    var T = u({}, y, b),
                      w = this.isVisible(),
                      C = O([
                        $e.slide,
                        "horizontal" === h && $e.slideHorizontal,
                        "carousel__slide",
                        this.state.focused && "carousel__slide--focused",
                        w && a,
                        w && "carousel__slide--visible",
                        !w && s,
                        !w && "carousel__slide--hidden",
                        r,
                      ]),
                      M = O([$e.slideInner, "carousel__inner-slide", o]);
                    return i.createElement(
                      m,
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
                          className: C,
                          style: T,
                        },
                        v,
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
          c(Be, "propTypes", {
            ariaLabel: I.string,
            carouselStore: I.object,
            children: B.children,
            className: I.string,
            classNameHidden: I.string,
            classNameVisible: I.string,
            currentSlide: I.number.isRequired,
            index: I.number.isRequired,
            innerClassName: I.string,
            innerTag: I.string,
            naturalSlideHeight: I.number.isRequired,
            naturalSlideWidth: I.number.isRequired,
            onBlur: I.func,
            onFocus: I.func,
            orientation: B.orientation.isRequired,
            slideSize: I.number.isRequired,
            role: I.string,
            style: I.object,
            tag: I.string,
            totalSlides: I.number.isRequired,
            visibleSlides: I.number.isRequired,
            isIntrinsicHeight: I.bool,
          }),
          c(Be, "defaultProps", {
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
          Be),
        Je = L(Qe, function (e) {
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
                  b(i),
                )),
                (i.handleDocumentScroll = i.handleDocumentScroll.bind(b(i))),
                (i.handleOnClickCapture = i.handleOnClickCapture.bind(b(i))),
                (i.handleOnKeyDown = i.handleOnKeyDown.bind(b(i))),
                (i.handleOnMouseDown = i.handleOnMouseDown.bind(b(i))),
                (i.handleOnMouseMove = i.handleOnMouseMove.bind(b(i))),
                (i.handleOnMouseUp = i.handleOnMouseUp.bind(b(i))),
                (i.handleOnTouchCancel = i.handleOnTouchCancel.bind(b(i))),
                (i.handleOnTouchEnd = i.handleOnTouchEnd.bind(b(i))),
                (i.handleOnTouchMove = i.handleOnTouchMove.bind(b(i))),
                (i.handleOnTouchStart = i.handleOnTouchStart.bind(b(i))),
                (i.playBackward = i.playBackward.bind(b(i))),
                (i.playForward = i.playForward.bind(b(i))),
                (i.callCallback = i.callCallback.bind(b(i))),
                (i.blockWindowScroll = i.blockWindowScroll.bind(b(i))),
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
                              className: O([
                                tt.masterSpinnerContainer,
                                "carousel__master-spinner-container",
                              ]),
                            },
                            r && r(),
                            !r && i.createElement(Ve, null),
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
                        b = (t.onMasterSpinner, t.orientation),
                        m =
                          (t.playDirection,
                          t.privateUnDisableAnimation,
                          t.slideSize),
                        f = t.slideTraySize,
                        g = (t.spinner, t.style),
                        v = (t.totalSlides, t.touchEnabled),
                        y = t.trayProps,
                        k = t.trayTag,
                        T = t.visibleSlides,
                        w = t.isIntrinsicHeight,
                        C = S(t, nt),
                        M = u({}, g),
                        E = {};
                      "vertical" === b &&
                        ((E.height = 0),
                        (E.paddingBottom = _((100 * h * T) / p)),
                        (E.width = _(100)));
                      var P = {},
                        N = _(m * c * -1);
                      (this.state.isBeingTouchDragged ||
                        this.state.isBeingMouseDragged ||
                        d) &&
                        (P.transition = "none"),
                        w && ((P.display = "flex"), (P.alignItems = "stretch")),
                        "vertical" === b
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
                          "vertical" === b
                            ? tt.verticalSlider
                            : tt.horizontalSlider,
                          !v && tt.touchDisabled,
                          "carousel__slider",
                          "vertical" === b
                            ? "carousel__slider--vertical"
                            : "carousel__slider--horizontal",
                          s,
                        ]),
                        j = O([
                          tt.sliderTrayWrap,
                          "carousel__slider-tray-wrapper",
                          "vertical" === b
                            ? tt.verticalSlideTrayWrap
                            : tt.horizontalTrayWrap,
                          "vertical" === b
                            ? "carousel__slider-tray-wrap--vertical"
                            : "carousel__slider-tray-wrap--horizontal",
                          l,
                        ]),
                        x = O([
                          tt.sliderTray,
                          a || tt.sliderAnimation,
                          "carousel__slider-tray",
                          "vertical" === b
                            ? tt.verticalTray
                            : tt.horizontalTray,
                          "vertical" === b
                            ? "carousel__slider-tray--vertical"
                            : "carousel__slider-tray--horizontal",
                          o,
                        ]),
                        A =
                          (C.dragStep,
                          C.step,
                          C.infinite,
                          C.preventVerticalScrollOnTouch,
                          C.preventingVerticalScroll,
                          C.horizontalPixelThreshold,
                          C.verticalPixelThreshold,
                          S(C, it)),
                        R =
                          (y.className,
                          y.onClickCapture,
                          y.onMouseDown,
                          y.onTouchCancel,
                          y.onTouchEnd,
                          y.onTouchMove,
                          y.onTouchStart,
                          y.ref,
                          y.style,
                          S(y, rt));
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
                            role: this.props.role,
                            style: M,
                            onKeyDown: this.handleOnKeyDown,
                          },
                          A,
                        ),
                        i.createElement(
                          "div",
                          { className: j, style: E },
                          i.createElement(
                            k,
                            u(
                              {
                                ref: this.getSliderRef,
                                className: x,
                                style: P,
                                onTouchStart: this.handleOnTouchStart,
                                onTouchMove: this.handleOnTouchMove,
                                onTouchEnd: this.handleOnTouchEnd,
                                onTouchCancel: this.handleOnTouchCancel,
                                onMouseDown: this.handleOnMouseDown,
                                onClickCapture: this.handleOnClickCapture,
                              },
                              R,
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
            ariaLabel: I.string,
            carouselStore: I.object.isRequired,
            children: I.node.isRequired,
            className: I.string,
            classNameAnimation: I.string,
            classNameTray: I.string,
            classNameTrayWrap: I.string,
            currentSlide: I.number.isRequired,
            disableAnimation: I.bool,
            disableKeyboard: I.bool,
            dragEnabled: I.bool.isRequired,
            dragStep: I.number,
            hasMasterSpinner: I.bool.isRequired,
            infinite: I.bool,
            interval: I.number.isRequired,
            isPageScrollLocked: I.bool.isRequired,
            isPlaying: I.bool.isRequired,
            lockOnWindowScroll: I.bool.isRequired,
            preventVerticalScrollOnTouch: I.bool,
            horizontalPixelThreshold: I.number,
            verticalPixelThreshold: I.number,
            masterSpinnerFinished: I.bool.isRequired,
            moveThreshold: I.number,
            naturalSlideHeight: I.number.isRequired,
            naturalSlideWidth: I.number.isRequired,
            onMasterSpinner: I.func,
            orientation: B.orientation.isRequired,
            playDirection: B.direction.isRequired,
            privateUnDisableAnimation: I.bool,
            role: I.string,
            slideSize: I.number.isRequired,
            slideTraySize: I.number.isRequired,
            spinner: I.func,
            step: I.number.isRequired,
            style: I.object,
            totalSlides: I.number.isRequired,
            touchEnabled: I.bool.isRequired,
            trayProps: I.shape({
              className: I.string,
              onClickCapture: I.func,
              onMouseDown: I.func,
              onTouchCancel: I.func,
              onTouchEnd: I.func,
              onTouchMove: I.func,
              onTouchStart: I.func,
              ref: I.shape({}),
              style: I.string,
            }),
            trayTag: I.string,
            visibleSlides: I.number,
            isIntrinsicHeight: I.bool,
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
  },
]);
