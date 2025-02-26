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
    41653: (e, t, n) => {
      "use strict";
      n.d(t, { Vv: () => qa, Pp: () => Zo, ye: () => Xa });
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
        h = function () {};
      function v(e, t) {
        return void 0 !== e[t];
      }
      function m(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      var g = n(81115),
        y = n(58584),
        b = n(42891);
      function w() {
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
      function D(e, t) {
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
      (w.__suppressDeprecationWarning = !0),
        (A.__suppressDeprecationWarning = !0),
        (D.__suppressDeprecationWarning = !0);
      function E(e) {
        var t,
          n,
          r = "";
        if ("string" == typeof e || "number" == typeof e) r += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (n = E(e[t])) && (r && (r += " "), (r += n));
          else for (t in e) e[t] && (r && (r += " "), (r += t));
        return r;
      }
      const S = function () {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) && (t = E(e)) && (r && (r += " "), (r += t));
        return r;
      };
      var O = n(61410),
        k = n.n(O),
        x = "milliseconds",
        M = "seconds",
        R = "minutes",
        _ = "hours",
        T = "day",
        C = "week",
        P = "month",
        N = "year",
        z = "decade",
        L = "century",
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
          case x:
          case M:
          case R:
          case _:
          case T:
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
          case z:
          case L:
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
                    return [31, W(e), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                  })(a)[s],
                ),
                l = new Date(e);
              return (
                l.setFullYear(a), l.setDate(1), l.setMonth(s), l.setDate(c), l
              );
            })(e, t * F[n]);
        }
        throw new TypeError('Invalid units: "' + n + '"');
      }
      function H(e, t, n) {
        return I(e, -t, n);
      }
      function Y(e, t, n) {
        switch (((e = new Date(e)), t)) {
          case L:
          case z:
          case N:
            e = ie(e, 0);
          case P:
            e = oe(e, 1);
          case C:
          case T:
            e = ne(e, 0);
          case _:
            e = te(e, 0);
          case R:
            e = ee(e, 0);
          case M:
            e = Q(e, 0);
        }
        return (
          t === z && (e = H(e, ae(e) % 10, "year")),
          t === L && (e = H(e, ae(e) % 100, "year")),
          t === C &&
            (e = (function (e, t, n) {
              var r = (re(e) + 7 - (n || 0)) % 7;
              return void 0 === t ? r : I(e, t - r, T);
            })(e, 0, n)),
          e
        );
      }
      function U(e, t, n) {
        switch (((e = Y((e = new Date(e)), t, n)), t)) {
          case L:
          case z:
          case N:
          case P:
          case C:
            (e = H((e = I(e, 1, t)), 1, T)).setHours(23, 59, 59, 999);
            break;
          case T:
            e.setHours(23, 59, 59, 999);
            break;
          case _:
          case R:
          case M:
            e = H((e = I(e, 1, t)), 1, x);
        }
        return e;
      }
      var B = ce(function (e, t) {
          return e === t;
        }),
        V = ce(function (e, t) {
          return e !== t;
        }),
        q = ce(function (e, t) {
          return e > t;
        }),
        K = ce(function (e, t) {
          return e >= t;
        }),
        $ = ce(function (e, t) {
          return e < t;
        }),
        G = ce(function (e, t) {
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
      function ce(e) {
        return function (t, n, r) {
          return e(+Y(t, r), +Y(n, r));
        };
      }
      var le = n(55635),
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
        he = 1 / 0;
      const ve = function (e) {
        return e
          ? (e = (0, pe.A)(e)) === he || e === -1 / 0
            ? 17976931348623157e292 * (e < 0 ? -1 : 1)
            : e == e
              ? e
              : 0
          : 0 === e
            ? e
            : 0;
      };
      const me = function (e) {
        var t = ve(e),
          n = t % 1;
        return t == t ? (n ? t - n : t) : 0;
      };
      var ge = Math.ceil,
        ye = Math.max;
      const be = function (e, t, n) {
        t = (n ? (0, de.A)(e, t, n) : void 0 === t) ? 1 : ye(me(t), 0);
        var r = null == e ? 0 : e.length;
        if (!r || t < 1) return [];
        for (var o = 0, i = 0, a = Array(ge(r / t)); o < r; )
          a[i++] = fe(e, o, (o += t));
        return a;
      };
      function we(e) {
        return (e && e.ownerDocument) || document;
      }
      function Ae(e, t) {
        return (function (e) {
          var t = we(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var De = /([A-Z])/g;
      var Ee = /^ms-/;
      function Se(e) {
        return (function (e) {
          return e.replace(De, "-$1").toLowerCase();
        })(e).replace(Ee, "-ms-");
      }
      var Oe =
        /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      const ke = function (e, t) {
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
                return !(!e || !Oe.test(e));
              })(o)
              ? (n += Se(o) + ": " + i + ";")
              : (r += o + "(" + i + ") ")
            : e.style.removeProperty(Se(o));
        }),
          r && (n += "transform: " + r + ";"),
          (e.style.cssText += ";" + n);
      };
      function xe(e, t) {
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
      function Re(e) {
        var t = "pageXOffset" === e ? "scrollLeft" : "scrollTop";
        return function (n, r) {
          var o = Me(n);
          if (void 0 === r) return o ? o[e] : n[t];
          o ? o.scrollTo(o[e], r) : (n[t] = r);
        };
      }
      const _e = Re("pageXOffset"),
        Te = Re("pageYOffset");
      function Ce(e) {
        var t = we(e),
          n = { top: 0, left: 0, height: 0, width: 0 },
          r = t && t.documentElement;
        return r && xe(r, e)
          ? (void 0 !== e.getBoundingClientRect &&
              (n = e.getBoundingClientRect()),
            (n = {
              top: n.top + Te(r) - (r.clientTop || 0),
              left: n.left + _e(r) - (r.clientLeft || 0),
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
        if ("fixed" === ke(e, "position")) n = e.getBoundingClientRect();
        else {
          var o =
            t ||
            (function (e) {
              for (
                var t = we(e), n = e && e.offsetParent;
                Pe(n) &&
                "HTML" !== n.nodeName &&
                "static" === ke(n, "position");
              )
                n = n.offsetParent;
              return n || t.documentElement;
            })(e);
          (n = Ce(e)),
            "html" !==
              (function (e) {
                return e.nodeName && e.nodeName.toLowerCase();
              })(o) && (r = Ce(o));
          var i = String(ke(o, "borderTopWidth") || 0);
          r.top += parseInt(i, 10) - Te(o) || 0;
          var a = String(ke(o, "borderLeftWidth") || 0);
          r.left += parseInt(a, 10) - _e(o) || 0;
        }
        var s = String(ke(e, "marginTop") || 0),
          c = String(ke(e, "marginLeft") || 0);
        return (0, y.A)({}, n, {
          top: n.top - r.top - (parseInt(s, 10) || 0),
          left: n.left - r.left - (parseInt(c, 10) || 0),
        });
      }
      const ze = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var Le = new Date().getTime();
      var je = "clearTimeout",
        Fe = function (e) {
          var t = new Date().getTime(),
            n = Math.max(0, 16 - (t - Le)),
            r = setTimeout(e, n);
          return (Le = t), r;
        },
        We = function (e, t) {
          return (
            e + (e ? t[0].toUpperCase() + t.substr(1) : t) + "AnimationFrame"
          );
        };
      ze &&
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
        Ye = n(72739);
      function Ue() {
        return (0, f.useState)(null);
      }
      const Be = (e) =>
        e && "function" != typeof e
          ? (t) => {
              e.current = t;
            }
          : e;
      const Ve = function (e, t) {
        return (0, f.useMemo)(
          () =>
            (function (e, t) {
              const n = Be(e),
                r = Be(t);
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
      function ct(e) {
        return e.split("-")[0];
      }
      function lt(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function ut(e) {
        return e instanceof lt(e).Element || e instanceof Element;
      }
      function ft(e) {
        return e instanceof lt(e).HTMLElement || e instanceof HTMLElement;
      }
      function dt(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof lt(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var pt = Math.max,
        ht = Math.min,
        vt = Math.round;
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
          ((o = (e.offsetWidth > 0 && vt(r.width) / e.offsetWidth) || 1),
          (i = (e.offsetHeight > 0 && vt(r.height) / e.offsetHeight) || 1));
        var a = (ut(e) ? lt(e) : window).visualViewport,
          s = !gt() && n,
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
      function bt(e) {
        var t = yt(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function wt(e, t) {
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
      function Dt(e) {
        return lt(e).getComputedStyle(e);
      }
      function Et(e) {
        return ["table", "td", "th"].indexOf(At(e)) >= 0;
      }
      function St(e) {
        return ((ut(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function Ot(e) {
        return "html" === At(e)
          ? e
          : e.assignedSlot || e.parentNode || (dt(e) ? e.host : null) || St(e);
      }
      function kt(e) {
        return ft(e) && "fixed" !== Dt(e).position ? e.offsetParent : null;
      }
      function xt(e) {
        for (
          var t = lt(e), n = kt(e);
          n && Et(n) && "static" === Dt(n).position;
        )
          n = kt(n);
        return n &&
          ("html" === At(n) ||
            ("body" === At(n) && "static" === Dt(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(mt());
                if (
                  /Trident/i.test(mt()) &&
                  ft(e) &&
                  "fixed" === Dt(e).position
                )
                  return null;
                var n = Ot(e);
                for (
                  dt(n) && (n = n.host);
                  ft(n) && ["html", "body"].indexOf(At(n)) < 0;
                ) {
                  var r = Dt(n);
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
      function Rt(e, t, n) {
        return pt(e, ht(t, n));
      }
      function _t(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function Tt(e, t) {
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
            s = ct(n.placement),
            c = Mt(s),
            l = [Ge, $e].indexOf(s) >= 0 ? "height" : "width";
          if (i && a) {
            var u = (function (e, t) {
                return _t(
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
                    : Tt(e, Ze),
                );
              })(o.padding, n),
              f = bt(i),
              d = "y" === c ? qe : Ge,
              p = "y" === c ? Ke : $e,
              h =
                n.rects.reference[l] +
                n.rects.reference[c] -
                a[c] -
                n.rects.popper[l],
              v = a[c] - n.rects.reference[c],
              m = xt(i),
              g = m
                ? "y" === c
                  ? m.clientHeight || 0
                  : m.clientWidth || 0
                : 0,
              y = h / 2 - v / 2,
              b = u[d],
              w = g - f[l] - u[p],
              A = g / 2 - f[l] / 2 + y,
              D = Rt(b, A, w),
              E = c;
            n.modifiersData[r] =
              (((t = {})[E] = D), (t.centerOffset = D - A), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" != typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            wt(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function Pt(e) {
        return e.split("-")[1];
      }
      var Nt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function zt(e) {
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
          h = a.y,
          v = void 0 === h ? 0 : h,
          m = "function" == typeof u ? u({ x: p, y: v }) : { x: p, y: v };
        (p = m.x), (v = m.y);
        var g = a.hasOwnProperty("x"),
          y = a.hasOwnProperty("y"),
          b = Ge,
          w = qe,
          A = window;
        if (l) {
          var D = xt(n),
            E = "clientHeight",
            S = "clientWidth";
          if (
            (D === lt(n) &&
              "static" !== Dt((D = St(n))).position &&
              "absolute" === s &&
              ((E = "scrollHeight"), (S = "scrollWidth")),
            o === qe || ((o === Ge || o === $e) && i === Qe))
          )
            (w = Ke),
              (v -=
                (f && D === A && A.visualViewport
                  ? A.visualViewport.height
                  : D[E]) - r.height),
              (v *= c ? 1 : -1);
          if (o === Ge || ((o === qe || o === Ke) && i === Qe))
            (b = $e),
              (p -=
                (f && D === A && A.visualViewport
                  ? A.visualViewport.width
                  : D[S]) - r.width),
              (p *= c ? 1 : -1);
        }
        var O,
          k = Object.assign({ position: s }, l && Nt),
          x =
            !0 === u
              ? (function (e, t) {
                  var n = e.x,
                    r = e.y,
                    o = t.devicePixelRatio || 1;
                  return { x: vt(n * o) / o || 0, y: vt(r * o) / o || 0 };
                })({ x: p, y: v }, lt(n))
              : { x: p, y: v };
        return (
          (p = x.x),
          (v = x.y),
          c
            ? Object.assign(
                {},
                k,
                (((O = {})[w] = y ? "0" : ""),
                (O[b] = g ? "0" : ""),
                (O.transform =
                  (A.devicePixelRatio || 1) <= 1
                    ? "translate(" + p + "px, " + v + "px)"
                    : "translate3d(" + p + "px, " + v + "px, 0)"),
                O),
              )
            : Object.assign(
                {},
                k,
                (((t = {})[w] = y ? v + "px" : ""),
                (t[b] = g ? p + "px" : ""),
                (t.transform = ""),
                t),
              )
        );
      }
      const Lt = {
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
              placement: ct(t.placement),
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
              zt(
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
                zt(
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
            c = lt(t.elements.popper),
            l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            i &&
              l.forEach(function (e) {
                e.addEventListener("scroll", n.update, jt);
              }),
            s && c.addEventListener("resize", n.update, jt),
            function () {
              i &&
                l.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, jt);
                }),
                s && c.removeEventListener("resize", n.update, jt);
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
      function Yt(e) {
        return e.replace(/start|end/g, function (e) {
          return Ht[e];
        });
      }
      function Ut(e) {
        var t = lt(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function Bt(e) {
        return yt(St(e)).left + Ut(e).scrollLeft;
      }
      function Vt(e) {
        var t = Dt(e),
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
            : qt(Ot(e));
      }
      function Kt(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = qt(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = lt(r),
          a = o ? [i].concat(i.visualViewport || [], Vt(r) ? r : []) : r,
          s = t.concat(a);
        return o ? s : s.concat(Kt(Ot(a)));
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
                var n = lt(e),
                  r = St(e),
                  o = n.visualViewport,
                  i = r.clientWidth,
                  a = r.clientHeight,
                  s = 0,
                  c = 0;
                if (o) {
                  (i = o.width), (a = o.height);
                  var l = gt();
                  (l || (!l && "fixed" === t)) &&
                    ((s = o.offsetLeft), (c = o.offsetTop));
                }
                return { width: i, height: a, x: s + Bt(e), y: c };
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
                    r = Ut(e),
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
                    s = -r.scrollLeft + Bt(e),
                    c = -r.scrollTop;
                  return (
                    "rtl" === Dt(o || n).direction &&
                      (s += pt(n.clientWidth, o ? o.clientWidth : 0) - i),
                    { width: i, height: a, x: s, y: c }
                  );
                })(St(e)),
              );
      }
      function Xt(e, t, n, r) {
        var o =
            "clippingParents" === t
              ? (function (e) {
                  var t = Kt(Ot(e)),
                    n =
                      ["absolute", "fixed"].indexOf(Dt(e).position) >= 0 &&
                      ft(e)
                        ? xt(e)
                        : e;
                  return ut(n)
                    ? t.filter(function (e) {
                        return ut(e) && wt(e, n) && "body" !== At(e);
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
                (t.right = ht(o.right, t.right)),
                (t.bottom = ht(o.bottom, t.bottom)),
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
          i = o ? ct(o) : null,
          a = o ? Pt(o) : null,
          s = n.x + n.width / 2 - r.width / 2,
          c = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case qe:
            t = { x: s, y: n.y - r.height };
            break;
          case Ke:
            t = { x: s, y: n.y + n.height };
            break;
          case $e:
            t = { x: n.x + n.width, y: c };
            break;
          case Ge:
            t = { x: n.x - r.width, y: c };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var l = i ? Mt(i) : null;
        if (null != l) {
          var u = "y" === l ? "height" : "width";
          switch (a) {
            case Je:
              t[l] = t[l] - (n[u] / 2 - r[u] / 2);
              break;
            case Qe:
              t[l] = t[l] + (n[u] / 2 - r[u] / 2);
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
          c = void 0 === s ? et : s,
          l = n.rootBoundary,
          u = void 0 === l ? tt : l,
          f = n.elementContext,
          d = void 0 === f ? nt : f,
          p = n.altBoundary,
          h = void 0 !== p && p,
          v = n.padding,
          m = void 0 === v ? 0 : v,
          g = _t("number" != typeof m ? m : Tt(m, Ze)),
          y = d === nt ? rt : nt,
          b = e.rects.popper,
          w = e.elements[h ? y : d],
          A = Xt(
            ut(w) ? w : w.contextElement || St(e.elements.popper),
            c,
            u,
            a,
          ),
          D = yt(e.elements.reference),
          E = Zt({
            reference: D,
            element: b,
            strategy: "absolute",
            placement: o,
          }),
          S = $t(Object.assign({}, b, E)),
          O = d === nt ? S : D,
          k = {
            top: A.top - O.top + g.top,
            bottom: O.bottom - A.bottom + g.bottom,
            left: A.left - O.left + g.left,
            right: O.right - A.right + g.right,
          },
          x = e.modifiersData.offset;
        if (d === nt && x) {
          var M = x[o];
          Object.keys(k).forEach(function (e) {
            var t = [$e, Ke].indexOf(e) >= 0 ? 1 : -1,
              n = [qe, Ke].indexOf(e) >= 0 ? "y" : "x";
            k[e] += M[n] * t;
          });
        }
        return k;
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
                c = n.fallbackPlacements,
                l = n.padding,
                u = n.boundary,
                f = n.rootBoundary,
                d = n.altBoundary,
                p = n.flipVariations,
                h = void 0 === p || p,
                v = n.allowedAutoPlacements,
                m = t.options.placement,
                g = ct(m),
                y =
                  c ||
                  (g === m || !h
                    ? [It(m)]
                    : (function (e) {
                        if (ct(e) === Xe) return [];
                        var t = It(e);
                        return [Yt(e), t, Yt(t)];
                      })(m)),
                b = [m].concat(y).reduce(function (e, n) {
                  return e.concat(
                    ct(n) === Xe
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var n = t,
                            r = n.placement,
                            o = n.boundary,
                            i = n.rootBoundary,
                            a = n.padding,
                            s = n.flipVariations,
                            c = n.allowedAutoPlacements,
                            l = void 0 === c ? it : c,
                            u = Pt(r),
                            f = u
                              ? s
                                ? ot
                                : ot.filter(function (e) {
                                    return Pt(e) === u;
                                  })
                              : Ze,
                            d = f.filter(function (e) {
                              return l.indexOf(e) >= 0;
                            });
                          0 === d.length && (d = f);
                          var p = d.reduce(function (t, n) {
                            return (
                              (t[n] = Jt(e, {
                                placement: n,
                                boundary: o,
                                rootBoundary: i,
                                padding: a,
                              })[ct(n)]),
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
                          flipVariations: h,
                          allowedAutoPlacements: v,
                        })
                      : n,
                  );
                }, []),
                w = t.rects.reference,
                A = t.rects.popper,
                D = new Map(),
                E = !0,
                S = b[0],
                O = 0;
              O < b.length;
              O++
            ) {
              var k = b[O],
                x = ct(k),
                M = Pt(k) === Je,
                R = [qe, Ke].indexOf(x) >= 0,
                _ = R ? "width" : "height",
                T = Jt(t, {
                  placement: k,
                  boundary: u,
                  rootBoundary: f,
                  altBoundary: d,
                  padding: l,
                }),
                C = R ? (M ? $e : Ge) : M ? Ke : qe;
              w[_] > A[_] && (C = It(C));
              var P = It(C),
                N = [];
              if (
                (i && N.push(T[x] <= 0),
                s && N.push(T[C] <= 0, T[P] <= 0),
                N.every(function (e) {
                  return e;
                }))
              ) {
                (S = k), (E = !1);
                break;
              }
              D.set(k, N);
            }
            if (E)
              for (
                var z = function (e) {
                    var t = b.find(function (t) {
                      var n = D.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (S = t), "break";
                  },
                  L = h ? 3 : 1;
                L > 0;
                L--
              ) {
                if ("break" === z(L)) break;
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
                  var r = ct(e),
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
            c = s.x,
            l = s.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += c),
            (t.modifiersData.popperOffsets.y += l)),
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
            c = n.boundary,
            l = n.rootBoundary,
            u = n.altBoundary,
            f = n.padding,
            d = n.tether,
            p = void 0 === d || d,
            h = n.tetherOffset,
            v = void 0 === h ? 0 : h,
            m = Jt(t, {
              boundary: c,
              rootBoundary: l,
              padding: f,
              altBoundary: u,
            }),
            g = ct(t.placement),
            y = Pt(t.placement),
            b = !y,
            w = Mt(g),
            A = "x" === w ? "y" : "x",
            D = t.modifiersData.popperOffsets,
            E = t.rects.reference,
            S = t.rects.popper,
            O =
              "function" == typeof v
                ? v(Object.assign({}, t.rects, { placement: t.placement }))
                : v,
            k =
              "number" == typeof O
                ? { mainAxis: O, altAxis: O }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, O),
            x = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            M = { x: 0, y: 0 };
          if (D) {
            if (i) {
              var R,
                _ = "y" === w ? qe : Ge,
                T = "y" === w ? Ke : $e,
                C = "y" === w ? "height" : "width",
                P = D[w],
                N = P + m[_],
                z = P - m[T],
                L = p ? -S[C] / 2 : 0,
                j = y === Je ? E[C] : S[C],
                F = y === Je ? -S[C] : -E[C],
                W = t.elements.arrow,
                I = p && W ? bt(W) : { width: 0, height: 0 },
                H = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                Y = H[_],
                U = H[T],
                B = Rt(0, E[C], I[C]),
                V = b
                  ? E[C] / 2 - L - B - Y - k.mainAxis
                  : j - B - Y - k.mainAxis,
                q = b
                  ? -E[C] / 2 + L + B + U + k.mainAxis
                  : F + B + U + k.mainAxis,
                K = t.elements.arrow && xt(t.elements.arrow),
                $ = K ? ("y" === w ? K.clientTop || 0 : K.clientLeft || 0) : 0,
                G = null != (R = null == x ? void 0 : x[w]) ? R : 0,
                X = P + q - G,
                Z = Rt(p ? ht(N, P + V - G - $) : N, P, p ? pt(z, X) : z);
              (D[w] = Z), (M[w] = Z - P);
            }
            if (s) {
              var J,
                Q = "x" === w ? qe : Ge,
                ee = "x" === w ? Ke : $e,
                te = D[A],
                ne = "y" === A ? "height" : "width",
                re = te + m[Q],
                oe = te - m[ee],
                ie = -1 !== [qe, Ge].indexOf(g),
                ae = null != (J = null == x ? void 0 : x[A]) ? J : 0,
                se = ie ? re : te - E[ne] - S[ne] - ae + k.altAxis,
                ce = ie ? te + E[ne] + S[ne] - ae - k.altAxis : oe,
                le =
                  p && ie
                    ? (function (e, t, n) {
                        var r = Rt(e, t, n);
                        return r > n ? n : r;
                      })(se, te, ce)
                    : Rt(p ? se : re, te, p ? ce : oe);
              (D[A] = le), (M[A] = le - te);
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
                n = vt(t.width) / e.offsetWidth || 1,
                r = vt(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          s = St(t),
          c = yt(e, a, n),
          l = { scrollLeft: 0, scrollTop: 0 },
          u = { x: 0, y: 0 };
        return (
          (i || (!i && !n)) &&
            (("body" !== At(t) || Vt(s)) &&
              (l =
                (r = t) !== lt(r) && ft(r)
                  ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop }
                  : Ut(r)),
            ft(t)
              ? (((u = yt(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
              : s && (u.x = Bt(s))),
          {
            x: c.left + l.scrollLeft - u.x,
            y: c.top + l.scrollTop - u.y,
            width: c.width,
            height: c.height,
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
      function cn() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function ln(e) {
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
            c = [],
            l = !1,
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
                  l,
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
                  if (cn(t, n)) {
                    (s.rects = {
                      reference: on(t, xt(n), "fixed" === s.options.strategy),
                      popper: bt(n),
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
          if (!cn(e, t)) return u;
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
      var un = ln({
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
                  c = en(a, r),
                  l = en(s, o, i),
                  u = tn(c),
                  f = tn(l);
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
                t.modifiersData[n] = Zt({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            Lt,
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
        hn = [];
      const vn = function (e, t, n) {
        var r = void 0 === n ? {} : n,
          o = r.enabled,
          i = void 0 === o || o,
          a = r.placement,
          s = void 0 === a ? "bottom" : a,
          c = r.strategy,
          l = void 0 === c ? "absolute" : c,
          u = r.modifiers,
          d = void 0 === u ? hn : u,
          p = (0, g.A)(r, ["enabled", "placement", "strategy", "modifiers"]),
          h = (0, f.useRef)(),
          v = (0, f.useCallback)(function () {
            var e;
            null == (e = h.current) || e.update();
          }, []),
          m = (0, f.useCallback)(function () {
            var e;
            null == (e = h.current) || e.forceUpdate();
          }, []),
          b = st(
            (0, f.useState)({
              placement: s,
              update: v,
              forceUpdate: m,
              attributes: {},
              styles: { popper: fn(l), arrow: {} },
            }),
          ),
          w = b[0],
          A = b[1],
          D = (0, f.useMemo)(
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
                      update: v,
                      forceUpdate: m,
                      placement: t.placement,
                    });
                },
              };
            },
            [v, m, A],
          );
        return (
          (0, f.useEffect)(
            function () {
              h.current &&
                i &&
                h.current.setOptions({
                  placement: s,
                  strategy: l,
                  modifiers: [].concat(d, [D, dn]),
                });
            },
            [l, s, D, i],
          ),
          (0, f.useEffect)(
            function () {
              if (i && null != e && null != t)
                return (
                  (h.current = un(
                    e,
                    t,
                    (0, y.A)({}, p, {
                      placement: s,
                      strategy: l,
                      modifiers: [].concat(d, [pn, D]),
                    }),
                  )),
                  function () {
                    null != h.current &&
                      (h.current.destroy(),
                      (h.current = void 0),
                      A(function (e) {
                        return (0, y.A)({}, e, {
                          attributes: {},
                          styles: { popper: fn(l) },
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
        ze &&
          (window.addEventListener("test", yn, yn),
          window.removeEventListener("test", yn, !0));
      } catch (e) {}
      const bn = function (e, t, n, r) {
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
      const wn = function (e, t, n, r) {
        var o = r && "boolean" != typeof r ? r.capture : r;
        e.removeEventListener(t, n, o),
          n.__once && e.removeEventListener(t, n.__once, o);
      };
      const An = function (e, t, n, r) {
        return (
          bn(e, t, n, r),
          function () {
            wn(e, t, n, r);
          }
        );
      };
      const Dn = function (e) {
        const t = (0, f.useRef)(e);
        return (
          (0, f.useEffect)(() => {
            t.current = e;
          }, [e]),
          t
        );
      };
      function En(e) {
        const t = Dn(e);
        return (0, f.useCallback)(
          function (...e) {
            return t.current && t.current(...e);
          },
          [t],
        );
      }
      var Sn = n(67501),
        On = n.n(Sn);
      const kn = function (e) {
        return we(
          (function (e) {
            return e && "setState" in e
              ? Ye.findDOMNode(e)
              : null != e
                ? e
                : null;
          })(e),
        );
      };
      var xn = function () {};
      var Mn = function (e) {
        return e && ("current" in e ? e.current : e);
      };
      const Rn = function (e, t, n) {
        var r = void 0 === n ? {} : n,
          o = r.disabled,
          i = r.clickTrigger,
          a = void 0 === i ? "click" : i,
          s = (0, f.useRef)(!1),
          c = t || xn,
          l = (0, f.useCallback)(
            function (t) {
              var n,
                r,
                o = Mn(e);
              On()(
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
                  !xe(
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
          u = En(function (e) {
            s.current || c(e);
          }),
          d = En(function (e) {
            27 === e.keyCode && c(e);
          });
        (0, f.useEffect)(
          function () {
            if (!o && null != e) {
              var t = window.event,
                n = kn(Mn(e)),
                r = An(n, a, l, !0),
                i = An(n, a, function (e) {
                  e !== t ? u(e) : (t = void 0);
                }),
                s = An(n, "keyup", function (e) {
                  e !== t ? d(e) : (t = void 0);
                }),
                c = [];
              return (
                "ontouchstart" in n.documentElement &&
                  (c = [].slice.call(n.body.children).map(function (e) {
                    return An(e, "mousemove", xn);
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
      var _n = function (e) {
        var t;
        return "undefined" == typeof document
          ? null
          : null == e
            ? we().body
            : ("function" == typeof e && (e = e()),
              e && "current" in e && (e = e.current),
              (null != (t = e) && t.nodeType && e) || null);
      };
      function Tn(e, t) {
        var n = (0, f.useState)(function () {
            return _n(e);
          }),
          r = n[0],
          o = n[1];
        if (!r) {
          var i = _n(e);
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
              var t = _n(e);
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
          c = e.placement,
          l = e.flip,
          u = e.offset,
          f = e.fixed,
          d = e.containerPadding,
          p = e.arrowElement,
          h = e.popperConfig,
          v = void 0 === h ? {} : h,
          m = (function (e) {
            var t = {};
            return Array.isArray(e)
              ? (null == e ||
                  e.forEach(function (e) {
                    t[e.name] = e;
                  }),
                t)
              : e || t;
          })(v.modifiers);
        return (0, y.A)({}, v, {
          placement: c,
          enabled: a,
          strategy: f ? "fixed" : v.strategy,
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
      var Pn = f.forwardRef(function (e, t) {
        var n = e.flip,
          r = e.offset,
          o = e.placement,
          i = e.containerPadding,
          a = void 0 === i ? 5 : i,
          s = e.popperConfig,
          c = void 0 === s ? {} : s,
          l = e.transition,
          u = Ue(),
          d = u[0],
          p = u[1],
          h = Ue(),
          v = h[0],
          m = h[1],
          b = Ve(p, t),
          w = Tn(e.container),
          A = Tn(e.target),
          D = (0, f.useState)(!e.show),
          E = D[0],
          S = D[1],
          O = vn(
            A,
            d,
            Cn({
              placement: o,
              enableEvents: !!e.show,
              containerPadding: a || 5,
              flip: n,
              offset: r,
              arrowElement: v,
              popperConfig: c,
            }),
          ),
          k = O.styles,
          x = O.attributes,
          M = (0, g.A)(O, ["styles", "attributes"]);
        e.show ? E && S(!1) : e.transition || E || S(!0);
        var R = e.show || (l && !E);
        if (
          (Rn(d, e.onHide, {
            disabled: !e.rootClose || e.rootCloseDisabled,
            clickTrigger: e.rootCloseEvent,
          }),
          !R)
        )
          return null;
        var _ = e.children(
          (0, y.A)({}, M, {
            show: !!e.show,
            props: (0, y.A)({}, x.popper, { style: k.popper, ref: b }),
            arrowProps: (0, y.A)({}, x.arrow, { style: k.arrow, ref: m }),
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
        return w ? Ye.createPortal(_, w) : null;
      });
      (Pn.displayName = "Overlay"),
        (Pn.propTypes = {
          show: k().bool,
          placement: k().oneOf(it),
          target: k().any,
          container: k().any,
          flip: k().bool,
          children: k().func.isRequired,
          containerPadding: k().number,
          popperConfig: k().object,
          rootClose: k().bool,
          rootCloseEvent: k().oneOf(["click", "mousedown"]),
          rootCloseDisabled: k().bool,
          onHide: function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            var o;
            return e.rootClose
              ? (o = k().func).isRequired.apply(o, [e].concat(n))
              : k().func.apply(k(), [e].concat(n));
          },
          transition: k().elementType,
          onEnter: k().func,
          onEntering: k().func,
          onEntered: k().func,
          onExit: k().func,
          onExiting: k().func,
          onExited: k().func,
        });
      const Nn = Pn;
      var zn = n(13964);
      const Ln = function (e, t) {
        return (0, zn.A)(e, t);
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
      const Yn = function (e, t, n, r) {
        for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
          if (t(e[i], i, e)) return i;
        return -1;
      };
      var Un = n(17267),
        Bn = Math.max;
      const Vn = function (e, t, n) {
        var r = null == e ? 0 : e.length;
        if (!r) return -1;
        var o = null == n ? 0 : me(n);
        return o < 0 && (o = Bn(r + o, 0)), Yn(e, (0, Un.A)(t, 3), o);
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
            (t = ve(t)),
            void 0 === n ? ((n = t), (t = 0)) : (n = ve(n)),
            (r = void 0 === r ? (t < n ? 1 : -1) : ve(r)),
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
          var c = t[a];
          n > 0 && r(c)
            ? n > 1
              ? e(c, n - 1, r, o, i)
              : (0, tr.A)(i, c)
            : o || (i[i.length] = c);
        }
        return i;
      };
      var cr = n(4516),
        lr = n(78350),
        ur = n(64600);
      const fr = function (e, t) {
        var n = e.length;
        for (e.sort(t); n--; ) e[n] = e[n].value;
        return e;
      };
      var dr = n(93365),
        pr = n(73914);
      const hr = function (e, t) {
        if (e !== t) {
          var n = void 0 !== e,
            r = null === e,
            o = e == e,
            i = (0, pr.A)(e),
            a = void 0 !== t,
            s = null === t,
            c = t == t,
            l = (0, pr.A)(t);
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
      const vr = function (e, t, n) {
        for (
          var r = -1,
            o = e.criteria,
            i = t.criteria,
            a = o.length,
            s = n.length;
          ++r < a;
        ) {
          var c = hr(o[r], i[r]);
          if (c) return r >= s ? c : c * ("desc" == n[r] ? -1 : 1);
        }
        return e.index - t.index;
      };
      var mr = n(41040);
      const gr = function (e, t, n) {
        t = t.length
          ? (0, cr.A)(t, function (e) {
              return (0, or.A)(e)
                ? function (t) {
                    return (0, lr.A)(t, 1 === e.length ? e[0] : e);
                  }
                : e;
            })
          : [mr.A];
        var r = -1;
        t = (0, cr.A)(t, (0, dr.A)(Un.A));
        var o = (0, ur.A)(e, function (e, n, o) {
          return {
            criteria: (0, cr.A)(t, function (t) {
              return t(e);
            }),
            index: ++r,
            value: e,
          };
        });
        return fr(o, function (e, t) {
          return vr(e, t, n);
        });
      };
      var yr = n(83270);
      const br = (0, yr.A)(function (e, t) {
        if (null == e) return [];
        var n = t.length;
        return (
          n > 1 && (0, de.A)(e, t[0], t[1])
            ? (t = [])
            : n > 2 && (0, de.A)(t[0], t[1], t[2]) && (t = [t[0]]),
          gr(e, sr(t, 1), [])
        );
      });
      var wr;
      function Ar(e) {
        if (((!wr && 0 !== wr) || e) && ze) {
          var t = document.createElement("div");
          (t.style.position = "absolute"),
            (t.style.top = "-9999px"),
            (t.style.width = "50px"),
            (t.style.height = "50px"),
            (t.style.overflow = "scroll"),
            document.body.appendChild(t),
            (wr = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return wr;
      }
      function Dr(e, t) {
        var n = Me(e);
        return n ? n.innerWidth : t ? e.clientWidth : Ce(e).width;
      }
      var Er = n(87537),
        Sr = n(76805),
        Or = n(78296),
        kr = n(79474);
      function xr(e) {
        return (0, Er.A)(e) || (0, Sr.A)(e) || (0, Or.A)(e) || (0, kr.A)();
      }
      var Mr = n(39234),
        Rr = n(16673),
        _r = n(9175),
        Tr = n(13217),
        Cr = n(99763),
        Pr = n(84207),
        Nr = n(74603);
      const zr = function (e, t) {
        return e && (0, Pr.A)(t, (0, Nr.A)(t), e);
      };
      var Lr = n(70158);
      const jr = function (e, t) {
        return e && (0, Pr.A)(t, (0, Lr.A)(t), e);
      };
      var Fr = n(27066),
        Wr = n(80335),
        Ir = n(25606);
      const Hr = function (e, t) {
        return (0, Pr.A)(e, (0, Ir.A)(e), t);
      };
      var Yr = n(57695),
        Ur = n(72097);
      const Br = Object.getOwnPropertySymbols
        ? function (e) {
            for (var t = []; e; )
              (0, tr.A)(t, (0, Ir.A)(e)), (e = (0, Yr.A)(e));
            return t;
          }
        : Ur.A;
      const Vr = function (e, t) {
        return (0, Pr.A)(e, Br(e), t);
      };
      var qr = n(81218),
        Kr = n(80647);
      const $r = function (e) {
        return (0, Kr.A)(e, Lr.A, Br);
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
        co = n(6314),
        lo = n(83658);
      const uo = function (e) {
        return (0, lo.A)(e) && "[object Map]" == (0, Gr.A)(e);
      };
      var fo = n(23785),
        po = fo.A && fo.A.isMap;
      const ho = po ? (0, dr.A)(po) : uo;
      var vo = n(35181);
      const mo = function (e) {
        return (0, lo.A)(e) && "[object Set]" == (0, Gr.A)(e);
      };
      var go = fo.A && fo.A.isSet;
      const yo = go ? (0, dr.A)(go) : mo;
      var bo = "[object Arguments]",
        wo = "[object Function]",
        Ao = "[object Object]",
        Do = {};
      (Do[bo] =
        Do["[object Array]"] =
        Do["[object ArrayBuffer]"] =
        Do["[object DataView]"] =
        Do["[object Boolean]"] =
        Do["[object Date]"] =
        Do["[object Float32Array]"] =
        Do["[object Float64Array]"] =
        Do["[object Int8Array]"] =
        Do["[object Int16Array]"] =
        Do["[object Int32Array]"] =
        Do["[object Map]"] =
        Do["[object Number]"] =
        Do[Ao] =
        Do["[object RegExp]"] =
        Do["[object Set]"] =
        Do["[object String]"] =
        Do["[object Symbol]"] =
        Do["[object Uint8Array]"] =
        Do["[object Uint8ClampedArray]"] =
        Do["[object Uint16Array]"] =
        Do["[object Uint32Array]"] =
          !0),
        (Do["[object Error]"] = Do[wo] = Do["[object WeakMap]"] = !1);
      const Eo = function e(t, n, r, o, i, a) {
        var s,
          c = 1 & n,
          l = 2 & n,
          u = 4 & n;
        if ((r && (s = i ? r(t, o, i, a) : r(t)), void 0 !== s)) return s;
        if (!(0, vo.A)(t)) return t;
        var f = (0, or.A)(t);
        if (f) {
          if (((s = Zr(t)), !c)) return (0, Wr.A)(t, s);
        } else {
          var d = (0, Gr.A)(t),
            p = d == wo || "[object GeneratorFunction]" == d;
          if ((0, co.A)(t)) return (0, Fr.A)(t, c);
          if (d == Ao || d == bo || (p && !i)) {
            if (((s = l || p ? {} : (0, so.A)(t)), !c))
              return l ? Vr(t, jr(s, t)) : Hr(t, zr(s, t));
          } else {
            if (!Do[d]) return i ? t : {};
            s = ao(t, d, c);
          }
        }
        a || (a = new _r.A());
        var h = a.get(t);
        if (h) return h;
        a.set(t, s),
          yo(t)
            ? t.forEach(function (o) {
                s.add(e(o, n, r, o, t, a));
              })
            : ho(t) &&
              t.forEach(function (o, i) {
                s.set(i, e(o, n, r, i, t, a));
              });
        var v = u ? (l ? $r : qr.A) : l ? Lr.A : Nr.A,
          m = f ? void 0 : v(t);
        return (
          (0, Tr.A)(m || t, function (o, i) {
            m && (o = t[(i = o)]), (0, Cr.A)(s, i, e(o, n, r, i, t, a));
          }),
          s
        );
      };
      var So = n(1931);
      const Oo = function (e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0;
      };
      const ko = function (e, t) {
        return t.length < 2 ? e : (0, lr.A)(e, fe(t, 0, -1));
      };
      var xo = n(5269);
      const Mo = function (e, t) {
        return (
          (t = (0, So.A)(t, e)),
          null == (e = ko(e, t)) || delete e[(0, xo.A)(Oo(t))]
        );
      };
      var Ro = n(77011);
      const _o = function (e) {
        return (0, Ro.A)(e) ? void 0 : e;
      };
      const To = function (e) {
        return (null == e ? 0 : e.length) ? sr(e, 1) : [];
      };
      var Co = n(75702),
        Po = n(99660);
      const No = (function (e) {
        return (0, Po.A)((0, Co.A)(e, void 0, To), e + "");
      })(function (e, t) {
        var n = {};
        if (null == e) return n;
        var r = !1;
        (t = (0, cr.A)(t, function (t) {
          return (t = (0, So.A)(t, e)), r || (r = t.length > 1), t;
        })),
          (0, Pr.A)(e, $r(e), n),
          r && (n = Eo(n, 7, _o));
        for (var o = t.length; o--; ) Mo(n, t[o]);
        return n;
      });
      var zo = n(58760),
        Lo = Object.prototype,
        jo = Lo.hasOwnProperty;
      const Fo = (0, yr.A)(function (e, t) {
        e = Object(e);
        var n = -1,
          r = t.length,
          o = r > 2 ? t[2] : void 0;
        for (o && (0, de.A)(t[0], t[1], o) && (r = 1); ++n < r; )
          for (
            var i = t[n], a = (0, Lr.A)(i), s = -1, c = a.length;
            ++s < c;
          ) {
            var l = a[s],
              u = e[l];
            (void 0 === u || ((0, zo.A)(u, Lo[l]) && !jo.call(e, l))) &&
              (e[l] = i[l]);
          }
        return e;
      });
      var Wo = n(5536),
        Io = n(25665),
        Ho = n(30186),
        Yo = n(48693);
      const Uo = function (e, t, n) {
        var r = (0, or.A)(e),
          o = r || (0, co.A)(e) || (0, Yo.A)(e);
        if (((t = (0, Un.A)(t, 4)), null == n)) {
          var i = e && e.constructor;
          n = o
            ? r
              ? new i()
              : []
            : (0, vo.A)(e) && (0, Ho.A)(i)
              ? (0, Wo.A)((0, Yr.A)(e))
              : {};
        }
        return (
          (o ? Tr.A : Io.A)(e, function (e, r, o) {
            return t(n, e, r, o);
          }),
          n
        );
      };
      var Bo = n(63376);
      const Vo = function (e, t) {
        var n = {};
        return (
          (t = (0, Un.A)(t, 3)),
          (0, Io.A)(e, function (e, r, o) {
            (0, Bo.A)(n, r, t(e, r, o));
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
      k().oneOfType([k().string, k().func]),
        k().any,
        k().func,
        k().oneOfType([
          k().arrayOf(k().oneOf(Jo)),
          k().objectOf(function (e, t) {
            if (-1 !== Jo.indexOf(t) && "boolean" == typeof e[t]) return null;
            for (
              var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
              o < n;
              o++
            )
              r[o - 2] = arguments[o];
            return k().elementType.apply(k(), [e, t].concat(r));
          }),
        ]),
        k().oneOfType([k().oneOf(["overlap", "no-overlap"]), k().func]);
      var ei = { seconds: 1e3, minutes: 6e4, hours: 36e5, day: 864e5 };
      function ti(e, t) {
        var n = Y(e, "month");
        return Y(n, "week", t.startOfWeek());
      }
      function ni(e, t) {
        var n = U(e, "month");
        return U(n, "week", t.startOfWeek());
      }
      function ri(e, t) {
        for (var n = ti(e, t), r = ni(e, t), o = []; G(n, r, "day"); )
          o.push(n), (n = I(n, 1, "day"));
        return o;
      }
      function oi(e, t) {
        var n = Y(e, t);
        return B(n, e) ? n : I(n, 1, t);
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
            (e = Y(e, "day")),
            (e = ne(e, ne(t))),
            (e = te(e, te(t))),
            (e = ee(e, ee(t))),
            Q(e, Q(t)));
      }
      function si(e) {
        return 0 === ne(e) && 0 === te(e) && 0 === ee(e) && 0 === Q(e);
      }
      function ci(e, t, n) {
        return n && "milliseconds" !== n
          ? Math.round(Math.abs(+Y(e, n) / ei[n] - +Y(t, n) / ei[n]))
          : Math.abs(+e - +t);
      }
      var li = k().oneOfType([k().string, k().func]);
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
        return ci(e, t, "minutes") + di(e, t);
      }
      function hi(e) {
        var t = Y(e, "day");
        return ci(t, e, "minutes") + di(t, e);
      }
      function vi(e, t) {
        return $(e, t, "day");
      }
      function mi(e, t, n) {
        return B(e, t, "minutes") ? K(t, n, "minutes") : q(t, n, "minutes");
      }
      function gi(e) {
        var t = e.evtA,
          n = t.start,
          r = t.end,
          o = t.allDay,
          i = e.evtB,
          a = i.start,
          s = i.end,
          c = i.allDay,
          l = +Y(n, "day") - +Y(a, "day"),
          u = ci(n, oi(r, "day"), "day"),
          f = ci(a, oi(s, "day"), "day");
        return (
          l ||
          Math.max(f, 1) - Math.max(u, 1) ||
          !!c - !!o ||
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
          s = Y(n, "day"),
          c = G(s, a, "day"),
          l = V(s, r, "minutes") ? q(r, i, "minutes") : K(r, i, "minutes");
        return c && l;
      }
      function bi(e, t) {
        return B(e, t, "day");
      }
      function wi(e, t) {
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
          (this.propType = t.propType || li),
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
          (this.eq = t.eq || B),
          (this.neq = t.neq || V),
          (this.startOf = t.startOf || Y),
          (this.endOf = t.endOf || U),
          (this.add = t.add || I),
          (this.range = t.range || ii),
          (this.diff = t.diff || ci),
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
          (this.getMinutesFromMidnight = t.getMinutesFromMidnight || hi),
          (this.continuesPrior = t.continuesPrior || vi),
          (this.continuesAfter = t.continuesAfter || mi),
          (this.sortEvents = t.sortEvents || gi),
          (this.inEventRange = t.inEventRange || yi),
          (this.isSameDate = t.isSameDate || bi),
          (this.startAndEndAreDateOnly = t.startAndEndAreDateOnly || wi),
          (this.segmentOffset = t.browserTZOffset ? t.browserTZOffset() : 0);
      });
      function Di(e, t, n, o) {
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
      var Ei = {
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
        Oi = (function (e) {
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
                    h = e.continuesAfter,
                    v = e.accessors,
                    m = e.getters,
                    g = e.children,
                    y = e.components,
                    b = y.event,
                    w = y.eventWrapper,
                    A = e.slotStart,
                    D = e.slotEnd,
                    E = (0, o.A)(e, Si);
                  delete E.resizable;
                  var O = v.title(i),
                    k = v.tooltip(i),
                    x = v.end(i),
                    M = v.start(i),
                    R = v.allDay(i),
                    _ = s || R || d.diff(M, d.ceil(x, "day"), "day") > 1,
                    T = m.eventProp(i, M, x, a),
                    C = f.createElement(
                      "div",
                      { className: "rbc-event-content", title: k || void 0 },
                      b
                        ? f.createElement(b, {
                            event: i,
                            continuesPrior: p,
                            continuesAfter: h,
                            title: O,
                            isAllDay: R,
                            localizer: d,
                            slotStart: A,
                            slotEnd: D,
                          })
                        : O,
                    );
                  return f.createElement(
                    w,
                    Object.assign({}, this.props, { type: "date" }),
                    f.createElement(
                      "div",
                      Object.assign({}, E, {
                        tabIndex: 0,
                        style: (0, r.A)((0, r.A)({}, T.style), t),
                        className: S("rbc-event", n, T.className, {
                          "rbc-selected": a,
                          "rbc-event-allday": _,
                          "rbc-event-continues-prior": p,
                          "rbc-event-continues-after": h,
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
      function ki(e, t) {
        return !(!e || null == t) && Ln(e, t);
      }
      function xi(e, t) {
        return (e.right - e.left) / t;
      }
      function Mi(e, t, n, r) {
        var o = xi(e, r);
        return n
          ? r - 1 - Math.floor((t - e.left) / o)
          : Math.floor((t - e.left) / o);
      }
      function Ri(e) {
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
          h = e.slotStart,
          v = e.slotEnd,
          m = e.onSelect,
          g = e.onDoubleClick,
          y = e.onKeyPress,
          b = e.handleDragStart,
          w = e.popperRef,
          A = e.target,
          D = e.offset;
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
                    i = Ce(t),
                    a = i.top,
                    s = i.left,
                    c = i.width,
                    l = i.height,
                    u = Ce(r),
                    f = u.top,
                    d = u.left,
                    p = u.width,
                    h = u.height,
                    v = Ce(o),
                    m = v.width,
                    g = v.height,
                    y = f + h,
                    b = d + p,
                    w = a + g,
                    A = s + m,
                    D = n.x,
                    E = n.y;
                  return {
                    topOffset: w > y ? a - g - E : a + E + l,
                    leftOffset: A > b ? s + D - m + c : s + D,
                  };
                })({
                  target: A,
                  offset: D,
                  container: o.current,
                  box: w.current,
                }),
                t = e.topOffset,
                n = e.leftOffset;
              (w.current.style.top = "".concat(t, "px")),
                (w.current.style.left = "".concat(n, "px"));
            },
            [D.x, D.y, A],
          );
        var E = u.width,
          S = { minWidth: E + E / 2 };
        return f.createElement(
          "div",
          { style: S, className: "rbc-overlay", ref: w },
          f.createElement(
            "div",
            { className: "rbc-overlay-header" },
            l.format(h, "dayHeaderFormat"),
          ),
          p.map(function (e, t) {
            return f.createElement(Oi, {
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
              continuesPrior: l.lt(i.end(e), h, "day"),
              continuesAfter: l.gte(i.start(e), v, "day"),
              slotStart: h,
              slotEnd: v,
              selected: ki(e, s),
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
      var _i = f.forwardRef(function (e, t) {
        return f.createElement(Ri, Object.assign({}, e, { popperRef: t }));
      });
      function Ti(e) {
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
          h = e.handleDragStart,
          v = e.onHide,
          m = e.overlayDisplay,
          g = (0, f.useRef)(null);
        if (!o.position) return null;
        var y = r;
        isNaN(r) || (y = { x: r, y: r });
        var b = o.position,
          w = o.events,
          A = o.date,
          D = o.end;
        return f.createElement(
          Nn,
          {
            rootClose: !0,
            flip: !0,
            show: !0,
            placement: "bottom",
            onHide: v,
            target: o.target,
          },
          function (e) {
            var n = e.props;
            return f.createElement(
              _i,
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
                slotEnd: D,
                onSelect: u,
                onDoubleClick: d,
                onKeyPress: p,
                handleDragStart: h,
              }),
            );
          },
        );
      }
      _i.propTypes = {
        accessors: k().object.isRequired,
        getters: k().object.isRequired,
        selected: k().object,
        components: k().object.isRequired,
        localizer: k().object.isRequired,
        position: k().object.isRequired,
        show: k().func.isRequired,
        events: k().array.isRequired,
        slotStart: k().instanceOf(Date).isRequired,
        slotEnd: k().instanceOf(Date),
        onSelect: k().func,
        onDoubleClick: k().func,
        onKeyPress: k().func,
        handleDragStart: k().func,
        style: k().object,
        offset: k().shape({ x: k().number, y: k().number }),
      };
      var Ci = f.forwardRef(function (e, t) {
        return f.createElement(Ti, Object.assign({}, e, { containerRef: t }));
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
      function zi(e, t) {
        return !!(function (e, t) {
          var n = t.clientX,
            r = t.clientY;
          return Hn(document.elementFromPoint(n, r), ".rbc-show-more", e);
        })(e, t);
      }
      function Li(e) {
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
        popupOffset: k().oneOfType([
          k().number,
          k().shape({ x: k().number, y: k().number }),
        ]),
        overlay: k().shape({
          position: k().object,
          events: k().array,
          date: k().instanceOf(Date),
          end: k().instanceOf(Date),
        }),
        accessors: k().object.isRequired,
        localizer: k().object.isRequired,
        components: k().object.isRequired,
        getters: k().object.isRequired,
        selected: k().object,
        handleSelectEvent: k().func,
        handleDoubleClickEvent: k().func,
        handleKeyPressEvent: k().func,
        handleDragStart: k().func,
        onHide: k().func,
        overlayDisplay: k().func,
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
                      c(), e(t);
                    }, n.longPressThreshold)),
                      (o = Pi("touchmove", function () {
                        return c();
                      })),
                      (i = Pi("touchend", function () {
                        return c();
                      }));
                  },
                  s = Pi("touchstart", a),
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
                var t = Li(e),
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
                var t = Li(e),
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
                    n = Li(e),
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
                    !(l = c) || xe(l, document.elementFromPoint(u, f)))
                  ) {
                    var l, u, f;
                    if (!this.globalMouse && c && !xe(c, e.target)) {
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
                        h = d.left,
                        v = d.bottom,
                        m = d.right;
                      if (
                        !Fi(
                          {
                            top: (t = Wi(c)).top - p,
                            left: t.left - h,
                            bottom: t.bottom + v,
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
                var t = Li(e),
                  n = t.pageX,
                  r = t.pageY;
                if (
                  ((this.selecting = !1),
                  this._removeEndListener && this._removeEndListener(),
                  this._removeMoveListener && this._removeMoveListener(),
                  this._initialEventData)
                ) {
                  var o = !this.container || xe(this.container(), e.target),
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
                var t = Li(e),
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
                    o = Li(e),
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
      function Fi(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = Wi(e),
          o = r.top,
          i = r.left,
          a = r.right,
          s = void 0 === a ? i : a,
          c = r.bottom,
          l = void 0 === c ? o : c,
          u = Wi(t),
          f = u.top,
          d = u.left,
          p = u.right,
          h = void 0 === p ? d : p,
          v = u.bottom;
        return !(
          l - n < f ||
          o + n > (void 0 === v ? f : v) ||
          s - n < d ||
          i + n > h
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
                        h = p.className,
                        v = p.style;
                      return f.createElement(
                        i,
                        { key: n, value: e, range: t },
                        f.createElement("div", {
                          style: v,
                          className: S(
                            "rbc-day-bg",
                            h,
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
                      if (!Ni(t, n) && !zi(t, n)) {
                        var o = Wi(t),
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
                          var c = Mi(o, n.x, s, a.length);
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
                        (Qo(e.props.onSelectStart, [r]),
                        (e._initial = { x: r.x, y: r.y })),
                      n.isSelected(t))
                    ) {
                      var l = Wi(t),
                        u = (function (e, t, n, r, o) {
                          var i = -1,
                            a = -1,
                            s = r - 1,
                            c = xi(t, r),
                            l = Mi(t, n.x, o, r),
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
        Yi =
          (k().object.isRequired,
          k().object,
          k().bool,
          k().object.isRequired,
          k().object.isRequired,
          k().object.isRequired,
          k().object.isRequired,
          k().func,
          k().func,
          k().func,
          { segments: [], selected: {} }),
        Ui = function (e, t) {
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
            h = l.continuesAfter(t);
          return f.createElement(Oi, {
            event: t,
            getters: o,
            localizer: c,
            accessors: r,
            components: u,
            onSelect: i,
            onDoubleClick: a,
            onKeyPress: s,
            continuesPrior: p,
            continuesAfter: h,
            slotStart: l.first,
            slotEnd: l.last,
            selected: ki(t, n),
            resizable: d,
          });
        },
        Bi = function (e, t, n) {
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
                    { className: S(o, "rbc-row") },
                    n.reduce(function (t, n, o) {
                      var a = n.event,
                        s = n.left,
                        c = n.right,
                        l = n.span,
                        u = "_lvl_" + o,
                        f = s - i,
                        d = Ui(e.props, a);
                      return (
                        f && t.push(Bi(r, f, "".concat(u, "_gap"))),
                        t.push(Bi(r, l, u, d)),
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
      Vi.defaultProps = (0, r.A)({}, Yi);
      var Zi = function (e, t) {
          return e.left <= t && e.right >= t;
        },
        Ji = function (e, t) {
          return e.filter(function (e) {
            return Zi(e, t);
          }).length;
        },
        Qi = (function (e) {
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
                      r = Ki(t).levels[0],
                      o = 1,
                      i = 1,
                      a = [];
                    o <= n;
                  ) {
                    var s = "_lvl_" + o,
                      c =
                        r.filter(function (e) {
                          return Zi(e, o);
                        })[0] || {},
                      l = c.event,
                      u = c.left,
                      d = c.right,
                      p = c.span;
                    if (l) {
                      var h = Math.max(0, u - i);
                      if (this.canRenderSlotEvent(u, p)) {
                        var v = Ui(this.props, l);
                        h && a.push(Bi(n, h, s + "_gap")),
                          a.push(Bi(n, p, s, v)),
                          (i = o = d + 1);
                      } else
                        h && a.push(Bi(n, h, s + "_gap")),
                          a.push(Bi(n, 1, s, this.renderShowMore(t, o))),
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
      Qi.defaultProps = (0, r.A)({}, Yi);
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
              d = Ki(f, Math.max(o - 1, 1)),
              p = d.levels,
              h = d.extra,
              v = h.length > 0 ? i - 1 : i;
            p.length < v;
          )
            p.push([]);
          return {
            first: l,
            last: u,
            levels: p,
            extra: h,
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
              return s.continuesPrior(a.start(e), l);
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
                Wn(r.querySelectorAll(o)))[0];
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
                  c = e.accessors,
                  l = e.getters,
                  u = e.components,
                  d = e.getNow,
                  p = e.renderHeader,
                  h = e.onSelect,
                  v = e.localizer,
                  m = e.onSelectStart,
                  g = e.onSelectEnd,
                  y = e.onDoubleClick,
                  b = e.onKeyPress,
                  w = e.resourceId,
                  A = e.longPressThreshold,
                  D = e.isAllDay,
                  E = e.resizable,
                  O = e.showAllEvents;
                if (s) return this.renderDummy();
                var k = this.slotMetrics(this.props),
                  x = k.levels,
                  M = k.extra,
                  R = O ? ea : qo,
                  _ = u.weekWrapper,
                  T = {
                    selected: i,
                    accessors: c,
                    getters: l,
                    localizer: v,
                    components: u,
                    onSelect: h,
                    onDoubleClick: y,
                    onKeyPress: b,
                    resourceId: w,
                    slotMetrics: k,
                    resizable: E,
                  };
                return f.createElement(
                  "div",
                  { className: o, role: "rowgroup", ref: this.containerRef },
                  f.createElement(Hi, {
                    localizer: v,
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
                      className: S(
                        "rbc-row-content",
                        O && "rbc-row-content-scrollable",
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
                            Qi,
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
                  h = r.getters,
                  v = r.showAllEvents,
                  m = e.state,
                  g = m.needLimitMeasure,
                  y = m.rowLimit,
                  b = (function (e, t, n, r, o) {
                    return e.filter(function (e) {
                      return $i(e, t, n, r, o);
                    });
                  })((0, ue.A)(o), t[0], t[t.length - 1], p, u);
                return (
                  b.sort(function (e, t) {
                    return Xi(e, t, p, u);
                  }),
                  f.createElement(ra, {
                    key: n,
                    ref: 0 === n ? e.slotRowRef : void 0,
                    container: e.getContainer,
                    className: "rbc-month-row",
                    getNow: s,
                    date: l,
                    range: t,
                    events: b,
                    maxRows: v ? 1 / 0 : y,
                    selected: c,
                    selectable: a,
                    components: i,
                    accessors: p,
                    getters: h,
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
                    showAllEvents: v,
                  })
                );
              }),
              (e.readerDateHeading = function (t) {
                var n = t.date,
                  r = t.className,
                  i = (0, o.A)(t, aa),
                  a = e.props,
                  s = a.date,
                  c = a.getDrilldownView,
                  l = a.localizer,
                  u = l.neq(n, s, "month"),
                  d = l.isSameDate(n, s),
                  p = c(n),
                  h = l.format(n, "dateFormat"),
                  v = e.props.components.dateHeader || ia;
                return f.createElement(
                  "div",
                  Object.assign({}, i, {
                    className: S(r, u && "rbc-off-range", d && "rbc-current"),
                    role: "cell",
                  }),
                  f.createElement(v, {
                    label: h,
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
                  c = a.onDrillDown,
                  l = a.onShowMore,
                  u = a.getDrilldownView,
                  f = a.doShowMoreDrillDown;
                if ((e.clearSelection(), s)) {
                  var d = Ne(r, e.containerRef.current);
                  e.setState({
                    overlay: { date: n, events: t, position: d, target: i },
                  });
                } else f && Qo(c, [n, u(n) || Zo.DAY]);
                Qo(l, [t, n, o]);
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
                      i = be(o, 7);
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
                      c = o.getters,
                      l = o.selected,
                      u = o.popupOffset,
                      d = o.handleDragStart;
                    return f.createElement(Ci, {
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
      var ca = function (e) {
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
      function la(e) {
        for (
          var t = e.min,
            n = e.max,
            r = e.step,
            o = e.timeslots,
            i = e.localizer,
            a = ca({ start: t, end: n, step: r, timeslots: o, localizer: i }),
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
          for (var h = 0; h < o; h++) {
            var v = p * o + h,
              m = v * r;
            d[v] = f[p][h] = i.getSlotDate(t, c, m);
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
              return ca(e) !== a ? la(e) : this;
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
      var ua = (function () {
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
                var t = br(e, [
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
              var e = i[c],
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
      var ha = {
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
              var c = t[s],
                l = c.style.top,
                u = c.style.top + c.style.height;
              ((l >= i && u <= a) || (u > i && u <= a) || (l >= i && l < a)) &&
                (o.friends.push(c), c.friends.push(o));
            }
          for (var f = 0; f < t.length; ++f) {
            for (var d = t[f], p = [], h = 0; h < 100; ++h) p.push(1);
            for (var v = 0; v < d.friends.length; ++v)
              void 0 !== d.friends[v].idx && (p[d.friends[v].idx] = 0);
            d.idx = p.indexOf(1);
          }
          for (var m = 0; m < t.length; ++m) {
            var g;
            if (!t[m].size) {
              var y = [];
              (g = 100 / (pa(t[m], 0, y) + 1)), (t[m].size = g);
              for (var b = 0; b < y.length; ++b) y[b].size = g;
            }
          }
          for (var w = 0; w < t.length; ++w) {
            var A = t[w];
            A.style.left = A.idx * A.size;
            for (var D = 0, E = 0; E < A.friends.length; ++E) {
              var S = A.friends[E].idx;
              D = D > S ? D : S;
            }
            D <= A.idx && (A.size = 100 - A.idx * A.size);
            var O = 0 === A.idx ? 0 : 3;
            (A.style.width = "calc(".concat(A.size, "% - ").concat(O, "px)")),
              (A.style.height = "calc(".concat(A.style.height, "% - 2px)")),
              (A.style.xOffset = "calc("
                .concat(A.style.left, "% + ")
                .concat(O, "px)"));
          }
          return t;
        },
      };
      var va = (function (e) {
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
          c = e.label,
          l = e.continuesPrior,
          u = e.continuesAfter,
          d = e.getters,
          p = e.onClick,
          h = e.onDoubleClick,
          v = e.isBackgroundEvent,
          m = e.onKeyPress,
          g = e.components,
          y = g.event,
          b = g.eventWrapper,
          w = i.title(o),
          A = i.tooltip(o),
          D = i.end(o),
          E = i.start(o),
          O = d.eventProp(o, E, D, s),
          k = t.height,
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
          T = v
            ? (0, r.A)(
                (0, r.A)({}, O.style),
                {},
                (0, le.A)(
                  {
                    top: ma(x),
                    height: ma(k),
                    width: "calc(".concat(M, " + 10px)"),
                  },
                  a ? "right" : "left",
                  ma(Math.max(0, R)),
                ),
              )
            : (0, r.A)(
                (0, r.A)({}, O.style),
                {},
                (0, le.A)(
                  { top: ma(x), width: ma(M), height: ma(k) },
                  a ? "right" : "left",
                  ma(R),
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
              onDoubleClick: h,
              style: T,
              onKeyPress: m,
              title: A ? ("string" == typeof c ? c + ": " : "") + A : void 0,
              className: S(
                v ? "rbc-background-event" : "rbc-event",
                n,
                O.className,
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
      var ya = function (e) {
          var t = e.children,
            n = e.className,
            r = e.style,
            o = e.innerRef;
          return f.createElement("div", { className: n, style: r, ref: o }, t);
        },
        ba = f.forwardRef(function (e, t) {
          return f.createElement(ya, Object.assign({}, e, { innerRef: t }));
        }),
        wa = ["dayProp"],
        Aa = ["eventContainerWrapper"],
        Da = (function (e) {
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
                  h = i.timeslots,
                  v = i.dayLayoutAlgorithm,
                  m = i.resizable,
                  g = (0, er.A)(e).slotMetrics,
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
                      n in ha && (r = ha[n]),
                      (t = r) && t.constructor && t.call && t.apply
                        ? r.apply(this, arguments)
                        : []
                    );
                  })({
                    events: n,
                    accessors: c,
                    slotMetrics: g,
                    minimumStartDifference: Math.ceil((p * h) / 2),
                    dayLayoutAlgorithm: v,
                  });
                return b.map(function (t, n) {
                  var i,
                    p = t.event,
                    h = t.style,
                    v = c.end(p),
                    b = c.start(p),
                    w = "eventTimeRangeFormat",
                    A = g.startsBeforeDay(b),
                    D = g.startsAfterDay(v);
                  A
                    ? (w = "eventTimeRangeEndFormat")
                    : D && (w = "eventTimeRangeStartFormat"),
                    (i = A && D ? y.allDay : l.format({ start: b, end: v }, w));
                  var E = A || g.startsBefore(b),
                    S = D || g.startsAfter(v);
                  return f.createElement(ga, {
                    style: h,
                    event: p,
                    label: i,
                    key: "evt_" + n,
                    getters: u,
                    rtl: a,
                    components: d,
                    continuesPrior: E,
                    continuesAfter: S,
                    accessors: c,
                    resource: e.props.resource,
                    selected: ki(p, s),
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
                  l = function (t, n) {
                    if (!Ni(e.containerRef.current, t)) {
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
                      return !Ni(e.containerRef.current, t);
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
                Qo(e.props.onSelectSlot, {
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
              (e.slotMetrics = la(e.props)),
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
                    d = (0, o.A)(l, wa),
                    p = e.components,
                    h = p.eventContainerWrapper,
                    v = (0, o.A)(p, Aa),
                    m = this.slotMetrics,
                    g = this.state,
                    y = g.selecting,
                    b = g.top,
                    w = g.height,
                    A = { start: g.startDate, end: g.endDate },
                    D = u(n),
                    E = D.className,
                    O = D.style,
                    k = v.dayColumnWrapper || ba;
                  return f.createElement(
                    k,
                    {
                      ref: this.containerRef,
                      date: t,
                      style: O,
                      className: S(
                        E,
                        "rbc-day-slot",
                        "rbc-time-column",
                        i && "rbc-now",
                        i && "rbc-today",
                        y && "rbc-slot-selecting",
                      ),
                      slotMetrics: m,
                    },
                    m.groups.map(function (e, t) {
                      return f.createElement(va, {
                        key: t,
                        group: e,
                        resource: a,
                        getters: d,
                        components: v,
                      });
                    }),
                    f.createElement(
                      h,
                      {
                        localizer: c,
                        resource: a,
                        accessors: s,
                        getters: d,
                        components: v,
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
      Da.defaultProps = { dragThroughEvents: !0, timeslots: 2 };
      var Ea = function (e) {
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
            h = (0, f.useMemo)(
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
            v = h.start,
            m = h.end,
            g = (0, f.useState)(
              la({ min: v, max: m, timeslots: r, step: o, localizer: i }),
            ),
            y = (0, u.A)(g, 2),
            b = y[0],
            w = y[1];
          (0, f.useEffect)(
            function () {
              b &&
                w(
                  b.update({
                    min: v,
                    max: m,
                    timeslots: r,
                    step: o,
                    localizer: i,
                  }),
                );
            },
            [
              null == v ? void 0 : v.toISOString(),
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
                { className: S("rbc-label", n && "rbc-now") },
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
                return f.createElement(va, {
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
        Sa = f.forwardRef(function (e, t) {
          return f.createElement(Ea, Object.assign({ gutterRef: t }, e));
        }),
        Oa = function (e) {
          var t = e.label;
          return f.createElement(f.Fragment, null, t);
        },
        ka = (function (e) {
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
                  r.preventDefault(), Qo(e.props.onDrillDown, [t, n]);
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
                  h = u.resourceId(t),
                  v = t
                    ? r.filter(function (e) {
                        return u.resource(e) === h;
                      })
                    : r;
                return f.createElement(ra, {
                  isAllDay: !0,
                  rtl: o,
                  getNow: a,
                  minRows: 2,
                  maxRows: e.props.allDayMaxRows + 1,
                  range: s,
                  events: v,
                  resourceId: h,
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
                    c = void 0 === s ? oa : s,
                    l = i();
                  return e.map(function (e, n) {
                    var i = o(e),
                      s = r.format(e, "dayFormat"),
                      u = a(e),
                      d = u.className,
                      p = u.style,
                      h = f.createElement(c, {
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
                            h,
                          )
                        : f.createElement("span", null, h),
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
                    h = t.scrollRef,
                    v = t.localizer,
                    m = t.isOverflowing,
                    g = t.components,
                    y = g.timeGutterHeader,
                    b = g.resourceHeader,
                    w = void 0 === b ? Oa : b,
                    A = t.resizable,
                    D = {};
                  m &&
                    (D[r ? "marginLeft" : "marginRight"] = "".concat(
                      Ar() - 1,
                      "px",
                    ));
                  var E = o.groupEvents(a);
                  return f.createElement(
                    "div",
                    {
                      style: D,
                      ref: h,
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
                        h = o[1];
                      return f.createElement(
                        "div",
                        { className: "rbc-time-header-content", key: a || n },
                        h &&
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
                                label: c.resourceTitle(h),
                                resource: h,
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
                          events: E.get(a) || [],
                          resourceId: h && a,
                          className: "rbc-allday-cell",
                          selectable: l,
                          selected: e.props.selected,
                          components: d,
                          accessors: c,
                          getters: p,
                          localizer: v,
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
        xa = {};
      var Ma = (function (e) {
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
                c = s.popup,
                l = s.onDrillDown,
                u = s.onShowMore,
                f = s.getDrilldownView,
                d = s.doShowMoreDrillDown;
              if ((o.clearSelection(), c)) {
                var p = Ne(n, o.containerRef.current);
                o.setState({
                  overlay: {
                    date: t,
                    events: e,
                    position: (0, r.A)((0, r.A)({}, p), {}, { width: "200px" }),
                    target: a,
                  },
                });
              } else d && Qo(l, [t, f(t) || Zo.DAY]);
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
                      : [n([xa, null], 0)];
                  },
                  groupEvents: function (n) {
                    var r = new Map();
                    return e
                      ? (n.forEach(function (e) {
                          var n = t.resource(e) || xa;
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
                      : (r.set(xa, n), r);
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
                  c = i.components,
                  l = i.accessors,
                  d = i.localizer,
                  p = i.dayLayoutAlgorithm,
                  h = this.memoizedResources(this.props.resources, l),
                  v = h.groupEvents(t),
                  m = h.groupEvents(n);
                return h.map(function (t, n) {
                  var i = (0, u.A)(t, 2),
                    h = i[0],
                    g = i[1];
                  return e.map(function (e, t) {
                    var i = (v.get(h) || []).filter(function (t) {
                        return d.inRange(e, l.start(t), l.end(t), "day");
                      }),
                      u = (m.get(h) || []).filter(function (t) {
                        return d.inRange(e, l.start(t), l.end(t), "day");
                      });
                    return f.createElement(
                      Da,
                      Object.assign({}, o.props, {
                        localizer: d,
                        min: d.merge(e, a),
                        max: d.merge(e, s),
                        resource: g && h,
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
                  h = t.localizer,
                  v = t.min,
                  m = t.max,
                  g = t.showMultiDayTimes,
                  y = t.longPressThreshold,
                  b = t.resizable;
                i = i || this.state.gutterWidth;
                var w = o[0],
                  A = o[o.length - 1];
                this.slots = o.length;
                var D = [],
                  E = [],
                  O = [];
                return (
                  n.forEach(function (e) {
                    if ($i(e, w, A, d, h)) {
                      var t = d.start(e),
                        n = d.end(e);
                      d.allDay(e) ||
                      h.startAndEndAreDateOnly(t, n) ||
                      (!g && !h.isSameDate(t, n))
                        ? D.push(e)
                        : E.push(e);
                    }
                  }),
                  r.forEach(function (e) {
                    $i(e, w, A, d, h) && O.push(e);
                  }),
                  D.sort(function (e, t) {
                    return Xi(e, t, d, h);
                  }),
                  f.createElement(
                    "div",
                    {
                      className: S(
                        "rbc-time-view",
                        l && "rbc-time-view-resources",
                      ),
                      ref: this.containerRef,
                    },
                    f.createElement(ka, {
                      range: o,
                      events: D,
                      width: i,
                      rtl: a,
                      getNow: c,
                      localizer: h,
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
                      f.createElement(Sa, {
                        date: w,
                        ref: this.gutterRef,
                        localizer: h,
                        min: h.merge(w, v),
                        max: h.merge(w, m),
                        step: this.props.step,
                        getNow: this.props.getNow,
                        timeslots: this.props.timeslots,
                        components: u,
                        className: "rbc-time-gutter",
                        getters: p,
                      }),
                      this.renderEvents(o, E, O, c()),
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
                return f.createElement(Ci, {
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
                            ? Dr(e.gutterRef.current)
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
                    h = (0, o.A)(e, Ra),
                    v = n.range(t, { localizer: r });
                  return f.createElement(
                    Ma,
                    Object.assign({}, h, {
                      range: v,
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
      (_a.range = function (e, t) {
        return [t.localizer.startOf(e, "day")];
      }),
        (_a.navigate = function (e, t, n) {
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
        (_a.title = function (e, t) {
          return t.localizer.format(e, "dayHeaderFormat");
        });
      var Ta = [
          "date",
          "localizer",
          "min",
          "max",
          "scrollToTime",
          "enableAutoScroll",
        ],
        Ca = (function (e) {
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
                    h = (0, o.A)(e, Ta),
                    v = n.range(t, this.props);
                  return f.createElement(
                    Ma,
                    Object.assign({}, h, {
                      range: v,
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
            r = xr(Ca.range(e, { localizer: n })),
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
      var za,
        La = (function (e) {
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
                    p = (0, o.A)(e, Pa),
                    h = Na(t, this.props);
                  return f.createElement(
                    Ma,
                    Object.assign({}, p, {
                      range: h,
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
      function ja(e) {
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
          h = (0, f.useRef)(null),
          v = (0, f.useRef)(null),
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
                var n = v.current.scrollHeight > v.current.clientHeight,
                  r = [],
                  o = r;
                (r = [Dr(t.children[0]), Dr(t.children[1])]),
                  (o[0] === r[0] && o[1] === r[1]) ||
                    ((p.current.style.width = r[0] + "px"),
                    (h.current.style.width = r[1] + "px")),
                  n
                    ? ((0, Mr.A)(e, "rbc-header-overflowing"),
                      (e.style.marginRight = Ar() + "px"))
                    : (0, Rr.A)(e, "rbc-header-overflowing");
              }
            }
          },
          b = s.messages,
          w = s.add(r, a, "day"),
          A = s.range(r, w, "day");
        return (
          (o = o.filter(function (e) {
            return $i(e, s.startOf(r, "day"), s.endOf(w, "day"), t, s);
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
                          { className: "rbc-header", ref: h },
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
                    { className: "rbc-agenda-content", ref: v },
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
                              var h = t.title(n),
                                v = t.end(n),
                                m = t.start(n),
                                y = i.eventProp(n, m, v, ki(n, u)),
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
                                    ? f.createElement(a, { event: n, title: h })
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
              : f.createElement(
                  "span",
                  { className: "rbc-agenda-empty" },
                  b.noEventsInRange,
                ),
          )
        );
      }
      (La.defaultProps = Ma.defaultProps),
        (La.range = Na),
        (La.navigate = Ca.navigate),
        (La.title = function (e, t) {
          var n = t.localizer,
            r = xr(Na(e, { localizer: n })),
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
          ((za = {}),
          (0, le.A)(za, Zo.MONTH, sa),
          (0, le.A)(za, Zo.WEEK, Ca),
          (0, le.A)(za, Zo.WORK_WEEK, La),
          (0, le.A)(za, Zo.DAY, _a),
          (0, le.A)(za, Zo.AGENDA, ja),
          za),
        Wa = ["action", "date", "today"];
      var Ia = (function (e) {
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
        Ya = ["view", "date", "getNow", "onNavigate"],
        Ua = [
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
      function Ba(e) {
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
                ? Uo(
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
                c = i.getNow,
                l = i.onNavigate,
                u = (0, o.A)(i, Ya),
                f = e.getView(),
                d = c();
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
                l(s, a, t),
                e.handleRangeChange(s, f);
            }),
            (e.handleViewChange = function (t) {
              t !== e.props.view &&
                (function (e, t) {
                  return -1 !== Ba(t.views).indexOf(e);
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
                    c = e.elementProps,
                    l = e.date,
                    u = e.getNow,
                    d = e.length,
                    p = e.showMultiDayTimes,
                    h = e.onShowMore,
                    v = e.doShowMoreDrillDown;
                  e.components, e.formats, e.messages, e.culture;
                  var m = (0, o.A)(e, Ua);
                  l = l || u();
                  var g = this.getView(),
                    y = this.state.context,
                    b = y.accessors,
                    w = y.components,
                    A = y.getters,
                    D = y.localizer,
                    E = y.viewNames,
                    O = w.toolbar || Ia,
                    k = g.title(l, { localizer: D, length: d });
                  return f.createElement(
                    "div",
                    Object.assign({}, c, {
                      className: S(s, "rbc-calendar", m.rtl && "rbc-rtl"),
                      style: a,
                    }),
                    n &&
                      f.createElement(O, {
                        date: l,
                        view: t,
                        views: E,
                        label: k,
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
                        onShowMore: h,
                        doShowMoreDrillDown: v,
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
                    h = e.dayPropGetter,
                    v = e.view,
                    m = e.views,
                    g = e.localizer,
                    y = e.culture,
                    b = e.messages,
                    w = void 0 === b ? {} : b,
                    A = e.components,
                    D = void 0 === A ? {} : A,
                    E = e.formats,
                    S = void 0 === E ? {} : E,
                    O = Ba(m);
                  return {
                    viewNames: O,
                    localizer: Di(
                      g,
                      y,
                      S,
                      (function (e) {
                        return (0, r.A)((0, r.A)({}, Ei), e);
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
                        return (h && h.apply(void 0, arguments)) || {};
                      },
                    },
                    components: Fo(D[v] || {}, No(D, O), {
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
                      resourceId: Ha(c),
                      resourceTitle: Ha(l),
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
                      !v(e, t) && v(r, t) && (o.values[t] = e[m(t)]);
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
                ((t.componentWillMount = w), (t.componentWillReceiveProps = A)),
              "function" == typeof t.getSnapshotBeforeUpdate)
            ) {
              if ("function" != typeof t.componentDidUpdate)
                throw new Error(
                  "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype",
                );
              t.componentWillUpdate = D;
              var s = t.componentDidUpdate;
              t.componentDidUpdate = function (e, t, n) {
                var r = this.__reactInternalSnapshotFlag
                  ? this.__reactInternalSnapshot
                  : n;
                s.call(this, e, t, r);
              };
            }
          })(l),
            (l.displayName = "Uncontrolled(" + i + ")"),
            (l.propTypes = (0, y.A)(
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
          var o = Ga(r);
          return e(t).add(n, o).toDate();
        }
        function s(e, t) {
          var n = Ga(t),
            i = r(e, n);
          return o(i, e) ? i : a(i, 1, n);
        }
        function c(t, n) {
          var r = Ga(
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
        return new Ai({
          formats: $a,
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
              h = c(l, s(u, "day"), "day");
            return (
              d ||
              Math.max(h, 1) - Math.max(p, 1) ||
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
      var r = n(1839),
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
  },
]);
