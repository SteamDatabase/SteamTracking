/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9099],
  {
    65731: (e, t, i) => {
      i.d(t, {
        Ap: () => tt,
        CC: () => ge,
        Yc: () => G,
        Yw: () => x,
        _X: () => le,
        cL: () => _e,
        gi: () => te,
        q7: () => Xe,
      });
      var n = i(90626);
      function r(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(i), !0).forEach(function (t) {
                c(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : r(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t),
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
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function l(e, t, i) {
        return (
          t && o(e.prototype, t),
          i && o(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function c(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
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
        var i,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var i,
              n,
              r = {},
              s = Object.keys(e);
            for (n = 0; n < s.length; n++)
              (i = s[n]), t.indexOf(i) >= 0 || (r[i] = e[i]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (n = 0; n < s.length; n++)
            (i = s[n]),
              t.indexOf(i) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, i) &&
                  (r[i] = e[i]));
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
          var i,
            n = h(e);
          if (t) {
            var r = h(this).constructor;
            i = Reflect.construct(n, arguments, r);
          } else i = n.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" == typeof t || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return b(e);
          })(this, i);
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
              var i = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === i && e.constructor && (i = e.constructor.name),
                "Map" === i || "Set" === i
                  ? Array.from(e)
                  : "Arguments" === i ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
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
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
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
      function C(e, t, i) {
        if (e === t) return !0;
        var n = U[W(e)],
          r = U[W(t)];
        return !(!n || n !== r) && n(e, t, i);
      }
      function E(e) {
        return function (t, i, n) {
          if (!n) return e(t, i, []);
          for (var r, s = n.length; (r = n[--s]); )
            if (r[0] === t && r[1] === i) return !0;
          return e(t, i, n);
        };
      }
      function M(e) {
        var t = [];
        for (var i in e) "constructor" !== i && t.push(i);
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
          ? j(
              (function (e) {
                return Array.isArray(e) ? [] : {};
              })(e),
              e,
              t,
            )
          : e;
      }
      function D(e, t, i) {
        return e.concat(t).map(function (e) {
          return N(e, i);
        });
      }
      function j(e, t, i) {
        ((i = i || {}).arrayMerge = i.arrayMerge || D),
          (i.isMergeableObject = i.isMergeableObject || V);
        var n = Array.isArray(t);
        return n === Array.isArray(e)
          ? n
            ? i.arrayMerge(e, t, i)
            : (function (e, t, i) {
                var n = {};
                return (
                  i.isMergeableObject(e) &&
                    Object.keys(e).forEach(function (t) {
                      n[t] = N(e[t], i);
                    }),
                  Object.keys(t).forEach(function (r) {
                    i.isMergeableObject(t[r]) && e[r]
                      ? (n[r] = j(e[r], t[r], i))
                      : (n[r] = N(t[r], i));
                  }),
                  n
                );
              })(e, t, i)
          : N(t, i);
      }
      function x(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function () {
                  return {};
                },
          i = (function (i) {
            function r(e, i) {
              var n;
              return (
                a(this, r),
                ((n = o.call(this, e, i)).state = t(s({}, i.state))),
                (n.updateStateProps = n.updateStateProps.bind(b(n))),
                n
              );
            }
            d(r, i);
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
                    this.setState(t(s({}, this.context.state)));
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this,
                      i = K(this.state, this.props);
                    return n.createElement(
                      e,
                      u(
                        {
                          ref: function (e) {
                            t.instance = e;
                          },
                        },
                        i,
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
          })(n.Component);
        return (
          c(i, "contextType", G),
          c(i, "propTypes", { children: q.children }),
          c(i, "defaultProps", { children: null }),
          i
        );
      }
      k.resetWarningCache = y;
      var A = v(function (e) {
          e.exports = (function () {
            function e(e, t, i, n, r, s) {
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
            var i = {
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
            return (i.PropTypes = i), i;
          })();
        }),
        R = "loading",
        L = "success",
        I = "error",
        q = {
          children: A.oneOfType([A.arrayOf(A.node), A.node]),
          direction: A.oneOf(["forward", "backward"]),
          height: function (e, t) {
            var i = e[t];
            return "vertical" !== e.orientation ||
              (null !== i && "number" == typeof i)
              ? null
              : new Error(
                  "Missing required property '".concat(
                    t,
                    "' when orientation is vertical.  You must supply a number representing the height in pixels",
                  ),
                );
          },
          orientation: A.oneOf(["horizontal", "vertical"]),
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
        z = function (e) {
          var t = e.min,
            i = e.max,
            n = e.x;
          return Math.min(i, Math.max(t, n));
        },
        H = "buttonBack___1mlaL",
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
            var n;
            return (
              a(this, t),
              ((n = i.call(this, e)).handleOnClick = n.handleOnClick.bind(
                b(n),
              )),
              n
            );
          }
          d(t, e);
          var i = m(t);
          return (
            l(
              t,
              [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props,
                      i = t.carouselStore,
                      n = t.currentSlide,
                      r = t.onClick,
                      s = t.step,
                      a = t.infinite,
                      o = t.visibleSlides,
                      l = t.totalSlides - o,
                      c = Math.max(n - s, 0);
                    a && (c = 0 === n ? l : c),
                      i.setStoreState(
                        { currentSlide: c, isPlaying: !1 },
                        null !== r && r.call(this, e),
                      );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      i = (e.carouselStore, e.className),
                      r =
                        (e.currentSlide,
                        e.disabled,
                        e.onClick,
                        e.step,
                        e.totalSlides,
                        e.visibleSlides,
                        e.infinite),
                      s = S(e, B),
                      a = O([H, "carousel__back-button", i]),
                      o = t.setDisabled(
                        this.props.disabled,
                        this.props.currentSlide,
                        r,
                      );
                    return n.createElement(
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
                  value: function (e, t, i) {
                    return null !== e ? e : 0 === t && !i;
                  },
                },
              ],
            ),
            t
          );
        })(n.Component);
      c(F, "propTypes", {
        carouselStore: A.object.isRequired,
        children: q.children.isRequired,
        className: A.string,
        currentSlide: A.number.isRequired,
        disabled: A.bool,
        onClick: A.func,
        step: A.number.isRequired,
        totalSlides: A.number.isRequired,
        visibleSlides: A.number.isRequired,
        infinite: A.bool,
      }),
        c(F, "defaultProps", {
          className: null,
          disabled: null,
          onClick: null,
          infinite: !1,
        });
      var W = v(function (e, t) {
          var i = {}.toString,
            n = "undefined" != typeof window ? window.Node : Function;
          e.exports = t = function (e) {
            var t = typeof e;
            if ("object" != t) return t;
            if ("object" == (t = r[i.call(e)]))
              return e instanceof Map
                ? "map"
                : e instanceof Set
                  ? "set"
                  : "object";
            if (t) return t;
            if (e instanceof n)
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
            function: function (e, t, i) {
              return (
                e.toString() === t.toString() &&
                U.object(e, t, i) &&
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
      (U.arguments =
        U["bit-array"] =
        U.array =
          E(function (e, t, i) {
            var n = e.length;
            if (n !== t.length) return !1;
            for (i.push([e, t]); n--; ) if (!C(e[n], t[n], i)) return !1;
            return !0;
          })),
        (U.object = E(function (e, t, i) {
          if ("function" == typeof e.equal)
            return i.push([e, t]), e.equal(t, i);
          var n = M(e),
            r = M(t),
            s = n.length;
          if (s !== r.length) return !1;
          for (n.sort(), r.sort(); s--; ) if (n[s] !== r[s]) return !1;
          for (i.push([e, t]), s = n.length; s--; ) {
            var a = n[s];
            if (!C(e[a], t[a], i)) return !1;
          }
          return !0;
        }));
      var Y = C,
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
      j.all = function (e, t) {
        if (!Array.isArray(e))
          throw new Error("first argument should be an array");
        return e.reduce(function (e, i) {
          return j(e, i, t);
        }, {});
      };
      var X,
        K = j,
        G = n.createContext(),
        Q = function e(t) {
          return (
            Object.freeze(t),
            Object.getOwnPropertyNames(t).forEach(function (i) {
              !t.hasOwnProperty(i) ||
                null === t[i] ||
                ("object" != typeof t[i] && "function" != typeof t[i]) ||
                Object.isFrozen(t[i]) ||
                e(t[i]);
            }),
            t
          );
        },
        $ = { masterSpinnerFinished: !1 },
        J = (function () {
          function e(t) {
            a(this, e),
              (this.state = Q(K($, t))),
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
                  (this.state = Q(K(this.state, e))), this.updateSubscribers(t);
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
                var n;
                if (
                  (a(this, t),
                  (n = i.call(this, e)),
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
                return (n.carouselStore = new J(r)), n;
              }
              d(t, e);
              var i = m(t);
              return (
                l(t, [
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      var t = this,
                        i = {};
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
                      ].forEach(function (n) {
                        e[n] !== t.props[n] && (i[n] = t.props[n]);
                      }),
                        this.props.currentSlide !== e.currentSlide &&
                          !this.props.disableAnimation &&
                          ((i.disableAnimation = !0),
                          (i.privateUnDisableAnimation = !0)),
                        (this.props.totalSlides === e.totalSlides &&
                          this.props.visibleSlides === e.visibleSlides) ||
                          ((i.slideSize = T(
                            this.props.totalSlides,
                            this.props.visibleSlides,
                          )),
                          (i.slideTraySize = w(
                            this.props.totalSlides,
                            this.props.visibleSlides,
                          ))),
                        this.carouselStore.state.currentSlide >=
                          this.props.totalSlides &&
                          (i.currentSlide = Math.max(
                            this.props.totalSlides - 1,
                            0,
                          )),
                        Object.keys(i).length > 0 &&
                          this.carouselStore.setStoreState(i);
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
                        i =
                          (e.totalSlides,
                          e.touchEnabled,
                          e.dragEnabled,
                          e.visibleSlides,
                          e.infinite,
                          e.isIntrinsicHeight,
                          S(e, ee)),
                        r = O(["carousel", this.props.className]);
                      return n.createElement(
                        t,
                        u({ className: r }, i),
                        n.createElement(
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
            })(n.Component)),
            "propTypes",
            {
              children: q.children.isRequired,
              className: A.string,
              currentSlide: A.number,
              disableAnimation: A.bool,
              disableKeyboard: A.bool,
              hasMasterSpinner: A.bool,
              interval: A.number,
              isPageScrollLocked: A.bool,
              isPlaying: A.bool,
              lockOnWindowScroll: A.bool,
              naturalSlideHeight: A.number.isRequired,
              naturalSlideWidth: A.number.isRequired,
              orientation: q.orientation,
              playDirection: q.direction,
              step: A.number,
              dragStep: A.number,
              tag: A.string,
              totalSlides: A.number.isRequired,
              touchEnabled: A.bool,
              dragEnabled: A.bool,
              visibleSlides: A.number,
              infinite: A.bool,
              isIntrinsicHeight: A.bool,
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
      G.Consumer;
      var ie,
        ne,
        re,
        se,
        ae,
        oe,
        le = x(F, function (e) {
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
          ((ie = (function (e) {
            function t() {
              var e;
              return (
                a(this, t),
                ((e = i.call(this)).handleOnClick = e.handleOnClick.bind(b(e))),
                e
              );
            }
            d(t, e);
            var i = m(t);
            return (
              l(t, [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props,
                      i = t.carouselStore,
                      n = t.onClick;
                    i.setStoreState(
                      { currentSlide: 0, isPlaying: !1 },
                      null !== n && n.call(this, e),
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = (e.carouselStore, e.className),
                      i = e.currentSlide,
                      r = e.disabled,
                      s = (e.onClick, e.totalSlides, S(e, ue)),
                      a = O([ce, "carousel__first-button", t]),
                      o = null !== r ? r : 0 === i;
                    return n.createElement(
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
          })(n.Component)),
          c(ie, "propTypes", {
            carouselStore: A.object.isRequired,
            children: q.children.isRequired,
            className: A.string,
            currentSlide: A.number.isRequired,
            disabled: A.bool,
            onClick: A.func,
            totalSlides: A.number.isRequired,
          }),
          c(ie, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          ie),
        he =
          (x(de, function (e) {
            return { currentSlide: e.currentSlide, totalSlides: e.totalSlides };
          }),
          "buttonLast___2yuh0"),
        pe = [
          "carouselStore",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "totalSlides",
          "visibleSlides",
        ],
        Se =
          ((ne = (function (e) {
            function t() {
              var e;
              return (
                a(this, t),
                ((e = i.call(this)).handleOnClick = e.handleOnClick.bind(b(e))),
                e
              );
            }
            d(t, e);
            var i = m(t);
            return (
              l(t, [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props,
                      i = t.carouselStore,
                      n = t.onClick,
                      r = t.totalSlides,
                      s = t.visibleSlides;
                    i.setStoreState(
                      { currentSlide: r - s, isPlaying: !1 },
                      null !== n && n.call(this, e),
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = (e.carouselStore, e.className),
                      i = e.currentSlide,
                      r = e.disabled,
                      s = (e.onClick, e.totalSlides),
                      a = e.visibleSlides,
                      o = S(e, pe),
                      l = O([he, "carousel__last-button", t]),
                      c = null !== r ? r : i >= s - a;
                    return n.createElement(
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
          })(n.Component)),
          c(ne, "propTypes", {
            carouselStore: A.object.isRequired,
            children: q.children.isRequired,
            className: A.string,
            currentSlide: A.number.isRequired,
            disabled: A.bool,
            onClick: A.func,
            totalSlides: A.number.isRequired,
            visibleSlides: A.number.isRequired,
          }),
          c(ne, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          ne),
        be =
          (x(Se, function (e) {
            return {
              currentSlide: e.currentSlide,
              totalSlides: e.totalSlides,
              visibleSlides: e.visibleSlides,
            };
          }),
          "buttonNext___2mOCa"),
        me = [
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
        fe =
          ((re = (function (e) {
            function t(e) {
              var n;
              return (
                a(this, t),
                ((n = i.call(this, e)).handleOnClick = n.handleOnClick.bind(
                  b(n),
                )),
                n
              );
            }
            d(t, e);
            var i = m(t);
            return (
              l(
                t,
                [
                  {
                    key: "handleOnClick",
                    value: function (e) {
                      var t = this.props,
                        i = t.currentSlide,
                        n = t.onClick,
                        r = t.step,
                        s = t.carouselStore,
                        a = t.infinite,
                        o = t.totalSlides - t.visibleSlides,
                        l = r + i,
                        c = Math.min(l, o);
                      a && (c = o === i ? 0 : c),
                        s.setStoreState(
                          { currentSlide: c, isPlaying: !1 },
                          null !== n && n.call(this, e),
                        );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        i = (e.carouselStore, e.className),
                        r = e.currentSlide,
                        s = e.disabled,
                        a = (e.onClick, e.step, e.totalSlides),
                        o = e.visibleSlides,
                        l = e.infinite,
                        c = S(e, me),
                        d = O([be, "carousel__next-button", i]),
                        h = t.setDisabled(s, r, o, a, l);
                      return n.createElement(
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
                    value: function (e, t, i, n, r) {
                      return null !== e ? e : t >= n - i && !r;
                    },
                  },
                ],
              ),
              t
            );
          })(n.PureComponent)),
          c(re, "propTypes", {
            carouselStore: A.object.isRequired,
            children: q.children.isRequired,
            className: A.string,
            currentSlide: A.number.isRequired,
            disabled: A.bool,
            onClick: A.func,
            step: A.number.isRequired,
            totalSlides: A.number.isRequired,
            visibleSlides: A.number.isRequired,
            infinite: A.bool,
          }),
          c(re, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
            infinite: !1,
          }),
          re),
        ge = x(fe, function (e) {
          return {
            currentSlide: e.currentSlide,
            step: e.step,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
            infinite: e.infinite,
          };
        }),
        ve = "buttonNext___3Lm3s",
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
              var n;
              return (
                a(this, t),
                ((n = i.call(this, e)).handleOnClick = n.handleOnClick.bind(
                  b(n),
                )),
                n
              );
            }
            d(t, e);
            var i = m(t);
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
                      i = e.childrenPlaying,
                      r = e.className,
                      s = e.isPlaying,
                      a = (e.onClick, S(e, ye)),
                      o = O([ve, "carousel__play-button", r]);
                    return n.createElement(
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
                      s && i,
                      !s && t,
                      this.props.children,
                    );
                  },
                },
              ]),
              t
            );
          })(n.PureComponent)),
          c(se, "propTypes", {
            carouselStore: A.object.isRequired,
            children: A.node,
            childrenPaused: A.node,
            childrenPlaying: A.node,
            className: A.string,
            isPlaying: A.bool.isRequired,
            onClick: A.func,
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
          (x(ke, function (e) {
            return { isPlaying: e.isPlaying };
          }),
          { dot: "dot___3c3SI" }),
        Te = [
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
        we =
          ((ae = (function (e) {
            function t(e) {
              var n;
              return (
                a(this, t),
                ((n = i.call(this, e)).handleOnClick = n.handleOnClick.bind(
                  b(n),
                )),
                n
              );
            }
            d(t, e);
            var i = m(t);
            return (
              l(t, [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props,
                      i = t.carouselStore,
                      n = t.onClick,
                      r = t.slide,
                      s = t.totalSlides,
                      a = t.visibleSlides,
                      o = r >= s - a ? s - a : r;
                    i.setStoreState(
                      { currentSlide: o, isPlaying: !1 },
                      null !== n && n.call(this, e),
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = (e.carouselStore, e.children, e.className),
                      i = e.currentSlide,
                      r = e.disabled,
                      s = (e.onClick, e.selected),
                      a = e.slide,
                      o = (e.totalSlides, e.visibleSlides),
                      l = S(e, Te),
                      c = a >= i && a < i + o,
                      d = "boolean" == typeof s ? s : c,
                      h = "boolean" == typeof r ? r : !0 === c,
                      p = O([
                        Oe.dot,
                        d && Oe.dotSelected,
                        "carousel__dot",
                        "carousel__dot--".concat(a),
                        d && "carousel__dot--selected",
                        t,
                      ]);
                    return n.createElement(
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
          })(n.Component)),
          c(ae, "propTypes", {
            carouselStore: A.object.isRequired,
            children: q.children,
            className: A.string,
            currentSlide: A.number.isRequired,
            disabled: A.bool,
            onClick: A.func,
            selected: A.bool,
            slide: A.number.isRequired,
            totalSlides: A.number.isRequired,
            visibleSlides: A.number.isRequired,
          }),
          c(ae, "defaultProps", {
            children: null,
            className: null,
            disabled: null,
            onClick: null,
            selected: null,
          }),
          ae),
        _e = x(we, function (e) {
          return {
            currentSlide: e.currentSlide,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
          };
        }),
        Ce = {},
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
          ((oe = (function (e) {
            function t() {
              return a(this, t), i.apply(this, arguments);
            }
            d(t, e);
            var i = m(t);
            return (
              l(t, [
                {
                  key: "renderDots",
                  value: function () {
                    var e = this.props,
                      t = e.currentSlide,
                      i = e.totalSlides,
                      r = e.visibleSlides,
                      s = e.disableActiveDots,
                      a = e.showAsSelectedForCurrentSlideOnly,
                      o = e.renderDots;
                    if (o) {
                      var l = this.props;
                      return l.renderDots, o(S(l, Ee));
                    }
                    for (var c = [], u = 0; u < i; u += 1) {
                      var d = a ? u === t : u >= t && u < t + r,
                        h = u >= i - r ? i - r : u;
                      c.push(
                        n.createElement(
                          _e,
                          { key: u, slide: h, selected: d, disabled: !!s && d },
                          n.createElement(
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
                      i = e.className,
                      r =
                        (e.currentSlide,
                        e.dotNumbers,
                        e.totalSlides,
                        e.visibleSlides,
                        e.disableActiveDots,
                        e.showAsSelectedForCurrentSlideOnly,
                        e.renderDots,
                        S(e, Me)),
                      s = O([Ce.DotGroup, "carousel__dot-group", i]);
                    return n.createElement(
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
          })(n.Component)),
          c(oe, "propTypes", {
            children: q.children,
            className: A.string,
            currentSlide: A.number.isRequired,
            carouselStore: A.object.isRequired,
            totalSlides: A.number.isRequired,
            visibleSlides: A.number.isRequired,
            dotNumbers: A.bool,
            disableActiveDots: A.bool,
            showAsSelectedForCurrentSlideOnly: A.bool,
            renderDots: A.func,
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
          (x(Pe, function (e) {
            return {
              currentSlide: e.currentSlide,
              totalSlides: e.totalSlides,
              visibleSlides: e.visibleSlides,
            };
          }),
          { image: "image___xtQGH" }),
        De = ["src", "alt"],
        je = [
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
        xe = (function (e) {
          function t(e) {
            var n;
            return (
              a(this, t),
              ((n = i.call(this, e)).state = { imageStatus: R }),
              (n.handleImageLoad = n.handleImageLoad.bind(b(n))),
              (n.handleImageError = n.handleImageError.bind(b(n))),
              (n.image = null),
              n
            );
          }
          d(t, e);
          var i = m(t);
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
                      i = O([
                        Ne.image,
                        Ne.imageLoading,
                        "carousel__image",
                        this.props.isBgImage &&
                          "carousel__image--with-background",
                        "carousel__image--loading",
                        this.props.className,
                      ]);
                    return n.createElement(
                      t,
                      u({ className: i }, e),
                      this.customRender("renderLoading"),
                    );
                  },
                },
                {
                  key: "renderError",
                  value: function (e) {
                    var t = this.tempTag(),
                      i = O([
                        Ne.image,
                        Ne.imageError,
                        "carousel__image",
                        this.props.isBgImage &&
                          "carousel__image--with-background",
                        "carousel__image--error",
                        this.props.className,
                      ]);
                    return n.createElement(
                      t,
                      u({ className: i }, e),
                      this.customRender("renderError"),
                    );
                  },
                },
                {
                  key: "renderSuccess",
                  value: function (e) {
                    var t = this.props,
                      i = t.style,
                      r = t.tag,
                      s = O([
                        Ne.image,
                        "carousel__image",
                        this.props.isBgImage &&
                          "carousel__image--with-background",
                        "carousel__image--success",
                        this.props.className,
                      ]),
                      a = u({}, i),
                      o = e;
                    if ("img" !== r) {
                      var l = e.src;
                      e.alt,
                        (o = S(e, De)),
                        (a = u({}, i, {
                          backgroundImage: 'url("'.concat(l, '")'),
                          backgroundSize: "cover",
                        }));
                    }
                    return n.createElement(
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
                        S(e, je));
                    switch (this.state.imageStatus) {
                      case R:
                        return this.renderLoading(t);
                      case L:
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
        })(n.Component);
      c(xe, "propTypes", {
        alt: A.string,
        carouselStore: A.object.isRequired,
        children: q.children,
        className: A.string,
        hasMasterSpinner: A.bool.isRequired,
        isBgImage: q.isBgImage,
        onError: A.func,
        onLoad: A.func,
        renderError: A.func,
        renderLoading: A.func,
        src: A.string.isRequired,
        style: A.object,
        tag: A.string,
      }),
        c(xe, "defaultProps", {
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
      var Ae,
        Re,
        Le,
        Ie,
        qe = x(xe, function (e) {
          return {
            hasMasterSpinner: e.hasMasterSpinner,
            orientation: e.orientation,
          };
        }),
        ze = "spinner___27VUp",
        He = ["className"],
        Be =
          (c(
            (Ae = (function (e) {
              function t() {
                return a(this, t), i.apply(this, arguments);
              }
              d(t, e);
              var i = m(t);
              return (
                l(t, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        i = S(e, He),
                        r = O([ze, "carousel__spinner", t]);
                      return n.createElement("div", u({ className: r }, i));
                    },
                  },
                ]),
                t
              );
            })(n.PureComponent)),
            "propTypes",
            { className: A.string },
          ),
          c(Ae, "defaultProps", { className: null }),
          Ae),
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
          ((Re = (function (e) {
            function t(e) {
              var n;
              return (
                a(this, t),
                ((n = i.call(this, e)).state = {
                  isImageLoading: !0,
                  isImageLoadingError: !0,
                  isHovering: !1,
                  isZooming: !1,
                  x: null,
                  y: null,
                  scale: 1,
                }),
                (n.tpCache = {}),
                (n.handleImageComplete = n.handleImageComplete.bind(b(n))),
                (n.handleImageLoadError = n.handleImageLoadError.bind(b(n))),
                (n.handleOnMouseMove = n.handleOnMouseMove.bind(b(n))),
                (n.handleOnMouseOut = n.handleOnMouseOut.bind(b(n))),
                (n.handleOnMouseOver = n.handleOnMouseOver.bind(b(n))),
                (n.handleOnTouchEnd = n.handleOnTouchEnd.bind(b(n))),
                (n.handleOnTouchMove = n.handleOnTouchMove.bind(b(n))),
                (n.handleOnTouchStart = n.handleOnTouchStart.bind(b(n))),
                n
              );
            }
            d(t, e);
            var i = m(t);
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
                          i = _(
                            (e.nativeEvent.offsetY / e.target.offsetHeight) *
                              100,
                          );
                        this.setState({ x: t, y: i });
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
                      var i = this;
                      if (this.state.isZooming) {
                        e.persist();
                        var n = f(e.targetTouches)
                          .filter(function (e) {
                            return i.tpCache[e.identifier];
                          })
                          .slice(0, 2);
                        if (2 === n.length) {
                          e.stopPropagation();
                          var r = e.target.getBoundingClientRect(),
                            a = n[0].identifier,
                            o = n[1].identifier,
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
                            x1: n[0].clientX,
                            y1: n[0].clientY,
                            x2: n[1].clientX,
                            y2: n[1].clientY,
                          };
                          u.distance = t.distanceBetweenTwoTouches(s({}, u));
                          var d = t.midpointBetweenTwoTouches(s({}, u));
                          (u.cx = d.x), (u.cy = d.y);
                          var h = _(
                              z({
                                min: 0,
                                max: 100,
                                x: ((u.cx - r.left) / r.width) * 100,
                              }),
                            ),
                            p = _(
                              z({
                                min: 0,
                                max: 100,
                                x: ((u.cy - r.top) / r.height) * 100,
                              }),
                            ),
                            S = function (e) {
                              return z({
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
                        return n.createElement(
                          "div",
                          {
                            className: O([
                              Fe.imageLoadingSpinnerContainer,
                              "carousel__image-loading-spinner-container",
                            ]),
                          },
                          e && e(),
                          !e && n.createElement(Be, null),
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
                        i = e.bgImageProps,
                        r = e.bgImageTag,
                        s = (e.carouselStore, e.className),
                        a = e.imageClassName,
                        o = e.overlayClassName,
                        l = (e.isPinchZoomEnabled, e.spinner, e.src),
                        c = e.srcZoomed,
                        d = e.tag,
                        h = S(e, We),
                        p = O([Fe.container, s]),
                        b = O([Fe.image, "carousel__zoom-image", a]),
                        m = O([
                          Fe.overlay,
                          "carousel__zoom-image-overlay",
                          this.state.isHovering && Fe.hover,
                          this.state.isZooming && Fe.zoom,
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
                        n.createElement(
                          d,
                          u({ className: p }, h),
                          n.createElement(
                            qe,
                            u(
                              {
                                alt: t,
                                className: b,
                                tag: r,
                                src: l,
                                onLoad: this.handleImageComplete,
                                onError: this.handleImageLoadError,
                              },
                              i,
                            ),
                          ),
                          n.createElement(qe, {
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
                        i = e.y1;
                      return { x: (t + e.x2) / 2, y: (i + e.y2) / 2 };
                    },
                  },
                  {
                    key: "distanceBetweenTwoTouches",
                    value: function (e) {
                      var t = e.x1,
                        i = e.y1,
                        n = e.x2,
                        r = e.y2;
                      return Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - i, 2));
                    },
                  },
                ],
              ),
              t
            );
          })(n.Component)),
          c(Re, "propTypes", {
            alt: A.string,
            bgImageProps: A.object,
            bgImageTag: A.string,
            carouselStore: A.object.isRequired,
            className: A.string,
            imageClassName: A.string,
            overlayClassName: A.string,
            spinner: A.func,
            onLoad: A.func,
            onError: A.func,
            src: A.string.isRequired,
            srcZoomed: A.string,
            tag: A.string,
            isPinchZoomEnabled: A.bool,
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
            onLoad: null,
            onError: null,
            srcZoomed: null,
            tag: "div",
          }),
          Re),
        Ye =
          (x(Ue, function () {
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
          "tag",
          "totalSlides",
          "visibleSlides",
          "isIntrinsicHeight",
        ],
        Ze =
          ((Le = (function (e) {
            function t(e) {
              var n;
              return (
                a(this, t),
                ((n = i.call(this, e)).handleOnFocus = n.handleOnFocus.bind(
                  b(n),
                )),
                (n.handleOnBlur = n.handleOnBlur.bind(b(n))),
                (n.state = { focused: !1 }),
                n
              );
            }
            d(t, e);
            var i = m(t);
            return (
              l(t, [
                {
                  key: "isVisible",
                  value: function () {
                    var e = this.props,
                      t = e.currentSlide,
                      i = e.index,
                      n = e.visibleSlides;
                    return i >= t && i < t + n;
                  },
                },
                {
                  key: "handleOnFocus",
                  value: function (e) {
                    var t = this,
                      i = this.props.onFocus;
                    this.setState({ focused: !0 }, function () {
                      null !== i && i.call(t, e);
                    });
                  },
                },
                {
                  key: "handleOnBlur",
                  value: function (e) {
                    var t = this,
                      i = this.props.onBlur;
                    this.setState({ focused: !1 }, function () {
                      null !== i && i.call(t, e);
                    });
                  },
                },
                {
                  key: "renderFocusRing",
                  value: function () {
                    return this.state.focused
                      ? n.createElement("div", {
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
                      i = t.ariaLabel,
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
                      v = S(t, Ve),
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
                        Ye.slide,
                        "horizontal" === h && Ye.slideHorizontal,
                        "carousel__slide",
                        this.state.focused && "carousel__slide--focused",
                        w && a,
                        w && "carousel__slide--visible",
                        !w && s,
                        !w && "carousel__slide--hidden",
                        r,
                      ]),
                      E = O([Ye.slideInner, "carousel__inner-slide", o]);
                    return n.createElement(
                      m,
                      u(
                        {
                          ref: function (t) {
                            e.tagRef = t;
                          },
                          "aria-selected": this.isVisible(),
                          "aria-label": i,
                          role: this.props.role,
                          onFocus: this.handleOnFocus,
                          onBlur: this.handleOnBlur,
                          className: C,
                          style: T,
                        },
                        v,
                      ),
                      n.createElement(
                        l,
                        {
                          ref: function (t) {
                            e.innerTagRef = t;
                          },
                          className: E,
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
          })(n.PureComponent)),
          c(Le, "propTypes", {
            ariaLabel: A.string,
            carouselStore: A.object,
            children: q.children,
            className: A.string,
            classNameHidden: A.string,
            classNameVisible: A.string,
            currentSlide: A.number.isRequired,
            index: A.number.isRequired,
            innerClassName: A.string,
            innerTag: A.string,
            naturalSlideHeight: A.number.isRequired,
            naturalSlideWidth: A.number.isRequired,
            onBlur: A.func,
            onFocus: A.func,
            orientation: q.orientation.isRequired,
            slideSize: A.number.isRequired,
            role: A.string,
            style: A.object,
            tag: A.string,
            totalSlides: A.number.isRequired,
            visibleSlides: A.number.isRequired,
            isIntrinsicHeight: A.bool,
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
            role: "option",
            style: {},
            tag: "div",
            isIntrinsicHeight: !1,
          }),
          Le),
        Xe = x(Ze, function (e) {
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
                      var i = this.parents(t.parentNode, []), n = 0;
                      n < i.length;
                      n += 1
                    )
                      if (e.scroll(i[n])) return i[n];
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
          ((Ie = (function (e) {
            function t(e) {
              var n;
              return (
                a(this, t),
                ((n = i.call(this, e)).getSliderRef = n.getSliderRef.bind(
                  b(n),
                )),
                (n.handleDocumentScroll = n.handleDocumentScroll.bind(b(n))),
                (n.handleOnClickCapture = n.handleOnClickCapture.bind(b(n))),
                (n.handleOnKeyDown = n.handleOnKeyDown.bind(b(n))),
                (n.handleOnMouseDown = n.handleOnMouseDown.bind(b(n))),
                (n.handleOnMouseMove = n.handleOnMouseMove.bind(b(n))),
                (n.handleOnMouseUp = n.handleOnMouseUp.bind(b(n))),
                (n.handleOnTouchCancel = n.handleOnTouchCancel.bind(b(n))),
                (n.handleOnTouchEnd = n.handleOnTouchEnd.bind(b(n))),
                (n.handleOnTouchMove = n.handleOnTouchMove.bind(b(n))),
                (n.handleOnTouchStart = n.handleOnTouchStart.bind(b(n))),
                (n.playBackward = n.playBackward.bind(b(n))),
                (n.playForward = n.playForward.bind(b(n))),
                (n.callCallback = n.callCallback.bind(b(n))),
                (n.blockWindowScroll = n.blockWindowScroll.bind(b(n))),
                (n.state = {
                  cancelNextClick: !1,
                  deltaX: 0,
                  deltaY: 0,
                  isBeingMouseDragged: !1,
                  isBeingTouchDragged: !1,
                  preventingVerticalScroll: !1,
                  startX: 0,
                  startY: 0,
                }),
                (n.interval = null),
                (n.isDocumentScrolling = null),
                (n.moveTimer = null),
                (n.originalOverflow = null),
                (n.scrollParent = null),
                (n.scrollStopTimer = null),
                n
              );
            }
            d(t, e);
            var i = m(t);
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
                        i = e.screenY,
                        n = e.touchDrag,
                        r = void 0 !== n && n,
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
                          startY: i,
                        });
                    },
                  },
                  {
                    key: "fakeOnDragMove",
                    value: function (e, t) {
                      var i = this;
                      window.cancelAnimationFrame.call(window, this.moveTimer),
                        (this.moveTimer = window.requestAnimationFrame.call(
                          window,
                          function () {
                            i.setState(function (n) {
                              return {
                                deltaX: (e - n.startX) * (i.rtl ? -1 : 1),
                                deltaY: t - n.startY,
                                preventingVerticalScroll:
                                  Math.abs(t - n.startY) <=
                                    i.props.verticalPixelThreshold &&
                                  Math.abs(e - n.startX) >=
                                    i.props.horizontalPixelThreshold,
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
                      var i = this.props.trayProps;
                      i && "function" == typeof i[e] && (t.persist(), i[e](t));
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
                        i = e.step,
                        n = e.totalSlides,
                        r = e.visibleSlides;
                      return Math.min(t + i, n - r);
                    },
                  },
                  {
                    key: "backward",
                    value: function () {
                      var e = this.props,
                        t = e.currentSlide,
                        i = e.step;
                      return Math.max(t - i, 0);
                    },
                  },
                  {
                    key: "handleOnKeyDown",
                    value: function (e) {
                      var t = e.keyCode,
                        i = this.props,
                        n = i.carouselStore,
                        r = i.currentSlide,
                        s = i.disableKeyboard,
                        a = i.totalSlides,
                        o = i.visibleSlides,
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
                        n.setStoreState(l));
                    },
                  },
                  {
                    key: "playForward",
                    value: function () {
                      var e = this.props,
                        t = e.carouselStore,
                        i = e.currentSlide;
                      t.setStoreState({
                        currentSlide: this.forward() === i ? 0 : this.forward(),
                      });
                    },
                  },
                  {
                    key: "playBackward",
                    value: function () {
                      var e = this.props,
                        t = e.carouselStore,
                        i = e.currentSlide,
                        n = e.totalSlides,
                        r = e.visibleSlides;
                      t.setStoreState({
                        currentSlide:
                          this.backward() === i ? n - r : this.backward(),
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
                        i = t.slidesMoved(
                          this.props.moveThreshold,
                          this.props.orientation,
                          this.state.deltaX,
                          this.state.deltaY,
                          e,
                          this.props.dragStep,
                        ),
                        n =
                          this.props.totalSlides -
                          Math.min(
                            this.props.totalSlides,
                            this.props.visibleSlides,
                          ),
                        r = z({
                          min: 0,
                          max: n,
                          x: this.props.currentSlide + i,
                        });
                      this.props.infinite &&
                        (this.props.currentSlide >= n && i > 0 && (r = 0),
                        0 === this.props.currentSlide && i < 0 && (r = n)),
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
                        i = e.masterSpinnerFinished,
                        r = e.spinner;
                      return t && !i
                        ? ("function" == typeof this.props.onMasterSpinner &&
                            this.props.onMasterSpinner(),
                          n.createElement(
                            "div",
                            {
                              className: O([
                                Ge.masterSpinnerContainer,
                                "carousel__master-spinner-container",
                              ]),
                            },
                            r && r(),
                            !r && n.createElement(Be, null),
                          ))
                        : null;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props,
                        i = t.ariaLabel,
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
                        C = S(t, Qe),
                        E = u({}, g),
                        M = {};
                      "vertical" === b &&
                        ((M.height = 0),
                        (M.paddingBottom = _((100 * h * T) / p)),
                        (M.width = _(100)));
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
                            ? Ge.verticalSlider
                            : Ge.horizontalSlider,
                          !v && Ge.touchDisabled,
                          "carousel__slider",
                          "vertical" === b
                            ? "carousel__slider--vertical"
                            : "carousel__slider--horizontal",
                          s,
                        ]),
                        j = O([
                          Ge.sliderTrayWrap,
                          "carousel__slider-tray-wrapper",
                          "vertical" === b
                            ? Ge.verticalSlideTrayWrap
                            : Ge.horizontalTrayWrap,
                          "vertical" === b
                            ? "carousel__slider-tray-wrap--vertical"
                            : "carousel__slider-tray-wrap--horizontal",
                          l,
                        ]),
                        x = O([
                          Ge.sliderTray,
                          a || Ge.sliderAnimation,
                          "carousel__slider-tray",
                          "vertical" === b
                            ? Ge.verticalTray
                            : Ge.horizontalTray,
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
                          S(C, $e)),
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
                          S(y, Je));
                      return n.createElement(
                        "div",
                        u(
                          {
                            ref: function (t) {
                              e.sliderElement = t;
                            },
                            className: D,
                            "aria-live": "polite",
                            "aria-label": i,
                            role: this.props.role,
                            style: E,
                            onKeyDown: this.handleOnKeyDown,
                          },
                          A,
                        ),
                        n.createElement(
                          "div",
                          { className: j, style: M },
                          n.createElement(
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
                    value: function (e, t, i, n) {
                      return ("horizontal" === e ? t : i) / n;
                    },
                  },
                  {
                    key: "slidesMoved",
                    value: function (e, t, i, n, r, s) {
                      var a = "horizontal" === t ? i : n,
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
          })(n.Component)),
          c(Ie, "propTypes", {
            ariaLabel: A.string,
            carouselStore: A.object.isRequired,
            children: A.node.isRequired,
            className: A.string,
            classNameAnimation: A.string,
            classNameTray: A.string,
            classNameTrayWrap: A.string,
            currentSlide: A.number.isRequired,
            disableAnimation: A.bool,
            disableKeyboard: A.bool,
            dragEnabled: A.bool.isRequired,
            dragStep: A.number,
            hasMasterSpinner: A.bool.isRequired,
            infinite: A.bool,
            interval: A.number.isRequired,
            isPageScrollLocked: A.bool.isRequired,
            isPlaying: A.bool.isRequired,
            lockOnWindowScroll: A.bool.isRequired,
            preventVerticalScrollOnTouch: A.bool,
            horizontalPixelThreshold: A.number,
            verticalPixelThreshold: A.number,
            masterSpinnerFinished: A.bool.isRequired,
            moveThreshold: A.number,
            naturalSlideHeight: A.number.isRequired,
            naturalSlideWidth: A.number.isRequired,
            onMasterSpinner: A.func,
            orientation: q.orientation.isRequired,
            playDirection: q.direction.isRequired,
            privateUnDisableAnimation: A.bool,
            role: A.string,
            slideSize: A.number.isRequired,
            slideTraySize: A.number.isRequired,
            spinner: A.func,
            step: A.number.isRequired,
            style: A.object,
            totalSlides: A.number.isRequired,
            touchEnabled: A.bool.isRequired,
            trayProps: A.shape({
              className: A.string,
              onClickCapture: A.func,
              onMouseDown: A.func,
              onTouchCancel: A.func,
              onTouchEnd: A.func,
              onTouchMove: A.func,
              onTouchStart: A.func,
              ref: A.shape({}),
              style: A.string,
            }),
            trayTag: A.string,
            visibleSlides: A.number,
            isIntrinsicHeight: A.bool,
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
            role: "listbox",
            spinner: null,
            style: {},
            trayProps: {},
            trayTag: "div",
            visibleSlides: 1,
            isIntrinsicHeight: !1,
          }),
          Ie),
        tt = x(et, function (e) {
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
