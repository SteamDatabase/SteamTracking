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
              l = ")" === o[1];
            return (
              ((s ? this.isAfter(i, r) : !this.isBefore(i, r)) &&
                (l ? this.isBefore(a, r) : !this.isAfter(a, r))) ||
              ((s ? this.isBefore(i, r) : !this.isAfter(i, r)) &&
                (l ? this.isAfter(a, r) : !this.isBefore(a, r)))
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
                l = o(a[n]),
                c =
                  s ||
                  l.map(function (e) {
                    return e.slice(0, r);
                  });
              if (!i) return c;
              var u = a.weekStart;
              return c.map(function (e, t) {
                return c[(t + (u || 0)) % 7];
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
            l = function () {
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
            return l.bind(this)();
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
          var l = a.init;
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
            } else l.call(this);
          };
          var c = a.utcOffset;
          a.utcOffset = function (r, o) {
            var i = this.$utils().u;
            if (i(r))
              return this.$u
                ? 0
                : i(this.$offset)
                  ? c.call(this)
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
              var l = this.$u
                ? this.toDate().getTimezoneOffset()
                : -1 * this.utcOffset();
              ((s = this.local().add(a + l, e)).$offset = a),
                (s.$x.$localOffset = l);
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
          var l;
          if (void 0 === t)
            l = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
          else {
            var c = [n, r, o, i, a, s],
              u = 0;
            (l = new Error(
              t.replace(/%s/g, function () {
                return c[u++];
              }),
            )).name = "Invariant Violation";
          }
          throw ((l.framesToPop = 1), l);
        }
      };
    },
    41653: (e, t, n) => {
      "use strict";
      n.d(t, { Vv: () => qa, Pp: () => Zo, ye: () => Xa });
      var r = n(54883),
        o = n(2829),
        i = n(11052),
        a = n(30549),
        s = n(50181),
        l = n(35549),
        c = n(96101),
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
        w = n(42891);
      function b() {
        var e = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state,
        );
        null != e && this.setState(e);
      }
      function A(e) {
        this.setState(
          function (t) {
            var n = this.constructor.getDerivedStateFromProps(e, t);
            return null != n ? n : null;
          }.bind(this),
        );
      }
      function E(e, t) {
        try {
          var n = this.props,
            r = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
        } finally {
          (this.props = n), (this.state = r);
        }
      }
      (b.__suppressDeprecationWarning = !0),
        (A.__suppressDeprecationWarning = !0),
        (E.__suppressDeprecationWarning = !0);
      function D(e) {
        var t,
          n,
          r = "";
        if ("string" == typeof e || "number" == typeof e) r += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (n = D(e[t])) && (r && (r += " "), (r += n));
          else for (t in e) e[t] && (r && (r += " "), (r += t));
        return r;
      }
      const S = function () {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) && (t = D(e)) && (r && (r += " "), (r += t));
        return r;
      };
      var x = n(61410),
        O = n.n(x),
        k = "milliseconds",
        M = "seconds",
        T = "minutes",
        R = "hours",
        _ = "day",
        C = "week",
        P = "month",
        N = "year",
        L = "decade",
        z = "century",
        j = {
          milliseconds: 1,
          seconds: 1e3,
          minutes: 6e4,
          hours: 36e5,
          day: 864e5,
          week: 6048e5,
        },
        F = { month: 1, year: 12, decade: 120, century: 1200 };
      function W(e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0 ? 29 : 28;
      }
      function I(e, t, n) {
        switch (((e = new Date(e)), n)) {
          case k:
          case M:
          case T:
          case R:
          case _:
          case C:
            return (function (e, t) {
              var n = new Date(+e + t);
              return (function (e, t) {
                var n = e.getTimezoneOffset(),
                  r = t.getTimezoneOffset();
                return new Date(+t + (r - n) * j.minutes);
              })(e, n);
            })(e, t * j[n]);
          case P:
          case N:
          case L:
          case z:
            return (function (e, t) {
              var n = e.getFullYear(),
                r = e.getMonth(),
                o = e.getDate(),
                i = 12 * n + r + t,
                a = Math.trunc(i / 12),
                s = i % 12,
                l = Math.min(
                  o,
                  (function (e) {
                    return [31, W(e), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                  })(a)[s],
                ),
                c = new Date(e);
              return (
                c.setFullYear(a), c.setDate(1), c.setMonth(s), c.setDate(l), c
              );
            })(e, t * F[n]);
        }
        throw new TypeError('Invalid units: "' + n + '"');
      }
      function H(e, t, n) {
        return I(e, -t, n);
      }
      function B(e, t, n) {
        switch (((e = new Date(e)), t)) {
          case z:
          case L:
          case N:
            e = ie(e, 0);
          case P:
            e = oe(e, 1);
          case C:
          case _:
            e = ne(e, 0);
          case R:
            e = te(e, 0);
          case T:
            e = ee(e, 0);
          case M:
            e = Q(e, 0);
        }
        return (
          t === L && (e = H(e, ae(e) % 10, "year")),
          t === z && (e = H(e, ae(e) % 100, "year")),
          t === C &&
            (e = (function (e, t, n) {
              var r = (re(e) + 7 - (n || 0)) % 7;
              return void 0 === t ? r : I(e, t - r, _);
            })(e, 0, n)),
          e
        );
      }
      function Y(e, t, n) {
        switch (((e = B((e = new Date(e)), t, n)), t)) {
          case z:
          case L:
          case N:
          case P:
          case C:
            (e = H((e = I(e, 1, t)), 1, _)).setHours(23, 59, 59, 999);
            break;
          case _:
            e.setHours(23, 59, 59, 999);
            break;
          case R:
          case T:
          case M:
            e = H((e = I(e, 1, t)), 1, k);
        }
        return e;
      }
      var U = le(function (e, t) {
          return e === t;
        }),
        V = le(function (e, t) {
          return e !== t;
        }),
        q = le(function (e, t) {
          return e > t;
        }),
        K = le(function (e, t) {
          return e >= t;
        }),
        $ = le(function (e, t) {
          return e < t;
        }),
        G = le(function (e, t) {
          return e <= t;
        });
      function X() {
        return new Date(Math.min.apply(Math, arguments));
      }
      function Z() {
        return new Date(Math.max.apply(Math, arguments));
      }
      function J(e, t, n, r) {
        return (r = r || "day"), (!t || K(e, t, r)) && (!n || G(e, n, r));
      }
      var Q = se("Milliseconds"),
        ee = se("Seconds"),
        te = se("Minutes"),
        ne = se("Hours"),
        re = se("Day"),
        oe = se("Date"),
        ie = se("Month"),
        ae = se("FullYear");
      function se(e) {
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
          return e(+B(t, r), +B(n, r));
        };
      }
      var ce = n(55635),
        ue = n(8950);
      const fe = function (e, t, n) {
        var r = -1,
          o = e.length;
        t < 0 && (t = -t > o ? 0 : o + t),
          (n = n > o ? o : n) < 0 && (n += o),
          (o = t > n ? 0 : (n - t) >>> 0),
          (t >>>= 0);
        for (var i = Array(o); ++r < o; ) i[r] = e[r + t];
        return i;
      };
      var de = n(7e4),
        pe = n(55205),
        ve = 1 / 0;
      const he = function (e) {
        return e
          ? (e = (0, pe.A)(e)) === ve || e === -1 / 0
            ? 17976931348623157e292 * (e < 0 ? -1 : 1)
            : e == e
              ? e
              : 0
          : 0 === e
            ? e
            : 0;
      };
      const me = function (e) {
        var t = he(e),
          n = t % 1;
        return t == t ? (n ? t - n : t) : 0;
      };
      var ge = Math.ceil,
        ye = Math.max;
      const we = function (e, t, n) {
        t = (n ? (0, de.A)(e, t, n) : void 0 === t) ? 1 : ye(me(t), 0);
        var r = null == e ? 0 : e.length;
        if (!r || t < 1) return [];
        for (var o = 0, i = 0, a = Array(ge(r / t)); o < r; )
          a[i++] = fe(e, o, (o += t));
        return a;
      };
      function be(e) {
        return (e && e.ownerDocument) || document;
      }
      function Ae(e, t) {
        return (function (e) {
          var t = be(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var Ee = /([A-Z])/g;
      var De = /^ms-/;
      function Se(e) {
        return (function (e) {
          return e.replace(Ee, "-$1").toLowerCase();
        })(e).replace(De, "-ms-");
      }
      var xe =
        /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      const Oe = function (e, t) {
        var n = "",
          r = "";
        if ("string" == typeof t)
          return (
            e.style.getPropertyValue(Se(t)) || Ae(e).getPropertyValue(Se(t))
          );
        Object.keys(t).forEach(function (o) {
          var i = t[o];
          i || 0 === i
            ? !(function (e) {
                return !(!e || !xe.test(e));
              })(o)
              ? (n += Se(o) + ": " + i + ";")
              : (r += o + "(" + i + ") ")
            : e.style.removeProperty(Se(o));
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
      function Me(e) {
        return "window" in e && e.window === e
          ? e
          : ("nodeType" in (t = e) &&
              t.nodeType === document.DOCUMENT_NODE &&
              e.defaultView) ||
              !1;
        var t;
      }
      function Te(e) {
        var t = "pageXOffset" === e ? "scrollLeft" : "scrollTop";
        return function (n, r) {
          var o = Me(n);
          if (void 0 === r) return o ? o[e] : n[t];
          o ? o.scrollTo(o[e], r) : (n[t] = r);
        };
      }
      const Re = Te("pageXOffset"),
        _e = Te("pageYOffset");
      function Ce(e) {
        var t = be(e),
          n = { top: 0, left: 0, height: 0, width: 0 },
          r = t && t.documentElement;
        return r && ke(r, e)
          ? (void 0 !== e.getBoundingClientRect &&
              (n = e.getBoundingClientRect()),
            (n = {
              top: n.top + _e(r) - (r.clientTop || 0),
              left: n.left + Re(r) - (r.clientLeft || 0),
              width: n.width,
              height: n.height,
            }))
          : n;
      }
      var Pe = function (e) {
        return !!e && "offsetParent" in e;
      };
      function Ne(e, t) {
        var n,
          r = { top: 0, left: 0 };
        if ("fixed" === Oe(e, "position")) n = e.getBoundingClientRect();
        else {
          var o =
            t ||
            (function (e) {
              for (
                var t = be(e), n = e && e.offsetParent;
                Pe(n) &&
                "HTML" !== n.nodeName &&
                "static" === Oe(n, "position");
              )
                n = n.offsetParent;
              return n || t.documentElement;
            })(e);
          (n = Ce(e)),
            "html" !==
              (function (e) {
                return e.nodeName && e.nodeName.toLowerCase();
              })(o) && (r = Ce(o));
          var i = String(Oe(o, "borderTopWidth") || 0);
          r.top += parseInt(i, 10) - _e(o) || 0;
          var a = String(Oe(o, "borderLeftWidth") || 0);
          r.left += parseInt(a, 10) - Re(o) || 0;
        }
        var s = String(Oe(e, "marginTop") || 0),
          l = String(Oe(e, "marginLeft") || 0);
        return (0, y.A)({}, n, {
          top: n.top - r.top - (parseInt(s, 10) || 0),
          left: n.left - r.left - (parseInt(l, 10) || 0),
        });
      }
      const Le = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var ze = new Date().getTime();
      var je = "clearTimeout",
        Fe = function (e) {
          var t = new Date().getTime(),
            n = Math.max(0, 16 - (t - ze)),
            r = setTimeout(e, n);
          return (ze = t), r;
        },
        We = function (e, t) {
          return (
            e + (e ? t[0].toUpperCase() + t.substr(1) : t) + "AnimationFrame"
          );
        };
      Le &&
        ["", "webkit", "moz", "o", "ms"].some(function (e) {
          var t = We(e, "request");
          return (
            t in window &&
              ((je = We(e, "cancel")),
              (Fe = function (e) {
                return window[t](e);
              })),
            !!Fe
          );
        });
      var Ie = function (e) {
          "function" == typeof window[je] && window[je](e);
        },
        He = Fe,
        Be = n(72739);
      function Ye() {
        return (0, f.useState)(null);
      }
      const Ue = (e) =>
        e && "function" != typeof e
          ? (t) => {
              e.current = t;
            }
          : e;
      const Ve = function (e, t) {
        return (0, f.useMemo)(
          () =>
            (function (e, t) {
              const n = Ue(e),
                r = Ue(t);
              return (e) => {
                n && n(e), r && r(e);
              };
            })(e, t),
          [e, t],
        );
      };
      var qe = "top",
        Ke = "bottom",
        $e = "right",
        Ge = "left",
        Xe = "auto",
        Ze = [qe, Ke, $e, Ge],
        Je = "start",
        Qe = "end",
        et = "clippingParents",
        tt = "viewport",
        nt = "popper",
        rt = "reference",
        ot = Ze.reduce(function (e, t) {
          return e.concat([t + "-" + Je, t + "-" + Qe]);
        }, []),
        it = [].concat(Ze, [Xe]).reduce(function (e, t) {
          return e.concat([t, t + "-" + Je, t + "-" + Qe]);
        }, []),
        at = [
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
      const st = function (e) {
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
      function lt(e) {
        return e.split("-")[0];
      }
      function ct(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function ut(e) {
        return e instanceof ct(e).Element || e instanceof Element;
      }
      function ft(e) {
        return e instanceof ct(e).HTMLElement || e instanceof HTMLElement;
      }
      function dt(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof ct(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var pt = Math.max,
        vt = Math.min,
        ht = Math.round;
      function mt() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function gt() {
        return !/^((?!chrome|android).)*safari/i.test(mt());
      }
      function yt(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          o = 1,
          i = 1;
        t &&
          ft(e) &&
          ((o = (e.offsetWidth > 0 && ht(r.width) / e.offsetWidth) || 1),
          (i = (e.offsetHeight > 0 && ht(r.height) / e.offsetHeight) || 1));
        var a = (ut(e) ? ct(e) : window).visualViewport,
          s = !gt() && n,
          l = (r.left + (s && a ? a.offsetLeft : 0)) / o,
          c = (r.top + (s && a ? a.offsetTop : 0)) / i,
          u = r.width / o,
          f = r.height / i;
        return {
          width: u,
          height: f,
          top: c,
          right: l + u,
          bottom: c + f,
          left: l,
          x: l,
          y: c,
        };
      }
      function wt(e) {
        var t = yt(e),
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
        if (n && dt(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function At(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function Et(e) {
        return ct(e).getComputedStyle(e);
      }
      function Dt(e) {
        return ["table", "td", "th"].indexOf(At(e)) >= 0;
      }
      function St(e) {
        return ((ut(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function xt(e) {
        return "html" === At(e)
          ? e
          : e.assignedSlot || e.parentNode || (dt(e) ? e.host : null) || St(e);
      }
      function Ot(e) {
        return ft(e) && "fixed" !== Et(e).position ? e.offsetParent : null;
      }
      function kt(e) {
        for (
          var t = ct(e), n = Ot(e);
          n && Dt(n) && "static" === Et(n).position;
        )
          n = Ot(n);
        return n &&
          ("html" === At(n) ||
            ("body" === At(n) && "static" === Et(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(mt());
                if (
                  /Trident/i.test(mt()) &&
                  ft(e) &&
                  "fixed" === Et(e).position
                )
                  return null;
                var n = xt(e);
                for (
                  dt(n) && (n = n.host);
                  ft(n) && ["html", "body"].indexOf(At(n)) < 0;
                ) {
                  var r = Et(n);
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
      function Mt(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function Tt(e, t, n) {
        return pt(e, vt(t, n));
      }
      function Rt(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function _t(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      const Ct = {
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
            s = lt(n.placement),
            l = Mt(s),
            c = [Ge, $e].indexOf(s) >= 0 ? "height" : "width";
          if (i && a) {
            var u = (function (e, t) {
                return Rt(
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
                    : _t(e, Ze),
                );
              })(o.padding, n),
              f = wt(i),
              d = "y" === l ? qe : Ge,
              p = "y" === l ? Ke : $e,
              v =
                n.rects.reference[c] +
                n.rects.reference[l] -
                a[l] -
                n.rects.popper[c],
              h = a[l] - n.rects.reference[l],
              m = kt(i),
              g = m
                ? "y" === l
                  ? m.clientHeight || 0
                  : m.clientWidth || 0
                : 0,
              y = v / 2 - h / 2,
              w = u[d],
              b = g - f[c] - u[p],
              A = g / 2 - f[c] / 2 + y,
              E = Tt(w, A, b),
              D = l;
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
            bt(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function Pt(e) {
        return e.split("-")[1];
      }
      var Nt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Lt(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          o = e.placement,
          i = e.variation,
          a = e.offsets,
          s = e.position,
          l = e.gpuAcceleration,
          c = e.adaptive,
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
          w = Ge,
          b = qe,
          A = window;
        if (c) {
          var E = kt(n),
            D = "clientHeight",
            S = "clientWidth";
          if (
            (E === ct(n) &&
              "static" !== Et((E = St(n))).position &&
              "absolute" === s &&
              ((D = "scrollHeight"), (S = "scrollWidth")),
            o === qe || ((o === Ge || o === $e) && i === Qe))
          )
            (b = Ke),
              (h -=
                (f && E === A && A.visualViewport
                  ? A.visualViewport.height
                  : E[D]) - r.height),
              (h *= l ? 1 : -1);
          if (o === Ge || ((o === qe || o === Ke) && i === Qe))
            (w = $e),
              (p -=
                (f && E === A && A.visualViewport
                  ? A.visualViewport.width
                  : E[S]) - r.width),
              (p *= l ? 1 : -1);
        }
        var x,
          O = Object.assign({ position: s }, c && Nt),
          k =
            !0 === u
              ? (function (e, t) {
                  var n = e.x,
                    r = e.y,
                    o = t.devicePixelRatio || 1;
                  return { x: ht(n * o) / o || 0, y: ht(r * o) / o || 0 };
                })({ x: p, y: h }, ct(n))
              : { x: p, y: h };
        return (
          (p = k.x),
          (h = k.y),
          l
            ? Object.assign(
                {},
                O,
                (((x = {})[b] = y ? "0" : ""),
                (x[w] = g ? "0" : ""),
                (x.transform =
                  (A.devicePixelRatio || 1) <= 1
                    ? "translate(" + p + "px, " + h + "px)"
                    : "translate3d(" + p + "px, " + h + "px, 0)"),
                x),
              )
            : Object.assign(
                {},
                O,
                (((t = {})[b] = y ? h + "px" : ""),
                (t[w] = g ? p + "px" : ""),
                (t.transform = ""),
                t),
              )
        );
      }
      const zt = {
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
            l = void 0 === s || s,
            c = {
              placement: lt(t.placement),
              variation: Pt(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: o,
              isFixed: "fixed" === t.options.strategy,
            };
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              Lt(
                Object.assign({}, c, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: a,
                  roundOffsets: l,
                }),
              ),
            )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                Lt(
                  Object.assign({}, c, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l,
                  }),
                ),
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement,
            }));
        },
        data: {},
      };
      var jt = { passive: !0 };
      const Ft = {
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
            l = ct(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            i &&
              c.forEach(function (e) {
                e.addEventListener("scroll", n.update, jt);
              }),
            s && l.addEventListener("resize", n.update, jt),
            function () {
              i &&
                c.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, jt);
                }),
                s && l.removeEventListener("resize", n.update, jt);
            }
          );
        },
        data: {},
      };
      var Wt = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function It(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return Wt[e];
        });
      }
      var Ht = { start: "end", end: "start" };
      function Bt(e) {
        return e.replace(/start|end/g, function (e) {
          return Ht[e];
        });
      }
      function Yt(e) {
        var t = ct(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function Ut(e) {
        return yt(St(e)).left + Yt(e).scrollLeft;
      }
      function Vt(e) {
        var t = Et(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function qt(e) {
        return ["html", "body", "#document"].indexOf(At(e)) >= 0
          ? e.ownerDocument.body
          : ft(e) && Vt(e)
            ? e
            : qt(xt(e));
      }
      function Kt(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = qt(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = ct(r),
          a = o ? [i].concat(i.visualViewport || [], Vt(r) ? r : []) : r,
          s = t.concat(a);
        return o ? s : s.concat(Kt(xt(a)));
      }
      function $t(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function Gt(e, t, n) {
        return t === tt
          ? $t(
              (function (e, t) {
                var n = ct(e),
                  r = St(e),
                  o = n.visualViewport,
                  i = r.clientWidth,
                  a = r.clientHeight,
                  s = 0,
                  l = 0;
                if (o) {
                  (i = o.width), (a = o.height);
                  var c = gt();
                  (c || (!c && "fixed" === t)) &&
                    ((s = o.offsetLeft), (l = o.offsetTop));
                }
                return { width: i, height: a, x: s + Ut(e), y: l };
              })(e, n),
            )
          : ut(t)
            ? (function (e, t) {
                var n = yt(e, !1, "fixed" === t);
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
            : $t(
                (function (e) {
                  var t,
                    n = St(e),
                    r = Yt(e),
                    o = null == (t = e.ownerDocument) ? void 0 : t.body,
                    i = pt(
                      n.scrollWidth,
                      n.clientWidth,
                      o ? o.scrollWidth : 0,
                      o ? o.clientWidth : 0,
                    ),
                    a = pt(
                      n.scrollHeight,
                      n.clientHeight,
                      o ? o.scrollHeight : 0,
                      o ? o.clientHeight : 0,
                    ),
                    s = -r.scrollLeft + Ut(e),
                    l = -r.scrollTop;
                  return (
                    "rtl" === Et(o || n).direction &&
                      (s += pt(n.clientWidth, o ? o.clientWidth : 0) - i),
                    { width: i, height: a, x: s, y: l }
                  );
                })(St(e)),
              );
      }
      function Xt(e, t, n, r) {
        var o =
            "clippingParents" === t
              ? (function (e) {
                  var t = Kt(xt(e)),
                    n =
                      ["absolute", "fixed"].indexOf(Et(e).position) >= 0 &&
                      ft(e)
                        ? kt(e)
                        : e;
                  return ut(n)
                    ? t.filter(function (e) {
                        return ut(e) && bt(e, n) && "body" !== At(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          i = [].concat(o, [n]),
          a = i[0],
          s = i.reduce(
            function (t, n) {
              var o = Gt(e, n, r);
              return (
                (t.top = pt(o.top, t.top)),
                (t.right = vt(o.right, t.right)),
                (t.bottom = vt(o.bottom, t.bottom)),
                (t.left = pt(o.left, t.left)),
                t
              );
            },
            Gt(e, a, r),
          );
        return (
          (s.width = s.right - s.left),
          (s.height = s.bottom - s.top),
          (s.x = s.left),
          (s.y = s.top),
          s
        );
      }
      function Zt(e) {
        var t,
          n = e.reference,
          r = e.element,
          o = e.placement,
          i = o ? lt(o) : null,
          a = o ? Pt(o) : null,
          s = n.x + n.width / 2 - r.width / 2,
          l = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case qe:
            t = { x: s, y: n.y - r.height };
            break;
          case Ke:
            t = { x: s, y: n.y + n.height };
            break;
          case $e:
            t = { x: n.x + n.width, y: l };
            break;
          case Ge:
            t = { x: n.x - r.width, y: l };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var c = i ? Mt(i) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (a) {
            case Je:
              t[c] = t[c] - (n[u] / 2 - r[u] / 2);
              break;
            case Qe:
              t[c] = t[c] + (n[u] / 2 - r[u] / 2);
          }
        }
        return t;
      }
      function Jt(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          o = void 0 === r ? e.placement : r,
          i = n.strategy,
          a = void 0 === i ? e.strategy : i,
          s = n.boundary,
          l = void 0 === s ? et : s,
          c = n.rootBoundary,
          u = void 0 === c ? tt : c,
          f = n.elementContext,
          d = void 0 === f ? nt : f,
          p = n.altBoundary,
          v = void 0 !== p && p,
          h = n.padding,
          m = void 0 === h ? 0 : h,
          g = Rt("number" != typeof m ? m : _t(m, Ze)),
          y = d === nt ? rt : nt,
          w = e.rects.popper,
          b = e.elements[v ? y : d],
          A = Xt(
            ut(b) ? b : b.contextElement || St(e.elements.popper),
            l,
            u,
            a,
          ),
          E = yt(e.elements.reference),
          D = Zt({
            reference: E,
            element: w,
            strategy: "absolute",
            placement: o,
          }),
          S = $t(Object.assign({}, w, D)),
          x = d === nt ? S : E,
          O = {
            top: A.top - x.top + g.top,
            bottom: x.bottom - A.bottom + g.bottom,
            left: A.left - x.left + g.left,
            right: x.right - A.right + g.right,
          },
          k = e.modifiersData.offset;
        if (d === nt && k) {
          var M = k[o];
          Object.keys(O).forEach(function (e) {
            var t = [$e, Ke].indexOf(e) >= 0 ? 1 : -1,
              n = [qe, Ke].indexOf(e) >= 0 ? "y" : "x";
            O[e] += M[n] * t;
          });
        }
        return O;
      }
      const Qt = {
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
                l = n.fallbackPlacements,
                c = n.padding,
                u = n.boundary,
                f = n.rootBoundary,
                d = n.altBoundary,
                p = n.flipVariations,
                v = void 0 === p || p,
                h = n.allowedAutoPlacements,
                m = t.options.placement,
                g = lt(m),
                y =
                  l ||
                  (g === m || !v
                    ? [It(m)]
                    : (function (e) {
                        if (lt(e) === Xe) return [];
                        var t = It(e);
                        return [Bt(e), t, Bt(t)];
                      })(m)),
                w = [m].concat(y).reduce(function (e, n) {
                  return e.concat(
                    lt(n) === Xe
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var n = t,
                            r = n.placement,
                            o = n.boundary,
                            i = n.rootBoundary,
                            a = n.padding,
                            s = n.flipVariations,
                            l = n.allowedAutoPlacements,
                            c = void 0 === l ? it : l,
                            u = Pt(r),
                            f = u
                              ? s
                                ? ot
                                : ot.filter(function (e) {
                                    return Pt(e) === u;
                                  })
                              : Ze,
                            d = f.filter(function (e) {
                              return c.indexOf(e) >= 0;
                            });
                          0 === d.length && (d = f);
                          var p = d.reduce(function (t, n) {
                            return (
                              (t[n] = Jt(e, {
                                placement: n,
                                boundary: o,
                                rootBoundary: i,
                                padding: a,
                              })[lt(n)]),
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
                          padding: c,
                          flipVariations: v,
                          allowedAutoPlacements: h,
                        })
                      : n,
                  );
                }, []),
                b = t.rects.reference,
                A = t.rects.popper,
                E = new Map(),
                D = !0,
                S = w[0],
                x = 0;
              x < w.length;
              x++
            ) {
              var O = w[x],
                k = lt(O),
                M = Pt(O) === Je,
                T = [qe, Ke].indexOf(k) >= 0,
                R = T ? "width" : "height",
                _ = Jt(t, {
                  placement: O,
                  boundary: u,
                  rootBoundary: f,
                  altBoundary: d,
                  padding: c,
                }),
                C = T ? (M ? $e : Ge) : M ? Ke : qe;
              b[R] > A[R] && (C = It(C));
              var P = It(C),
                N = [];
              if (
                (i && N.push(_[k] <= 0),
                s && N.push(_[C] <= 0, _[P] <= 0),
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
                var L = function (e) {
                    var t = w.find(function (t) {
                      var n = E.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (S = t), "break";
                  },
                  z = v ? 3 : 1;
                z > 0;
                z--
              ) {
                if ("break" === L(z)) break;
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
      function en(e, t, n) {
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
      function tn(e) {
        return [qe, $e, Ke, Ge].some(function (t) {
          return e[t] >= 0;
        });
      }
      const nn = {
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
            a = it.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = lt(e),
                    o = [Ge, qe].indexOf(r) >= 0 ? -1 : 1,
                    i =
                      "function" == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    a = i[0],
                    s = i[1];
                  return (
                    (a = a || 0),
                    (s = (s || 0) * o),
                    [Ge, $e].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
                  );
                })(n, t.rects, i)),
                e
              );
            }, {}),
            s = a[t.placement],
            l = s.x,
            c = s.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += l),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[r] = a);
        },
      };
      const rn = {
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
            l = n.boundary,
            c = n.rootBoundary,
            u = n.altBoundary,
            f = n.padding,
            d = n.tether,
            p = void 0 === d || d,
            v = n.tetherOffset,
            h = void 0 === v ? 0 : v,
            m = Jt(t, {
              boundary: l,
              rootBoundary: c,
              padding: f,
              altBoundary: u,
            }),
            g = lt(t.placement),
            y = Pt(t.placement),
            w = !y,
            b = Mt(g),
            A = "x" === b ? "y" : "x",
            E = t.modifiersData.popperOffsets,
            D = t.rects.reference,
            S = t.rects.popper,
            x =
              "function" == typeof h
                ? h(Object.assign({}, t.rects, { placement: t.placement }))
                : h,
            O =
              "number" == typeof x
                ? { mainAxis: x, altAxis: x }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, x),
            k = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            M = { x: 0, y: 0 };
          if (E) {
            if (i) {
              var T,
                R = "y" === b ? qe : Ge,
                _ = "y" === b ? Ke : $e,
                C = "y" === b ? "height" : "width",
                P = E[b],
                N = P + m[R],
                L = P - m[_],
                z = p ? -S[C] / 2 : 0,
                j = y === Je ? D[C] : S[C],
                F = y === Je ? -S[C] : -D[C],
                W = t.elements.arrow,
                I = p && W ? wt(W) : { width: 0, height: 0 },
                H = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                B = H[R],
                Y = H[_],
                U = Tt(0, D[C], I[C]),
                V = w
                  ? D[C] / 2 - z - U - B - O.mainAxis
                  : j - U - B - O.mainAxis,
                q = w
                  ? -D[C] / 2 + z + U + Y + O.mainAxis
                  : F + U + Y + O.mainAxis,
                K = t.elements.arrow && kt(t.elements.arrow),
                $ = K ? ("y" === b ? K.clientTop || 0 : K.clientLeft || 0) : 0,
                G = null != (T = null == k ? void 0 : k[b]) ? T : 0,
                X = P + q - G,
                Z = Tt(p ? vt(N, P + V - G - $) : N, P, p ? pt(L, X) : L);
              (E[b] = Z), (M[b] = Z - P);
            }
            if (s) {
              var J,
                Q = "x" === b ? qe : Ge,
                ee = "x" === b ? Ke : $e,
                te = E[A],
                ne = "y" === A ? "height" : "width",
                re = te + m[Q],
                oe = te - m[ee],
                ie = -1 !== [qe, Ge].indexOf(g),
                ae = null != (J = null == k ? void 0 : k[A]) ? J : 0,
                se = ie ? re : te - D[ne] - S[ne] - ae + O.altAxis,
                le = ie ? te + D[ne] + S[ne] - ae - O.altAxis : oe,
                ce =
                  p && ie
                    ? (function (e, t, n) {
                        var r = Tt(e, t, n);
                        return r > n ? n : r;
                      })(se, te, le)
                    : Tt(p ? se : re, te, p ? le : oe);
              (E[A] = ce), (M[A] = ce - te);
            }
            t.modifiersData[r] = M;
          }
        },
        requiresIfExists: ["offset"],
      };
      function on(e, t, n) {
        void 0 === n && (n = !1);
        var r,
          o,
          i = ft(t),
          a =
            ft(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = ht(t.width) / e.offsetWidth || 1,
                r = ht(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          s = St(t),
          l = yt(e, a, n),
          c = { scrollLeft: 0, scrollTop: 0 },
          u = { x: 0, y: 0 };
        return (
          (i || (!i && !n)) &&
            (("body" !== At(t) || Vt(s)) &&
              (c =
                (r = t) !== ct(r) && ft(r)
                  ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop }
                  : Yt(r)),
            ft(t)
              ? (((u = yt(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
              : s && (u.x = Ut(s))),
          {
            x: l.left + c.scrollLeft - u.x,
            y: l.top + c.scrollTop - u.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function an(e) {
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
      var sn = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function ln() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function cn(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          i = void 0 === o ? sn : o;
        return function (e, t, n) {
          void 0 === n && (n = i);
          var o,
            a,
            s = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, sn, i),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            u = {
              state: s,
              setOptions: function (n) {
                var o = "function" == typeof n ? n(s.options) : n;
                f(),
                  (s.options = Object.assign({}, i, s.options, o)),
                  (s.scrollParents = {
                    reference: ut(e)
                      ? Kt(e)
                      : e.contextElement
                        ? Kt(e.contextElement)
                        : [],
                    popper: Kt(t),
                  });
                var a,
                  c,
                  d = (function (e) {
                    var t = an(e);
                    return at.reduce(function (e, n) {
                      return e.concat(
                        t.filter(function (e) {
                          return e.phase === n;
                        }),
                      );
                    }, []);
                  })(
                    ((a = [].concat(r, s.options.modifiers)),
                    (c = a.reduce(function (e, t) {
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
                    Object.keys(c).map(function (e) {
                      return c[e];
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
                      l.push(i || a);
                    }
                  }),
                  u.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = s.elements,
                    t = e.reference,
                    n = e.popper;
                  if (ln(t, n)) {
                    (s.rects = {
                      reference: on(t, kt(n), "fixed" === s.options.strategy),
                      popper: wt(n),
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
                          l = void 0 === a ? {} : a,
                          f = o.name;
                        "function" == typeof i &&
                          (s =
                            i({ state: s, options: l, name: f, instance: u }) ||
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
                f(), (c = !0);
              },
            };
          if (!ln(e, t)) return u;
          function f() {
            l.forEach(function (e) {
              return e();
            }),
              (l = []);
          }
          return (
            u.setOptions(n).then(function (e) {
              !c && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            u
          );
        };
      }
      var un = cn({
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
                  a = Jt(t, { elementContext: "reference" }),
                  s = Jt(t, { altBoundary: !0 }),
                  l = en(a, r),
                  c = en(s, o, i),
                  u = tn(l),
                  f = tn(c);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: l,
                  popperEscapeOffsets: c,
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
                t.modifiersData[n] = Zt({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            zt,
            Ft,
            nn,
            Qt,
            rn,
            Ct,
          ],
        }),
        fn = function (e) {
          return {
            position: e,
            top: "0",
            left: "0",
            opacity: "0",
            pointerEvents: "none",
          };
        },
        dn = { name: "applyStyles", enabled: !1 },
        pn = {
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
        vn = [];
      const hn = function (e, t, n) {
        var r = void 0 === n ? {} : n,
          o = r.enabled,
          i = void 0 === o || o,
          a = r.placement,
          s = void 0 === a ? "bottom" : a,
          l = r.strategy,
          c = void 0 === l ? "absolute" : l,
          u = r.modifiers,
          d = void 0 === u ? vn : u,
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
          w = st(
            (0, f.useState)({
              placement: s,
              update: h,
              forceUpdate: m,
              attributes: {},
              styles: { popper: fn(c), arrow: {} },
            }),
          ),
          b = w[0],
          A = w[1],
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
                  strategy: c,
                  modifiers: [].concat(d, [E, dn]),
                });
            },
            [c, s, E, i],
          ),
          (0, f.useEffect)(
            function () {
              if (i && null != e && null != t)
                return (
                  (v.current = un(
                    e,
                    t,
                    (0, y.A)({}, p, {
                      placement: s,
                      strategy: c,
                      modifiers: [].concat(d, [pn, E]),
                    }),
                  )),
                  function () {
                    null != v.current &&
                      (v.current.destroy(),
                      (v.current = void 0),
                      A(function (e) {
                        return (0, y.A)({}, e, {
                          attributes: {},
                          styles: { popper: fn(c) },
                        });
                      }));
                  }
                );
            },
            [i, e, t],
          ),
          b
        );
      };
      var mn = !1,
        gn = !1;
      try {
        var yn = {
          get passive() {
            return (mn = !0);
          },
          get once() {
            return (gn = mn = !0);
          },
        };
        Le &&
          (window.addEventListener("test", yn, yn),
          window.removeEventListener("test", yn, !0));
      } catch (e) {}
      const wn = function (e, t, n, r) {
        if (r && "boolean" != typeof r && !gn) {
          var o = r.once,
            i = r.capture,
            a = n;
          !gn &&
            o &&
            ((a =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, i), n.call(this, r);
              }),
            (n.__once = a)),
            e.addEventListener(t, a, mn ? r : i);
        }
        e.addEventListener(t, n, r);
      };
      const bn = function (e, t, n, r) {
        var o = r && "boolean" != typeof r ? r.capture : r;
        e.removeEventListener(t, n, o),
          n.__once && e.removeEventListener(t, n.__once, o);
      };
      const An = function (e, t, n, r) {
        return (
          wn(e, t, n, r),
          function () {
            bn(e, t, n, r);
          }
        );
      };
      const En = function (e) {
        const t = (0, f.useRef)(e);
        return (
          (0, f.useEffect)(() => {
            t.current = e;
          }, [e]),
          t
        );
      };
      function Dn(e) {
        const t = En(e);
        return (0, f.useCallback)(
          function (...e) {
            return t.current && t.current(...e);
          },
          [t],
        );
      }
      var Sn = n(67501),
        xn = n.n(Sn);
      const On = function (e) {
        return be(
          (function (e) {
            return e && "setState" in e
              ? Be.findDOMNode(e)
              : null != e
                ? e
                : null;
          })(e),
        );
      };
      var kn = function () {};
      var Mn = function (e) {
        return e && ("current" in e ? e.current : e);
      };
      const Tn = function (e, t, n) {
        var r = void 0 === n ? {} : n,
          o = r.disabled,
          i = r.clickTrigger,
          a = void 0 === i ? "click" : i,
          s = (0, f.useRef)(!1),
          l = t || kn,
          c = (0, f.useCallback)(
            function (t) {
              var n,
                r,
                o = Mn(e);
              xn()(
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
          u = Dn(function (e) {
            s.current || l(e);
          }),
          d = Dn(function (e) {
            27 === e.keyCode && l(e);
          });
        (0, f.useEffect)(
          function () {
            if (!o && null != e) {
              var t = window.event,
                n = On(Mn(e)),
                r = An(n, a, c, !0),
                i = An(n, a, function (e) {
                  e !== t ? u(e) : (t = void 0);
                }),
                s = An(n, "keyup", function (e) {
                  e !== t ? d(e) : (t = void 0);
                }),
                l = [];
              return (
                "ontouchstart" in n.documentElement &&
                  (l = [].slice.call(n.body.children).map(function (e) {
                    return An(e, "mousemove", kn);
                  })),
                function () {
                  r(),
                    i(),
                    s(),
                    l.forEach(function (e) {
                      return e();
                    });
                }
              );
            }
          },
          [e, o, a, c, u, d],
        );
      };
      var Rn = function (e) {
        var t;
        return "undefined" == typeof document
          ? null
          : null == e
            ? be().body
            : ("function" == typeof e && (e = e()),
              e && "current" in e && (e = e.current),
              (null != (t = e) && t.nodeType && e) || null);
      };
      function _n(e, t) {
        var n = (0, f.useState)(function () {
            return Rn(e);
          }),
          r = n[0],
          o = n[1];
        if (!r) {
          var i = Rn(e);
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
              var t = Rn(e);
              t !== r && o(t);
            },
            [e, r],
          ),
          r
        );
      }
      function Cn(e) {
        var t,
          n,
          r,
          o,
          i,
          a = e.enabled,
          s = e.enableEvents,
          l = e.placement,
          c = e.flip,
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
          placement: l,
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
              flip: (0, y.A)({ enabled: !!c }, m.flip),
            })),
            void 0 === i && (i = {}),
            Array.isArray(i)
              ? i
              : Object.keys(i).map(function (e) {
                  return (i[e].name = e), i[e];
                })),
        });
      }
      var Pn = f.forwardRef(function (e, t) {
        var n = e.flip,
          r = e.offset,
          o = e.placement,
          i = e.containerPadding,
          a = void 0 === i ? 5 : i,
          s = e.popperConfig,
          l = void 0 === s ? {} : s,
          c = e.transition,
          u = Ye(),
          d = u[0],
          p = u[1],
          v = Ye(),
          h = v[0],
          m = v[1],
          w = Ve(p, t),
          b = _n(e.container),
          A = _n(e.target),
          E = (0, f.useState)(!e.show),
          D = E[0],
          S = E[1],
          x = hn(
            A,
            d,
            Cn({
              placement: o,
              enableEvents: !!e.show,
              containerPadding: a || 5,
              flip: n,
              offset: r,
              arrowElement: h,
              popperConfig: l,
            }),
          ),
          O = x.styles,
          k = x.attributes,
          M = (0, g.A)(x, ["styles", "attributes"]);
        e.show ? D && S(!1) : e.transition || D || S(!0);
        var T = e.show || (c && !D);
        if (
          (Tn(d, e.onHide, {
            disabled: !e.rootClose || e.rootCloseDisabled,
            clickTrigger: e.rootCloseEvent,
          }),
          !T)
        )
          return null;
        var R = e.children(
          (0, y.A)({}, M, {
            show: !!e.show,
            props: (0, y.A)({}, k.popper, { style: O.popper, ref: w }),
            arrowProps: (0, y.A)({}, k.arrow, { style: O.arrow, ref: m }),
          }),
        );
        if (c) {
          var _ = e.onExit,
            C = e.onExiting,
            P = e.onEnter,
            N = e.onEntering,
            L = e.onEntered;
          R = f.createElement(
            c,
            {
              in: e.show,
              appear: !0,
              onExit: _,
              onExiting: C,
              onExited: function () {
                S(!0), e.onExited && e.onExited.apply(e, arguments);
              },
              onEnter: P,
              onEntering: N,
              onEntered: L,
            },
            R,
          );
        }
        return b ? Be.createPortal(R, b) : null;
      });
      (Pn.displayName = "Overlay"),
        (Pn.propTypes = {
          show: O().bool,
          placement: O().oneOf(it),
          target: O().any,
          container: O().any,
          flip: O().bool,
          children: O().func.isRequired,
          containerPadding: O().number,
          popperConfig: O().object,
          rootClose: O().bool,
          rootCloseEvent: O().oneOf(["click", "mousedown"]),
          rootCloseDisabled: O().bool,
          onHide: function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            var o;
            return e.rootClose
              ? (o = O().func).isRequired.apply(o, [e].concat(n))
              : O().func.apply(O(), [e].concat(n));
          },
          transition: O().elementType,
          onEnter: O().func,
          onEntering: O().func,
          onEntered: O().func,
          onExit: O().func,
          onExiting: O().func,
          onExited: O().func,
        });
      const Nn = Pn;
      var Ln = n(13964);
      const zn = function (e, t) {
        return (0, Ln.A)(e, t);
      };
      function jn(e, t) {
        var n = Me(e);
        return n ? n.innerHeight : t ? e.clientHeight : Ce(e).height;
      }
      var Fn,
        Wn = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function In(e, t) {
        if (!Fn) {
          var n = document.body,
            r =
              n.matches ||
              n.matchesSelector ||
              n.webkitMatchesSelector ||
              n.mozMatchesSelector ||
              n.msMatchesSelector;
          Fn = function (e, t) {
            return r.call(e, t);
          };
        }
        return Fn(e, t);
      }
      function Hn(e, t, n) {
        e.closest && !n && e.closest(t);
        var r = e;
        do {
          if (In(r, t)) return r;
          r = r.parentElement;
        } while (r && r !== n && r.nodeType === document.ELEMENT_NODE);
        return null;
      }
      const Bn = function (e, t, n, r) {
        for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
          if (t(e[i], i, e)) return i;
        return -1;
      };
      var Yn = n(17267),
        Un = Math.max;
      const Vn = function (e, t, n) {
        var r = null == e ? 0 : e.length;
        if (!r) return -1;
        var o = null == n ? 0 : me(n);
        return o < 0 && (o = Un(r + o, 0)), Bn(e, (0, Yn.A)(t, 3), o);
      };
      var qn = Math.ceil,
        Kn = Math.max;
      const $n = function (e, t, n, r) {
        for (var o = -1, i = Kn(qn((t - e) / (n || 1)), 0), a = Array(i); i--; )
          (a[r ? i : ++o] = e), (e += n);
        return a;
      };
      const Gn = function (e) {
        return function (t, n, r) {
          return (
            r && "number" != typeof r && (0, de.A)(t, n, r) && (n = r = void 0),
            (t = he(t)),
            void 0 === n ? ((n = t), (t = 0)) : (n = he(n)),
            (r = void 0 === r ? (t < n ? 1 : -1) : he(r)),
            $n(t, n, r, e)
          );
        };
      };
      const Xn = Gn();
      var Zn =
        Number.isNaN ||
        function (e) {
          return "number" == typeof e && e != e;
        };
      function Jn(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++)
          if (((r = e[n]), (o = t[n]), !(r === o || (Zn(r) && Zn(o)))))
            return !1;
        var r, o;
        return !0;
      }
      function Qn(e, t) {
        void 0 === t && (t = Jn);
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
      var er = n(59913),
        tr = n(17488),
        nr = n(35953),
        rr = n(47546),
        or = n(27761),
        ir = nr.A ? nr.A.isConcatSpreadable : void 0;
      const ar = function (e) {
        return (0, or.A)(e) || (0, rr.A)(e) || !!(ir && e && e[ir]);
      };
      const sr = function e(t, n, r, o, i) {
        var a = -1,
          s = t.length;
        for (r || (r = ar), i || (i = []); ++a < s; ) {
          var l = t[a];
          n > 0 && r(l)
            ? n > 1
              ? e(l, n - 1, r, o, i)
              : (0, tr.A)(i, l)
            : o || (i[i.length] = l);
        }
        return i;
      };
      var lr = n(4516),
        cr = n(78350),
        ur = n(64600);
      const fr = function (e, t) {
        var n = e.length;
        for (e.sort(t); n--; ) e[n] = e[n].value;
        return e;
      };
      var dr = n(93365),
        pr = n(73914);
      const vr = function (e, t) {
        if (e !== t) {
          var n = void 0 !== e,
            r = null === e,
            o = e == e,
            i = (0, pr.A)(e),
            a = void 0 !== t,
            s = null === t,
            l = t == t,
            c = (0, pr.A)(t);
          if (
            (!s && !c && !i && e > t) ||
            (i && a && l && !s && !c) ||
            (r && a && l) ||
            (!n && l) ||
            !o
          )
            return 1;
          if (
            (!r && !i && !c && e < t) ||
            (c && n && o && !r && !i) ||
            (s && n && o) ||
            (!a && o) ||
            !l
          )
            return -1;
        }
        return 0;
      };
      const hr = function (e, t, n) {
        for (
          var r = -1,
            o = e.criteria,
            i = t.criteria,
            a = o.length,
            s = n.length;
          ++r < a;
        ) {
          var l = vr(o[r], i[r]);
          if (l) return r >= s ? l : l * ("desc" == n[r] ? -1 : 1);
        }
        return e.index - t.index;
      };
      var mr = n(41040);
      const gr = function (e, t, n) {
        t = t.length
          ? (0, lr.A)(t, function (e) {
              return (0, or.A)(e)
                ? function (t) {
                    return (0, cr.A)(t, 1 === e.length ? e[0] : e);
                  }
                : e;
            })
          : [mr.A];
        var r = -1;
        t = (0, lr.A)(t, (0, dr.A)(Yn.A));
        var o = (0, ur.A)(e, function (e, n, o) {
          return {
            criteria: (0, lr.A)(t, function (t) {
              return t(e);
            }),
            index: ++r,
            value: e,
          };
        });
        return fr(o, function (e, t) {
          return hr(e, t, n);
        });
      };
      var yr = n(83270);
      const wr = (0, yr.A)(function (e, t) {
        if (null == e) return [];
        var n = t.length;
        return (
          n > 1 && (0, de.A)(e, t[0], t[1])
            ? (t = [])
            : n > 2 && (0, de.A)(t[0], t[1], t[2]) && (t = [t[0]]),
          gr(e, sr(t, 1), [])
        );
      });
      var br;
      function Ar(e) {
        if (((!br && 0 !== br) || e) && Le) {
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
      function Er(e, t) {
        var n = Me(e);
        return n ? n.innerWidth : t ? e.clientWidth : Ce(e).width;
      }
      var Dr = n(87537),
        Sr = n(76805),
        xr = n(78296),
        Or = n(79474);
      function kr(e) {
        return (0, Dr.A)(e) || (0, Sr.A)(e) || (0, xr.A)(e) || (0, Or.A)();
      }
      var Mr = n(39234),
        Tr = n(16673),
        Rr = n(9175),
        _r = n(13217),
        Cr = n(99763),
        Pr = n(84207),
        Nr = n(74603);
      const Lr = function (e, t) {
        return e && (0, Pr.A)(t, (0, Nr.A)(t), e);
      };
      var zr = n(70158);
      const jr = function (e, t) {
        return e && (0, Pr.A)(t, (0, zr.A)(t), e);
      };
      var Fr = n(27066),
        Wr = n(80335),
        Ir = n(25606);
      const Hr = function (e, t) {
        return (0, Pr.A)(e, (0, Ir.A)(e), t);
      };
      var Br = n(57695),
        Yr = n(72097);
      const Ur = Object.getOwnPropertySymbols
        ? function (e) {
            for (var t = []; e; )
              (0, tr.A)(t, (0, Ir.A)(e)), (e = (0, Br.A)(e));
            return t;
          }
        : Yr.A;
      const Vr = function (e, t) {
        return (0, Pr.A)(e, Ur(e), t);
      };
      var qr = n(81218),
        Kr = n(80647);
      const $r = function (e) {
        return (0, Kr.A)(e, zr.A, Ur);
      };
      var Gr = n(14645),
        Xr = Object.prototype.hasOwnProperty;
      const Zr = function (e) {
        var t = e.length,
          n = new e.constructor(t);
        return (
          t &&
            "string" == typeof e[0] &&
            Xr.call(e, "index") &&
            ((n.index = e.index), (n.input = e.input)),
          n
        );
      };
      var Jr = n(18277);
      const Qr = function (e, t) {
        var n = t ? (0, Jr.A)(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      };
      var eo = /\w*$/;
      const to = function (e) {
        var t = new e.constructor(e.source, eo.exec(e));
        return (t.lastIndex = e.lastIndex), t;
      };
      var no = nr.A ? nr.A.prototype : void 0,
        ro = no ? no.valueOf : void 0;
      const oo = function (e) {
        return ro ? Object(ro.call(e)) : {};
      };
      var io = n(12649);
      const ao = function (e, t, n) {
        var r = e.constructor;
        switch (t) {
          case "[object ArrayBuffer]":
            return (0, Jr.A)(e);
          case "[object Boolean]":
          case "[object Date]":
            return new r(+e);
          case "[object DataView]":
            return Qr(e, n);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return (0, io.A)(e, n);
          case "[object Map]":
          case "[object Set]":
            return new r();
          case "[object Number]":
          case "[object String]":
            return new r(e);
          case "[object RegExp]":
            return to(e);
          case "[object Symbol]":
            return oo(e);
        }
      };
      var so = n(43577),
        lo = n(6314),
        co = n(83658);
      const uo = function (e) {
        return (0, co.A)(e) && "[object Map]" == (0, Gr.A)(e);
      };
      var fo = n(23785),
        po = fo.A && fo.A.isMap;
      const vo = po ? (0, dr.A)(po) : uo;
      var ho = n(35181);
      const mo = function (e) {
        return (0, co.A)(e) && "[object Set]" == (0, Gr.A)(e);
      };
      var go = fo.A && fo.A.isSet;
      const yo = go ? (0, dr.A)(go) : mo;
      var wo = "[object Arguments]",
        bo = "[object Function]",
        Ao = "[object Object]",
        Eo = {};
      (Eo[wo] =
        Eo["[object Array]"] =
        Eo["[object ArrayBuffer]"] =
        Eo["[object DataView]"] =
        Eo["[object Boolean]"] =
        Eo["[object Date]"] =
        Eo["[object Float32Array]"] =
        Eo["[object Float64Array]"] =
        Eo["[object Int8Array]"] =
        Eo["[object Int16Array]"] =
        Eo["[object Int32Array]"] =
        Eo["[object Map]"] =
        Eo["[object Number]"] =
        Eo[Ao] =
        Eo["[object RegExp]"] =
        Eo["[object Set]"] =
        Eo["[object String]"] =
        Eo["[object Symbol]"] =
        Eo["[object Uint8Array]"] =
        Eo["[object Uint8ClampedArray]"] =
        Eo["[object Uint16Array]"] =
        Eo["[object Uint32Array]"] =
          !0),
        (Eo["[object Error]"] = Eo[bo] = Eo["[object WeakMap]"] = !1);
      const Do = function e(t, n, r, o, i, a) {
        var s,
          l = 1 & n,
          c = 2 & n,
          u = 4 & n;
        if ((r && (s = i ? r(t, o, i, a) : r(t)), void 0 !== s)) return s;
        if (!(0, ho.A)(t)) return t;
        var f = (0, or.A)(t);
        if (f) {
          if (((s = Zr(t)), !l)) return (0, Wr.A)(t, s);
        } else {
          var d = (0, Gr.A)(t),
            p = d == bo || "[object GeneratorFunction]" == d;
          if ((0, lo.A)(t)) return (0, Fr.A)(t, l);
          if (d == Ao || d == wo || (p && !i)) {
            if (((s = c || p ? {} : (0, so.A)(t)), !l))
              return c ? Vr(t, jr(s, t)) : Hr(t, Lr(s, t));
          } else {
            if (!Eo[d]) return i ? t : {};
            s = ao(t, d, l);
          }
        }
        a || (a = new Rr.A());
        var v = a.get(t);
        if (v) return v;
        a.set(t, s),
          yo(t)
            ? t.forEach(function (o) {
                s.add(e(o, n, r, o, t, a));
              })
            : vo(t) &&
              t.forEach(function (o, i) {
                s.set(i, e(o, n, r, i, t, a));
              });
        var h = u ? (c ? $r : qr.A) : c ? zr.A : Nr.A,
          m = f ? void 0 : h(t);
        return (
          (0, _r.A)(m || t, function (o, i) {
            m && (o = t[(i = o)]), (0, Cr.A)(s, i, e(o, n, r, i, t, a));
          }),
          s
        );
      };
      var So = n(1931);
      const xo = function (e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0;
      };
      const Oo = function (e, t) {
        return t.length < 2 ? e : (0, cr.A)(e, fe(t, 0, -1));
      };
      var ko = n(5269);
      const Mo = function (e, t) {
        return (
          (t = (0, So.A)(t, e)),
          null == (e = Oo(e, t)) || delete e[(0, ko.A)(xo(t))]
        );
      };
      var To = n(77011);
      const Ro = function (e) {
        return (0, To.A)(e) ? void 0 : e;
      };
      const _o = function (e) {
        return (null == e ? 0 : e.length) ? sr(e, 1) : [];
      };
      var Co = n(75702),
        Po = n(99660);
      const No = (function (e) {
        return (0, Po.A)((0, Co.A)(e, void 0, _o), e + "");
      })(function (e, t) {
        var n = {};
        if (null == e) return n;
        var r = !1;
        (t = (0, lr.A)(t, function (t) {
          return (t = (0, So.A)(t, e)), r || (r = t.length > 1), t;
        })),
          (0, Pr.A)(e, $r(e), n),
          r && (n = Do(n, 7, Ro));
        for (var o = t.length; o--; ) Mo(n, t[o]);
        return n;
      });
      var Lo = n(58760),
        zo = Object.prototype,
        jo = zo.hasOwnProperty;
      const Fo = (0, yr.A)(function (e, t) {
        e = Object(e);
        var n = -1,
          r = t.length,
          o = r > 2 ? t[2] : void 0;
        for (o && (0, de.A)(t[0], t[1], o) && (r = 1); ++n < r; )
          for (
            var i = t[n], a = (0, zr.A)(i), s = -1, l = a.length;
            ++s < l;
          ) {
            var c = a[s],
              u = e[c];
            (void 0 === u || ((0, Lo.A)(u, zo[c]) && !jo.call(e, c))) &&
              (e[c] = i[c]);
          }
        return e;
      });
      var Wo = n(5536),
        Io = n(25665),
        Ho = n(30186),
        Bo = n(48693);
      const Yo = function (e, t, n) {
        var r = (0, or.A)(e),
          o = r || (0, lo.A)(e) || (0, Bo.A)(e);
        if (((t = (0, Yn.A)(t, 4)), null == n)) {
          var i = e && e.constructor;
          n = o
            ? r
              ? new i()
              : []
            : (0, ho.A)(e) && (0, Ho.A)(i)
              ? (0, Wo.A)((0, Br.A)(e))
              : {};
        }
        return (
          (o ? _r.A : Io.A)(e, function (e, r, o) {
            return t(n, e, r, o);
          }),
          n
        );
      };
      var Uo = n(63376);
      const Vo = function (e, t) {
        var n = {};
        return (
          (t = (0, Yn.A)(t, 3)),
          (0, Io.A)(e, function (e, r, o) {
            (0, Uo.A)(n, r, t(e, r, o));
          }),
          n
        );
      };
      n(22586), n(20237), n(83632), n(43334), n(39920), n(4042), n(14240);
      function qo(e) {
        return e.children;
      }
      var Ko = "PREV",
        $o = "NEXT",
        Go = "TODAY",
        Xo = "DATE",
        Zo = {
          MONTH: "month",
          WEEK: "week",
          WORK_WEEK: "work_week",
          DAY: "day",
          AGENDA: "agenda",
        },
        Jo = Object.keys(Zo).map(function (e) {
          return Zo[e];
        });
      function Qo(e, t) {
        e && e.apply(null, [].concat(t));
      }
      O().oneOfType([O().string, O().func]),
        O().any,
        O().func,
        O().oneOfType([
          O().arrayOf(O().oneOf(Jo)),
          O().objectOf(function (e, t) {
            if (-1 !== Jo.indexOf(t) && "boolean" == typeof e[t]) return null;
            for (
              var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
              o < n;
              o++
            )
              r[o - 2] = arguments[o];
            return O().elementType.apply(O(), [e, t].concat(r));
          }),
        ]),
        O().oneOfType([O().oneOf(["overlap", "no-overlap"]), O().func]);
      var ei = { seconds: 1e3, minutes: 6e4, hours: 36e5, day: 864e5 };
      function ti(e, t) {
        var n = B(e, "month");
        return B(n, "week", t.startOfWeek());
      }
      function ni(e, t) {
        var n = Y(e, "month");
        return Y(n, "week", t.startOfWeek());
      }
      function ri(e, t) {
        for (var n = ti(e, t), r = ni(e, t), o = []; G(n, r, "day"); )
          o.push(n), (n = I(n, 1, "day"));
        return o;
      }
      function oi(e, t) {
        var n = B(e, t);
        return U(n, e) ? n : I(n, 1, t);
      }
      function ii(e, t) {
        for (
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "day",
            r = e,
            o = [];
          G(r, t, n);
        )
          o.push(r), (r = I(r, 1, n));
        return o;
      }
      function ai(e, t) {
        return null == t && null == e
          ? null
          : (null == t && (t = new Date()),
            null == e && (e = new Date()),
            (e = B(e, "day")),
            (e = ne(e, ne(t))),
            (e = te(e, te(t))),
            (e = ee(e, ee(t))),
            Q(e, Q(t)));
      }
      function si(e) {
        return 0 === ne(e) && 0 === te(e) && 0 === ee(e) && 0 === Q(e);
      }
      function li(e, t, n) {
        return n && "milliseconds" !== n
          ? Math.round(Math.abs(+B(e, n) / ei[n] - +B(t, n) / ei[n]))
          : Math.abs(+e - +t);
      }
      var ci = O().oneOfType([O().string, O().func]);
      function ui(e, t, n, r, o) {
        var i = "function" == typeof r ? r(n, o, e) : t.call(e, n, r, o);
        return (
          p()(
            null == i || "string" == typeof i,
            "`localizer format(..)` must return a string, null, or undefined",
          ),
          i
        );
      }
      function fi(e, t, n) {
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
      function di(e, t) {
        return e.getTimezoneOffset() - t.getTimezoneOffset();
      }
      function pi(e, t) {
        return li(e, t, "minutes") + di(e, t);
      }
      function vi(e) {
        var t = B(e, "day");
        return li(t, e, "minutes") + di(t, e);
      }
      function hi(e, t) {
        return $(e, t, "day");
      }
      function mi(e, t, n) {
        return U(e, t, "minutes") ? K(t, n, "minutes") : q(t, n, "minutes");
      }
      function gi(e) {
        var t = e.evtA,
          n = t.start,
          r = t.end,
          o = t.allDay,
          i = e.evtB,
          a = i.start,
          s = i.end,
          l = i.allDay,
          c = +B(n, "day") - +B(a, "day"),
          u = li(n, oi(r, "day"), "day"),
          f = li(a, oi(s, "day"), "day");
        return (
          c ||
          Math.max(f, 1) - Math.max(u, 1) ||
          !!l - !!o ||
          +n - +a ||
          +r - +s
        );
      }
      function yi(e) {
        var t = e.event,
          n = t.start,
          r = t.end,
          o = e.range,
          i = o.start,
          a = o.end,
          s = B(n, "day"),
          l = G(s, a, "day"),
          c = V(s, r, "minutes") ? q(r, i, "minutes") : K(r, i, "minutes");
        return l && c;
      }
      function wi(e, t) {
        return U(e, t, "day");
      }
      function bi(e, t) {
        return si(e) && si(t);
      }
      var Ai = (0, s.A)(function e(t) {
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
          (this.propType = t.propType || ci),
          (this.formats = t.formats),
          (this.format = function () {
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
              r[o] = arguments[o];
            return ui.apply(void 0, [n, t.format].concat(r));
          }),
          (this.startOfWeek = t.firstOfWeek),
          (this.merge = t.merge || ai),
          (this.inRange = t.inRange || J),
          (this.lt = t.lt || $),
          (this.lte = t.lte || G),
          (this.gt = t.gt || q),
          (this.gte = t.gte || K),
          (this.eq = t.eq || U),
          (this.neq = t.neq || V),
          (this.startOf = t.startOf || B),
          (this.endOf = t.endOf || Y),
          (this.add = t.add || I),
          (this.range = t.range || ii),
          (this.diff = t.diff || li),
          (this.ceil = t.ceil || oi),
          (this.min = t.min || X),
          (this.max = t.max || Z),
          (this.minutes = t.minutes || te),
          (this.firstVisibleDay = t.firstVisibleDay || ti),
          (this.lastVisibleDay = t.lastVisibleDay || ni),
          (this.visibleDays = t.visibleDays || ri),
          (this.getSlotDate = t.getSlotDate || fi),
          (this.getTimezoneOffset =
            t.getTimezoneOffset ||
            function (e) {
              return e.getTimezoneOffset();
            }),
          (this.getDstOffset = t.getDstOffset || di),
          (this.getTotalMin = t.getTotalMin || pi),
          (this.getMinutesFromMidnight = t.getMinutesFromMidnight || vi),
          (this.continuesPrior = t.continuesPrior || hi),
          (this.continuesAfter = t.continuesAfter || mi),
          (this.sortEvents = t.sortEvents || gi),
          (this.inEventRange = t.inEventRange || yi),
          (this.isSameDate = t.isSameDate || wi),
          (this.startAndEndAreDateOnly = t.startAndEndAreDateOnly || bi),
          (this.segmentOffset = t.browserTZOffset ? t.browserTZOffset() : 0);
      });
      function Ei(e, t, n, o) {
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
      var Di = {
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
      var Si = [
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
        xi = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
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
                    l = e.onSelect,
                    c = e.onDoubleClick,
                    u = e.onKeyPress,
                    d = e.localizer,
                    p = e.continuesPrior,
                    v = e.continuesAfter,
                    h = e.accessors,
                    m = e.getters,
                    g = e.children,
                    y = e.components,
                    w = y.event,
                    b = y.eventWrapper,
                    A = e.slotStart,
                    E = e.slotEnd,
                    D = (0, o.A)(e, Si);
                  delete D.resizable;
                  var x = h.title(i),
                    O = h.tooltip(i),
                    k = h.end(i),
                    M = h.start(i),
                    T = h.allDay(i),
                    R = s || T || d.diff(M, d.ceil(k, "day"), "day") > 1,
                    _ = m.eventProp(i, M, k, a),
                    C = f.createElement(
                      "div",
                      { className: "rbc-event-content", title: O || void 0 },
                      w
                        ? f.createElement(w, {
                            event: i,
                            continuesPrior: p,
                            continuesAfter: v,
                            title: x,
                            isAllDay: T,
                            localizer: d,
                            slotStart: A,
                            slotEnd: E,
                          })
                        : x,
                    );
                  return f.createElement(
                    b,
                    Object.assign({}, this.props, { type: "date" }),
                    f.createElement(
                      "div",
                      Object.assign({}, D, {
                        tabIndex: 0,
                        style: (0, r.A)((0, r.A)({}, _.style), t),
                        className: S("rbc-event", n, _.className, {
                          "rbc-selected": a,
                          "rbc-event-allday": R,
                          "rbc-event-continues-prior": p,
                          "rbc-event-continues-after": v,
                        }),
                        onClick: function (e) {
                          return l && l(i, e);
                        },
                        onDoubleClick: function (e) {
                          return c && c(i, e);
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
      function Oi(e, t) {
        return !(!e || null == t) && zn(e, t);
      }
      function ki(e, t) {
        return (e.right - e.left) / t;
      }
      function Mi(e, t, n, r) {
        var o = ki(e, r);
        return n
          ? r - 1 - Math.floor((t - e.left) / o)
          : Math.floor((t - e.left) / o);
      }
      function Ti(e) {
        var t,
          n,
          r,
          o = e.containerRef,
          i = e.accessors,
          a = e.getters,
          s = e.selected,
          l = e.components,
          c = e.localizer,
          u = e.position,
          d = e.show,
          p = e.events,
          v = e.slotStart,
          h = e.slotEnd,
          m = e.onSelect,
          g = e.onDoubleClick,
          y = e.onKeyPress,
          w = e.handleDragStart,
          b = e.popperRef,
          A = e.target,
          E = e.offset;
        (n = (t = { ref: b, callback: d }).ref),
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
                    i = Ce(t),
                    a = i.top,
                    s = i.left,
                    l = i.width,
                    c = i.height,
                    u = Ce(r),
                    f = u.top,
                    d = u.left,
                    p = u.width,
                    v = u.height,
                    h = Ce(o),
                    m = h.width,
                    g = h.height,
                    y = f + v,
                    w = d + p,
                    b = a + g,
                    A = s + m,
                    E = n.x,
                    D = n.y;
                  return {
                    topOffset: b > y ? a - g - D : a + D + c,
                    leftOffset: A > w ? s + E - m + l : s + E,
                  };
                })({
                  target: A,
                  offset: E,
                  container: o.current,
                  box: b.current,
                }),
                t = e.topOffset,
                n = e.leftOffset;
              (b.current.style.top = "".concat(t, "px")),
                (b.current.style.left = "".concat(n, "px"));
            },
            [E.x, E.y, A],
          );
        var D = u.width,
          S = { minWidth: D + D / 2 };
        return f.createElement(
          "div",
          { style: S, className: "rbc-overlay", ref: b },
          f.createElement(
            "div",
            { className: "rbc-overlay-header" },
            c.format(v, "dayHeaderFormat"),
          ),
          p.map(function (e, t) {
            return f.createElement(xi, {
              key: t,
              type: "popup",
              localizer: c,
              event: e,
              getters: a,
              onSelect: m,
              accessors: i,
              components: l,
              onDoubleClick: g,
              onKeyPress: y,
              continuesPrior: c.lt(i.end(e), v, "day"),
              continuesAfter: c.gte(i.start(e), h, "day"),
              slotStart: v,
              slotEnd: h,
              selected: Oi(e, s),
              draggable: !0,
              onDragStart: function () {
                return w(e);
              },
              onDragEnd: function () {
                return d();
              },
            });
          }),
        );
      }
      var Ri = f.forwardRef(function (e, t) {
        return f.createElement(Ti, Object.assign({}, e, { popperRef: t }));
      });
      function _i(e) {
        var t = e.containerRef,
          n = e.popupOffset,
          r = void 0 === n ? 5 : n,
          o = e.overlay,
          i = e.accessors,
          a = e.localizer,
          s = e.components,
          l = e.getters,
          c = e.selected,
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
        var w = o.position,
          b = o.events,
          A = o.date,
          E = o.end;
        return f.createElement(
          Nn,
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
              Ri,
              Object.assign({}, n, {
                containerRef: t,
                ref: g,
                target: o.target,
                offset: y,
                accessors: i,
                getters: l,
                selected: c,
                components: s,
                localizer: a,
                position: w,
                show: m,
                events: b,
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
      Ri.propTypes = {
        accessors: O().object.isRequired,
        getters: O().object.isRequired,
        selected: O().object,
        components: O().object.isRequired,
        localizer: O().object.isRequired,
        position: O().object.isRequired,
        show: O().func.isRequired,
        events: O().array.isRequired,
        slotStart: O().instanceOf(Date).isRequired,
        slotEnd: O().instanceOf(Date),
        onSelect: O().func,
        onDoubleClick: O().func,
        onKeyPress: O().func,
        handleDragStart: O().func,
        style: O().object,
        offset: O().shape({ x: O().number, y: O().number }),
      };
      var Ci = f.forwardRef(function (e, t) {
        return f.createElement(_i, Object.assign({}, e, { containerRef: t }));
      });
      function Pi(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : document;
        return An(n, e, t, { passive: !1 });
      }
      function Ni(e, t) {
        return !!(function (e, t) {
          var n = t.clientX,
            r = t.clientY;
          return Hn(document.elementFromPoint(n, r), ".rbc-event", e);
        })(e, t);
      }
      function Li(e, t) {
        return !!(function (e, t) {
          var n = t.clientX,
            r = t.clientY;
          return Hn(document.elementFromPoint(n, r), ".rbc-show-more", e);
        })(e, t);
      }
      function zi(e) {
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
      Ci.propTypes = {
        popupOffset: O().oneOfType([
          O().number,
          O().shape({ x: O().number, y: O().number }),
        ]),
        overlay: O().shape({
          position: O().object,
          events: O().array,
          date: O().instanceOf(Date),
          end: O().instanceOf(Date),
        }),
        accessors: O().object.isRequired,
        localizer: O().object.isRequired,
        components: O().object.isRequired,
        getters: O().object.isRequired,
        selected: O().object,
        handleSelectEvent: O().func,
        handleDoubleClickEvent: O().func,
        handleKeyPressEvent: O().func,
        handleDragStart: O().func,
        onHide: O().func,
        overlayDisplay: O().func,
      };
      var ji = (function () {
        function e(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = n.global,
            o = void 0 !== r && r,
            i = n.longPressThreshold,
            s = void 0 === i ? 250 : i,
            l = n.validContainers,
            c = void 0 === l ? [] : l;
          (0, a.A)(this, e),
            (this.isDetached = !1),
            (this.container = t),
            (this.globalMouse = !t || o),
            (this.longPressThreshold = s),
            (this.validContainers = c),
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
            (this._removeTouchMoveWindowListener = Pi(
              "touchmove",
              function () {},
              window,
            )),
            (this._removeKeyDownListener = Pi("keydown", this._keyListener)),
            (this._removeKeyUpListener = Pi("keyup", this._keyListener)),
            (this._removeDropFromOutsideListener = Pi(
              "drop",
              this._dropFromOutsideListener,
            )),
            (this._removeDragOverFromOutsideListener = Pi(
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
                return !(!t || !this.selecting) && Fi(t, Wi(e));
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
                      l(), e(t);
                    }, n.longPressThreshold)),
                      (o = Pi("touchmove", function () {
                        return l();
                      })),
                      (i = Pi("touchend", function () {
                        return l();
                      }));
                  },
                  s = Pi("touchstart", a),
                  l = function () {
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
                    l(), s();
                  }
                );
              },
            },
            {
              key: "_addInitialEventListener",
              value: function () {
                var e = this,
                  t = Pi("mousedown", function (t) {
                    e._removeInitialEventListener(),
                      e._handleInitialEvent(t),
                      (e._removeInitialEventListener = Pi(
                        "mousedown",
                        e._handleInitialEvent,
                      ));
                  }),
                  n = Pi("touchstart", function (t) {
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
                var t = zi(e),
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
                var t = zi(e),
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
                    n = zi(e),
                    r = n.clientX,
                    o = n.clientY,
                    a = n.pageX,
                    s = n.pageY,
                    l = this.container();
                  if (
                    3 !== e.which &&
                    2 !== e.button &&
                    ((u = r),
                    (f = o),
                    !(c = l) || ke(c, document.elementFromPoint(u, f)))
                  ) {
                    var c, u, f;
                    if (!this.globalMouse && l && !ke(l, e.target)) {
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
                        !Fi(
                          {
                            top: (t = Wi(l)).top - p,
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
                          (this._removeEndListener = Pi(
                            "mouseup",
                            this._handleTerminatingEvent,
                          )),
                            (this._onEscListener = Pi(
                              "keydown",
                              this._handleTerminatingEvent,
                            )),
                            (this._removeMoveListener = Pi(
                              "mousemove",
                              this._handleMoveEvent,
                            ));
                          break;
                        case "touchstart":
                          this._handleMoveEvent(e),
                            (this._removeEndListener = Pi(
                              "touchend",
                              this._handleTerminatingEvent,
                            )),
                            (this._removeMoveListener = Pi(
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
                var t = zi(e),
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
                var t = zi(e),
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
                    o = zi(e),
                    i = o.pageX,
                    a = o.pageY,
                    s = Math.abs(n - i),
                    l = Math.abs(r - a),
                    c = Math.min(i, n),
                    u = Math.min(a, r),
                    f = this.selecting;
                  (!this.isClick(i, a) || f || s || l) &&
                    ((this.selecting = !0),
                    (this._selectRect = {
                      top: u,
                      left: c,
                      x: i,
                      y: a,
                      right: c + s,
                      bottom: u + l,
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
      function Fi(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = Wi(e),
          o = r.top,
          i = r.left,
          a = r.right,
          s = void 0 === a ? i : a,
          l = r.bottom,
          c = void 0 === l ? o : l,
          u = Wi(t),
          f = u.top,
          d = u.left,
          p = u.right,
          v = void 0 === p ? d : p,
          h = u.bottom;
        return !(
          c - n < f ||
          o + n > (void 0 === h ? f : h) ||
          s - n < d ||
          i + n > v
        );
      }
      function Wi(e) {
        if (!e.getBoundingClientRect) return e;
        var t = e.getBoundingClientRect(),
          n = t.left + Ii("left"),
          r = t.top + Ii("top");
        return {
          top: r,
          left: n,
          right: (e.offsetWidth || 0) + n,
          bottom: (e.offsetHeight || 0) + r,
        };
      }
      function Ii(e) {
        return "left" === e
          ? window.pageXOffset || document.body.scrollLeft || 0
          : "top" === e
            ? window.pageYOffset || document.body.scrollTop || 0
            : void 0;
      }
      var Hi = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
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
                    l = s.selecting,
                    c = s.startIdx,
                    u = s.endIdx,
                    d = n();
                  return f.createElement(
                    "div",
                    { className: "rbc-row-bg", ref: this.containerRef },
                    t.map(function (e, n) {
                      var s = l && n >= c && n <= u,
                        p = r.dayProp(e),
                        v = p.className,
                        h = p.style;
                      return f.createElement(
                        i,
                        { key: n, value: e, range: t },
                        f.createElement("div", {
                          style: h,
                          className: S(
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
                    n = (this._selector = new ji(this.props.container, {
                      longPressThreshold: this.props.longPressThreshold,
                    })),
                    o = function (n, r) {
                      if (!Ni(t, n) && !Li(t, n)) {
                        var o = Wi(t),
                          i = e.props,
                          a = i.range,
                          s = i.rtl;
                        if (
                          ((c = o),
                          (f = (u = n).x),
                          (d = u.y) >= c.top &&
                            d <= c.bottom &&
                            f >= c.left &&
                            f <= c.right)
                        ) {
                          var l = Mi(o, n.x, s, a.length);
                          e._selectSlot({
                            startIdx: l,
                            endIdx: l,
                            action: r,
                            box: n,
                          });
                        }
                      }
                      var c, u, f, d;
                      (e._initial = {}), e.setState({ selecting: !1 });
                    };
                  n.on("selecting", function (r) {
                    var o = e.props,
                      i = o.range,
                      a = o.rtl,
                      s = -1,
                      l = -1;
                    if (
                      (e.state.selecting ||
                        (Qo(e.props.onSelectStart, [r]),
                        (e._initial = { x: r.x, y: r.y })),
                      n.isSelected(t))
                    ) {
                      var c = Wi(t),
                        u = (function (e, t, n, r, o) {
                          var i = -1,
                            a = -1,
                            s = r - 1,
                            l = ki(t, r),
                            c = Mi(t, n.x, o, r),
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
                                ? ((i = 0), (a = c))
                                : d && ((i = c), (a = s))),
                            f &&
                              ((i = a =
                                o
                                  ? s - Math.floor((e.x - t.left) / l)
                                  : Math.floor((e.x - t.left) / l)),
                              u
                                ? c < i
                                  ? (i = c)
                                  : (a = c)
                                : e.y < n.y
                                  ? (a = s)
                                  : (i = 0)),
                            { startIdx: i, endIdx: a }
                          );
                        })(e._initial, c, r, i.length, a);
                      (s = u.startIdx), (l = u.endIdx);
                    }
                    e.setState({ selecting: !0, startIdx: s, endIdx: l });
                  }),
                    n.on("beforeSelect", function (t) {
                      if ("ignoreEvents" === e.props.selectable)
                        return !Ni(e.containerRef.current, t);
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
                        Qo(e.props.onSelectEnd, [e.state]);
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
        Bi =
          (O().object.isRequired,
          O().object,
          O().bool,
          O().object.isRequired,
          O().object.isRequired,
          O().object.isRequired,
          O().object.isRequired,
          O().func,
          O().func,
          O().func,
          { segments: [], selected: {} }),
        Yi = function (e, t) {
          var n = e.selected;
          e.isAllDay;
          var r = e.accessors,
            o = e.getters,
            i = e.onSelect,
            a = e.onDoubleClick,
            s = e.onKeyPress,
            l = e.localizer,
            c = e.slotMetrics,
            u = e.components,
            d = e.resizable,
            p = c.continuesPrior(t),
            v = c.continuesAfter(t);
          return f.createElement(xi, {
            event: t,
            getters: o,
            localizer: l,
            accessors: r,
            components: u,
            onSelect: i,
            onDoubleClick: a,
            onKeyPress: s,
            continuesPrior: p,
            continuesAfter: v,
            slotStart: c.first,
            slotEnd: c.last,
            selected: Oi(t, n),
            resizable: d,
          });
        },
        Ui = function (e, t, n) {
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
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
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
                    { className: S(o, "rbc-row") },
                    n.reduce(function (t, n, o) {
                      var a = n.event,
                        s = n.left,
                        l = n.right,
                        c = n.span,
                        u = "_lvl_" + o,
                        f = s - i,
                        d = Yi(e.props, a);
                      return (
                        f && t.push(Ui(r, f, "".concat(u, "_gap"))),
                        t.push(Ui(r, c, u, d)),
                        (i = l + 1),
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
      function Ki(e) {
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
          for (r = e[t], n = 0; n < i.length && Gi(r, i[n]); n++);
          n >= o ? a.push(r) : (i[n] || (i[n] = [])).push(r);
        }
        for (t = 0; t < i.length; t++)
          i[t].sort(function (e, t) {
            return e.left - t.left;
          });
        return { levels: i, extra: a };
      }
      function $i(e, t, n, r, o) {
        var i = { start: r.start(e), end: r.end(e) },
          a = { start: t, end: n };
        return o.inEventRange({ event: i, range: a });
      }
      function Gi(e, t) {
        return t.some(function (t) {
          return t.left <= e.right && t.right >= e.left;
        });
      }
      function Xi(e, t, n, r) {
        var o = { start: n.start(e), end: n.end(e), allDay: n.allDay(e) },
          i = { start: n.start(t), end: n.end(t), allDay: n.allDay(t) };
        return r.sortEvents({ evtA: o, evtB: i });
      }
      Vi.defaultProps = (0, r.A)({}, Bi);
      var Zi = function (e, t) {
          return e.left <= t && e.right >= t;
        },
        Ji = function (e, t) {
          return e.filter(function (e) {
            return Zi(e, t);
          }).length;
        },
        Qi = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
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
                      r = Ki(t).levels[0],
                      o = 1,
                      i = 1,
                      a = [];
                    o <= n;
                  ) {
                    var s = "_lvl_" + o,
                      l =
                        r.filter(function (e) {
                          return Zi(e, o);
                        })[0] || {},
                      c = l.event,
                      u = l.left,
                      d = l.right,
                      p = l.span;
                    if (c) {
                      var v = Math.max(0, u - i);
                      if (this.canRenderSlotEvent(u, p)) {
                        var h = Yi(this.props, c);
                        v && a.push(Ui(n, v, s + "_gap")),
                          a.push(Ui(n, p, s, h)),
                          (i = o = d + 1);
                      } else
                        v && a.push(Ui(n, v, s + "_gap")),
                          a.push(Ui(n, 1, s, this.renderShowMore(t, o))),
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
                  return Xn(e, e + t).every(function (e) {
                    return 1 === Ji(n, e);
                  });
                },
              },
              {
                key: "renderShowMore",
                value: function (e, t) {
                  var n = this,
                    r = this.props.localizer,
                    o = Ji(e, t);
                  return (
                    !!o &&
                    f.createElement(
                      "button",
                      {
                        type: "button",
                        key: "sm_" + t,
                        className: S("rbc-button-link", "rbc-show-more"),
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
      Qi.defaultProps = (0, r.A)({}, Bi);
      var ea = function (e) {
          var t = e.children;
          return f.createElement(
            "div",
            { className: "rbc-row-content-scroll-container" },
            t,
          );
        },
        ta = function (e, t) {
          return e[0].range === t[0].range && e[0].events === t[0].events;
        };
      function na() {
        return Qn(function (e) {
          for (
            var t = e.range,
              n = e.events,
              o = e.maxRows,
              i = e.minRows,
              a = e.accessors,
              s = e.localizer,
              l = qi({ dateRange: t, localizer: s }),
              c = l.first,
              u = l.last,
              f = n.map(function (e) {
                return (function (e, t, n, r) {
                  var o = qi({ dateRange: t, localizer: r }),
                    i = o.first,
                    a = o.last,
                    s = r.diff(i, a, "day"),
                    l = r.max(r.startOf(n.start(e), "day"), i),
                    c = r.min(r.ceil(n.end(e), "day"), a),
                    u = Vn(t, function (e) {
                      return r.isSameDate(e, l);
                    }),
                    f = r.diff(l, c, "day");
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
              d = Ki(f, Math.max(o - 1, 1)),
              p = d.levels,
              v = d.extra,
              h = v.length > 0 ? i - 1 : i;
            p.length < h;
          )
            p.push([]);
          return {
            first: c,
            last: u,
            levels: p,
            extra: v,
            range: t,
            slots: t.length,
            clone: function (t) {
              return na()((0, r.A)((0, r.A)({}, e), t));
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
              return s.continuesPrior(a.start(e), c);
            },
            continuesAfter: function (e) {
              var t = a.start(e),
                n = a.end(e);
              return s.continuesAfter(t, n, u);
            },
          };
        }, ta);
      }
      var ra = (function (e) {
        (0, l.A)(n, e);
        var t = (0, c.A)(n);
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
                l = a.onShowMore,
                c = e.slotMetrics(e.props),
                u = ((r = e.containerRef.current),
                (o = ".rbc-row-bg"),
                Wn(r.querySelectorAll(o)))[0];
              u && (i = u.children[t - 1]),
                l(c.getEventsForSlot(t), s[t - 1], i, t, n);
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
                className: S(
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
                    className: S(
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
            (e.slotMetrics = na()),
            e
          );
        }
        return (
          (0, s.A)(n, [
            {
              key: "getRowLimit",
              value: function () {
                var e,
                  t = jn(this.eventRowRef.current),
                  n =
                    null !== (e = this.headingRowRef) &&
                    void 0 !== e &&
                    e.current
                      ? jn(this.headingRowRef.current)
                      : 0,
                  r = jn(this.containerRef.current) - n;
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
                  l = e.accessors,
                  c = e.getters,
                  u = e.components,
                  d = e.getNow,
                  p = e.renderHeader,
                  v = e.onSelect,
                  h = e.localizer,
                  m = e.onSelectStart,
                  g = e.onSelectEnd,
                  y = e.onDoubleClick,
                  w = e.onKeyPress,
                  b = e.resourceId,
                  A = e.longPressThreshold,
                  E = e.isAllDay,
                  D = e.resizable,
                  x = e.showAllEvents;
                if (s) return this.renderDummy();
                var O = this.slotMetrics(this.props),
                  k = O.levels,
                  M = O.extra,
                  T = x ? ea : qo,
                  R = u.weekWrapper,
                  _ = {
                    selected: i,
                    accessors: l,
                    getters: c,
                    localizer: h,
                    components: u,
                    onSelect: v,
                    onDoubleClick: y,
                    onKeyPress: w,
                    resourceId: b,
                    slotMetrics: O,
                    resizable: D,
                  };
                return f.createElement(
                  "div",
                  { className: o, role: "rowgroup", ref: this.containerRef },
                  f.createElement(Hi, {
                    localizer: h,
                    date: t,
                    getNow: d,
                    rtl: n,
                    range: r,
                    selectable: a,
                    container: this.getContainer,
                    getters: c,
                    onSelectStart: m,
                    onSelectEnd: g,
                    onSelectSlot: this.handleSelectSlot,
                    components: u,
                    longPressThreshold: A,
                    resourceId: b,
                  }),
                  f.createElement(
                    "div",
                    {
                      className: S(
                        "rbc-row-content",
                        x && "rbc-row-content-scrollable",
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
                      T,
                      null,
                      f.createElement(
                        R,
                        Object.assign({ isAllDay: E }, _, {
                          rtl: this.props.rtl,
                        }),
                        k.map(function (e, t) {
                          return f.createElement(
                            Vi,
                            Object.assign({ key: t, segments: e }, _),
                          );
                        }),
                        !!M.length &&
                          f.createElement(
                            Qi,
                            Object.assign(
                              { segments: M, onShowMore: this.handleShowMore },
                              _,
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
      ra.defaultProps = { minRows: 0, maxRows: 1 / 0 };
      var oa = function (e) {
          var t = e.label;
          return f.createElement(
            "span",
            { role: "columnheader", "aria-sort": "none" },
            t,
          );
        },
        ia = function (e) {
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
        aa = ["date", "className"],
        sa = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
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
                  l = r.selected,
                  c = r.date,
                  u = r.localizer,
                  d = r.longPressThreshold,
                  p = r.accessors,
                  v = r.getters,
                  h = r.showAllEvents,
                  m = e.state,
                  g = m.needLimitMeasure,
                  y = m.rowLimit,
                  w = (function (e, t, n, r, o) {
                    return e.filter(function (e) {
                      return $i(e, t, n, r, o);
                    });
                  })((0, ue.A)(o), t[0], t[t.length - 1], p, u);
                return (
                  w.sort(function (e, t) {
                    return Xi(e, t, p, u);
                  }),
                  f.createElement(ra, {
                    key: n,
                    ref: 0 === n ? e.slotRowRef : void 0,
                    container: e.getContainer,
                    className: "rbc-month-row",
                    getNow: s,
                    date: c,
                    range: t,
                    events: w,
                    maxRows: h ? 1 / 0 : y,
                    selected: l,
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
                  i = (0, o.A)(t, aa),
                  a = e.props,
                  s = a.date,
                  l = a.getDrilldownView,
                  c = a.localizer,
                  u = c.neq(n, s, "month"),
                  d = c.isSameDate(n, s),
                  p = l(n),
                  v = c.format(n, "dateFormat"),
                  h = e.props.components.dateHeader || ia;
                return f.createElement(
                  "div",
                  Object.assign({}, i, {
                    className: S(r, u && "rbc-off-range", d && "rbc-current"),
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
                  Qo(e.props.onDrillDown, [t, n]);
              }),
              (e.handleSelectEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Qo(e.props.onSelectEvent, n);
              }),
              (e.handleDoubleClickEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Qo(e.props.onDoubleClickEvent, n);
              }),
              (e.handleKeyPressEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Qo(e.props.onKeyPressEvent, n);
              }),
              (e.handleShowMore = function (t, n, r, o, i) {
                var a = e.props,
                  s = a.popup,
                  l = a.onDrillDown,
                  c = a.onShowMore,
                  u = a.getDrilldownView,
                  f = a.doShowMoreDrillDown;
                if ((e.clearSelection(), s)) {
                  var d = Ne(r, e.containerRef.current);
                  e.setState({
                    overlay: { date: n, events: t, position: d, target: i },
                  });
                } else f && Qo(l, [n, u(n) || Zo.DAY]);
                Qo(c, [t, n, o]);
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
                            He(function () {
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
                      i = we(o, 7);
                    return (
                      (this._weekCount = i.length),
                      f.createElement(
                        "div",
                        {
                          className: S("rbc-month-view", r),
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
                      a = r.header || oa;
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
                      l = o.getters,
                      c = o.selected,
                      u = o.popupOffset,
                      d = o.handleDragStart;
                    return f.createElement(Ci, {
                      overlay: r,
                      accessors: i,
                      localizer: a,
                      components: s,
                      getters: l,
                      selected: c,
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
                      Qo(this.props.onSelectSlot, {
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
      (sa.range = function (e, t) {
        var n = t.localizer;
        return { start: n.firstVisibleDay(e, n), end: n.lastVisibleDay(e, n) };
      }),
        (sa.navigate = function (e, t, n) {
          var r = n.localizer;
          switch (t) {
            case Ko:
              return r.add(e, -1, "month");
            case $o:
              return r.add(e, 1, "month");
            default:
              return e;
          }
        }),
        (sa.title = function (e, t) {
          return t.localizer.format(e, "monthHeaderFormat");
        });
      var la = function (e) {
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
      function ca(e) {
        for (
          var t = e.min,
            n = e.max,
            r = e.step,
            o = e.timeslots,
            i = e.localizer,
            a = la({ start: t, end: n, step: r, timeslots: o, localizer: i }),
            s = 1 + i.getTotalMin(t, n),
            l = i.getMinutesFromMidnight(t),
            c = Math.ceil((s - 1) / (r * o)),
            u = c * o,
            f = new Array(c),
            d = new Array(u),
            p = 0;
          p < c;
          p++
        ) {
          f[p] = new Array(o);
          for (var v = 0; v < o; v++) {
            var h = p * o + v,
              m = h * r;
            d[h] = f[p][v] = i.getSlotDate(t, l, m);
          }
        }
        var g = d.length * r;
        function y(e) {
          var n = i.diff(t, e, "minutes") + i.getDstOffset(t, e);
          return Math.min(n, s);
        }
        return (
          d.push(i.getSlotDate(t, l, g)),
          {
            groups: f,
            update: function (e) {
              return la(e) !== a ? ca(e) : this;
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
              var l = y(e),
                c = y(o),
                f =
                  c > r * u && !i.eq(n, o)
                    ? ((l - r) / (r * u)) * 100
                    : (l / (r * u)) * 100;
              return {
                top: f,
                height: (c / (r * u)) * 100 - f,
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
      var ua = (function () {
        function e(t, n) {
          var r = n.accessors,
            o = n.slotMetrics;
          (0, a.A)(this, e);
          var i = o.getRange(r.start(t), r.end(t)),
            s = i.start,
            l = i.startDate,
            c = i.end,
            u = i.endDate,
            f = i.top,
            d = i.height;
          (this.start = s),
            (this.end = c),
            (this.startMs = +l),
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
      function fa(e, t, n) {
        return (
          Math.abs(t.start - e.start) < n ||
          (t.start > e.start && t.start < e.end)
        );
      }
      function da(e) {
        for (
          var t = e.events,
            n = e.minimumStartDifference,
            r = e.slotMetrics,
            o = e.accessors,
            i = (function (e) {
              for (
                var t = wr(e, [
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
                return new ua(e, { slotMetrics: r, accessors: o });
              }),
            ),
            a = [],
            s = function () {
              var e = i[l],
                t = a.find(function (t) {
                  return t.end > e.start || Math.abs(e.start - t.start) < n;
                });
              if (!t) return (e.rows = []), a.push(e), 1;
              e.container = t;
              for (var r = null, o = t.rows.length - 1; !r && o >= 0; o--)
                fa(t.rows[o], e, n) && (r = t.rows[o]);
              r
                ? (r.leaves.push(e), (e.row = r))
                : ((e.leaves = []), t.rows.push(e));
            },
            l = 0;
          l < i.length;
          l++
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
      function pa(e, t, n) {
        for (var r = 0; r < e.friends.length; ++r)
          if (!(n.indexOf(e.friends[r]) > -1)) {
            (t = t > e.friends[r].idx ? t : e.friends[r].idx),
              n.push(e.friends[r]);
            var o = pa(e.friends[r], t, n);
            t = t > o ? t : o;
          }
        return t;
      }
      var va = {
        overlap: da,
        "no-overlap": function (e) {
          var t = da({
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
              var l = t[s],
                c = l.style.top,
                u = l.style.top + l.style.height;
              ((c >= i && u <= a) || (u > i && u <= a) || (c >= i && c < a)) &&
                (o.friends.push(l), l.friends.push(o));
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
              (g = 100 / (pa(t[m], 0, y) + 1)), (t[m].size = g);
              for (var w = 0; w < y.length; ++w) y[w].size = g;
            }
          }
          for (var b = 0; b < t.length; ++b) {
            var A = t[b];
            A.style.left = A.idx * A.size;
            for (var E = 0, D = 0; D < A.friends.length; ++D) {
              var S = A.friends[D].idx;
              E = E > S ? E : S;
            }
            E <= A.idx && (A.size = 100 - A.idx * A.size);
            var x = 0 === A.idx ? 0 : 3;
            (A.style.width = "calc(".concat(A.size, "% - ").concat(x, "px)")),
              (A.style.height = "calc(".concat(A.style.height, "% - 2px)")),
              (A.style.xOffset = "calc("
                .concat(A.style.left, "% + ")
                .concat(x, "px)"));
          }
          return t;
        },
      };
      var ha = (function (e) {
        (0, l.A)(n, e);
        var t = (0, c.A)(n);
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
                  l = o ? o.slotGroupProp(r) : {};
                return f.createElement(
                  "div",
                  Object.assign({ className: "rbc-timeslot-group" }, l),
                  r.map(function (e, r) {
                    var i = o ? o.slotProp(e, n) : {};
                    return f.createElement(
                      s,
                      { key: r, value: e, resource: n },
                      f.createElement(
                        "div",
                        Object.assign({}, i, {
                          className: S("rbc-time-slot", i.className),
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
      function ma(e) {
        return "string" == typeof e ? e : e + "%";
      }
      function ga(e) {
        var t = e.style,
          n = e.className,
          o = e.event,
          i = e.accessors,
          a = e.rtl,
          s = e.selected,
          l = e.label,
          c = e.continuesPrior,
          u = e.continuesAfter,
          d = e.getters,
          p = e.onClick,
          v = e.onDoubleClick,
          h = e.isBackgroundEvent,
          m = e.onKeyPress,
          g = e.components,
          y = g.event,
          w = g.eventWrapper,
          b = i.title(o),
          A = i.tooltip(o),
          E = i.end(o),
          D = i.start(o),
          x = d.eventProp(o, D, E, s),
          O = t.height,
          k = t.top,
          M = t.width,
          T = t.xOffset,
          R = [
            f.createElement(
              "div",
              { key: "1", className: "rbc-event-label" },
              l,
            ),
            f.createElement(
              "div",
              { key: "2", className: "rbc-event-content" },
              y ? f.createElement(y, { event: o, title: b }) : b,
            ),
          ],
          _ = h
            ? (0, r.A)(
                (0, r.A)({}, x.style),
                {},
                (0, ce.A)(
                  {
                    top: ma(k),
                    height: ma(O),
                    width: "calc(".concat(M, " + 10px)"),
                  },
                  a ? "right" : "left",
                  ma(Math.max(0, T)),
                ),
              )
            : (0, r.A)(
                (0, r.A)({}, x.style),
                {},
                (0, ce.A)(
                  { top: ma(k), width: ma(M), height: ma(O) },
                  a ? "right" : "left",
                  ma(T),
                ),
              );
        return f.createElement(
          w,
          Object.assign({ type: "time" }, e),
          f.createElement(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: p,
              onDoubleClick: v,
              style: _,
              onKeyPress: m,
              title: A ? ("string" == typeof l ? l + ": " : "") + A : void 0,
              className: S(
                h ? "rbc-background-event" : "rbc-event",
                n,
                x.className,
                {
                  "rbc-selected": s,
                  "rbc-event-continues-earlier": c,
                  "rbc-event-continues-later": u,
                },
              ),
            },
            R,
          ),
        );
      }
      var ya = function (e) {
          var t = e.children,
            n = e.className,
            r = e.style,
            o = e.innerRef;
          return f.createElement("div", { className: n, style: r, ref: o }, t);
        },
        wa = f.forwardRef(function (e, t) {
          return f.createElement(ya, Object.assign({}, e, { innerRef: t }));
        }),
        ba = ["dayProp"],
        Aa = ["eventContainerWrapper"],
        Ea = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
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
                  l = i.accessors,
                  c = i.localizer,
                  u = i.getters,
                  d = i.components,
                  p = i.step,
                  v = i.timeslots,
                  h = i.dayLayoutAlgorithm,
                  m = i.resizable,
                  g = (0, er.A)(e).slotMetrics,
                  y = c.messages,
                  w = (function (e) {
                    e.events,
                      e.minimumStartDifference,
                      e.slotMetrics,
                      e.accessors;
                    var t,
                      n = e.dayLayoutAlgorithm,
                      r = n;
                    return (
                      n in va && (r = va[n]),
                      (t = r) && t.constructor && t.call && t.apply
                        ? r.apply(this, arguments)
                        : []
                    );
                  })({
                    events: n,
                    accessors: l,
                    slotMetrics: g,
                    minimumStartDifference: Math.ceil((p * v) / 2),
                    dayLayoutAlgorithm: h,
                  });
                return w.map(function (t, n) {
                  var i,
                    p = t.event,
                    v = t.style,
                    h = l.end(p),
                    w = l.start(p),
                    b = "eventTimeRangeFormat",
                    A = g.startsBeforeDay(w),
                    E = g.startsAfterDay(h);
                  A
                    ? (b = "eventTimeRangeEndFormat")
                    : E && (b = "eventTimeRangeStartFormat"),
                    (i = A && E ? y.allDay : c.format({ start: w, end: h }, b));
                  var D = A || g.startsBefore(w),
                    S = E || g.startsAfter(h);
                  return f.createElement(ga, {
                    style: v,
                    event: p,
                    label: i,
                    key: "evt_" + n,
                    getters: u,
                    rtl: a,
                    components: d,
                    continuesPrior: D,
                    continuesAfter: S,
                    accessors: l,
                    resource: e.props.resource,
                    selected: Oi(p, s),
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
                  a = (e._selector = new ji(
                    function () {
                      return t;
                    },
                    { longPressThreshold: o },
                  )),
                  s = function (t) {
                    var n = e.props.onSelecting,
                      r = e.state || {},
                      o = l(t),
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
                  l = function (n) {
                    var o = e.slotMetrics.closestSlotFromPoint(n, Wi(t));
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
                  c = function (t, n) {
                    if (!Ni(e.containerRef.current, t)) {
                      var r = l(t),
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
                      return !Ni(e.containerRef.current, t);
                  }),
                  a.on("click", function (e) {
                    return c(e, "click");
                  }),
                  a.on("doubleClick", function (e) {
                    return c(e, "doubleClick");
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
                    l = [];
                  e.props.localizer.lte(s, r);
                )
                  l.push(s), (s = new Date(+s + 60 * e.props.step * 1e3));
                Qo(e.props.onSelectSlot, {
                  slots: l,
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
                Qo(e.props.onSelectEvent, n);
              }),
              (e._doubleClick = function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Qo(e.props.onDoubleClickEvent, n);
              }),
              (e._keyPress = function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Qo(e.props.onKeyPressEvent, n);
              }),
              (e.slotMetrics = ca(e.props)),
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
                    l = n.max,
                    c = i.neq(e.getNow(), r(), "minutes");
                  if (e.isNow !== o || c) {
                    if ((this.clearTimeIndicatorInterval(), o)) {
                      var u =
                        !c &&
                        i.eq(e.date, a, "minutes") &&
                        t.timeIndicatorPosition ===
                          this.state.timeIndicatorPosition;
                      this.setTimeIndicatorPositionUpdateInterval(u);
                    }
                  } else
                    o &&
                      (i.neq(e.min, s, "minutes") ||
                        i.neq(e.max, l, "minutes")) &&
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
                    l = e.localizer,
                    c = e.getters,
                    u = c.dayProp,
                    d = (0, o.A)(c, ba),
                    p = e.components,
                    v = p.eventContainerWrapper,
                    h = (0, o.A)(p, Aa),
                    m = this.slotMetrics,
                    g = this.state,
                    y = g.selecting,
                    w = g.top,
                    b = g.height,
                    A = { start: g.startDate, end: g.endDate },
                    E = u(n),
                    D = E.className,
                    x = E.style,
                    O = h.dayColumnWrapper || wa;
                  return f.createElement(
                    O,
                    {
                      ref: this.containerRef,
                      date: t,
                      style: x,
                      className: S(
                        D,
                        "rbc-day-slot",
                        "rbc-time-column",
                        i && "rbc-now",
                        i && "rbc-today",
                        y && "rbc-slot-selecting",
                      ),
                      slotMetrics: m,
                    },
                    m.groups.map(function (e, t) {
                      return f.createElement(ha, {
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
                        localizer: l,
                        resource: a,
                        accessors: s,
                        getters: d,
                        components: h,
                        slotMetrics: m,
                      },
                      f.createElement(
                        "div",
                        { className: S("rbc-events-container", r && "rtl") },
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
                          style: { top: w, height: b },
                        },
                        f.createElement(
                          "span",
                          null,
                          l.format(A, "selectRangeFormat"),
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
      Ea.defaultProps = { dragThroughEvents: !0, timeslots: 2 };
      var Da = function (e) {
          var t = e.min,
            n = e.max,
            r = e.timeslots,
            o = e.step,
            i = e.localizer,
            a = e.getNow,
            s = e.resource,
            l = e.components,
            c = e.getters,
            d = e.gutterRef,
            p = l.timeGutterWrapper,
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
              ca({ min: h, max: m, timeslots: r, step: o, localizer: i }),
            ),
            y = (0, u.A)(g, 2),
            w = y[0],
            b = y[1];
          (0, f.useEffect)(
            function () {
              w &&
                b(
                  w.update({
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
              var n = w.dateIsInGroup(a(), t);
              return f.createElement(
                "span",
                { className: S("rbc-label", n && "rbc-now") },
                i.format(e, "timeGutterFormat"),
              );
            },
            [w, i, a],
          );
          return f.createElement(
            p,
            { slotMetrics: w },
            f.createElement(
              "div",
              { className: "rbc-time-gutter rbc-time-column", ref: d },
              w.groups.map(function (e, t) {
                return f.createElement(ha, {
                  key: t,
                  group: e,
                  resource: s,
                  components: l,
                  renderSlot: A,
                  getters: c,
                });
              }),
            ),
          );
        },
        Sa = f.forwardRef(function (e, t) {
          return f.createElement(Da, Object.assign({ gutterRef: t }, e));
        }),
        xa = function (e) {
          var t = e.label;
          return f.createElement(f.Fragment, null, t);
        },
        Oa = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n() {
            var e;
            (0, a.A)(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(o))).handleHeaderClick =
                function (t, n, r) {
                  r.preventDefault(), Qo(e.props.onDrillDown, [t, n]);
                }),
              (e.renderRow = function (t) {
                var n = e.props,
                  r = n.events,
                  o = n.rtl,
                  i = n.selectable,
                  a = n.getNow,
                  s = n.range,
                  l = n.getters,
                  c = n.localizer,
                  u = n.accessors,
                  d = n.components,
                  p = n.resizable,
                  v = u.resourceId(t),
                  h = t
                    ? r.filter(function (e) {
                        return u.resource(e) === v;
                      })
                    : r;
                return f.createElement(ra, {
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
                  getters: l,
                  localizer: c,
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
                    l = void 0 === s ? oa : s,
                    c = i();
                  return e.map(function (e, n) {
                    var i = o(e),
                      s = r.format(e, "dayFormat"),
                      u = a(e),
                      d = u.className,
                      p = u.style,
                      v = f.createElement(l, {
                        date: e,
                        label: s,
                        localizer: r,
                      });
                    return f.createElement(
                      "div",
                      {
                        key: n,
                        style: p,
                        className: S(
                          "rbc-header",
                          d,
                          r.isSameDate(e, c) && "rbc-today",
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
                    l = t.accessors,
                    c = t.selectable,
                    d = t.components,
                    p = t.getters,
                    v = t.scrollRef,
                    h = t.localizer,
                    m = t.isOverflowing,
                    g = t.components,
                    y = g.timeGutterHeader,
                    w = g.resourceHeader,
                    b = void 0 === w ? xa : w,
                    A = t.resizable,
                    E = {};
                  m &&
                    (E[r ? "marginLeft" : "marginRight"] = "".concat(
                      Ar() - 1,
                      "px",
                    ));
                  var D = o.groupEvents(a);
                  return f.createElement(
                    "div",
                    {
                      style: E,
                      ref: v,
                      className: S("rbc-time-header", m && "rbc-overflowing"),
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
                              f.createElement(b, {
                                index: n,
                                label: l.resourceTitle(v),
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
                        f.createElement(ra, {
                          isAllDay: !0,
                          rtl: r,
                          getNow: s,
                          minRows: 2,
                          maxRows: e.props.allDayMaxRows + 1,
                          range: i,
                          events: D.get(a) || [],
                          resourceId: v && a,
                          className: "rbc-allday-cell",
                          selectable: c,
                          selected: e.props.selected,
                          components: d,
                          accessors: l,
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
      var Ma = (function (e) {
        (0, l.A)(n, e);
        var t = (0, c.A)(n);
        function n(e) {
          var o;
          return (
            (0, a.A)(this, n),
            ((o = t.call(this, e)).handleScroll = function (e) {
              o.scrollRef.current &&
                (o.scrollRef.current.scrollLeft = e.target.scrollLeft);
            }),
            (o.handleResize = function () {
              Ie(o.rafHandle), (o.rafHandle = He(o.checkOverflow));
            }),
            (o.handleKeyPressEvent = function () {
              o.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              Qo(o.props.onKeyPressEvent, t);
            }),
            (o.handleSelectEvent = function () {
              o.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              Qo(o.props.onSelectEvent, t);
            }),
            (o.handleDoubleClickEvent = function () {
              o.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              Qo(o.props.onDoubleClickEvent, t);
            }),
            (o.handleShowMore = function (e, t, n, i, a) {
              var s = o.props,
                l = s.popup,
                c = s.onDrillDown,
                u = s.onShowMore,
                f = s.getDrilldownView,
                d = s.doShowMoreDrillDown;
              if ((o.clearSelection(), l)) {
                var p = Ne(n, o.containerRef.current);
                o.setState({
                  overlay: {
                    date: t,
                    events: e,
                    position: (0, r.A)((0, r.A)({}, p), {}, { width: "200px" }),
                    target: a,
                  },
                });
              } else d && Qo(c, [t, f(t) || Zo.DAY]);
              Qo(u, [e, t, i]);
            }),
            (o.handleSelectAllDaySlot = function (e, t) {
              var n = o.props.onSelectSlot,
                r = new Date(e[0]),
                i = new Date(e[e.length - 1]);
              i.setDate(e[e.length - 1].getDate() + 1),
                Qo(n, {
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
            (o.memoizedResources = Qn(function (e, t) {
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
                  Ie(this.rafHandle),
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
                  l = i.components,
                  c = i.accessors,
                  d = i.localizer,
                  p = i.dayLayoutAlgorithm,
                  v = this.memoizedResources(this.props.resources, c),
                  h = v.groupEvents(t),
                  m = v.groupEvents(n);
                return v.map(function (t, n) {
                  var i = (0, u.A)(t, 2),
                    v = i[0],
                    g = i[1];
                  return e.map(function (e, t) {
                    var i = (h.get(v) || []).filter(function (t) {
                        return d.inRange(e, c.start(t), c.end(t), "day");
                      }),
                      u = (m.get(v) || []).filter(function (t) {
                        return d.inRange(e, c.start(t), c.end(t), "day");
                      });
                    return f.createElement(
                      Ea,
                      Object.assign({}, o.props, {
                        localizer: d,
                        min: d.merge(e, a),
                        max: d.merge(e, s),
                        resource: g && v,
                        components: l,
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
                  l = t.getNow,
                  c = t.resources,
                  u = t.components,
                  d = t.accessors,
                  p = t.getters,
                  v = t.localizer,
                  h = t.min,
                  m = t.max,
                  g = t.showMultiDayTimes,
                  y = t.longPressThreshold,
                  w = t.resizable;
                i = i || this.state.gutterWidth;
                var b = o[0],
                  A = o[o.length - 1];
                this.slots = o.length;
                var E = [],
                  D = [],
                  x = [];
                return (
                  n.forEach(function (e) {
                    if ($i(e, b, A, d, v)) {
                      var t = d.start(e),
                        n = d.end(e);
                      d.allDay(e) ||
                      v.startAndEndAreDateOnly(t, n) ||
                      (!g && !v.isSameDate(t, n))
                        ? E.push(e)
                        : D.push(e);
                    }
                  }),
                  r.forEach(function (e) {
                    $i(e, b, A, d, v) && x.push(e);
                  }),
                  E.sort(function (e, t) {
                    return Xi(e, t, d, v);
                  }),
                  f.createElement(
                    "div",
                    {
                      className: S(
                        "rbc-time-view",
                        c && "rbc-time-view-resources",
                      ),
                      ref: this.containerRef,
                    },
                    f.createElement(Oa, {
                      range: o,
                      events: E,
                      width: i,
                      rtl: a,
                      getNow: l,
                      localizer: v,
                      selected: s,
                      allDayMaxRows: this.props.showAllEvents
                        ? 1 / 0
                        : null !== (e = this.props.allDayMaxRows) &&
                            void 0 !== e
                          ? e
                          : 1 / 0,
                      resources: this.memoizedResources(c, d),
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
                      resizable: w,
                    }),
                    this.props.popup && this.renderOverlay(),
                    f.createElement(
                      "div",
                      {
                        ref: this.contentRef,
                        className: "rbc-time-content",
                        onScroll: this.handleScroll,
                      },
                      f.createElement(Sa, {
                        date: b,
                        ref: this.gutterRef,
                        localizer: v,
                        min: v.merge(b, h),
                        max: v.merge(b, m),
                        step: this.props.step,
                        getNow: this.props.getNow,
                        timeslots: this.props.timeslots,
                        components: u,
                        className: "rbc-time-gutter",
                        getters: p,
                      }),
                      this.renderEvents(o, D, x, l()),
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
                  l = o.getters,
                  c = o.selected,
                  u = o.popupOffset,
                  d = o.handleDragStart;
                return f.createElement(Ci, {
                  overlay: r,
                  accessors: i,
                  localizer: a,
                  components: s,
                  getters: l,
                  selected: c,
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
                            ? Er(e.gutterRef.current)
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
      Ma.defaultProps = { step: 30, timeslots: 2 };
      var Ta = [
          "date",
          "localizer",
          "min",
          "max",
          "scrollToTime",
          "enableAutoScroll",
        ],
        Ra = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
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
                    l = void 0 === s ? r.endOf(new Date(), "day") : s,
                    c = e.scrollToTime,
                    u = void 0 === c ? r.startOf(new Date(), "day") : c,
                    d = e.enableAutoScroll,
                    p = void 0 === d || d,
                    v = (0, o.A)(e, Ta),
                    h = n.range(t, { localizer: r });
                  return f.createElement(
                    Ma,
                    Object.assign({}, v, {
                      range: h,
                      eventOffset: 10,
                      localizer: r,
                      min: a,
                      max: l,
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
      (Ra.range = function (e, t) {
        return [t.localizer.startOf(e, "day")];
      }),
        (Ra.navigate = function (e, t, n) {
          var r = n.localizer;
          switch (t) {
            case Ko:
              return r.add(e, -1, "day");
            case $o:
              return r.add(e, 1, "day");
            default:
              return e;
          }
        }),
        (Ra.title = function (e, t) {
          return t.localizer.format(e, "dayHeaderFormat");
        });
      var _a = [
          "date",
          "localizer",
          "min",
          "max",
          "scrollToTime",
          "enableAutoScroll",
        ],
        Ca = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
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
                    l = void 0 === s ? r.endOf(new Date(), "day") : s,
                    c = e.scrollToTime,
                    u = void 0 === c ? r.startOf(new Date(), "day") : c,
                    d = e.enableAutoScroll,
                    p = void 0 === d || d,
                    v = (0, o.A)(e, _a),
                    h = n.range(t, this.props);
                  return f.createElement(
                    Ma,
                    Object.assign({}, v, {
                      range: h,
                      eventOffset: 15,
                      localizer: r,
                      min: a,
                      max: l,
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
      (Ca.defaultProps = Ma.defaultProps),
        (Ca.navigate = function (e, t, n) {
          var r = n.localizer;
          switch (t) {
            case Ko:
              return r.add(e, -1, "week");
            case $o:
              return r.add(e, 1, "week");
            default:
              return e;
          }
        }),
        (Ca.range = function (e, t) {
          var n = t.localizer,
            r = n.startOfWeek(),
            o = n.startOf(e, "week", r),
            i = n.endOf(e, "week", r);
          return n.range(o, i);
        }),
        (Ca.title = function (e, t) {
          var n = t.localizer,
            r = kr(Ca.range(e, { localizer: n })),
            o = r[0],
            i = r.slice(1);
          return n.format({ start: o, end: i.pop() }, "dayRangeHeaderFormat");
        });
      var Pa = [
        "date",
        "localizer",
        "min",
        "max",
        "scrollToTime",
        "enableAutoScroll",
      ];
      function Na(e, t) {
        return Ca.range(e, t).filter(function (e) {
          return -1 === [6, 0].indexOf(e.getDay());
        });
      }
      var La,
        za = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
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
                    l = e.scrollToTime,
                    c = void 0 === l ? n.startOf(new Date(), "day") : l,
                    u = e.enableAutoScroll,
                    d = void 0 === u || u,
                    p = (0, o.A)(e, Pa),
                    v = Na(t, this.props);
                  return f.createElement(
                    Ma,
                    Object.assign({}, p, {
                      range: v,
                      eventOffset: 15,
                      localizer: n,
                      min: i,
                      max: s,
                      scrollToTime: c,
                      enableAutoScroll: d,
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      function ja(e) {
        var t = e.accessors,
          n = e.components,
          r = e.date,
          o = e.events,
          i = e.getters,
          a = e.length,
          s = e.localizer,
          l = e.onDoubleClickEvent,
          c = e.onSelectEvent,
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
              l = t.end(r),
              c = t.start(r);
            return (
              t.allDay(r) ||
                (s.eq(c, l)
                  ? (a = s.format(c, "agendaTimeFormat"))
                  : s.isSameDate(c, l)
                    ? (a = s.format(
                        { start: c, end: l },
                        "agendaTimeRangeFormat",
                      ))
                    : s.isSameDate(e, c)
                      ? (a = s.format(c, "agendaTimeFormat"))
                      : s.isSameDate(e, l) &&
                        (a = s.format(l, "agendaTimeFormat"))),
              s.gt(e, c, "day") && (o = "rbc-continues-prior"),
              s.lt(e, l, "day") && (o += " rbc-continues-after"),
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
                (r = [Er(t.children[0]), Er(t.children[1])]),
                  (o[0] === r[0] && o[1] === r[1]) ||
                    ((p.current.style.width = r[0] + "px"),
                    (v.current.style.width = r[1] + "px")),
                  n
                    ? ((0, Mr.A)(e, "rbc-header-overflowing"),
                      (e.style.marginRight = Ar() + "px"))
                    : (0, Tr.A)(e, "rbc-header-overflowing");
              }
            }
          },
          w = s.messages,
          b = s.add(r, a, "day"),
          A = s.range(r, b, "day");
        return (
          (o = o.filter(function (e) {
            return $i(e, s.startOf(r, "day"), s.endOf(b, "day"), t, s);
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
                          w.date,
                        ),
                        f.createElement(
                          "th",
                          { className: "rbc-header", ref: v },
                          w.time,
                        ),
                        f.createElement(
                          "th",
                          { className: "rbc-header" },
                          w.event,
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
                              return $i(
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
                                y = i.eventProp(n, m, h, Oi(n, u)),
                                w = 0 === p && s.format(e, "agendaDateFormat"),
                                b =
                                  0 === p &&
                                  f.createElement(
                                    "td",
                                    {
                                      rowSpan: r.length,
                                      className: "rbc-agenda-date-cell",
                                    },
                                    d
                                      ? f.createElement(d, { day: e, label: w })
                                      : w,
                                  );
                              return f.createElement(
                                "tr",
                                {
                                  key: o + "_" + p,
                                  className: y.className,
                                  style: y.style,
                                },
                                b,
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
                                      return c && c(n, e);
                                    },
                                    onDoubleClick: function (e) {
                                      return l && l(n, e);
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
                  w.noEventsInRange,
                ),
          )
        );
      }
      (za.defaultProps = Ma.defaultProps),
        (za.range = Na),
        (za.navigate = Ca.navigate),
        (za.title = function (e, t) {
          var n = t.localizer,
            r = kr(Na(e, { localizer: n })),
            o = r[0],
            i = r.slice(1);
          return n.format({ start: o, end: i.pop() }, "dayRangeHeaderFormat");
        }),
        (ja.defaultProps = { length: 30 }),
        (ja.range = function (e, t) {
          var n = t.length,
            r = void 0 === n ? ja.defaultProps.length : n;
          return { start: e, end: t.localizer.add(e, r, "day") };
        }),
        (ja.navigate = function (e, t, n) {
          var r = n.length,
            o = void 0 === r ? ja.defaultProps.length : r,
            i = n.localizer;
          switch (t) {
            case Ko:
              return i.add(e, -o, "day");
            case $o:
              return i.add(e, o, "day");
            default:
              return e;
          }
        }),
        (ja.title = function (e, t) {
          var n = t.length,
            r = void 0 === n ? ja.defaultProps.length : n,
            o = t.localizer,
            i = o.add(e, r, "day");
          return o.format({ start: e, end: i }, "agendaHeaderFormat");
        });
      var Fa =
          ((La = {}),
          (0, ce.A)(La, Zo.MONTH, sa),
          (0, ce.A)(La, Zo.WEEK, Ca),
          (0, ce.A)(La, Zo.WORK_WEEK, za),
          (0, ce.A)(La, Zo.DAY, Ra),
          (0, ce.A)(La, Zo.AGENDA, ja),
          La),
        Wa = ["action", "date", "today"];
      var Ia = (function (e) {
        (0, l.A)(n, e);
        var t = (0, c.A)(n);
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
                      { type: "button", onClick: this.navigate.bind(null, Go) },
                      t.today,
                    ),
                    f.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, Ko) },
                      t.previous,
                    ),
                    f.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, $o) },
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
                        className: S({ "rbc-active": r === n }),
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
      var Ha = function (e) {
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
        Ba = ["view", "date", "getNow", "onNavigate"],
        Ya = [
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
      function Ua(e) {
        if (Array.isArray(e)) return e;
        for (var t = [], n = 0, r = Object.entries(e); n < r.length; n++) {
          var o = (0, u.A)(r[n], 2),
            i = o[0];
          o[1] && t.push(i);
        }
        return t;
      }
      var Va = (function (e) {
        (0, l.A)(n, e);
        var t = (0, c.A)(n);
        function n() {
          var e;
          (0, a.A)(this, n);
          for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
            l[c] = arguments[c];
          return (
            ((e = t.call.apply(t, [this].concat(l))).getViews = function () {
              var t = e.props.views;
              return Array.isArray(t)
                ? Yo(
                    t,
                    function (e, t) {
                      return (e[t] = Fa[t]);
                    },
                    {},
                  )
                : "object" === (0, i.A)(t)
                  ? Vo(t, function (e, t) {
                      return !0 === e ? Fa[t] : e;
                    })
                  : Fa;
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
                l = i.getNow,
                c = i.onNavigate,
                u = (0, o.A)(i, Ba),
                f = e.getView(),
                d = l();
              (s = (function (e, t) {
                var n = t.action,
                  r = t.date,
                  i = t.today,
                  a = (0, o.A)(t, Wa);
                switch (((e = "string" == typeof e ? Fa[e] : e), n)) {
                  case Go:
                    r = i || new Date();
                    break;
                  case Xo:
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
                c(s, a, t),
                e.handleRangeChange(s, f);
            }),
            (e.handleViewChange = function (t) {
              t !== e.props.view &&
                (function (e, t) {
                  return -1 !== Ua(t.views).indexOf(e);
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
              Qo(e.props.onSelectEvent, n);
            }),
            (e.handleDoubleClickEvent = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              Qo(e.props.onDoubleClickEvent, n);
            }),
            (e.handleKeyPressEvent = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              Qo(e.props.onKeyPressEvent, n);
            }),
            (e.handleSelectSlot = function (t) {
              Qo(e.props.onSelectSlot, t);
            }),
            (e.handleDrillDown = function (t, n) {
              var r = e.props.onDrillDown;
              r
                ? r(t, n, e.drilldownView)
                : (n && e.handleViewChange(n), e.handleNavigate(Xo, t));
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
                    l = e.elementProps,
                    c = e.date,
                    u = e.getNow,
                    d = e.length,
                    p = e.showMultiDayTimes,
                    v = e.onShowMore,
                    h = e.doShowMoreDrillDown;
                  e.components, e.formats, e.messages, e.culture;
                  var m = (0, o.A)(e, Ya);
                  c = c || u();
                  var g = this.getView(),
                    y = this.state.context,
                    w = y.accessors,
                    b = y.components,
                    A = y.getters,
                    E = y.localizer,
                    D = y.viewNames,
                    x = b.toolbar || Ia,
                    O = g.title(c, { localizer: E, length: d });
                  return f.createElement(
                    "div",
                    Object.assign({}, l, {
                      className: S(s, "rbc-calendar", m.rtl && "rbc-rtl"),
                      style: a,
                    }),
                    n &&
                      f.createElement(x, {
                        date: c,
                        view: t,
                        views: D,
                        label: O,
                        onView: this.handleViewChange,
                        onNavigate: this.handleNavigate,
                        localizer: E,
                      }),
                    f.createElement(
                      g,
                      Object.assign({}, m, {
                        events: r,
                        backgroundEvents: i,
                        date: c,
                        getNow: u,
                        length: d,
                        localizer: E,
                        getters: A,
                        components: b,
                        accessors: w,
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
                    l = e.resourceIdAccessor,
                    c = e.resourceTitleAccessor,
                    u = e.eventPropGetter,
                    f = e.backgroundEventPropGetter,
                    d = e.slotPropGetter,
                    p = e.slotGroupPropGetter,
                    v = e.dayPropGetter,
                    h = e.view,
                    m = e.views,
                    g = e.localizer,
                    y = e.culture,
                    w = e.messages,
                    b = void 0 === w ? {} : w,
                    A = e.components,
                    E = void 0 === A ? {} : A,
                    D = e.formats,
                    S = void 0 === D ? {} : D,
                    x = Ua(m);
                  return {
                    viewNames: x,
                    localizer: Ei(
                      g,
                      y,
                      S,
                      (function (e) {
                        return (0, r.A)((0, r.A)({}, Di), e);
                      })(b),
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
                    components: Fo(E[h] || {}, No(E, x), {
                      eventWrapper: qo,
                      backgroundEventWrapper: qo,
                      eventContainerWrapper: qo,
                      dateCellWrapper: qo,
                      weekWrapper: qo,
                      timeSlotWrapper: qo,
                      timeGutterWrapper: qo,
                    }),
                    accessors: {
                      start: Ha(t),
                      end: Ha(n),
                      allDay: Ha(o),
                      tooltip: Ha(i),
                      title: Ha(a),
                      resource: Ha(s),
                      resourceId: Ha(l),
                      resourceTitle: Ha(c),
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
        view: Zo.MONTH,
        views: [Zo.MONTH, Zo.WEEK, Zo.DAY, Zo.AGENDA],
        step: 30,
        length: 30,
        allDayMaxRows: 1 / 0,
        doShowMoreDrillDown: !0,
        drilldownView: Zo.DAY,
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
            l = s.map(m);
          !a && r.length && p()(!1);
          var c = (function (e) {
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
              var l = Object.create(null);
              return (
                s.forEach(function (e) {
                  l[e] = t.props[m(e)];
                }),
                (t.state = { values: l, prevProps: {} }),
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
                l.forEach(function (e) {
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
          !(function (e) {
            var t = e.prototype;
            if (!t || !t.isReactComponent)
              throw new Error("Can only polyfill class components");
            if (
              "function" != typeof e.getDerivedStateFromProps &&
              "function" != typeof t.getSnapshotBeforeUpdate
            )
              return e;
            var n = null,
              r = null,
              o = null;
            if (
              ("function" == typeof t.componentWillMount
                ? (n = "componentWillMount")
                : "function" == typeof t.UNSAFE_componentWillMount &&
                  (n = "UNSAFE_componentWillMount"),
              "function" == typeof t.componentWillReceiveProps
                ? (r = "componentWillReceiveProps")
                : "function" == typeof t.UNSAFE_componentWillReceiveProps &&
                  (r = "UNSAFE_componentWillReceiveProps"),
              "function" == typeof t.componentWillUpdate
                ? (o = "componentWillUpdate")
                : "function" == typeof t.UNSAFE_componentWillUpdate &&
                  (o = "UNSAFE_componentWillUpdate"),
              null !== n || null !== r || null !== o)
            ) {
              var i = e.displayName || e.name,
                a =
                  "function" == typeof e.getDerivedStateFromProps
                    ? "getDerivedStateFromProps()"
                    : "getSnapshotBeforeUpdate()";
              throw Error(
                "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
                  i +
                  " uses " +
                  a +
                  " but also contains the following legacy lifecycles:" +
                  (null !== n ? "\n  " + n : "") +
                  (null !== r ? "\n  " + r : "") +
                  (null !== o ? "\n  " + o : "") +
                  "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks",
              );
            }
            if (
              ("function" == typeof e.getDerivedStateFromProps &&
                ((t.componentWillMount = b), (t.componentWillReceiveProps = A)),
              "function" == typeof t.getSnapshotBeforeUpdate)
            ) {
              if ("function" != typeof t.componentDidUpdate)
                throw new Error(
                  "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype",
                );
              t.componentWillUpdate = E;
              var s = t.componentDidUpdate;
              t.componentDidUpdate = function (e, t, n) {
                var r = this.__reactInternalSnapshotFlag
                  ? this.__reactInternalSnapshot
                  : n;
                s.call(this, e, t, r);
              };
            }
          })(c),
            (c.displayName = "Uncontrolled(" + i + ")"),
            (c.propTypes = (0, y.A)(
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
              c.prototype[e] = function () {
                var t;
                return (t = this.inner)[e].apply(t, arguments);
              };
            });
          var u = c;
          return (
            f.forwardRef &&
              ((u = f.forwardRef(function (e, t) {
                return f.createElement(
                  c,
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
              })).propTypes = c.propTypes),
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
        Ka = function (e, t, n) {
          var r = e.start,
            o = e.end;
          return n.format(r, "LT", t) + " – " + n.format(o, "LT", t);
        },
        $a = {
          dateFormat: "DD",
          dayFormat: "DD ddd",
          weekdayFormat: "ddd",
          selectRangeFormat: Ka,
          eventTimeRangeFormat: Ka,
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
          agendaTimeRangeFormat: Ka,
        };
      function Ga(e) {
        var t = e ? e.toLowerCase() : e;
        return "FullYear" === t ? (t = "year") : t || (t = void 0), t;
      }
      function Xa(e) {
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
          var o = Ga(r);
          return [o ? e(t).startOf(o) : e(t), o ? e(n).startOf(o) : e(n), o];
        }
        function r() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            n = Ga(arguments.length > 1 ? arguments[1] : void 0);
          return n ? e(t).startOf(n).toDate() : e(t).toDate();
        }
        function o(e, t, r) {
          var o = n(e, t, r),
            i = (0, u.A)(o, 3),
            a = i[0],
            s = i[1],
            l = i[2];
          return a.isSame(s, l);
        }
        function i(e, t, r) {
          var o = n(e, t, r),
            i = (0, u.A)(o, 3),
            a = i[0],
            s = i[1],
            l = i[2];
          return a.isSameOrBefore(s, l);
        }
        function a(t, n, r) {
          var o = Ga(r);
          return e(t).add(n, o).toDate();
        }
        function s(e, t) {
          var n = Ga(t),
            i = r(e, n);
          return o(i, e) ? i : a(i, 1, n);
        }
        function l(t, n) {
          var r = Ga(
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "day",
            ),
            o = e(t);
          return e(n).diff(o, r);
        }
        function c(t) {
          return e(t).startOf("month").startOf("week").toDate();
        }
        function f(t) {
          return e(t).endOf("month").endOf("week").toDate();
        }
        return new Ai({
          formats: $a,
          firstOfWeek: function (t) {
            var n = t ? e.localeData(t) : e.localeData();
            return n ? n.firstDayOfWeek() : 0;
          },
          firstVisibleDay: c,
          lastVisibleDay: f,
          visibleDays: function (e) {
            for (var t = c(e), n = f(e), r = []; i(t, n); )
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
              l = i[2];
            return a.isBefore(s, l);
          },
          lte: i,
          gt: function (e, t, r) {
            var o = n(e, t, r),
              i = (0, u.A)(o, 3),
              a = i[0],
              s = i[1],
              l = i[2];
            return a.isAfter(s, l);
          },
          gte: function (e, t, r) {
            var o = n(e, t, r),
              i = (0, u.A)(o, 3),
              a = i[0],
              s = i[1],
              l = i[2];
            return a.isSameOrBefore(s, l);
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
            var o = Ga(
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
              n = Ga(arguments.length > 1 ? arguments[1] : void 0);
            return n ? e(t).endOf(n).toDate() : e(t).toDate();
          },
          range: function (t, n) {
            for (
              var r = Ga(
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
          diff: l,
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
            return l(e, t, "minutes");
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
              c = a.start,
              u = a.end,
              f = a.allDay,
              d = +r(n, "day") - +r(c, "day"),
              p = l(n, s(o, "day"), "day"),
              v = l(c, s(u, "day"), "day");
            return (
              d ||
              Math.max(v, 1) - Math.max(p, 1) ||
              !!f - !!i ||
              +n - +c ||
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
              l = e(r).startOf("day"),
              c = e(o),
              u = e(a),
              f = e(s),
              d = l.isSameOrBefore(f, "day"),
              p = !l.isSame(c, "minutes")
                ? c.isAfter(u, "minutes")
                : c.isSameOrAfter(u, "minutes");
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
    94607: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => S });
      var r = n(42891),
        o = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
      var i = void 0;
      function a() {
        return (
          void 0 === i &&
            (i = (function () {
              if (!o) return !1;
              if (
                !window.addEventListener ||
                !window.removeEventListener ||
                !Object.defineProperty
              )
                return !1;
              var e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                      e = !0;
                    },
                  }),
                  n = function () {};
                window.addEventListener("testPassiveEventSupport", n, t),
                  window.removeEventListener("testPassiveEventSupport", n, t);
              } catch (e) {}
              return e;
            })()),
          i
        );
      }
      function s(e) {
        e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice());
      }
      function l(e) {
        (this.target = e), (this.events = {});
      }
      (l.prototype.getEventHandlers = function (e, t) {
        var n,
          r =
            String(e) +
            " " +
            String(
              (n = t)
                ? !0 === n
                  ? 100
                  : (n.capture << 0) + (n.passive << 1) + (n.once << 2)
                : 0,
            );
        return (
          this.events[r] ||
            ((this.events[r] = { handlers: [], handleEvent: void 0 }),
            (this.events[r].nextHandlers = this.events[r].handlers)),
          this.events[r]
        );
      }),
        (l.prototype.handleEvent = function (e, t, n) {
          var r = this.getEventHandlers(e, t);
          (r.handlers = r.nextHandlers),
            r.handlers.forEach(function (e) {
              e && e(n);
            });
        }),
        (l.prototype.add = function (e, t, n) {
          var r = this,
            o = this.getEventHandlers(e, n);
          s(o),
            0 === o.nextHandlers.length &&
              ((o.handleEvent = this.handleEvent.bind(this, e, n)),
              this.target.addEventListener(e, o.handleEvent, n)),
            o.nextHandlers.push(t);
          var i = !0;
          return function () {
            if (i) {
              (i = !1), s(o);
              var a = o.nextHandlers.indexOf(t);
              o.nextHandlers.splice(a, 1),
                0 === o.nextHandlers.length &&
                  (r.target &&
                    r.target.removeEventListener(e, o.handleEvent, n),
                  (o.handleEvent = void 0));
            }
          };
        });
      var c = "__consolidated_events_handlers__";
      function u(e, t, n, r) {
        e[c] || (e[c] = new l(e));
        var o = (function (e) {
          if (e) return a() ? e : !!e.capture;
        })(r);
        return e[c].add(t, n, o);
      }
      var f = n(90626),
        d = n(98193);
      function p(e, t) {
        var n,
          r =
            ((n = e),
            !isNaN(parseFloat(n)) && isFinite(n)
              ? parseFloat(n)
              : "px" === n.slice(-2)
                ? parseFloat(n.slice(0, -2))
                : void 0);
        if ("number" == typeof r) return r;
        var o = (function (e) {
          if ("%" === e.slice(-1)) return parseFloat(e.slice(0, -1)) / 100;
        })(e);
        return "number" == typeof o ? o * t : void 0;
      }
      var v = "above",
        h = "inside",
        m = "below",
        g = "invisible";
      function y(e) {
        return "string" == typeof e.type;
      }
      var w;
      var b = [];
      function A(e) {
        b.push(e),
          w ||
            (w = setTimeout(function () {
              var e;
              for (w = null; (e = b.shift()); ) e();
            }, 0));
        var t = !0;
        return function () {
          if (t) {
            t = !1;
            var n = b.indexOf(e);
            -1 !== n &&
              (b.splice(n, 1), !b.length && w && (clearTimeout(w), (w = null)));
          }
        };
      }
      var E = "undefined" != typeof window,
        D = {
          debug: !1,
          scrollableAncestor: void 0,
          children: void 0,
          topOffset: "0px",
          bottomOffset: "0px",
          horizontal: !1,
          onEnter: function () {},
          onLeave: function () {},
          onPositionChange: function () {},
          fireOnRapidScroll: !0,
        },
        S = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).refElement = function (e) {
                n._ref = e;
              }),
              n
            );
          }
          (0, r.A)(t, e);
          var o = t.prototype;
          return (
            (o.componentDidMount = function () {
              var e = this;
              E &&
                (this.cancelOnNextTick = A(function () {
                  e.cancelOnNextTick = null;
                  var t = e.props,
                    n = t.children;
                  t.debug;
                  !(function (e, t) {
                    if (e && !y(e) && !t)
                      throw new Error(
                        "<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.",
                      );
                  })(n, e._ref),
                    (e._handleScroll = e._handleScroll.bind(e)),
                    (e.scrollableAncestor = e._findScrollableAncestor()),
                    (e.scrollEventListenerUnsubscribe = u(
                      e.scrollableAncestor,
                      "scroll",
                      e._handleScroll,
                      { passive: !0 },
                    )),
                    (e.resizeEventListenerUnsubscribe = u(
                      window,
                      "resize",
                      e._handleScroll,
                      { passive: !0 },
                    )),
                    e._handleScroll(null);
                }));
            }),
            (o.componentDidUpdate = function () {
              var e = this;
              E &&
                this.scrollableAncestor &&
                (this.cancelOnNextTick ||
                  (this.cancelOnNextTick = A(function () {
                    (e.cancelOnNextTick = null), e._handleScroll(null);
                  })));
            }),
            (o.componentWillUnmount = function () {
              E &&
                (this.scrollEventListenerUnsubscribe &&
                  this.scrollEventListenerUnsubscribe(),
                this.resizeEventListenerUnsubscribe &&
                  this.resizeEventListenerUnsubscribe(),
                this.cancelOnNextTick && this.cancelOnNextTick());
            }),
            (o._findScrollableAncestor = function () {
              var e = this.props,
                t = e.horizontal,
                r = e.scrollableAncestor;
              if (r)
                return (function (e) {
                  return "window" === e ? n.g.window : e;
                })(r);
              for (var o = this._ref; o.parentNode; ) {
                if ((o = o.parentNode) === document.body) return window;
                var i = window.getComputedStyle(o),
                  a =
                    (t
                      ? i.getPropertyValue("overflow-x")
                      : i.getPropertyValue("overflow-y")) ||
                    i.getPropertyValue("overflow");
                if ("auto" === a || "scroll" === a || "overlay" === a) return o;
              }
              return window;
            }),
            (o._handleScroll = function (e) {
              if (this._ref) {
                var t = this._getBounds(),
                  n = (function (e) {
                    return e.viewportBottom - e.viewportTop == 0
                      ? g
                      : (e.viewportTop <= e.waypointTop &&
                            e.waypointTop <= e.viewportBottom) ||
                          (e.viewportTop <= e.waypointBottom &&
                            e.waypointBottom <= e.viewportBottom) ||
                          (e.waypointTop <= e.viewportTop &&
                            e.viewportBottom <= e.waypointBottom)
                        ? h
                        : e.viewportBottom < e.waypointTop
                          ? m
                          : e.waypointTop < e.viewportTop
                            ? v
                            : g;
                  })(t),
                  r = this._previousPosition,
                  o = this.props,
                  i = (o.debug, o.onPositionChange),
                  a = o.onEnter,
                  s = o.onLeave,
                  l = o.fireOnRapidScroll;
                if (((this._previousPosition = n), r !== n)) {
                  var c = {
                    currentPosition: n,
                    previousPosition: r,
                    event: e,
                    waypointTop: t.waypointTop,
                    waypointBottom: t.waypointBottom,
                    viewportTop: t.viewportTop,
                    viewportBottom: t.viewportBottom,
                  };
                  i.call(this, c),
                    n === h ? a.call(this, c) : r === h && s.call(this, c),
                    l &&
                      ((r === m && n === v) || (r === v && n === m)) &&
                      (a.call(this, {
                        currentPosition: h,
                        previousPosition: r,
                        event: e,
                        waypointTop: t.waypointTop,
                        waypointBottom: t.waypointBottom,
                        viewportTop: t.viewportTop,
                        viewportBottom: t.viewportBottom,
                      }),
                      s.call(this, {
                        currentPosition: n,
                        previousPosition: h,
                        event: e,
                        waypointTop: t.waypointTop,
                        waypointBottom: t.waypointBottom,
                        viewportTop: t.viewportTop,
                        viewportBottom: t.viewportBottom,
                      }));
                }
              }
            }),
            (o._getBounds = function () {
              var e,
                t,
                n = this.props,
                r = n.horizontal,
                o = (n.debug, this._ref.getBoundingClientRect()),
                i = o.left,
                a = o.top,
                s = o.right,
                l = o.bottom,
                c = r ? i : a,
                u = r ? s : l;
              this.scrollableAncestor === window
                ? ((e = r ? window.innerWidth : window.innerHeight), (t = 0))
                : ((e = r
                    ? this.scrollableAncestor.offsetWidth
                    : this.scrollableAncestor.offsetHeight),
                  (t = r
                    ? this.scrollableAncestor.getBoundingClientRect().left
                    : this.scrollableAncestor.getBoundingClientRect().top));
              var f = this.props,
                d = f.bottomOffset;
              return {
                waypointTop: c,
                waypointBottom: u,
                viewportTop: t + p(f.topOffset, e),
                viewportBottom: t + e - p(d, e),
              };
            }),
            (o.render = function () {
              var e = this,
                t = this.props.children;
              if (!t)
                return f.createElement("span", {
                  ref: this.refElement,
                  style: { fontSize: 0 },
                });
              if (y(t) || (0, d.isForwardRef)(t)) {
                return f.cloneElement(t, {
                  ref: function (n) {
                    e.refElement(n),
                      t.ref &&
                        ("function" == typeof t.ref
                          ? t.ref(n)
                          : (t.ref.current = n));
                  },
                });
              }
              return f.cloneElement(t, { innerRef: this.refElement });
            }),
            t
          );
        })(f.PureComponent);
      (S.above = v),
        (S.below = m),
        (S.inside = h),
        (S.invisible = g),
        (S.defaultProps = D),
        (S.displayName = "Waypoint");
    },
    11314: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => l });
      var r = n(1839),
        o = n(62059),
        i = n(36058),
        a = n(55241),
        s = n(5608),
        l = (0, r.gu)({
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
    66251: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => l });
      var r = n(1839),
        o = n(76549),
        i = n(36058),
        a = n(55241),
        s = n(5608),
        l = (0, r.gu)({
          chartName: "LineChart",
          GraphicalChild: o.N,
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
  },
]);
