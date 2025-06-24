/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9536],
  {
    38877: (e, t) => {
      var o,
        n = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        l = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        p = Symbol.for("react.server_context"),
        f = Symbol.for("react.forward_ref"),
        u = Symbol.for("react.suspense"),
        v = Symbol.for("react.suspense_list"),
        d = Symbol.for("react.memo"),
        h = Symbol.for("react.lazy"),
        w = Symbol.for("react.offscreen");
      function m(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case i:
                case a:
                case s:
                case u:
                case v:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case p:
                    case c:
                    case f:
                    case h:
                    case d:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case r:
              return t;
          }
        }
      }
      (o = Symbol.for("react.module.reference")),
        (t.isForwardRef = function (e) {
          return m(e) === f;
        });
    },
    98193: (e, t, o) => {
      e.exports = o(38877);
    },
    94607: (e, t, o) => {
      o.d(t, { Y: () => B });
      var n = o(42891),
        r = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
      var i = void 0;
      function s() {
        return (
          void 0 === i &&
            (i = (function () {
              if (!r) return !1;
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
                  o = function () {};
                window.addEventListener("testPassiveEventSupport", o, t),
                  window.removeEventListener("testPassiveEventSupport", o, t);
              } catch (e) {}
              return e;
            })()),
          i
        );
      }
      function a(e) {
        e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice());
      }
      function l(e) {
        (this.target = e), (this.events = {});
      }
      (l.prototype.getEventHandlers = function (e, t) {
        var o,
          n =
            String(e) +
            " " +
            String(
              (o = t)
                ? !0 === o
                  ? 100
                  : (o.capture << 0) + (o.passive << 1) + (o.once << 2)
                : 0,
            );
        return (
          this.events[n] ||
            ((this.events[n] = { handlers: [], handleEvent: void 0 }),
            (this.events[n].nextHandlers = this.events[n].handlers)),
          this.events[n]
        );
      }),
        (l.prototype.handleEvent = function (e, t, o) {
          var n = this.getEventHandlers(e, t);
          (n.handlers = n.nextHandlers),
            n.handlers.forEach(function (e) {
              e && e(o);
            });
        }),
        (l.prototype.add = function (e, t, o) {
          var n = this,
            r = this.getEventHandlers(e, o);
          a(r),
            0 === r.nextHandlers.length &&
              ((r.handleEvent = this.handleEvent.bind(this, e, o)),
              this.target.addEventListener(e, r.handleEvent, o)),
            r.nextHandlers.push(t);
          var i = !0;
          return function () {
            if (i) {
              (i = !1), a(r);
              var s = r.nextHandlers.indexOf(t);
              r.nextHandlers.splice(s, 1),
                0 === r.nextHandlers.length &&
                  (n.target &&
                    n.target.removeEventListener(e, r.handleEvent, o),
                  (r.handleEvent = void 0));
            }
          };
        });
      var c = "__consolidated_events_handlers__";
      function p(e, t, o, n) {
        e[c] || (e[c] = new l(e));
        var r = (function (e) {
          if (e) return s() ? e : !!e.capture;
        })(n);
        return e[c].add(t, o, r);
      }
      var f = o(90626),
        u = o(98193);
      function v(e, t) {
        var o,
          n =
            ((o = e),
            !isNaN(parseFloat(o)) && isFinite(o)
              ? parseFloat(o)
              : "px" === o.slice(-2)
                ? parseFloat(o.slice(0, -2))
                : void 0);
        if ("number" == typeof n) return n;
        var r = (function (e) {
          if ("%" === e.slice(-1)) return parseFloat(e.slice(0, -1)) / 100;
        })(e);
        return "number" == typeof r ? r * t : void 0;
      }
      var d = "above",
        h = "inside",
        w = "below",
        m = "invisible";
      function y(e) {
        return "string" == typeof e.type;
      }
      var b;
      var g = [];
      function E(e) {
        g.push(e),
          b ||
            (b = setTimeout(function () {
              var e;
              for (b = null; (e = g.shift()); ) e();
            }, 0));
        var t = !0;
        return function () {
          if (t) {
            t = !1;
            var o = g.indexOf(e);
            -1 !== o &&
              (g.splice(o, 1), !g.length && b && (clearTimeout(b), (b = null)));
          }
        };
      }
      var T = "undefined" != typeof window,
        S = {
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
        B = (function (e) {
          function t(t) {
            var o;
            return (
              ((o = e.call(this, t) || this).refElement = function (e) {
                o._ref = e;
              }),
              o
            );
          }
          (0, n.A)(t, e);
          var r = t.prototype;
          return (
            (r.componentDidMount = function () {
              var e = this;
              T &&
                (this.cancelOnNextTick = E(function () {
                  e.cancelOnNextTick = null;
                  var t = e.props,
                    o = t.children;
                  t.debug;
                  !(function (e, t) {
                    if (e && !y(e) && !t)
                      throw new Error(
                        "<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.",
                      );
                  })(o, e._ref),
                    (e._handleScroll = e._handleScroll.bind(e)),
                    (e.scrollableAncestor = e._findScrollableAncestor()),
                    (e.scrollEventListenerUnsubscribe = p(
                      e.scrollableAncestor,
                      "scroll",
                      e._handleScroll,
                      { passive: !0 },
                    )),
                    (e.resizeEventListenerUnsubscribe = p(
                      window,
                      "resize",
                      e._handleScroll,
                      { passive: !0 },
                    )),
                    e._handleScroll(null);
                }));
            }),
            (r.componentDidUpdate = function () {
              var e = this;
              T &&
                this.scrollableAncestor &&
                (this.cancelOnNextTick ||
                  (this.cancelOnNextTick = E(function () {
                    (e.cancelOnNextTick = null), e._handleScroll(null);
                  })));
            }),
            (r.componentWillUnmount = function () {
              T &&
                (this.scrollEventListenerUnsubscribe &&
                  this.scrollEventListenerUnsubscribe(),
                this.resizeEventListenerUnsubscribe &&
                  this.resizeEventListenerUnsubscribe(),
                this.cancelOnNextTick && this.cancelOnNextTick());
            }),
            (r._findScrollableAncestor = function () {
              var e = this.props,
                t = e.horizontal,
                n = e.scrollableAncestor;
              if (n)
                return (function (e) {
                  return "window" === e ? o.g.window : e;
                })(n);
              for (var r = this._ref; r.parentNode; ) {
                if ((r = r.parentNode) === document.body) return window;
                var i = window.getComputedStyle(r),
                  s =
                    (t
                      ? i.getPropertyValue("overflow-x")
                      : i.getPropertyValue("overflow-y")) ||
                    i.getPropertyValue("overflow");
                if ("auto" === s || "scroll" === s || "overlay" === s) return r;
              }
              return window;
            }),
            (r._handleScroll = function (e) {
              if (this._ref) {
                var t = this._getBounds(),
                  o = (function (e) {
                    return e.viewportBottom - e.viewportTop == 0
                      ? m
                      : (e.viewportTop <= e.waypointTop &&
                            e.waypointTop <= e.viewportBottom) ||
                          (e.viewportTop <= e.waypointBottom &&
                            e.waypointBottom <= e.viewportBottom) ||
                          (e.waypointTop <= e.viewportTop &&
                            e.viewportBottom <= e.waypointBottom)
                        ? h
                        : e.viewportBottom < e.waypointTop
                          ? w
                          : e.waypointTop < e.viewportTop
                            ? d
                            : m;
                  })(t),
                  n = this._previousPosition,
                  r = this.props,
                  i = (r.debug, r.onPositionChange),
                  s = r.onEnter,
                  a = r.onLeave,
                  l = r.fireOnRapidScroll;
                if (((this._previousPosition = o), n !== o)) {
                  var c = {
                    currentPosition: o,
                    previousPosition: n,
                    event: e,
                    waypointTop: t.waypointTop,
                    waypointBottom: t.waypointBottom,
                    viewportTop: t.viewportTop,
                    viewportBottom: t.viewportBottom,
                  };
                  i.call(this, c),
                    o === h ? s.call(this, c) : n === h && a.call(this, c),
                    l &&
                      ((n === w && o === d) || (n === d && o === w)) &&
                      (s.call(this, {
                        currentPosition: h,
                        previousPosition: n,
                        event: e,
                        waypointTop: t.waypointTop,
                        waypointBottom: t.waypointBottom,
                        viewportTop: t.viewportTop,
                        viewportBottom: t.viewportBottom,
                      }),
                      a.call(this, {
                        currentPosition: o,
                        previousPosition: h,
                        event: e,
                        waypointTop: t.waypointTop,
                        waypointBottom: t.waypointBottom,
                        viewportTop: t.viewportTop,
                        viewportBottom: t.viewportBottom,
                      }));
                }
              }
            }),
            (r._getBounds = function () {
              var e,
                t,
                o = this.props,
                n = o.horizontal,
                r = (o.debug, this._ref.getBoundingClientRect()),
                i = r.left,
                s = r.top,
                a = r.right,
                l = r.bottom,
                c = n ? i : s,
                p = n ? a : l;
              this.scrollableAncestor === window
                ? ((e = n ? window.innerWidth : window.innerHeight), (t = 0))
                : ((e = n
                    ? this.scrollableAncestor.offsetWidth
                    : this.scrollableAncestor.offsetHeight),
                  (t = n
                    ? this.scrollableAncestor.getBoundingClientRect().left
                    : this.scrollableAncestor.getBoundingClientRect().top));
              var f = this.props,
                u = f.bottomOffset;
              return {
                waypointTop: c,
                waypointBottom: p,
                viewportTop: t + v(f.topOffset, e),
                viewportBottom: t + e - v(u, e),
              };
            }),
            (r.render = function () {
              var e = this,
                t = this.props.children;
              if (!t)
                return f.createElement("span", {
                  ref: this.refElement,
                  style: { fontSize: 0 },
                });
              if (y(t) || (0, u.isForwardRef)(t)) {
                return f.cloneElement(t, {
                  ref: function (o) {
                    e.refElement(o),
                      t.ref &&
                        ("function" == typeof t.ref
                          ? t.ref(o)
                          : (t.ref.current = o));
                  },
                });
              }
              return f.cloneElement(t, { innerRef: this.refElement });
            }),
            t
          );
        })(f.PureComponent);
      (B.above = d),
        (B.below = w),
        (B.inside = h),
        (B.invisible = m),
        (B.defaultProps = S),
        (B.displayName = "Waypoint");
    },
  },
]);
