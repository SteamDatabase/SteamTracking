/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [9150],
  {
    39832: (e, n, t) => {
      t.d(n, {
        TW: () => u,
        KC: () => d,
        $z: () => s,
        _l: () => c,
        R2: () => m,
      });
      var i = t(3049);
      const r = {};
      (r.arabic = () => t.e(6696).then(t.t.bind(t, 6696, 19))),
        (r.brazilian = () => t.e(8906).then(t.t.bind(t, 58906, 19))),
        (r.bulgarian = () => t.e(3473).then(t.t.bind(t, 53473, 19))),
        (r.czech = () => t.e(3899).then(t.t.bind(t, 83899, 19))),
        (r.danish = () => t.e(9687).then(t.t.bind(t, 84925, 19))),
        (r.dutch = () => t.e(9902).then(t.t.bind(t, 69902, 19))),
        (r.english = () => t.e(716).then(t.t.bind(t, 80716, 19))),
        (r.finnish = () => t.e(1663).then(t.t.bind(t, 81663, 19))),
        (r.french = () => t.e(8484).then(t.t.bind(t, 48484, 19))),
        (r.german = () => t.e(6810).then(t.t.bind(t, 66810, 19))),
        (r.greek = () => t.e(3744).then(t.t.bind(t, 13744, 19))),
        (r.hungarian = () => t.e(2101).then(t.t.bind(t, 62101, 19))),
        (r.indonesian = () => t.e(8948).then(t.t.bind(t, 68948, 19))),
        (r.italian = () => t.e(2916).then(t.t.bind(t, 2916, 19))),
        (r.japanese = () => t.e(195).then(t.t.bind(t, 40195, 19))),
        (r.koreana = () => t.e(4259).then(t.t.bind(t, 84259, 19))),
        (r.latam = () => t.e(4475).then(t.t.bind(t, 24475, 19))),
        (r.malay = () => t.e(580).then(t.t.bind(t, 60580, 19))),
        (r.norwegian = () => t.e(6884).then(t.t.bind(t, 36884, 19))),
        (r.polish = () => t.e(5269).then(t.t.bind(t, 15269, 19))),
        (r.portuguese = () => t.e(6865).then(t.t.bind(t, 96865, 19))),
        (r.romanian = () => t.e(1391).then(t.t.bind(t, 71391, 19))),
        (r.russian = () => t.e(4933).then(t.t.bind(t, 64933, 19))),
        (r.sc_schinese = () => t.e(7503).then(t.t.bind(t, 27503, 19))),
        (r.schinese = () => t.e(4768).then(t.t.bind(t, 44768, 19))),
        (r.spanish = () => t.e(876).then(t.t.bind(t, 20876, 19))),
        (r.swedish = () => t.e(5181).then(t.t.bind(t, 75181, 19))),
        (r.tchinese = () => t.e(9779).then(t.t.bind(t, 89779, 19))),
        (r.thai = () => t.e(8970).then(t.t.bind(t, 98970, 19))),
        (r.turkish = () => t.e(7996).then(t.t.bind(t, 87996, 19))),
        (r.ukrainian = () => t.e(7306).then(t.t.bind(t, 47306, 19))),
        (r.vietnamese = () => t.e(2539).then(t.t.bind(t, 72539, 19)));
      const a = (0, t(13843).l)(async function (e) {
        if (r[e]) return r[e]();
      });
      var o,
        h = t(83710);
      function u(e, n, t) {
        let r;
        r =
          void 0 === n || !0 === n || !1 === n
            ? { weekday: t ? "long" : "short", year: n ? void 0 : "numeric" }
            : n;
        let a = new Date(1e3 * e);
        const o = {
          weekday: "short",
          month: "long",
          day: "numeric",
          year: "numeric",
          ...r,
        };
        return a.toLocaleDateString((0, i.J)(), o);
      }
      function s(e, n) {
        const t = { year: "numeric", month: "short", day: "numeric", ...n };
        return new Date(1e3 * e).toLocaleDateString((0, i.J)(), t);
      }
      function c(e, n) {
        const {
            fullmonthname: t = !1,
            bUseRelativeNames: r = !0,
            bIncludeDayName: o = !1,
          } = n ?? {},
          h = new Date(),
          u = new Date(1e3 * e);
        if (u.getFullYear() != h.getFullYear())
          return s(e, { month: t ? "long" : "short" });
        const c = new Date();
        if ((c.setHours(0, 0, 0, 0), r))
          if (u >= c) {
            if ((c.setDate(c.getDate() + 1), u < c))
              return a.Localize("#Time_Today");
            if ((c.setDate(c.getDate() + 1), u < c))
              return a.Localize("#Time_Tomorrow");
          } else if ((c.setDate(c.getDate() - 1), u >= c))
            return a.Localize("#Time_Yesterday");
        const d = { month: t ? "long" : "short", day: "numeric" };
        return o && (d.weekday = "long"), u.toLocaleDateString((0, i.J)(), d);
      }
      function d(e, n, t) {
        const r = new Date(1e3 * e),
          a = (0, i.J)(),
          o = {
            ...(n?.bForce24HourClock ||
            (function (e) {
              const n = new Date();
              return (
                n.setHours(15),
                n.toLocaleTimeString(e, { hour: "numeric" }) ==
                  n.toLocaleTimeString(e, { hour: "numeric", hour12: !1 })
              );
            })(a[0])
              ? { hour: "numeric", minute: "2-digit", hourCycle: "h23" }
              : { hour: "numeric", minute: "2-digit" }),
            ...t,
          };
        return r.toLocaleTimeString(a, o);
      }
      function m(e) {
        const n = Math.floor(e / h.Kp.PerYear),
          t = Math.floor(e / h.Kp.PerMonth),
          i = Math.floor((e % h.Kp.PerMonth) / h.Kp.PerDay),
          r = Math.floor((e % h.Kp.PerDay) / h.Kp.PerHour),
          o = Math.floor((e % h.Kp.PerHour) / h.Kp.PerMinute);
        return (
          (e %= h.Kp.PerMinute),
          n > 0
            ? a.Localize("#TimeRemaining_MoreThanOneYear")
            : t > 0
              ? a.Localize("#TimeRemaining_MonthsDays", t, i)
              : i > 0
                ? a.Localize(
                    "#TimeRemaining_DaysHoursMinutes",
                    i,
                    r.toString().padStart(2, "0"),
                    o.toString().padStart(2, "0"),
                  )
                : r > 0
                  ? a.Localize(
                      "#TimeRemaining_HoursMinutesSeconds",
                      r.toString().padStart(2, "0"),
                      o.toString().padStart(2, "0"),
                      e.toString().padStart(2, "0"),
                    )
                  : a.Localize(
                      "#TimeRemaining_MinutesSeconds",
                      o.toString().padStart(2, "0"),
                      e.toString().padStart(2, "0"),
                    )
        );
      }
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Ago = 1)] = "Ago"),
          (e[(e.Remaining = 2)] = "Remaining");
      })(o || (o = {}));
    },
    83710: (e, n, t) => {
      t.d(n, { Kp: () => i });
      const i = {
        PerYear: 31536e3,
        PerMonth: 2628e3,
        PerWeek: 604800,
        PerDay: 86400,
        PerHour: 3600,
        PerMinute: 60,
      };
    },
  },
]);
