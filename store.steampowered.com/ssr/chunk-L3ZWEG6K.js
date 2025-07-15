import { c as v } from "./chunk-VTJ2AC5Q.js";
var T = v((E, d) => {
  "use strict";
  var w = (function () {
      function e(n, r) {
        if (typeof n != "function")
          throw new TypeError(
            "DataLoader must be constructed with a function which accepts " +
              ("Array<key> and returns Promise<Array<value>>, but got: " +
                n +
                "."),
          );
        (this._batchLoadFn = n),
          (this._maxBatchSize = _(r)),
          (this._batchScheduleFn = k(r)),
          (this._cacheKeyFn = M(r)),
          (this._cacheMap = S(r)),
          (this._batch = null),
          (this.name = A(r));
      }
      var t = e.prototype;
      return (
        (t.load = function (r) {
          if (r == null)
            throw new TypeError(
              "The loader.load() function must be called with a value, " +
                ("but got: " + String(r) + "."),
            );
          var a = b(this),
            c = this._cacheMap,
            i = this._cacheKeyFn(r);
          if (c) {
            var u = c.get(i);
            if (u) {
              var m = a.cacheHits || (a.cacheHits = []);
              return new Promise(function (o) {
                m.push(function () {
                  o(u);
                });
              });
            }
          }
          a.keys.push(r);
          var l = new Promise(function (o, p) {
            a.callbacks.push({ resolve: o, reject: p });
          });
          return c && c.set(i, l), l;
        }),
        (t.loadMany = function (r) {
          if (!y(r))
            throw new TypeError(
              "The loader.loadMany() function must be called with Array<key> " +
                ("but got: " + r + "."),
            );
          for (var a = [], c = 0; c < r.length; c++)
            a.push(
              this.load(r[c]).catch(function (i) {
                return i;
              }),
            );
          return Promise.all(a);
        }),
        (t.clear = function (r) {
          var a = this._cacheMap;
          if (a) {
            var c = this._cacheKeyFn(r);
            a.delete(c);
          }
          return this;
        }),
        (t.clearAll = function () {
          var r = this._cacheMap;
          return r && r.clear(), this;
        }),
        (t.prime = function (r, a) {
          var c = this._cacheMap;
          if (c) {
            var i = this._cacheKeyFn(r);
            if (c.get(i) === void 0) {
              var u;
              a instanceof Error
                ? ((u = Promise.reject(a)), u.catch(function () {}))
                : (u = Promise.resolve(a)),
                c.set(i, u);
            }
          }
          return this;
        }),
        e
      );
    })(),
    g =
      typeof process == "object" && typeof process.nextTick == "function"
        ? function (e) {
            h || (h = Promise.resolve()),
              h.then(function () {
                process.nextTick(e);
              });
          }
        : typeof setImmediate == "function"
          ? function (e) {
              setImmediate(e);
            }
          : function (e) {
              setTimeout(e);
            },
    h;
  function b(e) {
    var t = e._batch;
    if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
      return t;
    var n = { hasDispatched: !1, keys: [], callbacks: [] };
    return (
      (e._batch = n),
      e._batchScheduleFn(function () {
        P(e, n);
      }),
      n
    );
  }
  function P(e, t) {
    if (((t.hasDispatched = !0), t.keys.length === 0)) {
      s(t);
      return;
    }
    var n;
    try {
      n = e._batchLoadFn(t.keys);
    } catch (r) {
      return f(
        e,
        t,
        new TypeError(
          "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function " +
            ("errored synchronously: " + String(r) + "."),
        ),
      );
    }
    if (!n || typeof n.then != "function")
      return f(
        e,
        t,
        new TypeError(
          "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did " +
            ("not return a Promise: " + String(n) + "."),
        ),
      );
    n.then(function (r) {
      if (!y(r))
        throw new TypeError(
          "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did " +
            ("not return a Promise of an Array: " + String(r) + "."),
        );
      if (r.length !== t.keys.length)
        throw new TypeError(
          "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys." +
            (`

Keys:
` +
              String(t.keys)) +
            (`

Values:
` +
              String(r)),
        );
      s(t);
      for (var a = 0; a < t.callbacks.length; a++) {
        var c = r[a];
        c instanceof Error
          ? t.callbacks[a].reject(c)
          : t.callbacks[a].resolve(c);
      }
    }).catch(function (r) {
      f(e, t, r);
    });
  }
  function f(e, t, n) {
    s(t);
    for (var r = 0; r < t.keys.length; r++)
      e.clear(t.keys[r]), t.callbacks[r].reject(n);
  }
  function s(e) {
    if (e.cacheHits)
      for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
  }
  function _(e) {
    var t = !e || e.batch !== !1;
    if (!t) return 1;
    var n = e && e.maxBatchSize;
    if (n === void 0) return 1 / 0;
    if (typeof n != "number" || n < 1)
      throw new TypeError("maxBatchSize must be a positive number: " + n);
    return n;
  }
  function k(e) {
    var t = e && e.batchScheduleFn;
    if (t === void 0) return g;
    if (typeof t != "function")
      throw new TypeError("batchScheduleFn must be a function: " + t);
    return t;
  }
  function M(e) {
    var t = e && e.cacheKeyFn;
    if (t === void 0)
      return function (n) {
        return n;
      };
    if (typeof t != "function")
      throw new TypeError("cacheKeyFn must be a function: " + t);
    return t;
  }
  function S(e) {
    var t = !e || e.cache !== !1;
    if (!t) return null;
    var n = e && e.cacheMap;
    if (n === void 0) return new Map();
    if (n !== null) {
      var r = ["get", "set", "delete", "clear"],
        a = r.filter(function (c) {
          return n && typeof n[c] != "function";
        });
      if (a.length !== 0)
        throw new TypeError("Custom cacheMap missing methods: " + a.join(", "));
    }
    return n;
  }
  function A(e) {
    return e && e.name ? e.name : null;
  }
  function y(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      typeof e.length == "number" &&
      (e.length === 0 ||
        (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
    );
  }
  d.exports = w;
});
export { T as a };
