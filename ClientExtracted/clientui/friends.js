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
  "+gJN": function (e, t, r) {
    "use strict";
    r("ldtI");
  },
  "+wdc": function (P, s, D) {
    "use strict";
    /** @license React v0.17.0
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var i, l, u, t, r, n, e, o, a, c, p, f, g, d, h, b, m, y, _, v;
    function w(e, t) {
      var r = e.length;
      for (e.push(t); ; ) {
        var n = Math.floor((r - 1) / 2),
          o = e[n];
        if (!(void 0 !== o && 0 < T(o, t))) break;
        (e[n] = t), (e[r] = o), (r = n);
      }
    }
    function S(e) {
      return void 0 === (e = e[0]) ? null : e;
    }
    function E(e) {
      var t = e[0];
      if (void 0 !== t) {
        var r = e.pop();
        if (r !== t) {
          e[0] = r;
          for (var n = 0, o = e.length; n < o; ) {
            var i = 2 * (n + 1) - 1,
              a = e[i],
              s = 1 + i,
              l = e[s];
            if (void 0 !== a && T(a, r) < 0)
              n =
                void 0 !== l && T(l, a) < 0
                  ? ((e[n] = l), (e[s] = r), s)
                  : ((e[n] = a), (e[i] = r), i);
            else {
              if (!(void 0 !== l && T(l, r) < 0)) break;
              (e[n] = l), (e[s] = r), (n = s);
            }
          }
        }
      }
    }
    function T(e, t) {
      var r = e.sortIndex - t.sortIndex;
      return 0 != r ? r : e.id - t.id;
    }
    Object.defineProperty(s, "__esModule", { value: !0 }),
      "undefined" == typeof window || "function" != typeof MessageChannel
        ? ((r = t = null),
          (n = function () {
            if (null !== t)
              try {
                var e = s.unstable_now();
                t(!0, e), (t = null);
              } catch (e) {
                throw (setTimeout(n, 0), e);
              }
          }),
          (e = Date.now()),
          (s.unstable_now = function () {
            return Date.now() - e;
          }),
          (i = function (e) {
            null !== t ? setTimeout(i, 0, e) : ((t = e), setTimeout(n, 0));
          }),
          (l = function (e, t) {
            r = setTimeout(e, t);
          }),
          (u = function () {
            clearTimeout(r);
          }),
          (y = function () {
            return !1;
          }),
          (_ = s.unstable_forceFrameRate = function () {}))
        : ((o = window.performance),
          (a = window.Date),
          (c = window.setTimeout),
          (p = window.clearTimeout),
          (N = window.cancelAnimationFrame),
          "undefined" != typeof console &&
            ("function" != typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
              ),
            "function" != typeof N &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
              )),
          "object" == typeof o && "function" == typeof o.now
            ? (s.unstable_now = function () {
                return o.now();
              })
            : ((f = a.now()),
              (s.unstable_now = function () {
                return a.now() - f;
              })),
          (g = !1),
          (d = null),
          (h = -1),
          (b = 5),
          (m = 0),
          (y = function () {
            return s.unstable_now() >= m;
          }),
          (_ = function () {}),
          (s.unstable_forceFrameRate = function (e) {
            e < 0 || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
                )
              : (b = 0 < e ? Math.floor(1e3 / e) : 33.33);
          }),
          (N = new MessageChannel()),
          (v = N.port2),
          (N.port1.onmessage = function () {
            if (null !== d) {
              var e = s.unstable_now();
              m = e + b;
              try {
                d(!0, e) ? v.postMessage(null) : ((g = !1), (d = null));
              } catch (e) {
                throw (v.postMessage(null), e);
              }
            } else g = !1;
          }),
          (i = function (e) {
            (d = e), g || ((g = !0), v.postMessage(null));
          }),
          (l = function (e, t) {
            h = c(function () {
              e(s.unstable_now());
            }, t);
          }),
          (u = function () {
            p(h), (h = -1);
          }));
    var j = [],
      A = [],
      U = 1,
      O = null,
      B = 3,
      C = !1,
      x = !1,
      M = !1;
    function I(e) {
      for (var t = S(A); null !== t; ) {
        if (null === t.callback) E(A);
        else {
          if (!(t.startTime <= e)) break;
          E(A), (t.sortIndex = t.expirationTime), w(j, t);
        }
        t = S(A);
      }
    }
    function k(e) {
      var t;
      (M = !1),
        I(e),
        x ||
          (null !== S(j)
            ? ((x = !0), i(R))
            : null !== (t = S(A)) && l(k, t.startTime - e));
    }
    function R(e, t) {
      (x = !1), M && ((M = !1), u()), (C = !0);
      var r = B;
      try {
        for (
          I(t), O = S(j);
          null !== O && (!(O.expirationTime > t) || (e && !y()));

        ) {
          var n,
            o = O.callback;
          null !== o
            ? ((O.callback = null),
              (B = O.priorityLevel),
              (n = o(O.expirationTime <= t)),
              (t = s.unstable_now()),
              "function" == typeof n ? (O.callback = n) : O === S(j) && E(j),
              I(t))
            : E(j),
            (O = S(j));
        }
        var i,
          a = null !== O || (null !== (i = S(A)) && l(k, i.startTime - t), !1);
        return a;
      } finally {
        (O = null), (B = r), (C = !1);
      }
    }
    function F(e) {
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
    var N = _;
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
        var r = B;
        B = e;
        try {
          return t();
        } finally {
          B = r;
        }
      }),
      (s.unstable_next = function (e) {
        switch (B) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = B;
        }
        var r = B;
        B = t;
        try {
          return e();
        } finally {
          B = r;
        }
      }),
      (s.unstable_scheduleCallback = function (e, t, r) {
        var n,
          o = s.unstable_now();
        return (
          "object" == typeof r && null !== r
            ? ((n = "number" == typeof (n = r.delay) && 0 < n ? o + n : o),
              (r = "number" == typeof r.timeout ? r.timeout : F(e)))
            : ((r = F(e)), (n = o)),
          (e = {
            id: U++,
            callback: t,
            priorityLevel: e,
            startTime: n,
            expirationTime: (r = n + r),
            sortIndex: -1,
          }),
          o < n
            ? ((e.sortIndex = n),
              w(A, e),
              null === S(j) && e === S(A) && (M ? u() : (M = !0), l(k, n - o)))
            : ((e.sortIndex = r), w(j, e), x || C || ((x = !0), i(R))),
          e
        );
      }),
      (s.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (s.unstable_wrapCallback = function (t) {
        var r = B;
        return function () {
          var e = B;
          B = r;
          try {
            return t.apply(this, arguments);
          } finally {
            B = e;
          }
        };
      }),
      (s.unstable_getCurrentPriorityLevel = function () {
        return B;
      }),
      (s.unstable_shouldYield = function () {
        var e = s.unstable_now(),
          t = (I(e), S(j));
        return (
          (t !== O &&
            null !== O &&
            null !== t &&
            null !== t.callback &&
            t.startTime <= e &&
            t.expirationTime < O.expirationTime) ||
          y()
        );
      }),
      (s.unstable_requestPaint = N),
      (s.unstable_continueExecution = function () {
        x || C || ((x = !0), i(R));
      }),
      (s.unstable_pauseExecution = function () {}),
      (s.unstable_getFirstCallbackNode = function () {
        return S(j);
      }),
      (s.unstable_Profiling = null);
  },
  "+xJ3": function (e, t) {},
  "/6ik": function (e, t, r) {
    "use strict";
  },
  0: function (e, t, r) {
    e.exports = r("Sj0R");
  },
  "0D2c": function (e, t, r) {
    "use strict";
  },
  "0N1H": function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return n;
    });
    function n(e, t = 0) {
      switch (e) {
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
  },
  "2SVd": function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  },
  "2vnA": function (e, mr, yr) {
    "use strict";
    !function (P, D) {
      yr.d(mr, "a", function () {
        return u;
      }),
        yr.d(mr, "b", function () {
          return er;
        }),
        yr.d(mr, "c", function () {
          return it;
        }),
        yr.d(mr, "d", function () {
          return We;
        }),
        yr.d(mr, "e", function () {
          return Re;
        }),
        yr.d(mr, "f", function () {
          return ke;
        }),
        yr.d(mr, "g", function () {
          return Le;
        }),
        yr.d(mr, "h", function () {
          return cr;
        }),
        yr.d(mr, "i", function () {
          return Oe;
        }),
        yr.d(mr, "j", function () {
          return Fe;
        }),
        yr.d(mr, "k", function () {
          return y;
        }),
        yr.d(mr, "l", function () {
          return mt;
        }),
        yr.d(mr, "m", function () {
          return Ee;
        }),
        yr.d(mr, "n", function () {
          return Et;
        }),
        yr.d(mr, "o", function () {
          return ee;
        }),
        yr.d(mr, "p", function () {
          return Lt;
        }),
        yr.d(mr, "q", function () {
          return Tt;
        }),
        yr.d(mr, "r", function () {
          return Mt;
        }),
        yr.d(mr, "s", function () {
          return N;
        }),
        yr.d(mr, "t", function () {
          return Ot;
        }),
        yr.d(mr, "u", function () {
          return ht;
        }),
        yr.d(mr, "v", function () {
          return Rt;
        }),
        yr.d(mr, "w", function () {
          return Nt;
        }),
        yr.d(mr, "x", function () {
          return B;
        }),
        yr.d(mr, "y", function () {
          return x;
        }),
        yr.d(mr, "z", function () {
          return R;
        }),
        yr.d(mr, "A", function () {
          return Ut;
        }),
        yr.d(mr, "B", function () {
          return n;
        }),
        yr.d(mr, "C", function () {
          return Wt;
        }),
        yr.d(mr, "D", function () {
          return wt;
        }),
        yr.d(mr, "E", function () {
          return vt;
        }),
        yr.d(mr, "F", function () {
          return dt;
        }),
        yr.d(mr, "G", function () {
          return pt;
        }),
        yr.d(mr, "H", function () {
          return _;
        }),
        yr.d(mr, "I", function () {
          return Me;
        }),
        yr.d(mr, "J", function () {
          return Ft;
        }),
        yr.d(mr, "K", function () {
          return zt;
        });
      var U =
          "An invariant failed, however the error is obfuscated because this is a production build.",
        F = [],
        L = (Object.freeze(F), {});
      function h() {
        return ++b.mobxGuid;
      }
      function S(e) {
        throw (s(!1, e), "X");
      }
      function s(e, t) {
        if (!e) throw new Error("[mobx] " + (t || U));
      }
      Object.freeze(L);
      function W(e) {
        var t = !1;
        return function () {
          if (!t) return (t = !0), e.apply(this, arguments);
        };
      }
      var z = function () {};
      function V(e) {
        return null !== e && "object" == typeof e;
      }
      function H(e) {
        if (null !== e && "object" == typeof e)
          return (
            (e = Object.getPrototypeOf(e)), e === Object.prototype || null === e
          );
      }
      function $(e, t, r) {
        Object.defineProperty(e, t, {
          enumerable: !1,
          writable: !0,
          configurable: !0,
          value: r,
        });
      }
      function e(e, t) {
        var r = "isMobX" + e;
        return (
          (t.prototype[r] = !0),
          function (e) {
            return V(e) && !0 === e[r];
          }
        );
      }
      function G(e) {
        return e instanceof Map;
      }
      function q(e) {
        return e instanceof Set;
      }
      function K(t) {
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
      function l(e) {
        return (e && e.toString ? e : new String(e)).toString();
      }
      function Y(e) {
        return null === e ? null : "object" == typeof e ? "" + e : e;
      }
      var X =
          "undefined" != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                );
              }
            : Object.getOwnPropertyNames,
        u = Symbol("mobx administration"),
        J =
          ((Q.prototype.onBecomeObserved = function () {
            this.onBecomeObservedListeners &&
              this.onBecomeObservedListeners.forEach(function (e) {
                return e();
              });
          }),
          (Q.prototype.onBecomeUnobserved = function () {
            this.onBecomeUnobservedListeners &&
              this.onBecomeUnobservedListeners.forEach(function (e) {
                return e();
              });
          }),
          (Q.prototype.reportObserved = function () {
            return nt(this);
          }),
          (Q.prototype.reportChanged = function () {
            var t;
            f(),
              (t = this).lowestObserverState !== d.STALE &&
                ((t.lowestObserverState = d.STALE),
                t.observers.forEach(function (e) {
                  e.dependenciesState === d.UP_TO_DATE &&
                    (e.isTracing !== o.NONE && ot(e, t), e.onBecomeStale()),
                    (e.dependenciesState = d.STALE);
                })),
              g();
          }),
          (Q.prototype.toString = function () {
            return this.name;
          }),
          Q);
      function Q(e) {
        void 0 === e && (e = "Atom@" + h()),
          (this.name = e),
          (this.isPendingUnobservation = !1),
          (this.isBeingObserved = !1),
          (this.observers = new Set()),
          (this.diffValue = 0),
          (this.lastAccessedBy = 0),
          (this.lowestObserverState = d.NOT_TRACKING);
      }
      var Z = e("Atom", J);
      function ee(e, t, r) {
        void 0 === t && (t = z), void 0 === r && (r = z);
        var n,
          e = new J(e);
        return (
          t !== z && St("onBecomeObserved", e, t, n), r !== z && wt(e, r), e
        );
      }
      var te = {
          identity: function (e, t) {
            return e === t;
          },
          structural: function (e, t) {
            return fr(e, t);
          },
          default: function (e, t) {
            return Object.is(e, t);
          },
          shallow: function (e, t) {
            return fr(e, t, 1);
          },
        },
        re = function (e, t) {
          return (re =
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
***************************************************************************** */ var ne =
        function () {
          return (ne =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function E(e) {
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
      function oe(e, t) {
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
      function ie() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(oe(arguments[t]));
        return e;
      }
      var ae = Symbol("mobx did run lazy initializers"),
        se = Symbol("mobx pending decorators"),
        le = {},
        ue = {};
      function ce(e) {
        var t, r;
        if (!0 !== e[ae]) {
          var n = e[se];
          if (n) {
            $(e, ae, !0);
            var o = ie(Object.getOwnPropertySymbols(n), Object.keys(n));
            try {
              for (var i = E(o), a = i.next(); !a.done; a = i.next()) {
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
      function pe(a, s) {
        return function () {
          function e(e, t, r, n) {
            return !0 === n
              ? (s(e, t, r, e, i), null)
              : (Object.prototype.hasOwnProperty.call(e, se) ||
                  ((n = e[se]), $(e, se, ne({}, n))),
                (e[se][t] = {
                  prop: t,
                  propertyCreator: s,
                  descriptor: r,
                  decoratorTarget: e,
                  decoratorArguments: i,
                }),
                (r = (n = a) ? le : ue)[(o = t)] ||
                  (r[o] = {
                    configurable: !0,
                    enumerable: n,
                    get: function () {
                      return ce(this), this[o];
                    },
                    set: function (e) {
                      ce(this), (this[o] = e);
                    },
                  }));
            var o;
          }
          var i, t;
          return ((2 === (t = arguments).length || 3 === t.length) &&
            ("string" == typeof t[1] || "symbol" == typeof t[1])) ||
            (4 === t.length && !0 === t[3])
            ? ((i = F), e.apply(null, arguments))
            : ((i = Array.prototype.slice.call(arguments)), e);
        };
      }
      function fe(e, t, r) {
        return Dt(e)
          ? e
          : Array.isArray(e)
          ? n.array(e, { name: r })
          : H(e)
          ? n.object(e, void 0, { name: r })
          : G(e)
          ? n.map(e, { name: r })
          : q(e)
          ? n.set(e, { name: r })
          : e;
      }
      function ge(e) {
        return e;
      }
      function de(i) {
        s(i);
        var e = pe(!0, function (e, t, r, n, o) {
          r = r ? (r.initializer ? r.initializer.call(e) : r.value) : void 0;
          ir(e).addObservableProp(t, r, i);
        });
        void 0 !== P &&
          Object({ NODE_ENV: "production", STEAM_BUILD: "buildbot" });
        return (e.enhancer = i), e;
      }
      var he = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
      function be(e) {
        return null == e
          ? he
          : "string" == typeof e
          ? { name: e, deep: !0, proxy: !0 }
          : e;
      }
      Object.freeze(he);
      var me = de(fe),
        t = de(function (e, t, r) {
          return null == e || R(e) || B(e) || x(e) || I(e)
            ? e
            : Array.isArray(e)
            ? n.array(e, { name: r, deep: !1 })
            : H(e)
            ? n.object(e, void 0, { name: r, deep: !1 })
            : G(e)
            ? n.map(e, { name: r, deep: !1 })
            : q(e)
            ? n.set(e, { name: r, deep: !1 })
            : S(!1);
        }),
        ye = de(ge),
        r = de(function (e, t, r) {
          return fr(e, t) ? t : e;
        });
      function _e(e) {
        return e.defaultDecorator
          ? e.defaultDecorator.enhancer
          : !1 === e.deep
          ? ge
          : fe;
      }
      var ve = {
          box: function (e, t) {
            2 < arguments.length && we("box");
            t = be(t);
            return new Ge(e, _e(t), t.name, !0, t.equals);
          },
          array: function (e, t) {
            2 < arguments.length && we("array");
            var t = be(t),
              r = _e(t),
              t = t.name,
              n = void 0,
              o =
                (void 0 === t && (t = "ObservableArray@" + h()),
                (t = new Xt(t, r, (n = void 0 === n ? !1 : n))).values),
              i = u,
              a = t;
            return (
              Object.defineProperty(o, i, {
                enumerable: !1,
                writable: !1,
                configurable: !0,
                value: a,
              }),
              (r = new Proxy(t.values, Yt)),
              (t.proxy = r),
              e &&
                e.length &&
                ((n = ze(!0)), t.spliceWithArray(0, 0, e), Ve(n)),
              r
            );
          },
          map: function (e, t) {
            2 < arguments.length && we("map");
            t = be(t);
            return new er(e, _e(t), t.name);
          },
          set: function (e, t) {
            2 < arguments.length && we("set");
            t = be(t);
            return new nr(e, _e(t), t.name);
          },
          object: function (e, t, r) {
            "string" == typeof t && we("object");
            var n,
              o,
              r = be(r);
            return !1 === r.proxy
              ? Tt({}, e, t, r)
              : ((n = jt(r)),
                (r = Tt({}, void 0, void 0, r)),
                (r = r),
                (o = new Proxy(r, Gt)),
                At((r = r[u].proxy = o), e, t, n),
                r);
          },
          ref: ye,
          shallow: t,
          deep: me,
          struct: r,
        },
        n = function (e, t, r) {
          return "string" == typeof t || "symbol" == typeof t
            ? me.apply(null, arguments)
            : Dt(e)
            ? e
            : (r = H(e)
                ? n.object(e, t, r)
                : Array.isArray(e)
                ? n.array(e, t)
                : G(e)
                ? n.map(e, t)
                : q(e)
                ? n.set(e, t)
                : e) !== e
            ? r
            : void S(!1);
        };
      function we(e) {
        S(
          "Expected one or two arguments to observable." +
            e +
            ". Did you accidentally try to use observable." +
            e +
            " as decorator?"
        );
      }
      Object.keys(ve).forEach(function (e) {
        return (n[e] = ve[e]);
      });
      var d,
        o,
        Se = pe(!1, function (e, t, r, n, o) {
          var i = r.get,
            r = r.set,
            o = o[0] || {};
          ir(e).addComputedProp(e, t, ne({ get: i, set: r, context: e }, o));
        }),
        t = Se({ equals: te.structural }),
        Ee = function (e, t, r) {
          if ("string" == typeof t) return Se.apply(null, arguments);
          if (null !== e && "object" == typeof e && 1 === arguments.length)
            return Se.apply(null, arguments);
          var n = "object" == typeof t ? t : {};
          return (
            (n.get = e),
            (n.set = "function" == typeof t ? t : n.set),
            (n.name = n.name || e.name || ""),
            new Ke(n)
          );
        },
        Te =
          ((Ee.struct = t),
          ((r = d = d || {})[(r.NOT_TRACKING = -1)] = "NOT_TRACKING"),
          (r[(r.UP_TO_DATE = 0)] = "UP_TO_DATE"),
          (r[(r.POSSIBLY_STALE = 1)] = "POSSIBLY_STALE"),
          (r[(r.STALE = 2)] = "STALE"),
          ((t = o = o || {})[(t.NONE = 0)] = "NONE"),
          (t[(t.LOG = 1)] = "LOG"),
          (t[(t.BREAK = 2)] = "BREAK"),
          function (e) {
            this.cause = e;
          });
      function je(e) {
        return e instanceof Te;
      }
      function Ae(e) {
        switch (e.dependenciesState) {
          case d.UP_TO_DATE:
            return;
          case d.NOT_TRACKING:
          case d.STALE:
            return 1;
          case d.POSSIBLY_STALE:
            for (
              var t = ke(!0), r = Ie(), n = e.observing, o = n.length, i = 0;
              i < o;
              i++
            ) {
              var a = n[i];
              if (Ye(a)) {
                if (b.disableErrorBoundaries) a.get();
                else
                  try {
                    a.get();
                  } catch (e) {
                    return c(r), Re(t), 1;
                  }
                if (e.dependenciesState === d.STALE) return c(r), Re(t), 1;
              }
            }
            return Ne(e), c(r), void Re(t);
        }
      }
      function Oe() {
        return null !== b.trackingDerivation;
      }
      function Be(e) {
        e = 0 < e.observers.size;
        0 < b.computationDepth && e && S(!1),
          b.allowStateChanges || (!e && "strict" !== b.enforceActions) || S(!1);
      }
      function Ce(e, t, r) {
        var n,
          o,
          i = ke(!0),
          a =
            (Ne(e),
            (e.newObserving = new Array(e.observing.length + 100)),
            (e.unboundDepsCount = 0),
            (e.runId = ++b.runId),
            b.trackingDerivation);
        if (((b.trackingDerivation = e), !0 === b.disableErrorBoundaries))
          n = t.call(r);
        else
          try {
            n = t.call(r);
          } catch (e) {
            n = new Te(e);
          }
        b.trackingDerivation = a;
        for (
          var s = e,
            l = s.observing,
            u = (s.observing = s.newObserving),
            c = d.UP_TO_DATE,
            p = 0,
            f = s.unboundDepsCount,
            g = 0;
          g < f;
          g++
        )
          0 === (o = u[g]).diffValue &&
            ((o.diffValue = 1), p !== g && (u[p] = o), p++),
            o.dependenciesState > c && (c = o.dependenciesState);
        for (u.length = p, s.newObserving = null, f = l.length; f--; )
          0 === (o = l[f]).diffValue && tt(o, s), (o.diffValue = 0);
        for (; p--; )
          1 === (o = u[p]).diffValue &&
            ((o.diffValue = 0),
            (function (e, t) {
              e.observers.add(t),
                e.lowestObserverState > t.dependenciesState &&
                  (e.lowestObserverState = t.dependenciesState);
            })(o, s));
        return (
          c !== d.UP_TO_DATE && ((s.dependenciesState = c), s.onBecomeStale()),
          Re(i),
          n
        );
      }
      function xe(e) {
        for (var t = e.observing, r = ((e.observing = []), t.length); r--; )
          tt(t[r], e);
        e.dependenciesState = d.NOT_TRACKING;
      }
      function Me(e) {
        var t = Ie();
        try {
          return e();
        } finally {
          c(t);
        }
      }
      function Ie() {
        var e = b.trackingDerivation;
        return (b.trackingDerivation = null), e;
      }
      function c(e) {
        b.trackingDerivation = e;
      }
      function ke(e) {
        var t = b.allowStateReads;
        return (b.allowStateReads = e), t;
      }
      function Re(e) {
        b.allowStateReads = e;
      }
      function Ne(e) {
        if (e.dependenciesState !== d.UP_TO_DATE) {
          e.dependenciesState = d.UP_TO_DATE;
          for (var t = e.observing, r = t.length; r--; )
            t[r].lowestObserverState = d.UP_TO_DATE;
        }
      }
      var Pe = 0,
        De = 1,
        r = Object.getOwnPropertyDescriptor(function () {}, "name");
      r && r.configurable;
      function a(e, t, r) {
        function n() {
          return Ue(e, t, r || this, arguments);
        }
        return (n.isMobxAction = !0), n;
      }
      function Ue(t, e, r, n) {
        t = Fe();
        try {
          return e.apply(r, n);
        } catch (e) {
          throw (t.error = e);
        } finally {
          Le(t);
        }
      }
      function Fe(e, t, r) {
        var n = 0,
          o = Ie();
        f();
        o = {
          prevDerivation: o,
          prevAllowStateChanges: ze(!0),
          prevAllowStateReads: ke(!0),
          notifySpy: !1,
          startTime: n,
          actionId: De++,
          parentActionId: Pe,
        };
        return (Pe = o.actionId), o;
      }
      function Le(e) {
        Pe !== e.actionId &&
          S("invalid action stack. did you forget to finish an action?"),
          (Pe = e.parentActionId),
          void 0 !== e.error && (b.suppressReactionErrors = !0),
          Ve(e.prevAllowStateChanges),
          Re(e.prevAllowStateReads),
          g(),
          c(e.prevDerivation),
          e.notifySpy,
          (b.suppressReactionErrors = !1);
      }
      function We(e, t) {
        var r,
          e = ze(e);
        try {
          r = t();
        } finally {
          Ve(e);
        }
        return r;
      }
      function ze(e) {
        var t = b.allowStateChanges;
        return (b.allowStateChanges = e), t;
      }
      function Ve(e) {
        b.allowStateChanges = e;
      }
      re(($e = i), (t = He = J)),
        ($e.prototype =
          null === t
            ? Object.create(t)
            : ((qe.prototype = t.prototype), new qe())),
        (i.prototype.dehanceValue = function (e) {
          return void 0 !== this.dehancer ? this.dehancer(e) : e;
        }),
        (i.prototype.set = function (e) {
          this.value;
          (e = this.prepareNewValue(e)) !== b.UNCHANGED && this.setNewValue(e);
        }),
        (i.prototype.prepareNewValue = function (e) {
          if ((Be(this), v(this))) {
            var t = w(this, { object: this, type: "update", newValue: e });
            if (!t) return b.UNCHANGED;
            e = t.newValue;
          }
          return (
            (e = this.enhancer(e, this.value, this.name)),
            this.equals(this.value, e) ? b.UNCHANGED : e
          );
        }),
        (i.prototype.setNewValue = function (e) {
          var t = this.value;
          (this.value = e),
            this.reportChanged(),
            T(this) &&
              j(this, {
                type: "update",
                object: this,
                newValue: e,
                oldValue: t,
              });
        }),
        (i.prototype.get = function () {
          return this.reportObserved(), this.dehanceValue(this.value);
        }),
        (i.prototype.intercept = function (e) {
          return qt(this, e);
        }),
        (i.prototype.observe = function (e, t) {
          return (
            t &&
              e({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: void 0,
              }),
            Kt(this, e)
          );
        }),
        (i.prototype.toJSON = function () {
          return this.get();
        }),
        (i.prototype.toString = function () {
          return this.name + "[" + this.value + "]";
        }),
        (i.prototype.valueOf = function () {
          return Y(this.get());
        }),
        (i.prototype[Symbol.toPrimitive] = function () {
          return this.valueOf();
        });
      var He,
        $e,
        Ge = i;
      function qe() {
        this.constructor = $e;
      }
      function i(e, t, r, n, o) {
        void 0 === r && (r = "ObservableValue@" + h()),
          void 0 === n && (n = !0),
          void 0 === o && (o = te.default);
        n = He.call(this, r) || this;
        return (
          (n.enhancer = t),
          (n.name = r),
          (n.equals = o),
          (n.hasUnreportedChange = !1),
          (n.value = t(e, void 0, r)),
          n
        );
      }
      e("ObservableValue", Ge);
      (p.prototype.onBecomeStale = function () {
        var t;
        (t = this).lowestObserverState === d.UP_TO_DATE &&
          ((t.lowestObserverState = d.POSSIBLY_STALE),
          t.observers.forEach(function (e) {
            e.dependenciesState === d.UP_TO_DATE &&
              ((e.dependenciesState = d.POSSIBLY_STALE),
              e.isTracing !== o.NONE && ot(e, t),
              e.onBecomeStale());
          }));
      }),
        (p.prototype.onBecomeObserved = function () {
          this.onBecomeObservedListeners &&
            this.onBecomeObservedListeners.forEach(function (e) {
              return e();
            });
        }),
        (p.prototype.onBecomeUnobserved = function () {
          this.onBecomeUnobservedListeners &&
            this.onBecomeUnobservedListeners.forEach(function (e) {
              return e();
            });
        }),
        (p.prototype.get = function () {
          this.isComputing &&
            S(
              "Cycle detected in computation " +
                this.name +
                ": " +
                this.derivation
            ),
            0 !== b.inBatch || 0 !== this.observers.size || this.keepAlive
              ? (nt(this),
                Ae(this) &&
                  this.trackAndCompute() &&
                  (t = this).lowestObserverState !== d.STALE &&
                  ((t.lowestObserverState = d.STALE),
                  t.observers.forEach(function (e) {
                    e.dependenciesState === d.POSSIBLY_STALE
                      ? (e.dependenciesState = d.STALE)
                      : e.dependenciesState === d.UP_TO_DATE &&
                        (t.lowestObserverState = d.UP_TO_DATE);
                  })))
              : Ae(this) &&
                (this.warnAboutUntrackedRead(),
                f(),
                (this.value = this.computeValue(!1)),
                g());
          var t,
            e = this.value;
          if (je(e)) throw e.cause;
          return e;
        }),
        (p.prototype.peek = function () {
          var e = this.computeValue(!1);
          if (je(e)) throw e.cause;
          return e;
        }),
        (p.prototype.set = function (e) {
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
        (p.prototype.trackAndCompute = function () {
          var e = this.value,
            t = this.dependenciesState === d.NOT_TRACKING,
            r = this.computeValue(!0),
            t = t || je(e) || je(r) || !this.equals(e, r);
          return t && (this.value = r), t;
        }),
        (p.prototype.computeValue = function (e) {
          var t;
          if (((this.isComputing = !0), b.computationDepth++, e))
            t = Ce(this, this.derivation, this.scope);
          else if (!0 === b.disableErrorBoundaries)
            t = this.derivation.call(this.scope);
          else
            try {
              t = this.derivation.call(this.scope);
            } catch (e) {
              t = new Te(e);
            }
          return b.computationDepth--, (this.isComputing = !1), t;
        }),
        (p.prototype.suspend = function () {
          this.keepAlive || (xe(this), (this.value = void 0));
        }),
        (p.prototype.observe = function (r, n) {
          var o = this,
            i = !0,
            a = void 0;
          return mt(function () {
            var e,
              t = o.get();
            (i && !n) ||
              ((e = Ie()),
              r({ type: "update", object: o, newValue: t, oldValue: a }),
              c(e)),
              (i = !1),
              (a = t);
          });
        }),
        (p.prototype.warnAboutUntrackedRead = function () {}),
        (p.prototype.toJSON = function () {
          return this.get();
        }),
        (p.prototype.toString = function () {
          return this.name + "[" + this.derivation.toString() + "]";
        }),
        (p.prototype.valueOf = function () {
          return Y(this.get());
        }),
        (p.prototype[Symbol.toPrimitive] = function () {
          return this.valueOf();
        });
      var Ke = p;
      function p(e) {
        (this.dependenciesState = d.NOT_TRACKING),
          (this.observing = []),
          (this.newObserving = null),
          (this.isBeingObserved = !1),
          (this.isPendingUnobservation = !1),
          (this.observers = new Set()),
          (this.diffValue = 0),
          (this.runId = 0),
          (this.lastAccessedBy = 0),
          (this.lowestObserverState = d.UP_TO_DATE),
          (this.unboundDepsCount = 0),
          (this.__mapid = "#" + h()),
          (this.value = new Te(null)),
          (this.isComputing = !1),
          (this.isRunningSetter = !1),
          (this.isTracing = o.NONE),
          s(e.get, "missing option for computed: get"),
          (this.derivation = e.get),
          (this.name = e.name || "ComputedValue@" + h()),
          e.set && (this.setter = a(this.name + "-setter", e.set)),
          (this.equals =
            e.equals ||
            (e.compareStructural || e.struct ? te.structural : te.default)),
          (this.scope = e.context),
          (this.requiresReaction = !!e.requiresReaction),
          (this.keepAlive = !!e.keepAlive);
      }
      var Ye = e("ComputedValue", Ke),
        Xe = function () {
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
        Je = {};
      function Qe() {
        return "undefined" != typeof window
          ? window
          : void 0 !== D
          ? D
          : "undefined" != typeof self
          ? self
          : Je;
      }
      var Ze = !0,
        et = !1,
        b =
          (0 < (r = Qe()).__mobxInstanceCount && !r.__mobxGlobals && (Ze = !1),
          (Ze =
            r.__mobxGlobals && r.__mobxGlobals.version !== new Xe().version
              ? !1
              : Ze)
            ? r.__mobxGlobals
              ? ((r.__mobxInstanceCount += 1),
                r.__mobxGlobals.UNCHANGED || (r.__mobxGlobals.UNCHANGED = {}),
                r.__mobxGlobals)
              : ((r.__mobxInstanceCount = 1), (r.__mobxGlobals = new Xe()))
            : (setTimeout(function () {
                et ||
                  S(
                    "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`"
                  );
              }, 1),
              new Xe()));
      function tt(e, t) {
        e.observers.delete(t), 0 === e.observers.size && rt(e);
      }
      function rt(e) {
        !1 === e.isPendingUnobservation &&
          ((e.isPendingUnobservation = !0), b.pendingUnobservations.push(e));
      }
      function f() {
        b.inBatch++;
      }
      function g() {
        if (0 == --b.inBatch) {
          lt();
          for (var e = b.pendingUnobservations, t = 0; t < e.length; t++) {
            var r = e[t];
            (r.isPendingUnobservation = !1),
              0 === r.observers.size &&
                (r.isBeingObserved &&
                  ((r.isBeingObserved = !1), r.onBecomeUnobserved()),
                r instanceof Ke && r.suspend());
          }
          b.pendingUnobservations = [];
        }
      }
      function nt(e) {
        var t = b.trackingDerivation;
        return null !== t
          ? (t.runId !== e.lastAccessedBy &&
              ((e.lastAccessedBy = t.runId),
              (t.newObserving[t.unboundDepsCount++] = e).isBeingObserved ||
                ((e.isBeingObserved = !0), e.onBecomeObserved())),
            !0)
          : (0 === e.observers.size && 0 < b.inBatch && rt(e), !1);
      }
      function ot(e, t) {
        var r;
        console.log(
          "[mobx.trace] '" +
            e.name +
            "' is invalidated due to a change in: '" +
            t.name +
            "'"
        ),
          e.isTracing === o.BREAK &&
            ((r = []),
            (function t(e, r, n) {
              if (1e3 <= r.length) return void r.push("(and many more)");
              r.push("" + new Array(n).join("\t") + e.name);
              e.dependencies &&
                e.dependencies.forEach(function (e) {
                  return t(e, r, n + 1);
                });
            })(Ot(e), r, 1),
            new Function(
              "debugger;\n/*\nTracing '" +
                e.name +
                "'\n\nYou are entering this break point because derivation '" +
                e.name +
                "' is being traced and '" +
                t.name +
                "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" +
                (e instanceof Ke
                  ? e.derivation.toString().replace(/[*]\//g, "/")
                  : "") +
                "\n\nThe dependencies for this derivation are:\n\n" +
                r.join("\n") +
                "\n*/\n    "
            )());
      }
      (m.prototype.onBecomeStale = function () {
        this.schedule();
      }),
        (m.prototype.schedule = function () {
          this._isScheduled ||
            ((this._isScheduled = !0), b.pendingReactions.push(this), lt());
        }),
        (m.prototype.isScheduled = function () {
          return this._isScheduled;
        }),
        (m.prototype.runReaction = function () {
          if (!this.isDisposed) {
            if ((f(), (this._isScheduled = !1), Ae(this))) {
              this._isTrackPending = !0;
              try {
                this.onInvalidate(), this._isTrackPending;
              } catch (e) {
                this.reportExceptionInDerivation(e);
              }
            }
            g();
          }
        }),
        (m.prototype.track = function (e) {
          this.isDisposed ||
            (f(),
            (this._isRunning = !!1),
            (e = Ce(this, e, void 0)),
            (this._isRunning = !1),
            (this._isTrackPending = !1),
            this.isDisposed && xe(this),
            je(e) && this.reportExceptionInDerivation(e.cause),
            g());
        }),
        (m.prototype.reportExceptionInDerivation = function (t) {
          var r = this;
          if (this.errorHandler) this.errorHandler(t, this);
          else {
            if (b.disableErrorBoundaries) throw t;
            var e =
              "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" +
              this +
              "'";
            b.suppressReactionErrors
              ? console.warn(
                  "[mobx] (error in reaction '" +
                    this.name +
                    "' suppressed, fix error of causing action below)"
                )
              : console.error(e, t),
              b.globalReactionErrorHandlers.forEach(function (e) {
                return e(t, r);
              });
          }
        }),
        (m.prototype.dispose = function () {
          this.isDisposed ||
            ((this.isDisposed = !0), this._isRunning || (f(), xe(this), g()));
        }),
        (m.prototype.getDisposer = function () {
          var e = this.dispose.bind(this);
          return (e[u] = this), e;
        }),
        (m.prototype.toString = function () {
          return "Reaction[" + this.name + "]";
        }),
        (m.prototype.trace = function (e) {
          !(function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var r = !1;
            "boolean" == typeof e[e.length - 1] && (r = e.pop());
            var n = (function (e) {
              switch (e.length) {
                case 0:
                  return b.trackingDerivation;
                case 1:
                  return N(e[0]);
                case 2:
                  return N(e[0], e[1]);
              }
            })(e);
            if (!n) return S(!1);
            n.isTracing === o.NONE &&
              console.log("[mobx.trace] '" + n.name + "' tracing enabled");
            n.isTracing = r ? o.BREAK : o.LOG;
          })(this, (e = void 0 === e ? !1 : e));
        });
      var it = m;
      function m(e, t, r, n) {
        void 0 === e && (e = "Reaction@" + h()),
          void 0 === n && (n = !1),
          (this.name = e),
          (this.onInvalidate = t),
          (this.errorHandler = r),
          (this.requiresObservable = n),
          (this.observing = []),
          (this.newObserving = []),
          (this.dependenciesState = d.NOT_TRACKING),
          (this.diffValue = 0),
          (this.runId = 0),
          (this.unboundDepsCount = 0),
          (this.__mapid = "#" + h()),
          (this.isDisposed = !1),
          (this._isScheduled = !1),
          (this._isTrackPending = !1),
          (this._isRunning = !1),
          (this.isTracing = o.NONE);
      }
      var at = 100,
        st = function (e) {
          return e();
        };
      function lt() {
        0 < b.inBatch || b.isRunningReactions || st(ut);
      }
      function ut() {
        b.isRunningReactions = !0;
        for (var e = b.pendingReactions, t = 0; 0 < e.length; ) {
          ++t === at &&
            (console.error(
              "Reaction doesn't converge to a stable state after " +
                at +
                " iterations. Probably there is a cycle in the reactive function: " +
                e[0]
            ),
            e.splice(0));
          for (var r = e.splice(0), n = 0, o = r.length; n < o; n++)
            r[n].runReaction();
        }
        b.isRunningReactions = !1;
      }
      var ct = e("Reaction", it);
      function pt(e) {
        return (
          console.warn("[mobx.spy] Is a no-op in production builds"),
          function () {}
        );
      }
      function ft() {
        S(!1);
      }
      function gt(i) {
        return function (e, t, r) {
          if (r) {
            if (r.value)
              return {
                value: a(i, r.value),
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
                return a(i, n.call(this));
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
                  $(this, t, y(o, e));
                },
              });
            }.apply(this, arguments)
          );
          var o;
        };
      }
      var y = function (e, t, r, n) {
        return 1 === arguments.length && "function" == typeof e
          ? a(e.name || "<unnamed action>", e)
          : 2 === arguments.length && "function" == typeof t
          ? a(e, t)
          : 1 === arguments.length && "string" == typeof e
          ? gt(e)
          : !0 !== n
          ? gt(t).apply(null, arguments)
          : void $(e, t, a(e.name || t, r.value, this));
      };
      function dt(e, t) {
        return Ue(
          "string" == typeof e ? e : e.name || "<unnamed action>",
          "function" == typeof e ? e : t,
          this,
          void 0
        );
      }
      function ht(e) {
        return "function" == typeof e && !0 === e.isMobxAction;
      }
      function bt(e, t, r) {
        $(e, t, a(t, r.bind(e)));
      }
      function mt(e, t) {
        var r,
          n,
          o,
          i =
            ((t = void 0 === t ? L : t) && t.name) ||
            e.name ||
            "Autorun@" + h(),
          a = !t.scheduler && !t.delay;
        function s() {
          e(o);
        }
        return (
          (o = a
            ? new it(
                i,
                function () {
                  this.track(s);
                },
                t.onError,
                t.requiresObservable
              )
            : ((r = _t(t)),
              (n = !1),
              new it(
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
      y.bound = function (e, t, r, n) {
        return !0 === n
          ? (bt(e, t, r.value), null)
          : r
          ? {
              configurable: !0,
              enumerable: !1,
              get: function () {
                return (
                  bt(this, t, r.value || r.initializer.call(this)), this[t]
                );
              },
              set: ft,
            }
          : {
              enumerable: !1,
              configurable: !0,
              set: function (e) {
                bt(this, t, e);
              },
              get: function () {},
            };
      };
      var yt = function (e) {
        return e();
      };
      function _t(t) {
        return (
          t.scheduler ||
          (t.delay
            ? function (e) {
                return setTimeout(e, t.delay);
              }
            : yt)
        );
      }
      function vt(r, e, n) {
        var t,
          o,
          i,
          a = (n = void 0 === n ? L : n).name || "Reaction@" + h(),
          s = y(
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
          l = !n.scheduler && !n.delay,
          u = _t(n),
          c = !0,
          p = !1,
          f = n.compareStructural ? te.structural : n.equals || te.default,
          g = new it(
            a,
            function () {
              c || l ? d() : p || ((p = !0), u(d));
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
      function wt(e, t, r) {
        return St("onBecomeUnobserved", e, t, r);
      }
      function St(e, t, r, n) {
        var o = "function" == typeof n ? N(t, r) : N(t),
          i = "function" == typeof n ? n : r,
          a = e + "Listeners";
        return (
          o[a] ? o[a].add(i) : (o[a] = new Set([i])),
          "function" != typeof o[e]
            ? S(!1)
            : function () {
                var e = o[a];
                e && (e.delete(i), 0 === e.size && delete o[a]);
              }
        );
      }
      function Et(e) {
        var t,
          r,
          n = e.enforceActions,
          o = e.computedRequiresReaction,
          i = e.computedConfigurable,
          a = e.disableErrorBoundaries,
          s = e.reactionScheduler,
          l = e.reactionRequiresObservable,
          u = e.observableRequiresReaction;
        if (
          (!0 === e.isolateGlobalState &&
            ((b.pendingReactions.length || b.inBatch || b.isRunningReactions) &&
              S(
                "isolateGlobalState should be called before MobX is running any reactions"
              ),
            (et = !0),
            Ze &&
              (0 == --Qe().__mobxInstanceCount && (Qe().__mobxGlobals = void 0),
              (b = new Xe()))),
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
              S(
                "Invalid value for 'enforceActions': '" +
                  n +
                  "', expected 'never', 'always' or 'observed'"
              );
          }
          (b.enforceActions = c),
            (b.allowStateChanges = !0 !== c && "strict" !== c);
        }
        void 0 !== o && (b.computedRequiresReaction = !!o),
          void 0 !== l && (b.reactionRequiresObservable = !!l),
          void 0 !== u &&
            ((b.observableRequiresReaction = !!u),
            (b.allowStateReads = !b.observableRequiresReaction)),
          void 0 !== i && (b.computedConfigurable = !!i),
          void 0 !== a &&
            (!0 === a &&
              console.warn(
                "WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."
              ),
            (b.disableErrorBoundaries = !!a)),
          s &&
            ((t = s),
            (r = st),
            (st = function (e) {
              return t(function () {
                return r(e);
              });
            }));
      }
      function Tt(e, t, r, n) {
        var o = jt((n = be(n)));
        return ce(e), ir(e, n.name, o.enhancer), t && At(e, t, r, o), e;
      }
      function jt(e) {
        return e.defaultDecorator || (!1 === e.deep ? ye : me);
      }
      function At(e, t, r, n) {
        var o, i;
        f();
        try {
          var a = X(t);
          try {
            for (var s = E(a), l = s.next(); !l.done; l = s.next()) {
              var u = l.value,
                c = Object.getOwnPropertyDescriptor(t, u),
                p = (r && u in r ? r[u] : c.get ? Se : n)(e, u, c, !0);
              p && Object.defineProperty(e, u, p);
            }
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              l && !l.done && (i = s.return) && i.call(s);
            } finally {
              if (o) throw o.error;
            }
          }
        } finally {
          g();
        }
      }
      function Ot(e, t) {
        return Bt(N(e, t));
      }
      function Bt(e) {
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
              t.map(Bt))),
          r
        );
      }
      var Ct = 0;
      function xt() {
        this.message = "FLOW_CANCELLED";
      }
      function Mt(t) {
        1 !== arguments.length &&
          S("Flow expects 1 argument and cannot be used as decorator");
        var p = t.name || "<unnamed flow>";
        return function () {
          var s,
            e = arguments,
            l = ++Ct,
            u = y(p + " - runid: " + l + " - init", t).apply(this, e),
            c = void 0,
            e = new Promise(function (t, r) {
              var n = 0;
              function o(e) {
                var t;
                c = void 0;
                try {
                  t = y(p + " - runid: " + l + " - yield " + n++, u.next).call(
                    u,
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
                  t = y(p + " - runid: " + l + " - yield " + n++, u.throw).call(
                    u,
                    e
                  );
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
            (e.cancel = y(p + " - runid: " + l + " - cancel", function () {
              try {
                c && It(c);
                var e = u.return(void 0),
                  t = Promise.resolve(e.value);
                t.then(z, z), It(t), s(new xt());
              } catch (e) {
                s(e);
              }
            })),
            e
          );
        };
      }
      function It(e) {
        "function" == typeof e.cancel && e.cancel();
      }
      function kt(e, t) {
        if (null == e) return !1;
        if (void 0 === t) return Ye(e);
        if (!1 === R(e)) return !1;
        if (!e[u].values.has(t)) return !1;
        e = N(e, t);
        return Ye(e);
      }
      function Rt(e) {
        return 1 < arguments.length ? S(!1) : kt(e);
      }
      function Nt(e, t) {
        return "string" != typeof t ? S(!1) : kt(e, t);
      }
      function Pt(e, t) {
        return (
          null != e &&
          (void 0 !== t
            ? !!R(e) && e[u].values.has(t)
            : R(e) || !!e[u] || Z(e) || ct(e) || Ye(e))
        );
      }
      function Dt(e) {
        return 1 !== arguments.length && S(!1), Pt(e);
      }
      function Ut(e) {
        return R(e)
          ? e[u].getKeys()
          : x(e) || I(e)
          ? Array.from(e.keys())
          : B(e)
          ? e.map(function (e, t) {
              return t;
            })
          : S(!1);
      }
      function Ft(t) {
        return R(t)
          ? Ut(t).map(function (e) {
              return t[e];
            })
          : x(t)
          ? Ut(t).map(function (e) {
              return t.get(e);
            })
          : I(t)
          ? Array.from(t.values())
          : B(t)
          ? t.slice()
          : S(!1);
      }
      function Lt(t) {
        return R(t)
          ? Ut(t).map(function (e) {
              return [e, t[e]];
            })
          : x(t)
          ? Ut(t).map(function (e) {
              return [e, t.get(e)];
            })
          : I(t)
          ? Array.from(t.entries())
          : B(t)
          ? t.map(function (e, t) {
              return [t, e];
            })
          : S(!1);
      }
      function Wt(e, t, r, n) {
        return "function" == typeof r
          ? ((o = r), (n = n), cr(e, t).observe(o, n))
          : ((o = t), (n = r), cr(e).observe(o, n));
        var o;
      }
      xt.prototype = Object.create(Error.prototype);
      function _(e, t) {
        void 0 === t && (t = void 0), f();
        try {
          return e.apply(t);
        } finally {
          g();
        }
      }
      function zt(e, t, r) {
        return 1 === arguments.length || (t && "object" == typeof t)
          ? ((n = e),
            (o = t),
            ((a = new Promise(function (e, t) {
              var r = Vt(n, e, ne(ne({}, o), { onError: t }));
              i = function () {
                r(), t("WHEN_CANCELLED");
              };
            })).cancel = i),
            a)
          : Vt(e, t, r || {});
        var n, o, i, a;
      }
      function Vt(t, e, r) {
        "number" == typeof r.timeout &&
          (n = setTimeout(function () {
            if (!i[u].isDisposed) {
              i();
              var e = new Error("WHEN_TIMEOUT");
              if (!r.onError) throw e;
              r.onError(e);
            }
          }, r.timeout)),
          (r.name = r.name || "When@" + h());
        var n,
          o = a(r.name + "-effect", e),
          i = mt(function (e) {
            t() && (e.dispose(), n && clearTimeout(n), o());
          }, r);
        return i;
      }
      function Ht(e) {
        return e[u];
      }
      function $t(e) {
        return (
          "string" == typeof e || "number" == typeof e || "symbol" == typeof e
        );
      }
      var Gt = {
        has: function (e, t) {
          if (t === u || "constructor" === t || t === ae) return !0;
          var r = Ht(e);
          return $t(t) ? r.has(t) : t in e;
        },
        get: function (e, t) {
          if (t !== u && "constructor" !== t && t !== ae) {
            var r = Ht(e),
              n = r.values.get(t);
            if (n instanceof J) return void 0 === (n = n.get()) && r.has(t), n;
            $t(t) && r.has(t);
          }
          return e[t];
        },
        set: function (e, t, r) {
          return (
            !!$t(t) &&
            ((function e(t, r, n) {
              if (2 !== arguments.length || I(t)) {
                var o;
                R(t)
                  ? (o = t[u]).values.get(r)
                    ? o.write(r, n)
                    : o.addObservableProp(r, n, o.defaultEnhancer)
                  : x(t)
                  ? t.set(r, n)
                  : I(t)
                  ? t.add(r)
                  : B(t)
                  ? (s(
                      0 <= (r = "number" != typeof r ? parseInt(r, 10) : r),
                      "Not a valid index: '" + r + "'"
                    ),
                    f(),
                    r >= t.length && (t.length = r + 1),
                    (t[r] = n),
                    g())
                  : S(!1);
              } else {
                f();
                var i = r;
                try {
                  for (var a in i) e(t, a, i[a]);
                } finally {
                  g();
                }
              }
            })(e, t, r),
            !0)
          );
        },
        deleteProperty: function (e, t) {
          return !!$t(t) && (Ht(e).remove(t), !0);
        },
        ownKeys: function (e) {
          return Ht(e).keysAtom.reportObserved(), Reflect.ownKeys(e);
        },
        preventExtensions: function (e) {
          return S("Dynamic observable objects cannot be frozen"), !1;
        },
      };
      function v(e) {
        return void 0 !== e.interceptors && 0 < e.interceptors.length;
      }
      function qt(e, t) {
        var r = e.interceptors || (e.interceptors = []);
        return (
          r.push(t),
          W(function () {
            var e = r.indexOf(t);
            -1 !== e && r.splice(e, 1);
          })
        );
      }
      function w(e, t) {
        var r = Ie();
        try {
          for (
            var n = ie(e.interceptors || []), o = 0, i = n.length;
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
          c(r);
        }
      }
      function T(e) {
        return void 0 !== e.changeListeners && 0 < e.changeListeners.length;
      }
      function Kt(e, t) {
        var r = e.changeListeners || (e.changeListeners = []);
        return (
          r.push(t),
          W(function () {
            var e = r.indexOf(t);
            -1 !== e && r.splice(e, 1);
          })
        );
      }
      function j(e, t) {
        var r = Ie();
        if ((n = e.changeListeners)) {
          for (var n, o = 0, i = (n = n.slice()).length; o < i; o++) n[o](t);
          c(r);
        }
      }
      var Yt = {
        get: function (e, t) {
          return t === u
            ? e[u]
            : "length" === t
            ? e[u].getArrayLength()
            : "number" == typeof t
            ? O.get.call(e, t)
            : "string" != typeof t || isNaN(t)
            ? (O.hasOwnProperty(t) ? O : e)[t]
            : O.get.call(e, parseInt(t));
        },
        set: function (e, t, r) {
          return (
            "length" === t && e[u].setArrayLength(r),
            "number" == typeof t && O.set.call(e, t, r),
            "symbol" == typeof t || isNaN(t)
              ? (e[t] = r)
              : O.set.call(e, parseInt(t), r),
            !0
          );
        },
        preventExtensions: function (e) {
          return S("Observable arrays cannot be frozen"), !1;
        },
      };
      (A.prototype.dehanceValue = function (e) {
        return void 0 !== this.dehancer ? this.dehancer(e) : e;
      }),
        (A.prototype.dehanceValues = function (e) {
          return void 0 !== this.dehancer && 0 < e.length
            ? e.map(this.dehancer)
            : e;
        }),
        (A.prototype.intercept = function (e) {
          return qt(this, e);
        }),
        (A.prototype.observe = function (e, t) {
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
            Kt(this, e)
          );
        }),
        (A.prototype.getArrayLength = function () {
          return this.atom.reportObserved(), this.values.length;
        }),
        (A.prototype.setArrayLength = function (e) {
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
        (A.prototype.updateArrayLength = function (e, t) {
          if (e !== this.lastKnownLength)
            throw new Error(
              "[mobx] Modification exception: the internal structure of an observable array was changed."
            );
          this.lastKnownLength += t;
        }),
        (A.prototype.spliceWithArray = function (e, t, r) {
          var n = this,
            o = (Be(this.atom), this.values.length);
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
            void 0 === r && (r = F),
            v(this))
          ) {
            o = w(this, {
              object: this.proxy,
              type: "splice",
              index: e,
              removedCount: t,
              added: r,
            });
            if (!o) return F;
            (t = o.removedCount), (r = o.added);
          }
          r =
            0 === r.length
              ? r
              : r.map(function (e) {
                  return n.enhancer(e, void 0);
                });
          o = this.spliceItemsIntoValues(e, t, r);
          return (
            (0 === t && 0 === r.length) || this.notifyArraySplice(e, r, o),
            this.dehanceValues(o)
          );
        }),
        (A.prototype.spliceItemsIntoValues = function (e, t, r) {
          var n;
          return r.length < 1e4
            ? (n = this.values).splice.apply(n, ie([e, t], r))
            : ((n = this.values.slice(e, e + t)),
              (this.values = this.values
                .slice(0, e)
                .concat(r, this.values.slice(e + t))),
              n);
        }),
        (A.prototype.notifyArrayChildUpdate = function (e, t, r) {
          var n = !this.owned && !1,
            o = T(this),
            n =
              o || n
                ? {
                    object: this.proxy,
                    type: "update",
                    index: e,
                    newValue: t,
                    oldValue: r,
                  }
                : null;
          this.atom.reportChanged(), o && j(this, n);
        }),
        (A.prototype.notifyArraySplice = function (e, t, r) {
          var n = !this.owned && !1,
            o = T(this),
            n =
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
          this.atom.reportChanged(), o && j(this, n);
        });
      var Xt = A;
      function A(r, n, e) {
        (this.owned = e),
          (this.values = []),
          (this.proxy = void 0),
          (this.lastKnownLength = 0),
          (this.atom = new J(r || "ObservableArray@" + h())),
          (this.enhancer = function (e, t) {
            return n(e, t, r + "[..]");
          });
      }
      var Jt,
        O = {
          intercept: function (e) {
            return this[u].intercept(e);
          },
          observe: function (e, t) {
            return this[u].observe(e, (t = void 0 === t ? !1 : t));
          },
          clear: function () {
            return this.splice(0);
          },
          replace: function (e) {
            var t = this[u];
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
            var o = this[u];
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
            return this[u].spliceWithArray(e, t, r);
          },
          push: function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var r = this[u];
            return r.spliceWithArray(r.values.length, 0, e), r.values.length;
          },
          pop: function () {
            return this.splice(Math.max(this[u].values.length - 1, 0), 1)[0];
          },
          shift: function () {
            return this.splice(0, 1)[0];
          },
          unshift: function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var r = this[u];
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
            var t = this[u],
              t = t.dehanceValues(t.values).indexOf(e);
            return -1 < t && (this.splice(t, 1), !0);
          },
          get: function (e) {
            var t = this[u];
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
            var r = this[u],
              n = r.values;
            if (e < n.length) {
              Be(r.atom);
              var o = n[e];
              if (v(r)) {
                var i = w(r, {
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
        },
        Qt =
          ([
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
              (O[t] = function () {
                var e = this[u],
                  e = (e.atom.reportObserved(), e.dehanceValues(e.values));
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
              (O[t] = function (r, n) {
                var o = this,
                  e = this[u];
                return (
                  e.atom.reportObserved(),
                  e.dehanceValues(e.values)[t](function (e, t) {
                    return r.call(n, e, t, o);
                  }, n)
                );
              });
          }),
          ["reduce", "reduceRight"].forEach(function (e) {
            O[e] = function () {
              var n = this,
                o = this[u],
                i = (o.atom.reportObserved(), arguments[0]);
              return (
                (arguments[0] = function (e, t, r) {
                  return (t = o.dehanceValue(t)), i(e, t, r, n);
                }),
                o.values[e].apply(o.values, arguments)
              );
            };
          }),
          e("ObservableArrayAdministration", Xt));
      function B(e) {
        return V(e) && Qt(e[u]);
      }
      var Zt = {},
        er =
          ((C.prototype._has = function (e) {
            return this._data.has(e);
          }),
          (C.prototype.has = function (e) {
            var t = this;
            if (!b.trackingDerivation) return this._has(e);
            var r,
              n = this._hasMap.get(e);
            return (
              n ||
                ((r = n =
                  new Ge(this._has(e), ge, this.name + "." + l(e) + "?", !1)),
                this._hasMap.set(e, r),
                wt(r, function () {
                  return t._hasMap.delete(e);
                })),
              n.get()
            );
          }),
          (C.prototype.set = function (e, t) {
            var r = this._has(e);
            if (v(this)) {
              var n = w(this, {
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
          (C.prototype.delete = function (e) {
            var t,
              r,
              n = this;
            if (
              (Be(this._keysAtom), v(this)) &&
              !(r = w(this, { type: "delete", object: this, name: e }))
            )
              return !1;
            return (
              !!this._has(e) &&
              ((r = (t = T(this))
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(e).value,
                    name: e,
                  }
                : null),
              _(function () {
                n._keysAtom.reportChanged(),
                  n._updateHasMapEntry(e, !1),
                  n._data.get(e).setNewValue(void 0),
                  n._data.delete(e);
              }),
              t && j(this, r),
              !0)
            );
          }),
          (C.prototype._updateHasMapEntry = function (e, t) {
            e = this._hasMap.get(e);
            e && e.setNewValue(t);
          }),
          (C.prototype._updateValue = function (e, t) {
            var r,
              n = this._data.get(e);
            (t = n.prepareNewValue(t)) !== b.UNCHANGED &&
              ((e = (r = T(this))
                ? {
                    type: "update",
                    object: this,
                    oldValue: n.value,
                    name: e,
                    newValue: t,
                  }
                : null),
              n.setNewValue(t),
              r && j(this, e));
          }),
          (C.prototype._addValue = function (t, r) {
            var n = this,
              e =
                (Be(this._keysAtom),
                _(function () {
                  var e = new Ge(r, n.enhancer, n.name + "." + l(t), !1);
                  n._data.set(t, e),
                    (r = e.value),
                    n._updateHasMapEntry(t, !0),
                    n._keysAtom.reportChanged();
                }),
                T(this)),
              o = e
                ? { type: "add", object: this, name: t, newValue: r }
                : null;
            e && j(this, o);
          }),
          (C.prototype.get = function (e) {
            return this.has(e)
              ? this.dehanceValue(this._data.get(e).get())
              : this.dehanceValue(void 0);
          }),
          (C.prototype.dehanceValue = function (e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e;
          }),
          (C.prototype.keys = function () {
            return this._keysAtom.reportObserved(), this._data.keys();
          }),
          (C.prototype.values = function () {
            var r = this,
              n = this.keys();
            return hr({
              next: function () {
                var e = n.next(),
                  t = e.done,
                  e = e.value;
                return { done: t, value: t ? void 0 : r.get(e) };
              },
            });
          }),
          (C.prototype.entries = function () {
            var r = this,
              n = this.keys();
            return hr({
              next: function () {
                var e = n.next(),
                  t = e.done,
                  e = e.value;
                return { done: t, value: t ? void 0 : [e, r.get(e)] };
              },
            });
          }),
          (C.prototype[((Jt = u), Symbol.iterator)] = function () {
            return this.entries();
          }),
          (C.prototype.forEach = function (e, t) {
            var r, n;
            try {
              for (var o = E(this), i = o.next(); !i.done; i = o.next()) {
                var a = oe(i.value, 2),
                  s = a[0],
                  l = a[1];
                e.call(t, l, s, this);
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
          (C.prototype.merge = function (t) {
            var r = this;
            return (
              x(t) && (t = t.toJS()),
              _(function () {
                var e = ze(!0);
                try {
                  H(t)
                    ? K(t).forEach(function (e) {
                        return r.set(e, t[e]);
                      })
                    : Array.isArray(t)
                    ? t.forEach(function (e) {
                        var e = oe(e, 2),
                          t = e[0],
                          e = e[1];
                        return r.set(t, e);
                      })
                    : G(t)
                    ? (t.constructor !== Map &&
                        S(
                          "Cannot initialize from classes that inherit from Map: " +
                            t.constructor.name
                        ),
                      t.forEach(function (e, t) {
                        return r.set(t, e);
                      }))
                    : null != t && S("Cannot initialize map from " + t);
                } finally {
                  Ve(e);
                }
              }),
              this
            );
          }),
          (C.prototype.clear = function () {
            var i = this;
            _(function () {
              Me(function () {
                var t, e;
                try {
                  for (
                    var r = E(i.keys()), n = r.next();
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
          (C.prototype.replace = function (v) {
            var w = this;
            return (
              _(function () {
                var t,
                  e,
                  r,
                  n,
                  o = (function (e) {
                    if (G(e) || x(e)) return e;
                    if (Array.isArray(e)) return new Map(e);
                    if (H(e)) {
                      var t,
                        r = new Map();
                      for (t in e) r.set(t, e[t]);
                      return r;
                    }
                    return S("Cannot convert to map from '" + e + "'");
                  })(v),
                  i = new Map(),
                  a = !1;
                try {
                  for (
                    var s = E(w._data.keys()), l = s.next();
                    !l.done;
                    l = s.next()
                  ) {
                    var u = l.value;
                    o.has(u) ||
                      (w.delete(u)
                        ? (a = !0)
                        : ((d = w._data.get(u)), i.set(u, d)));
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    l && !l.done && (e = s.return) && e.call(s);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                try {
                  for (
                    var c = E(o.entries()), p = c.next();
                    !p.done;
                    p = c.next()
                  ) {
                    var f,
                      g = oe(p.value, 2),
                      u = g[0],
                      d = g[1],
                      h = w._data.has(u);
                    w.set(u, d),
                      w._data.has(u) &&
                        ((f = w._data.get(u)), i.set(u, f), h || (a = !0));
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
                  if (w._data.size !== i.size) w._keysAtom.reportChanged();
                  else
                    for (
                      var b = w._data.keys(),
                        m = i.keys(),
                        y = b.next(),
                        _ = m.next();
                      !y.done;

                    ) {
                      if (y.value !== _.value) {
                        w._keysAtom.reportChanged();
                        break;
                      }
                      (y = b.next()), (_ = m.next());
                    }
                w._data = i;
              }),
              this
            );
          }),
          Object.defineProperty(C.prototype, "size", {
            get: function () {
              return this._keysAtom.reportObserved(), this._data.size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (C.prototype.toPOJO = function () {
            var t,
              e,
              r = {};
            try {
              for (var n = E(this), o = n.next(); !o.done; o = n.next()) {
                var i = oe(o.value, 2),
                  a = i[0],
                  s = i[1];
                r["symbol" == typeof a ? a : l(a)] = s;
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
          (C.prototype.toJS = function () {
            return new Map(this);
          }),
          (C.prototype.toJSON = function () {
            return this.toPOJO();
          }),
          (C.prototype.toString = function () {
            var t = this;
            return (
              this.name +
              "[{ " +
              Array.from(this.keys())
                .map(function (e) {
                  return l(e) + ": " + t.get(e);
                })
                .join(", ") +
              " }]"
            );
          }),
          (C.prototype.observe = function (e, t) {
            return Kt(this, e);
          }),
          (C.prototype.intercept = function (e) {
            return qt(this, e);
          }),
          C);
      function C(e, t, r) {
        if (
          (void 0 === t && (t = fe),
          void 0 === r && (r = "ObservableMap@" + h()),
          (this.enhancer = t),
          (this.name = r),
          (this[Jt] = Zt),
          (this._keysAtom = ee(this.name + ".keys()")),
          (this[Symbol.toStringTag] = "Map"),
          "function" != typeof Map)
        )
          throw new Error(
            "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js"
          );
        (this._data = new Map()), (this._hasMap = new Map()), this.merge(e);
      }
      var tr,
        x = e("ObservableMap", er),
        rr = {},
        nr =
          ((M.prototype.dehanceValue = function (e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e;
          }),
          (M.prototype.clear = function () {
            var i = this;
            _(function () {
              Me(function () {
                var t, e;
                try {
                  for (
                    var r = E(i._data.values()), n = r.next();
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
          (M.prototype.forEach = function (e, t) {
            var r, n;
            try {
              for (var o = E(this), i = o.next(); !i.done; i = o.next()) {
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
          Object.defineProperty(M.prototype, "size", {
            get: function () {
              return this._atom.reportObserved(), this._data.size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (M.prototype.add = function (e) {
            var t,
              r,
              n = this;
            if (
              (Be(this._atom), v(this)) &&
              !(r = w(this, { type: "add", object: this, newValue: e }))
            )
              return this;
            return (
              this.has(e) ||
                (_(function () {
                  n._data.add(n.enhancer(e, void 0)), n._atom.reportChanged();
                }),
                (r = (t = T(this))
                  ? { type: "add", object: this, newValue: e }
                  : null),
                t && j(this, r)),
              this
            );
          }),
          (M.prototype.delete = function (e) {
            var t,
              r,
              n = this;
            if (
              v(this) &&
              !(r = w(this, { type: "delete", object: this, oldValue: e }))
            )
              return !1;
            return (
              !!this.has(e) &&
              ((r = (t = T(this))
                ? { type: "delete", object: this, oldValue: e }
                : null),
              _(function () {
                n._atom.reportChanged(), n._data.delete(e);
              }),
              t && j(this, r),
              !0)
            );
          }),
          (M.prototype.has = function (e) {
            return (
              this._atom.reportObserved(), this._data.has(this.dehanceValue(e))
            );
          }),
          (M.prototype.entries = function () {
            var t = 0,
              r = Array.from(this.keys()),
              n = Array.from(this.values());
            return hr({
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
          (M.prototype.keys = function () {
            return this.values();
          }),
          (M.prototype.values = function () {
            this._atom.reportObserved();
            var e = this,
              t = 0,
              r = Array.from(this._data.values());
            return hr({
              next: function () {
                return t < r.length
                  ? { value: e.dehanceValue(r[t++]), done: !1 }
                  : { done: !0 };
              },
            });
          }),
          (M.prototype.replace = function (t) {
            var r = this;
            return (
              I(t) && (t = t.toJS()),
              _(function () {
                var e = ze(!0);
                try {
                  Array.isArray(t)
                    ? (r.clear(),
                      t.forEach(function (e) {
                        return r.add(e);
                      }))
                    : q(t)
                    ? (r.clear(),
                      t.forEach(function (e) {
                        return r.add(e);
                      }))
                    : null != t && S("Cannot initialize set from " + t);
                } finally {
                  Ve(e);
                }
              }),
              this
            );
          }),
          (M.prototype.observe = function (e, t) {
            return Kt(this, e);
          }),
          (M.prototype.intercept = function (e) {
            return qt(this, e);
          }),
          (M.prototype.toJS = function () {
            return new Set(this);
          }),
          (M.prototype.toString = function () {
            return this.name + "[ " + Array.from(this).join(", ") + " ]";
          }),
          (M.prototype[((tr = u), Symbol.iterator)] = function () {
            return this.values();
          }),
          M);
      function M(e, r, n) {
        if (
          (void 0 === r && (r = fe),
          void 0 === n && (n = "ObservableSet@" + h()),
          (this.name = n),
          (this[tr] = rr),
          (this._data = new Set()),
          (this._atom = ee(this.name)),
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
      var I = e("ObservableSet", nr),
        or =
          ((k.prototype.read = function (e) {
            return this.values.get(e).get();
          }),
          (k.prototype.write = function (e, t) {
            var r,
              n,
              o = this.target,
              i = this.values.get(e);
            if (i instanceof Ke) i.set(t);
            else {
              if (v(this)) {
                if (
                  !(n = w(this, {
                    type: "update",
                    object: this.proxy || o,
                    name: e,
                    newValue: t,
                  }))
                )
                  return;
                t = n.newValue;
              }
              (t = i.prepareNewValue(t)) !== b.UNCHANGED &&
                ((n = (r = T(this))
                  ? {
                      type: "update",
                      object: this.proxy || o,
                      oldValue: i.value,
                      name: e,
                      newValue: t,
                    }
                  : null),
                i.setNewValue(t),
                r && j(this, n));
            }
          }),
          (k.prototype.has = function (e) {
            var t,
              r = this.pendingKeys || (this.pendingKeys = new Map()),
              n = r.get(e);
            return (
              n ||
                ((t = !!this.values.get(e)),
                (n = new Ge(t, ge, this.name + "." + l(e) + "?", !1)),
                r.set(e, n)),
              n.get()
            );
          }),
          (k.prototype.addObservableProp = function (e, t, r) {
            void 0 === r && (r = this.defaultEnhancer);
            var n = this.target;
            if (v(this)) {
              var o = w(this, {
                object: this.proxy || n,
                name: e,
                type: "add",
                newValue: t,
              });
              if (!o) return;
              t = o.newValue;
            }
            var i,
              o = new Ge(t, r, this.name + "." + l(e), !1);
            this.values.set(e, o),
              (t = o.value),
              Object.defineProperty(
                n,
                e,
                ar[(i = e)] ||
                  (ar[i] = {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                      return this[u].read(i);
                    },
                    set: function (e) {
                      this[u].write(i, e);
                    },
                  })
              ),
              this.notifyPropertyAddition(e, t);
          }),
          (k.prototype.addComputedProp = function (e, t, r) {
            var n,
              o = this.target;
            (r.name = r.name || this.name + "." + l(t)),
              this.values.set(t, new Ke(r)),
              (e !== o &&
                ((r = e),
                (r = Object.getOwnPropertyDescriptor(r, t)) &&
                  (!1 === r.configurable || !1 === r.writable))) ||
                Object.defineProperty(
                  e,
                  t,
                  sr[(n = t)] ||
                    (sr[n] = {
                      configurable: b.computedConfigurable,
                      enumerable: !1,
                      get: function () {
                        return lr(this).read(n);
                      },
                      set: function (e) {
                        lr(this).write(n, e);
                      },
                    })
                );
          }),
          (k.prototype.remove = function (e) {
            if (this.values.has(e)) {
              var t = this.target;
              if (v(this))
                if (
                  !(a = w(this, {
                    object: this.proxy || t,
                    name: e,
                    type: "remove",
                  }))
                )
                  return;
              try {
                f();
                var r,
                  n = T(this),
                  o = this.values.get(e),
                  i = o && o.get(),
                  a =
                    (o && o.set(void 0),
                    this.keysAtom.reportChanged(),
                    this.values.delete(e),
                    !this.pendingKeys ||
                      ((r = this.pendingKeys.get(e)) && r.set(!1)),
                    delete this.target[e],
                    n
                      ? {
                          type: "remove",
                          object: this.proxy || t,
                          oldValue: i,
                          name: e,
                        }
                      : null);
                n && j(this, a);
              } finally {
                g();
              }
            }
          }),
          (k.prototype.illegalAccess = function (e, t) {
            console.warn(
              "Property '" +
                t +
                "' of '" +
                e +
                "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner"
            );
          }),
          (k.prototype.observe = function (e, t) {
            return Kt(this, e);
          }),
          (k.prototype.intercept = function (e) {
            return qt(this, e);
          }),
          (k.prototype.notifyPropertyAddition = function (e, t) {
            var r = T(this),
              t = r
                ? {
                    type: "add",
                    object: this.proxy || this.target,
                    name: e,
                    newValue: t,
                  }
                : null;
            r && j(this, t),
              this.pendingKeys && (r = this.pendingKeys.get(e)) && r.set(!0),
              this.keysAtom.reportChanged();
          }),
          (k.prototype.getKeys = function () {
            this.keysAtom.reportObserved();
            var t,
              e,
              r = [];
            try {
              for (
                var n = E(this.values), o = n.next();
                !o.done;
                o = n.next()
              ) {
                var i = oe(o.value, 2),
                  a = i[0];
                i[1] instanceof Ge && r.push(a);
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
          k);
      function k(e, t, r, n) {
        void 0 === t && (t = new Map()),
          (this.target = e),
          (this.values = t),
          (this.name = r),
          (this.defaultEnhancer = n),
          (this.keysAtom = new J(r + ".keys"));
      }
      function ir(e, t, r) {
        if (
          (void 0 === t && (t = ""),
          void 0 === r && (r = fe),
          Object.prototype.hasOwnProperty.call(e, u))
        )
          return e[u];
        t =
          (t = H(e)
            ? t
            : (e.constructor.name || "ObservableObject") + "@" + h()) ||
          "ObservableObject@" + h();
        t = new or(e, new Map(), l(t), r);
        return $(e, u, t), t;
      }
      var ar = Object.create(null),
        sr = Object.create(null);
      function lr(e) {
        var t = e[u];
        return t || (ce(e), e[u]);
      }
      var ur = e("ObservableObjectAdministration", or);
      function R(e) {
        return !!V(e) && (ce(e), ur(e[u]));
      }
      function N(e, t) {
        if ("object" == typeof e && null !== e) {
          if (B(e)) return void 0 !== t && S(!1), e[u].atom;
          if (I(e)) return e[u];
          var r, n;
          if (x(e))
            return (
              (r = e),
              void 0 === t
                ? r._keysAtom
                : ((n = r._data.get(t) || r._hasMap.get(t)) || S(!1), n)
            );
          if ((ce(e), t && !e[u] && e[t], R(e)))
            return t ? ((n = e[u].values.get(t)) || S(!1), n) : S(!1);
          if (Z(e) || Ye(e) || ct(e)) return e;
        } else if ("function" == typeof e && ct(e[u])) return e[u];
        return S(!1);
      }
      function cr(e, t) {
        return (
          e || S("Expecting some object"),
          void 0 !== t
            ? cr(N(e, t))
            : Z(e) || Ye(e) || ct(e) || x(e) || I(e)
            ? e
            : (ce(e), e[u] || void S(!1))
        );
      }
      var pr = Object.prototype.toString;
      function fr(e, t, r) {
        return (function e(t, r, n, o, i) {
          if (t === r) return 0 !== t || 1 / t == 1 / r;
          if (null == t || null == r) return !1;
          if (t != t) return r != r;
          var a = typeof t;
          if ("function" != a && "object" != a && "object" != typeof r)
            return !1;
          a = pr.call(t);
          if (a !== pr.call(r)) return !1;
          switch (a) {
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
          t = gr(t);
          r = gr(r);
          a = "[object Array]" === a;
          if (!a) {
            if ("object" != typeof t || "object" != typeof r) return !1;
            var s = t.constructor,
              l = r.constructor;
            if (
              s !== l &&
              !(
                "function" == typeof s &&
                s instanceof s &&
                "function" == typeof l &&
                l instanceof l
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
          var u = o.length;
          for (; u--; ) if (o[u] === t) return i[u] === r;
          o.push(t);
          i.push(r);
          if (a) {
            if ((u = t.length) !== r.length) return !1;
            for (; u--; ) if (!e(t[u], r[u], n - 1, o, i)) return !1;
          } else {
            var c = Object.keys(t),
              p = void 0;
            if (((u = c.length), Object.keys(r).length !== u)) return !1;
            for (; u--; )
              if (((p = c[u]), !dr(r, p) || !e(t[p], r[p], n - 1, o, i)))
                return !1;
          }
          o.pop();
          i.pop();
          return !0;
        })(e, t, (r = void 0 === r ? -1 : r));
      }
      function gr(e) {
        return B(e)
          ? e.slice()
          : G(e) || x(e) || q(e) || I(e)
          ? Array.from(e.entries())
          : e;
      }
      function dr(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function hr(e) {
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
          spy: pt,
          extras: {
            getDebugName: function (e, t) {
              return (t =
                void 0 !== t ? N(e, t) : (R(e) || x(e) || I(e) ? cr : N)(e))
                .name;
            },
          },
          $mobx: u,
        });
    }.call(this, yr("8oxB"), yr("yLpj"));
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
    function a(t) {
      if (r === setTimeout) return setTimeout(t, 0);
      if ((r === o || !r) && setTimeout) return (r = setTimeout)(t, 0);
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
    var s,
      l = [],
      u = !1,
      c = -1;
    function p() {
      u &&
        s &&
        ((u = !1), s.length ? (l = s.concat(l)) : (c = -1), l.length && f());
    }
    function f() {
      if (!u) {
        for (var e = a(p), t = ((u = !0), l.length); t; ) {
          for (s = l, l = []; ++c < t; ) s && s[c].run();
          (c = -1), (t = l.length);
        }
        (s = null),
          (u = !1),
          !(function (t) {
            if (n === clearTimeout) return clearTimeout(t);
            if ((n === i || !n) && clearTimeout) return (n = clearTimeout)(t);
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
      l.push(new g(e, t)), 1 !== l.length || u || a(f);
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
  "9ysx": function (e, t, r) {
    "use strict";
  },
  B5xR: function (e, t, r) {},
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
      var e,
        r = t.transitional,
        n =
          (void 0 !== r &&
            f.assertOptions(
              r,
              {
                silentJSONParsing: g.transitional(g.boolean, "1.0.0"),
                forcedJSONParsing: g.transitional(g.boolean, "1.0.0"),
                clarifyTimeoutError: g.transitional(g.boolean, "1.0.0"),
              },
              !1
            ),
          []),
        o = !0,
        i =
          (this.interceptors.request.forEach(function (e) {
            ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
              ((o = o && e.synchronous), n.unshift(e.fulfilled, e.rejected));
          }),
          []);
      if (
        (this.interceptors.response.forEach(function (e) {
          i.push(e.fulfilled, e.rejected);
        }),
        o)
      ) {
        for (var a = t; n.length; ) {
          var s = n.shift(),
            l = n.shift();
          try {
            a = s(a);
          } catch (e) {
            l(e);
            break;
          }
        }
        try {
          e = c(a);
        } catch (e) {
          return Promise.reject(e);
        }
        for (; i.length; ) e = e.then(i.shift(), i.shift());
      } else {
        var u = [c, void 0];
        for (
          Array.prototype.unshift.apply(u, n),
            u = u.concat(i),
            e = Promise.resolve(t);
          u.length;

        )
          e = e.then(u.shift(), u.shift());
      }
      return e;
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
  CqEE: function (e, t, r) {
    "use strict";
  },
  DfZB: function (e, t, r) {
    "use strict";
    e.exports = function (t) {
      return function (e) {
        return t.apply(null, e);
      };
    };
  },
  Dvx3: function (e, t, r) {
    "use strict";
  },
  E6du: function (e, t, r) {},
  Gp1o: function (e, T, j) {
    "use strict";
    !function (e) {
      j.d(T, "a", function () {
        return v;
      });
      function l() {}
      var u = j("2vnA");
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
        i = "pending",
        a = "fulfilled",
        s = "rejected";
      function p(e) {
        switch (this.state) {
          case i:
            return e.pending && e.pending(this.value);
          case s:
            return e.rejected && e.rejected(this.value);
          case a:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
        }
      }
      function f(e, t) {
        if (
          (c(arguments.length <= 2, "fromPromise expects up to two arguments"),
          c(
            "function" == typeof e ||
              ("object" == typeof e && e && "function" == typeof e.then),
            "Please pass a promise or function to fromPromise"
          ),
          !0 === e.isPromiseBasedObservable)
        )
          return e;
        var r = (e = "function" == typeof e ? new Promise(e) : e),
          e =
            (e.then(
              Object(u.k)("observableFromPromise-resolve", function (e) {
                (r.value = e), (r.state = a);
              }),
              Object(u.k)("observableFromPromise-reject", function (e) {
                (r.value = e), (r.state = s);
              })
            ),
            (r.isPromiseBasedObservable = !0),
            (r.case = p),
            t && t.state === a ? t.value : void 0);
        return Object(u.q)(r, { value: e, state: i }, {}, { deep: !1 }), r;
      }
      ((n = f).reject = Object(u.k)("fromPromise.reject", function (e) {
        var t = n(Promise.reject(e));
        return (t.state = s), (t.value = e), t;
      })),
        (n.resolve = Object(u.k)("fromPromise.resolve", function (e) {
          void 0 === e && (e = void 0);
          var t = n(Promise.resolve(e));
          return (t.state = a), (t.value = e), t;
        }));
      function g(e, t, r) {
        void 0 === t && (t = l);
        function n() {
          o && ((o = !1), t());
        }
        var o = !1,
          i = !1,
          a = (r = void 0 === r ? void 0 : r),
          s = Object(u.o)(
            "ResourceBasedObservable",
            function () {
              c(!o && !i),
                (o = !0),
                e(function (e) {
                  Object(u.d)(!0, function () {
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
      var d = function (e, t, r, n) {
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
      (h.prototype.dispose = function () {
        this.subscription && this.subscription.unsubscribe();
      }),
        (h.prototype.next = function (e) {
          this.current = e;
        }),
        (h.prototype.complete = function () {
          this.dispose();
        }),
        (h.prototype.error = function (e) {
          (this.current = e), this.dispose();
        }),
        d([u.B.ref], h.prototype, "current", void 0),
        d([u.k.bound], h.prototype, "next", null),
        d([u.k.bound], h.prototype, "complete", null),
        d([u.k.bound], h.prototype, "error", null);
      function h(e, t) {
        var r = this;
        Object(u.F)(function () {
          (r.current = t), (r.subscription = e.subscribe(r));
        });
      }
      var b = function () {
          return (b =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
        d = function (e, t, r, n) {
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
        m = [
          "model",
          "reset",
          "submit",
          "isDirty",
          "isPropertyDirty",
          "resetProperty",
        ];
      Object.defineProperty(y.prototype, "isDirty", {
        get: function () {
          return 0 < this.localValues.size;
        },
        enumerable: !1,
        configurable: !0,
      }),
        Object.defineProperty(y.prototype, "changedValues", {
          get: function () {
            return this.localValues.toJS();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (y.prototype.submit = function () {
          var n = this;
          Object(u.A)(this.localValues).forEach(function (e) {
            var t = n.localValues.get(e),
              r = n.model[e];
            Object(u.x)(r)
              ? r.replace(t)
              : Object(u.y)(r)
              ? (r.clear(), r.merge(t))
              : Object(u.v)(t) || (n.model[e] = t);
          }),
            this.localValues.clear();
        }),
        (y.prototype.reset = function () {
          this.localValues.clear();
        }),
        (y.prototype.resetProperty = function (e) {
          this.localValues.delete(e);
        }),
        d([u.m], y.prototype, "isDirty", null),
        d([u.m], y.prototype, "changedValues", null),
        d([u.k.bound], y.prototype, "submit", null),
        d([u.k.bound], y.prototype, "reset", null),
        d([u.k.bound], y.prototype, "resetProperty", null);
      function y(r) {
        var n = this;
        (this.model = r),
          (this.localValues = u.B.map({})),
          (this.localComputedValues = u.B.map({})),
          (this.isPropertyDirty = function (e) {
            return n.localValues.has(e);
          }),
          c(Object(u.z)(r), "createViewModel expects an observable object"),
          o(r)
            .filter(function (e) {
              return "constructor" !== e && !~e.indexOf("__");
            })
            .forEach(function (t) {
              var e;
              t !== u.a &&
                "__mobxDidRunLazyInitializers" !== t &&
                (c(
                  -1 === m.indexOf(t),
                  "The propertyname " +
                    t +
                    " is reserved and cannot be used with viewModels"
                ),
                Object(u.w)(r, t) &&
                  ((e = Object(u.h)(r, t).derivation),
                  n.localComputedValues.set(t, Object(u.m)(e.bind(n)))),
                (e = (e = Object.getOwnPropertyDescriptor(r, t))
                  ? { enumerable: e.enumerable }
                  : {}),
                Object.defineProperty(
                  n,
                  t,
                  b(b({}, e), {
                    configurable: !0,
                    get: function () {
                      return Object(u.w)(r, t)
                        ? n.localComputedValues.get(t).get()
                        : n.isPropertyDirty(t)
                        ? n.localValues.get(t)
                        : n.model[t];
                    },
                    set: Object(u.k)(function (e) {
                      e !== n.model[t]
                        ? n.localValues.set(t, e)
                        : n.localValues.delete(t);
                    }),
                  })
                ));
            });
      }
      var _ = {};
      function v(e) {
        return (
          void 0 === e && (e = 1e3),
          Object(u.i)()
            ? (_[e] ||
                (_[e] =
                  "number" == typeof e
                    ? ((t = e),
                      g(
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
                    : (r = g(
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
              _[e].current())
            : Date.now()
        );
        var r, t, n;
      }
      w = function (e, t) {
        return (w =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
      var w,
        S,
        d = function (e, t) {
          function r() {
            this.constructor = e;
          }
          w(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        };
      (S = u.b),
        d(E, S),
        (E.prototype.clear = function () {
          throw new Error("not supported");
        }),
        (E.prototype.delete = function (e) {
          throw new Error("not supported");
        }),
        (E.prototype.set = function (e, t) {
          throw new Error("not supported");
        }),
        (E.prototype.dispose = function () {
          this._disposeBaseObserver();
          for (var e = 0; e < this._base.length; e++) {
            var t = this._base[e];
            t[this._ogmInfoKey].reaction(), delete t[this._ogmInfoKey];
          }
        }),
        (E.prototype._getGroupArr = function (e) {
          var t = S.prototype.get.call(this, e);
          return (
            void 0 === t &&
              ((t = Object(u.B)([], {
                name: "GroupArray[" + this._keyToName(e) + "]",
                deep: !1,
              })),
              S.prototype.set.call(this, e, t)),
            t
          );
        }),
        (E.prototype._removeFromGroupArr = function (e, t) {
          var r = S.prototype.get.call(this, e);
          1 === r.length
            ? S.prototype.delete.call(this, e)
            : (t !== r.length - 1 &&
                ((r[t] = r[r.length - 1]),
                (r[t][this._ogmInfoKey].groupArrIndex = t)),
              r.length--);
        }),
        (E.prototype._addItem = function (i) {
          var a = this,
            e = this._groupBy(i),
            t = this._getGroupArr(e),
            e = {
              groupByValue: e,
              groupArrIndex: t.length,
              reaction: Object(u.E)(
                function () {
                  return a._groupBy(i);
                },
                function (e, t) {
                  var r = i[a._ogmInfoKey],
                    n =
                      (a._removeFromGroupArr(r.groupByValue, r.groupArrIndex),
                      a._getGroupArr(e)),
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
        (E.prototype._removeItem = function (e) {
          var t = e[this._ogmInfoKey];
          this._removeFromGroupArr(t.groupByValue, t.groupArrIndex),
            t.reaction(),
            delete e[this._ogmInfoKey];
        });
      function E(e, t, r) {
        var r = void 0 === r ? {} : r,
          n = r.name,
          n = void 0 === n ? "ogm" + ((1e3 * Math.random()) | 0) : n,
          r = r.keyToName,
          r =
            void 0 === r
              ? function (e) {
                  return "" + e;
                }
              : r,
          s = S.call(this) || this;
        (s._keyToName = r),
          (s._groupBy = t),
          (s._ogmInfoKey = Symbol("ogmInfo" + n)),
          (s._base = e);
        for (var o = 0; o < e.length; o++) s._addItem(e[o]);
        return (
          (s._disposeBaseObserver = Object(u.C)(s._base, function (a) {
            if ("splice" === a.type)
              Object(u.H)(function () {
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
              Object(u.H)(function () {
                s._removeItem(a.oldValue), s._addItem(a.newValue);
              });
            }
          })),
          s
        );
      }
      new Set(),
        new Set(),
        Promise.resolve(),
        "undefined" == typeof queueMicrotask && void 0 !== e && e.nextTick;
    }.call(this, j("8oxB"));
  },
  H7XF: function (e, t, r) {
    "use strict";
    (t.byteLength = function (e) {
      var e = c(e),
        t = e[0],
        e = e[1];
      return (3 * (t + e)) / 4 - e;
    }),
      (t.toByteArray = function (e) {
        var t,
          r,
          n = c(e),
          o = n[0],
          n = n[1],
          i = new u(
            (function (e, t) {
              return (3 * (e + t)) / 4 - t;
            })(o, n)
          ),
          a = 0,
          s = 0 < n ? o - 4 : o;
        for (r = 0; r < s; r += 4)
          (t =
            (l[e.charCodeAt(r)] << 18) |
            (l[e.charCodeAt(r + 1)] << 12) |
            (l[e.charCodeAt(r + 2)] << 6) |
            l[e.charCodeAt(r + 3)]),
            (i[a++] = (t >> 16) & 255),
            (i[a++] = (t >> 8) & 255),
            (i[a++] = 255 & t);
        2 === n &&
          ((t = (l[e.charCodeAt(r)] << 2) | (l[e.charCodeAt(r + 1)] >> 4)),
          (i[a++] = 255 & t));
        1 === n &&
          ((t =
            (l[e.charCodeAt(r)] << 10) |
            (l[e.charCodeAt(r + 1)] << 4) |
            (l[e.charCodeAt(r + 2)] >> 2)),
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
        l = [],
        u = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        o = 0,
        i = n.length;
      o < i;
      ++o
    )
      (s[o] = n[o]), (l[n.charCodeAt(o)] = o);
    function c(e) {
      var t = e.length;
      if (0 < t % 4)
        throw new Error("Invalid string. Length must be a multiple of 4");
      (e = e.indexOf("=")),
        (t = (e = -1 === e ? t : e) === t ? 0 : 4 - (e % 4));
      return [e, t];
    }
    (l["-".charCodeAt(0)] = 62), (l["_".charCodeAt(0)] = 63);
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
  JEQr: function (l, e, u) {
    "use strict";
    !function (e) {
      var o = u("xTJ+"),
        i = u("yK9s"),
        n = u("OH9c"),
        t = { "Content-Type": "application/x-www-form-urlencoded" };
      function a(e, t) {
        !o.isUndefined(e) &&
          o.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      var r,
        s = {
          transitional: {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
          },
          adapter: (r =
            "undefined" != typeof XMLHttpRequest ||
            (void 0 !== e &&
              "[object process]" === Object.prototype.toString.call(e))
              ? u("tQ2B")
              : r),
          transformRequest: [
            function (e, t) {
              if (
                (i(t, "Accept"),
                i(t, "Content-Type"),
                !(
                  o.isFormData(e) ||
                  o.isArrayBuffer(e) ||
                  o.isBuffer(e) ||
                  o.isStream(e) ||
                  o.isFile(e) ||
                  o.isBlob(e)
                ))
              ) {
                if (o.isArrayBufferView(e)) return e.buffer;
                if (o.isURLSearchParams(e))
                  return (
                    a(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString()
                  );
                if (
                  o.isObject(e) ||
                  (t && "application/json" === t["Content-Type"])
                ) {
                  a(t, "application/json");
                  var t = e,
                    r = void 0,
                    n = void 0;
                  if (o.isString(t))
                    try {
                      return (r || JSON.parse)(t), o.trim(t);
                    } catch (e) {
                      if ("SyntaxError" !== e.name) throw e;
                    }
                  return (n || JSON.stringify)(t);
                }
              }
              return e;
            },
          ],
          transformResponse: [
            function (e) {
              var t = this.transitional,
                r = t && t.silentJSONParsing,
                t = t && t.forcedJSONParsing,
                r = !r && "json" === this.responseType;
              if (r || (t && o.isString(e) && e.length))
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (r) {
                    if ("SyntaxError" === e.name)
                      throw n(e, this, "E_JSON_PARSE");
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
      o.forEach(["delete", "get", "head"], function (e) {
        s.headers[e] = {};
      }),
        o.forEach(["post", "put", "patch"], function (e) {
          s.headers[e] = o.merge(t);
        }),
        (l.exports = s);
    }.call(this, u("8oxB"));
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
      var n;
      return (
        !t ||
          ((r = r
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
              n.join("&"))) &&
            (-1 !== (t = e.indexOf("#")) && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + r))),
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
*/ var l = Object.getOwnPropertySymbols,
      u = Object.prototype.hasOwnProperty,
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
              u.call(r, i) && (n[i] = r[i]);
            if (l)
              for (var a = l(r), s = 0; s < a.length; s++)
                c.call(r, a[s]) && (n[a[s]] = r[a[s]]);
          }
          return n;
        };
  },
  NJki: function (e, t, r) {
    "use strict";
    r("l4ti");
  },
  NMF7: function (e, t, r) {
    "use strict";
    r("0N1H"), r("B5xR"), r("CqEE");
    var n = r("bbDT"),
      o =
        (r.d(t, "ESteamRealm", function () {
          return n.a;
        }),
        r("0D2c"),
        r("NJki"),
        r("l4ti"));
    r.d(t, "EBrowserType", function () {
      return o.a;
    }),
      r("9ysx"),
      r("dOeV"),
      r("bpGV"),
      r("Dvx3"),
      r("gJ0y"),
      r("+gJN"),
      r("E6du"),
      r("Uf5Q"),
      r("ldtI"),
      r("S4yt"),
      r("dPTY"),
      r("iE8r"),
      r("YtLl"),
      r("/6ik");
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
  R7aG: function (e, l, u) {
    "use strict";
    !function (e) {
      u.d(l, "d", function () {
        return n;
      }),
        u.d(l, "c", function () {
          return o;
        }),
        u.d(l, "b", function () {
          return i;
        }),
        u.d(l, "a", function () {
          return s;
        });
      var t = u("q1tI"),
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
    }.call(this, u("yLpj"));
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
  S4yt: function (e, t) {},
  SgzI: function (e) {
    e.exports = JSON.parse(
      '{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}'
    );
  },
  Sj0R: function (P, e, t) {
    "use strict";
    t.r(e);
    function r(e, t, r, n) {
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
    function D(e, a, s, l) {
      return new (s = s || Promise)(function (r, t) {
        function n(e) {
          try {
            i(l.next(e));
          } catch (e) {
            t(e);
          }
        }
        function o(e) {
          try {
            i(l.throw(e));
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
        i((l = l.apply(e, a || [])).next());
      });
    }
    var p = t("2vnA"),
      n = t("i8i4");
    function U(e, t, ...r) {
      console.assert
        ? 0 == r.length
          ? console.assert(!!e, t)
          : console.assert(!!e, t, ...r)
        : e || console.warn(t, ...r);
    }
    function F(e, t) {
      L(e, (e) => t == e);
    }
    function L(e, t) {
      t = e.findIndex(t);
      return 0 <= t && (e.splice(t, 1), !0);
    }
    function W() {
      {
        var e = document;
        const t = {},
          r = e.querySelectorAll('link[rel="stylesheet"]');
        return (
          r.forEach((e) => {
            t[e.href] = e;
          }),
          t
        );
      }
    }
    function z(e, t) {
      V(e.document, t, !0);
    }
    function V(e, t, r) {
      const n = Object.assign({}, t),
        o = e.getElementsByTagName("head")[0];
      var i,
        a = o.getElementsByTagName("link"),
        s = a.length;
      for (let e = 0; e < s; ++e) {
        const c = a[e];
        n[c.href] ? delete n[c.href] : r && c.parentNode.removeChild(c);
      }
      let l = [];
      for (i in n) {
        const p = n[i],
          f = e.createElement("link");
        for (let e = 0; e < p.attributes.length; e++) {
          var u = p.attributes.item(e);
          f.setAttribute(u.name, u.value);
        }
        l.push(f);
      }
      o.prepend(...l), l;
    }
    function o(e, t, r) {
      return {
        get() {
          var e = r.value.bind(this);
          return (
            this.hasOwnProperty(t) ||
              Object.defineProperty(this, t, { value: e }),
            e
          );
        },
      };
    }
    var i = t("NMF7"),
      s = t("q1tI"),
      f = t.n(s),
      H = t("0N1H");
    function $(e) {
      if (!G() || !window.document.cookie) return null;
      e = document.cookie.match("(^|; )" + e + "=([^;]*)");
      return e && e[2] ? decodeURIComponent(e[2]) : null;
    }
    function G() {
      return window.document;
    }
    const a = {
      EUNIVERSE: 0,
      WEB_UNIVERSE: "",
      LANGUAGE: "english",
      SUPPORTED_LANGUAGES: [],
      COUNTRY: "",
      AVATAR_BASE_URL: "",
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
        {
          if (!G()) return (q = q || Y());
          let e = $("sessionid");
          return (e = e || Y());
        }
      },
      FRIENDSUI_BETA: !1,
      STEAM_TV: !1,
      DEV_MODE: !1,
      IN_LIBRARY: !1,
      IN_GAMEPADUI: !1,
      ON_DECK: !1,
      IN_LOGIN: !1,
      IN_STANDALONE_KEYBOARD: !1,
    };
    let q;
    function K() {
      let t = "";
      for (let e = 0; e < 24; e++)
        t +=
          ((r = 0),
          (n = 35),
          (r = Math.ceil(r)),
          (n = Math.floor(n)),
          (Math.floor(Math.random() * (n - r + 1)) + r).toString(36));
      var r, n;
      return t;
    }
    function Y() {
      var e = K(),
        r = "sessionid",
        n = e,
        o = 0,
        i = void 0;
      if (G()) {
        i = i || "/";
        let t = "";
        if (void 0 !== o && o) {
          let e = new Date();
          e.setTime(e.getTime() + 864e5 * o),
            (t = "; expires=" + e.toUTCString());
        }
        document.cookie =
          encodeURIComponent(r) +
          "=" +
          encodeURIComponent(n) +
          t +
          ";path=" +
          i;
      }
      return e;
    }
    t("+xJ3");
    class X {
      constructor() {
        this.m_vecCallbacks = [];
      }
      Register(e) {
        this.m_vecCallbacks.push(e);
        return {
          Unregister: () => {
            F(this.m_vecCallbacks, e);
          },
        };
      }
      Dispatch(...e) {
        for (const t of Array.from(this.m_vecCallbacks)) t(...e);
      }
      ClearAllCallbacks() {
        this.m_vecCallbacks = [];
      }
      CountRegistered() {
        return this.m_vecCallbacks.length;
      }
    }
    r(
      [o],
      class {
        Schedule(e, t) {
          this.IsScheduled() && this.Cancel(),
            (this.m_fnCallback = t),
            (this.m_schTimer = window.setTimeout(this.ScheduledInternal, e));
        }
        IsScheduled() {
          return void 0 !== this.m_schTimer;
        }
        Cancel() {
          this.m_schTimer &&
            (clearTimeout(this.m_schTimer), (this.m_schTimer = void 0));
        }
        ScheduledInternal() {
          this.m_schTimer = void 0;
          let e = this.m_fnCallback;
          (this.m_fnCallback = void 0), e();
        }
      }.prototype,
      "ScheduledInternal",
      null
    );
    t("Gp1o");
    ((e = b = b || {})[(e.None = 0)] = "None"),
      (e[(e.Ago = 1)] = "Ago"),
      (e[(e.Remaining = 2)] = "Remaining");
    new Map();
    new Map(), new Map();
    new Map(), new Map(), new Map(), new Map(), new Map();
    class l {
      constructor() {
        (this.m_mapTokens = new Map()),
          (this.m_mapFallbackTokens = new Map()),
          (this.m_cbkTokensChanged = new X());
      }
      static InstallErrorReportingStore(e) {
        this.sm_ErrorReportingStore = e;
      }
      static GetLanguageFallback(e) {
        return "sc_schinese" === e ? "schinese" : "english";
      }
      static GetELanguageFallback(e) {
        return 29 === e ? 6 : 0;
      }
      static IsELanguageValidInRealm(e, t) {
        return (
          t ===
          (29 === e
            ? i.ESteamRealm.k_ESteamRealmChina
            : i.ESteamRealm.k_ESteamRealmGlobal)
        );
      }
      static GetLanguageListForRealms(t) {
        const r = new Array();
        for (let e = 0; e < 30; e++)
          for (const n of t)
            if (this.IsELanguageValidInRealm(e, n)) {
              r.push(e);
              break;
            }
        return r;
      }
      InitFromObjects(e, t, r, n, o) {
        o || this.m_mapTokens.clear();
        (o = Object.assign(Object.assign({}, r || {}), e)),
          (r = Object.assign(Object.assign({}, n || {}), t || {}));
        this.AddTokens(o, r), this.m_cbkTokensChanged.Dispatch();
      }
      InitDirect(e, t) {
        this.m_mapTokens.clear(),
          this.m_mapFallbackTokens.clear(),
          this.AddTokens(e, t),
          this.m_cbkTokensChanged.Dispatch();
      }
      AddTokens(t, r) {
        Object.keys(t).forEach((e) => {
          this.m_mapTokens.set(e, t[e]);
        }),
          r &&
            Object.keys(r).forEach((e) => {
              this.m_mapTokens.has(e) || this.m_mapTokens.set(e, r[e]),
                this.m_mapFallbackTokens.set(e, r[e]);
            });
      }
      GetTokensChangedCallbackList() {
        return this.m_cbkTokensChanged;
      }
      GetPreferredLocales() {
        return (
          this.m_rgLocalesToUse ||
          (navigator && navigator.languages ? navigator.languages : ["en-US"])
        );
      }
      GetELanguageFallbackOrder(e = null) {
        let t = new Array(),
          r = (t.push(Object(H.a)(a.LANGUAGE)), a.SUPPORTED_LANGUAGES || []);
        if (
          (r.forEach((e) => {
            e.value != a.LANGUAGE && t.push(Object(H.a)(e.value));
          }),
          e)
        ) {
          const r = l.GetLanguageListForRealms(e);
          r.forEach((e) => {
            -1 == t.indexOf(e) && t.push(e);
          });
        }
        return t;
      }
      SetPreferredLocales(e) {
        this.m_rgLocalesToUse = e;
      }
      LocalizeString(e, t) {
        if (e && 0 != e.length && "#" == e.charAt(0)) {
          var r = this.m_mapTokens.get(e.substring(1));
          if (void 0 !== r) return r;
          !t &&
            l.sm_ErrorReportingStore &&
            l.sm_ErrorReportingStore.ReportError(
              new Error(
                `Unable to find localization token '${e}' for language '${a.LANGUAGE}', ${this.m_mapTokens.size} tokens in map`
              ),
              { bIncludeMessageInIdentifier: !0 }
            );
        }
      }
      LocalizeStringFromFallback(e) {
        if (e && 0 != e.length && "#" == e.charAt(0)) {
          e = this.m_mapFallbackTokens.get(e.substring(1));
          if (void 0 !== e) return e;
        }
      }
    }
    function u(e, ...t) {
      var r = ee.LocalizeString(e);
      return void 0 === r ? e : J(r, ...t);
    }
    function J(e, ...r) {
      return (e =
        0 != r.length
          ? e.replace(/%(?:(\d+)\$)?s/g, function (e, t) {
              return t <= r.length && 1 <= t
                ? ((t = r[t - 1]), String(null == t ? "" : t))
                : e;
            })
          : e);
    }
    const Q = {
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
    var c, Z;
    const ee = new l();
    window.LocalizationManager = ee;
    class te {
      constructor(e, t, r) {
        if (((this.m_rgLoadingLinks = []), (this.m_rgLoadingLinks = []), r))
          for (let e = 0; e < r.length; e++) this.AddLink(r[e], !0);
        else {
          var n = e.getElementsByTagName("link");
          for (let e = 0; e < n.length; e++) {
            var o = n[e];
            this.AddLink(o, !1);
          }
        }
      }
      AddLink(t, e) {
        if (e) {
          let e = !1;
          try {
            (t.sheet && t.sheet.cssRules && 0 != t.sheet.cssRules.length) ||
              (e = !0);
          } catch (e) {}
          e &&
            (t.addEventListener("load", this.OnLinkLoad),
            this.m_rgLoadingLinks.push(t));
        } else
          t.addEventListener("load", this.OnLinkLoad),
            this.m_rgLoadingLinks.push(t);
      }
      SetTarget(e) {
        (this.m_fnRender = e),
          0 == this.m_rgLoadingLinks.length &&
            (this.m_fnRender(), (this.m_fnRender = void 0));
      }
      OnLinkLoad(e) {
        let t = e.currentTarget;
        t.removeEventListener("load", this.OnLinkLoad),
          F(this.m_rgLoadingLinks, e.currentTarget),
          0 == this.m_rgLoadingLinks.length &&
            (this.m_fnRender(), (this.m_fnRender = void 0));
      }
    }
    r([o], te.prototype, "OnLinkLoad", null),
      ((b = c = c || {})[(b.Minimized = 1)] = "Minimized"),
      (b[(b.Hidden = 2)] = "Hidden"),
      (b[(b.Tooltip = 4)] = "Tooltip"),
      (b[(b.ContextMenu = 8)] = "ContextMenu"),
      (b[(b.Resizable = 16)] = "Resizable");
    class g {
      constructor(e, t) {
        (this.m_bFocused = !1),
          U(
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
      UpdateParamsBeforeShow(e) {
        return e;
      }
      OnDrop(e) {
        console.log("Ignoring drop onto toplevel window", e),
          e.preventDefault(),
          e.stopPropagation();
      }
      OnDragOver(e) {
        e.preventDefault(),
          (e.dataTransfer.dropEffect = "none"),
          e.stopPropagation();
      }
      OnMessage(e) {
        "window_moved" == e.data && this.OnResize();
      }
      Show(n = !0, e = !1) {
        window.SteamClient && (this.m_rgParams.eCreationFlags |= c.Hidden),
          this.m_rgParams.eCreationFlags & c.Tooltip && (n = !1),
          this.BIsValid() &&
            (this.BIsClosed()
              ? ((this.m_popup = void 0), (this.m_element = void 0))
              : n && this.Focus(e));
        let o = d.GetExistingPopup(this.m_strName);
        if (!o || this.m_rgParams.replace_existing_popup) {
          this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams);
          let e, t, r;
          o
            ? ((t = o.m_element),
              (e = o.m_popup),
              o.ReleasePopup(),
              (r = o.m_renderWhenReady),
              d.RemoveTrackedPopup(o),
              e.removeEventListener("beforeunload", o.OnBeforeUnloadEvent),
              e.removeEventListener("unload", o.OnUnload),
              e.removeEventListener("resize", o.OnResizeEvent),
              e.removeEventListener("focus", this.OnFocusInternal),
              e.removeEventListener("blur", this.OnBlurInternal),
              e.removeEventListener("drop", o.OnDrop),
              e.removeEventListener("dragover", o.OnDragOver),
              e.removeEventListener("message", this.OnMessage))
            : (({ popup: e, element: t } = ne.CreatePopup(
                this.m_strName,
                this.m_rgParams
              )),
              (r = new te(e.document, t))),
            e &&
              t &&
              ((e.document.title = this.m_strTitle),
              e.addEventListener("beforeunload", this.OnBeforeUnloadEvent),
              e.addEventListener("unload", this.OnUnload),
              e.addEventListener("resize", this.OnResizeEvent),
              e.addEventListener("focus", this.OnFocusInternal),
              e.addEventListener("blur", this.OnBlurInternal),
              e.addEventListener("drop", this.OnDrop),
              e.addEventListener("dragover", this.OnDragOver),
              e.addEventListener("message", this.OnMessage),
              a.LANGUAGE &&
                e.document.documentElement.setAttribute(
                  "lang",
                  Q[a.LANGUAGE] || null
                ),
              (this.m_popup = e),
              (this.m_element = t),
              (this.m_renderWhenReady = r),
              this.m_renderWhenReady.SetTarget(() =>
                this.RenderInternal(this.m_popup, this.m_element, n)
              )),
            d.AddTrackedPopup(this),
            o && n && this.Focus();
        }
      }
      RemoveEventListeners() {
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
      }
      RenderInternal(e, t, r) {
        var n;
        !this.browser_info ||
          ((n = this.browser_info).m_eBrowserType !=
            i.EBrowserType.EBrowserType_OpenVROverlay &&
            n.m_eBrowserType !=
              i.EBrowserType.EBrowserType_OpenVROverlay_Dashboard) ||
          (t.ownerDocument.body.className += " VR"),
          this.Render(e, t),
          this.OnLoad(),
          e.SteamClient &&
            (r
              ? e.SteamClient.Window.BringToFront()
              : e.SteamClient.Window.ShowWindow());
      }
      OnResizeEvent() {
        this.OnResize();
      }
      OnBeforeUnloadEvent() {
        this.OnBeforeUnload();
      }
      OnUnload() {
        this.RemoveEventListeners(),
          d.RemoveTrackedPopup(this),
          this.OnClose(),
          n.unmountComponentAtNode(this.m_element);
      }
      get browser_info() {
        return this.m_rgParams.target_browser;
      }
      get window() {
        return this.m_popup;
      }
      get root_element() {
        return this.m_element;
      }
      get title() {
        return this.m_strTitle;
      }
      set title(e) {
        (this.m_strTitle = e),
          this.m_popup && (this.m_popup.document.title = this.m_strTitle);
      }
      Focus(e = !1) {
        this.m_popup &&
        void 0 !== this.m_popup.SteamClient &&
        void 0 !== this.m_popup.SteamClient.Window
          ? e
            ? this.m_popup.SteamClient.Window.SetForegroundWindow()
            : this.m_popup.SteamClient.Window.BringToFront()
          : this.m_popup && this.m_popup.focus();
      }
      Close() {
        this.m_popup && this.m_popup.close();
      }
      GetName() {
        return this.m_strName;
      }
      BIsValid() {
        return !!this.m_popup;
      }
      BIsClosed() {
        return !this.m_popup || this.m_popup.closed;
      }
      BIsVisible() {
        return (
          this.m_popup &&
          !this.m_popup.closed &&
          "visible" == this.m_popup.document.visibilityState
        );
      }
      BIsFocused() {
        return this.BIsVisible() && this.m_popup.document.hasFocus();
      }
      OnFocusInternal() {
        (this.m_bFocused = !0), this.OnFocus();
      }
      OnBlurInternal() {
        (this.m_bFocused = !1), this.OnBlur();
      }
      get focused() {
        return this.m_bFocused;
      }
      GetWindowRestoreDetails() {
        return this.m_popup && !this.m_popup.closed && this.m_popup.SteamClient
          ? new Promise((t, e) => {
              this.m_popup.SteamClient.Window.GetWindowRestoreDetails((e) => {
                t(e);
              });
            })
          : Promise.resolve("");
      }
      IsMinimized() {
        return this.m_popup &&
          !this.m_popup.closed &&
          this.m_popup.SteamClient &&
          this.m_popup.SteamClient.Window &&
          this.m_popup.SteamClient.Window.IsWindowMinimized
          ? new Promise((t, e) => {
              this.m_popup.SteamClient.Window.IsWindowMinimized((e) => {
                t(e);
              });
            })
          : Promise.resolve(!1);
      }
      ReleasePopup() {
        this.OnClose(), (this.m_popup = null);
      }
      OnBeforeUnload() {}
      OnFocus() {}
      OnBlur() {}
    }
    r([p.B], g.prototype, "m_bFocused", void 0),
      r([o], g.prototype, "OnMessage", null),
      r([o], g.prototype, "OnResizeEvent", null),
      r([o], g.prototype, "OnBeforeUnloadEvent", null),
      r([o], g.prototype, "OnUnload", null),
      r([o], g.prototype, "OnFocusInternal", null),
      r([o], g.prototype, "OnBlurInternal", null);
    class re extends g {
      constructor(e, t, r, n) {
        super(e, r), this.SetSavedDimensionsKey(t), (this.m_bExpires = n);
      }
      BIsInOverlay() {
        return (
          this.browser_info &&
          this.browser_info != { m_unPID: 0, m_nBrowserID: -1 }
        );
      }
      SetSavedDimensionsKey(e) {
        this.m_strSavedDimensionsKey = e;
      }
      UpdateParamsBeforeShow(e) {
        return (
          !this.m_strSavedDimensionsKey ||
          e.bIgnoreSavedDimensions ||
          e.strRestoreDetails
            ? e.strRestoreDetails &&
              ((this.m_strInitialSavedDimensionsKey =
                this.GetSavedDimensionsKey()),
              d.SetRestoreDetails(
                this.m_strInitialSavedDimensionsKey,
                e.strRestoreDetails,
                this.m_bExpires
              ))
            : ((this.m_strInitialSavedDimensionsKey =
                this.GetSavedDimensionsKey()),
              (e.strRestoreDetails = d.GetRestoreDetails(
                this.m_strInitialSavedDimensionsKey
              ))),
          e
        );
      }
      OnLoad() {
        this.GetWindowRestoreDetails().then((e) => {
          (this.m_strInitialRestoreDetails = e), this.OnResizeComplete(e);
        });
      }
      OnResize() {
        this.QueryAndStoreWindowPosition();
      }
      OnResizeComplete(e) {}
      QueryAndStoreWindowPosition() {
        if (this.m_strInitialRestoreDetails) {
          let r = this.GetSavedDimensionsKey();
          this.m_popup.setTimeout(() => {
            this.GetWindowRestoreDetails().then((e) => {
              var t =
                this.m_strInitialRestoreDetails == e &&
                r == this.m_strInitialSavedDimensionsKey;
              this.m_popup &&
                this.m_strSavedDimensionsKey &&
                e &&
                !t &&
                (d.SetRestoreDetails(r, e, this.m_bExpires),
                (this.m_rgParams.strRestoreDetails = e),
                (this.m_strInitialSavedDimensionsKey = r),
                this.OnResizeComplete(e));
            });
          }, 30);
        }
      }
      OnBeforeUnload() {
        this.QueryAndStoreWindowPosition(), super.OnBeforeUnload();
      }
      OnClose() {}
      SaveWindowPosition(e) {
        d.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
          (this.m_rgParams.strRestoreDetails = e);
      }
    }
    r([o], re.prototype, "QueryAndStoreWindowPosition", null);
    class ne {
      constructor() {
        var e;
        (this.m_bShuttingDown = !1),
          (this.m_mapPopups = new Map()),
          (this.m_rgShutdownCallbacks = []),
          (this.m_rgPopupCreatedCallbacks = []),
          (this.m_unCurrentAccountID = 0),
          (this.m_mapRestoreDetails = new Map()),
          (this.m_bSaveRequired = !1),
          Object({ NODE_ENV: "production", STEAM_BUILD: "buildbot" })
            .MOBILE_BUILD ||
            (window.addEventListener("beforeunload", (e) => {
              this.m_bShuttingDown = !0;
              for (var t of this.m_rgShutdownCallbacks) t();
              let r = [];
              this.m_mapPopups.forEach((e) => {
                e.BIsValid() && !e.BIsClosed() && r.push(e);
              });
              for (var n of r) n.Close();
              this.m_bSaveRequired && this.SaveSavedDimensionStore(),
                this.m_mapPopups.clear();
            }),
            U(
              (e = document.querySelector("head")),
              "Couldn't find head element"
            ),
            e &&
              ((this.m_DynamicCSSObserver = new MutationObserver(() => {
                const t = W();
                this.m_mapPopups.forEach((e) => {
                  z(e.window, t);
                });
              })),
              this.m_DynamicCSSObserver.observe(e, { childList: !0 })));
      }
      SetCurrentLoggedInAccountID(e) {
        (this.m_unCurrentAccountID = e)
          ? this.LoadSavedDimensionStore()
          : this.ClearSavedDimensionStore();
      }
      AddShutdownCallback(e) {
        this.m_rgShutdownCallbacks.push(e);
      }
      AddPopupCreatedCallback(e) {
        this.m_rgPopupCreatedCallbacks.push(e);
      }
      AddTrackedPopup(e) {
        this.m_mapPopups.set(e.GetName(), e);
        for (var t of this.m_rgPopupCreatedCallbacks) t(e);
      }
      RemoveTrackedPopup(e) {
        this.m_mapPopups.delete(e.GetName());
      }
      GetExistingPopup(e) {
        return this.m_mapPopups.get(e);
      }
      GetPopups() {
        return this.m_mapPopups.values();
      }
      ClosePopupsOwnedByBrowser(t) {
        this.m_mapPopups.forEach((e) => {
          e.browser_info &&
            e.browser_info.m_nBrowserID == t.m_nBrowserID &&
            e.browser_info.m_unPID == t.m_unPID &&
            e.Close();
        });
      }
      static CreatePopup(e, t) {
        var r = t.dimensions || {},
          n = r.width || 300,
          o = r.height || 300,
          i = t.title;
        let a = "width=" + n + ",height=" + o,
          s =
            (void 0 !== r.left && (a += ",left=" + r.left),
            void 0 !== r.top && (a += ",top=" + r.top),
            (a += ",resizeable,status=0,toolbar=0,menubar=0,location=0"),
            "about:blank"),
          l = [],
          u =
            (l.push("createflags=" + t.eCreationFlags),
            t.minWidth && l.push("minwidth=" + t.minWidth),
            t.minHeight && l.push("minheight=" + t.minHeight),
            t.target_browser &&
              (l.push("pid=" + t.target_browser.m_unPID),
              l.push("browser=" + t.target_browser.m_nBrowserID),
              l.push("browserType=" + t.target_browser.m_eBrowserType),
              t.availscreenwidth &&
                t.availscreenheight &&
                (l.push("screenavailwidth=" + t.availscreenwidth),
                l.push("screenavailheight=" + t.availscreenheight))),
            t.strVROverlayKey && l.push("vrOverlayKey=" + t.strVROverlayKey),
            t.strRestoreDetails &&
              l.push("restoredetails=" + t.strRestoreDetails),
            t.window_opener_id && l.push("openerid=" + t.window_opener_id),
            l && (s += "?" + l.join("&")),
            t.owner_window || window),
          c = u.open(s, e, a, !0);
        if (!c)
          return (
            console.log(
              "Failed to create popup.. browser popup blocker enabled?"
            ),
            {}
          );
        let p = "",
          f = (t.html_class && (p = `class="${t.html_class}"`), "");
        t.body_class && (f = `class="${t.body_class}"`);
        n = `<!DOCTYPE html><html ${p}><head><title></title></head><body ${f}><div id="popup_target"></div></body></html>`;
        return (
          c.document.write(n),
          (c.document.title = i),
          z(c, W()),
          { popup: c, element: c.document.getElementById("popup_target") }
        );
      }
      BShuttingDown() {
        return this.m_bShuttingDown;
      }
      GetLocalStorageKey() {
        return "PopupSavedDimensions_" + this.m_unCurrentAccountID;
      }
      LoadSavedDimensionStore() {
        if (this.m_unCurrentAccountID) {
          var e = this.GetLocalStorageKey(),
            e =
              ((this.m_mapRestoreDetails = void 0),
              window.localStorage.getItem(e));
          if (e)
            try {
              var t = JSON.parse(e);
              this.m_mapRestoreDetails = new Map(t);
            } catch (e) {}
          this.m_mapRestoreDetails || (this.m_mapRestoreDetails = new Map());
        }
      }
      SaveSavedDimensionStore() {
        var e, t;
        this.m_unCurrentAccountID &&
          this.m_bSaveRequired &&
          ((e = this.GetLocalStorageKey()),
          (t = JSON.stringify(Array.from(this.m_mapRestoreDetails))),
          window.localStorage.setItem(e, t),
          (this.m_bSaveRequired = !1));
      }
      DebouncedSaveSavedDimensionStore() {
        this.SaveSavedDimensionStore();
      }
      ClearSavedDimensionStore() {
        this.m_mapRestoreDetails.clear(), (this.m_bSaveRequired = !1);
      }
      GetRestoreDetails(e) {
        if (!this.m_mapRestoreDetails.has(e)) return "";
        let t = this.m_mapRestoreDetails.get(e);
        return (
          (t.last_used = Date.now()),
          (this.m_bSaveRequired = !0),
          t.strRestoreDetails
        );
      }
      SetRestoreDetails(e, t, r) {
        if (e) {
          if (t) {
            if (50 < this.m_mapRestoreDetails.size) {
              let e = null,
                t = Date.now();
              for (var n of Array.from(this.m_mapRestoreDetails.keys())) {
                var o = this.m_mapRestoreDetails.get(n);
                o.last_used < t && o.bExpires && ((t = o.last_used), (e = n));
              }
              e && this.m_mapRestoreDetails.delete(e);
            }
            t = { strRestoreDetails: t, last_used: Date.now(), bExpires: r };
            this.m_mapRestoreDetails.set(e, t);
          } else this.m_mapRestoreDetails.delete(e);
          (this.m_bSaveRequired = !0),
            this.m_bShuttingDown
              ? this.SaveSavedDimensionStore()
              : this.DebouncedSaveSavedDimensionStore();
        }
      }
    }
    r(
      [
        o,
        ((Z = 100),
        function (e, r, t) {
          const n = t.value;
          t.value = function (...e) {
            let t = this[r + "_DebounceProperties"];
            void 0 ===
            (t =
              void 0 === t
                ? (this[r + "_DebounceProperties"] = {
                    hTimer: void 0,
                    nPending: 0,
                  })
                : t).hTimer
              ? (n.apply(this, e),
                (t.hTimer = window.setInterval(() => {
                  0 < t.nPending
                    ? (n.apply(this, e), (t.nPending = 0))
                    : (window.clearInterval(t.hTimer), (t.hTimer = void 0));
                }, Z)))
              : (t.nPending += 1);
          };
        }),
      ],
      ne.prototype,
      "DebouncedSaveSavedDimensionStore",
      null
    );
    let d = new ne();
    window.g_PopupManager = d;
    var e = t("twdX"),
      h = t.n(e);
    t("vvG3");
    function oe(e) {
      e = e.color || "#FFFFFF";
      return s.createElement(
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
        s.createElement("line", {
          fill: "none",
          stroke: e,
          strokeWidth: "45",
          strokeMiterlimit: "10",
          x1: "212",
          y1: "212",
          x2: "44",
          y2: "44",
        }),
        s.createElement("line", {
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
    function ie(e) {
      e = e.color || "#020202";
      return s.createElement(
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
        s.createElement(
          "g",
          { className: "triangle" },
          s.createElement("path", {
            stroke: e,
            strokeWidth: "16",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d: "M127.9,76.632",
          }),
          s.createElement("path", {
            fill: "none",
            stroke: e,
            strokeWidth: "11",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "5",
            d: "M128.001,226.606c42.507,0,81.538,0,87.756,0c31.222,0,36.95-14.974,24.045-34.771c-6.921-10.617-78.297-122.962-89.163-140.254\tC141.859,37.613,138.542,29.393,128,29.393l0,0c-10.543,0-13.86,8.222-22.639,22.189C94.495,68.874,23.119,181.219,16.198,191.836 c-12.905,19.797-7.175,34.771,24.045,34.771C46.463,226.606,85.494,226.606,128.001,226.606",
          }),
          s.createElement("path", { fill: e, d: "M127.9,208.12" })
        ),
        s.createElement(
          "g",
          { className: "exclamation" },
          s.createElement("line", {
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
          s.createElement("path", {
            fill: e,
            d: "M127.9,208.12c-6.377,0-11.548-5.17-11.548-11.548c0-6.377,5.17-11.547,11.548-11.547 c6.377,0,11.547,5.17,11.547,11.547C139.447,202.95,134.277,208.12,127.9,208.12",
          })
        )
      );
    }
    function ae(e) {
      let t = "SVGIcon_Button SVGIcon_Throbber ";
      return (
        e.className && (t += e.className),
        s.createElement(
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
          s.createElement(
            "g",
            { className: h.a.partCircle },
            s.createElement("path", {
              className: h.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
            }),
            s.createElement("path", {
              className: h.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M201.432,101.166",
            }),
            s.createElement("path", {
              className: h.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
            })
          ),
          s.createElement(
            "g",
            { className: h.a.mainOutline },
            s.createElement("path", {
              className: h.a.roundFill,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            s.createElement("path", {
              className: h.a.roundOuterOutline,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            s.createElement("path", {
              className: h.a.roundThrobber01,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            s.createElement("path", {
              className: h.a.roundThrobber02,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            s.createElement("path", {
              className: h.a.roundThrobber03,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            s.createElement("path", {
              className: h.a.roundThrobber04,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            s.createElement("path", {
              className: h.a.roundThrobber05,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            s.createElement("path", {
              className: h.a.roundThrobber06,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            s.createElement("path", {
              className: h.a.roundThrobber07,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            s.createElement("path", {
              className: h.a.roundThrobber08,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            s.createElement("path", {
              className: h.a.roundThrobber09,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            s.createElement("path", {
              className: h.a.roundThrobber10,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            s.createElement("path", {
              className: h.a.roundThrobber11,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            s.createElement("path", {
              className: h.a.roundThrobber12,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            s.createElement("path", {
              className: h.a.roundThrobber13,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            s.createElement("path", {
              className: h.a.roundThrobber14,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            s.createElement("path", {
              className: h.a.roundThrobber15,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            })
          ),
          s.createElement(
            "g",
            { className: h.a.bottomCircle },
            s.createElement("path", {
              fill: "#ffffff",
              d: "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
            })
          ),
          s.createElement(
            "g",
            { className: h.a.topCircle },
            s.createElement("circle", {
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
    function se() {
      return s.createElement(
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
        s.createElement("rect", {
          x: "24",
          y: "42.167",
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          width: "208",
          height: "171.667",
        }),
        s.createElement("line", {
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
    function le() {
      return s.createElement(
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
        s.createElement("line", {
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
    function ue() {
      return s.createElement(
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
        s.createElement("polyline", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "12",
          strokeMiterlimit: "10",
          points: "83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 ",
        }),
        s.createElement("rect", {
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
    if (!s.useState)
      throw new Error("mobx-react-lite requires React with Hooks support");
    if (!p.G)
      throw new Error(
        "mobx-react-lite requires mobx at least version 4 to be available"
      );
    var ce = t("R7aG"),
      b = Object(ce.b)("observerBatching");
    function pe(e) {
      e();
    }
    var m = !1;
    function fe(e) {
      return Object(p.t)(e);
    }
    var ge,
      de = 1e4,
      he = 1e4,
      y = new Set();
    function be() {
      void 0 === ge && (ge = setTimeout(me, he));
    }
    function me() {
      ge = void 0;
      var r = Date.now();
      y.forEach(function (e) {
        var t = e.current;
        t &&
          r >= t.cleanAt &&
          (t.reaction.dispose(), (e.current = null), y.delete(e));
      }),
        0 < y.size && be();
    }
    var _ = !1,
      v = [];
    var ye = {};
    function _e(e) {
      return "observer" + e;
    }
    function ve(r, e, t) {
      if ((void 0 === e && (e = "observed"), void 0 === t && (t = ye), m))
        return r();
      var n,
        o,
        i,
        t = (t.useForceUpdate || ce.d)(),
        a =
          ((n = t),
          function () {
            _ ? v.push(n) : n();
          }),
        s = f.a.useRef(null),
        l =
          (s.current ||
            ((o = new p.c(_e(e), function () {
              i.mounted ? a() : (o.dispose(), (s.current = null));
            })),
            (t = o),
            (i = { cleanAt: Date.now() + de, reaction: t }),
            (s.current = i),
            y.add(s),
            be()),
          s.current.reaction),
        t =
          (f.a.useDebugValue(l, fe),
          f.a.useEffect(function () {
            return (
              y.delete(s),
              s.current
                ? (s.current.mounted = !0)
                : ((s.current = {
                    reaction: new p.c(_e(e), function () {
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
          function () {
            var e, t;
            if (
              (l.track(function () {
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
          });
      (_ = !0), (v = []);
      try {
        var u = t(),
          c = ((_ = !1), 0 < v.length ? v : void 0);
        return (
          f.a.useLayoutEffect(
            function () {
              c &&
                c.forEach(function (e) {
                  return e();
                });
            },
            [c]
          ),
          u
        );
      } finally {
        _ = !1;
      }
    }
    var we = function () {
      return (we =
        Object.assign ||
        function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in (t = arguments[r]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
    function Se(r, e) {
      if (m) return r;
      function t(e, t) {
        return ve(function () {
          return r(e, t);
        }, i);
      }
      var n,
        o,
        e = we({ forwardRef: !1 }, e),
        i = r.displayName || r.name;
      return (
        (t.displayName = i),
        (e = e.forwardRef
          ? Object(s.memo)(Object(s.forwardRef)(t))
          : Object(s.memo)(t)),
        (n = r),
        (o = e),
        Object.keys(n).forEach(function (e) {
          Ee[e] ||
            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(n, e));
        }),
        (e.displayName = i),
        e
      );
    }
    var Ee = { $$typeof: !0, render: !0, compare: !0, type: !0 };
    function Te(e) {
      var t = e.children,
        e = e.render,
        t = t || e;
      return "function" != typeof t ? null : ve(t);
    }
    function je(e, t, r, n, o) {
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
    (Te.propTypes = { children: je, render: je }),
      (Te.displayName = "Observer");
    (e = (e = n.unstable_batchedUpdates) || pe),
      Object(p.n)({ reactionScheduler: e }),
      (Object(ce.a)()[b] = !0);
    var Ae = 0;
    var Oe = {};
    function w(e) {
      var t;
      return (
        Oe[e] ||
          (Oe[e] =
            ((t = e),
            "function" == typeof Symbol
              ? Symbol(t)
              : ((t = "__$mobx-react " + t + " (" + Ae + ")"), Ae++, t))),
        Oe[e]
      );
    }
    function Be(e, t) {
      if (Ce(e, t)) return 1;
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
            if (!Object.hasOwnProperty.call(t, r[o]) || !Ce(e[r[o]], t[r[o]]))
              return;
          return 1;
        }
      }
    }
    function Ce(e, t) {
      return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    }
    function S(e, t, r) {
      Object.hasOwnProperty.call(e, t)
        ? (e[t] = r)
        : Object.defineProperty(e, t, {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: r,
          });
    }
    var xe = w("patchMixins"),
      Me = w("patchedDefinition");
    function Ie(e, t) {
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
    function ke(n, o) {
      return function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        Ie.call.apply(Ie, [this, n, o].concat(t));
      };
    }
    function Re(e, t, r) {
      (n = t),
        ((o = (o = (o = e)[xe] = o[xe] || {})[n] = o[n] || {}).locks =
          o.locks || 0),
        (o.methods = o.methods || []);
      var n = o,
        o =
          (n.methods.indexOf(r) < 0 && n.methods.push(r),
          Object.getOwnPropertyDescriptor(e, t));
      (o && o[Me]) ||
        ((r = e[t]),
        (o = (function t(r, n, o, i, e) {
          var a = ke(e, i);
          return (
            (e = {}),
            (e[Me] = !0),
            (e.get = function () {
              return a;
            }),
            (e.set = function (e) {
              this === r
                ? (a = ke(e, i))
                : ((e = t(this, n, o, i, e)),
                  Object.defineProperty(this, n, e));
            }),
            (e.configurable = !0),
            (e.enumerable = o),
            e
          );
        })(e, t, o ? o.enumerable : void 0, n, r)),
        Object.defineProperty(e, t, o));
    }
    var Ne = p.a || "$mobx",
      Pe = w("isMobXReactObserver"),
      De = w("isUnmounted"),
      Ue = w("skipRender"),
      Fe = w("isForcingUpdate");
    function Le(e) {
      var t,
        r = e.prototype;
      if (
        (e[Pe]
          ? ((t = We(r)),
            console.warn(
              "The provided component class (" +
                t +
                ") \n                has already been declared as an observer component."
            ))
          : (e[Pe] = !0),
        r.componentWillReact)
      )
        throw new Error(
          "The componentWillReact life-cycle event is no longer supported"
        );
      if (e.__proto__ !== s.PureComponent)
        if (r.shouldComponentUpdate) {
          if (r.shouldComponentUpdate !== ze)
            throw new Error(
              "It is not allowed to use shouldComponentUpdate in observer based components."
            );
        } else r.shouldComponentUpdate = ze;
      Ve(r, "props"), Ve(r, "state");
      var n = r.render;
      return (
        (r.render = function () {
          return function (e) {
            var t = this;
            if (!0 === m) return e.call(this);
            S(this, Ue, !1), S(this, Fe, !1);
            var r = We(this),
              n = e.bind(this),
              o = !1,
              i = new p.c(r + ".render()", function () {
                if (!o && (o = !0) !== t[De]) {
                  var e = !0;
                  try {
                    S(t, Fe, !0),
                      t[Ue] || s.Component.prototype.forceUpdate.call(t),
                      (e = !1);
                  } finally {
                    S(t, Fe, !1), e && i.dispose();
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
                    e = Object(p.d)(!1, n);
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
              (a[Ne] = i),
              (this.render = a).call(this)
            );
          }.call(this, n);
        }),
        Re(r, "componentWillUnmount", function () {
          var e;
          !0 !== m &&
            (null != (e = this.render[Ne]) && e.dispose(),
            (this[De] = !0),
            this.render[Ne] ||
              ((e = We(this)),
              console.warn(
                "The reactive render of an observer class component (" +
                  e +
                  ") \n                was overriden after MobX attached. This may result in a memory leak if the \n                overriden reactive render was not properly disposed."
              )));
        }),
        e
      );
    }
    function We(e) {
      return (
        e.displayName ||
        e.name ||
        (e.constructor && (e.constructor.displayName || e.constructor.name)) ||
        "<component>"
      );
    }
    function ze(e, t) {
      return (
        m &&
          console.warn(
            "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."
          ),
        this.state !== t || !Be(this.props, e)
      );
    }
    function Ve(e, t) {
      var r = w("reactProp_" + t + "_valueHolder"),
        n = w("reactProp_" + t + "_atomHolder");
      function o() {
        return this[n] || S(this, n, Object(p.o)("reactive " + t)), this[n];
      }
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          var e = !1;
          return (
            p.f && p.e && (e = Object(p.f)(!0)),
            o.call(this).reportObserved(),
            p.f && p.e && Object(p.e)(e),
            this[r]
          );
        },
        set: function (e) {
          this[Fe] || Be(this[r], e)
            ? S(this, r, e)
            : (S(this, r, e),
              S(this, Ue, !0),
              o.call(this).reportChanged(),
              S(this, Ue, !1));
        },
      });
    }
    var e = "function" == typeof Symbol && Symbol.for,
      He = e
        ? Symbol.for("react.forward_ref")
        : "function" == typeof s.forwardRef &&
          Object(s.forwardRef)(function (e) {
            return null;
          }).$$typeof,
      $e = e
        ? Symbol.for("react.memo")
        : "function" == typeof s.memo &&
          Object(s.memo)(function (e) {
            return null;
          }).$$typeof;
    function Ge(e) {
      if (
        (!0 === e.isMobxInjector &&
          console.warn(
            "Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"
          ),
        $e && e.$$typeof === $e)
      )
        throw new Error(
          "Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you."
        );
      if (He && e.$$typeof === He) {
        var t = e.render;
        if ("function" != typeof t)
          throw new Error("render property of ForwardRef was not a function");
        return Object(s.forwardRef)(function () {
          var e = arguments;
          return Object(s.createElement)(Te, null, function () {
            return t.apply(void 0, e);
          });
        });
      }
      return (
        "function" != typeof e ||
          (e.prototype && e.prototype.render) ||
          e.isReactClass ||
          Object.prototype.isPrototypeOf.call(s.Component, e)
          ? Le
          : Se
      )(e);
    }
    var E;
    if (!s.Component)
      throw new Error("mobx-react requires React to be available");
    if (!p.B) throw new Error("mobx-react requires mobx to be available");
    class qe extends s.PureComponent {
      constructor(e) {
        super(e),
          (this.m_fnExistingPopupInitializer = void 0),
          (this.BindResizeGrip = this.BindResizeGrip.bind(this));
      }
      BindResizeGrip(e) {
        let t = 0,
          r = 0;
        var n;
        e &&
          ((n = e.getBoundingClientRect()),
          (e = e.ownerDocument.defaultView),
          n &&
            e &&
            ((t = Math.ceil(e.innerWidth - n.left)),
            (r = Math.ceil(e.innerHeight - n.top))));
        let o = this.props.popup;
        o.SteamClient &&
          o.SteamClient.Window &&
          o.SteamClient.Window.SetResizeGrip &&
          o.SteamClient.Window.SetResizeGrip(t, r);
      }
      componentWillUnmount() {
        let e = this.props.popup;
        e.SteamClient.Window.SetResizeGrip(0, 0);
      }
      render() {
        return s.createElement("div", {
          className: "window_resize_grip",
          ref: this.BindResizeGrip,
        });
      }
    }
    class Ke extends s.Component {
      constructor(e) {
        super(e), (this.state = { maximized: this.BIsMaximized() });
      }
      BIsMaximized() {
        var e =
            this.props.popup.screen.availWidth - this.props.popup.innerWidth,
          t =
            this.props.popup.screen.availHeight - this.props.popup.innerHeight;
        return 0 == e && 0 == t;
      }
      componentDidMount() {
        this.props.popup.addEventListener("resize", this.UpdateMaximizeState);
      }
      componentWillUnmount() {
        this.props.popup.removeEventListener(
          "resize",
          this.UpdateMaximizeState
        );
      }
      UpdateMaximizeState() {
        var e = this.BIsMaximized();
        e != this.state.maximized && this.setState({ maximized: e });
      }
      render() {
        let e = this.props.popup;
        let t = "title-area-icon",
          r =
            (this.state.maximized
              ? (t += " restoreButton")
              : (t += " maximizeButton"),
            "TitleBar title-area");
        return (
          this.props.className && (r = r + " " + this.props.className),
          s.createElement(
            "div",
            { className: r, style: this.props.style },
            s.createElement("div", { className: "title-area-highlight" }),
            s.createElement(
              "div",
              { className: "title-area-children" },
              this.props.children
            ),
            !this.props.hideActions &&
              s.createElement(
                "div",
                { className: "title-bar-actions" },
                s.createElement(
                  "div",
                  {
                    className: "title-area-icon closeButton",
                    onClick: () => {
                      e && e.close();
                    },
                  },
                  s.createElement(oe, null)
                ),
                !this.props.hideMinMax &&
                  s.createElement(
                    "div",
                    {
                      className: t,
                      onClick: () => {
                        e.SteamClient.Window.ToggleMaximize();
                      },
                    },
                    this.state.maximized && s.createElement(ue, null),
                    !this.state.maximized && s.createElement(se, null)
                  ),
                !this.props.hideMinMax &&
                  s.createElement(
                    "div",
                    {
                      className: "title-area-icon minimizeButton",
                      onClick: () => {
                        e.SteamClient.Window.Minimize();
                      },
                    },
                    s.createElement(le, null)
                  )
              )
          )
        );
      }
    }
    r([o], Ke.prototype, "UpdateMaximizeState", null);
    class Ye extends f.a.PureComponent {
      constructor(e) {
        super(e);
      }
      AddSizeClass(e) {
        "small" == this.props.size
          ? e.push(h.a.throbber_small)
          : "medium" == this.props.size
          ? e.push(h.a.throbber_medium)
          : "xlarge" == this.props.size
          ? e.push(h.a.throbber_xlarge)
          : "xxlarge" == this.props.size
          ? e.push(h.a.throbber_xxlarge)
          : e.push(h.a.throbber_large);
      }
      render() {
        let e = [h.a.LoadingWrapper, "SteamLogoThrobber"];
        this.AddSizeClass(e),
          void 0 === this.props.string && e.push(h.a.noString),
          this.props.className && e.push(this.props.className),
          this.props.static && e.push(h.a.Static);
        var t = f.a.createElement(
          "div",
          { className: e.join(" ") },
          f.a.createElement(
            "div",
            { className: h.a.Throbber },
            f.a.createElement(ae, { className: h.a.base }),
            f.a.createElement(ae, { className: h.a.blur })
          )
        );
        return f.a.createElement(
          "div",
          {
            className:
              "center" == this.props.position
                ? h.a.throbber_center_wrapper
                : "",
          },
          t,
          Boolean(this.props.string) &&
            f.a.createElement(
              "div",
              { className: h.a.ThrobberText },
              this.props.string
            )
        );
      }
    }
    ((b = E = E || {})[(b.SignIn = 0)] = "SignIn"),
      (b[(b.Loading = 1)] = "Loading"),
      (b[(b.Loaded = 2)] = "Loaded"),
      (b[(b.FailRetry = 3)] = "FailRetry"),
      (b[(b.OfflineMode = 4)] = "OfflineMode");
    class Xe {
      constructor() {
        this.m_eState = E.SignIn;
      }
      Init() {
        this.m_eState = E.SignIn;
      }
      get loadingState() {
        return this.m_eState;
      }
      SetLoadingState(e) {
        this.m_eState = e;
      }
    }
    r([p.B], Xe.prototype, "m_eState", void 0);
    let T = class extends s.Component {
      ContextMenu(e) {
        e.preventDefault(), e.stopPropagation();
      }
      componentDidMount() {
        SteamClient.WebChat.GetLocalPersonaName().then((e) => {
          this.m_strPersonaName = e;
        }),
          SteamClient.WebChat.GetLocalAvatarBase64().then((e) => {
            this.m_strAvatarSource = e;
          });
      }
      render() {
        var e = this.props.offlineStore.loadingState,
          t = this.m_strPersonaName,
          r = this.m_strAvatarSource;
        let n = "currentUserAvatar",
          o =
            ("" == r && (n += " noAvatarImg"),
            "chat_main fullheight responsive_friends friends_loading_error");
        return (
          this.props.popup && this.props.popup.focused && (o += " focused"),
          s.createElement(
            "div",
            { className: o, onContextMenu: this.ContextMenu },
            s.createElement(
              "div",
              { className: "friendsListContainer fullheight" },
              s.createElement(
                "div",
                { className: "friendlist" },
                s.createElement(Ke, { popup: this.props.popup.window }),
                s.createElement(
                  "div",
                  { className: "currentUserContainer" },
                  s.createElement(
                    "div",
                    { className: "AvatarAndUser" },
                    "" != r && s.createElement("img", { className: n, src: r }),
                    "" == r && s.createElement("div", { className: n }),
                    s.createElement(
                      "div",
                      { className: "labelHolder" },
                      s.createElement(
                        "div",
                        { className: "statusAndName" },
                        s.createElement("div", { className: "playerName" }, t)
                      ),
                      s.createElement(
                        "div",
                        { className: "richPresenceContainer" },
                        s.createElement(
                          "div",
                          { className: "gameName richPresenceLabel" },
                          u("#FriendsList_Offline_Disconnected")
                        )
                      )
                    )
                  )
                ),
                s.createElement(
                  "div",
                  { className: "FriendsFailureContainer" },
                  s.createElement(
                    "div",
                    { className: "friendsListInsetShadowCtn" },
                    s.createElement("div", {
                      className: "frienListInsetShadowTop",
                    })
                  ),
                  e == E.SignIn && s.createElement(Ze, null),
                  e == E.Loading && s.createElement(Je, null),
                  e == E.FailRetry && s.createElement(Qe, null),
                  e == E.OfflineMode && s.createElement(et, null)
                )
              ),
              s.createElement(qe, { popup: this.props.popup.window })
            )
          )
        );
      }
    };
    function Je() {
      return s.createElement(
        "div",
        null,
        s.createElement(
          "div",
          null,
          s.createElement(Ye, {
            className: "friendsThrobber",
            size: "large",
            string: u("#FriendsList_StillLoadingSummary"),
            position: "center",
          })
        ),
        s.createElement("div", { className: "summaryText" }),
        s.createElement(
          "div",
          { className: "detailText" },
          u("#FriendsList_StillLoadingDetail")
        )
      );
    }
    function Qe() {
      return s.createElement(
        "div",
        null,
        s.createElement(
          "div",
          { className: "cautionIcon" },
          s.createElement(ie, null)
        ),
        s.createElement(
          "div",
          { className: "summaryText" },
          u("#FriendsList_OfflineOrFailure")
        ),
        s.createElement(
          "div",
          { className: "detailText" },
          u("#FriendsList_OfflineDetail")
        ),
        s.createElement(
          "div",
          null,
          s.createElement(
            "button",
            {
              className: "retryButton",
              onClick: () => {
                console.log("OnRetryClick"),
                  window.parent.postMessage(
                    { message: "ChatReloadRequest", state: void 0 },
                    "https://steamloopback.host"
                  );
              },
            },
            u("#Friends_RetryLoading")
          )
        )
      );
    }
    function Ze() {
      return s.createElement(
        "div",
        null,
        s.createElement(
          "div",
          { className: "summaryText" },
          u("#FriendsList_SignedOut")
        ),
        s.createElement(
          "div",
          { className: "detailText" },
          u("#FriendsList_SignedOut_Detail")
        ),
        s.createElement(
          "div",
          null,
          s.createElement(
            "button",
            {
              className: "retryButton",
              onClick: () => {
                window.parent.postMessage(
                  { message: "SignInRequest", state: void 0 },
                  "https://steamloopback.host"
                );
              },
            },
            u("#Friends_SignIn")
          )
        )
      );
    }
    function et() {
      return s.createElement(
        "div",
        null,
        s.createElement(
          "div",
          { className: "summaryText" },
          u("#FriendsList_OfflineMode")
        ),
        s.createElement(
          "div",
          { className: "detailText" },
          u("#FriendsList_OfflineMode_Detail")
        )
      );
    }
    r([p.B], T.prototype, "m_strPersonaName", void 0),
      r([p.B], T.prototype, "m_strAvatarSource", void 0),
      r([o], T.prototype, "ContextMenu", null),
      (T = r([Ge], T));
    class tt extends re {
      constructor(e, t) {
        super(
          "offlinefriendslist",
          "PopupFriendsListDimensions",
          {
            dimensions: { width: 300, height: 650 },
            minWidth: 226,
            minHeight: 400,
            title: u("#WindowTitle_FriendsList"),
            html_class: "client_chat_frame fullheight SavedDimensionsPopup",
            body_class: "fullheight",
            eCreationFlags: c.Resizable,
            target_browser: t,
          },
          !1
        ),
          (this.m_offlineStore = e);
      }
      GetSavedDimensionsKey() {
        return this.m_strSavedDimensionsKey;
      }
      OnResizeComplete(e) {
        window.parent.postMessage(
          { message: "ErrorPopupRestoreDetailsChanged", data: e },
          "https://steamloopback.host"
        );
      }
      Render(e, t) {
        t.setAttribute("class", "fullheight popup_chat_frame"),
          n.render(
            s.createElement(T, {
              popup: this,
              offlineStore: this.m_offlineStore,
            }),
            t
          );
      }
      OnClose() {
        super.OnClose(),
          window.parent.postMessage(
            { message: "ErrorPopupClosed" },
            "https://steamloopback.host"
          );
      }
    }
    T;
    var e = t("vDqi"),
      rt = t.n(e);
    function nt(e) {
      var t,
        [e, r] = e.split(".", 2);
      return (
        e &&
        r &&
        ((t = e), "object" == typeof SteamClient && t in SteamClient) &&
        r in SteamClient[e]
      );
    }
    t("whIR"), t("HQzE"), t("ChfH");
    (window._Steam = {
      onComponentMounted: function (r) {
        if (
          r &&
          r._reactInternalInstance._currentElement &&
          r._reactInternalInstance._currentElement._source
        ) {
          let t = n.findDOMNode(r);
          if (t) {
            let e = "";
            (e =
              r._reactInternalInstance._currentElement.type &&
              r._reactInternalInstance._currentElement.type.name
                ? r._reactInternalInstance._currentElement.type.name
                : r && r.constructor && r.constructor.name
                ? r.constructor.name
                : "unknown"),
              t.setAttribute("data-react-type", e);
            r =
              r._reactInternalInstance._renderedComponent._currentElement
                ._source;
            null != r &&
              (t.setAttribute("data-react-file", r.fileName),
              t.setAttribute("data-react-line", r.lineNumber));
          }
        }
      },
    }),
      (window.test = function () {
        SteamClient._internal.RegisterForStyleChanges(function (n) {
          var o = "https://steamloopback.host/";
          let i = [];
          var t,
            a = document.querySelectorAll('link[rel="stylesheet"]');
          for (let r = 0; r < a.length; r++) {
            var s = a[r];
            let e = s.href,
              t = "";
            var l,
              u = (t = e.startsWith(o) ? e.substr(o.length) : t).indexOf("?");
            0 <= u && (t = t.substr(0, u));
            for (l of n)
              if (t == l) {
                i.push({ sheet: s, newRelative: l });
                break;
              }
          }
          for (t of i) {
            r = void 0;
            c = void 0;
            p = void 0;
            var r = t.newRelative;
            var c = t.sheet;
            var p = document.createElement("link");
            (p.href = r), (p.type = "text/css"), (p.rel = "stylesheet");
            let e = c.parentElement;
            e.insertBefore(p, c), e.removeChild(c);
          }
        });
      });
    let j = "",
      ot = "",
      A = void 0,
      O = void 0,
      it = void 0,
      B = 0,
      C = [],
      at = "",
      st = -1,
      x = void 0,
      lt = void 0,
      M = 0,
      ut = 0,
      I = void 0,
      k,
      ct = !1,
      pt = !1;
    function ft(e) {
      if (
        (SteamClient.WebChat.RegisterForFriendPostMessage(wt),
        void 0 !== it && (clearInterval(it), (it = void 0)),
        (j = e),
        k.SetLoadingState(E.Loading),
        (M = 0),
        R(),
        ct)
      )
        return k.SetLoadingState(E.FailRetry), void N();
      pt
        ? N()
        : ((O = setTimeout(ht, 4e3)),
          (A = setTimeout(dt, 1e3)),
          SteamClient.WebChat.GetWebChatURL().then((t) => {
            if (
              ((ot = t), void 0 !== A && (clearTimeout(A), (A = void 0)), t)
            ) {
              let e = new URL(t);
              e.searchParams.set("origin", window.origin),
                (ot = e.href),
                console.log("Loading chat from url: ", e.href),
                !(function t(e) {
                  console.log("Checking network... " + B);
                  let r = 7500;
                  0 == B ? (r = 500) : 1 == B && (r = 2e3);
                  let n = e;
                  ++B;
                  rt.a
                    .head(e, { timeout: r })
                    .then((e) => {
                      void 0 === e.headers["x-buildtimestamp"] &&
                        console.log(
                          "Network check (head req) got 200, but no x-buildtimestamp, not valid? Proceeding anyway..."
                        ),
                        console.log(
                          "Network check (head req) passed after " +
                            B +
                            " tries..."
                        ),
                        gt(n);
                    })
                    .catch((e) => {
                      console.log("Network check try " + B + " failed..."),
                        3 <= B ? dt() : t(n);
                    });
                })(e.href);
            } else
              R(),
                console.log("Empty webchat URL, we are in offline mode"),
                k.SetLoadingState(E.OfflineMode);
          }));
    }
    function R() {
      void 0 !== A && (clearTimeout(A), (A = void 0)),
        void 0 !== O && (clearTimeout(O), (O = void 0));
    }
    function gt(e) {
      console.log("Loading chat from url: ", e),
        void 0 !== A && clearTimeout(A),
        (A = setTimeout(dt, 15e3));
      let t = document.getElementById(j);
      t.src = e;
    }
    function dt() {
      console.log("Failed to load chat!"),
        R(),
        k.SetLoadingState(E.FailRetry),
        4 != st && N();
    }
    function ht() {
      4 != st && k.loadingState != E.Loaded && N(), (O = void 0);
    }
    function bt() {
      let e = document.getElementById(j);
      e && null != e.src && (e.src = void 0),
        SteamClient.WebChat.RegisterForFriendPostMessage(wt),
        SteamClient.WebChat.RegisterOverlayChatBrowserInfoChanged(vt);
    }
    function mt() {
      (B = 0), ft("tracked_frame_friends_chat");
    }
    function yt() {
      _t(!1);
    }
    function _t(a) {
      SteamClient.WebChat.GetWebChatURL().then((i) => {
        console.log("Checking for updates from chat from url: ", i),
          void 0 !== A && (clearTimeout(A), (A = void 0)),
          rt.a
            .head(i, { timeout: 1e4 })
            .then((t) => {
              var r, n, o;
              if (void 0 !== t.headers["x-buildtimestamp"]) {
                (ut = Number(t.headers["x-buildtimestamp"])),
                  console.log("Currently available build: " + ut);
                let e = 86400;
                a && (e = 0),
                  0 != ut &&
                    0 != M &&
                    ((r = ut - M),
                    k.loadingState == E.Loaded &&
                      r > e &&
                      ((n = 604800 < r),
                      (t = Number(t.headers["x-forceuiupdate"]) || a),
                      console.log(
                        "We are out of date enough to reload if idle, bVeryOutOfDate=" +
                          (n ? "true" : "false")
                      ),
                      (o = i.match(/(https:\/\/[^\/]+)\/.*/)[1]),
                      window.frames[0].postMessage(
                        {
                          message: "UpdatedBuildAvailable",
                          bVeryOutOfDate: n,
                          bForce: t,
                          nSecondsOutOfDate: r,
                        },
                        o
                      )));
              }
            })
            .catch((e) => {
              console.log("Failed trying to check available build timestamp");
            });
      });
    }
    function vt() {
      SteamClient.WebChat.GetOverlayChatBrowserInfo()
        .then((e) => {
          let t = new Map();
          for (let e = 0; e < C.length; ++e)
            C[e].browser_info &&
              0 != C[e].browser_info.m_unPID &&
              t.set(C[e].browser_info.m_unPID, !0);
          for (var r of e) t.delete(r.unPID);
          for (let e = C.length - 1; 0 <= e; e--)
            null != C[e].browser_info &&
              t.has(C[e].browser_info.m_unPID) &&
              (console.log(
                "Deleting error/offline dialog for: " +
                  C[e].browser_info.m_unPID
              ),
              C[e].Close(),
              (C[e] = void 0),
              C.pop());
        })
        .catch((e) => {
          console.log("Failed to load overlay browser info:", e);
        });
    }
    function wt(t) {
      var e = t.data;
      if (e && e.command)
        if ("ShowPopupFriendsList" == e.command) {
          console.log("ShowPopupFriendsList");
          let e = { m_unPID: 0, m_nBrowserID: -1 };
          N(
            (e =
              void 0 !== t.data.pid
                ? { m_unPID: t.data.pid, m_nBrowserID: t.data.browserid }
                : e)
          );
        } else
          "SetPersonaState" != e.command ||
            (0 != (t = e.persona_state) &&
              ((lt = t), (B = 0), ft("tracked_frame_friends_chat")));
    }
    function St(e, t, r) {
      "SignInToFriends" == t && mt();
    }
    function N(t = void 0) {
      null == t && (t = { m_unPID: 0, m_nBrowserID: -1 });
      for (let e = 0; e < C.length; ++e)
        if (
          C[e].browser_info.m_nBrowserID == t.m_nBrowserID &&
          C[e].browser_info.m_unPID == t.m_unPID
        )
          return C[e].Show(), void (x = !0);
      let e = new tt(k, t);
      C.push(e), e.Show(), (x = !0);
    }
    function Et() {
      return D(this, void 0, void 0, function* () {
        (k = new Xe()).Init();
        var e = yield SteamClient.WebChat.GetWebChatLanguage();
        try {
          yield (function (e) {
            let t = [];
            var r = (e, t, r) =>
              rt.a
                .get(`https://steamloopback.host/localization/${e}_${t}.json`)
                .then((e) => {
                  r(e.data);
                })
                .catch((e) => {
                  Promise.resolve();
                });
            let n, o, i, a;
            t.push(
              r("clientui", e, (e) => {
                n = e;
              })
            ),
              t.push(
                r("shared", e, (e) => {
                  i = e;
                })
              );
            var s = l.GetLanguageFallback(e);
            return (
              e != s &&
                (t.push(
                  r("clientui", s, (e) => {
                    o = e;
                  })
                ),
                t.push(
                  r("shared", s, (e) => {
                    a = e;
                  })
                )),
              Promise.all(t).then(() => {
                ee.InitFromObjects(n, o, i, a);
              })
            );
          })(e);
        } catch (e) {
          console.log("Failed to load localization!");
        }
        if (
          (SteamClient.WebChat.RegisterForFriendPostMessage(wt),
          SteamClient.WebChat.RegisterOverlayChatBrowserInfoChanged(vt),
          nt("Messaging.RegisterForMessages") &&
            SteamClient.Messaging.RegisterForMessages("FriendsLoader", St),
          !(yield SteamClient.WebChat.GetSignIntoFriendsOnStart()))
        )
          return (
            console.log("Don't sign in on start"),
            void k.SetLoadingState(E.SignIn)
          );
        e = yield SteamClient.WebChat.GetCurrentUserAccountID();
        d.SetCurrentLoggedInAccountID(e),
          (st = yield SteamClient.WebChat.GetUIMode()),
          ft("tracked_frame_friends_chat");
      });
    }
    window.addEventListener("message", function (t) {
      if ("object" == typeof t.data && null != t.data.message)
        if ("ShowFriendsErrorRetryDialog" == t.data.message)
          R(), bt(), k.SetLoadingState(E.FailRetry), N();
        else if ("ChatJavascriptInitialized" == t.data.message) {
          k.SetLoadingState(E.Loaded), R();
          var r = ot.match(/(https:\/\/[^\/]+)\/.*/)[1];
          if (
            (window.frames[0].postMessage(
              { message: "LoaderWindowRestoreDetails", data: at, bVisible: x },
              r
            ),
            void 0 !== lt &&
              (window.frames[0].postMessage(
                { message: "SetPersonaState", persona_state: lt },
                r
              ),
              (lt = void 0)),
            (M = void 0 !== t.data.data ? t.data.data : 0),
            null != I)
          )
            try {
              window.frames[0].postMessage(
                { message: "ReloadSerializedChatState", state: I },
                r
              ),
                (I = void 0);
            } catch (e) {
              console.log(
                "Failed trying to ask FriendsUI to restore chat state after reload"
              ),
                (I = void 0);
            }
          (it = setInterval(yt, 144e5)),
            !(function () {
              for (let e = 0; e < C.length; ++e) C[e].Close(), (C[e] = void 0);
              C = [];
            })(),
            console.log("Chat loaded! " + M);
        } else if ("ChatReloadRequest" == t.data.message)
          null != j &&
            "" != j &&
            ((B = 0), null != t.data.state && (I = t.data.state), ft(j));
        else if ("CheckForAndForceUpdate" == t.data.message) _t(!0);
        else if ("SignInRequest" == t.data.message) mt();
        else if ("SignOutRequest" == t.data.message) {
          if (
            (R(),
            bt(),
            k.SetLoadingState(E.SignIn),
            (x = t.data.bShowLoaderWindow),
            t.data.bShowLoaderWindow)
          ) {
            let e = void 0;
            N((e = t.data.browserContext ? t.data.browserContext : e));
          }
        } else if ("FriendsListRestoreDetailsChanged" == t.data.message) {
          r = t.data.data;
          let e = new tt(k, void 0);
          e.SaveWindowPosition(r), (at = r);
        } else
          "ErrorPopupRestoreDetailsChanged" == t.data.message
            ? (at = t.data.data)
            : "ErrorPopupClosed" == t.data.message && (x = !1);
    }),
      document.addEventListener("DOMContentLoaded", () => Et());
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
      function l(e) {
        c.isUndefined(r[e])
          ? c.isUndefined(t[e]) || (n[e] = s(void 0, t[e]))
          : (n[e] = s(t[e], r[e]));
      }
      c.forEach(e, function (e) {
        c.isUndefined(r[e]) || (n[e] = s(void 0, r[e]));
      }),
        c.forEach(o, l),
        c.forEach(i, function (e) {
          c.isUndefined(r[e])
            ? c.isUndefined(t[e]) || (n[e] = s(void 0, t[e]))
            : (n[e] = s(void 0, r[e]));
        }),
        c.forEach(a, function (e) {
          e in r ? (n[e] = s(t[e], r[e])) : e in t && (n[e] = s(void 0, t[e]));
        });
      var u = e.concat(o).concat(i).concat(a),
        e = Object.keys(t)
          .concat(Object.keys(r))
          .filter(function (e) {
            return -1 === u.indexOf(e);
          });
      return c.forEach(e, l), n;
    };
  },
  Uf5Q: function (e, t, r) {
    "use strict";
    r("0N1H");
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
  YtLl: function (e, t, r) {
    "use strict";
    var n = r("hRO2"),
      o = r("sQq0");
    n.Message;
    const i = n.Message;
    (class extends i {});
    (class extends i {});
    (class extends i {});
    (class extends i {});
    (class extends i {});
    (class extends i {});
    n.Message;
    const a = n.Message;
    class s extends a {
      constructor(e = null) {
        super(),
          s.prototype.type || o.a(s.M()),
          a.initialize(this, e, 0, -1, [3], null);
      }
      static M() {
        return (
          s.sm_m ||
            (s.sm_m = {
              proto: s,
              fields: {
                type: { n: 1, br: o.d.readString, bw: o.h.writeString },
                rating: { n: 2, br: o.d.readString, bw: o.h.writeString },
                descriptors: {
                  n: 3,
                  r: !0,
                  q: !0,
                  br: o.d.readString,
                  bw: o.h.writeRepeatedString,
                },
                interactive_elements: {
                  n: 4,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                required_age: { n: 10, br: o.d.readInt32, bw: o.h.writeInt32 },
                use_age_gate: { n: 11, br: o.d.readBool, bw: o.h.writeBool },
                image_url: { n: 20, br: o.d.readString, bw: o.h.writeString },
                image_target: {
                  n: 21,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
              },
            }),
          s.sm_m
        );
      }
      static MBF() {
        return s.sm_mbf || (s.sm_mbf = o.e(s.M())), s.sm_mbf;
      }
      toObject(e = !1) {
        return s.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(s.M(), e, t);
      }
      static fromObject(e) {
        return o.c(s.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new s();
        return s.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(s.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(s.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreGameRating";
      }
    }
    class l extends a {
      constructor(e = null) {
        super(),
          l.prototype.item_type || o.a(l.M()),
          a.initialize(this, e, 0, -1, [11, 12, 20, 21, 25, 41, 42, 52], null);
      }
      static M() {
        return (
          l.sm_m ||
            (l.sm_m = {
              proto: l,
              fields: {
                item_type: { n: 1, br: o.d.readEnum, bw: o.h.writeEnum },
                id: { n: 2, br: o.d.readUint32, bw: o.h.writeUint32 },
                success: { n: 3, br: o.d.readUint32, bw: o.h.writeUint32 },
                visible: { n: 4, br: o.d.readBool, bw: o.h.writeBool },
                unvailable_for_country_restriction: {
                  n: 5,
                  br: o.d.readBool,
                  bw: o.h.writeBool,
                },
                name: { n: 6, br: o.d.readString, bw: o.h.writeString },
                store_url_path: {
                  n: 7,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                appid: { n: 9, br: o.d.readUint32, bw: o.h.writeUint32 },
                type: { n: 10, br: o.d.readEnum, bw: o.h.writeEnum },
                included_types: {
                  n: 11,
                  r: !0,
                  q: !0,
                  br: o.d.readEnum,
                  bw: o.h.writeRepeatedEnum,
                },
                included_appids: {
                  n: 12,
                  r: !0,
                  q: !0,
                  br: o.d.readUint32,
                  bw: o.h.writeRepeatedUint32,
                },
                is_free: { n: 13, br: o.d.readBool, bw: o.h.writeBool },
                is_early_access: { n: 14, br: o.d.readBool, bw: o.h.writeBool },
                related_items: { n: 15, c: u },
                content_descriptorids: {
                  n: 20,
                  r: !0,
                  q: !0,
                  br: o.d.readEnum,
                  bw: o.h.writeRepeatedEnum,
                },
                tagids: {
                  n: 21,
                  r: !0,
                  q: !0,
                  br: o.d.readUint32,
                  bw: o.h.writeRepeatedUint32,
                },
                categories: { n: 22, c: c },
                reviews: { n: 23, c: p },
                basic_info: { n: 24, c: g },
                tags: { n: 25, c: h, r: !0, q: !0 },
                assets: { n: 30, c: b },
                release: { n: 31, c: m },
                platforms: { n: 32, c: y },
                game_rating: { n: 33, c: s },
                best_purchase_option: { n: 40, c: v },
                purchase_options: { n: 41, c: v, r: !0, q: !0 },
                accessories: { n: 42, c: v, r: !0, q: !0 },
                screenshots: { n: 50, c: S },
                trailers: { n: 51, c: T },
                supported_languages: { n: 52, c: O, r: !0, q: !0 },
                store_url_path_override: {
                  n: 53,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                free_weekend: { n: 54, c: B },
              },
            }),
          l.sm_m
        );
      }
      static MBF() {
        return l.sm_mbf || (l.sm_mbf = o.e(l.M())), l.sm_mbf;
      }
      toObject(e = !1) {
        return l.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(l.M(), e, t);
      }
      static fromObject(e) {
        return o.c(l.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new l();
        return l.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(l.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(l.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem";
      }
    }
    class u extends a {
      constructor(e = null) {
        super(),
          u.prototype.parent_appid || o.a(u.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          u.sm_m ||
            (u.sm_m = {
              proto: u,
              fields: {
                parent_appid: { n: 1, br: o.d.readUint32, bw: o.h.writeUint32 },
              },
            }),
          u.sm_m
        );
      }
      static MBF() {
        return u.sm_mbf || (u.sm_mbf = o.e(u.M())), u.sm_mbf;
      }
      toObject(e = !1) {
        return u.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(u.M(), e, t);
      }
      static fromObject(e) {
        return o.c(u.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new u();
        return u.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(u.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(u.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_RelatedItems";
      }
    }
    class c extends a {
      constructor(e = null) {
        super(),
          c.prototype.supported_player_categoryids || o.a(c.M()),
          a.initialize(this, e, 0, -1, [2, 3, 4], null);
      }
      static M() {
        return (
          c.sm_m ||
            (c.sm_m = {
              proto: c,
              fields: {
                supported_player_categoryids: {
                  n: 2,
                  r: !0,
                  q: !0,
                  br: o.d.readUint32,
                  bw: o.h.writeRepeatedUint32,
                },
                feature_categoryids: {
                  n: 3,
                  r: !0,
                  q: !0,
                  br: o.d.readUint32,
                  bw: o.h.writeRepeatedUint32,
                },
                controller_categoryids: {
                  n: 4,
                  r: !0,
                  q: !0,
                  br: o.d.readUint32,
                  bw: o.h.writeRepeatedUint32,
                },
              },
            }),
          c.sm_m
        );
      }
      static MBF() {
        return c.sm_mbf || (c.sm_mbf = o.e(c.M())), c.sm_mbf;
      }
      toObject(e = !1) {
        return c.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(c.M(), e, t);
      }
      static fromObject(e) {
        return o.c(c.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new c();
        return c.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(c.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(c.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Categories";
      }
    }
    class p extends a {
      constructor(e = null) {
        super(),
          p.prototype.summary_filtered || o.a(p.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          p.sm_m ||
            (p.sm_m = {
              proto: p,
              fields: {
                summary_filtered: { n: 1, c: f },
                summary_unfiltered: { n: 2, c: f },
              },
            }),
          p.sm_m
        );
      }
      static MBF() {
        return p.sm_mbf || (p.sm_mbf = o.e(p.M())), p.sm_mbf;
      }
      toObject(e = !1) {
        return p.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(p.M(), e, t);
      }
      static fromObject(e) {
        return o.c(p.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new p();
        return p.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(p.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(p.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Reviews";
      }
    }
    class f extends a {
      constructor(e = null) {
        super(),
          f.prototype.review_count || o.a(f.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          f.sm_m ||
            (f.sm_m = {
              proto: f,
              fields: {
                review_count: { n: 1, br: o.d.readUint32, bw: o.h.writeUint32 },
                percent_positive: {
                  n: 2,
                  br: o.d.readInt32,
                  bw: o.h.writeInt32,
                },
                review_score: { n: 3, br: o.d.readEnum, bw: o.h.writeEnum },
                review_score_label: {
                  n: 4,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
              },
            }),
          f.sm_m
        );
      }
      static MBF() {
        return f.sm_mbf || (f.sm_mbf = o.e(f.M())), f.sm_mbf;
      }
      toObject(e = !1) {
        return f.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(f.M(), e, t);
      }
      static fromObject(e) {
        return o.c(f.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new f();
        return f.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(f.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(f.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Reviews_StoreReviewSummary";
      }
    }
    class g extends a {
      constructor(e = null) {
        super(),
          g.prototype.short_description || o.a(g.M()),
          a.initialize(this, e, 0, -1, [2, 3, 4], null);
      }
      static M() {
        return (
          g.sm_m ||
            (g.sm_m = {
              proto: g,
              fields: {
                short_description: {
                  n: 1,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                publishers: { n: 2, c: d, r: !0, q: !0 },
                developers: { n: 3, c: d, r: !0, q: !0 },
                franchises: { n: 4, c: d, r: !0, q: !0 },
                capsule_headline: {
                  n: 5,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
              },
            }),
          g.sm_m
        );
      }
      static MBF() {
        return g.sm_mbf || (g.sm_mbf = o.e(g.M())), g.sm_mbf;
      }
      toObject(e = !1) {
        return g.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(g.M(), e, t);
      }
      static fromObject(e) {
        return o.c(g.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new g();
        return g.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(g.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(g.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_BasicInfo";
      }
    }
    class d extends a {
      constructor(e = null) {
        super(),
          d.prototype.name || o.a(d.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          d.sm_m ||
            (d.sm_m = {
              proto: d,
              fields: {
                name: { n: 1, br: o.d.readString, bw: o.h.writeString },
                creator_clan_account_id: {
                  n: 2,
                  br: o.d.readUint32,
                  bw: o.h.writeUint32,
                },
              },
            }),
          d.sm_m
        );
      }
      static MBF() {
        return d.sm_mbf || (d.sm_mbf = o.e(d.M())), d.sm_mbf;
      }
      toObject(e = !1) {
        return d.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(d.M(), e, t);
      }
      static fromObject(e) {
        return o.c(d.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new d();
        return d.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(d.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(d.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_BasicInfo_CreatorHomeLink";
      }
    }
    class h extends a {
      constructor(e = null) {
        super(),
          h.prototype.tagid || o.a(h.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          h.sm_m ||
            (h.sm_m = {
              proto: h,
              fields: {
                tagid: { n: 1, br: o.d.readUint32, bw: o.h.writeUint32 },
                weight: { n: 2, br: o.d.readUint32, bw: o.h.writeUint32 },
              },
            }),
          h.sm_m
        );
      }
      static MBF() {
        return h.sm_mbf || (h.sm_mbf = o.e(h.M())), h.sm_mbf;
      }
      toObject(e = !1) {
        return h.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(h.M(), e, t);
      }
      static fromObject(e) {
        return o.c(h.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new h();
        return h.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(h.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(h.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Tag";
      }
    }
    class b extends a {
      constructor(e = null) {
        super(),
          b.prototype.asset_url_format || o.a(b.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          b.sm_m ||
            (b.sm_m = {
              proto: b,
              fields: {
                asset_url_format: {
                  n: 1,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                main_capsule: { n: 2, br: o.d.readString, bw: o.h.writeString },
                small_capsule: {
                  n: 3,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                header: { n: 4, br: o.d.readString, bw: o.h.writeString },
                package_header: {
                  n: 5,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                page_background: {
                  n: 6,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                hero_capsule: { n: 7, br: o.d.readString, bw: o.h.writeString },
                hero_capsule_2x: {
                  n: 8,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                library_capsule: {
                  n: 9,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                library_capsule_2x: {
                  n: 10,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                library_hero: {
                  n: 11,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                library_hero_2x: {
                  n: 12,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                community_icon: {
                  n: 13,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
              },
            }),
          b.sm_m
        );
      }
      static MBF() {
        return b.sm_mbf || (b.sm_mbf = o.e(b.M())), b.sm_mbf;
      }
      toObject(e = !1) {
        return b.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(b.M(), e, t);
      }
      static fromObject(e) {
        return o.c(b.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new b();
        return b.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(b.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(b.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Assets";
      }
    }
    class m extends a {
      constructor(e = null) {
        super(),
          m.prototype.steam_release_date || o.a(m.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          m.sm_m ||
            (m.sm_m = {
              proto: m,
              fields: {
                steam_release_date: {
                  n: 1,
                  br: o.d.readUint32,
                  bw: o.h.writeUint32,
                },
                original_release_date: {
                  n: 2,
                  br: o.d.readUint32,
                  bw: o.h.writeUint32,
                },
                original_steam_release_date: {
                  n: 3,
                  br: o.d.readUint32,
                  bw: o.h.writeUint32,
                },
                is_coming_soon: { n: 4, br: o.d.readBool, bw: o.h.writeBool },
                is_preload: { n: 5, br: o.d.readBool, bw: o.h.writeBool },
                custom_release_date_message: {
                  n: 6,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                is_abridged_release_date: {
                  n: 7,
                  br: o.d.readBool,
                  bw: o.h.writeBool,
                },
                is_early_access: { n: 10, br: o.d.readBool, bw: o.h.writeBool },
                mac_release_date: {
                  n: 20,
                  br: o.d.readUint32,
                  bw: o.h.writeUint32,
                },
                linux_release_date: {
                  n: 21,
                  br: o.d.readUint32,
                  bw: o.h.writeUint32,
                },
              },
            }),
          m.sm_m
        );
      }
      static MBF() {
        return m.sm_mbf || (m.sm_mbf = o.e(m.M())), m.sm_mbf;
      }
      toObject(e = !1) {
        return m.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(m.M(), e, t);
      }
      static fromObject(e) {
        return o.c(m.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new m();
        return m.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(m.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(m.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_ReleaseInfo";
      }
    }
    class y extends a {
      constructor(e = null) {
        super(),
          y.prototype.windows || o.a(y.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          y.sm_m ||
            (y.sm_m = {
              proto: y,
              fields: {
                windows: { n: 1, br: o.d.readBool, bw: o.h.writeBool },
                mac: { n: 2, br: o.d.readBool, bw: o.h.writeBool },
                linux: { n: 3, br: o.d.readBool, bw: o.h.writeBool },
                vr_support: { n: 10, c: _ },
                steam_deck_compat_category: {
                  n: 11,
                  br: o.d.readEnum,
                  bw: o.h.writeEnum,
                },
              },
            }),
          y.sm_m
        );
      }
      static MBF() {
        return y.sm_mbf || (y.sm_mbf = o.e(y.M())), y.sm_mbf;
      }
      toObject(e = !1) {
        return y.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(y.M(), e, t);
      }
      static fromObject(e) {
        return o.c(y.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new y();
        return y.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(y.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(y.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Platforms";
      }
    }
    class _ extends a {
      constructor(e = null) {
        super(),
          _.prototype.vrhmd || o.a(_.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          _.sm_m ||
            (_.sm_m = {
              proto: _,
              fields: {
                vrhmd: { n: 1, br: o.d.readBool, bw: o.h.writeBool },
                vrhmd_only: { n: 2, br: o.d.readBool, bw: o.h.writeBool },
                htc_vive: { n: 40, br: o.d.readBool, bw: o.h.writeBool },
                oculus_rift: { n: 41, br: o.d.readBool, bw: o.h.writeBool },
                windows_mr: { n: 42, br: o.d.readBool, bw: o.h.writeBool },
                valve_index: { n: 43, br: o.d.readBool, bw: o.h.writeBool },
              },
            }),
          _.sm_m
        );
      }
      static MBF() {
        return _.sm_mbf || (_.sm_mbf = o.e(_.M())), _.sm_mbf;
      }
      toObject(e = !1) {
        return _.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(_.M(), e, t);
      }
      static fromObject(e) {
        return o.c(_.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new _();
        return _.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(_.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(_.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Platforms_VRSupport";
      }
    }
    class v extends a {
      constructor(e = null) {
        super(),
          v.prototype.packageid || o.a(v.M()),
          a.initialize(this, e, 0, -1, [20, 21, 22], null);
      }
      static M() {
        return (
          v.sm_m ||
            (v.sm_m = {
              proto: v,
              fields: {
                packageid: { n: 1, br: o.d.readInt32, bw: o.h.writeInt32 },
                bundleid: { n: 2, br: o.d.readInt32, bw: o.h.writeInt32 },
                purchase_option_name: {
                  n: 3,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                final_price_in_cents: {
                  n: 5,
                  br: o.d.readInt64String,
                  bw: o.h.writeInt64String,
                },
                original_price_in_cents: {
                  n: 6,
                  br: o.d.readInt64String,
                  bw: o.h.writeInt64String,
                },
                user_final_price_in_cents: {
                  n: 7,
                  br: o.d.readInt64String,
                  bw: o.h.writeInt64String,
                },
                formatted_final_price: {
                  n: 8,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                formatted_original_price: {
                  n: 9,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                discount_pct: { n: 10, br: o.d.readInt32, bw: o.h.writeInt32 },
                user_discount_pct: {
                  n: 11,
                  br: o.d.readInt32,
                  bw: o.h.writeInt32,
                },
                bundle_discount_pct: {
                  n: 12,
                  br: o.d.readInt32,
                  bw: o.h.writeInt32,
                },
                active_discounts: { n: 20, c: w, r: !0, q: !0 },
                user_active_discounts: { n: 21, c: w, r: !0, q: !0 },
                inactive_discounts: { n: 22, c: w, r: !0, q: !0 },
                user_can_purchase: {
                  n: 30,
                  br: o.d.readBool,
                  bw: o.h.writeBool,
                },
                user_can_purchase_as_gift: {
                  n: 31,
                  br: o.d.readBool,
                  bw: o.h.writeBool,
                },
                is_commercial_license: {
                  n: 40,
                  br: o.d.readBool,
                  bw: o.h.writeBool,
                },
                should_suppress_discount_pct: {
                  n: 41,
                  br: o.d.readBool,
                  bw: o.h.writeBool,
                },
              },
            }),
          v.sm_m
        );
      }
      static MBF() {
        return v.sm_mbf || (v.sm_mbf = o.e(v.M())), v.sm_mbf;
      }
      toObject(e = !1) {
        return v.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(v.M(), e, t);
      }
      static fromObject(e) {
        return o.c(v.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new v();
        return v.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(v.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(v.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_PurchaseOption";
      }
    }
    class w extends a {
      constructor(e = null) {
        super(),
          w.prototype.discount_amount || o.a(w.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          w.sm_m ||
            (w.sm_m = {
              proto: w,
              fields: {
                discount_amount: {
                  n: 1,
                  br: o.d.readInt64String,
                  bw: o.h.writeInt64String,
                },
                discount_description: {
                  n: 2,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                discount_end_date: {
                  n: 3,
                  br: o.d.readUint32,
                  bw: o.h.writeUint32,
                },
              },
            }),
          w.sm_m
        );
      }
      static MBF() {
        return w.sm_mbf || (w.sm_mbf = o.e(w.M())), w.sm_mbf;
      }
      toObject(e = !1) {
        return w.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(w.M(), e, t);
      }
      static fromObject(e) {
        return o.c(w.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new w();
        return w.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(w.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(w.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_PurchaseOption_Discount";
      }
    }
    class S extends a {
      constructor(e = null) {
        super(),
          S.prototype.all_ages_screenshots || o.a(S.M()),
          a.initialize(this, e, 0, -1, [2, 3], null);
      }
      static M() {
        return (
          S.sm_m ||
            (S.sm_m = {
              proto: S,
              fields: {
                all_ages_screenshots: { n: 2, c: E, r: !0, q: !0 },
                mature_content_screenshots: { n: 3, c: E, r: !0, q: !0 },
              },
            }),
          S.sm_m
        );
      }
      static MBF() {
        return S.sm_mbf || (S.sm_mbf = o.e(S.M())), S.sm_mbf;
      }
      toObject(e = !1) {
        return S.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(S.M(), e, t);
      }
      static fromObject(e) {
        return o.c(S.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new S();
        return S.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(S.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(S.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Screenshots";
      }
    }
    class E extends a {
      constructor(e = null) {
        super(),
          E.prototype.filename || o.a(E.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          E.sm_m ||
            (E.sm_m = {
              proto: E,
              fields: {
                filename: { n: 1, br: o.d.readString, bw: o.h.writeString },
                ordinal: { n: 2, br: o.d.readInt32, bw: o.h.writeInt32 },
              },
            }),
          E.sm_m
        );
      }
      static MBF() {
        return E.sm_mbf || (E.sm_mbf = o.e(E.M())), E.sm_mbf;
      }
      toObject(e = !1) {
        return E.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(E.M(), e, t);
      }
      static fromObject(e) {
        return o.c(E.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new E();
        return E.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(E.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(E.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Screenshots_Screenshot";
      }
    }
    class T extends a {
      constructor(e = null) {
        super(),
          T.prototype.highlights || o.a(T.M()),
          a.initialize(this, e, 0, -1, [1, 2], null);
      }
      static M() {
        return (
          T.sm_m ||
            (T.sm_m = {
              proto: T,
              fields: {
                highlights: { n: 1, c: A, r: !0, q: !0 },
                other_trailers: { n: 2, c: A, r: !0, q: !0 },
              },
            }),
          T.sm_m
        );
      }
      static MBF() {
        return T.sm_mbf || (T.sm_mbf = o.e(T.M())), T.sm_mbf;
      }
      toObject(e = !1) {
        return T.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(T.M(), e, t);
      }
      static fromObject(e) {
        return o.c(T.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new T();
        return T.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(T.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(T.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Trailers";
      }
    }
    class j extends a {
      constructor(e = null) {
        super(),
          j.prototype.filename || o.a(j.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          j.sm_m ||
            (j.sm_m = {
              proto: j,
              fields: {
                filename: { n: 1, br: o.d.readString, bw: o.h.writeString },
                type: { n: 2, br: o.d.readString, bw: o.h.writeString },
              },
            }),
          j.sm_m
        );
      }
      static MBF() {
        return j.sm_mbf || (j.sm_mbf = o.e(j.M())), j.sm_mbf;
      }
      toObject(e = !1) {
        return j.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(j.M(), e, t);
      }
      static fromObject(e) {
        return o.c(j.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new j();
        return j.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(j.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(j.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Trailers_VideoSource";
      }
    }
    class A extends a {
      constructor(e = null) {
        super(),
          A.prototype.trailer_name || o.a(A.M()),
          a.initialize(this, e, 0, -1, [3, 4, 5], null);
      }
      static M() {
        return (
          A.sm_m ||
            (A.sm_m = {
              proto: A,
              fields: {
                trailer_name: { n: 1, br: o.d.readString, bw: o.h.writeString },
                trailer_url_format: {
                  n: 2,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                trailer_480p: { n: 3, c: j, r: !0, q: !0 },
                trailer_max: { n: 4, c: j, r: !0, q: !0 },
                microtrailer: { n: 5, c: j, r: !0, q: !0 },
                screenshot_medium: {
                  n: 10,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                screenshot_full: {
                  n: 11,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                trailer_base_id: {
                  n: 12,
                  br: o.d.readInt32,
                  bw: o.h.writeInt32,
                },
              },
            }),
          A.sm_m
        );
      }
      static MBF() {
        return A.sm_mbf || (A.sm_mbf = o.e(A.M())), A.sm_mbf;
      }
      toObject(e = !1) {
        return A.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(A.M(), e, t);
      }
      static fromObject(e) {
        return o.c(A.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new A();
        return A.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(A.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(A.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Trailers_Trailer";
      }
    }
    class O extends a {
      constructor(e = null) {
        super(),
          O.prototype.elanguage || o.a(O.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          O.sm_m ||
            (O.sm_m = {
              proto: O,
              fields: {
                elanguage: { n: 1, br: o.d.readInt32, bw: o.h.writeInt32 },
                supported: { n: 2, br: o.d.readBool, bw: o.h.writeBool },
                full_audio: { n: 3, br: o.d.readBool, bw: o.h.writeBool },
                subtitles: { n: 4, br: o.d.readBool, bw: o.h.writeBool },
              },
            }),
          O.sm_m
        );
      }
      static MBF() {
        return O.sm_mbf || (O.sm_mbf = o.e(O.M())), O.sm_mbf;
      }
      toObject(e = !1) {
        return O.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(O.M(), e, t);
      }
      static fromObject(e) {
        return o.c(O.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new O();
        return O.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(O.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(O.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_SupportedLanguage";
      }
    }
    class B extends a {
      constructor(e = null) {
        super(),
          B.prototype.start_time || o.a(B.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          B.sm_m ||
            (B.sm_m = {
              proto: B,
              fields: {
                start_time: { n: 1, br: o.d.readUint32, bw: o.h.writeUint32 },
                end_time: { n: 2, br: o.d.readUint32, bw: o.h.writeUint32 },
                text: { n: 3, br: o.d.readString, bw: o.h.writeString },
              },
            }),
          B.sm_m
        );
      }
      static MBF() {
        return B.sm_mbf || (B.sm_mbf = o.e(B.M())), B.sm_mbf;
      }
      toObject(e = !1) {
        return B.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(B.M(), e, t);
      }
      static fromObject(e) {
        return o.c(B.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new B();
        return B.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(B.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(B.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_FreeWeekend";
      }
    }
    (class extends a {});
    (class extends a {});
    (class extends a {});
    (class extends a {});
    class C extends a {
      constructor(e = null) {
        super(),
          C.prototype.store_items || o.a(C.M()),
          a.initialize(this, e, 0, -1, [1], null);
      }
      static M() {
        return (
          C.sm_m ||
            (C.sm_m = {
              proto: C,
              fields: { store_items: { n: 1, c: l, r: !0, q: !0 } },
            }),
          C.sm_m
        );
      }
      static MBF() {
        return C.sm_mbf || (C.sm_mbf = o.e(C.M())), C.sm_mbf;
      }
      toObject(e = !1) {
        return C.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(C.M(), e, t);
      }
      static fromObject(e) {
        return o.c(C.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new C();
        return C.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(C.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(C.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CStoreBrowse_GetItems_Response";
      }
    }
    (class extends a {});
    class x extends a {
      constructor(e = null) {
        super(),
          x.prototype.categories || o.a(x.M()),
          a.initialize(this, e, 0, -1, [1], null);
      }
      static M() {
        return (
          x.sm_m ||
            (x.sm_m = {
              proto: x,
              fields: { categories: { n: 1, c: M, r: !0, q: !0 } },
            }),
          x.sm_m
        );
      }
      static MBF() {
        return x.sm_mbf || (x.sm_mbf = o.e(x.M())), x.sm_mbf;
      }
      toObject(e = !1) {
        return x.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(x.M(), e, t);
      }
      static fromObject(e) {
        return o.c(x.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new x();
        return x.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(x.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(x.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CStoreBrowse_GetStoreCategories_Response";
      }
    }
    class M extends a {
      constructor(e = null) {
        super(),
          M.prototype.categoryid || o.a(M.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          M.sm_m ||
            (M.sm_m = {
              proto: M,
              fields: {
                categoryid: { n: 1, br: o.d.readUint32, bw: o.h.writeUint32 },
                type: { n: 2, br: o.d.readEnum, bw: o.h.writeEnum },
                internal_name: {
                  n: 3,
                  br: o.d.readString,
                  bw: o.h.writeString,
                },
                display_name: { n: 4, br: o.d.readString, bw: o.h.writeString },
                image_url: { n: 5, br: o.d.readString, bw: o.h.writeString },
                show_in_search: { n: 6, br: o.d.readBool, bw: o.h.writeBool },
              },
            }),
          M.sm_m
        );
      }
      static MBF() {
        return M.sm_mbf || (M.sm_mbf = o.e(M.M())), M.sm_mbf;
      }
      toObject(e = !1) {
        return M.toObject(e, this);
      }
      static toObject(e, t) {
        return o.g(M.M(), e, t);
      }
      static fromObject(e) {
        return o.c(M.M(), e);
      }
      static deserializeBinary(e) {
        var e = new n.BinaryReader(e),
          t = new M();
        return M.deserializeBinaryFromReader(t, e);
      }
      static deserializeBinaryFromReader(e, t) {
        return o.b(M.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        o.f(M.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CStoreBrowse_GetStoreCategories_Response_Category";
      }
    }
  },
  bbDT: function (e, t, r) {
    "use strict";
    var n;
    r.d(t, "a", function () {
      return n;
    }),
      ((r = n = n || {})[(r.k_ESteamRealmUnknown = 0)] =
        "k_ESteamRealmUnknown"),
      (r[(r.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
      (r[(r.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
  },
  bpGV: function (e, t, r) {
    "use strict";
    r("0N1H");
  },
  dOeV: function (e, t, r) {
    "use strict";
    var n = r("hRO2");
    r("sQq0"), n.Message;
  },
  dPTY: function (e, t, r) {},
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
  gJ0y: function (e, t, r) {},
  hIuj: function (e, t, r) {
    "use strict";
    var s = r("SgzI"),
      n = {},
      l =
        ([
          "object",
          "boolean",
          "number",
          "function",
          "string",
          "symbol",
        ].forEach(function (t, r) {
          n[t] = function (e) {
            return typeof e === t || "a" + (r < 1 ? "n " : " ") + t;
          };
        }),
        {}),
      i = s.version.split(".");
    function u(e, t) {
      for (var r = t ? t.split(".") : i, n = e.split("."), o = 0; o < 3; o++) {
        if (r[o] > n[o]) return !0;
        if (r[o] < n[o]) return !1;
      }
      return !1;
    }
    (n.transitional = function (n, o, r) {
      var i = o && u(o);
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
            !l[t] &&
            ((l[t] = !0),
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
        isOlderVersion: u,
        assertOptions: function (e, t, r) {
          if ("object" != typeof e)
            throw new TypeError("options must be an object");
          for (var n = Object.keys(e), o = n.length; 0 < o--; ) {
            var i = n[o],
              a = t[i];
            if (a) {
              var s = e[i],
                a = void 0 === s || a(s, i, e);
              if (!0 !== a)
                throw new TypeError("option " + i + " must be " + a);
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
        },
        COMPILED =
          (($jscomp.global = $jscomp.getGlobal(this)),
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
                ($jscomp.global.Symbol.iterator =
                  $jscomp.global.Symbol("iterator")),
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
                return r < e.length
                  ? { done: !1, value: e[r++] }
                  : { done: !0 };
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
                  var e;
                  return n < t.length
                    ? ((e = n++), { value: r(e, t[e]), done: !1 })
                    : ((o.next = function () {
                        return { done: !0, value: void 0 };
                      }),
                      o.next());
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
            $jscomp.array.installHelper_(
              "copyWithin",
              $jscomp.array.copyWithin
            );
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
                (((((e >>> 16) & 65535) * n + r * ((t >>> 16) & 65535)) <<
                  16) >>>
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
                  (t =
                    (t += String.fromCharCode(((n >>> 10) & 1023) | 55296)) +
                    String.fromCharCode((1023 & n) | 56320)));
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
            var t,
              r = $jscomp.checkStringArgs(this, null, "codePointAt"),
              n = r.length;
            if (0 <= (e = Number(e) || 0) && e < n)
              return (t = r.charCodeAt((e |= 0))) < 55296 ||
                56319 < t ||
                e + 1 === n ||
                (e = r.charCodeAt(e + 1)) < 56320 ||
                57343 < e
                ? t
                : 1024 * (t - 55296) + e + 9216;
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
          }),
          !0),
        goog = goog || {},
        jspb =
          ((goog.global = this),
          (goog.isDef = function (e) {
            return void 0 !== e;
          }),
          (goog.exportPath_ = function (e, t, r) {
            (e = e.split(".")),
              (r = r || goog.global),
              e[0] in r || !r.execScript || r.execScript("var " + e[0]);
            for (var n; e.length && (n = e.shift()); )
              !e.length && goog.isDef(t)
                ? (r[n] = t)
                : (r = r[n] || (r[n] = {}));
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
            if (
              !goog.isString(e) ||
              !e ||
              -1 == e.search(goog.VALID_MODULE_RE_)
            )
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
                e in i.requires || (i.requires[e] = {}),
                  (i.requires[e][t] = !0);
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
              (goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_)(
                e,
                t
              ) && (goog.dependencies_.written[e] = !0);
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
                for (var r = 0; r < e; r++)
                  goog.maybeProcessDeferredPath_(t[r]);
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
                  if (!goog.isString(e))
                    throw Error("Invalid module definition");
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
              var t = e,
                r =
                  ((e = goog.normalizePath_(e)),
                  goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_),
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
            return (
              "array" == t || ("object" == t && "number" == typeof e.length)
            );
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
            if (t)
              return 2 < arguments.length
                ? ((n = Array.prototype.slice.call(arguments, 2)),
                  function () {
                    var e = Array.prototype.slice.call(arguments);
                    return Array.prototype.unshift.apply(e, n), t.apply(r, e);
                  })
                : function () {
                    return t.apply(r, arguments);
                  };
            var n;
            throw Error();
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
              if (!goog.global.eval)
                throw Error("goog.globalEval not available");
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
          (goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ =
            "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
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
                l = o[a] || "",
                u = RegExp("(\\d*)(\\D*)", "g"),
                c = RegExp("(\\d*)(\\D*)", "g");
              do {
                var p = u.exec(s) || ["", "", ""],
                  f = c.exec(l) || ["", "", ""];
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
          }),
          {
            Map: function (e, t) {
              (this.arr_ = e),
                (this.valueCtor_ = t),
                (this.map_ = {}),
                (this.arrClean = !0),
                0 < this.arr_.length && this.loadFromArray_();
            },
          });
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
            var i = this.map_[r[o][0].toString()],
              a = (this.wrapEntry_(i), i.valueWrapper);
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
          (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] =
            function () {
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
                    l = 0;
                  l < o;
                  l++
                )
                  l in s && ((n = s[l]), t.call(r, n, l, e) && (i[a++] = n));
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
          var r,
            t = goog.array.indexOf(e, t);
          return (r = 0 <= t) && goog.array.removeAt(e, t), r;
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
            var l = (a + s) >> 1,
              u = r ? t.call(o, e[l], l, e) : t(n, e[l]);
            0 < u ? (a = 1 + l) : ((s = l), (i = !u));
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
        (goog.labs.userAgent.util.userAgent_ =
          goog.labs.userAgent.util.getNativeUserAgentString_()),
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
        (goog.object.PROTOTYPE_FIELDS_ =
          "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
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
            r = {},
            n =
              (goog.array.forEach(t, function (e) {
                r[e[0]] = e[1];
              }),
              goog.partial(goog.object.containsKey, r));
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
          if ((e = goog.labs.userAgent.util.getUserAgent())) {
            var e = goog.labs.userAgent.util.extractVersionTuples(e),
              t = goog.labs.userAgent.engine.getEngineTuple_(e);
            if (t)
              return "Gecko" == t[0]
                ? goog.labs.userAgent.engine.getVersionForKey_(e, "Firefox")
                : t[1];
            if ((e = e[0]) && (t = e[2]) && (t = /Trident\/([^\s;]+)/.exec(t)))
              return t[1];
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
        (goog.userAgent.DOCUMENT_MODE = (function () {
          var e = goog.global.document,
            t = goog.userAgent.getDocumentMode_();
          return e && goog.userAgent.IE
            ? t ||
                ("CSS1Compat" == e.compatMode
                  ? parseInt(goog.userAgent.VERSION, 10)
                  : 5)
            : void 0;
        })()),
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
              l = o + 2 < e.length,
              u = i >> 2,
              i = ((3 & i) << 4) | (s >> 4),
              s = ((15 & s) << 2) | ((c = l ? e[o + 2] : 0) >> 6),
              c = 63 & c;
            l || ((c = 64), a || (s = 64)), n.push(r[u], r[i], r[s], r[c]);
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
              (goog.crypt.base64.byteToCharMap_[e] =
                goog.crypt.base64.ENCODED_VALS.charAt(e)),
                (goog.crypt.base64.charToByteMap_[
                  goog.crypt.base64.byteToCharMap_[e]
                ] = e),
                (goog.crypt.base64.byteToCharMapWebSafe_[e] =
                  goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(e)),
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
            var o = r[o],
              i = o.fieldInfo;
            if (!o.binaryWriterFn)
              throw Error(
                "Message extension present that was generated without binary serialization support"
              );
            var a = n.call(e, i);
            if (null != a)
              if (i.isMessageType()) {
                if (!o.binaryMessageSerializeFn)
                  throw Error(
                    "Message extension present holding submessage without binary support enabled, and message is being serialized to binary format"
                  );
                o.binaryWriterFn.call(
                  t,
                  i.fieldIndex,
                  a,
                  o.binaryMessageSerializeFn
                );
              } else o.binaryWriterFn.call(t, i.fieldIndex, a);
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
          var r, n;
          return t < e.pivot_
            ? ((r = jspb.Message.getIndex_(e, t)),
              (n = e.array[r]) === jspb.Message.EMPTY_LIST_SENTINEL_
                ? (e.array[r] = [])
                : n)
            : e.extensionObject_
            ? (n = e.extensionObject_[t]) === jspb.Message.EMPTY_LIST_SENTINEL_
              ? (e.extensionObject_[t] = [])
              : n
            : void 0;
        }),
        (jspb.Message.getRepeatedField = function (e, t) {
          var r, n;
          return t < e.pivot_
            ? ((r = jspb.Message.getIndex_(e, t)),
              (n = e.array[r]) === jspb.Message.EMPTY_LIST_SENTINEL_
                ? (e.array[r] = [])
                : n)
            : (n = e.extensionObject_[t]) === jspb.Message.EMPTY_LIST_SENTINEL_
            ? (e.extensionObject_[t] = [])
            : n;
        }),
        (jspb.Message.getOptionalFloatingPointField = function (e, t) {
          e = jspb.Message.getField(e, t);
          return null == e ? e : +e;
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
          if (goog.isArray(e))
            for (var r = Array(e.length), n = 0; n < e.length; n++)
              null != (t = e[n]) &&
                (r[n] =
                  "object" == typeof t
                    ? jspb.Message.clone_(goog.asserts.assert(t))
                    : t);
          else {
            if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array)
              return new Uint8Array(e);
            for (n in ((r = {}), e))
              (t = e[n]),
                null != t &&
                  (r[n] =
                    "object" == typeof t
                      ? jspb.Message.clone_(goog.asserts.assert(t))
                      : t);
          }
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
          var t = e < 0,
            r =
              ((e = 2 * Math.abs(e)),
              jspb.utils.splitUint64(e),
              (e = jspb.utils.split64Low),
              jspb.utils.split64High);
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
          var r = 2147483648 & t,
            e =
              (r &&
                ((t = ~t >>> 0),
                0 == (e = (1 + ~e) >>> 0) && (t = (t + 1) >>> 0)),
              jspb.utils.joinUint64(e, t));
          return r ? -e : e;
        }),
        (jspb.utils.joinZigzag64 = function (e, t) {
          var r = 1 & e,
            e =
              ((e = ((e >>> 1) | (t << 31)) >>> 0),
              (t >>>= 1),
              r && 0 == (e = (e + 1) >>> 0) && (t = (t + 1) >>> 0),
              jspb.utils.joinUint64(e, t));
          return r ? -e : e;
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
            t = jspb.BinaryConstants.TWO_TO_32 * (1048575 & t) + e;
          return 2047 == n
            ? t
              ? NaN
              : (1 / 0) * r
            : 0 == n
            ? r * Math.pow(2, -1074) * t
            : r * Math.pow(2, n - 1075) * (t + jspb.BinaryConstants.TWO_TO_52);
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
          var n =
              (16777215 & e) +
              6777216 * (e = (((e >>> 24) | (t << 8)) >>> 0) & 16777215) +
              6710656 * (t = (t >> 16) & 65535),
            e = e + 8147497 * t,
            t = 2 * t,
            o =
              (1e7 <= n && ((e += Math.floor(n / 1e7)), (n %= 1e7)),
              1e7 <= e && ((t += Math.floor(e / 1e7)), (e %= 1e7)),
              jspb.utils.DIGITS),
            i = !1,
            a = "";
          return (t || i) && r(t), (e || i) && r(e), (n || i) && r(n), a;
        }),
        (jspb.utils.joinSignedDecimalString = function (e, t) {
          var r = 2147483648 & t,
            e =
              (r && (t = (~t + (0 == (e = (1 + ~e) >>> 0) ? 1 : 0)) >>> 0),
              jspb.utils.joinUnsignedDecimalString(e, t));
          return r ? "-" + e : e;
        }),
        (jspb.utils.hash64ToDecimalString = function (e, t) {
          jspb.utils.splitHash64(e);
          var e = jspb.utils.split64Low,
            r = jspb.utils.split64High;
          return t
            ? jspb.utils.joinSignedDecimalString(e, r)
            : jspb.utils.joinUnsignedDecimalString(e, r);
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
          if (r) {
            for (var i = 0; i < 8; i++) o[i] = 255 & ~o[i];
            t(1, 1);
          }
          return goog.crypt.byteArrayToString(o);
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
          var e = jspb.utils.split64Low,
            r = jspb.utils.split64High;
          return t ? jspb.utils.joinInt64(e, r) : jspb.utils.joinUint64(e, r);
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
          var n;
          return jspb.BinaryIterator.instanceCache_.length
            ? ((n = jspb.BinaryIterator.instanceCache_.pop()).init_(e, t, r), n)
            : new jspb.BinaryIterator(e, t, r);
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
            (this.tempHigh_ =
              this.tempLow_ =
              this.cursor_ =
              this.end_ =
              this.start_ =
                0),
            (this.error_ = !1),
            e && this.setBlock(e, t, r);
        }),
        (jspb.BinaryDecoder.instanceCache_ = []),
        (jspb.BinaryDecoder.alloc = function (e, t, r) {
          var n;
          return jspb.BinaryDecoder.instanceCache_.length
            ? ((n = jspb.BinaryDecoder.instanceCache_.pop()),
              e && n.setBlock(e, t, r),
              n)
            : new jspb.BinaryDecoder(e, t, r);
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
            l = e[t + 6],
            e = e[t + 7];
          return (
            (this.cursor_ += 8), String.fromCharCode(r, n, o, i, a, s, l, e)
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
          var n;
          return jspb.BinaryReader.instanceCache_.length
            ? ((n = jspb.BinaryReader.instanceCache_.pop()),
              e && n.decoder_.setBlock(e, t, r),
              n)
            : new jspb.BinaryReader(e, t, r);
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
    !(function e() {
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
  iE8r: function (e, t, r) {},
  "jfS+": function (e, t, r) {
    "use strict";
    var n = r("endd");
    function o(e) {
      if ("function" != typeof e)
        throw new TypeError("executor must be a function.");
      this.promise = new Promise(function (e) {
        t = e;
      });
      var t,
        r = this;
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
        l = (1 << s) - 1,
        u = l >> 1,
        c = -7,
        p = r ? o - 1 : 0,
        f = r ? -1 : 1,
        o = e[t + p];
      for (
        p += f, i = o & ((1 << -c) - 1), o >>= -c, c += s;
        0 < c;
        i = 256 * i + e[t + p], p += f, c -= 8
      );
      for (
        a = i & ((1 << -c) - 1), i >>= -c, c += n;
        0 < c;
        a = 256 * a + e[t + p], p += f, c -= 8
      );
      if (0 === i) i = 1 - u;
      else {
        if (i === l) return a ? NaN : (1 / 0) * (o ? -1 : 1);
        (a += Math.pow(2, n)), (i -= u);
      }
      return (o ? -1 : 1) * a * Math.pow(2, i - n);
    }),
      (t.write = function (e, t, r, n, o, i) {
        var a,
          s,
          l = 8 * i - o - 1,
          u = (1 << l) - 1,
          c = u >> 1,
          p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          f = n ? 0 : i - 1,
          g = n ? 1 : -1,
          i = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
        for (
          t = Math.abs(t),
            isNaN(t) || t === 1 / 0
              ? ((s = isNaN(t) ? 1 : 0), (a = u))
              : ((a = Math.floor(Math.log(t) / Math.LN2)),
                t * (n = Math.pow(2, -a)) < 1 && (a--, (n *= 2)),
                2 <= (t += 1 <= a + c ? p / n : p * Math.pow(2, 1 - c)) * n &&
                  (a++, (n /= 2)),
                u <= a + c
                  ? ((s = 0), (a = u))
                  : 1 <= a + c
                  ? ((s = (t * n - 1) * Math.pow(2, o)), (a += c))
                  : ((s = t * Math.pow(2, c - 1) * Math.pow(2, o)), (a = 0)));
          8 <= o;
          e[r + f] = 255 & s, f += g, s /= 256, o -= 8
        );
        for (
          a = (a << o) | s, l += o;
          0 < l;
          e[r + f] = 255 & a, f += g, a /= 256, l -= 8
        );
        e[r + f - g] |= 128 * i;
      });
  },
  l4ti: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return n;
    });
    var n;
    ((r = n = n || {})[(r.EBrowserType_OffScreen = 0)] =
      "EBrowserType_OffScreen"),
      (r[(r.EBrowserType_OpenVROverlay = 1)] = "EBrowserType_OpenVROverlay"),
      (r[(r.EBrowserType_OpenVROverlay_Dashboard = 2)] =
        "EBrowserType_OpenVROverlay_Dashboard"),
      (r[(r.EBrowserType_DirectHWND = 3)] = "EBrowserType_DirectHWND"),
      (r[(r.EBrowserType_DirectHWND_Borderless = 4)] =
        "EBrowserType_DirectHWND_Borderless"),
      (r[(r.EBrowserType_DirectHWND_Hidden = 5)] =
        "EBrowserType_DirectHWND_Hidden"),
      (r[(r.EBrowserType_ChildHWNDNative = 6)] =
        "EBrowserType_ChildHWNDNative"),
      (r[(r.EBrowserType_Transparent_Toplevel = 7)] =
        "EBrowserType_Transparent_Toplevel"),
      (r[(r.EBrowserType_OffScreen_SharedTexture = 8)] =
        "EBrowserType_OffScreen_SharedTexture"),
      (r[(r.EBrowserType_OffScreen_GameOverlay = 9)] =
        "EBrowserType_OffScreen_GameOverlay"),
      (r[(r.EBrowserType_OffScreen_GameOverlay_SharedTexture = 10)] =
        "EBrowserType_OffScreen_GameOverlay_SharedTexture"),
      (r[(r.EBrowserType_Offscreen_FriendsUI = 11)] =
        "EBrowserType_Offscreen_FriendsUI"),
      (r[(r.EBrowserType_MAX = 12)] = "EBrowserType_MAX");
  },
  ldtI: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return n;
    });
    class n {
      constructor() {
        (this.comments = 0),
          (this.inventory_items = 0),
          (this.invites = 0),
          (this.gifts = 0),
          (this.offline_messages = 0),
          (this.trade_offers = 0),
          (this.async_game_updates = 0),
          (this.moderator_messages = 0),
          (this.help_request_replies = 0);
      }
    }
  },
  q1tI: function (e, t, r) {
    "use strict";
    e.exports = r("viRO");
  },
  sQq0: function (e, t, r) {
    "use strict";
    r.d(t, "d", function () {
      return n;
    }),
      r.d(t, "h", function () {
        return o;
      }),
      r.d(t, "e", function () {
        return i;
      }),
      r.d(t, "c", function () {
        return a;
      }),
      r.d(t, "g", function () {
        return s;
      }),
      r.d(t, "b", function () {
        return l;
      }),
      r.d(t, "f", function () {
        return u;
      }),
      r.d(t, "a", function () {
        return c;
      });
    var f = r("hRO2");
    const n = f.BinaryReader.prototype,
      o = f.BinaryWriter.prototype;
    function i(e) {
      let t = {};
      var r,
        n = e["fields"];
      for (r in n) {
        var o = n[r];
        t[o.n] = o;
      }
      return t;
    }
    function a(e, t) {
      const { proto: r, fields: n } = e;
      var o,
        i = new r();
      for (o in n) {
        const { n: a, c: s, r: l } = n[o];
        if (t.hasOwnProperty(o)) {
          const u = t[o];
          s
            ? l
              ? f.Message.setRepeatedWrapperField(
                  i,
                  a,
                  Array.isArray(u) ? u.map((e) => s.fromObject(e)) : []
                )
              : f.Message.setWrapperField(i, a, s.fromObject(u))
            : f.Message.setField(i, a, u);
        }
      }
      return i;
    }
    function s(e, t, r) {
      var n,
        o,
        i = e["fields"];
      let a = {};
      for (n in i) {
        const { n: s, c: l, r: u, d: c, q: p } = i[n];
        l
          ? u
            ? (a[n] = f.Message.toObjectList(
                f.Message.getRepeatedWrapperField(r, l, s),
                l.toObject,
                t
              ))
            : (o = f.Message.getWrapperField(r, l, s, p ? 1 : 0)) &&
              (a[n] = l.toObject(t, o))
          : (null ===
              (o = f.Message.getFieldWithDefault(
                r,
                s,
                void 0 !== c ? c : null
              )) &&
              !p) ||
            (a[n] = o);
      }
      return t && (a.$jspbMessageInstance = r), a;
    }
    function l(e, t, r) {
      for (; r.nextField() && !r.isEndGroup(); ) {
        var n = e[r.getFieldNumber()];
        if (n) {
          const { n: o, c: i, r: a, br: s } = n;
          i
            ? ((n = new i()),
              r.readMessage(n, i.deserializeBinaryFromReader),
              a
                ? f.Message.addToRepeatedWrapperField(t, o, n, i)
                : f.Message.setWrapperField(t, o, n))
            : s
            ? ((n = s.call(r)),
              a
                ? f.Message.addToRepeatedField(t, o, n)
                : f.Message.setField(t, o, n))
            : (console.assert(
                s,
                `Reader func not set for field number ${o} in class ` + i
              ),
              r.skipField());
        } else r.skipField();
      }
      return t;
    }
    function u(e, t, r) {
      var n,
        o,
        i,
        a = e["fields"];
      for (n in a) {
        const { n: s, c: l, r: u, q: c, bw: p } = a[n];
        l
          ? u
            ? (((o = f.Message.getRepeatedWrapperField(t, l, s)) && o.length) ||
                c) &&
              r.writeRepeatedMessage(s, o, l.serializeBinaryToWriter)
            : (o = f.Message.getWrapperField(t, l, s, c ? 1 : 0)) &&
              r.writeMessage(s, o, l.serializeBinaryToWriter)
          : p
          ? void 0 !== (i = f.Message.getField(t, s)) && p.call(r, s, i)
          : console.assert(
              p,
              `Writer func not set for field number ${s} in class ` + l
            );
      }
    }
    function c(e) {
      const t = e.proto;
      for (const a in e.fields) {
        const s = e.fields[a];
        var { n: r, c: n, r: o, d: i } = s;
        s.hasOwnProperty("d")
          ? (t.prototype[a] = p(f.Message.getFieldWithDefault, r, i))
          : (t.prototype[a] = n
              ? o
                ? p(f.Message.getRepeatedWrapperField, n, r)
                : (function (t, r) {
                    return function (e = !0) {
                      return f.Message.getWrapperField(this, t, r, e ? 1 : 0);
                    };
                  })(n, r)
              : p(f.Message.getField, r)),
          (t.prototype["set_" + a] = g(
            n
              ? o
                ? f.Message.setRepeatedWrapperField
                : f.Message.setWrapperField
              : f.Message.setField,
            r
          )),
          o &&
            (t.prototype["add_" + a] = (function (r, n) {
              return n
                ? function (e, t) {
                    return f.Message.addToRepeatedWrapperField(
                      this,
                      r,
                      e,
                      n,
                      t
                    );
                  }
                : function (e, t) {
                    f.Message.addToRepeatedField(this, r, e, t);
                  };
            })(r, n));
      }
    }
    function p(e, ...t) {
      return function () {
        return e(this, ...t);
      };
    }
    function g(t, r) {
      return function (e) {
        return t(this, r, e);
      };
    }
  },
  tQ2B: function (e, t, r) {
    "use strict";
    var c = r("xTJ+"),
      p = r("Rn+g"),
      f = r("eqyj"),
      g = r("MLWZ"),
      d = r("g7np"),
      h = r("w0Vi"),
      b = r("OTTw"),
      m = r("LYNF");
    e.exports = function (u) {
      return new Promise(function (t, r) {
        var e,
          n = u.data,
          o = u.headers,
          i = u.responseType,
          a =
            (c.isFormData(n) && delete o["Content-Type"], new XMLHttpRequest()),
          s =
            (u.auth &&
              ((s = u.auth.username || ""),
              (e = u.auth.password
                ? unescape(encodeURIComponent(u.auth.password))
                : ""),
              (o.Authorization = "Basic " + btoa(s + ":" + e))),
            d(u.baseURL, u.url));
        function l() {
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
              config: u,
              request: a,
            }),
            p(t, r, e),
            (a = null));
        }
        a.open(u.method.toUpperCase(), g(s, u.params, u.paramsSerializer), !0),
          (a.timeout = u.timeout),
          "onloadend" in a
            ? (a.onloadend = l)
            : (a.onreadystatechange = function () {
                a &&
                  4 === a.readyState &&
                  (0 !== a.status ||
                    (a.responseURL && 0 === a.responseURL.indexOf("file:"))) &&
                  setTimeout(l);
              }),
          (a.onabort = function () {
            a && (r(m("Request aborted", u, "ECONNABORTED", a)), (a = null));
          }),
          (a.onerror = function () {
            r(m("Network Error", u, null, a)), (a = null);
          }),
          (a.ontimeout = function () {
            var e = "timeout of " + u.timeout + "ms exceeded";
            u.timeoutErrorMessage && (e = u.timeoutErrorMessage),
              r(
                m(
                  e,
                  u,
                  u.transitional && u.transitional.clarifyTimeoutError
                    ? "ETIMEDOUT"
                    : "ECONNABORTED",
                  a
                )
              ),
              (a = null);
          }),
          c.isStandardBrowserEnv() &&
            (e =
              (u.withCredentials || b(s)) && u.xsrfCookieName
                ? f.read(u.xsrfCookieName)
                : void 0) &&
            (o[u.xsrfHeaderName] = e),
          "setRequestHeader" in a &&
            c.forEach(o, function (e, t) {
              void 0 === n && "content-type" === t.toLowerCase()
                ? delete o[t]
                : a.setRequestHeader(t, e);
            }),
          c.isUndefined(u.withCredentials) ||
            (a.withCredentials = !!u.withCredentials),
          i && "json" !== i && (a.responseType = u.responseType),
          "function" == typeof u.onDownloadProgress &&
            a.addEventListener("progress", u.onDownloadProgress),
          "function" == typeof u.onUploadProgress &&
            a.upload &&
            a.upload.addEventListener("progress", u.onUploadProgress),
          u.cancelToken &&
            u.cancelToken.promise.then(function (e) {
              a && (a.abort(), r(e), (a = null));
            }),
          (n = n || null),
          a.send(n);
      });
    };
  },
  tjlA: function (e, I, k) {
    "use strict";
    !function (e) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <http://feross.org>
       * @license  MIT
       */
      var T = k("H7XF"),
        i = k("kVK+"),
        s = k("49sm");
      function r() {
        return p.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function l(e, t) {
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
        return a(this, e);
      }
      function n(e, t, r, n) {
        if ("number" == typeof t)
          throw new TypeError('"value" argument must not be a number');
        if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) {
          var o = e,
            i = t,
            a = r;
          if ((i.byteLength, a < 0 || i.byteLength < a))
            throw new RangeError("'offset' is out of bounds");
          if (i.byteLength < a + (n || 0))
            throw new RangeError("'length' is out of bounds");
          return (
            (i =
              void 0 === a && void 0 === n
                ? new Uint8Array(i)
                : void 0 === n
                ? new Uint8Array(i, a)
                : new Uint8Array(i, a, n)),
            p.TYPED_ARRAY_SUPPORT
              ? ((o = i).__proto__ = p.prototype)
              : (o = u(o, i)),
            o
          );
        }
        if ("string" != typeof t) {
          (a = e), (n = t);
          if (p.isBuffer(n))
            return (
              (i = 0 | c(n.length)),
              0 !== (a = l(a, i)).length && n.copy(a, 0, 0, i),
              a
            );
          if (n) {
            if (
              ("undefined" != typeof ArrayBuffer &&
                n.buffer instanceof ArrayBuffer) ||
              "length" in n
            )
              return "number" != typeof n.length ||
                (function (e) {
                  return e != e;
                })(n.length)
                ? l(a, 0)
                : u(a, n);
            if ("Buffer" === n.type && s(n.data)) return u(a, n.data);
          }
          throw new TypeError(
            "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
          );
        }
        (o = e), (n = t), (e = r);
        if (!p.isEncoding((e = "string" == typeof e && "" !== e ? e : "utf8")))
          throw new TypeError('"encoding" must be a valid string encoding');
        t = 0 | f(n, e);
        return (o = (n = (o = l(o, t)).write(n, e)) !== t ? o.slice(0, n) : o);
      }
      function o(e) {
        if ("number" != typeof e)
          throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative');
      }
      function a(e, t) {
        if ((o(t), (e = l(e, t < 0 ? 0 : 0 | c(t))), !p.TYPED_ARRAY_SUPPORT))
          for (var r = 0; r < t; ++r) e[r] = 0;
        return e;
      }
      function u(e, t) {
        var r = t.length < 0 ? 0 : 0 | c(t.length);
        e = l(e, r);
        for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
        return e;
      }
      function c(e) {
        if (e >= r())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              r().toString(16) +
              " bytes"
          );
        return 0 | e;
      }
      function f(e, t) {
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
              return C(e).length;
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
              if (n) return C(e).length;
              (t = ("" + t).toLowerCase()), (n = !0);
          }
      }
      function t(e, t, r) {
        var n,
          o = !1;
        if ((t = void 0 === t || t < 0 ? 0 : t) > this.length) return "";
        if ((r = void 0 === r || r > this.length ? this.length : r) <= 0)
          return "";
        if ((r >>>= 0) <= (t >>>= 0)) return "";
        for (e = e || "utf8"; ; )
          switch (e) {
            case "hex":
              var i = this,
                a = t,
                s = r,
                l = i.length;
              (!s || s < 0 || l < s) && (s = l);
              for (var u = "", c = (a = !a || a < 0 ? 0 : a); c < s; ++c)
                u += (function (e) {
                  return e < 16 ? "0" + e.toString(16) : e.toString(16);
                })(i[c]);
              return u;
            case "utf8":
            case "utf-8":
              return j(this, t, r);
            case "ascii":
              var p = this,
                l = t,
                f = r,
                g = "";
              f = Math.min(p.length, f);
              for (var d = l; d < f; ++d) g += String.fromCharCode(127 & p[d]);
              return g;
            case "latin1":
            case "binary":
              var h = this,
                a = t,
                b = r,
                m = "";
              b = Math.min(h.length, b);
              for (var y = a; y < b; ++y) m += String.fromCharCode(h[y]);
              return m;
            case "base64":
              return (
                (_ = this),
                (n = r),
                0 === (v = t) && n === _.length
                  ? T.fromByteArray(_)
                  : T.fromByteArray(_.slice(v, n))
              );
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              for (
                var _ = t, v = r, w = this.slice(_, v), S = "", E = 0;
                E < w.length;
                E += 2
              )
                S += String.fromCharCode(w[E] + 256 * w[E + 1]);
              return S;
            default:
              if (o) throw new TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (o = !0);
          }
      }
      function g(e, t, r) {
        var n = e[t];
        (e[t] = e[r]), (e[r] = n);
      }
      function d(e, t, r, n, o) {
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
          return 0 === t.length ? -1 : h(e, t, r, n, o);
        if ("number" == typeof t)
          return (
            (t &= 255),
            p.TYPED_ARRAY_SUPPORT &&
            "function" == typeof Uint8Array.prototype.indexOf
              ? (o
                  ? Uint8Array.prototype.indexOf
                  : Uint8Array.prototype.lastIndexOf
                ).call(e, t, r)
              : h(e, [t], r, n, o)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function h(e, t, r, n, o) {
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
        function l(e, t) {
          return 1 === i ? e[t] : e.readUInt16BE(t * i);
        }
        if (o)
          for (var u = -1, c = r; c < a; c++)
            if (l(e, c) === l(t, -1 === u ? 0 : c - u)) {
              if (c - (u = -1 === u ? c : u) + 1 === s) return u * i;
            } else -1 !== u && (c -= c - u), (u = -1);
        else
          for (c = r = a < r + s ? a - s : r; 0 <= c; c--) {
            for (var p = !0, f = 0; f < s; f++)
              if (l(e, c + f) !== l(t, f)) {
                p = !1;
                break;
              }
            if (p) return c;
          }
        return -1;
      }
      function b(e, t, r, n) {
        return M(
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
        return M(
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
      function j(e, t, r) {
        r = Math.min(e.length, r);
        for (var n = [], o = t; o < r; ) {
          var i,
            a,
            s,
            l,
            u = e[o],
            c = null,
            p = 239 < u ? 4 : 223 < u ? 3 : 191 < u ? 2 : 1;
          if (o + p <= r)
            switch (p) {
              case 1:
                u < 128 && (c = u);
                break;
              case 2:
                128 == (192 & (i = e[o + 1])) &&
                  127 < (l = ((31 & u) << 6) | (63 & i)) &&
                  (c = l);
                break;
              case 3:
                (i = e[o + 1]),
                  (a = e[o + 2]),
                  128 == (192 & i) &&
                    128 == (192 & a) &&
                    2047 <
                      (l = ((15 & u) << 12) | ((63 & i) << 6) | (63 & a)) &&
                    (l < 55296 || 57343 < l) &&
                    (c = l);
                break;
              case 4:
                (i = e[o + 1]),
                  (a = e[o + 2]),
                  (s = e[o + 3]),
                  128 == (192 & i) &&
                    128 == (192 & a) &&
                    128 == (192 & s) &&
                    65535 <
                      (l =
                        ((15 & u) << 18) |
                        ((63 & i) << 12) |
                        ((63 & a) << 6) |
                        (63 & s)) &&
                    l < 1114112 &&
                    (c = l);
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
        var f = n,
          g = f.length;
        if (g <= y) return String.fromCharCode.apply(String, f);
        for (var d = "", h = 0; h < g; )
          d += String.fromCharCode.apply(String, f.slice(h, (h += y)));
        return d;
      }
      (I.Buffer = p),
        (I.SlowBuffer = function (e) {
          +e != e && (e = 0);
          return p.alloc(+e);
        }),
        (I.INSPECT_MAX_BYTES = 50),
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
        (I.kMaxLength = r()),
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
            o((e = e)),
            !(e <= 0) && void 0 !== t
              ? "string" == typeof r
                ? l(n, e).fill(t, r)
                : l(n, e).fill(t)
              : l(n, e)
          );
          var n;
        }),
        (p.allocUnsafe = function (e) {
          return a(null, e);
        }),
        (p.allocUnsafeSlow = function (e) {
          return a(null, e);
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
          if (!s(e))
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
        (p.byteLength = f),
        (p.prototype._isBuffer = !0),
        (p.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t = 0; t < e; t += 2) g(this, t, t + 1);
          return this;
        }),
        (p.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t = 0; t < e; t += 4)
            g(this, t, t + 3), g(this, t + 1, t + 2);
          return this;
        }),
        (p.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t = 0; t < e; t += 8)
            g(this, t, t + 7),
              g(this, t + 1, t + 6),
              g(this, t + 2, t + 5),
              g(this, t + 3, t + 4);
          return this;
        }),
        (p.prototype.toString = function () {
          var e = 0 | this.length;
          return 0 == e
            ? ""
            : 0 === arguments.length
            ? j(this, 0, e)
            : t.apply(this, arguments);
        }),
        (p.prototype.equals = function (e) {
          if (p.isBuffer(e)) return this === e || 0 === p.compare(this, e);
          throw new TypeError("Argument must be a Buffer");
        }),
        (p.prototype.inspect = function () {
          var e = "",
            t = I.INSPECT_MAX_BYTES;
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
              l = this.slice(n, o),
              u = e.slice(t, r),
              c = 0;
            c < s;
            ++c
          )
            if (l[c] !== u[c]) {
              (i = l[c]), (a = u[c]);
              break;
            }
          return i < a ? -1 : a < i ? 1 : 0;
        }),
        (p.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (p.prototype.indexOf = function (e, t, r) {
          return d(this, e, t, r, !0);
        }),
        (p.prototype.lastIndexOf = function (e, t, r) {
          return d(this, e, t, r, !1);
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
          for (var i, a, s, l = !1; ; )
            switch (n) {
              case "hex":
                var u = this,
                  c = e,
                  p = t,
                  f = r,
                  g = ((p = Number(p) || 0), u.length - p);
                if (
                  ((!f || g < (f = Number(f))) && (f = g),
                  (g = c.length) % 2 != 0)
                )
                  throw new TypeError("Invalid hex string");
                g / 2 < f && (f = g / 2);
                for (var d = 0; d < f; ++d) {
                  var h = parseInt(c.substr(2 * d, 2), 16);
                  if (isNaN(h)) return d;
                  u[p + d] = h;
                }
                return d;
              case "utf8":
              case "utf-8":
                return (
                  (g = t), (s = r), M(C(e, (a = this).length - g), a, g, s)
                );
              case "ascii":
                return b(this, e, t, r);
              case "latin1":
              case "binary":
                return b(this, e, t, r);
              case "base64":
                return (a = this), (s = t), (i = r), M(x(e), a, s, i);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return m(this, e, t, r);
              default:
                if (l) throw new TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (l = !0);
            }
        }),
        (p.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      var y = 4096;
      function _(e, t, r) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (r < e + t)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function v(e, t, r, n, o, i) {
        if (!p.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (o < t || t < i)
          throw new RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw new RangeError("Index out of range");
      }
      function w(e, t, r, n) {
        t < 0 && (t = 65535 + t + 1);
        for (var o = 0, i = Math.min(e.length - r, 2); o < i; ++o)
          e[r + o] =
            (t & (255 << (8 * (n ? o : 1 - o)))) >>> (8 * (n ? o : 1 - o));
      }
      function S(e, t, r, n) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var o = 0, i = Math.min(e.length - r, 4); o < i; ++o)
          e[r + o] = (t >>> (8 * (n ? o : 3 - o))) & 255;
      }
      function E(e, t, r, n) {
        if (r + n > e.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }
      function A(e, t, r, n, o) {
        return o || E(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4;
      }
      function O(e, t, r, n, o) {
        return o || E(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8;
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
          (e |= 0), (t |= 0), r || _(e, t, this.length);
          for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
            n += this[e + i] * o;
          return n;
        }),
        (p.prototype.readUIntBE = function (e, t, r) {
          (e |= 0), (t |= 0), r || _(e, t, this.length);
          for (var n = this[e + --t], o = 1; 0 < t && (o *= 256); )
            n += this[e + --t] * o;
          return n;
        }),
        (p.prototype.readUInt8 = function (e, t) {
          return t || _(e, 1, this.length), this[e];
        }),
        (p.prototype.readUInt16LE = function (e, t) {
          return t || _(e, 2, this.length), this[e] | (this[e + 1] << 8);
        }),
        (p.prototype.readUInt16BE = function (e, t) {
          return t || _(e, 2, this.length), (this[e] << 8) | this[e + 1];
        }),
        (p.prototype.readUInt32LE = function (e, t) {
          return (
            t || _(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              16777216 * this[e + 3]
          );
        }),
        (p.prototype.readUInt32BE = function (e, t) {
          return (
            t || _(e, 4, this.length),
            16777216 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
        (p.prototype.readIntLE = function (e, t, r) {
          (e |= 0), (t |= 0), r || _(e, t, this.length);
          for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
            n += this[e + i] * o;
          return (o *= 128) <= n && (n -= Math.pow(2, 8 * t)), n;
        }),
        (p.prototype.readIntBE = function (e, t, r) {
          (e |= 0), (t |= 0), r || _(e, t, this.length);
          for (var n = t, o = 1, i = this[e + --n]; 0 < n && (o *= 256); )
            i += this[e + --n] * o;
          return (o *= 128) <= i && (i -= Math.pow(2, 8 * t)), i;
        }),
        (p.prototype.readInt8 = function (e, t) {
          return (
            t || _(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (p.prototype.readInt16LE = function (e, t) {
          t || _(e, 2, this.length);
          t = this[e] | (this[e + 1] << 8);
          return 32768 & t ? 4294901760 | t : t;
        }),
        (p.prototype.readInt16BE = function (e, t) {
          t || _(e, 2, this.length);
          t = this[e + 1] | (this[e] << 8);
          return 32768 & t ? 4294901760 | t : t;
        }),
        (p.prototype.readInt32LE = function (e, t) {
          return (
            t || _(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (p.prototype.readInt32BE = function (e, t) {
          return (
            t || _(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (p.prototype.readFloatLE = function (e, t) {
          return t || _(e, 4, this.length), i.read(this, e, !0, 23, 4);
        }),
        (p.prototype.readFloatBE = function (e, t) {
          return t || _(e, 4, this.length), i.read(this, e, !1, 23, 4);
        }),
        (p.prototype.readDoubleLE = function (e, t) {
          return t || _(e, 8, this.length), i.read(this, e, !0, 52, 8);
        }),
        (p.prototype.readDoubleBE = function (e, t) {
          return t || _(e, 8, this.length), i.read(this, e, !1, 52, 8);
        }),
        (p.prototype.writeUIntLE = function (e, t, r, n) {
          (e = +e),
            (t |= 0),
            (r |= 0),
            n || v(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
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
            n || v(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
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
            r || v(this, e, t, 1, 255, 0),
            p.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (p.prototype.writeUInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || v(this, e, t, 2, 65535, 0),
            p.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : w(this, e, t, !0),
            t + 2
          );
        }),
        (p.prototype.writeUInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || v(this, e, t, 2, 65535, 0),
            p.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : w(this, e, t, !1),
            t + 2
          );
        }),
        (p.prototype.writeUInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || v(this, e, t, 4, 4294967295, 0),
            p.TYPED_ARRAY_SUPPORT
              ? ((this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e))
              : S(this, e, t, !0),
            t + 4
          );
        }),
        (p.prototype.writeUInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || v(this, e, t, 4, 4294967295, 0),
            p.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : S(this, e, t, !1),
            t + 4
          );
        }),
        (p.prototype.writeIntLE = function (e, t, r, n) {
          (e = +e),
            (t |= 0),
            n || v(this, e, t, r, (n = Math.pow(2, 8 * r - 1)) - 1, -n);
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
            n || v(this, e, t, r, (n = Math.pow(2, 8 * r - 1)) - 1, -n);
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
            r || v(this, e, t, 1, 127, -128),
            p.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & (e = e < 0 ? 255 + e + 1 : e)),
            t + 1
          );
        }),
        (p.prototype.writeInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || v(this, e, t, 2, 32767, -32768),
            p.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : w(this, e, t, !0),
            t + 2
          );
        }),
        (p.prototype.writeInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || v(this, e, t, 2, 32767, -32768),
            p.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : w(this, e, t, !1),
            t + 2
          );
        }),
        (p.prototype.writeInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || v(this, e, t, 4, 2147483647, -2147483648),
            p.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24))
              : S(this, e, t, !0),
            t + 4
          );
        }),
        (p.prototype.writeInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || v(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            p.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : S(this, e, t, !1),
            t + 4
          );
        }),
        (p.prototype.writeFloatLE = function (e, t, r) {
          return A(this, e, t, !0, r);
        }),
        (p.prototype.writeFloatBE = function (e, t, r) {
          return A(this, e, t, !1, r);
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
          if (!(r <= t))
            if (
              ((t >>>= 0),
              (r = void 0 === r ? this.length : r >>> 0),
              "number" == typeof (e = e || 0))
            )
              for (s = t; s < r; ++s) this[s] = e;
            else
              for (
                var i = p.isBuffer(e) ? e : C(new p(e, n).toString()),
                  a = i.length,
                  s = 0;
                s < r - t;
                ++s
              )
                this[s + t] = i[s % a];
          return this;
        });
      var B = /[^+\/0-9A-Za-z-_]/g;
      function C(e, t) {
        t = t || 1 / 0;
        for (var r, n = e.length, o = null, i = [], a = 0; a < n; ++a) {
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
        return T.toByteArray(
          (function (e) {
            var t;
            if (
              (e = (
                (t = e).trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
              ).replace(B, "")).length < 2
            )
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function M(e, t, r, n) {
        for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o)
          t[o + r] = e[o];
        return o;
      }
    }.call(this, k("yLpj"));
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
  viRO: function (e, P, t) {
    "use strict";
    /** @license React v16.11.0
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var c = t("MgzW"),
      t = "function" == typeof Symbol && Symbol.for,
      p = t ? Symbol.for("react.element") : 60103,
      u = t ? Symbol.for("react.portal") : 60106,
      r = t ? Symbol.for("react.fragment") : 60107,
      n = t ? Symbol.for("react.strict_mode") : 60108,
      o = t ? Symbol.for("react.profiler") : 60114,
      i = t ? Symbol.for("react.provider") : 60109,
      a = t ? Symbol.for("react.context") : 60110,
      s = t ? Symbol.for("react.forward_ref") : 60112,
      l = t ? Symbol.for("react.suspense") : 60113,
      f =
        (t && Symbol.for("react.suspense_list"),
        t ? Symbol.for("react.memo") : 60115),
      g = t ? Symbol.for("react.lazy") : 60116,
      d =
        (t && Symbol.for("react.fundamental"),
        t && Symbol.for("react.responder"),
        t && Symbol.for("react.scope"),
        "function" == typeof Symbol && Symbol.iterator);
    function h(e) {
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
    function y(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = m),
        (this.updater = r || b);
    }
    function _() {}
    function v(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = m),
        (this.updater = r || b);
    }
    (y.prototype.isReactComponent = {}),
      (y.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e)
          throw Error(h(85));
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (y.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (_.prototype = y.prototype);
    var t = (v.prototype = new _()),
      w =
        ((t.constructor = v),
        c(t, y.prototype),
        (t.isPureReactComponent = !0),
        { current: null }),
      S = { current: null },
      E = Object.prototype.hasOwnProperty,
      T = { key: !0, ref: !0, __self: !0, __source: !0 };
    function j(e, t, r) {
      var n,
        o = {},
        i = null,
        a = null;
      if (null != t)
        for (n in (void 0 !== t.ref && (a = t.ref),
        void 0 !== t.key && (i = "" + t.key),
        t))
          E.call(t, n) && !T.hasOwnProperty(n) && (o[n] = t[n]);
      var s = arguments.length - 2;
      if (1 === s) o.children = r;
      else if (1 < s) {
        for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
        o.children = l;
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
    function A(e) {
      return "object" == typeof e && null !== e && e.$$typeof === p;
    }
    var O = /\/+/g,
      B = [];
    function C(e, t, r, n) {
      var o;
      return B.length
        ? (((o = B.pop()).result = e),
          (o.keyPrefix = t),
          (o.func = r),
          (o.context = n),
          (o.count = 0),
          o)
        : { result: e, keyPrefix: t, func: r, context: n, count: 0 };
    }
    function x(e) {
      (e.result = null),
        (e.keyPrefix = null),
        (e.func = null),
        (e.context = null),
        (e.count = 0),
        B.length < 10 && B.push(e);
    }
    function M(e, t, r) {
      return null == e
        ? 0
        : (function e(t, r, n, o) {
            var i = !1;
            if (
              null ===
              (t = "undefined" != (s = typeof t) && "boolean" !== s ? t : null)
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
                    case u:
                      i = !0;
                  }
              }
            if (i) return n(o, t, "" === r ? "." + I(t, 0) : r), 1;
            if (((i = 0), (r = "" === r ? "." : r + ":"), Array.isArray(t)))
              for (var a = 0; a < t.length; a++) {
                var s,
                  l = r + I((s = t[a]), a);
                i += e(s, l, n, o);
              }
            else if (
              "function" ==
              typeof (l =
                null !== t &&
                "object" == typeof t &&
                "function" == typeof (l = (d && t[d]) || t["@@iterator"])
                  ? l
                  : null)
            )
              for (t = l.call(t), a = 0; !(s = t.next()).done; )
                i += e((s = s.value), (l = r + I(s, a++)), n, o);
            else if ("object" === s)
              throw (
                ((n = "" + t),
                Error(
                  h(
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
    function I(e, t) {
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
    function k(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function D(e, t, r) {
      var n = e.result,
        o = e.keyPrefix;
      (e = e.func.call(e.context, t, e.count++)),
        Array.isArray(e)
          ? R(e, n, r, function (e) {
              return e;
            })
          : null != e &&
            (A(e) &&
              ((t =
                o +
                (!(o = e).key || (t && t.key === e.key)
                  ? ""
                  : ("" + e.key).replace(O, "$&/") + "/") +
                r),
              (e = {
                $$typeof: p,
                type: o.type,
                key: t,
                ref: o.ref,
                props: o.props,
                _owner: o._owner,
              })),
            n.push(e));
    }
    function R(e, t, r, n, o) {
      var i = "";
      M(
        e,
        D,
        (t = C(t, (i = null != r ? ("" + r).replace(O, "$&/") + "/" : i), n, o))
      ),
        x(t);
    }
    function N() {
      var e = w.current;
      if (null === e) throw Error(h(321));
      return e;
    }
    t = {
      Children: {
        map: function (e, t, r) {
          if (null == e) return e;
          var n = [];
          return R(e, n, null, t, r), n;
        },
        forEach: function (e, t, r) {
          if (null == e) return e;
          M(e, k, (t = C(null, null, t, r))), x(t);
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
            R(e, t, null, function (e) {
              return e;
            }),
            t
          );
        },
        only: function (e) {
          if (A(e)) return e;
          throw Error(h(143));
        },
      },
      createRef: function () {
        return { current: null };
      },
      Component: y,
      PureComponent: v,
      createContext: function (e, t) {
        return (
          ((e = {
            $$typeof: a,
            _calculateChangedBits: (t = void 0 === t ? null : t),
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }).Provider = { $$typeof: i, _context: e }),
          (e.Consumer = e)
        );
      },
      forwardRef: function (e) {
        return { $$typeof: s, render: e };
      },
      lazy: function (e) {
        return { $$typeof: g, _ctor: e, _status: -1, _result: null };
      },
      memo: function (e, t) {
        return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
      },
      useCallback: function (e, t) {
        return N().useCallback(e, t);
      },
      useContext: function (e, t) {
        return N().useContext(e, t);
      },
      useEffect: function (e, t) {
        return N().useEffect(e, t);
      },
      useImperativeHandle: function (e, t, r) {
        return N().useImperativeHandle(e, t, r);
      },
      useDebugValue: function () {},
      useLayoutEffect: function (e, t) {
        return N().useLayoutEffect(e, t);
      },
      useMemo: function (e, t) {
        return N().useMemo(e, t);
      },
      useReducer: function (e, t, r) {
        return N().useReducer(e, t, r);
      },
      useRef: function (e) {
        return N().useRef(e);
      },
      useState: function (e) {
        return N().useState(e);
      },
      Fragment: r,
      Profiler: o,
      StrictMode: n,
      Suspense: l,
      createElement: j,
      cloneElement: function (e, t, r) {
        if (null == e) throw Error(h(267, e));
        var n = c({}, e.props),
          o = e.key,
          i = e.ref,
          a = e._owner;
        if (null != t)
          for (s in (void 0 !== t.ref && ((i = t.ref), (a = S.current)),
          void 0 !== t.key && (o = "" + t.key),
          e.type && e.type.defaultProps && (l = e.type.defaultProps),
          t))
            E.call(t, s) &&
              !T.hasOwnProperty(s) &&
              (n[s] = (void 0 === t[s] && void 0 !== l ? l : t)[s]);
        var s = arguments.length - 2;
        if (1 === s) n.children = r;
        else if (1 < s) {
          for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
          n.children = l;
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
      isValidElement: A,
      version: "16.11.0",
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        ReactCurrentDispatcher: w,
        ReactCurrentBatchConfig: { suspense: null },
        ReactCurrentOwner: S,
        IsSomeRendererActing: { current: !1 },
        assign: c,
      },
    };
    e.exports = t.default || t;
  },
  vvG3: function (e, t, r) {
    e.exports = {
      EmoticonBow: "shared_svg_library_EmoticonBow_2ly3o",
      EmoticonBow_st0: "shared_svg_library_EmoticonBow_st0_HMUMS",
      EmoticonBow_st1: "shared_svg_library_EmoticonBow_st1_3wZe-",
      SteamDeckCompatInfo: "shared_svg_library_SteamDeckCompatInfo_3266r",
      SteamDeckCompatLogo: "shared_svg_library_SteamDeckCompatLogo_Xa7Sr",
      SteamDeckCompatIcon: "shared_svg_library_SteamDeckCompatIcon_1_u0j",
      SteamDeckCompatVerified:
        "shared_svg_library_SteamDeckCompatVerified_RC4ka",
      SteamDeckCompatPlayable:
        "shared_svg_library_SteamDeckCompatPlayable_2kLuX",
      SteamDeckCompatUnsupported:
        "shared_svg_library_SteamDeckCompatUnsupported_1J1SA",
      SteamDeckCompatUnknown: "shared_svg_library_SteamDeckCompatUnknown_2Tn_q",
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
              !t ||
                (n[t] && 0 <= i.indexOf(t)) ||
                (n[t] =
                  "set-cookie" === t
                    ? (n[t] || []).concat([r])
                    : n[t]
                    ? n[t] + ", " + r
                    : r);
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
    function l(e) {
      if ("[object Object]" !== n.call(e)) return !1;
      e = Object.getPrototypeOf(e);
      return null === e || e === Object.prototype;
    }
    function u(e) {
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
      isPlainObject: l,
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
      isFunction: u,
      isStream: function (e) {
        return s(e) && u(e.pipe);
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
          l(n[t]) && l(e)
            ? (n[t] = r(n[t], e))
            : l(e)
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
  yl30: function (g, A, O) {
    "use strict";
    /** @license React v16.11.0
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var B = O("q1tI"),
      h = O("MgzW"),
      i = O("QCnb");
    function D(e) {
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
    if (!B) throw Error(D(227));
    var C = null,
      x = {};
    function M() {
      if (C)
        for (var e in x) {
          var t = x[e],
            r = C.indexOf(e);
          if (!(-1 < r)) throw Error(D(96, e));
          if (!k[r]) {
            if (!t.extractEvents) throw Error(D(97, e));
            for (var n in (r = (k[r] = t).eventTypes)) {
              var o = void 0,
                i = r[n],
                a = t,
                s = n;
              if ($.hasOwnProperty(s)) throw Error(D(99, s));
              var l = ($[s] = i).phasedRegistrationNames;
              if (l) {
                for (o in l) l.hasOwnProperty(o) && I(l[o], a, s);
                o = !0;
              } else
                o = !!i.registrationName && (I(i.registrationName, a, s), !0);
              if (!o) throw Error(D(98, n, e));
            }
          }
        }
    }
    function I(e, t, r) {
      if (G[e]) throw Error(D(100, e));
      (G[e] = t), (q[e] = t.eventTypes[r].dependencies);
    }
    var k = [],
      $ = {},
      G = {},
      q = {};
    var K = !1,
      Y = null,
      X = !1,
      J = null,
      Q = {
        onError: function (e) {
          (K = !0), (Y = e);
        },
      };
    function Z(e, t, r, n, o, i, a, s, l) {
      (K = !1),
        (Y = null),
        function (e, t, r, n, o, i, a, s, l) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(r, u);
          } catch (e) {
            this.onError(e);
          }
        }.apply(Q, arguments);
    }
    var ee = null,
      te = null,
      re = null;
    function ne(e, t, r) {
      var n = e.type || "unknown-event";
      (e.currentTarget = re(r)),
        (function () {
          var e;
          Z.apply(this, arguments),
            K && ((e = Y), (K = !1), (Y = null), X || ((X = !0), (J = e)));
        })(n, t, void 0, e),
        (e.currentTarget = null);
    }
    function oe(e, t) {
      if (null == t) throw Error(D(30));
      return null == e
        ? t
        : Array.isArray(e)
        ? (Array.isArray(t) ? e.push.apply(e, t) : e.push(t), e)
        : Array.isArray(t)
        ? [e].concat(t)
        : [e, t];
    }
    function ie(e, t, r) {
      Array.isArray(e) ? e.forEach(t, r) : e && t.call(r, e);
    }
    var ae = null;
    function se(e) {
      if (e) {
        var t = e._dispatchListeners,
          r = e._dispatchInstances;
        if (Array.isArray(t))
          for (var n = 0; n < t.length && !e.isPropagationStopped(); n++)
            ne(e, t[n], r[n]);
        else t && ne(e, t, r);
        (e._dispatchListeners = null),
          (e._dispatchInstances = null),
          e.isPersistent() || e.constructor.release(e);
      }
    }
    function le(e) {
      if (((e = ae = null !== e ? oe(ae, e) : ae), (ae = null), e)) {
        if ((ie(e, se), ae)) throw Error(D(95));
        if (X) throw ((e = J), (X = !1), (J = null), e);
      }
    }
    O = {
      injectEventPluginOrder: function (e) {
        if (C) throw Error(D(101));
        (C = Array.prototype.slice.call(e)), M();
      },
      injectEventPluginsByName: function (e) {
        var t,
          r = !1;
        for (t in e)
          if (e.hasOwnProperty(t)) {
            var n = e[t];
            if (!x.hasOwnProperty(t) || x[t] !== n) {
              if (x[t]) throw Error(D(102, t));
              (x[t] = n), (r = !0);
            }
          }
        r && M();
      },
    };
    function ue(e, t) {
      var r = e.stateNode;
      if (!r) return null;
      var n = ee(r);
      if (!n) return null;
      switch (((r = n[t]), t)) {
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
          e = !(n = (n = !n.disabled)
            ? n
            : !(
                "button" === (e = e.type) ||
                "input" === e ||
                "select" === e ||
                "textarea" === e
              ));
          break;
        default:
          e = !1;
      }
      if (e) return null;
      if (r && "function" != typeof r) throw Error(D(231, t, typeof r));
      return r;
    }
    var e = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      ce =
        (e.hasOwnProperty("ReactCurrentDispatcher") ||
          (e.ReactCurrentDispatcher = { current: null }),
        e.hasOwnProperty("ReactCurrentBatchConfig") ||
          (e.ReactCurrentBatchConfig = { suspense: null }),
        /^(.*)[\\\/]/),
      t = "function" == typeof Symbol && Symbol.for,
      pe = t ? Symbol.for("react.element") : 60103,
      fe = t ? Symbol.for("react.portal") : 60106,
      ge = t ? Symbol.for("react.fragment") : 60107,
      de = t ? Symbol.for("react.strict_mode") : 60108,
      he = t ? Symbol.for("react.profiler") : 60114,
      be = t ? Symbol.for("react.provider") : 60109,
      me = t ? Symbol.for("react.context") : 60110,
      ye = t ? Symbol.for("react.concurrent_mode") : 60111,
      _e = t ? Symbol.for("react.forward_ref") : 60112,
      ve = t ? Symbol.for("react.suspense") : 60113,
      we = t ? Symbol.for("react.suspense_list") : 60120,
      Se = t ? Symbol.for("react.memo") : 60115,
      Ee = t ? Symbol.for("react.lazy") : 60116,
      Te =
        (t && Symbol.for("react.fundamental"),
        t && Symbol.for("react.responder"),
        t && Symbol.for("react.scope"),
        "function" == typeof Symbol && Symbol.iterator);
    function je(e) {
      return null !== e &&
        "object" == typeof e &&
        "function" == typeof (e = (Te && e[Te]) || e["@@iterator"])
        ? e
        : null;
    }
    function Ae(e) {
      if (null != e) {
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case ge:
            return "Fragment";
          case fe:
            return "Portal";
          case he:
            return "Profiler";
          case de:
            return "StrictMode";
          case ve:
            return "Suspense";
          case we:
            return "SuspenseList";
        }
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case me:
              return "Context.Consumer";
            case be:
              return "Context.Provider";
            case _e:
              var t = (t = e.render).displayName || t.name || "";
              return (
                e.displayName ||
                ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
              );
            case Se:
              return Ae(e.type);
            case Ee:
              if ((e = 1 === e._status ? e._result : null)) return Ae(e);
          }
      }
      return null;
    }
    function Oe(e) {
      var t = "";
      do {
        switch (e.tag) {
          case 3:
          case 4:
          case 6:
          case 7:
          case 10:
          case 9:
            var r = "";
            break;
          default:
            var n = e._debugOwner,
              o = e._debugSource,
              i = Ae(e.type),
              r = null;
            n && (r = Ae(n.type)),
              (n = i),
              (i = ""),
              o
                ? (i =
                    " (at " +
                    o.fileName.replace(ce, "") +
                    ":" +
                    o.lineNumber +
                    ")")
                : r && (i = " (created by " + r + ")"),
              (r = "\n    in " + (n || "Unknown") + i);
        }
      } while (((t += r), (e = e.return)));
      return t;
    }
    var Be = !(
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      ),
      Ce = null,
      xe = null,
      Me = null;
    function Ie(e) {
      if ((e = te(e))) {
        if ("function" != typeof Ce) throw Error(D(280));
        var t = ee(e.stateNode);
        Ce(e.stateNode, e.type, t);
      }
    }
    function ke(e) {
      xe ? (Me ? Me.push(e) : (Me = [e])) : (xe = e);
    }
    function Re() {
      if (xe) {
        var e = xe,
          t = Me;
        if (((Me = xe = null), Ie(e), t))
          for (e = 0; e < t.length; e++) Ie(t[e]);
      }
    }
    function Ne(e, t) {
      return e(t);
    }
    function Pe(e, t, r, n) {
      return e(t, r, n);
    }
    function De() {}
    var Ue = Ne,
      Fe = !1,
      Le = !1;
    function We() {
      (null === xe && null === Me) || (De(), Re());
    }
    new Map();
    var ze =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      Ve = Object.prototype.hasOwnProperty,
      He = {},
      $e = {};
    function Ge(e, t, r, n) {
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
    function r(e, t, r, n, o, i) {
      (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = n),
        (this.attributeNamespace = o),
        (this.mustUseProperty = r),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i);
    }
    var a = {},
      qe =
        ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            a[e] = new r(e, 0, !1, e, null, !1);
          }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          var t = e[0];
          a[t] = new r(t, 1, !1, e[1], null, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (e) {
            a[e] = new r(e, 2, !1, e.toLowerCase(), null, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          a[e] = new r(e, 2, !1, e, null, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (e) {
            a[e] = new r(e, 3, !1, e.toLowerCase(), null, !1);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          a[e] = new r(e, 3, !0, e, null, !1);
        }),
        ["capture", "download"].forEach(function (e) {
          a[e] = new r(e, 4, !1, e, null, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          a[e] = new r(e, 6, !1, e, null, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          a[e] = new r(e, 5, !1, e.toLowerCase(), null, !1);
        }),
        /[\-:]([a-z])/g);
    function Ke(e) {
      return e[1].toUpperCase();
    }
    function Ye(e) {
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
    function Xe(e, t, r, n) {
      var o,
        i = a.hasOwnProperty(t) ? a[t] : null;
      (null !== i
        ? 0 !== i.type
        : n ||
          !(2 < t.length) ||
          ("o" !== t[0] && "O" !== t[0]) ||
          ("n" !== t[1] && "N" !== t[1])) &&
        (Ge(t, r, i, n) && (r = null),
        n || null === i
          ? ((o = t),
            (Ve.call($e, o) ||
              (!Ve.call(He, o) &&
                (ze.test(o) ? ($e[o] = !0) : void (He[o] = !0)))) &&
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
    function Je(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        "input" === e.toLowerCase() &&
        ("checkbox" === t || "radio" === t)
      );
    }
    function Qe(e) {
      e._valueTracker ||
        (e._valueTracker = (function (e) {
          var t,
            r,
            n = Je(e) ? "checked" : "value",
            o = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
            i = "" + e[n];
          if (
            !e.hasOwnProperty(n) &&
            void 0 !== o &&
            "function" == typeof o.get &&
            "function" == typeof o.set
          )
            return (
              (t = o.get),
              (r = o.set),
              Object.defineProperty(e, n, {
                configurable: !0,
                get: function () {
                  return t.call(this);
                },
                set: function (e) {
                  (i = "" + e), r.call(this, e);
                },
              }),
              Object.defineProperty(e, n, { enumerable: o.enumerable }),
              {
                getValue: function () {
                  return i;
                },
                setValue: function (e) {
                  i = "" + e;
                },
                stopTracking: function () {
                  (e._valueTracker = null), delete e[n];
                },
              }
            );
        })(e));
    }
    function Ze(e) {
      if (e) {
        var t = e._valueTracker;
        if (!t) return 1;
        var r = t.getValue(),
          n = "";
        return (
          (e = n =
            e ? (Je(e) ? (e.checked ? "true" : "false") : e.value) : n) !== r &&
          (t.setValue(e), 1)
        );
      }
    }
    function et(e, t) {
      var r = t.checked;
      return h({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != r ? r : e._wrapperState.initialChecked,
      });
    }
    function tt(e, t) {
      var r = null == t.defaultValue ? "" : t.defaultValue,
        n = null != t.checked ? t.checked : t.defaultChecked,
        r = Ye(null != t.value ? t.value : r);
      e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled:
          "checkbox" === t.type || "radio" === t.type
            ? null != t.checked
            : null != t.value,
      };
    }
    function rt(e, t) {
      null != (t = t.checked) && Xe(e, "checked", t, !1);
    }
    function nt(e, t) {
      rt(e, t);
      var r = Ye(t.value),
        n = t.type;
      if (null != r)
        "number" === n
          ? ((0 === r && "" === e.value) || e.value != r) && (e.value = "" + r)
          : e.value !== "" + r && (e.value = "" + r);
      else if ("submit" === n || "reset" === n)
        return void e.removeAttribute("value");
      t.hasOwnProperty("value")
        ? it(e, t.type, r)
        : t.hasOwnProperty("defaultValue") && it(e, t.type, Ye(t.defaultValue)),
        null == t.checked &&
          null != t.defaultChecked &&
          (e.defaultChecked = !!t.defaultChecked);
    }
    function ot(e, t, r) {
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
    function it(e, t, r) {
      ("number" === t && e.ownerDocument.activeElement === e) ||
        (null == r
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
    }
    function at(e, t) {
      var r, n;
      return (
        (e = h({ children: void 0 }, t)),
        (r = t.children),
        (n = ""),
        B.Children.forEach(r, function (e) {
          null != e && (n += e);
        }),
        (t = n) && (e.children = t),
        e
      );
    }
    function st(e, t, r, n) {
      if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
        for (r = 0; r < e.length; r++)
          (o = t.hasOwnProperty("$" + e[r].value)),
            e[r].selected !== o && (e[r].selected = o),
            o && n && (e[r].defaultSelected = !0);
      } else {
        for (r = "" + Ye(r), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === r)
            return (
              (e[o].selected = !0), void (n && (e[o].defaultSelected = !0))
            );
          null !== t || e[o].disabled || (t = e[o]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function lt(e, t) {
      if (null != t.dangerouslySetInnerHTML) throw Error(D(91));
      return h({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
      });
    }
    function ut(e, t) {
      var r = t.value;
      if (null == r) {
        if (((r = t.defaultValue), null != (t = t.children))) {
          if (null != r) throw Error(D(92));
          if (Array.isArray(t)) {
            if (!(t.length <= 1)) throw Error(D(93));
            t = t[0];
          }
          r = t;
        }
        null == r && (r = "");
      }
      e._wrapperState = { initialValue: Ye(r) };
    }
    function ct(e, t) {
      var r = Ye(t.value),
        n = Ye(t.defaultValue);
      null != r &&
        ((r = "" + r) !== e.value && (e.value = r),
        null == t.defaultValue && e.defaultValue !== r && (e.defaultValue = r)),
        null != n && (e.defaultValue = "" + n);
    }
    function pt(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        "" !== t &&
        null !== t &&
        (e.value = t);
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(qe, Ke);
        a[t] = new r(t, 1, !1, e, null, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(qe, Ke);
          a[t] = new r(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var t = e.replace(qe, Ke);
        a[t] = new r(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1);
      }),
      ["tabIndex", "crossOrigin"].forEach(function (e) {
        a[e] = new r(e, 1, !1, e.toLowerCase(), null, !1);
      }),
      (a.xlinkHref = new r(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0
      )),
      ["src", "href", "action", "formAction"].forEach(function (e) {
        a[e] = new r(e, 1, !1, e.toLowerCase(), null, !0);
      });
    var ft = {
      html: "http://www.w3.org/1999/xhtml",
      mathml: "http://www.w3.org/1998/Math/MathML",
      svg: "http://www.w3.org/2000/svg",
    };
    function gt(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function dt(e, t) {
      return null == e || "http://www.w3.org/1999/xhtml" === e
        ? gt(t)
        : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
        ? "http://www.w3.org/1999/xhtml"
        : e;
    }
    bt = function (e, t) {
      if (e.namespaceURI !== ft.svg || "innerHTML" in e) e.innerHTML = t;
      else {
        for (
          (ht = ht || document.createElement("div")).innerHTML =
            "<svg>" + t.valueOf().toString() + "</svg>",
            t = ht.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    };
    var ht,
      bt,
      mt =
        "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (e, t, r, n) {
              MSApp.execUnsafeLocalFunction(function () {
                return bt(e, t);
              });
            }
          : bt;
    function yt(e, t) {
      if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && 3 === r.nodeType)
          return void (r.nodeValue = t);
      }
      e.textContent = t;
    }
    function _t(e, t) {
      var r = {};
      return (
        (r[e.toLowerCase()] = t.toLowerCase()),
        (r["Webkit" + e] = "webkit" + t),
        (r["Moz" + e] = "moz" + t),
        r
      );
    }
    var vt = {
        animationend: _t("Animation", "AnimationEnd"),
        animationiteration: _t("Animation", "AnimationIteration"),
        animationstart: _t("Animation", "AnimationStart"),
        transitionend: _t("Transition", "TransitionEnd"),
      },
      wt = {},
      St = {};
    function Et(e) {
      if (wt[e]) return wt[e];
      if (vt[e]) {
        var t,
          r = vt[e];
        for (t in r) if (r.hasOwnProperty(t) && t in St) return (wt[e] = r[t]);
      }
      return e;
    }
    Be &&
      ((St = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete vt.animationend.animation,
        delete vt.animationiteration.animation,
        delete vt.animationstart.animation),
      "TransitionEvent" in window || delete vt.transitionend.transition);
    var Tt = Et("animationend"),
      jt = Et("animationiteration"),
      At = Et("animationstart"),
      Ot = Et("transitionend"),
      Bt =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        );
    function Ct(e) {
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
    function xt(e) {
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
    function Mt(e) {
      if (Ct(e) !== e) throw Error(D(188));
    }
    function It(e) {
      if (
        (e = (function (e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = Ct(e))) throw Error(D(188));
            return t !== e ? null : e;
          }
          for (var r = e, n = t; ; ) {
            var o = r.return;
            if (null === o) break;
            var i = o.alternate;
            if (null === i) {
              if (null === (n = o.return)) break;
              r = n;
            } else {
              if (o.child === i.child) {
                for (i = o.child; i; ) {
                  if (i === r) return Mt(o), e;
                  if (i === n) return Mt(o), t;
                  i = i.sibling;
                }
                throw Error(D(188));
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
                  if (!a) throw Error(D(189));
                }
              }
              if (r.alternate !== n) throw Error(D(190));
            }
          }
          if (3 !== r.tag) throw Error(D(188));
          return r.stateNode.current === r ? e : t;
        })(e))
      )
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
    var kt,
      Rt,
      Nt,
      Pt = !1,
      o = [],
      Dt = null,
      Ut = null,
      Ft = null,
      Lt = new Map(),
      Wt = new Map(),
      zt = [],
      Vt =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
          " "
        ),
      Ht =
        "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(
          " "
        );
    function $t(e, t, r, n) {
      return {
        blockedOn: e,
        topLevelType: t,
        eventSystemFlags: 32 | r,
        nativeEvent: n,
      };
    }
    function Gt(e, t) {
      switch (e) {
        case "focus":
        case "blur":
          Dt = null;
          break;
        case "dragenter":
        case "dragleave":
          Ut = null;
          break;
        case "mouseover":
        case "mouseout":
          Ft = null;
          break;
        case "pointerover":
        case "pointerout":
          Lt.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Wt.delete(t.pointerId);
      }
    }
    function qt(e, t, r, n, o) {
      return (
        null === e || e.nativeEvent !== o
          ? ((e = $t(t, r, n, o)),
            null === t || (null !== (t = kn(t)) && Rt(t)))
          : (e.eventSystemFlags |= n),
        e
      );
    }
    function Kt(e) {
      var t, r;
      if (null === e.blockedOn)
        return (
          (t = Xr(e.topLevelType, e.eventSystemFlags, e.nativeEvent)),
          null === t || (null !== (r = kn(t)) && Rt(r), void (e.blockedOn = t))
        );
    }
    function Yt(e, t, r) {
      Kt(e) && r.delete(t);
    }
    function Xt() {
      for (Pt = !1; 0 < o.length; ) {
        var e = o[0];
        if (null !== e.blockedOn) {
          null !== (e = kn(e.blockedOn)) && kt(e);
          break;
        }
        var t = Xr(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
        null !== t ? (e.blockedOn = t) : o.shift();
      }
      null !== Dt && Kt(Dt) && (Dt = null),
        null !== Ut && Kt(Ut) && (Ut = null),
        null !== Ft && Kt(Ft) && (Ft = null),
        Lt.forEach(Yt),
        Wt.forEach(Yt);
    }
    function Jt(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        Pt ||
          ((Pt = !0),
          i.unstable_scheduleCallback(i.unstable_NormalPriority, Xt)));
    }
    function Qt(t) {
      function e(e) {
        return Jt(e, t);
      }
      if (0 < o.length) {
        Jt(o[0], t);
        for (var r = 1; r < o.length; r++) {
          var n = o[r];
          n.blockedOn === t && (n.blockedOn = null);
        }
      }
      for (
        null !== Dt && Jt(Dt, t),
          null !== Ut && Jt(Ut, t),
          null !== Ft && Jt(Ft, t),
          Lt.forEach(e),
          Wt.forEach(e),
          r = 0;
        r < zt.length;
        r++
      )
        (n = zt[r]).blockedOn === t && (n.blockedOn = null);
      for (; 0 < zt.length && null === (r = zt[0]).blockedOn; )
        (function (e) {
          var t = In(e.target);
          if (null !== t) {
            var r = Ct(t);
            if (null !== r)
              if (13 === (t = r.tag)) {
                if (null !== (t = xt(r)))
                  return (
                    (e.blockedOn = t),
                    i.unstable_runWithPriority(e.priority, function () {
                      Nt(r);
                    })
                  );
              } else if (3 === t && r.stateNode.hydrate)
                return (e.blockedOn =
                  3 === r.tag ? r.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        })(r),
          null === r.blockedOn && zt.shift();
    }
    function Zt(e) {
      return 3 ===
        (e = (e = e.target || e.srcElement || window).correspondingUseElement
          ? e.correspondingUseElement
          : e).nodeType
        ? e.parentNode
        : e;
    }
    function er(e) {
      for (; (e = e.return) && 5 !== e.tag; );
      return e || null;
    }
    function tr(e, t, r) {
      (t = ue(e, r.dispatchConfig.phasedRegistrationNames[t])) &&
        ((r._dispatchListeners = oe(r._dispatchListeners, t)),
        (r._dispatchInstances = oe(r._dispatchInstances, e)));
    }
    function rr(e) {
      if (e && e.dispatchConfig.phasedRegistrationNames) {
        for (var t = e._targetInst, r = []; t; ) r.push(t), (t = er(t));
        for (t = r.length; 0 < t--; ) tr(r[t], "captured", e);
        for (t = 0; t < r.length; t++) tr(r[t], "bubbled", e);
      }
    }
    function nr(e, t, r) {
      e &&
        r &&
        r.dispatchConfig.registrationName &&
        (t = ue(e, r.dispatchConfig.registrationName)) &&
        ((r._dispatchListeners = oe(r._dispatchListeners, t)),
        (r._dispatchInstances = oe(r._dispatchInstances, e)));
    }
    function or(e) {
      e && e.dispatchConfig.registrationName && nr(e._targetInst, null, e);
    }
    function ir(e) {
      ie(e, rr);
    }
    function ar() {
      return !0;
    }
    function sr() {
      return !1;
    }
    function s(e, t, r, n) {
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
          ? ar
          : sr),
        (this.isPropagationStopped = sr),
        this
      );
    }
    function lr(e, t, r, n) {
      var o;
      return this.eventPool.length
        ? ((o = this.eventPool.pop()), this.call(o, e, t, r, n), o)
        : new this(e, t, r, n);
    }
    function ur(e) {
      if (!(e instanceof this)) throw Error(D(279));
      e.destructor(), this.eventPool.length < 10 && this.eventPool.push(e);
    }
    function cr(e) {
      (e.eventPool = []), (e.getPooled = lr), (e.release = ur);
    }
    h(s.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : "unknown" != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = ar));
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = ar));
      },
      persist: function () {
        this.isPersistent = ar;
      },
      isPersistent: sr,
      destructor: function () {
        for (var e in this.constructor.Interface) this[e] = null;
        (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
          (this.isPropagationStopped = this.isDefaultPrevented = sr),
          (this._dispatchInstances = this._dispatchListeners = null);
      },
    }),
      (s.Interface = {
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
      (s.extend = function (e) {
        function t() {}
        function r() {
          return n.apply(this, arguments);
        }
        var n = this,
          o = ((t.prototype = n.prototype), new t());
        return (
          h(o, r.prototype),
          (((r.prototype = o).constructor = r).Interface = h(
            {},
            n.Interface,
            e
          )),
          (r.extend = n.extend),
          cr(r),
          r
        );
      }),
      cr(s);
    var pr = s.extend({
        animationName: null,
        elapsedTime: null,
        pseudoElement: null,
      }),
      fr = s.extend({
        clipboardData: function (e) {
          return ("clipboardData" in e ? e : window).clipboardData;
        },
      }),
      gr = s.extend({ view: null, detail: null }),
      dr = gr.extend({ relatedTarget: null });
    function hr(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? 0 === (e = e.charCode) && 13 === t && (e = 13)
          : (e = t),
        32 <= (e = 10 === e ? 13 : e) || 13 === e ? e : 0
      );
    }
    var br = {
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
      mr = {
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
      yr = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function _r(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : !!(e = yr[e]) && !!t[e];
    }
    function vr() {
      return _r;
    }
    for (
      var wr = gr.extend({
          key: function (e) {
            if (e.key) {
              var t = br[e.key] || e.key;
              if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type
              ? 13 === (e = hr(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
              ? mr[e.keyCode] || "Unidentified"
              : "";
          },
          location: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          repeat: null,
          locale: null,
          getModifierState: vr,
          charCode: function (e) {
            return "keypress" === e.type ? hr(e) : 0;
          },
          keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return "keypress" === e.type
              ? hr(e)
              : "keydown" === e.type || "keyup" === e.type
              ? e.keyCode
              : 0;
          },
        }),
        Sr = 0,
        Er = 0,
        Tr = !1,
        jr = !1,
        Ar = gr.extend({
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
          getModifierState: vr,
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
            var t = Sr;
            return (
              (Sr = e.screenX),
              Tr ? ("mousemove" === e.type ? e.screenX - t : 0) : ((Tr = !0), 0)
            );
          },
          movementY: function (e) {
            if (("movementY" in e)) return e.movementY;
            var t = Er;
            return (
              (Er = e.screenY),
              jr ? ("mousemove" === e.type ? e.screenY - t : 0) : ((jr = !0), 0)
            );
          },
        }),
        Or = Ar.extend({
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
        Br = Ar.extend({ dataTransfer: null }),
        Cr = gr.extend({
          touches: null,
          targetTouches: null,
          changedTouches: null,
          altKey: null,
          metaKey: null,
          ctrlKey: null,
          shiftKey: null,
          getModifierState: vr,
        }),
        xr = s.extend({
          propertyName: null,
          elapsedTime: null,
          pseudoElement: null,
        }),
        Mr = Ar.extend({
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
        Ir = [
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
          [Tt, "animationEnd", 2],
          [jt, "animationIteration", 2],
          [At, "animationStart", 2],
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
          [Ot, "transitionEnd", 2],
          ["waiting", "waiting", 2],
        ],
        kr = {},
        Rr = {},
        Nr = 0;
      Nr < Ir.length;
      Nr++
    ) {
      var Pr = Ir[Nr],
        Dr = Pr[0],
        Ur = Pr[1],
        Pr = Pr[2],
        Fr = "on" + (Ur[0].toUpperCase() + Ur.slice(1)),
        Fr = {
          phasedRegistrationNames: { bubbled: Fr, captured: Fr + "Capture" },
          dependencies: [Dr],
          eventPriority: Pr,
        };
      (kr[Ur] = Fr), (Rr[Dr] = Fr);
    }
    var t = {
        eventTypes: kr,
        getEventPriority: function (e) {
          return void 0 !== (e = Rr[e]) ? e.eventPriority : 2;
        },
        extractEvents: function (e, t, r, n) {
          var o = Rr[e];
          if (!o) return null;
          switch (e) {
            case "keypress":
              if (0 === hr(r)) return null;
            case "keydown":
            case "keyup":
              e = wr;
              break;
            case "blur":
            case "focus":
              e = dr;
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
              e = Ar;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              e = Br;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              e = Cr;
              break;
            case Tt:
            case jt:
            case At:
              e = pr;
              break;
            case Ot:
              e = xr;
              break;
            case "scroll":
              e = gr;
              break;
            case "wheel":
              e = Mr;
              break;
            case "copy":
            case "cut":
            case "paste":
              e = fr;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              e = Or;
              break;
            default:
              e = s;
          }
          return ir((t = e.getPooled(o, t, r, n))), t;
        },
      },
      Lr = i.unstable_UserBlockingPriority,
      Wr = i.unstable_runWithPriority,
      zr = t.getEventPriority,
      Vr = 10,
      Hr = [];
    function $r(e) {
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
        ((5 !== (n = t.tag) && 6 !== n) || e.ancestors.push(t), (t = In(r)))
      );
      for (t = 0; t < e.ancestors.length; t++) {
        for (
          var n = e.ancestors[t],
            o = Zt(e.nativeEvent),
            r = e.topLevelType,
            i = e.nativeEvent,
            a = e.eventSystemFlags,
            s = null,
            l = 0;
          l < k.length;
          l++
        ) {
          var u = k[l];
          (u = u && u.extractEvents(r, n, i, o, a)) && (s = oe(s, u));
        }
        le(s);
      }
    }
    var Gr = !0;
    function b(e, t) {
      qr(t, e, !1);
    }
    function qr(e, t, r) {
      switch (zr(t)) {
        case 0:
          var n = function (e, t, r) {
            Fe || De();
            var n = Yr,
              o = Fe;
            Fe = !0;
            try {
              Pe(n, e, t, r);
            } finally {
              (Fe = o) || We();
            }
          }.bind(null, t, 1);
          break;
        case 1:
          n = function (e, t, r) {
            Wr(Lr, Yr.bind(null, e, t, r));
          }.bind(null, t, 1);
          break;
        default:
          n = Yr.bind(null, t, 1);
      }
      r ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, !1);
    }
    function Kr(e, t, r, n) {
      var o;
      e = Hr.length
        ? (((o = Hr.pop()).topLevelType = e),
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
        if (((t = $r), (r = e), Le)) t(r, void 0);
        else {
          Le = !0;
          try {
            Ue(t, r, void 0);
          } finally {
            (Le = !1), We();
          }
        }
      } finally {
        (e.topLevelType = null),
          (e.nativeEvent = null),
          (e.targetInst = null),
          (e.ancestors.length = 0),
          Hr.length < Vr && Hr.push(e);
      }
    }
    function Yr(e, t, r) {
      var n;
      Gr &&
        (0 < o.length && -1 < Vt.indexOf(e)
          ? ((e = $t(null, e, t, r)), o.push(e))
          : null === (n = Xr(e, t, r))
          ? Gt(e, r)
          : -1 < Vt.indexOf(e)
          ? ((e = $t(n, e, t, r)), o.push(e))
          : (function (e, t, r, n) {
              switch (t) {
                case "focus":
                  return (Dt = qt(Dt, e, t, r, n)), 1;
                case "dragenter":
                  return (Ut = qt(Ut, e, t, r, n)), 1;
                case "mouseover":
                  return (Ft = qt(Ft, e, t, r, n)), 1;
                case "pointerover":
                  var o = n.pointerId;
                  return Lt.set(o, qt(Lt.get(o) || null, e, t, r, n)), 1;
                case "gotpointercapture":
                  return (
                    (o = n.pointerId),
                    Wt.set(o, qt(Wt.get(o) || null, e, t, r, n)),
                    1
                  );
              }
            })(n, e, t, r) || (Gt(e, r), Kr(e, t, r, null)));
    }
    function Xr(e, t, r) {
      var n = Zt(r);
      if (null !== (n = In(n))) {
        var o = Ct(n);
        if (null === o) n = null;
        else {
          var i = o.tag;
          if (13 === i) {
            if (null !== (n = xt(o))) return n;
            n = null;
          } else if (3 === i) {
            if (o.stateNode.hydrate)
              return 3 === o.tag ? o.stateNode.containerInfo : null;
            n = null;
          } else o !== n && (n = null);
        }
      }
      return Kr(e, t, r, n), null;
    }
    function Jr(e) {
      if (!Be) return !1;
      var t = (e = "on" + e) in document;
      return (
        t ||
          ((t = document.createElement("div")).setAttribute(e, "return;"),
          (t = "function" == typeof t[e])),
        t
      );
    }
    var Qr = new ("function" == typeof WeakMap ? WeakMap : Map)();
    function Zr(e) {
      var t = Qr.get(e);
      return void 0 === t && ((t = new Set()), Qr.set(e, t)), t;
    }
    function en(e, t, r) {
      if (!r.has(e)) {
        switch (e) {
          case "scroll":
            qr(t, "scroll", !0);
            break;
          case "focus":
          case "blur":
            qr(t, "focus", !0),
              qr(t, "blur", !0),
              r.add("blur"),
              r.add("focus");
            break;
          case "cancel":
          case "close":
            Jr(e) && qr(t, e, !0);
            break;
          case "invalid":
          case "submit":
          case "reset":
            break;
          default:
            -1 === Bt.indexOf(e) && b(e, t);
        }
        r.add(e);
      }
    }
    var tn = {
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
      rn = ["Webkit", "ms", "Moz", "O"];
    function nn(e, t, r) {
      return null == t || "boolean" == typeof t || "" === t
        ? ""
        : r ||
          "number" != typeof t ||
          0 === t ||
          (tn.hasOwnProperty(e) && tn[e])
        ? ("" + t).trim()
        : t + "px";
    }
    function on(e, t) {
      for (var r in ((e = e.style), t)) {
        var n, o;
        t.hasOwnProperty(r) &&
          ((n = 0 === r.indexOf("--")),
          (o = nn(r, t[r], n)),
          "float" === r && (r = "cssFloat"),
          n ? e.setProperty(r, o) : (e[r] = o));
      }
    }
    Object.keys(tn).forEach(function (t) {
      rn.forEach(function (e) {
        (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (tn[e] = tn[t]);
      });
    });
    var an = h(
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
    function sn(e, t) {
      if (t) {
        if (an[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
          throw Error(D(137, e, ""));
        if (null != t.dangerouslySetInnerHTML) {
          if (null != t.children) throw Error(D(60));
          if (
            !(
              "object" == typeof t.dangerouslySetInnerHTML &&
              "__html" in t.dangerouslySetInnerHTML
            )
          )
            throw Error(D(61));
        }
        if (null != t.style && "object" != typeof t.style)
          throw Error(D(62, ""));
      }
    }
    function ln(e, t) {
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
    function un(e, t) {
      var r = Zr(
        (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument)
      );
      t = q[t];
      for (var n = 0; n < t.length; n++) en(t[n], e, r);
    }
    function cn() {}
    function pn(t) {
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
    function fn(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function gn(e, t) {
      var r,
        n = fn(e);
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
        n = fn(n);
      }
    }
    function dn() {
      for (var e = window, t = pn(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var r = "string" == typeof t.contentWindow.location.href;
        } catch (e) {
          r = !1;
        }
        if (!r) break;
        t = pn((e = t.contentWindow).document);
      }
      return t;
    }
    function hn(e) {
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
    var bn = "$",
      mn = "/$",
      yn = "$?",
      _n = "$!",
      vn = null,
      wn = null;
    function Sn(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    function En(e, t) {
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
    var Tn = "function" == typeof setTimeout ? setTimeout : void 0,
      jn = "function" == typeof clearTimeout ? clearTimeout : void 0;
    function An(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
      }
      return e;
    }
    function On(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (8 === e.nodeType) {
          var r = e.data;
          if (r === bn || r === _n || r === yn) {
            if (0 === t) return e;
            t--;
          } else r === mn && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var Bn = Math.random().toString(36).slice(2),
      Cn = "__reactInternalInstance$" + Bn,
      xn = "__reactEventHandlers$" + Bn,
      Mn = "__reactContainere$" + Bn;
    function In(e) {
      var t = e[Cn];
      if (t) return t;
      for (var r = e.parentNode; r; ) {
        if ((t = r[Mn] || r[Cn])) {
          if (
            ((r = t.alternate),
            null !== t.child || (null !== r && null !== r.child))
          )
            for (e = On(e); null !== e; ) {
              if ((r = e[Cn])) return r;
              e = On(e);
            }
          return t;
        }
        r = (e = r).parentNode;
      }
      return null;
    }
    function kn(e) {
      return !(e = e[Cn] || e[Mn]) ||
        (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
        ? null
        : e;
    }
    function Rn(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(D(33));
    }
    function Nn(e) {
      return e[xn] || null;
    }
    var Pn = null,
      Dn = null,
      Un = null;
    function Fn() {
      if (Un) return Un;
      for (
        var e = Dn,
          t = e.length,
          r = ("value" in Pn) ? Pn.value : Pn.textContent,
          n = r.length,
          o = 0;
        o < t && e[o] === r[o];
        o++
      );
      for (var i = t - o, a = 1; a <= i && e[t - a] === r[n - a]; a++);
      return (Un = r.slice(o, 1 < a ? 1 - a : void 0));
    }
    var Ln = s.extend({ data: null }),
      Wn = s.extend({ data: null }),
      zn = [9, 13, 27, 32],
      Vn = Be && "CompositionEvent" in window,
      Bn = null,
      Hn =
        (Be && "documentMode" in document && (Bn = document.documentMode),
        Be && "TextEvent" in window && !Bn),
      $n = Be && (!Vn || (Bn && 8 < Bn && Bn <= 11)),
      Gn = String.fromCharCode(32),
      qn = {
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
          dependencies:
            "blur compositionend keydown keypress keyup mousedown".split(" "),
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: "onCompositionStart",
            captured: "onCompositionStartCapture",
          },
          dependencies:
            "blur compositionstart keydown keypress keyup mousedown".split(" "),
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: "onCompositionUpdate",
            captured: "onCompositionUpdateCapture",
          },
          dependencies:
            "blur compositionupdate keydown keypress keyup mousedown".split(
              " "
            ),
        },
      },
      Kn = !1;
    function Yn(e, t) {
      switch (e) {
        case "keyup":
          return -1 !== zn.indexOf(t.keyCode);
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
    function Xn(e) {
      return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
    }
    var Jn = !1;
    var Bn = {
        eventTypes: qn,
        extractEvents: function (e, t, r, n) {
          var o;
          if (Vn)
            e: {
              switch (e) {
                case "compositionstart":
                  var i = qn.compositionStart;
                  break e;
                case "compositionend":
                  i = qn.compositionEnd;
                  break e;
                case "compositionupdate":
                  i = qn.compositionUpdate;
                  break e;
              }
              i = void 0;
            }
          else
            Jn
              ? Yn(e, r) && (i = qn.compositionEnd)
              : "keydown" === e &&
                229 === r.keyCode &&
                (i = qn.compositionStart);
          return (
            (o = i
              ? ($n &&
                  "ko" !== r.locale &&
                  (Jn || i !== qn.compositionStart
                    ? i === qn.compositionEnd && Jn && (o = Fn())
                    : ((Dn = "value" in (Pn = n) ? Pn.value : Pn.textContent),
                      (Jn = !0))),
                (i = Ln.getPooled(i, t, r, n)),
                o ? (i.data = o) : null !== (o = Xn(r)) && (i.data = o),
                ir(i),
                i)
              : null),
            (e = (
              Hn
                ? function (e, t) {
                    switch (e) {
                      case "compositionend":
                        return Xn(t);
                      case "keypress":
                        return 32 !== t.which ? null : ((Kn = !0), Gn);
                      case "textInput":
                        return (e = t.data) === Gn && Kn ? null : e;
                      default:
                        return null;
                    }
                  }
                : function (e, t) {
                    if (Jn)
                      return "compositionend" === e || (!Vn && Yn(e, t))
                        ? ((e = Fn()), (Un = Dn = Pn = null), (Jn = !1), e)
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
                        return $n && "ko" !== t.locale ? null : t.data;
                      default:
                        return null;
                    }
                  }
            )(e, r))
              ? (((t = Wn.getPooled(qn.beforeInput, t, r, n)).data = e), ir(t))
              : (t = null),
            null === o ? t : null === t ? o : [o, t]
          );
        },
      },
      Qn = {
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
    function Zn(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === t ? Qn[e.type] : "textarea" === t;
    }
    var eo = {
      change: {
        phasedRegistrationNames: {
          bubbled: "onChange",
          captured: "onChangeCapture",
        },
        dependencies:
          "blur change click focus input keydown keyup selectionchange".split(
            " "
          ),
      },
    };
    function to(e, t, r) {
      return (
        ((e = s.getPooled(eo.change, e, t, r)).type = "change"), ke(r), ir(e), e
      );
    }
    var ro = null,
      no = null;
    function oo(e) {
      le(e);
    }
    function io(e) {
      if (Ze(Rn(e))) return e;
    }
    function ao(e, t) {
      if ("change" === e) return t;
    }
    var so = !1;
    function lo() {
      ro && (ro.detachEvent("onpropertychange", uo), (no = ro = null));
    }
    function uo(e) {
      if ("value" === e.propertyName && io(no))
        if (((e = to(no, e, Zt(e))), Fe)) le(e);
        else {
          Fe = !0;
          try {
            Ne(oo, e);
          } finally {
            (Fe = !1), We();
          }
        }
    }
    function co(e, t, r) {
      "focus" === e
        ? (lo(), (no = r), (ro = t).attachEvent("onpropertychange", uo))
        : "blur" === e && lo();
    }
    function po(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e)
        return io(no);
    }
    function fo(e, t) {
      if ("click" === e) return io(t);
    }
    function go(e, t) {
      if ("input" === e || "change" === e) return io(t);
    }
    Be &&
      (so =
        Jr("input") && (!document.documentMode || 9 < document.documentMode));
    var ho,
      bo = {
        eventTypes: eo,
        _isInputEventSupported: so,
        extractEvents: function (e, t, r, n) {
          var o,
            i,
            a = t ? Rn(t) : window,
            s = a.nodeName && a.nodeName.toLowerCase();
          if (
            ("select" === s || ("input" === s && "file" === a.type)
              ? (o = ao)
              : Zn(a)
              ? so
                ? (o = go)
                : ((o = po), (i = co))
              : !(s = a.nodeName) ||
                "input" !== s.toLowerCase() ||
                ("checkbox" !== a.type && "radio" !== a.type) ||
                (o = fo),
            (o = o && o(e, t)))
          )
            return to(o, r, n);
          i && i(e, a, t),
            "blur" === e &&
              (e = a._wrapperState) &&
              e.controlled &&
              "number" === a.type &&
              it(a, "number", a.value);
        },
      },
      mo = {
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
      yo = {
        eventTypes: mo,
        extractEvents: function (e, t, r, n, o) {
          var i,
            a,
            s,
            l,
            u = "mouseover" === e || "pointerover" === e,
            c = "mouseout" === e || "pointerout" === e;
          if (
            (u && 0 == (32 & o) && (r.relatedTarget || r.fromElement)) ||
            (!c && !u)
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
                  (t = (t = r.relatedTarget || r.toElement) ? In(t) : null) &&
                  (t !== (u = Ct(t)) || (5 !== t.tag && 6 !== t.tag)) &&
                  (t = null))
              : (c = null),
            c === t)
          )
            return null;
          if (
            ("mouseout" === e || "mouseover" === e
              ? ((i = Ar),
                (a = mo.mouseLeave),
                (s = mo.mouseEnter),
                (l = "mouse"))
              : ("pointerout" !== e && "pointerover" !== e) ||
                ((i = Or),
                (a = mo.pointerLeave),
                (s = mo.pointerEnter),
                (l = "pointer")),
            (e = null == c ? o : Rn(c)),
            (o = null == t ? o : Rn(t)),
            ((a = i.getPooled(a, c, r, n)).type = l + "leave"),
            (a.target = e),
            (a.relatedTarget = o),
            ((n = i.getPooled(s, t, r, n)).type = l + "enter"),
            (n.target = o),
            (n.relatedTarget = e),
            (l = t),
            (i = c) && l)
          )
            e: {
              for (e = l, c = 0, t = s = i; t; t = er(t)) c++;
              for (t = 0, o = e; o; o = er(o)) t++;
              for (; 0 < c - t; ) (s = er(s)), c--;
              for (; 0 < t - c; ) (e = er(e)), t--;
              for (; c--; ) {
                if (s === e || s === e.alternate) break e;
                (s = er(s)), (e = er(e));
              }
              s = null;
            }
          else s = null;
          for (
            e = s, s = [];
            i && i !== e && (null === (c = i.alternate) || c !== e);

          )
            s.push(i), (i = er(i));
          for (
            i = [];
            l && l !== e && (null === (c = l.alternate) || c !== e);

          )
            i.push(l), (l = er(l));
          for (l = 0; l < s.length; l++) nr(s[l], "bubbled", a);
          for (l = i.length; 0 < l--; ) nr(i[l], "captured", n);
          return r === ho ? ((ho = null), [a]) : ((ho = r), [a, n]);
        },
      };
    var _o =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      vo = Object.prototype.hasOwnProperty;
    function wo(e, t) {
      if (!_o(e, t)) {
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
          if (!vo.call(t, r[n]) || !_o(e[r[n]], t[r[n]])) return !1;
      }
      return !0;
    }
    var So = Be && "documentMode" in document && document.documentMode <= 11,
      Eo = {
        select: {
          phasedRegistrationNames: {
            bubbled: "onSelect",
            captured: "onSelectCapture",
          },
          dependencies:
            "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(
              " "
            ),
        },
      },
      To = null,
      jo = null,
      Ao = null,
      Oo = !1;
    function Bo(e, t) {
      var r =
        t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
      return Oo || null == To || To !== pn(r)
        ? null
        : ((r =
            "selectionStart" in (r = To) && hn(r)
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
          Ao && wo(Ao, r)
            ? null
            : ((Ao = r),
              ((e = s.getPooled(Eo.select, jo, e, t)).type = "select"),
              (e.target = To),
              ir(e),
              e));
    }
    var Co = {
      eventTypes: Eo,
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
            for (var o = Zr(o), i = q.onSelect, a = 0; a < i.length; a++)
              if (!o.has(i[a])) {
                o = !1;
                break e;
              }
            o = !0;
          }
          i = !o;
        }
        if (!i)
          switch (((o = t ? Rn(t) : window), e)) {
            case "focus":
              (!Zn(o) && "true" !== o.contentEditable) ||
                ((To = o), (jo = t), (Ao = null));
              break;
            case "blur":
              Ao = jo = To = null;
              break;
            case "mousedown":
              Oo = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              return (Oo = !1), Bo(r, n);
            case "selectionchange":
              if (So) break;
            case "keydown":
            case "keyup":
              return Bo(r, n);
          }
        return null;
      },
    };
    O.injectEventPluginOrder(
      "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
        " "
      )
    );
    var ee = Nn,
      te = kn,
      re = Rn,
      xo =
        (O.injectEventPluginsByName({
          SimpleEventPlugin: t,
          EnterLeaveEventPlugin: yo,
          ChangeEventPlugin: bo,
          SelectEventPlugin: Co,
          BeforeInputEventPlugin: Bn,
        }),
        new Set(),
        []),
      Mo = -1;
    function m(e) {
      Mo < 0 || ((e.current = xo[Mo]), (xo[Mo] = null), Mo--);
    }
    function y(e, t) {
      (xo[++Mo] = e.current), (e.current = t);
    }
    var Io = {},
      d = { current: Io },
      _ = { current: !1 },
      ko = Io;
    function Ro(e, t) {
      var r = e.type.contextTypes;
      if (!r) return Io;
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
    function v(e) {
      return null != (e = e.childContextTypes);
    }
    function No() {
      m(_), m(d);
    }
    function Po() {
      m(_), m(d);
    }
    function Do(e, t, r) {
      if (d.current !== Io) throw Error(D(168));
      y(d, t), y(_, r);
    }
    function Uo(e, t, r) {
      var n,
        o = e.stateNode;
      if (((e = t.childContextTypes), "function" != typeof o.getChildContext))
        return r;
      for (n in (o = o.getChildContext()))
        if (!(n in e)) throw Error(D(108, Ae(t) || "Unknown", n));
      return h({}, r, {}, o);
    }
    function Fo(e) {
      e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Io;
      (ko = d.current), y(d, e), y(_, _.current);
    }
    function Lo(e, t, r) {
      var n = e.stateNode;
      if (!n) throw Error(D(169));
      r
        ? ((t = Uo(e, t, ko)),
          (n.__reactInternalMemoizedMergedChildContext = t),
          m(_),
          m(d),
          y(d, t))
        : m(_),
        y(_, r);
    }
    var Wo = i.unstable_runWithPriority,
      zo = i.unstable_scheduleCallback,
      Vo = i.unstable_cancelCallback,
      Ho = i.unstable_shouldYield,
      t = i.unstable_requestPaint,
      $o = i.unstable_now,
      Go = i.unstable_getCurrentPriorityLevel,
      qo = i.unstable_ImmediatePriority,
      Ko = i.unstable_UserBlockingPriority,
      Yo = i.unstable_NormalPriority,
      Xo = i.unstable_LowPriority,
      Jo = i.unstable_IdlePriority,
      Qo = {},
      Zo = void 0 !== t ? t : function () {},
      ei = null,
      ti = null,
      ri = !1,
      ni = $o(),
      w =
        ni < 1e4
          ? $o
          : function () {
              return $o() - ni;
            };
    function oi() {
      switch (Go()) {
        case qo:
          return 99;
        case Ko:
          return 98;
        case Yo:
          return 97;
        case Xo:
          return 96;
        case Jo:
          return 95;
        default:
          throw Error(D(332));
      }
    }
    function ii(e) {
      switch (e) {
        case 99:
          return qo;
        case 98:
          return Ko;
        case 97:
          return Yo;
        case 96:
          return Xo;
        case 95:
          return Jo;
        default:
          throw Error(D(332));
      }
    }
    function ai(e, t) {
      return (e = ii(e)), Wo(e, t);
    }
    function si(e, t, r) {
      return (e = ii(e)), zo(e, t, r);
    }
    function li(e) {
      return null === ei ? ((ei = [e]), (ti = zo(qo, ui))) : ei.push(e), Qo;
    }
    function R() {
      var e;
      null !== ti && ((e = ti), (ti = null), Vo(e)), ui();
    }
    function ui() {
      if (!ri && null !== ei) {
        ri = !0;
        var t = 0;
        try {
          var r = ei;
          ai(99, function () {
            for (; t < r.length; t++)
              for (var e = r[t]; null !== (e = e(!0)); );
          }),
            (ei = null);
        } catch (e) {
          throw (null !== ei && (ei = ei.slice(t + 1)), zo(qo, R), e);
        } finally {
          ri = !1;
        }
      }
    }
    var ci = 3;
    function pi(e, t, r) {
      return (
        1073741821 - (1 + (((1073741821 - e + t / 10) / (r /= 10)) | 0)) * r
      );
    }
    function N(e, t) {
      if (e && e.defaultProps)
        for (var r in ((t = h({}, t)), (e = e.defaultProps)))
          void 0 === t[r] && (t[r] = e[r]);
      return t;
    }
    var fi = { current: null },
      gi = null,
      di = null,
      hi = null;
    function bi() {
      hi = di = gi = null;
    }
    function mi(e, t) {
      e = e.type._context;
      y(fi, e._currentValue), (e._currentValue = t);
    }
    function yi(e) {
      var t = fi.current;
      m(fi), (e.type._context._currentValue = t);
    }
    function _i(e, t) {
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
    function vi(e, t) {
      (hi = di = null) !== (e = (gi = e).dependencies) &&
        null !== e.firstContext &&
        (e.expirationTime >= t && (qa = !0), (e.firstContext = null));
    }
    function S(e, t) {
      if (hi !== e && !1 !== t && 0 !== t)
        if (
          (("number" == typeof t && 1073741823 !== t) ||
            ((hi = e), (t = 1073741823)),
          (t = { context: e, observedBits: t, next: null }),
          null === di)
        ) {
          if (null === gi) throw Error(D(308));
          (di = t),
            (gi.dependencies = {
              expirationTime: 0,
              firstContext: t,
              responders: null,
            });
        } else di = di.next = t;
      return e._currentValue;
    }
    var wi = !1;
    function Si(e) {
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
    function Ei(e) {
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
    function Ti(e, t) {
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
    function ji(e, t) {
      null === e.lastUpdate
        ? (e.firstUpdate = e.lastUpdate = t)
        : ((e.lastUpdate.next = t), (e.lastUpdate = t));
    }
    function Ai(e, t) {
      var r,
        n,
        o = e.alternate;
      null === o
        ? (n = null) === (r = e.updateQueue) &&
          (r = e.updateQueue = Si(e.memoizedState))
        : ((r = e.updateQueue),
          (n = o.updateQueue),
          null === r
            ? null === n
              ? ((r = e.updateQueue = Si(e.memoizedState)),
                (n = o.updateQueue = Si(o.memoizedState)))
              : (r = e.updateQueue = Ei(n))
            : null === n && (n = o.updateQueue = Ei(r))),
        null === n || r === n
          ? ji(r, t)
          : null === r.lastUpdate || null === n.lastUpdate
          ? (ji(r, t), ji(n, t))
          : (ji(r, t), (n.lastUpdate = t));
    }
    function Oi(e, t) {
      var r = e.updateQueue;
      null ===
      (r = null === r ? (e.updateQueue = Si(e.memoizedState)) : Bi(e, r))
        .lastCapturedUpdate
        ? (r.firstCapturedUpdate = r.lastCapturedUpdate = t)
        : ((r.lastCapturedUpdate.next = t), (r.lastCapturedUpdate = t));
    }
    function Bi(e, t) {
      var r = e.alternate;
      return (t =
        null !== r && t === r.updateQueue ? (e.updateQueue = Ei(t)) : t);
    }
    function Ci(e, t, r, n, o, i) {
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
          wi = !0;
      }
      return n;
    }
    function xi(e, t, r, n, o) {
      wi = !1;
      for (
        var i = (t = Bi(e, t)).baseState,
          a = null,
          s = 0,
          l = t.firstUpdate,
          u = i;
        null !== l;

      ) {
        var c = l.expirationTime;
        c < o
          ? (null === a && ((a = l), (i = u)), s < c && (s = c))
          : (gl(c, l.suspenseConfig),
            (u = Ci(e, 0, l, u, r, n)),
            null !== l.callback &&
              ((e.effectTag |= 32),
              (l.nextEffect = null) === t.lastEffect
                ? (t.firstEffect = t.lastEffect = l)
                : ((t.lastEffect.nextEffect = l), (t.lastEffect = l)))),
          (l = l.next);
      }
      for (c = null, l = t.firstCapturedUpdate; null !== l; ) {
        var p = l.expirationTime;
        p < o
          ? (null === c && ((c = l), null === a && (i = u)), s < p && (s = p))
          : ((u = Ci(e, 0, l, u, r, n)),
            null !== l.callback &&
              ((e.effectTag |= 32),
              (l.nextEffect = null) === t.lastCapturedEffect
                ? (t.firstCapturedEffect = t.lastCapturedEffect = l)
                : ((t.lastCapturedEffect.nextEffect = l),
                  (t.lastCapturedEffect = l)))),
          (l = l.next);
      }
      null === a && (t.lastUpdate = null),
        null === c ? (t.lastCapturedUpdate = null) : (e.effectTag |= 32),
        null === a && null === c && (i = u),
        (t.baseState = i),
        (t.firstUpdate = a),
        (t.firstCapturedUpdate = c),
        dl(s),
        (e.expirationTime = s),
        (e.memoizedState = u);
    }
    function Mi(e, t, r) {
      null !== t.firstCapturedUpdate &&
        (null !== t.lastUpdate &&
          ((t.lastUpdate.next = t.firstCapturedUpdate),
          (t.lastUpdate = t.lastCapturedUpdate)),
        (t.firstCapturedUpdate = t.lastCapturedUpdate = null)),
        Ii(t.firstEffect, r),
        (t.firstEffect = t.lastEffect = null),
        Ii(t.firstCapturedEffect, r),
        (t.firstCapturedEffect = t.lastCapturedEffect = null);
    }
    function Ii(e, t) {
      for (; null !== e; ) {
        var r = e.callback;
        if (null !== r) {
          e.callback = null;
          var n = t;
          if ("function" != typeof r) throw Error(D(191, r));
          r.call(n);
        }
        e = e.nextEffect;
      }
    }
    var ki = e.ReactCurrentBatchConfig,
      Ri = new B.Component().refs;
    function Ni(e, t, r, n) {
      (r = null == (r = r(n, (t = e.memoizedState))) ? t : h({}, t, r)),
        (e.memoizedState = r),
        null !== (n = e.updateQueue) &&
          0 === e.expirationTime &&
          (n.baseState = r);
    }
    var Pi = {
      isMounted: function (e) {
        return !!(e = e._reactInternalFiber) && Ct(e) === e;
      },
      enqueueSetState: function (e, t, r) {
        e = e._reactInternalFiber;
        var n = p(),
          o = ki.suspense;
        ((o = Ti((n = rl(n, e, o)), o)).payload = t),
          null != r && (o.callback = r),
          Ai(e, o),
          nl(e, n);
      },
      enqueueReplaceState: function (e, t, r) {
        e = e._reactInternalFiber;
        var n = p(),
          o = ki.suspense;
        ((o = Ti((n = rl(n, e, o)), o)).tag = 1),
          (o.payload = t),
          null != r && (o.callback = r),
          Ai(e, o),
          nl(e, n);
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternalFiber;
        var r = p(),
          n = ki.suspense;
        ((n = Ti((r = rl(r, e, n)), n)).tag = 2),
          null != t && (n.callback = t),
          Ai(e, n),
          nl(e, r);
      },
    };
    function Di(e, t, r, n, o, i, a) {
      return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(n, i, a)
        : !t.prototype ||
            !t.prototype.isPureReactComponent ||
            !wo(r, n) ||
            !wo(o, i);
    }
    function Ui(e, t, r) {
      var n = !1,
        o = Io,
        i = t.contextType;
      (t = new t(
        r,
        (i =
          "object" == typeof i && null !== i
            ? S(i)
            : ((o = v(t) ? ko : d.current),
              (n = null != (n = t.contextTypes)) ? Ro(e, o) : Io))
      )),
        (e.memoizedState =
          null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = Pi),
        ((e.stateNode = t)._reactInternalFiber = e),
        n &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
          (e.__reactInternalMemoizedMaskedChildContext = i));
    }
    function Fi(e, t, r, n) {
      (e = t.state),
        "function" == typeof t.componentWillReceiveProps &&
          t.componentWillReceiveProps(r, n),
        "function" == typeof t.UNSAFE_componentWillReceiveProps &&
          t.UNSAFE_componentWillReceiveProps(r, n),
        t.state !== e && Pi.enqueueReplaceState(t, t.state, null);
    }
    function Li(e, t, r, n) {
      var o = e.stateNode,
        i =
          ((o.props = r),
          (o.state = e.memoizedState),
          (o.refs = Ri),
          t.contextType);
      "object" == typeof i && null !== i
        ? (o.context = S(i))
        : ((i = v(t) ? ko : d.current), (o.context = Ro(e, i))),
        null !== (i = e.updateQueue) &&
          (xi(e, i, r, o, n), (o.state = e.memoizedState)),
        "function" == typeof (i = t.getDerivedStateFromProps) &&
          (Ni(e, 0, i, r), (o.state = e.memoizedState)),
        "function" == typeof t.getDerivedStateFromProps ||
          "function" == typeof o.getSnapshotBeforeUpdate ||
          ("function" != typeof o.UNSAFE_componentWillMount &&
            "function" != typeof o.componentWillMount) ||
          ((t = o.state),
          "function" == typeof o.componentWillMount && o.componentWillMount(),
          "function" == typeof o.UNSAFE_componentWillMount &&
            o.UNSAFE_componentWillMount(),
          t !== o.state && Pi.enqueueReplaceState(o, o.state, null),
          null !== (i = e.updateQueue) &&
            (xi(e, i, r, o, n), (o.state = e.memoizedState))),
        "function" == typeof o.componentDidMount && (e.effectTag |= 4);
    }
    var Wi = Array.isArray;
    function zi(e, t, r) {
      if (
        null !== (e = r.ref) &&
        "function" != typeof e &&
        "object" != typeof e
      ) {
        if (r._owner) {
          if ((r = r._owner)) {
            if (1 !== r.tag) throw Error(D(309));
            var n = r.stateNode;
          }
          if (!n) throw Error(D(147, e));
          var o = "" + e;
          return null !== t &&
            null !== t.ref &&
            "function" == typeof t.ref &&
            t.ref._stringRef === o
            ? t.ref
            : (((t = function (e) {
                var t = n.refs;
                t === Ri && (t = n.refs = {}),
                  null === e ? delete t[o] : (t[o] = e);
              })._stringRef = o),
              t);
        }
        if ("string" != typeof e) throw Error(D(284));
        if (!r._owner) throw Error(D(290, e));
      }
      return e;
    }
    function Vi(e, t) {
      if ("textarea" !== e.type)
        throw Error(
          D(
            31,
            "[object Object]" === Object.prototype.toString.call(t)
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : t,
            ""
          )
        );
    }
    function Hi(O) {
      function B(e, t) {
        var r;
        O &&
          (null !== (r = e.lastEffect)
            ? ((r.nextEffect = t), (e.lastEffect = t))
            : (e.firstEffect = e.lastEffect = t),
          (t.nextEffect = null),
          (t.effectTag = 8));
      }
      function C(e, t) {
        if (O) for (; null !== t; ) B(e, t), (t = t.sibling);
        return null;
      }
      function x(e, t) {
        for (e = new Map(); null !== t; )
          null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
      }
      function M(e, t) {
        return ((e = xl(e, t)).index = 0), (e.sibling = null), e;
      }
      function I(e, t, r) {
        if (((e.index = r), O)) {
          if (null !== (r = e.alternate))
            return (r = r.index) < t ? ((e.effectTag = 2), t) : r;
          e.effectTag = 2;
        }
        return t;
      }
      function k(e) {
        return O && null === e.alternate && (e.effectTag = 2), e;
      }
      function i(e, t, r, n) {
        return (
          null === t || 6 !== t.tag
            ? ((t = kl(r, e.mode, n)).return = e)
            : ((t = M(t, r)).return = e),
          t
        );
      }
      function a(e, t, r, n) {
        return (
          null !== t && t.elementType === r.type
            ? ((n = M(t, r.props)).ref = zi(0, t, r))
            : ((n = Ml(r.type, r.key, r.props, null, e.mode, n)).ref = zi(
                0,
                t,
                r
              )),
          (n.return = e),
          n
        );
      }
      function s(e, t, r, n) {
        return (
          null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== r.containerInfo ||
          t.stateNode.implementation !== r.implementation
            ? ((t = Rl(r, e.mode, n)).return = e)
            : ((t = M(t, r.children || [])).return = e),
          t
        );
      }
      function l(e, t, r, n, o) {
        return (
          null === t || 7 !== t.tag
            ? ((t = Il(r, e.mode, n, o)).return = e)
            : ((t = M(t, r)).return = e),
          t
        );
      }
      function R(e, t, r) {
        if ("string" == typeof t || "number" == typeof t)
          return ((t = kl("" + t, e.mode, r)).return = e), t;
        if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
            case pe:
              return (
                ((r = Ml(t.type, t.key, t.props, null, e.mode, r)).ref = zi(
                  0,
                  null,
                  t
                )),
                (r.return = e),
                r
              );
            case fe:
              return ((t = Rl(t, e.mode, r)).return = e), t;
          }
          if (Wi(t) || je(t))
            return ((t = Il(t, e.mode, r, null)).return = e), t;
          Vi(e, t);
        }
        return null;
      }
      function N(e, t, r, n) {
        var o = null !== t ? t.key : null;
        if ("string" == typeof r || "number" == typeof r)
          return null !== o ? null : i(e, t, "" + r, n);
        if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
            case pe:
              return r.key === o
                ? r.type === ge
                  ? l(e, t, r.props.children, n, o)
                  : a(e, t, r, n)
                : null;
            case fe:
              return r.key === o ? s(e, t, r, n) : null;
          }
          if (Wi(r) || je(r)) return null !== o ? null : l(e, t, r, n, null);
          Vi(e, r);
        }
        return null;
      }
      function P(e, t, r, n, o) {
        if ("string" == typeof n || "number" == typeof n)
          return i(t, (e = e.get(r) || null), "" + n, o);
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case pe:
              return (
                (e = e.get(null === n.key ? r : n.key) || null),
                n.type === ge
                  ? l(t, e, n.props.children, o, n.key)
                  : a(t, e, n, o)
              );
            case fe:
              return s(
                t,
                (e = e.get(null === n.key ? r : n.key) || null),
                n,
                o
              );
          }
          if (Wi(n) || je(n)) return l(t, (e = e.get(r) || null), n, o, null);
          Vi(t, n);
        }
        return null;
      }
      return function (e, t, r, n) {
        var o =
            "object" == typeof r &&
            null !== r &&
            r.type === ge &&
            null === r.key,
          i = "object" == typeof (r = o ? r.props.children : r) && null !== r;
        if (i)
          switch (r.$$typeof) {
            case pe:
              e: {
                for (i = r.key, o = t; null !== o; ) {
                  if (o.key === i) {
                    if (
                      7 === o.tag ? r.type === ge : o.elementType === r.type
                    ) {
                      C(e, o.sibling),
                        ((t = M(
                          o,
                          r.type === ge ? r.props.children : r.props
                        )).ref = zi(0, o, r)),
                        (t.return = e),
                        (e = t);
                      break e;
                    }
                    C(e, o);
                    break;
                  }
                  B(e, o), (o = o.sibling);
                }
                e =
                  r.type === ge
                    ? (((t = Il(r.props.children, e.mode, n, r.key)).return =
                        e),
                      t)
                    : (((n = Ml(r.type, r.key, r.props, null, e.mode, n)).ref =
                        zi(0, t, r)),
                      (n.return = e),
                      n);
              }
              return k(e);
            case fe:
              e: {
                for (o = r.key; null !== t; ) {
                  if (t.key === o) {
                    if (
                      4 === t.tag &&
                      t.stateNode.containerInfo === r.containerInfo &&
                      t.stateNode.implementation === r.implementation
                    ) {
                      C(e, t.sibling),
                        ((t = M(t, r.children || [])).return = e),
                        (e = t);
                      break e;
                    }
                    C(e, t);
                    break;
                  }
                  B(e, t), (t = t.sibling);
                }
                ((t = Rl(r, e.mode, n)).return = e), (e = t);
              }
              return k(e);
          }
        if ("string" == typeof r || "number" == typeof r)
          return (
            (r = "" + r),
            ((t =
              null !== t && 6 === t.tag
                ? (C(e, t.sibling), M(t, r))
                : (C(e, t), kl(r, e.mode, n))).return = e),
            k((e = t))
          );
        if (Wi(r)) {
          for (
            var a = e,
              s = t,
              l = r,
              u = n,
              c = null,
              p = null,
              f = s,
              g = (s = 0),
              d = null;
            null !== f && g < l.length;
            g++
          ) {
            f.index > g ? ((d = f), (f = null)) : (d = f.sibling);
            var h = N(a, f, l[g], u);
            if (null === h) {
              null === f && (f = d);
              break;
            }
            O && f && null === h.alternate && B(a, f),
              (s = I(h, s, g)),
              null === p ? (c = h) : (p.sibling = h),
              (p = h),
              (f = d);
          }
          if (g === l.length) return C(a, f), c;
          if (null === f)
            for (; g < l.length; g++)
              null !== (f = R(a, l[g], u)) &&
                ((s = I(f, s, g)),
                null === p ? (c = f) : (p.sibling = f),
                (p = f));
          else {
            for (f = x(a, f); g < l.length; g++)
              null !== (d = P(f, a, g, l[g], u)) &&
                (O &&
                  null !== d.alternate &&
                  f.delete(null === d.key ? g : d.key),
                (s = I(d, s, g)),
                null === p ? (c = d) : (p.sibling = d),
                (p = d));
            O &&
              f.forEach(function (e) {
                return B(a, e);
              });
          }
          return c;
        }
        if (je(r)) {
          var b = e,
            m = t,
            y = r,
            _ = n,
            v = je(y);
          if ("function" != typeof v) throw Error(D(150));
          if (null == (y = v.call(y))) throw Error(D(151));
          for (
            var w = (v = null), S = m, E = (m = 0), T = null, j = y.next();
            null !== S && !j.done;
            E++, j = y.next()
          ) {
            S.index > E ? ((T = S), (S = null)) : (T = S.sibling);
            var A = N(b, S, j.value, _);
            if (null === A) {
              null === S && (S = T);
              break;
            }
            O && S && null === A.alternate && B(b, S),
              (m = I(A, m, E)),
              null === w ? (v = A) : (w.sibling = A),
              (w = A),
              (S = T);
          }
          if (j.done) return C(b, S), v;
          if (null === S)
            for (; !j.done; E++, j = y.next())
              null !== (j = R(b, j.value, _)) &&
                ((m = I(j, m, E)),
                null === w ? (v = j) : (w.sibling = j),
                (w = j));
          else {
            for (S = x(b, S); !j.done; E++, j = y.next())
              null !== (j = P(S, b, E, j.value, _)) &&
                (O &&
                  null !== j.alternate &&
                  S.delete(null === j.key ? E : j.key),
                (m = I(j, m, E)),
                null === w ? (v = j) : (w.sibling = j),
                (w = j));
            O &&
              S.forEach(function (e) {
                return B(b, e);
              });
          }
          return v;
        }
        if ((i && Vi(e, r), void 0 === r && !o))
          switch (e.tag) {
            case 1:
            case 0:
              throw (
                ((e = e.type),
                Error(D(152, e.displayName || e.name || "Component")))
              );
          }
        return C(e, t);
      };
    }
    var $i = Hi(!0),
      Gi = Hi(!1),
      qi = {},
      E = { current: qi },
      Ki = { current: qi },
      Yi = { current: qi };
    function Xi(e) {
      if (e === qi) throw Error(D(174));
      return e;
    }
    function Ji(e, t) {
      y(Yi, t), y(Ki, e), y(E, qi);
      var r = t.nodeType;
      switch (r) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : dt(null, "");
          break;
        default:
          t = dt(
            (t = (r = 8 === r ? t.parentNode : t).namespaceURI || null),
            r.tagName
          );
      }
      m(E), y(E, t);
    }
    function Qi() {
      m(E), m(Ki), m(Yi);
    }
    function Zi(e) {
      Xi(Yi.current);
      var t = Xi(E.current),
        r = dt(t, e.type);
      t !== r && (y(Ki, e), y(E, r));
    }
    function ea(e) {
      Ki.current === e && (m(E), m(Ki));
    }
    var T = { current: 0 };
    function ta(e) {
      for (var t = e; null !== t; ) {
        if (13 === t.tag) {
          var r = t.memoizedState;
          if (
            null !== r &&
            (null === (r = r.dehydrated) || r.data === yn || r.data === _n)
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
    function ra(e, t) {
      return { responder: e, props: t };
    }
    var na = e.ReactCurrentDispatcher,
      l = e.ReactCurrentBatchConfig,
      oa = 0,
      ia = null,
      u = null,
      aa = null,
      sa = null,
      c = null,
      la = null,
      ua = 0,
      ca = null,
      pa = 0,
      fa = !1,
      ga = null,
      da = 0;
    function n() {
      throw Error(D(321));
    }
    function ha(e, t) {
      if (null !== t) {
        for (var r = 0; r < t.length && r < e.length; r++)
          if (!_o(e[r], t[r])) return;
        return 1;
      }
    }
    function ba(e, t, r, n, o, i) {
      if (
        ((oa = i),
        (ia = t),
        (aa = null !== e ? e.memoizedState : null),
        (na.current = null === aa ? Na : Pa),
        (t = r(n, o)),
        fa)
      ) {
        for (
          ;
          (fa = !1),
            (da += 1),
            (aa = null !== e ? e.memoizedState : null),
            (la = sa),
            (ca = c = u = null),
            (na.current = Pa),
            (t = r(n, o)),
            fa;

        );
        (ga = null), (da = 0);
      }
      if (
        ((na.current = Ra),
        ((e = ia).memoizedState = sa),
        (e.expirationTime = ua),
        (e.updateQueue = ca),
        (e.effectTag |= pa),
        (e = null !== u && null !== u.next),
        (la = c = sa = aa = u = ia = null),
        (ca = null),
        (pa = ua = oa = 0),
        e)
      )
        throw Error(D(300));
      return t;
    }
    function ma() {
      (na.current = Ra),
        (la = c = sa = aa = u = ia = null),
        (fa = !1),
        (ga = ca = null),
        (da = pa = ua = oa = 0);
    }
    function ya() {
      var e = {
        memoizedState: null,
        baseState: null,
        queue: null,
        baseUpdate: null,
        next: null,
      };
      return null === c ? (sa = c = e) : (c = c.next = e), c;
    }
    function _a() {
      if (null !== la)
        (la = (c = la).next), (aa = null !== (u = aa) ? u.next : null);
      else {
        if (null === aa) throw Error(D(310));
        var e = {
          memoizedState: (u = aa).memoizedState,
          baseState: u.baseState,
          queue: u.queue,
          baseUpdate: u.baseUpdate,
          next: null,
        };
        (c = null === c ? (sa = e) : (c.next = e)), (aa = u.next);
      }
      return c;
    }
    function va(e, t) {
      return "function" == typeof t ? t(e) : t;
    }
    function wa(e) {
      var t = _a(),
        r = t.queue;
      if (null === r) throw Error(D(311));
      if (((r.lastRenderedReducer = e), 0 < da)) {
        var n = r.dispatch;
        if (null !== ga) {
          var o = ga.get(r);
          if (void 0 !== o) {
            ga.delete(r);
            for (
              var i = t.memoizedState;
              (i = e(i, o.action)), null !== (o = o.next);

            );
            return (
              _o(i, t.memoizedState) || (qa = !0),
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
          l = n,
          u = !1;
        do {
          var c = l.expirationTime;
        } while (
          (c < oa
            ? (u || ((u = !0), (s = a), (o = i)), ua < c && dl((ua = c)))
            : (gl(c, l.suspenseConfig),
              (i = l.eagerReducer === e ? l.eagerState : e(i, l.action))),
          null !== (l = (a = l).next) && l !== n)
        );
        u || ((s = a), (o = i)),
          _o(i, t.memoizedState) || (qa = !0),
          (t.memoizedState = i),
          (t.baseUpdate = s),
          (t.baseState = o),
          (r.lastRenderedState = i);
      }
      return [t.memoizedState, r.dispatch];
    }
    function Sa(e) {
      var t = ya();
      return (
        "function" == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = (e = t.queue =
          {
            last: null,
            dispatch: null,
            lastRenderedReducer: va,
            lastRenderedState: e,
          }).dispatch =
          ka.bind(null, ia, e)),
        [t.memoizedState, e]
      );
    }
    function Ea(e) {
      return wa(va);
    }
    function Ta(e, t, r, n) {
      return (
        (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
        null === ca
          ? ((ca = { lastEffect: null }).lastEffect = e.next = e)
          : null === (t = ca.lastEffect)
          ? (ca.lastEffect = e.next = e)
          : ((r = t.next), ((t.next = e).next = r), (ca.lastEffect = e)),
        e
      );
    }
    function ja(e, t, r, n) {
      var o = ya();
      (pa |= e), (o.memoizedState = Ta(t, r, void 0, void 0 === n ? null : n));
    }
    function Aa(e, t, r, n) {
      var o = _a(),
        i = ((n = void 0 === n ? null : n), void 0);
      if (null !== u) {
        var a = u.memoizedState,
          i = a.destroy;
        if (null !== n && ha(n, a.deps)) return void Ta(0, r, i, n);
      }
      (pa |= e), (o.memoizedState = Ta(t, r, i, n));
    }
    function Oa(e, t) {
      return ja(516, 192, e, t);
    }
    function Ba(e, t) {
      return Aa(516, 192, e, t);
    }
    function Ca(e, t) {
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
    function xa() {}
    function Ma(e, t) {
      return (ya().memoizedState = [e, void 0 === t ? null : t]), e;
    }
    function Ia(e, t) {
      var r = _a(),
        n = ((t = void 0 === t ? null : t), r.memoizedState);
      return null !== n && null !== t && ha(t, n[1])
        ? n[0]
        : ((r.memoizedState = [e, t]), e);
    }
    function ka(e, t, r) {
      if (!(da < 25)) throw Error(D(301));
      var n = e.alternate;
      if (e === ia || (null !== n && n === ia))
        if (
          ((fa = !0),
          (e = {
            expirationTime: oa,
            suspenseConfig: null,
            action: r,
            eagerReducer: null,
            eagerState: null,
            next: null,
          }),
          void 0 === (r = (ga = null === ga ? new Map() : ga).get(t)))
        )
          ga.set(t, e);
        else {
          for (t = r; null !== t.next; ) t = t.next;
          t.next = e;
        }
      else {
        var o,
          i,
          a = {
            expirationTime: (o = rl(p(), e, (a = ki.suspense))),
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
            var l = t.lastRenderedState,
              u = n(l, r);
            if (((a.eagerReducer = n), (a.eagerState = u), _o(u, l))) return;
          } catch (e) {}
        nl(e, o);
      }
    }
    var Ra = {
        readContext: S,
        useCallback: n,
        useContext: n,
        useEffect: n,
        useImperativeHandle: n,
        useLayoutEffect: n,
        useMemo: n,
        useReducer: n,
        useRef: n,
        useState: n,
        useDebugValue: n,
        useResponder: n,
        useDeferredValue: n,
        useTransition: n,
      },
      Na = {
        readContext: S,
        useCallback: Ma,
        useContext: S,
        useEffect: Oa,
        useImperativeHandle: function (e, t, r) {
          return (
            (r = null != r ? r.concat([e]) : null),
            ja(4, 36, Ca.bind(null, t, e), r)
          );
        },
        useLayoutEffect: function (e, t) {
          return ja(4, 36, e, t);
        },
        useMemo: function (e, t) {
          var r = ya();
          return (
            (t = void 0 === t ? null : t),
            (e = e()),
            (r.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, r) {
          var n = ya();
          return (
            (t = void 0 !== r ? r(t) : t),
            (n.memoizedState = n.baseState = t),
            (e = (e = n.queue =
              {
                last: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t,
              }).dispatch =
              ka.bind(null, ia, e)),
            [n.memoizedState, e]
          );
        },
        useRef: function (e) {
          return (ya().memoizedState = e = { current: e });
        },
        useState: Sa,
        useDebugValue: xa,
        useResponder: ra,
        useDeferredValue: function (t, r) {
          var e = Sa(t),
            n = e[0],
            o = e[1];
          return (
            Oa(
              function () {
                i.unstable_next(function () {
                  var e = l.suspense;
                  l.suspense = void 0 === r ? null : r;
                  try {
                    o(t);
                  } finally {
                    l.suspense = e;
                  }
                });
              },
              [t, r]
            ),
            n
          );
        },
        useTransition: function (r) {
          var e = Sa(!1),
            t = e[0],
            n = e[1];
          return [
            Ma(
              function (t) {
                n(!0),
                  i.unstable_next(function () {
                    var e = l.suspense;
                    l.suspense = void 0 === r ? null : r;
                    try {
                      n(!1), t();
                    } finally {
                      l.suspense = e;
                    }
                  });
              },
              [r, t]
            ),
            t,
          ];
        },
      },
      Pa = {
        readContext: S,
        useCallback: Ia,
        useContext: S,
        useEffect: Ba,
        useImperativeHandle: function (e, t, r) {
          return (
            (r = null != r ? r.concat([e]) : null),
            Aa(4, 36, Ca.bind(null, t, e), r)
          );
        },
        useLayoutEffect: function (e, t) {
          return Aa(4, 36, e, t);
        },
        useMemo: function (e, t) {
          var r = _a(),
            n = ((t = void 0 === t ? null : t), r.memoizedState);
          return null !== n && null !== t && ha(t, n[1])
            ? n[0]
            : ((e = e()), (r.memoizedState = [e, t]), e);
        },
        useReducer: wa,
        useRef: function () {
          return _a().memoizedState;
        },
        useState: Ea,
        useDebugValue: xa,
        useResponder: ra,
        useDeferredValue: function (t, r) {
          var e = Ea(),
            n = e[0],
            o = e[1];
          return (
            Ba(
              function () {
                i.unstable_next(function () {
                  var e = l.suspense;
                  l.suspense = void 0 === r ? null : r;
                  try {
                    o(t);
                  } finally {
                    l.suspense = e;
                  }
                });
              },
              [t, r]
            ),
            n
          );
        },
        useTransition: function (r) {
          var e = Ea(),
            t = e[0],
            n = e[1];
          return [
            Ia(
              function (t) {
                n(!0),
                  i.unstable_next(function () {
                    var e = l.suspense;
                    l.suspense = void 0 === r ? null : r;
                    try {
                      n(!1), t();
                    } finally {
                      l.suspense = e;
                    }
                  });
              },
              [r, t]
            ),
            t,
          ];
        },
      },
      Da = null,
      Ua = null,
      Fa = !1;
    function La(e, t) {
      var r = Bl(5, null, null, 0);
      (r.elementType = "DELETED"),
        (r.type = "DELETED"),
        (r.stateNode = t),
        (r.return = e),
        (r.effectTag = 8),
        null !== e.lastEffect
          ? ((e.lastEffect.nextEffect = r), (e.lastEffect = r))
          : (e.firstEffect = e.lastEffect = r);
    }
    function Wa(e, t) {
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
    function za(e) {
      if (Fa) {
        var t = Ua;
        if (t) {
          var r = t;
          if (!Wa(e, t)) {
            if (!(t = An(r.nextSibling)) || !Wa(e, t))
              return (
                (e.effectTag = (-1025 & e.effectTag) | 2),
                (Fa = !1),
                void (Da = e)
              );
            La(Da, r);
          }
          (Da = e), (Ua = An(t.firstChild));
        } else (e.effectTag = (-1025 & e.effectTag) | 2), (Fa = !1), (Da = e);
      }
    }
    function Va(e) {
      for (
        e = e.return;
        null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

      )
        e = e.return;
      Da = e;
    }
    function Ha(e) {
      if (e === Da) {
        if (!Fa) return Va(e), (Fa = !0), 0;
        var t = e.type;
        if (
          5 !== e.tag ||
          ("head" !== t && "body" !== t && !En(t, e.memoizedProps))
        )
          for (t = Ua; t; ) La(e, t), (t = An(t.nextSibling));
        if ((Va(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(D(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var r = e.data;
                if (r === mn) {
                  if (0 === t) {
                    Ua = An(e.nextSibling);
                    break e;
                  }
                  t--;
                } else (r !== bn && r !== _n && r !== yn) || t++;
              }
              e = e.nextSibling;
            }
            Ua = null;
          }
        } else Ua = Da ? An(e.stateNode.nextSibling) : null;
        return 1;
      }
    }
    function $a() {
      (Ua = Da = null), (Fa = !1);
    }
    var Ga = e.ReactCurrentOwner,
      qa = !1;
    function f(e, t, r, n) {
      t.child = null === e ? Gi(t, null, r, n) : $i(t, e.child, r, n);
    }
    function Ka(e, t, r, n, o) {
      r = r.render;
      var i = t.ref;
      return (
        vi(t, o),
        (n = ba(e, t, r, n, i, o)),
        null === e || qa
          ? ((t.effectTag |= 1), f(e, t, n, o), t.child)
          : ((t.updateQueue = e.updateQueue),
            (t.effectTag &= -517),
            e.expirationTime <= o && (e.expirationTime = 0),
            ss(e, t, o))
      );
    }
    function Ya(e, t, r, n, o, i) {
      var a;
      return null === e
        ? "function" != typeof (a = r.type) ||
          Cl(a) ||
          void 0 !== a.defaultProps ||
          null !== r.compare ||
          void 0 !== r.defaultProps
          ? (((e = Ml(r.type, null, n, null, t.mode, i)).ref = t.ref),
            ((e.return = t).child = e))
          : ((t.tag = 15), (t.type = a), Xa(e, t, a, n, o, i))
        : ((a = e.child),
          o < i &&
          ((o = a.memoizedProps),
          (r = null !== (r = r.compare) ? r : wo)(o, n) && e.ref === t.ref)
            ? ss(e, t, i)
            : ((t.effectTag |= 1),
              ((e = xl(a, n)).ref = t.ref),
              ((e.return = t).child = e)));
    }
    function Xa(e, t, r, n, o, i) {
      return null !== e &&
        wo(e.memoizedProps, n) &&
        e.ref === t.ref &&
        ((qa = !1), o < i)
        ? ss(e, t, i)
        : Qa(e, t, r, n, i);
    }
    function Ja(e, t) {
      var r = t.ref;
      ((null === e && null !== r) || (null !== e && e.ref !== r)) &&
        (t.effectTag |= 128);
    }
    function Qa(e, t, r, n, o) {
      var i = Ro(t, v(r) ? ko : d.current);
      return (
        vi(t, o),
        (r = ba(e, t, r, n, i, o)),
        null === e || qa
          ? ((t.effectTag |= 1), f(e, t, r, o), t.child)
          : ((t.updateQueue = e.updateQueue),
            (t.effectTag &= -517),
            e.expirationTime <= o && (e.expirationTime = 0),
            ss(e, t, o))
      );
    }
    function Za(e, t, r, n, o) {
      var i, a, s, l, u, c, p, f, g;
      return (
        v(r) ? ((i = !0), Fo(t)) : (i = !1),
        vi(t, o),
        (n =
          null === t.stateNode
            ? (null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              Ui(t, r, n),
              Li(t, r, n, o),
              !0)
            : null === e
            ? ((a = t.stateNode),
              (s = t.memoizedProps),
              (a.props = s),
              (f = a.context),
              (l =
                "object" == typeof (l = r.contextType) && null !== l
                  ? S(l)
                  : Ro(t, (l = v(r) ? ko : d.current))),
              (c =
                "function" == typeof (u = r.getDerivedStateFromProps) ||
                "function" == typeof a.getSnapshotBeforeUpdate) ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof a.componentWillReceiveProps) ||
                (s === n && f === l) ||
                Fi(0, a, n, l),
              (wi = !1),
              (p = t.memoizedState),
              (f = a.state = p),
              null !== (g = t.updateQueue) &&
                (xi(t, g, n, a, o), (f = t.memoizedState)),
              s !== n || p !== f || _.current || wi
                ? ("function" == typeof u &&
                    (Ni(t, 0, u, n), (f = t.memoizedState)),
                  (s = wi || Di(t, r, s, n, p, f, l))
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
                  (a.context = l),
                  s)
                : ("function" == typeof a.componentDidMount &&
                    (t.effectTag |= 4),
                  !1))
            : ((a = t.stateNode),
              (s = t.memoizedProps),
              (a.props = t.type === t.elementType ? s : N(t.type, s)),
              (f = a.context),
              (l =
                "object" == typeof (l = r.contextType) && null !== l
                  ? S(l)
                  : Ro(t, (l = v(r) ? ko : d.current))),
              (c =
                "function" == typeof (u = r.getDerivedStateFromProps) ||
                "function" == typeof a.getSnapshotBeforeUpdate) ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof a.componentWillReceiveProps) ||
                (s === n && f === l) ||
                Fi(0, a, n, l),
              (wi = !1),
              (f = t.memoizedState),
              (p = a.state = f),
              null !== (g = t.updateQueue) &&
                (xi(t, g, n, a, o), (p = t.memoizedState)),
              s !== n || f !== p || _.current || wi
                ? ("function" == typeof u &&
                    (Ni(t, 0, u, n), (p = t.memoizedState)),
                  (u = wi || Di(t, r, s, n, f, p, l))
                    ? (c ||
                        ("function" != typeof a.UNSAFE_componentWillUpdate &&
                          "function" != typeof a.componentWillUpdate) ||
                        ("function" == typeof a.componentWillUpdate &&
                          a.componentWillUpdate(n, p, l),
                        "function" == typeof a.UNSAFE_componentWillUpdate &&
                          a.UNSAFE_componentWillUpdate(n, p, l)),
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
                  (a.context = l),
                  u)
                : ("function" != typeof a.componentDidUpdate ||
                    (s === e.memoizedProps && f === e.memoizedState) ||
                    (t.effectTag |= 4),
                  "function" != typeof a.getSnapshotBeforeUpdate ||
                    (s === e.memoizedProps && f === e.memoizedState) ||
                    (t.effectTag |= 256),
                  !1))),
        es(e, t, r, n, i, o)
      );
    }
    function es(e, t, r, n, o, i) {
      Ja(e, t);
      var a = 0 != (64 & t.effectTag);
      if (!n && !a) return o && Lo(t, r, !1), ss(e, t, i);
      (n = t.stateNode), (Ga.current = t);
      var s =
        a && "function" != typeof r.getDerivedStateFromError
          ? null
          : n.render();
      return (
        (t.effectTag |= 1),
        null !== e && a
          ? ((t.child = $i(t, e.child, null, i)), (t.child = $i(t, null, s, i)))
          : f(e, t, s, i),
        (t.memoizedState = n.state),
        o && Lo(t, r, !0),
        t.child
      );
    }
    function ts(e) {
      var t = e.stateNode;
      t.pendingContext
        ? Do(0, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Do(0, t.context, !1),
        Ji(e, t.containerInfo);
    }
    var rs = { dehydrated: null, retryTime: 0 };
    function ns(e, t, r) {
      var n,
        o = t.mode,
        i = t.pendingProps,
        a = T.current,
        s = !1;
      if (
        ((n = (n = 0 != (64 & t.effectTag))
          ? n
          : 0 != (2 & a) && (null === e || null !== e.memoizedState))
          ? ((s = !0), (t.effectTag &= -65))
          : (null !== e && null === e.memoizedState) ||
            void 0 === i.fallback ||
            !0 === i.unstable_avoidThisFallback ||
            (a |= 1),
        y(T, 1 & a),
        null === e)
      ) {
        if ((void 0 !== i.fallback && za(t), s)) {
          if (
            ((s = i.fallback),
            0 == (2 & ((i = Il(null, o, 0, null)).return = t).mode))
          )
            for (
              e = (null !== t.memoizedState ? t.child : t).child, i.child = e;
              null !== e;

            )
              (e.return = i), (e = e.sibling);
          return (
            ((r = Il(s, o, r, null)).return = t),
            (i.sibling = r),
            (t.memoizedState = rs),
            (t.child = i),
            r
          );
        }
        return (
          (o = i.children),
          (t.memoizedState = null),
          (t.child = Gi(t, null, o, r))
        );
      }
      if (null !== e.memoizedState) {
        if (((o = (e = e.child).sibling), s)) {
          if (
            ((i = i.fallback),
            0 == (2 & ((r = xl(e, e.pendingProps)).return = t).mode) &&
              (s = (null !== t.memoizedState ? t.child : t).child) !== e.child)
          )
            for (r.child = s; null !== s; ) (s.return = r), (s = s.sibling);
          return (
            ((o = xl(o, i, o.expirationTime)).return = t),
            (r.sibling = o),
            (r.childExpirationTime = 0),
            (t.memoizedState = rs),
            (t.child = r),
            o
          );
        }
        return (
          (r = $i(t, e.child, i.children, r)),
          (t.memoizedState = null),
          (t.child = r)
        );
      }
      if (((e = e.child), s)) {
        if (
          ((s = i.fallback),
          ((i = Il(null, o, 0, null)).return = t),
          null !== (i.child = e) && (e.return = i),
          0 == (2 & t.mode))
        )
          for (
            e = (null !== t.memoizedState ? t.child : t).child, i.child = e;
            null !== e;

          )
            (e.return = i), (e = e.sibling);
        return (
          ((r = Il(s, o, r, null)).return = t),
          ((i.sibling = r).effectTag |= 2),
          (i.childExpirationTime = 0),
          (t.memoizedState = rs),
          (t.child = i),
          r
        );
      }
      return (t.memoizedState = null), (t.child = $i(t, e, i.children, r));
    }
    function os(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var r = e.alternate;
      null !== r && r.expirationTime < t && (r.expirationTime = t),
        _i(e.return, t);
    }
    function is(e, t, r, n, o, i) {
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
    function as(e, t, r) {
      var n = t.pendingProps,
        o = n.revealOrder,
        i = n.tail;
      if ((f(e, t, n.children, r), 0 != (2 & (n = T.current))))
        (n = (1 & n) | 2), (t.effectTag |= 64);
      else {
        if (null !== e && 0 != (64 & e.effectTag))
          e: for (e = t.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && os(e, r);
            else if (19 === e.tag) os(e, r);
            else if (null !== e.child) {
              e = (e.child.return = e).child;
              continue;
            }
            if (e === t) break;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        n &= 1;
      }
      if ((y(T, n), 0 == (2 & t.mode))) t.memoizedState = null;
      else
        switch (o) {
          case "forwards":
            for (r = t.child, o = null; null !== r; )
              null !== (e = r.alternate) && null === ta(e) && (o = r),
                (r = r.sibling);
            null === (r = o)
              ? ((o = t.child), (t.child = null))
              : ((o = r.sibling), (r.sibling = null)),
              is(t, !1, o, r, i, t.lastEffect);
            break;
          case "backwards":
            for (o = t.child, t.child = r = null; null !== o; ) {
              if (null !== (e = o.alternate) && null === ta(e)) {
                t.child = o;
                break;
              }
              (e = o.sibling), (o.sibling = r), (r = o), (o = e);
            }
            is(t, !0, r, null, i, t.lastEffect);
            break;
          case "together":
            is(t, !1, null, null, void 0, t.lastEffect);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function ss(e, t, r) {
      null !== e && (t.dependencies = e.dependencies);
      var n = t.expirationTime;
      if ((0 !== n && dl(n), t.childExpirationTime < r)) return null;
      if (null !== e && t.child !== e.child) throw Error(D(153));
      if (null !== t.child) {
        for (
          r = xl((e = t.child), e.pendingProps, e.expirationTime),
            (t.child = r).return = t;
          null !== e.sibling;

        )
          (e = e.sibling),
            ((r = r.sibling = xl(e, e.pendingProps, e.expirationTime)).return =
              t);
        r.sibling = null;
      }
      return t.child;
    }
    function ls(e) {
      e.effectTag |= 4;
    }
    function us(e, t) {
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
    function cs(e, t) {
      return { value: e, source: t, stack: Oe(t) };
    }
    var ps = function (e, t) {
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
      fs = function (e, t, r, n, o) {
        var i = e.memoizedProps;
        if (i !== n) {
          var a,
            s,
            l = t.stateNode;
          switch ((Xi(E.current), (e = null), r)) {
            case "input":
              (i = et(l, i)), (n = et(l, n)), (e = []);
              break;
            case "option":
              (i = at(l, i)), (n = at(l, n)), (e = []);
              break;
            case "select":
              (i = h({}, i, { value: void 0 })),
                (n = h({}, n, { value: void 0 })),
                (e = []);
              break;
            case "textarea":
              (i = lt(l, i)), (n = lt(l, n)), (e = []);
              break;
            default:
              "function" != typeof i.onClick &&
                "function" == typeof n.onClick &&
                (l.onclick = cn);
          }
          for (a in (sn(r, n), (r = null), i))
            if (!n.hasOwnProperty(a) && i.hasOwnProperty(a) && null != i[a])
              if ("style" === a)
                for (s in ((l = i[a]), l))
                  l.hasOwnProperty(s) && ((r = r || {}), (r[s] = ""));
              else
                "dangerouslySetInnerHTML" !== a &&
                  "children" !== a &&
                  "suppressContentEditableWarning" !== a &&
                  "suppressHydrationWarning" !== a &&
                  "autoFocus" !== a &&
                  (G.hasOwnProperty(a)
                    ? (e = e || [])
                    : (e = e || []).push(a, null));
          for (a in n) {
            var u = n[a],
              l = null != i ? i[a] : void 0;
            if (n.hasOwnProperty(a) && u !== l && (null != u || null != l))
              if ("style" === a)
                if (l) {
                  for (s in l)
                    !l.hasOwnProperty(s) ||
                      (u && u.hasOwnProperty(s)) ||
                      ((r = r || {}), (r[s] = ""));
                  for (s in u)
                    u.hasOwnProperty(s) &&
                      l[s] !== u[s] &&
                      ((r = r || {}), (r[s] = u[s]));
                } else r || (e = e || []).push(a, r), (r = u);
              else
                "dangerouslySetInnerHTML" === a
                  ? ((u = u ? u.__html : void 0),
                    (l = l ? l.__html : void 0),
                    null != u && l !== u && (e = e || []).push(a, "" + u))
                  : "children" === a
                  ? l === u ||
                    ("string" != typeof u && "number" != typeof u) ||
                    (e = e || []).push(a, "" + u)
                  : "suppressContentEditableWarning" !== a &&
                    "suppressHydrationWarning" !== a &&
                    (G.hasOwnProperty(a)
                      ? (null != u && un(o, a), e || l === u || (e = []))
                      : (e = e || []).push(a, u));
          }
          r && (e = e || []).push("style", r),
            (o = e),
            (t.updateQueue = o) && ls(t);
        }
      },
      gs = function (e, t, r, n) {
        r !== n && ls(t);
      },
      ds = "function" == typeof WeakSet ? WeakSet : Set;
    function hs(e, t) {
      var r = t.source;
      null === t.stack && null !== r && Oe(r),
        null !== r && Ae(r.type),
        (t = t.value),
        null !== e && 1 === e.tag && Ae(e.type);
      try {
        console.error(t);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function bs(t) {
      var e = t.ref;
      if (null !== e)
        if ("function" == typeof e)
          try {
            e(null);
          } catch (e) {
            Sl(t, e);
          }
        else e.current = null;
    }
    function ms(e, t, r) {
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
    function ys(e, n, t) {
      switch (("function" == typeof Al && Al(n), n.tag)) {
        case 0:
        case 11:
        case 14:
        case 15:
          var o;
          null !== (e = n.updateQueue) &&
            null !== (e = e.lastEffect) &&
            ((o = e.next),
            ai(97 < t ? 97 : t, function () {
              var e = o;
              do {
                var t = e.destroy;
                if (void 0 !== t) {
                  var r = n;
                  try {
                    t();
                  } catch (e) {
                    Sl(r, e);
                  }
                }
              } while ((e = e.next) !== o);
            }));
          break;
        case 1:
          if (
            (bs(n), "function" == typeof (t = n.stateNode).componentWillUnmount)
          ) {
            var r = n;
            var i = t;
            try {
              (i.props = r.memoizedProps),
                (i.state = r.memoizedState),
                i.componentWillUnmount();
            } catch (e) {
              Sl(r, e);
            }
          }
          break;
        case 5:
          bs(n);
          break;
        case 4:
          ws(e, n, t);
      }
    }
    function _s(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }
    function vs(e) {
      e: {
        for (var t = e.return; null !== t; ) {
          if (_s(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(D(160));
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
          throw Error(D(161));
      }
      16 & r.effectTag && (yt(t, ""), (r.effectTag &= -17));
      e: t: for (r = e; ; ) {
        for (; null === r.sibling; ) {
          if (null === r.return || _s(r.return)) {
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
              null == (a = a._reactRootContainer) &&
                null === i.onclick &&
                (i.onclick = cn))
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
    function ws(e, t, r) {
      for (var n, o, i = t, a = !1; ; ) {
        if (!a) {
          a = i.return;
          e: for (;;) {
            if (null === a) throw Error(D(160));
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
          e: for (var s = e, l = i, u = r, c = l; ; )
            if ((ys(s, c, u), null !== c.child && 4 !== c.tag))
              (c.child.return = c), (c = c.child);
            else {
              if (c === l) break;
              for (; null === c.sibling; ) {
                if (null === c.return || c.return === l) break e;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
          o
            ? ((s = n),
              (l = i.stateNode),
              (8 === s.nodeType ? s.parentNode : s).removeChild(l))
            : n.removeChild(i.stateNode);
        } else if (4 === i.tag) {
          if (null !== i.child) {
            (n = i.stateNode.containerInfo),
              (o = !0),
              (i = (i.child.return = i).child);
            continue;
          }
        } else if ((ys(e, i, r), null !== i.child)) {
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
    function Ss(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ms(4, 8, t);
          break;
        case 1:
          break;
        case 5:
          var r = t.stateNode;
          if (null != r) {
            var n = t.memoizedProps,
              o = null !== e ? e.memoizedProps : n,
              i = ((e = t.type), t.updateQueue);
            if ((t.updateQueue = null) !== i) {
              for (
                r[xn] = n,
                  "input" === e &&
                    "radio" === n.type &&
                    null != n.name &&
                    rt(r, n),
                  ln(e, o),
                  t = ln(e, n),
                  o = 0;
                o < i.length;
                o += 2
              ) {
                var a = i[o],
                  s = i[o + 1];
                "style" === a
                  ? on(r, s)
                  : "dangerouslySetInnerHTML" === a
                  ? mt(r, s)
                  : "children" === a
                  ? yt(r, s)
                  : Xe(r, a, s, t);
              }
              switch (e) {
                case "input":
                  nt(r, n);
                  break;
                case "textarea":
                  ct(r, n);
                  break;
                case "select":
                  (t = r._wrapperState.wasMultiple),
                    (r._wrapperState.wasMultiple = !!n.multiple),
                    null != (e = n.value)
                      ? st(r, !!n.multiple, e, !1)
                      : t !== !!n.multiple &&
                        (null != n.defaultValue
                          ? st(r, !!n.multiple, n.defaultValue, !0)
                          : st(r, !!n.multiple, n.multiple ? [] : "", !1));
              }
            }
          }
          break;
        case 6:
          if (null === t.stateNode) throw Error(D(162));
          t.stateNode.nodeValue = t.memoizedProps;
          break;
        case 3:
          (t = t.stateNode).hydrate && ((t.hydrate = !1), Qt(t.containerInfo));
          break;
        case 12:
          break;
        case 13:
          if (
            (null === (r = t).memoizedState
              ? (n = !1)
              : ((n = !0), (r = t.child), (Hs = w())),
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
                      (i.style.display = nn("display", o)));
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
              if (e === r) break;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === r) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          Es(t);
          break;
        case 19:
          Es(t);
          break;
        case 17:
        case 20:
        case 21:
          break;
        default:
          throw Error(D(163));
      }
    }
    function Es(r) {
      var n,
        e = r.updateQueue;
      null !== e &&
        ((r.updateQueue = null) === (n = r.stateNode) &&
          (n = r.stateNode = new ds()),
        e.forEach(function (e) {
          var t = function (e, t) {
            var r = e.stateNode;
            null !== r && r.delete(t),
              (t = 0) === t && (t = rl((t = p()), e, null)),
              null !== (e = ol(e, t)) && H(e);
          }.bind(null, r, e);
          n.has(e) || (n.add(e), e.then(t, t));
        }));
    }
    var Ts = "function" == typeof WeakMap ? WeakMap : Map;
    function js(e, t, r) {
      ((r = Ti(r, null)).tag = 3), (r.payload = { element: null });
      var n = t.value;
      return (
        (r.callback = function () {
          Gs || ((Gs = !0), (qs = n)), hs(e, t);
        }),
        r
      );
    }
    function As(t, r, e) {
      (e = Ti(e, null)).tag = 3;
      var n,
        o = t.type.getDerivedStateFromError,
        i =
          ("function" == typeof o &&
            ((n = r.value),
            (e.payload = function () {
              return hs(t, r), o(n);
            })),
          t.stateNode);
      return (
        null !== i &&
          "function" == typeof i.componentDidCatch &&
          (e.callback = function () {
            "function" != typeof o &&
              (null === Ks ? (Ks = new Set([this])) : Ks.add(this), hs(t, r));
            var e = r.stack;
            this.componentDidCatch(r.value, {
              componentStack: null !== e ? e : "",
            });
          }),
        e
      );
    }
    var Os = Math.ceil,
      Bs = e.ReactCurrentDispatcher,
      Cs = e.ReactCurrentOwner,
      P = 0,
      xs = 8,
      U = 16,
      Ms = 32,
      Is = 0,
      ks = 1,
      Rs = 2,
      Ns = 3,
      Ps = 4,
      Ds = 5,
      F = P,
      L = null,
      W = null,
      z = 0,
      j = Is,
      Us = null,
      Fs = 1073741823,
      Ls = 1073741823,
      Ws = null,
      zs = 0,
      Vs = !1,
      Hs = 0,
      $s = 500,
      V = null,
      Gs = !1,
      qs = null,
      Ks = null,
      Ys = !1,
      Xs = null,
      Js = 90,
      Qs = null,
      Zs = 0,
      el = null,
      tl = 0;
    function p() {
      return (F & (U | Ms)) !== P
        ? 1073741821 - ((w() / 10) | 0)
        : 0 !== tl
        ? tl
        : (tl = 1073741821 - ((w() / 10) | 0));
    }
    function rl(e, t, r) {
      if (0 == (2 & (t = t.mode))) return 1073741823;
      var n = oi();
      if (0 == (4 & t)) return 99 === n ? 1073741823 : 1073741822;
      if ((F & U) !== P) return z;
      if (null !== r) e = pi(e, 0 | r.timeoutMs || 5e3, 250);
      else
        switch (n) {
          case 99:
            e = 1073741823;
            break;
          case 98:
            e = pi(e, 150, 100);
            break;
          case 97:
          case 96:
            e = pi(e, 5e3, 250);
            break;
          case 95:
            e = 2;
            break;
          default:
            throw Error(D(326));
        }
      return null !== L && e === z && --e, e;
    }
    function nl(e, t) {
      if (50 < Zs) throw ((Zs = 0), (el = null), Error(D(185)));
      var r;
      null !== (e = ol(e, t)) &&
        ((r = oi()),
        1073741823 === t
          ? (F & xs) !== P && (F & (U | Ms)) === P
            ? sl(e)
            : (H(e), F === P && R())
          : H(e),
        (4 & F) === P ||
          (98 !== r && 99 !== r) ||
          (null === Qs
            ? (Qs = new Map([[e, t]]))
            : (void 0 === (r = Qs.get(e)) || t < r) && Qs.set(e, t)));
    }
    function ol(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var r = e.alternate,
        n =
          (null !== r && r.expirationTime < t && (r.expirationTime = t),
          e.return),
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
        null !== o && (L === o && (dl(t), j === Ps && Dl(o, z)), Ul(o, t)), o
      );
    }
    function il(e) {
      var t = e.lastExpiredTime;
      return 0 === t && Pl(e, (t = e.firstPendingTime))
        ? ((t = e.lastPingedTime), (e = e.nextKnownPendingLevel) < t ? t : e)
        : t;
    }
    function H(e) {
      if (0 !== e.lastExpiredTime)
        (e.callbackExpirationTime = 1073741823),
          (e.callbackPriority = 99),
          (e.callbackNode = li(sl.bind(null, e)));
      else {
        var t = il(e),
          r = e.callbackNode;
        if (0 === t)
          null !== r &&
            ((e.callbackNode = null),
            (e.callbackExpirationTime = 0),
            (e.callbackPriority = 90));
        else {
          var n = p(),
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
            r !== Qo && Vo(r);
          }
          (e.callbackExpirationTime = t),
            (e.callbackPriority = n),
            (t =
              1073741823 === t
                ? li(sl.bind(null, e))
                : si(n, al.bind(null, e), {
                    timeout: 10 * (1073741821 - t) - w(),
                  })),
            (e.callbackNode = t);
        }
      }
    }
    function al(t, e) {
      if (((tl = 0), e)) return Fl(t, (e = p())), H(t), null;
      var r = il(t);
      if (0 !== r) {
        if (((e = t.callbackNode), (F & (U | Ms)) !== P)) throw Error(D(327));
        if ((_l(), (t === L && r === z) || cl(t, r), null !== W)) {
          for (var n = F, o = ((F |= U), fl()); ; )
            try {
              for (; null !== W && !Ho(); ) W = hl(W);
              break;
            } catch (e) {
              pl(t, e);
            }
          if ((bi(), (F = n), (Bs.current = o), j === ks))
            throw ((e = Us), cl(t, r), Dl(t, r), H(t), e);
          if (null === W)
            switch (
              ((o = t.finishedWork = t.current.alternate),
              (t.finishedExpirationTime = r),
              (n = j),
              (L = null),
              n)
            ) {
              case Is:
              case ks:
                throw Error(D(345));
              case Rs:
                Fl(t, 2 < r ? 2 : r);
                break;
              case Ns:
                if (
                  (Dl(t, r),
                  r === (n = t.lastSuspendedTime) &&
                    (t.nextKnownPendingLevel = ml(o)),
                  1073741823 === Fs && 10 < (o = Hs + $s - w()))
                ) {
                  if (Vs) {
                    var i = t.lastPingedTime;
                    if (0 === i || r <= i) {
                      (t.lastPingedTime = r), cl(t, r);
                      break;
                    }
                  }
                  if (0 !== (i = il(t)) && i !== r) break;
                  if (0 !== n && n !== r) {
                    t.lastPingedTime = n;
                    break;
                  }
                  t.timeoutHandle = Tn(yl.bind(null, t), o);
                  break;
                }
                yl(t);
                break;
              case Ps:
                if (
                  (Dl(t, r),
                  r === (n = t.lastSuspendedTime) &&
                    (t.nextKnownPendingLevel = ml(o)),
                  Vs && (0 === (o = t.lastPingedTime) || r <= o))
                ) {
                  (t.lastPingedTime = r), cl(t, r);
                  break;
                }
                if (0 !== (o = il(t)) && o !== r) break;
                if (0 !== n && n !== r) {
                  t.lastPingedTime = n;
                  break;
                }
                if (
                  (1073741823 !== Ls
                    ? (n = 10 * (1073741821 - Ls) - w())
                    : 1073741823 === Fs
                    ? (n = 0)
                    : ((n = 10 * (1073741821 - Fs) - 5e3),
                      (r = 10 * (1073741821 - r) - (o = w())) <
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
                            : 1960 * Os(n / 1960)) - n) && (n = r)),
                  10 < n)
                ) {
                  t.timeoutHandle = Tn(yl.bind(null, t), n);
                  break;
                }
                yl(t);
                break;
              case Ds:
                if (1073741823 !== Fs && null !== Ws) {
                  var i = Fs,
                    a = Ws;
                  if (
                    10 <
                    (n =
                      (n = 0 | a.busyMinDurationMs) <= 0
                        ? 0
                        : ((o = 0 | a.busyDelayMs),
                          (i =
                            w() -
                            (10 * (1073741821 - i) -
                              (0 | a.timeoutMs || 5e3))) <= o
                            ? 0
                            : o + n - i))
                  ) {
                    Dl(t, r), (t.timeoutHandle = Tn(yl.bind(null, t), n));
                    break;
                  }
                }
                yl(t);
                break;
              default:
                throw Error(D(329));
            }
          if ((H(t), t.callbackNode === e)) return al.bind(null, t);
        }
      }
      return null;
    }
    function sl(t) {
      var e = 0 !== (e = t.lastExpiredTime) ? e : 1073741823;
      if (t.finishedExpirationTime === e) yl(t);
      else {
        if ((F & (U | Ms)) !== P) throw Error(D(327));
        if ((_l(), (t === L && e === z) || cl(t, e), null !== W)) {
          for (var r = F, n = ((F |= U), fl()); ; )
            try {
              for (; null !== W; ) W = hl(W);
              break;
            } catch (e) {
              pl(t, e);
            }
          if ((bi(), (F = r), (Bs.current = n), j === ks))
            throw ((r = Us), cl(t, e), Dl(t, e), H(t), r);
          if (null !== W) throw Error(D(261));
          (t.finishedWork = t.current.alternate),
            (t.finishedExpirationTime = e),
            (L = null),
            yl(t),
            H(t);
        }
      }
      return null;
    }
    function ll(e, t) {
      var r = F;
      F |= 1;
      try {
        return e(t);
      } finally {
        (F = r) === P && R();
      }
    }
    function ul(e, t) {
      var r = F;
      F = (-2 & F) | xs;
      try {
        e(t);
      } finally {
        (F = r) === P && R();
      }
    }
    function cl(e, t) {
      (e.finishedWork = null), (e.finishedExpirationTime = 0);
      var r = e.timeoutHandle;
      if ((-1 !== r && ((e.timeoutHandle = -1), jn(r)), null !== W))
        for (r = W.return; null !== r; ) {
          var n = r;
          switch (n.tag) {
            case 1:
              var o = n.type.childContextTypes;
              null != o && No();
              break;
            case 3:
              Qi(), Po();
              break;
            case 5:
              ea(n);
              break;
            case 4:
              Qi();
              break;
            case 13:
            case 19:
              m(T);
              break;
            case 10:
              yi(n);
          }
          r = r.return;
        }
      (W = xl((L = e).current, null)),
        (z = t),
        (j = Is),
        (Ls = Fs = 1073741823),
        (Ws = Us = null),
        (zs = 0),
        (Vs = !1);
    }
    function pl(e, t) {
      do {
        try {
          if ((bi(), ma(), null === W || null === W.return))
            return (j = ks), (Us = t);
          e: {
            var r = e,
              n = W.return,
              o = t;
            if (
              ((t = z),
              ((h = W).effectTag |= 2048),
              (h.firstEffect = h.lastEffect = null) !== o &&
                "object" == typeof o &&
                "function" == typeof o.then)
            ) {
              var i,
                a,
                s,
                l = o,
                u = 0 != (1 & T.current),
                c = n;
              do {
                if (
                  (s = (s = 13 === c.tag)
                    ? null !== (i = c.memoizedState)
                      ? null !== i.dehydrated
                      : void 0 !== (a = c.memoizedProps).fallback &&
                        (!0 !== a.unstable_avoidThisFallback || !u)
                    : s)
                ) {
                  var p,
                    f,
                    g = c.updateQueue;
                  if (
                    (null === g
                      ? ((p = new Set()).add(l), (c.updateQueue = p))
                      : g.add(l),
                    0 == (2 & c.mode))
                  ) {
                    (c.effectTag |= 64),
                      (h.effectTag &= -2981),
                      1 === h.tag &&
                        (null === h.alternate
                          ? (h.tag = 17)
                          : (((f = Ti(1073741823, null)).tag = 2), Ai(h, f))),
                      (h.expirationTime = 1073741823);
                    break e;
                  }
                  var d,
                    o = void 0,
                    h = t,
                    b = r.pingCache;
                  null === b
                    ? ((b = r.pingCache = new Ts()),
                      (o = new Set()),
                      b.set(l, o))
                    : void 0 === (o = b.get(l)) &&
                      ((o = new Set()), b.set(l, o)),
                    o.has(h) ||
                      (o.add(h), (d = El.bind(null, r, l, h)), l.then(d, d)),
                    (c.effectTag |= 4096),
                    (c.expirationTime = t);
                  break e;
                }
              } while (null !== (c = c.return));
              o = Error(
                (Ae(h.type) || "A React component") +
                  " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                  Oe(h)
              );
            }
            j !== Ds && (j = Rs), (o = cs(o, h)), (c = n);
            do {
              switch (c.tag) {
                case 3:
                  l = o;
                  (c.effectTag |= 4096),
                    (c.expirationTime = t),
                    Oi(c, js(c, l, t));
                  break e;
                case 1:
                  l = o;
                  var m = c.type,
                    y = c.stateNode;
                  if (
                    0 == (64 & c.effectTag) &&
                    ("function" == typeof m.getDerivedStateFromError ||
                      (null !== y &&
                        "function" == typeof y.componentDidCatch &&
                        (null === Ks || !Ks.has(y))))
                  ) {
                    (c.effectTag |= 4096),
                      (c.expirationTime = t),
                      Oi(c, As(c, l, t));
                    break e;
                  }
              }
            } while (null !== (c = c.return));
          }
          W = bl(W);
        } catch (e) {
          t = e;
          continue;
        }
        break;
      } while (1);
    }
    function fl() {
      var e = Bs.current;
      return (Bs.current = Ra), null === e ? Ra : e;
    }
    function gl(e, t) {
      e < Fs && 2 < e && (Fs = e),
        null !== t && e < Ls && 2 < e && ((Ls = e), (Ws = t));
    }
    function dl(e) {
      zs < e && (zs = e);
    }
    function hl(e) {
      var t = Tl(e.alternate, e, z);
      return (
        (e.memoizedProps = e.pendingProps),
        null === t && (t = bl(e)),
        (Cs.current = null),
        t
      );
    }
    function bl(e) {
      W = e;
      do {
        var t = W.alternate;
        if (((e = W.return), 0 == (2048 & W.effectTag))) {
          e: {
            var r = t,
              n = z,
              o = (t = W).pendingProps;
            switch (t.tag) {
              case 2:
              case 16:
                break;
              case 15:
              case 0:
                break;
              case 1:
                v(t.type) && No();
                break;
              case 3:
                Qi(),
                  Po(),
                  (o = t.stateNode).pendingContext &&
                    ((o.context = o.pendingContext), (o.pendingContext = null)),
                  (null !== r && null !== r.child) || !Ha(t) || ls(t);
                break;
              case 5:
                ea(t);
                var n = Xi(Yi.current),
                  i = t.type;
                if (null !== r && null != t.stateNode)
                  fs(r, t, i, o, n), r.ref !== t.ref && (t.effectTag |= 128);
                else if (o) {
                  var a = Xi(E.current);
                  if (Ha(t)) {
                    var s = (o = t).stateNode,
                      r = o.type,
                      l = o.memoizedProps,
                      u = n;
                    switch (
                      ((s[Cn] = o), (s[xn] = l), (i = void 0), (n = s), r)
                    ) {
                      case "iframe":
                      case "object":
                      case "embed":
                        b("load", n);
                        break;
                      case "video":
                      case "audio":
                        for (s = 0; s < Bt.length; s++) b(Bt[s], n);
                        break;
                      case "source":
                        b("error", n);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        b("error", n), b("load", n);
                        break;
                      case "form":
                        b("reset", n), b("submit", n);
                        break;
                      case "details":
                        b("toggle", n);
                        break;
                      case "input":
                        tt(n, l), b("invalid", n), un(u, "onChange");
                        break;
                      case "select":
                        (n._wrapperState = { wasMultiple: !!l.multiple }),
                          b("invalid", n),
                          un(u, "onChange");
                        break;
                      case "textarea":
                        ut(n, l), b("invalid", n), un(u, "onChange");
                    }
                    for (i in (sn(r, l), (s = null), l))
                      l.hasOwnProperty(i) &&
                        ((a = l[i]),
                        "children" === i
                          ? "string" == typeof a
                            ? n.textContent !== a && (s = ["children", a])
                            : "number" == typeof a &&
                              n.textContent !== "" + a &&
                              (s = ["children", "" + a])
                          : G.hasOwnProperty(i) && null != a && un(u, i));
                    switch (r) {
                      case "input":
                        Qe(n), ot(n, l, !0);
                        break;
                      case "textarea":
                        Qe(n), pt(n);
                        break;
                      case "select":
                      case "option":
                        break;
                      default:
                        "function" == typeof l.onClick && (n.onclick = cn);
                    }
                    (i = s), (o.updateQueue = i), (o = null !== i) && ls(t);
                  } else {
                    (r = t),
                      (u = i),
                      (l = o),
                      (s = 9 === n.nodeType ? n : n.ownerDocument),
                      (a = a === ft.html ? gt(u) : a) === ft.html
                        ? "script" === u
                          ? (((l = s.createElement("div")).innerHTML =
                              "<script></script>"),
                            (s = l.removeChild(l.firstChild)))
                          : "string" == typeof l.is
                          ? (s = s.createElement(u, { is: l.is }))
                          : ((s = s.createElement(u)),
                            "select" === u &&
                              ((u = s),
                              l.multiple
                                ? (u.multiple = !0)
                                : l.size && (u.size = l.size)))
                        : (s = s.createElementNS(a, u)),
                      ((l = s)[Cn] = r),
                      (l[xn] = o),
                      ps(l, t),
                      (t.stateNode = l);
                    var c = n,
                      p = ln((u = i), (r = o));
                    switch (u) {
                      case "iframe":
                      case "object":
                      case "embed":
                        b("load", l), (n = r);
                        break;
                      case "video":
                      case "audio":
                        for (n = 0; n < Bt.length; n++) b(Bt[n], l);
                        n = r;
                        break;
                      case "source":
                        b("error", l), (n = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        b("error", l), b("load", l), (n = r);
                        break;
                      case "form":
                        b("reset", l), b("submit", l), (n = r);
                        break;
                      case "details":
                        b("toggle", l), (n = r);
                        break;
                      case "input":
                        tt(l, r),
                          (n = et(l, r)),
                          b("invalid", l),
                          un(c, "onChange");
                        break;
                      case "option":
                        n = at(l, r);
                        break;
                      case "select":
                        (l._wrapperState = { wasMultiple: !!r.multiple }),
                          (n = h({}, r, { value: void 0 })),
                          b("invalid", l),
                          un(c, "onChange");
                        break;
                      case "textarea":
                        ut(l, r),
                          (n = lt(l, r)),
                          b("invalid", l),
                          un(c, "onChange");
                        break;
                      default:
                        n = r;
                    }
                    sn(u, n);
                    var f,
                      s = void 0,
                      a = u,
                      g = l,
                      d = n;
                    for (s in d)
                      d.hasOwnProperty(s) &&
                        ((f = d[s]),
                        "style" === s
                          ? on(g, f)
                          : "dangerouslySetInnerHTML" === s
                          ? null != (f = f ? f.__html : void 0) && mt(g, f)
                          : "children" === s
                          ? "string" == typeof f
                            ? ("textarea" === a && "" === f) || yt(g, f)
                            : "number" == typeof f && yt(g, "" + f)
                          : "suppressContentEditableWarning" !== s &&
                            "suppressHydrationWarning" !== s &&
                            "autoFocus" !== s &&
                            (G.hasOwnProperty(s)
                              ? null != f && un(c, s)
                              : null != f && Xe(g, s, f, p)));
                    switch (u) {
                      case "input":
                        Qe(l), ot(l, r, !1);
                        break;
                      case "textarea":
                        Qe(l), pt(l);
                        break;
                      case "option":
                        null != r.value &&
                          l.setAttribute("value", "" + Ye(r.value));
                        break;
                      case "select":
                        ((n = l).multiple = !!r.multiple),
                          null != (l = r.value)
                            ? st(n, !!r.multiple, l, !1)
                            : null != r.defaultValue &&
                              st(n, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" == typeof n.onClick && (l.onclick = cn);
                    }
                    (o = Sn(i, o)) && ls(t);
                  }
                  null !== t.ref && (t.effectTag |= 128);
                } else if (null === t.stateNode) throw Error(D(166));
                break;
              case 6:
                if (r && null != t.stateNode) gs(0, t, r.memoizedProps, o);
                else {
                  if ("string" != typeof o && null === t.stateNode)
                    throw Error(D(166));
                  (n = Xi(Yi.current)),
                    Xi(E.current),
                    Ha(t)
                      ? ((i = (o = t).stateNode),
                        (n = o.memoizedProps),
                        (i[Cn] = o),
                        (o = i.nodeValue !== n) && ls(t))
                      : ((i = t),
                        ((o = (
                          9 === n.nodeType ? n : n.ownerDocument
                        ).createTextNode(o))[Cn] = i),
                        (t.stateNode = o));
                }
                break;
              case 11:
                break;
              case 13:
                if ((m(T), (o = t.memoizedState), 0 != (64 & t.effectTag))) {
                  t.expirationTime = n;
                  break e;
                }
                (o = null !== o),
                  (i = !1),
                  null === r
                    ? void 0 !== t.memoizedProps.fallback && Ha(t)
                    : ((i = null !== (n = r.memoizedState)),
                      o ||
                        null === n ||
                        (null !== (n = r.child.sibling) &&
                          (null !== (l = t.firstEffect)
                            ? ((t.firstEffect = n).nextEffect = l)
                            : ((t.firstEffect = t.lastEffect = n).nextEffect =
                                null),
                          (n.effectTag = 8)))),
                  o &&
                    !i &&
                    0 != (2 & t.mode) &&
                    ((null === r &&
                      !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                    0 != (1 & T.current)
                      ? j === Is && (j = Ns)
                      : ((j !== Is && j !== Ns) || (j = Ps),
                        0 !== zs && null !== L && (Dl(L, z), Ul(L, zs)))),
                  (o || i) && (t.effectTag |= 4);
                break;
              case 7:
              case 8:
              case 12:
                break;
              case 4:
                Qi();
                break;
              case 10:
                yi(t);
                break;
              case 9:
              case 14:
                break;
              case 17:
                v(t.type) && No();
                break;
              case 19:
                if ((m(T), null === (o = t.memoizedState))) break;
                if (
                  ((i = 0 != (64 & t.effectTag)), null === (l = o.rendering))
                ) {
                  if (i) us(o, !1);
                  else if (j !== Is || (null !== r && 0 != (64 & r.effectTag)))
                    for (r = t.child; null !== r; ) {
                      if (null !== (l = ta(r))) {
                        for (
                          t.effectTag |= 64,
                            us(o, !1),
                            null !== (i = l.updateQueue) &&
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
                            (n.lastEffect = null) === (l = n.alternate)
                              ? ((n.childExpirationTime = 0),
                                (n.expirationTime = r),
                                (n.child = null),
                                (n.memoizedProps = null),
                                (n.memoizedState = null),
                                (n.updateQueue = null),
                                (n.dependencies = null))
                              : ((n.childExpirationTime =
                                  l.childExpirationTime),
                                (n.expirationTime = l.expirationTime),
                                (n.child = l.child),
                                (n.memoizedProps = l.memoizedProps),
                                (n.memoizedState = l.memoizedState),
                                (n.updateQueue = l.updateQueue),
                                (r = l.dependencies),
                                (n.dependencies =
                                  null === r
                                    ? null
                                    : {
                                        expirationTime: r.expirationTime,
                                        firstContext: r.firstContext,
                                        responders: r.responders,
                                      })),
                            (i = i.sibling);
                        y(T, (1 & T.current) | 2), (t = t.child);
                        break e;
                      }
                      r = r.sibling;
                    }
                } else {
                  if (!i)
                    if (null !== (r = ta(l))) {
                      if (
                        ((t.effectTag |= 64),
                        (i = !0),
                        null !== (n = r.updateQueue) &&
                          ((t.updateQueue = n), (t.effectTag |= 4)),
                        us(o, !0),
                        null === o.tail && "hidden" === o.tailMode)
                      ) {
                        null !== (t = t.lastEffect = o.lastEffect) &&
                          (t.nextEffect = null);
                        break;
                      }
                    } else
                      w() > o.tailExpiration &&
                        1 < n &&
                        ((t.effectTag |= 64),
                        us(o, !(i = !0)),
                        (t.expirationTime = t.childExpirationTime = n - 1));
                  o.isBackwards
                    ? ((l.sibling = t.child), (t.child = l))
                    : (null !== (n = o.last) ? (n.sibling = l) : (t.child = l),
                      (o.last = l));
                }
                if (null === o.tail) break;
                0 === o.tailExpiration && (o.tailExpiration = w() + 500),
                  (n = o.tail),
                  (o.rendering = n),
                  (o.tail = n.sibling),
                  (o.lastEffect = t.lastEffect),
                  (n.sibling = null),
                  (o = T.current),
                  y(T, (o = i ? (1 & o) | 2 : 1 & o)),
                  (t = n);
                break e;
              case 20:
              case 21:
                break;
              default:
                throw Error(D(156, t.tag));
            }
            t = null;
          }
          if (((o = W), 1 === z || 1 !== o.childExpirationTime)) {
            for (i = 0, n = o.child; null !== n; )
              (i = i < (r = n.expirationTime) ? r : i) <
                (l = n.childExpirationTime) && (i = l),
                (n = n.sibling);
            o.childExpirationTime = i;
          }
          if (null !== t) return t;
          null !== e &&
            0 == (2048 & e.effectTag) &&
            (null === e.firstEffect && (e.firstEffect = W.firstEffect),
            null !== W.lastEffect &&
              (null !== e.lastEffect &&
                (e.lastEffect.nextEffect = W.firstEffect),
              (e.lastEffect = W.lastEffect)),
            1 < W.effectTag &&
              (null !== e.lastEffect
                ? (e.lastEffect.nextEffect = W)
                : (e.firstEffect = W),
              (e.lastEffect = W)));
        } else {
          if (
            null !==
            (t = (function (e) {
              switch (e.tag) {
                case 1:
                  v(e.type) && No();
                  var t = e.effectTag;
                  return 4096 & t
                    ? ((e.effectTag = (-4097 & t) | 64), e)
                    : null;
                case 3:
                  if ((Qi(), Po(), 0 != (64 & (t = e.effectTag))))
                    throw Error(D(285));
                  return (e.effectTag = (-4097 & t) | 64), e;
                case 5:
                  return ea(e), null;
                case 13:
                  return (
                    m(T),
                    4096 & (t = e.effectTag)
                      ? ((e.effectTag = (-4097 & t) | 64), e)
                      : null
                  );
                case 19:
                  return m(T), null;
                case 4:
                  return Qi(), null;
                case 10:
                  return yi(e), null;
                default:
                  return null;
              }
            })(W))
          )
            return (t.effectTag &= 2047), t;
          null !== e &&
            ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
        }
        if (null !== (t = W.sibling)) return t;
      } while (null !== (W = e));
      return j === Is && (j = Ds), null;
    }
    function ml(e) {
      var t = e.expirationTime;
      return (e = e.childExpirationTime) < t ? t : e;
    }
    function yl(e) {
      var t = oi();
      return (
        ai(
          99,
          function (e, t) {
            if ((_l(), (F & (U | Ms)) !== P)) throw Error(D(327));
            var r = e.finishedWork,
              n = e.finishedExpirationTime;
            if (null !== r) {
              if (
                ((e.finishedWork = null),
                (e.finishedExpirationTime = 0),
                r === e.current)
              )
                throw Error(D(177));
              (e.callbackNode = null),
                (e.callbackExpirationTime = 0),
                (e.callbackPriority = 90),
                (e.nextKnownPendingLevel = 0);
              var o = ml(r);
              if (
                ((e.firstPendingTime = o),
                n <= e.lastSuspendedTime
                  ? (e.firstSuspendedTime =
                      e.lastSuspendedTime =
                      e.nextKnownPendingLevel =
                        0)
                  : n <= e.firstSuspendedTime && (e.firstSuspendedTime = n - 1),
                n <= e.lastPingedTime && (e.lastPingedTime = 0),
                n <= e.lastExpiredTime && (e.lastExpiredTime = 0),
                e === L && ((W = L = null), (z = 0)),
                null !==
                  (o =
                    1 < r.effectTag
                      ? null !== r.lastEffect
                        ? (r.lastEffect.nextEffect = r).firstEffect
                        : r
                      : r.firstEffect))
              ) {
                var i = F,
                  a = ((F |= Ms), (Cs.current = null), (vn = Gr), dn());
                if (hn(a)) {
                  if ("selectionStart" in a)
                    var s = { start: a.selectionStart, end: a.selectionEnd };
                  else
                    e: {
                      var l =
                        (s = ((s = a.ownerDocument) && s.defaultView) || window)
                          .getSelection && s.getSelection();
                      if (l && 0 !== l.rangeCount) {
                        s = l.anchorNode;
                        var u = l.anchorOffset,
                          c = l.focusNode;
                        l = l.focusOffset;
                        try {
                          s.nodeType, c.nodeType;
                        } catch (e) {
                          s = null;
                          break e;
                        }
                        var p,
                          f = 0,
                          g = -1,
                          d = -1,
                          h = 0,
                          b = 0,
                          m = a,
                          y = null;
                        t: for (;;) {
                          for (
                            ;
                            m !== s ||
                              (0 !== u && 3 !== m.nodeType) ||
                              (g = f + u),
                              m !== c ||
                                (0 !== l && 3 !== m.nodeType) ||
                                (d = f + l),
                              3 === m.nodeType && (f += m.nodeValue.length),
                              null !== (p = m.firstChild);

                          )
                            (y = m), (m = p);
                          for (;;) {
                            if (m === a) break t;
                            if (
                              (y === s && ++h === u && (g = f),
                              y === c && ++b === l && (d = f),
                              null !== (p = m.nextSibling))
                            )
                              break;
                            y = (m = y).parentNode;
                          }
                          m = p;
                        }
                        s = -1 === g || -1 === d ? null : { start: g, end: d };
                      } else s = null;
                    }
                  s = s || { start: 0, end: 0 };
                } else s = null;
                (Gr = !(wn = { focusedElem: a, selectionRange: s })), (V = o);
                do {
                  try {
                    !(function () {
                      for (; null !== V; ) {
                        var e = V.effectTag;
                        0 != (256 & e) &&
                          (function (e, t) {
                            switch (t.tag) {
                              case 0:
                              case 11:
                              case 15:
                                ms(2, 0, t);
                                break;
                              case 1:
                                var r, n;
                                256 & t.effectTag &&
                                  null !== e &&
                                  ((r = e.memoizedProps),
                                  (n = e.memoizedState),
                                  (t = (e =
                                    t.stateNode).getSnapshotBeforeUpdate(
                                    t.elementType === t.type ? r : N(t.type, r),
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
                                throw Error(D(163));
                            }
                          })(V.alternate, V),
                          0 == (512 & e) ||
                            Ys ||
                            ((Ys = !0),
                            si(97, function () {
                              return _l(), null;
                            })),
                          (V = V.nextEffect);
                      }
                    })();
                  } catch (e) {
                    if (null === V) throw Error(D(330));
                    Sl(V, e), (V = V.nextEffect);
                  }
                } while (null !== V);
                V = o;
                do {
                  try {
                    for (a = e, s = t; null !== V; ) {
                      var _,
                        v,
                        w = V.effectTag;
                      switch (
                        (16 & w && yt(V.stateNode, ""),
                        128 & w &&
                          null !== (_ = V.alternate) &&
                          null !== (v = _.ref) &&
                          ("function" == typeof v
                            ? v(null)
                            : (v.current = null)),
                        1038 & w)
                      ) {
                        case 2:
                          vs(V), (V.effectTag &= -3);
                          break;
                        case 6:
                          vs(V), (V.effectTag &= -3), Ss(V.alternate, V);
                          break;
                        case 1024:
                          V.effectTag &= -1025;
                          break;
                        case 1028:
                          (V.effectTag &= -1025), Ss(V.alternate, V);
                          break;
                        case 4:
                          Ss(V.alternate, V);
                          break;
                        case 8:
                          ws(a, (u = V), s),
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
                            })(u);
                      }
                      V = V.nextEffect;
                    }
                  } catch (e) {
                    if (null === V) throw Error(D(330));
                    Sl(V, e), (V = V.nextEffect);
                  }
                } while (null !== V);
                if (
                  ((v = wn),
                  (_ = dn()),
                  (w = v.focusedElem),
                  (s = v.selectionRange),
                  _ !== w &&
                    w &&
                    w.ownerDocument &&
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
                    })(w.ownerDocument.documentElement, w))
                ) {
                  null !== s &&
                    hn(w) &&
                    ((_ = s.start),
                    void 0 === (v = s.end) && (v = _),
                    "selectionStart" in w
                      ? ((w.selectionStart = _),
                        (w.selectionEnd = Math.min(v, w.value.length)))
                      : (v =
                          ((_ = w.ownerDocument || document) &&
                            _.defaultView) ||
                          window).getSelection &&
                        ((v = v.getSelection()),
                        (u = w.textContent.length),
                        (a = Math.min(s.start, u)),
                        (s = void 0 === s.end ? a : Math.min(s.end, u)),
                        !v.extend && s < a && ((u = s), (s = a), (a = u)),
                        (u = gn(w, a)),
                        (c = gn(w, s)),
                        u &&
                          c &&
                          (1 !== v.rangeCount ||
                            v.anchorNode !== u.node ||
                            v.anchorOffset !== u.offset ||
                            v.focusNode !== c.node ||
                            v.focusOffset !== c.offset) &&
                          ((_ = _.createRange()).setStart(u.node, u.offset),
                          v.removeAllRanges(),
                          s < a
                            ? (v.addRange(_), v.extend(c.node, c.offset))
                            : (_.setEnd(c.node, c.offset), v.addRange(_))))),
                    (_ = []);
                  for (v = w; (v = v.parentNode); )
                    1 === v.nodeType &&
                      _.push({
                        element: v,
                        left: v.scrollLeft,
                        top: v.scrollTop,
                      });
                  for (
                    "function" == typeof w.focus && w.focus(), w = 0;
                    w < _.length;
                    w++
                  )
                    ((v = _[w]).element.scrollLeft = v.left),
                      (v.element.scrollTop = v.top);
                }
                (Gr = !!vn), (vn = wn = null), (e.current = r), (V = o);
                do {
                  try {
                    for (w = n; null !== V; ) {
                      var S,
                        E,
                        T = V.effectTag;
                      if (36 & T) {
                        var j,
                          A,
                          O,
                          B = V.alternate;
                        switch (((v = w), (_ = V).tag)) {
                          case 0:
                          case 11:
                          case 15:
                            ms(16, 32, _);
                            break;
                          case 1:
                            var C,
                              x = _.stateNode,
                              M =
                                (4 & _.effectTag &&
                                  (null === B
                                    ? x.componentDidMount()
                                    : ((C =
                                        _.elementType === _.type
                                          ? B.memoizedProps
                                          : N(_.type, B.memoizedProps)),
                                      x.componentDidUpdate(
                                        C,
                                        B.memoizedState,
                                        x.__reactInternalSnapshotBeforeUpdate
                                      ))),
                                _.updateQueue);
                            null !== M && Mi(0, M, x);
                            break;
                          case 3:
                            var I = _.updateQueue;
                            if (null !== I) {
                              if ((a = null) !== _.child)
                                switch (_.child.tag) {
                                  case 5:
                                  case 1:
                                    a = _.child.stateNode;
                                }
                              Mi(0, I, a);
                            }
                            break;
                          case 5:
                            var k = _.stateNode;
                            null === B &&
                              4 & _.effectTag &&
                              Sn(_.type, _.memoizedProps) &&
                              k.focus();
                            break;
                          case 6:
                          case 4:
                          case 12:
                            break;
                          case 13:
                            null !== _.memoizedState ||
                              (null !== (j = _.alternate) &&
                                null !== (A = j.memoizedState) &&
                                null !== (O = A.dehydrated) &&
                                Qt(O));
                            break;
                          case 19:
                          case 17:
                          case 20:
                          case 21:
                            break;
                          default:
                            throw Error(D(163));
                        }
                      }
                      128 & T &&
                        ((_ = void 0),
                        null !== (S = V.ref) &&
                          ((E = V.stateNode),
                          V.tag,
                          (_ = E),
                          "function" == typeof S ? S(_) : (S.current = _))),
                        (V = V.nextEffect);
                    }
                  } catch (e) {
                    if (null === V) throw Error(D(330));
                    Sl(V, e), (V = V.nextEffect);
                  }
                } while (null !== V);
                (V = null), Zo(), (F = i);
              } else e.current = r;
              if (Ys) (Ys = !1), (Xs = e), (Js = t);
              else
                for (V = o; null !== V; )
                  (t = V.nextEffect), (V.nextEffect = null), (V = t);
              if (
                (0 === (t = e.firstPendingTime) && (Ks = null),
                1073741823 === t
                  ? e === el
                    ? Zs++
                    : ((Zs = 0), (el = e))
                  : (Zs = 0),
                "function" == typeof jl && jl(r.stateNode, n),
                H(e),
                Gs)
              )
                throw ((Gs = !1), (e = qs), (qs = null), e);
              (F & xs) === P && R();
            }
            return null;
          }.bind(null, e, t)
        ),
        null
      );
    }
    function _l() {
      var e;
      if (90 !== Js) return (e = 97 < Js ? 97 : Js), (Js = 90), ai(e, vl);
    }
    function vl() {
      if (null === Xs) return !1;
      var t = Xs;
      if (((Xs = null), (F & (U | Ms)) !== P)) throw Error(D(331));
      var e = F;
      for (F |= Ms, t = t.current.firstEffect; null !== t; ) {
        try {
          var r = t;
          if (0 != (512 & r.effectTag))
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                ms(128, 0, r), ms(0, 64, r);
            }
        } catch (e) {
          if (null === t) throw Error(D(330));
          Sl(t, e);
        }
        (r = t.nextEffect), (t.nextEffect = null), (t = r);
      }
      return (F = e), R(), !0;
    }
    function wl(e, t, r) {
      Ai(e, (t = js(e, (t = cs(r, t)), 1073741823))),
        null !== (e = ol(e, 1073741823)) && H(e);
    }
    function Sl(e, t) {
      if (3 === e.tag) wl(e, e, t);
      else
        for (var r = e.return; null !== r; ) {
          if (3 === r.tag) {
            wl(r, e, t);
            break;
          }
          if (1 === r.tag) {
            var n = r.stateNode;
            if (
              "function" == typeof r.type.getDerivedStateFromError ||
              ("function" == typeof n.componentDidCatch &&
                (null === Ks || !Ks.has(n)))
            ) {
              Ai(r, (e = As(r, (e = cs(t, e)), 1073741823))),
                null !== (r = ol(r, 1073741823)) && H(r);
              break;
            }
          }
          r = r.return;
        }
    }
    function El(e, t, r) {
      var n = e.pingCache;
      null !== n && n.delete(t),
        L === e && z === r
          ? j === Ps || (j === Ns && 1073741823 === Fs && w() - Hs < $s)
            ? cl(e, z)
            : (Vs = !0)
          : !Pl(e, r) ||
            (0 !== (t = e.lastPingedTime) && t < r) ||
            ((e.lastPingedTime = r),
            e.finishedExpirationTime === r &&
              ((e.finishedExpirationTime = 0), (e.finishedWork = null)),
            H(e));
    }
    var Tl = function (e, t, r) {
        var n,
          o,
          i = t.expirationTime;
        if (null !== e) {
          var a = t.pendingProps;
          if (e.memoizedProps !== a || _.current) qa = !0;
          else {
            if (i < r) {
              switch (((qa = !1), t.tag)) {
                case 3:
                  ts(t), $a();
                  break;
                case 5:
                  if ((Zi(t), 4 & t.mode && 1 !== r && a.hidden))
                    return (t.expirationTime = t.childExpirationTime = 1), null;
                  break;
                case 1:
                  v(t.type) && Fo(t);
                  break;
                case 4:
                  Ji(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  mi(t, t.memoizedProps.value);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 !== (i = t.child.childExpirationTime) && r <= i
                      ? ns(e, t, r)
                      : (y(T, 1 & T.current),
                        null !== (t = ss(e, t, r)) ? t.sibling : null);
                  y(T, 1 & T.current);
                  break;
                case 19:
                  if (
                    ((i = t.childExpirationTime >= r), 0 != (64 & e.effectTag))
                  ) {
                    if (i) return as(e, t, r);
                    t.effectTag |= 64;
                  }
                  if (
                    (null !== (a = t.memoizedState) &&
                      ((a.rendering = null), (a.tail = null)),
                    y(T, T.current),
                    !i)
                  )
                    return null;
              }
              return ss(e, t, r);
            }
            qa = !1;
          }
        } else qa = !1;
        switch (((t.expirationTime = 0), t.tag)) {
          case 2:
            i = t.type;
            return (
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (e = t.pendingProps),
              (a = Ro(t, d.current)),
              vi(t, r),
              (a = ba(null, t, i, e, a, r)),
              (t.effectTag |= 1),
              (t =
                "object" == typeof a &&
                null !== a &&
                "function" == typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    ma(),
                    v(i) ? ((s = !0), Fo(t)) : (s = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    "function" == typeof (c = i.getDerivedStateFromProps) &&
                      Ni(t, 0, c, e),
                    (a.updater = Pi),
                    Li(((t.stateNode = a)._reactInternalFiber = t), i, e, r),
                    es(null, t, i, !0, s, r))
                  : ((t.tag = 0), f(null, t, a, r), t.child))
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
              (s = t.tag =
                (function (e) {
                  if ("function" == typeof e) return Cl(e) ? 1 : 0;
                  if (null != e) {
                    if ((e = e.$$typeof) === _e) return 11;
                    if (e === Se) return 14;
                  }
                  return 2;
                })(a)),
              (e = N(a, e)),
              s)
            ) {
              case 0:
                t = Qa(null, t, a, e, r);
                break;
              case 1:
                t = Za(null, t, a, e, r);
                break;
              case 11:
                t = Ka(null, t, a, e, r);
                break;
              case 14:
                t = Ya(null, t, a, N(a.type, e), i, r);
                break;
              default:
                throw Error(D(306, a, ""));
            }
            return t;
          case 0:
            return (
              (i = t.type),
              (a = t.pendingProps),
              Qa(e, t, i, (a = t.elementType === i ? a : N(i, a)), r)
            );
          case 1:
            return (
              (i = t.type),
              (a = t.pendingProps),
              Za(e, t, i, (a = t.elementType === i ? a : N(i, a)), r)
            );
          case 3:
            if ((ts(t), null === (i = t.updateQueue))) throw Error(D(282));
            if (
              ((a = null !== (a = t.memoizedState) ? a.element : null),
              xi(t, i, t.pendingProps, null, r),
              (i = t.memoizedState.element) === a)
            )
              $a(), (t = ss(e, t, r));
            else {
              if (
                ((a = t.stateNode.hydrate) &&
                  ((Ua = An(t.stateNode.containerInfo.firstChild)),
                  (Da = t),
                  (a = Fa = !0)),
                a)
              )
                for (r = Gi(t, null, i, r), t.child = r; r; )
                  (r.effectTag = (-3 & r.effectTag) | 1024), (r = r.sibling);
              else f(e, t, i, r), $a();
              t = t.child;
            }
            return t;
          case 5:
            return (
              Zi(t),
              null === e && za(t),
              (i = t.type),
              (a = t.pendingProps),
              (s = null !== e ? e.memoizedProps : null),
              (c = a.children),
              En(i, a)
                ? (c = null)
                : null !== s && En(i, s) && (t.effectTag |= 16),
              Ja(e, t),
              (t =
                4 & t.mode && 1 !== r && a.hidden
                  ? ((t.expirationTime = t.childExpirationTime = 1), null)
                  : (f(e, t, c, r), t.child))
            );
          case 6:
            return null === e && za(t), null;
          case 13:
            return ns(e, t, r);
          case 4:
            return (
              Ji(t, t.stateNode.containerInfo),
              (i = t.pendingProps),
              null === e ? (t.child = $i(t, null, i, r)) : f(e, t, i, r),
              t.child
            );
          case 11:
            return (
              (i = t.type),
              (a = t.pendingProps),
              Ka(e, t, i, (a = t.elementType === i ? a : N(i, a)), r)
            );
          case 7:
            return f(e, t, t.pendingProps, r), t.child;
          case 8:
          case 12:
            return f(e, t, t.pendingProps.children, r), t.child;
          case 10:
            e: {
              if (
                ((i = t.type._context),
                (a = t.pendingProps),
                (c = t.memoizedProps),
                mi(t, (s = a.value)),
                null !== c)
              ) {
                var s,
                  l = c.value;
                if (
                  0 ===
                  (s = _o(l, s)
                    ? 0
                    : 0 |
                      ("function" == typeof i._calculateChangedBits
                        ? i._calculateChangedBits(l, s)
                        : 1073741823))
                ) {
                  if (c.children === a.children && !_.current) {
                    t = ss(e, t, r);
                    break e;
                  }
                } else
                  for (null !== (l = t.child) && (l.return = t); null !== l; ) {
                    var u = l.dependencies;
                    if (null !== u)
                      for (var c = l.child, p = u.firstContext; null !== p; ) {
                        if (p.context === i && 0 != (p.observedBits & s)) {
                          1 === l.tag &&
                            (((p = Ti(r, null)).tag = 2), Ai(l, p)),
                            l.expirationTime < r && (l.expirationTime = r),
                            null !== (p = l.alternate) &&
                              p.expirationTime < r &&
                              (p.expirationTime = r),
                            _i(l.return, r),
                            u.expirationTime < r && (u.expirationTime = r);
                          break;
                        }
                        p = p.next;
                      }
                    else c = 10 === l.tag && l.type === t.type ? null : l.child;
                    if (null !== c) c.return = l;
                    else
                      for (c = l; null !== c; ) {
                        if (c === t) {
                          c = null;
                          break;
                        }
                        if (null !== (l = c.sibling)) {
                          (l.return = c.return), (c = l);
                          break;
                        }
                        c = c.return;
                      }
                    l = c;
                  }
              }
              f(e, t, a.children, r), (t = t.child);
            }
            return t;
          case 9:
            return (
              (a = t.type),
              (i = (s = t.pendingProps).children),
              vi(t, r),
              (i = i((a = S(a, s.unstable_observedBits)))),
              (t.effectTag |= 1),
              f(e, t, i, r),
              t.child
            );
          case 14:
            return (
              (s = N((a = t.type), t.pendingProps)),
              (s = N(a.type, s)),
              Ya(e, t, a, s, i, r)
            );
          case 15:
            return Xa(e, t, t.type, t.pendingProps, i, r);
          case 17:
            return (
              (i = t.type),
              (a = t.pendingProps),
              (a = t.elementType === i ? a : N(i, a)),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (t.tag = 1),
              v(i) ? ((e = !0), Fo(t)) : (e = !1),
              vi(t, r),
              Ui(t, i, a),
              Li(t, i, a, r),
              es(null, t, i, !0, e, r)
            );
          case 19:
            return as(e, t, r);
        }
        throw Error(D(156, t.tag));
      },
      jl = null,
      Al = null;
    function Ol(e, t, r, n) {
      (this.tag = e),
        (this.key = r),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = n),
        (this.effectTag = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.childExpirationTime = this.expirationTime = 0),
        (this.alternate = null);
    }
    function Bl(e, t, r, n) {
      return new Ol(e, t, r, n);
    }
    function Cl(e) {
      return (e = e.prototype) && e.isReactComponent;
    }
    function xl(e, t) {
      var r = e.alternate;
      return (
        null === r
          ? (((r = Bl(e.tag, t, e.key, e.mode)).elementType = e.elementType),
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
    function Ml(e, t, r, n, o, i) {
      var a = 2;
      if ("function" == typeof (n = e)) Cl(e) && (a = 1);
      else if ("string" == typeof e) a = 5;
      else
        e: switch (e) {
          case ge:
            return Il(r.children, o, i, t);
          case ye:
            (a = 8), (o |= 7);
            break;
          case de:
            (a = 8), (o |= 1);
            break;
          case he:
            return (
              ((e = Bl(12, r, t, 8 | o)).elementType = he),
              (e.type = he),
              (e.expirationTime = i),
              e
            );
          case ve:
            return (
              ((e = Bl(13, r, t, o)).type = ve),
              (e.elementType = ve),
              (e.expirationTime = i),
              e
            );
          case we:
            return (
              ((e = Bl(19, r, t, o)).elementType = we),
              (e.expirationTime = i),
              e
            );
          default:
            if ("object" == typeof e && null !== e)
              switch (e.$$typeof) {
                case be:
                  a = 10;
                  break e;
                case me:
                  a = 9;
                  break e;
                case _e:
                  a = 11;
                  break e;
                case Se:
                  a = 14;
                  break e;
                case Ee:
                  (a = 16), (n = null);
                  break e;
              }
            throw Error(D(130, null == e ? e : typeof e, ""));
        }
      return (
        ((t = Bl(a, r, t, o)).elementType = e),
        (t.type = n),
        (t.expirationTime = i),
        t
      );
    }
    function Il(e, t, r, n) {
      return ((e = Bl(7, e, n, t)).expirationTime = r), e;
    }
    function kl(e, t, r) {
      return ((e = Bl(6, e, null, t)).expirationTime = r), e;
    }
    function Rl(e, t, r) {
      return (
        ((t = Bl(
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
    function Nl(e, t, r) {
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
        (this.lastExpiredTime =
          this.lastPingedTime =
          this.nextKnownPendingLevel =
          this.lastSuspendedTime =
          this.firstSuspendedTime =
          this.firstPendingTime =
            0);
    }
    function Pl(e, t) {
      var r = e.firstSuspendedTime;
      return (e = e.lastSuspendedTime), 0 !== r && t <= r && e <= t;
    }
    function Dl(e, t) {
      var r = e.firstSuspendedTime,
        n = e.lastSuspendedTime;
      r < t && (e.firstSuspendedTime = t),
        (t < n || 0 === r) && (e.lastSuspendedTime = t),
        t <= e.lastPingedTime && (e.lastPingedTime = 0),
        t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
    }
    function Ul(e, t) {
      t > e.firstPendingTime && (e.firstPendingTime = t);
      var r = e.firstSuspendedTime;
      0 !== r &&
        (r <= t
          ? (e.firstSuspendedTime =
              e.lastSuspendedTime =
              e.nextKnownPendingLevel =
                0)
          : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
        t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
    }
    function Fl(e, t) {
      var r = e.lastExpiredTime;
      (0 === r || t < r) && (e.lastExpiredTime = t);
    }
    function Ll(e, t, r, n) {
      var o = t.current,
        i = p(),
        a = ki.suspense,
        i = rl(i, o, a);
      e: if (r) {
        t: {
          if (Ct((r = r._reactInternalFiber)) !== r || 1 !== r.tag)
            throw Error(D(170));
          var s = r;
          do {
            switch (s.tag) {
              case 3:
                s = s.stateNode.context;
                break t;
              case 1:
                if (v(s.type)) {
                  s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
          } while (null !== (s = s.return));
          throw Error(D(171));
        }
        if (1 === r.tag) {
          var l = r.type;
          if (v(l)) {
            r = Uo(r, l, s);
            break e;
          }
        }
        r = s;
      } else r = Io;
      null === t.context ? (t.context = r) : (t.pendingContext = r),
        ((t = Ti(i, a)).payload = { element: e }),
        null !== (n = void 0 === n ? null : n) && (t.callback = n),
        Ai(o, t),
        nl(o, i);
    }
    function Wl(e) {
      return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
    }
    function zl(e, t) {
      null !== (e = e.memoizedState) &&
        null !== e.dehydrated &&
        e.retryTime < t &&
        (e.retryTime = t);
    }
    function Vl(e, t) {
      zl(e, t), (e = e.alternate) && zl(e, t);
    }
    function Hl(e, t, r) {
      var n,
        o,
        i = new Nl(e, t, (r = null != r && !0 === r.hydrate)),
        a = Bl(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
      ((i.current = a).stateNode = i),
        (e[Mn] = i.current),
        r &&
          0 !== t &&
          ((n = 9 === e.nodeType ? e : e.ownerDocument),
          (o = Zr(n)),
          Vt.forEach(function (e) {
            en(e, n, o);
          }),
          Ht.forEach(function (e) {
            en(e, n, o);
          })),
        (this._internalRoot = i);
    }
    function $l(e) {
      return (
        e &&
        (1 === e.nodeType ||
          9 === e.nodeType ||
          11 === e.nodeType ||
          (8 === e.nodeType && " react-mount-point-unstable " === e.nodeValue))
      );
    }
    function Gl(e, t, r, n, o) {
      var i,
        a,
        s,
        l = r._reactRootContainer;
      return (
        l
          ? ((s = l._internalRoot),
            "function" == typeof o &&
              ((i = o),
              (o = function () {
                var e = Wl(s);
                i.call(e);
              })),
            Ll(t, s, e, o))
          : ((s = (l = r._reactRootContainer =
              (function (e, t) {
                if (
                  !(t = t
                    ? t
                    : !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      ))
                )
                  for (var r; (r = e.lastChild); ) e.removeChild(r);
                return new Hl(e, 0, t ? { hydrate: !0 } : void 0);
              })(r, n))._internalRoot),
            "function" == typeof o &&
              ((a = o),
              (o = function () {
                var e = Wl(s);
                a.call(e);
              })),
            ul(function () {
              Ll(t, s, e, o);
            })),
        Wl(s)
      );
    }
    function ql(e, t) {
      if ($l(t))
        return (function (e, t, r, n) {
          return {
            $$typeof: fe,
            key:
              null == (n = 3 < arguments.length && void 0 !== n ? n : null)
                ? null
                : "" + n,
            children: e,
            containerInfo: t,
            implementation: r,
          };
        })(
          e,
          t,
          null,
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
        );
      throw Error(D(200));
    }
    (kt = function (e) {
      var t;
      13 === e.tag && (nl(e, (t = pi(p(), 150, 100))), Vl(e, t));
    }),
      (Rt = function (e) {
        var t;
        13 === e.tag && (p(), nl(e, (t = ci++)), Vl(e, t));
      }),
      (Nt = function (e) {
        var t;
        13 === e.tag && (nl(e, (t = rl(p(), e, null))), Vl(e, t));
      }),
      (Ce = function (e, t, r) {
        switch (t) {
          case "input":
            if ((nt(e, r), (t = r.name), "radio" === r.type && null != t)) {
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
                  var o = Nn(n);
                  if (!o) throw Error(D(90));
                  Ze(n), nt(n, o);
                }
              }
            }
            break;
          case "textarea":
            ct(e, r);
            break;
          case "select":
            null != (t = r.value) && st(e, !!r.multiple, t, !1);
        }
      }),
      (Hl.prototype.render = function (e, t) {
        Ll(e, this._internalRoot, null, void 0 === t ? null : t);
      }),
      (Hl.prototype.unmount = function (e) {
        Ll(null, this._internalRoot, null, void 0 === e ? null : e);
      }),
      (Pe = function (e, t, r, n) {
        var o = F;
        F |= 4;
        try {
          return ai(98, e.bind(null, t, r, n));
        } finally {
          (F = o) === P && R();
        }
      });
    var Ue = function (e, t) {
        var r = F;
        F |= 2;
        try {
          return e(t);
        } finally {
          (F = r) === P && R();
        }
      },
      yo = {
        createPortal: ql,
        findDOMNode: function (e) {
          if (null == e) return null;
          if (1 !== e.nodeType) {
            var t = e._reactInternalFiber;
            if (void 0 === t) {
              if ("function" == typeof e.render) throw Error(D(188));
              throw Error(D(268, Object.keys(e)));
            }
            e = null === (e = It(t)) ? null : e.stateNode;
          }
          return e;
        },
        hydrate: function (e, t, r) {
          if ($l(t)) return Gl(null, e, t, !0, r);
          throw Error(D(200));
        },
        render: function (e, t, r) {
          if ($l(t)) return Gl(null, e, t, !1, r);
          throw Error(D(200));
        },
        unstable_renderSubtreeIntoContainer: function (e, t, r, n) {
          if (!$l(r)) throw Error(D(200));
          if (null == e || void 0 === e._reactInternalFiber) throw Error(D(38));
          return Gl(e, t, r, !1, n);
        },
        unmountComponentAtNode: function (e) {
          if ($l(e))
            return (
              !!e._reactRootContainer &&
              (ul(function () {
                Gl(null, null, e, !1, function () {
                  e._reactRootContainer = null;
                });
              }),
              !0)
            );
          throw Error(D(40));
        },
        unstable_createPortal: function () {
          return ql.apply(void 0, arguments);
        },
        unstable_batchedUpdates: (Ne = ll),
        flushSync: function (e, t) {
          if ((F & (U | Ms)) !== P) throw Error(D(187));
          var r = F;
          F |= 1;
          try {
            return ai(99, e.bind(null, t));
          } finally {
            (F = r), R();
          }
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          Events: [
            kn,
            Rn,
            Nn,
            O.injectEventPluginsByName,
            $,
            ir,
            function (e) {
              ie(e, or);
            },
            ke,
            Re,
            Yr,
            le,
            _l,
            {
              current: !(De = function () {
                var e;
                (F & (1 | U | Ms)) === P &&
                  (null !== Qs &&
                    ((e = Qs),
                    (Qs = null),
                    e.forEach(function (e, t) {
                      Fl(t, e), H(t);
                    }),
                    R()),
                  _l());
              }),
            },
          ],
        },
      },
      Kl = (bo = {
        findFiberByHostInstance: In,
        bundleType: 0,
        version: "16.11.0",
        rendererPackageName: "react-dom",
      }).findFiberByHostInstance,
      bo = h({}, bo, {
        overrideHookState: null,
        overrideProps: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: e.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return null === (e = It(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance: function (e) {
          return Kl ? Kl(e) : null;
        },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
      });
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var Yl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Yl.isDisabled && Yl.supportsFiber)
        try {
          var Xl = Yl.inject(bo);
          (jl = function (e) {
            try {
              Yl.onCommitFiberRoot(
                Xl,
                e,
                void 0,
                64 == (64 & e.current.effectTag)
              );
            } catch (e) {}
          }),
            (Al = function (e) {
              try {
                Yl.onCommitFiberUnmount(Xl, e);
              } catch (e) {}
            });
        } catch (e) {}
    }
    g.exports = yo.default || yo;
  },
  zuR4: function (e, t, r) {
    "use strict";
    var n = r("xTJ+"),
      o = r("HSsa"),
      i = r("CgaS"),
      a = r("SntB");
    function s(e) {
      var e = new i(e),
        t = o(i.prototype.request, e);
      return n.extend(t, i.prototype, e), n.extend(t, e), t;
    }
    var l = s(r("JEQr"));
    (l.Axios = i),
      (l.create = function (e) {
        return s(a(l.defaults, e));
      }),
      (l.Cancel = r("endd")),
      (l.CancelToken = r("jfS+")),
      (l.isCancel = r("Lmem")),
      (l.all = function (e) {
        return Promise.all(e);
      }),
      (l.spread = r("DfZB")),
      (l.isAxiosError = r("XwJu")),
      (e.exports = l),
      (e.exports.default = l);
  },
});
//# sourceMappingURL=friends.js.map
