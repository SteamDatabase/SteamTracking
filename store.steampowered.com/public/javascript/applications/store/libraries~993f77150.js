/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3388],
  {
    74802: (e, t, n) => {
      n.d(t, { h: () => x });
      var o = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var r = void 0;
      function i() {
        return (
          void 0 === r &&
            (r = (function () {
              if (!o) return !1;
              if (
                !window.addEventListener ||
                !window.removeEventListener ||
                !Object.defineProperty
              )
                return !1;
              var e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                      e = !0;
                    },
                  }),
                  n = function () {};
                window.addEventListener("testPassiveEventSupport", n, t),
                  window.removeEventListener("testPassiveEventSupport", n, t);
              } catch (e) {}
              return e;
            })()),
          r
        );
      }
      function s(e) {
        e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice());
      }
      function l(e) {
        (this.target = e), (this.events = {});
      }
      (l.prototype.getEventHandlers = function (e, t) {
        var n,
          o =
            String(e) +
            " " +
            String(
              (n = t)
                ? !0 === n
                  ? 100
                  : (n.capture << 0) + (n.passive << 1) + (n.once << 2)
                : 0,
            );
        return (
          this.events[o] ||
            ((this.events[o] = { handlers: [], handleEvent: void 0 }),
            (this.events[o].nextHandlers = this.events[o].handlers)),
          this.events[o]
        );
      }),
        (l.prototype.handleEvent = function (e, t, n) {
          var o = this.getEventHandlers(e, t);
          (o.handlers = o.nextHandlers),
            o.handlers.forEach(function (e) {
              e && e(n);
            });
        }),
        (l.prototype.add = function (e, t, n) {
          var o = this,
            r = this.getEventHandlers(e, n);
          s(r),
            0 === r.nextHandlers.length &&
              ((r.handleEvent = this.handleEvent.bind(this, e, n)),
              this.target.addEventListener(e, r.handleEvent, n)),
            r.nextHandlers.push(t);
          var i = !0;
          return function () {
            if (i) {
              (i = !1), s(r);
              var l = r.nextHandlers.indexOf(t);
              r.nextHandlers.splice(l, 1),
                0 === r.nextHandlers.length &&
                  (o.target &&
                    o.target.removeEventListener(e, r.handleEvent, n),
                  (r.handleEvent = void 0));
            }
          };
        });
      var a = "__consolidated_events_handlers__";
      function c(e, t, n, o) {
        e[a] || (e[a] = new l(e));
        var r = (function (e) {
          if (e) return i() ? e : !!e.capture;
        })(o);
        return e[a].add(t, n, r);
      }
      var u = n(89526),
        p = n(338);
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function v(e) {
        return (
          (v = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          v(e)
        );
      }
      function d(e, t) {
        return (
          (d =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          d(e, t)
        );
      }
      function h(e, t) {
        return !t || ("object" != typeof t && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e)
          : t;
      }
      function w(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = v(e);
          if (t) {
            var r = v(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return h(this, n);
        };
      }
      function y(e, t) {
        var n,
          o =
            ((n = e),
            !isNaN(parseFloat(n)) && isFinite(n)
              ? parseFloat(n)
              : "px" === n.slice(-2)
              ? parseFloat(n.slice(0, -2))
              : void 0);
        if ("number" == typeof o) return o;
        var r = (function (e) {
          if ("%" === e.slice(-1)) return parseFloat(e.slice(0, -1)) / 100;
        })(e);
        return "number" == typeof r ? r * t : void 0;
      }
      var b = "above",
        m = "inside",
        g = "below",
        E = "invisible";
      function T(e) {
        return "string" == typeof e.type;
      }
      var _;
      var O = [];
      function B(e) {
        O.push(e),
          _ ||
            (_ = setTimeout(function () {
              var e;
              for (_ = null; (e = O.shift()); ) e();
            }, 0));
        var t = !0;
        return function () {
          if (t) {
            t = !1;
            var n = O.indexOf(e);
            -1 !== n &&
              (O.splice(n, 1), !O.length && _ && (clearTimeout(_), (_ = null)));
          }
        };
      }
      var P = {
          debug: !1,
          scrollableAncestor: void 0,
          children: void 0,
          topOffset: "0px",
          bottomOffset: "0px",
          horizontal: !1,
          onEnter: function () {},
          onLeave: function () {},
          onPositionChange: function () {},
          fireOnRapidScroll: !0,
        },
        x = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && d(e, t);
          })(s, e);
          var t,
            o,
            r,
            i = w(s);
          function s(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              ((t = i.call(this, e)).refElement = function (e) {
                t._ref = e;
              }),
              t
            );
          }
          return (
            (t = s),
            (o = [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  s.getWindow() &&
                    (this.cancelOnNextTick = B(function () {
                      e.cancelOnNextTick = null;
                      var t = e.props,
                        n = t.children;
                      t.debug,
                        (function (e, t) {
                          if (e && !T(e) && !t)
                            throw new Error(
                              "<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.",
                            );
                        })(n, e._ref),
                        (e._handleScroll = e._handleScroll.bind(e)),
                        (e.scrollableAncestor = e._findScrollableAncestor()),
                        (e.scrollEventListenerUnsubscribe = c(
                          e.scrollableAncestor,
                          "scroll",
                          e._handleScroll,
                          { passive: !0 },
                        )),
                        (e.resizeEventListenerUnsubscribe = c(
                          window,
                          "resize",
                          e._handleScroll,
                          { passive: !0 },
                        )),
                        e._handleScroll(null);
                    }));
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var e = this;
                  s.getWindow() &&
                    this.scrollableAncestor &&
                    (this.cancelOnNextTick ||
                      (this.cancelOnNextTick = B(function () {
                        (e.cancelOnNextTick = null), e._handleScroll(null);
                      })));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  s.getWindow() &&
                    (this.scrollEventListenerUnsubscribe &&
                      this.scrollEventListenerUnsubscribe(),
                    this.resizeEventListenerUnsubscribe &&
                      this.resizeEventListenerUnsubscribe(),
                    this.cancelOnNextTick && this.cancelOnNextTick());
                },
              },
              {
                key: "_findScrollableAncestor",
                value: function () {
                  var e = this.props,
                    t = e.horizontal,
                    o = e.scrollableAncestor;
                  if (o)
                    return (function (e) {
                      return "window" === e ? n.g.window : e;
                    })(o);
                  for (var r = this._ref; r.parentNode; ) {
                    if ((r = r.parentNode) === document.body) return window;
                    var i = window.getComputedStyle(r),
                      s =
                        (t
                          ? i.getPropertyValue("overflow-x")
                          : i.getPropertyValue("overflow-y")) ||
                        i.getPropertyValue("overflow");
                    if ("auto" === s || "scroll" === s || "overlay" === s)
                      return r;
                  }
                  return window;
                },
              },
              {
                key: "_handleScroll",
                value: function (e) {
                  if (this._ref) {
                    var t = this._getBounds(),
                      n = (function (e) {
                        return e.viewportBottom - e.viewportTop == 0
                          ? E
                          : (e.viewportTop <= e.waypointTop &&
                              e.waypointTop <= e.viewportBottom) ||
                            (e.viewportTop <= e.waypointBottom &&
                              e.waypointBottom <= e.viewportBottom) ||
                            (e.waypointTop <= e.viewportTop &&
                              e.viewportBottom <= e.waypointBottom)
                          ? m
                          : e.viewportBottom < e.waypointTop
                          ? g
                          : e.waypointTop < e.viewportTop
                          ? b
                          : E;
                      })(t),
                      o = this._previousPosition,
                      r = this.props,
                      i = (r.debug, r.onPositionChange),
                      s = r.onEnter,
                      l = r.onLeave,
                      a = r.fireOnRapidScroll;
                    if (((this._previousPosition = n), o !== n)) {
                      var c = {
                        currentPosition: n,
                        previousPosition: o,
                        event: e,
                        waypointTop: t.waypointTop,
                        waypointBottom: t.waypointBottom,
                        viewportTop: t.viewportTop,
                        viewportBottom: t.viewportBottom,
                      };
                      i.call(this, c),
                        n === m ? s.call(this, c) : o === m && l.call(this, c),
                        a &&
                          ((o === g && n === b) || (o === b && n === g)) &&
                          (s.call(this, {
                            currentPosition: m,
                            previousPosition: o,
                            event: e,
                            waypointTop: t.waypointTop,
                            waypointBottom: t.waypointBottom,
                            viewportTop: t.viewportTop,
                            viewportBottom: t.viewportBottom,
                          }),
                          l.call(this, {
                            currentPosition: n,
                            previousPosition: m,
                            event: e,
                            waypointTop: t.waypointTop,
                            waypointBottom: t.waypointBottom,
                            viewportTop: t.viewportTop,
                            viewportBottom: t.viewportBottom,
                          }));
                    }
                  }
                },
              },
              {
                key: "_getBounds",
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    o = n.horizontal,
                    r = (n.debug, this._ref.getBoundingClientRect()),
                    i = r.left,
                    s = r.top,
                    l = r.right,
                    a = r.bottom,
                    c = o ? i : s,
                    u = o ? l : a;
                  this.scrollableAncestor === window
                    ? ((e = o ? window.innerWidth : window.innerHeight),
                      (t = 0))
                    : ((e = o
                        ? this.scrollableAncestor.offsetWidth
                        : this.scrollableAncestor.offsetHeight),
                      (t = o
                        ? this.scrollableAncestor.getBoundingClientRect().left
                        : this.scrollableAncestor.getBoundingClientRect().top));
                  var p = this.props,
                    f = p.bottomOffset;
                  return {
                    waypointTop: c,
                    waypointBottom: u,
                    viewportTop: t + y(p.topOffset, e),
                    viewportBottom: t + e - y(f, e),
                  };
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.children;
                  return t
                    ? T(t) || (0, p.isForwardRef)(t)
                      ? u.cloneElement(t, {
                          ref: function (n) {
                            e.refElement(n),
                              t.ref &&
                                ("function" == typeof t.ref
                                  ? t.ref(n)
                                  : (t.ref.current = n));
                          },
                        })
                      : u.cloneElement(t, { innerRef: this.refElement })
                    : u.createElement("span", {
                        ref: this.refElement,
                        style: { fontSize: 0 },
                      });
                },
              },
            ]) && f(t.prototype, o),
            r && f(t, r),
            s
          );
        })(u.PureComponent);
      (x.above = b),
        (x.below = g),
        (x.inside = m),
        (x.invisible = E),
        (x.getWindow = function () {
          if ("undefined" != typeof window) return window;
        }),
        (x.defaultProps = P),
        (x.displayName = "Waypoint");
    },
  },
]);
