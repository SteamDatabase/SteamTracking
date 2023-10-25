/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6656],
  {
    58638: (e, t, r) => {
      r.d(t, {
        Mi: () => Ye,
        P1: () => Se,
        Rq: () => P,
        iR: () => tt,
        jp: () => oe,
        oT: () => Re,
        ro: () => Z,
        sj: () => te,
      });
      var i = r(89526);
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
                u(e, t, r[t]);
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
      function u(e, t, r) {
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
      function c() {
        return (c = Object.assign
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
          t && h(e, t);
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function h(e, t) {
        return (h = Object.setPrototypeOf
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
          var r,
            i = m(e);
          if (t) {
            var n = m(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" == typeof t || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return S(e);
          })(this, r);
        };
      }
      function y(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return _(e);
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
              if ("string" == typeof e) return _(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? _(e, t)
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
      function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
        return i;
      }
      function v(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
      }
      function f() {}
      function g() {}
      function k(e) {
        return e
          .map(function (e) {
            return !1 === e ? null : e;
          })
          .join(" ")
          .replace(/\s+/g, " ")
          .trim();
      }
      function E(e, t) {
        return ((100 / e) * t) / t;
      }
      function w(e, t) {
        return (100 * e) / t;
      }
      function R(e) {
        return "".concat(e, "%");
      }
      function T(e, t, r) {
        if (e === t) return !0;
        var i = q[L(e)],
          n = q[L(t)];
        return !(!i || i !== n) && i(e, t, r);
      }
      function M(e) {
        return function (t, r, i) {
          if (!i) return e(t, r, []);
          for (var n, a = i.length; (n = i[--a]); )
            if (n[0] === t && n[1] === r) return !0;
          return e(t, r, i);
        };
      }
      function I(e) {
        var t = [];
        for (var r in e) "constructor" !== r && t.push(r);
        return t;
      }
      function B(e) {
        var t = Object.prototype.toString.call(e);
        return (
          "[object RegExp]" === t ||
          "[object Date]" === t ||
          (function (e) {
            return e.$$typeof === G;
          })(e)
        );
      }
      function C(e, t) {
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
      function O(e, t, r) {
        return e.concat(t).map(function (e) {
          return C(e, r);
        });
      }
      function F(e, t, r) {
        ((r = r || {}).arrayMerge = r.arrayMerge || O),
          (r.isMergeableObject = r.isMergeableObject || H);
        var i = Array.isArray(t);
        return i === Array.isArray(e)
          ? i
            ? r.arrayMerge(e, t, r)
            : (function (e, t, r) {
                var i = {};
                return (
                  r.isMergeableObject(e) &&
                    Object.keys(e).forEach(function (t) {
                      i[t] = C(e[t], r);
                    }),
                  Object.keys(t).forEach(function (n) {
                    r.isMergeableObject(t[n]) && e[n]
                      ? (i[n] = F(e[n], t[n], r))
                      : (i[n] = C(t[n], r));
                  }),
                  i
                );
              })(e, t, r)
          : C(t, r);
      }
      function P(e) {
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
                (i.updateStateProps = i.updateStateProps.bind(S(i))),
                i
              );
            }
            d(n, r);
            var l = b(n);
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
                    return !X(t, this.state) || !X(e, this.props);
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
                      c(
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
          u(r, "contextType", Z),
          u(r, "propTypes", { children: j.children }),
          u(r, "defaultProps", { children: null }),
          r
        );
      }
      g.resetWarningCache = f;
      var z = v(function (e) {
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
              checkPropTypes: g,
              resetWarningCache: f,
            };
            return (r.PropTypes = r), r;
          })();
        }),
        D = "loading",
        A = "success",
        N = "error",
        j = {
          children: z.oneOfType([z.arrayOf(z.node), z.node]),
          direction: z.oneOf(["forward", "backward"]),
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
          orientation: z.oneOf(["horizontal", "vertical"]),
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
        W = function (e) {
          var t = e.min,
            r = e.max,
            i = e.x;
          return Math.min(r, Math.max(t, i));
        },
        V = "buttonBack___1mlaL",
        x = [
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
        U = (function (e) {
          function t(e) {
            var i;
            return (
              s(this, t),
              ((i = r.call(this, e)).handleOnClick = i.handleOnClick.bind(
                S(i),
              )),
              i
            );
          }
          d(t, e);
          var r = b(t);
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
                      u = Math.max(i - a, 0);
                    s && (u = 0 === i ? o : u),
                      r.setStoreState(
                        { currentSlide: u, isPlaying: !1 },
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
                      a = p(e, x),
                      s = k([V, "carousel__back-button", r]),
                      l = t.setDisabled(
                        this.props.disabled,
                        this.props.currentSlide,
                        n,
                      );
                    return i.createElement(
                      "button",
                      c(
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
      u(U, "propTypes", {
        carouselStore: z.object.isRequired,
        children: j.children.isRequired,
        className: z.string,
        currentSlide: z.number.isRequired,
        disabled: z.bool,
        onClick: z.func,
        step: z.number.isRequired,
        totalSlides: z.number.isRequired,
        visibleSlides: z.number.isRequired,
        infinite: z.bool,
      }),
        u(U, "defaultProps", {
          className: null,
          disabled: null,
          onClick: null,
          infinite: !1,
        });
      var L = v(function (e, t) {
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
        q =
          (L.types,
          {
            number: function (e, t) {
              return e != e && t != t;
            },
            function: function (e, t, r) {
              return (
                e.toString() === t.toString() &&
                q.object(e, t, r) &&
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
      (q.arguments =
        q["bit-array"] =
        q.array =
          M(function (e, t, r) {
            var i = e.length;
            if (i !== t.length) return !1;
            for (r.push([e, t]); i--; ) if (!T(e[i], t[i], r)) return !1;
            return !0;
          })),
        (q.object = M(function (e, t, r) {
          if ("function" == typeof e.equal)
            return r.push([e, t]), e.equal(t, r);
          var i = I(e),
            n = I(t),
            a = i.length;
          if (a !== n.length) return !1;
          for (i.sort(), n.sort(); a--; ) if (i[a] !== n[a]) return !1;
          for (r.push([e, t]), a = i.length; a--; ) {
            var s = i[a];
            if (!T(e[s], t[s], r)) return !1;
          }
          return !0;
        }));
      var X = T,
        H = function (e) {
          return (
            (function (e) {
              return !!e && "object" == typeof e;
            })(e) && !B(e)
          );
        },
        G =
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
      var Y,
        Q = F,
        Z = i.createContext(),
        K = function e(t) {
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
              (this.state = K(Q($, t))),
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
                  (this.state = K(Q(this.state, e))), this.updateSubscribers(t);
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
          (u(
            (Y = (function (e) {
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
                  slideSize: E(e.totalSlides, e.visibleSlides),
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
                return (i.carouselStore = new J(n)), i;
              }
              d(t, e);
              var r = b(t);
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
                          ((r.slideSize = E(
                            this.props.totalSlides,
                            this.props.visibleSlides,
                          )),
                          (r.slideTraySize = w(
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
                        n = k(["carousel", this.props.className]);
                      return i.createElement(
                        t,
                        c({ className: n }, r),
                        i.createElement(
                          Z.Provider,
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
              children: j.children.isRequired,
              className: z.string,
              currentSlide: z.number,
              disableAnimation: z.bool,
              disableKeyboard: z.bool,
              hasMasterSpinner: z.bool,
              interval: z.number,
              isPageScrollLocked: z.bool,
              isPlaying: z.bool,
              lockOnWindowScroll: z.bool,
              naturalSlideHeight: z.number.isRequired,
              naturalSlideWidth: z.number.isRequired,
              orientation: j.orientation,
              playDirection: j.direction,
              step: z.number,
              dragStep: z.number,
              tag: z.string,
              totalSlides: z.number.isRequired,
              touchEnabled: z.bool,
              dragEnabled: z.bool,
              visibleSlides: z.number,
              infinite: z.bool,
              isIntrinsicHeight: z.bool,
            },
          ),
          u(Y, "defaultProps", {
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
          Y);
      Z.Consumer;
      var re,
        ie,
        ne,
        ae,
        se,
        le,
        oe = P(U, function (e) {
          return {
            currentSlide: e.currentSlide,
            step: e.step,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
            infinite: e.infinite,
          };
        }),
        ue = "buttonFirst___2rhFr",
        ce = [
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
                ((e = r.call(this)).handleOnClick = e.handleOnClick.bind(S(e))),
                e
              );
            }
            d(t, e);
            var r = b(t);
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
                      a = (e.onClick, e.totalSlides, p(e, ce)),
                      s = k([ue, "carousel__first-button", t]),
                      l = null !== n ? n : 0 === r;
                    return i.createElement(
                      "button",
                      c(
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
          u(re, "propTypes", {
            carouselStore: z.object.isRequired,
            children: j.children.isRequired,
            className: z.string,
            currentSlide: z.number.isRequired,
            disabled: z.bool,
            onClick: z.func,
            totalSlides: z.number.isRequired,
          }),
          u(re, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          re),
        me =
          (P(de, function (e) {
            return { currentSlide: e.currentSlide, totalSlides: e.totalSlides };
          }),
          "buttonNext___2mOCa"),
        he = [
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
                  S(i),
                )),
                i
              );
            }
            d(t, e);
            var r = b(t);
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
                        u = Math.min(o, l);
                      s && (u = l === r ? 0 : u),
                        a.setStoreState(
                          { currentSlide: u, isPlaying: !1 },
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
                        u = p(e, he),
                        d = k([me, "carousel__next-button", r]),
                        m = t.setDisabled(a, n, l, s, o);
                      return i.createElement(
                        "button",
                        c(
                          {
                            type: "button",
                            "aria-label": "next",
                            className: d,
                            onClick: this.handleOnClick,
                            disabled: m,
                          },
                          u,
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
          u(ie, "propTypes", {
            carouselStore: z.object.isRequired,
            children: j.children.isRequired,
            className: z.string,
            currentSlide: z.number.isRequired,
            disabled: z.bool,
            onClick: z.func,
            step: z.number.isRequired,
            totalSlides: z.number.isRequired,
            visibleSlides: z.number.isRequired,
            infinite: z.bool,
          }),
          u(ie, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
            infinite: !1,
          }),
          ie),
        Se = P(pe, function (e) {
          return {
            currentSlide: e.currentSlide,
            step: e.step,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
            infinite: e.infinite,
          };
        }),
        be = "buttonLast___2yuh0",
        ye = [
          "carouselStore",
          "className",
          "currentSlide",
          "disabled",
          "onClick",
          "totalSlides",
          "visibleSlides",
        ],
        _e =
          ((ne = (function (e) {
            function t() {
              var e;
              return (
                s(this, t),
                ((e = r.call(this)).handleOnClick = e.handleOnClick.bind(S(e))),
                e
              );
            }
            d(t, e);
            var r = b(t);
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
                      l = p(e, ye),
                      o = k([be, "carousel__last-button", t]),
                      u = null !== n ? n : r >= a - s;
                    return i.createElement(
                      "button",
                      c(
                        {
                          type: "button",
                          "aria-label": "last",
                          className: o,
                          onClick: this.handleOnClick,
                          disabled: u,
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
          u(ne, "propTypes", {
            carouselStore: z.object.isRequired,
            children: j.children.isRequired,
            className: z.string,
            currentSlide: z.number.isRequired,
            disabled: z.bool,
            onClick: z.func,
            totalSlides: z.number.isRequired,
            visibleSlides: z.number.isRequired,
          }),
          u(ne, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
          }),
          ne),
        ve =
          (P(_e, function (e) {
            return {
              currentSlide: e.currentSlide,
              totalSlides: e.totalSlides,
              visibleSlides: e.visibleSlides,
            };
          }),
          "buttonNext___3Lm3s"),
        fe = [
          "carouselStore",
          "children",
          "childrenPaused",
          "childrenPlaying",
          "className",
          "isPlaying",
          "onClick",
        ],
        ge =
          ((ae = (function (e) {
            function t(e) {
              var i;
              return (
                s(this, t),
                ((i = r.call(this, e)).handleOnClick = i.handleOnClick.bind(
                  S(i),
                )),
                i
              );
            }
            d(t, e);
            var r = b(t);
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
                      s = (e.onClick, p(e, fe)),
                      l = k([ve, "carousel__play-button", n]);
                    return i.createElement(
                      "button",
                      c(
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
          u(ae, "propTypes", {
            carouselStore: z.object.isRequired,
            children: z.node,
            childrenPaused: z.node,
            childrenPlaying: z.node,
            className: z.string,
            isPlaying: z.bool.isRequired,
            onClick: z.func,
          }),
          u(ae, "defaultProps", {
            children: null,
            childrenPaused: null,
            childrenPlaying: null,
            className: null,
            onClick: null,
          }),
          ae),
        ke =
          (P(ge, function (e) {
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
        we =
          ((se = (function (e) {
            function t(e) {
              var i;
              return (
                s(this, t),
                ((i = r.call(this, e)).handleOnClick = i.handleOnClick.bind(
                  S(i),
                )),
                i
              );
            }
            d(t, e);
            var r = b(t);
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
                      o = p(e, Ee),
                      u = s >= r && s < r + l,
                      d = "boolean" == typeof a ? a : u,
                      m = "boolean" == typeof n ? n : !0 === u,
                      h = k([
                        ke.dot,
                        d && ke.dotSelected,
                        "carousel__dot",
                        "carousel__dot--".concat(s),
                        d && "carousel__dot--selected",
                        t,
                      ]);
                    return i.createElement(
                      "button",
                      c(
                        {
                          "aria-label": "slide dot",
                          type: "button",
                          onClick: this.handleOnClick,
                          className: h,
                          disabled: m,
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
          u(se, "propTypes", {
            carouselStore: z.object.isRequired,
            children: j.children,
            className: z.string,
            currentSlide: z.number.isRequired,
            disabled: z.bool,
            onClick: z.func,
            selected: z.bool,
            slide: z.number.isRequired,
            totalSlides: z.number.isRequired,
            visibleSlides: z.number.isRequired,
          }),
          u(se, "defaultProps", {
            children: null,
            className: null,
            disabled: null,
            onClick: null,
            selected: null,
          }),
          se),
        Re = P(we, function (e) {
          return {
            currentSlide: e.currentSlide,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides,
          };
        }),
        Te = {},
        Me = ["renderDots"],
        Ie = [
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
        Be =
          ((le = (function (e) {
            function t() {
              return s(this, t), r.apply(this, arguments);
            }
            d(t, e);
            var r = b(t);
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
                      return o.renderDots, l(p(o, Me));
                    }
                    for (var u = [], c = 0; c < r; c += 1) {
                      var d = s ? c === t : c >= t && c < t + n,
                        m = c >= r - n ? r - n : c;
                      u.push(
                        i.createElement(
                          Re,
                          { key: c, slide: m, selected: d, disabled: !!a && d },
                          i.createElement(
                            "span",
                            { className: k["carousel__dot-group-dot"] },
                            this.props.dotNumbers && c + 1,
                          ),
                        ),
                      );
                    }
                    return u;
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
                        p(e, Ie)),
                      a = k([Te.DotGroup, "carousel__dot-group", r]);
                    return i.createElement(
                      "div",
                      c({ className: a }, n),
                      this.renderDots(),
                      t,
                    );
                  },
                },
              ]),
              t
            );
          })(i.Component)),
          u(le, "propTypes", {
            children: j.children,
            className: z.string,
            currentSlide: z.number.isRequired,
            carouselStore: z.object.isRequired,
            totalSlides: z.number.isRequired,
            visibleSlides: z.number.isRequired,
            dotNumbers: z.bool,
            disableActiveDots: z.bool,
            showAsSelectedForCurrentSlideOnly: z.bool,
            renderDots: z.func,
          }),
          u(le, "defaultProps", {
            children: null,
            className: null,
            dotNumbers: !1,
            disableActiveDots: !0,
            showAsSelectedForCurrentSlideOnly: !1,
            renderDots: null,
          }),
          le),
        Ce =
          (P(Be, function (e) {
            return {
              currentSlide: e.currentSlide,
              totalSlides: e.totalSlides,
              visibleSlides: e.visibleSlides,
            };
          }),
          { image: "image___xtQGH" }),
        Oe = ["src", "alt"],
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
        Pe = (function (e) {
          function t(e) {
            var i;
            return (
              s(this, t),
              ((i = r.call(this, e)).state = { imageStatus: D }),
              (i.handleImageLoad = i.handleImageLoad.bind(S(i))),
              (i.handleImageError = i.handleImageError.bind(S(i))),
              (i.image = null),
              i
            );
          }
          d(t, e);
          var r = b(t);
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
                      (this.setState({ imageStatus: D }),
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
                    this.setState({ imageStatus: A }),
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
                    this.setState({ imageStatus: N }),
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
                      r = k([
                        Ce.image,
                        Ce.imageLoading,
                        "carousel__image",
                        this.props.isBgImage &&
                          "carousel__image--with-background",
                        "carousel__image--loading",
                        this.props.className,
                      ]);
                    return i.createElement(
                      t,
                      c({ className: r }, e),
                      this.customRender("renderLoading"),
                    );
                  },
                },
                {
                  key: "renderError",
                  value: function (e) {
                    var t = this.tempTag(),
                      r = k([
                        Ce.image,
                        Ce.imageError,
                        "carousel__image",
                        this.props.isBgImage &&
                          "carousel__image--with-background",
                        "carousel__image--error",
                        this.props.className,
                      ]);
                    return i.createElement(
                      t,
                      c({ className: r }, e),
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
                      a = k([
                        Ce.image,
                        "carousel__image",
                        this.props.isBgImage &&
                          "carousel__image--with-background",
                        "carousel__image--success",
                        this.props.className,
                      ]),
                      s = c({}, r),
                      l = e;
                    if ("img" !== n) {
                      var o = e.src;
                      e.alt,
                        (l = p(e, Oe)),
                        (s = c({}, r, {
                          backgroundImage: 'url("'.concat(o, '")'),
                          backgroundSize: "cover",
                        }));
                    }
                    return i.createElement(
                      n,
                      c({ className: a, style: s }, l),
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
                      case D:
                        return this.renderLoading(t);
                      case A:
                        return this.renderSuccess(t);
                      case N:
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
      u(Pe, "propTypes", {
        alt: z.string,
        carouselStore: z.object.isRequired,
        children: j.children,
        className: z.string,
        hasMasterSpinner: z.bool.isRequired,
        isBgImage: j.isBgImage,
        onError: z.func,
        onLoad: z.func,
        renderError: z.func,
        renderLoading: z.func,
        src: z.string.isRequired,
        style: z.object,
        tag: z.string,
      }),
        u(Pe, "defaultProps", {
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
        De,
        Ae,
        Ne,
        je = P(Pe, function (e) {
          return {
            hasMasterSpinner: e.hasMasterSpinner,
            orientation: e.orientation,
          };
        }),
        We = "spinner___27VUp",
        Ve = ["className"],
        xe =
          (u(
            (ze = (function (e) {
              function t() {
                return s(this, t), r.apply(this, arguments);
              }
              d(t, e);
              var r = b(t);
              return (
                o(t, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        r = p(e, Ve),
                        n = k([We, "carousel__spinner", t]);
                      return i.createElement("div", c({ className: n }, r));
                    },
                  },
                ]),
                t
              );
            })(i.PureComponent)),
            "propTypes",
            { className: z.string },
          ),
          u(ze, "defaultProps", { className: null }),
          ze),
        Ue = {
          container: "container___2O72F",
          overlay: "overlay___IV4qY",
          hover: "hover___MYy31",
          zoom: "zoom___3kqYk",
          loading: "loading___1pvNI",
          imageLoadingSpinnerContainer: "imageLoadingSpinnerContainer___3UIPD",
        },
        Le = [
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
        qe =
          ((De = (function (e) {
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
            var r = b(t);
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
                        var t = R(
                            (e.nativeEvent.offsetX / e.target.offsetWidth) *
                              100,
                          ),
                          r = R(
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
                        (y(e.targetTouches).forEach(function (e) {
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
                        var i = y(e.targetTouches)
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
                          var u = t.midpointBetweenTwoTouches(a({}, o));
                          (o.cx = u.x), (o.cy = u.y);
                          var c = {
                            x1: i[0].clientX,
                            y1: i[0].clientY,
                            x2: i[1].clientX,
                            y2: i[1].clientY,
                          };
                          c.distance = t.distanceBetweenTwoTouches(a({}, c));
                          var d = t.midpointBetweenTwoTouches(a({}, c));
                          (c.cx = d.x), (c.cy = d.y);
                          var m = R(
                              W({
                                min: 0,
                                max: 100,
                                x: ((c.cx - n.left) / n.width) * 100,
                              }),
                            ),
                            h = R(
                              W({
                                min: 0,
                                max: 100,
                                x: ((c.cy - n.top) / n.height) * 100,
                              }),
                            ),
                            p = function (e) {
                              return W({
                                min: 1,
                                max: 3,
                                x: e.scale + (c.distance - o.distance) / 100,
                              });
                            };
                          this.setState(function (e) {
                            return {
                              isZooming: 1 !== p(e),
                              scale: p(e),
                              x: m,
                              y: h,
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
                        (y(e.changedTouches).forEach(function (e) {
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
                              Ue.imageLoadingSpinnerContainer,
                              "carousel__image-loading-spinner-container",
                            ]),
                          },
                          e && e(),
                          !e && i.createElement(xe, null),
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
                        u = e.srcZoomed,
                        d = e.tag,
                        m = p(e, Le),
                        h = k([Ue.container, a]),
                        S = k([Ue.image, "carousel__zoom-image", s]),
                        b = k([
                          Ue.overlay,
                          "carousel__zoom-image-overlay",
                          this.state.isHovering && Ue.hover,
                          this.state.isZooming && Ue.zoom,
                          this.state.isHovering &&
                            "carousel__zoom-image-overlay--hovering",
                          this.state.isZooming &&
                            "carousel__zoom-image-overlay--zooming",
                          l,
                        ]),
                        y = {};
                      return (
                        (this.state.isHovering || this.state.isZooming) &&
                          ((y.transformOrigin = ""
                            .concat(this.state.x, " ")
                            .concat(this.state.y)),
                          (y.transform = "scale(".concat(
                            this.state.scale,
                            ")",
                          ))),
                        i.createElement(
                          d,
                          c({ className: h }, m),
                          i.createElement(
                            je,
                            c(
                              {
                                alt: t,
                                className: S,
                                tag: n,
                                src: o,
                                onLoad: this.handleImageComplete,
                                onError: this.handleImageComplete,
                              },
                              r,
                            ),
                          ),
                          i.createElement(je, {
                            className: b,
                            tag: "div",
                            src: u || o,
                            style: y,
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
          u(De, "propTypes", {
            alt: z.string,
            bgImageProps: z.object,
            bgImageTag: z.string,
            carouselStore: z.object.isRequired,
            className: z.string,
            imageClassName: z.string,
            overlayClassName: z.string,
            spinner: z.func,
            src: z.string.isRequired,
            srcZoomed: z.string,
            tag: z.string,
            isPinchZoomEnabled: z.bool,
          }),
          u(De, "defaultProps", {
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
          De),
        Xe =
          (P(qe, function () {
            return {};
          }),
          {
            slide: "slide___3-Nqo",
            slideHorizontal: "slideHorizontal___1NzNV",
            slideInner: "slideInner___2mfX9",
            focusRing: "focusRing___1airF",
          }),
        He = [
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
        Ge =
          ((Ae = (function (e) {
            function t(e) {
              var i;
              return (
                s(this, t),
                ((i = r.call(this, e)).handleOnFocus = i.handleOnFocus.bind(
                  S(i),
                )),
                (i.handleOnBlur = i.handleOnBlur.bind(S(i))),
                (i.state = { focused: !1 }),
                i
              );
            }
            d(t, e);
            var r = b(t);
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
                            Xe.focusRing,
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
                      u = t.naturalSlideHeight,
                      d = t.naturalSlideWidth,
                      m = (t.onBlur, t.onFocus, t.orientation),
                      h = t.slideSize,
                      S = t.style,
                      b = t.tabIndex,
                      y = t.tag,
                      _ = t.totalSlides,
                      v = (t.visibleSlides, t.isIntrinsicHeight),
                      f = p(t, He),
                      g = {};
                    "horizontal" === m
                      ? ((g.width = R(h)),
                        (g.paddingBottom = R((100 * u) / (d * _))))
                      : ((g.width = R(100)),
                        (g.paddingBottom = R((100 * u) / d)));
                    var E = {};
                    v &&
                      ("horizontal" === m
                        ? (g.height = "unset")
                        : (g.width = "unset"),
                      (g.paddingBottom = "unset"),
                      (E.position = "unset"));
                    var w = c({}, g, S),
                      T = this.isVisible(),
                      M = k([
                        Xe.slide,
                        "horizontal" === m && Xe.slideHorizontal,
                        "carousel__slide",
                        this.state.focused && "carousel__slide--focused",
                        T && s,
                        T && "carousel__slide--visible",
                        !T && a,
                        !T && "carousel__slide--hidden",
                        n,
                      ]),
                      I = k([Xe.slideInner, "carousel__inner-slide", l]),
                      B = this.isVisible() ? 0 : -1,
                      C = "number" == typeof b ? b : B;
                    return i.createElement(
                      y,
                      c(
                        {
                          ref: function (t) {
                            e.tagRef = t;
                          },
                          tabIndex: C,
                          "aria-selected": this.isVisible(),
                          "aria-label": r,
                          role: "option",
                          onFocus: this.handleOnFocus,
                          onBlur: this.handleOnBlur,
                          className: M,
                          style: w,
                        },
                        f,
                      ),
                      i.createElement(
                        o,
                        {
                          ref: function (t) {
                            e.innerTagRef = t;
                          },
                          className: I,
                          style: E,
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
          u(Ae, "propTypes", {
            ariaLabel: z.string,
            carouselStore: z.object,
            children: j.children,
            className: z.string,
            classNameHidden: z.string,
            classNameVisible: z.string,
            currentSlide: z.number.isRequired,
            index: z.number.isRequired,
            innerClassName: z.string,
            innerTag: z.string,
            naturalSlideHeight: z.number.isRequired,
            naturalSlideWidth: z.number.isRequired,
            onBlur: z.func,
            onFocus: z.func,
            orientation: j.orientation.isRequired,
            slideSize: z.number.isRequired,
            style: z.object,
            tabIndex: z.number,
            tag: z.string,
            totalSlides: z.number.isRequired,
            visibleSlides: z.number.isRequired,
            isIntrinsicHeight: z.bool,
          }),
          u(Ae, "defaultProps", {
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
          Ae),
        Ye = P(Ge, function (e) {
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
        Ze = {
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
        Ke = [
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
          ((Ne = (function (e) {
            function t(e) {
              var i;
              return (
                s(this, t),
                ((i = r.call(this, e)).getSliderRef = i.getSliderRef.bind(
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
            var r = b(t);
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
                        n = W({
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
                              className: k([
                                Ze.masterSpinnerContainer,
                                "carousel__master-spinner-container",
                              ]),
                            },
                            n && n(),
                            !n && i.createElement(xe, null),
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
                        u = t.currentSlide,
                        d = t.disableAnimation,
                        m =
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
                        h = t.naturalSlideWidth,
                        S = (t.onMasterSpinner, t.orientation),
                        b =
                          (t.playDirection,
                          t.privateUnDisableAnimation,
                          t.slideSize),
                        y = t.slideTraySize,
                        _ = (t.spinner, t.style),
                        v = t.tabIndex,
                        f = (t.totalSlides, t.touchEnabled, t.trayProps),
                        g = t.trayTag,
                        E = t.visibleSlides,
                        w = t.isIntrinsicHeight,
                        T = p(t, Ke),
                        M = c({}, _),
                        I = {};
                      "vertical" === S &&
                        ((I.height = 0),
                        (I.paddingBottom = R((100 * m * E) / h)),
                        (I.width = R(100)));
                      var B = {},
                        C = R(b * u * -1);
                      (this.state.isBeingTouchDragged ||
                        this.state.isBeingMouseDragged ||
                        d) &&
                        (B.transition = "none"),
                        w && ((B.display = "flex"), (B.alignItems = "stretch")),
                        "vertical" === S
                          ? ((B.transform = "translateY("
                              .concat(C, ") translateY(")
                              .concat(this.state.deltaY, "px)")),
                            (B.width = R(100)),
                            (B.flexDirection = "column"))
                          : ((B.width = R(y)),
                            (B.transform = "translateX("
                              .concat(C, ") translateX(")
                              .concat(this.state.deltaX, "px)")),
                            (B.flexDirection = "row"));
                      var O = k([
                          "vertical" === S
                            ? Ze.verticalSlider
                            : Ze.horizontalSlider,
                          "carousel__slider",
                          "vertical" === S
                            ? "carousel__slider--vertical"
                            : "carousel__slider--horizontal",
                          a,
                        ]),
                        F = k([
                          Ze.sliderTrayWrap,
                          "carousel__slider-tray-wrapper",
                          "vertical" === S
                            ? Ze.verticalSlideTrayWrap
                            : Ze.horizontalTrayWrap,
                          "vertical" === S
                            ? "carousel__slider-tray-wrap--vertical"
                            : "carousel__slider-tray-wrap--horizontal",
                          o,
                        ]),
                        P = k([
                          Ze.sliderTray,
                          s || Ze.sliderAnimation,
                          "carousel__slider-tray",
                          "vertical" === S
                            ? Ze.verticalTray
                            : Ze.horizontalTray,
                          "vertical" === S
                            ? "carousel__slider-tray--vertical"
                            : "carousel__slider-tray--horizontal",
                          l,
                        ]),
                        z = null !== v ? v : 0,
                        D =
                          (T.dragStep,
                          T.step,
                          T.infinite,
                          T.preventVerticalScrollOnTouch,
                          T.preventingVerticalScroll,
                          T.horizontalPixelThreshold,
                          T.verticalPixelThreshold,
                          p(T, $e)),
                        A =
                          (f.className,
                          f.onClickCapture,
                          f.onMouseDown,
                          f.onTouchCancel,
                          f.onTouchEnd,
                          f.onTouchMove,
                          f.onTouchStart,
                          f.ref,
                          f.style,
                          p(f, Je));
                      return i.createElement(
                        "div",
                        c(
                          {
                            ref: function (t) {
                              e.sliderElement = t;
                            },
                            className: O,
                            "aria-live": "polite",
                            "aria-label": r,
                            style: M,
                            tabIndex: z,
                            onKeyDown: this.handleOnKeyDown,
                            role: "listbox",
                          },
                          D,
                        ),
                        i.createElement(
                          "div",
                          { className: F, style: I },
                          i.createElement(
                            g,
                            c(
                              {
                                ref: this.getSliderRef,
                                className: P,
                                style: B,
                                onTouchStart: this.handleOnTouchStart,
                                onTouchMove: this.handleOnTouchMove,
                                onTouchEnd: this.handleOnTouchEnd,
                                onTouchCancel: this.handleOnTouchCancel,
                                onMouseDown: this.handleOnMouseDown,
                                onClickCapture: this.handleOnClickCapture,
                              },
                              A,
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
                        u = Math.max(o, l);
                      if (s < 0) return u;
                      var c = -u;
                      return 0 === c ? 0 : c;
                    },
                  },
                ],
              ),
              t
            );
          })(i.Component)),
          u(Ne, "propTypes", {
            ariaLabel: z.string,
            carouselStore: z.object.isRequired,
            children: z.node.isRequired,
            className: z.string,
            classNameAnimation: z.string,
            classNameTray: z.string,
            classNameTrayWrap: z.string,
            currentSlide: z.number.isRequired,
            disableAnimation: z.bool,
            disableKeyboard: z.bool,
            dragEnabled: z.bool.isRequired,
            dragStep: z.number,
            hasMasterSpinner: z.bool.isRequired,
            infinite: z.bool,
            interval: z.number.isRequired,
            isPageScrollLocked: z.bool.isRequired,
            isPlaying: z.bool.isRequired,
            lockOnWindowScroll: z.bool.isRequired,
            preventVerticalScrollOnTouch: z.bool,
            horizontalPixelThreshold: z.number,
            verticalPixelThreshold: z.number,
            masterSpinnerFinished: z.bool.isRequired,
            moveThreshold: z.number,
            naturalSlideHeight: z.number.isRequired,
            naturalSlideWidth: z.number.isRequired,
            onMasterSpinner: z.func,
            orientation: j.orientation.isRequired,
            playDirection: j.direction.isRequired,
            privateUnDisableAnimation: z.bool,
            slideSize: z.number.isRequired,
            slideTraySize: z.number.isRequired,
            spinner: z.func,
            step: z.number.isRequired,
            style: z.object,
            tabIndex: z.number,
            totalSlides: z.number.isRequired,
            touchEnabled: z.bool.isRequired,
            trayProps: z.shape({
              className: z.string,
              onClickCapture: z.func,
              onMouseDown: z.func,
              onTouchCancel: z.func,
              onTouchEnd: z.func,
              onTouchMove: z.func,
              onTouchStart: z.func,
              ref: z.shape({}),
              style: z.string,
            }),
            trayTag: z.string,
            visibleSlides: z.number,
            isIntrinsicHeight: z.bool,
          }),
          u(Ne, "defaultProps", {
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
          Ne),
        tt = P(et, function (e) {
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
    72985: (e, t, r) => {
      r.d(t, {
        Ac: () => l,
        BR: () => P,
        GZ: () => O,
        Js: () => f,
        Ts: () => g,
        a1: () => o,
        o0: () => w,
        q5: () => v,
        qF: () => _,
        vS: () => A,
        yg: () => B,
      });
      var i = r(45878),
        n = r(43898),
        a = r(67328);
      const s = i.Message;
      var l, o, u, c, d, m, h, p, S, b, y, _, v, f, g;
      !(function (e) {
        (e[(e.k_EVirtualItemRewardEvent_Invalid = 0)] =
          "k_EVirtualItemRewardEvent_Invalid"),
          (e[(e.k_EVirtualItemRewardEvent_Winter2013 = 1)] =
            "k_EVirtualItemRewardEvent_Winter2013"),
          (e[(e.k_EVirtualItemRewardEvent_Summer2014 = 2)] =
            "k_EVirtualItemRewardEvent_Summer2014"),
          (e[(e.k_EVirtualItemRewardEvent_Winter2018 = 3)] =
            "k_EVirtualItemRewardEvent_Winter2018"),
          (e[(e.k_EVirtualItemRewardEvent_LunarNewYear2019 = 4)] =
            "k_EVirtualItemRewardEvent_LunarNewYear2019"),
          (e[(e.k_EVirtualItemRewardEvent_Summer2019 = 5)] =
            "k_EVirtualItemRewardEvent_Summer2019"),
          (e[(e.k_EVirtualItemRewardEvent_Winter2019 = 6)] =
            "k_EVirtualItemRewardEvent_Winter2019"),
          (e[(e.k_EVirtualItemRewardEvent_Winter2019Free = 7)] =
            "k_EVirtualItemRewardEvent_Winter2019Free"),
          (e[(e.k_EVirtualItemRewardEvent_LunarNewYear2020 = 8)] =
            "k_EVirtualItemRewardEvent_LunarNewYear2020"),
          (e[(e.k_EVirtualItemRewardEvent_Summer2020 = 9)] =
            "k_EVirtualItemRewardEvent_Summer2020"),
          (e[(e.k_EVirtualItemRewardEvent_Winter2020 = 10)] =
            "k_EVirtualItemRewardEvent_Winter2020"),
          (e[(e.k_EVirtualItemRewardEvent_LunarNewYear2021 = 11)] =
            "k_EVirtualItemRewardEvent_LunarNewYear2021"),
          (e[(e.k_EVirtualItemRewardEvent_Winter2021 = 12)] =
            "k_EVirtualItemRewardEvent_Winter2021"),
          (e[(e.k_EVirtualItemRewardEven_LunarNewYear2022 = 13)] =
            "k_EVirtualItemRewardEven_LunarNewYear2022"),
          (e[(e.k_EVirtualItemRewardEvent_RacingSale2022 = 14)] =
            "k_EVirtualItemRewardEvent_RacingSale2022"),
          (e[(e.k_EVirtualItemRewardEvent_Summer2022 = 15)] =
            "k_EVirtualItemRewardEvent_Summer2022"),
          (e[(e.k_EVirtualItemRewardEvent_Sim4F2P = 16)] =
            "k_EVirtualItemRewardEvent_Sim4F2P"),
          (e[(e.k_EVirtualItemRewardEvent_DyingLight2 = 17)] =
            "k_EVirtualItemRewardEvent_DyingLight2"),
          (e[(e.k_EVirtualItemRewardEvent_GameAwardDeckDrop = 18)] =
            "k_EVirtualItemRewardEvent_GameAwardDeckDrop"),
          (e[(e.k_EVirtualItemRewardEvent_Winter2022 = 19)] =
            "k_EVirtualItemRewardEvent_Winter2022"),
          (e[(e.k_EVirtualItemRewardEvent_Lunar2023 = 20)] =
            "k_EVirtualItemRewardEvent_Lunar2023"),
          (e[(e.k_EVirtualItemRewardEvent_Spring2023 = 21)] =
            "k_EVirtualItemRewardEvent_Spring2023"),
          (e[(e.k_EVirtualItemRewardEvent_Summer2023 = 22)] =
            "k_EVirtualItemRewardEvent_Summer2023"),
          (e[(e.k_EVirtualItemRewardEvent_Autumn2023 = 23)] =
            "k_EVirtualItemRewardEvent_Autumn2023"),
          (e[(e.k_EVirtualItemRewardEvent_Winter2023 = 24)] =
            "k_EVirtualItemRewardEvent_Winter2023"),
          (e[(e.k_EVirtualItemRewardEvent_RedFallLaunch = 25)] =
            "k_EVirtualItemRewardEvent_RedFallLaunch"),
          (e[(e.k_EVirtualItemRewardEvent_PuzzleFest2023 = 26)] =
            "k_EVirtualItemRewardEvent_PuzzleFest2023"),
          (e[(e.k_EVirtualItemRewardEvent_SportsFest2023 = 27)] =
            "k_EVirtualItemRewardEvent_SportsFest2023"),
          (e[(e.k_EVirtualItemRewardEvent_NextFestSummer2023 = 28)] =
            "k_EVirtualItemRewardEvent_NextFestSummer2023"),
          (e[(e.k_EVirtualItemRewardEvent_StealthFest2023 = 29)] =
            "k_EVirtualItemRewardEvent_StealthFest2023"),
          (e[(e.k_EVirtualItemRewardEvent_VisualNovelFest2023 = 30)] =
            "k_EVirtualItemRewardEvent_VisualNovelFest2023"),
          (e[(e.k_EVirtualItemRewardEvent_StrategyFest2023 = 31)] =
            "k_EVirtualItemRewardEvent_StrategyFest2023"),
          (e[(e.k_EVirtualItemRewardEvent_SchmupFest2023 = 32)] =
            "k_EVirtualItemRewardEvent_SchmupFest2023"),
          (e[(e.k_EVirtualItemRewardEvent_NextFestFall2023 = 33)] =
            "k_EVirtualItemRewardEvent_NextFestFall2023"),
          (e[(e.k_EVirtualItemRewardEvent_Halloween2023 = 34)] =
            "k_EVirtualItemRewardEvent_Halloween2023"),
          (e[(e.k_EVirtualItemRewardEvent_TechLandEvent = 35)] =
            "k_EVirtualItemRewardEvent_TechLandEvent");
      })(l || (l = {})),
        (function (e) {
          (e[(e.k_EVirtualItemRewardRarity_Invalid = 0)] =
            "k_EVirtualItemRewardRarity_Invalid"),
            (e[(e.k_EVirtualItemRewardRarity_Common = 1)] =
              "k_EVirtualItemRewardRarity_Common"),
            (e[(e.k_EVirtualItemRewardRarity_Uncommon = 2)] =
              "k_EVirtualItemRewardRarity_Uncommon"),
            (e[(e.k_EVirtualItemRewardRarity_Rare = 3)] =
              "k_EVirtualItemRewardRarity_Rare"),
            (e[(e.k_EVirtualItemRewardRarity_Extraordinary = 4)] =
              "k_EVirtualItemRewardRarity_Extraordinary"),
            (e[(e.k_EVirtualItemRewardRarity_Precious = 5)] =
              "k_EVirtualItemRewardRarity_Precious"),
            (e[(e.k_EVirtualItemRewardRarity_Unparalleled = 6)] =
              "k_EVirtualItemRewardRarity_Unparalleled");
        })(o || (o = {})),
        (function (e) {
          (e[(e.k_EGameCardDropMethodInvalid = 0)] =
            "k_EGameCardDropMethodInvalid"),
            (e[(e.k_EGameCardDropMethodOneTimePurchase = 1)] =
              "k_EGameCardDropMethodOneTimePurchase"),
            (e[(e.k_EGameCardDropMethodFreeToPlay = 2)] =
              "k_EGameCardDropMethodFreeToPlay"),
            (e[(e.k_EGameCardDropMethodComboOTPFP2 = 3)] =
              "k_EGameCardDropMethodComboOTPFP2"),
            (e[(e.k_EGameCardDropMethodSalePurchase = 4)] =
              "k_EGameCardDropMethodSalePurchase"),
            (e[(e.k_EGameCardDropMethodOTPWithMicroTxn = 5)] =
              "k_EGameCardDropMethodOTPWithMicroTxn");
        })(u || (u = {})),
        (function (e) {
          (e[(e.k_ECommunityItemSalienType_Invalid = 0)] =
            "k_ECommunityItemSalienType_Invalid"),
            (e[(e.k_ECommunityItemSalienType_Hat = 1)] =
              "k_ECommunityItemSalienType_Hat"),
            (e[(e.k_ECommunityItemSalienType_Shirt = 2)] =
              "k_ECommunityItemSalienType_Shirt"),
            (e[(e.k_ECommunityItemSalienType_Cape = 3)] =
              "k_ECommunityItemSalienType_Cape");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_ECommunityItemDropRate_Common = 0)] =
            "k_ECommunityItemDropRate_Common"),
            (e[(e.k_ECommunityItemDropRate_Uncommon = 1)] =
              "k_ECommunityItemDropRate_Uncommon"),
            (e[(e.k_ECommunityItemDropRate_Rare = 2)] =
              "k_ECommunityItemDropRate_Rare");
        })(d || (d = {})),
        (function (e) {
          (e[(e.k_ECommunityItemAttribute_Invalid = 0)] =
            "k_ECommunityItemAttribute_Invalid"),
            (e[(e.k_ECommunityItemAttribute_CardBorder = 1)] =
              "k_ECommunityItemAttribute_CardBorder"),
            (e[(e.k_ECommunityItemAttribute_Level = 2)] =
              "k_ECommunityItemAttribute_Level"),
            (e[(e.k_ECommunityItemAttribute_IssueNumber = 3)] =
              "k_ECommunityItemAttribute_IssueNumber"),
            (e[(e.k_ECommunityItemAttribute_TradableTime = 4)] =
              "k_ECommunityItemAttribute_TradableTime"),
            (e[(e.k_ECommunityItemAttribute_StorePackageID = 5)] =
              "k_ECommunityItemAttribute_StorePackageID"),
            (e[(e.k_ECommunityItemAttribute_CommunityItemAppID = 6)] =
              "k_ECommunityItemAttribute_CommunityItemAppID"),
            (e[(e.k_ECommunityItemAttribute_CommunityItemType = 7)] =
              "k_ECommunityItemAttribute_CommunityItemType"),
            (e[(e.k_ECommunityItemAttribute_ProfileModiferEnabled = 8)] =
              "k_ECommunityItemAttribute_ProfileModiferEnabled"),
            (e[(e.k_ECommunityItemAttribute_ExpiryTime = 9)] =
              "k_ECommunityItemAttribute_ExpiryTime");
        })(m || (m = {})),
        (function (e) {
          (e[(e.k_ECommunityItemApprovalState_Invalid = 0)] =
            "k_ECommunityItemApprovalState_Invalid"),
            (e[(e.k_ECommunityItemApprovalState_DeveloperRequestsReview = 1)] =
              "k_ECommunityItemApprovalState_DeveloperRequestsReview"),
            (e[(e.k_ECommunityItemApprovalState_ApprovedByValve = 2)] =
              "k_ECommunityItemApprovalState_ApprovedByValve"),
            (e[
              (e.k_ECommunityItemApprovalState_ApprovalInvalidatedByEdits = 3)
            ] = "k_ECommunityItemApprovalState_ApprovalInvalidatedByEdits"),
            (e[(e.k_ECommunityItemApprovalState_ValveRequestsEdits = 4)] =
              "k_ECommunityItemApprovalState_ValveRequestsEdits"),
            (e[(e.k_ECommunityItemApprovalState_Released = 5)] =
              "k_ECommunityItemApprovalState_Released");
        })(h || (h = {})),
        (function (e) {
          (e[(e.k_ETradabilityPreference_DontCare = 0)] =
            "k_ETradabilityPreference_DontCare"),
            (e[(e.k_ETradabilityPreference_PreferTradable = 1)] =
              "k_ETradabilityPreference_PreferTradable"),
            (e[(e.k_ETradabilityPreference_RequireTradable = 2)] =
              "k_ETradabilityPreference_RequireTradable"),
            (e[(e.k_ETradabilityPreference_PreferNotTradable = 3)] =
              "k_ETradabilityPreference_PreferNotTradable");
        })(p || (p = {})),
        (function (e) {
          (e[(e.k_ESummerSaleTaskUseDiscoveryQueue = 0)] =
            "k_ESummerSaleTaskUseDiscoveryQueue"),
            (e[(e.k_ESummerSaleTaskPlayAGame = 1)] =
              "k_ESummerSaleTaskPlayAGame"),
            (e[(e.k_ESummerSaleTaskViewFriendActivity = 2)] =
              "k_ESummerSaleTaskViewFriendActivity"),
            (e[(e.k_ESummerSaleTaskAddToWishlist = 3)] =
              "k_ESummerSaleTaskAddToWishlist"),
            (e[(e.k_ESummerSaleTaskReviewStorePreferences = 4)] =
              "k_ESummerSaleTaskReviewStorePreferences"),
            (e[(e.k_ESummerSaleTaskEarnAchievement = 5)] =
              "k_ESummerSaleTaskEarnAchievement"),
            (e[(e.k_ESummerSaleTaskVisitBroadcastPage = 6)] =
              "k_ESummerSaleTaskVisitBroadcastPage"),
            (e[(e.k_ESummerSaleTaskMarkReviewHelpful = 7)] =
              "k_ESummerSaleTaskMarkReviewHelpful"),
            (e[(e.k_ESummerSaleTaskFollowCurator = 8)] =
              "k_ESummerSaleTaskFollowCurator"),
            (e[(e.k_ESummerSaleTaskViewAProfile = 9)] =
              "k_ESummerSaleTaskViewAProfile"),
            (e[(e.k_ESummerSaleTaskViewATagPage = 10)] =
              "k_ESummerSaleTaskViewATagPage"),
            (e[(e.k_ESummerSaleTaskMarkNotInterested = 11)] =
              "k_ESummerSaleTaskMarkNotInterested"),
            (e[(e.k_ESummerSaleTaskViewVideosPage = 12)] =
              "k_ESummerSaleTaskViewVideosPage"),
            (e[(e.k_ESummerSaleTaskUploadAScreenshot = 13)] =
              "k_ESummerSaleTaskUploadAScreenshot"),
            (e[(e.k_ESummerSaleTaskPersonalizeProfile = 14)] =
              "k_ESummerSaleTaskPersonalizeProfile"),
            (e[(e.k_ESummerSaleTaskPersonalizeDiscoveryQueue = 15)] =
              "k_ESummerSaleTaskPersonalizeDiscoveryQueue");
        })(S || (S = {})),
        (function (e) {
          e[(e.k_EWinterSale2015ARG_Badge_RedHerring = 1)] =
            "k_EWinterSale2015ARG_Badge_RedHerring";
        })(b || (b = {})),
        (function (e) {
          (e[(e.k_ESpringCleaningEventYear_Invalid = 0)] =
            "k_ESpringCleaningEventYear_Invalid"),
            (e[(e.k_ESpringCleaningEventYear_2018 = 1)] =
              "k_ESpringCleaningEventYear_2018"),
            (e[(e.k_ESpringCleaningEventYear_2019 = 2)] =
              "k_ESpringCleaningEventYear_2019"),
            (e[(e.k_ESpringCleaningEventYear_2020 = 3)] =
              "k_ESpringCleaningEventYear_2020");
        })(y || (y = {})),
        (function (e) {
          (e[(e.k_ESummerSale2021Genre_Invalid = 0)] =
            "k_ESummerSale2021Genre_Invalid"),
            (e[(e.k_ESummerSale2021Genre_Action = 1)] =
              "k_ESummerSale2021Genre_Action"),
            (e[(e.k_ESummerSale2021Genre_AdventureAndCasual = 2)] =
              "k_ESummerSale2021Genre_AdventureAndCasual"),
            (e[(e.k_ESummerSale2021Genre_RolePlaying = 3)] =
              "k_ESummerSale2021Genre_RolePlaying"),
            (e[(e.k_ESummerSale2021Genre_Strategy = 4)] =
              "k_ESummerSale2021Genre_Strategy"),
            (e[(e.k_ESummerSale2021Genre_Simulation = 5)] =
              "k_ESummerSale2021Genre_Simulation"),
            (e[(e.k_ESummerSale2021Genre_SportsAndRacing = 6)] =
              "k_ESummerSale2021Genre_SportsAndRacing"),
            (e[(e.k_ESummerSale2021Genre_Horror = 7)] =
              "k_ESummerSale2021Genre_Horror"),
            (e[(e.k_ESummerSale2021Genre_Survival = 8)] =
              "k_ESummerSale2021Genre_Survival"),
            (e[(e.k_ESummerSale2021Genre_OpenWorld = 9)] =
              "k_ESummerSale2021Genre_OpenWorld"),
            (e[(e.k_ESummerSale2021Genre_ScifiAndCyberpunk = 10)] =
              "k_ESummerSale2021Genre_ScifiAndCyberpunk"),
            (e[(e.k_ESummerSale2021Genre_MysteryAndDetective = 11)] =
              "k_ESummerSale2021Genre_MysteryAndDetective"),
            (e[(e.k_ESummerSale2021Genre_Space = 12)] =
              "k_ESummerSale2021Genre_Space"),
            (e[(e.k_ESummerSale2021Genre_RogueLike = 13)] =
              "k_ESummerSale2021Genre_RogueLike"),
            (e[(e.k_ESummerSale2021Genre_Anime = 14)] =
              "k_ESummerSale2021Genre_Anime");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.k_ESummerSale2021StoryChoice_Invalid = 0)] =
            "k_ESummerSale2021StoryChoice_Invalid"),
            (e[(e.k_ESummerSale2021StoryChoice_A = 1)] =
              "k_ESummerSale2021StoryChoice_A"),
            (e[(e.k_ESummerSale2021StoryChoice_B = 2)] =
              "k_ESummerSale2021StoryChoice_B");
        })(v || (v = {}));
      class k extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.communityitemid || n.aR(k.M()),
            s.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
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
                  attributes: { n: 5, c: E, r: !0, q: !0 },
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
          return "CQuest_CommunityItem";
        }
      }
      class E extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.attributeid || n.aR(E.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
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
          return "CQuest_CommunityItem_Attribute";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.filter_appids || n.aR(w.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
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
          return "CQuest_GetCommunityInventory_Request";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.items || n.aR(R.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: { items: { n: 1, c: k, r: !0, q: !0 } },
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
          return "CQuest_GetCommunityInventory_Response";
        }
      }
      class T extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.appid || n.aR(T.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
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
          return "CQuest_GetCommunityItemDefinitions_Request";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.item_definitions || n.aR(M.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { item_definitions: { n: 1, c: I, r: !0, q: !0 } },
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
          return "CQuest_GetCommunityItemDefinitions_Response";
        }
      }
      class I extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.item_type || n.aR(I.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
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
          return "CQuest_GetCommunityItemDefinitions_Response_ItemDefinition";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.appid || n.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
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
          return "CQuest_ActivateProfileModifierItem_Request";
        }
      }
      class C extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new C();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_ActivateProfileModifierItem_Response";
        }
      }
      class O extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.timestamp_start || n.aR(O.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
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
          return "CQuest_GetNumTradingCardsEarned_Request";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.num_trading_cards || n.aR(F.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  num_trading_cards: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
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
          return "CQuest_GetNumTradingCardsEarned_Response";
        }
      }
      class P extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.eventid || n.aR(P.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  eventid: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  include_inactive: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
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
          return "CQuest_VirtualItemRewardDefinition_Request";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.eventid || n.aR(z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
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
          return "CVirtualItemRewardDefinition";
        }
      }
      class D extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.rewards || n.aR(D.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: { rewards: { n: 1, c: z, r: !0, q: !0 } },
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
          return "CQuest_VirtualItemRewardDefinition_Response";
        }
      }
      class A extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.eventid || n.aR(A.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  eventid: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  itemsdefs: { n: 2, c: z, r: !0, q: !0 },
                  action: { n: 3, br: n.FE.readEnum, bw: n.Xc.writeEnum },
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
          return "CQuest_SetVirtualItemRewardDefinition_Request";
        }
      }
      !(function (e) {
        (e[(e.k_SetVirtualItemRewardDefinition_Add = 1)] =
          "k_SetVirtualItemRewardDefinition_Add"),
          (e[(e.k_SetVirtualItemRewardDefinition_Update = 2)] =
            "k_SetVirtualItemRewardDefinition_Update"),
          (e[(e.k_SetVirtualItemRewardDefinition_MarkInactive = 3)] =
            "k_SetVirtualItemRewardDefinition_MarkInactive"),
          (e[(e.k_SetVirtualItemRewardDefinition_Remove = 4)] =
            "k_SetVirtualItemRewardDefinition_Remove");
      })(f || (f = {}));
      class N extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new N();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_SetVirtualItemRewardDefinition_Response";
        }
      }
      !(function (e) {
        (e.GetCommunityInventory = function (e, t) {
          return e.SendMsg(
            "Quest.GetCommunityInventory#1",
            (0, a.MD)(w, t),
            R,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetCommunityItemDefinitions = function (e, t) {
            return e.SendMsg(
              "Quest.GetCommunityItemDefinitions#1",
              (0, a.MD)(T, t),
              M,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 4 },
            );
          }),
          (e.ActivateProfileModifierItem = function (e, t) {
            return e.SendMsg(
              "Quest.ActivateProfileModifierItem#1",
              (0, a.MD)(B, t),
              C,
              { ePrivilege: 1 },
            );
          }),
          (e.GetNumTradingCardsEarned = function (e, t) {
            return e.SendMsg(
              "Quest.GetNumTradingCardsEarned#1",
              (0, a.MD)(O, t),
              F,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetVirtualItemRewardDefinition = function (e, t) {
            return e.SendMsg(
              "Quest.GetVirtualItemRewardDefinition#1",
              (0, a.MD)(P, t),
              D,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.SetVirtualItemRewardDefinition = function (e, t) {
            return e.SendMsg(
              "Quest.SetVirtualItemRewardDefinition#1",
              (0, a.MD)(A, t),
              N,
              { ePrivilege: 4 },
            );
          });
      })(g || (g = {}));
    },
  },
]);
