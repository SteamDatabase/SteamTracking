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
        Yc: () => K,
        Yw: () => R,
        _X: () => le,
        cL: () => we,
        gi: () => te,
        q7: () => Ze,
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
      function b(e) {
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
      function _() {}
      function k(e) {
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
      function E(e, t) {
        return (100 * e) / t;
      }
      function w(e) {
        return "".concat(e, "%");
      }
      function C(e, t, n) {
        if (e === t) return !0;
        var i = W[F(e)],
          r = W[F(t)];
        return !(!i || i !== r) && i(e, t, n);
      }
      function T(e) {
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
      function x(e, t) {
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
      function N(e, t, n) {
        return e.concat(t).map(function (e) {
          return x(e, n);
        });
      }
      function D(e, t, n) {
        ((n = n || {}).arrayMerge = n.arrayMerge || N),
          (n.isMergeableObject = n.isMergeableObject || $);
        var i = Array.isArray(t);
        return i === Array.isArray(e)
          ? i
            ? n.arrayMerge(e, t, n)
            : (function (e, t, n) {
                var i = {};
                return (
                  n.isMergeableObject(e) &&
                    Object.keys(e).forEach(function (t) {
                      i[t] = x(e[t], n);
                    }),
                  Object.keys(t).forEach(function (r) {
                    n.isMergeableObject(t[r]) && e[r]
                      ? (i[r] = D(e[r], t[r], n))
                      : (i[r] = x(t[r], n));
                  }),
                  i
                );
              })(e, t, n)
          : x(t, n);
      }
      function R(e) {
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
            var a = b(r);
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
          c(n, "contextType", K),
          c(n, "propTypes", { children: q.children }),
          c(n, "defaultProps", { children: null }),
          n
        );
      }
      _.resetWarningCache = y;
      var I = v(function (e) {
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
              checkPropTypes: _,
              resetWarningCache: y,
            };
            return (n.PropTypes = n), n;
          })();
        }),
        j = "loading",
        L = "success",
        A = "error",
        q = {
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
        H = function (e) {
          var t = e.min,
            n = e.max,
            i = e.x;
          return Math.min(n, Math.max(t, i));
        },
        B = "buttonBack___1mlaL",
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
        z = (function (e) {
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
          var n = b(t);
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
                      s = m(e, U),
                      o = k([B, "carousel__back-button", n]),
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
      c(z, "propTypes", {
        carouselStore: I.object.isRequired,
        children: q.children.isRequired,
        className: I.string,
        currentSlide: I.number.isRequired,
        disabled: I.bool,
        onClick: I.func,
        step: I.number.isRequired,
        totalSlides: I.number.isRequired,
        visibleSlides: I.number.isRequired,
        infinite: I.bool,
      }),
        c(z, "defaultProps", {
          className: null,
          disabled: null,
          onClick: null,
          infinite: !1,
        });
      var F = v(function (e, t) {
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
        W =
          (F.types,
          {
            number: function (e, t) {
              return e != e && t != t;
            },
            function: function (e, t, n) {
              return (
                e.toString() === t.toString() &&
                W.object(e, t, n) &&
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
      (W.arguments =
        W["bit-array"] =
        W.array =
          T(function (e, t, n) {
            var i = e.length;
            if (i !== t.length) return !1;
            for (n.push([e, t]); i--; ) if (!C(e[i], t[i], n)) return !1;
            return !0;
          })),
        (W.object = T(function (e, t, n) {
          if ("function" == typeof e.equal)
            return n.push([e, t]), e.equal(t, n);
          var i = M(e),
            r = M(t),
            s = i.length;
          if (s !== r.length) return !1;
          for (i.sort(), r.sort(); s--; ) if (i[s] !== r[s]) return !1;
          for (n.push([e, t]), s = i.length; s--; ) {
            var o = i[s];
            if (!C(e[o], t[o], n)) return !1;
          }
          return !0;
        }));
      var Y = C,
        $ = function (e) {
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
      var Z,
        X = D,
        K = i.createContext(),
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
        G = { masterSpinnerFinished: !1 },
        J = (function () {
          function e(t) {
            o(this, e),
              (this.state = Q(X(G, t))),
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
            (Z = (function (e) {
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
                  slideSize: O(e.totalSlides, e.visibleSlides),
                  slideTraySize: E(e.totalSlides, e.visibleSlides),
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
              var n = b(t);
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
                          (n.slideTraySize = E(
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
                          m(e, ee)),
                        r = k(["carousel", this.props.className]);
                      return i.createElement(
                        t,
                        u({ className: r }, n),
                        i.createElement(
                          K.Provider,
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
              orientation: q.orientation,
              playDirection: q.direction,
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
          c(Z, "defaultProps", {
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
          Z);
      K.Consumer;
      var ne,
        ie,
        re,
        se,
        oe,
        ae,
        le = R(z, function (e) {
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
            var n = b(t);
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
                      s = (e.onClick, e.totalSlides, m(e, ue)),
                      o = k([ce, "carousel__first-button", t]),
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
            carouselStore: I.object.isRequired,
            children: q.children.isRequired,
            className: I.string,
            currentSlide: I.number.isRequired,
            disabled: I.bool,
            onClick: I.func,
            totalSlides: I.number.isRequired,
          }),
          c(ne, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          ne),
        he =
          (R(de, function (e) {
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
        me =
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
            var n = b(t);
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
                        c = m(e, pe),
                        d = k([he, "carousel__next-button", n]),
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
            carouselStore: I.object.isRequired,
            children: q.children.isRequired,
            className: I.string,
            currentSlide: I.number.isRequired,
            disabled: I.bool,
            onClick: I.func,
            step: I.number.isRequired,
            totalSlides: I.number.isRequired,
            visibleSlides: I.number.isRequired,
            infinite: I.bool,
          }),
          c(ie, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
            infinite: !1,
          }),
          ie),
        Se = R(me, function (e) {
          return {
            currentSlide: e.currentSlide,
            step: e.step,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
            infinite: e.infinite,
          };
        }),
        be = "buttonLast___2yuh0",
        fe = [
          "carouselStore",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "totalSlides",
          "visibleSlides",
        ],
        ge =
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
            var n = b(t);
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
                      a = m(e, fe),
                      l = k([be, "carousel__last-button", t]),
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
            carouselStore: I.object.isRequired,
            children: q.children.isRequired,
            className: I.string,
            currentSlide: I.number.isRequired,
            disabled: I.bool,
            onClick: I.func,
            totalSlides: I.number.isRequired,
            visibleSlides: I.number.isRequired,
          }),
          c(re, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          re),
        ve =
          (R(ge, function (e) {
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
        _e =
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
            var n = b(t);
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
                      o = (e.onClick, m(e, ye)),
                      a = k([ve, "carousel__play-button", r]);
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
            carouselStore: I.object.isRequired,
            children: I.node,
            childrenPaused: I.node,
            childrenPlaying: I.node,
            className: I.string,
            isPlaying: I.bool.isRequired,
            onClick: I.func,
          }),
          c(se, "defaultProps", {
            children: null,
            childrenPaused: null,
            childrenPlaying: null,
            className: null,
            onClick: null,
          }),
          se),
        ke =
          (R(_e, function (e) {
            return { isPlaying: e.isPlaying };
          }),
          { dot: "dot___3c3SI" }),
        Oe = [
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
        Ee =
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
            var n = b(t);
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
                      l = m(e, Oe),
                      c = o >= n && o < n + a,
                      d = "boolean" == typeof s ? s : c,
                      h = "boolean" == typeof r ? r : !0 === c,
                      p = k([
                        ke.dot,
                        d && ke.dotSelected,
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
            carouselStore: I.object.isRequired,
            children: q.children,
            className: I.string,
            currentSlide: I.number.isRequired,
            disabled: I.bool,
            onClick: I.func,
            selected: I.bool,
            slide: I.number.isRequired,
            totalSlides: I.number.isRequired,
            visibleSlides: I.number.isRequired,
          }),
          c(oe, "defaultProps", {
            children: null,
            className: null,
            disabled: null,
            onClick: null,
            selected: null,
          }),
          oe),
        we = R(Ee, function (e) {
          return {
            currentSlide: e.currentSlide,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
          };
        }),
        Ce = {},
        Te = ["renderDots"],
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
            var n = b(t);
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
                      return l.renderDots, a(m(l, Te));
                    }
                    for (var c = [], u = 0; u < n; u += 1) {
                      var d = o ? u === t : u >= t && u < t + r,
                        h = u >= n - r ? n - r : u;
                      c.push(
                        i.createElement(
                          we,
                          { key: u, slide: h, selected: d, disabled: !!s && d },
                          i.createElement(
                            "span",
                            { className: k["carousel__dot-group-dot"] },
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
                        m(e, Me)),
                      s = k([Ce.DotGroup, "carousel__dot-group", n]);
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
            children: q.children,
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
          c(ae, "defaultProps", {
            children: null,
            className: null,
            dotNumbers: !1,
            disableActiveDots: !0,
            showAsSelectedForCurrentSlideOnly: !1,
            renderDots: null,
          }),
          ae),
        xe =
          (R(Pe, function (e) {
            return {
              currentSlide: e.currentSlide,
              totalSlides: e.totalSlides,
              visibleSlides: e.visibleSlides,
            };
          }),
          { image: "image___xtQGH" }),
        Ne = ["src", "alt"],
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
        Re = (function (e) {
          function t(e) {
            var i;
            return (
              o(this, t),
              ((i = n.call(this, e)).state = { imageStatus: j }),
              (i.handleImageLoad = i.handleImageLoad.bind(S(i))),
              (i.handleImageError = i.handleImageError.bind(S(i))),
              (i.image = null),
              i
            );
          }
          d(t, e);
          var n = b(t);
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
                      (this.setState({ imageStatus: j }),
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
                    this.setState({ imageStatus: L }),
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
                    this.setState({ imageStatus: A }),
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
                      n = k([
                        xe.image,
                        xe.imageLoading,
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
                      n = k([
                        xe.image,
                        xe.imageError,
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
                      s = k([
                        xe.image,
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
                        (a = m(e, Ne)),
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
                        m(e, De));
                    switch (this.state.imageStatus) {
                      case j:
                        return this.renderLoading(t);
                      case L:
                        return this.renderSuccess(t);
                      case A:
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
      c(Re, "propTypes", {
        alt: I.string,
        carouselStore: I.object.isRequired,
        children: q.children,
        className: I.string,
        hasMasterSpinner: I.bool.isRequired,
        isBgImage: q.isBgImage,
        onError: I.func,
        onLoad: I.func,
        renderError: I.func,
        renderLoading: I.func,
        src: I.string.isRequired,
        style: I.object,
        tag: I.string,
      }),
        c(Re, "defaultProps", {
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
      var Ie,
        je,
        Le,
        Ae,
        qe = R(Re, function (e) {
          return {
            hasMasterSpinner: e.hasMasterSpinner,
            orientation: e.orientation,
          };
        }),
        He = "spinner___27VUp",
        Be = ["className"],
        Ue =
          (c(
            (Ie = (function (e) {
              function t() {
                return o(this, t), n.apply(this, arguments);
              }
              d(t, e);
              var n = b(t);
              return (
                l(t, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        n = m(e, Be),
                        r = k([He, "carousel__spinner", t]);
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
          c(Ie, "defaultProps", { className: null }),
          Ie),
        ze = {
          container: "container___2O72F",
          overlay: "overlay___IV4qY",
          hover: "hover___MYy31",
          zoom: "zoom___3kqYk",
          loading: "loading___1pvNI",
          imageLoadingSpinnerContainer: "imageLoadingSpinnerContainer___3UIPD",
        },
        Fe = [
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
        We =
          ((je = (function (e) {
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
            var n = b(t);
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
                          var h = w(
                              H({
                                min: 0,
                                max: 100,
                                x: ((u.cx - r.left) / r.width) * 100,
                              }),
                            ),
                            p = w(
                              H({
                                min: 0,
                                max: 100,
                                x: ((u.cy - r.top) / r.height) * 100,
                              }),
                            ),
                            m = function (e) {
                              return H({
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
                            className: k([
                              ze.imageLoadingSpinnerContainer,
                              "carousel__image-loading-spinner-container",
                            ]),
                          },
                          e && e(),
                          !e && i.createElement(Ue, null),
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
                        h = m(e, Fe),
                        p = k([ze.container, s]),
                        S = k([ze.image, "carousel__zoom-image", o]),
                        b = k([
                          ze.overlay,
                          "carousel__zoom-image-overlay",
                          this.state.isHovering && ze.hover,
                          this.state.isZooming && ze.zoom,
                          this.state.isHovering &&
                            "carousel__zoom-image-overlay--hovering",
                          this.state.isZooming &&
                            "carousel__zoom-image-overlay--zooming",
                          a,
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
                            className: b,
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
          c(je, "propTypes", {
            alt: I.string,
            bgImageProps: I.object,
            bgImageTag: I.string,
            carouselStore: I.object.isRequired,
            className: I.string,
            imageClassName: I.string,
            overlayClassName: I.string,
            spinner: I.func,
            src: I.string.isRequired,
            srcZoomed: I.string,
            tag: I.string,
            isPinchZoomEnabled: I.bool,
          }),
          c(je, "defaultProps", {
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
          je),
        Ye =
          (R(We, function () {
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
          "tabIndex",
          "tag",
          "totalSlides",
          "visibleSlides",
          "isIntrinsicHeight",
        ],
        Ve =
          ((Le = (function (e) {
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
            var n = b(t);
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
                      b = t.tabIndex,
                      f = t.tag,
                      g = t.totalSlides,
                      v = (t.visibleSlides, t.isIntrinsicHeight),
                      y = m(t, $e),
                      _ = {};
                    "horizontal" === h
                      ? ((_.width = w(p)),
                        (_.paddingBottom = w((100 * c) / (d * g))))
                      : ((_.width = w(100)),
                        (_.paddingBottom = w((100 * c) / d)));
                    var O = {};
                    v &&
                      ("horizontal" === h
                        ? (_.height = "unset")
                        : (_.width = "unset"),
                      (_.paddingBottom = "unset"),
                      (O.position = "unset"));
                    var E = u({}, _, S),
                      C = this.isVisible(),
                      T = k([
                        Ye.slide,
                        "horizontal" === h && Ye.slideHorizontal,
                        "carousel__slide",
                        this.state.focused && "carousel__slide--focused",
                        C && o,
                        C && "carousel__slide--visible",
                        !C && s,
                        !C && "carousel__slide--hidden",
                        r,
                      ]),
                      M = k([Ye.slideInner, "carousel__inner-slide", a]),
                      P = this.isVisible() ? 0 : -1,
                      x = "number" == typeof b ? b : P;
                    return i.createElement(
                      f,
                      u(
                        {
                          ref: function (t) {
                            e.tagRef = t;
                          },
                          tabIndex: x,
                          "aria-selected": this.isVisible(),
                          "aria-label": n,
                          role: "option",
                          onFocus: this.handleOnFocus,
                          onBlur: this.handleOnBlur,
                          className: T,
                          style: E,
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
                          style: O,
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
          c(Le, "propTypes", {
            ariaLabel: I.string,
            carouselStore: I.object,
            children: q.children,
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
            orientation: q.orientation.isRequired,
            slideSize: I.number.isRequired,
            style: I.object,
            tabIndex: I.number,
            tag: I.string,
            totalSlides: I.number.isRequired,
            visibleSlides: I.number.isRequired,
            isIntrinsicHeight: I.bool,
          }),
          c(Le, "defaultProps", {
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
          Le),
        Ze = R(Ve, function (e) {
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
        Ke = {
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
          ((Ae = (function (e) {
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
            var n = b(t);
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
                              className: k([
                                Ke.masterSpinnerContainer,
                                "carousel__master-spinner-container",
                              ]),
                            },
                            r && r(),
                            !r && i.createElement(Ue, null),
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
                        b =
                          (t.playDirection,
                          t.privateUnDisableAnimation,
                          t.slideSize),
                        f = t.slideTraySize,
                        g = (t.spinner, t.style),
                        v = t.tabIndex,
                        y = (t.totalSlides, t.touchEnabled, t.trayProps),
                        _ = t.trayTag,
                        O = t.visibleSlides,
                        E = t.isIntrinsicHeight,
                        C = m(t, Qe),
                        T = u({}, g),
                        M = {};
                      "vertical" === S &&
                        ((M.height = 0),
                        (M.paddingBottom = w((100 * h * O) / p)),
                        (M.width = w(100)));
                      var P = {},
                        x = w(b * c * -1);
                      (this.state.isBeingTouchDragged ||
                        this.state.isBeingMouseDragged ||
                        d) &&
                        (P.transition = "none"),
                        E && ((P.display = "flex"), (P.alignItems = "stretch")),
                        "vertical" === S
                          ? ((P.transform = "translateY("
                              .concat(x, ") translateY(")
                              .concat(this.state.deltaY, "px)")),
                            (P.width = w(100)),
                            (P.flexDirection = "column"))
                          : ((P.width = w(f)),
                            (P.transform = "translateX("
                              .concat(x, ") translateX(")
                              .concat(this.state.deltaX, "px)")),
                            (P.flexDirection = "row"));
                      var N = k([
                          "vertical" === S
                            ? Ke.verticalSlider
                            : Ke.horizontalSlider,
                          "carousel__slider",
                          "vertical" === S
                            ? "carousel__slider--vertical"
                            : "carousel__slider--horizontal",
                          s,
                        ]),
                        D = k([
                          Ke.sliderTrayWrap,
                          "carousel__slider-tray-wrapper",
                          "vertical" === S
                            ? Ke.verticalSlideTrayWrap
                            : Ke.horizontalTrayWrap,
                          "vertical" === S
                            ? "carousel__slider-tray-wrap--vertical"
                            : "carousel__slider-tray-wrap--horizontal",
                          l,
                        ]),
                        R = k([
                          Ke.sliderTray,
                          o || Ke.sliderAnimation,
                          "carousel__slider-tray",
                          "vertical" === S
                            ? Ke.verticalTray
                            : Ke.horizontalTray,
                          "vertical" === S
                            ? "carousel__slider-tray--vertical"
                            : "carousel__slider-tray--horizontal",
                          a,
                        ]),
                        I = null !== v ? v : 0,
                        j =
                          (C.dragStep,
                          C.step,
                          C.infinite,
                          C.preventVerticalScrollOnTouch,
                          C.preventingVerticalScroll,
                          C.horizontalPixelThreshold,
                          C.verticalPixelThreshold,
                          m(C, Ge)),
                        L =
                          (y.className,
                          y.onClickCapture,
                          y.onMouseDown,
                          y.onTouchCancel,
                          y.onTouchEnd,
                          y.onTouchMove,
                          y.onTouchStart,
                          y.ref,
                          y.style,
                          m(y, Je));
                      return i.createElement(
                        "div",
                        u(
                          {
                            ref: function (t) {
                              e.sliderElement = t;
                            },
                            className: N,
                            "aria-live": "polite",
                            "aria-label": n,
                            style: T,
                            tabIndex: I,
                            onKeyDown: this.handleOnKeyDown,
                            role: "listbox",
                          },
                          j,
                        ),
                        i.createElement(
                          "div",
                          { className: D, style: M },
                          i.createElement(
                            _,
                            u(
                              {
                                ref: this.getSliderRef,
                                className: R,
                                style: P,
                                onTouchStart: this.handleOnTouchStart,
                                onTouchMove: this.handleOnTouchMove,
                                onTouchEnd: this.handleOnTouchEnd,
                                onTouchCancel: this.handleOnTouchCancel,
                                onMouseDown: this.handleOnMouseDown,
                                onClickCapture: this.handleOnClickCapture,
                              },
                              L,
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
          c(Ae, "propTypes", {
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
            orientation: q.orientation.isRequired,
            playDirection: q.direction.isRequired,
            privateUnDisableAnimation: I.bool,
            slideSize: I.number.isRequired,
            slideTraySize: I.number.isRequired,
            spinner: I.func,
            step: I.number.isRequired,
            style: I.object,
            tabIndex: I.number,
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
          c(Ae, "defaultProps", {
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
          Ae),
        tt = R(et, function (e) {
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
    82715: (e, t, n) => {
      n.d(t, { tH: () => Q });
      const i = "8.27.0",
        r = globalThis;
      function s(e, t, n) {
        const s = n || r,
          o = (s.__SENTRY__ = s.__SENTRY__ || {}),
          a = (o[i] = o[i] || {});
        return a[e] || (a[e] = t());
      }
      function o() {
        return a(r), r;
      }
      function a(e) {
        const t = (e.__SENTRY__ = e.__SENTRY__ || {});
        return (t.version = t.version || i), (t[i] = t[i] || {});
      }
      const l = Object.prototype.toString;
      function c(e, t) {
        return l.call(e) === `[object ${t}]`;
      }
      function u(e) {
        return c(e, "Object");
      }
      function d(e, t) {
        try {
          return e instanceof t;
        } catch (e) {
          return !1;
        }
      }
      function h() {
        const e = r,
          t = e.crypto || e.msCrypto;
        let n = () => 16 * Math.random();
        try {
          if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
          t &&
            t.getRandomValues &&
            (n = () => {
              const e = new Uint8Array(1);
              return t.getRandomValues(e), e[0];
            });
        } catch (e) {}
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (e) =>
          (e ^ ((15 & n()) >> (e / 4))).toString(16),
        );
      }
      function p() {
        return { traceId: h(), spanId: h().substring(16) };
      }
      const m = 1e3;
      function S() {
        return Date.now() / m;
      }
      const b = (function () {
        const { performance: e } = r;
        if (!e || !e.now) return S;
        const t = Date.now() - e.now(),
          n = null == e.timeOrigin ? t : e.timeOrigin;
        return () => (n + e.now()) / m;
      })();
      let f;
      (() => {
        const { performance: e } = r;
        if (!e || !e.now) return void (f = "none");
        const t = 36e5,
          n = e.now(),
          i = Date.now(),
          s = e.timeOrigin ? Math.abs(e.timeOrigin + n - i) : t,
          o = s < t,
          a = e.timing && e.timing.navigationStart,
          l = "number" == typeof a ? Math.abs(a + n - i) : t;
        o || l < t
          ? s <= l
            ? ((f = "timeOrigin"), e.timeOrigin)
            : (f = "navigationStart")
          : (f = "dateNow");
      })();
      const g = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        v = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        y = {};
      function _(e) {
        if (!("console" in r)) return e();
        const t = r.console,
          n = {},
          i = Object.keys(y);
        i.forEach((e) => {
          const i = y[e];
          (n[e] = t[e]), (t[e] = i);
        });
        try {
          return e();
        } finally {
          i.forEach((e) => {
            t[e] = n[e];
          });
        }
      }
      const k = (function () {
        let e = !1;
        const t = {
          enable: () => {
            e = !0;
          },
          disable: () => {
            e = !1;
          },
          isEnabled: () => e,
        };
        return (
          g
            ? v.forEach((n) => {
                t[n] = (...t) => {
                  e &&
                    _(() => {
                      r.console[n](`Sentry Logger [${n}]:`, ...t);
                    });
                };
              })
            : v.forEach((e) => {
                t[e] = () => {};
              }),
          t
        );
      })();
      function O(e, t = {}) {
        if (
          (t.user &&
            (!e.ipAddress &&
              t.user.ip_address &&
              (e.ipAddress = t.user.ip_address),
            e.did ||
              t.did ||
              (e.did = t.user.id || t.user.email || t.user.username)),
          (e.timestamp = t.timestamp || b()),
          t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
          t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
          t.sid && (e.sid = 32 === t.sid.length ? t.sid : h()),
          void 0 !== t.init && (e.init = t.init),
          !e.did && t.did && (e.did = `${t.did}`),
          "number" == typeof t.started && (e.started = t.started),
          e.ignoreDuration)
        )
          e.duration = void 0;
        else if ("number" == typeof t.duration) e.duration = t.duration;
        else {
          const t = e.timestamp - e.started;
          e.duration = t >= 0 ? t : 0;
        }
        t.release && (e.release = t.release),
          t.environment && (e.environment = t.environment),
          !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
          !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
          "number" == typeof t.errors && (e.errors = t.errors),
          t.status && (e.status = t.status);
      }
      function E(e, t, n) {
        try {
          Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0,
          });
        } catch (n) {
          g &&
            k.log(`Failed to add non-enumerable property "${t}" to object`, e);
        }
      }
      const w = "_sentrySpan";
      function C(e, t) {
        t ? E(e, w, t) : delete e[w];
      }
      function T(e) {
        return e[w];
      }
      class M {
        constructor() {
          (this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._attachments = []),
            (this._user = {}),
            (this._tags = {}),
            (this._extra = {}),
            (this._contexts = {}),
            (this._sdkProcessingMetadata = {}),
            (this._propagationContext = p());
        }
        clone() {
          const e = new M();
          return (
            (e._breadcrumbs = [...this._breadcrumbs]),
            (e._tags = { ...this._tags }),
            (e._extra = { ...this._extra }),
            (e._contexts = { ...this._contexts }),
            (e._user = this._user),
            (e._level = this._level),
            (e._session = this._session),
            (e._transactionName = this._transactionName),
            (e._fingerprint = this._fingerprint),
            (e._eventProcessors = [...this._eventProcessors]),
            (e._requestSession = this._requestSession),
            (e._attachments = [...this._attachments]),
            (e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
            (e._propagationContext = { ...this._propagationContext }),
            (e._client = this._client),
            (e._lastEventId = this._lastEventId),
            C(e, T(this)),
            e
          );
        }
        setClient(e) {
          this._client = e;
        }
        setLastEventId(e) {
          this._lastEventId = e;
        }
        getClient() {
          return this._client;
        }
        lastEventId() {
          return this._lastEventId;
        }
        addScopeListener(e) {
          this._scopeListeners.push(e);
        }
        addEventProcessor(e) {
          return this._eventProcessors.push(e), this;
        }
        setUser(e) {
          return (
            (this._user = e || {
              email: void 0,
              id: void 0,
              ip_address: void 0,
              username: void 0,
            }),
            this._session && O(this._session, { user: e }),
            this._notifyScopeListeners(),
            this
          );
        }
        getUser() {
          return this._user;
        }
        getRequestSession() {
          return this._requestSession;
        }
        setRequestSession(e) {
          return (this._requestSession = e), this;
        }
        setTags(e) {
          return (
            (this._tags = { ...this._tags, ...e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setTag(e, t) {
          return (
            (this._tags = { ...this._tags, [e]: t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtras(e) {
          return (
            (this._extra = { ...this._extra, ...e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtra(e, t) {
          return (
            (this._extra = { ...this._extra, [e]: t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setFingerprint(e) {
          return (this._fingerprint = e), this._notifyScopeListeners(), this;
        }
        setLevel(e) {
          return (this._level = e), this._notifyScopeListeners(), this;
        }
        setTransactionName(e) {
          return (
            (this._transactionName = e), this._notifyScopeListeners(), this
          );
        }
        setContext(e, t) {
          return (
            null === t ? delete this._contexts[e] : (this._contexts[e] = t),
            this._notifyScopeListeners(),
            this
          );
        }
        setSession(e) {
          return (
            e ? (this._session = e) : delete this._session,
            this._notifyScopeListeners(),
            this
          );
        }
        getSession() {
          return this._session;
        }
        update(e) {
          if (!e) return this;
          const t = "function" == typeof e ? e(this) : e,
            [n, i] =
              t instanceof P
                ? [t.getScopeData(), t.getRequestSession()]
                : u(t)
                  ? [e, e.requestSession]
                  : [],
            {
              tags: r,
              extra: s,
              user: o,
              contexts: a,
              level: l,
              fingerprint: c = [],
              propagationContext: d,
            } = n || {};
          return (
            (this._tags = { ...this._tags, ...r }),
            (this._extra = { ...this._extra, ...s }),
            (this._contexts = { ...this._contexts, ...a }),
            o && Object.keys(o).length && (this._user = o),
            l && (this._level = l),
            c.length && (this._fingerprint = c),
            d && (this._propagationContext = d),
            i && (this._requestSession = i),
            this
          );
        }
        clear() {
          return (
            (this._breadcrumbs = []),
            (this._tags = {}),
            (this._extra = {}),
            (this._user = {}),
            (this._contexts = {}),
            (this._level = void 0),
            (this._transactionName = void 0),
            (this._fingerprint = void 0),
            (this._requestSession = void 0),
            (this._session = void 0),
            C(this, void 0),
            (this._attachments = []),
            (this._propagationContext = p()),
            this._notifyScopeListeners(),
            this
          );
        }
        addBreadcrumb(e, t) {
          const n = "number" == typeof t ? t : 100;
          if (n <= 0) return this;
          const i = { timestamp: S(), ...e },
            r = this._breadcrumbs;
          return (
            r.push(i),
            (this._breadcrumbs = r.length > n ? r.slice(-n) : r),
            this._notifyScopeListeners(),
            this
          );
        }
        getLastBreadcrumb() {
          return this._breadcrumbs[this._breadcrumbs.length - 1];
        }
        clearBreadcrumbs() {
          return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
        }
        addAttachment(e) {
          return this._attachments.push(e), this;
        }
        clearAttachments() {
          return (this._attachments = []), this;
        }
        getScopeData() {
          return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: T(this),
          };
        }
        setSDKProcessingMetadata(e) {
          return (
            (this._sdkProcessingMetadata = {
              ...this._sdkProcessingMetadata,
              ...e,
            }),
            this
          );
        }
        setPropagationContext(e) {
          return (this._propagationContext = e), this;
        }
        getPropagationContext() {
          return this._propagationContext;
        }
        captureException(e, t) {
          const n = t && t.event_id ? t.event_id : h();
          if (!this._client)
            return (
              k.warn(
                "No client configured on scope - will not capture exception!",
              ),
              n
            );
          const i = new Error("Sentry syntheticException");
          return (
            this._client.captureException(
              e,
              {
                originalException: e,
                syntheticException: i,
                ...t,
                event_id: n,
              },
              this,
            ),
            n
          );
        }
        captureMessage(e, t, n) {
          const i = n && n.event_id ? n.event_id : h();
          if (!this._client)
            return (
              k.warn(
                "No client configured on scope - will not capture message!",
              ),
              i
            );
          const r = new Error(e);
          return (
            this._client.captureMessage(
              e,
              t,
              {
                originalException: e,
                syntheticException: r,
                ...n,
                event_id: i,
              },
              this,
            ),
            i
          );
        }
        captureEvent(e, t) {
          const n = t && t.event_id ? t.event_id : h();
          return this._client
            ? (this._client.captureEvent(e, { ...t, event_id: n }, this), n)
            : (k.warn(
                "No client configured on scope - will not capture event!",
              ),
              n);
        }
        _notifyScopeListeners() {
          this._notifyingListeners ||
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((e) => {
              e(this);
            }),
            (this._notifyingListeners = !1));
        }
      }
      const P = M;
      class x {
        constructor(e, t) {
          let n, i;
          (n = e || new P()),
            (i = t || new P()),
            (this._stack = [{ scope: n }]),
            (this._isolationScope = i);
        }
        withScope(e) {
          const t = this._pushScope();
          let n;
          try {
            n = e(t);
          } catch (e) {
            throw (this._popScope(), e);
          }
          return (
            (i = n),
            Boolean(i && i.then && "function" == typeof i.then)
              ? n.then(
                  (e) => (this._popScope(), e),
                  (e) => {
                    throw (this._popScope(), e);
                  },
                )
              : (this._popScope(), n)
          );
          var i;
        }
        getClient() {
          return this.getStackTop().client;
        }
        getScope() {
          return this.getStackTop().scope;
        }
        getIsolationScope() {
          return this._isolationScope;
        }
        getStackTop() {
          return this._stack[this._stack.length - 1];
        }
        _pushScope() {
          const e = this.getScope().clone();
          return this._stack.push({ client: this.getClient(), scope: e }), e;
        }
        _popScope() {
          return !(this._stack.length <= 1) && !!this._stack.pop();
        }
      }
      function N() {
        const e = a(o());
        return (e.stack =
          e.stack ||
          new x(
            s("defaultCurrentScope", () => new P()),
            s("defaultIsolationScope", () => new P()),
          ));
      }
      function D(e) {
        return N().withScope(e);
      }
      function R(e, t) {
        const n = N();
        return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
      }
      function I(e) {
        return N().withScope(() => e(N().getIsolationScope()));
      }
      function j(e) {
        const t = a(e);
        return t.acs
          ? t.acs
          : {
              withIsolationScope: I,
              withScope: D,
              withSetScope: R,
              withSetIsolationScope: (e, t) => I(t),
              getCurrentScope: () => N().getScope(),
              getIsolationScope: () => N().getIsolationScope(),
            };
      }
      function L() {
        return j(o()).getCurrentScope();
      }
      new WeakMap();
      function A(e) {
        if (e)
          return (function (e) {
            return e instanceof P || "function" == typeof e;
          })(e) ||
            (function (e) {
              return Object.keys(e).some((e) => q.includes(e));
            })(e)
            ? { captureContext: e }
            : e;
      }
      const q = [
        "user",
        "level",
        "extra",
        "contexts",
        "tags",
        "fingerprint",
        "requestSession",
        "propagationContext",
      ];
      function H() {
        return j(o()).getIsolationScope().lastEventId();
      }
      const B =
        /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
      function U(e) {
        return {
          protocol: e.protocol,
          publicKey: e.publicKey || "",
          pass: e.pass || "",
          host: e.host,
          port: e.port || "",
          path: e.path || "",
          projectId: e.projectId,
        };
      }
      function z(e) {
        const t =
          "string" == typeof e
            ? (function (e) {
                const t = B.exec(e);
                if (!t)
                  return void _(() => {
                    console.error(`Invalid Sentry Dsn: ${e}`);
                  });
                const [n, i, r = "", s = "", o = "", a = ""] = t.slice(1);
                let l = "",
                  c = a;
                const u = c.split("/");
                if (
                  (u.length > 1 &&
                    ((l = u.slice(0, -1).join("/")), (c = u.pop())),
                  c)
                ) {
                  const e = c.match(/^\d+/);
                  e && (c = e[0]);
                }
                return U({
                  host: s,
                  pass: r,
                  path: l,
                  projectId: c,
                  port: o,
                  protocol: n,
                  publicKey: i,
                });
              })(e)
            : U(e);
        if (
          t &&
          (function (e) {
            if (!g) return !0;
            const { port: t, projectId: n, protocol: i } = e;
            return !(
              ["protocol", "publicKey", "host", "projectId"].find(
                (t) =>
                  !e[t] && (k.error(`Invalid Sentry Dsn: ${t} missing`), !0),
              ) ||
              (n.match(/^\d+$/)
                ? (function (e) {
                    return "http" === e || "https" === e;
                  })(i)
                  ? t &&
                    isNaN(parseInt(t, 10)) &&
                    (k.error(`Invalid Sentry Dsn: Invalid port ${t}`), 1)
                  : (k.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), 1)
                : (k.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), 1))
            );
          })(t)
        )
          return t;
      }
      function F(e) {
        const t = e.protocol ? `${e.protocol}:` : "",
          n = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
      }
      const W = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        Y = r;
      function $(e = {}) {
        if (!Y.document)
          return void (
            W && k.error("Global document not defined in showReportDialog call")
          );
        const t = L(),
          n = t.getClient(),
          i = n && n.getDsn();
        if (!i)
          return void (
            W && k.error("DSN not configured for showReportDialog call")
          );
        if ((t && (e.user = { ...t.getUser(), ...e.user }), !e.eventId)) {
          const t = H();
          t && (e.eventId = t);
        }
        const r = Y.document.createElement("script");
        (r.async = !0),
          (r.crossOrigin = "anonymous"),
          (r.src = (function (e, t) {
            const n = z(e);
            if (!n) return "";
            const i = `${F(n)}embed/error-page/`;
            let r = `dsn=${(function (e, t = !1) {
              const {
                host: n,
                path: i,
                pass: r,
                port: s,
                projectId: o,
                protocol: a,
                publicKey: l,
              } = e;
              return `${a}://${l}${t && r ? `:${r}` : ""}@${n}${s ? `:${s}` : ""}/${i ? `${i}/` : i}${o}`;
            })(n)}`;
            for (const e in t)
              if ("dsn" !== e && "onClose" !== e)
                if ("user" === e) {
                  const e = t.user;
                  if (!e) continue;
                  e.name && (r += `&name=${encodeURIComponent(e.name)}`),
                    e.email && (r += `&email=${encodeURIComponent(e.email)}`);
                } else
                  r += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
            return `${i}?${r}`;
          })(i, e)),
          e.onLoad && (r.onload = e.onLoad);
        const { onClose: s } = e;
        if (s) {
          const e = (t) => {
            if ("__sentry_reportdialog_closed__" === t.data)
              try {
                s();
              } finally {
                Y.removeEventListener("message", e);
              }
          };
          Y.addEventListener("message", e);
        }
        const o = Y.document.head || Y.document.body;
        o
          ? o.appendChild(r)
          : W &&
            k.error(
              "Not injecting report dialog. No injection point found in HTML",
            );
      }
      n(904);
      var V = n(90626);
      const Z = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      function X(e, { componentStack: t }, n) {
        if (
          (function (e) {
            const t = e.match(/^([^.]+)/);
            return null !== t && parseInt(t[0]) >= 17;
          })(V.version) &&
          (function (e) {
            switch (l.call(e)) {
              case "[object Error]":
              case "[object Exception]":
              case "[object DOMException]":
                return !0;
              default:
                return d(e, Error);
            }
          })(e) &&
          t
        ) {
          const n = new Error(e.message);
          (n.name = `React ErrorBoundary ${e.name}`),
            (n.stack = t),
            (function (e, t) {
              const n = new WeakSet();
              !(function e(t, i) {
                if (!n.has(t))
                  return t.cause
                    ? (n.add(t), e(t.cause, i))
                    : void (t.cause = i);
              })(e, t);
            })(e, n);
        }
        return (function (e, t) {
          return L().captureException(e, A(t));
        })(e, {
          ...n,
          captureContext: { contexts: { react: { componentStack: t } } },
        });
      }
      const K = { componentStack: null, error: null, eventId: null };
      class Q extends V.Component {
        constructor(e) {
          super(e),
            Q.prototype.__init.call(this),
            (this.state = K),
            (this._openFallbackReportDialog = !0);
          const t = L().getClient();
          t &&
            e.showDialog &&
            ((this._openFallbackReportDialog = !1),
            (this._cleanupHook = t.on("afterSendEvent", (t) => {
              !t.type &&
                this._lastEventId &&
                t.event_id === this._lastEventId &&
                $({ ...e.dialogOptions, eventId: this._lastEventId });
            })));
        }
        componentDidCatch(e, t) {
          const { componentStack: n } = t,
            i = null == n ? void 0 : n,
            {
              beforeCapture: r,
              onError: s,
              showDialog: a,
              dialogOptions: l,
            } = this.props;
          !(function (...e) {
            const t = j(o());
            if (2 === e.length) {
              const [n, i] = e;
              return n ? t.withSetScope(n, i) : t.withScope(i);
            }
            t.withScope(e[0]);
          })((o) => {
            r && r(o, e, i);
            const c = X(e, t, {
              mechanism: { handled: !!this.props.fallback },
            });
            s && s(e, i, c),
              a &&
                ((this._lastEventId = c),
                this._openFallbackReportDialog && $({ ...l, eventId: c })),
              this.setState({ error: e, componentStack: n, eventId: c });
          });
        }
        componentDidMount() {
          const { onMount: e } = this.props;
          e && e();
        }
        componentWillUnmount() {
          const { error: e, componentStack: t, eventId: n } = this.state,
            { onUnmount: i } = this.props;
          i && i(e, t, n),
            this._cleanupHook &&
              (this._cleanupHook(), (this._cleanupHook = void 0));
        }
        __init() {
          this.resetErrorBoundary = () => {
            const { onReset: e } = this.props,
              { error: t, componentStack: n, eventId: i } = this.state;
            e && e(t, n, i), this.setState(K);
          };
        }
        render() {
          const { fallback: e, children: t } = this.props,
            n = this.state;
          if (n.error) {
            let t;
            return (
              (t =
                "function" == typeof e
                  ? V.createElement(e, {
                      error: n.error,
                      componentStack: n.componentStack,
                      resetError: this.resetErrorBoundary,
                      eventId: n.eventId,
                    })
                  : e),
              V.isValidElement(t)
                ? t
                : (e &&
                    Z &&
                    k.warn("fallback did not produce a valid ReactElement"),
                  null)
            );
          }
          return "function" == typeof t ? t() : t;
        }
      }
    },
    54806: (e, t, n) => {
      n.d(t, { E: () => b });
      var i = n(90626),
        r = n(86709),
        s = n(45747),
        o = n(74500),
        a = n(57168);
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
        m = n(44407),
        S = n(19866);
      function b({ queries: e, ...t }, n) {
        const o = (0, u.jE)(n),
          a = (0, d.w)(),
          l = (0, h.h)(),
          b = i.useMemo(
            () =>
              e.map((e) => {
                const t = o.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = a ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, o, a],
          );
        b.forEach((e) => {
          (0, m.jv)(e), (0, p.LJ)(e, l);
        }),
          (0, p.wZ)(l);
        const [f] = i.useState(() => new c(o, b, t)),
          [g, v, y] = f.getOptimisticResult(b, t.combine);
        i.useSyncExternalStore(
          i.useCallback(
            (e) => (a ? S.l : f.subscribe(r.j.batchCalls(e))),
            [f, a],
          ),
          () => f.getCurrentResult(),
          () => f.getCurrentResult(),
        ),
          i.useEffect(() => {
            f.setQueries(b, t, { listeners: !1 });
          }, [b, t, f]);
        const _ = g.some((e, t) => (0, m.EU)(b[t], e))
          ? g.flatMap((e, t) => {
              const n = b[t];
              if (n) {
                const t = new s.$(o, n);
                if ((0, m.EU)(n, e)) return (0, m.iL)(n, t, l);
                (0, m.nE)(e, a) && (0, m.iL)(n, t, l);
              }
              return [];
            })
          : [];
        if (_.length > 0) throw Promise.all(_);
        const k = g.find((e, t) => {
          const n = b[t];
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
        if (k?.error) throw k.error;
        return v(y());
      }
    },
  },
]);
