/*!
 * (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 *
 */ !(function (r) {
  var n = {};
  function o(e) {
    if (n[e]) return n[e].exports;
    var t = (n[e] = { i: e, l: !1, exports: {} });
    return r[e].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
  }
  (o.m = r),
    (o.c = n),
    (o.d = function (e, t, r) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (o.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          o.d(
            r,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return r;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ""),
    o((o.s = 0));
})({
  "+wdc": function (e, s, t) {
    "use strict";
    /** @license React v0.17.0
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var i, u, l, r, n, o, a, c, p, f, g, d, h, y, b, m, _, v, E, w;
    function S(e, t) {
      var r = e.length;
      e.push(t);
      e: for (;;) {
        var n = Math.floor((r - 1) / 2),
          o = e[n];
        if (!(void 0 !== o && 0 < j(o, t))) break e;
        (e[n] = t), (e[r] = o), (r = n);
      }
    }
    function T(e) {
      return void 0 === (e = e[0]) ? null : e;
    }
    function A(e) {
      var t = e[0];
      if (void 0 !== t) {
        var r = e.pop();
        if (r !== t) {
          e[0] = r;
          e: for (var n = 0, o = e.length; n < o; ) {
            var i = 2 * (n + 1) - 1,
              a = e[i],
              s = 1 + i,
              u = e[s];
            if (void 0 !== a && j(a, r) < 0)
              n =
                void 0 !== u && j(u, a) < 0
                  ? ((e[n] = u), (e[s] = r), s)
                  : ((e[n] = a), (e[i] = r), i);
            else {
              if (!(void 0 !== u && j(u, r) < 0)) break e;
              (e[n] = u), (e[s] = r), (n = s);
            }
          }
        }
        return t;
      }
    }
    function j(e, t) {
      var r = e.sortIndex - t.sortIndex;
      return 0 != r ? r : e.id - t.id;
    }
    Object.defineProperty(s, "__esModule", { value: !0 }),
      "undefined" == typeof window || "function" != typeof MessageChannel
        ? ((n = r = null),
          (o = function () {
            if (null !== r)
              try {
                var e = s.unstable_now();
                r(!0, e), (r = null);
              } catch (e) {
                throw (setTimeout(o, 0), e);
              }
          }),
          (a = Date.now()),
          (s.unstable_now = function () {
            return Date.now() - a;
          }),
          (i = function (e) {
            null !== r ? setTimeout(i, 0, e) : ((r = e), setTimeout(o, 0));
          }),
          (u = function (e, t) {
            n = setTimeout(e, t);
          }),
          (l = function () {
            clearTimeout(n);
          }),
          (v = function () {
            return !1;
          }),
          (U = s.unstable_forceFrameRate = function () {}))
        : ((c = window.performance),
          (p = window.Date),
          (f = window.setTimeout),
          (g = window.clearTimeout),
          (E = window.cancelAnimationFrame),
          "undefined" != typeof console &&
            ("function" != typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
              ),
            "function" != typeof E &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
              )),
          "object" == typeof c && "function" == typeof c.now
            ? (s.unstable_now = function () {
                return c.now();
              })
            : ((d = p.now()),
              (s.unstable_now = function () {
                return p.now() - d;
              })),
          (h = !1),
          (y = null),
          (b = -1),
          (m = 5),
          (_ = 0),
          (v = function () {
            return s.unstable_now() >= _;
          }),
          (U = function () {}),
          (s.unstable_forceFrameRate = function (e) {
            e < 0 || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
                )
              : (m = 0 < e ? Math.floor(1e3 / e) : 33.33);
          }),
          (E = new MessageChannel()),
          (w = E.port2),
          (E.port1.onmessage = function () {
            if (null !== y) {
              var e = s.unstable_now();
              _ = e + m;
              try {
                y(!0, e) ? w.postMessage(null) : ((h = !1), (y = null));
              } catch (e) {
                throw (w.postMessage(null), e);
              }
            } else h = !1;
          }),
          (i = function (e) {
            (y = e), h || ((h = !0), w.postMessage(null));
          }),
          (u = function (e, t) {
            b = f(function () {
              e(s.unstable_now());
            }, t);
          }),
          (l = function () {
            g(b), (b = -1);
          }));
    var O = [],
      C = [],
      k = 1,
      x = null,
      I = 3,
      M = !1,
      R = !1,
      B = !1;
    function N(e) {
      for (var t = T(C); null !== t; ) {
        if (null === t.callback) A(C);
        else {
          if (!(t.startTime <= e)) break;
          A(C), (t.sortIndex = t.expirationTime), S(O, t);
        }
        t = T(C);
      }
    }
    function P(e) {
      var t;
      (B = !1),
        N(e),
        R ||
          (null !== T(O)
            ? ((R = !0), i(D))
            : null !== (t = T(C)) && u(P, t.startTime - e));
    }
    function D(e, t) {
      (R = !1), B && ((B = !1), l()), (M = !0);
      var r = I;
      try {
        for (
          N(t), x = T(O);
          null !== x && (!(x.expirationTime > t) || (e && !v()));

        ) {
          var n,
            o = x.callback;
          null !== o
            ? ((x.callback = null),
              (I = x.priorityLevel),
              (n = o(x.expirationTime <= t)),
              (t = s.unstable_now()),
              "function" == typeof n ? (x.callback = n) : x === T(O) && A(O),
              N(t))
            : A(O),
            (x = T(O));
        }
        var i,
          a = null !== x || (null !== (i = T(C)) && u(P, i.startTime - t), !1);
        return a;
      } finally {
        (x = null), (I = r), (M = !1);
      }
    }
    function L(e) {
      switch (e) {
        case 1:
          return -1;
        case 2:
          return 250;
        case 5:
          return 1073741823;
        case 4:
          return 1e4;
        default:
          return 5e3;
      }
    }
    var U = U;
    (s.unstable_ImmediatePriority = 1),
      (s.unstable_UserBlockingPriority = 2),
      (s.unstable_NormalPriority = 3),
      (s.unstable_IdlePriority = 5),
      (s.unstable_LowPriority = 4),
      (s.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var r = I;
        I = e;
        try {
          return t();
        } finally {
          I = r;
        }
      }),
      (s.unstable_next = function (e) {
        switch (I) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = I;
        }
        var r = I;
        I = t;
        try {
          return e();
        } finally {
          I = r;
        }
      }),
      (s.unstable_scheduleCallback = function (e, t, r) {
        var n,
          o = s.unstable_now();
        return (
          "object" == typeof r && null !== r
            ? ((n = "number" == typeof (n = r.delay) && 0 < n ? o + n : o),
              (r = "number" == typeof r.timeout ? r.timeout : L(e)))
            : ((r = L(e)), (n = o)),
          (e = {
            id: k++,
            callback: t,
            priorityLevel: e,
            startTime: n,
            expirationTime: (r = n + r),
            sortIndex: -1,
          }),
          o < n
            ? ((e.sortIndex = n),
              S(C, e),
              null === T(O) && e === T(C) && (B ? l() : (B = !0), u(P, n - o)))
            : ((e.sortIndex = r), S(O, e), R || M || ((R = !0), i(D))),
          e
        );
      }),
      (s.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (s.unstable_wrapCallback = function (t) {
        var r = I;
        return function () {
          var e = I;
          I = r;
          try {
            return t.apply(this, arguments);
          } finally {
            I = e;
          }
        };
      }),
      (s.unstable_getCurrentPriorityLevel = function () {
        return I;
      }),
      (s.unstable_shouldYield = function () {
        var e = s.unstable_now();
        N(e);
        var t = T(O);
        return (
          (t !== x &&
            null !== x &&
            null !== t &&
            null !== t.callback &&
            t.startTime <= e &&
            t.expirationTime < x.expirationTime) ||
          v()
        );
      }),
      (s.unstable_requestPaint = U),
      (s.unstable_continueExecution = function () {
        R || M || ((R = !0), i(D));
      }),
      (s.unstable_pauseExecution = function () {}),
      (s.unstable_getFirstCallbackNode = function () {
        return T(O);
      }),
      (s.unstable_Profiling = null);
  },
  "+xJ3": function (e, t) {},
  0: function (e, t, r) {
    e.exports = r("Sj0R");
  },
  "2SVd": function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  },
  "2vnA": function (e, mr, _r) {
    "use strict";
    !function (t, e) {
      _r.d(mr, "a", function () {
        return b;
      }),
        _r.d(mr, "b", function () {
          return qt;
        }),
        _r.d(mr, "c", function () {
          return ze;
        }),
        _r.d(mr, "d", function () {
          return _e;
        }),
        _r.d(mr, "e", function () {
          return pe;
        }),
        _r.d(mr, "f", function () {
          return ce;
        }),
        _r.d(mr, "g", function () {
          return me;
        }),
        _r.d(mr, "h", function () {
          return pr;
        }),
        _r.d(mr, "i", function () {
          return ne;
        }),
        _r.d(mr, "j", function () {
          return be;
        }),
        _r.d(mr, "k", function () {
          return Ze;
        }),
        _r.d(mr, "l", function () {
          return nt;
        }),
        _r.d(mr, "m", function () {
          return Z;
        }),
        _r.d(mr, "n", function () {
          return lt;
        }),
        _r.d(mr, "o", function () {
          return E;
        }),
        _r.d(mr, "p", function () {
          return jt;
        }),
        _r.d(mr, "q", function () {
          return ct;
        }),
        _r.d(mr, "r", function () {
          return bt;
        }),
        _r.d(mr, "s", function () {
          return cr;
        }),
        _r.d(mr, "t", function () {
          return gt;
        }),
        _r.d(mr, "u", function () {
          return tt;
        }),
        _r.d(mr, "v", function () {
          return vt;
        }),
        _r.d(mr, "w", function () {
          return Et;
        }),
        _r.d(mr, "x", function () {
          return Gt;
        }),
        _r.d(mr, "y", function () {
          return Jt;
        }),
        _r.d(mr, "z", function () {
          return lr;
        }),
        _r.d(mr, "A", function () {
          return Tt;
        }),
        _r.d(mr, "B", function () {
          return q;
        }),
        _r.d(mr, "C", function () {
          return Ot;
        }),
        _r.d(mr, "D", function () {
          return st;
        }),
        _r.d(mr, "E", function () {
          return at;
        }),
        _r.d(mr, "F", function () {
          return et;
        }),
        _r.d(mr, "G", function () {
          return Xe;
        }),
        _r.d(mr, "H", function () {
          return Ct;
        }),
        _r.d(mr, "I", function () {
          return se;
        }),
        _r.d(mr, "J", function () {
          return At;
        }),
        _r.d(mr, "K", function () {
          return kt;
        });
      var r =
          "An invariant failed, however the error is obfuscated because this is a production build.",
        u = [];
      Object.freeze(u);
      var h = {};
      function y() {
        return ++Pe.mobxGuid;
      }
      function w(e) {
        throw (s(!1, e), "X");
      }
      function s(e, t) {
        if (!e) throw new Error("[mobx] " + (t || r));
      }
      Object.freeze(h);
      function n(e) {
        var t = !1;
        return function () {
          if (!t) return (t = !0), e.apply(this, arguments);
        };
      }
      var o = function () {};
      function i(e) {
        return null !== e && "object" == typeof e;
      }
      function S(e) {
        if (null !== e && "object" == typeof e) {
          e = Object.getPrototypeOf(e);
          return e === Object.prototype || null === e;
        }
      }
      function l(e, t, r) {
        Object.defineProperty(e, t, {
          enumerable: !1,
          writable: !0,
          configurable: !0,
          value: r,
        });
      }
      function a(e, t) {
        var r = "isMobX" + e;
        return (
          (t.prototype[r] = !0),
          function (e) {
            return i(e) && !0 === e[r];
          }
        );
      }
      function T(e) {
        return e instanceof Map;
      }
      function c(e) {
        return e instanceof Set;
      }
      function p(t) {
        var e,
          r = new Set();
        for (e in t) r.add(e);
        return (
          Object.getOwnPropertySymbols(t).forEach(function (e) {
            Object.getOwnPropertyDescriptor(t, e).enumerable && r.add(e);
          }),
          Array.from(r)
        );
      }
      function f(e) {
        return (e && e.toString ? e : new String(e)).toString();
      }
      function g(e) {
        return null === e ? null : "object" == typeof e ? "" + e : e;
      }
      var d =
          "undefined" != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                );
              }
            : Object.getOwnPropertyNames,
        b = Symbol("mobx administration"),
        m =
          ((_.prototype.onBecomeObserved = function () {
            this.onBecomeObservedListeners &&
              this.onBecomeObservedListeners.forEach(function (e) {
                return e();
              });
          }),
          (_.prototype.onBecomeUnobserved = function () {
            this.onBecomeUnobservedListeners &&
              this.onBecomeUnobservedListeners.forEach(function (e) {
                return e();
              });
          }),
          (_.prototype.reportObserved = function () {
            return We(this);
          }),
          (_.prototype.reportChanged = function () {
            var t;
            Ue(),
              (t = this).lowestObserverState !== X.STALE &&
                ((t.lowestObserverState = X.STALE),
                t.observers.forEach(function (e) {
                  e.dependenciesState === X.UP_TO_DATE &&
                    (e.isTracing !== J.NONE && Ve(e, t), e.onBecomeStale()),
                    (e.dependenciesState = X.STALE);
                })),
              Fe();
          }),
          (_.prototype.toString = function () {
            return this.name;
          }),
          _);
      function _(e) {
        void 0 === e && (e = "Atom@" + y()),
          (this.name = e),
          (this.isPendingUnobservation = !1),
          (this.isBeingObserved = !1),
          (this.observers = new Set()),
          (this.diffValue = 0),
          (this.lastAccessedBy = 0),
          (this.lowestObserverState = X.NOT_TRACKING);
      }
      var v = a("Atom", m);
      function E(e, t, r) {
        void 0 === t && (t = o), void 0 === r && (r = o);
        var n,
          e = new m(e);
        return (
          t !== o && ut("onBecomeObserved", e, t, n), r !== o && st(e, r), e
        );
      }
      var A = {
          identity: function (e, t) {
            return e === t;
          },
          structural: function (e, t) {
            return gr(e, t);
          },
          default: function (e, t) {
            return Object.is(e, t);
          },
          shallow: function (e, t) {
            return gr(e, t, 1);
          },
        },
        j = function (e, t) {
          return (j =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        };
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var O = function () {
        return (O =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function C(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator],
          r = 0;
        return t
          ? t.call(e)
          : {
              next: function () {
                return {
                  value: (e = e && r >= e.length ? void 0 : e) && e[r++],
                  done: !e,
                };
              },
            };
      }
      function k(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          o,
          i = r.call(e),
          a = [];
        try {
          for (; (void 0 === t || 0 < t--) && !(n = i.next()).done; )
            a.push(n.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            n && !n.done && (r = i.return) && r.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function x() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(k(arguments[t]));
        return e;
      }
      var I = Symbol("mobx did run lazy initializers"),
        M = Symbol("mobx pending decorators"),
        R = {},
        B = {};
      function N(e) {
        var t, r;
        if (!0 !== e[I]) {
          var n = e[M];
          if (n) {
            l(e, I, !0);
            var o = x(Object.getOwnPropertySymbols(n), Object.keys(n));
            try {
              for (var i = C(o), a = i.next(); !a.done; a = i.next()) {
                var s = n[a.value];
                s.propertyCreator(
                  e,
                  s.prop,
                  s.descriptor,
                  s.decoratorTarget,
                  s.decoratorArguments
                );
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                a && !a.done && (r = i.return) && r.call(i);
              } finally {
                if (t) throw t.error;
              }
            }
          }
        }
      }
      function P(a, s) {
        return function () {
          function e(e, t, r, n) {
            return !0 === n
              ? (s(e, t, r, e, i), null)
              : (Object.prototype.hasOwnProperty.call(e, M) ||
                  ((n = e[M]), l(e, M, O({}, n))),
                (e[M][t] = {
                  prop: t,
                  propertyCreator: s,
                  descriptor: r,
                  decoratorTarget: e,
                  decoratorArguments: i,
                }),
                (e = (r = a) ? R : B)[(o = t)] ||
                  (e[o] = {
                    configurable: !0,
                    enumerable: r,
                    get: function () {
                      return N(this), this[o];
                    },
                    set: function (e) {
                      N(this), (this[o] = e);
                    },
                  }));
            var o;
          }
          var i, t;
          return ((2 === (t = arguments).length || 3 === t.length) &&
            ("string" == typeof t[1] || "symbol" == typeof t[1])) ||
            (4 === t.length && !0 === t[3])
            ? ((i = u), e.apply(null, arguments))
            : ((i = Array.prototype.slice.call(arguments)), e);
        };
      }
      function D(e, t, r) {
        return St(e)
          ? e
          : Array.isArray(e)
          ? q.array(e, { name: r })
          : S(e)
          ? q.object(e, void 0, { name: r })
          : T(e)
          ? q.map(e, { name: r })
          : c(e)
          ? q.set(e, { name: r })
          : e;
      }
      function L(e) {
        return e;
      }
      function U(i) {
        s(i);
        var e = P(!0, function (e, t, r, n, o) {
            r = r ? (r.initializer ? r.initializer.call(e) : r.value) : void 0;
            or(e).addObservableProp(t, r, i);
          }),
          e =
            (void 0 !== t &&
              Object({ NODE_ENV: "production", STEAM_BUILD: "buildbot" }),
            e);
        return (e.enhancer = i), e;
      }
      var F = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
      function W(e) {
        return null == e
          ? F
          : "string" == typeof e
          ? { name: e, deep: !0, proxy: !0 }
          : e;
      }
      Object.freeze(F);
      var V = U(D),
        z = U(function (e, t, r) {
          return null == e || lr(e) || Gt(e) || Jt(e) || tr(e)
            ? e
            : Array.isArray(e)
            ? q.array(e, { name: r, deep: !1 })
            : S(e)
            ? q.object(e, void 0, { name: r, deep: !1 })
            : T(e)
            ? q.map(e, { name: r, deep: !1 })
            : c(e)
            ? q.set(e, { name: r, deep: !1 })
            : w(!1);
        }),
        H = U(L),
        $ = U(function (e, t, r) {
          return gr(e, t) ? t : e;
        });
      function G(e) {
        return e.defaultDecorator
          ? e.defaultDecorator.enhancer
          : !1 === e.deep
          ? L
          : D;
      }
      var K = {
          box: function (e, t) {
            2 < arguments.length && Y("box");
            t = W(t);
            return new Ae(e, G(t), t.name, !0, t.equals);
          },
          array: function (e, t) {
            2 < arguments.length && Y("array");
            t = W(t);
            return (function (e, t, r, n) {
              void 0 === r && (r = "ObservableArray@" + y());
              void 0 === n && (n = !1);
              r = new Wt(r, t, n);
              !(function (e, t, r) {
                Object.defineProperty(e, t, {
                  enumerable: !1,
                  writable: !1,
                  configurable: !0,
                  value: r,
                });
              })(r.values, b, r);
              t = new Proxy(r.values, Ft);
              (r.proxy = t),
                e &&
                  e.length &&
                  ((n = ve(!0)), r.spliceWithArray(0, 0, e), Ee(n));
              return t;
            })(e, G(t), t.name);
          },
          map: function (e, t) {
            2 < arguments.length && Y("map");
            t = W(t);
            return new qt(e, G(t), t.name);
          },
          set: function (e, t) {
            2 < arguments.length && Y("set");
            t = W(t);
            return new Zt(e, G(t), t.name);
          },
          object: function (e, t, r) {
            "string" == typeof t && Y("object");
            var n = W(r);
            if (!1 === n.proxy) return ct({}, e, t, n);
            var o = pt(n),
              r = ct({}, void 0, void 0, n),
              r = ((n = r), (r = new Proxy(n, Rt)), (n[b].proxy = r));
            return ft(r, e, t, o), r;
          },
          ref: H,
          shallow: z,
          deep: V,
          struct: $,
        },
        q = function (e, t, r) {
          return "string" == typeof t || "symbol" == typeof t
            ? V.apply(null, arguments)
            : St(e)
            ? e
            : (t = S(e)
                ? q.object(e, t, r)
                : Array.isArray(e)
                ? q.array(e, t)
                : T(e)
                ? q.map(e, t)
                : c(e)
                ? q.set(e, t)
                : e) !== e
            ? t
            : void w(!1);
        };
      function Y(e) {
        w(
          "Expected one or two arguments to observable." +
            e +
            ". Did you accidentally try to use observable." +
            e +
            " as decorator?"
        );
      }
      Object.keys(K).forEach(function (e) {
        return (q[e] = K[e]);
      });
      var X,
        J,
        Q = P(!1, function (e, t, r, n, o) {
          var i = r.get,
            r = r.set,
            o = o[0] || {};
          or(e).addComputedProp(e, t, O({ get: i, set: r, context: e }, o));
        }),
        $ = Q({ equals: A.structural }),
        Z = function (e, t, r) {
          if ("string" == typeof t) return Q.apply(null, arguments);
          if (null !== e && "object" == typeof e && 1 === arguments.length)
            return Q.apply(null, arguments);
          var n = "object" == typeof t ? t : {};
          return (
            (n.get = e),
            (n.set = "function" == typeof t ? t : n.set),
            (n.name = n.name || e.name || ""),
            new Ce(n)
          );
        };
      (Z.struct = $),
        (($ = X = X || {})[($.NOT_TRACKING = -1)] = "NOT_TRACKING"),
        ($[($.UP_TO_DATE = 0)] = "UP_TO_DATE"),
        ($[($.POSSIBLY_STALE = 1)] = "POSSIBLY_STALE"),
        ($[($.STALE = 2)] = "STALE"),
        (($ = J = J || {})[($.NONE = 0)] = "NONE"),
        ($[($.LOG = 1)] = "LOG"),
        ($[($.BREAK = 2)] = "BREAK");
      var ee = function (e) {
        this.cause = e;
      };
      function te(e) {
        return e instanceof ee;
      }
      function re(e) {
        switch (e.dependenciesState) {
          case X.UP_TO_DATE:
            return;
          case X.NOT_TRACKING:
          case X.STALE:
            return 1;
          case X.POSSIBLY_STALE:
            for (
              var t = ce(!0), r = ue(), n = e.observing, o = n.length, i = 0;
              i < o;
              i++
            ) {
              var a = n[i];
              if (xe(a)) {
                if (Pe.disableErrorBoundaries) a.get();
                else
                  try {
                    a.get();
                  } catch (e) {
                    return le(r), pe(t), 1;
                  }
                if (e.dependenciesState === X.STALE) return le(r), pe(t), 1;
              }
            }
            return fe(e), le(r), void pe(t);
        }
      }
      function ne() {
        return null !== Pe.trackingDerivation;
      }
      function oe(e) {
        e = 0 < e.observers.size;
        0 < Pe.computationDepth && e && w(!1),
          Pe.allowStateChanges ||
            (!e && "strict" !== Pe.enforceActions) ||
            w(!1);
      }
      function ie(e, t, r) {
        var n = ce(!0);
        fe(e),
          (e.newObserving = new Array(e.observing.length + 100)),
          (e.unboundDepsCount = 0),
          (e.runId = ++Pe.runId);
        var o,
          i = Pe.trackingDerivation;
        if (((Pe.trackingDerivation = e), !0 === Pe.disableErrorBoundaries))
          o = t.call(r);
        else
          try {
            o = t.call(r);
          } catch (e) {
            o = new ee(e);
          }
        return (
          (Pe.trackingDerivation = i),
          (function (e) {
            for (
              var t = e.observing,
                r = (e.observing = e.newObserving),
                n = X.UP_TO_DATE,
                o = 0,
                i = e.unboundDepsCount,
                a = 0;
              a < i;
              a++
            )
              0 === (s = r[a]).diffValue &&
                ((s.diffValue = 1), o !== a && (r[o] = s), o++),
                s.dependenciesState > n && (n = s.dependenciesState);
            (r.length = o), (e.newObserving = null), (i = t.length);
            for (; i--; )
              0 === (s = t[i]).diffValue && De(s, e), (s.diffValue = 0);
            for (; o--; ) {
              var s;
              1 === (s = r[o]).diffValue &&
                ((s.diffValue = 0),
                (function (e, t) {
                  e.observers.add(t),
                    e.lowestObserverState > t.dependenciesState &&
                      (e.lowestObserverState = t.dependenciesState);
                })(s, e));
            }
            n !== X.UP_TO_DATE &&
              ((e.dependenciesState = n), e.onBecomeStale());
          })(e),
          pe(n),
          o
        );
      }
      function ae(e) {
        var t = e.observing;
        e.observing = [];
        for (var r = t.length; r--; ) De(t[r], e);
        e.dependenciesState = X.NOT_TRACKING;
      }
      function se(e) {
        var t = ue();
        try {
          return e();
        } finally {
          le(t);
        }
      }
      function ue() {
        var e = Pe.trackingDerivation;
        return (Pe.trackingDerivation = null), e;
      }
      function le(e) {
        Pe.trackingDerivation = e;
      }
      function ce(e) {
        var t = Pe.allowStateReads;
        return (Pe.allowStateReads = e), t;
      }
      function pe(e) {
        Pe.allowStateReads = e;
      }
      function fe(e) {
        if (e.dependenciesState !== X.UP_TO_DATE) {
          e.dependenciesState = X.UP_TO_DATE;
          for (var t = e.observing, r = t.length; r--; )
            t[r].lowestObserverState = X.UP_TO_DATE;
        }
      }
      var ge = 0,
        de = 1,
        $ = Object.getOwnPropertyDescriptor(function () {}, "name");
      $ && $.configurable;
      function he(e, t, r) {
        function n() {
          return ye(e, t, r || this, arguments);
        }
        return (n.isMobxAction = !0), n;
      }
      function ye(t, e, r, n) {
        t = be();
        try {
          return e.apply(r, n);
        } catch (e) {
          throw (t.error = e);
        } finally {
          me(t);
        }
      }
      function be(e, t, r) {
        var n = 0,
          o = ue();
        Ue();
        n = {
          prevDerivation: o,
          prevAllowStateChanges: ve(!0),
          prevAllowStateReads: ce(!0),
          notifySpy: !1,
          startTime: n,
          actionId: de++,
          parentActionId: ge,
        };
        return (ge = n.actionId), n;
      }
      function me(e) {
        ge !== e.actionId &&
          w("invalid action stack. did you forget to finish an action?"),
          (ge = e.parentActionId),
          void 0 !== e.error && (Pe.suppressReactionErrors = !0),
          Ee(e.prevAllowStateChanges),
          pe(e.prevAllowStateReads),
          Fe(),
          le(e.prevDerivation),
          e.notifySpy,
          (Pe.suppressReactionErrors = !1);
      }
      function _e(e, t) {
        var r,
          e = ve(e);
        try {
          r = t();
        } finally {
          Ee(e);
        }
        return r;
      }
      function ve(e) {
        var t = Pe.allowStateChanges;
        return (Pe.allowStateChanges = e), t;
      }
      function Ee(e) {
        Pe.allowStateChanges = e;
      }
      var we,
        Se,
        Te,
        Ae =
          (j((Se = Oe), (Te = we = m)),
          (Se.prototype =
            null === Te
              ? Object.create(Te)
              : ((je.prototype = Te.prototype), new je())),
          (Oe.prototype.dehanceValue = function (e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e;
          }),
          (Oe.prototype.set = function (e) {
            this.value;
            (e = this.prepareNewValue(e)) !== Pe.UNCHANGED &&
              this.setNewValue(e);
          }),
          (Oe.prototype.prepareNewValue = function (e) {
            if ((oe(this), Bt(this))) {
              var t = Pt(this, { object: this, type: "update", newValue: e });
              if (!t) return Pe.UNCHANGED;
              e = t.newValue;
            }
            return (
              (e = this.enhancer(e, this.value, this.name)),
              this.equals(this.value, e) ? Pe.UNCHANGED : e
            );
          }),
          (Oe.prototype.setNewValue = function (e) {
            var t = this.value;
            (this.value = e),
              this.reportChanged(),
              Dt(this) &&
                Ut(this, {
                  type: "update",
                  object: this,
                  newValue: e,
                  oldValue: t,
                });
          }),
          (Oe.prototype.get = function () {
            return this.reportObserved(), this.dehanceValue(this.value);
          }),
          (Oe.prototype.intercept = function (e) {
            return Nt(this, e);
          }),
          (Oe.prototype.observe = function (e, t) {
            return (
              t &&
                e({
                  object: this,
                  type: "update",
                  newValue: this.value,
                  oldValue: void 0,
                }),
              Lt(this, e)
            );
          }),
          (Oe.prototype.toJSON = function () {
            return this.get();
          }),
          (Oe.prototype.toString = function () {
            return this.name + "[" + this.value + "]";
          }),
          (Oe.prototype.valueOf = function () {
            return g(this.get());
          }),
          (Oe.prototype[Symbol.toPrimitive] = function () {
            return this.valueOf();
          }),
          Oe);
      function je() {
        this.constructor = Se;
      }
      function Oe(e, t, r, n, o) {
        void 0 === r && (r = "ObservableValue@" + y()),
          void 0 === n && (n = !0),
          void 0 === o && (o = A.default);
        n = we.call(this, r) || this;
        return (
          (n.enhancer = t),
          (n.name = r),
          (n.equals = o),
          (n.hasUnreportedChange = !1),
          (n.value = t(e, void 0, r)),
          n
        );
      }
      a("ObservableValue", Ae);
      var Ce =
        ((ke.prototype.onBecomeStale = function () {
          var t;
          (t = this).lowestObserverState === X.UP_TO_DATE &&
            ((t.lowestObserverState = X.POSSIBLY_STALE),
            t.observers.forEach(function (e) {
              e.dependenciesState === X.UP_TO_DATE &&
                ((e.dependenciesState = X.POSSIBLY_STALE),
                e.isTracing !== J.NONE && Ve(e, t),
                e.onBecomeStale());
            }));
        }),
        (ke.prototype.onBecomeObserved = function () {
          this.onBecomeObservedListeners &&
            this.onBecomeObservedListeners.forEach(function (e) {
              return e();
            });
        }),
        (ke.prototype.onBecomeUnobserved = function () {
          this.onBecomeUnobservedListeners &&
            this.onBecomeUnobservedListeners.forEach(function (e) {
              return e();
            });
        }),
        (ke.prototype.get = function () {
          var t;
          this.isComputing &&
            w(
              "Cycle detected in computation " +
                this.name +
                ": " +
                this.derivation
            ),
            0 !== Pe.inBatch || 0 !== this.observers.size || this.keepAlive
              ? (We(this),
                re(this) &&
                  this.trackAndCompute() &&
                  (t = this).lowestObserverState !== X.STALE &&
                  ((t.lowestObserverState = X.STALE),
                  t.observers.forEach(function (e) {
                    e.dependenciesState === X.POSSIBLY_STALE
                      ? (e.dependenciesState = X.STALE)
                      : e.dependenciesState === X.UP_TO_DATE &&
                        (t.lowestObserverState = X.UP_TO_DATE);
                  })))
              : re(this) &&
                (this.warnAboutUntrackedRead(),
                Ue(),
                (this.value = this.computeValue(!1)),
                Fe());
          var e = this.value;
          if (te(e)) throw e.cause;
          return e;
        }),
        (ke.prototype.peek = function () {
          var e = this.computeValue(!1);
          if (te(e)) throw e.cause;
          return e;
        }),
        (ke.prototype.set = function (e) {
          if (this.setter) {
            s(
              !this.isRunningSetter,
              "The setter of computed value '" +
                this.name +
                "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"
            ),
              (this.isRunningSetter = !0);
            try {
              this.setter.call(this.scope, e);
            } finally {
              this.isRunningSetter = !1;
            }
          } else s(!1, !1);
        }),
        (ke.prototype.trackAndCompute = function () {
          var e = this.value,
            t = this.dependenciesState === X.NOT_TRACKING,
            r = this.computeValue(!0),
            e = t || te(e) || te(r) || !this.equals(e, r);
          return e && (this.value = r), e;
        }),
        (ke.prototype.computeValue = function (e) {
          var t;
          if (((this.isComputing = !0), Pe.computationDepth++, e))
            t = ie(this, this.derivation, this.scope);
          else if (!0 === Pe.disableErrorBoundaries)
            t = this.derivation.call(this.scope);
          else
            try {
              t = this.derivation.call(this.scope);
            } catch (e) {
              t = new ee(e);
            }
          return Pe.computationDepth--, (this.isComputing = !1), t;
        }),
        (ke.prototype.suspend = function () {
          this.keepAlive || (ae(this), (this.value = void 0));
        }),
        (ke.prototype.observe = function (r, n) {
          var o = this,
            i = !0,
            a = void 0;
          return nt(function () {
            var e,
              t = o.get();
            (i && !n) ||
              ((e = ue()),
              r({ type: "update", object: o, newValue: t, oldValue: a }),
              le(e)),
              (i = !1),
              (a = t);
          });
        }),
        (ke.prototype.warnAboutUntrackedRead = function () {}),
        (ke.prototype.toJSON = function () {
          return this.get();
        }),
        (ke.prototype.toString = function () {
          return this.name + "[" + this.derivation.toString() + "]";
        }),
        (ke.prototype.valueOf = function () {
          return g(this.get());
        }),
        (ke.prototype[Symbol.toPrimitive] = function () {
          return this.valueOf();
        }),
        ke);
      function ke(e) {
        (this.dependenciesState = X.NOT_TRACKING),
          (this.observing = []),
          (this.newObserving = null),
          (this.isBeingObserved = !1),
          (this.isPendingUnobservation = !1),
          (this.observers = new Set()),
          (this.diffValue = 0),
          (this.runId = 0),
          (this.lastAccessedBy = 0),
          (this.lowestObserverState = X.UP_TO_DATE),
          (this.unboundDepsCount = 0),
          (this.__mapid = "#" + y()),
          (this.value = new ee(null)),
          (this.isComputing = !1),
          (this.isRunningSetter = !1),
          (this.isTracing = J.NONE),
          s(e.get, "missing option for computed: get"),
          (this.derivation = e.get),
          (this.name = e.name || "ComputedValue@" + y()),
          e.set && (this.setter = he(this.name + "-setter", e.set)),
          (this.equals =
            e.equals ||
            (e.compareStructural || e.struct ? A.structural : A.default)),
          (this.scope = e.context),
          (this.requiresReaction = !!e.requiresReaction),
          (this.keepAlive = !!e.keepAlive);
      }
      var xe = a("ComputedValue", Ce),
        Ie = function () {
          (this.version = 5),
            (this.UNCHANGED = {}),
            (this.trackingDerivation = null),
            (this.computationDepth = 0),
            (this.runId = 0),
            (this.mobxGuid = 0),
            (this.inBatch = 0),
            (this.pendingUnobservations = []),
            (this.pendingReactions = []),
            (this.isRunningReactions = !1),
            (this.allowStateChanges = !0),
            (this.allowStateReads = !0),
            (this.enforceActions = !1),
            (this.spyListeners = []),
            (this.globalReactionErrorHandlers = []),
            (this.computedRequiresReaction = !1),
            (this.reactionRequiresObservable = !1),
            (this.observableRequiresReaction = !1),
            (this.computedConfigurable = !1),
            (this.disableErrorBoundaries = !1),
            (this.suppressReactionErrors = !1);
        },
        Me = {};
      function Re() {
        return "undefined" != typeof window
          ? window
          : void 0 !== e
          ? e
          : "undefined" != typeof self
          ? self
          : Me;
      }
      var Be = !0,
        Ne = !1,
        Pe =
          (0 < ($ = Re()).__mobxInstanceCount && !$.__mobxGlobals && (Be = !1),
          (Be =
            $.__mobxGlobals && $.__mobxGlobals.version !== new Ie().version
              ? !1
              : Be)
            ? $.__mobxGlobals
              ? (($.__mobxInstanceCount += 1),
                $.__mobxGlobals.UNCHANGED || ($.__mobxGlobals.UNCHANGED = {}),
                $.__mobxGlobals)
              : (($.__mobxInstanceCount = 1), ($.__mobxGlobals = new Ie()))
            : (setTimeout(function () {
                Ne ||
                  w(
                    "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`"
                  );
              }, 1),
              new Ie()));
      function De(e, t) {
        e.observers.delete(t), 0 === e.observers.size && Le(e);
      }
      function Le(e) {
        !1 === e.isPendingUnobservation &&
          ((e.isPendingUnobservation = !0), Pe.pendingUnobservations.push(e));
      }
      function Ue() {
        Pe.inBatch++;
      }
      function Fe() {
        if (0 == --Pe.inBatch) {
          Ke();
          for (var e = Pe.pendingUnobservations, t = 0; t < e.length; t++) {
            var r = e[t];
            (r.isPendingUnobservation = !1),
              0 === r.observers.size &&
                (r.isBeingObserved &&
                  ((r.isBeingObserved = !1), r.onBecomeUnobserved()),
                r instanceof Ce && r.suspend());
          }
          Pe.pendingUnobservations = [];
        }
      }
      function We(e) {
        var t = Pe.trackingDerivation;
        return null !== t
          ? (t.runId !== e.lastAccessedBy &&
              ((e.lastAccessedBy = t.runId),
              (t.newObserving[t.unboundDepsCount++] = e).isBeingObserved ||
                ((e.isBeingObserved = !0), e.onBecomeObserved())),
            !0)
          : (0 === e.observers.size && 0 < Pe.inBatch && Le(e), !1);
      }
      function Ve(e, t) {
        var r;
        console.log(
          "[mobx.trace] '" +
            e.name +
            "' is invalidated due to a change in: '" +
            t.name +
            "'"
        ),
          e.isTracing === J.BREAK &&
            ((r = []),
            (function t(e, r, n) {
              if (1e3 <= r.length) return void r.push("(and many more)");
              r.push("" + new Array(n).join("\t") + e.name);
              e.dependencies &&
                e.dependencies.forEach(function (e) {
                  return t(e, r, n + 1);
                });
            })(gt(e), r, 1),
            new Function(
              "debugger;\n/*\nTracing '" +
                e.name +
                "'\n\nYou are entering this break point because derivation '" +
                e.name +
                "' is being traced and '" +
                t.name +
                "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" +
                (e instanceof Ce
                  ? e.derivation.toString().replace(/[*]\//g, "/")
                  : "") +
                "\n\nThe dependencies for this derivation are:\n\n" +
                r.join("\n") +
                "\n*/\n    "
            )());
      }
      var ze =
        ((He.prototype.onBecomeStale = function () {
          this.schedule();
        }),
        (He.prototype.schedule = function () {
          this._isScheduled ||
            ((this._isScheduled = !0), Pe.pendingReactions.push(this), Ke());
        }),
        (He.prototype.isScheduled = function () {
          return this._isScheduled;
        }),
        (He.prototype.runReaction = function () {
          if (!this.isDisposed) {
            if ((Ue(), (this._isScheduled = !1), re(this))) {
              this._isTrackPending = !0;
              try {
                this.onInvalidate(), this._isTrackPending;
              } catch (e) {
                this.reportExceptionInDerivation(e);
              }
            }
            Fe();
          }
        }),
        (He.prototype.track = function (e) {
          this.isDisposed ||
            (Ue(),
            (this._isRunning = !!1),
            (e = ie(this, e, void 0)),
            (this._isRunning = !1),
            (this._isTrackPending = !1),
            this.isDisposed && ae(this),
            te(e) && this.reportExceptionInDerivation(e.cause),
            Fe());
        }),
        (He.prototype.reportExceptionInDerivation = function (t) {
          var r = this;
          if (this.errorHandler) this.errorHandler(t, this);
          else {
            if (Pe.disableErrorBoundaries) throw t;
            var e =
              "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" +
              this +
              "'";
            Pe.suppressReactionErrors
              ? console.warn(
                  "[mobx] (error in reaction '" +
                    this.name +
                    "' suppressed, fix error of causing action below)"
                )
              : console.error(e, t),
              Pe.globalReactionErrorHandlers.forEach(function (e) {
                return e(t, r);
              });
          }
        }),
        (He.prototype.dispose = function () {
          this.isDisposed ||
            ((this.isDisposed = !0), this._isRunning || (Ue(), ae(this), Fe()));
        }),
        (He.prototype.getDisposer = function () {
          var e = this.dispose.bind(this);
          return (e[b] = this), e;
        }),
        (He.prototype.toString = function () {
          return "Reaction[" + this.name + "]";
        }),
        (He.prototype.trace = function (e) {
          !(function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var r = !1;
            "boolean" == typeof e[e.length - 1] && (r = e.pop());
            var n = (function (e) {
              switch (e.length) {
                case 0:
                  return Pe.trackingDerivation;
                case 1:
                  return cr(e[0]);
                case 2:
                  return cr(e[0], e[1]);
              }
            })(e);
            if (!n) return w(!1);
            n.isTracing === J.NONE &&
              console.log("[mobx.trace] '" + n.name + "' tracing enabled");
            n.isTracing = r ? J.BREAK : J.LOG;
          })(this, (e = void 0 !== e && e));
        }),
        He);
      function He(e, t, r, n) {
        void 0 === e && (e = "Reaction@" + y()),
          void 0 === n && (n = !1),
          (this.name = e),
          (this.onInvalidate = t),
          (this.errorHandler = r),
          (this.requiresObservable = n),
          (this.observing = []),
          (this.newObserving = []),
          (this.dependenciesState = X.NOT_TRACKING),
          (this.diffValue = 0),
          (this.runId = 0),
          (this.unboundDepsCount = 0),
          (this.__mapid = "#" + y()),
          (this.isDisposed = !1),
          (this._isScheduled = !1),
          (this._isTrackPending = !1),
          (this._isRunning = !1),
          (this.isTracing = J.NONE);
      }
      var $e = 100,
        Ge = function (e) {
          return e();
        };
      function Ke() {
        0 < Pe.inBatch || Pe.isRunningReactions || Ge(qe);
      }
      function qe() {
        Pe.isRunningReactions = !0;
        for (var e = Pe.pendingReactions, t = 0; 0 < e.length; ) {
          ++t === $e &&
            (console.error(
              "Reaction doesn't converge to a stable state after " +
                $e +
                " iterations. Probably there is a cycle in the reactive function: " +
                e[0]
            ),
            e.splice(0));
          for (var r = e.splice(0), n = 0, o = r.length; n < o; n++)
            r[n].runReaction();
        }
        Pe.isRunningReactions = !1;
      }
      var Ye = a("Reaction", ze);
      function Xe(e) {
        return (
          console.warn("[mobx.spy] Is a no-op in production builds"),
          function () {}
        );
      }
      function Je() {
        w(!1);
      }
      function Qe(i) {
        return function (e, t, r) {
          if (r) {
            if ((0, r.value))
              return {
                value: he(i, r.value),
                enumerable: !1,
                configurable: !0,
                writable: !0,
              };
            var n = r.initializer;
            return {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              initializer: function () {
                return he(i, n.call(this));
              },
            };
          }
          return (
            (o = i),
            function (e, t, r) {
              Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !1,
                get: function () {},
                set: function (e) {
                  l(this, t, Ze(o, e));
                },
              });
            }.apply(this, arguments)
          );
          var o;
        };
      }
      var Ze = function (e, t, r, n) {
        return 1 === arguments.length && "function" == typeof e
          ? he(e.name || "<unnamed action>", e)
          : 2 === arguments.length && "function" == typeof t
          ? he(e, t)
          : 1 === arguments.length && "string" == typeof e
          ? Qe(e)
          : !0 !== n
          ? Qe(t).apply(null, arguments)
          : void l(e, t, he(e.name || t, r.value, this));
      };
      function et(e, t) {
        return ye(
          "string" == typeof e ? e : e.name || "<unnamed action>",
          "function" == typeof e ? e : t,
          this,
          void 0
        );
      }
      function tt(e) {
        return "function" == typeof e && !0 === e.isMobxAction;
      }
      function rt(e, t, r) {
        l(e, t, he(t, r.bind(e)));
      }
      function nt(e, t) {
        var r,
          n,
          o,
          i =
            ((t = void 0 === t ? h : t) && t.name) ||
            e.name ||
            "Autorun@" + y(),
          a = !t.scheduler && !t.delay;
        function s() {
          e(o);
        }
        return (
          (o = a
            ? new ze(
                i,
                function () {
                  this.track(s);
                },
                t.onError,
                t.requiresObservable
              )
            : ((r = it(t)),
              (n = !1),
              new ze(
                i,
                function () {
                  n ||
                    ((n = !0),
                    r(function () {
                      (n = !1), o.isDisposed || o.track(s);
                    }));
                },
                t.onError,
                t.requiresObservable
              ))).schedule(),
          o.getDisposer()
        );
      }
      Ze.bound = function (e, t, r, n) {
        return !0 === n
          ? (rt(e, t, r.value), null)
          : r
          ? {
              configurable: !0,
              enumerable: !1,
              get: function () {
                return (
                  rt(this, t, r.value || r.initializer.call(this)), this[t]
                );
              },
              set: Je,
            }
          : {
              enumerable: !1,
              configurable: !0,
              set: function (e) {
                rt(this, t, e);
              },
              get: function () {},
            };
      };
      var ot = function (e) {
        return e();
      };
      function it(t) {
        return (
          t.scheduler ||
          (t.delay
            ? function (e) {
                return setTimeout(e, t.delay);
              }
            : ot)
        );
      }
      function at(r, e, n) {
        var t,
          o,
          i,
          a = (n = void 0 === n ? h : n).name || "Reaction@" + y(),
          s = Ze(
            a,
            n.onError
              ? ((t = n.onError),
                (o = e),
                function () {
                  try {
                    return o.apply(this, arguments);
                  } catch (e) {
                    t.call(this, e);
                  }
                })
              : e
          ),
          u = !n.scheduler && !n.delay,
          l = it(n),
          c = !0,
          p = !1,
          f = n.compareStructural ? A.structural : n.equals || A.default,
          g = new ze(
            a,
            function () {
              c || u ? d() : p || ((p = !0), l(d));
            },
            n.onError,
            n.requiresObservable
          );
        function d() {
          var t;
          (p = !1),
            g.isDisposed ||
              ((t = !1),
              g.track(function () {
                var e = r(g);
                (t = c || !f(i, e)), (i = e);
              }),
              c && n.fireImmediately && s(i, g),
              c || !0 !== t || s(i, g),
              (c = c && !1));
        }
        return g.schedule(), g.getDisposer();
      }
      function st(e, t, r) {
        return ut("onBecomeUnobserved", e, t, r);
      }
      function ut(e, t, r, n) {
        var o = "function" == typeof n ? cr(t, r) : cr(t),
          i = "function" == typeof n ? n : r,
          a = e + "Listeners";
        return (
          o[a] ? o[a].add(i) : (o[a] = new Set([i])),
          "function" != typeof o[e]
            ? w(!1)
            : function () {
                var e = o[a];
                e && (e.delete(i), 0 === e.size && delete o[a]);
              }
        );
      }
      function lt(e) {
        var t,
          r,
          n = e.enforceActions,
          o = e.computedRequiresReaction,
          i = e.computedConfigurable,
          a = e.disableErrorBoundaries,
          s = e.reactionScheduler,
          u = e.reactionRequiresObservable,
          l = e.observableRequiresReaction;
        if (
          (!0 === e.isolateGlobalState &&
            ((Pe.pendingReactions.length ||
              Pe.inBatch ||
              Pe.isRunningReactions) &&
              w(
                "isolateGlobalState should be called before MobX is running any reactions"
              ),
            (Ne = !0),
            Be &&
              (0 == --Re().__mobxInstanceCount && (Re().__mobxGlobals = void 0),
              (Pe = new Ie()))),
          void 0 !== n)
        ) {
          var c = void 0;
          switch (n) {
            case !0:
            case "observed":
              c = !0;
              break;
            case !1:
            case "never":
              c = !1;
              break;
            case "strict":
            case "always":
              c = "strict";
              break;
            default:
              w(
                "Invalid value for 'enforceActions': '" +
                  n +
                  "', expected 'never', 'always' or 'observed'"
              );
          }
          (Pe.enforceActions = c),
            (Pe.allowStateChanges = !0 !== c && "strict" !== c);
        }
        void 0 !== o && (Pe.computedRequiresReaction = !!o),
          void 0 !== u && (Pe.reactionRequiresObservable = !!u),
          void 0 !== l &&
            ((Pe.observableRequiresReaction = !!l),
            (Pe.allowStateReads = !Pe.observableRequiresReaction)),
          void 0 !== i && (Pe.computedConfigurable = !!i),
          void 0 !== a &&
            (!0 === a &&
              console.warn(
                "WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."
              ),
            (Pe.disableErrorBoundaries = !!a)),
          s &&
            ((t = s),
            (r = Ge),
            (Ge = function (e) {
              return t(function () {
                return r(e);
              });
            }));
      }
      function ct(e, t, r, n) {
        var o = pt((n = W(n)));
        return N(e), or(e, n.name, o.enhancer), t && ft(e, t, r, o), e;
      }
      function pt(e) {
        return e.defaultDecorator || (!1 === e.deep ? H : V);
      }
      function ft(e, t, r, n) {
        var o, i;
        Ue();
        try {
          var a = d(t);
          try {
            for (var s = C(a), u = s.next(); !u.done; u = s.next()) {
              var l = u.value,
                c = Object.getOwnPropertyDescriptor(t, l);
              0;
              var p = (r && l in r ? r[l] : c.get ? Q : n)(e, l, c, !0);
              p && Object.defineProperty(e, l, p);
            }
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              u && !u.done && (i = s.return) && i.call(s);
            } finally {
              if (o) throw o.error;
            }
          }
        } finally {
          Fe();
        }
      }
      function gt(e, t) {
        return dt(cr(e, t));
      }
      function dt(e) {
        var t,
          r = { name: e.name };
        return (
          e.observing &&
            0 < e.observing.length &&
            (r.dependencies =
              ((e = e.observing),
              (t = []),
              e.forEach(function (e) {
                -1 === t.indexOf(e) && t.push(e);
              }),
              t.map(dt))),
          r
        );
      }
      var ht = 0;
      function yt() {
        this.message = "FLOW_CANCELLED";
      }
      function bt(t) {
        1 !== arguments.length &&
          w("Flow expects 1 argument and cannot be used as decorator");
        var p = t.name || "<unnamed flow>";
        return function () {
          var s,
            e = arguments,
            u = ++ht,
            l = Ze(p + " - runid: " + u + " - init", t).apply(this, e),
            c = void 0,
            e = new Promise(function (t, r) {
              var n = 0;
              function o(e) {
                var t;
                c = void 0;
                try {
                  t = Ze(p + " - runid: " + u + " - yield " + n++, l.next).call(
                    l,
                    e
                  );
                } catch (e) {
                  return r(e);
                }
                a(t);
              }
              function i(e) {
                var t;
                c = void 0;
                try {
                  t = Ze(
                    p + " - runid: " + u + " - yield " + n++,
                    l.throw
                  ).call(l, e);
                } catch (e) {
                  return r(e);
                }
                a(t);
              }
              function a(e) {
                if (!e || "function" != typeof e.then)
                  return e.done
                    ? t(e.value)
                    : (c = Promise.resolve(e.value)).then(o, i);
                e.then(a, r);
              }
              (s = r), o(void 0);
            });
          return (
            (e.cancel = Ze(p + " - runid: " + u + " - cancel", function () {
              try {
                c && mt(c);
                var e = l.return(void 0),
                  t = Promise.resolve(e.value);
                t.then(o, o), mt(t), s(new yt());
              } catch (e) {
                s(e);
              }
            })),
            e
          );
        };
      }
      function mt(e) {
        "function" == typeof e.cancel && e.cancel();
      }
      function _t(e, t) {
        if (null == e) return !1;
        if (void 0 === t) return xe(e);
        if (!1 === lr(e)) return !1;
        if (!e[b].values.has(t)) return !1;
        t = cr(e, t);
        return xe(t);
      }
      function vt(e) {
        return 1 < arguments.length ? w(!1) : _t(e);
      }
      function Et(e, t) {
        return "string" != typeof t ? w(!1) : _t(e, t);
      }
      function wt(e, t) {
        return (
          null != e &&
          (void 0 !== t
            ? !!lr(e) && e[b].values.has(t)
            : lr(e) || !!e[b] || v(e) || Ye(e) || xe(e))
        );
      }
      function St(e) {
        return 1 !== arguments.length && w(!1), wt(e);
      }
      function Tt(e) {
        return lr(e)
          ? e[b].getKeys()
          : Jt(e) || tr(e)
          ? Array.from(e.keys())
          : Gt(e)
          ? e.map(function (e, t) {
              return t;
            })
          : w(!1);
      }
      function At(t) {
        return lr(t)
          ? Tt(t).map(function (e) {
              return t[e];
            })
          : Jt(t)
          ? Tt(t).map(function (e) {
              return t.get(e);
            })
          : tr(t)
          ? Array.from(t.values())
          : Gt(t)
          ? t.slice()
          : w(!1);
      }
      function jt(t) {
        return lr(t)
          ? Tt(t).map(function (e) {
              return [e, t[e]];
            })
          : Jt(t)
          ? Tt(t).map(function (e) {
              return [e, t.get(e)];
            })
          : tr(t)
          ? Array.from(t.entries())
          : Gt(t)
          ? t.map(function (e, t) {
              return [t, e];
            })
          : w(!1);
      }
      function Ot(e, t, r, n) {
        return "function" == typeof r
          ? ((o = r), (n = n), pr(e, t).observe(o, n))
          : ((t = t), (r = r), pr(e).observe(t, r));
        var o;
      }
      yt.prototype = Object.create(Error.prototype);
      function Ct(e, t) {
        void 0 === t && (t = void 0), Ue();
        try {
          return e.apply(t);
        } finally {
          Fe();
        }
      }
      function kt(e, t, r) {
        return 1 === arguments.length || (t && "object" == typeof t)
          ? (function (n, o) {
              0;
              var i,
                e = new Promise(function (e, t) {
                  var r = xt(n, e, O(O({}, o), { onError: t }));
                  i = function () {
                    r(), t("WHEN_CANCELLED");
                  };
                });
              return (e.cancel = i), e;
            })(e, t)
          : xt(e, t, r || {});
      }
      function xt(t, e, r) {
        var n;
        "number" == typeof r.timeout &&
          (n = setTimeout(function () {
            if (!i[b].isDisposed) {
              i();
              var e = new Error("WHEN_TIMEOUT");
              if (!r.onError) throw e;
              r.onError(e);
            }
          }, r.timeout)),
          (r.name = r.name || "When@" + y());
        var o = he(r.name + "-effect", e),
          i = nt(function (e) {
            t() && (e.dispose(), n && clearTimeout(n), o());
          }, r);
        return i;
      }
      function It(e) {
        return e[b];
      }
      function Mt(e) {
        return (
          "string" == typeof e || "number" == typeof e || "symbol" == typeof e
        );
      }
      var Rt = {
        has: function (e, t) {
          if (t === b || "constructor" === t || t === I) return !0;
          var r = It(e);
          return Mt(t) ? r.has(t) : t in e;
        },
        get: function (e, t) {
          if (t === b || "constructor" === t || t === I) return e[t];
          var r = It(e),
            n = r.values.get(t);
          if (n instanceof m) {
            n = n.get();
            return void 0 === n && r.has(t), n;
          }
          return Mt(t) && r.has(t), e[t];
        },
        set: function (e, t, r) {
          return (
            !!Mt(t) &&
            ((function e(t, r, n) {
              if (2 !== arguments.length || tr(t))
                if (lr(t)) {
                  var o = t[b];
                  o.values.get(r)
                    ? o.write(r, n)
                    : o.addObservableProp(r, n, o.defaultEnhancer);
                } else if (Jt(t)) t.set(r, n);
                else if (tr(t)) t.add(r);
                else {
                  if (!Gt(t)) return w(!1), 0;
                  s(
                    0 <= (r = "number" != typeof r ? parseInt(r, 10) : r),
                    "Not a valid index: '" + r + "'"
                  ),
                    Ue(),
                    r >= t.length && (t.length = r + 1),
                    (t[r] = n),
                    Fe();
                }
              else {
                Ue();
                var i = r;
                try {
                  for (var a in i) e(t, a, i[a]);
                } finally {
                  Fe();
                }
              }
            })(e, t, r),
            !0)
          );
        },
        deleteProperty: function (e, t) {
          return !!Mt(t) && (It(e).remove(t), !0);
        },
        ownKeys: function (e) {
          return It(e).keysAtom.reportObserved(), Reflect.ownKeys(e);
        },
        preventExtensions: function (e) {
          return w("Dynamic observable objects cannot be frozen"), !1;
        },
      };
      function Bt(e) {
        return void 0 !== e.interceptors && 0 < e.interceptors.length;
      }
      function Nt(e, t) {
        var r = e.interceptors || (e.interceptors = []);
        return (
          r.push(t),
          n(function () {
            var e = r.indexOf(t);
            -1 !== e && r.splice(e, 1);
          })
        );
      }
      function Pt(e, t) {
        var r = ue();
        try {
          for (
            var n = x(e.interceptors || []), o = 0, i = n.length;
            o < i &&
            (s(
              !(t = n[o](t)) || t.type,
              "Intercept handlers should return nothing or a change object"
            ),
            t);
            o++
          );
          return t;
        } finally {
          le(r);
        }
      }
      function Dt(e) {
        return void 0 !== e.changeListeners && 0 < e.changeListeners.length;
      }
      function Lt(e, t) {
        var r = e.changeListeners || (e.changeListeners = []);
        return (
          r.push(t),
          n(function () {
            var e = r.indexOf(t);
            -1 !== e && r.splice(e, 1);
          })
        );
      }
      function Ut(e, t) {
        var r = ue();
        if ((n = e.changeListeners)) {
          for (var n, o = 0, i = (n = n.slice()).length; o < i; o++) n[o](t);
          le(r);
        }
      }
      var Ft = {
        get: function (e, t) {
          return t === b
            ? e[b]
            : "length" === t
            ? e[b].getArrayLength()
            : "number" == typeof t
            ? zt.get.call(e, t)
            : "string" != typeof t || isNaN(t)
            ? (zt.hasOwnProperty(t) ? zt : e)[t]
            : zt.get.call(e, parseInt(t));
        },
        set: function (e, t, r) {
          return (
            "length" === t && e[b].setArrayLength(r),
            "number" == typeof t && zt.set.call(e, t, r),
            "symbol" == typeof t || isNaN(t)
              ? (e[t] = r)
              : zt.set.call(e, parseInt(t), r),
            !0
          );
        },
        preventExtensions: function (e) {
          return w("Observable arrays cannot be frozen"), !1;
        },
      };
      var Wt =
        ((Vt.prototype.dehanceValue = function (e) {
          return void 0 !== this.dehancer ? this.dehancer(e) : e;
        }),
        (Vt.prototype.dehanceValues = function (e) {
          return void 0 !== this.dehancer && 0 < e.length
            ? e.map(this.dehancer)
            : e;
        }),
        (Vt.prototype.intercept = function (e) {
          return Nt(this, e);
        }),
        (Vt.prototype.observe = function (e, t) {
          return (
            (t = void 0 === t ? !1 : t) &&
              e({
                object: this.proxy,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0,
              }),
            Lt(this, e)
          );
        }),
        (Vt.prototype.getArrayLength = function () {
          return this.atom.reportObserved(), this.values.length;
        }),
        (Vt.prototype.setArrayLength = function (e) {
          if ("number" != typeof e || e < 0)
            throw new Error("[mobx.array] Out of range: " + e);
          var t = this.values.length;
          if (e !== t)
            if (t < e) {
              for (var r = new Array(e - t), n = 0; n < e - t; n++)
                r[n] = void 0;
              this.spliceWithArray(t, 0, r);
            } else this.spliceWithArray(e, t - e);
        }),
        (Vt.prototype.updateArrayLength = function (e, t) {
          if (e !== this.lastKnownLength)
            throw new Error(
              "[mobx] Modification exception: the internal structure of an observable array was changed."
            );
          this.lastKnownLength += t;
        }),
        (Vt.prototype.spliceWithArray = function (e, t, r) {
          var n = this;
          oe(this.atom);
          var o = this.values.length;
          if (
            (void 0 === e
              ? (e = 0)
              : o < e
              ? (e = o)
              : e < 0 && (e = Math.max(0, o + e)),
            (t =
              1 === arguments.length
                ? o - e
                : null == t
                ? 0
                : Math.max(0, Math.min(t, o - e))),
            void 0 === r && (r = u),
            Bt(this))
          ) {
            var i = Pt(this, {
              object: this.proxy,
              type: "splice",
              index: e,
              removedCount: t,
              added: r,
            });
            if (!i) return u;
            (t = i.removedCount), (r = i.added);
          }
          r =
            0 === r.length
              ? r
              : r.map(function (e) {
                  return n.enhancer(e, void 0);
                });
          i = this.spliceItemsIntoValues(e, t, r);
          return (
            (0 === t && 0 === r.length) || this.notifyArraySplice(e, r, i),
            this.dehanceValues(i)
          );
        }),
        (Vt.prototype.spliceItemsIntoValues = function (e, t, r) {
          if (r.length < 1e4)
            return (n = this.values).splice.apply(n, x([e, t], r));
          var n = this.values.slice(e, e + t);
          return (
            (this.values = this.values
              .slice(0, e)
              .concat(r, this.values.slice(e + t))),
            n
          );
        }),
        (Vt.prototype.notifyArrayChildUpdate = function (e, t, r) {
          var n = !this.owned && !1,
            o = Dt(this),
            r =
              o || n
                ? {
                    object: this.proxy,
                    type: "update",
                    index: e,
                    newValue: t,
                    oldValue: r,
                  }
                : null;
          this.atom.reportChanged(), o && Ut(this, r);
        }),
        (Vt.prototype.notifyArraySplice = function (e, t, r) {
          var n = !this.owned && !1,
            o = Dt(this),
            t =
              o || n
                ? {
                    object: this.proxy,
                    type: "splice",
                    index: e,
                    removed: r,
                    added: t,
                    removedCount: r.length,
                    addedCount: t.length,
                  }
                : null;
          this.atom.reportChanged(), o && Ut(this, t);
        }),
        Vt);
      function Vt(r, n, e) {
        (this.owned = e),
          (this.values = []),
          (this.proxy = void 0),
          (this.lastKnownLength = 0),
          (this.atom = new m(r || "ObservableArray@" + y())),
          (this.enhancer = function (e, t) {
            return n(e, t, r + "[..]");
          });
      }
      var zt = {
        intercept: function (e) {
          return this[b].intercept(e);
        },
        observe: function (e, t) {
          return this[b].observe(e, (t = void 0 === t ? !1 : t));
        },
        clear: function () {
          return this.splice(0);
        },
        replace: function (e) {
          var t = this[b];
          return t.spliceWithArray(0, t.values.length, e);
        },
        toJS: function () {
          return this.slice();
        },
        toJSON: function () {
          return this.toJS();
        },
        splice: function (e, t) {
          for (var r = [], n = 2; n < arguments.length; n++)
            r[n - 2] = arguments[n];
          var o = this[b];
          switch (arguments.length) {
            case 0:
              return [];
            case 1:
              return o.spliceWithArray(e);
            case 2:
              return o.spliceWithArray(e, t);
          }
          return o.spliceWithArray(e, t, r);
        },
        spliceWithArray: function (e, t, r) {
          return this[b].spliceWithArray(e, t, r);
        },
        push: function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          var r = this[b];
          return r.spliceWithArray(r.values.length, 0, e), r.values.length;
        },
        pop: function () {
          return this.splice(Math.max(this[b].values.length - 1, 0), 1)[0];
        },
        shift: function () {
          return this.splice(0, 1)[0];
        },
        unshift: function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          var r = this[b];
          return r.spliceWithArray(0, 0, e), r.values.length;
        },
        reverse: function () {
          var e = this.slice();
          return e.reverse.apply(e, arguments);
        },
        sort: function (e) {
          var t = this.slice();
          return t.sort.apply(t, arguments);
        },
        remove: function (e) {
          var t = this[b],
            e = t.dehanceValues(t.values).indexOf(e);
          return -1 < e && (this.splice(e, 1), !0);
        },
        get: function (e) {
          var t = this[b];
          if (t) {
            if (e < t.values.length)
              return t.atom.reportObserved(), t.dehanceValue(t.values[e]);
            console.warn(
              "[mobx.array] Attempt to read an array index (" +
                e +
                ") that is out of bounds (" +
                t.values.length +
                "). Please check length first. Out of bound indices will not be tracked by MobX"
            );
          }
        },
        set: function (e, t) {
          var r = this[b],
            n = r.values;
          if (e < n.length) {
            oe(r.atom);
            var o = n[e];
            if (Bt(r)) {
              var i = Pt(r, {
                type: "update",
                object: r.proxy,
                index: e,
                newValue: t,
              });
              if (!i) return;
              t = i.newValue;
            }
            (t = r.enhancer(t, o)) !== o &&
              ((n[e] = t), r.notifyArrayChildUpdate(e, t, o));
          } else {
            if (e !== n.length)
              throw new Error(
                "[mobx.array] Index out of bounds, " +
                  e +
                  " is larger than " +
                  n.length
              );
            r.spliceWithArray(e, 0, [t]);
          }
        },
      };
      [
        "concat",
        "flat",
        "includes",
        "indexOf",
        "join",
        "lastIndexOf",
        "slice",
        "toString",
        "toLocaleString",
      ].forEach(function (t) {
        "function" == typeof Array.prototype[t] &&
          (zt[t] = function () {
            var e = this[b];
            e.atom.reportObserved();
            e = e.dehanceValues(e.values);
            return e[t].apply(e, arguments);
          });
      }),
        [
          "every",
          "filter",
          "find",
          "findIndex",
          "flatMap",
          "forEach",
          "map",
          "some",
        ].forEach(function (t) {
          "function" == typeof Array.prototype[t] &&
            (zt[t] = function (r, n) {
              var o = this,
                e = this[b];
              return (
                e.atom.reportObserved(),
                e.dehanceValues(e.values)[t](function (e, t) {
                  return r.call(n, e, t, o);
                }, n)
              );
            });
        }),
        ["reduce", "reduceRight"].forEach(function (e) {
          zt[e] = function () {
            var n = this,
              o = this[b];
            o.atom.reportObserved();
            var i = arguments[0];
            return (
              (arguments[0] = function (e, t, r) {
                return (t = o.dehanceValue(t)), i(e, t, r, n);
              }),
              o.values[e].apply(o.values, arguments)
            );
          };
        });
      var Ht,
        $t = a("ObservableArrayAdministration", Wt);
      function Gt(e) {
        return i(e) && $t(e[b]);
      }
      var Kt = {},
        qt =
          ((Yt.prototype._has = function (e) {
            return this._data.has(e);
          }),
          (Yt.prototype.has = function (e) {
            var t = this;
            if (!Pe.trackingDerivation) return this._has(e);
            var r,
              n = this._hasMap.get(e);
            return (
              n ||
                ((r = n = new Ae(
                  this._has(e),
                  L,
                  this.name + "." + f(e) + "?",
                  !1
                )),
                this._hasMap.set(e, r),
                st(r, function () {
                  return t._hasMap.delete(e);
                })),
              n.get()
            );
          }),
          (Yt.prototype.set = function (e, t) {
            var r = this._has(e);
            if (Bt(this)) {
              var n = Pt(this, {
                type: r ? "update" : "add",
                object: this,
                newValue: t,
                name: e,
              });
              if (!n) return this;
              t = n.newValue;
            }
            return r ? this._updateValue(e, t) : this._addValue(e, t), this;
          }),
          (Yt.prototype.delete = function (e) {
            var t = this;
            if (
              (oe(this._keysAtom), Bt(this)) &&
              !(n = Pt(this, { type: "delete", object: this, name: e }))
            )
              return !1;
            if (this._has(e)) {
              var r = Dt(this),
                n = r
                  ? {
                      type: "delete",
                      object: this,
                      oldValue: this._data.get(e).value,
                      name: e,
                    }
                  : null;
              return (
                Ct(function () {
                  t._keysAtom.reportChanged(),
                    t._updateHasMapEntry(e, !1),
                    t._data.get(e).setNewValue(void 0),
                    t._data.delete(e);
                }),
                r && Ut(this, n),
                !0
              );
            }
            return !1;
          }),
          (Yt.prototype._updateHasMapEntry = function (e, t) {
            e = this._hasMap.get(e);
            e && e.setNewValue(t);
          }),
          (Yt.prototype._updateValue = function (e, t) {
            var r,
              n = this._data.get(e);
            (t = n.prepareNewValue(t)) !== Pe.UNCHANGED &&
              ((e = (r = Dt(this))
                ? {
                    type: "update",
                    object: this,
                    oldValue: n.value,
                    name: e,
                    newValue: t,
                  }
                : null),
              n.setNewValue(t),
              r && Ut(this, e));
          }),
          (Yt.prototype._addValue = function (t, r) {
            var n = this;
            oe(this._keysAtom),
              Ct(function () {
                var e = new Ae(r, n.enhancer, n.name + "." + f(t), !1);
                n._data.set(t, e),
                  (r = e.value),
                  n._updateHasMapEntry(t, !0),
                  n._keysAtom.reportChanged();
              });
            var e = Dt(this),
              o = e
                ? { type: "add", object: this, name: t, newValue: r }
                : null;
            e && Ut(this, o);
          }),
          (Yt.prototype.get = function (e) {
            return this.has(e)
              ? this.dehanceValue(this._data.get(e).get())
              : this.dehanceValue(void 0);
          }),
          (Yt.prototype.dehanceValue = function (e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e;
          }),
          (Yt.prototype.keys = function () {
            return this._keysAtom.reportObserved(), this._data.keys();
          }),
          (Yt.prototype.values = function () {
            var r = this,
              n = this.keys();
            return yr({
              next: function () {
                var e = n.next(),
                  t = e.done,
                  e = e.value;
                return { done: t, value: t ? void 0 : r.get(e) };
              },
            });
          }),
          (Yt.prototype.entries = function () {
            var r = this,
              n = this.keys();
            return yr({
              next: function () {
                var e = n.next(),
                  t = e.done,
                  e = e.value;
                return { done: t, value: t ? void 0 : [e, r.get(e)] };
              },
            });
          }),
          (Yt.prototype[((Ht = b), Symbol.iterator)] = function () {
            return this.entries();
          }),
          (Yt.prototype.forEach = function (e, t) {
            var r, n;
            try {
              for (var o = C(this), i = o.next(); !i.done; i = o.next()) {
                var a = k(i.value, 2),
                  s = a[0],
                  u = a[1];
                e.call(t, u, s, this);
              }
            } catch (e) {
              r = { error: e };
            } finally {
              try {
                i && !i.done && (n = o.return) && n.call(o);
              } finally {
                if (r) throw r.error;
              }
            }
          }),
          (Yt.prototype.merge = function (t) {
            var r = this;
            return (
              Jt(t) && (t = t.toJS()),
              Ct(function () {
                var e = ve(!0);
                try {
                  S(t)
                    ? p(t).forEach(function (e) {
                        return r.set(e, t[e]);
                      })
                    : Array.isArray(t)
                    ? t.forEach(function (e) {
                        var t = k(e, 2),
                          e = t[0],
                          t = t[1];
                        return r.set(e, t);
                      })
                    : T(t)
                    ? (t.constructor !== Map &&
                        w(
                          "Cannot initialize from classes that inherit from Map: " +
                            t.constructor.name
                        ),
                      t.forEach(function (e, t) {
                        return r.set(t, e);
                      }))
                    : null != t && w("Cannot initialize map from " + t);
                } finally {
                  Ee(e);
                }
              }),
              this
            );
          }),
          (Yt.prototype.clear = function () {
            var i = this;
            Ct(function () {
              se(function () {
                var t, e;
                try {
                  for (
                    var r = C(i.keys()), n = r.next();
                    !n.done;
                    n = r.next()
                  ) {
                    var o = n.value;
                    i.delete(o);
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    n && !n.done && (e = r.return) && e.call(r);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              });
            });
          }),
          (Yt.prototype.replace = function (v) {
            var E = this;
            return (
              Ct(function () {
                var t,
                  e,
                  r,
                  n,
                  o = (function (e) {
                    if (T(e) || Jt(e)) return e;
                    if (Array.isArray(e)) return new Map(e);
                    if (S(e)) {
                      var t,
                        r = new Map();
                      for (t in e) r.set(t, e[t]);
                      return r;
                    }
                    return w("Cannot convert to map from '" + e + "'");
                  })(v),
                  i = new Map(),
                  a = !1;
                try {
                  for (
                    var s = C(E._data.keys()), u = s.next();
                    !u.done;
                    u = s.next()
                  ) {
                    var l = u.value;
                    o.has(l) ||
                      (E.delete(l)
                        ? (a = !0)
                        : ((d = E._data.get(l)), i.set(l, d)));
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    u && !u.done && (e = s.return) && e.call(s);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                try {
                  for (
                    var c = C(o.entries()), p = c.next();
                    !p.done;
                    p = c.next()
                  ) {
                    var f,
                      g = k(p.value, 2),
                      l = g[0],
                      d = g[1],
                      h = E._data.has(l);
                    E.set(l, d),
                      E._data.has(l) &&
                        ((f = E._data.get(l)), i.set(l, f), h || (a = !0));
                  }
                } catch (e) {
                  r = { error: e };
                } finally {
                  try {
                    p && !p.done && (n = c.return) && n.call(c);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                if (!a)
                  if (E._data.size !== i.size) E._keysAtom.reportChanged();
                  else
                    for (
                      var y = E._data.keys(),
                        b = i.keys(),
                        m = y.next(),
                        _ = b.next();
                      !m.done;

                    ) {
                      if (m.value !== _.value) {
                        E._keysAtom.reportChanged();
                        break;
                      }
                      (m = y.next()), (_ = b.next());
                    }
                E._data = i;
              }),
              this
            );
          }),
          Object.defineProperty(Yt.prototype, "size", {
            get: function () {
              return this._keysAtom.reportObserved(), this._data.size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Yt.prototype.toPOJO = function () {
            var t,
              e,
              r = {};
            try {
              for (var n = C(this), o = n.next(); !o.done; o = n.next()) {
                var i = k(o.value, 2),
                  a = i[0],
                  s = i[1];
                r["symbol" == typeof a ? a : f(a)] = s;
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                o && !o.done && (e = n.return) && e.call(n);
              } finally {
                if (t) throw t.error;
              }
            }
            return r;
          }),
          (Yt.prototype.toJS = function () {
            return new Map(this);
          }),
          (Yt.prototype.toJSON = function () {
            return this.toPOJO();
          }),
          (Yt.prototype.toString = function () {
            var t = this;
            return (
              this.name +
              "[{ " +
              Array.from(this.keys())
                .map(function (e) {
                  return f(e) + ": " + t.get(e);
                })
                .join(", ") +
              " }]"
            );
          }),
          (Yt.prototype.observe = function (e, t) {
            return Lt(this, e);
          }),
          (Yt.prototype.intercept = function (e) {
            return Nt(this, e);
          }),
          Yt);
      function Yt(e, t, r) {
        if (
          (void 0 === t && (t = D),
          void 0 === r && (r = "ObservableMap@" + y()),
          (this.enhancer = t),
          (this.name = r),
          (this[Ht] = Kt),
          (this._keysAtom = E(this.name + ".keys()")),
          (this[Symbol.toStringTag] = "Map"),
          "function" != typeof Map)
        )
          throw new Error(
            "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js"
          );
        (this._data = new Map()), (this._hasMap = new Map()), this.merge(e);
      }
      var Xt,
        Jt = a("ObservableMap", qt),
        Qt = {},
        Zt =
          ((er.prototype.dehanceValue = function (e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e;
          }),
          (er.prototype.clear = function () {
            var i = this;
            Ct(function () {
              se(function () {
                var t, e;
                try {
                  for (
                    var r = C(i._data.values()), n = r.next();
                    !n.done;
                    n = r.next()
                  ) {
                    var o = n.value;
                    i.delete(o);
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    n && !n.done && (e = r.return) && e.call(r);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              });
            });
          }),
          (er.prototype.forEach = function (e, t) {
            var r, n;
            try {
              for (var o = C(this), i = o.next(); !i.done; i = o.next()) {
                var a = i.value;
                e.call(t, a, a, this);
              }
            } catch (e) {
              r = { error: e };
            } finally {
              try {
                i && !i.done && (n = o.return) && n.call(o);
              } finally {
                if (r) throw r.error;
              }
            }
          }),
          Object.defineProperty(er.prototype, "size", {
            get: function () {
              return this._atom.reportObserved(), this._data.size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (er.prototype.add = function (e) {
            var t,
              r,
              n = this;
            if (
              (oe(this._atom), Bt(this)) &&
              !(r = Pt(this, { type: "add", object: this, newValue: e }))
            )
              return this;
            return (
              this.has(e) ||
                (Ct(function () {
                  n._data.add(n.enhancer(e, void 0)), n._atom.reportChanged();
                }),
                (r = (t = Dt(this))
                  ? { type: "add", object: this, newValue: e }
                  : null),
                t && Ut(this, r)),
              this
            );
          }),
          (er.prototype.delete = function (e) {
            var t = this;
            if (
              Bt(this) &&
              !(n = Pt(this, { type: "delete", object: this, oldValue: e }))
            )
              return !1;
            if (this.has(e)) {
              var r = Dt(this),
                n = r ? { type: "delete", object: this, oldValue: e } : null;
              return (
                Ct(function () {
                  t._atom.reportChanged(), t._data.delete(e);
                }),
                r && Ut(this, n),
                !0
              );
            }
            return !1;
          }),
          (er.prototype.has = function (e) {
            return (
              this._atom.reportObserved(), this._data.has(this.dehanceValue(e))
            );
          }),
          (er.prototype.entries = function () {
            var t = 0,
              r = Array.from(this.keys()),
              n = Array.from(this.values());
            return yr({
              next: function () {
                var e = t;
                return (
                  (t += 1),
                  e < n.length
                    ? { value: [r[e], n[e]], done: !1 }
                    : { done: !0 }
                );
              },
            });
          }),
          (er.prototype.keys = function () {
            return this.values();
          }),
          (er.prototype.values = function () {
            this._atom.reportObserved();
            var e = this,
              t = 0,
              r = Array.from(this._data.values());
            return yr({
              next: function () {
                return t < r.length
                  ? { value: e.dehanceValue(r[t++]), done: !1 }
                  : { done: !0 };
              },
            });
          }),
          (er.prototype.replace = function (t) {
            var r = this;
            return (
              tr(t) && (t = t.toJS()),
              Ct(function () {
                var e = ve(!0);
                try {
                  Array.isArray(t)
                    ? (r.clear(),
                      t.forEach(function (e) {
                        return r.add(e);
                      }))
                    : c(t)
                    ? (r.clear(),
                      t.forEach(function (e) {
                        return r.add(e);
                      }))
                    : null != t && w("Cannot initialize set from " + t);
                } finally {
                  Ee(e);
                }
              }),
              this
            );
          }),
          (er.prototype.observe = function (e, t) {
            return Lt(this, e);
          }),
          (er.prototype.intercept = function (e) {
            return Nt(this, e);
          }),
          (er.prototype.toJS = function () {
            return new Set(this);
          }),
          (er.prototype.toString = function () {
            return this.name + "[ " + Array.from(this).join(", ") + " ]";
          }),
          (er.prototype[((Xt = b), Symbol.iterator)] = function () {
            return this.values();
          }),
          er);
      function er(e, r, n) {
        if (
          (void 0 === r && (r = D),
          void 0 === n && (n = "ObservableSet@" + y()),
          (this.name = n),
          (this[Xt] = Qt),
          (this._data = new Set()),
          (this._atom = E(this.name)),
          (this[Symbol.toStringTag] = "Set"),
          "function" != typeof Set)
        )
          throw new Error(
            "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js"
          );
        (this.enhancer = function (e, t) {
          return r(e, t, n);
        }),
          e && this.replace(e);
      }
      var tr = a("ObservableSet", Zt),
        rr =
          ((nr.prototype.read = function (e) {
            return this.values.get(e).get();
          }),
          (nr.prototype.write = function (e, t) {
            var r,
              n,
              o = this.target,
              i = this.values.get(e);
            if (i instanceof Ce) i.set(t);
            else {
              if (Bt(this)) {
                if (
                  !(n = Pt(this, {
                    type: "update",
                    object: this.proxy || o,
                    name: e,
                    newValue: t,
                  }))
                )
                  return;
                t = n.newValue;
              }
              (t = i.prepareNewValue(t)) !== Pe.UNCHANGED &&
                ((n = (r = Dt(this))
                  ? {
                      type: "update",
                      object: this.proxy || o,
                      oldValue: i.value,
                      name: e,
                      newValue: t,
                    }
                  : null),
                i.setNewValue(t),
                r && Ut(this, n));
            }
          }),
          (nr.prototype.has = function (e) {
            var t = this.pendingKeys || (this.pendingKeys = new Map());
            if ((n = t.get(e))) return n.get();
            var r = !!this.values.get(e),
              n = new Ae(r, L, this.name + "." + f(e) + "?", !1);
            return t.set(e, n), n.get();
          }),
          (nr.prototype.addObservableProp = function (e, t, r) {
            void 0 === r && (r = this.defaultEnhancer);
            var n = this.target;
            if (Bt(this)) {
              var o = Pt(this, {
                object: this.proxy || n,
                name: e,
                type: "add",
                newValue: t,
              });
              if (!o) return;
              t = o.newValue;
            }
            var i,
              r = new Ae(t, r, this.name + "." + f(e), !1);
            this.values.set(e, r),
              (t = r.value),
              Object.defineProperty(
                n,
                e,
                ir[(i = e)] ||
                  (ir[i] = {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                      return this[b].read(i);
                    },
                    set: function (e) {
                      this[b].write(i, e);
                    },
                  })
              ),
              this.notifyPropertyAddition(e, t);
          }),
          (nr.prototype.addComputedProp = function (e, t, r) {
            var n,
              o = this.target;
            (r.name = r.name || this.name + "." + f(t)),
              this.values.set(t, new Ce(r)),
              (e !== o &&
                ((o = t),
                (o = Object.getOwnPropertyDescriptor(e, o)) &&
                  (!1 === o.configurable || !1 === o.writable))) ||
                Object.defineProperty(
                  e,
                  t,
                  ar[(n = t)] ||
                    (ar[n] = {
                      configurable: Pe.computedConfigurable,
                      enumerable: !1,
                      get: function () {
                        return sr(this).read(n);
                      },
                      set: function (e) {
                        sr(this).write(n, e);
                      },
                    })
                );
          }),
          (nr.prototype.remove = function (e) {
            if (this.values.has(e)) {
              var t = this.target;
              if (Bt(this))
                if (
                  !(a = Pt(this, {
                    object: this.proxy || t,
                    name: e,
                    type: "remove",
                  }))
                )
                  return;
              try {
                Ue();
                var r,
                  n = Dt(this),
                  o = this.values.get(e),
                  i = o && o.get();
                o && o.set(void 0),
                  this.keysAtom.reportChanged(),
                  this.values.delete(e),
                  !this.pendingKeys ||
                    ((r = this.pendingKeys.get(e)) && r.set(!1)),
                  delete this.target[e];
                var a = n
                  ? {
                      type: "remove",
                      object: this.proxy || t,
                      oldValue: i,
                      name: e,
                    }
                  : null;
                0, n && Ut(this, a);
              } finally {
                Fe();
              }
            }
          }),
          (nr.prototype.illegalAccess = function (e, t) {
            console.warn(
              "Property '" +
                t +
                "' of '" +
                e +
                "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner"
            );
          }),
          (nr.prototype.observe = function (e, t) {
            return Lt(this, e);
          }),
          (nr.prototype.intercept = function (e) {
            return Nt(this, e);
          }),
          (nr.prototype.notifyPropertyAddition = function (e, t) {
            var r = Dt(this),
              t = r
                ? {
                    type: "add",
                    object: this.proxy || this.target,
                    name: e,
                    newValue: t,
                  }
                : null;
            r && Ut(this, t),
              !this.pendingKeys || ((e = this.pendingKeys.get(e)) && e.set(!0)),
              this.keysAtom.reportChanged();
          }),
          (nr.prototype.getKeys = function () {
            var t, e;
            this.keysAtom.reportObserved();
            var r = [];
            try {
              for (
                var n = C(this.values), o = n.next();
                !o.done;
                o = n.next()
              ) {
                var i = k(o.value, 2),
                  a = i[0];
                i[1] instanceof Ae && r.push(a);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                o && !o.done && (e = n.return) && e.call(n);
              } finally {
                if (t) throw t.error;
              }
            }
            return r;
          }),
          nr);
      function nr(e, t, r, n) {
        void 0 === t && (t = new Map()),
          (this.target = e),
          (this.values = t),
          (this.name = r),
          (this.defaultEnhancer = n),
          (this.keysAtom = new m(r + ".keys"));
      }
      function or(e, t, r) {
        if (
          (void 0 === t && (t = ""),
          void 0 === r && (r = D),
          Object.prototype.hasOwnProperty.call(e, b))
        )
          return e[b];
        t =
          (t = !S(e)
            ? (e.constructor.name || "ObservableObject") + "@" + y()
            : t) || "ObservableObject@" + y();
        r = new rr(e, new Map(), f(t), r);
        return l(e, b, r), r;
      }
      var ir = Object.create(null),
        ar = Object.create(null);
      function sr(e) {
        var t = e[b];
        return t || (N(e), e[b]);
      }
      var ur = a("ObservableObjectAdministration", rr);
      function lr(e) {
        return !!i(e) && (N(e), ur(e[b]));
      }
      function cr(e, t) {
        if ("object" == typeof e && null !== e) {
          if (Gt(e)) return void 0 !== t && w(!1), e[b].atom;
          if (tr(e)) return e[b];
          if (Jt(e)) {
            var r = e;
            return void 0 === t
              ? r._keysAtom
              : ((n = r._data.get(t) || r._hasMap.get(t)) || w(!1), n);
          }
          var n;
          if ((N(e), t && !e[b] && e[t], lr(e)))
            return t ? ((n = e[b].values.get(t)) || w(!1), n) : w(!1);
          if (v(e) || xe(e) || Ye(e)) return e;
        } else if ("function" == typeof e && Ye(e[b])) return e[b];
        return w(!1);
      }
      function pr(e, t) {
        return (
          e || w("Expecting some object"),
          void 0 !== t
            ? pr(cr(e, t))
            : v(e) || xe(e) || Ye(e) || Jt(e) || tr(e)
            ? e
            : (N(e), e[b] || void w(!1))
        );
      }
      var fr = Object.prototype.toString;
      function gr(e, t, r) {
        return (function e(t, r, n, o, i) {
          if (t === r) return 0 !== t || 1 / t == 1 / r;
          if (null == t || null == r) return !1;
          if (t != t) return r != r;
          var a = typeof t;
          if ("function" != a && "object" != a && "object" != typeof r)
            return !1;
          var s = fr.call(t);
          if (s !== fr.call(r)) return !1;
          switch (s) {
            case "[object RegExp]":
            case "[object String]":
              return "" + t == "" + r;
            case "[object Number]":
              return +t != +t ? +r != +r : 0 == +t ? 1 / +t == 1 / r : +t == +r;
            case "[object Date]":
            case "[object Boolean]":
              return +t == +r;
            case "[object Symbol]":
              return (
                "undefined" != typeof Symbol &&
                Symbol.valueOf.call(t) === Symbol.valueOf.call(r)
              );
            case "[object Map]":
            case "[object Set]":
              0 <= n && n++;
          }
          t = dr(t);
          r = dr(r);
          var u = "[object Array]" === s;
          if (!u) {
            if ("object" != typeof t || "object" != typeof r) return !1;
            (a = t.constructor), (s = r.constructor);
            if (
              a !== s &&
              !(
                "function" == typeof a &&
                a instanceof a &&
                "function" == typeof s &&
                s instanceof s
              ) &&
              "constructor" in t &&
              "constructor" in r
            )
              return !1;
          }
          {
            if (0 === n) return !1;
            n < 0 && (n = -1);
          }
          o = o || [];
          i = i || [];
          var l = o.length;
          for (; l--; ) if (o[l] === t) return i[l] === r;
          o.push(t);
          i.push(r);
          if (u) {
            if ((l = t.length) !== r.length) return !1;
            for (; l--; ) if (!e(t[l], r[l], n - 1, o, i)) return !1;
          } else {
            var c = Object.keys(t),
              p = void 0;
            if (((l = c.length), Object.keys(r).length !== l)) return !1;
            for (; l--; )
              if (((p = c[l]), !hr(r, p) || !e(t[p], r[p], n - 1, o, i)))
                return !1;
          }
          o.pop();
          i.pop();
          return !0;
        })(e, t, (r = void 0 === r ? -1 : r));
      }
      function dr(e) {
        return Gt(e)
          ? e.slice()
          : T(e) || Jt(e) || c(e) || tr(e)
          ? Array.from(e.entries())
          : e;
      }
      function hr(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function yr(e) {
        return (e[Symbol.iterator] = br), e;
      }
      function br() {
        return this;
      }
      if ("undefined" == typeof Proxy || "undefined" == typeof Symbol)
        throw new Error(
          "[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore."
        );
      "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
          spy: Xe,
          extras: {
            getDebugName: function (e, t) {
              return (e =
                void 0 !== t
                  ? cr(e, t)
                  : (lr(e) || Jt(e) || tr(e) ? pr : cr)(e)).name;
            },
          },
          $mobx: b,
        });
    }.call(this, _r("8oxB"), _r("yLpj"));
  },
  "49sm": function (e, t) {
    var r = {}.toString;
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == r.call(e);
      };
  },
  "5oMp": function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  },
  "8oxB": function (e, t) {
    var r,
      n,
      e = (e.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function i() {
      throw new Error("clearTimeout has not been defined");
    }
    function a(t) {
      if (r === setTimeout) return setTimeout(t, 0);
      if ((r === o || !r) && setTimeout)
        return (r = setTimeout), setTimeout(t, 0);
      try {
        return r(t, 0);
      } catch (e) {
        try {
          return r.call(null, t, 0);
        } catch (e) {
          return r.call(this, t, 0);
        }
      }
    }
    !(function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        r = o;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : i;
      } catch (e) {
        n = i;
      }
    })();
    var s,
      u = [],
      l = !1,
      c = -1;
    function p() {
      l &&
        s &&
        ((l = !1), s.length ? (u = s.concat(u)) : (c = -1), u.length && f());
    }
    function f() {
      if (!l) {
        var e = a(p);
        l = !0;
        for (var t = u.length; t; ) {
          for (s = u, u = []; ++c < t; ) s && s[c].run();
          (c = -1), (t = u.length);
        }
        (s = null),
          (l = !1),
          (function (t) {
            if (n === clearTimeout) return clearTimeout(t);
            if ((n === i || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(t);
            try {
              n(t);
            } catch (e) {
              try {
                return n.call(null, t);
              } catch (e) {
                return n.call(this, t);
              }
            }
          })(e);
      }
    }
    function g(e, t) {
      (this.fun = e), (this.array = t);
    }
    function d() {}
    (e.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (1 < arguments.length)
        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      u.push(new g(e, t)), 1 !== u.length || l || a(f);
    }),
      (g.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (e.title = "browser"),
      (e.browser = !0),
      (e.env = {}),
      (e.argv = []),
      (e.version = ""),
      (e.versions = {}),
      (e.on = d),
      (e.addListener = d),
      (e.once = d),
      (e.off = d),
      (e.removeListener = d),
      (e.removeAllListeners = d),
      (e.emit = d),
      (e.prependListener = d),
      (e.prependOnceListener = d),
      (e.listeners = function (e) {
        return [];
      }),
      (e.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (e.cwd = function () {
        return "/";
      }),
      (e.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (e.umask = function () {
        return 0;
      });
  },
  "9rSQ": function (e, t, r) {
    "use strict";
    var n = r("xTJ+");
    function o() {
      this.handlers = [];
    }
    (o.prototype.use = function (e, t, r) {
      return (
        this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: !!r && r.synchronous,
          runWhen: r ? r.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }),
      (o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (o.prototype.forEach = function (t) {
        n.forEach(this.handlers, function (e) {
          null !== e && t(e);
        });
      }),
      (e.exports = o);
  },
  CgaS: function (e, t, r) {
    "use strict";
    var n = r("xTJ+"),
      o = r("MLWZ"),
      i = r("9rSQ"),
      c = r("UnBK"),
      p = r("SntB"),
      f = r("hIuj"),
      g = f.validators;
    function a(e) {
      (this.defaults = e),
        (this.interceptors = { request: new i(), response: new i() });
    }
    (a.prototype.request = function (t) {
      "string" == typeof t
        ? ((t = arguments[1] || {}).url = arguments[0])
        : (t = t || {}),
        (t = p(this.defaults, t)).method
          ? (t.method = t.method.toLowerCase())
          : this.defaults.method
          ? (t.method = this.defaults.method.toLowerCase())
          : (t.method = "get");
      var e = t.transitional;
      void 0 !== e &&
        f.assertOptions(
          e,
          {
            silentJSONParsing: g.transitional(g.boolean, "1.0.0"),
            forcedJSONParsing: g.transitional(g.boolean, "1.0.0"),
            clarifyTimeoutError: g.transitional(g.boolean, "1.0.0"),
          },
          !1
        );
      var r = [],
        n = !0;
      this.interceptors.request.forEach(function (e) {
        ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
          ((n = n && e.synchronous), r.unshift(e.fulfilled, e.rejected));
      });
      var o,
        i = [];
      if (
        (this.interceptors.response.forEach(function (e) {
          i.push(e.fulfilled, e.rejected);
        }),
        !n)
      ) {
        var a = [c, void 0];
        for (
          Array.prototype.unshift.apply(a, r),
            a = a.concat(i),
            o = Promise.resolve(t);
          a.length;

        )
          o = o.then(a.shift(), a.shift());
        return o;
      }
      for (var s = t; r.length; ) {
        var u = r.shift(),
          l = r.shift();
        try {
          s = u(s);
        } catch (e) {
          l(e);
          break;
        }
      }
      try {
        o = c(s);
      } catch (e) {
        return Promise.reject(e);
      }
      for (; i.length; ) o = o.then(i.shift(), i.shift());
      return o;
    }),
      (a.prototype.getUri = function (e) {
        return (
          (e = p(this.defaults, e)),
          o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        );
      }),
      n.forEach(["delete", "get", "head", "options"], function (r) {
        a.prototype[r] = function (e, t) {
          return this.request(
            p(t || {}, { method: r, url: e, data: (t || {}).data })
          );
        };
      }),
      n.forEach(["post", "put", "patch"], function (n) {
        a.prototype[n] = function (e, t, r) {
          return this.request(p(r || {}, { method: n, url: e, data: t }));
        };
      }),
      (e.exports = a);
  },
  ChfH: function (e, t, r) {},
  DfZB: function (e, t, r) {
    "use strict";
    e.exports = function (t) {
      return function (e) {
        return t.apply(null, e);
      };
    };
  },
  Gp1o: function (e, T, A) {
    "use strict";
    !function (e) {
      A.d(T, "a", function () {
        return b;
      });
      function u() {}
      var l = A("2vnA");
      function r(e) {
        throw new Error("[mobx-utils] " + e);
      }
      function c(e, t) {
        void 0 === t && (t = "Illegal state"), e || r(t);
      }
      function t(e) {
        return (
          e &&
          e !== Object.prototype &&
          Object.getOwnPropertyNames(e).concat(
            t(Object.getPrototypeOf(e)) || []
          )
        );
      }
      var n,
        o = function (e) {
          var r = t(e);
          return r.filter(function (e, t) {
            return r.indexOf(e) === t;
          });
        },
        i = "fulfilled",
        a = "rejected";
      ((n = {}).reject = Object(l.k)("fromPromise.reject", function (e) {
        var t = n(Promise.reject(e));
        return (t.state = a), (t.value = e), t;
      })),
        (n.resolve = Object(l.k)("fromPromise.resolve", function (e) {
          void 0 === e && (e = void 0);
          var t = n(Promise.resolve(e));
          return (t.state = i), (t.value = e), t;
        }));
      function s(e, t, r) {
        void 0 === t && (t = u);
        function n() {
          o && ((o = !1), t());
        }
        var o = !1,
          i = !1,
          a = (r = void 0 === r ? void 0 : r),
          s = Object(l.o)(
            "ResourceBasedObservable",
            function () {
              c(!o && !i),
                (o = !0),
                e(function (e) {
                  Object(l.d)(!0, function () {
                    (a = e), s.reportChanged();
                  });
                });
            },
            n
          );
        return {
          current: function () {
            return (
              c(!i, "subscribingObservable has already been disposed"),
              s.reportObserved() ||
                o ||
                console.warn(
                  "Called `get` of a subscribingObservable outside a reaction. Current value will be returned but no new subscription has started"
                ),
              a
            );
          },
          dispose: function () {
            (i = !0), n();
          },
          isAlive: function () {
            return o;
          },
        };
      }
      var p = function (e, t, r, n) {
        var o,
          i = arguments.length,
          a =
            i < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, r))
              : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, r, n);
        else
          for (var s = e.length - 1; 0 <= s; s--)
            (o = e[s]) &&
              (a = (i < 3 ? o(a) : 3 < i ? o(t, r, a) : o(t, r)) || a);
        return 3 < i && a && Object.defineProperty(t, r, a), a;
      };
      (f.prototype.dispose = function () {
        this.subscription && this.subscription.unsubscribe();
      }),
        (f.prototype.next = function (e) {
          this.current = e;
        }),
        (f.prototype.complete = function () {
          this.dispose();
        }),
        (f.prototype.error = function (e) {
          (this.current = e), this.dispose();
        }),
        p([l.B.ref], f.prototype, "current", void 0),
        p([l.k.bound], f.prototype, "next", null),
        p([l.k.bound], f.prototype, "complete", null),
        p([l.k.bound], f.prototype, "error", null);
      function f(e, t) {
        var r = this;
        Object(l.F)(function () {
          (r.current = t), (r.subscription = e.subscribe(r));
        });
      }
      var g = function () {
          return (g =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
        p = function (e, t, r, n) {
          var o,
            i = arguments.length,
            a =
              i < 3
                ? t
                : null === n
                ? (n = Object.getOwnPropertyDescriptor(t, r))
                : n;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, r, n);
          else
            for (var s = e.length - 1; 0 <= s; s--)
              (o = e[s]) &&
                (a = (i < 3 ? o(a) : 3 < i ? o(t, r, a) : o(t, r)) || a);
          return 3 < i && a && Object.defineProperty(t, r, a), a;
        },
        d = [
          "model",
          "reset",
          "submit",
          "isDirty",
          "isPropertyDirty",
          "resetProperty",
        ];
      Object.defineProperty(h.prototype, "isDirty", {
        get: function () {
          return 0 < this.localValues.size;
        },
        enumerable: !1,
        configurable: !0,
      }),
        Object.defineProperty(h.prototype, "changedValues", {
          get: function () {
            return this.localValues.toJS();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (h.prototype.submit = function () {
          var n = this;
          Object(l.A)(this.localValues).forEach(function (e) {
            var t = n.localValues.get(e),
              r = n.model[e];
            Object(l.x)(r)
              ? r.replace(t)
              : Object(l.y)(r)
              ? (r.clear(), r.merge(t))
              : Object(l.v)(t) || (n.model[e] = t);
          }),
            this.localValues.clear();
        }),
        (h.prototype.reset = function () {
          this.localValues.clear();
        }),
        (h.prototype.resetProperty = function (e) {
          this.localValues.delete(e);
        }),
        p([l.m], h.prototype, "isDirty", null),
        p([l.m], h.prototype, "changedValues", null),
        p([l.k.bound], h.prototype, "submit", null),
        p([l.k.bound], h.prototype, "reset", null),
        p([l.k.bound], h.prototype, "resetProperty", null);
      function h(r) {
        var n = this;
        (this.model = r),
          (this.localValues = l.B.map({})),
          (this.localComputedValues = l.B.map({})),
          (this.isPropertyDirty = function (e) {
            return n.localValues.has(e);
          }),
          c(Object(l.z)(r), "createViewModel expects an observable object"),
          o(r)
            .filter(function (e) {
              return "constructor" !== e && !~e.indexOf("__");
            })
            .forEach(function (t) {
              var e;
              t !== l.a &&
                "__mobxDidRunLazyInitializers" !== t &&
                (c(
                  -1 === d.indexOf(t),
                  "The propertyname " +
                    t +
                    " is reserved and cannot be used with viewModels"
                ),
                Object(l.w)(r, t) &&
                  ((e = Object(l.h)(r, t).derivation),
                  n.localComputedValues.set(t, Object(l.m)(e.bind(n)))),
                (e = (e = Object.getOwnPropertyDescriptor(r, t))
                  ? { enumerable: e.enumerable }
                  : {}),
                Object.defineProperty(
                  n,
                  t,
                  g(g({}, e), {
                    configurable: !0,
                    get: function () {
                      return Object(l.w)(r, t)
                        ? n.localComputedValues.get(t).get()
                        : n.isPropertyDirty(t)
                        ? n.localValues.get(t)
                        : n.model[t];
                    },
                    set: Object(l.k)(function (e) {
                      e !== n.model[t]
                        ? n.localValues.set(t, e)
                        : n.localValues.delete(t);
                    }),
                  })
                ));
            });
      }
      var y = {};
      function b(e) {
        return (
          void 0 === e && (e = 1e3),
          Object(l.i)()
            ? (y[e] ||
                (y[e] =
                  "number" == typeof e
                    ? ((t = e),
                      s(
                        function (e) {
                          e(Date.now()),
                            (n = setInterval(function () {
                              return e(Date.now());
                            }, t));
                        },
                        function () {
                          clearInterval(n);
                        },
                        Date.now()
                      ))
                    : (r = s(
                        function (t) {
                          t(Date.now()),
                            (function e() {
                              window.requestAnimationFrame(function () {
                                t(Date.now()), r.isAlive() && e();
                              });
                            })();
                        },
                        function () {},
                        Date.now()
                      ))),
              y[e].current())
            : Date.now()
        );
        var r, t, n;
      }
      var m,
        _,
        p =
          ((m = function (e, t) {
            return (m =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            function r() {
              this.constructor = e;
            }
            m(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          });
      (_ = l.b),
        p(v, _),
        (v.prototype.clear = function () {
          throw new Error("not supported");
        }),
        (v.prototype.delete = function (e) {
          throw new Error("not supported");
        }),
        (v.prototype.set = function (e, t) {
          throw new Error("not supported");
        }),
        (v.prototype.dispose = function () {
          this._disposeBaseObserver();
          for (var e = 0; e < this._base.length; e++) {
            var t = this._base[e];
            t[this._ogmInfoKey].reaction(), delete t[this._ogmInfoKey];
          }
        }),
        (v.prototype._getGroupArr = function (e) {
          var t = _.prototype.get.call(this, e);
          return (
            void 0 === t &&
              ((t = Object(l.B)([], {
                name: "GroupArray[" + this._keyToName(e) + "]",
                deep: !1,
              })),
              _.prototype.set.call(this, e, t)),
            t
          );
        }),
        (v.prototype._removeFromGroupArr = function (e, t) {
          var r = _.prototype.get.call(this, e);
          1 === r.length
            ? _.prototype.delete.call(this, e)
            : (t === r.length - 1 ||
                ((r[t] = r[r.length - 1]),
                (r[t][this._ogmInfoKey].groupArrIndex = t)),
              r.length--);
        }),
        (v.prototype._addItem = function (i) {
          var a = this,
            e = this._groupBy(i),
            t = this._getGroupArr(e),
            e = {
              groupByValue: e,
              groupArrIndex: t.length,
              reaction: Object(l.E)(
                function () {
                  return a._groupBy(i);
                },
                function (e, t) {
                  var r = i[a._ogmInfoKey];
                  a._removeFromGroupArr(r.groupByValue, r.groupArrIndex);
                  var n = a._getGroupArr(e),
                    o = n.length;
                  n.push(i), (r.groupByValue = e), (r.groupArrIndex = o);
                }
              ),
            };
          Object.defineProperty(i, this._ogmInfoKey, {
            configurable: !0,
            enumerable: !1,
            value: e,
          }),
            t.push(i);
        }),
        (v.prototype._removeItem = function (e) {
          var t = e[this._ogmInfoKey];
          this._removeFromGroupArr(t.groupByValue, t.groupArrIndex),
            t.reaction(),
            delete e[this._ogmInfoKey];
        });
      function v(e, t, r) {
        var n = void 0 === r ? {} : r,
          r = n.name,
          r = void 0 === r ? "ogm" + ((1e3 * Math.random()) | 0) : r,
          n = n.keyToName,
          n =
            void 0 === n
              ? function (e) {
                  return "" + e;
                }
              : n,
          s = _.call(this) || this;
        (s._keyToName = n),
          (s._groupBy = t),
          (s._ogmInfoKey = Symbol("ogmInfo" + r)),
          (s._base = e);
        for (var o = 0; o < e.length; o++) s._addItem(e[o]);
        return (
          (s._disposeBaseObserver = Object(l.C)(s._base, function (a) {
            if ("splice" === a.type)
              Object(l.H)(function () {
                for (var e = 0, t = a.removed; e < t.length; e++) {
                  var r = t[e];
                  s._removeItem(r);
                }
                for (var n = 0, o = a.added; n < o.length; n++) {
                  var i = o[n];
                  s._addItem(i);
                }
              });
            else {
              if ("update" !== a.type) throw new Error("illegal state");
              Object(l.H)(function () {
                s._removeItem(a.oldValue), s._addItem(a.newValue);
              });
            }
          })),
          s
        );
      }
      var E =
        ((w.prototype.exists = function () {
          this.assertNotDisposed();
          var e = this.args.length;
          return this.closestIdx >= e - 1 && this.closest.has(this.args[e - 1]);
        }),
        (w.prototype.get = function () {
          if ((this.assertNotDisposed(), !this.exists()))
            throw new Error("Entry doesn't exist");
          return this.closest.get(this.args[this.args.length - 1]);
        }),
        (w.prototype.set = function (e) {
          this.assertNotDisposed();
          for (
            var t = this.args.length, r = this.closest, n = this.closestIdx;
            n < t - 1;
            n++
          ) {
            var o = new Map();
            r.set(this.args[n], o), (r = o);
          }
          (this.closestIdx = t - 1),
            (this.closest = r).set(this.args[t - 1], e);
        }),
        (w.prototype.delete = function () {
          if ((this.assertNotDisposed(), !this.exists()))
            throw new Error("Entry doesn't exist");
          var e = this.args.length;
          this.closest.delete(this.args[e - 1]);
          for (var t = this.root, r = [t], n = 0; n < e - 1; n++)
            (t = t.get(this.args[n])), r.push(t);
          for (n = r.length - 1; 0 < n; n--)
            0 === r[n].size && r[n - 1].delete(this.args[n - 1]);
          this.isDisposed = !0;
        }),
        (w.prototype.assertNotDisposed = function () {
          if (this.isDisposed)
            throw new Error("Concurrent modification exception");
        }),
        w);
      function w(e, t) {
        (this.base = e),
          (this.args = t),
          (this.closestIdx = 0),
          (this.isDisposed = !1);
        for (
          var r = (this.closest = this.root = e), n = 0;
          n < this.args.length - 1 && (r = r.get(t[n]));
          n++
        )
          this.closest = r;
        this.closestIdx = n;
      }
      S.prototype.entry = function (e) {
        if (-1 === this.argsLength) this.argsLength = e.length;
        else if (this.argsLength !== e.length)
          throw new Error(
            "DeepMap should be used with functions with a consistent length, expected: " +
              this.argsLength +
              ", got: " +
              e.length
          );
        return (
          this.last && (this.last.isDisposed = !0),
          (this.last = new E(this.store, e))
        );
      };
      function S() {
        (this.store = new Map()), (this.argsLength = -1);
      }
      new Set(),
        new Set(),
        Promise.resolve(),
        "undefined" != typeof queueMicrotask || (void 0 !== e && e.nextTick);
    }.call(this, A("8oxB"));
  },
  H7XF: function (e, t, r) {
    "use strict";
    (t.byteLength = function (e) {
      var t = c(e),
        e = t[0],
        t = t[1];
      return (3 * (e + t)) / 4 - t;
    }),
      (t.toByteArray = function (e) {
        var t,
          r,
          n = c(e),
          o = n[0],
          n = n[1],
          i = new l(
            (function (e, t) {
              return (3 * (e + t)) / 4 - t;
            })(o, n)
          ),
          a = 0,
          s = 0 < n ? o - 4 : o;
        for (r = 0; r < s; r += 4)
          (t =
            (u[e.charCodeAt(r)] << 18) |
            (u[e.charCodeAt(r + 1)] << 12) |
            (u[e.charCodeAt(r + 2)] << 6) |
            u[e.charCodeAt(r + 3)]),
            (i[a++] = (t >> 16) & 255),
            (i[a++] = (t >> 8) & 255),
            (i[a++] = 255 & t);
        2 === n &&
          ((t = (u[e.charCodeAt(r)] << 2) | (u[e.charCodeAt(r + 1)] >> 4)),
          (i[a++] = 255 & t));
        1 === n &&
          ((t =
            (u[e.charCodeAt(r)] << 10) |
            (u[e.charCodeAt(r + 1)] << 4) |
            (u[e.charCodeAt(r + 2)] >> 2)),
          (i[a++] = (t >> 8) & 255),
          (i[a++] = 255 & t));
        return i;
      }),
      (t.fromByteArray = function (e) {
        for (
          var t, r = e.length, n = r % 3, o = [], i = 0, a = r - n;
          i < a;
          i += 16383
        )
          o.push(
            (function (e, t, r) {
              for (var n, o = [], i = t; i < r; i += 3)
                (n =
                  ((e[i] << 16) & 16711680) +
                  ((e[i + 1] << 8) & 65280) +
                  (255 & e[i + 2])),
                  o.push(
                    (function (e) {
                      return (
                        s[(e >> 18) & 63] +
                        s[(e >> 12) & 63] +
                        s[(e >> 6) & 63] +
                        s[63 & e]
                      );
                    })(n)
                  );
              return o.join("");
            })(e, i, a < i + 16383 ? a : i + 16383)
          );
        1 == n
          ? ((t = e[r - 1]), o.push(s[t >> 2] + s[(t << 4) & 63] + "=="))
          : 2 == n &&
            ((t = (e[r - 2] << 8) + e[r - 1]),
            o.push(s[t >> 10] + s[(t >> 4) & 63] + s[(t << 2) & 63] + "="));
        return o.join("");
      });
    for (
      var s = [],
        u = [],
        l = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        o = 0,
        i = n.length;
      o < i;
      ++o
    )
      (s[o] = n[o]), (u[n.charCodeAt(o)] = o);
    function c(e) {
      var t = e.length;
      if (0 < t % 4)
        throw new Error("Invalid string. Length must be a multiple of 4");
      e = e.indexOf("=");
      return [(e = -1 === e ? t : e), e === t ? 0 : 4 - (e % 4)];
    }
    (u["-".charCodeAt(0)] = 62), (u["_".charCodeAt(0)] = 63);
  },
  HQzE: function (e, t, r) {},
  HSsa: function (e, t, r) {
    "use strict";
    e.exports = function (r, n) {
      return function () {
        for (var e = new Array(arguments.length), t = 0; t < e.length; t++)
          e[t] = arguments[t];
        return r.apply(n, e);
      };
    };
  },
  Hxks: function (e, u, l) {
    "use strict";
    !function (e) {
      l.d(u, "d", function () {
        return n;
      }),
        l.d(u, "c", function () {
          return o;
        }),
        l.d(u, "b", function () {
          return i;
        }),
        l.d(u, "a", function () {
          return s;
        });
      var t = l("q1tI"),
        r = function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            o,
            i = r.call(e),
            a = [];
          try {
            for (; (void 0 === t || 0 < t--) && !(n = i.next()).done; )
              a.push(n.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        };
      function n() {
        var e = r(Object(t.useState)(0), 2)[1];
        return Object(t.useCallback)(function () {
          e(function (e) {
            return e + 1;
          });
        }, []);
      }
      function o(e) {
        if (!e || "object" != typeof e) return !1;
        e = Object.getPrototypeOf(e);
        return !e || e === Object.prototype;
      }
      function i(e) {
        return "function" == typeof Symbol
          ? Symbol.for(e)
          : "__$mobx-react " + e + "__";
      }
      var a = {};
      function s() {
        return "undefined" != typeof window
          ? window
          : void 0 !== e
          ? e
          : "undefined" != typeof self
          ? self
          : a;
      }
    }.call(this, l("yLpj"));
  },
  JEQr: function (u, e, l) {
    "use strict";
    !function (e) {
      var n = l("xTJ+"),
        r = l("yK9s"),
        o = l("OH9c"),
        t = { "Content-Type": "application/x-www-form-urlencoded" };
      function i(e, t) {
        !n.isUndefined(e) &&
          n.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      var a,
        s = {
          transitional: {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
          },
          adapter: (a =
            "undefined" != typeof XMLHttpRequest ||
            (void 0 !== e &&
              "[object process]" === Object.prototype.toString.call(e))
              ? l("tQ2B")
              : a),
          transformRequest: [
            function (e, t) {
              return (
                r(t, "Accept"),
                r(t, "Content-Type"),
                n.isFormData(e) ||
                n.isArrayBuffer(e) ||
                n.isBuffer(e) ||
                n.isStream(e) ||
                n.isFile(e) ||
                n.isBlob(e)
                  ? e
                  : n.isArrayBufferView(e)
                  ? e.buffer
                  : n.isURLSearchParams(e)
                  ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : n.isObject(e) ||
                    (t && "application/json" === t["Content-Type"])
                  ? (i(t, "application/json"),
                    (function (e, t, r) {
                      if (n.isString(e))
                        try {
                          return (t || JSON.parse)(e), n.trim(e);
                        } catch (e) {
                          if ("SyntaxError" !== e.name) throw e;
                        }
                      return (r || JSON.stringify)(e);
                    })(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              var t = this.transitional,
                r = t && t.silentJSONParsing,
                t = t && t.forcedJSONParsing,
                r = !r && "json" === this.responseType;
              if (r || (t && n.isString(e) && e.length))
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (r) {
                    if ("SyntaxError" === e.name)
                      throw o(e, this, "E_JSON_PARSE");
                    throw e;
                  }
                }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function (e) {
            return 200 <= e && e < 300;
          },
          headers: { common: { Accept: "application/json, text/plain, */*" } },
        };
      n.forEach(["delete", "get", "head"], function (e) {
        s.headers[e] = {};
      }),
        n.forEach(["post", "put", "patch"], function (e) {
          s.headers[e] = n.merge(t);
        }),
        (u.exports = s);
    }.call(this, l("8oxB"));
  },
  LYNF: function (e, t, r) {
    "use strict";
    var i = r("OH9c");
    e.exports = function (e, t, r, n, o) {
      e = new Error(e);
      return i(e, t, r, n, o);
    };
  },
  Lmem: function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  },
  MLWZ: function (e, t, r) {
    "use strict";
    var o = r("xTJ+");
    function i(e) {
      return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    e.exports = function (e, t, r) {
      if (!t) return e;
      var n,
        r = r
          ? r(t)
          : o.isURLSearchParams(t)
          ? t.toString()
          : ((n = []),
            o.forEach(t, function (e, t) {
              null != e &&
                (o.isArray(e) ? (t += "[]") : (e = [e]),
                o.forEach(e, function (e) {
                  o.isDate(e)
                    ? (e = e.toISOString())
                    : o.isObject(e) && (e = JSON.stringify(e)),
                    n.push(i(t) + "=" + i(e));
                }));
            }),
            n.join("&"));
      return (
        r &&
          (-1 !== (t = e.indexOf("#")) && (e = e.slice(0, t)),
          (e += (-1 === e.indexOf("?") ? "?" : "&") + r)),
        e
      );
    };
  },
  MgzW: function (e, t, r) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var u =
        Object.getOwnPropertySymbols,
      l = Object.prototype.hasOwnProperty,
      c = Object.prototype.propertyIsEnumerable;
    e.exports = (function () {
      try {
        if (!Object.assign) return;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return;
        for (var t = {}, r = 0; r < 10; r++)
          t["_" + String.fromCharCode(r)] = r;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(t)
            .map(function (e) {
              return t[e];
            })
            .join("")
        )
          return;
        var n = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (e) {
            n[e] = e;
          }),
          "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, n)).join("")
            ? void 0
            : 1
        );
      } catch (e) {
        return;
      }
    })()
      ? Object.assign
      : function (e, t) {
          for (
            var r,
              n = (function (e) {
                if (null == e)
                  throw new TypeError(
                    "Object.assign cannot be called with null or undefined"
                  );
                return Object(e);
              })(e),
              o = 1;
            o < arguments.length;
            o++
          ) {
            for (var i in (r = Object(arguments[o])))
              l.call(r, i) && (n[i] = r[i]);
            if (u)
              for (var a = u(r), s = 0; s < a.length; s++)
                c.call(r, a[s]) && (n[a[s]] = r[a[s]]);
          }
          return n;
        };
  },
  OH9c: function (e, t, r) {
    "use strict";
    e.exports = function (e, t, r, n, o) {
      return (
        (e.config = t),
        r && (e.code = r),
        (e.request = n),
        (e.response = o),
        (e.isAxiosError = !0),
        (e.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
          };
        }),
        e
      );
    };
  },
  OTTw: function (e, t, r) {
    "use strict";
    var n,
      o,
      i,
      a = r("xTJ+");
    function s(e) {
      return (
        o && (i.setAttribute("href", e), (e = i.href)),
        i.setAttribute("href", e),
        {
          href: i.href,
          protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
          host: i.host,
          search: i.search ? i.search.replace(/^\?/, "") : "",
          hash: i.hash ? i.hash.replace(/^#/, "") : "",
          hostname: i.hostname,
          port: i.port,
          pathname:
            "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname,
        }
      );
    }
    e.exports = a.isStandardBrowserEnv()
      ? ((o = /(msie|trident)/i.test(navigator.userAgent)),
        (i = document.createElement("a")),
        (n = s(window.location.href)),
        function (e) {
          e = a.isString(e) ? s(e) : e;
          return e.protocol === n.protocol && e.host === n.host;
        })
      : function () {
          return !0;
        };
  },
  QCnb: function (e, t, r) {
    "use strict";
    e.exports = r("+wdc");
  },
  "Rn+g": function (e, t, r) {
    "use strict";
    var o = r("LYNF");
    e.exports = function (e, t, r) {
      var n = r.config.validateStatus;
      r.status && n && !n(r.status)
        ? t(
            o(
              "Request failed with status code " + r.status,
              r.config,
              null,
              r.request,
              r
            )
          )
        : e(r);
    };
  },
  SgzI: function (e) {
    e.exports = JSON.parse(
      '{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}'
    );
  },
  Sj0R: function (e, t, r) {
    "use strict";
    r.r(t);
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    var n = function (e, t) {
      return (n =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        })(e, t);
    };
    function o(e, t) {
      function r() {
        this.constructor = e;
      }
      n(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((r.prototype = t.prototype), new r()));
    }
    var i = function () {
      return (i =
        Object.assign ||
        function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in (t = arguments[r]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
    function a(e, t, r, n) {
      var o,
        i = arguments.length,
        a =
          i < 3
            ? t
            : null === n
            ? (n = Object.getOwnPropertyDescriptor(t, r))
            : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, r, n);
      else
        for (var s = e.length - 1; 0 <= s; s--)
          (o = e[s]) &&
            (a = (i < 3 ? o(a) : 3 < i ? o(t, r, a) : o(t, r)) || a);
      return 3 < i && a && Object.defineProperty(t, r, a), a;
    }
    function s(e, a, s, u) {
      return new (s = s || Promise)(function (r, t) {
        function n(e) {
          try {
            i(u.next(e));
          } catch (e) {
            t(e);
          }
        }
        function o(e) {
          try {
            i(u.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function i(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value) instanceof s
                ? t
                : new s(function (e) {
                    e(t);
                  })
              ).then(n, o);
        }
        i((u = u.apply(e, a || [])).next());
      });
    }
    function u(r, n) {
      var o,
        i,
        a,
        s = {
          label: 0,
          sent: function () {
            if (1 & a[0]) throw a[1];
            return a[1];
          },
          trys: [],
          ops: [],
        },
        e = { next: t(0), throw: t(1), return: t(2) };
      return (
        "function" == typeof Symbol &&
          (e[Symbol.iterator] = function () {
            return this;
          }),
        e
      );
      function t(t) {
        return function (e) {
          return (function (t) {
            if (o) throw new TypeError("Generator is already executing.");
            for (; s; )
              try {
                if (
                  ((o = 1),
                  i &&
                    (a =
                      2 & t[0]
                        ? i.return
                        : t[0]
                        ? i.throw || ((a = i.return) && a.call(i), 0)
                        : i.next) &&
                    !(a = a.call(i, t[1])).done)
                )
                  return a;
                switch (((i = 0), (t = a ? [2 & t[0], a.value] : t)[0])) {
                  case 0:
                  case 1:
                    a = t;
                    break;
                  case 4:
                    return s.label++, { value: t[1], done: !1 };
                  case 5:
                    s.label++, (i = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = s.ops.pop()), s.trys.pop();
                    continue;
                  default:
                    if (
                      !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      s = 0;
                      continue;
                    }
                    if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3]))) {
                      s.label = t[1];
                      break;
                    }
                    if (6 === t[0] && s.label < a[1]) {
                      (s.label = a[1]), (a = t);
                      break;
                    }
                    if (a && s.label < a[2]) {
                      (s.label = a[2]), s.ops.push(t);
                      break;
                    }
                    a[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                t = n.call(r, s);
              } catch (e) {
                (t = [6, e]), (i = 0);
              } finally {
                o = a = 0;
              }
            if (5 & t[0]) throw t[1];
            return { value: t[0] ? t[1] : void 0, done: !0 };
          })([t, e]);
        };
      }
    }
    function l() {
      for (var e = 0, t = 0, r = arguments.length; t < r; t++)
        e += arguments[t].length;
      for (var n = Array(e), o = 0, t = 0; t < r; t++)
        for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++)
          n[o] = i[a];
      return n;
    }
    var c = r("2vnA"),
      p = r("i8i4");
    function f(e, t) {
      for (var r = [], n = 2; n < arguments.length; n++)
        r[n - 2] = arguments[n];
      console.assert
        ? 0 == r.length
          ? console.assert(!!e, t)
          : console.assert.apply(console, l([!!e, t], r))
        : e || console.warn.apply(console, l([t], r));
    }
    function g(e, t) {
      return d(e, function (e) {
        return t == e;
      });
    }
    function d(e, t) {
      t = e.findIndex(t);
      return 0 <= t && (e.splice(t, 1), !0);
    }
    (h.prototype.SetParent = function (e) {
      this.m_elParent &&
        this.m_elParent.ownerDocument.defaultView.removeEventListener(
          "resize",
          this.RecomputeVisibility
        ),
        (this.m_elParent = e),
        this.m_elParent &&
          this.m_elParent.ownerDocument.defaultView.addEventListener(
            "resize",
            this.RecomputeVisibility
          );
    }),
      (h.prototype.InvalidateOffsetsAndRecompute = function () {
        (this.m_bOffsetsInvalidated = !0), this.RecomputeVisibility();
      }),
      (h.prototype.EnsureSort = function () {
        if (this.m_bOffsetsInvalidated) {
          for (var e = 0; e < this.m_rgChildren.length; e++)
            this.m_rgChildren[e].yOffset = this.m_rgChildren[
              e
            ].element.offsetTop;
          this.m_bOffsetsInvalidated = !1;
        }
        this.m_bNeedSort &&
          (this.m_rgChildren.sort(function (e, t) {
            return e.yOffset - t.yOffset;
          }),
          (this.m_bNeedSort = !1));
      }),
      (h.prototype.RegisterChild = function (e, t) {
        this.m_rgChildren.push({
          element: e,
          yOffset: e.offsetTop,
          fnCallback: t,
        }),
          (this.m_bNeedSort = !0),
          void 0 !== this.m_nLastYMin &&
            void 0 !== this.m_nLastYMax &&
            e.offsetTop >= this.m_nLastYMin &&
            e.offsetTop <= this.m_nLastYMax &&
            t(!0);
      }),
      (h.prototype.UnregisterChild = function (t) {
        d(this.m_rgChildren, function (e) {
          return e.element == t;
        });
      });
    function h(e) {
      var i = this;
      (this.m_bNeedSort = !1),
        (this.m_bOffsetsInvalidated = !1),
        (this.m_rgChildren = []),
        (this.RecomputeVisibility = function () {
          var e = i.m_elParent.scrollTop - i.m_nBufferPx,
            t =
              i.m_elParent.scrollTop +
              i.m_elParent.clientHeight +
              i.m_nBufferPx;
          i.EnsureSort();
          for (var r = 0, n = i.m_rgChildren; r < n.length; r++) {
            var o = n[r];
            if (!(o.yOffset < e)) {
              if (o.yOffset > t) break;
              o.fnCallback(!0);
            }
          }
          (i.m_nLastYMin = e), (i.m_nLastYMax = t);
        }),
        (this.m_nBufferPx = e);
    }
    function y() {
      return (
        (e = document),
        (t = {}),
        e.querySelectorAll('link[rel="stylesheet"]').forEach(function (e) {
          t[e.href] = e;
        }),
        t
      );
      var e, t;
    }
    function b(e, t) {
      m(e.document, t, !0);
    }
    function m(e, t, r) {
      for (
        var n = Object.assign({}, t),
          t = e.getElementsByTagName("head")[0],
          o = t.getElementsByTagName("link"),
          i = o.length,
          a = 0;
        a < i;
        ++a
      ) {
        var s = o[a];
        n[s.href] ? delete n[s.href] : r && s.parentNode.removeChild(s);
      }
      var u,
        l = [];
      for (u in n) {
        for (
          var c = n[u], p = e.createElement("link"), f = 0;
          f < c.attributes.length;
          f++
        ) {
          var g = c.attributes.item(f);
          p.setAttribute(g.name, g.value);
        }
        l.push(p);
      }
      return t.prepend.apply(t, l), l;
    }
    function _(e, t, r) {
      return {
        get: function () {
          var e = r.value.bind(this);
          return (
            this.hasOwnProperty(t) ||
              Object.defineProperty(this, t, { value: e }),
            e
          );
        },
      };
    }
    function v(e, t) {
      switch ((void 0 === t && (t = 0), e)) {
        case "english":
          return 0;
        case "german":
          return 1;
        case "french":
          return 2;
        case "italian":
          return 3;
        case "korean":
        case "koreana":
          return 4;
        case "spanish":
          return 5;
        case "schinese":
          return 6;
        case "tchinese":
          return 7;
        case "russian":
          return 8;
        case "thai":
          return 9;
        case "japanese":
          return 10;
        case "portuguese":
          return 11;
        case "polish":
          return 12;
        case "danish":
          return 13;
        case "dutch":
          return 14;
        case "finnish":
          return 15;
        case "norwegian":
          return 16;
        case "swedish":
          return 17;
        case "hungarian":
          return 18;
        case "czech":
          return 19;
        case "romanian":
          return 20;
        case "turkish":
          return 21;
        case "arabic":
          return 25;
        case "brazilian":
          return 22;
        case "bulgarian":
          return 23;
        case "greek":
          return 24;
        case "ukrainian":
          return 26;
        case "latam":
          return 27;
        case "vietnamese":
          return 28;
        case "sc_schinese":
          return 29;
        default:
          return t;
      }
    }
    var E, w, S, T, A, j, O;
    ((E = E = E || {})[(E.k_EConnectivityTestResult_Unknown = 0)] =
      "k_EConnectivityTestResult_Unknown"),
      (E[(E.k_EConnectivityTestResult_Connected = 1)] =
        "k_EConnectivityTestResult_Connected"),
      (E[(E.k_EConnectivityTestResult_CaptivePortal = 2)] =
        "k_EConnectivityTestResult_CaptivePortal"),
      (E[(E.k_EConnectivityTestResult_TimedOut = 3)] =
        "k_EConnectivityTestResult_TimedOut"),
      (E[(E.k_EConnectivityTestResult_Failed = 4)] =
        "k_EConnectivityTestResult_Failed"),
      (E[(E.k_EConnectivityTestResult_WifiDisabled = 5)] =
        "k_EConnectivityTestResult_WifiDisabled"),
      (E[(E.k_EConnectivityTestResult_NoLAN = 6)] =
        "k_EConnectivityTestResult_NoLAN"),
      ((w = w = w || {})[(w.k_ENetFakeLocalSystemState_Normal = 0)] =
        "k_ENetFakeLocalSystemState_Normal"),
      (w[(w.k_ENetFakeLocalSystemState_NoLAN = 1)] =
        "k_ENetFakeLocalSystemState_NoLAN"),
      (w[(w.k_ENetFakeLocalSystemState_CaptivePortal_Redirected = 2)] =
        "k_ENetFakeLocalSystemState_CaptivePortal_Redirected"),
      (w[(w.k_ENetFakeLocalSystemState_CaptivePortal_InPlace = 3)] =
        "k_ENetFakeLocalSystemState_CaptivePortal_InPlace"),
      (w[(w.k_ENetFakeLocalSystemState_NoInternet = 4)] =
        "k_ENetFakeLocalSystemState_NoInternet"),
      (w[(w.k_ENetFakeLocalSystemState_NoSteam = 5)] =
        "k_ENetFakeLocalSystemState_NoSteam"),
      ((S = S = S || {})[(S.k_ESuspendResumeProgressState_Invalid = 0)] =
        "k_ESuspendResumeProgressState_Invalid"),
      (S[(S.k_ESuspendResumeProgressState_Complete = 1)] =
        "k_ESuspendResumeProgressState_Complete"),
      (S[(S.k_ESuspendResumeProgressState_CloudSync = 2)] =
        "k_ESuspendResumeProgressState_CloudSync"),
      (S[(S.k_ESuspendResumeProgressState_LoggingIn = 3)] =
        "k_ESuspendResumeProgressState_LoggingIn"),
      (S[(S.k_ESuspendResumeProgressState_WaitingForApp = 4)] =
        "k_ESuspendResumeProgressState_WaitingForApp"),
      ((T = T = T || {})[
        (T.k_EFloatingGamepadTextInputModeModeSingleLine = 0)
      ] = "k_EFloatingGamepadTextInputModeModeSingleLine"),
      (T[(T.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
        "k_EFloatingGamepadTextInputModeModeMultipleLines"),
      (T[(T.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
        "k_EFloatingGamepadTextInputModeModeEmail"),
      (T[(T.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
        "k_EFloatingGamepadTextInputModeModeNumeric"),
      ((A = A = A || {})[(A.k_EAppUpdateContentType_Content = 0)] =
        "k_EAppUpdateContentType_Content"),
      (A[(A.k_EAppUpdateContentType_Workshop = 1)] =
        "k_EAppUpdateContentType_Workshop"),
      (A[(A.k_EAppUpdateContentType_Shader = 2)] =
        "k_EAppUpdateContentType_Shader"),
      (A[(A.k_EAppUpdateContentType_Max = 3)] = "k_EAppUpdateContentType_Max"),
      ((j = j = j || {})[(j.k_EOverlayToStoreFlag_None = 0)] =
        "k_EOverlayToStoreFlag_None"),
      (j[(j.k_EOverlayToStoreFlag_AddToCart = 1)] =
        "k_EOverlayToStoreFlag_AddToCart"),
      (j[(j.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
        "k_EOverlayToStoreFlag_AddToCartAndShow"),
      ((O = O = O || {})[(O.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
        "k_EActivateGameOverlayToWebPageMode_Default"),
      (O[(O.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
        "k_EActivateGameOverlayToWebPageMode_Modal");
    var C = r("hRO2"),
      k = C.BinaryReader.prototype,
      x = C.BinaryWriter.prototype;
    function I(e) {
      var t,
        r = {},
        n = e.fields;
      for (t in n) {
        var o = n[t];
        r[o.n] = o;
      }
      return r;
    }
    function M(e, i) {
      var t,
        r = e.proto,
        a = e.fields,
        s = new r();
      for (t in a)
        !(function (e) {
          var t = a[e],
            r = t.n,
            n = t.c,
            o = t.r;
          t.d, t.q;
          if (!i.hasOwnProperty(e)) return;
          e = i[e];
          n
            ? o
              ? C.Message.setRepeatedWrapperField(
                  s,
                  r,
                  Array.isArray(e)
                    ? e.map(function (e) {
                        return n.fromObject(e);
                      })
                    : []
                )
              : C.Message.setWrapperField(s, r, n.fromObject(e))
            : C.Message.setField(s, r, e);
        })(t);
      return s;
    }
    function R(e, t, r) {
      e.proto;
      var n,
        o = e.fields,
        i = {};
      for (n in o) {
        var a = o[n],
          s = a.n,
          u = a.c,
          l = a.r,
          c = a.d,
          a = a.q;
        u
          ? l
            ? (i[n] = C.Message.toObjectList(
                C.Message.getRepeatedWrapperField(r, u, s),
                u.toObject,
                t
              ))
            : (l = C.Message.getWrapperField(r, u, s, a ? 1 : 0)) &&
              (i[n] = u.toObject(t, l))
          : (null ===
              (c = C.Message.getFieldWithDefault(
                r,
                s,
                void 0 !== c ? c : null
              )) &&
              !a) ||
            (i[n] = c);
      }
      return t && (i.$jspbMessageInstance = r), i;
    }
    function B(e, t, r) {
      for (; r.nextField() && !r.isEndGroup(); ) {
        var n,
          o,
          i,
          a,
          s = e[r.getFieldNumber()];
        s
          ? ((n = s.n),
            (o = s.c),
            (i = s.r),
            s.d,
            s.q,
            (s = s.br),
            o
              ? ((a = new o()),
                r.readMessage(a, o.deserializeBinaryFromReader),
                i
                  ? C.Message.addToRepeatedWrapperField(t, n, a, o)
                  : C.Message.setWrapperField(t, n, a))
              : s
              ? ((a = s.call(r)),
                i
                  ? C.Message.addToRepeatedField(t, n, a)
                  : C.Message.setField(t, n, a))
              : (console.assert(
                  s,
                  "Reader func not set for field number " + n + " in class " + o
                ),
                r.skipField()))
          : r.skipField();
      }
      return t;
    }
    function N(e, t, r) {
      var n,
        o = e.fields;
      for (n in o) {
        var i,
          a = o[n],
          s = a.n,
          u = a.c,
          l = a.r,
          c = (a.d, a.q),
          a = a.bw;
        u
          ? l
            ? (((i = C.Message.getRepeatedWrapperField(t, u, s)) && i.length) ||
                c) &&
              r.writeRepeatedMessage(s, i, u.serializeBinaryToWriter)
            : (i = C.Message.getWrapperField(t, u, s, c ? 1 : 0)) &&
              r.writeMessage(s, i, u.serializeBinaryToWriter)
          : a
          ? void 0 !== (i = C.Message.getField(t, s)) && a.call(r, s, i)
          : console.assert(
              a,
              "Writer func not set for field number " + s + " in class " + u
            );
      }
    }
    function P(e) {
      var t,
        r = e.proto;
      for (t in e.fields) {
        var n = e.fields[t],
          o = n.n,
          i = n.c,
          a = n.r,
          s = n.d;
        n.q;
        n.hasOwnProperty("d")
          ? (r.prototype[t] = D(C.Message.getFieldWithDefault, o, s))
          : (r.prototype[t] = i
              ? a
                ? D(C.Message.getRepeatedWrapperField, i, o)
                : (function (t, r) {
                    return function (e) {
                      return C.Message.getWrapperField(
                        this,
                        t,
                        r,
                        (e = void 0 === e ? !0 : e) ? 1 : 0
                      );
                    };
                  })(i, o)
              : D(C.Message.getField, o)),
          (r.prototype["set_" + t] = L(
            i
              ? a
                ? C.Message.setRepeatedWrapperField
                : C.Message.setWrapperField
              : C.Message.setField,
            o
          )),
          a &&
            (r.prototype["add_" + t] = (function (r, n) {
              return n
                ? function (e, t) {
                    return C.Message.addToRepeatedWrapperField(
                      this,
                      r,
                      e,
                      n,
                      t
                    );
                  }
                : function (e, t) {
                    C.Message.addToRepeatedField(this, r, e, t);
                  };
            })(o, i));
      }
    }
    function D(e) {
      for (var t = [], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
      return function () {
        return e.apply(void 0, l([this], t));
      };
    }
    function L(t, r) {
      return function (e) {
        return t(this, r, e);
      };
    }
    C.Message;
    var U = C.Message;
    var F,
      W =
        (o(V, (F = U)),
        (V.M = function () {
          return (V.sm_m = !V.sm_m
            ? {
                proto: V,
                fields: {
                  type: { n: 1, br: k.readEnum, bw: x.writeEnum },
                  name: { n: 2, br: k.readString, bw: x.writeString },
                },
              }
            : V.sm_m);
        }),
        (V.MBF = function () {
          return (V.sm_mbf = !V.sm_mbf ? I(V.M()) : V.sm_mbf);
        }),
        (V.prototype.toObject = function (e) {
          return V.toObject((e = void 0 === e ? !1 : e), this);
        }),
        (V.toObject = function (e, t) {
          return R(V.M(), e, t);
        }),
        (V.fromObject = function (e) {
          return M(V.M(), e);
        }),
        (V.deserializeBinary = function (e) {
          var t = new C.BinaryReader(e),
            e = new V();
          return V.deserializeBinaryFromReader(e, t);
        }),
        (V.deserializeBinaryFromReader = function (e, t) {
          return B(V.MBF(), e, t);
        }),
        (V.prototype.serializeBinary = function () {
          var e = new C.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }),
        (V.serializeBinaryToWriter = function (e, t) {
          N(V.M(), e, t);
        }),
        (V.prototype.serializeBase64String = function () {
          var e = new C.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }),
        (V.prototype.getClassName = function () {
          return "CAppOverview_AppAssociation";
        }),
        V);
    function V(e) {
      void 0 === e && (e = null);
      var t = F.call(this) || this;
      return (
        V.prototype.type || P(V.M()), U.initialize(t, e, 0, -1, void 0, null), t
      );
    }
    var z,
      H =
        (o($, (z = U)),
        ($.M = function () {
          return ($.sm_m = !$.sm_m
            ? {
                proto: $,
                fields: {
                  clientid: {
                    n: 1,
                    br: k.readUint64String,
                    bw: x.writeUint64String,
                  },
                  client_name: { n: 2, br: k.readString, bw: x.writeString },
                  display_status: { n: 3, br: k.readEnum, bw: x.writeEnum },
                  status_percentage: {
                    n: 4,
                    d: 0,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  active_beta: { n: 5, br: k.readString, bw: x.writeString },
                  installed: { n: 6, br: k.readBool, bw: x.writeBool },
                  bytes_downloaded: {
                    n: 7,
                    d: "0",
                    br: k.readUint64String,
                    bw: x.writeUint64String,
                  },
                  bytes_total: {
                    n: 8,
                    d: "0",
                    br: k.readUint64String,
                    bw: x.writeUint64String,
                  },
                  streaming_to_local_client: {
                    n: 9,
                    br: k.readBool,
                    bw: x.writeBool,
                  },
                  is_available_on_current_platform: {
                    n: 10,
                    br: k.readBool,
                    bw: x.writeBool,
                  },
                  is_invalid_os_type: {
                    n: 11,
                    br: k.readBool,
                    bw: x.writeBool,
                  },
                  playtime_left: { n: 12, br: k.readUint32, bw: x.writeUint32 },
                  cloud_status: { n: 13, br: k.readEnum, bw: x.writeEnum },
                },
              }
            : $.sm_m);
        }),
        ($.MBF = function () {
          return ($.sm_mbf = !$.sm_mbf ? I($.M()) : $.sm_mbf);
        }),
        ($.prototype.toObject = function (e) {
          return $.toObject((e = void 0 === e ? !1 : e), this);
        }),
        ($.toObject = function (e, t) {
          return R($.M(), e, t);
        }),
        ($.fromObject = function (e) {
          return M($.M(), e);
        }),
        ($.deserializeBinary = function (e) {
          var t = new C.BinaryReader(e),
            e = new $();
          return $.deserializeBinaryFromReader(e, t);
        }),
        ($.deserializeBinaryFromReader = function (e, t) {
          return B($.MBF(), e, t);
        }),
        ($.prototype.serializeBinary = function () {
          var e = new C.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }),
        ($.serializeBinaryToWriter = function (e, t) {
          N($.M(), e, t);
        }),
        ($.prototype.serializeBase64String = function () {
          var e = new C.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }),
        ($.prototype.getClassName = function () {
          return "CAppOverview_PerClientData";
        }),
        $);
    function $(e) {
      void 0 === e && (e = null);
      var t = z.call(this) || this;
      return (
        $.prototype.clientid || P($.M()),
        U.initialize(t, e, 0, -1, void 0, null),
        t
      );
    }
    var G,
      K =
        (o(q, (G = U)),
        (q.M = function () {
          return (q.sm_m = !q.sm_m
            ? {
                proto: q,
                fields: {
                  test: { n: 1, br: k.readInt32, bw: x.writeInt32 },
                  test_result: { n: 2, br: k.readInt32, bw: x.writeInt32 },
                  test_loc_token: { n: 3, br: k.readString, bw: x.writeString },
                },
              }
            : q.sm_m);
        }),
        (q.MBF = function () {
          return (q.sm_mbf = !q.sm_mbf ? I(q.M()) : q.sm_mbf);
        }),
        (q.prototype.toObject = function (e) {
          return q.toObject((e = void 0 === e ? !1 : e), this);
        }),
        (q.toObject = function (e, t) {
          return R(q.M(), e, t);
        }),
        (q.fromObject = function (e) {
          return M(q.M(), e);
        }),
        (q.deserializeBinary = function (e) {
          var t = new C.BinaryReader(e),
            e = new q();
          return q.deserializeBinaryFromReader(e, t);
        }),
        (q.deserializeBinaryFromReader = function (e, t) {
          return B(q.MBF(), e, t);
        }),
        (q.prototype.serializeBinary = function () {
          var e = new C.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }),
        (q.serializeBinaryToWriter = function (e, t) {
          N(q.M(), e, t);
        }),
        (q.prototype.serializeBase64String = function () {
          var e = new C.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }),
        (q.prototype.getClassName = function () {
          return "CSteamDeckCompatTestResult";
        }),
        q);
    function q(e) {
      void 0 === e && (e = null);
      var t = G.call(this) || this;
      return (
        q.prototype.test || P(q.M()), U.initialize(t, e, 0, -1, void 0, null), t
      );
    }
    var Y,
      X =
        (o(J, (Y = U)),
        (J.M = function () {
          return (J.sm_m = !J.sm_m
            ? {
                proto: J,
                fields: {
                  appid: { n: 1, br: k.readUint32, bw: x.writeUint32 },
                  display_name: { n: 2, br: k.readString, bw: x.writeString },
                  visible_in_game_list: {
                    n: 4,
                    br: k.readBool,
                    bw: x.writeBool,
                  },
                  sort_as: { n: 6, br: k.readString, bw: x.writeString },
                  app_type: { n: 7, br: k.readEnum, bw: x.writeEnum },
                  mru_index: { n: 13, br: k.readUint32, bw: x.writeUint32 },
                  rt_recent_activity_time: {
                    n: 14,
                    d: 0,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  minutes_playtime_forever: {
                    n: 16,
                    d: 0,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  minutes_playtime_last_two_weeks: {
                    n: 17,
                    d: 0,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  rt_last_time_played: {
                    n: 18,
                    d: 0,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  store_tag: {
                    n: 19,
                    r: !0,
                    q: !0,
                    br: k.readUint32,
                    bw: x.writeRepeatedUint32,
                  },
                  association: { n: 20, c: W, r: !0, q: !0 },
                  store_category: {
                    n: 23,
                    r: !0,
                    q: !0,
                    br: k.readUint32,
                    bw: x.writeRepeatedUint32,
                  },
                  rt_original_release_date: {
                    n: 25,
                    d: 0,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  rt_steam_release_date: {
                    n: 26,
                    d: 0,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  icon_hash: { n: 27, br: k.readString, bw: x.writeString },
                  logo_hash: { n: 30, br: k.readString, bw: x.writeString },
                  controller_support: {
                    n: 31,
                    br: k.readEnum,
                    bw: x.writeEnum,
                  },
                  vr_supported: { n: 32, br: k.readBool, bw: x.writeBool },
                  metacritic_score: {
                    n: 36,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  size_on_disk: {
                    n: 37,
                    br: k.readUint64String,
                    bw: x.writeUint64String,
                  },
                  third_party_mod: { n: 38, br: k.readBool, bw: x.writeBool },
                  icon_data: { n: 39, br: k.readString, bw: x.writeString },
                  icon_data_format: {
                    n: 40,
                    br: k.readString,
                    bw: x.writeString,
                  },
                  gameid: { n: 41, br: k.readString, bw: x.writeString },
                  library_capsule_filename: {
                    n: 42,
                    br: k.readString,
                    bw: x.writeString,
                  },
                  per_client_data: { n: 43, c: H, r: !0, q: !0 },
                  most_available_clientid: {
                    n: 44,
                    br: k.readUint64String,
                    bw: x.writeUint64String,
                  },
                  selected_clientid: {
                    n: 45,
                    br: k.readUint64String,
                    bw: x.writeUint64String,
                  },
                  rt_store_asset_mtime: {
                    n: 46,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  rt_custom_image_mtime: {
                    n: 47,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  optional_parent_app_id: {
                    n: 48,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  owner_account_id: {
                    n: 49,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  compat_mapping_enabled: {
                    n: 50,
                    br: k.readBool,
                    bw: x.writeBool,
                  },
                  compat_mapping_priority: {
                    n: 51,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  compat_mapping_tool_name: {
                    n: 52,
                    br: k.readString,
                    bw: x.writeString,
                  },
                  review_score_with_bombs: {
                    n: 53,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  review_percentage_with_bombs: {
                    n: 54,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  review_score_without_bombs: {
                    n: 55,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  review_percentage_without_bombs: {
                    n: 56,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  library_id: { n: 57, br: k.readString, bw: x.writeString },
                  vr_only: { n: 58, br: k.readBool, bw: x.writeBool },
                  mastersub_appid: {
                    n: 59,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  mastersub_includedwith_logo: {
                    n: 60,
                    br: k.readString,
                    bw: x.writeString,
                  },
                  compat_allowlist_setting: {
                    n: 61,
                    d: 0,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  site_license_site_name: {
                    n: 62,
                    br: k.readString,
                    bw: x.writeString,
                  },
                  shortcut_override_appid: {
                    n: 63,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  steam_deck_compat_category: {
                    n: 64,
                    br: k.readEnum,
                    bw: x.writeEnum,
                  },
                  rt_last_time_locally_played: {
                    n: 65,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  rt_purchased_time: {
                    n: 66,
                    br: k.readUint32,
                    bw: x.writeUint32,
                  },
                  steam_deck_compat_test_results: { n: 67, c: K, r: !0, q: !0 },
                },
              }
            : J.sm_m);
        }),
        (J.MBF = function () {
          return (J.sm_mbf = !J.sm_mbf ? I(J.M()) : J.sm_mbf);
        }),
        (J.prototype.toObject = function (e) {
          return J.toObject((e = void 0 === e ? !1 : e), this);
        }),
        (J.toObject = function (e, t) {
          return R(J.M(), e, t);
        }),
        (J.fromObject = function (e) {
          return M(J.M(), e);
        }),
        (J.deserializeBinary = function (e) {
          var t = new C.BinaryReader(e),
            e = new J();
          return J.deserializeBinaryFromReader(e, t);
        }),
        (J.deserializeBinaryFromReader = function (e, t) {
          return B(J.MBF(), e, t);
        }),
        (J.prototype.serializeBinary = function () {
          var e = new C.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }),
        (J.serializeBinaryToWriter = function (e, t) {
          N(J.M(), e, t);
        }),
        (J.prototype.serializeBase64String = function () {
          var e = new C.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }),
        (J.prototype.getClassName = function () {
          return "CAppOverview";
        }),
        J);
    function J(e) {
      void 0 === e && (e = null);
      var t = Y.call(this) || this;
      return (
        J.prototype.appid || P(J.M()),
        U.initialize(t, e, 0, -1, [19, 20, 23, 43, 67], null),
        t
      );
    }
    var Q;
    o(Z, (Q = U)),
      (Z.M = function () {
        return (Z.sm_m = !Z.sm_m
          ? {
              proto: Z,
              fields: {
                app_overview: { n: 1, c: X, r: !0, q: !0 },
                removed_appid: {
                  n: 2,
                  r: !0,
                  q: !0,
                  br: k.readUint32,
                  bw: x.writeRepeatedUint32,
                },
              },
            }
          : Z.sm_m);
      }),
      (Z.MBF = function () {
        return (Z.sm_mbf = !Z.sm_mbf ? I(Z.M()) : Z.sm_mbf);
      }),
      (Z.prototype.toObject = function (e) {
        return Z.toObject((e = void 0 === e ? !1 : e), this);
      }),
      (Z.toObject = function (e, t) {
        return R(Z.M(), e, t);
      }),
      (Z.fromObject = function (e) {
        return M(Z.M(), e);
      }),
      (Z.deserializeBinary = function (e) {
        var t = new C.BinaryReader(e),
          e = new Z();
        return Z.deserializeBinaryFromReader(e, t);
      }),
      (Z.deserializeBinaryFromReader = function (e, t) {
        return B(Z.MBF(), e, t);
      }),
      (Z.prototype.serializeBinary = function () {
        var e = new C.BinaryWriter();
        return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }),
      (Z.serializeBinaryToWriter = function (e, t) {
        N(Z.M(), e, t);
      }),
      (Z.prototype.serializeBase64String = function () {
        var e = new C.BinaryWriter();
        return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }),
      (Z.prototype.getClassName = function () {
        return "CAppOverview_Change";
      });
    function Z(e) {
      void 0 === e && (e = null);
      var t = Q.call(this) || this;
      return (
        Z.prototype.app_overview || P(Z.M()),
        U.initialize(t, e, 0, -1, [1, 2], null),
        t
      );
    }
    var ee,
      te =
        (o(re, (ee = U)),
        (re.M = function () {
          return (re.sm_m = !re.sm_m
            ? {
                proto: re,
                fields: {
                  appid: { n: 1, br: k.readUint32, bw: x.writeUint32 },
                  hidden: { n: 2, br: k.readBool, bw: x.writeBool },
                  user_tag: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: k.readString,
                    bw: x.writeRepeatedString,
                  },
                },
              }
            : re.sm_m);
        }),
        (re.MBF = function () {
          return (re.sm_mbf = !re.sm_mbf ? I(re.M()) : re.sm_mbf);
        }),
        (re.prototype.toObject = function (e) {
          return re.toObject((e = void 0 === e ? !1 : e), this);
        }),
        (re.toObject = function (e, t) {
          return R(re.M(), e, t);
        }),
        (re.fromObject = function (e) {
          return M(re.M(), e);
        }),
        (re.deserializeBinary = function (e) {
          var t = new C.BinaryReader(e),
            e = new re();
          return re.deserializeBinaryFromReader(e, t);
        }),
        (re.deserializeBinaryFromReader = function (e, t) {
          return B(re.MBF(), e, t);
        }),
        (re.prototype.serializeBinary = function () {
          var e = new C.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }),
        (re.serializeBinaryToWriter = function (e, t) {
          N(re.M(), e, t);
        }),
        (re.prototype.serializeBase64String = function () {
          var e = new C.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }),
        (re.prototype.getClassName = function () {
          return "CAppBootstrapData";
        }),
        re);
    function re(e) {
      void 0 === e && (e = null);
      var t = ee.call(this) || this;
      return (
        re.prototype.appid || P(re.M()), U.initialize(t, e, 0, -1, [3], null), t
      );
    }
    var ne;
    o(oe, (ne = U)),
      (oe.M = function () {
        return (oe.sm_m = !oe.sm_m
          ? { proto: oe, fields: { app_data: { n: 1, c: te, r: !0, q: !0 } } }
          : oe.sm_m);
      }),
      (oe.MBF = function () {
        return (oe.sm_mbf = !oe.sm_mbf ? I(oe.M()) : oe.sm_mbf);
      }),
      (oe.prototype.toObject = function (e) {
        return oe.toObject((e = void 0 === e ? !1 : e), this);
      }),
      (oe.toObject = function (e, t) {
        return R(oe.M(), e, t);
      }),
      (oe.fromObject = function (e) {
        return M(oe.M(), e);
      }),
      (oe.deserializeBinary = function (e) {
        var t = new C.BinaryReader(e),
          e = new oe();
        return oe.deserializeBinaryFromReader(e, t);
      }),
      (oe.deserializeBinaryFromReader = function (e, t) {
        return B(oe.MBF(), e, t);
      }),
      (oe.prototype.serializeBinary = function () {
        var e = new C.BinaryWriter();
        return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }),
      (oe.serializeBinaryToWriter = function (e, t) {
        N(oe.M(), e, t);
      }),
      (oe.prototype.serializeBase64String = function () {
        var e = new C.BinaryWriter();
        return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }),
      (oe.prototype.getClassName = function () {
        return "CLibraryBootstrapData";
      });
    function oe(e) {
      void 0 === e && (e = null);
      var t = ne.call(this) || this;
      return (
        oe.prototype.app_data || P(oe.M()),
        U.initialize(t, e, 0, -1, [1], null),
        t
      );
    }
    C.Message;
    var ie;
    ((ie = ie = ie || {})[(ie.k_EControllerBindingType_None = 0)] =
      "k_EControllerBindingType_None"),
      (ie[(ie.k_EControllerBindingType_Key = 1)] =
        "k_EControllerBindingType_Key"),
      (ie[(ie.k_EControllerBindingType_MouseButton = 2)] =
        "k_EControllerBindingType_MouseButton"),
      (ie[(ie.k_EControllerBindingType_Gamepad = 3)] =
        "k_EControllerBindingType_Gamepad"),
      (ie[(ie.k_EControllerBindingType_Mousewheel = 4)] =
        "k_EControllerBindingType_Mousewheel"),
      (ie[(ie.k_EControllerBindingType_Modeshift = 5)] =
        "k_EControllerBindingType_Modeshift"),
      (ie[(ie.k_EControllerBindingType_GameAction = 6)] =
        "k_EControllerBindingType_GameAction"),
      (ie[(ie.k_EControllerBindingType_ControllerAction = 7)] =
        "k_EControllerBindingType_ControllerAction");
    var ae;
    ((ae = ae = ae || {})[(ae.Input = 0)] = "Input"),
      (ae[(ae.Output = 1)] = "Output"),
      ((ue = ue = ue || {})[(ue.Input = 0)] = "Input"),
      (ue[(ue.AllOutput = 1)] = "AllOutput"),
      (ue[(ue.Left = 2)] = "Left"),
      (ue[(ue.Right = 3)] = "Right"),
      (ue[(ue.Sub = 4)] = "Sub"),
      (ue[(ue.BackLeft = 5)] = "BackLeft"),
      (ue[(ue.BackRight = 6)] = "BackRight");
    var se, ue;
    ((ue = se = se || {})[(ue.EBrowserType_OffScreen = 0)] =
      "EBrowserType_OffScreen"),
      (ue[(ue.EBrowserType_OpenVROverlay = 1)] = "EBrowserType_OpenVROverlay"),
      (ue[(ue.EBrowserType_OpenVROverlay_Dashboard = 2)] =
        "EBrowserType_OpenVROverlay_Dashboard"),
      (ue[(ue.EBrowserType_DirectHWND = 3)] = "EBrowserType_DirectHWND"),
      (ue[(ue.EBrowserType_DirectHWND_Borderless = 4)] =
        "EBrowserType_DirectHWND_Borderless"),
      (ue[(ue.EBrowserType_DirectHWND_Hidden = 5)] =
        "EBrowserType_DirectHWND_Hidden"),
      (ue[(ue.EBrowserType_ChildHWNDNative = 6)] =
        "EBrowserType_ChildHWNDNative"),
      (ue[(ue.EBrowserType_Transparent_Toplevel = 7)] =
        "EBrowserType_Transparent_Toplevel"),
      (ue[(ue.EBrowserType_OffScreen_SharedTexture = 8)] =
        "EBrowserType_OffScreen_SharedTexture"),
      (ue[(ue.EBrowserType_OffScreen_GameOverlay = 9)] =
        "EBrowserType_OffScreen_GameOverlay"),
      (ue[(ue.EBrowserType_OffScreen_GameOverlay_SharedTexture = 10)] =
        "EBrowserType_OffScreen_GameOverlay_SharedTexture"),
      (ue[(ue.EBrowserType_Offscreen_FriendsUI = 11)] =
        "EBrowserType_Offscreen_FriendsUI"),
      (ue[(ue.EBrowserType_MAX = 12)] = "EBrowserType_MAX");
    var le, ce;
    ((le = le = le || {})[(le.k_EClientUINotificationGroupChatMessage = 1)] =
      "k_EClientUINotificationGroupChatMessage"),
      (le[(le.k_EClientUINotificationFriendChatMessage = 2)] =
        "k_EClientUINotificationFriendChatMessage"),
      (le[(le.k_EClientUINotificationFriendPersonaState = 3)] =
        "k_EClientUINotificationFriendPersonaState"),
      ((ce = ce = ce || {})[(ce.k_EComputerActiveStateInvalid = 0)] =
        "k_EComputerActiveStateInvalid"),
      (ce[(ce.k_EComputerActiveStateActive = 1)] =
        "k_EComputerActiveStateActive"),
      (ce[(ce.k_EComputerActiveStateIdle = 2)] = "k_EComputerActiveStateIdle");
    var pe;
    ((pe = pe = pe || {})[(pe.k_EPending = 0)] = "k_EPending"),
      (pe[(pe.k_EAccepted = 1)] = "k_EAccepted"),
      (pe[(pe.k_ERejected = 2)] = "k_ERejected");
    var fe;
    ((fe = fe = fe || {})[(fe.k_EClientUsedInputTypeKeyboard = 0)] =
      "k_EClientUsedInputTypeKeyboard"),
      (fe[(fe.k_EClientUsedInputTypeMouse = 1)] =
        "k_EClientUsedInputTypeMouse"),
      (fe[(fe.k_EClientUsedInputTypeController = 2)] =
        "k_EClientUsedInputTypeController"),
      (fe[(fe.k_EClientUsedInputTypeMax = 3)] = "k_EClientUsedInputTypeMax"),
      ((de = de = de || {})[(de.k_ERemoteClientLaunchOK = 1)] =
        "k_ERemoteClientLaunchOK"),
      (de[(de.k_ERemoteClientLaunchFail = 2)] = "k_ERemoteClientLaunchFail"),
      (de[(de.k_ERemoteClientLaunchRequiresUI = 3)] =
        "k_ERemoteClientLaunchRequiresUI"),
      (de[(de.k_ERemoteClientLaunchRequiresLaunchOption = 4)] =
        "k_ERemoteClientLaunchRequiresLaunchOption"),
      (de[(de.k_ERemoteClientLaunchRequiresEULA = 5)] =
        "k_ERemoteClientLaunchRequiresEULA"),
      (de[(de.k_ERemoteClientLaunchTimeout = 6)] =
        "k_ERemoteClientLaunchTimeout"),
      (de[(de.k_ERemoteClientLaunchStreamTimeout = 7)] =
        "k_ERemoteClientLaunchStreamTimeout"),
      (de[(de.k_ERemoteClientLaunchStreamClientFail = 8)] =
        "k_ERemoteClientLaunchStreamClientFail"),
      (de[(de.k_ERemoteClientLaunchOtherGameRunning = 9)] =
        "k_ERemoteClientLaunchOtherGameRunning"),
      (de[(de.k_ERemoteClientLaunchDownloadStarted = 10)] =
        "k_ERemoteClientLaunchDownloadStarted"),
      (de[(de.k_ERemoteClientLaunchDownloadNoSpace = 11)] =
        "k_ERemoteClientLaunchDownloadNoSpace"),
      (de[(de.k_ERemoteClientLaunchDownloadFiltered = 12)] =
        "k_ERemoteClientLaunchDownloadFiltered"),
      (de[(de.k_ERemoteClientLaunchDownloadRequiresUI = 13)] =
        "k_ERemoteClientLaunchDownloadRequiresUI"),
      (de[(de.k_ERemoteClientLaunchAccessDenied = 14)] =
        "k_ERemoteClientLaunchAccessDenied"),
      (de[(de.k_ERemoteClientLaunchNetworkError = 15)] =
        "k_ERemoteClientLaunchNetworkError"),
      (de[(de.k_ERemoteClientLaunchProgress = 16)] =
        "k_ERemoteClientLaunchProgress"),
      (de[(de.k_ERemoteClientLaunchParentalUnlockFailed = 17)] =
        "k_ERemoteClientLaunchParentalUnlockFailed"),
      (de[(de.k_ERemoteClientLaunchScreenLocked = 18)] =
        "k_ERemoteClientLaunchScreenLocked"),
      (de[(de.k_ERemoteClientLaunchUnsupported = 19)] =
        "k_ERemoteClientLaunchUnsupported"),
      (de[(de.k_ERemoteClientLaunchDisabledLocal = 20)] =
        "k_ERemoteClientLaunchDisabledLocal"),
      (de[(de.k_ERemoteClientLaunchDisabledRemote = 21)] =
        "k_ERemoteClientLaunchDisabledRemote"),
      (de[(de.k_ERemoteClientLaunchBroadcasting = 22)] =
        "k_ERemoteClientLaunchBroadcasting"),
      (de[(de.k_ERemoteClientLaunchBusy = 23)] = "k_ERemoteClientLaunchBusy"),
      (de[(de.k_ERemoteClientLaunchDriversNotInstalled = 24)] =
        "k_ERemoteClientLaunchDriversNotInstalled"),
      (de[(de.k_ERemoteClientLaunchTransportUnavailable = 25)] =
        "k_ERemoteClientLaunchTransportUnavailable"),
      (de[(de.k_ERemoteClientLaunchCanceled = 26)] =
        "k_ERemoteClientLaunchCanceled"),
      (de[(de.k_ERemoteClientLaunchInvisible = 27)] =
        "k_ERemoteClientLaunchInvisible"),
      (de[(de.k_ERemoteClientLaunchRestrictedCountry = 28)] =
        "k_ERemoteClientLaunchRestrictedCountry");
    var ge, de;
    (he.prototype.Add = function (e) {
      e && this.m_rgHandles.push(e);
    }),
      (he.prototype.Unregister = function () {
        var e = this.m_rgHandles;
        this.m_rgHandles = [];
        for (var t = 0, r = e; t < r.length; t++) {
          var n = r[t];
          n && n.unregister();
        }
      });
    function he() {
      this.m_rgHandles = [];
    }
    ((de = ge = ge || {})[(de.k_ESteamRealmUnknown = 0)] =
      "k_ESteamRealmUnknown"),
      (de[(de.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
      (de[(de.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
    var ye;
    ((ye = ye = ye || {})[(ye.k_BluetoothDeviceType_Invalid = 0)] =
      "k_BluetoothDeviceType_Invalid"),
      (ye[(ye.k_BluetoothDeviceType_Unknown = 1)] =
        "k_BluetoothDeviceType_Unknown"),
      (ye[(ye.k_BluetoothDeviceType_Phone = 2)] =
        "k_BluetoothDeviceType_Phone"),
      (ye[(ye.k_BluetoothDeviceType_Computer = 3)] =
        "k_BluetoothDeviceType_Computer"),
      (ye[(ye.k_BluetoothDeviceType_Headset = 4)] =
        "k_BluetoothDeviceType_Headset"),
      (ye[(ye.k_BluetoothDeviceType_Headphones = 5)] =
        "k_BluetoothDeviceType_Headphones"),
      (ye[(ye.k_BluetoothDeviceType_Speakers = 6)] =
        "k_BluetoothDeviceType_Speakers"),
      (ye[(ye.k_BluetoothDeviceType_OtherAudio = 7)] =
        "k_BluetoothDeviceType_OtherAudio"),
      (ye[(ye.k_BluetoothDeviceType_Mouse = 8)] =
        "k_BluetoothDeviceType_Mouse"),
      (ye[(ye.k_BluetoothDeviceType_Joystick = 9)] =
        "k_BluetoothDeviceType_Joystick"),
      (ye[(ye.k_BluetoothDeviceType_Gamepad = 10)] =
        "k_BluetoothDeviceType_Gamepad"),
      (ye[(ye.k_BluetoothDeviceType_Keyboard = 11)] =
        "k_BluetoothDeviceType_Keyboard");
    var be, me, _e, ve, Ee;
    ((be = be = be || {})[(be.Unknown = 0)] = "Unknown"),
      (be[(be.Wired = 1)] = "Wired"),
      (be[(be.Wireless = 2)] = "Wireless"),
      (be[(be.Virtual = 3)] = "Virtual"),
      ((me = me = me || {})[(me.NotPresent = 0)] = "NotPresent"),
      (me[(me.Failed = 1)] = "Failed"),
      (me[(me.Disconnected = 2)] = "Disconnected"),
      (me[(me.Disconnecting = 3)] = "Disconnecting"),
      (me[(me.Connecting = 4)] = "Connecting"),
      (me[(me.Connected = 5)] = "Connected"),
      (me[(me.Retrying = 6)] = "Retrying"),
      ((_e = _e = _e || {})[(_e.None = 0)] = "None"),
      (_e[(_e.Weak = 1)] = "Weak"),
      (_e[(_e.Ok = 2)] = "Ok"),
      (_e[(_e.Good = 3)] = "Good"),
      (_e[(_e.Excellent = 4)] = "Excellent"),
      ((ve = ve = ve || {})[(ve.None = 0)] = "None"),
      (ve[(ve.StaticWep = 1)] = "StaticWep"),
      (ve[(ve.DynamicWep = 2)] = "DynamicWep"),
      (ve[(ve.Wpa = 4)] = "Wpa"),
      (ve[(ve.WpaEnterprise = 8)] = "WpaEnterprise"),
      (ve[(ve.Wpa2 = 16)] = "Wpa2"),
      (ve[(ve.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
      (ve[(ve.Unsupported = 32768)] = "Unsupported"),
      ((Ee = Ee = Ee || {})[(Ee.k_EHTTPProxyMode_Invalid = 0)] =
        "k_EHTTPProxyMode_Invalid"),
      (Ee[(Ee.k_EHTTPProxyMode_None = 1)] = "k_EHTTPProxyMode_None"),
      (Ee[(Ee.k_EHTTPProxyMode_Manual = 2)] = "k_EHTTPProxyMode_Manual"),
      (Ee[(Ee.k_EHTTPProxyMode_Automatic = 3)] = "k_EHTTPProxyMode_Automatic");
    ((Xe = Xe = Xe || {})[(Xe.SystemKey0 = 0)] = "SystemKey0"),
      (Xe[(Xe.SystemKey1 = 1)] = "SystemKey1"),
      ((Xe = Ke = Ke || {})[(Xe.Hidden = 0)] = "Hidden"),
      (Xe[(Xe.Notification = 1)] = "Notification"),
      (Xe[(Xe.Overlay = 2)] = "Overlay"),
      (Xe[(Xe.Opaque = 3)] = "Opaque"),
      (Xe[(Xe.OverlayKeyboard = 4)] = "OverlayKeyboard");
    var we = r("q1tI"),
      Se = r.n(we);
    function Te(e) {
      if (!Ae() || !window.document.cookie) return null;
      e = document.cookie.match("(^|; )" + e + "=([^;]*)");
      return e && e[2] ? decodeURIComponent(e[2]) : null;
    }
    function Ae() {
      return window.document;
    }
    var je,
      Oe = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        SUPPORTED_LANGUAGES: [],
        COUNTRY: "",
        MEDIA_CDN_COMMUNITY_URL: "",
        MEDIA_CDN_URL: "",
        COMMUNITY_CDN_URL: "",
        COMMUNITY_CDN_ASSET_URL: "",
        STORE_CDN_URL: "",
        PUBLIC_SHARED_URL: "",
        COMMUNITY_BASE_URL: "",
        CHAT_BASE_URL: "",
        STORE_BASE_URL: "",
        LOGIN_BASE_URL: "",
        STORE_ICON_BASE_URL: "",
        IMG_URL: "",
        STEAMTV_BASE_URL: "",
        HELP_BASE_URL: "",
        PARTNER_BASE_URL: "",
        STATS_BASE_URL: "",
        INTERNAL_STATS_BASE_URL: "",
        BASE_URL_STORE_CDN_ASSETS: "",
        IN_CLIENT: !1,
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        IN_TENFOOT: !1,
        PLATFORM: "",
        SNR: "",
        LAUNCHER_TYPE: 0,
        EREALM: 0,
        IN_CHROMEOS: !1,
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        get SESSIONID() {
          return (function () {
            if (!Ae()) return (je = je || ke());
            var e = Te("sessionid");
            e = e || ke();
            return e;
          })();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        IN_LIBRARY: !1,
        IN_GAMEPADUI: !1,
        ON_DECK: !1,
        IN_LOGIN: !1,
      };
    function Ce() {
      for (var e, t, r = "", n = 0; n < 24; n++)
        r +=
          ((e = 0),
          (t = 35),
          (e = Math.ceil(e)),
          (t = Math.floor(t)),
          (Math.floor(Math.random() * (t - e + 1)) + e).toString(36));
      return r;
    }
    function ke() {
      var e,
        t,
        r,
        n,
        o,
        i,
        a = Ce();
      return (
        (e = "sessionid"),
        (t = a),
        (r = 0),
        Ae() &&
          ((n = n || "/"),
          (o = ""),
          void 0 !== r &&
            r &&
            ((i = new Date()).setTime(i.getTime() + 864e5 * r),
            (o = "; expires=" + i.toUTCString())),
          (document.cookie =
            encodeURIComponent(e) +
            "=" +
            encodeURIComponent(t) +
            o +
            ";path=" +
            n)),
        a
      );
    }
    r("+xJ3");
    var xe =
      ((Ie.prototype.Register = function (e) {
        var t = this;
        this.m_vecCallbacks.push(e);
        return {
          Unregister: function () {
            g(t.m_vecCallbacks, e);
          },
        };
      }),
      (Ie.prototype.Dispatch = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        for (var r = 0, n = Array.from(this.m_vecCallbacks); r < n.length; r++)
          n[r].apply(void 0, e);
      }),
      (Ie.prototype.ClearAllCallbacks = function () {
        this.m_vecCallbacks = [];
      }),
      (Ie.prototype.CountRegistered = function () {
        return this.m_vecCallbacks.length;
      }),
      Ie);
    function Ie() {
      this.m_vecCallbacks = [];
    }
    var Me;
    o(Re, (Me = function () {}));
    function Re() {
      return (null !== Me && Me.apply(this, arguments)) || this;
    }
    (Be.prototype.Set = function (e) {
      (this.m_currentValue = e), this.m_callbacks.Dispatch(e);
    }),
      Object.defineProperty(Be.prototype, "Value", {
        get: function () {
          return this.m_currentValue;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (Be.prototype.Subscribe = function (e) {
        return { Unsubscribe: this.m_callbacks.Register(e).Unregister };
      });
    function Be(e) {
      (this.m_callbacks = new xe()), (this.m_currentValue = e);
    }
    (Ne.prototype.Schedule = function (e, t) {
      this.IsScheduled() && this.Cancel(),
        (this.m_fnCallback = t),
        (this.m_schTimer = window.setTimeout(this.ScheduledInternal, e));
    }),
      (Ne.prototype.IsScheduled = function () {
        return void 0 !== this.m_schTimer;
      }),
      (Ne.prototype.Cancel = function () {
        this.m_schTimer &&
          (clearTimeout(this.m_schTimer), (this.m_schTimer = void 0));
      }),
      (Ne.prototype.ScheduledInternal = function () {
        this.m_schTimer = void 0;
        var e = this.m_fnCallback;
        (this.m_fnCallback = void 0), e();
      }),
      a([_], Ne.prototype, "ScheduledInternal", null);
    function Ne() {}
    (Pe.prototype.AddEventListener = function (e, t, r) {
      e.addEventListener(t, r),
        this.m_rgListeners.push({ element: e, type: t, listener: r });
    }),
      (Pe.prototype.Unregister = function () {
        for (var e = 0, t = this.m_rgListeners; e < t.length; e++) {
          var r = t[e];
          r.element.removeEventListener(r.type, r.listener);
        }
        this.m_rgListeners = [];
      });
    function Pe() {
      this.m_rgListeners = [];
    }
    var De;
    r("Gp1o");
    ((Ke = De = De || {})[(Ke.None = 0)] = "None"),
      (Ke[(Ke.Ago = 1)] = "Ago"),
      (Ke[(Ke.Remaining = 2)] = "Remaining");
    new Map();
    new Map(), new Map();
    new Map(), new Map(), new Map(), new Map(), new Map();
    var Le =
      ((Ue.InstallErrorReportingStore = function (e) {
        this.sm_ErrorReportingStore = e;
      }),
      (Ue.GetLanguageFallback = function (e) {
        return "sc_schinese" === e ? "schinese" : "english";
      }),
      (Ue.GetELanguageFallback = function (e) {
        return 29 === e ? 6 : 0;
      }),
      (Ue.IsELanguageValidInRealm = function (e, t) {
        return (
          t === (29 === e ? ge.k_ESteamRealmChina : ge.k_ESteamRealmGlobal)
        );
      }),
      (Ue.GetLanguageListForRealms = function (e) {
        for (var t = new Array(), r = 0; r < 30; r++)
          for (var n = 0, o = e; n < o.length; n++) {
            var i = o[n];
            if (this.IsELanguageValidInRealm(r, i)) {
              t.push(r);
              break;
            }
          }
        return t;
      }),
      (Ue.prototype.InitFromObjects = function (e, t, r, n, o) {
        o || this.m_mapTokens.clear();
        (e = i(i({}, r || {}), e)), (t = i(i({}, n || {}), t || {}));
        this.AddTokens(e, t), this.m_cbkTokensChanged.Dispatch();
      }),
      (Ue.prototype.InitDirect = function (e, t) {
        this.m_mapTokens.clear(),
          this.m_mapFallbackTokens.clear(),
          this.AddTokens(e, t),
          this.m_cbkTokensChanged.Dispatch();
      }),
      (Ue.prototype.AddTokens = function (t, r) {
        var n = this;
        Object.keys(t).forEach(function (e) {
          n.m_mapTokens.set(e, t[e]);
        }),
          r &&
            Object.keys(r).forEach(function (e) {
              n.m_mapTokens.has(e) || n.m_mapTokens.set(e, r[e]),
                n.m_mapFallbackTokens.set(e, r[e]);
            });
      }),
      (Ue.prototype.GetTokensChangedCallbackList = function () {
        return this.m_cbkTokensChanged;
      }),
      (Ue.prototype.GetPreferredLocales = function () {
        return (
          this.m_rgLocalesToUse ||
          (navigator && navigator.languages ? navigator.languages : ["en-US"])
        );
      }),
      (Ue.prototype.GetELanguageFallbackOrder = function (e) {
        void 0 === e && (e = null);
        var t = new Array();
        return (
          t.push(v(Oe.LANGUAGE)),
          (Oe.SUPPORTED_LANGUAGES || []).forEach(function (e) {
            e.value != Oe.LANGUAGE && t.push(v(e.value));
          }),
          e &&
            Ue.GetLanguageListForRealms(e).forEach(function (e) {
              -1 == t.indexOf(e) && t.push(e);
            }),
          t
        );
      }),
      (Ue.prototype.SetPreferredLocales = function (e) {
        this.m_rgLocalesToUse = e;
      }),
      (Ue.prototype.LocalizeString = function (e) {
        if ((0, e && 0 != e.length && "#" == e.charAt(0))) {
          var t = this.m_mapTokens.get(e.substring(1));
          if (void 0 !== t) return t;
          Ue.sm_ErrorReportingStore &&
            Ue.sm_ErrorReportingStore.ReportError(
              new Error(
                "Unable to find localization token '" +
                  e +
                  "' for language '" +
                  Oe.LANGUAGE +
                  "', " +
                  this.m_mapTokens.size +
                  " tokens in map"
              ),
              { bIncludeMessageInIdentifier: !0 }
            );
        }
      }),
      (Ue.prototype.LocalizeStringFromFallback = function (e) {
        if (e && 0 != e.length && "#" == e.charAt(0)) {
          e = this.m_mapFallbackTokens.get(e.substring(1));
          if (void 0 !== e) return e;
        }
      }),
      Ue);
    function Ue() {
      (this.m_mapTokens = new Map()),
        (this.m_mapFallbackTokens = new Map()),
        (this.m_cbkTokensChanged = new xe());
    }
    function Fe(e) {
      for (var r = [], t = 1; t < arguments.length; t++)
        r[t - 1] = arguments[t];
      var n = ze.LocalizeString(e);
      return void 0 === n
        ? e
        : 0 < r.length
        ? n.replace(/%(?:(\d+)\$)?s/g, function (e, t) {
            if (t <= r.length && 1 <= t) {
              t = r[t - 1];
              return String(null == t ? "" : t);
            }
            return e;
          })
        : n;
    }
    (We.Set = function (e, t, r) {
      if (e.length <= t) {
        if (30 <= t) return e;
        (o = t + 1),
          (i = null),
          (n = e) ||
            console.error(
              "array should be defined for us to fill in the missing indexes"
            ),
          (e = n.length < o ? n.concat(Array(o - n.length).fill(i)) : n);
      }
      var n, o, i;
      return (e[t] = r), e;
    }),
      (We.Get = function (e, t) {
        return (e && e.length > t && e[t]) || "";
      }),
      (We.GetWithFallback = function (e, t) {
        return We.Get(e, t) || We.Get(e, Le.GetELanguageFallback(t));
      });
    function We() {}
    var Ve = {
      english: "en",
      german: "de",
      french: "fr",
      italian: "it",
      korean: "ko",
      latam: "es-419",
      spanish: "es",
      schinese: "zh-cn",
      tchinese: "zh-tw",
      russian: "ru",
      thai: "th",
      japanese: "ja",
      brazilian: "pt-br",
      portuguese: "pt",
      polish: "pl",
      danish: "da",
      dutch: "nl",
      finnish: "fi",
      norwegian: "no",
      swedish: "sv",
      hungarian: "hu",
      czech: "cs",
      romanian: "ro",
      turkish: "tr",
      arabic: "ar",
      bulgarian: "bg",
      greek: "el",
      ukrainian: "uk",
      vietnamese: "vn",
      sc_schinese: "zh-cn",
      koreana: "ko",
    };
    var ze = new Le();
    window.LocalizationManager = ze;
    var He,
      $e =
        ((Ge.prototype.AddLink = function (e, t) {
          if (t) {
            t = !1;
            try {
              (e.sheet && e.sheet.cssRules && 0 != e.sheet.cssRules.length) ||
                (t = !0);
            } catch (e) {}
            t &&
              (e.addEventListener("load", this.OnLinkLoad),
              this.m_rgLoadingLinks.push(e));
          } else
            e.addEventListener("load", this.OnLinkLoad),
              this.m_rgLoadingLinks.push(e);
        }),
        (Ge.prototype.SetTarget = function (e) {
          (this.m_fnRender = e),
            0 == this.m_rgLoadingLinks.length &&
              (this.m_fnRender(), (this.m_fnRender = void 0));
        }),
        (Ge.prototype.OnLinkLoad = function (e) {
          e.currentTarget.removeEventListener("load", this.OnLinkLoad),
            g(this.m_rgLoadingLinks, e.currentTarget),
            0 == this.m_rgLoadingLinks.length &&
              (this.m_fnRender(), (this.m_fnRender = void 0));
        }),
        a([_], Ge.prototype, "OnLinkLoad", null),
        Ge);
    function Ge(e, t, r) {
      if (((this.m_rgLoadingLinks = []), (this.m_rgLoadingLinks = []), r))
        for (var n = 0; n < r.length; n++) this.AddLink(r[n], !0);
      else
        for (var o = e.getElementsByTagName("link"), n = 0; n < o.length; n++) {
          var i = o[n];
          this.AddLink(i, !1);
        }
    }
    ((Xe = He = He || {})[(Xe.Minimized = 1)] = "Minimized"),
      (Xe[(Xe.Hidden = 2)] = "Hidden"),
      (Xe[(Xe.Tooltip = 4)] = "Tooltip"),
      (Xe[(Xe.ContextMenu = 8)] = "ContextMenu"),
      (Xe[(Xe.Resizable = 16)] = "Resizable");
    var Ke =
      ((qe.prototype.UpdateParamsBeforeShow = function (e) {
        return e;
      }),
      (qe.prototype.OnDrop = function (e) {
        console.log("Ignoring drop onto toplevel window", e),
          e.preventDefault(),
          e.stopPropagation();
      }),
      (qe.prototype.OnDragOver = function (e) {
        e.preventDefault(),
          (e.dataTransfer.dropEffect = "none"),
          e.stopPropagation();
      }),
      (qe.prototype.OnMessage = function (e) {
        "window_moved" == e.data && this.OnResize();
      }),
      (qe.prototype.Show = function (e, t) {
        var r = this;
        void 0 === e && (e = !0),
          void 0 === t && (t = !1),
          window.SteamClient && (this.m_rgParams.eCreationFlags |= He.Hidden),
          this.m_rgParams.eCreationFlags & He.Tooltip && (e = !1),
          this.BIsValid() &&
            (this.BIsClosed()
              ? ((this.m_popup = void 0), (this.m_element = void 0))
              : e && this.Focus(t));
        var n,
          o,
          i,
          a = tt.GetExistingPopup(this.m_strName);
        (a && !this.m_rgParams.replace_existing_popup) ||
          ((this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams)),
          a
            ? ((o = a.m_element),
              (n = a.m_popup),
              a.ReleasePopup(),
              (i = a.m_renderWhenReady),
              tt.RemoveTrackedPopup(a),
              n.removeEventListener("beforeunload", a.OnBeforeUnloadEvent),
              n.removeEventListener("unload", a.OnUnload),
              n.removeEventListener("resize", a.OnResizeEvent),
              n.removeEventListener("focus", this.OnFocusInternal),
              n.removeEventListener("blur", this.OnBlurInternal),
              n.removeEventListener("drop", a.OnDrop),
              n.removeEventListener("dragover", a.OnDragOver),
              n.removeEventListener("message", this.OnMessage))
            : ((n = (t = Ze.CreatePopup(this.m_strName, this.m_rgParams))
                .popup),
              (o = t.element),
              (i = new $e(n.document, o))),
          n &&
            o &&
            ((n.document.title = this.m_strTitle),
            n.addEventListener("beforeunload", this.OnBeforeUnloadEvent),
            n.addEventListener("unload", this.OnUnload),
            n.addEventListener("resize", this.OnResizeEvent),
            n.addEventListener("focus", this.OnFocusInternal),
            n.addEventListener("blur", this.OnBlurInternal),
            n.addEventListener("drop", this.OnDrop),
            n.addEventListener("dragover", this.OnDragOver),
            n.addEventListener("message", this.OnMessage),
            Oe.LANGUAGE &&
              n.document.documentElement.setAttribute(
                "lang",
                Ve[Oe.LANGUAGE] || null
              ),
            (this.m_popup = n),
            (this.m_element = o),
            (this.m_renderWhenReady = i),
            this.m_renderWhenReady.SetTarget(function () {
              return r.RenderInternal(r.m_popup, r.m_element, e);
            })),
          tt.AddTrackedPopup(this),
          a && e && this.Focus());
      }),
      (qe.prototype.RemoveEventListeners = function () {
        this.window.removeEventListener(
          "beforeunload",
          this.OnBeforeUnloadEvent
        ),
          this.window.removeEventListener("unload", this.OnUnload),
          this.window.removeEventListener("resize", this.OnResizeEvent),
          this.window.removeEventListener("focus", this.OnFocusInternal),
          this.window.removeEventListener("blur", this.OnBlurInternal),
          this.window.removeEventListener("drop", this.OnDrop),
          this.window.removeEventListener("dragover", this.OnDragOver),
          this.window.removeEventListener("message", this.OnMessage);
      }),
      (qe.prototype.RenderInternal = function (e, t, r) {
        var n;
        !this.browser_info ||
          ((n = this.browser_info).m_eBrowserType !=
            se.EBrowserType_OpenVROverlay &&
            n.m_eBrowserType != se.EBrowserType_OpenVROverlay_Dashboard) ||
          (t.ownerDocument.body.className += " VR"),
          this.Render(e, t),
          this.OnLoad(),
          e.SteamClient &&
            (r
              ? e.SteamClient.Window.BringToFront()
              : e.SteamClient.Window.ShowWindow());
      }),
      (qe.prototype.OnResizeEvent = function () {
        this.OnResize();
      }),
      (qe.prototype.OnBeforeUnloadEvent = function () {
        this.OnBeforeUnload();
      }),
      (qe.prototype.OnUnload = function () {
        this.RemoveEventListeners(),
          tt.RemoveTrackedPopup(this),
          this.OnClose(),
          p.unmountComponentAtNode(this.m_element);
      }),
      Object.defineProperty(qe.prototype, "browser_info", {
        get: function () {
          return this.m_rgParams.target_browser;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(qe.prototype, "window", {
        get: function () {
          return this.m_popup;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(qe.prototype, "root_element", {
        get: function () {
          return this.m_element;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(qe.prototype, "title", {
        get: function () {
          return this.m_strTitle;
        },
        set: function (e) {
          (this.m_strTitle = e),
            this.m_popup && (this.m_popup.document.title = this.m_strTitle);
        },
        enumerable: !1,
        configurable: !0,
      }),
      (qe.prototype.Focus = function (e) {
        void 0 === e && (e = !1),
          this.m_popup &&
          void 0 !== this.m_popup.SteamClient &&
          void 0 !== this.m_popup.SteamClient.Window
            ? e
              ? this.m_popup.SteamClient.Window.SetForegroundWindow()
              : this.m_popup.SteamClient.Window.BringToFront()
            : this.m_popup && this.m_popup.focus();
      }),
      (qe.prototype.Close = function () {
        this.m_popup && this.m_popup.close();
      }),
      (qe.prototype.GetName = function () {
        return this.m_strName;
      }),
      (qe.prototype.BIsValid = function () {
        return !!this.m_popup;
      }),
      (qe.prototype.BIsClosed = function () {
        return !this.m_popup || this.m_popup.closed;
      }),
      (qe.prototype.BIsVisible = function () {
        return (
          this.m_popup &&
          !this.m_popup.closed &&
          "visible" == this.m_popup.document.visibilityState
        );
      }),
      (qe.prototype.BIsFocused = function () {
        return this.BIsVisible() && this.m_popup.document.hasFocus();
      }),
      (qe.prototype.OnFocusInternal = function () {
        (this.m_bFocused = !0), this.OnFocus();
      }),
      (qe.prototype.OnBlurInternal = function () {
        (this.m_bFocused = !1), this.OnBlur();
      }),
      Object.defineProperty(qe.prototype, "focused", {
        get: function () {
          return this.m_bFocused;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (qe.prototype.GetWindowRestoreDetails = function () {
        var r = this;
        return this.m_popup && !this.m_popup.closed && this.m_popup.SteamClient
          ? new Promise(function (t, e) {
              r.m_popup.SteamClient.Window.GetWindowRestoreDetails(function (
                e
              ) {
                t(e);
              });
            })
          : Promise.resolve("");
      }),
      (qe.prototype.IsMinimized = function () {
        var r = this;
        return this.m_popup &&
          !this.m_popup.closed &&
          this.m_popup.SteamClient &&
          this.m_popup.SteamClient.Window &&
          this.m_popup.SteamClient.Window.IsWindowMinimized
          ? new Promise(function (t, e) {
              r.m_popup.SteamClient.Window.IsWindowMinimized(function (e) {
                t(e);
              });
            })
          : Promise.resolve(!1);
      }),
      (qe.prototype.ReleasePopup = function () {
        this.OnClose(), (this.m_popup = null);
      }),
      (qe.prototype.OnBeforeUnload = function () {}),
      (qe.prototype.OnFocus = function () {}),
      (qe.prototype.OnBlur = function () {}),
      a([c.B], qe.prototype, "m_bFocused", void 0),
      a([_], qe.prototype, "OnMessage", null),
      a([_], qe.prototype, "OnResizeEvent", null),
      a([_], qe.prototype, "OnBeforeUnloadEvent", null),
      a([_], qe.prototype, "OnUnload", null),
      a([_], qe.prototype, "OnFocusInternal", null),
      a([_], qe.prototype, "OnBlurInternal", null),
      qe);
    function qe(e, t) {
      (this.m_bFocused = !1),
        f(
          e,
          "Name is required.  This is an internal name, different from title."
        ),
        (this.m_strName = e),
        (this.m_rgParams = t),
        this.m_rgParams.target_browser &&
          (this.m_strName += "_pid" + this.m_rgParams.target_browser.m_unPID),
        (this.m_strTitle = t.title),
        delete this.m_rgParams.title;
    }
    var Ye,
      Xe =
        (o(Je, (Ye = Ke)),
        (Je.prototype.BIsInOverlay = function () {
          return (
            this.browser_info &&
            this.browser_info != { m_unPID: 0, m_nBrowserID: -1 }
          );
        }),
        (Je.prototype.SetSavedDimensionsKey = function (e) {
          this.m_strSavedDimensionsKey = e;
        }),
        (Je.prototype.UpdateParamsBeforeShow = function (e) {
          return (
            !this.m_strSavedDimensionsKey ||
            e.bIgnoreSavedDimensions ||
            e.strRestoreDetails
              ? e.strRestoreDetails &&
                ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
                tt.SetRestoreDetails(
                  this.m_strInitialSavedDimensionsKey,
                  e.strRestoreDetails,
                  this.m_bExpires
                ))
              : ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
                (e.strRestoreDetails = tt.GetRestoreDetails(
                  this.m_strInitialSavedDimensionsKey
                ))),
            e
          );
        }),
        (Je.prototype.OnLoad = function () {
          var t = this;
          this.GetWindowRestoreDetails().then(function (e) {
            (t.m_strInitialRestoreDetails = e), t.OnResizeComplete(e);
          });
        }),
        (Je.prototype.OnResize = function () {
          this.QueryAndStoreWindowPosition();
        }),
        (Je.prototype.OnResizeComplete = function (e) {}),
        (Je.prototype.QueryAndStoreWindowPosition = function () {
          var r,
            n = this;
          this.m_strInitialRestoreDetails &&
            ((r = this.GetSavedDimensionsKey()),
            this.m_popup.setTimeout(function () {
              n.GetWindowRestoreDetails().then(function (e) {
                var t =
                  n.m_strInitialRestoreDetails == e &&
                  r == n.m_strInitialSavedDimensionsKey;
                n.m_popup &&
                  n.m_strSavedDimensionsKey &&
                  e &&
                  !t &&
                  (tt.SetRestoreDetails(r, e, n.m_bExpires),
                  (n.m_rgParams.strRestoreDetails = e),
                  (n.m_strInitialSavedDimensionsKey = r),
                  n.OnResizeComplete(e));
              });
            }, 30));
        }),
        (Je.prototype.OnBeforeUnload = function () {
          this.QueryAndStoreWindowPosition(),
            Ye.prototype.OnBeforeUnload.call(this);
        }),
        (Je.prototype.OnClose = function () {}),
        (Je.prototype.SaveWindowPosition = function (e) {
          tt.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
            (this.m_rgParams.strRestoreDetails = e);
        }),
        a([_], Je.prototype, "QueryAndStoreWindowPosition", null),
        Je);
    function Je(e, t, r, n) {
      r = Ye.call(this, e, r) || this;
      return r.SetSavedDimensionsKey(t), (r.m_bExpires = n), r;
    }
    var Qe,
      Ze =
        ((et.prototype.SetCurrentLoggedInAccountID = function (e) {
          (this.m_unCurrentAccountID = e)
            ? this.LoadSavedDimensionStore()
            : this.ClearSavedDimensionStore();
        }),
        (et.prototype.AddShutdownCallback = function (e) {
          this.m_rgShutdownCallbacks.push(e);
        }),
        (et.prototype.AddPopupCreatedCallback = function (e) {
          this.m_rgPopupCreatedCallbacks.push(e);
        }),
        (et.prototype.AddTrackedPopup = function (e) {
          this.m_mapPopups.set(e.GetName(), e);
          for (var t = 0, r = this.m_rgPopupCreatedCallbacks; t < r.length; t++)
            (0, r[t])(e);
        }),
        (et.prototype.RemoveTrackedPopup = function (e) {
          this.m_mapPopups.delete(e.GetName());
        }),
        (et.prototype.GetExistingPopup = function (e) {
          return this.m_mapPopups.get(e);
        }),
        (et.prototype.GetPopups = function () {
          return this.m_mapPopups.values();
        }),
        (et.prototype.ClosePopupsOwnedByBrowser = function (t) {
          this.m_mapPopups.forEach(function (e) {
            e.browser_info &&
              e.browser_info.m_nBrowserID == t.m_nBrowserID &&
              e.browser_info.m_unPID == t.m_unPID &&
              e.Close();
          });
        }),
        (et.CreatePopup = function (e, t) {
          var r = t.dimensions || {},
            n = r.width || 300,
            o = r.height || 300,
            i = t.title,
            n = "width=" + n + ",height=" + o;
          void 0 !== r.left && (n += ",left=" + r.left),
            void 0 !== r.top && (n += ",top=" + r.top),
            (n += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
          (o = "about:blank"), (r = []);
          r.push("createflags=" + t.eCreationFlags),
            t.minWidth && r.push("minwidth=" + t.minWidth),
            t.minHeight && r.push("minheight=" + t.minHeight),
            t.target_browser &&
              (r.push("pid=" + t.target_browser.m_unPID),
              r.push("browser=" + t.target_browser.m_nBrowserID),
              r.push("browserType=" + t.target_browser.m_eBrowserType),
              t.availscreenwidth &&
                t.availscreenheight &&
                (r.push("screenavailwidth=" + t.availscreenwidth),
                r.push("screenavailheight=" + t.availscreenheight))),
            t.strVROverlayKey && r.push("vrOverlayKey=" + t.strVROverlayKey),
            t.strRestoreDetails &&
              r.push("restoredetails=" + t.strRestoreDetails),
            t.window_opener_id && r.push("openerid=" + t.window_opener_id),
            r && (o += "?" + r.join("&"));
          o = (t.owner_window || window).open(o, e, n, !0);
          if (!o)
            return (
              console.log(
                "Failed to create popup.. browser popup blocker enabled?"
              ),
              {}
            );
          e = "";
          t.html_class && (e = 'class="' + t.html_class + '"');
          n = "";
          return (
            t.body_class && (n = 'class="' + t.body_class + '"'),
            o.document.write(
              "<!DOCTYPE html><html " +
                e +
                "><head><title></title></head><body " +
                n +
                '><div id="popup_target"></div></body></html>'
            ),
            (o.document.title = i),
            b(o, y()),
            { popup: o, element: o.document.getElementById("popup_target") }
          );
        }),
        (et.prototype.BShuttingDown = function () {
          return this.m_bShuttingDown;
        }),
        (et.prototype.GetLocalStorageKey = function () {
          return "PopupSavedDimensions_" + this.m_unCurrentAccountID;
        }),
        (et.prototype.LoadSavedDimensionStore = function () {
          if (this.m_unCurrentAccountID) {
            var e = this.GetLocalStorageKey();
            this.m_mapRestoreDetails = void 0;
            e = window.localStorage.getItem(e);
            if (e)
              try {
                var t = JSON.parse(e);
                this.m_mapRestoreDetails = new Map(t);
              } catch (e) {}
            this.m_mapRestoreDetails || (this.m_mapRestoreDetails = new Map());
          }
        }),
        (et.prototype.SaveSavedDimensionStore = function () {
          var e, t;
          this.m_unCurrentAccountID &&
            this.m_bSaveRequired &&
            ((e = this.GetLocalStorageKey()),
            (t = JSON.stringify(Array.from(this.m_mapRestoreDetails))),
            window.localStorage.setItem(e, t),
            (this.m_bSaveRequired = !1));
        }),
        (et.prototype.DebouncedSaveSavedDimensionStore = function () {
          this.SaveSavedDimensionStore();
        }),
        (et.prototype.ClearSavedDimensionStore = function () {
          this.m_mapRestoreDetails.clear(), (this.m_bSaveRequired = !1);
        }),
        (et.prototype.GetRestoreDetails = function (e) {
          if (!this.m_mapRestoreDetails.has(e)) return "";
          e = this.m_mapRestoreDetails.get(e);
          return (
            (e.last_used = Date.now()),
            (this.m_bSaveRequired = !0),
            e.strRestoreDetails
          );
        }),
        (et.prototype.SetRestoreDetails = function (e, t, r) {
          if (e) {
            if (t) {
              if (50 < this.m_mapRestoreDetails.size) {
                for (
                  var n = null,
                    o = Date.now(),
                    i = 0,
                    a = Array.from(this.m_mapRestoreDetails.keys());
                  i < a.length;
                  i++
                ) {
                  var s = a[i],
                    u = this.m_mapRestoreDetails.get(s);
                  u.last_used < o && u.bExpires && ((o = u.last_used), (n = s));
                }
                n && this.m_mapRestoreDetails.delete(n);
              }
              r = { strRestoreDetails: t, last_used: Date.now(), bExpires: r };
              this.m_mapRestoreDetails.set(e, r);
            } else this.m_mapRestoreDetails.delete(e);
            (this.m_bSaveRequired = !0),
              this.m_bShuttingDown
                ? this.SaveSavedDimensionStore()
                : this.DebouncedSaveSavedDimensionStore();
          }
        }),
        a(
          [
            _,
            ((Qe = 100),
            function (e, o, t) {
              var i = t.value;
              t.value = function () {
                for (var e = this, t = [], r = 0; r < arguments.length; r++)
                  t[r] = arguments[r];
                var n = this[o + "_DebounceProperties"];
                void 0 ===
                (n =
                  void 0 === n
                    ? (this[o + "_DebounceProperties"] = {
                        hTimer: void 0,
                        nPending: 0,
                      })
                    : n).hTimer
                  ? (i.apply(this, t),
                    (n.hTimer = window.setInterval(function () {
                      0 < n.nPending
                        ? (i.apply(e, t), (n.nPending = 0))
                        : (window.clearInterval(n.hTimer), (n.hTimer = void 0));
                    }, Qe)))
                  : (n.nPending += 1);
              };
            }),
          ],
          et.prototype,
          "DebouncedSaveSavedDimensionStore",
          null
        ),
        et);
    function et() {
      var e,
        a = this;
      (this.m_bShuttingDown = !1),
        (this.m_mapPopups = new Map()),
        (this.m_rgShutdownCallbacks = []),
        (this.m_rgPopupCreatedCallbacks = []),
        (this.m_unCurrentAccountID = 0),
        (this.m_mapRestoreDetails = new Map()),
        (this.m_bSaveRequired = !1),
        Object({ NODE_ENV: "production", STEAM_BUILD: "buildbot" })
          .MOBILE_BUILD ||
          (window.addEventListener("beforeunload", function (e) {
            a.m_bShuttingDown = !0;
            for (var t = 0, r = a.m_rgShutdownCallbacks; t < r.length; t++)
              (0, r[t])();
            var n = [];
            a.m_mapPopups.forEach(function (e) {
              e.BIsValid() && !e.BIsClosed() && n.push(e);
            });
            for (var o = 0, i = n; o < i.length; o++) i[o].Close();
            a.m_bSaveRequired && a.SaveSavedDimensionStore(),
              a.m_mapPopups.clear();
          }),
          f((e = document.querySelector("head")), "Couldn't find head element"),
          e &&
            ((this.m_DynamicCSSObserver = new MutationObserver(function () {
              var t = y();
              a.m_mapPopups.forEach(function (e) {
                b(e.window, t);
              });
            })),
            this.m_DynamicCSSObserver.observe(e, { childList: !0 })));
    }
    var tt = new Ze();
    window.g_PopupManager = tt;
    var Ke = r("twdX"),
      rt = r.n(Ke);
    Ke = r("vvG3");
    function nt(e) {
      e = e.color || "#FFFFFF";
      return we.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_X_Line",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        we.createElement("line", {
          fill: "none",
          stroke: e,
          strokeWidth: "45",
          strokeMiterlimit: "10",
          x1: "212",
          y1: "212",
          x2: "44",
          y2: "44",
        }),
        we.createElement("line", {
          fill: "none",
          stroke: e,
          strokeWidth: "45",
          strokeMiterlimit: "10",
          x1: "44",
          y1: "212",
          x2: "212",
          y2: "44",
        })
      );
    }
    function ot(e) {
      e = e.color || "#020202";
      return we.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Caution",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        we.createElement(
          "g",
          { className: "triangle" },
          we.createElement("path", {
            stroke: e,
            strokeWidth: "16",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d: "M127.9,76.632",
          }),
          we.createElement("path", {
            fill: "none",
            stroke: e,
            strokeWidth: "11",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "5",
            d:
              "M128.001,226.606c42.507,0,81.538,0,87.756,0c31.222,0,36.95-14.974,24.045-34.771c-6.921-10.617-78.297-122.962-89.163-140.254\tC141.859,37.613,138.542,29.393,128,29.393l0,0c-10.543,0-13.86,8.222-22.639,22.189C94.495,68.874,23.119,181.219,16.198,191.836 c-12.905,19.797-7.175,34.771,24.045,34.771C46.463,226.606,85.494,226.606,128.001,226.606",
          }),
          we.createElement("path", { fill: e, d: "M127.9,208.12" })
        ),
        we.createElement(
          "g",
          { className: "exclamation" },
          we.createElement("line", {
            fill: "none",
            stroke: e,
            strokeWidth: "16",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "127.9",
            y1: "76.632",
            x2: "127.9",
            y2: "160.07",
          }),
          we.createElement("path", {
            fill: e,
            d:
              "M127.9,208.12c-6.377,0-11.548-5.17-11.548-11.548c0-6.377,5.17-11.547,11.548-11.547 c6.377,0,11.547,5.17,11.547,11.547C139.447,202.95,134.277,208.12,127.9,208.12",
          })
        )
      );
    }
    function it(e) {
      var t = "SVGIcon_Button SVGIcon_Throbber ";
      return (
        e.className && (t += e.className),
        we.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          we.createElement(
            "g",
            { className: rt.a.partCircle },
            we.createElement("path", {
              className: rt.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
            }),
            we.createElement("path", {
              className: rt.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M201.432,101.166",
            }),
            we.createElement("path", {
              className: rt.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
            })
          ),
          we.createElement(
            "g",
            { className: rt.a.mainOutline },
            we.createElement("path", {
              className: rt.a.roundFill,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            we.createElement("path", {
              className: rt.a.roundOuterOutline,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            we.createElement("path", {
              className: rt.a.roundThrobber01,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            we.createElement("path", {
              className: rt.a.roundThrobber02,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            we.createElement("path", {
              className: rt.a.roundThrobber03,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            we.createElement("path", {
              className: rt.a.roundThrobber04,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            we.createElement("path", {
              className: rt.a.roundThrobber05,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            we.createElement("path", {
              className: rt.a.roundThrobber06,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            we.createElement("path", {
              className: rt.a.roundThrobber07,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            we.createElement("path", {
              className: rt.a.roundThrobber08,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            we.createElement("path", {
              className: rt.a.roundThrobber09,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            we.createElement("path", {
              className: rt.a.roundThrobber10,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            we.createElement("path", {
              className: rt.a.roundThrobber11,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            we.createElement("path", {
              className: rt.a.roundThrobber12,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            we.createElement("path", {
              className: rt.a.roundThrobber13,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            we.createElement("path", {
              className: rt.a.roundThrobber14,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            we.createElement("path", {
              className: rt.a.roundThrobber15,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            })
          ),
          we.createElement(
            "g",
            { className: rt.a.bottomCircle },
            we.createElement("path", {
              fill: "#ffffff",
              d:
                "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
            })
          ),
          we.createElement(
            "g",
            { className: rt.a.topCircle },
            we.createElement("circle", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              cx: "161.731",
              cy: "101.274",
              r: "23.019",
            })
          )
        )
      );
    }
    function at() {
      return we.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Maximize",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        we.createElement("rect", {
          x: "24",
          y: "42.167",
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          width: "208",
          height: "171.667",
        }),
        we.createElement("line", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "42",
          strokeMiterlimit: "10",
          x1: "24",
          y1: "54.01",
          x2: "232",
          y2: "54.01",
        })
      );
    }
    function st() {
      return we.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Minimize",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        we.createElement("line", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          x1: "24",
          y1: "209.01",
          x2: "232",
          y2: "209.01",
        })
      );
    }
    function ut() {
      return we.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Restore",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        we.createElement("polyline", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "12",
          strokeMiterlimit: "10",
          points: "83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 ",
        }),
        we.createElement("rect", {
          x: "24",
          y: "90.861",
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          width: "149",
          height: "122.973",
        })
      );
    }
    if (!we.useState)
      throw new Error("mobx-react-lite requires React with Hooks support");
    if (!c.G)
      throw new Error(
        "mobx-react-lite requires mobx at least version 4 to be available"
      );
    var lt = r("Hxks"),
      ct = Object(lt.b)("observerBatching");
    function pt(e) {
      e();
    }
    var ft = !1;
    function gt(e) {
      return Object(c.t)(e);
    }
    var dt,
      ht = 1e4,
      yt = 1e4,
      bt = new Set();
    function mt() {
      void 0 === dt && (dt = setTimeout(_t, yt));
    }
    function _t() {
      dt = void 0;
      var r = Date.now();
      bt.forEach(function (e) {
        var t = e.current;
        t &&
          r >= t.cleanAt &&
          (t.reaction.dispose(), (e.current = null), bt.delete(e));
      }),
        0 < bt.size && mt();
    }
    var vt = !1,
      Et = [];
    var wt = {};
    function St(e) {
      return "observer" + e;
    }
    function Tt(r, e, t) {
      if ((void 0 === e && (e = "observed"), void 0 === t && (t = wt), ft))
        return r();
      var n,
        o,
        i,
        t = (t.useForceUpdate || lt.d)(),
        a =
          ((n = t),
          function () {
            vt ? Et.push(n) : n();
          }),
        s = Se.a.useRef(null);
      s.current ||
        ((o = new c.c(St(e), function () {
          i.mounted ? a() : (o.dispose(), (s.current = null));
        })),
        (t = o),
        (i = { cleanAt: Date.now() + ht, reaction: t }),
        (s.current = i),
        bt.add(s),
        mt());
      var u = s.current.reaction;
      return (
        Se.a.useDebugValue(u, gt),
        Se.a.useEffect(function () {
          return (
            bt.delete(s),
            s.current
              ? (s.current.mounted = !0)
              : ((s.current = {
                  reaction: new c.c(St(e), function () {
                    a();
                  }),
                  cleanAt: 1 / 0,
                }),
                a()),
            function () {
              s.current.reaction.dispose(), (s.current = null);
            }
          );
        }, []),
        (function (e) {
          (vt = !0), (Et = []);
          try {
            var t = e();
            vt = !1;
            var r = 0 < Et.length ? Et : void 0;
            return (
              Se.a.useLayoutEffect(
                function () {
                  r &&
                    r.forEach(function (e) {
                      return e();
                    });
                },
                [r]
              ),
              t
            );
          } finally {
            vt = !1;
          }
        })(function () {
          var e, t;
          if (
            (u.track(function () {
              try {
                e = r();
              } catch (e) {
                t = e;
              }
            }),
            t)
          )
            throw t;
          return e;
        })
      );
    }
    var At = function () {
      return (At =
        Object.assign ||
        function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in (t = arguments[r]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
    function jt(r, e) {
      if (ft) return r;
      var t,
        n,
        o = At({ forwardRef: !1 }, e),
        i = r.displayName || r.name,
        e = function (e, t) {
          return Tt(function () {
            return r(e, t);
          }, i);
        };
      return (
        (e.displayName = i),
        (e = o.forwardRef
          ? Object(we.memo)(Object(we.forwardRef)(e))
          : Object(we.memo)(e)),
        (t = r),
        (n = e),
        Object.keys(t).forEach(function (e) {
          Ot[e] ||
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
        }),
        (e.displayName = i),
        e
      );
    }
    var Ot = { $$typeof: !0, render: !0, compare: !0, type: !0 };
    function Ct(e) {
      var t = e.children,
        e = e.render,
        e = t || e;
      return "function" != typeof e ? null : Tt(e);
    }
    function kt(e, t, r, n, o) {
      var i = "function" == typeof e[t],
        a = "function" == typeof e["children" === t ? "render" : "children"];
      return i && a
        ? new Error(
            "MobX Observer: Do not use children and render in the same time in`" +
              r
          )
        : i || a
        ? null
        : new Error(
            "Invalid prop `" +
              o +
              "` of type `" +
              typeof e[t] +
              "` supplied to `" +
              r +
              "`, expected `function`."
          );
    }
    (Ct.propTypes = { children: kt, render: kt }),
      (Ct.displayName = "Observer");
    var xt;
    (xt = (xt = p.unstable_batchedUpdates) || pt),
      Object(c.n)({ reactionScheduler: xt }),
      (Object(lt.a)()[ct] = !0);
    var It = 0;
    var Mt = {};
    function Rt(e) {
      var t;
      return (
        Mt[e] ||
          (Mt[e] =
            ((t = e),
            "function" == typeof Symbol
              ? Symbol(t)
              : ((t = "__$mobx-react " + t + " (" + It + ")"), It++, t))),
        Mt[e]
      );
    }
    function Bt(e, t) {
      if (Nt(e, t)) return 1;
      if (
        "object" == typeof e &&
        null !== e &&
        "object" == typeof t &&
        null !== t
      ) {
        var r = Object.keys(e),
          n = Object.keys(t);
        if (r.length === n.length) {
          for (var o = 0; o < r.length; o++)
            if (!Object.hasOwnProperty.call(t, r[o]) || !Nt(e[r[o]], t[r[o]]))
              return;
          return 1;
        }
      }
    }
    function Nt(e, t) {
      return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    }
    function Pt(e, t, r) {
      Object.hasOwnProperty.call(e, t)
        ? (e[t] = r)
        : Object.defineProperty(e, t, {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: r,
          });
    }
    var Dt = Rt("patchMixins"),
      Lt = Rt("patchedDefinition");
    function Ut(e, t) {
      for (
        var r,
          n = this,
          o = arguments.length,
          i = new Array(2 < o ? o - 2 : 0),
          a = 2;
        a < o;
        a++
      )
        i[a - 2] = arguments[a];
      t.locks++;
      try {
        return (r = null != e ? e.apply(this, i) : r);
      } finally {
        t.locks--,
          0 === t.locks &&
            t.methods.forEach(function (e) {
              e.apply(n, i);
            });
      }
    }
    function Ft(n, o) {
      return function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        Ut.call.apply(Ut, [this, n, o].concat(t));
      };
    }
    function Wt(e, t, r) {
      var n,
        n =
          ((o = t),
          (n = (n = e)[Dt] = n[Dt] || {}),
          ((o = n[o] = n[o] || {}).locks = o.locks || 0),
          (o.methods = o.methods || []),
          o);
      n.methods.indexOf(r) < 0 && n.methods.push(r);
      var o = Object.getOwnPropertyDescriptor(e, t);
      (o && o[Lt]) ||
        ((r = e[t]),
        (r = (function t(r, n, o, i, e) {
          var a = Ft(e, i);
          return (
            (e = {}),
            (e[Lt] = !0),
            (e.get = function () {
              return a;
            }),
            (e.set = function (e) {
              this === r
                ? (a = Ft(e, i))
                : ((e = t(this, n, o, i, e)),
                  Object.defineProperty(this, n, e));
            }),
            (e.configurable = !0),
            (e.enumerable = o),
            e
          );
        })(e, t, o ? o.enumerable : void 0, n, r)),
        Object.defineProperty(e, t, r));
    }
    var Vt = c.a || "$mobx",
      zt = Rt("isMobXReactObserver"),
      Ht = Rt("isUnmounted"),
      $t = Rt("skipRender"),
      Gt = Rt("isForcingUpdate");
    function Kt(e) {
      var t,
        r = e.prototype;
      if (
        (e[zt]
          ? ((t = qt(r)),
            console.warn(
              "The provided component class (" +
                t +
                ") \n                has already been declared as an observer component."
            ))
          : (e[zt] = !0),
        r.componentWillReact)
      )
        throw new Error(
          "The componentWillReact life-cycle event is no longer supported"
        );
      if (e.__proto__ !== we.PureComponent)
        if (r.shouldComponentUpdate) {
          if (r.shouldComponentUpdate !== Yt)
            throw new Error(
              "It is not allowed to use shouldComponentUpdate in observer based components."
            );
        } else r.shouldComponentUpdate = Yt;
      Xt(r, "props"), Xt(r, "state");
      var n = r.render;
      return (
        (r.render = function () {
          return function (e) {
            var t = this;
            if (!0 === ft) return e.call(this);
            Pt(this, $t, !1), Pt(this, Gt, !1);
            var r = qt(this),
              n = e.bind(this),
              o = !1,
              i = new c.c(r + ".render()", function () {
                if (!o && (o = !0) !== t[Ht]) {
                  var e = !0;
                  try {
                    Pt(t, Gt, !0),
                      t[$t] || we.Component.prototype.forceUpdate.call(t),
                      (e = !1);
                  } finally {
                    Pt(t, Gt, !1), e && i.dispose();
                  }
                }
              });
            function a() {
              o = !1;
              var t = void 0,
                e = void 0;
              if (
                (i.track(function () {
                  try {
                    e = Object(c.d)(!1, n);
                  } catch (e) {
                    t = e;
                  }
                }),
                t)
              )
                throw t;
              return e;
            }
            return (
              (i.reactComponent = this),
              (a[Vt] = i),
              (this.render = a).call(this)
            );
          }.call(this, n);
        }),
        Wt(r, "componentWillUnmount", function () {
          var e;
          !0 !== ft &&
            (null !== (e = this.render[Vt]) && void 0 !== e && e.dispose(),
            (this[Ht] = !0),
            this.render[Vt] ||
              ((e = qt(this)),
              console.warn(
                "The reactive render of an observer class component (" +
                  e +
                  ") \n                was overriden after MobX attached. This may result in a memory leak if the \n                overriden reactive render was not properly disposed."
              )));
        }),
        e
      );
    }
    function qt(e) {
      return (
        e.displayName ||
        e.name ||
        (e.constructor && (e.constructor.displayName || e.constructor.name)) ||
        "<component>"
      );
    }
    function Yt(e, t) {
      return (
        ft &&
          console.warn(
            "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."
          ),
        this.state !== t || !Bt(this.props, e)
      );
    }
    function Xt(e, t) {
      var r = Rt("reactProp_" + t + "_valueHolder"),
        n = Rt("reactProp_" + t + "_atomHolder");
      function o() {
        return this[n] || Pt(this, n, Object(c.o)("reactive " + t)), this[n];
      }
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          var e = !1;
          return (
            c.f && c.e && (e = Object(c.f)(!0)),
            o.call(this).reportObserved(),
            c.f && c.e && Object(c.e)(e),
            this[r]
          );
        },
        set: function (e) {
          this[Gt] || Bt(this[r], e)
            ? Pt(this, r, e)
            : (Pt(this, r, e),
              Pt(this, $t, !0),
              o.call(this).reportChanged(),
              Pt(this, $t, !1));
        },
      });
    }
    var Ke = "function" == typeof Symbol && Symbol.for,
      Jt = Ke
        ? Symbol.for("react.forward_ref")
        : "function" == typeof we.forwardRef &&
          Object(we.forwardRef)(function (e) {
            return null;
          }).$$typeof,
      Qt = Ke
        ? Symbol.for("react.memo")
        : "function" == typeof we.memo &&
          Object(we.memo)(function (e) {
            return null;
          }).$$typeof;
    function Zt(e) {
      if (
        (!0 === e.isMobxInjector &&
          console.warn(
            "Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"
          ),
        Qt && e.$$typeof === Qt)
      )
        throw new Error(
          "Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you."
        );
      if (Jt && e.$$typeof === Jt) {
        var t = e.render;
        if ("function" != typeof t)
          throw new Error("render property of ForwardRef was not a function");
        return Object(we.forwardRef)(function () {
          var e = arguments;
          return Object(we.createElement)(Ct, null, function () {
            return t.apply(void 0, e);
          });
        });
      }
      return ("function" != typeof e ||
        (e.prototype && e.prototype.render) ||
        e.isReactClass ||
        Object.prototype.isPrototypeOf.call(we.Component, e)
        ? Kt
        : jt)(e);
    }
    if (!we.Component)
      throw new Error("mobx-react requires React to be available");
    if (!c.B) throw new Error("mobx-react requires mobx to be available");
    var er,
      tr =
        (o(rr, (er = we.PureComponent)),
        (rr.prototype.BindResizeGrip = function (e) {
          var t = 0,
            r = 0;
          e &&
            ((n = e.getBoundingClientRect()),
            (e = e.ownerDocument.defaultView),
            n &&
              e &&
              ((t = Math.ceil(e.innerWidth - n.left)),
              (r = Math.ceil(e.innerHeight - n.top))));
          var n = this.props.popup;
          n.SteamClient &&
            n.SteamClient.Window &&
            n.SteamClient.Window.SetResizeGrip &&
            n.SteamClient.Window.SetResizeGrip(t, r);
        }),
        (rr.prototype.componentWillUnmount = function () {
          this.props.popup.SteamClient.Window.SetResizeGrip(0, 0);
        }),
        (rr.prototype.render = function () {
          return we.createElement("div", {
            className: "window_resize_grip",
            ref: this.BindResizeGrip,
          });
        }),
        rr);
    function rr(e) {
      e = er.call(this, e) || this;
      return (
        (e.m_fnExistingPopupInitializer = void 0),
        (e.BindResizeGrip = e.BindResizeGrip.bind(e)),
        e
      );
    }
    var nr,
      or =
        (o(ir, (nr = we.Component)),
        (ir.prototype.BIsMaximized = function () {
          var e =
              this.props.popup.screen.availWidth - this.props.popup.innerWidth,
            t =
              this.props.popup.screen.availHeight -
              this.props.popup.innerHeight;
          return 0 == e && 0 == t;
        }),
        (ir.prototype.componentDidMount = function () {
          this.props.popup.addEventListener("resize", this.UpdateMaximizeState);
        }),
        (ir.prototype.componentWillUnmount = function () {
          this.props.popup.removeEventListener(
            "resize",
            this.UpdateMaximizeState
          );
        }),
        (ir.prototype.UpdateMaximizeState = function () {
          var e = this.BIsMaximized();
          e != this.state.maximized && this.setState({ maximized: e });
        }),
        (ir.prototype.render = function () {
          var e = this.props.popup,
            t = "title-area-icon";
          this.state.maximized
            ? (t += " restoreButton")
            : (t += " maximizeButton");
          var r = "TitleBar title-area";
          return (
            this.props.className && (r = r + " " + this.props.className),
            we.createElement(
              "div",
              { className: r, style: this.props.style },
              we.createElement("div", { className: "title-area-highlight" }),
              we.createElement(
                "div",
                { className: "title-area-children" },
                this.props.children
              ),
              !this.props.hideActions &&
                we.createElement(
                  "div",
                  { className: "title-bar-actions" },
                  we.createElement(
                    "div",
                    {
                      className: "title-area-icon closeButton",
                      onClick: function () {
                        e && e.close();
                      },
                    },
                    we.createElement(nt, null)
                  ),
                  !this.props.hideMinMax &&
                    we.createElement(
                      "div",
                      {
                        className: t,
                        onClick: function () {
                          e.SteamClient.Window.ToggleMaximize();
                        },
                      },
                      this.state.maximized && we.createElement(ut, null),
                      !this.state.maximized && we.createElement(at, null)
                    ),
                  !this.props.hideMinMax &&
                    we.createElement(
                      "div",
                      {
                        className: "title-area-icon minimizeButton",
                        onClick: function () {
                          e.SteamClient.Window.Minimize();
                        },
                      },
                      we.createElement(st, null)
                    )
                )
            )
          );
        }),
        a([_], ir.prototype, "UpdateMaximizeState", null),
        ir);
    function ir(e) {
      e = nr.call(this, e) || this;
      return (e.state = { maximized: e.BIsMaximized() }), e;
    }
    var ar,
      sr,
      ur =
        (o(lr, (ar = Se.a.PureComponent)),
        (lr.prototype.AddSizeClass = function (e) {
          "small" == this.props.size
            ? e.push(rt.a.throbber_small)
            : "medium" == this.props.size
            ? e.push(rt.a.throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(rt.a.throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(rt.a.throbber_xxlarge)
            : e.push(rt.a.throbber_large);
        }),
        (lr.prototype.render = function () {
          var e = [rt.a.LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(rt.a.noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(rt.a.Static);
          e = Se.a.createElement(
            "div",
            { className: e.join(" ") },
            Se.a.createElement(
              "div",
              { className: rt.a.Throbber },
              Se.a.createElement(it, { className: rt.a.base }),
              Se.a.createElement(it, { className: rt.a.blur })
            )
          );
          return Se.a.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? rt.a.throbber_center_wrapper
                  : "",
            },
            e,
            Boolean(this.props.string) &&
              Se.a.createElement(
                "div",
                { className: rt.a.ThrobberText },
                this.props.string
              )
          );
        }),
        lr);
    function lr(e) {
      return ar.call(this, e) || this;
    }
    ((Ke = sr = sr || {})[(Ke.SignIn = 0)] = "SignIn"),
      (Ke[(Ke.Loading = 1)] = "Loading"),
      (Ke[(Ke.Loaded = 2)] = "Loaded"),
      (Ke[(Ke.FailRetry = 3)] = "FailRetry"),
      (Ke[(Ke.OfflineMode = 4)] = "OfflineMode");
    var cr =
      ((pr.prototype.Init = function () {
        this.m_eState = sr.SignIn;
      }),
      Object.defineProperty(pr.prototype, "loadingState", {
        get: function () {
          return this.m_eState;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (pr.prototype.SetLoadingState = function (e) {
        this.m_eState = e;
      }),
      a([c.B], pr.prototype, "m_eState", void 0),
      pr);
    function pr() {
      this.m_eState = sr.SignIn;
    }
    var fr,
      gr =
        (o(dr, (fr = we.Component)),
        (dr.prototype.ContextMenu = function (e) {
          e.preventDefault(), e.stopPropagation();
        }),
        (dr.prototype.componentDidMount = function () {
          var t = this;
          SteamClient.WebChat.GetLocalPersonaName().then(function (e) {
            t.m_strPersonaName = e;
          }),
            SteamClient.WebChat.GetLocalAvatarBase64().then(function (e) {
              t.m_strAvatarSource = e;
            });
        }),
        (dr.prototype.render = function () {
          var e = this.props.offlineStore.loadingState,
            t = this.m_strPersonaName,
            r = this.m_strAvatarSource,
            n = "currentUserAvatar";
          "" == r && (n += " noAvatarImg");
          var o =
            "chat_main fullheight responsive_friends friends_loading_error";
          return (
            this.props.popup && this.props.popup.focused && (o += " focused"),
            we.createElement(
              "div",
              { className: o, onContextMenu: this.ContextMenu },
              we.createElement(
                "div",
                { className: "friendsListContainer fullheight" },
                we.createElement(
                  "div",
                  { className: "friendlist" },
                  we.createElement(or, { popup: this.props.popup.window }),
                  we.createElement(
                    "div",
                    { className: "currentUserContainer" },
                    we.createElement(
                      "div",
                      { className: "AvatarAndUser" },
                      "" != r &&
                        we.createElement("img", { className: n, src: r }),
                      "" == r && we.createElement("div", { className: n }),
                      we.createElement(
                        "div",
                        { className: "labelHolder" },
                        we.createElement(
                          "div",
                          { className: "statusAndName" },
                          we.createElement(
                            "div",
                            { className: "playerName" },
                            t
                          )
                        ),
                        we.createElement(
                          "div",
                          { className: "richPresenceContainer" },
                          we.createElement(
                            "div",
                            { className: "gameName richPresenceLabel" },
                            Fe("#FriendsList_Offline_Disconnected")
                          )
                        )
                      )
                    )
                  ),
                  we.createElement(
                    "div",
                    { className: "FriendsFailureContainer" },
                    we.createElement(
                      "div",
                      { className: "friendsListInsetShadowCtn" },
                      we.createElement("div", {
                        className: "frienListInsetShadowTop",
                      })
                    ),
                    e == sr.SignIn && we.createElement(br, null),
                    e == sr.Loading && we.createElement(hr, null),
                    e == sr.FailRetry && we.createElement(yr, null),
                    e == sr.OfflineMode && we.createElement(mr, null)
                  )
                ),
                we.createElement(tr, { popup: this.props.popup.window })
              )
            )
          );
        }),
        a([c.B], dr.prototype, "m_strPersonaName", void 0),
        a([c.B], dr.prototype, "m_strAvatarSource", void 0),
        a([_], dr.prototype, "ContextMenu", null),
        a([Zt], dr));
    function dr() {
      return (null !== fr && fr.apply(this, arguments)) || this;
    }
    function hr() {
      return we.createElement(
        "div",
        null,
        we.createElement(
          "div",
          null,
          we.createElement(ur, {
            className: "friendsThrobber",
            size: "large",
            string: Fe("#FriendsList_StillLoadingSummary"),
            position: "center",
          })
        ),
        we.createElement("div", { className: "summaryText" }),
        we.createElement(
          "div",
          { className: "detailText" },
          Fe("#FriendsList_StillLoadingDetail")
        )
      );
    }
    function yr() {
      return we.createElement(
        "div",
        null,
        we.createElement(
          "div",
          { className: "cautionIcon" },
          we.createElement(ot, null)
        ),
        we.createElement(
          "div",
          { className: "summaryText" },
          Fe("#FriendsList_OfflineOrFailure")
        ),
        we.createElement(
          "div",
          { className: "detailText" },
          Fe("#FriendsList_OfflineDetail")
        ),
        we.createElement(
          "div",
          null,
          we.createElement(
            "button",
            {
              className: "retryButton",
              onClick: function () {
                console.log("OnRetryClick"),
                  window.parent.postMessage(
                    { message: "ChatReloadRequest", state: void 0 },
                    "https://steamloopback.host"
                  );
              },
            },
            Fe("#Friends_RetryLoading")
          )
        )
      );
    }
    function br() {
      return we.createElement(
        "div",
        null,
        we.createElement(
          "div",
          { className: "summaryText" },
          Fe("#FriendsList_SignedOut")
        ),
        we.createElement(
          "div",
          { className: "detailText" },
          Fe("#FriendsList_SignedOut_Detail")
        ),
        we.createElement(
          "div",
          null,
          we.createElement(
            "button",
            {
              className: "retryButton",
              onClick: function () {
                window.parent.postMessage(
                  { message: "SignInRequest", state: void 0 },
                  "https://steamloopback.host"
                );
              },
            },
            Fe("#Friends_SignIn")
          )
        )
      );
    }
    function mr() {
      return we.createElement(
        "div",
        null,
        we.createElement(
          "div",
          { className: "summaryText" },
          Fe("#FriendsList_OfflineMode")
        ),
        we.createElement(
          "div",
          { className: "detailText" },
          Fe("#FriendsList_OfflineMode_Detail")
        )
      );
    }
    var _r,
      vr =
        (o(Er, (_r = Xe)),
        (Er.prototype.GetSavedDimensionsKey = function () {
          return this.m_strSavedDimensionsKey;
        }),
        (Er.prototype.OnResizeComplete = function (e) {
          window.parent.postMessage(
            { message: "ErrorPopupRestoreDetailsChanged", data: e },
            "https://steamloopback.host"
          );
        }),
        (Er.prototype.Render = function (e, t) {
          t.setAttribute("class", "fullheight popup_chat_frame"),
            p.render(
              we.createElement(gr, {
                popup: this,
                offlineStore: this.m_offlineStore,
              }),
              t
            );
        }),
        (Er.prototype.OnClose = function () {
          _r.prototype.OnClose.call(this),
            window.parent.postMessage(
              { message: "ErrorPopupClosed" },
              "https://steamloopback.host"
            );
        }),
        Er);
    function Er(e, t) {
      var r = this,
        t = {
          dimensions: { width: 300, height: 650 },
          minWidth: 226,
          minHeight: 400,
          title: Fe("#WindowTitle_FriendsList"),
          html_class: "client_chat_frame fullheight SavedDimensionsPopup",
          body_class: "fullheight",
          eCreationFlags: He.Resizable,
          target_browser: t,
        };
      return (
        ((r =
          _r.call(
            this,
            "offlinefriendslist",
            "PopupFriendsListDimensions",
            t,
            !1
          ) || this).m_offlineStore = e),
        r
      );
    }
    var Xe = r("vDqi"),
      wr = r.n(Xe);
    function Sr(e) {
      function t(e, t, r) {
        return wr.a
          .get(
            "https://steamloopback.host/localization/" + e + "_" + t + ".json"
          )
          .then(function (e) {
            r(e.data);
          })
          .catch(function (e) {
            Promise.resolve();
          });
      }
      var r,
        n,
        o,
        i,
        a = [];
      a.push(
        t("clientui", e, function (e) {
          r = e;
        })
      ),
        a.push(
          t("shared", e, function (e) {
            o = e;
          })
        );
      var s = Le.GetLanguageFallback(e);
      return (
        e != s &&
          (a.push(
            t("clientui", s, function (e) {
              n = e;
            })
          ),
          a.push(
            t("shared", s, function (e) {
              i = e;
            })
          )),
        Promise.all(a).then(function () {
          ze.InitFromObjects(r, n, o, i);
        })
      );
    }
    function Tr(e) {
      var t = e.split(".", 2),
        r = t[0],
        e = t[1];
      return (
        r &&
        e &&
        ((t = r), "object" == typeof SteamClient && t in SteamClient) &&
        e in SteamClient[r]
      );
    }
    r("whIR"), r("HQzE"), r("ChfH");
    (window._Steam = {
      onComponentMounted: function (e) {
        var t, r;
        e &&
          e._reactInternalInstance._currentElement &&
          e._reactInternalInstance._currentElement._source &&
          (t = p.findDOMNode(e)) &&
          ((r = ""),
          (r =
            e._reactInternalInstance._currentElement.type &&
            e._reactInternalInstance._currentElement.type.name
              ? e._reactInternalInstance._currentElement.type.name
              : e && e.constructor && e.constructor.name
              ? e.constructor.name
              : "unknown"),
          t.setAttribute("data-react-type", r),
          null !=
            (e =
              e._reactInternalInstance._renderedComponent._currentElement
                ._source) &&
            (t.setAttribute("data-react-file", e.fileName),
            t.setAttribute("data-react-line", e.lineNumber)));
      },
    }),
      (window.test = function () {
        SteamClient._internal.RegisterForStyleChanges(function (e) {
          for (
            var t = "https://steamloopback.host/",
              r = [],
              n = document.querySelectorAll('link[rel="stylesheet"]'),
              o = 0;
            o < n.length;
            o++
          ) {
            var i = n[o],
              a = i.href,
              s = "",
              a = (s = a.startsWith(t) ? a.substr(t.length) : s).indexOf("?");
            0 <= a && (s = s.substr(0, a));
            for (var u = 0, l = e; u < l.length; u++) {
              var c = l[u];
              if (s == c) {
                r.push({ sheet: i, newRelative: c });
                break;
              }
            }
          }
          for (var p, f, g = 0, d = r; g < d.length; g++) {
            var h = d[g];
            (p = h.newRelative),
              (f = h.sheet),
              (h = void 0),
              ((h = document.createElement("link")).href = p),
              (h.type = "text/css"),
              (h.rel = "stylesheet"),
              (p = f.parentElement).insertBefore(h, f),
              p.removeChild(f);
          }
        });
      });
    var Ar,
      jr = "",
      Or = "",
      Cr = void 0,
      kr = void 0,
      xr = void 0,
      Ir = 0,
      Mr = [],
      Rr = "",
      Br = -1,
      Nr = void 0,
      Pr = void 0,
      Dr = 0,
      Lr = 0,
      Ur = void 0,
      Fr = !1,
      Wr = !1;
    function Vr(e) {
      if (
        (SteamClient.WebChat.RegisterForFriendPostMessage(Qr),
        void 0 !== xr && (clearInterval(xr), (xr = void 0)),
        (jr = e),
        Ar.SetLoadingState(sr.Loading),
        (Dr = 0),
        zr(),
        Fr)
      )
        return Ar.SetLoadingState(sr.FailRetry), void en();
      Wr
        ? en()
        : ((kr = setTimeout(Gr, 4e3)),
          (Cr = setTimeout($r, 1e3)),
          SteamClient.WebChat.GetWebChatURL().then(function (e) {
            (Or = e),
              void 0 !== Cr && (clearTimeout(Cr), (Cr = void 0)),
              e
                ? ((e = new URL(e)).searchParams.set("origin", window.origin),
                  (Or = e.href),
                  console.log("Loading chat from url: ", e.href),
                  (function t(e) {
                    console.log("Checking network... " + Ir);
                    var r = 7500;
                    0 == Ir ? (r = 500) : 1 == Ir && (r = 2e3);
                    var n = e;
                    ++Ir;
                    wr.a
                      .head(e, { timeout: r })
                      .then(function (e) {
                        void 0 === e.headers["x-buildtimestamp"] &&
                          console.log(
                            "Network check (head req) got 200, but no x-buildtimestamp, not valid? Proceeding anyway..."
                          ),
                          console.log(
                            "Network check (head req) passed after " +
                              Ir +
                              " tries..."
                          ),
                          Hr(n);
                      })
                      .catch(function (e) {
                        console.log("Network check try " + Ir + " failed..."),
                          3 <= Ir ? $r() : t(n);
                      });
                  })(e.href))
                : (zr(),
                  console.log("Empty webchat URL, we are in offline mode"),
                  Ar.SetLoadingState(sr.OfflineMode));
          }));
    }
    function zr() {
      void 0 !== Cr && (clearTimeout(Cr), (Cr = void 0)),
        void 0 !== kr && (clearTimeout(kr), (kr = void 0));
    }
    function Hr(e) {
      console.log("Loading chat from url: ", e),
        void 0 !== Cr && clearTimeout(Cr),
        (Cr = setTimeout($r, 15e3)),
        (document.getElementById(jr).src = e);
    }
    function $r() {
      console.log("Failed to load chat!"),
        zr(),
        Ar.SetLoadingState(sr.FailRetry),
        4 != Br && en();
    }
    function Gr() {
      4 != Br && Ar.loadingState != sr.Loaded && en(), (kr = void 0);
    }
    function Kr() {
      var e = document.getElementById(jr);
      e && null != e.src && (e.src = void 0),
        SteamClient.WebChat.RegisterForFriendPostMessage(Qr),
        SteamClient.WebChat.RegisterOverlayChatBrowserInfoChanged(Jr);
    }
    function qr() {
      (Ir = 0), Vr("tracked_frame_friends_chat");
    }
    function Yr() {
      Xr(!1);
    }
    function Xr(i) {
      SteamClient.WebChat.GetWebChatURL().then(function (o) {
        console.log("Checking for updates from chat from url: ", o),
          void 0 !== Cr && (clearTimeout(Cr), (Cr = void 0)),
          wr.a
            .head(o, { timeout: 1e4 })
            .then(function (e) {
              var t, r, n;
              void 0 !== e.headers["x-buildtimestamp"] &&
                ((Lr = Number(e.headers["x-buildtimestamp"])),
                console.log("Currently available build: " + Lr),
                0 != Lr &&
                  0 != Dr &&
                  ((t = Lr - Dr),
                  Ar.loadingState == sr.Loaded &&
                    (i ? 0 : 86400) < t &&
                    ((r = 604800 < t),
                    (n = Number(e.headers["x-forceuiupdate"]) || i),
                    console.log(
                      "We are out of date enough to reload if idle, bVeryOutOfDate=" +
                        (r ? "true" : "false")
                    ),
                    (e = o.match(/(https:\/\/[^\/]+)\/.*/)[1]),
                    window.frames[0].postMessage(
                      {
                        message: "UpdatedBuildAvailable",
                        bVeryOutOfDate: r,
                        bForce: n,
                        nSecondsOutOfDate: t,
                      },
                      e
                    ))));
            })
            .catch(function (e) {
              console.log("Failed trying to check available build timestamp");
            });
      });
    }
    function Jr() {
      SteamClient.WebChat.GetOverlayChatBrowserInfo()
        .then(function (e) {
          for (var t = new Map(), r = 0; r < Mr.length; ++r)
            Mr[r].browser_info &&
              0 != Mr[r].browser_info.m_unPID &&
              t.set(Mr[r].browser_info.m_unPID, !0);
          for (var n = 0, o = e; n < o.length; n++) {
            var i = o[n];
            t.delete(i.unPID);
          }
          for (r = Mr.length - 1; 0 <= r; r--)
            null != Mr[r].browser_info &&
              t.has(Mr[r].browser_info.m_unPID) &&
              (console.log(
                "Deleting error/offline dialog for: " +
                  Mr[r].browser_info.m_unPID
              ),
              Mr[r].Close(),
              (Mr[r] = void 0),
              Mr.pop());
        })
        .catch(function (e) {
          console.log("Failed to load overlay browser info:", e);
        });
    }
    function Qr(e) {
      var t,
        r = e.data;
      r &&
        r.command &&
        ("ShowPopupFriendsList" == r.command
          ? (console.log("ShowPopupFriendsList"),
            (t = { m_unPID: 0, m_nBrowserID: -1 }),
            en(
              (t =
                void 0 !== e.data.pid
                  ? { m_unPID: e.data.pid, m_nBrowserID: e.data.browserid }
                  : t)
            ))
          : "SetPersonaState" != r.command ||
            (0 != (r = r.persona_state) &&
              ((Pr = r), (Ir = 0), Vr("tracked_frame_friends_chat"))));
    }
    function Zr(e, t, r) {
      "SignInToFriends" == t && qr();
    }
    function en(e) {
      null == (e = void 0 === e ? void 0 : e) &&
        (e = { m_unPID: 0, m_nBrowserID: -1 });
      for (var t = 0; t < Mr.length; ++t)
        if (
          Mr[t].browser_info.m_nBrowserID == e.m_nBrowserID &&
          Mr[t].browser_info.m_unPID == e.m_unPID
        )
          return Mr[t].Show(), void (Nr = !0);
      var r = new vr(Ar, e);
      Mr.push(r), r.Show(), (Nr = !0);
    }
    window.addEventListener("message", function (e) {
      if ("object" == typeof e.data && null != e.data.message)
        if ("ShowFriendsErrorRetryDialog" == e.data.message)
          zr(), Kr(), Ar.SetLoadingState(sr.FailRetry), en();
        else if ("ChatJavascriptInitialized" == e.data.message) {
          Ar.SetLoadingState(sr.Loaded), zr();
          var t = Or.match(/(https:\/\/[^\/]+)\/.*/)[1];
          if (
            (window.frames[0].postMessage(
              { message: "LoaderWindowRestoreDetails", data: Rr, bVisible: Nr },
              t
            ),
            void 0 !== Pr &&
              (window.frames[0].postMessage(
                { message: "SetPersonaState", persona_state: Pr },
                t
              ),
              (Pr = void 0)),
            (Dr = void 0 !== e.data.data ? e.data.data : 0),
            null != Ur)
          )
            try {
              window.frames[0].postMessage(
                { message: "ReloadSerializedChatState", state: Ur },
                t
              ),
                (Ur = void 0);
            } catch (e) {
              console.log(
                "Failed trying to ask FriendsUI to restore chat state after reload"
              ),
                (Ur = void 0);
            }
          (xr = setInterval(Yr, 144e5)),
            (function () {
              for (var e = 0; e < Mr.length; ++e)
                Mr[e].Close(), (Mr[e] = void 0);
              Mr = [];
            })(),
            console.log("Chat loaded! " + Dr);
        } else {
          var r;
          "ChatReloadRequest" == e.data.message
            ? null != jr &&
              "" != jr &&
              ((Ir = 0), null != e.data.state && (Ur = e.data.state), Vr(jr))
            : "CheckForAndForceUpdate" == e.data.message
            ? Xr(!0)
            : "SignInRequest" == e.data.message
            ? qr()
            : "SignOutRequest" == e.data.message
            ? (zr(),
              Kr(),
              Ar.SetLoadingState(sr.SignIn),
              (Nr = e.data.bShowLoaderWindow),
              e.data.bShowLoaderWindow &&
                ((r = void 0),
                en((r = e.data.browserContext ? e.data.browserContext : r))))
            : "FriendsListRestoreDetailsChanged" == e.data.message
            ? ((r = e.data.data),
              new vr(Ar, void 0).SaveWindowPosition(r),
              (Rr = r))
            : "ErrorPopupRestoreDetailsChanged" == e.data.message
            ? (Rr = e.data.data)
            : "ErrorPopupClosed" == e.data.message && (Nr = !1);
        }
    }),
      document.addEventListener("DOMContentLoaded", function () {
        return (function () {
          return s(this, void 0, void 0, function () {
            var t, r;
            return u(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    (Ar = new cr()).Init(),
                    [4, SteamClient.WebChat.GetWebChatLanguage()]
                  );
                case 1:
                  (t = e.sent()), (e.label = 2);
                case 2:
                  return e.trys.push([2, 4, , 5]), [4, Sr(t)];
                case 3:
                  return e.sent(), [3, 5];
                case 4:
                  return (
                    e.sent(),
                    console.log("Failed to load localization!"),
                    [3, 5]
                  );
                case 5:
                  return (
                    SteamClient.WebChat.RegisterForFriendPostMessage(Qr),
                    SteamClient.WebChat.RegisterOverlayChatBrowserInfoChanged(
                      Jr
                    ),
                    Tr("Messaging.RegisterForMessages") &&
                      SteamClient.Messaging.RegisterForMessages(
                        "FriendsLoader",
                        Zr
                      ),
                    [4, SteamClient.WebChat.GetSignIntoFriendsOnStart()]
                  );
                case 6:
                  return e.sent()
                    ? [4, SteamClient.WebChat.GetCurrentUserAccountID()]
                    : (console.log("Don't sign in on start"),
                      Ar.SetLoadingState(sr.SignIn),
                      [2]);
                case 7:
                  return (
                    (r = e.sent()),
                    tt.SetCurrentLoggedInAccountID(r),
                    [4, SteamClient.WebChat.GetUIMode()]
                  );
                case 8:
                  return (Br = e.sent()), Vr("tracked_frame_friends_chat"), [2];
              }
            });
          });
        })();
      });
  },
  SntB: function (e, t, r) {
    "use strict";
    var c = r("xTJ+");
    e.exports = function (t, r) {
      r = r || {};
      var n = {},
        e = ["url", "method", "data"],
        o = ["headers", "auth", "proxy", "params"],
        i = [
          "baseURL",
          "transformRequest",
          "transformResponse",
          "paramsSerializer",
          "timeout",
          "timeoutMessage",
          "withCredentials",
          "adapter",
          "responseType",
          "xsrfCookieName",
          "xsrfHeaderName",
          "onUploadProgress",
          "onDownloadProgress",
          "decompress",
          "maxContentLength",
          "maxBodyLength",
          "maxRedirects",
          "transport",
          "httpAgent",
          "httpsAgent",
          "cancelToken",
          "socketPath",
          "responseEncoding",
        ],
        a = ["validateStatus"];
      function s(e, t) {
        return c.isPlainObject(e) && c.isPlainObject(t)
          ? c.merge(e, t)
          : c.isPlainObject(t)
          ? c.merge({}, t)
          : c.isArray(t)
          ? t.slice()
          : t;
      }
      function u(e) {
        c.isUndefined(r[e])
          ? c.isUndefined(t[e]) || (n[e] = s(void 0, t[e]))
          : (n[e] = s(t[e], r[e]));
      }
      c.forEach(e, function (e) {
        c.isUndefined(r[e]) || (n[e] = s(void 0, r[e]));
      }),
        c.forEach(o, u),
        c.forEach(i, function (e) {
          c.isUndefined(r[e])
            ? c.isUndefined(t[e]) || (n[e] = s(void 0, t[e]))
            : (n[e] = s(void 0, r[e]));
        }),
        c.forEach(a, function (e) {
          e in r ? (n[e] = s(t[e], r[e])) : e in t && (n[e] = s(void 0, t[e]));
        });
      var l = e.concat(o).concat(i).concat(a),
        a = Object.keys(t)
          .concat(Object.keys(r))
          .filter(function (e) {
            return -1 === l.indexOf(e);
          });
      return c.forEach(a, u), n;
    };
  },
  UnBK: function (e, t, r) {
    "use strict";
    var n = r("xTJ+"),
      o = r("xAGQ"),
      i = r("Lmem"),
      a = r("JEQr");
    function s(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }
    e.exports = function (t) {
      return (
        s(t),
        (t.headers = t.headers || {}),
        (t.data = o.call(t, t.data, t.headers, t.transformRequest)),
        (t.headers = n.merge(
          t.headers.common || {},
          t.headers[t.method] || {},
          t.headers
        )),
        n.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (e) {
            delete t.headers[e];
          }
        ),
        (t.adapter || a.adapter)(t).then(
          function (e) {
            return (
              s(t),
              (e.data = o.call(t, e.data, e.headers, t.transformResponse)),
              e
            );
          },
          function (e) {
            return (
              i(e) ||
                (s(t),
                e &&
                  e.response &&
                  (e.response.data = o.call(
                    t,
                    e.response.data,
                    e.response.headers,
                    t.transformResponse
                  ))),
              Promise.reject(e)
            );
          }
        )
      );
    };
  },
  XwJu: function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return "object" == typeof e && !0 === e.isAxiosError;
    };
  },
  endd: function (e, t, r) {
    "use strict";
    function n(e) {
      this.message = e;
    }
    (n.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (n.prototype.__CANCEL__ = !0),
      (e.exports = n);
  },
  eqyj: function (e, t, r) {
    "use strict";
    var s = r("xTJ+");
    e.exports = s.isStandardBrowserEnv()
      ? {
          write: function (e, t, r, n, o, i) {
            var a = [];
            a.push(e + "=" + encodeURIComponent(t)),
              s.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()),
              s.isString(n) && a.push("path=" + n),
              s.isString(o) && a.push("domain=" + o),
              !0 === i && a.push("secure"),
              (document.cookie = a.join("; "));
          },
          read: function (e) {
            e = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return e ? decodeURIComponent(e[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
  },
  g7np: function (e, t, r) {
    "use strict";
    var n = r("2SVd"),
      o = r("5oMp");
    e.exports = function (e, t) {
      return e && !n(t) ? o(e, t) : t;
    };
  },
  hIuj: function (e, t, r) {
    "use strict";
    var s = r("SgzI"),
      n = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(
      function (t, r) {
        n[t] = function (e) {
          return typeof e === t || "a" + (r < 1 ? "n " : " ") + t;
        };
      }
    );
    var u = {},
      i = s.version.split(".");
    function l(e, t) {
      for (var r = t ? t.split(".") : i, n = e.split("."), o = 0; o < 3; o++) {
        if (r[o] > n[o]) return !0;
        if (r[o] < n[o]) return !1;
      }
      return !1;
    }
    (n.transitional = function (n, o, r) {
      var i = o && l(o);
      function a(e, t) {
        return (
          "[Axios v" +
          s.version +
          "] Transitional option '" +
          e +
          "'" +
          t +
          (r ? ". " + r : "")
        );
      }
      return function (e, t, r) {
        if (!1 === n) throw new Error(a(t, " has been removed in " + o));
        return (
          i &&
            !u[t] &&
            ((u[t] = !0),
            console.warn(
              a(
                t,
                " has been deprecated since v" +
                  o +
                  " and will be removed in the near future"
              )
            )),
          !n || n(e, t, r)
        );
      };
    }),
      (e.exports = {
        isOlderVersion: l,
        assertOptions: function (e, t, r) {
          if ("object" != typeof e)
            throw new TypeError("options must be an object");
          for (var n = Object.keys(e), o = n.length; 0 < o--; ) {
            var i = n[o],
              a = t[i];
            if (a) {
              var s = e[i],
                s = void 0 === s || a(s, i, e);
              if (!0 !== s)
                throw new TypeError("option " + i + " must be " + s);
            } else if (!0 !== r) throw Error("Unknown option " + i);
          }
        },
        validators: n,
      });
  },
  hRO2: function (module, exports, __webpack_require__) {
    !function (global, Buffer) {
      var $jscomp = {
        scope: {},
        getGlobal: function (e) {
          return ("undefined" == typeof window || window !== e) &&
            void 0 !== global
            ? global
            : e;
        },
      };
      ($jscomp.global = $jscomp.getGlobal(this)),
        ($jscomp.initSymbol = function () {
          $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol),
            ($jscomp.initSymbol = function () {});
        }),
        ($jscomp.symbolCounter_ = 0),
        ($jscomp.Symbol = function (e) {
          return "jscomp_symbol_" + e + $jscomp.symbolCounter_++;
        }),
        ($jscomp.initSymbolIterator = function () {
          $jscomp.initSymbol(),
            $jscomp.global.Symbol.iterator ||
              ($jscomp.global.Symbol.iterator = $jscomp.global.Symbol(
                "iterator"
              )),
            ($jscomp.initSymbolIterator = function () {});
        }),
        ($jscomp.makeIterator = function (e) {
          $jscomp.initSymbolIterator(),
            $jscomp.initSymbol(),
            $jscomp.initSymbolIterator();
          var t = e[Symbol.iterator];
          if (t) return t.call(e);
          var r = 0;
          return {
            next: function () {
              return r < e.length ? { done: !1, value: e[r++] } : { done: !0 };
            },
          };
        }),
        ($jscomp.arrayFromIterator = function (e) {
          for (var t, r = []; !(t = e.next()).done; ) r.push(t.value);
          return r;
        }),
        ($jscomp.arrayFromIterable = function (e) {
          return e instanceof Array
            ? e
            : $jscomp.arrayFromIterator($jscomp.makeIterator(e));
        }),
        ($jscomp.inherits = function (e, t) {
          function r() {}
          for (var n in ((r.prototype = t.prototype),
          (e.prototype = new r()),
          (e.prototype.constructor = e),
          t)) {
            var o;
            Object.defineProperties
              ? (o = Object.getOwnPropertyDescriptor(t, n)) &&
                Object.defineProperty(e, n, o)
              : (e[n] = t[n]);
          }
        }),
        ($jscomp.array = $jscomp.array || {}),
        ($jscomp.iteratorFromArray = function (t, r) {
          $jscomp.initSymbolIterator(), t instanceof String && (t += "");
          var n = 0,
            o = {
              next: function () {
                if (n < t.length) {
                  var e = n++;
                  return { value: r(e, t[e]), done: !1 };
                }
                return (
                  (o.next = function () {
                    return { done: !0, value: void 0 };
                  }),
                  o.next()
                );
              },
            };
          return (
            $jscomp.initSymbol(),
            $jscomp.initSymbolIterator(),
            (o[Symbol.iterator] = function () {
              return o;
            }),
            o
          );
        }),
        ($jscomp.findInternal = function (e, t, r) {
          for (
            var n = (e = e instanceof String ? String(e) : e).length, o = 0;
            o < n;
            o++
          ) {
            var i = e[o];
            if (t.call(r, i, o, e)) return { i: o, v: i };
          }
          return { i: -1, v: void 0 };
        }),
        ($jscomp.array.from = function (e, t, r) {
          $jscomp.initSymbolIterator(),
            (t =
              null != t
                ? t
                : function (e) {
                    return e;
                  });
          var n = [];
          if (
            ($jscomp.initSymbol(),
            $jscomp.initSymbolIterator(),
            "function" ==
              typeof (e =
                "function" == typeof (o = e[Symbol.iterator]) ? o.call(e) : e)
                .next)
          )
            for (; !(o = e.next()).done; ) n.push(t.call(r, o.value));
          else
            for (var o = e.length, i = 0; i < o; i++) n.push(t.call(r, e[i]));
          return n;
        }),
        ($jscomp.array.of = function (e) {
          return $jscomp.array.from(arguments);
        }),
        ($jscomp.array.entries = function () {
          return $jscomp.iteratorFromArray(this, function (e, t) {
            return [e, t];
          });
        }),
        ($jscomp.array.installHelper_ = function (e, t) {
          !Array.prototype[e] &&
            Object.defineProperties &&
            Object.defineProperty &&
            Object.defineProperty(Array.prototype, e, {
              configurable: !0,
              enumerable: !1,
              writable: !0,
              value: t,
            });
        }),
        ($jscomp.array.entries$install = function () {
          $jscomp.array.installHelper_("entries", $jscomp.array.entries);
        }),
        ($jscomp.array.keys = function () {
          return $jscomp.iteratorFromArray(this, function (e) {
            return e;
          });
        }),
        ($jscomp.array.keys$install = function () {
          $jscomp.array.installHelper_("keys", $jscomp.array.keys);
        }),
        ($jscomp.array.values = function () {
          return $jscomp.iteratorFromArray(this, function (e, t) {
            return t;
          });
        }),
        ($jscomp.array.values$install = function () {
          $jscomp.array.installHelper_("values", $jscomp.array.values);
        }),
        ($jscomp.array.copyWithin = function (e, t, r) {
          var n = this.length;
          if (
            ((e = Number(e)),
            (t = Number(t)),
            (r = Number(null != r ? r : n)),
            e < t)
          )
            for (r = Math.min(r, n); t < r; )
              t in this ? (this[e++] = this[t++]) : (delete this[e++], t++);
          else
            for (e += (r = Math.min(r, n + t - e)) - t; t < r; )
              --r in this ? (this[--e] = this[r]) : delete this[e];
          return this;
        }),
        ($jscomp.array.copyWithin$install = function () {
          $jscomp.array.installHelper_("copyWithin", $jscomp.array.copyWithin);
        }),
        ($jscomp.array.fill = function (e, t, r) {
          var n = this.length || 0;
          for (
            t < 0 && (t = Math.max(0, n + t)),
              (null == r || n < r) && (r = n),
              (r = Number(r)) < 0 && (r = Math.max(0, n + r)),
              t = Number(t || 0);
            t < r;
            t++
          )
            this[t] = e;
          return this;
        }),
        ($jscomp.array.fill$install = function () {
          $jscomp.array.installHelper_("fill", $jscomp.array.fill);
        }),
        ($jscomp.array.find = function (e, t) {
          return $jscomp.findInternal(this, e, t).v;
        }),
        ($jscomp.array.find$install = function () {
          $jscomp.array.installHelper_("find", $jscomp.array.find);
        }),
        ($jscomp.array.findIndex = function (e, t) {
          return $jscomp.findInternal(this, e, t).i;
        }),
        ($jscomp.array.findIndex$install = function () {
          $jscomp.array.installHelper_("findIndex", $jscomp.array.findIndex);
        }),
        ($jscomp.ASSUME_NO_NATIVE_MAP = !1),
        ($jscomp.Map$isConformant = function () {
          if ($jscomp.ASSUME_NO_NATIVE_MAP) return !1;
          var e = $jscomp.global.Map;
          if (!e || !e.prototype.entries || "function" != typeof Object.seal)
            return !1;
          try {
            var t = Object.seal({ x: 4 }),
              r = new e($jscomp.makeIterator([[t, "s"]]));
            if (
              "s" != r.get(t) ||
              1 != r.size ||
              r.get({ x: 4 }) ||
              r.set({ x: 4 }, "t") != r ||
              2 != r.size
            )
              return !1;
            var n = r.entries(),
              o = n.next();
            return o.done || o.value[0] != t || "s" != o.value[1]
              ? !1
              : !(
                  (o = n.next()).done ||
                  4 != o.value[0].x ||
                  "t" != o.value[1] ||
                  !n.next().done
                );
          } catch (e) {
            return !1;
          }
        }),
        ($jscomp.Map = function (e) {
          if (
            ((this.data_ = {}),
            (this.head_ = $jscomp.Map.createHead()),
            (this.size = 0),
            e)
          ) {
            e = $jscomp.makeIterator(e);
            for (var t; !(t = e.next()).done; )
              (t = t.value), this.set(t[0], t[1]);
          }
        }),
        ($jscomp.Map.prototype.set = function (e, t) {
          var r = $jscomp.Map.maybeGetEntry(this, e);
          return (
            r.list || (r.list = this.data_[r.id] = []),
            r.entry
              ? (r.entry.value = t)
              : ((r.entry = {
                  next: this.head_,
                  previous: this.head_.previous,
                  head: this.head_,
                  key: e,
                  value: t,
                }),
                r.list.push(r.entry),
                (this.head_.previous.next = r.entry),
                (this.head_.previous = r.entry),
                this.size++),
            this
          );
        }),
        ($jscomp.Map.prototype.delete = function (e) {
          return (
            !(!(e = $jscomp.Map.maybeGetEntry(this, e)).entry || !e.list) &&
            (e.list.splice(e.index, 1),
            e.list.length || delete this.data_[e.id],
            (e.entry.previous.next = e.entry.next),
            (e.entry.next.previous = e.entry.previous),
            (e.entry.head = null),
            this.size--,
            !0)
          );
        }),
        ($jscomp.Map.prototype.clear = function () {
          (this.data_ = {}),
            (this.head_ = this.head_.previous = $jscomp.Map.createHead()),
            (this.size = 0);
        }),
        ($jscomp.Map.prototype.has = function (e) {
          return !!$jscomp.Map.maybeGetEntry(this, e).entry;
        }),
        ($jscomp.Map.prototype.get = function (e) {
          return (e = $jscomp.Map.maybeGetEntry(this, e).entry) && e.value;
        }),
        ($jscomp.Map.prototype.entries = function () {
          return $jscomp.Map.makeIterator_(this, function (e) {
            return [e.key, e.value];
          });
        }),
        ($jscomp.Map.prototype.keys = function () {
          return $jscomp.Map.makeIterator_(this, function (e) {
            return e.key;
          });
        }),
        ($jscomp.Map.prototype.values = function () {
          return $jscomp.Map.makeIterator_(this, function (e) {
            return e.value;
          });
        }),
        ($jscomp.Map.prototype.forEach = function (e, t) {
          for (var r, n = this.entries(); !(r = n.next()).done; )
            (r = r.value), e.call(t, r[1], r[0], this);
        }),
        ($jscomp.Map.maybeGetEntry = function (e, t) {
          var r = $jscomp.Map.getId(t),
            n = e.data_[r];
          if (n && Object.prototype.hasOwnProperty.call(e.data_, r))
            for (var o = 0; o < n.length; o++) {
              var i = n[o];
              if ((t != t && i.key != i.key) || t === i.key)
                return { id: r, list: n, index: o, entry: i };
            }
          return { id: r, list: n, index: -1, entry: void 0 };
        }),
        ($jscomp.Map.makeIterator_ = function (e, t) {
          var r = e.head_,
            n = {
              next: function () {
                if (r) {
                  for (; r.head != e.head_; ) r = r.previous;
                  if (r.next != r.head)
                    return (r = r.next), { done: !1, value: t(r) };
                  r = null;
                }
                return { done: !0, value: void 0 };
              },
            };
          return (
            $jscomp.initSymbol(),
            $jscomp.initSymbolIterator(),
            (n[Symbol.iterator] = function () {
              return n;
            }),
            n
          );
        }),
        ($jscomp.Map.mapIndex_ = 0),
        ($jscomp.Map.createHead = function () {
          var e = {};
          return (e.previous = e.next = e.head = e);
        }),
        ($jscomp.Map.getId = function (e) {
          if (!(e instanceof Object)) return "p_" + e;
          if (!($jscomp.Map.idKey in e))
            try {
              $jscomp.Map.defineProperty(e, $jscomp.Map.idKey, {
                value: ++$jscomp.Map.mapIndex_,
              });
            } catch (e) {}
          return $jscomp.Map.idKey in e ? e[$jscomp.Map.idKey] : "o_ " + e;
        }),
        ($jscomp.Map.defineProperty = Object.defineProperty
          ? function (e, t, r) {
              Object.defineProperty(e, t, { value: String(r) });
            }
          : function (e, t, r) {
              e[t] = String(r);
            }),
        ($jscomp.Map.Entry = function () {}),
        ($jscomp.Map$install = function () {
          $jscomp.initSymbol(),
            $jscomp.initSymbolIterator(),
            $jscomp.Map$isConformant()
              ? ($jscomp.Map = $jscomp.global.Map)
              : ($jscomp.initSymbol(),
                $jscomp.initSymbolIterator(),
                ($jscomp.Map.prototype[Symbol.iterator] =
                  $jscomp.Map.prototype.entries),
                $jscomp.initSymbol(),
                ($jscomp.Map.idKey = Symbol("map-id-key")),
                ($jscomp.Map$install = function () {}));
        }),
        ($jscomp.math = $jscomp.math || {}),
        ($jscomp.math.clz32 = function (e) {
          if (0 === (e = Number(e) >>> 0)) return 32;
          var t = 0;
          return (
            0 == (4294901760 & e) && ((e <<= 16), (t += 16)),
            0 == (4278190080 & e) && ((e <<= 8), (t += 8)),
            0 == (4026531840 & e) && ((e <<= 4), (t += 4)),
            0 == (3221225472 & e) && ((e <<= 2), (t += 2)),
            0 == (2147483648 & e) && t++,
            t
          );
        }),
        ($jscomp.math.imul = function (e, t) {
          var r = 65535 & (e = Number(e)),
            n = 65535 & (t = Number(t));
          return (
            (r * n +
              (((((e >>> 16) & 65535) * n + r * ((t >>> 16) & 65535)) << 16) >>>
                0)) |
            0
          );
        }),
        ($jscomp.math.sign = function (e) {
          return 0 === (e = Number(e)) || isNaN(e) ? e : 0 < e ? 1 : -1;
        }),
        ($jscomp.math.log10 = function (e) {
          return Math.log(e) / Math.LN10;
        }),
        ($jscomp.math.log2 = function (e) {
          return Math.log(e) / Math.LN2;
        }),
        ($jscomp.math.log1p = function (e) {
          if ((e = Number(e)) < 0.25 && -0.25 < e) {
            for (var t = e, r = 1, n = e, o = 0, i = 1; o != n; )
              n = (o = n) + ((i *= -1) * (t *= e)) / ++r;
            return n;
          }
          return Math.log(1 + e);
        }),
        ($jscomp.math.expm1 = function (e) {
          if ((e = Number(e)) < 0.25 && -0.25 < e) {
            for (var t = e, r = 1, n = e, o = 0; o != n; )
              n = (o = n) + (t *= e / ++r);
            return n;
          }
          return Math.exp(e) - 1;
        }),
        ($jscomp.math.cosh = function (e) {
          return (e = Number(e)), (Math.exp(e) + Math.exp(-e)) / 2;
        }),
        ($jscomp.math.sinh = function (e) {
          return 0 === (e = Number(e)) ? e : (Math.exp(e) - Math.exp(-e)) / 2;
        }),
        ($jscomp.math.tanh = function (e) {
          if (0 === (e = Number(e))) return e;
          var t = (1 - (t = Math.exp(-2 * Math.abs(e)))) / (1 + t);
          return e < 0 ? -t : t;
        }),
        ($jscomp.math.acosh = function (e) {
          return (e = Number(e)), Math.log(e + Math.sqrt(e * e - 1));
        }),
        ($jscomp.math.asinh = function (e) {
          if (0 === (e = Number(e))) return e;
          var t = Math.log(Math.abs(e) + Math.sqrt(e * e + 1));
          return e < 0 ? -t : t;
        }),
        ($jscomp.math.atanh = function (e) {
          return (
            (e = Number(e)),
            ($jscomp.math.log1p(e) - $jscomp.math.log1p(-e)) / 2
          );
        }),
        ($jscomp.math.hypot = function (e, t, r) {
          (e = Number(e)), (t = Number(t));
          for (
            var n, o, i = Math.max(Math.abs(e), Math.abs(t)), a = 2;
            a < arguments.length;
            a++
          )
            i = Math.max(i, Math.abs(arguments[a]));
          if (1e100 < i || i < 1e-100) {
            for (
              o = (e /= i) * e + (t /= i) * t, a = 2;
              a < arguments.length;
              a++
            )
              o += (n = Number(arguments[a]) / i) * n;
            return Math.sqrt(o) * i;
          }
          for (o = e * e + t * t, a = 2; a < arguments.length; a++)
            o += (n = Number(arguments[a])) * n;
          return Math.sqrt(o);
        }),
        ($jscomp.math.trunc = function (e) {
          if (
            ((e = Number(e)),
            isNaN(e) || 1 / 0 === e || -1 / 0 === e || 0 === e)
          )
            return e;
          var t = Math.floor(Math.abs(e));
          return e < 0 ? -t : t;
        }),
        ($jscomp.math.cbrt = function (e) {
          if (0 === e) return e;
          e = Number(e);
          var t = Math.pow(Math.abs(e), 1 / 3);
          return e < 0 ? -t : t;
        }),
        ($jscomp.number = $jscomp.number || {}),
        ($jscomp.number.isFinite = function (e) {
          return (
            "number" == typeof e && !isNaN(e) && 1 / 0 !== e && -1 / 0 !== e
          );
        }),
        ($jscomp.number.isInteger = function (e) {
          return !!$jscomp.number.isFinite(e) && e === Math.floor(e);
        }),
        ($jscomp.number.isNaN = function (e) {
          return "number" == typeof e && isNaN(e);
        }),
        ($jscomp.number.isSafeInteger = function (e) {
          return (
            $jscomp.number.isInteger(e) &&
            Math.abs(e) <= $jscomp.number.MAX_SAFE_INTEGER
          );
        }),
        ($jscomp.number.EPSILON = Math.pow(2, -52)),
        ($jscomp.number.MAX_SAFE_INTEGER = 9007199254740991),
        ($jscomp.number.MIN_SAFE_INTEGER = -9007199254740991),
        ($jscomp.object = $jscomp.object || {}),
        ($jscomp.object.assign = function (e, t) {
          for (var r = 1; r < arguments.length; r++) {
            var n = arguments[r];
            if (n)
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }),
        ($jscomp.object.is = function (e, t) {
          return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
        }),
        ($jscomp.ASSUME_NO_NATIVE_SET = !1),
        ($jscomp.Set$isConformant = function () {
          if ($jscomp.ASSUME_NO_NATIVE_SET) return !1;
          var e = $jscomp.global.Set;
          if (!e || !e.prototype.entries || "function" != typeof Object.seal)
            return !1;
          try {
            var t = Object.seal({ x: 4 }),
              r = new e($jscomp.makeIterator([t]));
            if (
              !r.has(t) ||
              1 != r.size ||
              r.add(t) != r ||
              1 != r.size ||
              r.add({ x: 4 }) != r ||
              2 != r.size
            )
              return !1;
            var n = r.entries(),
              o = n.next();
            return o.done || o.value[0] != t || o.value[1] != t
              ? !1
              : !(o = n.next()).done &&
                  o.value[0] != t &&
                  4 == o.value[0].x &&
                  o.value[1] == o.value[0] &&
                  n.next().done;
          } catch (e) {
            return !1;
          }
        }),
        ($jscomp.Set = function (e) {
          if (((this.map_ = new $jscomp.Map()), e)) {
            e = $jscomp.makeIterator(e);
            for (var t; !(t = e.next()).done; ) this.add(t.value);
          }
          this.size = this.map_.size;
        }),
        ($jscomp.Set.prototype.add = function (e) {
          return this.map_.set(e, e), (this.size = this.map_.size), this;
        }),
        ($jscomp.Set.prototype.delete = function (e) {
          return (e = this.map_.delete(e)), (this.size = this.map_.size), e;
        }),
        ($jscomp.Set.prototype.clear = function () {
          this.map_.clear(), (this.size = 0);
        }),
        ($jscomp.Set.prototype.has = function (e) {
          return this.map_.has(e);
        }),
        ($jscomp.Set.prototype.entries = function () {
          return this.map_.entries();
        }),
        ($jscomp.Set.prototype.values = function () {
          return this.map_.values();
        }),
        ($jscomp.Set.prototype.forEach = function (t, r) {
          var n = this;
          this.map_.forEach(function (e) {
            return t.call(r, e, e, n);
          });
        }),
        ($jscomp.Set$install = function () {
          $jscomp.Map$install(),
            $jscomp.Set$isConformant()
              ? ($jscomp.Set = $jscomp.global.Set)
              : ($jscomp.initSymbol(),
                $jscomp.initSymbolIterator(),
                ($jscomp.Set.prototype[Symbol.iterator] =
                  $jscomp.Set.prototype.values),
                ($jscomp.Set$install = function () {}));
        }),
        ($jscomp.string = $jscomp.string || {}),
        ($jscomp.checkStringArgs = function (e, t, r) {
          if (null == e)
            throw new TypeError(
              "The 'this' value for String.prototype." +
                r +
                " must not be null or undefined"
            );
          if (t instanceof RegExp)
            throw new TypeError(
              "First argument to String.prototype." +
                r +
                " must not be a regular expression"
            );
          return e + "";
        }),
        ($jscomp.string.fromCodePoint = function (e) {
          for (var t = "", r = 0; r < arguments.length; r++) {
            var n = Number(arguments[r]);
            if (n < 0 || 1114111 < n || n !== Math.floor(n))
              throw new RangeError("invalid_code_point " + n);
            n <= 65535
              ? (t += String.fromCharCode(n))
              : ((n -= 65536),
                (t += String.fromCharCode(((n >>> 10) & 1023) | 55296)),
                (t += String.fromCharCode((1023 & n) | 56320)));
          }
          return t;
        }),
        ($jscomp.string.repeat = function (e) {
          var t = $jscomp.checkStringArgs(this, null, "repeat");
          if (e < 0 || 1342177279 < e)
            throw new RangeError("Invalid count value");
          e |= 0;
          for (var r = ""; e; ) 1 & e && (r += t), (e >>>= 1) && (t += t);
          return r;
        }),
        ($jscomp.string.repeat$install = function () {
          String.prototype.repeat ||
            (String.prototype.repeat = $jscomp.string.repeat);
        }),
        ($jscomp.string.codePointAt = function (e) {
          var t = $jscomp.checkStringArgs(this, null, "codePointAt"),
            r = t.length;
          if (0 <= (e = Number(e) || 0) && e < r) {
            var n = t.charCodeAt((e |= 0));
            return n < 55296 || 56319 < n || e + 1 === r
              ? n
              : (e = t.charCodeAt(e + 1)) < 56320 || 57343 < e
              ? n
              : 1024 * (n - 55296) + e + 9216;
          }
        }),
        ($jscomp.string.codePointAt$install = function () {
          String.prototype.codePointAt ||
            (String.prototype.codePointAt = $jscomp.string.codePointAt);
        }),
        ($jscomp.string.includes = function (e, t) {
          return (
            -1 !==
            $jscomp.checkStringArgs(this, e, "includes").indexOf(e, t || 0)
          );
        }),
        ($jscomp.string.includes$install = function () {
          String.prototype.includes ||
            (String.prototype.includes = $jscomp.string.includes);
        }),
        ($jscomp.string.startsWith = function (e, t) {
          for (
            var r = $jscomp.checkStringArgs(this, e, "startsWith"),
              n = r.length,
              o = (e += "").length,
              i = Math.max(0, Math.min(0 | t, r.length)),
              a = 0;
            a < o && i < n;

          )
            if (r[i++] != e[a++]) return !1;
          return o <= a;
        }),
        ($jscomp.string.startsWith$install = function () {
          String.prototype.startsWith ||
            (String.prototype.startsWith = $jscomp.string.startsWith);
        }),
        ($jscomp.string.endsWith = function (e, t) {
          var r = $jscomp.checkStringArgs(this, e, "endsWith");
          (e += ""), void 0 === t && (t = r.length);
          for (
            var n = Math.max(0, Math.min(0 | t, r.length)), o = e.length;
            0 < o && 0 < n;

          )
            if (r[--n] != e[--o]) return !1;
          return o <= 0;
        }),
        ($jscomp.string.endsWith$install = function () {
          String.prototype.endsWith ||
            (String.prototype.endsWith = $jscomp.string.endsWith);
        });
      var COMPILED = !0,
        goog = goog || {};
      (goog.global = this),
        (goog.isDef = function (e) {
          return void 0 !== e;
        }),
        (goog.exportPath_ = function (e, t, r) {
          (e = e.split(".")),
            (r = r || goog.global),
            e[0] in r || !r.execScript || r.execScript("var " + e[0]);
          for (var n; e.length && (n = e.shift()); )
            !e.length && goog.isDef(t) ? (r[n] = t) : (r = r[n] || (r[n] = {}));
        }),
        (goog.define = function (e, t) {
          COMPILED ||
            (goog.global.CLOSURE_UNCOMPILED_DEFINES &&
            Object.prototype.hasOwnProperty.call(
              goog.global.CLOSURE_UNCOMPILED_DEFINES,
              e
            )
              ? (t = goog.global.CLOSURE_UNCOMPILED_DEFINES[e])
              : goog.global.CLOSURE_DEFINES &&
                Object.prototype.hasOwnProperty.call(
                  goog.global.CLOSURE_DEFINES,
                  e
                ) &&
                (t = goog.global.CLOSURE_DEFINES[e])),
            goog.exportPath_(e, t);
        }),
        (goog.DEBUG = !0),
        (goog.LOCALE = "en"),
        (goog.TRUSTED_SITE = !0),
        (goog.STRICT_MODE_COMPATIBLE = !1),
        (goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG),
        (goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1),
        (goog.provide = function (e) {
          if (!COMPILED && goog.isProvided_(e))
            throw Error('Namespace "' + e + '" already declared.');
          goog.constructNamespace_(e);
        }),
        (goog.constructNamespace_ = function (e, t) {
          if (!COMPILED) {
            delete goog.implicitNamespaces_[e];
            for (
              var r = e;
              (r = r.substring(0, r.lastIndexOf("."))) &&
              !goog.getObjectByName(r);

            )
              goog.implicitNamespaces_[r] = !0;
          }
          goog.exportPath_(e, t);
        }),
        (goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/),
        (goog.module = function (e) {
          if (!goog.isString(e) || !e || -1 == e.search(goog.VALID_MODULE_RE_))
            throw Error("Invalid module identifier");
          if (!goog.isInModuleLoader_())
            throw Error("Module " + e + " has been loaded incorrectly.");
          if (goog.moduleLoaderState_.moduleName)
            throw Error("goog.module may only be called once per module.");
          if (((goog.moduleLoaderState_.moduleName = e), !COMPILED)) {
            if (goog.isProvided_(e))
              throw Error('Namespace "' + e + '" already declared.');
            delete goog.implicitNamespaces_[e];
          }
        }),
        (goog.module.get = function (e) {
          return goog.module.getInternal_(e);
        }),
        (goog.module.getInternal_ = function (e) {
          if (!COMPILED)
            return goog.isProvided_(e)
              ? e in goog.loadedModules_
                ? goog.loadedModules_[e]
                : goog.getObjectByName(e)
              : null;
        }),
        (goog.moduleLoaderState_ = null),
        (goog.isInModuleLoader_ = function () {
          return null != goog.moduleLoaderState_;
        }),
        (goog.module.declareLegacyNamespace = function () {
          if (!COMPILED && !goog.isInModuleLoader_())
            throw Error(
              "goog.module.declareLegacyNamespace must be called from within a goog.module"
            );
          if (!COMPILED && !goog.moduleLoaderState_.moduleName)
            throw Error(
              "goog.module must be called prior to goog.module.declareLegacyNamespace."
            );
          goog.moduleLoaderState_.declareLegacyNamespace = !0;
        }),
        (goog.setTestOnly = function (e) {
          if (goog.DISALLOW_TEST_ONLY_CODE)
            throw (
              ((e = e || ""),
              Error(
                "Importing test-only code into non-debug environment" +
                  (e ? ": " + e : ".")
              ))
            );
        }),
        (goog.forwardDeclare = function (e) {}),
        COMPILED ||
          ((goog.isProvided_ = function (e) {
            return (
              e in goog.loadedModules_ ||
              (!goog.implicitNamespaces_[e] &&
                goog.isDefAndNotNull(goog.getObjectByName(e)))
            );
          }),
          (goog.implicitNamespaces_ = { "goog.module": !0 })),
        (goog.getObjectByName = function (e, t) {
          for (
            var r, n = e.split("."), o = t || goog.global;
            (r = n.shift());

          ) {
            if (!goog.isDefAndNotNull(o[r])) return null;
            o = o[r];
          }
          return o;
        }),
        (goog.globalize = function (e, t) {
          var r,
            n = t || goog.global;
          for (r in e) n[r] = e[r];
        }),
        (goog.addDependency = function (e, t, r, n) {
          if (goog.DEPENDENCIES_ENABLED) {
            var o;
            e = e.replace(/\\/g, "/");
            for (var i = goog.dependencies_, a = 0; (o = t[a]); a++)
              (i.nameToPath[o] = e), (i.pathIsModule[e] = !!n);
            for (n = 0; (t = r[n]); n++)
              e in i.requires || (i.requires[e] = {}), (i.requires[e][t] = !0);
          }
        }),
        (goog.ENABLE_DEBUG_LOADER = !0),
        (goog.logToConsole_ = function (e) {
          goog.global.console && goog.global.console.error(e);
        }),
        (goog.require = function (e) {
          if (!COMPILED) {
            if (
              (goog.ENABLE_DEBUG_LOADER &&
                goog.IS_OLD_IE_ &&
                goog.maybeProcessDeferredDep_(e),
              goog.isProvided_(e))
            )
              return goog.isInModuleLoader_()
                ? goog.module.getInternal_(e)
                : null;
            if (goog.ENABLE_DEBUG_LOADER) {
              var t = goog.getPathFromDeps_(e);
              if (t) return goog.writeScripts_(t), null;
            }
            throw (
              (goog.logToConsole_((e = "goog.require could not find: " + e)),
              Error(e))
            );
          }
        }),
        (goog.basePath = ""),
        (goog.nullFunction = function () {}),
        (goog.abstractMethod = function () {
          throw Error("unimplemented abstract method");
        }),
        (goog.addSingletonGetter = function (e) {
          e.getInstance = function () {
            return (
              e.instance_ ||
              (goog.DEBUG &&
                (goog.instantiatedSingletons_[
                  goog.instantiatedSingletons_.length
                ] = e),
              (e.instance_ = new e()))
            );
          };
        }),
        (goog.instantiatedSingletons_ = []),
        (goog.LOAD_MODULE_USING_EVAL = !0),
        (goog.SEAL_MODULE_EXPORTS = goog.DEBUG),
        (goog.loadedModules_ = {}),
        (goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER),
        goog.DEPENDENCIES_ENABLED &&
          ((goog.dependencies_ = {
            pathIsModule: {},
            nameToPath: {},
            requires: {},
            visited: {},
            written: {},
            deferred: {},
          }),
          (goog.inHtmlDocument_ = function () {
            var e = goog.global.document;
            return null != e && "write" in e;
          }),
          (goog.findBasePath_ = function () {
            if (goog.isDef(goog.global.CLOSURE_BASE_PATH))
              goog.basePath = goog.global.CLOSURE_BASE_PATH;
            else if (goog.inHtmlDocument_())
              for (
                var e = goog.global.document.getElementsByTagName("SCRIPT"),
                  t = e.length - 1;
                0 <= t;
                --t
              ) {
                var r = e[t].src,
                  n = -1 == (n = r.lastIndexOf("?")) ? r.length : n;
                if ("base.js" == r.substr(n - 7, 7)) {
                  goog.basePath = r.substr(0, n - 7);
                  break;
                }
              }
          }),
          (goog.importScript_ = function (e, t) {
            (goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_)(e, t) &&
              (goog.dependencies_.written[e] = !0);
          }),
          (goog.IS_OLD_IE_ = !(
            goog.global.atob ||
            !goog.global.document ||
            !goog.global.document.all
          )),
          (goog.importModule_ = function (e) {
            goog.importScript_(
              "",
              'goog.retrieveAndExecModule_("' + e + '");'
            ) && (goog.dependencies_.written[e] = !0);
          }),
          (goog.queuedModules_ = []),
          (goog.wrapModule_ = function (e, t) {
            return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON)
              ? "goog.loadModule(" +
                  goog.global.JSON.stringify(
                    t + "\n//# sourceURL=" + e + "\n"
                  ) +
                  ");"
              : 'goog.loadModule(function(exports) {"use strict";' +
                  t +
                  "\n;return exports});\n//# sourceURL=" +
                  e +
                  "\n";
          }),
          (goog.loadQueuedModules_ = function () {
            var e = goog.queuedModules_.length;
            if (0 < e) {
              var t = goog.queuedModules_;
              goog.queuedModules_ = [];
              for (var r = 0; r < e; r++) goog.maybeProcessDeferredPath_(t[r]);
            }
          }),
          (goog.maybeProcessDeferredDep_ = function (e) {
            goog.isDeferredModule_(e) &&
              goog.allDepsAreAvailable_(e) &&
              ((e = goog.getPathFromDeps_(e)),
              goog.maybeProcessDeferredPath_(goog.basePath + e));
          }),
          (goog.isDeferredModule_ = function (e) {
            return (
              !(
                !(e = goog.getPathFromDeps_(e)) ||
                !goog.dependencies_.pathIsModule[e]
              ) && goog.basePath + e in goog.dependencies_.deferred
            );
          }),
          (goog.allDepsAreAvailable_ = function (e) {
            if (
              (e = goog.getPathFromDeps_(e)) &&
              e in goog.dependencies_.requires
            )
              for (var t in goog.dependencies_.requires[e])
                if (!goog.isProvided_(t) && !goog.isDeferredModule_(t))
                  return !1;
            return !0;
          }),
          (goog.maybeProcessDeferredPath_ = function (e) {
            var t;
            e in goog.dependencies_.deferred &&
              ((t = goog.dependencies_.deferred[e]),
              delete goog.dependencies_.deferred[e],
              goog.globalEval(t));
          }),
          (goog.loadModuleFromUrl = function (e) {
            goog.retrieveAndExecModule_(e);
          }),
          (goog.loadModule = function (e) {
            var t,
              r = goog.moduleLoaderState_;
            try {
              if (
                ((goog.moduleLoaderState_ = {
                  moduleName: void 0,
                  declareLegacyNamespace: !1,
                }),
                goog.isFunction(e))
              )
                t = e.call(goog.global, {});
              else {
                if (!goog.isString(e)) throw Error("Invalid module definition");
                t = goog.loadModuleFromSource_.call(goog.global, e);
              }
              var n = goog.moduleLoaderState_.moduleName;
              if (!goog.isString(n) || !n)
                throw Error('Invalid module name "' + n + '"');
              goog.moduleLoaderState_.declareLegacyNamespace
                ? goog.constructNamespace_(n, t)
                : goog.SEAL_MODULE_EXPORTS && Object.seal && Object.seal(t),
                (goog.loadedModules_[n] = t);
            } finally {
              goog.moduleLoaderState_ = r;
            }
          }),
          (goog.loadModuleFromSource_ = function (a) {
            return eval(a), {};
          }),
          (goog.writeScriptSrcNode_ = function (e) {
            goog.global.document.write(
              '<script type="text/javascript" src="' + e + '"></script>'
            );
          }),
          (goog.appendScriptSrcNode_ = function (e) {
            var t = goog.global.document,
              r = t.createElement("script");
            (r.type = "text/javascript"),
              (r.src = e),
              (r.defer = !1),
              (r.async = !1),
              t.head.appendChild(r);
          }),
          (goog.writeScriptTag_ = function (e, t) {
            if (goog.inHtmlDocument_()) {
              var r = goog.global.document;
              if (
                !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING &&
                "complete" == r.readyState
              ) {
                if (/\bdeps.js$/.test(e)) return !1;
                throw Error('Cannot write "' + e + '" after document load');
              }
              var n = goog.IS_OLD_IE_;
              return (
                void 0 === t
                  ? n
                    ? ((n =
                        " onreadystatechange='goog.onScriptLoad_(this, " +
                        ++goog.lastNonModuleScriptIndex_ +
                        ")' "),
                      r.write(
                        '<script type="text/javascript" src="' +
                          e +
                          '"' +
                          n +
                          "></script>"
                      ))
                    : goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING
                    ? goog.appendScriptSrcNode_(e)
                    : goog.writeScriptSrcNode_(e)
                  : r.write(
                      '<script type="text/javascript">' + t + "</script>"
                    ),
                !0
              );
            }
            return !1;
          }),
          (goog.lastNonModuleScriptIndex_ = 0),
          (goog.onScriptLoad_ = function (e, t) {
            return (
              "complete" == e.readyState &&
                goog.lastNonModuleScriptIndex_ == t &&
                goog.loadQueuedModules_(),
              !0
            );
          }),
          (goog.writeScripts_ = function (e) {
            var n = [],
              o = {},
              i = goog.dependencies_;
            for (
              !(function e(t) {
                if (!((t in i.written) || (t in i.visited))) {
                  if (((i.visited[t] = !0), (t in i.requires)))
                    for (var r in i.requires[t])
                      if (!goog.isProvided_(r)) {
                        if (!(r in i.nameToPath))
                          throw Error("Undefined nameToPath for " + r);
                        e(i.nameToPath[r]);
                      }
                  (t in o) || ((o[t] = !0), n.push(t));
                }
              })(e),
                e = 0;
              e < n.length;
              e++
            ) {
              var t = n[e];
              goog.dependencies_.written[t] = !0;
            }
            var r = goog.moduleLoaderState_;
            for (goog.moduleLoaderState_ = null, e = 0; e < n.length; e++) {
              if (!(t = n[e]))
                throw (
                  ((goog.moduleLoaderState_ = r),
                  Error("Undefined script input"))
                );
              i.pathIsModule[t]
                ? goog.importModule_(goog.basePath + t)
                : goog.importScript_(goog.basePath + t);
            }
            goog.moduleLoaderState_ = r;
          }),
          (goog.getPathFromDeps_ = function (e) {
            return e in goog.dependencies_.nameToPath
              ? goog.dependencies_.nameToPath[e]
              : null;
          }),
          goog.findBasePath_(),
          goog.global.CLOSURE_NO_DEPS ||
            goog.importScript_(goog.basePath + "deps.js")),
        (goog.normalizePath_ = function (e) {
          e = e.split("/");
          for (var t = 0; t < e.length; )
            "." == e[t]
              ? e.splice(t, 1)
              : t && ".." == e[t] && e[t - 1] && ".." != e[t - 1]
              ? e.splice(--t, 2)
              : t++;
          return e.join("/");
        }),
        (goog.loadFileSync_ = function (e) {
          if (goog.global.CLOSURE_LOAD_FILE_SYNC)
            return goog.global.CLOSURE_LOAD_FILE_SYNC(e);
          var t = new goog.global.XMLHttpRequest();
          return t.open("get", e, !1), t.send(), t.responseText;
        }),
        (goog.retrieveAndExecModule_ = function (e) {
          if (!COMPILED) {
            var t = e;
            e = goog.normalizePath_(e);
            var r = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_,
              n = goog.loadFileSync_(e);
            if (null == n) throw Error("load of " + e + "failed");
            (n = goog.wrapModule_(e, n)),
              goog.IS_OLD_IE_
                ? ((goog.dependencies_.deferred[t] = n),
                  goog.queuedModules_.push(t))
                : r(e, n);
          }
        }),
        (goog.typeOf = function (e) {
          var t = typeof e;
          if ("object" == t) {
            if (!e) return "null";
            if (e instanceof Array) return "array";
            if (e instanceof Object) return t;
            var r = Object.prototype.toString.call(e);
            if ("[object Window]" == r) return "object";
            if (
              "[object Array]" == r ||
              ("number" == typeof e.length &&
                void 0 !== e.splice &&
                void 0 !== e.propertyIsEnumerable &&
                !e.propertyIsEnumerable("splice"))
            )
              return "array";
            if (
              "[object Function]" == r ||
              (void 0 !== e.call &&
                void 0 !== e.propertyIsEnumerable &&
                !e.propertyIsEnumerable("call"))
            )
              return "function";
          } else if ("function" == t && void 0 === e.call) return "object";
          return t;
        }),
        (goog.isNull = function (e) {
          return null === e;
        }),
        (goog.isDefAndNotNull = function (e) {
          return null != e;
        }),
        (goog.isArray = function (e) {
          return "array" == goog.typeOf(e);
        }),
        (goog.isArrayLike = function (e) {
          var t = goog.typeOf(e);
          return "array" == t || ("object" == t && "number" == typeof e.length);
        }),
        (goog.isDateLike = function (e) {
          return goog.isObject(e) && "function" == typeof e.getFullYear;
        }),
        (goog.isString = function (e) {
          return "string" == typeof e;
        }),
        (goog.isBoolean = function (e) {
          return "boolean" == typeof e;
        }),
        (goog.isNumber = function (e) {
          return "number" == typeof e;
        }),
        (goog.isFunction = function (e) {
          return "function" == goog.typeOf(e);
        }),
        (goog.isObject = function (e) {
          var t = typeof e;
          return ("object" == t && null != e) || "function" == t;
        }),
        (goog.getUid = function (e) {
          return (
            e[goog.UID_PROPERTY_] ||
            (e[goog.UID_PROPERTY_] = ++goog.uidCounter_)
          );
        }),
        (goog.hasUid = function (e) {
          return !!e[goog.UID_PROPERTY_];
        }),
        (goog.removeUid = function (e) {
          null !== e &&
            "removeAttribute" in e &&
            e.removeAttribute(goog.UID_PROPERTY_);
          try {
            delete e[goog.UID_PROPERTY_];
          } catch (e) {}
        }),
        (goog.UID_PROPERTY_ = "closure_uid_" + ((1e9 * Math.random()) >>> 0)),
        (goog.uidCounter_ = 0),
        (goog.getHashCode = goog.getUid),
        (goog.removeHashCode = goog.removeUid),
        (goog.cloneObject = function (e) {
          if ("object" != (r = goog.typeOf(e)) && "array" != r) return e;
          if (e.clone) return e.clone();
          var t,
            r = "array" == r ? [] : {};
          for (t in e) r[t] = goog.cloneObject(e[t]);
          return r;
        }),
        (goog.bindNative_ = function (e, t, r) {
          return e.call.apply(e.bind, arguments);
        }),
        (goog.bindJs_ = function (t, r, e) {
          if (!t) throw Error();
          if (2 < arguments.length) {
            var n = Array.prototype.slice.call(arguments, 2);
            return function () {
              var e = Array.prototype.slice.call(arguments);
              return Array.prototype.unshift.apply(e, n), t.apply(r, e);
            };
          }
          return function () {
            return t.apply(r, arguments);
          };
        }),
        (goog.bind = function (e, t, r) {
          return (
            Function.prototype.bind &&
            -1 != Function.prototype.bind.toString().indexOf("native code")
              ? (goog.bind = goog.bindNative_)
              : (goog.bind = goog.bindJs_),
            goog.bind.apply(null, arguments)
          );
        }),
        (goog.partial = function (t, e) {
          var r = Array.prototype.slice.call(arguments, 1);
          return function () {
            var e = r.slice();
            return e.push.apply(e, arguments), t.apply(this, e);
          };
        }),
        (goog.mixin = function (e, t) {
          for (var r in t) e[r] = t[r];
        }),
        (goog.now =
          (goog.TRUSTED_SITE && Date.now) ||
          function () {
            return +new Date();
          }),
        (goog.globalEval = function (e) {
          if (goog.global.execScript) goog.global.execScript(e, "JavaScript");
          else {
            if (!goog.global.eval) throw Error("goog.globalEval not available");
            if (null == goog.evalWorksForGlobals_)
              if (
                (goog.global.eval("var _evalTest_ = 1;"),
                void 0 !== goog.global._evalTest_)
              ) {
                try {
                  delete goog.global._evalTest_;
                } catch (e) {}
                goog.evalWorksForGlobals_ = !0;
              } else goog.evalWorksForGlobals_ = !1;
            var t, r;
            goog.evalWorksForGlobals_
              ? goog.global.eval(e)
              : (((r = (t = goog.global.document).createElement(
                  "SCRIPT"
                )).type = "text/javascript"),
                (r.defer = !1),
                r.appendChild(t.createTextNode(e)),
                t.body.appendChild(r),
                t.body.removeChild(r));
          }
        }),
        (goog.evalWorksForGlobals_ = null),
        (goog.getCssName = function (e, t) {
          function n(e) {
            return goog.cssNameMapping_[e] || e;
          }
          var r = function (e) {
              e = e.split("-");
              for (var t = [], r = 0; r < e.length; r++) t.push(n(e[r]));
              return t.join("-");
            },
            r = goog.cssNameMapping_
              ? "BY_WHOLE" == goog.cssNameMappingStyle_
                ? n
                : r
              : function (e) {
                  return e;
                };
          return t ? e + "-" + r(t) : r(e);
        }),
        (goog.setCssNameMapping = function (e, t) {
          (goog.cssNameMapping_ = e), (goog.cssNameMappingStyle_ = t);
        }),
        !COMPILED &&
          goog.global.CLOSURE_CSS_NAME_MAPPING &&
          (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING),
        (goog.getMsg = function (e, r) {
          return (e = r
            ? e.replace(/\{\$([^}]+)}/g, function (e, t) {
                return null != r && t in r ? r[t] : e;
              })
            : e);
        }),
        (goog.getMsgWithFallback = function (e, t) {
          return e;
        }),
        (goog.exportSymbol = function (e, t, r) {
          goog.exportPath_(e, t, r);
        }),
        (goog.exportProperty = function (e, t, r) {
          e[t] = r;
        }),
        (goog.inherits = function (e, i) {
          function t() {}
          (t.prototype = i.prototype),
            (e.superClass_ = i.prototype),
            (e.prototype = new t()),
            ((e.prototype.constructor = e).base = function (e, t, r) {
              for (
                var n = Array(arguments.length - 2), o = 2;
                o < arguments.length;
                o++
              )
                n[o - 2] = arguments[o];
              return i.prototype[t].apply(e, n);
            });
        }),
        (goog.base = function (e, t, r) {
          var n = arguments.callee.caller;
          if (goog.STRICT_MODE_COMPATIBLE || (goog.DEBUG && !n))
            throw Error(
              "arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C"
            );
          if (n.superClass_) {
            for (
              var o = Array(arguments.length - 1), i = 1;
              i < arguments.length;
              i++
            )
              o[i - 1] = arguments[i];
            return n.superClass_.constructor.apply(e, o);
          }
          for (
            o = Array(arguments.length - 2), i = 2;
            i < arguments.length;
            i++
          )
            o[i - 2] = arguments[i];
          for (
            var i = !1, a = e.constructor;
            a;
            a = a.superClass_ && a.superClass_.constructor
          )
            if (a.prototype[t] === n) i = !0;
            else if (i) return a.prototype[t].apply(e, o);
          if (e[t] === n) return e.constructor.prototype[t].apply(e, o);
          throw Error(
            "goog.base called from a method of one name to a method of a different name"
          );
        }),
        (goog.scope = function (e) {
          e.call(goog.global);
        }),
        COMPILED || (goog.global.COMPILED = COMPILED),
        (goog.defineClass = function (e, t) {
          var r = t.constructor,
            n = t.statics;
          return (
            (r && r != Object.prototype.constructor) ||
              (r = function () {
                throw Error(
                  "cannot instantiate an interface (no constructor defined)."
                );
              }),
            (r = goog.defineClass.createSealingConstructor_(r, e)),
            e && goog.inherits(r, e),
            delete t.constructor,
            delete t.statics,
            goog.defineClass.applyProperties_(r.prototype, t),
            null != n &&
              (n instanceof Function
                ? n(r)
                : goog.defineClass.applyProperties_(r, n)),
            r
          );
        }),
        (goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG),
        (goog.defineClass.createSealingConstructor_ = function (t, e) {
          if (
            goog.defineClass.SEAL_CLASS_INSTANCES &&
            Object.seal instanceof Function
          ) {
            if (
              e &&
              e.prototype &&
              e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
            )
              return t;
            function r() {
              var e = t.apply(this, arguments) || this;
              return (
                (e[goog.UID_PROPERTY_] = e[goog.UID_PROPERTY_]),
                this.constructor === r && Object.seal(e),
                e
              );
            }
            return r;
          }
          return t;
        }),
        (goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
          " "
        )),
        (goog.defineClass.applyProperties_ = function (e, t) {
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          for (
            var n = 0;
            n < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;
            n++
          )
            (r = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[n]),
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        }),
        (goog.tagUnsealableClass = function (e) {
          !COMPILED &&
            goog.defineClass.SEAL_CLASS_INSTANCES &&
            (e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0);
        }),
        (goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ =
          "goog_defineClass_legacy_unsealable"),
        (goog.dom = {}),
        (goog.dom.NodeType = {
          ELEMENT: 1,
          ATTRIBUTE: 2,
          TEXT: 3,
          CDATA_SECTION: 4,
          ENTITY_REFERENCE: 5,
          ENTITY: 6,
          PROCESSING_INSTRUCTION: 7,
          COMMENT: 8,
          DOCUMENT: 9,
          DOCUMENT_TYPE: 10,
          DOCUMENT_FRAGMENT: 11,
          NOTATION: 12,
        }),
        (goog.debug = {}),
        (goog.debug.Error = function (e) {
          var t;
          Error.captureStackTrace
            ? Error.captureStackTrace(this, goog.debug.Error)
            : (t = Error().stack) && (this.stack = t),
            e && (this.message = String(e)),
            (this.reportErrorToServer = !0);
        }),
        goog.inherits(goog.debug.Error, Error),
        (goog.debug.Error.prototype.name = "CustomError"),
        (goog.string = {}),
        (goog.string.DETECT_DOUBLE_ESCAPING = !1),
        (goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1),
        (goog.string.Unicode = { NBSP: " " }),
        (goog.string.startsWith = function (e, t) {
          return 0 == e.lastIndexOf(t, 0);
        }),
        (goog.string.endsWith = function (e, t) {
          var r = e.length - t.length;
          return 0 <= r && e.indexOf(t, r) == r;
        }),
        (goog.string.caseInsensitiveStartsWith = function (e, t) {
          return (
            0 == goog.string.caseInsensitiveCompare(t, e.substr(0, t.length))
          );
        }),
        (goog.string.caseInsensitiveEndsWith = function (e, t) {
          return (
            0 ==
            goog.string.caseInsensitiveCompare(
              t,
              e.substr(e.length - t.length, t.length)
            )
          );
        }),
        (goog.string.caseInsensitiveEquals = function (e, t) {
          return e.toLowerCase() == t.toLowerCase();
        }),
        (goog.string.subs = function (e, t) {
          for (
            var r = e.split("%s"),
              n = "",
              o = Array.prototype.slice.call(arguments, 1);
            o.length && 1 < r.length;

          )
            n += r.shift() + o.shift();
          return n + r.join("%s");
        }),
        (goog.string.collapseWhitespace = function (e) {
          return e.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
        }),
        (goog.string.isEmptyOrWhitespace = function (e) {
          return /^[\s\xa0]*$/.test(e);
        }),
        (goog.string.isEmptyString = function (e) {
          return 0 == e.length;
        }),
        (goog.string.isEmpty = goog.string.isEmptyOrWhitespace),
        (goog.string.isEmptyOrWhitespaceSafe = function (e) {
          return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(e));
        }),
        (goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe),
        (goog.string.isBreakingWhitespace = function (e) {
          return !/[^\t\n\r ]/.test(e);
        }),
        (goog.string.isAlpha = function (e) {
          return !/[^a-zA-Z]/.test(e);
        }),
        (goog.string.isNumeric = function (e) {
          return !/[^0-9]/.test(e);
        }),
        (goog.string.isAlphaNumeric = function (e) {
          return !/[^a-zA-Z0-9]/.test(e);
        }),
        (goog.string.isSpace = function (e) {
          return " " == e;
        }),
        (goog.string.isUnicodeChar = function (e) {
          return (
            (1 == e.length && " " <= e && e <= "~") || ("" <= e && e <= "�")
          );
        }),
        (goog.string.stripNewlines = function (e) {
          return e.replace(/(\r\n|\r|\n)+/g, " ");
        }),
        (goog.string.canonicalizeNewlines = function (e) {
          return e.replace(/(\r\n|\r|\n)/g, "\n");
        }),
        (goog.string.normalizeWhitespace = function (e) {
          return e.replace(/\xa0|\s/g, " ");
        }),
        (goog.string.normalizeSpaces = function (e) {
          return e.replace(/\xa0|[ \t]+/g, " ");
        }),
        (goog.string.collapseBreakingSpaces = function (e) {
          return e
            .replace(/[\t\r\n ]+/g, " ")
            .replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
        }),
        (goog.string.trim =
          goog.TRUSTED_SITE && String.prototype.trim
            ? function (e) {
                return e.trim();
              }
            : function (e) {
                return e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
              }),
        (goog.string.trimLeft = function (e) {
          return e.replace(/^[\s\xa0]+/, "");
        }),
        (goog.string.trimRight = function (e) {
          return e.replace(/[\s\xa0]+$/, "");
        }),
        (goog.string.caseInsensitiveCompare = function (e, t) {
          (e = String(e).toLowerCase()), (t = String(t).toLowerCase());
          return e < t ? -1 : e == t ? 0 : 1;
        }),
        (goog.string.numberAwareCompare_ = function (e, t, r) {
          if (e == t) return 0;
          if (!e) return -1;
          if (!t) return 1;
          for (
            var n = e.toLowerCase().match(r),
              o = t.toLowerCase().match(r),
              i = Math.min(n.length, o.length),
              a = 0;
            a < i;
            a++
          ) {
            r = n[a];
            var s = o[a];
            if (r != s)
              return (
                (e = parseInt(r, 10)),
                !isNaN(e) && ((t = parseInt(s, 10)), !isNaN(t) && e - t)
                  ? e - t
                  : r < s
                  ? -1
                  : 1
              );
          }
          return n.length != o.length ? n.length - o.length : e < t ? -1 : 1;
        }),
        (goog.string.intAwareCompare = function (e, t) {
          return goog.string.numberAwareCompare_(e, t, /\d+|\D+/g);
        }),
        (goog.string.floatAwareCompare = function (e, t) {
          return goog.string.numberAwareCompare_(e, t, /\d+|\.\d+|\D+/g);
        }),
        (goog.string.numerateCompare = goog.string.floatAwareCompare),
        (goog.string.urlEncode = function (e) {
          return encodeURIComponent(String(e));
        }),
        (goog.string.urlDecode = function (e) {
          return decodeURIComponent(e.replace(/\+/g, " "));
        }),
        (goog.string.newLineToBr = function (e, t) {
          return e.replace(/(\r\n|\r|\n)/g, t ? "<br />" : "<br>");
        }),
        (goog.string.htmlEscape = function (e, t) {
          if (t)
            (e = e
              .replace(goog.string.AMP_RE_, "&amp;")
              .replace(goog.string.LT_RE_, "&lt;")
              .replace(goog.string.GT_RE_, "&gt;")
              .replace(goog.string.QUOT_RE_, "&quot;")
              .replace(goog.string.SINGLE_QUOTE_RE_, "&#39;")
              .replace(goog.string.NULL_RE_, "&#0;")),
              goog.string.DETECT_DOUBLE_ESCAPING &&
                (e = e.replace(goog.string.E_RE_, "&#101;"));
          else {
            if (!goog.string.ALL_RE_.test(e)) return e;
            -1 !=
              (e =
                -1 !=
                (e =
                  -1 !=
                  (e =
                    -1 !=
                    (e =
                      -1 !=
                      (e =
                        -1 != e.indexOf("&")
                          ? e.replace(goog.string.AMP_RE_, "&amp;")
                          : e).indexOf("<")
                        ? e.replace(goog.string.LT_RE_, "&lt;")
                        : e).indexOf(">")
                      ? e.replace(goog.string.GT_RE_, "&gt;")
                      : e).indexOf('"')
                    ? e.replace(goog.string.QUOT_RE_, "&quot;")
                    : e).indexOf("'")
                  ? e.replace(goog.string.SINGLE_QUOTE_RE_, "&#39;")
                  : e).indexOf("\0") &&
              (e = e.replace(goog.string.NULL_RE_, "&#0;")),
              goog.string.DETECT_DOUBLE_ESCAPING &&
                -1 != e.indexOf("e") &&
                (e = e.replace(goog.string.E_RE_, "&#101;"));
          }
          return e;
        }),
        (goog.string.AMP_RE_ = /&/g),
        (goog.string.LT_RE_ = /</g),
        (goog.string.GT_RE_ = />/g),
        (goog.string.QUOT_RE_ = /"/g),
        (goog.string.SINGLE_QUOTE_RE_ = /'/g),
        (goog.string.NULL_RE_ = /\x00/g),
        (goog.string.E_RE_ = /e/g),
        (goog.string.ALL_RE_ = goog.string.DETECT_DOUBLE_ESCAPING
          ? /[\x00&<>"'e]/
          : /[\x00&<>"']/),
        (goog.string.unescapeEntities = function (e) {
          return goog.string.contains(e, "&")
            ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING &&
              "document" in goog.global
              ? goog.string.unescapeEntitiesUsingDom_(e)
              : goog.string.unescapePureXmlEntities_(e)
            : e;
        }),
        (goog.string.unescapeEntitiesWithDocument = function (e, t) {
          return goog.string.contains(e, "&")
            ? goog.string.unescapeEntitiesUsingDom_(e, t)
            : e;
        }),
        (goog.string.unescapeEntitiesUsingDom_ = function (e, t) {
          var n = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' },
            o = (t || goog.global.document).createElement("div");
          return e.replace(goog.string.HTML_ENTITY_PATTERN_, function (e, t) {
            var r = n[e];
            return (
              r ||
              ("#" == t.charAt(0) &&
                ((t = Number("0" + t.substr(1))),
                isNaN(t) || (r = String.fromCharCode(t))),
              r ||
                ((o.innerHTML = e + " "),
                (r = o.firstChild.nodeValue.slice(0, -1))),
              (n[e] = r))
            );
          });
        }),
        (goog.string.unescapePureXmlEntities_ = function (e) {
          return e.replace(/&([^;]+);/g, function (e, t) {
            switch (t) {
              case "amp":
                return "&";
              case "lt":
                return "<";
              case "gt":
                return ">";
              case "quot":
                return '"';
              default:
                if ("#" == t.charAt(0)) {
                  var r = Number("0" + t.substr(1));
                  if (!isNaN(r)) return String.fromCharCode(r);
                }
                return e;
            }
          });
        }),
        (goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g),
        (goog.string.whitespaceEscape = function (e, t) {
          return goog.string.newLineToBr(e.replace(/  /g, " &#160;"), t);
        }),
        (goog.string.preserveSpaces = function (e) {
          return e.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
        }),
        (goog.string.stripQuotes = function (e, t) {
          for (var r = t.length, n = 0; n < r; n++) {
            var o = 1 == r ? t : t.charAt(n);
            if (e.charAt(0) == o && e.charAt(e.length - 1) == o)
              return e.substring(1, e.length - 1);
          }
          return e;
        }),
        (goog.string.truncate = function (e, t, r) {
          return (
            (e = r ? goog.string.unescapeEntities(e) : e).length > t &&
              (e = e.substring(0, t - 3) + "..."),
            (e = r ? goog.string.htmlEscape(e) : e)
          );
        }),
        (goog.string.truncateMiddle = function (e, t, r, n) {
          var o;
          return (
            r && (e = goog.string.unescapeEntities(e)),
            n && e.length > t
              ? ((o = e.length - (n = t < n ? t : n)),
                (e = e.substring(0, t - n) + "..." + e.substring(o)))
              : e.length > t &&
                ((n = Math.floor(t / 2)),
                (o = e.length - n),
                (e = e.substring(0, n + (t % 2)) + "..." + e.substring(o))),
            (e = r ? goog.string.htmlEscape(e) : e)
          );
        }),
        (goog.string.specialEscapeChars_ = {
          "\0": "\\0",
          "\b": "\\b",
          "\f": "\\f",
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t",
          "\v": "\\x0B",
          '"': '\\"',
          "\\": "\\\\",
          "<": "<",
        }),
        (goog.string.jsEscapeCache_ = { "'": "\\'" }),
        (goog.string.quote = function (e) {
          e = String(e);
          for (var t = ['"'], r = 0; r < e.length; r++) {
            var n = e.charAt(r),
              o = n.charCodeAt(0);
            t[r + 1] =
              goog.string.specialEscapeChars_[n] ||
              (31 < o && o < 127 ? n : goog.string.escapeChar(n));
          }
          return t.push('"'), t.join("");
        }),
        (goog.string.escapeString = function (e) {
          for (var t = [], r = 0; r < e.length; r++)
            t[r] = goog.string.escapeChar(e.charAt(r));
          return t.join("");
        }),
        (goog.string.escapeChar = function (e) {
          if (e in goog.string.jsEscapeCache_)
            return goog.string.jsEscapeCache_[e];
          if (e in goog.string.specialEscapeChars_)
            return (goog.string.jsEscapeCache_[e] =
              goog.string.specialEscapeChars_[e]);
          var t,
            r = e.charCodeAt(0);
          return (
            31 < r && r < 127
              ? (t = e)
              : (r < 256
                  ? ((t = "\\x"), (r < 16 || 256 < r) && (t += "0"))
                  : ((t = "\\u"), r < 4096 && (t += "0")),
                (t += r.toString(16).toUpperCase())),
            (goog.string.jsEscapeCache_[e] = t)
          );
        }),
        (goog.string.contains = function (e, t) {
          return -1 != e.indexOf(t);
        }),
        (goog.string.caseInsensitiveContains = function (e, t) {
          return goog.string.contains(e.toLowerCase(), t.toLowerCase());
        }),
        (goog.string.countOf = function (e, t) {
          return e && t ? e.split(t).length - 1 : 0;
        }),
        (goog.string.removeAt = function (e, t, r) {
          var n = e;
          return (n =
            0 <= t && t < e.length && 0 < r
              ? e.substr(0, t) + e.substr(t + r, e.length - t - r)
              : n);
        }),
        (goog.string.remove = function (e, t) {
          t = new RegExp(goog.string.regExpEscape(t), "");
          return e.replace(t, "");
        }),
        (goog.string.removeAll = function (e, t) {
          t = new RegExp(goog.string.regExpEscape(t), "g");
          return e.replace(t, "");
        }),
        (goog.string.regExpEscape = function (e) {
          return String(e)
            .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
            .replace(/\x08/g, "\\x08");
        }),
        (goog.string.repeat = String.prototype.repeat
          ? function (e, t) {
              return e.repeat(t);
            }
          : function (e, t) {
              return Array(t + 1).join(e);
            }),
        (goog.string.padNumber = function (e, t, r) {
          return (
            -1 ==
              (r = (e = goog.isDef(r) ? e.toFixed(r) : String(e)).indexOf(
                "."
              )) && (r = e.length),
            goog.string.repeat("0", Math.max(0, t - r)) + e
          );
        }),
        (goog.string.makeSafe = function (e) {
          return null == e ? "" : String(e);
        }),
        (goog.string.buildString = function (e) {
          return Array.prototype.join.call(arguments, "");
        }),
        (goog.string.getRandomString = function () {
          return (
            Math.floor(2147483648 * Math.random()).toString(36) +
            Math.abs(
              Math.floor(2147483648 * Math.random()) ^ goog.now()
            ).toString(36)
          );
        }),
        (goog.string.compareVersions = function (e, t) {
          for (
            var r = 0,
              n = goog.string.trim(String(e)).split("."),
              o = goog.string.trim(String(t)).split("."),
              i = Math.max(n.length, o.length),
              a = 0;
            0 == r && a < i;
            a++
          ) {
            var s = n[a] || "",
              u = o[a] || "",
              l = RegExp("(\\d*)(\\D*)", "g"),
              c = RegExp("(\\d*)(\\D*)", "g");
            do {
              var p = l.exec(s) || ["", "", ""],
                f = c.exec(u) || ["", "", ""];
              if (0 == p[0].length && 0 == f[0].length) break;
              var r = 0 == p[1].length ? 0 : parseInt(p[1], 10),
                g = 0 == f[1].length ? 0 : parseInt(f[1], 10),
                r =
                  goog.string.compareElements_(r, g) ||
                  goog.string.compareElements_(
                    0 == p[2].length,
                    0 == f[2].length
                  ) ||
                  goog.string.compareElements_(p[2], f[2]);
            } while (0 == r);
          }
          return r;
        }),
        (goog.string.compareElements_ = function (e, t) {
          return e < t ? -1 : t < e ? 1 : 0;
        }),
        (goog.string.hashCode = function (e) {
          for (var t = 0, r = 0; r < e.length; ++r)
            t = (31 * t + e.charCodeAt(r)) >>> 0;
          return t;
        }),
        (goog.string.uniqueStringCounter_ = (2147483648 * Math.random()) | 0),
        (goog.string.createUniqueString = function () {
          return "goog_" + goog.string.uniqueStringCounter_++;
        }),
        (goog.string.toNumber = function (e) {
          var t = Number(e);
          return 0 == t && goog.string.isEmptyOrWhitespace(e) ? NaN : t;
        }),
        (goog.string.isLowerCamelCase = function (e) {
          return /^[a-z]+([A-Z][a-z]*)*$/.test(e);
        }),
        (goog.string.isUpperCamelCase = function (e) {
          return /^([A-Z][a-z]*)+$/.test(e);
        }),
        (goog.string.toCamelCase = function (e) {
          return String(e).replace(/\-([a-z])/g, function (e, t) {
            return t.toUpperCase();
          });
        }),
        (goog.string.toSelectorCase = function (e) {
          return String(e)
            .replace(/([A-Z])/g, "-$1")
            .toLowerCase();
        }),
        (goog.string.toTitleCase = function (e, t) {
          t = goog.isString(t) ? goog.string.regExpEscape(t) : "\\s";
          return e.replace(
            new RegExp("(^" + (t ? "|[" + t + "]+" : "") + ")([a-z])", "g"),
            function (e, t, r) {
              return t + r.toUpperCase();
            }
          );
        }),
        (goog.string.capitalize = function (e) {
          return (
            String(e.charAt(0)).toUpperCase() +
            String(e.substr(1)).toLowerCase()
          );
        }),
        (goog.string.parseInt = function (e) {
          return (
            isFinite(e) && (e = String(e)),
            goog.isString(e)
              ? /^\s*-?0x/i.test(e)
                ? parseInt(e, 16)
                : parseInt(e, 10)
              : NaN
          );
        }),
        (goog.string.splitLimit = function (e, t, r) {
          e = e.split(t);
          for (var n = []; 0 < r && e.length; ) n.push(e.shift()), r--;
          return e.length && n.push(e.join(t)), n;
        }),
        (goog.string.editDistance = function (e, t) {
          var r = [],
            n = [];
          if (e == t) return 0;
          if (!e.length || !t.length) return Math.max(e.length, t.length);
          for (var o = 0; o < t.length + 1; o++) r[o] = o;
          for (o = 0; o < e.length; o++) {
            n[0] = o + 1;
            for (var i = 0; i < t.length; i++)
              n[i + 1] = Math.min(
                n[i] + 1,
                r[i + 1] + 1,
                r[i] + Number(e[o] != t[i])
              );
            for (i = 0; i < r.length; i++) r[i] = n[i];
          }
          return n[t.length];
        }),
        (goog.asserts = {}),
        (goog.asserts.ENABLE_ASSERTS = goog.DEBUG),
        (goog.asserts.AssertionError = function (e, t) {
          t.unshift(e),
            goog.debug.Error.call(this, goog.string.subs.apply(null, t)),
            t.shift(),
            (this.messagePattern = e);
        }),
        goog.inherits(goog.asserts.AssertionError, goog.debug.Error),
        (goog.asserts.AssertionError.prototype.name = "AssertionError"),
        (goog.asserts.DEFAULT_ERROR_HANDLER = function (e) {
          throw e;
        }),
        (goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER),
        (goog.asserts.doAssertFailure_ = function (e, t, r, n) {
          var o,
            i = "Assertion failed";
          r ? ((i = i + ": " + r), (o = n)) : e && ((i += ": " + e), (o = t)),
            (e = new goog.asserts.AssertionError("" + i, o || [])),
            goog.asserts.errorHandler_(e);
        }),
        (goog.asserts.setErrorHandler = function (e) {
          goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = e);
        }),
        (goog.asserts.assert = function (e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              !e &&
              goog.asserts.doAssertFailure_(
                "",
                null,
                t,
                Array.prototype.slice.call(arguments, 2)
              ),
            e
          );
        }),
        (goog.asserts.fail = function (e, t) {
          goog.asserts.ENABLE_ASSERTS &&
            goog.asserts.errorHandler_(
              new goog.asserts.AssertionError(
                "Failure" + (e ? ": " + e : ""),
                Array.prototype.slice.call(arguments, 1)
              )
            );
        }),
        (goog.asserts.assertNumber = function (e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              !goog.isNumber(e) &&
              goog.asserts.doAssertFailure_(
                "Expected number but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2)
              ),
            e
          );
        }),
        (goog.asserts.assertString = function (e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              !goog.isString(e) &&
              goog.asserts.doAssertFailure_(
                "Expected string but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2)
              ),
            e
          );
        }),
        (goog.asserts.assertFunction = function (e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              !goog.isFunction(e) &&
              goog.asserts.doAssertFailure_(
                "Expected function but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2)
              ),
            e
          );
        }),
        (goog.asserts.assertObject = function (e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              !goog.isObject(e) &&
              goog.asserts.doAssertFailure_(
                "Expected object but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2)
              ),
            e
          );
        }),
        (goog.asserts.assertArray = function (e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              !goog.isArray(e) &&
              goog.asserts.doAssertFailure_(
                "Expected array but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2)
              ),
            e
          );
        }),
        (goog.asserts.assertBoolean = function (e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              !goog.isBoolean(e) &&
              goog.asserts.doAssertFailure_(
                "Expected boolean but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2)
              ),
            e
          );
        }),
        (goog.asserts.assertElement = function (e, t, r) {
          return (
            !goog.asserts.ENABLE_ASSERTS ||
              (goog.isObject(e) && e.nodeType == goog.dom.NodeType.ELEMENT) ||
              goog.asserts.doAssertFailure_(
                "Expected Element but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2)
              ),
            e
          );
        }),
        (goog.asserts.assertInstanceof = function (e, t, r, n) {
          return (
            !goog.asserts.ENABLE_ASSERTS ||
              e instanceof t ||
              goog.asserts.doAssertFailure_(
                "Expected instanceof %s but got %s.",
                [goog.asserts.getType_(t), goog.asserts.getType_(e)],
                r,
                Array.prototype.slice.call(arguments, 3)
              ),
            e
          );
        }),
        (goog.asserts.assertObjectPrototypeIsIntact = function () {
          for (var e in Object.prototype)
            goog.asserts.fail(
              e + " should not be enumerable in Object.prototype."
            );
        }),
        (goog.asserts.getType_ = function (e) {
          return e instanceof Function
            ? e.displayName || e.name || "unknown type name"
            : e instanceof Object
            ? e.constructor.displayName ||
              e.constructor.name ||
              Object.prototype.toString.call(e)
            : null === e
            ? "null"
            : typeof e;
        });
      var jspb = {
          Map: function (e, t) {
            (this.arr_ = e),
              (this.valueCtor_ = t),
              (this.map_ = {}),
              (this.arrClean = !0),
              0 < this.arr_.length && this.loadFromArray_();
          },
        },
        RKa,
        SKa;
      (jspb.Map.prototype.loadFromArray_ = function () {
        for (var e = 0; e < this.arr_.length; e++) {
          var t = this.arr_[e],
            r = t[0];
          this.map_[r.toString()] = new jspb.Map.Entry_(r, t[1]);
        }
        this.arrClean = !0;
      }),
        (jspb.Map.prototype.toArray = function () {
          if (this.arrClean) {
            if (this.valueCtor_) {
              var e,
                t,
                r = this.map_;
              for (e in r)
                !Object.prototype.hasOwnProperty.call(r, e) ||
                  ((t = r[e].valueWrapper) && t.toArray());
            }
          } else {
            for (
              this.arr_.length = 0, (r = this.stringKeys_()).sort(), e = 0;
              e < r.length;
              e++
            ) {
              var n = this.map_[r[e]];
              (t = n.valueWrapper) && t.toArray(),
                this.arr_.push([n.key, n.value]);
            }
            this.arrClean = !0;
          }
          return this.arr_;
        }),
        (jspb.Map.prototype.toObject = function (e, t) {
          for (var r = this.toArray(), n = [], o = 0; o < r.length; o++) {
            var i = this.map_[r[o][0].toString()];
            this.wrapEntry_(i);
            var a = i.valueWrapper;
            a
              ? (goog.asserts.assert(t), n.push([i.key, t(e, a)]))
              : n.push([i.key, i.value]);
          }
          return n;
        }),
        (jspb.Map.fromObject = function (e, t, r) {
          t = new jspb.Map([], t);
          for (var n = 0; n < e.length; n++) {
            var o = e[n][0],
              i = r(e[n][1]);
            t.set(o, i);
          }
          return t;
        }),
        (jspb.Map.ArrayIteratorIterable_ = function (e) {
          (this.idx_ = 0), (this.arr_ = e);
        }),
        (jspb.Map.ArrayIteratorIterable_.prototype.next = function () {
          return this.idx_ < this.arr_.length
            ? { done: !1, value: this.arr_[this.idx_++] }
            : { done: !0, value: void 0 };
        }),
        $jscomp.initSymbol(),
        "undefined" != typeof Symbol &&
          ($jscomp.initSymbol(),
          $jscomp.initSymbolIterator(),
          (jspb.Map.ArrayIteratorIterable_.prototype[
            Symbol.iterator
          ] = function () {
            return this;
          })),
        (jspb.Map.prototype.getLength = function () {
          return this.stringKeys_().length;
        }),
        (jspb.Map.prototype.clear = function () {
          (this.map_ = {}), (this.arrClean = !1);
        }),
        (jspb.Map.prototype.del = function (e) {
          e = e.toString();
          var t = this.map_.hasOwnProperty(e);
          return delete this.map_[e], (this.arrClean = !1), t;
        }),
        (jspb.Map.prototype.getEntryList = function () {
          var e = [],
            t = this.stringKeys_();
          t.sort();
          for (var r = 0; r < t.length; r++) {
            var n = this.map_[t[r]];
            e.push([n.key, n.value]);
          }
          return e;
        }),
        (jspb.Map.prototype.entries = function () {
          var e = [],
            t = this.stringKeys_();
          t.sort();
          for (var r = 0; r < t.length; r++) {
            var n = this.map_[t[r]];
            e.push([n.key, this.wrapEntry_(n)]);
          }
          return new jspb.Map.ArrayIteratorIterable_(e);
        }),
        (jspb.Map.prototype.keys = function () {
          var e = [],
            t = this.stringKeys_();
          t.sort();
          for (var r = 0; r < t.length; r++) e.push(this.map_[t[r]].key);
          return new jspb.Map.ArrayIteratorIterable_(e);
        }),
        (jspb.Map.prototype.values = function () {
          var e = [],
            t = this.stringKeys_();
          t.sort();
          for (var r = 0; r < t.length; r++)
            e.push(this.wrapEntry_(this.map_[t[r]]));
          return new jspb.Map.ArrayIteratorIterable_(e);
        }),
        (jspb.Map.prototype.forEach = function (e, t) {
          var r = this.stringKeys_();
          r.sort();
          for (var n = 0; n < r.length; n++) {
            var o = this.map_[r[n]];
            e.call(t, this.wrapEntry_(o), o.key, this);
          }
        }),
        (jspb.Map.prototype.set = function (e, t) {
          var r = new jspb.Map.Entry_(e);
          return (
            this.valueCtor_
              ? ((r.valueWrapper = t), (r.value = t.toArray()))
              : (r.value = t),
            (this.map_[e.toString()] = r),
            (this.arrClean = !1),
            this
          );
        }),
        (jspb.Map.prototype.wrapEntry_ = function (e) {
          return this.valueCtor_
            ? (e.valueWrapper ||
                (e.valueWrapper = new this.valueCtor_(e.value)),
              e.valueWrapper)
            : e.value;
        }),
        (jspb.Map.prototype.get = function (e) {
          if ((e = this.map_[e.toString()])) return this.wrapEntry_(e);
        }),
        (jspb.Map.prototype.has = function (e) {
          return e.toString() in this.map_;
        }),
        (jspb.Map.prototype.serializeBinary = function (e, t, r, n, o) {
          var i = this.stringKeys_();
          i.sort();
          for (var a = 0; a < i.length; a++) {
            var s = this.map_[i[a]];
            t.beginSubMessage(e),
              r.call(t, 1, s.key),
              this.valueCtor_
                ? n.call(t, 2, this.wrapEntry_(s), o)
                : n.call(t, 2, s.value),
              t.endSubMessage();
          }
        }),
        (jspb.Map.deserializeBinary = function (e, t, r, n, o, i) {
          for (var a = void 0; t.nextField() && !t.isEndGroup(); ) {
            var s = t.getFieldNumber();
            1 == s
              ? (i = r.call(t))
              : 2 == s &&
                (e.valueCtor_
                  ? (goog.asserts.assert(o),
                    (a = new e.valueCtor_()),
                    n.call(t, a, o))
                  : (a = n.call(t)));
          }
          goog.asserts.assert(null != i),
            goog.asserts.assert(null != a),
            e.set(i, a);
        }),
        (jspb.Map.prototype.stringKeys_ = function () {
          var e,
            t = this.map_,
            r = [];
          for (e in t) Object.prototype.hasOwnProperty.call(t, e) && r.push(e);
          return r;
        }),
        (jspb.Map.Entry_ = function (e, t) {
          (this.key = e), (this.value = t), (this.valueWrapper = void 0);
        }),
        (goog.array = {}),
        (goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE),
        (goog.array.ASSUME_NATIVE_FUNCTIONS = !1),
        (goog.array.peek = function (e) {
          return e[e.length - 1];
        }),
        (goog.array.last = goog.array.peek),
        (goog.array.indexOf =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf)
            ? function (e, t, r) {
                return (
                  goog.asserts.assert(null != e.length),
                  Array.prototype.indexOf.call(e, t, r)
                );
              }
            : function (e, t, r) {
                if (
                  ((r = null == r ? 0 : r < 0 ? Math.max(0, e.length + r) : r),
                  goog.isString(e))
                )
                  return goog.isString(t) && 1 == t.length
                    ? e.indexOf(t, r)
                    : -1;
                for (; r < e.length; r++) if (r in e && e[r] === t) return r;
                return -1;
              }),
        (goog.array.lastIndexOf =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf)
            ? function (e, t, r) {
                return (
                  goog.asserts.assert(null != e.length),
                  Array.prototype.lastIndexOf.call(
                    e,
                    t,
                    null == r ? e.length - 1 : r
                  )
                );
              }
            : function (e, t, r) {
                if (
                  ((r = null == r ? e.length - 1 : r) < 0 &&
                    (r = Math.max(0, e.length + r)),
                  goog.isString(e))
                )
                  return goog.isString(t) && 1 == t.length
                    ? e.lastIndexOf(t, r)
                    : -1;
                for (; 0 <= r; r--) if (r in e && e[r] === t) return r;
                return -1;
              }),
        (goog.array.forEach =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach)
            ? function (e, t, r) {
                goog.asserts.assert(null != e.length),
                  Array.prototype.forEach.call(e, t, r);
              }
            : function (e, t, r) {
                for (
                  var n = e.length,
                    o = goog.isString(e) ? e.split("") : e,
                    i = 0;
                  i < n;
                  i++
                )
                  i in o && t.call(r, o[i], i, e);
              }),
        (goog.array.forEachRight = function (e, t, r) {
          for (
            var n = e.length, o = goog.isString(e) ? e.split("") : e, n = n - 1;
            0 <= n;
            --n
          )
            n in o && t.call(r, o[n], n, e);
        }),
        (goog.array.filter =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter)
            ? function (e, t, r) {
                return (
                  goog.asserts.assert(null != e.length),
                  Array.prototype.filter.call(e, t, r)
                );
              }
            : function (e, t, r) {
                for (
                  var n,
                    o = e.length,
                    i = [],
                    a = 0,
                    s = goog.isString(e) ? e.split("") : e,
                    u = 0;
                  u < o;
                  u++
                )
                  u in s && ((n = s[u]), t.call(r, n, u, e) && (i[a++] = n));
                return i;
              }),
        (goog.array.map =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map)
            ? function (e, t, r) {
                return (
                  goog.asserts.assert(null != e.length),
                  Array.prototype.map.call(e, t, r)
                );
              }
            : function (e, t, r) {
                for (
                  var n = e.length,
                    o = Array(n),
                    i = goog.isString(e) ? e.split("") : e,
                    a = 0;
                  a < n;
                  a++
                )
                  a in i && (o[a] = t.call(r, i[a], a, e));
                return o;
              }),
        (goog.array.reduce =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce)
            ? function (e, t, r, n) {
                return (
                  goog.asserts.assert(null != e.length),
                  n && (t = goog.bind(t, n)),
                  Array.prototype.reduce.call(e, t, r)
                );
              }
            : function (r, n, e, o) {
                var i = e;
                return (
                  goog.array.forEach(r, function (e, t) {
                    i = n.call(o, i, e, t, r);
                  }),
                  i
                );
              }),
        (goog.array.reduceRight =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight)
            ? function (e, t, r, n) {
                return (
                  goog.asserts.assert(null != e.length),
                  goog.asserts.assert(null != t),
                  n && (t = goog.bind(t, n)),
                  Array.prototype.reduceRight.call(e, t, r)
                );
              }
            : function (r, n, e, o) {
                var i = e;
                return (
                  goog.array.forEachRight(r, function (e, t) {
                    i = n.call(o, i, e, t, r);
                  }),
                  i
                );
              }),
        (goog.array.some =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some)
            ? function (e, t, r) {
                return (
                  goog.asserts.assert(null != e.length),
                  Array.prototype.some.call(e, t, r)
                );
              }
            : function (e, t, r) {
                for (
                  var n = e.length,
                    o = goog.isString(e) ? e.split("") : e,
                    i = 0;
                  i < n;
                  i++
                )
                  if (i in o && t.call(r, o[i], i, e)) return !0;
                return !1;
              }),
        (goog.array.every =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every)
            ? function (e, t, r) {
                return (
                  goog.asserts.assert(null != e.length),
                  Array.prototype.every.call(e, t, r)
                );
              }
            : function (e, t, r) {
                for (
                  var n = e.length,
                    o = goog.isString(e) ? e.split("") : e,
                    i = 0;
                  i < n;
                  i++
                )
                  if (i in o && !t.call(r, o[i], i, e)) return !1;
                return !0;
              }),
        (goog.array.count = function (e, n, o) {
          var i = 0;
          return (
            goog.array.forEach(
              e,
              function (e, t, r) {
                n.call(o, e, t, r) && ++i;
              },
              o
            ),
            i
          );
        }),
        (goog.array.find = function (e, t, r) {
          return (t = goog.array.findIndex(e, t, r)) < 0
            ? null
            : goog.isString(e)
            ? e.charAt(t)
            : e[t];
        }),
        (goog.array.findIndex = function (e, t, r) {
          for (
            var n = e.length, o = goog.isString(e) ? e.split("") : e, i = 0;
            i < n;
            i++
          )
            if (i in o && t.call(r, o[i], i, e)) return i;
          return -1;
        }),
        (goog.array.findRight = function (e, t, r) {
          return (t = goog.array.findIndexRight(e, t, r)) < 0
            ? null
            : goog.isString(e)
            ? e.charAt(t)
            : e[t];
        }),
        (goog.array.findIndexRight = function (e, t, r) {
          for (
            var n = e.length, o = goog.isString(e) ? e.split("") : e, n = n - 1;
            0 <= n;
            n--
          )
            if (n in o && t.call(r, o[n], n, e)) return n;
          return -1;
        }),
        (goog.array.contains = function (e, t) {
          return 0 <= goog.array.indexOf(e, t);
        }),
        (goog.array.isEmpty = function (e) {
          return 0 == e.length;
        }),
        (goog.array.clear = function (e) {
          if (!goog.isArray(e))
            for (var t = e.length - 1; 0 <= t; t--) delete e[t];
          e.length = 0;
        }),
        (goog.array.insert = function (e, t) {
          goog.array.contains(e, t) || e.push(t);
        }),
        (goog.array.insertAt = function (e, t, r) {
          goog.array.splice(e, r, 0, t);
        }),
        (goog.array.insertArrayAt = function (e, t, r) {
          goog.partial(goog.array.splice, e, r, 0).apply(null, t);
        }),
        (goog.array.insertBefore = function (e, t, r) {
          var n;
          2 == arguments.length || (n = goog.array.indexOf(e, r)) < 0
            ? e.push(t)
            : goog.array.insertAt(e, t, n);
        }),
        (goog.array.remove = function (e, t) {
          var r = goog.array.indexOf(e, t);
          return (t = 0 <= r) && goog.array.removeAt(e, r), t;
        }),
        (goog.array.removeAt = function (e, t) {
          return (
            goog.asserts.assert(null != e.length),
            1 == Array.prototype.splice.call(e, t, 1).length
          );
        }),
        (goog.array.removeIf = function (e, t, r) {
          return (
            0 <= (t = goog.array.findIndex(e, t, r)) &&
            (goog.array.removeAt(e, t), !0)
          );
        }),
        (goog.array.removeAllIf = function (r, n, o) {
          var i = 0;
          return (
            goog.array.forEachRight(r, function (e, t) {
              n.call(o, e, t, r) && goog.array.removeAt(r, t) && i++;
            }),
            i
          );
        }),
        (goog.array.concat = function (e) {
          return Array.prototype.concat.apply(Array.prototype, arguments);
        }),
        (goog.array.join = function (e) {
          return Array.prototype.concat.apply(Array.prototype, arguments);
        }),
        (goog.array.toArray = function (e) {
          var t = e.length;
          if (0 < t) {
            for (var r = Array(t), n = 0; n < t; n++) r[n] = e[n];
            return r;
          }
          return [];
        }),
        (goog.array.clone = goog.array.toArray),
        (goog.array.extend = function (e, t) {
          for (var r = 1; r < arguments.length; r++) {
            var n = arguments[r];
            if (goog.isArrayLike(n)) {
              var o = e.length || 0,
                i = n.length || 0;
              e.length = o + i;
              for (var a = 0; a < i; a++) e[o + a] = n[a];
            } else e.push(n);
          }
        }),
        (goog.array.splice = function (e, t, r, n) {
          return (
            goog.asserts.assert(null != e.length),
            Array.prototype.splice.apply(e, goog.array.slice(arguments, 1))
          );
        }),
        (goog.array.slice = function (e, t, r) {
          return (
            goog.asserts.assert(null != e.length),
            arguments.length <= 2
              ? Array.prototype.slice.call(e, t)
              : Array.prototype.slice.call(e, t, r)
          );
        }),
        (goog.array.removeDuplicates = function (e, t, r) {
          t = t || e;
          var n = function (e) {
            return goog.isObject(e)
              ? "o" + goog.getUid(e)
              : (typeof e).charAt(0) + e;
          };
          r = r || n;
          for (var n = {}, o = 0, i = 0; i < e.length; ) {
            var a = e[i++],
              s = r(a);
            Object.prototype.hasOwnProperty.call(n, s) ||
              ((n[s] = !0), (t[o++] = a));
          }
          t.length = o;
        }),
        (goog.array.binarySearch = function (e, t, r) {
          return goog.array.binarySearch_(
            e,
            r || goog.array.defaultCompare,
            !1,
            t
          );
        }),
        (goog.array.binarySelect = function (e, t, r) {
          return goog.array.binarySearch_(e, t, !0, void 0, r);
        }),
        (goog.array.binarySearch_ = function (e, t, r, n, o) {
          for (var i, a = 0, s = e.length; a < s; ) {
            var u = (a + s) >> 1,
              l = r ? t.call(o, e[u], u, e) : t(n, e[u]);
            0 < l ? (a = 1 + u) : ((s = u), (i = !l));
          }
          return i ? a : ~a;
        }),
        (goog.array.sort = function (e, t) {
          e.sort(t || goog.array.defaultCompare);
        }),
        (goog.array.stableSort = function (e, t) {
          for (var r = 0; r < e.length; r++) e[r] = { index: r, value: e[r] };
          var n = t || goog.array.defaultCompare;
          for (
            goog.array.sort(e, function (e, t) {
              return n(e.value, t.value) || e.index - t.index;
            }),
              r = 0;
            r < e.length;
            r++
          )
            e[r] = e[r].value;
        }),
        (goog.array.sortByKey = function (e, r, t) {
          var n = t || goog.array.defaultCompare;
          goog.array.sort(e, function (e, t) {
            return n(r(e), r(t));
          });
        }),
        (goog.array.sortObjectsByKey = function (e, t, r) {
          goog.array.sortByKey(
            e,
            function (e) {
              return e[t];
            },
            r
          );
        }),
        (goog.array.isSorted = function (e, t, r) {
          t = t || goog.array.defaultCompare;
          for (var n = 1; n < e.length; n++) {
            var o = t(e[n - 1], e[n]);
            if (0 < o || (0 == o && r)) return !1;
          }
          return !0;
        }),
        (goog.array.equals = function (e, t, r) {
          if (
            !goog.isArrayLike(e) ||
            !goog.isArrayLike(t) ||
            e.length != t.length
          )
            return !1;
          var n = e.length;
          r = r || goog.array.defaultCompareEquality;
          for (var o = 0; o < n; o++) if (!r(e[o], t[o])) return !1;
          return !0;
        }),
        (goog.array.compare3 = function (e, t, r) {
          r = r || goog.array.defaultCompare;
          for (var n = Math.min(e.length, t.length), o = 0; o < n; o++) {
            var i = r(e[o], t[o]);
            if (0 != i) return i;
          }
          return goog.array.defaultCompare(e.length, t.length);
        }),
        (goog.array.defaultCompare = function (e, t) {
          return t < e ? 1 : e < t ? -1 : 0;
        }),
        (goog.array.inverseDefaultCompare = function (e, t) {
          return -goog.array.defaultCompare(e, t);
        }),
        (goog.array.defaultCompareEquality = function (e, t) {
          return e === t;
        }),
        (goog.array.binaryInsert = function (e, t, r) {
          return (
            (r = goog.array.binarySearch(e, t, r)) < 0 &&
            (goog.array.insertAt(e, t, -(r + 1)), !0)
          );
        }),
        (goog.array.binaryRemove = function (e, t, r) {
          return (
            0 <= (t = goog.array.binarySearch(e, t, r)) &&
            goog.array.removeAt(e, t)
          );
        }),
        (goog.array.bucket = function (e, t, r) {
          for (var n = {}, o = 0; o < e.length; o++) {
            var i = e[o],
              a = t.call(r, i, o, e);
            goog.isDef(a) && (n[a] || (n[a] = [])).push(i);
          }
          return n;
        }),
        (goog.array.toObject = function (r, n, o) {
          var i = {};
          return (
            goog.array.forEach(r, function (e, t) {
              i[n.call(o, e, t, r)] = e;
            }),
            i
          );
        }),
        (goog.array.range = function (e, t, r) {
          var n = [],
            o = 0,
            i = e;
          if ((void 0 !== t && ((o = e), (i = t)), (r = r || 1) * (i - o) < 0))
            return [];
          if (0 < r) for (e = o; e < i; e += r) n.push(e);
          else for (e = o; i < e; e += r) n.push(e);
          return n;
        }),
        (goog.array.repeat = function (e, t) {
          for (var r = [], n = 0; n < t; n++) r[n] = e;
          return r;
        }),
        (goog.array.flatten = function (e) {
          for (var t = [], r = 0; r < arguments.length; r++) {
            var n = arguments[r];
            if (goog.isArray(n))
              for (var o = 0; o < n.length; o += 8192)
                for (
                  var i = goog.array.slice(n, o, o + 8192),
                    i = goog.array.flatten.apply(null, i),
                    a = 0;
                  a < i.length;
                  a++
                )
                  t.push(i[a]);
            else t.push(n);
          }
          return t;
        }),
        (goog.array.rotate = function (e, t) {
          return (
            goog.asserts.assert(null != e.length),
            e.length &&
              (0 < (t %= e.length)
                ? Array.prototype.unshift.apply(e, e.splice(-t, t))
                : t < 0 && Array.prototype.push.apply(e, e.splice(0, -t))),
            e
          );
        }),
        (goog.array.moveItem = function (e, t, r) {
          goog.asserts.assert(0 <= t && t < e.length),
            goog.asserts.assert(0 <= r && r < e.length),
            (t = Array.prototype.splice.call(e, t, 1)),
            Array.prototype.splice.call(e, r, 0, t[0]);
        }),
        (goog.array.zip = function (e) {
          if (!arguments.length) return [];
          for (var t = [], r = e.length, n = 1; n < arguments.length; n++)
            arguments[n].length < r && (r = arguments[n].length);
          for (n = 0; n < r; n++) {
            for (var o = [], i = 0; i < arguments.length; i++)
              o.push(arguments[i][n]);
            t.push(o);
          }
          return t;
        }),
        (goog.array.shuffle = function (e, t) {
          for (var r = t || Math.random, n = e.length - 1; 0 < n; n--) {
            var o = Math.floor(r() * (n + 1)),
              i = e[n];
            (e[n] = e[o]), (e[o] = i);
          }
        }),
        (goog.array.copyByIndex = function (t, e) {
          var r = [];
          return (
            goog.array.forEach(e, function (e) {
              r.push(t[e]);
            }),
            r
          );
        }),
        (goog.crypt = {}),
        (goog.crypt.stringToByteArray = function (e) {
          for (var t = [], r = 0, n = 0; n < e.length; n++) {
            for (var o = e.charCodeAt(n); 255 < o; )
              (t[r++] = 255 & o), (o >>= 8);
            t[r++] = o;
          }
          return t;
        }),
        (goog.crypt.byteArrayToString = function (e) {
          if (e.length <= 8192) return String.fromCharCode.apply(null, e);
          for (var t = "", r = 0; r < e.length; r += 8192)
            var n = goog.array.slice(e, r, r + 8192),
              t = t + String.fromCharCode.apply(null, n);
          return t;
        }),
        (goog.crypt.byteArrayToHex = function (e) {
          return goog.array
            .map(e, function (e) {
              return 1 < (e = e.toString(16)).length ? e : "0" + e;
            })
            .join("");
        }),
        (goog.crypt.hexToByteArray = function (e) {
          goog.asserts.assert(
            0 == e.length % 2,
            "Key string length must be multiple of 2"
          );
          for (var t = [], r = 0; r < e.length; r += 2)
            t.push(parseInt(e.substring(r, r + 2), 16));
          return t;
        }),
        (goog.crypt.stringToUtf8ByteArray = function (e) {
          for (var t = [], r = 0, n = 0; n < e.length; n++) {
            var o = e.charCodeAt(n);
            o < 128
              ? (t[r++] = o)
              : (o < 2048
                  ? (t[r++] = (o >> 6) | 192)
                  : (55296 == (64512 & o) &&
                    n + 1 < e.length &&
                    56320 == (64512 & e.charCodeAt(n + 1))
                      ? ((o =
                          65536 +
                          ((1023 & o) << 10) +
                          (1023 & e.charCodeAt(++n))),
                        (t[r++] = (o >> 18) | 240),
                        (t[r++] = ((o >> 12) & 63) | 128))
                      : (t[r++] = (o >> 12) | 224),
                    (t[r++] = ((o >> 6) & 63) | 128)),
                (t[r++] = (63 & o) | 128));
          }
          return t;
        }),
        (goog.crypt.utf8ByteArrayToString = function (e) {
          for (var t = [], r = 0, n = 0; r < e.length; ) {
            var o,
              i,
              a = e[r++];
            a < 128
              ? (t[n++] = String.fromCharCode(a))
              : 191 < a && a < 224
              ? ((o = e[r++]),
                (t[n++] = String.fromCharCode(((31 & a) << 6) | (63 & o))))
              : 239 < a && a < 365
              ? ((a =
                  (((7 & a) << 18) |
                    ((63 & (o = e[r++])) << 12) |
                    ((63 & (i = e[r++])) << 6) |
                    (63 & e[r++])) -
                  65536),
                (t[n++] = String.fromCharCode(55296 + (a >> 10))),
                (t[n++] = String.fromCharCode(56320 + (1023 & a))))
              : ((o = e[r++]),
                (i = e[r++]),
                (t[n++] = String.fromCharCode(
                  ((15 & a) << 12) | ((63 & o) << 6) | (63 & i)
                )));
          }
          return t.join("");
        }),
        (goog.crypt.xorByteArray = function (e, t) {
          goog.asserts.assert(
            e.length == t.length,
            "XOR array lengths must match"
          );
          for (var r = [], n = 0; n < e.length; n++) r.push(e[n] ^ t[n]);
          return r;
        }),
        (goog.labs = {}),
        (goog.labs.userAgent = {}),
        (goog.labs.userAgent.util = {}),
        (goog.labs.userAgent.util.getNativeUserAgentString_ = function () {
          var e = goog.labs.userAgent.util.getNavigator_();
          return (e = e && e.userAgent) ? e : "";
        }),
        (goog.labs.userAgent.util.getNavigator_ = function () {
          return goog.global.navigator;
        }),
        (goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_()),
        (goog.labs.userAgent.util.setUserAgent = function (e) {
          goog.labs.userAgent.util.userAgent_ =
            e || goog.labs.userAgent.util.getNativeUserAgentString_();
        }),
        (goog.labs.userAgent.util.getUserAgent = function () {
          return goog.labs.userAgent.util.userAgent_;
        }),
        (goog.labs.userAgent.util.matchUserAgent = function (e) {
          var t = goog.labs.userAgent.util.getUserAgent();
          return goog.string.contains(t, e);
        }),
        (goog.labs.userAgent.util.matchUserAgentIgnoreCase = function (e) {
          var t = goog.labs.userAgent.util.getUserAgent();
          return goog.string.caseInsensitiveContains(t, e);
        }),
        (goog.labs.userAgent.util.extractVersionTuples = function (e) {
          for (
            var t,
              r = RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"),
              n = [];
            (t = r.exec(e));

          )
            n.push([t[1], t[2], t[3] || void 0]);
          return n;
        }),
        (goog.labs.userAgent.platform = {}),
        (goog.labs.userAgent.platform.isAndroid = function () {
          return goog.labs.userAgent.util.matchUserAgent("Android");
        }),
        (goog.labs.userAgent.platform.isIpod = function () {
          return goog.labs.userAgent.util.matchUserAgent("iPod");
        }),
        (goog.labs.userAgent.platform.isIphone = function () {
          return (
            goog.labs.userAgent.util.matchUserAgent("iPhone") &&
            !goog.labs.userAgent.util.matchUserAgent("iPod") &&
            !goog.labs.userAgent.util.matchUserAgent("iPad")
          );
        }),
        (goog.labs.userAgent.platform.isIpad = function () {
          return goog.labs.userAgent.util.matchUserAgent("iPad");
        }),
        (goog.labs.userAgent.platform.isIos = function () {
          return (
            goog.labs.userAgent.platform.isIphone() ||
            goog.labs.userAgent.platform.isIpad() ||
            goog.labs.userAgent.platform.isIpod()
          );
        }),
        (goog.labs.userAgent.platform.isMacintosh = function () {
          return goog.labs.userAgent.util.matchUserAgent("Macintosh");
        }),
        (goog.labs.userAgent.platform.isLinux = function () {
          return goog.labs.userAgent.util.matchUserAgent("Linux");
        }),
        (goog.labs.userAgent.platform.isWindows = function () {
          return goog.labs.userAgent.util.matchUserAgent("Windows");
        }),
        (goog.labs.userAgent.platform.isChromeOS = function () {
          return goog.labs.userAgent.util.matchUserAgent("CrOS");
        }),
        (goog.labs.userAgent.platform.getVersion = function () {
          var e = goog.labs.userAgent.util.getUserAgent(),
            t = "";
          return (
            goog.labs.userAgent.platform.isWindows()
              ? (t = (e = (t = /Windows (?:NT|Phone) ([0-9.]+)/).exec(e))
                  ? e[1]
                  : "0.0")
              : goog.labs.userAgent.platform.isIos()
              ? (t =
                  (e = (t = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/).exec(e)) &&
                  e[1].replace(/_/g, "."))
              : goog.labs.userAgent.platform.isMacintosh()
              ? (t = (e = (t = /Mac OS X ([0-9_.]+)/).exec(e))
                  ? e[1].replace(/_/g, ".")
                  : "10")
              : goog.labs.userAgent.platform.isAndroid()
              ? (t = (e = (t = /Android\s+([^\);]+)(\)|;)/).exec(e)) && e[1])
              : goog.labs.userAgent.platform.isChromeOS() &&
                (t =
                  (e = (t = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/).exec(
                    e
                  )) && e[1]),
            t || ""
          );
        }),
        (goog.labs.userAgent.platform.isVersionOrHigher = function (e) {
          return (
            0 <=
            goog.string.compareVersions(
              goog.labs.userAgent.platform.getVersion(),
              e
            )
          );
        }),
        (goog.object = {}),
        (goog.object.forEach = function (e, t, r) {
          for (var n in e) t.call(r, e[n], n, e);
        }),
        (goog.object.filter = function (e, t, r) {
          var n,
            o = {};
          for (n in e) t.call(r, e[n], n, e) && (o[n] = e[n]);
          return o;
        }),
        (goog.object.map = function (e, t, r) {
          var n,
            o = {};
          for (n in e) o[n] = t.call(r, e[n], n, e);
          return o;
        }),
        (goog.object.some = function (e, t, r) {
          for (var n in e) if (t.call(r, e[n], n, e)) return !0;
          return !1;
        }),
        (goog.object.every = function (e, t, r) {
          for (var n in e) if (!t.call(r, e[n], n, e)) return !1;
          return !0;
        }),
        (goog.object.getCount = function (e) {
          var t,
            r = 0;
          for (t in e) r++;
          return r;
        }),
        (goog.object.getAnyKey = function (e) {
          for (var t in e) return t;
        }),
        (goog.object.getAnyValue = function (e) {
          for (var t in e) return e[t];
        }),
        (goog.object.contains = function (e, t) {
          return goog.object.containsValue(e, t);
        }),
        (goog.object.getValues = function (e) {
          var t,
            r = [],
            n = 0;
          for (t in e) r[n++] = e[t];
          return r;
        }),
        (goog.object.getKeys = function (e) {
          var t,
            r = [],
            n = 0;
          for (t in e) r[n++] = t;
          return r;
        }),
        (goog.object.getValueByKeys = function (e, t) {
          for (
            var r = (n = goog.isArrayLike(t)) ? t : arguments, n = n ? 0 : 1;
            n < r.length && ((e = e[r[n]]), goog.isDef(e));
            n++
          );
          return e;
        }),
        (goog.object.containsKey = function (e, t) {
          return null !== e && t in e;
        }),
        (goog.object.containsValue = function (e, t) {
          for (var r in e) if (e[r] == t) return !0;
          return !1;
        }),
        (goog.object.findKey = function (e, t, r) {
          for (var n in e) if (t.call(r, e[n], n, e)) return n;
        }),
        (goog.object.findValue = function (e, t, r) {
          return (t = goog.object.findKey(e, t, r)) && e[t];
        }),
        (goog.object.isEmpty = function (e) {
          for (var t in e) return !1;
          return !0;
        }),
        (goog.object.clear = function (e) {
          for (var t in e) delete e[t];
        }),
        (goog.object.remove = function (e, t) {
          var r;
          return (r = t in e) && delete e[t], r;
        }),
        (goog.object.add = function (e, t, r) {
          if (null !== e && t in e)
            throw Error('The object already contains the key "' + t + '"');
          goog.object.set(e, t, r);
        }),
        (goog.object.get = function (e, t, r) {
          return null !== e && t in e ? e[t] : r;
        }),
        (goog.object.set = function (e, t, r) {
          e[t] = r;
        }),
        (goog.object.setIfUndefined = function (e, t, r) {
          return t in e ? e[t] : (e[t] = r);
        }),
        (goog.object.setWithReturnValueIfNotSet = function (e, t, r) {
          return t in e ? e[t] : ((r = r()), (e[t] = r));
        }),
        (goog.object.equals = function (e, t) {
          for (var r in e) if (!(r in t) || e[r] !== t[r]) return !1;
          for (r in t) if (!(r in e)) return !1;
          return !0;
        }),
        (goog.object.clone = function (e) {
          var t,
            r = {};
          for (t in e) r[t] = e[t];
          return r;
        }),
        (goog.object.unsafeClone = function (e) {
          if ("object" != (r = goog.typeOf(e)) && "array" != r) return e;
          if (goog.isFunction(e.clone)) return e.clone();
          var t,
            r = "array" == r ? [] : {};
          for (t in e) r[t] = goog.object.unsafeClone(e[t]);
          return r;
        }),
        (goog.object.transpose = function (e) {
          var t,
            r = {};
          for (t in e) r[e[t]] = t;
          return r;
        }),
        (goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
          " "
        )),
        (goog.object.extend = function (e, t) {
          for (var r, n, o = 1; o < arguments.length; o++) {
            for (r in (n = arguments[o])) e[r] = n[r];
            for (var i = 0; i < goog.object.PROTOTYPE_FIELDS_.length; i++)
              (r = goog.object.PROTOTYPE_FIELDS_[i]),
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
        }),
        (goog.object.create = function (e) {
          var t = arguments.length;
          if (1 == t && goog.isArray(e))
            return goog.object.create.apply(null, e);
          if (t % 2) throw Error("Uneven number of arguments");
          for (var r = {}, n = 0; n < t; n += 2)
            r[arguments[n]] = arguments[n + 1];
          return r;
        }),
        (goog.object.createSet = function (e) {
          var t = arguments.length;
          if (1 == t && goog.isArray(e))
            return goog.object.createSet.apply(null, e);
          for (var r = {}, n = 0; n < t; n++) r[arguments[n]] = !0;
          return r;
        }),
        (goog.object.createImmutableView = function (e) {
          var t = e;
          return (
            Object.isFrozen &&
              !Object.isFrozen(e) &&
              ((t = Object.create(e)), Object.freeze(t)),
            t
          );
        }),
        (goog.object.isImmutableView = function (e) {
          return !!Object.isFrozen && Object.isFrozen(e);
        }),
        (goog.labs.userAgent.browser = {}),
        (goog.labs.userAgent.browser.matchOpera_ = function () {
          return (
            goog.labs.userAgent.util.matchUserAgent("Opera") ||
            goog.labs.userAgent.util.matchUserAgent("OPR")
          );
        }),
        (goog.labs.userAgent.browser.matchIE_ = function () {
          return (
            goog.labs.userAgent.util.matchUserAgent("Trident") ||
            goog.labs.userAgent.util.matchUserAgent("MSIE")
          );
        }),
        (goog.labs.userAgent.browser.matchEdge_ = function () {
          return goog.labs.userAgent.util.matchUserAgent("Edge");
        }),
        (goog.labs.userAgent.browser.matchFirefox_ = function () {
          return goog.labs.userAgent.util.matchUserAgent("Firefox");
        }),
        (goog.labs.userAgent.browser.matchSafari_ = function () {
          return (
            goog.labs.userAgent.util.matchUserAgent("Safari") &&
            !(
              goog.labs.userAgent.browser.matchChrome_() ||
              goog.labs.userAgent.browser.matchCoast_() ||
              goog.labs.userAgent.browser.matchOpera_() ||
              goog.labs.userAgent.browser.matchEdge_() ||
              goog.labs.userAgent.browser.isSilk() ||
              goog.labs.userAgent.util.matchUserAgent("Android")
            )
          );
        }),
        (goog.labs.userAgent.browser.matchCoast_ = function () {
          return goog.labs.userAgent.util.matchUserAgent("Coast");
        }),
        (goog.labs.userAgent.browser.matchIosWebview_ = function () {
          return (
            (goog.labs.userAgent.util.matchUserAgent("iPad") ||
              goog.labs.userAgent.util.matchUserAgent("iPhone")) &&
            !goog.labs.userAgent.browser.matchSafari_() &&
            !goog.labs.userAgent.browser.matchChrome_() &&
            !goog.labs.userAgent.browser.matchCoast_() &&
            goog.labs.userAgent.util.matchUserAgent("AppleWebKit")
          );
        }),
        (goog.labs.userAgent.browser.matchChrome_ = function () {
          return (
            (goog.labs.userAgent.util.matchUserAgent("Chrome") ||
              goog.labs.userAgent.util.matchUserAgent("CriOS")) &&
            !goog.labs.userAgent.browser.matchOpera_() &&
            !goog.labs.userAgent.browser.matchEdge_()
          );
        }),
        (goog.labs.userAgent.browser.matchAndroidBrowser_ = function () {
          return (
            goog.labs.userAgent.util.matchUserAgent("Android") &&
            !(
              goog.labs.userAgent.browser.isChrome() ||
              goog.labs.userAgent.browser.isFirefox() ||
              goog.labs.userAgent.browser.isOpera() ||
              goog.labs.userAgent.browser.isSilk()
            )
          );
        }),
        (goog.labs.userAgent.browser.isOpera =
          goog.labs.userAgent.browser.matchOpera_),
        (goog.labs.userAgent.browser.isIE =
          goog.labs.userAgent.browser.matchIE_),
        (goog.labs.userAgent.browser.isEdge =
          goog.labs.userAgent.browser.matchEdge_),
        (goog.labs.userAgent.browser.isFirefox =
          goog.labs.userAgent.browser.matchFirefox_),
        (goog.labs.userAgent.browser.isSafari =
          goog.labs.userAgent.browser.matchSafari_),
        (goog.labs.userAgent.browser.isCoast =
          goog.labs.userAgent.browser.matchCoast_),
        (goog.labs.userAgent.browser.isIosWebview =
          goog.labs.userAgent.browser.matchIosWebview_),
        (goog.labs.userAgent.browser.isChrome =
          goog.labs.userAgent.browser.matchChrome_),
        (goog.labs.userAgent.browser.isAndroidBrowser =
          goog.labs.userAgent.browser.matchAndroidBrowser_),
        (goog.labs.userAgent.browser.isSilk = function () {
          return goog.labs.userAgent.util.matchUserAgent("Silk");
        }),
        (goog.labs.userAgent.browser.getVersion = function () {
          function e(e) {
            return (e = goog.array.find(e, n)), r[e] || "";
          }
          var t = goog.labs.userAgent.util.getUserAgent();
          if (goog.labs.userAgent.browser.isIE())
            return goog.labs.userAgent.browser.getIEVersion_(t);
          var t = goog.labs.userAgent.util.extractVersionTuples(t),
            r = {};
          goog.array.forEach(t, function (e) {
            r[e[0]] = e[1];
          });
          var n = goog.partial(goog.object.containsKey, r);
          return goog.labs.userAgent.browser.isOpera()
            ? e(["Version", "Opera", "OPR"])
            : goog.labs.userAgent.browser.isEdge()
            ? e(["Edge"])
            : goog.labs.userAgent.browser.isChrome()
            ? e(["Chrome", "CriOS"])
            : ((t = t[2]) && t[1]) || "";
        }),
        (goog.labs.userAgent.browser.isVersionOrHigher = function (e) {
          return (
            0 <=
            goog.string.compareVersions(
              goog.labs.userAgent.browser.getVersion(),
              e
            )
          );
        }),
        (goog.labs.userAgent.browser.getIEVersion_ = function (e) {
          if ((t = /rv: *([\d\.]*)/.exec(e)) && t[1]) return t[1];
          var t = "",
            r = /MSIE +([\d\.]+)/.exec(e);
          if (r && r[1])
            if (((e = /Trident\/(\d.\d)/.exec(e)), "7.0" == r[1]))
              if (e && e[1])
                switch (e[1]) {
                  case "4.0":
                    t = "8.0";
                    break;
                  case "5.0":
                    t = "9.0";
                    break;
                  case "6.0":
                    t = "10.0";
                    break;
                  case "7.0":
                    t = "11.0";
                }
              else t = "7.0";
            else t = r[1];
          return t;
        }),
        (goog.labs.userAgent.engine = {}),
        (goog.labs.userAgent.engine.isPresto = function () {
          return goog.labs.userAgent.util.matchUserAgent("Presto");
        }),
        (goog.labs.userAgent.engine.isTrident = function () {
          return (
            goog.labs.userAgent.util.matchUserAgent("Trident") ||
            goog.labs.userAgent.util.matchUserAgent("MSIE")
          );
        }),
        (goog.labs.userAgent.engine.isEdge = function () {
          return goog.labs.userAgent.util.matchUserAgent("Edge");
        }),
        (goog.labs.userAgent.engine.isWebKit = function () {
          return (
            goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") &&
            !goog.labs.userAgent.engine.isEdge()
          );
        }),
        (goog.labs.userAgent.engine.isGecko = function () {
          return (
            goog.labs.userAgent.util.matchUserAgent("Gecko") &&
            !goog.labs.userAgent.engine.isWebKit() &&
            !goog.labs.userAgent.engine.isTrident() &&
            !goog.labs.userAgent.engine.isEdge()
          );
        }),
        (goog.labs.userAgent.engine.getVersion = function () {
          if ((t = goog.labs.userAgent.util.getUserAgent())) {
            var e,
              t = goog.labs.userAgent.util.extractVersionTuples(t),
              r = goog.labs.userAgent.engine.getEngineTuple_(t);
            if (r)
              return "Gecko" == r[0]
                ? goog.labs.userAgent.engine.getVersionForKey_(t, "Firefox")
                : r[1];
            if ((t = t[0]) && (e = t[2]) && (e = /Trident\/([^\s;]+)/.exec(e)))
              return e[1];
          }
          return "";
        }),
        (goog.labs.userAgent.engine.getEngineTuple_ = function (e) {
          if (!goog.labs.userAgent.engine.isEdge()) return e[1];
          for (var t = 0; t < e.length; t++) {
            var r = e[t];
            if ("Edge" == r[0]) return r;
          }
        }),
        (goog.labs.userAgent.engine.isVersionOrHigher = function (e) {
          return (
            0 <=
            goog.string.compareVersions(
              goog.labs.userAgent.engine.getVersion(),
              e
            )
          );
        }),
        (goog.labs.userAgent.engine.getVersionForKey_ = function (e, t) {
          e = goog.array.find(e, function (e) {
            return t == e[0];
          });
          return (e && e[1]) || "";
        }),
        (goog.userAgent = {}),
        (goog.userAgent.ASSUME_IE = !1),
        (goog.userAgent.ASSUME_EDGE = !1),
        (goog.userAgent.ASSUME_GECKO = !1),
        (goog.userAgent.ASSUME_WEBKIT = !1),
        (goog.userAgent.ASSUME_MOBILE_WEBKIT = !1),
        (goog.userAgent.ASSUME_OPERA = !1),
        (goog.userAgent.ASSUME_ANY_VERSION = !1),
        (goog.userAgent.BROWSER_KNOWN_ =
          goog.userAgent.ASSUME_IE ||
          goog.userAgent.ASSUME_EDGE ||
          goog.userAgent.ASSUME_GECKO ||
          goog.userAgent.ASSUME_MOBILE_WEBKIT ||
          goog.userAgent.ASSUME_WEBKIT ||
          goog.userAgent.ASSUME_OPERA),
        (goog.userAgent.getUserAgentString = function () {
          return goog.labs.userAgent.util.getUserAgent();
        }),
        (goog.userAgent.getNavigator = function () {
          return goog.global.navigator || null;
        }),
        (goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_
          ? goog.userAgent.ASSUME_OPERA
          : goog.labs.userAgent.browser.isOpera()),
        (goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_
          ? goog.userAgent.ASSUME_IE
          : goog.labs.userAgent.browser.isIE()),
        (goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_
          ? goog.userAgent.ASSUME_EDGE
          : goog.labs.userAgent.engine.isEdge()),
        (goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE),
        (goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_
          ? goog.userAgent.ASSUME_GECKO
          : goog.labs.userAgent.engine.isGecko()),
        (goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_
          ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT
          : goog.labs.userAgent.engine.isWebKit()),
        (goog.userAgent.isMobile_ = function () {
          return (
            goog.userAgent.WEBKIT &&
            goog.labs.userAgent.util.matchUserAgent("Mobile")
          );
        }),
        (goog.userAgent.MOBILE =
          goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_()),
        (goog.userAgent.SAFARI = goog.userAgent.WEBKIT),
        (goog.userAgent.determinePlatform_ = function () {
          var e = goog.userAgent.getNavigator();
          return (e && e.platform) || "";
        }),
        (goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_()),
        (goog.userAgent.ASSUME_MAC = !1),
        (goog.userAgent.ASSUME_WINDOWS = !1),
        (goog.userAgent.ASSUME_LINUX = !1),
        (goog.userAgent.ASSUME_X11 = !1),
        (goog.userAgent.ASSUME_ANDROID = !1),
        (goog.userAgent.ASSUME_IPHONE = !1),
        (goog.userAgent.ASSUME_IPAD = !1),
        (goog.userAgent.PLATFORM_KNOWN_ =
          goog.userAgent.ASSUME_MAC ||
          goog.userAgent.ASSUME_WINDOWS ||
          goog.userAgent.ASSUME_LINUX ||
          goog.userAgent.ASSUME_X11 ||
          goog.userAgent.ASSUME_ANDROID ||
          goog.userAgent.ASSUME_IPHONE ||
          goog.userAgent.ASSUME_IPAD),
        (goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_MAC
          : goog.labs.userAgent.platform.isMacintosh()),
        (goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_WINDOWS
          : goog.labs.userAgent.platform.isWindows()),
        (goog.userAgent.isLegacyLinux_ = function () {
          return (
            goog.labs.userAgent.platform.isLinux() ||
            goog.labs.userAgent.platform.isChromeOS()
          );
        }),
        (goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_LINUX
          : goog.userAgent.isLegacyLinux_()),
        (goog.userAgent.isX11_ = function () {
          var e = goog.userAgent.getNavigator();
          return !!e && goog.string.contains(e.appVersion || "", "X11");
        }),
        (goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_X11
          : goog.userAgent.isX11_()),
        (goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_ANDROID
          : goog.labs.userAgent.platform.isAndroid()),
        (goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_IPHONE
          : goog.labs.userAgent.platform.isIphone()),
        (goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_IPAD
          : goog.labs.userAgent.platform.isIpad()),
        (goog.userAgent.operaVersion_ = function () {
          var t = goog.global.opera.version;
          try {
            return t();
          } catch (e) {
            return t;
          }
        }),
        (goog.userAgent.determineVersion_ = function () {
          if (goog.userAgent.OPERA && goog.global.opera)
            return goog.userAgent.operaVersion_();
          var e = "",
            t = goog.userAgent.getVersionRegexResult_();
          return (
            t && (e = t ? t[1] : ""),
            goog.userAgent.IE &&
            (t = goog.userAgent.getDocumentMode_()) > parseFloat(e)
              ? String(t)
              : e
          );
        }),
        (goog.userAgent.getVersionRegexResult_ = function () {
          var e = goog.userAgent.getUserAgentString();
          return goog.userAgent.GECKO
            ? /rv\:([^\);]+)(\)|;)/.exec(e)
            : goog.userAgent.EDGE
            ? /Edge\/([\d\.]+)/.exec(e)
            : goog.userAgent.IE
            ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e)
            : goog.userAgent.WEBKIT
            ? /WebKit\/(\S+)/.exec(e)
            : void 0;
        }),
        (goog.userAgent.getDocumentMode_ = function () {
          var e = goog.global.document;
          return e ? e.documentMode : void 0;
        }),
        (goog.userAgent.VERSION = goog.userAgent.determineVersion_()),
        (goog.userAgent.compare = function (e, t) {
          return goog.string.compareVersions(e, t);
        }),
        (goog.userAgent.isVersionOrHigherCache_ = {}),
        (goog.userAgent.isVersionOrHigher = function (e) {
          return (
            goog.userAgent.ASSUME_ANY_VERSION ||
            goog.userAgent.isVersionOrHigherCache_[e] ||
            (goog.userAgent.isVersionOrHigherCache_[e] =
              0 <= goog.string.compareVersions(goog.userAgent.VERSION, e))
          );
        }),
        (goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher),
        (goog.userAgent.isDocumentModeOrHigher = function (e) {
          return Number(goog.userAgent.DOCUMENT_MODE) >= e;
        }),
        (goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher),
        (goog.userAgent.DOCUMENT_MODE =
          ((RKa = goog.global.document),
          (SKa = goog.userAgent.getDocumentMode_()),
          RKa && goog.userAgent.IE
            ? SKa ||
              ("CSS1Compat" == RKa.compatMode
                ? parseInt(goog.userAgent.VERSION, 10)
                : 5)
            : void 0)),
        (goog.userAgent.product = {}),
        (goog.userAgent.product.ASSUME_FIREFOX = !1),
        (goog.userAgent.product.ASSUME_IPHONE = !1),
        (goog.userAgent.product.ASSUME_IPAD = !1),
        (goog.userAgent.product.ASSUME_ANDROID = !1),
        (goog.userAgent.product.ASSUME_CHROME = !1),
        (goog.userAgent.product.ASSUME_SAFARI = !1),
        (goog.userAgent.product.PRODUCT_KNOWN_ =
          goog.userAgent.ASSUME_IE ||
          goog.userAgent.ASSUME_EDGE ||
          goog.userAgent.ASSUME_OPERA ||
          goog.userAgent.product.ASSUME_FIREFOX ||
          goog.userAgent.product.ASSUME_IPHONE ||
          goog.userAgent.product.ASSUME_IPAD ||
          goog.userAgent.product.ASSUME_ANDROID ||
          goog.userAgent.product.ASSUME_CHROME ||
          goog.userAgent.product.ASSUME_SAFARI),
        (goog.userAgent.product.OPERA = goog.userAgent.OPERA),
        (goog.userAgent.product.IE = goog.userAgent.IE),
        (goog.userAgent.product.EDGE = goog.userAgent.EDGE),
        (goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_
          ? goog.userAgent.product.ASSUME_FIREFOX
          : goog.labs.userAgent.browser.isFirefox()),
        (goog.userAgent.product.isIphoneOrIpod_ = function () {
          return (
            goog.labs.userAgent.platform.isIphone() ||
            goog.labs.userAgent.platform.isIpod()
          );
        }),
        (goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_
          ? goog.userAgent.product.ASSUME_IPHONE
          : goog.userAgent.product.isIphoneOrIpod_()),
        (goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_
          ? goog.userAgent.product.ASSUME_IPAD
          : goog.labs.userAgent.platform.isIpad()),
        (goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_
          ? goog.userAgent.product.ASSUME_ANDROID
          : goog.labs.userAgent.browser.isAndroidBrowser()),
        (goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_
          ? goog.userAgent.product.ASSUME_CHROME
          : goog.labs.userAgent.browser.isChrome()),
        (goog.userAgent.product.isSafariDesktop_ = function () {
          return (
            goog.labs.userAgent.browser.isSafari() &&
            !goog.labs.userAgent.platform.isIos()
          );
        }),
        (goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_
          ? goog.userAgent.product.ASSUME_SAFARI
          : goog.userAgent.product.isSafariDesktop_()),
        (goog.crypt.base64 = {}),
        (goog.crypt.base64.byteToCharMap_ = null),
        (goog.crypt.base64.charToByteMap_ = null),
        (goog.crypt.base64.byteToCharMapWebSafe_ = null),
        (goog.crypt.base64.ENCODED_VALS_BASE =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"),
        (goog.crypt.base64.ENCODED_VALS =
          goog.crypt.base64.ENCODED_VALS_BASE + "+/="),
        (goog.crypt.base64.ENCODED_VALS_WEBSAFE =
          goog.crypt.base64.ENCODED_VALS_BASE + "-_."),
        (goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ =
          goog.userAgent.GECKO ||
          (goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI) ||
          goog.userAgent.OPERA),
        (goog.crypt.base64.HAS_NATIVE_ENCODE_ =
          goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ ||
          "function" == typeof goog.global.btoa),
        (goog.crypt.base64.HAS_NATIVE_DECODE_ =
          goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ ||
          (!goog.userAgent.product.SAFARI &&
            !goog.userAgent.IE &&
            "function" == typeof goog.global.atob)),
        (goog.crypt.base64.encodeByteArray = function (e, t) {
          goog.asserts.assert(
            goog.isArrayLike(e),
            "encodeByteArray takes an array as a parameter"
          ),
            goog.crypt.base64.init_();
          for (
            var r = t
                ? goog.crypt.base64.byteToCharMapWebSafe_
                : goog.crypt.base64.byteToCharMap_,
              n = [],
              o = 0;
            o < e.length;
            o += 3
          ) {
            var i = e[o],
              a = o + 1 < e.length,
              s = a ? e[o + 1] : 0,
              u = o + 2 < e.length,
              l = i >> 2,
              i = ((3 & i) << 4) | (s >> 4),
              s = ((15 & s) << 2) | ((c = u ? e[o + 2] : 0) >> 6),
              c = 63 & c;
            u || ((c = 64), a || (s = 64)), n.push(r[l], r[i], r[s], r[c]);
          }
          return n.join("");
        }),
        (goog.crypt.base64.encodeString = function (e, t) {
          return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !t
            ? goog.global.btoa(e)
            : goog.crypt.base64.encodeByteArray(
                goog.crypt.stringToByteArray(e),
                t
              );
        }),
        (goog.crypt.base64.decodeString = function (e, t) {
          if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !t)
            return goog.global.atob(e);
          var r = "";
          return (
            goog.crypt.base64.decodeStringInternal_(e, function (e) {
              r += String.fromCharCode(e);
            }),
            r
          );
        }),
        (goog.crypt.base64.decodeStringToByteArray = function (e, t) {
          var r = [];
          return (
            goog.crypt.base64.decodeStringInternal_(e, function (e) {
              r.push(e);
            }),
            r
          );
        }),
        (goog.crypt.base64.decodeStringToUint8Array = function (e) {
          goog.asserts.assert(
            !goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"),
            "Browser does not support typed arrays"
          );
          var t = new Uint8Array(Math.ceil((3 * e.length) / 4)),
            r = 0;
          return (
            goog.crypt.base64.decodeStringInternal_(e, function (e) {
              t[r++] = e;
            }),
            t.subarray(0, r)
          );
        }),
        (goog.crypt.base64.decodeStringInternal_ = function (n, e) {
          function t(e) {
            for (; o < n.length; ) {
              var t = n.charAt(o++),
                r = goog.crypt.base64.charToByteMap_[t];
              if (null != r) return r;
              if (!goog.string.isEmptyOrWhitespace(t))
                throw Error("Unknown base64 encoding at char: " + t);
            }
            return e;
          }
          goog.crypt.base64.init_();
          for (var o = 0; ; ) {
            var r = t(-1),
              i = t(0),
              a = t(64),
              s = t(64);
            if (64 === s && -1 === r) break;
            e((r << 2) | (i >> 4)),
              64 != a &&
                (e(((i << 4) & 240) | (a >> 2)),
                64 != s && e(((a << 6) & 192) | s));
          }
        }),
        (goog.crypt.base64.init_ = function () {
          if (!goog.crypt.base64.byteToCharMap_) {
            (goog.crypt.base64.byteToCharMap_ = {}),
              (goog.crypt.base64.charToByteMap_ = {}),
              (goog.crypt.base64.byteToCharMapWebSafe_ = {});
            for (var e = 0; e < goog.crypt.base64.ENCODED_VALS.length; e++)
              (goog.crypt.base64.byteToCharMap_[
                e
              ] = goog.crypt.base64.ENCODED_VALS.charAt(e)),
                (goog.crypt.base64.charToByteMap_[
                  goog.crypt.base64.byteToCharMap_[e]
                ] = e),
                (goog.crypt.base64.byteToCharMapWebSafe_[
                  e
                ] = goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(e)),
                e >= goog.crypt.base64.ENCODED_VALS_BASE.length &&
                  (goog.crypt.base64.charToByteMap_[
                    goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(e)
                  ] = e);
          }
        }),
        (jspb.ExtensionFieldInfo = function (e, t, r, n, o) {
          (this.fieldIndex = e),
            (this.fieldName = t),
            (this.ctor = r),
            (this.toObjectFn = n),
            (this.isRepeated = o);
        }),
        (jspb.ExtensionFieldBinaryInfo = function (e, t, r, n, o, i) {
          (this.fieldInfo = e),
            (this.binaryReaderFn = t),
            (this.binaryWriterFn = r),
            (this.binaryMessageSerializeFn = n),
            (this.binaryMessageDeserializeFn = o),
            (this.isPacked = i);
        }),
        (jspb.ExtensionFieldInfo.prototype.isMessageType = function () {
          return !!this.ctor;
        }),
        (jspb.Message = function () {}),
        (jspb.Message.GENERATE_TO_OBJECT = !0),
        (jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE),
        (jspb.Message.GENERATE_TO_STRING = !0),
        (jspb.Message.ASSUME_LOCAL_ARRAYS = !1),
        (jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = !0),
        (jspb.Message.SUPPORTS_UINT8ARRAY_ = "function" == typeof Uint8Array),
        (jspb.Message.prototype.getJsPbMessageId = function () {
          return this.messageId_;
        }),
        (jspb.Message.getIndex_ = function (e, t) {
          return t + e.arrayIndexOffset_;
        }),
        (jspb.Message.getFieldNumber_ = function (e, t) {
          return t - e.arrayIndexOffset_;
        }),
        (jspb.Message.initialize = function (e, t, r, n, o, i) {
          if (
            ((e.wrappers_ = null),
            (t = t || (r ? [r] : [])),
            (e.messageId_ = r ? String(r) : void 0),
            (e.arrayIndexOffset_ = 0 === r ? -1 : 0),
            (e.array = t),
            jspb.Message.initPivotAndExtensionObject_(e, n),
            (e.convertedFloatingPointFields_ = {}),
            jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS ||
              (e.repeatedFields = o),
            o)
          )
            for (t = 0; t < o.length; t++)
              (r = o[t]) < e.pivot_
                ? ((r = jspb.Message.getIndex_(e, r)),
                  (e.array[r] =
                    e.array[r] || jspb.Message.EMPTY_LIST_SENTINEL_))
                : (jspb.Message.maybeInitEmptyExtensionObject_(e),
                  (e.extensionObject_[r] =
                    e.extensionObject_[r] ||
                    jspb.Message.EMPTY_LIST_SENTINEL_));
          if (i && i.length)
            for (t = 0; t < i.length; t++)
              jspb.Message.computeOneofCase(e, i[t]);
        }),
        (jspb.Message.EMPTY_LIST_SENTINEL_ =
          goog.DEBUG && Object.freeze ? Object.freeze([]) : []),
        (jspb.Message.isArray_ = function (e) {
          return jspb.Message.ASSUME_LOCAL_ARRAYS
            ? e instanceof Array
            : goog.isArray(e);
        }),
        (jspb.Message.initPivotAndExtensionObject_ = function (e, t) {
          if (e.array.length) {
            var r = e.array.length - 1,
              n = e.array[r];
            if (
              n &&
              "object" == typeof n &&
              !jspb.Message.isArray_(n) &&
              !(jspb.Message.SUPPORTS_UINT8ARRAY_ && n instanceof Uint8Array)
            )
              return (
                (e.pivot_ = jspb.Message.getFieldNumber_(e, r)),
                void (e.extensionObject_ = n)
              );
          }
          -1 < t
            ? ((e.pivot_ = t), (e.extensionObject_ = null))
            : (e.pivot_ = Number.MAX_VALUE);
        }),
        (jspb.Message.maybeInitEmptyExtensionObject_ = function (e) {
          var t = jspb.Message.getIndex_(e, e.pivot_);
          e.array[t] || (e.extensionObject_ = e.array[t] = {});
        }),
        (jspb.Message.toObjectList = function (e, t, r) {
          for (var n = [], o = 0; o < e.length; o++)
            n[o] = t.call(e[o], r, e[o]);
          return n;
        }),
        (jspb.Message.toObjectExtension = function (e, t, r, n, o) {
          for (var i in r) {
            var a = r[i],
              i = n.call(e, a);
            if (null != i) {
              for (var s in a.fieldName)
                if (a.fieldName.hasOwnProperty(s)) break;
              t[s] = a.toObjectFn
                ? a.isRepeated
                  ? jspb.Message.toObjectList(i, a.toObjectFn, o)
                  : a.toObjectFn(o, i)
                : i;
            }
          }
        }),
        (jspb.Message.serializeBinaryExtensions = function (e, t, r, n) {
          for (var o in r) {
            var i = r[o],
              a = i.fieldInfo;
            if (!i.binaryWriterFn)
              throw Error(
                "Message extension present that was generated without binary serialization support"
              );
            o = n.call(e, a);
            if (null != o)
              if (a.isMessageType()) {
                if (!i.binaryMessageSerializeFn)
                  throw Error(
                    "Message extension present holding submessage without binary support enabled, and message is being serialized to binary format"
                  );
                i.binaryWriterFn.call(
                  t,
                  a.fieldIndex,
                  o,
                  i.binaryMessageSerializeFn
                );
              } else i.binaryWriterFn.call(t, a.fieldIndex, o);
          }
        }),
        (jspb.Message.readBinaryExtension = function (e, t, r, n, o) {
          var i,
            a = r[t.getFieldNumber()];
          if (a) {
            if (((r = a.fieldInfo), !a.binaryReaderFn))
              throw Error(
                "Deserializing extension whose generated code does not support binary format"
              );
            r.isMessageType()
              ? ((i = new r.ctor()),
                a.binaryReaderFn.call(t, i, a.binaryMessageDeserializeFn))
              : (i = a.binaryReaderFn.call(t)),
              r.isRepeated && !a.isPacked
                ? (t = n.call(e, r))
                  ? t.push(i)
                  : o.call(e, r, [i])
                : o.call(e, r, i);
          } else t.skipField();
        }),
        (jspb.Message.getField = function (e, t) {
          if (t < e.pivot_) {
            var r = jspb.Message.getIndex_(e, t),
              n = e.array[r];
            return n === jspb.Message.EMPTY_LIST_SENTINEL_
              ? (e.array[r] = [])
              : n;
          }
          if (e.extensionObject_)
            return (n = e.extensionObject_[t]) ===
              jspb.Message.EMPTY_LIST_SENTINEL_
              ? (e.extensionObject_[t] = [])
              : n;
        }),
        (jspb.Message.getRepeatedField = function (e, t) {
          if (t < e.pivot_) {
            var r = jspb.Message.getIndex_(e, t),
              n = e.array[r];
            return n === jspb.Message.EMPTY_LIST_SENTINEL_
              ? (e.array[r] = [])
              : n;
          }
          return (n = e.extensionObject_[t]) ===
            jspb.Message.EMPTY_LIST_SENTINEL_
            ? (e.extensionObject_[t] = [])
            : n;
        }),
        (jspb.Message.getOptionalFloatingPointField = function (e, t) {
          t = jspb.Message.getField(e, t);
          return null == t ? t : +t;
        }),
        (jspb.Message.getRepeatedFloatingPointField = function (e, t) {
          var r = jspb.Message.getRepeatedField(e, t);
          if (
            (e.convertedFloatingPointFields_ ||
              (e.convertedFloatingPointFields_ = {}),
            !e.convertedFloatingPointFields_[t])
          ) {
            for (var n = 0; n < r.length; n++) r[n] = +r[n];
            e.convertedFloatingPointFields_[t] = !0;
          }
          return r;
        }),
        (jspb.Message.bytesAsB64 = function (e) {
          return null == e || goog.isString(e)
            ? e
            : jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array
            ? goog.crypt.base64.encodeByteArray(e)
            : (goog.asserts.fail(
                "Cannot coerce to b64 string: " + goog.typeOf(e)
              ),
              null);
        }),
        (jspb.Message.bytesAsU8 = function (e) {
          return null == e || e instanceof Uint8Array
            ? e
            : goog.isString(e)
            ? goog.crypt.base64.decodeStringToUint8Array(e)
            : (goog.asserts.fail(
                "Cannot coerce to Uint8Array: " + goog.typeOf(e)
              ),
              null);
        }),
        (jspb.Message.bytesListAsB64 = function (e) {
          return (
            jspb.Message.assertConsistentTypes_(e),
            !e.length || goog.isString(e[0])
              ? e
              : goog.array.map(e, jspb.Message.bytesAsB64)
          );
        }),
        (jspb.Message.bytesListAsU8 = function (e) {
          return (
            jspb.Message.assertConsistentTypes_(e),
            !e.length || e[0] instanceof Uint8Array
              ? e
              : goog.array.map(e, jspb.Message.bytesAsU8)
          );
        }),
        (jspb.Message.assertConsistentTypes_ = function (e) {
          var t;
          goog.DEBUG &&
            e &&
            1 < e.length &&
            ((t = goog.typeOf(e[0])),
            goog.array.forEach(e, function (e) {
              goog.typeOf(e) != t &&
                goog.asserts.fail(
                  "Inconsistent type in JSPB repeated field array. Got " +
                    goog.typeOf(e) +
                    " expected " +
                    t
                );
            }));
        }),
        (jspb.Message.getFieldWithDefault = function (e, t, r) {
          return null == (e = jspb.Message.getField(e, t)) ? r : e;
        }),
        (jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault),
        (jspb.Message.getMapField = function (e, t, r, n) {
          return (
            e.wrappers_ || (e.wrappers_ = {}),
            t in e.wrappers_
              ? e.wrappers_[t]
              : r
              ? void 0
              : ((r = jspb.Message.getField(e, t)) ||
                  jspb.Message.setField(e, t, (r = [])),
                (e.wrappers_[t] = new jspb.Map(r, n)))
          );
        }),
        (jspb.Message.setField = function (e, t, r) {
          t < e.pivot_
            ? (e.array[jspb.Message.getIndex_(e, t)] = r)
            : (jspb.Message.maybeInitEmptyExtensionObject_(e),
              (e.extensionObject_[t] = r));
        }),
        (jspb.Message.setProto3IntField = function (e, t, r) {
          jspb.Message.setFieldIgnoringDefault_(e, t, r, 0);
        }),
        (jspb.Message.setProto3StringIntField = function (e, t, r) {
          jspb.Message.setFieldIgnoringDefault_(e, t, r, "0");
        }),
        (jspb.Message.setProto3FloatField = function (e, t, r) {
          jspb.Message.setFieldIgnoringDefault_(e, t, r, 0);
        }),
        (jspb.Message.setProto3BooleanField = function (e, t, r) {
          jspb.Message.setFieldIgnoringDefault_(e, t, r, !1);
        }),
        (jspb.Message.setProto3StringField = function (e, t, r) {
          jspb.Message.setFieldIgnoringDefault_(e, t, r, "");
        }),
        (jspb.Message.setProto3BytesField = function (e, t, r) {
          jspb.Message.setFieldIgnoringDefault_(e, t, r, "");
        }),
        (jspb.Message.setProto3EnumField = function (e, t, r) {
          jspb.Message.setFieldIgnoringDefault_(e, t, r, 0);
        }),
        (jspb.Message.setFieldIgnoringDefault_ = function (e, t, r, n) {
          r != n
            ? jspb.Message.setField(e, t, r)
            : (e.array[jspb.Message.getIndex_(e, t)] = null);
        }),
        (jspb.Message.addToRepeatedField = function (e, t, r, n) {
          (e = jspb.Message.getRepeatedField(e, t)),
            null != n ? e.splice(n, 0, r) : e.push(r);
        }),
        (jspb.Message.setOneofField = function (e, t, r, n) {
          (r = jspb.Message.computeOneofCase(e, r)) &&
            r !== t &&
            void 0 !== n &&
            (e.wrappers_ && r in e.wrappers_ && (e.wrappers_[r] = void 0),
            jspb.Message.setField(e, r, void 0)),
            jspb.Message.setField(e, t, n);
        }),
        (jspb.Message.computeOneofCase = function (e, t) {
          for (var r, n, o = 0; o < t.length; o++) {
            var i = t[o],
              a = jspb.Message.getField(e, i);
            null != a && ((n = a), jspb.Message.setField(e, (r = i), void 0));
          }
          return r ? (jspb.Message.setField(e, r, n), r) : 0;
        }),
        (jspb.Message.getWrapperField = function (e, t, r, n) {
          var o;
          return (
            e.wrappers_ || (e.wrappers_ = {}),
            e.wrappers_[r] ||
              ((o = jspb.Message.getField(e, r)),
              (n || o) && (e.wrappers_[r] = new t(o))),
            e.wrappers_[r]
          );
        }),
        (jspb.Message.getRepeatedWrapperField = function (e, t, r) {
          return (
            jspb.Message.wrapRepeatedField_(e, t, r),
            (t =
              (t = e.wrappers_[r]) == jspb.Message.EMPTY_LIST_SENTINEL_
                ? (e.wrappers_[r] = [])
                : t)
          );
        }),
        (jspb.Message.wrapRepeatedField_ = function (e, t, r) {
          if ((e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[r])) {
            for (
              var n = jspb.Message.getRepeatedField(e, r), o = [], i = 0;
              i < n.length;
              i++
            )
              o[i] = new t(n[i]);
            e.wrappers_[r] = o;
          }
        }),
        (jspb.Message.setWrapperField = function (e, t, r) {
          e.wrappers_ || (e.wrappers_ = {});
          var n = r && r.toArray();
          (e.wrappers_[t] = r), jspb.Message.setField(e, t, n);
        }),
        (jspb.Message.setOneofWrapperField = function (e, t, r, n) {
          e.wrappers_ || (e.wrappers_ = {});
          var o = n && n.toArray();
          (e.wrappers_[t] = n), jspb.Message.setOneofField(e, t, r, o);
        }),
        (jspb.Message.setRepeatedWrapperField = function (e, t, r) {
          e.wrappers_ || (e.wrappers_ = {}), (r = r || []);
          for (var n = [], o = 0; o < r.length; o++) n[o] = r[o].toArray();
          (e.wrappers_[t] = r), jspb.Message.setField(e, t, n);
        }),
        (jspb.Message.addToRepeatedWrapperField = function (e, t, r, n, o) {
          jspb.Message.wrapRepeatedField_(e, n, t);
          var i = (i = e.wrappers_[t]) || (e.wrappers_[t] = []);
          return (
            (r = r || new n()),
            (e = jspb.Message.getRepeatedField(e, t)),
            null != o
              ? (i.splice(o, 0, r), e.splice(o, 0, r.toArray()))
              : (i.push(r), e.push(r.toArray())),
            r
          );
        }),
        (jspb.Message.toMap = function (e, t, r, n) {
          for (var o = {}, i = 0; i < e.length; i++)
            o[t.call(e[i])] = r ? r.call(e[i], n, e[i]) : e[i];
          return o;
        }),
        (jspb.Message.prototype.syncMapFields_ = function () {
          if (this.wrappers_)
            for (var e in this.wrappers_) {
              var t = this.wrappers_[e];
              if (goog.isArray(t))
                for (var r = 0; r < t.length; r++) t[r] && t[r].toArray();
              else t && t.toArray();
            }
        }),
        (jspb.Message.prototype.toArray = function () {
          return this.syncMapFields_(), this.array;
        }),
        jspb.Message.GENERATE_TO_STRING &&
          (jspb.Message.prototype.toString = function () {
            return this.syncMapFields_(), this.array.toString();
          }),
        (jspb.Message.prototype.getExtension = function (t) {
          if (this.extensionObject_) {
            this.wrappers_ || (this.wrappers_ = {});
            var e = t.fieldIndex;
            if (t.isRepeated) {
              if (t.isMessageType())
                return (
                  this.wrappers_[e] ||
                    (this.wrappers_[e] = goog.array.map(
                      this.extensionObject_[e] || [],
                      function (e) {
                        return new t.ctor(e);
                      }
                    )),
                  this.wrappers_[e]
                );
            } else if (t.isMessageType())
              return (
                !this.wrappers_[e] &&
                  this.extensionObject_[e] &&
                  (this.wrappers_[e] = new t.ctor(this.extensionObject_[e])),
                this.wrappers_[e]
              );
            return this.extensionObject_[e];
          }
        }),
        (jspb.Message.prototype.setExtension = function (e, t) {
          this.wrappers_ || (this.wrappers_ = {}),
            jspb.Message.maybeInitEmptyExtensionObject_(this);
          var r = e.fieldIndex;
          return (
            e.isRepeated
              ? ((t = t || []),
                e.isMessageType()
                  ? ((this.wrappers_[r] = t),
                    (this.extensionObject_[r] = goog.array.map(t, function (e) {
                      return e.toArray();
                    })))
                  : (this.extensionObject_[r] = t))
              : e.isMessageType()
              ? ((this.wrappers_[r] = t),
                (this.extensionObject_[r] = t && t.toArray()))
              : (this.extensionObject_[r] = t),
            this
          );
        }),
        (jspb.Message.difference = function (e, t) {
          if (!(e instanceof t.constructor))
            throw Error("Messages have different types.");
          var r = e.toArray(),
            n = t.toArray(),
            o = [],
            i = 0,
            a = (r.length > n.length ? r : n).length;
          for (
            e.getJsPbMessageId() && ((o[0] = e.getJsPbMessageId()), (i = 1));
            i < a;
            i++
          )
            jspb.Message.compareFields(r[i], n[i]) || (o[i] = n[i]);
          return new e.constructor(o);
        }),
        (jspb.Message.equals = function (e, t) {
          return (
            e == t ||
            (!(!e || !t) &&
              e instanceof t.constructor &&
              jspb.Message.compareFields(e.toArray(), t.toArray()))
          );
        }),
        (jspb.Message.compareExtensions = function (e, t) {
          t = t || {};
          var r,
            n = {};
          for (r in (e = e || {})) n[r] = 0;
          for (r in t) n[r] = 0;
          for (r in n) if (!jspb.Message.compareFields(e[r], t[r])) return !1;
          return !0;
        }),
        (jspb.Message.compareFields = function (e, t) {
          if (e == t) return !0;
          if (!goog.isObject(e) || !goog.isObject(t))
            return (
              !!(
                (goog.isNumber(e) && isNaN(e)) ||
                (goog.isNumber(t) && isNaN(t))
              ) && String(e) == String(t)
            );
          if (e.constructor != t.constructor) return !1;
          if (
            jspb.Message.SUPPORTS_UINT8ARRAY_ &&
            e.constructor === Uint8Array
          ) {
            if (e.length != t.length) return !1;
            for (var r = 0; r < e.length; r++) if (e[r] != t[r]) return !1;
            return !0;
          }
          if (e.constructor === Array) {
            for (
              var n = void 0,
                o = void 0,
                i = Math.max(e.length, t.length),
                r = 0;
              r < i;
              r++
            ) {
              var a = e[r],
                s = t[r];
              if (
                (a &&
                  a.constructor == Object &&
                  (goog.asserts.assert(void 0 === n),
                  goog.asserts.assert(r === e.length - 1),
                  (n = a),
                  (a = void 0)),
                s &&
                  s.constructor == Object &&
                  (goog.asserts.assert(void 0 === o),
                  goog.asserts.assert(r === t.length - 1),
                  (o = s),
                  (s = void 0)),
                !jspb.Message.compareFields(a, s))
              )
                return !1;
            }
            return (
              (!n && !o) ||
              jspb.Message.compareExtensions((n = n || {}), (o = o || {}))
            );
          }
          if (e.constructor === Object)
            return jspb.Message.compareExtensions(e, t);
          throw Error("Invalid type in JSPB array");
        }),
        (jspb.Message.prototype.cloneMessage = function () {
          return jspb.Message.cloneMessage(this);
        }),
        (jspb.Message.prototype.clone = function () {
          return jspb.Message.cloneMessage(this);
        }),
        (jspb.Message.clone = function (e) {
          return jspb.Message.cloneMessage(e);
        }),
        (jspb.Message.cloneMessage = function (e) {
          return new e.constructor(jspb.Message.clone_(e.toArray()));
        }),
        (jspb.Message.copyInto = function (e, t) {
          goog.asserts.assertInstanceof(e, jspb.Message),
            goog.asserts.assertInstanceof(t, jspb.Message),
            goog.asserts.assert(
              e.constructor == t.constructor,
              "Copy source and target message should have the same type."
            );
          for (
            var e = jspb.Message.clone(e),
              r = t.toArray(),
              n = e.toArray(),
              o = (r.length = 0);
            o < n.length;
            o++
          )
            r[o] = n[o];
          (t.wrappers_ = e.wrappers_),
            (t.extensionObject_ = e.extensionObject_);
        }),
        (jspb.Message.clone_ = function (e) {
          var t;
          if (goog.isArray(e)) {
            for (var r = Array(e.length), n = 0; n < e.length; n++)
              null != (t = e[n]) &&
                (r[n] =
                  "object" == typeof t
                    ? jspb.Message.clone_(goog.asserts.assert(t))
                    : t);
            return r;
          }
          if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array)
            return new Uint8Array(e);
          for (n in ((r = {}), e))
            (t = e[n]),
              null != t &&
                (r[n] =
                  "object" == typeof t
                    ? jspb.Message.clone_(goog.asserts.assert(t))
                    : t);
          return r;
        }),
        (jspb.Message.registerMessageType = function (e, t) {
          (jspb.Message.registry_[e] = t).messageId = e;
        }),
        (jspb.Message.registry_ = {}),
        (jspb.Message.messageSetExtensions = {}),
        (jspb.Message.messageSetExtensionsBinary = {}),
        (jspb.arith = {}),
        (jspb.arith.UInt64 = function (e, t) {
          (this.lo = e), (this.hi = t);
        }),
        (jspb.arith.UInt64.prototype.cmp = function (e) {
          return this.hi < e.hi || (this.hi == e.hi && this.lo < e.lo)
            ? -1
            : this.hi == e.hi && this.lo == e.lo
            ? 0
            : 1;
        }),
        (jspb.arith.UInt64.prototype.rightShift = function () {
          return new jspb.arith.UInt64(
            ((this.lo >>> 1) | ((1 & this.hi) << 31)) >>> 0,
            (this.hi >>> 1) >>> 0
          );
        }),
        (jspb.arith.UInt64.prototype.leftShift = function () {
          return new jspb.arith.UInt64(
            (this.lo << 1) >>> 0,
            ((this.hi << 1) | (this.lo >>> 31)) >>> 0
          );
        }),
        (jspb.arith.UInt64.prototype.msb = function () {
          return !!(2147483648 & this.hi);
        }),
        (jspb.arith.UInt64.prototype.lsb = function () {
          return !!(1 & this.lo);
        }),
        (jspb.arith.UInt64.prototype.zero = function () {
          return 0 == this.lo && 0 == this.hi;
        }),
        (jspb.arith.UInt64.prototype.add = function (e) {
          return new jspb.arith.UInt64(
            (((this.lo + e.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi + e.hi) & 4294967295) >>> 0) +
              (4294967296 <= this.lo + e.lo ? 1 : 0)) >>>
              0
          );
        }),
        (jspb.arith.UInt64.prototype.sub = function (e) {
          return new jspb.arith.UInt64(
            (((this.lo - e.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi - e.hi) & 4294967295) >>> 0) -
              (this.lo - e.lo < 0 ? 1 : 0)) >>>
              0
          );
        }),
        (jspb.arith.UInt64.mul32x32 = function (e, t) {
          for (
            var r = e >>> 16,
              n = 65535 & t,
              t = t >>> 16,
              o =
                (i = 65535 & e) * n +
                65536 * ((i * t) & 65535) +
                65536 * ((r * n) & 65535),
              i = r * t + ((i * t) >>> 16) + ((r * n) >>> 16);
            4294967296 <= o;

          )
            (o -= 4294967296), (i += 1);
          return new jspb.arith.UInt64(o >>> 0, i >>> 0);
        }),
        (jspb.arith.UInt64.prototype.mul = function (e) {
          var t = jspb.arith.UInt64.mul32x32(this.lo, e);
          return (
            ((e = jspb.arith.UInt64.mul32x32(this.hi, e)).hi = e.lo),
            (e.lo = 0),
            t.add(e)
          );
        }),
        (jspb.arith.UInt64.prototype.div = function (e) {
          if (0 == e) return [];
          var t = new jspb.arith.UInt64(0, 0),
            r = new jspb.arith.UInt64(this.lo, this.hi);
          e = new jspb.arith.UInt64(e, 0);
          for (var n = new jspb.arith.UInt64(1, 0); !e.msb(); )
            (e = e.leftShift()), (n = n.leftShift());
          for (; !n.zero(); )
            e.cmp(r) <= 0 && ((t = t.add(n)), (r = r.sub(e))),
              (e = e.rightShift()),
              (n = n.rightShift());
          return [t, r];
        }),
        (jspb.arith.UInt64.prototype.toString = function () {
          for (var e = "", t = this; !t.zero(); )
            var r = (t = t.div(10))[0], e = t[1].lo + e, t = r;
          return (e = "" == e ? "0" : e);
        }),
        (jspb.arith.UInt64.fromString = function (e) {
          for (
            var t = new jspb.arith.UInt64(0, 0),
              r = new jspb.arith.UInt64(0, 0),
              n = 0;
            n < e.length;
            n++
          ) {
            if (e[n] < "0" || "9" < e[n]) return null;
            var o = parseInt(e[n], 10);
            (r.lo = o), (t = t.mul(10).add(r));
          }
          return t;
        }),
        (jspb.arith.UInt64.prototype.clone = function () {
          return new jspb.arith.UInt64(this.lo, this.hi);
        }),
        (jspb.arith.Int64 = function (e, t) {
          (this.lo = e), (this.hi = t);
        }),
        (jspb.arith.Int64.prototype.add = function (e) {
          return new jspb.arith.Int64(
            (((this.lo + e.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi + e.hi) & 4294967295) >>> 0) +
              (4294967296 <= this.lo + e.lo ? 1 : 0)) >>>
              0
          );
        }),
        (jspb.arith.Int64.prototype.sub = function (e) {
          return new jspb.arith.Int64(
            (((this.lo - e.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi - e.hi) & 4294967295) >>> 0) -
              (this.lo - e.lo < 0 ? 1 : 0)) >>>
              0
          );
        }),
        (jspb.arith.Int64.prototype.clone = function () {
          return new jspb.arith.Int64(this.lo, this.hi);
        }),
        (jspb.arith.Int64.prototype.toString = function () {
          var e = 0 != (2147483648 & this.hi),
            t = new jspb.arith.UInt64(this.lo, this.hi);
          return (
            (e ? "-" : "") +
            (t = e ? new jspb.arith.UInt64(0, 0).sub(t) : t).toString()
          );
        }),
        (jspb.arith.Int64.fromString = function (e) {
          var t = 0 < e.length && "-" == e[0];
          return (
            t && (e = e.substring(1)),
            null === (e = jspb.arith.UInt64.fromString(e))
              ? null
              : (t && (e = new jspb.arith.UInt64(0, 0).sub(e)),
                new jspb.arith.Int64(e.lo, e.hi))
          );
        }),
        (jspb.BinaryConstants = {}),
        (jspb.ConstBinaryMessage = function () {}),
        (jspb.BinaryMessage = function () {}),
        (jspb.BinaryConstants.FieldType = {
          INVALID: -1,
          DOUBLE: 1,
          FLOAT: 2,
          INT64: 3,
          UINT64: 4,
          INT32: 5,
          FIXED64: 6,
          FIXED32: 7,
          BOOL: 8,
          STRING: 9,
          GROUP: 10,
          MESSAGE: 11,
          BYTES: 12,
          UINT32: 13,
          ENUM: 14,
          SFIXED32: 15,
          SFIXED64: 16,
          SINT32: 17,
          SINT64: 18,
          FHASH64: 30,
          VHASH64: 31,
        }),
        (jspb.BinaryConstants.WireType = {
          INVALID: -1,
          VARINT: 0,
          FIXED64: 1,
          DELIMITED: 2,
          START_GROUP: 3,
          END_GROUP: 4,
          FIXED32: 5,
        }),
        (jspb.BinaryConstants.FieldTypeToWireType = function (e) {
          var t = jspb.BinaryConstants.FieldType,
            r = jspb.BinaryConstants.WireType;
          switch (e) {
            case t.INT32:
            case t.INT64:
            case t.UINT32:
            case t.UINT64:
            case t.SINT32:
            case t.SINT64:
            case t.BOOL:
            case t.ENUM:
            case t.VHASH64:
              return r.VARINT;
            case t.DOUBLE:
            case t.FIXED64:
            case t.SFIXED64:
            case t.FHASH64:
              return r.FIXED64;
            case t.STRING:
            case t.MESSAGE:
            case t.BYTES:
              return r.DELIMITED;
            case t.FLOAT:
            case t.FIXED32:
            case t.SFIXED32:
              return r.FIXED32;
            default:
              return r.INVALID;
          }
        }),
        (jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1),
        (jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60),
        (jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54),
        (jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22),
        (jspb.BinaryConstants.FLOAT64_EPS = 5e-324),
        (jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324),
        (jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292),
        (jspb.BinaryConstants.TWO_TO_20 = 1048576),
        (jspb.BinaryConstants.TWO_TO_23 = 8388608),
        (jspb.BinaryConstants.TWO_TO_31 = 2147483648),
        (jspb.BinaryConstants.TWO_TO_32 = 4294967296),
        (jspb.BinaryConstants.TWO_TO_52 = 4503599627370496),
        (jspb.BinaryConstants.TWO_TO_63 = 0x8000000000000000),
        (jspb.BinaryConstants.TWO_TO_64 = 0x10000000000000000),
        (jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0"),
        (jspb.utils = {}),
        (jspb.utils.split64Low = 0),
        (jspb.utils.split64High = 0),
        (jspb.utils.splitUint64 = function (e) {
          var t = e >>> 0;
          (e = Math.floor((e - t) / jspb.BinaryConstants.TWO_TO_32) >>> 0),
            (jspb.utils.split64Low = t),
            (jspb.utils.split64High = e);
        }),
        (jspb.utils.splitInt64 = function (e) {
          var t = e < 0,
            r = (e = Math.abs(e)) >>> 0;
          (e = Math.floor((e - r) / jspb.BinaryConstants.TWO_TO_32)),
            (e >>>= 0),
            t &&
              ((e = ~e >>> 0),
              4294967295 < (r = 1 + (~r >>> 0)) &&
                ((r = 0), 4294967295 < ++e && (e = 0))),
            (jspb.utils.split64Low = r),
            (jspb.utils.split64High = e);
        }),
        (jspb.utils.splitZigzag64 = function (e) {
          var t = e < 0;
          (e = 2 * Math.abs(e)),
            jspb.utils.splitUint64(e),
            (e = jspb.utils.split64Low);
          var r = jspb.utils.split64High;
          t &&
            (0 == e
              ? 0 == r
                ? (r = e = 4294967295)
                : (r--, (e = 4294967295))
              : e--),
            (jspb.utils.split64Low = e),
            (jspb.utils.split64High = r);
        }),
        (jspb.utils.splitFloat32 = function (e) {
          var t,
            r = e < 0 ? 1 : 0;
          0 === (e = r ? -e : e)
            ? 0 < 1 / e
              ? ((jspb.utils.split64High = 0), (jspb.utils.split64Low = 0))
              : ((jspb.utils.split64High = 0),
                (jspb.utils.split64Low = 2147483648))
            : isNaN(e)
            ? ((jspb.utils.split64High = 0),
              (jspb.utils.split64Low = 2147483647))
            : e > jspb.BinaryConstants.FLOAT32_MAX
            ? ((jspb.utils.split64High = 0),
              (jspb.utils.split64Low = ((r << 31) | 2139095040) >>> 0))
            : e < jspb.BinaryConstants.FLOAT32_MIN
            ? ((e = Math.round(e / Math.pow(2, -149))),
              (jspb.utils.split64High = 0),
              (jspb.utils.split64Low = ((r << 31) | e) >>> 0))
            : ((t = Math.floor(Math.log(e) / Math.LN2)),
              (e *= Math.pow(2, -t)),
              (e = 8388607 & Math.round(e * jspb.BinaryConstants.TWO_TO_23)),
              (jspb.utils.split64High = 0),
              (jspb.utils.split64Low =
                ((r << 31) | ((t + 127) << 23) | e) >>> 0));
        }),
        (jspb.utils.splitFloat64 = function (e) {
          var t,
            r,
            n = e < 0 ? 1 : 0;
          0 === (e = n ? -e : e)
            ? ((jspb.utils.split64High = 0 < 1 / e ? 0 : 2147483648),
              (jspb.utils.split64Low = 0))
            : isNaN(e)
            ? ((jspb.utils.split64High = 2147483647),
              (jspb.utils.split64Low = 4294967295))
            : e > jspb.BinaryConstants.FLOAT64_MAX
            ? ((jspb.utils.split64High = ((n << 31) | 2146435072) >>> 0),
              (jspb.utils.split64Low = 0))
            : e < jspb.BinaryConstants.FLOAT64_MIN
            ? ((e =
                (t = e / Math.pow(2, -1074)) / jspb.BinaryConstants.TWO_TO_32),
              (jspb.utils.split64High = ((n << 31) | e) >>> 0),
              (jspb.utils.split64Low = t >>> 0))
            : (1024 == (r = Math.floor(Math.log(e) / Math.LN2)) && (r = 1023),
              (e =
                ((t = e * Math.pow(2, -r)) * jspb.BinaryConstants.TWO_TO_20) &
                1048575),
              (t = (t * jspb.BinaryConstants.TWO_TO_52) >>> 0),
              (jspb.utils.split64High =
                ((n << 31) | ((r + 1023) << 20) | e) >>> 0),
              (jspb.utils.split64Low = t));
        }),
        (jspb.utils.splitHash64 = function (e) {
          var t = e.charCodeAt(0),
            r = e.charCodeAt(1),
            n = e.charCodeAt(2),
            o = e.charCodeAt(3),
            i = e.charCodeAt(4),
            a = e.charCodeAt(5),
            s = e.charCodeAt(6);
          (e = e.charCodeAt(7)),
            (jspb.utils.split64Low =
              (t + (r << 8) + (n << 16) + (o << 24)) >>> 0),
            (jspb.utils.split64High =
              (i + (a << 8) + (s << 16) + (e << 24)) >>> 0);
        }),
        (jspb.utils.joinUint64 = function (e, t) {
          return t * jspb.BinaryConstants.TWO_TO_32 + e;
        }),
        (jspb.utils.joinInt64 = function (e, t) {
          var r = 2147483648 & t;
          r &&
            ((t = ~t >>> 0), 0 == (e = (1 + ~e) >>> 0) && (t = (t + 1) >>> 0));
          t = jspb.utils.joinUint64(e, t);
          return r ? -t : t;
        }),
        (jspb.utils.joinZigzag64 = function (e, t) {
          var r = 1 & e;
          (e = ((e >>> 1) | (t << 31)) >>> 0),
            (t >>>= 1),
            !r || (0 == (e = (e + 1) >>> 0) && (t = (t + 1) >>> 0));
          t = jspb.utils.joinUint64(e, t);
          return r ? -t : t;
        }),
        (jspb.utils.joinFloat32 = function (e, t) {
          var r = 2 * (e >> 31) + 1,
            n = (e >>> 23) & 255,
            e = 8388607 & e;
          return 255 == n
            ? e
              ? NaN
              : (1 / 0) * r
            : 0 == n
            ? r * Math.pow(2, -149) * e
            : r * Math.pow(2, n - 150) * (e + Math.pow(2, 23));
        }),
        (jspb.utils.joinFloat64 = function (e, t) {
          var r = 2 * (t >> 31) + 1,
            n = (t >>> 20) & 2047,
            e = jspb.BinaryConstants.TWO_TO_32 * (1048575 & t) + e;
          return 2047 == n
            ? e
              ? NaN
              : (1 / 0) * r
            : 0 == n
            ? r * Math.pow(2, -1074) * e
            : r * Math.pow(2, n - 1075) * (e + jspb.BinaryConstants.TWO_TO_52);
        }),
        (jspb.utils.joinHash64 = function (e, t) {
          return String.fromCharCode(
            (e >>> 0) & 255,
            (e >>> 8) & 255,
            (e >>> 16) & 255,
            (e >>> 24) & 255,
            (t >>> 0) & 255,
            (t >>> 8) & 255,
            (t >>> 16) & 255,
            (t >>> 24) & 255
          );
        }),
        (jspb.utils.DIGITS = "0123456789abcdef".split("")),
        (jspb.utils.joinUnsignedDecimalString = function (e, t) {
          function r(e) {
            for (var t = 1e7, r = 0; r < 7; r++) {
              var n = (e / (t = t / 10)) % 10 >>> 0;
              (0 == n && !i) || ((i = !0), (a += o[n]));
            }
          }
          if (t <= 2097151)
            return "" + (jspb.BinaryConstants.TWO_TO_32 * t + e);
          var t =
              (16777215 & e) +
              6777216 * (n = (((e >>> 24) | (t << 8)) >>> 0) & 16777215) +
              6710656 * (e = (t >> 16) & 65535),
            n = n + 8147497 * e,
            e = 2 * e;
          1e7 <= t && ((n += Math.floor(t / 1e7)), (t %= 1e7)),
            1e7 <= n && ((e += Math.floor(n / 1e7)), (n %= 1e7));
          var o = jspb.utils.DIGITS,
            i = !1,
            a = "";
          return (e || i) && r(e), (n || i) && r(n), (t || i) && r(t), a;
        }),
        (jspb.utils.joinSignedDecimalString = function (e, t) {
          var r = 2147483648 & t;
          r && (t = (~t + (0 == (e = (1 + ~e) >>> 0) ? 1 : 0)) >>> 0);
          t = jspb.utils.joinUnsignedDecimalString(e, t);
          return r ? "-" + t : t;
        }),
        (jspb.utils.hash64ToDecimalString = function (e, t) {
          jspb.utils.splitHash64(e);
          var r = jspb.utils.split64Low,
            e = jspb.utils.split64High;
          return t
            ? jspb.utils.joinSignedDecimalString(r, e)
            : jspb.utils.joinUnsignedDecimalString(r, e);
        }),
        (jspb.utils.hash64ArrayToDecimalStrings = function (e, t) {
          for (var r = Array(e.length), n = 0; n < e.length; n++)
            r[n] = jspb.utils.hash64ToDecimalString(e[n], t);
          return r;
        }),
        (jspb.utils.decimalStringToHash64 = function (e) {
          function t(e, t) {
            for (var r = 0; r < 8 && (1 !== e || 0 < t); r++) {
              var n = e * o[r] + t;
              (o[r] = 255 & n), (t = n >>> 8);
            }
          }
          goog.asserts.assert(0 < e.length);
          var r = !1;
          "-" === e[0] && ((r = !0), (e = e.slice(1)));
          for (var o = [0, 0, 0, 0, 0, 0, 0, 0], n = 0; n < e.length; n++)
            t(10, jspb.utils.DIGITS.indexOf(e[n]));
          return (
            r &&
              ((function () {
                for (var e = 0; e < 8; e++) o[e] = 255 & ~o[e];
              })(),
              t(1, 1)),
            goog.crypt.byteArrayToString(o)
          );
        }),
        (jspb.utils.splitDecimalString = function (e) {
          jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e));
        }),
        (jspb.utils.hash64ToHexString = function (e) {
          var t = Array(18);
          (t[0] = "0"), (t[1] = "x");
          for (var r = 0; r < 8; r++) {
            var n = e.charCodeAt(7 - r);
            (t[2 * r + 2] = jspb.utils.DIGITS[n >> 4]),
              (t[2 * r + 3] = jspb.utils.DIGITS[15 & n]);
          }
          return t.join("");
        }),
        (jspb.utils.hexStringToHash64 = function (e) {
          (e = e.toLowerCase()),
            goog.asserts.assert(18 == e.length),
            goog.asserts.assert("0" == e[0]),
            goog.asserts.assert("x" == e[1]);
          for (var t = "", r = 0; r < 8; r++)
            var n = jspb.utils.DIGITS.indexOf(e[2 * r + 2]),
              o = jspb.utils.DIGITS.indexOf(e[2 * r + 3]),
              t = String.fromCharCode(16 * n + o) + t;
          return t;
        }),
        (jspb.utils.hash64ToNumber = function (e, t) {
          jspb.utils.splitHash64(e);
          var r = jspb.utils.split64Low,
            e = jspb.utils.split64High;
          return t ? jspb.utils.joinInt64(r, e) : jspb.utils.joinUint64(r, e);
        }),
        (jspb.utils.numberToHash64 = function (e) {
          return (
            jspb.utils.splitInt64(e),
            jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High)
          );
        }),
        (jspb.utils.countVarints = function (e, t, r) {
          for (var n = 0, o = t; o < r; o++) n += e[o] >> 7;
          return r - t - n;
        }),
        (jspb.utils.countVarintFields = function (e, t, r, n) {
          var o = 0;
          if ((n = 8 * n + jspb.BinaryConstants.WireType.VARINT) < 128)
            for (; t < r && e[t++] == n; )
              for (o++; ; ) {
                var i = e[t++];
                if (0 == (128 & i)) break;
              }
          else
            for (; t < r; ) {
              for (i = n; 128 < i; ) {
                if (e[t] != ((127 & i) | 128)) return o;
                t++, (i >>= 7);
              }
              if (e[t++] != i) break;
              for (o++; 0 != (128 & (i = e[t++])); );
            }
          return o;
        }),
        (jspb.utils.countFixedFields_ = function (e, t, r, n, o) {
          var i = 0;
          if (n < 128) for (; t < r && e[t++] == n; ) i++, (t += o);
          else
            for (; t < r; ) {
              for (var a = n; 128 < a; ) {
                if (e[t++] != ((127 & a) | 128)) return i;
                a >>= 7;
              }
              if (e[t++] != a) break;
              i++, (t += o);
            }
          return i;
        }),
        (jspb.utils.countFixed32Fields = function (e, t, r, n) {
          return jspb.utils.countFixedFields_(
            e,
            t,
            r,
            8 * n + jspb.BinaryConstants.WireType.FIXED32,
            4
          );
        }),
        (jspb.utils.countFixed64Fields = function (e, t, r, n) {
          return jspb.utils.countFixedFields_(
            e,
            t,
            r,
            8 * n + jspb.BinaryConstants.WireType.FIXED64,
            8
          );
        }),
        (jspb.utils.countDelimitedFields = function (e, t, r, n) {
          var o = 0;
          for (n = 8 * n + jspb.BinaryConstants.WireType.DELIMITED; t < r; ) {
            for (var i = n; 128 < i; ) {
              if (e[t++] != ((127 & i) | 128)) return o;
              i >>= 7;
            }
            if (e[t++] != i) break;
            o++;
            for (
              var a = 0, s = 1;
              (a += (127 & (i = e[t++])) * s), (s *= 128), 0 != (128 & i);

            );
            t += a;
          }
          return o;
        }),
        (jspb.utils.debugBytesToTextFormat = function (e) {
          var t = '"';
          if (e) {
            e = jspb.utils.byteSourceToUint8Array(e);
            for (var r = 0; r < e.length; r++)
              (t += "\\x"), e[r] < 16 && (t += "0"), (t += e[r].toString(16));
          }
          return t + '"';
        }),
        (jspb.utils.debugScalarToTextFormat = function (e) {
          return goog.isString(e) ? goog.string.quote(e) : e.toString();
        }),
        (jspb.utils.stringToByteArray = function (e) {
          for (var t = new Uint8Array(e.length), r = 0; r < e.length; r++) {
            var n = e.charCodeAt(r);
            if (255 < n)
              throw Error(
                "Conversion error: string contains codepoint outside of byte range"
              );
            t[r] = n;
          }
          return t;
        }),
        (jspb.utils.byteSourceToUint8Array = function (e) {
          return e.constructor === Uint8Array
            ? e
            : e.constructor === ArrayBuffer ||
              e.constructor === Buffer ||
              e.constructor === Array
            ? new Uint8Array(e)
            : e.constructor === String
            ? goog.crypt.base64.decodeStringToUint8Array(e)
            : (goog.asserts.fail("Type not convertible to Uint8Array."),
              new Uint8Array(0));
        }),
        (jspb.BinaryEncoder = function () {
          this.buffer_ = [];
        }),
        (jspb.BinaryEncoder.prototype.length = function () {
          return this.buffer_.length;
        }),
        (jspb.BinaryEncoder.prototype.end = function () {
          var e = this.buffer_;
          return (this.buffer_ = []), e;
        }),
        (jspb.BinaryEncoder.prototype.writeSplitVarint64 = function (e, t) {
          for (
            goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(t == Math.floor(t)),
              goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
              goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32);
            0 < t || 127 < e;

          )
            this.buffer_.push((127 & e) | 128),
              (e = ((e >>> 7) | (t << 25)) >>> 0),
              (t >>>= 7);
          this.buffer_.push(e);
        }),
        (jspb.BinaryEncoder.prototype.writeSplitFixed64 = function (e, t) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(t == Math.floor(t)),
            goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
            goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
            this.writeUint32(e),
            this.writeUint32(t);
        }),
        (jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function (e) {
          for (
            goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32);
            127 < e;

          )
            this.buffer_.push((127 & e) | 128), (e >>>= 7);
          this.buffer_.push(e);
        }),
        (jspb.BinaryEncoder.prototype.writeSignedVarint32 = function (e) {
          if (
            (goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_31 &&
                e < jspb.BinaryConstants.TWO_TO_31
            ),
            0 <= e)
          )
            this.writeUnsignedVarint32(e);
          else {
            for (var t = 0; t < 9; t++)
              this.buffer_.push((127 & e) | 128), (e >>= 7);
            this.buffer_.push(1);
          }
        }),
        (jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function (e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64),
            jspb.utils.splitInt64(e),
            this.writeSplitVarint64(
              jspb.utils.split64Low,
              jspb.utils.split64High
            );
        }),
        (jspb.BinaryEncoder.prototype.writeSignedVarint64 = function (e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_63 &&
                e < jspb.BinaryConstants.TWO_TO_63
            ),
            jspb.utils.splitInt64(e),
            this.writeSplitVarint64(
              jspb.utils.split64Low,
              jspb.utils.split64High
            );
        }),
        (jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function (e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_31 &&
                e < jspb.BinaryConstants.TWO_TO_31
            ),
            this.writeUnsignedVarint32(((e << 1) ^ (e >> 31)) >>> 0);
        }),
        (jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function (e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_63 &&
                e < jspb.BinaryConstants.TWO_TO_63
            ),
            jspb.utils.splitZigzag64(e),
            this.writeSplitVarint64(
              jspb.utils.split64Low,
              jspb.utils.split64High
            );
        }),
        (jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function (e) {
          this.writeZigzagVarint64(parseInt(e, 10));
        }),
        (jspb.BinaryEncoder.prototype.writeUint8 = function (e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(0 <= e && e < 256),
            this.buffer_.push((e >>> 0) & 255);
        }),
        (jspb.BinaryEncoder.prototype.writeUint16 = function (e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(0 <= e && e < 65536),
            this.buffer_.push((e >>> 0) & 255),
            this.buffer_.push((e >>> 8) & 255);
        }),
        (jspb.BinaryEncoder.prototype.writeUint32 = function (e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
            this.buffer_.push((e >>> 0) & 255),
            this.buffer_.push((e >>> 8) & 255),
            this.buffer_.push((e >>> 16) & 255),
            this.buffer_.push((e >>> 24) & 255);
        }),
        (jspb.BinaryEncoder.prototype.writeUint64 = function (e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64),
            jspb.utils.splitUint64(e),
            this.writeUint32(jspb.utils.split64Low),
            this.writeUint32(jspb.utils.split64High);
        }),
        (jspb.BinaryEncoder.prototype.writeInt8 = function (e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(-128 <= e && e < 128),
            this.buffer_.push((e >>> 0) & 255);
        }),
        (jspb.BinaryEncoder.prototype.writeInt16 = function (e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(-32768 <= e && e < 32768),
            this.buffer_.push((e >>> 0) & 255),
            this.buffer_.push((e >>> 8) & 255);
        }),
        (jspb.BinaryEncoder.prototype.writeInt32 = function (e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_31 &&
                e < jspb.BinaryConstants.TWO_TO_31
            ),
            this.buffer_.push((e >>> 0) & 255),
            this.buffer_.push((e >>> 8) & 255),
            this.buffer_.push((e >>> 16) & 255),
            this.buffer_.push((e >>> 24) & 255);
        }),
        (jspb.BinaryEncoder.prototype.writeInt64 = function (e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_63 &&
                e < jspb.BinaryConstants.TWO_TO_63
            ),
            jspb.utils.splitInt64(e),
            this.writeSplitFixed64(
              jspb.utils.split64Low,
              jspb.utils.split64High
            );
        }),
        (jspb.BinaryEncoder.prototype.writeInt64String = function (e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(
              +e >= -jspb.BinaryConstants.TWO_TO_63 &&
                +e < jspb.BinaryConstants.TWO_TO_63
            ),
            jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e)),
            this.writeSplitFixed64(
              jspb.utils.split64Low,
              jspb.utils.split64High
            );
        }),
        (jspb.BinaryEncoder.prototype.writeFloat = function (e) {
          goog.asserts.assert(
            e >= -jspb.BinaryConstants.FLOAT32_MAX &&
              e <= jspb.BinaryConstants.FLOAT32_MAX
          ),
            jspb.utils.splitFloat32(e),
            this.writeUint32(jspb.utils.split64Low);
        }),
        (jspb.BinaryEncoder.prototype.writeDouble = function (e) {
          goog.asserts.assert(
            e >= -jspb.BinaryConstants.FLOAT64_MAX &&
              e <= jspb.BinaryConstants.FLOAT64_MAX
          ),
            jspb.utils.splitFloat64(e),
            this.writeUint32(jspb.utils.split64Low),
            this.writeUint32(jspb.utils.split64High);
        }),
        (jspb.BinaryEncoder.prototype.writeBool = function (e) {
          goog.asserts.assert(goog.isBoolean(e) || goog.isNumber(e)),
            this.buffer_.push(e ? 1 : 0);
        }),
        (jspb.BinaryEncoder.prototype.writeEnum = function (e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_31 &&
                e < jspb.BinaryConstants.TWO_TO_31
            ),
            this.writeSignedVarint32(e);
        }),
        (jspb.BinaryEncoder.prototype.writeBytes = function (e) {
          this.buffer_.push.apply(this.buffer_, e);
        }),
        (jspb.BinaryEncoder.prototype.writeVarintHash64 = function (e) {
          jspb.utils.splitHash64(e),
            this.writeSplitVarint64(
              jspb.utils.split64Low,
              jspb.utils.split64High
            );
        }),
        (jspb.BinaryEncoder.prototype.writeFixedHash64 = function (e) {
          jspb.utils.splitHash64(e),
            this.writeUint32(jspb.utils.split64Low),
            this.writeUint32(jspb.utils.split64High);
        }),
        (jspb.BinaryEncoder.prototype.writeString = function (e) {
          for (var t = this.buffer_.length, r = 0; r < e.length; r++) {
            var n,
              o = e.charCodeAt(r);
            o < 128
              ? this.buffer_.push(o)
              : o < 2048
              ? (this.buffer_.push((o >> 6) | 192),
                this.buffer_.push((63 & o) | 128))
              : o < 65536 &&
                (55296 <= o && o <= 56319 && r + 1 < e.length
                  ? 56320 <= (n = e.charCodeAt(r + 1)) &&
                    n <= 57343 &&
                    (this.buffer_.push(
                      ((o = 1024 * (o - 55296) + n - 56320 + 65536) >> 18) | 240
                    ),
                    this.buffer_.push(((o >> 12) & 63) | 128),
                    this.buffer_.push(((o >> 6) & 63) | 128),
                    this.buffer_.push((63 & o) | 128),
                    r++)
                  : (this.buffer_.push((o >> 12) | 224),
                    this.buffer_.push(((o >> 6) & 63) | 128),
                    this.buffer_.push((63 & o) | 128)));
          }
          return this.buffer_.length - t;
        }),
        (jspb.BinaryWriter = function () {
          (this.blocks_ = []),
            (this.totalLength_ = 0),
            (this.encoder_ = new jspb.BinaryEncoder()),
            (this.bookmarks_ = []);
        }),
        (jspb.BinaryWriter.prototype.appendUint8Array_ = function (e) {
          var t = this.encoder_.end();
          this.blocks_.push(t),
            this.blocks_.push(e),
            (this.totalLength_ += t.length + e.length);
        }),
        (jspb.BinaryWriter.prototype.beginDelimited_ = function (e) {
          return (
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            (e = this.encoder_.end()),
            this.blocks_.push(e),
            (this.totalLength_ += e.length),
            e.push(this.totalLength_),
            e
          );
        }),
        (jspb.BinaryWriter.prototype.endDelimited_ = function (e) {
          var t = e.pop(),
            t = this.totalLength_ + this.encoder_.length() - t;
          for (goog.asserts.assert(0 <= t); 127 < t; )
            e.push((127 & t) | 128), (t >>>= 7), this.totalLength_++;
          e.push(t), this.totalLength_++;
        }),
        (jspb.BinaryWriter.prototype.writeSerializedMessage = function (
          e,
          t,
          r
        ) {
          this.appendUint8Array_(e.subarray(t, r));
        }),
        (jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function (
          e,
          t,
          r
        ) {
          null != e &&
            null != t &&
            null != r &&
            this.writeSerializedMessage(e, t, r);
        }),
        (jspb.BinaryWriter.prototype.reset = function () {
          (this.blocks_ = []),
            this.encoder_.end(),
            (this.totalLength_ = 0),
            (this.bookmarks_ = []);
        }),
        (jspb.BinaryWriter.prototype.getResultBuffer = function () {
          goog.asserts.assert(0 == this.bookmarks_.length);
          for (
            var e = new Uint8Array(this.totalLength_ + this.encoder_.length()),
              t = this.blocks_,
              r = t.length,
              n = 0,
              o = 0;
            o < r;
            o++
          ) {
            var i = t[o];
            e.set(i, n), (n += i.length);
          }
          return (
            (t = this.encoder_.end()),
            e.set(t, n),
            (n += t.length),
            goog.asserts.assert(n == e.length),
            (this.blocks_ = [e]),
            e
          );
        }),
        (jspb.BinaryWriter.prototype.getResultBase64String = function (e) {
          return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), e);
        }),
        (jspb.BinaryWriter.prototype.beginSubMessage = function (e) {
          this.bookmarks_.push(this.beginDelimited_(e));
        }),
        (jspb.BinaryWriter.prototype.endSubMessage = function () {
          goog.asserts.assert(0 <= this.bookmarks_.length),
            this.endDelimited_(this.bookmarks_.pop());
        }),
        (jspb.BinaryWriter.prototype.writeFieldHeader_ = function (e, t) {
          goog.asserts.assert(1 <= e && e == Math.floor(e)),
            this.encoder_.writeUnsignedVarint32(8 * e + t);
        }),
        (jspb.BinaryWriter.prototype.writeAny = function (e, t, r) {
          var n = jspb.BinaryConstants.FieldType;
          switch (e) {
            case n.DOUBLE:
              this.writeDouble(t, r);
              break;
            case n.FLOAT:
              this.writeFloat(t, r);
              break;
            case n.INT64:
              this.writeInt64(t, r);
              break;
            case n.UINT64:
              this.writeUint64(t, r);
              break;
            case n.INT32:
              this.writeInt32(t, r);
              break;
            case n.FIXED64:
              this.writeFixed64(t, r);
              break;
            case n.FIXED32:
              this.writeFixed32(t, r);
              break;
            case n.BOOL:
              this.writeBool(t, r);
              break;
            case n.STRING:
              this.writeString(t, r);
              break;
            case n.GROUP:
              goog.asserts.fail("Group field type not supported in writeAny()");
              break;
            case n.MESSAGE:
              goog.asserts.fail(
                "Message field type not supported in writeAny()"
              );
              break;
            case n.BYTES:
              this.writeBytes(t, r);
              break;
            case n.UINT32:
              this.writeUint32(t, r);
              break;
            case n.ENUM:
              this.writeEnum(t, r);
              break;
            case n.SFIXED32:
              this.writeSfixed32(t, r);
              break;
            case n.SFIXED64:
              this.writeSfixed64(t, r);
              break;
            case n.SINT32:
              this.writeSint32(t, r);
              break;
            case n.SINT64:
              this.writeSint64(t, r);
              break;
            case n.FHASH64:
              this.writeFixedHash64(t, r);
              break;
            case n.VHASH64:
              this.writeVarintHash64(t, r);
              break;
            default:
              goog.asserts.fail("Invalid field type in writeAny()");
          }
        }),
        (jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function (e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeUnsignedVarint32(t));
        }),
        (jspb.BinaryWriter.prototype.writeSignedVarint32_ = function (e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeSignedVarint32(t));
        }),
        (jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function (e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeUnsignedVarint64(t));
        }),
        (jspb.BinaryWriter.prototype.writeSignedVarint64_ = function (e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeSignedVarint64(t));
        }),
        (jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function (e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeZigzagVarint32(t));
        }),
        (jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function (e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeZigzagVarint64(t));
        }),
        (jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function (
          e,
          t
        ) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeZigzagVarint64String(t));
        }),
        (jspb.BinaryWriter.prototype.writeInt32 = function (e, t) {
          null != t &&
            (goog.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_31 &&
                t < jspb.BinaryConstants.TWO_TO_31
            ),
            this.writeSignedVarint32_(e, t));
        }),
        (jspb.BinaryWriter.prototype.writeInt32String = function (e, t) {
          null != t &&
            ((t = parseInt(t, 10)),
            goog.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_31 &&
                t < jspb.BinaryConstants.TWO_TO_31
            ),
            this.writeSignedVarint32_(e, t));
        }),
        (jspb.BinaryWriter.prototype.writeInt64 = function (e, t) {
          null != t &&
            (goog.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_63 &&
                t < jspb.BinaryConstants.TWO_TO_63
            ),
            this.writeSignedVarint64_(e, t));
        }),
        (jspb.BinaryWriter.prototype.writeInt64String = function (e, t) {
          null != t &&
            ((t = jspb.arith.Int64.fromString(t)),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeSplitVarint64(t.lo, t.hi));
        }),
        (jspb.BinaryWriter.prototype.writeUint32 = function (e, t) {
          null != t &&
            (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
            this.writeUnsignedVarint32_(e, t));
        }),
        (jspb.BinaryWriter.prototype.writeUint32String = function (e, t) {
          null != t &&
            ((t = parseInt(t, 10)),
            goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
            this.writeUnsignedVarint32_(e, t));
        }),
        (jspb.BinaryWriter.prototype.writeUint64 = function (e, t) {
          null != t &&
            (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64),
            this.writeUnsignedVarint64_(e, t));
        }),
        (jspb.BinaryWriter.prototype.writeUint64String = function (e, t) {
          null != t &&
            ((t = jspb.arith.UInt64.fromString(t)),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeSplitVarint64(t.lo, t.hi));
        }),
        (jspb.BinaryWriter.prototype.writeSint32 = function (e, t) {
          null != t &&
            (goog.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_31 &&
                t < jspb.BinaryConstants.TWO_TO_31
            ),
            this.writeZigzagVarint32_(e, t));
        }),
        (jspb.BinaryWriter.prototype.writeSint64 = function (e, t) {
          null != t &&
            (goog.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_63 &&
                t < jspb.BinaryConstants.TWO_TO_63
            ),
            this.writeZigzagVarint64_(e, t));
        }),
        (jspb.BinaryWriter.prototype.writeSint64String = function (e, t) {
          null != t &&
            (goog.asserts.assert(
              +t >= -jspb.BinaryConstants.TWO_TO_63 &&
                +t < jspb.BinaryConstants.TWO_TO_63
            ),
            this.writeZigzagVarint64String_(e, t));
        }),
        (jspb.BinaryWriter.prototype.writeFixed32 = function (e, t) {
          null != t &&
            (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
            this.encoder_.writeUint32(t));
        }),
        (jspb.BinaryWriter.prototype.writeFixed64 = function (e, t) {
          null != t &&
            (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
            this.encoder_.writeUint64(t));
        }),
        (jspb.BinaryWriter.prototype.writeFixed64String = function (e, t) {
          null != t &&
            ((t = jspb.arith.UInt64.fromString(t)),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
            this.encoder_.writeSplitFixed64(t.lo, t.hi));
        }),
        (jspb.BinaryWriter.prototype.writeSfixed32 = function (e, t) {
          null != t &&
            (goog.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_31 &&
                t < jspb.BinaryConstants.TWO_TO_31
            ),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
            this.encoder_.writeInt32(t));
        }),
        (jspb.BinaryWriter.prototype.writeSfixed64 = function (e, t) {
          null != t &&
            (goog.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_63 &&
                t < jspb.BinaryConstants.TWO_TO_63
            ),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
            this.encoder_.writeInt64(t));
        }),
        (jspb.BinaryWriter.prototype.writeSfixed64String = function (e, t) {
          null != t &&
            ((t = jspb.arith.Int64.fromString(t)),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
            this.encoder_.writeSplitFixed64(t.lo, t.hi));
        }),
        (jspb.BinaryWriter.prototype.writeFloat = function (e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
            this.encoder_.writeFloat(t));
        }),
        (jspb.BinaryWriter.prototype.writeDouble = function (e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
            this.encoder_.writeDouble(t));
        }),
        (jspb.BinaryWriter.prototype.writeBool = function (e, t) {
          null != t &&
            (goog.asserts.assert(goog.isBoolean(t) || goog.isNumber(t)),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeBool(t));
        }),
        (jspb.BinaryWriter.prototype.writeEnum = function (e, t) {
          null != t &&
            (goog.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_31 &&
                t < jspb.BinaryConstants.TWO_TO_31
            ),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeSignedVarint32(t));
        }),
        (jspb.BinaryWriter.prototype.writeString = function (e, t) {
          null != t &&
            ((e = this.beginDelimited_(e)),
            this.encoder_.writeString(t),
            this.endDelimited_(e));
        }),
        (jspb.BinaryWriter.prototype.writeBytes = function (e, t) {
          null != t &&
            ((t = jspb.utils.byteSourceToUint8Array(t)),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(t.length),
            this.appendUint8Array_(t));
        }),
        (jspb.BinaryWriter.prototype.writeMessage = function (e, t, r) {
          null != t &&
            ((e = this.beginDelimited_(e)), r(t, this), this.endDelimited_(e));
        }),
        (jspb.BinaryWriter.prototype.writeGroup = function (e, t, r) {
          null != t &&
            (this.writeFieldHeader_(
              e,
              jspb.BinaryConstants.WireType.START_GROUP
            ),
            r(t, this),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.END_GROUP));
        }),
        (jspb.BinaryWriter.prototype.writeFixedHash64 = function (e, t) {
          null != t &&
            (goog.asserts.assert(8 == t.length),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
            this.encoder_.writeFixedHash64(t));
        }),
        (jspb.BinaryWriter.prototype.writeVarintHash64 = function (e, t) {
          null != t &&
            (goog.asserts.assert(8 == t.length),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeVarintHash64(t));
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedInt32 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeSignedVarint32_(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedInt32String = function (
          e,
          t
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeInt32String(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedInt64 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeSignedVarint64_(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedInt64String = function (
          e,
          t
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeInt64String(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedUint32 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeUnsignedVarint32_(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedUint32String = function (
          e,
          t
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeUint32String(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedUint64 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeUnsignedVarint64_(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedUint64String = function (
          e,
          t
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeUint64String(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedSint32 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeZigzagVarint32_(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedSint64 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeZigzagVarint64_(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedSint64String = function (
          e,
          t
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeZigzagVarint64String_(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeFixed32(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeFixed64(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function (
          e,
          t
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeFixed64String(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeSfixed32(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeSfixed64(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function (
          e,
          t
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeSfixed64String(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedFloat = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeFloat(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedDouble = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeDouble(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedBool = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeBool(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedEnum = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeEnum(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedString = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeString(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedBytes = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeBytes(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedMessage = function (e, t, r) {
          if (null != t)
            for (var n = 0; n < t.length; n++) {
              var o = this.beginDelimited_(e);
              r(t[n], this), this.endDelimited_(o);
            }
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedGroup = function (e, t, r) {
          if (null != t)
            for (var n = 0; n < t.length; n++)
              this.writeFieldHeader_(
                e,
                jspb.BinaryConstants.WireType.START_GROUP
              ),
                r(t[n], this),
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.END_GROUP
                );
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function (
          e,
          t
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeFixedHash64(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function (
          e,
          t
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeVarintHash64(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writePackedInt32 = function (e, t) {
          if (null != t && t.length) {
            for (var e = this.beginDelimited_(e), r = 0; r < t.length; r++)
              this.encoder_.writeSignedVarint32(t[r]);
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedInt32String = function (e, t) {
          if (null != t && t.length) {
            for (var e = this.beginDelimited_(e), r = 0; r < t.length; r++)
              this.encoder_.writeSignedVarint32(parseInt(t[r], 10));
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedInt64 = function (e, t) {
          if (null != t && t.length) {
            for (var e = this.beginDelimited_(e), r = 0; r < t.length; r++)
              this.encoder_.writeSignedVarint64(t[r]);
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedInt64String = function (e, t) {
          if (null != t && t.length) {
            for (var e = this.beginDelimited_(e), r = 0; r < t.length; r++) {
              var n = jspb.arith.Int64.fromString(t[r]);
              this.encoder_.writeSplitVarint64(n.lo, n.hi);
            }
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedUint32 = function (e, t) {
          if (null != t && t.length) {
            for (var e = this.beginDelimited_(e), r = 0; r < t.length; r++)
              this.encoder_.writeUnsignedVarint32(t[r]);
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedUint32String = function (e, t) {
          if (null != t && t.length) {
            for (var e = this.beginDelimited_(e), r = 0; r < t.length; r++)
              this.encoder_.writeUnsignedVarint32(parseInt(t[r], 10));
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedUint64 = function (e, t) {
          if (null != t && t.length) {
            for (var e = this.beginDelimited_(e), r = 0; r < t.length; r++)
              this.encoder_.writeUnsignedVarint64(t[r]);
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedUint64String = function (e, t) {
          if (null != t && t.length) {
            for (var e = this.beginDelimited_(e), r = 0; r < t.length; r++) {
              var n = jspb.arith.UInt64.fromString(t[r]);
              this.encoder_.writeSplitVarint64(n.lo, n.hi);
            }
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedSint32 = function (e, t) {
          if (null != t && t.length) {
            for (var e = this.beginDelimited_(e), r = 0; r < t.length; r++)
              this.encoder_.writeZigzagVarint32(t[r]);
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedSint64 = function (e, t) {
          if (null != t && t.length) {
            for (var e = this.beginDelimited_(e), r = 0; r < t.length; r++)
              this.encoder_.writeZigzagVarint64(t[r]);
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedSint64String = function (e, t) {
          if (null != t && t.length) {
            for (var e = this.beginDelimited_(e), r = 0; r < t.length; r++)
              this.encoder_.writeZigzagVarint64(parseInt(t[r], 10));
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedFixed32 = function (e, t) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(4 * t.length);
            for (var r = 0; r < t.length; r++) this.encoder_.writeUint32(t[r]);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedFixed64 = function (e, t) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * t.length);
            for (var r = 0; r < t.length; r++) this.encoder_.writeUint64(t[r]);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedFixed64String = function (
          e,
          t
        ) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * t.length);
            for (var r = 0; r < t.length; r++) {
              var n = jspb.arith.UInt64.fromString(t[r]);
              this.encoder_.writeSplitFixed64(n.lo, n.hi);
            }
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedSfixed32 = function (e, t) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(4 * t.length);
            for (var r = 0; r < t.length; r++) this.encoder_.writeInt32(t[r]);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedSfixed64 = function (e, t) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * t.length);
            for (var r = 0; r < t.length; r++) this.encoder_.writeInt64(t[r]);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedSfixed64String = function (
          e,
          t
        ) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * t.length);
            for (var r = 0; r < t.length; r++)
              this.encoder_.writeInt64String(t[r]);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedFloat = function (e, t) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(4 * t.length);
            for (var r = 0; r < t.length; r++) this.encoder_.writeFloat(t[r]);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedDouble = function (e, t) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * t.length);
            for (var r = 0; r < t.length; r++) this.encoder_.writeDouble(t[r]);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedBool = function (e, t) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(t.length);
            for (var r = 0; r < t.length; r++) this.encoder_.writeBool(t[r]);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedEnum = function (e, t) {
          if (null != t && t.length) {
            for (var e = this.beginDelimited_(e), r = 0; r < t.length; r++)
              this.encoder_.writeEnum(t[r]);
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedFixedHash64 = function (e, t) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * t.length);
            for (var r = 0; r < t.length; r++)
              this.encoder_.writeFixedHash64(t[r]);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedVarintHash64 = function (e, t) {
          if (null != t && t.length) {
            for (var e = this.beginDelimited_(e), r = 0; r < t.length; r++)
              this.encoder_.writeVarintHash64(t[r]);
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryIterator = function (e, t, r) {
          (this.elements_ = this.nextMethod_ = this.decoder_ = null),
            (this.cursor_ = 0),
            (this.nextValue_ = null),
            (this.atEnd_ = !0),
            this.init_(e, t, r);
        }),
        (jspb.BinaryIterator.prototype.init_ = function (e, t, r) {
          e && t && ((this.decoder_ = e), (this.nextMethod_ = t)),
            (this.elements_ = r || null),
            (this.cursor_ = 0),
            (this.nextValue_ = null),
            (this.atEnd_ = !this.decoder_ && !this.elements_),
            this.next();
        }),
        (jspb.BinaryIterator.instanceCache_ = []),
        (jspb.BinaryIterator.alloc = function (e, t, r) {
          if (jspb.BinaryIterator.instanceCache_.length) {
            var n = jspb.BinaryIterator.instanceCache_.pop();
            return n.init_(e, t, r), n;
          }
          return new jspb.BinaryIterator(e, t, r);
        }),
        (jspb.BinaryIterator.prototype.free = function () {
          this.clear(),
            jspb.BinaryIterator.instanceCache_.length < 100 &&
              jspb.BinaryIterator.instanceCache_.push(this);
        }),
        (jspb.BinaryIterator.prototype.clear = function () {
          this.decoder_ && this.decoder_.free(),
            (this.elements_ = this.nextMethod_ = this.decoder_ = null),
            (this.cursor_ = 0),
            (this.nextValue_ = null),
            (this.atEnd_ = !0);
        }),
        (jspb.BinaryIterator.prototype.get = function () {
          return this.nextValue_;
        }),
        (jspb.BinaryIterator.prototype.atEnd = function () {
          return this.atEnd_;
        }),
        (jspb.BinaryIterator.prototype.next = function () {
          var e = this.nextValue_;
          return (
            this.decoder_
              ? this.decoder_.atEnd()
                ? ((this.nextValue_ = null), (this.atEnd_ = !0))
                : (this.nextValue_ = this.nextMethod_.call(this.decoder_))
              : this.elements_ &&
                (this.cursor_ == this.elements_.length
                  ? ((this.nextValue_ = null), (this.atEnd_ = !0))
                  : (this.nextValue_ = this.elements_[this.cursor_++])),
            e
          );
        }),
        (jspb.BinaryDecoder = function (e, t, r) {
          (this.bytes_ = null),
            (this.tempHigh_ = this.tempLow_ = this.cursor_ = this.end_ = this.start_ = 0),
            (this.error_ = !1),
            e && this.setBlock(e, t, r);
        }),
        (jspb.BinaryDecoder.instanceCache_ = []),
        (jspb.BinaryDecoder.alloc = function (e, t, r) {
          if (jspb.BinaryDecoder.instanceCache_.length) {
            var n = jspb.BinaryDecoder.instanceCache_.pop();
            return e && n.setBlock(e, t, r), n;
          }
          return new jspb.BinaryDecoder(e, t, r);
        }),
        (jspb.BinaryDecoder.prototype.free = function () {
          this.clear(),
            jspb.BinaryDecoder.instanceCache_.length < 100 &&
              jspb.BinaryDecoder.instanceCache_.push(this);
        }),
        (jspb.BinaryDecoder.prototype.clone = function () {
          return jspb.BinaryDecoder.alloc(
            this.bytes_,
            this.start_,
            this.end_ - this.start_
          );
        }),
        (jspb.BinaryDecoder.prototype.clear = function () {
          (this.bytes_ = null),
            (this.cursor_ = this.end_ = this.start_ = 0),
            (this.error_ = !1);
        }),
        (jspb.BinaryDecoder.prototype.getBuffer = function () {
          return this.bytes_;
        }),
        (jspb.BinaryDecoder.prototype.setBlock = function (e, t, r) {
          (this.bytes_ = jspb.utils.byteSourceToUint8Array(e)),
            (this.start_ = goog.isDef(t) ? t : 0),
            (this.end_ = goog.isDef(r) ? this.start_ + r : this.bytes_.length),
            (this.cursor_ = this.start_);
        }),
        (jspb.BinaryDecoder.prototype.getEnd = function () {
          return this.end_;
        }),
        (jspb.BinaryDecoder.prototype.setEnd = function (e) {
          this.end_ = e;
        }),
        (jspb.BinaryDecoder.prototype.reset = function () {
          this.cursor_ = this.start_;
        }),
        (jspb.BinaryDecoder.prototype.getCursor = function () {
          return this.cursor_;
        }),
        (jspb.BinaryDecoder.prototype.setCursor = function (e) {
          this.cursor_ = e;
        }),
        (jspb.BinaryDecoder.prototype.advance = function (e) {
          (this.cursor_ += e), goog.asserts.assert(this.cursor_ <= this.end_);
        }),
        (jspb.BinaryDecoder.prototype.atEnd = function () {
          return this.cursor_ == this.end_;
        }),
        (jspb.BinaryDecoder.prototype.pastEnd = function () {
          return this.cursor_ > this.end_;
        }),
        (jspb.BinaryDecoder.prototype.getError = function () {
          return this.error_ || this.cursor_ < 0 || this.cursor_ > this.end_;
        }),
        (jspb.BinaryDecoder.prototype.readSplitVarint64_ = function () {
          for (var e, t, r = 0, n = 0; n < 4; n++)
            if (
              ((r |= (127 & (e = this.bytes_[this.cursor_++])) << (7 * n)),
              e < 128)
            )
              return (this.tempLow_ = r >>> 0), void (this.tempHigh_ = 0);
          if (
            ((r |= (127 & (e = this.bytes_[this.cursor_++])) << 28),
            (t = 0 | ((127 & e) >> 4)),
            e < 128)
          )
            (this.tempLow_ = r >>> 0), (this.tempHigh_ = t >>> 0);
          else {
            for (n = 0; n < 5; n++)
              if (
                ((t |=
                  (127 & (e = this.bytes_[this.cursor_++])) << (7 * n + 3)),
                e < 128)
              )
                return (
                  (this.tempLow_ = r >>> 0), void (this.tempHigh_ = t >>> 0)
                );
            goog.asserts.fail("Failed to read varint, encoding is invalid."),
              (this.error_ = !0);
          }
        }),
        (jspb.BinaryDecoder.prototype.skipVarint = function () {
          for (; 128 & this.bytes_[this.cursor_]; ) this.cursor_++;
          this.cursor_++;
        }),
        (jspb.BinaryDecoder.prototype.unskipVarint = function (e) {
          for (; 128 < e; ) this.cursor_--, (e >>>= 7);
          this.cursor_--;
        }),
        (jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function () {
          var e = this.bytes_,
            t = e[this.cursor_ + 0],
            r = 127 & t;
          return t < 128
            ? ((this.cursor_ += 1),
              goog.asserts.assert(this.cursor_ <= this.end_),
              r)
            : ((r |= (127 & (t = e[this.cursor_ + 1])) << 7),
              t < 128
                ? ((this.cursor_ += 2),
                  goog.asserts.assert(this.cursor_ <= this.end_),
                  r)
                : ((r |= (127 & (t = e[this.cursor_ + 2])) << 14),
                  t < 128
                    ? ((this.cursor_ += 3),
                      goog.asserts.assert(this.cursor_ <= this.end_),
                      r)
                    : ((r |= (127 & (t = e[this.cursor_ + 3])) << 21),
                      t < 128
                        ? ((this.cursor_ += 4),
                          goog.asserts.assert(this.cursor_ <= this.end_),
                          r)
                        : ((r |= (15 & (t = e[this.cursor_ + 4])) << 28),
                          t < 128
                            ? ((this.cursor_ += 5),
                              goog.asserts.assert(this.cursor_ <= this.end_),
                              r >>> 0)
                            : ((this.cursor_ += 5),
                              128 <= e[this.cursor_++] &&
                                128 <= e[this.cursor_++] &&
                                128 <= e[this.cursor_++] &&
                                128 <= e[this.cursor_++] &&
                                128 <= e[this.cursor_++] &&
                                goog.asserts.assert(!1),
                              goog.asserts.assert(this.cursor_ <= this.end_),
                              r)))));
        }),
        (jspb.BinaryDecoder.prototype.readSignedVarint32 =
          jspb.BinaryDecoder.prototype.readUnsignedVarint32),
        (jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function () {
          return this.readUnsignedVarint32().toString();
        }),
        (jspb.BinaryDecoder.prototype.readSignedVarint32String = function () {
          return this.readSignedVarint32().toString();
        }),
        (jspb.BinaryDecoder.prototype.readZigzagVarint32 = function () {
          var e = this.readUnsignedVarint32();
          return (e >>> 1) ^ -(1 & e);
        }),
        (jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function () {
          return (
            this.readSplitVarint64_(),
            jspb.utils.joinUint64(this.tempLow_, this.tempHigh_)
          );
        }),
        (jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function () {
          return (
            this.readSplitVarint64_(),
            jspb.utils.joinUnsignedDecimalString(this.tempLow_, this.tempHigh_)
          );
        }),
        (jspb.BinaryDecoder.prototype.readSignedVarint64 = function () {
          return (
            this.readSplitVarint64_(),
            jspb.utils.joinInt64(this.tempLow_, this.tempHigh_)
          );
        }),
        (jspb.BinaryDecoder.prototype.readSignedVarint64String = function () {
          return (
            this.readSplitVarint64_(),
            jspb.utils.joinSignedDecimalString(this.tempLow_, this.tempHigh_)
          );
        }),
        (jspb.BinaryDecoder.prototype.readZigzagVarint64 = function () {
          return (
            this.readSplitVarint64_(),
            jspb.utils.joinZigzag64(this.tempLow_, this.tempHigh_)
          );
        }),
        (jspb.BinaryDecoder.prototype.readZigzagVarint64String = function () {
          return this.readZigzagVarint64().toString();
        }),
        (jspb.BinaryDecoder.prototype.readUint8 = function () {
          var e = this.bytes_[this.cursor_ + 0];
          return (
            (this.cursor_ += 1),
            goog.asserts.assert(this.cursor_ <= this.end_),
            e
          );
        }),
        (jspb.BinaryDecoder.prototype.readUint16 = function () {
          var e = this.bytes_[this.cursor_ + 0],
            t = this.bytes_[this.cursor_ + 1];
          return (
            (this.cursor_ += 2),
            goog.asserts.assert(this.cursor_ <= this.end_),
            (e << 0) | (t << 8)
          );
        }),
        (jspb.BinaryDecoder.prototype.readUint32 = function () {
          var e = this.bytes_[this.cursor_ + 0],
            t = this.bytes_[this.cursor_ + 1],
            r = this.bytes_[this.cursor_ + 2],
            n = this.bytes_[this.cursor_ + 3];
          return (
            (this.cursor_ += 4),
            goog.asserts.assert(this.cursor_ <= this.end_),
            ((e << 0) | (t << 8) | (r << 16) | (n << 24)) >>> 0
          );
        }),
        (jspb.BinaryDecoder.prototype.readUint64 = function () {
          var e = this.readUint32(),
            t = this.readUint32();
          return jspb.utils.joinUint64(e, t);
        }),
        (jspb.BinaryDecoder.prototype.readUint64String = function () {
          var e = this.readUint32(),
            t = this.readUint32();
          return jspb.utils.joinUnsignedDecimalString(e, t);
        }),
        (jspb.BinaryDecoder.prototype.readInt8 = function () {
          var e = this.bytes_[this.cursor_ + 0];
          return (
            (this.cursor_ += 1),
            goog.asserts.assert(this.cursor_ <= this.end_),
            (e << 24) >> 24
          );
        }),
        (jspb.BinaryDecoder.prototype.readInt16 = function () {
          var e = this.bytes_[this.cursor_ + 0],
            t = this.bytes_[this.cursor_ + 1];
          return (
            (this.cursor_ += 2),
            goog.asserts.assert(this.cursor_ <= this.end_),
            (((e << 0) | (t << 8)) << 16) >> 16
          );
        }),
        (jspb.BinaryDecoder.prototype.readInt32 = function () {
          var e = this.bytes_[this.cursor_ + 0],
            t = this.bytes_[this.cursor_ + 1],
            r = this.bytes_[this.cursor_ + 2],
            n = this.bytes_[this.cursor_ + 3];
          return (
            (this.cursor_ += 4),
            goog.asserts.assert(this.cursor_ <= this.end_),
            (e << 0) | (t << 8) | (r << 16) | (n << 24)
          );
        }),
        (jspb.BinaryDecoder.prototype.readInt64 = function () {
          var e = this.readUint32(),
            t = this.readUint32();
          return jspb.utils.joinInt64(e, t);
        }),
        (jspb.BinaryDecoder.prototype.readInt64String = function () {
          var e = this.readUint32(),
            t = this.readUint32();
          return jspb.utils.joinSignedDecimalString(e, t);
        }),
        (jspb.BinaryDecoder.prototype.readFloat = function () {
          var e = this.readUint32();
          return jspb.utils.joinFloat32(e, 0);
        }),
        (jspb.BinaryDecoder.prototype.readDouble = function () {
          var e = this.readUint32(),
            t = this.readUint32();
          return jspb.utils.joinFloat64(e, t);
        }),
        (jspb.BinaryDecoder.prototype.readBool = function () {
          return !!this.bytes_[this.cursor_++];
        }),
        (jspb.BinaryDecoder.prototype.readEnum = function () {
          return this.readSignedVarint32();
        }),
        (jspb.BinaryDecoder.prototype.readString = function (e) {
          var t = this.bytes_,
            r = this.cursor_;
          e = r + e;
          for (var n = [], o = ""; r < e; ) {
            var i,
              a,
              s = t[r++];
            if (s < 128) n.push(s);
            else {
              if (s < 192) continue;
              s < 224
                ? ((i = t[r++]), n.push(((31 & s) << 6) | (63 & i)))
                : s < 240
                ? ((i = t[r++]),
                  (a = t[r++]),
                  n.push(((15 & s) << 12) | ((63 & i) << 6) | (63 & a)))
                : s < 248 &&
                  ((s =
                    (s =
                      ((7 & s) << 18) |
                      ((63 & (i = t[r++])) << 12) |
                      ((63 & (a = t[r++])) << 6) |
                      (63 & t[r++])) - 65536),
                  n.push(55296 + ((s >> 10) & 1023), 56320 + (1023 & s)));
            }
            8192 <= n.length &&
              ((o += String.fromCharCode.apply(null, n)), (n.length = 0));
          }
          return (o += goog.crypt.byteArrayToString(n)), (this.cursor_ = r), o;
        }),
        (jspb.BinaryDecoder.prototype.readStringWithLength = function () {
          var e = this.readUnsignedVarint32();
          return this.readString(e);
        }),
        (jspb.BinaryDecoder.prototype.readBytes = function (e) {
          if (e < 0 || this.cursor_ + e > this.bytes_.length)
            return (
              (this.error_ = !0),
              goog.asserts.fail("Invalid byte length!"),
              new Uint8Array(0)
            );
          var t = this.bytes_.subarray(this.cursor_, this.cursor_ + e);
          return (
            (this.cursor_ += e),
            goog.asserts.assert(this.cursor_ <= this.end_),
            t
          );
        }),
        (jspb.BinaryDecoder.prototype.readVarintHash64 = function () {
          return (
            this.readSplitVarint64_(),
            jspb.utils.joinHash64(this.tempLow_, this.tempHigh_)
          );
        }),
        (jspb.BinaryDecoder.prototype.readFixedHash64 = function () {
          var e = this.bytes_,
            t = this.cursor_,
            r = e[t + 0],
            n = e[t + 1],
            o = e[t + 2],
            i = e[t + 3],
            a = e[t + 4],
            s = e[t + 5],
            u = e[t + 6],
            e = e[t + 7];
          return (
            (this.cursor_ += 8), String.fromCharCode(r, n, o, i, a, s, u, e)
          );
        }),
        (jspb.BinaryReader = function (e, t, r) {
          (this.decoder_ = jspb.BinaryDecoder.alloc(e, t, r)),
            (this.fieldCursor_ = this.decoder_.getCursor()),
            (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
            (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
            (this.error_ = !1),
            (this.readCallbacks_ = null);
        }),
        (jspb.BinaryReader.instanceCache_ = []),
        (jspb.BinaryReader.alloc = function (e, t, r) {
          if (jspb.BinaryReader.instanceCache_.length) {
            var n = jspb.BinaryReader.instanceCache_.pop();
            return e && n.decoder_.setBlock(e, t, r), n;
          }
          return new jspb.BinaryReader(e, t, r);
        }),
        (jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc),
        (jspb.BinaryReader.prototype.free = function () {
          this.decoder_.clear(),
            (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
            (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
            (this.error_ = !1),
            (this.readCallbacks_ = null),
            jspb.BinaryReader.instanceCache_.length < 100 &&
              jspb.BinaryReader.instanceCache_.push(this);
        }),
        (jspb.BinaryReader.prototype.getFieldCursor = function () {
          return this.fieldCursor_;
        }),
        (jspb.BinaryReader.prototype.getCursor = function () {
          return this.decoder_.getCursor();
        }),
        (jspb.BinaryReader.prototype.getBuffer = function () {
          return this.decoder_.getBuffer();
        }),
        (jspb.BinaryReader.prototype.getFieldNumber = function () {
          return this.nextField_;
        }),
        (jspb.BinaryReader.prototype.getWireType = function () {
          return this.nextWireType_;
        }),
        (jspb.BinaryReader.prototype.isEndGroup = function () {
          return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP;
        }),
        (jspb.BinaryReader.prototype.getError = function () {
          return this.error_ || this.decoder_.getError();
        }),
        (jspb.BinaryReader.prototype.setBlock = function (e, t, r) {
          this.decoder_.setBlock(e, t, r),
            (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
            (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID);
        }),
        (jspb.BinaryReader.prototype.reset = function () {
          this.decoder_.reset(),
            (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
            (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID);
        }),
        (jspb.BinaryReader.prototype.advance = function (e) {
          this.decoder_.advance(e);
        }),
        (jspb.BinaryReader.prototype.nextField = function () {
          if (this.decoder_.atEnd()) return !1;
          if (this.getError())
            return goog.asserts.fail("Decoder hit an error"), !1;
          this.fieldCursor_ = this.decoder_.getCursor();
          var e = this.decoder_.readUnsignedVarint32(),
            t = e >>> 3;
          return (e = 7 & e) != jspb.BinaryConstants.WireType.VARINT &&
            e != jspb.BinaryConstants.WireType.FIXED32 &&
            e != jspb.BinaryConstants.WireType.FIXED64 &&
            e != jspb.BinaryConstants.WireType.DELIMITED &&
            e != jspb.BinaryConstants.WireType.START_GROUP &&
            e != jspb.BinaryConstants.WireType.END_GROUP
            ? (goog.asserts.fail("Invalid wire type"), !(this.error_ = !0))
            : ((this.nextField_ = t), (this.nextWireType_ = e), !0);
        }),
        (jspb.BinaryReader.prototype.unskipHeader = function () {
          this.decoder_.unskipVarint(
            (this.nextField_ << 3) | this.nextWireType_
          );
        }),
        (jspb.BinaryReader.prototype.skipMatchingFields = function () {
          var e = this.nextField_;
          for (
            this.unskipHeader();
            this.nextField() && this.getFieldNumber() == e;

          )
            this.skipField();
          this.decoder_.atEnd() || this.unskipHeader();
        }),
        (jspb.BinaryReader.prototype.skipVarintField = function () {
          this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT
            ? (goog.asserts.fail("Invalid wire type for skipVarintField"),
              this.skipField())
            : this.decoder_.skipVarint();
        }),
        (jspb.BinaryReader.prototype.skipDelimitedField = function () {
          var e;
          this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED
            ? (goog.asserts.fail("Invalid wire type for skipDelimitedField"),
              this.skipField())
            : ((e = this.decoder_.readUnsignedVarint32()),
              this.decoder_.advance(e));
        }),
        (jspb.BinaryReader.prototype.skipFixed32Field = function () {
          this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32
            ? (goog.asserts.fail("Invalid wire type for skipFixed32Field"),
              this.skipField())
            : this.decoder_.advance(4);
        }),
        (jspb.BinaryReader.prototype.skipFixed64Field = function () {
          this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64
            ? (goog.asserts.fail("Invalid wire type for skipFixed64Field"),
              this.skipField())
            : this.decoder_.advance(8);
        }),
        (jspb.BinaryReader.prototype.skipGroup = function () {
          var e = [this.nextField_];
          do {
            if (!this.nextField()) {
              goog.asserts.fail("Unmatched start-group tag: stream EOF"),
                (this.error_ = !0);
              break;
            }
            if (this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP)
              e.push(this.nextField_);
            else if (
              this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP &&
              this.nextField_ != e.pop()
            ) {
              goog.asserts.fail("Unmatched end-group tag"), (this.error_ = !0);
              break;
            }
          } while (0 < e.length);
        }),
        (jspb.BinaryReader.prototype.skipField = function () {
          switch (this.nextWireType_) {
            case jspb.BinaryConstants.WireType.VARINT:
              this.skipVarintField();
              break;
            case jspb.BinaryConstants.WireType.FIXED64:
              this.skipFixed64Field();
              break;
            case jspb.BinaryConstants.WireType.DELIMITED:
              this.skipDelimitedField();
              break;
            case jspb.BinaryConstants.WireType.FIXED32:
              this.skipFixed32Field();
              break;
            case jspb.BinaryConstants.WireType.START_GROUP:
              this.skipGroup();
              break;
            default:
              goog.asserts.fail("Invalid wire encoding for field.");
          }
        }),
        (jspb.BinaryReader.prototype.registerReadCallback = function (e, t) {
          goog.isNull(this.readCallbacks_) && (this.readCallbacks_ = {}),
            goog.asserts.assert(!this.readCallbacks_[e]),
            (this.readCallbacks_[e] = t);
        }),
        (jspb.BinaryReader.prototype.runReadCallback = function (e) {
          return (
            goog.asserts.assert(!goog.isNull(this.readCallbacks_)),
            (e = this.readCallbacks_[e]),
            goog.asserts.assert(e),
            e(this)
          );
        }),
        (jspb.BinaryReader.prototype.readAny = function (e) {
          this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(e);
          var t = jspb.BinaryConstants.FieldType;
          switch (e) {
            case t.DOUBLE:
              return this.readDouble();
            case t.FLOAT:
              return this.readFloat();
            case t.INT64:
              return this.readInt64();
            case t.UINT64:
              return this.readUint64();
            case t.INT32:
              return this.readInt32();
            case t.FIXED64:
              return this.readFixed64();
            case t.FIXED32:
              return this.readFixed32();
            case t.BOOL:
              return this.readBool();
            case t.STRING:
              return this.readString();
            case t.GROUP:
              goog.asserts.fail("Group field type not supported in readAny()");
            case t.MESSAGE:
              goog.asserts.fail(
                "Message field type not supported in readAny()"
              );
            case t.BYTES:
              return this.readBytes();
            case t.UINT32:
              return this.readUint32();
            case t.ENUM:
              return this.readEnum();
            case t.SFIXED32:
              return this.readSfixed32();
            case t.SFIXED64:
              return this.readSfixed64();
            case t.SINT32:
              return this.readSint32();
            case t.SINT64:
              return this.readSint64();
            case t.FHASH64:
              return this.readFixedHash64();
            case t.VHASH64:
              return this.readVarintHash64();
            default:
              goog.asserts.fail("Invalid field type in readAny()");
          }
          return 0;
        }),
        (jspb.BinaryReader.prototype.readMessage = function (e, t) {
          goog.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
          );
          var r = this.decoder_.getEnd(),
            n = this.decoder_.readUnsignedVarint32(),
            n = this.decoder_.getCursor() + n;
          this.decoder_.setEnd(n),
            t(e, this),
            this.decoder_.setCursor(n),
            this.decoder_.setEnd(r);
        }),
        (jspb.BinaryReader.prototype.readGroup = function (e, t, r) {
          goog.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP
          ),
            goog.asserts.assert(this.nextField_ == e),
            r(t, this),
            this.error_ ||
              this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP ||
              (goog.asserts.fail(
                "Group submessage did not end with an END_GROUP tag"
              ),
              (this.error_ = !0));
        }),
        (jspb.BinaryReader.prototype.getFieldDecoder = function () {
          goog.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
          );
          var e = this.decoder_.readUnsignedVarint32(),
            t = this.decoder_.getCursor(),
            r = t + e,
            e = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), t, e);
          return this.decoder_.setCursor(r), e;
        }),
        (jspb.BinaryReader.prototype.readInt32 = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readSignedVarint32()
          );
        }),
        (jspb.BinaryReader.prototype.readInt32String = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readSignedVarint32String()
          );
        }),
        (jspb.BinaryReader.prototype.readInt64 = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readSignedVarint64()
          );
        }),
        (jspb.BinaryReader.prototype.readInt64String = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readSignedVarint64String()
          );
        }),
        (jspb.BinaryReader.prototype.readUint32 = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readUnsignedVarint32()
          );
        }),
        (jspb.BinaryReader.prototype.readUint32String = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readUnsignedVarint32String()
          );
        }),
        (jspb.BinaryReader.prototype.readUint64 = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readUnsignedVarint64()
          );
        }),
        (jspb.BinaryReader.prototype.readUint64String = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readUnsignedVarint64String()
          );
        }),
        (jspb.BinaryReader.prototype.readSint32 = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readZigzagVarint32()
          );
        }),
        (jspb.BinaryReader.prototype.readSint64 = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readZigzagVarint64()
          );
        }),
        (jspb.BinaryReader.prototype.readSint64String = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readZigzagVarint64String()
          );
        }),
        (jspb.BinaryReader.prototype.readFixed32 = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32
            ),
            this.decoder_.readUint32()
          );
        }),
        (jspb.BinaryReader.prototype.readFixed64 = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
            ),
            this.decoder_.readUint64()
          );
        }),
        (jspb.BinaryReader.prototype.readFixed64String = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
            ),
            this.decoder_.readUint64String()
          );
        }),
        (jspb.BinaryReader.prototype.readSfixed32 = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32
            ),
            this.decoder_.readInt32()
          );
        }),
        (jspb.BinaryReader.prototype.readSfixed32String = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32
            ),
            this.decoder_.readInt32().toString()
          );
        }),
        (jspb.BinaryReader.prototype.readSfixed64 = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
            ),
            this.decoder_.readInt64()
          );
        }),
        (jspb.BinaryReader.prototype.readSfixed64String = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
            ),
            this.decoder_.readInt64String()
          );
        }),
        (jspb.BinaryReader.prototype.readFloat = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32
            ),
            this.decoder_.readFloat()
          );
        }),
        (jspb.BinaryReader.prototype.readDouble = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
            ),
            this.decoder_.readDouble()
          );
        }),
        (jspb.BinaryReader.prototype.readBool = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            !!this.decoder_.readUnsignedVarint32()
          );
        }),
        (jspb.BinaryReader.prototype.readEnum = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readSignedVarint64()
          );
        }),
        (jspb.BinaryReader.prototype.readString = function () {
          goog.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
          );
          var e = this.decoder_.readUnsignedVarint32();
          return this.decoder_.readString(e);
        }),
        (jspb.BinaryReader.prototype.readBytes = function () {
          goog.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
          );
          var e = this.decoder_.readUnsignedVarint32();
          return this.decoder_.readBytes(e);
        }),
        (jspb.BinaryReader.prototype.readVarintHash64 = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readVarintHash64()
          );
        }),
        (jspb.BinaryReader.prototype.readFixedHash64 = function () {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
            ),
            this.decoder_.readFixedHash64()
          );
        }),
        (jspb.BinaryReader.prototype.readPackedField_ = function (e) {
          goog.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
          );
          for (
            var t = this.decoder_.readUnsignedVarint32(),
              t = this.decoder_.getCursor() + t,
              r = [];
            this.decoder_.getCursor() < t;

          )
            r.push(e.call(this.decoder_));
          return r;
        }),
        (jspb.BinaryReader.prototype.readPackedInt32 = function () {
          return this.readPackedField_(this.decoder_.readSignedVarint32);
        }),
        (jspb.BinaryReader.prototype.readPackedInt32String = function () {
          return this.readPackedField_(this.decoder_.readSignedVarint32String);
        }),
        (jspb.BinaryReader.prototype.readPackedInt64 = function () {
          return this.readPackedField_(this.decoder_.readSignedVarint64);
        }),
        (jspb.BinaryReader.prototype.readPackedInt64String = function () {
          return this.readPackedField_(this.decoder_.readSignedVarint64String);
        }),
        (jspb.BinaryReader.prototype.readPackedUint32 = function () {
          return this.readPackedField_(this.decoder_.readUnsignedVarint32);
        }),
        (jspb.BinaryReader.prototype.readPackedUint32String = function () {
          return this.readPackedField_(
            this.decoder_.readUnsignedVarint32String
          );
        }),
        (jspb.BinaryReader.prototype.readPackedUint64 = function () {
          return this.readPackedField_(this.decoder_.readUnsignedVarint64);
        }),
        (jspb.BinaryReader.prototype.readPackedUint64String = function () {
          return this.readPackedField_(
            this.decoder_.readUnsignedVarint64String
          );
        }),
        (jspb.BinaryReader.prototype.readPackedSint32 = function () {
          return this.readPackedField_(this.decoder_.readZigzagVarint32);
        }),
        (jspb.BinaryReader.prototype.readPackedSint64 = function () {
          return this.readPackedField_(this.decoder_.readZigzagVarint64);
        }),
        (jspb.BinaryReader.prototype.readPackedSint64String = function () {
          return this.readPackedField_(this.decoder_.readZigzagVarint64String);
        }),
        (jspb.BinaryReader.prototype.readPackedFixed32 = function () {
          return this.readPackedField_(this.decoder_.readUint32);
        }),
        (jspb.BinaryReader.prototype.readPackedFixed64 = function () {
          return this.readPackedField_(this.decoder_.readUint64);
        }),
        (jspb.BinaryReader.prototype.readPackedFixed64String = function () {
          return this.readPackedField_(this.decoder_.readUint64String);
        }),
        (jspb.BinaryReader.prototype.readPackedSfixed32 = function () {
          return this.readPackedField_(this.decoder_.readInt32);
        }),
        (jspb.BinaryReader.prototype.readPackedSfixed64 = function () {
          return this.readPackedField_(this.decoder_.readInt64);
        }),
        (jspb.BinaryReader.prototype.readPackedSfixed64String = function () {
          return this.readPackedField_(this.decoder_.readInt64String);
        }),
        (jspb.BinaryReader.prototype.readPackedFloat = function () {
          return this.readPackedField_(this.decoder_.readFloat);
        }),
        (jspb.BinaryReader.prototype.readPackedDouble = function () {
          return this.readPackedField_(this.decoder_.readDouble);
        }),
        (jspb.BinaryReader.prototype.readPackedBool = function () {
          return this.readPackedField_(this.decoder_.readBool);
        }),
        (jspb.BinaryReader.prototype.readPackedEnum = function () {
          return this.readPackedField_(this.decoder_.readEnum);
        }),
        (jspb.BinaryReader.prototype.readPackedVarintHash64 = function () {
          return this.readPackedField_(this.decoder_.readVarintHash64);
        }),
        (jspb.BinaryReader.prototype.readPackedFixedHash64 = function () {
          return this.readPackedField_(this.decoder_.readFixedHash64);
        }),
        (jspb.Export = {}),
        (exports.Map = jspb.Map),
        (exports.Message = jspb.Message),
        (exports.BinaryReader = jspb.BinaryReader),
        (exports.BinaryWriter = jspb.BinaryWriter),
        (exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo),
        (exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo),
        (exports.exportSymbol = goog.exportSymbol),
        (exports.inherits = goog.inherits),
        (exports.object = { extend: goog.object.extend }),
        (exports.typeOf = goog.typeOf);
    }.call(
      this,
      __webpack_require__("yLpj"),
      __webpack_require__("tjlA").Buffer
    );
  },
  i8i4: function (e, t, r) {
    "use strict";
    (function e() {
      if (
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
          console.error(e);
        }
    })(),
      (e.exports = r("yl30"));
  },
  "jfS+": function (e, t, r) {
    "use strict";
    var n = r("endd");
    function o(e) {
      if ("function" != typeof e)
        throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var r = this;
      e(function (e) {
        r.reason || ((r.reason = new n(e)), t(r.reason));
      });
    }
    (o.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (o.source = function () {
        var t;
        return {
          token: new o(function (e) {
            t = e;
          }),
          cancel: t,
        };
      }),
      (e.exports = o);
  },
  "kVK+": function (e, t) {
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
    (t.read = function (e, t, r, n, o) {
      var i,
        a,
        s = 8 * o - n - 1,
        u = (1 << s) - 1,
        l = u >> 1,
        c = -7,
        p = r ? o - 1 : 0,
        f = r ? -1 : 1,
        r = e[t + p];
      for (
        p += f, i = r & ((1 << -c) - 1), r >>= -c, c += s;
        0 < c;
        i = 256 * i + e[t + p], p += f, c -= 8
      );
      for (
        a = i & ((1 << -c) - 1), i >>= -c, c += n;
        0 < c;
        a = 256 * a + e[t + p], p += f, c -= 8
      );
      if (0 === i) i = 1 - l;
      else {
        if (i === u) return a ? NaN : (1 / 0) * (r ? -1 : 1);
        (a += Math.pow(2, n)), (i -= l);
      }
      return (r ? -1 : 1) * a * Math.pow(2, i - n);
    }),
      (t.write = function (e, t, r, n, o, i) {
        var a,
          s,
          u = 8 * i - o - 1,
          l = (1 << u) - 1,
          c = l >> 1,
          p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          f = n ? 0 : i - 1,
          g = n ? 1 : -1,
          i = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
        for (
          t = Math.abs(t),
            isNaN(t) || t === 1 / 0
              ? ((s = isNaN(t) ? 1 : 0), (a = l))
              : ((a = Math.floor(Math.log(t) / Math.LN2)),
                t * (n = Math.pow(2, -a)) < 1 && (a--, (n *= 2)),
                2 <= (t += 1 <= a + c ? p / n : p * Math.pow(2, 1 - c)) * n &&
                  (a++, (n /= 2)),
                l <= a + c
                  ? ((s = 0), (a = l))
                  : 1 <= a + c
                  ? ((s = (t * n - 1) * Math.pow(2, o)), (a += c))
                  : ((s = t * Math.pow(2, c - 1) * Math.pow(2, o)), (a = 0)));
          8 <= o;
          e[r + f] = 255 & s, f += g, s /= 256, o -= 8
        );
        for (
          a = (a << o) | s, u += o;
          0 < u;
          e[r + f] = 255 & a, f += g, a /= 256, u -= 8
        );
        e[r + f - g] |= 128 * i;
      });
  },
  q1tI: function (e, t, r) {
    "use strict";
    e.exports = r("viRO");
  },
  tQ2B: function (e, t, r) {
    "use strict";
    var c = r("xTJ+"),
      p = r("Rn+g"),
      f = r("eqyj"),
      g = r("MLWZ"),
      d = r("g7np"),
      h = r("w0Vi"),
      y = r("OTTw"),
      b = r("LYNF");
    e.exports = function (l) {
      return new Promise(function (t, r) {
        var n = l.data,
          o = l.headers,
          i = l.responseType;
        c.isFormData(n) && delete o["Content-Type"];
        var e,
          a = new XMLHttpRequest();
        l.auth &&
          ((e = l.auth.username || ""),
          (s = l.auth.password
            ? unescape(encodeURIComponent(l.auth.password))
            : ""),
          (o.Authorization = "Basic " + btoa(e + ":" + s)));
        var s = d(l.baseURL, l.url);
        function u() {
          var e;
          a &&
            ((e =
              "getAllResponseHeaders" in a
                ? h(a.getAllResponseHeaders())
                : null),
            (e = {
              data:
                i && "text" !== i && "json" !== i ? a.response : a.responseText,
              status: a.status,
              statusText: a.statusText,
              headers: e,
              config: l,
              request: a,
            }),
            p(t, r, e),
            (a = null));
        }
        a.open(l.method.toUpperCase(), g(s, l.params, l.paramsSerializer), !0),
          (a.timeout = l.timeout),
          "onloadend" in a
            ? (a.onloadend = u)
            : (a.onreadystatechange = function () {
                a &&
                  4 === a.readyState &&
                  (0 !== a.status ||
                    (a.responseURL && 0 === a.responseURL.indexOf("file:"))) &&
                  setTimeout(u);
              }),
          (a.onabort = function () {
            a && (r(b("Request aborted", l, "ECONNABORTED", a)), (a = null));
          }),
          (a.onerror = function () {
            r(b("Network Error", l, null, a)), (a = null);
          }),
          (a.ontimeout = function () {
            var e = "timeout of " + l.timeout + "ms exceeded";
            l.timeoutErrorMessage && (e = l.timeoutErrorMessage),
              r(
                b(
                  e,
                  l,
                  l.transitional && l.transitional.clarifyTimeoutError
                    ? "ETIMEDOUT"
                    : "ECONNABORTED",
                  a
                )
              ),
              (a = null);
          }),
          !c.isStandardBrowserEnv() ||
            ((s =
              (l.withCredentials || y(s)) && l.xsrfCookieName
                ? f.read(l.xsrfCookieName)
                : void 0) &&
              (o[l.xsrfHeaderName] = s)),
          "setRequestHeader" in a &&
            c.forEach(o, function (e, t) {
              void 0 === n && "content-type" === t.toLowerCase()
                ? delete o[t]
                : a.setRequestHeader(t, e);
            }),
          c.isUndefined(l.withCredentials) ||
            (a.withCredentials = !!l.withCredentials),
          i && "json" !== i && (a.responseType = l.responseType),
          "function" == typeof l.onDownloadProgress &&
            a.addEventListener("progress", l.onDownloadProgress),
          "function" == typeof l.onUploadProgress &&
            a.upload &&
            a.upload.addEventListener("progress", l.onUploadProgress),
          l.cancelToken &&
            l.cancelToken.promise.then(function (e) {
              a && (a.abort(), r(e), (a = null));
            }),
          (n = n || null),
          a.send(n);
      });
    };
  },
  tjlA: function (e, M, R) {
    "use strict";
    !function (e) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <http://feross.org>
       * @license  MIT
       */
      var s = R("H7XF"),
        i = R("kVK+"),
        a = R("49sm");
      function r() {
        return p.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function o(e, t) {
        if (r() < t) throw new RangeError("Invalid typed array length");
        return (
          p.TYPED_ARRAY_SUPPORT
            ? ((e = new Uint8Array(t)).__proto__ = p.prototype)
            : ((e = null === e ? new p(t) : e).length = t),
          e
        );
      }
      function p(e, t, r) {
        if (!(p.TYPED_ARRAY_SUPPORT || this instanceof p))
          return new p(e, t, r);
        if ("number" != typeof e) return n(this, e, t, r);
        if ("string" == typeof t)
          throw new Error(
            "If encoding is specified then the first argument must be a string"
          );
        return l(this, e);
      }
      function n(e, t, r, n) {
        if ("number" == typeof t)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
          ? (function (e, t, r, n) {
              if ((t.byteLength, r < 0 || t.byteLength < r))
                throw new RangeError("'offset' is out of bounds");
              if (t.byteLength < r + (n || 0))
                throw new RangeError("'length' is out of bounds");
              t =
                void 0 === r && void 0 === n
                  ? new Uint8Array(t)
                  : void 0 === n
                  ? new Uint8Array(t, r)
                  : new Uint8Array(t, r, n);
              p.TYPED_ARRAY_SUPPORT
                ? ((e = t).__proto__ = p.prototype)
                : (e = c(e, t));
              return e;
            })(e, t, r, n)
          : "string" == typeof t
          ? (function (e, t, r) {
              ("string" == typeof r && "" !== r) || (r = "utf8");
              if (!p.isEncoding(r))
                throw new TypeError(
                  '"encoding" must be a valid string encoding'
                );
              var n = 0 | g(t, r),
                r = (e = o(e, n)).write(t, r);
              r !== n && (e = e.slice(0, r));
              return e;
            })(e, t, r)
          : (function (e, t) {
              if (p.isBuffer(t)) {
                var r = 0 | f(t.length);
                return 0 === (e = o(e, r)).length ? e : (t.copy(e, 0, 0, r), e);
              }
              if (t) {
                if (
                  ("undefined" != typeof ArrayBuffer &&
                    t.buffer instanceof ArrayBuffer) ||
                  "length" in t
                )
                  return "number" != typeof t.length ||
                    (function (e) {
                      return e != e;
                    })(t.length)
                    ? o(e, 0)
                    : c(e, t);
                if ("Buffer" === t.type && a(t.data)) return c(e, t.data);
              }
              throw new TypeError(
                "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
              );
            })(e, t);
      }
      function u(e) {
        if ("number" != typeof e)
          throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative');
      }
      function l(e, t) {
        if ((u(t), (e = o(e, t < 0 ? 0 : 0 | f(t))), !p.TYPED_ARRAY_SUPPORT))
          for (var r = 0; r < t; ++r) e[r] = 0;
        return e;
      }
      function c(e, t) {
        var r = t.length < 0 ? 0 : 0 | f(t.length);
        e = o(e, r);
        for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
        return e;
      }
      function f(e) {
        if (e >= r())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              r().toString(16) +
              " bytes"
          );
        return 0 | e;
      }
      function g(e, t) {
        if (p.isBuffer(e)) return e.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        )
          return e.byteLength;
        var r = (e = "string" != typeof e ? "" + e : e).length;
        if (0 === r) return 0;
        for (var n = !1; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
            case void 0:
              return k(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return x(e).length;
            default:
              if (n) return k(e).length;
              (t = ("" + t).toLowerCase()), (n = !0);
          }
      }
      function t(e, t, r) {
        var n,
          o,
          i,
          a = !1;
        if ((t = void 0 === t || t < 0 ? 0 : t) > this.length) return "";
        if ((r = void 0 === r || r > this.length ? this.length : r) <= 0)
          return "";
        if ((r >>>= 0) <= (t >>>= 0)) return "";
        for (e = e || "utf8"; ; )
          switch (e) {
            case "hex":
              return (function (e, t, r) {
                var n = e.length;
                (!t || t < 0) && (t = 0);
                (!r || r < 0 || n < r) && (r = n);
                for (var o = "", i = t; i < r; ++i)
                  o += (function (e) {
                    return e < 16 ? "0" + e.toString(16) : e.toString(16);
                  })(e[i]);
                return o;
              })(this, t, r);
            case "utf8":
            case "utf-8":
              return _(this, t, r);
            case "ascii":
              return (function (e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var o = t; o < r; ++o)
                  n += String.fromCharCode(127 & e[o]);
                return n;
              })(this, t, r);
            case "latin1":
            case "binary":
              return (function (e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var o = t; o < r; ++o) n += String.fromCharCode(e[o]);
                return n;
              })(this, t, r);
            case "base64":
              return (
                (n = this),
                (i = r),
                0 === (o = t) && i === n.length
                  ? s.fromByteArray(n)
                  : s.fromByteArray(n.slice(o, i))
              );
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return (function (e, t, r) {
                for (var n = e.slice(t, r), o = "", i = 0; i < n.length; i += 2)
                  o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                return o;
              })(this, t, r);
            default:
              if (a) throw new TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (a = !0);
          }
      }
      function d(e, t, r) {
        var n = e[t];
        (e[t] = e[r]), (e[r] = n);
      }
      function h(e, t, r, n, o) {
        if (0 === e.length) return -1;
        if (
          ("string" == typeof r
            ? ((n = r), (r = 0))
            : 2147483647 < r
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          (r = +r),
          (r =
            (r = isNaN(r) ? (o ? 0 : e.length - 1) : r) < 0
              ? e.length + r
              : r) >= e.length)
        ) {
          if (o) return -1;
          r = e.length - 1;
        } else if (r < 0) {
          if (!o) return -1;
          r = 0;
        }
        if (("string" == typeof t && (t = p.from(t, n)), p.isBuffer(t)))
          return 0 === t.length ? -1 : y(e, t, r, n, o);
        if ("number" == typeof t)
          return (
            (t &= 255),
            p.TYPED_ARRAY_SUPPORT &&
            "function" == typeof Uint8Array.prototype.indexOf
              ? (o
                  ? Uint8Array.prototype.indexOf
                  : Uint8Array.prototype.lastIndexOf
                ).call(e, t, r)
              : y(e, [t], r, n, o)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function y(e, t, r, n, o) {
        var i = 1,
          a = e.length,
          s = t.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (a /= i = 2), (s /= 2), (r /= 2);
        }
        function u(e, t) {
          return 1 === i ? e[t] : e.readUInt16BE(t * i);
        }
        if (o)
          for (var l = -1, c = r; c < a; c++)
            if (u(e, c) === u(t, -1 === l ? 0 : c - l)) {
              if (c - (l = -1 === l ? c : l) + 1 === s) return l * i;
            } else -1 !== l && (c -= c - l), (l = -1);
        else
          for (c = r = a < r + s ? a - s : r; 0 <= c; c--) {
            for (var p = !0, f = 0; f < s; f++)
              if (u(e, c + f) !== u(t, f)) {
                p = !1;
                break;
              }
            if (p) return c;
          }
        return -1;
      }
      function b(e, t, r, n) {
        return I(
          (function (e) {
            for (var t = [], r = 0; r < e.length; ++r)
              t.push(255 & e.charCodeAt(r));
            return t;
          })(t),
          e,
          r,
          n
        );
      }
      function m(e, t, r, n) {
        return I(
          (function (e, t) {
            for (var r, n, o = [], i = 0; i < e.length && !((t -= 2) < 0); ++i)
              (n = e.charCodeAt(i)),
                (r = n >> 8),
                (n = n % 256),
                o.push(n),
                o.push(r);
            return o;
          })(t, e.length - r),
          e,
          r,
          n
        );
      }
      function _(e, t, r) {
        r = Math.min(e.length, r);
        for (var n = [], o = t; o < r; ) {
          var i,
            a,
            s,
            u,
            l = e[o],
            c = null,
            p = 239 < l ? 4 : 223 < l ? 3 : 191 < l ? 2 : 1;
          if (o + p <= r)
            switch (p) {
              case 1:
                l < 128 && (c = l);
                break;
              case 2:
                128 == (192 & (i = e[o + 1])) &&
                  127 < (u = ((31 & l) << 6) | (63 & i)) &&
                  (c = u);
                break;
              case 3:
                (i = e[o + 1]),
                  (a = e[o + 2]),
                  128 == (192 & i) &&
                    128 == (192 & a) &&
                    2047 <
                      (u = ((15 & l) << 12) | ((63 & i) << 6) | (63 & a)) &&
                    (u < 55296 || 57343 < u) &&
                    (c = u);
                break;
              case 4:
                (i = e[o + 1]),
                  (a = e[o + 2]),
                  (s = e[o + 3]),
                  128 == (192 & i) &&
                    128 == (192 & a) &&
                    128 == (192 & s) &&
                    65535 <
                      (u =
                        ((15 & l) << 18) |
                        ((63 & i) << 12) |
                        ((63 & a) << 6) |
                        (63 & s)) &&
                    u < 1114112 &&
                    (c = u);
            }
          null === c
            ? ((c = 65533), (p = 1))
            : 65535 < c &&
              ((c -= 65536),
              n.push(((c >>> 10) & 1023) | 55296),
              (c = 56320 | (1023 & c))),
            n.push(c),
            (o += p);
        }
        return (function (e) {
          var t = e.length;
          if (t <= v) return String.fromCharCode.apply(String, e);
          var r = "",
            n = 0;
          for (; n < t; )
            r += String.fromCharCode.apply(String, e.slice(n, (n += v)));
          return r;
        })(n);
      }
      (M.Buffer = p),
        (M.SlowBuffer = function (e) {
          +e != e && (e = 0);
          return p.alloc(+e);
        }),
        (M.INSPECT_MAX_BYTES = 50),
        (p.TYPED_ARRAY_SUPPORT =
          void 0 !== e.TYPED_ARRAY_SUPPORT
            ? e.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var e = new Uint8Array(1);
                  return (
                    (e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === e.foo() &&
                      "function" == typeof e.subarray &&
                      0 === e.subarray(1, 1).byteLength
                  );
                } catch (e) {
                  return !1;
                }
              })()),
        (M.kMaxLength = r()),
        (p.poolSize = 8192),
        (p._augment = function (e) {
          return (e.__proto__ = p.prototype), e;
        }),
        (p.from = function (e, t, r) {
          return n(null, e, t, r);
        }),
        p.TYPED_ARRAY_SUPPORT &&
          ((p.prototype.__proto__ = Uint8Array.prototype),
          (p.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            p[Symbol.species] === p &&
            Object.defineProperty(p, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (p.alloc = function (e, t, r) {
          return (
            (n = null),
            (t = t),
            (r = r),
            u((e = e)),
            !(e <= 0) && void 0 !== t
              ? "string" == typeof r
                ? o(n, e).fill(t, r)
                : o(n, e).fill(t)
              : o(n, e)
          );
          var n;
        }),
        (p.allocUnsafe = function (e) {
          return l(null, e);
        }),
        (p.allocUnsafeSlow = function (e) {
          return l(null, e);
        }),
        (p.isBuffer = function (e) {
          return !(null == e || !e._isBuffer);
        }),
        (p.compare = function (e, t) {
          if (!p.isBuffer(e) || !p.isBuffer(t))
            throw new TypeError("Arguments must be Buffers");
          if (e === t) return 0;
          for (
            var r = e.length, n = t.length, o = 0, i = Math.min(r, n);
            o < i;
            ++o
          )
            if (e[o] !== t[o]) {
              (r = e[o]), (n = t[o]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (p.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (p.concat = function (e, t) {
          if (!a(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return p.alloc(0);
          if (void 0 === t) for (o = t = 0; o < e.length; ++o) t += e[o].length;
          for (var r = p.allocUnsafe(t), n = 0, o = 0; o < e.length; ++o) {
            var i = e[o];
            if (!p.isBuffer(i))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            i.copy(r, n), (n += i.length);
          }
          return r;
        }),
        (p.byteLength = g),
        (p.prototype._isBuffer = !0),
        (p.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t = 0; t < e; t += 2) d(this, t, t + 1);
          return this;
        }),
        (p.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t = 0; t < e; t += 4)
            d(this, t, t + 3), d(this, t + 1, t + 2);
          return this;
        }),
        (p.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t = 0; t < e; t += 8)
            d(this, t, t + 7),
              d(this, t + 1, t + 6),
              d(this, t + 2, t + 5),
              d(this, t + 3, t + 4);
          return this;
        }),
        (p.prototype.toString = function () {
          var e = 0 | this.length;
          return 0 == e
            ? ""
            : 0 === arguments.length
            ? _(this, 0, e)
            : t.apply(this, arguments);
        }),
        (p.prototype.equals = function (e) {
          if (!p.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === p.compare(this, e);
        }),
        (p.prototype.inspect = function () {
          var e = "",
            t = M.INSPECT_MAX_BYTES;
          return (
            0 < this.length &&
              ((e = this.toString("hex", 0, t).match(/.{2}/g).join(" ")),
              this.length > t && (e += " ... ")),
            "<Buffer " + e + ">"
          );
        }),
        (p.prototype.compare = function (e, t, r, n, o) {
          if (!p.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === o && (o = this.length),
            (t = void 0 === t ? 0 : t) < 0 ||
              r > e.length ||
              n < 0 ||
              o > this.length)
          )
            throw new RangeError("out of range index");
          if (o <= n && r <= t) return 0;
          if (o <= n) return -1;
          if (r <= t) return 1;
          if (this === e) return 0;
          for (
            var i = (o >>>= 0) - (n >>>= 0),
              a = (r >>>= 0) - (t >>>= 0),
              s = Math.min(i, a),
              u = this.slice(n, o),
              l = e.slice(t, r),
              c = 0;
            c < s;
            ++c
          )
            if (u[c] !== l[c]) {
              (i = u[c]), (a = l[c]);
              break;
            }
          return i < a ? -1 : a < i ? 1 : 0;
        }),
        (p.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (p.prototype.indexOf = function (e, t, r) {
          return h(this, e, t, r, !0);
        }),
        (p.prototype.lastIndexOf = function (e, t, r) {
          return h(this, e, t, r, !1);
        }),
        (p.prototype.write = function (e, t, r, n) {
          if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
          else if (void 0 === r && "string" == typeof t)
            (n = t), (r = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (t |= 0),
              isFinite(r)
                ? ((r |= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          }
          var o = this.length - t;
          if (
            ((void 0 === r || o < r) && (r = o),
            (0 < e.length && (r < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          n = n || "utf8";
          for (var i, a, s, u = !1; ; )
            switch (n) {
              case "hex":
                return (function (e, t, r, n) {
                  r = Number(r) || 0;
                  var o = e.length - r;
                  if (
                    ((!n || o < (n = Number(n))) && (n = o),
                    (o = t.length) % 2 != 0)
                  )
                    throw new TypeError("Invalid hex string");
                  o / 2 < n && (n = o / 2);
                  for (var i = 0; i < n; ++i) {
                    var a = parseInt(t.substr(2 * i, 2), 16);
                    if (isNaN(a)) return i;
                    e[r + i] = a;
                  }
                  return i;
                })(this, e, t, r);
              case "utf8":
              case "utf-8":
                return (
                  (a = t), (s = r), I(k(e, (i = this).length - a), i, a, s)
                );
              case "ascii":
                return b(this, e, t, r);
              case "latin1":
              case "binary":
                return b(this, e, t, r);
              case "base64":
                return (i = this), (a = t), (s = r), I(x(e), i, a, s);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return m(this, e, t, r);
              default:
                if (u) throw new TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (u = !0);
            }
        }),
        (p.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      var v = 4096;
      function E(e, t, r) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (r < e + t)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function w(e, t, r, n, o, i) {
        if (!p.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (o < t || t < i)
          throw new RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw new RangeError("Index out of range");
      }
      function S(e, t, r, n) {
        t < 0 && (t = 65535 + t + 1);
        for (var o = 0, i = Math.min(e.length - r, 2); o < i; ++o)
          e[r + o] =
            (t & (255 << (8 * (n ? o : 1 - o)))) >>> (8 * (n ? o : 1 - o));
      }
      function T(e, t, r, n) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var o = 0, i = Math.min(e.length - r, 4); o < i; ++o)
          e[r + o] = (t >>> (8 * (n ? o : 3 - o))) & 255;
      }
      function A(e, t, r, n) {
        if (r + n > e.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }
      function j(e, t, r, n, o) {
        return o || A(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4;
      }
      function O(e, t, r, n, o) {
        return o || A(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8;
      }
      (p.prototype.slice = function (e, t) {
        var r = this.length;
        if (
          ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : r < e && (e = r),
          (t = void 0 === t ? r : ~~t) < 0
            ? (t += r) < 0 && (t = 0)
            : r < t && (t = r),
          t < e && (t = e),
          p.TYPED_ARRAY_SUPPORT)
        )
          (o = this.subarray(e, t)).__proto__ = p.prototype;
        else
          for (var n = t - e, o = new p(n, void 0), i = 0; i < n; ++i)
            o[i] = this[i + e];
        return o;
      }),
        (p.prototype.readUIntLE = function (e, t, r) {
          (e |= 0), (t |= 0), r || E(e, t, this.length);
          for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
            n += this[e + i] * o;
          return n;
        }),
        (p.prototype.readUIntBE = function (e, t, r) {
          (e |= 0), (t |= 0), r || E(e, t, this.length);
          for (var n = this[e + --t], o = 1; 0 < t && (o *= 256); )
            n += this[e + --t] * o;
          return n;
        }),
        (p.prototype.readUInt8 = function (e, t) {
          return t || E(e, 1, this.length), this[e];
        }),
        (p.prototype.readUInt16LE = function (e, t) {
          return t || E(e, 2, this.length), this[e] | (this[e + 1] << 8);
        }),
        (p.prototype.readUInt16BE = function (e, t) {
          return t || E(e, 2, this.length), (this[e] << 8) | this[e + 1];
        }),
        (p.prototype.readUInt32LE = function (e, t) {
          return (
            t || E(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              16777216 * this[e + 3]
          );
        }),
        (p.prototype.readUInt32BE = function (e, t) {
          return (
            t || E(e, 4, this.length),
            16777216 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
        (p.prototype.readIntLE = function (e, t, r) {
          (e |= 0), (t |= 0), r || E(e, t, this.length);
          for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
            n += this[e + i] * o;
          return (o *= 128) <= n && (n -= Math.pow(2, 8 * t)), n;
        }),
        (p.prototype.readIntBE = function (e, t, r) {
          (e |= 0), (t |= 0), r || E(e, t, this.length);
          for (var n = t, o = 1, i = this[e + --n]; 0 < n && (o *= 256); )
            i += this[e + --n] * o;
          return (o *= 128) <= i && (i -= Math.pow(2, 8 * t)), i;
        }),
        (p.prototype.readInt8 = function (e, t) {
          return (
            t || E(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (p.prototype.readInt16LE = function (e, t) {
          t || E(e, 2, this.length);
          e = this[e] | (this[e + 1] << 8);
          return 32768 & e ? 4294901760 | e : e;
        }),
        (p.prototype.readInt16BE = function (e, t) {
          t || E(e, 2, this.length);
          e = this[e + 1] | (this[e] << 8);
          return 32768 & e ? 4294901760 | e : e;
        }),
        (p.prototype.readInt32LE = function (e, t) {
          return (
            t || E(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (p.prototype.readInt32BE = function (e, t) {
          return (
            t || E(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (p.prototype.readFloatLE = function (e, t) {
          return t || E(e, 4, this.length), i.read(this, e, !0, 23, 4);
        }),
        (p.prototype.readFloatBE = function (e, t) {
          return t || E(e, 4, this.length), i.read(this, e, !1, 23, 4);
        }),
        (p.prototype.readDoubleLE = function (e, t) {
          return t || E(e, 8, this.length), i.read(this, e, !0, 52, 8);
        }),
        (p.prototype.readDoubleBE = function (e, t) {
          return t || E(e, 8, this.length), i.read(this, e, !1, 52, 8);
        }),
        (p.prototype.writeUIntLE = function (e, t, r, n) {
          (e = +e),
            (t |= 0),
            (r |= 0),
            n || w(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
          var o = 1,
            i = 0;
          for (this[t] = 255 & e; ++i < r && (o *= 256); )
            this[t + i] = (e / o) & 255;
          return t + r;
        }),
        (p.prototype.writeUIntBE = function (e, t, r, n) {
          (e = +e),
            (t |= 0),
            (r |= 0),
            n || w(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
          var o = r - 1,
            i = 1;
          for (this[t + o] = 255 & e; 0 <= --o && (i *= 256); )
            this[t + o] = (e / i) & 255;
          return t + r;
        }),
        (p.prototype.writeUInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || w(this, e, t, 1, 255, 0),
            p.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (p.prototype.writeUInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || w(this, e, t, 2, 65535, 0),
            p.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : S(this, e, t, !0),
            t + 2
          );
        }),
        (p.prototype.writeUInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || w(this, e, t, 2, 65535, 0),
            p.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : S(this, e, t, !1),
            t + 2
          );
        }),
        (p.prototype.writeUInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || w(this, e, t, 4, 4294967295, 0),
            p.TYPED_ARRAY_SUPPORT
              ? ((this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e))
              : T(this, e, t, !0),
            t + 4
          );
        }),
        (p.prototype.writeUInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || w(this, e, t, 4, 4294967295, 0),
            p.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : T(this, e, t, !1),
            t + 4
          );
        }),
        (p.prototype.writeIntLE = function (e, t, r, n) {
          (e = +e),
            (t |= 0),
            n || w(this, e, t, r, (n = Math.pow(2, 8 * r - 1)) - 1, -n);
          var o = 0,
            i = 1,
            a = 0;
          for (this[t] = 255 & e; ++o < r && (i *= 256); )
            e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
              (this[t + o] = (((e / i) >> 0) - a) & 255);
          return t + r;
        }),
        (p.prototype.writeIntBE = function (e, t, r, n) {
          (e = +e),
            (t |= 0),
            n || w(this, e, t, r, (n = Math.pow(2, 8 * r - 1)) - 1, -n);
          var o = r - 1,
            i = 1,
            a = 0;
          for (this[t + o] = 255 & e; 0 <= --o && (i *= 256); )
            e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
              (this[t + o] = (((e / i) >> 0) - a) & 255);
          return t + r;
        }),
        (p.prototype.writeInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || w(this, e, t, 1, 127, -128),
            p.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & (e = e < 0 ? 255 + e + 1 : e)),
            t + 1
          );
        }),
        (p.prototype.writeInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || w(this, e, t, 2, 32767, -32768),
            p.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : S(this, e, t, !0),
            t + 2
          );
        }),
        (p.prototype.writeInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || w(this, e, t, 2, 32767, -32768),
            p.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : S(this, e, t, !1),
            t + 2
          );
        }),
        (p.prototype.writeInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || w(this, e, t, 4, 2147483647, -2147483648),
            p.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24))
              : T(this, e, t, !0),
            t + 4
          );
        }),
        (p.prototype.writeInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || w(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            p.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : T(this, e, t, !1),
            t + 4
          );
        }),
        (p.prototype.writeFloatLE = function (e, t, r) {
          return j(this, e, t, !0, r);
        }),
        (p.prototype.writeFloatBE = function (e, t, r) {
          return j(this, e, t, !1, r);
        }),
        (p.prototype.writeDoubleLE = function (e, t, r) {
          return O(this, e, t, !0, r);
        }),
        (p.prototype.writeDoubleBE = function (e, t, r) {
          return O(this, e, t, !1, r);
        }),
        (p.prototype.copy = function (e, t, r, n) {
          if (
            ((r = r || 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            (n = 0 < n && n < r ? r : n) === r)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if ((t = t || 0) < 0)
            throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length);
          var o,
            i = (n = e.length - t < n - r ? e.length - t + r : n) - r;
          if (this === e && r < t && t < n)
            for (o = i - 1; 0 <= o; --o) e[o + t] = this[o + r];
          else if (i < 1e3 || !p.TYPED_ARRAY_SUPPORT)
            for (o = 0; o < i; ++o) e[o + t] = this[o + r];
          else Uint8Array.prototype.set.call(e, this.subarray(r, r + i), t);
          return i;
        }),
        (p.prototype.fill = function (e, t, r, n) {
          if ("string" == typeof e) {
            var o;
            if (
              ("string" == typeof t
                ? ((n = t), (t = 0), (r = this.length))
                : "string" == typeof r && ((n = r), (r = this.length)),
              1 !== e.length || ((o = e.charCodeAt(0)) < 256 && (e = o)),
              void 0 !== n && "string" != typeof n)
            )
              throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !p.isEncoding(n))
              throw new TypeError("Unknown encoding: " + n);
          } else "number" == typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < r)
            throw new RangeError("Out of range index");
          if (r <= t) return this;
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            "number" == typeof (e = e || 0))
          )
            for (s = t; s < r; ++s) this[s] = e;
          else
            for (
              var i = p.isBuffer(e) ? e : k(new p(e, n).toString()),
                a = i.length,
                s = 0;
              s < r - t;
              ++s
            )
              this[s + t] = i[s % a];
          return this;
        });
      var C = /[^+\/0-9A-Za-z-_]/g;
      function k(e, t) {
        var r;
        t = t || 1 / 0;
        for (var n = e.length, o = null, i = [], a = 0; a < n; ++a) {
          if (55295 < (r = e.charCodeAt(a)) && r < 57344) {
            if (!o) {
              if (56319 < r) {
                -1 < (t -= 3) && i.push(239, 191, 189);
                continue;
              }
              if (a + 1 === n) {
                -1 < (t -= 3) && i.push(239, 191, 189);
                continue;
              }
              o = r;
              continue;
            }
            if (r < 56320) {
              -1 < (t -= 3) && i.push(239, 191, 189), (o = r);
              continue;
            }
            r = 65536 + (((o - 55296) << 10) | (r - 56320));
          } else o && -1 < (t -= 3) && i.push(239, 191, 189);
          if (((o = null), r < 128)) {
            if (--t < 0) break;
            i.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            i.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            i.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          }
        }
        return i;
      }
      function x(e) {
        return s.toByteArray(
          (function (e) {
            var t;
            if (
              (e = ((t = e).trim
                ? t.trim()
                : t.replace(/^\s+|\s+$/g, "")
              ).replace(C, "")).length < 2
            )
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function I(e, t, r, n) {
        for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o)
          t[o + r] = e[o];
        return o;
      }
    }.call(this, R("yLpj"));
  },
  twdX: function (e, t, r) {
    e.exports = {
      LoadingWrapper: "throbber_LoadingWrapper_9UFR8",
      Static: "throbber_Static_2qWST",
      none: "throbber_none_3yGk4",
      bottomCircle: "throbber_bottomCircle_1XTvd",
      noString: "throbber_noString_2uxjb",
      Throbber: "throbber_Throbber_1Y6Da",
      throbber_small: "throbber_throbber_small_21jHr",
      throbber_medium: "throbber_throbber_medium_1nACb",
      throbber_large: "throbber_throbber_large_3hJM_",
      throbber_center_wrapper: "throbber_throbber_center_wrapper_1Dn-N",
      ThrobberText: "throbber_ThrobberText_3r290",
      blur: "throbber_blur_3cMTP",
      ThrobberRoundLoop: "throbber_ThrobberRoundLoop_3iwJU",
      roundOuterOutline: "throbber_roundOuterOutline_1yAiX",
      roundOuter: "throbber_roundOuter_3LNze",
      roundFill: "throbber_roundFill_3dnp9",
      ThrobberFillLoop: "throbber_ThrobberFillLoop_1e442",
      topCircle: "throbber_topCircle_3Zy4H",
      circlePulse: "throbber_circlePulse_17mrs",
      ThrobberTopCircleLoop: "throbber_ThrobberTopCircleLoop_RFW6m",
      ThrobberBottomCircleLoop: "throbber_ThrobberBottomCircleLoop_1AigW",
      roundThrobber15: "throbber_roundThrobber15_Ty6Px",
      roundThrobber14: "throbber_roundThrobber14_T03GA",
      roundThrobber13: "throbber_roundThrobber13_2YjHq",
      roundThrobber12: "throbber_roundThrobber12_39ueX",
      roundThrobber11: "throbber_roundThrobber11_ze_zC",
      roundThrobber10: "throbber_roundThrobber10_jIdSr",
      roundThrobber09: "throbber_roundThrobber09_3R4dR",
      roundThrobber08: "throbber_roundThrobber08_2WJ-s",
      roundThrobber07: "throbber_roundThrobber07_2UhCH",
      roundThrobber06: "throbber_roundThrobber06_gkW0p",
      roundThrobber05: "throbber_roundThrobber05_20j9w",
      roundThrobber04: "throbber_roundThrobber04_3TMdv",
      roundThrobber03: "throbber_roundThrobber03_3aNO_",
      roundThrobber02: "throbber_roundThrobber02_1m8h_",
      roundThrobber01: "throbber_roundThrobber01_2h6Ph",
      ThrobberRoundLoopThickness: "throbber_ThrobberRoundLoopThickness_1YJDV",
      throbber_xlarge: "throbber_throbber_xlarge_iO6_X",
      throbber_xxlarge: "throbber_throbber_xxlarge_3KPYp",
    };
  },
  vDqi: function (e, t, r) {
    e.exports = r("zuR4");
  },
  viRO: function (e, t, r) {
    "use strict";
    /** @license React v16.11.0
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var c = r("MgzW"),
      n = "function" == typeof Symbol && Symbol.for,
      p = n ? Symbol.for("react.element") : 60103,
      l = n ? Symbol.for("react.portal") : 60106,
      o = n ? Symbol.for("react.fragment") : 60107,
      i = n ? Symbol.for("react.strict_mode") : 60108,
      a = n ? Symbol.for("react.profiler") : 60114,
      s = n ? Symbol.for("react.provider") : 60109,
      u = n ? Symbol.for("react.context") : 60110,
      f = n ? Symbol.for("react.forward_ref") : 60112,
      r = n ? Symbol.for("react.suspense") : 60113;
    n && Symbol.for("react.suspense_list");
    var g = n ? Symbol.for("react.memo") : 60115,
      d = n ? Symbol.for("react.lazy") : 60116;
    n && Symbol.for("react.fundamental"),
      n && Symbol.for("react.responder"),
      n && Symbol.for("react.scope");
    var h = "function" == typeof Symbol && Symbol.iterator;
    function y(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          r = 1;
        r < arguments.length;
        r++
      )
        t += "&args[]=" + encodeURIComponent(arguments[r]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var b = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      m = {};
    function _(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = m),
        (this.updater = r || b);
    }
    function v() {}
    function E(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = m),
        (this.updater = r || b);
    }
    (_.prototype.isReactComponent = {}),
      (_.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e)
          throw Error(y(85));
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (_.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (v.prototype = _.prototype);
    n = E.prototype = new v();
    (n.constructor = E), c(n, _.prototype), (n.isPureReactComponent = !0);
    var w = { current: null },
      S = { current: null },
      T = Object.prototype.hasOwnProperty,
      A = { key: !0, ref: !0, __self: !0, __source: !0 };
    function j(e, t, r) {
      var n,
        o = {},
        i = null,
        a = null;
      if (null != t)
        for (n in (void 0 !== t.ref && (a = t.ref),
        void 0 !== t.key && (i = "" + t.key),
        t))
          T.call(t, n) && !A.hasOwnProperty(n) && (o[n] = t[n]);
      var s = arguments.length - 2;
      if (1 === s) o.children = r;
      else if (1 < s) {
        for (var u = Array(s), l = 0; l < s; l++) u[l] = arguments[l + 2];
        o.children = u;
      }
      if (e && e.defaultProps)
        for (n in (s = e.defaultProps)) void 0 === o[n] && (o[n] = s[n]);
      return {
        $$typeof: p,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: S.current,
      };
    }
    function O(e) {
      return "object" == typeof e && null !== e && e.$$typeof === p;
    }
    var C = /\/+/g,
      k = [];
    function x(e, t, r, n) {
      if (k.length) {
        var o = k.pop();
        return (
          (o.result = e),
          (o.keyPrefix = t),
          (o.func = r),
          (o.context = n),
          (o.count = 0),
          o
        );
      }
      return { result: e, keyPrefix: t, func: r, context: n, count: 0 };
    }
    function I(e) {
      (e.result = null),
        (e.keyPrefix = null),
        (e.func = null),
        (e.context = null),
        (e.count = 0),
        k.length < 10 && k.push(e);
    }
    function M(e, t, r) {
      return null == e
        ? 0
        : (function e(t, r, n, o) {
            var i = !1;
            if (
              null ===
              (t = "undefined" == (s = typeof t) || "boolean" === s ? null : t)
            )
              i = !0;
            else
              switch (s) {
                case "string":
                case "number":
                  i = !0;
                  break;
                case "object":
                  switch (t.$$typeof) {
                    case p:
                    case l:
                      i = !0;
                  }
              }
            if (i) return n(o, t, "" === r ? "." + R(t, 0) : r), 1;
            if (((i = 0), (r = "" === r ? "." : r + ":"), Array.isArray(t)))
              for (var a = 0; a < t.length; a++) {
                var s,
                  u = r + R((s = t[a]), a);
                i += e(s, u, n, o);
              }
            else if (
              "function" ==
              typeof (u =
                null !== t &&
                "object" == typeof t &&
                "function" == typeof (u = (h && t[h]) || t["@@iterator"])
                  ? u
                  : null)
            )
              for (t = u.call(t), a = 0; !(s = t.next()).done; )
                i += e((s = s.value), (u = r + R(s, a++)), n, o);
            else if ("object" === s)
              throw (
                ((n = "" + t),
                Error(
                  y(
                    31,
                    "[object Object]" === n
                      ? "object with keys {" + Object.keys(t).join(", ") + "}"
                      : n,
                    ""
                  )
                ))
              );
            return i;
          })(e, "", t, r);
    }
    function R(e, t) {
      return "object" == typeof e && null !== e && null != e.key
        ? ((e = e.key),
          (r = { "=": "=0", ":": "=2" }),
          "$" +
            ("" + e).replace(/[=:]/g, function (e) {
              return r[e];
            }))
        : t.toString(36);
      var r;
    }
    function B(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function N(e, t, r) {
      var n = e.result,
        o = e.keyPrefix;
      (e = e.func.call(e.context, t, e.count++)),
        Array.isArray(e)
          ? P(e, n, r, function (e) {
              return e;
            })
          : null != e &&
            (O(e) &&
              ((r =
                o +
                (!(o = e).key || (t && t.key === e.key)
                  ? ""
                  : ("" + e.key).replace(C, "$&/") + "/") +
                r),
              (e = {
                $$typeof: p,
                type: o.type,
                key: r,
                ref: o.ref,
                props: o.props,
                _owner: o._owner,
              })),
            n.push(e));
    }
    function P(e, t, r, n, o) {
      var i = "";
      M(
        e,
        N,
        (t = x(t, (i = null != r ? ("" + r).replace(C, "$&/") + "/" : i), n, o))
      ),
        I(t);
    }
    function D() {
      var e = w.current;
      if (null === e) throw Error(y(321));
      return e;
    }
    r = {
      Children: {
        map: function (e, t, r) {
          if (null == e) return e;
          var n = [];
          return P(e, n, null, t, r), n;
        },
        forEach: function (e, t, r) {
          if (null == e) return e;
          M(e, B, (t = x(null, null, t, r))), I(t);
        },
        count: function (e) {
          return M(
            e,
            function () {
              return null;
            },
            null
          );
        },
        toArray: function (e) {
          var t = [];
          return (
            P(e, t, null, function (e) {
              return e;
            }),
            t
          );
        },
        only: function (e) {
          if (!O(e)) throw Error(y(143));
          return e;
        },
      },
      createRef: function () {
        return { current: null };
      },
      Component: _,
      PureComponent: E,
      createContext: function (e, t) {
        return (
          ((e = {
            $$typeof: u,
            _calculateChangedBits: (t = void 0 === t ? null : t),
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }).Provider = { $$typeof: s, _context: e }),
          (e.Consumer = e)
        );
      },
      forwardRef: function (e) {
        return { $$typeof: f, render: e };
      },
      lazy: function (e) {
        return { $$typeof: d, _ctor: e, _status: -1, _result: null };
      },
      memo: function (e, t) {
        return { $$typeof: g, type: e, compare: void 0 === t ? null : t };
      },
      useCallback: function (e, t) {
        return D().useCallback(e, t);
      },
      useContext: function (e, t) {
        return D().useContext(e, t);
      },
      useEffect: function (e, t) {
        return D().useEffect(e, t);
      },
      useImperativeHandle: function (e, t, r) {
        return D().useImperativeHandle(e, t, r);
      },
      useDebugValue: function () {},
      useLayoutEffect: function (e, t) {
        return D().useLayoutEffect(e, t);
      },
      useMemo: function (e, t) {
        return D().useMemo(e, t);
      },
      useReducer: function (e, t, r) {
        return D().useReducer(e, t, r);
      },
      useRef: function (e) {
        return D().useRef(e);
      },
      useState: function (e) {
        return D().useState(e);
      },
      Fragment: o,
      Profiler: a,
      StrictMode: i,
      Suspense: r,
      createElement: j,
      cloneElement: function (e, t, r) {
        if (null == e) throw Error(y(267, e));
        var n = c({}, e.props),
          o = e.key,
          i = e.ref,
          a = e._owner;
        if (null != t)
          for (s in (void 0 !== t.ref && ((i = t.ref), (a = S.current)),
          void 0 !== t.key && (o = "" + t.key),
          e.type && e.type.defaultProps && (u = e.type.defaultProps),
          t))
            T.call(t, s) &&
              !A.hasOwnProperty(s) &&
              (n[s] = (void 0 === t[s] && void 0 !== u ? u : t)[s]);
        var s = arguments.length - 2;
        if (1 === s) n.children = r;
        else if (1 < s) {
          for (var u = Array(s), l = 0; l < s; l++) u[l] = arguments[l + 2];
          n.children = u;
        }
        return {
          $$typeof: p,
          type: e.type,
          key: o,
          ref: i,
          props: n,
          _owner: a,
        };
      },
      createFactory: function (e) {
        var t = j.bind(null, e);
        return (t.type = e), t;
      },
      isValidElement: O,
      version: "16.11.0",
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        ReactCurrentDispatcher: w,
        ReactCurrentBatchConfig: { suspense: null },
        ReactCurrentOwner: S,
        IsSomeRendererActing: { current: !1 },
        assign: c,
      },
    };
    e.exports = r.default || r;
  },
  vvG3: function (e, t, r) {
    e.exports = {
      EmoticonBow: "shared_svg_library_EmoticonBow_2ly3o",
      EmoticonBow_st0: "shared_svg_library_EmoticonBow_st0_HMUMS",
      EmoticonBow_st1: "shared_svg_library_EmoticonBow_st1_3wZe-",
      SteamDeckCompatInfo: "shared_svg_library_SteamDeckCompatInfo_3266r",
      SteamDeckCompatLogo: "shared_svg_library_SteamDeckCompatLogo_Xa7Sr",
      SteamDeckCompatIcon: "shared_svg_library_SteamDeckCompatIcon_1_u0j",
    };
  },
  w0Vi: function (e, t, r) {
    "use strict";
    var o = r("xTJ+"),
      i = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ];
    e.exports = function (e) {
      var t,
        r,
        n = {};
      return (
        e &&
          o.forEach(e.split("\n"), function (e) {
            (r = e.indexOf(":")),
              (t = o.trim(e.substr(0, r)).toLowerCase()),
              (r = o.trim(e.substr(r + 1))),
              t &&
                ((n[t] && 0 <= i.indexOf(t)) ||
                  (n[t] =
                    "set-cookie" === t
                      ? (n[t] || []).concat([r])
                      : n[t]
                      ? n[t] + ", " + r
                      : r));
          }),
        n
      );
    };
  },
  whIR: function (e, t, r) {},
  xAGQ: function (e, t, r) {
    "use strict";
    var o = r("xTJ+"),
      i = r("JEQr");
    e.exports = function (t, r, e) {
      var n = this || i;
      return (
        o.forEach(e, function (e) {
          t = e.call(n, t, r);
        }),
        t
      );
    };
  },
  "xTJ+": function (e, t, r) {
    "use strict";
    var o = r("HSsa"),
      n = Object.prototype.toString;
    function i(e) {
      return "[object Array]" === n.call(e);
    }
    function a(e) {
      return void 0 === e;
    }
    function s(e) {
      return null !== e && "object" == typeof e;
    }
    function u(e) {
      if ("[object Object]" !== n.call(e)) return !1;
      e = Object.getPrototypeOf(e);
      return null === e || e === Object.prototype;
    }
    function l(e) {
      return "[object Function]" === n.call(e);
    }
    function c(e, t) {
      if (null != e)
        if (i((e = "object" != typeof e ? [e] : e)))
          for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
        else
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.call(null, e[o], o, e);
    }
    e.exports = {
      isArray: i,
      isArrayBuffer: function (e) {
        return "[object ArrayBuffer]" === n.call(e);
      },
      isBuffer: function (e) {
        return (
          null !== e &&
          !a(e) &&
          null !== e.constructor &&
          !a(e.constructor) &&
          "function" == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: function (e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      },
      isArrayBufferView: function (e) {
        return (e =
          "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && e.buffer instanceof ArrayBuffer);
      },
      isString: function (e) {
        return "string" == typeof e;
      },
      isNumber: function (e) {
        return "number" == typeof e;
      },
      isObject: s,
      isPlainObject: u,
      isUndefined: a,
      isDate: function (e) {
        return "[object Date]" === n.call(e);
      },
      isFile: function (e) {
        return "[object File]" === n.call(e);
      },
      isBlob: function (e) {
        return "[object Blob]" === n.call(e);
      },
      isFunction: l,
      isStream: function (e) {
        return s(e) && l(e.pipe);
      },
      isURLSearchParams: function (e) {
        return (
          "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        );
      },
      isStandardBrowserEnv: function () {
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      },
      forEach: c,
      merge: function r() {
        var n = {};
        function e(e, t) {
          u(n[t]) && u(e)
            ? (n[t] = r(n[t], e))
            : u(e)
            ? (n[t] = r({}, e))
            : i(e)
            ? (n[t] = e.slice())
            : (n[t] = e);
        }
        for (var t = 0, o = arguments.length; t < o; t++) c(arguments[t], e);
        return n;
      },
      extend: function (r, e, n) {
        return (
          c(e, function (e, t) {
            r[t] = n && "function" == typeof e ? o(e, n) : e;
          }),
          r
        );
      },
      trim: function (e) {
        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
      },
      stripBOM: function (e) {
        return (e = 65279 === e.charCodeAt(0) ? e.slice(1) : e);
      },
    };
  },
  yK9s: function (e, t, r) {
    "use strict";
    var o = r("xTJ+");
    e.exports = function (r, n) {
      o.forEach(r, function (e, t) {
        t !== n &&
          t.toUpperCase() === n.toUpperCase() &&
          ((r[n] = e), delete r[t]);
      });
    };
  },
  yLpj: function (e, t) {
    var r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (r = window);
    }
    e.exports = r;
  },
  yl30: function (e, t, r) {
    "use strict";
    /** @license React v16.11.0
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var o = r("q1tI"),
      h = r("MgzW"),
      i = r("QCnb");
    function B(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          r = 1;
        r < arguments.length;
        r++
      )
        t += "&args[]=" + encodeURIComponent(arguments[r]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    if (!o) throw Error(B(227));
    var l = null,
      c = {};
    function a() {
      if (l)
        for (var e in c) {
          var t = c[e],
            r = l.indexOf(e);
          if (!(-1 < r)) throw Error(B(96, e));
          if (!f[r]) {
            if (!t.extractEvents) throw Error(B(97, e));
            for (var n in (r = (f[r] = t).eventTypes)) {
              var o = void 0,
                i = r[n],
                a = t,
                s = n;
              if (g.hasOwnProperty(s)) throw Error(B(99, s));
              var u = (g[s] = i).phasedRegistrationNames;
              if (u) {
                for (o in u) u.hasOwnProperty(o) && p(u[o], a, s);
                o = !0;
              } else
                o = !!i.registrationName && (p(i.registrationName, a, s), !0);
              if (!o) throw Error(B(98, n, e));
            }
          }
        }
    }
    function p(e, t, r) {
      if (y[e]) throw Error(B(100, e));
      (y[e] = t), (s[e] = t.eventTypes[r].dependencies);
    }
    var f = [],
      g = {},
      y = {},
      s = {};
    var d = !1,
      b = null,
      u = !1,
      m = null,
      _ = {
        onError: function (e) {
          (d = !0), (b = e);
        },
      };
    function v(e, t, r, n, o, i, a, s, u) {
      (d = !1),
        (b = null),
        function (e, t, r, n, o, i, a, s, u) {
          var l = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(r, l);
          } catch (e) {
            this.onError(e);
          }
        }.apply(_, arguments);
    }
    var E = null,
      n = null,
      w = null;
    function S(e, t, r) {
      var n = e.type || "unknown-event";
      (e.currentTarget = w(r)),
        (function () {
          var e;
          v.apply(this, arguments),
            d && ((e = b), (d = !1), (b = null), u || ((u = !0), (m = e)));
        })(n, t, void 0, e),
        (e.currentTarget = null);
    }
    function T(e, t) {
      if (null == t) throw Error(B(30));
      return null == e
        ? t
        : Array.isArray(e)
        ? (Array.isArray(t) ? e.push.apply(e, t) : e.push(t), e)
        : Array.isArray(t)
        ? [e].concat(t)
        : [e, t];
    }
    function A(e, t, r) {
      Array.isArray(e) ? e.forEach(t, r) : e && t.call(r, e);
    }
    var j = null;
    function O(e) {
      if (e) {
        var t = e._dispatchListeners,
          r = e._dispatchInstances;
        if (Array.isArray(t))
          for (var n = 0; n < t.length && !e.isPropagationStopped(); n++)
            S(e, t[n], r[n]);
        else t && S(e, t, r);
        (e._dispatchListeners = null),
          (e._dispatchInstances = null),
          e.isPersistent() || e.constructor.release(e);
      }
    }
    function C(e) {
      if (((e = j = null !== e ? T(j, e) : j), (j = null), e)) {
        if ((A(e, O), j)) throw Error(B(95));
        if (u) throw ((e = m), (u = !1), (m = null), e);
      }
    }
    var k = {
      injectEventPluginOrder: function (e) {
        if (l) throw Error(B(101));
        (l = Array.prototype.slice.call(e)), a();
      },
      injectEventPluginsByName: function (e) {
        var t,
          r = !1;
        for (t in e)
          if (e.hasOwnProperty(t)) {
            var n = e[t];
            if (!c.hasOwnProperty(t) || c[t] !== n) {
              if (c[t]) throw Error(B(102, t));
              (c[t] = n), (r = !0);
            }
          }
        r && a();
      },
    };
    function x(e, t) {
      var r = e.stateNode;
      if (!r) return null;
      var n = E(r);
      if (!n) return null;
      r = n[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
          e = !(n = !(n = !n.disabled)
            ? !(
                "button" === (e = e.type) ||
                "input" === e ||
                "select" === e ||
                "textarea" === e
              )
            : n);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (r && "function" != typeof r) throw Error(B(231, t, typeof r));
      return r;
    }
    var I = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    I.hasOwnProperty("ReactCurrentDispatcher") ||
      (I.ReactCurrentDispatcher = { current: null }),
      I.hasOwnProperty("ReactCurrentBatchConfig") ||
        (I.ReactCurrentBatchConfig = { suspense: null });
    var M = /^(.*)[\\\/]/,
      R = "function" == typeof Symbol && Symbol.for,
      N = R ? Symbol.for("react.element") : 60103,
      P = R ? Symbol.for("react.portal") : 60106,
      D = R ? Symbol.for("react.fragment") : 60107,
      L = R ? Symbol.for("react.strict_mode") : 60108,
      U = R ? Symbol.for("react.profiler") : 60114,
      F = R ? Symbol.for("react.provider") : 60109,
      W = R ? Symbol.for("react.context") : 60110,
      V = R ? Symbol.for("react.concurrent_mode") : 60111,
      z = R ? Symbol.for("react.forward_ref") : 60112,
      H = R ? Symbol.for("react.suspense") : 60113,
      $ = R ? Symbol.for("react.suspense_list") : 60120,
      G = R ? Symbol.for("react.memo") : 60115,
      K = R ? Symbol.for("react.lazy") : 60116;
    R && Symbol.for("react.fundamental"),
      R && Symbol.for("react.responder"),
      R && Symbol.for("react.scope");
    var q = "function" == typeof Symbol && Symbol.iterator;
    function Y(e) {
      return null !== e &&
        "object" == typeof e &&
        "function" == typeof (e = (q && e[q]) || e["@@iterator"])
        ? e
        : null;
    }
    function X(e) {
      if (null == e) return null;
      if ("function" == typeof e) return e.displayName || e.name || null;
      if ("string" == typeof e) return e;
      switch (e) {
        case D:
          return "Fragment";
        case P:
          return "Portal";
        case U:
          return "Profiler";
        case L:
          return "StrictMode";
        case H:
          return "Suspense";
        case $:
          return "SuspenseList";
      }
      if ("object" == typeof e)
        switch (e.$$typeof) {
          case W:
            return "Context.Consumer";
          case F:
            return "Context.Provider";
          case z:
            var t = (t = e.render).displayName || t.name || "";
            return (
              e.displayName ||
              ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
            );
          case G:
            return X(e.type);
          case K:
            if ((e = 1 === e._status ? e._result : null)) return X(e);
        }
      return null;
    }
    function J(e) {
      var t = "";
      do {
        e: switch (e.tag) {
          case 3:
          case 4:
          case 6:
          case 7:
          case 10:
          case 9:
            var r = "";
            break e;
          default:
            var n = e._debugOwner,
              o = e._debugSource,
              i = X(e.type),
              r = null;
            n && (r = X(n.type)),
              (n = i),
              (i = ""),
              o
                ? (i =
                    " (at " +
                    o.fileName.replace(M, "") +
                    ":" +
                    o.lineNumber +
                    ")")
                : r && (i = " (created by " + r + ")"),
              (r = "\n    in " + (n || "Unknown") + i);
        }
      } while (((t += r), (e = e.return)));
      return t;
    }
    var Q = !(
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      ),
      Z = null,
      ee = null,
      te = null;
    function re(e) {
      if ((e = n(e))) {
        if ("function" != typeof Z) throw Error(B(280));
        var t = E(e.stateNode);
        Z(e.stateNode, e.type, t);
      }
    }
    function ne(e) {
      ee ? (te ? te.push(e) : (te = [e])) : (ee = e);
    }
    function oe() {
      if (ee) {
        var e = ee,
          t = te;
        if (((te = ee = null), re(e), t))
          for (e = 0; e < t.length; e++) re(t[e]);
      }
    }
    function ie(e, t) {
      return e(t);
    }
    function ae(e, t, r, n) {
      return e(t, r, n);
    }
    function se() {}
    var ue = ie,
      le = !1,
      ce = !1;
    function pe() {
      (null === ee && null === te) || (se(), oe());
    }
    new Map();
    var fe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      ge = Object.prototype.hasOwnProperty,
      de = {},
      he = {};
    function ye(e, t, r, n) {
      if (
        null == t ||
        (function (e, t, r, n) {
          if (null === r || 0 !== r.type)
            switch (typeof t) {
              case "function":
              case "symbol":
                return 1;
              case "boolean":
                return n
                  ? void 0
                  : null !== r
                  ? !r.acceptsBooleans
                  : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                    "aria-" !== e;
              default:
                return;
            }
        })(e, t, r, n)
      )
        return 1;
      if (!n && null !== r)
        switch (r.type) {
          case 3:
            return !t;
          case 4:
            return !1 === t;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || t < 1;
        }
    }
    function be(e, t, r, n, o, i) {
      (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = n),
        (this.attributeNamespace = o),
        (this.mustUseProperty = r),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i);
    }
    var me = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (e) {
        me[e] = new be(e, 0, !1, e, null, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (e) {
        var t = e[0];
        me[t] = new be(t, 1, !1, e[1], null, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
        e
      ) {
        me[e] = new be(e, 2, !1, e.toLowerCase(), null, !1);
      }),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (e) {
        me[e] = new be(e, 2, !1, e, null, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (e) {
          me[e] = new be(e, 3, !1, e.toLowerCase(), null, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (e) {
        me[e] = new be(e, 3, !0, e, null, !1);
      }),
      ["capture", "download"].forEach(function (e) {
        me[e] = new be(e, 4, !1, e, null, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (e) {
        me[e] = new be(e, 6, !1, e, null, !1);
      }),
      ["rowSpan", "start"].forEach(function (e) {
        me[e] = new be(e, 5, !1, e.toLowerCase(), null, !1);
      });
    var _e = /[\-:]([a-z])/g;
    function ve(e) {
      return e[1].toUpperCase();
    }
    function Ee(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e;
        default:
          return "";
      }
    }
    function we(e, t, r, n) {
      var o,
        i = me.hasOwnProperty(t) ? me[t] : null;
      (null !== i
        ? 0 !== i.type
        : n ||
          !(2 < t.length) ||
          ("o" !== t[0] && "O" !== t[0]) ||
          ("n" !== t[1] && "N" !== t[1])) &&
        (ye(t, r, i, n) && (r = null),
        n || null === i
          ? ((o = t),
            (ge.call(he, o) ||
              (!ge.call(de, o) &&
                (fe.test(o) ? (he[o] = !0) : void (de[o] = !0)))) &&
              (null === r ? e.removeAttribute(t) : e.setAttribute(t, "" + r)))
          : i.mustUseProperty
          ? (e[i.propertyName] = null === r ? 3 !== i.type && "" : r)
          : ((t = i.attributeName),
            (n = i.attributeNamespace),
            null === r
              ? e.removeAttribute(t)
              : ((r =
                  3 === (i = i.type) || (4 === i && !0 === r) ? "" : "" + r),
                n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
    }
    function Se(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        "input" === e.toLowerCase() &&
        ("checkbox" === t || "radio" === t)
      );
    }
    function Te(e) {
      e._valueTracker ||
        (e._valueTracker = (function (e) {
          var t = Se(e) ? "checked" : "value",
            r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            n = "" + e[t];
          if (
            !e.hasOwnProperty(t) &&
            void 0 !== r &&
            "function" == typeof r.get &&
            "function" == typeof r.set
          ) {
            var o = r.get,
              i = r.set;
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return o.call(this);
                },
                set: function (e) {
                  (n = "" + e), i.call(this, e);
                },
              }),
              Object.defineProperty(e, t, { enumerable: r.enumerable }),
              {
                getValue: function () {
                  return n;
                },
                setValue: function (e) {
                  n = "" + e;
                },
                stopTracking: function () {
                  (e._valueTracker = null), delete e[t];
                },
              }
            );
          }
        })(e));
    }
    function Ae(e) {
      if (e) {
        var t = e._valueTracker;
        if (!t) return 1;
        var r = t.getValue(),
          n = "";
        return (
          (e = n = e
            ? Se(e)
              ? e.checked
                ? "true"
                : "false"
              : e.value
            : n) !== r && (t.setValue(e), 1)
        );
      }
    }
    function je(e, t) {
      var r = t.checked;
      return h({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != r ? r : e._wrapperState.initialChecked,
      });
    }
    function Oe(e, t) {
      var r = null == t.defaultValue ? "" : t.defaultValue,
        n = null != t.checked ? t.checked : t.defaultChecked,
        r = Ee(null != t.value ? t.value : r);
      e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled:
          "checkbox" === t.type || "radio" === t.type
            ? null != t.checked
            : null != t.value,
      };
    }
    function Ce(e, t) {
      null != (t = t.checked) && we(e, "checked", t, !1);
    }
    function ke(e, t) {
      Ce(e, t);
      var r = Ee(t.value),
        n = t.type;
      if (null != r)
        "number" === n
          ? ((0 === r && "" === e.value) || e.value != r) && (e.value = "" + r)
          : e.value !== "" + r && (e.value = "" + r);
      else if ("submit" === n || "reset" === n)
        return void e.removeAttribute("value");
      t.hasOwnProperty("value")
        ? Ie(e, t.type, r)
        : t.hasOwnProperty("defaultValue") && Ie(e, t.type, Ee(t.defaultValue)),
        null == t.checked &&
          null != t.defaultChecked &&
          (e.defaultChecked = !!t.defaultChecked);
    }
    function xe(e, t, r) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var n = t.type;
        if (
          !(
            ("submit" !== n && "reset" !== n) ||
            (void 0 !== t.value && null !== t.value)
          )
        )
          return;
        (t = "" + e._wrapperState.initialValue),
          r || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      "" !== (r = e.name) && (e.name = ""),
        (e.defaultChecked = !e.defaultChecked),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        "" !== r && (e.name = r);
    }
    function Ie(e, t, r) {
      ("number" === t && e.ownerDocument.activeElement === e) ||
        (null == r
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
    }
    function Me(e, t) {
      var r, n;
      return (
        (e = h({ children: void 0 }, t)),
        (r = t.children),
        (n = ""),
        o.Children.forEach(r, function (e) {
          null != e && (n += e);
        }),
        (t = n) && (e.children = t),
        e
      );
    }
    function Re(e, t, r, n) {
      if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
        for (r = 0; r < e.length; r++)
          (o = t.hasOwnProperty("$" + e[r].value)),
            e[r].selected !== o && (e[r].selected = o),
            o && n && (e[r].defaultSelected = !0);
      } else {
        for (r = "" + Ee(r), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === r)
            return (
              (e[o].selected = !0), void (n && (e[o].defaultSelected = !0))
            );
          null !== t || e[o].disabled || (t = e[o]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function Be(e, t) {
      if (null != t.dangerouslySetInnerHTML) throw Error(B(91));
      return h({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
      });
    }
    function Ne(e, t) {
      var r = t.value;
      if (null == r) {
        if (((r = t.defaultValue), null != (t = t.children))) {
          if (null != r) throw Error(B(92));
          if (Array.isArray(t)) {
            if (!(t.length <= 1)) throw Error(B(93));
            t = t[0];
          }
          r = t;
        }
        null == r && (r = "");
      }
      e._wrapperState = { initialValue: Ee(r) };
    }
    function Pe(e, t) {
      var r = Ee(t.value),
        n = Ee(t.defaultValue);
      null != r &&
        ((r = "" + r) !== e.value && (e.value = r),
        null == t.defaultValue && e.defaultValue !== r && (e.defaultValue = r)),
        null != n && (e.defaultValue = "" + n);
    }
    function De(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        "" !== t &&
        null !== t &&
        (e.value = t);
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(_e, ve);
        me[t] = new be(t, 1, !1, e, null, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(_e, ve);
          me[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var t = e.replace(_e, ve);
        me[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1);
      }),
      ["tabIndex", "crossOrigin"].forEach(function (e) {
        me[e] = new be(e, 1, !1, e.toLowerCase(), null, !1);
      }),
      (me.xlinkHref = new be(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0
      )),
      ["src", "href", "action", "formAction"].forEach(function (e) {
        me[e] = new be(e, 1, !1, e.toLowerCase(), null, !0);
      });
    var Le = {
      html: "http://www.w3.org/1999/xhtml",
      mathml: "http://www.w3.org/1998/Math/MathML",
      svg: "http://www.w3.org/2000/svg",
    };
    function Ue(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function Fe(e, t) {
      return null == e || "http://www.w3.org/1999/xhtml" === e
        ? Ue(t)
        : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
        ? "http://www.w3.org/1999/xhtml"
        : e;
    }
    var We,
      Ve,
      ze =
        ((Ve = function (e, t) {
          if (e.namespaceURI !== Le.svg || "innerHTML" in e) e.innerHTML = t;
          else {
            for (
              (We = We || document.createElement("div")).innerHTML =
                "<svg>" + t.valueOf().toString() + "</svg>",
                t = We.firstChild;
              e.firstChild;

            )
              e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
          }
        }),
        "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (e, t, r, n) {
              MSApp.execUnsafeLocalFunction(function () {
                return Ve(e, t);
              });
            }
          : Ve);
    function He(e, t) {
      if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && 3 === r.nodeType)
          return void (r.nodeValue = t);
      }
      e.textContent = t;
    }
    function $e(e, t) {
      var r = {};
      return (
        (r[e.toLowerCase()] = t.toLowerCase()),
        (r["Webkit" + e] = "webkit" + t),
        (r["Moz" + e] = "moz" + t),
        r
      );
    }
    var Ge = {
        animationend: $e("Animation", "AnimationEnd"),
        animationiteration: $e("Animation", "AnimationIteration"),
        animationstart: $e("Animation", "AnimationStart"),
        transitionend: $e("Transition", "TransitionEnd"),
      },
      Ke = {},
      qe = {};
    function Ye(e) {
      if (Ke[e]) return Ke[e];
      if (!Ge[e]) return e;
      var t,
        r = Ge[e];
      for (t in r) if (r.hasOwnProperty(t) && t in qe) return (Ke[e] = r[t]);
      return e;
    }
    Q &&
      ((qe = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Ge.animationend.animation,
        delete Ge.animationiteration.animation,
        delete Ge.animationstart.animation),
      "TransitionEvent" in window || delete Ge.transitionend.transition);
    var Xe = Ye("animationend"),
      Je = Ye("animationiteration"),
      Qe = Ye("animationstart"),
      Ze = Ye("transitionend"),
      et = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      );
    function tt(e) {
      var t = e,
        r = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else
        for (
          e = t;
          0 != (1026 & (t = e).effectTag) && (r = t.return), (e = t.return);

        );
      return 3 === t.tag ? r : null;
    }
    function rt(e) {
      if (13 === e.tag) {
        var t = e.memoizedState;
        if (
          (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
          null !== t)
        )
          return t.dehydrated;
      }
      return null;
    }
    function nt(e) {
      if (tt(e) !== e) throw Error(B(188));
    }
    function ot(e) {
      if (
        !(e = (function (e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = tt(e))) throw Error(B(188));
            return t !== e ? null : e;
          }
          for (var r = e, n = t; ; ) {
            var o = r.return;
            if (null === o) break;
            var i = o.alternate;
            if (null !== i) {
              if (o.child === i.child) {
                for (i = o.child; i; ) {
                  if (i === r) return nt(o), e;
                  if (i === n) return nt(o), t;
                  i = i.sibling;
                }
                throw Error(B(188));
              }
              if (r.return !== n.return) (r = o), (n = i);
              else {
                for (var a = !1, s = o.child; s; ) {
                  if (s === r) {
                    (a = !0), (r = o), (n = i);
                    break;
                  }
                  if (s === n) {
                    (a = !0), (n = o), (r = i);
                    break;
                  }
                  s = s.sibling;
                }
                if (!a) {
                  for (s = i.child; s; ) {
                    if (s === r) {
                      (a = !0), (r = i), (n = o);
                      break;
                    }
                    if (s === n) {
                      (a = !0), (n = i), (r = o);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!a) throw Error(B(189));
                }
              }
              if (r.alternate !== n) throw Error(B(190));
            } else {
              if (null === (n = o.return)) break;
              r = n;
            }
          }
          if (3 !== r.tag) throw Error(B(188));
          return r.stateNode.current === r ? e : t;
        })(e))
      )
        return null;
      for (var t = e; ; ) {
        if (5 === t.tag || 6 === t.tag) return t;
        if (t.child) t = (t.child.return = t).child;
        else {
          if (t === e) break;
          for (; !t.sibling; ) {
            if (!t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return null;
    }
    var it,
      at,
      st,
      ut = !1,
      lt = [],
      ct = null,
      pt = null,
      ft = null,
      gt = new Map(),
      dt = new Map(),
      ht = [],
      yt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
        " "
      ),
      bt = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(
        " "
      );
    function mt(e, t, r, n) {
      return {
        blockedOn: e,
        topLevelType: t,
        eventSystemFlags: 32 | r,
        nativeEvent: n,
      };
    }
    function _t(e, t) {
      switch (e) {
        case "focus":
        case "blur":
          ct = null;
          break;
        case "dragenter":
        case "dragleave":
          pt = null;
          break;
        case "mouseover":
        case "mouseout":
          ft = null;
          break;
        case "pointerover":
        case "pointerout":
          gt.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          dt.delete(t.pointerId);
      }
    }
    function vt(e, t, r, n, o) {
      return (
        null === e || e.nativeEvent !== o
          ? ((e = mt(t, r, n, o)),
            null === t || (null !== (t = ln(t)) && at(t)))
          : (e.eventSystemFlags |= n),
        e
      );
    }
    function Et(e) {
      if (null === e.blockedOn) {
        var t = jr(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
        if (null === t) return 1;
        var r = ln(t);
        null !== r && at(r), void (e.blockedOn = t);
      }
    }
    function wt(e, t, r) {
      Et(e) && r.delete(t);
    }
    function St() {
      for (ut = !1; 0 < lt.length; ) {
        var e = lt[0];
        if (null !== e.blockedOn) {
          null !== (e = ln(e.blockedOn)) && it(e);
          break;
        }
        var t = jr(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
        null !== t ? (e.blockedOn = t) : lt.shift();
      }
      null !== ct && Et(ct) && (ct = null),
        null !== pt && Et(pt) && (pt = null),
        null !== ft && Et(ft) && (ft = null),
        gt.forEach(wt),
        dt.forEach(wt);
    }
    function Tt(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        ut ||
          ((ut = !0),
          i.unstable_scheduleCallback(i.unstable_NormalPriority, St)));
    }
    function At(t) {
      function e(e) {
        return Tt(e, t);
      }
      if (0 < lt.length) {
        Tt(lt[0], t);
        for (var r = 1; r < lt.length; r++) {
          var n = lt[r];
          n.blockedOn === t && (n.blockedOn = null);
        }
      }
      for (
        null !== ct && Tt(ct, t),
          null !== pt && Tt(pt, t),
          null !== ft && Tt(ft, t),
          gt.forEach(e),
          dt.forEach(e),
          r = 0;
        r < ht.length;
        r++
      )
        (n = ht[r]).blockedOn === t && (n.blockedOn = null);
      for (; 0 < ht.length && null === (r = ht[0]).blockedOn; )
        (function (e) {
          var t = un(e.target);
          if (null !== t) {
            var r = tt(t);
            if (null !== r)
              if (13 === (t = r.tag)) {
                if (null !== (t = rt(r)))
                  return (
                    (e.blockedOn = t),
                    i.unstable_runWithPriority(e.priority, function () {
                      st(r);
                    })
                  );
              } else if (3 === t && r.stateNode.hydrate)
                return (e.blockedOn =
                  3 === r.tag ? r.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        })(r),
          null === r.blockedOn && ht.shift();
    }
    function jt(e) {
      return 3 ===
        (e = (e = e.target || e.srcElement || window).correspondingUseElement
          ? e.correspondingUseElement
          : e).nodeType
        ? e.parentNode
        : e;
    }
    function Ot(e) {
      for (; (e = e.return) && 5 !== e.tag; );
      return e || null;
    }
    function Ct(e, t, r) {
      (t = x(e, r.dispatchConfig.phasedRegistrationNames[t])) &&
        ((r._dispatchListeners = T(r._dispatchListeners, t)),
        (r._dispatchInstances = T(r._dispatchInstances, e)));
    }
    function kt(e) {
      if (e && e.dispatchConfig.phasedRegistrationNames) {
        for (var t = e._targetInst, r = []; t; ) r.push(t), (t = Ot(t));
        for (t = r.length; 0 < t--; ) Ct(r[t], "captured", e);
        for (t = 0; t < r.length; t++) Ct(r[t], "bubbled", e);
      }
    }
    function xt(e, t, r) {
      e &&
        r &&
        r.dispatchConfig.registrationName &&
        (t = x(e, r.dispatchConfig.registrationName)) &&
        ((r._dispatchListeners = T(r._dispatchListeners, t)),
        (r._dispatchInstances = T(r._dispatchInstances, e)));
    }
    function It(e) {
      e && e.dispatchConfig.registrationName && xt(e._targetInst, null, e);
    }
    function Mt(e) {
      A(e, kt);
    }
    function Rt() {
      return !0;
    }
    function Bt() {
      return !1;
    }
    function Nt(e, t, r, n) {
      for (var o in ((this.dispatchConfig = e),
      (this._targetInst = t),
      (this.nativeEvent = r),
      (e = this.constructor.Interface)))
        e.hasOwnProperty(o) &&
          ((t = e[o])
            ? (this[o] = t(r))
            : "target" === o
            ? (this.target = n)
            : (this[o] = r[o]));
      return (
        (this.isDefaultPrevented = (
          null != r.defaultPrevented ? r.defaultPrevented : !1 === r.returnValue
        )
          ? Rt
          : Bt),
        (this.isPropagationStopped = Bt),
        this
      );
    }
    function Pt(e, t, r, n) {
      if (this.eventPool.length) {
        var o = this.eventPool.pop();
        return this.call(o, e, t, r, n), o;
      }
      return new this(e, t, r, n);
    }
    function Dt(e) {
      if (!(e instanceof this)) throw Error(B(279));
      e.destructor(), this.eventPool.length < 10 && this.eventPool.push(e);
    }
    function Lt(e) {
      (e.eventPool = []), (e.getPooled = Pt), (e.release = Dt);
    }
    h(Nt.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : "unknown" != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = Rt));
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = Rt));
      },
      persist: function () {
        this.isPersistent = Rt;
      },
      isPersistent: Bt,
      destructor: function () {
        for (var e in this.constructor.Interface) this[e] = null;
        (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
          (this.isPropagationStopped = this.isDefaultPrevented = Bt),
          (this._dispatchInstances = this._dispatchListeners = null);
      },
    }),
      (Nt.Interface = {
        type: null,
        target: null,
        currentTarget: function () {
          return null;
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: null,
        isTrusted: null,
      }),
      (Nt.extend = function (e) {
        function t() {}
        function r() {
          return n.apply(this, arguments);
        }
        var n = this;
        t.prototype = n.prototype;
        var o = new t();
        return (
          h(o, r.prototype),
          (((r.prototype = o).constructor = r).Interface = h(
            {},
            n.Interface,
            e
          )),
          (r.extend = n.extend),
          Lt(r),
          r
        );
      }),
      Lt(Nt);
    var Ut = Nt.extend({
        animationName: null,
        elapsedTime: null,
        pseudoElement: null,
      }),
      Ft = Nt.extend({
        clipboardData: function (e) {
          return ("clipboardData" in e ? e : window).clipboardData;
        },
      }),
      Wt = Nt.extend({ view: null, detail: null }),
      Vt = Wt.extend({ relatedTarget: null });
    function zt(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? 0 === (e = e.charCode) && 13 === t && (e = 13)
          : (e = t),
        32 <= (e = 10 === e ? 13 : e) || 13 === e ? e : 0
      );
    }
    var Ht = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      $t = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      Gt = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function Kt(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : !!(e = Gt[e]) && !!t[e];
    }
    function qt() {
      return Kt;
    }
    for (
      var Yt = Wt.extend({
          key: function (e) {
            if (e.key) {
              var t = Ht[e.key] || e.key;
              if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type
              ? 13 === (e = zt(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
              ? $t[e.keyCode] || "Unidentified"
              : "";
          },
          location: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          repeat: null,
          locale: null,
          getModifierState: qt,
          charCode: function (e) {
            return "keypress" === e.type ? zt(e) : 0;
          },
          keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return "keypress" === e.type
              ? zt(e)
              : "keydown" === e.type || "keyup" === e.type
              ? e.keyCode
              : 0;
          },
        }),
        Xt = 0,
        Jt = 0,
        Qt = !1,
        Zt = !1,
        er = Wt.extend({
          screenX: null,
          screenY: null,
          clientX: null,
          clientY: null,
          pageX: null,
          pageY: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          getModifierState: qt,
          button: null,
          buttons: null,
          relatedTarget: function (e) {
            return (
              e.relatedTarget ||
              (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            );
          },
          movementX: function (e) {
            if (("movementX" in e)) return e.movementX;
            var t = Xt;
            return (
              (Xt = e.screenX),
              Qt ? ("mousemove" === e.type ? e.screenX - t : 0) : ((Qt = !0), 0)
            );
          },
          movementY: function (e) {
            if (("movementY" in e)) return e.movementY;
            var t = Jt;
            return (
              (Jt = e.screenY),
              Zt ? ("mousemove" === e.type ? e.screenY - t : 0) : ((Zt = !0), 0)
            );
          },
        }),
        tr = er.extend({
          pointerId: null,
          width: null,
          height: null,
          pressure: null,
          tangentialPressure: null,
          tiltX: null,
          tiltY: null,
          twist: null,
          pointerType: null,
          isPrimary: null,
        }),
        rr = er.extend({ dataTransfer: null }),
        nr = Wt.extend({
          touches: null,
          targetTouches: null,
          changedTouches: null,
          altKey: null,
          metaKey: null,
          ctrlKey: null,
          shiftKey: null,
          getModifierState: qt,
        }),
        or = Nt.extend({
          propertyName: null,
          elapsedTime: null,
          pseudoElement: null,
        }),
        ir = er.extend({
          deltaX: function (e) {
            return ("deltaX" in e)
              ? e.deltaX
              : ("wheelDeltaX" in e)
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function (e) {
            return ("deltaY" in e)
              ? e.deltaY
              : ("wheelDeltaY" in e)
              ? -e.wheelDeltaY
              : ("wheelDelta" in e)
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: null,
          deltaMode: null,
        }),
        ar = [
          ["blur", "blur", 0],
          ["cancel", "cancel", 0],
          ["click", "click", 0],
          ["close", "close", 0],
          ["contextmenu", "contextMenu", 0],
          ["copy", "copy", 0],
          ["cut", "cut", 0],
          ["auxclick", "auxClick", 0],
          ["dblclick", "doubleClick", 0],
          ["dragend", "dragEnd", 0],
          ["dragstart", "dragStart", 0],
          ["drop", "drop", 0],
          ["focus", "focus", 0],
          ["input", "input", 0],
          ["invalid", "invalid", 0],
          ["keydown", "keyDown", 0],
          ["keypress", "keyPress", 0],
          ["keyup", "keyUp", 0],
          ["mousedown", "mouseDown", 0],
          ["mouseup", "mouseUp", 0],
          ["paste", "paste", 0],
          ["pause", "pause", 0],
          ["play", "play", 0],
          ["pointercancel", "pointerCancel", 0],
          ["pointerdown", "pointerDown", 0],
          ["pointerup", "pointerUp", 0],
          ["ratechange", "rateChange", 0],
          ["reset", "reset", 0],
          ["seeked", "seeked", 0],
          ["submit", "submit", 0],
          ["touchcancel", "touchCancel", 0],
          ["touchend", "touchEnd", 0],
          ["touchstart", "touchStart", 0],
          ["volumechange", "volumeChange", 0],
          ["drag", "drag", 1],
          ["dragenter", "dragEnter", 1],
          ["dragexit", "dragExit", 1],
          ["dragleave", "dragLeave", 1],
          ["dragover", "dragOver", 1],
          ["mousemove", "mouseMove", 1],
          ["mouseout", "mouseOut", 1],
          ["mouseover", "mouseOver", 1],
          ["pointermove", "pointerMove", 1],
          ["pointerout", "pointerOut", 1],
          ["pointerover", "pointerOver", 1],
          ["scroll", "scroll", 1],
          ["toggle", "toggle", 1],
          ["touchmove", "touchMove", 1],
          ["wheel", "wheel", 1],
          ["abort", "abort", 2],
          [Xe, "animationEnd", 2],
          [Je, "animationIteration", 2],
          [Qe, "animationStart", 2],
          ["canplay", "canPlay", 2],
          ["canplaythrough", "canPlayThrough", 2],
          ["durationchange", "durationChange", 2],
          ["emptied", "emptied", 2],
          ["encrypted", "encrypted", 2],
          ["ended", "ended", 2],
          ["error", "error", 2],
          ["gotpointercapture", "gotPointerCapture", 2],
          ["load", "load", 2],
          ["loadeddata", "loadedData", 2],
          ["loadedmetadata", "loadedMetadata", 2],
          ["loadstart", "loadStart", 2],
          ["lostpointercapture", "lostPointerCapture", 2],
          ["playing", "playing", 2],
          ["progress", "progress", 2],
          ["seeking", "seeking", 2],
          ["stalled", "stalled", 2],
          ["suspend", "suspend", 2],
          ["timeupdate", "timeUpdate", 2],
          [Ze, "transitionEnd", 2],
          ["waiting", "waiting", 2],
        ],
        sr = {},
        ur = {},
        lr = 0;
      lr < ar.length;
      lr++
    ) {
      var cr = ar[lr],
        pr = cr[0],
        fr = cr[1],
        gr = cr[2],
        cr = "on" + (fr[0].toUpperCase() + fr.slice(1)),
        gr = {
          phasedRegistrationNames: { bubbled: cr, captured: cr + "Capture" },
          dependencies: [pr],
          eventPriority: gr,
        };
      (sr[fr] = gr), (ur[pr] = gr);
    }
    var dr = {
        eventTypes: sr,
        getEventPriority: function (e) {
          return void 0 !== (e = ur[e]) ? e.eventPriority : 2;
        },
        extractEvents: function (e, t, r, n) {
          var o = ur[e];
          if (!o) return null;
          switch (e) {
            case "keypress":
              if (0 === zt(r)) return null;
            case "keydown":
            case "keyup":
              e = Yt;
              break;
            case "blur":
            case "focus":
              e = Vt;
              break;
            case "click":
              if (2 === r.button) return null;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              e = er;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              e = rr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              e = nr;
              break;
            case Xe:
            case Je:
            case Qe:
              e = Ut;
              break;
            case Ze:
              e = or;
              break;
            case "scroll":
              e = Wt;
              break;
            case "wheel":
              e = ir;
              break;
            case "copy":
            case "cut":
            case "paste":
              e = Ft;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              e = tr;
              break;
            default:
              e = Nt;
          }
          return Mt((t = e.getPooled(o, t, r, n))), t;
        },
      },
      hr = i.unstable_UserBlockingPriority,
      yr = i.unstable_runWithPriority,
      br = dr.getEventPriority,
      mr = 10,
      _r = [];
    function vr(e) {
      var t = (n = e.targetInst);
      do {
        if (!t) {
          e.ancestors.push(t);
          break;
        }
        var r = t;
        if (3 === r.tag) r = r.stateNode.containerInfo;
        else {
          for (; r.return; ) r = r.return;
          r = 3 !== r.tag ? null : r.stateNode.containerInfo;
        }
      } while (
        r &&
        ((5 !== (n = t.tag) && 6 !== n) || e.ancestors.push(t), (t = un(r)))
      );
      for (t = 0; t < e.ancestors.length; t++) {
        for (
          var n = e.ancestors[t],
            o = jt(e.nativeEvent),
            r = e.topLevelType,
            i = e.nativeEvent,
            a = e.eventSystemFlags,
            s = null,
            u = 0;
          u < f.length;
          u++
        ) {
          var l = f[u];
          (l = l && l.extractEvents(r, n, i, o, a)) && (s = T(s, l));
        }
        C(s);
      }
    }
    var Er = !0;
    function wr(e, t) {
      Sr(t, e, !1);
    }
    function Sr(e, t, r) {
      switch (br(t)) {
        case 0:
          var n = function (e, t, r) {
            le || se();
            var n = Ar,
              o = le;
            le = !0;
            try {
              ae(n, e, t, r);
            } finally {
              (le = o) || pe();
            }
          }.bind(null, t, 1);
          break;
        case 1:
          n = function (e, t, r) {
            yr(hr, Ar.bind(null, e, t, r));
          }.bind(null, t, 1);
          break;
        default:
          n = Ar.bind(null, t, 1);
      }
      r ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, !1);
    }
    function Tr(e, t, r, n) {
      var o;
      e = _r.length
        ? (((o = _r.pop()).topLevelType = e),
          (o.eventSystemFlags = t),
          (o.nativeEvent = r),
          (o.targetInst = n),
          o)
        : {
            topLevelType: e,
            eventSystemFlags: t,
            nativeEvent: r,
            targetInst: n,
            ancestors: [],
          };
      try {
        if (((t = vr), (r = e), ce)) t(r, void 0);
        else {
          ce = !0;
          try {
            ue(t, r, void 0);
          } finally {
            (ce = !1), pe();
          }
        }
      } finally {
        (e.topLevelType = null),
          (e.nativeEvent = null),
          (e.targetInst = null),
          (e.ancestors.length = 0),
          _r.length < mr && _r.push(e);
      }
    }
    function Ar(e, t, r) {
      var n;
      Er &&
        (0 < lt.length && -1 < yt.indexOf(e)
          ? ((e = mt(null, e, t, r)), lt.push(e))
          : null === (n = jr(e, t, r))
          ? _t(e, r)
          : -1 < yt.indexOf(e)
          ? ((e = mt(n, e, t, r)), lt.push(e))
          : (function (e, t, r, n) {
              switch (t) {
                case "focus":
                  return (ct = vt(ct, e, t, r, n)), 1;
                case "dragenter":
                  return (pt = vt(pt, e, t, r, n)), 1;
                case "mouseover":
                  return (ft = vt(ft, e, t, r, n)), 1;
                case "pointerover":
                  var o = n.pointerId;
                  return gt.set(o, vt(gt.get(o) || null, e, t, r, n)), 1;
                case "gotpointercapture":
                  return (
                    (o = n.pointerId),
                    dt.set(o, vt(dt.get(o) || null, e, t, r, n)),
                    1
                  );
              }
            })(n, e, t, r) || (_t(e, r), Tr(e, t, r, null)));
    }
    function jr(e, t, r) {
      var n = jt(r);
      if (null !== (n = un(n))) {
        var o = tt(n);
        if (null === o) n = null;
        else {
          var i = o.tag;
          if (13 === i) {
            if (null !== (n = rt(o))) return n;
            n = null;
          } else if (3 === i) {
            if (o.stateNode.hydrate)
              return 3 === o.tag ? o.stateNode.containerInfo : null;
            n = null;
          } else o !== n && (n = null);
        }
      }
      return Tr(e, t, r, n), null;
    }
    function Or(e) {
      if (!Q) return !1;
      var t = (e = "on" + e) in document;
      return (
        t ||
          ((t = document.createElement("div")).setAttribute(e, "return;"),
          (t = "function" == typeof t[e])),
        t
      );
    }
    var Cr = new ("function" == typeof WeakMap ? WeakMap : Map)();
    function kr(e) {
      var t = Cr.get(e);
      return void 0 === t && ((t = new Set()), Cr.set(e, t)), t;
    }
    function xr(e, t, r) {
      if (!r.has(e)) {
        switch (e) {
          case "scroll":
            Sr(t, "scroll", !0);
            break;
          case "focus":
          case "blur":
            Sr(t, "focus", !0),
              Sr(t, "blur", !0),
              r.add("blur"),
              r.add("focus");
            break;
          case "cancel":
          case "close":
            Or(e) && Sr(t, e, !0);
            break;
          case "invalid":
          case "submit":
          case "reset":
            break;
          default:
            -1 === et.indexOf(e) && wr(e, t);
        }
        r.add(e);
      }
    }
    var Ir = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      Mr = ["Webkit", "ms", "Moz", "O"];
    function Rr(e, t, r) {
      return null == t || "boolean" == typeof t || "" === t
        ? ""
        : r ||
          "number" != typeof t ||
          0 === t ||
          (Ir.hasOwnProperty(e) && Ir[e])
        ? ("" + t).trim()
        : t + "px";
    }
    function Br(e, t) {
      for (var r in ((e = e.style), t)) {
        var n, o;
        t.hasOwnProperty(r) &&
          ((n = 0 === r.indexOf("--")),
          (o = Rr(r, t[r], n)),
          "float" === r && (r = "cssFloat"),
          n ? e.setProperty(r, o) : (e[r] = o));
      }
    }
    Object.keys(Ir).forEach(function (t) {
      Mr.forEach(function (e) {
        (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Ir[e] = Ir[t]);
      });
    });
    var Nr = h(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    );
    function Pr(e, t) {
      if (t) {
        if (Nr[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
          throw Error(B(137, e, ""));
        if (null != t.dangerouslySetInnerHTML) {
          if (null != t.children) throw Error(B(60));
          if (
            !(
              "object" == typeof t.dangerouslySetInnerHTML &&
              "__html" in t.dangerouslySetInnerHTML
            )
          )
            throw Error(B(61));
        }
        if (null != t.style && "object" != typeof t.style)
          throw Error(B(62, ""));
      }
    }
    function Dr(e, t) {
      if (-1 === e.indexOf("-")) return "string" == typeof t.is;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function Lr(e, t) {
      var r = kr(
        (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument)
      );
      t = s[t];
      for (var n = 0; n < t.length; n++) xr(t[n], e, r);
    }
    function Ur() {}
    function Fr(t) {
      if (
        void 0 ===
        (t = t || ("undefined" != typeof document ? document : void 0))
      )
        return null;
      try {
        return t.activeElement || t.body;
      } catch (e) {
        return t.body;
      }
    }
    function Wr(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Vr(e, t) {
      var r,
        n = Wr(e);
      for (e = 0; n; ) {
        if (3 === n.nodeType) {
          if (((r = e + n.textContent.length), e <= t && t <= r))
            return { node: n, offset: t - e };
          e = r;
        }
        e: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break e;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Wr(n);
      }
    }
    function zr() {
      for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var r = "string" == typeof t.contentWindow.location.href;
        } catch (e) {
          r = !1;
        }
        if (!r) break;
        t = Fr((e = t.contentWindow).document);
      }
      return t;
    }
    function Hr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        (("input" === t &&
          ("text" === e.type ||
            "search" === e.type ||
            "tel" === e.type ||
            "url" === e.type ||
            "password" === e.type)) ||
          "textarea" === t ||
          "true" === e.contentEditable)
      );
    }
    var $r = "$",
      Gr = "/$",
      Kr = "$?",
      qr = "$!",
      Yr = null,
      Xr = null;
    function Jr(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    function Qr(e, t) {
      return (
        "textarea" === e ||
        "option" === e ||
        "noscript" === e ||
        "string" == typeof t.children ||
        "number" == typeof t.children ||
        ("object" == typeof t.dangerouslySetInnerHTML &&
          null !== t.dangerouslySetInnerHTML &&
          null != t.dangerouslySetInnerHTML.__html)
      );
    }
    var Zr = "function" == typeof setTimeout ? setTimeout : void 0,
      en = "function" == typeof clearTimeout ? clearTimeout : void 0;
    function tn(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
      }
      return e;
    }
    function rn(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (8 === e.nodeType) {
          var r = e.data;
          if (r === $r || r === qr || r === Kr) {
            if (0 === t) return e;
            t--;
          } else r === Gr && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var nn = Math.random().toString(36).slice(2),
      on = "__reactInternalInstance$" + nn,
      an = "__reactEventHandlers$" + nn,
      sn = "__reactContainere$" + nn;
    function un(e) {
      var t = e[on];
      if (t) return t;
      for (var r = e.parentNode; r; ) {
        if ((t = r[sn] || r[on])) {
          if (
            ((r = t.alternate),
            null !== t.child || (null !== r && null !== r.child))
          )
            for (e = rn(e); null !== e; ) {
              if ((r = e[on])) return r;
              e = rn(e);
            }
          return t;
        }
        r = (e = r).parentNode;
      }
      return null;
    }
    function ln(e) {
      return !(e = e[on] || e[sn]) ||
        (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
        ? null
        : e;
    }
    function cn(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(B(33));
    }
    function pn(e) {
      return e[an] || null;
    }
    var fn = null,
      gn = null,
      dn = null;
    function hn() {
      if (dn) return dn;
      for (
        var e = gn,
          t = e.length,
          r = ("value" in fn) ? fn.value : fn.textContent,
          n = r.length,
          o = 0;
        o < t && e[o] === r[o];
        o++
      );
      for (var i = t - o, a = 1; a <= i && e[t - a] === r[n - a]; a++);
      return (dn = r.slice(o, 1 < a ? 1 - a : void 0));
    }
    var yn = Nt.extend({ data: null }),
      bn = Nt.extend({ data: null }),
      mn = [9, 13, 27, 32],
      _n = Q && "CompositionEvent" in window,
      vn = null;
    Q && "documentMode" in document && (vn = document.documentMode);
    var En = Q && "TextEvent" in window && !vn,
      wn = Q && (!_n || (vn && 8 < vn && vn <= 11)),
      Sn = String.fromCharCode(32),
      Tn = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: "onBeforeInput",
            captured: "onBeforeInputCapture",
          },
          dependencies: ["compositionend", "keypress", "textInput", "paste"],
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: "onCompositionEnd",
            captured: "onCompositionEndCapture",
          },
          dependencies: "blur compositionend keydown keypress keyup mousedown".split(
            " "
          ),
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: "onCompositionStart",
            captured: "onCompositionStartCapture",
          },
          dependencies: "blur compositionstart keydown keypress keyup mousedown".split(
            " "
          ),
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: "onCompositionUpdate",
            captured: "onCompositionUpdateCapture",
          },
          dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(
            " "
          ),
        },
      },
      An = !1;
    function jn(e, t) {
      switch (e) {
        case "keyup":
          return -1 !== mn.indexOf(t.keyCode);
        case "keydown":
          return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "blur":
          return 1;
        default:
          return;
      }
    }
    function On(e) {
      return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
    }
    var Cn = !1;
    var r = {
        eventTypes: Tn,
        extractEvents: function (e, t, r, n) {
          var o;
          if (_n)
            e: {
              switch (e) {
                case "compositionstart":
                  var i = Tn.compositionStart;
                  break e;
                case "compositionend":
                  i = Tn.compositionEnd;
                  break e;
                case "compositionupdate":
                  i = Tn.compositionUpdate;
                  break e;
              }
              i = void 0;
            }
          else
            Cn
              ? jn(e, r) && (i = Tn.compositionEnd)
              : "keydown" === e &&
                229 === r.keyCode &&
                (i = Tn.compositionStart);
          return (
            (o = i
              ? (wn &&
                  "ko" !== r.locale &&
                  (Cn || i !== Tn.compositionStart
                    ? i === Tn.compositionEnd && Cn && (o = hn())
                    : ((gn = "value" in (fn = n) ? fn.value : fn.textContent),
                      (Cn = !0))),
                (i = yn.getPooled(i, t, r, n)),
                o ? (i.data = o) : null !== (o = On(r)) && (i.data = o),
                Mt(i),
                i)
              : null),
            (e = (En
              ? function (e, t) {
                  switch (e) {
                    case "compositionend":
                      return On(t);
                    case "keypress":
                      return 32 !== t.which ? null : ((An = !0), Sn);
                    case "textInput":
                      return (e = t.data) === Sn && An ? null : e;
                    default:
                      return null;
                  }
                }
              : function (e, t) {
                  if (Cn)
                    return "compositionend" === e || (!_n && jn(e, t))
                      ? ((e = hn()), (dn = gn = fn = null), (Cn = !1), e)
                      : null;
                  switch (e) {
                    case "paste":
                      return null;
                    case "keypress":
                      if (
                        !(t.ctrlKey || t.altKey || t.metaKey) ||
                        (t.ctrlKey && t.altKey)
                      ) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                      }
                      return null;
                    case "compositionend":
                      return wn && "ko" !== t.locale ? null : t.data;
                    default:
                      return null;
                  }
                })(e, r))
              ? (((t = bn.getPooled(Tn.beforeInput, t, r, n)).data = e), Mt(t))
              : (t = null),
            null === o ? t : null === t ? o : [o, t]
          );
        },
      },
      kn = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
    function xn(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === t ? kn[e.type] : "textarea" === t;
    }
    var In = {
      change: {
        phasedRegistrationNames: {
          bubbled: "onChange",
          captured: "onChangeCapture",
        },
        dependencies: "blur change click focus input keydown keyup selectionchange".split(
          " "
        ),
      },
    };
    function Mn(e, t, r) {
      return (
        ((e = Nt.getPooled(In.change, e, t, r)).type = "change"),
        ne(r),
        Mt(e),
        e
      );
    }
    var Rn = null,
      Bn = null;
    function Nn(e) {
      C(e);
    }
    function Pn(e) {
      if (Ae(cn(e))) return e;
    }
    function Dn(e, t) {
      if ("change" === e) return t;
    }
    var Ln = !1;
    function Un() {
      Rn && (Rn.detachEvent("onpropertychange", Fn), (Bn = Rn = null));
    }
    function Fn(e) {
      if ("value" === e.propertyName && Pn(Bn))
        if (((e = Mn(Bn, e, jt(e))), le)) C(e);
        else {
          le = !0;
          try {
            ie(Nn, e);
          } finally {
            (le = !1), pe();
          }
        }
    }
    function Wn(e, t, r) {
      "focus" === e
        ? (Un(), (Bn = r), (Rn = t).attachEvent("onpropertychange", Fn))
        : "blur" === e && Un();
    }
    function Vn(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e)
        return Pn(Bn);
    }
    function zn(e, t) {
      if ("click" === e) return Pn(t);
    }
    function Hn(e, t) {
      if ("input" === e || "change" === e) return Pn(t);
    }
    Q &&
      (Ln =
        Or("input") && (!document.documentMode || 9 < document.documentMode));
    var $n,
      R = {
        eventTypes: In,
        _isInputEventSupported: Ln,
        extractEvents: function (e, t, r, n) {
          var o,
            i,
            a = t ? cn(t) : window,
            s = a.nodeName && a.nodeName.toLowerCase();
          if (
            ("select" === s || ("input" === s && "file" === a.type)
              ? (o = Dn)
              : xn(a)
              ? Ln
                ? (o = Hn)
                : ((o = Vn), (i = Wn))
              : !(s = a.nodeName) ||
                "input" !== s.toLowerCase() ||
                ("checkbox" !== a.type && "radio" !== a.type) ||
                (o = zn),
            (o = o && o(e, t)))
          )
            return Mn(o, r, n);
          i && i(e, a, t),
            "blur" === e &&
              (e = a._wrapperState) &&
              e.controlled &&
              "number" === a.type &&
              Ie(a, "number", a.value);
        },
      },
      Gn = {
        mouseEnter: {
          registrationName: "onMouseEnter",
          dependencies: ["mouseout", "mouseover"],
        },
        mouseLeave: {
          registrationName: "onMouseLeave",
          dependencies: ["mouseout", "mouseover"],
        },
        pointerEnter: {
          registrationName: "onPointerEnter",
          dependencies: ["pointerout", "pointerover"],
        },
        pointerLeave: {
          registrationName: "onPointerLeave",
          dependencies: ["pointerout", "pointerover"],
        },
      },
      nn = {
        eventTypes: Gn,
        extractEvents: function (e, t, r, n, o) {
          var i,
            a,
            s,
            u,
            l = "mouseover" === e || "pointerover" === e,
            c = "mouseout" === e || "pointerout" === e;
          if (
            (l && 0 == (32 & o) && (r.relatedTarget || r.fromElement)) ||
            (!c && !l)
          )
            return null;
          if (
            ((o =
              n.window === n
                ? n
                : (o = n.ownerDocument)
                ? o.defaultView || o.parentWindow
                : window),
            c
              ? ((c = t),
                null !==
                  (t = (t = r.relatedTarget || r.toElement) ? un(t) : null) &&
                  (t !== (l = tt(t)) || (5 !== t.tag && 6 !== t.tag)) &&
                  (t = null))
              : (c = null),
            c === t)
          )
            return null;
          if (
            ("mouseout" === e || "mouseover" === e
              ? ((i = er),
                (a = Gn.mouseLeave),
                (s = Gn.mouseEnter),
                (u = "mouse"))
              : ("pointerout" !== e && "pointerover" !== e) ||
                ((i = tr),
                (a = Gn.pointerLeave),
                (s = Gn.pointerEnter),
                (u = "pointer")),
            (e = null == c ? o : cn(c)),
            (o = null == t ? o : cn(t)),
            ((a = i.getPooled(a, c, r, n)).type = u + "leave"),
            (a.target = e),
            (a.relatedTarget = o),
            ((n = i.getPooled(s, t, r, n)).type = u + "enter"),
            (n.target = o),
            (n.relatedTarget = e),
            (u = t),
            (i = c) && u)
          )
            e: {
              for (e = u, c = 0, t = s = i; t; t = Ot(t)) c++;
              for (t = 0, o = e; o; o = Ot(o)) t++;
              for (; 0 < c - t; ) (s = Ot(s)), c--;
              for (; 0 < t - c; ) (e = Ot(e)), t--;
              for (; c--; ) {
                if (s === e || s === e.alternate) break e;
                (s = Ot(s)), (e = Ot(e));
              }
              s = null;
            }
          else s = null;
          for (
            e = s, s = [];
            i && i !== e && (null === (c = i.alternate) || c !== e);

          )
            s.push(i), (i = Ot(i));
          for (
            i = [];
            u && u !== e && (null === (c = u.alternate) || c !== e);

          )
            i.push(u), (u = Ot(u));
          for (u = 0; u < s.length; u++) xt(s[u], "bubbled", a);
          for (u = i.length; 0 < u--; ) xt(i[u], "captured", n);
          return r === $n ? (($n = null), [a]) : (($n = r), [a, n]);
        },
      };
    var Kn =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      qn = Object.prototype.hasOwnProperty;
    function Yn(e, t) {
      if (Kn(e, t)) return !0;
      if (
        "object" != typeof e ||
        null === e ||
        "object" != typeof t ||
        null === t
      )
        return !1;
      var r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (n = 0; n < r.length; n++)
        if (!qn.call(t, r[n]) || !Kn(e[r[n]], t[r[n]])) return !1;
      return !0;
    }
    var Xn = Q && "documentMode" in document && document.documentMode <= 11,
      Jn = {
        select: {
          phasedRegistrationNames: {
            bubbled: "onSelect",
            captured: "onSelectCapture",
          },
          dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(
            " "
          ),
        },
      },
      Qn = null,
      Zn = null,
      eo = null,
      to = !1;
    function ro(e, t) {
      var r =
        t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
      return to || null == Qn || Qn !== Fr(r)
        ? null
        : ((r =
            "selectionStart" in (r = Qn) && Hr(r)
              ? { start: r.selectionStart, end: r.selectionEnd }
              : {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
          eo && Yn(eo, r)
            ? null
            : ((eo = r),
              ((e = Nt.getPooled(Jn.select, Zn, e, t)).type = "select"),
              (e.target = Qn),
              Mt(e),
              e));
    }
    vn = {
      eventTypes: Jn,
      extractEvents: function (e, t, r, n) {
        if (
          !(i = !(o =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument))
        ) {
          e: {
            for (var o = kr(o), i = s.onSelect, a = 0; a < i.length; a++)
              if (!o.has(i[a])) {
                o = !1;
                break e;
              }
            o = !0;
          }
          i = !o;
        }
        if (i) return null;
        switch (((o = t ? cn(t) : window), e)) {
          case "focus":
            (!xn(o) && "true" !== o.contentEditable) ||
              ((Qn = o), (Zn = t), (eo = null));
            break;
          case "blur":
            eo = Zn = Qn = null;
            break;
          case "mousedown":
            to = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            return (to = !1), ro(r, n);
          case "selectionchange":
            if (Xn) break;
          case "keydown":
          case "keyup":
            return ro(r, n);
        }
        return null;
      },
    };
    k.injectEventPluginOrder(
      "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
        " "
      )
    );
    (E = pn), (n = ln), (w = cn);
    k.injectEventPluginsByName({
      SimpleEventPlugin: dr,
      EnterLeaveEventPlugin: nn,
      ChangeEventPlugin: R,
      SelectEventPlugin: vn,
      BeforeInputEventPlugin: r,
    }),
      new Set();
    var no = [],
      oo = -1;
    function io(e) {
      oo < 0 || ((e.current = no[oo]), (no[oo] = null), oo--);
    }
    function ao(e, t) {
      (no[++oo] = e.current), (e.current = t);
    }
    var so = {},
      uo = { current: so },
      lo = { current: !1 },
      co = so;
    function po(e, t) {
      var r = e.type.contextTypes;
      if (!r) return so;
      var n = e.stateNode;
      if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
        return n.__reactInternalMemoizedMaskedChildContext;
      var o,
        i = {};
      for (o in r) i[o] = t[o];
      return (
        n &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
      );
    }
    function fo(e) {
      return null != (e = e.childContextTypes);
    }
    function go() {
      io(lo), io(uo);
    }
    function ho() {
      io(lo), io(uo);
    }
    function yo(e, t, r) {
      if (uo.current !== so) throw Error(B(168));
      ao(uo, t), ao(lo, r);
    }
    function bo(e, t, r) {
      var n,
        o = e.stateNode;
      if (((e = t.childContextTypes), "function" != typeof o.getChildContext))
        return r;
      for (n in (o = o.getChildContext()))
        if (!(n in e)) throw Error(B(108, X(t) || "Unknown", n));
      return h({}, r, {}, o);
    }
    function mo(e) {
      e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        so;
      return (co = uo.current), ao(uo, e), ao(lo, lo.current), 1;
    }
    function _o(e, t, r) {
      var n = e.stateNode;
      if (!n) throw Error(B(169));
      r
        ? ((t = bo(e, t, co)),
          (n.__reactInternalMemoizedMergedChildContext = t),
          io(lo),
          io(uo),
          ao(uo, t))
        : io(lo),
        ao(lo, r);
    }
    var vo = i.unstable_runWithPriority,
      Eo = i.unstable_scheduleCallback,
      wo = i.unstable_cancelCallback,
      So = i.unstable_shouldYield,
      r = i.unstable_requestPaint,
      To = i.unstable_now,
      Ao = i.unstable_getCurrentPriorityLevel,
      jo = i.unstable_ImmediatePriority,
      Oo = i.unstable_UserBlockingPriority,
      Co = i.unstable_NormalPriority,
      ko = i.unstable_LowPriority,
      xo = i.unstable_IdlePriority,
      Io = {},
      Mo = void 0 !== r ? r : function () {},
      Ro = null,
      Bo = null,
      No = !1,
      Po = To(),
      Do =
        Po < 1e4
          ? To
          : function () {
              return To() - Po;
            };
    function Lo() {
      switch (Ao()) {
        case jo:
          return 99;
        case Oo:
          return 98;
        case Co:
          return 97;
        case ko:
          return 96;
        case xo:
          return 95;
        default:
          throw Error(B(332));
      }
    }
    function Uo(e) {
      switch (e) {
        case 99:
          return jo;
        case 98:
          return Oo;
        case 97:
          return Co;
        case 96:
          return ko;
        case 95:
          return xo;
        default:
          throw Error(B(332));
      }
    }
    function Fo(e, t) {
      return (e = Uo(e)), vo(e, t);
    }
    function Wo(e, t, r) {
      return (e = Uo(e)), Eo(e, t, r);
    }
    function Vo(e) {
      return null === Ro ? ((Ro = [e]), (Bo = Eo(jo, Ho))) : Ro.push(e), Io;
    }
    function zo() {
      var e;
      null !== Bo && ((e = Bo), (Bo = null), wo(e)), Ho();
    }
    function Ho() {
      if (!No && null !== Ro) {
        No = !0;
        var t = 0;
        try {
          var r = Ro;
          Fo(99, function () {
            for (; t < r.length; t++)
              for (var e = r[t]; null !== (e = e(!0)); );
          }),
            (Ro = null);
        } catch (e) {
          throw (null !== Ro && (Ro = Ro.slice(t + 1)), Eo(jo, zo), e);
        } finally {
          No = !1;
        }
      }
    }
    var $o = 3;
    function Go(e, t, r) {
      return (
        1073741821 - (1 + (((1073741821 - e + t / 10) / (r /= 10)) | 0)) * r
      );
    }
    function Ko(e, t) {
      if (e && e.defaultProps)
        for (var r in ((t = h({}, t)), (e = e.defaultProps)))
          void 0 === t[r] && (t[r] = e[r]);
      return t;
    }
    var qo = { current: null },
      Yo = null,
      Xo = null,
      Jo = null;
    function Qo() {
      Jo = Xo = Yo = null;
    }
    function Zo(e, t) {
      e = e.type._context;
      ao(qo, e._currentValue), (e._currentValue = t);
    }
    function ei(e) {
      var t = qo.current;
      io(qo), (e.type._context._currentValue = t);
    }
    function ti(e, t) {
      for (; null !== e; ) {
        var r = e.alternate;
        if (e.childExpirationTime < t)
          (e.childExpirationTime = t),
            null !== r &&
              r.childExpirationTime < t &&
              (r.childExpirationTime = t);
        else {
          if (!(null !== r && r.childExpirationTime < t)) break;
          r.childExpirationTime = t;
        }
        e = e.return;
      }
    }
    function ri(e, t) {
      (Jo = Xo = null) !== (e = (Yo = e).dependencies) &&
        null !== e.firstContext &&
        (e.expirationTime >= t && (Pa = !0), (e.firstContext = null));
    }
    function ni(e, t) {
      if (Jo !== e && !1 !== t && 0 !== t)
        if (
          (("number" == typeof t && 1073741823 !== t) ||
            ((Jo = e), (t = 1073741823)),
          (t = { context: e, observedBits: t, next: null }),
          null === Xo)
        ) {
          if (null === Yo) throw Error(B(308));
          (Xo = t),
            (Yo.dependencies = {
              expirationTime: 0,
              firstContext: t,
              responders: null,
            });
        } else Xo = Xo.next = t;
      return e._currentValue;
    }
    var oi = !1;
    function ii(e) {
      return {
        baseState: e,
        firstUpdate: null,
        lastUpdate: null,
        firstCapturedUpdate: null,
        lastCapturedUpdate: null,
        firstEffect: null,
        lastEffect: null,
        firstCapturedEffect: null,
        lastCapturedEffect: null,
      };
    }
    function ai(e) {
      return {
        baseState: e.baseState,
        firstUpdate: e.firstUpdate,
        lastUpdate: e.lastUpdate,
        firstCapturedUpdate: null,
        lastCapturedUpdate: null,
        firstEffect: null,
        lastEffect: null,
        firstCapturedEffect: null,
        lastCapturedEffect: null,
      };
    }
    function si(e, t) {
      return {
        expirationTime: e,
        suspenseConfig: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
        nextEffect: null,
      };
    }
    function ui(e, t) {
      null === e.lastUpdate
        ? (e.firstUpdate = e.lastUpdate = t)
        : ((e.lastUpdate.next = t), (e.lastUpdate = t));
    }
    function li(e, t) {
      var r,
        n,
        o = e.alternate;
      null === o
        ? (n = null) === (r = e.updateQueue) &&
          (r = e.updateQueue = ii(e.memoizedState))
        : ((r = e.updateQueue),
          (n = o.updateQueue),
          null === r
            ? null === n
              ? ((r = e.updateQueue = ii(e.memoizedState)),
                (n = o.updateQueue = ii(o.memoizedState)))
              : (r = e.updateQueue = ai(n))
            : null === n && (n = o.updateQueue = ai(r))),
        null === n || r === n
          ? ui(r, t)
          : null === r.lastUpdate || null === n.lastUpdate
          ? (ui(r, t), ui(n, t))
          : (ui(r, t), (n.lastUpdate = t));
    }
    function ci(e, t) {
      var r = e.updateQueue;
      null ===
      (r = null === r ? (e.updateQueue = ii(e.memoizedState)) : pi(e, r))
        .lastCapturedUpdate
        ? (r.firstCapturedUpdate = r.lastCapturedUpdate = t)
        : ((r.lastCapturedUpdate.next = t), (r.lastCapturedUpdate = t));
    }
    function pi(e, t) {
      var r = e.alternate;
      return (t =
        null !== r && t === r.updateQueue ? (e.updateQueue = ai(t)) : t);
    }
    function fi(e, t, r, n, o, i) {
      switch (r.tag) {
        case 1:
          return "function" == typeof (e = r.payload) ? e.call(i, n, o) : e;
        case 3:
          e.effectTag = (-4097 & e.effectTag) | 64;
        case 0:
          if (
            null ==
            (o = "function" == typeof (e = r.payload) ? e.call(i, n, o) : e)
          )
            break;
          return h({}, n, o);
        case 2:
          oi = !0;
      }
      return n;
    }
    function gi(e, t, r, n, o) {
      oi = !1;
      for (
        var i = (t = pi(e, t)).baseState,
          a = null,
          s = 0,
          u = t.firstUpdate,
          l = i;
        null !== u;

      ) {
        var c = u.expirationTime;
        c < o
          ? (null === a && ((a = u), (i = l)), s < c && (s = c))
          : (gu(c, u.suspenseConfig),
            (l = fi(e, 0, u, l, r, n)),
            null !== u.callback &&
              ((e.effectTag |= 32),
              (u.nextEffect = null) === t.lastEffect
                ? (t.firstEffect = t.lastEffect = u)
                : ((t.lastEffect.nextEffect = u), (t.lastEffect = u)))),
          (u = u.next);
      }
      for (c = null, u = t.firstCapturedUpdate; null !== u; ) {
        var p = u.expirationTime;
        p < o
          ? (null === c && ((c = u), null === a && (i = l)), s < p && (s = p))
          : ((l = fi(e, 0, u, l, r, n)),
            null !== u.callback &&
              ((e.effectTag |= 32),
              (u.nextEffect = null) === t.lastCapturedEffect
                ? (t.firstCapturedEffect = t.lastCapturedEffect = u)
                : ((t.lastCapturedEffect.nextEffect = u),
                  (t.lastCapturedEffect = u)))),
          (u = u.next);
      }
      null === a && (t.lastUpdate = null),
        null === c ? (t.lastCapturedUpdate = null) : (e.effectTag |= 32),
        null === a && null === c && (i = l),
        (t.baseState = i),
        (t.firstUpdate = a),
        (t.firstCapturedUpdate = c),
        du(s),
        (e.expirationTime = s),
        (e.memoizedState = l);
    }
    function di(e, t, r) {
      null !== t.firstCapturedUpdate &&
        (null !== t.lastUpdate &&
          ((t.lastUpdate.next = t.firstCapturedUpdate),
          (t.lastUpdate = t.lastCapturedUpdate)),
        (t.firstCapturedUpdate = t.lastCapturedUpdate = null)),
        hi(t.firstEffect, r),
        (t.firstEffect = t.lastEffect = null),
        hi(t.firstCapturedEffect, r),
        (t.firstCapturedEffect = t.lastCapturedEffect = null);
    }
    function hi(e, t) {
      for (; null !== e; ) {
        var r = e.callback;
        if (null !== r) {
          e.callback = null;
          var n = t;
          if ("function" != typeof r) throw Error(B(191, r));
          r.call(n);
        }
        e = e.nextEffect;
      }
    }
    var yi = I.ReactCurrentBatchConfig,
      bi = new o.Component().refs;
    function mi(e, t, r, n) {
      (r = null == (r = r(n, (t = e.memoizedState))) ? t : h({}, t, r)),
        (e.memoizedState = r),
        null !== (n = e.updateQueue) &&
          0 === e.expirationTime &&
          (n.baseState = r);
    }
    var _i = {
      isMounted: function (e) {
        return !!(e = e._reactInternalFiber) && tt(e) === e;
      },
      enqueueSetState: function (e, t, r) {
        e = e._reactInternalFiber;
        var n = eu(),
          o = yi.suspense;
        ((o = si((n = tu(n, e, o)), o)).payload = t),
          null != r && (o.callback = r),
          li(e, o),
          ru(e, n);
      },
      enqueueReplaceState: function (e, t, r) {
        e = e._reactInternalFiber;
        var n = eu(),
          o = yi.suspense;
        ((o = si((n = tu(n, e, o)), o)).tag = 1),
          (o.payload = t),
          null != r && (o.callback = r),
          li(e, o),
          ru(e, n);
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternalFiber;
        var r = eu(),
          n = yi.suspense;
        ((n = si((r = tu(r, e, n)), n)).tag = 2),
          null != t && (n.callback = t),
          li(e, n),
          ru(e, r);
      },
    };
    function vi(e, t, r, n, o, i, a) {
      return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(n, i, a)
        : !t.prototype ||
            !t.prototype.isPureReactComponent ||
            !Yn(r, n) ||
            !Yn(o, i);
    }
    function Ei(e, t, r) {
      var n = !1,
        o = so,
        i = t.contextType;
      return (
        (t = new t(
          r,
          (i =
            "object" == typeof i && null !== i
              ? ni(i)
              : ((o = fo(t) ? co : uo.current),
                (n = null != (n = t.contextTypes)) ? po(e, o) : so))
        )),
        (e.memoizedState =
          null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = _i),
        ((e.stateNode = t)._reactInternalFiber = e),
        n &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
      );
    }
    function wi(e, t, r, n) {
      (e = t.state),
        "function" == typeof t.componentWillReceiveProps &&
          t.componentWillReceiveProps(r, n),
        "function" == typeof t.UNSAFE_componentWillReceiveProps &&
          t.UNSAFE_componentWillReceiveProps(r, n),
        t.state !== e && _i.enqueueReplaceState(t, t.state, null);
    }
    function Si(e, t, r, n) {
      var o = e.stateNode;
      (o.props = r), (o.state = e.memoizedState), (o.refs = bi);
      var i = t.contextType;
      "object" == typeof i && null !== i
        ? (o.context = ni(i))
        : ((i = fo(t) ? co : uo.current), (o.context = po(e, i))),
        null !== (i = e.updateQueue) &&
          (gi(e, i, r, o, n), (o.state = e.memoizedState)),
        "function" == typeof (i = t.getDerivedStateFromProps) &&
          (mi(e, 0, i, r), (o.state = e.memoizedState)),
        "function" == typeof t.getDerivedStateFromProps ||
          "function" == typeof o.getSnapshotBeforeUpdate ||
          ("function" != typeof o.UNSAFE_componentWillMount &&
            "function" != typeof o.componentWillMount) ||
          ((t = o.state),
          "function" == typeof o.componentWillMount && o.componentWillMount(),
          "function" == typeof o.UNSAFE_componentWillMount &&
            o.UNSAFE_componentWillMount(),
          t !== o.state && _i.enqueueReplaceState(o, o.state, null),
          null !== (i = e.updateQueue) &&
            (gi(e, i, r, o, n), (o.state = e.memoizedState))),
        "function" == typeof o.componentDidMount && (e.effectTag |= 4);
    }
    var Ti = Array.isArray;
    function Ai(e, t, r) {
      if (
        null !== (e = r.ref) &&
        "function" != typeof e &&
        "object" != typeof e
      ) {
        if (r._owner) {
          if ((r = r._owner)) {
            if (1 !== r.tag) throw Error(B(309));
            var n = r.stateNode;
          }
          if (!n) throw Error(B(147, e));
          var o = "" + e;
          return null !== t &&
            null !== t.ref &&
            "function" == typeof t.ref &&
            t.ref._stringRef === o
            ? t.ref
            : (((t = function (e) {
                var t = n.refs;
                t === bi && (t = n.refs = {}),
                  null === e ? delete t[o] : (t[o] = e);
              })._stringRef = o),
              t);
        }
        if ("string" != typeof e) throw Error(B(284));
        if (!r._owner) throw Error(B(290, e));
      }
      return e;
    }
    function ji(e, t) {
      if ("textarea" !== e.type)
        throw Error(
          B(
            31,
            "[object Object]" === Object.prototype.toString.call(t)
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : t,
            ""
          )
        );
    }
    function Oi(p) {
      function f(e, t) {
        var r;
        p &&
          (null !== (r = e.lastEffect)
            ? ((r.nextEffect = t), (e.lastEffect = t))
            : (e.firstEffect = e.lastEffect = t),
          (t.nextEffect = null),
          (t.effectTag = 8));
      }
      function g(e, t) {
        if (!p) return null;
        for (; null !== t; ) f(e, t), (t = t.sibling);
        return null;
      }
      function d(e, t) {
        for (e = new Map(); null !== t; )
          null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
      }
      function a(e, t) {
        return ((e = xu(e, t)).index = 0), (e.sibling = null), e;
      }
      function h(e, t, r) {
        return (
          (e.index = r),
          p
            ? null === (r = e.alternate) || (r = r.index) < t
              ? ((e.effectTag = 2), t)
              : r
            : t
        );
      }
      function s(e) {
        return p && null === e.alternate && (e.effectTag = 2), e;
      }
      function i(e, t, r, n) {
        return (
          null === t || 6 !== t.tag
            ? ((t = Ru(r, e.mode, n)).return = e)
            : ((t = a(t, r)).return = e),
          t
        );
      }
      function u(e, t, r, n) {
        return (
          null !== t && t.elementType === r.type
            ? ((n = a(t, r.props)).ref = Ai(0, t, r))
            : ((n = Iu(r.type, r.key, r.props, null, e.mode, n)).ref = Ai(
                0,
                t,
                r
              )),
          (n.return = e),
          n
        );
      }
      function l(e, t, r, n) {
        return (
          null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== r.containerInfo ||
          t.stateNode.implementation !== r.implementation
            ? ((t = Bu(r, e.mode, n)).return = e)
            : ((t = a(t, r.children || [])).return = e),
          t
        );
      }
      function c(e, t, r, n, o) {
        return (
          null === t || 7 !== t.tag
            ? ((t = Mu(r, e.mode, n, o)).return = e)
            : ((t = a(t, r)).return = e),
          t
        );
      }
      function y(e, t, r) {
        if ("string" == typeof t || "number" == typeof t)
          return ((t = Ru("" + t, e.mode, r)).return = e), t;
        if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
            case N:
              return (
                ((r = Iu(t.type, t.key, t.props, null, e.mode, r)).ref = Ai(
                  0,
                  null,
                  t
                )),
                (r.return = e),
                r
              );
            case P:
              return ((t = Bu(t, e.mode, r)).return = e), t;
          }
          if (Ti(t) || Y(t))
            return ((t = Mu(t, e.mode, r, null)).return = e), t;
          ji(e, t);
        }
        return null;
      }
      function b(e, t, r, n) {
        var o = null !== t ? t.key : null;
        if ("string" == typeof r || "number" == typeof r)
          return null !== o ? null : i(e, t, "" + r, n);
        if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
            case N:
              return r.key === o
                ? r.type === D
                  ? c(e, t, r.props.children, n, o)
                  : u(e, t, r, n)
                : null;
            case P:
              return r.key === o ? l(e, t, r, n) : null;
          }
          if (Ti(r) || Y(r)) return null !== o ? null : c(e, t, r, n, null);
          ji(e, r);
        }
        return null;
      }
      function m(e, t, r, n, o) {
        if ("string" == typeof n || "number" == typeof n)
          return i(t, (e = e.get(r) || null), "" + n, o);
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case N:
              return (
                (e = e.get(null === n.key ? r : n.key) || null),
                n.type === D
                  ? c(t, e, n.props.children, o, n.key)
                  : u(t, e, n, o)
              );
            case P:
              return l(
                t,
                (e = e.get(null === n.key ? r : n.key) || null),
                n,
                o
              );
          }
          if (Ti(n) || Y(n)) return c(t, (e = e.get(r) || null), n, o, null);
          ji(t, n);
        }
        return null;
      }
      return function (e, t, r, n) {
        var o =
            "object" == typeof r &&
            null !== r &&
            r.type === D &&
            null === r.key,
          i = "object" == typeof (r = o ? r.props.children : r) && null !== r;
        if (i)
          switch (r.$$typeof) {
            case N:
              e: {
                for (i = r.key, o = t; null !== o; ) {
                  if (o.key === i) {
                    if (7 === o.tag ? r.type === D : o.elementType === r.type) {
                      g(e, o.sibling),
                        ((t = a(
                          o,
                          r.type === D ? r.props.children : r.props
                        )).ref = Ai(0, o, r)),
                        (t.return = e),
                        (e = t);
                      break e;
                    }
                    g(e, o);
                    break;
                  }
                  f(e, o), (o = o.sibling);
                }
                e =
                  r.type === D
                    ? (((t = Mu(
                        r.props.children,
                        e.mode,
                        n,
                        r.key
                      )).return = e),
                      t)
                    : (((n = Iu(
                        r.type,
                        r.key,
                        r.props,
                        null,
                        e.mode,
                        n
                      )).ref = Ai(0, t, r)),
                      (n.return = e),
                      n);
              }
              return s(e);
            case P:
              e: {
                for (o = r.key; null !== t; ) {
                  if (t.key === o) {
                    if (
                      4 === t.tag &&
                      t.stateNode.containerInfo === r.containerInfo &&
                      t.stateNode.implementation === r.implementation
                    ) {
                      g(e, t.sibling),
                        ((t = a(t, r.children || [])).return = e),
                        (e = t);
                      break e;
                    }
                    g(e, t);
                    break;
                  }
                  f(e, t), (t = t.sibling);
                }
                ((t = Bu(r, e.mode, n)).return = e), (e = t);
              }
              return s(e);
          }
        if ("string" == typeof r || "number" == typeof r)
          return (
            (r = "" + r),
            s(
              (e =
                (((t =
                  null !== t && 6 === t.tag
                    ? (g(e, t.sibling), a(t, r))
                    : (g(e, t), Ru(r, e.mode, n))).return = e),
                t))
            )
          );
        if (Ti(r))
          return (function (t, e, r, n) {
            for (
              var o = null, i = null, a = e, s = (e = 0), u = null;
              null !== a && s < r.length;
              s++
            ) {
              a.index > s ? ((u = a), (a = null)) : (u = a.sibling);
              var l = b(t, a, r[s], n);
              if (null === l) {
                null === a && (a = u);
                break;
              }
              p && a && null === l.alternate && f(t, a),
                (e = h(l, e, s)),
                null === i ? (o = l) : (i.sibling = l),
                (i = l),
                (a = u);
            }
            if (s === r.length) return g(t, a), o;
            if (null === a) {
              for (; s < r.length; s++)
                null !== (a = y(t, r[s], n)) &&
                  ((e = h(a, e, s)),
                  null === i ? (o = a) : (i.sibling = a),
                  (i = a));
              return o;
            }
            for (a = d(t, a); s < r.length; s++)
              null !== (u = m(a, t, s, r[s], n)) &&
                (p &&
                  null !== u.alternate &&
                  a.delete(null === u.key ? s : u.key),
                (e = h(u, e, s)),
                null === i ? (o = u) : (i.sibling = u),
                (i = u));
            return (
              p &&
                a.forEach(function (e) {
                  return f(t, e);
                }),
              o
            );
          })(e, t, r, n);
        if (Y(r))
          return (function (t, e, r, n) {
            var o = Y(r);
            if ("function" != typeof o) throw Error(B(150));
            if (null == (r = o.call(r))) throw Error(B(151));
            for (
              var i = (o = null), a = e, s = (e = 0), u = null, l = r.next();
              null !== a && !l.done;
              s++, l = r.next()
            ) {
              a.index > s ? ((u = a), (a = null)) : (u = a.sibling);
              var c = b(t, a, l.value, n);
              if (null === c) {
                null === a && (a = u);
                break;
              }
              p && a && null === c.alternate && f(t, a),
                (e = h(c, e, s)),
                null === i ? (o = c) : (i.sibling = c),
                (i = c),
                (a = u);
            }
            if (l.done) return g(t, a), o;
            if (null === a) {
              for (; !l.done; s++, l = r.next())
                null !== (l = y(t, l.value, n)) &&
                  ((e = h(l, e, s)),
                  null === i ? (o = l) : (i.sibling = l),
                  (i = l));
              return o;
            }
            for (a = d(t, a); !l.done; s++, l = r.next())
              null !== (l = m(a, t, s, l.value, n)) &&
                (p &&
                  null !== l.alternate &&
                  a.delete(null === l.key ? s : l.key),
                (e = h(l, e, s)),
                null === i ? (o = l) : (i.sibling = l),
                (i = l));
            return (
              p &&
                a.forEach(function (e) {
                  return f(t, e);
                }),
              o
            );
          })(e, t, r, n);
        if ((i && ji(e, r), void 0 === r && !o))
          switch (e.tag) {
            case 1:
            case 0:
              throw (
                ((e = e.type),
                Error(B(152, e.displayName || e.name || "Component")))
              );
          }
        return g(e, t);
      };
    }
    var Ci = Oi(!0),
      ki = Oi(!1),
      xi = {},
      Ii = { current: xi },
      Mi = { current: xi },
      Ri = { current: xi };
    function Bi(e) {
      if (e === xi) throw Error(B(174));
      return e;
    }
    function Ni(e, t) {
      ao(Ri, t), ao(Mi, e), ao(Ii, xi);
      var r = t.nodeType;
      switch (r) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Fe(null, "");
          break;
        default:
          t = Fe(
            (t = (r = 8 === r ? t.parentNode : t).namespaceURI || null),
            r.tagName
          );
      }
      io(Ii), ao(Ii, t);
    }
    function Pi() {
      io(Ii), io(Mi), io(Ri);
    }
    function Di(e) {
      Bi(Ri.current);
      var t = Bi(Ii.current),
        r = Fe(t, e.type);
      t !== r && (ao(Mi, e), ao(Ii, r));
    }
    function Li(e) {
      Mi.current === e && (io(Ii), io(Mi));
    }
    var Ui = { current: 0 };
    function Fi(e) {
      for (var t = e; null !== t; ) {
        if (13 === t.tag) {
          var r = t.memoizedState;
          if (
            null !== r &&
            (null === (r = r.dehydrated) || r.data === Kr || r.data === qr)
          )
            return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
          if (0 != (64 & t.effectTag)) return t;
        } else if (null !== t.child) {
          t = (t.child.return = t).child;
          continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    function Wi(e, t) {
      return { responder: e, props: t };
    }
    var Vi = I.ReactCurrentDispatcher,
      zi = I.ReactCurrentBatchConfig,
      Hi = 0,
      $i = null,
      Gi = null,
      Ki = null,
      qi = null,
      Yi = null,
      Xi = null,
      Ji = 0,
      Qi = null,
      Zi = 0,
      ea = !1,
      ta = null,
      ra = 0;
    function na() {
      throw Error(B(321));
    }
    function oa(e, t) {
      if (null !== t) {
        for (var r = 0; r < t.length && r < e.length; r++)
          if (!Kn(e[r], t[r])) return;
        return 1;
      }
    }
    function ia(e, t, r, n, o, i) {
      if (
        ((Hi = i),
        ($i = t),
        (Ki = null !== e ? e.memoizedState : null),
        (Vi.current = null === Ki ? Ta : Aa),
        (t = r(n, o)),
        ea)
      ) {
        for (
          ;
          (ea = !1),
            (ra += 1),
            (Ki = null !== e ? e.memoizedState : null),
            (Xi = qi),
            (Qi = Yi = Gi = null),
            (Vi.current = Aa),
            (t = r(n, o)),
            ea;

        );
        (ta = null), (ra = 0);
      }
      if (
        ((Vi.current = Sa),
        ((e = $i).memoizedState = qi),
        (e.expirationTime = Ji),
        (e.updateQueue = Qi),
        (e.effectTag |= Zi),
        (e = null !== Gi && null !== Gi.next),
        (Xi = Yi = qi = Ki = Gi = $i = null),
        (Qi = null),
        (Zi = Ji = Hi = 0),
        e)
      )
        throw Error(B(300));
      return t;
    }
    function aa() {
      (Vi.current = Sa),
        (Xi = Yi = qi = Ki = Gi = $i = null),
        (ea = !1),
        (ta = Qi = null),
        (ra = Zi = Ji = Hi = 0);
    }
    function sa() {
      var e = {
        memoizedState: null,
        baseState: null,
        queue: null,
        baseUpdate: null,
        next: null,
      };
      return null === Yi ? (qi = Yi = e) : (Yi = Yi.next = e), Yi;
    }
    function ua() {
      if (null !== Xi)
        (Xi = (Yi = Xi).next), (Ki = null !== (Gi = Ki) ? Gi.next : null);
      else {
        if (null === Ki) throw Error(B(310));
        var e = {
          memoizedState: (Gi = Ki).memoizedState,
          baseState: Gi.baseState,
          queue: Gi.queue,
          baseUpdate: Gi.baseUpdate,
          next: null,
        };
        (Yi = null === Yi ? (qi = e) : (Yi.next = e)), (Ki = Gi.next);
      }
      return Yi;
    }
    function la(e, t) {
      return "function" == typeof t ? t(e) : t;
    }
    function ca(e) {
      var t = ua(),
        r = t.queue;
      if (null === r) throw Error(B(311));
      if (((r.lastRenderedReducer = e), 0 < ra)) {
        var n = r.dispatch;
        if (null !== ta) {
          var o = ta.get(r);
          if (void 0 !== o) {
            ta.delete(r);
            for (
              var i = t.memoizedState;
              (i = e(i, o.action)), null !== (o = o.next);

            );
            return (
              Kn(i, t.memoizedState) || (Pa = !0),
              (t.memoizedState = i),
              t.baseUpdate === r.last && (t.baseState = i),
              [(r.lastRenderedState = i), n]
            );
          }
        }
        return [t.memoizedState, n];
      }
      var n = r.last,
        a = t.baseUpdate,
        i = t.baseState;
      if (
        null !==
        (n =
          null !== a
            ? (null !== n && (n.next = null), a.next)
            : null !== n
            ? n.next
            : null)
      ) {
        var s = (o = null),
          u = n,
          l = !1;
        do {
          var c = u.expirationTime;
        } while (
          (c < Hi
            ? (l || ((l = !0), (s = a), (o = i)), Ji < c && du((Ji = c)))
            : (gu(c, u.suspenseConfig),
              (i = u.eagerReducer === e ? u.eagerState : e(i, u.action))),
          null !== (u = (a = u).next) && u !== n)
        );
        l || ((s = a), (o = i)),
          Kn(i, t.memoizedState) || (Pa = !0),
          (t.memoizedState = i),
          (t.baseUpdate = s),
          (t.baseState = o),
          (r.lastRenderedState = i);
      }
      return [t.memoizedState, r.dispatch];
    }
    function pa(e) {
      var t = sa();
      return (
        "function" == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = (e = t.queue = {
          last: null,
          dispatch: null,
          lastRenderedReducer: la,
          lastRenderedState: e,
        }).dispatch = wa.bind(null, $i, e)),
        [t.memoizedState, e]
      );
    }
    function fa(e) {
      return ca(la);
    }
    function ga(e, t, r, n) {
      return (
        (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
        null === Qi
          ? ((Qi = { lastEffect: null }).lastEffect = e.next = e)
          : null === (t = Qi.lastEffect)
          ? (Qi.lastEffect = e.next = e)
          : ((r = t.next), ((t.next = e).next = r), (Qi.lastEffect = e)),
        e
      );
    }
    function da(e, t, r, n) {
      var o = sa();
      (Zi |= e), (o.memoizedState = ga(t, r, void 0, void 0 === n ? null : n));
    }
    function ha(e, t, r, n) {
      var o = ua();
      n = void 0 === n ? null : n;
      var i = void 0;
      if (null !== Gi) {
        var a = Gi.memoizedState,
          i = a.destroy;
        if (null !== n && oa(n, a.deps)) return void ga(0, r, i, n);
      }
      (Zi |= e), (o.memoizedState = ga(t, r, i, n));
    }
    function ya(e, t) {
      return da(516, 192, e, t);
    }
    function ba(e, t) {
      return ha(516, 192, e, t);
    }
    function ma(e, t) {
      return "function" == typeof t
        ? ((e = e()),
          t(e),
          function () {
            t(null);
          })
        : null != t
        ? ((e = e()),
          (t.current = e),
          function () {
            t.current = null;
          })
        : void 0;
    }
    function _a() {}
    function va(e, t) {
      return (sa().memoizedState = [e, void 0 === t ? null : t]), e;
    }
    function Ea(e, t) {
      var r = ua();
      t = void 0 === t ? null : t;
      var n = r.memoizedState;
      return null !== n && null !== t && oa(t, n[1])
        ? n[0]
        : ((r.memoizedState = [e, t]), e);
    }
    function wa(e, t, r) {
      if (!(ra < 25)) throw Error(B(301));
      var n = e.alternate;
      if (e === $i || (null !== n && n === $i))
        if (
          ((ea = !0),
          (e = {
            expirationTime: Hi,
            suspenseConfig: null,
            action: r,
            eagerReducer: null,
            eagerState: null,
            next: null,
          }),
          void 0 === (r = (ta = null === ta ? new Map() : ta).get(t)))
        )
          ta.set(t, e);
        else {
          for (t = r; null !== t.next; ) t = t.next;
          t.next = e;
        }
      else {
        var o,
          i,
          a = {
            expirationTime: (o = tu((o = eu()), e, (a = yi.suspense))),
            suspenseConfig: a,
            action: r,
            eagerReducer: null,
            eagerState: null,
            next: null,
          },
          s = t.last;
        if (
          (null === s
            ? (a.next = a)
            : (null !== (i = s.next) && (a.next = i), (s.next = a)),
          (t.last = a),
          0 === e.expirationTime &&
            (null === n || 0 === n.expirationTime) &&
            null !== (n = t.lastRenderedReducer))
        )
          try {
            var u = t.lastRenderedState,
              l = n(u, r);
            if (((a.eagerReducer = n), (a.eagerState = l), Kn(l, u))) return;
          } catch (e) {}
        ru(e, o);
      }
    }
    var Sa = {
        readContext: ni,
        useCallback: na,
        useContext: na,
        useEffect: na,
        useImperativeHandle: na,
        useLayoutEffect: na,
        useMemo: na,
        useReducer: na,
        useRef: na,
        useState: na,
        useDebugValue: na,
        useResponder: na,
        useDeferredValue: na,
        useTransition: na,
      },
      Ta = {
        readContext: ni,
        useCallback: va,
        useContext: ni,
        useEffect: ya,
        useImperativeHandle: function (e, t, r) {
          return (
            (r = null != r ? r.concat([e]) : null),
            da(4, 36, ma.bind(null, t, e), r)
          );
        },
        useLayoutEffect: function (e, t) {
          return da(4, 36, e, t);
        },
        useMemo: function (e, t) {
          var r = sa();
          return (
            (t = void 0 === t ? null : t),
            (e = e()),
            (r.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, r) {
          var n = sa();
          return (
            (t = void 0 !== r ? r(t) : t),
            (n.memoizedState = n.baseState = t),
            (e = (e = n.queue = {
              last: null,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }).dispatch = wa.bind(null, $i, e)),
            [n.memoizedState, e]
          );
        },
        useRef: function (e) {
          return (sa().memoizedState = e = { current: e });
        },
        useState: pa,
        useDebugValue: _a,
        useResponder: Wi,
        useDeferredValue: function (t, r) {
          var e = pa(t),
            n = e[0],
            o = e[1];
          return (
            ya(
              function () {
                i.unstable_next(function () {
                  var e = zi.suspense;
                  zi.suspense = void 0 === r ? null : r;
                  try {
                    o(t);
                  } finally {
                    zi.suspense = e;
                  }
                });
              },
              [t, r]
            ),
            n
          );
        },
        useTransition: function (r) {
          var e = pa(!1),
            t = e[0],
            n = e[1];
          return [
            va(
              function (t) {
                n(!0),
                  i.unstable_next(function () {
                    var e = zi.suspense;
                    zi.suspense = void 0 === r ? null : r;
                    try {
                      n(!1), t();
                    } finally {
                      zi.suspense = e;
                    }
                  });
              },
              [r, t]
            ),
            t,
          ];
        },
      },
      Aa = {
        readContext: ni,
        useCallback: Ea,
        useContext: ni,
        useEffect: ba,
        useImperativeHandle: function (e, t, r) {
          return (
            (r = null != r ? r.concat([e]) : null),
            ha(4, 36, ma.bind(null, t, e), r)
          );
        },
        useLayoutEffect: function (e, t) {
          return ha(4, 36, e, t);
        },
        useMemo: function (e, t) {
          var r = ua();
          t = void 0 === t ? null : t;
          var n = r.memoizedState;
          return null !== n && null !== t && oa(t, n[1])
            ? n[0]
            : ((e = e()), (r.memoizedState = [e, t]), e);
        },
        useReducer: ca,
        useRef: function () {
          return ua().memoizedState;
        },
        useState: fa,
        useDebugValue: _a,
        useResponder: Wi,
        useDeferredValue: function (t, r) {
          var e = fa(),
            n = e[0],
            o = e[1];
          return (
            ba(
              function () {
                i.unstable_next(function () {
                  var e = zi.suspense;
                  zi.suspense = void 0 === r ? null : r;
                  try {
                    o(t);
                  } finally {
                    zi.suspense = e;
                  }
                });
              },
              [t, r]
            ),
            n
          );
        },
        useTransition: function (r) {
          var e = fa(),
            t = e[0],
            n = e[1];
          return [
            Ea(
              function (t) {
                n(!0),
                  i.unstable_next(function () {
                    var e = zi.suspense;
                    zi.suspense = void 0 === r ? null : r;
                    try {
                      n(!1), t();
                    } finally {
                      zi.suspense = e;
                    }
                  });
              },
              [r, t]
            ),
            t,
          ];
        },
      },
      ja = null,
      Oa = null,
      Ca = !1;
    function ka(e, t) {
      var r = Cu(5, null, null, 0);
      (r.elementType = "DELETED"),
        (r.type = "DELETED"),
        (r.stateNode = t),
        (r.return = e),
        (r.effectTag = 8),
        null !== e.lastEffect
          ? ((e.lastEffect.nextEffect = r), (e.lastEffect = r))
          : (e.firstEffect = e.lastEffect = r);
    }
    function xa(e, t) {
      switch (e.tag) {
        case 5:
          var r = e.type;
          return (
            null !==
              (t =
                1 !== t.nodeType || r.toLowerCase() !== t.nodeName.toLowerCase()
                  ? null
                  : t) && ((e.stateNode = t), 1)
          );
        case 6:
          return (
            null !==
              (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
            ((e.stateNode = t), 1)
          );
        default:
          return;
      }
    }
    function Ia(e) {
      if (Ca) {
        var t = Oa;
        if (t) {
          var r = t;
          if (!xa(e, t)) {
            if (!(t = tn(r.nextSibling)) || !xa(e, t))
              return (
                (e.effectTag = (-1025 & e.effectTag) | 2),
                (Ca = !1),
                void (ja = e)
              );
            ka(ja, r);
          }
          (ja = e), (Oa = tn(t.firstChild));
        } else (e.effectTag = (-1025 & e.effectTag) | 2), (Ca = !1), (ja = e);
      }
    }
    function Ma(e) {
      for (
        e = e.return;
        null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

      )
        e = e.return;
      ja = e;
    }
    function Ra(e) {
      if (e === ja) {
        if (!Ca) return Ma(e), (Ca = !0), 0;
        var t = e.type;
        if (
          5 !== e.tag ||
          ("head" !== t && "body" !== t && !Qr(t, e.memoizedProps))
        )
          for (t = Oa; t; ) ka(e, t), (t = tn(t.nextSibling));
        if ((Ma(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(B(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var r = e.data;
                if (r === Gr) {
                  if (0 === t) {
                    Oa = tn(e.nextSibling);
                    break e;
                  }
                  t--;
                } else (r !== $r && r !== qr && r !== Kr) || t++;
              }
              e = e.nextSibling;
            }
            Oa = null;
          }
        } else Oa = ja ? tn(e.stateNode.nextSibling) : null;
        return 1;
      }
    }
    function Ba() {
      (Oa = ja = null), (Ca = !1);
    }
    var Na = I.ReactCurrentOwner,
      Pa = !1;
    function Da(e, t, r, n) {
      t.child = null === e ? ki(t, null, r, n) : Ci(t, e.child, r, n);
    }
    function La(e, t, r, n, o) {
      r = r.render;
      var i = t.ref;
      return (
        ri(t, o),
        (n = ia(e, t, r, n, i, o)),
        null === e || Pa
          ? ((t.effectTag |= 1), Da(e, t, n, o), t.child)
          : ((t.updateQueue = e.updateQueue),
            (t.effectTag &= -517),
            e.expirationTime <= o && (e.expirationTime = 0),
            Ja(e, t, o))
      );
    }
    function Ua(e, t, r, n, o, i) {
      if (null !== e)
        return (
          (a = e.child),
          o < i &&
          ((o = a.memoizedProps),
          (r = null !== (r = r.compare) ? r : Yn)(o, n) && e.ref === t.ref)
            ? Ja(e, t, i)
            : ((t.effectTag |= 1),
              ((e = xu(a, n)).ref = t.ref),
              ((e.return = t).child = e))
        );
      var a = r.type;
      return "function" != typeof a ||
        ku(a) ||
        void 0 !== a.defaultProps ||
        null !== r.compare ||
        void 0 !== r.defaultProps
        ? (((e = Iu(r.type, null, n, null, t.mode, i)).ref = t.ref),
          ((e.return = t).child = e))
        : ((t.tag = 15), (t.type = a), Fa(e, t, a, n, o, i));
    }
    function Fa(e, t, r, n, o, i) {
      return null !== e &&
        Yn(e.memoizedProps, n) &&
        e.ref === t.ref &&
        ((Pa = !1), o < i)
        ? Ja(e, t, i)
        : Va(e, t, r, n, i);
    }
    function Wa(e, t) {
      var r = t.ref;
      ((null === e && null !== r) || (null !== e && e.ref !== r)) &&
        (t.effectTag |= 128);
    }
    function Va(e, t, r, n, o) {
      var i = po(t, (i = fo(r) ? co : uo.current));
      return (
        ri(t, o),
        (r = ia(e, t, r, n, i, o)),
        null === e || Pa
          ? ((t.effectTag |= 1), Da(e, t, r, o), t.child)
          : ((t.updateQueue = e.updateQueue),
            (t.effectTag &= -517),
            e.expirationTime <= o && (e.expirationTime = 0),
            Ja(e, t, o))
      );
    }
    function za(e, t, r, n, o) {
      var i, a, s, u, l, c, p, f, g;
      return (
        fo(r) ? ((i = !0), mo(t)) : (i = !1),
        ri(t, o),
        (n =
          null === t.stateNode
            ? (null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              Ei(t, r, n),
              Si(t, r, n, o),
              !0)
            : null === e
            ? ((a = t.stateNode),
              (s = t.memoizedProps),
              (a.props = s),
              (f = a.context),
              (u =
                "object" == typeof (u = r.contextType) && null !== u
                  ? ni(u)
                  : po(t, (u = fo(r) ? co : uo.current))),
              (c =
                "function" == typeof (l = r.getDerivedStateFromProps) ||
                "function" == typeof a.getSnapshotBeforeUpdate) ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof a.componentWillReceiveProps) ||
                (s === n && f === u) ||
                wi(0, a, n, u),
              (oi = !1),
              (p = t.memoizedState),
              (f = a.state = p),
              null !== (g = t.updateQueue) &&
                (gi(t, g, n, a, o), (f = t.memoizedState)),
              s !== n || p !== f || lo.current || oi
                ? ("function" == typeof l &&
                    (mi(t, 0, l, n), (f = t.memoizedState)),
                  (s = oi || vi(t, r, s, n, p, f, u))
                    ? (c ||
                        ("function" != typeof a.UNSAFE_componentWillMount &&
                          "function" != typeof a.componentWillMount) ||
                        ("function" == typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" == typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" == typeof a.componentDidMount &&
                        (t.effectTag |= 4))
                    : ("function" == typeof a.componentDidMount &&
                        (t.effectTag |= 4),
                      (t.memoizedProps = n),
                      (t.memoizedState = f)),
                  (a.props = n),
                  (a.state = f),
                  (a.context = u),
                  s)
                : ("function" == typeof a.componentDidMount &&
                    (t.effectTag |= 4),
                  !1))
            : ((a = t.stateNode),
              (s = t.memoizedProps),
              (a.props = t.type === t.elementType ? s : Ko(t.type, s)),
              (f = a.context),
              (u =
                "object" == typeof (u = r.contextType) && null !== u
                  ? ni(u)
                  : po(t, (u = fo(r) ? co : uo.current))),
              (c =
                "function" == typeof (l = r.getDerivedStateFromProps) ||
                "function" == typeof a.getSnapshotBeforeUpdate) ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof a.componentWillReceiveProps) ||
                (s === n && f === u) ||
                wi(0, a, n, u),
              (oi = !1),
              (f = t.memoizedState),
              (p = a.state = f),
              null !== (g = t.updateQueue) &&
                (gi(t, g, n, a, o), (p = t.memoizedState)),
              s !== n || f !== p || lo.current || oi
                ? ("function" == typeof l &&
                    (mi(t, 0, l, n), (p = t.memoizedState)),
                  (l = oi || vi(t, r, s, n, f, p, u))
                    ? (c ||
                        ("function" != typeof a.UNSAFE_componentWillUpdate &&
                          "function" != typeof a.componentWillUpdate) ||
                        ("function" == typeof a.componentWillUpdate &&
                          a.componentWillUpdate(n, p, u),
                        "function" == typeof a.UNSAFE_componentWillUpdate &&
                          a.UNSAFE_componentWillUpdate(n, p, u)),
                      "function" == typeof a.componentDidUpdate &&
                        (t.effectTag |= 4),
                      "function" == typeof a.getSnapshotBeforeUpdate &&
                        (t.effectTag |= 256))
                    : ("function" != typeof a.componentDidUpdate ||
                        (s === e.memoizedProps && f === e.memoizedState) ||
                        (t.effectTag |= 4),
                      "function" != typeof a.getSnapshotBeforeUpdate ||
                        (s === e.memoizedProps && f === e.memoizedState) ||
                        (t.effectTag |= 256),
                      (t.memoizedProps = n),
                      (t.memoizedState = p)),
                  (a.props = n),
                  (a.state = p),
                  (a.context = u),
                  l)
                : ("function" != typeof a.componentDidUpdate ||
                    (s === e.memoizedProps && f === e.memoizedState) ||
                    (t.effectTag |= 4),
                  "function" != typeof a.getSnapshotBeforeUpdate ||
                    (s === e.memoizedProps && f === e.memoizedState) ||
                    (t.effectTag |= 256),
                  !1))),
        Ha(e, t, r, n, i, o)
      );
    }
    function Ha(e, t, r, n, o, i) {
      Wa(e, t);
      var a = 0 != (64 & t.effectTag);
      if (!n && !a) return o && _o(t, r, !1), Ja(e, t, i);
      (n = t.stateNode), (Na.current = t);
      var s =
        a && "function" != typeof r.getDerivedStateFromError
          ? null
          : n.render();
      return (
        (t.effectTag |= 1),
        null !== e && a
          ? ((t.child = Ci(t, e.child, null, i)), (t.child = Ci(t, null, s, i)))
          : Da(e, t, s, i),
        (t.memoizedState = n.state),
        o && _o(t, r, !0),
        t.child
      );
    }
    function $a(e) {
      var t = e.stateNode;
      t.pendingContext
        ? yo(0, t.pendingContext, t.pendingContext !== t.context)
        : t.context && yo(0, t.context, !1),
        Ni(e, t.containerInfo);
    }
    var Ga = { dehydrated: null, retryTime: 0 };
    function Ka(e, t, r) {
      var n,
        o = t.mode,
        i = t.pendingProps,
        a = Ui.current,
        s = !1;
      if (
        ((n = !(n = 0 != (64 & t.effectTag))
          ? 0 != (2 & a) && (null === e || null !== e.memoizedState)
          : n)
          ? ((s = !0), (t.effectTag &= -65))
          : (null !== e && null === e.memoizedState) ||
            void 0 === i.fallback ||
            !0 === i.unstable_avoidThisFallback ||
            (a |= 1),
        ao(Ui, 1 & a),
        null === e)
      ) {
        if ((void 0 !== i.fallback && Ia(t), s)) {
          if (
            ((s = i.fallback),
            0 == (2 & ((i = Mu(null, o, 0, null)).return = t).mode))
          )
            for (
              e = (null !== t.memoizedState ? t.child : t).child, i.child = e;
              null !== e;

            )
              (e.return = i), (e = e.sibling);
          return (
            ((r = Mu(s, o, r, null)).return = t),
            (i.sibling = r),
            (t.memoizedState = Ga),
            (t.child = i),
            r
          );
        }
        return (
          (o = i.children),
          (t.memoizedState = null),
          (t.child = ki(t, null, o, r))
        );
      }
      if (null !== e.memoizedState) {
        if (((o = (e = e.child).sibling), s)) {
          if (
            ((i = i.fallback),
            0 == (2 & ((r = xu(e, e.pendingProps)).return = t).mode) &&
              (s = (null !== t.memoizedState ? t.child : t).child) !== e.child)
          )
            for (r.child = s; null !== s; ) (s.return = r), (s = s.sibling);
          return (
            ((o = xu(o, i, o.expirationTime)).return = t),
            (r.sibling = o),
            (r.childExpirationTime = 0),
            (t.memoizedState = Ga),
            (t.child = r),
            o
          );
        }
        return (
          (r = Ci(t, e.child, i.children, r)),
          (t.memoizedState = null),
          (t.child = r)
        );
      }
      if (((e = e.child), s)) {
        if (
          ((s = i.fallback),
          ((i = Mu(null, o, 0, null)).return = t),
          null !== (i.child = e) && (e.return = i),
          0 == (2 & t.mode))
        )
          for (
            e = (null !== t.memoizedState ? t.child : t).child, i.child = e;
            null !== e;

          )
            (e.return = i), (e = e.sibling);
        return (
          ((r = Mu(s, o, r, null)).return = t),
          ((i.sibling = r).effectTag |= 2),
          (i.childExpirationTime = 0),
          (t.memoizedState = Ga),
          (t.child = i),
          r
        );
      }
      return (t.memoizedState = null), (t.child = Ci(t, e, i.children, r));
    }
    function qa(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var r = e.alternate;
      null !== r && r.expirationTime < t && (r.expirationTime = t),
        ti(e.return, t);
    }
    function Ya(e, t, r, n, o, i) {
      var a = e.memoizedState;
      null === a
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            last: n,
            tail: r,
            tailExpiration: 0,
            tailMode: o,
            lastEffect: i,
          })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.last = n),
          (a.tail = r),
          (a.tailExpiration = 0),
          (a.tailMode = o),
          (a.lastEffect = i));
    }
    function Xa(e, t, r) {
      var n = t.pendingProps,
        o = n.revealOrder,
        i = n.tail;
      if ((Da(e, t, n.children, r), 0 != (2 & (n = Ui.current))))
        (n = (1 & n) | 2), (t.effectTag |= 64);
      else {
        if (null !== e && 0 != (64 & e.effectTag))
          e: for (e = t.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && qa(e, r);
            else if (19 === e.tag) qa(e, r);
            else if (null !== e.child) {
              e = (e.child.return = e).child;
              continue;
            }
            if (e === t) break e;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        n &= 1;
      }
      if ((ao(Ui, n), 0 == (2 & t.mode))) t.memoizedState = null;
      else
        switch (o) {
          case "forwards":
            for (r = t.child, o = null; null !== r; )
              null !== (e = r.alternate) && null === Fi(e) && (o = r),
                (r = r.sibling);
            null === (r = o)
              ? ((o = t.child), (t.child = null))
              : ((o = r.sibling), (r.sibling = null)),
              Ya(t, !1, o, r, i, t.lastEffect);
            break;
          case "backwards":
            for (o = t.child, t.child = r = null; null !== o; ) {
              if (null !== (e = o.alternate) && null === Fi(e)) {
                t.child = o;
                break;
              }
              (e = o.sibling), (o.sibling = r), (r = o), (o = e);
            }
            Ya(t, !0, r, null, i, t.lastEffect);
            break;
          case "together":
            Ya(t, !1, null, null, void 0, t.lastEffect);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Ja(e, t, r) {
      null !== e && (t.dependencies = e.dependencies);
      var n = t.expirationTime;
      if ((0 !== n && du(n), t.childExpirationTime < r)) return null;
      if (null !== e && t.child !== e.child) throw Error(B(153));
      if (null !== t.child) {
        for (
          r = xu((e = t.child), e.pendingProps, e.expirationTime),
            (t.child = r).return = t;
          null !== e.sibling;

        )
          (e = e.sibling),
            ((r = r.sibling = xu(
              e,
              e.pendingProps,
              e.expirationTime
            )).return = t);
        r.sibling = null;
      }
      return t.child;
    }
    function Qa(e) {
      e.effectTag |= 4;
    }
    function Za(e, t) {
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; null !== t; )
            null !== t.alternate && (r = t), (t = t.sibling);
          null === r ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          for (var r = e.tail, n = null; null !== r; )
            null !== r.alternate && (n = r), (r = r.sibling);
          null === n
            ? t || null === e.tail
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (n.sibling = null);
      }
    }
    function es(e, t) {
      return { value: e, source: t, stack: J(t) };
    }
    var ts = function (e, t) {
        for (var r = t.child; null !== r; ) {
          if (5 === r.tag || 6 === r.tag) e.appendChild(r.stateNode);
          else if (4 !== r.tag && null !== r.child) {
            r = (r.child.return = r).child;
            continue;
          }
          if (r === t) break;
          for (; null === r.sibling; ) {
            if (null === r.return || r.return === t) return;
            r = r.return;
          }
          (r.sibling.return = r.return), (r = r.sibling);
        }
      },
      rs = function (e, t, r, n, o) {
        var i = e.memoizedProps;
        if (i !== n) {
          var a,
            s,
            u = t.stateNode;
          switch ((Bi(Ii.current), (e = null), r)) {
            case "input":
              (i = je(u, i)), (n = je(u, n)), (e = []);
              break;
            case "option":
              (i = Me(u, i)), (n = Me(u, n)), (e = []);
              break;
            case "select":
              (i = h({}, i, { value: void 0 })),
                (n = h({}, n, { value: void 0 })),
                (e = []);
              break;
            case "textarea":
              (i = Be(u, i)), (n = Be(u, n)), (e = []);
              break;
            default:
              "function" != typeof i.onClick &&
                "function" == typeof n.onClick &&
                (u.onclick = Ur);
          }
          for (a in (Pr(r, n), (r = null), i))
            if (!n.hasOwnProperty(a) && i.hasOwnProperty(a) && null != i[a])
              if ("style" === a)
                for (s in ((u = i[a]), u))
                  u.hasOwnProperty(s) && ((r = r || {}), (r[s] = ""));
              else
                "dangerouslySetInnerHTML" !== a &&
                  "children" !== a &&
                  "suppressContentEditableWarning" !== a &&
                  "suppressHydrationWarning" !== a &&
                  "autoFocus" !== a &&
                  (y.hasOwnProperty(a)
                    ? (e = e || [])
                    : (e = e || []).push(a, null));
          for (a in n) {
            var l = n[a],
              u = null != i ? i[a] : void 0;
            if (n.hasOwnProperty(a) && l !== u && (null != l || null != u))
              if ("style" === a)
                if (u) {
                  for (s in u)
                    !u.hasOwnProperty(s) ||
                      (l && l.hasOwnProperty(s)) ||
                      ((r = r || {}), (r[s] = ""));
                  for (s in l)
                    l.hasOwnProperty(s) &&
                      u[s] !== l[s] &&
                      ((r = r || {}), (r[s] = l[s]));
                } else r || (e = e || []).push(a, r), (r = l);
              else
                "dangerouslySetInnerHTML" === a
                  ? ((l = l ? l.__html : void 0),
                    (u = u ? u.__html : void 0),
                    null != l && u !== l && (e = e || []).push(a, "" + l))
                  : "children" === a
                  ? u === l ||
                    ("string" != typeof l && "number" != typeof l) ||
                    (e = e || []).push(a, "" + l)
                  : "suppressContentEditableWarning" !== a &&
                    "suppressHydrationWarning" !== a &&
                    (y.hasOwnProperty(a)
                      ? (null != l && Lr(o, a), e || u === l || (e = []))
                      : (e = e || []).push(a, l));
          }
          r && (e = e || []).push("style", r),
            (o = e),
            (t.updateQueue = o) && Qa(t);
        }
      },
      ns = function (e, t, r, n) {
        r !== n && Qa(t);
      },
      os = "function" == typeof WeakSet ? WeakSet : Set;
    function is(e, t) {
      var r = t.source;
      null === t.stack && null !== r && J(r),
        null !== r && X(r.type),
        (t = t.value),
        null !== e && 1 === e.tag && X(e.type);
      try {
        console.error(t);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function as(t) {
      var e = t.ref;
      if (null !== e)
        if ("function" == typeof e)
          try {
            e(null);
          } catch (e) {
            wu(t, e);
          }
        else e.current = null;
    }
    function ss(e, t, r) {
      if (null !== (r = null !== (r = r.updateQueue) ? r.lastEffect : null)) {
        var n,
          o = (r = r.next);
        do {} while (
          (0 != (o.tag & e) &&
            ((n = o.destroy), (o.destroy = void 0) !== n && n()),
          0 != (o.tag & t) && ((n = o.create), (o.destroy = n())),
          (o = o.next) !== r)
        );
      }
    }
    function us(e, n, t) {
      switch (("function" == typeof ju && ju(n), n.tag)) {
        case 0:
        case 11:
        case 14:
        case 15:
          var o;
          null !== (e = n.updateQueue) &&
            null !== (e = e.lastEffect) &&
            ((o = e.next),
            Fo(97 < t ? 97 : t, function () {
              var e = o;
              do {
                var t = e.destroy;
                if (void 0 !== t) {
                  var r = n;
                  try {
                    t();
                  } catch (e) {
                    wu(r, e);
                  }
                }
              } while ((e = e.next) !== o);
            }));
          break;
        case 1:
          as(n),
            "function" == typeof (t = n.stateNode).componentWillUnmount &&
              (function (t, e) {
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (e) {
                  wu(t, e);
                }
              })(n, t);
          break;
        case 5:
          as(n);
          break;
        case 4:
          ps(e, n, t);
      }
    }
    function ls(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }
    function cs(e) {
      e: {
        for (var t = e.return; null !== t; ) {
          if (ls(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(B(160));
      }
      switch (((t = r.stateNode), r.tag)) {
        case 5:
          var n = !1;
          break;
        case 3:
        case 4:
          (t = t.containerInfo), (n = !0);
          break;
        default:
          throw Error(B(161));
      }
      16 & r.effectTag && (He(t, ""), (r.effectTag &= -17));
      e: t: for (r = e; ; ) {
        for (; null === r.sibling; ) {
          if (null === r.return || ls(r.return)) {
            r = null;
            break e;
          }
          r = r.return;
        }
        for (
          r.sibling.return = r.return, r = r.sibling;
          5 !== r.tag && 6 !== r.tag && 18 !== r.tag;

        ) {
          if (2 & r.effectTag) continue t;
          if (null === r.child || 4 === r.tag) continue t;
          r = (r.child.return = r).child;
        }
        if (!(2 & r.effectTag)) {
          r = r.stateNode;
          break e;
        }
      }
      for (var o = e; ; ) {
        if ((i = 5 === o.tag || 6 === o.tag)) {
          var i,
            a,
            s = i ? o.stateNode : o.stateNode.instance;
          r
            ? n
              ? ((a = s),
                (s = r),
                (8 === (i = t).nodeType ? i.parentNode : i).insertBefore(a, s))
              : t.insertBefore(s, r)
            : n
            ? (8 === (a = t).nodeType
                ? (i = a.parentNode).insertBefore(s, a)
                : (i = a).appendChild(s),
              null != (a = a._reactRootContainer) ||
                null !== i.onclick ||
                (i.onclick = Ur))
            : t.appendChild(s);
        } else if (4 !== o.tag && null !== o.child) {
          o = (o.child.return = o).child;
          continue;
        }
        if (o === e) break;
        for (; null === o.sibling; ) {
          if (null === o.return || o.return === e) return;
          o = o.return;
        }
        (o.sibling.return = o.return), (o = o.sibling);
      }
    }
    function ps(e, t, r) {
      for (var n, o, i = t, a = !1; ; ) {
        if (!a) {
          a = i.return;
          e: for (;;) {
            if (null === a) throw Error(B(160));
            switch (((n = a.stateNode), a.tag)) {
              case 5:
                o = !1;
                break e;
              case 3:
              case 4:
                (n = n.containerInfo), (o = !0);
                break e;
            }
            a = a.return;
          }
          a = !0;
        }
        if (5 === i.tag || 6 === i.tag) {
          e: for (var s = e, u = i, l = r, c = u; ; )
            if ((us(s, c, l), null !== c.child && 4 !== c.tag))
              (c.child.return = c), (c = c.child);
            else {
              if (c === u) break;
              for (; null === c.sibling; ) {
                if (null === c.return || c.return === u) break e;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
          o
            ? ((s = n),
              (u = i.stateNode),
              (8 === s.nodeType ? s.parentNode : s).removeChild(u))
            : n.removeChild(i.stateNode);
        } else if (4 === i.tag) {
          if (null !== i.child) {
            (n = i.stateNode.containerInfo),
              (o = !0),
              (i = (i.child.return = i).child);
            continue;
          }
        } else if ((us(e, i, r), null !== i.child)) {
          i = (i.child.return = i).child;
          continue;
        }
        if (i === t) break;
        for (; null === i.sibling; ) {
          if (null === i.return || i.return === t) return;
          4 === (i = i.return).tag && (a = !1);
        }
        (i.sibling.return = i.return), (i = i.sibling);
      }
    }
    function fs(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ss(4, 8, t);
          break;
        case 1:
          break;
        case 5:
          var r = t.stateNode;
          if (null != r) {
            var n = t.memoizedProps,
              o = null !== e ? e.memoizedProps : n;
            e = t.type;
            var i = t.updateQueue;
            if ((t.updateQueue = null) !== i) {
              for (
                r[an] = n,
                  "input" === e &&
                    "radio" === n.type &&
                    null != n.name &&
                    Ce(r, n),
                  Dr(e, o),
                  t = Dr(e, n),
                  o = 0;
                o < i.length;
                o += 2
              ) {
                var a = i[o],
                  s = i[o + 1];
                "style" === a
                  ? Br(r, s)
                  : "dangerouslySetInnerHTML" === a
                  ? ze(r, s)
                  : "children" === a
                  ? He(r, s)
                  : we(r, a, s, t);
              }
              switch (e) {
                case "input":
                  ke(r, n);
                  break;
                case "textarea":
                  Pe(r, n);
                  break;
                case "select":
                  (t = r._wrapperState.wasMultiple),
                    (r._wrapperState.wasMultiple = !!n.multiple),
                    null != (e = n.value)
                      ? Re(r, !!n.multiple, e, !1)
                      : t !== !!n.multiple &&
                        (null != n.defaultValue
                          ? Re(r, !!n.multiple, n.defaultValue, !0)
                          : Re(r, !!n.multiple, n.multiple ? [] : "", !1));
              }
            }
          }
          break;
        case 6:
          if (null === t.stateNode) throw Error(B(162));
          t.stateNode.nodeValue = t.memoizedProps;
          break;
        case 3:
          (t = t.stateNode).hydrate && ((t.hydrate = !1), At(t.containerInfo));
          break;
        case 12:
          break;
        case 13:
          if (
            (null === (r = t).memoizedState
              ? (n = !1)
              : ((n = !0), (r = t.child), (Ws = Do())),
            null !== r)
          )
            e: for (e = r; ; ) {
              if (5 === e.tag)
                (i = e.stateNode),
                  n
                    ? "function" == typeof (i = i.style).setProperty
                      ? i.setProperty("display", "none", "important")
                      : (i.display = "none")
                    : ((i = e.stateNode),
                      (o =
                        null != (o = e.memoizedProps.style) &&
                        o.hasOwnProperty("display")
                          ? o.display
                          : null),
                      (i.style.display = Rr("display", o)));
              else if (6 === e.tag)
                e.stateNode.nodeValue = n ? "" : e.memoizedProps;
              else {
                if (
                  13 === e.tag &&
                  null !== e.memoizedState &&
                  null === e.memoizedState.dehydrated
                ) {
                  ((i = e.child.sibling).return = e), (e = i);
                  continue;
                }
                if (null !== e.child) {
                  e = (e.child.return = e).child;
                  continue;
                }
              }
              if (e === r) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === r) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          gs(t);
          break;
        case 19:
          gs(t);
          break;
        case 17:
        case 20:
        case 21:
          break;
        default:
          throw Error(B(163));
      }
    }
    function gs(r) {
      var n,
        e = r.updateQueue;
      null !== e &&
        ((r.updateQueue = null) === (n = r.stateNode) &&
          (n = r.stateNode = new os()),
        e.forEach(function (e) {
          var t = function (e, t) {
            var r = e.stateNode;
            null !== r && r.delete(t),
              (t = 0) === t && (t = tu((t = eu()), e, null)),
              null !== (e = nu(e, t)) && iu(e);
          }.bind(null, r, e);
          n.has(e) || (n.add(e), e.then(t, t));
        }));
    }
    var ds = "function" == typeof WeakMap ? WeakMap : Map;
    function hs(e, t, r) {
      ((r = si(r, null)).tag = 3), (r.payload = { element: null });
      var n = t.value;
      return (
        (r.callback = function () {
          Hs || ((Hs = !0), ($s = n)), is(e, t);
        }),
        r
      );
    }
    function ys(t, r, e) {
      (e = si(e, null)).tag = 3;
      var n,
        o = t.type.getDerivedStateFromError;
      "function" == typeof o &&
        ((n = r.value),
        (e.payload = function () {
          return is(t, r), o(n);
        }));
      var i = t.stateNode;
      return (
        null !== i &&
          "function" == typeof i.componentDidCatch &&
          (e.callback = function () {
            "function" != typeof o &&
              (null === Gs ? (Gs = new Set([this])) : Gs.add(this), is(t, r));
            var e = r.stack;
            this.componentDidCatch(r.value, {
              componentStack: null !== e ? e : "",
            });
          }),
        e
      );
    }
    var bs = Math.ceil,
      ms = I.ReactCurrentDispatcher,
      _s = I.ReactCurrentOwner,
      vs = 0,
      Es = 8,
      ws = 16,
      Ss = 32,
      Ts = 0,
      As = 1,
      js = 2,
      Os = 3,
      Cs = 4,
      ks = 5,
      xs = vs,
      Is = null,
      Ms = null,
      Rs = 0,
      Bs = Ts,
      Ns = null,
      Ps = 1073741823,
      Ds = 1073741823,
      Ls = null,
      Us = 0,
      Fs = !1,
      Ws = 0,
      Vs = 500,
      zs = null,
      Hs = !1,
      $s = null,
      Gs = null,
      Ks = !1,
      qs = null,
      Ys = 90,
      Xs = null,
      Js = 0,
      Qs = null,
      Zs = 0;
    function eu() {
      return (xs & (ws | Ss)) !== vs
        ? 1073741821 - ((Do() / 10) | 0)
        : 0 !== Zs
        ? Zs
        : (Zs = 1073741821 - ((Do() / 10) | 0));
    }
    function tu(e, t, r) {
      if (0 == (2 & (t = t.mode))) return 1073741823;
      var n = Lo();
      if (0 == (4 & t)) return 99 === n ? 1073741823 : 1073741822;
      if ((xs & ws) !== vs) return Rs;
      if (null !== r) e = Go(e, 0 | r.timeoutMs || 5e3, 250);
      else
        switch (n) {
          case 99:
            e = 1073741823;
            break;
          case 98:
            e = Go(e, 150, 100);
            break;
          case 97:
          case 96:
            e = Go(e, 5e3, 250);
            break;
          case 95:
            e = 2;
            break;
          default:
            throw Error(B(326));
        }
      return null !== Is && e === Rs && --e, e;
    }
    function ru(e, t) {
      if (50 < Js) throw ((Js = 0), (Qs = null), Error(B(185)));
      var r;
      null !== (e = nu(e, t)) &&
        ((r = Lo()),
        1073741823 === t
          ? (xs & Es) !== vs && (xs & (ws | Ss)) === vs
            ? su(e)
            : (iu(e), xs === vs && zo())
          : iu(e),
        (4 & xs) === vs ||
          (98 !== r && 99 !== r) ||
          (null === Xs
            ? (Xs = new Map([[e, t]]))
            : (void 0 === (r = Xs.get(e)) || t < r) && Xs.set(e, t)));
    }
    function nu(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var r = e.alternate;
      null !== r && r.expirationTime < t && (r.expirationTime = t);
      var n = e.return,
        o = null;
      if (null === n && 3 === e.tag) o = e.stateNode;
      else
        for (; null !== n; ) {
          if (
            ((r = n.alternate),
            n.childExpirationTime < t && (n.childExpirationTime = t),
            null !== r &&
              r.childExpirationTime < t &&
              (r.childExpirationTime = t),
            null === n.return && 3 === n.tag)
          ) {
            o = n.stateNode;
            break;
          }
          n = n.return;
        }
      return (
        null !== o && (Is === o && (du(t), Bs === Cs && Du(o, Rs)), Lu(o, t)), o
      );
    }
    function ou(e) {
      var t = e.lastExpiredTime;
      return 0 === t && Pu(e, (t = e.firstPendingTime))
        ? ((t = e.lastPingedTime), (e = e.nextKnownPendingLevel) < t ? t : e)
        : t;
    }
    function iu(e) {
      if (0 !== e.lastExpiredTime)
        (e.callbackExpirationTime = 1073741823),
          (e.callbackPriority = 99),
          (e.callbackNode = Vo(su.bind(null, e)));
      else {
        var t = ou(e),
          r = e.callbackNode;
        if (0 === t)
          null !== r &&
            ((e.callbackNode = null),
            (e.callbackExpirationTime = 0),
            (e.callbackPriority = 90));
        else {
          var n = eu(),
            n =
              1073741823 === t
                ? 99
                : 1 === t || 2 === t
                ? 95
                : (n = 10 * (1073741821 - t) - 10 * (1073741821 - n)) <= 0
                ? 99
                : n <= 250
                ? 98
                : n <= 5250
                ? 97
                : 95;
          if (null !== r) {
            var o = e.callbackPriority;
            if (e.callbackExpirationTime === t && n <= o) return;
            r !== Io && wo(r);
          }
          (e.callbackExpirationTime = t),
            (e.callbackPriority = n),
            (t =
              1073741823 === t
                ? Vo(su.bind(null, e))
                : Wo(n, au.bind(null, e), {
                    timeout: 10 * (1073741821 - t) - Do(),
                  })),
            (e.callbackNode = t);
        }
      }
    }
    function au(t, e) {
      if (((Zs = 0), e)) return Uu(t, (e = eu())), iu(t), null;
      var r = ou(t);
      if (0 !== r) {
        if (((e = t.callbackNode), (xs & (ws | Ss)) !== vs))
          throw Error(B(327));
        if ((_u(), (t === Is && r === Rs) || cu(t, r), null !== Ms)) {
          var n = xs;
          xs |= ws;
          for (var o = fu(); ; )
            try {
              !(function () {
                for (; null !== Ms && !So(); ) Ms = hu(Ms);
              })();
              break;
            } catch (e) {
              pu(t, e);
            }
          if ((Qo(), (xs = n), (ms.current = o), Bs === As))
            throw ((e = Ns), cu(t, r), Du(t, r), iu(t), e);
          if (null === Ms)
            switch (
              ((o = t.finishedWork = t.current.alternate),
              (t.finishedExpirationTime = r),
              (n = Bs),
              (Is = null),
              n)
            ) {
              case Ts:
              case As:
                throw Error(B(345));
              case js:
                Uu(t, 2 < r ? 2 : r);
                break;
              case Os:
                if (
                  (Du(t, r),
                  r === (n = t.lastSuspendedTime) &&
                    (t.nextKnownPendingLevel = bu(o)),
                  1073741823 === Ps && 10 < (o = Ws + Vs - Do()))
                ) {
                  if (Fs) {
                    var i = t.lastPingedTime;
                    if (0 === i || r <= i) {
                      (t.lastPingedTime = r), cu(t, r);
                      break;
                    }
                  }
                  if (0 !== (i = ou(t)) && i !== r) break;
                  if (0 !== n && n !== r) {
                    t.lastPingedTime = n;
                    break;
                  }
                  t.timeoutHandle = Zr(mu.bind(null, t), o);
                  break;
                }
                mu(t);
                break;
              case Cs:
                if (
                  (Du(t, r),
                  r === (n = t.lastSuspendedTime) &&
                    (t.nextKnownPendingLevel = bu(o)),
                  Fs && (0 === (o = t.lastPingedTime) || r <= o))
                ) {
                  (t.lastPingedTime = r), cu(t, r);
                  break;
                }
                if (0 !== (o = ou(t)) && o !== r) break;
                if (0 !== n && n !== r) {
                  t.lastPingedTime = n;
                  break;
                }
                if (
                  (1073741823 !== Ds
                    ? (n = 10 * (1073741821 - Ds) - Do())
                    : 1073741823 === Ps
                    ? (n = 0)
                    : ((n = 10 * (1073741821 - Ps) - 5e3),
                      (r = 10 * (1073741821 - r) - (o = Do())) <
                        (n =
                          ((n = (n = o - n) < 0 ? 0 : n) < 120
                            ? 120
                            : n < 480
                            ? 480
                            : n < 1080
                            ? 1080
                            : n < 1920
                            ? 1920
                            : n < 3e3
                            ? 3e3
                            : n < 4320
                            ? 4320
                            : 1960 * bs(n / 1960)) - n) && (n = r)),
                  10 < n)
                ) {
                  t.timeoutHandle = Zr(mu.bind(null, t), n);
                  break;
                }
                mu(t);
                break;
              case ks:
                if (1073741823 !== Ps && null !== Ls) {
                  var i = Ps,
                    a = Ls;
                  if (
                    10 <
                    (n =
                      (n = 0 | a.busyMinDurationMs) <= 0
                        ? 0
                        : ((o = 0 | a.busyDelayMs),
                          (i =
                            Do() -
                            (10 * (1073741821 - i) -
                              (0 | a.timeoutMs || 5e3))) <= o
                            ? 0
                            : o + n - i))
                  ) {
                    Du(t, r), (t.timeoutHandle = Zr(mu.bind(null, t), n));
                    break;
                  }
                }
                mu(t);
                break;
              default:
                throw Error(B(329));
            }
          if ((iu(t), t.callbackNode === e)) return au.bind(null, t);
        }
      }
      return null;
    }
    function su(t) {
      var e = 0 !== (e = t.lastExpiredTime) ? e : 1073741823;
      if (t.finishedExpirationTime === e) mu(t);
      else {
        if ((xs & (ws | Ss)) !== vs) throw Error(B(327));
        if ((_u(), (t === Is && e === Rs) || cu(t, e), null !== Ms)) {
          var r = xs;
          xs |= ws;
          for (var n = fu(); ; )
            try {
              !(function () {
                for (; null !== Ms; ) Ms = hu(Ms);
              })();
              break;
            } catch (e) {
              pu(t, e);
            }
          if ((Qo(), (xs = r), (ms.current = n), Bs === As))
            throw ((r = Ns), cu(t, e), Du(t, e), iu(t), r);
          if (null !== Ms) throw Error(B(261));
          (t.finishedWork = t.current.alternate),
            (t.finishedExpirationTime = e),
            (Is = null),
            mu(t),
            iu(t);
        }
      }
      return null;
    }
    function uu(e, t) {
      var r = xs;
      xs |= 1;
      try {
        return e(t);
      } finally {
        (xs = r) === vs && zo();
      }
    }
    function lu(e, t) {
      var r = xs;
      (xs &= -2), (xs |= Es);
      try {
        return e(t);
      } finally {
        (xs = r) === vs && zo();
      }
    }
    function cu(e, t) {
      (e.finishedWork = null), (e.finishedExpirationTime = 0);
      var r = e.timeoutHandle;
      if ((-1 !== r && ((e.timeoutHandle = -1), en(r)), null !== Ms))
        for (r = Ms.return; null !== r; ) {
          var n = r;
          switch (n.tag) {
            case 1:
              var o = n.type.childContextTypes;
              null != o && go();
              break;
            case 3:
              Pi(), ho();
              break;
            case 5:
              Li(n);
              break;
            case 4:
              Pi();
              break;
            case 13:
            case 19:
              io(Ui);
              break;
            case 10:
              ei(n);
          }
          r = r.return;
        }
      (Ms = xu((Is = e).current, null)),
        (Rs = t),
        (Bs = Ts),
        (Ds = Ps = 1073741823),
        (Ls = Ns = null),
        (Us = 0),
        (Fs = !1);
    }
    function pu(e, t) {
      do {
        try {
          if ((Qo(), aa(), null === Ms || null === Ms.return))
            return (Bs = As), (Ns = t), 0;
          e: {
            var r = e,
              n = Ms.return,
              o = t;
            if (
              ((t = Rs),
              ((h = Ms).effectTag |= 2048),
              (h.firstEffect = h.lastEffect = null) !== o &&
                "object" == typeof o &&
                "function" == typeof o.then)
            ) {
              var i,
                a,
                s,
                u = o,
                l = 0 != (1 & Ui.current),
                c = n;
              do {
                if (
                  (s = (s = 13 === c.tag)
                    ? null !== (i = c.memoizedState)
                      ? null !== i.dehydrated
                      : void 0 !== (a = c.memoizedProps).fallback &&
                        (!0 !== a.unstable_avoidThisFallback || !l)
                    : s)
                ) {
                  var p,
                    f,
                    g = c.updateQueue;
                  if (
                    (null === g
                      ? ((p = new Set()).add(u), (c.updateQueue = p))
                      : g.add(u),
                    0 == (2 & c.mode))
                  ) {
                    (c.effectTag |= 64),
                      (h.effectTag &= -2981),
                      1 === h.tag &&
                        (null === h.alternate
                          ? (h.tag = 17)
                          : (((f = si(1073741823, null)).tag = 2), li(h, f))),
                      (h.expirationTime = 1073741823);
                    break e;
                  }
                  var d,
                    o = void 0,
                    h = t,
                    y = r.pingCache;
                  null === y
                    ? ((y = r.pingCache = new ds()),
                      (o = new Set()),
                      y.set(u, o))
                    : void 0 === (o = y.get(u)) &&
                      ((o = new Set()), y.set(u, o)),
                    o.has(h) ||
                      (o.add(h), (d = Su.bind(null, r, u, h)), u.then(d, d)),
                    (c.effectTag |= 4096),
                    (c.expirationTime = t);
                  break e;
                }
              } while (null !== (c = c.return));
              o = Error(
                (X(h.type) || "A React component") +
                  " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                  J(h)
              );
            }
            Bs !== ks && (Bs = js), (o = es(o, h)), (c = n);
            do {
              switch (c.tag) {
                case 3:
                  u = o;
                  (c.effectTag |= 4096),
                    (c.expirationTime = t),
                    ci(c, hs(c, u, t));
                  break e;
                case 1:
                  u = o;
                  var b = c.type,
                    m = c.stateNode;
                  if (
                    0 == (64 & c.effectTag) &&
                    ("function" == typeof b.getDerivedStateFromError ||
                      (null !== m &&
                        "function" == typeof m.componentDidCatch &&
                        (null === Gs || !Gs.has(m))))
                  ) {
                    (c.effectTag |= 4096),
                      (c.expirationTime = t),
                      ci(c, ys(c, u, t));
                    break e;
                  }
              }
            } while (null !== (c = c.return));
          }
          Ms = yu(Ms);
        } catch (e) {
          t = e;
          continue;
        }
        break;
      } while (1);
    }
    function fu() {
      var e = ms.current;
      return (ms.current = Sa), null === e ? Sa : e;
    }
    function gu(e, t) {
      e < Ps && 2 < e && (Ps = e),
        null !== t && e < Ds && 2 < e && ((Ds = e), (Ls = t));
    }
    function du(e) {
      Us < e && (Us = e);
    }
    function hu(e) {
      var t = Tu(e.alternate, e, Rs);
      return (
        (e.memoizedProps = e.pendingProps),
        null === t && (t = yu(e)),
        (_s.current = null),
        t
      );
    }
    function yu(e) {
      Ms = e;
      do {
        var t = Ms.alternate;
        if (((e = Ms.return), 0 == (2048 & Ms.effectTag))) {
          e: {
            var r = t,
              n = Rs,
              o = (t = Ms).pendingProps;
            switch (t.tag) {
              case 2:
              case 16:
                break;
              case 15:
              case 0:
                break;
              case 1:
                fo(t.type) && go();
                break;
              case 3:
                Pi(),
                  ho(),
                  (o = t.stateNode).pendingContext &&
                    ((o.context = o.pendingContext), (o.pendingContext = null)),
                  (null !== r && null !== r.child) || !Ra(t) || Qa(t);
                break;
              case 5:
                Li(t);
                var n = Bi(Ri.current),
                  i = t.type;
                if (null !== r && null != t.stateNode)
                  rs(r, t, i, o, n), r.ref !== t.ref && (t.effectTag |= 128);
                else if (o) {
                  var a = Bi(Ii.current);
                  if (Ra(t)) {
                    var s = (o = t).stateNode,
                      r = o.type,
                      u = o.memoizedProps,
                      l = n;
                    switch (
                      ((s[on] = o), (s[an] = u), (i = void 0), (n = s), r)
                    ) {
                      case "iframe":
                      case "object":
                      case "embed":
                        wr("load", n);
                        break;
                      case "video":
                      case "audio":
                        for (s = 0; s < et.length; s++) wr(et[s], n);
                        break;
                      case "source":
                        wr("error", n);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        wr("error", n), wr("load", n);
                        break;
                      case "form":
                        wr("reset", n), wr("submit", n);
                        break;
                      case "details":
                        wr("toggle", n);
                        break;
                      case "input":
                        Oe(n, u), wr("invalid", n), Lr(l, "onChange");
                        break;
                      case "select":
                        (n._wrapperState = { wasMultiple: !!u.multiple }),
                          wr("invalid", n),
                          Lr(l, "onChange");
                        break;
                      case "textarea":
                        Ne(n, u), wr("invalid", n), Lr(l, "onChange");
                    }
                    for (i in (Pr(r, u), (s = null), u))
                      u.hasOwnProperty(i) &&
                        ((a = u[i]),
                        "children" === i
                          ? "string" == typeof a
                            ? n.textContent !== a && (s = ["children", a])
                            : "number" == typeof a &&
                              n.textContent !== "" + a &&
                              (s = ["children", "" + a])
                          : y.hasOwnProperty(i) && null != a && Lr(l, i));
                    switch (r) {
                      case "input":
                        Te(n), xe(n, u, !0);
                        break;
                      case "textarea":
                        Te(n), De(n);
                        break;
                      case "select":
                      case "option":
                        break;
                      default:
                        "function" == typeof u.onClick && (n.onclick = Ur);
                    }
                    (i = s), (o.updateQueue = i), (o = null !== i) && Qa(t);
                  } else {
                    (r = t),
                      (l = i),
                      (u = o),
                      (s = 9 === n.nodeType ? n : n.ownerDocument),
                      (a = a === Le.html ? Ue(l) : a) === Le.html
                        ? "script" === l
                          ? (((u = s.createElement("div")).innerHTML =
                              "<script></script>"),
                            (s = u.removeChild(u.firstChild)))
                          : "string" == typeof u.is
                          ? (s = s.createElement(l, { is: u.is }))
                          : ((s = s.createElement(l)),
                            "select" === l &&
                              ((l = s),
                              u.multiple
                                ? (l.multiple = !0)
                                : u.size && (l.size = u.size)))
                        : (s = s.createElementNS(a, l)),
                      ((u = s)[on] = r),
                      (u[an] = o),
                      ts(u, t),
                      (t.stateNode = u);
                    var c = n,
                      p = Dr((l = i), (r = o));
                    switch (l) {
                      case "iframe":
                      case "object":
                      case "embed":
                        wr("load", u), (n = r);
                        break;
                      case "video":
                      case "audio":
                        for (n = 0; n < et.length; n++) wr(et[n], u);
                        n = r;
                        break;
                      case "source":
                        wr("error", u), (n = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        wr("error", u), wr("load", u), (n = r);
                        break;
                      case "form":
                        wr("reset", u), wr("submit", u), (n = r);
                        break;
                      case "details":
                        wr("toggle", u), (n = r);
                        break;
                      case "input":
                        Oe(u, r),
                          (n = je(u, r)),
                          wr("invalid", u),
                          Lr(c, "onChange");
                        break;
                      case "option":
                        n = Me(u, r);
                        break;
                      case "select":
                        (u._wrapperState = { wasMultiple: !!r.multiple }),
                          (n = h({}, r, { value: void 0 })),
                          wr("invalid", u),
                          Lr(c, "onChange");
                        break;
                      case "textarea":
                        Ne(u, r),
                          (n = Be(u, r)),
                          wr("invalid", u),
                          Lr(c, "onChange");
                        break;
                      default:
                        n = r;
                    }
                    Pr(l, n);
                    var f,
                      s = void 0,
                      a = l,
                      g = u,
                      d = n;
                    for (s in d)
                      d.hasOwnProperty(s) &&
                        ((f = d[s]),
                        "style" === s
                          ? Br(g, f)
                          : "dangerouslySetInnerHTML" === s
                          ? null != (f = f ? f.__html : void 0) && ze(g, f)
                          : "children" === s
                          ? "string" == typeof f
                            ? ("textarea" === a && "" === f) || He(g, f)
                            : "number" == typeof f && He(g, "" + f)
                          : "suppressContentEditableWarning" !== s &&
                            "suppressHydrationWarning" !== s &&
                            "autoFocus" !== s &&
                            (y.hasOwnProperty(s)
                              ? null != f && Lr(c, s)
                              : null != f && we(g, s, f, p)));
                    switch (l) {
                      case "input":
                        Te(u), xe(u, r, !1);
                        break;
                      case "textarea":
                        Te(u), De(u);
                        break;
                      case "option":
                        null != r.value &&
                          u.setAttribute("value", "" + Ee(r.value));
                        break;
                      case "select":
                        ((n = u).multiple = !!r.multiple),
                          null != (u = r.value)
                            ? Re(n, !!r.multiple, u, !1)
                            : null != r.defaultValue &&
                              Re(n, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" == typeof n.onClick && (u.onclick = Ur);
                    }
                    (o = Jr(i, o)) && Qa(t);
                  }
                  null !== t.ref && (t.effectTag |= 128);
                } else if (null === t.stateNode) throw Error(B(166));
                break;
              case 6:
                if (r && null != t.stateNode) ns(0, t, r.memoizedProps, o);
                else {
                  if ("string" != typeof o && null === t.stateNode)
                    throw Error(B(166));
                  (n = Bi(Ri.current)),
                    Bi(Ii.current),
                    Ra(t)
                      ? ((i = (o = t).stateNode),
                        (n = o.memoizedProps),
                        (i[on] = o),
                        (o = i.nodeValue !== n) && Qa(t))
                      : ((i = t),
                        ((o = (9 === n.nodeType
                          ? n
                          : n.ownerDocument
                        ).createTextNode(o))[on] = i),
                        (t.stateNode = o));
                }
                break;
              case 11:
                break;
              case 13:
                if ((io(Ui), (o = t.memoizedState), 0 != (64 & t.effectTag))) {
                  t.expirationTime = n;
                  break e;
                }
                (o = null !== o),
                  (i = !1),
                  null === r
                    ? void 0 !== t.memoizedProps.fallback && Ra(t)
                    : ((i = null !== (n = r.memoizedState)),
                      o ||
                        null === n ||
                        (null !== (n = r.child.sibling) &&
                          (null !== (u = t.firstEffect)
                            ? ((t.firstEffect = n).nextEffect = u)
                            : ((t.firstEffect = t.lastEffect = n).nextEffect = null),
                          (n.effectTag = 8)))),
                  o &&
                    !i &&
                    0 != (2 & t.mode) &&
                    ((null === r &&
                      !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                    0 != (1 & Ui.current)
                      ? Bs === Ts && (Bs = Os)
                      : ((Bs !== Ts && Bs !== Os) || (Bs = Cs),
                        0 !== Us && null !== Is && (Du(Is, Rs), Lu(Is, Us)))),
                  (o || i) && (t.effectTag |= 4);
                break;
              case 7:
              case 8:
              case 12:
                break;
              case 4:
                Pi();
                break;
              case 10:
                ei(t);
                break;
              case 9:
              case 14:
                break;
              case 17:
                fo(t.type) && go();
                break;
              case 19:
                if ((io(Ui), null === (o = t.memoizedState))) break;
                if (
                  ((i = 0 != (64 & t.effectTag)), null === (u = o.rendering))
                ) {
                  if (i) Za(o, !1);
                  else if (Bs !== Ts || (null !== r && 0 != (64 & r.effectTag)))
                    for (r = t.child; null !== r; ) {
                      if (null !== (u = Fi(r))) {
                        for (
                          t.effectTag |= 64,
                            Za(o, !1),
                            null !== (i = u.updateQueue) &&
                              ((t.updateQueue = i), (t.effectTag |= 4)),
                            null === o.lastEffect && (t.firstEffect = null),
                            t.lastEffect = o.lastEffect,
                            o = n,
                            i = t.child;
                          null !== i;

                        )
                          (r = o),
                            ((n = i).effectTag &= 2),
                            (n.nextEffect = null),
                            (n.firstEffect = null),
                            (n.lastEffect = null) === (u = n.alternate)
                              ? ((n.childExpirationTime = 0),
                                (n.expirationTime = r),
                                (n.child = null),
                                (n.memoizedProps = null),
                                (n.memoizedState = null),
                                (n.updateQueue = null),
                                (n.dependencies = null))
                              : ((n.childExpirationTime =
                                  u.childExpirationTime),
                                (n.expirationTime = u.expirationTime),
                                (n.child = u.child),
                                (n.memoizedProps = u.memoizedProps),
                                (n.memoizedState = u.memoizedState),
                                (n.updateQueue = u.updateQueue),
                                (r = u.dependencies),
                                (n.dependencies =
                                  null === r
                                    ? null
                                    : {
                                        expirationTime: r.expirationTime,
                                        firstContext: r.firstContext,
                                        responders: r.responders,
                                      })),
                            (i = i.sibling);
                        ao(Ui, (1 & Ui.current) | 2), (t = t.child);
                        break e;
                      }
                      r = r.sibling;
                    }
                } else {
                  if (!i)
                    if (null !== (r = Fi(u))) {
                      if (
                        ((t.effectTag |= 64),
                        (i = !0),
                        null !== (n = r.updateQueue) &&
                          ((t.updateQueue = n), (t.effectTag |= 4)),
                        Za(o, !0),
                        null === o.tail && "hidden" === o.tailMode)
                      ) {
                        null !== (t = t.lastEffect = o.lastEffect) &&
                          (t.nextEffect = null);
                        break;
                      }
                    } else
                      Do() > o.tailExpiration &&
                        1 < n &&
                        ((t.effectTag |= 64),
                        Za(o, !(i = !0)),
                        (t.expirationTime = t.childExpirationTime = n - 1));
                  o.isBackwards
                    ? ((u.sibling = t.child), (t.child = u))
                    : (null !== (n = o.last) ? (n.sibling = u) : (t.child = u),
                      (o.last = u));
                }
                if (null === o.tail) break;
                0 === o.tailExpiration && (o.tailExpiration = Do() + 500),
                  (n = o.tail),
                  (o.rendering = n),
                  (o.tail = n.sibling),
                  (o.lastEffect = t.lastEffect),
                  (n.sibling = null),
                  (o = Ui.current),
                  ao(Ui, (o = i ? (1 & o) | 2 : 1 & o)),
                  (t = n);
                break e;
              case 20:
              case 21:
                break;
              default:
                throw Error(B(156, t.tag));
            }
            t = null;
          }
          if (((o = Ms), 1 === Rs || 1 !== o.childExpirationTime)) {
            for (i = 0, n = o.child; null !== n; )
              (i = i < (r = n.expirationTime) ? r : i) <
                (u = n.childExpirationTime) && (i = u),
                (n = n.sibling);
            o.childExpirationTime = i;
          }
          if (null !== t) return t;
          null !== e &&
            0 == (2048 & e.effectTag) &&
            (null === e.firstEffect && (e.firstEffect = Ms.firstEffect),
            null !== Ms.lastEffect &&
              (null !== e.lastEffect &&
                (e.lastEffect.nextEffect = Ms.firstEffect),
              (e.lastEffect = Ms.lastEffect)),
            1 < Ms.effectTag &&
              (null !== e.lastEffect
                ? (e.lastEffect.nextEffect = Ms)
                : (e.firstEffect = Ms),
              (e.lastEffect = Ms)));
        } else {
          if (
            null !==
            (t = (function (e) {
              switch (e.tag) {
                case 1:
                  fo(e.type) && go();
                  var t = e.effectTag;
                  return 4096 & t
                    ? ((e.effectTag = (-4097 & t) | 64), e)
                    : null;
                case 3:
                  if ((Pi(), ho(), 0 != (64 & (t = e.effectTag))))
                    throw Error(B(285));
                  return (e.effectTag = (-4097 & t) | 64), e;
                case 5:
                  return Li(e), null;
                case 13:
                  return (
                    io(Ui),
                    4096 & (t = e.effectTag)
                      ? ((e.effectTag = (-4097 & t) | 64), e)
                      : null
                  );
                case 19:
                  return io(Ui), null;
                case 4:
                  return Pi(), null;
                case 10:
                  return ei(e), null;
                default:
                  return null;
              }
            })(Ms))
          )
            return (t.effectTag &= 2047), t;
          null !== e &&
            ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
        }
        if (null !== (t = Ms.sibling)) return t;
      } while (null !== (Ms = e));
      return Bs === Ts && (Bs = ks), null;
    }
    function bu(e) {
      var t = e.expirationTime;
      return (e = e.childExpirationTime) < t ? t : e;
    }
    function mu(e) {
      var t = Lo();
      return (
        Fo(
          99,
          function (e, t) {
            if ((_u(), (xs & (ws | Ss)) !== vs)) throw Error(B(327));
            var r = e.finishedWork,
              n = e.finishedExpirationTime;
            if (null === r) return null;
            if (
              ((e.finishedWork = null),
              (e.finishedExpirationTime = 0),
              r === e.current)
            )
              throw Error(B(177));
            (e.callbackNode = null),
              (e.callbackExpirationTime = 0),
              (e.callbackPriority = 90),
              (e.nextKnownPendingLevel = 0);
            var o,
              i = bu(r);
            if (
              ((e.firstPendingTime = i),
              n <= e.lastSuspendedTime
                ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0)
                : n <= e.firstSuspendedTime && (e.firstSuspendedTime = n - 1),
              n <= e.lastPingedTime && (e.lastPingedTime = 0),
              n <= e.lastExpiredTime && (e.lastExpiredTime = 0),
              e === Is && ((Ms = Is = null), (Rs = 0)),
              (i =
                1 < r.effectTag
                  ? null !== r.lastEffect
                    ? ((r.lastEffect.nextEffect = r), r.firstEffect)
                    : r
                  : r.firstEffect),
              null !== i)
            ) {
              var a = xs;
              (xs |= Ss), (_s.current = null), (Yr = Er);
              var s = zr();
              if (Hr(s)) {
                if ("selectionStart" in s)
                  var u = { start: s.selectionStart, end: s.selectionEnd };
                else
                  e: {
                    var l =
                      (u = ((u = s.ownerDocument) && u.defaultView) || window)
                        .getSelection && u.getSelection();
                    if (l && 0 !== l.rangeCount) {
                      u = l.anchorNode;
                      var c = l.anchorOffset,
                        p = l.focusNode;
                      l = l.focusOffset;
                      try {
                        u.nodeType, p.nodeType;
                      } catch (e) {
                        u = null;
                        break e;
                      }
                      var f = 0,
                        g = -1,
                        d = -1,
                        h = 0,
                        y = 0,
                        b = s,
                        m = null;
                      t: for (;;) {
                        for (
                          ;
                          b !== u ||
                            (0 !== c && 3 !== b.nodeType) ||
                            (g = f + c),
                            b !== p ||
                              (0 !== l && 3 !== b.nodeType) ||
                              (d = f + l),
                            3 === b.nodeType && (f += b.nodeValue.length),
                            null !== (o = b.firstChild);

                        )
                          (m = b), (b = o);
                        for (;;) {
                          if (b === s) break t;
                          if (
                            (m === u && ++h === c && (g = f),
                            m === p && ++y === l && (d = f),
                            null !== (o = b.nextSibling))
                          )
                            break;
                          m = (b = m).parentNode;
                        }
                        b = o;
                      }
                      u = -1 === g || -1 === d ? null : { start: g, end: d };
                    } else u = null;
                  }
                u = u || { start: 0, end: 0 };
              } else u = null;
              (Er = !(Xr = { focusedElem: s, selectionRange: u })), (zs = i);
              do {
                try {
                  !(function () {
                    for (; null !== zs; ) {
                      var e = zs.effectTag;
                      0 != (256 & e) &&
                        (function (e, t) {
                          switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ss(2, 0, t);
                              break;
                            case 1:
                              var r, n;
                              256 & t.effectTag &&
                                null !== e &&
                                ((r = e.memoizedProps),
                                (n = e.memoizedState),
                                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                                  t.elementType === t.type ? r : Ko(t.type, r),
                                  n
                                )),
                                (e.__reactInternalSnapshotBeforeUpdate = t));
                              break;
                            case 3:
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                              break;
                            default:
                              throw Error(B(163));
                          }
                        })(zs.alternate, zs),
                        0 == (512 & e) ||
                          Ks ||
                          ((Ks = !0),
                          Wo(97, function () {
                            return _u(), null;
                          })),
                        (zs = zs.nextEffect);
                    }
                  })();
                } catch (e) {
                  if (null === zs) throw Error(B(330));
                  wu(zs, e), (zs = zs.nextEffect);
                }
              } while (null !== zs);
              zs = i;
              do {
                try {
                  for (s = e, u = t; null !== zs; ) {
                    var _,
                      v,
                      E = zs.effectTag;
                    switch (
                      (16 & E && He(zs.stateNode, ""),
                      128 & E &&
                        (null === (_ = zs.alternate) ||
                          (null !== (v = _.ref) &&
                            ("function" == typeof v
                              ? v(null)
                              : (v.current = null)))),
                      1038 & E)
                    ) {
                      case 2:
                        cs(zs), (zs.effectTag &= -3);
                        break;
                      case 6:
                        cs(zs), (zs.effectTag &= -3), fs(zs.alternate, zs);
                        break;
                      case 1024:
                        zs.effectTag &= -1025;
                        break;
                      case 1028:
                        (zs.effectTag &= -1025), fs(zs.alternate, zs);
                        break;
                      case 4:
                        fs(zs.alternate, zs);
                        break;
                      case 8:
                        ps(s, (c = zs), u),
                          (function e(t) {
                            var r = t.alternate;
                            (t.return = null),
                              (t.child = null),
                              (t.memoizedState = null),
                              (t.updateQueue = null),
                              (t.dependencies = null),
                              (t.alternate = null),
                              (t.firstEffect = null),
                              (t.lastEffect = null),
                              (t.pendingProps = null),
                              (t.memoizedProps = null) !== r && e(r);
                          })(c);
                    }
                    zs = zs.nextEffect;
                  }
                } catch (e) {
                  if (null === zs) throw Error(B(330));
                  wu(zs, e), (zs = zs.nextEffect);
                }
              } while (null !== zs);
              if (
                ((v = Xr),
                (_ = zr()),
                (E = v.focusedElem),
                (u = v.selectionRange),
                _ !== E &&
                  E &&
                  E.ownerDocument &&
                  (function e(t, r) {
                    return (
                      !(!t || !r) &&
                      (t === r ||
                        ((!t || 3 !== t.nodeType) &&
                          (r && 3 === r.nodeType
                            ? e(t, r.parentNode)
                            : "contains" in t
                            ? t.contains(r)
                            : !!t.compareDocumentPosition &&
                              !!(16 & t.compareDocumentPosition(r)))))
                    );
                  })(E.ownerDocument.documentElement, E))
              ) {
                null !== u &&
                  Hr(E) &&
                  ((_ = u.start),
                  void 0 === (v = u.end) && (v = _),
                  "selectionStart" in E
                    ? ((E.selectionStart = _),
                      (E.selectionEnd = Math.min(v, E.value.length)))
                    : (v =
                        ((_ = E.ownerDocument || document) && _.defaultView) ||
                        window).getSelection &&
                      ((v = v.getSelection()),
                      (c = E.textContent.length),
                      (s = Math.min(u.start, c)),
                      (u = void 0 === u.end ? s : Math.min(u.end, c)),
                      !v.extend && u < s && ((c = u), (u = s), (s = c)),
                      (c = Vr(E, s)),
                      (p = Vr(E, u)),
                      c &&
                        p &&
                        (1 !== v.rangeCount ||
                          v.anchorNode !== c.node ||
                          v.anchorOffset !== c.offset ||
                          v.focusNode !== p.node ||
                          v.focusOffset !== p.offset) &&
                        ((_ = _.createRange()).setStart(c.node, c.offset),
                        v.removeAllRanges(),
                        u < s
                          ? (v.addRange(_), v.extend(p.node, p.offset))
                          : (_.setEnd(p.node, p.offset), v.addRange(_))))),
                  (_ = []);
                for (v = E; (v = v.parentNode); )
                  1 === v.nodeType &&
                    _.push({
                      element: v,
                      left: v.scrollLeft,
                      top: v.scrollTop,
                    });
                for (
                  "function" == typeof E.focus && E.focus(), E = 0;
                  E < _.length;
                  E++
                )
                  ((v = _[E]).element.scrollLeft = v.left),
                    (v.element.scrollTop = v.top);
              }
              (Er = !!Yr), (Yr = Xr = null), (e.current = r), (zs = i);
              do {
                try {
                  for (E = n; null !== zs; ) {
                    var w,
                      S,
                      T = zs.effectTag;
                    if (36 & T) {
                      var A,
                        j,
                        O,
                        C = zs.alternate;
                      switch (((v = E), (_ = zs).tag)) {
                        case 0:
                        case 11:
                        case 15:
                          ss(16, 32, _);
                          break;
                        case 1:
                          var k,
                            x = _.stateNode;
                          4 & _.effectTag &&
                            (null === C
                              ? x.componentDidMount()
                              : ((k =
                                  _.elementType === _.type
                                    ? C.memoizedProps
                                    : Ko(_.type, C.memoizedProps)),
                                x.componentDidUpdate(
                                  k,
                                  C.memoizedState,
                                  x.__reactInternalSnapshotBeforeUpdate
                                )));
                          var I = _.updateQueue;
                          null !== I && di(0, I, x);
                          break;
                        case 3:
                          var M = _.updateQueue;
                          if (null !== M) {
                            if ((s = null) !== _.child)
                              switch (_.child.tag) {
                                case 5:
                                case 1:
                                  s = _.child.stateNode;
                              }
                            di(0, M, s);
                          }
                          break;
                        case 5:
                          var R = _.stateNode;
                          null === C &&
                            4 & _.effectTag &&
                            Jr(_.type, _.memoizedProps) &&
                            R.focus();
                          break;
                        case 6:
                        case 4:
                        case 12:
                          break;
                        case 13:
                          null !== _.memoizedState ||
                            (null !== (A = _.alternate) &&
                              (null === (j = A.memoizedState) ||
                                (null !== (O = j.dehydrated) && At(O))));
                          break;
                        case 19:
                        case 17:
                        case 20:
                        case 21:
                          break;
                        default:
                          throw Error(B(163));
                      }
                    }
                    128 & T &&
                      ((_ = void 0),
                      null !== (w = zs.ref) &&
                        ((S = zs.stateNode),
                        zs.tag,
                        (_ = S),
                        "function" == typeof w ? w(_) : (w.current = _))),
                      (zs = zs.nextEffect);
                  }
                } catch (e) {
                  if (null === zs) throw Error(B(330));
                  wu(zs, e), (zs = zs.nextEffect);
                }
              } while (null !== zs);
              (zs = null), Mo(), (xs = a);
            } else e.current = r;
            if (Ks) (Ks = !1), (qs = e), (Ys = t);
            else
              for (zs = i; null !== zs; )
                (t = zs.nextEffect), (zs.nextEffect = null), (zs = t);
            if (
              (0 === (t = e.firstPendingTime) && (Gs = null),
              1073741823 === t
                ? e === Qs
                  ? Js++
                  : ((Js = 0), (Qs = e))
                : (Js = 0),
              "function" == typeof Au && Au(r.stateNode, n),
              iu(e),
              Hs)
            )
              throw ((Hs = !1), (e = $s), ($s = null), e);
            return (xs & Es) !== vs || zo(), null;
          }.bind(null, e, t)
        ),
        null
      );
    }
    function _u() {
      if (90 !== Ys) {
        var e = 97 < Ys ? 97 : Ys;
        return (Ys = 90), Fo(e, vu);
      }
    }
    function vu() {
      if (null === qs) return !1;
      var t = qs;
      if (((qs = null), (xs & (ws | Ss)) !== vs)) throw Error(B(331));
      var e = xs;
      for (xs |= Ss, t = t.current.firstEffect; null !== t; ) {
        try {
          var r = t;
          if (0 != (512 & r.effectTag))
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                ss(128, 0, r), ss(0, 64, r);
            }
        } catch (e) {
          if (null === t) throw Error(B(330));
          wu(t, e);
        }
        (r = t.nextEffect), (t.nextEffect = null), (t = r);
      }
      return (xs = e), zo(), !0;
    }
    function Eu(e, t, r) {
      li(e, (t = hs(e, (t = es(r, t)), 1073741823))),
        null !== (e = nu(e, 1073741823)) && iu(e);
    }
    function wu(e, t) {
      if (3 === e.tag) Eu(e, e, t);
      else
        for (var r = e.return; null !== r; ) {
          if (3 === r.tag) {
            Eu(r, e, t);
            break;
          }
          if (1 === r.tag) {
            var n = r.stateNode;
            if (
              "function" == typeof r.type.getDerivedStateFromError ||
              ("function" == typeof n.componentDidCatch &&
                (null === Gs || !Gs.has(n)))
            ) {
              li(r, (e = ys(r, (e = es(t, e)), 1073741823))),
                null !== (r = nu(r, 1073741823)) && iu(r);
              break;
            }
          }
          r = r.return;
        }
    }
    function Su(e, t, r) {
      var n = e.pingCache;
      null !== n && n.delete(t),
        Is === e && Rs === r
          ? Bs === Cs || (Bs === Os && 1073741823 === Ps && Do() - Ws < Vs)
            ? cu(e, Rs)
            : (Fs = !0)
          : Pu(e, r) &&
            ((0 !== (t = e.lastPingedTime) && t < r) ||
              ((e.lastPingedTime = r),
              e.finishedExpirationTime === r &&
                ((e.finishedExpirationTime = 0), (e.finishedWork = null)),
              iu(e)));
    }
    var Tu = function (e, t, r) {
        var n,
          o,
          i = t.expirationTime;
        if (null !== e) {
          var a = t.pendingProps;
          if (e.memoizedProps !== a || lo.current) Pa = !0;
          else {
            if (i < r) {
              switch (((Pa = !1), t.tag)) {
                case 3:
                  $a(t), Ba();
                  break;
                case 5:
                  if ((Di(t), 4 & t.mode && 1 !== r && a.hidden))
                    return (t.expirationTime = t.childExpirationTime = 1), null;
                  break;
                case 1:
                  fo(t.type) && mo(t);
                  break;
                case 4:
                  Ni(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  Zo(t, t.memoizedProps.value);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 !== (i = t.child.childExpirationTime) && r <= i
                      ? Ka(e, t, r)
                      : (ao(Ui, 1 & Ui.current),
                        null !== (t = Ja(e, t, r)) ? t.sibling : null);
                  ao(Ui, 1 & Ui.current);
                  break;
                case 19:
                  if (
                    ((i = t.childExpirationTime >= r), 0 != (64 & e.effectTag))
                  ) {
                    if (i) return Xa(e, t, r);
                    t.effectTag |= 64;
                  }
                  if (
                    (null !== (a = t.memoizedState) &&
                      ((a.rendering = null), (a.tail = null)),
                    ao(Ui, Ui.current),
                    !i)
                  )
                    return null;
              }
              return Ja(e, t, r);
            }
            Pa = !1;
          }
        } else Pa = !1;
        switch (((t.expirationTime = 0), t.tag)) {
          case 2:
            i = t.type;
            return (
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (e = t.pendingProps),
              (a = po(t, uo.current)),
              ri(t, r),
              (a = ia(null, t, i, e, a, r)),
              (t.effectTag |= 1),
              (t =
                "object" == typeof a &&
                null !== a &&
                "function" == typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    aa(),
                    fo(i) ? ((s = !0), mo(t)) : (s = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    "function" == typeof (c = i.getDerivedStateFromProps) &&
                      mi(t, 0, c, e),
                    (a.updater = _i),
                    Si(((t.stateNode = a)._reactInternalFiber = t), i, e, r),
                    Ha(null, t, i, !0, s, r))
                  : ((t.tag = 0), Da(null, t, a, r), t.child))
            );
          case 16:
            if (
              ((a = t.elementType),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (e = t.pendingProps),
              -1 === (n = a)._status &&
                ((n._status = 0),
                (o = (o = n._ctor)()),
                (n._result = o).then(
                  function (e) {
                    0 === n._status &&
                      ((e = e.default), (n._status = 1), (n._result = e));
                  },
                  function (e) {
                    0 === n._status && ((n._status = 2), (n._result = e));
                  }
                )),
              1 !== a._status)
            )
              throw a._result;
            switch (
              ((a = a._result),
              (t.type = a),
              (s = t.tag = (function (e) {
                if ("function" == typeof e) return ku(e) ? 1 : 0;
                if (null != e) {
                  if ((e = e.$$typeof) === z) return 11;
                  if (e === G) return 14;
                }
                return 2;
              })(a)),
              (e = Ko(a, e)),
              s)
            ) {
              case 0:
                t = Va(null, t, a, e, r);
                break;
              case 1:
                t = za(null, t, a, e, r);
                break;
              case 11:
                t = La(null, t, a, e, r);
                break;
              case 14:
                t = Ua(null, t, a, Ko(a.type, e), i, r);
                break;
              default:
                throw Error(B(306, a, ""));
            }
            return t;
          case 0:
            return (
              (i = t.type),
              (a = t.pendingProps),
              Va(e, t, i, (a = t.elementType === i ? a : Ko(i, a)), r)
            );
          case 1:
            return (
              (i = t.type),
              (a = t.pendingProps),
              za(e, t, i, (a = t.elementType === i ? a : Ko(i, a)), r)
            );
          case 3:
            if (($a(t), null === (i = t.updateQueue))) throw Error(B(282));
            if (
              ((a = null !== (a = t.memoizedState) ? a.element : null),
              gi(t, i, t.pendingProps, null, r),
              (i = t.memoizedState.element) === a)
            )
              Ba(), (t = Ja(e, t, r));
            else {
              if (
                ((a = t.stateNode.hydrate) &&
                  ((Oa = tn(t.stateNode.containerInfo.firstChild)),
                  (ja = t),
                  (a = Ca = !0)),
                a)
              )
                for (r = ki(t, null, i, r), t.child = r; r; )
                  (r.effectTag = (-3 & r.effectTag) | 1024), (r = r.sibling);
              else Da(e, t, i, r), Ba();
              t = t.child;
            }
            return t;
          case 5:
            return (
              Di(t),
              null === e && Ia(t),
              (i = t.type),
              (a = t.pendingProps),
              (s = null !== e ? e.memoizedProps : null),
              (c = a.children),
              Qr(i, a)
                ? (c = null)
                : null !== s && Qr(i, s) && (t.effectTag |= 16),
              Wa(e, t),
              (t =
                4 & t.mode && 1 !== r && a.hidden
                  ? ((t.expirationTime = t.childExpirationTime = 1), null)
                  : (Da(e, t, c, r), t.child))
            );
          case 6:
            return null === e && Ia(t), null;
          case 13:
            return Ka(e, t, r);
          case 4:
            return (
              Ni(t, t.stateNode.containerInfo),
              (i = t.pendingProps),
              null === e ? (t.child = Ci(t, null, i, r)) : Da(e, t, i, r),
              t.child
            );
          case 11:
            return (
              (i = t.type),
              (a = t.pendingProps),
              La(e, t, i, (a = t.elementType === i ? a : Ko(i, a)), r)
            );
          case 7:
            return Da(e, t, t.pendingProps, r), t.child;
          case 8:
          case 12:
            return Da(e, t, t.pendingProps.children, r), t.child;
          case 10:
            e: {
              if (
                ((i = t.type._context),
                (a = t.pendingProps),
                (c = t.memoizedProps),
                Zo(t, (s = a.value)),
                null !== c)
              ) {
                var s,
                  u = c.value;
                if (
                  0 ===
                  (s = Kn(u, s)
                    ? 0
                    : 0 |
                      ("function" == typeof i._calculateChangedBits
                        ? i._calculateChangedBits(u, s)
                        : 1073741823))
                ) {
                  if (c.children === a.children && !lo.current) {
                    t = Ja(e, t, r);
                    break e;
                  }
                } else
                  for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                    var l = u.dependencies;
                    if (null !== l)
                      for (var c = u.child, p = l.firstContext; null !== p; ) {
                        if (p.context === i && 0 != (p.observedBits & s)) {
                          1 === u.tag &&
                            (((p = si(r, null)).tag = 2), li(u, p)),
                            u.expirationTime < r && (u.expirationTime = r),
                            null !== (p = u.alternate) &&
                              p.expirationTime < r &&
                              (p.expirationTime = r),
                            ti(u.return, r),
                            l.expirationTime < r && (l.expirationTime = r);
                          break;
                        }
                        p = p.next;
                      }
                    else c = 10 === u.tag && u.type === t.type ? null : u.child;
                    if (null !== c) c.return = u;
                    else
                      for (c = u; null !== c; ) {
                        if (c === t) {
                          c = null;
                          break;
                        }
                        if (null !== (u = c.sibling)) {
                          (u.return = c.return), (c = u);
                          break;
                        }
                        c = c.return;
                      }
                    u = c;
                  }
              }
              Da(e, t, a.children, r), (t = t.child);
            }
            return t;
          case 9:
            return (
              (a = t.type),
              (i = (s = t.pendingProps).children),
              ri(t, r),
              (i = i((a = ni(a, s.unstable_observedBits)))),
              (t.effectTag |= 1),
              Da(e, t, i, r),
              t.child
            );
          case 14:
            return (
              (s = Ko((a = t.type), t.pendingProps)),
              Ua(e, t, a, (s = Ko(a.type, s)), i, r)
            );
          case 15:
            return Fa(e, t, t.type, t.pendingProps, i, r);
          case 17:
            return (
              (i = t.type),
              (a = t.pendingProps),
              (a = t.elementType === i ? a : Ko(i, a)),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (t.tag = 1),
              fo(i) ? ((e = !0), mo(t)) : (e = !1),
              ri(t, r),
              Ei(t, i, a),
              Si(t, i, a, r),
              Ha(null, t, i, !0, e, r)
            );
          case 19:
            return Xa(e, t, r);
        }
        throw Error(B(156, t.tag));
      },
      Au = null,
      ju = null;
    function Ou(e, t, r, n) {
      (this.tag = e),
        (this.key = r),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = n),
        (this.effectTag = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.childExpirationTime = this.expirationTime = 0),
        (this.alternate = null);
    }
    function Cu(e, t, r, n) {
      return new Ou(e, t, r, n);
    }
    function ku(e) {
      return (e = e.prototype) && e.isReactComponent;
    }
    function xu(e, t) {
      var r = e.alternate;
      return (
        null === r
          ? (((r = Cu(e.tag, t, e.key, e.mode)).elementType = e.elementType),
            (r.type = e.type),
            (r.stateNode = e.stateNode),
            ((r.alternate = e).alternate = r))
          : ((r.pendingProps = t),
            (r.effectTag = 0),
            (r.nextEffect = null),
            (r.firstEffect = null),
            (r.lastEffect = null)),
        (r.childExpirationTime = e.childExpirationTime),
        (r.expirationTime = e.expirationTime),
        (r.child = e.child),
        (r.memoizedProps = e.memoizedProps),
        (r.memoizedState = e.memoizedState),
        (r.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (r.dependencies =
          null === t
            ? null
            : {
                expirationTime: t.expirationTime,
                firstContext: t.firstContext,
                responders: t.responders,
              }),
        (r.sibling = e.sibling),
        (r.index = e.index),
        (r.ref = e.ref),
        r
      );
    }
    function Iu(e, t, r, n, o, i) {
      var a = 2;
      if ("function" == typeof (n = e)) ku(e) && (a = 1);
      else if ("string" == typeof e) a = 5;
      else
        e: switch (e) {
          case D:
            return Mu(r.children, o, i, t);
          case V:
            (a = 8), (o |= 7);
            break;
          case L:
            (a = 8), (o |= 1);
            break;
          case U:
            return (
              ((e = Cu(12, r, t, 8 | o)).elementType = U),
              (e.type = U),
              (e.expirationTime = i),
              e
            );
          case H:
            return (
              ((e = Cu(13, r, t, o)).type = H),
              (e.elementType = H),
              (e.expirationTime = i),
              e
            );
          case $:
            return (
              ((e = Cu(19, r, t, o)).elementType = $), (e.expirationTime = i), e
            );
          default:
            if ("object" == typeof e && null !== e)
              switch (e.$$typeof) {
                case F:
                  a = 10;
                  break e;
                case W:
                  a = 9;
                  break e;
                case z:
                  a = 11;
                  break e;
                case G:
                  a = 14;
                  break e;
                case K:
                  (a = 16), (n = null);
                  break e;
              }
            throw Error(B(130, null == e ? e : typeof e, ""));
        }
      return (
        ((t = Cu(a, r, t, o)).elementType = e),
        (t.type = n),
        (t.expirationTime = i),
        t
      );
    }
    function Mu(e, t, r, n) {
      return ((e = Cu(7, e, n, t)).expirationTime = r), e;
    }
    function Ru(e, t, r) {
      return ((e = Cu(6, e, null, t)).expirationTime = r), e;
    }
    function Bu(e, t, r) {
      return (
        ((t = Cu(
          4,
          null !== e.children ? e.children : [],
          e.key,
          t
        )).expirationTime = r),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function Nu(e, t, r) {
      (this.tag = t),
        (this.current = null),
        (this.containerInfo = e),
        (this.pingCache = this.pendingChildren = null),
        (this.finishedExpirationTime = 0),
        (this.finishedWork = null),
        (this.timeoutHandle = -1),
        (this.pendingContext = this.context = null),
        (this.hydrate = r),
        (this.callbackNode = null),
        (this.callbackPriority = 90),
        (this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0);
    }
    function Pu(e, t) {
      var r = e.firstSuspendedTime;
      return (e = e.lastSuspendedTime), 0 !== r && t <= r && e <= t;
    }
    function Du(e, t) {
      var r = e.firstSuspendedTime,
        n = e.lastSuspendedTime;
      r < t && (e.firstSuspendedTime = t),
        (t < n || 0 === r) && (e.lastSuspendedTime = t),
        t <= e.lastPingedTime && (e.lastPingedTime = 0),
        t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
    }
    function Lu(e, t) {
      t > e.firstPendingTime && (e.firstPendingTime = t);
      var r = e.firstSuspendedTime;
      0 !== r &&
        (r <= t
          ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0)
          : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
        t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
    }
    function Uu(e, t) {
      var r = e.lastExpiredTime;
      (0 === r || t < r) && (e.lastExpiredTime = t);
    }
    function Fu(e, t, r, n) {
      var o = t.current,
        i = eu(),
        a = yi.suspense,
        i = tu(i, o, a);
      e: if (r) {
        t: {
          if (tt((r = r._reactInternalFiber)) !== r || 1 !== r.tag)
            throw Error(B(170));
          var s = r;
          do {
            switch (s.tag) {
              case 3:
                s = s.stateNode.context;
                break t;
              case 1:
                if (fo(s.type)) {
                  s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
          } while (null !== (s = s.return));
          throw Error(B(171));
        }
        if (1 === r.tag) {
          var u = r.type;
          if (fo(u)) {
            r = bo(r, u, s);
            break e;
          }
        }
        r = s;
      } else r = so;
      return (
        null === t.context ? (t.context = r) : (t.pendingContext = r),
        ((t = si(i, a)).payload = { element: e }),
        null !== (n = void 0 === n ? null : n) && (t.callback = n),
        li(o, t),
        ru(o, i),
        i
      );
    }
    function Wu(e) {
      return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
    }
    function Vu(e, t) {
      null !== (e = e.memoizedState) &&
        null !== e.dehydrated &&
        e.retryTime < t &&
        (e.retryTime = t);
    }
    function zu(e, t) {
      Vu(e, t), (e = e.alternate) && Vu(e, t);
    }
    function Hu(e, t, r) {
      var n,
        o,
        i = new Nu(e, t, (r = null != r && !0 === r.hydrate)),
        a = Cu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
      ((i.current = a).stateNode = i),
        (e[sn] = i.current),
        r &&
          0 !== t &&
          ((n = 9 === e.nodeType ? e : e.ownerDocument),
          (o = kr(n)),
          yt.forEach(function (e) {
            xr(e, n, o);
          }),
          bt.forEach(function (e) {
            xr(e, n, o);
          })),
        (this._internalRoot = i);
    }
    function $u(e) {
      return (
        e &&
        (1 === e.nodeType ||
          9 === e.nodeType ||
          11 === e.nodeType ||
          (8 === e.nodeType && " react-mount-point-unstable " === e.nodeValue))
      );
    }
    function Gu(e, t, r, n, o) {
      var i,
        a,
        s,
        u = r._reactRootContainer;
      return (
        u
          ? ((s = u._internalRoot),
            "function" == typeof o &&
              ((i = o),
              (o = function () {
                var e = Wu(s);
                i.call(e);
              })),
            Fu(t, s, e, o))
          : ((s = (u = r._reactRootContainer = (function (e, t) {
              if (
                !(t = !t
                  ? !(
                      !(t = e
                        ? 9 === e.nodeType
                          ? e.documentElement
                          : e.firstChild
                        : null) ||
                      1 !== t.nodeType ||
                      !t.hasAttribute("data-reactroot")
                    )
                  : t)
              )
                for (var r; (r = e.lastChild); ) e.removeChild(r);
              return new Hu(e, 0, t ? { hydrate: !0 } : void 0);
            })(r, n))._internalRoot),
            "function" == typeof o &&
              ((a = o),
              (o = function () {
                var e = Wu(s);
                a.call(e);
              })),
            lu(function () {
              Fu(t, s, e, o);
            })),
        Wu(s)
      );
    }
    function Ku(e, t) {
      var r =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!$u(t)) throw Error(B(200));
      return (function (e, t, r, n) {
        return {
          $$typeof: P,
          key:
            null == (n = 3 < arguments.length && void 0 !== n ? n : null)
              ? null
              : "" + n,
          children: e,
          containerInfo: t,
          implementation: r,
        };
      })(e, t, null, r);
    }
    (it = function (e) {
      var t;
      13 === e.tag && (ru(e, (t = Go(eu(), 150, 100))), zu(e, t));
    }),
      (at = function (e) {
        var t;
        13 === e.tag && (eu(), ru(e, (t = $o++)), zu(e, t));
      }),
      (st = function (e) {
        var t;
        13 === e.tag && (ru(e, (t = tu((t = eu()), e, null))), zu(e, t));
      }),
      (Z = function (e, t, r) {
        switch (t) {
          case "input":
            if ((ke(e, r), (t = r.name), "radio" === r.type && null != t)) {
              for (r = e; r.parentNode; ) r = r.parentNode;
              for (
                r = r.querySelectorAll(
                  "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                ),
                  t = 0;
                t < r.length;
                t++
              ) {
                var n = r[t];
                if (n !== e && n.form === e.form) {
                  var o = pn(n);
                  if (!o) throw Error(B(90));
                  Ae(n), ke(n, o);
                }
              }
            }
            break;
          case "textarea":
            Pe(e, r);
            break;
          case "select":
            null != (t = r.value) && Re(e, !!r.multiple, t, !1);
        }
      }),
      (Hu.prototype.render = function (e, t) {
        Fu(e, this._internalRoot, null, void 0 === t ? null : t);
      }),
      (ae = function (e, t, r, n) {
        var o = xs;
        xs |= 4;
        try {
          return Fo(98, e.bind(null, t, r, n));
        } finally {
          (xs = o) === vs && zo();
        }
      }),
      (se = function () {
        var e;
        (xs & (1 | ws | Ss)) === vs &&
          (null !== Xs &&
            ((e = Xs),
            (Xs = null),
            e.forEach(function (e, t) {
              Uu(t, e), iu(t);
            }),
            zo()),
          _u());
      });
    var qu,
      ue = function (e, t) {
        var r = xs;
        xs |= 2;
        try {
          return e(t);
        } finally {
          (xs = r) === vs && zo();
        }
      },
      r = {
        createPortal: Ku,
        findDOMNode: function (e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = e._reactInternalFiber;
          if (void 0 !== t)
            return (e = null === (e = ot(t)) ? null : e.stateNode);
          if ("function" == typeof e.render) throw Error(B(188));
          throw Error(B(268, Object.keys(e)));
        },
        hydrate: function (e, t, r) {
          if (!$u(t)) throw Error(B(200));
          return Gu(null, e, t, !0, r);
        },
        render: function (e, t, r) {
          if (!$u(t)) throw Error(B(200));
          return Gu(null, e, t, !1, r);
        },
        unstable_renderSubtreeIntoContainer: function (e, t, r, n) {
          if (!$u(r)) throw Error(B(200));
          if (null == e || void 0 === e._reactInternalFiber) throw Error(B(38));
          return Gu(e, t, r, !1, n);
        },
        unmountComponentAtNode: function (e) {
          if (!$u(e)) throw Error(B(40));
          return (
            !!e._reactRootContainer &&
            (lu(function () {
              Gu(null, null, e, !1, function () {
                e._reactRootContainer = null;
              });
            }),
            !0)
          );
        },
        unstable_createPortal: function () {
          return Ku.apply(void 0, arguments);
        },
        unstable_batchedUpdates: (ie = uu),
        flushSync: function (e, t) {
          if ((xs & (ws | Ss)) !== vs) throw Error(B(187));
          var r = xs;
          xs |= 1;
          try {
            return Fo(99, e.bind(null, t));
          } finally {
            (xs = r), zo();
          }
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          Events: [
            ln,
            cn,
            pn,
            k.injectEventPluginsByName,
            g,
            Mt,
            function (e) {
              A(e, It);
            },
            ne,
            oe,
            Ar,
            C,
            _u,
            {
              current: !(Hu.prototype.unmount = function (e) {
                Fu(null, this._internalRoot, null, void 0 === e ? null : e);
              }),
            },
          ],
        },
      };
    (qu = (k = {
      findFiberByHostInstance: un,
      bundleType: 0,
      version: "16.11.0",
      rendererPackageName: "react-dom",
    }).findFiberByHostInstance),
      (function (e) {
        if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled || !t.supportsFiber) return;
        try {
          var r = t.inject(e);
          (Au = function (e) {
            try {
              t.onCommitFiberRoot(
                r,
                e,
                void 0,
                64 == (64 & e.current.effectTag)
              );
            } catch (e) {}
          }),
            (ju = function (e) {
              try {
                t.onCommitFiberUnmount(r, e);
              } catch (e) {}
            });
        } catch (e) {}
      })(
        h({}, k, {
          overrideHookState: null,
          overrideProps: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: I.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = ot(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance: function (e) {
            return qu ? qu(e) : null;
          },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
        })
      );
    e.exports = r.default || r;
  },
  zuR4: function (e, t, r) {
    "use strict";
    var n = r("xTJ+"),
      o = r("HSsa"),
      i = r("CgaS"),
      a = r("SntB");
    function s(e) {
      var t = new i(e),
        e = o(i.prototype.request, t);
      return n.extend(e, i.prototype, t), n.extend(e, t), e;
    }
    var u = s(r("JEQr"));
    (u.Axios = i),
      (u.create = function (e) {
        return s(a(u.defaults, e));
      }),
      (u.Cancel = r("endd")),
      (u.CancelToken = r("jfS+")),
      (u.isCancel = r("Lmem")),
      (u.all = function (e) {
        return Promise.all(e);
      }),
      (u.spread = r("DfZB")),
      (u.isAxiosError = r("XwJu")),
      (e.exports = u),
      (e.exports.default = u);
  },
});
//# sourceMappingURL=friends.js.map
