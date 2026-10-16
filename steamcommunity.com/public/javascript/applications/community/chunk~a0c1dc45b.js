/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [23877],
    {
      84346: ($, S, n) => {
        n.d(S, { J: () => T });
        var h = n(72609),
          r = n(37901);
        function T() {
          return (0, r.A)().languages.map((g) => H(g.strISOCode));
        }
        function H(g) {
          return g.length == 2 && h.TS.COUNTRY ? `${g}-${h.TS.COUNTRY}` : g;
        }
      },
      16114: ($, S, n) => {
        n.d(S, {
          sq: () => Q,
          u6: () => x,
          cc: () => K,
          vl: () => U,
          TW: () => O,
          P0: () => W,
          KC: () => D,
          $z: () => f,
          _l: () => z,
          R2: () => J,
        });
        var h = n(84346);
        const r = {};
        (r.arabic = () => n.e(6696).then(n.t.bind(n, 6696, 19))),
          (r.brazilian = () => n.e(58906).then(n.t.bind(n, 58906, 19))),
          (r.bulgarian = () => n.e(53473).then(n.t.bind(n, 53473, 19))),
          (r.czech = () => n.e(83899).then(n.t.bind(n, 83899, 19))),
          (r.danish = () => n.e(84925).then(n.t.bind(n, 84925, 19))),
          (r.dutch = () => n.e(69902).then(n.t.bind(n, 69902, 19))),
          (r.english = () => n.e(80716).then(n.t.bind(n, 80716, 19))),
          (r.finnish = () => n.e(81663).then(n.t.bind(n, 81663, 19))),
          (r.french = () => n.e(48484).then(n.t.bind(n, 48484, 19))),
          (r.german = () => n.e(66810).then(n.t.bind(n, 66810, 19))),
          (r.greek = () => n.e(13744).then(n.t.bind(n, 13744, 19))),
          (r.hungarian = () => n.e(62101).then(n.t.bind(n, 62101, 19))),
          (r.indonesian = () => n.e(68948).then(n.t.bind(n, 68948, 19))),
          (r.italian = () => n.e(2916).then(n.t.bind(n, 2916, 19))),
          (r.japanese = () => n.e(40195).then(n.t.bind(n, 40195, 19))),
          (r.koreana = () => n.e(84259).then(n.t.bind(n, 84259, 19))),
          (r.latam = () => n.e(24475).then(n.t.bind(n, 24475, 19))),
          (r.malay = () => n.e(60580).then(n.t.bind(n, 60580, 19))),
          (r.norwegian = () => n.e(36884).then(n.t.bind(n, 36884, 19))),
          (r.polish = () => n.e(15269).then(n.t.bind(n, 15269, 19))),
          (r.portuguese = () => n.e(96865).then(n.t.bind(n, 96865, 19))),
          (r.romanian = () => n.e(71391).then(n.t.bind(n, 71391, 19))),
          (r.russian = () => n.e(64933).then(n.t.bind(n, 64933, 19))),
          (r.sc_schinese = () => n.e(27503).then(n.t.bind(n, 27503, 19))),
          (r.schinese = () => n.e(44768).then(n.t.bind(n, 44768, 19))),
          (r.spanish = () => n.e(20876).then(n.t.bind(n, 20876, 19))),
          (r.swedish = () => n.e(75181).then(n.t.bind(n, 75181, 19))),
          (r.tchinese = () => n.e(89779).then(n.t.bind(n, 89779, 19))),
          (r.thai = () => n.e(98970).then(n.t.bind(n, 98970, 19))),
          (r.turkish = () => n.e(87996).then(n.t.bind(n, 87996, 19))),
          (r.ukrainian = () => n.e(47306).then(n.t.bind(n, 47306, 19))),
          (r.vietnamese = () => n.e(72539).then(n.t.bind(n, 72539, 19)));
        async function T(t) {
          if (r[t]) return r[t]();
        }
        var H = n(37901);
        const g = (0, H.l)(T);
        var m = n(44983),
          A = ((t) => (
            (t[(t.None = 0)] = "None"),
            (t[(t.Ago = 1)] = "Ago"),
            (t[(t.Remaining = 2)] = "Remaining"),
            t
          ))(A || {});
        function N(t, o) {
          const a = Date.now() / 1e3 - t;
          return v(a, o);
        }
        function v(t, o, a) {
          let i;
          typeof o == "boolean"
            ? (i = {
                eSuffix: o ? 0 : 1,
                bForceSingleUnits: a,
                bHighGranularity: !1,
              })
            : (i = {
                eSuffix: 1,
                bForceSingleUnits: !1,
                bHighGranularity: !1,
                ...o,
              });
          let e = "TimeInterval_";
          i.eSuffix == 1
            ? (e = "TimeSince_")
            : i.eSuffix == 2 && (e = "TimeRemaining_");
          let l = (s) => Math.floor(s);
          if (
            (i.bAllowDecimal && (l = (s) => Math.round(s * 10) / 10),
            t >= Seconds.PerYear * 2)
          )
            return PkgLocalization.Localize(
              `#${e}XYears`,
              l(t / Seconds.PerYear),
            );
          if (t >= Seconds.PerYear)
            return (
              (t -= Seconds.PerYear),
              t >= Seconds.PerMonth * 2 && !i.bForceSingleUnits
                ? PkgLocalization.Localize(
                    `#${e}1YearXMonths`,
                    l(t / Seconds.PerMonth),
                  )
                : PkgLocalization.Localize(`#${e}1Year`)
            );
          if (t >= Seconds.PerMonth * 2)
            return PkgLocalization.Localize(
              `#${e}XMonths`,
              l(t / Seconds.PerMonth),
            );
          if (t >= Seconds.PerWeek * 2)
            return PkgLocalization.Localize(
              `#${e}XWeeks`,
              l(t / Seconds.PerWeek),
            );
          if (t >= Seconds.PerWeek)
            return PkgLocalization.Localize(
              `#${e}1Week`,
              l(t / Seconds.PerWeek),
            );
          if (t >= Seconds.PerDay * 2)
            return PkgLocalization.Localize(
              `#${e}XDays`,
              l(t / Seconds.PerDay),
            );
          if (t >= Seconds.PerDay)
            return (
              (t -= Seconds.PerDay),
              t >= Seconds.PerHour * 2 && !i.bForceSingleUnits
                ? PkgLocalization.Localize(
                    `#${e}1DayXHours`,
                    l(t / Seconds.PerHour),
                  )
                : PkgLocalization.Localize(`#${e}1Day`)
            );
          if (t >= Seconds.PerHour * 2)
            return PkgLocalization.Localize(
              `#${e}XHours`,
              l(t / Seconds.PerHour),
            );
          if (t >= Seconds.PerHour)
            return (
              (t -= Seconds.PerHour),
              t >= Seconds.PerMinute * 2 && !i.bForceSingleUnits
                ? PkgLocalization.Localize(
                    `#${e}1HourXMinutes`,
                    l(t / Seconds.PerMinute),
                  )
                : PkgLocalization.Localize(`#${e}1Hour`)
            );
          if (t >= Seconds.PerMinute * 2) {
            const s = Math.floor(t / Seconds.PerMinute),
              c = t % Seconds.PerMinute;
            return !i.bHighGranularity || c == 0
              ? PkgLocalization.Localize(
                  `#${e}XMinutes`,
                  l(t / Seconds.PerMinute),
                )
              : c == 1
                ? PkgLocalization.Localize(`#${e}XMinutes1Second`, s)
                : PkgLocalization.Localize(`#${e}XMinutesXSeconds`, s, c);
          } else if (t >= Seconds.PerMinute) {
            const s = t % Seconds.PerMinute;
            return !i.bHighGranularity || s == 0
              ? PkgLocalization.Localize(`#${e}1Minute`)
              : s == 1
                ? PkgLocalization.Localize(`#${e}1Minute1Second`)
                : PkgLocalization.Localize(`#${e}1MinuteXSeconds`, s);
          } else
            return i.bHighGranularity
              ? t == 1
                ? PkgLocalization.Localize(`#${e}1Second`)
                : PkgLocalization.Localize(`#${e}XSeconds`, t)
              : PkgLocalization.Localize(`#${e}LessThanAMinute`);
        }
        function O(t, o, a) {
          let i;
          o === void 0 || o === !0 || o === !1
            ? (i = {
                weekday: a ? "long" : "short",
                year: o ? void 0 : "numeric",
              })
            : (i = o);
          let e = new Date(t * 1e3);
          const l = {
            weekday: "short",
            month: "long",
            day: "numeric",
            year: "numeric",
            ...i,
          };
          return e.toLocaleDateString((0, h.J)(), l);
        }
        function G(t, o) {
          let a = new Date(t * 1e3),
            i = new Date(o * 1e3);
          return a.getFullYear() != i.getFullYear() ||
            a.getMonth() != i.getMonth() ||
            a.getDate() != i.getDate()
            ? u(t, o)
            : D(t) + " - " + D(o);
        }
        function u(t, o) {
          let a = new Date(t * 1e3),
            i = new Date(o * 1e3);
          const e = new Date();
          if (
            a.getFullYear() != i.getFullYear() ||
            e.getFullYear() == a.getFullYear()
          )
            return `${f(t)} - ${f(o)}`;
          const l = { month: "short", day: "numeric" },
            s = a.toLocaleDateString(GetPreferredLocales(), l) + " - ";
          if (a.getMonth() == i.getMonth()) {
            const c = { day: "numeric" };
            return s + i.toLocaleDateString(GetPreferredLocales(), c);
          } else return s + i.toLocaleDateString(GetPreferredLocales(), l);
        }
        function f(t, o) {
          let a = new Date(t * 1e3);
          const i = { year: "numeric", month: "short", day: "numeric", ...o };
          return a.toLocaleDateString((0, h.J)(), i);
        }
        function z(t, o) {
          const {
              fullmonthname: a = !1,
              bUseRelativeNames: i = !0,
              bIncludeDayName: e = !1,
            } = o != null ? o : {},
            l = new Date(),
            s = new Date(t * 1e3);
          if (s.getFullYear() != l.getFullYear())
            return f(t, { month: a ? "long" : "short" });
          const c = new Date();
          if ((c.setHours(0, 0, 0, 0), i)) {
            if (s >= c) {
              if ((c.setDate(c.getDate() + 1), s < c))
                return g.Localize("#Time_Today");
              if ((c.setDate(c.getDate() + 1), s < c))
                return g.Localize("#Time_Tomorrow");
            } else if ((c.setDate(c.getDate() - 1), s >= c))
              return g.Localize("#Time_Yesterday");
          }
          const d = { month: a ? "long" : "short", day: "numeric" };
          return e && (d.weekday = "long"), s.toLocaleDateString((0, h.J)(), d);
        }
        function Y(t) {
          let o = new Date(t * 1e3);
          return Q(o);
        }
        function F(t) {
          let o = new Date(t * 1e3);
          return U(o);
        }
        function R(t) {
          const o = new Date();
          o.setHours(15);
          const a = o.toLocaleTimeString(t, { hour: "numeric" }),
            i = o.toLocaleTimeString(t, { hour: "numeric", hour12: !1 });
          return a == i;
        }
        function D(t, o, a) {
          const i = new Date(t * 1e3),
            e = { hour: "numeric", minute: "2-digit", hourCycle: "h23" },
            l = { hour: "numeric", minute: "2-digit" },
            s = (0, h.J)(),
            d = {
              ...((o == null ? void 0 : o.bForce24HourClock) || R(s[0])
                ? e
                : l),
              ...a,
            };
          return i.toLocaleTimeString(s, d);
        }
        function W(t, o, a) {
          const i = new Date(t * 1e3);
          return X(i, !1, !1) + " " + D(t, { bForce24HourClock: o }) + " " + a;
        }
        function X(t, o = !1, a = !0) {
          const i = {
            weekday: a ? "long" : "short",
            day: "numeric",
            month: o ? "long" : "short",
          };
          return t.toLocaleDateString((0, h.J)(), i);
        }
        function K(t) {
          return t.toLocaleDateString((0, h.J)(), { weekday: "long" });
        }
        function B(t) {
          return t.toLocaleDateString(GetPreferredLocales(), { month: "long" });
        }
        function Z(t) {
          return t.toLocaleDateString(GetPreferredLocales(), {
            month: "short",
          });
        }
        function U(t) {
          return t.toLocaleDateString((0, h.J)(), { year: "numeric" });
        }
        function Q(t) {
          return t.toLocaleDateString((0, h.J)(), {
            month: "long",
            year: "numeric",
          });
        }
        function x(t, o) {
          switch (t.getUTCMonth()) {
            case 0:
            case 1:
            case 2:
              return g.Localize(
                o
                  ? "#Time_QuarterOfYear_Expanded_Q1"
                  : "#Time_QuarterOfYear_Q1",
                t.getUTCFullYear(),
              );
            case 3:
            case 4:
            case 5:
              return g.Localize(
                o
                  ? "#Time_QuarterOfYear_Expanded_Q2"
                  : "#Time_QuarterOfYear_Q2",
                t.getUTCFullYear(),
              );
            case 6:
            case 7:
            case 8:
              return g.Localize(
                o
                  ? "#Time_QuarterOfYear_Expanded_Q3"
                  : "#Time_QuarterOfYear_Q3",
                t.getUTCFullYear(),
              );
            default:
              return g.Localize(
                o
                  ? "#Time_QuarterOfYear_Expanded_Q4"
                  : "#Time_QuarterOfYear_Q4",
                t.getUTCFullYear(),
              );
          }
        }
        function J(t) {
          const o = Math.floor(t / m.Kp.PerYear),
            a = Math.floor(t / m.Kp.PerMonth),
            i = Math.floor((t % m.Kp.PerMonth) / m.Kp.PerDay),
            e = Math.floor((t % m.Kp.PerDay) / m.Kp.PerHour),
            l = Math.floor((t % m.Kp.PerHour) / m.Kp.PerMinute);
          return (
            (t = t % m.Kp.PerMinute),
            o > 0
              ? g.Localize("#TimeRemaining_MoreThanOneYear")
              : a > 0
                ? g.Localize("#TimeRemaining_MonthsDays", a, i)
                : i > 0
                  ? g.Localize(
                      "#TimeRemaining_DaysHoursMinutes",
                      i,
                      e.toString().padStart(2, "0"),
                      l.toString().padStart(2, "0"),
                    )
                  : e > 0
                    ? g.Localize(
                        "#TimeRemaining_HoursMinutesSeconds",
                        e.toString().padStart(2, "0"),
                        l.toString().padStart(2, "0"),
                        t.toString().padStart(2, "0"),
                      )
                    : g.Localize(
                        "#TimeRemaining_MinutesSeconds",
                        l.toString().padStart(2, "0"),
                        t.toString().padStart(2, "0"),
                      )
          );
        }
        function y(t, o, a) {
          for (; t.length < o; ) t = a + t;
          return t;
        }
        function C(t) {
          return (
            (t === void 0 || isNaN(t)) && (t = 0),
            {
              hours: Math.floor(t / 3600),
              minutes: Math.floor((t % 3600) / 60),
              seconds: Math.floor(t % 60),
              fraction: t - Math.floor(t),
            }
          );
        }
        function E(t, o, a) {
          let i = t < 0;
          t = i ? 0 - t : t;
          const e = C(t),
            l = e.fraction.toFixed(2).split(".")[1],
            s = o != null ? o : !0;
          let c = !s || l == "00";
          i &&
            e.hours == 0 &&
            e.minutes == 0 &&
            e.seconds == 0 &&
            c &&
            (i = !1);
          let d = "";
          if (e.hours) {
            const L = e.hours.toString(),
              M = y(e.minutes.toString(), 2, "0"),
              P = y(e.seconds.toString(), 2, "0"),
              I = s
                ? "#Duration_Abbreviation_HourMinuteSecondMillisecond"
                : "#Duration_Abbreviation_HourMinuteSecond";
            d = PkgLocalization.Localize(I, L, M, P, l);
          } else if (e.minutes) {
            const L = e.minutes.toString(),
              M = y(e.seconds.toString(), 2, "0"),
              P = s
                ? "#Duration_Abbreviation_MinuteSecondMillisecond"
                : "#Duration_Abbreviation_MinuteSecond";
            d = PkgLocalization.Localize(P, L, M, l);
          } else if (e.seconds) {
            const L = e.seconds.toString(),
              M = s
                ? "#Duration_Abbreviation_SecondMillisecond"
                : "#Duration_Abbreviation_Second";
            d = PkgLocalization.Localize(M, L, l);
          }
          return (
            i &&
              (a
                ? (d = PkgLocalization.Localize("#Duration_WrittenNegation", d))
                : (d = "-" + d)),
            d
          );
        }
        function j(t, o, a) {
          let i = t < 0;
          t = i ? 0 - t : t;
          const e = C(t),
            l = y(e.seconds.toString(), 2, "0"),
            s = e.fraction.toFixed(2).split(".")[1],
            c = o != null ? o : !0;
          let d = !c || s == "00";
          i &&
            e.hours == 0 &&
            e.minutes == 0 &&
            e.seconds == 0 &&
            d &&
            (i = !1);
          let L = "";
          if (e.hours) {
            const M = y(e.minutes.toString(), 2, "0"),
              P = c
                ? "#Duration_HourMinuteSecondMillisecond"
                : "#Duration_HourMinuteSecond";
            L = PkgLocalization.Localize(P, e.hours, M, l, s);
          } else {
            const M = e.minutes.toString(),
              P = c
                ? "#Duration_MinuteSecondMillisecond"
                : "#Duration_MinuteSecond";
            L = PkgLocalization.Localize(P, M, l, s);
          }
          return (
            i &&
              (a
                ? (L = PkgLocalization.Localize("#Duration_WrittenNegation", L))
                : (L = "-" + L)),
            L
          );
        }
        function V(t) {
          const o = C(t),
            a = o.hours * 60 + o.minutes,
            i = o.hours,
            e = Math.floor(o.hours / 24),
            l = Math.floor(e / 30);
          return l > 1
            ? PkgLocalization.Localize("#ReadableDuration_Months", l)
            : l === 1
              ? PkgLocalization.Localize("#ReadableDuration_OneMonth")
              : e > 1
                ? PkgLocalization.Localize("#ReadableDuration_Days", e)
                : i > 2
                  ? PkgLocalization.Localize("#ReadableDuration_Hours", i)
                  : a > 2
                    ? PkgLocalization.Localize("#ReadableDuration_Minutes", a)
                    : a > 1
                      ? PkgLocalization.Localize("#ReadableDuration_OneMinute")
                      : PkgLocalization.Localize(
                          "#ReadableDuration_LessThanOneMinute",
                        );
        }
        function b(t) {
          if (t >= 120) {
            const a = (Math.round((t / 60) * 10) / 10).toLocaleString(
              GetPreferredLocales(),
              { minimumFractionDigits: 0, maximumFractionDigits: 1 },
            );
            return PkgLocalization.Localize("#Playtime_Hours", a);
          }
          return PkgLocalization.Localize(
            "#Playtime_Minutes",
            t.toLocaleString(GetPreferredLocales()),
          );
        }
      },
      44983: ($, S, n) => {
        n.d(S, { Kp: () => h });
        const h = {
          PerYear: 31536e3,
          PerMonth: 2628e3,
          PerWeek: 604800,
          PerDay: 86400,
          PerHour: 3600,
          PerMinute: 60,
        };
        function r(u, f) {
          return (
            u.getFullYear() == f.getFullYear() &&
            u.getMonth() == f.getMonth() &&
            u.getDate() == f.getDate()
          );
        }
        function T(u, f) {
          let z = new Date(u);
          return z.setDate(z.getDate() - 1), r(z, f);
        }
        function H(u, f) {
          return u.getFullYear() == f.getFullYear();
        }
        function g(u) {
          return new Date(
            u.getFullYear(),
            u.getMonth(),
            u.getDate(),
            u.getHours(),
            0,
            0,
            0,
          );
        }
        function m(u) {
          return new Date(
            u.getFullYear(),
            u.getMonth(),
            u.getDate(),
            0,
            0,
            0,
            0,
          );
        }
        function A(u) {
          return new Date(u.getFullYear(), u.getMonth(), 1, 0, 0, 0, 0);
        }
        function N(u) {
          return new Promise((f) => setTimeout(f, u));
        }
        function v() {
          return Math.floor(Date.now() / 1e3);
        }
        function O(u) {
          return Math.floor(u.getTime() / 1e3);
        }
        function G(u) {
          const f = Math.round(u / 1e3),
            z = Math.floor(f % 60),
            Y = Math.floor((f / 60) % 60),
            F = Math.floor(f / 3600);
          let R = !1,
            D = "";
          return (
            F > 0 && ((D += F + ":"), (R = !0)),
            (D += R && Y < 10 ? "0" + Y + ":" : Y + ":"),
            (D += z < 10 ? "0" + z : z),
            D
          );
        }
      },
    },
  ]);
})();
