/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7810],
  {
    65731: (e, t, n) => {
      n.d(t, {
        Ap: () => tt,
        CC: () => Se,
        Yc: () => Q,
        Yw: () => j,
        _X: () => le,
        cL: () => Ce,
        gi: () => te,
        q7: () => Xe,
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
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(e, t) {
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
          t && a(e.prototype, t),
          n && a(e, n),
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
      function m(e) {
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
      function _(e, t) {
        return (100 * e) / t;
      }
      function C(e) {
        return "".concat(e, "%");
      }
      function T(e, t, n) {
        if (e === t) return !0;
        var i = U[W(e)],
          r = U[W(t)];
        return !(!i || i !== r) && i(e, t, n);
      }
      function E(e) {
        return function (t, n, i) {
          if (!i) return e(t, n, []);
          for (var r, s = i.length; (r = i[--s]); )
            if (r[0] === t && r[1] === n) return !0;
          return e(t, n, i);
        };
      }
      function M(e) {
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
            return e.$$typeof === V;
          })(e)
        );
      }
      function N(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? D(
              (function (e) {
                return Array.isArray(e) ? [] : {};
              })(e),
              e,
              t,
            )
          : e;
      }
      function R(e, t, n) {
        return e.concat(t).map(function (e) {
          return N(e, n);
        });
      }
      function D(e, t, n) {
        ((n = n || {}).arrayMerge = n.arrayMerge || R),
          (n.isMergeableObject = n.isMergeableObject || Z);
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
                      ? (i[r] = D(e[r], t[r], n))
                      : (i[r] = N(t[r], n));
                  }),
                  i
                );
              })(e, t, n)
          : N(t, n);
      }
      function j(e) {
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
                o(this, r),
                ((i = a.call(this, e, n)).state = t(s({}, n.state))),
                (i.updateStateProps = i.updateStateProps.bind(S(i))),
                i
              );
            }
            d(r, n);
            var a = f(r);
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
                    this.setState(t(s({}, this.context.state)));
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this,
                      n = K(this.state, this.props);
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
          c(n, "contextType", Q),
          c(n, "propTypes", { children: L.children }),
          c(n, "defaultProps", { children: null }),
          n
        );
      }
      k.resetWarningCache = y;
      var x = g(function (e) {
          e.exports = (function () {
            function e(e, t, n, i, r, s) {
              if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== s) {
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
        A = "loading",
        q = "success",
        I = "error",
        L = {
          children: x.oneOfType([x.arrayOf(x.node), x.node]),
          direction: x.oneOf(["forward", "backward"]),
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
          orientation: x.oneOf(["horizontal", "vertical"]),
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
        H = function (e) {
          var t = e.min,
            n = e.max,
            i = e.x;
          return Math.min(n, Math.max(t, i));
        },
        z = "buttonBack___1mlaL",
        B = [
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
        F = (function (e) {
          function t(e) {
            var i;
            return (
              o(this, t),
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
                      o = t.infinite,
                      a = t.visibleSlides,
                      l = t.totalSlides - a,
                      c = Math.max(i - s, 0);
                    o && (c = 0 === i ? l : c),
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
                      s = b(e, B),
                      o = O([z, "carousel__back-button", n]),
                      a = t.setDisabled(
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
                          className: o,
                          onClick: this.handleOnClick,
                          disabled: a,
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
      c(F, "propTypes", {
        carouselStore: x.object.isRequired,
        children: L.children.isRequired,
        className: x.string,
        currentSlide: x.number.isRequired,
        disabled: x.bool,
        onClick: x.func,
        step: x.number.isRequired,
        totalSlides: x.number.isRequired,
        visibleSlides: x.number.isRequired,
        infinite: x.bool,
      }),
        c(F, "defaultProps", {
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
      (U.arguments =
        U["bit-array"] =
        U.array =
          E(function (e, t, n) {
            var i = e.length;
            if (i !== t.length) return !1;
            for (n.push([e, t]); i--; ) if (!T(e[i], t[i], n)) return !1;
            return !0;
          })),
        (U.object = E(function (e, t, n) {
          if ("function" == typeof e.equal)
            return n.push([e, t]), e.equal(t, n);
          var i = M(e),
            r = M(t),
            s = i.length;
          if (s !== r.length) return !1;
          for (i.sort(), r.sort(); s--; ) if (i[s] !== r[s]) return !1;
          for (n.push([e, t]), s = i.length; s--; ) {
            var o = i[s];
            if (!T(e[o], t[o], n)) return !1;
          }
          return !0;
        }));
      var Y = T,
        Z = function (e) {
          return (
            (function (e) {
              return !!e && "object" == typeof e;
            })(e) && !P(e)
          );
        },
        V =
          "function" == typeof Symbol && Symbol.for
            ? Symbol.for("react.element")
            : 60103;
      D.all = function (e, t) {
        if (!Array.isArray(e))
          throw new Error("first argument should be an array");
        return e.reduce(function (e, n) {
          return D(e, n, t);
        }, {});
      };
      var X,
        K = D,
        Q = i.createContext(),
        $ = function e(t) {
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
        G = { masterSpinnerFinished: !1 },
        J = (function () {
          function e(t) {
            o(this, e),
              (this.state = $(K(G, t))),
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
                  (this.state = $(K(this.state, e))), this.updateSubscribers(t);
                },
              },
              {
                key: "getStoreState",
                value: function () {
                  return K({}, this.state);
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
            (X = (function (e) {
              function t(e) {
                var i;
                if (
                  (o(this, t),
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
                  slideTraySize: _(e.totalSlides, e.visibleSlides),
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
                          ((n.slideSize = w(
                            this.props.totalSlides,
                            this.props.visibleSlides,
                          )),
                          (n.slideTraySize = _(
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
                          Q.Provider,
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
              children: L.children.isRequired,
              className: x.string,
              currentSlide: x.number,
              disableAnimation: x.bool,
              disableKeyboard: x.bool,
              hasMasterSpinner: x.bool,
              interval: x.number,
              isPageScrollLocked: x.bool,
              isPlaying: x.bool,
              lockOnWindowScroll: x.bool,
              naturalSlideHeight: x.number.isRequired,
              naturalSlideWidth: x.number.isRequired,
              orientation: L.orientation,
              playDirection: L.direction,
              step: x.number,
              dragStep: x.number,
              tag: x.string,
              totalSlides: x.number.isRequired,
              touchEnabled: x.bool,
              dragEnabled: x.bool,
              visibleSlides: x.number,
              infinite: x.bool,
              isIntrinsicHeight: x.bool,
            },
          ),
          c(X, "defaultProps", {
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
          X);
      Q.Consumer;
      var ne,
        ie,
        re,
        se,
        oe,
        ae,
        le = j(F, function (e) {
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
                o(this, t),
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
                      s = (e.onClick, e.totalSlides, b(e, ue)),
                      o = O([ce, "carousel__first-button", t]),
                      a = null !== r ? r : 0 === n;
                    return i.createElement(
                      "button",
                      u(
                        {
                          type: "button",
                          "aria-label": "first",
                          className: o,
                          onClick: this.handleOnClick,
                          disabled: a,
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
          c(ne, "propTypes", {
            carouselStore: x.object.isRequired,
            children: L.children.isRequired,
            className: x.string,
            currentSlide: x.number.isRequired,
            disabled: x.bool,
            onClick: x.func,
            totalSlides: x.number.isRequired,
          }),
          c(ne, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          ne),
        he =
          (j(de, function (e) {
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
                o(this, t),
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
                        o = t.infinite,
                        a = t.totalSlides - t.visibleSlides,
                        l = r + n,
                        c = Math.min(l, a);
                      o && (c = a === n ? 0 : c),
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
                        o = (e.onClick, e.step, e.totalSlides),
                        a = e.visibleSlides,
                        l = e.infinite,
                        c = b(e, pe),
                        d = O([he, "carousel__next-button", n]),
                        h = t.setDisabled(s, r, a, o, l);
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
            carouselStore: x.object.isRequired,
            children: L.children.isRequired,
            className: x.string,
            currentSlide: x.number.isRequired,
            disabled: x.bool,
            onClick: x.func,
            step: x.number.isRequired,
            totalSlides: x.number.isRequired,
            visibleSlides: x.number.isRequired,
            infinite: x.bool,
          }),
          c(ie, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
            infinite: !1,
          }),
          ie),
        Se = j(be, function (e) {
          return {
            currentSlide: e.currentSlide,
            step: e.step,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
            infinite: e.infinite,
          };
        }),
        fe = "buttonLast___2yuh0",
        me = [
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
                o(this, t),
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
                      o = e.visibleSlides,
                      a = b(e, me),
                      l = O([fe, "carousel__last-button", t]),
                      c = null !== r ? r : n >= s - o;
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
          c(re, "propTypes", {
            carouselStore: x.object.isRequired,
            children: L.children.isRequired,
            className: x.string,
            currentSlide: x.number.isRequired,
            disabled: x.bool,
            onClick: x.func,
            totalSlides: x.number.isRequired,
            visibleSlides: x.number.isRequired,
          }),
          c(re, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          re),
        ge =
          (j(ve, function (e) {
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
          ((se = (function (e) {
            function t(e) {
              var i;
              return (
                o(this, t),
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
                      o = (e.onClick, b(e, ye)),
                      a = O([ge, "carousel__play-button", r]);
                    return i.createElement(
                      "button",
                      u(
                        {
                          type: "button",
                          "aria-label": "play",
                          className: a,
                          onClick: this.handleOnClick,
                        },
                        o,
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
          c(se, "propTypes", {
            carouselStore: x.object.isRequired,
            children: x.node,
            childrenPaused: x.node,
            childrenPlaying: x.node,
            className: x.string,
            isPlaying: x.bool.isRequired,
            onClick: x.func,
          }),
          c(se, "defaultProps", {
            children: null,
            childrenPaused: null,
            childrenPlaying: null,
            className: null,
            onClick: null,
          }),
          se),
        Oe =
          (j(ke, function (e) {
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
        _e =
          ((oe = (function (e) {
            function t(e) {
              var i;
              return (
                o(this, t),
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
                      o = t.visibleSlides,
                      a = r >= s - o ? s - o : r;
                    n.setStoreState(
                      { currentSlide: a, isPlaying: !1 },
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
                      o = e.slide,
                      a = (e.totalSlides, e.visibleSlides),
                      l = b(e, we),
                      c = o >= n && o < n + a,
                      d = "boolean" == typeof s ? s : c,
                      h = "boolean" == typeof r ? r : !0 === c,
                      p = O([
                        Oe.dot,
                        d && Oe.dotSelected,
                        "carousel__dot",
                        "carousel__dot--".concat(o),
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
          c(oe, "propTypes", {
            carouselStore: x.object.isRequired,
            children: L.children,
            className: x.string,
            currentSlide: x.number.isRequired,
            disabled: x.bool,
            onClick: x.func,
            selected: x.bool,
            slide: x.number.isRequired,
            totalSlides: x.number.isRequired,
            visibleSlides: x.number.isRequired,
          }),
          c(oe, "defaultProps", {
            children: null,
            className: null,
            disabled: null,
            onClick: null,
            selected: null,
          }),
          oe),
        Ce = j(_e, function (e) {
          return {
            currentSlide: e.currentSlide,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
          };
        }),
        Te = {},
        Ee = ["renderDots"],
        Me = [
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
          ((ae = (function (e) {
            function t() {
              return o(this, t), n.apply(this, arguments);
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
                      o = e.showAsSelectedForCurrentSlideOnly,
                      a = e.renderDots;
                    if (a) {
                      var l = this.props;
                      return l.renderDots, a(b(l, Ee));
                    }
                    for (var c = [], u = 0; u < n; u += 1) {
                      var d = o ? u === t : u >= t && u < t + r,
                        h = u >= n - r ? n - r : u;
                      c.push(
                        i.createElement(
                          Ce,
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
                        b(e, Me)),
                      s = O([Te.DotGroup, "carousel__dot-group", n]);
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
          c(ae, "propTypes", {
            children: L.children,
            className: x.string,
            currentSlide: x.number.isRequired,
            carouselStore: x.object.isRequired,
            totalSlides: x.number.isRequired,
            visibleSlides: x.number.isRequired,
            dotNumbers: x.bool,
            disableActiveDots: x.bool,
            showAsSelectedForCurrentSlideOnly: x.bool,
            renderDots: x.func,
          }),
          c(ae, "defaultProps", {
            children: null,
            className: null,
            dotNumbers: !1,
            disableActiveDots: !0,
            showAsSelectedForCurrentSlideOnly: !1,
            renderDots: null,
          }),
          ae),
        Ne =
          (j(Pe, function (e) {
            return {
              currentSlide: e.currentSlide,
              totalSlides: e.totalSlides,
              visibleSlides: e.visibleSlides,
            };
          }),
          { image: "image___xtQGH" }),
        Re = ["src", "alt"],
        De = [
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
        je = (function (e) {
          function t(e) {
            var i;
            return (
              o(this, t),
              ((i = n.call(this, e)).state = { imageStatus: A }),
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
                      (this.setState({ imageStatus: A }),
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
                    this.setState({ imageStatus: q }),
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
                    this.setState({ imageStatus: I }),
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
                      s = O([
                        Ne.image,
                        "carousel__image",
                        this.props.isBgImage &&
                          "carousel__image--with-background",
                        "carousel__image--success",
                        this.props.className,
                      ]),
                      o = u({}, n),
                      a = e;
                    if ("img" !== r) {
                      var l = e.src;
                      e.alt,
                        (a = b(e, Re)),
                        (o = u({}, n, {
                          backgroundImage: 'url("'.concat(l, '")'),
                          backgroundSize: "cover",
                        }));
                    }
                    return i.createElement(
                      r,
                      u({ className: s, style: o }, a),
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
                        b(e, De));
                    switch (this.state.imageStatus) {
                      case A:
                        return this.renderLoading(t);
                      case q:
                        return this.renderSuccess(t);
                      case I:
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
      c(je, "propTypes", {
        alt: x.string,
        carouselStore: x.object.isRequired,
        children: L.children,
        className: x.string,
        hasMasterSpinner: x.bool.isRequired,
        isBgImage: L.isBgImage,
        onError: x.func,
        onLoad: x.func,
        renderError: x.func,
        renderLoading: x.func,
        src: x.string.isRequired,
        style: x.object,
        tag: x.string,
      }),
        c(je, "defaultProps", {
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
      var xe,
        Ae,
        qe,
        Ie,
        Le = j(je, function (e) {
          return {
            hasMasterSpinner: e.hasMasterSpinner,
            orientation: e.orientation,
          };
        }),
        He = "spinner___27VUp",
        ze = ["className"],
        Be =
          (c(
            (xe = (function (e) {
              function t() {
                return o(this, t), n.apply(this, arguments);
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
                        n = b(e, ze),
                        r = O([He, "carousel__spinner", t]);
                      return i.createElement("div", u({ className: r }, n));
                    },
                  },
                ]),
                t
              );
            })(i.PureComponent)),
            "propTypes",
            { className: x.string },
          ),
          c(xe, "defaultProps", { className: null }),
          xe),
        Fe = {
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
          ((Ae = (function (e) {
            function t(e) {
              var i;
              return (
                o(this, t),
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
                        var t = C(
                            (e.nativeEvent.offsetX / e.target.offsetWidth) *
                              100,
                          ),
                          n = C(
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
                        (m(e.targetTouches).forEach(function (e) {
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
                        var i = m(e.targetTouches)
                          .filter(function (e) {
                            return n.tpCache[e.identifier];
                          })
                          .slice(0, 2);
                        if (2 === i.length) {
                          e.stopPropagation();
                          var r = e.target.getBoundingClientRect(),
                            o = i[0].identifier,
                            a = i[1].identifier,
                            l = {
                              x1: this.tpCache[o].clientX,
                              y1: this.tpCache[o].clientY,
                              x2: this.tpCache[a].clientX,
                              y2: this.tpCache[a].clientY,
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
                          var h = C(
                              H({
                                min: 0,
                                max: 100,
                                x: ((u.cx - r.left) / r.width) * 100,
                              }),
                            ),
                            p = C(
                              H({
                                min: 0,
                                max: 100,
                                x: ((u.cy - r.top) / r.height) * 100,
                              }),
                            ),
                            b = function (e) {
                              return H({
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
                        (m(e.changedTouches).forEach(function (e) {
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
                              Fe.imageLoadingSpinnerContainer,
                              "carousel__image-loading-spinner-container",
                            ]),
                          },
                          e && e(),
                          !e && i.createElement(Be, null),
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
                        o = e.imageClassName,
                        a = e.overlayClassName,
                        l = (e.isPinchZoomEnabled, e.spinner, e.src),
                        c = e.srcZoomed,
                        d = e.tag,
                        h = b(e, We),
                        p = O([Fe.container, s]),
                        S = O([Fe.image, "carousel__zoom-image", o]),
                        f = O([
                          Fe.overlay,
                          "carousel__zoom-image-overlay",
                          this.state.isHovering && Fe.hover,
                          this.state.isZooming && Fe.zoom,
                          this.state.isHovering &&
                            "carousel__zoom-image-overlay--hovering",
                          this.state.isZooming &&
                            "carousel__zoom-image-overlay--zooming",
                          a,
                        ]),
                        m = {};
                      return (
                        (this.state.isHovering || this.state.isZooming) &&
                          ((m.transformOrigin = ""
                            .concat(this.state.x, " ")
                            .concat(this.state.y)),
                          (m.transform = "scale(".concat(
                            this.state.scale,
                            ")",
                          ))),
                        i.createElement(
                          d,
                          u({ className: p }, h),
                          i.createElement(
                            Le,
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
                          i.createElement(Le, {
                            className: f,
                            tag: "div",
                            src: c || l,
                            style: m,
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
          c(Ae, "propTypes", {
            alt: x.string,
            bgImageProps: x.object,
            bgImageTag: x.string,
            carouselStore: x.object.isRequired,
            className: x.string,
            imageClassName: x.string,
            overlayClassName: x.string,
            spinner: x.func,
            src: x.string.isRequired,
            srcZoomed: x.string,
            tag: x.string,
            isPinchZoomEnabled: x.bool,
          }),
          c(Ae, "defaultProps", {
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
          Ae),
        Ye =
          (j(Ue, function () {
            return {};
          }),
          {
            slide: "slide___3-Nqo",
            slideHorizontal: "slideHorizontal___1NzNV",
            slideInner: "slideInner___2mfX9",
            focusRing: "focusRing___1airF",
          }),
        Ze = [
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
        Ve =
          ((qe = (function (e) {
            function t(e) {
              var i;
              return (
                o(this, t),
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
                      s = t.classNameHidden,
                      o = t.classNameVisible,
                      a = (t.currentSlide, t.index, t.innerClassName),
                      l = t.innerTag,
                      c = t.naturalSlideHeight,
                      d = t.naturalSlideWidth,
                      h = (t.onBlur, t.onFocus, t.orientation),
                      p = t.slideSize,
                      S = t.style,
                      f = t.tabIndex,
                      m = t.tag,
                      v = t.totalSlides,
                      g = (t.visibleSlides, t.isIntrinsicHeight),
                      y = b(t, Ze),
                      k = {};
                    "horizontal" === h
                      ? ((k.width = C(p)),
                        (k.paddingBottom = C((100 * c) / (d * v))))
                      : ((k.width = C(100)),
                        (k.paddingBottom = C((100 * c) / d)));
                    var w = {};
                    g &&
                      ("horizontal" === h
                        ? (k.height = "unset")
                        : (k.width = "unset"),
                      (k.paddingBottom = "unset"),
                      (w.position = "unset"));
                    var _ = u({}, k, S),
                      T = this.isVisible(),
                      E = O([
                        Ye.slide,
                        "horizontal" === h && Ye.slideHorizontal,
                        "carousel__slide",
                        this.state.focused && "carousel__slide--focused",
                        T && o,
                        T && "carousel__slide--visible",
                        !T && s,
                        !T && "carousel__slide--hidden",
                        r,
                      ]),
                      M = O([Ye.slideInner, "carousel__inner-slide", a]),
                      P = this.isVisible() ? 0 : -1,
                      N = "number" == typeof f ? f : P;
                    return i.createElement(
                      m,
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
                          className: E,
                          style: _,
                        },
                        y,
                      ),
                      i.createElement(
                        l,
                        {
                          ref: function (t) {
                            e.innerTagRef = t;
                          },
                          className: M,
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
          c(qe, "propTypes", {
            ariaLabel: x.string,
            carouselStore: x.object,
            children: L.children,
            className: x.string,
            classNameHidden: x.string,
            classNameVisible: x.string,
            currentSlide: x.number.isRequired,
            index: x.number.isRequired,
            innerClassName: x.string,
            innerTag: x.string,
            naturalSlideHeight: x.number.isRequired,
            naturalSlideWidth: x.number.isRequired,
            onBlur: x.func,
            onFocus: x.func,
            orientation: L.orientation.isRequired,
            slideSize: x.number.isRequired,
            style: x.object,
            tabIndex: x.number,
            tag: x.string,
            totalSlides: x.number.isRequired,
            visibleSlides: x.number.isRequired,
            isIntrinsicHeight: x.bool,
          }),
          c(qe, "defaultProps", {
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
          qe),
        Xe = j(Ve, function (e) {
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
        Ke = (function () {
          function e() {
            o(this, e);
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
        Qe = {
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
        $e = [
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
        Ge = [
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
          ((Ie = (function (e) {
            function t(e) {
              var i;
              return (
                o(this, t),
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
                        s = e.mouseDrag,
                        o = void 0 !== s && s;
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
                          isBeingMouseDragged: o,
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
                        s = n.disableKeyboard,
                        o = n.totalSlides,
                        a = n.visibleSlides,
                        l = {};
                      !0 === s ||
                        o <= a ||
                        (37 === t &&
                          (e.preventDefault(),
                          this.focus(),
                          (l.currentSlide = Math.max(0, r - 1)),
                          (l.isPlaying = !1)),
                        39 === t &&
                          (e.preventDefault(),
                          this.focus(),
                          (l.currentSlide = Math.min(o - a, r + 1)),
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
                      var e = new Ke();
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
                        r = H({
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
                                Qe.masterSpinnerContainer,
                                "carousel__master-spinner-container",
                              ]),
                            },
                            r && r(),
                            !r && i.createElement(Be, null),
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
                        o = t.classNameAnimation,
                        a = t.classNameTray,
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
                        m = t.slideTraySize,
                        v = (t.spinner, t.style),
                        g = t.tabIndex,
                        y = (t.totalSlides, t.touchEnabled, t.trayProps),
                        k = t.trayTag,
                        w = t.visibleSlides,
                        _ = t.isIntrinsicHeight,
                        T = b(t, $e),
                        E = u({}, v),
                        M = {};
                      "vertical" === S &&
                        ((M.height = 0),
                        (M.paddingBottom = C((100 * h * w) / p)),
                        (M.width = C(100)));
                      var P = {},
                        N = C(f * c * -1);
                      (this.state.isBeingTouchDragged ||
                        this.state.isBeingMouseDragged ||
                        d) &&
                        (P.transition = "none"),
                        _ && ((P.display = "flex"), (P.alignItems = "stretch")),
                        "vertical" === S
                          ? ((P.transform = "translateY("
                              .concat(N, ") translateY(")
                              .concat(this.state.deltaY, "px)")),
                            (P.width = C(100)),
                            (P.flexDirection = "column"))
                          : ((P.width = C(m)),
                            (P.transform = "translateX("
                              .concat(N, ") translateX(")
                              .concat(this.state.deltaX, "px)")),
                            (P.flexDirection = "row"));
                      var R = O([
                          "vertical" === S
                            ? Qe.verticalSlider
                            : Qe.horizontalSlider,
                          "carousel__slider",
                          "vertical" === S
                            ? "carousel__slider--vertical"
                            : "carousel__slider--horizontal",
                          s,
                        ]),
                        D = O([
                          Qe.sliderTrayWrap,
                          "carousel__slider-tray-wrapper",
                          "vertical" === S
                            ? Qe.verticalSlideTrayWrap
                            : Qe.horizontalTrayWrap,
                          "vertical" === S
                            ? "carousel__slider-tray-wrap--vertical"
                            : "carousel__slider-tray-wrap--horizontal",
                          l,
                        ]),
                        j = O([
                          Qe.sliderTray,
                          o || Qe.sliderAnimation,
                          "carousel__slider-tray",
                          "vertical" === S
                            ? Qe.verticalTray
                            : Qe.horizontalTray,
                          "vertical" === S
                            ? "carousel__slider-tray--vertical"
                            : "carousel__slider-tray--horizontal",
                          a,
                        ]),
                        x = null !== g ? g : 0,
                        A =
                          (T.dragStep,
                          T.step,
                          T.infinite,
                          T.preventVerticalScrollOnTouch,
                          T.preventingVerticalScroll,
                          T.horizontalPixelThreshold,
                          T.verticalPixelThreshold,
                          b(T, Ge)),
                        q =
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
                            className: R,
                            "aria-live": "polite",
                            "aria-label": n,
                            style: E,
                            tabIndex: x,
                            onKeyDown: this.handleOnKeyDown,
                            role: "listbox",
                          },
                          A,
                        ),
                        i.createElement(
                          "div",
                          { className: D, style: M },
                          i.createElement(
                            k,
                            u(
                              {
                                ref: this.getSliderRef,
                                className: j,
                                style: P,
                                onTouchStart: this.handleOnTouchStart,
                                onTouchMove: this.handleOnTouchMove,
                                onTouchEnd: this.handleOnTouchEnd,
                                onTouchCancel: this.handleOnTouchCancel,
                                onMouseDown: this.handleOnMouseDown,
                                onClickCapture: this.handleOnClickCapture,
                              },
                              q,
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
                      var o = "horizontal" === t ? n : i,
                        a = Math.abs(Math.round(o / r)),
                        l = Math.abs(o) >= r * e ? s : 0,
                        c = Math.max(l, a);
                      if (o < 0) return c;
                      var u = -c;
                      return 0 === u ? 0 : u;
                    },
                  },
                ],
              ),
              t
            );
          })(i.Component)),
          c(Ie, "propTypes", {
            ariaLabel: x.string,
            carouselStore: x.object.isRequired,
            children: x.node.isRequired,
            className: x.string,
            classNameAnimation: x.string,
            classNameTray: x.string,
            classNameTrayWrap: x.string,
            currentSlide: x.number.isRequired,
            disableAnimation: x.bool,
            disableKeyboard: x.bool,
            dragEnabled: x.bool.isRequired,
            dragStep: x.number,
            hasMasterSpinner: x.bool.isRequired,
            infinite: x.bool,
            interval: x.number.isRequired,
            isPageScrollLocked: x.bool.isRequired,
            isPlaying: x.bool.isRequired,
            lockOnWindowScroll: x.bool.isRequired,
            preventVerticalScrollOnTouch: x.bool,
            horizontalPixelThreshold: x.number,
            verticalPixelThreshold: x.number,
            masterSpinnerFinished: x.bool.isRequired,
            moveThreshold: x.number,
            naturalSlideHeight: x.number.isRequired,
            naturalSlideWidth: x.number.isRequired,
            onMasterSpinner: x.func,
            orientation: L.orientation.isRequired,
            playDirection: L.direction.isRequired,
            privateUnDisableAnimation: x.bool,
            slideSize: x.number.isRequired,
            slideTraySize: x.number.isRequired,
            spinner: x.func,
            step: x.number.isRequired,
            style: x.object,
            tabIndex: x.number,
            totalSlides: x.number.isRequired,
            touchEnabled: x.bool.isRequired,
            trayProps: x.shape({
              className: x.string,
              onClickCapture: x.func,
              onMouseDown: x.func,
              onTouchCancel: x.func,
              onTouchEnd: x.func,
              onTouchMove: x.func,
              onTouchStart: x.func,
              ref: x.shape({}),
              style: x.string,
            }),
            trayTag: x.string,
            visibleSlides: x.number,
            isIntrinsicHeight: x.bool,
          }),
          c(Ie, "defaultProps", {
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
          Ie),
        tt = j(et, function (e) {
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
    62465: (e, t) => {
      var n = Symbol.for("react.element"),
        i = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"),
        o = Symbol.for("react.profiler"),
        a = Symbol.for("react.provider"),
        l = Symbol.for("react.context"),
        c = Symbol.for("react.forward_ref"),
        u = Symbol.for("react.suspense"),
        d = Symbol.for("react.memo"),
        h = Symbol.for("react.lazy"),
        p = Symbol.iterator;
      var b = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        S = Object.assign,
        f = {};
      function m(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = f),
          (this.updater = n || b);
      }
      function v() {}
      function g(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = f),
          (this.updater = n || b);
      }
      (m.prototype.isReactComponent = {}),
        (m.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (m.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (v.prototype = m.prototype);
      var y = (g.prototype = new v());
      (y.constructor = g), S(y, m.prototype), (y.isPureReactComponent = !0);
      var k = Array.isArray,
        O = Object.prototype.hasOwnProperty,
        w = { current: null },
        _ = { key: !0, ref: !0, __self: !0, __source: !0 };
      function C(e, t, i) {
        var r,
          s = {},
          o = null,
          a = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (a = t.ref),
          void 0 !== t.key && (o = "" + t.key),
          t))
            O.call(t, r) && !_.hasOwnProperty(r) && (s[r] = t[r]);
        var l = arguments.length - 2;
        if (1 === l) s.children = i;
        else if (1 < l) {
          for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
          s.children = c;
        }
        if (e && e.defaultProps)
          for (r in (l = e.defaultProps)) void 0 === s[r] && (s[r] = l[r]);
        return {
          $$typeof: n,
          type: e,
          key: o,
          ref: a,
          props: s,
          _owner: w.current,
        };
      }
      function T(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n;
      }
      var E = /\/+/g;
      function M(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })("" + e.key)
          : t.toString(36);
      }
      function P(e, t, r, s, o) {
        var a = typeof e;
        ("undefined" !== a && "boolean" !== a) || (e = null);
        var l = !1;
        if (null === e) l = !0;
        else
          switch (a) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case n:
                case i:
                  l = !0;
              }
          }
        if (l)
          return (
            (o = o((l = e))),
            (e = "" === s ? "." + M(l, 0) : s),
            k(o)
              ? ((r = ""),
                null != e && (r = e.replace(E, "$&/") + "/"),
                P(o, t, r, "", function (e) {
                  return e;
                }))
              : null != o &&
                (T(o) &&
                  (o = (function (e, t) {
                    return {
                      $$typeof: n,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    o,
                    r +
                      (!o.key || (l && l.key === o.key)
                        ? ""
                        : ("" + o.key).replace(E, "$&/") + "/") +
                      e,
                  )),
                t.push(o)),
            1
          );
        if (((l = 0), (s = "" === s ? "." : s + ":"), k(e)))
          for (var c = 0; c < e.length; c++) {
            var u = s + M((a = e[c]), c);
            l += P(a, t, r, u, o);
          }
        else if (
          ((u = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
          })(e)),
          "function" == typeof u)
        )
          for (e = u.call(e), c = 0; !(a = e.next()).done; )
            l += P((a = a.value), t, r, (u = s + M(a, c++)), o);
        else if ("object" === a)
          throw (
            ((t = String(e)),
            Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t) +
                "). If you meant to render a collection of children, use an array instead.",
            ))
          );
        return l;
      }
      function N(e, t, n) {
        if (null == e) return e;
        var i = [],
          r = 0;
        return (
          P(e, i, "", "", function (e) {
            return t.call(n, e, r++);
          }),
          i
        );
      }
      function R(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()).then(
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 2), (e._result = t));
            },
          ),
            -1 === e._status && ((e._status = 0), (e._result = t));
        }
        if (1 === e._status) return e._result.default;
        throw e._result;
      }
      var D = { current: null },
        j = { transition: null },
        x = {
          ReactCurrentDispatcher: D,
          ReactCurrentBatchConfig: j,
          ReactCurrentOwner: w,
        };
      (t.Fragment = r), (t.createElement = C);
    },
    34062: (e, t, n) => {
      e.exports = n(62465);
    },
    59768: (e, t, n) => {
      n.d(t, { E: () => f });
      var i = n(90626),
        r = n(14097),
        s = n(45839),
        o = n(52368),
        a = n(70996);
      function l(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var c = class extends o.Q {
          #e;
          #t;
          #n;
          #i;
          #r;
          #s;
          #o;
          #a;
          constructor(e, t, n) {
            super(),
              (this.#e = e),
              (this.#i = n),
              (this.#n = []),
              (this.#r = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#r.forEach((e) => {
                e.subscribe((t) => {
                  this.#l(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#r.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, n) {
            (this.#n = e),
              (this.#i = t),
              r.j.batch(() => {
                const e = this.#r,
                  t = this.#c(this.#n);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, n),
                );
                const i = t.map((e) => e.observer),
                  r = i.map((e) => e.getCurrentResult()),
                  s = i.some((t, n) => t !== e[n]);
                (e.length !== i.length || s) &&
                  ((this.#r = i),
                  (this.#t = r),
                  this.hasListeners() &&
                    (l(e, i).forEach((e) => {
                      e.destroy();
                    }),
                    l(i, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#l(e, t);
                      });
                    }),
                    this.#u()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#r.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#r;
          }
          getOptimisticResult(e, t) {
            const n = this.#c(e).map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions),
            );
            return [n, (e) => this.#d(e ?? n, t), () => this.#h(n, e)];
          }
          #h(e, t) {
            const n = this.#c(t);
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
          }
          #d(e, t) {
            return t
              ? ((this.#s && this.#t === this.#a && t === this.#o) ||
                  ((this.#o = t),
                  (this.#a = this.#t),
                  (this.#s = (0, a.BH)(this.#s, t(e)))),
                this.#s)
              : e;
          }
          #c(e) {
            const t = new Map(this.#r.map((e) => [e.options.queryHash, e])),
              n = [];
            return (
              e.forEach((e) => {
                const i = this.#e.defaultQueryOptions(e),
                  r = t.get(i.queryHash);
                if (r) n.push({ defaultedQueryOptions: i, observer: r });
                else {
                  const e = this.#r.find(
                    (e) => e.options.queryHash === i.queryHash,
                  );
                  n.push({
                    defaultedQueryOptions: i,
                    observer: e ?? new s.$(this.#e, i),
                  });
                }
              }),
              n.sort(
                (t, n) =>
                  e.findIndex(
                    (e) => e.queryHash === t.defaultedQueryOptions.queryHash,
                  ) -
                  e.findIndex(
                    (e) => e.queryHash === n.defaultedQueryOptions.queryHash,
                  ),
              )
            );
          }
          #l(e, t) {
            const n = this.#r.indexOf(e);
            -1 !== n &&
              ((this.#t = (function (e, t, n) {
                const i = e.slice(0);
                return (i[t] = n), i;
              })(this.#t, n, t)),
              this.#u());
          }
          #u() {
            if (this.hasListeners()) {
              this.#s !==
                this.#d(this.#h(this.#t, this.#n), this.#i?.combine) &&
                r.j.batch(() => {
                  this.listeners.forEach((e) => {
                    e(this.#t);
                  });
                });
            }
          }
        },
        u = n(75233),
        d = n(22730),
        h = n(43424),
        p = n(19086),
        b = n(44407),
        S = n(19866);
      function f({ queries: e, ...t }, n) {
        const o = (0, u.jE)(n),
          a = (0, d.w)(),
          l = (0, h.h)(),
          f = i.useMemo(
            () =>
              e.map((e) => {
                const t = o.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = a ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, o, a],
          );
        f.forEach((e) => {
          (0, b.jv)(e), (0, p.LJ)(e, l);
        }),
          (0, p.wZ)(l);
        const [m] = i.useState(() => new c(o, f, t)),
          [v, g, y] = m.getOptimisticResult(f, t.combine);
        i.useSyncExternalStore(
          i.useCallback(
            (e) => (a ? S.l : m.subscribe(r.j.batchCalls(e))),
            [m, a],
          ),
          () => m.getCurrentResult(),
          () => m.getCurrentResult(),
        ),
          i.useEffect(() => {
            m.setQueries(f, t, { listeners: !1 });
          }, [f, t, m]);
        const k = v.some((e, t) => (0, b.EU)(f[t], e))
          ? v.flatMap((e, t) => {
              const n = f[t];
              if (n) {
                const t = new s.$(o, n);
                if ((0, b.EU)(n, e)) return (0, b.iL)(n, t, l);
                (0, b.nE)(e, a) && (0, b.iL)(n, t, l);
              }
              return [];
            })
          : [];
        if (k.length > 0) throw Promise.all(k);
        const O = v.find((e, t) => {
          const n = f[t];
          return (
            n &&
            (0, p.$1)({
              result: e,
              errorResetBoundary: l,
              throwOnError: n.throwOnError,
              query: o.getQueryCache().get(n.queryHash),
            })
          );
        });
        if (O?.error) throw O.error;
        return g(y());
      }
    },
  },
]);
