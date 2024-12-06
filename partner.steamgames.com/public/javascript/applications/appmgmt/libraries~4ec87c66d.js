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
              a = n(t),
              s = "(" === (o = o || "()")[0],
              c = ")" === o[1];
            return (
              ((s ? this.isAfter(i, r) : !this.isBefore(i, r)) &&
                (c ? this.isBefore(a, r) : !this.isAfter(a, r))) ||
              ((s ? this.isBefore(i, r) : !this.isAfter(i, r)) &&
                (c ? this.isAfter(a, r) : !this.isBefore(a, r)))
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
              var a = e.name ? e : e.$locale(),
                s = o(a[t]),
                c = o(a[n]),
                l =
                  s ||
                  c.map(function (e) {
                    return e.slice(0, r);
                  });
              if (!i) return l;
              var u = a.weekStart;
              return l.map(function (e, t) {
                return l[(t + (u || 0)) % 7];
              });
            },
            a = function () {
              return n.Ls[n.locale()];
            },
            s = function (e, t) {
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
            c = function () {
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
                  return s(e.$locale(), t);
                },
                meridiem: this.$locale().meridiem,
                ordinal: this.$locale().ordinal,
              };
            };
          (r.localeData = function () {
            return c.bind(this)();
          }),
            (n.localeData = function () {
              var e = a();
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
                  return s(e, t);
                },
                meridiem: e.meridiem,
                ordinal: e.ordinal,
              };
            }),
            (n.months = function () {
              return i(a(), "months");
            }),
            (n.monthsShort = function () {
              return i(a(), "monthsShort", "months", 3);
            }),
            (n.weekdays = function (e) {
              return i(a(), "weekdays", null, null, e);
            }),
            (n.weekdaysShort = function (e) {
              return i(a(), "weekdaysShort", "weekdays", 3, e);
            }),
            (n.weekdaysMin = function (e) {
              return i(a(), "weekdaysMin", "weekdays", 2, e);
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
          var a = o.prototype;
          (i.utc = function (e) {
            return new o({ date: e, utc: !0, args: arguments });
          }),
            (a.utc = function (t) {
              var n = i(this.toDate(), { locale: this.$L, utc: !0 });
              return t ? n.add(this.utcOffset(), e) : n;
            }),
            (a.local = function () {
              return i(this.toDate(), { locale: this.$L, utc: !1 });
            });
          var s = a.parse;
          a.parse = function (e) {
            e.utc && (this.$u = !0),
              this.$utils().u(e.$offset) || (this.$offset = e.$offset),
              s.call(this, e);
          };
          var c = a.init;
          a.init = function () {
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
            } else c.call(this);
          };
          var l = a.utcOffset;
          a.utcOffset = function (r, o) {
            var i = this.$utils().u;
            if (i(r))
              return this.$u
                ? 0
                : i(this.$offset)
                  ? l.call(this)
                  : this.$offset;
            if (
              "string" == typeof r &&
              ((r = (function (e) {
                void 0 === e && (e = "");
                var r = e.match(t);
                if (!r) return null;
                var o = ("" + r[0]).match(n) || ["-", 0, 0],
                  i = o[0],
                  a = 60 * +o[1] + +o[2];
                return 0 === a ? 0 : "+" === i ? a : -a;
              })(r)),
              null === r)
            )
              return this;
            var a = Math.abs(r) <= 16 ? 60 * r : r,
              s = this;
            if (o) return (s.$offset = a), (s.$u = 0 === r), s;
            if (0 !== r) {
              var c = this.$u
                ? this.toDate().getTimezoneOffset()
                : -1 * this.utcOffset();
              ((s = this.local().add(a + c, e)).$offset = a),
                (s.$x.$localOffset = c);
            } else s = this.utc();
            return s;
          };
          var u = a.format;
          (a.format = function (e) {
            var t = e || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return u.call(this, t);
          }),
            (a.valueOf = function () {
              var e = this.$utils().u(this.$offset)
                ? 0
                : this.$offset +
                  (this.$x.$localOffset || this.$d.getTimezoneOffset());
              return this.$d.valueOf() - 6e4 * e;
            }),
            (a.isUTC = function () {
              return !!this.$u;
            }),
            (a.toISOString = function () {
              return this.toDate().toISOString();
            }),
            (a.toString = function () {
              return this.toDate().toUTCString();
            });
          var f = a.toDate;
          a.toDate = function (e) {
            return "s" === e && this.$offset
              ? i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
              : f.call(this);
          };
          var d = a.diff;
          a.diff = function (e, t, n) {
            if (e && this.$u === e.$u) return d.call(this, e, t, n);
            var r = this.local(),
              o = i(e).local();
            return d.call(r, o, t, n);
          };
        };
      })();
    },
    38921: (e) => {
      "use strict";
      e.exports = function (e, t, n, r, o, i, a, s) {
        if (!e) {
          var c;
          if (void 0 === t)
            c = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
          else {
            var l = [n, r, o, i, a, s],
              u = 0;
            (c = new Error(
              t.replace(/%s/g, function () {
                return l[u++];
              }),
            )).name = "Invariant Violation";
          }
          throw ((c.framesToPop = 1), c);
        }
      };
    },
    21228: (e, t, n) => {
      "use strict";
      n.d(t, { Vv: () => qa, Pp: () => Go, ye: () => Ua });
      var r = n(54883),
        o = n(2829),
        i = n(11052),
        a = n(30549),
        s = n(50181),
        c = n(35549),
        l = n(96101),
        u = n(15596),
        f = n(90626),
        d = n(38921),
        p = n.n(d),
        v = function () {};
      function h(e, t) {
        return void 0 !== e[t];
      }
      function m(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      var g = n(81115),
        y = n(58584),
        b = n(42891),
        w = n(98935);
      function A(e) {
        var t,
          n,
          r = "";
        if ("string" == typeof e || "number" == typeof e) r += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (n = A(e[t])) && (r && (r += " "), (r += n));
          else for (t in e) e[t] && (r && (r += " "), (r += t));
        return r;
      }
      const E = function () {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) && (t = A(e)) && (r && (r += " "), (r += t));
        return r;
      };
      var D = n(61410),
        S = n.n(D),
        k = "milliseconds",
        O = "seconds",
        x = "minutes",
        M = "hours",
        R = "day",
        _ = "week",
        T = "month",
        C = "year",
        P = "decade",
        N = "century",
        z = {
          milliseconds: 1,
          seconds: 1e3,
          minutes: 6e4,
          hours: 36e5,
          day: 864e5,
          week: 6048e5,
        },
        j = { month: 1, year: 12, decade: 120, century: 1200 };
      function L(e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0 ? 29 : 28;
      }
      function F(e, t, n) {
        switch (((e = new Date(e)), n)) {
          case k:
          case O:
          case x:
          case M:
          case R:
          case _:
            return (function (e, t) {
              var n = new Date(+e + t);
              return (function (e, t) {
                var n = e.getTimezoneOffset(),
                  r = t.getTimezoneOffset();
                return new Date(+t + (r - n) * z.minutes);
              })(e, n);
            })(e, t * z[n]);
          case T:
          case C:
          case P:
          case N:
            return (function (e, t) {
              var n = e.getFullYear(),
                r = e.getMonth(),
                o = e.getDate(),
                i = 12 * n + r + t,
                a = Math.trunc(i / 12),
                s = i % 12,
                c = Math.min(
                  o,
                  (function (e) {
                    return [31, L(e), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                  })(a)[s],
                ),
                l = new Date(e);
              return (
                l.setFullYear(a), l.setDate(1), l.setMonth(s), l.setDate(c), l
              );
            })(e, t * j[n]);
        }
        throw new TypeError('Invalid units: "' + n + '"');
      }
      function I(e, t, n) {
        return F(e, -t, n);
      }
      function W(e, t, n) {
        switch (((e = new Date(e)), t)) {
          case N:
          case P:
          case C:
            e = re(e, 0);
          case T:
            e = ne(e, 1);
          case _:
          case R:
            e = ee(e, 0);
          case M:
            e = Q(e, 0);
          case x:
            e = J(e, 0);
          case O:
            e = Z(e, 0);
        }
        return (
          t === P && (e = I(e, oe(e) % 10, "year")),
          t === N && (e = I(e, oe(e) % 100, "year")),
          t === _ &&
            (e = (function (e, t, n) {
              var r = (te(e) + 7 - (n || 0)) % 7;
              return void 0 === t ? r : F(e, t - r, R);
            })(e, 0, n)),
          e
        );
      }
      function H(e, t, n) {
        switch (((e = W((e = new Date(e)), t, n)), t)) {
          case N:
          case P:
          case C:
          case T:
          case _:
            (e = I((e = F(e, 1, t)), 1, R)).setHours(23, 59, 59, 999);
            break;
          case R:
            e.setHours(23, 59, 59, 999);
            break;
          case M:
          case x:
          case O:
            e = I((e = F(e, 1, t)), 1, k);
        }
        return e;
      }
      var Y = ae(function (e, t) {
          return e === t;
        }),
        V = ae(function (e, t) {
          return e !== t;
        }),
        q = ae(function (e, t) {
          return e > t;
        }),
        $ = ae(function (e, t) {
          return e >= t;
        }),
        B = ae(function (e, t) {
          return e < t;
        }),
        K = ae(function (e, t) {
          return e <= t;
        });
      function U() {
        return new Date(Math.min.apply(Math, arguments));
      }
      function G() {
        return new Date(Math.max.apply(Math, arguments));
      }
      function X(e, t, n, r) {
        return (r = r || "day"), (!t || $(e, t, r)) && (!n || K(e, n, r));
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
      function ae(e) {
        return function (t, n, r) {
          return e(+W(t, r), +W(n, r));
        };
      }
      var se = n(55635),
        ce = n(8950);
      const le = function (e, t, n) {
        var r = -1,
          o = e.length;
        t < 0 && (t = -t > o ? 0 : o + t),
          (n = n > o ? o : n) < 0 && (n += o),
          (o = t > n ? 0 : (n - t) >>> 0),
          (t >>>= 0);
        for (var i = Array(o); ++r < o; ) i[r] = e[r + t];
        return i;
      };
      var ue = n(7e4),
        fe = n(55205),
        de = 1 / 0;
      const pe = function (e) {
        return e
          ? (e = (0, fe.A)(e)) === de || e === -1 / 0
            ? 17976931348623157e292 * (e < 0 ? -1 : 1)
            : e == e
              ? e
              : 0
          : 0 === e
            ? e
            : 0;
      };
      const ve = function (e) {
        var t = pe(e),
          n = t % 1;
        return t == t ? (n ? t - n : t) : 0;
      };
      var he = Math.ceil,
        me = Math.max;
      const ge = function (e, t, n) {
        t = (n ? (0, ue.A)(e, t, n) : void 0 === t) ? 1 : me(ve(t), 0);
        var r = null == e ? 0 : e.length;
        if (!r || t < 1) return [];
        for (var o = 0, i = 0, a = Array(he(r / t)); o < r; )
          a[i++] = le(e, o, (o += t));
        return a;
      };
      function ye(e) {
        return (e && e.ownerDocument) || document;
      }
      function be(e, t) {
        return (function (e) {
          var t = ye(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var we = /([A-Z])/g;
      var Ae = /^ms-/;
      function Ee(e) {
        return (function (e) {
          return e.replace(we, "-$1").toLowerCase();
        })(e).replace(Ae, "-ms-");
      }
      var De =
        /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      const Se = function (e, t) {
        var n = "",
          r = "";
        if ("string" == typeof t)
          return (
            e.style.getPropertyValue(Ee(t)) || be(e).getPropertyValue(Ee(t))
          );
        Object.keys(t).forEach(function (o) {
          var i = t[o];
          i || 0 === i
            ? !(function (e) {
                return !(!e || !De.test(e));
              })(o)
              ? (n += Ee(o) + ": " + i + ";")
              : (r += o + "(" + i + ") ")
            : e.style.removeProperty(Ee(o));
        }),
          r && (n += "transform: " + r + ";"),
          (e.style.cssText += ";" + n);
      };
      function ke(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
            ? e === t || !!(16 & e.compareDocumentPosition(t))
            : void 0;
      }
      function Oe(e) {
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
          var o = Oe(n);
          if (void 0 === r) return o ? o[e] : n[t];
          o ? o.scrollTo(o[e], r) : (n[t] = r);
        };
      }
      const Me = xe("pageXOffset"),
        Re = xe("pageYOffset");
      function _e(e) {
        var t = ye(e),
          n = { top: 0, left: 0, height: 0, width: 0 },
          r = t && t.documentElement;
        return r && ke(r, e)
          ? (void 0 !== e.getBoundingClientRect &&
              (n = e.getBoundingClientRect()),
            (n = {
              top: n.top + Re(r) - (r.clientTop || 0),
              left: n.left + Me(r) - (r.clientLeft || 0),
              width: n.width,
              height: n.height,
            }))
          : n;
      }
      var Te = function (e) {
        return !!e && "offsetParent" in e;
      };
      function Ce(e, t) {
        var n,
          r = { top: 0, left: 0 };
        if ("fixed" === Se(e, "position")) n = e.getBoundingClientRect();
        else {
          var o =
            t ||
            (function (e) {
              for (
                var t = ye(e), n = e && e.offsetParent;
                Te(n) &&
                "HTML" !== n.nodeName &&
                "static" === Se(n, "position");
              )
                n = n.offsetParent;
              return n || t.documentElement;
            })(e);
          (n = _e(e)),
            "html" !==
              (function (e) {
                return e.nodeName && e.nodeName.toLowerCase();
              })(o) && (r = _e(o));
          var i = String(Se(o, "borderTopWidth") || 0);
          r.top += parseInt(i, 10) - Re(o) || 0;
          var a = String(Se(o, "borderLeftWidth") || 0);
          r.left += parseInt(a, 10) - Me(o) || 0;
        }
        var s = String(Se(e, "marginTop") || 0),
          c = String(Se(e, "marginLeft") || 0);
        return (0, y.A)({}, n, {
          top: n.top - r.top - (parseInt(s, 10) || 0),
          left: n.left - r.left - (parseInt(c, 10) || 0),
        });
      }
      const Pe = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var Ne = new Date().getTime();
      var ze = "clearTimeout",
        je = function (e) {
          var t = new Date().getTime(),
            n = Math.max(0, 16 - (t - Ne)),
            r = setTimeout(e, n);
          return (Ne = t), r;
        },
        Le = function (e, t) {
          return (
            e + (e ? t[0].toUpperCase() + t.substr(1) : t) + "AnimationFrame"
          );
        };
      Pe &&
        ["", "webkit", "moz", "o", "ms"].some(function (e) {
          var t = Le(e, "request");
          return (
            t in window &&
              ((ze = Le(e, "cancel")),
              (je = function (e) {
                return window[t](e);
              })),
            !!je
          );
        });
      var Fe = function (e) {
          "function" == typeof window[ze] && window[ze](e);
        },
        Ie = je,
        We = n(72739);
      function He() {
        return (0, f.useState)(null);
      }
      const Ye = (e) =>
        e && "function" != typeof e
          ? (t) => {
              e.current = t;
            }
          : e;
      const Ve = function (e, t) {
        return (0, f.useMemo)(
          () =>
            (function (e, t) {
              const n = Ye(e),
                r = Ye(t);
              return (e) => {
                n && n(e), r && r(e);
              };
            })(e, t),
          [e, t],
        );
      };
      var qe = "top",
        $e = "bottom",
        Be = "right",
        Ke = "left",
        Ue = "auto",
        Ge = [qe, $e, Be, Ke],
        Xe = "start",
        Ze = "end",
        Je = "clippingParents",
        Qe = "viewport",
        et = "popper",
        tt = "reference",
        nt = Ge.reduce(function (e, t) {
          return e.concat([t + "-" + Xe, t + "-" + Ze]);
        }, []),
        rt = [].concat(Ge, [Ue]).reduce(function (e, t) {
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
          const e = (0, f.useRef)(!0),
            t = (0, f.useRef)(() => e.current);
          return (
            (0, f.useEffect)(
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
          (0, f.useCallback)(
            (n) => {
              if (t()) return e[1](n);
            },
            [t, e[1]],
          ),
        ];
      };
      function at(e) {
        return e.split("-")[0];
      }
      function st(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function ct(e) {
        return e instanceof st(e).Element || e instanceof Element;
      }
      function lt(e) {
        return e instanceof st(e).HTMLElement || e instanceof HTMLElement;
      }
      function ut(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof st(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var ft = Math.max,
        dt = Math.min,
        pt = Math.round;
      function vt() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function ht() {
        return !/^((?!chrome|android).)*safari/i.test(vt());
      }
      function mt(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          o = 1,
          i = 1;
        t &&
          lt(e) &&
          ((o = (e.offsetWidth > 0 && pt(r.width) / e.offsetWidth) || 1),
          (i = (e.offsetHeight > 0 && pt(r.height) / e.offsetHeight) || 1));
        var a = (ct(e) ? st(e) : window).visualViewport,
          s = !ht() && n,
          c = (r.left + (s && a ? a.offsetLeft : 0)) / o,
          l = (r.top + (s && a ? a.offsetTop : 0)) / i,
          u = r.width / o,
          f = r.height / i;
        return {
          width: u,
          height: f,
          top: l,
          right: c + u,
          bottom: l + f,
          left: c,
          x: c,
          y: l,
        };
      }
      function gt(e) {
        var t = mt(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function yt(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && ut(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function bt(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function wt(e) {
        return st(e).getComputedStyle(e);
      }
      function At(e) {
        return ["table", "td", "th"].indexOf(bt(e)) >= 0;
      }
      function Et(e) {
        return ((ct(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function Dt(e) {
        return "html" === bt(e)
          ? e
          : e.assignedSlot || e.parentNode || (ut(e) ? e.host : null) || Et(e);
      }
      function St(e) {
        return lt(e) && "fixed" !== wt(e).position ? e.offsetParent : null;
      }
      function kt(e) {
        for (
          var t = st(e), n = St(e);
          n && At(n) && "static" === wt(n).position;
        )
          n = St(n);
        return n &&
          ("html" === bt(n) ||
            ("body" === bt(n) && "static" === wt(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(vt());
                if (
                  /Trident/i.test(vt()) &&
                  lt(e) &&
                  "fixed" === wt(e).position
                )
                  return null;
                var n = Dt(e);
                for (
                  ut(n) && (n = n.host);
                  lt(n) && ["html", "body"].indexOf(bt(n)) < 0;
                ) {
                  var r = wt(n);
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
      function Ot(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function xt(e, t, n) {
        return ft(e, dt(t, n));
      }
      function Mt(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function Rt(e, t) {
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
            a = n.modifiersData.popperOffsets,
            s = at(n.placement),
            c = Ot(s),
            l = [Ke, Be].indexOf(s) >= 0 ? "height" : "width";
          if (i && a) {
            var u = (function (e, t) {
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
                    : Rt(e, Ge),
                );
              })(o.padding, n),
              f = gt(i),
              d = "y" === c ? qe : Ke,
              p = "y" === c ? $e : Be,
              v =
                n.rects.reference[l] +
                n.rects.reference[c] -
                a[c] -
                n.rects.popper[l],
              h = a[c] - n.rects.reference[c],
              m = kt(i),
              g = m
                ? "y" === c
                  ? m.clientHeight || 0
                  : m.clientWidth || 0
                : 0,
              y = v / 2 - h / 2,
              b = u[d],
              w = g - f[l] - u[p],
              A = g / 2 - f[l] / 2 + y,
              E = xt(b, A, w),
              D = c;
            n.modifiersData[r] =
              (((t = {})[D] = E), (t.centerOffset = E - A), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" != typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            yt(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function Tt(e) {
        return e.split("-")[1];
      }
      var Ct = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Pt(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          o = e.placement,
          i = e.variation,
          a = e.offsets,
          s = e.position,
          c = e.gpuAcceleration,
          l = e.adaptive,
          u = e.roundOffsets,
          f = e.isFixed,
          d = a.x,
          p = void 0 === d ? 0 : d,
          v = a.y,
          h = void 0 === v ? 0 : v,
          m = "function" == typeof u ? u({ x: p, y: h }) : { x: p, y: h };
        (p = m.x), (h = m.y);
        var g = a.hasOwnProperty("x"),
          y = a.hasOwnProperty("y"),
          b = Ke,
          w = qe,
          A = window;
        if (l) {
          var E = kt(n),
            D = "clientHeight",
            S = "clientWidth";
          if (
            (E === st(n) &&
              "static" !== wt((E = Et(n))).position &&
              "absolute" === s &&
              ((D = "scrollHeight"), (S = "scrollWidth")),
            o === qe || ((o === Ke || o === Be) && i === Ze))
          )
            (w = $e),
              (h -=
                (f && E === A && A.visualViewport
                  ? A.visualViewport.height
                  : E[D]) - r.height),
              (h *= c ? 1 : -1);
          if (o === Ke || ((o === qe || o === $e) && i === Ze))
            (b = Be),
              (p -=
                (f && E === A && A.visualViewport
                  ? A.visualViewport.width
                  : E[S]) - r.width),
              (p *= c ? 1 : -1);
        }
        var k,
          O = Object.assign({ position: s }, l && Ct),
          x =
            !0 === u
              ? (function (e, t) {
                  var n = e.x,
                    r = e.y,
                    o = t.devicePixelRatio || 1;
                  return { x: pt(n * o) / o || 0, y: pt(r * o) / o || 0 };
                })({ x: p, y: h }, st(n))
              : { x: p, y: h };
        return (
          (p = x.x),
          (h = x.y),
          c
            ? Object.assign(
                {},
                O,
                (((k = {})[w] = y ? "0" : ""),
                (k[b] = g ? "0" : ""),
                (k.transform =
                  (A.devicePixelRatio || 1) <= 1
                    ? "translate(" + p + "px, " + h + "px)"
                    : "translate3d(" + p + "px, " + h + "px, 0)"),
                k),
              )
            : Object.assign(
                {},
                O,
                (((t = {})[w] = y ? h + "px" : ""),
                (t[b] = g ? p + "px" : ""),
                (t.transform = ""),
                t),
              )
        );
      }
      const Nt = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = n.gpuAcceleration,
            o = void 0 === r || r,
            i = n.adaptive,
            a = void 0 === i || i,
            s = n.roundOffsets,
            c = void 0 === s || s,
            l = {
              placement: at(t.placement),
              variation: Tt(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: o,
              isFixed: "fixed" === t.options.strategy,
            };
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              Pt(
                Object.assign({}, l, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: a,
                  roundOffsets: c,
                }),
              ),
            )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                Pt(
                  Object.assign({}, l, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: c,
                  }),
                ),
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement,
            }));
        },
        data: {},
      };
      var zt = { passive: !0 };
      const jt = {
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
            a = r.resize,
            s = void 0 === a || a,
            c = st(t.elements.popper),
            l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            i &&
              l.forEach(function (e) {
                e.addEventListener("scroll", n.update, zt);
              }),
            s && c.addEventListener("resize", n.update, zt),
            function () {
              i &&
                l.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, zt);
                }),
                s && c.removeEventListener("resize", n.update, zt);
            }
          );
        },
        data: {},
      };
      var Lt = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function Ft(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return Lt[e];
        });
      }
      var It = { start: "end", end: "start" };
      function Wt(e) {
        return e.replace(/start|end/g, function (e) {
          return It[e];
        });
      }
      function Ht(e) {
        var t = st(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function Yt(e) {
        return mt(Et(e)).left + Ht(e).scrollLeft;
      }
      function Vt(e) {
        var t = wt(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function qt(e) {
        return ["html", "body", "#document"].indexOf(bt(e)) >= 0
          ? e.ownerDocument.body
          : lt(e) && Vt(e)
            ? e
            : qt(Dt(e));
      }
      function $t(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = qt(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = st(r),
          a = o ? [i].concat(i.visualViewport || [], Vt(r) ? r : []) : r,
          s = t.concat(a);
        return o ? s : s.concat($t(Dt(a)));
      }
      function Bt(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function Kt(e, t, n) {
        return t === Qe
          ? Bt(
              (function (e, t) {
                var n = st(e),
                  r = Et(e),
                  o = n.visualViewport,
                  i = r.clientWidth,
                  a = r.clientHeight,
                  s = 0,
                  c = 0;
                if (o) {
                  (i = o.width), (a = o.height);
                  var l = ht();
                  (l || (!l && "fixed" === t)) &&
                    ((s = o.offsetLeft), (c = o.offsetTop));
                }
                return { width: i, height: a, x: s + Yt(e), y: c };
              })(e, n),
            )
          : ct(t)
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
            : Bt(
                (function (e) {
                  var t,
                    n = Et(e),
                    r = Ht(e),
                    o = null == (t = e.ownerDocument) ? void 0 : t.body,
                    i = ft(
                      n.scrollWidth,
                      n.clientWidth,
                      o ? o.scrollWidth : 0,
                      o ? o.clientWidth : 0,
                    ),
                    a = ft(
                      n.scrollHeight,
                      n.clientHeight,
                      o ? o.scrollHeight : 0,
                      o ? o.clientHeight : 0,
                    ),
                    s = -r.scrollLeft + Yt(e),
                    c = -r.scrollTop;
                  return (
                    "rtl" === wt(o || n).direction &&
                      (s += ft(n.clientWidth, o ? o.clientWidth : 0) - i),
                    { width: i, height: a, x: s, y: c }
                  );
                })(Et(e)),
              );
      }
      function Ut(e, t, n, r) {
        var o =
            "clippingParents" === t
              ? (function (e) {
                  var t = $t(Dt(e)),
                    n =
                      ["absolute", "fixed"].indexOf(wt(e).position) >= 0 &&
                      lt(e)
                        ? kt(e)
                        : e;
                  return ct(n)
                    ? t.filter(function (e) {
                        return ct(e) && yt(e, n) && "body" !== bt(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          i = [].concat(o, [n]),
          a = i[0],
          s = i.reduce(
            function (t, n) {
              var o = Kt(e, n, r);
              return (
                (t.top = ft(o.top, t.top)),
                (t.right = dt(o.right, t.right)),
                (t.bottom = dt(o.bottom, t.bottom)),
                (t.left = ft(o.left, t.left)),
                t
              );
            },
            Kt(e, a, r),
          );
        return (
          (s.width = s.right - s.left),
          (s.height = s.bottom - s.top),
          (s.x = s.left),
          (s.y = s.top),
          s
        );
      }
      function Gt(e) {
        var t,
          n = e.reference,
          r = e.element,
          o = e.placement,
          i = o ? at(o) : null,
          a = o ? Tt(o) : null,
          s = n.x + n.width / 2 - r.width / 2,
          c = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case qe:
            t = { x: s, y: n.y - r.height };
            break;
          case $e:
            t = { x: s, y: n.y + n.height };
            break;
          case Be:
            t = { x: n.x + n.width, y: c };
            break;
          case Ke:
            t = { x: n.x - r.width, y: c };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var l = i ? Ot(i) : null;
        if (null != l) {
          var u = "y" === l ? "height" : "width";
          switch (a) {
            case Xe:
              t[l] = t[l] - (n[u] / 2 - r[u] / 2);
              break;
            case Ze:
              t[l] = t[l] + (n[u] / 2 - r[u] / 2);
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
          a = void 0 === i ? e.strategy : i,
          s = n.boundary,
          c = void 0 === s ? Je : s,
          l = n.rootBoundary,
          u = void 0 === l ? Qe : l,
          f = n.elementContext,
          d = void 0 === f ? et : f,
          p = n.altBoundary,
          v = void 0 !== p && p,
          h = n.padding,
          m = void 0 === h ? 0 : h,
          g = Mt("number" != typeof m ? m : Rt(m, Ge)),
          y = d === et ? tt : et,
          b = e.rects.popper,
          w = e.elements[v ? y : d],
          A = Ut(
            ct(w) ? w : w.contextElement || Et(e.elements.popper),
            c,
            u,
            a,
          ),
          E = mt(e.elements.reference),
          D = Gt({
            reference: E,
            element: b,
            strategy: "absolute",
            placement: o,
          }),
          S = Bt(Object.assign({}, b, D)),
          k = d === et ? S : E,
          O = {
            top: A.top - k.top + g.top,
            bottom: k.bottom - A.bottom + g.bottom,
            left: A.left - k.left + g.left,
            right: k.right - A.right + g.right,
          },
          x = e.modifiersData.offset;
        if (d === et && x) {
          var M = x[o];
          Object.keys(O).forEach(function (e) {
            var t = [Be, $e].indexOf(e) >= 0 ? 1 : -1,
              n = [qe, $e].indexOf(e) >= 0 ? "y" : "x";
            O[e] += M[n] * t;
          });
        }
        return O;
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
                a = n.altAxis,
                s = void 0 === a || a,
                c = n.fallbackPlacements,
                l = n.padding,
                u = n.boundary,
                f = n.rootBoundary,
                d = n.altBoundary,
                p = n.flipVariations,
                v = void 0 === p || p,
                h = n.allowedAutoPlacements,
                m = t.options.placement,
                g = at(m),
                y =
                  c ||
                  (g === m || !v
                    ? [Ft(m)]
                    : (function (e) {
                        if (at(e) === Ue) return [];
                        var t = Ft(e);
                        return [Wt(e), t, Wt(t)];
                      })(m)),
                b = [m].concat(y).reduce(function (e, n) {
                  return e.concat(
                    at(n) === Ue
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var n = t,
                            r = n.placement,
                            o = n.boundary,
                            i = n.rootBoundary,
                            a = n.padding,
                            s = n.flipVariations,
                            c = n.allowedAutoPlacements,
                            l = void 0 === c ? rt : c,
                            u = Tt(r),
                            f = u
                              ? s
                                ? nt
                                : nt.filter(function (e) {
                                    return Tt(e) === u;
                                  })
                              : Ge,
                            d = f.filter(function (e) {
                              return l.indexOf(e) >= 0;
                            });
                          0 === d.length && (d = f);
                          var p = d.reduce(function (t, n) {
                            return (
                              (t[n] = Xt(e, {
                                placement: n,
                                boundary: o,
                                rootBoundary: i,
                                padding: a,
                              })[at(n)]),
                              t
                            );
                          }, {});
                          return Object.keys(p).sort(function (e, t) {
                            return p[e] - p[t];
                          });
                        })(t, {
                          placement: n,
                          boundary: u,
                          rootBoundary: f,
                          padding: l,
                          flipVariations: v,
                          allowedAutoPlacements: h,
                        })
                      : n,
                  );
                }, []),
                w = t.rects.reference,
                A = t.rects.popper,
                E = new Map(),
                D = !0,
                S = b[0],
                k = 0;
              k < b.length;
              k++
            ) {
              var O = b[k],
                x = at(O),
                M = Tt(O) === Xe,
                R = [qe, $e].indexOf(x) >= 0,
                _ = R ? "width" : "height",
                T = Xt(t, {
                  placement: O,
                  boundary: u,
                  rootBoundary: f,
                  altBoundary: d,
                  padding: l,
                }),
                C = R ? (M ? Be : Ke) : M ? $e : qe;
              w[_] > A[_] && (C = Ft(C));
              var P = Ft(C),
                N = [];
              if (
                (i && N.push(T[x] <= 0),
                s && N.push(T[C] <= 0, T[P] <= 0),
                N.every(function (e) {
                  return e;
                }))
              ) {
                (S = O), (D = !1);
                break;
              }
              E.set(O, N);
            }
            if (D)
              for (
                var z = function (e) {
                    var t = b.find(function (t) {
                      var n = E.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (S = t), "break";
                  },
                  j = v ? 3 : 1;
                j > 0;
                j--
              ) {
                if ("break" === z(j)) break;
              }
            t.placement !== S &&
              ((t.modifiersData[r]._skip = !0),
              (t.placement = S),
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
        return [qe, Be, $e, Ke].some(function (t) {
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
            a = rt.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = at(e),
                    o = [Ke, qe].indexOf(r) >= 0 ? -1 : 1,
                    i =
                      "function" == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    a = i[0],
                    s = i[1];
                  return (
                    (a = a || 0),
                    (s = (s || 0) * o),
                    [Ke, Be].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
                  );
                })(n, t.rects, i)),
                e
              );
            }, {}),
            s = a[t.placement],
            c = s.x,
            l = s.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += c),
            (t.modifiersData.popperOffsets.y += l)),
            (t.modifiersData[r] = a);
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
            a = n.altAxis,
            s = void 0 !== a && a,
            c = n.boundary,
            l = n.rootBoundary,
            u = n.altBoundary,
            f = n.padding,
            d = n.tether,
            p = void 0 === d || d,
            v = n.tetherOffset,
            h = void 0 === v ? 0 : v,
            m = Xt(t, {
              boundary: c,
              rootBoundary: l,
              padding: f,
              altBoundary: u,
            }),
            g = at(t.placement),
            y = Tt(t.placement),
            b = !y,
            w = Ot(g),
            A = "x" === w ? "y" : "x",
            E = t.modifiersData.popperOffsets,
            D = t.rects.reference,
            S = t.rects.popper,
            k =
              "function" == typeof h
                ? h(Object.assign({}, t.rects, { placement: t.placement }))
                : h,
            O =
              "number" == typeof k
                ? { mainAxis: k, altAxis: k }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, k),
            x = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            M = { x: 0, y: 0 };
          if (E) {
            if (i) {
              var R,
                _ = "y" === w ? qe : Ke,
                T = "y" === w ? $e : Be,
                C = "y" === w ? "height" : "width",
                P = E[w],
                N = P + m[_],
                z = P - m[T],
                j = p ? -S[C] / 2 : 0,
                L = y === Xe ? D[C] : S[C],
                F = y === Xe ? -S[C] : -D[C],
                I = t.elements.arrow,
                W = p && I ? gt(I) : { width: 0, height: 0 },
                H = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                Y = H[_],
                V = H[T],
                q = xt(0, D[C], W[C]),
                $ = b
                  ? D[C] / 2 - j - q - Y - O.mainAxis
                  : L - q - Y - O.mainAxis,
                B = b
                  ? -D[C] / 2 + j + q + V + O.mainAxis
                  : F + q + V + O.mainAxis,
                K = t.elements.arrow && kt(t.elements.arrow),
                U = K ? ("y" === w ? K.clientTop || 0 : K.clientLeft || 0) : 0,
                G = null != (R = null == x ? void 0 : x[w]) ? R : 0,
                X = P + B - G,
                Z = xt(p ? dt(N, P + $ - G - U) : N, P, p ? ft(z, X) : z);
              (E[w] = Z), (M[w] = Z - P);
            }
            if (s) {
              var J,
                Q = "x" === w ? qe : Ke,
                ee = "x" === w ? $e : Be,
                te = E[A],
                ne = "y" === A ? "height" : "width",
                re = te + m[Q],
                oe = te - m[ee],
                ie = -1 !== [qe, Ke].indexOf(g),
                ae = null != (J = null == x ? void 0 : x[A]) ? J : 0,
                se = ie ? re : te - D[ne] - S[ne] - ae + O.altAxis,
                ce = ie ? te + D[ne] + S[ne] - ae - O.altAxis : oe,
                le =
                  p && ie
                    ? (function (e, t, n) {
                        var r = xt(e, t, n);
                        return r > n ? n : r;
                      })(se, te, ce)
                    : xt(p ? se : re, te, p ? ce : oe);
              (E[A] = le), (M[A] = le - te);
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
          i = lt(t),
          a =
            lt(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = pt(t.width) / e.offsetWidth || 1,
                r = pt(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          s = Et(t),
          c = mt(e, a, n),
          l = { scrollLeft: 0, scrollTop: 0 },
          u = { x: 0, y: 0 };
        return (
          (i || (!i && !n)) &&
            (("body" !== bt(t) || Vt(s)) &&
              (l =
                (r = t) !== st(r) && lt(r)
                  ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop }
                  : Ht(r)),
            lt(t)
              ? (((u = mt(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
              : s && (u.x = Yt(s))),
          {
            x: c.left + l.scrollLeft - u.x,
            y: c.top + l.scrollTop - u.y,
            width: c.width,
            height: c.height,
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
      function an() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function sn(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          i = void 0 === o ? on : o;
        return function (e, t, n) {
          void 0 === n && (n = i);
          var o,
            a,
            s = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, on, i),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            c = [],
            l = !1,
            u = {
              state: s,
              setOptions: function (n) {
                var o = "function" == typeof n ? n(s.options) : n;
                f(),
                  (s.options = Object.assign({}, i, s.options, o)),
                  (s.scrollParents = {
                    reference: ct(e)
                      ? $t(e)
                      : e.contextElement
                        ? $t(e.contextElement)
                        : [],
                    popper: $t(t),
                  });
                var a,
                  l,
                  d = (function (e) {
                    var t = rn(e);
                    return ot.reduce(function (e, n) {
                      return e.concat(
                        t.filter(function (e) {
                          return e.phase === n;
                        }),
                      );
                    }, []);
                  })(
                    ((a = [].concat(r, s.options.modifiers)),
                    (l = a.reduce(function (e, t) {
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
                    Object.keys(l).map(function (e) {
                      return l[e];
                    })),
                  );
                return (
                  (s.orderedModifiers = d.filter(function (e) {
                    return e.enabled;
                  })),
                  s.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      o = e.effect;
                    if ("function" == typeof o) {
                      var i = o({ state: s, name: t, instance: u, options: r }),
                        a = function () {};
                      c.push(i || a);
                    }
                  }),
                  u.update()
                );
              },
              forceUpdate: function () {
                if (!l) {
                  var e = s.elements,
                    t = e.reference,
                    n = e.popper;
                  if (an(t, n)) {
                    (s.rects = {
                      reference: nn(t, kt(n), "fixed" === s.options.strategy),
                      popper: gt(n),
                    }),
                      (s.reset = !1),
                      (s.placement = s.options.placement),
                      s.orderedModifiers.forEach(function (e) {
                        return (s.modifiersData[e.name] = Object.assign(
                          {},
                          e.data,
                        ));
                      });
                    for (var r = 0; r < s.orderedModifiers.length; r++)
                      if (!0 !== s.reset) {
                        var o = s.orderedModifiers[r],
                          i = o.fn,
                          a = o.options,
                          c = void 0 === a ? {} : a,
                          f = o.name;
                        "function" == typeof i &&
                          (s =
                            i({ state: s, options: c, name: f, instance: u }) ||
                            s);
                      } else (s.reset = !1), (r = -1);
                  }
                }
              },
              update:
                ((o = function () {
                  return new Promise(function (e) {
                    u.forceUpdate(), e(s);
                  });
                }),
                function () {
                  return (
                    a ||
                      (a = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (a = void 0), e(o());
                        });
                      })),
                    a
                  );
                }),
              destroy: function () {
                f(), (l = !0);
              },
            };
          if (!an(e, t)) return u;
          function f() {
            c.forEach(function (e) {
              return e();
            }),
              (c = []);
          }
          return (
            u.setOptions(n).then(function (e) {
              !l && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            u
          );
        };
      }
      var cn = sn({
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
                  a = Xt(t, { elementContext: "reference" }),
                  s = Xt(t, { altBoundary: !0 }),
                  c = Jt(a, r),
                  l = Jt(s, o, i),
                  u = Qt(c),
                  f = Qt(l);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: c,
                  popperEscapeOffsets: l,
                  isReferenceHidden: u,
                  hasPopperEscaped: f,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": u,
                      "data-popper-escaped": f,
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
                t.modifiersData[n] = Gt({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            Nt,
            jt,
            en,
            Zt,
            tn,
            _t,
          ],
        }),
        ln = function (e) {
          return {
            position: e,
            top: "0",
            left: "0",
            opacity: "0",
            pointerEvents: "none",
          };
        },
        un = { name: "applyStyles", enabled: !1 },
        fn = {
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
              var a = o.getAttribute("aria-describedby");
              if (a && -1 !== a.split(",").indexOf(r.id)) return;
              o.setAttribute("aria-describedby", a ? a + "," + r.id : r.id);
            }
          },
        },
        dn = [];
      const pn = function (e, t, n) {
        var r = void 0 === n ? {} : n,
          o = r.enabled,
          i = void 0 === o || o,
          a = r.placement,
          s = void 0 === a ? "bottom" : a,
          c = r.strategy,
          l = void 0 === c ? "absolute" : c,
          u = r.modifiers,
          d = void 0 === u ? dn : u,
          p = (0, g.A)(r, ["enabled", "placement", "strategy", "modifiers"]),
          v = (0, f.useRef)(),
          h = (0, f.useCallback)(function () {
            var e;
            null == (e = v.current) || e.update();
          }, []),
          m = (0, f.useCallback)(function () {
            var e;
            null == (e = v.current) || e.forceUpdate();
          }, []),
          b = it(
            (0, f.useState)({
              placement: s,
              update: h,
              forceUpdate: m,
              attributes: {},
              styles: { popper: ln(l), arrow: {} },
            }),
          ),
          w = b[0],
          A = b[1],
          E = (0, f.useMemo)(
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
                    A({
                      state: t,
                      styles: n,
                      attributes: r,
                      update: h,
                      forceUpdate: m,
                      placement: t.placement,
                    });
                },
              };
            },
            [h, m, A],
          );
        return (
          (0, f.useEffect)(
            function () {
              v.current &&
                i &&
                v.current.setOptions({
                  placement: s,
                  strategy: l,
                  modifiers: [].concat(d, [E, un]),
                });
            },
            [l, s, E, i],
          ),
          (0, f.useEffect)(
            function () {
              if (i && null != e && null != t)
                return (
                  (v.current = cn(
                    e,
                    t,
                    (0, y.A)({}, p, {
                      placement: s,
                      strategy: l,
                      modifiers: [].concat(d, [fn, E]),
                    }),
                  )),
                  function () {
                    null != v.current &&
                      (v.current.destroy(),
                      (v.current = void 0),
                      A(function (e) {
                        return (0, y.A)({}, e, {
                          attributes: {},
                          styles: { popper: ln(l) },
                        });
                      }));
                  }
                );
            },
            [i, e, t],
          ),
          w
        );
      };
      var vn = !1,
        hn = !1;
      try {
        var mn = {
          get passive() {
            return (vn = !0);
          },
          get once() {
            return (hn = vn = !0);
          },
        };
        Pe &&
          (window.addEventListener("test", mn, mn),
          window.removeEventListener("test", mn, !0));
      } catch (e) {}
      const gn = function (e, t, n, r) {
        if (r && "boolean" != typeof r && !hn) {
          var o = r.once,
            i = r.capture,
            a = n;
          !hn &&
            o &&
            ((a =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, i), n.call(this, r);
              }),
            (n.__once = a)),
            e.addEventListener(t, a, vn ? r : i);
        }
        e.addEventListener(t, n, r);
      };
      const yn = function (e, t, n, r) {
        var o = r && "boolean" != typeof r ? r.capture : r;
        e.removeEventListener(t, n, o),
          n.__once && e.removeEventListener(t, n.__once, o);
      };
      const bn = function (e, t, n, r) {
        return (
          gn(e, t, n, r),
          function () {
            yn(e, t, n, r);
          }
        );
      };
      const wn = function (e) {
        const t = (0, f.useRef)(e);
        return (
          (0, f.useEffect)(() => {
            t.current = e;
          }, [e]),
          t
        );
      };
      function An(e) {
        const t = wn(e);
        return (0, f.useCallback)(
          function (...e) {
            return t.current && t.current(...e);
          },
          [t],
        );
      }
      var En = n(67501),
        Dn = n.n(En);
      const Sn = function (e) {
        return ye(
          (function (e) {
            return e && "setState" in e
              ? We.findDOMNode(e)
              : null != e
                ? e
                : null;
          })(e),
        );
      };
      var kn = function () {};
      var On = function (e) {
        return e && ("current" in e ? e.current : e);
      };
      const xn = function (e, t, n) {
        var r = void 0 === n ? {} : n,
          o = r.disabled,
          i = r.clickTrigger,
          a = void 0 === i ? "click" : i,
          s = (0, f.useRef)(!1),
          c = t || kn,
          l = (0, f.useCallback)(
            function (t) {
              var n,
                r,
                o = On(e);
              Dn()(
                !!o,
                "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node",
              ),
                (s.current = !(
                  o &&
                  ((r = t),
                  !(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey)) &&
                  (function (e) {
                    return 0 === e.button;
                  })(t) &&
                  !ke(
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
          u = An(function (e) {
            s.current || c(e);
          }),
          d = An(function (e) {
            27 === e.keyCode && c(e);
          });
        (0, f.useEffect)(
          function () {
            if (!o && null != e) {
              var t = window.event,
                n = Sn(On(e)),
                r = bn(n, a, l, !0),
                i = bn(n, a, function (e) {
                  e !== t ? u(e) : (t = void 0);
                }),
                s = bn(n, "keyup", function (e) {
                  e !== t ? d(e) : (t = void 0);
                }),
                c = [];
              return (
                "ontouchstart" in n.documentElement &&
                  (c = [].slice.call(n.body.children).map(function (e) {
                    return bn(e, "mousemove", kn);
                  })),
                function () {
                  r(),
                    i(),
                    s(),
                    c.forEach(function (e) {
                      return e();
                    });
                }
              );
            }
          },
          [e, o, a, l, u, d],
        );
      };
      var Mn = function (e) {
        var t;
        return "undefined" == typeof document
          ? null
          : null == e
            ? ye().body
            : ("function" == typeof e && (e = e()),
              e && "current" in e && (e = e.current),
              (null != (t = e) && t.nodeType && e) || null);
      };
      function Rn(e, t) {
        var n = (0, f.useState)(function () {
            return Mn(e);
          }),
          r = n[0],
          o = n[1];
        if (!r) {
          var i = Mn(e);
          i && o(i);
        }
        return (
          (0, f.useEffect)(
            function () {
              t && r && t(r);
            },
            [t, r],
          ),
          (0, f.useEffect)(
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
          a = e.enabled,
          s = e.enableEvents,
          c = e.placement,
          l = e.flip,
          u = e.offset,
          f = e.fixed,
          d = e.containerPadding,
          p = e.arrowElement,
          v = e.popperConfig,
          h = void 0 === v ? {} : v,
          m = (function (e) {
            var t = {};
            return Array.isArray(e)
              ? (null == e ||
                  e.forEach(function (e) {
                    t[e.name] = e;
                  }),
                t)
              : e || t;
          })(h.modifiers);
        return (0, y.A)({}, h, {
          placement: c,
          enabled: a,
          strategy: f ? "fixed" : h.strategy,
          modifiers:
            ((i = (0, y.A)({}, m, {
              eventListeners: { enabled: s },
              preventOverflow: (0, y.A)({}, m.preventOverflow, {
                options: d
                  ? (0, y.A)(
                      { padding: d },
                      null == (t = m.preventOverflow) ? void 0 : t.options,
                    )
                  : null == (n = m.preventOverflow)
                    ? void 0
                    : n.options,
              }),
              offset: {
                options: (0, y.A)(
                  { offset: u },
                  null == (r = m.offset) ? void 0 : r.options,
                ),
              },
              arrow: (0, y.A)({}, m.arrow, {
                enabled: !!p,
                options: (0, y.A)(
                  {},
                  null == (o = m.arrow) ? void 0 : o.options,
                  { element: p },
                ),
              }),
              flip: (0, y.A)({ enabled: !!l }, m.flip),
            })),
            void 0 === i && (i = {}),
            Array.isArray(i)
              ? i
              : Object.keys(i).map(function (e) {
                  return (i[e].name = e), i[e];
                })),
        });
      }
      var Tn = f.forwardRef(function (e, t) {
        var n = e.flip,
          r = e.offset,
          o = e.placement,
          i = e.containerPadding,
          a = void 0 === i ? 5 : i,
          s = e.popperConfig,
          c = void 0 === s ? {} : s,
          l = e.transition,
          u = He(),
          d = u[0],
          p = u[1],
          v = He(),
          h = v[0],
          m = v[1],
          b = Ve(p, t),
          w = Rn(e.container),
          A = Rn(e.target),
          E = (0, f.useState)(!e.show),
          D = E[0],
          S = E[1],
          k = pn(
            A,
            d,
            _n({
              placement: o,
              enableEvents: !!e.show,
              containerPadding: a || 5,
              flip: n,
              offset: r,
              arrowElement: h,
              popperConfig: c,
            }),
          ),
          O = k.styles,
          x = k.attributes,
          M = (0, g.A)(k, ["styles", "attributes"]);
        e.show ? D && S(!1) : e.transition || D || S(!0);
        var R = e.show || (l && !D);
        if (
          (xn(d, e.onHide, {
            disabled: !e.rootClose || e.rootCloseDisabled,
            clickTrigger: e.rootCloseEvent,
          }),
          !R)
        )
          return null;
        var _ = e.children(
          (0, y.A)({}, M, {
            show: !!e.show,
            props: (0, y.A)({}, x.popper, { style: O.popper, ref: b }),
            arrowProps: (0, y.A)({}, x.arrow, { style: O.arrow, ref: m }),
          }),
        );
        if (l) {
          var T = e.onExit,
            C = e.onExiting,
            P = e.onEnter,
            N = e.onEntering,
            z = e.onEntered;
          _ = f.createElement(
            l,
            {
              in: e.show,
              appear: !0,
              onExit: T,
              onExiting: C,
              onExited: function () {
                S(!0), e.onExited && e.onExited.apply(e, arguments);
              },
              onEnter: P,
              onEntering: N,
              onEntered: z,
            },
            _,
          );
        }
        return w ? We.createPortal(_, w) : null;
      });
      (Tn.displayName = "Overlay"),
        (Tn.propTypes = {
          show: S().bool,
          placement: S().oneOf(rt),
          target: S().any,
          container: S().any,
          flip: S().bool,
          children: S().func.isRequired,
          containerPadding: S().number,
          popperConfig: S().object,
          rootClose: S().bool,
          rootCloseEvent: S().oneOf(["click", "mousedown"]),
          rootCloseDisabled: S().bool,
          onHide: function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            var o;
            return e.rootClose
              ? (o = S().func).isRequired.apply(o, [e].concat(n))
              : S().func.apply(S(), [e].concat(n));
          },
          transition: S().elementType,
          onEnter: S().func,
          onEntering: S().func,
          onEntered: S().func,
          onExit: S().func,
          onExiting: S().func,
          onExited: S().func,
        });
      const Cn = Tn;
      var Pn = n(13964);
      const Nn = function (e, t) {
        return (0, Pn.A)(e, t);
      };
      function zn(e, t) {
        var n = Oe(e);
        return n ? n.innerHeight : t ? e.clientHeight : _e(e).height;
      }
      var jn,
        Ln = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function Fn(e, t) {
        if (!jn) {
          var n = document.body,
            r =
              n.matches ||
              n.matchesSelector ||
              n.webkitMatchesSelector ||
              n.mozMatchesSelector ||
              n.msMatchesSelector;
          jn = function (e, t) {
            return r.call(e, t);
          };
        }
        return jn(e, t);
      }
      function In(e, t, n) {
        e.closest && !n && e.closest(t);
        var r = e;
        do {
          if (Fn(r, t)) return r;
          r = r.parentElement;
        } while (r && r !== n && r.nodeType === document.ELEMENT_NODE);
        return null;
      }
      const Wn = function (e, t, n, r) {
        for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
          if (t(e[i], i, e)) return i;
        return -1;
      };
      var Hn = n(17267),
        Yn = Math.max;
      const Vn = function (e, t, n) {
        var r = null == e ? 0 : e.length;
        if (!r) return -1;
        var o = null == n ? 0 : ve(n);
        return o < 0 && (o = Yn(r + o, 0)), Wn(e, (0, Hn.A)(t, 3), o);
      };
      var qn = Math.ceil,
        $n = Math.max;
      const Bn = function (e, t, n, r) {
        for (var o = -1, i = $n(qn((t - e) / (n || 1)), 0), a = Array(i); i--; )
          (a[r ? i : ++o] = e), (e += n);
        return a;
      };
      const Kn = function (e) {
        return function (t, n, r) {
          return (
            r && "number" != typeof r && (0, ue.A)(t, n, r) && (n = r = void 0),
            (t = pe(t)),
            void 0 === n ? ((n = t), (t = 0)) : (n = pe(n)),
            (r = void 0 === r ? (t < n ? 1 : -1) : pe(r)),
            Bn(t, n, r, e)
          );
        };
      };
      const Un = Kn();
      var Gn =
        Number.isNaN ||
        function (e) {
          return "number" == typeof e && e != e;
        };
      function Xn(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++)
          if (((r = e[n]), (o = t[n]), !(r === o || (Gn(r) && Gn(o)))))
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
        var a = -1,
          s = t.length;
        for (r || (r = or), i || (i = []); ++a < s; ) {
          var c = t[a];
          n > 0 && r(c)
            ? n > 1
              ? e(c, n - 1, r, o, i)
              : (0, Qn.A)(i, c)
            : o || (i[i.length] = c);
        }
        return i;
      };
      var ar = n(4516),
        sr = n(78350),
        cr = n(64600);
      const lr = function (e, t) {
        var n = e.length;
        for (e.sort(t); n--; ) e[n] = e[n].value;
        return e;
      };
      var ur = n(93365),
        fr = n(73914);
      const dr = function (e, t) {
        if (e !== t) {
          var n = void 0 !== e,
            r = null === e,
            o = e == e,
            i = (0, fr.A)(e),
            a = void 0 !== t,
            s = null === t,
            c = t == t,
            l = (0, fr.A)(t);
          if (
            (!s && !l && !i && e > t) ||
            (i && a && c && !s && !l) ||
            (r && a && c) ||
            (!n && c) ||
            !o
          )
            return 1;
          if (
            (!r && !i && !l && e < t) ||
            (l && n && o && !r && !i) ||
            (s && n && o) ||
            (!a && o) ||
            !c
          )
            return -1;
        }
        return 0;
      };
      const pr = function (e, t, n) {
        for (
          var r = -1,
            o = e.criteria,
            i = t.criteria,
            a = o.length,
            s = n.length;
          ++r < a;
        ) {
          var c = dr(o[r], i[r]);
          if (c) return r >= s ? c : c * ("desc" == n[r] ? -1 : 1);
        }
        return e.index - t.index;
      };
      var vr = n(41040);
      const hr = function (e, t, n) {
        t = t.length
          ? (0, ar.A)(t, function (e) {
              return (0, nr.A)(e)
                ? function (t) {
                    return (0, sr.A)(t, 1 === e.length ? e[0] : e);
                  }
                : e;
            })
          : [vr.A];
        var r = -1;
        t = (0, ar.A)(t, (0, ur.A)(Hn.A));
        var o = (0, cr.A)(e, function (e, n, o) {
          return {
            criteria: (0, ar.A)(t, function (t) {
              return t(e);
            }),
            index: ++r,
            value: e,
          };
        });
        return lr(o, function (e, t) {
          return pr(e, t, n);
        });
      };
      var mr = n(83270);
      const gr = (0, mr.A)(function (e, t) {
        if (null == e) return [];
        var n = t.length;
        return (
          n > 1 && (0, ue.A)(e, t[0], t[1])
            ? (t = [])
            : n > 2 && (0, ue.A)(t[0], t[1], t[2]) && (t = [t[0]]),
          hr(e, ir(t, 1), [])
        );
      });
      var yr;
      function br(e) {
        if (((!yr && 0 !== yr) || e) && Pe) {
          var t = document.createElement("div");
          (t.style.position = "absolute"),
            (t.style.top = "-9999px"),
            (t.style.width = "50px"),
            (t.style.height = "50px"),
            (t.style.overflow = "scroll"),
            document.body.appendChild(t),
            (yr = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return yr;
      }
      function wr(e, t) {
        var n = Oe(e);
        return n ? n.innerWidth : t ? e.clientWidth : _e(e).width;
      }
      var Ar = n(87537),
        Er = n(76805),
        Dr = n(78296),
        Sr = n(79474);
      function kr(e) {
        return (0, Ar.A)(e) || (0, Er.A)(e) || (0, Dr.A)(e) || (0, Sr.A)();
      }
      var Or = n(39234),
        xr = n(16673),
        Mr = n(9175),
        Rr = n(13217),
        _r = n(99763),
        Tr = n(84207),
        Cr = n(74603);
      const Pr = function (e, t) {
        return e && (0, Tr.A)(t, (0, Cr.A)(t), e);
      };
      var Nr = n(70158);
      const zr = function (e, t) {
        return e && (0, Tr.A)(t, (0, Nr.A)(t), e);
      };
      var jr = n(27066),
        Lr = n(80335),
        Fr = n(25606);
      const Ir = function (e, t) {
        return (0, Tr.A)(e, (0, Fr.A)(e), t);
      };
      var Wr = n(57695),
        Hr = n(72097);
      const Yr = Object.getOwnPropertySymbols
        ? function (e) {
            for (var t = []; e; )
              (0, Qn.A)(t, (0, Fr.A)(e)), (e = (0, Wr.A)(e));
            return t;
          }
        : Hr.A;
      const Vr = function (e, t) {
        return (0, Tr.A)(e, Yr(e), t);
      };
      var qr = n(81218),
        $r = n(80647);
      const Br = function (e) {
        return (0, $r.A)(e, Nr.A, Yr);
      };
      var Kr = n(14645),
        Ur = Object.prototype.hasOwnProperty;
      const Gr = function (e) {
        var t = e.length,
          n = new e.constructor(t);
        return (
          t &&
            "string" == typeof e[0] &&
            Ur.call(e, "index") &&
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
        ao = n(6314),
        so = n(83658);
      const co = function (e) {
        return (0, so.A)(e) && "[object Map]" == (0, Kr.A)(e);
      };
      var lo = n(23785),
        uo = lo.A && lo.A.isMap;
      const fo = uo ? (0, ur.A)(uo) : co;
      var po = n(35181);
      const vo = function (e) {
        return (0, so.A)(e) && "[object Set]" == (0, Kr.A)(e);
      };
      var ho = lo.A && lo.A.isSet;
      const mo = ho ? (0, ur.A)(ho) : vo;
      var go = "[object Arguments]",
        yo = "[object Function]",
        bo = "[object Object]",
        wo = {};
      (wo[go] =
        wo["[object Array]"] =
        wo["[object ArrayBuffer]"] =
        wo["[object DataView]"] =
        wo["[object Boolean]"] =
        wo["[object Date]"] =
        wo["[object Float32Array]"] =
        wo["[object Float64Array]"] =
        wo["[object Int8Array]"] =
        wo["[object Int16Array]"] =
        wo["[object Int32Array]"] =
        wo["[object Map]"] =
        wo["[object Number]"] =
        wo[bo] =
        wo["[object RegExp]"] =
        wo["[object Set]"] =
        wo["[object String]"] =
        wo["[object Symbol]"] =
        wo["[object Uint8Array]"] =
        wo["[object Uint8ClampedArray]"] =
        wo["[object Uint16Array]"] =
        wo["[object Uint32Array]"] =
          !0),
        (wo["[object Error]"] = wo[yo] = wo["[object WeakMap]"] = !1);
      const Ao = function e(t, n, r, o, i, a) {
        var s,
          c = 1 & n,
          l = 2 & n,
          u = 4 & n;
        if ((r && (s = i ? r(t, o, i, a) : r(t)), void 0 !== s)) return s;
        if (!(0, po.A)(t)) return t;
        var f = (0, nr.A)(t);
        if (f) {
          if (((s = Gr(t)), !c)) return (0, Lr.A)(t, s);
        } else {
          var d = (0, Kr.A)(t),
            p = d == yo || "[object GeneratorFunction]" == d;
          if ((0, ao.A)(t)) return (0, jr.A)(t, c);
          if (d == bo || d == go || (p && !i)) {
            if (((s = l || p ? {} : (0, io.A)(t)), !c))
              return l ? Vr(t, zr(s, t)) : Ir(t, Pr(s, t));
          } else {
            if (!wo[d]) return i ? t : {};
            s = oo(t, d, c);
          }
        }
        a || (a = new Mr.A());
        var v = a.get(t);
        if (v) return v;
        a.set(t, s),
          mo(t)
            ? t.forEach(function (o) {
                s.add(e(o, n, r, o, t, a));
              })
            : fo(t) &&
              t.forEach(function (o, i) {
                s.set(i, e(o, n, r, i, t, a));
              });
        var h = u ? (l ? Br : qr.A) : l ? Nr.A : Cr.A,
          m = f ? void 0 : h(t);
        return (
          (0, Rr.A)(m || t, function (o, i) {
            m && (o = t[(i = o)]), (0, _r.A)(s, i, e(o, n, r, i, t, a));
          }),
          s
        );
      };
      var Eo = n(1931);
      const Do = function (e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0;
      };
      const So = function (e, t) {
        return t.length < 2 ? e : (0, sr.A)(e, le(t, 0, -1));
      };
      var ko = n(5269);
      const Oo = function (e, t) {
        return (
          (t = (0, Eo.A)(t, e)),
          null == (e = So(e, t)) || delete e[(0, ko.A)(Do(t))]
        );
      };
      var xo = n(77011);
      const Mo = function (e) {
        return (0, xo.A)(e) ? void 0 : e;
      };
      const Ro = function (e) {
        return (null == e ? 0 : e.length) ? ir(e, 1) : [];
      };
      var _o = n(75702),
        To = n(99660);
      const Co = (function (e) {
        return (0, To.A)((0, _o.A)(e, void 0, Ro), e + "");
      })(function (e, t) {
        var n = {};
        if (null == e) return n;
        var r = !1;
        (t = (0, ar.A)(t, function (t) {
          return (t = (0, Eo.A)(t, e)), r || (r = t.length > 1), t;
        })),
          (0, Tr.A)(e, Br(e), n),
          r && (n = Ao(n, 7, Mo));
        for (var o = t.length; o--; ) Oo(n, t[o]);
        return n;
      });
      var Po = n(58760),
        No = Object.prototype,
        zo = No.hasOwnProperty;
      const jo = (0, mr.A)(function (e, t) {
        e = Object(e);
        var n = -1,
          r = t.length,
          o = r > 2 ? t[2] : void 0;
        for (o && (0, ue.A)(t[0], t[1], o) && (r = 1); ++n < r; )
          for (
            var i = t[n], a = (0, Nr.A)(i), s = -1, c = a.length;
            ++s < c;
          ) {
            var l = a[s],
              u = e[l];
            (void 0 === u || ((0, Po.A)(u, No[l]) && !zo.call(e, l))) &&
              (e[l] = i[l]);
          }
        return e;
      });
      var Lo = n(5536),
        Fo = n(25665),
        Io = n(30186),
        Wo = n(48693);
      const Ho = function (e, t, n) {
        var r = (0, nr.A)(e),
          o = r || (0, ao.A)(e) || (0, Wo.A)(e);
        if (((t = (0, Hn.A)(t, 4)), null == n)) {
          var i = e && e.constructor;
          n = o
            ? r
              ? new i()
              : []
            : (0, po.A)(e) && (0, Io.A)(i)
              ? (0, Lo.A)((0, Wr.A)(e))
              : {};
        }
        return (
          (o ? Rr.A : Fo.A)(e, function (e, r, o) {
            return t(n, e, r, o);
          }),
          n
        );
      };
      var Yo = n(63376);
      const Vo = function (e, t) {
        var n = {};
        return (
          (t = (0, Hn.A)(t, 3)),
          (0, Fo.A)(e, function (e, r, o) {
            (0, Yo.A)(n, r, t(e, r, o));
          }),
          n
        );
      };
      n(22586), n(20237), n(83632), n(43334), n(39920), n(4042), n(14240);
      function qo(e) {
        return e.children;
      }
      var $o = "PREV",
        Bo = "NEXT",
        Ko = "TODAY",
        Uo = "DATE",
        Go = {
          MONTH: "month",
          WEEK: "week",
          WORK_WEEK: "work_week",
          DAY: "day",
          AGENDA: "agenda",
        },
        Xo = Object.keys(Go).map(function (e) {
          return Go[e];
        });
      function Zo(e, t) {
        e && e.apply(null, [].concat(t));
      }
      S().oneOfType([S().string, S().func]),
        S().any,
        S().func,
        S().oneOfType([
          S().arrayOf(S().oneOf(Xo)),
          S().objectOf(function (e, t) {
            if (-1 !== Xo.indexOf(t) && "boolean" == typeof e[t]) return null;
            for (
              var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
              o < n;
              o++
            )
              r[o - 2] = arguments[o];
            return S().elementType.apply(S(), [e, t].concat(r));
          }),
        ]),
        S().oneOfType([S().oneOf(["overlap", "no-overlap"]), S().func]);
      var Jo = { seconds: 1e3, minutes: 6e4, hours: 36e5, day: 864e5 };
      function Qo(e, t) {
        var n = W(e, "month");
        return W(n, "week", t.startOfWeek());
      }
      function ei(e, t) {
        var n = H(e, "month");
        return H(n, "week", t.startOfWeek());
      }
      function ti(e, t) {
        for (var n = Qo(e, t), r = ei(e, t), o = []; K(n, r, "day"); )
          o.push(n), (n = F(n, 1, "day"));
        return o;
      }
      function ni(e, t) {
        var n = W(e, t);
        return Y(n, e) ? n : F(n, 1, t);
      }
      function ri(e, t) {
        for (
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "day",
            r = e,
            o = [];
          K(r, t, n);
        )
          o.push(r), (r = F(r, 1, n));
        return o;
      }
      function oi(e, t) {
        return null == t && null == e
          ? null
          : (null == t && (t = new Date()),
            null == e && (e = new Date()),
            (e = W(e, "day")),
            (e = ee(e, ee(t))),
            (e = Q(e, Q(t))),
            (e = J(e, J(t))),
            Z(e, Z(t)));
      }
      function ii(e) {
        return 0 === ee(e) && 0 === Q(e) && 0 === J(e) && 0 === Z(e);
      }
      function ai(e, t, n) {
        return n && "milliseconds" !== n
          ? Math.round(Math.abs(+W(e, n) / Jo[n] - +W(t, n) / Jo[n]))
          : Math.abs(+e - +t);
      }
      var si = S().oneOfType([S().string, S().func]);
      function ci(e, t, n, r, o) {
        var i = "function" == typeof r ? r(n, o, e) : t.call(e, n, r, o);
        return (
          p()(
            null == i || "string" == typeof i,
            "`localizer format(..)` must return a string, null, or undefined",
          ),
          i
        );
      }
      function li(e, t, n) {
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
      function ui(e, t) {
        return e.getTimezoneOffset() - t.getTimezoneOffset();
      }
      function fi(e, t) {
        return ai(e, t, "minutes") + ui(e, t);
      }
      function di(e) {
        var t = W(e, "day");
        return ai(t, e, "minutes") + ui(t, e);
      }
      function pi(e, t) {
        return B(e, t, "day");
      }
      function vi(e, t, n) {
        return Y(e, t, "minutes") ? $(t, n, "minutes") : q(t, n, "minutes");
      }
      function hi(e) {
        var t = e.evtA,
          n = t.start,
          r = t.end,
          o = t.allDay,
          i = e.evtB,
          a = i.start,
          s = i.end,
          c = i.allDay,
          l = +W(n, "day") - +W(a, "day"),
          u = ai(n, ni(r, "day"), "day"),
          f = ai(a, ni(s, "day"), "day");
        return (
          l ||
          Math.max(f, 1) - Math.max(u, 1) ||
          !!c - !!o ||
          +n - +a ||
          +r - +s
        );
      }
      function mi(e) {
        var t = e.event,
          n = t.start,
          r = t.end,
          o = e.range,
          i = o.start,
          a = o.end,
          s = W(n, "day"),
          c = K(s, a, "day"),
          l = V(s, r, "minutes") ? q(r, i, "minutes") : $(r, i, "minutes");
        return c && l;
      }
      function gi(e, t) {
        return Y(e, t, "day");
      }
      function yi(e, t) {
        return ii(e) && ii(t);
      }
      var bi = (0, s.A)(function e(t) {
        var n = this;
        (0, a.A)(this, e),
          p()(
            "function" == typeof t.format,
            "date localizer `format(..)` must be a function",
          ),
          p()(
            "function" == typeof t.firstOfWeek,
            "date localizer `firstOfWeek(..)` must be a function",
          ),
          (this.propType = t.propType || si),
          (this.formats = t.formats),
          (this.format = function () {
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
              r[o] = arguments[o];
            return ci.apply(void 0, [n, t.format].concat(r));
          }),
          (this.startOfWeek = t.firstOfWeek),
          (this.merge = t.merge || oi),
          (this.inRange = t.inRange || X),
          (this.lt = t.lt || B),
          (this.lte = t.lte || K),
          (this.gt = t.gt || q),
          (this.gte = t.gte || $),
          (this.eq = t.eq || Y),
          (this.neq = t.neq || V),
          (this.startOf = t.startOf || W),
          (this.endOf = t.endOf || H),
          (this.add = t.add || F),
          (this.range = t.range || ri),
          (this.diff = t.diff || ai),
          (this.ceil = t.ceil || ni),
          (this.min = t.min || U),
          (this.max = t.max || G),
          (this.minutes = t.minutes || Q),
          (this.firstVisibleDay = t.firstVisibleDay || Qo),
          (this.lastVisibleDay = t.lastVisibleDay || ei),
          (this.visibleDays = t.visibleDays || ti),
          (this.getSlotDate = t.getSlotDate || li),
          (this.getTimezoneOffset =
            t.getTimezoneOffset ||
            function (e) {
              return e.getTimezoneOffset();
            }),
          (this.getDstOffset = t.getDstOffset || ui),
          (this.getTotalMin = t.getTotalMin || fi),
          (this.getMinutesFromMidnight = t.getMinutesFromMidnight || di),
          (this.continuesPrior = t.continuesPrior || pi),
          (this.continuesAfter = t.continuesAfter || vi),
          (this.sortEvents = t.sortEvents || hi),
          (this.inEventRange = t.inEventRange || mi),
          (this.isSameDate = t.isSameDate || gi),
          (this.startAndEndAreDateOnly = t.startAndEndAreDateOnly || yi),
          (this.segmentOffset = t.browserTZOffset ? t.browserTZOffset() : 0);
      });
      function wi(e, t, n, o) {
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
      var Ai = {
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
      var Ei = [
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
        Di = (function (e) {
          (0, c.A)(n, e);
          var t = (0, l.A)(n);
          function n() {
            return (0, a.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, s.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.style,
                    n = e.className,
                    i = e.event,
                    a = e.selected,
                    s = e.isAllDay,
                    c = e.onSelect,
                    l = e.onDoubleClick,
                    u = e.onKeyPress,
                    d = e.localizer,
                    p = e.continuesPrior,
                    v = e.continuesAfter,
                    h = e.accessors,
                    m = e.getters,
                    g = e.children,
                    y = e.components,
                    b = y.event,
                    w = y.eventWrapper,
                    A = e.slotStart,
                    D = e.slotEnd,
                    S = (0, o.A)(e, Ei);
                  delete S.resizable;
                  var k = h.title(i),
                    O = h.tooltip(i),
                    x = h.end(i),
                    M = h.start(i),
                    R = h.allDay(i),
                    _ = s || R || d.diff(M, d.ceil(x, "day"), "day") > 1,
                    T = m.eventProp(i, M, x, a),
                    C = f.createElement(
                      "div",
                      { className: "rbc-event-content", title: O || void 0 },
                      b
                        ? f.createElement(b, {
                            event: i,
                            continuesPrior: p,
                            continuesAfter: v,
                            title: k,
                            isAllDay: R,
                            localizer: d,
                            slotStart: A,
                            slotEnd: D,
                          })
                        : k,
                    );
                  return f.createElement(
                    w,
                    Object.assign({}, this.props, { type: "date" }),
                    f.createElement(
                      "div",
                      Object.assign({}, S, {
                        tabIndex: 0,
                        style: (0, r.A)((0, r.A)({}, T.style), t),
                        className: E("rbc-event", n, T.className, {
                          "rbc-selected": a,
                          "rbc-event-allday": _,
                          "rbc-event-continues-prior": p,
                          "rbc-event-continues-after": v,
                        }),
                        onClick: function (e) {
                          return c && c(i, e);
                        },
                        onDoubleClick: function (e) {
                          return l && l(i, e);
                        },
                        onKeyPress: function (e) {
                          return u && u(i, e);
                        },
                      }),
                      "function" == typeof g ? g(C) : C,
                    ),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      function Si(e, t) {
        return !(!e || null == t) && Nn(e, t);
      }
      function ki(e, t) {
        return (e.right - e.left) / t;
      }
      function Oi(e, t, n, r) {
        var o = ki(e, r);
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
          a = e.getters,
          s = e.selected,
          c = e.components,
          l = e.localizer,
          u = e.position,
          d = e.show,
          p = e.events,
          v = e.slotStart,
          h = e.slotEnd,
          m = e.onSelect,
          g = e.onDoubleClick,
          y = e.onKeyPress,
          b = e.handleDragStart,
          w = e.popperRef,
          A = e.target,
          E = e.offset;
        (n = (t = { ref: w, callback: d }).ref),
          (r = t.callback),
          (0, f.useEffect)(
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
          (0, f.useLayoutEffect)(
            function () {
              var e = (function (e) {
                  var t = e.target,
                    n = e.offset,
                    r = e.container,
                    o = e.box,
                    i = _e(t),
                    a = i.top,
                    s = i.left,
                    c = i.width,
                    l = i.height,
                    u = _e(r),
                    f = u.top,
                    d = u.left,
                    p = u.width,
                    v = u.height,
                    h = _e(o),
                    m = h.width,
                    g = h.height,
                    y = f + v,
                    b = d + p,
                    w = a + g,
                    A = s + m,
                    E = n.x,
                    D = n.y;
                  return {
                    topOffset: w > y ? a - g - D : a + D + l,
                    leftOffset: A > b ? s + E - m + c : s + E,
                  };
                })({
                  target: A,
                  offset: E,
                  container: o.current,
                  box: w.current,
                }),
                t = e.topOffset,
                n = e.leftOffset;
              (w.current.style.top = "".concat(t, "px")),
                (w.current.style.left = "".concat(n, "px"));
            },
            [E.x, E.y, A],
          );
        var D = u.width,
          S = { minWidth: D + D / 2 };
        return f.createElement(
          "div",
          { style: S, className: "rbc-overlay", ref: w },
          f.createElement(
            "div",
            { className: "rbc-overlay-header" },
            l.format(v, "dayHeaderFormat"),
          ),
          p.map(function (e, t) {
            return f.createElement(Di, {
              key: t,
              type: "popup",
              localizer: l,
              event: e,
              getters: a,
              onSelect: m,
              accessors: i,
              components: c,
              onDoubleClick: g,
              onKeyPress: y,
              continuesPrior: l.lt(i.end(e), v, "day"),
              continuesAfter: l.gte(i.start(e), h, "day"),
              slotStart: v,
              slotEnd: h,
              selected: Si(e, s),
              draggable: !0,
              onDragStart: function () {
                return b(e);
              },
              onDragEnd: function () {
                return d();
              },
            });
          }),
        );
      }
      var Mi = f.forwardRef(function (e, t) {
        return f.createElement(xi, Object.assign({}, e, { popperRef: t }));
      });
      function Ri(e) {
        var t = e.containerRef,
          n = e.popupOffset,
          r = void 0 === n ? 5 : n,
          o = e.overlay,
          i = e.accessors,
          a = e.localizer,
          s = e.components,
          c = e.getters,
          l = e.selected,
          u = e.handleSelectEvent,
          d = e.handleDoubleClickEvent,
          p = e.handleKeyPressEvent,
          v = e.handleDragStart,
          h = e.onHide,
          m = e.overlayDisplay,
          g = (0, f.useRef)(null);
        if (!o.position) return null;
        var y = r;
        isNaN(r) || (y = { x: r, y: r });
        var b = o.position,
          w = o.events,
          A = o.date,
          E = o.end;
        return f.createElement(
          Cn,
          {
            rootClose: !0,
            flip: !0,
            show: !0,
            placement: "bottom",
            onHide: h,
            target: o.target,
          },
          function (e) {
            var n = e.props;
            return f.createElement(
              Mi,
              Object.assign({}, n, {
                containerRef: t,
                ref: g,
                target: o.target,
                offset: y,
                accessors: i,
                getters: c,
                selected: l,
                components: s,
                localizer: a,
                position: b,
                show: m,
                events: w,
                slotStart: A,
                slotEnd: E,
                onSelect: u,
                onDoubleClick: d,
                onKeyPress: p,
                handleDragStart: v,
              }),
            );
          },
        );
      }
      Mi.propTypes = {
        accessors: S().object.isRequired,
        getters: S().object.isRequired,
        selected: S().object,
        components: S().object.isRequired,
        localizer: S().object.isRequired,
        position: S().object.isRequired,
        show: S().func.isRequired,
        events: S().array.isRequired,
        slotStart: S().instanceOf(Date).isRequired,
        slotEnd: S().instanceOf(Date),
        onSelect: S().func,
        onDoubleClick: S().func,
        onKeyPress: S().func,
        handleDragStart: S().func,
        style: S().object,
        offset: S().shape({ x: S().number, y: S().number }),
      };
      var _i = f.forwardRef(function (e, t) {
        return f.createElement(Ri, Object.assign({}, e, { containerRef: t }));
      });
      function Ti(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : document;
        return bn(n, e, t, { passive: !1 });
      }
      function Ci(e, t) {
        return !!(function (e, t) {
          var n = t.clientX,
            r = t.clientY;
          return In(document.elementFromPoint(n, r), ".rbc-event", e);
        })(e, t);
      }
      function Pi(e, t) {
        return !!(function (e, t) {
          var n = t.clientX,
            r = t.clientY;
          return In(document.elementFromPoint(n, r), ".rbc-show-more", e);
        })(e, t);
      }
      function Ni(e) {
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
        popupOffset: S().oneOfType([
          S().number,
          S().shape({ x: S().number, y: S().number }),
        ]),
        overlay: S().shape({
          position: S().object,
          events: S().array,
          date: S().instanceOf(Date),
          end: S().instanceOf(Date),
        }),
        accessors: S().object.isRequired,
        localizer: S().object.isRequired,
        components: S().object.isRequired,
        getters: S().object.isRequired,
        selected: S().object,
        handleSelectEvent: S().func,
        handleDoubleClickEvent: S().func,
        handleKeyPressEvent: S().func,
        handleDragStart: S().func,
        onHide: S().func,
        overlayDisplay: S().func,
      };
      var zi = (function () {
        function e(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = n.global,
            o = void 0 !== r && r,
            i = n.longPressThreshold,
            s = void 0 === i ? 250 : i,
            c = n.validContainers,
            l = void 0 === c ? [] : c;
          (0, a.A)(this, e),
            (this.isDetached = !1),
            (this.container = t),
            (this.globalMouse = !t || o),
            (this.longPressThreshold = s),
            (this.validContainers = l),
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
            (this._removeTouchMoveWindowListener = Ti(
              "touchmove",
              function () {},
              window,
            )),
            (this._removeKeyDownListener = Ti("keydown", this._keyListener)),
            (this._removeKeyUpListener = Ti("keyup", this._keyListener)),
            (this._removeDropFromOutsideListener = Ti(
              "drop",
              this._dropFromOutsideListener,
            )),
            (this._removeDragOverFromOutsideListener = Ti(
              "dragover",
              this._dragOverFromOutsideListener,
            )),
            this._addInitialEventListener();
        }
        return (
          (0, s.A)(e, [
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
                return !(!t || !this.selecting) && ji(t, Li(e));
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
                  a = function (t) {
                    (r = setTimeout(function () {
                      c(), e(t);
                    }, n.longPressThreshold)),
                      (o = Ti("touchmove", function () {
                        return c();
                      })),
                      (i = Ti("touchend", function () {
                        return c();
                      }));
                  },
                  s = Ti("touchstart", a),
                  c = function () {
                    r && clearTimeout(r),
                      o && o(),
                      i && i(),
                      (r = null),
                      (o = null),
                      (i = null);
                  };
                return (
                  t && a(t),
                  function () {
                    c(), s();
                  }
                );
              },
            },
            {
              key: "_addInitialEventListener",
              value: function () {
                var e = this,
                  t = Ti("mousedown", function (t) {
                    e._removeInitialEventListener(),
                      e._handleInitialEvent(t),
                      (e._removeInitialEventListener = Ti(
                        "mousedown",
                        e._handleInitialEvent,
                      ));
                  }),
                  n = Ti("touchstart", function (t) {
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
                var t = Ni(e),
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
                var t = Ni(e),
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
                    n = Ni(e),
                    r = n.clientX,
                    o = n.clientY,
                    a = n.pageX,
                    s = n.pageY,
                    c = this.container();
                  if (
                    3 !== e.which &&
                    2 !== e.button &&
                    ((u = r),
                    (f = o),
                    !(l = c) || ke(l, document.elementFromPoint(u, f)))
                  ) {
                    var l, u, f;
                    if (!this.globalMouse && c && !ke(c, e.target)) {
                      var d = (function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0;
                          "object" !== (0, i.A)(e) &&
                            (e = { top: e, left: e, right: e, bottom: e });
                          return e;
                        })(0),
                        p = d.top,
                        v = d.left,
                        h = d.bottom,
                        m = d.right;
                      if (
                        !ji(
                          {
                            top: (t = Li(c)).top - p,
                            left: t.left - v,
                            bottom: t.bottom + h,
                            right: t.right + m,
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
                          clientX: r,
                          clientY: o,
                        }),
                      )
                    )
                      switch (e.type) {
                        case "mousedown":
                          (this._removeEndListener = Ti(
                            "mouseup",
                            this._handleTerminatingEvent,
                          )),
                            (this._onEscListener = Ti(
                              "keydown",
                              this._handleTerminatingEvent,
                            )),
                            (this._removeMoveListener = Ti(
                              "mousemove",
                              this._handleMoveEvent,
                            ));
                          break;
                        case "touchstart":
                          this._handleMoveEvent(e),
                            (this._removeEndListener = Ti(
                              "touchend",
                              this._handleTerminatingEvent,
                            )),
                            (this._removeMoveListener = Ti(
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
                var t = Ni(e),
                  n = t.pageX,
                  r = t.pageY;
                if (
                  ((this.selecting = !1),
                  this._removeEndListener && this._removeEndListener(),
                  this._removeMoveListener && this._removeMoveListener(),
                  this._initialEventData)
                ) {
                  var o = !this.container || ke(this.container(), e.target),
                    i = this._isWithinValidContainer(e),
                    a = this._selectRect,
                    s = this.isClick(n, r);
                  return (
                    (this._initialEventData = null),
                    "Escape" !== e.key && i
                      ? s && o
                        ? this._handleClickEvent(e)
                        : s
                          ? this.emit("reset")
                          : this.emit("select", a)
                      : this.emit("reset")
                  );
                }
              },
            },
            {
              key: "_handleClickEvent",
              value: function (e) {
                var t = Ni(e),
                  n = t.pageX,
                  r = t.pageY,
                  o = t.clientX,
                  i = t.clientY,
                  a = new Date().getTime();
                return this._lastClickData &&
                  a - this._lastClickData.timestamp < 250
                  ? ((this._lastClickData = null),
                    this.emit("doubleClick", {
                      x: n,
                      y: r,
                      clientX: o,
                      clientY: i,
                    }))
                  : ((this._lastClickData = { timestamp: a }),
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
                    o = Ni(e),
                    i = o.pageX,
                    a = o.pageY,
                    s = Math.abs(n - i),
                    c = Math.abs(r - a),
                    l = Math.min(i, n),
                    u = Math.min(a, r),
                    f = this.selecting;
                  (!this.isClick(i, a) || f || s || c) &&
                    ((this.selecting = !0),
                    (this._selectRect = {
                      top: u,
                      left: l,
                      x: i,
                      y: a,
                      right: l + s,
                      bottom: u + c,
                    }),
                    f || this.emit("selectStart", this._initialEventData),
                    this.isClick(i, a) ||
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
      function ji(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = Li(e),
          o = r.top,
          i = r.left,
          a = r.right,
          s = void 0 === a ? i : a,
          c = r.bottom,
          l = void 0 === c ? o : c,
          u = Li(t),
          f = u.top,
          d = u.left,
          p = u.right,
          v = void 0 === p ? d : p,
          h = u.bottom;
        return !(
          l - n < f ||
          o + n > (void 0 === h ? f : h) ||
          s - n < d ||
          i + n > v
        );
      }
      function Li(e) {
        if (!e.getBoundingClientRect) return e;
        var t = e.getBoundingClientRect(),
          n = t.left + Fi("left"),
          r = t.top + Fi("top");
        return {
          top: r,
          left: n,
          right: (e.offsetWidth || 0) + n,
          bottom: (e.offsetHeight || 0) + r,
        };
      }
      function Fi(e) {
        return "left" === e
          ? window.pageXOffset || document.body.scrollLeft || 0
          : "top" === e
            ? window.pageYOffset || document.body.scrollTop || 0
            : void 0;
      }
      var Ii = (function (e) {
          (0, c.A)(n, e);
          var t = (0, l.A)(n);
          function n(e, r) {
            var o;
            return (
              (0, a.A)(this, n),
              ((o = t.call(this, e, r)).state = { selecting: !1 }),
              (o.containerRef = (0, f.createRef)()),
              o
            );
          }
          return (
            (0, s.A)(n, [
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
                    a = e.localizer,
                    s = this.state,
                    c = s.selecting,
                    l = s.startIdx,
                    u = s.endIdx,
                    d = n();
                  return f.createElement(
                    "div",
                    { className: "rbc-row-bg", ref: this.containerRef },
                    t.map(function (e, n) {
                      var s = c && n >= l && n <= u,
                        p = r.dayProp(e),
                        v = p.className,
                        h = p.style;
                      return f.createElement(
                        i,
                        { key: n, value: e, range: t },
                        f.createElement("div", {
                          style: h,
                          className: E(
                            "rbc-day-bg",
                            v,
                            s && "rbc-selected-cell",
                            a.isSameDate(e, d) && "rbc-today",
                            o && a.neq(o, e, "month") && "rbc-off-range-bg",
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
                    n = (this._selector = new zi(this.props.container, {
                      longPressThreshold: this.props.longPressThreshold,
                    })),
                    o = function (n, r) {
                      if (!Ci(t, n) && !Pi(t, n)) {
                        var o = Li(t),
                          i = e.props,
                          a = i.range,
                          s = i.rtl;
                        if (
                          ((l = o),
                          (f = (u = n).x),
                          (d = u.y) >= l.top &&
                            d <= l.bottom &&
                            f >= l.left &&
                            f <= l.right)
                        ) {
                          var c = Oi(o, n.x, s, a.length);
                          e._selectSlot({
                            startIdx: c,
                            endIdx: c,
                            action: r,
                            box: n,
                          });
                        }
                      }
                      var l, u, f, d;
                      (e._initial = {}), e.setState({ selecting: !1 });
                    };
                  n.on("selecting", function (r) {
                    var o = e.props,
                      i = o.range,
                      a = o.rtl,
                      s = -1,
                      c = -1;
                    if (
                      (e.state.selecting ||
                        (Zo(e.props.onSelectStart, [r]),
                        (e._initial = { x: r.x, y: r.y })),
                      n.isSelected(t))
                    ) {
                      var l = Li(t),
                        u = (function (e, t, n, r, o) {
                          var i = -1,
                            a = -1,
                            s = r - 1,
                            c = ki(t, r),
                            l = Oi(t, n.x, o, r),
                            u = t.top < n.y && t.bottom > n.y,
                            f = t.top < e.y && t.bottom > e.y,
                            d = e.y > t.bottom,
                            p = t.top > e.y;
                          return (
                            n.top < t.top &&
                              n.bottom > t.bottom &&
                              ((i = 0), (a = s)),
                            u &&
                              (p
                                ? ((i = 0), (a = l))
                                : d && ((i = l), (a = s))),
                            f &&
                              ((i = a =
                                o
                                  ? s - Math.floor((e.x - t.left) / c)
                                  : Math.floor((e.x - t.left) / c)),
                              u
                                ? l < i
                                  ? (i = l)
                                  : (a = l)
                                : e.y < n.y
                                  ? (a = s)
                                  : (i = 0)),
                            { startIdx: i, endIdx: a }
                          );
                        })(e._initial, l, r, i.length, a);
                      (s = u.startIdx), (c = u.endIdx);
                    }
                    e.setState({ selecting: !0, startIdx: s, endIdx: c });
                  }),
                    n.on("beforeSelect", function (t) {
                      if ("ignoreEvents" === e.props.selectable)
                        return !Ci(e.containerRef.current, t);
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
        })(f.Component),
        Wi =
          (S().object.isRequired,
          S().object,
          S().bool,
          S().object.isRequired,
          S().object.isRequired,
          S().object.isRequired,
          S().object.isRequired,
          S().func,
          S().func,
          S().func,
          { segments: [], selected: {} }),
        Hi = function (e, t) {
          var n = e.selected;
          e.isAllDay;
          var r = e.accessors,
            o = e.getters,
            i = e.onSelect,
            a = e.onDoubleClick,
            s = e.onKeyPress,
            c = e.localizer,
            l = e.slotMetrics,
            u = e.components,
            d = e.resizable,
            p = l.continuesPrior(t),
            v = l.continuesAfter(t);
          return f.createElement(Di, {
            event: t,
            getters: o,
            localizer: c,
            accessors: r,
            components: u,
            onSelect: i,
            onDoubleClick: a,
            onKeyPress: s,
            continuesPrior: p,
            continuesAfter: v,
            slotStart: l.first,
            slotEnd: l.last,
            selected: Si(t, n),
            resizable: d,
          });
        },
        Yi = function (e, t, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : " ",
            o = (Math.abs(t) / e) * 100 + "%";
          return f.createElement(
            "div",
            {
              key: n,
              className: "rbc-row-segment",
              style: { WebkitFlexBasis: o, flexBasis: o, maxWidth: o },
            },
            r,
          );
        },
        Vi = (function (e) {
          (0, c.A)(n, e);
          var t = (0, l.A)(n);
          function n() {
            return (0, a.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, s.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.segments,
                    r = t.slotMetrics.slots,
                    o = t.className,
                    i = 1;
                  return f.createElement(
                    "div",
                    { className: E(o, "rbc-row") },
                    n.reduce(function (t, n, o) {
                      var a = n.event,
                        s = n.left,
                        c = n.right,
                        l = n.span,
                        u = "_lvl_" + o,
                        f = s - i,
                        d = Hi(e.props, a);
                      return (
                        f && t.push(Yi(r, f, "".concat(u, "_gap"))),
                        t.push(Yi(r, l, u, d)),
                        (i = c + 1),
                        t
                      );
                    }, []),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      function qi(e) {
        var t = e.dateRange,
          n = e.unit,
          r = void 0 === n ? "day" : n,
          o = e.localizer;
        return { first: t[0], last: o.add(t[t.length - 1], 1, r) };
      }
      function $i(e) {
        var t,
          n,
          r,
          o =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1 / 0,
          i = [],
          a = [];
        for (t = 0; t < e.length; t++) {
          for (r = e[t], n = 0; n < i.length && Ki(r, i[n]); n++);
          n >= o ? a.push(r) : (i[n] || (i[n] = [])).push(r);
        }
        for (t = 0; t < i.length; t++)
          i[t].sort(function (e, t) {
            return e.left - t.left;
          });
        return { levels: i, extra: a };
      }
      function Bi(e, t, n, r, o) {
        var i = { start: r.start(e), end: r.end(e) },
          a = { start: t, end: n };
        return o.inEventRange({ event: i, range: a });
      }
      function Ki(e, t) {
        return t.some(function (t) {
          return t.left <= e.right && t.right >= e.left;
        });
      }
      function Ui(e, t, n, r) {
        var o = { start: n.start(e), end: n.end(e), allDay: n.allDay(e) },
          i = { start: n.start(t), end: n.end(t), allDay: n.allDay(t) };
        return r.sortEvents({ evtA: o, evtB: i });
      }
      Vi.defaultProps = (0, r.A)({}, Wi);
      var Gi = function (e, t) {
          return e.left <= t && e.right >= t;
        },
        Xi = function (e, t) {
          return e.filter(function (e) {
            return Gi(e, t);
          }).length;
        },
        Zi = (function (e) {
          (0, c.A)(n, e);
          var t = (0, l.A)(n);
          function n() {
            return (0, a.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, s.A)(n, [
              {
                key: "render",
                value: function () {
                  for (
                    var e = this.props,
                      t = e.segments,
                      n = e.slotMetrics.slots,
                      r = $i(t).levels[0],
                      o = 1,
                      i = 1,
                      a = [];
                    o <= n;
                  ) {
                    var s = "_lvl_" + o,
                      c =
                        r.filter(function (e) {
                          return Gi(e, o);
                        })[0] || {},
                      l = c.event,
                      u = c.left,
                      d = c.right,
                      p = c.span;
                    if (l) {
                      var v = Math.max(0, u - i);
                      if (this.canRenderSlotEvent(u, p)) {
                        var h = Hi(this.props, l);
                        v && a.push(Yi(n, v, s + "_gap")),
                          a.push(Yi(n, p, s, h)),
                          (i = o = d + 1);
                      } else
                        v && a.push(Yi(n, v, s + "_gap")),
                          a.push(Yi(n, 1, s, this.renderShowMore(t, o))),
                          (i = o += 1);
                    } else o++;
                  }
                  return f.createElement("div", { className: "rbc-row" }, a);
                },
              },
              {
                key: "canRenderSlotEvent",
                value: function (e, t) {
                  var n = this.props.segments;
                  return Un(e, e + t).every(function (e) {
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
                    f.createElement(
                      "button",
                      {
                        type: "button",
                        key: "sm_" + t,
                        className: E("rbc-button-link", "rbc-show-more"),
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
        })(f.Component);
      Zi.defaultProps = (0, r.A)({}, Wi);
      var Ji = function (e) {
          var t = e.children;
          return f.createElement(
            "div",
            { className: "rbc-row-content-scroll-container" },
            t,
          );
        },
        Qi = function (e, t) {
          return e[0].range === t[0].range && e[0].events === t[0].events;
        };
      function ea() {
        return Zn(function (e) {
          for (
            var t = e.range,
              n = e.events,
              o = e.maxRows,
              i = e.minRows,
              a = e.accessors,
              s = e.localizer,
              c = qi({ dateRange: t, localizer: s }),
              l = c.first,
              u = c.last,
              f = n.map(function (e) {
                return (function (e, t, n, r) {
                  var o = qi({ dateRange: t, localizer: r }),
                    i = o.first,
                    a = o.last,
                    s = r.diff(i, a, "day"),
                    c = r.max(r.startOf(n.start(e), "day"), i),
                    l = r.min(r.ceil(n.end(e), "day"), a),
                    u = Vn(t, function (e) {
                      return r.isSameDate(e, c);
                    }),
                    f = r.diff(c, l, "day");
                  return (
                    (f = Math.min(f, s)),
                    {
                      event: e,
                      span: (f = Math.max(f - r.segmentOffset, 1)),
                      left: u + 1,
                      right: Math.max(u + f, 1),
                    }
                  );
                })(e, t, a, s);
              }),
              d = $i(f, Math.max(o - 1, 1)),
              p = d.levels,
              v = d.extra,
              h = v.length > 0 ? i - 1 : i;
            p.length < h;
          )
            p.push([]);
          return {
            first: l,
            last: u,
            levels: p,
            extra: v,
            range: t,
            slots: t.length,
            clone: function (t) {
              return ea()((0, r.A)((0, r.A)({}, e), t));
            },
            getDateForSlot: function (e) {
              return t[e];
            },
            getSlotForDate: function (e) {
              return t.find(function (t) {
                return s.isSameDate(t, e);
              });
            },
            getEventsForSlot: function (e) {
              return f
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
              return s.continuesPrior(a.start(e), l);
            },
            continuesAfter: function (e) {
              var t = a.start(e),
                n = a.end(e);
              return s.continuesAfter(t, n, u);
            },
          };
        }, Qi);
      }
      var ta = (function (e) {
        (0, c.A)(n, e);
        var t = (0, l.A)(n);
        function n() {
          var e;
          (0, a.A)(this, n);
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
                a = e.props,
                s = a.range,
                c = a.onShowMore,
                l = e.slotMetrics(e.props),
                u = ((r = e.containerRef.current),
                (o = ".rbc-row-bg"),
                Ln(r.querySelectorAll(o)))[0];
              u && (i = u.children[t - 1]),
                c(l.getEventsForSlot(t), s[t - 1], i, t, n);
            }),
            (e.getContainer = function () {
              var t = e.props.container;
              return t ? t() : e.containerRef.current;
            }),
            (e.renderHeadingCell = function (t, n) {
              var r = e.props,
                o = r.renderHeader,
                i = r.getNow,
                a = r.localizer;
              return o({
                date: t,
                key: "header_".concat(n),
                className: E(
                  "rbc-date-cell",
                  a.isSameDate(t, i()) && "rbc-now",
                ),
              });
            }),
            (e.renderDummy = function () {
              var t = e.props,
                n = t.className,
                r = t.range,
                o = t.renderHeader,
                i = t.showAllEvents;
              return f.createElement(
                "div",
                { className: n, ref: e.containerRef },
                f.createElement(
                  "div",
                  {
                    className: E(
                      "rbc-row-content",
                      i && "rbc-row-content-scrollable",
                    ),
                  },
                  o &&
                    f.createElement(
                      "div",
                      { className: "rbc-row", ref: e.headingRowRef },
                      r.map(e.renderHeadingCell),
                    ),
                  f.createElement(
                    "div",
                    { className: "rbc-row", ref: e.eventRowRef },
                    f.createElement(
                      "div",
                      { className: "rbc-row-segment" },
                      f.createElement(
                        "div",
                        { className: "rbc-event" },
                        f.createElement(
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
            (e.containerRef = (0, f.createRef)()),
            (e.headingRowRef = (0, f.createRef)()),
            (e.eventRowRef = (0, f.createRef)()),
            (e.slotMetrics = ea()),
            e
          );
        }
        return (
          (0, s.A)(n, [
            {
              key: "getRowLimit",
              value: function () {
                var e,
                  t = zn(this.eventRowRef.current),
                  n =
                    null !== (e = this.headingRowRef) &&
                    void 0 !== e &&
                    e.current
                      ? zn(this.headingRowRef.current)
                      : 0,
                  r = zn(this.containerRef.current) - n;
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
                  a = e.selectable,
                  s = e.renderForMeasure,
                  c = e.accessors,
                  l = e.getters,
                  u = e.components,
                  d = e.getNow,
                  p = e.renderHeader,
                  v = e.onSelect,
                  h = e.localizer,
                  m = e.onSelectStart,
                  g = e.onSelectEnd,
                  y = e.onDoubleClick,
                  b = e.onKeyPress,
                  w = e.resourceId,
                  A = e.longPressThreshold,
                  D = e.isAllDay,
                  S = e.resizable,
                  k = e.showAllEvents;
                if (s) return this.renderDummy();
                var O = this.slotMetrics(this.props),
                  x = O.levels,
                  M = O.extra,
                  R = k ? Ji : qo,
                  _ = u.weekWrapper,
                  T = {
                    selected: i,
                    accessors: c,
                    getters: l,
                    localizer: h,
                    components: u,
                    onSelect: v,
                    onDoubleClick: y,
                    onKeyPress: b,
                    resourceId: w,
                    slotMetrics: O,
                    resizable: S,
                  };
                return f.createElement(
                  "div",
                  { className: o, role: "rowgroup", ref: this.containerRef },
                  f.createElement(Ii, {
                    localizer: h,
                    date: t,
                    getNow: d,
                    rtl: n,
                    range: r,
                    selectable: a,
                    container: this.getContainer,
                    getters: l,
                    onSelectStart: m,
                    onSelectEnd: g,
                    onSelectSlot: this.handleSelectSlot,
                    components: u,
                    longPressThreshold: A,
                    resourceId: w,
                  }),
                  f.createElement(
                    "div",
                    {
                      className: E(
                        "rbc-row-content",
                        k && "rbc-row-content-scrollable",
                      ),
                      role: "row",
                    },
                    p &&
                      f.createElement(
                        "div",
                        { className: "rbc-row ", ref: this.headingRowRef },
                        r.map(this.renderHeadingCell),
                      ),
                    f.createElement(
                      R,
                      null,
                      f.createElement(
                        _,
                        Object.assign({ isAllDay: D }, T, {
                          rtl: this.props.rtl,
                        }),
                        x.map(function (e, t) {
                          return f.createElement(
                            Vi,
                            Object.assign({ key: t, segments: e }, T),
                          );
                        }),
                        !!M.length &&
                          f.createElement(
                            Zi,
                            Object.assign(
                              { segments: M, onShowMore: this.handleShowMore },
                              T,
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
      })(f.Component);
      ta.defaultProps = { minRows: 0, maxRows: 1 / 0 };
      var na = function (e) {
          var t = e.label;
          return f.createElement(
            "span",
            { role: "columnheader", "aria-sort": "none" },
            t,
          );
        },
        ra = function (e) {
          var t = e.label,
            n = e.drilldownView,
            r = e.onDrillDown;
          return n
            ? f.createElement(
                "button",
                {
                  type: "button",
                  className: "rbc-button-link",
                  onClick: r,
                  role: "cell",
                },
                t,
              )
            : f.createElement("span", null, t);
        },
        oa = ["date", "className"],
        ia = (function (e) {
          (0, c.A)(n, e);
          var t = (0, l.A)(n);
          function n() {
            var e;
            (0, a.A)(this, n);
            for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
              i[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(i))).getContainer =
                function () {
                  return e.containerRef.current;
                }),
              (e.renderWeek = function (t, n) {
                var r = e.props,
                  o = r.events,
                  i = r.components,
                  a = r.selectable,
                  s = r.getNow,
                  c = r.selected,
                  l = r.date,
                  u = r.localizer,
                  d = r.longPressThreshold,
                  p = r.accessors,
                  v = r.getters,
                  h = r.showAllEvents,
                  m = e.state,
                  g = m.needLimitMeasure,
                  y = m.rowLimit,
                  b = (function (e, t, n, r, o) {
                    return e.filter(function (e) {
                      return Bi(e, t, n, r, o);
                    });
                  })((0, ce.A)(o), t[0], t[t.length - 1], p, u);
                return (
                  b.sort(function (e, t) {
                    return Ui(e, t, p, u);
                  }),
                  f.createElement(ta, {
                    key: n,
                    ref: 0 === n ? e.slotRowRef : void 0,
                    container: e.getContainer,
                    className: "rbc-month-row",
                    getNow: s,
                    date: l,
                    range: t,
                    events: b,
                    maxRows: h ? 1 / 0 : y,
                    selected: c,
                    selectable: a,
                    components: i,
                    accessors: p,
                    getters: v,
                    localizer: u,
                    renderHeader: e.readerDateHeading,
                    renderForMeasure: g,
                    onShowMore: e.handleShowMore,
                    onSelect: e.handleSelectEvent,
                    onDoubleClick: e.handleDoubleClickEvent,
                    onKeyPress: e.handleKeyPressEvent,
                    onSelectSlot: e.handleSelectSlot,
                    longPressThreshold: d,
                    rtl: e.props.rtl,
                    resizable: e.props.resizable,
                    showAllEvents: h,
                  })
                );
              }),
              (e.readerDateHeading = function (t) {
                var n = t.date,
                  r = t.className,
                  i = (0, o.A)(t, oa),
                  a = e.props,
                  s = a.date,
                  c = a.getDrilldownView,
                  l = a.localizer,
                  u = l.neq(n, s, "month"),
                  d = l.isSameDate(n, s),
                  p = c(n),
                  v = l.format(n, "dateFormat"),
                  h = e.props.components.dateHeader || ra;
                return f.createElement(
                  "div",
                  Object.assign({}, i, {
                    className: E(r, u && "rbc-off-range", d && "rbc-current"),
                    role: "cell",
                  }),
                  f.createElement(h, {
                    label: v,
                    date: n,
                    drilldownView: p,
                    isOffRange: u,
                    onDrillDown: function (t) {
                      return e.handleHeadingClick(n, p, t);
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
                var a = e.props,
                  s = a.popup,
                  c = a.onDrillDown,
                  l = a.onShowMore,
                  u = a.getDrilldownView,
                  f = a.doShowMoreDrillDown;
                if ((e.clearSelection(), s)) {
                  var d = Ce(r, e.containerRef.current);
                  e.setState({
                    overlay: { date: n, events: t, position: d, target: i },
                  });
                } else f && Zo(c, [n, u(n) || Go.DAY]);
                Zo(l, [t, n, o]);
              }),
              (e.overlayDisplay = function () {
                e.setState({ overlay: null });
              }),
              (e.state = { rowLimit: 5, needLimitMeasure: !0, date: null }),
              (e.containerRef = (0, f.createRef)()),
              (e.slotRowRef = (0, f.createRef)()),
              (e._bgRows = []),
              (e._pendingSelection = []),
              e
            );
          }
          return (
            (0, s.A)(
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
                            Ie(function () {
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
                      i = ge(o, 7);
                    return (
                      (this._weekCount = i.length),
                      f.createElement(
                        "div",
                        {
                          className: E("rbc-month-view", r),
                          role: "table",
                          "aria-label": "Month View",
                          ref: this.containerRef,
                        },
                        f.createElement(
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
                      a = r.header || na;
                    return n.range(o, i, "day").map(function (e, t) {
                      return f.createElement(
                        "div",
                        { key: "header_" + t, className: "rbc-header" },
                        f.createElement(a, {
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
                      a = o.localizer,
                      s = o.components,
                      c = o.getters,
                      l = o.selected,
                      u = o.popupOffset,
                      d = o.handleDragStart;
                    return f.createElement(_i, {
                      overlay: r,
                      accessors: i,
                      localizer: a,
                      components: s,
                      getters: c,
                      selected: l,
                      popupOffset: u,
                      ref: this.containerRef,
                      handleKeyPressEvent: this.handleKeyPressEvent,
                      handleSelectEvent: this.handleSelectEvent,
                      handleDoubleClickEvent: this.handleDoubleClickEvent,
                      handleDragStart: d,
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
        })(f.Component);
      (ia.range = function (e, t) {
        var n = t.localizer;
        return { start: n.firstVisibleDay(e, n), end: n.lastVisibleDay(e, n) };
      }),
        (ia.navigate = function (e, t, n) {
          var r = n.localizer;
          switch (t) {
            case $o:
              return r.add(e, -1, "month");
            case Bo:
              return r.add(e, 1, "month");
            default:
              return e;
          }
        }),
        (ia.title = function (e, t) {
          return t.localizer.format(e, "monthHeaderFormat");
        });
      var aa = function (e) {
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
      function sa(e) {
        for (
          var t = e.min,
            n = e.max,
            r = e.step,
            o = e.timeslots,
            i = e.localizer,
            a = aa({ start: t, end: n, step: r, timeslots: o, localizer: i }),
            s = 1 + i.getTotalMin(t, n),
            c = i.getMinutesFromMidnight(t),
            l = Math.ceil((s - 1) / (r * o)),
            u = l * o,
            f = new Array(l),
            d = new Array(u),
            p = 0;
          p < l;
          p++
        ) {
          f[p] = new Array(o);
          for (var v = 0; v < o; v++) {
            var h = p * o + v,
              m = h * r;
            d[h] = f[p][v] = i.getSlotDate(t, c, m);
          }
        }
        var g = d.length * r;
        function y(e) {
          var n = i.diff(t, e, "minutes") + i.getDstOffset(t, e);
          return Math.min(n, s);
        }
        return (
          d.push(i.getSlotDate(t, c, g)),
          {
            groups: f,
            update: function (e) {
              return aa(e) !== a ? sa(e) : this;
            },
            dateIsInGroup: function (e, t) {
              var r = f[t + 1];
              return i.inRange(e, f[t][0], r ? r[0] : n, "minutes");
            },
            nextSlot: function (e) {
              var t = d[Math.min(d.indexOf(e) + 1, d.length - 1)];
              return t === e && (t = i.add(e, r, "minutes")), t;
            },
            closestSlotToPosition: function (e) {
              var t = Math.min(d.length - 1, Math.max(0, Math.floor(e * u)));
              return d[t];
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
              if (i.lt(e, t, "minutes")) return d[0];
              if (i.gt(e, n, "minutes")) return d[d.length - 1];
              var a = i.diff(t, e, "minutes");
              return d[(a - (a % r)) / r + o];
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
            getRange: function (e, o, a, s) {
              a || (e = i.min(n, i.max(t, e))),
                s || (o = i.min(n, i.max(t, o)));
              var c = y(e),
                l = y(o),
                f =
                  l > r * u && !i.eq(n, o)
                    ? ((c - r) / (r * u)) * 100
                    : (c / (r * u)) * 100;
              return {
                top: f,
                height: (l / (r * u)) * 100 - f,
                start: y(e),
                startDate: e,
                end: y(o),
                endDate: o,
              };
            },
            getCurrentTimePosition: function (e) {
              return (y(e) / (r * u)) * 100;
            },
          }
        );
      }
      var ca = (function () {
        function e(t, n) {
          var r = n.accessors,
            o = n.slotMetrics;
          (0, a.A)(this, e);
          var i = o.getRange(r.start(t), r.end(t)),
            s = i.start,
            c = i.startDate,
            l = i.end,
            u = i.endDate,
            f = i.top,
            d = i.height;
          (this.start = s),
            (this.end = l),
            (this.startMs = +c),
            (this.endMs = +u),
            (this.top = f),
            (this.height = d),
            (this.data = t);
        }
        return (
          (0, s.A)(e, [
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
      function la(e, t, n) {
        return (
          Math.abs(t.start - e.start) < n ||
          (t.start > e.start && t.start < e.end)
        );
      }
      function ua(e) {
        for (
          var t = e.events,
            n = e.minimumStartDifference,
            r = e.slotMetrics,
            o = e.accessors,
            i = (function (e) {
              for (
                var t = gr(e, [
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
                      var a = t.splice(o, 1)[0];
                      n.push(a);
                    }
                    break;
                  }
                }
              }
              return n;
            })(
              t.map(function (e) {
                return new ca(e, { slotMetrics: r, accessors: o });
              }),
            ),
            a = [],
            s = function () {
              var e = i[c],
                t = a.find(function (t) {
                  return t.end > e.start || Math.abs(e.start - t.start) < n;
                });
              if (!t) return (e.rows = []), a.push(e), 1;
              e.container = t;
              for (var r = null, o = t.rows.length - 1; !r && o >= 0; o--)
                la(t.rows[o], e, n) && (r = t.rows[o]);
              r
                ? (r.leaves.push(e), (e.row = r))
                : ((e.leaves = []), t.rows.push(e));
            },
            c = 0;
          c < i.length;
          c++
        )
          s();
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
      function fa(e, t, n) {
        for (var r = 0; r < e.friends.length; ++r)
          if (!(n.indexOf(e.friends[r]) > -1)) {
            (t = t > e.friends[r].idx ? t : e.friends[r].idx),
              n.push(e.friends[r]);
            var o = fa(e.friends[r], t, n);
            t = t > o ? t : o;
          }
        return t;
      }
      var da = {
        overlap: ua,
        "no-overlap": function (e) {
          var t = ua({
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
                a = o.style.top + o.style.height,
                s = r + 1;
              s < t.length;
              ++s
            ) {
              var c = t[s],
                l = c.style.top,
                u = c.style.top + c.style.height;
              ((l >= i && u <= a) || (u > i && u <= a) || (l >= i && l < a)) &&
                (o.friends.push(c), c.friends.push(o));
            }
          for (var f = 0; f < t.length; ++f) {
            for (var d = t[f], p = [], v = 0; v < 100; ++v) p.push(1);
            for (var h = 0; h < d.friends.length; ++h)
              void 0 !== d.friends[h].idx && (p[d.friends[h].idx] = 0);
            d.idx = p.indexOf(1);
          }
          for (var m = 0; m < t.length; ++m) {
            var g;
            if (!t[m].size) {
              var y = [];
              (g = 100 / (fa(t[m], 0, y) + 1)), (t[m].size = g);
              for (var b = 0; b < y.length; ++b) y[b].size = g;
            }
          }
          for (var w = 0; w < t.length; ++w) {
            var A = t[w];
            A.style.left = A.idx * A.size;
            for (var E = 0, D = 0; D < A.friends.length; ++D) {
              var S = A.friends[D].idx;
              E = E > S ? E : S;
            }
            E <= A.idx && (A.size = 100 - A.idx * A.size);
            var k = 0 === A.idx ? 0 : 3;
            (A.style.width = "calc(".concat(A.size, "% - ").concat(k, "px)")),
              (A.style.height = "calc(".concat(A.style.height, "% - 2px)")),
              (A.style.xOffset = "calc("
                .concat(A.style.left, "% + ")
                .concat(k, "px)"));
          }
          return t;
        },
      };
      var pa = (function (e) {
        (0, c.A)(n, e);
        var t = (0, l.A)(n);
        function n() {
          return (0, a.A)(this, n), t.apply(this, arguments);
        }
        return (
          (0, s.A)(n, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.renderSlot,
                  n = e.resource,
                  r = e.group,
                  o = e.getters,
                  i = e.components,
                  a = (void 0 === i ? {} : i).timeSlotWrapper,
                  s = void 0 === a ? qo : a,
                  c = o ? o.slotGroupProp(r) : {};
                return f.createElement(
                  "div",
                  Object.assign({ className: "rbc-timeslot-group" }, c),
                  r.map(function (e, r) {
                    var i = o ? o.slotProp(e, n) : {};
                    return f.createElement(
                      s,
                      { key: r, value: e, resource: n },
                      f.createElement(
                        "div",
                        Object.assign({}, i, {
                          className: E("rbc-time-slot", i.className),
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
      })(f.Component);
      function va(e) {
        return "string" == typeof e ? e : e + "%";
      }
      function ha(e) {
        var t = e.style,
          n = e.className,
          o = e.event,
          i = e.accessors,
          a = e.rtl,
          s = e.selected,
          c = e.label,
          l = e.continuesPrior,
          u = e.continuesAfter,
          d = e.getters,
          p = e.onClick,
          v = e.onDoubleClick,
          h = e.isBackgroundEvent,
          m = e.onKeyPress,
          g = e.components,
          y = g.event,
          b = g.eventWrapper,
          w = i.title(o),
          A = i.tooltip(o),
          D = i.end(o),
          S = i.start(o),
          k = d.eventProp(o, S, D, s),
          O = t.height,
          x = t.top,
          M = t.width,
          R = t.xOffset,
          _ = [
            f.createElement(
              "div",
              { key: "1", className: "rbc-event-label" },
              c,
            ),
            f.createElement(
              "div",
              { key: "2", className: "rbc-event-content" },
              y ? f.createElement(y, { event: o, title: w }) : w,
            ),
          ],
          T = h
            ? (0, r.A)(
                (0, r.A)({}, k.style),
                {},
                (0, se.A)(
                  {
                    top: va(x),
                    height: va(O),
                    width: "calc(".concat(M, " + 10px)"),
                  },
                  a ? "right" : "left",
                  va(Math.max(0, R)),
                ),
              )
            : (0, r.A)(
                (0, r.A)({}, k.style),
                {},
                (0, se.A)(
                  { top: va(x), width: va(M), height: va(O) },
                  a ? "right" : "left",
                  va(R),
                ),
              );
        return f.createElement(
          b,
          Object.assign({ type: "time" }, e),
          f.createElement(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: p,
              onDoubleClick: v,
              style: T,
              onKeyPress: m,
              title: A ? ("string" == typeof c ? c + ": " : "") + A : void 0,
              className: E(
                h ? "rbc-background-event" : "rbc-event",
                n,
                k.className,
                {
                  "rbc-selected": s,
                  "rbc-event-continues-earlier": l,
                  "rbc-event-continues-later": u,
                },
              ),
            },
            _,
          ),
        );
      }
      var ma = function (e) {
          var t = e.children,
            n = e.className,
            r = e.style,
            o = e.innerRef;
          return f.createElement("div", { className: n, style: r, ref: o }, t);
        },
        ga = f.forwardRef(function (e, t) {
          return f.createElement(ma, Object.assign({}, e, { innerRef: t }));
        }),
        ya = ["dayProp"],
        ba = ["eventContainerWrapper"],
        wa = (function (e) {
          (0, c.A)(n, e);
          var t = (0, l.A)(n);
          function n() {
            var e;
            (0, a.A)(this, n);
            for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++)
              i[s] = arguments[s];
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
                  a = i.rtl,
                  s = i.selected,
                  c = i.accessors,
                  l = i.localizer,
                  u = i.getters,
                  d = i.components,
                  p = i.step,
                  v = i.timeslots,
                  h = i.dayLayoutAlgorithm,
                  m = i.resizable,
                  g = (0, Jn.A)(e).slotMetrics,
                  y = l.messages,
                  b = (function (e) {
                    e.events,
                      e.minimumStartDifference,
                      e.slotMetrics,
                      e.accessors;
                    var t,
                      n = e.dayLayoutAlgorithm,
                      r = n;
                    return (
                      n in da && (r = da[n]),
                      (t = r) && t.constructor && t.call && t.apply
                        ? r.apply(this, arguments)
                        : []
                    );
                  })({
                    events: n,
                    accessors: c,
                    slotMetrics: g,
                    minimumStartDifference: Math.ceil((p * v) / 2),
                    dayLayoutAlgorithm: h,
                  });
                return b.map(function (t, n) {
                  var i,
                    p = t.event,
                    v = t.style,
                    h = c.end(p),
                    b = c.start(p),
                    w = "eventTimeRangeFormat",
                    A = g.startsBeforeDay(b),
                    E = g.startsAfterDay(h);
                  A
                    ? (w = "eventTimeRangeEndFormat")
                    : E && (w = "eventTimeRangeStartFormat"),
                    (i = A && E ? y.allDay : l.format({ start: b, end: h }, w));
                  var D = A || g.startsBefore(b),
                    S = E || g.startsAfter(h);
                  return f.createElement(ha, {
                    style: v,
                    event: p,
                    label: i,
                    key: "evt_" + n,
                    getters: u,
                    rtl: a,
                    components: d,
                    continuesPrior: D,
                    continuesAfter: S,
                    accessors: c,
                    resource: e.props.resource,
                    selected: Si(p, s),
                    onClick: function (t) {
                      return e._select(
                        (0, r.A)(
                          (0, r.A)({}, p),
                          {},
                          { sourceResource: e.props.resource },
                        ),
                        t,
                      );
                    },
                    onDoubleClick: function (t) {
                      return e._doubleClick(p, t);
                    },
                    isBackgroundEvent: o,
                    onKeyPress: function (t) {
                      return e._keyPress(p, t);
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
                  a = (e._selector = new zi(
                    function () {
                      return t;
                    },
                    { longPressThreshold: o },
                  )),
                  s = function (t) {
                    var n = e.props.onSelecting,
                      r = e.state || {},
                      o = c(t),
                      a = o.startDate,
                      s = o.endDate;
                    (n &&
                      ((i.eq(r.startDate, a, "minutes") &&
                        i.eq(r.endDate, s, "minutes")) ||
                        !1 ===
                          n({
                            start: a,
                            end: s,
                            resourceId: e.props.resource,
                          }))) ||
                      (e.state.start === o.start &&
                        e.state.end === o.end &&
                        e.state.selecting === o.selecting) ||
                      e.setState(o);
                  },
                  c = function (n) {
                    var o = e.slotMetrics.closestSlotFromPoint(n, Li(t));
                    e.state.selecting || (e._initialSlot = o);
                    var a = e._initialSlot;
                    i.lte(a, o)
                      ? (o = e.slotMetrics.nextSlot(o))
                      : i.gt(a, o) && (a = e.slotMetrics.nextSlot(a));
                    var s = e.slotMetrics.getRange(i.min(a, o), i.max(a, o));
                    return (0, r.A)(
                      (0, r.A)({}, s),
                      {},
                      {
                        selecting: !0,
                        top: "".concat(s.top, "%"),
                        height: "".concat(s.height, "%"),
                      },
                    );
                  },
                  l = function (t, n) {
                    if (!Ci(e.containerRef.current, t)) {
                      var r = c(t),
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
                a.on("selecting", s),
                  a.on("selectStart", s),
                  a.on("beforeSelect", function (t) {
                    if ("ignoreEvents" === e.props.selectable)
                      return !Ci(e.containerRef.current, t);
                  }),
                  a.on("click", function (e) {
                    return l(e, "click");
                  }),
                  a.on("doubleClick", function (e) {
                    return l(e, "doubleClick");
                  }),
                  a.on("select", function (t) {
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
                  a.on("reset", function () {
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
                    a = t.box,
                    s = n,
                    c = [];
                  e.props.localizer.lte(s, r);
                )
                  c.push(s), (s = new Date(+s + 60 * e.props.step * 1e3));
                Zo(e.props.onSelectSlot, {
                  slots: c,
                  start: n,
                  end: r,
                  resourceId: e.props.resource,
                  action: o,
                  bounds: i,
                  box: a,
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
              (e.slotMetrics = sa(e.props)),
              (e.containerRef = (0, f.createRef)()),
              e
            );
          }
          return (
            (0, s.A)(n, [
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
                    a = n.date,
                    s = n.min,
                    c = n.max,
                    l = i.neq(e.getNow(), r(), "minutes");
                  if (e.isNow !== o || l) {
                    if ((this.clearTimeIndicatorInterval(), o)) {
                      var u =
                        !l &&
                        i.eq(e.date, a, "minutes") &&
                        t.timeIndicatorPosition ===
                          this.state.timeIndicatorPosition;
                      this.setTimeIndicatorPositionUpdateInterval(u);
                    }
                  } else
                    o &&
                      (i.neq(e.min, s, "minutes") ||
                        i.neq(e.max, c, "minutes")) &&
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
                    a = e.resource,
                    s = e.accessors,
                    c = e.localizer,
                    l = e.getters,
                    u = l.dayProp,
                    d = (0, o.A)(l, ya),
                    p = e.components,
                    v = p.eventContainerWrapper,
                    h = (0, o.A)(p, ba),
                    m = this.slotMetrics,
                    g = this.state,
                    y = g.selecting,
                    b = g.top,
                    w = g.height,
                    A = { start: g.startDate, end: g.endDate },
                    D = u(n),
                    S = D.className,
                    k = D.style,
                    O = h.dayColumnWrapper || ga;
                  return f.createElement(
                    O,
                    {
                      ref: this.containerRef,
                      date: t,
                      style: k,
                      className: E(
                        S,
                        "rbc-day-slot",
                        "rbc-time-column",
                        i && "rbc-now",
                        i && "rbc-today",
                        y && "rbc-slot-selecting",
                      ),
                      slotMetrics: m,
                    },
                    m.groups.map(function (e, t) {
                      return f.createElement(pa, {
                        key: t,
                        group: e,
                        resource: a,
                        getters: d,
                        components: h,
                      });
                    }),
                    f.createElement(
                      v,
                      {
                        localizer: c,
                        resource: a,
                        accessors: s,
                        getters: d,
                        components: h,
                        slotMetrics: m,
                      },
                      f.createElement(
                        "div",
                        { className: E("rbc-events-container", r && "rtl") },
                        this.renderEvents({
                          events: this.props.backgroundEvents,
                          isBackgroundEvent: !0,
                        }),
                        this.renderEvents({ events: this.props.events }),
                      ),
                    ),
                    y &&
                      f.createElement(
                        "div",
                        {
                          className: "rbc-slot-selection",
                          style: { top: b, height: w },
                        },
                        f.createElement(
                          "span",
                          null,
                          c.format(A, "selectRangeFormat"),
                        ),
                      ),
                    i &&
                      this.intervalTriggered &&
                      f.createElement("div", {
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
        })(f.Component);
      wa.defaultProps = { dragThroughEvents: !0, timeslots: 2 };
      var Aa = function (e) {
          var t = e.min,
            n = e.max,
            r = e.timeslots,
            o = e.step,
            i = e.localizer,
            a = e.getNow,
            s = e.resource,
            c = e.components,
            l = e.getters,
            d = e.gutterRef,
            p = c.timeGutterWrapper,
            v = (0, f.useMemo)(
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
            h = v.start,
            m = v.end,
            g = (0, f.useState)(
              sa({ min: h, max: m, timeslots: r, step: o, localizer: i }),
            ),
            y = (0, u.A)(g, 2),
            b = y[0],
            w = y[1];
          (0, f.useEffect)(
            function () {
              b &&
                w(
                  b.update({
                    min: h,
                    max: m,
                    timeslots: r,
                    step: o,
                    localizer: i,
                  }),
                );
            },
            [
              null == h ? void 0 : h.toISOString(),
              null == m ? void 0 : m.toISOString(),
              r,
              o,
            ],
          );
          var A = (0, f.useCallback)(
            function (e, t) {
              if (t) return null;
              var n = b.dateIsInGroup(a(), t);
              return f.createElement(
                "span",
                { className: E("rbc-label", n && "rbc-now") },
                i.format(e, "timeGutterFormat"),
              );
            },
            [b, i, a],
          );
          return f.createElement(
            p,
            { slotMetrics: b },
            f.createElement(
              "div",
              { className: "rbc-time-gutter rbc-time-column", ref: d },
              b.groups.map(function (e, t) {
                return f.createElement(pa, {
                  key: t,
                  group: e,
                  resource: s,
                  components: c,
                  renderSlot: A,
                  getters: l,
                });
              }),
            ),
          );
        },
        Ea = f.forwardRef(function (e, t) {
          return f.createElement(Aa, Object.assign({ gutterRef: t }, e));
        }),
        Da = function (e) {
          var t = e.label;
          return f.createElement(f.Fragment, null, t);
        },
        Sa = (function (e) {
          (0, c.A)(n, e);
          var t = (0, l.A)(n);
          function n() {
            var e;
            (0, a.A)(this, n);
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
                  a = n.getNow,
                  s = n.range,
                  c = n.getters,
                  l = n.localizer,
                  u = n.accessors,
                  d = n.components,
                  p = n.resizable,
                  v = u.resourceId(t),
                  h = t
                    ? r.filter(function (e) {
                        return u.resource(e) === v;
                      })
                    : r;
                return f.createElement(ta, {
                  isAllDay: !0,
                  rtl: o,
                  getNow: a,
                  minRows: 2,
                  maxRows: e.props.allDayMaxRows + 1,
                  range: s,
                  events: h,
                  resourceId: v,
                  className: "rbc-allday-cell",
                  selectable: i,
                  selected: e.props.selected,
                  components: d,
                  accessors: u,
                  getters: c,
                  localizer: l,
                  onSelect: e.props.onSelectEvent,
                  onShowMore: e.props.onShowMore,
                  onDoubleClick: e.props.onDoubleClickEvent,
                  onKeyPress: e.props.onKeyPressEvent,
                  onSelectSlot: e.props.onSelectSlot,
                  longPressThreshold: e.props.longPressThreshold,
                  resizable: p,
                });
              }),
              e
            );
          }
          return (
            (0, s.A)(n, [
              {
                key: "renderHeaderCells",
                value: function (e) {
                  var t = this,
                    n = this.props,
                    r = n.localizer,
                    o = n.getDrilldownView,
                    i = n.getNow,
                    a = n.getters.dayProp,
                    s = n.components.header,
                    c = void 0 === s ? na : s,
                    l = i();
                  return e.map(function (e, n) {
                    var i = o(e),
                      s = r.format(e, "dayFormat"),
                      u = a(e),
                      d = u.className,
                      p = u.style,
                      v = f.createElement(c, {
                        date: e,
                        label: s,
                        localizer: r,
                      });
                    return f.createElement(
                      "div",
                      {
                        key: n,
                        style: p,
                        className: E(
                          "rbc-header",
                          d,
                          r.isSameDate(e, l) && "rbc-today",
                        ),
                      },
                      i
                        ? f.createElement(
                            "button",
                            {
                              type: "button",
                              className: "rbc-button-link",
                              onClick: function (n) {
                                return t.handleHeaderClick(e, i, n);
                              },
                            },
                            v,
                          )
                        : f.createElement("span", null, v),
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
                    a = t.events,
                    s = t.getNow,
                    c = t.accessors,
                    l = t.selectable,
                    d = t.components,
                    p = t.getters,
                    v = t.scrollRef,
                    h = t.localizer,
                    m = t.isOverflowing,
                    g = t.components,
                    y = g.timeGutterHeader,
                    b = g.resourceHeader,
                    w = void 0 === b ? Da : b,
                    A = t.resizable,
                    D = {};
                  m &&
                    (D[r ? "marginLeft" : "marginRight"] = "".concat(
                      br() - 1,
                      "px",
                    ));
                  var S = o.groupEvents(a);
                  return f.createElement(
                    "div",
                    {
                      style: D,
                      ref: v,
                      className: E("rbc-time-header", m && "rbc-overflowing"),
                    },
                    f.createElement(
                      "div",
                      {
                        className: "rbc-label rbc-time-header-gutter",
                        style: { width: n, minWidth: n, maxWidth: n },
                      },
                      y && f.createElement(y, null),
                    ),
                    o.map(function (t, n) {
                      var o = (0, u.A)(t, 2),
                        a = o[0],
                        v = o[1];
                      return f.createElement(
                        "div",
                        { className: "rbc-time-header-content", key: a || n },
                        v &&
                          f.createElement(
                            "div",
                            {
                              className: "rbc-row rbc-row-resource",
                              key: "resource_".concat(n),
                            },
                            f.createElement(
                              "div",
                              { className: "rbc-header" },
                              f.createElement(w, {
                                index: n,
                                label: c.resourceTitle(v),
                                resource: v,
                              }),
                            ),
                          ),
                        f.createElement(
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
                        f.createElement(ta, {
                          isAllDay: !0,
                          rtl: r,
                          getNow: s,
                          minRows: 2,
                          maxRows: e.props.allDayMaxRows + 1,
                          range: i,
                          events: S.get(a) || [],
                          resourceId: v && a,
                          className: "rbc-allday-cell",
                          selectable: l,
                          selected: e.props.selected,
                          components: d,
                          accessors: c,
                          getters: p,
                          localizer: h,
                          onSelect: e.props.onSelectEvent,
                          onShowMore: e.props.onShowMore,
                          onDoubleClick: e.props.onDoubleClickEvent,
                          onKeyPress: e.props.onKeyPressEvent,
                          onSelectSlot: e.props.onSelectSlot,
                          longPressThreshold: e.props.longPressThreshold,
                          resizable: A,
                        }),
                      );
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component),
        ka = {};
      var Oa = (function (e) {
        (0, c.A)(n, e);
        var t = (0, l.A)(n);
        function n(e) {
          var o;
          return (
            (0, a.A)(this, n),
            ((o = t.call(this, e)).handleScroll = function (e) {
              o.scrollRef.current &&
                (o.scrollRef.current.scrollLeft = e.target.scrollLeft);
            }),
            (o.handleResize = function () {
              Fe(o.rafHandle), (o.rafHandle = Ie(o.checkOverflow));
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
            (o.handleShowMore = function (e, t, n, i, a) {
              var s = o.props,
                c = s.popup,
                l = s.onDrillDown,
                u = s.onShowMore,
                f = s.getDrilldownView,
                d = s.doShowMoreDrillDown;
              if ((o.clearSelection(), c)) {
                var p = Ce(n, o.containerRef.current);
                o.setState({
                  overlay: {
                    date: t,
                    events: e,
                    position: (0, r.A)((0, r.A)({}, p), {}, { width: "200px" }),
                    target: a,
                  },
                });
              } else d && Zo(l, [t, f(t) || Go.DAY]);
              Zo(u, [e, t, i]);
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
                      : [n([ka, null], 0)];
                  },
                  groupEvents: function (n) {
                    var r = new Map();
                    return e
                      ? (n.forEach(function (e) {
                          var n = t.resource(e) || ka;
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
                      : (r.set(ka, n), r);
                  },
                };
              })(e, t);
            })),
            (o.state = { gutterWidth: void 0, isOverflowing: null }),
            (o.scrollRef = f.createRef()),
            (o.contentRef = f.createRef()),
            (o.containerRef = f.createRef()),
            (o._scrollRatio = null),
            (o.gutterRef = (0, f.createRef)()),
            o
          );
        }
        return (
          (0, s.A)(n, [
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
                  Fe(this.rafHandle),
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
                  a = i.min,
                  s = i.max,
                  c = i.components,
                  l = i.accessors,
                  d = i.localizer,
                  p = i.dayLayoutAlgorithm,
                  v = this.memoizedResources(this.props.resources, l),
                  h = v.groupEvents(t),
                  m = v.groupEvents(n);
                return v.map(function (t, n) {
                  var i = (0, u.A)(t, 2),
                    v = i[0],
                    g = i[1];
                  return e.map(function (e, t) {
                    var i = (h.get(v) || []).filter(function (t) {
                        return d.inRange(e, l.start(t), l.end(t), "day");
                      }),
                      u = (m.get(v) || []).filter(function (t) {
                        return d.inRange(e, l.start(t), l.end(t), "day");
                      });
                    return f.createElement(
                      wa,
                      Object.assign({}, o.props, {
                        localizer: d,
                        min: d.merge(e, a),
                        max: d.merge(e, s),
                        resource: g && v,
                        components: c,
                        isNow: d.isSameDate(e, r),
                        key: n + "-" + t,
                        date: e,
                        events: i,
                        backgroundEvents: u,
                        dayLayoutAlgorithm: p,
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
                  a = t.rtl,
                  s = t.selected,
                  c = t.getNow,
                  l = t.resources,
                  u = t.components,
                  d = t.accessors,
                  p = t.getters,
                  v = t.localizer,
                  h = t.min,
                  m = t.max,
                  g = t.showMultiDayTimes,
                  y = t.longPressThreshold,
                  b = t.resizable;
                i = i || this.state.gutterWidth;
                var w = o[0],
                  A = o[o.length - 1];
                this.slots = o.length;
                var D = [],
                  S = [],
                  k = [];
                return (
                  n.forEach(function (e) {
                    if (Bi(e, w, A, d, v)) {
                      var t = d.start(e),
                        n = d.end(e);
                      d.allDay(e) ||
                      v.startAndEndAreDateOnly(t, n) ||
                      (!g && !v.isSameDate(t, n))
                        ? D.push(e)
                        : S.push(e);
                    }
                  }),
                  r.forEach(function (e) {
                    Bi(e, w, A, d, v) && k.push(e);
                  }),
                  D.sort(function (e, t) {
                    return Ui(e, t, d, v);
                  }),
                  f.createElement(
                    "div",
                    {
                      className: E(
                        "rbc-time-view",
                        l && "rbc-time-view-resources",
                      ),
                      ref: this.containerRef,
                    },
                    f.createElement(Sa, {
                      range: o,
                      events: D,
                      width: i,
                      rtl: a,
                      getNow: c,
                      localizer: v,
                      selected: s,
                      allDayMaxRows: this.props.showAllEvents
                        ? 1 / 0
                        : null !== (e = this.props.allDayMaxRows) &&
                            void 0 !== e
                          ? e
                          : 1 / 0,
                      resources: this.memoizedResources(l, d),
                      selectable: this.props.selectable,
                      accessors: d,
                      getters: p,
                      components: u,
                      scrollRef: this.scrollRef,
                      isOverflowing: this.state.isOverflowing,
                      longPressThreshold: y,
                      onSelectSlot: this.handleSelectAllDaySlot,
                      onSelectEvent: this.handleSelectEvent,
                      onShowMore: this.handleShowMore,
                      onDoubleClickEvent: this.props.onDoubleClickEvent,
                      onKeyPressEvent: this.props.onKeyPressEvent,
                      onDrillDown: this.props.onDrillDown,
                      getDrilldownView: this.props.getDrilldownView,
                      resizable: b,
                    }),
                    this.props.popup && this.renderOverlay(),
                    f.createElement(
                      "div",
                      {
                        ref: this.contentRef,
                        className: "rbc-time-content",
                        onScroll: this.handleScroll,
                      },
                      f.createElement(Ea, {
                        date: w,
                        ref: this.gutterRef,
                        localizer: v,
                        min: v.merge(w, h),
                        max: v.merge(w, m),
                        step: this.props.step,
                        getNow: this.props.getNow,
                        timeslots: this.props.timeslots,
                        components: u,
                        className: "rbc-time-gutter",
                        getters: p,
                      }),
                      this.renderEvents(o, S, k, c()),
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
                  a = o.localizer,
                  s = o.components,
                  c = o.getters,
                  l = o.selected,
                  u = o.popupOffset,
                  d = o.handleDragStart;
                return f.createElement(_i, {
                  overlay: r,
                  accessors: i,
                  localizer: a,
                  components: s,
                  getters: c,
                  selected: l,
                  popupOffset: u,
                  ref: this.containerRef,
                  handleKeyPressEvent: this.handleKeyPressEvent,
                  handleSelectEvent: this.handleSelectEvent,
                  handleDoubleClickEvent: this.handleDoubleClickEvent,
                  handleDragStart: d,
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
                            ? wr(e.gutterRef.current)
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
                  a = o.diff(t, n, "milliseconds");
                this._scrollRatio = i / a;
              },
            },
          ]),
          n
        );
      })(f.Component);
      Oa.defaultProps = { step: 30, timeslots: 2 };
      var xa = [
          "date",
          "localizer",
          "min",
          "max",
          "scrollToTime",
          "enableAutoScroll",
        ],
        Ma = (function (e) {
          (0, c.A)(n, e);
          var t = (0, l.A)(n);
          function n() {
            return (0, a.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, s.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    r = e.localizer,
                    i = e.min,
                    a = void 0 === i ? r.startOf(new Date(), "day") : i,
                    s = e.max,
                    c = void 0 === s ? r.endOf(new Date(), "day") : s,
                    l = e.scrollToTime,
                    u = void 0 === l ? r.startOf(new Date(), "day") : l,
                    d = e.enableAutoScroll,
                    p = void 0 === d || d,
                    v = (0, o.A)(e, xa),
                    h = n.range(t, { localizer: r });
                  return f.createElement(
                    Oa,
                    Object.assign({}, v, {
                      range: h,
                      eventOffset: 10,
                      localizer: r,
                      min: a,
                      max: c,
                      scrollToTime: u,
                      enableAutoScroll: p,
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      (Ma.range = function (e, t) {
        return [t.localizer.startOf(e, "day")];
      }),
        (Ma.navigate = function (e, t, n) {
          var r = n.localizer;
          switch (t) {
            case $o:
              return r.add(e, -1, "day");
            case Bo:
              return r.add(e, 1, "day");
            default:
              return e;
          }
        }),
        (Ma.title = function (e, t) {
          return t.localizer.format(e, "dayHeaderFormat");
        });
      var Ra = [
          "date",
          "localizer",
          "min",
          "max",
          "scrollToTime",
          "enableAutoScroll",
        ],
        _a = (function (e) {
          (0, c.A)(n, e);
          var t = (0, l.A)(n);
          function n() {
            return (0, a.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, s.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    r = e.localizer,
                    i = e.min,
                    a = void 0 === i ? r.startOf(new Date(), "day") : i,
                    s = e.max,
                    c = void 0 === s ? r.endOf(new Date(), "day") : s,
                    l = e.scrollToTime,
                    u = void 0 === l ? r.startOf(new Date(), "day") : l,
                    d = e.enableAutoScroll,
                    p = void 0 === d || d,
                    v = (0, o.A)(e, Ra),
                    h = n.range(t, this.props);
                  return f.createElement(
                    Oa,
                    Object.assign({}, v, {
                      range: h,
                      eventOffset: 15,
                      localizer: r,
                      min: a,
                      max: c,
                      scrollToTime: u,
                      enableAutoScroll: p,
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      (_a.defaultProps = Oa.defaultProps),
        (_a.navigate = function (e, t, n) {
          var r = n.localizer;
          switch (t) {
            case $o:
              return r.add(e, -1, "week");
            case Bo:
              return r.add(e, 1, "week");
            default:
              return e;
          }
        }),
        (_a.range = function (e, t) {
          var n = t.localizer,
            r = n.startOfWeek(),
            o = n.startOf(e, "week", r),
            i = n.endOf(e, "week", r);
          return n.range(o, i);
        }),
        (_a.title = function (e, t) {
          var n = t.localizer,
            r = kr(_a.range(e, { localizer: n })),
            o = r[0],
            i = r.slice(1);
          return n.format({ start: o, end: i.pop() }, "dayRangeHeaderFormat");
        });
      var Ta = [
        "date",
        "localizer",
        "min",
        "max",
        "scrollToTime",
        "enableAutoScroll",
      ];
      function Ca(e, t) {
        return _a.range(e, t).filter(function (e) {
          return -1 === [6, 0].indexOf(e.getDay());
        });
      }
      var Pa,
        Na = (function (e) {
          (0, c.A)(n, e);
          var t = (0, l.A)(n);
          function n() {
            return (0, a.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, s.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    n = e.localizer,
                    r = e.min,
                    i = void 0 === r ? n.startOf(new Date(), "day") : r,
                    a = e.max,
                    s = void 0 === a ? n.endOf(new Date(), "day") : a,
                    c = e.scrollToTime,
                    l = void 0 === c ? n.startOf(new Date(), "day") : c,
                    u = e.enableAutoScroll,
                    d = void 0 === u || u,
                    p = (0, o.A)(e, Ta),
                    v = Ca(t, this.props);
                  return f.createElement(
                    Oa,
                    Object.assign({}, p, {
                      range: v,
                      eventOffset: 15,
                      localizer: n,
                      min: i,
                      max: s,
                      scrollToTime: l,
                      enableAutoScroll: d,
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      function za(e) {
        var t = e.accessors,
          n = e.components,
          r = e.date,
          o = e.events,
          i = e.getters,
          a = e.length,
          s = e.localizer,
          c = e.onDoubleClickEvent,
          l = e.onSelectEvent,
          u = e.selected,
          d = (0, f.useRef)(null),
          p = (0, f.useRef)(null),
          v = (0, f.useRef)(null),
          h = (0, f.useRef)(null),
          m = (0, f.useRef)(null);
        (0, f.useEffect)(function () {
          y();
        });
        var g = function (e, r) {
            var o = "",
              i = n.time,
              a = s.messages.allDay,
              c = t.end(r),
              l = t.start(r);
            return (
              t.allDay(r) ||
                (s.eq(l, c)
                  ? (a = s.format(l, "agendaTimeFormat"))
                  : s.isSameDate(l, c)
                    ? (a = s.format(
                        { start: l, end: c },
                        "agendaTimeRangeFormat",
                      ))
                    : s.isSameDate(e, l)
                      ? (a = s.format(l, "agendaTimeFormat"))
                      : s.isSameDate(e, c) &&
                        (a = s.format(c, "agendaTimeFormat"))),
              s.gt(e, l, "day") && (o = "rbc-continues-prior"),
              s.lt(e, c, "day") && (o += " rbc-continues-after"),
              f.createElement(
                "span",
                { className: o.trim() },
                i ? f.createElement(i, { event: r, day: e, label: a }) : a,
              )
            );
          },
          y = function () {
            if (m.current) {
              var e = d.current,
                t = m.current.firstChild;
              if (t) {
                var n = h.current.scrollHeight > h.current.clientHeight,
                  r = [],
                  o = r;
                (r = [wr(t.children[0]), wr(t.children[1])]),
                  (o[0] === r[0] && o[1] === r[1]) ||
                    ((p.current.style.width = r[0] + "px"),
                    (v.current.style.width = r[1] + "px")),
                  n
                    ? ((0, Or.A)(e, "rbc-header-overflowing"),
                      (e.style.marginRight = br() + "px"))
                    : (0, xr.A)(e, "rbc-header-overflowing");
              }
            }
          },
          b = s.messages,
          w = s.add(r, a, "day"),
          A = s.range(r, w, "day");
        return (
          (o = o.filter(function (e) {
            return Bi(e, s.startOf(r, "day"), s.endOf(w, "day"), t, s);
          })).sort(function (e, n) {
            return +t.start(e) - +t.start(n);
          }),
          f.createElement(
            "div",
            { className: "rbc-agenda-view" },
            0 !== o.length
              ? f.createElement(
                  f.Fragment,
                  null,
                  f.createElement(
                    "table",
                    { ref: d, className: "rbc-agenda-table" },
                    f.createElement(
                      "thead",
                      null,
                      f.createElement(
                        "tr",
                        null,
                        f.createElement(
                          "th",
                          { className: "rbc-header", ref: p },
                          b.date,
                        ),
                        f.createElement(
                          "th",
                          { className: "rbc-header", ref: v },
                          b.time,
                        ),
                        f.createElement(
                          "th",
                          { className: "rbc-header" },
                          b.event,
                        ),
                      ),
                    ),
                  ),
                  f.createElement(
                    "div",
                    { className: "rbc-agenda-content", ref: h },
                    f.createElement(
                      "table",
                      { className: "rbc-agenda-table" },
                      f.createElement(
                        "tbody",
                        { ref: m },
                        A.map(function (e, r) {
                          return (function (e, r, o) {
                            var a = n.event,
                              d = n.date;
                            return (r = r.filter(function (n) {
                              return Bi(
                                n,
                                s.startOf(e, "day"),
                                s.endOf(e, "day"),
                                t,
                                s,
                              );
                            })).map(function (n, p) {
                              var v = t.title(n),
                                h = t.end(n),
                                m = t.start(n),
                                y = i.eventProp(n, m, h, Si(n, u)),
                                b = 0 === p && s.format(e, "agendaDateFormat"),
                                w =
                                  0 === p &&
                                  f.createElement(
                                    "td",
                                    {
                                      rowSpan: r.length,
                                      className: "rbc-agenda-date-cell",
                                    },
                                    d
                                      ? f.createElement(d, { day: e, label: b })
                                      : b,
                                  );
                              return f.createElement(
                                "tr",
                                {
                                  key: o + "_" + p,
                                  className: y.className,
                                  style: y.style,
                                },
                                w,
                                f.createElement(
                                  "td",
                                  { className: "rbc-agenda-time-cell" },
                                  g(e, n),
                                ),
                                f.createElement(
                                  "td",
                                  {
                                    className: "rbc-agenda-event-cell",
                                    onClick: function (e) {
                                      return l && l(n, e);
                                    },
                                    onDoubleClick: function (e) {
                                      return c && c(n, e);
                                    },
                                  },
                                  a
                                    ? f.createElement(a, { event: n, title: v })
                                    : v,
                                ),
                              );
                            }, []);
                          })(e, o, r);
                        }),
                      ),
                    ),
                  ),
                )
              : f.createElement(
                  "span",
                  { className: "rbc-agenda-empty" },
                  b.noEventsInRange,
                ),
          )
        );
      }
      (Na.defaultProps = Oa.defaultProps),
        (Na.range = Ca),
        (Na.navigate = _a.navigate),
        (Na.title = function (e, t) {
          var n = t.localizer,
            r = kr(Ca(e, { localizer: n })),
            o = r[0],
            i = r.slice(1);
          return n.format({ start: o, end: i.pop() }, "dayRangeHeaderFormat");
        }),
        (za.defaultProps = { length: 30 }),
        (za.range = function (e, t) {
          var n = t.length,
            r = void 0 === n ? za.defaultProps.length : n;
          return { start: e, end: t.localizer.add(e, r, "day") };
        }),
        (za.navigate = function (e, t, n) {
          var r = n.length,
            o = void 0 === r ? za.defaultProps.length : r,
            i = n.localizer;
          switch (t) {
            case $o:
              return i.add(e, -o, "day");
            case Bo:
              return i.add(e, o, "day");
            default:
              return e;
          }
        }),
        (za.title = function (e, t) {
          var n = t.length,
            r = void 0 === n ? za.defaultProps.length : n,
            o = t.localizer,
            i = o.add(e, r, "day");
          return o.format({ start: e, end: i }, "agendaHeaderFormat");
        });
      var ja =
          ((Pa = {}),
          (0, se.A)(Pa, Go.MONTH, ia),
          (0, se.A)(Pa, Go.WEEK, _a),
          (0, se.A)(Pa, Go.WORK_WEEK, Na),
          (0, se.A)(Pa, Go.DAY, Ma),
          (0, se.A)(Pa, Go.AGENDA, za),
          Pa),
        La = ["action", "date", "today"];
      var Fa = (function (e) {
        (0, c.A)(n, e);
        var t = (0, l.A)(n);
        function n() {
          var e;
          (0, a.A)(this, n);
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
          (0, s.A)(n, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.localizer.messages,
                  n = e.label;
                return f.createElement(
                  "div",
                  { className: "rbc-toolbar" },
                  f.createElement(
                    "span",
                    { className: "rbc-btn-group" },
                    f.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, Ko) },
                      t.today,
                    ),
                    f.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, $o) },
                      t.previous,
                    ),
                    f.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, Bo) },
                      t.next,
                    ),
                  ),
                  f.createElement(
                    "span",
                    { className: "rbc-toolbar-label" },
                    n,
                  ),
                  f.createElement(
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
                    return f.createElement(
                      "button",
                      {
                        type: "button",
                        key: n,
                        className: E({ "rbc-active": r === n }),
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
      })(f.Component);
      var Ia = function (e) {
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
        Wa = ["view", "date", "getNow", "onNavigate"],
        Ha = [
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
      function Ya(e) {
        if (Array.isArray(e)) return e;
        for (var t = [], n = 0, r = Object.entries(e); n < r.length; n++) {
          var o = (0, u.A)(r[n], 2),
            i = o[0];
          o[1] && t.push(i);
        }
        return t;
      }
      var Va = (function (e) {
        (0, c.A)(n, e);
        var t = (0, l.A)(n);
        function n() {
          var e;
          (0, a.A)(this, n);
          for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++)
            c[l] = arguments[l];
          return (
            ((e = t.call.apply(t, [this].concat(c))).getViews = function () {
              var t = e.props.views;
              return Array.isArray(t)
                ? Ho(
                    t,
                    function (e, t) {
                      return (e[t] = ja[t]);
                    },
                    {},
                  )
                : "object" === (0, i.A)(t)
                  ? Vo(t, function (e, t) {
                      return !0 === e ? ja[t] : e;
                    })
                  : ja;
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
                a = o.localizer;
              i && n.range && i(n.range(t, { localizer: a }), r);
            }),
            (e.handleNavigate = function (t, n) {
              var i = e.props,
                a = i.view,
                s = i.date,
                c = i.getNow,
                l = i.onNavigate,
                u = (0, o.A)(i, Wa),
                f = e.getView(),
                d = c();
              (s = (function (e, t) {
                var n = t.action,
                  r = t.date,
                  i = t.today,
                  a = (0, o.A)(t, La);
                switch (((e = "string" == typeof e ? ja[e] : e), n)) {
                  case Ko:
                    r = i || new Date();
                    break;
                  case Uo:
                    break;
                  default:
                    p()(
                      e && "function" == typeof e.navigate,
                      "Calendar View components must implement a static `.navigate(date, action)` method.s",
                    ),
                      (r = e.navigate(r, n, a));
                }
                return r;
              })(
                f,
                (0, r.A)(
                  (0, r.A)({}, u),
                  {},
                  { action: t, date: n || s || d, today: d },
                ),
              )),
                l(s, a, t),
                e.handleRangeChange(s, f);
            }),
            (e.handleViewChange = function (t) {
              t !== e.props.view &&
                (function (e, t) {
                  return -1 !== Ya(t.views).indexOf(e);
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
                : (n && e.handleViewChange(n), e.handleNavigate(Uo, t));
            }),
            (e.state = { context: n.getContext(e.props) }),
            e
          );
        }
        return (
          (0, s.A)(
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
                    a = e.style,
                    s = e.className,
                    c = e.elementProps,
                    l = e.date,
                    u = e.getNow,
                    d = e.length,
                    p = e.showMultiDayTimes,
                    v = e.onShowMore,
                    h = e.doShowMoreDrillDown;
                  e.components, e.formats, e.messages, e.culture;
                  var m = (0, o.A)(e, Ha);
                  l = l || u();
                  var g = this.getView(),
                    y = this.state.context,
                    b = y.accessors,
                    w = y.components,
                    A = y.getters,
                    D = y.localizer,
                    S = y.viewNames,
                    k = w.toolbar || Fa,
                    O = g.title(l, { localizer: D, length: d });
                  return f.createElement(
                    "div",
                    Object.assign({}, c, {
                      className: E(s, "rbc-calendar", m.rtl && "rbc-rtl"),
                      style: a,
                    }),
                    n &&
                      f.createElement(k, {
                        date: l,
                        view: t,
                        views: S,
                        label: O,
                        onView: this.handleViewChange,
                        onNavigate: this.handleNavigate,
                        localizer: D,
                      }),
                    f.createElement(
                      g,
                      Object.assign({}, m, {
                        events: r,
                        backgroundEvents: i,
                        date: l,
                        getNow: u,
                        length: d,
                        localizer: D,
                        getters: A,
                        components: w,
                        accessors: b,
                        showMultiDayTimes: p,
                        getDrilldownView: this.getDrilldownView,
                        onNavigate: this.handleNavigate,
                        onDrillDown: this.handleDrillDown,
                        onSelectEvent: this.handleSelectEvent,
                        onDoubleClickEvent: this.handleDoubleClickEvent,
                        onKeyPressEvent: this.handleKeyPressEvent,
                        onSelectSlot: this.handleSelectSlot,
                        onShowMore: v,
                        doShowMoreDrillDown: h,
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
                    a = e.titleAccessor,
                    s = e.resourceAccessor,
                    c = e.resourceIdAccessor,
                    l = e.resourceTitleAccessor,
                    u = e.eventPropGetter,
                    f = e.backgroundEventPropGetter,
                    d = e.slotPropGetter,
                    p = e.slotGroupPropGetter,
                    v = e.dayPropGetter,
                    h = e.view,
                    m = e.views,
                    g = e.localizer,
                    y = e.culture,
                    b = e.messages,
                    w = void 0 === b ? {} : b,
                    A = e.components,
                    E = void 0 === A ? {} : A,
                    D = e.formats,
                    S = void 0 === D ? {} : D,
                    k = Ya(m);
                  return {
                    viewNames: k,
                    localizer: wi(
                      g,
                      y,
                      S,
                      (function (e) {
                        return (0, r.A)((0, r.A)({}, Ai), e);
                      })(w),
                    ),
                    getters: {
                      eventProp: function () {
                        return (u && u.apply(void 0, arguments)) || {};
                      },
                      backgroundEventProp: function () {
                        return (f && f.apply(void 0, arguments)) || {};
                      },
                      slotProp: function () {
                        return (d && d.apply(void 0, arguments)) || {};
                      },
                      slotGroupProp: function () {
                        return (p && p.apply(void 0, arguments)) || {};
                      },
                      dayProp: function () {
                        return (v && v.apply(void 0, arguments)) || {};
                      },
                    },
                    components: jo(E[h] || {}, Co(E, k), {
                      eventWrapper: qo,
                      backgroundEventWrapper: qo,
                      eventContainerWrapper: qo,
                      dateCellWrapper: qo,
                      weekWrapper: qo,
                      timeSlotWrapper: qo,
                      timeGutterWrapper: qo,
                    }),
                    accessors: {
                      start: Ia(t),
                      end: Ia(n),
                      allDay: Ia(o),
                      tooltip: Ia(i),
                      title: Ia(a),
                      resource: Ia(s),
                      resourceId: Ia(c),
                      resourceTitle: Ia(l),
                    },
                  };
                },
              },
            ],
          ),
          n
        );
      })(f.Component);
      Va.defaultProps = {
        events: [],
        backgroundEvents: [],
        elementProps: {},
        popup: !1,
        toolbar: !0,
        view: Go.MONTH,
        views: [Go.MONTH, Go.WEEK, Go.DAY, Go.AGENDA],
        step: 30,
        length: 30,
        allDayMaxRows: 1 / 0,
        doShowMoreDrillDown: !0,
        drilldownView: Go.DAY,
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
      var qa = (function e(t, n, r) {
          void 0 === r && (r = []);
          var o,
            i = t.displayName || t.name || "Component",
            a =
              !!(o = t) &&
              ("function" != typeof o ||
                (o.prototype && o.prototype.isReactComponent)),
            s = Object.keys(n),
            c = s.map(m);
          !a && r.length && p()(!1);
          var l = (function (e) {
            function o() {
              for (
                var t, o = arguments.length, i = new Array(o), a = 0;
                a < o;
                a++
              )
                i[a] = arguments[a];
              ((t = e.call.apply(e, [this].concat(i)) || this).handlers =
                Object.create(null)),
                s.forEach(function (e) {
                  var r = n[e];
                  t.handlers[r] = function (n) {
                    if (t.props[r]) {
                      var o;
                      t._notifying = !0;
                      for (
                        var i = arguments.length,
                          a = new Array(i > 1 ? i - 1 : 0),
                          s = 1;
                        s < i;
                        s++
                      )
                        a[s - 1] = arguments[s];
                      (o = t.props)[r].apply(o, [n].concat(a)),
                        (t._notifying = !1);
                    }
                    t.unmounted ||
                      t.setState(function (t) {
                        var r,
                          o = t.values;
                        return {
                          values: (0, y.A)(
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
              var c = Object.create(null);
              return (
                s.forEach(function (e) {
                  c[e] = t.props[m(e)];
                }),
                (t.state = { values: c, prevProps: {} }),
                t
              );
            }
            (0, b.A)(o, e);
            var i = o.prototype;
            return (
              (i.shouldComponentUpdate = function () {
                return !this._notifying;
              }),
              (o.getDerivedStateFromProps = function (e, t) {
                var n = t.values,
                  r = t.prevProps,
                  o = {
                    values: (0, y.A)(Object.create(null), n),
                    prevProps: {},
                  };
                return (
                  s.forEach(function (t) {
                    (o.prevProps[t] = e[t]),
                      !h(e, t) && h(r, t) && (o.values[t] = e[m(t)]);
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
                  o = (0, g.A)(n, ["innerRef"]);
                c.forEach(function (e) {
                  delete o[e];
                });
                var i = {};
                return (
                  s.forEach(function (t) {
                    var n = e.props[t];
                    i[t] = void 0 !== n ? n : e.state.values[t];
                  }),
                  f.createElement(
                    t,
                    (0, y.A)({}, o, i, this.handlers, {
                      ref: r || this.attachRef,
                    }),
                  )
                );
              }),
              o
            );
          })(f.Component);
          (0, w.polyfill)(l),
            (l.displayName = "Uncontrolled(" + i + ")"),
            (l.propTypes = (0, y.A)(
              { innerRef: function () {} },
              (function (e, t) {
                var n = {};
                return (
                  Object.keys(e).forEach(function (e) {
                    n[m(e)] = v;
                  }),
                  n
                );
              })(n),
            )),
            r.forEach(function (e) {
              l.prototype[e] = function () {
                var t;
                return (t = this.inner)[e].apply(t, arguments);
              };
            });
          var u = l;
          return (
            f.forwardRef &&
              ((u = f.forwardRef(function (e, t) {
                return f.createElement(
                  l,
                  (0, y.A)({}, e, {
                    innerRef: t,
                    __source: {
                      fileName:
                        "/Users/jquense/src/uncontrollable/src/uncontrollable.js",
                      lineNumber: 128,
                    },
                    __self: this,
                  }),
                );
              })).propTypes = l.propTypes),
            (u.ControlledComponent = t),
            (u.deferControlTo = function (t, r, o) {
              return void 0 === r && (r = {}), e(t, (0, y.A)({}, n, r), o);
            }),
            u
          );
        })(Va, {
          view: "onView",
          date: "onNavigate",
          selected: "onSelectEvent",
        }),
        $a = function (e, t, n) {
          var r = e.start,
            o = e.end;
          return n.format(r, "LT", t) + " – " + n.format(o, "LT", t);
        },
        Ba = {
          dateFormat: "DD",
          dayFormat: "DD ddd",
          weekdayFormat: "ddd",
          selectRangeFormat: $a,
          eventTimeRangeFormat: $a,
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
          agendaTimeRangeFormat: $a,
        };
      function Ka(e) {
        var t = e ? e.toLowerCase() : e;
        return "FullYear" === t ? (t = "year") : t || (t = void 0), t;
      }
      function Ua(e) {
        function t(t, n) {
          var r,
            o,
            i = e(t).local(),
            a = e(n).local();
          if (!e.tz)
            return (
              i.toDate().getTimezoneOffset() - a.toDate().getTimezoneOffset()
            );
          var s =
            null !==
              (r =
                null == i || null === (o = i._z) || void 0 === o
                  ? void 0
                  : o.name) && void 0 !== r
              ? r
              : e.tz.guess();
          return e.tz.zone(s).utcOffset(+i) - e.tz.zone(s).utcOffset(+a);
        }
        function n(t, n, r) {
          var o = Ka(r);
          return [o ? e(t).startOf(o) : e(t), o ? e(n).startOf(o) : e(n), o];
        }
        function r() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            n = Ka(arguments.length > 1 ? arguments[1] : void 0);
          return n ? e(t).startOf(n).toDate() : e(t).toDate();
        }
        function o(e, t, r) {
          var o = n(e, t, r),
            i = (0, u.A)(o, 3),
            a = i[0],
            s = i[1],
            c = i[2];
          return a.isSame(s, c);
        }
        function i(e, t, r) {
          var o = n(e, t, r),
            i = (0, u.A)(o, 3),
            a = i[0],
            s = i[1],
            c = i[2];
          return a.isSameOrBefore(s, c);
        }
        function a(t, n, r) {
          var o = Ka(r);
          return e(t).add(n, o).toDate();
        }
        function s(e, t) {
          var n = Ka(t),
            i = r(e, n);
          return o(i, e) ? i : a(i, 1, n);
        }
        function c(t, n) {
          var r = Ka(
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "day",
            ),
            o = e(t);
          return e(n).diff(o, r);
        }
        function l(t) {
          return e(t).startOf("month").startOf("week").toDate();
        }
        function f(t) {
          return e(t).endOf("month").endOf("week").toDate();
        }
        return new bi({
          formats: Ba,
          firstOfWeek: function (t) {
            var n = t ? e.localeData(t) : e.localeData();
            return n ? n.firstDayOfWeek() : 0;
          },
          firstVisibleDay: l,
          lastVisibleDay: f,
          visibleDays: function (e) {
            for (var t = l(e), n = f(e), r = []; i(t, n); )
              r.push(t), (t = a(t, 1, "d"));
            return r;
          },
          format: function (t, n, r) {
            return ((o = e(t)), (i = r), i ? o.locale(i) : o).format(n);
            var o, i;
          },
          lt: function (e, t, r) {
            var o = n(e, t, r),
              i = (0, u.A)(o, 3),
              a = i[0],
              s = i[1],
              c = i[2];
            return a.isBefore(s, c);
          },
          lte: i,
          gt: function (e, t, r) {
            var o = n(e, t, r),
              i = (0, u.A)(o, 3),
              a = i[0],
              s = i[1],
              c = i[2];
            return a.isAfter(s, c);
          },
          gte: function (e, t, r) {
            var o = n(e, t, r),
              i = (0, u.A)(o, 3),
              a = i[0],
              s = i[1],
              c = i[2];
            return a.isSameOrBefore(s, c);
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
            var o = Ka(
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "day",
              ),
              i = e(t),
              a = e(n),
              s = e(r);
            return i.isBetween(a, s, o, "[]");
          },
          startOf: r,
          endOf: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              n = Ka(arguments.length > 1 ? arguments[1] : void 0);
            return n ? e(t).endOf(n).toDate() : e(t).toDate();
          },
          range: function (t, n) {
            for (
              var r = Ka(
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "day",
                ),
                o = e(t).toDate(),
                s = [];
              i(o, n);
            )
              s.push(o), (o = a(o, 1, r));
            return s;
          },
          add: a,
          diff: c,
          ceil: s,
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
            return c(e, t, "minutes");
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
              a = e.evtB,
              l = a.start,
              u = a.end,
              f = a.allDay,
              d = +r(n, "day") - +r(l, "day"),
              p = c(n, s(o, "day"), "day"),
              v = c(l, s(u, "day"), "day");
            return (
              d ||
              Math.max(v, 1) - Math.max(p, 1) ||
              !!f - !!i ||
              +n - +l ||
              +o - +u
            );
          },
          inEventRange: function (t) {
            var n = t.event,
              r = n.start,
              o = n.end,
              i = t.range,
              a = i.start,
              s = i.end,
              c = e(r).startOf("day"),
              l = e(o),
              u = e(a),
              f = e(s),
              d = c.isSameOrBefore(f, "day"),
              p = !c.isSame(l, "minutes")
                ? l.isAfter(u, "minutes")
                : l.isSameOrAfter(u, "minutes");
            return d && p;
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
      n.d(t, { E: () => c });
      var r = n(58920),
        o = n(62059),
        i = n(36058),
        a = n(55241),
        s = n(5608),
        c = (0, r.gu)({
          chartName: "BarChart",
          GraphicalChild: o.y,
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: ["axis", "item"],
          axisComponents: [
            { axisType: "xAxis", AxisComp: i.W },
            { axisType: "yAxis", AxisComp: a.h },
          ],
          formatAxisMap: s.pr,
        });
    },
    67501: (e) => {
      "use strict";
      var t = function () {};
      e.exports = t;
    },
    62465: (e, t) => {
      "use strict";
      var n = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        s = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        l = Symbol.for("react.forward_ref"),
        u = Symbol.for("react.suspense"),
        f = Symbol.for("react.memo"),
        d = Symbol.for("react.lazy"),
        p = Symbol.iterator;
      var v = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        h = Object.assign,
        m = {};
      function g(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = m),
          (this.updater = n || v);
      }
      function y() {}
      function b(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = m),
          (this.updater = n || v);
      }
      (g.prototype.isReactComponent = {}),
        (g.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (g.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (y.prototype = g.prototype);
      var w = (b.prototype = new y());
      (w.constructor = b), h(w, g.prototype), (w.isPureReactComponent = !0);
      var A = Array.isArray,
        E = Object.prototype.hasOwnProperty,
        D = { current: null },
        S = { key: !0, ref: !0, __self: !0, __source: !0 };
      function k(e, t, r) {
        var o,
          i = {},
          a = null,
          s = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (s = t.ref),
          void 0 !== t.key && (a = "" + t.key),
          t))
            E.call(t, o) && !S.hasOwnProperty(o) && (i[o] = t[o]);
        var c = arguments.length - 2;
        if (1 === c) i.children = r;
        else if (1 < c) {
          for (var l = Array(c), u = 0; u < c; u++) l[u] = arguments[u + 2];
          i.children = l;
        }
        if (e && e.defaultProps)
          for (o in (c = e.defaultProps)) void 0 === i[o] && (i[o] = c[o]);
        return {
          $$typeof: n,
          type: e,
          key: a,
          ref: s,
          props: i,
          _owner: D.current,
        };
      }
      function O(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n;
      }
      var x = /\/+/g;
      function M(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })("" + e.key)
          : t.toString(36);
      }
      function R(e, t, o, i, a) {
        var s = typeof e;
        ("undefined" !== s && "boolean" !== s) || (e = null);
        var c = !1;
        if (null === e) c = !0;
        else
          switch (s) {
            case "string":
            case "number":
              c = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case n:
                case r:
                  c = !0;
              }
          }
        if (c)
          return (
            (a = a((c = e))),
            (e = "" === i ? "." + M(c, 0) : i),
            A(a)
              ? ((o = ""),
                null != e && (o = e.replace(x, "$&/") + "/"),
                R(a, t, o, "", function (e) {
                  return e;
                }))
              : null != a &&
                (O(a) &&
                  (a = (function (e, t) {
                    return {
                      $$typeof: n,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    a,
                    o +
                      (!a.key || (c && c.key === a.key)
                        ? ""
                        : ("" + a.key).replace(x, "$&/") + "/") +
                      e,
                  )),
                t.push(a)),
            1
          );
        if (((c = 0), (i = "" === i ? "." : i + ":"), A(e)))
          for (var l = 0; l < e.length; l++) {
            var u = i + M((s = e[l]), l);
            c += R(s, t, o, u, a);
          }
        else if (
          ((u = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
          })(e)),
          "function" == typeof u)
        )
          for (e = u.call(e), l = 0; !(s = e.next()).done; )
            c += R((s = s.value), t, o, (u = i + M(s, l++)), a);
        else if ("object" === s)
          throw (
            ((t = String(e)),
            Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t) +
                "). If you meant to render a collection of children, use an array instead.",
            ))
          );
        return c;
      }
      function _(e, t, n) {
        if (null == e) return e;
        var r = [],
          o = 0;
        return (
          R(e, r, "", "", function (e) {
            return t.call(n, e, o++);
          }),
          r
        );
      }
      function T(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()).then(
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 2), (e._result = t));
            },
          ),
            -1 === e._status && ((e._status = 0), (e._result = t));
        }
        if (1 === e._status) return e._result.default;
        throw e._result;
      }
      var C = { current: null },
        P = { transition: null },
        N = {
          ReactCurrentDispatcher: C,
          ReactCurrentBatchConfig: P,
          ReactCurrentOwner: D,
        };
      (t.Fragment = o), (t.createElement = k);
    },
    34062: (e, t, n) => {
      "use strict";
      e.exports = n(62465);
    },
  },
]);
