/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6656],
  {
    40029: (e, t, r) => {
      r.d(t, {
        Mi: () => Ze,
        P1: () => be,
        Rq: () => j,
        iR: () => tt,
        jp: () => oe,
        oT: () => Oe,
        ro: () => K,
        sj: () => te,
      });
      var i = r(47427);
      function n(e, t) {
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
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? n(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : n(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function o(e, t, r) {
        return (
          t && l(e.prototype, t),
          r && l(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function c(e, t, r) {
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
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var i in r)
                  Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
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
          t && m(e, t);
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function m(e, t) {
        return (m = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function p(e, t) {
        if (null == e) return {};
        var r,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              i,
              n = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++)
              (r = a[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (r = a[i]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      function b(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function S(e) {
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
          var r,
            i = h(e);
          if (t) {
            var n = h(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" == typeof t || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return b(e);
          })(this, r);
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
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
        for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
        return i;
      }
      function y(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
      }
      function v() {}
      function w() {}
      function _(e) {
        return e
          .map(function (e) {
            return !1 === e ? null : e;
          })
          .join(" ")
          .replace(/\s+/g, " ")
          .trim();
      }
      function B(e, t) {
        return ((100 / e) * t) / t;
      }
      function M(e, t) {
        return (100 * e) / t;
      }
      function O(e) {
        return "".concat(e, "%");
      }
      function k(e, t, r) {
        if (e === t) return !0;
        var i = L[X(e)],
          n = L[X(t)];
        return !(!i || i !== n) && i(e, t, r);
      }
      function T(e) {
        return function (t, r, i) {
          if (!i) return e(t, r, []);
          for (var n, a = i.length; (n = i[--a]); )
            if (n[0] === t && n[1] === r) return !0;
          return e(t, r, i);
        };
      }
      function E(e) {
        var t = [];
        for (var r in e) "constructor" !== r && t.push(r);
        return t;
      }
      function C(e) {
        var t = Object.prototype.toString.call(e);
        return (
          "[object RegExp]" === t ||
          "[object Date]" === t ||
          (function (e) {
            return e.$$typeof === Y;
          })(e)
        );
      }
      function R(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? F(
              (function (e) {
                return Array.isArray(e) ? [] : {};
              })(e),
              e,
              t,
            )
          : e;
      }
      function z(e, t, r) {
        return e.concat(t).map(function (e) {
          return R(e, r);
        });
      }
      function F(e, t, r) {
        ((r = r || {}).arrayMerge = r.arrayMerge || z),
          (r.isMergeableObject = r.isMergeableObject || V);
        var i = Array.isArray(t);
        return i === Array.isArray(e)
          ? i
            ? r.arrayMerge(e, t, r)
            : (function (e, t, r) {
                var i = {};
                return (
                  r.isMergeableObject(e) &&
                    Object.keys(e).forEach(function (t) {
                      i[t] = R(e[t], r);
                    }),
                  Object.keys(t).forEach(function (n) {
                    r.isMergeableObject(t[n]) && e[n]
                      ? (i[n] = F(e[n], t[n], r))
                      : (i[n] = R(t[n], r));
                  }),
                  i
                );
              })(e, t, r)
          : R(t, r);
      }
      function j(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function () {
                  return {};
                },
          r = (function (r) {
            function n(e, r) {
              var i;
              return (
                s(this, n),
                ((i = l.call(this, e, r)).state = t(a({}, r.state))),
                (i.updateStateProps = i.updateStateProps.bind(b(i))),
                i
              );
            }
            d(n, r);
            var l = S(n);
            return (
              o(n, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.context.subscribe(this.updateStateProps);
                  },
                },
                {
                  key: "shouldComponentUpdate",
                  value: function (e, t) {
                    return !H(t, this.state) || !H(e, this.props);
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
                      r = Q(this.state, this.props);
                    return i.createElement(
                      e,
                      u(
                        {
                          ref: function (e) {
                            t.instance = e;
                          },
                        },
                        r,
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
              n
            );
          })(i.Component);
        return (
          c(r, "contextType", K),
          c(r, "propTypes", { children: W.children }),
          c(r, "defaultProps", { children: null }),
          r
        );
      }
      w.resetWarningCache = v;
      var P = y(function (e) {
          e.exports = (function () {
            function e(e, t, r, i, n, a) {
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
              checkPropTypes: w,
              resetWarningCache: v,
            };
            return (r.PropTypes = r), r;
          })();
        }),
        N = "loading",
        I = "success",
        D = "error",
        W = {
          children: P.oneOfType([P.arrayOf(P.node), P.node]),
          direction: P.oneOf(["forward", "backward"]),
          height: function (e, t) {
            var r = e[t];
            return "vertical" !== e.orientation ||
              (null !== r && "number" == typeof r)
              ? null
              : new Error(
                  "Missing required property '".concat(
                    t,
                    "' when orientation is vertical.  You must supply a number representing the height in pixels",
                  ),
                );
          },
          orientation: P.oneOf(["horizontal", "vertical"]),
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
        x = function (e) {
          var t = e.min,
            r = e.max,
            i = e.x;
          return Math.min(r, Math.max(t, i));
        },
        A = "buttonBack___1mlaL",
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
        q = (function (e) {
          function t(e) {
            var i;
            return (
              s(this, t),
              ((i = r.call(this, e)).handleOnClick = i.handleOnClick.bind(
                b(i),
              )),
              i
            );
          }
          d(t, e);
          var r = S(t);
          return (
            o(
              t,
              [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props,
                      r = t.carouselStore,
                      i = t.currentSlide,
                      n = t.onClick,
                      a = t.step,
                      s = t.infinite,
                      l = t.visibleSlides,
                      o = t.totalSlides - l,
                      c = Math.max(i - a, 0);
                    s && (c = 0 === i ? o : c),
                      r.setStoreState(
                        { currentSlide: c, isPlaying: !1 },
                        null !== n && n.call(this, e),
                      );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      r = (e.carouselStore, e.className),
                      n =
                        (e.currentSlide,
                        e.disabled,
                        e.onClick,
                        e.step,
                        e.totalSlides,
                        e.visibleSlides,
                        e.infinite),
                      a = p(e, U),
                      s = _([A, "carousel__back-button", r]),
                      l = t.setDisabled(
                        this.props.disabled,
                        this.props.currentSlide,
                        n,
                      );
                    return i.createElement(
                      "button",
                      u(
                        {
                          type: "button",
                          "aria-label": "previous",
                          className: s,
                          onClick: this.handleOnClick,
                          disabled: l,
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
                  value: function (e, t, r) {
                    return null !== e ? e : 0 === t && !r;
                  },
                },
              ],
            ),
            t
          );
        })(i.Component);
      c(q, "propTypes", {
        carouselStore: P.object.isRequired,
        children: W.children.isRequired,
        className: P.string,
        currentSlide: P.number.isRequired,
        disabled: P.bool,
        onClick: P.func,
        step: P.number.isRequired,
        totalSlides: P.number.isRequired,
        visibleSlides: P.number.isRequired,
        infinite: P.bool,
      }),
        c(q, "defaultProps", {
          className: null,
          disabled: null,
          onClick: null,
          infinite: !1,
        });
      var X = y(function (e, t) {
          var r = {}.toString,
            i = "undefined" != typeof window ? window.Node : Function;
          e.exports = t = function (e) {
            var t = typeof e;
            if ("object" != t) return t;
            if ("object" == (t = n[r.call(e)]))
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
          var n = (t.types = {
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
        L =
          (X.types,
          {
            number: function (e, t) {
              return e != e && t != t;
            },
            function: function (e, t, r) {
              return (
                e.toString() === t.toString() &&
                L.object(e, t, r) &&
                k(e.prototype, t.prototype)
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
      (L.arguments =
        L["bit-array"] =
        L.array =
          T(function (e, t, r) {
            var i = e.length;
            if (i !== t.length) return !1;
            for (r.push([e, t]); i--; ) if (!k(e[i], t[i], r)) return !1;
            return !0;
          })),
        (L.object = T(function (e, t, r) {
          if ("function" == typeof e.equal)
            return r.push([e, t]), e.equal(t, r);
          var i = E(e),
            n = E(t),
            a = i.length;
          if (a !== n.length) return !1;
          for (i.sort(), n.sort(); a--; ) if (i[a] !== n[a]) return !1;
          for (r.push([e, t]), a = i.length; a--; ) {
            var s = i[a];
            if (!k(e[s], t[s], r)) return !1;
          }
          return !0;
        }));
      var H = k,
        V = function (e) {
          return (
            (function (e) {
              return !!e && "object" == typeof e;
            })(e) && !C(e)
          );
        },
        Y =
          "function" == typeof Symbol && Symbol.for
            ? Symbol.for("react.element")
            : 60103;
      F.all = function (e, t) {
        if (!Array.isArray(e))
          throw new Error("first argument should be an array");
        return e.reduce(function (e, r) {
          return F(e, r, t);
        }, {});
      };
      var Z,
        Q = F,
        K = i.createContext(),
        G = function e(t) {
          return (
            Object.freeze(t),
            Object.getOwnPropertyNames(t).forEach(function (r) {
              !t.hasOwnProperty(r) ||
                null === t[r] ||
                ("object" != typeof t[r] && "function" != typeof t[r]) ||
                Object.isFrozen(t[r]) ||
                e(t[r]);
            }),
            t
          );
        },
        $ = { masterSpinnerFinished: !1 },
        J = (function () {
          function e(t) {
            s(this, e),
              (this.state = G(Q($, t))),
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
            o(e, [
              {
                key: "setStoreState",
                value: function (e, t) {
                  (this.state = G(Q(this.state, e))), this.updateSubscribers(t);
                },
              },
              {
                key: "getStoreState",
                value: function () {
                  return Q({}, this.state);
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
                  (s(this, t),
                  (i = r.call(this, e)),
                  e.isIntrinsicHeight && "horizontal" !== e.orientation)
                )
                  throw Error(
                    'isIntrinsicHeight can only be used in "horizontal" orientation. See Readme for more information.',
                  );
                var n = {
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
                  slideSize: B(e.totalSlides, e.visibleSlides),
                  slideTraySize: M(e.totalSlides, e.visibleSlides),
                  step: e.step,
                  dragStep: e.dragStep,
                  totalSlides: e.totalSlides,
                  touchEnabled: e.touchEnabled,
                  dragEnabled: e.dragEnabled,
                  visibleSlides: e.visibleSlides,
                  infinite: e.infinite,
                  isIntrinsicHeight: e.isIntrinsicHeight,
                };
                return (i.carouselStore = new J(n)), i;
              }
              d(t, e);
              var r = S(t);
              return (
                o(t, [
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      var t = this,
                        r = {};
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
                        e[i] !== t.props[i] && (r[i] = t.props[i]);
                      }),
                        this.props.currentSlide !== e.currentSlide &&
                          !this.props.disableAnimation &&
                          ((r.disableAnimation = !0),
                          (r.privateUnDisableAnimation = !0)),
                        (this.props.totalSlides === e.totalSlides &&
                          this.props.visibleSlides === e.visibleSlides) ||
                          ((r.slideSize = B(
                            this.props.totalSlides,
                            this.props.visibleSlides,
                          )),
                          (r.slideTraySize = M(
                            this.props.totalSlides,
                            this.props.visibleSlides,
                          ))),
                        this.carouselStore.state.currentSlide >=
                          this.props.totalSlides &&
                          (r.currentSlide = Math.max(
                            this.props.totalSlides - 1,
                            0,
                          )),
                        Object.keys(r).length > 0 &&
                          this.carouselStore.setStoreState(r);
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
                        r =
                          (e.totalSlides,
                          e.touchEnabled,
                          e.dragEnabled,
                          e.visibleSlides,
                          e.infinite,
                          e.isIntrinsicHeight,
                          p(e, ee)),
                        n = _(["carousel", this.props.className]);
                      return i.createElement(
                        t,
                        u({ className: n }, r),
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
              children: W.children.isRequired,
              className: P.string,
              currentSlide: P.number,
              disableAnimation: P.bool,
              disableKeyboard: P.bool,
              hasMasterSpinner: P.bool,
              interval: P.number,
              isPageScrollLocked: P.bool,
              isPlaying: P.bool,
              lockOnWindowScroll: P.bool,
              naturalSlideHeight: P.number.isRequired,
              naturalSlideWidth: P.number.isRequired,
              orientation: W.orientation,
              playDirection: W.direction,
              step: P.number,
              dragStep: P.number,
              tag: P.string,
              totalSlides: P.number.isRequired,
              touchEnabled: P.bool,
              dragEnabled: P.bool,
              visibleSlides: P.number,
              infinite: P.bool,
              isIntrinsicHeight: P.bool,
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
      var re,
        ie,
        ne,
        ae,
        se,
        le,
        oe = j(q, function (e) {
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
          ((re = (function (e) {
            function t() {
              var e;
              return (
                s(this, t),
                ((e = r.call(this)).handleOnClick = e.handleOnClick.bind(b(e))),
                e
              );
            }
            d(t, e);
            var r = S(t);
            return (
              o(t, [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props,
                      r = t.carouselStore,
                      i = t.onClick;
                    r.setStoreState(
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
                      r = e.currentSlide,
                      n = e.disabled,
                      a = (e.onClick, e.totalSlides, p(e, ue)),
                      s = _([ce, "carousel__first-button", t]),
                      l = null !== n ? n : 0 === r;
                    return i.createElement(
                      "button",
                      u(
                        {
                          type: "button",
                          "aria-label": "first",
                          className: s,
                          onClick: this.handleOnClick,
                          disabled: l,
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
            carouselStore: P.object.isRequired,
            children: W.children.isRequired,
            className: P.string,
            currentSlide: P.number.isRequired,
            disabled: P.bool,
            onClick: P.func,
            totalSlides: P.number.isRequired,
          }),
          c(re, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          re),
        he =
          (j(de, function (e) {
            return { currentSlide: e.currentSlide, totalSlides: e.totalSlides };
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
        pe =
          ((ie = (function (e) {
            function t(e) {
              var i;
              return (
                s(this, t),
                ((i = r.call(this, e)).handleOnClick = i.handleOnClick.bind(
                  b(i),
                )),
                i
              );
            }
            d(t, e);
            var r = S(t);
            return (
              o(
                t,
                [
                  {
                    key: "handleOnClick",
                    value: function (e) {
                      var t = this.props,
                        r = t.currentSlide,
                        i = t.onClick,
                        n = t.step,
                        a = t.carouselStore,
                        s = t.infinite,
                        l = t.totalSlides - t.visibleSlides,
                        o = n + r,
                        c = Math.min(o, l);
                      s && (c = l === r ? 0 : c),
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
                        r = (e.carouselStore, e.className),
                        n = e.currentSlide,
                        a = e.disabled,
                        s = (e.onClick, e.step, e.totalSlides),
                        l = e.visibleSlides,
                        o = e.infinite,
                        c = p(e, me),
                        d = _([he, "carousel__next-button", r]),
                        h = t.setDisabled(a, n, l, s, o);
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
                    value: function (e, t, r, i, n) {
                      return null !== e ? e : t >= i - r && !n;
                    },
                  },
                ],
              ),
              t
            );
          })(i.PureComponent)),
          c(ie, "propTypes", {
            carouselStore: P.object.isRequired,
            children: W.children.isRequired,
            className: P.string,
            currentSlide: P.number.isRequired,
            disabled: P.bool,
            onClick: P.func,
            step: P.number.isRequired,
            totalSlides: P.number.isRequired,
            visibleSlides: P.number.isRequired,
            infinite: P.bool,
          }),
          c(ie, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
            infinite: !1,
          }),
          ie),
        be = j(pe, function (e) {
          return {
            currentSlide: e.currentSlide,
            step: e.step,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
            infinite: e.infinite,
          };
        }),
        Se = "buttonLast___2yuh0",
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
          ((ne = (function (e) {
            function t() {
              var e;
              return (
                s(this, t),
                ((e = r.call(this)).handleOnClick = e.handleOnClick.bind(b(e))),
                e
              );
            }
            d(t, e);
            var r = S(t);
            return (
              o(t, [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props,
                      r = t.carouselStore,
                      i = t.onClick,
                      n = t.totalSlides,
                      a = t.visibleSlides;
                    r.setStoreState(
                      { currentSlide: n - a, isPlaying: !1 },
                      null !== i && i.call(this, e),
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = (e.carouselStore, e.className),
                      r = e.currentSlide,
                      n = e.disabled,
                      a = (e.onClick, e.totalSlides),
                      s = e.visibleSlides,
                      l = p(e, fe),
                      o = _([Se, "carousel__last-button", t]),
                      c = null !== n ? n : r >= a - s;
                    return i.createElement(
                      "button",
                      u(
                        {
                          type: "button",
                          "aria-label": "last",
                          className: o,
                          onClick: this.handleOnClick,
                          disabled: c,
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
          c(ne, "propTypes", {
            carouselStore: P.object.isRequired,
            children: W.children.isRequired,
            className: P.string,
            currentSlide: P.number.isRequired,
            disabled: P.bool,
            onClick: P.func,
            totalSlides: P.number.isRequired,
            visibleSlides: P.number.isRequired,
          }),
          c(ne, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          ne),
        ye =
          (j(ge, function (e) {
            return {
              currentSlide: e.currentSlide,
              totalSlides: e.totalSlides,
              visibleSlides: e.visibleSlides,
            };
          }),
          "buttonNext___3Lm3s"),
        ve = [
          "carouselStore",
          "children",
          "childrenPaused",
          "childrenPlaying",
          "className",
          "isPlaying",
          "onClick",
        ],
        we =
          ((ae = (function (e) {
            function t(e) {
              var i;
              return (
                s(this, t),
                ((i = r.call(this, e)).handleOnClick = i.handleOnClick.bind(
                  b(i),
                )),
                i
              );
            }
            d(t, e);
            var r = S(t);
            return (
              o(t, [
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
                      r = e.childrenPlaying,
                      n = e.className,
                      a = e.isPlaying,
                      s = (e.onClick, p(e, ve)),
                      l = _([ye, "carousel__play-button", n]);
                    return i.createElement(
                      "button",
                      u(
                        {
                          type: "button",
                          "aria-label": "play",
                          className: l,
                          onClick: this.handleOnClick,
                        },
                        s,
                      ),
                      a && r,
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
            carouselStore: P.object.isRequired,
            children: P.node,
            childrenPaused: P.node,
            childrenPlaying: P.node,
            className: P.string,
            isPlaying: P.bool.isRequired,
            onClick: P.func,
          }),
          c(ae, "defaultProps", {
            children: null,
            childrenPaused: null,
            childrenPlaying: null,
            className: null,
            onClick: null,
          }),
          ae),
        _e =
          (j(we, function (e) {
            return { isPlaying: e.isPlaying };
          }),
          { dot: "dot___3c3SI" }),
        Be = [
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
        Me =
          ((se = (function (e) {
            function t(e) {
              var i;
              return (
                s(this, t),
                ((i = r.call(this, e)).handleOnClick = i.handleOnClick.bind(
                  b(i),
                )),
                i
              );
            }
            d(t, e);
            var r = S(t);
            return (
              o(t, [
                {
                  key: "handleOnClick",
                  value: function (e) {
                    var t = this.props,
                      r = t.carouselStore,
                      i = t.onClick,
                      n = t.slide,
                      a = t.totalSlides,
                      s = t.visibleSlides,
                      l = n >= a - s ? a - s : n;
                    r.setStoreState(
                      { currentSlide: l, isPlaying: !1 },
                      null !== i && i.call(this, e),
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = (e.carouselStore, e.children, e.className),
                      r = e.currentSlide,
                      n = e.disabled,
                      a = (e.onClick, e.selected),
                      s = e.slide,
                      l = (e.totalSlides, e.visibleSlides),
                      o = p(e, Be),
                      c = s >= r && s < r + l,
                      d = "boolean" == typeof a ? a : c,
                      h = "boolean" == typeof n ? n : !0 === c,
                      m = _([
                        _e.dot,
                        d && _e.dotSelected,
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
                          className: m,
                          disabled: h,
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
          c(se, "propTypes", {
            carouselStore: P.object.isRequired,
            children: W.children,
            className: P.string,
            currentSlide: P.number.isRequired,
            disabled: P.bool,
            onClick: P.func,
            selected: P.bool,
            slide: P.number.isRequired,
            totalSlides: P.number.isRequired,
            visibleSlides: P.number.isRequired,
          }),
          c(se, "defaultProps", {
            children: null,
            className: null,
            disabled: null,
            onClick: null,
            selected: null,
          }),
          se),
        Oe = j(Me, function (e) {
          return {
            currentSlide: e.currentSlide,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
          };
        }),
        ke = {},
        Te = ["renderDots"],
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
        Ce =
          ((le = (function (e) {
            function t() {
              return s(this, t), r.apply(this, arguments);
            }
            d(t, e);
            var r = S(t);
            return (
              o(t, [
                {
                  key: "renderDots",
                  value: function () {
                    var e = this.props,
                      t = e.currentSlide,
                      r = e.totalSlides,
                      n = e.visibleSlides,
                      a = e.disableActiveDots,
                      s = e.showAsSelectedForCurrentSlideOnly,
                      l = e.renderDots;
                    if (l) {
                      var o = this.props;
                      return o.renderDots, l(p(o, Te));
                    }
                    for (var c = [], u = 0; u < r; u += 1) {
                      var d = s ? u === t : u >= t && u < t + n,
                        h = u >= r - n ? r - n : u;
                      c.push(
                        i.createElement(
                          Oe,
                          { key: u, slide: h, selected: d, disabled: !!a && d },
                          i.createElement(
                            "span",
                            { className: _["carousel__dot-group-dot"] },
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
                      r = e.className,
                      n =
                        (e.currentSlide,
                        e.dotNumbers,
                        e.totalSlides,
                        e.visibleSlides,
                        e.disableActiveDots,
                        e.showAsSelectedForCurrentSlideOnly,
                        e.renderDots,
                        p(e, Ee)),
                      a = _([ke.DotGroup, "carousel__dot-group", r]);
                    return i.createElement(
                      "div",
                      u({ className: a }, n),
                      this.renderDots(),
                      t,
                    );
                  },
                },
              ]),
              t
            );
          })(i.Component)),
          c(le, "propTypes", {
            children: W.children,
            className: P.string,
            currentSlide: P.number.isRequired,
            carouselStore: P.object.isRequired,
            totalSlides: P.number.isRequired,
            visibleSlides: P.number.isRequired,
            dotNumbers: P.bool,
            disableActiveDots: P.bool,
            showAsSelectedForCurrentSlideOnly: P.bool,
            renderDots: P.func,
          }),
          c(le, "defaultProps", {
            children: null,
            className: null,
            dotNumbers: !1,
            disableActiveDots: !0,
            showAsSelectedForCurrentSlideOnly: !1,
            renderDots: null,
          }),
          le),
        Re =
          (j(Ce, function (e) {
            return {
              currentSlide: e.currentSlide,
              totalSlides: e.totalSlides,
              visibleSlides: e.visibleSlides,
            };
          }),
          { image: "image___xtQGH" }),
        ze = ["src", "alt"],
        Fe = [
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
              s(this, t),
              ((i = r.call(this, e)).state = { imageStatus: N }),
              (i.handleImageLoad = i.handleImageLoad.bind(b(i))),
              (i.handleImageError = i.handleImageError.bind(b(i))),
              (i.image = null),
              i
            );
          }
          d(t, e);
          var r = S(t);
          return (
            o(
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
                      (this.setState({ imageStatus: N }),
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
                    this.setState({ imageStatus: D }),
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
                      r = _([
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
                      u({ className: r }, e),
                      this.customRender("renderLoading"),
                    );
                  },
                },
                {
                  key: "renderError",
                  value: function (e) {
                    var t = this.tempTag(),
                      r = _([
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
                      u({ className: r }, e),
                      this.customRender("renderError"),
                    );
                  },
                },
                {
                  key: "renderSuccess",
                  value: function (e) {
                    var t = this.props,
                      r = t.style,
                      n = t.tag,
                      a = _([
                        Re.image,
                        "carousel__image",
                        this.props.isBgImage &&
                          "carousel__image--with-background",
                        "carousel__image--success",
                        this.props.className,
                      ]),
                      s = u({}, r),
                      l = e;
                    if ("img" !== n) {
                      var o = e.src;
                      e.alt,
                        (l = p(e, ze)),
                        (s = u({}, r, {
                          backgroundImage: 'url("'.concat(o, '")'),
                          backgroundSize: "cover",
                        }));
                    }
                    return i.createElement(
                      n,
                      u({ className: a, style: s }, l),
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
                        p(e, Fe));
                    switch (this.state.imageStatus) {
                      case N:
                        return this.renderLoading(t);
                      case I:
                        return this.renderSuccess(t);
                      case D:
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
        alt: P.string,
        carouselStore: P.object.isRequired,
        children: W.children,
        className: P.string,
        hasMasterSpinner: P.bool.isRequired,
        isBgImage: W.isBgImage,
        onError: P.func,
        onLoad: P.func,
        renderError: P.func,
        renderLoading: P.func,
        src: P.string.isRequired,
        style: P.object,
        tag: P.string,
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
      var Pe,
        Ne,
        Ie,
        De,
        We = j(je, function (e) {
          return {
            hasMasterSpinner: e.hasMasterSpinner,
            orientation: e.orientation,
          };
        }),
        xe = "spinner___27VUp",
        Ae = ["className"],
        Ue =
          (c(
            (Pe = (function (e) {
              function t() {
                return s(this, t), r.apply(this, arguments);
              }
              d(t, e);
              var r = S(t);
              return (
                o(t, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        r = p(e, Ae),
                        n = _([xe, "carousel__spinner", t]);
                      return i.createElement("div", u({ className: n }, r));
                    },
                  },
                ]),
                t
              );
            })(i.PureComponent)),
            "propTypes",
            { className: P.string },
          ),
          c(Pe, "defaultProps", { className: null }),
          Pe),
        qe = {
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
        Le =
          ((Ne = (function (e) {
            function t(e) {
              var i;
              return (
                s(this, t),
                ((i = r.call(this, e)).state = {
                  isImageLoading: !0,
                  isHovering: !1,
                  isZooming: !1,
                  x: null,
                  y: null,
                  scale: 1,
                }),
                (i.tpCache = {}),
                (i.handleImageComplete = i.handleImageComplete.bind(b(i))),
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
            var r = S(t);
            return (
              o(
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
                        var t = O(
                            (e.nativeEvent.offsetX / e.target.offsetWidth) *
                              100,
                          ),
                          r = O(
                            (e.nativeEvent.offsetY / e.target.offsetHeight) *
                              100,
                          );
                        this.setState({ x: t, y: r });
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
                      var r = this;
                      if (this.state.isZooming) {
                        e.persist();
                        var i = f(e.targetTouches)
                          .filter(function (e) {
                            return r.tpCache[e.identifier];
                          })
                          .slice(0, 2);
                        if (2 === i.length) {
                          e.stopPropagation();
                          var n = e.target.getBoundingClientRect(),
                            s = i[0].identifier,
                            l = i[1].identifier,
                            o = {
                              x1: this.tpCache[s].clientX,
                              y1: this.tpCache[s].clientY,
                              x2: this.tpCache[l].clientX,
                              y2: this.tpCache[l].clientY,
                            };
                          o.distance = t.distanceBetweenTwoTouches(a({}, o));
                          var c = t.midpointBetweenTwoTouches(a({}, o));
                          (o.cx = c.x), (o.cy = c.y);
                          var u = {
                            x1: i[0].clientX,
                            y1: i[0].clientY,
                            x2: i[1].clientX,
                            y2: i[1].clientY,
                          };
                          u.distance = t.distanceBetweenTwoTouches(a({}, u));
                          var d = t.midpointBetweenTwoTouches(a({}, u));
                          (u.cx = d.x), (u.cy = d.y);
                          var h = O(
                              x({
                                min: 0,
                                max: 100,
                                x: ((u.cx - n.left) / n.width) * 100,
                              }),
                            ),
                            m = O(
                              x({
                                min: 0,
                                max: 100,
                                x: ((u.cy - n.top) / n.height) * 100,
                              }),
                            ),
                            p = function (e) {
                              return x({
                                min: 1,
                                max: 3,
                                x: e.scale + (u.distance - o.distance) / 100,
                              });
                            };
                          this.setState(function (e) {
                            return {
                              isZooming: 1 !== p(e),
                              scale: p(e),
                              x: h,
                              y: m,
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
                            className: _([
                              qe.imageLoadingSpinnerContainer,
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
                        r = e.bgImageProps,
                        n = e.bgImageTag,
                        a = (e.carouselStore, e.className),
                        s = e.imageClassName,
                        l = e.overlayClassName,
                        o = (e.isPinchZoomEnabled, e.spinner, e.src),
                        c = e.srcZoomed,
                        d = e.tag,
                        h = p(e, Xe),
                        m = _([qe.container, a]),
                        b = _([qe.image, "carousel__zoom-image", s]),
                        S = _([
                          qe.overlay,
                          "carousel__zoom-image-overlay",
                          this.state.isHovering && qe.hover,
                          this.state.isZooming && qe.zoom,
                          this.state.isHovering &&
                            "carousel__zoom-image-overlay--hovering",
                          this.state.isZooming &&
                            "carousel__zoom-image-overlay--zooming",
                          l,
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
                          u({ className: m }, h),
                          i.createElement(
                            We,
                            u(
                              {
                                alt: t,
                                className: b,
                                tag: n,
                                src: o,
                                onLoad: this.handleImageComplete,
                                onError: this.handleImageComplete,
                              },
                              r,
                            ),
                          ),
                          i.createElement(We, {
                            className: S,
                            tag: "div",
                            src: c || o,
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
                        r = e.y1;
                      return { x: (t + e.x2) / 2, y: (r + e.y2) / 2 };
                    },
                  },
                  {
                    key: "distanceBetweenTwoTouches",
                    value: function (e) {
                      var t = e.x1,
                        r = e.y1,
                        i = e.x2,
                        n = e.y2;
                      return Math.sqrt(Math.pow(i - t, 2) + Math.pow(n - r, 2));
                    },
                  },
                ],
              ),
              t
            );
          })(i.Component)),
          c(Ne, "propTypes", {
            alt: P.string,
            bgImageProps: P.object,
            bgImageTag: P.string,
            carouselStore: P.object.isRequired,
            className: P.string,
            imageClassName: P.string,
            overlayClassName: P.string,
            spinner: P.func,
            src: P.string.isRequired,
            srcZoomed: P.string,
            tag: P.string,
            isPinchZoomEnabled: P.bool,
          }),
          c(Ne, "defaultProps", {
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
          Ne),
        He =
          (j(Le, function () {
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
        Ye =
          ((Ie = (function (e) {
            function t(e) {
              var i;
              return (
                s(this, t),
                ((i = r.call(this, e)).handleOnFocus = i.handleOnFocus.bind(
                  b(i),
                )),
                (i.handleOnBlur = i.handleOnBlur.bind(b(i))),
                (i.state = { focused: !1 }),
                i
              );
            }
            d(t, e);
            var r = S(t);
            return (
              o(t, [
                {
                  key: "isVisible",
                  value: function () {
                    var e = this.props,
                      t = e.currentSlide,
                      r = e.index,
                      i = e.visibleSlides;
                    return r >= t && r < t + i;
                  },
                },
                {
                  key: "handleOnFocus",
                  value: function (e) {
                    var t = this,
                      r = this.props.onFocus;
                    this.setState({ focused: !0 }, function () {
                      null !== r && r.call(t, e);
                    });
                  },
                },
                {
                  key: "handleOnBlur",
                  value: function (e) {
                    var t = this,
                      r = this.props.onBlur;
                    this.setState({ focused: !1 }, function () {
                      null !== r && r.call(t, e);
                    });
                  },
                },
                {
                  key: "renderFocusRing",
                  value: function () {
                    return this.state.focused
                      ? i.createElement("div", {
                          className: [
                            He.focusRing,
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
                      r = t.ariaLabel,
                      n = (t.carouselStore, t.children, t.className),
                      a = t.classNameHidden,
                      s = t.classNameVisible,
                      l = (t.currentSlide, t.index, t.innerClassName),
                      o = t.innerTag,
                      c = t.naturalSlideHeight,
                      d = t.naturalSlideWidth,
                      h = (t.onBlur, t.onFocus, t.orientation),
                      m = t.slideSize,
                      b = t.style,
                      S = t.tabIndex,
                      f = t.tag,
                      g = t.totalSlides,
                      y = (t.visibleSlides, t.isIntrinsicHeight),
                      v = p(t, Ve),
                      w = {};
                    "horizontal" === h
                      ? ((w.width = O(m)),
                        (w.paddingBottom = O((100 * c) / (d * g))))
                      : ((w.width = O(100)),
                        (w.paddingBottom = O((100 * c) / d)));
                    var B = {};
                    y &&
                      ("horizontal" === h
                        ? (w.height = "unset")
                        : (w.width = "unset"),
                      (w.paddingBottom = "unset"),
                      (B.position = "unset"));
                    var M = u({}, w, b),
                      k = this.isVisible(),
                      T = _([
                        He.slide,
                        "horizontal" === h && He.slideHorizontal,
                        "carousel__slide",
                        this.state.focused && "carousel__slide--focused",
                        k && s,
                        k && "carousel__slide--visible",
                        !k && a,
                        !k && "carousel__slide--hidden",
                        n,
                      ]),
                      E = _([He.slideInner, "carousel__inner-slide", l]),
                      C = this.isVisible() ? 0 : -1,
                      R = "number" == typeof S ? S : C;
                    return i.createElement(
                      f,
                      u(
                        {
                          ref: function (t) {
                            e.tagRef = t;
                          },
                          tabIndex: R,
                          "aria-selected": this.isVisible(),
                          "aria-label": r,
                          role: "option",
                          onFocus: this.handleOnFocus,
                          onBlur: this.handleOnBlur,
                          className: T,
                          style: M,
                        },
                        v,
                      ),
                      i.createElement(
                        o,
                        {
                          ref: function (t) {
                            e.innerTagRef = t;
                          },
                          className: E,
                          style: B,
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
            ariaLabel: P.string,
            carouselStore: P.object,
            children: W.children,
            className: P.string,
            classNameHidden: P.string,
            classNameVisible: P.string,
            currentSlide: P.number.isRequired,
            index: P.number.isRequired,
            innerClassName: P.string,
            innerTag: P.string,
            naturalSlideHeight: P.number.isRequired,
            naturalSlideWidth: P.number.isRequired,
            onBlur: P.func,
            onFocus: P.func,
            orientation: W.orientation.isRequired,
            slideSize: P.number.isRequired,
            style: P.object,
            tabIndex: P.number,
            tag: P.string,
            totalSlides: P.number.isRequired,
            visibleSlides: P.number.isRequired,
            isIntrinsicHeight: P.bool,
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
        Ze = j(Ye, function (e) {
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
        Qe = (function () {
          function e() {
            s(this, e);
          }
          return (
            o(
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
                      var r = this.parents(t.parentNode, []), i = 0;
                      i < r.length;
                      i += 1
                    )
                      if (e.scroll(r[i])) return r[i];
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
        Ge = [
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
          ((De = (function (e) {
            function t(e) {
              var i;
              return (
                s(this, t),
                ((i = r.call(this, e)).getSliderRef = i.getSliderRef.bind(
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
            var r = S(t);
            return (
              o(
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
                        r = e.screenY,
                        i = e.touchDrag,
                        n = void 0 !== i && i,
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
                          isBeingTouchDragged: n,
                          isBeingMouseDragged: s,
                          startX: t,
                          startY: r,
                        });
                    },
                  },
                  {
                    key: "fakeOnDragMove",
                    value: function (e, t) {
                      var r = this;
                      this.moveTimer = window.requestAnimationFrame.call(
                        window,
                        function () {
                          r.setState(function (i) {
                            return {
                              deltaX: e - i.startX,
                              deltaY: t - i.startY,
                              preventingVerticalScroll:
                                Math.abs(t - i.startY) <=
                                  r.props.verticalPixelThreshold &&
                                Math.abs(e - i.startX) >=
                                  r.props.horizontalPixelThreshold,
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
                      var r = this.props.trayProps;
                      r && "function" == typeof r[e] && (t.persist(), r[e](t));
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
                        r = e.step,
                        i = e.totalSlides,
                        n = e.visibleSlides;
                      return Math.min(t + r, i - n);
                    },
                  },
                  {
                    key: "backward",
                    value: function () {
                      var e = this.props,
                        t = e.currentSlide,
                        r = e.step;
                      return Math.max(t - r, 0);
                    },
                  },
                  {
                    key: "handleOnKeyDown",
                    value: function (e) {
                      var t = e.keyCode,
                        r = this.props,
                        i = r.carouselStore,
                        n = r.currentSlide,
                        a = r.disableKeyboard,
                        s = r.totalSlides,
                        l = r.visibleSlides,
                        o = {};
                      !0 === a ||
                        s <= l ||
                        (37 === t &&
                          (e.preventDefault(),
                          this.focus(),
                          (o.currentSlide = Math.max(0, n - 1)),
                          (o.isPlaying = !1)),
                        39 === t &&
                          (e.preventDefault(),
                          this.focus(),
                          (o.currentSlide = Math.min(s - l, n + 1)),
                          (o.isPlaying = !1)),
                        i.setStoreState(o));
                    },
                  },
                  {
                    key: "playForward",
                    value: function () {
                      var e = this.props,
                        t = e.carouselStore,
                        r = e.currentSlide;
                      t.setStoreState({
                        currentSlide: this.forward() === r ? 0 : this.forward(),
                      });
                    },
                  },
                  {
                    key: "playBackward",
                    value: function () {
                      var e = this.props,
                        t = e.carouselStore,
                        r = e.currentSlide,
                        i = e.totalSlides,
                        n = e.visibleSlides;
                      t.setStoreState({
                        currentSlide:
                          this.backward() === r ? i - n : this.backward(),
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
                      var e = new Qe();
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
                        r = t.slidesMoved(
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
                        n = x({
                          min: 0,
                          max: i,
                          x: this.props.currentSlide + r,
                        });
                      this.props.infinite &&
                        (this.props.currentSlide >= i && r > 0 && (n = 0),
                        0 === this.props.currentSlide && r < 0 && (n = i)),
                        this.props.carouselStore.setStoreState({
                          currentSlide: n,
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
                        r = e.masterSpinnerFinished,
                        n = e.spinner;
                      return t && !r
                        ? ("function" == typeof this.props.onMasterSpinner &&
                            this.props.onMasterSpinner(),
                          i.createElement(
                            "div",
                            {
                              className: _([
                                Ke.masterSpinnerContainer,
                                "carousel__master-spinner-container",
                              ]),
                            },
                            n && n(),
                            !n && i.createElement(Ue, null),
                          ))
                        : null;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props,
                        r = t.ariaLabel,
                        n = (t.carouselStore, t.children),
                        a = t.className,
                        s = t.classNameAnimation,
                        l = t.classNameTray,
                        o = t.classNameTrayWrap,
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
                        m = t.naturalSlideWidth,
                        b = (t.onMasterSpinner, t.orientation),
                        S =
                          (t.playDirection,
                          t.privateUnDisableAnimation,
                          t.slideSize),
                        f = t.slideTraySize,
                        g = (t.spinner, t.style),
                        y = t.tabIndex,
                        v = (t.totalSlides, t.touchEnabled, t.trayProps),
                        w = t.trayTag,
                        B = t.visibleSlides,
                        M = t.isIntrinsicHeight,
                        k = p(t, Ge),
                        T = u({}, g),
                        E = {};
                      "vertical" === b &&
                        ((E.height = 0),
                        (E.paddingBottom = O((100 * h * B) / m)),
                        (E.width = O(100)));
                      var C = {},
                        R = O(S * c * -1);
                      (this.state.isBeingTouchDragged ||
                        this.state.isBeingMouseDragged ||
                        d) &&
                        (C.transition = "none"),
                        M && ((C.display = "flex"), (C.alignItems = "stretch")),
                        "vertical" === b
                          ? ((C.transform = "translateY("
                              .concat(R, ") translateY(")
                              .concat(this.state.deltaY, "px)")),
                            (C.width = O(100)),
                            (C.flexDirection = "column"))
                          : ((C.width = O(f)),
                            (C.transform = "translateX("
                              .concat(R, ") translateX(")
                              .concat(this.state.deltaX, "px)")),
                            (C.flexDirection = "row"));
                      var z = _([
                          "vertical" === b
                            ? Ke.verticalSlider
                            : Ke.horizontalSlider,
                          "carousel__slider",
                          "vertical" === b
                            ? "carousel__slider--vertical"
                            : "carousel__slider--horizontal",
                          a,
                        ]),
                        F = _([
                          Ke.sliderTrayWrap,
                          "carousel__slider-tray-wrapper",
                          "vertical" === b
                            ? Ke.verticalSlideTrayWrap
                            : Ke.horizontalTrayWrap,
                          "vertical" === b
                            ? "carousel__slider-tray-wrap--vertical"
                            : "carousel__slider-tray-wrap--horizontal",
                          o,
                        ]),
                        j = _([
                          Ke.sliderTray,
                          s || Ke.sliderAnimation,
                          "carousel__slider-tray",
                          "vertical" === b
                            ? Ke.verticalTray
                            : Ke.horizontalTray,
                          "vertical" === b
                            ? "carousel__slider-tray--vertical"
                            : "carousel__slider-tray--horizontal",
                          l,
                        ]),
                        P = null !== y ? y : 0,
                        N =
                          (k.dragStep,
                          k.step,
                          k.infinite,
                          k.preventVerticalScrollOnTouch,
                          k.preventingVerticalScroll,
                          k.horizontalPixelThreshold,
                          k.verticalPixelThreshold,
                          p(k, $e)),
                        I =
                          (v.className,
                          v.onClickCapture,
                          v.onMouseDown,
                          v.onTouchCancel,
                          v.onTouchEnd,
                          v.onTouchMove,
                          v.onTouchStart,
                          v.ref,
                          v.style,
                          p(v, Je));
                      return i.createElement(
                        "div",
                        u(
                          {
                            ref: function (t) {
                              e.sliderElement = t;
                            },
                            className: z,
                            "aria-live": "polite",
                            "aria-label": r,
                            style: T,
                            tabIndex: P,
                            onKeyDown: this.handleOnKeyDown,
                            role: "listbox",
                          },
                          N,
                        ),
                        i.createElement(
                          "div",
                          { className: F, style: E },
                          i.createElement(
                            w,
                            u(
                              {
                                ref: this.getSliderRef,
                                className: j,
                                style: C,
                                onTouchStart: this.handleOnTouchStart,
                                onTouchMove: this.handleOnTouchMove,
                                onTouchEnd: this.handleOnTouchEnd,
                                onTouchCancel: this.handleOnTouchCancel,
                                onMouseDown: this.handleOnMouseDown,
                                onClickCapture: this.handleOnClickCapture,
                              },
                              I,
                            ),
                            n,
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
                    value: function (e, t, r, i) {
                      return ("horizontal" === e ? t : r) / i;
                    },
                  },
                  {
                    key: "slidesMoved",
                    value: function (e, t, r, i, n, a) {
                      var s = "horizontal" === t ? r : i,
                        l = Math.abs(Math.round(s / n)),
                        o = Math.abs(s) >= n * e ? a : 0,
                        c = Math.max(o, l);
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
          c(De, "propTypes", {
            ariaLabel: P.string,
            carouselStore: P.object.isRequired,
            children: P.node.isRequired,
            className: P.string,
            classNameAnimation: P.string,
            classNameTray: P.string,
            classNameTrayWrap: P.string,
            currentSlide: P.number.isRequired,
            disableAnimation: P.bool,
            disableKeyboard: P.bool,
            dragEnabled: P.bool.isRequired,
            dragStep: P.number,
            hasMasterSpinner: P.bool.isRequired,
            infinite: P.bool,
            interval: P.number.isRequired,
            isPageScrollLocked: P.bool.isRequired,
            isPlaying: P.bool.isRequired,
            lockOnWindowScroll: P.bool.isRequired,
            preventVerticalScrollOnTouch: P.bool,
            horizontalPixelThreshold: P.number,
            verticalPixelThreshold: P.number,
            masterSpinnerFinished: P.bool.isRequired,
            moveThreshold: P.number,
            naturalSlideHeight: P.number.isRequired,
            naturalSlideWidth: P.number.isRequired,
            onMasterSpinner: P.func,
            orientation: W.orientation.isRequired,
            playDirection: W.direction.isRequired,
            privateUnDisableAnimation: P.bool,
            slideSize: P.number.isRequired,
            slideTraySize: P.number.isRequired,
            spinner: P.func,
            step: P.number.isRequired,
            style: P.object,
            tabIndex: P.number,
            totalSlides: P.number.isRequired,
            touchEnabled: P.bool.isRequired,
            trayProps: P.shape({
              className: P.string,
              onClickCapture: P.func,
              onMouseDown: P.func,
              onTouchCancel: P.func,
              onTouchEnd: P.func,
              onTouchMove: P.func,
              onTouchStart: P.func,
              ref: P.shape({}),
              style: P.string,
            }),
            trayTag: P.string,
            visibleSlides: P.number,
            isIntrinsicHeight: P.bool,
          }),
          c(De, "defaultProps", {
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
          De),
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
    13557: (e, t, r) => {
      r.d(t, {
        BR: () => g,
        GZ: () => S,
        Ts: () => B,
        o0: () => c,
        vS: () => w,
        yg: () => p,
      });
      var i = r(10059),
        n = r(39087),
        a = r(79545);
      const s = i.Message;
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.communityitemid || n.aR(l.M()),
            s.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  item_type: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appid: { n: 3, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  owner: { n: 4, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  attributes: { n: 5, c: o, r: !0, q: !0 },
                  used: { n: 6, br: n.FE.readBool, bw: n.Xc.writeBool },
                  owner_origin: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  amount: {
                    n: 8,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
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
          return "CQuest_CommunityItem";
        }
      }
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.attributeid || n.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  attributeid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  value: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_CommunityItem_Attribute";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.filter_appids || n.aR(c.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  filter_appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
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
          return "CQuest_GetCommunityInventory_Request";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.items || n.aR(u.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: { items: { n: 1, c: l, r: !0, q: !0 } },
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
          return "CQuest_GetCommunityInventory_Response";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.appid || n.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  item_type: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  language: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  broadcast_channel_id: {
                    n: 5,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  keyvalues_as_json: {
                    n: 6,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
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
          return "CQuest_GetCommunityItemDefinitions_Request";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.item_definitions || n.aR(h.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { item_definitions: { n: 1, c: m, r: !0, q: !0 } },
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
          return "CQuest_GetCommunityItemDefinitions_Response";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.item_type || n.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  item_type: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  item_name: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_title: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_description: {
                    n: 5,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_image_small: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_image_large: {
                    n: 7,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_key_values: {
                    n: 8,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_series: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  item_class: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  editor_accountid: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  active: { n: 12, br: n.FE.readBool, bw: n.Xc.writeBool },
                  item_image_composed: {
                    n: 13,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_image_composed_foil: {
                    n: 14,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  deleted: { n: 15, br: n.FE.readBool, bw: n.Xc.writeBool },
                  item_last_changed: {
                    n: 16,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  broadcast_channel_id: {
                    n: 17,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  item_movie_webm: {
                    n: 18,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_movie_mp4: {
                    n: 19,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_movie_webm_small: {
                    n: 20,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_movie_mp4_small: {
                    n: 21,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_internal_name: {
                    n: 22,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
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
          return "CQuest_GetCommunityItemDefinitions_Response_ItemDefinition";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.appid || n.aR(p.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  communityitemid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  activate: { n: 3, br: n.FE.readBool, bw: n.Xc.writeBool },
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
          return "CQuest_ActivateProfileModifierItem_Request";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
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
          return "CQuest_ActivateProfileModifierItem_Response";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.timestamp_start || n.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  timestamp_start: {
                    n: 1,
                    d: 0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  timestamp_end: {
                    n: 2,
                    d: 4294967295,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
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
          return "CQuest_GetNumTradingCardsEarned_Request";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.num_trading_cards || n.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  num_trading_cards: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
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
          return "CQuest_GetNumTradingCardsEarned_Response";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.eventid || n.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  eventid: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  include_inactive: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
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
          return "CQuest_VirtualItemRewardDefinition_Request";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.eventid || n.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  eventid: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  item_bucket: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appid: { n: 3, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  active: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                  rarity: { n: 5, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  package_to_grant: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  game_item_id: {
                    n: 7,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  community_item_class: {
                    n: 8,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  community_item_type: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  loyalty_point_type: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  amount: {
                    n: 11,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  rtime_time_active: {
                    n: 12,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  loyalty_reward_defid: {
                    n: 13,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  user_badge_to_grant: {
                    n: 14,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  user_badge_level: {
                    n: 15,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  virtual_item_def_id: {
                    n: 16,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
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
          return "CVirtualItemRewardDefinition";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.rewards || n.aR(v.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: { rewards: { n: 1, c: y, r: !0, q: !0 } },
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
          return "CQuest_VirtualItemRewardDefinition_Response";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.eventid || n.aR(w.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  eventid: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  itemsdefs: { n: 2, c: y, r: !0, q: !0 },
                  action: { n: 3, br: n.FE.readEnum, bw: n.Xc.writeEnum },
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
          return "CQuest_SetVirtualItemRewardDefinition_Request";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new _();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_SetVirtualItemRewardDefinition_Response";
        }
      }
      var B;
      !(function (e) {
        (e.GetCommunityInventory = function (e, t) {
          return e.SendMsg(
            "Quest.GetCommunityInventory#1",
            (0, a.MD)(c, t),
            u,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetCommunityItemDefinitions = function (e, t) {
            return e.SendMsg(
              "Quest.GetCommunityItemDefinitions#1",
              (0, a.MD)(d, t),
              h,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 4 },
            );
          }),
          (e.ActivateProfileModifierItem = function (e, t) {
            return e.SendMsg(
              "Quest.ActivateProfileModifierItem#1",
              (0, a.MD)(p, t),
              b,
              { ePrivilege: 1 },
            );
          }),
          (e.GetNumTradingCardsEarned = function (e, t) {
            return e.SendMsg(
              "Quest.GetNumTradingCardsEarned#1",
              (0, a.MD)(S, t),
              f,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetVirtualItemRewardDefinition = function (e, t) {
            return e.SendMsg(
              "Quest.GetVirtualItemRewardDefinition#1",
              (0, a.MD)(g, t),
              v,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.SetVirtualItemRewardDefinition = function (e, t) {
            return e.SendMsg(
              "Quest.SetVirtualItemRewardDefinition#1",
              (0, a.MD)(w, t),
              _,
              { ePrivilege: 4 },
            );
          });
      })(B || (B = {}));
    },
  },
]);
