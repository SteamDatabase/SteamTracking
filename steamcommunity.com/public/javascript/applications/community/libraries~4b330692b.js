/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5633],
  {
    65546: (e, t, n) => {
      "use strict";
      function r(e) {
        return e && "object" == typeof e && "default" in e ? e.default : e;
      }
      var i = r(n(72378)),
        a = r(n(37501)),
        o = n(90626),
        u = r(o),
        s = r(n(31613)),
        l = r(n(25387)),
        c = {
          arr: Array.isArray,
          obj: function (e) {
            return "[object Object]" === Object.prototype.toString.call(e);
          },
          fun: function (e) {
            return "function" == typeof e;
          },
          str: function (e) {
            return "string" == typeof e;
          },
          num: function (e) {
            return "number" == typeof e;
          },
          und: function (e) {
            return void 0 === e;
          },
          nul: function (e) {
            return null === e;
          },
          set: function (e) {
            return e instanceof Set;
          },
          map: function (e) {
            return e instanceof Map;
          },
          equ: function (e, t) {
            if (typeof e != typeof t) return !1;
            if (c.str(e) || c.num(e)) return e === t;
            if (
              c.obj(e) &&
              c.obj(t) &&
              Object.keys(e).length + Object.keys(t).length === 0
            )
              return !0;
            var n;
            for (n in e) if (!(n in t)) return !1;
            for (n in t) if (e[n] !== t[n]) return !1;
            return !c.und(n) || e === t;
          },
        };
      function f() {
        var e = o.useState(!1)[1];
        return o.useCallback(function () {
          return e(function (e) {
            return !e;
          });
        }, []);
      }
      function d(e, t) {
        return c.und(e) || c.nul(e) ? t : e;
      }
      function p(e) {
        return c.und(e) ? [] : c.arr(e) ? e : [e];
      }
      function h(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return c.fun(e) ? e.apply(void 0, n) : e;
      }
      function g(e) {
        var t = (function (e) {
          return (
            e.to,
            e.from,
            e.config,
            e.onStart,
            e.onRest,
            e.onFrame,
            e.children,
            e.reset,
            e.reverse,
            e.force,
            e.immediate,
            e.delay,
            e.attach,
            e.destroyed,
            e.interpolateTo,
            e.ref,
            e.lazy,
            a(e, [
              "to",
              "from",
              "config",
              "onStart",
              "onRest",
              "onFrame",
              "children",
              "reset",
              "reverse",
              "force",
              "immediate",
              "delay",
              "attach",
              "destroyed",
              "interpolateTo",
              "ref",
              "lazy",
            ])
          );
        })(e);
        if (c.und(t)) return i({ to: t }, e);
        var n = Object.keys(e).reduce(function (n, r) {
          var a;
          return c.und(t[r]) ? i({}, n, (((a = {})[r] = e[r]), a)) : n;
        }, {});
        return i({ to: t }, n);
      }
      var m,
        v,
        y = (function () {
          function e() {
            (this.payload = void 0), (this.children = []);
          }
          var t = e.prototype;
          return (
            (t.getAnimatedValue = function () {
              return this.getValue();
            }),
            (t.getPayload = function () {
              return this.payload || this;
            }),
            (t.attach = function () {}),
            (t.detach = function () {}),
            (t.getChildren = function () {
              return this.children;
            }),
            (t.addChild = function (e) {
              0 === this.children.length && this.attach(),
                this.children.push(e);
            }),
            (t.removeChild = function (e) {
              var t = this.children.indexOf(e);
              this.children.splice(t, 1),
                0 === this.children.length && this.detach();
            }),
            e
          );
        })(),
        b = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), i = 0;
              i < n;
              i++
            )
              r[i] = arguments[i];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).payload = []),
              (t.attach = function () {
                return t.payload.forEach(function (e) {
                  return e instanceof y && e.addChild(l(t));
                });
              }),
              (t.detach = function () {
                return t.payload.forEach(function (e) {
                  return e instanceof y && e.removeChild(l(t));
                });
              }),
              t
            );
          }
          return s(t, e), t;
        })(y),
        w = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), i = 0;
              i < n;
              i++
            )
              r[i] = arguments[i];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).payload = {}),
              (t.attach = function () {
                return Object.values(t.payload).forEach(function (e) {
                  return e instanceof y && e.addChild(l(t));
                });
              }),
              (t.detach = function () {
                return Object.values(t.payload).forEach(function (e) {
                  return e instanceof y && e.removeChild(l(t));
                });
              }),
              t
            );
          }
          s(t, e);
          var n = t.prototype;
          return (
            (n.getValue = function (e) {
              void 0 === e && (e = !1);
              var t = {};
              for (var n in this.payload) {
                var r = this.payload[n];
                (!e || r instanceof y) &&
                  (t[n] =
                    r instanceof y
                      ? r[e ? "getAnimatedValue" : "getValue"]()
                      : r);
              }
              return t;
            }),
            (n.getAnimatedValue = function () {
              return this.getValue(!0);
            }),
            t
          );
        })(y);
      function k(e, t) {
        m = { fn: e, transform: t };
      }
      function x(e) {
        v = e;
      }
      var V,
        A = function (e) {
          return "undefined" != typeof window
            ? window.requestAnimationFrame(e)
            : -1;
        },
        j = function (e) {
          "undefined" != typeof window && window.cancelAnimationFrame(e);
        };
      function O(e) {
        V = e;
      }
      var C,
        E = function () {
          return Date.now();
        };
      function S(e) {
        C = e;
      }
      var P,
        F,
        M = function (e) {
          return e.current;
        };
      function q(e) {
        P = e;
      }
      var R = Object.freeze({
          get applyAnimatedValues() {
            return m;
          },
          injectApplyAnimatedValues: k,
          get colorNames() {
            return v;
          },
          injectColorNames: x,
          get requestFrame() {
            return A;
          },
          get cancelFrame() {
            return j;
          },
          injectFrame: function (e, t) {
            (A = e), (j = t);
          },
          get interpolation() {
            return V;
          },
          injectStringInterpolator: O,
          get now() {
            return E;
          },
          injectNow: function (e) {
            E = e;
          },
          get defaultElement() {
            return C;
          },
          injectDefaultElement: S,
          get animatedApi() {
            return M;
          },
          injectAnimatedApi: function (e) {
            M = e;
          },
          get createAnimatedStyle() {
            return P;
          },
          injectCreateAnimatedStyle: q,
          get manualFrameloop() {
            return F;
          },
          injectManualFrameloop: function (e) {
            F = e;
          },
        }),
        T = (function (e) {
          function t(t, n) {
            var r;
            return (
              ((r = e.call(this) || this).update = void 0),
              (r.payload = t.style ? i({}, t, { style: P(t.style) }) : t),
              (r.update = n),
              r.attach(),
              r
            );
          }
          return s(t, e), t;
        })(w),
        _ = !1,
        I = new Set(),
        z = function e() {
          if (!_) return !1;
          var t = E(),
            n = I,
            r = Array.isArray(n),
            i = 0;
          for (n = r ? n : n[Symbol.iterator](); ; ) {
            var a;
            if (r) {
              if (i >= n.length) break;
              a = n[i++];
            } else {
              if ((i = n.next()).done) break;
              a = i.value;
            }
            for (var o = a, u = !1, s = 0; s < o.configs.length; s++) {
              for (
                var l = o.configs[s], c = void 0, f = void 0, d = 0;
                d < l.animatedValues.length;
                d++
              ) {
                var p = l.animatedValues[d];
                if (!p.done) {
                  var h = l.fromValues[d],
                    g = l.toValues[d],
                    m = p.lastPosition,
                    v = g instanceof y,
                    b = Array.isArray(l.initialVelocity)
                      ? l.initialVelocity[d]
                      : l.initialVelocity;
                  if ((v && (g = g.getValue()), l.immediate))
                    p.setValue(g), (p.done = !0);
                  else if ("string" != typeof h && "string" != typeof g) {
                    if (void 0 !== l.duration)
                      (m =
                        h + l.easing((t - p.startTime) / l.duration) * (g - h)),
                        (c = t >= p.startTime + l.duration);
                    else if (l.decay)
                      (m =
                        h +
                        (b / (1 - 0.998)) *
                          (1 - Math.exp(-(1 - 0.998) * (t - p.startTime)))),
                        (c = Math.abs(p.lastPosition - m) < 0.1) && (g = m);
                    else {
                      (f = void 0 !== p.lastTime ? p.lastTime : t),
                        (b =
                          void 0 !== p.lastVelocity
                            ? p.lastVelocity
                            : l.initialVelocity),
                        t > f + 64 && (f = t);
                      for (var w = Math.floor(t - f), k = 0; k < w; ++k) {
                        m +=
                          (1 *
                            (b +=
                              (1 *
                                ((-l.tension * (m - g) + -l.friction * b) /
                                  l.mass)) /
                              1e3)) /
                          1e3;
                      }
                      var x =
                          !(!l.clamp || 0 === l.tension) &&
                          (h < g ? m > g : m < g),
                        V = Math.abs(b) <= l.precision,
                        j = 0 === l.tension || Math.abs(g - m) <= l.precision;
                      (c = x || (V && j)),
                        (p.lastVelocity = b),
                        (p.lastTime = t);
                    }
                    v && !l.toValues[d].done && (c = !1),
                      c ? (p.value !== g && (m = g), (p.done = !0)) : (u = !0),
                      p.setValue(m),
                      (p.lastPosition = m);
                  } else p.setValue(g), (p.done = !0);
                }
              }
              o.props.onFrame &&
                (o.values[l.name] = l.interpolation.getValue());
            }
            o.props.onFrame && o.props.onFrame(o.values),
              u || (I.delete(o), o.stop(!0));
          }
          return I.size ? (F ? F() : A(e)) : (_ = !1), _;
        };
      function L(e, t, n) {
        if ("function" == typeof e) return e;
        if (Array.isArray(e)) return L({ range: e, output: t, extrapolate: n });
        if (V && "string" == typeof e.output[0]) return V(e);
        var r = e,
          i = r.output,
          a = r.range || [0, 1],
          o = r.extrapolateLeft || r.extrapolate || "extend",
          u = r.extrapolateRight || r.extrapolate || "extend",
          s =
            r.easing ||
            function (e) {
              return e;
            };
        return function (e) {
          var t = (function (e, t) {
            for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
            return n - 1;
          })(e, a);
          return (function (e, t, n, r, i, a, o, u, s) {
            var l = s ? s(e) : e;
            if (l < t) {
              if ("identity" === o) return l;
              "clamp" === o && (l = t);
            }
            if (l > n) {
              if ("identity" === u) return l;
              "clamp" === u && (l = n);
            }
            if (r === i) return r;
            if (t === n) return e <= t ? r : i;
            t === -1 / 0
              ? (l = -l)
              : n === 1 / 0
                ? (l -= t)
                : (l = (l - t) / (n - t));
            (l = a(l)),
              r === -1 / 0
                ? (l = -l)
                : i === 1 / 0
                  ? (l += r)
                  : (l = l * (i - r) + r);
            return l;
          })(e, a[t], a[t + 1], i[t], i[t + 1], s, o, u, r.map);
        };
      }
      var N = (function (e) {
        function t(n, r, i, a) {
          var o;
          return (
            ((o = e.call(this) || this).calc = void 0),
            (o.payload =
              n instanceof b && !(n instanceof t)
                ? n.getPayload()
                : Array.isArray(n)
                  ? n
                  : [n]),
            (o.calc = L(r, i, a)),
            o
          );
        }
        s(t, e);
        var n = t.prototype;
        return (
          (n.getValue = function () {
            return this.calc.apply(
              this,
              this.payload.map(function (e) {
                return e.getValue();
              }),
            );
          }),
          (n.updateConfig = function (e, t, n) {
            this.calc = L(e, t, n);
          }),
          (n.interpolate = function (e, n, r) {
            return new t(this, e, n, r);
          }),
          t
        );
      })(b);
      function G(e, t) {
        "update" in e
          ? t.add(e)
          : e.getChildren().forEach(function (e) {
              return G(e, t);
            });
      }
      var W = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this) || this).animatedStyles = new Set()),
              (n.value = void 0),
              (n.startPosition = void 0),
              (n.lastPosition = void 0),
              (n.lastVelocity = void 0),
              (n.startTime = void 0),
              (n.lastTime = void 0),
              (n.done = !1),
              (n.setValue = function (e, t) {
                void 0 === t && (t = !0), (n.value = e), t && n.flush();
              }),
              (n.value = t),
              (n.startPosition = t),
              (n.lastPosition = t),
              n
            );
          }
          s(t, e);
          var n = t.prototype;
          return (
            (n.flush = function () {
              0 === this.animatedStyles.size && G(this, this.animatedStyles),
                this.animatedStyles.forEach(function (e) {
                  return e.update();
                });
            }),
            (n.clearStyles = function () {
              this.animatedStyles.clear();
            }),
            (n.getValue = function () {
              return this.value;
            }),
            (n.interpolate = function (e, t, n) {
              return new N(this, e, t, n);
            }),
            t
          );
        })(y),
        D = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this) || this).payload = t.map(function (e) {
                return new W(e);
              })),
              n
            );
          }
          s(t, e);
          var n = t.prototype;
          return (
            (n.setValue = function (e, t) {
              var n = this;
              void 0 === t && (t = !0),
                Array.isArray(e)
                  ? e.length === this.payload.length &&
                    e.forEach(function (e, r) {
                      return n.payload[r].setValue(e, t);
                    })
                  : this.payload.forEach(function (n) {
                      return n.setValue(e, t);
                    });
            }),
            (n.getValue = function () {
              return this.payload.map(function (e) {
                return e.getValue();
              });
            }),
            (n.interpolate = function (e, t) {
              return new N(this, e, t);
            }),
            t
          );
        })(b),
        Q = 0,
        $ = (function () {
          function e() {
            var e = this;
            (this.id = void 0),
              (this.idle = !0),
              (this.hasChanged = !1),
              (this.guid = 0),
              (this.local = 0),
              (this.props = {}),
              (this.merged = {}),
              (this.animations = {}),
              (this.interpolations = {}),
              (this.values = {}),
              (this.configs = []),
              (this.listeners = []),
              (this.queue = []),
              (this.localQueue = void 0),
              (this.getValues = function () {
                return e.interpolations;
              }),
              (this.id = Q++);
          }
          var t = e.prototype;
          return (
            (t.update = function (e) {
              if (!e) return this;
              var t = g(e),
                n = t.delay,
                r = void 0 === n ? 0 : n,
                o = t.to,
                u = a(t, ["delay", "to"]);
              if (c.arr(o) || c.fun(o))
                this.queue.push(i({}, u, { delay: r, to: o }));
              else if (o) {
                var s = {};
                Object.entries(o).forEach(function (e) {
                  var t,
                    n = e[0],
                    a = e[1],
                    o = i({ to: ((t = {}), (t[n] = a), t), delay: h(r, n) }, u),
                    l = s[o.delay] && s[o.delay].to;
                  s[o.delay] = i({}, s[o.delay], o, { to: i({}, l, o.to) });
                }),
                  (this.queue = Object.values(s));
              }
              return (
                (this.queue = this.queue.sort(function (e, t) {
                  return e.delay - t.delay;
                })),
                this.diff(u),
                this
              );
            }),
            (t.start = function (e) {
              var t,
                n = this;
              if (this.queue.length) {
                (this.idle = !1),
                  this.localQueue &&
                    this.localQueue.forEach(function (e) {
                      var t = e.from,
                        r = void 0 === t ? {} : t,
                        a = e.to,
                        o = void 0 === a ? {} : a;
                      c.obj(r) && (n.merged = i({}, r, n.merged)),
                        c.obj(o) && (n.merged = i({}, n.merged, o));
                    });
                var r = (this.local = ++this.guid),
                  o = (this.localQueue = this.queue);
                (this.queue = []),
                  o.forEach(function (t, i) {
                    var u = t.delay,
                      s = a(t, ["delay"]),
                      l = function (t) {
                        i === o.length - 1 &&
                          r === n.guid &&
                          t &&
                          ((n.idle = !0),
                          n.props.onRest && n.props.onRest(n.merged)),
                          e && e();
                      },
                      f = c.arr(s.to) || c.fun(s.to);
                    u
                      ? setTimeout(function () {
                          r === n.guid &&
                            (f ? n.runAsync(s, l) : n.diff(s).start(l));
                        }, u)
                      : f
                        ? n.runAsync(s, l)
                        : n.diff(s).start(l);
                  });
              } else
                c.fun(e) && this.listeners.push(e),
                  this.props.onStart && this.props.onStart(),
                  (t = this),
                  I.has(t) || I.add(t),
                  _ || ((_ = !0), A(F || z));
              return this;
            }),
            (t.stop = function (e) {
              return (
                this.listeners.forEach(function (t) {
                  return t(e);
                }),
                (this.listeners = []),
                this
              );
            }),
            (t.pause = function (e) {
              var t;
              return (
                this.stop(!0), e && ((t = this), I.has(t) && I.delete(t)), this
              );
            }),
            (t.runAsync = function (e, t) {
              var n = this,
                r = (e.delay, a(e, ["delay"])),
                o = this.local,
                u = Promise.resolve(void 0);
              if (c.arr(r.to))
                for (
                  var s = function (e) {
                      var t = e,
                        a = i({}, r, g(r.to[t]));
                      c.arr(a.config) && (a.config = a.config[t]),
                        (u = u.then(function () {
                          if (o === n.guid)
                            return new Promise(function (e) {
                              return n.diff(a).start(e);
                            });
                        }));
                    },
                    l = 0;
                  l < r.to.length;
                  l++
                )
                  s(l);
              else if (c.fun(r.to)) {
                var f,
                  d = 0;
                u = u.then(function () {
                  return r
                    .to(
                      function (e) {
                        var t = i({}, r, g(e));
                        if (
                          (c.arr(t.config) && (t.config = t.config[d]),
                          d++,
                          o === n.guid)
                        )
                          return (f = new Promise(function (e) {
                            return n.diff(t).start(e);
                          }));
                      },
                      function (e) {
                        return void 0 === e && (e = !0), n.stop(e);
                      },
                    )
                    .then(function () {
                      return f;
                    });
                });
              }
              u.then(t);
            }),
            (t.diff = function (e) {
              var t = this;
              this.props = i({}, this.props, e);
              var n = this.props,
                r = n.from,
                a = void 0 === r ? {} : r,
                o = n.to,
                u = void 0 === o ? {} : o,
                s = n.config,
                l = void 0 === s ? {} : s,
                f = n.reverse,
                g = n.attach,
                m = n.reset,
                y = n.immediate;
              if (f) {
                var b = [u, a];
                (a = b[0]), (u = b[1]);
              }
              (this.merged = i({}, a, this.merged, u)), (this.hasChanged = !1);
              var w = g && g(this);
              if (
                ((this.animations = Object.entries(this.merged).reduce(
                  function (e, n) {
                    var r = n[0],
                      o = n[1],
                      u = e[r] || {},
                      s = c.num(o),
                      f =
                        c.str(o) &&
                        !o.startsWith("#") &&
                        !/\d/.test(o) &&
                        !v[o],
                      g = c.arr(o),
                      b = !s && !g && !f,
                      k = c.und(a[r]) ? o : a[r],
                      x = s || g || f ? o : 1,
                      A = h(l, r);
                    w && (x = w.animations[r].parent);
                    var j,
                      O = u.parent,
                      C = u.interpolation,
                      S = p(w ? x.getPayload() : x),
                      P = o;
                    b && (P = V({ range: [0, 1], output: [o, o] })(1));
                    var F,
                      M = C && C.getValue(),
                      q =
                        !c.und(O) &&
                        u.animatedValues.some(function (e) {
                          return !e.done;
                        }),
                      R = !c.equ(P, M),
                      T = !c.equ(P, u.previous),
                      _ = !c.equ(A, u.config);
                    if (m || (T && R) || _) {
                      var I;
                      if (s || f) O = C = u.parent || new W(k);
                      else if (g) O = C = u.parent || new D(k);
                      else if (b) {
                        var z =
                          u.interpolation &&
                          u.interpolation.calc(u.parent.value);
                        (z = void 0 === z || m ? k : z),
                          u.parent
                            ? (O = u.parent).setValue(0, !1)
                            : (O = new W(0));
                        var L = { output: [z, o] };
                        u.interpolation
                          ? ((C = u.interpolation),
                            u.interpolation.updateConfig(L))
                          : (C = O.interpolate(L));
                      }
                      return (
                        (S = p(w ? x.getPayload() : x)),
                        (j = p(O.getPayload())),
                        m && !b && O.setValue(k, !1),
                        (t.hasChanged = !0),
                        j.forEach(function (e) {
                          (e.startPosition = e.value),
                            (e.lastPosition = e.value),
                            (e.lastVelocity = q ? e.lastVelocity : void 0),
                            (e.lastTime = q ? e.lastTime : void 0),
                            (e.startTime = E()),
                            (e.done = !1),
                            e.animatedStyles.clear();
                        }),
                        h(y, r) && O.setValue(b ? x : o, !1),
                        i(
                          {},
                          e,
                          (((I = {})[r] = i({}, u, {
                            name: r,
                            parent: O,
                            interpolation: C,
                            animatedValues: j,
                            toValues: S,
                            previous: P,
                            config: A,
                            fromValues: p(O.getValue()),
                            immediate: h(y, r),
                            initialVelocity: d(A.velocity, 0),
                            clamp: d(A.clamp, !1),
                            precision: d(A.precision, 0.01),
                            tension: d(A.tension, 170),
                            friction: d(A.friction, 26),
                            mass: d(A.mass, 1),
                            duration: A.duration,
                            easing: d(A.easing, function (e) {
                              return e;
                            }),
                            decay: A.decay,
                          })),
                          I),
                        )
                      );
                    }
                    return R
                      ? e
                      : (b &&
                          (O.setValue(1, !1),
                          C.updateConfig({ output: [P, P] })),
                        (O.done = !0),
                        (t.hasChanged = !0),
                        i(
                          {},
                          e,
                          (((F = {})[r] = i({}, e[r], { previous: P })), F),
                        ));
                  },
                  this.animations,
                )),
                this.hasChanged)
              )
                for (var k in ((this.configs = Object.values(this.animations)),
                (this.values = {}),
                (this.interpolations = {}),
                this.animations))
                  (this.interpolations[k] = this.animations[k].interpolation),
                    (this.values[k] =
                      this.animations[k].interpolation.getValue());
              return this;
            }),
            (t.destroy = function () {
              this.stop(),
                (this.props = {}),
                (this.merged = {}),
                (this.animations = {}),
                (this.interpolations = {}),
                (this.values = {}),
                (this.configs = []),
                (this.local = 0);
            }),
            e
          );
        })(),
        H = function (e, t) {
          var n = o.useRef(!1),
            r = o.useRef(),
            i = c.fun(t),
            a = o.useMemo(
              function () {
                var n;
                return (
                  r.current &&
                    (r.current.map(function (e) {
                      return e.destroy();
                    }),
                    (r.current = void 0)),
                  [
                    new Array(e).fill().map(function (e, r) {
                      var a = new $(),
                        o = i ? h(t, r, a) : t[r];
                      return (
                        0 === r && (n = o.ref), a.update(o), n || a.start(), a
                      );
                    }),
                    n,
                  ]
                );
              },
              [e],
            ),
            u = a[0],
            s = a[1];
          r.current = u;
          o.useImperativeHandle(s, function () {
            return {
              start: function () {
                return Promise.all(
                  r.current.map(function (e) {
                    return new Promise(function (t) {
                      return e.start(t);
                    });
                  }),
                );
              },
              stop: function (e) {
                return r.current.forEach(function (t) {
                  return t.stop(e);
                });
              },
              get controllers() {
                return r.current;
              },
            };
          });
          var l = o.useMemo(
            function () {
              return function (e) {
                return r.current.map(function (t, n) {
                  t.update(i ? h(e, n, t) : e[n]), s || t.start();
                });
              };
            },
            [e],
          );
          o.useEffect(function () {
            n.current
              ? i || l(t)
              : s ||
                r.current.forEach(function (e) {
                  return e.start();
                });
          }),
            o.useEffect(function () {
              return (
                (n.current = !0),
                function () {
                  return r.current.forEach(function (e) {
                    return e.destroy();
                  });
                }
              );
            }, []);
          var f = r.current.map(function (e) {
            return e.getValues();
          });
          return i
            ? [
                f,
                l,
                function (e) {
                  return r.current.forEach(function (t) {
                    return t.pause(e);
                  });
                },
              ]
            : f;
        },
        U = 0,
        Z = "enter",
        B = "leave",
        J = "update",
        K = function (e, t) {
          return ("function" == typeof t ? e.map(t) : p(t)).map(String);
        },
        X = function (e) {
          var t = e.items,
            n = e.keys,
            r =
              void 0 === n
                ? function (e) {
                    return e;
                  }
                : n,
            o = a(e, ["items", "keys"]);
          return (
            (t = p(void 0 !== t ? t : null)), i({ items: t, keys: K(t, r) }, o)
          );
        };
      function Y(e, t) {
        var n = function () {
            if (i) {
              if (a >= r.length) return "break";
              o = r[a++];
            } else {
              if ((a = r.next()).done) return "break";
              o = a.value;
            }
            var n = o.key,
              u = function (e) {
                return e.key !== n;
              };
            (c.und(t) || t === n) &&
              (e.current.instances.delete(n),
              (e.current.transitions = e.current.transitions.filter(u)),
              (e.current.deleted = e.current.deleted.filter(u)));
          },
          r = e.current.deleted,
          i = Array.isArray(r),
          a = 0;
        for (r = i ? r : r[Symbol.iterator](); ; ) {
          var o;
          if ("break" === n()) break;
        }
        e.current.forceUpdate();
      }
      var ee = (function (e) {
          function t(t) {
            var n;
            return (
              void 0 === t && (t = {}),
              (n = e.call(this) || this),
              !t.transform || t.transform instanceof y || (t = m.transform(t)),
              (n.payload = t),
              n
            );
          }
          return s(t, e), t;
        })(w),
        te = {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199,
        },
        ne = "[-+]?\\d*\\.?\\d+",
        re = ne + "%";
      function ie() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
      }
      var ae = new RegExp("rgb" + ie(ne, ne, ne)),
        oe = new RegExp("rgba" + ie(ne, ne, ne, ne)),
        ue = new RegExp("hsl" + ie(ne, re, re)),
        se = new RegExp("hsla" + ie(ne, re, re, ne)),
        le = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ce =
          /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        fe = /^#([0-9a-fA-F]{6})$/,
        de = /^#([0-9a-fA-F]{8})$/;
      function pe(e, t, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * (t - e) * n
            : n < 0.5
              ? t
              : n < 2 / 3
                ? e + (t - e) * (2 / 3 - n) * 6
                : e
        );
      }
      function he(e, t, n) {
        var r = n < 0.5 ? n * (1 + t) : n + t - n * t,
          i = 2 * n - r,
          a = pe(i, r, e + 1 / 3),
          o = pe(i, r, e),
          u = pe(i, r, e - 1 / 3);
        return (
          (Math.round(255 * a) << 24) |
          (Math.round(255 * o) << 16) |
          (Math.round(255 * u) << 8)
        );
      }
      function ge(e) {
        var t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
      }
      function me(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
      }
      function ve(e) {
        var t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
      }
      function ye(e) {
        var t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
      }
      function be(e) {
        var t,
          n,
          r =
            "number" == typeof (t = e)
              ? t >>> 0 === t && t >= 0 && t <= 4294967295
                ? t
                : null
              : (n = fe.exec(t))
                ? parseInt(n[1] + "ff", 16) >>> 0
                : te.hasOwnProperty(t)
                  ? te[t]
                  : (n = ae.exec(t))
                    ? ((ge(n[1]) << 24) |
                        (ge(n[2]) << 16) |
                        (ge(n[3]) << 8) |
                        255) >>>
                      0
                    : (n = oe.exec(t))
                      ? ((ge(n[1]) << 24) |
                          (ge(n[2]) << 16) |
                          (ge(n[3]) << 8) |
                          ve(n[4])) >>>
                        0
                      : (n = le.exec(t))
                        ? parseInt(
                            n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + "ff",
                            16,
                          ) >>> 0
                        : (n = de.exec(t))
                          ? parseInt(n[1], 16) >>> 0
                          : (n = ce.exec(t))
                            ? parseInt(
                                n[1] +
                                  n[1] +
                                  n[2] +
                                  n[2] +
                                  n[3] +
                                  n[3] +
                                  n[4] +
                                  n[4],
                                16,
                              ) >>> 0
                            : (n = ue.exec(t))
                              ? (255 | he(me(n[1]), ye(n[2]), ye(n[3]))) >>> 0
                              : (n = se.exec(t))
                                ? (he(me(n[1]), ye(n[2]), ye(n[3])) |
                                    ve(n[4])) >>>
                                  0
                                : null;
        return null === r
          ? e
          : "rgba(" +
              ((4278190080 & (r = r || 0)) >>> 24) +
              ", " +
              ((16711680 & r) >>> 16) +
              ", " +
              ((65280 & r) >>> 8) +
              ", " +
              (255 & r) / 255 +
              ")";
      }
      var we = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        ke =
          /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        xe = new RegExp("(" + Object.keys(te).join("|") + ")", "g"),
        Ve = {
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
        Ae = ["Webkit", "Ms", "Moz", "O"];
      function je(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t
          ? ""
          : n ||
              "number" != typeof t ||
              0 === t ||
              (Ve.hasOwnProperty(e) && Ve[e])
            ? ("" + t).trim()
            : t + "px";
      }
      Ve = Object.keys(Ve).reduce(function (e, t) {
        return (
          Ae.forEach(function (n) {
            return (e[
              (function (e, t) {
                return e + t.charAt(0).toUpperCase() + t.substring(1);
              })(n, t)
            ] = e[t]);
          }),
          e
        );
      }, Ve);
      var Oe = {};
      q(function (e) {
        return new ee(e);
      }),
        S("div"),
        O(function (e) {
          var t = e.output
              .map(function (e) {
                return e.replace(ke, be);
              })
              .map(function (e) {
                return e.replace(xe, be);
              }),
            n = t[0].match(we).map(function () {
              return [];
            });
          t.forEach(function (e) {
            e.match(we).forEach(function (e, t) {
              return n[t].push(+e);
            });
          });
          var r = t[0].match(we).map(function (t, r) {
            return L(i({}, e, { output: n[r] }));
          });
          return function (e) {
            var n = 0;
            return t[0]
              .replace(we, function () {
                return r[n++](e);
              })
              .replace(
                /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
                function (e, t, n, r, i) {
                  return (
                    "rgba(" +
                    Math.round(t) +
                    ", " +
                    Math.round(n) +
                    ", " +
                    Math.round(r) +
                    ", " +
                    i +
                    ")"
                  );
                },
              );
          };
        }),
        x(te),
        k(
          function (e, t) {
            if (!e.nodeType || void 0 === e.setAttribute) return !1;
            var n = t.style,
              r = t.children,
              i = t.scrollTop,
              o = t.scrollLeft,
              u = a(t, ["style", "children", "scrollTop", "scrollLeft"]),
              s =
                "filter" === e.nodeName ||
                (e.parentNode && "filter" === e.parentNode.nodeName);
            for (var l in (void 0 !== i && (e.scrollTop = i),
            void 0 !== o && (e.scrollLeft = o),
            void 0 !== r && (e.textContent = r),
            n))
              if (n.hasOwnProperty(l)) {
                var c = 0 === l.indexOf("--"),
                  f = je(l, n[l], c);
                "float" === l && (l = "cssFloat"),
                  c ? e.style.setProperty(l, f) : (e.style[l] = f);
              }
            for (var d in u) {
              var p = s
                ? d
                : Oe[d] ||
                  (Oe[d] = d.replace(/([A-Z])/g, function (e) {
                    return "-" + e.toLowerCase();
                  }));
              void 0 !== e.getAttribute(p) && e.setAttribute(p, u[d]);
            }
          },
          function (e) {
            return e;
          },
        );
      var Ce,
        Ee,
        Se =
          ((Ce = function (e) {
            return o.forwardRef(function (t, n) {
              var r = f(),
                s = o.useRef(!0),
                l = o.useRef(null),
                d = o.useRef(null),
                p = o.useCallback(function (e) {
                  var t = l.current;
                  (l.current = new T(e, function () {
                    var e = !1;
                    d.current &&
                      (e = m.fn(d.current, l.current.getAnimatedValue())),
                      (d.current && !1 !== e) || r();
                  })),
                    t && t.detach();
                }, []);
              o.useEffect(function () {
                return function () {
                  (s.current = !1), l.current && l.current.detach();
                };
              }, []),
                o.useImperativeHandle(n, function () {
                  return M(d, s, r);
                }),
                p(t);
              var h,
                g = l.current.getValue(),
                v =
                  (g.scrollTop,
                  g.scrollLeft,
                  a(g, ["scrollTop", "scrollLeft"])),
                y =
                  ((h = e),
                  !c.fun(h) || h.prototype instanceof u.Component
                    ? function (e) {
                        return (d.current = (function (e, t) {
                          return (
                            t &&
                              (c.fun(t) ? t(e) : c.obj(t) && (t.current = e)),
                            e
                          );
                        })(e, n));
                      }
                    : void 0);
              return u.createElement(e, i({}, v, { ref: y }));
            });
          }),
          void 0 === (Ee = !1) && (Ee = !0),
          function (e) {
            return (c.arr(e) ? e : Object.keys(e)).reduce(function (e, t) {
              var n = Ee ? t[0].toLowerCase() + t.substring(1) : t;
              return (e[n] = Ce(n)), e;
            }, Ce);
          }),
        Pe = Se([
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ]);
      (t.CS = Pe),
        (t.zh = function (e) {
          var t = c.fun(e),
            n = H(1, t ? e : [e]),
            r = n[0],
            i = n[1],
            a = n[2];
          return t ? [r[0], i, a] : r;
        });
    },
    25387: (e) => {
      (e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    72378: (e) => {
      function t() {
        return (
          (e.exports = t =
            Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t.apply(null, arguments)
        );
      }
      (e.exports = t),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    31613: (e, t, n) => {
      var r = n(93732);
      (e.exports = function (e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          r(e, t);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    37501: (e) => {
      (e.exports = function (e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (t.includes(r)) continue;
            n[r] = e[r];
          }
        return n;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    93732: (e) => {
      function t(n, r) {
        return (
          (e.exports = t =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t(n, r)
        );
      }
      (e.exports = t),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
  },
]);
