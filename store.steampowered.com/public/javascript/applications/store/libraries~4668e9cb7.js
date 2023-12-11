/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7532],
  {
    74802: (e, t, n) => {
      n.d(t, { h: () => _ });
      var o = n(74289),
        i = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
      var r = void 0;
      function s() {
        return (
          void 0 === r &&
            (r = (function () {
              if (!i) return !1;
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
      function l(e) {
        e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice());
      }
      function a(e) {
        (this.target = e), (this.events = {});
      }
      (a.prototype.getEventHandlers = function (e, t) {
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
        (a.prototype.handleEvent = function (e, t, n) {
          var o = this.getEventHandlers(e, t);
          (o.handlers = o.nextHandlers),
            o.handlers.forEach(function (e) {
              e && e(n);
            });
        }),
        (a.prototype.add = function (e, t, n) {
          var o = this,
            i = this.getEventHandlers(e, n);
          l(i),
            0 === i.nextHandlers.length &&
              ((i.handleEvent = this.handleEvent.bind(this, e, n)),
              this.target.addEventListener(e, i.handleEvent, n)),
            i.nextHandlers.push(t);
          var r = !0;
          return function () {
            if (r) {
              (r = !1), l(i);
              var s = i.nextHandlers.indexOf(t);
              i.nextHandlers.splice(s, 1),
                0 === i.nextHandlers.length &&
                  (o.target &&
                    o.target.removeEventListener(e, i.handleEvent, n),
                  (i.handleEvent = void 0));
            }
          };
        });
      var p = "__consolidated_events_handlers__";
      function c(e, t, n, o) {
        e[p] || (e[p] = new a(e));
        var i = (function (e) {
          if (e) return s() ? e : !!e.capture;
        })(o);
        return e[p].add(t, n, i);
      }
      var u = n(89526),
        v = n(338);
      function d(e, t) {
        var n,
          o =
            ((n = e),
            !isNaN(parseFloat(n)) && isFinite(n)
              ? parseFloat(n)
              : "px" === n.slice(-2)
              ? parseFloat(n.slice(0, -2))
              : void 0);
        if ("number" == typeof o) return o;
        var i = (function (e) {
          if ("%" === e.slice(-1)) return parseFloat(e.slice(0, -1)) / 100;
        })(e);
        return "number" == typeof i ? i * t : void 0;
      }
      var f = "above",
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
            var n = g.indexOf(e);
            -1 !== n &&
              (g.splice(n, 1), !g.length && b && (clearTimeout(b), (b = null)));
          }
        };
      }
      var T = "undefined" != typeof window,
        B = {
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
        _ = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).refElement = function (e) {
                n._ref = e;
              }),
              n
            );
          }
          (0, o.Z)(t, e);
          var i = t.prototype;
          return (
            (i.componentDidMount = function () {
              var e = this;
              T &&
                (this.cancelOnNextTick = E(function () {
                  e.cancelOnNextTick = null;
                  var t = e.props,
                    n = t.children;
                  t.debug;
                  !(function (e, t) {
                    if (e && !y(e) && !t)
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
            }),
            (i.componentDidUpdate = function () {
              var e = this;
              T &&
                this.scrollableAncestor &&
                (this.cancelOnNextTick ||
                  (this.cancelOnNextTick = E(function () {
                    (e.cancelOnNextTick = null), e._handleScroll(null);
                  })));
            }),
            (i.componentWillUnmount = function () {
              T &&
                (this.scrollEventListenerUnsubscribe &&
                  this.scrollEventListenerUnsubscribe(),
                this.resizeEventListenerUnsubscribe &&
                  this.resizeEventListenerUnsubscribe(),
                this.cancelOnNextTick && this.cancelOnNextTick());
            }),
            (i._findScrollableAncestor = function () {
              var e = this.props,
                t = e.horizontal,
                o = e.scrollableAncestor;
              if (o)
                return (function (e) {
                  return "window" === e ? n.g.window : e;
                })(o);
              for (var i = this._ref; i.parentNode; ) {
                if ((i = i.parentNode) === document.body) return window;
                var r = window.getComputedStyle(i),
                  s =
                    (t
                      ? r.getPropertyValue("overflow-x")
                      : r.getPropertyValue("overflow-y")) ||
                    r.getPropertyValue("overflow");
                if ("auto" === s || "scroll" === s || "overlay" === s) return i;
              }
              return window;
            }),
            (i._handleScroll = function (e) {
              if (this._ref) {
                var t = this._getBounds(),
                  n = (function (e) {
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
                      ? f
                      : m;
                  })(t),
                  o = this._previousPosition,
                  i = this.props,
                  r = (i.debug, i.onPositionChange),
                  s = i.onEnter,
                  l = i.onLeave,
                  a = i.fireOnRapidScroll;
                if (((this._previousPosition = n), o !== n)) {
                  var p = {
                    currentPosition: n,
                    previousPosition: o,
                    event: e,
                    waypointTop: t.waypointTop,
                    waypointBottom: t.waypointBottom,
                    viewportTop: t.viewportTop,
                    viewportBottom: t.viewportBottom,
                  };
                  r.call(this, p),
                    n === h ? s.call(this, p) : o === h && l.call(this, p),
                    a &&
                      ((o === w && n === f) || (o === f && n === w)) &&
                      (s.call(this, {
                        currentPosition: h,
                        previousPosition: o,
                        event: e,
                        waypointTop: t.waypointTop,
                        waypointBottom: t.waypointBottom,
                        viewportTop: t.viewportTop,
                        viewportBottom: t.viewportBottom,
                      }),
                      l.call(this, {
                        currentPosition: n,
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
            (i._getBounds = function () {
              var e,
                t,
                n = this.props,
                o = n.horizontal,
                i = (n.debug, this._ref.getBoundingClientRect()),
                r = i.left,
                s = i.top,
                l = i.right,
                a = i.bottom,
                p = o ? r : s,
                c = o ? l : a;
              this.scrollableAncestor === window
                ? ((e = o ? window.innerWidth : window.innerHeight), (t = 0))
                : ((e = o
                    ? this.scrollableAncestor.offsetWidth
                    : this.scrollableAncestor.offsetHeight),
                  (t = o
                    ? this.scrollableAncestor.getBoundingClientRect().left
                    : this.scrollableAncestor.getBoundingClientRect().top));
              var u = this.props,
                v = u.bottomOffset;
              return {
                waypointTop: p,
                waypointBottom: c,
                viewportTop: t + d(u.topOffset, e),
                viewportBottom: t + e - d(v, e),
              };
            }),
            (i.render = function () {
              var e = this,
                t = this.props.children;
              if (!t)
                return u.createElement("span", {
                  ref: this.refElement,
                  style: { fontSize: 0 },
                });
              if (y(t) || (0, v.isForwardRef)(t)) {
                return u.cloneElement(t, {
                  ref: function (n) {
                    e.refElement(n),
                      t.ref &&
                        ("function" == typeof t.ref
                          ? t.ref(n)
                          : (t.ref.current = n));
                  },
                });
              }
              return u.cloneElement(t, { innerRef: this.refElement });
            }),
            t
          );
        })(u.PureComponent);
      (_.above = f),
        (_.below = w),
        (_.inside = h),
        (_.invisible = m),
        (_.defaultProps = B),
        (_.displayName = "Waypoint");
    },
  },
]);
