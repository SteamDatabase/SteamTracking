/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7099],
  {
    74830: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t, r) {
          t.prototype.isBetween = function (e, t, n, i) {
            var a = r(e),
              s = r(t),
              o = "(" === (i = i || "()")[0],
              l = ")" === i[1];
            return (
              ((o ? this.isAfter(a, n) : !this.isBefore(a, n)) &&
                (l ? this.isBefore(s, n) : !this.isAfter(s, n))) ||
              ((o ? this.isBefore(a, n) : !this.isAfter(a, n)) &&
                (l ? this.isAfter(s, n) : !this.isBefore(s, n)))
            );
          };
        };
      })();
    },
    36657: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t) {
          t.prototype.isSameOrAfter = function (e, t) {
            return this.isSame(e, t) || this.isAfter(e, t);
          };
        };
      })();
    },
    87235: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t) {
          t.prototype.isSameOrBefore = function (e, t) {
            return this.isSame(e, t) || this.isBefore(e, t);
          };
        };
      })();
    },
    33159: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t, r) {
          var n = t.prototype,
            i = function (e) {
              return e && (e.indexOf ? e : e.s);
            },
            a = function (e, t, r, n, a) {
              var s = e.name ? e : e.$locale(),
                o = i(s[t]),
                l = i(s[r]),
                c =
                  o ||
                  l.map(function (e) {
                    return e.slice(0, n);
                  });
              if (!a) return c;
              var u = s.weekStart;
              return c.map(function (e, t) {
                return c[(t + (u || 0)) % 7];
              });
            },
            s = function () {
              return r.Ls[r.locale()];
            },
            o = function (e, t) {
              return (
                e.formats[t] ||
                (function (e) {
                  return e.replace(
                    /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                    function (e, t, r) {
                      return t || r.slice(1);
                    },
                  );
                })(e.formats[t.toUpperCase()])
              );
            },
            l = function () {
              var e = this;
              return {
                months: function (t) {
                  return t ? t.format("MMMM") : a(e, "months");
                },
                monthsShort: function (t) {
                  return t ? t.format("MMM") : a(e, "monthsShort", "months", 3);
                },
                firstDayOfWeek: function () {
                  return e.$locale().weekStart || 0;
                },
                weekdays: function (t) {
                  return t ? t.format("dddd") : a(e, "weekdays");
                },
                weekdaysMin: function (t) {
                  return t
                    ? t.format("dd")
                    : a(e, "weekdaysMin", "weekdays", 2);
                },
                weekdaysShort: function (t) {
                  return t
                    ? t.format("ddd")
                    : a(e, "weekdaysShort", "weekdays", 3);
                },
                longDateFormat: function (t) {
                  return o(e.$locale(), t);
                },
                meridiem: this.$locale().meridiem,
                ordinal: this.$locale().ordinal,
              };
            };
          (n.localeData = function () {
            return l.bind(this)();
          }),
            (r.localeData = function () {
              var e = s();
              return {
                firstDayOfWeek: function () {
                  return e.weekStart || 0;
                },
                weekdays: function () {
                  return r.weekdays();
                },
                weekdaysShort: function () {
                  return r.weekdaysShort();
                },
                weekdaysMin: function () {
                  return r.weekdaysMin();
                },
                months: function () {
                  return r.months();
                },
                monthsShort: function () {
                  return r.monthsShort();
                },
                longDateFormat: function (t) {
                  return o(e, t);
                },
                meridiem: e.meridiem,
                ordinal: e.ordinal,
              };
            }),
            (r.months = function () {
              return a(s(), "months");
            }),
            (r.monthsShort = function () {
              return a(s(), "monthsShort", "months", 3);
            }),
            (r.weekdays = function (e) {
              return a(s(), "weekdays", null, null, e);
            }),
            (r.weekdaysShort = function (e) {
              return a(s(), "weekdaysShort", "weekdays", 3, e);
            }),
            (r.weekdaysMin = function (e) {
              return a(s(), "weekdaysMin", "weekdays", 2, e);
            });
        };
      })();
    },
    33385: function (e) {
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
        return function (t, r, n) {
          var i = r.prototype,
            a = i.format;
          (n.en.formats = e),
            (i.format = function (t) {
              void 0 === t && (t = "YYYY-MM-DDTHH:mm:ssZ");
              var r = this.$locale().formats,
                n = (function (t, r) {
                  return t.replace(
                    /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                    function (t, n, i) {
                      var a = i && i.toUpperCase();
                      return (
                        n ||
                        r[i] ||
                        e[i] ||
                        r[a].replace(
                          /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                          function (e, t, r) {
                            return t || r.slice(1);
                          },
                        )
                      );
                    },
                  );
                })(t, void 0 === r ? {} : r);
              return a.call(this, n);
            });
        };
      })();
    },
    55181: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t, r) {
          var n = function (e, t) {
            if (
              !t ||
              !t.length ||
              (1 === t.length && !t[0]) ||
              (1 === t.length && Array.isArray(t[0]) && !t[0].length)
            )
              return null;
            var r;
            1 === t.length && t[0].length > 0 && (t = t[0]),
              (r = (t = t.filter(function (e) {
                return e;
              }))[0]);
            for (var n = 1; n < t.length; n += 1)
              (t[n].isValid() && !t[n][e](r)) || (r = t[n]);
            return r;
          };
          (r.max = function () {
            var e = [].slice.call(arguments, 0);
            return n("isAfter", e);
          }),
            (r.min = function () {
              var e = [].slice.call(arguments, 0);
              return n("isBefore", e);
            });
        };
      })();
    },
    81770: function (e) {
      e.exports = (function () {
        "use strict";
        var e = "minute",
          t = /[+-]\d\d(?::?\d\d)?/g,
          r = /([+-]|\d\d)/g;
        return function (n, i, a) {
          var s = i.prototype;
          (a.utc = function (e) {
            return new i({ date: e, utc: !0, args: arguments });
          }),
            (s.utc = function (t) {
              var r = a(this.toDate(), { locale: this.$L, utc: !0 });
              return t ? r.add(this.utcOffset(), e) : r;
            }),
            (s.local = function () {
              return a(this.toDate(), { locale: this.$L, utc: !1 });
            });
          var o = s.parse;
          s.parse = function (e) {
            e.utc && (this.$u = !0),
              this.$utils().u(e.$offset) || (this.$offset = e.$offset),
              o.call(this, e);
          };
          var l = s.init;
          s.init = function () {
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
          var c = s.utcOffset;
          s.utcOffset = function (n, i) {
            var a = this.$utils().u;
            if (a(n))
              return this.$u
                ? 0
                : a(this.$offset)
                ? c.call(this)
                : this.$offset;
            if (
              "string" == typeof n &&
              ((n = (function (e) {
                void 0 === e && (e = "");
                var n = e.match(t);
                if (!n) return null;
                var i = ("" + n[0]).match(r) || ["-", 0, 0],
                  a = i[0],
                  s = 60 * +i[1] + +i[2];
                return 0 === s ? 0 : "+" === a ? s : -s;
              })(n)),
              null === n)
            )
              return this;
            var s = Math.abs(n) <= 16 ? 60 * n : n,
              o = this;
            if (i) return (o.$offset = s), (o.$u = 0 === n), o;
            if (0 !== n) {
              var l = this.$u
                ? this.toDate().getTimezoneOffset()
                : -1 * this.utcOffset();
              ((o = this.local().add(s + l, e)).$offset = s),
                (o.$x.$localOffset = l);
            } else o = this.utc();
            return o;
          };
          var u = s.format;
          (s.format = function (e) {
            var t = e || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return u.call(this, t);
          }),
            (s.valueOf = function () {
              var e = this.$utils().u(this.$offset)
                ? 0
                : this.$offset +
                  (this.$x.$localOffset || this.$d.getTimezoneOffset());
              return this.$d.valueOf() - 6e4 * e;
            }),
            (s.isUTC = function () {
              return !!this.$u;
            }),
            (s.toISOString = function () {
              return this.toDate().toISOString();
            }),
            (s.toString = function () {
              return this.toDate().toUTCString();
            });
          var d = s.toDate;
          s.toDate = function (e) {
            return "s" === e && this.$offset
              ? a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
              : d.call(this);
          };
          var f = s.diff;
          s.diff = function (e, t, r) {
            if (e && this.$u === e.$u) return f.call(this, e, t, r);
            var n = this.local(),
              i = a(e).local();
            return f.call(n, i, t, r);
          };
        };
      })();
    },
    48719: (e) => {
      "use strict";
      e.exports = function (e, t, r, n, i, a, s, o) {
        if (!e) {
          var l;
          if (void 0 === t)
            l = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
          else {
            var c = [r, n, i, a, s, o],
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
    94197: (e, t, r) => {
      "use strict";
      r.d(t, { f: () => Ys, kO: () => ta, Zt: () => eo });
      var n = r(25630),
        i = r(44348),
        a = r(26082),
        s = r(91610),
        o = r(31945),
        l = r(61968),
        c = r(89659),
        u = r(17600),
        d = r(47427),
        f = r(48719),
        m = r.n(f),
        p = function () {};
      function h(e, t) {
        return void 0 !== e[t];
      }
      function y(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      var g = r(76737),
        v = r(22688),
        b = r(98425),
        w = r(36904);
      function B(e) {
        var t,
          r,
          n = "";
        if ("string" == typeof e || "number" == typeof e) n += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (r = B(e[t])) && (n && (n += " "), (n += r));
          else for (t in e) e[t] && (n && (n += " "), (n += t));
        return n;
      }
      const M = function () {
        for (var e, t, r = 0, n = ""; r < arguments.length; )
          (e = arguments[r++]) && (t = B(e)) && (n && (n += " "), (n += t));
        return n;
      };
      var _ = r(25816),
        z = r.n(_),
        S = "milliseconds",
        R = "seconds",
        O = "minutes",
        E = "hours",
        F = "day",
        D = "week",
        x = "month",
        j = "year",
        T = "decade",
        k = "century",
        P = {
          milliseconds: 1,
          seconds: 1e3,
          minutes: 6e4,
          hours: 36e5,
          day: 864e5,
          week: 6048e5,
        },
        W = { month: 1, year: 12, decade: 120, century: 1200 };
      function A(e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0 ? 29 : 28;
      }
      function C(e, t, r) {
        switch (((e = new Date(e)), r)) {
          case S:
          case R:
          case O:
          case E:
          case F:
          case D:
            return (function (e, t) {
              var r = new Date(+e + t);
              return (function (e, t) {
                var r = e.getTimezoneOffset(),
                  n = t.getTimezoneOffset();
                return new Date(+t + (n - r) * P.minutes);
              })(e, r);
            })(e, t * P[r]);
          case x:
          case j:
          case T:
          case k:
            return (function (e, t) {
              var r = e.getFullYear(),
                n = e.getMonth(),
                i = e.getDate(),
                a = 12 * r + n + t,
                s = Math.trunc(a / 12),
                o = a % 12,
                l = Math.min(
                  i,
                  (function (e) {
                    return [31, A(e), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                  })(s)[o],
                ),
                c = new Date(e);
              return (
                c.setFullYear(s), c.setDate(1), c.setMonth(o), c.setDate(l), c
              );
            })(e, t * W[r]);
        }
        throw new TypeError('Invalid units: "' + r + '"');
      }
      function I(e, t, r) {
        return C(e, -t, r);
      }
      function N(e, t, r) {
        switch (((e = new Date(e)), t)) {
          case k:
          case T:
          case j:
            e = ne(e, 0);
          case x:
            e = re(e, 1);
          case D:
          case F:
            e = ee(e, 0);
          case E:
            e = Q(e, 0);
          case O:
            e = J(e, 0);
          case R:
            e = $(e, 0);
        }
        return (
          t === T && (e = I(e, ie(e) % 10, "year")),
          t === k && (e = I(e, ie(e) % 100, "year")),
          t === D &&
            (e = (function (e, t, r) {
              var n = (te(e) + 7 - (r || 0)) % 7;
              return void 0 === t ? n : C(e, t - n, F);
            })(e, 0, r)),
          e
        );
      }
      function Z(e, t, r) {
        switch (((e = N((e = new Date(e)), t, r)), t)) {
          case k:
          case T:
          case j:
          case x:
          case D:
            (e = I((e = C(e, 1, t)), 1, F)).setHours(23, 59, 59, 999);
            break;
          case F:
            e.setHours(23, 59, 59, 999);
            break;
          case E:
          case O:
          case R:
            e = I((e = C(e, 1, t)), 1, S);
        }
        return e;
      }
      var L = se(function (e, t) {
          return e === t;
        }),
        U = se(function (e, t) {
          return e !== t;
        }),
        X = se(function (e, t) {
          return e > t;
        }),
        q = se(function (e, t) {
          return e >= t;
        }),
        H = se(function (e, t) {
          return e < t;
        }),
        G = se(function (e, t) {
          return e <= t;
        });
      function K() {
        return new Date(Math.min.apply(Math, arguments));
      }
      function V() {
        return new Date(Math.max.apply(Math, arguments));
      }
      function Y(e, t, r, n) {
        return (n = n || "day"), (!t || q(e, t, n)) && (!r || G(e, r, n));
      }
      var $ = ae("Milliseconds"),
        J = ae("Seconds"),
        Q = ae("Minutes"),
        ee = ae("Hours"),
        te = ae("Day"),
        re = ae("Date"),
        ne = ae("Month"),
        ie = ae("FullYear");
      function ae(e) {
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
        return function (r, n) {
          if (void 0 === n) return r["get" + e]();
          var i = new Date(r);
          return (
            i["set" + e](n),
            t &&
              i["get" + e]() != n &&
              ("Hours" === e ||
                (n >= t && i.getHours() - r.getHours() < Math.floor(n / t))) &&
              i["set" + e](n + t),
            i
          );
        };
      }
      function se(e) {
        return function (t, r, n) {
          return e(+N(t, n), +N(r, n));
        };
      }
      var oe = r(14039),
        le = r(87402);
      const ce = function (e, t, r) {
        var n = -1,
          i = e.length;
        t < 0 && (t = -t > i ? 0 : i + t),
          (r = r > i ? i : r) < 0 && (r += i),
          (i = t > r ? 0 : (r - t) >>> 0),
          (t >>>= 0);
        for (var a = Array(i); ++n < i; ) a[n] = e[n + t];
        return a;
      };
      var ue = r(73380),
        de = r(20787),
        fe = 1 / 0;
      const me = function (e) {
        return e
          ? (e = (0, de.Z)(e)) === fe || e === -1 / 0
            ? 17976931348623157e292 * (e < 0 ? -1 : 1)
            : e == e
            ? e
            : 0
          : 0 === e
          ? e
          : 0;
      };
      const pe = function (e) {
        var t = me(e),
          r = t % 1;
        return t == t ? (r ? t - r : t) : 0;
      };
      var he = Math.ceil,
        ye = Math.max;
      const ge = function (e, t, r) {
        t = (r ? (0, ue.Z)(e, t, r) : void 0 === t) ? 1 : ye(pe(t), 0);
        var n = null == e ? 0 : e.length;
        if (!n || t < 1) return [];
        for (var i = 0, a = 0, s = Array(he(n / t)); i < n; )
          s[a++] = ce(e, i, (i += t));
        return s;
      };
      function ve(e) {
        return (e && e.ownerDocument) || document;
      }
      function be(e, t) {
        return (function (e) {
          var t = ve(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var we = /([A-Z])/g;
      var Be = /^ms-/;
      function Me(e) {
        return (function (e) {
          return e.replace(we, "-$1").toLowerCase();
        })(e).replace(Be, "-ms-");
      }
      var _e =
        /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      const ze = function (e, t) {
        var r = "",
          n = "";
        if ("string" == typeof t)
          return (
            e.style.getPropertyValue(Me(t)) || be(e).getPropertyValue(Me(t))
          );
        Object.keys(t).forEach(function (i) {
          var a = t[i];
          a || 0 === a
            ? !(function (e) {
                return !(!e || !_e.test(e));
              })(i)
              ? (r += Me(i) + ": " + a + ";")
              : (n += i + "(" + a + ") ")
            : e.style.removeProperty(Me(i));
        }),
          n && (r += "transform: " + n + ";"),
          (e.style.cssText += ";" + r);
      };
      function Se(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
          ? e === t || !!(16 & e.compareDocumentPosition(t))
          : void 0;
      }
      function Re(e) {
        return "window" in e && e.window === e
          ? e
          : ("nodeType" in (t = e) &&
              t.nodeType === document.DOCUMENT_NODE &&
              e.defaultView) ||
              !1;
        var t;
      }
      function Oe(e) {
        var t = "pageXOffset" === e ? "scrollLeft" : "scrollTop";
        return function (r, n) {
          var i = Re(r);
          if (void 0 === n) return i ? i[e] : r[t];
          i ? i.scrollTo(i[e], n) : (r[t] = n);
        };
      }
      const Ee = Oe("pageXOffset"),
        Fe = Oe("pageYOffset");
      function De(e) {
        var t = ve(e),
          r = { top: 0, left: 0, height: 0, width: 0 },
          n = t && t.documentElement;
        return n && Se(n, e)
          ? (void 0 !== e.getBoundingClientRect &&
              (r = e.getBoundingClientRect()),
            (r = {
              top: r.top + Fe(n) - (n.clientTop || 0),
              left: r.left + Ee(n) - (n.clientLeft || 0),
              width: r.width,
              height: r.height,
            }))
          : r;
      }
      var xe = function (e) {
        return !!e && "offsetParent" in e;
      };
      function je(e, t) {
        var r,
          n = { top: 0, left: 0 };
        if ("fixed" === ze(e, "position")) r = e.getBoundingClientRect();
        else {
          var i =
            t ||
            (function (e) {
              for (
                var t = ve(e), r = e && e.offsetParent;
                xe(r) &&
                "HTML" !== r.nodeName &&
                "static" === ze(r, "position");

              )
                r = r.offsetParent;
              return r || t.documentElement;
            })(e);
          (r = De(e)),
            "html" !==
              (function (e) {
                return e.nodeName && e.nodeName.toLowerCase();
              })(i) && (n = De(i));
          var a = String(ze(i, "borderTopWidth") || 0);
          n.top += parseInt(a, 10) - Fe(i) || 0;
          var s = String(ze(i, "borderLeftWidth") || 0);
          n.left += parseInt(s, 10) - Ee(i) || 0;
        }
        var o = String(ze(e, "marginTop") || 0),
          l = String(ze(e, "marginLeft") || 0);
        return (0, v.Z)({}, r, {
          top: r.top - n.top - (parseInt(o, 10) || 0),
          left: r.left - n.left - (parseInt(l, 10) || 0),
        });
      }
      const Te = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var ke = new Date().getTime();
      var Pe = "clearTimeout",
        We = function (e) {
          var t = new Date().getTime(),
            r = Math.max(0, 16 - (t - ke)),
            n = setTimeout(e, r);
          return (ke = t), n;
        },
        Ae = function (e, t) {
          return (
            e + (e ? t[0].toUpperCase() + t.substr(1) : t) + "AnimationFrame"
          );
        };
      Te &&
        ["", "webkit", "moz", "o", "ms"].some(function (e) {
          var t = Ae(e, "request");
          return (
            t in window &&
              ((Pe = Ae(e, "cancel")),
              (We = function (e) {
                return window[t](e);
              })),
            !!We
          );
        });
      var Ce = function (e) {
          "function" == typeof window[Pe] && window[Pe](e);
        },
        Ie = We,
        Ne = r(42287);
      function Ze() {
        return (0, d.useState)(null);
      }
      const Le = (e) =>
        e && "function" != typeof e
          ? (t) => {
              e.current = t;
            }
          : e;
      const Ue = function (e, t) {
        return (0, d.useMemo)(
          () =>
            (function (e, t) {
              const r = Le(e),
                n = Le(t);
              return (e) => {
                r && r(e), n && n(e);
              };
            })(e, t),
          [e, t],
        );
      };
      var Xe = "top",
        qe = "bottom",
        He = "right",
        Ge = "left",
        Ke = "auto",
        Ve = [Xe, qe, He, Ge],
        Ye = "start",
        $e = "end",
        Je = "clippingParents",
        Qe = "viewport",
        et = "popper",
        tt = "reference",
        rt = Ve.reduce(function (e, t) {
          return e.concat([t + "-" + Ye, t + "-" + $e]);
        }, []),
        nt = [].concat(Ve, [Ke]).reduce(function (e, t) {
          return e.concat([t, t + "-" + Ye, t + "-" + $e]);
        }, []),
        it = [
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
      const at = function (e) {
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
            (r) => {
              if (t()) return e[1](r);
            },
            [t, e[1]],
          ),
        ];
      };
      function st(e) {
        return e.split("-")[0];
      }
      function ot(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function lt(e) {
        return e instanceof ot(e).Element || e instanceof Element;
      }
      function ct(e) {
        return e instanceof ot(e).HTMLElement || e instanceof HTMLElement;
      }
      function ut(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof ot(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var dt = Math.max,
        ft = Math.min,
        mt = Math.round;
      function pt() {
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
        return !/^((?!chrome|android).)*safari/i.test(pt());
      }
      function yt(e, t, r) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        var n = e.getBoundingClientRect(),
          i = 1,
          a = 1;
        t &&
          ct(e) &&
          ((i = (e.offsetWidth > 0 && mt(n.width) / e.offsetWidth) || 1),
          (a = (e.offsetHeight > 0 && mt(n.height) / e.offsetHeight) || 1));
        var s = (lt(e) ? ot(e) : window).visualViewport,
          o = !ht() && r,
          l = (n.left + (o && s ? s.offsetLeft : 0)) / i,
          c = (n.top + (o && s ? s.offsetTop : 0)) / a,
          u = n.width / i,
          d = n.height / a;
        return {
          width: u,
          height: d,
          top: c,
          right: l + u,
          bottom: c + d,
          left: l,
          x: l,
          y: c,
        };
      }
      function gt(e) {
        var t = yt(e),
          r = e.offsetWidth,
          n = e.offsetHeight;
        return (
          Math.abs(t.width - r) <= 1 && (r = t.width),
          Math.abs(t.height - n) <= 1 && (n = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
        );
      }
      function vt(e, t) {
        var r = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (r && ut(r)) {
          var n = t;
          do {
            if (n && e.isSameNode(n)) return !0;
            n = n.parentNode || n.host;
          } while (n);
        }
        return !1;
      }
      function bt(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function wt(e) {
        return ot(e).getComputedStyle(e);
      }
      function Bt(e) {
        return ["table", "td", "th"].indexOf(bt(e)) >= 0;
      }
      function Mt(e) {
        return ((lt(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function _t(e) {
        return "html" === bt(e)
          ? e
          : e.assignedSlot || e.parentNode || (ut(e) ? e.host : null) || Mt(e);
      }
      function zt(e) {
        return ct(e) && "fixed" !== wt(e).position ? e.offsetParent : null;
      }
      function St(e) {
        for (
          var t = ot(e), r = zt(e);
          r && Bt(r) && "static" === wt(r).position;

        )
          r = zt(r);
        return r &&
          ("html" === bt(r) ||
            ("body" === bt(r) && "static" === wt(r).position))
          ? t
          : r ||
              (function (e) {
                var t = /firefox/i.test(pt());
                if (
                  /Trident/i.test(pt()) &&
                  ct(e) &&
                  "fixed" === wt(e).position
                )
                  return null;
                var r = _t(e);
                for (
                  ut(r) && (r = r.host);
                  ct(r) && ["html", "body"].indexOf(bt(r)) < 0;

                ) {
                  var n = wt(r);
                  if (
                    "none" !== n.transform ||
                    "none" !== n.perspective ||
                    "paint" === n.contain ||
                    -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                    (t && "filter" === n.willChange) ||
                    (t && n.filter && "none" !== n.filter)
                  )
                    return r;
                  r = r.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function Rt(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function Ot(e, t, r) {
        return dt(e, ft(t, r));
      }
      function Et(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function Ft(e, t) {
        return t.reduce(function (t, r) {
          return (t[r] = e), t;
        }, {});
      }
      const Dt = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            r = e.state,
            n = e.name,
            i = e.options,
            a = r.elements.arrow,
            s = r.modifiersData.popperOffsets,
            o = st(r.placement),
            l = Rt(o),
            c = [Ge, He].indexOf(o) >= 0 ? "height" : "width";
          if (a && s) {
            var u = (function (e, t) {
                return Et(
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
                    : Ft(e, Ve),
                );
              })(i.padding, r),
              d = gt(a),
              f = "y" === l ? Xe : Ge,
              m = "y" === l ? qe : He,
              p =
                r.rects.reference[c] +
                r.rects.reference[l] -
                s[l] -
                r.rects.popper[c],
              h = s[l] - r.rects.reference[l],
              y = St(a),
              g = y
                ? "y" === l
                  ? y.clientHeight || 0
                  : y.clientWidth || 0
                : 0,
              v = p / 2 - h / 2,
              b = u[f],
              w = g - d[c] - u[m],
              B = g / 2 - d[c] / 2 + v,
              M = Ot(b, B, w),
              _ = l;
            r.modifiersData[n] =
              (((t = {})[_] = M), (t.centerOffset = M - B), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            r = e.options.element,
            n = void 0 === r ? "[data-popper-arrow]" : r;
          null != n &&
            ("string" != typeof n ||
              (n = t.elements.popper.querySelector(n))) &&
            vt(t.elements.popper, n) &&
            (t.elements.arrow = n);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function xt(e) {
        return e.split("-")[1];
      }
      var jt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Tt(e) {
        var t,
          r = e.popper,
          n = e.popperRect,
          i = e.placement,
          a = e.variation,
          s = e.offsets,
          o = e.position,
          l = e.gpuAcceleration,
          c = e.adaptive,
          u = e.roundOffsets,
          d = e.isFixed,
          f = s.x,
          m = void 0 === f ? 0 : f,
          p = s.y,
          h = void 0 === p ? 0 : p,
          y = "function" == typeof u ? u({ x: m, y: h }) : { x: m, y: h };
        (m = y.x), (h = y.y);
        var g = s.hasOwnProperty("x"),
          v = s.hasOwnProperty("y"),
          b = Ge,
          w = Xe,
          B = window;
        if (c) {
          var M = St(r),
            _ = "clientHeight",
            z = "clientWidth";
          if (
            (M === ot(r) &&
              "static" !== wt((M = Mt(r))).position &&
              "absolute" === o &&
              ((_ = "scrollHeight"), (z = "scrollWidth")),
            i === Xe || ((i === Ge || i === He) && a === $e))
          )
            (w = qe),
              (h -=
                (d && M === B && B.visualViewport
                  ? B.visualViewport.height
                  : M[_]) - n.height),
              (h *= l ? 1 : -1);
          if (i === Ge || ((i === Xe || i === qe) && a === $e))
            (b = He),
              (m -=
                (d && M === B && B.visualViewport
                  ? B.visualViewport.width
                  : M[z]) - n.width),
              (m *= l ? 1 : -1);
        }
        var S,
          R = Object.assign({ position: o }, c && jt),
          O =
            !0 === u
              ? (function (e, t) {
                  var r = e.x,
                    n = e.y,
                    i = t.devicePixelRatio || 1;
                  return { x: mt(r * i) / i || 0, y: mt(n * i) / i || 0 };
                })({ x: m, y: h }, ot(r))
              : { x: m, y: h };
        return (
          (m = O.x),
          (h = O.y),
          l
            ? Object.assign(
                {},
                R,
                (((S = {})[w] = v ? "0" : ""),
                (S[b] = g ? "0" : ""),
                (S.transform =
                  (B.devicePixelRatio || 1) <= 1
                    ? "translate(" + m + "px, " + h + "px)"
                    : "translate3d(" + m + "px, " + h + "px, 0)"),
                S),
              )
            : Object.assign(
                {},
                R,
                (((t = {})[w] = v ? h + "px" : ""),
                (t[b] = g ? m + "px" : ""),
                (t.transform = ""),
                t),
              )
        );
      }
      const kt = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (e) {
          var t = e.state,
            r = e.options,
            n = r.gpuAcceleration,
            i = void 0 === n || n,
            a = r.adaptive,
            s = void 0 === a || a,
            o = r.roundOffsets,
            l = void 0 === o || o,
            c = {
              placement: st(t.placement),
              variation: xt(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: i,
              isFixed: "fixed" === t.options.strategy,
            };
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              Tt(
                Object.assign({}, c, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: s,
                  roundOffsets: l,
                }),
              ),
            )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                Tt(
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
      var Pt = { passive: !0 };
      const Wt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            r = e.instance,
            n = e.options,
            i = n.scroll,
            a = void 0 === i || i,
            s = n.resize,
            o = void 0 === s || s,
            l = ot(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            a &&
              c.forEach(function (e) {
                e.addEventListener("scroll", r.update, Pt);
              }),
            o && l.addEventListener("resize", r.update, Pt),
            function () {
              a &&
                c.forEach(function (e) {
                  e.removeEventListener("scroll", r.update, Pt);
                }),
                o && l.removeEventListener("resize", r.update, Pt);
            }
          );
        },
        data: {},
      };
      var At = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function Ct(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return At[e];
        });
      }
      var It = { start: "end", end: "start" };
      function Nt(e) {
        return e.replace(/start|end/g, function (e) {
          return It[e];
        });
      }
      function Zt(e) {
        var t = ot(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function Lt(e) {
        return yt(Mt(e)).left + Zt(e).scrollLeft;
      }
      function Ut(e) {
        var t = wt(e),
          r = t.overflow,
          n = t.overflowX,
          i = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(r + i + n);
      }
      function Xt(e) {
        return ["html", "body", "#document"].indexOf(bt(e)) >= 0
          ? e.ownerDocument.body
          : ct(e) && Ut(e)
          ? e
          : Xt(_t(e));
      }
      function qt(e, t) {
        var r;
        void 0 === t && (t = []);
        var n = Xt(e),
          i = n === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = ot(n),
          s = i ? [a].concat(a.visualViewport || [], Ut(n) ? n : []) : n,
          o = t.concat(s);
        return i ? o : o.concat(qt(_t(s)));
      }
      function Ht(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function Gt(e, t, r) {
        return t === Qe
          ? Ht(
              (function (e, t) {
                var r = ot(e),
                  n = Mt(e),
                  i = r.visualViewport,
                  a = n.clientWidth,
                  s = n.clientHeight,
                  o = 0,
                  l = 0;
                if (i) {
                  (a = i.width), (s = i.height);
                  var c = ht();
                  (c || (!c && "fixed" === t)) &&
                    ((o = i.offsetLeft), (l = i.offsetTop));
                }
                return { width: a, height: s, x: o + Lt(e), y: l };
              })(e, r),
            )
          : lt(t)
          ? (function (e, t) {
              var r = yt(e, !1, "fixed" === t);
              return (
                (r.top = r.top + e.clientTop),
                (r.left = r.left + e.clientLeft),
                (r.bottom = r.top + e.clientHeight),
                (r.right = r.left + e.clientWidth),
                (r.width = e.clientWidth),
                (r.height = e.clientHeight),
                (r.x = r.left),
                (r.y = r.top),
                r
              );
            })(t, r)
          : Ht(
              (function (e) {
                var t,
                  r = Mt(e),
                  n = Zt(e),
                  i = null == (t = e.ownerDocument) ? void 0 : t.body,
                  a = dt(
                    r.scrollWidth,
                    r.clientWidth,
                    i ? i.scrollWidth : 0,
                    i ? i.clientWidth : 0,
                  ),
                  s = dt(
                    r.scrollHeight,
                    r.clientHeight,
                    i ? i.scrollHeight : 0,
                    i ? i.clientHeight : 0,
                  ),
                  o = -n.scrollLeft + Lt(e),
                  l = -n.scrollTop;
                return (
                  "rtl" === wt(i || r).direction &&
                    (o += dt(r.clientWidth, i ? i.clientWidth : 0) - a),
                  { width: a, height: s, x: o, y: l }
                );
              })(Mt(e)),
            );
      }
      function Kt(e, t, r, n) {
        var i =
            "clippingParents" === t
              ? (function (e) {
                  var t = qt(_t(e)),
                    r =
                      ["absolute", "fixed"].indexOf(wt(e).position) >= 0 &&
                      ct(e)
                        ? St(e)
                        : e;
                  return lt(r)
                    ? t.filter(function (e) {
                        return lt(e) && vt(e, r) && "body" !== bt(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          a = [].concat(i, [r]),
          s = a[0],
          o = a.reduce(
            function (t, r) {
              var i = Gt(e, r, n);
              return (
                (t.top = dt(i.top, t.top)),
                (t.right = ft(i.right, t.right)),
                (t.bottom = ft(i.bottom, t.bottom)),
                (t.left = dt(i.left, t.left)),
                t
              );
            },
            Gt(e, s, n),
          );
        return (
          (o.width = o.right - o.left),
          (o.height = o.bottom - o.top),
          (o.x = o.left),
          (o.y = o.top),
          o
        );
      }
      function Vt(e) {
        var t,
          r = e.reference,
          n = e.element,
          i = e.placement,
          a = i ? st(i) : null,
          s = i ? xt(i) : null,
          o = r.x + r.width / 2 - n.width / 2,
          l = r.y + r.height / 2 - n.height / 2;
        switch (a) {
          case Xe:
            t = { x: o, y: r.y - n.height };
            break;
          case qe:
            t = { x: o, y: r.y + r.height };
            break;
          case He:
            t = { x: r.x + r.width, y: l };
            break;
          case Ge:
            t = { x: r.x - n.width, y: l };
            break;
          default:
            t = { x: r.x, y: r.y };
        }
        var c = a ? Rt(a) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (s) {
            case Ye:
              t[c] = t[c] - (r[u] / 2 - n[u] / 2);
              break;
            case $e:
              t[c] = t[c] + (r[u] / 2 - n[u] / 2);
          }
        }
        return t;
      }
      function Yt(e, t) {
        void 0 === t && (t = {});
        var r = t,
          n = r.placement,
          i = void 0 === n ? e.placement : n,
          a = r.strategy,
          s = void 0 === a ? e.strategy : a,
          o = r.boundary,
          l = void 0 === o ? Je : o,
          c = r.rootBoundary,
          u = void 0 === c ? Qe : c,
          d = r.elementContext,
          f = void 0 === d ? et : d,
          m = r.altBoundary,
          p = void 0 !== m && m,
          h = r.padding,
          y = void 0 === h ? 0 : h,
          g = Et("number" != typeof y ? y : Ft(y, Ve)),
          v = f === et ? tt : et,
          b = e.rects.popper,
          w = e.elements[p ? v : f],
          B = Kt(
            lt(w) ? w : w.contextElement || Mt(e.elements.popper),
            l,
            u,
            s,
          ),
          M = yt(e.elements.reference),
          _ = Vt({
            reference: M,
            element: b,
            strategy: "absolute",
            placement: i,
          }),
          z = Ht(Object.assign({}, b, _)),
          S = f === et ? z : M,
          R = {
            top: B.top - S.top + g.top,
            bottom: S.bottom - B.bottom + g.bottom,
            left: B.left - S.left + g.left,
            right: S.right - B.right + g.right,
          },
          O = e.modifiersData.offset;
        if (f === et && O) {
          var E = O[i];
          Object.keys(R).forEach(function (e) {
            var t = [He, qe].indexOf(e) >= 0 ? 1 : -1,
              r = [Xe, qe].indexOf(e) >= 0 ? "y" : "x";
            R[e] += E[r] * t;
          });
        }
        return R;
      }
      const $t = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            r = e.options,
            n = e.name;
          if (!t.modifiersData[n]._skip) {
            for (
              var i = r.mainAxis,
                a = void 0 === i || i,
                s = r.altAxis,
                o = void 0 === s || s,
                l = r.fallbackPlacements,
                c = r.padding,
                u = r.boundary,
                d = r.rootBoundary,
                f = r.altBoundary,
                m = r.flipVariations,
                p = void 0 === m || m,
                h = r.allowedAutoPlacements,
                y = t.options.placement,
                g = st(y),
                v =
                  l ||
                  (g === y || !p
                    ? [Ct(y)]
                    : (function (e) {
                        if (st(e) === Ke) return [];
                        var t = Ct(e);
                        return [Nt(e), t, Nt(t)];
                      })(y)),
                b = [y].concat(v).reduce(function (e, r) {
                  return e.concat(
                    st(r) === Ke
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var r = t,
                            n = r.placement,
                            i = r.boundary,
                            a = r.rootBoundary,
                            s = r.padding,
                            o = r.flipVariations,
                            l = r.allowedAutoPlacements,
                            c = void 0 === l ? nt : l,
                            u = xt(n),
                            d = u
                              ? o
                                ? rt
                                : rt.filter(function (e) {
                                    return xt(e) === u;
                                  })
                              : Ve,
                            f = d.filter(function (e) {
                              return c.indexOf(e) >= 0;
                            });
                          0 === f.length && (f = d);
                          var m = f.reduce(function (t, r) {
                            return (
                              (t[r] = Yt(e, {
                                placement: r,
                                boundary: i,
                                rootBoundary: a,
                                padding: s,
                              })[st(r)]),
                              t
                            );
                          }, {});
                          return Object.keys(m).sort(function (e, t) {
                            return m[e] - m[t];
                          });
                        })(t, {
                          placement: r,
                          boundary: u,
                          rootBoundary: d,
                          padding: c,
                          flipVariations: p,
                          allowedAutoPlacements: h,
                        })
                      : r,
                  );
                }, []),
                w = t.rects.reference,
                B = t.rects.popper,
                M = new Map(),
                _ = !0,
                z = b[0],
                S = 0;
              S < b.length;
              S++
            ) {
              var R = b[S],
                O = st(R),
                E = xt(R) === Ye,
                F = [Xe, qe].indexOf(O) >= 0,
                D = F ? "width" : "height",
                x = Yt(t, {
                  placement: R,
                  boundary: u,
                  rootBoundary: d,
                  altBoundary: f,
                  padding: c,
                }),
                j = F ? (E ? He : Ge) : E ? qe : Xe;
              w[D] > B[D] && (j = Ct(j));
              var T = Ct(j),
                k = [];
              if (
                (a && k.push(x[O] <= 0),
                o && k.push(x[j] <= 0, x[T] <= 0),
                k.every(function (e) {
                  return e;
                }))
              ) {
                (z = R), (_ = !1);
                break;
              }
              M.set(R, k);
            }
            if (_)
              for (
                var P = function (e) {
                    var t = b.find(function (t) {
                      var r = M.get(t);
                      if (r)
                        return r.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (z = t), "break";
                  },
                  W = p ? 3 : 1;
                W > 0;
                W--
              ) {
                if ("break" === P(W)) break;
              }
            t.placement !== z &&
              ((t.modifiersData[n]._skip = !0),
              (t.placement = z),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function Jt(e, t, r) {
        return (
          void 0 === r && (r = { x: 0, y: 0 }),
          {
            top: e.top - t.height - r.y,
            right: e.right - t.width + r.x,
            bottom: e.bottom - t.height + r.y,
            left: e.left - t.width - r.x,
          }
        );
      }
      function Qt(e) {
        return [Xe, He, qe, Ge].some(function (t) {
          return e[t] >= 0;
        });
      }
      const er = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            r = e.options,
            n = e.name,
            i = r.offset,
            a = void 0 === i ? [0, 0] : i,
            s = nt.reduce(function (e, r) {
              return (
                (e[r] = (function (e, t, r) {
                  var n = st(e),
                    i = [Ge, Xe].indexOf(n) >= 0 ? -1 : 1,
                    a =
                      "function" == typeof r
                        ? r(Object.assign({}, t, { placement: e }))
                        : r,
                    s = a[0],
                    o = a[1];
                  return (
                    (s = s || 0),
                    (o = (o || 0) * i),
                    [Ge, He].indexOf(n) >= 0 ? { x: o, y: s } : { x: s, y: o }
                  );
                })(r, t.rects, a)),
                e
              );
            }, {}),
            o = s[t.placement],
            l = o.x,
            c = o.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += l),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[n] = s);
        },
      };
      const tr = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            r = e.options,
            n = e.name,
            i = r.mainAxis,
            a = void 0 === i || i,
            s = r.altAxis,
            o = void 0 !== s && s,
            l = r.boundary,
            c = r.rootBoundary,
            u = r.altBoundary,
            d = r.padding,
            f = r.tether,
            m = void 0 === f || f,
            p = r.tetherOffset,
            h = void 0 === p ? 0 : p,
            y = Yt(t, {
              boundary: l,
              rootBoundary: c,
              padding: d,
              altBoundary: u,
            }),
            g = st(t.placement),
            v = xt(t.placement),
            b = !v,
            w = Rt(g),
            B = "x" === w ? "y" : "x",
            M = t.modifiersData.popperOffsets,
            _ = t.rects.reference,
            z = t.rects.popper,
            S =
              "function" == typeof h
                ? h(Object.assign({}, t.rects, { placement: t.placement }))
                : h,
            R =
              "number" == typeof S
                ? { mainAxis: S, altAxis: S }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, S),
            O = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            E = { x: 0, y: 0 };
          if (M) {
            if (a) {
              var F,
                D = "y" === w ? Xe : Ge,
                x = "y" === w ? qe : He,
                j = "y" === w ? "height" : "width",
                T = M[w],
                k = T + y[D],
                P = T - y[x],
                W = m ? -z[j] / 2 : 0,
                A = v === Ye ? _[j] : z[j],
                C = v === Ye ? -z[j] : -_[j],
                I = t.elements.arrow,
                N = m && I ? gt(I) : { width: 0, height: 0 },
                Z = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                L = Z[D],
                U = Z[x],
                X = Ot(0, _[j], N[j]),
                q = b
                  ? _[j] / 2 - W - X - L - R.mainAxis
                  : A - X - L - R.mainAxis,
                H = b
                  ? -_[j] / 2 + W + X + U + R.mainAxis
                  : C + X + U + R.mainAxis,
                G = t.elements.arrow && St(t.elements.arrow),
                K = G ? ("y" === w ? G.clientTop || 0 : G.clientLeft || 0) : 0,
                V = null != (F = null == O ? void 0 : O[w]) ? F : 0,
                Y = T + H - V,
                $ = Ot(m ? ft(k, T + q - V - K) : k, T, m ? dt(P, Y) : P);
              (M[w] = $), (E[w] = $ - T);
            }
            if (o) {
              var J,
                Q = "x" === w ? Xe : Ge,
                ee = "x" === w ? qe : He,
                te = M[B],
                re = "y" === B ? "height" : "width",
                ne = te + y[Q],
                ie = te - y[ee],
                ae = -1 !== [Xe, Ge].indexOf(g),
                se = null != (J = null == O ? void 0 : O[B]) ? J : 0,
                oe = ae ? ne : te - _[re] - z[re] - se + R.altAxis,
                le = ae ? te + _[re] + z[re] - se - R.altAxis : ie,
                ce =
                  m && ae
                    ? (function (e, t, r) {
                        var n = Ot(e, t, r);
                        return n > r ? r : n;
                      })(oe, te, le)
                    : Ot(m ? oe : ne, te, m ? le : ie);
              (M[B] = ce), (E[B] = ce - te);
            }
            t.modifiersData[n] = E;
          }
        },
        requiresIfExists: ["offset"],
      };
      function rr(e, t, r) {
        void 0 === r && (r = !1);
        var n,
          i,
          a = ct(t),
          s =
            ct(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                r = mt(t.width) / e.offsetWidth || 1,
                n = mt(t.height) / e.offsetHeight || 1;
              return 1 !== r || 1 !== n;
            })(t),
          o = Mt(t),
          l = yt(e, s, r),
          c = { scrollLeft: 0, scrollTop: 0 },
          u = { x: 0, y: 0 };
        return (
          (a || (!a && !r)) &&
            (("body" !== bt(t) || Ut(o)) &&
              (c =
                (n = t) !== ot(n) && ct(n)
                  ? { scrollLeft: (i = n).scrollLeft, scrollTop: i.scrollTop }
                  : Zt(n)),
            ct(t)
              ? (((u = yt(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
              : o && (u.x = Lt(o))),
          {
            x: l.left + c.scrollLeft - u.x,
            y: l.top + c.scrollTop - u.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function nr(e) {
        var t = new Map(),
          r = new Set(),
          n = [];
        function i(e) {
          r.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!r.has(e)) {
                  var n = t.get(e);
                  n && i(n);
                }
              }),
            n.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            r.has(e.name) || i(e);
          }),
          n
        );
      }
      var ir = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function ar() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function sr(e) {
        void 0 === e && (e = {});
        var t = e,
          r = t.defaultModifiers,
          n = void 0 === r ? [] : r,
          i = t.defaultOptions,
          a = void 0 === i ? ir : i;
        return function (e, t, r) {
          void 0 === r && (r = a);
          var i,
            s,
            o = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, ir, a),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            u = {
              state: o,
              setOptions: function (r) {
                var i = "function" == typeof r ? r(o.options) : r;
                d(),
                  (o.options = Object.assign({}, a, o.options, i)),
                  (o.scrollParents = {
                    reference: lt(e)
                      ? qt(e)
                      : e.contextElement
                      ? qt(e.contextElement)
                      : [],
                    popper: qt(t),
                  });
                var s,
                  c,
                  f = (function (e) {
                    var t = nr(e);
                    return it.reduce(function (e, r) {
                      return e.concat(
                        t.filter(function (e) {
                          return e.phase === r;
                        }),
                      );
                    }, []);
                  })(
                    ((s = [].concat(n, o.options.modifiers)),
                    (c = s.reduce(function (e, t) {
                      var r = e[t.name];
                      return (
                        (e[t.name] = r
                          ? Object.assign({}, r, t, {
                              options: Object.assign({}, r.options, t.options),
                              data: Object.assign({}, r.data, t.data),
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
                  (o.orderedModifiers = f.filter(function (e) {
                    return e.enabled;
                  })),
                  o.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      r = e.options,
                      n = void 0 === r ? {} : r,
                      i = e.effect;
                    if ("function" == typeof i) {
                      var a = i({ state: o, name: t, instance: u, options: n }),
                        s = function () {};
                      l.push(a || s);
                    }
                  }),
                  u.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = o.elements,
                    t = e.reference,
                    r = e.popper;
                  if (ar(t, r)) {
                    (o.rects = {
                      reference: rr(t, St(r), "fixed" === o.options.strategy),
                      popper: gt(r),
                    }),
                      (o.reset = !1),
                      (o.placement = o.options.placement),
                      o.orderedModifiers.forEach(function (e) {
                        return (o.modifiersData[e.name] = Object.assign(
                          {},
                          e.data,
                        ));
                      });
                    for (var n = 0; n < o.orderedModifiers.length; n++)
                      if (!0 !== o.reset) {
                        var i = o.orderedModifiers[n],
                          a = i.fn,
                          s = i.options,
                          l = void 0 === s ? {} : s,
                          d = i.name;
                        "function" == typeof a &&
                          (o =
                            a({ state: o, options: l, name: d, instance: u }) ||
                            o);
                      } else (o.reset = !1), (n = -1);
                  }
                }
              },
              update:
                ((i = function () {
                  return new Promise(function (e) {
                    u.forceUpdate(), e(o);
                  });
                }),
                function () {
                  return (
                    s ||
                      (s = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (s = void 0), e(i());
                        });
                      })),
                    s
                  );
                }),
              destroy: function () {
                d(), (c = !0);
              },
            };
          if (!ar(e, t)) return u;
          function d() {
            l.forEach(function (e) {
              return e();
            }),
              (l = []);
          }
          return (
            u.setOptions(r).then(function (e) {
              !c && r.onFirstUpdate && r.onFirstUpdate(e);
            }),
            u
          );
        };
      }
      var or = sr({
          defaultModifiers: [
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  r = e.name,
                  n = t.rects.reference,
                  i = t.rects.popper,
                  a = t.modifiersData.preventOverflow,
                  s = Yt(t, { elementContext: "reference" }),
                  o = Yt(t, { altBoundary: !0 }),
                  l = Jt(s, n),
                  c = Jt(o, i, a),
                  u = Qt(l),
                  d = Qt(c);
                (t.modifiersData[r] = {
                  referenceClippingOffsets: l,
                  popperEscapeOffsets: c,
                  isReferenceHidden: u,
                  hasPopperEscaped: d,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": u,
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
                  r = e.name;
                t.modifiersData[r] = Vt({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            kt,
            Wt,
            er,
            $t,
            tr,
            Dt,
          ],
        }),
        lr = function (e) {
          return {
            position: e,
            top: "0",
            left: "0",
            opacity: "0",
            pointerEvents: "none",
          };
        },
        cr = { name: "applyStyles", enabled: !1 },
        ur = {
          name: "ariaDescribedBy",
          enabled: !0,
          phase: "afterWrite",
          effect: function (e) {
            var t = e.state;
            return function () {
              var e = t.elements,
                r = e.reference,
                n = e.popper;
              if ("removeAttribute" in r) {
                var i = (r.getAttribute("aria-describedby") || "")
                  .split(",")
                  .filter(function (e) {
                    return e.trim() !== n.id;
                  });
                i.length
                  ? r.setAttribute("aria-describedby", i.join(","))
                  : r.removeAttribute("aria-describedby");
              }
            };
          },
          fn: function (e) {
            var t,
              r = e.state.elements,
              n = r.popper,
              i = r.reference,
              a =
                null == (t = n.getAttribute("role")) ? void 0 : t.toLowerCase();
            if (n.id && "tooltip" === a && "setAttribute" in i) {
              var s = i.getAttribute("aria-describedby");
              if (s && -1 !== s.split(",").indexOf(n.id)) return;
              i.setAttribute("aria-describedby", s ? s + "," + n.id : n.id);
            }
          },
        },
        dr = [];
      const fr = function (e, t, r) {
        var n = void 0 === r ? {} : r,
          i = n.enabled,
          a = void 0 === i || i,
          s = n.placement,
          o = void 0 === s ? "bottom" : s,
          l = n.strategy,
          c = void 0 === l ? "absolute" : l,
          u = n.modifiers,
          f = void 0 === u ? dr : u,
          m = (0, g.Z)(n, ["enabled", "placement", "strategy", "modifiers"]),
          p = (0, d.useRef)(),
          h = (0, d.useCallback)(function () {
            var e;
            null == (e = p.current) || e.update();
          }, []),
          y = (0, d.useCallback)(function () {
            var e;
            null == (e = p.current) || e.forceUpdate();
          }, []),
          b = at(
            (0, d.useState)({
              placement: o,
              update: h,
              forceUpdate: y,
              attributes: {},
              styles: { popper: lr(c), arrow: {} },
            }),
          ),
          w = b[0],
          B = b[1],
          M = (0, d.useMemo)(
            function () {
              return {
                name: "updateStateModifier",
                enabled: !0,
                phase: "write",
                requires: ["computeStyles"],
                fn: function (e) {
                  var t = e.state,
                    r = {},
                    n = {};
                  Object.keys(t.elements).forEach(function (e) {
                    (r[e] = t.styles[e]), (n[e] = t.attributes[e]);
                  }),
                    B({
                      state: t,
                      styles: r,
                      attributes: n,
                      update: h,
                      forceUpdate: y,
                      placement: t.placement,
                    });
                },
              };
            },
            [h, y, B],
          );
        return (
          (0, d.useEffect)(
            function () {
              p.current &&
                a &&
                p.current.setOptions({
                  placement: o,
                  strategy: c,
                  modifiers: [].concat(f, [M, cr]),
                });
            },
            [c, o, M, a],
          ),
          (0, d.useEffect)(
            function () {
              if (a && null != e && null != t)
                return (
                  (p.current = or(
                    e,
                    t,
                    (0, v.Z)({}, m, {
                      placement: o,
                      strategy: c,
                      modifiers: [].concat(f, [ur, M]),
                    }),
                  )),
                  function () {
                    null != p.current &&
                      (p.current.destroy(),
                      (p.current = void 0),
                      B(function (e) {
                        return (0, v.Z)({}, e, {
                          attributes: {},
                          styles: { popper: lr(c) },
                        });
                      }));
                  }
                );
            },
            [a, e, t],
          ),
          w
        );
      };
      const mr = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var pr = !1,
        hr = !1;
      try {
        var yr = {
          get passive() {
            return (pr = !0);
          },
          get once() {
            return (hr = pr = !0);
          },
        };
        mr &&
          (window.addEventListener("test", yr, yr),
          window.removeEventListener("test", yr, !0));
      } catch (e) {}
      const gr = function (e, t, r, n) {
        if (n && "boolean" != typeof n && !hr) {
          var i = n.once,
            a = n.capture,
            s = r;
          !hr &&
            i &&
            ((s =
              r.__once ||
              function e(n) {
                this.removeEventListener(t, e, a), r.call(this, n);
              }),
            (r.__once = s)),
            e.addEventListener(t, s, pr ? n : a);
        }
        e.addEventListener(t, r, n);
      };
      const vr = function (e, t, r, n) {
        var i = n && "boolean" != typeof n ? n.capture : n;
        e.removeEventListener(t, r, i),
          r.__once && e.removeEventListener(t, r.__once, i);
      };
      const br = function (e, t, r, n) {
        return (
          gr(e, t, r, n),
          function () {
            vr(e, t, r, n);
          }
        );
      };
      const wr = function (e) {
        const t = (0, d.useRef)(e);
        return (
          (0, d.useEffect)(() => {
            t.current = e;
          }, [e]),
          t
        );
      };
      function Br(e) {
        const t = wr(e);
        return (0, d.useCallback)(
          function (...e) {
            return t.current && t.current(...e);
          },
          [t],
        );
      }
      var Mr = r(98758),
        _r = r.n(Mr);
      function zr(e) {
        return (e && e.ownerDocument) || document;
      }
      const Sr = function (e) {
        return zr(
          (function (e) {
            return e && "setState" in e
              ? Ne.findDOMNode(e)
              : null != e
              ? e
              : null;
          })(e),
        );
      };
      var Rr = function () {};
      var Or = function (e) {
        return e && ("current" in e ? e.current : e);
      };
      const Er = function (e, t, r) {
        var n = void 0 === r ? {} : r,
          i = n.disabled,
          a = n.clickTrigger,
          s = void 0 === a ? "click" : a,
          o = (0, d.useRef)(!1),
          l = t || Rr,
          c = (0, d.useCallback)(
            function (t) {
              var r,
                n,
                i,
                a,
                s = Or(e);
              _r()(
                !!s,
                "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node",
              ),
                (o.current = !(
                  s &&
                  ((a = t),
                  !(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey)) &&
                  (function (e) {
                    return 0 === e.button;
                  })(t) &&
                  ((n = s),
                  (i =
                    null !=
                    (r = null == t.composedPath ? void 0 : t.composedPath()[0])
                      ? r
                      : t.target),
                  !(n.contains
                    ? n.contains(i)
                    : n.compareDocumentPosition
                    ? n === i || 16 & n.compareDocumentPosition(i)
                    : void 0))
                ));
            },
            [e],
          ),
          u = Br(function (e) {
            o.current || l(e);
          }),
          f = Br(function (e) {
            27 === e.keyCode && l(e);
          });
        (0, d.useEffect)(
          function () {
            if (!i && null != e) {
              var t = window.event,
                r = Sr(Or(e)),
                n = br(r, s, c, !0),
                a = br(r, s, function (e) {
                  e !== t ? u(e) : (t = void 0);
                }),
                o = br(r, "keyup", function (e) {
                  e !== t ? f(e) : (t = void 0);
                }),
                l = [];
              return (
                "ontouchstart" in r.documentElement &&
                  (l = [].slice.call(r.body.children).map(function (e) {
                    return br(e, "mousemove", Rr);
                  })),
                function () {
                  n(),
                    a(),
                    o(),
                    l.forEach(function (e) {
                      return e();
                    });
                }
              );
            }
          },
          [e, i, s, c, u, f],
        );
      };
      var Fr = function (e) {
        var t;
        return "undefined" == typeof document
          ? null
          : null == e
          ? zr().body
          : ("function" == typeof e && (e = e()),
            e && "current" in e && (e = e.current),
            (null != (t = e) && t.nodeType && e) || null);
      };
      function Dr(e, t) {
        var r = (0, d.useState)(function () {
            return Fr(e);
          }),
          n = r[0],
          i = r[1];
        if (!n) {
          var a = Fr(e);
          a && i(a);
        }
        return (
          (0, d.useEffect)(
            function () {
              t && n && t(n);
            },
            [t, n],
          ),
          (0, d.useEffect)(
            function () {
              var t = Fr(e);
              t !== n && i(t);
            },
            [e, n],
          ),
          n
        );
      }
      function xr(e) {
        var t,
          r,
          n,
          i,
          a,
          s = e.enabled,
          o = e.enableEvents,
          l = e.placement,
          c = e.flip,
          u = e.offset,
          d = e.fixed,
          f = e.containerPadding,
          m = e.arrowElement,
          p = e.popperConfig,
          h = void 0 === p ? {} : p,
          y = (function (e) {
            var t = {};
            return Array.isArray(e)
              ? (null == e ||
                  e.forEach(function (e) {
                    t[e.name] = e;
                  }),
                t)
              : e || t;
          })(h.modifiers);
        return (0, v.Z)({}, h, {
          placement: l,
          enabled: s,
          strategy: d ? "fixed" : h.strategy,
          modifiers:
            ((a = (0, v.Z)({}, y, {
              eventListeners: { enabled: o },
              preventOverflow: (0, v.Z)({}, y.preventOverflow, {
                options: f
                  ? (0, v.Z)(
                      { padding: f },
                      null == (t = y.preventOverflow) ? void 0 : t.options,
                    )
                  : null == (r = y.preventOverflow)
                  ? void 0
                  : r.options,
              }),
              offset: {
                options: (0, v.Z)(
                  { offset: u },
                  null == (n = y.offset) ? void 0 : n.options,
                ),
              },
              arrow: (0, v.Z)({}, y.arrow, {
                enabled: !!m,
                options: (0, v.Z)(
                  {},
                  null == (i = y.arrow) ? void 0 : i.options,
                  { element: m },
                ),
              }),
              flip: (0, v.Z)({ enabled: !!c }, y.flip),
            })),
            void 0 === a && (a = {}),
            Array.isArray(a)
              ? a
              : Object.keys(a).map(function (e) {
                  return (a[e].name = e), a[e];
                })),
        });
      }
      var jr = d.forwardRef(function (e, t) {
        var r = e.flip,
          n = e.offset,
          i = e.placement,
          a = e.containerPadding,
          s = void 0 === a ? 5 : a,
          o = e.popperConfig,
          l = void 0 === o ? {} : o,
          c = e.transition,
          u = Ze(),
          f = u[0],
          m = u[1],
          p = Ze(),
          h = p[0],
          y = p[1],
          b = Ue(m, t),
          w = Dr(e.container),
          B = Dr(e.target),
          M = (0, d.useState)(!e.show),
          _ = M[0],
          z = M[1],
          S = fr(
            B,
            f,
            xr({
              placement: i,
              enableEvents: !!e.show,
              containerPadding: s || 5,
              flip: r,
              offset: n,
              arrowElement: h,
              popperConfig: l,
            }),
          ),
          R = S.styles,
          O = S.attributes,
          E = (0, g.Z)(S, ["styles", "attributes"]);
        e.show ? _ && z(!1) : e.transition || _ || z(!0);
        var F = e.show || (c && !_);
        if (
          (Er(f, e.onHide, {
            disabled: !e.rootClose || e.rootCloseDisabled,
            clickTrigger: e.rootCloseEvent,
          }),
          !F)
        )
          return null;
        var D = e.children(
          (0, v.Z)({}, E, {
            show: !!e.show,
            props: (0, v.Z)({}, O.popper, { style: R.popper, ref: b }),
            arrowProps: (0, v.Z)({}, O.arrow, { style: R.arrow, ref: y }),
          }),
        );
        if (c) {
          var x = e.onExit,
            j = e.onExiting,
            T = e.onEnter,
            k = e.onEntering,
            P = e.onEntered;
          D = d.createElement(
            c,
            {
              in: e.show,
              appear: !0,
              onExit: x,
              onExiting: j,
              onExited: function () {
                z(!0), e.onExited && e.onExited.apply(e, arguments);
              },
              onEnter: T,
              onEntering: k,
              onEntered: P,
            },
            D,
          );
        }
        return w ? Ne.createPortal(D, w) : null;
      });
      (jr.displayName = "Overlay"),
        (jr.propTypes = {
          show: z().bool,
          placement: z().oneOf(nt),
          target: z().any,
          container: z().any,
          flip: z().bool,
          children: z().func.isRequired,
          containerPadding: z().number,
          popperConfig: z().object,
          rootClose: z().bool,
          rootCloseEvent: z().oneOf(["click", "mousedown"]),
          rootCloseDisabled: z().bool,
          onHide: function (e) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              r[n - 1] = arguments[n];
            var i;
            return e.rootClose
              ? (i = z().func).isRequired.apply(i, [e].concat(r))
              : z().func.apply(z(), [e].concat(r));
          },
          transition: z().elementType,
          onEnter: z().func,
          onEntering: z().func,
          onEntered: z().func,
          onExit: z().func,
          onExiting: z().func,
          onExited: z().func,
        });
      const Tr = jr;
      var kr = r(39931);
      const Pr = function (e, t) {
        return (0, kr.Z)(e, t);
      };
      function Wr(e, t) {
        var r = Re(e);
        return r ? r.innerHeight : t ? e.clientHeight : De(e).height;
      }
      var Ar,
        Cr = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function Ir(e, t) {
        if (!Ar) {
          var r = document.body,
            n =
              r.matches ||
              r.matchesSelector ||
              r.webkitMatchesSelector ||
              r.mozMatchesSelector ||
              r.msMatchesSelector;
          Ar = function (e, t) {
            return n.call(e, t);
          };
        }
        return Ar(e, t);
      }
      function Nr(e, t, r) {
        e.closest && !r && e.closest(t);
        var n = e;
        do {
          if (Ir(n, t)) return n;
          n = n.parentElement;
        } while (n && n !== r && n.nodeType === document.ELEMENT_NODE);
        return null;
      }
      var Zr = !1,
        Lr = !1;
      try {
        var Ur = {
          get passive() {
            return (Zr = !0);
          },
          get once() {
            return (Lr = Zr = !0);
          },
        };
        Te &&
          (window.addEventListener("test", Ur, Ur),
          window.removeEventListener("test", Ur, !0));
      } catch (e) {}
      const Xr = function (e, t, r, n) {
        if (n && "boolean" != typeof n && !Lr) {
          var i = n.once,
            a = n.capture,
            s = r;
          !Lr &&
            i &&
            ((s =
              r.__once ||
              function e(n) {
                this.removeEventListener(t, e, a), r.call(this, n);
              }),
            (r.__once = s)),
            e.addEventListener(t, s, Zr ? n : a);
        }
        e.addEventListener(t, r, n);
      };
      const qr = function (e, t, r, n) {
        var i = n && "boolean" != typeof n ? n.capture : n;
        e.removeEventListener(t, r, i),
          r.__once && e.removeEventListener(t, r.__once, i);
      };
      const Hr = function (e, t, r, n) {
        return (
          Xr(e, t, r, n),
          function () {
            qr(e, t, r, n);
          }
        );
      };
      const Gr = function (e, t, r, n) {
        for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
          if (t(e[a], a, e)) return a;
        return -1;
      };
      var Kr = r(63361),
        Vr = Math.max;
      const Yr = function (e, t, r) {
        var n = null == e ? 0 : e.length;
        if (!n) return -1;
        var i = null == r ? 0 : pe(r);
        return i < 0 && (i = Vr(n + i, 0)), Gr(e, (0, Kr.Z)(t, 3), i);
      };
      var $r = Math.ceil,
        Jr = Math.max;
      const Qr = function (e, t, r, n) {
        for (var i = -1, a = Jr($r((t - e) / (r || 1)), 0), s = Array(a); a--; )
          (s[n ? a : ++i] = e), (e += r);
        return s;
      };
      const en = function (e) {
        return function (t, r, n) {
          return (
            n && "number" != typeof n && (0, ue.Z)(t, r, n) && (r = n = void 0),
            (t = me(t)),
            void 0 === r ? ((r = t), (t = 0)) : (r = me(r)),
            (n = void 0 === n ? (t < r ? 1 : -1) : me(n)),
            Qr(t, r, n, e)
          );
        };
      };
      const tn = en();
      var rn =
        Number.isNaN ||
        function (e) {
          return "number" == typeof e && e != e;
        };
      function nn(e, t) {
        if (e.length !== t.length) return !1;
        for (var r = 0; r < e.length; r++)
          if (((n = e[r]), (i = t[r]), !(n === i || (rn(n) && rn(i)))))
            return !1;
        var n, i;
        return !0;
      }
      function an(e, t) {
        void 0 === t && (t = nn);
        var r = null;
        function n() {
          for (var n = [], i = 0; i < arguments.length; i++)
            n[i] = arguments[i];
          if (r && r.lastThis === this && t(n, r.lastArgs)) return r.lastResult;
          var a = e.apply(this, n);
          return (r = { lastResult: a, lastArgs: n, lastThis: this }), a;
        }
        return (
          (n.clear = function () {
            r = null;
          }),
          n
        );
      }
      var sn = r(50491),
        on = r(22665),
        ln = r(29447),
        cn = r(1662),
        un = r(10339),
        dn = ln.Z ? ln.Z.isConcatSpreadable : void 0;
      const fn = function (e) {
        return (0, un.Z)(e) || (0, cn.Z)(e) || !!(dn && e && e[dn]);
      };
      const mn = function e(t, r, n, i, a) {
        var s = -1,
          o = t.length;
        for (n || (n = fn), a || (a = []); ++s < o; ) {
          var l = t[s];
          r > 0 && n(l)
            ? r > 1
              ? e(l, r - 1, n, i, a)
              : (0, on.Z)(a, l)
            : i || (a[a.length] = l);
        }
        return a;
      };
      var pn = r(57350),
        hn = r(8780),
        yn = r(76529);
      const gn = function (e, t) {
        var r = e.length;
        for (e.sort(t); r--; ) e[r] = e[r].value;
        return e;
      };
      var vn = r(22350),
        bn = r(71003);
      const wn = function (e, t) {
        if (e !== t) {
          var r = void 0 !== e,
            n = null === e,
            i = e == e,
            a = (0, bn.Z)(e),
            s = void 0 !== t,
            o = null === t,
            l = t == t,
            c = (0, bn.Z)(t);
          if (
            (!o && !c && !a && e > t) ||
            (a && s && l && !o && !c) ||
            (n && s && l) ||
            (!r && l) ||
            !i
          )
            return 1;
          if (
            (!n && !a && !c && e < t) ||
            (c && r && i && !n && !a) ||
            (o && r && i) ||
            (!s && i) ||
            !l
          )
            return -1;
        }
        return 0;
      };
      const Bn = function (e, t, r) {
        for (
          var n = -1,
            i = e.criteria,
            a = t.criteria,
            s = i.length,
            o = r.length;
          ++n < s;

        ) {
          var l = wn(i[n], a[n]);
          if (l) return n >= o ? l : l * ("desc" == r[n] ? -1 : 1);
        }
        return e.index - t.index;
      };
      var Mn = r(97652);
      const _n = function (e, t, r) {
        t = t.length
          ? (0, pn.Z)(t, function (e) {
              return (0, un.Z)(e)
                ? function (t) {
                    return (0, hn.Z)(t, 1 === e.length ? e[0] : e);
                  }
                : e;
            })
          : [Mn.Z];
        var n = -1;
        t = (0, pn.Z)(t, (0, vn.Z)(Kr.Z));
        var i = (0, yn.Z)(e, function (e, r, i) {
          return {
            criteria: (0, pn.Z)(t, function (t) {
              return t(e);
            }),
            index: ++n,
            value: e,
          };
        });
        return gn(i, function (e, t) {
          return Bn(e, t, r);
        });
      };
      var zn = r(6841);
      const Sn = (0, zn.Z)(function (e, t) {
        if (null == e) return [];
        var r = t.length;
        return (
          r > 1 && (0, ue.Z)(e, t[0], t[1])
            ? (t = [])
            : r > 2 && (0, ue.Z)(t[0], t[1], t[2]) && (t = [t[0]]),
          _n(e, mn(t, 1), [])
        );
      });
      var Rn;
      function On(e) {
        if (((!Rn && 0 !== Rn) || e) && Te) {
          var t = document.createElement("div");
          (t.style.position = "absolute"),
            (t.style.top = "-9999px"),
            (t.style.width = "50px"),
            (t.style.height = "50px"),
            (t.style.overflow = "scroll"),
            document.body.appendChild(t),
            (Rn = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return Rn;
      }
      function En(e, t) {
        var r = Re(e);
        return r ? r.innerWidth : t ? e.clientWidth : De(e).width;
      }
      var Fn = r(20281),
        Dn = r(78898),
        xn = r(38186),
        jn = r(45288);
      function Tn(e) {
        return (0, Fn.Z)(e) || (0, Dn.Z)(e) || (0, xn.Z)(e) || (0, jn.Z)();
      }
      function kn(e, t) {
        return e
          .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      var Pn = r(41682),
        Wn = r(35943),
        An = r(24018),
        Cn = r(65731),
        In = r(33806);
      const Nn = function (e, t) {
        return e && (0, Cn.Z)(t, (0, In.Z)(t), e);
      };
      var Zn = r(47429);
      const Ln = function (e, t) {
        return e && (0, Cn.Z)(t, (0, Zn.Z)(t), e);
      };
      var Un = r(14293),
        Xn = r(76740),
        qn = r(63128);
      const Hn = function (e, t) {
        return (0, Cn.Z)(e, (0, qn.Z)(e), t);
      };
      var Gn = r(12168),
        Kn = r(96169);
      const Vn = Object.getOwnPropertySymbols
        ? function (e) {
            for (var t = []; e; )
              (0, on.Z)(t, (0, qn.Z)(e)), (e = (0, Gn.Z)(e));
            return t;
          }
        : Kn.Z;
      const Yn = function (e, t) {
        return (0, Cn.Z)(e, Vn(e), t);
      };
      var $n = r(40204),
        Jn = r(47642);
      const Qn = function (e) {
        return (0, Jn.Z)(e, Zn.Z, Vn);
      };
      var ei = r(93101),
        ti = Object.prototype.hasOwnProperty;
      const ri = function (e) {
        var t = e.length,
          r = new e.constructor(t);
        return (
          t &&
            "string" == typeof e[0] &&
            ti.call(e, "index") &&
            ((r.index = e.index), (r.input = e.input)),
          r
        );
      };
      var ni = r(68372);
      const ii = function (e, t) {
        var r = t ? (0, ni.Z)(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength);
      };
      var ai = /\w*$/;
      const si = function (e) {
        var t = new e.constructor(e.source, ai.exec(e));
        return (t.lastIndex = e.lastIndex), t;
      };
      var oi = ln.Z ? ln.Z.prototype : void 0,
        li = oi ? oi.valueOf : void 0;
      const ci = function (e) {
        return li ? Object(li.call(e)) : {};
      };
      var ui = r(39994);
      const di = function (e, t, r) {
        var n = e.constructor;
        switch (t) {
          case "[object ArrayBuffer]":
            return (0, ni.Z)(e);
          case "[object Boolean]":
          case "[object Date]":
            return new n(+e);
          case "[object DataView]":
            return ii(e, r);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return (0, ui.Z)(e, r);
          case "[object Map]":
          case "[object Set]":
            return new n();
          case "[object Number]":
          case "[object String]":
            return new n(e);
          case "[object RegExp]":
            return si(e);
          case "[object Symbol]":
            return ci(e);
        }
      };
      var fi = r(5620),
        mi = r(73127),
        pi = r(97703);
      const hi = function (e) {
        return (0, pi.Z)(e) && "[object Map]" == (0, ei.Z)(e);
      };
      var yi = r(35656),
        gi = yi.Z && yi.Z.isMap;
      const vi = gi ? (0, vn.Z)(gi) : hi;
      var bi = r(78325);
      const wi = function (e) {
        return (0, pi.Z)(e) && "[object Set]" == (0, ei.Z)(e);
      };
      var Bi = yi.Z && yi.Z.isSet;
      const Mi = Bi ? (0, vn.Z)(Bi) : wi;
      var _i = "[object Arguments]",
        zi = "[object Function]",
        Si = "[object Object]",
        Ri = {};
      (Ri[_i] =
        Ri["[object Array]"] =
        Ri["[object ArrayBuffer]"] =
        Ri["[object DataView]"] =
        Ri["[object Boolean]"] =
        Ri["[object Date]"] =
        Ri["[object Float32Array]"] =
        Ri["[object Float64Array]"] =
        Ri["[object Int8Array]"] =
        Ri["[object Int16Array]"] =
        Ri["[object Int32Array]"] =
        Ri["[object Map]"] =
        Ri["[object Number]"] =
        Ri[Si] =
        Ri["[object RegExp]"] =
        Ri["[object Set]"] =
        Ri["[object String]"] =
        Ri["[object Symbol]"] =
        Ri["[object Uint8Array]"] =
        Ri["[object Uint8ClampedArray]"] =
        Ri["[object Uint16Array]"] =
        Ri["[object Uint32Array]"] =
          !0),
        (Ri["[object Error]"] = Ri[zi] = Ri["[object WeakMap]"] = !1);
      const Oi = function e(t, r, n, i, a, s) {
        var o,
          l = 1 & r,
          c = 2 & r,
          u = 4 & r;
        if ((n && (o = a ? n(t, i, a, s) : n(t)), void 0 !== o)) return o;
        if (!(0, bi.Z)(t)) return t;
        var d = (0, un.Z)(t);
        if (d) {
          if (((o = ri(t)), !l)) return (0, Xn.Z)(t, o);
        } else {
          var f = (0, ei.Z)(t),
            m = f == zi || "[object GeneratorFunction]" == f;
          if ((0, mi.Z)(t)) return (0, Un.Z)(t, l);
          if (f == Si || f == _i || (m && !a)) {
            if (((o = c || m ? {} : (0, fi.Z)(t)), !l))
              return c ? Yn(t, Ln(o, t)) : Hn(t, Nn(o, t));
          } else {
            if (!Ri[f]) return a ? t : {};
            o = di(t, f, l);
          }
        }
        s || (s = new Pn.Z());
        var p = s.get(t);
        if (p) return p;
        s.set(t, o),
          Mi(t)
            ? t.forEach(function (i) {
                o.add(e(i, r, n, i, t, s));
              })
            : vi(t) &&
              t.forEach(function (i, a) {
                o.set(a, e(i, r, n, a, t, s));
              });
        var h = u ? (c ? Qn : $n.Z) : c ? Zn.Z : In.Z,
          y = d ? void 0 : h(t);
        return (
          (0, Wn.Z)(y || t, function (i, a) {
            y && (i = t[(a = i)]), (0, An.Z)(o, a, e(i, r, n, a, t, s));
          }),
          o
        );
      };
      var Ei = r(82120);
      const Fi = function (e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0;
      };
      const Di = function (e, t) {
        return t.length < 2 ? e : (0, hn.Z)(e, ce(t, 0, -1));
      };
      var xi = r(79594);
      const ji = function (e, t) {
        return (
          (t = (0, Ei.Z)(t, e)),
          null == (e = Di(e, t)) || delete e[(0, xi.Z)(Fi(t))]
        );
      };
      var Ti = r(86445);
      const ki = function (e) {
        return (0, Ti.Z)(e) ? void 0 : e;
      };
      const Pi = function (e) {
        return (null == e ? 0 : e.length) ? mn(e, 1) : [];
      };
      var Wi = r(88597),
        Ai = r(89902);
      const Ci = (function (e) {
        return (0, Ai.Z)((0, Wi.Z)(e, void 0, Pi), e + "");
      })(function (e, t) {
        var r = {};
        if (null == e) return r;
        var n = !1;
        (t = (0, pn.Z)(t, function (t) {
          return (t = (0, Ei.Z)(t, e)), n || (n = t.length > 1), t;
        })),
          (0, Cn.Z)(e, Qn(e), r),
          n && (r = Oi(r, 7, ki));
        for (var i = t.length; i--; ) ji(r, t[i]);
        return r;
      });
      var Ii = r(35773),
        Ni = Object.prototype,
        Zi = Ni.hasOwnProperty;
      const Li = (0, zn.Z)(function (e, t) {
        e = Object(e);
        var r = -1,
          n = t.length,
          i = n > 2 ? t[2] : void 0;
        for (i && (0, ue.Z)(t[0], t[1], i) && (n = 1); ++r < n; )
          for (
            var a = t[r], s = (0, Zn.Z)(a), o = -1, l = s.length;
            ++o < l;

          ) {
            var c = s[o],
              u = e[c];
            (void 0 === u || ((0, Ii.Z)(u, Ni[c]) && !Zi.call(e, c))) &&
              (e[c] = a[c]);
          }
        return e;
      });
      var Ui = r(15156),
        Xi = r(3873),
        qi = r(43967),
        Hi = r(85812);
      const Gi = function (e, t, r) {
        var n = (0, un.Z)(e),
          i = n || (0, mi.Z)(e) || (0, Hi.Z)(e);
        if (((t = (0, Kr.Z)(t, 4)), null == r)) {
          var a = e && e.constructor;
          r = i
            ? n
              ? new a()
              : []
            : (0, bi.Z)(e) && (0, qi.Z)(a)
            ? (0, Ui.Z)((0, Gn.Z)(e))
            : {};
        }
        return (
          (i ? Wn.Z : Xi.Z)(e, function (e, n, i) {
            return t(r, e, n, i);
          }),
          r
        );
      };
      var Ki = r(70590);
      const Vi = function (e, t) {
        var r = {};
        return (
          (t = (0, Kr.Z)(t, 3)),
          (0, Xi.Z)(e, function (e, n, i) {
            (0, Ki.Z)(r, n, t(e, n, i));
          }),
          r
        );
      };
      r(74830), r(36657), r(87235), r(33159), r(33385), r(55181), r(81770);
      function Yi(e) {
        return e.children;
      }
      var $i = "PREV",
        Ji = "NEXT",
        Qi = "TODAY",
        ea = "DATE",
        ta = {
          MONTH: "month",
          WEEK: "week",
          WORK_WEEK: "work_week",
          DAY: "day",
          AGENDA: "agenda",
        },
        ra = Object.keys(ta).map(function (e) {
          return ta[e];
        });
      function na(e, t) {
        e && e.apply(null, [].concat(t));
      }
      z().oneOfType([z().string, z().func]),
        z().any,
        z().func,
        z().oneOfType([
          z().arrayOf(z().oneOf(ra)),
          z().objectOf(function (e, t) {
            if (-1 !== ra.indexOf(t) && "boolean" == typeof e[t]) return null;
            for (
              var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2;
              i < r;
              i++
            )
              n[i - 2] = arguments[i];
            return z().elementType.apply(z(), [e, t].concat(n));
          }),
        ]),
        z().oneOfType([z().oneOf(["overlap", "no-overlap"]), z().func]);
      var ia = { seconds: 1e3, minutes: 6e4, hours: 36e5, day: 864e5 };
      function aa(e, t) {
        var r = N(e, "month");
        return N(r, "week", t.startOfWeek());
      }
      function sa(e, t) {
        var r = Z(e, "month");
        return Z(r, "week", t.startOfWeek());
      }
      function oa(e, t) {
        for (var r = aa(e, t), n = sa(e, t), i = []; G(r, n, "day"); )
          i.push(r), (r = C(r, 1, "day"));
        return i;
      }
      function la(e, t) {
        var r = N(e, t);
        return L(r, e) ? r : C(r, 1, t);
      }
      function ca(e, t) {
        for (
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "day",
            n = e,
            i = [];
          G(n, t, r);

        )
          i.push(n), (n = C(n, 1, r));
        return i;
      }
      function ua(e, t) {
        return null == t && null == e
          ? null
          : (null == t && (t = new Date()),
            null == e && (e = new Date()),
            (e = N(e, "day")),
            (e = ee(e, ee(t))),
            (e = Q(e, Q(t))),
            (e = J(e, J(t))),
            $(e, $(t)));
      }
      function da(e) {
        return 0 === ee(e) && 0 === Q(e) && 0 === J(e) && 0 === $(e);
      }
      function fa(e, t, r) {
        return r && "milliseconds" !== r
          ? Math.round(Math.abs(+N(e, r) / ia[r] - +N(t, r) / ia[r]))
          : Math.abs(+e - +t);
      }
      var ma = z().oneOfType([z().string, z().func]);
      function pa(e, t, r, n, i) {
        var a = "function" == typeof n ? n(r, i, e) : t.call(e, r, n, i);
        return (
          m()(
            null == a || "string" == typeof a,
            "`localizer format(..)` must return a string, null, or undefined",
          ),
          a
        );
      }
      function ha(e, t, r) {
        return new Date(
          e.getFullYear(),
          e.getMonth(),
          e.getDate(),
          0,
          t + r,
          0,
          0,
        );
      }
      function ya(e, t) {
        return e.getTimezoneOffset() - t.getTimezoneOffset();
      }
      function ga(e, t) {
        return fa(e, t, "minutes") + ya(e, t);
      }
      function va(e) {
        var t = N(e, "day");
        return fa(t, e, "minutes") + ya(t, e);
      }
      function ba(e, t) {
        return H(e, t, "day");
      }
      function wa(e, t, r) {
        return L(e, t, "minutes") ? q(t, r, "minutes") : X(t, r, "minutes");
      }
      function Ba(e) {
        var t = e.evtA,
          r = t.start,
          n = t.end,
          i = t.allDay,
          a = e.evtB,
          s = a.start,
          o = a.end,
          l = a.allDay,
          c = +N(r, "day") - +N(s, "day"),
          u = fa(r, la(n, "day"), "day"),
          d = fa(s, la(o, "day"), "day");
        return (
          c ||
          Math.max(d, 1) - Math.max(u, 1) ||
          !!l - !!i ||
          +r - +s ||
          +n - +o
        );
      }
      function Ma(e) {
        var t = e.event,
          r = t.start,
          n = t.end,
          i = e.range,
          a = i.start,
          s = i.end,
          o = N(r, "day"),
          l = G(o, s, "day"),
          c = U(o, n, "minutes") ? X(n, a, "minutes") : q(n, a, "minutes");
        return l && c;
      }
      function _a(e, t) {
        return L(e, t, "day");
      }
      function za(e, t) {
        return da(e) && da(t);
      }
      var Sa = (0, o.Z)(function e(t) {
        var r = this;
        (0, s.Z)(this, e),
          m()(
            "function" == typeof t.format,
            "date localizer `format(..)` must be a function",
          ),
          m()(
            "function" == typeof t.firstOfWeek,
            "date localizer `firstOfWeek(..)` must be a function",
          ),
          (this.propType = t.propType || ma),
          (this.formats = t.formats),
          (this.format = function () {
            for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
              n[i] = arguments[i];
            return pa.apply(void 0, [r, t.format].concat(n));
          }),
          (this.startOfWeek = t.firstOfWeek),
          (this.merge = t.merge || ua),
          (this.inRange = t.inRange || Y),
          (this.lt = t.lt || H),
          (this.lte = t.lte || G),
          (this.gt = t.gt || X),
          (this.gte = t.gte || q),
          (this.eq = t.eq || L),
          (this.neq = t.neq || U),
          (this.startOf = t.startOf || N),
          (this.endOf = t.endOf || Z),
          (this.add = t.add || C),
          (this.range = t.range || ca),
          (this.diff = t.diff || fa),
          (this.ceil = t.ceil || la),
          (this.min = t.min || K),
          (this.max = t.max || V),
          (this.minutes = t.minutes || Q),
          (this.firstVisibleDay = t.firstVisibleDay || aa),
          (this.lastVisibleDay = t.lastVisibleDay || sa),
          (this.visibleDays = t.visibleDays || oa),
          (this.getSlotDate = t.getSlotDate || ha),
          (this.getTimezoneOffset =
            t.getTimezoneOffset ||
            function (e) {
              return e.getTimezoneOffset();
            }),
          (this.getDstOffset = t.getDstOffset || ya),
          (this.getTotalMin = t.getTotalMin || ga),
          (this.getMinutesFromMidnight = t.getMinutesFromMidnight || va),
          (this.continuesPrior = t.continuesPrior || ba),
          (this.continuesAfter = t.continuesAfter || wa),
          (this.sortEvents = t.sortEvents || Ba),
          (this.inEventRange = t.inEventRange || Ma),
          (this.isSameDate = t.isSameDate || _a),
          (this.startAndEndAreDateOnly = t.startAndEndAreDateOnly || za),
          (this.segmentOffset = t.browserTZOffset ? t.browserTZOffset() : 0);
      });
      function Ra(e, t, r, i) {
        var a = (0, n.Z)((0, n.Z)({}, e.formats), r);
        return (0, n.Z)(
          (0, n.Z)({}, e),
          {},
          {
            messages: i,
            startOfWeek: function () {
              return e.startOfWeek(t);
            },
            format: function (r, n) {
              return e.format(r, a[n] || n, t);
            },
          },
        );
      }
      var Oa = {
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
      var Ea = [
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
        Fa = (function (e) {
          (0, l.Z)(r, e);
          var t = (0, c.Z)(r);
          function r() {
            return (0, s.Z)(this, r), t.apply(this, arguments);
          }
          return (
            (0, o.Z)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.style,
                    r = e.className,
                    a = e.event,
                    s = e.selected,
                    o = e.isAllDay,
                    l = e.onSelect,
                    c = e.onDoubleClick,
                    u = e.onKeyPress,
                    f = e.localizer,
                    m = e.continuesPrior,
                    p = e.continuesAfter,
                    h = e.accessors,
                    y = e.getters,
                    g = e.children,
                    v = e.components,
                    b = v.event,
                    w = v.eventWrapper,
                    B = e.slotStart,
                    _ = e.slotEnd,
                    z = (0, i.Z)(e, Ea);
                  delete z.resizable;
                  var S = h.title(a),
                    R = h.tooltip(a),
                    O = h.end(a),
                    E = h.start(a),
                    F = h.allDay(a),
                    D = o || F || f.diff(E, f.ceil(O, "day"), "day") > 1,
                    x = y.eventProp(a, E, O, s),
                    j = d.createElement(
                      "div",
                      { className: "rbc-event-content", title: R || void 0 },
                      b
                        ? d.createElement(b, {
                            event: a,
                            continuesPrior: m,
                            continuesAfter: p,
                            title: S,
                            isAllDay: F,
                            localizer: f,
                            slotStart: B,
                            slotEnd: _,
                          })
                        : S,
                    );
                  return d.createElement(
                    w,
                    Object.assign({}, this.props, { type: "date" }),
                    d.createElement(
                      "div",
                      Object.assign({}, z, {
                        tabIndex: 0,
                        style: (0, n.Z)((0, n.Z)({}, x.style), t),
                        className: M("rbc-event", r, x.className, {
                          "rbc-selected": s,
                          "rbc-event-allday": D,
                          "rbc-event-continues-prior": m,
                          "rbc-event-continues-after": p,
                        }),
                        onClick: function (e) {
                          return l && l(a, e);
                        },
                        onDoubleClick: function (e) {
                          return c && c(a, e);
                        },
                        onKeyPress: function (e) {
                          return u && u(a, e);
                        },
                      }),
                      "function" == typeof g ? g(j) : j,
                    ),
                  );
                },
              },
            ]),
            r
          );
        })(d.Component);
      function Da(e, t) {
        return !(!e || null == t) && Pr(e, t);
      }
      function xa(e, t) {
        return (e.right - e.left) / t;
      }
      function ja(e, t, r, n) {
        var i = xa(e, n);
        return r
          ? n - 1 - Math.floor((t - e.left) / i)
          : Math.floor((t - e.left) / i);
      }
      function Ta(e) {
        var t,
          r,
          n,
          i = e.containerRef,
          a = e.accessors,
          s = e.getters,
          o = e.selected,
          l = e.components,
          c = e.localizer,
          u = e.position,
          f = e.show,
          m = e.events,
          p = e.slotStart,
          h = e.slotEnd,
          y = e.onSelect,
          g = e.onDoubleClick,
          v = e.onKeyPress,
          b = e.handleDragStart,
          w = e.popperRef,
          B = e.target,
          M = e.offset;
        (r = (t = { ref: w, callback: f }).ref),
          (n = t.callback),
          (0, d.useEffect)(
            function () {
              var e = function (e) {
                r.current && !r.current.contains(e.target) && n();
              };
              return (
                document.addEventListener("mousedown", e),
                function () {
                  document.removeEventListener("mousedown", e);
                }
              );
            },
            [r, n],
          ),
          (0, d.useLayoutEffect)(
            function () {
              var e = (function (e) {
                  var t = e.target,
                    r = e.offset,
                    n = e.container,
                    i = e.box,
                    a = De(t),
                    s = a.top,
                    o = a.left,
                    l = a.width,
                    c = a.height,
                    u = De(n),
                    d = u.top,
                    f = u.left,
                    m = u.width,
                    p = u.height,
                    h = De(i),
                    y = h.width,
                    g = h.height,
                    v = d + p,
                    b = f + m,
                    w = s + g,
                    B = o + y,
                    M = r.x,
                    _ = r.y;
                  return {
                    topOffset: w > v ? s - g - _ : s + _ + c,
                    leftOffset: B > b ? o + M - y + l : o + M,
                  };
                })({
                  target: B,
                  offset: M,
                  container: i.current,
                  box: w.current,
                }),
                t = e.topOffset,
                r = e.leftOffset;
              (w.current.style.top = "".concat(t, "px")),
                (w.current.style.left = "".concat(r, "px"));
            },
            [M.x, M.y, B],
          );
        var _ = u.width,
          z = { minWidth: _ + _ / 2 };
        return d.createElement(
          "div",
          { style: z, className: "rbc-overlay", ref: w },
          d.createElement(
            "div",
            { className: "rbc-overlay-header" },
            c.format(p, "dayHeaderFormat"),
          ),
          m.map(function (e, t) {
            return d.createElement(Fa, {
              key: t,
              type: "popup",
              localizer: c,
              event: e,
              getters: s,
              onSelect: y,
              accessors: a,
              components: l,
              onDoubleClick: g,
              onKeyPress: v,
              continuesPrior: c.lt(a.end(e), p, "day"),
              continuesAfter: c.gte(a.start(e), h, "day"),
              slotStart: p,
              slotEnd: h,
              selected: Da(e, o),
              draggable: !0,
              onDragStart: function () {
                return b(e);
              },
              onDragEnd: function () {
                return f();
              },
            });
          }),
        );
      }
      var ka = d.forwardRef(function (e, t) {
        return d.createElement(Ta, Object.assign({}, e, { popperRef: t }));
      });
      function Pa(e) {
        var t = e.containerRef,
          r = e.popupOffset,
          n = void 0 === r ? 5 : r,
          i = e.overlay,
          a = e.accessors,
          s = e.localizer,
          o = e.components,
          l = e.getters,
          c = e.selected,
          u = e.handleSelectEvent,
          f = e.handleDoubleClickEvent,
          m = e.handleKeyPressEvent,
          p = e.handleDragStart,
          h = e.onHide,
          y = e.overlayDisplay,
          g = (0, d.useRef)(null);
        if (!i.position) return null;
        var v = n;
        isNaN(n) || (v = { x: n, y: n });
        var b = i.position,
          w = i.events,
          B = i.date,
          M = i.end;
        return d.createElement(
          Tr,
          {
            rootClose: !0,
            flip: !0,
            show: !0,
            placement: "bottom",
            onHide: h,
            target: i.target,
          },
          function (e) {
            var r = e.props;
            return d.createElement(
              ka,
              Object.assign({}, r, {
                containerRef: t,
                ref: g,
                target: i.target,
                offset: v,
                accessors: a,
                getters: l,
                selected: c,
                components: o,
                localizer: s,
                position: b,
                show: y,
                events: w,
                slotStart: B,
                slotEnd: M,
                onSelect: u,
                onDoubleClick: f,
                onKeyPress: m,
                handleDragStart: p,
              }),
            );
          },
        );
      }
      ka.propTypes = {
        accessors: z().object.isRequired,
        getters: z().object.isRequired,
        selected: z().object,
        components: z().object.isRequired,
        localizer: z().object.isRequired,
        position: z().object.isRequired,
        show: z().func.isRequired,
        events: z().array.isRequired,
        slotStart: z().instanceOf(Date).isRequired,
        slotEnd: z().instanceOf(Date),
        onSelect: z().func,
        onDoubleClick: z().func,
        onKeyPress: z().func,
        handleDragStart: z().func,
        style: z().object,
        offset: z().shape({ x: z().number, y: z().number }),
      };
      var Wa = d.forwardRef(function (e, t) {
        return d.createElement(Pa, Object.assign({}, e, { containerRef: t }));
      });
      function Aa(e, t) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : document;
        return Hr(r, e, t, { passive: !1 });
      }
      function Ca(e, t) {
        return !!(function (e, t) {
          var r = t.clientX,
            n = t.clientY;
          return Nr(document.elementFromPoint(r, n), ".rbc-event", e);
        })(e, t);
      }
      function Ia(e, t) {
        return !!(function (e, t) {
          var r = t.clientX,
            n = t.clientY;
          return Nr(document.elementFromPoint(r, n), ".rbc-show-more", e);
        })(e, t);
      }
      function Na(e) {
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
      Wa.propTypes = {
        popupOffset: z().oneOfType([
          z().number,
          z().shape({ x: z().number, y: z().number }),
        ]),
        overlay: z().shape({
          position: z().object,
          events: z().array,
          date: z().instanceOf(Date),
          end: z().instanceOf(Date),
        }),
        accessors: z().object.isRequired,
        localizer: z().object.isRequired,
        components: z().object.isRequired,
        getters: z().object.isRequired,
        selected: z().object,
        handleSelectEvent: z().func,
        handleDoubleClickEvent: z().func,
        handleKeyPressEvent: z().func,
        handleDragStart: z().func,
        onHide: z().func,
        overlayDisplay: z().func,
      };
      var Za = (function () {
        function e(t) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = r.global,
            i = void 0 !== n && n,
            a = r.longPressThreshold,
            o = void 0 === a ? 250 : a,
            l = r.validContainers,
            c = void 0 === l ? [] : l;
          (0, s.Z)(this, e),
            (this.isDetached = !1),
            (this.container = t),
            (this.globalMouse = !t || i),
            (this.longPressThreshold = o),
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
            (this._removeTouchMoveWindowListener = Aa(
              "touchmove",
              function () {},
              window,
            )),
            (this._removeKeyDownListener = Aa("keydown", this._keyListener)),
            (this._removeKeyUpListener = Aa("keyup", this._keyListener)),
            (this._removeDropFromOutsideListener = Aa(
              "drop",
              this._dropFromOutsideListener,
            )),
            (this._removeDragOverFromOutsideListener = Aa(
              "dragover",
              this._dragOverFromOutsideListener,
            )),
            this._addInitialEventListener();
        }
        return (
          (0, o.Z)(e, [
            {
              key: "on",
              value: function (e, t) {
                var r = this._listeners[e] || (this._listeners[e] = []);
                return (
                  r.push(t),
                  {
                    remove: function () {
                      var e = r.indexOf(t);
                      -1 !== e && r.splice(e, 1);
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
                    r = new Array(t > 1 ? t - 1 : 0),
                    n = 1;
                  n < t;
                  n++
                )
                  r[n - 1] = arguments[n];
                var i;
                return (
                  (this._listeners[e] || []).forEach(function (e) {
                    void 0 === i && (i = e.apply(void 0, r));
                  }),
                  i
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
                return !(!t || !this.selecting) && La(t, Ua(e));
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
                var r = this,
                  n = null,
                  i = null,
                  a = null,
                  s = function (t) {
                    (n = setTimeout(function () {
                      l(), e(t);
                    }, r.longPressThreshold)),
                      (i = Aa("touchmove", function () {
                        return l();
                      })),
                      (a = Aa("touchend", function () {
                        return l();
                      }));
                  },
                  o = Aa("touchstart", s),
                  l = function () {
                    n && clearTimeout(n),
                      i && i(),
                      a && a(),
                      (n = null),
                      (i = null),
                      (a = null);
                  };
                return (
                  t && s(t),
                  function () {
                    l(), o();
                  }
                );
              },
            },
            {
              key: "_addInitialEventListener",
              value: function () {
                var e = this,
                  t = Aa("mousedown", function (t) {
                    e._removeInitialEventListener(),
                      e._handleInitialEvent(t),
                      (e._removeInitialEventListener = Aa(
                        "mousedown",
                        e._handleInitialEvent,
                      ));
                  }),
                  r = Aa("touchstart", function (t) {
                    e._removeInitialEventListener(),
                      (e._removeInitialEventListener = e._addLongPressListener(
                        e._handleInitialEvent,
                        t,
                      ));
                  });
                this._removeInitialEventListener = function () {
                  t(), r();
                };
              },
            },
            {
              key: "_dropFromOutsideListener",
              value: function (e) {
                var t = Na(e),
                  r = t.pageX,
                  n = t.pageY,
                  i = t.clientX,
                  a = t.clientY;
                this.emit("dropFromOutside", {
                  x: r,
                  y: n,
                  clientX: i,
                  clientY: a,
                }),
                  e.preventDefault();
              },
            },
            {
              key: "_dragOverFromOutsideListener",
              value: function (e) {
                var t = Na(e),
                  r = t.pageX,
                  n = t.pageY,
                  i = t.clientX,
                  a = t.clientY;
                this.emit("dragOverFromOutside", {
                  x: r,
                  y: n,
                  clientX: i,
                  clientY: a,
                }),
                  e.preventDefault();
              },
            },
            {
              key: "_handleInitialEvent",
              value: function (e) {
                if (!this.isDetached) {
                  var t,
                    r = Na(e),
                    n = r.clientX,
                    i = r.clientY,
                    s = r.pageX,
                    o = r.pageY,
                    l = this.container();
                  if (
                    3 !== e.which &&
                    2 !== e.button &&
                    ((u = n),
                    (d = i),
                    !(c = l) || Se(c, document.elementFromPoint(u, d)))
                  ) {
                    var c, u, d;
                    if (!this.globalMouse && l && !Se(l, e.target)) {
                      var f = (function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0;
                          "object" !== (0, a.Z)(e) &&
                            (e = { top: e, left: e, right: e, bottom: e });
                          return e;
                        })(0),
                        m = f.top,
                        p = f.left,
                        h = f.bottom,
                        y = f.right;
                      if (
                        !La(
                          {
                            top: (t = Ua(l)).top - m,
                            left: t.left - p,
                            bottom: t.bottom + h,
                            right: t.right + y,
                          },
                          { top: o, left: s },
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
                          x: s,
                          y: o,
                          clientX: n,
                          clientY: i,
                        }),
                      )
                    )
                      switch (e.type) {
                        case "mousedown":
                          (this._removeEndListener = Aa(
                            "mouseup",
                            this._handleTerminatingEvent,
                          )),
                            (this._onEscListener = Aa(
                              "keydown",
                              this._handleTerminatingEvent,
                            )),
                            (this._removeMoveListener = Aa(
                              "mousemove",
                              this._handleMoveEvent,
                            ));
                          break;
                        case "touchstart":
                          this._handleMoveEvent(e),
                            (this._removeEndListener = Aa(
                              "touchend",
                              this._handleTerminatingEvent,
                            )),
                            (this._removeMoveListener = Aa(
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
                  r = this.validContainers;
                return (
                  !(r && r.length && t) ||
                  r.some(function (e) {
                    return !!t.closest(e);
                  })
                );
              },
            },
            {
              key: "_handleTerminatingEvent",
              value: function (e) {
                var t = Na(e),
                  r = t.pageX,
                  n = t.pageY;
                if (
                  ((this.selecting = !1),
                  this._removeEndListener && this._removeEndListener(),
                  this._removeMoveListener && this._removeMoveListener(),
                  this._initialEventData)
                ) {
                  var i = !this.container || Se(this.container(), e.target),
                    a = this._isWithinValidContainer(e),
                    s = this._selectRect,
                    o = this.isClick(r, n);
                  return (
                    (this._initialEventData = null),
                    "Escape" !== e.key && a
                      ? o && i
                        ? this._handleClickEvent(e)
                        : o
                        ? this.emit("reset")
                        : this.emit("select", s)
                      : this.emit("reset")
                  );
                }
              },
            },
            {
              key: "_handleClickEvent",
              value: function (e) {
                var t = Na(e),
                  r = t.pageX,
                  n = t.pageY,
                  i = t.clientX,
                  a = t.clientY,
                  s = new Date().getTime();
                return this._lastClickData &&
                  s - this._lastClickData.timestamp < 250
                  ? ((this._lastClickData = null),
                    this.emit("doubleClick", {
                      x: r,
                      y: n,
                      clientX: i,
                      clientY: a,
                    }))
                  : ((this._lastClickData = { timestamp: s }),
                    this.emit("click", { x: r, y: n, clientX: i, clientY: a }));
              },
            },
            {
              key: "_handleMoveEvent",
              value: function (e) {
                if (null !== this._initialEventData && !this.isDetached) {
                  var t = this._initialEventData,
                    r = t.x,
                    n = t.y,
                    i = Na(e),
                    a = i.pageX,
                    s = i.pageY,
                    o = Math.abs(r - a),
                    l = Math.abs(n - s),
                    c = Math.min(a, r),
                    u = Math.min(s, n),
                    d = this.selecting;
                  (!this.isClick(a, s) || d || o || l) &&
                    ((this.selecting = !0),
                    (this._selectRect = {
                      top: u,
                      left: c,
                      x: a,
                      y: s,
                      right: c + o,
                      bottom: u + l,
                    }),
                    d || this.emit("selectStart", this._initialEventData),
                    this.isClick(a, s) ||
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
                var r = this._initialEventData,
                  n = r.x,
                  i = r.y;
                return (
                  !r.isTouch && Math.abs(e - n) <= 5 && Math.abs(t - i) <= 5
                );
              },
            },
          ]),
          e
        );
      })();
      function La(e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          n = Ua(e),
          i = n.top,
          a = n.left,
          s = n.right,
          o = void 0 === s ? a : s,
          l = n.bottom,
          c = void 0 === l ? i : l,
          u = Ua(t),
          d = u.top,
          f = u.left,
          m = u.right,
          p = void 0 === m ? f : m,
          h = u.bottom;
        return !(
          c - r < d ||
          i + r > (void 0 === h ? d : h) ||
          o - r < f ||
          a + r > p
        );
      }
      function Ua(e) {
        if (!e.getBoundingClientRect) return e;
        var t = e.getBoundingClientRect(),
          r = t.left + Xa("left"),
          n = t.top + Xa("top");
        return {
          top: n,
          left: r,
          right: (e.offsetWidth || 0) + r,
          bottom: (e.offsetHeight || 0) + n,
        };
      }
      function Xa(e) {
        return "left" === e
          ? window.pageXOffset || document.body.scrollLeft || 0
          : "top" === e
          ? window.pageYOffset || document.body.scrollTop || 0
          : void 0;
      }
      var qa = (function (e) {
          (0, l.Z)(r, e);
          var t = (0, c.Z)(r);
          function r(e, n) {
            var i;
            return (
              (0, s.Z)(this, r),
              ((i = t.call(this, e, n)).state = { selecting: !1 }),
              (i.containerRef = (0, d.createRef)()),
              i
            );
          }
          return (
            (0, o.Z)(r, [
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
                    r = e.getNow,
                    n = e.getters,
                    i = e.date,
                    a = e.components.dateCellWrapper,
                    s = e.localizer,
                    o = this.state,
                    l = o.selecting,
                    c = o.startIdx,
                    u = o.endIdx,
                    f = r();
                  return d.createElement(
                    "div",
                    { className: "rbc-row-bg", ref: this.containerRef },
                    t.map(function (e, r) {
                      var o = l && r >= c && r <= u,
                        m = n.dayProp(e),
                        p = m.className,
                        h = m.style;
                      return d.createElement(
                        a,
                        { key: r, value: e, range: t },
                        d.createElement("div", {
                          style: h,
                          className: M(
                            "rbc-day-bg",
                            p,
                            o && "rbc-selected-cell",
                            s.isSameDate(e, f) && "rbc-today",
                            i && s.neq(i, e, "month") && "rbc-off-range-bg",
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
                    r = (this._selector = new Za(this.props.container, {
                      longPressThreshold: this.props.longPressThreshold,
                    })),
                    i = function (r, n) {
                      if (!Ca(t, r) && !Ia(t, r)) {
                        var i = Ua(t),
                          a = e.props,
                          s = a.range,
                          o = a.rtl;
                        if (
                          ((c = i),
                          (d = (u = r).x),
                          (f = u.y) >= c.top &&
                            f <= c.bottom &&
                            d >= c.left &&
                            d <= c.right)
                        ) {
                          var l = ja(i, r.x, o, s.length);
                          e._selectSlot({
                            startIdx: l,
                            endIdx: l,
                            action: n,
                            box: r,
                          });
                        }
                      }
                      var c, u, d, f;
                      (e._initial = {}), e.setState({ selecting: !1 });
                    };
                  r.on("selecting", function (n) {
                    var i = e.props,
                      a = i.range,
                      s = i.rtl,
                      o = -1,
                      l = -1;
                    if (
                      (e.state.selecting ||
                        (na(e.props.onSelectStart, [n]),
                        (e._initial = { x: n.x, y: n.y })),
                      r.isSelected(t))
                    ) {
                      var c = Ua(t),
                        u = (function (e, t, r, n, i) {
                          var a = -1,
                            s = -1,
                            o = n - 1,
                            l = xa(t, n),
                            c = ja(t, r.x, i, n),
                            u = t.top < r.y && t.bottom > r.y,
                            d = t.top < e.y && t.bottom > e.y,
                            f = e.y > t.bottom,
                            m = t.top > e.y;
                          return (
                            r.top < t.top &&
                              r.bottom > t.bottom &&
                              ((a = 0), (s = o)),
                            u &&
                              (m
                                ? ((a = 0), (s = c))
                                : f && ((a = c), (s = o))),
                            d &&
                              ((a = s =
                                i
                                  ? o - Math.floor((e.x - t.left) / l)
                                  : Math.floor((e.x - t.left) / l)),
                              u
                                ? c < a
                                  ? (a = c)
                                  : (s = c)
                                : e.y < r.y
                                ? (s = o)
                                : (a = 0)),
                            { startIdx: a, endIdx: s }
                          );
                        })(e._initial, c, n, a.length, s);
                      (o = u.startIdx), (l = u.endIdx);
                    }
                    e.setState({ selecting: !0, startIdx: o, endIdx: l });
                  }),
                    r.on("beforeSelect", function (t) {
                      if ("ignoreEvents" === e.props.selectable)
                        return !Ca(e.containerRef.current, t);
                    }),
                    r.on("click", function (e) {
                      return i(e, "click");
                    }),
                    r.on("doubleClick", function (e) {
                      return i(e, "doubleClick");
                    }),
                    r.on("select", function (t) {
                      e._selectSlot(
                        (0, n.Z)(
                          (0, n.Z)({}, e.state),
                          {},
                          { action: "select", bounds: t },
                        ),
                      ),
                        (e._initial = {}),
                        e.setState({ selecting: !1 }),
                        na(e.props.onSelectEnd, [e.state]);
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
                    r = e.startIdx,
                    n = e.action,
                    i = e.bounds,
                    a = e.box;
                  -1 !== t &&
                    -1 !== r &&
                    this.props.onSelectSlot &&
                    this.props.onSelectSlot({
                      start: r,
                      end: t,
                      action: n,
                      bounds: i,
                      box: a,
                      resourceId: this.props.resourceId,
                    });
                },
              },
            ]),
            r
          );
        })(d.Component),
        Ha =
          (z().object.isRequired,
          z().object,
          z().bool,
          z().object.isRequired,
          z().object.isRequired,
          z().object.isRequired,
          z().object.isRequired,
          z().func,
          z().func,
          z().func,
          { segments: [], selected: {} }),
        Ga = function (e, t) {
          var r = e.selected;
          e.isAllDay;
          var n = e.accessors,
            i = e.getters,
            a = e.onSelect,
            s = e.onDoubleClick,
            o = e.onKeyPress,
            l = e.localizer,
            c = e.slotMetrics,
            u = e.components,
            f = e.resizable,
            m = c.continuesPrior(t),
            p = c.continuesAfter(t);
          return d.createElement(Fa, {
            event: t,
            getters: i,
            localizer: l,
            accessors: n,
            components: u,
            onSelect: a,
            onDoubleClick: s,
            onKeyPress: o,
            continuesPrior: m,
            continuesAfter: p,
            slotStart: c.first,
            slotEnd: c.last,
            selected: Da(t, r),
            resizable: f,
          });
        },
        Ka = function (e, t, r) {
          var n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : " ",
            i = (Math.abs(t) / e) * 100 + "%";
          return d.createElement(
            "div",
            {
              key: r,
              className: "rbc-row-segment",
              style: { WebkitFlexBasis: i, flexBasis: i, maxWidth: i },
            },
            n,
          );
        },
        Va = (function (e) {
          (0, l.Z)(r, e);
          var t = (0, c.Z)(r);
          function r() {
            return (0, s.Z)(this, r), t.apply(this, arguments);
          }
          return (
            (0, o.Z)(r, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    r = t.segments,
                    n = t.slotMetrics.slots,
                    i = t.className,
                    a = 1;
                  return d.createElement(
                    "div",
                    { className: M(i, "rbc-row") },
                    r.reduce(function (t, r, i) {
                      var s = r.event,
                        o = r.left,
                        l = r.right,
                        c = r.span,
                        u = "_lvl_" + i,
                        d = o - a,
                        f = Ga(e.props, s);
                      return (
                        d && t.push(Ka(n, d, "".concat(u, "_gap"))),
                        t.push(Ka(n, c, u, f)),
                        (a = l + 1),
                        t
                      );
                    }, []),
                  );
                },
              },
            ]),
            r
          );
        })(d.Component);
      function Ya(e) {
        var t = e.dateRange,
          r = e.unit,
          n = void 0 === r ? "day" : r,
          i = e.localizer;
        return { first: t[0], last: i.add(t[t.length - 1], 1, n) };
      }
      function $a(e) {
        var t,
          r,
          n,
          i =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1 / 0,
          a = [],
          s = [];
        for (t = 0; t < e.length; t++) {
          for (n = e[t], r = 0; r < a.length && Qa(n, a[r]); r++);
          r >= i ? s.push(n) : (a[r] || (a[r] = [])).push(n);
        }
        for (t = 0; t < a.length; t++)
          a[t].sort(function (e, t) {
            return e.left - t.left;
          });
        return { levels: a, extra: s };
      }
      function Ja(e, t, r, n, i) {
        var a = { start: n.start(e), end: n.end(e) },
          s = { start: t, end: r };
        return i.inEventRange({ event: a, range: s });
      }
      function Qa(e, t) {
        return t.some(function (t) {
          return t.left <= e.right && t.right >= e.left;
        });
      }
      function es(e, t, r, n) {
        var i = { start: r.start(e), end: r.end(e), allDay: r.allDay(e) },
          a = { start: r.start(t), end: r.end(t), allDay: r.allDay(t) };
        return n.sortEvents({ evtA: i, evtB: a });
      }
      Va.defaultProps = (0, n.Z)({}, Ha);
      var ts = function (e, t) {
          return e.left <= t && e.right >= t;
        },
        rs = function (e, t) {
          return e.filter(function (e) {
            return ts(e, t);
          }).length;
        },
        ns = (function (e) {
          (0, l.Z)(r, e);
          var t = (0, c.Z)(r);
          function r() {
            return (0, s.Z)(this, r), t.apply(this, arguments);
          }
          return (
            (0, o.Z)(r, [
              {
                key: "render",
                value: function () {
                  for (
                    var e = this.props,
                      t = e.segments,
                      r = e.slotMetrics.slots,
                      n = $a(t).levels[0],
                      i = 1,
                      a = 1,
                      s = [];
                    i <= r;

                  ) {
                    var o = "_lvl_" + i,
                      l =
                        n.filter(function (e) {
                          return ts(e, i);
                        })[0] || {},
                      c = l.event,
                      u = l.left,
                      f = l.right,
                      m = l.span;
                    if (c) {
                      var p = Math.max(0, u - a);
                      if (this.canRenderSlotEvent(u, m)) {
                        var h = Ga(this.props, c);
                        p && s.push(Ka(r, p, o + "_gap")),
                          s.push(Ka(r, m, o, h)),
                          (a = i = f + 1);
                      } else
                        p && s.push(Ka(r, p, o + "_gap")),
                          s.push(Ka(r, 1, o, this.renderShowMore(t, i))),
                          (a = i += 1);
                    } else i++;
                  }
                  return d.createElement("div", { className: "rbc-row" }, s);
                },
              },
              {
                key: "canRenderSlotEvent",
                value: function (e, t) {
                  var r = this.props.segments;
                  return tn(e, e + t).every(function (e) {
                    return 1 === rs(r, e);
                  });
                },
              },
              {
                key: "renderShowMore",
                value: function (e, t) {
                  var r = this,
                    n = this.props.localizer,
                    i = rs(e, t);
                  return (
                    !!i &&
                    d.createElement(
                      "button",
                      {
                        type: "button",
                        key: "sm_" + t,
                        className: M("rbc-button-link", "rbc-show-more"),
                        onClick: function (e) {
                          return r.showMore(t, e);
                        },
                      },
                      n.messages.showMore(i),
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
            r
          );
        })(d.Component);
      ns.defaultProps = (0, n.Z)({}, Ha);
      var is = function (e) {
          var t = e.children;
          return d.createElement(
            "div",
            { className: "rbc-row-content-scroll-container" },
            t,
          );
        },
        as = function (e, t) {
          return e[0].range === t[0].range && e[0].events === t[0].events;
        };
      function ss() {
        return an(function (e) {
          for (
            var t = e.range,
              r = e.events,
              i = e.maxRows,
              a = e.minRows,
              s = e.accessors,
              o = e.localizer,
              l = Ya({ dateRange: t, localizer: o }),
              c = l.first,
              u = l.last,
              d = r.map(function (e) {
                return (function (e, t, r, n) {
                  var i = Ya({ dateRange: t, localizer: n }),
                    a = i.first,
                    s = i.last,
                    o = n.diff(a, s, "day"),
                    l = n.max(n.startOf(r.start(e), "day"), a),
                    c = n.min(n.ceil(r.end(e), "day"), s),
                    u = Yr(t, function (e) {
                      return n.isSameDate(e, l);
                    }),
                    d = n.diff(l, c, "day");
                  return (
                    (d = Math.min(d, o)),
                    {
                      event: e,
                      span: (d = Math.max(d - n.segmentOffset, 1)),
                      left: u + 1,
                      right: Math.max(u + d, 1),
                    }
                  );
                })(e, t, s, o);
              }),
              f = $a(d, Math.max(i - 1, 1)),
              m = f.levels,
              p = f.extra,
              h = p.length > 0 ? a - 1 : a;
            m.length < h;

          )
            m.push([]);
          return {
            first: c,
            last: u,
            levels: m,
            extra: p,
            range: t,
            slots: t.length,
            clone: function (t) {
              return ss()((0, n.Z)((0, n.Z)({}, e), t));
            },
            getDateForSlot: function (e) {
              return t[e];
            },
            getSlotForDate: function (e) {
              return t.find(function (t) {
                return o.isSameDate(t, e);
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
              return o.continuesPrior(s.start(e), c);
            },
            continuesAfter: function (e) {
              var t = s.start(e),
                r = s.end(e);
              return o.continuesAfter(t, r, u);
            },
          };
        }, as);
      }
      var os = (function (e) {
        (0, l.Z)(r, e);
        var t = (0, c.Z)(r);
        function r() {
          var e;
          (0, s.Z)(this, r);
          for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
          return (
            ((e = t.call.apply(t, [this].concat(i))).handleSelectSlot =
              function (t) {
                var r = e.props,
                  n = r.range;
                (0, r.onSelectSlot)(n.slice(t.start, t.end + 1), t);
              }),
            (e.handleShowMore = function (t, r) {
              var n,
                i,
                a,
                s = e.props,
                o = s.range,
                l = s.onShowMore,
                c = e.slotMetrics(e.props),
                u = ((n = e.containerRef.current),
                (i = ".rbc-row-bg"),
                Cr(n.querySelectorAll(i)))[0];
              u && (a = u.children[t - 1]),
                l(c.getEventsForSlot(t), o[t - 1], a, t, r);
            }),
            (e.getContainer = function () {
              var t = e.props.container;
              return t ? t() : e.containerRef.current;
            }),
            (e.renderHeadingCell = function (t, r) {
              var n = e.props,
                i = n.renderHeader,
                a = n.getNow,
                s = n.localizer;
              return i({
                date: t,
                key: "header_".concat(r),
                className: M(
                  "rbc-date-cell",
                  s.isSameDate(t, a()) && "rbc-now",
                ),
              });
            }),
            (e.renderDummy = function () {
              var t = e.props,
                r = t.className,
                n = t.range,
                i = t.renderHeader,
                a = t.showAllEvents;
              return d.createElement(
                "div",
                { className: r, ref: e.containerRef },
                d.createElement(
                  "div",
                  {
                    className: M(
                      "rbc-row-content",
                      a && "rbc-row-content-scrollable",
                    ),
                  },
                  i &&
                    d.createElement(
                      "div",
                      { className: "rbc-row", ref: e.headingRowRef },
                      n.map(e.renderHeadingCell),
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
            (e.slotMetrics = ss()),
            e
          );
        }
        return (
          (0, o.Z)(r, [
            {
              key: "getRowLimit",
              value: function () {
                var e,
                  t = Wr(this.eventRowRef.current),
                  r =
                    null !== (e = this.headingRowRef) &&
                    void 0 !== e &&
                    e.current
                      ? Wr(this.headingRowRef.current)
                      : 0,
                  n = Wr(this.containerRef.current) - r;
                return Math.max(Math.floor(n / t), 1);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.date,
                  r = e.rtl,
                  n = e.range,
                  i = e.className,
                  a = e.selected,
                  s = e.selectable,
                  o = e.renderForMeasure,
                  l = e.accessors,
                  c = e.getters,
                  u = e.components,
                  f = e.getNow,
                  m = e.renderHeader,
                  p = e.onSelect,
                  h = e.localizer,
                  y = e.onSelectStart,
                  g = e.onSelectEnd,
                  v = e.onDoubleClick,
                  b = e.onKeyPress,
                  w = e.resourceId,
                  B = e.longPressThreshold,
                  _ = e.isAllDay,
                  z = e.resizable,
                  S = e.showAllEvents;
                if (o) return this.renderDummy();
                var R = this.slotMetrics(this.props),
                  O = R.levels,
                  E = R.extra,
                  F = S ? is : Yi,
                  D = u.weekWrapper,
                  x = {
                    selected: a,
                    accessors: l,
                    getters: c,
                    localizer: h,
                    components: u,
                    onSelect: p,
                    onDoubleClick: v,
                    onKeyPress: b,
                    resourceId: w,
                    slotMetrics: R,
                    resizable: z,
                  };
                return d.createElement(
                  "div",
                  { className: i, role: "rowgroup", ref: this.containerRef },
                  d.createElement(qa, {
                    localizer: h,
                    date: t,
                    getNow: f,
                    rtl: r,
                    range: n,
                    selectable: s,
                    container: this.getContainer,
                    getters: c,
                    onSelectStart: y,
                    onSelectEnd: g,
                    onSelectSlot: this.handleSelectSlot,
                    components: u,
                    longPressThreshold: B,
                    resourceId: w,
                  }),
                  d.createElement(
                    "div",
                    {
                      className: M(
                        "rbc-row-content",
                        S && "rbc-row-content-scrollable",
                      ),
                      role: "row",
                    },
                    m &&
                      d.createElement(
                        "div",
                        { className: "rbc-row ", ref: this.headingRowRef },
                        n.map(this.renderHeadingCell),
                      ),
                    d.createElement(
                      F,
                      null,
                      d.createElement(
                        D,
                        Object.assign({ isAllDay: _ }, x, {
                          rtl: this.props.rtl,
                        }),
                        O.map(function (e, t) {
                          return d.createElement(
                            Va,
                            Object.assign({ key: t, segments: e }, x),
                          );
                        }),
                        !!E.length &&
                          d.createElement(
                            ns,
                            Object.assign(
                              { segments: E, onShowMore: this.handleShowMore },
                              x,
                            ),
                          ),
                      ),
                    ),
                  ),
                );
              },
            },
          ]),
          r
        );
      })(d.Component);
      os.defaultProps = { minRows: 0, maxRows: 1 / 0 };
      var ls = function (e) {
          var t = e.label;
          return d.createElement(
            "span",
            { role: "columnheader", "aria-sort": "none" },
            t,
          );
        },
        cs = function (e) {
          var t = e.label,
            r = e.drilldownView,
            n = e.onDrillDown;
          return r
            ? d.createElement(
                "button",
                {
                  type: "button",
                  className: "rbc-button-link",
                  onClick: n,
                  role: "cell",
                },
                t,
              )
            : d.createElement("span", null, t);
        },
        us = ["date", "className"],
        ds = (function (e) {
          (0, l.Z)(r, e);
          var t = (0, c.Z)(r);
          function r() {
            var e;
            (0, s.Z)(this, r);
            for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
              a[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(a))).getContainer =
                function () {
                  return e.containerRef.current;
                }),
              (e.renderWeek = function (t, r) {
                var n = e.props,
                  i = n.events,
                  a = n.components,
                  s = n.selectable,
                  o = n.getNow,
                  l = n.selected,
                  c = n.date,
                  u = n.localizer,
                  f = n.longPressThreshold,
                  m = n.accessors,
                  p = n.getters,
                  h = n.showAllEvents,
                  y = e.state,
                  g = y.needLimitMeasure,
                  v = y.rowLimit,
                  b = (function (e, t, r, n, i) {
                    return e.filter(function (e) {
                      return Ja(e, t, r, n, i);
                    });
                  })((0, le.Z)(i), t[0], t[t.length - 1], m, u);
                return (
                  b.sort(function (e, t) {
                    return es(e, t, m, u);
                  }),
                  d.createElement(os, {
                    key: r,
                    ref: 0 === r ? e.slotRowRef : void 0,
                    container: e.getContainer,
                    className: "rbc-month-row",
                    getNow: o,
                    date: c,
                    range: t,
                    events: b,
                    maxRows: h ? 1 / 0 : v,
                    selected: l,
                    selectable: s,
                    components: a,
                    accessors: m,
                    getters: p,
                    localizer: u,
                    renderHeader: e.readerDateHeading,
                    renderForMeasure: g,
                    onShowMore: e.handleShowMore,
                    onSelect: e.handleSelectEvent,
                    onDoubleClick: e.handleDoubleClickEvent,
                    onKeyPress: e.handleKeyPressEvent,
                    onSelectSlot: e.handleSelectSlot,
                    longPressThreshold: f,
                    rtl: e.props.rtl,
                    resizable: e.props.resizable,
                    showAllEvents: h,
                  })
                );
              }),
              (e.readerDateHeading = function (t) {
                var r = t.date,
                  n = t.className,
                  a = (0, i.Z)(t, us),
                  s = e.props,
                  o = s.date,
                  l = s.getDrilldownView,
                  c = s.localizer,
                  u = c.neq(r, o, "month"),
                  f = c.isSameDate(r, o),
                  m = l(r),
                  p = c.format(r, "dateFormat"),
                  h = e.props.components.dateHeader || cs;
                return d.createElement(
                  "div",
                  Object.assign({}, a, {
                    className: M(n, u && "rbc-off-range", f && "rbc-current"),
                    role: "cell",
                  }),
                  d.createElement(h, {
                    label: p,
                    date: r,
                    drilldownView: m,
                    isOffRange: u,
                    onDrillDown: function (t) {
                      return e.handleHeadingClick(r, m, t);
                    },
                  }),
                );
              }),
              (e.handleSelectSlot = function (t, r) {
                (e._pendingSelection = e._pendingSelection.concat(t)),
                  clearTimeout(e._selectTimer),
                  (e._selectTimer = setTimeout(function () {
                    return e.selectDates(r);
                  }));
              }),
              (e.handleHeadingClick = function (t, r, n) {
                n.preventDefault(),
                  e.clearSelection(),
                  na(e.props.onDrillDown, [t, r]);
              }),
              (e.handleSelectEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, r = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n];
                na(e.props.onSelectEvent, r);
              }),
              (e.handleDoubleClickEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, r = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n];
                na(e.props.onDoubleClickEvent, r);
              }),
              (e.handleKeyPressEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, r = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n];
                na(e.props.onKeyPressEvent, r);
              }),
              (e.handleShowMore = function (t, r, n, i, a) {
                var s = e.props,
                  o = s.popup,
                  l = s.onDrillDown,
                  c = s.onShowMore,
                  u = s.getDrilldownView,
                  d = s.doShowMoreDrillDown;
                if ((e.clearSelection(), o)) {
                  var f = je(n, e.containerRef.current);
                  e.setState({
                    overlay: { date: r, events: t, position: f, target: a },
                  });
                } else d && na(l, [r, u(r) || ta.DAY]);
                na(c, [t, r, i]);
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
            (0, o.Z)(
              r,
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
                      r = e.localizer,
                      n = e.className,
                      i = r.visibleDays(t, r),
                      a = ge(i, 7);
                    return (
                      (this._weekCount = a.length),
                      d.createElement(
                        "div",
                        {
                          className: M("rbc-month-view", n),
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
                          this.renderHeaders(a[0]),
                        ),
                        a.map(this.renderWeek),
                        this.props.popup && this.renderOverlay(),
                      )
                    );
                  },
                },
                {
                  key: "renderHeaders",
                  value: function (e) {
                    var t = this.props,
                      r = t.localizer,
                      n = t.components,
                      i = e[0],
                      a = e[e.length - 1],
                      s = n.header || ls;
                    return r.range(i, a, "day").map(function (e, t) {
                      return d.createElement(
                        "div",
                        { key: "header_" + t, className: "rbc-header" },
                        d.createElement(s, {
                          date: e,
                          localizer: r,
                          label: r.format(e, "weekdayFormat"),
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
                      r = this,
                      n =
                        null !==
                          (e =
                            null === (t = this.state) || void 0 === t
                              ? void 0
                              : t.overlay) && void 0 !== e
                          ? e
                          : {},
                      i = this.props,
                      a = i.accessors,
                      s = i.localizer,
                      o = i.components,
                      l = i.getters,
                      c = i.selected,
                      u = i.popupOffset,
                      f = i.handleDragStart;
                    return d.createElement(Wa, {
                      overlay: n,
                      accessors: a,
                      localizer: s,
                      components: o,
                      getters: l,
                      selected: c,
                      popupOffset: u,
                      ref: this.containerRef,
                      handleKeyPressEvent: this.handleKeyPressEvent,
                      handleSelectEvent: this.handleSelectEvent,
                      handleDoubleClickEvent: this.handleDoubleClickEvent,
                      handleDragStart: f,
                      show: !!n.position,
                      overlayDisplay: this.overlayDisplay,
                      onHide: function () {
                        return r.setState({ overlay: null });
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
                    var r = new Date(t[0]),
                      n = new Date(t[t.length - 1]);
                    n.setDate(t[t.length - 1].getDate() + 1),
                      na(this.props.onSelectSlot, {
                        slots: t,
                        start: r,
                        end: n,
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
                    var r = e.date;
                    return {
                      date: r,
                      needLimitMeasure: e.localizer.neq(r, t.date, "month"),
                    };
                  },
                },
              ],
            ),
            r
          );
        })(d.Component);
      (ds.range = function (e, t) {
        var r = t.localizer;
        return { start: r.firstVisibleDay(e, r), end: r.lastVisibleDay(e, r) };
      }),
        (ds.navigate = function (e, t, r) {
          var n = r.localizer;
          switch (t) {
            case $i:
              return n.add(e, -1, "month");
            case Ji:
              return n.add(e, 1, "month");
            default:
              return e;
          }
        }),
        (ds.title = function (e, t) {
          return t.localizer.format(e, "monthHeaderFormat");
        });
      var fs = function (e) {
        var t = e.min,
          r = e.max,
          n = e.step,
          i = e.slots,
          a = e.localizer;
        return (
          "".concat(+a.startOf(t, "minutes")) +
          "".concat(+a.startOf(r, "minutes")) +
          "".concat(n, "-").concat(i)
        );
      };
      function ms(e) {
        for (
          var t = e.min,
            r = e.max,
            n = e.step,
            i = e.timeslots,
            a = e.localizer,
            s = fs({ start: t, end: r, step: n, timeslots: i, localizer: a }),
            o = 1 + a.getTotalMin(t, r),
            l = a.getMinutesFromMidnight(t),
            c = Math.ceil((o - 1) / (n * i)),
            u = c * i,
            d = new Array(c),
            f = new Array(u),
            m = 0;
          m < c;
          m++
        ) {
          d[m] = new Array(i);
          for (var p = 0; p < i; p++) {
            var h = m * i + p,
              y = h * n;
            f[h] = d[m][p] = a.getSlotDate(t, l, y);
          }
        }
        var g = f.length * n;
        function v(e) {
          var r = a.diff(t, e, "minutes") + a.getDstOffset(t, e);
          return Math.min(r, o);
        }
        return (
          f.push(a.getSlotDate(t, l, g)),
          {
            groups: d,
            update: function (e) {
              return fs(e) !== s ? ms(e) : this;
            },
            dateIsInGroup: function (e, t) {
              var n = d[t + 1];
              return a.inRange(e, d[t][0], n ? n[0] : r, "minutes");
            },
            nextSlot: function (e) {
              var t = f[Math.min(f.indexOf(e) + 1, f.length - 1)];
              return t === e && (t = a.add(e, n, "minutes")), t;
            },
            closestSlotToPosition: function (e) {
              var t = Math.min(f.length - 1, Math.max(0, Math.floor(e * u)));
              return f[t];
            },
            closestSlotFromPoint: function (e, t) {
              var r = Math.abs(t.top - t.bottom);
              return this.closestSlotToPosition((e.y - t.top) / r);
            },
            closestSlotFromDate: function (e) {
              var i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              if (a.lt(e, t, "minutes")) return f[0];
              if (a.gt(e, r, "minutes")) return f[f.length - 1];
              var s = a.diff(t, e, "minutes");
              return f[(s - (s % n)) / n + i];
            },
            startsBeforeDay: function (e) {
              return a.lt(e, t, "day");
            },
            startsAfterDay: function (e) {
              return a.gt(e, r, "day");
            },
            startsBefore: function (e) {
              return a.lt(a.merge(t, e), t, "minutes");
            },
            startsAfter: function (e) {
              return a.gt(a.merge(r, e), r, "minutes");
            },
            getRange: function (e, i, s, o) {
              s || (e = a.min(r, a.max(t, e))),
                o || (i = a.min(r, a.max(t, i)));
              var l = v(e),
                c = v(i),
                d =
                  c > n * u && !a.eq(r, i)
                    ? ((l - n) / (n * u)) * 100
                    : (l / (n * u)) * 100;
              return {
                top: d,
                height: (c / (n * u)) * 100 - d,
                start: v(e),
                startDate: e,
                end: v(i),
                endDate: i,
              };
            },
            getCurrentTimePosition: function (e) {
              return (v(e) / (n * u)) * 100;
            },
          }
        );
      }
      var ps = (function () {
        function e(t, r) {
          var n = r.accessors,
            i = r.slotMetrics;
          (0, s.Z)(this, e);
          var a = i.getRange(n.start(t), n.end(t)),
            o = a.start,
            l = a.startDate,
            c = a.end,
            u = a.endDate,
            d = a.top,
            f = a.height;
          (this.start = o),
            (this.end = c),
            (this.startMs = +l),
            (this.endMs = +u),
            (this.top = d),
            (this.height = f),
            (this.data = t);
        }
        return (
          (0, o.Z)(e, [
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
                var r = this.row.leaves;
                return r.indexOf(this) === r.length - 1 ? e : t;
              },
            },
            {
              key: "xOffset",
              get: function () {
                if (this.rows) return 0;
                if (this.leaves) return this.container._width;
                var e = this.row,
                  t = e.leaves,
                  r = e.xOffset,
                  n = e._width;
                return r + (t.indexOf(this) + 1) * n;
              },
            },
          ]),
          e
        );
      })();
      function hs(e, t, r) {
        return (
          Math.abs(t.start - e.start) < r ||
          (t.start > e.start && t.start < e.end)
        );
      }
      function ys(e) {
        for (
          var t = e.events,
            r = e.minimumStartDifference,
            n = e.slotMetrics,
            i = e.accessors,
            a = (function (e) {
              for (
                var t = Sn(e, [
                    "startMs",
                    function (e) {
                      return -e.endMs;
                    },
                  ]),
                  r = [];
                t.length > 0;

              ) {
                var n = t.shift();
                r.push(n);
                for (var i = 0; i < t.length; i++) {
                  var a = t[i];
                  if (!(n.endMs > a.startMs)) {
                    if (i > 0) {
                      var s = t.splice(i, 1)[0];
                      r.push(s);
                    }
                    break;
                  }
                }
              }
              return r;
            })(
              t.map(function (e) {
                return new ps(e, { slotMetrics: n, accessors: i });
              }),
            ),
            s = [],
            o = function () {
              var e = a[l],
                t = s.find(function (t) {
                  return t.end > e.start || Math.abs(e.start - t.start) < r;
                });
              if (!t) return (e.rows = []), s.push(e), 1;
              e.container = t;
              for (var n = null, i = t.rows.length - 1; !n && i >= 0; i--)
                hs(t.rows[i], e, r) && (n = t.rows[i]);
              n
                ? (n.leaves.push(e), (e.row = n))
                : ((e.leaves = []), t.rows.push(e));
            },
            l = 0;
          l < a.length;
          l++
        )
          o();
        return a.map(function (e) {
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
      function gs(e, t, r) {
        for (var n = 0; n < e.friends.length; ++n)
          if (!(r.indexOf(e.friends[n]) > -1)) {
            (t = t > e.friends[n].idx ? t : e.friends[n].idx),
              r.push(e.friends[n]);
            var i = gs(e.friends[n], t, r);
            t = t > i ? t : i;
          }
        return t;
      }
      var vs = {
        overlap: ys,
        "no-overlap": function (e) {
          var t = ys({
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
          for (var r = 0; r < t.length; ++r)
            (t[r].friends = []),
              delete t[r].style.left,
              delete t[r].style.left,
              delete t[r].idx,
              delete t[r].size;
          for (var n = 0; n < t.length - 1; ++n)
            for (
              var i = t[n],
                a = i.style.top,
                s = i.style.top + i.style.height,
                o = n + 1;
              o < t.length;
              ++o
            ) {
              var l = t[o],
                c = l.style.top,
                u = l.style.top + l.style.height;
              ((c >= a && u <= s) || (u > a && u <= s) || (c >= a && c < s)) &&
                (i.friends.push(l), l.friends.push(i));
            }
          for (var d = 0; d < t.length; ++d) {
            for (var f = t[d], m = [], p = 0; p < 100; ++p) m.push(1);
            for (var h = 0; h < f.friends.length; ++h)
              void 0 !== f.friends[h].idx && (m[f.friends[h].idx] = 0);
            f.idx = m.indexOf(1);
          }
          for (var y = 0; y < t.length; ++y) {
            var g;
            if (!t[y].size) {
              var v = [];
              (g = 100 / (gs(t[y], 0, v) + 1)), (t[y].size = g);
              for (var b = 0; b < v.length; ++b) v[b].size = g;
            }
          }
          for (var w = 0; w < t.length; ++w) {
            var B = t[w];
            B.style.left = B.idx * B.size;
            for (var M = 0, _ = 0; _ < B.friends.length; ++_) {
              var z = B.friends[_].idx;
              M = M > z ? M : z;
            }
            M <= B.idx && (B.size = 100 - B.idx * B.size);
            var S = 0 === B.idx ? 0 : 3;
            (B.style.width = "calc(".concat(B.size, "% - ").concat(S, "px)")),
              (B.style.height = "calc(".concat(B.style.height, "% - 2px)")),
              (B.style.xOffset = "calc("
                .concat(B.style.left, "% + ")
                .concat(S, "px)"));
          }
          return t;
        },
      };
      var bs = (function (e) {
        (0, l.Z)(r, e);
        var t = (0, c.Z)(r);
        function r() {
          return (0, s.Z)(this, r), t.apply(this, arguments);
        }
        return (
          (0, o.Z)(r, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.renderSlot,
                  r = e.resource,
                  n = e.group,
                  i = e.getters,
                  a = e.components,
                  s = (void 0 === a ? {} : a).timeSlotWrapper,
                  o = void 0 === s ? Yi : s,
                  l = i ? i.slotGroupProp(n) : {};
                return d.createElement(
                  "div",
                  Object.assign({ className: "rbc-timeslot-group" }, l),
                  n.map(function (e, n) {
                    var a = i ? i.slotProp(e, r) : {};
                    return d.createElement(
                      o,
                      { key: n, value: e, resource: r },
                      d.createElement(
                        "div",
                        Object.assign({}, a, {
                          className: M("rbc-time-slot", a.className),
                        }),
                        t && t(e, n),
                      ),
                    );
                  }),
                );
              },
            },
          ]),
          r
        );
      })(d.Component);
      function ws(e) {
        return "string" == typeof e ? e : e + "%";
      }
      function Bs(e) {
        var t = e.style,
          r = e.className,
          i = e.event,
          a = e.accessors,
          s = e.rtl,
          o = e.selected,
          l = e.label,
          c = e.continuesPrior,
          u = e.continuesAfter,
          f = e.getters,
          m = e.onClick,
          p = e.onDoubleClick,
          h = e.isBackgroundEvent,
          y = e.onKeyPress,
          g = e.components,
          v = g.event,
          b = g.eventWrapper,
          w = a.title(i),
          B = a.tooltip(i),
          _ = a.end(i),
          z = a.start(i),
          S = f.eventProp(i, z, _, o),
          R = t.height,
          O = t.top,
          E = t.width,
          F = t.xOffset,
          D = [
            d.createElement(
              "div",
              { key: "1", className: "rbc-event-label" },
              l,
            ),
            d.createElement(
              "div",
              { key: "2", className: "rbc-event-content" },
              v ? d.createElement(v, { event: i, title: w }) : w,
            ),
          ],
          x = h
            ? (0, n.Z)(
                (0, n.Z)({}, S.style),
                {},
                (0, oe.Z)(
                  {
                    top: ws(O),
                    height: ws(R),
                    width: "calc(".concat(E, " + 10px)"),
                  },
                  s ? "right" : "left",
                  ws(Math.max(0, F)),
                ),
              )
            : (0, n.Z)(
                (0, n.Z)({}, S.style),
                {},
                (0, oe.Z)(
                  { top: ws(O), width: ws(E), height: ws(R) },
                  s ? "right" : "left",
                  ws(F),
                ),
              );
        return d.createElement(
          b,
          Object.assign({ type: "time" }, e),
          d.createElement(
            "div",
            {
              onClick: m,
              onDoubleClick: p,
              style: x,
              onKeyPress: y,
              title: B ? ("string" == typeof l ? l + ": " : "") + B : void 0,
              className: M(
                h ? "rbc-background-event" : "rbc-event",
                r,
                S.className,
                {
                  "rbc-selected": o,
                  "rbc-event-continues-earlier": c,
                  "rbc-event-continues-later": u,
                },
              ),
            },
            D,
          ),
        );
      }
      var Ms = function (e) {
          var t = e.children,
            r = e.className,
            n = e.style,
            i = e.innerRef;
          return d.createElement("div", { className: r, style: n, ref: i }, t);
        },
        _s = d.forwardRef(function (e, t) {
          return d.createElement(Ms, Object.assign({}, e, { innerRef: t }));
        }),
        zs = ["dayProp"],
        Ss = ["eventContainerWrapper"],
        Rs = (function (e) {
          (0, l.Z)(r, e);
          var t = (0, c.Z)(r);
          function r() {
            var e;
            (0, s.Z)(this, r);
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
              a[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {
                selecting: !1,
                timeIndicatorPosition: null,
              }),
              (e.intervalTriggered = !1),
              (e.renderEvents = function (t) {
                var r = t.events,
                  i = t.isBackgroundEvent,
                  a = e.props,
                  s = a.rtl,
                  o = a.selected,
                  l = a.accessors,
                  c = a.localizer,
                  u = a.getters,
                  f = a.components,
                  m = a.step,
                  p = a.timeslots,
                  h = a.dayLayoutAlgorithm,
                  y = a.resizable,
                  g = (0, sn.Z)(e).slotMetrics,
                  v = c.messages,
                  b = (function (e) {
                    e.events,
                      e.minimumStartDifference,
                      e.slotMetrics,
                      e.accessors;
                    var t,
                      r = e.dayLayoutAlgorithm,
                      n = r;
                    return (
                      r in vs && (n = vs[r]),
                      (t = n) && t.constructor && t.call && t.apply
                        ? n.apply(this, arguments)
                        : []
                    );
                  })({
                    events: r,
                    accessors: l,
                    slotMetrics: g,
                    minimumStartDifference: Math.ceil((m * p) / 2),
                    dayLayoutAlgorithm: h,
                  });
                return b.map(function (t, r) {
                  var a,
                    m = t.event,
                    p = t.style,
                    h = l.end(m),
                    b = l.start(m),
                    w = "eventTimeRangeFormat",
                    B = g.startsBeforeDay(b),
                    M = g.startsAfterDay(h);
                  B
                    ? (w = "eventTimeRangeEndFormat")
                    : M && (w = "eventTimeRangeStartFormat"),
                    (a = B && M ? v.allDay : c.format({ start: b, end: h }, w));
                  var _ = B || g.startsBefore(b),
                    z = M || g.startsAfter(h);
                  return d.createElement(Bs, {
                    style: p,
                    event: m,
                    label: a,
                    key: "evt_" + r,
                    getters: u,
                    rtl: s,
                    components: f,
                    continuesPrior: _,
                    continuesAfter: z,
                    accessors: l,
                    resource: e.props.resource,
                    selected: Da(m, o),
                    onClick: function (t) {
                      return e._select(
                        (0, n.Z)(
                          (0, n.Z)({}, m),
                          {},
                          { sourceResource: e.props.resource },
                        ),
                        t,
                      );
                    },
                    onDoubleClick: function (t) {
                      return e._doubleClick(m, t);
                    },
                    isBackgroundEvent: i,
                    onKeyPress: function (t) {
                      return e._keyPress(m, t);
                    },
                    resizable: y,
                  });
                });
              }),
              (e._selectable = function () {
                var t = e.containerRef.current,
                  r = e.props,
                  i = r.longPressThreshold,
                  a = r.localizer,
                  s = (e._selector = new Za(
                    function () {
                      return t;
                    },
                    { longPressThreshold: i },
                  )),
                  o = function (t) {
                    var r = e.props.onSelecting,
                      n = e.state || {},
                      i = l(t),
                      s = i.startDate,
                      o = i.endDate;
                    (r &&
                      ((a.eq(n.startDate, s, "minutes") &&
                        a.eq(n.endDate, o, "minutes")) ||
                        !1 ===
                          r({
                            start: s,
                            end: o,
                            resourceId: e.props.resource,
                          }))) ||
                      (e.state.start === i.start &&
                        e.state.end === i.end &&
                        e.state.selecting === i.selecting) ||
                      e.setState(i);
                  },
                  l = function (r) {
                    var i = e.slotMetrics.closestSlotFromPoint(r, Ua(t));
                    e.state.selecting || (e._initialSlot = i);
                    var s = e._initialSlot;
                    a.lte(s, i)
                      ? (i = e.slotMetrics.nextSlot(i))
                      : a.gt(s, i) && (s = e.slotMetrics.nextSlot(s));
                    var o = e.slotMetrics.getRange(a.min(s, i), a.max(s, i));
                    return (0, n.Z)(
                      (0, n.Z)({}, o),
                      {},
                      {
                        selecting: !0,
                        top: "".concat(o.top, "%"),
                        height: "".concat(o.height, "%"),
                      },
                    );
                  },
                  c = function (t, r) {
                    if (!Ca(e.containerRef.current, t)) {
                      var n = l(t),
                        i = n.startDate,
                        a = n.endDate;
                      e._selectSlot({
                        startDate: i,
                        endDate: a,
                        action: r,
                        box: t,
                      });
                    }
                    e.setState({ selecting: !1 });
                  };
                s.on("selecting", o),
                  s.on("selectStart", o),
                  s.on("beforeSelect", function (t) {
                    if ("ignoreEvents" === e.props.selectable)
                      return !Ca(e.containerRef.current, t);
                  }),
                  s.on("click", function (e) {
                    return c(e, "click");
                  }),
                  s.on("doubleClick", function (e) {
                    return c(e, "doubleClick");
                  }),
                  s.on("select", function (t) {
                    e.state.selecting &&
                      (e._selectSlot(
                        (0, n.Z)(
                          (0, n.Z)({}, e.state),
                          {},
                          { action: "select", bounds: t },
                        ),
                      ),
                      e.setState({ selecting: !1 }));
                  }),
                  s.on("reset", function () {
                    e.state.selecting && e.setState({ selecting: !1 });
                  });
              }),
              (e._teardownSelectable = function () {
                e._selector && (e._selector.teardown(), (e._selector = null));
              }),
              (e._selectSlot = function (t) {
                for (
                  var r = t.startDate,
                    n = t.endDate,
                    i = t.action,
                    a = t.bounds,
                    s = t.box,
                    o = r,
                    l = [];
                  e.props.localizer.lte(o, n);

                )
                  l.push(o), (o = new Date(+o + 60 * e.props.step * 1e3));
                na(e.props.onSelectSlot, {
                  slots: l,
                  start: r,
                  end: n,
                  resourceId: e.props.resource,
                  action: i,
                  bounds: a,
                  box: s,
                });
              }),
              (e._select = function () {
                for (
                  var t = arguments.length, r = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n];
                na(e.props.onSelectEvent, r);
              }),
              (e._doubleClick = function () {
                for (
                  var t = arguments.length, r = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n];
                na(e.props.onDoubleClickEvent, r);
              }),
              (e._keyPress = function () {
                for (
                  var t = arguments.length, r = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n];
                na(e.props.onKeyPressEvent, r);
              }),
              (e.slotMetrics = ms(e.props)),
              (e.containerRef = (0, d.createRef)()),
              e
            );
          }
          return (
            (0, o.Z)(r, [
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
                  var r = this.props,
                    n = r.getNow,
                    i = r.isNow,
                    a = r.localizer,
                    s = r.date,
                    o = r.min,
                    l = r.max,
                    c = a.neq(e.getNow(), n(), "minutes");
                  if (e.isNow !== i || c) {
                    if ((this.clearTimeIndicatorInterval(), i)) {
                      var u =
                        !c &&
                        a.eq(e.date, s, "minutes") &&
                        t.timeIndicatorPosition ===
                          this.state.timeIndicatorPosition;
                      this.setTimeIndicatorPositionUpdateInterval(u);
                    }
                  } else
                    i &&
                      (a.neq(e.min, o, "minutes") ||
                        a.neq(e.max, l, "minutes")) &&
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
                    r = e.max,
                    n = (0, e.getNow)();
                  if (n >= t && n <= r) {
                    var i = this.slotMetrics.getCurrentTimePosition(n);
                    (this.intervalTriggered = !0),
                      this.setState({ timeIndicatorPosition: i });
                  } else this.clearTimeIndicatorInterval();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    r = e.max,
                    n = e.rtl,
                    a = e.isNow,
                    s = e.resource,
                    o = e.accessors,
                    l = e.localizer,
                    c = e.getters,
                    u = c.dayProp,
                    f = (0, i.Z)(c, zs),
                    m = e.components,
                    p = m.eventContainerWrapper,
                    h = (0, i.Z)(m, Ss),
                    y = this.slotMetrics,
                    g = this.state,
                    v = g.selecting,
                    b = g.top,
                    w = g.height,
                    B = { start: g.startDate, end: g.endDate },
                    _ = u(r),
                    z = _.className,
                    S = _.style,
                    R = h.dayColumnWrapper || _s;
                  return d.createElement(
                    R,
                    {
                      ref: this.containerRef,
                      date: t,
                      style: S,
                      className: M(
                        z,
                        "rbc-day-slot",
                        "rbc-time-column",
                        a && "rbc-now",
                        a && "rbc-today",
                        v && "rbc-slot-selecting",
                      ),
                      slotMetrics: y,
                    },
                    y.groups.map(function (e, t) {
                      return d.createElement(bs, {
                        key: t,
                        group: e,
                        resource: s,
                        getters: f,
                        components: h,
                      });
                    }),
                    d.createElement(
                      p,
                      {
                        localizer: l,
                        resource: s,
                        accessors: o,
                        getters: f,
                        components: h,
                        slotMetrics: y,
                      },
                      d.createElement(
                        "div",
                        { className: M("rbc-events-container", n && "rtl") },
                        this.renderEvents({
                          events: this.props.backgroundEvents,
                          isBackgroundEvent: !0,
                        }),
                        this.renderEvents({ events: this.props.events }),
                      ),
                    ),
                    v &&
                      d.createElement(
                        "div",
                        {
                          className: "rbc-slot-selection",
                          style: { top: b, height: w },
                        },
                        d.createElement(
                          "span",
                          null,
                          l.format(B, "selectRangeFormat"),
                        ),
                      ),
                    a &&
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
            r
          );
        })(d.Component);
      Rs.defaultProps = { dragThroughEvents: !0, timeslots: 2 };
      var Os = function (e) {
          var t = e.min,
            r = e.max,
            n = e.timeslots,
            i = e.step,
            a = e.localizer,
            s = e.getNow,
            o = e.resource,
            l = e.components,
            c = e.getters,
            f = e.gutterRef,
            m = l.timeGutterWrapper,
            p = (0, d.useMemo)(
              function () {
                return (function (e) {
                  var t = e.min,
                    r = e.max,
                    n = e.localizer;
                  return n.getTimezoneOffset(t) !== n.getTimezoneOffset(r)
                    ? { start: n.add(t, -1, "day"), end: n.add(r, -1, "day") }
                    : { start: t, end: r };
                })({ min: t, max: r, localizer: a });
              },
              [
                null == t ? void 0 : t.toISOString(),
                null == r ? void 0 : r.toISOString(),
                a,
              ],
            ),
            h = p.start,
            y = p.end,
            g = (0, d.useState)(
              ms({ min: h, max: y, timeslots: n, step: i, localizer: a }),
            ),
            v = (0, u.Z)(g, 2),
            b = v[0],
            w = v[1];
          (0, d.useEffect)(
            function () {
              b &&
                w(
                  b.update({
                    min: h,
                    max: y,
                    timeslots: n,
                    step: i,
                    localizer: a,
                  }),
                );
            },
            [
              null == h ? void 0 : h.toISOString(),
              null == y ? void 0 : y.toISOString(),
              n,
              i,
            ],
          );
          var B = (0, d.useCallback)(
            function (e, t) {
              if (t) return null;
              var r = b.dateIsInGroup(s(), t);
              return d.createElement(
                "span",
                { className: M("rbc-label", r && "rbc-now") },
                a.format(e, "timeGutterFormat"),
              );
            },
            [b, a, s],
          );
          return d.createElement(
            m,
            { slotMetrics: b },
            d.createElement(
              "div",
              { className: "rbc-time-gutter rbc-time-column", ref: f },
              b.groups.map(function (e, t) {
                return d.createElement(bs, {
                  key: t,
                  group: e,
                  resource: o,
                  components: l,
                  renderSlot: B,
                  getters: c,
                });
              }),
            ),
          );
        },
        Es = d.forwardRef(function (e, t) {
          return d.createElement(Os, Object.assign({ gutterRef: t }, e));
        }),
        Fs = function (e) {
          var t = e.label;
          return d.createElement(d.Fragment, null, t);
        },
        Ds = (function (e) {
          (0, l.Z)(r, e);
          var t = (0, c.Z)(r);
          function r() {
            var e;
            (0, s.Z)(this, r);
            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
              i[a] = arguments[a];
            return (
              ((e = t.call.apply(t, [this].concat(i))).handleHeaderClick =
                function (t, r, n) {
                  n.preventDefault(), na(e.props.onDrillDown, [t, r]);
                }),
              (e.renderRow = function (t) {
                var r = e.props,
                  n = r.events,
                  i = r.rtl,
                  a = r.selectable,
                  s = r.getNow,
                  o = r.range,
                  l = r.getters,
                  c = r.localizer,
                  u = r.accessors,
                  f = r.components,
                  m = r.resizable,
                  p = u.resourceId(t),
                  h = t
                    ? n.filter(function (e) {
                        return u.resource(e) === p;
                      })
                    : n;
                return d.createElement(os, {
                  isAllDay: !0,
                  rtl: i,
                  getNow: s,
                  minRows: 2,
                  maxRows: e.props.allDayMaxRows + 1,
                  range: o,
                  events: h,
                  resourceId: p,
                  className: "rbc-allday-cell",
                  selectable: a,
                  selected: e.props.selected,
                  components: f,
                  accessors: u,
                  getters: l,
                  localizer: c,
                  onSelect: e.props.onSelectEvent,
                  onShowMore: e.props.onShowMore,
                  onDoubleClick: e.props.onDoubleClickEvent,
                  onKeyPress: e.props.onKeyPressEvent,
                  onSelectSlot: e.props.onSelectSlot,
                  longPressThreshold: e.props.longPressThreshold,
                  resizable: m,
                });
              }),
              e
            );
          }
          return (
            (0, o.Z)(r, [
              {
                key: "renderHeaderCells",
                value: function (e) {
                  var t = this,
                    r = this.props,
                    n = r.localizer,
                    i = r.getDrilldownView,
                    a = r.getNow,
                    s = r.getters.dayProp,
                    o = r.components.header,
                    l = void 0 === o ? ls : o,
                    c = a();
                  return e.map(function (e, r) {
                    var a = i(e),
                      o = n.format(e, "dayFormat"),
                      u = s(e),
                      f = u.className,
                      m = u.style,
                      p = d.createElement(l, {
                        date: e,
                        label: o,
                        localizer: n,
                      });
                    return d.createElement(
                      "div",
                      {
                        key: r,
                        style: m,
                        className: M(
                          "rbc-header",
                          f,
                          n.isSameDate(e, c) && "rbc-today",
                        ),
                      },
                      a
                        ? d.createElement(
                            "button",
                            {
                              type: "button",
                              className: "rbc-button-link",
                              onClick: function (r) {
                                return t.handleHeaderClick(e, a, r);
                              },
                            },
                            p,
                          )
                        : d.createElement("span", null, p),
                    );
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    r = t.width,
                    n = t.rtl,
                    i = t.resources,
                    a = t.range,
                    s = t.events,
                    o = t.getNow,
                    l = t.accessors,
                    c = t.selectable,
                    f = t.components,
                    m = t.getters,
                    p = t.scrollRef,
                    h = t.localizer,
                    y = t.isOverflowing,
                    g = t.components,
                    v = g.timeGutterHeader,
                    b = g.resourceHeader,
                    w = void 0 === b ? Fs : b,
                    B = t.resizable,
                    _ = {};
                  y &&
                    (_[n ? "marginLeft" : "marginRight"] = "".concat(
                      On() - 1,
                      "px",
                    ));
                  var z = i.groupEvents(s);
                  return d.createElement(
                    "div",
                    {
                      style: _,
                      ref: p,
                      className: M("rbc-time-header", y && "rbc-overflowing"),
                    },
                    d.createElement(
                      "div",
                      {
                        className: "rbc-label rbc-time-header-gutter",
                        style: { width: r, minWidth: r, maxWidth: r },
                      },
                      v && d.createElement(v, null),
                    ),
                    i.map(function (t, r) {
                      var i = (0, u.Z)(t, 2),
                        s = i[0],
                        p = i[1];
                      return d.createElement(
                        "div",
                        { className: "rbc-time-header-content", key: s || r },
                        p &&
                          d.createElement(
                            "div",
                            {
                              className: "rbc-row rbc-row-resource",
                              key: "resource_".concat(r),
                            },
                            d.createElement(
                              "div",
                              { className: "rbc-header" },
                              d.createElement(w, {
                                index: r,
                                label: l.resourceTitle(p),
                                resource: p,
                              }),
                            ),
                          ),
                        d.createElement(
                          "div",
                          {
                            className: "rbc-row rbc-time-header-cell".concat(
                              a.length <= 1
                                ? " rbc-time-header-cell-single-day"
                                : "",
                            ),
                          },
                          e.renderHeaderCells(a),
                        ),
                        d.createElement(os, {
                          isAllDay: !0,
                          rtl: n,
                          getNow: o,
                          minRows: 2,
                          maxRows: e.props.allDayMaxRows + 1,
                          range: a,
                          events: z.get(s) || [],
                          resourceId: p && s,
                          className: "rbc-allday-cell",
                          selectable: c,
                          selected: e.props.selected,
                          components: f,
                          accessors: l,
                          getters: m,
                          localizer: h,
                          onSelect: e.props.onSelectEvent,
                          onShowMore: e.props.onShowMore,
                          onDoubleClick: e.props.onDoubleClickEvent,
                          onKeyPress: e.props.onKeyPressEvent,
                          onSelectSlot: e.props.onSelectSlot,
                          longPressThreshold: e.props.longPressThreshold,
                          resizable: B,
                        }),
                      );
                    }),
                  );
                },
              },
            ]),
            r
          );
        })(d.Component),
        xs = {};
      var js = (function (e) {
        (0, l.Z)(r, e);
        var t = (0, c.Z)(r);
        function r(e) {
          var i;
          return (
            (0, s.Z)(this, r),
            ((i = t.call(this, e)).handleScroll = function (e) {
              i.scrollRef.current &&
                (i.scrollRef.current.scrollLeft = e.target.scrollLeft);
            }),
            (i.handleResize = function () {
              Ce(i.rafHandle), (i.rafHandle = Ie(i.checkOverflow));
            }),
            (i.handleKeyPressEvent = function () {
              i.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              na(i.props.onKeyPressEvent, t);
            }),
            (i.handleSelectEvent = function () {
              i.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              na(i.props.onSelectEvent, t);
            }),
            (i.handleDoubleClickEvent = function () {
              i.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              na(i.props.onDoubleClickEvent, t);
            }),
            (i.handleShowMore = function (e, t, r, a, s) {
              var o = i.props,
                l = o.popup,
                c = o.onDrillDown,
                u = o.onShowMore,
                d = o.getDrilldownView,
                f = o.doShowMoreDrillDown;
              if ((i.clearSelection(), l)) {
                var m = je(r, i.containerRef.current);
                i.setState({
                  overlay: {
                    date: t,
                    events: e,
                    position: (0, n.Z)((0, n.Z)({}, m), {}, { width: "200px" }),
                    target: s,
                  },
                });
              } else f && na(c, [t, d(t) || ta.DAY]);
              na(u, [e, t, a]);
            }),
            (i.handleSelectAllDaySlot = function (e, t) {
              var r = i.props.onSelectSlot,
                n = new Date(e[0]),
                a = new Date(e[e.length - 1]);
              a.setDate(e[e.length - 1].getDate() + 1),
                na(r, {
                  slots: e,
                  start: n,
                  end: a,
                  action: t.action,
                  resourceId: t.resourceId,
                });
            }),
            (i.overlayDisplay = function () {
              i.setState({ overlay: null });
            }),
            (i.checkOverflow = function () {
              if (!i._updatingOverflow) {
                var e = i.contentRef.current;
                if (null != e && e.scrollHeight) {
                  var t = e.scrollHeight > e.clientHeight;
                  i.state.isOverflowing !== t &&
                    ((i._updatingOverflow = !0),
                    i.setState({ isOverflowing: t }, function () {
                      i._updatingOverflow = !1;
                    }));
                }
              }
            }),
            (i.memoizedResources = an(function (e, t) {
              return (function (e, t) {
                return {
                  map: function (r) {
                    return e
                      ? e.map(function (e, n) {
                          return r([t.resourceId(e), e], n);
                        })
                      : [r([xs, null], 0)];
                  },
                  groupEvents: function (r) {
                    var n = new Map();
                    return e
                      ? (r.forEach(function (e) {
                          var r = t.resource(e) || xs;
                          if (Array.isArray(r))
                            r.forEach(function (t) {
                              var r = n.get(t) || [];
                              r.push(e), n.set(t, r);
                            });
                          else {
                            var i = n.get(r) || [];
                            i.push(e), n.set(r, i);
                          }
                        }),
                        n)
                      : (n.set(xs, r), n);
                  },
                };
              })(e, t);
            })),
            (i.state = { gutterWidth: void 0, isOverflowing: null }),
            (i.scrollRef = d.createRef()),
            (i.contentRef = d.createRef()),
            (i.containerRef = d.createRef()),
            (i._scrollRatio = null),
            (i.gutterRef = (0, d.createRef)()),
            i
          );
        }
        return (
          (0, o.Z)(r, [
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
                  Ce(this.rafHandle),
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
              value: function (e, t, r, n) {
                var i = this,
                  a = this.props,
                  s = a.min,
                  o = a.max,
                  l = a.components,
                  c = a.accessors,
                  f = a.localizer,
                  m = a.dayLayoutAlgorithm,
                  p = this.memoizedResources(this.props.resources, c),
                  h = p.groupEvents(t),
                  y = p.groupEvents(r);
                return p.map(function (t, r) {
                  var a = (0, u.Z)(t, 2),
                    p = a[0],
                    g = a[1];
                  return e.map(function (e, t) {
                    var a = (h.get(p) || []).filter(function (t) {
                        return f.inRange(e, c.start(t), c.end(t), "day");
                      }),
                      u = (y.get(p) || []).filter(function (t) {
                        return f.inRange(e, c.start(t), c.end(t), "day");
                      });
                    return d.createElement(
                      Rs,
                      Object.assign({}, i.props, {
                        localizer: f,
                        min: f.merge(e, s),
                        max: f.merge(e, o),
                        resource: g && p,
                        components: l,
                        isNow: f.isSameDate(e, n),
                        key: r + "-" + t,
                        date: e,
                        events: a,
                        backgroundEvents: u,
                        dayLayoutAlgorithm: m,
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
                  r = t.events,
                  n = t.backgroundEvents,
                  i = t.range,
                  a = t.width,
                  s = t.rtl,
                  o = t.selected,
                  l = t.getNow,
                  c = t.resources,
                  u = t.components,
                  f = t.accessors,
                  m = t.getters,
                  p = t.localizer,
                  h = t.min,
                  y = t.max,
                  g = t.showMultiDayTimes,
                  v = t.longPressThreshold,
                  b = t.resizable;
                a = a || this.state.gutterWidth;
                var w = i[0],
                  B = i[i.length - 1];
                this.slots = i.length;
                var _ = [],
                  z = [],
                  S = [];
                return (
                  r.forEach(function (e) {
                    if (Ja(e, w, B, f, p)) {
                      var t = f.start(e),
                        r = f.end(e);
                      f.allDay(e) ||
                      p.startAndEndAreDateOnly(t, r) ||
                      (!g && !p.isSameDate(t, r))
                        ? _.push(e)
                        : z.push(e);
                    }
                  }),
                  n.forEach(function (e) {
                    Ja(e, w, B, f, p) && S.push(e);
                  }),
                  _.sort(function (e, t) {
                    return es(e, t, f, p);
                  }),
                  d.createElement(
                    "div",
                    {
                      className: M(
                        "rbc-time-view",
                        c && "rbc-time-view-resources",
                      ),
                      ref: this.containerRef,
                    },
                    d.createElement(Ds, {
                      range: i,
                      events: _,
                      width: a,
                      rtl: s,
                      getNow: l,
                      localizer: p,
                      selected: o,
                      allDayMaxRows: this.props.showAllEvents
                        ? 1 / 0
                        : null !== (e = this.props.allDayMaxRows) &&
                          void 0 !== e
                        ? e
                        : 1 / 0,
                      resources: this.memoizedResources(c, f),
                      selectable: this.props.selectable,
                      accessors: f,
                      getters: m,
                      components: u,
                      scrollRef: this.scrollRef,
                      isOverflowing: this.state.isOverflowing,
                      longPressThreshold: v,
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
                    d.createElement(
                      "div",
                      {
                        ref: this.contentRef,
                        className: "rbc-time-content",
                        onScroll: this.handleScroll,
                      },
                      d.createElement(Es, {
                        date: w,
                        ref: this.gutterRef,
                        localizer: p,
                        min: p.merge(w, h),
                        max: p.merge(w, y),
                        step: this.props.step,
                        getNow: this.props.getNow,
                        timeslots: this.props.timeslots,
                        components: u,
                        className: "rbc-time-gutter",
                        getters: m,
                      }),
                      this.renderEvents(i, z, S, l()),
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
                  r = this,
                  n =
                    null !==
                      (e =
                        null === (t = this.state) || void 0 === t
                          ? void 0
                          : t.overlay) && void 0 !== e
                      ? e
                      : {},
                  i = this.props,
                  a = i.accessors,
                  s = i.localizer,
                  o = i.components,
                  l = i.getters,
                  c = i.selected,
                  u = i.popupOffset,
                  f = i.handleDragStart;
                return d.createElement(Wa, {
                  overlay: n,
                  accessors: a,
                  localizer: s,
                  components: o,
                  getters: l,
                  selected: c,
                  popupOffset: u,
                  ref: this.containerRef,
                  handleKeyPressEvent: this.handleKeyPressEvent,
                  handleSelectEvent: this.handleSelectEvent,
                  handleDoubleClickEvent: this.handleDoubleClickEvent,
                  handleDragStart: f,
                  show: !!n.position,
                  overlayDisplay: this.overlayDisplay,
                  onHide: function () {
                    return r.setState({ overlay: null });
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
                        r =
                          null !== (t = e.gutterRef) &&
                          void 0 !== t &&
                          t.current
                            ? En(e.gutterRef.current)
                            : void 0;
                      r &&
                        e.state.gutterWidth !== r &&
                        e.setState({ gutterWidth: r });
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
                  r = e.max,
                  n = e.scrollToTime,
                  i = e.localizer,
                  a = i.diff(i.merge(n, t), n, "milliseconds"),
                  s = i.diff(t, r, "milliseconds");
                this._scrollRatio = a / s;
              },
            },
          ]),
          r
        );
      })(d.Component);
      js.defaultProps = { step: 30, timeslots: 2 };
      var Ts = [
          "date",
          "localizer",
          "min",
          "max",
          "scrollToTime",
          "enableAutoScroll",
        ],
        ks = (function (e) {
          (0, l.Z)(r, e);
          var t = (0, c.Z)(r);
          function r() {
            return (0, s.Z)(this, r), t.apply(this, arguments);
          }
          return (
            (0, o.Z)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    n = e.localizer,
                    a = e.min,
                    s = void 0 === a ? n.startOf(new Date(), "day") : a,
                    o = e.max,
                    l = void 0 === o ? n.endOf(new Date(), "day") : o,
                    c = e.scrollToTime,
                    u = void 0 === c ? n.startOf(new Date(), "day") : c,
                    f = e.enableAutoScroll,
                    m = void 0 === f || f,
                    p = (0, i.Z)(e, Ts),
                    h = r.range(t, { localizer: n });
                  return d.createElement(
                    js,
                    Object.assign({}, p, {
                      range: h,
                      eventOffset: 10,
                      localizer: n,
                      min: s,
                      max: l,
                      scrollToTime: u,
                      enableAutoScroll: m,
                    }),
                  );
                },
              },
            ]),
            r
          );
        })(d.Component);
      (ks.range = function (e, t) {
        return [t.localizer.startOf(e, "day")];
      }),
        (ks.navigate = function (e, t, r) {
          var n = r.localizer;
          switch (t) {
            case $i:
              return n.add(e, -1, "day");
            case Ji:
              return n.add(e, 1, "day");
            default:
              return e;
          }
        }),
        (ks.title = function (e, t) {
          return t.localizer.format(e, "dayHeaderFormat");
        });
      var Ps = [
          "date",
          "localizer",
          "min",
          "max",
          "scrollToTime",
          "enableAutoScroll",
        ],
        Ws = (function (e) {
          (0, l.Z)(r, e);
          var t = (0, c.Z)(r);
          function r() {
            return (0, s.Z)(this, r), t.apply(this, arguments);
          }
          return (
            (0, o.Z)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    n = e.localizer,
                    a = e.min,
                    s = void 0 === a ? n.startOf(new Date(), "day") : a,
                    o = e.max,
                    l = void 0 === o ? n.endOf(new Date(), "day") : o,
                    c = e.scrollToTime,
                    u = void 0 === c ? n.startOf(new Date(), "day") : c,
                    f = e.enableAutoScroll,
                    m = void 0 === f || f,
                    p = (0, i.Z)(e, Ps),
                    h = r.range(t, this.props);
                  return d.createElement(
                    js,
                    Object.assign({}, p, {
                      range: h,
                      eventOffset: 15,
                      localizer: n,
                      min: s,
                      max: l,
                      scrollToTime: u,
                      enableAutoScroll: m,
                    }),
                  );
                },
              },
            ]),
            r
          );
        })(d.Component);
      (Ws.defaultProps = js.defaultProps),
        (Ws.navigate = function (e, t, r) {
          var n = r.localizer;
          switch (t) {
            case $i:
              return n.add(e, -1, "week");
            case Ji:
              return n.add(e, 1, "week");
            default:
              return e;
          }
        }),
        (Ws.range = function (e, t) {
          var r = t.localizer,
            n = r.startOfWeek(),
            i = r.startOf(e, "week", n),
            a = r.endOf(e, "week", n);
          return r.range(i, a);
        }),
        (Ws.title = function (e, t) {
          var r = t.localizer,
            n = Tn(Ws.range(e, { localizer: r })),
            i = n[0],
            a = n.slice(1);
          return r.format({ start: i, end: a.pop() }, "dayRangeHeaderFormat");
        });
      var As = [
        "date",
        "localizer",
        "min",
        "max",
        "scrollToTime",
        "enableAutoScroll",
      ];
      function Cs(e, t) {
        return Ws.range(e, t).filter(function (e) {
          return -1 === [6, 0].indexOf(e.getDay());
        });
      }
      var Is,
        Ns = (function (e) {
          (0, l.Z)(r, e);
          var t = (0, c.Z)(r);
          function r() {
            return (0, s.Z)(this, r), t.apply(this, arguments);
          }
          return (
            (0, o.Z)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    r = e.localizer,
                    n = e.min,
                    a = void 0 === n ? r.startOf(new Date(), "day") : n,
                    s = e.max,
                    o = void 0 === s ? r.endOf(new Date(), "day") : s,
                    l = e.scrollToTime,
                    c = void 0 === l ? r.startOf(new Date(), "day") : l,
                    u = e.enableAutoScroll,
                    f = void 0 === u || u,
                    m = (0, i.Z)(e, As),
                    p = Cs(t, this.props);
                  return d.createElement(
                    js,
                    Object.assign({}, m, {
                      range: p,
                      eventOffset: 15,
                      localizer: r,
                      min: a,
                      max: o,
                      scrollToTime: c,
                      enableAutoScroll: f,
                    }),
                  );
                },
              },
            ]),
            r
          );
        })(d.Component);
      function Zs(e) {
        var t = e.accessors,
          r = e.components,
          n = e.date,
          i = e.events,
          a = e.getters,
          s = e.length,
          o = e.localizer,
          l = e.onDoubleClickEvent,
          c = e.onSelectEvent,
          u = e.selected,
          f = (0, d.useRef)(null),
          m = (0, d.useRef)(null),
          p = (0, d.useRef)(null),
          h = (0, d.useRef)(null),
          y = (0, d.useRef)(null);
        (0, d.useEffect)(function () {
          v();
        });
        var g = function (e, n) {
            var i = "",
              a = r.time,
              s = o.messages.allDay,
              l = t.end(n),
              c = t.start(n);
            return (
              t.allDay(n) ||
                (o.eq(c, l)
                  ? (s = o.format(c, "agendaTimeFormat"))
                  : o.isSameDate(c, l)
                  ? (s = o.format(
                      { start: c, end: l },
                      "agendaTimeRangeFormat",
                    ))
                  : o.isSameDate(e, c)
                  ? (s = o.format(c, "agendaTimeFormat"))
                  : o.isSameDate(e, l) &&
                    (s = o.format(l, "agendaTimeFormat"))),
              o.gt(e, c, "day") && (i = "rbc-continues-prior"),
              o.lt(e, l, "day") && (i += " rbc-continues-after"),
              d.createElement(
                "span",
                { className: i.trim() },
                a ? d.createElement(a, { event: n, day: e, label: s }) : s,
              )
            );
          },
          v = function () {
            if (y.current) {
              var e = f.current,
                t = y.current.firstChild;
              if (t) {
                var r,
                  n,
                  i = h.current.scrollHeight > h.current.clientHeight,
                  a = [],
                  s = a;
                (a = [En(t.children[0]), En(t.children[1])]),
                  (s[0] === a[0] && s[1] === a[1]) ||
                    ((m.current.style.width = a[0] + "px"),
                    (p.current.style.width = a[1] + "px")),
                  i
                    ? ((n = "rbc-header-overflowing"),
                      (r = e).classList
                        ? r.classList.add(n)
                        : (function (e, t) {
                            return e.classList
                              ? !!t && e.classList.contains(t)
                              : -1 !==
                                  (
                                    " " +
                                    (e.className.baseVal || e.className) +
                                    " "
                                  ).indexOf(" " + t + " ");
                          })(r, n) ||
                          ("string" == typeof r.className
                            ? (r.className = r.className + " " + n)
                            : r.setAttribute(
                                "class",
                                ((r.className && r.className.baseVal) || "") +
                                  " " +
                                  n,
                              )),
                      (e.style.marginRight = On() + "px"))
                    : (function (e, t) {
                        e.classList
                          ? e.classList.remove(t)
                          : "string" == typeof e.className
                          ? (e.className = kn(e.className, t))
                          : e.setAttribute(
                              "class",
                              kn((e.className && e.className.baseVal) || "", t),
                            );
                      })(e, "rbc-header-overflowing");
              }
            }
          },
          b = o.messages,
          w = o.add(n, s, "day"),
          B = o.range(n, w, "day");
        return (
          (i = i.filter(function (e) {
            return Ja(e, o.startOf(n, "day"), o.endOf(w, "day"), t, o);
          })).sort(function (e, r) {
            return +t.start(e) - +t.start(r);
          }),
          d.createElement(
            "div",
            { className: "rbc-agenda-view" },
            0 !== i.length
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
                          { className: "rbc-header", ref: m },
                          b.date,
                        ),
                        d.createElement(
                          "th",
                          { className: "rbc-header", ref: p },
                          b.time,
                        ),
                        d.createElement(
                          "th",
                          { className: "rbc-header" },
                          b.event,
                        ),
                      ),
                    ),
                  ),
                  d.createElement(
                    "div",
                    { className: "rbc-agenda-content", ref: h },
                    d.createElement(
                      "table",
                      { className: "rbc-agenda-table" },
                      d.createElement(
                        "tbody",
                        { ref: y },
                        B.map(function (e, n) {
                          return (function (e, n, i) {
                            var s = r.event,
                              f = r.date;
                            return (n = n.filter(function (r) {
                              return Ja(
                                r,
                                o.startOf(e, "day"),
                                o.endOf(e, "day"),
                                t,
                                o,
                              );
                            })).map(function (r, m) {
                              var p = t.title(r),
                                h = t.end(r),
                                y = t.start(r),
                                v = a.eventProp(r, y, h, Da(r, u)),
                                b = 0 === m && o.format(e, "agendaDateFormat"),
                                w =
                                  0 === m &&
                                  d.createElement(
                                    "td",
                                    {
                                      rowSpan: n.length,
                                      className: "rbc-agenda-date-cell",
                                    },
                                    f
                                      ? d.createElement(f, { day: e, label: b })
                                      : b,
                                  );
                              return d.createElement(
                                "tr",
                                {
                                  key: i + "_" + m,
                                  className: v.className,
                                  style: v.style,
                                },
                                w,
                                d.createElement(
                                  "td",
                                  { className: "rbc-agenda-time-cell" },
                                  g(e, r),
                                ),
                                d.createElement(
                                  "td",
                                  {
                                    className: "rbc-agenda-event-cell",
                                    onClick: function (e) {
                                      return c && c(r, e);
                                    },
                                    onDoubleClick: function (e) {
                                      return l && l(r, e);
                                    },
                                  },
                                  s
                                    ? d.createElement(s, { event: r, title: p })
                                    : p,
                                ),
                              );
                            }, []);
                          })(e, i, n);
                        }),
                      ),
                    ),
                  ),
                )
              : d.createElement(
                  "span",
                  { className: "rbc-agenda-empty" },
                  b.noEventsInRange,
                ),
          )
        );
      }
      (Ns.defaultProps = js.defaultProps),
        (Ns.range = Cs),
        (Ns.navigate = Ws.navigate),
        (Ns.title = function (e, t) {
          var r = t.localizer,
            n = Tn(Cs(e, { localizer: r })),
            i = n[0],
            a = n.slice(1);
          return r.format({ start: i, end: a.pop() }, "dayRangeHeaderFormat");
        }),
        (Zs.defaultProps = { length: 30 }),
        (Zs.range = function (e, t) {
          var r = t.length,
            n = void 0 === r ? Zs.defaultProps.length : r;
          return { start: e, end: t.localizer.add(e, n, "day") };
        }),
        (Zs.navigate = function (e, t, r) {
          var n = r.length,
            i = void 0 === n ? Zs.defaultProps.length : n,
            a = r.localizer;
          switch (t) {
            case $i:
              return a.add(e, -i, "day");
            case Ji:
              return a.add(e, i, "day");
            default:
              return e;
          }
        }),
        (Zs.title = function (e, t) {
          var r = t.length,
            n = void 0 === r ? Zs.defaultProps.length : r,
            i = t.localizer,
            a = i.add(e, n, "day");
          return i.format({ start: e, end: a }, "agendaHeaderFormat");
        });
      var Ls =
          ((Is = {}),
          (0, oe.Z)(Is, ta.MONTH, ds),
          (0, oe.Z)(Is, ta.WEEK, Ws),
          (0, oe.Z)(Is, ta.WORK_WEEK, Ns),
          (0, oe.Z)(Is, ta.DAY, ks),
          (0, oe.Z)(Is, ta.AGENDA, Zs),
          Is),
        Us = ["action", "date", "today"];
      var Xs = (function (e) {
        (0, l.Z)(r, e);
        var t = (0, c.Z)(r);
        function r() {
          var e;
          (0, s.Z)(this, r);
          for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
          return (
            ((e = t.call.apply(t, [this].concat(i))).navigate = function (t) {
              e.props.onNavigate(t);
            }),
            (e.view = function (t) {
              e.props.onView(t);
            }),
            e
          );
        }
        return (
          (0, o.Z)(r, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.localizer.messages,
                  r = e.label;
                return d.createElement(
                  "div",
                  { className: "rbc-toolbar" },
                  d.createElement(
                    "span",
                    { className: "rbc-btn-group" },
                    d.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, Qi) },
                      t.today,
                    ),
                    d.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, $i) },
                      t.previous,
                    ),
                    d.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, Ji) },
                      t.next,
                    ),
                  ),
                  d.createElement(
                    "span",
                    { className: "rbc-toolbar-label" },
                    r,
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
                  r = this.props.views,
                  n = this.props.view;
                if (r.length > 1)
                  return r.map(function (r) {
                    return d.createElement(
                      "button",
                      {
                        type: "button",
                        key: r,
                        className: M({ "rbc-active": n === r }),
                        onClick: t.view.bind(null, r),
                      },
                      e[r],
                    );
                  });
              },
            },
          ]),
          r
        );
      })(d.Component);
      var qs = function (e) {
          return function (t) {
            return (function (e, t) {
              var r = null;
              return (
                "function" == typeof t
                  ? (r = t(e))
                  : "string" == typeof t &&
                    "object" === (0, a.Z)(e) &&
                    null != e &&
                    t in e &&
                    (r = e[t]),
                r
              );
            })(t, e);
          };
        },
        Hs = ["view", "date", "getNow", "onNavigate"],
        Gs = [
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
      function Ks(e) {
        if (Array.isArray(e)) return e;
        for (var t = [], r = 0, n = Object.entries(e); r < n.length; r++) {
          var i = (0, u.Z)(n[r], 2),
            a = i[0];
          i[1] && t.push(a);
        }
        return t;
      }
      var Vs = (function (e) {
        (0, l.Z)(r, e);
        var t = (0, c.Z)(r);
        function r() {
          var e;
          (0, s.Z)(this, r);
          for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++)
            l[c] = arguments[c];
          return (
            ((e = t.call.apply(t, [this].concat(l))).getViews = function () {
              var t = e.props.views;
              return Array.isArray(t)
                ? Gi(
                    t,
                    function (e, t) {
                      return (e[t] = Ls[t]);
                    },
                    {},
                  )
                : "object" === (0, a.Z)(t)
                ? Vi(t, function (e, t) {
                    return !0 === e ? Ls[t] : e;
                  })
                : Ls;
            }),
            (e.getView = function () {
              return e.getViews()[e.props.view];
            }),
            (e.getDrilldownView = function (t) {
              var r = e.props,
                n = r.view,
                i = r.drilldownView,
                a = r.getDrilldownView;
              return a ? a(t, n, Object.keys(e.getViews())) : i;
            }),
            (e.handleRangeChange = function (t, r, n) {
              var i = e.props,
                a = i.onRangeChange,
                s = i.localizer;
              a && r.range && a(r.range(t, { localizer: s }), n);
            }),
            (e.handleNavigate = function (t, r) {
              var a = e.props,
                s = a.view,
                o = a.date,
                l = a.getNow,
                c = a.onNavigate,
                u = (0, i.Z)(a, Hs),
                d = e.getView(),
                f = l();
              (o = (function (e, t) {
                var r = t.action,
                  n = t.date,
                  a = t.today,
                  s = (0, i.Z)(t, Us);
                switch (((e = "string" == typeof e ? Ls[e] : e), r)) {
                  case Qi:
                    n = a || new Date();
                    break;
                  case ea:
                    break;
                  default:
                    m()(
                      e && "function" == typeof e.navigate,
                      "Calendar View components must implement a static `.navigate(date, action)` method.s",
                    ),
                      (n = e.navigate(n, r, s));
                }
                return n;
              })(
                d,
                (0, n.Z)(
                  (0, n.Z)({}, u),
                  {},
                  { action: t, date: r || o || f, today: f },
                ),
              )),
                c(o, s, t),
                e.handleRangeChange(o, d);
            }),
            (e.handleViewChange = function (t) {
              t !== e.props.view &&
                (function (e, t) {
                  return -1 !== Ks(t.views).indexOf(e);
                })(t, e.props) &&
                e.props.onView(t);
              var r = e.getViews();
              e.handleRangeChange(e.props.date || e.props.getNow(), r[t], t);
            }),
            (e.handleSelectEvent = function () {
              for (
                var t = arguments.length, r = new Array(t), n = 0;
                n < t;
                n++
              )
                r[n] = arguments[n];
              na(e.props.onSelectEvent, r);
            }),
            (e.handleDoubleClickEvent = function () {
              for (
                var t = arguments.length, r = new Array(t), n = 0;
                n < t;
                n++
              )
                r[n] = arguments[n];
              na(e.props.onDoubleClickEvent, r);
            }),
            (e.handleKeyPressEvent = function () {
              for (
                var t = arguments.length, r = new Array(t), n = 0;
                n < t;
                n++
              )
                r[n] = arguments[n];
              na(e.props.onKeyPressEvent, r);
            }),
            (e.handleSelectSlot = function (t) {
              na(e.props.onSelectSlot, t);
            }),
            (e.handleDrillDown = function (t, r) {
              var n = e.props.onDrillDown;
              n
                ? n(t, r, e.drilldownView)
                : (r && e.handleViewChange(r), e.handleNavigate(ea, t));
            }),
            (e.state = { context: r.getContext(e.props) }),
            e
          );
        }
        return (
          (0, o.Z)(
            r,
            [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.view,
                    r = e.toolbar,
                    n = e.events,
                    a = e.backgroundEvents,
                    s = e.style,
                    o = e.className,
                    l = e.elementProps,
                    c = e.date,
                    u = e.getNow,
                    f = e.length,
                    m = e.showMultiDayTimes,
                    p = e.onShowMore,
                    h = e.doShowMoreDrillDown;
                  e.components, e.formats, e.messages, e.culture;
                  var y = (0, i.Z)(e, Gs);
                  c = c || u();
                  var g = this.getView(),
                    v = this.state.context,
                    b = v.accessors,
                    w = v.components,
                    B = v.getters,
                    _ = v.localizer,
                    z = v.viewNames,
                    S = w.toolbar || Xs,
                    R = g.title(c, { localizer: _, length: f });
                  return d.createElement(
                    "div",
                    Object.assign({}, l, {
                      className: M(o, "rbc-calendar", y.rtl && "rbc-rtl"),
                      style: s,
                    }),
                    r &&
                      d.createElement(S, {
                        date: c,
                        view: t,
                        views: z,
                        label: R,
                        onView: this.handleViewChange,
                        onNavigate: this.handleNavigate,
                        localizer: _,
                      }),
                    d.createElement(
                      g,
                      Object.assign({}, y, {
                        events: n,
                        backgroundEvents: a,
                        date: c,
                        getNow: u,
                        length: f,
                        localizer: _,
                        getters: B,
                        components: w,
                        accessors: b,
                        showMultiDayTimes: m,
                        getDrilldownView: this.getDrilldownView,
                        onNavigate: this.handleNavigate,
                        onDrillDown: this.handleDrillDown,
                        onSelectEvent: this.handleSelectEvent,
                        onDoubleClickEvent: this.handleDoubleClickEvent,
                        onKeyPressEvent: this.handleKeyPressEvent,
                        onSelectSlot: this.handleSelectSlot,
                        onShowMore: p,
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
                  return { context: r.getContext(e) };
                },
              },
              {
                key: "getContext",
                value: function (e) {
                  var t = e.startAccessor,
                    r = e.endAccessor,
                    i = e.allDayAccessor,
                    a = e.tooltipAccessor,
                    s = e.titleAccessor,
                    o = e.resourceAccessor,
                    l = e.resourceIdAccessor,
                    c = e.resourceTitleAccessor,
                    u = e.eventPropGetter,
                    d = e.backgroundEventPropGetter,
                    f = e.slotPropGetter,
                    m = e.slotGroupPropGetter,
                    p = e.dayPropGetter,
                    h = e.view,
                    y = e.views,
                    g = e.localizer,
                    v = e.culture,
                    b = e.messages,
                    w = void 0 === b ? {} : b,
                    B = e.components,
                    M = void 0 === B ? {} : B,
                    _ = e.formats,
                    z = void 0 === _ ? {} : _,
                    S = Ks(y);
                  return {
                    viewNames: S,
                    localizer: Ra(
                      g,
                      v,
                      z,
                      (function (e) {
                        return (0, n.Z)((0, n.Z)({}, Oa), e);
                      })(w),
                    ),
                    getters: {
                      eventProp: function () {
                        return (u && u.apply(void 0, arguments)) || {};
                      },
                      backgroundEventProp: function () {
                        return (d && d.apply(void 0, arguments)) || {};
                      },
                      slotProp: function () {
                        return (f && f.apply(void 0, arguments)) || {};
                      },
                      slotGroupProp: function () {
                        return (m && m.apply(void 0, arguments)) || {};
                      },
                      dayProp: function () {
                        return (p && p.apply(void 0, arguments)) || {};
                      },
                    },
                    components: Li(M[h] || {}, Ci(M, S), {
                      eventWrapper: Yi,
                      backgroundEventWrapper: Yi,
                      eventContainerWrapper: Yi,
                      dateCellWrapper: Yi,
                      weekWrapper: Yi,
                      timeSlotWrapper: Yi,
                      timeGutterWrapper: Yi,
                    }),
                    accessors: {
                      start: qs(t),
                      end: qs(r),
                      allDay: qs(i),
                      tooltip: qs(a),
                      title: qs(s),
                      resource: qs(o),
                      resourceId: qs(l),
                      resourceTitle: qs(c),
                    },
                  };
                },
              },
            ],
          ),
          r
        );
      })(d.Component);
      Vs.defaultProps = {
        events: [],
        backgroundEvents: [],
        elementProps: {},
        popup: !1,
        toolbar: !0,
        view: ta.MONTH,
        views: [ta.MONTH, ta.WEEK, ta.DAY, ta.AGENDA],
        step: 30,
        length: 30,
        allDayMaxRows: 1 / 0,
        doShowMoreDrillDown: !0,
        drilldownView: ta.DAY,
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
      var Ys = (function e(t, r, n) {
          void 0 === n && (n = []);
          var i,
            a = t.displayName || t.name || "Component",
            s =
              !!(i = t) &&
              ("function" != typeof i ||
                (i.prototype && i.prototype.isReactComponent)),
            o = Object.keys(r),
            l = o.map(y);
          !s && n.length && m()(!1);
          var c = (function (e) {
            function i() {
              for (
                var t, i = arguments.length, a = new Array(i), s = 0;
                s < i;
                s++
              )
                a[s] = arguments[s];
              ((t = e.call.apply(e, [this].concat(a)) || this).handlers =
                Object.create(null)),
                o.forEach(function (e) {
                  var n = r[e];
                  t.handlers[n] = function (r) {
                    if (t.props[n]) {
                      var i;
                      t._notifying = !0;
                      for (
                        var a = arguments.length,
                          s = new Array(a > 1 ? a - 1 : 0),
                          o = 1;
                        o < a;
                        o++
                      )
                        s[o - 1] = arguments[o];
                      (i = t.props)[n].apply(i, [r].concat(s)),
                        (t._notifying = !1);
                    }
                    t.unmounted ||
                      t.setState(function (t) {
                        var n,
                          i = t.values;
                        return {
                          values: (0, v.Z)(
                            Object.create(null),
                            i,
                            ((n = {}), (n[e] = r), n),
                          ),
                        };
                      });
                  };
                }),
                n.length &&
                  (t.attachRef = function (e) {
                    t.inner = e;
                  });
              var l = Object.create(null);
              return (
                o.forEach(function (e) {
                  l[e] = t.props[y(e)];
                }),
                (t.state = { values: l, prevProps: {} }),
                t
              );
            }
            (0, b.Z)(i, e);
            var a = i.prototype;
            return (
              (a.shouldComponentUpdate = function () {
                return !this._notifying;
              }),
              (i.getDerivedStateFromProps = function (e, t) {
                var r = t.values,
                  n = t.prevProps,
                  i = {
                    values: (0, v.Z)(Object.create(null), r),
                    prevProps: {},
                  };
                return (
                  o.forEach(function (t) {
                    (i.prevProps[t] = e[t]),
                      !h(e, t) && h(n, t) && (i.values[t] = e[y(t)]);
                  }),
                  i
                );
              }),
              (a.componentWillUnmount = function () {
                this.unmounted = !0;
              }),
              (a.render = function () {
                var e = this,
                  r = this.props,
                  n = r.innerRef,
                  i = (0, g.Z)(r, ["innerRef"]);
                l.forEach(function (e) {
                  delete i[e];
                });
                var a = {};
                return (
                  o.forEach(function (t) {
                    var r = e.props[t];
                    a[t] = void 0 !== r ? r : e.state.values[t];
                  }),
                  d.createElement(
                    t,
                    (0, v.Z)({}, i, a, this.handlers, {
                      ref: n || this.attachRef,
                    }),
                  )
                );
              }),
              i
            );
          })(d.Component);
          (0, w.polyfill)(c),
            (c.displayName = "Uncontrolled(" + a + ")"),
            (c.propTypes = (0, v.Z)(
              { innerRef: function () {} },
              (function (e, t) {
                var r = {};
                return (
                  Object.keys(e).forEach(function (e) {
                    r[y(e)] = p;
                  }),
                  r
                );
              })(r),
            )),
            n.forEach(function (e) {
              c.prototype[e] = function () {
                var t;
                return (t = this.inner)[e].apply(t, arguments);
              };
            });
          var u = c;
          return (
            d.forwardRef &&
              ((u = d.forwardRef(function (e, t) {
                return d.createElement(
                  c,
                  (0, v.Z)({}, e, {
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
            (u.deferControlTo = function (t, n, i) {
              return void 0 === n && (n = {}), e(t, (0, v.Z)({}, r, n), i);
            }),
            u
          );
        })(Vs, {
          view: "onView",
          date: "onNavigate",
          selected: "onSelectEvent",
        }),
        $s = function (e, t, r) {
          var n = e.start,
            i = e.end;
          return r.format(n, "LT", t) + " – " + r.format(i, "LT", t);
        },
        Js = {
          dateFormat: "DD",
          dayFormat: "DD ddd",
          weekdayFormat: "ddd",
          selectRangeFormat: $s,
          eventTimeRangeFormat: $s,
          eventTimeRangeStartFormat: function (e, t, r) {
            var n = e.start;
            return r.format(n, "LT", t) + " – ";
          },
          eventTimeRangeEndFormat: function (e, t, r) {
            var n = e.end;
            return " – " + r.format(n, "LT", t);
          },
          timeGutterFormat: "LT",
          monthHeaderFormat: "MMMM YYYY",
          dayHeaderFormat: "dddd MMM DD",
          dayRangeHeaderFormat: function (e, t, r) {
            var n = e.start,
              i = e.end;
            return (
              r.format(n, "MMMM DD", t) +
              " – " +
              r.format(i, r.eq(n, i, "month") ? "DD" : "MMMM DD", t)
            );
          },
          agendaHeaderFormat: function (e, t, r) {
            var n = e.start,
              i = e.end;
            return r.format(n, "L", t) + " – " + r.format(i, "L", t);
          },
          agendaDateFormat: "ddd MMM DD",
          agendaTimeFormat: "LT",
          agendaTimeRangeFormat: $s,
        };
      function Qs(e) {
        var t = e ? e.toLowerCase() : e;
        return "FullYear" === t ? (t = "year") : t || (t = void 0), t;
      }
      function eo(e) {
        function t(t, r) {
          var n,
            i,
            a = e(t).local(),
            s = e(r).local();
          if (!e.tz)
            return (
              a.toDate().getTimezoneOffset() - s.toDate().getTimezoneOffset()
            );
          var o =
            null !==
              (n =
                null == a || null === (i = a._z) || void 0 === i
                  ? void 0
                  : i.name) && void 0 !== n
              ? n
              : e.tz.guess();
          return e.tz.zone(o).utcOffset(+a) - e.tz.zone(o).utcOffset(+s);
        }
        function r(t, r, n) {
          var i = Qs(n);
          return [i ? e(t).startOf(i) : e(t), i ? e(r).startOf(i) : e(r), i];
        }
        function n() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            r = Qs(arguments.length > 1 ? arguments[1] : void 0);
          return r ? e(t).startOf(r).toDate() : e(t).toDate();
        }
        function i(e, t, n) {
          var i = r(e, t, n),
            a = (0, u.Z)(i, 3),
            s = a[0],
            o = a[1],
            l = a[2];
          return s.isSame(o, l);
        }
        function a(e, t, n) {
          var i = r(e, t, n),
            a = (0, u.Z)(i, 3),
            s = a[0],
            o = a[1],
            l = a[2];
          return s.isSameOrBefore(o, l);
        }
        function s(t, r, n) {
          var i = Qs(n);
          return e(t).add(r, i).toDate();
        }
        function o(e, t) {
          var r = Qs(t),
            a = n(e, r);
          return i(a, e) ? a : s(a, 1, r);
        }
        function l(t, r) {
          var n = Qs(
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "day",
            ),
            i = e(t);
          return e(r).diff(i, n);
        }
        function c(t) {
          return e(t).startOf("month").startOf("week").toDate();
        }
        function d(t) {
          return e(t).endOf("month").endOf("week").toDate();
        }
        return new Sa({
          formats: Js,
          firstOfWeek: function (t) {
            var r = t ? e.localeData(t) : e.localeData();
            return r ? r.firstDayOfWeek() : 0;
          },
          firstVisibleDay: c,
          lastVisibleDay: d,
          visibleDays: function (e) {
            for (var t = c(e), r = d(e), n = []; a(t, r); )
              n.push(t), (t = s(t, 1, "d"));
            return n;
          },
          format: function (t, r, n) {
            return ((i = e(t)), (a = n), a ? i.locale(a) : i).format(r);
            var i, a;
          },
          lt: function (e, t, n) {
            var i = r(e, t, n),
              a = (0, u.Z)(i, 3),
              s = a[0],
              o = a[1],
              l = a[2];
            return s.isBefore(o, l);
          },
          lte: a,
          gt: function (e, t, n) {
            var i = r(e, t, n),
              a = (0, u.Z)(i, 3),
              s = a[0],
              o = a[1],
              l = a[2];
            return s.isAfter(o, l);
          },
          gte: function (e, t, n) {
            var i = r(e, t, n),
              a = (0, u.Z)(i, 3),
              s = a[0],
              o = a[1],
              l = a[2];
            return s.isSameOrBefore(o, l);
          },
          eq: i,
          neq: function (e, t, r) {
            return !i(e, t, r);
          },
          merge: function (t, r) {
            if (!t && !r) return null;
            var n = e(r).format("HH:mm:ss"),
              i = e(t).startOf("day").format("MM/DD/YYYY");
            return e(
              "".concat(i, " ").concat(n),
              "MM/DD/YYYY HH:mm:ss",
            ).toDate();
          },
          inRange: function (t, r, n) {
            var i = Qs(
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "day",
              ),
              a = e(t),
              s = e(r),
              o = e(n);
            return a.isBetween(s, o, i, "[]");
          },
          startOf: n,
          endOf: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              r = Qs(arguments.length > 1 ? arguments[1] : void 0);
            return r ? e(t).endOf(r).toDate() : e(t).toDate();
          },
          range: function (t, r) {
            for (
              var n = Qs(
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "day",
                ),
                i = e(t).toDate(),
                o = [];
              a(i, r);

            )
              o.push(i), (i = s(i, 1, n));
            return o;
          },
          add: s,
          diff: l,
          ceil: o,
          min: function (t, r) {
            var n = e(t),
              i = e(r);
            return e.min(n, i).toDate();
          },
          max: function (t, r) {
            var n = e(t),
              i = e(r);
            return e.max(n, i).toDate();
          },
          minutes: function (t) {
            return e(t).minutes();
          },
          getSlotDate: function (t, r, n) {
            return e(t)
              .startOf("day")
              .minute(r + n)
              .toDate();
          },
          getTimezoneOffset: function (t) {
            return e(t).toDate().getTimezoneOffset();
          },
          getDstOffset: t,
          getTotalMin: function (e, t) {
            return l(e, t, "minutes");
          },
          getMinutesFromMidnight: function (r) {
            var n = e(r).startOf("day");
            return (
              e(r).diff(n, "minutes") +
              (function (r) {
                return t(e(r).startOf("day"), r);
              })(r)
            );
          },
          continuesPrior: function (t, r) {
            var n = e(t),
              i = e(r);
            return n.isBefore(i, "day");
          },
          continuesAfter: function (t, r, n) {
            var i = e(r),
              a = e(n);
            return i.isSameOrAfter(a, "minutes");
          },
          sortEvents: function (e) {
            var t = e.evtA,
              r = t.start,
              i = t.end,
              a = t.allDay,
              s = e.evtB,
              c = s.start,
              u = s.end,
              d = s.allDay,
              f = +n(r, "day") - +n(c, "day"),
              m = l(r, o(i, "day"), "day"),
              p = l(c, o(u, "day"), "day");
            return (
              f ||
              Math.max(p, 1) - Math.max(m, 1) ||
              !!d - !!a ||
              +r - +c ||
              +i - +u
            );
          },
          inEventRange: function (t) {
            var r = t.event,
              n = r.start,
              i = r.end,
              a = t.range,
              s = a.start,
              o = a.end,
              l = e(n).startOf("day"),
              c = e(i),
              u = e(s),
              d = e(o),
              f = l.isSameOrBefore(d, "day"),
              m = !l.isSame(c, "minutes")
                ? c.isAfter(u, "minutes")
                : c.isSameOrAfter(u, "minutes");
            return f && m;
          },
          isSameDate: function (t, r) {
            var n = e(t),
              i = e(r);
            return n.isSame(i, "day");
          },
          browserTZOffset: function () {
            var t = new Date(),
              r = /-/.test(t.toString()) ? "-" : "",
              n = t.getTimezoneOffset(),
              i = Number("".concat(r).concat(Math.abs(n)));
            return e().utcOffset() > i ? 1 : 0;
          },
        });
      }
    },
    48359: (e, t, r) => {
      "use strict";
      r.d(t, { q: () => B });
      var n = r(47427),
        i = r(8889),
        a = r.n(i),
        s = r(76325),
        o = r(94797),
        l = ["x1", "y1", "x2", "y2", "key"],
        c = ["offset"];
      function u(e) {
        return (
          (u =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          u(e)
        );
      }
      function d() {
        return (
          (d = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          d.apply(this, arguments)
        );
      }
      function f(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      function m(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(r), !0).forEach(function (t) {
                b(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function h(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, w(n.key), n);
        }
      }
      function y(e, t) {
        return (
          (y = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          y(e, t)
        );
      }
      function g(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = v(e);
          if (t) {
            var i = v(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === u(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e);
          })(this, r);
        };
      }
      function v(e) {
        return (
          (v = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          v(e)
        );
      }
      function b(e, t, r) {
        return (
          (t = w(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function w(e) {
        var t = (function (e, t) {
          if ("object" !== u(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== u(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === u(t) ? t : String(t);
      }
      var B = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && y(e, t);
        })(m, e);
        var t,
          r,
          i,
          u = g(m);
        function m() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, m),
            u.apply(this, arguments)
          );
        }
        return (
          (t = m),
          (i = [
            {
              key: "renderLineItem",
              value: function (e, t) {
                var r;
                if (n.isValidElement(e)) r = n.cloneElement(e, t);
                else if (a()(e)) r = e(t);
                else {
                  var i = t.x1,
                    s = t.y1,
                    u = t.x2,
                    m = t.y2,
                    p = t.key,
                    h = f(t, l),
                    y = (0, o.L6)(h),
                    g = (y.offset, f(y, c));
                  r = n.createElement(
                    "line",
                    d({}, g, {
                      x1: i,
                      y1: s,
                      x2: u,
                      y2: m,
                      fill: "none",
                      key: p,
                    }),
                  );
                }
                return r;
              },
            },
          ]),
          (r = [
            {
              key: "renderHorizontal",
              value: function (e) {
                var t = this,
                  r = this.props,
                  i = r.x,
                  a = r.width,
                  s = r.horizontal;
                if (!e || !e.length) return null;
                var o = e.map(function (e, r) {
                  var n = p(
                    p({}, t.props),
                    {},
                    {
                      x1: i,
                      y1: e,
                      x2: i + a,
                      y2: e,
                      key: "line-".concat(r),
                      index: r,
                    },
                  );
                  return m.renderLineItem(s, n);
                });
                return n.createElement(
                  "g",
                  { className: "recharts-cartesian-grid-horizontal" },
                  o,
                );
              },
            },
            {
              key: "renderVertical",
              value: function (e) {
                var t = this,
                  r = this.props,
                  i = r.y,
                  a = r.height,
                  s = r.vertical;
                if (!e || !e.length) return null;
                var o = e.map(function (e, r) {
                  var n = p(
                    p({}, t.props),
                    {},
                    {
                      x1: e,
                      y1: i,
                      x2: e,
                      y2: i + a,
                      key: "line-".concat(r),
                      index: r,
                    },
                  );
                  return m.renderLineItem(s, n);
                });
                return n.createElement(
                  "g",
                  { className: "recharts-cartesian-grid-vertical" },
                  o,
                );
              },
            },
            {
              key: "renderVerticalStripes",
              value: function (e) {
                var t = this.props.verticalFill;
                if (!t || !t.length) return null;
                var r = this.props,
                  i = r.fillOpacity,
                  a = r.x,
                  s = r.y,
                  o = r.width,
                  l = r.height,
                  c = e
                    .map(function (e) {
                      return Math.round(e + a - a);
                    })
                    .sort(function (e, t) {
                      return e - t;
                    });
                a !== c[0] && c.unshift(0);
                var u = c.map(function (e, r) {
                  var u = c[r + 1] ? c[r + 1] - e : a + o - e;
                  if (u <= 0) return null;
                  var d = r % t.length;
                  return n.createElement("rect", {
                    key: "react-".concat(r),
                    x: e,
                    y: s,
                    width: u,
                    height: l,
                    stroke: "none",
                    fill: t[d],
                    fillOpacity: i,
                    className: "recharts-cartesian-grid-bg",
                  });
                });
                return n.createElement(
                  "g",
                  { className: "recharts-cartesian-gridstripes-vertical" },
                  u,
                );
              },
            },
            {
              key: "renderHorizontalStripes",
              value: function (e) {
                var t = this.props.horizontalFill;
                if (!t || !t.length) return null;
                var r = this.props,
                  i = r.fillOpacity,
                  a = r.x,
                  s = r.y,
                  o = r.width,
                  l = r.height,
                  c = e
                    .map(function (e) {
                      return Math.round(e + s - s);
                    })
                    .sort(function (e, t) {
                      return e - t;
                    });
                s !== c[0] && c.unshift(0);
                var u = c.map(function (e, r) {
                  var u = c[r + 1] ? c[r + 1] - e : s + l - e;
                  if (u <= 0) return null;
                  var d = r % t.length;
                  return n.createElement("rect", {
                    key: "react-".concat(r),
                    y: e,
                    x: a,
                    height: u,
                    width: o,
                    stroke: "none",
                    fill: t[d],
                    fillOpacity: i,
                    className: "recharts-cartesian-grid-bg",
                  });
                });
                return n.createElement(
                  "g",
                  { className: "recharts-cartesian-gridstripes-horizontal" },
                  u,
                );
              },
            },
            {
              key: "renderBackground",
              value: function () {
                var e = this.props.fill;
                if (!e || "none" === e) return null;
                var t = this.props,
                  r = t.fillOpacity,
                  i = t.x,
                  a = t.y,
                  s = t.width,
                  o = t.height;
                return n.createElement("rect", {
                  x: i,
                  y: a,
                  width: s,
                  height: o,
                  stroke: "none",
                  fill: e,
                  fillOpacity: r,
                  className: "recharts-cartesian-grid-bg",
                });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.x,
                  r = e.y,
                  i = e.width,
                  o = e.height,
                  l = e.horizontal,
                  c = e.vertical,
                  u = e.horizontalCoordinatesGenerator,
                  d = e.verticalCoordinatesGenerator,
                  f = e.xAxis,
                  m = e.yAxis,
                  h = e.offset,
                  y = e.chartWidth,
                  g = e.chartHeight,
                  v = e.syncWithTicks,
                  b = e.horizontalValues,
                  w = e.verticalValues;
                if (
                  !(0, s.hj)(i) ||
                  i <= 0 ||
                  !(0, s.hj)(o) ||
                  o <= 0 ||
                  !(0, s.hj)(t) ||
                  t !== +t ||
                  !(0, s.hj)(r) ||
                  r !== +r
                )
                  return null;
                var B = this.props,
                  M = B.horizontalPoints,
                  _ = B.verticalPoints;
                if ((!M || !M.length) && a()(u)) {
                  var z = b && b.length;
                  M = u(
                    {
                      yAxis: m
                        ? p(p({}, m), {}, { ticks: z ? b : m.ticks })
                        : void 0,
                      width: y,
                      height: g,
                      offset: h,
                    },
                    !!z || v,
                  );
                }
                if ((!_ || !_.length) && a()(d)) {
                  var S = w && w.length;
                  _ = d(
                    {
                      xAxis: f
                        ? p(p({}, f), {}, { ticks: S ? w : f.ticks })
                        : void 0,
                      width: y,
                      height: g,
                      offset: h,
                    },
                    !!S || v,
                  );
                }
                return n.createElement(
                  "g",
                  { className: "recharts-cartesian-grid" },
                  this.renderBackground(),
                  l && this.renderHorizontal(M),
                  c && this.renderVertical(_),
                  l && this.renderHorizontalStripes(M),
                  c && this.renderVerticalStripes(_),
                );
              },
            },
          ]) && h(t.prototype, r),
          i && h(t, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          m
        );
      })(n.PureComponent);
      b(B, "displayName", "CartesianGrid"),
        b(B, "defaultProps", {
          horizontal: !0,
          vertical: !0,
          horizontalPoints: [],
          verticalPoints: [],
          stroke: "#ccc",
          fill: "none",
          verticalFill: [],
          horizontalFill: [],
        });
    },
    22559: (e, t, r) => {
      "use strict";
      r.d(t, { c: () => me });
      var n,
        i = r(11914),
        a = r(47427),
        s = r(84148),
        o = r(15819),
        l = r(8889),
        c = r.n(l),
        u = r(24149),
        d = r.n(u),
        f = r(38716),
        m = r.n(f),
        p = r(98176),
        h = r.n(p),
        y = r(49198),
        g = r.n(y),
        v = r(84223),
        b = r(14166),
        w = r(47430),
        B = r(72961),
        M = r(77125),
        _ = r(76325),
        z = r(91140),
        S = r(94797),
        R = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"];
      function O(e) {
        return (
          (O =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          O(e)
        );
      }
      function E(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      function F() {
        return (
          (F = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          F.apply(this, arguments)
        );
      }
      function D(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(r), !0).forEach(function (t) {
                A(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : D(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function j(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, C(n.key), n);
        }
      }
      function T(e, t) {
        return (
          (T = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          T(e, t)
        );
      }
      function k(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = W(e);
          if (t) {
            var i = W(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === O(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return P(e);
          })(this, r);
        };
      }
      function P(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function W(e) {
        return (
          (W = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          W(e)
        );
      }
      function A(e, t, r) {
        return (
          (t = C(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function C(e) {
        var t = (function (e, t) {
          if ("object" !== O(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== O(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === O(t) ? t : String(t);
      }
      var I = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && T(e, t);
        })(l, e);
        var t,
          r,
          n,
          i = k(l);
        function l() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, l);
          for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            A(P((e = i.call.apply(i, [this].concat(r)))), "state", {
              isAnimationFinished: !0,
            }),
            A(P(e), "id", (0, _.EL)("recharts-area-")),
            A(P(e), "handleAnimationEnd", function () {
              var t = e.props.onAnimationEnd;
              e.setState({ isAnimationFinished: !0 }), c()(t) && t();
            }),
            A(P(e), "handleAnimationStart", function () {
              var t = e.props.onAnimationStart;
              e.setState({ isAnimationFinished: !1 }), c()(t) && t();
            }),
            e
          );
        }
        return (
          (t = l),
          (n = [
            {
              key: "getDerivedStateFromProps",
              value: function (e, t) {
                return e.animationId !== t.prevAnimationId
                  ? {
                      prevAnimationId: e.animationId,
                      curPoints: e.points,
                      curBaseLine: e.baseLine,
                      prevPoints: t.curPoints,
                      prevBaseLine: t.curBaseLine,
                    }
                  : e.points !== t.curPoints || e.baseLine !== t.curBaseLine
                  ? { curPoints: e.points, curBaseLine: e.baseLine }
                  : null;
              },
            },
          ]),
          (r = [
            {
              key: "renderDots",
              value: function (e, t, r) {
                var n = this.props.isAnimationActive,
                  i = this.state.isAnimationFinished;
                if (n && !i) return null;
                var s = this.props,
                  o = s.dot,
                  c = s.points,
                  u = s.dataKey,
                  d = (0, S.L6)(this.props),
                  f = (0, S.L6)(o, !0),
                  m = c.map(function (e, t) {
                    var r = x(
                      x(x({ key: "dot-".concat(t), r: 3 }, d), f),
                      {},
                      {
                        dataKey: u,
                        cx: e.x,
                        cy: e.y,
                        index: t,
                        value: e.value,
                        payload: e.payload,
                      },
                    );
                    return l.renderDotItem(o, r);
                  }),
                  p = {
                    clipPath: e
                      ? "url(#clipPath-".concat(t ? "" : "dots-").concat(r, ")")
                      : null,
                  };
                return a.createElement(
                  w.m,
                  F({ className: "recharts-area-dots" }, p),
                  m,
                );
              },
            },
            {
              key: "renderHorizontalRect",
              value: function (e) {
                var t = this.props,
                  r = t.baseLine,
                  n = t.points,
                  i = t.strokeWidth,
                  s = n[0].x,
                  o = n[n.length - 1].x,
                  l = e * Math.abs(s - o),
                  c = d()(
                    n.map(function (e) {
                      return e.y || 0;
                    }),
                  );
                return (
                  (0, _.hj)(r) && "number" == typeof r
                    ? (c = Math.max(r, c))
                    : r &&
                      Array.isArray(r) &&
                      r.length &&
                      (c = Math.max(
                        d()(
                          r.map(function (e) {
                            return e.y || 0;
                          }),
                        ),
                        c,
                      )),
                  (0, _.hj)(c)
                    ? a.createElement("rect", {
                        x: s < o ? s : s - l,
                        y: 0,
                        width: l,
                        height: Math.floor(
                          c + (i ? parseInt("".concat(i), 10) : 1),
                        ),
                      })
                    : null
                );
              },
            },
            {
              key: "renderVerticalRect",
              value: function (e) {
                var t = this.props,
                  r = t.baseLine,
                  n = t.points,
                  i = t.strokeWidth,
                  s = n[0].y,
                  o = n[n.length - 1].y,
                  l = e * Math.abs(s - o),
                  c = d()(
                    n.map(function (e) {
                      return e.x || 0;
                    }),
                  );
                return (
                  (0, _.hj)(r) && "number" == typeof r
                    ? (c = Math.max(r, c))
                    : r &&
                      Array.isArray(r) &&
                      r.length &&
                      (c = Math.max(
                        d()(
                          r.map(function (e) {
                            return e.x || 0;
                          }),
                        ),
                        c,
                      )),
                  (0, _.hj)(c)
                    ? a.createElement("rect", {
                        x: 0,
                        y: s < o ? s : s - l,
                        width: c + (i ? parseInt("".concat(i), 10) : 1),
                        height: Math.floor(l),
                      })
                    : null
                );
              },
            },
            {
              key: "renderClipRect",
              value: function (e) {
                return "vertical" === this.props.layout
                  ? this.renderVerticalRect(e)
                  : this.renderHorizontalRect(e);
              },
            },
            {
              key: "renderAreaStatically",
              value: function (e, t, r, n) {
                var i = this.props,
                  s = i.layout,
                  o = i.type,
                  l = i.stroke,
                  c = i.connectNulls,
                  u = i.isRange,
                  d = (i.ref, E(i, R));
                return a.createElement(
                  w.m,
                  { clipPath: r ? "url(#clipPath-".concat(n, ")") : null },
                  a.createElement(
                    v.H,
                    F({}, (0, S.L6)(d, !0), {
                      points: e,
                      connectNulls: c,
                      type: o,
                      baseLine: t,
                      layout: s,
                      stroke: "none",
                      className: "recharts-area-area",
                    }),
                  ),
                  "none" !== l &&
                    a.createElement(
                      v.H,
                      F({}, (0, S.L6)(this.props), {
                        className: "recharts-area-curve",
                        layout: s,
                        type: o,
                        connectNulls: c,
                        fill: "none",
                        points: e,
                      }),
                    ),
                  "none" !== l &&
                    u &&
                    a.createElement(
                      v.H,
                      F({}, (0, S.L6)(this.props), {
                        className: "recharts-area-curve",
                        layout: s,
                        type: o,
                        connectNulls: c,
                        fill: "none",
                        points: t,
                      }),
                    ),
                );
              },
            },
            {
              key: "renderAreaWithAnimation",
              value: function (e, t) {
                var r = this,
                  n = this.props,
                  i = n.points,
                  s = n.baseLine,
                  l = n.isAnimationActive,
                  c = n.animationBegin,
                  u = n.animationDuration,
                  d = n.animationEasing,
                  f = n.animationId,
                  p = this.state,
                  y = p.prevPoints,
                  g = p.prevBaseLine;
                return a.createElement(
                  o.ZP,
                  {
                    begin: c,
                    duration: u,
                    isActive: l,
                    easing: d,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "area-".concat(f),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (n) {
                    var o = n.t;
                    if (y) {
                      var l,
                        c = y.length / i.length,
                        u = i.map(function (e, t) {
                          var r = Math.floor(t * c);
                          if (y[r]) {
                            var n = y[r],
                              i = (0, _.k4)(n.x, e.x),
                              a = (0, _.k4)(n.y, e.y);
                            return x(x({}, e), {}, { x: i(o), y: a(o) });
                          }
                          return e;
                        });
                      return (
                        (l =
                          (0, _.hj)(s) && "number" == typeof s
                            ? (0, _.k4)(g, s)(o)
                            : m()(s) || h()(s)
                            ? (0, _.k4)(g, 0)(o)
                            : s.map(function (e, t) {
                                var r = Math.floor(t * c);
                                if (g[r]) {
                                  var n = g[r],
                                    i = (0, _.k4)(n.x, e.x),
                                    a = (0, _.k4)(n.y, e.y);
                                  return x(x({}, e), {}, { x: i(o), y: a(o) });
                                }
                                return e;
                              })),
                        r.renderAreaStatically(u, l, e, t)
                      );
                    }
                    return a.createElement(
                      w.m,
                      null,
                      a.createElement(
                        "defs",
                        null,
                        a.createElement(
                          "clipPath",
                          { id: "animationClipPath-".concat(t) },
                          r.renderClipRect(o),
                        ),
                      ),
                      a.createElement(
                        w.m,
                        { clipPath: "url(#animationClipPath-".concat(t, ")") },
                        r.renderAreaStatically(i, s, e, t),
                      ),
                    );
                  },
                );
              },
            },
            {
              key: "renderArea",
              value: function (e, t) {
                var r = this.props,
                  n = r.points,
                  i = r.baseLine,
                  a = r.isAnimationActive,
                  s = this.state,
                  o = s.prevPoints,
                  l = s.prevBaseLine,
                  c = s.totalLength;
                return a &&
                  n &&
                  n.length &&
                  ((!o && c > 0) || !g()(o, n) || !g()(l, i))
                  ? this.renderAreaWithAnimation(e, t)
                  : this.renderAreaStatically(n, i, e, t);
              },
            },
            {
              key: "render",
              value: function () {
                var e,
                  t = this.props,
                  r = t.hide,
                  n = t.dot,
                  i = t.points,
                  o = t.className,
                  l = t.top,
                  c = t.left,
                  u = t.xAxis,
                  d = t.yAxis,
                  f = t.width,
                  p = t.height,
                  h = t.isAnimationActive,
                  y = t.id;
                if (r || !i || !i.length) return null;
                var g = this.state.isAnimationFinished,
                  v = 1 === i.length,
                  b = (0, s.Z)("recharts-area", o),
                  M = u && u.allowDataOverflow,
                  _ = d && d.allowDataOverflow,
                  z = M || _,
                  R = m()(y) ? this.id : y,
                  O =
                    null !== (e = (0, S.L6)(n)) && void 0 !== e
                      ? e
                      : { r: 3, strokeWidth: 2 },
                  E = O.r,
                  F = void 0 === E ? 3 : E,
                  D = O.strokeWidth,
                  x = void 0 === D ? 2 : D,
                  j = ((0, S.$k)(n) ? n : {}).clipDot,
                  T = void 0 === j || j,
                  k = 2 * F + x;
                return a.createElement(
                  w.m,
                  { className: b },
                  M || _
                    ? a.createElement(
                        "defs",
                        null,
                        a.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(R) },
                          a.createElement("rect", {
                            x: M ? c : c - f / 2,
                            y: _ ? l : l - p / 2,
                            width: M ? f : 2 * f,
                            height: _ ? p : 2 * p,
                          }),
                        ),
                        !T &&
                          a.createElement(
                            "clipPath",
                            { id: "clipPath-dots-".concat(R) },
                            a.createElement("rect", {
                              x: c - k / 2,
                              y: l - k / 2,
                              width: f + k,
                              height: p + k,
                            }),
                          ),
                      )
                    : null,
                  v ? null : this.renderArea(z, R),
                  (n || v) && this.renderDots(z, T, R),
                  (!h || g) && B.e.renderCallByParent(this.props, i),
                );
              },
            },
          ]) && j(t.prototype, r),
          n && j(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          l
        );
      })(a.PureComponent);
      (n = I),
        A(I, "displayName", "Area"),
        A(I, "defaultProps", {
          stroke: "#3182bd",
          fill: "#3182bd",
          fillOpacity: 0.6,
          xAxisId: 0,
          yAxisId: 0,
          legendType: "line",
          connectNulls: !1,
          points: [],
          dot: !1,
          activeDot: !0,
          hide: !1,
          isAnimationActive: !M.x.isSsr,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        }),
        A(I, "getBaseValue", function (e, t, r, n) {
          var i = e.layout,
            a = e.baseValue,
            s = t.props.baseValue,
            o = null != s ? s : a;
          if ((0, _.hj)(o) && "number" == typeof o) return o;
          var l = "horizontal" === i ? n : r,
            c = l.scale.domain();
          if ("number" === l.type) {
            var u = Math.max(c[0], c[1]),
              d = Math.min(c[0], c[1]);
            return "dataMin" === o
              ? d
              : "dataMax" === o || u < 0
              ? u
              : Math.max(Math.min(c[0], c[1]), 0);
          }
          return "dataMin" === o ? c[0] : "dataMax" === o ? c[1] : c[0];
        }),
        A(I, "getComposedData", function (e) {
          var t,
            r = e.props,
            i = e.item,
            a = e.xAxis,
            s = e.yAxis,
            o = e.xAxisTicks,
            l = e.yAxisTicks,
            c = e.bandSize,
            u = e.dataKey,
            d = e.stackedData,
            f = e.dataStartIndex,
            m = e.displayedData,
            p = e.offset,
            h = r.layout,
            y = d && d.length,
            g = n.getBaseValue(r, i, a, s),
            v = "horizontal" === h,
            b = !1,
            w = m.map(function (e, t) {
              var r;
              y
                ? (r = d[f + t])
                : ((r = (0, z.F$)(e, u)),
                  Array.isArray(r) ? (b = !0) : (r = [g, r]));
              var n = null == r[1] || (y && null == (0, z.F$)(e, u));
              return v
                ? {
                    x: (0, z.Hv)({
                      axis: a,
                      ticks: o,
                      bandSize: c,
                      entry: e,
                      index: t,
                    }),
                    y: n ? null : s.scale(r[1]),
                    value: r,
                    payload: e,
                  }
                : {
                    x: n ? null : a.scale(r[1]),
                    y: (0, z.Hv)({
                      axis: s,
                      ticks: l,
                      bandSize: c,
                      entry: e,
                      index: t,
                    }),
                    value: r,
                    payload: e,
                  };
            });
          return (
            (t =
              y || b
                ? w.map(function (e) {
                    var t = Array.isArray(e.value) ? e.value[0] : null;
                    return v
                      ? {
                          x: e.x,
                          y: null != t && null != e.y ? s.scale(t) : null,
                        }
                      : { x: null != t ? a.scale(t) : null, y: e.y };
                  })
                : v
                ? s.scale(g)
                : a.scale(g)),
            x({ points: w, baseLine: t, layout: h, isRange: b }, p)
          );
        }),
        A(I, "renderDotItem", function (e, t) {
          return a.isValidElement(e)
            ? a.cloneElement(e, t)
            : c()(e)
            ? e(t)
            : a.createElement(
                b.o,
                F({}, t, { className: "recharts-area-dot" }),
              );
        });
      var N = r(28531),
        Z = r(52942),
        L = function () {
          return null;
        };
      (L.displayName = "ZAxis"),
        (L.defaultProps = {
          zAxisId: 0,
          range: [64, 64],
          scale: "auto",
          type: "number",
        });
      var U = r(85458),
        X = r(85674),
        q = r(81156),
        H = r(58054),
        G = r(37350),
        K = ["option", "isActive"];
      function V() {
        return (
          (V = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          V.apply(this, arguments)
        );
      }
      function Y(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      function $(e) {
        var t = e.option,
          r = e.isActive,
          n = Y(e, K);
        return "string" == typeof t
          ? a.createElement(
              G.bn,
              V(
                {
                  option: a.createElement(H.v, V({ type: t }, n)),
                  isActive: r,
                  shapeType: "symbols",
                },
                n,
              ),
            )
          : a.createElement(
              G.bn,
              V({ option: t, isActive: r, shapeType: "symbols" }, n),
            );
      }
      function J(e) {
        return (
          (J =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          J(e)
        );
      }
      function Q() {
        return (
          (Q = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Q.apply(this, arguments)
        );
      }
      function ee(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ee(Object(r), !0).forEach(function (t) {
                oe(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ee(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function re(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, le(n.key), n);
        }
      }
      function ne(e, t) {
        return (
          (ne = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          ne(e, t)
        );
      }
      function ie(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = se(e);
          if (t) {
            var i = se(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === J(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return ae(e);
          })(this, r);
        };
      }
      function ae(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function se(e) {
        return (
          (se = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          se(e)
        );
      }
      function oe(e, t, r) {
        return (
          (t = le(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function le(e) {
        var t = (function (e, t) {
          if ("object" !== J(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== J(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === J(t) ? t : String(t);
      }
      var ce = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && ne(e, t);
        })(l, e);
        var t,
          r,
          n,
          i = ie(l);
        function l() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, l);
          for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            oe(ae((e = i.call.apply(i, [this].concat(r)))), "state", {
              isAnimationFinished: !1,
            }),
            oe(ae(e), "handleAnimationEnd", function () {
              e.setState({ isAnimationFinished: !0 });
            }),
            oe(ae(e), "handleAnimationStart", function () {
              e.setState({ isAnimationFinished: !1 });
            }),
            oe(ae(e), "id", (0, _.EL)("recharts-scatter-")),
            e
          );
        }
        return (
          (t = l),
          (n = [
            {
              key: "getDerivedStateFromProps",
              value: function (e, t) {
                return e.animationId !== t.prevAnimationId
                  ? {
                      prevAnimationId: e.animationId,
                      curPoints: e.points,
                      prevPoints: t.curPoints,
                    }
                  : e.points !== t.curPoints
                  ? { curPoints: e.points }
                  : null;
              },
            },
          ]),
          (r = [
            {
              key: "renderSymbolsStatically",
              value: function (e) {
                var t = this,
                  r = this.props,
                  n = r.shape,
                  i = r.activeShape,
                  s = r.activeIndex,
                  o = (0, S.L6)(this.props);
                return e.map(function (e, r) {
                  var l = s === r,
                    c = l ? i : n,
                    u = te(te({ key: "symbol-".concat(r) }, o), e);
                  return a.createElement(
                    w.m,
                    Q(
                      { className: "recharts-scatter-symbol" },
                      (0, q.bw)(t.props, e, r),
                      {
                        key: "symbol-"
                          .concat(null == e ? void 0 : e.cx, "-")
                          .concat(null == e ? void 0 : e.cy, "-")
                          .concat(null == e ? void 0 : e.size),
                        role: "img",
                      },
                    ),
                    a.createElement($, Q({ option: c, isActive: l }, u)),
                  );
                });
              },
            },
            {
              key: "renderSymbolsWithAnimation",
              value: function () {
                var e = this,
                  t = this.props,
                  r = t.points,
                  n = t.isAnimationActive,
                  i = t.animationBegin,
                  s = t.animationDuration,
                  l = t.animationEasing,
                  c = t.animationId,
                  u = this.state.prevPoints;
                return a.createElement(
                  o.ZP,
                  {
                    begin: i,
                    duration: s,
                    isActive: n,
                    easing: l,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "pie-".concat(c),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (t) {
                    var n = t.t,
                      i = r.map(function (e, t) {
                        var r = u && u[t];
                        if (r) {
                          var i = (0, _.k4)(r.cx, e.cx),
                            a = (0, _.k4)(r.cy, e.cy),
                            s = (0, _.k4)(r.size, e.size);
                          return te(
                            te({}, e),
                            {},
                            { cx: i(n), cy: a(n), size: s(n) },
                          );
                        }
                        var o = (0, _.k4)(0, e.size);
                        return te(te({}, e), {}, { size: o(n) });
                      });
                    return a.createElement(
                      w.m,
                      null,
                      e.renderSymbolsStatically(i),
                    );
                  },
                );
              },
            },
            {
              key: "renderSymbols",
              value: function () {
                var e = this.props,
                  t = e.points,
                  r = e.isAnimationActive,
                  n = this.state.prevPoints;
                return !(r && t && t.length) || (n && g()(n, t))
                  ? this.renderSymbolsStatically(t)
                  : this.renderSymbolsWithAnimation();
              },
            },
            {
              key: "renderErrorBar",
              value: function () {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var e = this.props,
                  t = e.points,
                  r = e.xAxis,
                  n = e.yAxis,
                  i = e.children,
                  s = (0, S.NN)(i, U.W);
                return s
                  ? s.map(function (e, i) {
                      var s = e.props,
                        o = s.direction,
                        l = s.dataKey;
                      return a.cloneElement(e, {
                        key: "".concat(o, "-").concat(l, "-").concat(t[i]),
                        data: t,
                        xAxis: r,
                        yAxis: n,
                        layout: "x" === o ? "vertical" : "horizontal",
                        dataPointFormatter: function (e, t) {
                          return {
                            x: e.cx,
                            y: e.cy,
                            value: "x" === o ? +e.node.x : +e.node.y,
                            errorVal: (0, z.F$)(e, t),
                          };
                        },
                      });
                    })
                  : null;
              },
            },
            {
              key: "renderLine",
              value: function () {
                var e,
                  t,
                  r = this.props,
                  n = r.points,
                  i = r.line,
                  s = r.lineType,
                  o = r.lineJointType,
                  l = (0, S.L6)(this.props),
                  u = (0, S.L6)(i);
                if ("joint" === s)
                  e = n.map(function (e) {
                    return { x: e.cx, y: e.cy };
                  });
                else if ("fitting" === s) {
                  var d = (0, _.wr)(n),
                    f = d.xmin,
                    m = d.xmax,
                    p = d.a,
                    h = d.b,
                    y = function (e) {
                      return p * e + h;
                    };
                  e = [
                    { x: f, y: y(f) },
                    { x: m, y: y(m) },
                  ];
                }
                var g = te(
                  te(te({}, l), {}, { fill: "none", stroke: l && l.fill }, u),
                  {},
                  { points: e },
                );
                return (
                  (t = a.isValidElement(i)
                    ? a.cloneElement(i, g)
                    : c()(i)
                    ? i(g)
                    : a.createElement(v.H, Q({}, g, { type: o }))),
                  a.createElement(
                    w.m,
                    {
                      className: "recharts-scatter-line",
                      key: "recharts-scatter-line",
                    },
                    t,
                  )
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.hide,
                  r = e.points,
                  n = e.line,
                  i = e.className,
                  o = e.xAxis,
                  l = e.yAxis,
                  c = e.left,
                  u = e.top,
                  d = e.width,
                  f = e.height,
                  p = e.id,
                  h = e.isAnimationActive;
                if (t || !r || !r.length) return null;
                var y = this.state.isAnimationFinished,
                  g = (0, s.Z)("recharts-scatter", i),
                  v = o && o.allowDataOverflow,
                  b = l && l.allowDataOverflow,
                  M = v || b,
                  _ = m()(p) ? this.id : p;
                return a.createElement(
                  w.m,
                  {
                    className: g,
                    clipPath: M ? "url(#clipPath-".concat(_, ")") : null,
                  },
                  v || b
                    ? a.createElement(
                        "defs",
                        null,
                        a.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(_) },
                          a.createElement("rect", {
                            x: v ? c : c - d / 2,
                            y: b ? u : u - f / 2,
                            width: v ? d : 2 * d,
                            height: b ? f : 2 * f,
                          }),
                        ),
                      )
                    : null,
                  n && this.renderLine(),
                  this.renderErrorBar(),
                  a.createElement(
                    w.m,
                    { key: "recharts-scatter-symbols" },
                    this.renderSymbols(),
                  ),
                  (!h || y) && B.e.renderCallByParent(this.props, r),
                );
              },
            },
          ]) && re(t.prototype, r),
          n && re(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          l
        );
      })(a.PureComponent);
      oe(ce, "displayName", "Scatter"),
        oe(ce, "defaultProps", {
          xAxisId: 0,
          yAxisId: 0,
          zAxisId: 0,
          legendType: "circle",
          lineType: "joint",
          lineJointType: "linear",
          data: [],
          shape: "circle",
          hide: !1,
          isAnimationActive: !M.x.isSsr,
          animationBegin: 0,
          animationDuration: 400,
          animationEasing: "linear",
        }),
        oe(ce, "getComposedData", function (e) {
          var t = e.xAxis,
            r = e.yAxis,
            n = e.zAxis,
            i = e.item,
            a = e.displayedData,
            s = e.xAxisTicks,
            o = e.yAxisTicks,
            l = e.offset,
            c = i.props.tooltipType,
            u = (0, S.NN)(i.props.children, X.b),
            d = m()(t.dataKey) ? i.props.dataKey : t.dataKey,
            f = m()(r.dataKey) ? i.props.dataKey : r.dataKey,
            p = n && n.dataKey,
            h = n ? n.range : L.defaultProps.range,
            y = h && h[0],
            g = t.scale.bandwidth ? t.scale.bandwidth() : 0,
            v = r.scale.bandwidth ? r.scale.bandwidth() : 0,
            b = a.map(function (e, a) {
              var l = (0, z.F$)(e, d),
                h = (0, z.F$)(e, f),
                b = (!m()(p) && (0, z.F$)(e, p)) || "-",
                w = [
                  {
                    name: m()(t.dataKey) ? i.props.name : t.name || t.dataKey,
                    unit: t.unit || "",
                    value: l,
                    payload: e,
                    dataKey: d,
                    type: c,
                  },
                  {
                    name: m()(r.dataKey) ? i.props.name : r.name || r.dataKey,
                    unit: r.unit || "",
                    value: h,
                    payload: e,
                    dataKey: f,
                    type: c,
                  },
                ];
              "-" !== b &&
                w.push({
                  name: n.name || n.dataKey,
                  unit: n.unit || "",
                  value: b,
                  payload: e,
                  dataKey: p,
                  type: c,
                });
              var B = (0, z.Hv)({
                  axis: t,
                  ticks: s,
                  bandSize: g,
                  entry: e,
                  index: a,
                  dataKey: d,
                }),
                M = (0, z.Hv)({
                  axis: r,
                  ticks: o,
                  bandSize: v,
                  entry: e,
                  index: a,
                  dataKey: f,
                }),
                _ = "-" !== b ? n.scale(b) : y,
                S = Math.sqrt(Math.max(_, 0) / Math.PI);
              return te(
                te({}, e),
                {},
                {
                  cx: B,
                  cy: M,
                  x: B - S,
                  y: M - S,
                  xAxis: t,
                  yAxis: r,
                  zAxis: n,
                  width: 2 * S,
                  height: 2 * S,
                  size: _,
                  node: { x: l, y: h, z: b },
                  tooltipPayload: w,
                  tooltipPosition: { x: B, y: M },
                  payload: e,
                },
                u && u[a] && u[a].props,
              );
            });
          return te({ points: b }, l);
        });
      var ue = r(90291),
        de = r(56886),
        fe = r(52871),
        me = (0, i.z)({
          chartName: "ComposedChart",
          GraphicalChild: [Z.x, I, N.$, ce],
          axisComponents: [
            { axisType: "xAxis", AxisComp: ue.K },
            { axisType: "yAxis", AxisComp: de.B },
            { axisType: "zAxis", AxisComp: L },
          ],
          formatAxisMap: fe.t9,
        });
    },
    8114: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => g });
      var n = r(84148),
        i = r(47427),
        a = r(48679),
        s = r.n(a),
        o = r(5502),
        l = r(76325),
        c = r(90481),
        u = r(94797);
      function d(e) {
        return (
          (d =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          d(e)
        );
      }
      function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                p(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function p(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" !== d(e) || null === e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" !== d(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" === d(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function h(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                i,
                a,
                s,
                o = [],
                l = !0,
                c = !1;
              try {
                if (((a = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = a.call(r)).done) &&
                    (o.push(n.value), o.length !== t);
                    l = !0
                  );
              } catch (e) {
                (c = !0), (i = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((s = r.return()), Object(s) !== s)
                  )
                    return;
                } finally {
                  if (c) throw i;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return y(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return y(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var g = (0, i.forwardRef)(function (e, t) {
        var r = e.aspect,
          a = e.initialDimension,
          d = void 0 === a ? { width: -1, height: -1 } : a,
          f = e.width,
          p = void 0 === f ? "100%" : f,
          y = e.height,
          g = void 0 === y ? "100%" : y,
          v = e.minWidth,
          b = void 0 === v ? 0 : v,
          w = e.minHeight,
          B = e.maxHeight,
          M = e.children,
          _ = e.debounce,
          z = void 0 === _ ? 0 : _,
          S = e.id,
          R = e.className,
          O = e.onResize,
          E = e.style,
          F = void 0 === E ? {} : E,
          D = (0, i.useRef)(null),
          x = (0, i.useRef)();
        (x.current = O),
          (0, i.useImperativeHandle)(t, function () {
            return D;
          });
        var j = h(
            (0, i.useState)({
              containerWidth: d.width,
              containerHeight: d.height,
            }),
            2,
          ),
          T = j[0],
          k = j[1],
          P = (0, i.useCallback)(function (e, t) {
            k(function (r) {
              var n = Math.round(e),
                i = Math.round(t);
              return r.containerWidth === n && r.containerHeight === i
                ? r
                : { containerWidth: n, containerHeight: i };
            });
          }, []);
        (0, i.useEffect)(
          function () {
            var e = function (e) {
              var t,
                r = e[0].contentRect,
                n = r.width,
                i = r.height;
              P(n, i),
                null === (t = x.current) || void 0 === t || t.call(x, n, i);
            };
            z > 0 && (e = s()(e, z, { trailing: !0, leading: !1 }));
            var t = new ResizeObserver(e),
              r = D.current.getBoundingClientRect(),
              n = r.width,
              i = r.height;
            return (
              P(n, i),
              t.observe(D.current),
              function () {
                t.disconnect();
              }
            );
          },
          [P, z],
        );
        var W = (0, i.useMemo)(
          function () {
            var e = T.containerWidth,
              t = T.containerHeight;
            if (e < 0 || t < 0) return null;
            (0, c.Z)(
              (0, l.hU)(p) || (0, l.hU)(g),
              "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",
              p,
              g,
            ),
              (0, c.Z)(
                !r || r > 0,
                "The aspect(%s) must be greater than zero.",
                r,
              );
            var n = (0, l.hU)(p) ? e : p,
              a = (0, l.hU)(g) ? t : g;
            r &&
              r > 0 &&
              (n ? (a = n / r) : a && (n = a * r), B && a > B && (a = B)),
              (0, c.Z)(
                n > 0 || a > 0,
                "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
                n,
                a,
                p,
                g,
                b,
                w,
                r,
              );
            var s =
              !Array.isArray(M) &&
              (0, o.isElement)(M) &&
              (0, u.Gf)(M.type).endsWith("Chart");
            return i.Children.map(M, function (e) {
              return (0, o.isElement)(e)
                ? (0, i.cloneElement)(
                    e,
                    m(
                      { width: n, height: a },
                      s
                        ? {
                            style: m(
                              {
                                height: "100%",
                                width: "100%",
                                maxHeight: a,
                                maxWidth: n,
                              },
                              e.props.style,
                            ),
                          }
                        : {},
                    ),
                  )
                : e;
            });
          },
          [r, M, g, B, w, b, T, p],
        );
        return i.createElement(
          "div",
          {
            id: S ? "".concat(S) : void 0,
            className: (0, n.Z)("recharts-responsive-container", R),
            style: m(
              m({}, F),
              {},
              { width: p, height: g, minWidth: b, minHeight: w, maxHeight: B },
            ),
            ref: D,
          },
          W,
        );
      });
    },
    98758: (e) => {
      "use strict";
      var t = function () {};
      e.exports = t;
    },
    78288: (e, t, r) => {
      "use strict";
      r.d(t, {
        NK: () => u,
        Wx: () => f,
        X3: () => y,
        b8: () => p,
        iC: () => o,
        sj: () => l,
      });
      var n = r(10059),
        i = r(39087),
        a = r(21928);
      const s = n.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.gid || i.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  store_item_type: {
                    n: 2,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  store_item_id: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  store_item_name: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  discount_event_id: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  creator_id: {
                    n: 6,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  rtime32_start_time: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  last_update_time: {
                    n: 8,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  template_json: {
                    n: 9,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  partner_jsondata: {
                    n: 10,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  internal_json: {
                    n: 11,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  deleted: { n: 12, br: i.FE.readBool, bw: i.Xc.writeBool },
                  cancelled: { n: 13, br: i.FE.readBool, bw: i.Xc.writeBool },
                  rtime32_cancel_time: {
                    n: 14,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = i.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDealDetails";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.daily_deal || i.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  daily_deal: { n: 1, c: o },
                  partnerid: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = i.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_CreateDailyDeal_Request";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.gid || i.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = i.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_CreateDailyDeal_Response";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.daily_deal || i.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  daily_deal: { n: 1, c: o },
                  gid: {
                    n: 2,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = i.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_UpdateDailyDeal_Request";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new d();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_UpdateDailyDeal_Response";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.gid || i.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = i.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_DeleteDailyDeal_Request";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new m();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_DeleteDailyDeal_Response";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.gid || i.aR(p.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = i.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_CancelDailyDeal_Request";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new h();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_CancelDailyDeal_Response";
        }
      }
      var y;
      !(function (e) {
        (e.CreateDailyDeal = function (e, t) {
          return e.SendMsg("DailyDeal.CreateDailyDeal#1", (0, a.MD)(l, t), c, {
            ePrivilege: 1,
          });
        }),
          (e.UpdateDailyDeal = function (e, t) {
            return e.SendMsg(
              "DailyDeal.UpdateDailyDeal#1",
              (0, a.MD)(u, t),
              d,
              { ePrivilege: 1 },
            );
          }),
          (e.DeleteDailyDeal = function (e, t) {
            return e.SendMsg(
              "DailyDeal.DeleteDailyDeal#1",
              (0, a.MD)(f, t),
              m,
              { ePrivilege: 1 },
            );
          }),
          (e.CancelDailyDeal = function (e, t) {
            return e.SendMsg(
              "DailyDeal.CancelDailyDeal#1",
              (0, a.MD)(p, t),
              h,
              { ePrivilege: 1 },
            );
          });
      })(y || (y = {}));
    },
    44237: (e, t, r) => {
      "use strict";
      r.d(t, {
        $k: () => D,
        Ax: () => l,
        Bn: () => Z,
        F5: () => g,
        MJ: () => E,
        Pe: () => f,
        SL: () => z,
        UD: () => b,
        nQ: () => M,
        rA: () => R,
        yp: () => T,
      });
      var n = r(10059),
        i = r(39087),
        a = r(21928),
        s = r(80002);
      const o = n.Message;
      class l extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.gid || i.aR(l.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  title: { n: 2, br: i.FE.readString, bw: i.Xc.writeString },
                  type: { n: 3, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  visibility: { n: 4, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  priority: { n: 5, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  association_type: {
                    n: 6,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  associated_id: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  associated_name: {
                    n: 8,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  start_date: {
                    n: 9,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  end_date: {
                    n: 10,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  country_allow: {
                    n: 11,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  country_deny: {
                    n: 12,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  ownership_restrictions_overridden: {
                    n: 13,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  must_own_appid: {
                    n: 14,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  must_not_own_appid: {
                    n: 15,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  must_own_packageid: {
                    n: 16,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  must_not_own_packageid: {
                    n: 17,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  must_have_launched_appid: {
                    n: 18,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  additional_restrictions: {
                    n: 19,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  template_type: {
                    n: 20,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  template_vars: {
                    n: 21,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  flags: { n: 22, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  creator_name: {
                    n: 23,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  template_vars_json: {
                    n: 24,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  additional_restrictions_json: {
                    n: 25,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = i.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessageProto";
        }
      }
      class c extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.gid || i.aR(c.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  title: { n: 2, br: i.FE.readString, bw: i.Xc.writeString },
                  type: { n: 3, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  associated_item_id: { n: 4, c: s.oY },
                  associated_item: { n: 5, c: s.VL },
                  associated_name: {
                    n: 6,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  template_type: {
                    n: 10,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  template_vars_json: {
                    n: 11,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = i.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDisplayMarketingMessage";
        }
      }
      class u extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.country || i.aR(u.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  country: { n: 1, br: i.FE.readString, bw: i.Xc.writeString },
                  anonymous_user: {
                    n: 2,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = i.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetActiveMarketingMessages_Request";
        }
      }
      class d extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.messages || i.aR(d.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  messages: { n: 1, c: l, r: !0, q: !0 },
                  time_next_message_age: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = i.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetActiveMarketingMessages_Response";
        }
      }
      class f extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.include_seen_messages || i.aR(f.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  include_seen_messages: {
                    n: 1,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  country_code: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  elanguage: { n: 3, br: i.FE.readInt32, bw: i.Xc.writeInt32 },
                  operating_system: {
                    n: 4,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                  client_package_version: {
                    n: 5,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                  context: { n: 6, c: s.WJ },
                  data_request: { n: 7, c: s.Qn },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = i.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Request";
        }
      }
      class m extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.messages || i.aR(m.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: { messages: { n: 1, c: p, r: !0, q: !0 } },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = i.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Response";
        }
      }
      class p extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.already_seen || i.aR(p.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  already_seen: { n: 1, br: i.FE.readBool, bw: i.Xc.writeBool },
                  message: { n: 2, c },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = i.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser";
        }
      }
      class h extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.country_code || i.aR(h.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  country_code: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  elanguage: { n: 3, br: i.FE.readInt32, bw: i.Xc.writeInt32 },
                  operating_system: {
                    n: 4,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                  client_package_version: {
                    n: 5,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = i.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Request";
        }
      }
      class y extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.has_pending_messages || i.aR(y.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  has_pending_messages: {
                    n: 1,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  pending_message_count: {
                    n: 2,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = i.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Response";
        }
      }
      class g extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.gid || i.aR(g.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  context: { n: 2, c: s.WJ },
                  data_request: { n: 3, c: s.Qn },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = i.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetDisplayMarketingMessage_Request";
        }
      }
      class v extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.message || i.aR(v.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m || (v.sm_m = { proto: v, fields: { message: { n: 1, c } } }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = i.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetDisplayMarketingMessage_Response";
        }
      }
      class b extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.gid || i.aR(b.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  display_index: {
                    n: 2,
                    d: 0,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  template_type: {
                    n: 3,
                    d: 0,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = i.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_MarkMessageSeen_Notification";
        }
      }
      class w extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.gid || i.aR(w.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = i.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessage_Request";
        }
      }
      class B extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.message || i.aR(B.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = { proto: B, fields: { message: { n: 1, c: l } } }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = i.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessage_Response";
        }
      }
      class M extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.lookup_type || i.aR(M.M()),
            o.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  lookup_type: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  gid: {
                    n: 2,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  message_type: { n: 3, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  gidlist: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: i.FE.readFixed64String,
                    pbr: i.FE.readPackedFixed64String,
                    bw: i.Xc.writeRepeatedFixed64String,
                  },
                  title: { n: 5, br: i.FE.readString, bw: i.Xc.writeString },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = i.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_FindMarketingMessages_Request";
        }
      }
      class _ extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.messages || i.aR(_.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: { messages: { n: 1, c: l, r: !0, q: !0 } },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = i.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_FindMarketingMessages_Response";
        }
      }
      class z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.message || i.aR(z.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  message: { n: 1, c: l },
                  from_json: { n: 2, br: i.FE.readBool, bw: i.Xc.writeBool },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = i.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_CreateMarketingMessage_Request";
        }
      }
      class S extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.gid || i.aR(S.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = i.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_CreateMarketingMessage_Response";
        }
      }
      class R extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.gid || i.aR(R.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  message: { n: 2, c: l },
                  from_json: { n: 3, br: i.FE.readBool, bw: i.Xc.writeBool },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = i.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_UpdateMarketingMessage_Request";
        }
      }
      class O extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new O();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_UpdateMarketingMessage_Response";
        }
      }
      class E extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.gid || i.aR(E.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = i.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DeleteMarketingMessage_Request";
        }
      }
      class F extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new F();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DeleteMarketingMessage_Response";
        }
      }
      class D extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.gid || i.aR(D.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = i.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessageViewerStats_Request";
        }
      }
      class x extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.rt_time_hour || i.aR(x.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  rt_time_hour: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  seen_count: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  template_type: {
                    n: 3,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  display_index: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = i.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessageHourlyStats";
        }
      }
      class j extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.stats || i.aR(j.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: { stats: { n: 1, c: x, r: !0, q: !0 } },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = i.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessageViewerStats_Response";
        }
      }
      class T extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.rt_start_time || i.aR(T.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  rt_start_time: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  rt_end_time: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = i.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request";
        }
      }
      class k extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.stats || i.aR(k.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: { stats: { n: 1, c: x, r: !0, q: !0 } },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = i.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response";
        }
      }
      class P extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.partnerid || i.aR(P.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  partnerid: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = i.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(P.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPartnerReadyToPublishMessages_Request";
        }
      }
      class W extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.messages || i.aR(W.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: { messages: { n: 1, c, r: !0, q: !0 } },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = i.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPartnerReadyToPublishMessages_Response";
        }
      }
      class A extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.gid || i.aR(A.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  partnerid: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = i.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(A.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_PartnerPublishMessage_Request";
        }
      }
      class C extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new C();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_PartnerPublishMessage_Response";
        }
      }
      class I extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.gid || i.aR(I.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  partnerid: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = i.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPartnerMessagePreview_Request";
        }
      }
      class N extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.message || i.aR(N.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = { proto: N, fields: { message: { n: 1, c: l } } }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = i.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPartnerMessagePreview_Response";
        }
      }
      var Z;
      !(function (e) {
        (e.GetActiveMarketingMessages = function (e, t) {
          return e.SendMsg(
            "MarketingMessages.GetActiveMarketingMessages#1",
            (0, a.MD)(u, t),
            d,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetMarketingMessagesForUser = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessagesForUser#1",
              (0, a.MD)(f, t),
              m,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.DoesUserHavePendingMarketingMessages = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.DoesUserHavePendingMarketingMessages#1",
              (0, a.MD)(h, t),
              y,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetDisplayMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessage#1",
              (0, a.MD)(g, t),
              v,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetDisplayMarketingMessageForUser = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessageForUser#1",
              (0, a.MD)(g, t),
              v,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetDisplayMarketingMessageAdmin = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessageAdmin#1",
              (0, a.MD)(g, t),
              v,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.MarkMessageSeen = function (e, t) {
            return e.SendNotification(
              "MarketingMessages.MarkMessageSeen#1",
              (0, a.MD)(b, t),
              { ePrivilege: 1 },
            );
          }),
          (e.GetMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessage#1",
              (0, a.MD)(w, t),
              B,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.CreateMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.CreateMarketingMessage#1",
              (0, a.MD)(z, t),
              S,
              { ePrivilege: 4 },
            );
          }),
          (e.UpdateMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.UpdateMarketingMessage#1",
              (0, a.MD)(R, t),
              O,
              { ePrivilege: 4 },
            );
          }),
          (e.DeleteMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.DeleteMarketingMessage#1",
              (0, a.MD)(E, t),
              F,
              { ePrivilege: 4 },
            );
          }),
          (e.FindMarketingMessages = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.FindMarketingMessages#1",
              (0, a.MD)(M, t),
              _,
              { ePrivilege: 4 },
            );
          }),
          (e.GetMarketingMessageViewerStats = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessageViewerStats#1",
              (0, a.MD)(D, t),
              j,
              { ePrivilege: 4 },
            );
          }),
          (e.GetMarketingMessagesViewerRangeStats = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessagesViewerRangeStats#1",
              (0, a.MD)(T, t),
              k,
              { ePrivilege: 4 },
            );
          }),
          (e.GetPartnerReadyToPublishMessages = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetPartnerReadyToPublishMessages#1",
              (0, a.MD)(P, t),
              W,
              { bConstMethod: !0, ePrivilege: 8, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.PublishPartnerMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.PublishPartnerMessage#1",
              (0, a.MD)(A, t),
              C,
              { bConstMethod: !0, ePrivilege: 8, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetPartnerMessagePreview = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetPartnerMessagePreview#1",
              (0, a.MD)(I, t),
              N,
              { bConstMethod: !0, ePrivilege: 8, eWebAPIKeyRequirement: 2 },
            );
          });
      })(Z || (Z = {}));
    },
    5697: (e, t, r) => {
      "use strict";
      r.d(t, {
        Bp: () => p,
        Fc: () => o,
        I8: () => P,
        IJ: () => l,
        L2: () => I,
        Ng: () => T,
        QN: () => A,
        bn: () => y,
        eh: () => u,
        nd: () => H,
        ow: () => f,
        s6: () => X,
        v9: () => G,
        zP: () => L,
      });
      var n = r(10059),
        i = r(39087),
        a = r(21928);
      const s = n.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.promotion_id || i.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  admin_jsondata: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  partner_jsondata: {
                    n: 3,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  input_jsondata: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  rtime32_start_time: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  rtime32_end_time: {
                    n: 6,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  partner_id: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  input_access_key: {
                    n: 8,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = i.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.plan || i.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m || (l.sm_m = { proto: l, fields: { plan: { n: 1, c: o } } }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = i.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_CreatePlan_Request";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.promotion_id || i.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  input_access_key: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = i.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_CreatePlan_Response";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.plan || i.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  plan: { n: 1, c: o },
                  promotion_id: {
                    n: 2,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = i.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_UpdatePlan_Request";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new d();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_UpdatePlan_Response";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.promotion_id || i.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = i.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlan_Request";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.plan || i.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m || (m.sm_m = { proto: m, fields: { plan: { n: 1, c: o } } }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = i.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlan_Response";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new p();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Request";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.plan || i.aR(h.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { plan: { n: 1, c: o, r: !0, q: !0 } },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = i.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Response";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.promotion_id || i.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = i.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Request";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new g();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Response";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.token || i.aR(v.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  token: { n: 1, br: i.FE.readString, bw: i.Xc.writeString },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = i.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SearchPlan_Request";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.plan || i.aR(b.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { plan: { n: 1, c: o, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = i.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SearchPlan_Response";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.input_access_key || i.aR(w.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  input_access_key: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = i.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByInputAccessKey_Request";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.plan || i.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m || (B.sm_m = { proto: B, fields: { plan: { n: 1, c: o } } }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = i.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByInputAccessKey_Response";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.promotion_id || i.aR(M.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  notification_type: {
                    n: 2,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  only_explicit_email_addresses: {
                    n: 3,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = i.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Request";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new _();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Response";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.promotion_id || i.aR(z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = i.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSentNotification_Request";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.results || i.aR(S.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { results: { n: 1, c: R, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = i.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSentNotification_Response";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.notification_id || i.aR(R.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  notification_id: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  tracking_id: {
                    n: 2,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  email_address: {
                    n: 3,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  accountid: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  status: { n: 5, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  type: { n: 6, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  rt_send_time: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = i.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionNotificationResults";
        }
      }
      class O extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.promotion_id || i.aR(O.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = i.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Request";
        }
      }
      class E extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new E();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Response";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.promotion_id || i.aR(F.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  add: { n: 2, br: i.FE.readBool, bw: i.Xc.writeBool },
                  email_address: {
                    n: 3,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = i.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Request";
        }
      }
      class D extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Response";
        }
      }
      class x extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.spotlight_due_date || i.aR(x.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  spotlight_due_date: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  marketing_message_due_date: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  discount_event_due_date: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = i.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionRequirements";
        }
      }
      class j extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.inviteid || i.aR(j.M()),
            s.initialize(this, e, 0, -1, [16], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  inviteid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  appid: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  invite_account: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  rtinvitetime: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  rtexpiretime: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  type: { n: 6, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  accept_account: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  rtaccepttime: {
                    n: 8,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  rtdatechosen: {
                    n: 9,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  discount_eventid: {
                    n: 10,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  packageid: {
                    n: 11,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  bundleid: {
                    n: 12,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  primary_partnerid: {
                    n: 13,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  deadlines: { n: 14, c: x },
                  notify_partner: {
                    n: 15,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  additional_email: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: i.FE.readString,
                    bw: i.Xc.writeRepeatedString,
                  },
                  promotion_id: {
                    n: 17,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  cancelled: { n: 18, br: i.FE.readBool, bw: i.Xc.writeBool },
                  rtime32_cancel_time: {
                    n: 19,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = i.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvitation";
        }
      }
      class T extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.invite || i.aR(T.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  invite: { n: 1, c: j },
                  queue_email_to_send: {
                    n: 2,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = i.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_SetInvite_Request";
        }
      }
      class k extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.inviteid || i.aR(k.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  inviteid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = i.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_SetInvite_Response";
        }
      }
      class P extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.inviteid || i.aR(P.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  inviteid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  appid: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  packageid: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  bundleid: { n: 4, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  partnerid: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  promotion_id: {
                    n: 6,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = i.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(P.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Request";
        }
      }
      class W extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.invites || i.aR(W.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: { invites: { n: 1, c: j, r: !0, q: !0 } },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = i.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Response";
        }
      }
      class A extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.inviteid || i.aR(A.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  inviteid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  only_notify_additional_email: {
                    n: 2,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = i.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(A.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Request";
        }
      }
      class C extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new C();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Response";
        }
      }
      class I extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.inviteid || i.aR(I.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  inviteid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = i.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Request";
        }
      }
      class N extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.accountid || i.aR(N.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  accountid: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  partnerid: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  email_address: {
                    n: 3,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = i.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInviteReceive";
        }
      }
      class Z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.targets || i.aR(Z.M()),
            s.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  targets: { n: 1, c: N, r: !0, q: !0 },
                  additional_email_address: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.FE.readString,
                    bw: i.Xc.writeRepeatedString,
                  },
                  valve_account_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint32,
                    pbr: i.FE.readPackedUint32,
                    bw: i.Xc.writeRepeatedUint32,
                  },
                  operation_email: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = i.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Z.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Response";
        }
      }
      class L extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.inviteid || i.aR(L.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  inviteid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  rtdatechosen: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  discount_days: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  discount_info: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  skip_discount_event: {
                    n: 5,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = i.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(L.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_AcceptInvite_Request";
        }
      }
      class U extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new U();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_AcceptInvite_Response";
        }
      }
      class X extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.inviteid || i.aR(X.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  inviteid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = i.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(X.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_CancelInvite_Request";
        }
      }
      class q extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new q();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_CancelInvite_Response";
        }
      }
      var H, G;
      !(function (e) {
        (e.CreatePlan = function (e, t) {
          return e.SendMsg(
            "PromotionPlanning.CreatePlan#1",
            (0, a.MD)(l, t),
            c,
            { ePrivilege: 1 },
          );
        }),
          (e.CreateTentativePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.CreateTentativePlan#1",
              (0, a.MD)(l, t),
              c,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlan#1",
              (0, a.MD)(u, t),
              d,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanPartnerInfo = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanPartnerInfo#1",
              (0, a.MD)(u, t),
              d,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanInputData = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanInputData#1",
              (0, a.MD)(u, t),
              d,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.DeletePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.DeletePlan#1",
              (0, a.MD)(y, t),
              g,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlan#1",
              (0, a.MD)(f, t),
              m,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAllActivePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllActivePlan#1",
              (0, a.MD)(p, t),
              h,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SearchPlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SearchPlan#1",
              (0, a.MD)(v, t),
              b,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlanByInputAccessKey = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanByInputAccessKey#1",
              (0, a.MD)(w, t),
              B,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SendNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SendNotification#1",
              (0, a.MD)(M, t),
              _,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetSentNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetSentNotification#1",
              (0, a.MD)(z, t),
              S,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ResendNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.ResendNotification#1",
              (0, a.MD)(O, t),
              E,
              { ePrivilege: 1 },
            );
          }),
          (e.SetPromotionEmailTarget = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SetPromotionEmailTarget#1",
              (0, a.MD)(F, t),
              D,
              { ePrivilege: 1 },
            );
          });
      })(H || (H = {})),
        (function (e) {
          (e.SetInvite = function (e, t) {
            return e.SendMsg(
              "PromotionEventInvites.SetInvite#1",
              (0, a.MD)(T, t),
              k,
              { ePrivilege: 4 },
            );
          }),
            (e.GetInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetInvite#1",
                (0, a.MD)(P, t),
                W,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.AcceptInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.AcceptInvite#1",
                (0, a.MD)(L, t),
                U,
                { ePrivilege: 1 },
              );
            }),
            (e.CancelInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.CancelInvite#1",
                (0, a.MD)(X, t),
                q,
                { ePrivilege: 4 },
              );
            }),
            (e.ResendEmailInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.ResendEmailInvite#1",
                (0, a.MD)(A, t),
                C,
                { ePrivilege: 4 },
              );
            }),
            (e.GetEmailTargets = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetEmailTargets#1",
                (0, a.MD)(I, t),
                Z,
                { ePrivilege: 4 },
              );
            });
        })(G || (G = {}));
    },
  },
]);
