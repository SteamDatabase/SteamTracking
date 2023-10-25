/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7099],
  {
    92994: (e) => {
      var t,
        r = (function () {
          function e(e, t) {
            if ("function" != typeof e)
              throw new TypeError(
                "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " +
                  e +
                  ".",
              );
            (this._batchLoadFn = e),
              (this._maxBatchSize = (function (e) {
                var t = !e || !1 !== e.batch;
                if (!t) return 1;
                var r = e && e.maxBatchSize;
                if (void 0 === r) return 1 / 0;
                if ("number" != typeof r || r < 1)
                  throw new TypeError(
                    "maxBatchSize must be a positive number: " + r,
                  );
                return r;
              })(t)),
              (this._batchScheduleFn = (function (e) {
                var t = e && e.batchScheduleFn;
                if (void 0 === t) return i;
                if ("function" != typeof t)
                  throw new TypeError(
                    "batchScheduleFn must be a function: " + t,
                  );
                return t;
              })(t)),
              (this._cacheKeyFn = (function (e) {
                var t = e && e.cacheKeyFn;
                if (void 0 === t)
                  return function (e) {
                    return e;
                  };
                if ("function" != typeof t)
                  throw new TypeError("cacheKeyFn must be a function: " + t);
                return t;
              })(t)),
              (this._cacheMap = (function (e) {
                var t = !e || !1 !== e.cache;
                if (!t) return null;
                var r = e && e.cacheMap;
                if (void 0 === r) return new Map();
                if (null !== r) {
                  var i = ["get", "set", "delete", "clear"].filter(
                    function (e) {
                      return r && "function" != typeof r[e];
                    },
                  );
                  if (0 !== i.length)
                    throw new TypeError(
                      "Custom cacheMap missing methods: " + i.join(", "),
                    );
                }
                return r;
              })(t)),
              (this._batch = null),
              (this.name = (function (e) {
                if (e && e.name) return e.name;
                return null;
              })(t));
          }
          var t = e.prototype;
          return (
            (t.load = function (e) {
              if (null == e)
                throw new TypeError(
                  "The loader.load() function must be called with a value, but got: " +
                    String(e) +
                    ".",
                );
              var t = (function (e) {
                  var t = e._batch;
                  if (
                    null !== t &&
                    !t.hasDispatched &&
                    t.keys.length < e._maxBatchSize
                  )
                    return t;
                  var r = { hasDispatched: !1, keys: [], callbacks: [] };
                  return (
                    (e._batch = r),
                    e._batchScheduleFn(function () {
                      !(function (e, t) {
                        if (((t.hasDispatched = !0), 0 === t.keys.length))
                          return void a(t);
                        var r;
                        try {
                          r = e._batchLoadFn(t.keys);
                        } catch (r) {
                          return n(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " +
                                String(r) +
                                ".",
                            ),
                          );
                        }
                        if (!r || "function" != typeof r.then)
                          return n(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                String(r) +
                                ".",
                            ),
                          );
                        r.then(function (e) {
                          if (!s(e))
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " +
                                String(e) +
                                ".",
                            );
                          if (e.length !== t.keys.length)
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" +
                                String(t.keys) +
                                "\n\nValues:\n" +
                                String(e),
                            );
                          a(t);
                          for (var r = 0; r < t.callbacks.length; r++) {
                            var i = e[r];
                            i instanceof Error
                              ? t.callbacks[r].reject(i)
                              : t.callbacks[r].resolve(i);
                          }
                        }).catch(function (r) {
                          n(e, t, r);
                        });
                      })(e, r);
                    }),
                    r
                  );
                })(this),
                r = this._cacheMap,
                i = this._cacheKeyFn(e);
              if (r) {
                var o = r.get(i);
                if (o) {
                  var l = t.cacheHits || (t.cacheHits = []);
                  return new Promise(function (e) {
                    l.push(function () {
                      e(o);
                    });
                  });
                }
              }
              t.keys.push(e);
              var c = new Promise(function (e, r) {
                t.callbacks.push({ resolve: e, reject: r });
              });
              return r && r.set(i, c), c;
            }),
            (t.loadMany = function (e) {
              if (!s(e))
                throw new TypeError(
                  "The loader.loadMany() function must be called with Array<key> but got: " +
                    e +
                    ".",
                );
              for (var t = [], r = 0; r < e.length; r++)
                t.push(
                  this.load(e[r]).catch(function (e) {
                    return e;
                  }),
                );
              return Promise.all(t);
            }),
            (t.clear = function (e) {
              var t = this._cacheMap;
              if (t) {
                var r = this._cacheKeyFn(e);
                t.delete(r);
              }
              return this;
            }),
            (t.clearAll = function () {
              var e = this._cacheMap;
              return e && e.clear(), this;
            }),
            (t.prime = function (e, t) {
              var r = this._cacheMap;
              if (r) {
                var i,
                  n = this._cacheKeyFn(e);
                if (void 0 === r.get(n))
                  t instanceof Error
                    ? (i = Promise.reject(t)).catch(function () {})
                    : (i = Promise.resolve(t)),
                    r.set(n, i);
              }
              return this;
            }),
            e
          );
        })(),
        i =
          "object" == typeof process && "function" == typeof process.nextTick
            ? function (e) {
                t || (t = Promise.resolve()),
                  t.then(function () {
                    process.nextTick(e);
                  });
              }
            : "function" == typeof setImmediate
            ? function (e) {
                setImmediate(e);
              }
            : function (e) {
                setTimeout(e);
              };
      function n(e, t, r) {
        a(t);
        for (var i = 0; i < t.keys.length; i++)
          e.clear(t.keys[i]), t.callbacks[i].reject(r);
      }
      function a(e) {
        if (e.cacheHits)
          for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
      }
      function s(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "number" == typeof e.length &&
          (0 === e.length ||
            (e.length > 0 &&
              Object.prototype.hasOwnProperty.call(e, e.length - 1)))
        );
      }
      e.exports = r;
    },
    77166: (e) => {
      e.exports = function (e, t, r, i, n, a, s, o) {
        if (!e) {
          var l;
          if (void 0 === t)
            l = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
          else {
            var c = [r, i, n, a, s, o],
              u = 0;
            (l = new Error(
              t.replace(/%s/g, function () {
                return c[u++];
              }),
            )).name = "Invariant Violation";
          }
          throw ((l.framesToPop = 1), l);
        }
      };
    },
    43489: (e, t, r) => {
      r.d(t, { f: () => Ss, kO: () => Pn, Zt: () => Os });
      var i = r(17692),
        n = r(71972),
        a = r(74289),
        s = r(2652),
        o = r.n(s),
        l = r(89526),
        c = r(77166),
        u = r.n(c),
        m = function () {};
      function d(e, t) {
        return void 0 !== e[t];
      }
      function f(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      function y() {
        var e = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state,
        );
        null != e && this.setState(e);
      }
      function p(e) {
        this.setState(
          function (t) {
            var r = this.constructor.getDerivedStateFromProps(e, t);
            return null != r ? r : null;
          }.bind(this),
        );
      }
      function B(e, t) {
        try {
          var r = this.props,
            i = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(r, i));
        } finally {
          (this.props = r), (this.state = i);
        }
      }
      (y.__suppressDeprecationWarning = !0),
        (p.__suppressDeprecationWarning = !0),
        (B.__suppressDeprecationWarning = !0);
      function b(e) {
        var t,
          r,
          i = "";
        if ("string" == typeof e || "number" == typeof e) i += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (r = b(e[t])) && (i && (i += " "), (i += r));
          else for (t in e) e[t] && (i && (i += " "), (i += t));
        return i;
      }
      const g = function () {
        for (var e, t, r = 0, i = ""; r < arguments.length; )
          (e = arguments[r++]) && (t = b(e)) && (i && (i += " "), (i += t));
        return i;
      };
      var h = "milliseconds",
        v = "seconds",
        w = "minutes",
        _ = "hours",
        z = "day",
        M = "week",
        S = "month",
        F = "year",
        R = "decade",
        E = "century",
        O = {
          milliseconds: 1,
          seconds: 1e3,
          minutes: 6e4,
          hours: 36e5,
          day: 864e5,
          week: 6048e5,
        },
        W = { month: 1, year: 12, decade: 120, century: 1200 };
      function T(e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0 ? 29 : 28;
      }
      function j(e, t, r) {
        switch (((e = new Date(e)), r)) {
          case h:
          case v:
          case w:
          case _:
          case z:
          case M:
            return (function (e, t) {
              var r = new Date(+e + t);
              return (function (e, t) {
                var r = e.getTimezoneOffset(),
                  i = t.getTimezoneOffset();
                return new Date(+t + (i - r) * O.minutes);
              })(e, r);
            })(e, t * O[r]);
          case S:
          case F:
          case R:
          case E:
            return (function (e, t) {
              var r = e.getFullYear(),
                i = e.getMonth(),
                n = e.getDate(),
                a = 12 * r + i + t,
                s = Math.trunc(a / 12),
                o = a % 12,
                l = Math.min(
                  n,
                  (function (e) {
                    return [31, T(e), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                  })(s)[o],
                ),
                c = new Date(e);
              return (
                c.setFullYear(s), c.setDate(1), c.setMonth(o), c.setDate(l), c
              );
            })(e, t * W[r]);
        }
        throw new TypeError('Invalid units: "' + r + '"');
      }
      function P(e, t, r) {
        return j(e, -t, r);
      }
      function I(e, t, r) {
        switch (((e = new Date(e)), t)) {
          case E:
          case R:
          case F:
            e = $(e, 0);
          case S:
            e = Y(e, 1);
          case M:
          case z:
            e = K(e, 0);
          case _:
            e = H(e, 0);
          case w:
            e = Z(e, 0);
          case v:
            e = q(e, 0);
        }
        return (
          t === R && (e = P(e, J(e) % 10, "year")),
          t === E && (e = P(e, J(e) % 100, "year")),
          t === M &&
            (e = (function (e, t, r) {
              var i = (V(e) + 7 - (r || 0)) % 7;
              return void 0 === t ? i : j(e, t - i, z);
            })(e, 0, r)),
          e
        );
      }
      function C(e, t, r) {
        switch (((e = I((e = new Date(e)), t, r)), t)) {
          case E:
          case R:
          case F:
          case S:
          case M:
            (e = P((e = j(e, 1, t)), 1, z)).setHours(23, 59, 59, 999);
            break;
          case z:
            e.setHours(23, 59, 59, 999);
            break;
          case _:
          case w:
          case v:
            e = P((e = j(e, 1, t)), 1, h);
        }
        return e;
      }
      var x = ee(function (e, t) {
          return e === t;
        }),
        D = ee(function (e, t) {
          return e !== t;
        }),
        A = ee(function (e, t) {
          return e > t;
        }),
        k = ee(function (e, t) {
          return e >= t;
        }),
        U = ee(function (e, t) {
          return e < t;
        }),
        N = ee(function (e, t) {
          return e <= t;
        });
      function X() {
        return new Date(Math.min.apply(Math, arguments));
      }
      function G() {
        return new Date(Math.max.apply(Math, arguments));
      }
      function L(e, t, r, i) {
        return (i = i || "day"), (!t || k(e, t, i)) && (!r || N(e, r, i));
      }
      var q = Q("Milliseconds"),
        Z = Q("Seconds"),
        H = Q("Minutes"),
        K = Q("Hours"),
        V = Q("Day"),
        Y = Q("Date"),
        $ = Q("Month"),
        J = Q("FullYear");
      function Q(e) {
        var t = (function (e) {
          switch (e) {
            case "Milliseconds":
              return 36e5;
            case "Seconds":
              return 3600;
            case "Minutes":
              return 60;
            case "Hours":
              return 1;
            default:
              return null;
          }
        })(e);
        return function (r, i) {
          if (void 0 === i) return r["get" + e]();
          var n = new Date(r);
          return (
            n["set" + e](i),
            t &&
              n["get" + e]() != i &&
              ("Hours" === e ||
                (i >= t && n.getHours() - r.getHours() < Math.floor(i / t))) &&
              n["set" + e](i + t),
            n
          );
        };
      }
      function ee(e) {
        return function (t, r, i) {
          return e(+I(t, i), +I(r, i));
        };
      }
      var te = r(14771),
        re = r(73961);
      const ie = function (e, t, r) {
        var i = -1,
          n = e.length;
        t < 0 && (t = -t > n ? 0 : n + t),
          (r = r > n ? n : r) < 0 && (r += n),
          (n = t > r ? 0 : (r - t) >>> 0),
          (t >>>= 0);
        for (var a = Array(n); ++i < n; ) a[i] = e[i + t];
        return a;
      };
      var ne = r(15974),
        ae = r(90312),
        se = 1 / 0;
      const oe = function (e) {
        return e
          ? (e = (0, ae.Z)(e)) === se || e === -1 / 0
            ? 17976931348623157e292 * (e < 0 ? -1 : 1)
            : e == e
            ? e
            : 0
          : 0 === e
          ? e
          : 0;
      };
      const le = function (e) {
        var t = oe(e),
          r = t % 1;
        return t == t ? (r ? t - r : t) : 0;
      };
      var ce = Math.ceil,
        ue = Math.max;
      const me = function (e, t, r) {
        t = (r ? (0, ne.Z)(e, t, r) : void 0 === t) ? 1 : ue(le(t), 0);
        var i = null == e ? 0 : e.length;
        if (!i || t < 1) return [];
        for (var n = 0, a = 0, s = Array(ce(i / t)); n < i; )
          s[a++] = ie(e, n, (n += t));
        return s;
      };
      function de(e) {
        return (e && e.ownerDocument) || document;
      }
      function fe(e, t) {
        return (function (e) {
          var t = de(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var ye = /([A-Z])/g;
      var pe = /^ms-/;
      function Be(e) {
        return (function (e) {
          return e.replace(ye, "-$1").toLowerCase();
        })(e).replace(pe, "-ms-");
      }
      var be =
        /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      const ge = function (e, t) {
        var r = "",
          i = "";
        if ("string" == typeof t)
          return (
            e.style.getPropertyValue(Be(t)) || fe(e).getPropertyValue(Be(t))
          );
        Object.keys(t).forEach(function (n) {
          var a = t[n];
          a || 0 === a
            ? !(function (e) {
                return !(!e || !be.test(e));
              })(n)
              ? (r += Be(n) + ": " + a + ";")
              : (i += n + "(" + a + ") ")
            : e.style.removeProperty(Be(n));
        }),
          i && (r += "transform: " + i + ";"),
          (e.style.cssText += ";" + r);
      };
      function he(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
          ? e === t || !!(16 & e.compareDocumentPosition(t))
          : void 0;
      }
      function ve(e) {
        return "window" in e && e.window === e
          ? e
          : ("nodeType" in (t = e) &&
              t.nodeType === document.DOCUMENT_NODE &&
              e.defaultView) ||
              !1;
        var t;
      }
      function we(e) {
        var t = "pageXOffset" === e ? "scrollLeft" : "scrollTop";
        return function (r, i) {
          var n = ve(r);
          if (void 0 === i) return n ? n[e] : r[t];
          n ? n.scrollTo(n[e], i) : (r[t] = i);
        };
      }
      const _e = we("pageXOffset"),
        ze = we("pageYOffset");
      function Me(e) {
        var t = de(e),
          r = { top: 0, left: 0, height: 0, width: 0 },
          i = t && t.documentElement;
        return i && he(i, e)
          ? (void 0 !== e.getBoundingClientRect &&
              (r = e.getBoundingClientRect()),
            (r = {
              top: r.top + ze(i) - (i.clientTop || 0),
              left: r.left + _e(i) - (i.clientLeft || 0),
              width: r.width,
              height: r.height,
            }))
          : r;
      }
      var Se = function (e) {
        return !!e && "offsetParent" in e;
      };
      function Fe(e, t) {
        var r,
          n = { top: 0, left: 0 };
        if ("fixed" === ge(e, "position")) r = e.getBoundingClientRect();
        else {
          var a =
            t ||
            (function (e) {
              for (
                var t = de(e), r = e && e.offsetParent;
                Se(r) &&
                "HTML" !== r.nodeName &&
                "static" === ge(r, "position");

              )
                r = r.offsetParent;
              return r || t.documentElement;
            })(e);
          (r = Me(e)),
            "html" !==
              (function (e) {
                return e.nodeName && e.nodeName.toLowerCase();
              })(a) && (n = Me(a));
          var s = String(ge(a, "borderTopWidth") || 0);
          n.top += parseInt(s, 10) - ze(a) || 0;
          var o = String(ge(a, "borderLeftWidth") || 0);
          n.left += parseInt(o, 10) - _e(a) || 0;
        }
        var l = String(ge(e, "marginTop") || 0),
          c = String(ge(e, "marginLeft") || 0);
        return (0, i.Z)({}, r, {
          top: r.top - n.top - (parseInt(l, 10) || 0),
          left: r.left - n.left - (parseInt(c, 10) || 0),
        });
      }
      const Re = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var Ee = new Date().getTime();
      var Oe = "clearTimeout",
        We = function (e) {
          var t = new Date().getTime(),
            r = Math.max(0, 16 - (t - Ee)),
            i = setTimeout(e, r);
          return (Ee = t), i;
        },
        Te = function (e, t) {
          return (
            e + (e ? t[0].toUpperCase() + t.substr(1) : t) + "AnimationFrame"
          );
        };
      Re &&
        ["", "webkit", "moz", "o", "ms"].some(function (e) {
          var t = Te(e, "request");
          return (
            t in window &&
              ((Oe = Te(e, "cancel")),
              (We = function (e) {
                return window[t](e);
              })),
            !!We
          );
        });
      var je = function (e) {
          "function" == typeof window[Oe] && window[Oe](e);
        },
        Pe = We,
        Ie = r(71084);
      const Ce = function (e, t) {
        return (0, Ie.Z)(e, t);
      };
      function xe() {
        return (0, l.useState)(null);
      }
      var De = function (e) {
        return e && "function" != typeof e
          ? function (t) {
              e.current = t;
            }
          : e;
      };
      const Ae = function (e, t) {
        return (0, l.useMemo)(
          function () {
            return (function (e, t) {
              var r = De(e),
                i = De(t);
              return function (e) {
                r && r(e), i && i(e);
              };
            })(e, t);
          },
          [e, t],
        );
      };
      var ke = "top",
        Ue = "bottom",
        Ne = "right",
        Xe = "left",
        Ge = "auto",
        Le = [ke, Ue, Ne, Xe],
        qe = "start",
        Ze = "end",
        He = "clippingParents",
        Ke = "viewport",
        Ve = "popper",
        Ye = "reference",
        $e = Le.reduce(function (e, t) {
          return e.concat([t + "-" + qe, t + "-" + Ze]);
        }, []),
        Je = [].concat(Le, [Ge]).reduce(function (e, t) {
          return e.concat([t, t + "-" + qe, t + "-" + Ze]);
        }, []),
        Qe = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      const et = function (e) {
        var t = (function () {
          var e = (0, l.useRef)(!0),
            t = (0, l.useRef)(function () {
              return e.current;
            });
          return (
            (0, l.useEffect)(function () {
              return function () {
                e.current = !1;
              };
            }, []),
            t.current
          );
        })();
        return [
          e[0],
          (0, l.useCallback)(
            function (r) {
              if (t()) return e[1](r);
            },
            [t, e[1]],
          ),
        ];
      };
      function tt(e) {
        return e.split("-")[0];
      }
      function rt(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function it(e) {
        return e instanceof rt(e).Element || e instanceof Element;
      }
      function nt(e) {
        return e instanceof rt(e).HTMLElement || e instanceof HTMLElement;
      }
      function at(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof rt(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var st = Math.max,
        ot = Math.min,
        lt = Math.round;
      function ct() {
        var e = navigator.userAgentData;
        return null != e && e.brands
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function ut() {
        return !/^((?!chrome|android).)*safari/i.test(ct());
      }
      function mt(e, t, r) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        var i = e.getBoundingClientRect(),
          n = 1,
          a = 1;
        t &&
          nt(e) &&
          ((n = (e.offsetWidth > 0 && lt(i.width) / e.offsetWidth) || 1),
          (a = (e.offsetHeight > 0 && lt(i.height) / e.offsetHeight) || 1));
        var s = (it(e) ? rt(e) : window).visualViewport,
          o = !ut() && r,
          l = (i.left + (o && s ? s.offsetLeft : 0)) / n,
          c = (i.top + (o && s ? s.offsetTop : 0)) / a,
          u = i.width / n,
          m = i.height / a;
        return {
          width: u,
          height: m,
          top: c,
          right: l + u,
          bottom: c + m,
          left: l,
          x: l,
          y: c,
        };
      }
      function dt(e) {
        var t = mt(e),
          r = e.offsetWidth,
          i = e.offsetHeight;
        return (
          Math.abs(t.width - r) <= 1 && (r = t.width),
          Math.abs(t.height - i) <= 1 && (i = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: r, height: i }
        );
      }
      function ft(e, t) {
        var r = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (r && at(r)) {
          var i = t;
          do {
            if (i && e.isSameNode(i)) return !0;
            i = i.parentNode || i.host;
          } while (i);
        }
        return !1;
      }
      function yt(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function pt(e) {
        return rt(e).getComputedStyle(e);
      }
      function Bt(e) {
        return ["table", "td", "th"].indexOf(yt(e)) >= 0;
      }
      function bt(e) {
        return ((it(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function gt(e) {
        return "html" === yt(e)
          ? e
          : e.assignedSlot || e.parentNode || (at(e) ? e.host : null) || bt(e);
      }
      function ht(e) {
        return nt(e) && "fixed" !== pt(e).position ? e.offsetParent : null;
      }
      function vt(e) {
        for (
          var t = rt(e), r = ht(e);
          r && Bt(r) && "static" === pt(r).position;

        )
          r = ht(r);
        return r &&
          ("html" === yt(r) ||
            ("body" === yt(r) && "static" === pt(r).position))
          ? t
          : r ||
              (function (e) {
                var t = /firefox/i.test(ct());
                if (
                  /Trident/i.test(ct()) &&
                  nt(e) &&
                  "fixed" === pt(e).position
                )
                  return null;
                var r = gt(e);
                for (
                  at(r) && (r = r.host);
                  nt(r) && ["html", "body"].indexOf(yt(r)) < 0;

                ) {
                  var i = pt(r);
                  if (
                    "none" !== i.transform ||
                    "none" !== i.perspective ||
                    "paint" === i.contain ||
                    -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                    (t && "filter" === i.willChange) ||
                    (t && i.filter && "none" !== i.filter)
                  )
                    return r;
                  r = r.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function wt(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function _t(e, t, r) {
        return st(e, ot(t, r));
      }
      function zt(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function Mt(e, t) {
        return t.reduce(function (t, r) {
          return (t[r] = e), t;
        }, {});
      }
      const St = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            r = e.state,
            i = e.name,
            n = e.options,
            a = r.elements.arrow,
            s = r.modifiersData.popperOffsets,
            o = tt(r.placement),
            l = wt(o),
            c = [Xe, Ne].indexOf(o) >= 0 ? "height" : "width";
          if (a && s) {
            var u = (function (e, t) {
                return zt(
                  "number" !=
                    typeof (e =
                      "function" == typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            }),
                          )
                        : e)
                    ? e
                    : Mt(e, Le),
                );
              })(n.padding, r),
              m = dt(a),
              d = "y" === l ? ke : Xe,
              f = "y" === l ? Ue : Ne,
              y =
                r.rects.reference[c] +
                r.rects.reference[l] -
                s[l] -
                r.rects.popper[c],
              p = s[l] - r.rects.reference[l],
              B = vt(a),
              b = B
                ? "y" === l
                  ? B.clientHeight || 0
                  : B.clientWidth || 0
                : 0,
              g = y / 2 - p / 2,
              h = u[d],
              v = b - m[c] - u[f],
              w = b / 2 - m[c] / 2 + g,
              _ = _t(h, w, v),
              z = l;
            r.modifiersData[i] =
              (((t = {})[z] = _), (t.centerOffset = _ - w), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            r = e.options.element,
            i = void 0 === r ? "[data-popper-arrow]" : r;
          null != i &&
            ("string" != typeof i ||
              (i = t.elements.popper.querySelector(i))) &&
            ft(t.elements.popper, i) &&
            (t.elements.arrow = i);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function Ft(e) {
        return e.split("-")[1];
      }
      var Rt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Et(e) {
        var t,
          r = e.popper,
          i = e.popperRect,
          n = e.placement,
          a = e.variation,
          s = e.offsets,
          o = e.position,
          l = e.gpuAcceleration,
          c = e.adaptive,
          u = e.roundOffsets,
          m = e.isFixed,
          d = s.x,
          f = void 0 === d ? 0 : d,
          y = s.y,
          p = void 0 === y ? 0 : y,
          B = "function" == typeof u ? u({ x: f, y: p }) : { x: f, y: p };
        (f = B.x), (p = B.y);
        var b = s.hasOwnProperty("x"),
          g = s.hasOwnProperty("y"),
          h = Xe,
          v = ke,
          w = window;
        if (c) {
          var _ = vt(r),
            z = "clientHeight",
            M = "clientWidth";
          if (
            (_ === rt(r) &&
              "static" !== pt((_ = bt(r))).position &&
              "absolute" === o &&
              ((z = "scrollHeight"), (M = "scrollWidth")),
            n === ke || ((n === Xe || n === Ne) && a === Ze))
          )
            (v = Ue),
              (p -=
                (m && _ === w && w.visualViewport
                  ? w.visualViewport.height
                  : _[z]) - i.height),
              (p *= l ? 1 : -1);
          if (n === Xe || ((n === ke || n === Ue) && a === Ze))
            (h = Ne),
              (f -=
                (m && _ === w && w.visualViewport
                  ? w.visualViewport.width
                  : _[M]) - i.width),
              (f *= l ? 1 : -1);
        }
        var S,
          F = Object.assign({ position: o }, c && Rt),
          R =
            !0 === u
              ? (function (e) {
                  var t = e.x,
                    r = e.y,
                    i = window.devicePixelRatio || 1;
                  return { x: lt(t * i) / i || 0, y: lt(r * i) / i || 0 };
                })({ x: f, y: p })
              : { x: f, y: p };
        return (
          (f = R.x),
          (p = R.y),
          l
            ? Object.assign(
                {},
                F,
                (((S = {})[v] = g ? "0" : ""),
                (S[h] = b ? "0" : ""),
                (S.transform =
                  (w.devicePixelRatio || 1) <= 1
                    ? "translate(" + f + "px, " + p + "px)"
                    : "translate3d(" + f + "px, " + p + "px, 0)"),
                S),
              )
            : Object.assign(
                {},
                F,
                (((t = {})[v] = g ? p + "px" : ""),
                (t[h] = b ? f + "px" : ""),
                (t.transform = ""),
                t),
              )
        );
      }
      const Ot = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (e) {
          var t = e.state,
            r = e.options,
            i = r.gpuAcceleration,
            n = void 0 === i || i,
            a = r.adaptive,
            s = void 0 === a || a,
            o = r.roundOffsets,
            l = void 0 === o || o,
            c = {
              placement: tt(t.placement),
              variation: Ft(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: n,
              isFixed: "fixed" === t.options.strategy,
            };
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              Et(
                Object.assign({}, c, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: s,
                  roundOffsets: l,
                }),
              ),
            )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                Et(
                  Object.assign({}, c, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l,
                  }),
                ),
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement,
            }));
        },
        data: {},
      };
      var Wt = { passive: !0 };
      const Tt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            r = e.instance,
            i = e.options,
            n = i.scroll,
            a = void 0 === n || n,
            s = i.resize,
            o = void 0 === s || s,
            l = rt(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            a &&
              c.forEach(function (e) {
                e.addEventListener("scroll", r.update, Wt);
              }),
            o && l.addEventListener("resize", r.update, Wt),
            function () {
              a &&
                c.forEach(function (e) {
                  e.removeEventListener("scroll", r.update, Wt);
                }),
                o && l.removeEventListener("resize", r.update, Wt);
            }
          );
        },
        data: {},
      };
      var jt = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function Pt(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return jt[e];
        });
      }
      var It = { start: "end", end: "start" };
      function Ct(e) {
        return e.replace(/start|end/g, function (e) {
          return It[e];
        });
      }
      function xt(e) {
        var t = rt(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function Dt(e) {
        return mt(bt(e)).left + xt(e).scrollLeft;
      }
      function At(e) {
        var t = pt(e),
          r = t.overflow,
          i = t.overflowX,
          n = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(r + n + i);
      }
      function kt(e) {
        return ["html", "body", "#document"].indexOf(yt(e)) >= 0
          ? e.ownerDocument.body
          : nt(e) && At(e)
          ? e
          : kt(gt(e));
      }
      function Ut(e, t) {
        var r;
        void 0 === t && (t = []);
        var i = kt(e),
          n = i === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = rt(i),
          s = n ? [a].concat(a.visualViewport || [], At(i) ? i : []) : i,
          o = t.concat(s);
        return n ? o : o.concat(Ut(gt(s)));
      }
      function Nt(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function Xt(e, t, r) {
        return t === Ke
          ? Nt(
              (function (e, t) {
                var r = rt(e),
                  i = bt(e),
                  n = r.visualViewport,
                  a = i.clientWidth,
                  s = i.clientHeight,
                  o = 0,
                  l = 0;
                if (n) {
                  (a = n.width), (s = n.height);
                  var c = ut();
                  (c || (!c && "fixed" === t)) &&
                    ((o = n.offsetLeft), (l = n.offsetTop));
                }
                return { width: a, height: s, x: o + Dt(e), y: l };
              })(e, r),
            )
          : it(t)
          ? (function (e, t) {
              var r = mt(e, !1, "fixed" === t);
              return (
                (r.top = r.top + e.clientTop),
                (r.left = r.left + e.clientLeft),
                (r.bottom = r.top + e.clientHeight),
                (r.right = r.left + e.clientWidth),
                (r.width = e.clientWidth),
                (r.height = e.clientHeight),
                (r.x = r.left),
                (r.y = r.top),
                r
              );
            })(t, r)
          : Nt(
              (function (e) {
                var t,
                  r = bt(e),
                  i = xt(e),
                  n = null == (t = e.ownerDocument) ? void 0 : t.body,
                  a = st(
                    r.scrollWidth,
                    r.clientWidth,
                    n ? n.scrollWidth : 0,
                    n ? n.clientWidth : 0,
                  ),
                  s = st(
                    r.scrollHeight,
                    r.clientHeight,
                    n ? n.scrollHeight : 0,
                    n ? n.clientHeight : 0,
                  ),
                  o = -i.scrollLeft + Dt(e),
                  l = -i.scrollTop;
                return (
                  "rtl" === pt(n || r).direction &&
                    (o += st(r.clientWidth, n ? n.clientWidth : 0) - a),
                  { width: a, height: s, x: o, y: l }
                );
              })(bt(e)),
            );
      }
      function Gt(e, t, r, i) {
        var n =
            "clippingParents" === t
              ? (function (e) {
                  var t = Ut(gt(e)),
                    r =
                      ["absolute", "fixed"].indexOf(pt(e).position) >= 0 &&
                      nt(e)
                        ? vt(e)
                        : e;
                  return it(r)
                    ? t.filter(function (e) {
                        return it(e) && ft(e, r) && "body" !== yt(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          a = [].concat(n, [r]),
          s = a[0],
          o = a.reduce(
            function (t, r) {
              var n = Xt(e, r, i);
              return (
                (t.top = st(n.top, t.top)),
                (t.right = ot(n.right, t.right)),
                (t.bottom = ot(n.bottom, t.bottom)),
                (t.left = st(n.left, t.left)),
                t
              );
            },
            Xt(e, s, i),
          );
        return (
          (o.width = o.right - o.left),
          (o.height = o.bottom - o.top),
          (o.x = o.left),
          (o.y = o.top),
          o
        );
      }
      function Lt(e) {
        var t,
          r = e.reference,
          i = e.element,
          n = e.placement,
          a = n ? tt(n) : null,
          s = n ? Ft(n) : null,
          o = r.x + r.width / 2 - i.width / 2,
          l = r.y + r.height / 2 - i.height / 2;
        switch (a) {
          case ke:
            t = { x: o, y: r.y - i.height };
            break;
          case Ue:
            t = { x: o, y: r.y + r.height };
            break;
          case Ne:
            t = { x: r.x + r.width, y: l };
            break;
          case Xe:
            t = { x: r.x - i.width, y: l };
            break;
          default:
            t = { x: r.x, y: r.y };
        }
        var c = a ? wt(a) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (s) {
            case qe:
              t[c] = t[c] - (r[u] / 2 - i[u] / 2);
              break;
            case Ze:
              t[c] = t[c] + (r[u] / 2 - i[u] / 2);
          }
        }
        return t;
      }
      function qt(e, t) {
        void 0 === t && (t = {});
        var r = t,
          i = r.placement,
          n = void 0 === i ? e.placement : i,
          a = r.strategy,
          s = void 0 === a ? e.strategy : a,
          o = r.boundary,
          l = void 0 === o ? He : o,
          c = r.rootBoundary,
          u = void 0 === c ? Ke : c,
          m = r.elementContext,
          d = void 0 === m ? Ve : m,
          f = r.altBoundary,
          y = void 0 !== f && f,
          p = r.padding,
          B = void 0 === p ? 0 : p,
          b = zt("number" != typeof B ? B : Mt(B, Le)),
          g = d === Ve ? Ye : Ve,
          h = e.rects.popper,
          v = e.elements[y ? g : d],
          w = Gt(
            it(v) ? v : v.contextElement || bt(e.elements.popper),
            l,
            u,
            s,
          ),
          _ = mt(e.elements.reference),
          z = Lt({
            reference: _,
            element: h,
            strategy: "absolute",
            placement: n,
          }),
          M = Nt(Object.assign({}, h, z)),
          S = d === Ve ? M : _,
          F = {
            top: w.top - S.top + b.top,
            bottom: S.bottom - w.bottom + b.bottom,
            left: w.left - S.left + b.left,
            right: S.right - w.right + b.right,
          },
          R = e.modifiersData.offset;
        if (d === Ve && R) {
          var E = R[n];
          Object.keys(F).forEach(function (e) {
            var t = [Ne, Ue].indexOf(e) >= 0 ? 1 : -1,
              r = [ke, Ue].indexOf(e) >= 0 ? "y" : "x";
            F[e] += E[r] * t;
          });
        }
        return F;
      }
      const Zt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            r = e.options,
            i = e.name;
          if (!t.modifiersData[i]._skip) {
            for (
              var n = r.mainAxis,
                a = void 0 === n || n,
                s = r.altAxis,
                o = void 0 === s || s,
                l = r.fallbackPlacements,
                c = r.padding,
                u = r.boundary,
                m = r.rootBoundary,
                d = r.altBoundary,
                f = r.flipVariations,
                y = void 0 === f || f,
                p = r.allowedAutoPlacements,
                B = t.options.placement,
                b = tt(B),
                g =
                  l ||
                  (b === B || !y
                    ? [Pt(B)]
                    : (function (e) {
                        if (tt(e) === Ge) return [];
                        var t = Pt(e);
                        return [Ct(e), t, Ct(t)];
                      })(B)),
                h = [B].concat(g).reduce(function (e, r) {
                  return e.concat(
                    tt(r) === Ge
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var r = t,
                            i = r.placement,
                            n = r.boundary,
                            a = r.rootBoundary,
                            s = r.padding,
                            o = r.flipVariations,
                            l = r.allowedAutoPlacements,
                            c = void 0 === l ? Je : l,
                            u = Ft(i),
                            m = u
                              ? o
                                ? $e
                                : $e.filter(function (e) {
                                    return Ft(e) === u;
                                  })
                              : Le,
                            d = m.filter(function (e) {
                              return c.indexOf(e) >= 0;
                            });
                          0 === d.length && (d = m);
                          var f = d.reduce(function (t, r) {
                            return (
                              (t[r] = qt(e, {
                                placement: r,
                                boundary: n,
                                rootBoundary: a,
                                padding: s,
                              })[tt(r)]),
                              t
                            );
                          }, {});
                          return Object.keys(f).sort(function (e, t) {
                            return f[e] - f[t];
                          });
                        })(t, {
                          placement: r,
                          boundary: u,
                          rootBoundary: m,
                          padding: c,
                          flipVariations: y,
                          allowedAutoPlacements: p,
                        })
                      : r,
                  );
                }, []),
                v = t.rects.reference,
                w = t.rects.popper,
                _ = new Map(),
                z = !0,
                M = h[0],
                S = 0;
              S < h.length;
              S++
            ) {
              var F = h[S],
                R = tt(F),
                E = Ft(F) === qe,
                O = [ke, Ue].indexOf(R) >= 0,
                W = O ? "width" : "height",
                T = qt(t, {
                  placement: F,
                  boundary: u,
                  rootBoundary: m,
                  altBoundary: d,
                  padding: c,
                }),
                j = O ? (E ? Ne : Xe) : E ? Ue : ke;
              v[W] > w[W] && (j = Pt(j));
              var P = Pt(j),
                I = [];
              if (
                (a && I.push(T[R] <= 0),
                o && I.push(T[j] <= 0, T[P] <= 0),
                I.every(function (e) {
                  return e;
                }))
              ) {
                (M = F), (z = !1);
                break;
              }
              _.set(F, I);
            }
            if (z)
              for (
                var C = function (e) {
                    var t = h.find(function (t) {
                      var r = _.get(t);
                      if (r)
                        return r.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (M = t), "break";
                  },
                  x = y ? 3 : 1;
                x > 0;
                x--
              ) {
                if ("break" === C(x)) break;
              }
            t.placement !== M &&
              ((t.modifiersData[i]._skip = !0),
              (t.placement = M),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function Ht(e, t, r) {
        return (
          void 0 === r && (r = { x: 0, y: 0 }),
          {
            top: e.top - t.height - r.y,
            right: e.right - t.width + r.x,
            bottom: e.bottom - t.height + r.y,
            left: e.left - t.width - r.x,
          }
        );
      }
      function Kt(e) {
        return [ke, Ne, Ue, Xe].some(function (t) {
          return e[t] >= 0;
        });
      }
      const Vt = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            r = e.options,
            i = e.name,
            n = r.offset,
            a = void 0 === n ? [0, 0] : n,
            s = Je.reduce(function (e, r) {
              return (
                (e[r] = (function (e, t, r) {
                  var i = tt(e),
                    n = [Xe, ke].indexOf(i) >= 0 ? -1 : 1,
                    a =
                      "function" == typeof r
                        ? r(Object.assign({}, t, { placement: e }))
                        : r,
                    s = a[0],
                    o = a[1];
                  return (
                    (s = s || 0),
                    (o = (o || 0) * n),
                    [Xe, Ne].indexOf(i) >= 0 ? { x: o, y: s } : { x: s, y: o }
                  );
                })(r, t.rects, a)),
                e
              );
            }, {}),
            o = s[t.placement],
            l = o.x,
            c = o.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += l),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[i] = s);
        },
      };
      const Yt = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            r = e.options,
            i = e.name,
            n = r.mainAxis,
            a = void 0 === n || n,
            s = r.altAxis,
            o = void 0 !== s && s,
            l = r.boundary,
            c = r.rootBoundary,
            u = r.altBoundary,
            m = r.padding,
            d = r.tether,
            f = void 0 === d || d,
            y = r.tetherOffset,
            p = void 0 === y ? 0 : y,
            B = qt(t, {
              boundary: l,
              rootBoundary: c,
              padding: m,
              altBoundary: u,
            }),
            b = tt(t.placement),
            g = Ft(t.placement),
            h = !g,
            v = wt(b),
            w = "x" === v ? "y" : "x",
            _ = t.modifiersData.popperOffsets,
            z = t.rects.reference,
            M = t.rects.popper,
            S =
              "function" == typeof p
                ? p(Object.assign({}, t.rects, { placement: t.placement }))
                : p,
            F =
              "number" == typeof S
                ? { mainAxis: S, altAxis: S }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, S),
            R = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            E = { x: 0, y: 0 };
          if (_) {
            if (a) {
              var O,
                W = "y" === v ? ke : Xe,
                T = "y" === v ? Ue : Ne,
                j = "y" === v ? "height" : "width",
                P = _[v],
                I = P + B[W],
                C = P - B[T],
                x = f ? -M[j] / 2 : 0,
                D = g === qe ? z[j] : M[j],
                A = g === qe ? -M[j] : -z[j],
                k = t.elements.arrow,
                U = f && k ? dt(k) : { width: 0, height: 0 },
                N = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                X = N[W],
                G = N[T],
                L = _t(0, z[j], U[j]),
                q = h
                  ? z[j] / 2 - x - L - X - F.mainAxis
                  : D - L - X - F.mainAxis,
                Z = h
                  ? -z[j] / 2 + x + L + G + F.mainAxis
                  : A + L + G + F.mainAxis,
                H = t.elements.arrow && vt(t.elements.arrow),
                K = H ? ("y" === v ? H.clientTop || 0 : H.clientLeft || 0) : 0,
                V = null != (O = null == R ? void 0 : R[v]) ? O : 0,
                Y = P + Z - V,
                $ = _t(f ? ot(I, P + q - V - K) : I, P, f ? st(C, Y) : C);
              (_[v] = $), (E[v] = $ - P);
            }
            if (o) {
              var J,
                Q = "x" === v ? ke : Xe,
                ee = "x" === v ? Ue : Ne,
                te = _[w],
                re = "y" === w ? "height" : "width",
                ie = te + B[Q],
                ne = te - B[ee],
                ae = -1 !== [ke, Xe].indexOf(b),
                se = null != (J = null == R ? void 0 : R[w]) ? J : 0,
                oe = ae ? ie : te - z[re] - M[re] - se + F.altAxis,
                le = ae ? te + z[re] + M[re] - se - F.altAxis : ne,
                ce =
                  f && ae
                    ? (function (e, t, r) {
                        var i = _t(e, t, r);
                        return i > r ? r : i;
                      })(oe, te, le)
                    : _t(f ? oe : ie, te, f ? le : ne);
              (_[w] = ce), (E[w] = ce - te);
            }
            t.modifiersData[i] = E;
          }
        },
        requiresIfExists: ["offset"],
      };
      function $t(e, t, r) {
        void 0 === r && (r = !1);
        var i,
          n,
          a = nt(t),
          s =
            nt(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                r = lt(t.width) / e.offsetWidth || 1,
                i = lt(t.height) / e.offsetHeight || 1;
              return 1 !== r || 1 !== i;
            })(t),
          o = bt(t),
          l = mt(e, s, r),
          c = { scrollLeft: 0, scrollTop: 0 },
          u = { x: 0, y: 0 };
        return (
          (a || (!a && !r)) &&
            (("body" !== yt(t) || At(o)) &&
              (c =
                (i = t) !== rt(i) && nt(i)
                  ? { scrollLeft: (n = i).scrollLeft, scrollTop: n.scrollTop }
                  : xt(i)),
            nt(t)
              ? (((u = mt(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
              : o && (u.x = Dt(o))),
          {
            x: l.left + c.scrollLeft - u.x,
            y: l.top + c.scrollTop - u.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function Jt(e) {
        var t = new Map(),
          r = new Set(),
          i = [];
        function n(e) {
          r.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!r.has(e)) {
                  var i = t.get(e);
                  i && n(i);
                }
              }),
            i.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            r.has(e.name) || n(e);
          }),
          i
        );
      }
      var Qt = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function er() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function tr(e) {
        void 0 === e && (e = {});
        var t = e,
          r = t.defaultModifiers,
          i = void 0 === r ? [] : r,
          n = t.defaultOptions,
          a = void 0 === n ? Qt : n;
        return function (e, t, r) {
          void 0 === r && (r = a);
          var n,
            s,
            o = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Qt, a),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            u = {
              state: o,
              setOptions: function (r) {
                var n = "function" == typeof r ? r(o.options) : r;
                m(),
                  (o.options = Object.assign({}, a, o.options, n)),
                  (o.scrollParents = {
                    reference: it(e)
                      ? Ut(e)
                      : e.contextElement
                      ? Ut(e.contextElement)
                      : [],
                    popper: Ut(t),
                  });
                var s = (function (e) {
                  var t = Jt(e);
                  return Qe.reduce(function (e, r) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === r;
                      }),
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var r = e[t.name];
                      return (
                        (e[t.name] = r
                          ? Object.assign({}, r, t, {
                              options: Object.assign({}, r.options, t.options),
                              data: Object.assign({}, r.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(i, o.options.modifiers)),
                );
                return (
                  (o.orderedModifiers = s.filter(function (e) {
                    return e.enabled;
                  })),
                  o.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      r = e.options,
                      i = void 0 === r ? {} : r,
                      n = e.effect;
                    if ("function" == typeof n) {
                      var a = n({ state: o, name: t, instance: u, options: i }),
                        s = function () {};
                      l.push(a || s);
                    }
                  }),
                  u.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = o.elements,
                    t = e.reference,
                    r = e.popper;
                  if (er(t, r)) {
                    (o.rects = {
                      reference: $t(t, vt(r), "fixed" === o.options.strategy),
                      popper: dt(r),
                    }),
                      (o.reset = !1),
                      (o.placement = o.options.placement),
                      o.orderedModifiers.forEach(function (e) {
                        return (o.modifiersData[e.name] = Object.assign(
                          {},
                          e.data,
                        ));
                      });
                    for (var i = 0; i < o.orderedModifiers.length; i++)
                      if (!0 !== o.reset) {
                        var n = o.orderedModifiers[i],
                          a = n.fn,
                          s = n.options,
                          l = void 0 === s ? {} : s,
                          m = n.name;
                        "function" == typeof a &&
                          (o =
                            a({ state: o, options: l, name: m, instance: u }) ||
                            o);
                      } else (o.reset = !1), (i = -1);
                  }
                }
              },
              update:
                ((n = function () {
                  return new Promise(function (e) {
                    u.forceUpdate(), e(o);
                  });
                }),
                function () {
                  return (
                    s ||
                      (s = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (s = void 0), e(n());
                        });
                      })),
                    s
                  );
                }),
              destroy: function () {
                m(), (c = !0);
              },
            };
          if (!er(e, t)) return u;
          function m() {
            l.forEach(function (e) {
              return e();
            }),
              (l = []);
          }
          return (
            u.setOptions(r).then(function (e) {
              !c && r.onFirstUpdate && r.onFirstUpdate(e);
            }),
            u
          );
        };
      }
      var rr = tr({
          defaultModifiers: [
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  r = e.name,
                  i = t.rects.reference,
                  n = t.rects.popper,
                  a = t.modifiersData.preventOverflow,
                  s = qt(t, { elementContext: "reference" }),
                  o = qt(t, { altBoundary: !0 }),
                  l = Ht(s, i),
                  c = Ht(o, n, a),
                  u = Kt(l),
                  m = Kt(c);
                (t.modifiersData[r] = {
                  referenceClippingOffsets: l,
                  popperEscapeOffsets: c,
                  isReferenceHidden: u,
                  hasPopperEscaped: m,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": u,
                      "data-popper-escaped": m,
                    },
                  ));
              },
            },
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  r = e.name;
                t.modifiersData[r] = Lt({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            Ot,
            Tt,
            Vt,
            Zt,
            Yt,
            St,
          ],
        }),
        ir = function (e) {
          return {
            position: e,
            top: "0",
            left: "0",
            opacity: "0",
            pointerEvents: "none",
          };
        },
        nr = { name: "applyStyles", enabled: !1 },
        ar = {
          name: "ariaDescribedBy",
          enabled: !0,
          phase: "afterWrite",
          effect: function (e) {
            var t = e.state;
            return function () {
              var e = t.elements,
                r = e.reference,
                i = e.popper;
              if ("removeAttribute" in r) {
                var n = (r.getAttribute("aria-describedby") || "")
                  .split(",")
                  .filter(function (e) {
                    return e.trim() !== i.id;
                  });
                n.length
                  ? r.setAttribute("aria-describedby", n.join(","))
                  : r.removeAttribute("aria-describedby");
              }
            };
          },
          fn: function (e) {
            var t,
              r = e.state.elements,
              i = r.popper,
              n = r.reference,
              a =
                null == (t = i.getAttribute("role")) ? void 0 : t.toLowerCase();
            if (i.id && "tooltip" === a && "setAttribute" in n) {
              var s = n.getAttribute("aria-describedby");
              if (s && -1 !== s.split(",").indexOf(i.id)) return;
              n.setAttribute("aria-describedby", s ? s + "," + i.id : i.id);
            }
          },
        },
        sr = [];
      const or = function (e, t, r) {
        var a = void 0 === r ? {} : r,
          s = a.enabled,
          o = void 0 === s || s,
          c = a.placement,
          u = void 0 === c ? "bottom" : c,
          m = a.strategy,
          d = void 0 === m ? "absolute" : m,
          f = a.modifiers,
          y = void 0 === f ? sr : f,
          p = (0, n.Z)(a, ["enabled", "placement", "strategy", "modifiers"]),
          B = (0, l.useRef)(),
          b = (0, l.useCallback)(function () {
            var e;
            null == (e = B.current) || e.update();
          }, []),
          g = (0, l.useCallback)(function () {
            var e;
            null == (e = B.current) || e.forceUpdate();
          }, []),
          h = et(
            (0, l.useState)({
              placement: u,
              update: b,
              forceUpdate: g,
              attributes: {},
              styles: { popper: ir(d), arrow: {} },
            }),
          ),
          v = h[0],
          w = h[1],
          _ = (0, l.useMemo)(
            function () {
              return {
                name: "updateStateModifier",
                enabled: !0,
                phase: "write",
                requires: ["computeStyles"],
                fn: function (e) {
                  var t = e.state,
                    r = {},
                    i = {};
                  Object.keys(t.elements).forEach(function (e) {
                    (r[e] = t.styles[e]), (i[e] = t.attributes[e]);
                  }),
                    w({
                      state: t,
                      styles: r,
                      attributes: i,
                      update: b,
                      forceUpdate: g,
                      placement: t.placement,
                    });
                },
              };
            },
            [b, g, w],
          );
        return (
          (0, l.useEffect)(
            function () {
              B.current &&
                o &&
                B.current.setOptions({
                  placement: u,
                  strategy: d,
                  modifiers: [].concat(y, [_, nr]),
                });
            },
            [d, u, _, o],
          ),
          (0, l.useEffect)(
            function () {
              if (o && null != e && null != t)
                return (
                  (B.current = rr(
                    e,
                    t,
                    (0, i.Z)({}, p, {
                      placement: u,
                      strategy: d,
                      modifiers: [].concat(y, [ar, _]),
                    }),
                  )),
                  function () {
                    null != B.current &&
                      (B.current.destroy(),
                      (B.current = void 0),
                      w(function (e) {
                        return (0, i.Z)({}, e, {
                          attributes: {},
                          styles: { popper: ir(d) },
                        });
                      }));
                  }
                );
            },
            [o, e, t],
          ),
          v
        );
      };
      var lr = !1,
        cr = !1;
      try {
        var ur = {
          get passive() {
            return (lr = !0);
          },
          get once() {
            return (cr = lr = !0);
          },
        };
        Re &&
          (window.addEventListener("test", ur, ur),
          window.removeEventListener("test", ur, !0));
      } catch (e) {}
      const mr = function (e, t, r, i) {
        if (i && "boolean" != typeof i && !cr) {
          var n = i.once,
            a = i.capture,
            s = r;
          !cr &&
            n &&
            ((s =
              r.__once ||
              function e(i) {
                this.removeEventListener(t, e, a), r.call(this, i);
              }),
            (r.__once = s)),
            e.addEventListener(t, s, lr ? i : a);
        }
        e.addEventListener(t, r, i);
      };
      const dr = function (e, t, r, i) {
        var n = i && "boolean" != typeof i ? i.capture : i;
        e.removeEventListener(t, r, n),
          r.__once && e.removeEventListener(t, r.__once, n);
      };
      const fr = function (e, t, r, i) {
        return (
          mr(e, t, r, i),
          function () {
            dr(e, t, r, i);
          }
        );
      };
      const yr = function (e) {
        var t = (0, l.useRef)(e);
        return (
          (0, l.useEffect)(
            function () {
              t.current = e;
            },
            [e],
          ),
          t
        );
      };
      function pr(e) {
        var t = yr(e);
        return (0, l.useCallback)(
          function () {
            return t.current && t.current.apply(t, arguments);
          },
          [t],
        );
      }
      var Br = r(626),
        br = r.n(Br);
      const gr = function (e) {
        return de(
          (function (e) {
            return e && "setState" in e
              ? re.findDOMNode(e)
              : null != e
              ? e
              : null;
          })(e),
        );
      };
      var hr = function () {};
      var vr = function (e) {
        return e && ("current" in e ? e.current : e);
      };
      const wr = function (e, t, r) {
        var i = void 0 === r ? {} : r,
          n = i.disabled,
          a = i.clickTrigger,
          s = void 0 === a ? "click" : a,
          o = (0, l.useRef)(!1),
          c = t || hr,
          u = (0, l.useCallback)(
            function (t) {
              var r,
                i = vr(e);
              br()(
                !!i,
                "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node",
              ),
                (o.current = !(
                  i &&
                  ((r = t),
                  !(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey)) &&
                  (function (e) {
                    return 0 === e.button;
                  })(t) &&
                  !he(i, t.target)
                ));
            },
            [e],
          ),
          m = pr(function (e) {
            o.current || c(e);
          }),
          d = pr(function (e) {
            27 === e.keyCode && c(e);
          });
        (0, l.useEffect)(
          function () {
            if (!n && null != e) {
              var t = window.event,
                r = gr(vr(e)),
                i = fr(r, s, u, !0),
                a = fr(r, s, function (e) {
                  e !== t ? m(e) : (t = void 0);
                }),
                o = fr(r, "keyup", function (e) {
                  e !== t ? d(e) : (t = void 0);
                }),
                l = [];
              return (
                "ontouchstart" in r.documentElement &&
                  (l = [].slice.call(r.body.children).map(function (e) {
                    return fr(e, "mousemove", hr);
                  })),
                function () {
                  i(),
                    a(),
                    o(),
                    l.forEach(function (e) {
                      return e();
                    });
                }
              );
            }
          },
          [e, n, s, u, m, d],
        );
      };
      var _r = function (e) {
        var t;
        return "undefined" == typeof document
          ? null
          : null == e
          ? de().body
          : ("function" == typeof e && (e = e()),
            e && "current" in e && (e = e.current),
            ((null == (t = e) ? void 0 : t.nodeType) && e) || null);
      };
      function zr(e, t) {
        var r = (0, l.useState)(function () {
            return _r(e);
          }),
          i = r[0],
          n = r[1];
        if (!i) {
          var a = _r(e);
          a && n(a);
        }
        return (
          (0, l.useEffect)(
            function () {
              t && i && t(i);
            },
            [t, i],
          ),
          (0, l.useEffect)(
            function () {
              var t = _r(e);
              t !== i && n(t);
            },
            [e, i],
          ),
          i
        );
      }
      function Mr(e) {
        var t,
          r,
          n,
          a,
          s,
          o = e.enabled,
          l = e.enableEvents,
          c = e.placement,
          u = e.flip,
          m = e.offset,
          d = e.containerPadding,
          f = e.arrowElement,
          y = e.popperConfig,
          p = void 0 === y ? {} : y,
          B = (function (e) {
            var t = {};
            return Array.isArray(e)
              ? (null == e ||
                  e.forEach(function (e) {
                    t[e.name] = e;
                  }),
                t)
              : e || t;
          })(p.modifiers);
        return (0, i.Z)({}, p, {
          placement: c,
          enabled: o,
          modifiers:
            ((s = (0, i.Z)({}, B, {
              eventListeners: { enabled: l },
              preventOverflow: (0, i.Z)({}, B.preventOverflow, {
                options: d
                  ? (0, i.Z)(
                      { padding: d },
                      null == (t = B.preventOverflow) ? void 0 : t.options,
                    )
                  : null == (r = B.preventOverflow)
                  ? void 0
                  : r.options,
              }),
              offset: {
                options: (0, i.Z)(
                  { offset: m },
                  null == (n = B.offset) ? void 0 : n.options,
                ),
              },
              arrow: (0, i.Z)({}, B.arrow, {
                enabled: !!f,
                options: (0, i.Z)(
                  {},
                  null == (a = B.arrow) ? void 0 : a.options,
                  { element: f },
                ),
              }),
              flip: (0, i.Z)({ enabled: !!u }, B.flip),
            })),
            void 0 === s && (s = {}),
            Array.isArray(s)
              ? s
              : Object.keys(s).map(function (e) {
                  return (s[e].name = e), s[e];
                })),
        });
      }
      var Sr = l.forwardRef(function (e, t) {
        var r = e.flip,
          a = e.offset,
          s = e.placement,
          o = e.containerPadding,
          c = void 0 === o ? 5 : o,
          u = e.popperConfig,
          m = void 0 === u ? {} : u,
          d = e.transition,
          f = xe(),
          y = f[0],
          p = f[1],
          B = xe(),
          b = B[0],
          g = B[1],
          h = Ae(p, t),
          v = zr(e.container),
          w = zr(e.target),
          _ = (0, l.useState)(!e.show),
          z = _[0],
          M = _[1],
          S = or(
            w,
            y,
            Mr({
              placement: s,
              enableEvents: !!e.show,
              containerPadding: c || 5,
              flip: r,
              offset: a,
              arrowElement: b,
              popperConfig: m,
            }),
          ),
          F = S.styles,
          R = S.attributes,
          E = (0, n.Z)(S, ["styles", "attributes"]);
        e.show ? z && M(!1) : e.transition || z || M(!0);
        var O = e.show || (d && !z);
        if (
          (wr(y, e.onHide, {
            disabled: !e.rootClose || e.rootCloseDisabled,
            clickTrigger: e.rootCloseEvent,
          }),
          !O)
        )
          return null;
        var W = e.children(
          (0, i.Z)({}, E, {
            show: !!e.show,
            props: (0, i.Z)({}, R.popper, { style: F.popper, ref: h }),
            arrowProps: (0, i.Z)({}, R.arrow, { style: F.arrow, ref: g }),
          }),
        );
        if (d) {
          var T = e.onExit,
            j = e.onExiting,
            P = e.onEnter,
            I = e.onEntering,
            C = e.onEntered;
          W = l.createElement(
            d,
            {
              in: e.show,
              appear: !0,
              onExit: T,
              onExiting: j,
              onExited: function () {
                M(!0), e.onExited && e.onExited.apply(e, arguments);
              },
              onEnter: P,
              onEntering: I,
              onEntered: C,
            },
            W,
          );
        }
        return v ? re.createPortal(W, v) : null;
      });
      (Sr.displayName = "Overlay"),
        (Sr.propTypes = {
          show: o().bool,
          placement: o().oneOf(Je),
          target: o().any,
          container: o().any,
          flip: o().bool,
          children: o().func.isRequired,
          containerPadding: o().number,
          popperConfig: o().object,
          rootClose: o().bool,
          rootCloseEvent: o().oneOf(["click", "mousedown"]),
          rootCloseDisabled: o().bool,
          onHide: function (e) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              r[i - 1] = arguments[i];
            var n;
            return e.rootClose
              ? (n = o().func).isRequired.apply(n, [e].concat(r))
              : o().func.apply(o(), [e].concat(r));
          },
          transition: o().elementType,
          onEnter: o().func,
          onEntering: o().func,
          onEntered: o().func,
          onExit: o().func,
          onExiting: o().func,
          onExited: o().func,
        });
      const Fr = Sr;
      function Rr(e, t) {
        var r = ve(e);
        return r ? r.innerHeight : t ? e.clientHeight : Me(e).height;
      }
      var Er,
        Or = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function Wr(e, t) {
        if (!Er) {
          var r = document.body,
            i =
              r.matches ||
              r.matchesSelector ||
              r.webkitMatchesSelector ||
              r.mozMatchesSelector ||
              r.msMatchesSelector;
          Er = function (e, t) {
            return i.call(e, t);
          };
        }
        return Er(e, t);
      }
      const Tr = function (e, t, r, i) {
        for (var n = e.length, a = r + (i ? 1 : -1); i ? a-- : ++a < n; )
          if (t(e[a], a, e)) return a;
        return -1;
      };
      var jr = r(52942),
        Pr = Math.max;
      const Ir = function (e, t, r) {
        var i = null == e ? 0 : e.length;
        if (!i) return -1;
        var n = null == r ? 0 : le(r);
        return n < 0 && (n = Pr(i + n, 0)), Tr(e, (0, jr.Z)(t, 3), n);
      };
      var Cr = Math.ceil,
        xr = Math.max;
      const Dr = function (e, t, r, i) {
        for (var n = -1, a = xr(Cr((t - e) / (r || 1)), 0), s = Array(a); a--; )
          (s[i ? a : ++n] = e), (e += r);
        return s;
      };
      const Ar = function (e) {
        return function (t, r, i) {
          return (
            i && "number" != typeof i && (0, ne.Z)(t, r, i) && (r = i = void 0),
            (t = oe(t)),
            void 0 === r ? ((r = t), (t = 0)) : (r = oe(r)),
            (i = void 0 === i ? (t < r ? 1 : -1) : oe(i)),
            Dr(t, r, i, e)
          );
        };
      };
      const kr = Ar();
      var Ur = r(21850),
        Nr = r(59900),
        Xr = r(46049),
        Gr = r(56137),
        Lr = r(84431),
        qr = r(92170),
        Zr = Gr.Z ? Gr.Z.isConcatSpreadable : void 0;
      const Hr = function (e) {
        return (0, qr.Z)(e) || (0, Lr.Z)(e) || !!(Zr && e && e[Zr]);
      };
      const Kr = function e(t, r, i, n, a) {
        var s = -1,
          o = t.length;
        for (i || (i = Hr), a || (a = []); ++s < o; ) {
          var l = t[s];
          r > 0 && i(l)
            ? r > 1
              ? e(l, r - 1, i, n, a)
              : (0, Xr.Z)(a, l)
            : n || (a[a.length] = l);
        }
        return a;
      };
      var Vr = r(72160),
        Yr = r(57673),
        $r = r(3145);
      const Jr = function (e, t) {
        var r = e.length;
        for (e.sort(t); r--; ) e[r] = e[r].value;
        return e;
      };
      var Qr = r(86176),
        ei = r(62816);
      const ti = function (e, t) {
        if (e !== t) {
          var r = void 0 !== e,
            i = null === e,
            n = e == e,
            a = (0, ei.Z)(e),
            s = void 0 !== t,
            o = null === t,
            l = t == t,
            c = (0, ei.Z)(t);
          if (
            (!o && !c && !a && e > t) ||
            (a && s && l && !o && !c) ||
            (i && s && l) ||
            (!r && l) ||
            !n
          )
            return 1;
          if (
            (!i && !a && !c && e < t) ||
            (c && r && n && !i && !a) ||
            (o && r && n) ||
            (!s && n) ||
            !l
          )
            return -1;
        }
        return 0;
      };
      const ri = function (e, t, r) {
        for (
          var i = -1,
            n = e.criteria,
            a = t.criteria,
            s = n.length,
            o = r.length;
          ++i < s;

        ) {
          var l = ti(n[i], a[i]);
          if (l) return i >= o ? l : l * ("desc" == r[i] ? -1 : 1);
        }
        return e.index - t.index;
      };
      var ii = r(59996);
      const ni = function (e, t, r) {
        t = t.length
          ? (0, Vr.Z)(t, function (e) {
              return (0, qr.Z)(e)
                ? function (t) {
                    return (0, Yr.Z)(t, 1 === e.length ? e[0] : e);
                  }
                : e;
            })
          : [ii.Z];
        var i = -1;
        t = (0, Vr.Z)(t, (0, Qr.Z)(jr.Z));
        var n = (0, $r.Z)(e, function (e, r, n) {
          return {
            criteria: (0, Vr.Z)(t, function (t) {
              return t(e);
            }),
            index: ++i,
            value: e,
          };
        });
        return Jr(n, function (e, t) {
          return ri(e, t, r);
        });
      };
      var ai = r(35651);
      const si = (0, ai.Z)(function (e, t) {
        if (null == e) return [];
        var r = t.length;
        return (
          r > 1 && (0, ne.Z)(e, t[0], t[1])
            ? (t = [])
            : r > 2 && (0, ne.Z)(t[0], t[1], t[2]) && (t = [t[0]]),
          ni(e, Kr(t, 1), [])
        );
      });
      function oi(e, t) {
        var r = ve(e);
        return r ? r.innerWidth : t ? e.clientWidth : Me(e).width;
      }
      var li;
      function ci(e) {
        if (((!li && 0 !== li) || e) && Re) {
          var t = document.createElement("div");
          (t.style.position = "absolute"),
            (t.style.top = "-9999px"),
            (t.style.width = "50px"),
            (t.style.height = "50px"),
            (t.style.overflow = "scroll"),
            document.body.appendChild(t),
            (li = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return li;
      }
      var ui = r(91437),
        mi = r(28624),
        di = r(13953),
        fi = r(66662),
        yi = r(43786),
        pi = r(7172),
        Bi = r(10646);
      const bi = function (e, t) {
        return e && (0, pi.Z)(t, (0, Bi.Z)(t), e);
      };
      var gi = r(85889);
      const hi = function (e, t) {
        return e && (0, pi.Z)(t, (0, gi.Z)(t), e);
      };
      var vi = r(77408),
        wi = r(32291),
        _i = r(20993);
      const zi = function (e, t) {
        return (0, pi.Z)(e, (0, _i.Z)(e), t);
      };
      var Mi = r(12545),
        Si = r(3612);
      const Fi = Object.getOwnPropertySymbols
        ? function (e) {
            for (var t = []; e; )
              (0, Xr.Z)(t, (0, _i.Z)(e)), (e = (0, Mi.Z)(e));
            return t;
          }
        : Si.Z;
      const Ri = function (e, t) {
        return (0, pi.Z)(e, Fi(e), t);
      };
      var Ei = r(69094),
        Oi = r(4403);
      const Wi = function (e) {
        return (0, Oi.Z)(e, gi.Z, Fi);
      };
      var Ti = r(70783),
        ji = Object.prototype.hasOwnProperty;
      const Pi = function (e) {
        var t = e.length,
          r = new e.constructor(t);
        return (
          t &&
            "string" == typeof e[0] &&
            ji.call(e, "index") &&
            ((r.index = e.index), (r.input = e.input)),
          r
        );
      };
      var Ii = r(11225);
      const Ci = function (e, t) {
        var r = t ? (0, Ii.Z)(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength);
      };
      var xi = /\w*$/;
      const Di = function (e) {
        var t = new e.constructor(e.source, xi.exec(e));
        return (t.lastIndex = e.lastIndex), t;
      };
      var Ai = Gr.Z ? Gr.Z.prototype : void 0,
        ki = Ai ? Ai.valueOf : void 0;
      const Ui = function (e) {
        return ki ? Object(ki.call(e)) : {};
      };
      var Ni = r(97558);
      const Xi = function (e, t, r) {
        var i = e.constructor;
        switch (t) {
          case "[object ArrayBuffer]":
            return (0, Ii.Z)(e);
          case "[object Boolean]":
          case "[object Date]":
            return new i(+e);
          case "[object DataView]":
            return Ci(e, r);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return (0, Ni.Z)(e, r);
          case "[object Map]":
          case "[object Set]":
            return new i();
          case "[object Number]":
          case "[object String]":
            return new i(e);
          case "[object RegExp]":
            return Di(e);
          case "[object Symbol]":
            return Ui(e);
        }
      };
      var Gi = r(23775),
        Li = r(62246),
        qi = r(25197);
      const Zi = function (e) {
        return (0, qi.Z)(e) && "[object Map]" == (0, Ti.Z)(e);
      };
      var Hi = r(40690),
        Ki = Hi.Z && Hi.Z.isMap;
      const Vi = Ki ? (0, Qr.Z)(Ki) : Zi;
      var Yi = r(96288);
      const $i = function (e) {
        return (0, qi.Z)(e) && "[object Set]" == (0, Ti.Z)(e);
      };
      var Ji = Hi.Z && Hi.Z.isSet;
      const Qi = Ji ? (0, Qr.Z)(Ji) : $i;
      var en = "[object Arguments]",
        tn = "[object Function]",
        rn = "[object Object]",
        nn = {};
      (nn[en] =
        nn["[object Array]"] =
        nn["[object ArrayBuffer]"] =
        nn["[object DataView]"] =
        nn["[object Boolean]"] =
        nn["[object Date]"] =
        nn["[object Float32Array]"] =
        nn["[object Float64Array]"] =
        nn["[object Int8Array]"] =
        nn["[object Int16Array]"] =
        nn["[object Int32Array]"] =
        nn["[object Map]"] =
        nn["[object Number]"] =
        nn[rn] =
        nn["[object RegExp]"] =
        nn["[object Set]"] =
        nn["[object String]"] =
        nn["[object Symbol]"] =
        nn["[object Uint8Array]"] =
        nn["[object Uint8ClampedArray]"] =
        nn["[object Uint16Array]"] =
        nn["[object Uint32Array]"] =
          !0),
        (nn["[object Error]"] = nn[tn] = nn["[object WeakMap]"] = !1);
      const an = function e(t, r, i, n, a, s) {
        var o,
          l = 1 & r,
          c = 2 & r,
          u = 4 & r;
        if ((i && (o = a ? i(t, n, a, s) : i(t)), void 0 !== o)) return o;
        if (!(0, Yi.Z)(t)) return t;
        var m = (0, qr.Z)(t);
        if (m) {
          if (((o = Pi(t)), !l)) return (0, wi.Z)(t, o);
        } else {
          var d = (0, Ti.Z)(t),
            f = d == tn || "[object GeneratorFunction]" == d;
          if ((0, Li.Z)(t)) return (0, vi.Z)(t, l);
          if (d == rn || d == en || (f && !a)) {
            if (((o = c || f ? {} : (0, Gi.Z)(t)), !l))
              return c ? Ri(t, hi(o, t)) : zi(t, bi(o, t));
          } else {
            if (!nn[d]) return a ? t : {};
            o = Xi(t, d, l);
          }
        }
        s || (s = new di.Z());
        var y = s.get(t);
        if (y) return y;
        s.set(t, o),
          Qi(t)
            ? t.forEach(function (n) {
                o.add(e(n, r, i, n, t, s));
              })
            : Vi(t) &&
              t.forEach(function (n, a) {
                o.set(a, e(n, r, i, a, t, s));
              });
        var p = u ? (c ? Wi : Ei.Z) : c ? gi.Z : Bi.Z,
          B = m ? void 0 : p(t);
        return (
          (0, fi.Z)(B || t, function (n, a) {
            B && (n = t[(a = n)]), (0, yi.Z)(o, a, e(n, r, i, a, t, s));
          }),
          o
        );
      };
      var sn = r(30475);
      const on = function (e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0;
      };
      const ln = function (e, t) {
        return t.length < 2 ? e : (0, Yr.Z)(e, ie(t, 0, -1));
      };
      var cn = r(82508);
      const un = function (e, t) {
        return (
          (t = (0, sn.Z)(t, e)),
          null == (e = ln(e, t)) || delete e[(0, cn.Z)(on(t))]
        );
      };
      var mn = r(44199);
      const dn = function (e) {
        return (0, mn.Z)(e) ? void 0 : e;
      };
      const fn = function (e) {
        return (null == e ? 0 : e.length) ? Kr(e, 1) : [];
      };
      var yn = r(13031),
        pn = r(11871);
      const Bn = (function (e) {
        return (0, pn.Z)((0, yn.Z)(e, void 0, fn), e + "");
      })(function (e, t) {
        var r = {};
        if (null == e) return r;
        var i = !1;
        (t = (0, Vr.Z)(t, function (t) {
          return (t = (0, sn.Z)(t, e)), i || (i = t.length > 1), t;
        })),
          (0, pi.Z)(e, Wi(e), r),
          i && (r = an(r, 7, dn));
        for (var n = t.length; n--; ) un(r, t[n]);
        return r;
      });
      var bn = r(72831),
        gn = Object.prototype,
        hn = gn.hasOwnProperty;
      const vn = (0, ai.Z)(function (e, t) {
        e = Object(e);
        var r = -1,
          i = t.length,
          n = i > 2 ? t[2] : void 0;
        for (n && (0, ne.Z)(t[0], t[1], n) && (i = 1); ++r < i; )
          for (
            var a = t[r], s = (0, gi.Z)(a), o = -1, l = s.length;
            ++o < l;

          ) {
            var c = s[o],
              u = e[c];
            (void 0 === u || ((0, bn.Z)(u, gn[c]) && !hn.call(e, c))) &&
              (e[c] = a[c]);
          }
        return e;
      });
      var wn = r(73154),
        _n = r(79926),
        zn = r(2619),
        Mn = r(70770);
      const Sn = function (e, t, r) {
        var i = (0, qr.Z)(e),
          n = i || (0, Li.Z)(e) || (0, Mn.Z)(e);
        if (((t = (0, jr.Z)(t, 4)), null == r)) {
          var a = e && e.constructor;
          r = n
            ? i
              ? new a()
              : []
            : (0, Yi.Z)(e) && (0, zn.Z)(a)
            ? (0, wn.Z)((0, Mi.Z)(e))
            : {};
        }
        return (
          (n ? fi.Z : _n.Z)(e, function (e, i, n) {
            return t(r, e, i, n);
          }),
          r
        );
      };
      var Fn = r(24077);
      const Rn = function (e, t) {
        var r = {};
        return (
          (t = (0, jr.Z)(t, 3)),
          (0, _n.Z)(e, function (e, i, n) {
            (0, Fn.Z)(r, i, t(e, i, n));
          }),
          r
        );
      };
      function En(e) {
        return e.children;
      }
      var On = "PREV",
        Wn = "NEXT",
        Tn = "TODAY",
        jn = "DATE",
        Pn = {
          MONTH: "month",
          WEEK: "week",
          WORK_WEEK: "work_week",
          DAY: "day",
          AGENDA: "agenda",
        },
        In = Object.keys(Pn).map(function (e) {
          return Pn[e];
        });
      o().oneOfType([o().string, o().func]),
        o().any,
        o().func,
        o().oneOfType([
          o().arrayOf(o().oneOf(In)),
          o().objectOf(function (e, t) {
            if (-1 !== In.indexOf(t) && "boolean" == typeof e[t]) return null;
            for (
              var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), n = 2;
              n < r;
              n++
            )
              i[n - 2] = arguments[n];
            return o().elementType.apply(o(), [e, t].concat(i));
          }),
        ]),
        o().oneOfType([o().oneOf(["overlap", "no-overlap"]), o().func]);
      function Cn(e, t) {
        e && e.apply(null, [].concat(t));
      }
      var xn = { seconds: 1e3, minutes: 6e4, hours: 36e5, day: 864e5 };
      function Dn(e, t) {
        var r = I(e, "month");
        return I(r, "week", t.startOfWeek());
      }
      function An(e, t) {
        var r = C(e, "month");
        return C(r, "week", t.startOfWeek());
      }
      function kn(e, t) {
        for (var r = Dn(e, t), i = An(e, t), n = []; N(r, i, "day"); )
          n.push(r), (r = j(r, 1, "day"));
        return n;
      }
      function Un(e, t) {
        var r = I(e, t);
        return x(r, e) ? r : j(r, 1, t);
      }
      function Nn(e, t, r) {
        void 0 === r && (r = "day");
        for (var i = e, n = []; N(i, t, r); ) n.push(i), (i = j(i, 1, r));
        return n;
      }
      function Xn(e, t) {
        return null == t && null == e
          ? null
          : (null == t && (t = new Date()),
            null == e && (e = new Date()),
            (e = I(e, "day")),
            (e = K(e, K(t))),
            (e = H(e, H(t))),
            (e = Z(e, Z(t))),
            q(e, q(t)));
      }
      function Gn(e) {
        return 0 === K(e) && 0 === H(e) && 0 === Z(e) && 0 === q(e);
      }
      function Ln(e, t, r) {
        return r && "milliseconds" !== r
          ? Math.round(Math.abs(+I(e, r) / xn[r] - +I(t, r) / xn[r]))
          : Math.abs(+e - +t);
      }
      var qn = o().oneOfType([o().string, o().func]);
      function Zn(e, t, r, i, n) {
        var a = "function" == typeof i ? i(r, n, e) : t.call(e, r, i, n);
        return null != a && "string" != typeof a && u()(!1), a;
      }
      function Hn(e, t, r) {
        return new Date(
          e.getFullYear(),
          e.getMonth(),
          e.getDate(),
          0,
          t + r,
          0,
          0,
        );
      }
      function Kn(e, t) {
        return e.getTimezoneOffset() - t.getTimezoneOffset();
      }
      function Vn(e, t) {
        return Ln(e, t, "minutes") + Kn(e, t);
      }
      function Yn(e) {
        var t = I(e, "day");
        return Ln(t, e, "minutes") + Kn(t, e);
      }
      function $n(e, t) {
        return U(e, t, "day");
      }
      function Jn(e, t, r) {
        return x(e, t, "minutes") ? k(t, r, "minutes") : A(t, r, "minutes");
      }
      function Qn(e) {
        var t = e.evtA,
          r = t.start,
          i = t.end,
          n = t.allDay,
          a = e.evtB,
          s = a.start,
          o = a.end,
          l = a.allDay,
          c = +I(r, "day") - +I(s, "day"),
          u = Ln(r, Un(i, "day"), "day"),
          m = Ln(s, Un(o, "day"), "day");
        return (
          c ||
          Math.max(m, 1) - Math.max(u, 1) ||
          !!l - !!n ||
          +r - +s ||
          +i - +o
        );
      }
      function ea(e) {
        var t = e.event,
          r = t.start,
          i = t.end,
          n = e.range,
          a = n.start,
          s = n.end,
          o = I(r, "day"),
          l = N(o, s, "day"),
          c = D(o, i, "minutes") ? A(i, a, "minutes") : k(i, a, "minutes");
        return l && c;
      }
      function ta(e, t) {
        return x(e, t, "day");
      }
      function ra(e, t) {
        return Gn(e) && Gn(t);
      }
      var ia = function (e) {
        var t = this;
        "function" != typeof e.format && u()(!1),
          "function" != typeof e.firstOfWeek && u()(!1),
          (this.propType = e.propType || qn),
          (this.formats = e.formats),
          (this.format = function () {
            for (var r = arguments.length, i = new Array(r), n = 0; n < r; n++)
              i[n] = arguments[n];
            return Zn.apply(void 0, [t, e.format].concat(i));
          }),
          (this.startOfWeek = e.firstOfWeek),
          (this.merge = e.merge || Xn),
          (this.inRange = e.inRange || L),
          (this.lt = e.lt || U),
          (this.lte = e.lte || N),
          (this.gt = e.gt || A),
          (this.gte = e.gte || k),
          (this.eq = e.eq || x),
          (this.neq = e.neq || D),
          (this.startOf = e.startOf || I),
          (this.endOf = e.endOf || C),
          (this.add = e.add || j),
          (this.range = e.range || Nn),
          (this.diff = e.diff || Ln),
          (this.ceil = e.ceil || Un),
          (this.min = e.min || X),
          (this.max = e.max || G),
          (this.minutes = e.minutes || H),
          (this.firstVisibleDay = e.firstVisibleDay || Dn),
          (this.lastVisibleDay = e.lastVisibleDay || An),
          (this.visibleDays = e.visibleDays || kn),
          (this.getSlotDate = e.getSlotDate || Hn),
          (this.getTimezoneOffset =
            e.getTimezoneOffset ||
            function (e) {
              return e.getTimezoneOffset();
            }),
          (this.getDstOffset = e.getDstOffset || Kn),
          (this.getTotalMin = e.getTotalMin || Vn),
          (this.getMinutesFromMidnight = e.getMinutesFromMidnight || Yn),
          (this.continuesPrior = e.continuesPrior || $n),
          (this.continuesAfter = e.continuesAfter || Jn),
          (this.sortEvents = e.sortEvents || Qn),
          (this.inEventRange = e.inEventRange || ea),
          (this.isSameDate = e.isSameDate || ta),
          (this.startAndEndAreDateOnly = e.startAndEndAreDateOnly || ra),
          (this.segmentOffset = e.browserTZOffset ? e.browserTZOffset() : 0);
      };
      function na(e, t, r, n) {
        var a = (0, i.Z)({}, e.formats, r);
        return (0, i.Z)({}, e, {
          messages: n,
          startOfWeek: function () {
            return e.startOfWeek(t);
          },
          format: function (r, i) {
            return e.format(r, a[i] || i, t);
          },
        });
      }
      var aa = {
        date: "Date",
        time: "Time",
        event: "Event",
        allDay: "All Day",
        week: "Week",
        work_week: "Work Week",
        day: "Day",
        month: "Month",
        previous: "Back",
        next: "Next",
        yesterday: "Yesterday",
        tomorrow: "Tomorrow",
        today: "Today",
        agenda: "Agenda",
        noEventsInRange: "There are no events in this range.",
        showMore: function (e) {
          return "+" + e + " more";
        },
      };
      var sa = [
          "style",
          "className",
          "event",
          "selected",
          "isAllDay",
          "onSelect",
          "onDoubleClick",
          "onKeyPress",
          "localizer",
          "continuesPrior",
          "continuesAfter",
          "accessors",
          "getters",
          "children",
          "components",
          "slotStart",
          "slotEnd",
        ],
        oa = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            (0, a.Z)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.style,
                r = e.className,
                a = e.event,
                s = e.selected,
                o = e.isAllDay,
                c = e.onSelect,
                u = e.onDoubleClick,
                m = e.onKeyPress,
                d = e.localizer,
                f = e.continuesPrior,
                y = e.continuesAfter,
                p = e.accessors,
                B = e.getters,
                b = e.children,
                h = e.components,
                v = h.event,
                w = h.eventWrapper,
                _ = e.slotStart,
                z = e.slotEnd,
                M = (0, n.Z)(e, sa);
              delete M.resizable;
              var S = p.title(a),
                F = p.tooltip(a),
                R = p.end(a),
                E = p.start(a),
                O = p.allDay(a),
                W = o || O || d.diff(E, d.ceil(R, "day"), "day") > 1,
                T = B.eventProp(a, E, R, s),
                j = l.createElement(
                  "div",
                  { className: "rbc-event-content", title: F || void 0 },
                  v
                    ? l.createElement(v, {
                        event: a,
                        continuesPrior: f,
                        continuesAfter: y,
                        title: S,
                        isAllDay: O,
                        localizer: d,
                        slotStart: _,
                        slotEnd: z,
                      })
                    : S,
                );
              return l.createElement(
                w,
                (0, i.Z)({}, this.props, { type: "date" }),
                l.createElement(
                  "div",
                  (0, i.Z)({}, M, {
                    tabIndex: 0,
                    style: (0, i.Z)({}, T.style, t),
                    className: g("rbc-event", r, T.className, {
                      "rbc-selected": s,
                      "rbc-event-allday": W,
                      "rbc-event-continues-prior": f,
                      "rbc-event-continues-after": y,
                    }),
                    onClick: function (e) {
                      return c && c(a, e);
                    },
                    onDoubleClick: function (e) {
                      return u && u(a, e);
                    },
                    onKeyPress: function (e) {
                      return m && m(a, e);
                    },
                  }),
                  "function" == typeof b ? b(j) : j,
                ),
              );
            }),
            t
          );
        })(l.Component);
      function la(e, t) {
        return !(!e || null == t) && Ce(e, t);
      }
      function ca(e, t) {
        return (e.right - e.left) / t;
      }
      function ua(e, t, r, i) {
        var n = ca(e, i);
        return r
          ? i - 1 - Math.floor((t - e.left) / n)
          : Math.floor((t - e.left) / n);
      }
      oa.propTypes = {};
      var ma = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        (0, a.Z)(t, e);
        var r = t.prototype;
        return (
          (r.componentDidMount = function () {
            var e,
              t,
              r = this.props,
              i = r.popupOffset,
              n = void 0 === i ? 5 : i,
              a = Me(r.popperRef.current),
              s = a.top,
              o = a.left,
              l = a.width,
              c = a.height,
              u = window.innerHeight + ze(window),
              m = window.innerWidth + _e(window),
              d = s + c,
              f = o + l;
            (d > u || f > m) &&
              (d > u && (e = d - u + (n.y || +n || 0)),
              f > m && (t = f - m + (n.x || +n || 0)),
              this.setState({ topOffset: e, leftOffset: t }));
          }),
          (r.render = function () {
            var e = this,
              t = this.props,
              r = t.events,
              n = t.selected,
              a = t.getters,
              s = t.accessors,
              o = t.components,
              c = t.onSelect,
              u = t.onDoubleClick,
              m = t.onKeyPress,
              d = t.slotStart,
              f = t.slotEnd,
              y = t.localizer,
              p = t.popperRef,
              B = this.props.position.width,
              b = {
                top: -((this.state || {}).topOffset || 0),
                left: -((this.state || {}).leftOffset || 0),
                minWidth: B + B / 2,
              };
            return l.createElement(
              "div",
              {
                style: (0, i.Z)({}, this.props.style, b),
                className: "rbc-overlay",
                ref: p,
              },
              l.createElement(
                "div",
                { className: "rbc-overlay-header" },
                y.format(d, "dayHeaderFormat"),
              ),
              r.map(function (t, r) {
                return l.createElement(oa, {
                  key: r,
                  type: "popup",
                  localizer: y,
                  event: t,
                  getters: a,
                  onSelect: c,
                  accessors: s,
                  components: o,
                  onDoubleClick: u,
                  onKeyPress: m,
                  continuesPrior: y.lt(s.end(t), d, "day"),
                  continuesAfter: y.gte(s.start(t), f, "day"),
                  slotStart: d,
                  slotEnd: f,
                  selected: la(t, n),
                  draggable: !0,
                  onDragStart: function () {
                    return e.props.handleDragStart(t);
                  },
                  onDragEnd: function () {
                    return e.props.show();
                  },
                });
              }),
            );
          }),
          t
        );
      })(l.Component);
      ma.propTypes = {};
      var da = l.forwardRef(function (e, t) {
        return l.createElement(ma, (0, i.Z)({ popperRef: t }, e));
      });
      function fa(e, t, r) {
        return void 0 === r && (r = document), fr(r, e, t, { passive: !1 });
      }
      function ya(e, t) {
        var r = t.clientX,
          i = t.clientY;
        return (function (e, t, r) {
          e.closest && !r && e.closest(t);
          var i = e;
          do {
            if (Wr(i, t)) return i;
            i = i.parentElement;
          } while (i && i !== r && i.nodeType === document.ELEMENT_NODE);
          return null;
        })(document.elementFromPoint(r, i), ".rbc-event", e);
      }
      function pa(e, t) {
        return !!ya(e, t);
      }
      function Ba(e) {
        var t = e;
        return (
          e.touches && e.touches.length && (t = e.touches[0]),
          {
            clientX: t.clientX,
            clientY: t.clientY,
            pageX: t.pageX,
            pageY: t.pageY,
          }
        );
      }
      var ba = (function () {
        function e(e, t) {
          var r = void 0 === t ? {} : t,
            i = r.global,
            n = void 0 !== i && i,
            a = r.longPressThreshold,
            s = void 0 === a ? 250 : a;
          (this.isDetached = !1),
            (this.container = e),
            (this.globalMouse = !e || n),
            (this.longPressThreshold = s),
            (this._listeners = Object.create(null)),
            (this._handleInitialEvent = this._handleInitialEvent.bind(this)),
            (this._handleMoveEvent = this._handleMoveEvent.bind(this)),
            (this._handleTerminatingEvent =
              this._handleTerminatingEvent.bind(this)),
            (this._keyListener = this._keyListener.bind(this)),
            (this._dropFromOutsideListener =
              this._dropFromOutsideListener.bind(this)),
            (this._dragOverFromOutsideListener =
              this._dragOverFromOutsideListener.bind(this)),
            (this._removeTouchMoveWindowListener = fa(
              "touchmove",
              function () {},
              window,
            )),
            (this._removeKeyDownListener = fa("keydown", this._keyListener)),
            (this._removeKeyUpListener = fa("keyup", this._keyListener)),
            (this._removeDropFromOutsideListener = fa(
              "drop",
              this._dropFromOutsideListener,
            )),
            (this._removeDragOverFromOutsideListener = fa(
              "dragover",
              this._dragOverFromOutsideListener,
            )),
            this._addInitialEventListener();
        }
        var t = e.prototype;
        return (
          (t.on = function (e, t) {
            var r = this._listeners[e] || (this._listeners[e] = []);
            return (
              r.push(t),
              {
                remove: function () {
                  var e = r.indexOf(t);
                  -1 !== e && r.splice(e, 1);
                },
              }
            );
          }),
          (t.emit = function (e) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              r[i - 1] = arguments[i];
            var n;
            return (
              (this._listeners[e] || []).forEach(function (e) {
                void 0 === n && (n = e.apply(void 0, r));
              }),
              n
            );
          }),
          (t.teardown = function () {
            (this.isDetached = !0),
              (this._listeners = Object.create(null)),
              this._removeTouchMoveWindowListener &&
                this._removeTouchMoveWindowListener(),
              this._removeInitialEventListener &&
                this._removeInitialEventListener(),
              this._removeEndListener && this._removeEndListener(),
              this._onEscListener && this._onEscListener(),
              this._removeMoveListener && this._removeMoveListener(),
              this._removeKeyUpListener && this._removeKeyUpListener(),
              this._removeKeyDownListener && this._removeKeyDownListener(),
              this._removeDropFromOutsideListener &&
                this._removeDropFromOutsideListener(),
              this._removeDragOverFromOutsideListener &&
                this._removeDragOverFromOutsideListener();
          }),
          (t.isSelected = function (e) {
            var t = this._selectRect;
            return !(!t || !this.selecting) && ga(t, ha(e));
          }),
          (t.filter = function (e) {
            return this._selectRect && this.selecting
              ? e.filter(this.isSelected, this)
              : [];
          }),
          (t._addLongPressListener = function (e, t) {
            var r = this,
              i = null,
              n = null,
              a = null,
              s = function (t) {
                (i = setTimeout(function () {
                  l(), e(t);
                }, r.longPressThreshold)),
                  (n = fa("touchmove", function () {
                    return l();
                  })),
                  (a = fa("touchend", function () {
                    return l();
                  }));
              },
              o = fa("touchstart", s),
              l = function () {
                i && clearTimeout(i),
                  n && n(),
                  a && a(),
                  (i = null),
                  (n = null),
                  (a = null);
              };
            return (
              t && s(t),
              function () {
                l(), o();
              }
            );
          }),
          (t._addInitialEventListener = function () {
            var e = this,
              t = fa("mousedown", function (t) {
                e._removeInitialEventListener(),
                  e._handleInitialEvent(t),
                  (e._removeInitialEventListener = fa(
                    "mousedown",
                    e._handleInitialEvent,
                  ));
              }),
              r = fa("touchstart", function (t) {
                e._removeInitialEventListener(),
                  (e._removeInitialEventListener = e._addLongPressListener(
                    e._handleInitialEvent,
                    t,
                  ));
              });
            this._removeInitialEventListener = function () {
              t(), r();
            };
          }),
          (t._dropFromOutsideListener = function (e) {
            var t = Ba(e),
              r = t.pageX,
              i = t.pageY,
              n = t.clientX,
              a = t.clientY;
            this.emit("dropFromOutside", {
              x: r,
              y: i,
              clientX: n,
              clientY: a,
            }),
              e.preventDefault();
          }),
          (t._dragOverFromOutsideListener = function (e) {
            var t = Ba(e),
              r = t.pageX,
              i = t.pageY,
              n = t.clientX,
              a = t.clientY;
            this.emit("dragOverFromOutside", {
              x: r,
              y: i,
              clientX: n,
              clientY: a,
            }),
              e.preventDefault();
          }),
          (t._handleInitialEvent = function (e) {
            if (!this.isDetached) {
              var t,
                r = Ba(e),
                i = r.clientX,
                n = r.clientY,
                a = r.pageX,
                s = r.pageY,
                o = this.container();
              if (
                3 !== e.which &&
                2 !== e.button &&
                ((c = i),
                (u = n),
                !(l = o) || he(l, document.elementFromPoint(c, u)))
              ) {
                var l, c, u;
                if (!this.globalMouse && o && !he(o, e.target)) {
                  var m = (function (e) {
                      void 0 === e && (e = 0);
                      "object" != typeof e &&
                        (e = { top: e, left: e, right: e, bottom: e });
                      return e;
                    })(0),
                    d = m.top,
                    f = m.left,
                    y = m.bottom,
                    p = m.right;
                  if (
                    !ga(
                      {
                        top: (t = ha(o)).top - d,
                        left: t.left - f,
                        bottom: t.bottom + y,
                        right: t.right + p,
                      },
                      { top: s, left: a },
                    )
                  )
                    return;
                }
                if (
                  !1 !==
                  this.emit(
                    "beforeSelect",
                    (this._initialEventData = {
                      isTouch: /^touch/.test(e.type),
                      x: a,
                      y: s,
                      clientX: i,
                      clientY: n,
                    }),
                  )
                )
                  switch (e.type) {
                    case "mousedown":
                      (this._removeEndListener = fa(
                        "mouseup",
                        this._handleTerminatingEvent,
                      )),
                        (this._onEscListener = fa(
                          "keydown",
                          this._handleTerminatingEvent,
                        )),
                        (this._removeMoveListener = fa(
                          "mousemove",
                          this._handleMoveEvent,
                        ));
                      break;
                    case "touchstart":
                      this._handleMoveEvent(e),
                        (this._removeEndListener = fa(
                          "touchend",
                          this._handleTerminatingEvent,
                        )),
                        (this._removeMoveListener = fa(
                          "touchmove",
                          this._handleMoveEvent,
                        ));
                  }
              }
            }
          }),
          (t._handleTerminatingEvent = function (e) {
            var t = Ba(e),
              r = t.pageX,
              i = t.pageY;
            if (
              ((this.selecting = !1),
              this._removeEndListener && this._removeEndListener(),
              this._removeMoveListener && this._removeMoveListener(),
              this._initialEventData)
            ) {
              var n = !this.container || he(this.container(), e.target),
                a = this._selectRect,
                s = this.isClick(r, i);
              return (
                (this._initialEventData = null),
                "Escape" === e.key
                  ? this.emit("reset")
                  : n
                  ? s && n
                    ? this._handleClickEvent(e)
                    : s
                    ? void 0
                    : this.emit("select", a)
                  : this.emit("reset")
              );
            }
          }),
          (t._handleClickEvent = function (e) {
            var t = Ba(e),
              r = t.pageX,
              i = t.pageY,
              n = t.clientX,
              a = t.clientY,
              s = new Date().getTime();
            return this._lastClickData &&
              s - this._lastClickData.timestamp < 250
              ? ((this._lastClickData = null),
                this.emit("doubleClick", {
                  x: r,
                  y: i,
                  clientX: n,
                  clientY: a,
                }))
              : ((this._lastClickData = { timestamp: s }),
                this.emit("click", { x: r, y: i, clientX: n, clientY: a }));
          }),
          (t._handleMoveEvent = function (e) {
            if (null !== this._initialEventData && !this.isDetached) {
              var t = this._initialEventData,
                r = t.x,
                i = t.y,
                n = Ba(e),
                a = n.pageX,
                s = n.pageY,
                o = Math.abs(r - a),
                l = Math.abs(i - s),
                c = Math.min(a, r),
                u = Math.min(s, i),
                m = this.selecting;
              (!this.isClick(a, s) || m || o || l) &&
                ((this.selecting = !0),
                (this._selectRect = {
                  top: u,
                  left: c,
                  x: a,
                  y: s,
                  right: c + o,
                  bottom: u + l,
                }),
                m || this.emit("selectStart", this._initialEventData),
                this.isClick(a, s) || this.emit("selecting", this._selectRect),
                e.preventDefault());
            }
          }),
          (t._keyListener = function (e) {
            this.ctrl = e.metaKey || e.ctrlKey;
          }),
          (t.isClick = function (e, t) {
            var r = this._initialEventData,
              i = r.x,
              n = r.y;
            return !r.isTouch && Math.abs(e - i) <= 5 && Math.abs(t - n) <= 5;
          }),
          e
        );
      })();
      function ga(e, t, r) {
        void 0 === r && (r = 0);
        var i = ha(e),
          n = i.top,
          a = i.left,
          s = i.right,
          o = void 0 === s ? a : s,
          l = i.bottom,
          c = void 0 === l ? n : l,
          u = ha(t),
          m = u.top,
          d = u.left,
          f = u.right,
          y = void 0 === f ? d : f,
          p = u.bottom;
        return !(
          c - r < m ||
          n + r > (void 0 === p ? m : p) ||
          o - r < d ||
          a + r > y
        );
      }
      function ha(e) {
        if (!e.getBoundingClientRect) return e;
        var t = e.getBoundingClientRect(),
          r = t.left + va("left"),
          i = t.top + va("top");
        return {
          top: i,
          left: r,
          right: (e.offsetWidth || 0) + r,
          bottom: (e.offsetHeight || 0) + i,
        };
      }
      function va(e) {
        return "left" === e
          ? window.pageXOffset || document.body.scrollLeft || 0
          : "top" === e
          ? window.pageYOffset || document.body.scrollTop || 0
          : void 0;
      }
      var wa = (function (e) {
        function t(t, r) {
          var i;
          return (
            ((i = e.call(this, t, r) || this).state = { selecting: !1 }), i
          );
        }
        (0, a.Z)(t, e);
        var r = t.prototype;
        return (
          (r.componentDidMount = function () {
            this.props.selectable && this._selectable();
          }),
          (r.componentWillUnmount = function () {
            this._teardownSelectable();
          }),
          (r.UNSAFE_componentWillReceiveProps = function (e) {
            e.selectable && !this.props.selectable && this._selectable(),
              !e.selectable &&
                this.props.selectable &&
                this._teardownSelectable();
          }),
          (r.render = function () {
            var e = this.props,
              t = e.range,
              r = e.getNow,
              i = e.getters,
              n = e.date,
              a = e.components.dateCellWrapper,
              s = e.localizer,
              o = this.state,
              c = o.selecting,
              u = o.startIdx,
              m = o.endIdx,
              d = r();
            return l.createElement(
              "div",
              { className: "rbc-row-bg" },
              t.map(function (e, r) {
                var o = c && r >= u && r <= m,
                  f = i.dayProp(e),
                  y = f.className,
                  p = f.style;
                return l.createElement(
                  a,
                  { key: r, value: e, range: t },
                  l.createElement("div", {
                    style: p,
                    className: g(
                      "rbc-day-bg",
                      y,
                      o && "rbc-selected-cell",
                      s.isSameDate(e, d) && "rbc-today",
                      n && s.neq(n, e, "month") && "rbc-off-range-bg",
                    ),
                  }),
                );
              }),
            );
          }),
          (r._selectable = function () {
            var e = this,
              t = (0, re.findDOMNode)(this),
              r = (this._selector = new ba(this.props.container, {
                longPressThreshold: this.props.longPressThreshold,
              })),
              n = function (r, i) {
                if (!pa((0, re.findDOMNode)(e), r)) {
                  var n = ha(t),
                    a = e.props,
                    s = a.range,
                    o = a.rtl;
                  if (
                    ((c = n),
                    (m = (u = r).x),
                    (d = u.y) >= c.top &&
                      d <= c.bottom &&
                      m >= c.left &&
                      m <= c.right)
                  ) {
                    var l = ua(n, r.x, o, s.length);
                    e._selectSlot({
                      startIdx: l,
                      endIdx: l,
                      action: i,
                      box: r,
                    });
                  }
                }
                var c, u, m, d;
                (e._initial = {}), e.setState({ selecting: !1 });
              };
            r.on("selecting", function (i) {
              var n = e.props,
                a = n.range,
                s = n.rtl,
                o = -1,
                l = -1;
              if (
                (e.state.selecting ||
                  (Cn(e.props.onSelectStart, [i]),
                  (e._initial = { x: i.x, y: i.y })),
                r.isSelected(t))
              ) {
                var c = ha(t),
                  u = (function (e, t, r, i, n) {
                    var a = -1,
                      s = -1,
                      o = i - 1,
                      l = ca(t, i),
                      c = ua(t, r.x, n, i),
                      u = t.top < r.y && t.bottom > r.y,
                      m = t.top < e.y && t.bottom > e.y,
                      d = e.y > t.bottom,
                      f = t.top > e.y;
                    return (
                      r.top < t.top &&
                        r.bottom > t.bottom &&
                        ((a = 0), (s = o)),
                      u && (f ? ((a = 0), (s = c)) : d && ((a = c), (s = o))),
                      m &&
                        ((a = s =
                          n
                            ? o - Math.floor((e.x - t.left) / l)
                            : Math.floor((e.x - t.left) / l)),
                        u
                          ? c < a
                            ? (a = c)
                            : (s = c)
                          : e.y < r.y
                          ? (s = o)
                          : (a = 0)),
                      { startIdx: a, endIdx: s }
                    );
                  })(e._initial, c, i, a.length, s);
                (o = u.startIdx), (l = u.endIdx);
              }
              e.setState({ selecting: !0, startIdx: o, endIdx: l });
            }),
              r.on("beforeSelect", function (t) {
                if ("ignoreEvents" === e.props.selectable)
                  return !pa((0, re.findDOMNode)(e), t);
              }),
              r.on("click", function (e) {
                return n(e, "click");
              }),
              r.on("doubleClick", function (e) {
                return n(e, "doubleClick");
              }),
              r.on("select", function (t) {
                e._selectSlot(
                  (0, i.Z)({}, e.state, { action: "select", bounds: t }),
                ),
                  (e._initial = {}),
                  e.setState({ selecting: !1 }),
                  Cn(e.props.onSelectEnd, [e.state]);
              });
          }),
          (r._teardownSelectable = function () {
            this._selector &&
              (this._selector.teardown(), (this._selector = null));
          }),
          (r._selectSlot = function (e) {
            var t = e.endIdx,
              r = e.startIdx,
              i = e.action,
              n = e.bounds,
              a = e.box;
            -1 !== t &&
              -1 !== r &&
              this.props.onSelectSlot &&
              this.props.onSelectSlot({
                start: r,
                end: t,
                action: i,
                bounds: n,
                box: a,
                resourceId: this.props.resourceId,
              });
          }),
          t
        );
      })(l.Component);
      wa.propTypes = {};
      o().object.isRequired,
        o().object,
        o().bool,
        o().object.isRequired,
        o().object.isRequired,
        o().object.isRequired,
        o().object.isRequired,
        o().func,
        o().func,
        o().func;
      var _a = { segments: [], selected: {} },
        za = function (e, t) {
          var r = e.selected,
            i = (e.isAllDay, e.accessors),
            n = e.getters,
            a = e.onSelect,
            s = e.onDoubleClick,
            o = e.onKeyPress,
            c = e.localizer,
            u = e.slotMetrics,
            m = e.components,
            d = e.resizable,
            f = u.continuesPrior(t),
            y = u.continuesAfter(t);
          return l.createElement(oa, {
            event: t,
            getters: n,
            localizer: c,
            accessors: i,
            components: m,
            onSelect: a,
            onDoubleClick: s,
            onKeyPress: o,
            continuesPrior: f,
            continuesAfter: y,
            slotStart: u.first,
            slotEnd: u.last,
            selected: la(t, r),
            resizable: d,
          });
        },
        Ma = function (e, t, r, i) {
          void 0 === i && (i = " ");
          var n = (Math.abs(t) / e) * 100 + "%";
          return l.createElement(
            "div",
            {
              key: r,
              className: "rbc-row-segment",
              style: { WebkitFlexBasis: n, flexBasis: n, maxWidth: n },
            },
            i,
          );
        },
        Sa = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            (0, a.Z)(t, e),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                r = t.segments,
                i = t.slotMetrics.slots,
                n = t.className,
                a = 1;
              return l.createElement(
                "div",
                { className: g(n, "rbc-row") },
                r.reduce(function (t, r, n) {
                  var s = r.event,
                    o = r.left,
                    l = r.right,
                    c = r.span,
                    u = "_lvl_" + n,
                    m = o - a,
                    d = za(e.props, s);
                  return (
                    m && t.push(Ma(i, m, u + "_gap")),
                    t.push(Ma(i, c, u, d)),
                    (a = l + 1),
                    t
                  );
                }, []),
              );
            }),
            t
          );
        })(l.Component);
      function Fa(e) {
        var t = e.dateRange,
          r = e.unit,
          i = void 0 === r ? "day" : r,
          n = e.localizer;
        return { first: t[0], last: n.add(t[t.length - 1], 1, i) };
      }
      function Ra(e, t) {
        void 0 === t && (t = 1 / 0);
        var r,
          i,
          n,
          a = [],
          s = [];
        for (r = 0; r < e.length; r++) {
          for (n = e[r], i = 0; i < a.length && Oa(n, a[i]); i++);
          i >= t ? s.push(n) : (a[i] || (a[i] = [])).push(n);
        }
        for (r = 0; r < a.length; r++)
          a[r].sort(function (e, t) {
            return e.left - t.left;
          });
        return { levels: a, extra: s };
      }
      function Ea(e, t, r, i, n) {
        var a = { start: i.start(e), end: i.end(e) },
          s = { start: t, end: r };
        return n.inEventRange({ event: a, range: s });
      }
      function Oa(e, t) {
        return t.some(function (t) {
          return t.left <= e.right && t.right >= e.left;
        });
      }
      function Wa(e, t, r, i) {
        var n = { start: r.start(e), end: r.end(e), allDay: r.allDay(e) },
          a = { start: r.start(t), end: r.end(t), allDay: r.allDay(t) };
        return i.sortEvents({ evtA: n, evtB: a });
      }
      (Sa.propTypes = {}), (Sa.defaultProps = (0, i.Z)({}, _a));
      var Ta = function (e, t) {
          return e.left <= t && e.right >= t;
        },
        ja = function (e, t) {
          return e.filter(function (e) {
            return Ta(e, t);
          }).length;
        },
        Pa = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          (0, a.Z)(t, e);
          var r = t.prototype;
          return (
            (r.render = function () {
              for (
                var e = this.props,
                  t = e.segments,
                  r = e.slotMetrics.slots,
                  i = Ra(t).levels[0],
                  n = 1,
                  a = 1,
                  s = [];
                n <= r;

              ) {
                var o = "_lvl_" + n,
                  c =
                    i.filter(function (e) {
                      return Ta(e, n);
                    })[0] || {},
                  u = c.event,
                  m = c.left,
                  d = c.right,
                  f = c.span;
                if (u) {
                  var y = Math.max(0, m - a);
                  if (this.canRenderSlotEvent(m, f)) {
                    var p = za(this.props, u);
                    y && s.push(Ma(r, y, o + "_gap")),
                      s.push(Ma(r, f, o, p)),
                      (a = n = d + 1);
                  } else
                    y && s.push(Ma(r, y, o + "_gap")),
                      s.push(Ma(r, 1, o, this.renderShowMore(t, n))),
                      (a = n += 1);
                } else n++;
              }
              return l.createElement("div", { className: "rbc-row" }, s);
            }),
            (r.canRenderSlotEvent = function (e, t) {
              var r = this.props.segments;
              return kr(e, e + t).every(function (e) {
                return 1 === ja(r, e);
              });
            }),
            (r.renderShowMore = function (e, t) {
              var r = this,
                i = this.props.localizer,
                n = ja(e, t);
              return (
                !!n &&
                l.createElement(
                  "a",
                  {
                    key: "sm_" + t,
                    href: "#",
                    className: "rbc-show-more",
                    onClick: function (e) {
                      return r.showMore(t, e);
                    },
                  },
                  i.messages.showMore(n),
                )
              );
            }),
            (r.showMore = function (e, t) {
              t.preventDefault(),
                t.stopPropagation(),
                this.props.onShowMore(e, t.target);
            }),
            t
          );
        })(l.Component);
      (Pa.propTypes = {}), (Pa.defaultProps = (0, i.Z)({}, _a));
      var Ia = function (e) {
          var t = e.children;
          return l.createElement(
            "div",
            { className: "rbc-row-content-scroll-container" },
            t,
          );
        },
        Ca = function (e, t) {
          return e[0].range === t[0].range && e[0].events === t[0].events;
        };
      function xa() {
        return (0, Ur.Z)(function (e) {
          for (
            var t = e.range,
              r = e.events,
              n = e.maxRows,
              a = e.minRows,
              s = e.accessors,
              o = e.localizer,
              l = Fa({ dateRange: t, localizer: o }),
              c = l.first,
              u = l.last,
              m = r.map(function (e) {
                return (function (e, t, r, i) {
                  var n = Fa({ dateRange: t, localizer: i }),
                    a = n.first,
                    s = n.last,
                    o = i.diff(a, s, "day"),
                    l = i.max(i.startOf(r.start(e), "day"), a),
                    c = i.min(i.ceil(r.end(e), "day"), s),
                    u = Ir(t, function (e) {
                      return i.isSameDate(e, l);
                    }),
                    m = i.diff(l, c, "day");
                  return (
                    (m = Math.min(m, o)),
                    {
                      event: e,
                      span: (m = Math.max(m - i.segmentOffset, 1)),
                      left: u + 1,
                      right: Math.max(u + m, 1),
                    }
                  );
                })(e, t, s, o);
              }),
              d = Ra(m, Math.max(n - 1, 1)),
              f = d.levels,
              y = d.extra;
            f.length < a;

          )
            f.push([]);
          return {
            first: c,
            last: u,
            levels: f,
            extra: y,
            range: t,
            slots: t.length,
            clone: function (t) {
              return xa()((0, i.Z)({}, e, t));
            },
            getDateForSlot: function (e) {
              return t[e];
            },
            getSlotForDate: function (e) {
              return t.find(function (t) {
                return o.isSameDate(t, e);
              });
            },
            getEventsForSlot: function (e) {
              return m
                .filter(function (t) {
                  return (function (e, t) {
                    return e.left <= t && e.right >= t;
                  })(t, e);
                })
                .map(function (e) {
                  return e.event;
                });
            },
            continuesPrior: function (e) {
              return o.continuesPrior(s.start(e), c);
            },
            continuesAfter: function (e) {
              var t = s.start(e),
                r = s.end(e);
              return o.continuesAfter(t, r, u);
            },
          };
        }, Ca);
      }
      var Da = (function (e) {
        function t() {
          for (var t, r = arguments.length, i = new Array(r), n = 0; n < r; n++)
            i[n] = arguments[n];
          return (
            ((t = e.call.apply(e, [this].concat(i)) || this).handleSelectSlot =
              function (e) {
                var r = t.props,
                  i = r.range;
                (0, r.onSelectSlot)(i.slice(e.start, e.end + 1), e);
              }),
            (t.handleShowMore = function (e, r) {
              var i,
                n,
                a,
                s = t.props,
                o = s.range,
                l = s.onShowMore,
                c = t.slotMetrics(t.props),
                u = ((i = (0, re.findDOMNode)((0, te.Z)(t))),
                (n = ".rbc-row-bg"),
                Or(i.querySelectorAll(n)))[0];
              u && (a = u.children[e - 1]),
                l(c.getEventsForSlot(e), o[e - 1], a, e, r);
            }),
            (t.createHeadingRef = function (e) {
              t.headingRow = e;
            }),
            (t.createEventRef = function (e) {
              t.eventRow = e;
            }),
            (t.getContainer = function () {
              var e = t.props.container;
              return e ? e() : (0, re.findDOMNode)((0, te.Z)(t));
            }),
            (t.renderHeadingCell = function (e, r) {
              var i = t.props,
                n = i.renderHeader,
                a = i.getNow,
                s = i.localizer;
              return n({
                date: e,
                key: "header_" + r,
                className: g(
                  "rbc-date-cell",
                  s.isSameDate(e, a()) && "rbc-now",
                ),
              });
            }),
            (t.renderDummy = function () {
              var e = t.props,
                r = e.className,
                i = e.range,
                n = e.renderHeader,
                a = e.showAllEvents;
              return l.createElement(
                "div",
                { className: r },
                l.createElement(
                  "div",
                  {
                    className: g(
                      "rbc-row-content",
                      a && "rbc-row-content-scrollable",
                    ),
                  },
                  n &&
                    l.createElement(
                      "div",
                      { className: "rbc-row", ref: t.createHeadingRef },
                      i.map(t.renderHeadingCell),
                    ),
                  l.createElement(
                    "div",
                    { className: "rbc-row", ref: t.createEventRef },
                    l.createElement(
                      "div",
                      { className: "rbc-row-segment" },
                      l.createElement(
                        "div",
                        { className: "rbc-event" },
                        l.createElement(
                          "div",
                          { className: "rbc-event-content" },
                          " ",
                        ),
                      ),
                    ),
                  ),
                ),
              );
            }),
            (t.slotMetrics = xa()),
            t
          );
        }
        (0, a.Z)(t, e);
        var r = t.prototype;
        return (
          (r.getRowLimit = function () {
            var e = Rr(this.eventRow),
              t = this.headingRow ? Rr(this.headingRow) : 0,
              r = Rr((0, re.findDOMNode)(this)) - t;
            return Math.max(Math.floor(r / e), 1);
          }),
          (r.render = function () {
            var e = this.props,
              t = e.date,
              r = e.rtl,
              n = e.range,
              a = e.className,
              s = e.selected,
              o = e.selectable,
              c = e.renderForMeasure,
              u = e.accessors,
              m = e.getters,
              d = e.components,
              f = e.getNow,
              y = e.renderHeader,
              p = e.onSelect,
              B = e.localizer,
              b = e.onSelectStart,
              h = e.onSelectEnd,
              v = e.onDoubleClick,
              w = e.onKeyPress,
              _ = e.resourceId,
              z = e.longPressThreshold,
              M = e.isAllDay,
              S = e.resizable,
              F = e.showAllEvents;
            if (c) return this.renderDummy();
            var R = this.slotMetrics(this.props),
              E = R.levels,
              O = R.extra,
              W = F ? Ia : En,
              T = d.weekWrapper,
              j = {
                selected: s,
                accessors: u,
                getters: m,
                localizer: B,
                components: d,
                onSelect: p,
                onDoubleClick: v,
                onKeyPress: w,
                resourceId: _,
                slotMetrics: R,
                resizable: S,
              };
            return l.createElement(
              "div",
              { className: a, role: "rowgroup" },
              l.createElement(wa, {
                localizer: B,
                date: t,
                getNow: f,
                rtl: r,
                range: n,
                selectable: o,
                container: this.getContainer,
                getters: m,
                onSelectStart: b,
                onSelectEnd: h,
                onSelectSlot: this.handleSelectSlot,
                components: d,
                longPressThreshold: z,
                resourceId: _,
              }),
              l.createElement(
                "div",
                {
                  className: g(
                    "rbc-row-content",
                    F && "rbc-row-content-scrollable",
                  ),
                  role: "row",
                },
                y &&
                  l.createElement(
                    "div",
                    { className: "rbc-row ", ref: this.createHeadingRef },
                    n.map(this.renderHeadingCell),
                  ),
                l.createElement(
                  W,
                  null,
                  l.createElement(
                    T,
                    (0, i.Z)({ isAllDay: M }, j),
                    E.map(function (e, t) {
                      return l.createElement(
                        Sa,
                        (0, i.Z)({ key: t, segments: e }, j),
                      );
                    }),
                    !!O.length &&
                      l.createElement(
                        Pa,
                        (0, i.Z)(
                          { segments: O, onShowMore: this.handleShowMore },
                          j,
                        ),
                      ),
                  ),
                ),
              ),
            );
          }),
          t
        );
      })(l.Component);
      (Da.propTypes = {}), (Da.defaultProps = { minRows: 0, maxRows: 1 / 0 });
      var Aa = function (e) {
        var t = e.label;
        return l.createElement(
          "span",
          { role: "columnheader", "aria-sort": "none" },
          t,
        );
      };
      Aa.propTypes = {};
      var ka = function (e) {
        var t = e.label,
          r = e.drilldownView,
          i = e.onDrillDown;
        return r
          ? l.createElement("a", { href: "#", onClick: i, role: "cell" }, t)
          : l.createElement("span", null, t);
      };
      ka.propTypes = {};
      var Ua = ["date", "className"],
        Na = (function (e) {
          function t() {
            for (
              var t, r = arguments.length, a = new Array(r), s = 0;
              s < r;
              s++
            )
              a[s] = arguments[s];
            return (
              ((t = e.call.apply(e, [this].concat(a)) || this).getContainer =
                function () {
                  return (0, re.findDOMNode)((0, te.Z)(t));
                }),
              (t.renderWeek = function (e, r) {
                var i = t.props,
                  n = i.events,
                  a = i.components,
                  s = i.selectable,
                  o = i.getNow,
                  c = i.selected,
                  u = i.date,
                  m = i.localizer,
                  d = i.longPressThreshold,
                  f = i.accessors,
                  y = i.getters,
                  p = i.showAllEvents,
                  B = t.state,
                  b = B.needLimitMeasure,
                  g = B.rowLimit,
                  h = (function (e, t, r, i, n) {
                    return e.filter(function (e) {
                      return Ea(e, t, r, i, n);
                    });
                  })([].concat(n), e[0], e[e.length - 1], f, m);
                return (
                  h.sort(function (e, t) {
                    return Wa(e, t, f, m);
                  }),
                  l.createElement(Da, {
                    key: r,
                    ref: 0 === r ? t.slotRowRef : void 0,
                    container: t.getContainer,
                    className: "rbc-month-row",
                    getNow: o,
                    date: u,
                    range: e,
                    events: h,
                    maxRows: p ? 1 / 0 : g,
                    selected: c,
                    selectable: s,
                    components: a,
                    accessors: f,
                    getters: y,
                    localizer: m,
                    renderHeader: t.readerDateHeading,
                    renderForMeasure: b,
                    onShowMore: t.handleShowMore,
                    onSelect: t.handleSelectEvent,
                    onDoubleClick: t.handleDoubleClickEvent,
                    onKeyPress: t.handleKeyPressEvent,
                    onSelectSlot: t.handleSelectSlot,
                    longPressThreshold: d,
                    rtl: t.props.rtl,
                    resizable: t.props.resizable,
                    showAllEvents: p,
                  })
                );
              }),
              (t.readerDateHeading = function (e) {
                var r = e.date,
                  a = e.className,
                  s = (0, n.Z)(e, Ua),
                  o = t.props,
                  c = o.date,
                  u = o.getDrilldownView,
                  m = o.localizer,
                  d = m.neq(r, c, "month"),
                  f = m.isSameDate(r, c),
                  y = u(r),
                  p = m.format(r, "dateFormat"),
                  B = t.props.components.dateHeader || ka;
                return l.createElement(
                  "div",
                  (0, i.Z)({}, s, {
                    className: g(a, d && "rbc-off-range", f && "rbc-current"),
                    role: "cell",
                  }),
                  l.createElement(B, {
                    label: p,
                    date: r,
                    drilldownView: y,
                    isOffRange: d,
                    onDrillDown: function (e) {
                      return t.handleHeadingClick(r, y, e);
                    },
                  }),
                );
              }),
              (t.handleSelectSlot = function (e, r) {
                (t._pendingSelection = t._pendingSelection.concat(e)),
                  clearTimeout(t._selectTimer),
                  (t._selectTimer = setTimeout(function () {
                    return t.selectDates(r);
                  }));
              }),
              (t.handleHeadingClick = function (e, r, i) {
                i.preventDefault(),
                  t.clearSelection(),
                  Cn(t.props.onDrillDown, [e, r]);
              }),
              (t.handleSelectEvent = function () {
                t.clearSelection();
                for (
                  var e = arguments.length, r = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  r[i] = arguments[i];
                Cn(t.props.onSelectEvent, r);
              }),
              (t.handleDoubleClickEvent = function () {
                t.clearSelection();
                for (
                  var e = arguments.length, r = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  r[i] = arguments[i];
                Cn(t.props.onDoubleClickEvent, r);
              }),
              (t.handleKeyPressEvent = function () {
                t.clearSelection();
                for (
                  var e = arguments.length, r = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  r[i] = arguments[i];
                Cn(t.props.onKeyPressEvent, r);
              }),
              (t.handleShowMore = function (e, r, i, n, a) {
                var s = t.props,
                  o = s.popup,
                  l = s.onDrillDown,
                  c = s.onShowMore,
                  u = s.getDrilldownView,
                  m = s.doShowMoreDrillDown;
                if ((t.clearSelection(), o)) {
                  var d = Fe(i, (0, re.findDOMNode)((0, te.Z)(t)));
                  t.setState({
                    overlay: { date: r, events: e, position: d, target: a },
                  });
                } else m && Cn(l, [r, u(r) || Pn.DAY]);
                Cn(c, [e, r, n]);
              }),
              (t.overlayDisplay = function () {
                t.setState({ overlay: null });
              }),
              (t._bgRows = []),
              (t._pendingSelection = []),
              (t.slotRowRef = l.createRef()),
              (t.state = { rowLimit: 5, needLimitMeasure: !0 }),
              t
            );
          }
          (0, a.Z)(t, e);
          var r = t.prototype;
          return (
            (r.UNSAFE_componentWillReceiveProps = function (e) {
              var t = e.date,
                r = this.props,
                i = r.date,
                n = r.localizer;
              this.setState({ needLimitMeasure: n.neq(t, i, "month") });
            }),
            (r.componentDidMount = function () {
              var e,
                t = this;
              this.state.needLimitMeasure && this.measureRowLimit(this.props),
                window.addEventListener(
                  "resize",
                  (this._resizeListener = function () {
                    e ||
                      Pe(function () {
                        (e = !1), t.setState({ needLimitMeasure: !0 });
                      });
                  }),
                  !1,
                );
            }),
            (r.componentDidUpdate = function () {
              this.state.needLimitMeasure && this.measureRowLimit(this.props);
            }),
            (r.componentWillUnmount = function () {
              window.removeEventListener("resize", this._resizeListener, !1);
            }),
            (r.render = function () {
              var e = this.props,
                t = e.date,
                r = e.localizer,
                i = e.className,
                n = r.visibleDays(t, r),
                a = me(n, 7);
              return (
                (this._weekCount = a.length),
                l.createElement(
                  "div",
                  {
                    className: g("rbc-month-view", i),
                    role: "table",
                    "aria-label": "Month View",
                  },
                  l.createElement(
                    "div",
                    { className: "rbc-row rbc-month-header", role: "row" },
                    this.renderHeaders(a[0]),
                  ),
                  a.map(this.renderWeek),
                  this.props.popup && this.renderOverlay(),
                )
              );
            }),
            (r.renderHeaders = function (e) {
              var t = this.props,
                r = t.localizer,
                i = t.components,
                n = e[0],
                a = e[e.length - 1],
                s = i.header || Aa;
              return r.range(n, a, "day").map(function (e, t) {
                return l.createElement(
                  "div",
                  { key: "header_" + t, className: "rbc-header" },
                  l.createElement(s, {
                    date: e,
                    localizer: r,
                    label: r.format(e, "weekdayFormat"),
                  }),
                );
              });
            }),
            (r.renderOverlay = function () {
              var e = this,
                t = (this.state && this.state.overlay) || {},
                r = this.props,
                n = r.accessors,
                a = r.localizer,
                s = r.components,
                o = r.getters,
                c = r.selected,
                u = r.popupOffset;
              return l.createElement(
                Fr,
                {
                  rootClose: !0,
                  placement: "bottom",
                  show: !!t.position,
                  onHide: function () {
                    return e.setState({ overlay: null });
                  },
                  target: function () {
                    return t.target;
                  },
                },
                function (r) {
                  var m = r.props;
                  return l.createElement(
                    da,
                    (0, i.Z)({}, m, {
                      popupOffset: u,
                      accessors: n,
                      getters: o,
                      selected: c,
                      components: s,
                      localizer: a,
                      position: t.position,
                      show: e.overlayDisplay,
                      events: t.events,
                      slotStart: t.date,
                      slotEnd: t.end,
                      onSelect: e.handleSelectEvent,
                      onDoubleClick: e.handleDoubleClickEvent,
                      onKeyPress: e.handleKeyPressEvent,
                      handleDragStart: e.props.handleDragStart,
                    }),
                  );
                },
              );
            }),
            (r.measureRowLimit = function () {
              this.setState({
                needLimitMeasure: !1,
                rowLimit: this.slotRowRef.current.getRowLimit(),
              });
            }),
            (r.selectDates = function (e) {
              var t = this._pendingSelection.slice();
              (this._pendingSelection = []),
                t.sort(function (e, t) {
                  return +e - +t;
                });
              var r = new Date(t[0]),
                i = new Date(t[t.length - 1]);
              i.setDate(t[t.length - 1].getDate() + 1),
                Cn(this.props.onSelectSlot, {
                  slots: t,
                  start: r,
                  end: i,
                  action: e.action,
                  bounds: e.bounds,
                  box: e.box,
                });
            }),
            (r.clearSelection = function () {
              clearTimeout(this._selectTimer), (this._pendingSelection = []);
            }),
            t
          );
        })(l.Component);
      (Na.propTypes = {}),
        (Na.range = function (e, t) {
          var r = t.localizer;
          return {
            start: r.firstVisibleDay(e, r),
            end: r.lastVisibleDay(e, r),
          };
        }),
        (Na.navigate = function (e, t, r) {
          var i = r.localizer;
          switch (t) {
            case On:
              return i.add(e, -1, "month");
            case Wn:
              return i.add(e, 1, "month");
            default:
              return e;
          }
        }),
        (Na.title = function (e, t) {
          return t.localizer.format(e, "monthHeaderFormat");
        });
      var Xa = function (e) {
        var t = e.min,
          r = e.max,
          i = e.step,
          n = e.slots,
          a = e.localizer;
        return (
          +a.startOf(t, "minutes") +
          ("" + +a.startOf(r, "minutes")) +
          i +
          "-" +
          n
        );
      };
      function Ga(e) {
        for (
          var t = e.min,
            r = e.max,
            i = e.step,
            n = e.timeslots,
            a = e.localizer,
            s = Xa({ start: t, end: r, step: i, timeslots: n, localizer: a }),
            o = 1 + a.getTotalMin(t, r),
            l = a.getMinutesFromMidnight(t),
            c = Math.ceil((o - 1) / (i * n)),
            u = c * n,
            m = new Array(c),
            d = new Array(u),
            f = 0;
          f < c;
          f++
        ) {
          m[f] = new Array(n);
          for (var y = 0; y < n; y++) {
            var p = f * n + y,
              B = p * i;
            d[p] = m[f][y] = a.getSlotDate(t, l, B);
          }
        }
        var b = d.length * i;
        function g(e) {
          var r = a.diff(t, e, "minutes") + a.getDstOffset(t, e);
          return Math.min(r, o);
        }
        return (
          d.push(a.getSlotDate(t, l, b)),
          {
            groups: m,
            update: function (e) {
              return Xa(e) !== s ? Ga(e) : this;
            },
            dateIsInGroup: function (e, t) {
              var i = m[t + 1];
              return a.inRange(e, m[t][0], i ? i[0] : r, "minutes");
            },
            nextSlot: function (e) {
              var t = d[Math.min(d.indexOf(e) + 1, d.length - 1)];
              return t === e && (t = a.add(e, i, "minutes")), t;
            },
            closestSlotToPosition: function (e) {
              var t = Math.min(d.length - 1, Math.max(0, Math.floor(e * u)));
              return d[t];
            },
            closestSlotFromPoint: function (e, t) {
              var r = Math.abs(t.top - t.bottom);
              return this.closestSlotToPosition((e.y - t.top) / r);
            },
            closestSlotFromDate: function (e, r) {
              if ((void 0 === r && (r = 0), a.lt(e, t, "minutes"))) return d[0];
              var n = a.diff(t, e, "minutes");
              return d[(n - (n % i)) / i + r];
            },
            startsBeforeDay: function (e) {
              return a.lt(e, t, "day");
            },
            startsAfterDay: function (e) {
              return a.gt(e, r, "day");
            },
            startsBefore: function (e) {
              return a.lt(a.merge(t, e), t, "minutes");
            },
            startsAfter: function (e) {
              return a.gt(a.merge(r, e), r, "minutes");
            },
            getRange: function (e, n, s, o) {
              s || (e = a.min(r, a.max(t, e))),
                o || (n = a.min(r, a.max(t, n)));
              var l = g(e),
                c = g(n),
                m =
                  c > i * u && !a.eq(r, n)
                    ? ((l - i) / (i * u)) * 100
                    : (l / (i * u)) * 100;
              return {
                top: m,
                height: (c / (i * u)) * 100 - m,
                start: g(e),
                startDate: e,
                end: g(n),
                endDate: n,
              };
            },
            getCurrentTimePosition: function (e) {
              return (g(e) / (i * u)) * 100;
            },
          }
        );
      }
      var La = (function () {
        function e(e, t) {
          var r = t.accessors,
            i = t.slotMetrics.getRange(r.start(e), r.end(e)),
            n = i.start,
            a = i.startDate,
            s = i.end,
            o = i.endDate,
            l = i.top,
            c = i.height;
          (this.start = n),
            (this.end = s),
            (this.startMs = +a),
            (this.endMs = +o),
            (this.top = l),
            (this.height = c),
            (this.data = e);
        }
        return (
          (0, Nr.Z)(e, [
            {
              key: "_width",
              get: function () {
                if (this.rows) {
                  var e =
                    this.rows.reduce(function (e, t) {
                      return Math.max(e, t.leaves.length + 1);
                    }, 0) + 1;
                  return 100 / e;
                }
                var t = 100 - this.container._width;
                return this.leaves
                  ? t / (this.leaves.length + 1)
                  : this.row._width;
              },
            },
            {
              key: "width",
              get: function () {
                var e = this._width,
                  t = Math.min(100, 1.7 * this._width);
                if (this.rows) return t;
                if (this.leaves) return this.leaves.length > 0 ? t : e;
                var r = this.row.leaves;
                return r.indexOf(this) === r.length - 1 ? e : t;
              },
            },
            {
              key: "xOffset",
              get: function () {
                if (this.rows) return 0;
                if (this.leaves) return this.container._width;
                var e = this.row,
                  t = e.leaves,
                  r = e.xOffset,
                  i = e._width;
                return r + (t.indexOf(this) + 1) * i;
              },
            },
          ]),
          e
        );
      })();
      function qa(e, t, r) {
        return (
          Math.abs(t.start - e.start) < r ||
          (t.start > e.start && t.start < e.end)
        );
      }
      function Za(e) {
        for (
          var t = e.events,
            r = e.minimumStartDifference,
            i = e.slotMetrics,
            n = e.accessors,
            a = (function (e) {
              for (
                var t = si(e, [
                    "startMs",
                    function (e) {
                      return -e.endMs;
                    },
                  ]),
                  r = [];
                t.length > 0;

              ) {
                var i = t.shift();
                r.push(i);
                for (var n = 0; n < t.length; n++) {
                  var a = t[n];
                  if (!(i.endMs > a.startMs)) {
                    if (n > 0) {
                      var s = t.splice(n, 1)[0];
                      r.push(s);
                    }
                    break;
                  }
                }
              }
              return r;
            })(
              t.map(function (e) {
                return new La(e, { slotMetrics: i, accessors: n });
              }),
            ),
            s = [],
            o = function (e) {
              var t = a[e],
                i = s.find(function (e) {
                  return e.end > t.start || Math.abs(t.start - e.start) < r;
                });
              if (!i) return (t.rows = []), s.push(t), "continue";
              t.container = i;
              for (var n = null, o = i.rows.length - 1; !n && o >= 0; o--)
                qa(i.rows[o], t, r) && (n = i.rows[o]);
              n
                ? (n.leaves.push(t), (t.row = n))
                : ((t.leaves = []), i.rows.push(t));
            },
            l = 0;
          l < a.length;
          l++
        )
          o(l);
        return a.map(function (e) {
          return {
            event: e.data,
            style: {
              top: e.top,
              height: e.height,
              width: e.width,
              xOffset: Math.max(0, e.xOffset),
            },
          };
        });
      }
      function Ha(e, t, r) {
        for (var i = 0; i < e.friends.length; ++i)
          if (!(r.indexOf(e.friends[i]) > -1)) {
            (t = t > e.friends[i].idx ? t : e.friends[i].idx),
              r.push(e.friends[i]);
            var n = Ha(e.friends[i], t, r);
            t = t > n ? t : n;
          }
        return t;
      }
      var Ka = {
        overlap: Za,
        "no-overlap": function (e) {
          var t = Za({
            events: e.events,
            minimumStartDifference: e.minimumStartDifference,
            slotMetrics: e.slotMetrics,
            accessors: e.accessors,
          });
          t.sort(function (e, t) {
            return (
              (e = e.style),
              (t = t.style),
              e.top !== t.top
                ? e.top > t.top
                  ? 1
                  : -1
                : e.top + e.height < t.top + t.height
                ? 1
                : -1
            );
          });
          for (var r = 0; r < t.length; ++r)
            (t[r].friends = []),
              delete t[r].style.left,
              delete t[r].style.left,
              delete t[r].idx,
              delete t[r].size;
          for (var i = 0; i < t.length - 1; ++i)
            for (
              var n = t[i],
                a = n.style.top,
                s = n.style.top + n.style.height,
                o = i + 1;
              o < t.length;
              ++o
            ) {
              var l = t[o],
                c = l.style.top,
                u = l.style.top + l.style.height;
              ((c <= a && a < u) || (a <= c && c < s)) &&
                (n.friends.push(l), l.friends.push(n));
            }
          for (var m = 0; m < t.length; ++m) {
            for (var d = t[m], f = [], y = 0; y < 100; ++y) f.push(1);
            for (var p = 0; p < d.friends.length; ++p)
              void 0 !== d.friends[p].idx && (f[d.friends[p].idx] = 0);
            d.idx = f.indexOf(1);
          }
          for (var B = 0; B < t.length; ++B) {
            var b;
            if (!t[B].size) {
              var g = [];
              (b = 100 / (Ha(t[B], 0, g) + 1)), (t[B].size = b);
              for (var h = 0; h < g.length; ++h) g[h].size = b;
            }
          }
          for (var v = 0; v < t.length; ++v) {
            var w = t[v];
            w.style.left = w.idx * w.size;
            for (var _ = 0, z = 0; z < w.friends.length; ++z) {
              var M = w.friends[z].idx;
              _ = _ > M ? _ : M;
            }
            _ <= w.idx && (w.size = 100 - w.idx * w.size);
            var S = 0 === w.idx ? 0 : 3;
            (w.style.width = "calc(" + w.size + "% - " + S + "px)"),
              (w.style.height = "calc(" + w.style.height + "% - 2px)"),
              (w.style.xOffset = "calc(" + w.style.left + "% + " + S + "px)");
          }
          return t;
        },
      };
      var Va = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          (0, a.Z)(t, e),
          (t.prototype.render = function () {
            var e = this.props,
              t = e.renderSlot,
              r = e.resource,
              n = e.group,
              a = e.getters,
              s = e.components,
              o = (s = void 0 === s ? {} : s).timeSlotWrapper,
              c = void 0 === o ? En : o,
              u = a ? a.slotGroupProp() : {};
            return l.createElement(
              "div",
              (0, i.Z)({ className: "rbc-timeslot-group" }, u),
              n.map(function (e, n) {
                var s = a ? a.slotProp(e, r) : {};
                return l.createElement(
                  c,
                  { key: n, value: e, resource: r },
                  l.createElement(
                    "div",
                    (0, i.Z)({}, s, {
                      className: g("rbc-time-slot", s.className),
                    }),
                    t && t(e, n),
                  ),
                );
              }),
            );
          }),
          t
        );
      })(l.Component);
      function Ya(e) {
        return "string" == typeof e ? e : e + "%";
      }
      function $a(e) {
        var t,
          r,
          n = e.style,
          a = e.className,
          s = e.event,
          o = e.accessors,
          c = e.rtl,
          u = e.selected,
          m = e.label,
          d = e.continuesPrior,
          f = e.continuesAfter,
          y = e.getters,
          p = e.onClick,
          B = e.onDoubleClick,
          b = e.isBackgroundEvent,
          h = e.onKeyPress,
          v = e.components,
          w = v.event,
          _ = v.eventWrapper,
          z = o.title(s),
          M = o.tooltip(s),
          S = o.end(s),
          F = o.start(s),
          R = y.eventProp(s, F, S, u),
          E = n.height,
          O = n.top,
          W = n.width,
          T = n.xOffset,
          j = [
            l.createElement(
              "div",
              { key: "1", className: "rbc-event-label" },
              m,
            ),
            l.createElement(
              "div",
              { key: "2", className: "rbc-event-content" },
              w ? l.createElement(w, { event: s, title: z }) : z,
            ),
          ],
          P = b
            ? (0, i.Z)(
                {},
                R.style,
                (((t = {
                  top: Ya(O),
                  height: Ya(E),
                  width: "calc(" + W + " + 10px)",
                })[c ? "right" : "left"] = Ya(Math.max(0, T))),
                t),
              )
            : (0, i.Z)(
                {},
                R.style,
                (((r = { top: Ya(O), width: Ya(W), height: Ya(E) })[
                  c ? "right" : "left"
                ] = Ya(T)),
                r),
              );
        return l.createElement(
          _,
          (0, i.Z)({ type: "time" }, e),
          l.createElement(
            "div",
            {
              onClick: p,
              onDoubleClick: B,
              style: P,
              onKeyPress: h,
              title: M ? ("string" == typeof m ? m + ": " : "") + M : void 0,
              className: g(
                b ? "rbc-background-event" : "rbc-event",
                a,
                R.className,
                {
                  "rbc-selected": u,
                  "rbc-event-continues-earlier": d,
                  "rbc-event-continues-later": f,
                },
              ),
            },
            j,
          ),
        );
      }
      Va.propTypes = {};
      var Ja = function (e) {
          var t = e.children,
            r = e.className,
            i = e.style;
          return l.createElement("div", { className: r, style: i }, t);
        },
        Qa = ["dayProp"],
        es = ["eventContainerWrapper"],
        ts = (function (e) {
          function t() {
            for (
              var t, r = arguments.length, n = new Array(r), a = 0;
              a < r;
              a++
            )
              n[a] = arguments[a];
            return (
              ((t = e.call.apply(e, [this].concat(n)) || this).state = {
                selecting: !1,
                timeIndicatorPosition: null,
              }),
              (t.intervalTriggered = !1),
              (t.renderEvents = function (e) {
                var r = e.events,
                  i = e.isBackgroundEvent,
                  n = t.props,
                  a = n.rtl,
                  s = n.selected,
                  o = n.accessors,
                  c = n.localizer,
                  u = n.getters,
                  m = n.components,
                  d = n.step,
                  f = n.timeslots,
                  y = n.dayLayoutAlgorithm,
                  p = n.resizable,
                  B = (0, te.Z)(t).slotMetrics,
                  b = c.messages,
                  g = (function (e) {
                    e.events,
                      e.minimumStartDifference,
                      e.slotMetrics,
                      e.accessors;
                    var t,
                      r = e.dayLayoutAlgorithm,
                      i = r;
                    return (
                      r in Ka && (i = Ka[r]),
                      (t = i) && t.constructor && t.call && t.apply
                        ? i.apply(this, arguments)
                        : []
                    );
                  })({
                    events: r,
                    accessors: o,
                    slotMetrics: B,
                    minimumStartDifference: Math.ceil((d * f) / 2),
                    dayLayoutAlgorithm: y,
                  });
                return g.map(function (e, r) {
                  var n,
                    d = e.event,
                    f = e.style,
                    y = o.end(d),
                    g = o.start(d),
                    h = "eventTimeRangeFormat",
                    v = B.startsBeforeDay(g),
                    w = B.startsAfterDay(y);
                  v
                    ? (h = "eventTimeRangeEndFormat")
                    : w && (h = "eventTimeRangeStartFormat"),
                    (n = v && w ? b.allDay : c.format({ start: g, end: y }, h));
                  var _ = v || B.startsBefore(g),
                    z = w || B.startsAfter(y);
                  return l.createElement($a, {
                    style: f,
                    event: d,
                    label: n,
                    key: "evt_" + r,
                    getters: u,
                    rtl: a,
                    components: m,
                    continuesPrior: _,
                    continuesAfter: z,
                    accessors: o,
                    selected: la(d, s),
                    onClick: function (e) {
                      return t._select(d, e);
                    },
                    onDoubleClick: function (e) {
                      return t._doubleClick(d, e);
                    },
                    isBackgroundEvent: i,
                    onKeyPress: function (e) {
                      return t._keyPress(d, e);
                    },
                    resizable: p,
                  });
                });
              }),
              (t._selectable = function () {
                var e = (0, re.findDOMNode)((0, te.Z)(t)),
                  r = t.props,
                  n = r.longPressThreshold,
                  a = r.localizer,
                  s = (t._selector = new ba(
                    function () {
                      return (0, re.findDOMNode)((0, te.Z)(t));
                    },
                    { longPressThreshold: n },
                  )),
                  o = function (e) {
                    var r = t.props.onSelecting,
                      i = t.state || {},
                      n = l(e),
                      s = n.startDate,
                      o = n.endDate;
                    (r &&
                      ((a.eq(i.startDate, s, "minutes") &&
                        a.eq(i.endDate, o, "minutes")) ||
                        !1 ===
                          r({
                            start: s,
                            end: o,
                            resourceId: t.props.resource,
                          }))) ||
                      (t.state.start === n.start &&
                        t.state.end === n.end &&
                        t.state.selecting === n.selecting) ||
                      t.setState(n);
                  },
                  l = function (r) {
                    var n = t.slotMetrics.closestSlotFromPoint(r, ha(e));
                    t.state.selecting || (t._initialSlot = n);
                    var s = t._initialSlot;
                    a.lte(s, n)
                      ? (n = t.slotMetrics.nextSlot(n))
                      : a.gt(s, n) && (s = t.slotMetrics.nextSlot(s));
                    var o = t.slotMetrics.getRange(a.min(s, n), a.max(s, n));
                    return (0, i.Z)({}, o, {
                      selecting: !0,
                      top: o.top + "%",
                      height: o.height + "%",
                    });
                  },
                  c = function (e, r) {
                    if (!pa((0, re.findDOMNode)((0, te.Z)(t)), e)) {
                      var i = l(e),
                        n = i.startDate,
                        a = i.endDate;
                      t._selectSlot({
                        startDate: n,
                        endDate: a,
                        action: r,
                        box: e,
                      });
                    }
                    t.setState({ selecting: !1 });
                  };
                s.on("selecting", o),
                  s.on("selectStart", o),
                  s.on("beforeSelect", function (e) {
                    if ("ignoreEvents" === t.props.selectable)
                      return !pa((0, re.findDOMNode)((0, te.Z)(t)), e);
                  }),
                  s.on("click", function (e) {
                    return c(e, "click");
                  }),
                  s.on("doubleClick", function (e) {
                    return c(e, "doubleClick");
                  }),
                  s.on("select", function (e) {
                    t.state.selecting &&
                      (t._selectSlot(
                        (0, i.Z)({}, t.state, { action: "select", bounds: e }),
                      ),
                      t.setState({ selecting: !1 }));
                  }),
                  s.on("reset", function () {
                    t.state.selecting && t.setState({ selecting: !1 });
                  });
              }),
              (t._teardownSelectable = function () {
                t._selector && (t._selector.teardown(), (t._selector = null));
              }),
              (t._selectSlot = function (e) {
                for (
                  var r = e.startDate,
                    i = e.endDate,
                    n = e.action,
                    a = e.bounds,
                    s = e.box,
                    o = r,
                    l = [];
                  t.props.localizer.lte(o, i);

                )
                  l.push(o), (o = new Date(+o + 60 * t.props.step * 1e3));
                Cn(t.props.onSelectSlot, {
                  slots: l,
                  start: r,
                  end: i,
                  resourceId: t.props.resource,
                  action: n,
                  bounds: a,
                  box: s,
                });
              }),
              (t._select = function () {
                for (
                  var e = arguments.length, r = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  r[i] = arguments[i];
                Cn(t.props.onSelectEvent, r);
              }),
              (t._doubleClick = function () {
                for (
                  var e = arguments.length, r = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  r[i] = arguments[i];
                Cn(t.props.onDoubleClickEvent, r);
              }),
              (t._keyPress = function () {
                for (
                  var e = arguments.length, r = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  r[i] = arguments[i];
                Cn(t.props.onKeyPressEvent, r);
              }),
              (t.slotMetrics = Ga(t.props)),
              t
            );
          }
          (0, a.Z)(t, e);
          var r = t.prototype;
          return (
            (r.componentDidMount = function () {
              this.props.selectable && this._selectable(),
                this.props.isNow &&
                  this.setTimeIndicatorPositionUpdateInterval();
            }),
            (r.componentWillUnmount = function () {
              this._teardownSelectable(), this.clearTimeIndicatorInterval();
            }),
            (r.UNSAFE_componentWillReceiveProps = function (e) {
              e.selectable && !this.props.selectable && this._selectable(),
                !e.selectable &&
                  this.props.selectable &&
                  this._teardownSelectable(),
                (this.slotMetrics = this.slotMetrics.update(e));
            }),
            (r.componentDidUpdate = function (e, t) {
              var r = this.props,
                i = r.getNow,
                n = r.isNow,
                a = r.localizer,
                s = r.date,
                o = r.min,
                l = r.max,
                c = a.neq(e.getNow(), i(), "minutes");
              if (e.isNow !== n || c) {
                if ((this.clearTimeIndicatorInterval(), n)) {
                  var u =
                    !c &&
                    a.eq(e.date, s, "minutes") &&
                    t.timeIndicatorPosition ===
                      this.state.timeIndicatorPosition;
                  this.setTimeIndicatorPositionUpdateInterval(u);
                }
              } else
                n &&
                  (a.neq(e.min, o, "minutes") || a.neq(e.max, l, "minutes")) &&
                  this.positionTimeIndicator();
            }),
            (r.setTimeIndicatorPositionUpdateInterval = function (e) {
              var t = this;
              void 0 === e && (e = !1),
                this.intervalTriggered || e || this.positionTimeIndicator(),
                (this._timeIndicatorTimeout = window.setTimeout(function () {
                  (t.intervalTriggered = !0),
                    t.positionTimeIndicator(),
                    t.setTimeIndicatorPositionUpdateInterval();
                }, 6e4));
            }),
            (r.clearTimeIndicatorInterval = function () {
              (this.intervalTriggered = !1),
                window.clearTimeout(this._timeIndicatorTimeout);
            }),
            (r.positionTimeIndicator = function () {
              var e = this.props,
                t = e.min,
                r = e.max,
                i = (0, e.getNow)();
              if (i >= t && i <= r) {
                var n = this.slotMetrics.getCurrentTimePosition(i);
                (this.intervalTriggered = !0),
                  this.setState({ timeIndicatorPosition: n });
              } else this.clearTimeIndicatorInterval();
            }),
            (r.render = function () {
              var e = this.props,
                t = e.date,
                r = e.max,
                i = e.rtl,
                a = e.isNow,
                s = e.resource,
                o = e.accessors,
                c = e.localizer,
                u = e.getters,
                m = u.dayProp,
                d = (0, n.Z)(u, Qa),
                f = e.components,
                y = f.eventContainerWrapper,
                p = (0, n.Z)(f, es),
                B = this.slotMetrics,
                b = this.state,
                h = b.selecting,
                v = b.top,
                w = b.height,
                _ = { start: b.startDate, end: b.endDate },
                z = m(r),
                M = z.className,
                S = z.style,
                F = p.dayColumnWrapper || Ja;
              return l.createElement(
                F,
                {
                  date: t,
                  style: S,
                  className: g(
                    M,
                    "rbc-day-slot",
                    "rbc-time-column",
                    a && "rbc-now",
                    a && "rbc-today",
                    h && "rbc-slot-selecting",
                  ),
                },
                B.groups.map(function (e, t) {
                  return l.createElement(Va, {
                    key: t,
                    group: e,
                    resource: s,
                    getters: d,
                    components: p,
                  });
                }),
                l.createElement(
                  y,
                  {
                    localizer: c,
                    resource: s,
                    accessors: o,
                    getters: d,
                    components: p,
                    slotMetrics: B,
                  },
                  l.createElement(
                    "div",
                    { className: g("rbc-events-container", i && "rtl") },
                    this.renderEvents({
                      events: this.props.backgroundEvents,
                      isBackgroundEvent: !0,
                    }),
                    this.renderEvents({ events: this.props.events }),
                  ),
                ),
                h &&
                  l.createElement(
                    "div",
                    {
                      className: "rbc-slot-selection",
                      style: { top: v, height: w },
                    },
                    l.createElement(
                      "span",
                      null,
                      c.format(_, "selectRangeFormat"),
                    ),
                  ),
                a &&
                  this.intervalTriggered &&
                  l.createElement("div", {
                    className: "rbc-current-time-indicator",
                    style: { top: this.state.timeIndicatorPosition + "%" },
                  }),
              );
            }),
            t
          );
        })(l.Component);
      function rs(e) {
        var t = e.min,
          r = e.max,
          i = e.localizer;
        return i.getTimezoneOffset(t) !== i.getTimezoneOffset(r)
          ? { start: i.add(t, -1, "day"), end: i.add(r, -1, "day") }
          : { start: t, end: r };
      }
      (ts.propTypes = {}),
        (ts.defaultProps = { dragThroughEvents: !0, timeslots: 2 });
      var is = (function (e) {
        function t() {
          for (var t, r = arguments.length, i = new Array(r), n = 0; n < r; n++)
            i[n] = arguments[n];
          (t = e.call.apply(e, [this].concat(i)) || this).renderSlot =
            function (e, r) {
              if (0 !== r) return null;
              var i = t.props,
                n = i.localizer,
                a = i.getNow,
                s = t.slotMetrics.dateIsInGroup(a(), r);
              return l.createElement(
                "span",
                { className: g("rbc-label", s && "rbc-now") },
                n.format(e, "timeGutterFormat"),
              );
            };
          var a = t.props,
            s = a.min,
            o = a.max,
            c = a.timeslots,
            u = a.step,
            m = a.localizer,
            d = rs({ min: s, max: o, localizer: m }),
            f = d.start,
            y = d.end;
          return (
            (t.slotMetrics = Ga({
              min: f,
              max: y,
              timeslots: c,
              step: u,
              localizer: m,
            })),
            t
          );
        }
        (0, a.Z)(t, e);
        var r = t.prototype;
        return (
          (r.UNSAFE_componentWillReceiveProps = function (e) {
            var t = rs({ min: e.min, max: e.max, localizer: e.localizer }),
              r = t.start,
              n = t.end;
            this.slotMetrics = this.slotMetrics.update(
              (0, i.Z)({}, e, { min: r, max: n }),
            );
          }),
          (r.render = function () {
            var e = this,
              t = this.props,
              r = t.resource,
              i = t.components,
              n = t.getters;
            return l.createElement(
              "div",
              { className: "rbc-time-gutter rbc-time-column" },
              this.slotMetrics.groups.map(function (t, a) {
                return l.createElement(Va, {
                  key: a,
                  group: t,
                  resource: r,
                  components: i,
                  renderSlot: e.renderSlot,
                  getters: n,
                });
              }),
            );
          }),
          t
        );
      })(l.Component);
      is.propTypes = {};
      var ns = function (e) {
        var t = e.label;
        return l.createElement(l.Fragment, null, t);
      };
      ns.propTypes = {};
      var as = (function (e) {
        function t() {
          for (var t, r = arguments.length, i = new Array(r), n = 0; n < r; n++)
            i[n] = arguments[n];
          return (
            ((t = e.call.apply(e, [this].concat(i)) || this).handleHeaderClick =
              function (e, r, i) {
                i.preventDefault(), Cn(t.props.onDrillDown, [e, r]);
              }),
            (t.renderRow = function (e) {
              var r = t.props,
                i = r.events,
                n = r.rtl,
                a = r.selectable,
                s = r.getNow,
                o = r.range,
                c = r.getters,
                u = r.localizer,
                m = r.accessors,
                d = r.components,
                f = r.resizable,
                y = m.resourceId(e),
                p = e
                  ? i.filter(function (e) {
                      return m.resource(e) === y;
                    })
                  : i;
              return l.createElement(Da, {
                isAllDay: !0,
                rtl: n,
                getNow: s,
                minRows: 2,
                range: o,
                events: p,
                resourceId: y,
                className: "rbc-allday-cell",
                selectable: a,
                selected: t.props.selected,
                components: d,
                accessors: m,
                getters: c,
                localizer: u,
                onSelect: t.props.onSelectEvent,
                onDoubleClick: t.props.onDoubleClickEvent,
                onKeyPress: t.props.onKeyPressEvent,
                onSelectSlot: t.props.onSelectSlot,
                longPressThreshold: t.props.longPressThreshold,
                resizable: f,
              });
            }),
            t
          );
        }
        (0, a.Z)(t, e);
        var r = t.prototype;
        return (
          (r.renderHeaderCells = function (e) {
            var t = this,
              r = this.props,
              i = r.localizer,
              n = r.getDrilldownView,
              a = r.getNow,
              s = r.getters.dayProp,
              o = r.components.header,
              c = void 0 === o ? Aa : o,
              u = a();
            return e.map(function (e, r) {
              var a = n(e),
                o = i.format(e, "dayFormat"),
                m = s(e),
                d = m.className,
                f = m.style,
                y = l.createElement(c, { date: e, label: o, localizer: i });
              return l.createElement(
                "div",
                {
                  key: r,
                  style: f,
                  className: g(
                    "rbc-header",
                    d,
                    i.isSameDate(e, u) && "rbc-today",
                  ),
                },
                a
                  ? l.createElement(
                      "a",
                      {
                        href: "#",
                        onClick: function (r) {
                          return t.handleHeaderClick(e, a, r);
                        },
                      },
                      y,
                    )
                  : l.createElement("span", null, y),
              );
            });
          }),
          (r.render = function () {
            var e = this,
              t = this.props,
              r = t.width,
              i = t.rtl,
              n = t.resources,
              a = t.range,
              s = t.events,
              o = t.getNow,
              c = t.accessors,
              u = t.selectable,
              m = t.components,
              d = t.getters,
              f = t.scrollRef,
              y = t.localizer,
              p = t.isOverflowing,
              B = t.components,
              b = B.timeGutterHeader,
              h = B.resourceHeader,
              v = void 0 === h ? ns : h,
              w = t.resizable,
              _ = {};
            p && (_[i ? "marginLeft" : "marginRight"] = ci() + "px");
            var z = n.groupEvents(s);
            return l.createElement(
              "div",
              {
                style: _,
                ref: f,
                className: g("rbc-time-header", p && "rbc-overflowing"),
              },
              l.createElement(
                "div",
                {
                  className: "rbc-label rbc-time-header-gutter",
                  style: { width: r, minWidth: r, maxWidth: r },
                },
                b && l.createElement(b, null),
              ),
              n.map(function (t, r) {
                var n = t[0],
                  s = t[1];
                return l.createElement(
                  "div",
                  { className: "rbc-time-header-content", key: n || r },
                  s &&
                    l.createElement(
                      "div",
                      {
                        className: "rbc-row rbc-row-resource",
                        key: "resource_" + r,
                      },
                      l.createElement(
                        "div",
                        { className: "rbc-header" },
                        l.createElement(v, {
                          index: r,
                          label: c.resourceTitle(s),
                          resource: s,
                        }),
                      ),
                    ),
                  l.createElement(
                    "div",
                    {
                      className:
                        "rbc-row rbc-time-header-cell" +
                        (a.length <= 1
                          ? " rbc-time-header-cell-single-day"
                          : ""),
                    },
                    e.renderHeaderCells(a),
                  ),
                  l.createElement(Da, {
                    isAllDay: !0,
                    rtl: i,
                    getNow: o,
                    minRows: 2,
                    range: a,
                    events: z.get(n) || [],
                    resourceId: s && n,
                    className: "rbc-allday-cell",
                    selectable: u,
                    selected: e.props.selected,
                    components: m,
                    accessors: c,
                    getters: d,
                    localizer: y,
                    onSelect: e.props.onSelectEvent,
                    onDoubleClick: e.props.onDoubleClickEvent,
                    onKeyPress: e.props.onKeyPressEvent,
                    onSelectSlot: e.props.onSelectSlot,
                    longPressThreshold: e.props.longPressThreshold,
                    resizable: w,
                  }),
                );
              }),
            );
          }),
          t
        );
      })(l.Component);
      as.propTypes = {};
      var ss = {};
      var os = (function (e) {
        function t(t) {
          var r;
          return (
            ((r = e.call(this, t) || this).handleScroll = function (e) {
              r.scrollRef.current &&
                (r.scrollRef.current.scrollLeft = e.target.scrollLeft);
            }),
            (r.handleResize = function () {
              je(r.rafHandle), (r.rafHandle = Pe(r.checkOverflow));
            }),
            (r.gutterRef = function (e) {
              r.gutter = e && (0, re.findDOMNode)(e);
            }),
            (r.handleSelectAlldayEvent = function () {
              r.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), i = 0;
                i < e;
                i++
              )
                t[i] = arguments[i];
              Cn(r.props.onSelectEvent, t);
            }),
            (r.handleSelectAllDaySlot = function (e, t) {
              var i = r.props.onSelectSlot,
                n = new Date(e[0]),
                a = new Date(e[e.length - 1]);
              a.setDate(e[e.length - 1].getDate() + 1),
                Cn(i, {
                  slots: e,
                  start: n,
                  end: a,
                  action: t.action,
                  resourceId: t.resourceId,
                });
            }),
            (r.checkOverflow = function () {
              if (!r._updatingOverflow) {
                var e = r.contentRef.current,
                  t = e.scrollHeight > e.clientHeight;
                r.state.isOverflowing !== t &&
                  ((r._updatingOverflow = !0),
                  r.setState({ isOverflowing: t }, function () {
                    r._updatingOverflow = !1;
                  }));
              }
            }),
            (r.memoizedResources = (0, Ur.Z)(function (e, t) {
              return (function (e, t) {
                return {
                  map: function (r) {
                    return e
                      ? e.map(function (e, i) {
                          return r([t.resourceId(e), e], i);
                        })
                      : [r([ss, null], 0)];
                  },
                  groupEvents: function (r) {
                    var i = new Map();
                    return e
                      ? (r.forEach(function (e) {
                          var r = t.resource(e) || ss,
                            n = i.get(r) || [];
                          n.push(e), i.set(r, n);
                        }),
                        i)
                      : (i.set(ss, r), i);
                  },
                };
              })(e, t);
            })),
            (r.state = { gutterWidth: void 0, isOverflowing: null }),
            (r.scrollRef = l.createRef()),
            (r.contentRef = l.createRef()),
            (r._scrollRatio = null),
            r
          );
        }
        (0, a.Z)(t, e);
        var r = t.prototype;
        return (
          (r.UNSAFE_componentWillMount = function () {
            this.calculateScroll();
          }),
          (r.componentDidMount = function () {
            this.checkOverflow(),
              null == this.props.width && this.measureGutter(),
              this.applyScroll(),
              window.addEventListener("resize", this.handleResize);
          }),
          (r.componentWillUnmount = function () {
            window.removeEventListener("resize", this.handleResize),
              je(this.rafHandle),
              this.measureGutterAnimationFrameRequest &&
                window.cancelAnimationFrame(
                  this.measureGutterAnimationFrameRequest,
                );
          }),
          (r.componentDidUpdate = function () {
            null == this.props.width && this.measureGutter(),
              this.applyScroll();
          }),
          (r.UNSAFE_componentWillReceiveProps = function (e) {
            var t = this.props,
              r = t.range,
              i = t.scrollToTime,
              n = t.localizer;
            (n.neq(e.range[0], r[0], "minutes") ||
              n.neq(e.scrollToTime, i, "minutes")) &&
              this.calculateScroll(e);
          }),
          (r.renderEvents = function (e, t, r, n) {
            var a = this,
              s = this.props,
              o = s.min,
              c = s.max,
              u = s.components,
              m = s.accessors,
              d = s.localizer,
              f = s.dayLayoutAlgorithm,
              y = this.memoizedResources(this.props.resources, m),
              p = y.groupEvents(t),
              B = y.groupEvents(r);
            return y.map(function (t, r) {
              var s = t[0],
                y = t[1];
              return e.map(function (e, t) {
                var b = (p.get(s) || []).filter(function (t) {
                    return d.inRange(e, m.start(t), m.end(t), "day");
                  }),
                  g = (B.get(s) || []).filter(function (t) {
                    return d.inRange(e, m.start(t), m.end(t), "day");
                  });
                return l.createElement(
                  ts,
                  (0, i.Z)({}, a.props, {
                    localizer: d,
                    min: d.merge(e, o),
                    max: d.merge(e, c),
                    resource: y && s,
                    components: u,
                    isNow: d.isSameDate(e, n),
                    key: r + "-" + t,
                    date: e,
                    events: b,
                    backgroundEvents: g,
                    dayLayoutAlgorithm: f,
                  }),
                );
              });
            });
          }),
          (r.render = function () {
            var e = this.props,
              t = e.events,
              r = e.backgroundEvents,
              i = e.range,
              n = e.width,
              a = e.rtl,
              s = e.selected,
              o = e.getNow,
              c = e.resources,
              u = e.components,
              m = e.accessors,
              d = e.getters,
              f = e.localizer,
              y = e.min,
              p = e.max,
              B = e.showMultiDayTimes,
              b = e.longPressThreshold,
              h = e.resizable;
            n = n || this.state.gutterWidth;
            var v = i[0],
              w = i[i.length - 1];
            this.slots = i.length;
            var _ = [],
              z = [],
              M = [];
            return (
              t.forEach(function (e) {
                if (Ea(e, v, w, m, f)) {
                  var t = m.start(e),
                    r = m.end(e);
                  m.allDay(e) ||
                  f.startAndEndAreDateOnly(t, r) ||
                  (!B && !f.isSameDate(t, r))
                    ? _.push(e)
                    : z.push(e);
                }
              }),
              r.forEach(function (e) {
                Ea(e, v, w, m, f) && M.push(e);
              }),
              _.sort(function (e, t) {
                return Wa(e, t, m, f);
              }),
              l.createElement(
                "div",
                {
                  className: g("rbc-time-view", c && "rbc-time-view-resources"),
                },
                l.createElement(as, {
                  range: i,
                  events: _,
                  width: n,
                  rtl: a,
                  getNow: o,
                  localizer: f,
                  selected: s,
                  resources: this.memoizedResources(c, m),
                  selectable: this.props.selectable,
                  accessors: m,
                  getters: d,
                  components: u,
                  scrollRef: this.scrollRef,
                  isOverflowing: this.state.isOverflowing,
                  longPressThreshold: b,
                  onSelectSlot: this.handleSelectAllDaySlot,
                  onSelectEvent: this.handleSelectAlldayEvent,
                  onDoubleClickEvent: this.props.onDoubleClickEvent,
                  onKeyPressEvent: this.props.onKeyPressEvent,
                  onDrillDown: this.props.onDrillDown,
                  getDrilldownView: this.props.getDrilldownView,
                  resizable: h,
                }),
                l.createElement(
                  "div",
                  {
                    ref: this.contentRef,
                    className: "rbc-time-content",
                    onScroll: this.handleScroll,
                  },
                  l.createElement(is, {
                    date: v,
                    ref: this.gutterRef,
                    localizer: f,
                    min: f.merge(v, y),
                    max: f.merge(v, p),
                    step: this.props.step,
                    getNow: this.props.getNow,
                    timeslots: this.props.timeslots,
                    components: u,
                    className: "rbc-time-gutter",
                    getters: d,
                  }),
                  this.renderEvents(i, z, M, o()),
                ),
              )
            );
          }),
          (r.clearSelection = function () {
            clearTimeout(this._selectTimer), (this._pendingSelection = []);
          }),
          (r.measureGutter = function () {
            var e = this;
            this.measureGutterAnimationFrameRequest &&
              window.cancelAnimationFrame(
                this.measureGutterAnimationFrameRequest,
              ),
              (this.measureGutterAnimationFrameRequest =
                window.requestAnimationFrame(function () {
                  var t = oi(e.gutter);
                  t &&
                    e.state.gutterWidth !== t &&
                    e.setState({ gutterWidth: t });
                }));
          }),
          (r.applyScroll = function () {
            if (null != this._scrollRatio) {
              var e = this.contentRef.current;
              (e.scrollTop = e.scrollHeight * this._scrollRatio),
                (this._scrollRatio = null);
            }
          }),
          (r.calculateScroll = function (e) {
            void 0 === e && (e = this.props);
            var t = e,
              r = t.min,
              i = t.max,
              n = t.scrollToTime,
              a = t.localizer,
              s = n - a.startOf(n, "day"),
              o = a.diff(r, i, "milliseconds");
            this._scrollRatio = s / o;
          }),
          t
        );
      })(l.Component);
      (os.propTypes = {}), (os.defaultProps = { step: 30, timeslots: 2 });
      var ls = ["date", "localizer", "min", "max", "scrollToTime"],
        cs = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            (0, a.Z)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                r = e.date,
                a = e.localizer,
                s = e.min,
                o = void 0 === s ? a.startOf(new Date(), "day") : s,
                c = e.max,
                u = void 0 === c ? a.endOf(new Date(), "day") : c,
                m = e.scrollToTime,
                d = void 0 === m ? a.startOf(new Date(), "day") : m,
                f = (0, n.Z)(e, ls),
                y = t.range(r, { localizer: a });
              return l.createElement(
                os,
                (0, i.Z)({}, f, {
                  range: y,
                  eventOffset: 10,
                  localizer: a,
                  min: o,
                  max: u,
                  scrollToTime: d,
                }),
              );
            }),
            t
          );
        })(l.Component);
      (cs.propTypes = {}),
        (cs.range = function (e, t) {
          return [t.localizer.startOf(e, "day")];
        }),
        (cs.navigate = function (e, t, r) {
          var i = r.localizer;
          switch (t) {
            case On:
              return i.add(e, -1, "day");
            case Wn:
              return i.add(e, 1, "day");
            default:
              return e;
          }
        }),
        (cs.title = function (e, t) {
          return t.localizer.format(e, "dayHeaderFormat");
        });
      var us = ["date", "localizer", "min", "max", "scrollToTime"],
        ms = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            (0, a.Z)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                r = e.date,
                a = e.localizer,
                s = e.min,
                o = void 0 === s ? a.startOf(new Date(), "day") : s,
                c = e.max,
                u = void 0 === c ? a.endOf(new Date(), "day") : c,
                m = e.scrollToTime,
                d = void 0 === m ? a.startOf(new Date(), "day") : m,
                f = (0, n.Z)(e, us),
                y = t.range(r, this.props);
              return l.createElement(
                os,
                (0, i.Z)({}, f, {
                  range: y,
                  eventOffset: 15,
                  localizer: a,
                  min: o,
                  max: u,
                  scrollToTime: d,
                }),
              );
            }),
            t
          );
        })(l.Component);
      (ms.propTypes = {}),
        (ms.defaultProps = os.defaultProps),
        (ms.navigate = function (e, t, r) {
          var i = r.localizer;
          switch (t) {
            case On:
              return i.add(e, -1, "week");
            case Wn:
              return i.add(e, 1, "week");
            default:
              return e;
          }
        }),
        (ms.range = function (e, t) {
          var r = t.localizer,
            i = r.startOfWeek(),
            n = r.startOf(e, "week", i),
            a = r.endOf(e, "week", i);
          return r.range(n, a);
        }),
        (ms.title = function (e, t) {
          var r = t.localizer,
            i = ms.range(e, { localizer: r }),
            n = i[0],
            a = i.slice(1);
          return r.format({ start: n, end: a.pop() }, "dayRangeHeaderFormat");
        });
      var ds = ["date", "localizer", "min", "max", "scrollToTime"];
      function fs(e, t) {
        return ms.range(e, t).filter(function (e) {
          return -1 === [6, 0].indexOf(e.getDay());
        });
      }
      var ys,
        ps = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            (0, a.Z)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.date,
                r = e.localizer,
                a = e.min,
                s = void 0 === a ? r.startOf(new Date(), "day") : a,
                o = e.max,
                c = void 0 === o ? r.endOf(new Date(), "day") : o,
                u = e.scrollToTime,
                m = void 0 === u ? r.startOf(new Date(), "day") : u,
                d = (0, n.Z)(e, ds),
                f = fs(t, this.props);
              return l.createElement(
                os,
                (0, i.Z)({}, d, {
                  range: f,
                  eventOffset: 15,
                  localizer: r,
                  min: s,
                  max: c,
                  scrollToTime: m,
                }),
              );
            }),
            t
          );
        })(l.Component);
      function Bs(e) {
        var t = e.accessors,
          r = e.components,
          i = e.date,
          n = e.events,
          a = e.getters,
          s = e.length,
          o = e.localizer,
          c = e.onDoubleClickEvent,
          u = e.onSelectEvent,
          m = e.selected,
          d = (0, l.useRef)(null),
          f = (0, l.useRef)(null),
          y = (0, l.useRef)(null),
          p = (0, l.useRef)(null),
          B = (0, l.useRef)(null);
        (0, l.useEffect)(function () {
          g();
        });
        var b = function (e, i) {
            var n = "",
              a = r.time,
              s = o.messages.allDay,
              c = t.end(i),
              u = t.start(i);
            return (
              t.allDay(i) ||
                (o.eq(u, c)
                  ? (s = o.format(u, "agendaTimeFormat"))
                  : o.isSameDate(u, c)
                  ? (s = o.format(
                      { start: u, end: c },
                      "agendaTimeRangeFormat",
                    ))
                  : o.isSameDate(e, u)
                  ? (s = o.format(u, "agendaTimeFormat"))
                  : o.isSameDate(e, c) &&
                    (s = o.format(c, "agendaTimeFormat"))),
              o.gt(e, u, "day") && (n = "rbc-continues-prior"),
              o.lt(e, c, "day") && (n += " rbc-continues-after"),
              l.createElement(
                "span",
                { className: n.trim() },
                a ? l.createElement(a, { event: i, day: e, label: s }) : s,
              )
            );
          },
          g = function () {
            if (B.current) {
              var e = d.current,
                t = B.current.firstChild;
              if (t) {
                var r = p.current.scrollHeight > p.current.clientHeight,
                  i = [],
                  n = i;
                (i = [oi(t.children[0]), oi(t.children[1])]),
                  (n[0] === i[0] && n[1] === i[1]) ||
                    ((f.current.style.width = i[0] + "px"),
                    (y.current.style.width = i[1] + "px")),
                  r
                    ? ((0, ui.Z)(e, "rbc-header-overflowing"),
                      (e.style.marginRight = ci() + "px"))
                    : (0, mi.Z)(e, "rbc-header-overflowing");
              }
            }
          },
          h = o.messages,
          v = o.add(i, s, "day"),
          w = o.range(i, v, "day");
        return (
          (n = n.filter(function (e) {
            return Ea(e, o.startOf(i, "day"), o.endOf(v, "day"), t, o);
          })).sort(function (e, r) {
            return +t.start(e) - +t.start(r);
          }),
          l.createElement(
            "div",
            { className: "rbc-agenda-view" },
            0 !== n.length
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(
                    "table",
                    { ref: d, className: "rbc-agenda-table" },
                    l.createElement(
                      "thead",
                      null,
                      l.createElement(
                        "tr",
                        null,
                        l.createElement(
                          "th",
                          { className: "rbc-header", ref: f },
                          h.date,
                        ),
                        l.createElement(
                          "th",
                          { className: "rbc-header", ref: y },
                          h.time,
                        ),
                        l.createElement(
                          "th",
                          { className: "rbc-header" },
                          h.event,
                        ),
                      ),
                    ),
                  ),
                  l.createElement(
                    "div",
                    { className: "rbc-agenda-content", ref: p },
                    l.createElement(
                      "table",
                      { className: "rbc-agenda-table" },
                      l.createElement(
                        "tbody",
                        { ref: B },
                        w.map(function (e, i) {
                          return (function (e, i, n) {
                            var s = r.event,
                              d = r.date;
                            return (i = i.filter(function (r) {
                              return Ea(
                                r,
                                o.startOf(e, "day"),
                                o.endOf(e, "day"),
                                t,
                                o,
                              );
                            })).map(function (r, f) {
                              var y = t.title(r),
                                p = t.end(r),
                                B = t.start(r),
                                g = a.eventProp(r, B, p, la(r, m)),
                                h = 0 === f && o.format(e, "agendaDateFormat"),
                                v =
                                  0 === f &&
                                  l.createElement(
                                    "td",
                                    {
                                      rowSpan: i.length,
                                      className: "rbc-agenda-date-cell",
                                    },
                                    d
                                      ? l.createElement(d, { day: e, label: h })
                                      : h,
                                  );
                              return l.createElement(
                                "tr",
                                {
                                  key: n + "_" + f,
                                  className: g.className,
                                  style: g.style,
                                },
                                v,
                                l.createElement(
                                  "td",
                                  { className: "rbc-agenda-time-cell" },
                                  b(e, r),
                                ),
                                l.createElement(
                                  "td",
                                  {
                                    className: "rbc-agenda-event-cell",
                                    onClick: function (e) {
                                      return u && u(r, e);
                                    },
                                    onDoubleClick: function (e) {
                                      return c && c(r, e);
                                    },
                                  },
                                  s
                                    ? l.createElement(s, { event: r, title: y })
                                    : y,
                                ),
                              );
                            }, []);
                          })(e, n, i);
                        }),
                      ),
                    ),
                  ),
                )
              : l.createElement(
                  "span",
                  { className: "rbc-agenda-empty" },
                  h.noEventsInRange,
                ),
          )
        );
      }
      (ps.propTypes = {}),
        (ps.defaultProps = os.defaultProps),
        (ps.range = fs),
        (ps.navigate = ms.navigate),
        (ps.title = function (e, t) {
          var r = t.localizer,
            i = fs(e, { localizer: r }),
            n = i[0],
            a = i.slice(1);
          return r.format({ start: n, end: a.pop() }, "dayRangeHeaderFormat");
        }),
        (Bs.propTypes = {}),
        (Bs.defaultProps = { length: 30 }),
        (Bs.range = function (e, t) {
          var r = t.length,
            i = void 0 === r ? Bs.defaultProps.length : r;
          return { start: e, end: t.localizer.add(e, i, "day") };
        }),
        (Bs.navigate = function (e, t, r) {
          var i = r.length,
            n = void 0 === i ? Bs.defaultProps.length : i,
            a = r.localizer;
          switch (t) {
            case On:
              return a.add(e, -n, "day");
            case Wn:
              return a.add(e, n, "day");
            default:
              return e;
          }
        }),
        (Bs.title = function (e, t) {
          var r = t.length,
            i = void 0 === r ? Bs.defaultProps.length : r,
            n = t.localizer,
            a = n.add(e, i, "day");
          return n.format({ start: e, end: a }, "agendaHeaderFormat");
        });
      var bs =
          (((ys = {})[Pn.MONTH] = Na),
          (ys[Pn.WEEK] = ms),
          (ys[Pn.WORK_WEEK] = ps),
          (ys[Pn.DAY] = cs),
          (ys[Pn.AGENDA] = Bs),
          ys),
        gs = ["action", "date", "today"];
      var hs = (function (e) {
        function t() {
          for (var t, r = arguments.length, i = new Array(r), n = 0; n < r; n++)
            i[n] = arguments[n];
          return (
            ((t = e.call.apply(e, [this].concat(i)) || this).navigate =
              function (e) {
                t.props.onNavigate(e);
              }),
            (t.view = function (e) {
              t.props.onView(e);
            }),
            t
          );
        }
        (0, a.Z)(t, e);
        var r = t.prototype;
        return (
          (r.render = function () {
            var e = this.props,
              t = e.localizer.messages,
              r = e.label;
            return l.createElement(
              "div",
              { className: "rbc-toolbar" },
              l.createElement(
                "span",
                { className: "rbc-btn-group" },
                l.createElement(
                  "button",
                  { type: "button", onClick: this.navigate.bind(null, Tn) },
                  t.today,
                ),
                l.createElement(
                  "button",
                  { type: "button", onClick: this.navigate.bind(null, On) },
                  t.previous,
                ),
                l.createElement(
                  "button",
                  { type: "button", onClick: this.navigate.bind(null, Wn) },
                  t.next,
                ),
              ),
              l.createElement("span", { className: "rbc-toolbar-label" }, r),
              l.createElement(
                "span",
                { className: "rbc-btn-group" },
                this.viewNamesGroup(t),
              ),
            );
          }),
          (r.viewNamesGroup = function (e) {
            var t = this,
              r = this.props.views,
              i = this.props.view;
            if (r.length > 1)
              return r.map(function (r) {
                return l.createElement(
                  "button",
                  {
                    type: "button",
                    key: r,
                    className: g({ "rbc-active": i === r }),
                    onClick: t.view.bind(null, r),
                  },
                  e[r],
                );
              });
          }),
          t
        );
      })(l.Component);
      hs.propTypes = {};
      var vs = function (e) {
          return function (t) {
            return (function (e, t) {
              var r = null;
              return (
                "function" == typeof t
                  ? (r = t(e))
                  : "string" == typeof t &&
                    "object" == typeof e &&
                    null != e &&
                    t in e &&
                    (r = e[t]),
                r
              );
            })(t, e);
          };
        },
        ws = ["view", "date", "getNow", "onNavigate"],
        _s = [
          "view",
          "toolbar",
          "events",
          "backgroundEvents",
          "style",
          "className",
          "elementProps",
          "date",
          "getNow",
          "length",
          "showMultiDayTimes",
          "onShowMore",
          "doShowMoreDrillDown",
          "components",
          "formats",
          "messages",
          "culture",
        ];
      function zs(e) {
        return Array.isArray(e) ? e : Object.keys(e);
      }
      var Ms = (function (e) {
        function t() {
          for (var t, r = arguments.length, a = new Array(r), s = 0; s < r; s++)
            a[s] = arguments[s];
          return (
            ((t = e.call.apply(e, [this].concat(a)) || this).getViews =
              function () {
                var e = t.props.views;
                return Array.isArray(e)
                  ? Sn(
                      e,
                      function (e, t) {
                        return (e[t] = bs[t]);
                      },
                      {},
                    )
                  : "object" == typeof e
                  ? Rn(e, function (e, t) {
                      return !0 === e ? bs[t] : e;
                    })
                  : bs;
              }),
            (t.getView = function () {
              return t.getViews()[t.props.view];
            }),
            (t.getDrilldownView = function (e) {
              var r = t.props,
                i = r.view,
                n = r.drilldownView,
                a = r.getDrilldownView;
              return a ? a(e, i, Object.keys(t.getViews())) : n;
            }),
            (t.handleRangeChange = function (e, r, i) {
              var n = t.props,
                a = n.onRangeChange,
                s = n.localizer;
              a && r.range && a(r.range(e, { localizer: s }), i);
            }),
            (t.handleNavigate = function (e, r) {
              var a = t.props,
                s = a.view,
                o = a.date,
                l = a.getNow,
                c = a.onNavigate,
                m = (0, n.Z)(a, ws),
                d = t.getView(),
                f = l();
              (o = (function (e, t) {
                var r = t.action,
                  i = t.date,
                  a = t.today,
                  s = (0, n.Z)(t, gs);
                switch (((e = "string" == typeof e ? bs[e] : e), r)) {
                  case Tn:
                    i = a || new Date();
                    break;
                  case jn:
                    break;
                  default:
                    (e && "function" == typeof e.navigate) || u()(!1),
                      (i = e.navigate(i, r, s));
                }
                return i;
              })(
                d,
                (0, i.Z)({}, m, { action: e, date: r || o || f, today: f }),
              )),
                c(o, s, e),
                t.handleRangeChange(o, d);
            }),
            (t.handleViewChange = function (e) {
              e !== t.props.view &&
                (function (e, t) {
                  return -1 !== zs(t.views).indexOf(e);
                })(e, t.props) &&
                t.props.onView(e);
              var r = t.getViews();
              t.handleRangeChange(t.props.date || t.props.getNow(), r[e], e);
            }),
            (t.handleSelectEvent = function () {
              for (
                var e = arguments.length, r = new Array(e), i = 0;
                i < e;
                i++
              )
                r[i] = arguments[i];
              Cn(t.props.onSelectEvent, r);
            }),
            (t.handleDoubleClickEvent = function () {
              for (
                var e = arguments.length, r = new Array(e), i = 0;
                i < e;
                i++
              )
                r[i] = arguments[i];
              Cn(t.props.onDoubleClickEvent, r);
            }),
            (t.handleKeyPressEvent = function () {
              for (
                var e = arguments.length, r = new Array(e), i = 0;
                i < e;
                i++
              )
                r[i] = arguments[i];
              Cn(t.props.onKeyPressEvent, r);
            }),
            (t.handleSelectSlot = function (e) {
              Cn(t.props.onSelectSlot, e);
            }),
            (t.handleDrillDown = function (e, r) {
              var i = t.props.onDrillDown;
              i
                ? i(e, r, t.drilldownView)
                : (r && t.handleViewChange(r), t.handleNavigate(jn, e));
            }),
            (t.state = { context: t.getContext(t.props) }),
            t
          );
        }
        (0, a.Z)(t, e);
        var r = t.prototype;
        return (
          (r.UNSAFE_componentWillReceiveProps = function (e) {
            this.setState({ context: this.getContext(e) });
          }),
          (r.getContext = function (e) {
            var t = e.startAccessor,
              r = e.endAccessor,
              n = e.allDayAccessor,
              a = e.tooltipAccessor,
              s = e.titleAccessor,
              o = e.resourceAccessor,
              l = e.resourceIdAccessor,
              c = e.resourceTitleAccessor,
              u = e.eventPropGetter,
              m = e.backgroundEventPropGetter,
              d = e.slotPropGetter,
              f = e.slotGroupPropGetter,
              y = e.dayPropGetter,
              p = e.view,
              B = e.views,
              b = e.localizer,
              g = e.culture,
              h = e.messages,
              v = void 0 === h ? {} : h,
              w = e.components,
              _ = void 0 === w ? {} : w,
              z = e.formats,
              M = void 0 === z ? {} : z,
              S = zs(B);
            return {
              viewNames: S,
              localizer: na(
                b,
                g,
                M,
                (function (e) {
                  return (0, i.Z)({}, aa, e);
                })(v),
              ),
              getters: {
                eventProp: function () {
                  return (u && u.apply(void 0, arguments)) || {};
                },
                backgroundEventProp: function () {
                  return (m && m.apply(void 0, arguments)) || {};
                },
                slotProp: function () {
                  return (d && d.apply(void 0, arguments)) || {};
                },
                slotGroupProp: function () {
                  return (f && f.apply(void 0, arguments)) || {};
                },
                dayProp: function () {
                  return (y && y.apply(void 0, arguments)) || {};
                },
              },
              components: vn(_[p] || {}, Bn(_, S), {
                eventWrapper: En,
                backgroundEventWrapper: En,
                eventContainerWrapper: En,
                dateCellWrapper: En,
                weekWrapper: En,
                timeSlotWrapper: En,
              }),
              accessors: {
                start: vs(t),
                end: vs(r),
                allDay: vs(n),
                tooltip: vs(a),
                title: vs(s),
                resource: vs(o),
                resourceId: vs(l),
                resourceTitle: vs(c),
              },
            };
          }),
          (r.render = function () {
            var e = this.props,
              t = e.view,
              r = e.toolbar,
              a = e.events,
              s = e.backgroundEvents,
              o = void 0 === s ? [] : s,
              c = e.style,
              u = e.className,
              m = e.elementProps,
              d = e.date,
              f = e.getNow,
              y = e.length,
              p = e.showMultiDayTimes,
              B = e.onShowMore,
              b = e.doShowMoreDrillDown,
              h =
                (e.components,
                e.formats,
                e.messages,
                e.culture,
                (0, n.Z)(e, _s));
            d = d || f();
            var v = this.getView(),
              w = this.state.context,
              _ = w.accessors,
              z = w.components,
              M = w.getters,
              S = w.localizer,
              F = w.viewNames,
              R = z.toolbar || hs,
              E = v.title(d, { localizer: S, length: y });
            return l.createElement(
              "div",
              (0, i.Z)({}, m, {
                className: g(u, "rbc-calendar", h.rtl && "rbc-rtl"),
                style: c,
              }),
              r &&
                l.createElement(R, {
                  date: d,
                  view: t,
                  views: F,
                  label: E,
                  onView: this.handleViewChange,
                  onNavigate: this.handleNavigate,
                  localizer: S,
                }),
              l.createElement(
                v,
                (0, i.Z)({}, h, {
                  events: a,
                  backgroundEvents: o,
                  date: d,
                  getNow: f,
                  length: y,
                  localizer: S,
                  getters: M,
                  components: z,
                  accessors: _,
                  showMultiDayTimes: p,
                  getDrilldownView: this.getDrilldownView,
                  onNavigate: this.handleNavigate,
                  onDrillDown: this.handleDrillDown,
                  onSelectEvent: this.handleSelectEvent,
                  onDoubleClickEvent: this.handleDoubleClickEvent,
                  onKeyPressEvent: this.handleKeyPressEvent,
                  onSelectSlot: this.handleSelectSlot,
                  onShowMore: B,
                  doShowMoreDrillDown: b,
                }),
              ),
            );
          }),
          t
        );
      })(l.Component);
      (Ms.defaultProps = {
        elementProps: {},
        popup: !1,
        toolbar: !0,
        view: Pn.MONTH,
        views: [Pn.MONTH, Pn.WEEK, Pn.DAY, Pn.AGENDA],
        step: 30,
        length: 30,
        doShowMoreDrillDown: !0,
        drilldownView: Pn.DAY,
        titleAccessor: "title",
        tooltipAccessor: "title",
        allDayAccessor: "allDay",
        startAccessor: "start",
        endAccessor: "end",
        resourceAccessor: "resourceId",
        resourceIdAccessor: "id",
        resourceTitleAccessor: "title",
        longPressThreshold: 250,
        getNow: function () {
          return new Date();
        },
        dayLayoutAlgorithm: "overlap",
      }),
        (Ms.propTypes = {});
      var Ss = (function e(t, r, s) {
          void 0 === s && (s = []);
          var o,
            c = t.displayName || t.name || "Component",
            b =
              !!(o = t) &&
              ("function" != typeof o ||
                (o.prototype && o.prototype.isReactComponent)),
            g = Object.keys(r),
            h = g.map(f);
          !b && s.length && u()(!1);
          var v = (function (e) {
            function o() {
              for (
                var t, n = arguments.length, a = new Array(n), o = 0;
                o < n;
                o++
              )
                a[o] = arguments[o];
              ((t = e.call.apply(e, [this].concat(a)) || this).handlers =
                Object.create(null)),
                g.forEach(function (e) {
                  var n = r[e];
                  t.handlers[n] = function (r) {
                    if (t.props[n]) {
                      var a;
                      t._notifying = !0;
                      for (
                        var s = arguments.length,
                          o = new Array(s > 1 ? s - 1 : 0),
                          l = 1;
                        l < s;
                        l++
                      )
                        o[l - 1] = arguments[l];
                      (a = t.props)[n].apply(a, [r].concat(o)),
                        (t._notifying = !1);
                    }
                    t.unmounted ||
                      t.setState(function (t) {
                        var n,
                          a = t.values;
                        return {
                          values: (0, i.Z)(
                            Object.create(null),
                            a,
                            ((n = {}), (n[e] = r), n),
                          ),
                        };
                      });
                  };
                }),
                s.length &&
                  (t.attachRef = function (e) {
                    t.inner = e;
                  });
              var l = Object.create(null);
              return (
                g.forEach(function (e) {
                  l[e] = t.props[f(e)];
                }),
                (t.state = { values: l, prevProps: {} }),
                t
              );
            }
            (0, a.Z)(o, e);
            var c = o.prototype;
            return (
              (c.shouldComponentUpdate = function () {
                return !this._notifying;
              }),
              (o.getDerivedStateFromProps = function (e, t) {
                var r = t.values,
                  n = t.prevProps,
                  a = {
                    values: (0, i.Z)(Object.create(null), r),
                    prevProps: {},
                  };
                return (
                  g.forEach(function (t) {
                    (a.prevProps[t] = e[t]),
                      !d(e, t) && d(n, t) && (a.values[t] = e[f(t)]);
                  }),
                  a
                );
              }),
              (c.componentWillUnmount = function () {
                this.unmounted = !0;
              }),
              (c.render = function () {
                var e = this,
                  r = this.props,
                  a = r.innerRef,
                  s = (0, n.Z)(r, ["innerRef"]);
                h.forEach(function (e) {
                  delete s[e];
                });
                var o = {};
                return (
                  g.forEach(function (t) {
                    var r = e.props[t];
                    o[t] = void 0 !== r ? r : e.state.values[t];
                  }),
                  l.createElement(
                    t,
                    (0, i.Z)({}, s, o, this.handlers, {
                      ref: a || this.attachRef,
                    }),
                  )
                );
              }),
              o
            );
          })(l.Component);
          !(function (e) {
            var t = e.prototype;
            if (!t || !t.isReactComponent)
              throw new Error("Can only polyfill class components");
            if (
              "function" != typeof e.getDerivedStateFromProps &&
              "function" != typeof t.getSnapshotBeforeUpdate
            )
              return e;
            var r = null,
              i = null,
              n = null;
            if (
              ("function" == typeof t.componentWillMount
                ? (r = "componentWillMount")
                : "function" == typeof t.UNSAFE_componentWillMount &&
                  (r = "UNSAFE_componentWillMount"),
              "function" == typeof t.componentWillReceiveProps
                ? (i = "componentWillReceiveProps")
                : "function" == typeof t.UNSAFE_componentWillReceiveProps &&
                  (i = "UNSAFE_componentWillReceiveProps"),
              "function" == typeof t.componentWillUpdate
                ? (n = "componentWillUpdate")
                : "function" == typeof t.UNSAFE_componentWillUpdate &&
                  (n = "UNSAFE_componentWillUpdate"),
              null !== r || null !== i || null !== n)
            ) {
              var a = e.displayName || e.name,
                s =
                  "function" == typeof e.getDerivedStateFromProps
                    ? "getDerivedStateFromProps()"
                    : "getSnapshotBeforeUpdate()";
              throw Error(
                "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
                  a +
                  " uses " +
                  s +
                  " but also contains the following legacy lifecycles:" +
                  (null !== r ? "\n  " + r : "") +
                  (null !== i ? "\n  " + i : "") +
                  (null !== n ? "\n  " + n : "") +
                  "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks",
              );
            }
            if (
              ("function" == typeof e.getDerivedStateFromProps &&
                ((t.componentWillMount = y), (t.componentWillReceiveProps = p)),
              "function" == typeof t.getSnapshotBeforeUpdate)
            ) {
              if ("function" != typeof t.componentDidUpdate)
                throw new Error(
                  "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype",
                );
              t.componentWillUpdate = B;
              var o = t.componentDidUpdate;
              t.componentDidUpdate = function (e, t, r) {
                var i = this.__reactInternalSnapshotFlag
                  ? this.__reactInternalSnapshot
                  : r;
                o.call(this, e, t, i);
              };
            }
          })(v),
            (v.displayName = "Uncontrolled(" + c + ")"),
            (v.propTypes = (0, i.Z)(
              { innerRef: function () {} },
              (function (e, t) {
                var r = {};
                return (
                  Object.keys(e).forEach(function (e) {
                    r[f(e)] = m;
                  }),
                  r
                );
              })(r),
            )),
            s.forEach(function (e) {
              v.prototype[e] = function () {
                var t;
                return (t = this.inner)[e].apply(t, arguments);
              };
            });
          var w = v;
          return (
            l.forwardRef &&
              ((w = l.forwardRef(function (e, t) {
                return l.createElement(
                  v,
                  (0, i.Z)({}, e, {
                    innerRef: t,
                    __source: {
                      fileName:
                        "/Users/jquense/src/uncontrollable/src/uncontrollable.js",
                      lineNumber: 128,
                    },
                    __self: this,
                  }),
                );
              })).propTypes = v.propTypes),
            (w.ControlledComponent = t),
            (w.deferControlTo = function (t, n, a) {
              return void 0 === n && (n = {}), e(t, (0, i.Z)({}, r, n), a);
            }),
            w
          );
        })(Ms, {
          view: "onView",
          date: "onNavigate",
          selected: "onSelectEvent",
        }),
        Fs = function (e, t, r) {
          var i = e.start,
            n = e.end;
          return r.format(i, "LT", t) + " – " + r.format(n, "LT", t);
        },
        Rs = {
          dateFormat: "DD",
          dayFormat: "DD ddd",
          weekdayFormat: "ddd",
          selectRangeFormat: Fs,
          eventTimeRangeFormat: Fs,
          eventTimeRangeStartFormat: function (e, t, r) {
            var i = e.start;
            return r.format(i, "LT", t) + " – ";
          },
          eventTimeRangeEndFormat: function (e, t, r) {
            var i = e.end;
            return " – " + r.format(i, "LT", t);
          },
          timeGutterFormat: "LT",
          monthHeaderFormat: "MMMM YYYY",
          dayHeaderFormat: "dddd MMM DD",
          dayRangeHeaderFormat: function (e, t, r) {
            var i = e.start,
              n = e.end;
            return (
              r.format(i, "MMMM DD", t) +
              " – " +
              r.format(n, r.eq(i, n, "month") ? "DD" : "MMMM DD", t)
            );
          },
          agendaHeaderFormat: function (e, t, r) {
            var i = e.start,
              n = e.end;
            return r.format(i, "L", t) + " – " + r.format(n, "L", t);
          },
          agendaDateFormat: "ddd MMM DD",
          agendaTimeFormat: "LT",
          agendaTimeRangeFormat: Fs,
        };
      function Es(e) {
        var t = e ? e.toLowerCase() : e;
        return "FullYear" === t ? (t = "year") : t || (t = void 0), t;
      }
      function Os(e) {
        function t(t, r) {
          var i,
            n,
            a = e(t),
            s = e(r);
          if (!e.tz)
            return (
              a.toDate().getTimezoneOffset() - s.toDate().getTimezoneOffset()
            );
          var o =
            null != (i = null == a || null == (n = a._z) ? void 0 : n.name)
              ? i
              : e.tz.guess();
          return e.tz.zone(o).utcOffset(+a) - e.tz.zone(o).utcOffset(+s);
        }
        function r(t, r, i) {
          var n = Es(i);
          return [n ? e(t).startOf(n) : e(t), n ? e(r).startOf(n) : e(r), n];
        }
        function i(t, r) {
          void 0 === t && (t = null);
          var i = Es(r);
          return i ? e(t).startOf(i).toDate() : e(t).toDate();
        }
        function n(e, t, i) {
          var n = r(e, t, i),
            a = n[0],
            s = n[1],
            o = n[2];
          return a.isSame(s, o);
        }
        function a(e, t, i) {
          var n = r(e, t, i),
            a = n[0],
            s = n[1],
            o = n[2];
          return a.isSameOrBefore(s, o);
        }
        function s(t, r, i) {
          var n = Es(i);
          return e(t).add(r, n).toDate();
        }
        function o(e, t) {
          var r = Es(t),
            a = i(e, r);
          return n(a, e) ? a : s(a, 1, r);
        }
        function l(t, r, i) {
          void 0 === i && (i = "day");
          var n = Es(i),
            a = e(t);
          return e(r).diff(a, n);
        }
        function c(t) {
          return e(t).startOf("month").startOf("week").toDate();
        }
        function u(t) {
          return e(t).endOf("month").endOf("week").toDate();
        }
        return new ia({
          formats: Rs,
          firstOfWeek: function (t) {
            var r = t ? e.localeData(t) : e.localeData();
            return r ? r.firstDayOfWeek() : 0;
          },
          firstVisibleDay: c,
          lastVisibleDay: u,
          visibleDays: function (e) {
            for (var t = c(e), r = u(e), i = []; a(t, r); )
              i.push(t), (t = s(t, 1, "d"));
            return i;
          },
          format: function (t, r, i) {
            return ((n = e(t)), (a = i), a ? n.locale(a) : n).format(r);
            var n, a;
          },
          lt: function (e, t, i) {
            var n = r(e, t, i),
              a = n[0],
              s = n[1],
              o = n[2];
            return a.isBefore(s, o);
          },
          lte: a,
          gt: function (e, t, i) {
            var n = r(e, t, i),
              a = n[0],
              s = n[1],
              o = n[2];
            return a.isAfter(s, o);
          },
          gte: function (e, t, i) {
            var n = r(e, t, i),
              a = n[0],
              s = n[1],
              o = n[2];
            return a.isSameOrBefore(s, o);
          },
          eq: n,
          neq: function (e, t, r) {
            return !n(e, t, r);
          },
          merge: function (t, r) {
            if (!t && !r) return null;
            var i = e(r).format("HH:mm:ss"),
              n = e(t).startOf("day").format("MM/DD/YYYY");
            return e(n + " " + i, "MM/DD/YYYY HH:mm:ss").toDate();
          },
          inRange: function (t, r, i, n) {
            void 0 === n && (n = "day");
            var a = Es(n),
              s = e(t),
              o = e(r),
              l = e(i);
            return s.isBetween(o, l, a, "[]");
          },
          startOf: i,
          endOf: function (t, r) {
            void 0 === t && (t = null);
            var i = Es(r);
            return i ? e(t).endOf(i).toDate() : e(t).toDate();
          },
          range: function (t, r, i) {
            void 0 === i && (i = "day");
            for (var n = Es(i), o = e(t).toDate(), l = []; a(o, r); )
              l.push(o), (o = s(o, 1, n));
            return l;
          },
          add: s,
          diff: l,
          ceil: o,
          min: function (t, r) {
            var i = e(t),
              n = e(r);
            return e.min(i, n).toDate();
          },
          max: function (t, r) {
            var i = e(t),
              n = e(r);
            return e.max(i, n).toDate();
          },
          minutes: function (t) {
            return e(t).minutes();
          },
          getSlotDate: function (t, r, i) {
            return e(t)
              .startOf("day")
              .minute(r + i)
              .toDate();
          },
          getTimezoneOffset: function (t) {
            return e(t).toDate().getTimezoneOffset();
          },
          getDstOffset: t,
          getTotalMin: function (e, t) {
            return l(e, t, "minutes");
          },
          getMinutesFromMidnight: function (r) {
            var i = e(r).startOf("day");
            return (
              e(r).diff(i, "minutes") +
              (function (r) {
                return t(e(r).startOf("day"), r);
              })(r)
            );
          },
          continuesPrior: function (t, r) {
            var i = e(t),
              n = e(r);
            return i.isBefore(n, "day");
          },
          continuesAfter: function (t, r, i) {
            var n = e(r),
              a = e(i);
            return n.isSameOrAfter(a, "minutes");
          },
          sortEvents: function (e) {
            var t = e.evtA,
              r = t.start,
              n = t.end,
              a = t.allDay,
              s = e.evtB,
              c = s.start,
              u = s.end,
              m = s.allDay,
              d = +i(r, "day") - +i(c, "day"),
              f = l(r, o(n, "day"), "day"),
              y = l(c, o(u, "day"), "day");
            return (
              d ||
              Math.max(y, 1) - Math.max(f, 1) ||
              !!m - !!a ||
              +r - +c ||
              +n - +u
            );
          },
          inEventRange: function (t) {
            var r = t.event,
              i = r.start,
              n = r.end,
              a = t.range,
              s = a.start,
              o = a.end,
              l = e(i).startOf("day"),
              c = e(n),
              u = e(s),
              m = e(o),
              d = l.isSameOrBefore(m, "day"),
              f = !l.isSame(c, "minutes")
                ? c.isAfter(u, "minutes")
                : c.isSameOrAfter(u, "minutes");
            return d && f;
          },
          isSameDate: function (t, r) {
            var i = e(t),
              n = e(r);
            return i.isSame(n, "date");
          },
          browserTZOffset: function () {
            var t = new Date(),
              r = /-/.test(t.toString()) ? "-" : "",
              i = t.getTimezoneOffset(),
              n = Number("" + r + Math.abs(i));
            return e().utcOffset() > n ? 1 : 0;
          },
        });
      }
    },
    42333: (e, t, r) => {
      r.d(t, { q: () => v });
      var i = r(39277),
        n = r.n(i),
        a = r(89526),
        s = r(16171),
        o = r(9410),
        l = ["x1", "y1", "x2", "y2", "key"];
      function c(e) {
        return (
          (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          c(e)
        );
      }
      function u() {
        return (
          (u = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          u.apply(this, arguments)
        );
      }
      function m(e, t) {
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
      function d(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                g(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function y(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, h(i.key), i);
        }
      }
      function p(e, t) {
        return (
          (p = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          p(e, t)
        );
      }
      function B(e) {
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
            i = b(e);
          if (t) {
            var n = b(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === c(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e);
          })(this, r);
        };
      }
      function b(e) {
        return (
          (b = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          b(e)
        );
      }
      function g(e, t, r) {
        return (
          (t = h(t)) in e
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
      function h(e) {
        var t = (function (e, t) {
          if ("object" !== c(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var i = r.call(e, t || "default");
            if ("object" !== c(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === c(t) ? t : String(t);
      }
      var v = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && p(e, t);
        })(d, e);
        var t,
          r,
          i,
          c = B(d);
        function d() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, d),
            c.apply(this, arguments)
          );
        }
        return (
          (t = d),
          (i = [
            {
              key: "renderLineItem",
              value: function (e, t) {
                var r;
                if (a.isValidElement(e)) r = a.cloneElement(e, t);
                else if (n()(e)) r = e(t);
                else {
                  var i = t.x1,
                    s = t.y1,
                    c = t.x2,
                    d = t.y2,
                    f = t.key,
                    y = m(t, l);
                  r = a.createElement(
                    "line",
                    u({}, (0, o.L6)(y), {
                      x1: i,
                      y1: s,
                      x2: c,
                      y2: d,
                      fill: "none",
                      key: f,
                    }),
                  );
                }
                return r;
              },
            },
          ]),
          (r = [
            {
              key: "renderHorizontal",
              value: function (e) {
                var t = this,
                  r = this.props,
                  i = r.x,
                  n = r.width,
                  s = r.horizontal;
                if (!e || !e.length) return null;
                var o = e.map(function (e, r) {
                  var a = f(
                    f({}, t.props),
                    {},
                    {
                      x1: i,
                      y1: e,
                      x2: i + n,
                      y2: e,
                      key: "line-".concat(r),
                      index: r,
                    },
                  );
                  return d.renderLineItem(s, a);
                });
                return a.createElement(
                  "g",
                  { className: "recharts-cartesian-grid-horizontal" },
                  o,
                );
              },
            },
            {
              key: "renderVertical",
              value: function (e) {
                var t = this,
                  r = this.props,
                  i = r.y,
                  n = r.height,
                  s = r.vertical;
                if (!e || !e.length) return null;
                var o = e.map(function (e, r) {
                  var a = f(
                    f({}, t.props),
                    {},
                    {
                      x1: e,
                      y1: i,
                      x2: e,
                      y2: i + n,
                      key: "line-".concat(r),
                      index: r,
                    },
                  );
                  return d.renderLineItem(s, a);
                });
                return a.createElement(
                  "g",
                  { className: "recharts-cartesian-grid-vertical" },
                  o,
                );
              },
            },
            {
              key: "renderVerticalStripes",
              value: function (e) {
                var t = this.props.verticalFill;
                if (!t || !t.length) return null;
                var r = this.props,
                  i = r.fillOpacity,
                  n = r.x,
                  s = r.y,
                  o = r.width,
                  l = r.height,
                  c = e
                    .map(function (e) {
                      return Math.round(e + n - n);
                    })
                    .sort(function (e, t) {
                      return e - t;
                    });
                n !== c[0] && c.unshift(0);
                var u = c.map(function (e, r) {
                  var u = c[r + 1] ? c[r + 1] - e : n + o - e;
                  if (u <= 0) return null;
                  var m = r % t.length;
                  return a.createElement("rect", {
                    key: "react-".concat(r),
                    x: e,
                    y: s,
                    width: u,
                    height: l,
                    stroke: "none",
                    fill: t[m],
                    fillOpacity: i,
                    className: "recharts-cartesian-grid-bg",
                  });
                });
                return a.createElement(
                  "g",
                  { className: "recharts-cartesian-gridstripes-vertical" },
                  u,
                );
              },
            },
            {
              key: "renderHorizontalStripes",
              value: function (e) {
                var t = this.props.horizontalFill;
                if (!t || !t.length) return null;
                var r = this.props,
                  i = r.fillOpacity,
                  n = r.x,
                  s = r.y,
                  o = r.width,
                  l = r.height,
                  c = e
                    .map(function (e) {
                      return Math.round(e + s - s);
                    })
                    .sort(function (e, t) {
                      return e - t;
                    });
                s !== c[0] && c.unshift(0);
                var u = c.map(function (e, r) {
                  var u = c[r + 1] ? c[r + 1] - e : s + l - e;
                  if (u <= 0) return null;
                  var m = r % t.length;
                  return a.createElement("rect", {
                    key: "react-".concat(r),
                    y: e,
                    x: n,
                    height: u,
                    width: o,
                    stroke: "none",
                    fill: t[m],
                    fillOpacity: i,
                    className: "recharts-cartesian-grid-bg",
                  });
                });
                return a.createElement(
                  "g",
                  { className: "recharts-cartesian-gridstripes-horizontal" },
                  u,
                );
              },
            },
            {
              key: "renderBackground",
              value: function () {
                var e = this.props.fill;
                if (!e || "none" === e) return null;
                var t = this.props,
                  r = t.fillOpacity,
                  i = t.x,
                  n = t.y,
                  s = t.width,
                  o = t.height;
                return a.createElement("rect", {
                  x: i,
                  y: n,
                  width: s,
                  height: o,
                  stroke: "none",
                  fill: e,
                  fillOpacity: r,
                  className: "recharts-cartesian-grid-bg",
                });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.x,
                  r = e.y,
                  i = e.width,
                  o = e.height,
                  l = e.horizontal,
                  c = e.vertical,
                  u = e.horizontalCoordinatesGenerator,
                  m = e.verticalCoordinatesGenerator,
                  d = e.xAxis,
                  f = e.yAxis,
                  y = e.offset,
                  p = e.chartWidth,
                  B = e.chartHeight;
                if (
                  !(0, s.hj)(i) ||
                  i <= 0 ||
                  !(0, s.hj)(o) ||
                  o <= 0 ||
                  !(0, s.hj)(t) ||
                  t !== +t ||
                  !(0, s.hj)(r) ||
                  r !== +r
                )
                  return null;
                var b = this.props,
                  g = b.horizontalPoints,
                  h = b.verticalPoints;
                return (
                  (g && g.length) ||
                    !n()(u) ||
                    (g = u({ yAxis: f, width: p, height: B, offset: y })),
                  (h && h.length) ||
                    !n()(m) ||
                    (h = m({ xAxis: d, width: p, height: B, offset: y })),
                  a.createElement(
                    "g",
                    { className: "recharts-cartesian-grid" },
                    this.renderBackground(),
                    l && this.renderHorizontal(g),
                    c && this.renderVertical(h),
                    l && this.renderHorizontalStripes(g),
                    c && this.renderVerticalStripes(h),
                  )
                );
              },
            },
          ]) && y(t.prototype, r),
          i && y(t, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          d
        );
      })(a.PureComponent);
      g(v, "displayName", "CartesianGrid"),
        g(v, "defaultProps", {
          horizontal: !0,
          vertical: !0,
          horizontalPoints: [],
          verticalPoints: [],
          stroke: "#ccc",
          fill: "none",
          verticalFill: [],
          horizontalFill: [],
        });
    },
    77219: (e, t, r) => {
      r.d(t, { c: () => de });
      var i = r(79756),
        n = r(47184),
        a = r.n(n),
        s = r(35813),
        o = r.n(s),
        l = r(14019),
        c = r.n(l),
        u = r(39277),
        m = r.n(u),
        d = r(80089),
        f = r.n(d),
        y = r(51391),
        p = r.n(y),
        B = r(93706),
        b = r.n(B),
        g = r(89526),
        h = r(64403),
        v = r.n(h),
        w = r(68059),
        _ = r(17995),
        z = r(96963),
        M = r(61452),
        S = r(34324),
        F = r(59509),
        R = r(16171),
        E = r(71298),
        O = r(9410),
        W = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"];
      function T(e) {
        return (
          (T =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          T(e)
        );
      }
      function j(e, t) {
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
      function P() {
        return (
          (P = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          P.apply(this, arguments)
        );
      }
      function I(e, t) {
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
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(r), !0).forEach(function (t) {
                N(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : I(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function x(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, X(i.key), i);
        }
      }
      function D(e, t) {
        return (
          (D = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          D(e, t)
        );
      }
      function A(e) {
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
            i = U(e);
          if (t) {
            var n = U(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === T(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return k(e);
          })(this, r);
        };
      }
      function k(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function U(e) {
        return (
          (U = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          U(e)
        );
      }
      function N(e, t, r) {
        return (
          (t = X(t)) in e
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
      function X(e) {
        var t = (function (e, t) {
          if ("object" !== T(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var i = r.call(e, t || "default");
            if ("object" !== T(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === T(t) ? t : String(t);
      }
      var G = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && D(e, t);
        })(s, e);
        var t,
          r,
          i,
          n = A(s);
        function s() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, s);
          for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
            r[i] = arguments[i];
          return (
            N(k((e = n.call.apply(n, [this].concat(r)))), "state", {
              isAnimationFinished: !0,
            }),
            N(k(e), "id", (0, R.EL)("recharts-area-")),
            N(k(e), "handleAnimationEnd", function () {
              var t = e.props.onAnimationEnd;
              e.setState({ isAnimationFinished: !0 }), m()(t) && t();
            }),
            N(k(e), "handleAnimationStart", function () {
              var t = e.props.onAnimationStart;
              e.setState({ isAnimationFinished: !1 }), m()(t) && t();
            }),
            e
          );
        }
        return (
          (t = s),
          (i = [
            {
              key: "getDerivedStateFromProps",
              value: function (e, t) {
                return e.animationId !== t.prevAnimationId
                  ? {
                      prevAnimationId: e.animationId,
                      curPoints: e.points,
                      curBaseLine: e.baseLine,
                      prevPoints: t.curPoints,
                      prevBaseLine: t.curBaseLine,
                    }
                  : e.points !== t.curPoints || e.baseLine !== t.curBaseLine
                  ? { curPoints: e.points, curBaseLine: e.baseLine }
                  : null;
              },
            },
          ]),
          (r = [
            {
              key: "renderDots",
              value: function (e, t) {
                var r = this.props.isAnimationActive,
                  i = this.state.isAnimationFinished;
                if (r && !i) return null;
                var n = this.props,
                  a = n.dot,
                  o = n.points,
                  l = n.dataKey,
                  c = (0, O.L6)(this.props),
                  u = (0, O.L6)(a, !0),
                  m = o.map(function (e, t) {
                    var r = C(
                      C(C({ key: "dot-".concat(t), r: 3 }, c), u),
                      {},
                      {
                        dataKey: l,
                        cx: e.x,
                        cy: e.y,
                        index: t,
                        value: e.value,
                        payload: e.payload,
                      },
                    );
                    return s.renderDotItem(a, r);
                  }),
                  d = { clipPath: e ? "url(#clipPath-".concat(t, ")") : null };
                return g.createElement(
                  M.m,
                  P({ className: "recharts-area-dots" }, d),
                  m,
                );
              },
            },
            {
              key: "renderHorizontalRect",
              value: function (e) {
                var t = this.props,
                  r = t.baseLine,
                  i = t.points,
                  n = t.strokeWidth,
                  a = i[0].x,
                  s = i[i.length - 1].x,
                  o = e * Math.abs(a - s),
                  l = c()(
                    i.map(function (e) {
                      return e.y || 0;
                    }),
                  );
                return (
                  (0, R.hj)(r) && "number" == typeof r
                    ? (l = Math.max(r, l))
                    : r &&
                      b()(r) &&
                      r.length &&
                      (l = Math.max(
                        c()(
                          r.map(function (e) {
                            return e.y || 0;
                          }),
                        ),
                        l,
                      )),
                  (0, R.hj)(l)
                    ? g.createElement("rect", {
                        x: a < s ? a : a - o,
                        y: 0,
                        width: o,
                        height: Math.floor(
                          l + (n ? parseInt("".concat(n), 10) : 1),
                        ),
                      })
                    : null
                );
              },
            },
            {
              key: "renderVerticalRect",
              value: function (e) {
                var t = this.props,
                  r = t.baseLine,
                  i = t.points,
                  n = t.strokeWidth,
                  a = i[0].y,
                  s = i[i.length - 1].y,
                  o = e * Math.abs(a - s),
                  l = c()(
                    i.map(function (e) {
                      return e.x || 0;
                    }),
                  );
                return (
                  (0, R.hj)(r) && "number" == typeof r
                    ? (l = Math.max(r, l))
                    : r &&
                      b()(r) &&
                      r.length &&
                      (l = Math.max(
                        c()(
                          r.map(function (e) {
                            return e.x || 0;
                          }),
                        ),
                        l,
                      )),
                  (0, R.hj)(l)
                    ? g.createElement("rect", {
                        x: 0,
                        y: a < s ? a : a - o,
                        width: l + (n ? parseInt("".concat(n), 10) : 1),
                        height: Math.floor(o),
                      })
                    : null
                );
              },
            },
            {
              key: "renderClipRect",
              value: function (e) {
                return "vertical" === this.props.layout
                  ? this.renderVerticalRect(e)
                  : this.renderHorizontalRect(e);
              },
            },
            {
              key: "renderAreaStatically",
              value: function (e, t, r, i) {
                var n = this.props,
                  a = n.layout,
                  s = n.type,
                  o = n.stroke,
                  l = n.connectNulls,
                  c = n.isRange,
                  u = (n.ref, j(n, W));
                return g.createElement(
                  M.m,
                  { clipPath: r ? "url(#clipPath-".concat(i, ")") : null },
                  g.createElement(
                    _.H,
                    P({}, (0, O.L6)(u, !0), {
                      points: e,
                      connectNulls: l,
                      type: s,
                      baseLine: t,
                      layout: a,
                      stroke: "none",
                      className: "recharts-area-area",
                    }),
                  ),
                  "none" !== o &&
                    g.createElement(
                      _.H,
                      P({}, (0, O.L6)(this.props), {
                        className: "recharts-area-curve",
                        layout: a,
                        type: s,
                        connectNulls: l,
                        fill: "none",
                        points: e,
                      }),
                    ),
                  "none" !== o &&
                    c &&
                    g.createElement(
                      _.H,
                      P({}, (0, O.L6)(this.props), {
                        className: "recharts-area-curve",
                        layout: a,
                        type: s,
                        connectNulls: l,
                        fill: "none",
                        points: t,
                      }),
                    ),
                );
              },
            },
            {
              key: "renderAreaWithAnimation",
              value: function (e, t) {
                var r = this,
                  i = this.props,
                  n = i.points,
                  a = i.baseLine,
                  s = i.isAnimationActive,
                  l = i.animationBegin,
                  c = i.animationDuration,
                  u = i.animationEasing,
                  m = i.animationId,
                  d = this.state,
                  f = d.prevPoints,
                  y = d.prevBaseLine;
                return g.createElement(
                  w.ZP,
                  {
                    begin: l,
                    duration: c,
                    isActive: s,
                    easing: u,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "area-".concat(m),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (i) {
                    var s = i.t;
                    if (f) {
                      var l,
                        c = f.length / n.length,
                        u = n.map(function (e, t) {
                          var r = Math.floor(t * c);
                          if (f[r]) {
                            var i = f[r],
                              n = (0, R.k4)(i.x, e.x),
                              a = (0, R.k4)(i.y, e.y);
                            return C(C({}, e), {}, { x: n(s), y: a(s) });
                          }
                          return e;
                        });
                      return (
                        (l =
                          (0, R.hj)(a) && "number" == typeof a
                            ? (0, R.k4)(y, a)(s)
                            : p()(a) || o()(a)
                            ? (0, R.k4)(y, 0)(s)
                            : a.map(function (e, t) {
                                var r = Math.floor(t * c);
                                if (y[r]) {
                                  var i = y[r],
                                    n = (0, R.k4)(i.x, e.x),
                                    a = (0, R.k4)(i.y, e.y);
                                  return C(C({}, e), {}, { x: n(s), y: a(s) });
                                }
                                return e;
                              })),
                        r.renderAreaStatically(u, l, e, t)
                      );
                    }
                    return g.createElement(
                      M.m,
                      null,
                      g.createElement(
                        "defs",
                        null,
                        g.createElement(
                          "clipPath",
                          { id: "animationClipPath-".concat(t) },
                          r.renderClipRect(s),
                        ),
                      ),
                      g.createElement(
                        M.m,
                        { clipPath: "url(#animationClipPath-".concat(t, ")") },
                        r.renderAreaStatically(n, a, e, t),
                      ),
                    );
                  },
                );
              },
            },
            {
              key: "renderArea",
              value: function (e, t) {
                var r = this.props,
                  i = r.points,
                  n = r.baseLine,
                  s = r.isAnimationActive,
                  o = this.state,
                  l = o.prevPoints,
                  c = o.prevBaseLine,
                  u = o.totalLength;
                return s &&
                  i &&
                  i.length &&
                  ((!l && u > 0) || !a()(l, i) || !a()(c, n))
                  ? this.renderAreaWithAnimation(e, t)
                  : this.renderAreaStatically(i, n, e, t);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.hide,
                  r = e.dot,
                  i = e.points,
                  n = e.className,
                  a = e.top,
                  s = e.left,
                  o = e.xAxis,
                  l = e.yAxis,
                  c = e.width,
                  u = e.height,
                  m = e.isAnimationActive,
                  d = e.id;
                if (t || !i || !i.length) return null;
                var f = this.state.isAnimationFinished,
                  y = 1 === i.length,
                  B = v()("recharts-area", n),
                  b = (o && o.allowDataOverflow) || (l && l.allowDataOverflow),
                  h = p()(d) ? this.id : d;
                return g.createElement(
                  M.m,
                  { className: B },
                  b
                    ? g.createElement(
                        "defs",
                        null,
                        g.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(h) },
                          g.createElement("rect", {
                            x: s,
                            y: a,
                            width: c,
                            height: Math.floor(u),
                          }),
                        ),
                      )
                    : null,
                  y ? null : this.renderArea(b, h),
                  (r || y) && this.renderDots(b, h),
                  (!m || f) && S.e.renderCallByParent(this.props, i),
                );
              },
            },
          ]) && x(t.prototype, r),
          i && x(t, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          s
        );
      })(g.PureComponent);
      N(G, "displayName", "Area"),
        N(G, "defaultProps", {
          stroke: "#3182bd",
          fill: "#3182bd",
          fillOpacity: 0.6,
          xAxisId: 0,
          yAxisId: 0,
          legendType: "line",
          connectNulls: !1,
          points: [],
          dot: !1,
          activeDot: !0,
          hide: !1,
          isAnimationActive: !F.x.isSsr,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        }),
        N(G, "getBaseValue", function (e, t, r, i) {
          var n = e.layout,
            a = e.baseValue,
            s = t.props.baseValue,
            o = null != s ? s : a;
          if ((0, R.hj)(o) && "number" == typeof o) return o;
          var l = "horizontal" === n ? i : r,
            c = l.scale.domain();
          if ("number" === l.type) {
            var u = Math.max(c[0], c[1]),
              m = Math.min(c[0], c[1]);
            return "dataMin" === o
              ? m
              : "dataMax" === o || u < 0
              ? u
              : Math.max(Math.min(c[0], c[1]), 0);
          }
          return "dataMin" === o ? c[0] : "dataMax" === o ? c[1] : c[0];
        }),
        N(G, "getComposedData", function (e) {
          var t,
            r = e.props,
            i = e.item,
            n = e.xAxis,
            a = e.yAxis,
            s = e.xAxisTicks,
            o = e.yAxisTicks,
            l = e.bandSize,
            c = e.dataKey,
            u = e.stackedData,
            m = e.dataStartIndex,
            d = e.displayedData,
            y = e.offset,
            B = r.layout,
            g = u && u.length,
            h = G.getBaseValue(r, i, n, a),
            v = !1,
            w = d.map(function (e, t) {
              var r,
                i = (0, E.F$)(e, c);
              g ? (r = u[m + t]) : ((r = i), b()(r) ? (v = !0) : (r = [h, r]));
              var d = p()(r[1]) || (g && p()(i));
              return "horizontal" === B
                ? {
                    x: (0, E.Hv)({
                      axis: n,
                      ticks: s,
                      bandSize: l,
                      entry: e,
                      index: t,
                    }),
                    y: d ? null : a.scale(r[1]),
                    value: r,
                    payload: e,
                  }
                : {
                    x: d ? null : n.scale(r[1]),
                    y: (0, E.Hv)({
                      axis: a,
                      ticks: o,
                      bandSize: l,
                      entry: e,
                      index: t,
                    }),
                    value: r,
                    payload: e,
                  };
            });
          return (
            (t =
              g || v
                ? w.map(function (e) {
                    return "horizontal" === B
                      ? {
                          x: e.x,
                          y:
                            p()(f()(e, "value[0]")) || p()(f()(e, "y"))
                              ? null
                              : a.scale(f()(e, "value[0]")),
                        }
                      : {
                          x: p()(f()(e, "value[0]"))
                            ? null
                            : n.scale(f()(e, "value[0]")),
                          y: e.y,
                        };
                  })
                : "horizontal" === B
                ? a.scale(h)
                : n.scale(h)),
            C({ points: w, baseLine: t, layout: B, isRange: v }, y)
          );
        }),
        N(G, "renderDotItem", function (e, t) {
          return g.isValidElement(e)
            ? g.cloneElement(e, t)
            : m()(e)
            ? e(t)
            : g.createElement(
                z.o,
                P({}, t, { className: "recharts-area-dot" }),
              );
        });
      var L = r(75018),
        q = r(52339),
        Z = function () {
          return null;
        };
      (Z.displayName = "ZAxis"),
        (Z.defaultProps = {
          zAxisId: 0,
          range: [64, 64],
          scale: "auto",
          type: "number",
        });
      var H = r(16667),
        K = r(65370),
        V = r(32214),
        Y = r(33790);
      function $(e) {
        return (
          ($ =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          $(e)
        );
      }
      function J() {
        return (
          (J = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          J.apply(this, arguments)
        );
      }
      function Q(e, t) {
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
      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Q(Object(r), !0).forEach(function (t) {
                se(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Q(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function te(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, oe(i.key), i);
        }
      }
      function re(e, t) {
        return (
          (re = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          re(e, t)
        );
      }
      function ie(e) {
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
            i = ae(e);
          if (t) {
            var n = ae(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === $(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return ne(e);
          })(this, r);
        };
      }
      function ne(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function ae(e) {
        return (
          (ae = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          ae(e)
        );
      }
      function se(e, t, r) {
        return (
          (t = oe(t)) in e
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
      function oe(e) {
        var t = (function (e, t) {
          if ("object" !== $(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var i = r.call(e, t || "default");
            if ("object" !== $(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === $(t) ? t : String(t);
      }
      var le = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && re(e, t);
        })(s, e);
        var t,
          r,
          i,
          n = ie(s);
        function s() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, s);
          for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
            r[i] = arguments[i];
          return (
            se(ne((e = n.call.apply(n, [this].concat(r)))), "state", {
              isAnimationFinished: !1,
            }),
            se(ne(e), "handleAnimationEnd", function () {
              e.setState({ isAnimationFinished: !0 });
            }),
            se(ne(e), "handleAnimationStart", function () {
              e.setState({ isAnimationFinished: !1 });
            }),
            se(ne(e), "id", (0, R.EL)("recharts-scatter-")),
            e
          );
        }
        return (
          (t = s),
          (i = [
            {
              key: "getDerivedStateFromProps",
              value: function (e, t) {
                return e.animationId !== t.prevAnimationId
                  ? {
                      prevAnimationId: e.animationId,
                      curPoints: e.points,
                      prevPoints: t.curPoints,
                    }
                  : e.points !== t.curPoints
                  ? { curPoints: e.points }
                  : null;
              },
            },
            {
              key: "renderSymbolItem",
              value: function (e, t) {
                var r;
                return (
                  g.isValidElement(e)
                    ? (r = g.cloneElement(e, t))
                    : m()(e)
                    ? (r = e(t))
                    : "string" == typeof e &&
                      (r = g.createElement(H.v, J({}, t, { type: e }))),
                  r
                );
              },
            },
          ]),
          (r = [
            {
              key: "renderSymbolsStatically",
              value: function (e) {
                var t = this,
                  r = this.props,
                  i = r.shape,
                  n = r.activeShape,
                  a = r.activeIndex,
                  o = (0, O.L6)(this.props);
                return e.map(function (e, r) {
                  var l = ee(ee({ key: "symbol-".concat(r) }, o), e);
                  return g.createElement(
                    M.m,
                    J(
                      { className: "recharts-scatter-symbol" },
                      (0, Y.bw)(t.props, e, r),
                      { key: "symbol-".concat(r), role: "img" },
                    ),
                    s.renderSymbolItem(a === r ? n : i, l),
                  );
                });
              },
            },
            {
              key: "renderSymbolsWithAnimation",
              value: function () {
                var e = this,
                  t = this.props,
                  r = t.points,
                  i = t.isAnimationActive,
                  n = t.animationBegin,
                  a = t.animationDuration,
                  s = t.animationEasing,
                  o = t.animationId,
                  l = this.state.prevPoints;
                return g.createElement(
                  w.ZP,
                  {
                    begin: n,
                    duration: a,
                    isActive: i,
                    easing: s,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "pie-".concat(o),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (t) {
                    var i = t.t,
                      n = r.map(function (e, t) {
                        var r = l && l[t];
                        if (r) {
                          var n = (0, R.k4)(r.cx, e.cx),
                            a = (0, R.k4)(r.cy, e.cy),
                            s = (0, R.k4)(r.size, e.size);
                          return ee(
                            ee({}, e),
                            {},
                            { cx: n(i), cy: a(i), size: s(i) },
                          );
                        }
                        var o = (0, R.k4)(0, e.size);
                        return ee(ee({}, e), {}, { size: o(i) });
                      });
                    return g.createElement(
                      M.m,
                      null,
                      e.renderSymbolsStatically(n),
                    );
                  },
                );
              },
            },
            {
              key: "renderSymbols",
              value: function () {
                var e = this.props,
                  t = e.points,
                  r = e.isAnimationActive,
                  i = this.state.prevPoints;
                return !(r && t && t.length) || (i && a()(i, t))
                  ? this.renderSymbolsStatically(t)
                  : this.renderSymbolsWithAnimation();
              },
            },
            {
              key: "renderErrorBar",
              value: function () {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var e = this.props,
                  t = e.points,
                  r = e.xAxis,
                  i = e.yAxis,
                  n = e.children,
                  a = (0, O.NN)(n, K.W);
                if (!a) return null;
                function s(e, t) {
                  return {
                    x: e.cx,
                    y: e.cy,
                    value: +e.node.y,
                    errorVal: (0, E.F$)(e, t),
                  };
                }
                function o(e, t) {
                  return {
                    x: e.cx,
                    y: e.cy,
                    value: +e.node.x,
                    errorVal: (0, E.F$)(e, t),
                  };
                }
                return a.map(function (e, n) {
                  var a = e.props.direction;
                  return g.cloneElement(e, {
                    key: n,
                    data: t,
                    xAxis: r,
                    yAxis: i,
                    layout: "x" === a ? "vertical" : "horizontal",
                    dataPointFormatter: "x" === a ? o : s,
                  });
                });
              },
            },
            {
              key: "renderLine",
              value: function () {
                var e,
                  t,
                  r = this.props,
                  i = r.points,
                  n = r.line,
                  a = r.lineType,
                  s = r.lineJointType,
                  o = (0, O.L6)(this.props),
                  l = (0, O.L6)(n);
                if ("joint" === a)
                  e = i.map(function (e) {
                    return { x: e.cx, y: e.cy };
                  });
                else if ("fitting" === a) {
                  var c = (0, R.wr)(i),
                    u = c.xmin,
                    d = c.xmax,
                    f = c.a,
                    y = c.b,
                    p = function (e) {
                      return f * e + y;
                    };
                  e = [
                    { x: u, y: p(u) },
                    { x: d, y: p(d) },
                  ];
                }
                var B = ee(
                  ee(ee({}, o), {}, { fill: "none", stroke: o && o.fill }, l),
                  {},
                  { points: e },
                );
                return (
                  (t = g.isValidElement(n)
                    ? g.cloneElement(n, B)
                    : m()(n)
                    ? n(B)
                    : g.createElement(_.H, J({}, B, { type: s }))),
                  g.createElement(
                    M.m,
                    {
                      className: "recharts-scatter-line",
                      key: "recharts-scatter-line",
                    },
                    t,
                  )
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.hide,
                  r = e.points,
                  i = e.line,
                  n = e.className,
                  a = e.xAxis,
                  s = e.yAxis,
                  o = e.left,
                  l = e.top,
                  c = e.width,
                  u = e.height,
                  m = e.id,
                  d = e.isAnimationActive;
                if (t || !r || !r.length) return null;
                var f = this.state.isAnimationFinished,
                  y = v()("recharts-scatter", n),
                  B = (a && a.allowDataOverflow) || (s && s.allowDataOverflow),
                  b = p()(m) ? this.id : m;
                return g.createElement(
                  M.m,
                  {
                    className: y,
                    clipPath: B ? "url(#clipPath-".concat(b, ")") : null,
                  },
                  B
                    ? g.createElement(
                        "defs",
                        null,
                        g.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(b) },
                          g.createElement("rect", {
                            x: o,
                            y: l,
                            width: c,
                            height: u,
                          }),
                        ),
                      )
                    : null,
                  i && this.renderLine(),
                  this.renderErrorBar(),
                  g.createElement(
                    M.m,
                    { key: "recharts-scatter-symbols" },
                    this.renderSymbols(),
                  ),
                  (!d || f) && S.e.renderCallByParent(this.props, r),
                );
              },
            },
          ]) && te(t.prototype, r),
          i && te(t, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          s
        );
      })(g.PureComponent);
      se(le, "displayName", "Scatter"),
        se(le, "defaultProps", {
          xAxisId: 0,
          yAxisId: 0,
          zAxisId: 0,
          legendType: "circle",
          lineType: "joint",
          lineJointType: "linear",
          data: [],
          shape: "circle",
          hide: !1,
          isAnimationActive: !F.x.isSsr,
          animationBegin: 0,
          animationDuration: 400,
          animationEasing: "linear",
        }),
        se(le, "getComposedData", function (e) {
          var t = e.xAxis,
            r = e.yAxis,
            i = e.zAxis,
            n = e.item,
            a = e.displayedData,
            s = e.xAxisTicks,
            o = e.yAxisTicks,
            l = e.offset,
            c = n.props.tooltipType,
            u = (0, O.NN)(n.props.children, V.b),
            m = p()(t.dataKey) ? n.props.dataKey : t.dataKey,
            d = p()(r.dataKey) ? n.props.dataKey : r.dataKey,
            f = i && i.dataKey,
            y = i ? i.range : Z.defaultProps.range,
            B = y && y[0],
            b = t.scale.bandwidth ? t.scale.bandwidth() : 0,
            g = r.scale.bandwidth ? r.scale.bandwidth() : 0,
            h = a.map(function (e, a) {
              var l = (0, E.F$)(e, m),
                y = (0, E.F$)(e, d),
                h = (!p()(f) && (0, E.F$)(e, f)) || "-",
                v = [
                  {
                    name: p()(t.dataKey) ? n.props.name : t.name || t.dataKey,
                    unit: t.unit || "",
                    value: l,
                    payload: e,
                    dataKey: m,
                    type: c,
                  },
                  {
                    name: p()(r.dataKey) ? n.props.name : r.name || r.dataKey,
                    unit: r.unit || "",
                    value: y,
                    payload: e,
                    dataKey: d,
                    type: c,
                  },
                ];
              "-" !== h &&
                v.push({
                  name: i.name || i.dataKey,
                  unit: i.unit || "",
                  value: h,
                  payload: e,
                  dataKey: f,
                  type: c,
                });
              var w = (0, E.Hv)({
                  axis: t,
                  ticks: s,
                  bandSize: b,
                  entry: e,
                  index: a,
                  dataKey: m,
                }),
                _ = (0, E.Hv)({
                  axis: r,
                  ticks: o,
                  bandSize: g,
                  entry: e,
                  index: a,
                  dataKey: d,
                }),
                z = "-" !== h ? i.scale(h) : B,
                M = Math.sqrt(Math.max(z, 0) / Math.PI);
              return ee(
                ee({}, e),
                {},
                {
                  cx: w,
                  cy: _,
                  x: w - M,
                  y: _ - M,
                  xAxis: t,
                  yAxis: r,
                  zAxis: i,
                  width: 2 * M,
                  height: 2 * M,
                  size: z,
                  node: { x: l, y, z: h },
                  tooltipPayload: v,
                  tooltipPosition: { x: w, y: _ },
                  payload: e,
                },
                u && u[a] && u[a].props,
              );
            });
          return ee({ points: h }, l);
        });
      var ce = r(23007),
        ue = r(58104),
        me = r(87210),
        de = (0, i.z)({
          chartName: "ComposedChart",
          GraphicalChild: [q.x, G, L.$, le],
          axisComponents: [
            { axisType: "xAxis", AxisComp: ce.K },
            { axisType: "yAxis", AxisComp: ue.B },
            { axisType: "zAxis", AxisComp: Z },
          ],
          formatAxisMap: me.t9,
        });
    },
    30310: (e, t, r) => {
      r.d(t, { h: () => oe });
      var i = r(64403),
        n = r.n(i),
        a = r(89526),
        s = r(73961),
        o = function (e, t) {
          return (
            (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }),
            o(e, t)
          );
        };
      function l(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Class extends value " +
              String(t) +
              " is not a constructor or null",
          );
        function r() {
          this.constructor = e;
        }
        o(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      function c(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            t.indexOf(i) < 0 &&
            (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
            t.indexOf(i[n]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
              (r[i[n]] = e[i[n]]);
        }
        return r;
      }
      var u =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : void 0 !== r.g
          ? r.g
          : "undefined" != typeof self
          ? self
          : {};
      var m = function (e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        },
        d = "object" == typeof u && u && u.Object === Object && u,
        f = "object" == typeof self && self && self.Object === Object && self,
        y = d || f || Function("return this")(),
        p = y,
        B = function () {
          return p.Date.now();
        },
        b = /\s/;
      var g = function (e) {
          for (var t = e.length; t-- && b.test(e.charAt(t)); );
          return t;
        },
        h = /^\s+/;
      var v = function (e) {
          return e ? e.slice(0, g(e) + 1).replace(h, "") : e;
        },
        w = y.Symbol,
        _ = w,
        z = Object.prototype,
        M = z.hasOwnProperty,
        S = z.toString,
        F = _ ? _.toStringTag : void 0;
      var R = function (e) {
          var t = M.call(e, F),
            r = e[F];
          try {
            e[F] = void 0;
            var i = !0;
          } catch (e) {}
          var n = S.call(e);
          return i && (t ? (e[F] = r) : delete e[F]), n;
        },
        E = Object.prototype.toString;
      var O = R,
        W = function (e) {
          return E.call(e);
        },
        T = w ? w.toStringTag : void 0;
      var j = function (e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : T && T in Object(e)
            ? O(e)
            : W(e);
        },
        P = function (e) {
          return null != e && "object" == typeof e;
        };
      var I = v,
        C = m,
        x = function (e) {
          return "symbol" == typeof e || (P(e) && "[object Symbol]" == j(e));
        },
        D = /^[-+]0x[0-9a-f]+$/i,
        A = /^0b[01]+$/i,
        k = /^0o[0-7]+$/i,
        U = parseInt;
      var N = m,
        X = B,
        G = function (e) {
          if ("number" == typeof e) return e;
          if (x(e)) return NaN;
          if (C(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = C(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = I(e);
          var r = A.test(e);
          return r || k.test(e)
            ? U(e.slice(2), r ? 2 : 8)
            : D.test(e)
            ? NaN
            : +e;
        },
        L = Math.max,
        q = Math.min;
      var Z = function (e, t, r) {
          var i,
            n,
            a,
            s,
            o,
            l,
            c = 0,
            u = !1,
            m = !1,
            d = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function f(t) {
            var r = i,
              a = n;
            return (i = n = void 0), (c = t), (s = e.apply(a, r));
          }
          function y(e) {
            var r = e - l;
            return void 0 === l || r >= t || r < 0 || (m && e - c >= a);
          }
          function p() {
            var e = X();
            if (y(e)) return B(e);
            o = setTimeout(
              p,
              (function (e) {
                var r = t - (e - l);
                return m ? q(r, a - (e - c)) : r;
              })(e),
            );
          }
          function B(e) {
            return (o = void 0), d && i ? f(e) : ((i = n = void 0), s);
          }
          function b() {
            var e = X(),
              r = y(e);
            if (((i = arguments), (n = this), (l = e), r)) {
              if (void 0 === o)
                return (function (e) {
                  return (c = e), (o = setTimeout(p, t)), u ? f(e) : s;
                })(l);
              if (m) return clearTimeout(o), (o = setTimeout(p, t)), f(l);
            }
            return void 0 === o && (o = setTimeout(p, t)), s;
          }
          return (
            (t = G(t) || 0),
            N(r) &&
              ((u = !!r.leading),
              (a = (m = "maxWait" in r) ? L(G(r.maxWait) || 0, t) : a),
              (d = "trailing" in r ? !!r.trailing : d)),
            (b.cancel = function () {
              void 0 !== o && clearTimeout(o),
                (c = 0),
                (i = l = n = o = void 0);
            }),
            (b.flush = function () {
              return void 0 === o ? s : B(X());
            }),
            b
          );
        },
        H = Z,
        K = m;
      var V = function (e, t, r) {
          var i = !0,
            n = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          return (
            K(r) &&
              ((i = "leading" in r ? !!r.leading : i),
              (n = "trailing" in r ? !!r.trailing : n)),
            H(e, t, { leading: i, maxWait: t, trailing: n })
          );
        },
        Y = function (e, t, r, i) {
          switch (t) {
            case "debounce":
              return Z(e, r, i);
            case "throttle":
              return V(e, r, i);
            default:
              return e;
          }
        },
        $ = function (e) {
          return "function" == typeof e;
        },
        J = function () {
          return "undefined" == typeof window;
        },
        Q = function (e) {
          return e instanceof Element || e instanceof HTMLDocument;
        },
        ee = function (e, t, r, i) {
          return function (n) {
            var a = n.width,
              s = n.height;
            t(function (t) {
              return (t.width === a && t.height === s) ||
                (t.width === a && !i) ||
                (t.height === s && !r)
                ? t
                : (e && $(e) && e(a, s), { width: a, height: s });
            });
          };
        },
        te = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            (r.cancelHandler = function () {
              r.resizeHandler &&
                r.resizeHandler.cancel &&
                (r.resizeHandler.cancel(), (r.resizeHandler = null));
            }),
              (r.attachObserver = function () {
                var e = r.props,
                  t = e.targetRef,
                  i = e.observerOptions;
                if (!J()) {
                  t && t.current && (r.targetRef.current = t.current);
                  var n = r.getElement();
                  n &&
                    ((r.observableElement && r.observableElement === n) ||
                      ((r.observableElement = n),
                      r.resizeObserver.observe(n, i)));
                }
              }),
              (r.getElement = function () {
                var e = r.props,
                  t = e.querySelector,
                  i = e.targetDomEl;
                if (J()) return null;
                if (t) return document.querySelector(t);
                if (i && Q(i)) return i;
                if (r.targetRef && Q(r.targetRef.current))
                  return r.targetRef.current;
                var n = (0, s.findDOMNode)(r);
                if (!n) return null;
                switch (r.getRenderType()) {
                  case "renderProp":
                  case "childFunction":
                  case "child":
                  case "childArray":
                    return n;
                  default:
                    return n.parentElement;
                }
              }),
              (r.createResizeHandler = function (e) {
                var t = r.props,
                  i = t.handleWidth,
                  n = void 0 === i || i,
                  a = t.handleHeight,
                  s = void 0 === a || a,
                  o = t.onResize;
                if (n || s) {
                  var l = ee(o, r.setState.bind(r), n, s);
                  e.forEach(function (e) {
                    var t = (e && e.contentRect) || {},
                      i = t.width,
                      n = t.height;
                    !r.skipOnMount && !J() && l({ width: i, height: n }),
                      (r.skipOnMount = !1);
                  });
                }
              }),
              (r.getRenderType = function () {
                var e = r.props,
                  t = e.render,
                  i = e.children;
                return $(t)
                  ? "renderProp"
                  : $(i)
                  ? "childFunction"
                  : (0, a.isValidElement)(i)
                  ? "child"
                  : Array.isArray(i)
                  ? "childArray"
                  : "parent";
              });
            var i = t.skipOnMount,
              n = t.refreshMode,
              o = t.refreshRate,
              l = void 0 === o ? 1e3 : o,
              c = t.refreshOptions;
            return (
              (r.state = { width: void 0, height: void 0 }),
              (r.skipOnMount = i),
              (r.targetRef = (0, a.createRef)()),
              (r.observableElement = null),
              J() ||
                ((r.resizeHandler = Y(r.createResizeHandler, n, l, c)),
                (r.resizeObserver = new window.ResizeObserver(
                  r.resizeHandler,
                ))),
              r
            );
          }
          return (
            l(t, e),
            (t.prototype.componentDidMount = function () {
              this.attachObserver();
            }),
            (t.prototype.componentDidUpdate = function () {
              this.attachObserver();
            }),
            (t.prototype.componentWillUnmount = function () {
              J() ||
                ((this.observableElement = null),
                this.resizeObserver.disconnect(),
                this.cancelHandler());
            }),
            (t.prototype.render = function () {
              var e,
                t = this.props,
                r = t.render,
                i = t.children,
                n = t.nodeType,
                s = void 0 === n ? "div" : n,
                o = this.state,
                l = {
                  width: o.width,
                  height: o.height,
                  targetRef: this.targetRef,
                };
              switch (this.getRenderType()) {
                case "renderProp":
                  return r && r(l);
                case "childFunction":
                  return (e = i)(l);
                case "child":
                  if ((e = i).type && "string" == typeof e.type) {
                    var u = c(l, ["targetRef"]);
                    return (0, a.cloneElement)(e, u);
                  }
                  return (0, a.cloneElement)(e, l);
                case "childArray":
                  return (e = i).map(function (e) {
                    return !!e && (0, a.cloneElement)(e, l);
                  });
                default:
                  return a.createElement(s, null);
              }
            }),
            t
          );
        })(a.PureComponent);
      J() ? a.useEffect : a.useLayoutEffect;
      var re = r(16171),
        ie = r(78706);
      function ne() {
        return (
          (ne = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          ne.apply(this, arguments)
        );
      }
      function ae(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var i,
                n,
                a,
                s,
                o = [],
                l = !0,
                c = !1;
              try {
                if (((a = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (i = a.call(r)).done) &&
                    (o.push(i.value), o.length !== t);
                    l = !0
                  );
              } catch (e) {
                (c = !0), (n = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((s = r.return()), Object(s) !== s)
                  )
                    return;
                } finally {
                  if (c) throw n;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return se(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return se(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function se(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
        return i;
      }
      var oe = (0, a.forwardRef)(function (e, t) {
        var r = e.aspect,
          i = e.width,
          s = void 0 === i ? "100%" : i,
          o = e.height,
          l = void 0 === o ? "100%" : o,
          c = e.minWidth,
          u = e.minHeight,
          m = e.maxHeight,
          d = e.children,
          f = e.debounce,
          y = void 0 === f ? 0 : f,
          p = e.id,
          B = e.className,
          b = ae(
            (0, a.useState)({ containerWidth: -1, containerHeight: -1 }),
            2,
          ),
          g = b[0],
          h = b[1],
          v = (0, a.useRef)(null);
        (0, a.useImperativeHandle)(
          t,
          function () {
            return v;
          },
          [v],
        );
        var w = (0, a.useCallback)(function () {
            return v.current
              ? {
                  containerWidth: v.current.clientWidth,
                  containerHeight: v.current.clientHeight,
                }
              : null;
          }, []),
          _ = (0, a.useCallback)(
            function () {
              var e = w();
              if (e) {
                var t = e.containerWidth,
                  r = e.containerHeight;
                h(function (e) {
                  var i = e.containerWidth,
                    n = e.containerHeight;
                  return t !== i || r !== n
                    ? { containerWidth: t, containerHeight: r }
                    : e;
                });
              }
            },
            [w],
          ),
          z = (0, a.useMemo)(
            function () {
              var e = g.containerWidth,
                t = g.containerHeight;
              if (e < 0 || t < 0) return null;
              (0, ie.Z)(
                (0, re.hU)(s) || (0, re.hU)(l),
                "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",
                s,
                l,
              ),
                (0, ie.Z)(
                  !r || r > 0,
                  "The aspect(%s) must be greater than zero.",
                  r,
                );
              var i = (0, re.hU)(s) ? e : s,
                n = (0, re.hU)(l) ? t : l;
              return (
                r &&
                  r > 0 &&
                  (i ? (n = i / r) : n && (i = n * r), m && n > m && (n = m)),
                (0, ie.Z)(
                  i > 0 || n > 0,
                  "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
                  i,
                  n,
                  s,
                  l,
                  c,
                  u,
                  r,
                ),
                (0, a.cloneElement)(d, { width: i, height: n })
              );
            },
            [r, d, l, m, u, c, g, s],
          );
        (0, a.useEffect)(
          function () {
            var e = w();
            e && h(e);
          },
          [w],
        );
        var M = {
          width: s,
          height: l,
          minWidth: c,
          minHeight: u,
          maxHeight: m,
        };
        return a.createElement(
          te,
          {
            handleWidth: !0,
            handleHeight: !0,
            onResize: _,
            targetRef: v,
            refreshMode: y > 0 ? "debounce" : void 0,
            refreshRate: y,
          },
          a.createElement(
            "div",
            ne({}, null != p ? { id: "".concat(p) } : {}, {
              className: n()("recharts-responsive-container", B),
              style: M,
              ref: v,
            }),
            z,
          ),
        );
      });
    },
    626: (e) => {
      var t = function () {};
      e.exports = t;
    },
    16020: (e, t, r) => {
      r.d(t, {
        A8: () => o,
        NK: () => d,
        On: () => B,
        Wx: () => y,
        X3: () => l,
        sj: () => u,
        zY: () => c,
      });
      var i = r(45878),
        n = r(43898),
        a = r(67328);
      const s = i.Message;
      var o, l;
      !(function (e) {
        (e[(e.k_EDailyDealStoreItemType_Unknown = -1)] =
          "k_EDailyDealStoreItemType_Unknown"),
          (e[(e.k_EDailyDealStoreItemType_App = 0)] =
            "k_EDailyDealStoreItemType_App"),
          (e[(e.k_EDailyDealStoreItemType_Sub = 1)] =
            "k_EDailyDealStoreItemType_Sub"),
          (e[(e.k_EDailyDealStoreItemType_Bundle = 2)] =
            "k_EDailyDealStoreItemType_Bundle");
      })(o || (o = {}));
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.gid || n.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  gid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  store_item_type: {
                    n: 2,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  store_item_id: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  store_item_name: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  discount_event_id: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  creator_id: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtime32_start_time: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  last_update_time: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  template_json: {
                    n: 9,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  partner_jsondata: {
                    n: 10,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  internal_json: {
                    n: 11,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  deleted: { n: 12, br: n.FE.readBool, bw: n.Xc.writeBool },
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
          return "CDailyDeal";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.daily_deal || n.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  daily_deal: { n: 1, c },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
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
          return "CDailyDeal_CreateDailyDeal_Request";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.gid || n.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  gid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
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
          return "CDailyDeal_CreateDailyDeal_Response";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.daily_deal || n.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  daily_deal: { n: 1, c },
                  gid: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
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
          return "CDailyDeal_UpdateDailyDeal_Request";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_UpdateDailyDeal_Response";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.gid || n.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  gid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
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
          return "CDailyDeal_DeleteDailyDeal_Request";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new p();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_DeleteDailyDeal_Response";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.gid || n.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  gid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  rtime32_start_date: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtime32_end_date: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appid: { n: 4, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  store_item_type: {
                    n: 5,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  search_term: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
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
          return "CDailyDeal_GetDailyDeals_Request";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.daily_deals || n.aR(b.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { daily_deals: { n: 1, c, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_GetDailyDeals_Response";
        }
      }
      !(function (e) {
        (e.GetDailyDeals = function (e, t) {
          return e.SendMsg("DailyDeal.GetDailyDeals#1", (0, a.MD)(B, t), b, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.CreateDailyDeal = function (e, t) {
            return e.SendMsg(
              "DailyDeal.CreateDailyDeal#1",
              (0, a.MD)(u, t),
              m,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdateDailyDeal = function (e, t) {
            return e.SendMsg(
              "DailyDeal.UpdateDailyDeal#1",
              (0, a.MD)(d, t),
              f,
              { ePrivilege: 1 },
            );
          }),
          (e.DeleteDailyDeal = function (e, t) {
            return e.SendMsg(
              "DailyDeal.DeleteDailyDeal#1",
              (0, a.MD)(y, t),
              p,
              { ePrivilege: 1 },
            );
          });
      })(l || (l = {}));
    },
    94738: (e, t, r) => {
      r.d(t, {
        AP: () => Rt,
        No: () => Tt,
        Oz: () => jt,
        Sv: () => ge,
        bM: () => dt,
        kv: () => p,
        lk: () => b,
        n8: () => Ft,
      });
      var i = r(45878),
        n = r(43898),
        a = r(67328),
        s = r(76322);
      const o = i.Message;
      var l, c, u, m, d, f, y, p, B, b, g;
      !(function (e) {
        (e[(e.k_EUserBadgeInvalid = 0)] = "k_EUserBadgeInvalid"),
          (e[(e.k_EUserBadgeYearsOfService = 1)] =
            "k_EUserBadgeYearsOfService"),
          (e[(e.k_EUserBadgeCommunity = 2)] = "k_EUserBadgeCommunity"),
          (e[(e.k_EUserBadgePortal2PotatoARG = 3)] =
            "k_EUserBadgePortal2PotatoARG"),
          (e[(e.k_EUserBadgeTreasureHunt = 4)] = "k_EUserBadgeTreasureHunt"),
          (e[(e.k_EUserBadgeSummerSale2011 = 5)] =
            "k_EUserBadgeSummerSale2011"),
          (e[(e.k_EUserBadgeWinterSale2011 = 6)] =
            "k_EUserBadgeWinterSale2011"),
          (e[(e.k_EUserBadgeSummerSale2012 = 7)] =
            "k_EUserBadgeSummerSale2012"),
          (e[(e.k_EUserBadgeWinterSale2012 = 8)] =
            "k_EUserBadgeWinterSale2012"),
          (e[(e.k_EUserBadgeCommunityTranslator = 9)] =
            "k_EUserBadgeCommunityTranslator"),
          (e[(e.k_EUserBadgeCommunityModerator = 10)] =
            "k_EUserBadgeCommunityModerator"),
          (e[(e.k_EUserBadgeValveEmployee = 11)] = "k_EUserBadgeValveEmployee"),
          (e[(e.k_EUserBadgeGameDeveloper = 12)] = "k_EUserBadgeGameDeveloper"),
          (e[(e.k_EUserBadgeGameCollector = 13)] = "k_EUserBadgeGameCollector"),
          (e[(e.k_EUserBadgeTradingCardBetaParticipant = 14)] =
            "k_EUserBadgeTradingCardBetaParticipant"),
          (e[(e.k_EUserBadgeSteamBoxBeta = 15)] = "k_EUserBadgeSteamBoxBeta"),
          (e[(e.k_EUserBadgeSummer2014RedTeam = 16)] =
            "k_EUserBadgeSummer2014RedTeam"),
          (e[(e.k_EUserBadgeSummer2014BlueTeam = 17)] =
            "k_EUserBadgeSummer2014BlueTeam"),
          (e[(e.k_EUserBadgeSummer2014PinkTeam = 18)] =
            "k_EUserBadgeSummer2014PinkTeam"),
          (e[(e.k_EUserBadgeSummer2014GreenTeam = 19)] =
            "k_EUserBadgeSummer2014GreenTeam"),
          (e[(e.k_EUserBadgeSummer2014PurpleTeam = 20)] =
            "k_EUserBadgeSummer2014PurpleTeam"),
          (e[(e.k_EUserBadgeAuction2014 = 21)] = "k_EUserBadgeAuction2014"),
          (e[(e.k_EUserBadgeGoldenProfile2014 = 22)] =
            "k_EUserBadgeGoldenProfile2014"),
          (e[(e.k_EUserBadgeTowerAttackMiniGame = 23)] =
            "k_EUserBadgeTowerAttackMiniGame"),
          (e[(e.k_EUserBadgeWinter2015ARG_RedHerring = 24)] =
            "k_EUserBadgeWinter2015ARG_RedHerring"),
          (e[(e.k_EUserBadgeSteamAwards2016Nominations = 25)] =
            "k_EUserBadgeSteamAwards2016Nominations"),
          (e[(e.k_EUserBadgeStickerCompletionist2017 = 26)] =
            "k_EUserBadgeStickerCompletionist2017"),
          (e[(e.k_EUserBadgeSteamAwards2017Nominations = 27)] =
            "k_EUserBadgeSteamAwards2017Nominations"),
          (e[(e.k_EUserBadgeSpringCleaning2018 = 28)] =
            "k_EUserBadgeSpringCleaning2018"),
          (e[(e.k_EUserBadgeSalien = 29)] = "k_EUserBadgeSalien"),
          (e[(e.k_EUserBadgeRetiredModerator = 30)] =
            "k_EUserBadgeRetiredModerator"),
          (e[(e.k_EUserBadgeSteamAwards2018Nominations = 31)] =
            "k_EUserBadgeSteamAwards2018Nominations"),
          (e[(e.k_EUserBadgeValveModerator = 32)] =
            "k_EUserBadgeValveModerator"),
          (e[(e.k_EUserBadgeWinterSale2018 = 33)] =
            "k_EUserBadgeWinterSale2018"),
          (e[(e.k_EUserBadgeLunarNewYearSale2019 = 34)] =
            "k_EUserBadgeLunarNewYearSale2019"),
          (e[(e.k_EUserBadgeLunarNewYearSale2019GoldenProfile = 35)] =
            "k_EUserBadgeLunarNewYearSale2019GoldenProfile"),
          (e[(e.k_EUserBadgeSpringCleaning2019 = 36)] =
            "k_EUserBadgeSpringCleaning2019"),
          (e[(e.k_EUserBadgeSummerSale2019 = 37)] =
            "k_EUserBadgeSummerSale2019"),
          (e[(e.k_EUserBadgeSummerSale2019_TeamHare = 38)] =
            "k_EUserBadgeSummerSale2019_TeamHare"),
          (e[(e.k_EUserBadgeSummerSale2019_TeamTortoise = 39)] =
            "k_EUserBadgeSummerSale2019_TeamTortoise"),
          (e[(e.k_EUserBadgeSummerSale2019_TeamCorgi = 40)] =
            "k_EUserBadgeSummerSale2019_TeamCorgi"),
          (e[(e.k_EUserBadgeSummerSale2019_TeamCockatiel = 41)] =
            "k_EUserBadgeSummerSale2019_TeamCockatiel"),
          (e[(e.k_EUserBadgeSummerSale2019_TeamPig = 42)] =
            "k_EUserBadgeSummerSale2019_TeamPig"),
          (e[(e.k_EUserBadgeSteamAwards2019Nominations = 43)] =
            "k_EUserBadgeSteamAwards2019Nominations"),
          (e[(e.k_EUserBadgeWinterSaleEvent2019 = 44)] =
            "k_EUserBadgeWinterSaleEvent2019"),
          (e[(e.k_EUserBadgeWinterSale2019Steamville = 45)] =
            "k_EUserBadgeWinterSale2019Steamville"),
          (e[(e.k_EUserBadgeLunarNewYearSale2020 = 46)] =
            "k_EUserBadgeLunarNewYearSale2020"),
          (e[(e.k_EUserBadgeSpringCleaning2020 = 47)] =
            "k_EUserBadgeSpringCleaning2020"),
          (e[(e.k_EUserBadgeAwardsCommunityContributor = 48)] =
            "k_EUserBadgeAwardsCommunityContributor"),
          (e[(e.k_EUserBadgeAwardsCommunityPatron = 49)] =
            "k_EUserBadgeAwardsCommunityPatron"),
          (e[(e.k_EUserBadgeSteamAwards2020Nominations = 50)] =
            "k_EUserBadgeSteamAwards2020Nominations"),
          (e[(e.k_EUserBadgeSummerSale2021_MaskedAvenger = 51)] =
            "k_EUserBadgeSummerSale2021_MaskedAvenger"),
          (e[(e.k_EUserBadgeSummerSale2021_TrailblazingExplorer = 52)] =
            "k_EUserBadgeSummerSale2021_TrailblazingExplorer"),
          (e[(e.k_EUserBadgeSummerSale2021_GorillaScientist = 53)] =
            "k_EUserBadgeSummerSale2021_GorillaScientist"),
          (e[(e.k_EUserBadgeSummerSale2021_ParanormalProfessor = 54)] =
            "k_EUserBadgeSummerSale2021_ParanormalProfessor"),
          (e[(e.k_EUserBadgeSummerSale2021_GhostDetective = 55)] =
            "k_EUserBadgeSummerSale2021_GhostDetective"),
          (e[(e.k_EUserBadgeSteamAwards2021Nominations = 56)] =
            "k_EUserBadgeSteamAwards2021Nominations"),
          (e[(e.k_EUserBadgeSteamAwards2021NominationsClassic = 57)] =
            "k_EUserBadgeSteamAwards2021NominationsClassic"),
          (e[(e.k_EUserBadgeRetiredCommunityTranslator = 58)] =
            "k_EUserBadgeRetiredCommunityTranslator"),
          (e[(e.k_EUserBadgeRacingSale2022 = 59)] =
            "k_EUserBadgeRacingSale2022"),
          (e[(e.k_EUserBadgeNextFestSummer2022 = 60)] =
            "k_EUserBadgeNextFestSummer2022"),
          (e[(e.k_EUserBadgeSummerMiniGame2022 = 61)] =
            "k_EUserBadgeSummerMiniGame2022"),
          (e[(e.k_EUserBadgeNextFestAutumn2022 = 62)] =
            "k_EUserBadgeNextFestAutumn2022"),
          (e[(e.k_EUserBadgeSteamAwards2022Nominations = 63)] =
            "k_EUserBadgeSteamAwards2022Nominations"),
          (e[(e.k_EUserBadgeReplay2022 = 64)] = "k_EUserBadgeReplay2022"),
          (e[(e.k_EUserBadgeSteamAwards2023Nominations = 65)] =
            "k_EUserBadgeSteamAwards2023Nominations");
      })(l || (l = {})),
        (function (e) {
          (e[(e.k_EAuctionBadgeLevel_Invalid = 0)] =
            "k_EAuctionBadgeLevel_Invalid"),
            (e[(e.k_EAuctionBadgeLevel_MadeGoo = 1)] =
              "k_EAuctionBadgeLevel_MadeGoo"),
            (e[(e.k_EAuctionBadgeLevel_BidInAuction = 2)] =
              "k_EAuctionBadgeLevel_BidInAuction"),
            (e[(e.k_EAuctionBadgeLevel_WonInAuction = 3)] =
              "k_EAuctionBadgeLevel_WonInAuction");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_EProfileCustomizationStyleDefault = 0)] =
            "k_EProfileCustomizationStyleDefault"),
            (e[(e.k_EProfileCustomizationStyleSelected = 1)] =
              "k_EProfileCustomizationStyleSelected"),
            (e[(e.k_EProfileCustomizationStyleRarest = 2)] =
              "k_EProfileCustomizationStyleRarest"),
            (e[(e.k_EProfileCustomizationStyleMostRecent = 3)] =
              "k_EProfileCustomizationStyleMostRecent"),
            (e[(e.k_EProfileCustomizationStyleRandom = 4)] =
              "k_EProfileCustomizationStyleRandom"),
            (e[(e.k_EProfileCustomizationStyleHighestRated = 5)] =
              "k_EProfileCustomizationStyleHighestRated");
        })(u || (u = {})),
        (function (e) {
          e[(e.k_EProfileItemEquippedFlag_FullScreen = 1)] =
            "k_EProfileItemEquippedFlag_FullScreen";
        })(m || (m = {})),
        (function (e) {
          (e[(e.k_EProfileColorStyle_Invalid = 0)] =
            "k_EProfileColorStyle_Invalid"),
            (e[(e.k_EProfileColorStyle_BackgroundGradient_Left = 1)] =
              "k_EProfileColorStyle_BackgroundGradient_Left"),
            (e[(e.k_EProfileColorStyle_BackgroundGradient_Right = 2)] =
              "k_EProfileColorStyle_BackgroundGradient_Right"),
            (e[(e.k_EProfileColorStyle_BackgroundGradient_Center = 3)] =
              "k_EProfileColorStyle_BackgroundGradient_Center"),
            (e[(e.k_EProfileColorStyle_ShowcaseGradient_Left = 4)] =
              "k_EProfileColorStyle_ShowcaseGradient_Left"),
            (e[(e.k_EProfileColorStyle_ShowcaseGradient_Right = 5)] =
              "k_EProfileColorStyle_ShowcaseGradient_Right");
        })(d || (d = {})),
        (function (e) {
          (e[(e.k_EAgreementType_Invalid = -1)] = "k_EAgreementType_Invalid"),
            (e[(e.k_EAgreementType_GlobalSSA = 0)] =
              "k_EAgreementType_GlobalSSA"),
            (e[(e.k_EAgreementType_ChinaSSA = 1)] =
              "k_EAgreementType_ChinaSSA");
        })(f || (f = {})),
        (function (e) {
          (e[(e.k_ENotificationSettingNotifyUseDefault = 0)] =
            "k_ENotificationSettingNotifyUseDefault"),
            (e[(e.k_ENotificationSettingAlways = 1)] =
              "k_ENotificationSettingAlways"),
            (e[(e.k_ENotificationSettingNever = 2)] =
              "k_ENotificationSettingNever");
        })(y || (y = {})),
        (function (e) {
          (e[(e.k_ETextFilterSettingSteamLabOptedOut = 0)] =
            "k_ETextFilterSettingSteamLabOptedOut"),
            (e[(e.k_ETextFilterSettingEnabled = 1)] =
              "k_ETextFilterSettingEnabled"),
            (e[(e.k_ETextFilterSettingEnabledAllowProfanity = 2)] =
              "k_ETextFilterSettingEnabledAllowProfanity"),
            (e[(e.k_ETextFilterSettingDisabled = 3)] =
              "k_ETextFilterSettingDisabled");
        })(p || (p = {})),
        (function (e) {
          (e[(e.k_ETextFilterOperationAddWords = 0)] =
            "k_ETextFilterOperationAddWords"),
            (e[(e.k_ETextFilterOperationRemoveWords = 1)] =
              "k_ETextFilterOperationRemoveWords"),
            (e[(e.k_ETextFilterOperationReplaceWords = 2)] =
              "k_ETextFilterOperationReplaceWords");
        })(B || (B = {}));
      class h extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.min_last_played || n.aR(h.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  min_last_played: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
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
          return "CPlayer_GetLastPlayedTimes_Request";
        }
      }
      class v extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.games || n.aR(v.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: { games: { n: 1, c: w, r: !0, q: !0 } },
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
          return "CPlayer_GetLastPlayedTimes_Response";
        }
      }
      class w extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.appid || n.aR(w.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  appid: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  last_playtime: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  playtime_2weeks: {
                    n: 3,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  first_playtime: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  playtime_windows_forever: {
                    n: 6,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 7,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 8,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  first_windows_playtime: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  first_mac_playtime: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  first_linux_playtime: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  last_windows_playtime: {
                    n: 12,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  last_mac_playtime: {
                    n: 13,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  last_linux_playtime: {
                    n: 14,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  playtime_disconnected: {
                    n: 15,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
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
          return "CPlayer_GetLastPlayedTimes_Response_Game";
        }
      }
      class _ extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.steamids || n.aR(_.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  steamids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint64String,
                    pbr: n.FE.readPackedUint64String,
                    bw: n.Xc.writeRepeatedUint64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Request";
        }
      }
      class z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.accounts || n.aR(z.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: { accounts: { n: 1, c: M, r: !0, q: !0 } },
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
          return "CPlayer_GetPlayerLinkDetails_Response";
        }
      }
      class M extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.public_data || n.aR(M.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  public_data: { n: 1, c: S },
                  private_data: { n: 2, c: F },
                },
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
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails";
        }
      }
      class S extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.steamid || n.aR(S.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  steamid: {
                    n: 1,
                    q: !0,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  visibility_state: {
                    n: 2,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  privacy_state: {
                    n: 3,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  profile_state: {
                    n: 4,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  ban_expires_time: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  account_flags: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  sha_digest_avatar: {
                    n: 9,
                    br: n.FE.readBytes,
                    bw: n.Xc.writeBytes,
                  },
                  persona_name: {
                    n: 10,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  profile_url: {
                    n: 11,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  content_country_restricted: {
                    n: 12,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
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
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData";
        }
      }
      class F extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.persona_state || n.aR(F.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  persona_state: {
                    n: 1,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  persona_state_flags: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_created: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  game_id: {
                    n: 4,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  game_server_steam_id: {
                    n: 5,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  game_server_ip_address: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  game_server_port: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  game_extra_info: {
                    n: 8,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  account_name: {
                    n: 9,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  lobby_steam_id: {
                    n: 10,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  rich_presence_kv: {
                    n: 11,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  broadcast_session_id: {
                    n: 12,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  watching_broadcast_accountid: {
                    n: 13,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  watching_broadcast_appid: {
                    n: 14,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  watching_broadcast_viewers: {
                    n: 15,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  watching_broadcast_title: {
                    n: 16,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  last_logoff_time: {
                    n: 17,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  last_seen_online: {
                    n: 18,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  game_os_type: {
                    n: 19,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  game_device_type: {
                    n: 20,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  game_device_name: {
                    n: 21,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
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
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData";
        }
      }
      class R extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new R();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMutualFriendsForIncomingInvites_Request";
        }
      }
      class E extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.steamid || n.aR(E.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  mutual_friend_account_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
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
          return "CPlayer_IncomingInviteMutualFriendList";
        }
      }
      class O extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.incoming_invite_mutual_friends_lists || n.aR(O.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  incoming_invite_mutual_friends_lists: {
                    n: 1,
                    c: E,
                    r: !0,
                    q: !0,
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
          return "CPlayer_GetMutualFriendsForIncomingInvites_Response";
        }
      }
      class W extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.steamid || n.aR(W.M()),
            o.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  include_appinfo: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  include_played_free_games: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  appids_filter: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  include_free_sub: {
                    n: 5,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  skip_unvetted_apps: {
                    n: 6,
                    d: !0,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  language: { n: 7, br: n.FE.readString, bw: n.Xc.writeString },
                  include_extended_appinfo: {
                    n: 8,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = n.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Request";
        }
      }
      class T extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.game_count || n.aR(T.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  game_count: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  games: { n: 2, c: j, r: !0, q: !0 },
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
          return "CPlayer_GetOwnedGames_Response";
        }
      }
      class j extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.appid || n.aR(j.M()),
            o.initialize(this, e, 0, -1, [18], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  appid: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  name: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  playtime_2weeks: {
                    n: 3,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  img_icon_url: {
                    n: 5,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  has_community_visible_stats: {
                    n: 7,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  playtime_windows_forever: {
                    n: 8,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 9,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 10,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  rtime_last_played: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  capsule_filename: {
                    n: 12,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  sort_as: { n: 13, br: n.FE.readString, bw: n.Xc.writeString },
                  has_workshop: {
                    n: 14,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  has_market: { n: 15, br: n.FE.readBool, bw: n.Xc.writeBool },
                  has_dlc: { n: 16, br: n.FE.readBool, bw: n.Xc.writeBool },
                  has_leaderboards: {
                    n: 17,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  content_descriptorids: {
                    n: 18,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  playtime_disconnected: {
                    n: 19,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = n.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response_Game";
        }
      }
      class P extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.max_age_seconds || n.aR(P.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  max_age_seconds: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  ignore_appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
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
          return "CPlayer_GetPlayNext_Request";
        }
      }
      class I extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.last_update_time || n.aR(I.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  last_update_time: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
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
          return "CPlayer_GetPlayNext_Response";
        }
      }
      class C extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.play_sessions || n.aR(C.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: { play_sessions: { n: 3, c: x, r: !0, q: !0 } },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = n.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Request";
        }
      }
      class x extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.appid || n.aR(x.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  session_time_start: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  seconds: { n: 3, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  offline: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                  owner: { n: 5, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = n.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory";
        }
      }
      class D extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Response";
        }
      }
      class A extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.appid || n.aR(A.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
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
          return "CPlayer_GetGameBadgeLevels_Request";
        }
      }
      class k extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.player_level || n.aR(k.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  player_level: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  badges: { n: 2, c: U, r: !0, q: !0 },
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
          return "CPlayer_GetGameBadgeLevels_Response";
        }
      }
      class U extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.level || n.aR(U.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  level: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  series: { n: 2, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  border_color: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = n.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Response_Badge";
        }
      }
      class N extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.communityitemid || n.aR(N.M()),
            o.initialize(this, e, 0, -1, [15], null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  image_small: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  image_large: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  name: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  item_title: {
                    n: 5,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_description: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  appid: { n: 7, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  item_type: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  item_class: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  movie_webm: {
                    n: 10,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  movie_mp4: {
                    n: 11,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  movie_webm_small: {
                    n: 13,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  movie_mp4_small: {
                    n: 14,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  equipped_flags: {
                    n: 12,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  profile_colors: { n: 15, c: X, r: !0, q: !0 },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = n.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileItem";
        }
      }
      class X extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.style_name || n.aR(X.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  style_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  color: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = n.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(X.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileItem_ProfileColor";
        }
      }
      class G extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.steamid || n.aR(G.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = n.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileBackground_Request";
        }
      }
      class L extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.profile_background || n.aR(L.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: { profile_background: { n: 1, c: N } },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = n.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(L.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileBackground_Response";
        }
      }
      class q extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.communityitemid || n.aR(q.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = n.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(q.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Request";
        }
      }
      class Z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Z();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Response";
        }
      }
      class H extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.steamid || n.aR(H.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = n.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(H.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMiniProfileBackground_Request";
        }
      }
      class K extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.profile_background || n.aR(K.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: { profile_background: { n: 1, c: N } },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = n.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(K.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMiniProfileBackground_Response";
        }
      }
      class V extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.communityitemid || n.aR(V.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = n.Bh(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(V.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Request";
        }
      }
      class Y extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Y();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Response";
        }
      }
      class $ extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.steamid || n.aR($.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = n.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA($.M(), e, t);
        }
        static fromObject(e) {
          return n.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2($.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAvatarFrame_Request";
        }
      }
      class J extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.avatar_frame || n.aR(J.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = { proto: J, fields: { avatar_frame: { n: 1, c: N } } }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = n.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(J.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAvatarFrame_Response";
        }
      }
      class Q extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.communityitemid || n.aR(Q.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = n.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Q.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Request";
        }
      }
      class ee extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ee();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Response";
        }
      }
      class te extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.steamid || n.aR(te.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = n.Bh(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(te.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAnimatedAvatar_Request";
        }
      }
      class re extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.avatar || n.aR(re.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = { proto: re, fields: { avatar: { n: 1, c: N } } }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = n.Bh(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(re.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAnimatedAvatar_Response";
        }
      }
      class ie extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.communityitemid || n.aR(ie.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = n.Bh(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ie.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Request";
        }
      }
      class ne extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ne();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Response";
        }
      }
      class ae extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.steamid || n.aR(ae.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = n.Bh(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ae.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetSteamDeckKeyboardSkin_Request";
        }
      }
      class se extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.steam_deck_keyboard_skin || n.aR(se.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: { steam_deck_keyboard_skin: { n: 1, c: N } },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = n.Bh(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(se.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetSteamDeckKeyboardSkin_Response";
        }
      }
      class oe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.communityitemid || n.aR(oe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = n.Bh(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(oe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Request";
        }
      }
      class le extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new le();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Response";
        }
      }
      class ce extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.language || n.aR(ce.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  language: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  filters: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readEnum,
                    pbr: n.FE.readPackedEnum,
                    bw: n.Xc.writeRepeatedEnum,
                  },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = n.Bh(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ce.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsOwned_Request";
        }
      }
      class ue extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.profile_backgrounds || n.aR(ue.M()),
            o.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6, 7], null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  profile_backgrounds: { n: 1, c: N, r: !0, q: !0 },
                  mini_profile_backgrounds: { n: 2, c: N, r: !0, q: !0 },
                  avatar_frames: { n: 3, c: N, r: !0, q: !0 },
                  animated_avatars: { n: 4, c: N, r: !0, q: !0 },
                  profile_modifiers: { n: 5, c: N, r: !0, q: !0 },
                  steam_deck_keyboard_skins: { n: 6, c: N, r: !0, q: !0 },
                  steam_deck_startup_movies: { n: 7, c: N, r: !0, q: !0 },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = n.Bh(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ue.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsOwned_Response";
        }
      }
      class me extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.steamid || n.aR(me.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = n.Bh(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(me.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Request";
        }
      }
      class de extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.profile_background || n.aR(de.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  profile_background: { n: 1, c: N },
                  mini_profile_background: { n: 2, c: N },
                  avatar_frame: { n: 3, c: N },
                  animated_avatar: { n: 4, c: N },
                  profile_modifier: { n: 5, c: N },
                  steam_deck_keyboard_skin: { n: 6, c: N },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = n.Bh(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(de.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Response";
        }
      }
      class fe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.communityitemid || n.aR(fe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  flags: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = n.Bh(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(fe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetEquippedProfileItemFlags_Request";
        }
      }
      class ye extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ye();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetEquippedProfileItemFlags_Response";
        }
      }
      class pe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new pe();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Request";
        }
      }
      class Be extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.emoticons || n.aR(Be.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: { emoticons: { n: 1, c: be, r: !0, q: !0 } },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = n.Bh(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Be.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response";
        }
      }
      class be extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.name || n.aR(be.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  name: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  count: { n: 2, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  time_last_used: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  use_count: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_received: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appid: { n: 6, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = n.Bh(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(be.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response_Emoticon";
        }
      }
      class ge extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.appid || n.aR(ge.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  status_text: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = n.Bh(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ge.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Request";
        }
      }
      class he extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new he();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Response";
        }
      }
      class ve extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.steamid || n.aR(ve.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  postid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = n.Bh(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ve.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPostedStatus_Request";
        }
      }
      class we extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.accountid || n.aR(we.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  postid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  status_text: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  deleted: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                  appid: { n: 5, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = n.Bh(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(we.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPostedStatus_Response";
        }
      }
      class _e extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.postid || n.aR(_e.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  postid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = n.Bh(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_e.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_DeletePostedStatus_Request";
        }
      }
      class ze extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ze();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_DeletePostedStatus_Response";
        }
      }
      class Me extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.steamid || n.aR(Me.M()),
            o.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  max_achievements: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = n.Bh(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Me.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Request";
        }
      }
      class Se extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.games || n.aR(Se.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: { games: { n: 1, c: Re, r: !0, q: !0 } },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = n.Bh(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Se.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response";
        }
      }
      class Fe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.statid || n.aR(Fe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  statid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  bit: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  name: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  desc: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  icon: { n: 5, br: n.FE.readString, bw: n.Xc.writeString },
                  icon_gray: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  hidden: { n: 7, br: n.FE.readBool, bw: n.Xc.writeBool },
                  player_percent_unlocked: {
                    n: 8,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = n.Bh(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Fe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response_Achievement";
        }
      }
      class Re extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.appid || n.aR(Re.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  total_achievements: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  achievements: { n: 3, c: Fe, r: !0, q: !0 },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = n.Bh(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Re.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response_Game";
        }
      }
      class Ee extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.steamid || n.aR(Ee.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  appids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = n.Bh(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ee.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Request";
        }
      }
      class Oe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.achievement_progress || n.aR(Oe.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: { achievement_progress: { n: 1, c: We, r: !0, q: !0 } },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = n.Bh(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Oe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response";
        }
      }
      class We extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.appid || n.aR(We.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  unlocked: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  total: { n: 3, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  percentage: { n: 4, br: n.FE.readFloat, bw: n.Xc.writeFloat },
                  all_unlocked: { n: 5, br: n.FE.readBool, bw: n.Xc.writeBool },
                  cache_time: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = n.Bh(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(We.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response_AchievementProgress";
        }
      }
      class Te extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.appid || n.aR(Te.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = n.Bh(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Te.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Request";
        }
      }
      class je extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.achievements || n.aR(je.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: { achievements: { n: 1, c: Pe, r: !0, q: !0 } },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = n.Bh(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(je.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response";
        }
      }
      class Pe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.internal_name || n.aR(Pe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  internal_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  localized_name: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  localized_desc: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  icon: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  icon_gray: {
                    n: 5,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  hidden: { n: 6, br: n.FE.readBool, bw: n.Xc.writeBool },
                  player_percent_unlocked: {
                    n: 7,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = n.Bh(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Pe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response_Achievement";
        }
      }
      class Ie extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.steamid || n.aR(Ie.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = n.Bh(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ie.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFavoriteBadge_Request";
        }
      }
      class Ce extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.has_favorite_badge || n.aR(Ce.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  has_favorite_badge: {
                    n: 1,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  badgeid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  communityitemid: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  item_type: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  border_color: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appid: { n: 6, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  level: { n: 7, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = n.Bh(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ce.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFavoriteBadge_Response";
        }
      }
      class xe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.communityitemid || n.aR(xe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  badgeid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = n.Bh(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(xe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetFavoriteBadge_Request";
        }
      }
      class De extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new De();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetFavoriteBadge_Response";
        }
      }
      class Ae extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.slot || n.aR(Ae.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  slot: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  publishedfileid: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  item_assetid: {
                    n: 4,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  item_contextid: {
                    n: 5,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  notes: { n: 6, br: n.FE.readString, bw: n.Xc.writeString },
                  title: { n: 7, br: n.FE.readString, bw: n.Xc.writeString },
                  accountid: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  badgeid: { n: 9, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  border_color: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  item_classid: {
                    n: 11,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  item_instanceid: {
                    n: 12,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  ban_check_result: {
                    n: 13,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  replay_year: {
                    n: 14,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = n.Bh(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ae.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ae();
          return Ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomizationSlot";
        }
      }
      class ke extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.customization_type || n.aR(ke.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  customization_type: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  large: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                  slots: { n: 3, c: Ae, r: !0, q: !0 },
                  active: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                  customization_style: {
                    n: 5,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  purchaseid: {
                    n: 6,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  level: { n: 7, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = n.Bh(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ke.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomization";
        }
      }
      class Ue extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.theme_id || n.aR(Ue.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  theme_id: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  title: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = n.Bh(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ue.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileTheme";
        }
      }
      class Ne extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.hide_profile_awards || n.aR(Ne.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  hide_profile_awards: {
                    n: 1,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = n.Bh(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ne.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfilePreferences";
        }
      }
      class Xe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xe.prototype.steamid || n.aR(Xe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  include_inactive_customizations: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  include_purchased_customizations: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = n.Bh(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Xe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Xe();
          return Xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Request";
        }
      }
      class Ge extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.customizations || n.aR(Ge.M()),
            o.initialize(this, e, 0, -1, [1, 4], null);
        }
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  customizations: { n: 1, c: ke, r: !0, q: !0 },
                  slots_available: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  profile_theme: { n: 3, c: Ue },
                  purchased_customizations: { n: 4, c: Le, r: !0, q: !0 },
                  profile_preferences: { n: 5, c: Ne },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = n.Bh(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ge.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response";
        }
      }
      class Le extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.purchaseid || n.aR(Le.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  level: { n: 3, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = n.Bh(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Le.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Le();
          return Le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Le.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response_PurchasedCustomization";
        }
      }
      class qe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.steamid || n.aR(qe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = n.Bh(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(qe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Request";
        }
      }
      class Ze extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ze.prototype.purchased_customizations || n.aR(Ze.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ze.sm_m ||
              (Ze.sm_m = {
                proto: Ze,
                fields: {
                  purchased_customizations: { n: 1, c: He, r: !0, q: !0 },
                },
              }),
            Ze.sm_m
          );
        }
        static MBF() {
          return Ze.sm_mbf || (Ze.sm_mbf = n.Bh(Ze.M())), Ze.sm_mbf;
        }
        toObject(e = !1) {
          return Ze.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ze.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ze();
          return Ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response";
        }
      }
      class He extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            He.prototype.purchaseid || n.aR(He.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                },
              }),
            He.sm_m
          );
        }
        static MBF() {
          return He.sm_mbf || (He.sm_mbf = n.Bh(He.M())), He.sm_mbf;
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(He.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(He.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new He();
          return He.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(He.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(He.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class Ke extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ke.prototype.steamid || n.aR(Ke.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ke.sm_m ||
              (Ke.sm_m = {
                proto: Ke,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = n.Bh(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ke.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ke();
          return Ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request";
        }
      }
      class Ve extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ve.prototype.purchased_customizations || n.aR(Ve.M()),
            o.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            Ve.sm_m ||
              (Ve.sm_m = {
                proto: Ve,
                fields: {
                  purchased_customizations: { n: 1, c: Ye, r: !0, q: !0 },
                  upgraded_customizations: { n: 2, c: $e, r: !0, q: !0 },
                },
              }),
            Ve.sm_m
          );
        }
        static MBF() {
          return Ve.sm_mbf || (Ve.sm_mbf = n.Bh(Ve.M())), Ve.sm_mbf;
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ve.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ve();
          return Ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response";
        }
      }
      class Ye extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ye.prototype.customization_type || n.aR(Ye.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ye.sm_m ||
              (Ye.sm_m = {
                proto: Ye,
                fields: {
                  customization_type: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  count: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            Ye.sm_m
          );
        }
        static MBF() {
          return Ye.sm_mbf || (Ye.sm_mbf = n.Bh(Ye.M())), Ye.sm_mbf;
        }
        toObject(e = !1) {
          return Ye.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ye.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ye();
          return Ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class $e extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $e.prototype.customization_type || n.aR($e.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: {
                  customization_type: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  level: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = n.Bh($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA($e.M(), e, t);
        }
        static fromObject(e) {
          return n.aD($e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new $e();
          return $e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F($e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2($e.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization";
        }
      }
      class Je extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Je();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Je();
          return Je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileThemesAvailable_Request";
        }
      }
      class Qe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qe.prototype.profile_themes || n.aR(Qe.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Qe.sm_m ||
              (Qe.sm_m = {
                proto: Qe,
                fields: { profile_themes: { n: 1, c: Ue, r: !0, q: !0 } },
              }),
            Qe.sm_m
          );
        }
        static MBF() {
          return Qe.sm_mbf || (Qe.sm_mbf = n.Bh(Qe.M())), Qe.sm_mbf;
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Qe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Qe();
          return Qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileThemesAvailable_Response";
        }
      }
      class et extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            et.prototype.theme_id || n.aR(et.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            et.sm_m ||
              (et.sm_m = {
                proto: et,
                fields: {
                  theme_id: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            et.sm_m
          );
        }
        static MBF() {
          return et.sm_mbf || (et.sm_mbf = n.Bh(et.M())), et.sm_mbf;
        }
        toObject(e = !1) {
          return et.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(et.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(et.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new et();
          return et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(et.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(et.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileTheme_Request";
        }
      }
      class tt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return tt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new tt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new tt();
          return tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileTheme_Response";
        }
      }
      class rt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            rt.prototype.profile_preferences || n.aR(rt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            rt.sm_m ||
              (rt.sm_m = {
                proto: rt,
                fields: { profile_preferences: { n: 1, c: Ne } },
              }),
            rt.sm_m
          );
        }
        static MBF() {
          return rt.sm_mbf || (rt.sm_mbf = n.Bh(rt.M())), rt.sm_mbf;
        }
        toObject(e = !1) {
          return rt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(rt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(rt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new rt();
          return rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfilePreferences_Request";
        }
      }
      class it extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return it.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new it();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new it();
          return it.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return it.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfilePreferences_Response";
        }
      }
      class nt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            nt.prototype.appid || n.aR(nt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            nt.sm_m ||
              (nt.sm_m = {
                proto: nt,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            nt.sm_m
          );
        }
        static MBF() {
          return nt.sm_mbf || (nt.sm_mbf = n.Bh(nt.M())), nt.sm_mbf;
        }
        toObject(e = !1) {
          return nt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(nt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(nt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new nt();
          return nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(nt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(nt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Request";
        }
      }
      class at extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            at.prototype.your_info || n.aR(at.M()),
            o.initialize(this, e, 0, -1, [2, 3, 4, 5, 6], null);
        }
        static M() {
          return (
            at.sm_m ||
              (at.sm_m = {
                proto: at,
                fields: {
                  your_info: { n: 1, c: ot },
                  in_game: { n: 2, c: st, r: !0, q: !0 },
                  played_recently: { n: 3, c: st, r: !0, q: !0 },
                  played_ever: { n: 4, c: st, r: !0, q: !0 },
                  owns: { n: 5, c: st, r: !0, q: !0 },
                  in_wishlist: { n: 6, c: st, r: !0, q: !0 },
                },
              }),
            at.sm_m
          );
        }
        static MBF() {
          return at.sm_mbf || (at.sm_mbf = n.Bh(at.M())), at.sm_mbf;
        }
        toObject(e = !1) {
          return at.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(at.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(at.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new at();
          return at.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(at.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(at.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return at.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response";
        }
      }
      class st extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            st.prototype.steamid || n.aR(st.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            st.sm_m ||
              (st.sm_m = {
                proto: st,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            st.sm_m
          );
        }
        static MBF() {
          return st.sm_mbf || (st.sm_mbf = n.Bh(st.M())), st.sm_mbf;
        }
        toObject(e = !1) {
          return st.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(st.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(st.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new st();
          return st.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(st.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(st.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return st.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo";
        }
      }
      class ot extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ot.prototype.steamid || n.aR(ot.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ot.sm_m ||
              (ot.sm_m = {
                proto: ot,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  in_wishlist: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                  owned: { n: 5, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            ot.sm_m
          );
        }
        static MBF() {
          return ot.sm_mbf || (ot.sm_mbf = n.Bh(ot.M())), ot.sm_mbf;
        }
        toObject(e = !1) {
          return ot.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ot.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ot.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ot();
          return ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ot.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ot.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo";
        }
      }
      class lt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return lt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new lt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new lt();
          return lt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return lt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Request";
        }
      }
      class ct extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ct.prototype.time_ssa_accepted || n.aR(ct.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ct.sm_m ||
              (ct.sm_m = {
                proto: ct,
                fields: {
                  time_ssa_accepted: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_ssa_updated: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_chinassa_accepted: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            ct.sm_m
          );
        }
        static MBF() {
          return ct.sm_mbf || (ct.sm_mbf = n.Bh(ct.M())), ct.sm_mbf;
        }
        toObject(e = !1) {
          return ct.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ct.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ct.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ct();
          return ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ct.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ct.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Response";
        }
      }
      class ut extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ut.prototype.agreement_type || n.aR(ut.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ut.sm_m ||
              (ut.sm_m = {
                proto: ut,
                fields: {
                  agreement_type: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  time_signed_utc: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            ut.sm_m
          );
        }
        static MBF() {
          return ut.sm_mbf || (ut.sm_mbf = n.Bh(ut.M())), ut.sm_mbf;
        }
        toObject(e = !1) {
          return ut.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ut.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ut.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ut();
          return ut.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ut.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ut.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ut.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AcceptSSA_Request";
        }
      }
      class mt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return mt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new mt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new mt();
          return mt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return mt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AcceptSSA_Response";
        }
      }
      class dt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return dt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new dt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new dt();
          return dt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return dt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Request";
        }
      }
      class ft extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ft.prototype.nicknames || n.aR(ft.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ft.sm_m ||
              (ft.sm_m = {
                proto: ft,
                fields: { nicknames: { n: 1, c: yt, r: !0, q: !0 } },
              }),
            ft.sm_m
          );
        }
        static MBF() {
          return ft.sm_mbf || (ft.sm_mbf = n.Bh(ft.M())), ft.sm_mbf;
        }
        toObject(e = !1) {
          return ft.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ft.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ft.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ft();
          return ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ft.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ft.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response";
        }
      }
      class yt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            yt.prototype.accountid || n.aR(yt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            yt.sm_m ||
              (yt.sm_m = {
                proto: yt,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readFixed32,
                    bw: n.Xc.writeFixed32,
                  },
                  nickname: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            yt.sm_m
          );
        }
        static MBF() {
          return yt.sm_mbf || (yt.sm_mbf = n.Bh(yt.M())), yt.sm_mbf;
        }
        toObject(e = !1) {
          return yt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(yt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(yt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new yt();
          return yt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(yt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(yt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return yt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response_PlayerNickname";
        }
      }
      class pt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pt.prototype.accountid || n.aR(pt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            pt.sm_m ||
              (pt.sm_m = {
                proto: pt,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readFixed32,
                    bw: n.Xc.writeFixed32,
                  },
                  nickname: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  notifications_showingame: {
                    n: 3,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  notifications_showonline: {
                    n: 4,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  notifications_showmessages: {
                    n: 5,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  sounds_showingame: {
                    n: 6,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  sounds_showonline: {
                    n: 7,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  sounds_showmessages: {
                    n: 8,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  notifications_sendmobile: {
                    n: 9,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                },
              }),
            pt.sm_m
          );
        }
        static MBF() {
          return pt.sm_mbf || (pt.sm_mbf = n.Bh(pt.M())), pt.sm_mbf;
        }
        toObject(e = !1) {
          return pt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(pt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(pt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new pt();
          return pt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(pt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(pt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return pt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PerFriendPreferences";
        }
      }
      class Bt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Bt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Bt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Bt();
          return Bt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Bt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Request";
        }
      }
      class bt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            bt.prototype.preferences || n.aR(bt.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            bt.sm_m ||
              (bt.sm_m = {
                proto: bt,
                fields: { preferences: { n: 1, c: pt, r: !0, q: !0 } },
              }),
            bt.sm_m
          );
        }
        static MBF() {
          return bt.sm_mbf || (bt.sm_mbf = n.Bh(bt.M())), bt.sm_mbf;
        }
        toObject(e = !1) {
          return bt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(bt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(bt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new bt();
          return bt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(bt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(bt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return bt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Response";
        }
      }
      class gt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            gt.prototype.preferences || n.aR(gt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            gt.sm_m ||
              (gt.sm_m = {
                proto: gt,
                fields: { preferences: { n: 1, c: pt } },
              }),
            gt.sm_m
          );
        }
        static MBF() {
          return gt.sm_mbf || (gt.sm_mbf = n.Bh(gt.M())), gt.sm_mbf;
        }
        toObject(e = !1) {
          return gt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(gt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(gt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new gt();
          return gt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(gt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(gt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return gt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetPerFriendPreferences_Request";
        }
      }
      class ht extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ht.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ht();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ht();
          return ht.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ht.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetPerFriendPreferences_Response";
        }
      }
      class vt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            vt.prototype.steamid || n.aR(vt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            vt.sm_m ||
              (vt.sm_m = {
                proto: vt,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            vt.sm_m
          );
        }
        static MBF() {
          return vt.sm_mbf || (vt.sm_mbf = n.Bh(vt.M())), vt.sm_mbf;
        }
        toObject(e = !1) {
          return vt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(vt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(vt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new vt();
          return vt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(vt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(vt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return vt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AddFriend_Request";
        }
      }
      class wt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            wt.prototype.invite_sent || n.aR(wt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            wt.sm_m ||
              (wt.sm_m = {
                proto: wt,
                fields: {
                  invite_sent: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  friend_relationship: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  result: { n: 3, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                },
              }),
            wt.sm_m
          );
        }
        static MBF() {
          return wt.sm_mbf || (wt.sm_mbf = n.Bh(wt.M())), wt.sm_mbf;
        }
        toObject(e = !1) {
          return wt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(wt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(wt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new wt();
          return wt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(wt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(wt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return wt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AddFriend_Response";
        }
      }
      class _t extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _t.prototype.steamid || n.aR(_t.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _t.sm_m ||
              (_t.sm_m = {
                proto: _t,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            _t.sm_m
          );
        }
        static MBF() {
          return _t.sm_mbf || (_t.sm_mbf = n.Bh(_t.M())), _t.sm_mbf;
        }
        toObject(e = !1) {
          return _t.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_t.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_t.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _t();
          return _t.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_t.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _t.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_t.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _t.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RemoveFriend_Request";
        }
      }
      class zt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            zt.prototype.friend_relationship || n.aR(zt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            zt.sm_m ||
              (zt.sm_m = {
                proto: zt,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            zt.sm_m
          );
        }
        static MBF() {
          return zt.sm_mbf || (zt.sm_mbf = n.Bh(zt.M())), zt.sm_mbf;
        }
        toObject(e = !1) {
          return zt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(zt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(zt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new zt();
          return zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(zt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(zt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RemoveFriend_Response";
        }
      }
      class Mt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mt.prototype.steamid || n.aR(Mt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Mt.sm_m ||
              (Mt.sm_m = {
                proto: Mt,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  unignore: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            Mt.sm_m
          );
        }
        static MBF() {
          return Mt.sm_mbf || (Mt.sm_mbf = n.Bh(Mt.M())), Mt.sm_mbf;
        }
        toObject(e = !1) {
          return Mt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Mt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Mt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Mt();
          return Mt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Mt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Mt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IgnoreFriend_Request";
        }
      }
      class St extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            St.prototype.friend_relationship || n.aR(St.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            St.sm_m ||
              (St.sm_m = {
                proto: St,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            St.sm_m
          );
        }
        static MBF() {
          return St.sm_mbf || (St.sm_mbf = n.Bh(St.M())), St.sm_mbf;
        }
        toObject(e = !1) {
          return St.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(St.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(St.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new St();
          return St.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(St.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(St.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return St.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IgnoreFriend_Response";
        }
      }
      class Ft extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ft.prototype.parenthesize_nicknames || n.aR(Ft.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ft.sm_m ||
              (Ft.sm_m = {
                proto: Ft,
                fields: {
                  parenthesize_nicknames: {
                    n: 4,
                    d: !1,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  text_filter_setting: {
                    n: 5,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  text_filter_ignore_friends: {
                    n: 6,
                    d: !0,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  text_filter_words_revision: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  timestamp_updated: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            Ft.sm_m
          );
        }
        static MBF() {
          return Ft.sm_mbf || (Ft.sm_mbf = n.Bh(Ft.M())), Ft.sm_mbf;
        }
        toObject(e = !1) {
          return Ft.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ft.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ft.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ft();
          return Ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ft.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ft.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferences";
        }
      }
      class Rt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Rt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Rt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Rt();
          return Rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Request";
        }
      }
      class Et extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Et.prototype.preferences || n.aR(Et.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Et.sm_m ||
              (Et.sm_m = {
                proto: Et,
                fields: {
                  preferences: { n: 1, c: Ft },
                  content_descriptor_preferences: { n: 2, c: s.cF },
                },
              }),
            Et.sm_m
          );
        }
        static MBF() {
          return Et.sm_mbf || (Et.sm_mbf = n.Bh(Et.M())), Et.sm_mbf;
        }
        toObject(e = !1) {
          return Et.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Et.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Et.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Et();
          return Et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Et.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Et.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Response";
        }
      }
      class Ot extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ot.prototype.preferences || n.aR(Ot.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ot.sm_m ||
              (Ot.sm_m = {
                proto: Ot,
                fields: { preferences: { n: 1, c: Ft } },
              }),
            Ot.sm_m
          );
        }
        static MBF() {
          return Ot.sm_mbf || (Ot.sm_mbf = n.Bh(Ot.M())), Ot.sm_mbf;
        }
        toObject(e = !1) {
          return Ot.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ot.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ot.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ot();
          return Ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ot.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ot.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetCommunityPreferences_Request";
        }
      }
      class Wt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Wt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Wt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Wt();
          return Wt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Wt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetCommunityPreferences_Response";
        }
      }
      class Tt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tt.prototype.text_filter_custom_banned_words || n.aR(Tt.M()),
            o.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            Tt.sm_m ||
              (Tt.sm_m = {
                proto: Tt,
                fields: {
                  text_filter_custom_banned_words: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeRepeatedString,
                  },
                  text_filter_custom_clean_words: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeRepeatedString,
                  },
                  text_filter_words_revision: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            Tt.sm_m
          );
        }
        static MBF() {
          return Tt.sm_mbf || (Tt.sm_mbf = n.Bh(Tt.M())), Tt.sm_mbf;
        }
        toObject(e = !1) {
          return Tt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Tt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Tt();
          return Tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWords";
        }
      }
      class jt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return jt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new jt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new jt();
          return jt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return jt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Request";
        }
      }
      class Pt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pt.prototype.words || n.aR(Pt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Pt.sm_m ||
              (Pt.sm_m = { proto: Pt, fields: { words: { n: 1, c: Tt } } }),
            Pt.sm_m
          );
        }
        static MBF() {
          return Pt.sm_mbf || (Pt.sm_mbf = n.Bh(Pt.M())), Pt.sm_mbf;
        }
        toObject(e = !1) {
          return Pt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Pt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Pt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Pt();
          return Pt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Pt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Pt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Pt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Response";
        }
      }
      class It extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            It.prototype.language || n.aR(It.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            It.sm_m ||
              (It.sm_m = {
                proto: It,
                fields: {
                  language: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                },
              }),
            It.sm_m
          );
        }
        static MBF() {
          return It.sm_mbf || (It.sm_mbf = n.Bh(It.M())), It.sm_mbf;
        }
        toObject(e = !1) {
          return It.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(It.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(It.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new It();
          return It.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(It.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(It.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return It.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNewSteamAnnouncementState_Request";
        }
      }
      class Ct extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ct.prototype.state || n.aR(Ct.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ct.sm_m ||
              (Ct.sm_m = {
                proto: Ct,
                fields: {
                  state: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  announcement_headline: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            Ct.sm_m
          );
        }
        static MBF() {
          return Ct.sm_mbf || (Ct.sm_mbf = n.Bh(Ct.M())), Ct.sm_mbf;
        }
        toObject(e = !1) {
          return Ct.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ct.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ct.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ct();
          return Ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ct.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ct.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNewSteamAnnouncementState_Response";
        }
      }
      class xt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xt.prototype.announcement_gid || n.aR(xt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            xt.sm_m ||
              (xt.sm_m = {
                proto: xt,
                fields: {
                  announcement_gid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  time_posted: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            xt.sm_m
          );
        }
        static MBF() {
          return xt.sm_mbf || (xt.sm_mbf = n.Bh(xt.M())), xt.sm_mbf;
        }
        toObject(e = !1) {
          return xt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(xt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(xt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new xt();
          return xt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(xt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(xt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return xt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_UpdateSteamAnnouncementLastRead_Request";
        }
      }
      class Dt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Dt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Dt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Dt();
          return Dt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Dt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_UpdateSteamAnnouncementLastRead_Response";
        }
      }
      class At extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            At.prototype.privacy_state || n.aR(At.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            At.sm_m ||
              (At.sm_m = {
                proto: At,
                fields: {
                  privacy_state: {
                    n: 1,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  privacy_state_inventory: {
                    n: 2,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  privacy_state_gifts: {
                    n: 3,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  privacy_state_ownedgames: {
                    n: 4,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  privacy_state_playtime: {
                    n: 5,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  privacy_state_friendslist: {
                    n: 6,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                },
              }),
            At.sm_m
          );
        }
        static MBF() {
          return At.sm_mbf || (At.sm_mbf = n.Bh(At.M())), At.sm_mbf;
        }
        toObject(e = !1) {
          return At.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(At.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(At.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new At();
          return At.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(At.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return At.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(At.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return At.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPrivacySettings";
        }
      }
      class kt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return kt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new kt();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new kt();
          return kt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return kt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPrivacySettings_Request";
        }
      }
      class Ut extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ut.prototype.privacy_settings || n.aR(Ut.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ut.sm_m ||
              (Ut.sm_m = {
                proto: Ut,
                fields: { privacy_settings: { n: 1, c: At } },
              }),
            Ut.sm_m
          );
        }
        static MBF() {
          return Ut.sm_mbf || (Ut.sm_mbf = n.Bh(Ut.M())), Ut.sm_mbf;
        }
        toObject(e = !1) {
          return Ut.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ut.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ut.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ut();
          return Ut.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ut.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ut.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPrivacySettings_Response";
        }
      }
      class Nt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nt.prototype.appid || n.aR(Nt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Nt.sm_m ||
              (Nt.sm_m = {
                proto: Nt,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            Nt.sm_m
          );
        }
        static MBF() {
          return Nt.sm_mbf || (Nt.sm_mbf = n.Bh(Nt.M())), Nt.sm_mbf;
        }
        toObject(e = !1) {
          return Nt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Nt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Nt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Nt();
          return Nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Nt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Nt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetDurationControl_Request";
        }
      }
      class Xt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xt.prototype.is_enabled || n.aR(Xt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Xt.sm_m ||
              (Xt.sm_m = {
                proto: Xt,
                fields: {
                  is_enabled: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  seconds: { n: 2, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  seconds_today: {
                    n: 3,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  is_steamchina_account: {
                    n: 4,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  is_age_verified: {
                    n: 5,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  seconds_allowed_today: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  age_verification_pending: {
                    n: 7,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  block_minors: { n: 8, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            Xt.sm_m
          );
        }
        static MBF() {
          return Xt.sm_mbf || (Xt.sm_mbf = n.Bh(Xt.M())), Xt.sm_mbf;
        }
        toObject(e = !1) {
          return Xt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Xt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Xt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Xt();
          return Xt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Xt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Xt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Xt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetDurationControl_Response";
        }
      }
      class Gt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Gt.prototype.games || n.aR(Gt.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Gt.sm_m ||
              (Gt.sm_m = {
                proto: Gt,
                fields: { games: { n: 1, c: w, r: !0, q: !0 } },
              }),
            Gt.sm_m
          );
        }
        static MBF() {
          return Gt.sm_mbf || (Gt.sm_mbf = n.Bh(Gt.M())), Gt.sm_mbf;
        }
        toObject(e = !1) {
          return Gt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Gt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Gt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Gt();
          return Gt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Gt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Gt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Gt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_LastPlayedTimes_Notification";
        }
      }
      class Lt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Lt.prototype.accountid || n.aR(Lt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Lt.sm_m ||
              (Lt.sm_m = {
                proto: Lt,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readFixed32,
                    bw: n.Xc.writeFixed32,
                  },
                  nickname: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  is_echo_to_self: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            Lt.sm_m
          );
        }
        static MBF() {
          return Lt.sm_mbf || (Lt.sm_mbf = n.Bh(Lt.M())), Lt.sm_mbf;
        }
        toObject(e = !1) {
          return Lt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Lt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Lt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Lt();
          return Lt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Lt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Lt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Lt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendNicknameChanged_Notification";
        }
      }
      class qt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qt.prototype.accountid || n.aR(qt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            qt.sm_m ||
              (qt.sm_m = {
                proto: qt,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readFixed32,
                    bw: n.Xc.writeFixed32,
                  },
                },
              }),
            qt.sm_m
          );
        }
        static MBF() {
          return qt.sm_mbf || (qt.sm_mbf = n.Bh(qt.M())), qt.sm_mbf;
        }
        toObject(e = !1) {
          return qt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(qt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(qt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new qt();
          return qt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(qt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return qt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(qt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return qt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendEquippedProfileItemsChanged_Notification";
        }
      }
      class Zt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Zt.prototype.state || n.aR(Zt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Zt.sm_m ||
              (Zt.sm_m = {
                proto: Zt,
                fields: {
                  state: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  announcement_headline: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            Zt.sm_m
          );
        }
        static MBF() {
          return Zt.sm_mbf || (Zt.sm_mbf = n.Bh(Zt.M())), Zt.sm_mbf;
        }
        toObject(e = !1) {
          return Zt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Zt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Zt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Zt();
          return Zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Zt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Zt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_NewSteamAnnouncementState_Notification";
        }
      }
      class Ht extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ht.prototype.preferences || n.aR(Ht.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ht.sm_m ||
              (Ht.sm_m = {
                proto: Ht,
                fields: {
                  preferences: { n: 1, c: Ft },
                  content_descriptor_preferences: { n: 2, c: s.cF },
                },
              }),
            Ht.sm_m
          );
        }
        static MBF() {
          return Ht.sm_mbf || (Ht.sm_mbf = n.Bh(Ht.M())), Ht.sm_mbf;
        }
        toObject(e = !1) {
          return Ht.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ht.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ht.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ht();
          return Ht.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ht.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ht.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ht.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferencesChanged_Notification";
        }
      }
      class Kt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Kt.prototype.words || n.aR(Kt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Kt.sm_m ||
              (Kt.sm_m = { proto: Kt, fields: { words: { n: 1, c: Tt } } }),
            Kt.sm_m
          );
        }
        static MBF() {
          return Kt.sm_mbf || (Kt.sm_mbf = n.Bh(Kt.M())), Kt.sm_mbf;
        }
        toObject(e = !1) {
          return Kt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Kt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Kt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Kt();
          return Kt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Kt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Kt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Kt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWordsChanged_Notification";
        }
      }
      class Vt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Vt.prototype.accountid || n.aR(Vt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Vt.sm_m ||
              (Vt.sm_m = {
                proto: Vt,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readFixed32,
                    bw: n.Xc.writeFixed32,
                  },
                  preferences: { n: 2, c: pt },
                },
              }),
            Vt.sm_m
          );
        }
        static MBF() {
          return Vt.sm_mbf || (Vt.sm_mbf = n.Bh(Vt.M())), Vt.sm_mbf;
        }
        toObject(e = !1) {
          return Vt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Vt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Vt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Vt();
          return Vt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Vt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Vt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Vt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PerFriendPreferencesChanged_Notification";
        }
      }
      class Yt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Yt.prototype.privacy_settings || n.aR(Yt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Yt.sm_m ||
              (Yt.sm_m = {
                proto: Yt,
                fields: { privacy_settings: { n: 1, c: At } },
              }),
            Yt.sm_m
          );
        }
        static MBF() {
          return Yt.sm_mbf || (Yt.sm_mbf = n.Bh(Yt.M())), Yt.sm_mbf;
        }
        toObject(e = !1) {
          return Yt.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Yt.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Yt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Yt();
          return Yt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Yt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Yt.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Yt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PrivacySettingsChanged_Notification";
        }
      }
      !(function (e) {
        (e.GetPlayerLinkDetails = function (e, t) {
          return e.SendMsg(
            "Player.GetPlayerLinkDetails#1",
            (0, a.MD)(_, t),
            z,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetMutualFriendsForIncomingInvites = function (e, t) {
            return e.SendMsg(
              "Player.GetMutualFriendsForIncomingInvites#1",
              (0, a.MD)(R, t),
              O,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetOwnedGames = function (e, t) {
            return e.SendMsg("Player.GetOwnedGames#1", (0, a.MD)(W, t), T, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetPlayNext = function (e, t) {
            return e.SendMsg("Player.GetPlayNext#1", (0, a.MD)(P, t), I, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFriendsGameplayInfo = function (e, t) {
            return e.SendMsg(
              "Player.GetFriendsGameplayInfo#1",
              (0, a.MD)(nt, t),
              at,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetGameBadgeLevels = function (e, t) {
            return e.SendMsg(
              "Player.GetGameBadgeLevels#1",
              (0, a.MD)(A, t),
              k,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetProfileBackground = function (e, t) {
            return e.SendMsg(
              "Player.GetProfileBackground#1",
              (0, a.MD)(G, t),
              L,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetProfileBackground = function (e, t) {
            return e.SendMsg(
              "Player.SetProfileBackground#1",
              (0, a.MD)(q, t),
              Z,
              { ePrivilege: 1 },
            );
          }),
          (e.GetMiniProfileBackground = function (e, t) {
            return e.SendMsg(
              "Player.GetMiniProfileBackground#1",
              (0, a.MD)(H, t),
              K,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetMiniProfileBackground = function (e, t) {
            return e.SendMsg(
              "Player.SetMiniProfileBackground#1",
              (0, a.MD)(V, t),
              Y,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAvatarFrame = function (e, t) {
            return e.SendMsg("Player.GetAvatarFrame#1", (0, a.MD)($, t), J, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetAvatarFrame = function (e, t) {
            return e.SendMsg("Player.SetAvatarFrame#1", (0, a.MD)(Q, t), ee, {
              ePrivilege: 1,
            });
          }),
          (e.GetAnimatedAvatar = function (e, t) {
            return e.SendMsg(
              "Player.GetAnimatedAvatar#1",
              (0, a.MD)(te, t),
              re,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetAnimatedAvatar = function (e, t) {
            return e.SendMsg(
              "Player.SetAnimatedAvatar#1",
              (0, a.MD)(ie, t),
              ne,
              { ePrivilege: 1 },
            );
          }),
          (e.GetSteamDeckKeyboardSkin = function (e, t) {
            return e.SendMsg(
              "Player.GetSteamDeckKeyboardSkin#1",
              (0, a.MD)(ae, t),
              se,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetSteamDeckKeyboardSkin = function (e, t) {
            return e.SendMsg(
              "Player.SetSteamDeckKeyboardSkin#1",
              (0, a.MD)(oe, t),
              le,
              { ePrivilege: 1 },
            );
          }),
          (e.GetProfileItemsOwned = function (e, t) {
            return e.SendMsg(
              "Player.GetProfileItemsOwned#1",
              (0, a.MD)(ce, t),
              ue,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetProfileItemsEquipped = function (e, t) {
            return e.SendMsg(
              "Player.GetProfileItemsEquipped#1",
              (0, a.MD)(me, t),
              de,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetEquippedProfileItemFlags = function (e, t) {
            return e.SendMsg(
              "Player.SetEquippedProfileItemFlags#1",
              (0, a.MD)(fe, t),
              ye,
              { ePrivilege: 1 },
            );
          }),
          (e.GetEmoticonList = function (e, t) {
            return e.SendMsg("Player.GetEmoticonList#1", (0, a.MD)(pe, t), Be, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetTopAchievementsForGames = function (e, t) {
            return e.SendMsg(
              "Player.GetTopAchievementsForGames#1",
              (0, a.MD)(Me, t),
              Se,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetAchievementsProgress = function (e, t) {
            return e.SendMsg(
              "Player.GetAchievementsProgress#1",
              (0, a.MD)(Ee, t),
              Oe,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetGameAchievements = function (e, t) {
            return e.SendMsg(
              "Player.GetGameAchievements#1",
              (0, a.MD)(Te, t),
              je,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetFavoriteBadge = function (e, t) {
            return e.SendMsg(
              "Player.GetFavoriteBadge#1",
              (0, a.MD)(Ie, t),
              Ce,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetFavoriteBadge = function (e, t) {
            return e.SendMsg(
              "Player.SetFavoriteBadge#1",
              (0, a.MD)(xe, t),
              De,
              { ePrivilege: 1 },
            );
          }),
          (e.GetProfileCustomization = function (e, t) {
            return e.SendMsg(
              "Player.GetProfileCustomization#1",
              (0, a.MD)(Xe, t),
              Ge,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPurchasedProfileCustomizations = function (e, t) {
            return e.SendMsg(
              "Player.GetPurchasedProfileCustomizations#1",
              (0, a.MD)(qe, t),
              Ze,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPurchasedAndUpgradedProfileCustomizations = function (e, t) {
            return e.SendMsg(
              "Player.GetPurchasedAndUpgradedProfileCustomizations#1",
              (0, a.MD)(Ke, t),
              Ve,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetProfileThemesAvailable = function (e, t) {
            return e.SendMsg(
              "Player.GetProfileThemesAvailable#1",
              (0, a.MD)(Je, t),
              Qe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetProfileTheme = function (e, t) {
            return e.SendMsg("Player.SetProfileTheme#1", (0, a.MD)(et, t), tt, {
              ePrivilege: 1,
            });
          }),
          (e.SetProfilePreferences = function (e, t) {
            return e.SendMsg(
              "Player.SetProfilePreferences#1",
              (0, a.MD)(rt, t),
              it,
              { ePrivilege: 1 },
            );
          }),
          (e.PostStatusToFriends = function (e, t) {
            return e.SendMsg(
              "Player.PostStatusToFriends#1",
              (0, a.MD)(ge, t),
              he,
              { ePrivilege: 3 },
            );
          }),
          (e.GetPostedStatus = function (e, t) {
            return e.SendMsg("Player.GetPostedStatus#1", (0, a.MD)(ve, t), we, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.DeletePostedStatus = function (e, t) {
            return e.SendMsg(
              "Player.DeletePostedStatus#1",
              (0, a.MD)(_e, t),
              ze,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetLastPlayedTimes = function (e, t) {
            return e.SendMsg(
              "Player.ClientGetLastPlayedTimes#1",
              (0, a.MD)(h, t),
              v,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetTimeSSAAccepted = function (e, t) {
            return e.SendMsg(
              "Player.GetTimeSSAAccepted#1",
              (0, a.MD)(lt, t),
              ct,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.AcceptSSA = function (e, t) {
            return e.SendMsg("Player.AcceptSSA#1", (0, a.MD)(ut, t), mt, {
              ePrivilege: 1,
            });
          }),
          (e.GetNicknameList = function (e, t) {
            return e.SendMsg("Player.GetNicknameList#1", (0, a.MD)(dt, t), ft, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetPerFriendPreferences = function (e, t) {
            return e.SendMsg(
              "Player.GetPerFriendPreferences#1",
              (0, a.MD)(Bt, t),
              bt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetPerFriendPreferences = function (e, t) {
            return e.SendMsg(
              "Player.SetPerFriendPreferences#1",
              (0, a.MD)(gt, t),
              ht,
              { ePrivilege: 1 },
            );
          }),
          (e.AddFriend = function (e, t) {
            return e.SendMsg("Player.AddFriend#1", (0, a.MD)(vt, t), wt, {
              ePrivilege: 1,
            });
          }),
          (e.RemoveFriend = function (e, t) {
            return e.SendMsg("Player.RemoveFriend#1", (0, a.MD)(_t, t), zt, {
              ePrivilege: 1,
            });
          }),
          (e.IgnoreFriend = function (e, t) {
            return e.SendMsg("Player.IgnoreFriend#1", (0, a.MD)(Mt, t), St, {
              ePrivilege: 1,
            });
          }),
          (e.GetCommunityPreferences = function (e, t) {
            return e.SendMsg(
              "Player.GetCommunityPreferences#1",
              (0, a.MD)(Rt, t),
              Et,
              { ePrivilege: 1 },
            );
          }),
          (e.SetCommunityPreferences = function (e, t) {
            return e.SendMsg(
              "Player.SetCommunityPreferences#1",
              (0, a.MD)(Ot, t),
              Wt,
              { ePrivilege: 1 },
            );
          }),
          (e.GetTextFilterWords = function (e, t) {
            return e.SendMsg(
              "Player.GetTextFilterWords#1",
              (0, a.MD)(jt, t),
              Pt,
              { ePrivilege: 1 },
            );
          }),
          (e.GetNewSteamAnnouncementState = function (e, t) {
            return e.SendMsg(
              "Player.GetNewSteamAnnouncementState#1",
              (0, a.MD)(It, t),
              Ct,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.UpdateSteamAnnouncementLastRead = function (e, t) {
            return e.SendMsg(
              "Player.UpdateSteamAnnouncementLastRead#1",
              (0, a.MD)(xt, t),
              Dt,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPrivacySettings = function (e, t) {
            return e.SendMsg(
              "Player.GetPrivacySettings#1",
              (0, a.MD)(kt, t),
              Ut,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDurationControl = function (e, t) {
            return e.SendMsg(
              "Player.GetDurationControl#1",
              (0, a.MD)(Nt, t),
              Xt,
              { ePrivilege: 1 },
            );
          }),
          (e.RecordDisconnectedPlaytime = function (e, t) {
            return e.SendMsg(
              "Player.RecordDisconnectedPlaytime#1",
              (0, a.MD)(C, t),
              D,
              { ePrivilege: 1 },
            );
          });
      })(b || (b = {})),
        (function (e) {
          (e.NotifyLastPlayedTimesHandler = {
            name: "PlayerClient.NotifyLastPlayedTimes#1",
            request: Gt,
          }),
            (e.NotifyFriendNicknameChangedHandler = {
              name: "PlayerClient.NotifyFriendNicknameChanged#1",
              request: Lt,
            }),
            (e.NotifyFriendEquippedProfileItemsChangedHandler = {
              name: "PlayerClient.NotifyFriendEquippedProfileItemsChanged#1",
              request: qt,
            }),
            (e.NotifyNewSteamAnnouncementStateHandler = {
              name: "PlayerClient.NotifyNewSteamAnnouncementState#1",
              request: Zt,
            }),
            (e.NotifyCommunityPreferencesChangedHandler = {
              name: "PlayerClient.NotifyCommunityPreferencesChanged#1",
              request: Ht,
            }),
            (e.NotifyTextFilterWordsChangedHandler = {
              name: "PlayerClient.NotifyTextFilterWordsChanged#1",
              request: Kt,
            }),
            (e.NotifyPerFriendPreferencesChangedHandler = {
              name: "PlayerClient.NotifyPerFriendPreferencesChanged#1",
              request: Vt,
            }),
            (e.NotifyPrivacyPrivacySettingsChangedHandler = {
              name: "PlayerClient.NotifyPrivacyPrivacySettingsChanged#1",
              request: Yt,
            });
        })(g || (g = {}));
    },
    81005: (e, t, r) => {
      r.d(t, {
        Bp: () => g,
        Fc: () => m,
        I8: () => k,
        IJ: () => d,
        L2: () => q,
        Ng: () => D,
        Zb: () => l,
        bn: () => v,
        eh: () => y,
        nd: () => c,
        ow: () => B,
        v9: () => u,
      });
      var i = r(45878),
        n = r(43898),
        a = r(67328);
      const s = i.Message;
      var o, l, c, u;
      !(function (e) {
        (e[(e.k_EPromotionNotification_Unknown = 0)] =
          "k_EPromotionNotification_Unknown"),
          (e[(e.k_EPromotionNotification_AssetRequest = 1)] =
            "k_EPromotionNotification_AssetRequest"),
          (e[(e.k_EPromotionNotification_AssetRequest_Reminder = 2)] =
            "k_EPromotionNotification_AssetRequest_Reminder"),
          (e[(e.k_EPromotionNotification_AssetRequest_Submitted = 3)] =
            "k_EPromotionNotification_AssetRequest_Submitted"),
          (e[(e.k_EPromotionNotification_MAX = 4)] =
            "k_EPromotionNotification_MAX");
      })(o || (o = {})),
        (function (e) {
          (e[(e.k_EPromotionEventInvite_Invalid = 0)] =
            "k_EPromotionEventInvite_Invalid"),
            (e[(e.k_EPromotionEventInvite_DailyDeal = 1)] =
              "k_EPromotionEventInvite_DailyDeal"),
            (e[(e.k_EPromotionEventInvite_MidWeekDeal = 2)] =
              "k_EPromotionEventInvite_MidWeekDeal"),
            (e[(e.k_EPromotionEventInvite_WeekendDeal = 3)] =
              "k_EPromotionEventInvite_WeekendDeal"),
            (e[(e.k_EPromotionEventInvite_AssetAndActionRequest = 4)] =
              "k_EPromotionEventInvite_AssetAndActionRequest");
        })(l || (l = {}));
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.promotion_id || n.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  admin_jsondata: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  partner_jsondata: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  input_jsondata: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  rtime32_start_time: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtime32_end_time: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  partner_id: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  input_access_key: {
                    n: 8,
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
          return "CPromotionPlan";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.plan || n.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m || (d.sm_m = { proto: d, fields: { plan: { n: 1, c: m } } }),
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
          return "CPromotionPlanning_CreatePlan_Request";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.promotion_id || n.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  input_access_key: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
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
          return "CPromotionPlanning_CreatePlan_Response";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.plan || n.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  plan: { n: 1, c: m },
                  promotion_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
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
          return "CPromotionPlanning_UpdatePlan_Request";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new p();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_UpdatePlan_Response";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.promotion_id || n.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
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
          return "CPromotionPlanning_GetPlan_Request";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.plan || n.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m || (b.sm_m = { proto: b, fields: { plan: { n: 1, c: m } } }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlan_Response";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new g();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Request";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.plan || n.aR(h.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { plan: { n: 1, c: m, r: !0, q: !0 } },
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
          return "CPromotionPlanning_GetAllActivePlan_Response";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.promotion_id || n.aR(v.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
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
          return "CPromotionPlanning_DeletePlan_Request";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new w();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Response";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.token || n.aR(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  token: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SearchPlan_Request";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.plan || n.aR(z.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: { plan: { n: 1, c: m, r: !0, q: !0 } },
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
          return "CPromotionPlanning_SearchPlan_Response";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.input_access_key || n.aR(M.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  input_access_key: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
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
          return "CPromotionPlanning_GetPlanByInputAccessKey_Request";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.plan || n.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m || (S.sm_m = { proto: S, fields: { plan: { n: 1, c: m } } }),
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
          return "CPromotionPlanning_GetPlanByInputAccessKey_Response";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.promotion_id || n.aR(F.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  notification_type: {
                    n: 2,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  only_explicit_email_addresses: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
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
          return "CPromotionPlanning_SendNotification_Request";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new R();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Response";
        }
      }
      class E extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.promotion_id || n.aR(E.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
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
          return "CPromotionPlanning_GetSentNotification_Request";
        }
      }
      class O extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.results || n.aR(O.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { results: { n: 1, c: W, r: !0, q: !0 } },
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
          return "CPromotionPlanning_GetSentNotification_Response";
        }
      }
      class W extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.notification_id || n.aR(W.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  notification_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  tracking_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  email_address: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  accountid: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  status: { n: 5, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  type: { n: 6, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  rt_send_time: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = n.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionNotificationResults";
        }
      }
      class T extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.promotion_id || n.aR(T.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
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
          return "CPromotionPlanning_ResendNotification_Request";
        }
      }
      class j extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new j();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Response";
        }
      }
      class P extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.promotion_id || n.aR(P.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  add: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                  email_address: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
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
          return "CPromotionPlanning_SetPromotionEmailTarget_Request";
        }
      }
      class I extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new I();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Response";
        }
      }
      class C extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.spotlight_due_date || n.aR(C.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  spotlight_due_date: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  marketing_message_due_date: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  discount_event_due_date: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = n.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionRequirements";
        }
      }
      class x extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.inviteid || n.aR(x.M()),
            s.initialize(this, e, 0, -1, [16], null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  inviteid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  invite_account: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtinvitetime: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtexpiretime: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  type: { n: 6, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  accept_account: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtaccepttime: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtdatechosen: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  discount_eventid: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  packageid: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  bundleid: {
                    n: 12,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  primary_partnerid: {
                    n: 13,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  deadlines: { n: 14, c: C },
                  notify_partner: {
                    n: 15,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  additional_email: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeRepeatedString,
                  },
                  promotion_id: {
                    n: 17,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = n.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvitation";
        }
      }
      class D extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.invite || n.aR(D.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  invite: { n: 1, c: x },
                  queue_email_to_send: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
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
          return "CPromotionEventInvites_SetInvite_Request";
        }
      }
      class A extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.inviteid || n.aR(A.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  inviteid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
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
          return "CPromotionEventInvites_SetInvite_Response";
        }
      }
      class k extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.inviteid || n.aR(k.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  inviteid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  packageid: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  bundleid: { n: 4, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  partnerid: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  promotion_id: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
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
          return "CPromotionEventInvites_GetInvite_Request";
        }
      }
      class U extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.invites || n.aR(U.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: { invites: { n: 1, c: x, r: !0, q: !0 } },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = n.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Response";
        }
      }
      class N extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.partnerid || n.aR(N.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  partnerid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = n.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetAllActiveInvites_Request";
        }
      }
      class X extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.invites || n.aR(X.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: { invites: { n: 1, c: x, r: !0, q: !0 } },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = n.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(X.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetAllActiveInvites_Response";
        }
      }
      class G extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.inviteid || n.aR(G.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  inviteid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  only_notify_additional_email: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = n.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Request";
        }
      }
      class L extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new L();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Response";
        }
      }
      class q extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.inviteid || n.aR(q.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  inviteid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = n.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(q.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Request";
        }
      }
      class Z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.accountid || n.aR(Z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  partnerid: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  email_address: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = n.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInviteReceive";
        }
      }
      class H extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.targets || n.aR(H.M()),
            s.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  targets: { n: 1, c: Z, r: !0, q: !0 },
                  additional_email_address: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeRepeatedString,
                  },
                  valve_account_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  operation_email: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = n.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(H.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Response";
        }
      }
      !(function (e) {
        (e.CreatePlan = function (e, t) {
          return e.SendMsg(
            "PromotionPlanning.CreatePlan#1",
            (0, a.MD)(d, t),
            f,
            { ePrivilege: 1 },
          );
        }),
          (e.CreateTentativePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.CreateTentativePlan#1",
              (0, a.MD)(d, t),
              f,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlan#1",
              (0, a.MD)(y, t),
              p,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanPartnerInfo = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanPartnerInfo#1",
              (0, a.MD)(y, t),
              p,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanInputData = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanInputData#1",
              (0, a.MD)(y, t),
              p,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.DeletePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.DeletePlan#1",
              (0, a.MD)(v, t),
              w,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlan#1",
              (0, a.MD)(B, t),
              b,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAllActivePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllActivePlan#1",
              (0, a.MD)(g, t),
              h,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SearchPlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SearchPlan#1",
              (0, a.MD)(_, t),
              z,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlanByInputAccessKey = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanByInputAccessKey#1",
              (0, a.MD)(M, t),
              S,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SendNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SendNotification#1",
              (0, a.MD)(F, t),
              R,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetSentNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetSentNotification#1",
              (0, a.MD)(E, t),
              O,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ResendNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.ResendNotification#1",
              (0, a.MD)(T, t),
              j,
              { ePrivilege: 1 },
            );
          }),
          (e.SetPromotionEmailTarget = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SetPromotionEmailTarget#1",
              (0, a.MD)(P, t),
              I,
              { ePrivilege: 1 },
            );
          });
      })(c || (c = {})),
        (function (e) {
          (e.SetInvite = function (e, t) {
            return e.SendMsg(
              "PromotionEventInvites.SetInvite#1",
              (0, a.MD)(D, t),
              A,
              { ePrivilege: 4 },
            );
          }),
            (e.GetInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetInvite#1",
                (0, a.MD)(k, t),
                U,
                { bConstMethod: !0, ePrivilege: 11 },
              );
            }),
            (e.GetAllActiveInvites = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetAllActiveInvites#1",
                (0, a.MD)(N, t),
                X,
                { bConstMethod: !0, ePrivilege: 11 },
              );
            }),
            (e.ResendEmailInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.ResendEmailInvite#1",
                (0, a.MD)(G, t),
                L,
                { ePrivilege: 4 },
              );
            }),
            (e.GetEmailTargets = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetEmailTargets#1",
                (0, a.MD)(q, t),
                H,
                { ePrivilege: 4 },
              );
            });
        })(u || (u = {}));
    },
    39261: (e, t, r) => {
      r.d(t, { Fi: () => A, Hm: () => u, hy: () => m, it: () => f });
      var i = r(45878),
        n = r(43898),
        a = r(67328);
      const s = i.Message;
      var o, l, c, u, m, d, f, y;
      !(function (e) {
        (e[(e.k_EUserLastReadFeed_Invalid = 0)] =
          "k_EUserLastReadFeed_Invalid"),
          (e[(e.k_EUserLastReadFeed_TradeOffers = 1)] =
            "k_EUserLastReadFeed_TradeOffers"),
          (e[(e.k_EUserLastReadFeed_AuctionWins = 2)] =
            "k_EUserLastReadFeed_AuctionWins"),
          (e[(e.k_EUserLastReadFeed_SteamAnnouncement = 3)] =
            "k_EUserLastReadFeed_SteamAnnouncement");
      })(o || (o = {})),
        (function (e) {
          (e[(e.k_ESetUserCountryError_None = 0)] =
            "k_ESetUserCountryError_None"),
            (e[(e.k_ESetUserCountryError_NewCountryMustMatchWebIP = 1)] =
              "k_ESetUserCountryError_NewCountryMustMatchWebIP"),
            (e[(e.k_ESetUserCountryError_NewCountryMustMatchClientIP = 2)] =
              "k_ESetUserCountryError_NewCountryMustMatchClientIP"),
            (e[(e.k_ESetUserCountryError_MilitaryCountryMustBeUSA = 3)] =
              "k_ESetUserCountryError_MilitaryCountryMustBeUSA"),
            (e[(e.k_ESetUserCountryError_NoUSMilitaryBaseInIPCountry = 4)] =
              "k_ESetUserCountryError_NoUSMilitaryBaseInIPCountry"),
            (e[(e.k_ESetUserCountryError_InvalidMilitaryAddress = 5)] =
              "k_ESetUserCountryError_InvalidMilitaryAddress"),
            (e[(e.k_ESetUserCountryError_HasPendingPurchase = 6)] =
              "k_ESetUserCountryError_HasPendingPurchase"),
            (e[(e.k_ESetUserCountryError_HasRecentPurchase = 7)] =
              "k_ESetUserCountryError_HasRecentPurchase"),
            (e[(e.k_ESetUserCountryError_HasRecentCountryChange = 8)] =
              "k_ESetUserCountryError_HasRecentCountryChange"),
            (e[(e.k_ESetUserCountryError_WalletConversionFailed = 9)] =
              "k_ESetUserCountryError_WalletConversionFailed");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_EUserAccountHistoryCategory_Invalid = 0)] =
            "k_EUserAccountHistoryCategory_Invalid"),
            (e[(e.k_EUserAccountHistoryCategory_Inventory = 1)] =
              "k_EUserAccountHistoryCategory_Inventory");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_EInternalSteamAccountType = 1)] =
            "k_EInternalSteamAccountType"),
            (e[(e.k_EInternalClanType = 2)] = "k_EInternalClanType"),
            (e[(e.k_EInternalAppType = 3)] = "k_EInternalAppType"),
            (e[(e.k_EInternalBroadcastChannelType = 4)] =
              "k_EInternalBroadcastChannelType");
        })(u || (u = {})),
        (function (e) {
          (e[(e.k_EExternalNone = 0)] = "k_EExternalNone"),
            (e[(e.k_EExternalSteamAccount = 1)] = "k_EExternalSteamAccount"),
            (e[(e.k_EExternalGoogleAccount = 2)] = "k_EExternalGoogleAccount"),
            (e[(e.k_EExternalFacebookAccount = 3)] =
              "k_EExternalFacebookAccount"),
            (e[(e.k_EExternalTwitterAccount = 4)] =
              "k_EExternalTwitterAccount"),
            (e[(e.k_EExternalTwitchAccount = 5)] = "k_EExternalTwitchAccount"),
            (e[(e.k_EExternalYouTubeChannelAccount = 6)] =
              "k_EExternalYouTubeChannelAccount"),
            (e[(e.k_EExternalFacebookPage = 7)] = "k_EExternalFacebookPage");
        })(m || (m = {}));
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.country_code || n.aR(p.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  country_code: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
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
          return "CUserAccount_GetAvailableValveDiscountPromotions_Request";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.promotions || n.aR(B.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { promotions: { n: 1, c: b, r: !0, q: !0 } },
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
          return "CUserAccount_GetAvailableValveDiscountPromotions_Response";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.promotionid || n.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  promotionid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  promotion_description: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  minimum_cart_amount: {
                    n: 3,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  minimum_cart_amount_for_display: {
                    n: 4,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  discount_amount: {
                    n: 5,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  currency_code: {
                    n: 6,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  available_use_count: {
                    n: 7,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  promotional_discount_type: {
                    n: 8,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  loyalty_reward_id: {
                    n: 9,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  localized_name_token: {
                    n: 10,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  max_use_count: {
                    n: 11,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.has_wallet || n.aR(g.M()),
            s.initialize(this, e, 0, -1, [13], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  has_wallet: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  user_country_code: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  wallet_country_code: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  wallet_state: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  balance: {
                    n: 5,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  delayed_balance: {
                    n: 6,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  currency_code: {
                    n: 7,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  time_most_recent_txn: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  most_recent_txnid: {
                    n: 9,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  balance_in_usd: {
                    n: 10,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  delayed_balance_in_usd: {
                    n: 11,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  has_wallet_in_other_regions: {
                    n: 12,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  other_regions: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: n.FE.readInt32,
                    pbr: n.FE.readPackedInt32,
                    bw: n.Xc.writeRepeatedInt32,
                  },
                  formatted_balance: {
                    n: 14,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
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
          return "CUserAccount_GetWalletDetails_Response";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.include_balance_in_usd || n.aR(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  include_balance_in_usd: {
                    n: 1,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  wallet_region: {
                    n: 2,
                    d: 1,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  include_formatted_balance: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
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
          return "CUserAccount_GetClientWalletDetails_Request";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new v();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetAccountLinkStatus_Request";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.pwid || n.aR(w.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  pwid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  identity_verification: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  performed_age_verification: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
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
          return "CUserAccount_GetAccountLinkStatus_Response";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.appid || n.aR(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_CancelLicenseForApp_Request";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new z();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_CancelLicenseForApp_Response";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.steamid || n.aR(M.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
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
          return "CUserAccount_GetUserCountry_Request";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.country || n.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  country: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
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
          return "CUserAccount_GetUserCountry_Response";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.invite_limit || n.aR(F.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  invite_limit: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  invite_duration: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  invite_note: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
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
          return "CUserAccount_CreateFriendInviteToken_Request";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.invite_token || n.aR(R.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  invite_token: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  invite_limit: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  invite_duration: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  time_created: {
                    n: 4,
                    br: n.FE.readFixed32,
                    bw: n.Xc.writeFixed32,
                  },
                  valid: { n: 5, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
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
          return "CUserAccount_CreateFriendInviteToken_Response";
        }
      }
      class E extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new E();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetFriendInviteTokens_Request";
        }
      }
      class O extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.tokens || n.aR(O.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { tokens: { n: 1, c: R, r: !0, q: !0 } },
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
          return "CUserAccount_GetFriendInviteTokens_Response";
        }
      }
      class W extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.steamid || n.aR(W.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  invite_token: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = n.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_ViewFriendInviteToken_Request";
        }
      }
      class T extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.valid || n.aR(T.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  valid: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  steamid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  invite_duration: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
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
          return "CUserAccount_ViewFriendInviteToken_Response";
        }
      }
      class j extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.steamid || n.aR(j.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  invite_token: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = n.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RedeemFriendInviteToken_Request";
        }
      }
      class P extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new P();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RedeemFriendInviteToken_Response";
        }
      }
      class I extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.invite_token || n.aR(I.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  invite_token: {
                    n: 1,
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
          return "CUserAccount_RevokeFriendInviteToken_Request";
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
          return "CUserAccount_RevokeFriendInviteToken_Response";
        }
      }
      class x extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.compat_tool || n.aR(x.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  compat_tool: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = n.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RegisterCompatTool_Request";
        }
      }
      class D extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RegisterCompatTool_Response";
        }
      }
      class A extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.account_type || n.aR(A.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  account_type: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  account_id: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  filter: { n: 3, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  return_access_token: {
                    n: 4,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
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
          return "CAccountLinking_GetLinkedAccountInfo_Request";
        }
      }
      class k extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.external_accounts || n.aR(k.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: { external_accounts: { n: 1, c: U, r: !0, q: !0 } },
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
          return "CAccountLinking_GetLinkedAccountInfo_Response";
        }
      }
      class U extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.external_type || n.aR(U.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  external_type: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  external_id: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  external_user_name: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  external_url: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  access_token: {
                    n: 5,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  access_token_secret: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  is_valid: { n: 7, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = n.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountLinking_GetLinkedAccountInfo_Response_CExternalAccountTuple_Response";
        }
      }
      class N extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.steamid || n.aR(N.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  client_token: {
                    n: 2,
                    br: n.FE.readBytes,
                    bw: n.Xc.writeBytes,
                  },
                  expiry: { n: 3, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  deviceid: { n: 4, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = n.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEmbeddedClient_Token";
        }
      }
      class X extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.result || n.aR(X.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  result: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  token: { n: 2, c: N },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = n.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(X.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEmbeddedClient_AuthorizeDevice_Response";
        }
      }
      class G extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.steamid || n.aR(G.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  device_info: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  deviceid: { n: 4, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = n.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEmbeddedClient_AuthorizeCurrentDevice_Request";
        }
      }
      !(function (e) {
        (e.GetAvailableValveDiscountPromotions = function (e, t) {
          return e.SendMsg(
            "UserAccount.GetAvailableValveDiscountPromotions#1",
            (0, a.MD)(p, t),
            B,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetClientWalletDetails = function (e, t) {
            return e.SendMsg(
              "UserAccount.GetClientWalletDetails#1",
              (0, a.MD)(h, t),
              g,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAccountLinkStatus = function (e, t) {
            return e.SendMsg(
              "UserAccount.GetAccountLinkStatus#1",
              (0, a.MD)(v, t),
              w,
              { ePrivilege: 1 },
            );
          }),
          (e.CancelLicenseForApp = function (e, t) {
            return e.SendMsg(
              "UserAccount.CancelLicenseForApp#1",
              (0, a.MD)(_, t),
              z,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserCountry = function (e, t) {
            return e.SendMsg(
              "UserAccount.GetUserCountry#1",
              (0, a.MD)(M, t),
              S,
              { ePrivilege: 1 },
            );
          }),
          (e.CreateFriendInviteToken = function (e, t) {
            return e.SendMsg(
              "UserAccount.CreateFriendInviteToken#1",
              (0, a.MD)(F, t),
              R,
              { ePrivilege: 3 },
            );
          }),
          (e.GetFriendInviteTokens = function (e, t) {
            return e.SendMsg(
              "UserAccount.GetFriendInviteTokens#1",
              (0, a.MD)(E, t),
              O,
              { ePrivilege: 1 },
            );
          }),
          (e.ViewFriendInviteToken = function (e, t) {
            return e.SendMsg(
              "UserAccount.ViewFriendInviteToken#1",
              (0, a.MD)(W, t),
              T,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemFriendInviteToken = function (e, t) {
            return e.SendMsg(
              "UserAccount.RedeemFriendInviteToken#1",
              (0, a.MD)(j, t),
              P,
              { ePrivilege: 1 },
            );
          }),
          (e.RevokeFriendInviteToken = function (e, t) {
            return e.SendMsg(
              "UserAccount.RevokeFriendInviteToken#1",
              (0, a.MD)(I, t),
              C,
              { ePrivilege: 1 },
            );
          }),
          (e.RegisterCompatTool = function (e, t) {
            return e.SendMsg(
              "UserAccount.RegisterCompatTool#1",
              (0, a.MD)(x, t),
              D,
              { ePrivilege: 1 },
            );
          });
      })(d || (d = {})),
        (function (e) {
          e.GetLinkedAccountInfo = function (e, t) {
            return e.SendMsg(
              "AccountLinking.GetLinkedAccountInfo#1",
              (0, a.MD)(A, t),
              k,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          };
        })(f || (f = {})),
        (function (e) {
          e.AuthorizeCurrentDevice = function (e, t) {
            return e.SendMsg(
              "EmbeddedClient.AuthorizeCurrentDevice#1",
              (0, a.MD)(G, t),
              X,
              { ePrivilege: 1 },
            );
          };
        })(y || (y = {}));
    },
  },
]);
