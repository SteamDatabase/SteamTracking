/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [7872],
  {
    38877: (e, t) => {
      var o,
        n = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        c = Symbol.for("react.provider"),
        l = Symbol.for("react.context"),
        p = Symbol.for("react.server_context"),
        f = Symbol.for("react.forward_ref"),
        u = Symbol.for("react.suspense"),
        d = Symbol.for("react.suspense_list"),
        h = Symbol.for("react.memo"),
        v = Symbol.for("react.lazy"),
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
                case d:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case p:
                    case l:
                    case f:
                    case v:
                    case h:
                    case c:
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
      o.d(t, { Y: () => T });
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
      function c(e) {
        (this.target = e), (this.events = {});
      }
      (c.prototype.getEventHandlers = function (e, t) {
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
        (c.prototype.handleEvent = function (e, t, o) {
          var n = this.getEventHandlers(e, t);
          (n.handlers = n.nextHandlers),
            n.handlers.forEach(function (e) {
              e && e(o);
            });
        }),
        (c.prototype.add = function (e, t, o) {
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
      var l = "__consolidated_events_handlers__";
      function p(e, t, o, n) {
        e[l] || (e[l] = new c(e));
        var r = (function (e) {
          if (e) return s() ? e : !!e.capture;
        })(n);
        return e[l].add(t, o, r);
      }
      var f = o(90626),
        u = o(98193);
      function d(e, t) {
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
      var h = "above",
        v = "inside",
        w = "below",
        m = "invisible";
      function b(e) {
        return "string" == typeof e.type;
      }
      var y;
      var g = [];
      function P(e) {
        g.push(e),
          y ||
            (y = setTimeout(function () {
              var e;
              for (y = null; (e = g.shift()); ) e();
            }, 0));
        var t = !0;
        return function () {
          if (t) {
            t = !1;
            var o = g.indexOf(e);
            -1 !== o &&
              (g.splice(o, 1), !g.length && y && (clearTimeout(y), (y = null)));
          }
        };
      }
      var E = "undefined" != typeof window,
        x = {
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
        T = (function (e) {
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
              E &&
                (this.cancelOnNextTick = P(function () {
                  e.cancelOnNextTick = null;
                  var t = e.props,
                    o = t.children;
                  t.debug;
                  !(function (e, t) {
                    if (e && !b(e) && !t)
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
              E &&
                this.scrollableAncestor &&
                (this.cancelOnNextTick ||
                  (this.cancelOnNextTick = P(function () {
                    (e.cancelOnNextTick = null), e._handleScroll(null);
                  })));
            }),
            (r.componentWillUnmount = function () {
              E &&
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
                        ? v
                        : e.viewportBottom < e.waypointTop
                          ? w
                          : e.waypointTop < e.viewportTop
                            ? h
                            : m;
                  })(t),
                  n = this._previousPosition,
                  r = this.props,
                  i = (r.debug, r.onPositionChange),
                  s = r.onEnter,
                  a = r.onLeave,
                  c = r.fireOnRapidScroll;
                if (((this._previousPosition = o), n !== o)) {
                  var l = {
                    currentPosition: o,
                    previousPosition: n,
                    event: e,
                    waypointTop: t.waypointTop,
                    waypointBottom: t.waypointBottom,
                    viewportTop: t.viewportTop,
                    viewportBottom: t.viewportBottom,
                  };
                  i.call(this, l),
                    o === v ? s.call(this, l) : n === v && a.call(this, l),
                    c &&
                      ((n === w && o === h) || (n === h && o === w)) &&
                      (s.call(this, {
                        currentPosition: v,
                        previousPosition: n,
                        event: e,
                        waypointTop: t.waypointTop,
                        waypointBottom: t.waypointBottom,
                        viewportTop: t.viewportTop,
                        viewportBottom: t.viewportBottom,
                      }),
                      a.call(this, {
                        currentPosition: o,
                        previousPosition: v,
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
                c = r.bottom,
                l = n ? i : s,
                p = n ? a : c;
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
                waypointTop: l,
                waypointBottom: p,
                viewportTop: t + d(f.topOffset, e),
                viewportBottom: t + e - d(u, e),
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
              if (b(t) || (0, u.isForwardRef)(t)) {
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
      (T.above = h),
        (T.below = w),
        (T.inside = v),
        (T.invisible = m),
        (T.defaultProps = x),
        (T.displayName = "Waypoint");
    },
    30724: (e, t, o) => {
      o.d(t, { q: () => a });
      var n = o(48767),
        r = o(45995),
        i = class extends n.$ {
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
            var o, n;
            const { state: i } = e,
              s = super.createResult(e, t),
              {
                isFetching: a,
                isRefetching: c,
                isError: l,
                isRefetchError: p,
              } = s,
              f =
                null == (n = null == (o = i.fetchMeta) ? void 0 : o.fetchMore)
                  ? void 0
                  : n.direction,
              u = l && "forward" === f,
              d = a && "forward" === f,
              h = l && "backward" === f,
              v = a && "backward" === f;
            return {
              ...s,
              fetchNextPage: this.fetchNextPage,
              fetchPreviousPage: this.fetchPreviousPage,
              hasNextPage: (0, r.rB)(t, i.data),
              hasPreviousPage: (0, r.RQ)(t, i.data),
              isFetchNextPageError: u,
              isFetchingNextPage: d,
              isFetchPreviousPageError: h,
              isFetchingPreviousPage: v,
              isRefetchError: p && !u && !h,
              isRefetching: c && !d && !v,
            };
          }
        },
        s = o(25081);
      function a(e, t) {
        return (0, s.t)(e, i, t);
      }
    },
  },
]);
