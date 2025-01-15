/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [1084],
  {
    22586: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t, n) {
          t.prototype.isBetween = function (e, t, r, o) {
            var i = n(e),
              l = n(t),
              a = "(" === (o = o || "()")[0],
              s = ")" === o[1];
            return (
              ((a ? this.isAfter(i, r) : !this.isBefore(i, r)) &&
                (s ? this.isBefore(l, r) : !this.isAfter(l, r))) ||
              ((a ? this.isBefore(i, r) : !this.isAfter(i, r)) &&
                (s ? this.isAfter(l, r) : !this.isBefore(l, r)))
            );
          };
        };
      })();
    },
    20237: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t) {
          t.prototype.isSameOrAfter = function (e, t) {
            return this.isSame(e, t) || this.isAfter(e, t);
          };
        };
      })();
    },
    83632: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t) {
          t.prototype.isSameOrBefore = function (e, t) {
            return this.isSame(e, t) || this.isBefore(e, t);
          };
        };
      })();
    },
    43334: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t, n) {
          var r = t.prototype,
            o = function (e) {
              return e && (e.indexOf ? e : e.s);
            },
            i = function (e, t, n, r, i) {
              var l = e.name ? e : e.$locale(),
                a = o(l[t]),
                s = o(l[n]),
                u =
                  a ||
                  s.map(function (e) {
                    return e.slice(0, r);
                  });
              if (!i) return u;
              var c = l.weekStart;
              return u.map(function (e, t) {
                return u[(t + (c || 0)) % 7];
              });
            },
            l = function () {
              return n.Ls[n.locale()];
            },
            a = function (e, t) {
              return (
                e.formats[t] ||
                (function (e) {
                  return e.replace(
                    /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                    function (e, t, n) {
                      return t || n.slice(1);
                    },
                  );
                })(e.formats[t.toUpperCase()])
              );
            },
            s = function () {
              var e = this;
              return {
                months: function (t) {
                  return t ? t.format("MMMM") : i(e, "months");
                },
                monthsShort: function (t) {
                  return t ? t.format("MMM") : i(e, "monthsShort", "months", 3);
                },
                firstDayOfWeek: function () {
                  return e.$locale().weekStart || 0;
                },
                weekdays: function (t) {
                  return t ? t.format("dddd") : i(e, "weekdays");
                },
                weekdaysMin: function (t) {
                  return t
                    ? t.format("dd")
                    : i(e, "weekdaysMin", "weekdays", 2);
                },
                weekdaysShort: function (t) {
                  return t
                    ? t.format("ddd")
                    : i(e, "weekdaysShort", "weekdays", 3);
                },
                longDateFormat: function (t) {
                  return a(e.$locale(), t);
                },
                meridiem: this.$locale().meridiem,
                ordinal: this.$locale().ordinal,
              };
            };
          (r.localeData = function () {
            return s.bind(this)();
          }),
            (n.localeData = function () {
              var e = l();
              return {
                firstDayOfWeek: function () {
                  return e.weekStart || 0;
                },
                weekdays: function () {
                  return n.weekdays();
                },
                weekdaysShort: function () {
                  return n.weekdaysShort();
                },
                weekdaysMin: function () {
                  return n.weekdaysMin();
                },
                months: function () {
                  return n.months();
                },
                monthsShort: function () {
                  return n.monthsShort();
                },
                longDateFormat: function (t) {
                  return a(e, t);
                },
                meridiem: e.meridiem,
                ordinal: e.ordinal,
              };
            }),
            (n.months = function () {
              return i(l(), "months");
            }),
            (n.monthsShort = function () {
              return i(l(), "monthsShort", "months", 3);
            }),
            (n.weekdays = function (e) {
              return i(l(), "weekdays", null, null, e);
            }),
            (n.weekdaysShort = function (e) {
              return i(l(), "weekdaysShort", "weekdays", 3, e);
            }),
            (n.weekdaysMin = function (e) {
              return i(l(), "weekdaysMin", "weekdays", 2, e);
            });
        };
      })();
    },
    39920: function (e) {
      e.exports = (function () {
        "use strict";
        var e = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A",
        };
        return function (t, n, r) {
          var o = n.prototype,
            i = o.format;
          (r.en.formats = e),
            (o.format = function (t) {
              void 0 === t && (t = "YYYY-MM-DDTHH:mm:ssZ");
              var n = this.$locale().formats,
                r = (function (t, n) {
                  return t.replace(
                    /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                    function (t, r, o) {
                      var i = o && o.toUpperCase();
                      return (
                        r ||
                        n[o] ||
                        e[o] ||
                        n[i].replace(
                          /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                          function (e, t, n) {
                            return t || n.slice(1);
                          },
                        )
                      );
                    },
                  );
                })(t, void 0 === n ? {} : n);
              return i.call(this, r);
            });
        };
      })();
    },
    4042: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t, n) {
          var r = function (e, t) {
            if (
              !t ||
              !t.length ||
              (1 === t.length && !t[0]) ||
              (1 === t.length && Array.isArray(t[0]) && !t[0].length)
            )
              return null;
            var n;
            1 === t.length && t[0].length > 0 && (t = t[0]),
              (n = (t = t.filter(function (e) {
                return e;
              }))[0]);
            for (var r = 1; r < t.length; r += 1)
              (t[r].isValid() && !t[r][e](n)) || (n = t[r]);
            return n;
          };
          (n.max = function () {
            var e = [].slice.call(arguments, 0);
            return r("isAfter", e);
          }),
            (n.min = function () {
              var e = [].slice.call(arguments, 0);
              return r("isBefore", e);
            });
        };
      })();
    },
    14240: function (e) {
      e.exports = (function () {
        "use strict";
        var e = "minute",
          t = /[+-]\d\d(?::?\d\d)?/g,
          n = /([+-]|\d\d)/g;
        return function (r, o, i) {
          var l = o.prototype;
          (i.utc = function (e) {
            return new o({ date: e, utc: !0, args: arguments });
          }),
            (l.utc = function (t) {
              var n = i(this.toDate(), { locale: this.$L, utc: !0 });
              return t ? n.add(this.utcOffset(), e) : n;
            }),
            (l.local = function () {
              return i(this.toDate(), { locale: this.$L, utc: !1 });
            });
          var a = l.parse;
          l.parse = function (e) {
            e.utc && (this.$u = !0),
              this.$utils().u(e.$offset) || (this.$offset = e.$offset),
              a.call(this, e);
          };
          var s = l.init;
          l.init = function () {
            if (this.$u) {
              var e = this.$d;
              (this.$y = e.getUTCFullYear()),
                (this.$M = e.getUTCMonth()),
                (this.$D = e.getUTCDate()),
                (this.$W = e.getUTCDay()),
                (this.$H = e.getUTCHours()),
                (this.$m = e.getUTCMinutes()),
                (this.$s = e.getUTCSeconds()),
                (this.$ms = e.getUTCMilliseconds());
            } else s.call(this);
          };
          var u = l.utcOffset;
          l.utcOffset = function (r, o) {
            var i = this.$utils().u;
            if (i(r))
              return this.$u
                ? 0
                : i(this.$offset)
                  ? u.call(this)
                  : this.$offset;
            if (
              "string" == typeof r &&
              ((r = (function (e) {
                void 0 === e && (e = "");
                var r = e.match(t);
                if (!r) return null;
                var o = ("" + r[0]).match(n) || ["-", 0, 0],
                  i = o[0],
                  l = 60 * +o[1] + +o[2];
                return 0 === l ? 0 : "+" === i ? l : -l;
              })(r)),
              null === r)
            )
              return this;
            var l = Math.abs(r) <= 16 ? 60 * r : r,
              a = this;
            if (o) return (a.$offset = l), (a.$u = 0 === r), a;
            if (0 !== r) {
              var s = this.$u
                ? this.toDate().getTimezoneOffset()
                : -1 * this.utcOffset();
              ((a = this.local().add(l + s, e)).$offset = l),
                (a.$x.$localOffset = s);
            } else a = this.utc();
            return a;
          };
          var c = l.format;
          (l.format = function (e) {
            var t = e || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return c.call(this, t);
          }),
            (l.valueOf = function () {
              var e = this.$utils().u(this.$offset)
                ? 0
                : this.$offset +
                  (this.$x.$localOffset || this.$d.getTimezoneOffset());
              return this.$d.valueOf() - 6e4 * e;
            }),
            (l.isUTC = function () {
              return !!this.$u;
            }),
            (l.toISOString = function () {
              return this.toDate().toISOString();
            }),
            (l.toString = function () {
              return this.toDate().toUTCString();
            });
          var d = l.toDate;
          l.toDate = function (e) {
            return "s" === e && this.$offset
              ? i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
              : d.call(this);
          };
          var f = l.diff;
          l.diff = function (e, t, n) {
            if (e && this.$u === e.$u) return f.call(this, e, t, n);
            var r = this.local(),
              o = i(e).local();
            return f.call(r, o, t, n);
          };
        };
      })();
    },
    38921: (e) => {
      "use strict";
      e.exports = function (e, t, n, r, o, i, l, a) {
        if (!e) {
          var s;
          if (void 0 === t)
            s = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
          else {
            var u = [n, r, o, i, l, a],
              c = 0;
            (s = new Error(
              t.replace(/%s/g, function () {
                return u[c++];
              }),
            )).name = "Invariant Violation";
          }
          throw ((s.framesToPop = 1), s);
        }
      };
    },
    21228: (e, t, n) => {
      "use strict";
      n.d(t, { Vv: () => Wl, Pp: () => Ko, ye: () => $l });
      var r = n(54883),
        o = n(2829),
        i = n(11052),
        l = n(30549),
        a = n(50181),
        s = n(35549),
        u = n(96101),
        c = n(15596),
        d = n(90626),
        f = n(38921),
        g = n.n(f),
        h = function () {};
      function p(e, t) {
        return void 0 !== e[t];
      }
      function m(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      var v = n(81115),
        b = n(58584),
        w = n(42891),
        y = n(98935);
      function S(e) {
        var t,
          n,
          r = "";
        if ("string" == typeof e || "number" == typeof e) r += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (n = S(e[t])) && (r && (r += " "), (r += n));
          else for (t in e) e[t] && (r && (r += " "), (r += t));
        return r;
      }
      const C = function () {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) && (t = S(e)) && (r && (r += " "), (r += t));
        return r;
      };
      var R = n(61410),
        E = n.n(R),
        A = "milliseconds",
        D = "seconds",
        x = "minutes",
        M = "hours",
        O = "day",
        _ = "week",
        k = "month",
        P = "year",
        F = "decade",
        I = "century",
        T = {
          milliseconds: 1,
          seconds: 1e3,
          minutes: 6e4,
          hours: 36e5,
          day: 864e5,
          week: 6048e5,
        },
        z = { month: 1, year: 12, decade: 120, century: 1200 };
      function L(e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0 ? 29 : 28;
      }
      function V(e, t, n) {
        switch (((e = new Date(e)), n)) {
          case A:
          case D:
          case x:
          case M:
          case O:
          case _:
            return (function (e, t) {
              var n = new Date(+e + t);
              return (function (e, t) {
                var n = e.getTimezoneOffset(),
                  r = t.getTimezoneOffset();
                return new Date(+t + (r - n) * T.minutes);
              })(e, n);
            })(e, t * T[n]);
          case k:
          case P:
          case F:
          case I:
            return (function (e, t) {
              var n = e.getFullYear(),
                r = e.getMonth(),
                o = e.getDate(),
                i = 12 * n + r + t,
                l = Math.trunc(i / 12),
                a = i % 12,
                s = Math.min(
                  o,
                  (function (e) {
                    return [31, L(e), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                  })(l)[a],
                ),
                u = new Date(e);
              return (
                u.setFullYear(l), u.setDate(1), u.setMonth(a), u.setDate(s), u
              );
            })(e, t * z[n]);
        }
        throw new TypeError('Invalid units: "' + n + '"');
      }
      function N(e, t, n) {
        return V(e, -t, n);
      }
      function j(e, t, n) {
        switch (((e = new Date(e)), t)) {
          case I:
          case F:
          case P:
            e = re(e, 0);
          case k:
            e = ne(e, 1);
          case _:
          case O:
            e = ee(e, 0);
          case M:
            e = Q(e, 0);
          case x:
            e = J(e, 0);
          case D:
            e = Z(e, 0);
        }
        return (
          t === F && (e = N(e, oe(e) % 10, "year")),
          t === I && (e = N(e, oe(e) % 100, "year")),
          t === _ &&
            (e = (function (e, t, n) {
              var r = (te(e) + 7 - (n || 0)) % 7;
              return void 0 === t ? r : V(e, t - r, O);
            })(e, 0, n)),
          e
        );
      }
      function H(e, t, n) {
        switch (((e = j((e = new Date(e)), t, n)), t)) {
          case I:
          case F:
          case P:
          case k:
          case _:
            (e = N((e = V(e, 1, t)), 1, O)).setHours(23, 59, 59, 999);
            break;
          case O:
            e.setHours(23, 59, 59, 999);
            break;
          case M:
          case x:
          case D:
            e = N((e = V(e, 1, t)), 1, A);
        }
        return e;
      }
      var G = le(function (e, t) {
          return e === t;
        }),
        B = le(function (e, t) {
          return e !== t;
        }),
        W = le(function (e, t) {
          return e > t;
        }),
        q = le(function (e, t) {
          return e >= t;
        }),
        Y = le(function (e, t) {
          return e < t;
        }),
        U = le(function (e, t) {
          return e <= t;
        });
      function $() {
        return new Date(Math.min.apply(Math, arguments));
      }
      function K() {
        return new Date(Math.max.apply(Math, arguments));
      }
      function X(e, t, n, r) {
        return (r = r || "day"), (!t || q(e, t, r)) && (!n || U(e, n, r));
      }
      var Z = ie("Milliseconds"),
        J = ie("Seconds"),
        Q = ie("Minutes"),
        ee = ie("Hours"),
        te = ie("Day"),
        ne = ie("Date"),
        re = ie("Month"),
        oe = ie("FullYear");
      function ie(e) {
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
        return function (n, r) {
          if (void 0 === r) return n["get" + e]();
          var o = new Date(n);
          return (
            o["set" + e](r),
            t &&
              o["get" + e]() != r &&
              ("Hours" === e ||
                (r >= t && o.getHours() - n.getHours() < Math.floor(r / t))) &&
              o["set" + e](r + t),
            o
          );
        };
      }
      function le(e) {
        return function (t, n, r) {
          return e(+j(t, r), +j(n, r));
        };
      }
      var ae = n(55635),
        se = n(8950);
      const ue = function (e, t, n) {
        var r = -1,
          o = e.length;
        t < 0 && (t = -t > o ? 0 : o + t),
          (n = n > o ? o : n) < 0 && (n += o),
          (o = t > n ? 0 : (n - t) >>> 0),
          (t >>>= 0);
        for (var i = Array(o); ++r < o; ) i[r] = e[r + t];
        return i;
      };
      var ce = n(7e4),
        de = n(55205),
        fe = 1 / 0;
      const ge = function (e) {
        return e
          ? (e = (0, de.A)(e)) === fe || e === -1 / 0
            ? 17976931348623157e292 * (e < 0 ? -1 : 1)
            : e == e
              ? e
              : 0
          : 0 === e
            ? e
            : 0;
      };
      const he = function (e) {
        var t = ge(e),
          n = t % 1;
        return t == t ? (n ? t - n : t) : 0;
      };
      var pe = Math.ceil,
        me = Math.max;
      const ve = function (e, t, n) {
        t = (n ? (0, ce.A)(e, t, n) : void 0 === t) ? 1 : me(he(t), 0);
        var r = null == e ? 0 : e.length;
        if (!r || t < 1) return [];
        for (var o = 0, i = 0, l = Array(pe(r / t)); o < r; )
          l[i++] = ue(e, o, (o += t));
        return l;
      };
      function be(e) {
        return (e && e.ownerDocument) || document;
      }
      function we(e, t) {
        return (function (e) {
          var t = be(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var ye = /([A-Z])/g;
      var Se = /^ms-/;
      function Ce(e) {
        return (function (e) {
          return e.replace(ye, "-$1").toLowerCase();
        })(e).replace(Se, "-ms-");
      }
      var Re =
        /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      const Ee = function (e, t) {
        var n = "",
          r = "";
        if ("string" == typeof t)
          return (
            e.style.getPropertyValue(Ce(t)) || we(e).getPropertyValue(Ce(t))
          );
        Object.keys(t).forEach(function (o) {
          var i = t[o];
          i || 0 === i
            ? !(function (e) {
                return !(!e || !Re.test(e));
              })(o)
              ? (n += Ce(o) + ": " + i + ";")
              : (r += o + "(" + i + ") ")
            : e.style.removeProperty(Ce(o));
        }),
          r && (n += "transform: " + r + ";"),
          (e.style.cssText += ";" + n);
      };
      function Ae(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
            ? e === t || !!(16 & e.compareDocumentPosition(t))
            : void 0;
      }
      function De(e) {
        return "window" in e && e.window === e
          ? e
          : ("nodeType" in (t = e) &&
              t.nodeType === document.DOCUMENT_NODE &&
              e.defaultView) ||
              !1;
        var t;
      }
      function xe(e) {
        var t = "pageXOffset" === e ? "scrollLeft" : "scrollTop";
        return function (n, r) {
          var o = De(n);
          if (void 0 === r) return o ? o[e] : n[t];
          o ? o.scrollTo(o[e], r) : (n[t] = r);
        };
      }
      const Me = xe("pageXOffset"),
        Oe = xe("pageYOffset");
      function _e(e) {
        var t = be(e),
          n = { top: 0, left: 0, height: 0, width: 0 },
          r = t && t.documentElement;
        return r && Ae(r, e)
          ? (void 0 !== e.getBoundingClientRect &&
              (n = e.getBoundingClientRect()),
            (n = {
              top: n.top + Oe(r) - (r.clientTop || 0),
              left: n.left + Me(r) - (r.clientLeft || 0),
              width: n.width,
              height: n.height,
            }))
          : n;
      }
      var ke = function (e) {
        return !!e && "offsetParent" in e;
      };
      function Pe(e, t) {
        var n,
          r = { top: 0, left: 0 };
        if ("fixed" === Ee(e, "position")) n = e.getBoundingClientRect();
        else {
          var o =
            t ||
            (function (e) {
              for (
                var t = be(e), n = e && e.offsetParent;
                ke(n) &&
                "HTML" !== n.nodeName &&
                "static" === Ee(n, "position");
              )
                n = n.offsetParent;
              return n || t.documentElement;
            })(e);
          (n = _e(e)),
            "html" !==
              (function (e) {
                return e.nodeName && e.nodeName.toLowerCase();
              })(o) && (r = _e(o));
          var i = String(Ee(o, "borderTopWidth") || 0);
          r.top += parseInt(i, 10) - Oe(o) || 0;
          var l = String(Ee(o, "borderLeftWidth") || 0);
          r.left += parseInt(l, 10) - Me(o) || 0;
        }
        var a = String(Ee(e, "marginTop") || 0),
          s = String(Ee(e, "marginLeft") || 0);
        return (0, b.A)({}, n, {
          top: n.top - r.top - (parseInt(a, 10) || 0),
          left: n.left - r.left - (parseInt(s, 10) || 0),
        });
      }
      const Fe = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var Ie = new Date().getTime();
      var Te = "clearTimeout",
        ze = function (e) {
          var t = new Date().getTime(),
            n = Math.max(0, 16 - (t - Ie)),
            r = setTimeout(e, n);
          return (Ie = t), r;
        },
        Le = function (e, t) {
          return (
            e + (e ? t[0].toUpperCase() + t.substr(1) : t) + "AnimationFrame"
          );
        };
      Fe &&
        ["", "webkit", "moz", "o", "ms"].some(function (e) {
          var t = Le(e, "request");
          return (
            t in window &&
              ((Te = Le(e, "cancel")),
              (ze = function (e) {
                return window[t](e);
              })),
            !!ze
          );
        });
      var Ve = function (e) {
          "function" == typeof window[Te] && window[Te](e);
        },
        Ne = ze,
        je = n(72739);
      function He() {
        return (0, d.useState)(null);
      }
      const Ge = (e) =>
        e && "function" != typeof e
          ? (t) => {
              e.current = t;
            }
          : e;
      const Be = function (e, t) {
        return (0, d.useMemo)(
          () =>
            (function (e, t) {
              const n = Ge(e),
                r = Ge(t);
              return (e) => {
                n && n(e), r && r(e);
              };
            })(e, t),
          [e, t],
        );
      };
      var We = "top",
        qe = "bottom",
        Ye = "right",
        Ue = "left",
        $e = "auto",
        Ke = [We, qe, Ye, Ue],
        Xe = "start",
        Ze = "end",
        Je = "clippingParents",
        Qe = "viewport",
        et = "popper",
        tt = "reference",
        nt = Ke.reduce(function (e, t) {
          return e.concat([t + "-" + Xe, t + "-" + Ze]);
        }, []),
        rt = [].concat(Ke, [$e]).reduce(function (e, t) {
          return e.concat([t, t + "-" + Xe, t + "-" + Ze]);
        }, []),
        ot = [
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
      const it = function (e) {
        const t = (function () {
          const e = (0, d.useRef)(!0),
            t = (0, d.useRef)(() => e.current);
          return (
            (0, d.useEffect)(
              () => (
                (e.current = !0),
                () => {
                  e.current = !1;
                }
              ),
              [],
            ),
            t.current
          );
        })();
        return [
          e[0],
          (0, d.useCallback)(
            (n) => {
              if (t()) return e[1](n);
            },
            [t, e[1]],
          ),
        ];
      };
      function lt(e) {
        return e.split("-")[0];
      }
      function at(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function st(e) {
        return e instanceof at(e).Element || e instanceof Element;
      }
      function ut(e) {
        return e instanceof at(e).HTMLElement || e instanceof HTMLElement;
      }
      function ct(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof at(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var dt = Math.max,
        ft = Math.min,
        gt = Math.round;
      function ht() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function pt() {
        return !/^((?!chrome|android).)*safari/i.test(ht());
      }
      function mt(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          o = 1,
          i = 1;
        t &&
          ut(e) &&
          ((o = (e.offsetWidth > 0 && gt(r.width) / e.offsetWidth) || 1),
          (i = (e.offsetHeight > 0 && gt(r.height) / e.offsetHeight) || 1));
        var l = (st(e) ? at(e) : window).visualViewport,
          a = !pt() && n,
          s = (r.left + (a && l ? l.offsetLeft : 0)) / o,
          u = (r.top + (a && l ? l.offsetTop : 0)) / i,
          c = r.width / o,
          d = r.height / i;
        return {
          width: c,
          height: d,
          top: u,
          right: s + c,
          bottom: u + d,
          left: s,
          x: s,
          y: u,
        };
      }
      function vt(e) {
        var t = mt(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function bt(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && ct(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function wt(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function yt(e) {
        return at(e).getComputedStyle(e);
      }
      function St(e) {
        return ["table", "td", "th"].indexOf(wt(e)) >= 0;
      }
      function Ct(e) {
        return ((st(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function Rt(e) {
        return "html" === wt(e)
          ? e
          : e.assignedSlot || e.parentNode || (ct(e) ? e.host : null) || Ct(e);
      }
      function Et(e) {
        return ut(e) && "fixed" !== yt(e).position ? e.offsetParent : null;
      }
      function At(e) {
        for (
          var t = at(e), n = Et(e);
          n && St(n) && "static" === yt(n).position;
        )
          n = Et(n);
        return n &&
          ("html" === wt(n) ||
            ("body" === wt(n) && "static" === yt(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(ht());
                if (
                  /Trident/i.test(ht()) &&
                  ut(e) &&
                  "fixed" === yt(e).position
                )
                  return null;
                var n = Rt(e);
                for (
                  ct(n) && (n = n.host);
                  ut(n) && ["html", "body"].indexOf(wt(n)) < 0;
                ) {
                  var r = yt(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function Dt(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function xt(e, t, n) {
        return dt(e, ft(t, n));
      }
      function Mt(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function Ot(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      const _t = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            r = e.name,
            o = e.options,
            i = n.elements.arrow,
            l = n.modifiersData.popperOffsets,
            a = lt(n.placement),
            s = Dt(a),
            u = [Ue, Ye].indexOf(a) >= 0 ? "height" : "width";
          if (i && l) {
            var c = (function (e, t) {
                return Mt(
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
                    : Ot(e, Ke),
                );
              })(o.padding, n),
              d = vt(i),
              f = "y" === s ? We : Ue,
              g = "y" === s ? qe : Ye,
              h =
                n.rects.reference[u] +
                n.rects.reference[s] -
                l[s] -
                n.rects.popper[u],
              p = l[s] - n.rects.reference[s],
              m = At(i),
              v = m
                ? "y" === s
                  ? m.clientHeight || 0
                  : m.clientWidth || 0
                : 0,
              b = h / 2 - p / 2,
              w = c[f],
              y = v - d[u] - c[g],
              S = v / 2 - d[u] / 2 + b,
              C = xt(w, S, y),
              R = s;
            n.modifiersData[r] =
              (((t = {})[R] = C), (t.centerOffset = C - S), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" != typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            bt(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function kt(e) {
        return e.split("-")[1];
      }
      var Pt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Ft(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          o = e.placement,
          i = e.variation,
          l = e.offsets,
          a = e.position,
          s = e.gpuAcceleration,
          u = e.adaptive,
          c = e.roundOffsets,
          d = e.isFixed,
          f = l.x,
          g = void 0 === f ? 0 : f,
          h = l.y,
          p = void 0 === h ? 0 : h,
          m = "function" == typeof c ? c({ x: g, y: p }) : { x: g, y: p };
        (g = m.x), (p = m.y);
        var v = l.hasOwnProperty("x"),
          b = l.hasOwnProperty("y"),
          w = Ue,
          y = We,
          S = window;
        if (u) {
          var C = At(n),
            R = "clientHeight",
            E = "clientWidth";
          if (
            (C === at(n) &&
              "static" !== yt((C = Ct(n))).position &&
              "absolute" === a &&
              ((R = "scrollHeight"), (E = "scrollWidth")),
            o === We || ((o === Ue || o === Ye) && i === Ze))
          )
            (y = qe),
              (p -=
                (d && C === S && S.visualViewport
                  ? S.visualViewport.height
                  : C[R]) - r.height),
              (p *= s ? 1 : -1);
          if (o === Ue || ((o === We || o === qe) && i === Ze))
            (w = Ye),
              (g -=
                (d && C === S && S.visualViewport
                  ? S.visualViewport.width
                  : C[E]) - r.width),
              (g *= s ? 1 : -1);
        }
        var A,
          D = Object.assign({ position: a }, u && Pt),
          x =
            !0 === c
              ? (function (e, t) {
                  var n = e.x,
                    r = e.y,
                    o = t.devicePixelRatio || 1;
                  return { x: gt(n * o) / o || 0, y: gt(r * o) / o || 0 };
                })({ x: g, y: p }, at(n))
              : { x: g, y: p };
        return (
          (g = x.x),
          (p = x.y),
          s
            ? Object.assign(
                {},
                D,
                (((A = {})[y] = b ? "0" : ""),
                (A[w] = v ? "0" : ""),
                (A.transform =
                  (S.devicePixelRatio || 1) <= 1
                    ? "translate(" + g + "px, " + p + "px)"
                    : "translate3d(" + g + "px, " + p + "px, 0)"),
                A),
              )
            : Object.assign(
                {},
                D,
                (((t = {})[y] = b ? p + "px" : ""),
                (t[w] = v ? g + "px" : ""),
                (t.transform = ""),
                t),
              )
        );
      }
      const It = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = n.gpuAcceleration,
            o = void 0 === r || r,
            i = n.adaptive,
            l = void 0 === i || i,
            a = n.roundOffsets,
            s = void 0 === a || a,
            u = {
              placement: lt(t.placement),
              variation: kt(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: o,
              isFixed: "fixed" === t.options.strategy,
            };
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              Ft(
                Object.assign({}, u, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: l,
                  roundOffsets: s,
                }),
              ),
            )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                Ft(
                  Object.assign({}, u, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: s,
                  }),
                ),
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement,
            }));
        },
        data: {},
      };
      var Tt = { passive: !0 };
      const zt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            n = e.instance,
            r = e.options,
            o = r.scroll,
            i = void 0 === o || o,
            l = r.resize,
            a = void 0 === l || l,
            s = at(t.elements.popper),
            u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            i &&
              u.forEach(function (e) {
                e.addEventListener("scroll", n.update, Tt);
              }),
            a && s.addEventListener("resize", n.update, Tt),
            function () {
              i &&
                u.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, Tt);
                }),
                a && s.removeEventListener("resize", n.update, Tt);
            }
          );
        },
        data: {},
      };
      var Lt = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function Vt(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return Lt[e];
        });
      }
      var Nt = { start: "end", end: "start" };
      function jt(e) {
        return e.replace(/start|end/g, function (e) {
          return Nt[e];
        });
      }
      function Ht(e) {
        var t = at(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function Gt(e) {
        return mt(Ct(e)).left + Ht(e).scrollLeft;
      }
      function Bt(e) {
        var t = yt(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function Wt(e) {
        return ["html", "body", "#document"].indexOf(wt(e)) >= 0
          ? e.ownerDocument.body
          : ut(e) && Bt(e)
            ? e
            : Wt(Rt(e));
      }
      function qt(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = Wt(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = at(r),
          l = o ? [i].concat(i.visualViewport || [], Bt(r) ? r : []) : r,
          a = t.concat(l);
        return o ? a : a.concat(qt(Rt(l)));
      }
      function Yt(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function Ut(e, t, n) {
        return t === Qe
          ? Yt(
              (function (e, t) {
                var n = at(e),
                  r = Ct(e),
                  o = n.visualViewport,
                  i = r.clientWidth,
                  l = r.clientHeight,
                  a = 0,
                  s = 0;
                if (o) {
                  (i = o.width), (l = o.height);
                  var u = pt();
                  (u || (!u && "fixed" === t)) &&
                    ((a = o.offsetLeft), (s = o.offsetTop));
                }
                return { width: i, height: l, x: a + Gt(e), y: s };
              })(e, n),
            )
          : st(t)
            ? (function (e, t) {
                var n = mt(e, !1, "fixed" === t);
                return (
                  (n.top = n.top + e.clientTop),
                  (n.left = n.left + e.clientLeft),
                  (n.bottom = n.top + e.clientHeight),
                  (n.right = n.left + e.clientWidth),
                  (n.width = e.clientWidth),
                  (n.height = e.clientHeight),
                  (n.x = n.left),
                  (n.y = n.top),
                  n
                );
              })(t, n)
            : Yt(
                (function (e) {
                  var t,
                    n = Ct(e),
                    r = Ht(e),
                    o = null == (t = e.ownerDocument) ? void 0 : t.body,
                    i = dt(
                      n.scrollWidth,
                      n.clientWidth,
                      o ? o.scrollWidth : 0,
                      o ? o.clientWidth : 0,
                    ),
                    l = dt(
                      n.scrollHeight,
                      n.clientHeight,
                      o ? o.scrollHeight : 0,
                      o ? o.clientHeight : 0,
                    ),
                    a = -r.scrollLeft + Gt(e),
                    s = -r.scrollTop;
                  return (
                    "rtl" === yt(o || n).direction &&
                      (a += dt(n.clientWidth, o ? o.clientWidth : 0) - i),
                    { width: i, height: l, x: a, y: s }
                  );
                })(Ct(e)),
              );
      }
      function $t(e, t, n, r) {
        var o =
            "clippingParents" === t
              ? (function (e) {
                  var t = qt(Rt(e)),
                    n =
                      ["absolute", "fixed"].indexOf(yt(e).position) >= 0 &&
                      ut(e)
                        ? At(e)
                        : e;
                  return st(n)
                    ? t.filter(function (e) {
                        return st(e) && bt(e, n) && "body" !== wt(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          i = [].concat(o, [n]),
          l = i[0],
          a = i.reduce(
            function (t, n) {
              var o = Ut(e, n, r);
              return (
                (t.top = dt(o.top, t.top)),
                (t.right = ft(o.right, t.right)),
                (t.bottom = ft(o.bottom, t.bottom)),
                (t.left = dt(o.left, t.left)),
                t
              );
            },
            Ut(e, l, r),
          );
        return (
          (a.width = a.right - a.left),
          (a.height = a.bottom - a.top),
          (a.x = a.left),
          (a.y = a.top),
          a
        );
      }
      function Kt(e) {
        var t,
          n = e.reference,
          r = e.element,
          o = e.placement,
          i = o ? lt(o) : null,
          l = o ? kt(o) : null,
          a = n.x + n.width / 2 - r.width / 2,
          s = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case We:
            t = { x: a, y: n.y - r.height };
            break;
          case qe:
            t = { x: a, y: n.y + n.height };
            break;
          case Ye:
            t = { x: n.x + n.width, y: s };
            break;
          case Ue:
            t = { x: n.x - r.width, y: s };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var u = i ? Dt(i) : null;
        if (null != u) {
          var c = "y" === u ? "height" : "width";
          switch (l) {
            case Xe:
              t[u] = t[u] - (n[c] / 2 - r[c] / 2);
              break;
            case Ze:
              t[u] = t[u] + (n[c] / 2 - r[c] / 2);
          }
        }
        return t;
      }
      function Xt(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          o = void 0 === r ? e.placement : r,
          i = n.strategy,
          l = void 0 === i ? e.strategy : i,
          a = n.boundary,
          s = void 0 === a ? Je : a,
          u = n.rootBoundary,
          c = void 0 === u ? Qe : u,
          d = n.elementContext,
          f = void 0 === d ? et : d,
          g = n.altBoundary,
          h = void 0 !== g && g,
          p = n.padding,
          m = void 0 === p ? 0 : p,
          v = Mt("number" != typeof m ? m : Ot(m, Ke)),
          b = f === et ? tt : et,
          w = e.rects.popper,
          y = e.elements[h ? b : f],
          S = $t(
            st(y) ? y : y.contextElement || Ct(e.elements.popper),
            s,
            c,
            l,
          ),
          C = mt(e.elements.reference),
          R = Kt({
            reference: C,
            element: w,
            strategy: "absolute",
            placement: o,
          }),
          E = Yt(Object.assign({}, w, R)),
          A = f === et ? E : C,
          D = {
            top: S.top - A.top + v.top,
            bottom: A.bottom - S.bottom + v.bottom,
            left: S.left - A.left + v.left,
            right: A.right - S.right + v.right,
          },
          x = e.modifiersData.offset;
        if (f === et && x) {
          var M = x[o];
          Object.keys(D).forEach(function (e) {
            var t = [Ye, qe].indexOf(e) >= 0 ? 1 : -1,
              n = [We, qe].indexOf(e) >= 0 ? "y" : "x";
            D[e] += M[n] * t;
          });
        }
        return D;
      }
      const Zt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name;
          if (!t.modifiersData[r]._skip) {
            for (
              var o = n.mainAxis,
                i = void 0 === o || o,
                l = n.altAxis,
                a = void 0 === l || l,
                s = n.fallbackPlacements,
                u = n.padding,
                c = n.boundary,
                d = n.rootBoundary,
                f = n.altBoundary,
                g = n.flipVariations,
                h = void 0 === g || g,
                p = n.allowedAutoPlacements,
                m = t.options.placement,
                v = lt(m),
                b =
                  s ||
                  (v === m || !h
                    ? [Vt(m)]
                    : (function (e) {
                        if (lt(e) === $e) return [];
                        var t = Vt(e);
                        return [jt(e), t, jt(t)];
                      })(m)),
                w = [m].concat(b).reduce(function (e, n) {
                  return e.concat(
                    lt(n) === $e
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var n = t,
                            r = n.placement,
                            o = n.boundary,
                            i = n.rootBoundary,
                            l = n.padding,
                            a = n.flipVariations,
                            s = n.allowedAutoPlacements,
                            u = void 0 === s ? rt : s,
                            c = kt(r),
                            d = c
                              ? a
                                ? nt
                                : nt.filter(function (e) {
                                    return kt(e) === c;
                                  })
                              : Ke,
                            f = d.filter(function (e) {
                              return u.indexOf(e) >= 0;
                            });
                          0 === f.length && (f = d);
                          var g = f.reduce(function (t, n) {
                            return (
                              (t[n] = Xt(e, {
                                placement: n,
                                boundary: o,
                                rootBoundary: i,
                                padding: l,
                              })[lt(n)]),
                              t
                            );
                          }, {});
                          return Object.keys(g).sort(function (e, t) {
                            return g[e] - g[t];
                          });
                        })(t, {
                          placement: n,
                          boundary: c,
                          rootBoundary: d,
                          padding: u,
                          flipVariations: h,
                          allowedAutoPlacements: p,
                        })
                      : n,
                  );
                }, []),
                y = t.rects.reference,
                S = t.rects.popper,
                C = new Map(),
                R = !0,
                E = w[0],
                A = 0;
              A < w.length;
              A++
            ) {
              var D = w[A],
                x = lt(D),
                M = kt(D) === Xe,
                O = [We, qe].indexOf(x) >= 0,
                _ = O ? "width" : "height",
                k = Xt(t, {
                  placement: D,
                  boundary: c,
                  rootBoundary: d,
                  altBoundary: f,
                  padding: u,
                }),
                P = O ? (M ? Ye : Ue) : M ? qe : We;
              y[_] > S[_] && (P = Vt(P));
              var F = Vt(P),
                I = [];
              if (
                (i && I.push(k[x] <= 0),
                a && I.push(k[P] <= 0, k[F] <= 0),
                I.every(function (e) {
                  return e;
                }))
              ) {
                (E = D), (R = !1);
                break;
              }
              C.set(D, I);
            }
            if (R)
              for (
                var T = function (e) {
                    var t = w.find(function (t) {
                      var n = C.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (E = t), "break";
                  },
                  z = h ? 3 : 1;
                z > 0;
                z--
              ) {
                if ("break" === T(z)) break;
              }
            t.placement !== E &&
              ((t.modifiersData[r]._skip = !0),
              (t.placement = E),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function Jt(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function Qt(e) {
        return [We, Ye, qe, Ue].some(function (t) {
          return e[t] >= 0;
        });
      }
      const en = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.offset,
            i = void 0 === o ? [0, 0] : o,
            l = rt.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = lt(e),
                    o = [Ue, We].indexOf(r) >= 0 ? -1 : 1,
                    i =
                      "function" == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    l = i[0],
                    a = i[1];
                  return (
                    (l = l || 0),
                    (a = (a || 0) * o),
                    [Ue, Ye].indexOf(r) >= 0 ? { x: a, y: l } : { x: l, y: a }
                  );
                })(n, t.rects, i)),
                e
              );
            }, {}),
            a = l[t.placement],
            s = a.x,
            u = a.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += s),
            (t.modifiersData.popperOffsets.y += u)),
            (t.modifiersData[r] = l);
        },
      };
      const tn = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.mainAxis,
            i = void 0 === o || o,
            l = n.altAxis,
            a = void 0 !== l && l,
            s = n.boundary,
            u = n.rootBoundary,
            c = n.altBoundary,
            d = n.padding,
            f = n.tether,
            g = void 0 === f || f,
            h = n.tetherOffset,
            p = void 0 === h ? 0 : h,
            m = Xt(t, {
              boundary: s,
              rootBoundary: u,
              padding: d,
              altBoundary: c,
            }),
            v = lt(t.placement),
            b = kt(t.placement),
            w = !b,
            y = Dt(v),
            S = "x" === y ? "y" : "x",
            C = t.modifiersData.popperOffsets,
            R = t.rects.reference,
            E = t.rects.popper,
            A =
              "function" == typeof p
                ? p(Object.assign({}, t.rects, { placement: t.placement }))
                : p,
            D =
              "number" == typeof A
                ? { mainAxis: A, altAxis: A }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, A),
            x = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            M = { x: 0, y: 0 };
          if (C) {
            if (i) {
              var O,
                _ = "y" === y ? We : Ue,
                k = "y" === y ? qe : Ye,
                P = "y" === y ? "height" : "width",
                F = C[y],
                I = F + m[_],
                T = F - m[k],
                z = g ? -E[P] / 2 : 0,
                L = b === Xe ? R[P] : E[P],
                V = b === Xe ? -E[P] : -R[P],
                N = t.elements.arrow,
                j = g && N ? vt(N) : { width: 0, height: 0 },
                H = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                G = H[_],
                B = H[k],
                W = xt(0, R[P], j[P]),
                q = w
                  ? R[P] / 2 - z - W - G - D.mainAxis
                  : L - W - G - D.mainAxis,
                Y = w
                  ? -R[P] / 2 + z + W + B + D.mainAxis
                  : V + W + B + D.mainAxis,
                U = t.elements.arrow && At(t.elements.arrow),
                $ = U ? ("y" === y ? U.clientTop || 0 : U.clientLeft || 0) : 0,
                K = null != (O = null == x ? void 0 : x[y]) ? O : 0,
                X = F + Y - K,
                Z = xt(g ? ft(I, F + q - K - $) : I, F, g ? dt(T, X) : T);
              (C[y] = Z), (M[y] = Z - F);
            }
            if (a) {
              var J,
                Q = "x" === y ? We : Ue,
                ee = "x" === y ? qe : Ye,
                te = C[S],
                ne = "y" === S ? "height" : "width",
                re = te + m[Q],
                oe = te - m[ee],
                ie = -1 !== [We, Ue].indexOf(v),
                le = null != (J = null == x ? void 0 : x[S]) ? J : 0,
                ae = ie ? re : te - R[ne] - E[ne] - le + D.altAxis,
                se = ie ? te + R[ne] + E[ne] - le - D.altAxis : oe,
                ue =
                  g && ie
                    ? (function (e, t, n) {
                        var r = xt(e, t, n);
                        return r > n ? n : r;
                      })(ae, te, se)
                    : xt(g ? ae : re, te, g ? se : oe);
              (C[S] = ue), (M[S] = ue - te);
            }
            t.modifiersData[r] = M;
          }
        },
        requiresIfExists: ["offset"],
      };
      function nn(e, t, n) {
        void 0 === n && (n = !1);
        var r,
          o,
          i = ut(t),
          l =
            ut(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = gt(t.width) / e.offsetWidth || 1,
                r = gt(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          a = Ct(t),
          s = mt(e, l, n),
          u = { scrollLeft: 0, scrollTop: 0 },
          c = { x: 0, y: 0 };
        return (
          (i || (!i && !n)) &&
            (("body" !== wt(t) || Bt(a)) &&
              (u =
                (r = t) !== at(r) && ut(r)
                  ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop }
                  : Ht(r)),
            ut(t)
              ? (((c = mt(t, !0)).x += t.clientLeft), (c.y += t.clientTop))
              : a && (c.x = Gt(a))),
          {
            x: s.left + u.scrollLeft - c.x,
            y: s.top + u.scrollTop - c.y,
            width: s.width,
            height: s.height,
          }
        );
      }
      function rn(e) {
        var t = new Map(),
          n = new Set(),
          r = [];
        function o(e) {
          n.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!n.has(e)) {
                  var r = t.get(e);
                  r && o(r);
                }
              }),
            r.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || o(e);
          }),
          r
        );
      }
      var on = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function ln() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function an(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          i = void 0 === o ? on : o;
        return function (e, t, n) {
          void 0 === n && (n = i);
          var o,
            l,
            a = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, on, i),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            s = [],
            u = !1,
            c = {
              state: a,
              setOptions: function (n) {
                var o = "function" == typeof n ? n(a.options) : n;
                d(),
                  (a.options = Object.assign({}, i, a.options, o)),
                  (a.scrollParents = {
                    reference: st(e)
                      ? qt(e)
                      : e.contextElement
                        ? qt(e.contextElement)
                        : [],
                    popper: qt(t),
                  });
                var l,
                  u,
                  f = (function (e) {
                    var t = rn(e);
                    return ot.reduce(function (e, n) {
                      return e.concat(
                        t.filter(function (e) {
                          return e.phase === n;
                        }),
                      );
                    }, []);
                  })(
                    ((l = [].concat(r, a.options.modifiers)),
                    (u = l.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {})),
                    Object.keys(u).map(function (e) {
                      return u[e];
                    })),
                  );
                return (
                  (a.orderedModifiers = f.filter(function (e) {
                    return e.enabled;
                  })),
                  a.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      o = e.effect;
                    if ("function" == typeof o) {
                      var i = o({ state: a, name: t, instance: c, options: r }),
                        l = function () {};
                      s.push(i || l);
                    }
                  }),
                  c.update()
                );
              },
              forceUpdate: function () {
                if (!u) {
                  var e = a.elements,
                    t = e.reference,
                    n = e.popper;
                  if (ln(t, n)) {
                    (a.rects = {
                      reference: nn(t, At(n), "fixed" === a.options.strategy),
                      popper: vt(n),
                    }),
                      (a.reset = !1),
                      (a.placement = a.options.placement),
                      a.orderedModifiers.forEach(function (e) {
                        return (a.modifiersData[e.name] = Object.assign(
                          {},
                          e.data,
                        ));
                      });
                    for (var r = 0; r < a.orderedModifiers.length; r++)
                      if (!0 !== a.reset) {
                        var o = a.orderedModifiers[r],
                          i = o.fn,
                          l = o.options,
                          s = void 0 === l ? {} : l,
                          d = o.name;
                        "function" == typeof i &&
                          (a =
                            i({ state: a, options: s, name: d, instance: c }) ||
                            a);
                      } else (a.reset = !1), (r = -1);
                  }
                }
              },
              update:
                ((o = function () {
                  return new Promise(function (e) {
                    c.forceUpdate(), e(a);
                  });
                }),
                function () {
                  return (
                    l ||
                      (l = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (l = void 0), e(o());
                        });
                      })),
                    l
                  );
                }),
              destroy: function () {
                d(), (u = !0);
              },
            };
          if (!ln(e, t)) return c;
          function d() {
            s.forEach(function (e) {
              return e();
            }),
              (s = []);
          }
          return (
            c.setOptions(n).then(function (e) {
              !u && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            c
          );
        };
      }
      var sn = an({
          defaultModifiers: [
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  n = e.name,
                  r = t.rects.reference,
                  o = t.rects.popper,
                  i = t.modifiersData.preventOverflow,
                  l = Xt(t, { elementContext: "reference" }),
                  a = Xt(t, { altBoundary: !0 }),
                  s = Jt(l, r),
                  u = Jt(a, o, i),
                  c = Qt(s),
                  d = Qt(u);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: s,
                  popperEscapeOffsets: u,
                  isReferenceHidden: c,
                  hasPopperEscaped: d,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": c,
                      "data-popper-escaped": d,
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
                  n = e.name;
                t.modifiersData[n] = Kt({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            It,
            zt,
            en,
            Zt,
            tn,
            _t,
          ],
        }),
        un = function (e) {
          return {
            position: e,
            top: "0",
            left: "0",
            opacity: "0",
            pointerEvents: "none",
          };
        },
        cn = { name: "applyStyles", enabled: !1 },
        dn = {
          name: "ariaDescribedBy",
          enabled: !0,
          phase: "afterWrite",
          effect: function (e) {
            var t = e.state;
            return function () {
              var e = t.elements,
                n = e.reference,
                r = e.popper;
              if ("removeAttribute" in n) {
                var o = (n.getAttribute("aria-describedby") || "")
                  .split(",")
                  .filter(function (e) {
                    return e.trim() !== r.id;
                  });
                o.length
                  ? n.setAttribute("aria-describedby", o.join(","))
                  : n.removeAttribute("aria-describedby");
              }
            };
          },
          fn: function (e) {
            var t,
              n = e.state.elements,
              r = n.popper,
              o = n.reference,
              i =
                null == (t = r.getAttribute("role")) ? void 0 : t.toLowerCase();
            if (r.id && "tooltip" === i && "setAttribute" in o) {
              var l = o.getAttribute("aria-describedby");
              if (l && -1 !== l.split(",").indexOf(r.id)) return;
              o.setAttribute("aria-describedby", l ? l + "," + r.id : r.id);
            }
          },
        },
        fn = [];
      const gn = function (e, t, n) {
        var r = void 0 === n ? {} : n,
          o = r.enabled,
          i = void 0 === o || o,
          l = r.placement,
          a = void 0 === l ? "bottom" : l,
          s = r.strategy,
          u = void 0 === s ? "absolute" : s,
          c = r.modifiers,
          f = void 0 === c ? fn : c,
          g = (0, v.A)(r, ["enabled", "placement", "strategy", "modifiers"]),
          h = (0, d.useRef)(),
          p = (0, d.useCallback)(function () {
            var e;
            null == (e = h.current) || e.update();
          }, []),
          m = (0, d.useCallback)(function () {
            var e;
            null == (e = h.current) || e.forceUpdate();
          }, []),
          w = it(
            (0, d.useState)({
              placement: a,
              update: p,
              forceUpdate: m,
              attributes: {},
              styles: { popper: un(u), arrow: {} },
            }),
          ),
          y = w[0],
          S = w[1],
          C = (0, d.useMemo)(
            function () {
              return {
                name: "updateStateModifier",
                enabled: !0,
                phase: "write",
                requires: ["computeStyles"],
                fn: function (e) {
                  var t = e.state,
                    n = {},
                    r = {};
                  Object.keys(t.elements).forEach(function (e) {
                    (n[e] = t.styles[e]), (r[e] = t.attributes[e]);
                  }),
                    S({
                      state: t,
                      styles: n,
                      attributes: r,
                      update: p,
                      forceUpdate: m,
                      placement: t.placement,
                    });
                },
              };
            },
            [p, m, S],
          );
        return (
          (0, d.useEffect)(
            function () {
              h.current &&
                i &&
                h.current.setOptions({
                  placement: a,
                  strategy: u,
                  modifiers: [].concat(f, [C, cn]),
                });
            },
            [u, a, C, i],
          ),
          (0, d.useEffect)(
            function () {
              if (i && null != e && null != t)
                return (
                  (h.current = sn(
                    e,
                    t,
                    (0, b.A)({}, g, {
                      placement: a,
                      strategy: u,
                      modifiers: [].concat(f, [dn, C]),
                    }),
                  )),
                  function () {
                    null != h.current &&
                      (h.current.destroy(),
                      (h.current = void 0),
                      S(function (e) {
                        return (0, b.A)({}, e, {
                          attributes: {},
                          styles: { popper: un(u) },
                        });
                      }));
                  }
                );
            },
            [i, e, t],
          ),
          y
        );
      };
      var hn = !1,
        pn = !1;
      try {
        var mn = {
          get passive() {
            return (hn = !0);
          },
          get once() {
            return (pn = hn = !0);
          },
        };
        Fe &&
          (window.addEventListener("test", mn, mn),
          window.removeEventListener("test", mn, !0));
      } catch (e) {}
      const vn = function (e, t, n, r) {
        if (r && "boolean" != typeof r && !pn) {
          var o = r.once,
            i = r.capture,
            l = n;
          !pn &&
            o &&
            ((l =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, i), n.call(this, r);
              }),
            (n.__once = l)),
            e.addEventListener(t, l, hn ? r : i);
        }
        e.addEventListener(t, n, r);
      };
      const bn = function (e, t, n, r) {
        var o = r && "boolean" != typeof r ? r.capture : r;
        e.removeEventListener(t, n, o),
          n.__once && e.removeEventListener(t, n.__once, o);
      };
      const wn = function (e, t, n, r) {
        return (
          vn(e, t, n, r),
          function () {
            bn(e, t, n, r);
          }
        );
      };
      const yn = function (e) {
        const t = (0, d.useRef)(e);
        return (
          (0, d.useEffect)(() => {
            t.current = e;
          }, [e]),
          t
        );
      };
      function Sn(e) {
        const t = yn(e);
        return (0, d.useCallback)(
          function (...e) {
            return t.current && t.current(...e);
          },
          [t],
        );
      }
      var Cn = n(67501),
        Rn = n.n(Cn);
      const En = function (e) {
        return be(
          (function (e) {
            return e && "setState" in e
              ? je.findDOMNode(e)
              : null != e
                ? e
                : null;
          })(e),
        );
      };
      var An = function () {};
      var Dn = function (e) {
        return e && ("current" in e ? e.current : e);
      };
      const xn = function (e, t, n) {
        var r = void 0 === n ? {} : n,
          o = r.disabled,
          i = r.clickTrigger,
          l = void 0 === i ? "click" : i,
          a = (0, d.useRef)(!1),
          s = t || An,
          u = (0, d.useCallback)(
            function (t) {
              var n,
                r,
                o = Dn(e);
              Rn()(
                !!o,
                "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node",
              ),
                (a.current = !(
                  o &&
                  ((r = t),
                  !(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey)) &&
                  (function (e) {
                    return 0 === e.button;
                  })(t) &&
                  !Ae(
                    o,
                    null !=
                      (n =
                        null == t.composedPath ? void 0 : t.composedPath()[0])
                      ? n
                      : t.target,
                  )
                ));
            },
            [e],
          ),
          c = Sn(function (e) {
            a.current || s(e);
          }),
          f = Sn(function (e) {
            27 === e.keyCode && s(e);
          });
        (0, d.useEffect)(
          function () {
            if (!o && null != e) {
              var t = window.event,
                n = En(Dn(e)),
                r = wn(n, l, u, !0),
                i = wn(n, l, function (e) {
                  e !== t ? c(e) : (t = void 0);
                }),
                a = wn(n, "keyup", function (e) {
                  e !== t ? f(e) : (t = void 0);
                }),
                s = [];
              return (
                "ontouchstart" in n.documentElement &&
                  (s = [].slice.call(n.body.children).map(function (e) {
                    return wn(e, "mousemove", An);
                  })),
                function () {
                  r(),
                    i(),
                    a(),
                    s.forEach(function (e) {
                      return e();
                    });
                }
              );
            }
          },
          [e, o, l, u, c, f],
        );
      };
      var Mn = function (e) {
        var t;
        return "undefined" == typeof document
          ? null
          : null == e
            ? be().body
            : ("function" == typeof e && (e = e()),
              e && "current" in e && (e = e.current),
              (null != (t = e) && t.nodeType && e) || null);
      };
      function On(e, t) {
        var n = (0, d.useState)(function () {
            return Mn(e);
          }),
          r = n[0],
          o = n[1];
        if (!r) {
          var i = Mn(e);
          i && o(i);
        }
        return (
          (0, d.useEffect)(
            function () {
              t && r && t(r);
            },
            [t, r],
          ),
          (0, d.useEffect)(
            function () {
              var t = Mn(e);
              t !== r && o(t);
            },
            [e, r],
          ),
          r
        );
      }
      function _n(e) {
        var t,
          n,
          r,
          o,
          i,
          l = e.enabled,
          a = e.enableEvents,
          s = e.placement,
          u = e.flip,
          c = e.offset,
          d = e.fixed,
          f = e.containerPadding,
          g = e.arrowElement,
          h = e.popperConfig,
          p = void 0 === h ? {} : h,
          m = (function (e) {
            var t = {};
            return Array.isArray(e)
              ? (null == e ||
                  e.forEach(function (e) {
                    t[e.name] = e;
                  }),
                t)
              : e || t;
          })(p.modifiers);
        return (0, b.A)({}, p, {
          placement: s,
          enabled: l,
          strategy: d ? "fixed" : p.strategy,
          modifiers:
            ((i = (0, b.A)({}, m, {
              eventListeners: { enabled: a },
              preventOverflow: (0, b.A)({}, m.preventOverflow, {
                options: f
                  ? (0, b.A)(
                      { padding: f },
                      null == (t = m.preventOverflow) ? void 0 : t.options,
                    )
                  : null == (n = m.preventOverflow)
                    ? void 0
                    : n.options,
              }),
              offset: {
                options: (0, b.A)(
                  { offset: c },
                  null == (r = m.offset) ? void 0 : r.options,
                ),
              },
              arrow: (0, b.A)({}, m.arrow, {
                enabled: !!g,
                options: (0, b.A)(
                  {},
                  null == (o = m.arrow) ? void 0 : o.options,
                  { element: g },
                ),
              }),
              flip: (0, b.A)({ enabled: !!u }, m.flip),
            })),
            void 0 === i && (i = {}),
            Array.isArray(i)
              ? i
              : Object.keys(i).map(function (e) {
                  return (i[e].name = e), i[e];
                })),
        });
      }
      var kn = d.forwardRef(function (e, t) {
        var n = e.flip,
          r = e.offset,
          o = e.placement,
          i = e.containerPadding,
          l = void 0 === i ? 5 : i,
          a = e.popperConfig,
          s = void 0 === a ? {} : a,
          u = e.transition,
          c = He(),
          f = c[0],
          g = c[1],
          h = He(),
          p = h[0],
          m = h[1],
          w = Be(g, t),
          y = On(e.container),
          S = On(e.target),
          C = (0, d.useState)(!e.show),
          R = C[0],
          E = C[1],
          A = gn(
            S,
            f,
            _n({
              placement: o,
              enableEvents: !!e.show,
              containerPadding: l || 5,
              flip: n,
              offset: r,
              arrowElement: p,
              popperConfig: s,
            }),
          ),
          D = A.styles,
          x = A.attributes,
          M = (0, v.A)(A, ["styles", "attributes"]);
        e.show ? R && E(!1) : e.transition || R || E(!0);
        var O = e.show || (u && !R);
        if (
          (xn(f, e.onHide, {
            disabled: !e.rootClose || e.rootCloseDisabled,
            clickTrigger: e.rootCloseEvent,
          }),
          !O)
        )
          return null;
        var _ = e.children(
          (0, b.A)({}, M, {
            show: !!e.show,
            props: (0, b.A)({}, x.popper, { style: D.popper, ref: w }),
            arrowProps: (0, b.A)({}, x.arrow, { style: D.arrow, ref: m }),
          }),
        );
        if (u) {
          var k = e.onExit,
            P = e.onExiting,
            F = e.onEnter,
            I = e.onEntering,
            T = e.onEntered;
          _ = d.createElement(
            u,
            {
              in: e.show,
              appear: !0,
              onExit: k,
              onExiting: P,
              onExited: function () {
                E(!0), e.onExited && e.onExited.apply(e, arguments);
              },
              onEnter: F,
              onEntering: I,
              onEntered: T,
            },
            _,
          );
        }
        return y ? je.createPortal(_, y) : null;
      });
      (kn.displayName = "Overlay"),
        (kn.propTypes = {
          show: E().bool,
          placement: E().oneOf(rt),
          target: E().any,
          container: E().any,
          flip: E().bool,
          children: E().func.isRequired,
          containerPadding: E().number,
          popperConfig: E().object,
          rootClose: E().bool,
          rootCloseEvent: E().oneOf(["click", "mousedown"]),
          rootCloseDisabled: E().bool,
          onHide: function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            var o;
            return e.rootClose
              ? (o = E().func).isRequired.apply(o, [e].concat(n))
              : E().func.apply(E(), [e].concat(n));
          },
          transition: E().elementType,
          onEnter: E().func,
          onEntering: E().func,
          onEntered: E().func,
          onExit: E().func,
          onExiting: E().func,
          onExited: E().func,
        });
      const Pn = kn;
      var Fn = n(13964);
      const In = function (e, t) {
        return (0, Fn.A)(e, t);
      };
      function Tn(e, t) {
        var n = De(e);
        return n ? n.innerHeight : t ? e.clientHeight : _e(e).height;
      }
      var zn,
        Ln = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function Vn(e, t) {
        if (!zn) {
          var n = document.body,
            r =
              n.matches ||
              n.matchesSelector ||
              n.webkitMatchesSelector ||
              n.mozMatchesSelector ||
              n.msMatchesSelector;
          zn = function (e, t) {
            return r.call(e, t);
          };
        }
        return zn(e, t);
      }
      function Nn(e, t, n) {
        e.closest && !n && e.closest(t);
        var r = e;
        do {
          if (Vn(r, t)) return r;
          r = r.parentElement;
        } while (r && r !== n && r.nodeType === document.ELEMENT_NODE);
        return null;
      }
      const jn = function (e, t, n, r) {
        for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
          if (t(e[i], i, e)) return i;
        return -1;
      };
      var Hn = n(17267),
        Gn = Math.max;
      const Bn = function (e, t, n) {
        var r = null == e ? 0 : e.length;
        if (!r) return -1;
        var o = null == n ? 0 : he(n);
        return o < 0 && (o = Gn(r + o, 0)), jn(e, (0, Hn.A)(t, 3), o);
      };
      var Wn = Math.ceil,
        qn = Math.max;
      const Yn = function (e, t, n, r) {
        for (var o = -1, i = qn(Wn((t - e) / (n || 1)), 0), l = Array(i); i--; )
          (l[r ? i : ++o] = e), (e += n);
        return l;
      };
      const Un = function (e) {
        return function (t, n, r) {
          return (
            r && "number" != typeof r && (0, ce.A)(t, n, r) && (n = r = void 0),
            (t = ge(t)),
            void 0 === n ? ((n = t), (t = 0)) : (n = ge(n)),
            (r = void 0 === r ? (t < n ? 1 : -1) : ge(r)),
            Yn(t, n, r, e)
          );
        };
      };
      const $n = Un();
      var Kn =
        Number.isNaN ||
        function (e) {
          return "number" == typeof e && e != e;
        };
      function Xn(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++)
          if (((r = e[n]), (o = t[n]), !(r === o || (Kn(r) && Kn(o)))))
            return !1;
        var r, o;
        return !0;
      }
      function Zn(e, t) {
        void 0 === t && (t = Xn);
        var n = null;
        function r() {
          for (var r = [], o = 0; o < arguments.length; o++)
            r[o] = arguments[o];
          if (n && n.lastThis === this && t(r, n.lastArgs)) return n.lastResult;
          var i = e.apply(this, r);
          return (n = { lastResult: i, lastArgs: r, lastThis: this }), i;
        }
        return (
          (r.clear = function () {
            n = null;
          }),
          r
        );
      }
      var Jn = n(59913),
        Qn = n(17488),
        er = n(35953),
        tr = n(47546),
        nr = n(27761),
        rr = er.A ? er.A.isConcatSpreadable : void 0;
      const or = function (e) {
        return (0, nr.A)(e) || (0, tr.A)(e) || !!(rr && e && e[rr]);
      };
      const ir = function e(t, n, r, o, i) {
        var l = -1,
          a = t.length;
        for (r || (r = or), i || (i = []); ++l < a; ) {
          var s = t[l];
          n > 0 && r(s)
            ? n > 1
              ? e(s, n - 1, r, o, i)
              : (0, Qn.A)(i, s)
            : o || (i[i.length] = s);
        }
        return i;
      };
      var lr = n(4516),
        ar = n(78350),
        sr = n(64600);
      const ur = function (e, t) {
        var n = e.length;
        for (e.sort(t); n--; ) e[n] = e[n].value;
        return e;
      };
      var cr = n(93365),
        dr = n(73914);
      const fr = function (e, t) {
        if (e !== t) {
          var n = void 0 !== e,
            r = null === e,
            o = e == e,
            i = (0, dr.A)(e),
            l = void 0 !== t,
            a = null === t,
            s = t == t,
            u = (0, dr.A)(t);
          if (
            (!a && !u && !i && e > t) ||
            (i && l && s && !a && !u) ||
            (r && l && s) ||
            (!n && s) ||
            !o
          )
            return 1;
          if (
            (!r && !i && !u && e < t) ||
            (u && n && o && !r && !i) ||
            (a && n && o) ||
            (!l && o) ||
            !s
          )
            return -1;
        }
        return 0;
      };
      const gr = function (e, t, n) {
        for (
          var r = -1,
            o = e.criteria,
            i = t.criteria,
            l = o.length,
            a = n.length;
          ++r < l;
        ) {
          var s = fr(o[r], i[r]);
          if (s) return r >= a ? s : s * ("desc" == n[r] ? -1 : 1);
        }
        return e.index - t.index;
      };
      var hr = n(41040);
      const pr = function (e, t, n) {
        t = t.length
          ? (0, lr.A)(t, function (e) {
              return (0, nr.A)(e)
                ? function (t) {
                    return (0, ar.A)(t, 1 === e.length ? e[0] : e);
                  }
                : e;
            })
          : [hr.A];
        var r = -1;
        t = (0, lr.A)(t, (0, cr.A)(Hn.A));
        var o = (0, sr.A)(e, function (e, n, o) {
          return {
            criteria: (0, lr.A)(t, function (t) {
              return t(e);
            }),
            index: ++r,
            value: e,
          };
        });
        return ur(o, function (e, t) {
          return gr(e, t, n);
        });
      };
      var mr = n(83270);
      const vr = (0, mr.A)(function (e, t) {
        if (null == e) return [];
        var n = t.length;
        return (
          n > 1 && (0, ce.A)(e, t[0], t[1])
            ? (t = [])
            : n > 2 && (0, ce.A)(t[0], t[1], t[2]) && (t = [t[0]]),
          pr(e, ir(t, 1), [])
        );
      });
      var br;
      function wr(e) {
        if (((!br && 0 !== br) || e) && Fe) {
          var t = document.createElement("div");
          (t.style.position = "absolute"),
            (t.style.top = "-9999px"),
            (t.style.width = "50px"),
            (t.style.height = "50px"),
            (t.style.overflow = "scroll"),
            document.body.appendChild(t),
            (br = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return br;
      }
      function yr(e, t) {
        var n = De(e);
        return n ? n.innerWidth : t ? e.clientWidth : _e(e).width;
      }
      var Sr = n(87537),
        Cr = n(76805),
        Rr = n(78296),
        Er = n(79474);
      function Ar(e) {
        return (0, Sr.A)(e) || (0, Cr.A)(e) || (0, Rr.A)(e) || (0, Er.A)();
      }
      var Dr = n(39234),
        xr = n(16673),
        Mr = n(9175),
        Or = n(13217),
        _r = n(99763),
        kr = n(84207),
        Pr = n(74603);
      const Fr = function (e, t) {
        return e && (0, kr.A)(t, (0, Pr.A)(t), e);
      };
      var Ir = n(70158);
      const Tr = function (e, t) {
        return e && (0, kr.A)(t, (0, Ir.A)(t), e);
      };
      var zr = n(27066),
        Lr = n(80335),
        Vr = n(25606);
      const Nr = function (e, t) {
        return (0, kr.A)(e, (0, Vr.A)(e), t);
      };
      var jr = n(57695),
        Hr = n(72097);
      const Gr = Object.getOwnPropertySymbols
        ? function (e) {
            for (var t = []; e; )
              (0, Qn.A)(t, (0, Vr.A)(e)), (e = (0, jr.A)(e));
            return t;
          }
        : Hr.A;
      const Br = function (e, t) {
        return (0, kr.A)(e, Gr(e), t);
      };
      var Wr = n(81218),
        qr = n(80647);
      const Yr = function (e) {
        return (0, qr.A)(e, Ir.A, Gr);
      };
      var Ur = n(14645),
        $r = Object.prototype.hasOwnProperty;
      const Kr = function (e) {
        var t = e.length,
          n = new e.constructor(t);
        return (
          t &&
            "string" == typeof e[0] &&
            $r.call(e, "index") &&
            ((n.index = e.index), (n.input = e.input)),
          n
        );
      };
      var Xr = n(18277);
      const Zr = function (e, t) {
        var n = t ? (0, Xr.A)(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      };
      var Jr = /\w*$/;
      const Qr = function (e) {
        var t = new e.constructor(e.source, Jr.exec(e));
        return (t.lastIndex = e.lastIndex), t;
      };
      var eo = er.A ? er.A.prototype : void 0,
        to = eo ? eo.valueOf : void 0;
      const no = function (e) {
        return to ? Object(to.call(e)) : {};
      };
      var ro = n(12649);
      const oo = function (e, t, n) {
        var r = e.constructor;
        switch (t) {
          case "[object ArrayBuffer]":
            return (0, Xr.A)(e);
          case "[object Boolean]":
          case "[object Date]":
            return new r(+e);
          case "[object DataView]":
            return Zr(e, n);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return (0, ro.A)(e, n);
          case "[object Map]":
          case "[object Set]":
            return new r();
          case "[object Number]":
          case "[object String]":
            return new r(e);
          case "[object RegExp]":
            return Qr(e);
          case "[object Symbol]":
            return no(e);
        }
      };
      var io = n(43577),
        lo = n(6314),
        ao = n(83658);
      const so = function (e) {
        return (0, ao.A)(e) && "[object Map]" == (0, Ur.A)(e);
      };
      var uo = n(23785),
        co = uo.A && uo.A.isMap;
      const fo = co ? (0, cr.A)(co) : so;
      var go = n(35181);
      const ho = function (e) {
        return (0, ao.A)(e) && "[object Set]" == (0, Ur.A)(e);
      };
      var po = uo.A && uo.A.isSet;
      const mo = po ? (0, cr.A)(po) : ho;
      var vo = "[object Arguments]",
        bo = "[object Function]",
        wo = "[object Object]",
        yo = {};
      (yo[vo] =
        yo["[object Array]"] =
        yo["[object ArrayBuffer]"] =
        yo["[object DataView]"] =
        yo["[object Boolean]"] =
        yo["[object Date]"] =
        yo["[object Float32Array]"] =
        yo["[object Float64Array]"] =
        yo["[object Int8Array]"] =
        yo["[object Int16Array]"] =
        yo["[object Int32Array]"] =
        yo["[object Map]"] =
        yo["[object Number]"] =
        yo[wo] =
        yo["[object RegExp]"] =
        yo["[object Set]"] =
        yo["[object String]"] =
        yo["[object Symbol]"] =
        yo["[object Uint8Array]"] =
        yo["[object Uint8ClampedArray]"] =
        yo["[object Uint16Array]"] =
        yo["[object Uint32Array]"] =
          !0),
        (yo["[object Error]"] = yo[bo] = yo["[object WeakMap]"] = !1);
      const So = function e(t, n, r, o, i, l) {
        var a,
          s = 1 & n,
          u = 2 & n,
          c = 4 & n;
        if ((r && (a = i ? r(t, o, i, l) : r(t)), void 0 !== a)) return a;
        if (!(0, go.A)(t)) return t;
        var d = (0, nr.A)(t);
        if (d) {
          if (((a = Kr(t)), !s)) return (0, Lr.A)(t, a);
        } else {
          var f = (0, Ur.A)(t),
            g = f == bo || "[object GeneratorFunction]" == f;
          if ((0, lo.A)(t)) return (0, zr.A)(t, s);
          if (f == wo || f == vo || (g && !i)) {
            if (((a = u || g ? {} : (0, io.A)(t)), !s))
              return u ? Br(t, Tr(a, t)) : Nr(t, Fr(a, t));
          } else {
            if (!yo[f]) return i ? t : {};
            a = oo(t, f, s);
          }
        }
        l || (l = new Mr.A());
        var h = l.get(t);
        if (h) return h;
        l.set(t, a),
          mo(t)
            ? t.forEach(function (o) {
                a.add(e(o, n, r, o, t, l));
              })
            : fo(t) &&
              t.forEach(function (o, i) {
                a.set(i, e(o, n, r, i, t, l));
              });
        var p = c ? (u ? Yr : Wr.A) : u ? Ir.A : Pr.A,
          m = d ? void 0 : p(t);
        return (
          (0, Or.A)(m || t, function (o, i) {
            m && (o = t[(i = o)]), (0, _r.A)(a, i, e(o, n, r, i, t, l));
          }),
          a
        );
      };
      var Co = n(1931);
      const Ro = function (e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0;
      };
      const Eo = function (e, t) {
        return t.length < 2 ? e : (0, ar.A)(e, ue(t, 0, -1));
      };
      var Ao = n(5269);
      const Do = function (e, t) {
        return (
          (t = (0, Co.A)(t, e)),
          null == (e = Eo(e, t)) || delete e[(0, Ao.A)(Ro(t))]
        );
      };
      var xo = n(77011);
      const Mo = function (e) {
        return (0, xo.A)(e) ? void 0 : e;
      };
      const Oo = function (e) {
        return (null == e ? 0 : e.length) ? ir(e, 1) : [];
      };
      var _o = n(75702),
        ko = n(99660);
      const Po = (function (e) {
        return (0, ko.A)((0, _o.A)(e, void 0, Oo), e + "");
      })(function (e, t) {
        var n = {};
        if (null == e) return n;
        var r = !1;
        (t = (0, lr.A)(t, function (t) {
          return (t = (0, Co.A)(t, e)), r || (r = t.length > 1), t;
        })),
          (0, kr.A)(e, Yr(e), n),
          r && (n = So(n, 7, Mo));
        for (var o = t.length; o--; ) Do(n, t[o]);
        return n;
      });
      var Fo = n(58760),
        Io = Object.prototype,
        To = Io.hasOwnProperty;
      const zo = (0, mr.A)(function (e, t) {
        e = Object(e);
        var n = -1,
          r = t.length,
          o = r > 2 ? t[2] : void 0;
        for (o && (0, ce.A)(t[0], t[1], o) && (r = 1); ++n < r; )
          for (
            var i = t[n], l = (0, Ir.A)(i), a = -1, s = l.length;
            ++a < s;
          ) {
            var u = l[a],
              c = e[u];
            (void 0 === c || ((0, Fo.A)(c, Io[u]) && !To.call(e, u))) &&
              (e[u] = i[u]);
          }
        return e;
      });
      var Lo = n(5536),
        Vo = n(25665),
        No = n(30186),
        jo = n(48693);
      const Ho = function (e, t, n) {
        var r = (0, nr.A)(e),
          o = r || (0, lo.A)(e) || (0, jo.A)(e);
        if (((t = (0, Hn.A)(t, 4)), null == n)) {
          var i = e && e.constructor;
          n = o
            ? r
              ? new i()
              : []
            : (0, go.A)(e) && (0, No.A)(i)
              ? (0, Lo.A)((0, jr.A)(e))
              : {};
        }
        return (
          (o ? Or.A : Vo.A)(e, function (e, r, o) {
            return t(n, e, r, o);
          }),
          n
        );
      };
      var Go = n(63376);
      const Bo = function (e, t) {
        var n = {};
        return (
          (t = (0, Hn.A)(t, 3)),
          (0, Vo.A)(e, function (e, r, o) {
            (0, Go.A)(n, r, t(e, r, o));
          }),
          n
        );
      };
      n(22586), n(20237), n(83632), n(43334), n(39920), n(4042), n(14240);
      function Wo(e) {
        return e.children;
      }
      var qo = "PREV",
        Yo = "NEXT",
        Uo = "TODAY",
        $o = "DATE",
        Ko = {
          MONTH: "month",
          WEEK: "week",
          WORK_WEEK: "work_week",
          DAY: "day",
          AGENDA: "agenda",
        },
        Xo = Object.keys(Ko).map(function (e) {
          return Ko[e];
        });
      function Zo(e, t) {
        e && e.apply(null, [].concat(t));
      }
      E().oneOfType([E().string, E().func]),
        E().any,
        E().func,
        E().oneOfType([
          E().arrayOf(E().oneOf(Xo)),
          E().objectOf(function (e, t) {
            if (-1 !== Xo.indexOf(t) && "boolean" == typeof e[t]) return null;
            for (
              var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
              o < n;
              o++
            )
              r[o - 2] = arguments[o];
            return E().elementType.apply(E(), [e, t].concat(r));
          }),
        ]),
        E().oneOfType([E().oneOf(["overlap", "no-overlap"]), E().func]);
      var Jo = { seconds: 1e3, minutes: 6e4, hours: 36e5, day: 864e5 };
      function Qo(e, t) {
        var n = j(e, "month");
        return j(n, "week", t.startOfWeek());
      }
      function ei(e, t) {
        var n = H(e, "month");
        return H(n, "week", t.startOfWeek());
      }
      function ti(e, t) {
        for (var n = Qo(e, t), r = ei(e, t), o = []; U(n, r, "day"); )
          o.push(n), (n = V(n, 1, "day"));
        return o;
      }
      function ni(e, t) {
        var n = j(e, t);
        return G(n, e) ? n : V(n, 1, t);
      }
      function ri(e, t) {
        for (
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "day",
            r = e,
            o = [];
          U(r, t, n);
        )
          o.push(r), (r = V(r, 1, n));
        return o;
      }
      function oi(e, t) {
        return null == t && null == e
          ? null
          : (null == t && (t = new Date()),
            null == e && (e = new Date()),
            (e = j(e, "day")),
            (e = ee(e, ee(t))),
            (e = Q(e, Q(t))),
            (e = J(e, J(t))),
            Z(e, Z(t)));
      }
      function ii(e) {
        return 0 === ee(e) && 0 === Q(e) && 0 === J(e) && 0 === Z(e);
      }
      function li(e, t, n) {
        return n && "milliseconds" !== n
          ? Math.round(Math.abs(+j(e, n) / Jo[n] - +j(t, n) / Jo[n]))
          : Math.abs(+e - +t);
      }
      var ai = E().oneOfType([E().string, E().func]);
      function si(e, t, n, r, o) {
        var i = "function" == typeof r ? r(n, o, e) : t.call(e, n, r, o);
        return (
          g()(
            null == i || "string" == typeof i,
            "`localizer format(..)` must return a string, null, or undefined",
          ),
          i
        );
      }
      function ui(e, t, n) {
        return new Date(
          e.getFullYear(),
          e.getMonth(),
          e.getDate(),
          0,
          t + n,
          0,
          0,
        );
      }
      function ci(e, t) {
        return e.getTimezoneOffset() - t.getTimezoneOffset();
      }
      function di(e, t) {
        return li(e, t, "minutes") + ci(e, t);
      }
      function fi(e) {
        var t = j(e, "day");
        return li(t, e, "minutes") + ci(t, e);
      }
      function gi(e, t) {
        return Y(e, t, "day");
      }
      function hi(e, t, n) {
        return G(e, t, "minutes") ? q(t, n, "minutes") : W(t, n, "minutes");
      }
      function pi(e) {
        var t = e.evtA,
          n = t.start,
          r = t.end,
          o = t.allDay,
          i = e.evtB,
          l = i.start,
          a = i.end,
          s = i.allDay,
          u = +j(n, "day") - +j(l, "day"),
          c = li(n, ni(r, "day"), "day"),
          d = li(l, ni(a, "day"), "day");
        return (
          u ||
          Math.max(d, 1) - Math.max(c, 1) ||
          !!s - !!o ||
          +n - +l ||
          +r - +a
        );
      }
      function mi(e) {
        var t = e.event,
          n = t.start,
          r = t.end,
          o = e.range,
          i = o.start,
          l = o.end,
          a = j(n, "day"),
          s = U(a, l, "day"),
          u = B(a, r, "minutes") ? W(r, i, "minutes") : q(r, i, "minutes");
        return s && u;
      }
      function vi(e, t) {
        return G(e, t, "day");
      }
      function bi(e, t) {
        return ii(e) && ii(t);
      }
      var wi = (0, a.A)(function e(t) {
        var n = this;
        (0, l.A)(this, e),
          g()(
            "function" == typeof t.format,
            "date localizer `format(..)` must be a function",
          ),
          g()(
            "function" == typeof t.firstOfWeek,
            "date localizer `firstOfWeek(..)` must be a function",
          ),
          (this.propType = t.propType || ai),
          (this.formats = t.formats),
          (this.format = function () {
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
              r[o] = arguments[o];
            return si.apply(void 0, [n, t.format].concat(r));
          }),
          (this.startOfWeek = t.firstOfWeek),
          (this.merge = t.merge || oi),
          (this.inRange = t.inRange || X),
          (this.lt = t.lt || Y),
          (this.lte = t.lte || U),
          (this.gt = t.gt || W),
          (this.gte = t.gte || q),
          (this.eq = t.eq || G),
          (this.neq = t.neq || B),
          (this.startOf = t.startOf || j),
          (this.endOf = t.endOf || H),
          (this.add = t.add || V),
          (this.range = t.range || ri),
          (this.diff = t.diff || li),
          (this.ceil = t.ceil || ni),
          (this.min = t.min || $),
          (this.max = t.max || K),
          (this.minutes = t.minutes || Q),
          (this.firstVisibleDay = t.firstVisibleDay || Qo),
          (this.lastVisibleDay = t.lastVisibleDay || ei),
          (this.visibleDays = t.visibleDays || ti),
          (this.getSlotDate = t.getSlotDate || ui),
          (this.getTimezoneOffset =
            t.getTimezoneOffset ||
            function (e) {
              return e.getTimezoneOffset();
            }),
          (this.getDstOffset = t.getDstOffset || ci),
          (this.getTotalMin = t.getTotalMin || di),
          (this.getMinutesFromMidnight = t.getMinutesFromMidnight || fi),
          (this.continuesPrior = t.continuesPrior || gi),
          (this.continuesAfter = t.continuesAfter || hi),
          (this.sortEvents = t.sortEvents || pi),
          (this.inEventRange = t.inEventRange || mi),
          (this.isSameDate = t.isSameDate || vi),
          (this.startAndEndAreDateOnly = t.startAndEndAreDateOnly || bi),
          (this.segmentOffset = t.browserTZOffset ? t.browserTZOffset() : 0);
      });
      function yi(e, t, n, o) {
        var i = (0, r.A)((0, r.A)({}, e.formats), n);
        return (0, r.A)(
          (0, r.A)({}, e),
          {},
          {
            messages: o,
            startOfWeek: function () {
              return e.startOfWeek(t);
            },
            format: function (n, r) {
              return e.format(n, i[r] || r, t);
            },
          },
        );
      }
      var Si = {
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
          return "+".concat(e, " more");
        },
      };
      var Ci = [
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
        Ri = (function (e) {
          (0, s.A)(n, e);
          var t = (0, u.A)(n);
          function n() {
            return (0, l.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, a.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.style,
                    n = e.className,
                    i = e.event,
                    l = e.selected,
                    a = e.isAllDay,
                    s = e.onSelect,
                    u = e.onDoubleClick,
                    c = e.onKeyPress,
                    f = e.localizer,
                    g = e.continuesPrior,
                    h = e.continuesAfter,
                    p = e.accessors,
                    m = e.getters,
                    v = e.children,
                    b = e.components,
                    w = b.event,
                    y = b.eventWrapper,
                    S = e.slotStart,
                    R = e.slotEnd,
                    E = (0, o.A)(e, Ci);
                  delete E.resizable;
                  var A = p.title(i),
                    D = p.tooltip(i),
                    x = p.end(i),
                    M = p.start(i),
                    O = p.allDay(i),
                    _ = a || O || f.diff(M, f.ceil(x, "day"), "day") > 1,
                    k = m.eventProp(i, M, x, l),
                    P = d.createElement(
                      "div",
                      { className: "rbc-event-content", title: D || void 0 },
                      w
                        ? d.createElement(w, {
                            event: i,
                            continuesPrior: g,
                            continuesAfter: h,
                            title: A,
                            isAllDay: O,
                            localizer: f,
                            slotStart: S,
                            slotEnd: R,
                          })
                        : A,
                    );
                  return d.createElement(
                    y,
                    Object.assign({}, this.props, { type: "date" }),
                    d.createElement(
                      "div",
                      Object.assign({}, E, {
                        tabIndex: 0,
                        style: (0, r.A)((0, r.A)({}, k.style), t),
                        className: C("rbc-event", n, k.className, {
                          "rbc-selected": l,
                          "rbc-event-allday": _,
                          "rbc-event-continues-prior": g,
                          "rbc-event-continues-after": h,
                        }),
                        onClick: function (e) {
                          return s && s(i, e);
                        },
                        onDoubleClick: function (e) {
                          return u && u(i, e);
                        },
                        onKeyPress: function (e) {
                          return c && c(i, e);
                        },
                      }),
                      "function" == typeof v ? v(P) : P,
                    ),
                  );
                },
              },
            ]),
            n
          );
        })(d.Component);
      function Ei(e, t) {
        return !(!e || null == t) && In(e, t);
      }
      function Ai(e, t) {
        return (e.right - e.left) / t;
      }
      function Di(e, t, n, r) {
        var o = Ai(e, r);
        return n
          ? r - 1 - Math.floor((t - e.left) / o)
          : Math.floor((t - e.left) / o);
      }
      function xi(e) {
        var t,
          n,
          r,
          o = e.containerRef,
          i = e.accessors,
          l = e.getters,
          a = e.selected,
          s = e.components,
          u = e.localizer,
          c = e.position,
          f = e.show,
          g = e.events,
          h = e.slotStart,
          p = e.slotEnd,
          m = e.onSelect,
          v = e.onDoubleClick,
          b = e.onKeyPress,
          w = e.handleDragStart,
          y = e.popperRef,
          S = e.target,
          C = e.offset;
        (n = (t = { ref: y, callback: f }).ref),
          (r = t.callback),
          (0, d.useEffect)(
            function () {
              var e = function (e) {
                n.current && !n.current.contains(e.target) && r();
              };
              return (
                document.addEventListener("mousedown", e),
                function () {
                  document.removeEventListener("mousedown", e);
                }
              );
            },
            [n, r],
          ),
          (0, d.useLayoutEffect)(
            function () {
              var e = (function (e) {
                  var t = e.target,
                    n = e.offset,
                    r = e.container,
                    o = e.box,
                    i = _e(t),
                    l = i.top,
                    a = i.left,
                    s = i.width,
                    u = i.height,
                    c = _e(r),
                    d = c.top,
                    f = c.left,
                    g = c.width,
                    h = c.height,
                    p = _e(o),
                    m = p.width,
                    v = p.height,
                    b = d + h,
                    w = f + g,
                    y = l + v,
                    S = a + m,
                    C = n.x,
                    R = n.y;
                  return {
                    topOffset: y > b ? l - v - R : l + R + u,
                    leftOffset: S > w ? a + C - m + s : a + C,
                  };
                })({
                  target: S,
                  offset: C,
                  container: o.current,
                  box: y.current,
                }),
                t = e.topOffset,
                n = e.leftOffset;
              (y.current.style.top = "".concat(t, "px")),
                (y.current.style.left = "".concat(n, "px"));
            },
            [C.x, C.y, S],
          );
        var R = c.width,
          E = { minWidth: R + R / 2 };
        return d.createElement(
          "div",
          { style: E, className: "rbc-overlay", ref: y },
          d.createElement(
            "div",
            { className: "rbc-overlay-header" },
            u.format(h, "dayHeaderFormat"),
          ),
          g.map(function (e, t) {
            return d.createElement(Ri, {
              key: t,
              type: "popup",
              localizer: u,
              event: e,
              getters: l,
              onSelect: m,
              accessors: i,
              components: s,
              onDoubleClick: v,
              onKeyPress: b,
              continuesPrior: u.lt(i.end(e), h, "day"),
              continuesAfter: u.gte(i.start(e), p, "day"),
              slotStart: h,
              slotEnd: p,
              selected: Ei(e, a),
              draggable: !0,
              onDragStart: function () {
                return w(e);
              },
              onDragEnd: function () {
                return f();
              },
            });
          }),
        );
      }
      var Mi = d.forwardRef(function (e, t) {
        return d.createElement(xi, Object.assign({}, e, { popperRef: t }));
      });
      function Oi(e) {
        var t = e.containerRef,
          n = e.popupOffset,
          r = void 0 === n ? 5 : n,
          o = e.overlay,
          i = e.accessors,
          l = e.localizer,
          a = e.components,
          s = e.getters,
          u = e.selected,
          c = e.handleSelectEvent,
          f = e.handleDoubleClickEvent,
          g = e.handleKeyPressEvent,
          h = e.handleDragStart,
          p = e.onHide,
          m = e.overlayDisplay,
          v = (0, d.useRef)(null);
        if (!o.position) return null;
        var b = r;
        isNaN(r) || (b = { x: r, y: r });
        var w = o.position,
          y = o.events,
          S = o.date,
          C = o.end;
        return d.createElement(
          Pn,
          {
            rootClose: !0,
            flip: !0,
            show: !0,
            placement: "bottom",
            onHide: p,
            target: o.target,
          },
          function (e) {
            var n = e.props;
            return d.createElement(
              Mi,
              Object.assign({}, n, {
                containerRef: t,
                ref: v,
                target: o.target,
                offset: b,
                accessors: i,
                getters: s,
                selected: u,
                components: a,
                localizer: l,
                position: w,
                show: m,
                events: y,
                slotStart: S,
                slotEnd: C,
                onSelect: c,
                onDoubleClick: f,
                onKeyPress: g,
                handleDragStart: h,
              }),
            );
          },
        );
      }
      Mi.propTypes = {
        accessors: E().object.isRequired,
        getters: E().object.isRequired,
        selected: E().object,
        components: E().object.isRequired,
        localizer: E().object.isRequired,
        position: E().object.isRequired,
        show: E().func.isRequired,
        events: E().array.isRequired,
        slotStart: E().instanceOf(Date).isRequired,
        slotEnd: E().instanceOf(Date),
        onSelect: E().func,
        onDoubleClick: E().func,
        onKeyPress: E().func,
        handleDragStart: E().func,
        style: E().object,
        offset: E().shape({ x: E().number, y: E().number }),
      };
      var _i = d.forwardRef(function (e, t) {
        return d.createElement(Oi, Object.assign({}, e, { containerRef: t }));
      });
      function ki(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : document;
        return wn(n, e, t, { passive: !1 });
      }
      function Pi(e, t) {
        return !!(function (e, t) {
          var n = t.clientX,
            r = t.clientY;
          return Nn(document.elementFromPoint(n, r), ".rbc-event", e);
        })(e, t);
      }
      function Fi(e, t) {
        return !!(function (e, t) {
          var n = t.clientX,
            r = t.clientY;
          return Nn(document.elementFromPoint(n, r), ".rbc-show-more", e);
        })(e, t);
      }
      function Ii(e) {
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
      _i.propTypes = {
        popupOffset: E().oneOfType([
          E().number,
          E().shape({ x: E().number, y: E().number }),
        ]),
        overlay: E().shape({
          position: E().object,
          events: E().array,
          date: E().instanceOf(Date),
          end: E().instanceOf(Date),
        }),
        accessors: E().object.isRequired,
        localizer: E().object.isRequired,
        components: E().object.isRequired,
        getters: E().object.isRequired,
        selected: E().object,
        handleSelectEvent: E().func,
        handleDoubleClickEvent: E().func,
        handleKeyPressEvent: E().func,
        handleDragStart: E().func,
        onHide: E().func,
        overlayDisplay: E().func,
      };
      var Ti = (function () {
        function e(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = n.global,
            o = void 0 !== r && r,
            i = n.longPressThreshold,
            a = void 0 === i ? 250 : i,
            s = n.validContainers,
            u = void 0 === s ? [] : s;
          (0, l.A)(this, e),
            (this.isDetached = !1),
            (this.container = t),
            (this.globalMouse = !t || o),
            (this.longPressThreshold = a),
            (this.validContainers = u),
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
            (this._removeTouchMoveWindowListener = ki(
              "touchmove",
              function () {},
              window,
            )),
            (this._removeKeyDownListener = ki("keydown", this._keyListener)),
            (this._removeKeyUpListener = ki("keyup", this._keyListener)),
            (this._removeDropFromOutsideListener = ki(
              "drop",
              this._dropFromOutsideListener,
            )),
            (this._removeDragOverFromOutsideListener = ki(
              "dragover",
              this._dragOverFromOutsideListener,
            )),
            this._addInitialEventListener();
        }
        return (
          (0, a.A)(e, [
            {
              key: "on",
              value: function (e, t) {
                var n = this._listeners[e] || (this._listeners[e] = []);
                return (
                  n.push(t),
                  {
                    remove: function () {
                      var e = n.indexOf(t);
                      -1 !== e && n.splice(e, 1);
                    },
                  }
                );
              },
            },
            {
              key: "emit",
              value: function (e) {
                for (
                  var t = arguments.length,
                    n = new Array(t > 1 ? t - 1 : 0),
                    r = 1;
                  r < t;
                  r++
                )
                  n[r - 1] = arguments[r];
                var o;
                return (
                  (this._listeners[e] || []).forEach(function (e) {
                    void 0 === o && (o = e.apply(void 0, n));
                  }),
                  o
                );
              },
            },
            {
              key: "teardown",
              value: function () {
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
              },
            },
            {
              key: "isSelected",
              value: function (e) {
                var t = this._selectRect;
                return !(!t || !this.selecting) && zi(t, Li(e));
              },
            },
            {
              key: "filter",
              value: function (e) {
                return this._selectRect && this.selecting
                  ? e.filter(this.isSelected, this)
                  : [];
              },
            },
            {
              key: "_addLongPressListener",
              value: function (e, t) {
                var n = this,
                  r = null,
                  o = null,
                  i = null,
                  l = function (t) {
                    (r = setTimeout(function () {
                      s(), e(t);
                    }, n.longPressThreshold)),
                      (o = ki("touchmove", function () {
                        return s();
                      })),
                      (i = ki("touchend", function () {
                        return s();
                      }));
                  },
                  a = ki("touchstart", l),
                  s = function () {
                    r && clearTimeout(r),
                      o && o(),
                      i && i(),
                      (r = null),
                      (o = null),
                      (i = null);
                  };
                return (
                  t && l(t),
                  function () {
                    s(), a();
                  }
                );
              },
            },
            {
              key: "_addInitialEventListener",
              value: function () {
                var e = this,
                  t = ki("mousedown", function (t) {
                    e._removeInitialEventListener(),
                      e._handleInitialEvent(t),
                      (e._removeInitialEventListener = ki(
                        "mousedown",
                        e._handleInitialEvent,
                      ));
                  }),
                  n = ki("touchstart", function (t) {
                    e._removeInitialEventListener(),
                      (e._removeInitialEventListener = e._addLongPressListener(
                        e._handleInitialEvent,
                        t,
                      ));
                  });
                this._removeInitialEventListener = function () {
                  t(), n();
                };
              },
            },
            {
              key: "_dropFromOutsideListener",
              value: function (e) {
                var t = Ii(e),
                  n = t.pageX,
                  r = t.pageY,
                  o = t.clientX,
                  i = t.clientY;
                this.emit("dropFromOutside", {
                  x: n,
                  y: r,
                  clientX: o,
                  clientY: i,
                }),
                  e.preventDefault();
              },
            },
            {
              key: "_dragOverFromOutsideListener",
              value: function (e) {
                var t = Ii(e),
                  n = t.pageX,
                  r = t.pageY,
                  o = t.clientX,
                  i = t.clientY;
                this.emit("dragOverFromOutside", {
                  x: n,
                  y: r,
                  clientX: o,
                  clientY: i,
                }),
                  e.preventDefault();
              },
            },
            {
              key: "_handleInitialEvent",
              value: function (e) {
                if (!this.isDetached) {
                  var t,
                    n = Ii(e),
                    r = n.clientX,
                    o = n.clientY,
                    l = n.pageX,
                    a = n.pageY,
                    s = this.container();
                  if (
                    3 !== e.which &&
                    2 !== e.button &&
                    ((c = r),
                    (d = o),
                    !(u = s) || Ae(u, document.elementFromPoint(c, d)))
                  ) {
                    var u, c, d;
                    if (!this.globalMouse && s && !Ae(s, e.target)) {
                      var f = (function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0;
                          "object" !== (0, i.A)(e) &&
                            (e = { top: e, left: e, right: e, bottom: e });
                          return e;
                        })(0),
                        g = f.top,
                        h = f.left,
                        p = f.bottom,
                        m = f.right;
                      if (
                        !zi(
                          {
                            top: (t = Li(s)).top - g,
                            left: t.left - h,
                            bottom: t.bottom + p,
                            right: t.right + m,
                          },
                          { top: a, left: l },
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
                          x: l,
                          y: a,
                          clientX: r,
                          clientY: o,
                        }),
                      )
                    )
                      switch (e.type) {
                        case "mousedown":
                          (this._removeEndListener = ki(
                            "mouseup",
                            this._handleTerminatingEvent,
                          )),
                            (this._onEscListener = ki(
                              "keydown",
                              this._handleTerminatingEvent,
                            )),
                            (this._removeMoveListener = ki(
                              "mousemove",
                              this._handleMoveEvent,
                            ));
                          break;
                        case "touchstart":
                          this._handleMoveEvent(e),
                            (this._removeEndListener = ki(
                              "touchend",
                              this._handleTerminatingEvent,
                            )),
                            (this._removeMoveListener = ki(
                              "touchmove",
                              this._handleMoveEvent,
                            ));
                      }
                  }
                }
              },
            },
            {
              key: "_isWithinValidContainer",
              value: function (e) {
                var t = e.target,
                  n = this.validContainers;
                return (
                  !(n && n.length && t) ||
                  n.some(function (e) {
                    return !!t.closest(e);
                  })
                );
              },
            },
            {
              key: "_handleTerminatingEvent",
              value: function (e) {
                var t = Ii(e),
                  n = t.pageX,
                  r = t.pageY;
                if (
                  ((this.selecting = !1),
                  this._removeEndListener && this._removeEndListener(),
                  this._removeMoveListener && this._removeMoveListener(),
                  this._initialEventData)
                ) {
                  var o = !this.container || Ae(this.container(), e.target),
                    i = this._isWithinValidContainer(e),
                    l = this._selectRect,
                    a = this.isClick(n, r);
                  return (
                    (this._initialEventData = null),
                    "Escape" !== e.key && i
                      ? a && o
                        ? this._handleClickEvent(e)
                        : a
                          ? this.emit("reset")
                          : this.emit("select", l)
                      : this.emit("reset")
                  );
                }
              },
            },
            {
              key: "_handleClickEvent",
              value: function (e) {
                var t = Ii(e),
                  n = t.pageX,
                  r = t.pageY,
                  o = t.clientX,
                  i = t.clientY,
                  l = new Date().getTime();
                return this._lastClickData &&
                  l - this._lastClickData.timestamp < 250
                  ? ((this._lastClickData = null),
                    this.emit("doubleClick", {
                      x: n,
                      y: r,
                      clientX: o,
                      clientY: i,
                    }))
                  : ((this._lastClickData = { timestamp: l }),
                    this.emit("click", { x: n, y: r, clientX: o, clientY: i }));
              },
            },
            {
              key: "_handleMoveEvent",
              value: function (e) {
                if (null !== this._initialEventData && !this.isDetached) {
                  var t = this._initialEventData,
                    n = t.x,
                    r = t.y,
                    o = Ii(e),
                    i = o.pageX,
                    l = o.pageY,
                    a = Math.abs(n - i),
                    s = Math.abs(r - l),
                    u = Math.min(i, n),
                    c = Math.min(l, r),
                    d = this.selecting;
                  (!this.isClick(i, l) || d || a || s) &&
                    ((this.selecting = !0),
                    (this._selectRect = {
                      top: c,
                      left: u,
                      x: i,
                      y: l,
                      right: u + a,
                      bottom: c + s,
                    }),
                    d || this.emit("selectStart", this._initialEventData),
                    this.isClick(i, l) ||
                      this.emit("selecting", this._selectRect),
                    e.preventDefault());
                }
              },
            },
            {
              key: "_keyListener",
              value: function (e) {
                this.ctrl = e.metaKey || e.ctrlKey;
              },
            },
            {
              key: "isClick",
              value: function (e, t) {
                var n = this._initialEventData,
                  r = n.x,
                  o = n.y;
                return (
                  !n.isTouch && Math.abs(e - r) <= 5 && Math.abs(t - o) <= 5
                );
              },
            },
          ]),
          e
        );
      })();
      function zi(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = Li(e),
          o = r.top,
          i = r.left,
          l = r.right,
          a = void 0 === l ? i : l,
          s = r.bottom,
          u = void 0 === s ? o : s,
          c = Li(t),
          d = c.top,
          f = c.left,
          g = c.right,
          h = void 0 === g ? f : g,
          p = c.bottom;
        return !(
          u - n < d ||
          o + n > (void 0 === p ? d : p) ||
          a - n < f ||
          i + n > h
        );
      }
      function Li(e) {
        if (!e.getBoundingClientRect) return e;
        var t = e.getBoundingClientRect(),
          n = t.left + Vi("left"),
          r = t.top + Vi("top");
        return {
          top: r,
          left: n,
          right: (e.offsetWidth || 0) + n,
          bottom: (e.offsetHeight || 0) + r,
        };
      }
      function Vi(e) {
        return "left" === e
          ? window.pageXOffset || document.body.scrollLeft || 0
          : "top" === e
            ? window.pageYOffset || document.body.scrollTop || 0
            : void 0;
      }
      var Ni = (function (e) {
          (0, s.A)(n, e);
          var t = (0, u.A)(n);
          function n(e, r) {
            var o;
            return (
              (0, l.A)(this, n),
              ((o = t.call(this, e, r)).state = { selecting: !1 }),
              (o.containerRef = (0, d.createRef)()),
              o
            );
          }
          return (
            (0, a.A)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.selectable && this._selectable();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._teardownSelectable();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  !e.selectable && this.props.selectable && this._selectable(),
                    e.selectable &&
                      !this.props.selectable &&
                      this._teardownSelectable();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.range,
                    n = e.getNow,
                    r = e.getters,
                    o = e.date,
                    i = e.components.dateCellWrapper,
                    l = e.localizer,
                    a = this.state,
                    s = a.selecting,
                    u = a.startIdx,
                    c = a.endIdx,
                    f = n();
                  return d.createElement(
                    "div",
                    { className: "rbc-row-bg", ref: this.containerRef },
                    t.map(function (e, n) {
                      var a = s && n >= u && n <= c,
                        g = r.dayProp(e),
                        h = g.className,
                        p = g.style;
                      return d.createElement(
                        i,
                        { key: n, value: e, range: t },
                        d.createElement("div", {
                          style: p,
                          className: C(
                            "rbc-day-bg",
                            h,
                            a && "rbc-selected-cell",
                            l.isSameDate(e, f) && "rbc-today",
                            o && l.neq(o, e, "month") && "rbc-off-range-bg",
                          ),
                        }),
                      );
                    }),
                  );
                },
              },
              {
                key: "_selectable",
                value: function () {
                  var e = this,
                    t = this.containerRef.current,
                    n = (this._selector = new Ti(this.props.container, {
                      longPressThreshold: this.props.longPressThreshold,
                    })),
                    o = function (n, r) {
                      if (!Pi(t, n) && !Fi(t, n)) {
                        var o = Li(t),
                          i = e.props,
                          l = i.range,
                          a = i.rtl;
                        if (
                          ((u = o),
                          (d = (c = n).x),
                          (f = c.y) >= u.top &&
                            f <= u.bottom &&
                            d >= u.left &&
                            d <= u.right)
                        ) {
                          var s = Di(o, n.x, a, l.length);
                          e._selectSlot({
                            startIdx: s,
                            endIdx: s,
                            action: r,
                            box: n,
                          });
                        }
                      }
                      var u, c, d, f;
                      (e._initial = {}), e.setState({ selecting: !1 });
                    };
                  n.on("selecting", function (r) {
                    var o = e.props,
                      i = o.range,
                      l = o.rtl,
                      a = -1,
                      s = -1;
                    if (
                      (e.state.selecting ||
                        (Zo(e.props.onSelectStart, [r]),
                        (e._initial = { x: r.x, y: r.y })),
                      n.isSelected(t))
                    ) {
                      var u = Li(t),
                        c = (function (e, t, n, r, o) {
                          var i = -1,
                            l = -1,
                            a = r - 1,
                            s = Ai(t, r),
                            u = Di(t, n.x, o, r),
                            c = t.top < n.y && t.bottom > n.y,
                            d = t.top < e.y && t.bottom > e.y,
                            f = e.y > t.bottom,
                            g = t.top > e.y;
                          return (
                            n.top < t.top &&
                              n.bottom > t.bottom &&
                              ((i = 0), (l = a)),
                            c &&
                              (g
                                ? ((i = 0), (l = u))
                                : f && ((i = u), (l = a))),
                            d &&
                              ((i = l =
                                o
                                  ? a - Math.floor((e.x - t.left) / s)
                                  : Math.floor((e.x - t.left) / s)),
                              c
                                ? u < i
                                  ? (i = u)
                                  : (l = u)
                                : e.y < n.y
                                  ? (l = a)
                                  : (i = 0)),
                            { startIdx: i, endIdx: l }
                          );
                        })(e._initial, u, r, i.length, l);
                      (a = c.startIdx), (s = c.endIdx);
                    }
                    e.setState({ selecting: !0, startIdx: a, endIdx: s });
                  }),
                    n.on("beforeSelect", function (t) {
                      if ("ignoreEvents" === e.props.selectable)
                        return !Pi(e.containerRef.current, t);
                    }),
                    n.on("click", function (e) {
                      return o(e, "click");
                    }),
                    n.on("doubleClick", function (e) {
                      return o(e, "doubleClick");
                    }),
                    n.on("select", function (t) {
                      e._selectSlot(
                        (0, r.A)(
                          (0, r.A)({}, e.state),
                          {},
                          { action: "select", bounds: t },
                        ),
                      ),
                        (e._initial = {}),
                        e.setState({ selecting: !1 }),
                        Zo(e.props.onSelectEnd, [e.state]);
                    });
                },
              },
              {
                key: "_teardownSelectable",
                value: function () {
                  this._selector &&
                    (this._selector.teardown(), (this._selector = null));
                },
              },
              {
                key: "_selectSlot",
                value: function (e) {
                  var t = e.endIdx,
                    n = e.startIdx,
                    r = e.action,
                    o = e.bounds,
                    i = e.box;
                  -1 !== t &&
                    -1 !== n &&
                    this.props.onSelectSlot &&
                    this.props.onSelectSlot({
                      start: n,
                      end: t,
                      action: r,
                      bounds: o,
                      box: i,
                      resourceId: this.props.resourceId,
                    });
                },
              },
            ]),
            n
          );
        })(d.Component),
        ji =
          (E().object.isRequired,
          E().object,
          E().bool,
          E().object.isRequired,
          E().object.isRequired,
          E().object.isRequired,
          E().object.isRequired,
          E().func,
          E().func,
          E().func,
          { segments: [], selected: {} }),
        Hi = function (e, t) {
          var n = e.selected;
          e.isAllDay;
          var r = e.accessors,
            o = e.getters,
            i = e.onSelect,
            l = e.onDoubleClick,
            a = e.onKeyPress,
            s = e.localizer,
            u = e.slotMetrics,
            c = e.components,
            f = e.resizable,
            g = u.continuesPrior(t),
            h = u.continuesAfter(t);
          return d.createElement(Ri, {
            event: t,
            getters: o,
            localizer: s,
            accessors: r,
            components: c,
            onSelect: i,
            onDoubleClick: l,
            onKeyPress: a,
            continuesPrior: g,
            continuesAfter: h,
            slotStart: u.first,
            slotEnd: u.last,
            selected: Ei(t, n),
            resizable: f,
          });
        },
        Gi = function (e, t, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : " ",
            o = (Math.abs(t) / e) * 100 + "%";
          return d.createElement(
            "div",
            {
              key: n,
              className: "rbc-row-segment",
              style: { WebkitFlexBasis: o, flexBasis: o, maxWidth: o },
            },
            r,
          );
        },
        Bi = (function (e) {
          (0, s.A)(n, e);
          var t = (0, u.A)(n);
          function n() {
            return (0, l.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, a.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.segments,
                    r = t.slotMetrics.slots,
                    o = t.className,
                    i = 1;
                  return d.createElement(
                    "div",
                    { className: C(o, "rbc-row") },
                    n.reduce(function (t, n, o) {
                      var l = n.event,
                        a = n.left,
                        s = n.right,
                        u = n.span,
                        c = "_lvl_" + o,
                        d = a - i,
                        f = Hi(e.props, l);
                      return (
                        d && t.push(Gi(r, d, "".concat(c, "_gap"))),
                        t.push(Gi(r, u, c, f)),
                        (i = s + 1),
                        t
                      );
                    }, []),
                  );
                },
              },
            ]),
            n
          );
        })(d.Component);
      function Wi(e) {
        var t = e.dateRange,
          n = e.unit,
          r = void 0 === n ? "day" : n,
          o = e.localizer;
        return { first: t[0], last: o.add(t[t.length - 1], 1, r) };
      }
      function qi(e) {
        var t,
          n,
          r,
          o =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1 / 0,
          i = [],
          l = [];
        for (t = 0; t < e.length; t++) {
          for (r = e[t], n = 0; n < i.length && Ui(r, i[n]); n++);
          n >= o ? l.push(r) : (i[n] || (i[n] = [])).push(r);
        }
        for (t = 0; t < i.length; t++)
          i[t].sort(function (e, t) {
            return e.left - t.left;
          });
        return { levels: i, extra: l };
      }
      function Yi(e, t, n, r, o) {
        var i = { start: r.start(e), end: r.end(e) },
          l = { start: t, end: n };
        return o.inEventRange({ event: i, range: l });
      }
      function Ui(e, t) {
        return t.some(function (t) {
          return t.left <= e.right && t.right >= e.left;
        });
      }
      function $i(e, t, n, r) {
        var o = { start: n.start(e), end: n.end(e), allDay: n.allDay(e) },
          i = { start: n.start(t), end: n.end(t), allDay: n.allDay(t) };
        return r.sortEvents({ evtA: o, evtB: i });
      }
      Bi.defaultProps = (0, r.A)({}, ji);
      var Ki = function (e, t) {
          return e.left <= t && e.right >= t;
        },
        Xi = function (e, t) {
          return e.filter(function (e) {
            return Ki(e, t);
          }).length;
        },
        Zi = (function (e) {
          (0, s.A)(n, e);
          var t = (0, u.A)(n);
          function n() {
            return (0, l.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, a.A)(n, [
              {
                key: "render",
                value: function () {
                  for (
                    var e = this.props,
                      t = e.segments,
                      n = e.slotMetrics.slots,
                      r = qi(t).levels[0],
                      o = 1,
                      i = 1,
                      l = [];
                    o <= n;
                  ) {
                    var a = "_lvl_" + o,
                      s =
                        r.filter(function (e) {
                          return Ki(e, o);
                        })[0] || {},
                      u = s.event,
                      c = s.left,
                      f = s.right,
                      g = s.span;
                    if (u) {
                      var h = Math.max(0, c - i);
                      if (this.canRenderSlotEvent(c, g)) {
                        var p = Hi(this.props, u);
                        h && l.push(Gi(n, h, a + "_gap")),
                          l.push(Gi(n, g, a, p)),
                          (i = o = f + 1);
                      } else
                        h && l.push(Gi(n, h, a + "_gap")),
                          l.push(Gi(n, 1, a, this.renderShowMore(t, o))),
                          (i = o += 1);
                    } else o++;
                  }
                  return d.createElement("div", { className: "rbc-row" }, l);
                },
              },
              {
                key: "canRenderSlotEvent",
                value: function (e, t) {
                  var n = this.props.segments;
                  return $n(e, e + t).every(function (e) {
                    return 1 === Xi(n, e);
                  });
                },
              },
              {
                key: "renderShowMore",
                value: function (e, t) {
                  var n = this,
                    r = this.props.localizer,
                    o = Xi(e, t);
                  return (
                    !!o &&
                    d.createElement(
                      "button",
                      {
                        type: "button",
                        key: "sm_" + t,
                        className: C("rbc-button-link", "rbc-show-more"),
                        onClick: function (e) {
                          return n.showMore(t, e);
                        },
                      },
                      r.messages.showMore(o),
                    )
                  );
                },
              },
              {
                key: "showMore",
                value: function (e, t) {
                  t.preventDefault(),
                    t.stopPropagation(),
                    this.props.onShowMore(e, t.target);
                },
              },
            ]),
            n
          );
        })(d.Component);
      Zi.defaultProps = (0, r.A)({}, ji);
      var Ji = function (e) {
          var t = e.children;
          return d.createElement(
            "div",
            { className: "rbc-row-content-scroll-container" },
            t,
          );
        },
        Qi = function (e, t) {
          return e[0].range === t[0].range && e[0].events === t[0].events;
        };
      function el() {
        return Zn(function (e) {
          for (
            var t = e.range,
              n = e.events,
              o = e.maxRows,
              i = e.minRows,
              l = e.accessors,
              a = e.localizer,
              s = Wi({ dateRange: t, localizer: a }),
              u = s.first,
              c = s.last,
              d = n.map(function (e) {
                return (function (e, t, n, r) {
                  var o = Wi({ dateRange: t, localizer: r }),
                    i = o.first,
                    l = o.last,
                    a = r.diff(i, l, "day"),
                    s = r.max(r.startOf(n.start(e), "day"), i),
                    u = r.min(r.ceil(n.end(e), "day"), l),
                    c = Bn(t, function (e) {
                      return r.isSameDate(e, s);
                    }),
                    d = r.diff(s, u, "day");
                  return (
                    (d = Math.min(d, a)),
                    {
                      event: e,
                      span: (d = Math.max(d - r.segmentOffset, 1)),
                      left: c + 1,
                      right: Math.max(c + d, 1),
                    }
                  );
                })(e, t, l, a);
              }),
              f = qi(d, Math.max(o - 1, 1)),
              g = f.levels,
              h = f.extra,
              p = h.length > 0 ? i - 1 : i;
            g.length < p;
          )
            g.push([]);
          return {
            first: u,
            last: c,
            levels: g,
            extra: h,
            range: t,
            slots: t.length,
            clone: function (t) {
              return el()((0, r.A)((0, r.A)({}, e), t));
            },
            getDateForSlot: function (e) {
              return t[e];
            },
            getSlotForDate: function (e) {
              return t.find(function (t) {
                return a.isSameDate(t, e);
              });
            },
            getEventsForSlot: function (e) {
              return d
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
              return a.continuesPrior(l.start(e), u);
            },
            continuesAfter: function (e) {
              var t = l.start(e),
                n = l.end(e);
              return a.continuesAfter(t, n, c);
            },
          };
        }, Qi);
      }
      var tl = (function (e) {
        (0, s.A)(n, e);
        var t = (0, u.A)(n);
        function n() {
          var e;
          (0, l.A)(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            ((e = t.call.apply(t, [this].concat(o))).handleSelectSlot =
              function (t) {
                var n = e.props,
                  r = n.range;
                (0, n.onSelectSlot)(r.slice(t.start, t.end + 1), t);
              }),
            (e.handleShowMore = function (t, n) {
              var r,
                o,
                i,
                l = e.props,
                a = l.range,
                s = l.onShowMore,
                u = e.slotMetrics(e.props),
                c = ((r = e.containerRef.current),
                (o = ".rbc-row-bg"),
                Ln(r.querySelectorAll(o)))[0];
              c && (i = c.children[t - 1]),
                s(u.getEventsForSlot(t), a[t - 1], i, t, n);
            }),
            (e.getContainer = function () {
              var t = e.props.container;
              return t ? t() : e.containerRef.current;
            }),
            (e.renderHeadingCell = function (t, n) {
              var r = e.props,
                o = r.renderHeader,
                i = r.getNow,
                l = r.localizer;
              return o({
                date: t,
                key: "header_".concat(n),
                className: C(
                  "rbc-date-cell",
                  l.isSameDate(t, i()) && "rbc-now",
                ),
              });
            }),
            (e.renderDummy = function () {
              var t = e.props,
                n = t.className,
                r = t.range,
                o = t.renderHeader,
                i = t.showAllEvents;
              return d.createElement(
                "div",
                { className: n, ref: e.containerRef },
                d.createElement(
                  "div",
                  {
                    className: C(
                      "rbc-row-content",
                      i && "rbc-row-content-scrollable",
                    ),
                  },
                  o &&
                    d.createElement(
                      "div",
                      { className: "rbc-row", ref: e.headingRowRef },
                      r.map(e.renderHeadingCell),
                    ),
                  d.createElement(
                    "div",
                    { className: "rbc-row", ref: e.eventRowRef },
                    d.createElement(
                      "div",
                      { className: "rbc-row-segment" },
                      d.createElement(
                        "div",
                        { className: "rbc-event" },
                        d.createElement(
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
            (e.containerRef = (0, d.createRef)()),
            (e.headingRowRef = (0, d.createRef)()),
            (e.eventRowRef = (0, d.createRef)()),
            (e.slotMetrics = el()),
            e
          );
        }
        return (
          (0, a.A)(n, [
            {
              key: "getRowLimit",
              value: function () {
                var e,
                  t = Tn(this.eventRowRef.current),
                  n =
                    null !== (e = this.headingRowRef) &&
                    void 0 !== e &&
                    e.current
                      ? Tn(this.headingRowRef.current)
                      : 0,
                  r = Tn(this.containerRef.current) - n;
                return Math.max(Math.floor(r / t), 1);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.date,
                  n = e.rtl,
                  r = e.range,
                  o = e.className,
                  i = e.selected,
                  l = e.selectable,
                  a = e.renderForMeasure,
                  s = e.accessors,
                  u = e.getters,
                  c = e.components,
                  f = e.getNow,
                  g = e.renderHeader,
                  h = e.onSelect,
                  p = e.localizer,
                  m = e.onSelectStart,
                  v = e.onSelectEnd,
                  b = e.onDoubleClick,
                  w = e.onKeyPress,
                  y = e.resourceId,
                  S = e.longPressThreshold,
                  R = e.isAllDay,
                  E = e.resizable,
                  A = e.showAllEvents;
                if (a) return this.renderDummy();
                var D = this.slotMetrics(this.props),
                  x = D.levels,
                  M = D.extra,
                  O = A ? Ji : Wo,
                  _ = c.weekWrapper,
                  k = {
                    selected: i,
                    accessors: s,
                    getters: u,
                    localizer: p,
                    components: c,
                    onSelect: h,
                    onDoubleClick: b,
                    onKeyPress: w,
                    resourceId: y,
                    slotMetrics: D,
                    resizable: E,
                  };
                return d.createElement(
                  "div",
                  { className: o, role: "rowgroup", ref: this.containerRef },
                  d.createElement(Ni, {
                    localizer: p,
                    date: t,
                    getNow: f,
                    rtl: n,
                    range: r,
                    selectable: l,
                    container: this.getContainer,
                    getters: u,
                    onSelectStart: m,
                    onSelectEnd: v,
                    onSelectSlot: this.handleSelectSlot,
                    components: c,
                    longPressThreshold: S,
                    resourceId: y,
                  }),
                  d.createElement(
                    "div",
                    {
                      className: C(
                        "rbc-row-content",
                        A && "rbc-row-content-scrollable",
                      ),
                      role: "row",
                    },
                    g &&
                      d.createElement(
                        "div",
                        { className: "rbc-row ", ref: this.headingRowRef },
                        r.map(this.renderHeadingCell),
                      ),
                    d.createElement(
                      O,
                      null,
                      d.createElement(
                        _,
                        Object.assign({ isAllDay: R }, k, {
                          rtl: this.props.rtl,
                        }),
                        x.map(function (e, t) {
                          return d.createElement(
                            Bi,
                            Object.assign({ key: t, segments: e }, k),
                          );
                        }),
                        !!M.length &&
                          d.createElement(
                            Zi,
                            Object.assign(
                              { segments: M, onShowMore: this.handleShowMore },
                              k,
                            ),
                          ),
                      ),
                    ),
                  ),
                );
              },
            },
          ]),
          n
        );
      })(d.Component);
      tl.defaultProps = { minRows: 0, maxRows: 1 / 0 };
      var nl = function (e) {
          var t = e.label;
          return d.createElement(
            "span",
            { role: "columnheader", "aria-sort": "none" },
            t,
          );
        },
        rl = function (e) {
          var t = e.label,
            n = e.drilldownView,
            r = e.onDrillDown;
          return n
            ? d.createElement(
                "button",
                {
                  type: "button",
                  className: "rbc-button-link",
                  onClick: r,
                  role: "cell",
                },
                t,
              )
            : d.createElement("span", null, t);
        },
        ol = ["date", "className"],
        il = (function (e) {
          (0, s.A)(n, e);
          var t = (0, u.A)(n);
          function n() {
            var e;
            (0, l.A)(this, n);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              ((e = t.call.apply(t, [this].concat(i))).getContainer =
                function () {
                  return e.containerRef.current;
                }),
              (e.renderWeek = function (t, n) {
                var r = e.props,
                  o = r.events,
                  i = r.components,
                  l = r.selectable,
                  a = r.getNow,
                  s = r.selected,
                  u = r.date,
                  c = r.localizer,
                  f = r.longPressThreshold,
                  g = r.accessors,
                  h = r.getters,
                  p = r.showAllEvents,
                  m = e.state,
                  v = m.needLimitMeasure,
                  b = m.rowLimit,
                  w = (function (e, t, n, r, o) {
                    return e.filter(function (e) {
                      return Yi(e, t, n, r, o);
                    });
                  })((0, se.A)(o), t[0], t[t.length - 1], g, c);
                return (
                  w.sort(function (e, t) {
                    return $i(e, t, g, c);
                  }),
                  d.createElement(tl, {
                    key: n,
                    ref: 0 === n ? e.slotRowRef : void 0,
                    container: e.getContainer,
                    className: "rbc-month-row",
                    getNow: a,
                    date: u,
                    range: t,
                    events: w,
                    maxRows: p ? 1 / 0 : b,
                    selected: s,
                    selectable: l,
                    components: i,
                    accessors: g,
                    getters: h,
                    localizer: c,
                    renderHeader: e.readerDateHeading,
                    renderForMeasure: v,
                    onShowMore: e.handleShowMore,
                    onSelect: e.handleSelectEvent,
                    onDoubleClick: e.handleDoubleClickEvent,
                    onKeyPress: e.handleKeyPressEvent,
                    onSelectSlot: e.handleSelectSlot,
                    longPressThreshold: f,
                    rtl: e.props.rtl,
                    resizable: e.props.resizable,
                    showAllEvents: p,
                  })
                );
              }),
              (e.readerDateHeading = function (t) {
                var n = t.date,
                  r = t.className,
                  i = (0, o.A)(t, ol),
                  l = e.props,
                  a = l.date,
                  s = l.getDrilldownView,
                  u = l.localizer,
                  c = u.neq(n, a, "month"),
                  f = u.isSameDate(n, a),
                  g = s(n),
                  h = u.format(n, "dateFormat"),
                  p = e.props.components.dateHeader || rl;
                return d.createElement(
                  "div",
                  Object.assign({}, i, {
                    className: C(r, c && "rbc-off-range", f && "rbc-current"),
                    role: "cell",
                  }),
                  d.createElement(p, {
                    label: h,
                    date: n,
                    drilldownView: g,
                    isOffRange: c,
                    onDrillDown: function (t) {
                      return e.handleHeadingClick(n, g, t);
                    },
                  }),
                );
              }),
              (e.handleSelectSlot = function (t, n) {
                (e._pendingSelection = e._pendingSelection.concat(t)),
                  clearTimeout(e._selectTimer),
                  (e._selectTimer = setTimeout(function () {
                    return e.selectDates(n);
                  }));
              }),
              (e.handleHeadingClick = function (t, n, r) {
                r.preventDefault(),
                  e.clearSelection(),
                  Zo(e.props.onDrillDown, [t, n]);
              }),
              (e.handleSelectEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Zo(e.props.onSelectEvent, n);
              }),
              (e.handleDoubleClickEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Zo(e.props.onDoubleClickEvent, n);
              }),
              (e.handleKeyPressEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Zo(e.props.onKeyPressEvent, n);
              }),
              (e.handleShowMore = function (t, n, r, o, i) {
                var l = e.props,
                  a = l.popup,
                  s = l.onDrillDown,
                  u = l.onShowMore,
                  c = l.getDrilldownView,
                  d = l.doShowMoreDrillDown;
                if ((e.clearSelection(), a)) {
                  var f = Pe(r, e.containerRef.current);
                  e.setState({
                    overlay: { date: n, events: t, position: f, target: i },
                  });
                } else d && Zo(s, [n, c(n) || Ko.DAY]);
                Zo(u, [t, n, o]);
              }),
              (e.overlayDisplay = function () {
                e.setState({ overlay: null });
              }),
              (e.state = { rowLimit: 5, needLimitMeasure: !0, date: null }),
              (e.containerRef = (0, d.createRef)()),
              (e.slotRowRef = (0, d.createRef)()),
              (e._bgRows = []),
              (e._pendingSelection = []),
              e
            );
          }
          return (
            (0, a.A)(
              n,
              [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e,
                      t = this;
                    this.state.needLimitMeasure &&
                      this.measureRowLimit(this.props),
                      window.addEventListener(
                        "resize",
                        (this._resizeListener = function () {
                          e ||
                            Ne(function () {
                              (e = !1), t.setState({ needLimitMeasure: !0 });
                            });
                        }),
                        !1,
                      );
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    this.state.needLimitMeasure &&
                      this.measureRowLimit(this.props);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    window.removeEventListener(
                      "resize",
                      this._resizeListener,
                      !1,
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.date,
                      n = e.localizer,
                      r = e.className,
                      o = n.visibleDays(t, n),
                      i = ve(o, 7);
                    return (
                      (this._weekCount = i.length),
                      d.createElement(
                        "div",
                        {
                          className: C("rbc-month-view", r),
                          role: "table",
                          "aria-label": "Month View",
                          ref: this.containerRef,
                        },
                        d.createElement(
                          "div",
                          {
                            className: "rbc-row rbc-month-header",
                            role: "row",
                          },
                          this.renderHeaders(i[0]),
                        ),
                        i.map(this.renderWeek),
                        this.props.popup && this.renderOverlay(),
                      )
                    );
                  },
                },
                {
                  key: "renderHeaders",
                  value: function (e) {
                    var t = this.props,
                      n = t.localizer,
                      r = t.components,
                      o = e[0],
                      i = e[e.length - 1],
                      l = r.header || nl;
                    return n.range(o, i, "day").map(function (e, t) {
                      return d.createElement(
                        "div",
                        { key: "header_" + t, className: "rbc-header" },
                        d.createElement(l, {
                          date: e,
                          localizer: n,
                          label: n.format(e, "weekdayFormat"),
                        }),
                      );
                    });
                  },
                },
                {
                  key: "renderOverlay",
                  value: function () {
                    var e,
                      t,
                      n = this,
                      r =
                        null !==
                          (e =
                            null === (t = this.state) || void 0 === t
                              ? void 0
                              : t.overlay) && void 0 !== e
                          ? e
                          : {},
                      o = this.props,
                      i = o.accessors,
                      l = o.localizer,
                      a = o.components,
                      s = o.getters,
                      u = o.selected,
                      c = o.popupOffset,
                      f = o.handleDragStart;
                    return d.createElement(_i, {
                      overlay: r,
                      accessors: i,
                      localizer: l,
                      components: a,
                      getters: s,
                      selected: u,
                      popupOffset: c,
                      ref: this.containerRef,
                      handleKeyPressEvent: this.handleKeyPressEvent,
                      handleSelectEvent: this.handleSelectEvent,
                      handleDoubleClickEvent: this.handleDoubleClickEvent,
                      handleDragStart: f,
                      show: !!r.position,
                      overlayDisplay: this.overlayDisplay,
                      onHide: function () {
                        return n.setState({ overlay: null });
                      },
                    });
                  },
                },
                {
                  key: "measureRowLimit",
                  value: function () {
                    this.setState({
                      needLimitMeasure: !1,
                      rowLimit: this.slotRowRef.current.getRowLimit(),
                    });
                  },
                },
                {
                  key: "selectDates",
                  value: function (e) {
                    var t = this._pendingSelection.slice();
                    (this._pendingSelection = []),
                      t.sort(function (e, t) {
                        return +e - +t;
                      });
                    var n = new Date(t[0]),
                      r = new Date(t[t.length - 1]);
                    r.setDate(t[t.length - 1].getDate() + 1),
                      Zo(this.props.onSelectSlot, {
                        slots: t,
                        start: n,
                        end: r,
                        action: e.action,
                        bounds: e.bounds,
                        box: e.box,
                      });
                  },
                },
                {
                  key: "clearSelection",
                  value: function () {
                    clearTimeout(this._selectTimer),
                      (this._pendingSelection = []);
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    var n = e.date;
                    return {
                      date: n,
                      needLimitMeasure: e.localizer.neq(n, t.date, "month"),
                    };
                  },
                },
              ],
            ),
            n
          );
        })(d.Component);
      (il.range = function (e, t) {
        var n = t.localizer;
        return { start: n.firstVisibleDay(e, n), end: n.lastVisibleDay(e, n) };
      }),
        (il.navigate = function (e, t, n) {
          var r = n.localizer;
          switch (t) {
            case qo:
              return r.add(e, -1, "month");
            case Yo:
              return r.add(e, 1, "month");
            default:
              return e;
          }
        }),
        (il.title = function (e, t) {
          return t.localizer.format(e, "monthHeaderFormat");
        });
      var ll = function (e) {
        var t = e.min,
          n = e.max,
          r = e.step,
          o = e.slots,
          i = e.localizer;
        return (
          "".concat(+i.startOf(t, "minutes")) +
          "".concat(+i.startOf(n, "minutes")) +
          "".concat(r, "-").concat(o)
        );
      };
      function al(e) {
        for (
          var t = e.min,
            n = e.max,
            r = e.step,
            o = e.timeslots,
            i = e.localizer,
            l = ll({ start: t, end: n, step: r, timeslots: o, localizer: i }),
            a = 1 + i.getTotalMin(t, n),
            s = i.getMinutesFromMidnight(t),
            u = Math.ceil((a - 1) / (r * o)),
            c = u * o,
            d = new Array(u),
            f = new Array(c),
            g = 0;
          g < u;
          g++
        ) {
          d[g] = new Array(o);
          for (var h = 0; h < o; h++) {
            var p = g * o + h,
              m = p * r;
            f[p] = d[g][h] = i.getSlotDate(t, s, m);
          }
        }
        var v = f.length * r;
        function b(e) {
          var n = i.diff(t, e, "minutes") + i.getDstOffset(t, e);
          return Math.min(n, a);
        }
        return (
          f.push(i.getSlotDate(t, s, v)),
          {
            groups: d,
            update: function (e) {
              return ll(e) !== l ? al(e) : this;
            },
            dateIsInGroup: function (e, t) {
              var r = d[t + 1];
              return i.inRange(e, d[t][0], r ? r[0] : n, "minutes");
            },
            nextSlot: function (e) {
              var t = f[Math.min(f.indexOf(e) + 1, f.length - 1)];
              return t === e && (t = i.add(e, r, "minutes")), t;
            },
            closestSlotToPosition: function (e) {
              var t = Math.min(f.length - 1, Math.max(0, Math.floor(e * c)));
              return f[t];
            },
            closestSlotFromPoint: function (e, t) {
              var n = Math.abs(t.top - t.bottom);
              return this.closestSlotToPosition((e.y - t.top) / n);
            },
            closestSlotFromDate: function (e) {
              var o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              if (i.lt(e, t, "minutes")) return f[0];
              if (i.gt(e, n, "minutes")) return f[f.length - 1];
              var l = i.diff(t, e, "minutes");
              return f[(l - (l % r)) / r + o];
            },
            startsBeforeDay: function (e) {
              return i.lt(e, t, "day");
            },
            startsAfterDay: function (e) {
              return i.gt(e, n, "day");
            },
            startsBefore: function (e) {
              return i.lt(i.merge(t, e), t, "minutes");
            },
            startsAfter: function (e) {
              return i.gt(i.merge(n, e), n, "minutes");
            },
            getRange: function (e, o, l, a) {
              l || (e = i.min(n, i.max(t, e))),
                a || (o = i.min(n, i.max(t, o)));
              var s = b(e),
                u = b(o),
                d =
                  u > r * c && !i.eq(n, o)
                    ? ((s - r) / (r * c)) * 100
                    : (s / (r * c)) * 100;
              return {
                top: d,
                height: (u / (r * c)) * 100 - d,
                start: b(e),
                startDate: e,
                end: b(o),
                endDate: o,
              };
            },
            getCurrentTimePosition: function (e) {
              return (b(e) / (r * c)) * 100;
            },
          }
        );
      }
      var sl = (function () {
        function e(t, n) {
          var r = n.accessors,
            o = n.slotMetrics;
          (0, l.A)(this, e);
          var i = o.getRange(r.start(t), r.end(t)),
            a = i.start,
            s = i.startDate,
            u = i.end,
            c = i.endDate,
            d = i.top,
            f = i.height;
          (this.start = a),
            (this.end = u),
            (this.startMs = +s),
            (this.endMs = +c),
            (this.top = d),
            (this.height = f),
            (this.data = t);
        }
        return (
          (0, a.A)(e, [
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
                return this.leaves
                  ? (100 - this.container._width) / (this.leaves.length + 1)
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
                var n = this.row.leaves;
                return n.indexOf(this) === n.length - 1 ? e : t;
              },
            },
            {
              key: "xOffset",
              get: function () {
                if (this.rows) return 0;
                if (this.leaves) return this.container._width;
                var e = this.row,
                  t = e.leaves,
                  n = e.xOffset,
                  r = e._width;
                return n + (t.indexOf(this) + 1) * r;
              },
            },
          ]),
          e
        );
      })();
      function ul(e, t, n) {
        return (
          Math.abs(t.start - e.start) < n ||
          (t.start > e.start && t.start < e.end)
        );
      }
      function cl(e) {
        for (
          var t = e.events,
            n = e.minimumStartDifference,
            r = e.slotMetrics,
            o = e.accessors,
            i = (function (e) {
              for (
                var t = vr(e, [
                    "startMs",
                    function (e) {
                      return -e.endMs;
                    },
                  ]),
                  n = [];
                t.length > 0;
              ) {
                var r = t.shift();
                n.push(r);
                for (var o = 0; o < t.length; o++) {
                  var i = t[o];
                  if (!(r.endMs > i.startMs)) {
                    if (o > 0) {
                      var l = t.splice(o, 1)[0];
                      n.push(l);
                    }
                    break;
                  }
                }
              }
              return n;
            })(
              t.map(function (e) {
                return new sl(e, { slotMetrics: r, accessors: o });
              }),
            ),
            l = [],
            a = function () {
              var e = i[s],
                t = l.find(function (t) {
                  return t.end > e.start || Math.abs(e.start - t.start) < n;
                });
              if (!t) return (e.rows = []), l.push(e), 1;
              e.container = t;
              for (var r = null, o = t.rows.length - 1; !r && o >= 0; o--)
                ul(t.rows[o], e, n) && (r = t.rows[o]);
              r
                ? (r.leaves.push(e), (e.row = r))
                : ((e.leaves = []), t.rows.push(e));
            },
            s = 0;
          s < i.length;
          s++
        )
          a();
        return i.map(function (e) {
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
      function dl(e, t, n) {
        for (var r = 0; r < e.friends.length; ++r)
          if (!(n.indexOf(e.friends[r]) > -1)) {
            (t = t > e.friends[r].idx ? t : e.friends[r].idx),
              n.push(e.friends[r]);
            var o = dl(e.friends[r], t, n);
            t = t > o ? t : o;
          }
        return t;
      }
      var fl = {
        overlap: cl,
        "no-overlap": function (e) {
          var t = cl({
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
          for (var n = 0; n < t.length; ++n)
            (t[n].friends = []),
              delete t[n].style.left,
              delete t[n].style.left,
              delete t[n].idx,
              delete t[n].size;
          for (var r = 0; r < t.length - 1; ++r)
            for (
              var o = t[r],
                i = o.style.top,
                l = o.style.top + o.style.height,
                a = r + 1;
              a < t.length;
              ++a
            ) {
              var s = t[a],
                u = s.style.top,
                c = s.style.top + s.style.height;
              ((u >= i && c <= l) || (c > i && c <= l) || (u >= i && u < l)) &&
                (o.friends.push(s), s.friends.push(o));
            }
          for (var d = 0; d < t.length; ++d) {
            for (var f = t[d], g = [], h = 0; h < 100; ++h) g.push(1);
            for (var p = 0; p < f.friends.length; ++p)
              void 0 !== f.friends[p].idx && (g[f.friends[p].idx] = 0);
            f.idx = g.indexOf(1);
          }
          for (var m = 0; m < t.length; ++m) {
            var v;
            if (!t[m].size) {
              var b = [];
              (v = 100 / (dl(t[m], 0, b) + 1)), (t[m].size = v);
              for (var w = 0; w < b.length; ++w) b[w].size = v;
            }
          }
          for (var y = 0; y < t.length; ++y) {
            var S = t[y];
            S.style.left = S.idx * S.size;
            for (var C = 0, R = 0; R < S.friends.length; ++R) {
              var E = S.friends[R].idx;
              C = C > E ? C : E;
            }
            C <= S.idx && (S.size = 100 - S.idx * S.size);
            var A = 0 === S.idx ? 0 : 3;
            (S.style.width = "calc(".concat(S.size, "% - ").concat(A, "px)")),
              (S.style.height = "calc(".concat(S.style.height, "% - 2px)")),
              (S.style.xOffset = "calc("
                .concat(S.style.left, "% + ")
                .concat(A, "px)"));
          }
          return t;
        },
      };
      var gl = (function (e) {
        (0, s.A)(n, e);
        var t = (0, u.A)(n);
        function n() {
          return (0, l.A)(this, n), t.apply(this, arguments);
        }
        return (
          (0, a.A)(n, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.renderSlot,
                  n = e.resource,
                  r = e.group,
                  o = e.getters,
                  i = e.components,
                  l = (void 0 === i ? {} : i).timeSlotWrapper,
                  a = void 0 === l ? Wo : l,
                  s = o ? o.slotGroupProp(r) : {};
                return d.createElement(
                  "div",
                  Object.assign({ className: "rbc-timeslot-group" }, s),
                  r.map(function (e, r) {
                    var i = o ? o.slotProp(e, n) : {};
                    return d.createElement(
                      a,
                      { key: r, value: e, resource: n },
                      d.createElement(
                        "div",
                        Object.assign({}, i, {
                          className: C("rbc-time-slot", i.className),
                        }),
                        t && t(e, r),
                      ),
                    );
                  }),
                );
              },
            },
          ]),
          n
        );
      })(d.Component);
      function hl(e) {
        return "string" == typeof e ? e : e + "%";
      }
      function pl(e) {
        var t = e.style,
          n = e.className,
          o = e.event,
          i = e.accessors,
          l = e.rtl,
          a = e.selected,
          s = e.label,
          u = e.continuesPrior,
          c = e.continuesAfter,
          f = e.getters,
          g = e.onClick,
          h = e.onDoubleClick,
          p = e.isBackgroundEvent,
          m = e.onKeyPress,
          v = e.components,
          b = v.event,
          w = v.eventWrapper,
          y = i.title(o),
          S = i.tooltip(o),
          R = i.end(o),
          E = i.start(o),
          A = f.eventProp(o, E, R, a),
          D = t.height,
          x = t.top,
          M = t.width,
          O = t.xOffset,
          _ = [
            d.createElement(
              "div",
              { key: "1", className: "rbc-event-label" },
              s,
            ),
            d.createElement(
              "div",
              { key: "2", className: "rbc-event-content" },
              b ? d.createElement(b, { event: o, title: y }) : y,
            ),
          ],
          k = p
            ? (0, r.A)(
                (0, r.A)({}, A.style),
                {},
                (0, ae.A)(
                  {
                    top: hl(x),
                    height: hl(D),
                    width: "calc(".concat(M, " + 10px)"),
                  },
                  l ? "right" : "left",
                  hl(Math.max(0, O)),
                ),
              )
            : (0, r.A)(
                (0, r.A)({}, A.style),
                {},
                (0, ae.A)(
                  { top: hl(x), width: hl(M), height: hl(D) },
                  l ? "right" : "left",
                  hl(O),
                ),
              );
        return d.createElement(
          w,
          Object.assign({ type: "time" }, e),
          d.createElement(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: g,
              onDoubleClick: h,
              style: k,
              onKeyPress: m,
              title: S ? ("string" == typeof s ? s + ": " : "") + S : void 0,
              className: C(
                p ? "rbc-background-event" : "rbc-event",
                n,
                A.className,
                {
                  "rbc-selected": a,
                  "rbc-event-continues-earlier": u,
                  "rbc-event-continues-later": c,
                },
              ),
            },
            _,
          ),
        );
      }
      var ml = function (e) {
          var t = e.children,
            n = e.className,
            r = e.style,
            o = e.innerRef;
          return d.createElement("div", { className: n, style: r, ref: o }, t);
        },
        vl = d.forwardRef(function (e, t) {
          return d.createElement(ml, Object.assign({}, e, { innerRef: t }));
        }),
        bl = ["dayProp"],
        wl = ["eventContainerWrapper"],
        yl = (function (e) {
          (0, s.A)(n, e);
          var t = (0, u.A)(n);
          function n() {
            var e;
            (0, l.A)(this, n);
            for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
              i[a] = arguments[a];
            return (
              ((e = t.call.apply(t, [this].concat(i))).state = {
                selecting: !1,
                timeIndicatorPosition: null,
              }),
              (e.intervalTriggered = !1),
              (e.renderEvents = function (t) {
                var n = t.events,
                  o = t.isBackgroundEvent,
                  i = e.props,
                  l = i.rtl,
                  a = i.selected,
                  s = i.accessors,
                  u = i.localizer,
                  c = i.getters,
                  f = i.components,
                  g = i.step,
                  h = i.timeslots,
                  p = i.dayLayoutAlgorithm,
                  m = i.resizable,
                  v = (0, Jn.A)(e).slotMetrics,
                  b = u.messages,
                  w = (function (e) {
                    e.events,
                      e.minimumStartDifference,
                      e.slotMetrics,
                      e.accessors;
                    var t,
                      n = e.dayLayoutAlgorithm,
                      r = n;
                    return (
                      n in fl && (r = fl[n]),
                      (t = r) && t.constructor && t.call && t.apply
                        ? r.apply(this, arguments)
                        : []
                    );
                  })({
                    events: n,
                    accessors: s,
                    slotMetrics: v,
                    minimumStartDifference: Math.ceil((g * h) / 2),
                    dayLayoutAlgorithm: p,
                  });
                return w.map(function (t, n) {
                  var i,
                    g = t.event,
                    h = t.style,
                    p = s.end(g),
                    w = s.start(g),
                    y = "eventTimeRangeFormat",
                    S = v.startsBeforeDay(w),
                    C = v.startsAfterDay(p);
                  S
                    ? (y = "eventTimeRangeEndFormat")
                    : C && (y = "eventTimeRangeStartFormat"),
                    (i = S && C ? b.allDay : u.format({ start: w, end: p }, y));
                  var R = S || v.startsBefore(w),
                    E = C || v.startsAfter(p);
                  return d.createElement(pl, {
                    style: h,
                    event: g,
                    label: i,
                    key: "evt_" + n,
                    getters: c,
                    rtl: l,
                    components: f,
                    continuesPrior: R,
                    continuesAfter: E,
                    accessors: s,
                    resource: e.props.resource,
                    selected: Ei(g, a),
                    onClick: function (t) {
                      return e._select(
                        (0, r.A)(
                          (0, r.A)({}, g),
                          {},
                          { sourceResource: e.props.resource },
                        ),
                        t,
                      );
                    },
                    onDoubleClick: function (t) {
                      return e._doubleClick(g, t);
                    },
                    isBackgroundEvent: o,
                    onKeyPress: function (t) {
                      return e._keyPress(g, t);
                    },
                    resizable: m,
                  });
                });
              }),
              (e._selectable = function () {
                var t = e.containerRef.current,
                  n = e.props,
                  o = n.longPressThreshold,
                  i = n.localizer,
                  l = (e._selector = new Ti(
                    function () {
                      return t;
                    },
                    { longPressThreshold: o },
                  )),
                  a = function (t) {
                    var n = e.props.onSelecting,
                      r = e.state || {},
                      o = s(t),
                      l = o.startDate,
                      a = o.endDate;
                    (n &&
                      ((i.eq(r.startDate, l, "minutes") &&
                        i.eq(r.endDate, a, "minutes")) ||
                        !1 ===
                          n({
                            start: l,
                            end: a,
                            resourceId: e.props.resource,
                          }))) ||
                      (e.state.start === o.start &&
                        e.state.end === o.end &&
                        e.state.selecting === o.selecting) ||
                      e.setState(o);
                  },
                  s = function (n) {
                    var o = e.slotMetrics.closestSlotFromPoint(n, Li(t));
                    e.state.selecting || (e._initialSlot = o);
                    var l = e._initialSlot;
                    i.lte(l, o)
                      ? (o = e.slotMetrics.nextSlot(o))
                      : i.gt(l, o) && (l = e.slotMetrics.nextSlot(l));
                    var a = e.slotMetrics.getRange(i.min(l, o), i.max(l, o));
                    return (0, r.A)(
                      (0, r.A)({}, a),
                      {},
                      {
                        selecting: !0,
                        top: "".concat(a.top, "%"),
                        height: "".concat(a.height, "%"),
                      },
                    );
                  },
                  u = function (t, n) {
                    if (!Pi(e.containerRef.current, t)) {
                      var r = s(t),
                        o = r.startDate,
                        i = r.endDate;
                      e._selectSlot({
                        startDate: o,
                        endDate: i,
                        action: n,
                        box: t,
                      });
                    }
                    e.setState({ selecting: !1 });
                  };
                l.on("selecting", a),
                  l.on("selectStart", a),
                  l.on("beforeSelect", function (t) {
                    if ("ignoreEvents" === e.props.selectable)
                      return !Pi(e.containerRef.current, t);
                  }),
                  l.on("click", function (e) {
                    return u(e, "click");
                  }),
                  l.on("doubleClick", function (e) {
                    return u(e, "doubleClick");
                  }),
                  l.on("select", function (t) {
                    e.state.selecting &&
                      (e._selectSlot(
                        (0, r.A)(
                          (0, r.A)({}, e.state),
                          {},
                          { action: "select", bounds: t },
                        ),
                      ),
                      e.setState({ selecting: !1 }));
                  }),
                  l.on("reset", function () {
                    e.state.selecting && e.setState({ selecting: !1 });
                  });
              }),
              (e._teardownSelectable = function () {
                e._selector && (e._selector.teardown(), (e._selector = null));
              }),
              (e._selectSlot = function (t) {
                for (
                  var n = t.startDate,
                    r = t.endDate,
                    o = t.action,
                    i = t.bounds,
                    l = t.box,
                    a = n,
                    s = [];
                  e.props.localizer.lte(a, r);
                )
                  s.push(a), (a = new Date(+a + 60 * e.props.step * 1e3));
                Zo(e.props.onSelectSlot, {
                  slots: s,
                  start: n,
                  end: r,
                  resourceId: e.props.resource,
                  action: o,
                  bounds: i,
                  box: l,
                });
              }),
              (e._select = function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Zo(e.props.onSelectEvent, n);
              }),
              (e._doubleClick = function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Zo(e.props.onDoubleClickEvent, n);
              }),
              (e._keyPress = function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Zo(e.props.onKeyPressEvent, n);
              }),
              (e.slotMetrics = al(e.props)),
              (e.containerRef = (0, d.createRef)()),
              e
            );
          }
          return (
            (0, a.A)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.selectable && this._selectable(),
                    this.props.isNow &&
                      this.setTimeIndicatorPositionUpdateInterval();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._teardownSelectable(), this.clearTimeIndicatorInterval();
                },
              },
              {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                  e.selectable && !this.props.selectable && this._selectable(),
                    !e.selectable &&
                      this.props.selectable &&
                      this._teardownSelectable(),
                    (this.slotMetrics = this.slotMetrics.update(e));
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  var n = this.props,
                    r = n.getNow,
                    o = n.isNow,
                    i = n.localizer,
                    l = n.date,
                    a = n.min,
                    s = n.max,
                    u = i.neq(e.getNow(), r(), "minutes");
                  if (e.isNow !== o || u) {
                    if ((this.clearTimeIndicatorInterval(), o)) {
                      var c =
                        !u &&
                        i.eq(e.date, l, "minutes") &&
                        t.timeIndicatorPosition ===
                          this.state.timeIndicatorPosition;
                      this.setTimeIndicatorPositionUpdateInterval(c);
                    }
                  } else
                    o &&
                      (i.neq(e.min, a, "minutes") ||
                        i.neq(e.max, s, "minutes")) &&
                      this.positionTimeIndicator();
                },
              },
              {
                key: "setTimeIndicatorPositionUpdateInterval",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                  this.intervalTriggered || t || this.positionTimeIndicator(),
                    (this._timeIndicatorTimeout = window.setTimeout(
                      function () {
                        (e.intervalTriggered = !0),
                          e.positionTimeIndicator(),
                          e.setTimeIndicatorPositionUpdateInterval();
                      },
                      6e4,
                    ));
                },
              },
              {
                key: "clearTimeIndicatorInterval",
                value: function () {
                  (this.intervalTriggered = !1),
                    window.clearTimeout(this._timeIndicatorTimeout);
                },
              },
              {
                key: "positionTimeIndicator",
                value: function () {
                  var e = this.props,
                    t = e.min,
                    n = e.max,
                    r = (0, e.getNow)();
                  if (r >= t && r <= n) {
                    var o = this.slotMetrics.getCurrentTimePosition(r);
                    (this.intervalTriggered = !0),
                      this.setState({ timeIndicatorPosition: o });
                  } else this.clearTimeIndicatorInterval();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    n = e.max,
                    r = e.rtl,
                    i = e.isNow,
                    l = e.resource,
                    a = e.accessors,
                    s = e.localizer,
                    u = e.getters,
                    c = u.dayProp,
                    f = (0, o.A)(u, bl),
                    g = e.components,
                    h = g.eventContainerWrapper,
                    p = (0, o.A)(g, wl),
                    m = this.slotMetrics,
                    v = this.state,
                    b = v.selecting,
                    w = v.top,
                    y = v.height,
                    S = { start: v.startDate, end: v.endDate },
                    R = c(n),
                    E = R.className,
                    A = R.style,
                    D = p.dayColumnWrapper || vl;
                  return d.createElement(
                    D,
                    {
                      ref: this.containerRef,
                      date: t,
                      style: A,
                      className: C(
                        E,
                        "rbc-day-slot",
                        "rbc-time-column",
                        i && "rbc-now",
                        i && "rbc-today",
                        b && "rbc-slot-selecting",
                      ),
                      slotMetrics: m,
                    },
                    m.groups.map(function (e, t) {
                      return d.createElement(gl, {
                        key: t,
                        group: e,
                        resource: l,
                        getters: f,
                        components: p,
                      });
                    }),
                    d.createElement(
                      h,
                      {
                        localizer: s,
                        resource: l,
                        accessors: a,
                        getters: f,
                        components: p,
                        slotMetrics: m,
                      },
                      d.createElement(
                        "div",
                        { className: C("rbc-events-container", r && "rtl") },
                        this.renderEvents({
                          events: this.props.backgroundEvents,
                          isBackgroundEvent: !0,
                        }),
                        this.renderEvents({ events: this.props.events }),
                      ),
                    ),
                    b &&
                      d.createElement(
                        "div",
                        {
                          className: "rbc-slot-selection",
                          style: { top: w, height: y },
                        },
                        d.createElement(
                          "span",
                          null,
                          s.format(S, "selectRangeFormat"),
                        ),
                      ),
                    i &&
                      this.intervalTriggered &&
                      d.createElement("div", {
                        className: "rbc-current-time-indicator",
                        style: {
                          top: "".concat(this.state.timeIndicatorPosition, "%"),
                        },
                      }),
                  );
                },
              },
            ]),
            n
          );
        })(d.Component);
      yl.defaultProps = { dragThroughEvents: !0, timeslots: 2 };
      var Sl = function (e) {
          var t = e.min,
            n = e.max,
            r = e.timeslots,
            o = e.step,
            i = e.localizer,
            l = e.getNow,
            a = e.resource,
            s = e.components,
            u = e.getters,
            f = e.gutterRef,
            g = s.timeGutterWrapper,
            h = (0, d.useMemo)(
              function () {
                return (function (e) {
                  var t = e.min,
                    n = e.max,
                    r = e.localizer;
                  return r.getTimezoneOffset(t) !== r.getTimezoneOffset(n)
                    ? { start: r.add(t, -1, "day"), end: r.add(n, -1, "day") }
                    : { start: t, end: n };
                })({ min: t, max: n, localizer: i });
              },
              [
                null == t ? void 0 : t.toISOString(),
                null == n ? void 0 : n.toISOString(),
                i,
              ],
            ),
            p = h.start,
            m = h.end,
            v = (0, d.useState)(
              al({ min: p, max: m, timeslots: r, step: o, localizer: i }),
            ),
            b = (0, c.A)(v, 2),
            w = b[0],
            y = b[1];
          (0, d.useEffect)(
            function () {
              w &&
                y(
                  w.update({
                    min: p,
                    max: m,
                    timeslots: r,
                    step: o,
                    localizer: i,
                  }),
                );
            },
            [
              null == p ? void 0 : p.toISOString(),
              null == m ? void 0 : m.toISOString(),
              r,
              o,
            ],
          );
          var S = (0, d.useCallback)(
            function (e, t) {
              if (t) return null;
              var n = w.dateIsInGroup(l(), t);
              return d.createElement(
                "span",
                { className: C("rbc-label", n && "rbc-now") },
                i.format(e, "timeGutterFormat"),
              );
            },
            [w, i, l],
          );
          return d.createElement(
            g,
            { slotMetrics: w },
            d.createElement(
              "div",
              { className: "rbc-time-gutter rbc-time-column", ref: f },
              w.groups.map(function (e, t) {
                return d.createElement(gl, {
                  key: t,
                  group: e,
                  resource: a,
                  components: s,
                  renderSlot: S,
                  getters: u,
                });
              }),
            ),
          );
        },
        Cl = d.forwardRef(function (e, t) {
          return d.createElement(Sl, Object.assign({ gutterRef: t }, e));
        }),
        Rl = function (e) {
          var t = e.label;
          return d.createElement(d.Fragment, null, t);
        },
        El = (function (e) {
          (0, s.A)(n, e);
          var t = (0, u.A)(n);
          function n() {
            var e;
            (0, l.A)(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(o))).handleHeaderClick =
                function (t, n, r) {
                  r.preventDefault(), Zo(e.props.onDrillDown, [t, n]);
                }),
              (e.renderRow = function (t) {
                var n = e.props,
                  r = n.events,
                  o = n.rtl,
                  i = n.selectable,
                  l = n.getNow,
                  a = n.range,
                  s = n.getters,
                  u = n.localizer,
                  c = n.accessors,
                  f = n.components,
                  g = n.resizable,
                  h = c.resourceId(t),
                  p = t
                    ? r.filter(function (e) {
                        return c.resource(e) === h;
                      })
                    : r;
                return d.createElement(tl, {
                  isAllDay: !0,
                  rtl: o,
                  getNow: l,
                  minRows: 2,
                  maxRows: e.props.allDayMaxRows + 1,
                  range: a,
                  events: p,
                  resourceId: h,
                  className: "rbc-allday-cell",
                  selectable: i,
                  selected: e.props.selected,
                  components: f,
                  accessors: c,
                  getters: s,
                  localizer: u,
                  onSelect: e.props.onSelectEvent,
                  onShowMore: e.props.onShowMore,
                  onDoubleClick: e.props.onDoubleClickEvent,
                  onKeyPress: e.props.onKeyPressEvent,
                  onSelectSlot: e.props.onSelectSlot,
                  longPressThreshold: e.props.longPressThreshold,
                  resizable: g,
                });
              }),
              e
            );
          }
          return (
            (0, a.A)(n, [
              {
                key: "renderHeaderCells",
                value: function (e) {
                  var t = this,
                    n = this.props,
                    r = n.localizer,
                    o = n.getDrilldownView,
                    i = n.getNow,
                    l = n.getters.dayProp,
                    a = n.components.header,
                    s = void 0 === a ? nl : a,
                    u = i();
                  return e.map(function (e, n) {
                    var i = o(e),
                      a = r.format(e, "dayFormat"),
                      c = l(e),
                      f = c.className,
                      g = c.style,
                      h = d.createElement(s, {
                        date: e,
                        label: a,
                        localizer: r,
                      });
                    return d.createElement(
                      "div",
                      {
                        key: n,
                        style: g,
                        className: C(
                          "rbc-header",
                          f,
                          r.isSameDate(e, u) && "rbc-today",
                        ),
                      },
                      i
                        ? d.createElement(
                            "button",
                            {
                              type: "button",
                              className: "rbc-button-link",
                              onClick: function (n) {
                                return t.handleHeaderClick(e, i, n);
                              },
                            },
                            h,
                          )
                        : d.createElement("span", null, h),
                    );
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.width,
                    r = t.rtl,
                    o = t.resources,
                    i = t.range,
                    l = t.events,
                    a = t.getNow,
                    s = t.accessors,
                    u = t.selectable,
                    f = t.components,
                    g = t.getters,
                    h = t.scrollRef,
                    p = t.localizer,
                    m = t.isOverflowing,
                    v = t.components,
                    b = v.timeGutterHeader,
                    w = v.resourceHeader,
                    y = void 0 === w ? Rl : w,
                    S = t.resizable,
                    R = {};
                  m &&
                    (R[r ? "marginLeft" : "marginRight"] = "".concat(
                      wr() - 1,
                      "px",
                    ));
                  var E = o.groupEvents(l);
                  return d.createElement(
                    "div",
                    {
                      style: R,
                      ref: h,
                      className: C("rbc-time-header", m && "rbc-overflowing"),
                    },
                    d.createElement(
                      "div",
                      {
                        className: "rbc-label rbc-time-header-gutter",
                        style: { width: n, minWidth: n, maxWidth: n },
                      },
                      b && d.createElement(b, null),
                    ),
                    o.map(function (t, n) {
                      var o = (0, c.A)(t, 2),
                        l = o[0],
                        h = o[1];
                      return d.createElement(
                        "div",
                        { className: "rbc-time-header-content", key: l || n },
                        h &&
                          d.createElement(
                            "div",
                            {
                              className: "rbc-row rbc-row-resource",
                              key: "resource_".concat(n),
                            },
                            d.createElement(
                              "div",
                              { className: "rbc-header" },
                              d.createElement(y, {
                                index: n,
                                label: s.resourceTitle(h),
                                resource: h,
                              }),
                            ),
                          ),
                        d.createElement(
                          "div",
                          {
                            className: "rbc-row rbc-time-header-cell".concat(
                              i.length <= 1
                                ? " rbc-time-header-cell-single-day"
                                : "",
                            ),
                          },
                          e.renderHeaderCells(i),
                        ),
                        d.createElement(tl, {
                          isAllDay: !0,
                          rtl: r,
                          getNow: a,
                          minRows: 2,
                          maxRows: e.props.allDayMaxRows + 1,
                          range: i,
                          events: E.get(l) || [],
                          resourceId: h && l,
                          className: "rbc-allday-cell",
                          selectable: u,
                          selected: e.props.selected,
                          components: f,
                          accessors: s,
                          getters: g,
                          localizer: p,
                          onSelect: e.props.onSelectEvent,
                          onShowMore: e.props.onShowMore,
                          onDoubleClick: e.props.onDoubleClickEvent,
                          onKeyPress: e.props.onKeyPressEvent,
                          onSelectSlot: e.props.onSelectSlot,
                          longPressThreshold: e.props.longPressThreshold,
                          resizable: S,
                        }),
                      );
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(d.Component),
        Al = {};
      var Dl = (function (e) {
        (0, s.A)(n, e);
        var t = (0, u.A)(n);
        function n(e) {
          var o;
          return (
            (0, l.A)(this, n),
            ((o = t.call(this, e)).handleScroll = function (e) {
              o.scrollRef.current &&
                (o.scrollRef.current.scrollLeft = e.target.scrollLeft);
            }),
            (o.handleResize = function () {
              Ve(o.rafHandle), (o.rafHandle = Ne(o.checkOverflow));
            }),
            (o.handleKeyPressEvent = function () {
              o.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              Zo(o.props.onKeyPressEvent, t);
            }),
            (o.handleSelectEvent = function () {
              o.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              Zo(o.props.onSelectEvent, t);
            }),
            (o.handleDoubleClickEvent = function () {
              o.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              Zo(o.props.onDoubleClickEvent, t);
            }),
            (o.handleShowMore = function (e, t, n, i, l) {
              var a = o.props,
                s = a.popup,
                u = a.onDrillDown,
                c = a.onShowMore,
                d = a.getDrilldownView,
                f = a.doShowMoreDrillDown;
              if ((o.clearSelection(), s)) {
                var g = Pe(n, o.containerRef.current);
                o.setState({
                  overlay: {
                    date: t,
                    events: e,
                    position: (0, r.A)((0, r.A)({}, g), {}, { width: "200px" }),
                    target: l,
                  },
                });
              } else f && Zo(u, [t, d(t) || Ko.DAY]);
              Zo(c, [e, t, i]);
            }),
            (o.handleSelectAllDaySlot = function (e, t) {
              var n = o.props.onSelectSlot,
                r = new Date(e[0]),
                i = new Date(e[e.length - 1]);
              i.setDate(e[e.length - 1].getDate() + 1),
                Zo(n, {
                  slots: e,
                  start: r,
                  end: i,
                  action: t.action,
                  resourceId: t.resourceId,
                });
            }),
            (o.overlayDisplay = function () {
              o.setState({ overlay: null });
            }),
            (o.checkOverflow = function () {
              if (!o._updatingOverflow) {
                var e = o.contentRef.current;
                if (null != e && e.scrollHeight) {
                  var t = e.scrollHeight > e.clientHeight;
                  o.state.isOverflowing !== t &&
                    ((o._updatingOverflow = !0),
                    o.setState({ isOverflowing: t }, function () {
                      o._updatingOverflow = !1;
                    }));
                }
              }
            }),
            (o.memoizedResources = Zn(function (e, t) {
              return (function (e, t) {
                return {
                  map: function (n) {
                    return e
                      ? e.map(function (e, r) {
                          return n([t.resourceId(e), e], r);
                        })
                      : [n([Al, null], 0)];
                  },
                  groupEvents: function (n) {
                    var r = new Map();
                    return e
                      ? (n.forEach(function (e) {
                          var n = t.resource(e) || Al;
                          if (Array.isArray(n))
                            n.forEach(function (t) {
                              var n = r.get(t) || [];
                              n.push(e), r.set(t, n);
                            });
                          else {
                            var o = r.get(n) || [];
                            o.push(e), r.set(n, o);
                          }
                        }),
                        r)
                      : (r.set(Al, n), r);
                  },
                };
              })(e, t);
            })),
            (o.state = { gutterWidth: void 0, isOverflowing: null }),
            (o.scrollRef = d.createRef()),
            (o.contentRef = d.createRef()),
            (o.containerRef = d.createRef()),
            (o._scrollRatio = null),
            (o.gutterRef = (0, d.createRef)()),
            o
          );
        }
        return (
          (0, a.A)(n, [
            {
              key: "getSnapshotBeforeUpdate",
              value: function () {
                return this.checkOverflow(), null;
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                null == this.props.width && this.measureGutter(),
                  this.calculateScroll(),
                  this.applyScroll(),
                  window.addEventListener("resize", this.handleResize);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                window.removeEventListener("resize", this.handleResize),
                  Ve(this.rafHandle),
                  this.measureGutterAnimationFrameRequest &&
                    window.cancelAnimationFrame(
                      this.measureGutterAnimationFrameRequest,
                    );
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.applyScroll();
              },
            },
            {
              key: "renderEvents",
              value: function (e, t, n, r) {
                var o = this,
                  i = this.props,
                  l = i.min,
                  a = i.max,
                  s = i.components,
                  u = i.accessors,
                  f = i.localizer,
                  g = i.dayLayoutAlgorithm,
                  h = this.memoizedResources(this.props.resources, u),
                  p = h.groupEvents(t),
                  m = h.groupEvents(n);
                return h.map(function (t, n) {
                  var i = (0, c.A)(t, 2),
                    h = i[0],
                    v = i[1];
                  return e.map(function (e, t) {
                    var i = (p.get(h) || []).filter(function (t) {
                        return f.inRange(e, u.start(t), u.end(t), "day");
                      }),
                      c = (m.get(h) || []).filter(function (t) {
                        return f.inRange(e, u.start(t), u.end(t), "day");
                      });
                    return d.createElement(
                      yl,
                      Object.assign({}, o.props, {
                        localizer: f,
                        min: f.merge(e, l),
                        max: f.merge(e, a),
                        resource: v && h,
                        components: s,
                        isNow: f.isSameDate(e, r),
                        key: n + "-" + t,
                        date: e,
                        events: i,
                        backgroundEvents: c,
                        dayLayoutAlgorithm: g,
                      }),
                    );
                  });
                });
              },
            },
            {
              key: "render",
              value: function () {
                var e,
                  t = this.props,
                  n = t.events,
                  r = t.backgroundEvents,
                  o = t.range,
                  i = t.width,
                  l = t.rtl,
                  a = t.selected,
                  s = t.getNow,
                  u = t.resources,
                  c = t.components,
                  f = t.accessors,
                  g = t.getters,
                  h = t.localizer,
                  p = t.min,
                  m = t.max,
                  v = t.showMultiDayTimes,
                  b = t.longPressThreshold,
                  w = t.resizable;
                i = i || this.state.gutterWidth;
                var y = o[0],
                  S = o[o.length - 1];
                this.slots = o.length;
                var R = [],
                  E = [],
                  A = [];
                return (
                  n.forEach(function (e) {
                    if (Yi(e, y, S, f, h)) {
                      var t = f.start(e),
                        n = f.end(e);
                      f.allDay(e) ||
                      h.startAndEndAreDateOnly(t, n) ||
                      (!v && !h.isSameDate(t, n))
                        ? R.push(e)
                        : E.push(e);
                    }
                  }),
                  r.forEach(function (e) {
                    Yi(e, y, S, f, h) && A.push(e);
                  }),
                  R.sort(function (e, t) {
                    return $i(e, t, f, h);
                  }),
                  d.createElement(
                    "div",
                    {
                      className: C(
                        "rbc-time-view",
                        u && "rbc-time-view-resources",
                      ),
                      ref: this.containerRef,
                    },
                    d.createElement(El, {
                      range: o,
                      events: R,
                      width: i,
                      rtl: l,
                      getNow: s,
                      localizer: h,
                      selected: a,
                      allDayMaxRows: this.props.showAllEvents
                        ? 1 / 0
                        : null !== (e = this.props.allDayMaxRows) &&
                            void 0 !== e
                          ? e
                          : 1 / 0,
                      resources: this.memoizedResources(u, f),
                      selectable: this.props.selectable,
                      accessors: f,
                      getters: g,
                      components: c,
                      scrollRef: this.scrollRef,
                      isOverflowing: this.state.isOverflowing,
                      longPressThreshold: b,
                      onSelectSlot: this.handleSelectAllDaySlot,
                      onSelectEvent: this.handleSelectEvent,
                      onShowMore: this.handleShowMore,
                      onDoubleClickEvent: this.props.onDoubleClickEvent,
                      onKeyPressEvent: this.props.onKeyPressEvent,
                      onDrillDown: this.props.onDrillDown,
                      getDrilldownView: this.props.getDrilldownView,
                      resizable: w,
                    }),
                    this.props.popup && this.renderOverlay(),
                    d.createElement(
                      "div",
                      {
                        ref: this.contentRef,
                        className: "rbc-time-content",
                        onScroll: this.handleScroll,
                      },
                      d.createElement(Cl, {
                        date: y,
                        ref: this.gutterRef,
                        localizer: h,
                        min: h.merge(y, p),
                        max: h.merge(y, m),
                        step: this.props.step,
                        getNow: this.props.getNow,
                        timeslots: this.props.timeslots,
                        components: c,
                        className: "rbc-time-gutter",
                        getters: g,
                      }),
                      this.renderEvents(o, E, A, s()),
                    ),
                  )
                );
              },
            },
            {
              key: "renderOverlay",
              value: function () {
                var e,
                  t,
                  n = this,
                  r =
                    null !==
                      (e =
                        null === (t = this.state) || void 0 === t
                          ? void 0
                          : t.overlay) && void 0 !== e
                      ? e
                      : {},
                  o = this.props,
                  i = o.accessors,
                  l = o.localizer,
                  a = o.components,
                  s = o.getters,
                  u = o.selected,
                  c = o.popupOffset,
                  f = o.handleDragStart;
                return d.createElement(_i, {
                  overlay: r,
                  accessors: i,
                  localizer: l,
                  components: a,
                  getters: s,
                  selected: u,
                  popupOffset: c,
                  ref: this.containerRef,
                  handleKeyPressEvent: this.handleKeyPressEvent,
                  handleSelectEvent: this.handleSelectEvent,
                  handleDoubleClickEvent: this.handleDoubleClickEvent,
                  handleDragStart: f,
                  show: !!r.position,
                  overlayDisplay: this.overlayDisplay,
                  onHide: function () {
                    return n.setState({ overlay: null });
                  },
                });
              },
            },
            {
              key: "clearSelection",
              value: function () {
                clearTimeout(this._selectTimer), (this._pendingSelection = []);
              },
            },
            {
              key: "measureGutter",
              value: function () {
                var e = this;
                this.measureGutterAnimationFrameRequest &&
                  window.cancelAnimationFrame(
                    this.measureGutterAnimationFrameRequest,
                  ),
                  (this.measureGutterAnimationFrameRequest =
                    window.requestAnimationFrame(function () {
                      var t,
                        n =
                          null !== (t = e.gutterRef) &&
                          void 0 !== t &&
                          t.current
                            ? yr(e.gutterRef.current)
                            : void 0;
                      n &&
                        e.state.gutterWidth !== n &&
                        e.setState({ gutterWidth: n });
                    }));
              },
            },
            {
              key: "applyScroll",
              value: function () {
                if (
                  null != this._scrollRatio &&
                  !0 === this.props.enableAutoScroll
                ) {
                  var e = this.contentRef.current;
                  (e.scrollTop = e.scrollHeight * this._scrollRatio),
                    (this._scrollRatio = null);
                }
              },
            },
            {
              key: "calculateScroll",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.props,
                  t = e.min,
                  n = e.max,
                  r = e.scrollToTime,
                  o = e.localizer,
                  i = o.diff(o.merge(r, t), r, "milliseconds"),
                  l = o.diff(t, n, "milliseconds");
                this._scrollRatio = i / l;
              },
            },
          ]),
          n
        );
      })(d.Component);
      Dl.defaultProps = { step: 30, timeslots: 2 };
      var xl = [
          "date",
          "localizer",
          "min",
          "max",
          "scrollToTime",
          "enableAutoScroll",
        ],
        Ml = (function (e) {
          (0, s.A)(n, e);
          var t = (0, u.A)(n);
          function n() {
            return (0, l.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, a.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    r = e.localizer,
                    i = e.min,
                    l = void 0 === i ? r.startOf(new Date(), "day") : i,
                    a = e.max,
                    s = void 0 === a ? r.endOf(new Date(), "day") : a,
                    u = e.scrollToTime,
                    c = void 0 === u ? r.startOf(new Date(), "day") : u,
                    f = e.enableAutoScroll,
                    g = void 0 === f || f,
                    h = (0, o.A)(e, xl),
                    p = n.range(t, { localizer: r });
                  return d.createElement(
                    Dl,
                    Object.assign({}, h, {
                      range: p,
                      eventOffset: 10,
                      localizer: r,
                      min: l,
                      max: s,
                      scrollToTime: c,
                      enableAutoScroll: g,
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(d.Component);
      (Ml.range = function (e, t) {
        return [t.localizer.startOf(e, "day")];
      }),
        (Ml.navigate = function (e, t, n) {
          var r = n.localizer;
          switch (t) {
            case qo:
              return r.add(e, -1, "day");
            case Yo:
              return r.add(e, 1, "day");
            default:
              return e;
          }
        }),
        (Ml.title = function (e, t) {
          return t.localizer.format(e, "dayHeaderFormat");
        });
      var Ol = [
          "date",
          "localizer",
          "min",
          "max",
          "scrollToTime",
          "enableAutoScroll",
        ],
        _l = (function (e) {
          (0, s.A)(n, e);
          var t = (0, u.A)(n);
          function n() {
            return (0, l.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, a.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    r = e.localizer,
                    i = e.min,
                    l = void 0 === i ? r.startOf(new Date(), "day") : i,
                    a = e.max,
                    s = void 0 === a ? r.endOf(new Date(), "day") : a,
                    u = e.scrollToTime,
                    c = void 0 === u ? r.startOf(new Date(), "day") : u,
                    f = e.enableAutoScroll,
                    g = void 0 === f || f,
                    h = (0, o.A)(e, Ol),
                    p = n.range(t, this.props);
                  return d.createElement(
                    Dl,
                    Object.assign({}, h, {
                      range: p,
                      eventOffset: 15,
                      localizer: r,
                      min: l,
                      max: s,
                      scrollToTime: c,
                      enableAutoScroll: g,
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(d.Component);
      (_l.defaultProps = Dl.defaultProps),
        (_l.navigate = function (e, t, n) {
          var r = n.localizer;
          switch (t) {
            case qo:
              return r.add(e, -1, "week");
            case Yo:
              return r.add(e, 1, "week");
            default:
              return e;
          }
        }),
        (_l.range = function (e, t) {
          var n = t.localizer,
            r = n.startOfWeek(),
            o = n.startOf(e, "week", r),
            i = n.endOf(e, "week", r);
          return n.range(o, i);
        }),
        (_l.title = function (e, t) {
          var n = t.localizer,
            r = Ar(_l.range(e, { localizer: n })),
            o = r[0],
            i = r.slice(1);
          return n.format({ start: o, end: i.pop() }, "dayRangeHeaderFormat");
        });
      var kl = [
        "date",
        "localizer",
        "min",
        "max",
        "scrollToTime",
        "enableAutoScroll",
      ];
      function Pl(e, t) {
        return _l.range(e, t).filter(function (e) {
          return -1 === [6, 0].indexOf(e.getDay());
        });
      }
      var Fl,
        Il = (function (e) {
          (0, s.A)(n, e);
          var t = (0, u.A)(n);
          function n() {
            return (0, l.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, a.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    n = e.localizer,
                    r = e.min,
                    i = void 0 === r ? n.startOf(new Date(), "day") : r,
                    l = e.max,
                    a = void 0 === l ? n.endOf(new Date(), "day") : l,
                    s = e.scrollToTime,
                    u = void 0 === s ? n.startOf(new Date(), "day") : s,
                    c = e.enableAutoScroll,
                    f = void 0 === c || c,
                    g = (0, o.A)(e, kl),
                    h = Pl(t, this.props);
                  return d.createElement(
                    Dl,
                    Object.assign({}, g, {
                      range: h,
                      eventOffset: 15,
                      localizer: n,
                      min: i,
                      max: a,
                      scrollToTime: u,
                      enableAutoScroll: f,
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(d.Component);
      function Tl(e) {
        var t = e.accessors,
          n = e.components,
          r = e.date,
          o = e.events,
          i = e.getters,
          l = e.length,
          a = e.localizer,
          s = e.onDoubleClickEvent,
          u = e.onSelectEvent,
          c = e.selected,
          f = (0, d.useRef)(null),
          g = (0, d.useRef)(null),
          h = (0, d.useRef)(null),
          p = (0, d.useRef)(null),
          m = (0, d.useRef)(null);
        (0, d.useEffect)(function () {
          b();
        });
        var v = function (e, r) {
            var o = "",
              i = n.time,
              l = a.messages.allDay,
              s = t.end(r),
              u = t.start(r);
            return (
              t.allDay(r) ||
                (a.eq(u, s)
                  ? (l = a.format(u, "agendaTimeFormat"))
                  : a.isSameDate(u, s)
                    ? (l = a.format(
                        { start: u, end: s },
                        "agendaTimeRangeFormat",
                      ))
                    : a.isSameDate(e, u)
                      ? (l = a.format(u, "agendaTimeFormat"))
                      : a.isSameDate(e, s) &&
                        (l = a.format(s, "agendaTimeFormat"))),
              a.gt(e, u, "day") && (o = "rbc-continues-prior"),
              a.lt(e, s, "day") && (o += " rbc-continues-after"),
              d.createElement(
                "span",
                { className: o.trim() },
                i ? d.createElement(i, { event: r, day: e, label: l }) : l,
              )
            );
          },
          b = function () {
            if (m.current) {
              var e = f.current,
                t = m.current.firstChild;
              if (t) {
                var n = p.current.scrollHeight > p.current.clientHeight,
                  r = [],
                  o = r;
                (r = [yr(t.children[0]), yr(t.children[1])]),
                  (o[0] === r[0] && o[1] === r[1]) ||
                    ((g.current.style.width = r[0] + "px"),
                    (h.current.style.width = r[1] + "px")),
                  n
                    ? ((0, Dr.A)(e, "rbc-header-overflowing"),
                      (e.style.marginRight = wr() + "px"))
                    : (0, xr.A)(e, "rbc-header-overflowing");
              }
            }
          },
          w = a.messages,
          y = a.add(r, l, "day"),
          S = a.range(r, y, "day");
        return (
          (o = o.filter(function (e) {
            return Yi(e, a.startOf(r, "day"), a.endOf(y, "day"), t, a);
          })).sort(function (e, n) {
            return +t.start(e) - +t.start(n);
          }),
          d.createElement(
            "div",
            { className: "rbc-agenda-view" },
            0 !== o.length
              ? d.createElement(
                  d.Fragment,
                  null,
                  d.createElement(
                    "table",
                    { ref: f, className: "rbc-agenda-table" },
                    d.createElement(
                      "thead",
                      null,
                      d.createElement(
                        "tr",
                        null,
                        d.createElement(
                          "th",
                          { className: "rbc-header", ref: g },
                          w.date,
                        ),
                        d.createElement(
                          "th",
                          { className: "rbc-header", ref: h },
                          w.time,
                        ),
                        d.createElement(
                          "th",
                          { className: "rbc-header" },
                          w.event,
                        ),
                      ),
                    ),
                  ),
                  d.createElement(
                    "div",
                    { className: "rbc-agenda-content", ref: p },
                    d.createElement(
                      "table",
                      { className: "rbc-agenda-table" },
                      d.createElement(
                        "tbody",
                        { ref: m },
                        S.map(function (e, r) {
                          return (function (e, r, o) {
                            var l = n.event,
                              f = n.date;
                            return (r = r.filter(function (n) {
                              return Yi(
                                n,
                                a.startOf(e, "day"),
                                a.endOf(e, "day"),
                                t,
                                a,
                              );
                            })).map(function (n, g) {
                              var h = t.title(n),
                                p = t.end(n),
                                m = t.start(n),
                                b = i.eventProp(n, m, p, Ei(n, c)),
                                w = 0 === g && a.format(e, "agendaDateFormat"),
                                y =
                                  0 === g &&
                                  d.createElement(
                                    "td",
                                    {
                                      rowSpan: r.length,
                                      className: "rbc-agenda-date-cell",
                                    },
                                    f
                                      ? d.createElement(f, { day: e, label: w })
                                      : w,
                                  );
                              return d.createElement(
                                "tr",
                                {
                                  key: o + "_" + g,
                                  className: b.className,
                                  style: b.style,
                                },
                                y,
                                d.createElement(
                                  "td",
                                  { className: "rbc-agenda-time-cell" },
                                  v(e, n),
                                ),
                                d.createElement(
                                  "td",
                                  {
                                    className: "rbc-agenda-event-cell",
                                    onClick: function (e) {
                                      return u && u(n, e);
                                    },
                                    onDoubleClick: function (e) {
                                      return s && s(n, e);
                                    },
                                  },
                                  l
                                    ? d.createElement(l, { event: n, title: h })
                                    : h,
                                ),
                              );
                            }, []);
                          })(e, o, r);
                        }),
                      ),
                    ),
                  ),
                )
              : d.createElement(
                  "span",
                  { className: "rbc-agenda-empty" },
                  w.noEventsInRange,
                ),
          )
        );
      }
      (Il.defaultProps = Dl.defaultProps),
        (Il.range = Pl),
        (Il.navigate = _l.navigate),
        (Il.title = function (e, t) {
          var n = t.localizer,
            r = Ar(Pl(e, { localizer: n })),
            o = r[0],
            i = r.slice(1);
          return n.format({ start: o, end: i.pop() }, "dayRangeHeaderFormat");
        }),
        (Tl.defaultProps = { length: 30 }),
        (Tl.range = function (e, t) {
          var n = t.length,
            r = void 0 === n ? Tl.defaultProps.length : n;
          return { start: e, end: t.localizer.add(e, r, "day") };
        }),
        (Tl.navigate = function (e, t, n) {
          var r = n.length,
            o = void 0 === r ? Tl.defaultProps.length : r,
            i = n.localizer;
          switch (t) {
            case qo:
              return i.add(e, -o, "day");
            case Yo:
              return i.add(e, o, "day");
            default:
              return e;
          }
        }),
        (Tl.title = function (e, t) {
          var n = t.length,
            r = void 0 === n ? Tl.defaultProps.length : n,
            o = t.localizer,
            i = o.add(e, r, "day");
          return o.format({ start: e, end: i }, "agendaHeaderFormat");
        });
      var zl =
          ((Fl = {}),
          (0, ae.A)(Fl, Ko.MONTH, il),
          (0, ae.A)(Fl, Ko.WEEK, _l),
          (0, ae.A)(Fl, Ko.WORK_WEEK, Il),
          (0, ae.A)(Fl, Ko.DAY, Ml),
          (0, ae.A)(Fl, Ko.AGENDA, Tl),
          Fl),
        Ll = ["action", "date", "today"];
      var Vl = (function (e) {
        (0, s.A)(n, e);
        var t = (0, u.A)(n);
        function n() {
          var e;
          (0, l.A)(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            ((e = t.call.apply(t, [this].concat(o))).navigate = function (t) {
              e.props.onNavigate(t);
            }),
            (e.view = function (t) {
              e.props.onView(t);
            }),
            e
          );
        }
        return (
          (0, a.A)(n, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.localizer.messages,
                  n = e.label;
                return d.createElement(
                  "div",
                  { className: "rbc-toolbar" },
                  d.createElement(
                    "span",
                    { className: "rbc-btn-group" },
                    d.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, Uo) },
                      t.today,
                    ),
                    d.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, qo) },
                      t.previous,
                    ),
                    d.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, Yo) },
                      t.next,
                    ),
                  ),
                  d.createElement(
                    "span",
                    { className: "rbc-toolbar-label" },
                    n,
                  ),
                  d.createElement(
                    "span",
                    { className: "rbc-btn-group" },
                    this.viewNamesGroup(t),
                  ),
                );
              },
            },
            {
              key: "viewNamesGroup",
              value: function (e) {
                var t = this,
                  n = this.props.views,
                  r = this.props.view;
                if (n.length > 1)
                  return n.map(function (n) {
                    return d.createElement(
                      "button",
                      {
                        type: "button",
                        key: n,
                        className: C({ "rbc-active": r === n }),
                        onClick: t.view.bind(null, n),
                      },
                      e[n],
                    );
                  });
              },
            },
          ]),
          n
        );
      })(d.Component);
      var Nl = function (e) {
          return function (t) {
            return (function (e, t) {
              var n = null;
              return (
                "function" == typeof t
                  ? (n = t(e))
                  : "string" == typeof t &&
                    "object" === (0, i.A)(e) &&
                    null != e &&
                    t in e &&
                    (n = e[t]),
                n
              );
            })(t, e);
          };
        },
        jl = ["view", "date", "getNow", "onNavigate"],
        Hl = [
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
      function Gl(e) {
        if (Array.isArray(e)) return e;
        for (var t = [], n = 0, r = Object.entries(e); n < r.length; n++) {
          var o = (0, c.A)(r[n], 2),
            i = o[0];
          o[1] && t.push(i);
        }
        return t;
      }
      var Bl = (function (e) {
        (0, s.A)(n, e);
        var t = (0, u.A)(n);
        function n() {
          var e;
          (0, l.A)(this, n);
          for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++)
            s[u] = arguments[u];
          return (
            ((e = t.call.apply(t, [this].concat(s))).getViews = function () {
              var t = e.props.views;
              return Array.isArray(t)
                ? Ho(
                    t,
                    function (e, t) {
                      return (e[t] = zl[t]);
                    },
                    {},
                  )
                : "object" === (0, i.A)(t)
                  ? Bo(t, function (e, t) {
                      return !0 === e ? zl[t] : e;
                    })
                  : zl;
            }),
            (e.getView = function () {
              return e.getViews()[e.props.view];
            }),
            (e.getDrilldownView = function (t) {
              var n = e.props,
                r = n.view,
                o = n.drilldownView,
                i = n.getDrilldownView;
              return i ? i(t, r, Object.keys(e.getViews())) : o;
            }),
            (e.handleRangeChange = function (t, n, r) {
              var o = e.props,
                i = o.onRangeChange,
                l = o.localizer;
              i && n.range && i(n.range(t, { localizer: l }), r);
            }),
            (e.handleNavigate = function (t, n) {
              var i = e.props,
                l = i.view,
                a = i.date,
                s = i.getNow,
                u = i.onNavigate,
                c = (0, o.A)(i, jl),
                d = e.getView(),
                f = s();
              (a = (function (e, t) {
                var n = t.action,
                  r = t.date,
                  i = t.today,
                  l = (0, o.A)(t, Ll);
                switch (((e = "string" == typeof e ? zl[e] : e), n)) {
                  case Uo:
                    r = i || new Date();
                    break;
                  case $o:
                    break;
                  default:
                    g()(
                      e && "function" == typeof e.navigate,
                      "Calendar View components must implement a static `.navigate(date, action)` method.s",
                    ),
                      (r = e.navigate(r, n, l));
                }
                return r;
              })(
                d,
                (0, r.A)(
                  (0, r.A)({}, c),
                  {},
                  { action: t, date: n || a || f, today: f },
                ),
              )),
                u(a, l, t),
                e.handleRangeChange(a, d);
            }),
            (e.handleViewChange = function (t) {
              t !== e.props.view &&
                (function (e, t) {
                  return -1 !== Gl(t.views).indexOf(e);
                })(t, e.props) &&
                e.props.onView(t);
              var n = e.getViews();
              e.handleRangeChange(e.props.date || e.props.getNow(), n[t], t);
            }),
            (e.handleSelectEvent = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              Zo(e.props.onSelectEvent, n);
            }),
            (e.handleDoubleClickEvent = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              Zo(e.props.onDoubleClickEvent, n);
            }),
            (e.handleKeyPressEvent = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              Zo(e.props.onKeyPressEvent, n);
            }),
            (e.handleSelectSlot = function (t) {
              Zo(e.props.onSelectSlot, t);
            }),
            (e.handleDrillDown = function (t, n) {
              var r = e.props.onDrillDown;
              r
                ? r(t, n, e.drilldownView)
                : (n && e.handleViewChange(n), e.handleNavigate($o, t));
            }),
            (e.state = { context: n.getContext(e.props) }),
            e
          );
        }
        return (
          (0, a.A)(
            n,
            [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.view,
                    n = e.toolbar,
                    r = e.events,
                    i = e.backgroundEvents,
                    l = e.style,
                    a = e.className,
                    s = e.elementProps,
                    u = e.date,
                    c = e.getNow,
                    f = e.length,
                    g = e.showMultiDayTimes,
                    h = e.onShowMore,
                    p = e.doShowMoreDrillDown;
                  e.components, e.formats, e.messages, e.culture;
                  var m = (0, o.A)(e, Hl);
                  u = u || c();
                  var v = this.getView(),
                    b = this.state.context,
                    w = b.accessors,
                    y = b.components,
                    S = b.getters,
                    R = b.localizer,
                    E = b.viewNames,
                    A = y.toolbar || Vl,
                    D = v.title(u, { localizer: R, length: f });
                  return d.createElement(
                    "div",
                    Object.assign({}, s, {
                      className: C(a, "rbc-calendar", m.rtl && "rbc-rtl"),
                      style: l,
                    }),
                    n &&
                      d.createElement(A, {
                        date: u,
                        view: t,
                        views: E,
                        label: D,
                        onView: this.handleViewChange,
                        onNavigate: this.handleNavigate,
                        localizer: R,
                      }),
                    d.createElement(
                      v,
                      Object.assign({}, m, {
                        events: r,
                        backgroundEvents: i,
                        date: u,
                        getNow: c,
                        length: f,
                        localizer: R,
                        getters: S,
                        components: y,
                        accessors: w,
                        showMultiDayTimes: g,
                        getDrilldownView: this.getDrilldownView,
                        onNavigate: this.handleNavigate,
                        onDrillDown: this.handleDrillDown,
                        onSelectEvent: this.handleSelectEvent,
                        onDoubleClickEvent: this.handleDoubleClickEvent,
                        onKeyPressEvent: this.handleKeyPressEvent,
                        onSelectSlot: this.handleSelectSlot,
                        onShowMore: h,
                        doShowMoreDrillDown: p,
                      }),
                    ),
                  );
                },
              },
            ],
            [
              {
                key: "getDerivedStateFromProps",
                value: function (e) {
                  return { context: n.getContext(e) };
                },
              },
              {
                key: "getContext",
                value: function (e) {
                  var t = e.startAccessor,
                    n = e.endAccessor,
                    o = e.allDayAccessor,
                    i = e.tooltipAccessor,
                    l = e.titleAccessor,
                    a = e.resourceAccessor,
                    s = e.resourceIdAccessor,
                    u = e.resourceTitleAccessor,
                    c = e.eventPropGetter,
                    d = e.backgroundEventPropGetter,
                    f = e.slotPropGetter,
                    g = e.slotGroupPropGetter,
                    h = e.dayPropGetter,
                    p = e.view,
                    m = e.views,
                    v = e.localizer,
                    b = e.culture,
                    w = e.messages,
                    y = void 0 === w ? {} : w,
                    S = e.components,
                    C = void 0 === S ? {} : S,
                    R = e.formats,
                    E = void 0 === R ? {} : R,
                    A = Gl(m);
                  return {
                    viewNames: A,
                    localizer: yi(
                      v,
                      b,
                      E,
                      (function (e) {
                        return (0, r.A)((0, r.A)({}, Si), e);
                      })(y),
                    ),
                    getters: {
                      eventProp: function () {
                        return (c && c.apply(void 0, arguments)) || {};
                      },
                      backgroundEventProp: function () {
                        return (d && d.apply(void 0, arguments)) || {};
                      },
                      slotProp: function () {
                        return (f && f.apply(void 0, arguments)) || {};
                      },
                      slotGroupProp: function () {
                        return (g && g.apply(void 0, arguments)) || {};
                      },
                      dayProp: function () {
                        return (h && h.apply(void 0, arguments)) || {};
                      },
                    },
                    components: zo(C[p] || {}, Po(C, A), {
                      eventWrapper: Wo,
                      backgroundEventWrapper: Wo,
                      eventContainerWrapper: Wo,
                      dateCellWrapper: Wo,
                      weekWrapper: Wo,
                      timeSlotWrapper: Wo,
                      timeGutterWrapper: Wo,
                    }),
                    accessors: {
                      start: Nl(t),
                      end: Nl(n),
                      allDay: Nl(o),
                      tooltip: Nl(i),
                      title: Nl(l),
                      resource: Nl(a),
                      resourceId: Nl(s),
                      resourceTitle: Nl(u),
                    },
                  };
                },
              },
            ],
          ),
          n
        );
      })(d.Component);
      Bl.defaultProps = {
        events: [],
        backgroundEvents: [],
        elementProps: {},
        popup: !1,
        toolbar: !0,
        view: Ko.MONTH,
        views: [Ko.MONTH, Ko.WEEK, Ko.DAY, Ko.AGENDA],
        step: 30,
        length: 30,
        allDayMaxRows: 1 / 0,
        doShowMoreDrillDown: !0,
        drilldownView: Ko.DAY,
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
      };
      var Wl = (function e(t, n, r) {
          void 0 === r && (r = []);
          var o,
            i = t.displayName || t.name || "Component",
            l =
              !!(o = t) &&
              ("function" != typeof o ||
                (o.prototype && o.prototype.isReactComponent)),
            a = Object.keys(n),
            s = a.map(m);
          !l && r.length && g()(!1);
          var u = (function (e) {
            function o() {
              for (
                var t, o = arguments.length, i = new Array(o), l = 0;
                l < o;
                l++
              )
                i[l] = arguments[l];
              ((t = e.call.apply(e, [this].concat(i)) || this).handlers =
                Object.create(null)),
                a.forEach(function (e) {
                  var r = n[e];
                  t.handlers[r] = function (n) {
                    if (t.props[r]) {
                      var o;
                      t._notifying = !0;
                      for (
                        var i = arguments.length,
                          l = new Array(i > 1 ? i - 1 : 0),
                          a = 1;
                        a < i;
                        a++
                      )
                        l[a - 1] = arguments[a];
                      (o = t.props)[r].apply(o, [n].concat(l)),
                        (t._notifying = !1);
                    }
                    t.unmounted ||
                      t.setState(function (t) {
                        var r,
                          o = t.values;
                        return {
                          values: (0, b.A)(
                            Object.create(null),
                            o,
                            ((r = {}), (r[e] = n), r),
                          ),
                        };
                      });
                  };
                }),
                r.length &&
                  (t.attachRef = function (e) {
                    t.inner = e;
                  });
              var s = Object.create(null);
              return (
                a.forEach(function (e) {
                  s[e] = t.props[m(e)];
                }),
                (t.state = { values: s, prevProps: {} }),
                t
              );
            }
            (0, w.A)(o, e);
            var i = o.prototype;
            return (
              (i.shouldComponentUpdate = function () {
                return !this._notifying;
              }),
              (o.getDerivedStateFromProps = function (e, t) {
                var n = t.values,
                  r = t.prevProps,
                  o = {
                    values: (0, b.A)(Object.create(null), n),
                    prevProps: {},
                  };
                return (
                  a.forEach(function (t) {
                    (o.prevProps[t] = e[t]),
                      !p(e, t) && p(r, t) && (o.values[t] = e[m(t)]);
                  }),
                  o
                );
              }),
              (i.componentWillUnmount = function () {
                this.unmounted = !0;
              }),
              (i.render = function () {
                var e = this,
                  n = this.props,
                  r = n.innerRef,
                  o = (0, v.A)(n, ["innerRef"]);
                s.forEach(function (e) {
                  delete o[e];
                });
                var i = {};
                return (
                  a.forEach(function (t) {
                    var n = e.props[t];
                    i[t] = void 0 !== n ? n : e.state.values[t];
                  }),
                  d.createElement(
                    t,
                    (0, b.A)({}, o, i, this.handlers, {
                      ref: r || this.attachRef,
                    }),
                  )
                );
              }),
              o
            );
          })(d.Component);
          (0, y.polyfill)(u),
            (u.displayName = "Uncontrolled(" + i + ")"),
            (u.propTypes = (0, b.A)(
              { innerRef: function () {} },
              (function (e, t) {
                var n = {};
                return (
                  Object.keys(e).forEach(function (e) {
                    n[m(e)] = h;
                  }),
                  n
                );
              })(n),
            )),
            r.forEach(function (e) {
              u.prototype[e] = function () {
                var t;
                return (t = this.inner)[e].apply(t, arguments);
              };
            });
          var c = u;
          return (
            d.forwardRef &&
              ((c = d.forwardRef(function (e, t) {
                return d.createElement(
                  u,
                  (0, b.A)({}, e, {
                    innerRef: t,
                    __source: {
                      fileName:
                        "/Users/jquense/src/uncontrollable/src/uncontrollable.js",
                      lineNumber: 128,
                    },
                    __self: this,
                  }),
                );
              })).propTypes = u.propTypes),
            (c.ControlledComponent = t),
            (c.deferControlTo = function (t, r, o) {
              return void 0 === r && (r = {}), e(t, (0, b.A)({}, n, r), o);
            }),
            c
          );
        })(Bl, {
          view: "onView",
          date: "onNavigate",
          selected: "onSelectEvent",
        }),
        ql = function (e, t, n) {
          var r = e.start,
            o = e.end;
          return n.format(r, "LT", t) + " – " + n.format(o, "LT", t);
        },
        Yl = {
          dateFormat: "DD",
          dayFormat: "DD ddd",
          weekdayFormat: "ddd",
          selectRangeFormat: ql,
          eventTimeRangeFormat: ql,
          eventTimeRangeStartFormat: function (e, t, n) {
            var r = e.start;
            return n.format(r, "LT", t) + " – ";
          },
          eventTimeRangeEndFormat: function (e, t, n) {
            var r = e.end;
            return " – " + n.format(r, "LT", t);
          },
          timeGutterFormat: "LT",
          monthHeaderFormat: "MMMM YYYY",
          dayHeaderFormat: "dddd MMM DD",
          dayRangeHeaderFormat: function (e, t, n) {
            var r = e.start,
              o = e.end;
            return (
              n.format(r, "MMMM DD", t) +
              " – " +
              n.format(o, n.eq(r, o, "month") ? "DD" : "MMMM DD", t)
            );
          },
          agendaHeaderFormat: function (e, t, n) {
            var r = e.start,
              o = e.end;
            return n.format(r, "L", t) + " – " + n.format(o, "L", t);
          },
          agendaDateFormat: "ddd MMM DD",
          agendaTimeFormat: "LT",
          agendaTimeRangeFormat: ql,
        };
      function Ul(e) {
        var t = e ? e.toLowerCase() : e;
        return "FullYear" === t ? (t = "year") : t || (t = void 0), t;
      }
      function $l(e) {
        function t(t, n) {
          var r,
            o,
            i = e(t).local(),
            l = e(n).local();
          if (!e.tz)
            return (
              i.toDate().getTimezoneOffset() - l.toDate().getTimezoneOffset()
            );
          var a =
            null !==
              (r =
                null == i || null === (o = i._z) || void 0 === o
                  ? void 0
                  : o.name) && void 0 !== r
              ? r
              : e.tz.guess();
          return e.tz.zone(a).utcOffset(+i) - e.tz.zone(a).utcOffset(+l);
        }
        function n(t, n, r) {
          var o = Ul(r);
          return [o ? e(t).startOf(o) : e(t), o ? e(n).startOf(o) : e(n), o];
        }
        function r() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            n = Ul(arguments.length > 1 ? arguments[1] : void 0);
          return n ? e(t).startOf(n).toDate() : e(t).toDate();
        }
        function o(e, t, r) {
          var o = n(e, t, r),
            i = (0, c.A)(o, 3),
            l = i[0],
            a = i[1],
            s = i[2];
          return l.isSame(a, s);
        }
        function i(e, t, r) {
          var o = n(e, t, r),
            i = (0, c.A)(o, 3),
            l = i[0],
            a = i[1],
            s = i[2];
          return l.isSameOrBefore(a, s);
        }
        function l(t, n, r) {
          var o = Ul(r);
          return e(t).add(n, o).toDate();
        }
        function a(e, t) {
          var n = Ul(t),
            i = r(e, n);
          return o(i, e) ? i : l(i, 1, n);
        }
        function s(t, n) {
          var r = Ul(
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "day",
            ),
            o = e(t);
          return e(n).diff(o, r);
        }
        function u(t) {
          return e(t).startOf("month").startOf("week").toDate();
        }
        function d(t) {
          return e(t).endOf("month").endOf("week").toDate();
        }
        return new wi({
          formats: Yl,
          firstOfWeek: function (t) {
            var n = t ? e.localeData(t) : e.localeData();
            return n ? n.firstDayOfWeek() : 0;
          },
          firstVisibleDay: u,
          lastVisibleDay: d,
          visibleDays: function (e) {
            for (var t = u(e), n = d(e), r = []; i(t, n); )
              r.push(t), (t = l(t, 1, "d"));
            return r;
          },
          format: function (t, n, r) {
            return ((o = e(t)), (i = r), i ? o.locale(i) : o).format(n);
            var o, i;
          },
          lt: function (e, t, r) {
            var o = n(e, t, r),
              i = (0, c.A)(o, 3),
              l = i[0],
              a = i[1],
              s = i[2];
            return l.isBefore(a, s);
          },
          lte: i,
          gt: function (e, t, r) {
            var o = n(e, t, r),
              i = (0, c.A)(o, 3),
              l = i[0],
              a = i[1],
              s = i[2];
            return l.isAfter(a, s);
          },
          gte: function (e, t, r) {
            var o = n(e, t, r),
              i = (0, c.A)(o, 3),
              l = i[0],
              a = i[1],
              s = i[2];
            return l.isSameOrBefore(a, s);
          },
          eq: o,
          neq: function (e, t, n) {
            return !o(e, t, n);
          },
          merge: function (t, n) {
            if (!t && !n) return null;
            var r = e(n).format("HH:mm:ss"),
              o = e(t).startOf("day").format("MM/DD/YYYY");
            return e(
              "".concat(o, " ").concat(r),
              "MM/DD/YYYY HH:mm:ss",
            ).toDate();
          },
          inRange: function (t, n, r) {
            var o = Ul(
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "day",
              ),
              i = e(t),
              l = e(n),
              a = e(r);
            return i.isBetween(l, a, o, "[]");
          },
          startOf: r,
          endOf: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              n = Ul(arguments.length > 1 ? arguments[1] : void 0);
            return n ? e(t).endOf(n).toDate() : e(t).toDate();
          },
          range: function (t, n) {
            for (
              var r = Ul(
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "day",
                ),
                o = e(t).toDate(),
                a = [];
              i(o, n);
            )
              a.push(o), (o = l(o, 1, r));
            return a;
          },
          add: l,
          diff: s,
          ceil: a,
          min: function (t, n) {
            var r = e(t),
              o = e(n);
            return e.min(r, o).toDate();
          },
          max: function (t, n) {
            var r = e(t),
              o = e(n);
            return e.max(r, o).toDate();
          },
          minutes: function (t) {
            return e(t).minutes();
          },
          getSlotDate: function (t, n, r) {
            return e(t)
              .startOf("day")
              .minute(n + r)
              .toDate();
          },
          getTimezoneOffset: function (t) {
            return e(t).toDate().getTimezoneOffset();
          },
          getDstOffset: t,
          getTotalMin: function (e, t) {
            return s(e, t, "minutes");
          },
          getMinutesFromMidnight: function (n) {
            var r = e(n).startOf("day");
            return (
              e(n).diff(r, "minutes") +
              (function (n) {
                return t(e(n).startOf("day"), n);
              })(n)
            );
          },
          continuesPrior: function (t, n) {
            var r = e(t),
              o = e(n);
            return r.isBefore(o, "day");
          },
          continuesAfter: function (t, n, r) {
            var o = e(n),
              i = e(r);
            return o.isSameOrAfter(i, "minutes");
          },
          sortEvents: function (e) {
            var t = e.evtA,
              n = t.start,
              o = t.end,
              i = t.allDay,
              l = e.evtB,
              u = l.start,
              c = l.end,
              d = l.allDay,
              f = +r(n, "day") - +r(u, "day"),
              g = s(n, a(o, "day"), "day"),
              h = s(u, a(c, "day"), "day");
            return (
              f ||
              Math.max(h, 1) - Math.max(g, 1) ||
              !!d - !!i ||
              +n - +u ||
              +o - +c
            );
          },
          inEventRange: function (t) {
            var n = t.event,
              r = n.start,
              o = n.end,
              i = t.range,
              l = i.start,
              a = i.end,
              s = e(r).startOf("day"),
              u = e(o),
              c = e(l),
              d = e(a),
              f = s.isSameOrBefore(d, "day"),
              g = !s.isSame(u, "minutes")
                ? u.isAfter(c, "minutes")
                : u.isSameOrAfter(c, "minutes");
            return f && g;
          },
          isSameDate: function (t, n) {
            var r = e(t),
              o = e(n);
            return r.isSame(o, "day");
          },
          browserTZOffset: function () {
            var t = new Date(),
              n = /-/.test(t.toString()) ? "-" : "",
              r = t.getTimezoneOffset(),
              o = Number("".concat(n).concat(Math.abs(r)));
            return e().utcOffset() > o ? 1 : 0;
          },
        });
      }
    },
    11314: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => s });
      var r = n(58920),
        o = n(62059),
        i = n(36058),
        l = n(55241),
        a = n(5608),
        s = (0, r.gu)({
          chartName: "BarChart",
          GraphicalChild: o.y,
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: ["axis", "item"],
          axisComponents: [
            { axisType: "xAxis", AxisComp: i.W },
            { axisType: "yAxis", AxisComp: l.h },
          ],
          formatAxisMap: a.pr,
        });
    },
    67501: (e) => {
      "use strict";
      var t = function () {};
      e.exports = t;
    },
    67796: (e, t, n) => {
      "use strict";
      n.d(t, { Kv: () => i, N4: () => l });
      var r = n(90626),
        o = n(16666);
      function i(e, t) {
        return e
          ? (function (e) {
              return (
                "function" == typeof e &&
                (() => {
                  const t = Object.getPrototypeOf(e);
                  return t.prototype && t.prototype.isReactComponent;
                })()
              );
            })((n = e)) ||
            "function" == typeof n ||
            (function (e) {
              return (
                "object" == typeof e &&
                "symbol" == typeof e.$$typeof &&
                ["react.memo", "react.forward_ref"].includes(
                  e.$$typeof.description,
                )
              );
            })(n)
            ? r.createElement(e, t)
            : e
          : null;
        var n;
      }
      function l(e) {
        const t = {
            state: {},
            onStateChange: () => {},
            renderFallbackValue: null,
            ...e,
          },
          [n] = r.useState(() => ({ current: (0, o.ZR)(t) })),
          [i, l] = r.useState(() => n.current.initialState);
        return (
          n.current.setOptions((t) => ({
            ...t,
            ...e,
            state: { ...i, ...e.state },
            onStateChange: (t) => {
              l(t), null == e.onStateChange || e.onStateChange(t);
            },
          })),
          n.current
        );
      }
    },
    16666: (e, t, n) => {
      "use strict";
      function r() {
        return {
          accessor: (e, t) =>
            "function" == typeof e
              ? { ...t, accessorFn: e }
              : { ...t, accessorKey: e },
          display: (e) => e,
          group: (e) => e,
        };
      }
      function o(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function i(e, t) {
        return (n) => {
          t.setState((t) => ({ ...t, [e]: o(n, t[e]) }));
        };
      }
      function l(e) {
        return e instanceof Function;
      }
      function a(e, t) {
        const n = [],
          r = (e) => {
            e.forEach((e) => {
              n.push(e);
              const o = t(e);
              null != o && o.length && r(o);
            });
          };
        return r(e), n;
      }
      function s(e, t, n) {
        let r,
          o = [];
        return (i) => {
          let l;
          n.key && n.debug && (l = Date.now());
          const a = e(i);
          if (!(a.length !== o.length || a.some((e, t) => o[t] !== e)))
            return r;
          let s;
          if (
            ((o = a),
            n.key && n.debug && (s = Date.now()),
            (r = t(...a)),
            null == n || null == n.onChange || n.onChange(r),
            n.key && n.debug && null != n && n.debug())
          ) {
            const e = Math.round(100 * (Date.now() - l)) / 100,
              t = Math.round(100 * (Date.now() - s)) / 100,
              r = t / 16,
              o = (e, t) => {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              `%c⏱ ${o(t, 5)} /${o(e, 5)} ms`,
              `\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`,
              null == n ? void 0 : n.key,
            );
          }
          return r;
        };
      }
      function u(e, t, n, r) {
        return {
          debug: () => {
            var n;
            return null != (n = null == e ? void 0 : e.debugAll) ? n : e[t];
          },
          key: !1,
          onChange: r,
        };
      }
      n.d(t, {
        FB: () => r,
        HT: () => X,
        ZR: () => K,
        cU: () => Q,
        h5: () => ee,
        hM: () => J,
      });
      const c = "debugHeaders";
      function d(e, t, n) {
        var r;
        let o = {
          id: null != (r = n.id) ? r : t.id,
          column: t,
          index: n.index,
          isPlaceholder: !!n.isPlaceholder,
          placeholderId: n.placeholderId,
          depth: n.depth,
          subHeaders: [],
          colSpan: 0,
          rowSpan: 0,
          headerGroup: null,
          getLeafHeaders: () => {
            const e = [],
              t = (n) => {
                n.subHeaders && n.subHeaders.length && n.subHeaders.map(t),
                  e.push(n);
              };
            return t(o), e;
          },
          getContext: () => ({ table: e, header: o, column: t }),
        };
        return (
          e._features.forEach((t) => {
            null == t.createHeader || t.createHeader(o, e);
          }),
          o
        );
      }
      const f = {
        createTable: (e) => {
          (e.getHeaderGroups = s(
            () => [
              e.getAllColumns(),
              e.getVisibleLeafColumns(),
              e.getState().columnPinning.left,
              e.getState().columnPinning.right,
            ],
            (t, n, r, o) => {
              var i, l;
              const a =
                  null !=
                  (i =
                    null == r
                      ? void 0
                      : r.map((e) => n.find((t) => t.id === e)).filter(Boolean))
                    ? i
                    : [],
                s =
                  null !=
                  (l =
                    null == o
                      ? void 0
                      : o.map((e) => n.find((t) => t.id === e)).filter(Boolean))
                    ? l
                    : [];
              return g(
                t,
                [
                  ...a,
                  ...n.filter(
                    (e) =>
                      !(
                        (null != r && r.includes(e.id)) ||
                        (null != o && o.includes(e.id))
                      ),
                  ),
                  ...s,
                ],
                e,
              );
            },
            u(e.options, c),
          )),
            (e.getCenterHeaderGroups = s(
              () => [
                e.getAllColumns(),
                e.getVisibleLeafColumns(),
                e.getState().columnPinning.left,
                e.getState().columnPinning.right,
              ],
              (t, n, r, o) =>
                g(
                  t,
                  (n = n.filter(
                    (e) =>
                      !(
                        (null != r && r.includes(e.id)) ||
                        (null != o && o.includes(e.id))
                      ),
                  )),
                  e,
                  "center",
                ),
              u(e.options, c),
            )),
            (e.getLeftHeaderGroups = s(
              () => [
                e.getAllColumns(),
                e.getVisibleLeafColumns(),
                e.getState().columnPinning.left,
              ],
              (t, n, r) => {
                var o;
                return g(
                  t,
                  null !=
                    (o =
                      null == r
                        ? void 0
                        : r
                            .map((e) => n.find((t) => t.id === e))
                            .filter(Boolean))
                    ? o
                    : [],
                  e,
                  "left",
                );
              },
              u(e.options, c),
            )),
            (e.getRightHeaderGroups = s(
              () => [
                e.getAllColumns(),
                e.getVisibleLeafColumns(),
                e.getState().columnPinning.right,
              ],
              (t, n, r) => {
                var o;
                return g(
                  t,
                  null !=
                    (o =
                      null == r
                        ? void 0
                        : r
                            .map((e) => n.find((t) => t.id === e))
                            .filter(Boolean))
                    ? o
                    : [],
                  e,
                  "right",
                );
              },
              u(e.options, c),
            )),
            (e.getFooterGroups = s(
              () => [e.getHeaderGroups()],
              (e) => [...e].reverse(),
              u(e.options, c),
            )),
            (e.getLeftFooterGroups = s(
              () => [e.getLeftHeaderGroups()],
              (e) => [...e].reverse(),
              u(e.options, c),
            )),
            (e.getCenterFooterGroups = s(
              () => [e.getCenterHeaderGroups()],
              (e) => [...e].reverse(),
              u(e.options, c),
            )),
            (e.getRightFooterGroups = s(
              () => [e.getRightHeaderGroups()],
              (e) => [...e].reverse(),
              u(e.options, c),
            )),
            (e.getFlatHeaders = s(
              () => [e.getHeaderGroups()],
              (e) => e.map((e) => e.headers).flat(),
              u(e.options, c),
            )),
            (e.getLeftFlatHeaders = s(
              () => [e.getLeftHeaderGroups()],
              (e) => e.map((e) => e.headers).flat(),
              u(e.options, c),
            )),
            (e.getCenterFlatHeaders = s(
              () => [e.getCenterHeaderGroups()],
              (e) => e.map((e) => e.headers).flat(),
              u(e.options, c),
            )),
            (e.getRightFlatHeaders = s(
              () => [e.getRightHeaderGroups()],
              (e) => e.map((e) => e.headers).flat(),
              u(e.options, c),
            )),
            (e.getCenterLeafHeaders = s(
              () => [e.getCenterFlatHeaders()],
              (e) =>
                e.filter((e) => {
                  var t;
                  return !(null != (t = e.subHeaders) && t.length);
                }),
              u(e.options, c),
            )),
            (e.getLeftLeafHeaders = s(
              () => [e.getLeftFlatHeaders()],
              (e) =>
                e.filter((e) => {
                  var t;
                  return !(null != (t = e.subHeaders) && t.length);
                }),
              u(e.options, c),
            )),
            (e.getRightLeafHeaders = s(
              () => [e.getRightFlatHeaders()],
              (e) =>
                e.filter((e) => {
                  var t;
                  return !(null != (t = e.subHeaders) && t.length);
                }),
              u(e.options, c),
            )),
            (e.getLeafHeaders = s(
              () => [
                e.getLeftHeaderGroups(),
                e.getCenterHeaderGroups(),
                e.getRightHeaderGroups(),
              ],
              (e, t, n) => {
                var r, o, i, l, a, s;
                return [
                  ...(null != (r = null == (o = e[0]) ? void 0 : o.headers)
                    ? r
                    : []),
                  ...(null != (i = null == (l = t[0]) ? void 0 : l.headers)
                    ? i
                    : []),
                  ...(null != (a = null == (s = n[0]) ? void 0 : s.headers)
                    ? a
                    : []),
                ]
                  .map((e) => e.getLeafHeaders())
                  .flat();
              },
              u(e.options, c),
            ));
        },
      };
      function g(e, t, n, r) {
        var o, i;
        let l = 0;
        const a = function (e, t) {
          void 0 === t && (t = 1),
            (l = Math.max(l, t)),
            e
              .filter((e) => e.getIsVisible())
              .forEach((e) => {
                var n;
                null != (n = e.columns) && n.length && a(e.columns, t + 1);
              }, 0);
        };
        a(e);
        let s = [];
        const u = (e, t) => {
            const o = {
                depth: t,
                id: [r, `${t}`].filter(Boolean).join("_"),
                headers: [],
              },
              i = [];
            e.forEach((e) => {
              const l = [...i].reverse()[0];
              let a,
                s = !1;
              if (
                (e.column.depth === o.depth && e.column.parent
                  ? (a = e.column.parent)
                  : ((a = e.column), (s = !0)),
                l && (null == l ? void 0 : l.column) === a)
              )
                l.subHeaders.push(e);
              else {
                const o = d(n, a, {
                  id: [r, t, a.id, null == e ? void 0 : e.id]
                    .filter(Boolean)
                    .join("_"),
                  isPlaceholder: s,
                  placeholderId: s
                    ? `${i.filter((e) => e.column === a).length}`
                    : void 0,
                  depth: t,
                  index: i.length,
                });
                o.subHeaders.push(e), i.push(o);
              }
              o.headers.push(e), (e.headerGroup = o);
            }),
              s.push(o),
              t > 0 && u(i, t - 1);
          },
          c = t.map((e, t) => d(n, e, { depth: l, index: t }));
        u(c, l - 1), s.reverse();
        const f = (e) =>
          e
            .filter((e) => e.column.getIsVisible())
            .map((e) => {
              let t = 0,
                n = 0,
                r = [0];
              e.subHeaders && e.subHeaders.length
                ? ((r = []),
                  f(e.subHeaders).forEach((e) => {
                    let { colSpan: n, rowSpan: o } = e;
                    (t += n), r.push(o);
                  }))
                : (t = 1);
              return (
                (n += Math.min(...r)),
                (e.colSpan = t),
                (e.rowSpan = n),
                { colSpan: t, rowSpan: n }
              );
            });
        return (
          f(null != (o = null == (i = s[0]) ? void 0 : i.headers) ? o : []), s
        );
      }
      const h = (e, t, n, r, o, i, l) => {
          let c = {
            id: t,
            index: r,
            original: n,
            depth: o,
            parentId: l,
            _valuesCache: {},
            _uniqueValuesCache: {},
            getValue: (t) => {
              if (c._valuesCache.hasOwnProperty(t)) return c._valuesCache[t];
              const n = e.getColumn(t);
              return null != n && n.accessorFn
                ? ((c._valuesCache[t] = n.accessorFn(c.original, r)),
                  c._valuesCache[t])
                : void 0;
            },
            getUniqueValues: (t) => {
              if (c._uniqueValuesCache.hasOwnProperty(t))
                return c._uniqueValuesCache[t];
              const n = e.getColumn(t);
              return null != n && n.accessorFn
                ? n.columnDef.getUniqueValues
                  ? ((c._uniqueValuesCache[t] = n.columnDef.getUniqueValues(
                      c.original,
                      r,
                    )),
                    c._uniqueValuesCache[t])
                  : ((c._uniqueValuesCache[t] = [c.getValue(t)]),
                    c._uniqueValuesCache[t])
                : void 0;
            },
            renderValue: (t) => {
              var n;
              return null != (n = c.getValue(t))
                ? n
                : e.options.renderFallbackValue;
            },
            subRows: null != i ? i : [],
            getLeafRows: () => a(c.subRows, (e) => e.subRows),
            getParentRow: () =>
              c.parentId ? e.getRow(c.parentId, !0) : void 0,
            getParentRows: () => {
              let e = [],
                t = c;
              for (;;) {
                const n = t.getParentRow();
                if (!n) break;
                e.push(n), (t = n);
              }
              return e.reverse();
            },
            getAllCells: s(
              () => [e.getAllLeafColumns()],
              (t) =>
                t.map((t) =>
                  (function (e, t, n, r) {
                    const o = {
                      id: `${t.id}_${n.id}`,
                      row: t,
                      column: n,
                      getValue: () => t.getValue(r),
                      renderValue: () => {
                        var t;
                        return null != (t = o.getValue())
                          ? t
                          : e.options.renderFallbackValue;
                      },
                      getContext: s(
                        () => [e, n, t, o],
                        (e, t, n, r) => ({
                          table: e,
                          column: t,
                          row: n,
                          cell: r,
                          getValue: r.getValue,
                          renderValue: r.renderValue,
                        }),
                        u(e.options, "debugCells"),
                      ),
                    };
                    return (
                      e._features.forEach((r) => {
                        null == r.createCell || r.createCell(o, n, t, e);
                      }, {}),
                      o
                    );
                  })(e, c, t, t.id),
                ),
              u(e.options, "debugRows"),
            ),
            _getAllCellsByColumnId: s(
              () => [c.getAllCells()],
              (e) => e.reduce((e, t) => ((e[t.column.id] = t), e), {}),
              u(e.options, "debugRows"),
            ),
          };
          for (let t = 0; t < e._features.length; t++) {
            const n = e._features[t];
            null == n || null == n.createRow || n.createRow(c, e);
          }
          return c;
        },
        p = {
          createColumn: (e, t) => {
            (e._getFacetedRowModel =
              t.options.getFacetedRowModel &&
              t.options.getFacetedRowModel(t, e.id)),
              (e.getFacetedRowModel = () =>
                e._getFacetedRowModel
                  ? e._getFacetedRowModel()
                  : t.getPreFilteredRowModel()),
              (e._getFacetedUniqueValues =
                t.options.getFacetedUniqueValues &&
                t.options.getFacetedUniqueValues(t, e.id)),
              (e.getFacetedUniqueValues = () =>
                e._getFacetedUniqueValues
                  ? e._getFacetedUniqueValues()
                  : new Map()),
              (e._getFacetedMinMaxValues =
                t.options.getFacetedMinMaxValues &&
                t.options.getFacetedMinMaxValues(t, e.id)),
              (e.getFacetedMinMaxValues = () => {
                if (e._getFacetedMinMaxValues)
                  return e._getFacetedMinMaxValues();
              });
          },
        },
        m = (e, t, n) => {
          var r, o;
          const i =
            null == n || null == (r = n.toString()) ? void 0 : r.toLowerCase();
          return Boolean(
            null == (o = e.getValue(t)) ||
              null == (o = o.toString()) ||
              null == (o = o.toLowerCase())
              ? void 0
              : o.includes(i),
          );
        };
      m.autoRemove = (e) => D(e);
      const v = (e, t, n) => {
        var r;
        return Boolean(
          null == (r = e.getValue(t)) || null == (r = r.toString())
            ? void 0
            : r.includes(n),
        );
      };
      v.autoRemove = (e) => D(e);
      const b = (e, t, n) => {
        var r;
        return (
          (null == (r = e.getValue(t)) || null == (r = r.toString())
            ? void 0
            : r.toLowerCase()) === (null == n ? void 0 : n.toLowerCase())
        );
      };
      b.autoRemove = (e) => D(e);
      const w = (e, t, n) => {
        var r;
        return null == (r = e.getValue(t)) ? void 0 : r.includes(n);
      };
      w.autoRemove = (e) => D(e) || !(null != e && e.length);
      const y = (e, t, n) =>
        !n.some((n) => {
          var r;
          return !(null != (r = e.getValue(t)) && r.includes(n));
        });
      y.autoRemove = (e) => D(e) || !(null != e && e.length);
      const S = (e, t, n) =>
        n.some((n) => {
          var r;
          return null == (r = e.getValue(t)) ? void 0 : r.includes(n);
        });
      S.autoRemove = (e) => D(e) || !(null != e && e.length);
      const C = (e, t, n) => e.getValue(t) === n;
      C.autoRemove = (e) => D(e);
      const R = (e, t, n) => e.getValue(t) == n;
      R.autoRemove = (e) => D(e);
      const E = (e, t, n) => {
        let [r, o] = n;
        const i = e.getValue(t);
        return i >= r && i <= o;
      };
      (E.resolveFilterValue = (e) => {
        let [t, n] = e,
          r = "number" != typeof t ? parseFloat(t) : t,
          o = "number" != typeof n ? parseFloat(n) : n,
          i = null === t || Number.isNaN(r) ? -1 / 0 : r,
          l = null === n || Number.isNaN(o) ? 1 / 0 : o;
        if (i > l) {
          const e = i;
          (i = l), (l = e);
        }
        return [i, l];
      }),
        (E.autoRemove = (e) => D(e) || (D(e[0]) && D(e[1])));
      const A = {
        includesString: m,
        includesStringSensitive: v,
        equalsString: b,
        arrIncludes: w,
        arrIncludesAll: y,
        arrIncludesSome: S,
        equals: C,
        weakEquals: R,
        inNumberRange: E,
      };
      function D(e) {
        return null == e || "" === e;
      }
      const x = {
        getDefaultColumnDef: () => ({ filterFn: "auto" }),
        getInitialState: (e) => ({ columnFilters: [], ...e }),
        getDefaultOptions: (e) => ({
          onColumnFiltersChange: i("columnFilters", e),
          filterFromLeafRows: !1,
          maxLeafRowFilterDepth: 100,
        }),
        createColumn: (e, t) => {
          (e.getAutoFilterFn = () => {
            const n = t.getCoreRowModel().flatRows[0],
              r = null == n ? void 0 : n.getValue(e.id);
            return "string" == typeof r
              ? A.includesString
              : "number" == typeof r
                ? A.inNumberRange
                : "boolean" == typeof r || (null !== r && "object" == typeof r)
                  ? A.equals
                  : Array.isArray(r)
                    ? A.arrIncludes
                    : A.weakEquals;
          }),
            (e.getFilterFn = () => {
              var n, r;
              return l(e.columnDef.filterFn)
                ? e.columnDef.filterFn
                : "auto" === e.columnDef.filterFn
                  ? e.getAutoFilterFn()
                  : null !=
                      (n =
                        null == (r = t.options.filterFns)
                          ? void 0
                          : r[e.columnDef.filterFn])
                    ? n
                    : A[e.columnDef.filterFn];
            }),
            (e.getCanFilter = () => {
              var n, r, o;
              return (
                (null == (n = e.columnDef.enableColumnFilter) || n) &&
                (null == (r = t.options.enableColumnFilters) || r) &&
                (null == (o = t.options.enableFilters) || o) &&
                !!e.accessorFn
              );
            }),
            (e.getIsFiltered = () => e.getFilterIndex() > -1),
            (e.getFilterValue = () => {
              var n;
              return null == (n = t.getState().columnFilters) ||
                null == (n = n.find((t) => t.id === e.id))
                ? void 0
                : n.value;
            }),
            (e.getFilterIndex = () => {
              var n, r;
              return null !=
                (n =
                  null == (r = t.getState().columnFilters)
                    ? void 0
                    : r.findIndex((t) => t.id === e.id))
                ? n
                : -1;
            }),
            (e.setFilterValue = (n) => {
              t.setColumnFilters((t) => {
                const r = e.getFilterFn(),
                  i = null == t ? void 0 : t.find((t) => t.id === e.id),
                  l = o(n, i ? i.value : void 0);
                var a;
                if (M(r, l, e))
                  return null !=
                    (a = null == t ? void 0 : t.filter((t) => t.id !== e.id))
                    ? a
                    : [];
                const s = { id: e.id, value: l };
                var u;
                return i
                  ? null !=
                    (u =
                      null == t
                        ? void 0
                        : t.map((t) => (t.id === e.id ? s : t)))
                    ? u
                    : []
                  : null != t && t.length
                    ? [...t, s]
                    : [s];
              });
            });
        },
        createRow: (e, t) => {
          (e.columnFilters = {}), (e.columnFiltersMeta = {});
        },
        createTable: (e) => {
          (e.setColumnFilters = (t) => {
            const n = e.getAllLeafColumns();
            null == e.options.onColumnFiltersChange ||
              e.options.onColumnFiltersChange((e) => {
                var r;
                return null == (r = o(t, e))
                  ? void 0
                  : r.filter((e) => {
                      const t = n.find((t) => t.id === e.id);
                      if (t) {
                        if (M(t.getFilterFn(), e.value, t)) return !1;
                      }
                      return !0;
                    });
              });
          }),
            (e.resetColumnFilters = (t) => {
              var n, r;
              e.setColumnFilters(
                t
                  ? []
                  : null !=
                      (n =
                        null == (r = e.initialState) ? void 0 : r.columnFilters)
                    ? n
                    : [],
              );
            }),
            (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
            (e.getFilteredRowModel = () => (
              !e._getFilteredRowModel &&
                e.options.getFilteredRowModel &&
                (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
              e.options.manualFiltering || !e._getFilteredRowModel
                ? e.getPreFilteredRowModel()
                : e._getFilteredRowModel()
            ));
        },
      };
      function M(e, t, n) {
        return (
          (!(!e || !e.autoRemove) && e.autoRemove(t, n)) ||
          void 0 === t ||
          ("string" == typeof t && !t)
        );
      }
      const O = {
          sum: (e, t, n) =>
            n.reduce((t, n) => {
              const r = n.getValue(e);
              return t + ("number" == typeof r ? r : 0);
            }, 0),
          min: (e, t, n) => {
            let r;
            return (
              n.forEach((t) => {
                const n = t.getValue(e);
                null != n && (r > n || (void 0 === r && n >= n)) && (r = n);
              }),
              r
            );
          },
          max: (e, t, n) => {
            let r;
            return (
              n.forEach((t) => {
                const n = t.getValue(e);
                null != n && (r < n || (void 0 === r && n >= n)) && (r = n);
              }),
              r
            );
          },
          extent: (e, t, n) => {
            let r, o;
            return (
              n.forEach((t) => {
                const n = t.getValue(e);
                null != n &&
                  (void 0 === r
                    ? n >= n && (r = o = n)
                    : (r > n && (r = n), o < n && (o = n)));
              }),
              [r, o]
            );
          },
          mean: (e, t) => {
            let n = 0,
              r = 0;
            if (
              (t.forEach((t) => {
                let o = t.getValue(e);
                null != o && (o = +o) >= o && (++n, (r += o));
              }),
              n)
            )
              return r / n;
          },
          median: (e, t) => {
            if (!t.length) return;
            const n = t.map((t) => t.getValue(e));
            if (
              ((r = n),
              !Array.isArray(r) || !r.every((e) => "number" == typeof e))
            )
              return;
            var r;
            if (1 === n.length) return n[0];
            const o = Math.floor(n.length / 2),
              i = n.sort((e, t) => e - t);
            return n.length % 2 != 0 ? i[o] : (i[o - 1] + i[o]) / 2;
          },
          unique: (e, t) =>
            Array.from(new Set(t.map((t) => t.getValue(e))).values()),
          uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
          count: (e, t) => t.length,
        },
        _ = {
          getDefaultColumnDef: () => ({
            aggregatedCell: (e) => {
              var t, n;
              return null !=
                (t =
                  null == (n = e.getValue()) || null == n.toString
                    ? void 0
                    : n.toString())
                ? t
                : null;
            },
            aggregationFn: "auto",
          }),
          getInitialState: (e) => ({ grouping: [], ...e }),
          getDefaultOptions: (e) => ({
            onGroupingChange: i("grouping", e),
            groupedColumnMode: "reorder",
          }),
          createColumn: (e, t) => {
            (e.toggleGrouping = () => {
              t.setGrouping((t) =>
                null != t && t.includes(e.id)
                  ? t.filter((t) => t !== e.id)
                  : [...(null != t ? t : []), e.id],
              );
            }),
              (e.getCanGroup = () => {
                var n, r;
                return (
                  (null == (n = e.columnDef.enableGrouping) || n) &&
                  (null == (r = t.options.enableGrouping) || r) &&
                  (!!e.accessorFn || !!e.columnDef.getGroupingValue)
                );
              }),
              (e.getIsGrouped = () => {
                var n;
                return null == (n = t.getState().grouping)
                  ? void 0
                  : n.includes(e.id);
              }),
              (e.getGroupedIndex = () => {
                var n;
                return null == (n = t.getState().grouping)
                  ? void 0
                  : n.indexOf(e.id);
              }),
              (e.getToggleGroupingHandler = () => {
                const t = e.getCanGroup();
                return () => {
                  t && e.toggleGrouping();
                };
              }),
              (e.getAutoAggregationFn = () => {
                const n = t.getCoreRowModel().flatRows[0],
                  r = null == n ? void 0 : n.getValue(e.id);
                return "number" == typeof r
                  ? O.sum
                  : "[object Date]" === Object.prototype.toString.call(r)
                    ? O.extent
                    : void 0;
              }),
              (e.getAggregationFn = () => {
                var n, r;
                if (!e) throw new Error();
                return l(e.columnDef.aggregationFn)
                  ? e.columnDef.aggregationFn
                  : "auto" === e.columnDef.aggregationFn
                    ? e.getAutoAggregationFn()
                    : null !=
                        (n =
                          null == (r = t.options.aggregationFns)
                            ? void 0
                            : r[e.columnDef.aggregationFn])
                      ? n
                      : O[e.columnDef.aggregationFn];
              });
          },
          createTable: (e) => {
            (e.setGrouping = (t) =>
              null == e.options.onGroupingChange
                ? void 0
                : e.options.onGroupingChange(t)),
              (e.resetGrouping = (t) => {
                var n, r;
                e.setGrouping(
                  t
                    ? []
                    : null !=
                        (n = null == (r = e.initialState) ? void 0 : r.grouping)
                      ? n
                      : [],
                );
              }),
              (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
              (e.getGroupedRowModel = () => (
                !e._getGroupedRowModel &&
                  e.options.getGroupedRowModel &&
                  (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
                e.options.manualGrouping || !e._getGroupedRowModel
                  ? e.getPreGroupedRowModel()
                  : e._getGroupedRowModel()
              ));
          },
          createRow: (e, t) => {
            (e.getIsGrouped = () => !!e.groupingColumnId),
              (e.getGroupingValue = (n) => {
                if (e._groupingValuesCache.hasOwnProperty(n))
                  return e._groupingValuesCache[n];
                const r = t.getColumn(n);
                return null != r && r.columnDef.getGroupingValue
                  ? ((e._groupingValuesCache[n] = r.columnDef.getGroupingValue(
                      e.original,
                    )),
                    e._groupingValuesCache[n])
                  : e.getValue(n);
              }),
              (e._groupingValuesCache = {});
          },
          createCell: (e, t, n, r) => {
            (e.getIsGrouped = () =>
              t.getIsGrouped() && t.id === n.groupingColumnId),
              (e.getIsPlaceholder = () =>
                !e.getIsGrouped() && t.getIsGrouped()),
              (e.getIsAggregated = () => {
                var t;
                return (
                  !e.getIsGrouped() &&
                  !e.getIsPlaceholder() &&
                  !(null == (t = n.subRows) || !t.length)
                );
              });
          },
        };
      const k = {
          getInitialState: (e) => ({ columnOrder: [], ...e }),
          getDefaultOptions: (e) => ({
            onColumnOrderChange: i("columnOrder", e),
          }),
          createColumn: (e, t) => {
            (e.getIndex = s(
              (e) => [L(t, e)],
              (t) => t.findIndex((t) => t.id === e.id),
              u(t.options, "debugColumns"),
            )),
              (e.getIsFirstColumn = (n) => {
                var r;
                return (null == (r = L(t, n)[0]) ? void 0 : r.id) === e.id;
              }),
              (e.getIsLastColumn = (n) => {
                var r;
                const o = L(t, n);
                return (null == (r = o[o.length - 1]) ? void 0 : r.id) === e.id;
              });
          },
          createTable: (e) => {
            (e.setColumnOrder = (t) =>
              null == e.options.onColumnOrderChange
                ? void 0
                : e.options.onColumnOrderChange(t)),
              (e.resetColumnOrder = (t) => {
                var n;
                e.setColumnOrder(
                  t ? [] : null != (n = e.initialState.columnOrder) ? n : [],
                );
              }),
              (e._getOrderColumnsFn = s(
                () => [
                  e.getState().columnOrder,
                  e.getState().grouping,
                  e.options.groupedColumnMode,
                ],
                (e, t, n) => (r) => {
                  let o = [];
                  if (null != e && e.length) {
                    const t = [...e],
                      n = [...r];
                    for (; n.length && t.length; ) {
                      const e = t.shift(),
                        r = n.findIndex((t) => t.id === e);
                      r > -1 && o.push(n.splice(r, 1)[0]);
                    }
                    o = [...o, ...n];
                  } else o = r;
                  return (function (e, t, n) {
                    if (null == t || !t.length || !n) return e;
                    const r = e.filter((e) => !t.includes(e.id));
                    return "remove" === n
                      ? r
                      : [
                          ...t
                            .map((t) => e.find((e) => e.id === t))
                            .filter(Boolean),
                          ...r,
                        ];
                  })(o, t, n);
                },
                u(e.options, "debugTable"),
              ));
          },
        },
        P = {
          getInitialState: (e) => ({
            columnPinning: { left: [], right: [] },
            ...e,
          }),
          getDefaultOptions: (e) => ({
            onColumnPinningChange: i("columnPinning", e),
          }),
          createColumn: (e, t) => {
            (e.pin = (n) => {
              const r = e
                .getLeafColumns()
                .map((e) => e.id)
                .filter(Boolean);
              t.setColumnPinning((e) => {
                var t, o, i, l, a, s;
                return "right" === n
                  ? {
                      left: (null != (i = null == e ? void 0 : e.left)
                        ? i
                        : []
                      ).filter((e) => !(null != r && r.includes(e))),
                      right: [
                        ...(null != (l = null == e ? void 0 : e.right)
                          ? l
                          : []
                        ).filter((e) => !(null != r && r.includes(e))),
                        ...r,
                      ],
                    }
                  : "left" === n
                    ? {
                        left: [
                          ...(null != (a = null == e ? void 0 : e.left)
                            ? a
                            : []
                          ).filter((e) => !(null != r && r.includes(e))),
                          ...r,
                        ],
                        right: (null != (s = null == e ? void 0 : e.right)
                          ? s
                          : []
                        ).filter((e) => !(null != r && r.includes(e))),
                      }
                    : {
                        left: (null != (t = null == e ? void 0 : e.left)
                          ? t
                          : []
                        ).filter((e) => !(null != r && r.includes(e))),
                        right: (null != (o = null == e ? void 0 : e.right)
                          ? o
                          : []
                        ).filter((e) => !(null != r && r.includes(e))),
                      };
              });
            }),
              (e.getCanPin = () =>
                e.getLeafColumns().some((e) => {
                  var n, r, o;
                  return (
                    (null == (n = e.columnDef.enablePinning) || n) &&
                    (null ==
                      (r =
                        null != (o = t.options.enableColumnPinning)
                          ? o
                          : t.options.enablePinning) ||
                      r)
                  );
                })),
              (e.getIsPinned = () => {
                const n = e.getLeafColumns().map((e) => e.id),
                  { left: r, right: o } = t.getState().columnPinning,
                  i = n.some((e) => (null == r ? void 0 : r.includes(e))),
                  l = n.some((e) => (null == o ? void 0 : o.includes(e)));
                return i ? "left" : !!l && "right";
              }),
              (e.getPinnedIndex = () => {
                var n, r;
                const o = e.getIsPinned();
                return o
                  ? null !=
                    (n =
                      null == (r = t.getState().columnPinning) ||
                      null == (r = r[o])
                        ? void 0
                        : r.indexOf(e.id))
                    ? n
                    : -1
                  : 0;
              });
          },
          createRow: (e, t) => {
            (e.getCenterVisibleCells = s(
              () => [
                e._getAllVisibleCells(),
                t.getState().columnPinning.left,
                t.getState().columnPinning.right,
              ],
              (e, t, n) => {
                const r = [...(null != t ? t : []), ...(null != n ? n : [])];
                return e.filter((e) => !r.includes(e.column.id));
              },
              u(t.options, "debugRows"),
            )),
              (e.getLeftVisibleCells = s(
                () => [
                  e._getAllVisibleCells(),
                  t.getState().columnPinning.left,
                ],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.column.id === t))
                    .filter(Boolean)
                    .map((e) => ({ ...e, position: "left" })),
                u(t.options, "debugRows"),
              )),
              (e.getRightVisibleCells = s(
                () => [
                  e._getAllVisibleCells(),
                  t.getState().columnPinning.right,
                ],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.column.id === t))
                    .filter(Boolean)
                    .map((e) => ({ ...e, position: "right" })),
                u(t.options, "debugRows"),
              ));
          },
          createTable: (e) => {
            (e.setColumnPinning = (t) =>
              null == e.options.onColumnPinningChange
                ? void 0
                : e.options.onColumnPinningChange(t)),
              (e.resetColumnPinning = (t) => {
                var n, r;
                return e.setColumnPinning(
                  t
                    ? { left: [], right: [] }
                    : null !=
                        (n =
                          null == (r = e.initialState)
                            ? void 0
                            : r.columnPinning)
                      ? n
                      : { left: [], right: [] },
                );
              }),
              (e.getIsSomeColumnsPinned = (t) => {
                var n;
                const r = e.getState().columnPinning;
                var o, i;
                return t
                  ? Boolean(null == (n = r[t]) ? void 0 : n.length)
                  : Boolean(
                      (null == (o = r.left) ? void 0 : o.length) ||
                        (null == (i = r.right) ? void 0 : i.length),
                    );
              }),
              (e.getLeftLeafColumns = s(
                () => [e.getAllLeafColumns(), e.getState().columnPinning.left],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.id === t))
                    .filter(Boolean),
                u(e.options, "debugColumns"),
              )),
              (e.getRightLeafColumns = s(
                () => [e.getAllLeafColumns(), e.getState().columnPinning.right],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.id === t))
                    .filter(Boolean),
                u(e.options, "debugColumns"),
              )),
              (e.getCenterLeafColumns = s(
                () => [
                  e.getAllLeafColumns(),
                  e.getState().columnPinning.left,
                  e.getState().columnPinning.right,
                ],
                (e, t, n) => {
                  const r = [...(null != t ? t : []), ...(null != n ? n : [])];
                  return e.filter((e) => !r.includes(e.id));
                },
                u(e.options, "debugColumns"),
              ));
          },
        },
        F = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
        I = {
          getDefaultColumnDef: () => F,
          getInitialState: (e) => ({
            columnSizing: {},
            columnSizingInfo: {
              startOffset: null,
              startSize: null,
              deltaOffset: null,
              deltaPercentage: null,
              isResizingColumn: !1,
              columnSizingStart: [],
            },
            ...e,
          }),
          getDefaultOptions: (e) => ({
            columnResizeMode: "onEnd",
            columnResizeDirection: "ltr",
            onColumnSizingChange: i("columnSizing", e),
            onColumnSizingInfoChange: i("columnSizingInfo", e),
          }),
          createColumn: (e, t) => {
            (e.getSize = () => {
              var n, r, o;
              const i = t.getState().columnSizing[e.id];
              return Math.min(
                Math.max(
                  null != (n = e.columnDef.minSize) ? n : F.minSize,
                  null != (r = null != i ? i : e.columnDef.size) ? r : F.size,
                ),
                null != (o = e.columnDef.maxSize) ? o : F.maxSize,
              );
            }),
              (e.getStart = s(
                (e) => [e, L(t, e), t.getState().columnSizing],
                (t, n) =>
                  n
                    .slice(0, e.getIndex(t))
                    .reduce((e, t) => e + t.getSize(), 0),
                u(t.options, "debugColumns"),
              )),
              (e.getAfter = s(
                (e) => [e, L(t, e), t.getState().columnSizing],
                (t, n) =>
                  n
                    .slice(e.getIndex(t) + 1)
                    .reduce((e, t) => e + t.getSize(), 0),
                u(t.options, "debugColumns"),
              )),
              (e.resetSize = () => {
                t.setColumnSizing((t) => {
                  let { [e.id]: n, ...r } = t;
                  return r;
                });
              }),
              (e.getCanResize = () => {
                var n, r;
                return (
                  (null == (n = e.columnDef.enableResizing) || n) &&
                  (null == (r = t.options.enableColumnResizing) || r)
                );
              }),
              (e.getIsResizing = () =>
                t.getState().columnSizingInfo.isResizingColumn === e.id);
          },
          createHeader: (e, t) => {
            (e.getSize = () => {
              let t = 0;
              const n = (e) => {
                var r;
                e.subHeaders.length
                  ? e.subHeaders.forEach(n)
                  : (t += null != (r = e.column.getSize()) ? r : 0);
              };
              return n(e), t;
            }),
              (e.getStart = () => {
                if (e.index > 0) {
                  const t = e.headerGroup.headers[e.index - 1];
                  return t.getStart() + t.getSize();
                }
                return 0;
              }),
              (e.getResizeHandler = (n) => {
                const r = t.getColumn(e.column.id),
                  o = null == r ? void 0 : r.getCanResize();
                return (i) => {
                  if (!r || !o) return;
                  if (
                    (null == i.persist || i.persist(),
                    z(i) && i.touches && i.touches.length > 1)
                  )
                    return;
                  const l = e.getSize(),
                    a = e
                      ? e
                          .getLeafHeaders()
                          .map((e) => [e.column.id, e.column.getSize()])
                      : [[r.id, r.getSize()]],
                    s = z(i) ? Math.round(i.touches[0].clientX) : i.clientX,
                    u = {},
                    c = (e, n) => {
                      "number" == typeof n &&
                        (t.setColumnSizingInfo((e) => {
                          var r, o;
                          const i =
                              "rtl" === t.options.columnResizeDirection
                                ? -1
                                : 1,
                            l =
                              (n -
                                (null !=
                                (r = null == e ? void 0 : e.startOffset)
                                  ? r
                                  : 0)) *
                              i,
                            a = Math.max(
                              l /
                                (null != (o = null == e ? void 0 : e.startSize)
                                  ? o
                                  : 0),
                              -0.999999,
                            );
                          return (
                            e.columnSizingStart.forEach((e) => {
                              let [t, n] = e;
                              u[t] =
                                Math.round(100 * Math.max(n + n * a, 0)) / 100;
                            }),
                            { ...e, deltaOffset: l, deltaPercentage: a }
                          );
                        }),
                        ("onChange" !== t.options.columnResizeMode &&
                          "end" !== e) ||
                          t.setColumnSizing((e) => ({ ...e, ...u })));
                    },
                    d = (e) => c("move", e),
                    f = (e) => {
                      c("end", e),
                        t.setColumnSizingInfo((e) => ({
                          ...e,
                          isResizingColumn: !1,
                          startOffset: null,
                          startSize: null,
                          deltaOffset: null,
                          deltaPercentage: null,
                          columnSizingStart: [],
                        }));
                    },
                    g = n || "undefined" != typeof document ? document : null,
                    h = {
                      moveHandler: (e) => d(e.clientX),
                      upHandler: (e) => {
                        null == g ||
                          g.removeEventListener("mousemove", h.moveHandler),
                          null == g ||
                            g.removeEventListener("mouseup", h.upHandler),
                          f(e.clientX);
                      },
                    },
                    p = {
                      moveHandler: (e) => (
                        e.cancelable &&
                          (e.preventDefault(), e.stopPropagation()),
                        d(e.touches[0].clientX),
                        !1
                      ),
                      upHandler: (e) => {
                        var t;
                        null == g ||
                          g.removeEventListener("touchmove", p.moveHandler),
                          null == g ||
                            g.removeEventListener("touchend", p.upHandler),
                          e.cancelable &&
                            (e.preventDefault(), e.stopPropagation()),
                          f(null == (t = e.touches[0]) ? void 0 : t.clientX);
                      },
                    },
                    m = !!(function () {
                      if ("boolean" == typeof T) return T;
                      let e = !1;
                      try {
                        const t = {
                            get passive() {
                              return (e = !0), !1;
                            },
                          },
                          n = () => {};
                        window.addEventListener("test", n, t),
                          window.removeEventListener("test", n);
                      } catch (t) {
                        e = !1;
                      }
                      return (T = e), T;
                    })() && { passive: !1 };
                  z(i)
                    ? (null == g ||
                        g.addEventListener("touchmove", p.moveHandler, m),
                      null == g ||
                        g.addEventListener("touchend", p.upHandler, m))
                    : (null == g ||
                        g.addEventListener("mousemove", h.moveHandler, m),
                      null == g ||
                        g.addEventListener("mouseup", h.upHandler, m)),
                    t.setColumnSizingInfo((e) => ({
                      ...e,
                      startOffset: s,
                      startSize: l,
                      deltaOffset: 0,
                      deltaPercentage: 0,
                      columnSizingStart: a,
                      isResizingColumn: r.id,
                    }));
                };
              });
          },
          createTable: (e) => {
            (e.setColumnSizing = (t) =>
              null == e.options.onColumnSizingChange
                ? void 0
                : e.options.onColumnSizingChange(t)),
              (e.setColumnSizingInfo = (t) =>
                null == e.options.onColumnSizingInfoChange
                  ? void 0
                  : e.options.onColumnSizingInfoChange(t)),
              (e.resetColumnSizing = (t) => {
                var n;
                e.setColumnSizing(
                  t ? {} : null != (n = e.initialState.columnSizing) ? n : {},
                );
              }),
              (e.resetHeaderSizeInfo = (t) => {
                var n;
                e.setColumnSizingInfo(
                  t
                    ? {
                        startOffset: null,
                        startSize: null,
                        deltaOffset: null,
                        deltaPercentage: null,
                        isResizingColumn: !1,
                        columnSizingStart: [],
                      }
                    : null != (n = e.initialState.columnSizingInfo)
                      ? n
                      : {
                          startOffset: null,
                          startSize: null,
                          deltaOffset: null,
                          deltaPercentage: null,
                          isResizingColumn: !1,
                          columnSizingStart: [],
                        },
                );
              }),
              (e.getTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getLeftTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getLeftHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getCenterTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getCenterHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getRightTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getRightHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              });
          },
        };
      let T = null;
      function z(e) {
        return "touchstart" === e.type;
      }
      function L(e, t) {
        return t
          ? "center" === t
            ? e.getCenterVisibleLeafColumns()
            : "left" === t
              ? e.getLeftVisibleLeafColumns()
              : e.getRightVisibleLeafColumns()
          : e.getVisibleLeafColumns();
      }
      const V = {
          getInitialState: (e) => ({ rowSelection: {}, ...e }),
          getDefaultOptions: (e) => ({
            onRowSelectionChange: i("rowSelection", e),
            enableRowSelection: !0,
            enableMultiRowSelection: !0,
            enableSubRowSelection: !0,
          }),
          createTable: (e) => {
            (e.setRowSelection = (t) =>
              null == e.options.onRowSelectionChange
                ? void 0
                : e.options.onRowSelectionChange(t)),
              (e.resetRowSelection = (t) => {
                var n;
                return e.setRowSelection(
                  t ? {} : null != (n = e.initialState.rowSelection) ? n : {},
                );
              }),
              (e.toggleAllRowsSelected = (t) => {
                e.setRowSelection((n) => {
                  t = void 0 !== t ? t : !e.getIsAllRowsSelected();
                  const r = { ...n },
                    o = e.getPreGroupedRowModel().flatRows;
                  return (
                    t
                      ? o.forEach((e) => {
                          e.getCanSelect() && (r[e.id] = !0);
                        })
                      : o.forEach((e) => {
                          delete r[e.id];
                        }),
                    r
                  );
                });
              }),
              (e.toggleAllPageRowsSelected = (t) =>
                e.setRowSelection((n) => {
                  const r = void 0 !== t ? t : !e.getIsAllPageRowsSelected(),
                    o = { ...n };
                  return (
                    e.getRowModel().rows.forEach((t) => {
                      N(o, t.id, r, !0, e);
                    }),
                    o
                  );
                })),
              (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
              (e.getSelectedRowModel = s(
                () => [e.getState().rowSelection, e.getCoreRowModel()],
                (t, n) =>
                  Object.keys(t).length
                    ? j(e, n)
                    : { rows: [], flatRows: [], rowsById: {} },
                u(e.options, "debugTable"),
              )),
              (e.getFilteredSelectedRowModel = s(
                () => [e.getState().rowSelection, e.getFilteredRowModel()],
                (t, n) =>
                  Object.keys(t).length
                    ? j(e, n)
                    : { rows: [], flatRows: [], rowsById: {} },
                u(e.options, "debugTable"),
              )),
              (e.getGroupedSelectedRowModel = s(
                () => [e.getState().rowSelection, e.getSortedRowModel()],
                (t, n) =>
                  Object.keys(t).length
                    ? j(e, n)
                    : { rows: [], flatRows: [], rowsById: {} },
                u(e.options, "debugTable"),
              )),
              (e.getIsAllRowsSelected = () => {
                const t = e.getFilteredRowModel().flatRows,
                  { rowSelection: n } = e.getState();
                let r = Boolean(t.length && Object.keys(n).length);
                return (
                  r && t.some((e) => e.getCanSelect() && !n[e.id]) && (r = !1),
                  r
                );
              }),
              (e.getIsAllPageRowsSelected = () => {
                const t = e
                    .getPaginationRowModel()
                    .flatRows.filter((e) => e.getCanSelect()),
                  { rowSelection: n } = e.getState();
                let r = !!t.length;
                return r && t.some((e) => !n[e.id]) && (r = !1), r;
              }),
              (e.getIsSomeRowsSelected = () => {
                var t;
                const n = Object.keys(
                  null != (t = e.getState().rowSelection) ? t : {},
                ).length;
                return n > 0 && n < e.getFilteredRowModel().flatRows.length;
              }),
              (e.getIsSomePageRowsSelected = () => {
                const t = e.getPaginationRowModel().flatRows;
                return (
                  !e.getIsAllPageRowsSelected() &&
                  t
                    .filter((e) => e.getCanSelect())
                    .some((e) => e.getIsSelected() || e.getIsSomeSelected())
                );
              }),
              (e.getToggleAllRowsSelectedHandler = () => (t) => {
                e.toggleAllRowsSelected(t.target.checked);
              }),
              (e.getToggleAllPageRowsSelectedHandler = () => (t) => {
                e.toggleAllPageRowsSelected(t.target.checked);
              });
          },
          createRow: (e, t) => {
            (e.toggleSelected = (n, r) => {
              const o = e.getIsSelected();
              t.setRowSelection((i) => {
                var l;
                if (((n = void 0 !== n ? n : !o), e.getCanSelect() && o === n))
                  return i;
                const a = { ...i };
                return (
                  N(
                    a,
                    e.id,
                    n,
                    null == (l = null == r ? void 0 : r.selectChildren) || l,
                    t,
                  ),
                  a
                );
              });
            }),
              (e.getIsSelected = () => {
                const { rowSelection: n } = t.getState();
                return H(e, n);
              }),
              (e.getIsSomeSelected = () => {
                const { rowSelection: n } = t.getState();
                return "some" === G(e, n);
              }),
              (e.getIsAllSubRowsSelected = () => {
                const { rowSelection: n } = t.getState();
                return "all" === G(e, n);
              }),
              (e.getCanSelect = () => {
                var n;
                return "function" == typeof t.options.enableRowSelection
                  ? t.options.enableRowSelection(e)
                  : null == (n = t.options.enableRowSelection) || n;
              }),
              (e.getCanSelectSubRows = () => {
                var n;
                return "function" == typeof t.options.enableSubRowSelection
                  ? t.options.enableSubRowSelection(e)
                  : null == (n = t.options.enableSubRowSelection) || n;
              }),
              (e.getCanMultiSelect = () => {
                var n;
                return "function" == typeof t.options.enableMultiRowSelection
                  ? t.options.enableMultiRowSelection(e)
                  : null == (n = t.options.enableMultiRowSelection) || n;
              }),
              (e.getToggleSelectedHandler = () => {
                const t = e.getCanSelect();
                return (n) => {
                  var r;
                  t &&
                    e.toggleSelected(
                      null == (r = n.target) ? void 0 : r.checked,
                    );
                };
              });
          },
        },
        N = (e, t, n, r, o) => {
          var i;
          const l = o.getRow(t, !0);
          n
            ? (l.getCanMultiSelect() ||
                Object.keys(e).forEach((t) => delete e[t]),
              l.getCanSelect() && (e[t] = !0))
            : delete e[t],
            r &&
              null != (i = l.subRows) &&
              i.length &&
              l.getCanSelectSubRows() &&
              l.subRows.forEach((t) => N(e, t.id, n, r, o));
        };
      function j(e, t) {
        const n = e.getState().rowSelection,
          r = [],
          o = {},
          i = function (e, t) {
            return e
              .map((e) => {
                var t;
                const l = H(e, n);
                if (
                  (l && (r.push(e), (o[e.id] = e)),
                  null != (t = e.subRows) &&
                    t.length &&
                    (e = { ...e, subRows: i(e.subRows) }),
                  l)
                )
                  return e;
              })
              .filter(Boolean);
          };
        return { rows: i(t.rows), flatRows: r, rowsById: o };
      }
      function H(e, t) {
        var n;
        return null != (n = t[e.id]) && n;
      }
      function G(e, t, n) {
        var r;
        if (null == (r = e.subRows) || !r.length) return !1;
        let o = !0,
          i = !1;
        return (
          e.subRows.forEach((e) => {
            if (
              (!i || o) &&
              (e.getCanSelect() && (H(e, t) ? (i = !0) : (o = !1)),
              e.subRows && e.subRows.length)
            ) {
              const n = G(e, t);
              "all" === n
                ? (i = !0)
                : "some" === n
                  ? ((i = !0), (o = !1))
                  : (o = !1);
            }
          }),
          o ? "all" : !!i && "some"
        );
      }
      const B = /([0-9]+)/gm;
      function W(e, t) {
        return e === t ? 0 : e > t ? 1 : -1;
      }
      function q(e) {
        return "number" == typeof e
          ? isNaN(e) || e === 1 / 0 || e === -1 / 0
            ? ""
            : String(e)
          : "string" == typeof e
            ? e
            : "";
      }
      function Y(e, t) {
        const n = e.split(B).filter(Boolean),
          r = t.split(B).filter(Boolean);
        for (; n.length && r.length; ) {
          const e = n.shift(),
            t = r.shift(),
            o = parseInt(e, 10),
            i = parseInt(t, 10),
            l = [o, i].sort();
          if (isNaN(l[0])) {
            if (e > t) return 1;
            if (t > e) return -1;
          } else {
            if (isNaN(l[1])) return isNaN(o) ? -1 : 1;
            if (o > i) return 1;
            if (i > o) return -1;
          }
        }
        return n.length - r.length;
      }
      const U = {
          alphanumeric: (e, t, n) =>
            Y(q(e.getValue(n)).toLowerCase(), q(t.getValue(n)).toLowerCase()),
          alphanumericCaseSensitive: (e, t, n) =>
            Y(q(e.getValue(n)), q(t.getValue(n))),
          text: (e, t, n) =>
            W(q(e.getValue(n)).toLowerCase(), q(t.getValue(n)).toLowerCase()),
          textCaseSensitive: (e, t, n) => W(q(e.getValue(n)), q(t.getValue(n))),
          datetime: (e, t, n) => {
            const r = e.getValue(n),
              o = t.getValue(n);
            return r > o ? 1 : r < o ? -1 : 0;
          },
          basic: (e, t, n) => W(e.getValue(n), t.getValue(n)),
        },
        $ = [
          f,
          {
            getInitialState: (e) => ({ columnVisibility: {}, ...e }),
            getDefaultOptions: (e) => ({
              onColumnVisibilityChange: i("columnVisibility", e),
            }),
            createColumn: (e, t) => {
              (e.toggleVisibility = (n) => {
                e.getCanHide() &&
                  t.setColumnVisibility((t) => ({
                    ...t,
                    [e.id]: null != n ? n : !e.getIsVisible(),
                  }));
              }),
                (e.getIsVisible = () => {
                  var n, r;
                  const o = e.columns;
                  return (
                    null ==
                      (n = o.length
                        ? o.some((e) => e.getIsVisible())
                        : null == (r = t.getState().columnVisibility)
                          ? void 0
                          : r[e.id]) || n
                  );
                }),
                (e.getCanHide = () => {
                  var n, r;
                  return (
                    (null == (n = e.columnDef.enableHiding) || n) &&
                    (null == (r = t.options.enableHiding) || r)
                  );
                }),
                (e.getToggleVisibilityHandler = () => (t) => {
                  null == e.toggleVisibility ||
                    e.toggleVisibility(t.target.checked);
                });
            },
            createRow: (e, t) => {
              (e._getAllVisibleCells = s(
                () => [e.getAllCells(), t.getState().columnVisibility],
                (e) => e.filter((e) => e.column.getIsVisible()),
                u(t.options, "debugRows"),
              )),
                (e.getVisibleCells = s(
                  () => [
                    e.getLeftVisibleCells(),
                    e.getCenterVisibleCells(),
                    e.getRightVisibleCells(),
                  ],
                  (e, t, n) => [...e, ...t, ...n],
                  u(t.options, "debugRows"),
                ));
            },
            createTable: (e) => {
              const t = (t, n) =>
                s(
                  () => [
                    n(),
                    n()
                      .filter((e) => e.getIsVisible())
                      .map((e) => e.id)
                      .join("_"),
                  ],
                  (e) =>
                    e.filter((e) =>
                      null == e.getIsVisible ? void 0 : e.getIsVisible(),
                    ),
                  u(e.options, "debugColumns"),
                );
              (e.getVisibleFlatColumns = t(0, () => e.getAllFlatColumns())),
                (e.getVisibleLeafColumns = t(0, () => e.getAllLeafColumns())),
                (e.getLeftVisibleLeafColumns = t(0, () =>
                  e.getLeftLeafColumns(),
                )),
                (e.getRightVisibleLeafColumns = t(0, () =>
                  e.getRightLeafColumns(),
                )),
                (e.getCenterVisibleLeafColumns = t(0, () =>
                  e.getCenterLeafColumns(),
                )),
                (e.setColumnVisibility = (t) =>
                  null == e.options.onColumnVisibilityChange
                    ? void 0
                    : e.options.onColumnVisibilityChange(t)),
                (e.resetColumnVisibility = (t) => {
                  var n;
                  e.setColumnVisibility(
                    t
                      ? {}
                      : null != (n = e.initialState.columnVisibility)
                        ? n
                        : {},
                  );
                }),
                (e.toggleAllColumnsVisible = (t) => {
                  var n;
                  (t = null != (n = t) ? n : !e.getIsAllColumnsVisible()),
                    e.setColumnVisibility(
                      e
                        .getAllLeafColumns()
                        .reduce(
                          (e, n) => ({
                            ...e,
                            [n.id]:
                              t || !(null != n.getCanHide && n.getCanHide()),
                          }),
                          {},
                        ),
                    );
                }),
                (e.getIsAllColumnsVisible = () =>
                  !e
                    .getAllLeafColumns()
                    .some(
                      (e) => !(null != e.getIsVisible && e.getIsVisible()),
                    )),
                (e.getIsSomeColumnsVisible = () =>
                  e
                    .getAllLeafColumns()
                    .some((e) =>
                      null == e.getIsVisible ? void 0 : e.getIsVisible(),
                    )),
                (e.getToggleAllColumnsVisibilityHandler = () => (t) => {
                  var n;
                  e.toggleAllColumnsVisible(
                    null == (n = t.target) ? void 0 : n.checked,
                  );
                });
            },
          },
          k,
          P,
          p,
          x,
          {
            createTable: (e) => {
              (e._getGlobalFacetedRowModel =
                e.options.getFacetedRowModel &&
                e.options.getFacetedRowModel(e, "__global__")),
                (e.getGlobalFacetedRowModel = () =>
                  e.options.manualFiltering || !e._getGlobalFacetedRowModel
                    ? e.getPreFilteredRowModel()
                    : e._getGlobalFacetedRowModel()),
                (e._getGlobalFacetedUniqueValues =
                  e.options.getFacetedUniqueValues &&
                  e.options.getFacetedUniqueValues(e, "__global__")),
                (e.getGlobalFacetedUniqueValues = () =>
                  e._getGlobalFacetedUniqueValues
                    ? e._getGlobalFacetedUniqueValues()
                    : new Map()),
                (e._getGlobalFacetedMinMaxValues =
                  e.options.getFacetedMinMaxValues &&
                  e.options.getFacetedMinMaxValues(e, "__global__")),
                (e.getGlobalFacetedMinMaxValues = () => {
                  if (e._getGlobalFacetedMinMaxValues)
                    return e._getGlobalFacetedMinMaxValues();
                });
            },
          },
          {
            getInitialState: (e) => ({ globalFilter: void 0, ...e }),
            getDefaultOptions: (e) => ({
              onGlobalFilterChange: i("globalFilter", e),
              globalFilterFn: "auto",
              getColumnCanGlobalFilter: (t) => {
                var n;
                const r =
                  null == (n = e.getCoreRowModel().flatRows[0]) ||
                  null == (n = n._getAllCellsByColumnId()[t.id])
                    ? void 0
                    : n.getValue();
                return "string" == typeof r || "number" == typeof r;
              },
            }),
            createColumn: (e, t) => {
              e.getCanGlobalFilter = () => {
                var n, r, o, i;
                return (
                  (null == (n = e.columnDef.enableGlobalFilter) || n) &&
                  (null == (r = t.options.enableGlobalFilter) || r) &&
                  (null == (o = t.options.enableFilters) || o) &&
                  (null ==
                    (i =
                      null == t.options.getColumnCanGlobalFilter
                        ? void 0
                        : t.options.getColumnCanGlobalFilter(e)) ||
                    i) &&
                  !!e.accessorFn
                );
              };
            },
            createTable: (e) => {
              (e.getGlobalAutoFilterFn = () => A.includesString),
                (e.getGlobalFilterFn = () => {
                  var t, n;
                  const { globalFilterFn: r } = e.options;
                  return l(r)
                    ? r
                    : "auto" === r
                      ? e.getGlobalAutoFilterFn()
                      : null !=
                          (t =
                            null == (n = e.options.filterFns) ? void 0 : n[r])
                        ? t
                        : A[r];
                }),
                (e.setGlobalFilter = (t) => {
                  null == e.options.onGlobalFilterChange ||
                    e.options.onGlobalFilterChange(t);
                }),
                (e.resetGlobalFilter = (t) => {
                  e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
                });
            },
          },
          {
            getInitialState: (e) => ({ sorting: [], ...e }),
            getDefaultColumnDef: () => ({
              sortingFn: "auto",
              sortUndefined: 1,
            }),
            getDefaultOptions: (e) => ({
              onSortingChange: i("sorting", e),
              isMultiSortEvent: (e) => e.shiftKey,
            }),
            createColumn: (e, t) => {
              (e.getAutoSortingFn = () => {
                const n = t.getFilteredRowModel().flatRows.slice(10);
                let r = !1;
                for (const t of n) {
                  const n = null == t ? void 0 : t.getValue(e.id);
                  if ("[object Date]" === Object.prototype.toString.call(n))
                    return U.datetime;
                  if ("string" == typeof n && ((r = !0), n.split(B).length > 1))
                    return U.alphanumeric;
                }
                return r ? U.text : U.basic;
              }),
                (e.getAutoSortDir = () => {
                  const n = t.getFilteredRowModel().flatRows[0];
                  return "string" ==
                    typeof (null == n ? void 0 : n.getValue(e.id))
                    ? "asc"
                    : "desc";
                }),
                (e.getSortingFn = () => {
                  var n, r;
                  if (!e) throw new Error();
                  return l(e.columnDef.sortingFn)
                    ? e.columnDef.sortingFn
                    : "auto" === e.columnDef.sortingFn
                      ? e.getAutoSortingFn()
                      : null !=
                          (n =
                            null == (r = t.options.sortingFns)
                              ? void 0
                              : r[e.columnDef.sortingFn])
                        ? n
                        : U[e.columnDef.sortingFn];
                }),
                (e.toggleSorting = (n, r) => {
                  const o = e.getNextSortingOrder(),
                    i = null != n;
                  t.setSorting((l) => {
                    const a = null == l ? void 0 : l.find((t) => t.id === e.id),
                      s =
                        null == l ? void 0 : l.findIndex((t) => t.id === e.id);
                    let u,
                      c = [],
                      d = i ? n : "desc" === o;
                    var f;
                    ((u =
                      null != l && l.length && e.getCanMultiSort() && r
                        ? a
                          ? "toggle"
                          : "add"
                        : null != l && l.length && s !== l.length - 1
                          ? "replace"
                          : a
                            ? "toggle"
                            : "replace"),
                    "toggle" === u && (i || o || (u = "remove")),
                    "add" === u)
                      ? ((c = [...l, { id: e.id, desc: d }]),
                        c.splice(
                          0,
                          c.length -
                            (null != (f = t.options.maxMultiSortColCount)
                              ? f
                              : Number.MAX_SAFE_INTEGER),
                        ))
                      : (c =
                          "toggle" === u
                            ? l.map((t) =>
                                t.id === e.id ? { ...t, desc: d } : t,
                              )
                            : "remove" === u
                              ? l.filter((t) => t.id !== e.id)
                              : [{ id: e.id, desc: d }]);
                    return c;
                  });
                }),
                (e.getFirstSortDir = () => {
                  var n, r;
                  return (
                    null !=
                    (n =
                      null != (r = e.columnDef.sortDescFirst)
                        ? r
                        : t.options.sortDescFirst)
                      ? n
                      : "desc" === e.getAutoSortDir()
                  )
                    ? "desc"
                    : "asc";
                }),
                (e.getNextSortingOrder = (n) => {
                  var r, o;
                  const i = e.getFirstSortDir(),
                    l = e.getIsSorted();
                  return l
                    ? !!(
                        l === i ||
                        (null != (r = t.options.enableSortingRemoval) && !r) ||
                        (n && null != (o = t.options.enableMultiRemove) && !o)
                      ) && ("desc" === l ? "asc" : "desc")
                    : i;
                }),
                (e.getCanSort = () => {
                  var n, r;
                  return (
                    (null == (n = e.columnDef.enableSorting) || n) &&
                    (null == (r = t.options.enableSorting) || r) &&
                    !!e.accessorFn
                  );
                }),
                (e.getCanMultiSort = () => {
                  var n, r;
                  return null !=
                    (n =
                      null != (r = e.columnDef.enableMultiSort)
                        ? r
                        : t.options.enableMultiSort)
                    ? n
                    : !!e.accessorFn;
                }),
                (e.getIsSorted = () => {
                  var n;
                  const r =
                    null == (n = t.getState().sorting)
                      ? void 0
                      : n.find((t) => t.id === e.id);
                  return !!r && (r.desc ? "desc" : "asc");
                }),
                (e.getSortIndex = () => {
                  var n, r;
                  return null !=
                    (n =
                      null == (r = t.getState().sorting)
                        ? void 0
                        : r.findIndex((t) => t.id === e.id))
                    ? n
                    : -1;
                }),
                (e.clearSorting = () => {
                  t.setSorting((t) =>
                    null != t && t.length ? t.filter((t) => t.id !== e.id) : [],
                  );
                }),
                (e.getToggleSortingHandler = () => {
                  const n = e.getCanSort();
                  return (r) => {
                    n &&
                      (null == r.persist || r.persist(),
                      null == e.toggleSorting ||
                        e.toggleSorting(
                          void 0,
                          !!e.getCanMultiSort() &&
                            (null == t.options.isMultiSortEvent
                              ? void 0
                              : t.options.isMultiSortEvent(r)),
                        ));
                  };
                });
            },
            createTable: (e) => {
              (e.setSorting = (t) =>
                null == e.options.onSortingChange
                  ? void 0
                  : e.options.onSortingChange(t)),
                (e.resetSorting = (t) => {
                  var n, r;
                  e.setSorting(
                    t
                      ? []
                      : null !=
                          (n =
                            null == (r = e.initialState) ? void 0 : r.sorting)
                        ? n
                        : [],
                  );
                }),
                (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
                (e.getSortedRowModel = () => (
                  !e._getSortedRowModel &&
                    e.options.getSortedRowModel &&
                    (e._getSortedRowModel = e.options.getSortedRowModel(e)),
                  e.options.manualSorting || !e._getSortedRowModel
                    ? e.getPreSortedRowModel()
                    : e._getSortedRowModel()
                ));
            },
          },
          _,
          {
            getInitialState: (e) => ({ expanded: {}, ...e }),
            getDefaultOptions: (e) => ({
              onExpandedChange: i("expanded", e),
              paginateExpandedRows: !0,
            }),
            createTable: (e) => {
              let t = !1,
                n = !1;
              (e._autoResetExpanded = () => {
                var r, o;
                if (t) {
                  if (
                    null !=
                    (r =
                      null != (o = e.options.autoResetAll)
                        ? o
                        : e.options.autoResetExpanded)
                      ? r
                      : !e.options.manualExpanding
                  ) {
                    if (n) return;
                    (n = !0),
                      e._queue(() => {
                        e.resetExpanded(), (n = !1);
                      });
                  }
                } else
                  e._queue(() => {
                    t = !0;
                  });
              }),
                (e.setExpanded = (t) =>
                  null == e.options.onExpandedChange
                    ? void 0
                    : e.options.onExpandedChange(t)),
                (e.toggleAllRowsExpanded = (t) => {
                  (null != t ? t : !e.getIsAllRowsExpanded())
                    ? e.setExpanded(!0)
                    : e.setExpanded({});
                }),
                (e.resetExpanded = (t) => {
                  var n, r;
                  e.setExpanded(
                    t
                      ? {}
                      : null !=
                          (n =
                            null == (r = e.initialState) ? void 0 : r.expanded)
                        ? n
                        : {},
                  );
                }),
                (e.getCanSomeRowsExpand = () =>
                  e
                    .getPrePaginationRowModel()
                    .flatRows.some((e) => e.getCanExpand())),
                (e.getToggleAllRowsExpandedHandler = () => (t) => {
                  null == t.persist || t.persist(), e.toggleAllRowsExpanded();
                }),
                (e.getIsSomeRowsExpanded = () => {
                  const t = e.getState().expanded;
                  return !0 === t || Object.values(t).some(Boolean);
                }),
                (e.getIsAllRowsExpanded = () => {
                  const t = e.getState().expanded;
                  return "boolean" == typeof t
                    ? !0 === t
                    : !!Object.keys(t).length &&
                        !e
                          .getRowModel()
                          .flatRows.some((e) => !e.getIsExpanded());
                }),
                (e.getExpandedDepth = () => {
                  let t = 0;
                  return (
                    (!0 === e.getState().expanded
                      ? Object.keys(e.getRowModel().rowsById)
                      : Object.keys(e.getState().expanded)
                    ).forEach((e) => {
                      const n = e.split(".");
                      t = Math.max(t, n.length);
                    }),
                    t
                  );
                }),
                (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
                (e.getExpandedRowModel = () => (
                  !e._getExpandedRowModel &&
                    e.options.getExpandedRowModel &&
                    (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
                  e.options.manualExpanding || !e._getExpandedRowModel
                    ? e.getPreExpandedRowModel()
                    : e._getExpandedRowModel()
                ));
            },
            createRow: (e, t) => {
              (e.toggleExpanded = (n) => {
                t.setExpanded((r) => {
                  var o;
                  const i = !0 === r || !(null == r || !r[e.id]);
                  let l = {};
                  if (
                    (!0 === r
                      ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
                          l[e] = !0;
                        })
                      : (l = r),
                    (n = null != (o = n) ? o : !i),
                    !i && n)
                  )
                    return { ...l, [e.id]: !0 };
                  if (i && !n) {
                    const { [e.id]: t, ...n } = l;
                    return n;
                  }
                  return r;
                });
              }),
                (e.getIsExpanded = () => {
                  var n;
                  const r = t.getState().expanded;
                  return !!(null !=
                  (n =
                    null == t.options.getIsRowExpanded
                      ? void 0
                      : t.options.getIsRowExpanded(e))
                    ? n
                    : !0 === r || (null == r ? void 0 : r[e.id]));
                }),
                (e.getCanExpand = () => {
                  var n, r, o;
                  return null !=
                    (n =
                      null == t.options.getRowCanExpand
                        ? void 0
                        : t.options.getRowCanExpand(e))
                    ? n
                    : (null == (r = t.options.enableExpanding) || r) &&
                        !(null == (o = e.subRows) || !o.length);
                }),
                (e.getIsAllParentsExpanded = () => {
                  let n = !0,
                    r = e;
                  for (; n && r.parentId; )
                    (r = t.getRow(r.parentId, !0)), (n = r.getIsExpanded());
                  return n;
                }),
                (e.getToggleExpandedHandler = () => {
                  const t = e.getCanExpand();
                  return () => {
                    t && e.toggleExpanded();
                  };
                });
            },
          },
          {
            getInitialState: (e) => ({
              ...e,
              pagination: {
                pageIndex: 0,
                pageSize: 10,
                ...(null == e ? void 0 : e.pagination),
              },
            }),
            getDefaultOptions: (e) => ({
              onPaginationChange: i("pagination", e),
            }),
            createTable: (e) => {
              let t = !1,
                n = !1;
              (e._autoResetPageIndex = () => {
                var r, o;
                if (t) {
                  if (
                    null !=
                    (r =
                      null != (o = e.options.autoResetAll)
                        ? o
                        : e.options.autoResetPageIndex)
                      ? r
                      : !e.options.manualPagination
                  ) {
                    if (n) return;
                    (n = !0),
                      e._queue(() => {
                        e.resetPageIndex(), (n = !1);
                      });
                  }
                } else
                  e._queue(() => {
                    t = !0;
                  });
              }),
                (e.setPagination = (t) =>
                  null == e.options.onPaginationChange
                    ? void 0
                    : e.options.onPaginationChange((e) => o(t, e))),
                (e.resetPagination = (t) => {
                  var n;
                  e.setPagination(
                    t
                      ? { pageIndex: 0, pageSize: 10 }
                      : null != (n = e.initialState.pagination)
                        ? n
                        : { pageIndex: 0, pageSize: 10 },
                  );
                }),
                (e.setPageIndex = (t) => {
                  e.setPagination((n) => {
                    let r = o(t, n.pageIndex);
                    const i =
                      void 0 === e.options.pageCount ||
                      -1 === e.options.pageCount
                        ? Number.MAX_SAFE_INTEGER
                        : e.options.pageCount - 1;
                    return (
                      (r = Math.max(0, Math.min(r, i))), { ...n, pageIndex: r }
                    );
                  });
                }),
                (e.resetPageIndex = (t) => {
                  var n, r;
                  e.setPageIndex(
                    t
                      ? 0
                      : null !=
                          (n =
                            null == (r = e.initialState) ||
                            null == (r = r.pagination)
                              ? void 0
                              : r.pageIndex)
                        ? n
                        : 0,
                  );
                }),
                (e.resetPageSize = (t) => {
                  var n, r;
                  e.setPageSize(
                    t
                      ? 10
                      : null !=
                          (n =
                            null == (r = e.initialState) ||
                            null == (r = r.pagination)
                              ? void 0
                              : r.pageSize)
                        ? n
                        : 10,
                  );
                }),
                (e.setPageSize = (t) => {
                  e.setPagination((e) => {
                    const n = Math.max(1, o(t, e.pageSize)),
                      r = e.pageSize * e.pageIndex,
                      i = Math.floor(r / n);
                    return { ...e, pageIndex: i, pageSize: n };
                  });
                }),
                (e.setPageCount = (t) =>
                  e.setPagination((n) => {
                    var r;
                    let i = o(t, null != (r = e.options.pageCount) ? r : -1);
                    return (
                      "number" == typeof i && (i = Math.max(-1, i)),
                      { ...n, pageCount: i }
                    );
                  })),
                (e.getPageOptions = s(
                  () => [e.getPageCount()],
                  (e) => {
                    let t = [];
                    return (
                      e &&
                        e > 0 &&
                        (t = [...new Array(e)].fill(null).map((e, t) => t)),
                      t
                    );
                  },
                  u(e.options, "debugTable"),
                )),
                (e.getCanPreviousPage = () =>
                  e.getState().pagination.pageIndex > 0),
                (e.getCanNextPage = () => {
                  const { pageIndex: t } = e.getState().pagination,
                    n = e.getPageCount();
                  return -1 === n || (0 !== n && t < n - 1);
                }),
                (e.previousPage = () => e.setPageIndex((e) => e - 1)),
                (e.nextPage = () => e.setPageIndex((e) => e + 1)),
                (e.firstPage = () => e.setPageIndex(0)),
                (e.lastPage = () => e.setPageIndex(e.getPageCount() - 1)),
                (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
                (e.getPaginationRowModel = () => (
                  !e._getPaginationRowModel &&
                    e.options.getPaginationRowModel &&
                    (e._getPaginationRowModel =
                      e.options.getPaginationRowModel(e)),
                  e.options.manualPagination || !e._getPaginationRowModel
                    ? e.getPrePaginationRowModel()
                    : e._getPaginationRowModel()
                )),
                (e.getPageCount = () => {
                  var t;
                  return null != (t = e.options.pageCount)
                    ? t
                    : Math.ceil(
                        e.getRowCount() / e.getState().pagination.pageSize,
                      );
                }),
                (e.getRowCount = () => {
                  var t;
                  return null != (t = e.options.rowCount)
                    ? t
                    : e.getPrePaginationRowModel().rows.length;
                });
            },
          },
          {
            getInitialState: (e) => ({
              rowPinning: { top: [], bottom: [] },
              ...e,
            }),
            getDefaultOptions: (e) => ({
              onRowPinningChange: i("rowPinning", e),
            }),
            createRow: (e, t) => {
              (e.pin = (n, r, o) => {
                const i = r
                    ? e.getLeafRows().map((e) => {
                        let { id: t } = e;
                        return t;
                      })
                    : [],
                  l = o
                    ? e.getParentRows().map((e) => {
                        let { id: t } = e;
                        return t;
                      })
                    : [],
                  a = new Set([...l, e.id, ...i]);
                t.setRowPinning((e) => {
                  var t, r, o, i, l, s;
                  return "bottom" === n
                    ? {
                        top: (null != (o = null == e ? void 0 : e.top)
                          ? o
                          : []
                        ).filter((e) => !(null != a && a.has(e))),
                        bottom: [
                          ...(null != (i = null == e ? void 0 : e.bottom)
                            ? i
                            : []
                          ).filter((e) => !(null != a && a.has(e))),
                          ...Array.from(a),
                        ],
                      }
                    : "top" === n
                      ? {
                          top: [
                            ...(null != (l = null == e ? void 0 : e.top)
                              ? l
                              : []
                            ).filter((e) => !(null != a && a.has(e))),
                            ...Array.from(a),
                          ],
                          bottom: (null != (s = null == e ? void 0 : e.bottom)
                            ? s
                            : []
                          ).filter((e) => !(null != a && a.has(e))),
                        }
                      : {
                          top: (null != (t = null == e ? void 0 : e.top)
                            ? t
                            : []
                          ).filter((e) => !(null != a && a.has(e))),
                          bottom: (null != (r = null == e ? void 0 : e.bottom)
                            ? r
                            : []
                          ).filter((e) => !(null != a && a.has(e))),
                        };
                });
              }),
                (e.getCanPin = () => {
                  var n;
                  const { enableRowPinning: r, enablePinning: o } = t.options;
                  return "function" == typeof r
                    ? r(e)
                    : null == (n = null != r ? r : o) || n;
                }),
                (e.getIsPinned = () => {
                  const n = [e.id],
                    { top: r, bottom: o } = t.getState().rowPinning,
                    i = n.some((e) => (null == r ? void 0 : r.includes(e))),
                    l = n.some((e) => (null == o ? void 0 : o.includes(e)));
                  return i ? "top" : !!l && "bottom";
                }),
                (e.getPinnedIndex = () => {
                  var n, r;
                  const o = e.getIsPinned();
                  if (!o) return -1;
                  const i =
                    null ==
                    (n = "top" === o ? t.getTopRows() : t.getBottomRows())
                      ? void 0
                      : n.map((e) => {
                          let { id: t } = e;
                          return t;
                        });
                  return null != (r = null == i ? void 0 : i.indexOf(e.id))
                    ? r
                    : -1;
                });
            },
            createTable: (e) => {
              (e.setRowPinning = (t) =>
                null == e.options.onRowPinningChange
                  ? void 0
                  : e.options.onRowPinningChange(t)),
                (e.resetRowPinning = (t) => {
                  var n, r;
                  return e.setRowPinning(
                    t
                      ? { top: [], bottom: [] }
                      : null !=
                          (n =
                            null == (r = e.initialState)
                              ? void 0
                              : r.rowPinning)
                        ? n
                        : { top: [], bottom: [] },
                  );
                }),
                (e.getIsSomeRowsPinned = (t) => {
                  var n;
                  const r = e.getState().rowPinning;
                  var o, i;
                  return t
                    ? Boolean(null == (n = r[t]) ? void 0 : n.length)
                    : Boolean(
                        (null == (o = r.top) ? void 0 : o.length) ||
                          (null == (i = r.bottom) ? void 0 : i.length),
                      );
                }),
                (e._getPinnedRows = (t, n, r) => {
                  var o;
                  return (
                    null == (o = e.options.keepPinnedRows) || o
                      ? (null != n ? n : []).map((t) => {
                          const n = e.getRow(t, !0);
                          return n.getIsAllParentsExpanded() ? n : null;
                        })
                      : (null != n ? n : []).map((e) =>
                          t.find((t) => t.id === e),
                        )
                  )
                    .filter(Boolean)
                    .map((e) => ({ ...e, position: r }));
                }),
                (e.getTopRows = s(
                  () => [e.getRowModel().rows, e.getState().rowPinning.top],
                  (t, n) => e._getPinnedRows(t, n, "top"),
                  u(e.options, "debugRows"),
                )),
                (e.getBottomRows = s(
                  () => [e.getRowModel().rows, e.getState().rowPinning.bottom],
                  (t, n) => e._getPinnedRows(t, n, "bottom"),
                  u(e.options, "debugRows"),
                )),
                (e.getCenterRows = s(
                  () => [
                    e.getRowModel().rows,
                    e.getState().rowPinning.top,
                    e.getState().rowPinning.bottom,
                  ],
                  (e, t, n) => {
                    const r = new Set([
                      ...(null != t ? t : []),
                      ...(null != n ? n : []),
                    ]);
                    return e.filter((e) => !r.has(e.id));
                  },
                  u(e.options, "debugRows"),
                ));
            },
          },
          V,
          I,
        ];
      function K(e) {
        var t, n;
        const r = [...$, ...(null != (t = e._features) ? t : [])];
        let i = { _features: r };
        const l = i._features.reduce(
          (e, t) =>
            Object.assign(
              e,
              null == t.getDefaultOptions ? void 0 : t.getDefaultOptions(i),
            ),
          {},
        );
        let a = { ...(null != (n = e.initialState) ? n : {}) };
        i._features.forEach((e) => {
          var t;
          a =
            null !=
            (t = null == e.getInitialState ? void 0 : e.getInitialState(a))
              ? t
              : a;
        });
        const c = [];
        let d = !1;
        const f = {
          _features: r,
          options: { ...l, ...e },
          initialState: a,
          _queue: (e) => {
            c.push(e),
              d ||
                ((d = !0),
                Promise.resolve()
                  .then(() => {
                    for (; c.length; ) c.shift()();
                    d = !1;
                  })
                  .catch((e) =>
                    setTimeout(() => {
                      throw e;
                    }),
                  ));
          },
          reset: () => {
            i.setState(i.initialState);
          },
          setOptions: (e) => {
            const t = o(e, i.options);
            i.options = ((e) =>
              i.options.mergeOptions
                ? i.options.mergeOptions(l, e)
                : { ...l, ...e })(t);
          },
          getState: () => i.options.state,
          setState: (e) => {
            null == i.options.onStateChange || i.options.onStateChange(e);
          },
          _getRowId: (e, t, n) => {
            var r;
            return null !=
              (r =
                null == i.options.getRowId
                  ? void 0
                  : i.options.getRowId(e, t, n))
              ? r
              : `${n ? [n.id, t].join(".") : t}`;
          },
          getCoreRowModel: () => (
            i._getCoreRowModel ||
              (i._getCoreRowModel = i.options.getCoreRowModel(i)),
            i._getCoreRowModel()
          ),
          getRowModel: () => i.getPaginationRowModel(),
          getRow: (e, t) => {
            let n = (t ? i.getPrePaginationRowModel() : i.getRowModel())
              .rowsById[e];
            if (!n && ((n = i.getCoreRowModel().rowsById[e]), !n))
              throw new Error();
            return n;
          },
          _getDefaultColumnDef: s(
            () => [i.options.defaultColumn],
            (e) => {
              var t;
              return (
                (e = null != (t = e) ? t : {}),
                {
                  header: (e) => {
                    const t = e.header.column.columnDef;
                    return t.accessorKey
                      ? t.accessorKey
                      : t.accessorFn
                        ? t.id
                        : null;
                  },
                  cell: (e) => {
                    var t, n;
                    return null !=
                      (t =
                        null == (n = e.renderValue()) || null == n.toString
                          ? void 0
                          : n.toString())
                      ? t
                      : null;
                  },
                  ...i._features.reduce(
                    (e, t) =>
                      Object.assign(
                        e,
                        null == t.getDefaultColumnDef
                          ? void 0
                          : t.getDefaultColumnDef(),
                      ),
                    {},
                  ),
                  ...e,
                }
              );
            },
            u(e, "debugColumns"),
          ),
          _getColumnDefs: () => i.options.columns,
          getAllColumns: s(
            () => [i._getColumnDefs()],
            (e) => {
              const t = function (e, n, r) {
                return (
                  void 0 === r && (r = 0),
                  e.map((e) => {
                    const o = (function (e, t, n, r) {
                        var o, i;
                        const l = { ...e._getDefaultColumnDef(), ...t },
                          a = l.accessorKey;
                        let c,
                          d =
                            null !=
                            (o =
                              null != (i = l.id)
                                ? i
                                : a
                                  ? "function" ==
                                    typeof String.prototype.replaceAll
                                    ? a.replaceAll(".", "_")
                                    : a.replace(/\./g, "_")
                                  : void 0)
                              ? o
                              : "string" == typeof l.header
                                ? l.header
                                : void 0;
                        if (
                          (l.accessorFn
                            ? (c = l.accessorFn)
                            : a &&
                              (c = a.includes(".")
                                ? (e) => {
                                    let t = e;
                                    for (const e of a.split(".")) {
                                      var n;
                                      t = null == (n = t) ? void 0 : n[e];
                                    }
                                    return t;
                                  }
                                : (e) => e[l.accessorKey]),
                          !d)
                        )
                          throw new Error();
                        let f = {
                          id: `${String(d)}`,
                          accessorFn: c,
                          parent: r,
                          depth: n,
                          columnDef: l,
                          columns: [],
                          getFlatColumns: s(
                            () => [!0],
                            () => {
                              var e;
                              return [
                                f,
                                ...(null == (e = f.columns)
                                  ? void 0
                                  : e.flatMap((e) => e.getFlatColumns())),
                              ];
                            },
                            u(e.options, "debugColumns"),
                          ),
                          getLeafColumns: s(
                            () => [e._getOrderColumnsFn()],
                            (e) => {
                              var t;
                              if (null != (t = f.columns) && t.length) {
                                let t = f.columns.flatMap((e) =>
                                  e.getLeafColumns(),
                                );
                                return e(t);
                              }
                              return [f];
                            },
                            u(e.options, "debugColumns"),
                          ),
                        };
                        for (const t of e._features)
                          null == t.createColumn || t.createColumn(f, e);
                        return f;
                      })(i, e, r, n),
                      l = e;
                    return (
                      (o.columns = l.columns ? t(l.columns, o, r + 1) : []), o
                    );
                  })
                );
              };
              return t(e);
            },
            u(e, "debugColumns"),
          ),
          getAllFlatColumns: s(
            () => [i.getAllColumns()],
            (e) => e.flatMap((e) => e.getFlatColumns()),
            u(e, "debugColumns"),
          ),
          _getAllFlatColumnsById: s(
            () => [i.getAllFlatColumns()],
            (e) => e.reduce((e, t) => ((e[t.id] = t), e), {}),
            u(e, "debugColumns"),
          ),
          getAllLeafColumns: s(
            () => [i.getAllColumns(), i._getOrderColumnsFn()],
            (e, t) => t(e.flatMap((e) => e.getLeafColumns())),
            u(e, "debugColumns"),
          ),
          getColumn: (e) => i._getAllFlatColumnsById()[e],
        };
        Object.assign(i, f);
        for (let e = 0; e < i._features.length; e++) {
          const t = i._features[e];
          null == t || null == t.createTable || t.createTable(i);
        }
        return i;
      }
      function X() {
        return (e) =>
          s(
            () => [e.options.data],
            (t) => {
              const n = { rows: [], flatRows: [], rowsById: {} },
                r = function (t, o, i) {
                  void 0 === o && (o = 0);
                  const l = [];
                  for (let s = 0; s < t.length; s++) {
                    const u = h(
                      e,
                      e._getRowId(t[s], s, i),
                      t[s],
                      s,
                      o,
                      void 0,
                      null == i ? void 0 : i.id,
                    );
                    var a;
                    if (
                      (n.flatRows.push(u),
                      (n.rowsById[u.id] = u),
                      l.push(u),
                      e.options.getSubRows)
                    )
                      (u.originalSubRows = e.options.getSubRows(t[s], s)),
                        null != (a = u.originalSubRows) &&
                          a.length &&
                          (u.subRows = r(u.originalSubRows, o + 1, u));
                  }
                  return l;
                };
              return (n.rows = r(t)), n;
            },
            u(e.options, "debugTable", 0, () => e._autoResetPageIndex()),
          );
      }
      function Z(e, t, n) {
        return n.options.filterFromLeafRows
          ? (function (e, t, n) {
              var r;
              const o = [],
                i = {},
                l = null != (r = n.options.maxLeafRowFilterDepth) ? r : 100,
                a = function (e, r) {
                  void 0 === r && (r = 0);
                  const s = [];
                  for (let c = 0; c < e.length; c++) {
                    var u;
                    let d = e[c];
                    const f = h(
                      n,
                      d.id,
                      d.original,
                      d.index,
                      d.depth,
                      void 0,
                      d.parentId,
                    );
                    if (
                      ((f.columnFilters = d.columnFilters),
                      null != (u = d.subRows) && u.length && r < l)
                    ) {
                      if (
                        ((f.subRows = a(d.subRows, r + 1)),
                        (d = f),
                        t(d) && !f.subRows.length)
                      ) {
                        s.push(d), (i[d.id] = d), o.push(d);
                        continue;
                      }
                      if (t(d) || f.subRows.length) {
                        s.push(d), (i[d.id] = d), o.push(d);
                        continue;
                      }
                    } else
                      (d = f), t(d) && (s.push(d), (i[d.id] = d), o.push(d));
                  }
                  return s;
                };
              return { rows: a(e), flatRows: o, rowsById: i };
            })(e, t, n)
          : (function (e, t, n) {
              var r;
              const o = [],
                i = {},
                l = null != (r = n.options.maxLeafRowFilterDepth) ? r : 100,
                a = function (e, r) {
                  void 0 === r && (r = 0);
                  const s = [];
                  for (let c = 0; c < e.length; c++) {
                    let d = e[c];
                    if (t(d)) {
                      var u;
                      if (null != (u = d.subRows) && u.length && r < l) {
                        const e = h(
                          n,
                          d.id,
                          d.original,
                          d.index,
                          d.depth,
                          void 0,
                          d.parentId,
                        );
                        (e.subRows = a(d.subRows, r + 1)), (d = e);
                      }
                      s.push(d), o.push(d), (i[d.id] = d);
                    }
                  }
                  return s;
                };
              return { rows: a(e), flatRows: o, rowsById: i };
            })(e, t, n);
      }
      function J() {
        return (e) =>
          s(
            () => [
              e.getPreFilteredRowModel(),
              e.getState().columnFilters,
              e.getState().globalFilter,
            ],
            (t, n, r) => {
              if (!t.rows.length || ((null == n || !n.length) && !r)) {
                for (let e = 0; e < t.flatRows.length; e++)
                  (t.flatRows[e].columnFilters = {}),
                    (t.flatRows[e].columnFiltersMeta = {});
                return t;
              }
              const o = [],
                i = [];
              (null != n ? n : []).forEach((t) => {
                var n;
                const r = e.getColumn(t.id);
                if (!r) return;
                const i = r.getFilterFn();
                i &&
                  o.push({
                    id: t.id,
                    filterFn: i,
                    resolvedValue:
                      null !=
                      (n =
                        null == i.resolveFilterValue
                          ? void 0
                          : i.resolveFilterValue(t.value))
                        ? n
                        : t.value,
                  });
              });
              const l = (null != n ? n : []).map((e) => e.id),
                a = e.getGlobalFilterFn(),
                s = e.getAllLeafColumns().filter((e) => e.getCanGlobalFilter());
              let u, c;
              r &&
                a &&
                s.length &&
                (l.push("__global__"),
                s.forEach((e) => {
                  var t;
                  i.push({
                    id: e.id,
                    filterFn: a,
                    resolvedValue:
                      null !=
                      (t =
                        null == a.resolveFilterValue
                          ? void 0
                          : a.resolveFilterValue(r))
                        ? t
                        : r,
                  });
                }));
              for (let e = 0; e < t.flatRows.length; e++) {
                const n = t.flatRows[e];
                if (((n.columnFilters = {}), o.length))
                  for (let e = 0; e < o.length; e++) {
                    u = o[e];
                    const t = u.id;
                    n.columnFilters[t] = u.filterFn(
                      n,
                      t,
                      u.resolvedValue,
                      (e) => {
                        n.columnFiltersMeta[t] = e;
                      },
                    );
                  }
                if (i.length) {
                  for (let e = 0; e < i.length; e++) {
                    c = i[e];
                    const t = c.id;
                    if (
                      c.filterFn(n, t, c.resolvedValue, (e) => {
                        n.columnFiltersMeta[t] = e;
                      })
                    ) {
                      n.columnFilters.__global__ = !0;
                      break;
                    }
                  }
                  !0 !== n.columnFilters.__global__ &&
                    (n.columnFilters.__global__ = !1);
                }
              }
              return Z(
                t.rows,
                (e) => {
                  for (let t = 0; t < l.length; t++)
                    if (!1 === e.columnFilters[l[t]]) return !1;
                  return !0;
                },
                e,
              );
            },
            u(e.options, "debugTable", 0, () => e._autoResetPageIndex()),
          );
      }
      function Q() {
        return (e) =>
          s(
            () => [e.getState().grouping, e.getPreGroupedRowModel()],
            (t, n) => {
              if (!n.rows.length || !t.length)
                return (
                  n.rows.forEach((e) => {
                    (e.depth = 0), (e.parentId = void 0);
                  }),
                  n
                );
              const r = t.filter((t) => e.getColumn(t)),
                o = [],
                i = {},
                l = function (t, n, s) {
                  if ((void 0 === n && (n = 0), n >= r.length))
                    return t.map(
                      (e) => (
                        (e.depth = n),
                        o.push(e),
                        (i[e.id] = e),
                        e.subRows && (e.subRows = l(e.subRows, n + 1, e.id)),
                        e
                      ),
                    );
                  const u = r[n],
                    c = (function (e, t) {
                      const n = new Map();
                      return e.reduce((e, n) => {
                        const r = `${n.getGroupingValue(t)}`,
                          o = e.get(r);
                        return o ? o.push(n) : e.set(r, [n]), e;
                      }, n);
                    })(t, u),
                    d = Array.from(c.entries()).map((t, c) => {
                      let [d, f] = t,
                        g = `${u}:${d}`;
                      g = s ? `${s}>${g}` : g;
                      const p = l(f, n + 1, g);
                      p.forEach((e) => {
                        e.parentId = g;
                      });
                      const m = n ? a(f, (e) => e.subRows) : f,
                        v = h(e, g, m[0].original, c, n, void 0, s);
                      return (
                        Object.assign(v, {
                          groupingColumnId: u,
                          groupingValue: d,
                          subRows: p,
                          leafRows: m,
                          getValue: (t) => {
                            if (r.includes(t)) {
                              if (v._valuesCache.hasOwnProperty(t))
                                return v._valuesCache[t];
                              var n;
                              if (f[0])
                                v._valuesCache[t] =
                                  null != (n = f[0].getValue(t)) ? n : void 0;
                              return v._valuesCache[t];
                            }
                            if (v._groupingValuesCache.hasOwnProperty(t))
                              return v._groupingValuesCache[t];
                            const o = e.getColumn(t),
                              i = null == o ? void 0 : o.getAggregationFn();
                            return i
                              ? ((v._groupingValuesCache[t] = i(t, m, f)),
                                v._groupingValuesCache[t])
                              : void 0;
                          },
                        }),
                        p.forEach((e) => {
                          o.push(e), (i[e.id] = e);
                        }),
                        v
                      );
                    });
                  return d;
                },
                s = l(n.rows, 0);
              return (
                s.forEach((e) => {
                  o.push(e), (i[e.id] = e);
                }),
                { rows: s, flatRows: o, rowsById: i }
              );
            },
            u(e.options, "debugTable", 0, () => {
              e._queue(() => {
                e._autoResetExpanded(), e._autoResetPageIndex();
              });
            }),
          );
      }
      function ee() {
        return (e) =>
          s(
            () => [e.getState().sorting, e.getPreSortedRowModel()],
            (t, n) => {
              if (!n.rows.length || null == t || !t.length) return n;
              const r = e.getState().sorting,
                o = [],
                i = r.filter((t) => {
                  var n;
                  return null == (n = e.getColumn(t.id))
                    ? void 0
                    : n.getCanSort();
                }),
                l = {};
              i.forEach((t) => {
                const n = e.getColumn(t.id);
                n &&
                  (l[t.id] = {
                    sortUndefined: n.columnDef.sortUndefined,
                    invertSorting: n.columnDef.invertSorting,
                    sortingFn: n.getSortingFn(),
                  });
              });
              const a = (e) => {
                const t = e.map((e) => ({ ...e }));
                return (
                  t.sort((e, t) => {
                    for (let r = 0; r < i.length; r += 1) {
                      var n;
                      const o = i[r],
                        a = l[o.id],
                        s = a.sortUndefined,
                        u = null != (n = null == o ? void 0 : o.desc) && n;
                      let c = 0;
                      if (s) {
                        const n = void 0 === e.getValue(o.id),
                          r = void 0 === t.getValue(o.id);
                        if (n || r) {
                          if ("first" === s) return n ? -1 : 1;
                          if ("last" === s) return n ? 1 : -1;
                          c = n && r ? 0 : n ? s : -s;
                        }
                      }
                      if ((0 === c && (c = a.sortingFn(e, t, o.id)), 0 !== c))
                        return u && (c *= -1), a.invertSorting && (c *= -1), c;
                    }
                    return e.index - t.index;
                  }),
                  t.forEach((e) => {
                    var t;
                    o.push(e),
                      null != (t = e.subRows) &&
                        t.length &&
                        (e.subRows = a(e.subRows));
                  }),
                  t
                );
              };
              return { rows: a(n.rows), flatRows: o, rowsById: n.rowsById };
            },
            u(e.options, "debugTable", 0, () => e._autoResetPageIndex()),
          );
      }
    },
    88268: (e, t, n) => {
      "use strict";
      n.d(t, { Te: () => R, XW: () => E });
      var r = n(90626),
        o = n(72739);
      function i(e, t, n) {
        let r,
          o = n.initialDeps ?? [];
        return () => {
          var i, l, a, s;
          let u;
          n.key &&
            (null == (i = n.debug) ? void 0 : i.call(n)) &&
            (u = Date.now());
          const c = e();
          if (!(c.length !== o.length || c.some((e, t) => o[t] !== e)))
            return r;
          let d;
          if (
            ((o = c),
            n.key &&
              (null == (l = n.debug) ? void 0 : l.call(n)) &&
              (d = Date.now()),
            (r = t(...c)),
            n.key && (null == (a = n.debug) ? void 0 : a.call(n)))
          ) {
            const e = Math.round(100 * (Date.now() - u)) / 100,
              t = Math.round(100 * (Date.now() - d)) / 100,
              r = t / 16,
              o = (e, t) => {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              `%c⏱ ${o(t, 5)} /${o(e, 5)} ms`,
              `\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`,
              null == n ? void 0 : n.key,
            );
          }
          return (
            null == (s = null == n ? void 0 : n.onChange) || s.call(n, r), r
          );
        };
      }
      function l(e, t) {
        if (void 0 === e)
          throw new Error("Unexpected undefined" + (t ? `: ${t}` : ""));
        return e;
      }
      const a = (e, t, n) => {
          let r;
          return function (...o) {
            e.clearTimeout(r), (r = e.setTimeout(() => t.apply(this, o), n));
          };
        },
        s = (e) => e,
        u = (e) => {
          const t = Math.max(e.startIndex - e.overscan, 0),
            n = Math.min(e.endIndex + e.overscan, e.count - 1),
            r = [];
          for (let e = t; e <= n; e++) r.push(e);
          return r;
        },
        c = (e, t) => {
          const n = e.scrollElement;
          if (!n) return;
          const r = e.targetWindow;
          if (!r) return;
          const o = (e) => {
            const { width: n, height: r } = e;
            t({ width: Math.round(n), height: Math.round(r) });
          };
          if ((o(n.getBoundingClientRect()), !r.ResizeObserver))
            return () => {};
          const i = new r.ResizeObserver((e) => {
            const t = e[0];
            if (null == t ? void 0 : t.borderBoxSize) {
              const e = t.borderBoxSize[0];
              if (e)
                return void o({ width: e.inlineSize, height: e.blockSize });
            }
            o(n.getBoundingClientRect());
          });
          return (
            i.observe(n, { box: "border-box" }),
            () => {
              i.unobserve(n);
            }
          );
        },
        d = { passive: !0 },
        f = (e, t) => {
          const n = e.scrollElement;
          if (!n) return;
          const r = () => {
            t({ width: n.innerWidth, height: n.innerHeight });
          };
          return (
            r(),
            n.addEventListener("resize", r, d),
            () => {
              n.removeEventListener("resize", r);
            }
          );
        },
        g = "undefined" == typeof window || "onscrollend" in window,
        h = (e, t) => {
          const n = e.scrollElement;
          if (!n) return;
          const r = e.targetWindow;
          if (!r) return;
          let o = 0;
          const i = g
              ? () => {}
              : a(
                  r,
                  () => {
                    t(o, !1);
                  },
                  e.options.isScrollingResetDelay,
                ),
            l = (r) => () => {
              const { horizontal: l, isRtl: a } = e.options;
              (o = l ? n.scrollLeft * (a ? -1 : 1) : n.scrollTop), i(), t(o, r);
            },
            s = l(!0),
            u = l(!1);
          return (
            u(),
            n.addEventListener("scroll", s, d),
            n.addEventListener("scrollend", u, d),
            () => {
              n.removeEventListener("scroll", s),
                n.removeEventListener("scrollend", u);
            }
          );
        },
        p = (e, t) => {
          const n = e.scrollElement;
          if (!n) return;
          const r = e.targetWindow;
          if (!r) return;
          let o = 0;
          const i = g
              ? () => {}
              : a(
                  r,
                  () => {
                    t(o, !1);
                  },
                  e.options.isScrollingResetDelay,
                ),
            l = (r) => () => {
              (o = n[e.options.horizontal ? "scrollX" : "scrollY"]),
                i(),
                t(o, r);
            },
            s = l(!0),
            u = l(!1);
          return (
            u(),
            n.addEventListener("scroll", s, d),
            n.addEventListener("scrollend", u, d),
            () => {
              n.removeEventListener("scroll", s),
                n.removeEventListener("scrollend", u);
            }
          );
        },
        m = (e, t, n) => {
          if (null == t ? void 0 : t.borderBoxSize) {
            const e = t.borderBoxSize[0];
            if (e) {
              return Math.round(
                e[n.options.horizontal ? "inlineSize" : "blockSize"],
              );
            }
          }
          return Math.round(
            e.getBoundingClientRect()[
              n.options.horizontal ? "width" : "height"
            ],
          );
        },
        v = (e, { adjustments: t = 0, behavior: n }, r) => {
          var o, i;
          const l = e + t;
          null == (i = null == (o = r.scrollElement) ? void 0 : o.scrollTo) ||
            i.call(o, {
              [r.options.horizontal ? "left" : "top"]: l,
              behavior: n,
            });
        },
        b = (e, { adjustments: t = 0, behavior: n }, r) => {
          var o, i;
          const l = e + t;
          null == (i = null == (o = r.scrollElement) ? void 0 : o.scrollTo) ||
            i.call(o, {
              [r.options.horizontal ? "left" : "top"]: l,
              behavior: n,
            });
        };
      class w {
        constructor(e) {
          (this.unsubs = []),
            (this.scrollElement = null),
            (this.targetWindow = null),
            (this.isScrolling = !1),
            (this.scrollToIndexTimeoutId = null),
            (this.measurementsCache = []),
            (this.itemSizeCache = new Map()),
            (this.pendingMeasuredCacheIndexes = []),
            (this.scrollRect = null),
            (this.scrollOffset = null),
            (this.scrollDirection = null),
            (this.scrollAdjustments = 0),
            (this.elementsCache = new Map()),
            (this.observer = (() => {
              let e = null;
              const t = () =>
                e ||
                (this.targetWindow && this.targetWindow.ResizeObserver
                  ? (e = new this.targetWindow.ResizeObserver((e) => {
                      e.forEach((e) => {
                        this._measureElement(e.target, e);
                      });
                    }))
                  : null);
              return {
                disconnect: () => {
                  var e;
                  return null == (e = t()) ? void 0 : e.disconnect();
                },
                observe: (e) => {
                  var n;
                  return null == (n = t())
                    ? void 0
                    : n.observe(e, { box: "border-box" });
                },
                unobserve: (e) => {
                  var n;
                  return null == (n = t()) ? void 0 : n.unobserve(e);
                },
              };
            })()),
            (this.range = null),
            (this.setOptions = (e) => {
              Object.entries(e).forEach(([t, n]) => {
                void 0 === n && delete e[t];
              }),
                (this.options = {
                  debug: !1,
                  initialOffset: 0,
                  overscan: 1,
                  paddingStart: 0,
                  paddingEnd: 0,
                  scrollPaddingStart: 0,
                  scrollPaddingEnd: 0,
                  horizontal: !1,
                  getItemKey: s,
                  rangeExtractor: u,
                  onChange: () => {},
                  measureElement: m,
                  initialRect: { width: 0, height: 0 },
                  scrollMargin: 0,
                  gap: 0,
                  indexAttribute: "data-index",
                  initialMeasurementsCache: [],
                  lanes: 1,
                  isScrollingResetDelay: 150,
                  enabled: !0,
                  isRtl: !1,
                  ...e,
                });
            }),
            (this.notify = (e) => {
              var t, n;
              null == (n = (t = this.options).onChange) || n.call(t, this, e);
            }),
            (this.maybeNotify = i(
              () => (
                this.calculateRange(),
                [
                  this.isScrolling,
                  this.range ? this.range.startIndex : null,
                  this.range ? this.range.endIndex : null,
                ]
              ),
              (e) => {
                this.notify(e);
              },
              {
                key: !1,
                debug: () => this.options.debug,
                initialDeps: [
                  this.isScrolling,
                  this.range ? this.range.startIndex : null,
                  this.range ? this.range.endIndex : null,
                ],
              },
            )),
            (this.cleanup = () => {
              this.unsubs.filter(Boolean).forEach((e) => e()),
                (this.unsubs = []),
                (this.scrollElement = null),
                (this.targetWindow = null),
                this.observer.disconnect(),
                this.elementsCache.clear();
            }),
            (this._didMount = () => () => {
              this.cleanup();
            }),
            (this._willUpdate = () => {
              var e;
              const t = this.options.enabled
                ? this.options.getScrollElement()
                : null;
              if (this.scrollElement !== t) {
                if ((this.cleanup(), !t)) return void this.maybeNotify();
                (this.scrollElement = t),
                  this.scrollElement && "ownerDocument" in this.scrollElement
                    ? (this.targetWindow =
                        this.scrollElement.ownerDocument.defaultView)
                    : (this.targetWindow =
                        (null == (e = this.scrollElement)
                          ? void 0
                          : e.window) ?? null),
                  this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: void 0,
                    behavior: void 0,
                  }),
                  this.unsubs.push(
                    this.options.observeElementRect(this, (e) => {
                      (this.scrollRect = e), this.maybeNotify();
                    }),
                  ),
                  this.unsubs.push(
                    this.options.observeElementOffset(this, (e, t) => {
                      (this.scrollAdjustments = 0),
                        (this.scrollDirection = t
                          ? this.getScrollOffset() < e
                            ? "forward"
                            : "backward"
                          : null),
                        (this.scrollOffset = e),
                        (this.isScrolling = t),
                        this.maybeNotify();
                    }),
                  );
              }
            }),
            (this.getSize = () =>
              this.options.enabled
                ? ((this.scrollRect =
                    this.scrollRect ?? this.options.initialRect),
                  this.scrollRect[this.options.horizontal ? "width" : "height"])
                : ((this.scrollRect = null), 0)),
            (this.getScrollOffset = () =>
              this.options.enabled
                ? ((this.scrollOffset =
                    this.scrollOffset ??
                    ("function" == typeof this.options.initialOffset
                      ? this.options.initialOffset()
                      : this.options.initialOffset)),
                  this.scrollOffset)
                : ((this.scrollOffset = null), 0)),
            (this.getFurthestMeasurement = (e, t) => {
              const n = new Map(),
                r = new Map();
              for (let o = t - 1; o >= 0; o--) {
                const t = e[o];
                if (n.has(t.lane)) continue;
                const i = r.get(t.lane);
                if (
                  (null == i || t.end > i.end
                    ? r.set(t.lane, t)
                    : t.end < i.end && n.set(t.lane, !0),
                  n.size === this.options.lanes)
                )
                  break;
              }
              return r.size === this.options.lanes
                ? Array.from(r.values()).sort((e, t) =>
                    e.end === t.end ? e.index - t.index : e.end - t.end,
                  )[0]
                : void 0;
            }),
            (this.getMeasurementOptions = i(
              () => [
                this.options.count,
                this.options.paddingStart,
                this.options.scrollMargin,
                this.options.getItemKey,
                this.options.enabled,
              ],
              (e, t, n, r, o) => (
                (this.pendingMeasuredCacheIndexes = []),
                {
                  count: e,
                  paddingStart: t,
                  scrollMargin: n,
                  getItemKey: r,
                  enabled: o,
                }
              ),
              { key: !1 },
            )),
            (this.getMeasurements = i(
              () => [this.getMeasurementOptions(), this.itemSizeCache],
              (
                {
                  count: e,
                  paddingStart: t,
                  scrollMargin: n,
                  getItemKey: r,
                  enabled: o,
                },
                i,
              ) => {
                if (!o)
                  return (
                    (this.measurementsCache = []),
                    this.itemSizeCache.clear(),
                    []
                  );
                0 === this.measurementsCache.length &&
                  ((this.measurementsCache =
                    this.options.initialMeasurementsCache),
                  this.measurementsCache.forEach((e) => {
                    this.itemSizeCache.set(e.key, e.size);
                  }));
                const l =
                  this.pendingMeasuredCacheIndexes.length > 0
                    ? Math.min(...this.pendingMeasuredCacheIndexes)
                    : 0;
                this.pendingMeasuredCacheIndexes = [];
                const a = this.measurementsCache.slice(0, l);
                for (let o = l; o < e; o++) {
                  const e = r(o),
                    l =
                      1 === this.options.lanes
                        ? a[o - 1]
                        : this.getFurthestMeasurement(a, o),
                    s = l ? l.end + this.options.gap : t + n,
                    u = i.get(e),
                    c = "number" == typeof u ? u : this.options.estimateSize(o),
                    d = s + c,
                    f = l ? l.lane : o % this.options.lanes;
                  a[o] = {
                    index: o,
                    start: s,
                    size: c,
                    end: d,
                    key: e,
                    lane: f,
                  };
                }
                return (this.measurementsCache = a), a;
              },
              { key: !1, debug: () => this.options.debug },
            )),
            (this.calculateRange = i(
              () => [
                this.getMeasurements(),
                this.getSize(),
                this.getScrollOffset(),
              ],
              (e, t, n) =>
                (this.range =
                  e.length > 0 && t > 0
                    ? (function ({
                        measurements: e,
                        outerSize: t,
                        scrollOffset: n,
                      }) {
                        const r = e.length - 1,
                          o = (t) => e[t].start,
                          i = y(0, r, o, n);
                        let l = i;
                        for (; l < r && e[l].end < n + t; ) l++;
                        return { startIndex: i, endIndex: l };
                      })({ measurements: e, outerSize: t, scrollOffset: n })
                    : null),
              { key: !1, debug: () => this.options.debug },
            )),
            (this.getIndexes = i(
              () => [
                this.options.rangeExtractor,
                this.calculateRange(),
                this.options.overscan,
                this.options.count,
              ],
              (e, t, n, r) =>
                null === t
                  ? []
                  : e({
                      startIndex: t.startIndex,
                      endIndex: t.endIndex,
                      overscan: n,
                      count: r,
                    }),
              { key: !1, debug: () => this.options.debug },
            )),
            (this.indexFromElement = (e) => {
              const t = this.options.indexAttribute,
                n = e.getAttribute(t);
              return n
                ? parseInt(n, 10)
                : (console.warn(
                    `Missing attribute name '${t}={index}' on measured element.`,
                  ),
                  -1);
            }),
            (this._measureElement = (e, t) => {
              const n = this.indexFromElement(e),
                r = this.measurementsCache[n];
              if (!r) return;
              const o = r.key,
                i = this.elementsCache.get(o);
              i !== e &&
                (i && this.observer.unobserve(i),
                this.observer.observe(e),
                this.elementsCache.set(o, e)),
                e.isConnected &&
                  this.resizeItem(n, this.options.measureElement(e, t, this));
            }),
            (this.resizeItem = (e, t) => {
              const n = this.measurementsCache[e];
              if (!n) return;
              const r = t - (this.itemSizeCache.get(n.key) ?? n.size);
              0 !== r &&
                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                  ? this.shouldAdjustScrollPositionOnItemSizeChange(n, r, this)
                  : n.start <
                    this.getScrollOffset() + this.scrollAdjustments) &&
                  this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: (this.scrollAdjustments += r),
                    behavior: void 0,
                  }),
                this.pendingMeasuredCacheIndexes.push(n.index),
                (this.itemSizeCache = new Map(
                  this.itemSizeCache.set(n.key, t),
                )),
                this.notify(!1));
            }),
            (this.measureElement = (e) => {
              e
                ? this._measureElement(e, void 0)
                : this.elementsCache.forEach((e, t) => {
                    e.isConnected ||
                      (this.observer.unobserve(e),
                      this.elementsCache.delete(t));
                  });
            }),
            (this.getVirtualItems = i(
              () => [this.getIndexes(), this.getMeasurements()],
              (e, t) => {
                const n = [];
                for (let r = 0, o = e.length; r < o; r++) {
                  const o = t[e[r]];
                  n.push(o);
                }
                return n;
              },
              { key: !1, debug: () => this.options.debug },
            )),
            (this.getVirtualItemForOffset = (e) => {
              const t = this.getMeasurements();
              if (0 !== t.length)
                return l(t[y(0, t.length - 1, (e) => l(t[e]).start, e)]);
            }),
            (this.getOffsetForAlignment = (e, t) => {
              const n = this.getSize(),
                r = this.getScrollOffset();
              "auto" === t &&
                (t = e <= r ? "start" : e >= r + n ? "end" : "start"),
                "start" === t ||
                  ("end" === t ? (e -= n) : "center" === t && (e -= n / 2));
              const o = this.options.horizontal
                  ? "scrollWidth"
                  : "scrollHeight",
                i =
                  (this.scrollElement
                    ? "document" in this.scrollElement
                      ? this.scrollElement.document.documentElement[o]
                      : this.scrollElement[o]
                    : 0) - n;
              return Math.max(Math.min(i, e), 0);
            }),
            (this.getOffsetForIndex = (e, t = "auto") => {
              e = Math.max(0, Math.min(e, this.options.count - 1));
              const n = this.measurementsCache[e];
              if (!n) return;
              const r = this.getSize(),
                o = this.getScrollOffset();
              if ("auto" === t)
                if (n.end >= o + r - this.options.scrollPaddingEnd) t = "end";
                else {
                  if (!(n.start <= o + this.options.scrollPaddingStart))
                    return [o, t];
                  t = "start";
                }
              const i =
                "end" === t
                  ? n.end + this.options.scrollPaddingEnd
                  : n.start - this.options.scrollPaddingStart;
              return [this.getOffsetForAlignment(i, t), t];
            }),
            (this.isDynamicMode = () => this.elementsCache.size > 0),
            (this.cancelScrollToIndex = () => {
              null !== this.scrollToIndexTimeoutId &&
                this.targetWindow &&
                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),
                (this.scrollToIndexTimeoutId = null));
            }),
            (this.scrollToOffset = (
              e,
              { align: t = "start", behavior: n } = {},
            ) => {
              this.cancelScrollToIndex(),
                "smooth" === n &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                this._scrollToOffset(this.getOffsetForAlignment(e, t), {
                  adjustments: void 0,
                  behavior: n,
                });
            }),
            (this.scrollToIndex = (
              e,
              { align: t = "auto", behavior: n } = {},
            ) => {
              (e = Math.max(0, Math.min(e, this.options.count - 1))),
                this.cancelScrollToIndex(),
                "smooth" === n &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  );
              const r = this.getOffsetForIndex(e, t);
              if (!r) return;
              const [o, i] = r;
              this._scrollToOffset(o, { adjustments: void 0, behavior: n }),
                "smooth" !== n &&
                  this.isDynamicMode() &&
                  this.targetWindow &&
                  (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(
                    () => {
                      this.scrollToIndexTimeoutId = null;
                      if (this.elementsCache.has(this.options.getItemKey(e))) {
                        const [o] = l(this.getOffsetForIndex(e, i));
                        (t = o),
                          (r = this.getScrollOffset()),
                          Math.abs(t - r) < 1 ||
                            this.scrollToIndex(e, { align: i, behavior: n });
                      } else this.scrollToIndex(e, { align: i, behavior: n });
                      var t, r;
                    },
                  ));
            }),
            (this.scrollBy = (e, { behavior: t } = {}) => {
              this.cancelScrollToIndex(),
                "smooth" === t &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                this._scrollToOffset(this.getScrollOffset() + e, {
                  adjustments: void 0,
                  behavior: t,
                });
            }),
            (this.getTotalSize = () => {
              var e;
              const t = this.getMeasurements();
              let n;
              return (
                (n =
                  0 === t.length
                    ? this.options.paddingStart
                    : 1 === this.options.lanes
                      ? ((null == (e = t[t.length - 1]) ? void 0 : e.end) ?? 0)
                      : Math.max(
                          ...t.slice(-this.options.lanes).map((e) => e.end),
                        )),
                n - this.options.scrollMargin + this.options.paddingEnd
              );
            }),
            (this._scrollToOffset = (e, { adjustments: t, behavior: n }) => {
              this.options.scrollToFn(e, { behavior: n, adjustments: t }, this);
            }),
            (this.measure = () => {
              (this.itemSizeCache = new Map()), this.notify(!1);
            }),
            this.setOptions(e);
        }
      }
      const y = (e, t, n, r) => {
        for (; e <= t; ) {
          const o = ((e + t) / 2) | 0,
            i = n(o);
          if (i < r) e = o + 1;
          else {
            if (!(i > r)) return o;
            t = o - 1;
          }
        }
        return e > 0 ? e - 1 : 0;
      };
      const S =
        "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function C(e) {
        const t = r.useReducer(() => ({}), {})[1],
          n = {
            ...e,
            onChange: (n, r) => {
              var i;
              r ? (0, o.flushSync)(t) : t(),
                null == (i = e.onChange) || i.call(e, n, r);
            },
          },
          [i] = r.useState(() => new w(n));
        return (
          i.setOptions(n),
          r.useEffect(() => i._didMount(), []),
          S(() => i._willUpdate()),
          i
        );
      }
      function R(e) {
        return C({
          observeElementRect: c,
          observeElementOffset: h,
          scrollToFn: b,
          ...e,
        });
      }
      function E(e) {
        return C({
          getScrollElement: () =>
            "undefined" != typeof document ? window : null,
          observeElementRect: f,
          observeElementOffset: p,
          scrollToFn: v,
          initialOffset: () =>
            "undefined" != typeof document ? window.scrollY : 0,
          ...e,
        });
      }
    },
  },
]);
