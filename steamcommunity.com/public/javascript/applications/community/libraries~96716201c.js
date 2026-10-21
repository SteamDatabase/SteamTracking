/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [66193],
    {
      65414: (Mr, es, ct) => {
        ct.d(es, { CS: () => kr, zh: () => Fe });
        var qe = Y(),
          w = (e) => ge(e, qe),
          xe = Y();
        w.write = (e) => ge(e, xe);
        var pe = Y();
        w.onStart = (e) => ge(e, pe);
        var Ue = Y();
        w.onFrame = (e) => ge(e, Ue);
        var $e = Y();
        w.onFinish = (e) => ge(e, $e);
        var re = [];
        w.setTimeout = (e, t) => {
          const n = w.now() + t,
            s = () => {
              const i = re.findIndex((a) => a.cancel == s);
              ~i && re.splice(i, 1), (K -= ~i ? 1 : 0);
            },
            r = { time: n, handler: e, cancel: s };
          return re.splice(Nt(n), 0, r), (K += 1), Qt(), r;
        };
        var Nt = (e) => ~(~re.findIndex((t) => t.time > e) || ~re.length);
        (w.cancel = (e) => {
          pe.delete(e), Ue.delete(e), $e.delete(e), qe.delete(e), xe.delete(e);
        }),
          (w.sync = (e) => {
            (dt = !0), w.batchedUpdates(e), (dt = !1);
          }),
          (w.throttle = (e) => {
            let t;
            function n() {
              try {
                e(...t);
              } finally {
                t = null;
              }
            }
            function s(...r) {
              (t = r), w.onStart(n);
            }
            return (
              (s.handler = e),
              (s.cancel = () => {
                pe.delete(n), (t = null);
              }),
              s
            );
          });
        var lt = typeof window < "u" ? window.requestAnimationFrame : () => {};
        (w.use = (e) => (lt = e)),
          (w.now =
            typeof performance < "u" ? () => performance.now() : Date.now),
          (w.batchedUpdates = (e) => e()),
          (w.catch = console.error),
          (w.frameLoop = "always"),
          (w.advance = () => {
            w.frameLoop !== "demand"
              ? console.warn(
                  "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand",
                )
              : Bt();
          });
        var G = -1,
          K = 0,
          dt = !1;
        function ge(e, t) {
          dt ? (t.delete(e), e(0)) : (t.add(e), Qt());
        }
        function Qt() {
          G < 0 && ((G = 0), w.frameLoop !== "demand" && lt(Dt));
        }
        function ts() {
          G = -1;
        }
        function Dt() {
          ~G && (lt(Dt), w.batchedUpdates(Bt));
        }
        function Bt() {
          const e = G;
          G = w.now();
          const t = Nt(G);
          if ((t && (Ht(re.splice(0, t), (n) => n.handler()), (K -= t)), !K)) {
            ts();
            return;
          }
          pe.flush(),
            qe.flush(e ? Math.min(64, G - e) : 16.667),
            Ue.flush(),
            xe.flush(),
            $e.flush();
        }
        function Y() {
          let e = new Set(),
            t = e;
          return {
            add(n) {
              (K += t == e && !e.has(n) ? 1 : 0), e.add(n);
            },
            delete(n) {
              return (K -= t == e && e.has(n) ? 1 : 0), e.delete(n);
            },
            flush(n) {
              t.size &&
                ((e = new Set()),
                (K -= t.size),
                Ht(t, (s) => s(n) && e.add(s)),
                (K += e.size),
                (t = e));
            },
          };
        }
        function Ht(e, t) {
          e.forEach((n) => {
            try {
              t(n);
            } catch (s) {
              w.catch(s);
            }
          });
        }
        var Cr = {
            count() {
              return K;
            },
            isRunning() {
              return G >= 0;
            },
            clear() {
              (G = -1),
                (re = []),
                (pe = Y()),
                (qe = Y()),
                (Ue = Y()),
                (xe = Y()),
                ($e = Y()),
                (K = 0);
            },
          },
          k = ct(90626),
          ns = Object.defineProperty,
          ss = (e, t) => {
            for (var n in t) ns(e, n, { get: t[n], enumerable: !0 });
          },
          N = {};
        ss(N, {
          assign: () => Kt,
          colors: () => te,
          createStringInterpolator: () => mt,
          skipAnimation: () => Gt,
          to: () => Wt,
          willAdvance: () => pt,
        });
        function ft() {}
        var rs = (e, t, n) =>
            Object.defineProperty(e, t, {
              value: n,
              writable: !0,
              configurable: !0,
            }),
          c = {
            arr: Array.isArray,
            obj: (e) => !!e && e.constructor.name === "Object",
            fun: (e) => typeof e == "function",
            str: (e) => typeof e == "string",
            num: (e) => typeof e == "number",
            und: (e) => e === void 0,
          };
        function J(e, t) {
          if (c.arr(e)) {
            if (!c.arr(t) || e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
            return !0;
          }
          return e === t;
        }
        var I = (e, t) => e.forEach(t);
        function X(e, t, n) {
          if (c.arr(e)) {
            for (let s = 0; s < e.length; s++) t.call(n, e[s], `${s}`);
            return;
          }
          for (const s in e) e.hasOwnProperty(s) && t.call(n, e[s], s);
        }
        var q = (e) => (c.und(e) ? [] : c.arr(e) ? e : [e]);
        function ve(e, t) {
          if (e.size) {
            const n = Array.from(e);
            e.clear(), I(n, t);
          }
        }
        var ye = (e, ...t) => ve(e, (n) => n(...t)),
          ht = () =>
            typeof window > "u" ||
            !window.navigator ||
            /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
          mt,
          Wt,
          te = null,
          Gt = !1,
          pt = ft,
          Kt = (e) => {
            e.to && (Wt = e.to),
              e.now && (w.now = e.now),
              e.colors !== void 0 && (te = e.colors),
              e.skipAnimation != null && (Gt = e.skipAnimation),
              e.createStringInterpolator && (mt = e.createStringInterpolator),
              e.requestAnimationFrame && w.use(e.requestAnimationFrame),
              e.batchedUpdates && (w.batchedUpdates = e.batchedUpdates),
              e.willAdvance && (pt = e.willAdvance),
              e.frameLoop && (w.frameLoop = e.frameLoop);
          },
          _e = new Set(),
          U = [],
          gt = [],
          je = 0,
          we = {
            get idle() {
              return !_e.size && !U.length;
            },
            start(e) {
              je > e.priority ? (_e.add(e), w.onStart(is)) : (Yt(e), w(vt));
            },
            advance: vt,
            sort(e) {
              if (je) w.onFrame(() => we.sort(e));
              else {
                const t = U.indexOf(e);
                ~t && (U.splice(t, 1), Xt(e));
              }
            },
            clear() {
              (U = []), _e.clear();
            },
          };
        function is() {
          _e.forEach(Yt), _e.clear(), w(vt);
        }
        function Yt(e) {
          U.includes(e) || Xt(e);
        }
        function Xt(e) {
          U.splice(
            as(U, (t) => t.priority > e.priority),
            0,
            e,
          );
        }
        function vt(e) {
          const t = gt;
          for (let n = 0; n < U.length; n++) {
            const s = U[n];
            (je = s.priority),
              s.idle || (pt(s), s.advance(e), s.idle || t.push(s));
          }
          return (je = 0), (gt = U), (gt.length = 0), (U = t), U.length > 0;
        }
        function as(e, t) {
          const n = e.findIndex(t);
          return n < 0 ? e.length : n;
        }
        var os = (e, t, n) => Math.min(Math.max(n, e), t),
          us = {
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
          Q = "[-+]?\\d*\\.?\\d+",
          Ne = Q + "%";
        function Qe(...e) {
          return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
        }
        var cs = new RegExp("rgb" + Qe(Q, Q, Q)),
          ls = new RegExp("rgba" + Qe(Q, Q, Q, Q)),
          ds = new RegExp("hsl" + Qe(Q, Ne, Ne)),
          fs = new RegExp("hsla" + Qe(Q, Ne, Ne, Q)),
          hs = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          ms =
            /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          ps = /^#([0-9a-fA-F]{6})$/,
          gs = /^#([0-9a-fA-F]{8})$/;
        function vs(e) {
          let t;
          return typeof e == "number"
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
              ? e
              : null
            : (t = ps.exec(e))
              ? parseInt(t[1] + "ff", 16) >>> 0
              : te && te[e] !== void 0
                ? te[e]
                : (t = cs.exec(e))
                  ? ((ce(t[1]) << 24) |
                      (ce(t[2]) << 16) |
                      (ce(t[3]) << 8) |
                      255) >>>
                    0
                  : (t = ls.exec(e))
                    ? ((ce(t[1]) << 24) |
                        (ce(t[2]) << 16) |
                        (ce(t[3]) << 8) |
                        en(t[4])) >>>
                      0
                    : (t = hs.exec(e))
                      ? parseInt(
                          t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff",
                          16,
                        ) >>> 0
                      : (t = gs.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = ms.exec(e))
                          ? parseInt(
                              t[1] +
                                t[1] +
                                t[2] +
                                t[2] +
                                t[3] +
                                t[3] +
                                t[4] +
                                t[4],
                              16,
                            ) >>> 0
                          : (t = ds.exec(e))
                            ? (Zt(Jt(t[1]), De(t[2]), De(t[3])) | 255) >>> 0
                            : (t = fs.exec(e))
                              ? (Zt(Jt(t[1]), De(t[2]), De(t[3])) |
                                  en(t[4])) >>>
                                0
                              : null;
        }
        function yt(e, t, n) {
          return (
            n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6
              ? e + (t - e) * 6 * n
              : n < 1 / 2
                ? t
                : n < 2 / 3
                  ? e + (t - e) * (2 / 3 - n) * 6
                  : e
          );
        }
        function Zt(e, t, n) {
          const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
            r = 2 * n - s,
            i = yt(r, s, e + 1 / 3),
            a = yt(r, s, e),
            o = yt(r, s, e - 1 / 3);
          return (
            (Math.round(i * 255) << 24) |
            (Math.round(a * 255) << 16) |
            (Math.round(o * 255) << 8)
          );
        }
        function ce(e) {
          const t = parseInt(e, 10);
          return t < 0 ? 0 : t > 255 ? 255 : t;
        }
        function Jt(e) {
          return (((parseFloat(e) % 360) + 360) % 360) / 360;
        }
        function en(e) {
          const t = parseFloat(e);
          return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
        }
        function De(e) {
          const t = parseFloat(e);
          return t < 0 ? 0 : t > 100 ? 1 : t / 100;
        }
        function tn(e) {
          let t = vs(e);
          if (t === null) return e;
          t = t || 0;
          const n = (t & 4278190080) >>> 24,
            s = (t & 16711680) >>> 16,
            r = (t & 65280) >>> 8,
            i = (t & 255) / 255;
          return `rgba(${n}, ${s}, ${r}, ${i})`;
        }
        var be = (e, t, n) => {
          if (c.fun(e)) return e;
          if (c.arr(e)) return be({ range: e, output: t, extrapolate: n });
          if (c.str(e.output[0])) return mt(e);
          const s = e,
            r = s.output,
            i = s.range || [0, 1],
            a = s.extrapolateLeft || s.extrapolate || "extend",
            o = s.extrapolateRight || s.extrapolate || "extend",
            l = s.easing || ((u) => u);
          return (u) => {
            const m = _s(u, i);
            return ys(u, i[m], i[m + 1], r[m], r[m + 1], l, a, o, s.map);
          };
        };
        function ys(e, t, n, s, r, i, a, o, l) {
          let u = l ? l(e) : e;
          if (u < t) {
            if (a === "identity") return u;
            a === "clamp" && (u = t);
          }
          if (u > n) {
            if (o === "identity") return u;
            o === "clamp" && (u = n);
          }
          return s === r
            ? s
            : t === n
              ? e <= t
                ? s
                : r
              : (t === -1 / 0
                  ? (u = -u)
                  : n === 1 / 0
                    ? (u = u - t)
                    : (u = (u - t) / (n - t)),
                (u = i(u)),
                s === -1 / 0
                  ? (u = -u)
                  : r === 1 / 0
                    ? (u = u + s)
                    : (u = u * (r - s) + s),
                u);
        }
        function _s(e, t) {
          for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
          return n - 1;
        }
        var ws =
            (e, t = "end") =>
            (n) => {
              n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 0.001);
              const s = n * e,
                r = t === "end" ? Math.floor(s) : Math.ceil(s);
              return os(0, 1, r / e);
            },
          Be = 1.70158,
          He = Be * 1.525,
          nn = Be + 1,
          sn = (2 * Math.PI) / 3,
          rn = (2 * Math.PI) / 4.5,
          We = (e) =>
            e < 1 / 2.75
              ? 7.5625 * e * e
              : e < 2 / 2.75
                ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                : e < 2.5 / 2.75
                  ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                  : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
          bs = {
            linear: (e) => e,
            easeInQuad: (e) => e * e,
            easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
            easeInOutQuad: (e) =>
              e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
            easeInCubic: (e) => e * e * e,
            easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
            easeInOutCubic: (e) =>
              e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
            easeInQuart: (e) => e * e * e * e,
            easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
            easeInOutQuart: (e) =>
              e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
            easeInQuint: (e) => e * e * e * e * e,
            easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
            easeInOutQuint: (e) =>
              e < 0.5
                ? 16 * e * e * e * e * e
                : 1 - Math.pow(-2 * e + 2, 5) / 2,
            easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
            easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
            easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
            easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * e - 10)),
            easeOutExpo: (e) => (e === 1 ? 1 : 1 - Math.pow(2, -10 * e)),
            easeInOutExpo: (e) =>
              e === 0
                ? 0
                : e === 1
                  ? 1
                  : e < 0.5
                    ? Math.pow(2, 20 * e - 10) / 2
                    : (2 - Math.pow(2, -20 * e + 10)) / 2,
            easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
            easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
            easeInOutCirc: (e) =>
              e < 0.5
                ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
                : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
            easeInBack: (e) => nn * e * e * e - Be * e * e,
            easeOutBack: (e) =>
              1 + nn * Math.pow(e - 1, 3) + Be * Math.pow(e - 1, 2),
            easeInOutBack: (e) =>
              e < 0.5
                ? (Math.pow(2 * e, 2) * ((He + 1) * 2 * e - He)) / 2
                : (Math.pow(2 * e - 2, 2) * ((He + 1) * (e * 2 - 2) + He) + 2) /
                  2,
            easeInElastic: (e) =>
              e === 0
                ? 0
                : e === 1
                  ? 1
                  : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * sn),
            easeOutElastic: (e) =>
              e === 0
                ? 0
                : e === 1
                  ? 1
                  : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * sn) + 1,
            easeInOutElastic: (e) =>
              e === 0
                ? 0
                : e === 1
                  ? 1
                  : e < 0.5
                    ? -(
                        Math.pow(2, 20 * e - 10) *
                        Math.sin((20 * e - 11.125) * rn)
                      ) / 2
                    : (Math.pow(2, -20 * e + 10) *
                        Math.sin((20 * e - 11.125) * rn)) /
                        2 +
                      1,
            easeInBounce: (e) => 1 - We(1 - e),
            easeOutBounce: We,
            easeInOutBounce: (e) =>
              e < 0.5 ? (1 - We(1 - 2 * e)) / 2 : (1 + We(2 * e - 1)) / 2,
            steps: ws,
          },
          le = Symbol.for("FluidValue.get"),
          ie = Symbol.for("FluidValue.observers"),
          $ = (e) => !!(e && e[le]),
          z = (e) => (e && e[le] ? e[le]() : e),
          an = (e) => e[ie] || null;
        function Ss(e, t) {
          e.eventObserved ? e.eventObserved(t) : e(t);
        }
        function Se(e, t) {
          const n = e[ie];
          n &&
            n.forEach((s) => {
              Ss(s, t);
            });
        }
        var on = class {
            constructor(e) {
              if (!e && !(e = this.get)) throw Error("Unknown getter");
              Is(this, e);
            }
          },
          Is = (e, t) => un(e, le, t);
        function de(e, t) {
          if (e[le]) {
            let n = e[ie];
            n || un(e, ie, (n = new Set())),
              n.has(t) ||
                (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
          }
          return t;
        }
        function Ie(e, t) {
          const n = e[ie];
          if (n && n.has(t)) {
            const s = n.size - 1;
            s ? n.delete(t) : (e[ie] = null),
              e.observerRemoved && e.observerRemoved(s, t);
          }
        }
        var un = (e, t, n) =>
            Object.defineProperty(e, t, {
              value: n,
              writable: !0,
              configurable: !0,
            }),
          Ge = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          Ps =
            /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
          cn = new RegExp(`(${Ge.source})(%|[a-z]+)`, "i"),
          As = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
          Ke = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
          ln = (e) => {
            const [t, n] = Rs(e);
            if (!t || ht()) return e;
            const s = window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t);
            if (s) return s.trim();
            if (n && n.startsWith("--")) {
              const r = window
                .getComputedStyle(document.documentElement)
                .getPropertyValue(n);
              return r || e;
            } else {
              if (n && Ke.test(n)) return ln(n);
              if (n) return n;
            }
            return e;
          },
          Rs = (e) => {
            const t = Ke.exec(e);
            if (!t) return [,];
            const [, n, s] = t;
            return [n, s];
          },
          _t,
          Es = (e, t, n, s, r) =>
            `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(s)}, ${r})`,
          dn = (e) => {
            _t ||
              (_t = te
                ? new RegExp(`(${Object.keys(te).join("|")})(?!\\w)`, "g")
                : /^\b$/);
            const t = e.output.map((i) =>
                z(i).replace(Ke, ln).replace(Ps, tn).replace(_t, tn),
              ),
              n = t.map((i) => i.match(Ge).map(Number)),
              r = n[0]
                .map((i, a) =>
                  n.map((o) => {
                    if (!(a in o))
                      throw Error(
                        'The arity of each "output" value must be equal',
                      );
                    return o[a];
                  }),
                )
                .map((i) => be({ ...e, output: i }));
            return (i) => {
              const a =
                !cn.test(t[0]) && t.find((l) => cn.test(l))?.replace(Ge, "");
              let o = 0;
              return t[0]
                .replace(Ge, () => `${r[o++](i)}${a || ""}`)
                .replace(As, Es);
            };
          },
          wt = "react-spring: ",
          fn = (e) => {
            const t = e;
            let n = !1;
            if (typeof t != "function")
              throw new TypeError(`${wt}once requires a function parameter`);
            return (...s) => {
              n || (t(...s), (n = !0));
            };
          },
          ks = fn(console.warn);
        function Os() {
          ks(
            `${wt}The "interpolate" function is deprecated in v9 (use "to" instead)`,
          );
        }
        var Ms = fn(console.warn);
        function Cs() {
          Ms(
            `${wt}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
          );
        }
        function Ye(e) {
          return (
            c.str(e) &&
            (e[0] == "#" ||
              /\d/.test(e) ||
              (!ht() && Ke.test(e)) ||
              e in (te || {}))
          );
        }
        var fe,
          Xe = new WeakMap(),
          Vs = (e) =>
            e.forEach(({ target: t, contentRect: n }) =>
              Xe.get(t)?.forEach((s) => s(n)),
            );
        function Ts(e, t) {
          fe || (typeof ResizeObserver < "u" && (fe = new ResizeObserver(Vs)));
          let n = Xe.get(t);
          return (
            n || ((n = new Set()), Xe.set(t, n)),
            n.add(e),
            fe && fe.observe(t),
            () => {
              const s = Xe.get(t);
              s && (s.delete(e), !s.size && fe && fe.unobserve(t));
            }
          );
        }
        var Ze = new Set(),
          Pe,
          Fs = () => {
            const e = () => {
              Ze.forEach((t) =>
                t({ width: window.innerWidth, height: window.innerHeight }),
              );
            };
            return (
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          },
          zs = (e) => (
            Ze.add(e),
            Pe || (Pe = Fs()),
            () => {
              Ze.delete(e), !Ze.size && Pe && (Pe(), (Pe = void 0));
            }
          ),
          Ls = (e, { container: t = document.documentElement } = {}) =>
            t === document.documentElement ? zs(e) : Ts(e, t),
          qs = (e, t, n) => (t - e === 0 ? 1 : (n - e) / (t - e)),
          xs = {
            x: { length: "Width", position: "Left" },
            y: { length: "Height", position: "Top" },
          },
          Us = class {
            constructor(e, t) {
              (this.createAxis = () => ({
                current: 0,
                progress: 0,
                scrollLength: 0,
              })),
                (this.updateAxis = (n) => {
                  const s = this.info[n],
                    { length: r, position: i } = xs[n];
                  (s.current = this.container[`scroll${i}`]),
                    (s.scrollLength =
                      this.container[`scroll${r}`] -
                      this.container[`client${r}`]),
                    (s.progress = qs(0, s.scrollLength, s.current));
                }),
                (this.update = () => {
                  this.updateAxis("x"), this.updateAxis("y");
                }),
                (this.sendEvent = () => {
                  this.callback(this.info);
                }),
                (this.advance = () => {
                  this.update(), this.sendEvent();
                }),
                (this.callback = e),
                (this.container = t),
                (this.info = {
                  time: 0,
                  x: this.createAxis(),
                  y: this.createAxis(),
                });
            }
          },
          Ae = new WeakMap(),
          hn = new WeakMap(),
          bt = new WeakMap(),
          mn = (e) => (e === document.documentElement ? window : e),
          Vr = (e, { container: t = document.documentElement } = {}) => {
            let n = bt.get(t);
            n || ((n = new Set()), bt.set(t, n));
            const s = new Us(e, t);
            if ((n.add(s), !Ae.has(t))) {
              const i = () => (n?.forEach((o) => o.advance()), !0);
              Ae.set(t, i);
              const a = mn(t);
              window.addEventListener("resize", i, { passive: !0 }),
                t !== document.documentElement &&
                  hn.set(t, Ls(i, { container: t })),
                a.addEventListener("scroll", i, { passive: !0 });
            }
            const r = Ae.get(t);
            return (
              raf3(r),
              () => {
                raf3.cancel(r);
                const i = bt.get(t);
                if (!i || (i.delete(s), i.size)) return;
                const a = Ae.get(t);
                Ae.delete(t),
                  a &&
                    (mn(t).removeEventListener("scroll", a),
                    window.removeEventListener("resize", a),
                    hn.get(t)?.());
              }
            );
          };
        function Tr(e) {
          const t = useRef(null);
          return t.current === null && (t.current = e()), t.current;
        }
        var Je = ht() ? k.useEffect : k.useLayoutEffect,
          $s = () => {
            const e = (0, k.useRef)(!1);
            return (
              Je(
                () => (
                  (e.current = !0),
                  () => {
                    e.current = !1;
                  }
                ),
                [],
              ),
              e
            );
          };
        function pn() {
          const e = (0, k.useState)()[1],
            t = $s();
          return () => {
            t.current && e(Math.random());
          };
        }
        function Fr(e, t) {
          const [n] = useState2(() => ({ inputs: t, result: e() })),
            s = useRef3(void 0),
            r = s.current;
          let i = r;
          return (
            i
              ? (t && i.inputs && js(t, i.inputs)) ||
                (i = { inputs: t, result: e() })
              : (i = n),
            useEffect2(() => {
              (s.current = i), r == n && (n.inputs = n.result = void 0);
            }, [i]),
            i.result
          );
        }
        function js(e, t) {
          if (e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
          return !0;
        }
        var gn = (e) => (0, k.useEffect)(e, Ns),
          Ns = [];
        function vn(e) {
          const t = (0, k.useRef)(void 0);
          return (
            (0, k.useEffect)(() => {
              t.current = e;
            }),
            t.current
          );
        }
        var zr = () => {
            const [e, t] = useState3(null);
            return (
              Je(() => {
                const n = window.matchMedia("(prefers-reduced-motion)"),
                  s = (r) => {
                    t(r.matches), Kt({ skipAnimation: r.matches });
                  };
                return (
                  s(n),
                  n.addEventListener
                    ? n.addEventListener("change", s)
                    : n.addListener(s),
                  () => {
                    n.removeEventListener
                      ? n.removeEventListener("change", s)
                      : n.removeListener(s);
                  }
                );
              }, []),
              e
            );
          },
          Re = Symbol.for("Animated:node"),
          Qs = (e) => !!e && e[Re] === e,
          Z = (e) => e && e[Re],
          St = (e, t) => rs(e, Re, t),
          et = (e) => e && e[Re] && e[Re].getPayload(),
          yn = class {
            constructor() {
              St(this, this);
            }
            getPayload() {
              return this.payload || [];
            }
          },
          tt = class Xn extends yn {
            constructor(t) {
              super(),
                (this._value = t),
                (this.done = !0),
                (this.durationProgress = 0),
                c.num(this._value) && (this.lastPosition = this._value);
            }
            static create(t) {
              return new Xn(t);
            }
            getPayload() {
              return [this];
            }
            getValue() {
              return this._value;
            }
            setValue(t, n) {
              return (
                c.num(t) &&
                  ((this.lastPosition = t),
                  n &&
                    ((t = Math.round(t / n) * n),
                    this.done && (this.lastPosition = t))),
                this._value === t ? !1 : ((this._value = t), !0)
              );
            }
            reset() {
              const { done: t } = this;
              (this.done = !1),
                c.num(this._value) &&
                  ((this.elapsedTime = 0),
                  (this.durationProgress = 0),
                  (this.lastPosition = this._value),
                  t && (this.lastVelocity = null),
                  (this.v0 = null));
            }
          },
          nt = class Zn extends tt {
            constructor(t) {
              super(0),
                (this._string = null),
                (this._toString = be({ output: [t, t] }));
            }
            static create(t) {
              return new Zn(t);
            }
            getValue() {
              const t = this._string;
              return t ?? (this._string = this._toString(this._value));
            }
            setValue(t) {
              if (c.str(t)) {
                if (t == this._string) return !1;
                (this._string = t), (this._value = 1);
              } else if (super.setValue(t)) this._string = null;
              else return !1;
              return !0;
            }
            reset(t) {
              t && (this._toString = be({ output: [this.getValue(), t] })),
                (this._value = 0),
                super.reset();
            }
          },
          st = { dependencies: null },
          rt = class extends yn {
            constructor(e) {
              super(), (this.source = e), this.setValue(e);
            }
            getValue(e) {
              const t = {};
              return (
                X(this.source, (n, s) => {
                  Qs(n)
                    ? (t[s] = n.getValue(e))
                    : $(n)
                      ? (t[s] = z(n))
                      : e || (t[s] = n);
                }),
                t
              );
            }
            setValue(e) {
              (this.source = e), (this.payload = this._makePayload(e));
            }
            reset() {
              this.payload && I(this.payload, (e) => e.reset());
            }
            _makePayload(e) {
              if (e) {
                const t = new Set();
                return X(e, this._addToPayload, t), Array.from(t);
              }
            }
            _addToPayload(e) {
              st.dependencies && $(e) && st.dependencies.add(e);
              const t = et(e);
              t && I(t, (n) => this.add(n));
            }
          },
          Ds = class Jn extends rt {
            constructor(t) {
              super(t);
            }
            static create(t) {
              return new Jn(t);
            }
            getValue() {
              return this.source.map((t) => t.getValue());
            }
            setValue(t) {
              const n = this.getPayload();
              return t.length == n.length
                ? n.map((s, r) => s.setValue(t[r])).some(Boolean)
                : (super.setValue(t.map(Bs)), !0);
            }
          };
        function Bs(e) {
          return (Ye(e) ? nt : tt).create(e);
        }
        function It(e) {
          const t = Z(e);
          return t ? t.constructor : c.arr(e) ? Ds : Ye(e) ? nt : tt;
        }
        var _n = (e, t) => {
            const n =
              !c.fun(e) || (e.prototype && e.prototype.isReactComponent);
            return (0, k.forwardRef)((s, r) => {
              const i = (0, k.useRef)(null),
                a =
                  n &&
                  (0, k.useCallback)(
                    (h) => {
                      i.current = Gs(r, h);
                    },
                    [r],
                  ),
                [o, l] = Ws(s, t),
                u = pn(),
                m = () => {
                  const h = i.current;
                  if (n && !h) return;
                  (h ? t.applyAnimatedValues(h, o.getValue(!0)) : !1) === !1 &&
                    u();
                },
                f = new Hs(m, l),
                d = (0, k.useRef)(void 0);
              Je(
                () => (
                  (d.current = f),
                  I(l, (h) => de(h, f)),
                  () => {
                    d.current &&
                      (I(d.current.deps, (h) => Ie(h, d.current)),
                      w.cancel(d.current.update));
                  }
                ),
              ),
                (0, k.useEffect)(m, []),
                gn(() => () => {
                  const h = d.current;
                  I(h.deps, (v) => Ie(v, h));
                });
              const g = t.getComponentProps(o.getValue());
              return k.createElement(e, { ...g, ref: a });
            });
          },
          Hs = class {
            constructor(e, t) {
              (this.update = e), (this.deps = t);
            }
            eventObserved(e) {
              e.type == "change" && w.write(this.update);
            }
          };
        function Ws(e, t) {
          const n = new Set();
          return (
            (st.dependencies = n),
            e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }),
            (e = new rt(e)),
            (st.dependencies = null),
            [e, n]
          );
        }
        function Gs(e, t) {
          return e && (c.fun(e) ? e(t) : (e.current = t)), t;
        }
        var wn = Symbol.for("AnimatedComponent"),
          Ks = (
            e,
            {
              applyAnimatedValues: t = () => !1,
              createAnimatedStyle: n = (r) => new rt(r),
              getComponentProps: s = (r) => r,
            } = {},
          ) => {
            const r = {
                applyAnimatedValues: t,
                createAnimatedStyle: n,
                getComponentProps: s,
              },
              i = (a) => {
                const o = bn(a) || "Anonymous";
                return (
                  c.str(a)
                    ? (a = i[a] || (i[a] = _n(a, r)))
                    : (a = a[wn] || (a[wn] = _n(a, r))),
                  (a.displayName = `Animated(${o})`),
                  a
                );
              };
            return (
              X(e, (a, o) => {
                c.arr(e) && (o = bn(a)), (i[o] = i(a));
              }),
              { animated: i }
            );
          },
          bn = (e) =>
            c.str(e)
              ? e
              : e && c.str(e.displayName)
                ? e.displayName
                : (c.fun(e) && e.name) || null;
        function C(e, ...t) {
          return c.fun(e) ? e(...t) : e;
        }
        var Ee = (e, t) =>
            e === !0 || !!(t && e && (c.fun(e) ? e(t) : q(e).includes(t))),
          Sn = (e, t) => (c.obj(e) ? t && e[t] : e),
          In = (e, t) =>
            e.default === !0 ? e[t] : e.default ? e.default[t] : void 0,
          Ys = (e) => e,
          it = (e, t = Ys) => {
            let n = Xs;
            e.default &&
              e.default !== !0 &&
              ((e = e.default), (n = Object.keys(e)));
            const s = {};
            for (const r of n) {
              const i = t(e[r], r);
              c.und(i) || (s[r] = i);
            }
            return s;
          },
          Xs = [
            "config",
            "onProps",
            "onStart",
            "onChange",
            "onPause",
            "onResume",
            "onRest",
          ],
          Zs = {
            config: 1,
            from: 1,
            to: 1,
            ref: 1,
            loop: 1,
            reset: 1,
            pause: 1,
            cancel: 1,
            reverse: 1,
            immediate: 1,
            default: 1,
            delay: 1,
            onProps: 1,
            onStart: 1,
            onChange: 1,
            onPause: 1,
            onResume: 1,
            onRest: 1,
            onResolve: 1,
            items: 1,
            trail: 1,
            sort: 1,
            expires: 1,
            initial: 1,
            enter: 1,
            update: 1,
            leave: 1,
            children: 1,
            onDestroyed: 1,
            keys: 1,
            callId: 1,
            parentId: 1,
          };
        function Js(e) {
          const t = {};
          let n = 0;
          if (
            (X(e, (s, r) => {
              Zs[r] || ((t[r] = s), n++);
            }),
            n)
          )
            return t;
        }
        function Pt(e) {
          const t = Js(e);
          if (t) {
            const n = { to: t };
            return X(e, (s, r) => r in t || (n[r] = s)), n;
          }
          return { ...e };
        }
        function ke(e) {
          return (
            (e = z(e)),
            c.arr(e)
              ? e.map(ke)
              : Ye(e)
                ? N.createStringInterpolator({ range: [0, 1], output: [e, e] })(
                    1,
                  )
                : e
          );
        }
        function Pn(e) {
          for (const t in e) return !0;
          return !1;
        }
        function At(e) {
          return c.fun(e) || (c.arr(e) && c.obj(e[0]));
        }
        function Rt(e, t) {
          e.ref?.delete(e), t?.delete(e);
        }
        function Et(e, t) {
          t && e.ref !== t && (e.ref?.delete(e), t.add(e), (e.ref = t));
        }
        function Lr(e, t, n = 1e3) {
          useIsomorphicLayoutEffect(() => {
            if (t) {
              let s = 0;
              each(e, (r, i) => {
                const a = r.current;
                if (a.length) {
                  let o = n * t[i];
                  isNaN(o) ? (o = s) : (s = o),
                    each(a, (l) => {
                      each(l.queue, (u) => {
                        const m = u.delay;
                        u.delay = (f) => o + C(m || 0, f);
                      });
                    }),
                    r.start();
                }
              });
            } else {
              let s = Promise.resolve();
              each(e, (r) => {
                const i = r.current;
                if (i.length) {
                  const a = i.map((o) => {
                    const l = o.queue;
                    return (o.queue = []), l;
                  });
                  s = s.then(
                    () => (
                      each(i, (o, l) =>
                        each(a[l] || [], (u) => o.queue.push(u)),
                      ),
                      Promise.all(r.start())
                    ),
                  );
                }
              });
            }
          });
        }
        var er = {
            default: { tension: 170, friction: 26 },
            gentle: { tension: 120, friction: 14 },
            wobbly: { tension: 180, friction: 12 },
            stiff: { tension: 210, friction: 20 },
            slow: { tension: 280, friction: 60 },
            molasses: { tension: 280, friction: 120 },
          },
          kt = {
            ...er.default,
            mass: 1,
            damping: 1,
            easing: bs.linear,
            clamp: !1,
          },
          tr = class {
            constructor() {
              (this.velocity = 0), Object.assign(this, kt);
            }
          };
        function nr(e, t, n) {
          n && ((n = { ...n }), An(n, t), (t = { ...n, ...t })),
            An(e, t),
            Object.assign(e, t);
          for (const a in kt) e[a] == null && (e[a] = kt[a]);
          let { frequency: s, damping: r } = e;
          const { mass: i } = e;
          return (
            c.und(s) ||
              (s < 0.01 && (s = 0.01),
              r < 0 && (r = 0),
              (e.tension = Math.pow((2 * Math.PI) / s, 2) * i),
              (e.friction = (4 * Math.PI * r * i) / s)),
            e
          );
        }
        function An(e, t) {
          if (!c.und(t.decay)) e.duration = void 0;
          else {
            const n = !c.und(t.tension) || !c.und(t.friction);
            (n || !c.und(t.frequency) || !c.und(t.damping) || !c.und(t.mass)) &&
              ((e.duration = void 0), (e.decay = void 0)),
              n && (e.frequency = void 0);
          }
        }
        var Rn = [],
          sr = class {
            constructor() {
              (this.changed = !1),
                (this.values = Rn),
                (this.toValues = null),
                (this.fromValues = Rn),
                (this.config = new tr()),
                (this.immediate = !1);
            }
          };
        function En(
          e,
          { key: t, props: n, defaultProps: s, state: r, actions: i },
        ) {
          return new Promise((a, o) => {
            let l,
              u,
              m = Ee(n.cancel ?? s?.cancel, t);
            if (m) g();
            else {
              c.und(n.pause) || (r.paused = Ee(n.pause, t));
              let h = s?.pause;
              h !== !0 && (h = r.paused || Ee(h, t)),
                (l = C(n.delay || 0, t)),
                h ? (r.resumeQueue.add(d), i.pause()) : (i.resume(), d());
            }
            function f() {
              r.resumeQueue.add(d),
                r.timeouts.delete(u),
                u.cancel(),
                (l = u.time - w.now());
            }
            function d() {
              l > 0 && !N.skipAnimation
                ? ((r.delayed = !0),
                  (u = w.setTimeout(g, l)),
                  r.pauseQueue.add(f),
                  r.timeouts.add(u))
                : g();
            }
            function g() {
              r.delayed && (r.delayed = !1),
                r.pauseQueue.delete(f),
                r.timeouts.delete(u),
                e <= (r.cancelId || 0) && (m = !0);
              try {
                i.start({ ...n, callId: e, cancel: m }, a);
              } catch (h) {
                o(h);
              }
            }
          });
        }
        var Ot = (e, t) =>
            t.length == 1
              ? t[0]
              : t.some((n) => n.cancelled)
                ? he(e.get())
                : t.every((n) => n.noop)
                  ? kn(e.get())
                  : D(
                      e.get(),
                      t.every((n) => n.finished),
                    ),
          kn = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
          D = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
          he = (e) => ({ value: e, cancelled: !0, finished: !1 });
        function On(e, t, n, s) {
          const { callId: r, parentId: i, onRest: a } = t,
            { asyncTo: o, promise: l } = n;
          return !i && e === o && !t.reset
            ? l
            : (n.promise = (async () => {
                (n.asyncId = r), (n.asyncTo = e);
                const u = it(t, (y, p) => (p === "onRest" ? void 0 : y));
                let m, f;
                const d = new Promise((y, p) => ((m = y), (f = p))),
                  g = (y) => {
                    const p =
                      (r <= (n.cancelId || 0) && he(s)) ||
                      (r !== n.asyncId && D(s, !1));
                    if (p) throw ((y.result = p), f(y), y);
                  },
                  h = (y, p) => {
                    const S = new Mn(),
                      _ = new Cn();
                    return (async () => {
                      if (N.skipAnimation)
                        throw (Oe(n), (_.result = D(s, !1)), f(_), _);
                      g(S);
                      const A = c.obj(y) ? { ...y } : { ...p, to: y };
                      (A.parentId = r),
                        X(u, (x, E) => {
                          c.und(A[E]) && (A[E] = x);
                        });
                      const R = await s.start(A);
                      return (
                        g(S),
                        n.paused &&
                          (await new Promise((x) => {
                            n.resumeQueue.add(x);
                          })),
                        R
                      );
                    })();
                  };
                let v;
                if (N.skipAnimation) return Oe(n), D(s, !1);
                try {
                  let y;
                  c.arr(e)
                    ? (y = (async (p) => {
                        for (const S of p) await h(S);
                      })(e))
                    : (y = Promise.resolve(e(h, s.stop.bind(s)))),
                    await Promise.all([y.then(m), d]),
                    (v = D(s.get(), !0, !1));
                } catch (y) {
                  if (y instanceof Mn) v = y.result;
                  else if (y instanceof Cn) v = y.result;
                  else throw y;
                } finally {
                  r == n.asyncId &&
                    ((n.asyncId = i),
                    (n.asyncTo = i ? o : void 0),
                    (n.promise = i ? l : void 0));
                }
                return (
                  c.fun(a) &&
                    w.batchedUpdates(() => {
                      a(v, s, s.item);
                    }),
                  v
                );
              })());
        }
        function Oe(e, t) {
          ve(e.timeouts, (n) => n.cancel()),
            e.pauseQueue.clear(),
            e.resumeQueue.clear(),
            (e.asyncId = e.asyncTo = e.promise = void 0),
            t && (e.cancelId = t);
        }
        var Mn = class extends Error {
            constructor() {
              super(
                "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.",
              );
            }
          },
          Cn = class extends Error {
            constructor() {
              super("SkipAnimationSignal");
            }
          },
          Mt = (e) => e instanceof Ct,
          rr = 1,
          Ct = class extends on {
            constructor() {
              super(...arguments), (this.id = rr++), (this._priority = 0);
            }
            get priority() {
              return this._priority;
            }
            set priority(e) {
              this._priority != e &&
                ((this._priority = e), this._onPriorityChange(e));
            }
            get() {
              const e = Z(this);
              return e && e.getValue();
            }
            to(...e) {
              return N.to(this, e);
            }
            interpolate(...e) {
              return Os(), N.to(this, e);
            }
            toJSON() {
              return this.get();
            }
            observerAdded(e) {
              e == 1 && this._attach();
            }
            observerRemoved(e) {
              e == 0 && this._detach();
            }
            _attach() {}
            _detach() {}
            _onChange(e, t = !1) {
              Se(this, { type: "change", parent: this, value: e, idle: t });
            }
            _onPriorityChange(e) {
              this.idle || we.sort(this),
                Se(this, { type: "priority", parent: this, priority: e });
            }
          },
          ae = Symbol.for("SpringPhase"),
          Vn = 1,
          Vt = 2,
          Tt = 4,
          Ft = (e) => (e[ae] & Vn) > 0,
          ne = (e) => (e[ae] & Vt) > 0,
          Me = (e) => (e[ae] & Tt) > 0,
          Tn = (e, t) => (t ? (e[ae] |= Vt | Vn) : (e[ae] &= ~Vt)),
          Fn = (e, t) => (t ? (e[ae] |= Tt) : (e[ae] &= ~Tt)),
          zn = class extends Ct {
            constructor(e, t) {
              if (
                (super(),
                (this.animation = new sr()),
                (this.defaultProps = {}),
                (this._state = {
                  paused: !1,
                  delayed: !1,
                  pauseQueue: new Set(),
                  resumeQueue: new Set(),
                  timeouts: new Set(),
                }),
                (this._pendingCalls = new Set()),
                (this._lastCallId = 0),
                (this._lastToId = 0),
                (this._memoizedDuration = 0),
                !c.und(e) || !c.und(t))
              ) {
                const n = c.obj(e) ? { ...e } : { ...t, from: e };
                c.und(n.default) && (n.default = !0), this.start(n);
              }
            }
            get idle() {
              return !(ne(this) || this._state.asyncTo) || Me(this);
            }
            get goal() {
              return z(this.animation.to);
            }
            get velocity() {
              const e = Z(this);
              return e instanceof tt
                ? e.lastVelocity || 0
                : e.getPayload().map((t) => t.lastVelocity || 0);
            }
            get hasAnimated() {
              return Ft(this);
            }
            get isAnimating() {
              return ne(this);
            }
            get isPaused() {
              return Me(this);
            }
            get isDelayed() {
              return this._state.delayed;
            }
            advance(e) {
              let t = !0,
                n = !1;
              const s = this.animation;
              let { toValues: r } = s;
              const { config: i } = s,
                a = et(s.to);
              !a && $(s.to) && (r = q(z(s.to))),
                s.values.forEach((u, m) => {
                  if (u.done) return;
                  const f =
                    u.constructor == nt ? 1 : a ? a[m].lastPosition : r[m];
                  let d = s.immediate,
                    g = f;
                  if (!d) {
                    if (((g = u.lastPosition), i.tension <= 0)) {
                      u.done = !0;
                      return;
                    }
                    let h = (u.elapsedTime += e);
                    const v = s.fromValues[m],
                      y =
                        u.v0 != null
                          ? u.v0
                          : (u.v0 = c.arr(i.velocity)
                              ? i.velocity[m]
                              : i.velocity);
                    let p;
                    const S =
                      i.precision ||
                      (v == f ? 0.005 : Math.min(1, Math.abs(f - v) * 0.001));
                    if (c.und(i.duration))
                      if (i.decay) {
                        const _ = i.decay === !0 ? 0.998 : i.decay,
                          A = Math.exp(-(1 - _) * h);
                        (g = v + (y / (1 - _)) * (1 - A)),
                          (d = Math.abs(u.lastPosition - g) <= S),
                          (p = y * A);
                      } else {
                        p = u.lastVelocity == null ? y : u.lastVelocity;
                        const _ = i.restVelocity || S / 10,
                          A = i.clamp ? 0 : i.bounce,
                          R = !c.und(A),
                          x = v == f ? u.v0 > 0 : v < f;
                        let E,
                          L = !1;
                        const O = 1,
                          j = Math.ceil(e / O);
                        for (
                          let B = 0;
                          B < j &&
                          ((E = Math.abs(p) > _),
                          !(!E && ((d = Math.abs(f - g) <= S), d)));
                          ++B
                        ) {
                          R &&
                            ((L = g == f || g > f == x),
                            L && ((p = -p * A), (g = f)));
                          const ee = -i.tension * 1e-6 * (g - f),
                            me = -i.friction * 0.001 * p,
                            b = (ee + me) / i.mass;
                          (p = p + b * O), (g = g + p * O);
                        }
                      }
                    else {
                      let _ = 1;
                      i.duration > 0 &&
                        (this._memoizedDuration !== i.duration &&
                          ((this._memoizedDuration = i.duration),
                          u.durationProgress > 0 &&
                            ((u.elapsedTime = i.duration * u.durationProgress),
                            (h = u.elapsedTime += e))),
                        (_ = (i.progress || 0) + h / this._memoizedDuration),
                        (_ = _ > 1 ? 1 : _ < 0 ? 0 : _),
                        (u.durationProgress = _)),
                        (g = v + i.easing(_) * (f - v)),
                        (p = (g - u.lastPosition) / e),
                        (d = _ == 1);
                    }
                    (u.lastVelocity = p),
                      Number.isNaN(g) &&
                        (console.warn("Got NaN while animating:", this),
                        (d = !0));
                  }
                  a && !a[m].done && (d = !1),
                    d ? (u.done = !0) : (t = !1),
                    u.setValue(g, i.round) && (n = !0);
                });
              const o = Z(this),
                l = o.getValue();
              if (t) {
                const u = z(s.to);
                (l !== u || n) && !i.decay
                  ? (o.setValue(u), this._onChange(u))
                  : n && i.decay && this._onChange(l),
                  this._stop();
              } else n && this._onChange(l);
            }
            set(e) {
              return (
                w.batchedUpdates(() => {
                  this._stop(), this._focus(e), this._set(e);
                }),
                this
              );
            }
            pause() {
              this._update({ pause: !0 });
            }
            resume() {
              this._update({ pause: !1 });
            }
            finish() {
              if (ne(this)) {
                const { to: e, config: t } = this.animation;
                w.batchedUpdates(() => {
                  this._onStart(), t.decay || this._set(e, !1), this._stop();
                });
              }
              return this;
            }
            update(e) {
              return (this.queue || (this.queue = [])).push(e), this;
            }
            start(e, t) {
              let n;
              return (
                c.und(e)
                  ? ((n = this.queue || []), (this.queue = []))
                  : (n = [c.obj(e) ? e : { ...t, to: e }]),
                Promise.all(n.map((s) => this._update(s))).then((s) =>
                  Ot(this, s),
                )
              );
            }
            stop(e) {
              const { to: t } = this.animation;
              return (
                this._focus(this.get()),
                Oe(this._state, e && this._lastCallId),
                w.batchedUpdates(() => this._stop(t, e)),
                this
              );
            }
            reset() {
              this._update({ reset: !0 });
            }
            eventObserved(e) {
              e.type == "change"
                ? this._start()
                : e.type == "priority" && (this.priority = e.priority + 1);
            }
            _prepareNode(e) {
              const t = this.key || "";
              let { to: n, from: s } = e;
              (n = c.obj(n) ? n[t] : n),
                (n == null || At(n)) && (n = void 0),
                (s = c.obj(s) ? s[t] : s),
                s == null && (s = void 0);
              const r = { to: n, from: s };
              return (
                Ft(this) ||
                  (e.reverse && ([n, s] = [s, n]),
                  (s = z(s)),
                  c.und(s) ? Z(this) || this._set(n) : this._set(s)),
                r
              );
            }
            _update({ ...e }, t) {
              const { key: n, defaultProps: s } = this;
              e.default &&
                Object.assign(
                  s,
                  it(e, (a, o) => (/^on/.test(o) ? Sn(a, n) : a)),
                ),
                xn(this, e, "onProps"),
                Te(this, "onProps", e, this);
              const r = this._prepareNode(e);
              if (Object.isFrozen(this))
                throw Error(
                  "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?",
                );
              const i = this._state;
              return En(++this._lastCallId, {
                key: n,
                props: e,
                defaultProps: s,
                state: i,
                actions: {
                  pause: () => {
                    Me(this) ||
                      (Fn(this, !0),
                      ye(i.pauseQueue),
                      Te(
                        this,
                        "onPause",
                        D(this, Ce(this, this.animation.to)),
                        this,
                      ));
                  },
                  resume: () => {
                    Me(this) &&
                      (Fn(this, !1),
                      ne(this) && this._resume(),
                      ye(i.resumeQueue),
                      Te(
                        this,
                        "onResume",
                        D(this, Ce(this, this.animation.to)),
                        this,
                      ));
                  },
                  start: this._merge.bind(this, r),
                },
              }).then((a) => {
                if (e.loop && a.finished && !(t && a.noop)) {
                  const o = Ln(e);
                  if (o) return this._update(o, !0);
                }
                return a;
              });
            }
            _merge(e, t, n) {
              if (t.cancel) return this.stop(!0), n(he(this));
              const s = !c.und(e.to),
                r = !c.und(e.from);
              if (s || r)
                if (t.callId > this._lastToId) this._lastToId = t.callId;
                else return n(he(this));
              const { key: i, defaultProps: a, animation: o } = this,
                { to: l, from: u } = o;
              let { to: m = l, from: f = u } = e;
              r && !s && (!t.default || c.und(m)) && (m = f),
                t.reverse && ([m, f] = [f, m]);
              const d = !J(f, u);
              d && (o.from = f), (f = z(f));
              const g = !J(m, l);
              g && this._focus(m);
              const h = At(t.to),
                { config: v } = o,
                { decay: y, velocity: p } = v;
              (s || r) && (v.velocity = 0),
                t.config &&
                  !h &&
                  nr(
                    v,
                    C(t.config, i),
                    t.config !== a.config ? C(a.config, i) : void 0,
                  );
              let S = Z(this);
              if (!S || c.und(m)) return n(D(this, !0));
              const _ = c.und(t.reset)
                  ? r && !t.default
                  : !c.und(f) && Ee(t.reset, i),
                A = _ ? f : this.get(),
                R = ke(m),
                x = c.num(R) || c.arr(R) || Ye(R),
                E = !h && (!x || Ee(a.immediate || t.immediate, i));
              if (g) {
                const B = It(m);
                if (B !== S.constructor)
                  if (E) S = this._set(R);
                  else
                    throw Error(
                      `Cannot animate between ${S.constructor.name} and ${B.name}, as the "to" prop suggests`,
                    );
              }
              const L = S.constructor;
              let O = $(m),
                j = !1;
              if (!O) {
                const B = _ || (!Ft(this) && d);
                (g || B) && ((j = J(ke(A), R)), (O = !j)),
                  ((!J(o.immediate, E) && !E) ||
                    !J(v.decay, y) ||
                    !J(v.velocity, p)) &&
                    (O = !0);
              }
              if (
                (j &&
                  ne(this) &&
                  (o.changed && !_ ? (O = !0) : O || this._stop(l)),
                !h &&
                  ((O || $(l)) &&
                    ((o.values = S.getPayload()),
                    (o.toValues = $(m) ? null : L == nt ? [1] : q(R))),
                  o.immediate != E &&
                    ((o.immediate = E), !E && !_ && this._set(l)),
                  O))
              ) {
                const { onRest: B } = o;
                I(ar, (me) => xn(this, t, me));
                const ee = D(this, Ce(this, l));
                ye(this._pendingCalls, ee),
                  this._pendingCalls.add(n),
                  o.changed &&
                    w.batchedUpdates(() => {
                      (o.changed = !_),
                        B?.(ee, this),
                        _ ? C(a.onRest, ee) : o.onStart?.(ee, this);
                    });
              }
              _ && this._set(A),
                h
                  ? n(On(t.to, t, this._state, this))
                  : O
                    ? this._start()
                    : ne(this) && !g
                      ? this._pendingCalls.add(n)
                      : n(kn(A));
            }
            _focus(e) {
              const t = this.animation;
              e !== t.to &&
                (an(this) && this._detach(),
                (t.to = e),
                an(this) && this._attach());
            }
            _attach() {
              let e = 0;
              const { to: t } = this.animation;
              $(t) && (de(t, this), Mt(t) && (e = t.priority + 1)),
                (this.priority = e);
            }
            _detach() {
              const { to: e } = this.animation;
              $(e) && Ie(e, this);
            }
            _set(e, t = !0) {
              const n = z(e);
              if (!c.und(n)) {
                const s = Z(this);
                if (!s || !J(n, s.getValue())) {
                  const r = It(n);
                  !s || s.constructor != r
                    ? St(this, r.create(n))
                    : s.setValue(n),
                    s &&
                      w.batchedUpdates(() => {
                        this._onChange(n, t);
                      });
                }
              }
              return Z(this);
            }
            _onStart() {
              const e = this.animation;
              e.changed ||
                ((e.changed = !0),
                Te(this, "onStart", D(this, Ce(this, e.to)), this));
            }
            _onChange(e, t) {
              t || (this._onStart(), C(this.animation.onChange, e, this)),
                C(this.defaultProps.onChange, e, this),
                super._onChange(e, t);
            }
            _start() {
              const e = this.animation;
              Z(this).reset(z(e.to)),
                e.immediate ||
                  (e.fromValues = e.values.map((t) => t.lastPosition)),
                ne(this) || (Tn(this, !0), Me(this) || this._resume());
            }
            _resume() {
              N.skipAnimation ? this.finish() : we.start(this);
            }
            _stop(e, t) {
              if (ne(this)) {
                Tn(this, !1);
                const n = this.animation;
                I(n.values, (r) => {
                  r.done = !0;
                }),
                  n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                  Se(this, { type: "idle", parent: this });
                const s = t
                  ? he(this.get())
                  : D(this.get(), Ce(this, e ?? n.to));
                ye(this._pendingCalls, s),
                  n.changed && ((n.changed = !1), Te(this, "onRest", s, this));
              }
            }
          };
        function Ce(e, t) {
          const n = ke(t),
            s = ke(e.get());
          return J(s, n);
        }
        function Ln(e, t = e.loop, n = e.to) {
          const s = C(t);
          if (s) {
            const r = s !== !0 && Pt(s),
              i = (r || e).reverse,
              a = !r || r.reset;
            return Ve({
              ...e,
              loop: t,
              default: !1,
              pause: void 0,
              to: !i || At(n) ? n : void 0,
              from: a ? e.from : void 0,
              reset: a,
              ...r,
            });
          }
        }
        function Ve(e) {
          const { to: t, from: n } = (e = Pt(e)),
            s = new Set();
          return (
            c.obj(t) && qn(t, s),
            c.obj(n) && qn(n, s),
            (e.keys = s.size ? Array.from(s) : null),
            e
          );
        }
        function ir(e) {
          const t = Ve(e);
          return c.und(t.default) && (t.default = it(t)), t;
        }
        function qn(e, t) {
          X(e, (n, s) => n != null && t.add(s));
        }
        var ar = ["onStart", "onRest", "onChange", "onPause", "onResume"];
        function xn(e, t, n) {
          e.animation[n] = t[n] !== In(t, n) ? Sn(t[n], e.key) : void 0;
        }
        function Te(e, t, ...n) {
          e.animation[t]?.(...n), e.defaultProps[t]?.(...n);
        }
        var or = ["onStart", "onChange", "onRest"],
          ur = 1,
          Un = class {
            constructor(e, t) {
              (this.id = ur++),
                (this.springs = {}),
                (this.queue = []),
                (this._lastAsyncId = 0),
                (this._active = new Set()),
                (this._changed = new Set()),
                (this._started = !1),
                (this._state = {
                  paused: !1,
                  pauseQueue: new Set(),
                  resumeQueue: new Set(),
                  timeouts: new Set(),
                }),
                (this._events = {
                  onStart: new Map(),
                  onChange: new Map(),
                  onRest: new Map(),
                }),
                (this._onFrame = this._onFrame.bind(this)),
                t && (this._flush = t),
                e && this.start({ default: !0, ...e });
            }
            get idle() {
              return (
                !this._state.asyncTo &&
                Object.values(this.springs).every(
                  (e) => e.idle && !e.isDelayed && !e.isPaused,
                )
              );
            }
            get item() {
              return this._item;
            }
            set item(e) {
              this._item = e;
            }
            get() {
              const e = {};
              return this.each((t, n) => (e[n] = t.get())), e;
            }
            set(e) {
              for (const t in e) {
                const n = e[t];
                c.und(n) || this.springs[t].set(n);
              }
            }
            update(e) {
              return e && this.queue.push(Ve(e)), this;
            }
            start(e) {
              let { queue: t } = this;
              return (
                e ? (t = q(e).map(Ve)) : (this.queue = []),
                this._flush ? this._flush(this, t) : (Dn(this, t), zt(this, t))
              );
            }
            stop(e, t) {
              if ((e !== !!e && (t = e), t)) {
                const n = this.springs;
                I(q(t), (s) => n[s].stop(!!e));
              } else
                Oe(this._state, this._lastAsyncId),
                  this.each((n) => n.stop(!!e));
              return this;
            }
            pause(e) {
              if (c.und(e)) this.start({ pause: !0 });
              else {
                const t = this.springs;
                I(q(e), (n) => t[n].pause());
              }
              return this;
            }
            resume(e) {
              if (c.und(e)) this.start({ pause: !1 });
              else {
                const t = this.springs;
                I(q(e), (n) => t[n].resume());
              }
              return this;
            }
            each(e) {
              X(this.springs, e);
            }
            _onFrame() {
              const { onStart: e, onChange: t, onRest: n } = this._events,
                s = this._active.size > 0,
                r = this._changed.size > 0;
              ((s && !this._started) || (r && !this._started)) &&
                ((this._started = !0),
                ve(e, ([o, l]) => {
                  (l.value = this.get()), o(l, this, this._item);
                }));
              const i = !s && this._started,
                a = r || (i && n.size) ? this.get() : null;
              r &&
                t.size &&
                ve(t, ([o, l]) => {
                  (l.value = a), o(l, this, this._item);
                }),
                i &&
                  ((this._started = !1),
                  ve(n, ([o, l]) => {
                    (l.value = a), o(l, this, this._item);
                  }));
            }
            eventObserved(e) {
              if (e.type == "change")
                this._changed.add(e.parent),
                  e.idle || this._active.add(e.parent);
              else if (e.type == "idle") this._active.delete(e.parent);
              else return;
              w.onFrame(this._onFrame);
            }
          };
        function zt(e, t) {
          return Promise.all(t.map((n) => $n(e, n))).then((n) => Ot(e, n));
        }
        async function $n(e, t, n) {
          const {
              keys: s,
              to: r,
              from: i,
              loop: a,
              onRest: o,
              onResolve: l,
            } = t,
            u = c.obj(t.default) && t.default;
          a && (t.loop = !1),
            r === !1 && (t.to = null),
            i === !1 && (t.from = null);
          const m = c.arr(r) || c.fun(r) ? r : void 0;
          m
            ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
            : I(or, (v) => {
                const y = t[v];
                if (c.fun(y)) {
                  const p = e._events[v];
                  (t[v] = ({ finished: S, cancelled: _ }) => {
                    const A = p.get(y);
                    A
                      ? (S || (A.finished = !1), _ && (A.cancelled = !0))
                      : p.set(y, {
                          value: null,
                          finished: S || !1,
                          cancelled: _ || !1,
                        });
                  }),
                    u && (u[v] = t[v]);
                }
              });
          const f = e._state;
          t.pause === !f.paused
            ? ((f.paused = t.pause), ye(t.pause ? f.pauseQueue : f.resumeQueue))
            : f.paused && (t.pause = !0);
          const d = (s || Object.keys(e.springs)).map((v) =>
              e.springs[v].start(t),
            ),
            g = t.cancel === !0 || In(t, "cancel") === !0;
          (m || (g && f.asyncId)) &&
            d.push(
              En(++e._lastAsyncId, {
                props: t,
                state: f,
                actions: {
                  pause: ft,
                  resume: ft,
                  start(v, y) {
                    g
                      ? (Oe(f, e._lastAsyncId), y(he(e)))
                      : ((v.onRest = o), y(On(m, v, f, e)));
                  },
                },
              }),
            ),
            f.paused &&
              (await new Promise((v) => {
                f.resumeQueue.add(v);
              }));
          const h = Ot(e, await Promise.all(d));
          if (a && h.finished && !(n && h.noop)) {
            const v = Ln(t, a, r);
            if (v) return Dn(e, [v]), $n(e, v, !0);
          }
          return l && w.batchedUpdates(() => l(h, e, e.item)), h;
        }
        function Lt(e, t) {
          const n = { ...e.springs };
          return (
            t &&
              I(q(t), (s) => {
                c.und(s.keys) && (s = Ve(s)),
                  c.obj(s.to) || (s = { ...s, to: void 0 }),
                  Qn(n, s, (r) => Nn(r));
              }),
            jn(e, n),
            n
          );
        }
        function jn(e, t) {
          X(t, (n, s) => {
            e.springs[s] || ((e.springs[s] = n), de(n, e));
          });
        }
        function Nn(e, t) {
          const n = new zn();
          return (n.key = e), t && de(n, t), n;
        }
        function Qn(e, t, n) {
          t.keys &&
            I(t.keys, (s) => {
              (e[s] || (e[s] = n(s)))._prepareNode(t);
            });
        }
        function Dn(e, t) {
          I(t, (n) => {
            Qn(e.springs, n, (s) => Nn(s, e));
          });
        }
        var Bn = k.createContext({ pause: !1, immediate: !1 }),
          qt = () => {
            const e = [],
              t = function (s) {
                Cs();
                const r = [];
                return (
                  I(e, (i, a) => {
                    if (c.und(s)) r.push(i.start());
                    else {
                      const o = n(s, i, a);
                      o && r.push(i.start(o));
                    }
                  }),
                  r
                );
              };
            (t.current = e),
              (t.add = function (s) {
                e.includes(s) || e.push(s);
              }),
              (t.delete = function (s) {
                const r = e.indexOf(s);
                ~r && e.splice(r, 1);
              }),
              (t.pause = function () {
                return I(e, (s) => s.pause(...arguments)), this;
              }),
              (t.resume = function () {
                return I(e, (s) => s.resume(...arguments)), this;
              }),
              (t.set = function (s) {
                I(e, (r, i) => {
                  const a = c.fun(s) ? s(i, r) : s;
                  a && r.set(a);
                });
              }),
              (t.start = function (s) {
                const r = [];
                return (
                  I(e, (i, a) => {
                    if (c.und(s)) r.push(i.start());
                    else {
                      const o = this._getProps(s, i, a);
                      o && r.push(i.start(o));
                    }
                  }),
                  r
                );
              }),
              (t.stop = function () {
                return I(e, (s) => s.stop(...arguments)), this;
              }),
              (t.update = function (s) {
                return I(e, (r, i) => r.update(this._getProps(s, r, i))), this;
              });
            const n = function (s, r, i) {
              return c.fun(s) ? s(i, r) : s;
            };
            return (t._getProps = n), t;
          };
        function Hn(e, t, n) {
          const s = c.fun(t) && t;
          s && !n && (n = []);
          const r = (0, k.useMemo)(
              () => (s || arguments.length == 3 ? qt() : void 0),
              [],
            ),
            i = (0, k.useRef)(0),
            a = pn(),
            o = (0, k.useMemo)(
              () => ({
                ctrls: [],
                queue: [],
                flush(p, S) {
                  const _ = Lt(p, S);
                  return i.current > 0 &&
                    !o.queue.length &&
                    !Object.keys(_).some((R) => !p.springs[R])
                    ? zt(p, S)
                    : new Promise((R) => {
                        jn(p, _),
                          o.queue.push(() => {
                            R(zt(p, S));
                          }),
                          a();
                      });
                },
              }),
              [],
            ),
            l = (0, k.useRef)([...o.ctrls]),
            u = (0, k.useRef)([]),
            m = vn(e) || 0;
          (0, k.useMemo)(() => {
            I(l.current.slice(e, m), (p) => {
              Rt(p, r), p.stop(!0);
            }),
              (l.current.length = e),
              f(m, e);
          }, [e]),
            (0, k.useMemo)(() => {
              f(0, Math.min(m, e));
            }, n);
          function f(p, S) {
            for (let _ = p; _ < S; _++) {
              const A = l.current[_] || (l.current[_] = new Un(null, o.flush)),
                R = s ? s(_, A) : t[_];
              R && (u.current[_] = ir(R));
            }
          }
          const d = l.current.map((p, S) => Lt(p, u.current[S])),
            g = (0, k.useContext)(Bn),
            h = vn(g),
            v = g !== h && Pn(g);
          Je(() => {
            i.current++, (o.ctrls = l.current);
            const { queue: p } = o;
            p.length && ((o.queue = []), I(p, (S) => S())),
              I(l.current, (S, _) => {
                r?.add(S), v && S.start({ default: g });
                const A = u.current[_];
                A && (Et(S, A.ref), S.ref ? S.queue.push(A) : S.start(A));
              });
          }),
            gn(() => () => {
              I(o.ctrls, (p) => p.stop(!0));
            });
          const y = d.map((p) => ({ ...p }));
          return r ? [y, r] : y;
        }
        function Fe(e, t) {
          const n = c.fun(e),
            [[s], r] = Hn(1, n ? e : [e], n ? t || [] : t);
          return n || arguments.length == 2 ? [s, r] : s;
        }
        var cr = () => qt(),
          qr = () => useState(cr)[0],
          xr = (e, t) => {
            const n = useConstant(() => new zn(e, t));
            return (
              useOnce2(() => () => {
                n.stop();
              }),
              n
            );
          };
        function lr(e, t, n) {
          const s = is10.fun(t) && t;
          s && !n && (n = []);
          let r = !0,
            i;
          const a = Hn(
            e,
            (o, l) => {
              const u = s ? s(o, l) : t;
              return (i = u.ref), (r = r && u.reverse), u;
            },
            n || [{}],
          );
          if (
            (useIsomorphicLayoutEffect3(() => {
              each6(a[1].current, (o, l) => {
                const u = a[1].current[l + (r ? 1 : -1)];
                if ((Et(o, i), o.ref)) {
                  u && o.update({ to: u.springs });
                  return;
                }
                u ? o.start({ to: u.springs }) : o.start();
              });
            }, n),
            s || arguments.length == 3)
          ) {
            const o = i ?? a[1];
            return (
              (o._getProps = (l, u, m) => {
                const f = is10.fun(l) ? l(m, u) : l;
                if (f) {
                  const d = o.current[m + (f.reverse ? 1 : -1)];
                  return d && (f.to = d.springs), f;
                }
              }),
              a
            );
          }
          return a[0];
        }
        function dr(e, t, n) {
          const s = is11.fun(t) && t,
            {
              reset: r,
              sort: i,
              trail: a = 0,
              expires: o = !0,
              exitBeforeEnter: l = !1,
              onDestroyed: u,
              ref: m,
              config: f,
            } = s ? s() : t,
            d = useMemo3(
              () => (s || arguments.length == 3 ? qt() : void 0),
              [],
            ),
            g = toArray4(e),
            h = [],
            v = useRef2(null),
            y = r ? null : v.current;
          useIsomorphicLayoutEffect4(() => {
            v.current = h;
          }),
            useOnce3(
              () => (
                each7(h, (b) => {
                  d?.add(b.ctrl), (b.ctrl.ref = d);
                }),
                () => {
                  each7(v.current, (b) => {
                    b.expired && clearTimeout(b.expirationId),
                      Rt(b.ctrl, d),
                      b.ctrl.stop(!0);
                  });
                }
              ),
            );
          const p = hr(g, s ? s() : t, y),
            S = (r && v.current) || [];
          useIsomorphicLayoutEffect4(() =>
            each7(S, ({ ctrl: b, item: P, key: V }) => {
              Rt(b, d), C(u, P, V);
            }),
          );
          const _ = [];
          if (
            (y &&
              each7(y, (b, P) => {
                b.expired
                  ? (clearTimeout(b.expirationId), S.push(b))
                  : ((P = _[P] = p.indexOf(b.key)), ~P && (h[P] = b));
              }),
            each7(g, (b, P) => {
              h[P] ||
                ((h[P] = {
                  key: p[P],
                  item: b,
                  phase: "mount",
                  ctrl: new Un(),
                }),
                (h[P].ctrl.item = b));
            }),
            _.length)
          ) {
            let b = -1;
            const { leave: P } = s ? s() : t;
            each7(_, (V, T) => {
              const M = y[T];
              ~V
                ? ((b = h.indexOf(M)), (h[b] = { ...M, item: g[V] }))
                : P && h.splice(++b, 0, M);
            });
          }
          is11.fun(i) && h.sort((b, P) => i(b.item, P.item));
          let A = -a;
          const R = useForceUpdate2(),
            x = it(t),
            E = new Map(),
            L = useRef2(new Map()),
            O = useRef2(!1);
          each7(h, (b, P) => {
            const V = b.key,
              T = b.phase,
              M = s ? s() : t;
            let F, H;
            const ot = C(M.delay || 0, V);
            if (T == "mount") (F = M.enter), (H = "enter");
            else {
              const W = p.indexOf(V) < 0;
              if (T != "leave")
                if (W) (F = M.leave), (H = "leave");
                else if ((F = M.update)) H = "update";
                else return;
              else if (!W) (F = M.enter), (H = "enter");
              else return;
            }
            if (
              ((F = C(F, b.item, P)),
              (F = is11.obj(F) ? Pt(F) : { to: F }),
              !F.config)
            ) {
              const W = f || x.config;
              F.config = C(W, b.item, P, H);
            }
            A += a;
            const oe = {
              ...x,
              delay: ot + A,
              ref: m,
              immediate: M.immediate,
              reset: !1,
              ...F,
            };
            if (H == "enter" && is11.und(oe.from)) {
              const W = s ? s() : t,
                Le = is11.und(W.initial) || y ? W.from : W.initial;
              oe.from = C(Le, b.item, P);
            }
            const { onResolve: Or } = oe;
            oe.onResolve = (W) => {
              C(Or, W);
              const Le = v.current,
                se = Le.find((ut) => ut.key === V);
              if (
                se &&
                !(W.cancelled && se.phase != "update") &&
                se.ctrl.idle
              ) {
                const ut = Le.every((ue) => ue.ctrl.idle);
                if (se.phase == "leave") {
                  const ue = C(o, se.item);
                  if (ue !== !1) {
                    const jt = ue === !0 ? 0 : ue;
                    if (((se.expired = !0), !ut && jt > 0)) {
                      jt <= 2147483647 && (se.expirationId = setTimeout(R, jt));
                      return;
                    }
                  }
                }
                ut &&
                  Le.some((ue) => ue.expired) &&
                  (L.current.delete(se), l && (O.current = !0), R());
              }
            };
            const Yn = Lt(b.ctrl, oe);
            H === "leave" && l
              ? L.current.set(b, { phase: H, springs: Yn, payload: oe })
              : E.set(b, { phase: H, springs: Yn, payload: oe });
          });
          const j = useContext3(Bn),
            B = usePrev2(j),
            ee = j !== B && Pn(j);
          useIsomorphicLayoutEffect4(() => {
            ee &&
              each7(h, (b) => {
                b.ctrl.start({ default: j });
              });
          }, [j]),
            each7(E, (b, P) => {
              if (L.current.size) {
                const V = h.findIndex((T) => T.key === P.key);
                h.splice(V, 1);
              }
            }),
            useIsomorphicLayoutEffect4(
              () => {
                each7(
                  L.current.size ? L.current : E,
                  ({ phase: b, payload: P }, V) => {
                    const { ctrl: T } = V;
                    (V.phase = b),
                      d?.add(T),
                      ee && b == "enter" && T.start({ default: j }),
                      P &&
                        (Et(T, P.ref),
                        (T.ref || d) && !O.current
                          ? T.update(P)
                          : (T.start(P), O.current && (O.current = !1)));
                  },
                );
              },
              r ? void 0 : n,
            );
          const me = (b) =>
            React2.createElement(
              React2.Fragment,
              null,
              h.map((P, V) => {
                const { springs: T } = E.get(P) || P.ctrl,
                  M = b({ ...T }, P.item, P, V),
                  F = is11.str(P.key) || is11.num(P.key) ? P.key : P.ctrl.id,
                  H = React2.version < "19.0.0",
                  ot = M?.props ?? {};
                return (
                  H && (ot.ref = M.ref),
                  M && M.type
                    ? React2.createElement(M.type, { key: F, ...ot })
                    : M
                );
              }),
            );
          return d ? [me, d] : me;
        }
        var fr = 1;
        function hr(e, { key: t, keys: n = t }, s) {
          if (n === null) {
            const r = new Set();
            return e.map((i) => {
              const a =
                s &&
                s.find((o) => o.item === i && o.phase !== "leave" && !r.has(o));
              return a ? (r.add(a), a.key) : fr++;
            });
          }
          return is11.und(n) ? e : is11.fun(n) ? e.map(n) : toArray4(n);
        }
        var Ur = ({ container: e, ...t } = {}) => {
            const [n, s] = Fe(
              () => ({
                scrollX: 0,
                scrollY: 0,
                scrollXProgress: 0,
                scrollYProgress: 0,
                ...t,
              }),
              [],
            );
            return (
              useIsomorphicLayoutEffect5(() => {
                const r = onScroll(
                  ({ x: i, y: a }) => {
                    s.start({
                      scrollX: i.current,
                      scrollXProgress: i.progress,
                      scrollY: a.current,
                      scrollYProgress: a.progress,
                    });
                  },
                  { container: e?.current || void 0 },
                );
                return () => {
                  each8(Object.values(n), (i) => i.stop()), r();
                };
              }, []),
              n
            );
          },
          $r = ({ container: e, ...t }) => {
            const [n, s] = Fe(() => ({ width: 0, height: 0, ...t }), []);
            return (
              useIsomorphicLayoutEffect6(() => {
                const r = onResize(
                  ({ width: i, height: a }) => {
                    s.start({
                      width: i,
                      height: a,
                      immediate:
                        n.width.get() === 0 ||
                        n.height.get() === 0 ||
                        t.immediate === !0,
                    });
                  },
                  { container: e?.current || void 0 },
                );
                return () => {
                  each9(Object.values(n), (i) => i.stop()), r();
                };
              }, []),
              n
            );
          },
          mr = { any: 0, all: 1 };
        function jr(e, t) {
          const [n, s] = useState2(!1),
            r = useRef3(void 0),
            i = is12.fun(e) && e,
            a = i ? i() : {},
            { to: o = {}, from: l = {}, ...u } = a,
            m = i ? t : e,
            [f, d] = Fe(() => ({ from: l, ...u }), []);
          return (
            useIsomorphicLayoutEffect7(() => {
              const g = r.current,
                { root: h, once: v, amount: y = "any", ...p } = m ?? {};
              if (!g || (v && n) || typeof IntersectionObserver > "u") return;
              const S = new WeakMap(),
                _ = () => (
                  o && d.start(o),
                  s(!0),
                  v
                    ? void 0
                    : () => {
                        l && d.start(l), s(!1);
                      }
                ),
                A = (x) => {
                  x.forEach((E) => {
                    const L = S.get(E.target);
                    if (E.isIntersecting !== !!L)
                      if (E.isIntersecting) {
                        const O = _();
                        is12.fun(O)
                          ? S.set(E.target, O)
                          : R.unobserve(E.target);
                      } else L && (L(), S.delete(E.target));
                  });
                },
                R = new IntersectionObserver(A, {
                  root: (h && h.current) || void 0,
                  threshold:
                    typeof y == "number" || Array.isArray(y) ? y : mr[y],
                  ...p,
                });
              return R.observe(g), () => R.unobserve(g);
            }, [m]),
            i ? [r, f] : [r, n]
          );
        }
        function Nr({ children: e, ...t }) {
          return e(Fe(t));
        }
        function Qr({ items: e, children: t, ...n }) {
          const s = lr(e.length, n);
          return e.map((r, i) => {
            const a = t(r, i);
            return is13.fun(a) ? a(s[i]) : a;
          });
        }
        function Dr({ items: e, children: t, ...n }) {
          return dr(e, n)(t);
        }
        var xt = class extends Ct {
          constructor(e, t) {
            super(),
              (this.source = e),
              (this.idle = !0),
              (this._active = new Set()),
              (this.calc = be(...t));
            const n = this._get(),
              s = It(n);
            St(this, s.create(n));
          }
          advance(e) {
            const t = this._get(),
              n = this.get();
            J(t, n) || (Z(this).setValue(t), this._onChange(t, this.idle)),
              !this.idle && Wn(this._active) && Ut(this);
          }
          _get() {
            const e = c.arr(this.source)
              ? this.source.map(z)
              : q(z(this.source));
            return this.calc(...e);
          }
          _start() {
            this.idle &&
              !Wn(this._active) &&
              ((this.idle = !1),
              I(et(this), (e) => {
                e.done = !1;
              }),
              N.skipAnimation
                ? (w.batchedUpdates(() => this.advance()), Ut(this))
                : we.start(this));
          }
          _attach() {
            let e = 1;
            I(q(this.source), (t) => {
              $(t) && de(t, this),
                Mt(t) &&
                  (t.idle || this._active.add(t),
                  (e = Math.max(e, t.priority + 1)));
            }),
              (this.priority = e),
              this._start();
          }
          _detach() {
            I(q(this.source), (e) => {
              $(e) && Ie(e, this);
            }),
              this._active.clear(),
              Ut(this);
          }
          eventObserved(e) {
            e.type == "change"
              ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
              : e.type == "idle"
                ? this._active.delete(e.parent)
                : e.type == "priority" &&
                  (this.priority = q(this.source).reduce(
                    (t, n) => Math.max(t, (Mt(n) ? n.priority : 0) + 1),
                    0,
                  ));
          }
        };
        function pr(e) {
          return e.idle !== !1;
        }
        function Wn(e) {
          return !e.size || Array.from(e).every(pr);
        }
        function Ut(e) {
          e.idle ||
            ((e.idle = !0),
            I(et(e), (t) => {
              t.done = !0;
            }),
            Se(e, { type: "idle", parent: e }));
        }
        var Br = (e, ...t) => new xt(e, t),
          Hr = (e, ...t) => (deprecateInterpolate2(), new xt(e, t));
        N.assign({ createStringInterpolator: dn, to: (e, t) => new xt(e, t) });
        var Wr = we.advance,
          gr = ct(72739),
          Gn = /^--/;
        function vr(e, t) {
          return t == null || typeof t == "boolean" || t === ""
            ? ""
            : typeof t == "number" &&
                t !== 0 &&
                !Gn.test(e) &&
                !(ze.hasOwnProperty(e) && ze[e])
              ? t + "px"
              : ("" + t).trim();
        }
        var Kn = {};
        function yr(e, t) {
          if (!e.nodeType || !e.setAttribute) return !1;
          const n =
              e.nodeName === "filter" ||
              (e.parentNode && e.parentNode.nodeName === "filter"),
            {
              className: s,
              style: r,
              children: i,
              scrollTop: a,
              scrollLeft: o,
              viewBox: l,
              ...u
            } = t,
            m = Object.values(u),
            f = Object.keys(u).map((d) =>
              n || e.hasAttribute(d)
                ? d
                : Kn[d] ||
                  (Kn[d] = d.replace(/([A-Z])/g, (g) => "-" + g.toLowerCase())),
            );
          i !== void 0 && (e.textContent = i);
          for (const d in r)
            if (r.hasOwnProperty(d)) {
              const g = vr(d, r[d]);
              Gn.test(d) ? e.style.setProperty(d, g) : (e.style[d] = g);
            }
          f.forEach((d, g) => {
            e.setAttribute(d, m[g]);
          }),
            s !== void 0 && (e.className = s),
            a !== void 0 && (e.scrollTop = a),
            o !== void 0 && (e.scrollLeft = o),
            l !== void 0 && e.setAttribute("viewBox", l);
        }
        var ze = {
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
          _r = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
          wr = ["Webkit", "Ms", "Moz", "O"];
        ze = Object.keys(ze).reduce(
          (e, t) => (wr.forEach((n) => (e[_r(n, t)] = e[t])), e),
          ze,
        );
        var br = /^(matrix|translate|scale|rotate|skew)/,
          Sr = /^(translate)/,
          Ir = /^(rotate|skew)/,
          $t = (e, t) => (c.num(e) && e !== 0 ? e + t : e),
          at = (e, t) =>
            c.arr(e)
              ? e.every((n) => at(n, t))
              : c.num(e)
                ? e === t
                : parseFloat(e) === t,
          Pr = class extends rt {
            constructor({ x: e, y: t, z: n, ...s }) {
              const r = [],
                i = [];
              (e || t || n) &&
                (r.push([e || 0, t || 0, n || 0]),
                i.push((a) => [
                  `translate3d(${a.map((o) => $t(o, "px")).join(",")})`,
                  at(a, 0),
                ])),
                X(s, (a, o) => {
                  if (o === "transform")
                    r.push([a || ""]), i.push((l) => [l, l === ""]);
                  else if (br.test(o)) {
                    if ((delete s[o], c.und(a))) return;
                    const l = Sr.test(o) ? "px" : Ir.test(o) ? "deg" : "";
                    r.push(q(a)),
                      i.push(
                        o === "rotate3d"
                          ? ([u, m, f, d]) => [
                              `rotate3d(${u},${m},${f},${$t(d, l)})`,
                              at(d, 0),
                            ]
                          : (u) => [
                              `${o}(${u.map((m) => $t(m, l)).join(",")})`,
                              at(u, o.startsWith("scale") ? 1 : 0),
                            ],
                      );
                  }
                }),
                r.length && (s.transform = new Ar(r, i)),
                super(s);
            }
          },
          Ar = class extends on {
            constructor(e, t) {
              super(),
                (this.inputs = e),
                (this.transforms = t),
                (this._value = null);
            }
            get() {
              return this._value || (this._value = this._get());
            }
            _get() {
              let e = "",
                t = !0;
              return (
                I(this.inputs, (n, s) => {
                  const r = z(n[0]),
                    [i, a] = this.transforms[s](c.arr(r) ? r : n.map(z));
                  (e += " " + i), (t = t && a);
                }),
                t ? "none" : e
              );
            }
            observerAdded(e) {
              e == 1 && I(this.inputs, (t) => I(t, (n) => $(n) && de(n, this)));
            }
            observerRemoved(e) {
              e == 0 && I(this.inputs, (t) => I(t, (n) => $(n) && Ie(n, this)));
            }
            eventObserved(e) {
              e.type == "change" && (this._value = null), Se(this, e);
            }
          },
          Rr = [
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
          ];
        N.assign({
          batchedUpdates: gr.unstable_batchedUpdates,
          createStringInterpolator: dn,
          colors: us,
        });
        var Er = Ks(Rr, {
            applyAnimatedValues: yr,
            createAnimatedStyle: (e) => new Pr(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
          }),
          kr = Er.animated;
      },
    },
  ]);
})();
