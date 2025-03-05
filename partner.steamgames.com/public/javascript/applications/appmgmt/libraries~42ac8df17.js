/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [1134],
  {
    38877: (t, e) => {
      var n,
        s = Symbol.for("react.element"),
        o = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        c = Symbol.for("react.provider"),
        u = Symbol.for("react.context"),
        l = Symbol.for("react.server_context"),
        p = Symbol.for("react.forward_ref"),
        h = Symbol.for("react.suspense"),
        d = Symbol.for("react.suspense_list"),
        f = Symbol.for("react.memo"),
        _ = Symbol.for("react.lazy"),
        v = Symbol.for("react.offscreen");
      function m(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case s:
              switch ((t = t.type)) {
                case r:
                case a:
                case i:
                case h:
                case d:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case l:
                    case u:
                    case p:
                    case _:
                    case f:
                    case c:
                      return t;
                    default:
                      return e;
                  }
              }
            case o:
              return e;
          }
        }
      }
      (n = Symbol.for("react.module.reference")),
        (e.isForwardRef = function (t) {
          return m(t) === p;
        }),
        (e.isFragment = function (t) {
          return m(t) === r;
        });
    },
    98193: (t, e, n) => {
      t.exports = n(38877);
    },
    94607: (t, e, n) => {
      n.d(e, { Y: () => x });
      var s = n(42891),
        o = !(
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
              var t = !1;
              try {
                var e = Object.defineProperty({}, "passive", {
                    get: function () {
                      t = !0;
                    },
                  }),
                  n = function () {};
                window.addEventListener("testPassiveEventSupport", n, e),
                  window.removeEventListener("testPassiveEventSupport", n, e);
              } catch (t) {}
              return t;
            })()),
          r
        );
      }
      function a(t) {
        t.handlers === t.nextHandlers && (t.nextHandlers = t.handlers.slice());
      }
      function c(t) {
        (this.target = t), (this.events = {});
      }
      (c.prototype.getEventHandlers = function (t, e) {
        var n,
          s =
            String(t) +
            " " +
            String(
              (n = e)
                ? !0 === n
                  ? 100
                  : (n.capture << 0) + (n.passive << 1) + (n.once << 2)
                : 0,
            );
        return (
          this.events[s] ||
            ((this.events[s] = { handlers: [], handleEvent: void 0 }),
            (this.events[s].nextHandlers = this.events[s].handlers)),
          this.events[s]
        );
      }),
        (c.prototype.handleEvent = function (t, e, n) {
          var s = this.getEventHandlers(t, e);
          (s.handlers = s.nextHandlers),
            s.handlers.forEach(function (t) {
              t && t(n);
            });
        }),
        (c.prototype.add = function (t, e, n) {
          var s = this,
            o = this.getEventHandlers(t, n);
          a(o),
            0 === o.nextHandlers.length &&
              ((o.handleEvent = this.handleEvent.bind(this, t, n)),
              this.target.addEventListener(t, o.handleEvent, n)),
            o.nextHandlers.push(e);
          var r = !0;
          return function () {
            if (r) {
              (r = !1), a(o);
              var i = o.nextHandlers.indexOf(e);
              o.nextHandlers.splice(i, 1),
                0 === o.nextHandlers.length &&
                  (s.target &&
                    s.target.removeEventListener(t, o.handleEvent, n),
                  (o.handleEvent = void 0));
            }
          };
        });
      var u = "__consolidated_events_handlers__";
      function l(t, e, n, s) {
        t[u] || (t[u] = new c(t));
        var o = (function (t) {
          if (t) return i() ? t : !!t.capture;
        })(s);
        return t[u].add(e, n, o);
      }
      var p = n(90626),
        h = n(98193);
      function d(t, e) {
        var n,
          s =
            ((n = t),
            !isNaN(parseFloat(n)) && isFinite(n)
              ? parseFloat(n)
              : "px" === n.slice(-2)
                ? parseFloat(n.slice(0, -2))
                : void 0);
        if ("number" == typeof s) return s;
        var o = (function (t) {
          if ("%" === t.slice(-1)) return parseFloat(t.slice(0, -1)) / 100;
        })(t);
        return "number" == typeof o ? o * e : void 0;
      }
      var f = "above",
        _ = "inside",
        v = "below",
        m = "invisible";
      function g(t) {
        return "string" == typeof t.type;
      }
      var b;
      var y = [];
      function w(t) {
        y.push(t),
          b ||
            (b = setTimeout(function () {
              var t;
              for (b = null; (t = y.shift()); ) t();
            }, 0));
        var e = !0;
        return function () {
          if (e) {
            e = !1;
            var n = y.indexOf(t);
            -1 !== n &&
              (y.splice(n, 1), !y.length && b && (clearTimeout(b), (b = null)));
          }
        };
      }
      var S = "undefined" != typeof window,
        E = {
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
        x = (function (t) {
          function e(e) {
            var n;
            return (
              ((n = t.call(this, e) || this).refElement = function (t) {
                n._ref = t;
              }),
              n
            );
          }
          (0, s.A)(e, t);
          var o = e.prototype;
          return (
            (o.componentDidMount = function () {
              var t = this;
              S &&
                (this.cancelOnNextTick = w(function () {
                  t.cancelOnNextTick = null;
                  var e = t.props,
                    n = e.children;
                  e.debug;
                  !(function (t, e) {
                    if (t && !g(t) && !e)
                      throw new Error(
                        "<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.",
                      );
                  })(n, t._ref),
                    (t._handleScroll = t._handleScroll.bind(t)),
                    (t.scrollableAncestor = t._findScrollableAncestor()),
                    (t.scrollEventListenerUnsubscribe = l(
                      t.scrollableAncestor,
                      "scroll",
                      t._handleScroll,
                      { passive: !0 },
                    )),
                    (t.resizeEventListenerUnsubscribe = l(
                      window,
                      "resize",
                      t._handleScroll,
                      { passive: !0 },
                    )),
                    t._handleScroll(null);
                }));
            }),
            (o.componentDidUpdate = function () {
              var t = this;
              S &&
                this.scrollableAncestor &&
                (this.cancelOnNextTick ||
                  (this.cancelOnNextTick = w(function () {
                    (t.cancelOnNextTick = null), t._handleScroll(null);
                  })));
            }),
            (o.componentWillUnmount = function () {
              S &&
                (this.scrollEventListenerUnsubscribe &&
                  this.scrollEventListenerUnsubscribe(),
                this.resizeEventListenerUnsubscribe &&
                  this.resizeEventListenerUnsubscribe(),
                this.cancelOnNextTick && this.cancelOnNextTick());
            }),
            (o._findScrollableAncestor = function () {
              var t = this.props,
                e = t.horizontal,
                s = t.scrollableAncestor;
              if (s)
                return (function (t) {
                  return "window" === t ? n.g.window : t;
                })(s);
              for (var o = this._ref; o.parentNode; ) {
                if ((o = o.parentNode) === document.body) return window;
                var r = window.getComputedStyle(o),
                  i =
                    (e
                      ? r.getPropertyValue("overflow-x")
                      : r.getPropertyValue("overflow-y")) ||
                    r.getPropertyValue("overflow");
                if ("auto" === i || "scroll" === i || "overlay" === i) return o;
              }
              return window;
            }),
            (o._handleScroll = function (t) {
              if (this._ref) {
                var e = this._getBounds(),
                  n = (function (t) {
                    return t.viewportBottom - t.viewportTop == 0
                      ? m
                      : (t.viewportTop <= t.waypointTop &&
                            t.waypointTop <= t.viewportBottom) ||
                          (t.viewportTop <= t.waypointBottom &&
                            t.waypointBottom <= t.viewportBottom) ||
                          (t.waypointTop <= t.viewportTop &&
                            t.viewportBottom <= t.waypointBottom)
                        ? _
                        : t.viewportBottom < t.waypointTop
                          ? v
                          : t.waypointTop < t.viewportTop
                            ? f
                            : m;
                  })(e),
                  s = this._previousPosition,
                  o = this.props,
                  r = (o.debug, o.onPositionChange),
                  i = o.onEnter,
                  a = o.onLeave,
                  c = o.fireOnRapidScroll;
                if (((this._previousPosition = n), s !== n)) {
                  var u = {
                    currentPosition: n,
                    previousPosition: s,
                    event: t,
                    waypointTop: e.waypointTop,
                    waypointBottom: e.waypointBottom,
                    viewportTop: e.viewportTop,
                    viewportBottom: e.viewportBottom,
                  };
                  r.call(this, u),
                    n === _ ? i.call(this, u) : s === _ && a.call(this, u),
                    c &&
                      ((s === v && n === f) || (s === f && n === v)) &&
                      (i.call(this, {
                        currentPosition: _,
                        previousPosition: s,
                        event: t,
                        waypointTop: e.waypointTop,
                        waypointBottom: e.waypointBottom,
                        viewportTop: e.viewportTop,
                        viewportBottom: e.viewportBottom,
                      }),
                      a.call(this, {
                        currentPosition: n,
                        previousPosition: _,
                        event: t,
                        waypointTop: e.waypointTop,
                        waypointBottom: e.waypointBottom,
                        viewportTop: e.viewportTop,
                        viewportBottom: e.viewportBottom,
                      }));
                }
              }
            }),
            (o._getBounds = function () {
              var t,
                e,
                n = this.props,
                s = n.horizontal,
                o = (n.debug, this._ref.getBoundingClientRect()),
                r = o.left,
                i = o.top,
                a = o.right,
                c = o.bottom,
                u = s ? r : i,
                l = s ? a : c;
              this.scrollableAncestor === window
                ? ((t = s ? window.innerWidth : window.innerHeight), (e = 0))
                : ((t = s
                    ? this.scrollableAncestor.offsetWidth
                    : this.scrollableAncestor.offsetHeight),
                  (e = s
                    ? this.scrollableAncestor.getBoundingClientRect().left
                    : this.scrollableAncestor.getBoundingClientRect().top));
              var p = this.props,
                h = p.bottomOffset;
              return {
                waypointTop: u,
                waypointBottom: l,
                viewportTop: e + d(p.topOffset, t),
                viewportBottom: e + t - d(h, t),
              };
            }),
            (o.render = function () {
              var t = this,
                e = this.props.children;
              if (!e)
                return p.createElement("span", {
                  ref: this.refElement,
                  style: { fontSize: 0 },
                });
              if (g(e) || (0, h.isForwardRef)(e)) {
                return p.cloneElement(e, {
                  ref: function (n) {
                    t.refElement(n),
                      e.ref &&
                        ("function" == typeof e.ref
                          ? e.ref(n)
                          : (e.ref.current = n));
                  },
                });
              }
              return p.cloneElement(e, { innerRef: this.refElement });
            }),
            e
          );
        })(p.PureComponent);
      (x.above = f),
        (x.below = v),
        (x.inside = _),
        (x.invisible = m),
        (x.defaultProps = E),
        (x.displayName = "Waypoint");
    },
    82715: (t, e, n) => {
      n.d(e, { tH: () => J });
      const s = "8.27.0",
        o = globalThis;
      function r(t, e, n) {
        const r = n || o,
          i = (r.__SENTRY__ = r.__SENTRY__ || {}),
          a = (i[s] = i[s] || {});
        return a[t] || (a[t] = e());
      }
      function i() {
        return a(o), o;
      }
      function a(t) {
        const e = (t.__SENTRY__ = t.__SENTRY__ || {});
        return (e.version = e.version || s), (e[s] = e[s] || {});
      }
      const c = Object.prototype.toString;
      function u(t, e) {
        return c.call(t) === `[object ${e}]`;
      }
      function l(t) {
        return u(t, "Object");
      }
      function p(t, e) {
        try {
          return t instanceof e;
        } catch (t) {
          return !1;
        }
      }
      function h() {
        const t = o,
          e = t.crypto || t.msCrypto;
        let n = () => 16 * Math.random();
        try {
          if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
          e &&
            e.getRandomValues &&
            (n = () => {
              const t = new Uint8Array(1);
              return e.getRandomValues(t), t[0];
            });
        } catch (t) {}
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (t) =>
          (t ^ ((15 & n()) >> (t / 4))).toString(16),
        );
      }
      function d() {
        return { traceId: h(), spanId: h().substring(16) };
      }
      const f = 1e3;
      function _() {
        return Date.now() / f;
      }
      const v = (function () {
        const { performance: t } = o;
        if (!t || !t.now) return _;
        const e = Date.now() - t.now(),
          n = null == t.timeOrigin ? e : t.timeOrigin;
        return () => (n + t.now()) / f;
      })();
      let m;
      (() => {
        const { performance: t } = o;
        if (!t || !t.now) return void (m = "none");
        const e = 36e5,
          n = t.now(),
          s = Date.now(),
          r = t.timeOrigin ? Math.abs(t.timeOrigin + n - s) : e,
          i = r < e,
          a = t.timing && t.timing.navigationStart,
          c = "number" == typeof a ? Math.abs(a + n - s) : e;
        i || c < e
          ? r <= c
            ? ((m = "timeOrigin"), t.timeOrigin)
            : (m = "navigationStart")
          : (m = "dateNow");
      })();
      const g = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        b = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        y = {};
      function w(t) {
        if (!("console" in o)) return t();
        const e = o.console,
          n = {},
          s = Object.keys(y);
        s.forEach((t) => {
          const s = y[t];
          (n[t] = e[t]), (e[t] = s);
        });
        try {
          return t();
        } finally {
          s.forEach((t) => {
            e[t] = n[t];
          });
        }
      }
      const S = (function () {
        let t = !1;
        const e = {
          enable: () => {
            t = !0;
          },
          disable: () => {
            t = !1;
          },
          isEnabled: () => t,
        };
        return (
          g
            ? b.forEach((n) => {
                e[n] = (...e) => {
                  t &&
                    w(() => {
                      o.console[n](`Sentry Logger [${n}]:`, ...e);
                    });
                };
              })
            : b.forEach((t) => {
                e[t] = () => {};
              }),
          e
        );
      })();
      function E(t, e = {}) {
        if (
          (e.user &&
            (!t.ipAddress &&
              e.user.ip_address &&
              (t.ipAddress = e.user.ip_address),
            t.did ||
              e.did ||
              (t.did = e.user.id || e.user.email || e.user.username)),
          (t.timestamp = e.timestamp || v()),
          e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
          e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
          e.sid && (t.sid = 32 === e.sid.length ? e.sid : h()),
          void 0 !== e.init && (t.init = e.init),
          !t.did && e.did && (t.did = `${e.did}`),
          "number" == typeof e.started && (t.started = e.started),
          t.ignoreDuration)
        )
          t.duration = void 0;
        else if ("number" == typeof e.duration) t.duration = e.duration;
        else {
          const e = t.timestamp - t.started;
          t.duration = e >= 0 ? e : 0;
        }
        e.release && (t.release = e.release),
          e.environment && (t.environment = e.environment),
          !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
          !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
          "number" == typeof e.errors && (t.errors = e.errors),
          e.status && (t.status = e.status);
      }
      function x(t, e, n) {
        try {
          Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0,
          });
        } catch (n) {
          g &&
            S.log(`Failed to add non-enumerable property "${e}" to object`, t);
        }
      }
      const R = "_sentrySpan";
      function k(t, e) {
        e ? x(t, R, e) : delete t[R];
      }
      function C(t) {
        return t[R];
      }
      class O {
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
            (this._propagationContext = d());
        }
        clone() {
          const t = new O();
          return (
            (t._breadcrumbs = [...this._breadcrumbs]),
            (t._tags = { ...this._tags }),
            (t._extra = { ...this._extra }),
            (t._contexts = { ...this._contexts }),
            (t._user = this._user),
            (t._level = this._level),
            (t._session = this._session),
            (t._transactionName = this._transactionName),
            (t._fingerprint = this._fingerprint),
            (t._eventProcessors = [...this._eventProcessors]),
            (t._requestSession = this._requestSession),
            (t._attachments = [...this._attachments]),
            (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
            (t._propagationContext = { ...this._propagationContext }),
            (t._client = this._client),
            (t._lastEventId = this._lastEventId),
            k(t, C(this)),
            t
          );
        }
        setClient(t) {
          this._client = t;
        }
        setLastEventId(t) {
          this._lastEventId = t;
        }
        getClient() {
          return this._client;
        }
        lastEventId() {
          return this._lastEventId;
        }
        addScopeListener(t) {
          this._scopeListeners.push(t);
        }
        addEventProcessor(t) {
          return this._eventProcessors.push(t), this;
        }
        setUser(t) {
          return (
            (this._user = t || {
              email: void 0,
              id: void 0,
              ip_address: void 0,
              username: void 0,
            }),
            this._session && E(this._session, { user: t }),
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
        setRequestSession(t) {
          return (this._requestSession = t), this;
        }
        setTags(t) {
          return (
            (this._tags = { ...this._tags, ...t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setTag(t, e) {
          return (
            (this._tags = { ...this._tags, [t]: e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtras(t) {
          return (
            (this._extra = { ...this._extra, ...t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtra(t, e) {
          return (
            (this._extra = { ...this._extra, [t]: e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setFingerprint(t) {
          return (this._fingerprint = t), this._notifyScopeListeners(), this;
        }
        setLevel(t) {
          return (this._level = t), this._notifyScopeListeners(), this;
        }
        setTransactionName(t) {
          return (
            (this._transactionName = t), this._notifyScopeListeners(), this
          );
        }
        setContext(t, e) {
          return (
            null === e ? delete this._contexts[t] : (this._contexts[t] = e),
            this._notifyScopeListeners(),
            this
          );
        }
        setSession(t) {
          return (
            t ? (this._session = t) : delete this._session,
            this._notifyScopeListeners(),
            this
          );
        }
        getSession() {
          return this._session;
        }
        update(t) {
          if (!t) return this;
          const e = "function" == typeof t ? t(this) : t,
            [n, s] =
              e instanceof I
                ? [e.getScopeData(), e.getRequestSession()]
                : l(e)
                  ? [t, t.requestSession]
                  : [],
            {
              tags: o,
              extra: r,
              user: i,
              contexts: a,
              level: c,
              fingerprint: u = [],
              propagationContext: p,
            } = n || {};
          return (
            (this._tags = { ...this._tags, ...o }),
            (this._extra = { ...this._extra, ...r }),
            (this._contexts = { ...this._contexts, ...a }),
            i && Object.keys(i).length && (this._user = i),
            c && (this._level = c),
            u.length && (this._fingerprint = u),
            p && (this._propagationContext = p),
            s && (this._requestSession = s),
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
            k(this, void 0),
            (this._attachments = []),
            (this._propagationContext = d()),
            this._notifyScopeListeners(),
            this
          );
        }
        addBreadcrumb(t, e) {
          const n = "number" == typeof e ? e : 100;
          if (n <= 0) return this;
          const s = { timestamp: _(), ...t },
            o = this._breadcrumbs;
          return (
            o.push(s),
            (this._breadcrumbs = o.length > n ? o.slice(-n) : o),
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
        addAttachment(t) {
          return this._attachments.push(t), this;
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
            span: C(this),
          };
        }
        setSDKProcessingMetadata(t) {
          return (
            (this._sdkProcessingMetadata = {
              ...this._sdkProcessingMetadata,
              ...t,
            }),
            this
          );
        }
        setPropagationContext(t) {
          return (this._propagationContext = t), this;
        }
        getPropagationContext() {
          return this._propagationContext;
        }
        captureException(t, e) {
          const n = e && e.event_id ? e.event_id : h();
          if (!this._client)
            return (
              S.warn(
                "No client configured on scope - will not capture exception!",
              ),
              n
            );
          const s = new Error("Sentry syntheticException");
          return (
            this._client.captureException(
              t,
              {
                originalException: t,
                syntheticException: s,
                ...e,
                event_id: n,
              },
              this,
            ),
            n
          );
        }
        captureMessage(t, e, n) {
          const s = n && n.event_id ? n.event_id : h();
          if (!this._client)
            return (
              S.warn(
                "No client configured on scope - will not capture message!",
              ),
              s
            );
          const o = new Error(t);
          return (
            this._client.captureMessage(
              t,
              e,
              {
                originalException: t,
                syntheticException: o,
                ...n,
                event_id: s,
              },
              this,
            ),
            s
          );
        }
        captureEvent(t, e) {
          const n = e && e.event_id ? e.event_id : h();
          return this._client
            ? (this._client.captureEvent(t, { ...e, event_id: n }, this), n)
            : (S.warn(
                "No client configured on scope - will not capture event!",
              ),
              n);
        }
        _notifyScopeListeners() {
          this._notifyingListeners ||
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((t) => {
              t(this);
            }),
            (this._notifyingListeners = !1));
        }
      }
      const I = O;
      class T {
        constructor(t, e) {
          let n, s;
          (n = t || new I()),
            (s = e || new I()),
            (this._stack = [{ scope: n }]),
            (this._isolationScope = s);
        }
        withScope(t) {
          const e = this._pushScope();
          let n;
          try {
            n = t(e);
          } catch (t) {
            throw (this._popScope(), t);
          }
          return (
            (s = n),
            Boolean(s && s.then && "function" == typeof s.then)
              ? n.then(
                  (t) => (this._popScope(), t),
                  (t) => {
                    throw (this._popScope(), t);
                  },
                )
              : (this._popScope(), n)
          );
          var s;
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
          const t = this.getScope().clone();
          return this._stack.push({ client: this.getClient(), scope: t }), t;
        }
        _popScope() {
          return !(this._stack.length <= 1) && !!this._stack.pop();
        }
      }
      function L() {
        const t = a(i());
        return (t.stack =
          t.stack ||
          new T(
            r("defaultCurrentScope", () => new I()),
            r("defaultIsolationScope", () => new I()),
          ));
      }
      function B(t) {
        return L().withScope(t);
      }
      function $(t, e) {
        const n = L();
        return n.withScope(() => ((n.getStackTop().scope = t), e(t)));
      }
      function P(t) {
        return L().withScope(() => t(L().getIsolationScope()));
      }
      function D(t) {
        const e = a(t);
        return e.acs
          ? e.acs
          : {
              withIsolationScope: P,
              withScope: B,
              withSetScope: $,
              withSetIsolationScope: (t, e) => P(e),
              getCurrentScope: () => L().getScope(),
              getIsolationScope: () => L().getIsolationScope(),
            };
      }
      function N() {
        return D(i()).getCurrentScope();
      }
      new WeakMap();
      function U(t) {
        if (t)
          return (function (t) {
            return t instanceof I || "function" == typeof t;
          })(t) ||
            (function (t) {
              return Object.keys(t).some((t) => H.includes(t));
            })(t)
            ? { captureContext: t }
            : t;
      }
      const H = [
        "user",
        "level",
        "extra",
        "contexts",
        "tags",
        "fingerprint",
        "requestSession",
        "propagationContext",
      ];
      function j() {
        return D(i()).getIsolationScope().lastEventId();
      }
      const M =
        /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
      function q(t) {
        return {
          protocol: t.protocol,
          publicKey: t.publicKey || "",
          pass: t.pass || "",
          host: t.host,
          port: t.port || "",
          path: t.path || "",
          projectId: t.projectId,
        };
      }
      function A(t) {
        const e =
          "string" == typeof t
            ? (function (t) {
                const e = M.exec(t);
                if (!e)
                  return void w(() => {
                    console.error(`Invalid Sentry Dsn: ${t}`);
                  });
                const [n, s, o = "", r = "", i = "", a = ""] = e.slice(1);
                let c = "",
                  u = a;
                const l = u.split("/");
                if (
                  (l.length > 1 &&
                    ((c = l.slice(0, -1).join("/")), (u = l.pop())),
                  u)
                ) {
                  const t = u.match(/^\d+/);
                  t && (u = t[0]);
                }
                return q({
                  host: r,
                  pass: o,
                  path: c,
                  projectId: u,
                  port: i,
                  protocol: n,
                  publicKey: s,
                });
              })(t)
            : q(t);
        if (
          e &&
          (function (t) {
            if (!g) return !0;
            const { port: e, projectId: n, protocol: s } = t;
            return !(
              ["protocol", "publicKey", "host", "projectId"].find(
                (e) =>
                  !t[e] && (S.error(`Invalid Sentry Dsn: ${e} missing`), !0),
              ) ||
              (n.match(/^\d+$/)
                ? (function (t) {
                    return "http" === t || "https" === t;
                  })(s)
                  ? e &&
                    isNaN(parseInt(e, 10)) &&
                    (S.error(`Invalid Sentry Dsn: Invalid port ${e}`), 1)
                  : (S.error(`Invalid Sentry Dsn: Invalid protocol ${s}`), 1)
                : (S.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), 1))
            );
          })(e)
        )
          return e;
      }
      function Q(t) {
        const e = t.protocol ? `${t.protocol}:` : "",
          n = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
      }
      const F = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        z = o;
      function Y(t = {}) {
        if (!z.document)
          return void (
            F && S.error("Global document not defined in showReportDialog call")
          );
        const e = N(),
          n = e.getClient(),
          s = n && n.getDsn();
        if (!s)
          return void (
            F && S.error("DSN not configured for showReportDialog call")
          );
        if ((e && (t.user = { ...e.getUser(), ...t.user }), !t.eventId)) {
          const e = j();
          e && (t.eventId = e);
        }
        const o = z.document.createElement("script");
        (o.async = !0),
          (o.crossOrigin = "anonymous"),
          (o.src = (function (t, e) {
            const n = A(t);
            if (!n) return "";
            const s = `${Q(n)}embed/error-page/`;
            let o = `dsn=${(function (t, e = !1) {
              const {
                host: n,
                path: s,
                pass: o,
                port: r,
                projectId: i,
                protocol: a,
                publicKey: c,
              } = t;
              return `${a}://${c}${e && o ? `:${o}` : ""}@${n}${r ? `:${r}` : ""}/${s ? `${s}/` : s}${i}`;
            })(n)}`;
            for (const t in e)
              if ("dsn" !== t && "onClose" !== t)
                if ("user" === t) {
                  const t = e.user;
                  if (!t) continue;
                  t.name && (o += `&name=${encodeURIComponent(t.name)}`),
                    t.email && (o += `&email=${encodeURIComponent(t.email)}`);
                } else
                  o += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`;
            return `${s}?${o}`;
          })(s, t)),
          t.onLoad && (o.onload = t.onLoad);
        const { onClose: r } = t;
        if (r) {
          const t = (e) => {
            if ("__sentry_reportdialog_closed__" === e.data)
              try {
                r();
              } finally {
                z.removeEventListener("message", t);
              }
          };
          z.addEventListener("message", t);
        }
        const i = z.document.head || z.document.body;
        i
          ? i.appendChild(o)
          : F &&
            S.error(
              "Not injecting report dialog. No injection point found in HTML",
            );
      }
      n(904);
      var W = n(90626);
      const G = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      function K(t, { componentStack: e }, n) {
        if (
          (function (t) {
            const e = t.match(/^([^.]+)/);
            return null !== e && parseInt(e[0]) >= 17;
          })(W.version) &&
          (function (t) {
            switch (c.call(t)) {
              case "[object Error]":
              case "[object Exception]":
              case "[object DOMException]":
                return !0;
              default:
                return p(t, Error);
            }
          })(t) &&
          e
        ) {
          const n = new Error(t.message);
          (n.name = `React ErrorBoundary ${t.name}`),
            (n.stack = e),
            (function (t, e) {
              const n = new WeakSet();
              !(function t(e, s) {
                if (!n.has(e))
                  return e.cause
                    ? (n.add(e), t(e.cause, s))
                    : void (e.cause = s);
              })(t, e);
            })(t, n);
        }
        return (function (t, e) {
          return N().captureException(t, U(e));
        })(t, {
          ...n,
          captureContext: { contexts: { react: { componentStack: e } } },
        });
      }
      const V = { componentStack: null, error: null, eventId: null };
      class J extends W.Component {
        constructor(t) {
          super(t),
            J.prototype.__init.call(this),
            (this.state = V),
            (this._openFallbackReportDialog = !0);
          const e = N().getClient();
          e &&
            t.showDialog &&
            ((this._openFallbackReportDialog = !1),
            (this._cleanupHook = e.on("afterSendEvent", (e) => {
              !e.type &&
                this._lastEventId &&
                e.event_id === this._lastEventId &&
                Y({ ...t.dialogOptions, eventId: this._lastEventId });
            })));
        }
        componentDidCatch(t, e) {
          const { componentStack: n } = e,
            s = null == n ? void 0 : n,
            {
              beforeCapture: o,
              onError: r,
              showDialog: a,
              dialogOptions: c,
            } = this.props;
          !(function (...t) {
            const e = D(i());
            if (2 === t.length) {
              const [n, s] = t;
              return n ? e.withSetScope(n, s) : e.withScope(s);
            }
            e.withScope(t[0]);
          })((i) => {
            o && o(i, t, s);
            const u = K(t, e, {
              mechanism: { handled: !!this.props.fallback },
            });
            r && r(t, s, u),
              a &&
                ((this._lastEventId = u),
                this._openFallbackReportDialog && Y({ ...c, eventId: u })),
              this.setState({ error: t, componentStack: n, eventId: u });
          });
        }
        componentDidMount() {
          const { onMount: t } = this.props;
          t && t();
        }
        componentWillUnmount() {
          const { error: t, componentStack: e, eventId: n } = this.state,
            { onUnmount: s } = this.props;
          s && s(t, e, n),
            this._cleanupHook &&
              (this._cleanupHook(), (this._cleanupHook = void 0));
        }
        __init() {
          this.resetErrorBoundary = () => {
            const { onReset: t } = this.props,
              { error: e, componentStack: n, eventId: s } = this.state;
            t && t(e, n, s), this.setState(V);
          };
        }
        render() {
          const { fallback: t, children: e } = this.props,
            n = this.state;
          if (n.error) {
            let e;
            return (
              (e =
                "function" == typeof t
                  ? W.createElement(t, {
                      error: n.error,
                      componentStack: n.componentStack,
                      resetError: this.resetErrorBoundary,
                      eventId: n.eventId,
                    })
                  : t),
              W.isValidElement(e)
                ? e
                : (t &&
                    G &&
                    S.warn("fallback did not produce a valid ReactElement"),
                  null)
            );
          }
          return "function" == typeof e ? e() : e;
        }
      }
    },
    54806: (t, e, n) => {
      n.d(e, { E: () => v });
      var s = n(90626),
        o = n(86709),
        r = n(45747),
        i = n(74500),
        a = n(57168);
      function c(t, e) {
        return t.filter((t) => !e.includes(t));
      }
      var u = class extends i.Q {
          #t;
          #e;
          #n;
          #s;
          #o;
          #r;
          #i;
          #a;
          constructor(t, e, n) {
            super(),
              (this.#t = t),
              (this.#s = n),
              (this.#n = []),
              (this.#o = []),
              (this.#e = []),
              this.setQueries(e);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#o.forEach((t) => {
                t.subscribe((e) => {
                  this.#c(t, e);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#o.forEach((t) => {
                t.destroy();
              });
          }
          setQueries(t, e, n) {
            (this.#n = t),
              (this.#s = e),
              o.j.batch(() => {
                const t = this.#o,
                  e = this.#u(this.#n);
                e.forEach((t) =>
                  t.observer.setOptions(t.defaultedQueryOptions, n),
                );
                const s = e.map((t) => t.observer),
                  o = s.map((t) => t.getCurrentResult()),
                  r = s.some((e, n) => e !== t[n]);
                (t.length !== s.length || r) &&
                  ((this.#o = s),
                  (this.#e = o),
                  this.hasListeners() &&
                    (c(t, s).forEach((t) => {
                      t.destroy();
                    }),
                    c(s, t).forEach((t) => {
                      t.subscribe((e) => {
                        this.#c(t, e);
                      });
                    }),
                    this.#l()));
              });
          }
          getCurrentResult() {
            return this.#e;
          }
          getQueries() {
            return this.#o.map((t) => t.getCurrentQuery());
          }
          getObservers() {
            return this.#o;
          }
          getOptimisticResult(t, e) {
            const n = this.#u(t).map((t) =>
              t.observer.getOptimisticResult(t.defaultedQueryOptions),
            );
            return [n, (t) => this.#p(t ?? n, e), () => this.#h(n, t)];
          }
          #h(t, e) {
            const n = this.#u(e);
            return n.map((e, s) => {
              const o = t[s];
              return e.defaultedQueryOptions.notifyOnChangeProps
                ? o
                : e.observer.trackResult(o, (t) => {
                    n.forEach((e) => {
                      e.observer.trackProp(t);
                    });
                  });
            });
          }
          #p(t, e) {
            return e
              ? ((this.#r && this.#e === this.#a && e === this.#i) ||
                  ((this.#i = e),
                  (this.#a = this.#e),
                  (this.#r = (0, a.BH)(this.#r, e(t)))),
                this.#r)
              : t;
          }
          #u(t) {
            const e = new Map(this.#o.map((t) => [t.options.queryHash, t])),
              n = [];
            return (
              t.forEach((t) => {
                const s = this.#t.defaultQueryOptions(t),
                  o = e.get(s.queryHash);
                if (o) n.push({ defaultedQueryOptions: s, observer: o });
                else {
                  const t = this.#o.find(
                    (t) => t.options.queryHash === s.queryHash,
                  );
                  n.push({
                    defaultedQueryOptions: s,
                    observer: t ?? new r.$(this.#t, s),
                  });
                }
              }),
              n.sort(
                (e, n) =>
                  t.findIndex(
                    (t) => t.queryHash === e.defaultedQueryOptions.queryHash,
                  ) -
                  t.findIndex(
                    (t) => t.queryHash === n.defaultedQueryOptions.queryHash,
                  ),
              )
            );
          }
          #c(t, e) {
            const n = this.#o.indexOf(t);
            -1 !== n &&
              ((this.#e = (function (t, e, n) {
                const s = t.slice(0);
                return (s[e] = n), s;
              })(this.#e, n, e)),
              this.#l());
          }
          #l() {
            if (this.hasListeners()) {
              this.#r !==
                this.#p(this.#h(this.#e, this.#n), this.#s?.combine) &&
                o.j.batch(() => {
                  this.listeners.forEach((t) => {
                    t(this.#e);
                  });
                });
            }
          }
        },
        l = n(75233),
        p = n(22730),
        h = n(43424),
        d = n(19086),
        f = n(44407),
        _ = n(19866);
      function v({ queries: t, ...e }, n) {
        const i = (0, l.jE)(n),
          a = (0, p.w)(),
          c = (0, h.h)(),
          v = s.useMemo(
            () =>
              t.map((t) => {
                const e = i.defaultQueryOptions(t);
                return (
                  (e._optimisticResults = a ? "isRestoring" : "optimistic"), e
                );
              }),
            [t, i, a],
          );
        v.forEach((t) => {
          (0, f.jv)(t), (0, d.LJ)(t, c);
        }),
          (0, d.wZ)(c);
        const [m] = s.useState(() => new u(i, v, e)),
          [g, b, y] = m.getOptimisticResult(v, e.combine);
        s.useSyncExternalStore(
          s.useCallback(
            (t) => (a ? _.l : m.subscribe(o.j.batchCalls(t))),
            [m, a],
          ),
          () => m.getCurrentResult(),
          () => m.getCurrentResult(),
        ),
          s.useEffect(() => {
            m.setQueries(v, e, { listeners: !1 });
          }, [v, e, m]);
        const w = g.some((t, e) => (0, f.EU)(v[e], t))
          ? g.flatMap((t, e) => {
              const n = v[e];
              if (n) {
                const e = new r.$(i, n);
                if ((0, f.EU)(n, t)) return (0, f.iL)(n, e, c);
                (0, f.nE)(t, a) && (0, f.iL)(n, e, c);
              }
              return [];
            })
          : [];
        if (w.length > 0) throw Promise.all(w);
        const S = g.find((t, e) => {
          const n = v[e];
          return (
            n &&
            (0, d.$1)({
              result: t,
              errorResetBoundary: c,
              throwOnError: n.throwOnError,
              query: i.getQueryCache().get(n.queryHash),
            })
          );
        });
        if (S?.error) throw S.error;
        return b(y());
      }
    },
  },
]);
