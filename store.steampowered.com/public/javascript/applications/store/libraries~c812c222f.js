/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [76077],
  {
    22932: (n, t, r) => {
      function e(n, t, r, e, i) {
        return o(
          t,
          ((n, t) => {
            const r = n[t];
            if (void 0 === r) throw new TypeError(ei(t));
            return r;
          })(n, t),
          r,
          e,
          i,
        );
      }
      function o(n, t, r, e, o, i) {
        const c = R(t, r, e);
        if (o && t !== c) throw new RangeError(ti(n, t, r, e, i));
        return c;
      }
      function i(n) {
        return null !== n && /object|function/.test(typeof n);
      }
      function c(n, t = Map) {
        const r = new t();
        return (t, ...e) => {
          if (r.has(t)) return r.get(t);
          const o = n(t, ...e);
          return r.set(t, o), o;
        };
      }
      function u(n) {
        return s({ name: n }, 1);
      }
      function s(n, t) {
        return d((n) => ({ value: n, configurable: 1, writable: !t }), n);
      }
      function a(n) {
        return d((n) => ({ get: n, configurable: 1 }), n);
      }
      function f(n) {
        return { [Symbol.toStringTag]: { value: n, configurable: 1 } };
      }
      function l(n, t) {
        const r = {};
        let e = n.length;
        for (const o of t) r[n[--e]] = o;
        return r;
      }
      function d(n, t, r) {
        const e = {};
        for (const o in t) e[o] = n(t[o], o, r);
        return e;
      }
      function h(n, t, r) {
        const e = {};
        for (let o = 0; o < t.length; o++) {
          const i = t[o];
          e[i] = n(i, o, r);
        }
        return e;
      }
      function w(n, t, r) {
        const e = {};
        for (let o = 0; o < n.length; o++) e[t[o]] = r[n[o]];
        return e;
      }
      function g(n, t) {
        const r = Object.create(null);
        for (const e of n) r[e] = t[e];
        return r;
      }
      function m(n, t) {
        for (const r of t) if (r in n) return 1;
        return 0;
      }
      function p(n, t, r) {
        for (const e of n) if (t[e] !== r[e]) return 0;
        return 1;
      }
      function y(n, t, r) {
        const e = { ...r };
        for (let r = 0; r < t; r++) e[n[r]] = 0;
        return e;
      }
      function v(n, ...t) {
        return (...r) => n(...t, ...r);
      }
      function b() {}
      function M(n) {
        return n[0].toUpperCase() + n.substring(1);
      }
      function E(n) {
        return n.slice().sort();
      }
      function N(n, t) {
        return String(t).padStart(n, "0");
      }
      function O(n, t) {
        return Math.sign(n - t);
      }
      function R(n, t, r) {
        return Math.min(Math.max(n, t), r);
      }
      function T(n, t) {
        return [Math.floor(n / t), I(n, t)];
      }
      function I(n, t) {
        return ((n % t) + t) % t;
      }
      function D(n, t) {
        return [j(n, t), C(n, t)];
      }
      function j(n, t) {
        return Math.trunc(n / t) || 0;
      }
      function C(n, t) {
        return n % t || 0;
      }
      function Z(n) {
        return 0.5 === Math.abs(n % 1);
      }
      function Y(n, t, r) {
        let e = 0,
          o = 0;
        for (let i = 0; i <= t; i++) {
          const t = n[r[i]],
            c = Xi[i],
            u = zi / c,
            [s, a] = D(t, u);
          (e += a * c), (o += s);
        }
        const [i, c] = D(e, zi);
        return [o + i, c];
      }
      function S(n, t, r) {
        const e = {};
        for (let o = t; o >= 0; o--) {
          const t = Xi[o];
          (e[r[o]] = j(n, t)), (n = C(n, t));
        }
        return e;
      }
      function P(n) {
        if (void 0 !== n) return $(n);
      }
      function k(n) {
        return B($(n));
      }
      function $(n) {
        return L(Rc(n));
      }
      function U(n, t) {
        if (null == t) throw new RangeError(ei(n));
        return t;
      }
      function x(n) {
        if (!i(n)) throw new TypeError(ni);
        return n;
      }
      function F(n, t, r = n) {
        if (typeof t !== n) throw new TypeError(ri(r, t));
        return t;
      }
      function L(n, t = "number") {
        if (!Number.isInteger(n)) throw new RangeError(Go(t, n));
        return n || 0;
      }
      function B(n, t = "number") {
        if (n <= 0) throw new RangeError(Ko(t, n));
        return n;
      }
      function J(n) {
        if ("symbol" == typeof n) throw new TypeError(Qo);
        return String(n);
      }
      function W(n, t) {
        return i(n) ? String(n) : Nc(n, t);
      }
      function H(n) {
        if ("string" == typeof n) return BigInt(n);
        if ("bigint" != typeof n) throw new TypeError(Xo(n));
        return n;
      }
      function q(n, t = "number") {
        if ("bigint" == typeof n) throw new TypeError(zo(t));
        if (((n = Number(n)), !Number.isFinite(n)))
          throw new RangeError(Vo(t, n));
        return n;
      }
      function _(n, t) {
        return Math.trunc(q(n, t)) || 0;
      }
      function A(n, t) {
        return L(q(n, t), t);
      }
      function G(n, t) {
        return B(_(n, t), t);
      }
      function K(n, t) {
        let [r, e] = D(t, zi),
          o = n + r;
        const i = Math.sign(o);
        return i && i === -Math.sign(e) && ((o -= i), (e += i * zi)), [o, e];
      }
      function V(n, t, r = 1) {
        return K(n[0] + t[0] * r, n[1] + t[1] * r);
      }
      function z(n, t) {
        return K(n[0], n[1] + t);
      }
      function X(n, t) {
        return V(t, n, -1);
      }
      function Q(n, t) {
        return O(n[0], t[0]) || O(n[1], t[1]);
      }
      function nn(n, t, r) {
        return -1 === Q(n, t) || 1 === Q(n, r);
      }
      function tn(n, t = 1) {
        const r = BigInt(zi / t);
        return [Number(n / r), Number(n % r) * t];
      }
      function rn(n, t = 1) {
        const r = zi / t,
          [e, o] = D(n, r);
        return [e, o * t];
      }
      function en(n, t = 1) {
        const [r, e] = n,
          o = Math.floor(e / t),
          i = zi / t;
        return BigInt(r) * BigInt(i) + BigInt(o);
      }
      function on(n, t = 1, r) {
        const [e, o] = n,
          [i, c] = D(o, t);
        return e * (zi / t) + (i + (r ? c / t : 0));
      }
      function cn(n) {
        return n[0] + n[1] / zi;
      }
      function un(n, t, r = T) {
        const [e, o] = n,
          [i, c] = r(o, t);
        return [e * (zi / t) + i, c];
      }
      function sn(n) {
        return (
          e(n, "isoYear", Gc, Ac, 1),
          n.isoYear === Gc
            ? e(n, "isoMonth", 4, 12, 1)
            : n.isoYear === Ac && e(n, "isoMonth", 1, 9, 1),
          n
        );
      }
      function an(n) {
        return fn({ ...n, ...Bc, isoHour: 12 }), n;
      }
      function fn(n) {
        const t = e(n, "isoYear", Gc, Ac, 1),
          r = t === Gc ? 1 : t === Ac ? -1 : 0;
        return (
          r &&
            ln(
              pn({
                ...n,
                isoDay: n.isoDay + r,
                isoNanosecond: n.isoNanosecond - r,
              }),
            ),
          n
        );
      }
      function ln(n) {
        if (!n || nn(n, _c, qc)) throw new RangeError(Di);
        return n;
      }
      function dn(n) {
        return Y(n, 5, kc)[1];
      }
      function hn(n) {
        const [t, r] = T(n, zi);
        return [S(r, 5, kc), t];
      }
      function wn(n) {
        return gn(n)[0];
      }
      function gn(n) {
        return un(n, Gi);
      }
      function mn(n) {
        return bn(
          n.isoYear,
          n.isoMonth,
          n.isoDay,
          n.isoHour,
          n.isoMinute,
          n.isoSecond,
          n.isoMillisecond,
        );
      }
      function pn(n) {
        const t = mn(n);
        if (void 0 !== t) {
          const [r, e] = D(t, Hi);
          return [
            r,
            e * Ai + (n.isoMicrosecond || 0) * _i + (n.isoNanosecond || 0),
          ];
        }
      }
      function yn(n, t) {
        const [r, e] = hn(dn(n) - t);
        return ln(pn({ ...n, isoDay: n.isoDay + e, ...r }));
      }
      function vn(...n) {
        return bn(...n) / qi;
      }
      function bn(...n) {
        const [t, r] = Mn(...n),
          e = t.valueOf();
        if (!isNaN(e)) return e - r * Hi;
      }
      function Mn(n, t = 1, r = 1, e = 0, o = 0, i = 0, c = 0) {
        const u = n === Gc ? 1 : n === Ac ? -1 : 0,
          s = new Date();
        return (
          s.setUTCHours(e, o, i, c), s.setUTCFullYear(n, t - 1, r + u), [s, u]
        );
      }
      function En(n, t) {
        let [r, e] = z(n, t);
        e < 0 && ((e += zi), (r -= 1));
        const [o, i] = T(e, Ai),
          [c, u] = T(i, _i);
        return Nn(r * Hi + o, c, u);
      }
      function Nn(n, t = 0, r = 0) {
        const e = Math.ceil(Math.max(0, Math.abs(n) - Hc) / Hi) * Math.sign(n),
          o = new Date(n - e * Hi);
        return l(Uc, [
          o.getUTCFullYear(),
          o.getUTCMonth() + 1,
          o.getUTCDate() + e,
          o.getUTCHours(),
          o.getUTCMinutes(),
          o.getUTCSeconds(),
          o.getUTCMilliseconds(),
          t,
          r,
        ]);
      }
      function On(n, t) {
        if (t < -Hc) throw new RangeError(Di);
        const r = n.formatToParts(t),
          e = {};
        for (const n of r) e[n.type] = n.value;
        return e;
      }
      function Rn(n) {
        return n.isoDay;
      }
      function Tn(n) {
        return [n.isoYear, n.isoMonth, n.isoDay];
      }
      function In(n, t) {
        return [t, 0];
      }
      function Dn(n, t) {
        if (!t) return [zc, n];
      }
      function jn(n, t, r) {
        return { isoYear: n, isoMonth: t, isoDay: r };
      }
      function Cn() {
        return Xc;
      }
      function Zn(n, t) {
        switch (t) {
          case 2:
            return Sn(n) ? 29 : 28;
          case 4:
          case 6:
          case 9:
          case 11:
            return 30;
        }
        return 31;
      }
      function Yn(n) {
        return Sn(n) ? 366 : 365;
      }
      function Sn(n) {
        return n % 4 == 0 && (n % 100 != 0 || n % 400 == 0);
      }
      function Pn(n) {
        const [t, r] = Mn(n.isoYear, n.isoMonth, n.isoDay);
        return I(t.getUTCDay() - r, 7) || 7;
      }
      function kn(n) {
        return this.id === yc
          ? (({ isoYear: n }) =>
              n < 1 ? ["gregory-inverse", 1 - n] : ["gregory", n])(n)
          : this.id === vc
            ? nu(n)
            : [];
      }
      function $n(n) {
        const t = mn(n);
        if (t < Qc) {
          const { isoYear: t } = n;
          return t < 1 ? ["japanese-inverse", 1 - t] : ["japanese", t];
        }
        const r = On(ds(vc), t),
          { era: e, eraYear: o } = Qe(r, vc);
        return [e, o];
      }
      function Un(n) {
        return xn(n), Bn(n, 1), n;
      }
      function xn(n) {
        return Ln(n, 1), n;
      }
      function Fn(n) {
        return p($c, n, Ln(n));
      }
      function Ln(n, t) {
        const { isoYear: r } = n,
          o = e(n, "isoMonth", 1, Cn(), t);
        return {
          isoYear: r,
          isoMonth: o,
          isoDay: e(n, "isoDay", 1, Zn(r, o), t),
        };
      }
      function Bn(n, t) {
        return l(kc, [
          e(n, "isoHour", 0, 23, t),
          e(n, "isoMinute", 0, 59, t),
          e(n, "isoSecond", 0, 59, t),
          e(n, "isoMillisecond", 0, 999, t),
          e(n, "isoMicrosecond", 0, 999, t),
          e(n, "isoNanosecond", 0, 999, t),
        ]);
      }
      function Jn(n) {
        return void 0 === n ? 0 : bu(x(n));
      }
      function Wn(n, t = 0) {
        n = Qn(n);
        const r = Mu(n),
          e = Eu(n, t);
        return [bu(n), e, r];
      }
      function Hn(n, t, r, e = 9, o = 0, i = 4) {
        t = Qn(t);
        let c = yu(t, e, o),
          u = Vn(t),
          s = Tu(t, i);
        const a = pu(t, e, o, 1);
        return (
          null == c ? (c = Math.max(r, a)) : ot(c, a),
          (u = zn(u, a, 1)),
          n && (s = ((n) => (n < 4 ? (n + 2) % 4 : n))(s)),
          [c, a, u, s]
        );
      }
      function qn(n, t = 6, r) {
        let e = Vn((n = nt(n, tu)));
        const o = Tu(n, 7);
        let i = pu(n, t);
        return (i = U(tu, i)), (e = zn(e, i, void 0, r)), [i, e, o];
      }
      function _n(n) {
        return Nu(Qn(n));
      }
      function An(n, t) {
        return Gn(Qn(n), t);
      }
      function Gn(n, t = 4) {
        const r = Xn(n);
        return [Tu(n, 4), ...Kn(pu(n, t), r)];
      }
      function Kn(n, t) {
        return null != n
          ? [Xi[n], n < 4 ? 9 - 3 * n : -1]
          : [void 0 === t ? 1 : 10 ** (9 - t), t];
      }
      function Vn(n) {
        const t = n[ou];
        return void 0 === t ? 1 : _(t, ou);
      }
      function zn(n, t, r, e) {
        const i = e ? zi : Xi[t + 1];
        if (i) {
          const r = Xi[t];
          if (i % ((n = o(ou, n, 1, i / r - (e ? 0 : 1), 1)) * r))
            throw new RangeError(ri(ou, n));
        } else n = o(ou, n, 1, r ? 10 ** 9 : 1, 1);
        return n;
      }
      function Xn(n) {
        let t = n[iu];
        if (void 0 !== t) {
          if ("number" != typeof t) {
            if ("auto" === J(t)) return;
            throw new RangeError(ri(iu, t));
          }
          t = o(iu, Math.floor(t), 0, 9, 1);
        }
        return t;
      }
      function Qn(n) {
        return void 0 === n ? {} : x(n);
      }
      function nt(n, t) {
        return "string" == typeof n ? { [t]: n } : x(n);
      }
      function tt(n) {
        return { overflow: au[n] };
      }
      function rt(n, t, r = 9, e = 0, i) {
        let c = t[n];
        if (void 0 === c) return i ? e : void 0;
        if (((c = J(c)), "auto" === c)) return i ? e : null;
        let u = Ji[c];
        if ((void 0 === u && (u = Zc[c]), void 0 === u))
          throw new RangeError(ui(n, c, Ji));
        return o(n, u, e, r, 1, Wi), u;
      }
      function et(n, t, r, e = 0) {
        const o = r[n];
        if (void 0 === o) return e;
        const i = J(o),
          c = t[i];
        if (void 0 === c) throw new RangeError(ui(n, i, t));
        return c;
      }
      function ot(n, t) {
        if (t > n) throw new RangeError(Pi);
      }
      function it(n) {
        return { branding: Su, epochNanoseconds: n };
      }
      function ct(n, t, r) {
        return { branding: Yu, calendar: r, timeZone: t, epochNanoseconds: n };
      }
      function ut(n, t = n.calendar) {
        return { branding: Cu, calendar: t, ...g(Lc, n) };
      }
      function st(n, t = n.calendar) {
        return { branding: ju, calendar: t, ...g(xc, n) };
      }
      function at(n, t = n.calendar) {
        return { branding: Iu, calendar: t, ...g(xc, n) };
      }
      function ft(n, t = n.calendar) {
        return { branding: Du, calendar: t, ...g(xc, n) };
      }
      function lt(n) {
        return { branding: Zu, ...g(Fc, n) };
      }
      function dt(n) {
        return { branding: Pu, sign: Yr(n), ...g(Ic, n) };
      }
      function ht(n) {
        return un(n.epochNanoseconds, Ai)[0];
      }
      function wt(n) {
        return n.epochNanoseconds;
      }
      function gt(n, t, r, e, o) {
        const i = Fr(e),
          [c, u] = ((n, t) => {
            const r = t((n = nt(n, ru))[cu]);
            let e = vu(n);
            return (e = U(ru, e)), [e, r];
          })(o, n),
          s = Math.max(c, i);
        if (!u && Dr(s, u)) return mt(e, c);
        if (!u) throw new RangeError(Zi);
        if (!e.sign) return 0;
        const [a, f, l] = Nr(t, r, u),
          d = Or(l),
          h = Rr(l),
          w = Tr(l),
          g = h(f, a, e);
        Ir(u) || (fn(a), fn(g));
        const m = w(f, a, g, c);
        return Dr(c, u)
          ? mt(m, c)
          : (function (n, t, r, e, o, i, c) {
              const u = Yr(n),
                [s, a] = pt(e, Pc(r, n), r, u, o, i, c),
                f = yt(t, s, a);
              return n[Tc[r]] + f * u;
            })(m, d(g), c, f, a, d, h);
      }
      function mt(n, t) {
        return on(kr(n), Xi[t], 1);
      }
      function pt(n, t, r, e, o, i, c) {
        const u = Tc[r],
          s = { ...t, [u]: t[u] + e },
          a = c(n, o, t),
          f = c(n, o, s);
        return [i(a), i(f)];
      }
      function yt(n, t, r) {
        const e = on(X(t, r));
        if (!e) throw new RangeError(yi);
        return on(X(t, n)) / e;
      }
      function vt(n, t, r) {
        let { epochNanoseconds: e, timeZone: o, calendar: i } = t;
        const [c, u, s] = qn(r);
        if (0 === c && 1 === u) return t;
        const a = n(o);
        if (6 === c)
          e = (function (n, t, r, e) {
            const o = Bu(r, t),
              [i, c] = n(o),
              u = r.epochNanoseconds,
              s = ur(t, i),
              a = ur(t, c);
            if (nn(u, s, a)) throw new RangeError(yi);
            return St(yt(u, s, a), e) ? a : s;
          })(Tt, a, t, s);
        else {
          const n = a.N(e);
          e = ir(a, Mt(En(e, n), c, u, s), n, 2, 0, 1);
        }
        return ct(e, o, i);
      }
      function bt(n, t) {
        const { timeZone: r, calendar: e } = t;
        return ct(
          (function (n, t, r) {
            return ur(t, n(Bu(r, t)));
          })(It, n(r), t),
          r,
          e,
        );
      }
      function Mt(n, t, r, e) {
        return Et(n, Rt(t, r), e);
      }
      function Et(n, t, r) {
        const [e, o] = Nt(n, t, r);
        return fn({ ...Er(n, o), ...e });
      }
      function Nt(n, t, r) {
        return hn(Yt(dn(n), t, r));
      }
      function Ot(n) {
        return Yt(n, Ki, 7);
      }
      function Rt(n, t) {
        return Xi[n] * t;
      }
      function Tt(n) {
        const t = It(n);
        return [t, Er(t, 1)];
      }
      function It(n) {
        return Jc(6, n);
      }
      function Dt(n, t, r) {
        const e = Math.min(Fr(n), 6);
        return $r(Zt(kr(n, e), t, r), e);
      }
      function jt(n, t, r, e, o, i, c, u, s, a) {
        if (0 === e && 1 === o) return n;
        const f = Dr(e, u) ? (Ir(u) && e < 6 && r >= 6 ? kt : Pt) : $t;
        let [l, d, h] = f(n, t, r, e, o, i, c, u, s, a);
        return (
          h &&
            7 !== e &&
            (l = ((n, t, r, e, o, i, c, u) => {
              const s = Yr(n);
              for (let a = e + 1; a <= r; a++) {
                if (7 === a && 7 !== r) continue;
                const e = Pc(a, n);
                e[Tc[a]] += s;
                const f = on(X(c(u(o, i, e)), t));
                if (f && Math.sign(f) !== s) break;
                n = e;
              }
              return n;
            })(l, d, r, Math.max(6, e), c, u, s, a)),
          l
        );
      }
      function Ct(n, t, r, e, o) {
        return 6 === t ? [Yt(cn(n), r, e), 0] : Zt(n, Rt(t, r), e, o);
      }
      function Zt(n, t, r, e) {
        let [o, i] = n;
        e && i < 0 && ((i += zi), (o -= 1));
        const [c, u] = T(Yt(i, t, r), zi);
        return K(o + c, u);
      }
      function Yt(n, t, r) {
        return St(n / t, r) * t;
      }
      function St(n, t) {
        return ku[t](n);
      }
      function Pt(n, t, r, e, o, i) {
        const c = Yr(n),
          u = kr(n),
          s = Ct(u, e, o, i),
          a = X(u, s),
          f = Math.sign(s[0] - u[0]) === c,
          l = $r(s, Math.min(r, 6));
        return [{ ...n, ...l }, V(t, a), f];
      }
      function kt(n, t, r, e, o, i, c, u, s, a) {
        const f = Yr(n) || 1,
          l = on(kr(n, 5)),
          d = Rt(e, o);
        let h = Yt(l, d, i);
        const [w, g] = pt(c, { ...n, ...Sc }, 6, f, u, s, a),
          m = h - on(X(w, g));
        let p = 0;
        m && Math.sign(m) !== f
          ? (t = z(w, h))
          : ((p += f), (h = Yt(m, d, i)), (t = z(g, h)));
        const y = Ur(h);
        return [{ ...n, ...y, days: n.days + p }, t, Boolean(p)];
      }
      function $t(n, t, r, e, o, i, c, u, s, a) {
        const f = Yr(n),
          l = Tc[e],
          d = Pc(e, n);
        7 === e && (n = { ...n, weeks: n.weeks + Math.trunc(n.days / 7) });
        const h = j(n[l], o) * o;
        d[l] = h;
        const [w, g] = pt(c, d, e, o * f, u, s, a),
          m = h + yt(t, w, g) * f * o,
          p = Yt(m, o, i),
          y = Math.sign(p - m) === f;
        return (d[l] = p), [d, y ? g : w, y];
      }
      function Ut(n, t, r, e) {
        const [o, i, c, u] = ((n) => {
            const t = Gn((n = Qn(n)));
            return [n.timeZone, ...t];
          })(e),
          s = void 0 !== o;
        return ((n, t, r, e, o, i) => {
          r = Zt(r, o, e, 1);
          const c = t.N(r);
          return At(En(r, c), i) + (n ? Xt(Ot(c)) : "Z");
        })(s, t(s ? n(o) : $u), r.epochNanoseconds, i, c, u);
      }
      function xt(n, t, r) {
        const [e, o, i, c, u, s] = ((n) => {
          n = Qn(n);
          const t = Nu(n),
            r = Xn(n),
            e = Ru(n),
            o = Tu(n, 4),
            i = pu(n, 4);
          return [t, Ou(n), e, o, ...Kn(i, r)];
        })(r);
        return ((n, t, r, e, o, i, c, u, s, a) => {
          e = Zt(e, s, u, 1);
          const f = n(r).N(e);
          return (
            At(En(e, f), a) +
            Xt(Ot(f), c) +
            ((n, t) => (1 !== t ? "[" + (2 === t ? "!" : "") + n + "]" : ""))(
              r,
              i,
            ) +
            Qt(t, o)
          );
        })(n, t.calendar, t.timeZone, t.epochNanoseconds, e, o, i, c, u, s);
      }
      function Ft(n, t) {
        const [r, e, o, i] = ((n) => ((n = Qn(n)), [Nu(n), ...Gn(n)]))(t);
        return (
          (c = n.calendar), (u = r), (s = i), At(Et(n, o, e), s) + Qt(c, u)
        );
        var c, u, s;
      }
      function Lt(n, t) {
        return (r = n.calendar), (e = n), (o = _n(t)), Gt(e) + Qt(r, o);
        var r, e, o;
      }
      function Bt(n, t) {
        return qt(n.calendar, Kt, n, _n(t));
      }
      function Jt(n, t) {
        return qt(n.calendar, Vt, n, _n(t));
      }
      function Wt(n, t) {
        const [r, e, o] = An(t);
        return (i = o), zt(Nt(n, e, r)[0], i);
        var i;
      }
      function Ht(n, t) {
        const [r, e, o] = An(t, 3);
        return (
          e > 1 && Sr((n = { ...n, ...Dt(n, e, r) })),
          ((n, t) => {
            const { sign: r } = n,
              e = -1 === r ? Zr(n) : n,
              { hours: o, minutes: i } = e,
              [c, u] = un(kr(e, 3), Gi, D);
            Pr(c);
            const s = tr(u, t),
              a = t >= 0 || !r || s;
            return (
              (r < 0 ? "-" : "") +
              "P" +
              _t({
                Y: er(e.years),
                M: er(e.months),
                W: er(e.weeks),
                D: er(e.days),
              }) +
              (o || i || c || a
                ? "T" + _t({ H: er(o), M: er(i), S: er(c, a) + s })
                : "")
            );
          })(n, o)
        );
      }
      function qt(n, t, r, e) {
        const o = e > 1 || (0 === e && n !== pc);
        return 1 === e
          ? n === pc
            ? t(r)
            : Gt(r)
          : o
            ? Gt(r) + nr(n, 2 === e)
            : t(r);
      }
      function _t(n) {
        const t = [];
        for (const r in n) {
          const e = n[r];
          e && t.push(e, r);
        }
        return t.join("");
      }
      function At(n, t) {
        return Gt(n) + "T" + zt(n, t);
      }
      function Gt(n) {
        return Kt(n) + "-" + Bi(n.isoDay);
      }
      function Kt(n) {
        const { isoYear: t } = n;
        return (
          (t < 0 || t > 9999 ? rr(t) + N(6, Math.abs(t)) : N(4, t)) +
          "-" +
          Bi(n.isoMonth)
        );
      }
      function Vt(n) {
        return Bi(n.isoMonth) + "-" + Bi(n.isoDay);
      }
      function zt(n, t) {
        const r = [Bi(n.isoHour), Bi(n.isoMinute)];
        return (
          -1 !== t &&
            r.push(
              Bi(n.isoSecond) +
                ((n, t, r, e) => tr(n * Ai + t * _i + r, e))(
                  n.isoMillisecond,
                  n.isoMicrosecond,
                  n.isoNanosecond,
                  t,
                ),
            ),
          r.join(":")
        );
      }
      function Xt(n, t = 0) {
        if (1 === t) return "";
        const [r, e] = T(Math.abs(n), Vi),
          [o, i] = T(e, Ki),
          [c, u] = T(i, Gi);
        return (
          rr(n) + Bi(r) + ":" + Bi(o) + (c || u ? ":" + Bi(c) + tr(u) : "")
        );
      }
      function Qt(n, t) {
        return 1 !== t && (t > 1 || (0 === t && n !== pc))
          ? nr(n, 2 === t)
          : "";
      }
      function nr(n, t) {
        return "[" + (t ? "!" : "") + "u-ca=" + n + "]";
      }
      function tr(n, t) {
        let r = N(9, n);
        return (
          (r = void 0 === t ? r.replace(Lu, "") : r.slice(0, t)),
          r ? "." + r : ""
        );
      }
      function rr(n) {
        return n < 0 ? "-" : "+";
      }
      function er(n, t) {
        return n || t ? n.toLocaleString("fullwide", { useGrouping: 0 }) : "";
      }
      function or(n, t) {
        const { epochNanoseconds: r } = n,
          e = (t.N ? t : t(n.timeZone)).N(r),
          o = En(r, e);
        return { calendar: n.calendar, ...o, offsetNanoseconds: e };
      }
      function ir(n, t, r, e = 0, o = 0, i, c) {
        if (void 0 !== r && 1 === e && (1 === e || c)) return yn(t, r);
        const u = n.v(t);
        if (void 0 !== r && 3 !== e) {
          const n = ((n, t, r, e) => {
            const o = pn(t);
            e && (r = Ot(r));
            for (const t of n) {
              let n = on(X(t, o));
              if ((e && (n = Ot(n)), n === r)) return t;
            }
          })(u, t, r, i);
          if (void 0 !== n) return n;
          if (0 === e) throw new RangeError(Ti);
        }
        return c ? pn(t) : cr(n, t, o, u);
      }
      function cr(n, t, r = 0, e = n.v(t)) {
        if (1 === e.length) return e[0];
        if (1 === r) throw new RangeError(Ii);
        if (e.length) return e[3 === r ? 1 : 0];
        const o = pn(t),
          i = ((n, t) => {
            const r = n.N(z(t, -zi));
            return ((n) => {
              if (n > zi) throw new RangeError(Ri);
              return n;
            })(n.N(z(t, zi)) - r);
          })(n, o),
          c = i * (2 === r ? -1 : 1);
        return (e = n.v(En(o, c)))[2 === r ? 0 : e.length - 1];
      }
      function ur(n, t) {
        const r = n.v(t);
        if (r.length) return r[0];
        const e = z(pn(t), -zi);
        return n.l(e, 1);
      }
      function sr(n, t, r) {
        return it(
          ln(
            V(
              t.epochNanoseconds,
              ((n) => {
                if (xr(n)) throw new RangeError(Yi);
                return kr(n, 5);
              })(n ? Zr(r) : r),
            ),
          ),
        );
      }
      function ar(n, t, r, e, o, i = Object.create(null)) {
        const c = t(e.timeZone),
          u = n(e.calendar);
        return { ...e, ...wr(c, u, e, r ? Zr(o) : o, i) };
      }
      function fr(n, t, r, e, o = Object.create(null)) {
        const { calendar: i } = r;
        return ut(gr(n(i), r, t ? Zr(e) : e, o), i);
      }
      function lr(n, t, r, e, o) {
        const { calendar: i } = r;
        return st(mr(n(i), r, t ? Zr(e) : e, o), i);
      }
      function dr(n, t, r, e, o) {
        const i = r.calendar,
          c = n(i);
        let u = an(pr(c, r));
        t && (e = Cr(e)),
          e.sign < 0 && ((u = c.P(u, { ...Yc, months: 1 })), (u = Er(u, -1)));
        const s = c.P(u, e, o);
        return at(pr(c, s), i);
      }
      function hr(n, t, r) {
        return lt(yr(t, n ? Zr(r) : r)[0]);
      }
      function wr(n, t, r, e, o) {
        const i = kr(e, 5);
        let c = r.epochNanoseconds;
        if (xr(e)) {
          const u = Bu(r, n);
          c = V(cr(n, { ...mr(t, u, { ...e, ...Sc }, o), ...g(kc, u) }), i);
        } else (c = V(c, i)), Jn(o);
        return { epochNanoseconds: ln(c) };
      }
      function gr(n, t, r, e) {
        const [o, i] = yr(t, r);
        return fn({ ...mr(n, t, { ...r, ...Sc, days: r.days + i }, e), ...o });
      }
      function mr(n, t, r, e) {
        if (r.years || r.months || r.weeks) return n.P(t, r, e);
        Jn(e);
        const o = r.days + kr(r, 5)[0];
        return o ? an(Er(t, o)) : t;
      }
      function pr(n, t, r = 1) {
        return Er(t, r - n.day(t));
      }
      function yr(n, t) {
        const [r, e] = kr(t, 5),
          [o, i] = hn(dn(n) + e);
        return [o, r + i];
      }
      function vr(n, t, r) {
        const e = Jn(r);
        let i,
          { years: c, months: u, weeks: s, days: a } = t;
        if (((a += kr(t, 5)[0]), c || u))
          i = (function (n, t, r, e, i) {
            let [c, u, s] = n.u(t);
            if (r) {
              const [t, e] = n.m(c, u);
              (c += r),
                (u = He(t, e, n.F(c))),
                (u = o("month", u, 1, n.O(c), i));
            }
            return (
              e && ([c, u] = n.p(c, u, e)),
              (s = o("day", s, 1, n.B(c, u), i)),
              n.M(c, u, s)
            );
          })(this, n, c, u, e);
        else {
          if (!s && !a) return n;
          i = mn(n);
        }
        if (void 0 === i) throw new RangeError(Di);
        return (i += (7 * s + a) * Hi), an(Nn(i));
      }
      function br(n, t, r) {
        return (
          (n += j(r, Xc)),
          (t += C(r, Xc)) < 1 ? (n--, (t += Xc)) : t > Xc && (n++, (t -= Xc)),
          [n, t]
        );
      }
      function Mr(n, t, r) {
        if (r) {
          if (((t += r), !Number.isSafeInteger(t))) throw new RangeError(Di);
          if (r < 0) for (; t < 1; ) t += fo.call(this, --n);
          else {
            let r;
            for (; t > (r = fo.call(this, n)); ) (t -= r), n++;
          }
        }
        return [n, t];
      }
      function Er(n, t) {
        return t ? { ...n, ...Nn(mn(n) + t * Hi) } : n;
      }
      function Nr(n, t, r) {
        const e = n(r.calendar);
        return Ir(r) ? [r, e, t(r.timeZone)] : [{ ...r, ...Bc }, e];
      }
      function Or(n) {
        return n ? wt : pn;
      }
      function Rr(n) {
        return n ? v(wr, n) : gr;
      }
      function Tr(n) {
        return n ? v(Ee, n) : Ne;
      }
      function Ir(n) {
        return n && n.epochNanoseconds;
      }
      function Dr(n, t) {
        return n <= 6 - (Ir(t) ? 1 : 0);
      }
      function jr(n, t, r, e, o, i, c) {
        const u = n(Qn(c).relativeTo),
          s = Math.max(Fr(o), Fr(i));
        if (Dr(s, u))
          return dt(
            Sr(
              ((n, t, r, e) => {
                const o = V(kr(n), kr(t), e ? -1 : 1);
                if (!Number.isFinite(o[0])) throw new RangeError(Di);
                return { ...Yc, ...$r(o, r) };
              })(o, i, s, e),
            ),
          );
        if (!u) throw new RangeError(Zi);
        e && (i = Zr(i));
        const [a, f, l] = Nr(t, r, u),
          d = Rr(l),
          h = Tr(l),
          w = d(f, a, o);
        return dt(h(f, a, d(f, w, i), s));
      }
      function Cr(n) {
        return dt(Zr(n));
      }
      function Zr(n) {
        const t = {};
        for (const r of Tc) t[r] = -1 * n[r] || 0;
        return t;
      }
      function Yr(n, t = Tc) {
        let r = 0;
        for (const e of t) {
          const t = Math.sign(n[e]);
          if (t) {
            if (r && r !== t) throw new RangeError(Ci);
            r = t;
          }
        }
        return r;
      }
      function Sr(n) {
        for (const t of Cc) o(t, n[t], -Ju, Ju, 1);
        return Pr(on(kr(n), Gi)), n;
      }
      function Pr(n) {
        if (!Number.isSafeInteger(n)) throw new RangeError(ji);
      }
      function kr(n, t = 6) {
        return Y(n, t, Tc);
      }
      function $r(n, t = 6) {
        const [r, e] = n,
          o = S(e, t, Tc);
        if (((o[Tc[t]] += r * (zi / Xi[t])), !Number.isFinite(o[Tc[t]])))
          throw new RangeError(Di);
        return o;
      }
      function Ur(n, t = 5) {
        return S(n, t, Tc);
      }
      function xr(n) {
        return Boolean(Yr(n, jc));
      }
      function Fr(n) {
        let t = 9;
        for (; t > 0 && !n[Tc[t]]; t--);
        return t;
      }
      function Lr(n, t) {
        return [n, t];
      }
      function Br(n) {
        const t = Math.floor(n / Uu) * Uu;
        return [t, t + Uu];
      }
      function Jr(n) {
        const t = Xr(n);
        if (void 0 === t) throw new RangeError(ki(n));
        return t;
      }
      function Wr(n, t, r) {
        let e = Kr(Nc(n));
        if (!e || e.C) throw new RangeError(ki(n));
        return (
          t
            ? e.calendar === pc &&
              (e =
                -271821 === e.isoYear && 4 === e.isoMonth
                  ? { ...e, isoDay: 20, ...Bc }
                  : { ...e, isoDay: 1, ...Bc })
            : r && e.calendar === pc && (e = { ...e, isoYear: zc }),
          st(e.k ? _r(e) : Ar(e))
        );
      }
      function Hr(n) {
        if (n.calendar !== pc) throw new RangeError($i(n.calendar));
      }
      function qr(n, t, r = 0, e = 0) {
        const o = ce(n.timeZone),
          i = Wu(o);
        let c;
        return (
          Un(n),
          (c = n.k ? ir(i, n, t, r, e, !i.j, n.C) : ur(i, n)),
          ct(c, o, mo(n.calendar))
        );
      }
      function _r(n) {
        return Gr(fn(Un(n)));
      }
      function Ar(n) {
        return Gr(an(xn(n)));
      }
      function Gr(n) {
        return { ...n, calendar: mo(n.calendar) };
      }
      function Kr(n) {
        const t = rs.exec(n);
        return t
          ? ((n) => {
              const t = n[10],
                r = "Z" === (t || "").toUpperCase();
              return {
                isoYear: Qr(n),
                isoMonth: parseInt(n[4]),
                isoDay: parseInt(n[5]),
                ...ne(n.slice(5)),
                ...te(n[16]),
                k: Boolean(n[6]),
                C: r,
                offset: r ? void 0 : t,
              };
            })(t)
          : void 0;
      }
      function Vr(n) {
        const t = ns.exec(n);
        return t
          ? ((n) => ({
              isoYear: Qr(n),
              isoMonth: parseInt(n[4]),
              isoDay: 1,
              ...te(n[5]),
            }))(t)
          : void 0;
      }
      function zr(n) {
        const t = ts.exec(n);
        return t
          ? ((n) => ({
              isoYear: zc,
              isoMonth: parseInt(n[1]),
              isoDay: parseInt(n[2]),
              ...te(n[3]),
            }))(t)
          : void 0;
      }
      function Xr(n, t) {
        const r = os.exec(n);
        return r
          ? ((n, t) => {
              const r = n[4] || n[5];
              if (t && r) throw new RangeError($i(r));
              return ((n) => {
                if (Math.abs(n) >= zi) throw new RangeError(Oi);
                return n;
              })(
                (ie(n[2]) * Vi +
                  ie(n[3]) * Ki +
                  ie(n[4]) * Gi +
                  re(n[5] || "")) *
                  oe(n[1]),
              );
            })(r, t)
          : void 0;
      }
      function Qr(n) {
        const t = oe(n[1]),
          r = parseInt(n[2] || n[3]);
        if (t < 0 && !r) throw new RangeError($i(-0));
        return t * r;
      }
      function ne(n) {
        const t = ie(n[3]);
        return {
          ...hn(re(n[4] || ""))[0],
          isoHour: ie(n[1]),
          isoMinute: ie(n[2]),
          isoSecond: 60 === t ? 59 : t,
        };
      }
      function te(n) {
        let t, r;
        const e = [];
        if (
          (n.replace(is, (n, o, i) => {
            const c = Boolean(o),
              [u, s] = i.split("=").reverse();
            if (s) {
              if ("u-ca" === s) e.push(u), t || (t = c);
              else if (c || /[A-Z]/.test(s)) throw new RangeError($i(n));
            } else {
              if (r) throw new RangeError($i(n));
              r = u;
            }
            return "";
          }),
          e.length > 1 && t)
        )
          throw new RangeError($i(n));
        return { timeZone: r, calendar: e[0] || pc };
      }
      function re(n) {
        return parseInt(n.padEnd(9, "0"));
      }
      function ee(n) {
        return new RegExp(`^${n}$`, "i");
      }
      function oe(n) {
        return n && "+" !== n ? -1 : 1;
      }
      function ie(n) {
        return void 0 === n ? 0 : parseInt(n);
      }
      function ce(n) {
        const t = se(n);
        return "number" == typeof t
          ? Xt(t)
          : t
            ? ((n) => {
                if (as.test(n)) throw new RangeError(Mi(n));
                if (ss.test(n)) throw new RangeError(Ni);
                return n
                  .toLowerCase()
                  .split("/")
                  .map((n, t) =>
                    (n.length <= 3 || /\d/.test(n)) && !/etc|yap/.test(n)
                      ? n.toUpperCase()
                      : n.replace(/baja|dumont|[a-z]+/g, (n, r) =>
                          (n.length <= 2 && !t) || "in" === n || "chat" === n
                            ? n.toUpperCase()
                            : n.length > 2 || !r
                              ? M(n).replace(
                                  /island|noronha|murdo|rivadavia|urville/,
                                  M,
                                )
                              : n,
                        ),
                  )
                  .join("/");
              })(n)
            : $u;
      }
      function ue(n) {
        const t = se(n);
        return "number" == typeof t ? t : t ? t.resolvedOptions().timeZone : $u;
      }
      function se(n) {
        const t = Xr((n = n.toUpperCase()), 1);
        return void 0 !== t ? t : n !== $u ? us(n) : void 0;
      }
      function ae(n, t) {
        return Q(n.epochNanoseconds, t.epochNanoseconds);
      }
      function fe(n, t) {
        return Q(n.epochNanoseconds, t.epochNanoseconds);
      }
      function le(n, t) {
        return de(n, t) || he(n, t);
      }
      function de(n, t) {
        return O(mn(n), mn(t));
      }
      function he(n, t) {
        return O(dn(n), dn(t));
      }
      function we(n, t) {
        if (n === t) return 1;
        try {
          return ue(n) === ue(t);
        } catch (n) {}
      }
      function ge(n, t, r, e) {
        const o = Hn(n, e, 3, 5),
          i = Te(t.epochNanoseconds, r.epochNanoseconds, ...o);
        return dt(n ? Zr(i) : i);
      }
      function me(n, t, r, e, o, i) {
        const c = Pe(e.calendar, o.calendar),
          [u, s, a, f] = Hn(r, i, 5),
          l = e.epochNanoseconds,
          d = o.epochNanoseconds,
          h = Q(d, l);
        let w;
        if (h)
          if (u < 6) w = Te(l, d, u, s, a, f);
          else {
            const r = t(
                (function (n, t) {
                  if (!we(n, t)) throw new RangeError(Ei);
                  return n;
                })(e.timeZone, o.timeZone),
              ),
              l = n(c);
            (w = Oe(l, r, e, o, h, u, i)),
              (w = jt(w, d, u, s, a, f, l, e, wt, v(wr, r)));
          }
        else w = Yc;
        return dt(r ? Zr(w) : w);
      }
      function pe(n, t, r, e, o) {
        const i = Pe(r.calendar, e.calendar),
          [c, u, s, a] = Hn(t, o, 6),
          f = pn(r),
          l = pn(e),
          d = Q(l, f);
        let h;
        if (d)
          if (c <= 6) h = Te(f, l, c, u, s, a);
          else {
            const t = n(i);
            (h = Re(t, r, e, d, c, o)),
              (h = jt(h, l, c, u, s, a, t, r, pn, gr));
          }
        else h = Yc;
        return dt(t ? Zr(h) : h);
      }
      function ye(n, t, r, e, o) {
        const i = Pe(r.calendar, e.calendar);
        return be(t, () => n(i), r, e, ...Hn(t, o, 6, 9, 6));
      }
      function ve(n, t, r, e, o) {
        const i = Pe(r.calendar, e.calendar),
          c = Hn(t, o, 9, 9, 8),
          u = n(i),
          s = pr(u, r),
          a = pr(u, e);
        return s.isoYear === a.isoYear &&
          s.isoMonth === a.isoMonth &&
          s.isoDay === a.isoDay
          ? dt(Yc)
          : be(t, () => u, an(s), an(a), ...c, 8);
      }
      function be(n, t, r, e, o, i, c, u, s = 6) {
        const a = pn(r),
          f = pn(e);
        if (void 0 === a || void 0 === f) throw new RangeError(Di);
        let l;
        if (Q(f, a))
          if (6 === o) l = Te(a, f, o, i, c, u);
          else {
            const n = t();
            (l = n.h(r, e, o)),
              (i === s && 1 === c) || (l = jt(l, f, o, i, c, u, n, r, pn, mr));
          }
        else l = Yc;
        return dt(n ? Zr(l) : l);
      }
      function Me(n, t, r, e) {
        const [o, i, c, u] = Hn(n, e, 5, 5),
          s = Yt(Ce(t, r), Rt(i, c), u),
          a = { ...Yc, ...Ur(s, o) };
        return dt(n ? Zr(a) : a);
      }
      function Ee(n, t, r, e, o, i) {
        const c = Q(e.epochNanoseconds, r.epochNanoseconds);
        return c
          ? o < 6
            ? Ie(r.epochNanoseconds, e.epochNanoseconds, o)
            : Oe(t, n, r, e, c, o, i)
          : Yc;
      }
      function Ne(n, t, r, e, o) {
        const i = pn(t),
          c = pn(r),
          u = Q(c, i);
        return u ? (e <= 6 ? Ie(i, c, e) : Re(n, t, r, u, e, o)) : Yc;
      }
      function Oe(n, t, r, e, o, i, c) {
        const [u, s, a] = (function (n, t, r, e) {
          function o() {
            return (
              (l = { ...Er(u, a++ * -e), ...c }), (d = cr(n, l)), Q(s, d) === -e
            );
          }
          const i = Bu(t, n),
            c = g(kc, i),
            u = Bu(r, n),
            s = r.epochNanoseconds;
          let a = 0;
          const f = Ce(i, u);
          let l, d;
          if ((Math.sign(f) === -e && a++, o() && (-1 === e || o())))
            throw new RangeError(yi);
          const h = on(X(d, s));
          return [i, l, h];
        })(t, r, e, o);
        var f, l;
        return {
          ...(6 === i
            ? ((f = u), (l = s), { ...Yc, days: De(f, l) })
            : n.h(u, s, i, c)),
          ...Ur(a),
        };
      }
      function Re(n, t, r, e, o, i) {
        const [c, u, s] = ((n, t, r) => {
          let e = t,
            o = Ce(n, t);
          return (
            Math.sign(o) === -r && ((e = Er(t, -r)), (o += zi * r)), [n, e, o]
          );
        })(t, r, e);
        return { ...n.h(c, u, o, i), ...Ur(s) };
      }
      function Te(n, t, r, e, o, i) {
        return { ...Yc, ...$r(Ct(X(n, t), e, o, i), r) };
      }
      function Ie(n, t, r) {
        return { ...Yc, ...$r(X(n, t), r) };
      }
      function De(n, t) {
        return je(mn(n), mn(t));
      }
      function je(n, t) {
        return Math.trunc((t - n) / Hi);
      }
      function Ce(n, t) {
        return dn(t) - dn(n);
      }
      function Ze(n, t, r) {
        if (r <= 7) {
          let e = 0,
            o = De({ ...n, ...Bc }, { ...t, ...Bc });
          return 7 === r && ([e, o] = D(o, 7)), { ...Yc, weeks: e, days: o };
        }
        const e = this.u(n),
          o = this.u(t);
        let [i, c, u] = ((n, t, r, e, o, i, c) => {
          let u = o - t,
            s = i - r,
            a = c - e;
          if (u || s) {
            const f = Math.sign(u || s);
            let l = n.B(o, i),
              d = 0;
            if (Math.sign(a) === -f) {
              const e = l;
              ([o, i] = n.p(o, i, -f)),
                (u = o - t),
                (s = i - r),
                (l = n.B(o, i)),
                (d = f < 0 ? -e : l);
            }
            if (((a = c - Math.min(e, l) + d), u)) {
              const [e, c] = n.m(t, r),
                [a, l] = n.m(o, i);
              if (((s = a - e || Number(l) - Number(c)), Math.sign(s) === -f)) {
                const r = f < 0 && -n.O(o);
                (u = (o -= f) - t), (s = i - He(e, c, n.F(o)) + (r || n.O(o)));
              }
            }
          }
          return [u, s, a];
        })(this, ...e, ...o);
        return (
          8 === r && ((c += this.q(i, e[0])), (i = 0)),
          { ...Yc, years: i, months: c, days: u }
        );
      }
      function Ye(n) {
        return n * Xc;
      }
      function Se(n, t) {
        const r = t + n,
          e = Math.sign(n),
          o = e < 0 ? -1 : 0;
        let i = 0;
        for (let n = t; n !== r; n += e) i += fo.call(this, n + o);
        return i;
      }
      function Pe(n, t) {
        if (n !== t) throw new RangeError(bi);
        return n;
      }
      function ke(n) {
        return this.I(n)[0];
      }
      function $e(n) {
        return this.I(n)[1];
      }
      function Ue(n) {
        const [t] = this.u(n);
        return this.L(t);
      }
      function xe(n) {
        const [t] = this.u(n);
        return this.O(t);
      }
      function Fe(n) {
        const [t, r] = this.u(n);
        return this.B(t, r);
      }
      function Le(n) {
        const [t] = this.u(n);
        return this.G(t);
      }
      function Be(n) {
        const [t] = this.u(n);
        return je(this.M(t), mn(n)) + 1;
      }
      function Je(n) {
        const t = fs.exec(n);
        if (!t) throw new RangeError(wi(n));
        return [parseInt(t[1]), Boolean(t[2])];
      }
      function We(n, t) {
        return "M" + Bi(n) + (t ? "L" : "");
      }
      function He(n, t, r) {
        return n + (t || (r && n >= r) ? 1 : 0);
      }
      function qe(n, t) {
        return n - (t && n >= t ? 1 : 0);
      }
      function _e(n, t) {
        return (t + n) * (Math.sign(t) || 1) || 0;
      }
      function Ae(n) {
        return bc[Ke(n)];
      }
      function Ge(n) {
        return Ec[Ke(n)];
      }
      function Ke(n) {
        return po(n.id || pc);
      }
      function Ve(n) {
        function t(n) {
          return ((n, t) => ({
            ...Qe(n, t),
            V: n.month,
            day: parseInt(n.day),
          }))(On(r, n), e);
        }
        const r = ds(n),
          e = po(n);
        return { id: n, _: ze(t), J: Xe(t) };
      }
      function ze(n) {
        return c((t) => {
          const r = mn(t);
          return n(r);
        }, WeakMap);
      }
      function Xe(n) {
        const t = n(0).year - Vc;
        return c((r) => {
          let e,
            o = bn(r - t),
            i = 0;
          const c = [],
            u = [];
          do {
            o += 400 * Hi;
          } while ((e = n(o)).year <= r);
          do {
            if (
              ((o += (1 - e.day) * Hi),
              e.year === r && (c.push(o), u.push(e.V)),
              (o -= Hi),
              ++i > 100 || o < -Hc)
            )
              throw new RangeError(yi);
          } while ((e = n(o)).year >= r);
          return { K: c.reverse(), X: Fi(u.reverse()) };
        });
      }
      function Qe(n, t) {
        let r,
          e,
          o = no(n);
        if (n.era) {
          const i = bc[t],
            c = Mc[t] || {};
          void 0 !== i &&
            ((r =
              "islamic" === t
                ? "ah"
                : n.era
                    .normalize("NFD")
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, "")),
            "bc" === r || "b" === r
              ? (r = "bce")
              : "ad" === r || "a" === r
                ? (r = "ce")
                : "beforeroc" === r && (r = "broc"),
            (r = c[r] || r),
            (e = o),
            (o = _e(e, i[r] || 0)));
        }
        return { era: r, eraYear: e, year: o };
      }
      function no(n) {
        return parseInt(n.relatedYear || n.year);
      }
      function to(n) {
        return this._(n).day;
      }
      function ro(n) {
        const { year: t, V: r, day: e } = this._(n),
          { X: o } = this.J(t);
        return [t, o[r] + 1, e];
      }
      function eo(n, t, r) {
        return Nn(oo.call(this, n, t, r));
      }
      function oo(n, t = 1, r = 1) {
        return this.J(n).K[t - 1] + (r - 1) * Hi;
      }
      function io(n, t) {
        const r = co.call(this, n);
        return [qe(t, r), r === t];
      }
      function co(n) {
        const t = wo(this, n),
          r = wo(this, n - 1),
          e = t.length;
        if (e > r.length) {
          const n = Ge(this);
          if (n < 0) return -n;
          for (let n = 0; n < e; n++) if (t[n] !== r[n]) return n + 1;
        }
      }
      function uo(n) {
        const t = so.call(this, n);
        return t > so.call(this, n - 1) && t > so.call(this, n + 1);
      }
      function so(n) {
        return je(oo.call(this, n), oo.call(this, n + 1));
      }
      function ao(n, t) {
        const { K: r } = this.J(n);
        let e = t + 1,
          o = r;
        return (
          e > r.length && ((e = 1), (o = this.J(n + 1).K)),
          je(r[t - 1], o[e - 1])
        );
      }
      function fo(n) {
        return this.J(n).K.length;
      }
      function lo(n) {
        const t = this._(n);
        return [t.era, t.eraYear];
      }
      function ho(n, t, r) {
        const e =
          this.id && "chinese" === po(this.id)
            ? ((n, t, r) => {
                if (t)
                  switch (n) {
                    case 1:
                      return 1651;
                    case 2:
                      return r < 30 ? 1947 : 1765;
                    case 3:
                      return r < 30 ? 1966 : 1955;
                    case 4:
                      return r < 30 ? 1963 : 1944;
                    case 5:
                      return r < 30 ? 1971 : 1952;
                    case 6:
                      return r < 30 ? 1960 : 1941;
                    case 7:
                      return r < 30 ? 1968 : 1938;
                    case 8:
                      return r < 30 ? 1957 : 1718;
                    case 9:
                      return 1832;
                    case 10:
                      return 1870;
                    case 11:
                      return 1814;
                    case 12:
                      return 1890;
                  }
                return 1972;
              })(n, t, r)
            : zc;
        let [o, i, c] = ro.call(this, { isoYear: e, isoMonth: Xc, isoDay: 31 });
        const u = co.call(this, o),
          s = i === u;
        1 === (O(n, qe(i, u)) || O(Number(t), Number(s)) || O(r, c)) && o--;
        for (let e = 0; e < 100; e++) {
          const i = o - e,
            c = co.call(this, i),
            u = He(n, t, c);
          if (t === (u === c) && r <= ao.call(this, i, u)) return [i, u];
        }
      }
      function wo(n, t) {
        return Object.keys(n.J(t).X);
      }
      function go(n) {
        return mo(Nc(n));
      }
      function mo(n) {
        if ((n = n.toLowerCase()) !== pc && n !== yc) {
          const t = ds(n).resolvedOptions().calendar;
          if (po(n) !== po(t)) throw new RangeError(vi(n));
          return t;
        }
        return n;
      }
      function po(n) {
        return "islamicc" === n && (n = "islamic"), n.split("-")[0];
      }
      function yo(n, t) {
        return (r) =>
          r === pc
            ? n
            : r === yc || r === vc
              ? Object.assign(Object.create(n), { id: r })
              : Object.assign(Object.create(t), ls(r));
      }
      function vo(n, t, r, e) {
        const o = bo(r, e, hc, [], oc);
        if (void 0 !== o.timeZone) {
          const e = r.ee(o),
            i = Eo(o),
            c = n(o.timeZone);
          return {
            epochNanoseconds: ir(
              t(c),
              { ...e, ...i },
              void 0 !== o.offset ? Jr(o.offset) : void 0,
            ),
            timeZone: c,
          };
        }
        return { ...r.ee(o), ...Bc };
      }
      function bo(n, t, r, e = [], o = []) {
        return Mo(t, [...n.fields(r), ...o].sort(), e);
      }
      function Mo(n, t, r, e = !r) {
        const o = {};
        let i,
          c = 0;
        for (const e of t) {
          if (e === i) throw new RangeError(ii(e));
          if ("constructor" === e || "__proto__" === e)
            throw new RangeError(oi(e));
          let t = n[e];
          if (void 0 !== t) (c = 1), js[e] && (t = js[e](t, e)), (o[e] = t);
          else if (r) {
            if (r.includes(e)) throw new TypeError(ei(e));
            o[e] = mc[e];
          }
          i = e;
        }
        if (e && !c) throw new TypeError(ci(t));
        return o;
      }
      function Eo(n, t) {
        return Bn(Cs({ ...mc, ...n }), t);
      }
      function No(n, t) {
        const r = bo(n, t, gc);
        return n.te(r);
      }
      function Oo(n, t, r) {
        const e = bo(n, t, dc);
        return n.ne(e, r);
      }
      function Ro(n, t, r, e, o) {
        (t = g((r = n.fields(r)), t)), (e = Mo(e, (o = n.fields(o)), []));
        let i = n.oe(t, e);
        return (i = Mo(i, [...r, ...o].sort(), [])), n.ee(i);
      }
      function To(n, t) {
        const r = Jn(t),
          e = Zo(this, n),
          o = Yo(this, n, e, r),
          i = So(this, n, o, e, r);
        return st(an(this.U(e, o, i)), this.id || pc);
      }
      function Io(n, t) {
        const r = Jn(t),
          e = Zo(this, n),
          o = Yo(this, n, e, r);
        return at(sn(this.U(e, o, 1)), this.id || pc);
      }
      function Do(n, t) {
        const r = Jn(t);
        let e,
          o,
          i,
          c = void 0 !== n.eraYear || void 0 !== n.year ? Zo(this, n) : void 0;
        const u = !this.id;
        if ((void 0 === c && u && (c = zc), void 0 !== c)) {
          const t = Yo(this, n, c, r);
          e = So(this, n, t, c, r);
          const u = this.F(c);
          (o = qe(t, u)), (i = t === u);
        } else {
          if (void 0 === n.monthCode) throw new TypeError(mi);
          if (
            (([o, i] = Je(n.monthCode)),
            this.id && this.id !== yc && this.id !== vc)
          )
            if (this.id && "coptic" === po(this.id) && 0 === r) {
              const t = i || 13 !== o ? 30 : 6;
              (e = n.day), (e = R(e, 1, t));
            } else if (this.id && "chinese" === po(this.id) && 0 === r) {
              const t =
                !i || (1 !== o && 9 !== o && 10 !== o && 11 !== o && 12 !== o)
                  ? 30
                  : 29;
              (e = n.day), (e = R(e, 1, t));
            } else e = n.day;
          else e = So(this, n, Yo(this, n, zc, r), zc, r);
        }
        const s = this.R(o, i, e);
        if (!s) throw new RangeError("Cannot guess year");
        const [a, f] = s;
        return ft(an(this.U(a, f, e)), this.id || pc);
      }
      function jo(n) {
        return Ae(this) && n.includes("year") ? [...n, ...ic] : n;
      }
      function Co(n, t) {
        const r = Object.assign(Object.create(null), n);
        return (
          Po(r, t, ac),
          Ae(this) && (Po(r, t, cc), this.id === vc && Po(r, t, wc, ic)),
          r
        );
      }
      function Zo(n, t) {
        const r = Ae(n),
          e = Mc[n.id || ""] || {};
        let { era: o, eraYear: i, year: c } = t;
        if (void 0 !== o || void 0 !== i) {
          if (void 0 === o || void 0 === i) throw new TypeError(fi);
          if (!r) throw new RangeError(ai);
          const n = r[e[o] || o];
          if (void 0 === n) throw new RangeError(di(o));
          const t = _e(i, n);
          if (void 0 !== c && c !== t) throw new RangeError(li);
          c = t;
        } else if (void 0 === c) throw new TypeError(hi(r));
        return c;
      }
      function Yo(n, t, r, e) {
        let { month: i, monthCode: c } = t;
        if (void 0 !== c) {
          const t = ((n, t, r, e) => {
            const o = n.F(r),
              [i, c] = Je(t);
            let u = He(i, c, o);
            if (c) {
              const t = Ge(n);
              if (void 0 === t) throw new RangeError(pi);
              if (t > 0) {
                if (u > t) throw new RangeError(pi);
                if (void 0 === o) {
                  if (1 === e) throw new RangeError(pi);
                  u--;
                }
              } else {
                if (u !== -t) throw new RangeError(pi);
                if (void 0 === o && 1 === e) throw new RangeError(pi);
              }
            }
            return u;
          })(n, c, r, e);
          if (void 0 !== i && i !== t) throw new RangeError(gi);
          (i = t), (e = 1);
        } else if (void 0 === i) throw new TypeError(mi);
        return o("month", i, 1, n.O(r), e);
      }
      function So(n, t, r, o, i) {
        return e(t, "day", 1, n.B(o, r), i);
      }
      function Po(n, t, r, e) {
        let o = 0;
        const i = [];
        for (const n of r) void 0 !== t[n] ? (o = 1) : i.push(n);
        if ((Object.assign(n, t), o)) for (const t of e || i) delete n[t];
      }
      function ko(n) {
        const t = Ns(n.calendar),
          [r, e, o] = t.u(n),
          [i, c] = t.m(r, e);
        return { year: r, monthCode: We(i, c), day: o };
      }
      function $o(n, t) {
        return ut(Bu(t, n));
      }
      function Uo(n, t) {
        return st(Bu(t, n));
      }
      function xo(n, t) {
        return lt(Bu(t, n));
      }
      function Fo(n, t, r) {
        const e = new Set(r);
        return (o, i) => {
          const c = r && m(o, r);
          if (
            !m(
              (o = ((n, t) => {
                const r = {};
                for (const e in t) n.has(e) || (r[e] = t[e]);
                return r;
              })(e, o)),
              n,
            )
          ) {
            if (i && c) throw new TypeError("Invalid formatting options");
            o = { ...t, ...o };
          }
          return (
            r &&
              ((o.timeZone = $u),
              ["full", "long"].includes(o.ie) && (o.ie = "medium")),
            o
          );
        };
      }
      function Lo(n, t = Bo, r = 0) {
        const [e, , , o] = n;
        return (i, c = ua, ...u) => {
          const s = t(o && o(...u), i, c, e, r),
            a = s.resolvedOptions();
          return [s, ...Wo(n, a, u)];
        };
      }
      function Bo(n, t, r, e, o) {
        if (((r = e(r, o)), n)) {
          if (void 0 !== r.timeZone) throw new TypeError(xi);
          r.timeZone = n;
        }
        return new Kc(t, r);
      }
      function Jo() {
        return (
          new Kc(void 0, { calendar: pc }).resolvedOptions().calendar === pc
        );
      }
      function Wo(n, t, r) {
        const [, e, o] = n;
        return r.map(
          (n) => (
            n.calendar &&
              ((n, t, r) => {
                if ((r || n !== pc) && n !== t) throw new RangeError(bi);
              })(n.calendar, t.calendar, o),
            e(n, t)
          ),
        );
      }
      function Ho(n, t) {
        return { ...n, calendar: t };
      }
      function qo(n) {
        const t = _o();
        return En(t, n.N(t));
      }
      function _o() {
        return rn(Date.now(), Ai);
      }
      function Ao() {
        return new Kc().resolvedOptions().timeZone;
      }
      r.d(t, { fE: () => Yf });
      const Go = (n, t) => `Non-integer ${n}: ${t}`,
        Ko = (n, t) => `Non-positive ${n}: ${t}`,
        Vo = (n, t) => `Non-finite ${n}: ${t}`,
        zo = (n) => `Cannot convert bigint to ${n}`,
        Xo = (n) => `Invalid bigint: ${n}`,
        Qo = "Cannot convert Symbol to string",
        ni = "Invalid object",
        ti = (n, t, r, e, o) =>
          o
            ? ti(n, o[t], o[r], o[e])
            : ri(n, t) + `; must be between ${r}-${e}`,
        ri = (n, t) => `Invalid ${n}: ${t}`,
        ei = (n) => `Missing ${n}`,
        oi = (n) => `Invalid field ${n}`,
        ii = (n) => `Duplicate field ${n}`,
        ci = (n) => "No valid fields: " + n.join(),
        ui = (n, t, r) => ri(n, t) + "; must be " + Object.keys(r).join(),
        si = "Invalid calling context",
        ai = "Forbidden era/eraYear",
        fi = "Mismatching era/eraYear",
        li = "Mismatching year/eraYear",
        di = (n) => `Invalid era: ${n}`,
        hi = (n) => "Missing year" + (n ? "/era/eraYear" : ""),
        wi = (n) => `Invalid monthCode: ${n}`,
        gi = "Mismatching month/monthCode",
        mi = "Missing month/monthCode",
        pi = "Invalid leap month",
        yi = "Invalid protocol results",
        vi = (n) => ri("Calendar", n),
        bi = "Mismatching Calendars",
        Mi = (n) => ri("TimeZone", n),
        Ei = "Mismatching TimeZones",
        Ni = "Forbidden ICU TimeZone",
        Oi = "Out-of-bounds offset",
        Ri = "Out-of-bounds TimeZone gap",
        Ti = "Invalid TimeZone offset",
        Ii = "Ambiguous offset",
        Di = "Out-of-bounds date",
        ji = "Out-of-bounds duration",
        Ci = "Cannot mix duration signs",
        Zi = "Missing relativeTo",
        Yi = "Cannot use large units",
        Si = "Required smallestUnit or largestUnit",
        Pi = "smallestUnit > largestUnit",
        ki = (n) => `Cannot parse: ${n}`,
        $i = (n) => `Invalid substring: ${n}`,
        Ui = "Mismatching types for formatting",
        xi = "Cannot specify TimeZone",
        Fi = v(h, (n, t) => t),
        Li = v(h, (n, t, r) => r),
        Bi = v(N, 2),
        Ji = {
          nanosecond: 0,
          microsecond: 1,
          millisecond: 2,
          second: 3,
          minute: 4,
          hour: 5,
          day: 6,
          week: 7,
          month: 8,
          year: 9,
        },
        Wi = Object.keys(Ji),
        Hi = 864e5,
        qi = 1e3,
        _i = 1e3,
        Ai = 1e6,
        Gi = 1e9,
        Ki = 6e10,
        Vi = 36e11,
        zi = 864e11,
        Xi = [1, _i, Ai, Gi, Ki, Vi, zi],
        Qi = Wi.slice(0, 6),
        nc = E(Qi),
        tc = ["offset"],
        rc = ["timeZone"],
        ec = Qi.concat(tc),
        oc = ec.concat(rc),
        ic = ["era", "eraYear"],
        cc = ic.concat(["year"]),
        uc = ["year"],
        sc = ["monthCode"],
        ac = ["month"].concat(sc),
        fc = ["day"],
        lc = ac.concat(uc),
        dc = sc.concat(uc),
        hc = fc.concat(lc),
        wc = fc.concat(ac),
        gc = fc.concat(sc),
        mc = Li(Qi, 0),
        pc = "iso8601",
        yc = "gregory",
        vc = "japanese",
        bc = {
          [yc]: { "gregory-inverse": -1, gregory: 0 },
          [vc]: {
            "japanese-inverse": -1,
            japanese: 0,
            meiji: 1867,
            taisho: 1911,
            showa: 1925,
            heisei: 1988,
            reiwa: 2018,
          },
          ethiopic: { ethioaa: 0, ethiopic: 5500 },
          coptic: { "coptic-inverse": -1, coptic: 0 },
          roc: { "roc-inverse": -1, roc: 0 },
          buddhist: { be: 0 },
          islamic: { ah: 0 },
          indian: { saka: 0 },
          persian: { ap: 0 },
        },
        Mc = {
          [yc]: { bce: "gregory-inverse", ce: "gregory" },
          [vc]: { bce: "japanese-inverse", ce: "japanese" },
          ethiopic: { era0: "ethioaa", era1: "ethiopic" },
          coptic: { era0: "coptic-inverse", era1: "coptic" },
          roc: { broc: "roc-inverse", minguo: "roc" },
        },
        Ec = { chinese: 13, dangi: 13, hebrew: -6 },
        Nc = v(F, "string"),
        Oc = v(F, "boolean"),
        Rc = v(F, "number"),
        Tc = Wi.map((n) => n + "s"),
        Ic = E(Tc),
        Dc = Tc.slice(0, 6),
        jc = Tc.slice(6),
        Cc = jc.slice(1),
        Zc = Fi(Tc),
        Yc = Li(Tc, 0),
        Sc = Li(Dc, 0),
        Pc = v(y, Tc),
        kc = [
          "isoNanosecond",
          "isoMicrosecond",
          "isoMillisecond",
          "isoSecond",
          "isoMinute",
          "isoHour",
        ],
        $c = ["isoDay", "isoMonth", "isoYear"],
        Uc = kc.concat($c),
        xc = E($c),
        Fc = E(kc),
        Lc = E(Uc),
        Bc = Li(Fc, 0),
        Jc = v(y, Uc),
        Wc = 1e8,
        Hc = Wc * Hi,
        qc = [Wc, 0],
        _c = [-Wc, 0],
        Ac = 275760,
        Gc = -271821,
        Kc = Intl.DateTimeFormat,
        Vc = 1970,
        zc = 1972,
        Xc = 12,
        Qc = bn(1868, 9, 8),
        nu = c($n, WeakMap),
        tu = "smallestUnit",
        ru = "unit",
        eu = "roundingMode",
        ou = "roundingIncrement",
        iu = "fractionalSecondDigits",
        cu = "relativeTo",
        uu = "direction",
        su = { constrain: 0, reject: 1 },
        au = Object.keys(su),
        fu = { compatible: 0, reject: 1, earlier: 2, later: 3 },
        lu = { reject: 0, use: 1, prefer: 2, ignore: 3 },
        du = { auto: 0, never: 1, critical: 2, always: 3 },
        hu = { auto: 0, never: 1, critical: 2 },
        wu = { auto: 0, never: 1 },
        gu = {
          floor: 0,
          halfFloor: 1,
          ceil: 2,
          halfCeil: 3,
          trunc: 4,
          halfTrunc: 5,
          expand: 6,
          halfExpand: 7,
          halfEven: 8,
        },
        mu = { previous: -1, next: 1 },
        pu = v(rt, tu),
        yu = v(rt, "largestUnit"),
        vu = v(rt, ru),
        bu = v(et, "overflow", su),
        Mu = v(et, "disambiguation", fu),
        Eu = v(et, "offset", lu),
        Nu = v(et, "calendarName", du),
        Ou = v(et, "timeZoneName", hu),
        Ru = v(et, "offset", wu),
        Tu = v(et, eu, gu),
        Iu = "PlainYearMonth",
        Du = "PlainMonthDay",
        ju = "PlainDate",
        Cu = "PlainDateTime",
        Zu = "PlainTime",
        Yu = "ZonedDateTime",
        Su = "Instant",
        Pu = "Duration",
        ku = [
          Math.floor,
          (n) => (Z(n) ? Math.floor(n) : Math.round(n)),
          Math.ceil,
          (n) => (Z(n) ? Math.ceil(n) : Math.round(n)),
          Math.trunc,
          (n) => (Z(n) ? Math.trunc(n) || 0 : Math.round(n)),
          (n) => (n < 0 ? Math.floor(n) : Math.ceil(n)),
          (n) => Math.sign(n) * Math.round(Math.abs(n)) || 0,
          (n) => (Z(n) ? (n = Math.trunc(n) || 0) + (n % 2) : Math.round(n)),
        ],
        $u = "UTC",
        Uu = 5184e3,
        xu = vn(1847),
        Fu = vn(
          (() => {
            const n = new Date();
            return (0 === n.getTime() ? 2040 : n.getUTCFullYear()) + 10;
          })(),
        ),
        Lu = /0+$/,
        Bu = c(or, WeakMap),
        Ju = 2 ** 32 - 1,
        Wu = c((n) => {
          const t = se(n);
          return "object" == typeof t ? new qu(t) : new Hu(t || 0);
        });
      class Hu {
        constructor(n) {
          this.j = n;
        }
        N() {
          return this.j;
        }
        v(n) {
          return (
            ((n) => {
              const t = pn({ ...n, ...Bc });
              if (!t || Math.abs(t[0]) > 1e8) throw new RangeError(Di);
            })(n),
            [yn(n, this.j)]
          );
        }
        l() {}
      }
      class qu {
        constructor(n) {
          this.ae = ((n) => {
            function t(n) {
              const t = R(n, i, u),
                [c, s] = Br(t),
                a = e(c),
                f = e(s);
              return a === f ? a : r(o(c, s), a, f, n);
            }
            function r(t, r, e, o) {
              let i, c;
              for (
                ;
                (void 0 === o ||
                  void 0 === (i = o < t[0] ? r : o >= t[1] ? e : void 0)) &&
                (c = t[1] - t[0]);
              ) {
                const r = t[0] + Math.floor(c / 2);
                n(r) === e ? (t[1] = r) : (t[0] = r + 1);
              }
              return i;
            }
            const e = c(n),
              o = c(Lr);
            let i = xu,
              u = Fu;
            return {
              se(n) {
                const r = t(n - 86400),
                  e = t(n + 86400),
                  o = n - r,
                  i = n - e;
                if (r === e) return [o];
                const c = t(o);
                return c === t(i) ? [n - c] : r > e ? [o, i] : [];
              },
              ue: t,
              l(n, t) {
                const c = R(n, i, u);
                let [s, a] = Br(c);
                const f = Uu * t,
                  l =
                    t < 0
                      ? () => a > i || ((i = c), 0)
                      : () => s < u || ((u = c), 0);
                for (; l(); ) {
                  const i = e(s),
                    c = e(a);
                  if (i !== c) {
                    const e = o(s, a);
                    r(e, i, c);
                    const u = e[0];
                    if ((O(u, n) || 1) === t) return u;
                  }
                  (s += f), (a += f);
                }
              },
            };
          })(
            ((n) => (t) => {
              const r = On(n, t * qi);
              return (
                vn(
                  no(r),
                  parseInt(r.month),
                  parseInt(r.day),
                  parseInt(r.hour),
                  parseInt(r.minute),
                  parseInt(r.second),
                ) - t
              );
            })(n),
          );
        }
        N(n) {
          return this.ae.ue(wn(n)) * Gi;
        }
        v(n) {
          const [t, r] = [
            vn(
              (e = n).isoYear,
              e.isoMonth,
              e.isoDay,
              e.isoHour,
              e.isoMinute,
              e.isoSecond,
            ),
            e.isoMillisecond * Ai + e.isoMicrosecond * _i + e.isoNanosecond,
          ];
          var e;
          return this.ae.se(t).map((n) => ln(z(rn(n, Gi), r)));
        }
        l(n, t) {
          const [r, e] = gn(n),
            o = this.ae.l(r + (t > 0 || e ? 1 : 0), t);
          if (void 0 !== o) return rn(o, Gi);
        }
      }
      const _u = "([+-])",
        Au = "(?:[.,](\\d{1,9}))?",
        Gu = `(?:(?:${_u}(\\d{6}))|(\\d{4}))-?(\\d{2})`,
        Ku = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + Au + ")?)?",
        Vu = _u + Ku,
        zu = Gu + "-?(\\d{2})(?:[T ]" + Ku + "(Z|" + Vu + ")?)?",
        Xu = "\\[(!?)([^\\]]*)\\]",
        Qu = `((?:${Xu}){0,9})`,
        ns = ee(Gu + Qu),
        ts = ee("(?:--)?(\\d{2})-?(\\d{2})" + Qu),
        rs = ee(zu + Qu),
        es = ee("T?" + Ku + "(?:" + Vu + ")?" + Qu),
        os = ee(Vu),
        is = new RegExp(Xu, "g"),
        cs = ee(
          `${_u}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${Au}H)?(?:(\\d+)${Au}M)?(?:(\\d+)${Au}S)?)?`,
        ),
        us = c(
          (n) =>
            new Kc("en", {
              calendar: pc,
              timeZone: n,
              era: "short",
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: 0,
            }),
        ),
        ss =
          /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/,
        as = /[^\w\/:+-]+/,
        fs = /^M(\d{2})(L?)$/,
        ls = c(Ve),
        ds = c(
          (n) =>
            new Kc("en", {
              calendar: n,
              timeZone: $u,
              era: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
              hour12: 0,
            }),
        ),
        hs = {
          P: vr,
          h: Ze,
          ee: To,
          ne: Io,
          te: Do,
          fields: jo,
          oe: Co,
          inLeapYear: Ue,
          monthsInYear: xe,
          daysInMonth: Fe,
          daysInYear: Le,
          dayOfYear: Be,
          era(n) {
            return this.$(n)[0];
          },
          eraYear(n) {
            return this.$(n)[1];
          },
          monthCode(n) {
            const [t, r] = this.u(n),
              [e, o] = this.m(t, r);
            return We(e, o);
          },
          dayOfWeek: Pn,
          daysInWeek: function () {
            return 7;
          },
        },
        ws = { u: Tn, $: kn, m: In },
        gs = { dayOfYear: Be, u: Tn, M: bn },
        ms = Object.assign({}, gs, {
          weekOfYear: ke,
          yearOfWeek: $e,
          I(n) {
            function t(n) {
              return (7 - n < e ? 7 : 0) - n;
            }
            function r(n) {
              const r = Yn(d + n),
                e = n || 1,
                o = t(I(s + r * e, 7));
              return (f = (r + (o - a) * e) / 7);
            }
            const e = this.id ? 1 : 4,
              o = Pn(n),
              i = this.dayOfYear(n),
              c = I(o - 1, 7),
              u = i - 1,
              s = I(c - u, 7),
              a = t(s);
            let f,
              l = Math.floor((u - a) / 7) + 1,
              d = n.isoYear;
            return (
              l ? l > r(0) && ((l = 1), d++) : ((l = r(-1)), d--), [l, d, f]
            );
          },
        }),
        ps = Object.assign({}, hs, ms, {
          u: Tn,
          $: kn,
          m: In,
          R: Dn,
          L: Sn,
          F: b,
          O: Cn,
          q: Ye,
          B: Zn,
          G: Yn,
          U: jn,
          M: bn,
          p: br,
          year: (n) => n.isoYear,
          month: (n) => n.isoMonth,
          day: Rn,
        }),
        ys = { u: ro, $: lo, m: io },
        vs = { dayOfYear: Be, u: ro, M: oo },
        bs = { I: () => [] },
        Ms = Object.assign({}, vs, bs, { weekOfYear: ke, yearOfWeek: $e }),
        Es = Object.assign({}, hs, Ms, {
          u: ro,
          $: lo,
          m: io,
          R: ho,
          L: uo,
          F: co,
          O: fo,
          q: Se,
          B: ao,
          G: so,
          U: eo,
          M: oo,
          p: Mr,
          year(n) {
            return this._(n).year;
          },
          month(n) {
            const { year: t, V: r } = this._(n),
              { X: e } = this.J(t);
            return e[r] + 1;
          },
          day: to,
        }),
        Ns = yo(ws, ys),
        Os = yo(ps, Es),
        Rs = {
          era: W,
          eraYear: _,
          year: _,
          month: G,
          monthCode(n) {
            const t = W(n);
            return Je(t), t;
          },
          day: G,
        },
        Ts = Li(Qi, _),
        Is = Li(Tc, A),
        Ds = {
          offset(n) {
            const t = W(n);
            return Jr(t), t;
          },
        },
        js = Object.assign({}, Rs, Ts, Is, Ds),
        Cs = v(w, Qi, kc),
        Zs = v(w, kc, Qi),
        Ys = "numeric",
        Ss = ["timeZoneName"],
        Ps = { month: Ys, day: Ys },
        ks = { year: Ys, month: Ys },
        $s = Object.assign({}, ks, { day: Ys }),
        Us = { hour: Ys, minute: Ys, second: Ys },
        xs = Object.assign({}, $s, Us),
        Fs = Object.assign({}, xs, { timeZoneName: "short" }),
        Ls = Object.keys(ks),
        Bs = Object.keys(Ps),
        Js = Object.keys($s),
        Ws = Object.keys(Us),
        Hs = ["dateStyle"],
        qs = Ls.concat(Hs),
        _s = Bs.concat(Hs),
        As = Js.concat(Hs, ["weekday"]),
        Gs = Ws.concat(["dayPeriod", "timeStyle", "fractionalSecondDigits"]),
        Ks = As.concat(Gs),
        Vs = Ss.concat(Gs),
        zs = Ss.concat(As),
        Xs = Ss.concat(["day", "weekday"], Gs),
        Qs = Ss.concat(["year", "weekday"], Gs),
        na = Fo(Ks, xs),
        ta = Fo(Ks, Fs),
        ra = Fo(Ks, xs, Ss),
        ea = Fo(As, $s, Vs),
        oa = Fo(Gs, Us, zs),
        ia = Fo(qs, ks, Xs),
        ca = Fo(_s, Ps, Qs),
        ua = {},
        sa = Jo(),
        aa = [na, ht],
        fa = [
          ta,
          ht,
          0,
          (n, t) => {
            const r = n.timeZone;
            if (t && t.timeZone !== r) throw new RangeError(Ei);
            return r;
          },
        ],
        la = [ra, mn],
        da = [ea, mn],
        ha = [oa, (n) => dn(n) / Ai],
        wa = [ia, mn, sa],
        ga = [ca, mn, sa];
      function ma(n, t, r, e, o, i) {
        function c(...n) {
          if (!(this instanceof c)) throw new TypeError(si);
          {
            const r = t(...n);
            Wa(this, r), ya(this, r, i);
          }
        }
        function l(n, t) {
          return Object.defineProperties(function (...t) {
            return n.call(this, h(this), ...t);
          }, u(t));
        }
        function h(t) {
          const r = Ja(t);
          if (!r || r.branding !== n) throw new TypeError(si);
          return r;
        }
        return (
          Object.defineProperties(c.prototype, {
            ...a(d(l, r)),
            ...s(d(l, e)),
            ...f("Temporal." + n),
          }),
          Object.defineProperties(c, { ...s(o), ...u(n) }),
          [
            c,
            (n) => {
              const t = Object.create(c.prototype);
              return Wa(t, n), ya(t, n, i), t;
            },
            h,
          ]
        );
      }
      function pa(n) {
        if (Ja(n) || void 0 !== n.calendar || void 0 !== n.timeZone)
          throw new TypeError("Invalid bag");
        return n;
      }
      function ya(n, t, r) {
        "dbg" === ya.name &&
          Object.defineProperty(n, "o", {
            value: r(t),
            writable: 0,
            enumerable: 0,
            configurable: 0,
          });
      }
      function va(n) {
        return ba(n) || pc;
      }
      function ba(n) {
        const { calendar: t } = n;
        if (void 0 !== t) return Ma(t);
      }
      function Ma(n) {
        if (i(n)) {
          const { calendar: t } = Ja(n) || {};
          if (!t) throw new TypeError(vi(n));
          return t;
        }
        return ((n) =>
          mo(
            (function (n) {
              const t = Kr(n) || Vr(n) || zr(n);
              return t ? t.calendar : n;
            })(Nc(n)),
          ))(n);
      }
      function Ea(n) {
        const t = {};
        for (const r in n)
          t[r] = (n) => {
            const { calendar: t } = n;
            return Os(t)[r](n);
          };
        return t;
      }
      function Na() {
        throw new TypeError("Cannot use valueOf");
      }
      function Oa(n) {
        if (i(n)) {
          const { timeZone: t } = Ja(n) || {};
          if (!t) throw new TypeError(Mi(n));
          return t;
        }
        return ((n) =>
          ce(
            (function (n) {
              const t = Kr(n);
              return (t && (t.timeZone || (t.C && $u) || t.offset)) || n;
            })(Nc(n)),
          ))(n);
      }
      function Ra(n) {
        if (i(n)) {
          const t = Ja(n);
          return t && t.branding === Pu
            ? t
            : (function (n) {
                const t = Mo(n, Ic);
                return dt(Sr({ ...Yc, ...t }));
              })(n);
        }
        return (function (n) {
          const t = ((n) => {
            const t = cs.exec(n);
            return t
              ? ((n) => {
                  function t(n, t, i) {
                    let c = 0,
                      u = 0;
                    if ((i && ([c, o] = T(o, Xi[i])), void 0 !== n)) {
                      if (e) throw new RangeError($i(n));
                      (u = ((n) => {
                        const t = parseInt(n);
                        if (!Number.isFinite(t)) throw new RangeError($i(n));
                        return t;
                      })(n)),
                        (r = 1),
                        t && ((o = re(t) * (Xi[i] / Gi)), (e = 1));
                    }
                    return c + u;
                  }
                  let r = 0,
                    e = 0,
                    o = 0,
                    i = {
                      ...l(Tc, [
                        t(n[2]),
                        t(n[3]),
                        t(n[4]),
                        t(n[5]),
                        t(n[6], n[7], 5),
                        t(n[8], n[9], 4),
                        t(n[10], n[11], 3),
                      ]),
                      ...S(o, 2, Tc),
                    };
                  if (!r) throw new RangeError(ci(Tc));
                  return oe(n[1]) < 0 && (i = Zr(i)), i;
                })(t)
              : void 0;
          })(Nc(n));
          if (!t) throw new RangeError(ki(n));
          return dt(Sr(t));
        })(n);
      }
      function Ta(n) {
        if (void 0 !== n) {
          if (i(n)) {
            const t = Ja(n) || {};
            switch (t.branding) {
              case Yu:
              case ju:
                return t;
              case Cu:
                return st(t);
            }
            const r = va(n);
            return { ...vo(Oa, Wu, Os(r), n), calendar: r };
          }
          return (function (n) {
            const t = Kr(Nc(n));
            if (!t) throw new RangeError(ki(n));
            if (t.timeZone) return qr(t, t.offset ? Jr(t.offset) : void 0);
            if (t.C) throw new RangeError(ki(n));
            return Ar(t);
          })(n);
        }
      }
      function Ia(n, t) {
        if (i(n)) {
          const r = Ja(n) || {};
          switch (r.branding) {
            case Zu:
              return Jn(t), r;
            case Cu:
              return Jn(t), lt(r);
            case Yu:
              return Jn(t), xo(Wu, r);
          }
          return (function (n, t) {
            return lt(Eo(Mo(n, nc, [], 1), Jn(t)));
          })(n, t);
        }
        const r = (function (n) {
          let t,
            r = ((n) => {
              const t = es.exec(n);
              return t ? (te(t[10]), ne(t)) : void 0;
            })(Nc(n));
          if (!r) {
            if (((r = Kr(n)), !r)) throw new RangeError(ki(n));
            if (!r.k) throw new RangeError(ki(n));
            if (r.C) throw new RangeError($i("Z"));
            Hr(r);
          }
          if ((t = Vr(n)) && Fn(t)) throw new RangeError(ki(n));
          if ((t = zr(n)) && Fn(t)) throw new RangeError(ki(n));
          return lt(Bn(r, 1));
        })(n);
        return Jn(t), r;
      }
      function Da(n) {
        return void 0 === n ? void 0 : Ia(n);
      }
      function ja(n, t) {
        if (i(n)) {
          const r = Ja(n) || {};
          switch (r.branding) {
            case Cu:
              return Jn(t), r;
            case ju:
              return Jn(t), ut({ ...r, ...Bc });
            case Yu:
              return Jn(t), $o(Wu, r);
          }
          return (function (n, t, r) {
            const e = bo(n, t, hc, [], Qi),
              o = Jn(r);
            return ut(fn({ ...n.ee(e, tt(o)), ...Eo(e, o) }));
          })(Os(va(n)), n, t);
        }
        const r = (function (n) {
          const t = Kr(Nc(n));
          if (!t || t.C) throw new RangeError(ki(n));
          return ut(_r(t));
        })(n);
        return Jn(t), r;
      }
      function Ca(n, t) {
        if (i(n)) {
          const r = Ja(n);
          if (r && r.branding === Du) return Jn(t), r;
          const e = ba(n);
          return (function (n, t, r, e) {
            const o = bo(n, r, hc, fc);
            return (
              t &&
                void 0 !== o.month &&
                void 0 === o.monthCode &&
                void 0 === o.year &&
                (o.year = zc),
              n.te(o, e)
            );
          })(Os(e || pc), !e, n, t);
        }
        const r = (function (n, t) {
          const r = zr(Nc(t));
          if (r) return Hr(r), ft(xn(r));
          const e = Wr(t, 0, 1),
            { calendar: o } = e,
            i = n(o),
            [c, u, s] = i.u(e),
            [a, f] = i.m(c, u),
            [l, d] = i.R(a, f, s);
          return ft(an(i.U(l, d, s)), o);
        })(Os, n);
        return Jn(t), r;
      }
      function Za(n, t) {
        if (i(n)) {
          const r = Ja(n);
          return r && r.branding === Iu
            ? (Jn(t), r)
            : (function (n, t, r, e) {
                const o = bo(n, t, lc, e);
                return n.ne(o, r);
              })(Os(va(n)), n, t);
        }
        const r = (function (n, t) {
          const r = Vr(Nc(t));
          if (r) return Hr(r), at(sn(xn(r)));
          const e = Wr(t, 1);
          return at(pr(n(e.calendar), e));
        })(Os, n);
        return Jn(t), r;
      }
      function Ya(n, t) {
        if (i(n)) {
          const r = Ja(n) || {};
          switch (r.branding) {
            case ju:
              return Jn(t), r;
            case Cu:
              return Jn(t), st(r);
            case Yu:
              return Jn(t), Uo(Wu, r);
          }
          return (function (n, t, r, e = []) {
            const o = bo(n, t, hc, e);
            return n.ee(o, r);
          })(Os(va(n)), n, t);
        }
        const r = Wr(n);
        return Jn(t), r;
      }
      function Sa(n, t) {
        if (i(n)) {
          const r = Ja(n);
          if (r && r.branding === Yu) return Wn(t), r;
          const e = va(n);
          return (function (n, t, r, e, o, i) {
            const c = bo(r, o, hc, rc, oc),
              u = n(c.timeZone),
              [s, a, f] = Wn(i),
              l = r.ee(c, tt(s)),
              d = Eo(c, s);
            return ct(
              ir(
                t(u),
                { ...l, ...d },
                void 0 !== c.offset ? Jr(c.offset) : void 0,
                a,
                f,
              ),
              u,
              e,
            );
          })(Oa, Wu, Os(e), e, n, t);
        }
        return (function (n, t) {
          const r = Kr(Nc(n));
          if (!r || !r.timeZone) throw new RangeError(ki(n));
          const { offset: e } = r,
            o = e ? Jr(e) : void 0,
            [, i, c] = Wn(t);
          return qr(r, o, i, c);
        })(n, t);
      }
      function Pa(n) {
        return d((n) => (t) => n(ka(t)), n);
      }
      function ka(n) {
        return Bu(n, Wu);
      }
      function $a(n) {
        if (i(n)) {
          const t = Ja(n);
          if (t)
            switch (t.branding) {
              case Su:
                return t;
              case Yu:
                return it(t.epochNanoseconds);
            }
        }
        return (function (n) {
          const t = Kr((n = W(n)));
          if (!t) throw new RangeError(ki(n));
          let r;
          if (t.C) r = 0;
          else {
            if (!t.offset) throw new RangeError(ki(n));
            r = Jr(t.offset);
          }
          return t.timeZone && Xr(t.timeZone, 1), it(yn(Un(t), r));
        })(n);
      }
      function Ua() {
        function n(n, r) {
          return new t(n, r);
        }
        function t(n, t = Object.create(null)) {
          Pf.set(
            this,
            ((n, t) => {
              const r = new Kc(n, t),
                e = r.resolvedOptions(),
                o = e.locale,
                i = g(Object.keys(t), e),
                u = c(La),
                s = (n, ...t) => {
                  if (n) {
                    if (2 !== t.length) throw new TypeError(Ui);
                    for (const n of t)
                      if (void 0 === n) throw new TypeError(Ui);
                  }
                  n || void 0 !== t[0] || (t = []);
                  const e = t.map((n) => Ja(n) || Number(n));
                  let c,
                    s = 0;
                  for (const n of e) {
                    const t = "object" == typeof n ? n.branding : void 0;
                    if (s++ && t !== c) throw new TypeError(Ui);
                    c = t;
                  }
                  return c ? u(c)(o, i, ...e) : [r, ...e];
                };
              return (s.i = r), s;
            })(n, t),
          );
        }
        const r = Kc.prototype,
          e = Object.getOwnPropertyDescriptors(r),
          o = Object.getOwnPropertyDescriptors(Kc);
        for (const t in e) {
          const r = e[t],
            o = t.startsWith("format") && xa(t);
          "function" == typeof r.value
            ? (r.value = "constructor" === t ? n : o || Fa(t))
            : o &&
              ((r.get = function () {
                if (!Pf.has(this)) throw new TypeError(si);
                return (...n) => o.apply(this, n);
              }),
              Object.defineProperties(r.get, u(`get ${t}`)));
        }
        return (
          (o.prototype.value = t.prototype = Object.create({}, e)),
          Object.defineProperties(n, o),
          n
        );
      }
      function xa(n) {
        return Object.defineProperties(function (...t) {
          const r = Pf.get(this),
            [e, ...o] = r(n.includes("Range"), ...t);
          return e[n](...o);
        }, u(n));
      }
      function Fa(n) {
        return Object.defineProperties(function (...t) {
          return Pf.get(this).i[n](...t);
        }, u(n));
      }
      function La(n) {
        const t = of[n];
        if (!t) throw new TypeError(((n) => `Cannot format ${n}`)(n));
        return Lo(t, c(Bo), 1);
      }
      const Ba = new WeakMap(),
        Ja = Ba.get.bind(Ba),
        Wa = Ba.set.bind(Ba),
        Ha = {
          era: function (n) {
            if (void 0 !== n) return Nc(n);
          },
          eraYear: P,
          year: $,
          month: k,
          daysInMonth: k,
          daysInYear: k,
          inLeapYear: Oc,
          monthsInYear: k,
        },
        qa = { monthCode: Nc },
        _a = { day: k },
        Aa = {
          dayOfWeek: k,
          dayOfYear: k,
          weekOfYear: function (n) {
            if (void 0 !== n) return k(n);
          },
          yearOfWeek: P,
          daysInWeek: k,
        },
        Ga = Ea(Object.assign({}, Ha, qa, _a, Aa)),
        Ka = Ea({ ...Ha, ...qa }),
        Va = Ea({ ...qa, ..._a }),
        za = { calendarId: (n) => n.calendar },
        Xa = h((n) => (t) => t[n], Tc.concat("sign")),
        Qa = h((n, t) => (n) => n[kc[t]], Qi),
        nf = {
          epochMilliseconds: ht,
          epochNanoseconds: function (n) {
            return en(n.epochNanoseconds);
          },
        },
        [tf, rf, ef] = ma(
          Pu,
          function (
            n = 0,
            t = 0,
            r = 0,
            e = 0,
            o = 0,
            i = 0,
            c = 0,
            u = 0,
            s = 0,
            a = 0,
          ) {
            return dt(Sr(d(A, l(Tc, [n, t, r, e, o, i, c, u, s, a]))));
          },
          {
            ...Xa,
            blank: function (n) {
              return !n.sign;
            },
          },
          {
            with: (n, t) =>
              rf(
                (function (n, t) {
                  return dt(((r = n), (e = t), Sr({ ...r, ...Mo(e, Ic) })));
                  var r, e;
                })(n, t),
              ),
            negated: (n) => rf(Cr(n)),
            abs: (n) =>
              rf(
                (function (n) {
                  return -1 === n.sign ? Cr(n) : n;
                })(n),
              ),
            add: (n, t, r) => rf(jr(Ta, Os, Wu, 0, n, Ra(t), r)),
            subtract: (n, t, r) => rf(jr(Ta, Os, Wu, 1, n, Ra(t), r)),
            round: (n, t) =>
              rf(
                (function (n, t, r, e, o) {
                  const i = Fr(e),
                    [c, u, s, a, f] = ((n, t, r) => {
                      n = nt(n, tu);
                      let e = yu(n);
                      const o = r(n[cu]);
                      let i = Vn(n);
                      const c = Tu(n, 7);
                      let u = pu(n);
                      if (void 0 === e && void 0 === u)
                        throw new RangeError(Si);
                      if (
                        (null == u && (u = 0),
                        null == e && (e = Math.max(u, t)),
                        ot(e, u),
                        (i = zn(i, u, 1)),
                        i > 1 && u > 5 && e !== u)
                      )
                        throw new RangeError(
                          "For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit",
                        );
                      return [e, u, i, c, o];
                    })(o, i, n),
                    l = Math.max(i, c);
                  if (!f && l <= 6)
                    return dt(
                      Sr(
                        ((n, t, r, e, o) => {
                          const i = Ct(kr(n), r, e, o);
                          return { ...Yc, ...$r(i, t) };
                        })(e, c, u, s, a),
                      ),
                    );
                  if (!Ir(f) && !e.sign) return e;
                  if (!f) throw new RangeError(Zi);
                  const [d, h, w] = Nr(t, r, f),
                    g = Or(w),
                    m = Rr(w),
                    p = Tr(w),
                    y = m(h, d, e);
                  Ir(f) || (fn(d), fn(y));
                  let v = p(h, d, y, c);
                  const b = e.sign,
                    M = Yr(v);
                  if (b && M && b !== M) throw new RangeError(yi);
                  return (v = jt(v, g(y), c, u, s, a, h, d, g, m)), dt(v);
                })(Ta, Os, Wu, n, t),
              ),
            total: (n, t) => gt(Ta, Os, Wu, n, t),
            toLocaleString(n, t, r) {
              return Intl.DurationFormat
                ? new Intl.DurationFormat(t, r).format(this)
                : Ht(n);
            },
            toString: Ht,
            toJSON: (n) => Ht(n),
            valueOf: Na,
          },
          {
            from: (n) => rf(Ra(n)),
            compare: (n, t, r) =>
              (function (n, t, r, e, o, i) {
                const c = n(Qn(i).relativeTo),
                  u = Math.max(Fr(e), Fr(o));
                if (p(Tc, e, o)) return 0;
                if (Dr(u, c)) return Q(kr(e), kr(o));
                if (!c) throw new RangeError(Zi);
                const [s, a, f] = Nr(t, r, c),
                  l = Or(f),
                  d = Rr(f);
                return Q(l(d(a, s, e)), l(d(a, s, o)));
              })(Ta, Os, Wu, Ra(n), Ra(t), r),
          },
          Ht,
        ),
        of = {
          Instant: aa,
          PlainDateTime: la,
          PlainDate: da,
          PlainTime: ha,
          PlainYearMonth: wa,
          PlainMonthDay: ga,
        },
        cf = Lo(aa),
        uf = Lo(fa),
        sf = Lo(la),
        af = Lo(da),
        ff = Lo(ha),
        lf = Lo(wa),
        df = Lo(ga),
        [hf, wf] = ma(
          Zu,
          function (n = 0, t = 0, r = 0, e = 0, o = 0, i = 0) {
            return lt(Bn(d(_, l(kc, [n, t, r, e, o, i])), 1));
          },
          Qa,
          {
            with(n, t, r) {
              return wf(
                (function (n, t, r) {
                  return lt(
                    ((n, t, r) => Eo({ ...g(nc, n), ...Mo(t, nc) }, Jn(r)))(
                      n,
                      t,
                      r,
                    ),
                  );
                })(this, pa(t), r),
              );
            },
            add: (n, t) => wf(hr(0, n, Ra(t))),
            subtract: (n, t) => wf(hr(1, n, Ra(t))),
            until: (n, t, r) => rf(Me(0, n, Ia(t), r)),
            since: (n, t, r) => rf(Me(1, n, Ia(t), r)),
            round: (n, t) =>
              wf(
                (function (n, t) {
                  const [r, e, o] = qn(t, 5);
                  var i;
                  return lt(((i = o), Nt(n, Rt(r, e), i)[0]));
                })(n, t),
              ),
            equals: (n, t) =>
              (function (n, t) {
                return !he(n, t);
              })(n, Ia(t)),
            toLocaleString(n, t, r) {
              const [e, o] = ff(t, r, n);
              return e.format(o);
            },
            toString: Wt,
            toJSON: (n) => Wt(n),
            valueOf: Na,
          },
          { from: (n, t) => wf(Ia(n, t)), compare: (n, t) => he(Ia(n), Ia(t)) },
          Wt,
        ),
        [gf, mf] = ma(
          Cu,
          v(function (
            n,
            t,
            r,
            e,
            o = 0,
            i = 0,
            c = 0,
            u = 0,
            s = 0,
            a = 0,
            f = pc,
          ) {
            return ut(fn(Un(d(_, l(Uc, [t, r, e, o, i, c, u, s, a])))), n(f));
          }, go),
          { ...za, ...Ga, ...Qa },
          {
            with: (n, t, r) =>
              mf(
                (function (n, t, r, e) {
                  const o = n(t.calendar),
                    i = [...o.fields(hc), ...Qi].sort(),
                    c = {
                      ...ko((u = t)),
                      hour: u.isoHour,
                      minute: u.isoMinute,
                      second: u.isoSecond,
                      millisecond: u.isoMillisecond,
                      microsecond: u.isoMicrosecond,
                      nanosecond: u.isoNanosecond,
                    };
                  var u;
                  const s = Mo(r, i),
                    a = Jn(e),
                    f = o.oe(c, s),
                    l = { ...c, ...s };
                  return ut(fn({ ...o.ee(f, tt(a)), ...Bn(Cs(l), a) }));
                })(Os, n, pa(t), r),
              ),
            withCalendar: (n, t) => mf(Ho(n, Ma(t))),
            withPlainTime: (n, t) =>
              mf(
                (function (n, t = Bc) {
                  return ut(fn({ ...n, ...t }));
                })(n, Da(t)),
              ),
            add: (n, t, r) => mf(fr(Os, 0, n, Ra(t), r)),
            subtract: (n, t, r) => mf(fr(Os, 1, n, Ra(t), r)),
            until: (n, t, r) => rf(pe(Os, 0, n, ja(t), r)),
            since: (n, t, r) => rf(pe(Os, 1, n, ja(t), r)),
            round: (n, t) =>
              mf(
                (function (n, t) {
                  return ut(Mt(n, ...qn(t)), n.calendar);
                })(n, t),
              ),
            equals: (n, t) =>
              (function (n, t) {
                return !le(n, t) && n.calendar === t.calendar;
              })(n, ja(t)),
            toZonedDateTime: (n, t, r) =>
              If(
                (function (n, t, r, e) {
                  const o = ((n, t, r, e) => {
                    const o = ((n) => Mu(Qn(n)))(e);
                    return cr(n(t), r, o);
                  })(n, r, t, e);
                  return ct(ln(o), r, t.calendar);
                })(Wu, n, Oa(t), r),
              ),
            toPlainDate: (n) => Of(st(n)),
            toPlainTime: (n) => wf(lt(n)),
            toLocaleString(n, t, r) {
              const [e, o] = sf(t, r, n);
              return e.format(o);
            },
            toString: Ft,
            toJSON: (n) => Ft(n),
            valueOf: Na,
          },
          { from: (n, t) => mf(ja(n, t)), compare: (n, t) => le(ja(n), ja(t)) },
          Ft,
        ),
        [pf, yf, vf] = ma(
          Du,
          v(function (n, t, r, e = pc, o = zc) {
            const i = _(t),
              c = _(r),
              u = n(e);
            return ft(an(xn({ isoYear: _(o), isoMonth: i, isoDay: c })), u);
          }, go),
          { ...za, ...Va },
          {
            with: (n, t, r) =>
              yf(
                (function (n, t, r, e) {
                  const o = n(t.calendar),
                    i = o.fields(hc).sort(),
                    c = ((n) => {
                      const t = Ns(n.calendar),
                        [r, e, o] = t.u(n),
                        [i, c] = t.m(r, e);
                      return { monthCode: We(i, c), day: o };
                    })(t),
                    u = Mo(r, i),
                    s = o.oe(c, u);
                  return o.te(s, e);
                })(Os, n, pa(t), r),
              ),
            equals: (n, t) =>
              (function (n, t) {
                return !de(n, t) && n.calendar === t.calendar;
              })(n, Ca(t)),
            toPlainDate(n, t) {
              return Of(
                (function (n, t, r, e) {
                  return ((n, t, r) => Ro(n, t, gc, x(r), uc))(
                    n(t.calendar),
                    r,
                    e,
                  );
                })(Os, n, this, t),
              );
            },
            toLocaleString(n, t, r) {
              const [e, o] = df(t, r, n);
              return e.format(o);
            },
            toString: Jt,
            toJSON: (n) => Jt(n),
            valueOf: Na,
          },
          { from: (n, t) => yf(Ca(n, t)) },
          Jt,
        ),
        [bf, Mf, Ef] = ma(
          Iu,
          v(function (n, t, r, e = pc, o = 1) {
            const i = _(t),
              c = _(r),
              u = n(e);
            return at(sn(xn({ isoYear: i, isoMonth: c, isoDay: _(o) })), u);
          }, go),
          { ...za, ...Ka },
          {
            with: (n, t, r) =>
              Mf(
                (function (n, t, r, e) {
                  const o = n(t.calendar),
                    i = o.fields(lc).sort(),
                    c = ((n) => {
                      const t = Ns(n.calendar),
                        [r, e] = t.u(n),
                        [o, i] = t.m(r, e);
                      return { year: r, monthCode: We(o, i) };
                    })(t),
                    u = Mo(r, i),
                    s = o.oe(c, u);
                  return o.ne(s, e);
                })(Os, n, pa(t), r),
              ),
            add: (n, t, r) => Mf(dr(Os, 0, n, Ra(t), r)),
            subtract: (n, t, r) => Mf(dr(Os, 1, n, Ra(t), r)),
            until: (n, t, r) => rf(ve(Os, 0, n, Za(t), r)),
            since: (n, t, r) => rf(ve(Os, 1, n, Za(t), r)),
            equals: (n, t) =>
              (function (n, t) {
                return !de(n, t) && n.calendar === t.calendar;
              })(n, Za(t)),
            toPlainDate(n, t) {
              return Of(
                (function (n, t, r, e) {
                  return ((n, t, r) => Ro(n, t, dc, x(r), fc))(
                    n(t.calendar),
                    r,
                    e,
                  );
                })(Os, n, this, t),
              );
            },
            toLocaleString(n, t, r) {
              const [e, o] = lf(t, r, n);
              return e.format(o);
            },
            toString: Bt,
            toJSON: (n) => Bt(n),
            valueOf: Na,
          },
          { from: (n, t) => Mf(Za(n, t)), compare: (n, t) => de(Za(n), Za(t)) },
          Bt,
        ),
        [Nf, Of, Rf] = ma(
          ju,
          v(function (n, t, r, e, o = pc) {
            return st(
              an(xn(d(_, { isoYear: t, isoMonth: r, isoDay: e }))),
              n(o),
            );
          }, go),
          { ...za, ...Ga },
          {
            with: (n, t, r) =>
              Of(
                (function (n, t, r, e) {
                  const o = n(t.calendar),
                    i = o.fields(hc).sort(),
                    c = ko(t),
                    u = Mo(r, i),
                    s = o.oe(c, u);
                  return o.ee(s, e);
                })(Os, n, pa(t), r),
              ),
            withCalendar: (n, t) => Of(Ho(n, Ma(t))),
            add: (n, t, r) => Of(lr(Os, 0, n, Ra(t), r)),
            subtract: (n, t, r) => Of(lr(Os, 1, n, Ra(t), r)),
            until: (n, t, r) => rf(ye(Os, 0, n, Ya(t), r)),
            since: (n, t, r) => rf(ye(Os, 1, n, Ya(t), r)),
            equals: (n, t) =>
              (function (n, t) {
                return !de(n, t) && n.calendar === t.calendar;
              })(n, Ya(t)),
            toZonedDateTime(n, t) {
              const r = i(t) ? t : { timeZone: t };
              return If(
                (function (n, t, r, e, o) {
                  const i = n(o.timeZone),
                    c = o.plainTime,
                    u = void 0 !== c ? t(c) : void 0,
                    s = r(i);
                  let a;
                  return (
                    (a = u ? cr(s, { ...e, ...u }) : ur(s, { ...e, ...Bc })),
                    ct(a, i, e.calendar)
                  );
                })(Oa, Ia, Wu, n, r),
              );
            },
            toPlainDateTime: (n, t) =>
              mf(
                (function (n, t = Bc) {
                  return ut(fn({ ...n, ...t }));
                })(n, Da(t)),
              ),
            toPlainYearMonth(n) {
              return Mf(
                (function (n, t, r) {
                  return Oo(n(t.calendar), r);
                })(Os, n, this),
              );
            },
            toPlainMonthDay(n) {
              return yf(
                (function (n, t, r) {
                  return No(n(t.calendar), r);
                })(Os, n, this),
              );
            },
            toLocaleString(n, t, r) {
              const [e, o] = af(t, r, n);
              return e.format(o);
            },
            toString: Lt,
            toJSON: (n) => Lt(n),
            valueOf: Na,
          },
          { from: (n, t) => Of(Ya(n, t)), compare: (n, t) => de(Ya(n), Ya(t)) },
          Lt,
        ),
        [Tf, If] = ma(
          Yu,
          v(
            function (n, t, r, e, o = pc) {
              return ct(ln(tn(H(r))), t(e), n(o));
            },
            go,
            function (n) {
              return ce(Nc(n));
            },
          ),
          {
            ...nf,
            ...za,
            ...Pa(Ga),
            ...Pa(Qa),
            offset: (n) => Xt(ka(n).offsetNanoseconds),
            offsetNanoseconds: (n) => ka(n).offsetNanoseconds,
            timeZoneId: (n) => n.timeZone,
            hoursInDay: (n) =>
              (function (n, t) {
                const r = n(t.timeZone),
                  e = Bu(t, r),
                  [o, i] = Tt(e),
                  c = on(X(ur(r, o), ur(r, i)), Vi, 1);
                if (c <= 0) throw new RangeError(yi);
                return c;
              })(Wu, n),
          },
          {
            with: (n, t, r) =>
              If(
                (function (n, t, r, e, o) {
                  const { calendar: i, timeZone: c } = r,
                    u = n(i),
                    s = t(c),
                    a = [...u.fields(hc), ...ec].sort(),
                    f = ((n) => {
                      const t = Bu(n, Wu),
                        r = Xt(t.offsetNanoseconds),
                        e = Ns(n.calendar),
                        [o, i, c] = e.u(t),
                        [u, s] = e.m(o, i),
                        a = We(u, s);
                      return {
                        ...Zs(t),
                        year: o,
                        monthCode: a,
                        day: c,
                        offset: r,
                      };
                    })(r),
                    l = Mo(e, a),
                    d = u.oe(f, l),
                    h = { ...f, ...l },
                    [w, g, m] = Wn(o, 2);
                  return ct(
                    ir(
                      s,
                      { ...u.ee(d, tt(w)), ...Bn(Cs(h), w) },
                      Jr(h.offset),
                      g,
                      m,
                    ),
                    c,
                    i,
                  );
                })(Os, Wu, n, pa(t), r),
              ),
            withCalendar: (n, t) => If(Ho(n, Ma(t))),
            withTimeZone: (n, t) =>
              If(
                (function (n, t) {
                  return { ...n, timeZone: t };
                })(n, Oa(t)),
              ),
            withPlainTime: (n, t) =>
              If(
                (function (n, t, r) {
                  const e = t.timeZone,
                    o = n(e),
                    i = { ...Bu(t, o), ...(r || Bc) };
                  let c;
                  return (
                    (c = r ? ir(o, i, i.offsetNanoseconds, 2) : ur(o, i)),
                    ct(c, e, t.calendar)
                  );
                })(Wu, n, Da(t)),
              ),
            add: (n, t, r) => If(ar(Os, Wu, 0, n, Ra(t), r)),
            subtract: (n, t, r) => If(ar(Os, Wu, 1, n, Ra(t), r)),
            until: (n, t, r) => rf(dt(me(Os, Wu, 0, n, Sa(t), r))),
            since: (n, t, r) => rf(dt(me(Os, Wu, 1, n, Sa(t), r))),
            round: (n, t) => If(vt(Wu, n, t)),
            startOfDay: (n) => If(bt(Wu, n)),
            equals: (n, t) =>
              (function (n, t) {
                return (
                  !fe(n, t) &&
                  !!we(n.timeZone, t.timeZone) &&
                  n.calendar === t.calendar
                );
              })(n, Sa(t)),
            toInstant: (n) =>
              jf(
                (function (n) {
                  return it(n.epochNanoseconds);
                })(n),
              ),
            toPlainDateTime: (n) => mf($o(Wu, n)),
            toPlainDate: (n) => Of(Uo(Wu, n)),
            toPlainTime: (n) => wf(xo(Wu, n)),
            toLocaleString(n, t, r = {}) {
              const [e, o] = uf(t, r, n);
              return e.format(o);
            },
            toString: (n, t) => xt(Wu, n, t),
            toJSON: (n) => xt(Wu, n),
            valueOf: Na,
            getTimeZoneTransition(n, t) {
              const { timeZone: r, epochNanoseconds: e } = n,
                o = (function (n) {
                  const t = nt(n, uu),
                    r = et(uu, mu, t, 0);
                  if (!r) throw new RangeError(ri(uu, r));
                  return r;
                })(t),
                i = Wu(r).l(e, o);
              return i ? If({ ...n, epochNanoseconds: i }) : null;
            },
          },
          { from: (n, t) => If(Sa(n, t)), compare: (n, t) => fe(Sa(n), Sa(t)) },
          (n) => xt(Wu, n),
        ),
        [Df, jf, Cf] = ma(
          Su,
          function (n) {
            return it(ln(tn(H(n))));
          },
          nf,
          {
            add: (n, t) => jf(sr(0, n, Ra(t))),
            subtract: (n, t) => jf(sr(1, n, Ra(t))),
            until: (n, t, r) => rf(ge(0, n, $a(t), r)),
            since: (n, t, r) => rf(ge(1, n, $a(t), r)),
            round: (n, t) =>
              jf(
                (function (n, t) {
                  const [r, e, o] = qn(t, 5, 1);
                  return it(Ct(n.epochNanoseconds, r, e, o, 1));
                })(n, t),
              ),
            equals: (n, t) =>
              (function (n, t) {
                return !ae(n, t);
              })(n, $a(t)),
            toZonedDateTimeISO: (n, t) =>
              If(
                (function (n, t, r = pc) {
                  return ct(n.epochNanoseconds, t, r);
                })(n, Oa(t)),
              ),
            toLocaleString(n, t, r) {
              const [e, o] = cf(t, r, n);
              return e.format(o);
            },
            toString: (n, t) => Ut(Oa, Wu, n, t),
            toJSON: (n) => Ut(Oa, Wu, n),
            valueOf: Na,
          },
          {
            from: (n) => jf($a(n)),
            fromEpochMilliseconds: (n) =>
              jf(
                (function (n) {
                  return it(ln(rn(A(n), Ai)));
                })(n),
              ),
            fromEpochNanoseconds: (n) =>
              jf(
                (function (n) {
                  return it(ln(tn(H(n))));
                })(n),
              ),
            compare: (n, t) => ae($a(n), $a(t)),
          },
          (n) => Ut(Oa, Wu, n),
        ),
        Zf = Object.defineProperties(
          {},
          {
            ...f("Temporal.Now"),
            ...s({
              timeZoneId: () => Ao(),
              instant: () => jf(it(_o())),
              zonedDateTimeISO: (n = Ao()) => If(ct(_o(), Oa(n), pc)),
              plainDateTimeISO: (n = Ao()) => mf(ut(qo(Wu(Oa(n))), pc)),
              plainDateISO: (n = Ao()) => Of(st(qo(Wu(Oa(n))), pc)),
              plainTimeISO: (n = Ao()) => wf(lt(qo(Wu(Oa(n))))),
            }),
          },
        ),
        Yf = Object.defineProperties(
          {},
          {
            ...f("Temporal"),
            ...s({
              PlainYearMonth: bf,
              PlainMonthDay: pf,
              PlainDate: Nf,
              PlainTime: hf,
              PlainDateTime: gf,
              ZonedDateTime: Tf,
              Instant: Df,
              Duration: tf,
              Now: Zf,
            }),
          },
        ),
        Sf = Ua(),
        Pf = new WeakMap();
      Object.create(Intl), s({ DateTimeFormat: Sf });
    },
  },
]);
