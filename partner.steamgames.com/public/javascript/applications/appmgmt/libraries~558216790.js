/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6853],
  {
    48046: (t, r, n) => {
      n.d(r, {
        SQ: () => d,
        YH: () => g,
        a: () => l,
        cY: () => p,
        fT: () => i,
        ge: () => c,
        l: () => e,
      });
      var o = n(68841),
        e = function (t) {
          var r = t.top,
            n = t.right,
            o = t.bottom,
            e = t.left;
          return {
            top: r,
            right: n,
            bottom: o,
            left: e,
            width: n - e,
            height: o - r,
            x: e,
            y: r,
            center: { x: (n + e) / 2, y: (o + r) / 2 },
          };
        },
        i = function (t, r) {
          return {
            top: t.top - r.top,
            left: t.left - r.left,
            bottom: t.bottom + r.bottom,
            right: t.right + r.right,
          };
        },
        u = function (t, r) {
          return {
            top: t.top + r.top,
            left: t.left + r.left,
            bottom: t.bottom - r.bottom,
            right: t.right - r.right,
          };
        },
        f = { top: 0, right: 0, bottom: 0, left: 0 },
        c = function (t) {
          var r = t.borderBox,
            n = t.margin,
            o = void 0 === n ? f : n,
            c = t.border,
            a = void 0 === c ? f : c,
            p = t.padding,
            d = void 0 === p ? f : p,
            l = e(i(r, o)),
            g = e(u(r, a)),
            h = e(u(g, d));
          return {
            marginBox: l,
            borderBox: e(r),
            paddingBox: g,
            contentBox: h,
            margin: o,
            border: a,
            padding: d,
          };
        },
        a = function (t) {
          var r = t.slice(0, -2);
          if ("px" !== t.slice(-2)) return 0;
          var n = Number(r);
          return isNaN(n) && (0, o.A)(!1), n;
        },
        p = function (t, r) {
          var n,
            o,
            e = t.borderBox,
            i = t.border,
            u = t.margin,
            f = t.padding,
            a =
              ((o = r),
              {
                top: (n = e).top + o.y,
                left: n.left + o.x,
                bottom: n.bottom + o.y,
                right: n.right + o.x,
              });
          return c({ borderBox: a, border: i, margin: u, padding: f });
        },
        d = function (t, r) {
          return (
            void 0 === r &&
              (r = { x: window.pageXOffset, y: window.pageYOffset }),
            p(t, r)
          );
        },
        l = function (t, r) {
          var n = {
              top: a(r.marginTop),
              right: a(r.marginRight),
              bottom: a(r.marginBottom),
              left: a(r.marginLeft),
            },
            o = {
              top: a(r.paddingTop),
              right: a(r.paddingRight),
              bottom: a(r.paddingBottom),
              left: a(r.paddingLeft),
            },
            e = {
              top: a(r.borderTopWidth),
              right: a(r.borderRightWidth),
              bottom: a(r.borderBottomWidth),
              left: a(r.borderLeftWidth),
            };
          return c({ borderBox: t, margin: n, padding: o, border: e });
        },
        g = function (t) {
          var r = t.getBoundingClientRect(),
            n = window.getComputedStyle(t);
          return l(r, n);
        };
    },
    18651: (t, r, n) => {
      n.d(r, { A: () => o });
      const o = function (t) {
        var r = [],
          n = null,
          o = function () {
            for (var o = arguments.length, e = new Array(o), i = 0; i < o; i++)
              e[i] = arguments[i];
            (r = e),
              n ||
                (n = requestAnimationFrame(function () {
                  (n = null), t.apply(void 0, r);
                }));
          };
        return (
          (o.cancel = function () {
            n && (cancelAnimationFrame(n), (n = null));
          }),
          o
        );
      };
    },
    3998: (t, r, n) => {
      n.d(r, { Tw: () => g, Zz: () => l, y$: () => a, zH: () => d });
      var o = n(54883);
      function e(t) {
        return (
          "Minified Redux error #" +
          t +
          "; visit https://redux.js.org/Errors?code=" +
          t +
          " for the full message or use the non-minified dev environment for full errors. "
        );
      }
      var i =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable",
        u = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        f = {
          INIT: "@@redux/INIT" + u(),
          REPLACE: "@@redux/REPLACE" + u(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + u();
          },
        };
      function c(t) {
        if ("object" != typeof t || null === t) return !1;
        for (var r = t; null !== Object.getPrototypeOf(r); )
          r = Object.getPrototypeOf(r);
        return Object.getPrototypeOf(t) === r;
      }
      function a(t, r, n) {
        var o;
        if (
          ("function" == typeof r && "function" == typeof n) ||
          ("function" == typeof n && "function" == typeof arguments[3])
        )
          throw new Error(e(0));
        if (
          ("function" == typeof r && void 0 === n && ((n = r), (r = void 0)),
          void 0 !== n)
        ) {
          if ("function" != typeof n) throw new Error(e(1));
          return n(a)(t, r);
        }
        if ("function" != typeof t) throw new Error(e(2));
        var u = t,
          p = r,
          d = [],
          l = d,
          g = !1;
        function h() {
          l === d && (l = d.slice());
        }
        function s() {
          if (g) throw new Error(e(3));
          return p;
        }
        function b(t) {
          if ("function" != typeof t) throw new Error(e(4));
          if (g) throw new Error(e(5));
          var r = !0;
          return (
            h(),
            l.push(t),
            function () {
              if (r) {
                if (g) throw new Error(e(6));
                (r = !1), h();
                var n = l.indexOf(t);
                l.splice(n, 1), (d = null);
              }
            }
          );
        }
        function v(t) {
          if (!c(t)) throw new Error(e(7));
          if (void 0 === t.type) throw new Error(e(8));
          if (g) throw new Error(e(9));
          try {
            (g = !0), (p = u(p, t));
          } finally {
            g = !1;
          }
          for (var r = (d = l), n = 0; n < r.length; n++) {
            (0, r[n])();
          }
          return t;
        }
        return (
          v({ type: f.INIT }),
          ((o = {
            dispatch: v,
            subscribe: b,
            getState: s,
            replaceReducer: function (t) {
              if ("function" != typeof t) throw new Error(e(10));
              (u = t), v({ type: f.REPLACE });
            },
          })[i] = function () {
            var t,
              r = b;
            return (
              ((t = {
                subscribe: function (t) {
                  if ("object" != typeof t || null === t)
                    throw new Error(e(11));
                  function n() {
                    t.next && t.next(s());
                  }
                  return n(), { unsubscribe: r(n) };
                },
              })[i] = function () {
                return this;
              }),
              t
            );
          }),
          o
        );
      }
      function p(t, r) {
        return function () {
          return r(t.apply(this, arguments));
        };
      }
      function d(t, r) {
        if ("function" == typeof t) return p(t, r);
        if ("object" != typeof t || null === t) throw new Error(e(16));
        var n = {};
        for (var o in t) {
          var i = t[o];
          "function" == typeof i && (n[o] = p(i, r));
        }
        return n;
      }
      function l() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return 0 === r.length
          ? function (t) {
              return t;
            }
          : 1 === r.length
            ? r[0]
            : r.reduce(function (t, r) {
                return function () {
                  return t(r.apply(void 0, arguments));
                };
              });
      }
      function g() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return function (t) {
          return function () {
            var n = t.apply(void 0, arguments),
              i = function () {
                throw new Error(e(15));
              },
              u = {
                getState: n.getState,
                dispatch: function () {
                  return i.apply(void 0, arguments);
                },
              },
              f = r.map(function (t) {
                return t(u);
              });
            return (
              (i = l.apply(void 0, f)(n.dispatch)),
              (0, o.A)((0, o.A)({}, n), {}, { dispatch: i })
            );
          };
        };
      }
    },
    46311: (t, r, n) => {
      n.d(r, { Kr: () => i, hb: () => u });
      var o = n(90626);
      function e(t, r) {
        var n = (0, o.useState)(function () {
            return { inputs: r, result: t() };
          })[0],
          e = (0, o.useRef)(!0),
          i = (0, o.useRef)(n),
          u =
            e.current ||
            Boolean(
              r &&
                i.current.inputs &&
                (function (t, r) {
                  if (t.length !== r.length) return !1;
                  for (var n = 0; n < t.length; n++)
                    if (t[n] !== r[n]) return !1;
                  return !0;
                })(r, i.current.inputs),
            )
              ? i.current
              : { inputs: r, result: t() };
        return (
          (0, o.useEffect)(
            function () {
              (e.current = !1), (i.current = u);
            },
            [u],
          ),
          u.result
        );
      }
      var i = e,
        u = function (t, r) {
          return e(function () {
            return t;
          }, r);
        };
    },
  },
]);
