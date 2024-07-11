/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9672],
  {
    71109: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        DiscoveryQueueWidgetCtn: "_1LXqxVtAL8Lmy7J7rLSVit",
        WidgetText: "co4IP1iV1813n9UgG3h5f",
        WidgetCapsule: "ZyOLslFdmnVjR1OGpRaue",
        CloseButton: "bfN8kdqVDI58Ly1qiSuT_",
        Y: "_1FD7rgQVEqkzjDjzYa-1BC",
      };
    },
    58632: (e) => {
      "use strict";
      var t,
        n = (function () {
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
                var n = e && e.maxBatchSize;
                if (void 0 === n) return 1 / 0;
                if ("number" != typeof n || n < 1)
                  throw new TypeError(
                    "maxBatchSize must be a positive number: " + n,
                  );
                return n;
              })(t)),
              (this._batchScheduleFn = (function (e) {
                var t = e && e.batchScheduleFn;
                if (void 0 === t) return r;
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
                var n = e && e.cacheMap;
                if (void 0 === n) return new Map();
                if (null !== n) {
                  var r = ["get", "set", "delete", "clear"].filter(
                    function (e) {
                      return n && "function" != typeof n[e];
                    },
                  );
                  if (0 !== r.length)
                    throw new TypeError(
                      "Custom cacheMap missing methods: " + r.join(", "),
                    );
                }
                return n;
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
                  var n = { hasDispatched: !1, keys: [], callbacks: [] };
                  return (
                    (e._batch = n),
                    e._batchScheduleFn(function () {
                      !(function (e, t) {
                        if (((t.hasDispatched = !0), 0 === t.keys.length))
                          return void a(t);
                        var n;
                        try {
                          n = e._batchLoadFn(t.keys);
                        } catch (n) {
                          return c(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " +
                                String(n) +
                                ".",
                            ),
                          );
                        }
                        if (!n || "function" != typeof n.then)
                          return c(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                String(n) +
                                ".",
                            ),
                          );
                        n.then(function (e) {
                          if (!i(e))
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
                          for (var n = 0; n < t.callbacks.length; n++) {
                            var r = e[n];
                            r instanceof Error
                              ? t.callbacks[n].reject(r)
                              : t.callbacks[n].resolve(r);
                          }
                        }).catch(function (n) {
                          c(e, t, n);
                        });
                      })(e, n);
                    }),
                    n
                  );
                })(this),
                n = this._cacheMap,
                r = this._cacheKeyFn(e);
              if (n) {
                var o = n.get(r);
                if (o) {
                  var u = t.cacheHits || (t.cacheHits = []);
                  return new Promise(function (e) {
                    u.push(function () {
                      e(o);
                    });
                  });
                }
              }
              t.keys.push(e);
              var s = new Promise(function (e, n) {
                t.callbacks.push({ resolve: e, reject: n });
              });
              return n && n.set(r, s), s;
            }),
            (t.loadMany = function (e) {
              if (!i(e))
                throw new TypeError(
                  "The loader.loadMany() function must be called with Array<key> but got: " +
                    e +
                    ".",
                );
              for (var t = [], n = 0; n < e.length; n++)
                t.push(
                  this.load(e[n]).catch(function (e) {
                    return e;
                  }),
                );
              return Promise.all(t);
            }),
            (t.clear = function (e) {
              var t = this._cacheMap;
              if (t) {
                var n = this._cacheKeyFn(e);
                t.delete(n);
              }
              return this;
            }),
            (t.clearAll = function () {
              var e = this._cacheMap;
              return e && e.clear(), this;
            }),
            (t.prime = function (e, t) {
              var n = this._cacheMap;
              if (n) {
                var r,
                  c = this._cacheKeyFn(e);
                if (void 0 === n.get(c))
                  t instanceof Error
                    ? (r = Promise.reject(t)).catch(function () {})
                    : (r = Promise.resolve(t)),
                    n.set(c, r);
              }
              return this;
            }),
            e
          );
        })(),
        r =
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
      function c(e, t, n) {
        a(t);
        for (var r = 0; r < t.keys.length; r++)
          e.clear(t.keys[r]), t.callbacks[r].reject(n);
      }
      function a(e) {
        if (e.cacheHits)
          for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
      }
      function i(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "number" == typeof e.length &&
          (0 === e.length ||
            (e.length > 0 &&
              Object.prototype.hasOwnProperty.call(e, e.length - 1)))
        );
      }
      e.exports = n;
    },
    55909: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => s });
      var r = n(90626),
        c = n(71513),
        a = n(93007),
        i = n(56093),
        o = n(78327),
        u = n(61712);
      function s(e) {
        const { children: t, navTreeRef: n, ...s } = e,
          l = r.useRef(),
          h = (0, i.Ue)(l, n),
          f = (0, o.Qn)(),
          d = window.__virtual_keyboard_client;
        if (f) {
          const e = window.__nav_tree_root;
          return r.createElement(
            c.B2,
            { ...s, navTreeRef: h, secondary: !0, parentEmbeddedNavTree: e },
            r.createElement(
              u.F6,
              { factory: d },
              r.createElement(a.q, null, t),
            ),
          );
        }
        return r.createElement(r.Fragment, null, t);
      }
    },
    95034: (e, t, n) => {
      "use strict";
      n.d(t, {
        Bm: () => o,
        QD: () => s,
        f3: () => a,
        iV: () => h,
        ip: () => l,
        le: () => u,
      });
      var r = n(90626),
        c = n(92757);
      function a(e, t) {
        let n;
        "string" == typeof e
          ? (n = e)
          : "location" in e
            ? (n = e.location.search)
            : "search" in e && (n = e.search);
        const r = new URLSearchParams(n.substring(1));
        if (r.has(t)) {
          const e = r.getAll(t);
          return e[e.length - 1];
        }
      }
      const i = (e) => null != e;
      function o(e, t, n, r = !1) {
        const c = new URLSearchParams(e.location.search.substring(1));
        c.delete(t),
          i(n) && c.append(t, n),
          r
            ? e.replace(`?${c.toString()}`, { ...e.location.state })
            : e.push(`?${c.toString()}`);
      }
      function u(e, t, n) {
        o(e, t, n, !0);
      }
      function s(e, t) {
        const n = (0, c.W6)(),
          u = (0, c.zy)(),
          s = (0, r.useMemo)(() => {
            const n = a(u.search, e);
            return i(n)
              ? i(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== n)
                  : t.constructor(n)
                : n
              : t;
          }, [u.search, e, t]),
          l = (0, r.useCallback)(
            (t) => {
              o(n, e, i(t) ? String(t) : null);
            },
            [n, e],
          );
        return [s, l];
      }
      function l(e, t, n = !1) {
        const r = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const n = t[e];
            r.delete(e), i(n) && r.append(e, n);
          }
        n
          ? e.replace(`?${r.toString()}`, { ...e.location.state })
          : e.push(`?${r.toString()}`);
      }
      function h(e, t) {
        l(e, t, !0);
      }
    },
    47554: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => v });
      var r = n(90626),
        c = n(55909),
        a = n(32381),
        i = n(25855),
        o = n(39199),
        u = n(55263),
        s = n(95034),
        l = n(12155),
        h = n(39505),
        f = n(26749),
        d = n(61859),
        y = n(71109),
        p = n.n(y),
        m = n(78327);
      function v(e) {
        const { appID: t } = e,
          n = (0, f.G)(),
          [y] = (0, s.QD)("inqueue", "0"),
          [v, g] = (0, r.useState)(!1),
          [b, A] = (0, r.useState)(!1),
          [w] = (0, u.t7)(t, { include_assets: !0 }),
          E = (0, i.A)(),
          D = r.useRef();
        r.useEffect(() => D.current?.Activate(!0), []);
        const S = (0, m.Qn)(),
          { eStoreDiscoveryQueueType: k, storePageFilter: T } =
            r.useMemo(() => {
              if (y?.length > 0) {
                const e = y.split("_"),
                  t = Number(e[0]);
                let n;
                return (
                  e.length > 1 && (n = (0, o.bz)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: n }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [y]),
          M = r.useCallback(() => {
            A(!0);
          }, []),
          R = r.useCallback(() => {
            g(!0);
          }, []),
          N = (0, o.WX)(k, T);
        return n && w
          ? b
            ? null
            : r.createElement(
                c.u,
                {
                  NavigationManager: E,
                  navTreeRef: D,
                  navID: "DiscoveryQueueAppWidget",
                },
                r.createElement(
                  a.Z,
                  {
                    focusable: !0,
                    className: p().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: M,
                    onOKButton: R,
                    onOKActionDescription: (0, d.we)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, d.we)("#Button_Close"),
                  },
                  r.createElement("img", {
                    className: p().WidgetCapsule,
                    src: w?.GetAssets().GetSmallCapsuleURL(),
                  }),
                  r.createElement(
                    "div",
                    { onClick: R, className: p().WidgetText },
                    (0, d.we)("#DiscoveryQueue_ResumeWizard"),
                    N?.length > 0 && ": " + N,
                  ),
                  !S &&
                    r.createElement(
                      "div",
                      { className: p().CloseButton, onClick: M },
                      r.createElement(l.X, null),
                    ),
                  v &&
                    r.createElement(h.jM, {
                      includeAppID: t,
                      bWizardVisible: v,
                      fnCloseModal: () => g(!1),
                      eStoreDiscoveryQueueType: k,
                      storePageFilter: T,
                    }),
                ),
              )
          : null;
      }
    },
    25054: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => h });
      var r = n(90626),
        c = n(61859),
        a = n(39505),
        i = n(26749),
        o = n(32381),
        u = n(78327),
        s = n(44325),
        l = n(738);
      function h(e) {
        const t = (0, i.G)(),
          [n, h] = (0, r.useState)(!1),
          f = r.useCallback(() => {
            u.iA.logged_in
              ? h(!0)
              : (0, l.pg)(
                  r.createElement(s.KG, {
                    onOK: () => {
                      window.location.href = `${u.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                    },
                    strOKButtonText: (0, c.we)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, c.we)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, c.we)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window,
                );
          }, []);
        return t
          ? r.createElement(
              o.Z,
              null,
              r.createElement(
                "a",
                { onClick: f, className: "experiment-button" },
                (0, c.we)("#DiscoveryQueue_OpenWizard"),
              ),
              n &&
                r.createElement(a.jM, {
                  bWizardVisible: n,
                  fnCloseModal: () => h(!1),
                  eStoreDiscoveryQueueType: 0,
                }),
            )
          : r.createElement(
              "div",
              { className: "experiment-button-placeholder" },
              " ",
            );
      }
    },
    30143: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      const r =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUQ5NEMwOTYzRDc4MTFFQUExREZEODRBMDBCNjdENTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ5NEMwOTczRDc4MTFFQUExREZEODRBMDBCNjdENTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRDk0QzA5NDNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRDk0QzA5NTNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po/TXacAAABMSURBVHjaYvz//z8DNQHjyDMQDICGJgDx3f/kA5DeBJhh8f+pB+JBXr4DNFeZSp69CzLwP7UjZdTAkWAgVdMh1XMK1fPyCCwPAQIMAKf/Y+3dveJlAAAAAElFTkSuQmCC";
    },
  },
]);
