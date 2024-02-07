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
          t.prototype.isBetween = function (e, t, i, n) {
            var a = r(e),
              s = r(t),
              o = "(" === (n = n || "()")[0],
              l = ")" === n[1];
            return (
              ((o ? this.isAfter(a, i) : !this.isBefore(a, i)) &&
                (l ? this.isBefore(s, i) : !this.isAfter(s, i))) ||
              ((o ? this.isBefore(a, i) : !this.isAfter(a, i)) &&
                (l ? this.isAfter(s, i) : !this.isBefore(s, i)))
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
          var i = t.prototype,
            n = function (e) {
              return e && (e.indexOf ? e : e.s);
            },
            a = function (e, t, r, i, a) {
              var s = e.name ? e : e.$locale(),
                o = n(s[t]),
                l = n(s[r]),
                c =
                  o ||
                  l.map(function (e) {
                    return e.slice(0, i);
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
          (i.localeData = function () {
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
        return function (t, r, i) {
          var n = r.prototype,
            a = n.format;
          (i.en.formats = e),
            (n.format = function (t) {
              void 0 === t && (t = "YYYY-MM-DDTHH:mm:ssZ");
              var r = this.$locale().formats,
                i = (function (t, r) {
                  return t.replace(
                    /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                    function (t, i, n) {
                      var a = n && n.toUpperCase();
                      return (
                        i ||
                        r[n] ||
                        e[n] ||
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
              return a.call(this, i);
            });
        };
      })();
    },
    55181: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t, r) {
          var i = function (e, t) {
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
            for (var i = 1; i < t.length; i += 1)
              (t[i].isValid() && !t[i][e](r)) || (r = t[i]);
            return r;
          };
          (r.max = function () {
            var e = [].slice.call(arguments, 0);
            return i("isAfter", e);
          }),
            (r.min = function () {
              var e = [].slice.call(arguments, 0);
              return i("isBefore", e);
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
        return function (i, n, a) {
          var s = n.prototype;
          (a.utc = function (e) {
            return new n({ date: e, utc: !0, args: arguments });
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
          s.utcOffset = function (i, n) {
            var a = this.$utils().u;
            if (a(i))
              return this.$u
                ? 0
                : a(this.$offset)
                ? c.call(this)
                : this.$offset;
            if (
              "string" == typeof i &&
              ((i = (function (e) {
                void 0 === e && (e = "");
                var i = e.match(t);
                if (!i) return null;
                var n = ("" + i[0]).match(r) || ["-", 0, 0],
                  a = n[0],
                  s = 60 * +n[1] + +n[2];
                return 0 === s ? 0 : "+" === a ? s : -s;
              })(i)),
              null === i)
            )
              return this;
            var s = Math.abs(i) <= 16 ? 60 * i : i,
              o = this;
            if (n) return (o.$offset = s), (o.$u = 0 === i), o;
            if (0 !== i) {
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
          var m = s.toDate;
          s.toDate = function (e) {
            return "s" === e && this.$offset
              ? a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
              : m.call(this);
          };
          var d = s.diff;
          s.diff = function (e, t, r) {
            if (e && this.$u === e.$u) return d.call(this, e, t, r);
            var i = this.local(),
              n = a(e).local();
            return d.call(i, n, t, r);
          };
        };
      })();
    },
    48719: (e) => {
      "use strict";
      e.exports = function (e, t, r, i, n, a, s, o) {
        if (!e) {
          var l;
          if (void 0 === t)
            l = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
          else {
            var c = [r, i, n, a, s, o],
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
    51398: (e, t, r) => {
      "use strict";
      r.d(t, { f: () => Ls, kO: () => Vn, Zt: () => Hs });
      var i = r(25630),
        n = r(44348),
        a = r(26082),
        s = r(91610),
        o = r(31945),
        l = r(61968),
        c = r(89659),
        u = r(17600),
        m = r(47427),
        d = r(48719),
        f = r.n(d),
        y = function () {};
      function p(e, t) {
        return void 0 !== e[t];
      }
      function b(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      var B = r(76737),
        g = r(22688),
        h = r(98425),
        w = r(36904);
      function v(e) {
        var t,
          r,
          i = "";
        if ("string" == typeof e || "number" == typeof e) i += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (r = v(e[t])) && (i && (i += " "), (i += r));
          else for (t in e) e[t] && (i && (i += " "), (i += t));
        return i;
      }
      const _ = function () {
        for (var e, t, r = 0, i = ""; r < arguments.length; )
          (e = arguments[r++]) && (t = v(e)) && (i && (i += " "), (i += t));
        return i;
      };
      var M = r(25816),
        z = r.n(M),
        R = "milliseconds",
        F = "seconds",
        S = "minutes",
        O = "hours",
        W = "day",
        E = "week",
        j = "month",
        T = "year",
        D = "decade",
        I = "century",
        x = {
          milliseconds: 1,
          seconds: 1e3,
          minutes: 6e4,
          hours: 36e5,
          day: 864e5,
          week: 6048e5,
        },
        C = { month: 1, year: 12, decade: 120, century: 1200 };
      function P(e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0 ? 29 : 28;
      }
      function A(e, t, r) {
        switch (((e = new Date(e)), r)) {
          case R:
          case F:
          case S:
          case O:
          case W:
          case E:
            return (function (e, t) {
              var r = new Date(+e + t);
              return (function (e, t) {
                var r = e.getTimezoneOffset(),
                  i = t.getTimezoneOffset();
                return new Date(+t + (i - r) * x.minutes);
              })(e, r);
            })(e, t * x[r]);
          case j:
          case T:
          case D:
          case I:
            return (function (e, t) {
              var r = e.getFullYear(),
                i = e.getMonth(),
                n = e.getDate(),
                a = 12 * r + i + t,
                s = Math.trunc(a / 12),
                o = a % 12,
                l = Math.min(
                  n,
                  (function (e) {
                    return [31, P(e), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                  })(s)[o],
                ),
                c = new Date(e);
              return (
                c.setFullYear(s), c.setDate(1), c.setMonth(o), c.setDate(l), c
              );
            })(e, t * C[r]);
        }
        throw new TypeError('Invalid units: "' + r + '"');
      }
      function U(e, t, r) {
        return A(e, -t, r);
      }
      function k(e, t, r) {
        switch (((e = new Date(e)), t)) {
          case I:
          case D:
          case T:
            e = ie(e, 0);
          case j:
            e = re(e, 1);
          case E:
          case W:
            e = ee(e, 0);
          case O:
            e = J(e, 0);
          case S:
            e = Q(e, 0);
          case F:
            e = Y(e, 0);
        }
        return (
          t === D && (e = U(e, ne(e) % 10, "year")),
          t === I && (e = U(e, ne(e) % 100, "year")),
          t === E &&
            (e = (function (e, t, r) {
              var i = (te(e) + 7 - (r || 0)) % 7;
              return void 0 === t ? i : A(e, t - i, W);
            })(e, 0, r)),
          e
        );
      }
      function X(e, t, r) {
        switch (((e = k((e = new Date(e)), t, r)), t)) {
          case I:
          case D:
          case T:
          case j:
          case E:
            (e = U((e = A(e, 1, t)), 1, W)).setHours(23, 59, 59, 999);
            break;
          case W:
            e.setHours(23, 59, 59, 999);
            break;
          case O:
          case S:
          case F:
            e = U((e = A(e, 1, t)), 1, R);
        }
        return e;
      }
      var N = se(function (e, t) {
          return e === t;
        }),
        L = se(function (e, t) {
          return e !== t;
        }),
        q = se(function (e, t) {
          return e > t;
        }),
        Z = se(function (e, t) {
          return e >= t;
        }),
        G = se(function (e, t) {
          return e < t;
        }),
        H = se(function (e, t) {
          return e <= t;
        });
      function V() {
        return new Date(Math.min.apply(Math, arguments));
      }
      function K() {
        return new Date(Math.max.apply(Math, arguments));
      }
      function $(e, t, r, i) {
        return (i = i || "day"), (!t || Z(e, t, i)) && (!r || H(e, r, i));
      }
      var Y = ae("Milliseconds"),
        Q = ae("Seconds"),
        J = ae("Minutes"),
        ee = ae("Hours"),
        te = ae("Day"),
        re = ae("Date"),
        ie = ae("Month"),
        ne = ae("FullYear");
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
        return function (r, i) {
          if (void 0 === i) return r["get" + e]();
          var n = new Date(r);
          return (
            n["set" + e](i),
            t &&
              n["get" + e]() != i &&
              ("Hours" === e ||
                (i >= t && n.getHours() - r.getHours() < Math.floor(i / t))) &&
              n["set" + e](i + t),
            n
          );
        };
      }
      function se(e) {
        return function (t, r, i) {
          return e(+k(t, i), +k(r, i));
        };
      }
      var oe = r(14039),
        le = r(87402);
      const ce = function (e, t, r) {
        var i = -1,
          n = e.length;
        t < 0 && (t = -t > n ? 0 : n + t),
          (r = r > n ? n : r) < 0 && (r += n),
          (n = t > r ? 0 : (r - t) >>> 0),
          (t >>>= 0);
        for (var a = Array(n); ++i < n; ) a[i] = e[i + t];
        return a;
      };
      var ue = r(73380),
        me = r(20787),
        de = 1 / 0;
      const fe = function (e) {
        return e
          ? (e = (0, me.Z)(e)) === de || e === -1 / 0
            ? 17976931348623157e292 * (e < 0 ? -1 : 1)
            : e == e
            ? e
            : 0
          : 0 === e
          ? e
          : 0;
      };
      const ye = function (e) {
        var t = fe(e),
          r = t % 1;
        return t == t ? (r ? t - r : t) : 0;
      };
      var pe = Math.ceil,
        be = Math.max;
      const Be = function (e, t, r) {
        t = (r ? (0, ue.Z)(e, t, r) : void 0 === t) ? 1 : be(ye(t), 0);
        var i = null == e ? 0 : e.length;
        if (!i || t < 1) return [];
        for (var n = 0, a = 0, s = Array(pe(i / t)); n < i; )
          s[a++] = ce(e, n, (n += t));
        return s;
      };
      function ge(e) {
        return (e && e.ownerDocument) || document;
      }
      function he(e, t) {
        return (function (e) {
          var t = ge(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var we = /([A-Z])/g;
      var ve = /^ms-/;
      function _e(e) {
        return (function (e) {
          return e.replace(we, "-$1").toLowerCase();
        })(e).replace(ve, "-ms-");
      }
      var Me =
        /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      const ze = function (e, t) {
        var r = "",
          i = "";
        if ("string" == typeof t)
          return (
            e.style.getPropertyValue(_e(t)) || he(e).getPropertyValue(_e(t))
          );
        Object.keys(t).forEach(function (n) {
          var a = t[n];
          a || 0 === a
            ? !(function (e) {
                return !(!e || !Me.test(e));
              })(n)
              ? (r += _e(n) + ": " + a + ";")
              : (i += n + "(" + a + ") ")
            : e.style.removeProperty(_e(n));
        }),
          i && (r += "transform: " + i + ";"),
          (e.style.cssText += ";" + r);
      };
      function Re(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
          ? e === t || !!(16 & e.compareDocumentPosition(t))
          : void 0;
      }
      function Fe(e) {
        return "window" in e && e.window === e
          ? e
          : ("nodeType" in (t = e) &&
              t.nodeType === document.DOCUMENT_NODE &&
              e.defaultView) ||
              !1;
        var t;
      }
      function Se(e) {
        var t = "pageXOffset" === e ? "scrollLeft" : "scrollTop";
        return function (r, i) {
          var n = Fe(r);
          if (void 0 === i) return n ? n[e] : r[t];
          n ? n.scrollTo(n[e], i) : (r[t] = i);
        };
      }
      const Oe = Se("pageXOffset"),
        We = Se("pageYOffset");
      function Ee(e) {
        var t = ge(e),
          r = { top: 0, left: 0, height: 0, width: 0 },
          i = t && t.documentElement;
        return i && Re(i, e)
          ? (void 0 !== e.getBoundingClientRect &&
              (r = e.getBoundingClientRect()),
            (r = {
              top: r.top + We(i) - (i.clientTop || 0),
              left: r.left + Oe(i) - (i.clientLeft || 0),
              width: r.width,
              height: r.height,
            }))
          : r;
      }
      var je = function (e) {
        return !!e && "offsetParent" in e;
      };
      function Te(e, t) {
        var r,
          i = { top: 0, left: 0 };
        if ("fixed" === ze(e, "position")) r = e.getBoundingClientRect();
        else {
          var n =
            t ||
            (function (e) {
              for (
                var t = ge(e), r = e && e.offsetParent;
                je(r) &&
                "HTML" !== r.nodeName &&
                "static" === ze(r, "position");

              )
                r = r.offsetParent;
              return r || t.documentElement;
            })(e);
          (r = Ee(e)),
            "html" !==
              (function (e) {
                return e.nodeName && e.nodeName.toLowerCase();
              })(n) && (i = Ee(n));
          var a = String(ze(n, "borderTopWidth") || 0);
          i.top += parseInt(a, 10) - We(n) || 0;
          var s = String(ze(n, "borderLeftWidth") || 0);
          i.left += parseInt(s, 10) - Oe(n) || 0;
        }
        var o = String(ze(e, "marginTop") || 0),
          l = String(ze(e, "marginLeft") || 0);
        return (0, g.Z)({}, r, {
          top: r.top - i.top - (parseInt(o, 10) || 0),
          left: r.left - i.left - (parseInt(l, 10) || 0),
        });
      }
      const De = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var Ie = new Date().getTime();
      var xe = "clearTimeout",
        Ce = function (e) {
          var t = new Date().getTime(),
            r = Math.max(0, 16 - (t - Ie)),
            i = setTimeout(e, r);
          return (Ie = t), i;
        },
        Pe = function (e, t) {
          return (
            e + (e ? t[0].toUpperCase() + t.substr(1) : t) + "AnimationFrame"
          );
        };
      De &&
        ["", "webkit", "moz", "o", "ms"].some(function (e) {
          var t = Pe(e, "request");
          return (
            t in window &&
              ((xe = Pe(e, "cancel")),
              (Ce = function (e) {
                return window[t](e);
              })),
            !!Ce
          );
        });
      var Ae = function (e) {
          "function" == typeof window[xe] && window[xe](e);
        },
        Ue = Ce,
        ke = r(42287);
      function Xe() {
        return (0, m.useState)(null);
      }
      const Ne = (e) =>
        e && "function" != typeof e
          ? (t) => {
              e.current = t;
            }
          : e;
      const Le = function (e, t) {
        return (0, m.useMemo)(
          () =>
            (function (e, t) {
              const r = Ne(e),
                i = Ne(t);
              return (e) => {
                r && r(e), i && i(e);
              };
            })(e, t),
          [e, t],
        );
      };
      var qe = "top",
        Ze = "bottom",
        Ge = "right",
        He = "left",
        Ve = "auto",
        Ke = [qe, Ze, Ge, He],
        $e = "start",
        Ye = "end",
        Qe = "clippingParents",
        Je = "viewport",
        et = "popper",
        tt = "reference",
        rt = Ke.reduce(function (e, t) {
          return e.concat([t + "-" + $e, t + "-" + Ye]);
        }, []),
        it = [].concat(Ke, [Ve]).reduce(function (e, t) {
          return e.concat([t, t + "-" + $e, t + "-" + Ye]);
        }, []),
        nt = [
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
          const e = (0, m.useRef)(!0),
            t = (0, m.useRef)(() => e.current);
          return (
            (0, m.useEffect)(
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
          (0, m.useCallback)(
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
      var mt = Math.max,
        dt = Math.min,
        ft = Math.round;
      function yt() {
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
        return !/^((?!chrome|android).)*safari/i.test(yt());
      }
      function bt(e, t, r) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        var i = e.getBoundingClientRect(),
          n = 1,
          a = 1;
        t &&
          ct(e) &&
          ((n = (e.offsetWidth > 0 && ft(i.width) / e.offsetWidth) || 1),
          (a = (e.offsetHeight > 0 && ft(i.height) / e.offsetHeight) || 1));
        var s = (lt(e) ? ot(e) : window).visualViewport,
          o = !pt() && r,
          l = (i.left + (o && s ? s.offsetLeft : 0)) / n,
          c = (i.top + (o && s ? s.offsetTop : 0)) / a,
          u = i.width / n,
          m = i.height / a;
        return {
          width: u,
          height: m,
          top: c,
          right: l + u,
          bottom: c + m,
          left: l,
          x: l,
          y: c,
        };
      }
      function Bt(e) {
        var t = bt(e),
          r = e.offsetWidth,
          i = e.offsetHeight;
        return (
          Math.abs(t.width - r) <= 1 && (r = t.width),
          Math.abs(t.height - i) <= 1 && (i = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: r, height: i }
        );
      }
      function gt(e, t) {
        var r = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (r && ut(r)) {
          var i = t;
          do {
            if (i && e.isSameNode(i)) return !0;
            i = i.parentNode || i.host;
          } while (i);
        }
        return !1;
      }
      function ht(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function wt(e) {
        return ot(e).getComputedStyle(e);
      }
      function vt(e) {
        return ["table", "td", "th"].indexOf(ht(e)) >= 0;
      }
      function _t(e) {
        return ((lt(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function Mt(e) {
        return "html" === ht(e)
          ? e
          : e.assignedSlot || e.parentNode || (ut(e) ? e.host : null) || _t(e);
      }
      function zt(e) {
        return ct(e) && "fixed" !== wt(e).position ? e.offsetParent : null;
      }
      function Rt(e) {
        for (
          var t = ot(e), r = zt(e);
          r && vt(r) && "static" === wt(r).position;

        )
          r = zt(r);
        return r &&
          ("html" === ht(r) ||
            ("body" === ht(r) && "static" === wt(r).position))
          ? t
          : r ||
              (function (e) {
                var t = /firefox/i.test(yt());
                if (
                  /Trident/i.test(yt()) &&
                  ct(e) &&
                  "fixed" === wt(e).position
                )
                  return null;
                var r = Mt(e);
                for (
                  ut(r) && (r = r.host);
                  ct(r) && ["html", "body"].indexOf(ht(r)) < 0;

                ) {
                  var i = wt(r);
                  if (
                    "none" !== i.transform ||
                    "none" !== i.perspective ||
                    "paint" === i.contain ||
                    -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                    (t && "filter" === i.willChange) ||
                    (t && i.filter && "none" !== i.filter)
                  )
                    return r;
                  r = r.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function Ft(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function St(e, t, r) {
        return mt(e, dt(t, r));
      }
      function Ot(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function Wt(e, t) {
        return t.reduce(function (t, r) {
          return (t[r] = e), t;
        }, {});
      }
      const Et = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            r = e.state,
            i = e.name,
            n = e.options,
            a = r.elements.arrow,
            s = r.modifiersData.popperOffsets,
            o = st(r.placement),
            l = Ft(o),
            c = [He, Ge].indexOf(o) >= 0 ? "height" : "width";
          if (a && s) {
            var u = (function (e, t) {
                return Ot(
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
                    : Wt(e, Ke),
                );
              })(n.padding, r),
              m = Bt(a),
              d = "y" === l ? qe : He,
              f = "y" === l ? Ze : Ge,
              y =
                r.rects.reference[c] +
                r.rects.reference[l] -
                s[l] -
                r.rects.popper[c],
              p = s[l] - r.rects.reference[l],
              b = Rt(a),
              B = b
                ? "y" === l
                  ? b.clientHeight || 0
                  : b.clientWidth || 0
                : 0,
              g = y / 2 - p / 2,
              h = u[d],
              w = B - m[c] - u[f],
              v = B / 2 - m[c] / 2 + g,
              _ = St(h, v, w),
              M = l;
            r.modifiersData[i] =
              (((t = {})[M] = _), (t.centerOffset = _ - v), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            r = e.options.element,
            i = void 0 === r ? "[data-popper-arrow]" : r;
          null != i &&
            ("string" != typeof i ||
              (i = t.elements.popper.querySelector(i))) &&
            gt(t.elements.popper, i) &&
            (t.elements.arrow = i);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function jt(e) {
        return e.split("-")[1];
      }
      var Tt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Dt(e) {
        var t,
          r = e.popper,
          i = e.popperRect,
          n = e.placement,
          a = e.variation,
          s = e.offsets,
          o = e.position,
          l = e.gpuAcceleration,
          c = e.adaptive,
          u = e.roundOffsets,
          m = e.isFixed,
          d = s.x,
          f = void 0 === d ? 0 : d,
          y = s.y,
          p = void 0 === y ? 0 : y,
          b = "function" == typeof u ? u({ x: f, y: p }) : { x: f, y: p };
        (f = b.x), (p = b.y);
        var B = s.hasOwnProperty("x"),
          g = s.hasOwnProperty("y"),
          h = He,
          w = qe,
          v = window;
        if (c) {
          var _ = Rt(r),
            M = "clientHeight",
            z = "clientWidth";
          if (
            (_ === ot(r) &&
              "static" !== wt((_ = _t(r))).position &&
              "absolute" === o &&
              ((M = "scrollHeight"), (z = "scrollWidth")),
            n === qe || ((n === He || n === Ge) && a === Ye))
          )
            (w = Ze),
              (p -=
                (m && _ === v && v.visualViewport
                  ? v.visualViewport.height
                  : _[M]) - i.height),
              (p *= l ? 1 : -1);
          if (n === He || ((n === qe || n === Ze) && a === Ye))
            (h = Ge),
              (f -=
                (m && _ === v && v.visualViewport
                  ? v.visualViewport.width
                  : _[z]) - i.width),
              (f *= l ? 1 : -1);
        }
        var R,
          F = Object.assign({ position: o }, c && Tt),
          S =
            !0 === u
              ? (function (e, t) {
                  var r = e.x,
                    i = e.y,
                    n = t.devicePixelRatio || 1;
                  return { x: ft(r * n) / n || 0, y: ft(i * n) / n || 0 };
                })({ x: f, y: p }, ot(r))
              : { x: f, y: p };
        return (
          (f = S.x),
          (p = S.y),
          l
            ? Object.assign(
                {},
                F,
                (((R = {})[w] = g ? "0" : ""),
                (R[h] = B ? "0" : ""),
                (R.transform =
                  (v.devicePixelRatio || 1) <= 1
                    ? "translate(" + f + "px, " + p + "px)"
                    : "translate3d(" + f + "px, " + p + "px, 0)"),
                R),
              )
            : Object.assign(
                {},
                F,
                (((t = {})[w] = g ? p + "px" : ""),
                (t[h] = B ? f + "px" : ""),
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
            r = e.options,
            i = r.gpuAcceleration,
            n = void 0 === i || i,
            a = r.adaptive,
            s = void 0 === a || a,
            o = r.roundOffsets,
            l = void 0 === o || o,
            c = {
              placement: st(t.placement),
              variation: jt(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: n,
              isFixed: "fixed" === t.options.strategy,
            };
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              Dt(
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
                Dt(
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
      var xt = { passive: !0 };
      const Ct = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            r = e.instance,
            i = e.options,
            n = i.scroll,
            a = void 0 === n || n,
            s = i.resize,
            o = void 0 === s || s,
            l = ot(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            a &&
              c.forEach(function (e) {
                e.addEventListener("scroll", r.update, xt);
              }),
            o && l.addEventListener("resize", r.update, xt),
            function () {
              a &&
                c.forEach(function (e) {
                  e.removeEventListener("scroll", r.update, xt);
                }),
                o && l.removeEventListener("resize", r.update, xt);
            }
          );
        },
        data: {},
      };
      var Pt = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function At(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return Pt[e];
        });
      }
      var Ut = { start: "end", end: "start" };
      function kt(e) {
        return e.replace(/start|end/g, function (e) {
          return Ut[e];
        });
      }
      function Xt(e) {
        var t = ot(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function Nt(e) {
        return bt(_t(e)).left + Xt(e).scrollLeft;
      }
      function Lt(e) {
        var t = wt(e),
          r = t.overflow,
          i = t.overflowX,
          n = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(r + n + i);
      }
      function qt(e) {
        return ["html", "body", "#document"].indexOf(ht(e)) >= 0
          ? e.ownerDocument.body
          : ct(e) && Lt(e)
          ? e
          : qt(Mt(e));
      }
      function Zt(e, t) {
        var r;
        void 0 === t && (t = []);
        var i = qt(e),
          n = i === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = ot(i),
          s = n ? [a].concat(a.visualViewport || [], Lt(i) ? i : []) : i,
          o = t.concat(s);
        return n ? o : o.concat(Zt(Mt(s)));
      }
      function Gt(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function Ht(e, t, r) {
        return t === Je
          ? Gt(
              (function (e, t) {
                var r = ot(e),
                  i = _t(e),
                  n = r.visualViewport,
                  a = i.clientWidth,
                  s = i.clientHeight,
                  o = 0,
                  l = 0;
                if (n) {
                  (a = n.width), (s = n.height);
                  var c = pt();
                  (c || (!c && "fixed" === t)) &&
                    ((o = n.offsetLeft), (l = n.offsetTop));
                }
                return { width: a, height: s, x: o + Nt(e), y: l };
              })(e, r),
            )
          : lt(t)
          ? (function (e, t) {
              var r = bt(e, !1, "fixed" === t);
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
          : Gt(
              (function (e) {
                var t,
                  r = _t(e),
                  i = Xt(e),
                  n = null == (t = e.ownerDocument) ? void 0 : t.body,
                  a = mt(
                    r.scrollWidth,
                    r.clientWidth,
                    n ? n.scrollWidth : 0,
                    n ? n.clientWidth : 0,
                  ),
                  s = mt(
                    r.scrollHeight,
                    r.clientHeight,
                    n ? n.scrollHeight : 0,
                    n ? n.clientHeight : 0,
                  ),
                  o = -i.scrollLeft + Nt(e),
                  l = -i.scrollTop;
                return (
                  "rtl" === wt(n || r).direction &&
                    (o += mt(r.clientWidth, n ? n.clientWidth : 0) - a),
                  { width: a, height: s, x: o, y: l }
                );
              })(_t(e)),
            );
      }
      function Vt(e, t, r, i) {
        var n =
            "clippingParents" === t
              ? (function (e) {
                  var t = Zt(Mt(e)),
                    r =
                      ["absolute", "fixed"].indexOf(wt(e).position) >= 0 &&
                      ct(e)
                        ? Rt(e)
                        : e;
                  return lt(r)
                    ? t.filter(function (e) {
                        return lt(e) && gt(e, r) && "body" !== ht(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          a = [].concat(n, [r]),
          s = a[0],
          o = a.reduce(
            function (t, r) {
              var n = Ht(e, r, i);
              return (
                (t.top = mt(n.top, t.top)),
                (t.right = dt(n.right, t.right)),
                (t.bottom = dt(n.bottom, t.bottom)),
                (t.left = mt(n.left, t.left)),
                t
              );
            },
            Ht(e, s, i),
          );
        return (
          (o.width = o.right - o.left),
          (o.height = o.bottom - o.top),
          (o.x = o.left),
          (o.y = o.top),
          o
        );
      }
      function Kt(e) {
        var t,
          r = e.reference,
          i = e.element,
          n = e.placement,
          a = n ? st(n) : null,
          s = n ? jt(n) : null,
          o = r.x + r.width / 2 - i.width / 2,
          l = r.y + r.height / 2 - i.height / 2;
        switch (a) {
          case qe:
            t = { x: o, y: r.y - i.height };
            break;
          case Ze:
            t = { x: o, y: r.y + r.height };
            break;
          case Ge:
            t = { x: r.x + r.width, y: l };
            break;
          case He:
            t = { x: r.x - i.width, y: l };
            break;
          default:
            t = { x: r.x, y: r.y };
        }
        var c = a ? Ft(a) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (s) {
            case $e:
              t[c] = t[c] - (r[u] / 2 - i[u] / 2);
              break;
            case Ye:
              t[c] = t[c] + (r[u] / 2 - i[u] / 2);
          }
        }
        return t;
      }
      function $t(e, t) {
        void 0 === t && (t = {});
        var r = t,
          i = r.placement,
          n = void 0 === i ? e.placement : i,
          a = r.strategy,
          s = void 0 === a ? e.strategy : a,
          o = r.boundary,
          l = void 0 === o ? Qe : o,
          c = r.rootBoundary,
          u = void 0 === c ? Je : c,
          m = r.elementContext,
          d = void 0 === m ? et : m,
          f = r.altBoundary,
          y = void 0 !== f && f,
          p = r.padding,
          b = void 0 === p ? 0 : p,
          B = Ot("number" != typeof b ? b : Wt(b, Ke)),
          g = d === et ? tt : et,
          h = e.rects.popper,
          w = e.elements[y ? g : d],
          v = Vt(
            lt(w) ? w : w.contextElement || _t(e.elements.popper),
            l,
            u,
            s,
          ),
          _ = bt(e.elements.reference),
          M = Kt({
            reference: _,
            element: h,
            strategy: "absolute",
            placement: n,
          }),
          z = Gt(Object.assign({}, h, M)),
          R = d === et ? z : _,
          F = {
            top: v.top - R.top + B.top,
            bottom: R.bottom - v.bottom + B.bottom,
            left: v.left - R.left + B.left,
            right: R.right - v.right + B.right,
          },
          S = e.modifiersData.offset;
        if (d === et && S) {
          var O = S[n];
          Object.keys(F).forEach(function (e) {
            var t = [Ge, Ze].indexOf(e) >= 0 ? 1 : -1,
              r = [qe, Ze].indexOf(e) >= 0 ? "y" : "x";
            F[e] += O[r] * t;
          });
        }
        return F;
      }
      const Yt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            r = e.options,
            i = e.name;
          if (!t.modifiersData[i]._skip) {
            for (
              var n = r.mainAxis,
                a = void 0 === n || n,
                s = r.altAxis,
                o = void 0 === s || s,
                l = r.fallbackPlacements,
                c = r.padding,
                u = r.boundary,
                m = r.rootBoundary,
                d = r.altBoundary,
                f = r.flipVariations,
                y = void 0 === f || f,
                p = r.allowedAutoPlacements,
                b = t.options.placement,
                B = st(b),
                g =
                  l ||
                  (B === b || !y
                    ? [At(b)]
                    : (function (e) {
                        if (st(e) === Ve) return [];
                        var t = At(e);
                        return [kt(e), t, kt(t)];
                      })(b)),
                h = [b].concat(g).reduce(function (e, r) {
                  return e.concat(
                    st(r) === Ve
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var r = t,
                            i = r.placement,
                            n = r.boundary,
                            a = r.rootBoundary,
                            s = r.padding,
                            o = r.flipVariations,
                            l = r.allowedAutoPlacements,
                            c = void 0 === l ? it : l,
                            u = jt(i),
                            m = u
                              ? o
                                ? rt
                                : rt.filter(function (e) {
                                    return jt(e) === u;
                                  })
                              : Ke,
                            d = m.filter(function (e) {
                              return c.indexOf(e) >= 0;
                            });
                          0 === d.length && (d = m);
                          var f = d.reduce(function (t, r) {
                            return (
                              (t[r] = $t(e, {
                                placement: r,
                                boundary: n,
                                rootBoundary: a,
                                padding: s,
                              })[st(r)]),
                              t
                            );
                          }, {});
                          return Object.keys(f).sort(function (e, t) {
                            return f[e] - f[t];
                          });
                        })(t, {
                          placement: r,
                          boundary: u,
                          rootBoundary: m,
                          padding: c,
                          flipVariations: y,
                          allowedAutoPlacements: p,
                        })
                      : r,
                  );
                }, []),
                w = t.rects.reference,
                v = t.rects.popper,
                _ = new Map(),
                M = !0,
                z = h[0],
                R = 0;
              R < h.length;
              R++
            ) {
              var F = h[R],
                S = st(F),
                O = jt(F) === $e,
                W = [qe, Ze].indexOf(S) >= 0,
                E = W ? "width" : "height",
                j = $t(t, {
                  placement: F,
                  boundary: u,
                  rootBoundary: m,
                  altBoundary: d,
                  padding: c,
                }),
                T = W ? (O ? Ge : He) : O ? Ze : qe;
              w[E] > v[E] && (T = At(T));
              var D = At(T),
                I = [];
              if (
                (a && I.push(j[S] <= 0),
                o && I.push(j[T] <= 0, j[D] <= 0),
                I.every(function (e) {
                  return e;
                }))
              ) {
                (z = F), (M = !1);
                break;
              }
              _.set(F, I);
            }
            if (M)
              for (
                var x = function (e) {
                    var t = h.find(function (t) {
                      var r = _.get(t);
                      if (r)
                        return r.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (z = t), "break";
                  },
                  C = y ? 3 : 1;
                C > 0;
                C--
              ) {
                if ("break" === x(C)) break;
              }
            t.placement !== z &&
              ((t.modifiersData[i]._skip = !0),
              (t.placement = z),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function Qt(e, t, r) {
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
      function Jt(e) {
        return [qe, Ge, Ze, He].some(function (t) {
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
            i = e.name,
            n = r.offset,
            a = void 0 === n ? [0, 0] : n,
            s = it.reduce(function (e, r) {
              return (
                (e[r] = (function (e, t, r) {
                  var i = st(e),
                    n = [He, qe].indexOf(i) >= 0 ? -1 : 1,
                    a =
                      "function" == typeof r
                        ? r(Object.assign({}, t, { placement: e }))
                        : r,
                    s = a[0],
                    o = a[1];
                  return (
                    (s = s || 0),
                    (o = (o || 0) * n),
                    [He, Ge].indexOf(i) >= 0 ? { x: o, y: s } : { x: s, y: o }
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
            (t.modifiersData[i] = s);
        },
      };
      const tr = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            r = e.options,
            i = e.name,
            n = r.mainAxis,
            a = void 0 === n || n,
            s = r.altAxis,
            o = void 0 !== s && s,
            l = r.boundary,
            c = r.rootBoundary,
            u = r.altBoundary,
            m = r.padding,
            d = r.tether,
            f = void 0 === d || d,
            y = r.tetherOffset,
            p = void 0 === y ? 0 : y,
            b = $t(t, {
              boundary: l,
              rootBoundary: c,
              padding: m,
              altBoundary: u,
            }),
            B = st(t.placement),
            g = jt(t.placement),
            h = !g,
            w = Ft(B),
            v = "x" === w ? "y" : "x",
            _ = t.modifiersData.popperOffsets,
            M = t.rects.reference,
            z = t.rects.popper,
            R =
              "function" == typeof p
                ? p(Object.assign({}, t.rects, { placement: t.placement }))
                : p,
            F =
              "number" == typeof R
                ? { mainAxis: R, altAxis: R }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, R),
            S = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            O = { x: 0, y: 0 };
          if (_) {
            if (a) {
              var W,
                E = "y" === w ? qe : He,
                j = "y" === w ? Ze : Ge,
                T = "y" === w ? "height" : "width",
                D = _[w],
                I = D + b[E],
                x = D - b[j],
                C = f ? -z[T] / 2 : 0,
                P = g === $e ? M[T] : z[T],
                A = g === $e ? -z[T] : -M[T],
                U = t.elements.arrow,
                k = f && U ? Bt(U) : { width: 0, height: 0 },
                X = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                N = X[E],
                L = X[j],
                q = St(0, M[T], k[T]),
                Z = h
                  ? M[T] / 2 - C - q - N - F.mainAxis
                  : P - q - N - F.mainAxis,
                G = h
                  ? -M[T] / 2 + C + q + L + F.mainAxis
                  : A + q + L + F.mainAxis,
                H = t.elements.arrow && Rt(t.elements.arrow),
                V = H ? ("y" === w ? H.clientTop || 0 : H.clientLeft || 0) : 0,
                K = null != (W = null == S ? void 0 : S[w]) ? W : 0,
                $ = D + G - K,
                Y = St(f ? dt(I, D + Z - K - V) : I, D, f ? mt(x, $) : x);
              (_[w] = Y), (O[w] = Y - D);
            }
            if (o) {
              var Q,
                J = "x" === w ? qe : He,
                ee = "x" === w ? Ze : Ge,
                te = _[v],
                re = "y" === v ? "height" : "width",
                ie = te + b[J],
                ne = te - b[ee],
                ae = -1 !== [qe, He].indexOf(B),
                se = null != (Q = null == S ? void 0 : S[v]) ? Q : 0,
                oe = ae ? ie : te - M[re] - z[re] - se + F.altAxis,
                le = ae ? te + M[re] + z[re] - se - F.altAxis : ne,
                ce =
                  f && ae
                    ? (function (e, t, r) {
                        var i = St(e, t, r);
                        return i > r ? r : i;
                      })(oe, te, le)
                    : St(f ? oe : ie, te, f ? le : ne);
              (_[v] = ce), (O[v] = ce - te);
            }
            t.modifiersData[i] = O;
          }
        },
        requiresIfExists: ["offset"],
      };
      function rr(e, t, r) {
        void 0 === r && (r = !1);
        var i,
          n,
          a = ct(t),
          s =
            ct(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                r = ft(t.width) / e.offsetWidth || 1,
                i = ft(t.height) / e.offsetHeight || 1;
              return 1 !== r || 1 !== i;
            })(t),
          o = _t(t),
          l = bt(e, s, r),
          c = { scrollLeft: 0, scrollTop: 0 },
          u = { x: 0, y: 0 };
        return (
          (a || (!a && !r)) &&
            (("body" !== ht(t) || Lt(o)) &&
              (c =
                (i = t) !== ot(i) && ct(i)
                  ? { scrollLeft: (n = i).scrollLeft, scrollTop: n.scrollTop }
                  : Xt(i)),
            ct(t)
              ? (((u = bt(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
              : o && (u.x = Nt(o))),
          {
            x: l.left + c.scrollLeft - u.x,
            y: l.top + c.scrollTop - u.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function ir(e) {
        var t = new Map(),
          r = new Set(),
          i = [];
        function n(e) {
          r.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!r.has(e)) {
                  var i = t.get(e);
                  i && n(i);
                }
              }),
            i.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            r.has(e.name) || n(e);
          }),
          i
        );
      }
      var nr = { placement: "bottom", modifiers: [], strategy: "absolute" };
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
          i = void 0 === r ? [] : r,
          n = t.defaultOptions,
          a = void 0 === n ? nr : n;
        return function (e, t, r) {
          void 0 === r && (r = a);
          var n,
            s,
            o = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, nr, a),
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
                var n = "function" == typeof r ? r(o.options) : r;
                m(),
                  (o.options = Object.assign({}, a, o.options, n)),
                  (o.scrollParents = {
                    reference: lt(e)
                      ? Zt(e)
                      : e.contextElement
                      ? Zt(e.contextElement)
                      : [],
                    popper: Zt(t),
                  });
                var s,
                  c,
                  d = (function (e) {
                    var t = ir(e);
                    return nt.reduce(function (e, r) {
                      return e.concat(
                        t.filter(function (e) {
                          return e.phase === r;
                        }),
                      );
                    }, []);
                  })(
                    ((s = [].concat(i, o.options.modifiers)),
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
                  (o.orderedModifiers = d.filter(function (e) {
                    return e.enabled;
                  })),
                  o.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      r = e.options,
                      i = void 0 === r ? {} : r,
                      n = e.effect;
                    if ("function" == typeof n) {
                      var a = n({ state: o, name: t, instance: u, options: i }),
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
                      reference: rr(t, Rt(r), "fixed" === o.options.strategy),
                      popper: Bt(r),
                    }),
                      (o.reset = !1),
                      (o.placement = o.options.placement),
                      o.orderedModifiers.forEach(function (e) {
                        return (o.modifiersData[e.name] = Object.assign(
                          {},
                          e.data,
                        ));
                      });
                    for (var i = 0; i < o.orderedModifiers.length; i++)
                      if (!0 !== o.reset) {
                        var n = o.orderedModifiers[i],
                          a = n.fn,
                          s = n.options,
                          l = void 0 === s ? {} : s,
                          m = n.name;
                        "function" == typeof a &&
                          (o =
                            a({ state: o, options: l, name: m, instance: u }) ||
                            o);
                      } else (o.reset = !1), (i = -1);
                  }
                }
              },
              update:
                ((n = function () {
                  return new Promise(function (e) {
                    u.forceUpdate(), e(o);
                  });
                }),
                function () {
                  return (
                    s ||
                      (s = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (s = void 0), e(n());
                        });
                      })),
                    s
                  );
                }),
              destroy: function () {
                m(), (c = !0);
              },
            };
          if (!ar(e, t)) return u;
          function m() {
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
                  i = t.rects.reference,
                  n = t.rects.popper,
                  a = t.modifiersData.preventOverflow,
                  s = $t(t, { elementContext: "reference" }),
                  o = $t(t, { altBoundary: !0 }),
                  l = Qt(s, i),
                  c = Qt(o, n, a),
                  u = Jt(l),
                  m = Jt(c);
                (t.modifiersData[r] = {
                  referenceClippingOffsets: l,
                  popperEscapeOffsets: c,
                  isReferenceHidden: u,
                  hasPopperEscaped: m,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": u,
                      "data-popper-escaped": m,
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
                t.modifiersData[r] = Kt({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            It,
            Ct,
            er,
            Yt,
            tr,
            Et,
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
                i = e.popper;
              if ("removeAttribute" in r) {
                var n = (r.getAttribute("aria-describedby") || "")
                  .split(",")
                  .filter(function (e) {
                    return e.trim() !== i.id;
                  });
                n.length
                  ? r.setAttribute("aria-describedby", n.join(","))
                  : r.removeAttribute("aria-describedby");
              }
            };
          },
          fn: function (e) {
            var t,
              r = e.state.elements,
              i = r.popper,
              n = r.reference,
              a =
                null == (t = i.getAttribute("role")) ? void 0 : t.toLowerCase();
            if (i.id && "tooltip" === a && "setAttribute" in n) {
              var s = n.getAttribute("aria-describedby");
              if (s && -1 !== s.split(",").indexOf(i.id)) return;
              n.setAttribute("aria-describedby", s ? s + "," + i.id : i.id);
            }
          },
        },
        mr = [];
      const dr = function (e, t, r) {
        var i = void 0 === r ? {} : r,
          n = i.enabled,
          a = void 0 === n || n,
          s = i.placement,
          o = void 0 === s ? "bottom" : s,
          l = i.strategy,
          c = void 0 === l ? "absolute" : l,
          u = i.modifiers,
          d = void 0 === u ? mr : u,
          f = (0, B.Z)(i, ["enabled", "placement", "strategy", "modifiers"]),
          y = (0, m.useRef)(),
          p = (0, m.useCallback)(function () {
            var e;
            null == (e = y.current) || e.update();
          }, []),
          b = (0, m.useCallback)(function () {
            var e;
            null == (e = y.current) || e.forceUpdate();
          }, []),
          h = at(
            (0, m.useState)({
              placement: o,
              update: p,
              forceUpdate: b,
              attributes: {},
              styles: { popper: lr(c), arrow: {} },
            }),
          ),
          w = h[0],
          v = h[1],
          _ = (0, m.useMemo)(
            function () {
              return {
                name: "updateStateModifier",
                enabled: !0,
                phase: "write",
                requires: ["computeStyles"],
                fn: function (e) {
                  var t = e.state,
                    r = {},
                    i = {};
                  Object.keys(t.elements).forEach(function (e) {
                    (r[e] = t.styles[e]), (i[e] = t.attributes[e]);
                  }),
                    v({
                      state: t,
                      styles: r,
                      attributes: i,
                      update: p,
                      forceUpdate: b,
                      placement: t.placement,
                    });
                },
              };
            },
            [p, b, v],
          );
        return (
          (0, m.useEffect)(
            function () {
              y.current &&
                a &&
                y.current.setOptions({
                  placement: o,
                  strategy: c,
                  modifiers: [].concat(d, [_, cr]),
                });
            },
            [c, o, _, a],
          ),
          (0, m.useEffect)(
            function () {
              if (a && null != e && null != t)
                return (
                  (y.current = or(
                    e,
                    t,
                    (0, g.Z)({}, f, {
                      placement: o,
                      strategy: c,
                      modifiers: [].concat(d, [ur, _]),
                    }),
                  )),
                  function () {
                    null != y.current &&
                      (y.current.destroy(),
                      (y.current = void 0),
                      v(function (e) {
                        return (0, g.Z)({}, e, {
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
      var fr = !1,
        yr = !1;
      try {
        var pr = {
          get passive() {
            return (fr = !0);
          },
          get once() {
            return (yr = fr = !0);
          },
        };
        De &&
          (window.addEventListener("test", pr, pr),
          window.removeEventListener("test", pr, !0));
      } catch (e) {}
      const br = function (e, t, r, i) {
        if (i && "boolean" != typeof i && !yr) {
          var n = i.once,
            a = i.capture,
            s = r;
          !yr &&
            n &&
            ((s =
              r.__once ||
              function e(i) {
                this.removeEventListener(t, e, a), r.call(this, i);
              }),
            (r.__once = s)),
            e.addEventListener(t, s, fr ? i : a);
        }
        e.addEventListener(t, r, i);
      };
      const Br = function (e, t, r, i) {
        var n = i && "boolean" != typeof i ? i.capture : i;
        e.removeEventListener(t, r, n),
          r.__once && e.removeEventListener(t, r.__once, n);
      };
      const gr = function (e, t, r, i) {
        return (
          br(e, t, r, i),
          function () {
            Br(e, t, r, i);
          }
        );
      };
      const hr = function (e) {
        const t = (0, m.useRef)(e);
        return (
          (0, m.useEffect)(() => {
            t.current = e;
          }, [e]),
          t
        );
      };
      function wr(e) {
        const t = hr(e);
        return (0, m.useCallback)(
          function (...e) {
            return t.current && t.current(...e);
          },
          [t],
        );
      }
      var vr = r(98758),
        _r = r.n(vr);
      const Mr = function (e) {
        return ge(
          (function (e) {
            return e && "setState" in e
              ? ke.findDOMNode(e)
              : null != e
              ? e
              : null;
          })(e),
        );
      };
      var zr = function () {};
      var Rr = function (e) {
        return e && ("current" in e ? e.current : e);
      };
      const Fr = function (e, t, r) {
        var i = void 0 === r ? {} : r,
          n = i.disabled,
          a = i.clickTrigger,
          s = void 0 === a ? "click" : a,
          o = (0, m.useRef)(!1),
          l = t || zr,
          c = (0, m.useCallback)(
            function (t) {
              var r,
                i,
                n = Rr(e);
              _r()(
                !!n,
                "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node",
              ),
                (o.current = !(
                  n &&
                  ((i = t),
                  !(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey)) &&
                  (function (e) {
                    return 0 === e.button;
                  })(t) &&
                  !Re(
                    n,
                    null !=
                      (r =
                        null == t.composedPath ? void 0 : t.composedPath()[0])
                      ? r
                      : t.target,
                  )
                ));
            },
            [e],
          ),
          u = wr(function (e) {
            o.current || l(e);
          }),
          d = wr(function (e) {
            27 === e.keyCode && l(e);
          });
        (0, m.useEffect)(
          function () {
            if (!n && null != e) {
              var t = window.event,
                r = Mr(Rr(e)),
                i = gr(r, s, c, !0),
                a = gr(r, s, function (e) {
                  e !== t ? u(e) : (t = void 0);
                }),
                o = gr(r, "keyup", function (e) {
                  e !== t ? d(e) : (t = void 0);
                }),
                l = [];
              return (
                "ontouchstart" in r.documentElement &&
                  (l = [].slice.call(r.body.children).map(function (e) {
                    return gr(e, "mousemove", zr);
                  })),
                function () {
                  i(),
                    a(),
                    o(),
                    l.forEach(function (e) {
                      return e();
                    });
                }
              );
            }
          },
          [e, n, s, c, u, d],
        );
      };
      var Sr = function (e) {
        var t;
        return "undefined" == typeof document
          ? null
          : null == e
          ? ge().body
          : ("function" == typeof e && (e = e()),
            e && "current" in e && (e = e.current),
            (null != (t = e) && t.nodeType && e) || null);
      };
      function Or(e, t) {
        var r = (0, m.useState)(function () {
            return Sr(e);
          }),
          i = r[0],
          n = r[1];
        if (!i) {
          var a = Sr(e);
          a && n(a);
        }
        return (
          (0, m.useEffect)(
            function () {
              t && i && t(i);
            },
            [t, i],
          ),
          (0, m.useEffect)(
            function () {
              var t = Sr(e);
              t !== i && n(t);
            },
            [e, i],
          ),
          i
        );
      }
      function Wr(e) {
        var t,
          r,
          i,
          n,
          a,
          s = e.enabled,
          o = e.enableEvents,
          l = e.placement,
          c = e.flip,
          u = e.offset,
          m = e.fixed,
          d = e.containerPadding,
          f = e.arrowElement,
          y = e.popperConfig,
          p = void 0 === y ? {} : y,
          b = (function (e) {
            var t = {};
            return Array.isArray(e)
              ? (null == e ||
                  e.forEach(function (e) {
                    t[e.name] = e;
                  }),
                t)
              : e || t;
          })(p.modifiers);
        return (0, g.Z)({}, p, {
          placement: l,
          enabled: s,
          strategy: m ? "fixed" : p.strategy,
          modifiers:
            ((a = (0, g.Z)({}, b, {
              eventListeners: { enabled: o },
              preventOverflow: (0, g.Z)({}, b.preventOverflow, {
                options: d
                  ? (0, g.Z)(
                      { padding: d },
                      null == (t = b.preventOverflow) ? void 0 : t.options,
                    )
                  : null == (r = b.preventOverflow)
                  ? void 0
                  : r.options,
              }),
              offset: {
                options: (0, g.Z)(
                  { offset: u },
                  null == (i = b.offset) ? void 0 : i.options,
                ),
              },
              arrow: (0, g.Z)({}, b.arrow, {
                enabled: !!f,
                options: (0, g.Z)(
                  {},
                  null == (n = b.arrow) ? void 0 : n.options,
                  { element: f },
                ),
              }),
              flip: (0, g.Z)({ enabled: !!c }, b.flip),
            })),
            void 0 === a && (a = {}),
            Array.isArray(a)
              ? a
              : Object.keys(a).map(function (e) {
                  return (a[e].name = e), a[e];
                })),
        });
      }
      var Er = m.forwardRef(function (e, t) {
        var r = e.flip,
          i = e.offset,
          n = e.placement,
          a = e.containerPadding,
          s = void 0 === a ? 5 : a,
          o = e.popperConfig,
          l = void 0 === o ? {} : o,
          c = e.transition,
          u = Xe(),
          d = u[0],
          f = u[1],
          y = Xe(),
          p = y[0],
          b = y[1],
          h = Le(f, t),
          w = Or(e.container),
          v = Or(e.target),
          _ = (0, m.useState)(!e.show),
          M = _[0],
          z = _[1],
          R = dr(
            v,
            d,
            Wr({
              placement: n,
              enableEvents: !!e.show,
              containerPadding: s || 5,
              flip: r,
              offset: i,
              arrowElement: p,
              popperConfig: l,
            }),
          ),
          F = R.styles,
          S = R.attributes,
          O = (0, B.Z)(R, ["styles", "attributes"]);
        e.show ? M && z(!1) : e.transition || M || z(!0);
        var W = e.show || (c && !M);
        if (
          (Fr(d, e.onHide, {
            disabled: !e.rootClose || e.rootCloseDisabled,
            clickTrigger: e.rootCloseEvent,
          }),
          !W)
        )
          return null;
        var E = e.children(
          (0, g.Z)({}, O, {
            show: !!e.show,
            props: (0, g.Z)({}, S.popper, { style: F.popper, ref: h }),
            arrowProps: (0, g.Z)({}, S.arrow, { style: F.arrow, ref: b }),
          }),
        );
        if (c) {
          var j = e.onExit,
            T = e.onExiting,
            D = e.onEnter,
            I = e.onEntering,
            x = e.onEntered;
          E = m.createElement(
            c,
            {
              in: e.show,
              appear: !0,
              onExit: j,
              onExiting: T,
              onExited: function () {
                z(!0), e.onExited && e.onExited.apply(e, arguments);
              },
              onEnter: D,
              onEntering: I,
              onEntered: x,
            },
            E,
          );
        }
        return w ? ke.createPortal(E, w) : null;
      });
      (Er.displayName = "Overlay"),
        (Er.propTypes = {
          show: z().bool,
          placement: z().oneOf(it),
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
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              r[i - 1] = arguments[i];
            var n;
            return e.rootClose
              ? (n = z().func).isRequired.apply(n, [e].concat(r))
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
      const jr = Er;
      var Tr = r(39931);
      const Dr = function (e, t) {
        return (0, Tr.Z)(e, t);
      };
      function Ir(e, t) {
        var r = Fe(e);
        return r ? r.innerHeight : t ? e.clientHeight : Ee(e).height;
      }
      var xr,
        Cr = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function Pr(e, t) {
        if (!xr) {
          var r = document.body,
            i =
              r.matches ||
              r.matchesSelector ||
              r.webkitMatchesSelector ||
              r.mozMatchesSelector ||
              r.msMatchesSelector;
          xr = function (e, t) {
            return i.call(e, t);
          };
        }
        return xr(e, t);
      }
      function Ar(e, t, r) {
        e.closest && !r && e.closest(t);
        var i = e;
        do {
          if (Pr(i, t)) return i;
          i = i.parentElement;
        } while (i && i !== r && i.nodeType === document.ELEMENT_NODE);
        return null;
      }
      const Ur = function (e, t, r, i) {
        for (var n = e.length, a = r + (i ? 1 : -1); i ? a-- : ++a < n; )
          if (t(e[a], a, e)) return a;
        return -1;
      };
      var kr = r(63361),
        Xr = Math.max;
      const Nr = function (e, t, r) {
        var i = null == e ? 0 : e.length;
        if (!i) return -1;
        var n = null == r ? 0 : ye(r);
        return n < 0 && (n = Xr(i + n, 0)), Ur(e, (0, kr.Z)(t, 3), n);
      };
      var Lr = Math.ceil,
        qr = Math.max;
      const Zr = function (e, t, r, i) {
        for (var n = -1, a = qr(Lr((t - e) / (r || 1)), 0), s = Array(a); a--; )
          (s[i ? a : ++n] = e), (e += r);
        return s;
      };
      const Gr = function (e) {
        return function (t, r, i) {
          return (
            i && "number" != typeof i && (0, ue.Z)(t, r, i) && (r = i = void 0),
            (t = fe(t)),
            void 0 === r ? ((r = t), (t = 0)) : (r = fe(r)),
            (i = void 0 === i ? (t < r ? 1 : -1) : fe(i)),
            Zr(t, r, i, e)
          );
        };
      };
      const Hr = Gr();
      var Vr =
        Number.isNaN ||
        function (e) {
          return "number" == typeof e && e != e;
        };
      function Kr(e, t) {
        if (e.length !== t.length) return !1;
        for (var r = 0; r < e.length; r++)
          if (((i = e[r]), (n = t[r]), !(i === n || (Vr(i) && Vr(n)))))
            return !1;
        var i, n;
        return !0;
      }
      function $r(e, t) {
        void 0 === t && (t = Kr);
        var r = null;
        function i() {
          for (var i = [], n = 0; n < arguments.length; n++)
            i[n] = arguments[n];
          if (r && r.lastThis === this && t(i, r.lastArgs)) return r.lastResult;
          var a = e.apply(this, i);
          return (r = { lastResult: a, lastArgs: i, lastThis: this }), a;
        }
        return (
          (i.clear = function () {
            r = null;
          }),
          i
        );
      }
      var Yr = r(50491),
        Qr = r(22665),
        Jr = r(29447),
        ei = r(1662),
        ti = r(10339),
        ri = Jr.Z ? Jr.Z.isConcatSpreadable : void 0;
      const ii = function (e) {
        return (0, ti.Z)(e) || (0, ei.Z)(e) || !!(ri && e && e[ri]);
      };
      const ni = function e(t, r, i, n, a) {
        var s = -1,
          o = t.length;
        for (i || (i = ii), a || (a = []); ++s < o; ) {
          var l = t[s];
          r > 0 && i(l)
            ? r > 1
              ? e(l, r - 1, i, n, a)
              : (0, Qr.Z)(a, l)
            : n || (a[a.length] = l);
        }
        return a;
      };
      var ai = r(57350),
        si = r(8780),
        oi = r(76529);
      const li = function (e, t) {
        var r = e.length;
        for (e.sort(t); r--; ) e[r] = e[r].value;
        return e;
      };
      var ci = r(22350),
        ui = r(71003);
      const mi = function (e, t) {
        if (e !== t) {
          var r = void 0 !== e,
            i = null === e,
            n = e == e,
            a = (0, ui.Z)(e),
            s = void 0 !== t,
            o = null === t,
            l = t == t,
            c = (0, ui.Z)(t);
          if (
            (!o && !c && !a && e > t) ||
            (a && s && l && !o && !c) ||
            (i && s && l) ||
            (!r && l) ||
            !n
          )
            return 1;
          if (
            (!i && !a && !c && e < t) ||
            (c && r && n && !i && !a) ||
            (o && r && n) ||
            (!s && n) ||
            !l
          )
            return -1;
        }
        return 0;
      };
      const di = function (e, t, r) {
        for (
          var i = -1,
            n = e.criteria,
            a = t.criteria,
            s = n.length,
            o = r.length;
          ++i < s;

        ) {
          var l = mi(n[i], a[i]);
          if (l) return i >= o ? l : l * ("desc" == r[i] ? -1 : 1);
        }
        return e.index - t.index;
      };
      var fi = r(97652);
      const yi = function (e, t, r) {
        t = t.length
          ? (0, ai.Z)(t, function (e) {
              return (0, ti.Z)(e)
                ? function (t) {
                    return (0, si.Z)(t, 1 === e.length ? e[0] : e);
                  }
                : e;
            })
          : [fi.Z];
        var i = -1;
        t = (0, ai.Z)(t, (0, ci.Z)(kr.Z));
        var n = (0, oi.Z)(e, function (e, r, n) {
          return {
            criteria: (0, ai.Z)(t, function (t) {
              return t(e);
            }),
            index: ++i,
            value: e,
          };
        });
        return li(n, function (e, t) {
          return di(e, t, r);
        });
      };
      var pi = r(6841);
      const bi = (0, pi.Z)(function (e, t) {
        if (null == e) return [];
        var r = t.length;
        return (
          r > 1 && (0, ue.Z)(e, t[0], t[1])
            ? (t = [])
            : r > 2 && (0, ue.Z)(t[0], t[1], t[2]) && (t = [t[0]]),
          yi(e, ni(t, 1), [])
        );
      });
      var Bi;
      function gi(e) {
        if (((!Bi && 0 !== Bi) || e) && De) {
          var t = document.createElement("div");
          (t.style.position = "absolute"),
            (t.style.top = "-9999px"),
            (t.style.width = "50px"),
            (t.style.height = "50px"),
            (t.style.overflow = "scroll"),
            document.body.appendChild(t),
            (Bi = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return Bi;
      }
      function hi(e, t) {
        var r = Fe(e);
        return r ? r.innerWidth : t ? e.clientWidth : Ee(e).width;
      }
      var wi = r(20281),
        vi = r(78898),
        _i = r(38186),
        Mi = r(45288);
      function zi(e) {
        return (0, wi.Z)(e) || (0, vi.Z)(e) || (0, _i.Z)(e) || (0, Mi.Z)();
      }
      var Ri = r(56375),
        Fi = r(27661),
        Si = r(41682),
        Oi = r(35943),
        Wi = r(24018),
        Ei = r(65731),
        ji = r(33806);
      const Ti = function (e, t) {
        return e && (0, Ei.Z)(t, (0, ji.Z)(t), e);
      };
      var Di = r(47429);
      const Ii = function (e, t) {
        return e && (0, Ei.Z)(t, (0, Di.Z)(t), e);
      };
      var xi = r(14293),
        Ci = r(76740),
        Pi = r(63128);
      const Ai = function (e, t) {
        return (0, Ei.Z)(e, (0, Pi.Z)(e), t);
      };
      var Ui = r(12168),
        ki = r(96169);
      const Xi = Object.getOwnPropertySymbols
        ? function (e) {
            for (var t = []; e; )
              (0, Qr.Z)(t, (0, Pi.Z)(e)), (e = (0, Ui.Z)(e));
            return t;
          }
        : ki.Z;
      const Ni = function (e, t) {
        return (0, Ei.Z)(e, Xi(e), t);
      };
      var Li = r(40204),
        qi = r(47642);
      const Zi = function (e) {
        return (0, qi.Z)(e, Di.Z, Xi);
      };
      var Gi = r(93101),
        Hi = Object.prototype.hasOwnProperty;
      const Vi = function (e) {
        var t = e.length,
          r = new e.constructor(t);
        return (
          t &&
            "string" == typeof e[0] &&
            Hi.call(e, "index") &&
            ((r.index = e.index), (r.input = e.input)),
          r
        );
      };
      var Ki = r(68372);
      const $i = function (e, t) {
        var r = t ? (0, Ki.Z)(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength);
      };
      var Yi = /\w*$/;
      const Qi = function (e) {
        var t = new e.constructor(e.source, Yi.exec(e));
        return (t.lastIndex = e.lastIndex), t;
      };
      var Ji = Jr.Z ? Jr.Z.prototype : void 0,
        en = Ji ? Ji.valueOf : void 0;
      const tn = function (e) {
        return en ? Object(en.call(e)) : {};
      };
      var rn = r(39994);
      const nn = function (e, t, r) {
        var i = e.constructor;
        switch (t) {
          case "[object ArrayBuffer]":
            return (0, Ki.Z)(e);
          case "[object Boolean]":
          case "[object Date]":
            return new i(+e);
          case "[object DataView]":
            return $i(e, r);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return (0, rn.Z)(e, r);
          case "[object Map]":
          case "[object Set]":
            return new i();
          case "[object Number]":
          case "[object String]":
            return new i(e);
          case "[object RegExp]":
            return Qi(e);
          case "[object Symbol]":
            return tn(e);
        }
      };
      var an = r(5620),
        sn = r(73127),
        on = r(97703);
      const ln = function (e) {
        return (0, on.Z)(e) && "[object Map]" == (0, Gi.Z)(e);
      };
      var cn = r(35656),
        un = cn.Z && cn.Z.isMap;
      const mn = un ? (0, ci.Z)(un) : ln;
      var dn = r(78325);
      const fn = function (e) {
        return (0, on.Z)(e) && "[object Set]" == (0, Gi.Z)(e);
      };
      var yn = cn.Z && cn.Z.isSet;
      const pn = yn ? (0, ci.Z)(yn) : fn;
      var bn = "[object Arguments]",
        Bn = "[object Function]",
        gn = "[object Object]",
        hn = {};
      (hn[bn] =
        hn["[object Array]"] =
        hn["[object ArrayBuffer]"] =
        hn["[object DataView]"] =
        hn["[object Boolean]"] =
        hn["[object Date]"] =
        hn["[object Float32Array]"] =
        hn["[object Float64Array]"] =
        hn["[object Int8Array]"] =
        hn["[object Int16Array]"] =
        hn["[object Int32Array]"] =
        hn["[object Map]"] =
        hn["[object Number]"] =
        hn[gn] =
        hn["[object RegExp]"] =
        hn["[object Set]"] =
        hn["[object String]"] =
        hn["[object Symbol]"] =
        hn["[object Uint8Array]"] =
        hn["[object Uint8ClampedArray]"] =
        hn["[object Uint16Array]"] =
        hn["[object Uint32Array]"] =
          !0),
        (hn["[object Error]"] = hn[Bn] = hn["[object WeakMap]"] = !1);
      const wn = function e(t, r, i, n, a, s) {
        var o,
          l = 1 & r,
          c = 2 & r,
          u = 4 & r;
        if ((i && (o = a ? i(t, n, a, s) : i(t)), void 0 !== o)) return o;
        if (!(0, dn.Z)(t)) return t;
        var m = (0, ti.Z)(t);
        if (m) {
          if (((o = Vi(t)), !l)) return (0, Ci.Z)(t, o);
        } else {
          var d = (0, Gi.Z)(t),
            f = d == Bn || "[object GeneratorFunction]" == d;
          if ((0, sn.Z)(t)) return (0, xi.Z)(t, l);
          if (d == gn || d == bn || (f && !a)) {
            if (((o = c || f ? {} : (0, an.Z)(t)), !l))
              return c ? Ni(t, Ii(o, t)) : Ai(t, Ti(o, t));
          } else {
            if (!hn[d]) return a ? t : {};
            o = nn(t, d, l);
          }
        }
        s || (s = new Si.Z());
        var y = s.get(t);
        if (y) return y;
        s.set(t, o),
          pn(t)
            ? t.forEach(function (n) {
                o.add(e(n, r, i, n, t, s));
              })
            : mn(t) &&
              t.forEach(function (n, a) {
                o.set(a, e(n, r, i, a, t, s));
              });
        var p = u ? (c ? Zi : Li.Z) : c ? Di.Z : ji.Z,
          b = m ? void 0 : p(t);
        return (
          (0, Oi.Z)(b || t, function (n, a) {
            b && (n = t[(a = n)]), (0, Wi.Z)(o, a, e(n, r, i, a, t, s));
          }),
          o
        );
      };
      var vn = r(82120);
      const _n = function (e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0;
      };
      const Mn = function (e, t) {
        return t.length < 2 ? e : (0, si.Z)(e, ce(t, 0, -1));
      };
      var zn = r(79594);
      const Rn = function (e, t) {
        return (
          (t = (0, vn.Z)(t, e)),
          null == (e = Mn(e, t)) || delete e[(0, zn.Z)(_n(t))]
        );
      };
      var Fn = r(86445);
      const Sn = function (e) {
        return (0, Fn.Z)(e) ? void 0 : e;
      };
      const On = function (e) {
        return (null == e ? 0 : e.length) ? ni(e, 1) : [];
      };
      var Wn = r(88597),
        En = r(89902);
      const jn = (function (e) {
        return (0, En.Z)((0, Wn.Z)(e, void 0, On), e + "");
      })(function (e, t) {
        var r = {};
        if (null == e) return r;
        var i = !1;
        (t = (0, ai.Z)(t, function (t) {
          return (t = (0, vn.Z)(t, e)), i || (i = t.length > 1), t;
        })),
          (0, Ei.Z)(e, Zi(e), r),
          i && (r = wn(r, 7, Sn));
        for (var n = t.length; n--; ) Rn(r, t[n]);
        return r;
      });
      var Tn = r(35773),
        Dn = Object.prototype,
        In = Dn.hasOwnProperty;
      const xn = (0, pi.Z)(function (e, t) {
        e = Object(e);
        var r = -1,
          i = t.length,
          n = i > 2 ? t[2] : void 0;
        for (n && (0, ue.Z)(t[0], t[1], n) && (i = 1); ++r < i; )
          for (
            var a = t[r], s = (0, Di.Z)(a), o = -1, l = s.length;
            ++o < l;

          ) {
            var c = s[o],
              u = e[c];
            (void 0 === u || ((0, Tn.Z)(u, Dn[c]) && !In.call(e, c))) &&
              (e[c] = a[c]);
          }
        return e;
      });
      var Cn = r(15156),
        Pn = r(3873),
        An = r(43967),
        Un = r(85812);
      const kn = function (e, t, r) {
        var i = (0, ti.Z)(e),
          n = i || (0, sn.Z)(e) || (0, Un.Z)(e);
        if (((t = (0, kr.Z)(t, 4)), null == r)) {
          var a = e && e.constructor;
          r = n
            ? i
              ? new a()
              : []
            : (0, dn.Z)(e) && (0, An.Z)(a)
            ? (0, Cn.Z)((0, Ui.Z)(e))
            : {};
        }
        return (
          (n ? Oi.Z : Pn.Z)(e, function (e, i, n) {
            return t(r, e, i, n);
          }),
          r
        );
      };
      var Xn = r(70590);
      const Nn = function (e, t) {
        var r = {};
        return (
          (t = (0, kr.Z)(t, 3)),
          (0, Pn.Z)(e, function (e, i, n) {
            (0, Xn.Z)(r, i, t(e, i, n));
          }),
          r
        );
      };
      r(74830), r(36657), r(87235), r(33159), r(33385), r(55181), r(81770);
      function Ln(e) {
        return e.children;
      }
      var qn = "PREV",
        Zn = "NEXT",
        Gn = "TODAY",
        Hn = "DATE",
        Vn = {
          MONTH: "month",
          WEEK: "week",
          WORK_WEEK: "work_week",
          DAY: "day",
          AGENDA: "agenda",
        },
        Kn = Object.keys(Vn).map(function (e) {
          return Vn[e];
        });
      function $n(e, t) {
        e && e.apply(null, [].concat(t));
      }
      z().oneOfType([z().string, z().func]),
        z().any,
        z().func,
        z().oneOfType([
          z().arrayOf(z().oneOf(Kn)),
          z().objectOf(function (e, t) {
            if (-1 !== Kn.indexOf(t) && "boolean" == typeof e[t]) return null;
            for (
              var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), n = 2;
              n < r;
              n++
            )
              i[n - 2] = arguments[n];
            return z().elementType.apply(z(), [e, t].concat(i));
          }),
        ]),
        z().oneOfType([z().oneOf(["overlap", "no-overlap"]), z().func]);
      var Yn = { seconds: 1e3, minutes: 6e4, hours: 36e5, day: 864e5 };
      function Qn(e, t) {
        var r = k(e, "month");
        return k(r, "week", t.startOfWeek());
      }
      function Jn(e, t) {
        var r = X(e, "month");
        return X(r, "week", t.startOfWeek());
      }
      function ea(e, t) {
        for (var r = Qn(e, t), i = Jn(e, t), n = []; H(r, i, "day"); )
          n.push(r), (r = A(r, 1, "day"));
        return n;
      }
      function ta(e, t) {
        var r = k(e, t);
        return N(r, e) ? r : A(r, 1, t);
      }
      function ra(e, t) {
        for (
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "day",
            i = e,
            n = [];
          H(i, t, r);

        )
          n.push(i), (i = A(i, 1, r));
        return n;
      }
      function ia(e, t) {
        return null == t && null == e
          ? null
          : (null == t && (t = new Date()),
            null == e && (e = new Date()),
            (e = k(e, "day")),
            (e = ee(e, ee(t))),
            (e = J(e, J(t))),
            (e = Q(e, Q(t))),
            Y(e, Y(t)));
      }
      function na(e) {
        return 0 === ee(e) && 0 === J(e) && 0 === Q(e) && 0 === Y(e);
      }
      function aa(e, t, r) {
        return r && "milliseconds" !== r
          ? Math.round(Math.abs(+k(e, r) / Yn[r] - +k(t, r) / Yn[r]))
          : Math.abs(+e - +t);
      }
      var sa = z().oneOfType([z().string, z().func]);
      function oa(e, t, r, i, n) {
        var a = "function" == typeof i ? i(r, n, e) : t.call(e, r, i, n);
        return (
          f()(
            null == a || "string" == typeof a,
            "`localizer format(..)` must return a string, null, or undefined",
          ),
          a
        );
      }
      function la(e, t, r) {
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
      function ca(e, t) {
        return e.getTimezoneOffset() - t.getTimezoneOffset();
      }
      function ua(e, t) {
        return aa(e, t, "minutes") + ca(e, t);
      }
      function ma(e) {
        var t = k(e, "day");
        return aa(t, e, "minutes") + ca(t, e);
      }
      function da(e, t) {
        return G(e, t, "day");
      }
      function fa(e, t, r) {
        return N(e, t, "minutes") ? Z(t, r, "minutes") : q(t, r, "minutes");
      }
      function ya(e) {
        var t = e.evtA,
          r = t.start,
          i = t.end,
          n = t.allDay,
          a = e.evtB,
          s = a.start,
          o = a.end,
          l = a.allDay,
          c = +k(r, "day") - +k(s, "day"),
          u = aa(r, ta(i, "day"), "day"),
          m = aa(s, ta(o, "day"), "day");
        return (
          c ||
          Math.max(m, 1) - Math.max(u, 1) ||
          !!l - !!n ||
          +r - +s ||
          +i - +o
        );
      }
      function pa(e) {
        var t = e.event,
          r = t.start,
          i = t.end,
          n = e.range,
          a = n.start,
          s = n.end,
          o = k(r, "day"),
          l = H(o, s, "day"),
          c = L(o, i, "minutes") ? q(i, a, "minutes") : Z(i, a, "minutes");
        return l && c;
      }
      function ba(e, t) {
        return N(e, t, "day");
      }
      function Ba(e, t) {
        return na(e) && na(t);
      }
      var ga = (0, o.Z)(function e(t) {
        var r = this;
        (0, s.Z)(this, e),
          f()(
            "function" == typeof t.format,
            "date localizer `format(..)` must be a function",
          ),
          f()(
            "function" == typeof t.firstOfWeek,
            "date localizer `firstOfWeek(..)` must be a function",
          ),
          (this.propType = t.propType || sa),
          (this.formats = t.formats),
          (this.format = function () {
            for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++)
              i[n] = arguments[n];
            return oa.apply(void 0, [r, t.format].concat(i));
          }),
          (this.startOfWeek = t.firstOfWeek),
          (this.merge = t.merge || ia),
          (this.inRange = t.inRange || $),
          (this.lt = t.lt || G),
          (this.lte = t.lte || H),
          (this.gt = t.gt || q),
          (this.gte = t.gte || Z),
          (this.eq = t.eq || N),
          (this.neq = t.neq || L),
          (this.startOf = t.startOf || k),
          (this.endOf = t.endOf || X),
          (this.add = t.add || A),
          (this.range = t.range || ra),
          (this.diff = t.diff || aa),
          (this.ceil = t.ceil || ta),
          (this.min = t.min || V),
          (this.max = t.max || K),
          (this.minutes = t.minutes || J),
          (this.firstVisibleDay = t.firstVisibleDay || Qn),
          (this.lastVisibleDay = t.lastVisibleDay || Jn),
          (this.visibleDays = t.visibleDays || ea),
          (this.getSlotDate = t.getSlotDate || la),
          (this.getTimezoneOffset =
            t.getTimezoneOffset ||
            function (e) {
              return e.getTimezoneOffset();
            }),
          (this.getDstOffset = t.getDstOffset || ca),
          (this.getTotalMin = t.getTotalMin || ua),
          (this.getMinutesFromMidnight = t.getMinutesFromMidnight || ma),
          (this.continuesPrior = t.continuesPrior || da),
          (this.continuesAfter = t.continuesAfter || fa),
          (this.sortEvents = t.sortEvents || ya),
          (this.inEventRange = t.inEventRange || pa),
          (this.isSameDate = t.isSameDate || ba),
          (this.startAndEndAreDateOnly = t.startAndEndAreDateOnly || Ba),
          (this.segmentOffset = t.browserTZOffset ? t.browserTZOffset() : 0);
      });
      function ha(e, t, r, n) {
        var a = (0, i.Z)((0, i.Z)({}, e.formats), r);
        return (0, i.Z)(
          (0, i.Z)({}, e),
          {},
          {
            messages: n,
            startOfWeek: function () {
              return e.startOfWeek(t);
            },
            format: function (r, i) {
              return e.format(r, a[i] || i, t);
            },
          },
        );
      }
      var wa = {
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
      var va = [
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
        _a = (function (e) {
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
                    d = e.localizer,
                    f = e.continuesPrior,
                    y = e.continuesAfter,
                    p = e.accessors,
                    b = e.getters,
                    B = e.children,
                    g = e.components,
                    h = g.event,
                    w = g.eventWrapper,
                    v = e.slotStart,
                    M = e.slotEnd,
                    z = (0, n.Z)(e, va);
                  delete z.resizable;
                  var R = p.title(a),
                    F = p.tooltip(a),
                    S = p.end(a),
                    O = p.start(a),
                    W = p.allDay(a),
                    E = o || W || d.diff(O, d.ceil(S, "day"), "day") > 1,
                    j = b.eventProp(a, O, S, s),
                    T = m.createElement(
                      "div",
                      { className: "rbc-event-content", title: F || void 0 },
                      h
                        ? m.createElement(h, {
                            event: a,
                            continuesPrior: f,
                            continuesAfter: y,
                            title: R,
                            isAllDay: W,
                            localizer: d,
                            slotStart: v,
                            slotEnd: M,
                          })
                        : R,
                    );
                  return m.createElement(
                    w,
                    Object.assign({}, this.props, { type: "date" }),
                    m.createElement(
                      "div",
                      Object.assign({}, z, {
                        tabIndex: 0,
                        style: (0, i.Z)((0, i.Z)({}, j.style), t),
                        className: _("rbc-event", r, j.className, {
                          "rbc-selected": s,
                          "rbc-event-allday": E,
                          "rbc-event-continues-prior": f,
                          "rbc-event-continues-after": y,
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
                      "function" == typeof B ? B(T) : T,
                    ),
                  );
                },
              },
            ]),
            r
          );
        })(m.Component);
      function Ma(e, t) {
        return !(!e || null == t) && Dr(e, t);
      }
      function za(e, t) {
        return (e.right - e.left) / t;
      }
      function Ra(e, t, r, i) {
        var n = za(e, i);
        return r
          ? i - 1 - Math.floor((t - e.left) / n)
          : Math.floor((t - e.left) / n);
      }
      function Fa(e) {
        var t,
          r,
          i,
          n = e.containerRef,
          a = e.accessors,
          s = e.getters,
          o = e.selected,
          l = e.components,
          c = e.localizer,
          u = e.position,
          d = e.show,
          f = e.events,
          y = e.slotStart,
          p = e.slotEnd,
          b = e.onSelect,
          B = e.onDoubleClick,
          g = e.onKeyPress,
          h = e.handleDragStart,
          w = e.popperRef,
          v = e.target,
          _ = e.offset;
        (r = (t = { ref: w, callback: d }).ref),
          (i = t.callback),
          (0, m.useEffect)(
            function () {
              var e = function (e) {
                r.current && !r.current.contains(e.target) && i();
              };
              return (
                document.addEventListener("mousedown", e),
                function () {
                  document.removeEventListener("mousedown", e);
                }
              );
            },
            [r, i],
          ),
          (0, m.useLayoutEffect)(
            function () {
              var e = (function (e) {
                  var t = e.target,
                    r = e.offset,
                    i = e.container,
                    n = e.box,
                    a = Ee(t),
                    s = a.top,
                    o = a.left,
                    l = a.width,
                    c = a.height,
                    u = Ee(i),
                    m = u.top,
                    d = u.left,
                    f = u.width,
                    y = u.height,
                    p = Ee(n),
                    b = p.width,
                    B = p.height,
                    g = m + y,
                    h = d + f,
                    w = s + B,
                    v = o + b,
                    _ = r.x,
                    M = r.y;
                  return {
                    topOffset: w > g ? s - B - M : s + M + c,
                    leftOffset: v > h ? o + _ - b + l : o + _,
                  };
                })({
                  target: v,
                  offset: _,
                  container: n.current,
                  box: w.current,
                }),
                t = e.topOffset,
                r = e.leftOffset;
              (w.current.style.top = "".concat(t, "px")),
                (w.current.style.left = "".concat(r, "px"));
            },
            [_.x, _.y, v],
          );
        var M = u.width,
          z = { minWidth: M + M / 2 };
        return m.createElement(
          "div",
          { style: z, className: "rbc-overlay", ref: w },
          m.createElement(
            "div",
            { className: "rbc-overlay-header" },
            c.format(y, "dayHeaderFormat"),
          ),
          f.map(function (e, t) {
            return m.createElement(_a, {
              key: t,
              type: "popup",
              localizer: c,
              event: e,
              getters: s,
              onSelect: b,
              accessors: a,
              components: l,
              onDoubleClick: B,
              onKeyPress: g,
              continuesPrior: c.lt(a.end(e), y, "day"),
              continuesAfter: c.gte(a.start(e), p, "day"),
              slotStart: y,
              slotEnd: p,
              selected: Ma(e, o),
              draggable: !0,
              onDragStart: function () {
                return h(e);
              },
              onDragEnd: function () {
                return d();
              },
            });
          }),
        );
      }
      var Sa = m.forwardRef(function (e, t) {
        return m.createElement(Fa, Object.assign({}, e, { popperRef: t }));
      });
      function Oa(e) {
        var t = e.containerRef,
          r = e.popupOffset,
          i = void 0 === r ? 5 : r,
          n = e.overlay,
          a = e.accessors,
          s = e.localizer,
          o = e.components,
          l = e.getters,
          c = e.selected,
          u = e.handleSelectEvent,
          d = e.handleDoubleClickEvent,
          f = e.handleKeyPressEvent,
          y = e.handleDragStart,
          p = e.onHide,
          b = e.overlayDisplay,
          B = (0, m.useRef)(null);
        if (!n.position) return null;
        var g = i;
        isNaN(i) || (g = { x: i, y: i });
        var h = n.position,
          w = n.events,
          v = n.date,
          _ = n.end;
        return m.createElement(
          jr,
          {
            rootClose: !0,
            flip: !0,
            show: !0,
            placement: "bottom",
            onHide: p,
            target: n.target,
          },
          function (e) {
            var r = e.props;
            return m.createElement(
              Sa,
              Object.assign({}, r, {
                containerRef: t,
                ref: B,
                target: n.target,
                offset: g,
                accessors: a,
                getters: l,
                selected: c,
                components: o,
                localizer: s,
                position: h,
                show: b,
                events: w,
                slotStart: v,
                slotEnd: _,
                onSelect: u,
                onDoubleClick: d,
                onKeyPress: f,
                handleDragStart: y,
              }),
            );
          },
        );
      }
      Sa.propTypes = {
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
      var Wa = m.forwardRef(function (e, t) {
        return m.createElement(Oa, Object.assign({}, e, { containerRef: t }));
      });
      function Ea(e, t) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : document;
        return gr(r, e, t, { passive: !1 });
      }
      function ja(e, t) {
        return !!(function (e, t) {
          var r = t.clientX,
            i = t.clientY;
          return Ar(document.elementFromPoint(r, i), ".rbc-event", e);
        })(e, t);
      }
      function Ta(e, t) {
        return !!(function (e, t) {
          var r = t.clientX,
            i = t.clientY;
          return Ar(document.elementFromPoint(r, i), ".rbc-show-more", e);
        })(e, t);
      }
      function Da(e) {
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
      var Ia = (function () {
        function e(t) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i = r.global,
            n = void 0 !== i && i,
            a = r.longPressThreshold,
            o = void 0 === a ? 250 : a,
            l = r.validContainers,
            c = void 0 === l ? [] : l;
          (0, s.Z)(this, e),
            (this.isDetached = !1),
            (this.container = t),
            (this.globalMouse = !t || n),
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
            (this._removeTouchMoveWindowListener = Ea(
              "touchmove",
              function () {},
              window,
            )),
            (this._removeKeyDownListener = Ea("keydown", this._keyListener)),
            (this._removeKeyUpListener = Ea("keyup", this._keyListener)),
            (this._removeDropFromOutsideListener = Ea(
              "drop",
              this._dropFromOutsideListener,
            )),
            (this._removeDragOverFromOutsideListener = Ea(
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
                    i = 1;
                  i < t;
                  i++
                )
                  r[i - 1] = arguments[i];
                var n;
                return (
                  (this._listeners[e] || []).forEach(function (e) {
                    void 0 === n && (n = e.apply(void 0, r));
                  }),
                  n
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
                return !(!t || !this.selecting) && xa(t, Ca(e));
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
                  i = null,
                  n = null,
                  a = null,
                  s = function (t) {
                    (i = setTimeout(function () {
                      l(), e(t);
                    }, r.longPressThreshold)),
                      (n = Ea("touchmove", function () {
                        return l();
                      })),
                      (a = Ea("touchend", function () {
                        return l();
                      }));
                  },
                  o = Ea("touchstart", s),
                  l = function () {
                    i && clearTimeout(i),
                      n && n(),
                      a && a(),
                      (i = null),
                      (n = null),
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
                  t = Ea("mousedown", function (t) {
                    e._removeInitialEventListener(),
                      e._handleInitialEvent(t),
                      (e._removeInitialEventListener = Ea(
                        "mousedown",
                        e._handleInitialEvent,
                      ));
                  }),
                  r = Ea("touchstart", function (t) {
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
                var t = Da(e),
                  r = t.pageX,
                  i = t.pageY,
                  n = t.clientX,
                  a = t.clientY;
                this.emit("dropFromOutside", {
                  x: r,
                  y: i,
                  clientX: n,
                  clientY: a,
                }),
                  e.preventDefault();
              },
            },
            {
              key: "_dragOverFromOutsideListener",
              value: function (e) {
                var t = Da(e),
                  r = t.pageX,
                  i = t.pageY,
                  n = t.clientX,
                  a = t.clientY;
                this.emit("dragOverFromOutside", {
                  x: r,
                  y: i,
                  clientX: n,
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
                    r = Da(e),
                    i = r.clientX,
                    n = r.clientY,
                    s = r.pageX,
                    o = r.pageY,
                    l = this.container();
                  if (
                    3 !== e.which &&
                    2 !== e.button &&
                    ((u = i),
                    (m = n),
                    !(c = l) || Re(c, document.elementFromPoint(u, m)))
                  ) {
                    var c, u, m;
                    if (!this.globalMouse && l && !Re(l, e.target)) {
                      var d = (function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0;
                          "object" !== (0, a.Z)(e) &&
                            (e = { top: e, left: e, right: e, bottom: e });
                          return e;
                        })(0),
                        f = d.top,
                        y = d.left,
                        p = d.bottom,
                        b = d.right;
                      if (
                        !xa(
                          {
                            top: (t = Ca(l)).top - f,
                            left: t.left - y,
                            bottom: t.bottom + p,
                            right: t.right + b,
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
                          clientX: i,
                          clientY: n,
                        }),
                      )
                    )
                      switch (e.type) {
                        case "mousedown":
                          (this._removeEndListener = Ea(
                            "mouseup",
                            this._handleTerminatingEvent,
                          )),
                            (this._onEscListener = Ea(
                              "keydown",
                              this._handleTerminatingEvent,
                            )),
                            (this._removeMoveListener = Ea(
                              "mousemove",
                              this._handleMoveEvent,
                            ));
                          break;
                        case "touchstart":
                          this._handleMoveEvent(e),
                            (this._removeEndListener = Ea(
                              "touchend",
                              this._handleTerminatingEvent,
                            )),
                            (this._removeMoveListener = Ea(
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
                var t = Da(e),
                  r = t.pageX,
                  i = t.pageY;
                if (
                  ((this.selecting = !1),
                  this._removeEndListener && this._removeEndListener(),
                  this._removeMoveListener && this._removeMoveListener(),
                  this._initialEventData)
                ) {
                  var n = !this.container || Re(this.container(), e.target),
                    a = this._isWithinValidContainer(e),
                    s = this._selectRect,
                    o = this.isClick(r, i);
                  return (
                    (this._initialEventData = null),
                    "Escape" !== e.key && a
                      ? o && n
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
                var t = Da(e),
                  r = t.pageX,
                  i = t.pageY,
                  n = t.clientX,
                  a = t.clientY,
                  s = new Date().getTime();
                return this._lastClickData &&
                  s - this._lastClickData.timestamp < 250
                  ? ((this._lastClickData = null),
                    this.emit("doubleClick", {
                      x: r,
                      y: i,
                      clientX: n,
                      clientY: a,
                    }))
                  : ((this._lastClickData = { timestamp: s }),
                    this.emit("click", { x: r, y: i, clientX: n, clientY: a }));
              },
            },
            {
              key: "_handleMoveEvent",
              value: function (e) {
                if (null !== this._initialEventData && !this.isDetached) {
                  var t = this._initialEventData,
                    r = t.x,
                    i = t.y,
                    n = Da(e),
                    a = n.pageX,
                    s = n.pageY,
                    o = Math.abs(r - a),
                    l = Math.abs(i - s),
                    c = Math.min(a, r),
                    u = Math.min(s, i),
                    m = this.selecting;
                  (!this.isClick(a, s) || m || o || l) &&
                    ((this.selecting = !0),
                    (this._selectRect = {
                      top: u,
                      left: c,
                      x: a,
                      y: s,
                      right: c + o,
                      bottom: u + l,
                    }),
                    m || this.emit("selectStart", this._initialEventData),
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
                  i = r.x,
                  n = r.y;
                return (
                  !r.isTouch && Math.abs(e - i) <= 5 && Math.abs(t - n) <= 5
                );
              },
            },
          ]),
          e
        );
      })();
      function xa(e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          i = Ca(e),
          n = i.top,
          a = i.left,
          s = i.right,
          o = void 0 === s ? a : s,
          l = i.bottom,
          c = void 0 === l ? n : l,
          u = Ca(t),
          m = u.top,
          d = u.left,
          f = u.right,
          y = void 0 === f ? d : f,
          p = u.bottom;
        return !(
          c - r < m ||
          n + r > (void 0 === p ? m : p) ||
          o - r < d ||
          a + r > y
        );
      }
      function Ca(e) {
        if (!e.getBoundingClientRect) return e;
        var t = e.getBoundingClientRect(),
          r = t.left + Pa("left"),
          i = t.top + Pa("top");
        return {
          top: i,
          left: r,
          right: (e.offsetWidth || 0) + r,
          bottom: (e.offsetHeight || 0) + i,
        };
      }
      function Pa(e) {
        return "left" === e
          ? window.pageXOffset || document.body.scrollLeft || 0
          : "top" === e
          ? window.pageYOffset || document.body.scrollTop || 0
          : void 0;
      }
      var Aa = (function (e) {
          (0, l.Z)(r, e);
          var t = (0, c.Z)(r);
          function r(e, i) {
            var n;
            return (
              (0, s.Z)(this, r),
              ((n = t.call(this, e, i)).state = { selecting: !1 }),
              (n.containerRef = (0, m.createRef)()),
              n
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
                    i = e.getters,
                    n = e.date,
                    a = e.components.dateCellWrapper,
                    s = e.localizer,
                    o = this.state,
                    l = o.selecting,
                    c = o.startIdx,
                    u = o.endIdx,
                    d = r();
                  return m.createElement(
                    "div",
                    { className: "rbc-row-bg", ref: this.containerRef },
                    t.map(function (e, r) {
                      var o = l && r >= c && r <= u,
                        f = i.dayProp(e),
                        y = f.className,
                        p = f.style;
                      return m.createElement(
                        a,
                        { key: r, value: e, range: t },
                        m.createElement("div", {
                          style: p,
                          className: _(
                            "rbc-day-bg",
                            y,
                            o && "rbc-selected-cell",
                            s.isSameDate(e, d) && "rbc-today",
                            n && s.neq(n, e, "month") && "rbc-off-range-bg",
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
                    r = (this._selector = new Ia(this.props.container, {
                      longPressThreshold: this.props.longPressThreshold,
                    })),
                    n = function (r, i) {
                      if (!ja(t, r) && !Ta(t, r)) {
                        var n = Ca(t),
                          a = e.props,
                          s = a.range,
                          o = a.rtl;
                        if (
                          ((c = n),
                          (m = (u = r).x),
                          (d = u.y) >= c.top &&
                            d <= c.bottom &&
                            m >= c.left &&
                            m <= c.right)
                        ) {
                          var l = Ra(n, r.x, o, s.length);
                          e._selectSlot({
                            startIdx: l,
                            endIdx: l,
                            action: i,
                            box: r,
                          });
                        }
                      }
                      var c, u, m, d;
                      (e._initial = {}), e.setState({ selecting: !1 });
                    };
                  r.on("selecting", function (i) {
                    var n = e.props,
                      a = n.range,
                      s = n.rtl,
                      o = -1,
                      l = -1;
                    if (
                      (e.state.selecting ||
                        ($n(e.props.onSelectStart, [i]),
                        (e._initial = { x: i.x, y: i.y })),
                      r.isSelected(t))
                    ) {
                      var c = Ca(t),
                        u = (function (e, t, r, i, n) {
                          var a = -1,
                            s = -1,
                            o = i - 1,
                            l = za(t, i),
                            c = Ra(t, r.x, n, i),
                            u = t.top < r.y && t.bottom > r.y,
                            m = t.top < e.y && t.bottom > e.y,
                            d = e.y > t.bottom,
                            f = t.top > e.y;
                          return (
                            r.top < t.top &&
                              r.bottom > t.bottom &&
                              ((a = 0), (s = o)),
                            u &&
                              (f
                                ? ((a = 0), (s = c))
                                : d && ((a = c), (s = o))),
                            m &&
                              ((a = s =
                                n
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
                        })(e._initial, c, i, a.length, s);
                      (o = u.startIdx), (l = u.endIdx);
                    }
                    e.setState({ selecting: !0, startIdx: o, endIdx: l });
                  }),
                    r.on("beforeSelect", function (t) {
                      if ("ignoreEvents" === e.props.selectable)
                        return !ja(e.containerRef.current, t);
                    }),
                    r.on("click", function (e) {
                      return n(e, "click");
                    }),
                    r.on("doubleClick", function (e) {
                      return n(e, "doubleClick");
                    }),
                    r.on("select", function (t) {
                      e._selectSlot(
                        (0, i.Z)(
                          (0, i.Z)({}, e.state),
                          {},
                          { action: "select", bounds: t },
                        ),
                      ),
                        (e._initial = {}),
                        e.setState({ selecting: !1 }),
                        $n(e.props.onSelectEnd, [e.state]);
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
                    i = e.action,
                    n = e.bounds,
                    a = e.box;
                  -1 !== t &&
                    -1 !== r &&
                    this.props.onSelectSlot &&
                    this.props.onSelectSlot({
                      start: r,
                      end: t,
                      action: i,
                      bounds: n,
                      box: a,
                      resourceId: this.props.resourceId,
                    });
                },
              },
            ]),
            r
          );
        })(m.Component),
        Ua =
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
        ka = function (e, t) {
          var r = e.selected;
          e.isAllDay;
          var i = e.accessors,
            n = e.getters,
            a = e.onSelect,
            s = e.onDoubleClick,
            o = e.onKeyPress,
            l = e.localizer,
            c = e.slotMetrics,
            u = e.components,
            d = e.resizable,
            f = c.continuesPrior(t),
            y = c.continuesAfter(t);
          return m.createElement(_a, {
            event: t,
            getters: n,
            localizer: l,
            accessors: i,
            components: u,
            onSelect: a,
            onDoubleClick: s,
            onKeyPress: o,
            continuesPrior: f,
            continuesAfter: y,
            slotStart: c.first,
            slotEnd: c.last,
            selected: Ma(t, r),
            resizable: d,
          });
        },
        Xa = function (e, t, r) {
          var i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : " ",
            n = (Math.abs(t) / e) * 100 + "%";
          return m.createElement(
            "div",
            {
              key: r,
              className: "rbc-row-segment",
              style: { WebkitFlexBasis: n, flexBasis: n, maxWidth: n },
            },
            i,
          );
        },
        Na = (function (e) {
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
                    i = t.slotMetrics.slots,
                    n = t.className,
                    a = 1;
                  return m.createElement(
                    "div",
                    { className: _(n, "rbc-row") },
                    r.reduce(function (t, r, n) {
                      var s = r.event,
                        o = r.left,
                        l = r.right,
                        c = r.span,
                        u = "_lvl_" + n,
                        m = o - a,
                        d = ka(e.props, s);
                      return (
                        m && t.push(Xa(i, m, "".concat(u, "_gap"))),
                        t.push(Xa(i, c, u, d)),
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
        })(m.Component);
      function La(e) {
        var t = e.dateRange,
          r = e.unit,
          i = void 0 === r ? "day" : r,
          n = e.localizer;
        return { first: t[0], last: n.add(t[t.length - 1], 1, i) };
      }
      function qa(e) {
        var t,
          r,
          i,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1 / 0,
          a = [],
          s = [];
        for (t = 0; t < e.length; t++) {
          for (i = e[t], r = 0; r < a.length && Ga(i, a[r]); r++);
          r >= n ? s.push(i) : (a[r] || (a[r] = [])).push(i);
        }
        for (t = 0; t < a.length; t++)
          a[t].sort(function (e, t) {
            return e.left - t.left;
          });
        return { levels: a, extra: s };
      }
      function Za(e, t, r, i, n) {
        var a = { start: i.start(e), end: i.end(e) },
          s = { start: t, end: r };
        return n.inEventRange({ event: a, range: s });
      }
      function Ga(e, t) {
        return t.some(function (t) {
          return t.left <= e.right && t.right >= e.left;
        });
      }
      function Ha(e, t, r, i) {
        var n = { start: r.start(e), end: r.end(e), allDay: r.allDay(e) },
          a = { start: r.start(t), end: r.end(t), allDay: r.allDay(t) };
        return i.sortEvents({ evtA: n, evtB: a });
      }
      Na.defaultProps = (0, i.Z)({}, Ua);
      var Va = function (e, t) {
          return e.left <= t && e.right >= t;
        },
        Ka = function (e, t) {
          return e.filter(function (e) {
            return Va(e, t);
          }).length;
        },
        $a = (function (e) {
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
                      i = qa(t).levels[0],
                      n = 1,
                      a = 1,
                      s = [];
                    n <= r;

                  ) {
                    var o = "_lvl_" + n,
                      l =
                        i.filter(function (e) {
                          return Va(e, n);
                        })[0] || {},
                      c = l.event,
                      u = l.left,
                      d = l.right,
                      f = l.span;
                    if (c) {
                      var y = Math.max(0, u - a);
                      if (this.canRenderSlotEvent(u, f)) {
                        var p = ka(this.props, c);
                        y && s.push(Xa(r, y, o + "_gap")),
                          s.push(Xa(r, f, o, p)),
                          (a = n = d + 1);
                      } else
                        y && s.push(Xa(r, y, o + "_gap")),
                          s.push(Xa(r, 1, o, this.renderShowMore(t, n))),
                          (a = n += 1);
                    } else n++;
                  }
                  return m.createElement("div", { className: "rbc-row" }, s);
                },
              },
              {
                key: "canRenderSlotEvent",
                value: function (e, t) {
                  var r = this.props.segments;
                  return Hr(e, e + t).every(function (e) {
                    return 1 === Ka(r, e);
                  });
                },
              },
              {
                key: "renderShowMore",
                value: function (e, t) {
                  var r = this,
                    i = this.props.localizer,
                    n = Ka(e, t);
                  return (
                    !!n &&
                    m.createElement(
                      "button",
                      {
                        type: "button",
                        key: "sm_" + t,
                        className: _("rbc-button-link", "rbc-show-more"),
                        onClick: function (e) {
                          return r.showMore(t, e);
                        },
                      },
                      i.messages.showMore(n),
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
        })(m.Component);
      $a.defaultProps = (0, i.Z)({}, Ua);
      var Ya = function (e) {
          var t = e.children;
          return m.createElement(
            "div",
            { className: "rbc-row-content-scroll-container" },
            t,
          );
        },
        Qa = function (e, t) {
          return e[0].range === t[0].range && e[0].events === t[0].events;
        };
      function Ja() {
        return $r(function (e) {
          for (
            var t = e.range,
              r = e.events,
              n = e.maxRows,
              a = e.minRows,
              s = e.accessors,
              o = e.localizer,
              l = La({ dateRange: t, localizer: o }),
              c = l.first,
              u = l.last,
              m = r.map(function (e) {
                return (function (e, t, r, i) {
                  var n = La({ dateRange: t, localizer: i }),
                    a = n.first,
                    s = n.last,
                    o = i.diff(a, s, "day"),
                    l = i.max(i.startOf(r.start(e), "day"), a),
                    c = i.min(i.ceil(r.end(e), "day"), s),
                    u = Nr(t, function (e) {
                      return i.isSameDate(e, l);
                    }),
                    m = i.diff(l, c, "day");
                  return (
                    (m = Math.min(m, o)),
                    {
                      event: e,
                      span: (m = Math.max(m - i.segmentOffset, 1)),
                      left: u + 1,
                      right: Math.max(u + m, 1),
                    }
                  );
                })(e, t, s, o);
              }),
              d = qa(m, Math.max(n - 1, 1)),
              f = d.levels,
              y = d.extra,
              p = y.length > 0 ? a - 1 : a;
            f.length < p;

          )
            f.push([]);
          return {
            first: c,
            last: u,
            levels: f,
            extra: y,
            range: t,
            slots: t.length,
            clone: function (t) {
              return Ja()((0, i.Z)((0, i.Z)({}, e), t));
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
              return m
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
        }, Qa);
      }
      var es = (function (e) {
        (0, l.Z)(r, e);
        var t = (0, c.Z)(r);
        function r() {
          var e;
          (0, s.Z)(this, r);
          for (var i = arguments.length, n = new Array(i), a = 0; a < i; a++)
            n[a] = arguments[a];
          return (
            ((e = t.call.apply(t, [this].concat(n))).handleSelectSlot =
              function (t) {
                var r = e.props,
                  i = r.range;
                (0, r.onSelectSlot)(i.slice(t.start, t.end + 1), t);
              }),
            (e.handleShowMore = function (t, r) {
              var i,
                n,
                a,
                s = e.props,
                o = s.range,
                l = s.onShowMore,
                c = e.slotMetrics(e.props),
                u = ((i = e.containerRef.current),
                (n = ".rbc-row-bg"),
                Cr(i.querySelectorAll(n)))[0];
              u && (a = u.children[t - 1]),
                l(c.getEventsForSlot(t), o[t - 1], a, t, r);
            }),
            (e.getContainer = function () {
              var t = e.props.container;
              return t ? t() : e.containerRef.current;
            }),
            (e.renderHeadingCell = function (t, r) {
              var i = e.props,
                n = i.renderHeader,
                a = i.getNow,
                s = i.localizer;
              return n({
                date: t,
                key: "header_".concat(r),
                className: _(
                  "rbc-date-cell",
                  s.isSameDate(t, a()) && "rbc-now",
                ),
              });
            }),
            (e.renderDummy = function () {
              var t = e.props,
                r = t.className,
                i = t.range,
                n = t.renderHeader,
                a = t.showAllEvents;
              return m.createElement(
                "div",
                { className: r, ref: e.containerRef },
                m.createElement(
                  "div",
                  {
                    className: _(
                      "rbc-row-content",
                      a && "rbc-row-content-scrollable",
                    ),
                  },
                  n &&
                    m.createElement(
                      "div",
                      { className: "rbc-row", ref: e.headingRowRef },
                      i.map(e.renderHeadingCell),
                    ),
                  m.createElement(
                    "div",
                    { className: "rbc-row", ref: e.eventRowRef },
                    m.createElement(
                      "div",
                      { className: "rbc-row-segment" },
                      m.createElement(
                        "div",
                        { className: "rbc-event" },
                        m.createElement(
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
            (e.containerRef = (0, m.createRef)()),
            (e.headingRowRef = (0, m.createRef)()),
            (e.eventRowRef = (0, m.createRef)()),
            (e.slotMetrics = Ja()),
            e
          );
        }
        return (
          (0, o.Z)(r, [
            {
              key: "getRowLimit",
              value: function () {
                var e,
                  t = Ir(this.eventRowRef.current),
                  r =
                    null !== (e = this.headingRowRef) &&
                    void 0 !== e &&
                    e.current
                      ? Ir(this.headingRowRef.current)
                      : 0,
                  i = Ir(this.containerRef.current) - r;
                return Math.max(Math.floor(i / t), 1);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.date,
                  r = e.rtl,
                  i = e.range,
                  n = e.className,
                  a = e.selected,
                  s = e.selectable,
                  o = e.renderForMeasure,
                  l = e.accessors,
                  c = e.getters,
                  u = e.components,
                  d = e.getNow,
                  f = e.renderHeader,
                  y = e.onSelect,
                  p = e.localizer,
                  b = e.onSelectStart,
                  B = e.onSelectEnd,
                  g = e.onDoubleClick,
                  h = e.onKeyPress,
                  w = e.resourceId,
                  v = e.longPressThreshold,
                  M = e.isAllDay,
                  z = e.resizable,
                  R = e.showAllEvents;
                if (o) return this.renderDummy();
                var F = this.slotMetrics(this.props),
                  S = F.levels,
                  O = F.extra,
                  W = R ? Ya : Ln,
                  E = u.weekWrapper,
                  j = {
                    selected: a,
                    accessors: l,
                    getters: c,
                    localizer: p,
                    components: u,
                    onSelect: y,
                    onDoubleClick: g,
                    onKeyPress: h,
                    resourceId: w,
                    slotMetrics: F,
                    resizable: z,
                  };
                return m.createElement(
                  "div",
                  { className: n, role: "rowgroup", ref: this.containerRef },
                  m.createElement(Aa, {
                    localizer: p,
                    date: t,
                    getNow: d,
                    rtl: r,
                    range: i,
                    selectable: s,
                    container: this.getContainer,
                    getters: c,
                    onSelectStart: b,
                    onSelectEnd: B,
                    onSelectSlot: this.handleSelectSlot,
                    components: u,
                    longPressThreshold: v,
                    resourceId: w,
                  }),
                  m.createElement(
                    "div",
                    {
                      className: _(
                        "rbc-row-content",
                        R && "rbc-row-content-scrollable",
                      ),
                      role: "row",
                    },
                    f &&
                      m.createElement(
                        "div",
                        { className: "rbc-row ", ref: this.headingRowRef },
                        i.map(this.renderHeadingCell),
                      ),
                    m.createElement(
                      W,
                      null,
                      m.createElement(
                        E,
                        Object.assign({ isAllDay: M }, j, {
                          rtl: this.props.rtl,
                        }),
                        S.map(function (e, t) {
                          return m.createElement(
                            Na,
                            Object.assign({ key: t, segments: e }, j),
                          );
                        }),
                        !!O.length &&
                          m.createElement(
                            $a,
                            Object.assign(
                              { segments: O, onShowMore: this.handleShowMore },
                              j,
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
      })(m.Component);
      es.defaultProps = { minRows: 0, maxRows: 1 / 0 };
      var ts = function (e) {
          var t = e.label;
          return m.createElement(
            "span",
            { role: "columnheader", "aria-sort": "none" },
            t,
          );
        },
        rs = function (e) {
          var t = e.label,
            r = e.drilldownView,
            i = e.onDrillDown;
          return r
            ? m.createElement(
                "button",
                {
                  type: "button",
                  className: "rbc-button-link",
                  onClick: i,
                  role: "cell",
                },
                t,
              )
            : m.createElement("span", null, t);
        },
        is = ["date", "className"],
        ns = (function (e) {
          (0, l.Z)(r, e);
          var t = (0, c.Z)(r);
          function r() {
            var e;
            (0, s.Z)(this, r);
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
              a[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(a))).getContainer =
                function () {
                  return e.containerRef.current;
                }),
              (e.renderWeek = function (t, r) {
                var i = e.props,
                  n = i.events,
                  a = i.components,
                  s = i.selectable,
                  o = i.getNow,
                  l = i.selected,
                  c = i.date,
                  u = i.localizer,
                  d = i.longPressThreshold,
                  f = i.accessors,
                  y = i.getters,
                  p = i.showAllEvents,
                  b = e.state,
                  B = b.needLimitMeasure,
                  g = b.rowLimit,
                  h = (function (e, t, r, i, n) {
                    return e.filter(function (e) {
                      return Za(e, t, r, i, n);
                    });
                  })((0, le.Z)(n), t[0], t[t.length - 1], f, u);
                return (
                  h.sort(function (e, t) {
                    return Ha(e, t, f, u);
                  }),
                  m.createElement(es, {
                    key: r,
                    ref: 0 === r ? e.slotRowRef : void 0,
                    container: e.getContainer,
                    className: "rbc-month-row",
                    getNow: o,
                    date: c,
                    range: t,
                    events: h,
                    maxRows: p ? 1 / 0 : g,
                    selected: l,
                    selectable: s,
                    components: a,
                    accessors: f,
                    getters: y,
                    localizer: u,
                    renderHeader: e.readerDateHeading,
                    renderForMeasure: B,
                    onShowMore: e.handleShowMore,
                    onSelect: e.handleSelectEvent,
                    onDoubleClick: e.handleDoubleClickEvent,
                    onKeyPress: e.handleKeyPressEvent,
                    onSelectSlot: e.handleSelectSlot,
                    longPressThreshold: d,
                    rtl: e.props.rtl,
                    resizable: e.props.resizable,
                    showAllEvents: p,
                  })
                );
              }),
              (e.readerDateHeading = function (t) {
                var r = t.date,
                  i = t.className,
                  a = (0, n.Z)(t, is),
                  s = e.props,
                  o = s.date,
                  l = s.getDrilldownView,
                  c = s.localizer,
                  u = c.neq(r, o, "month"),
                  d = c.isSameDate(r, o),
                  f = l(r),
                  y = c.format(r, "dateFormat"),
                  p = e.props.components.dateHeader || rs;
                return m.createElement(
                  "div",
                  Object.assign({}, a, {
                    className: _(i, u && "rbc-off-range", d && "rbc-current"),
                    role: "cell",
                  }),
                  m.createElement(p, {
                    label: y,
                    date: r,
                    drilldownView: f,
                    isOffRange: u,
                    onDrillDown: function (t) {
                      return e.handleHeadingClick(r, f, t);
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
              (e.handleHeadingClick = function (t, r, i) {
                i.preventDefault(),
                  e.clearSelection(),
                  $n(e.props.onDrillDown, [t, r]);
              }),
              (e.handleSelectEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, r = new Array(t), i = 0;
                  i < t;
                  i++
                )
                  r[i] = arguments[i];
                $n(e.props.onSelectEvent, r);
              }),
              (e.handleDoubleClickEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, r = new Array(t), i = 0;
                  i < t;
                  i++
                )
                  r[i] = arguments[i];
                $n(e.props.onDoubleClickEvent, r);
              }),
              (e.handleKeyPressEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, r = new Array(t), i = 0;
                  i < t;
                  i++
                )
                  r[i] = arguments[i];
                $n(e.props.onKeyPressEvent, r);
              }),
              (e.handleShowMore = function (t, r, i, n, a) {
                var s = e.props,
                  o = s.popup,
                  l = s.onDrillDown,
                  c = s.onShowMore,
                  u = s.getDrilldownView,
                  m = s.doShowMoreDrillDown;
                if ((e.clearSelection(), o)) {
                  var d = Te(i, e.containerRef.current);
                  e.setState({
                    overlay: { date: r, events: t, position: d, target: a },
                  });
                } else m && $n(l, [r, u(r) || Vn.DAY]);
                $n(c, [t, r, n]);
              }),
              (e.overlayDisplay = function () {
                e.setState({ overlay: null });
              }),
              (e.state = { rowLimit: 5, needLimitMeasure: !0, date: null }),
              (e.containerRef = (0, m.createRef)()),
              (e.slotRowRef = (0, m.createRef)()),
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
                            Ue(function () {
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
                      i = e.className,
                      n = r.visibleDays(t, r),
                      a = Be(n, 7);
                    return (
                      (this._weekCount = a.length),
                      m.createElement(
                        "div",
                        {
                          className: _("rbc-month-view", i),
                          role: "table",
                          "aria-label": "Month View",
                          ref: this.containerRef,
                        },
                        m.createElement(
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
                      i = t.components,
                      n = e[0],
                      a = e[e.length - 1],
                      s = i.header || ts;
                    return r.range(n, a, "day").map(function (e, t) {
                      return m.createElement(
                        "div",
                        { key: "header_" + t, className: "rbc-header" },
                        m.createElement(s, {
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
                      i =
                        null !==
                          (e =
                            null === (t = this.state) || void 0 === t
                              ? void 0
                              : t.overlay) && void 0 !== e
                          ? e
                          : {},
                      n = this.props,
                      a = n.accessors,
                      s = n.localizer,
                      o = n.components,
                      l = n.getters,
                      c = n.selected,
                      u = n.popupOffset,
                      d = n.handleDragStart;
                    return m.createElement(Wa, {
                      overlay: i,
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
                      handleDragStart: d,
                      show: !!i.position,
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
                      i = new Date(t[t.length - 1]);
                    i.setDate(t[t.length - 1].getDate() + 1),
                      $n(this.props.onSelectSlot, {
                        slots: t,
                        start: r,
                        end: i,
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
        })(m.Component);
      (ns.range = function (e, t) {
        var r = t.localizer;
        return { start: r.firstVisibleDay(e, r), end: r.lastVisibleDay(e, r) };
      }),
        (ns.navigate = function (e, t, r) {
          var i = r.localizer;
          switch (t) {
            case qn:
              return i.add(e, -1, "month");
            case Zn:
              return i.add(e, 1, "month");
            default:
              return e;
          }
        }),
        (ns.title = function (e, t) {
          return t.localizer.format(e, "monthHeaderFormat");
        });
      var as = function (e) {
        var t = e.min,
          r = e.max,
          i = e.step,
          n = e.slots,
          a = e.localizer;
        return (
          "".concat(+a.startOf(t, "minutes")) +
          "".concat(+a.startOf(r, "minutes")) +
          "".concat(i, "-").concat(n)
        );
      };
      function ss(e) {
        for (
          var t = e.min,
            r = e.max,
            i = e.step,
            n = e.timeslots,
            a = e.localizer,
            s = as({ start: t, end: r, step: i, timeslots: n, localizer: a }),
            o = 1 + a.getTotalMin(t, r),
            l = a.getMinutesFromMidnight(t),
            c = Math.ceil((o - 1) / (i * n)),
            u = c * n,
            m = new Array(c),
            d = new Array(u),
            f = 0;
          f < c;
          f++
        ) {
          m[f] = new Array(n);
          for (var y = 0; y < n; y++) {
            var p = f * n + y,
              b = p * i;
            d[p] = m[f][y] = a.getSlotDate(t, l, b);
          }
        }
        var B = d.length * i;
        function g(e) {
          var r = a.diff(t, e, "minutes") + a.getDstOffset(t, e);
          return Math.min(r, o);
        }
        return (
          d.push(a.getSlotDate(t, l, B)),
          {
            groups: m,
            update: function (e) {
              return as(e) !== s ? ss(e) : this;
            },
            dateIsInGroup: function (e, t) {
              var i = m[t + 1];
              return a.inRange(e, m[t][0], i ? i[0] : r, "minutes");
            },
            nextSlot: function (e) {
              var t = d[Math.min(d.indexOf(e) + 1, d.length - 1)];
              return t === e && (t = a.add(e, i, "minutes")), t;
            },
            closestSlotToPosition: function (e) {
              var t = Math.min(d.length - 1, Math.max(0, Math.floor(e * u)));
              return d[t];
            },
            closestSlotFromPoint: function (e, t) {
              var r = Math.abs(t.top - t.bottom);
              return this.closestSlotToPosition((e.y - t.top) / r);
            },
            closestSlotFromDate: function (e) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              if (a.lt(e, t, "minutes")) return d[0];
              if (a.gt(e, r, "minutes")) return d[d.length - 1];
              var s = a.diff(t, e, "minutes");
              return d[(s - (s % i)) / i + n];
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
            getRange: function (e, n, s, o) {
              s || (e = a.min(r, a.max(t, e))),
                o || (n = a.min(r, a.max(t, n)));
              var l = g(e),
                c = g(n),
                m =
                  c > i * u && !a.eq(r, n)
                    ? ((l - i) / (i * u)) * 100
                    : (l / (i * u)) * 100;
              return {
                top: m,
                height: (c / (i * u)) * 100 - m,
                start: g(e),
                startDate: e,
                end: g(n),
                endDate: n,
              };
            },
            getCurrentTimePosition: function (e) {
              return (g(e) / (i * u)) * 100;
            },
          }
        );
      }
      var os = (function () {
        function e(t, r) {
          var i = r.accessors,
            n = r.slotMetrics;
          (0, s.Z)(this, e);
          var a = n.getRange(i.start(t), i.end(t)),
            o = a.start,
            l = a.startDate,
            c = a.end,
            u = a.endDate,
            m = a.top,
            d = a.height;
          (this.start = o),
            (this.end = c),
            (this.startMs = +l),
            (this.endMs = +u),
            (this.top = m),
            (this.height = d),
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
                  i = e._width;
                return r + (t.indexOf(this) + 1) * i;
              },
            },
          ]),
          e
        );
      })();
      function ls(e, t, r) {
        return (
          Math.abs(t.start - e.start) < r ||
          (t.start > e.start && t.start < e.end)
        );
      }
      function cs(e) {
        for (
          var t = e.events,
            r = e.minimumStartDifference,
            i = e.slotMetrics,
            n = e.accessors,
            a = (function (e) {
              for (
                var t = bi(e, [
                    "startMs",
                    function (e) {
                      return -e.endMs;
                    },
                  ]),
                  r = [];
                t.length > 0;

              ) {
                var i = t.shift();
                r.push(i);
                for (var n = 0; n < t.length; n++) {
                  var a = t[n];
                  if (!(i.endMs > a.startMs)) {
                    if (n > 0) {
                      var s = t.splice(n, 1)[0];
                      r.push(s);
                    }
                    break;
                  }
                }
              }
              return r;
            })(
              t.map(function (e) {
                return new os(e, { slotMetrics: i, accessors: n });
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
              for (var i = null, n = t.rows.length - 1; !i && n >= 0; n--)
                ls(t.rows[n], e, r) && (i = t.rows[n]);
              i
                ? (i.leaves.push(e), (e.row = i))
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
      function us(e, t, r) {
        for (var i = 0; i < e.friends.length; ++i)
          if (!(r.indexOf(e.friends[i]) > -1)) {
            (t = t > e.friends[i].idx ? t : e.friends[i].idx),
              r.push(e.friends[i]);
            var n = us(e.friends[i], t, r);
            t = t > n ? t : n;
          }
        return t;
      }
      var ms = {
        overlap: cs,
        "no-overlap": function (e) {
          var t = cs({
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
          for (var i = 0; i < t.length - 1; ++i)
            for (
              var n = t[i],
                a = n.style.top,
                s = n.style.top + n.style.height,
                o = i + 1;
              o < t.length;
              ++o
            ) {
              var l = t[o],
                c = l.style.top,
                u = l.style.top + l.style.height;
              ((c >= a && u <= s) || (u > a && u <= s) || (c >= a && c < s)) &&
                (n.friends.push(l), l.friends.push(n));
            }
          for (var m = 0; m < t.length; ++m) {
            for (var d = t[m], f = [], y = 0; y < 100; ++y) f.push(1);
            for (var p = 0; p < d.friends.length; ++p)
              void 0 !== d.friends[p].idx && (f[d.friends[p].idx] = 0);
            d.idx = f.indexOf(1);
          }
          for (var b = 0; b < t.length; ++b) {
            var B;
            if (!t[b].size) {
              var g = [];
              (B = 100 / (us(t[b], 0, g) + 1)), (t[b].size = B);
              for (var h = 0; h < g.length; ++h) g[h].size = B;
            }
          }
          for (var w = 0; w < t.length; ++w) {
            var v = t[w];
            v.style.left = v.idx * v.size;
            for (var _ = 0, M = 0; M < v.friends.length; ++M) {
              var z = v.friends[M].idx;
              _ = _ > z ? _ : z;
            }
            _ <= v.idx && (v.size = 100 - v.idx * v.size);
            var R = 0 === v.idx ? 0 : 3;
            (v.style.width = "calc(".concat(v.size, "% - ").concat(R, "px)")),
              (v.style.height = "calc(".concat(v.style.height, "% - 2px)")),
              (v.style.xOffset = "calc("
                .concat(v.style.left, "% + ")
                .concat(R, "px)"));
          }
          return t;
        },
      };
      var ds = (function (e) {
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
                  i = e.group,
                  n = e.getters,
                  a = e.components,
                  s = (void 0 === a ? {} : a).timeSlotWrapper,
                  o = void 0 === s ? Ln : s,
                  l = n ? n.slotGroupProp(i) : {};
                return m.createElement(
                  "div",
                  Object.assign({ className: "rbc-timeslot-group" }, l),
                  i.map(function (e, i) {
                    var a = n ? n.slotProp(e, r) : {};
                    return m.createElement(
                      o,
                      { key: i, value: e, resource: r },
                      m.createElement(
                        "div",
                        Object.assign({}, a, {
                          className: _("rbc-time-slot", a.className),
                        }),
                        t && t(e, i),
                      ),
                    );
                  }),
                );
              },
            },
          ]),
          r
        );
      })(m.Component);
      function fs(e) {
        return "string" == typeof e ? e : e + "%";
      }
      function ys(e) {
        var t = e.style,
          r = e.className,
          n = e.event,
          a = e.accessors,
          s = e.rtl,
          o = e.selected,
          l = e.label,
          c = e.continuesPrior,
          u = e.continuesAfter,
          d = e.getters,
          f = e.onClick,
          y = e.onDoubleClick,
          p = e.isBackgroundEvent,
          b = e.onKeyPress,
          B = e.components,
          g = B.event,
          h = B.eventWrapper,
          w = a.title(n),
          v = a.tooltip(n),
          M = a.end(n),
          z = a.start(n),
          R = d.eventProp(n, z, M, o),
          F = t.height,
          S = t.top,
          O = t.width,
          W = t.xOffset,
          E = [
            m.createElement(
              "div",
              { key: "1", className: "rbc-event-label" },
              l,
            ),
            m.createElement(
              "div",
              { key: "2", className: "rbc-event-content" },
              g ? m.createElement(g, { event: n, title: w }) : w,
            ),
          ],
          j = p
            ? (0, i.Z)(
                (0, i.Z)({}, R.style),
                {},
                (0, oe.Z)(
                  {
                    top: fs(S),
                    height: fs(F),
                    width: "calc(".concat(O, " + 10px)"),
                  },
                  s ? "right" : "left",
                  fs(Math.max(0, W)),
                ),
              )
            : (0, i.Z)(
                (0, i.Z)({}, R.style),
                {},
                (0, oe.Z)(
                  { top: fs(S), width: fs(O), height: fs(F) },
                  s ? "right" : "left",
                  fs(W),
                ),
              );
        return m.createElement(
          h,
          Object.assign({ type: "time" }, e),
          m.createElement(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: f,
              onDoubleClick: y,
              style: j,
              onKeyPress: b,
              title: v ? ("string" == typeof l ? l + ": " : "") + v : void 0,
              className: _(
                p ? "rbc-background-event" : "rbc-event",
                r,
                R.className,
                {
                  "rbc-selected": o,
                  "rbc-event-continues-earlier": c,
                  "rbc-event-continues-later": u,
                },
              ),
            },
            E,
          ),
        );
      }
      var ps = function (e) {
          var t = e.children,
            r = e.className,
            i = e.style,
            n = e.innerRef;
          return m.createElement("div", { className: r, style: i, ref: n }, t);
        },
        bs = m.forwardRef(function (e, t) {
          return m.createElement(ps, Object.assign({}, e, { innerRef: t }));
        }),
        Bs = ["dayProp"],
        gs = ["eventContainerWrapper"],
        hs = (function (e) {
          (0, l.Z)(r, e);
          var t = (0, c.Z)(r);
          function r() {
            var e;
            (0, s.Z)(this, r);
            for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
              a[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {
                selecting: !1,
                timeIndicatorPosition: null,
              }),
              (e.intervalTriggered = !1),
              (e.renderEvents = function (t) {
                var r = t.events,
                  n = t.isBackgroundEvent,
                  a = e.props,
                  s = a.rtl,
                  o = a.selected,
                  l = a.accessors,
                  c = a.localizer,
                  u = a.getters,
                  d = a.components,
                  f = a.step,
                  y = a.timeslots,
                  p = a.dayLayoutAlgorithm,
                  b = a.resizable,
                  B = (0, Yr.Z)(e).slotMetrics,
                  g = c.messages,
                  h = (function (e) {
                    e.events,
                      e.minimumStartDifference,
                      e.slotMetrics,
                      e.accessors;
                    var t,
                      r = e.dayLayoutAlgorithm,
                      i = r;
                    return (
                      r in ms && (i = ms[r]),
                      (t = i) && t.constructor && t.call && t.apply
                        ? i.apply(this, arguments)
                        : []
                    );
                  })({
                    events: r,
                    accessors: l,
                    slotMetrics: B,
                    minimumStartDifference: Math.ceil((f * y) / 2),
                    dayLayoutAlgorithm: p,
                  });
                return h.map(function (t, r) {
                  var a,
                    f = t.event,
                    y = t.style,
                    p = l.end(f),
                    h = l.start(f),
                    w = "eventTimeRangeFormat",
                    v = B.startsBeforeDay(h),
                    _ = B.startsAfterDay(p);
                  v
                    ? (w = "eventTimeRangeEndFormat")
                    : _ && (w = "eventTimeRangeStartFormat"),
                    (a = v && _ ? g.allDay : c.format({ start: h, end: p }, w));
                  var M = v || B.startsBefore(h),
                    z = _ || B.startsAfter(p);
                  return m.createElement(ys, {
                    style: y,
                    event: f,
                    label: a,
                    key: "evt_" + r,
                    getters: u,
                    rtl: s,
                    components: d,
                    continuesPrior: M,
                    continuesAfter: z,
                    accessors: l,
                    resource: e.props.resource,
                    selected: Ma(f, o),
                    onClick: function (t) {
                      return e._select(
                        (0, i.Z)(
                          (0, i.Z)({}, f),
                          {},
                          { sourceResource: e.props.resource },
                        ),
                        t,
                      );
                    },
                    onDoubleClick: function (t) {
                      return e._doubleClick(f, t);
                    },
                    isBackgroundEvent: n,
                    onKeyPress: function (t) {
                      return e._keyPress(f, t);
                    },
                    resizable: b,
                  });
                });
              }),
              (e._selectable = function () {
                var t = e.containerRef.current,
                  r = e.props,
                  n = r.longPressThreshold,
                  a = r.localizer,
                  s = (e._selector = new Ia(
                    function () {
                      return t;
                    },
                    { longPressThreshold: n },
                  )),
                  o = function (t) {
                    var r = e.props.onSelecting,
                      i = e.state || {},
                      n = l(t),
                      s = n.startDate,
                      o = n.endDate;
                    (r &&
                      ((a.eq(i.startDate, s, "minutes") &&
                        a.eq(i.endDate, o, "minutes")) ||
                        !1 ===
                          r({
                            start: s,
                            end: o,
                            resourceId: e.props.resource,
                          }))) ||
                      (e.state.start === n.start &&
                        e.state.end === n.end &&
                        e.state.selecting === n.selecting) ||
                      e.setState(n);
                  },
                  l = function (r) {
                    var n = e.slotMetrics.closestSlotFromPoint(r, Ca(t));
                    e.state.selecting || (e._initialSlot = n);
                    var s = e._initialSlot;
                    a.lte(s, n)
                      ? (n = e.slotMetrics.nextSlot(n))
                      : a.gt(s, n) && (s = e.slotMetrics.nextSlot(s));
                    var o = e.slotMetrics.getRange(a.min(s, n), a.max(s, n));
                    return (0, i.Z)(
                      (0, i.Z)({}, o),
                      {},
                      {
                        selecting: !0,
                        top: "".concat(o.top, "%"),
                        height: "".concat(o.height, "%"),
                      },
                    );
                  },
                  c = function (t, r) {
                    if (!ja(e.containerRef.current, t)) {
                      var i = l(t),
                        n = i.startDate,
                        a = i.endDate;
                      e._selectSlot({
                        startDate: n,
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
                      return !ja(e.containerRef.current, t);
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
                        (0, i.Z)(
                          (0, i.Z)({}, e.state),
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
                    i = t.endDate,
                    n = t.action,
                    a = t.bounds,
                    s = t.box,
                    o = r,
                    l = [];
                  e.props.localizer.lte(o, i);

                )
                  l.push(o), (o = new Date(+o + 60 * e.props.step * 1e3));
                $n(e.props.onSelectSlot, {
                  slots: l,
                  start: r,
                  end: i,
                  resourceId: e.props.resource,
                  action: n,
                  bounds: a,
                  box: s,
                });
              }),
              (e._select = function () {
                for (
                  var t = arguments.length, r = new Array(t), i = 0;
                  i < t;
                  i++
                )
                  r[i] = arguments[i];
                $n(e.props.onSelectEvent, r);
              }),
              (e._doubleClick = function () {
                for (
                  var t = arguments.length, r = new Array(t), i = 0;
                  i < t;
                  i++
                )
                  r[i] = arguments[i];
                $n(e.props.onDoubleClickEvent, r);
              }),
              (e._keyPress = function () {
                for (
                  var t = arguments.length, r = new Array(t), i = 0;
                  i < t;
                  i++
                )
                  r[i] = arguments[i];
                $n(e.props.onKeyPressEvent, r);
              }),
              (e.slotMetrics = ss(e.props)),
              (e.containerRef = (0, m.createRef)()),
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
                    i = r.getNow,
                    n = r.isNow,
                    a = r.localizer,
                    s = r.date,
                    o = r.min,
                    l = r.max,
                    c = a.neq(e.getNow(), i(), "minutes");
                  if (e.isNow !== n || c) {
                    if ((this.clearTimeIndicatorInterval(), n)) {
                      var u =
                        !c &&
                        a.eq(e.date, s, "minutes") &&
                        t.timeIndicatorPosition ===
                          this.state.timeIndicatorPosition;
                      this.setTimeIndicatorPositionUpdateInterval(u);
                    }
                  } else
                    n &&
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
                    i = (0, e.getNow)();
                  if (i >= t && i <= r) {
                    var n = this.slotMetrics.getCurrentTimePosition(i);
                    (this.intervalTriggered = !0),
                      this.setState({ timeIndicatorPosition: n });
                  } else this.clearTimeIndicatorInterval();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    r = e.max,
                    i = e.rtl,
                    a = e.isNow,
                    s = e.resource,
                    o = e.accessors,
                    l = e.localizer,
                    c = e.getters,
                    u = c.dayProp,
                    d = (0, n.Z)(c, Bs),
                    f = e.components,
                    y = f.eventContainerWrapper,
                    p = (0, n.Z)(f, gs),
                    b = this.slotMetrics,
                    B = this.state,
                    g = B.selecting,
                    h = B.top,
                    w = B.height,
                    v = { start: B.startDate, end: B.endDate },
                    M = u(r),
                    z = M.className,
                    R = M.style,
                    F = p.dayColumnWrapper || bs;
                  return m.createElement(
                    F,
                    {
                      ref: this.containerRef,
                      date: t,
                      style: R,
                      className: _(
                        z,
                        "rbc-day-slot",
                        "rbc-time-column",
                        a && "rbc-now",
                        a && "rbc-today",
                        g && "rbc-slot-selecting",
                      ),
                      slotMetrics: b,
                    },
                    b.groups.map(function (e, t) {
                      return m.createElement(ds, {
                        key: t,
                        group: e,
                        resource: s,
                        getters: d,
                        components: p,
                      });
                    }),
                    m.createElement(
                      y,
                      {
                        localizer: l,
                        resource: s,
                        accessors: o,
                        getters: d,
                        components: p,
                        slotMetrics: b,
                      },
                      m.createElement(
                        "div",
                        { className: _("rbc-events-container", i && "rtl") },
                        this.renderEvents({
                          events: this.props.backgroundEvents,
                          isBackgroundEvent: !0,
                        }),
                        this.renderEvents({ events: this.props.events }),
                      ),
                    ),
                    g &&
                      m.createElement(
                        "div",
                        {
                          className: "rbc-slot-selection",
                          style: { top: h, height: w },
                        },
                        m.createElement(
                          "span",
                          null,
                          l.format(v, "selectRangeFormat"),
                        ),
                      ),
                    a &&
                      this.intervalTriggered &&
                      m.createElement("div", {
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
        })(m.Component);
      hs.defaultProps = { dragThroughEvents: !0, timeslots: 2 };
      var ws = function (e) {
          var t = e.min,
            r = e.max,
            i = e.timeslots,
            n = e.step,
            a = e.localizer,
            s = e.getNow,
            o = e.resource,
            l = e.components,
            c = e.getters,
            d = e.gutterRef,
            f = l.timeGutterWrapper,
            y = (0, m.useMemo)(
              function () {
                return (function (e) {
                  var t = e.min,
                    r = e.max,
                    i = e.localizer;
                  return i.getTimezoneOffset(t) !== i.getTimezoneOffset(r)
                    ? { start: i.add(t, -1, "day"), end: i.add(r, -1, "day") }
                    : { start: t, end: r };
                })({ min: t, max: r, localizer: a });
              },
              [
                null == t ? void 0 : t.toISOString(),
                null == r ? void 0 : r.toISOString(),
                a,
              ],
            ),
            p = y.start,
            b = y.end,
            B = (0, m.useState)(
              ss({ min: p, max: b, timeslots: i, step: n, localizer: a }),
            ),
            g = (0, u.Z)(B, 2),
            h = g[0],
            w = g[1];
          (0, m.useEffect)(
            function () {
              h &&
                w(
                  h.update({
                    min: p,
                    max: b,
                    timeslots: i,
                    step: n,
                    localizer: a,
                  }),
                );
            },
            [
              null == p ? void 0 : p.toISOString(),
              null == b ? void 0 : b.toISOString(),
              i,
              n,
            ],
          );
          var v = (0, m.useCallback)(
            function (e, t) {
              if (t) return null;
              var r = h.dateIsInGroup(s(), t);
              return m.createElement(
                "span",
                { className: _("rbc-label", r && "rbc-now") },
                a.format(e, "timeGutterFormat"),
              );
            },
            [h, a, s],
          );
          return m.createElement(
            f,
            { slotMetrics: h },
            m.createElement(
              "div",
              { className: "rbc-time-gutter rbc-time-column", ref: d },
              h.groups.map(function (e, t) {
                return m.createElement(ds, {
                  key: t,
                  group: e,
                  resource: o,
                  components: l,
                  renderSlot: v,
                  getters: c,
                });
              }),
            ),
          );
        },
        vs = m.forwardRef(function (e, t) {
          return m.createElement(ws, Object.assign({ gutterRef: t }, e));
        }),
        _s = function (e) {
          var t = e.label;
          return m.createElement(m.Fragment, null, t);
        },
        Ms = (function (e) {
          (0, l.Z)(r, e);
          var t = (0, c.Z)(r);
          function r() {
            var e;
            (0, s.Z)(this, r);
            for (var i = arguments.length, n = new Array(i), a = 0; a < i; a++)
              n[a] = arguments[a];
            return (
              ((e = t.call.apply(t, [this].concat(n))).handleHeaderClick =
                function (t, r, i) {
                  i.preventDefault(), $n(e.props.onDrillDown, [t, r]);
                }),
              (e.renderRow = function (t) {
                var r = e.props,
                  i = r.events,
                  n = r.rtl,
                  a = r.selectable,
                  s = r.getNow,
                  o = r.range,
                  l = r.getters,
                  c = r.localizer,
                  u = r.accessors,
                  d = r.components,
                  f = r.resizable,
                  y = u.resourceId(t),
                  p = t
                    ? i.filter(function (e) {
                        return u.resource(e) === y;
                      })
                    : i;
                return m.createElement(es, {
                  isAllDay: !0,
                  rtl: n,
                  getNow: s,
                  minRows: 2,
                  maxRows: e.props.allDayMaxRows + 1,
                  range: o,
                  events: p,
                  resourceId: y,
                  className: "rbc-allday-cell",
                  selectable: a,
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
                  resizable: f,
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
                    i = r.localizer,
                    n = r.getDrilldownView,
                    a = r.getNow,
                    s = r.getters.dayProp,
                    o = r.components.header,
                    l = void 0 === o ? ts : o,
                    c = a();
                  return e.map(function (e, r) {
                    var a = n(e),
                      o = i.format(e, "dayFormat"),
                      u = s(e),
                      d = u.className,
                      f = u.style,
                      y = m.createElement(l, {
                        date: e,
                        label: o,
                        localizer: i,
                      });
                    return m.createElement(
                      "div",
                      {
                        key: r,
                        style: f,
                        className: _(
                          "rbc-header",
                          d,
                          i.isSameDate(e, c) && "rbc-today",
                        ),
                      },
                      a
                        ? m.createElement(
                            "button",
                            {
                              type: "button",
                              className: "rbc-button-link",
                              onClick: function (r) {
                                return t.handleHeaderClick(e, a, r);
                              },
                            },
                            y,
                          )
                        : m.createElement("span", null, y),
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
                    i = t.rtl,
                    n = t.resources,
                    a = t.range,
                    s = t.events,
                    o = t.getNow,
                    l = t.accessors,
                    c = t.selectable,
                    d = t.components,
                    f = t.getters,
                    y = t.scrollRef,
                    p = t.localizer,
                    b = t.isOverflowing,
                    B = t.components,
                    g = B.timeGutterHeader,
                    h = B.resourceHeader,
                    w = void 0 === h ? _s : h,
                    v = t.resizable,
                    M = {};
                  b &&
                    (M[i ? "marginLeft" : "marginRight"] = "".concat(
                      gi() - 1,
                      "px",
                    ));
                  var z = n.groupEvents(s);
                  return m.createElement(
                    "div",
                    {
                      style: M,
                      ref: y,
                      className: _("rbc-time-header", b && "rbc-overflowing"),
                    },
                    m.createElement(
                      "div",
                      {
                        className: "rbc-label rbc-time-header-gutter",
                        style: { width: r, minWidth: r, maxWidth: r },
                      },
                      g && m.createElement(g, null),
                    ),
                    n.map(function (t, r) {
                      var n = (0, u.Z)(t, 2),
                        s = n[0],
                        y = n[1];
                      return m.createElement(
                        "div",
                        { className: "rbc-time-header-content", key: s || r },
                        y &&
                          m.createElement(
                            "div",
                            {
                              className: "rbc-row rbc-row-resource",
                              key: "resource_".concat(r),
                            },
                            m.createElement(
                              "div",
                              { className: "rbc-header" },
                              m.createElement(w, {
                                index: r,
                                label: l.resourceTitle(y),
                                resource: y,
                              }),
                            ),
                          ),
                        m.createElement(
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
                        m.createElement(es, {
                          isAllDay: !0,
                          rtl: i,
                          getNow: o,
                          minRows: 2,
                          maxRows: e.props.allDayMaxRows + 1,
                          range: a,
                          events: z.get(s) || [],
                          resourceId: y && s,
                          className: "rbc-allday-cell",
                          selectable: c,
                          selected: e.props.selected,
                          components: d,
                          accessors: l,
                          getters: f,
                          localizer: p,
                          onSelect: e.props.onSelectEvent,
                          onShowMore: e.props.onShowMore,
                          onDoubleClick: e.props.onDoubleClickEvent,
                          onKeyPress: e.props.onKeyPressEvent,
                          onSelectSlot: e.props.onSelectSlot,
                          longPressThreshold: e.props.longPressThreshold,
                          resizable: v,
                        }),
                      );
                    }),
                  );
                },
              },
            ]),
            r
          );
        })(m.Component),
        zs = {};
      var Rs = (function (e) {
        (0, l.Z)(r, e);
        var t = (0, c.Z)(r);
        function r(e) {
          var n;
          return (
            (0, s.Z)(this, r),
            ((n = t.call(this, e)).handleScroll = function (e) {
              n.scrollRef.current &&
                (n.scrollRef.current.scrollLeft = e.target.scrollLeft);
            }),
            (n.handleResize = function () {
              Ae(n.rafHandle), (n.rafHandle = Ue(n.checkOverflow));
            }),
            (n.handleKeyPressEvent = function () {
              n.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              $n(n.props.onKeyPressEvent, t);
            }),
            (n.handleSelectEvent = function () {
              n.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              $n(n.props.onSelectEvent, t);
            }),
            (n.handleDoubleClickEvent = function () {
              n.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              $n(n.props.onDoubleClickEvent, t);
            }),
            (n.handleShowMore = function (e, t, r, a, s) {
              var o = n.props,
                l = o.popup,
                c = o.onDrillDown,
                u = o.onShowMore,
                m = o.getDrilldownView,
                d = o.doShowMoreDrillDown;
              if ((n.clearSelection(), l)) {
                var f = Te(r, n.containerRef.current);
                n.setState({
                  overlay: {
                    date: t,
                    events: e,
                    position: (0, i.Z)((0, i.Z)({}, f), {}, { width: "200px" }),
                    target: s,
                  },
                });
              } else d && $n(c, [t, m(t) || Vn.DAY]);
              $n(u, [e, t, a]);
            }),
            (n.handleSelectAllDaySlot = function (e, t) {
              var r = n.props.onSelectSlot,
                i = new Date(e[0]),
                a = new Date(e[e.length - 1]);
              a.setDate(e[e.length - 1].getDate() + 1),
                $n(r, {
                  slots: e,
                  start: i,
                  end: a,
                  action: t.action,
                  resourceId: t.resourceId,
                });
            }),
            (n.overlayDisplay = function () {
              n.setState({ overlay: null });
            }),
            (n.checkOverflow = function () {
              if (!n._updatingOverflow) {
                var e = n.contentRef.current;
                if (null != e && e.scrollHeight) {
                  var t = e.scrollHeight > e.clientHeight;
                  n.state.isOverflowing !== t &&
                    ((n._updatingOverflow = !0),
                    n.setState({ isOverflowing: t }, function () {
                      n._updatingOverflow = !1;
                    }));
                }
              }
            }),
            (n.memoizedResources = $r(function (e, t) {
              return (function (e, t) {
                return {
                  map: function (r) {
                    return e
                      ? e.map(function (e, i) {
                          return r([t.resourceId(e), e], i);
                        })
                      : [r([zs, null], 0)];
                  },
                  groupEvents: function (r) {
                    var i = new Map();
                    return e
                      ? (r.forEach(function (e) {
                          var r = t.resource(e) || zs;
                          if (Array.isArray(r))
                            r.forEach(function (t) {
                              var r = i.get(t) || [];
                              r.push(e), i.set(t, r);
                            });
                          else {
                            var n = i.get(r) || [];
                            n.push(e), i.set(r, n);
                          }
                        }),
                        i)
                      : (i.set(zs, r), i);
                  },
                };
              })(e, t);
            })),
            (n.state = { gutterWidth: void 0, isOverflowing: null }),
            (n.scrollRef = m.createRef()),
            (n.contentRef = m.createRef()),
            (n.containerRef = m.createRef()),
            (n._scrollRatio = null),
            (n.gutterRef = (0, m.createRef)()),
            n
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
                  Ae(this.rafHandle),
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
              value: function (e, t, r, i) {
                var n = this,
                  a = this.props,
                  s = a.min,
                  o = a.max,
                  l = a.components,
                  c = a.accessors,
                  d = a.localizer,
                  f = a.dayLayoutAlgorithm,
                  y = this.memoizedResources(this.props.resources, c),
                  p = y.groupEvents(t),
                  b = y.groupEvents(r);
                return y.map(function (t, r) {
                  var a = (0, u.Z)(t, 2),
                    y = a[0],
                    B = a[1];
                  return e.map(function (e, t) {
                    var a = (p.get(y) || []).filter(function (t) {
                        return d.inRange(e, c.start(t), c.end(t), "day");
                      }),
                      u = (b.get(y) || []).filter(function (t) {
                        return d.inRange(e, c.start(t), c.end(t), "day");
                      });
                    return m.createElement(
                      hs,
                      Object.assign({}, n.props, {
                        localizer: d,
                        min: d.merge(e, s),
                        max: d.merge(e, o),
                        resource: B && y,
                        components: l,
                        isNow: d.isSameDate(e, i),
                        key: r + "-" + t,
                        date: e,
                        events: a,
                        backgroundEvents: u,
                        dayLayoutAlgorithm: f,
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
                  i = t.backgroundEvents,
                  n = t.range,
                  a = t.width,
                  s = t.rtl,
                  o = t.selected,
                  l = t.getNow,
                  c = t.resources,
                  u = t.components,
                  d = t.accessors,
                  f = t.getters,
                  y = t.localizer,
                  p = t.min,
                  b = t.max,
                  B = t.showMultiDayTimes,
                  g = t.longPressThreshold,
                  h = t.resizable;
                a = a || this.state.gutterWidth;
                var w = n[0],
                  v = n[n.length - 1];
                this.slots = n.length;
                var M = [],
                  z = [],
                  R = [];
                return (
                  r.forEach(function (e) {
                    if (Za(e, w, v, d, y)) {
                      var t = d.start(e),
                        r = d.end(e);
                      d.allDay(e) ||
                      y.startAndEndAreDateOnly(t, r) ||
                      (!B && !y.isSameDate(t, r))
                        ? M.push(e)
                        : z.push(e);
                    }
                  }),
                  i.forEach(function (e) {
                    Za(e, w, v, d, y) && R.push(e);
                  }),
                  M.sort(function (e, t) {
                    return Ha(e, t, d, y);
                  }),
                  m.createElement(
                    "div",
                    {
                      className: _(
                        "rbc-time-view",
                        c && "rbc-time-view-resources",
                      ),
                      ref: this.containerRef,
                    },
                    m.createElement(Ms, {
                      range: n,
                      events: M,
                      width: a,
                      rtl: s,
                      getNow: l,
                      localizer: y,
                      selected: o,
                      allDayMaxRows: this.props.showAllEvents
                        ? 1 / 0
                        : null !== (e = this.props.allDayMaxRows) &&
                          void 0 !== e
                        ? e
                        : 1 / 0,
                      resources: this.memoizedResources(c, d),
                      selectable: this.props.selectable,
                      accessors: d,
                      getters: f,
                      components: u,
                      scrollRef: this.scrollRef,
                      isOverflowing: this.state.isOverflowing,
                      longPressThreshold: g,
                      onSelectSlot: this.handleSelectAllDaySlot,
                      onSelectEvent: this.handleSelectEvent,
                      onShowMore: this.handleShowMore,
                      onDoubleClickEvent: this.props.onDoubleClickEvent,
                      onKeyPressEvent: this.props.onKeyPressEvent,
                      onDrillDown: this.props.onDrillDown,
                      getDrilldownView: this.props.getDrilldownView,
                      resizable: h,
                    }),
                    this.props.popup && this.renderOverlay(),
                    m.createElement(
                      "div",
                      {
                        ref: this.contentRef,
                        className: "rbc-time-content",
                        onScroll: this.handleScroll,
                      },
                      m.createElement(vs, {
                        date: w,
                        ref: this.gutterRef,
                        localizer: y,
                        min: y.merge(w, p),
                        max: y.merge(w, b),
                        step: this.props.step,
                        getNow: this.props.getNow,
                        timeslots: this.props.timeslots,
                        components: u,
                        className: "rbc-time-gutter",
                        getters: f,
                      }),
                      this.renderEvents(n, z, R, l()),
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
                  i =
                    null !==
                      (e =
                        null === (t = this.state) || void 0 === t
                          ? void 0
                          : t.overlay) && void 0 !== e
                      ? e
                      : {},
                  n = this.props,
                  a = n.accessors,
                  s = n.localizer,
                  o = n.components,
                  l = n.getters,
                  c = n.selected,
                  u = n.popupOffset,
                  d = n.handleDragStart;
                return m.createElement(Wa, {
                  overlay: i,
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
                  handleDragStart: d,
                  show: !!i.position,
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
                            ? hi(e.gutterRef.current)
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
                  i = e.scrollToTime,
                  n = e.localizer,
                  a = n.diff(n.merge(i, t), i, "milliseconds"),
                  s = n.diff(t, r, "milliseconds");
                this._scrollRatio = a / s;
              },
            },
          ]),
          r
        );
      })(m.Component);
      Rs.defaultProps = { step: 30, timeslots: 2 };
      var Fs = [
          "date",
          "localizer",
          "min",
          "max",
          "scrollToTime",
          "enableAutoScroll",
        ],
        Ss = (function (e) {
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
                    i = e.localizer,
                    a = e.min,
                    s = void 0 === a ? i.startOf(new Date(), "day") : a,
                    o = e.max,
                    l = void 0 === o ? i.endOf(new Date(), "day") : o,
                    c = e.scrollToTime,
                    u = void 0 === c ? i.startOf(new Date(), "day") : c,
                    d = e.enableAutoScroll,
                    f = void 0 === d || d,
                    y = (0, n.Z)(e, Fs),
                    p = r.range(t, { localizer: i });
                  return m.createElement(
                    Rs,
                    Object.assign({}, y, {
                      range: p,
                      eventOffset: 10,
                      localizer: i,
                      min: s,
                      max: l,
                      scrollToTime: u,
                      enableAutoScroll: f,
                    }),
                  );
                },
              },
            ]),
            r
          );
        })(m.Component);
      (Ss.range = function (e, t) {
        return [t.localizer.startOf(e, "day")];
      }),
        (Ss.navigate = function (e, t, r) {
          var i = r.localizer;
          switch (t) {
            case qn:
              return i.add(e, -1, "day");
            case Zn:
              return i.add(e, 1, "day");
            default:
              return e;
          }
        }),
        (Ss.title = function (e, t) {
          return t.localizer.format(e, "dayHeaderFormat");
        });
      var Os = [
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
                    i = e.localizer,
                    a = e.min,
                    s = void 0 === a ? i.startOf(new Date(), "day") : a,
                    o = e.max,
                    l = void 0 === o ? i.endOf(new Date(), "day") : o,
                    c = e.scrollToTime,
                    u = void 0 === c ? i.startOf(new Date(), "day") : c,
                    d = e.enableAutoScroll,
                    f = void 0 === d || d,
                    y = (0, n.Z)(e, Os),
                    p = r.range(t, this.props);
                  return m.createElement(
                    Rs,
                    Object.assign({}, y, {
                      range: p,
                      eventOffset: 15,
                      localizer: i,
                      min: s,
                      max: l,
                      scrollToTime: u,
                      enableAutoScroll: f,
                    }),
                  );
                },
              },
            ]),
            r
          );
        })(m.Component);
      (Ws.defaultProps = Rs.defaultProps),
        (Ws.navigate = function (e, t, r) {
          var i = r.localizer;
          switch (t) {
            case qn:
              return i.add(e, -1, "week");
            case Zn:
              return i.add(e, 1, "week");
            default:
              return e;
          }
        }),
        (Ws.range = function (e, t) {
          var r = t.localizer,
            i = r.startOfWeek(),
            n = r.startOf(e, "week", i),
            a = r.endOf(e, "week", i);
          return r.range(n, a);
        }),
        (Ws.title = function (e, t) {
          var r = t.localizer,
            i = zi(Ws.range(e, { localizer: r })),
            n = i[0],
            a = i.slice(1);
          return r.format({ start: n, end: a.pop() }, "dayRangeHeaderFormat");
        });
      var Es = [
        "date",
        "localizer",
        "min",
        "max",
        "scrollToTime",
        "enableAutoScroll",
      ];
      function js(e, t) {
        return Ws.range(e, t).filter(function (e) {
          return -1 === [6, 0].indexOf(e.getDay());
        });
      }
      var Ts,
        Ds = (function (e) {
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
                    i = e.min,
                    a = void 0 === i ? r.startOf(new Date(), "day") : i,
                    s = e.max,
                    o = void 0 === s ? r.endOf(new Date(), "day") : s,
                    l = e.scrollToTime,
                    c = void 0 === l ? r.startOf(new Date(), "day") : l,
                    u = e.enableAutoScroll,
                    d = void 0 === u || u,
                    f = (0, n.Z)(e, Es),
                    y = js(t, this.props);
                  return m.createElement(
                    Rs,
                    Object.assign({}, f, {
                      range: y,
                      eventOffset: 15,
                      localizer: r,
                      min: a,
                      max: o,
                      scrollToTime: c,
                      enableAutoScroll: d,
                    }),
                  );
                },
              },
            ]),
            r
          );
        })(m.Component);
      function Is(e) {
        var t = e.accessors,
          r = e.components,
          i = e.date,
          n = e.events,
          a = e.getters,
          s = e.length,
          o = e.localizer,
          l = e.onDoubleClickEvent,
          c = e.onSelectEvent,
          u = e.selected,
          d = (0, m.useRef)(null),
          f = (0, m.useRef)(null),
          y = (0, m.useRef)(null),
          p = (0, m.useRef)(null),
          b = (0, m.useRef)(null);
        (0, m.useEffect)(function () {
          g();
        });
        var B = function (e, i) {
            var n = "",
              a = r.time,
              s = o.messages.allDay,
              l = t.end(i),
              c = t.start(i);
            return (
              t.allDay(i) ||
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
              o.gt(e, c, "day") && (n = "rbc-continues-prior"),
              o.lt(e, l, "day") && (n += " rbc-continues-after"),
              m.createElement(
                "span",
                { className: n.trim() },
                a ? m.createElement(a, { event: i, day: e, label: s }) : s,
              )
            );
          },
          g = function () {
            if (b.current) {
              var e = d.current,
                t = b.current.firstChild;
              if (t) {
                var r = p.current.scrollHeight > p.current.clientHeight,
                  i = [],
                  n = i;
                (i = [hi(t.children[0]), hi(t.children[1])]),
                  (n[0] === i[0] && n[1] === i[1]) ||
                    ((f.current.style.width = i[0] + "px"),
                    (y.current.style.width = i[1] + "px")),
                  r
                    ? ((0, Ri.Z)(e, "rbc-header-overflowing"),
                      (e.style.marginRight = gi() + "px"))
                    : (0, Fi.Z)(e, "rbc-header-overflowing");
              }
            }
          },
          h = o.messages,
          w = o.add(i, s, "day"),
          v = o.range(i, w, "day");
        return (
          (n = n.filter(function (e) {
            return Za(e, o.startOf(i, "day"), o.endOf(w, "day"), t, o);
          })).sort(function (e, r) {
            return +t.start(e) - +t.start(r);
          }),
          m.createElement(
            "div",
            { className: "rbc-agenda-view" },
            0 !== n.length
              ? m.createElement(
                  m.Fragment,
                  null,
                  m.createElement(
                    "table",
                    { ref: d, className: "rbc-agenda-table" },
                    m.createElement(
                      "thead",
                      null,
                      m.createElement(
                        "tr",
                        null,
                        m.createElement(
                          "th",
                          { className: "rbc-header", ref: f },
                          h.date,
                        ),
                        m.createElement(
                          "th",
                          { className: "rbc-header", ref: y },
                          h.time,
                        ),
                        m.createElement(
                          "th",
                          { className: "rbc-header" },
                          h.event,
                        ),
                      ),
                    ),
                  ),
                  m.createElement(
                    "div",
                    { className: "rbc-agenda-content", ref: p },
                    m.createElement(
                      "table",
                      { className: "rbc-agenda-table" },
                      m.createElement(
                        "tbody",
                        { ref: b },
                        v.map(function (e, i) {
                          return (function (e, i, n) {
                            var s = r.event,
                              d = r.date;
                            return (i = i.filter(function (r) {
                              return Za(
                                r,
                                o.startOf(e, "day"),
                                o.endOf(e, "day"),
                                t,
                                o,
                              );
                            })).map(function (r, f) {
                              var y = t.title(r),
                                p = t.end(r),
                                b = t.start(r),
                                g = a.eventProp(r, b, p, Ma(r, u)),
                                h = 0 === f && o.format(e, "agendaDateFormat"),
                                w =
                                  0 === f &&
                                  m.createElement(
                                    "td",
                                    {
                                      rowSpan: i.length,
                                      className: "rbc-agenda-date-cell",
                                    },
                                    d
                                      ? m.createElement(d, { day: e, label: h })
                                      : h,
                                  );
                              return m.createElement(
                                "tr",
                                {
                                  key: n + "_" + f,
                                  className: g.className,
                                  style: g.style,
                                },
                                w,
                                m.createElement(
                                  "td",
                                  { className: "rbc-agenda-time-cell" },
                                  B(e, r),
                                ),
                                m.createElement(
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
                                    ? m.createElement(s, { event: r, title: y })
                                    : y,
                                ),
                              );
                            }, []);
                          })(e, n, i);
                        }),
                      ),
                    ),
                  ),
                )
              : m.createElement(
                  "span",
                  { className: "rbc-agenda-empty" },
                  h.noEventsInRange,
                ),
          )
        );
      }
      (Ds.defaultProps = Rs.defaultProps),
        (Ds.range = js),
        (Ds.navigate = Ws.navigate),
        (Ds.title = function (e, t) {
          var r = t.localizer,
            i = zi(js(e, { localizer: r })),
            n = i[0],
            a = i.slice(1);
          return r.format({ start: n, end: a.pop() }, "dayRangeHeaderFormat");
        }),
        (Is.defaultProps = { length: 30 }),
        (Is.range = function (e, t) {
          var r = t.length,
            i = void 0 === r ? Is.defaultProps.length : r;
          return { start: e, end: t.localizer.add(e, i, "day") };
        }),
        (Is.navigate = function (e, t, r) {
          var i = r.length,
            n = void 0 === i ? Is.defaultProps.length : i,
            a = r.localizer;
          switch (t) {
            case qn:
              return a.add(e, -n, "day");
            case Zn:
              return a.add(e, n, "day");
            default:
              return e;
          }
        }),
        (Is.title = function (e, t) {
          var r = t.length,
            i = void 0 === r ? Is.defaultProps.length : r,
            n = t.localizer,
            a = n.add(e, i, "day");
          return n.format({ start: e, end: a }, "agendaHeaderFormat");
        });
      var xs =
          ((Ts = {}),
          (0, oe.Z)(Ts, Vn.MONTH, ns),
          (0, oe.Z)(Ts, Vn.WEEK, Ws),
          (0, oe.Z)(Ts, Vn.WORK_WEEK, Ds),
          (0, oe.Z)(Ts, Vn.DAY, Ss),
          (0, oe.Z)(Ts, Vn.AGENDA, Is),
          Ts),
        Cs = ["action", "date", "today"];
      var Ps = (function (e) {
        (0, l.Z)(r, e);
        var t = (0, c.Z)(r);
        function r() {
          var e;
          (0, s.Z)(this, r);
          for (var i = arguments.length, n = new Array(i), a = 0; a < i; a++)
            n[a] = arguments[a];
          return (
            ((e = t.call.apply(t, [this].concat(n))).navigate = function (t) {
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
                return m.createElement(
                  "div",
                  { className: "rbc-toolbar" },
                  m.createElement(
                    "span",
                    { className: "rbc-btn-group" },
                    m.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, Gn) },
                      t.today,
                    ),
                    m.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, qn) },
                      t.previous,
                    ),
                    m.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, Zn) },
                      t.next,
                    ),
                  ),
                  m.createElement(
                    "span",
                    { className: "rbc-toolbar-label" },
                    r,
                  ),
                  m.createElement(
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
                  i = this.props.view;
                if (r.length > 1)
                  return r.map(function (r) {
                    return m.createElement(
                      "button",
                      {
                        type: "button",
                        key: r,
                        className: _({ "rbc-active": i === r }),
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
      })(m.Component);
      var As = function (e) {
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
        Us = ["view", "date", "getNow", "onNavigate"],
        ks = [
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
      function Xs(e) {
        if (Array.isArray(e)) return e;
        for (var t = [], r = 0, i = Object.entries(e); r < i.length; r++) {
          var n = (0, u.Z)(i[r], 2),
            a = n[0];
          n[1] && t.push(a);
        }
        return t;
      }
      var Ns = (function (e) {
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
                ? kn(
                    t,
                    function (e, t) {
                      return (e[t] = xs[t]);
                    },
                    {},
                  )
                : "object" === (0, a.Z)(t)
                ? Nn(t, function (e, t) {
                    return !0 === e ? xs[t] : e;
                  })
                : xs;
            }),
            (e.getView = function () {
              return e.getViews()[e.props.view];
            }),
            (e.getDrilldownView = function (t) {
              var r = e.props,
                i = r.view,
                n = r.drilldownView,
                a = r.getDrilldownView;
              return a ? a(t, i, Object.keys(e.getViews())) : n;
            }),
            (e.handleRangeChange = function (t, r, i) {
              var n = e.props,
                a = n.onRangeChange,
                s = n.localizer;
              a && r.range && a(r.range(t, { localizer: s }), i);
            }),
            (e.handleNavigate = function (t, r) {
              var a = e.props,
                s = a.view,
                o = a.date,
                l = a.getNow,
                c = a.onNavigate,
                u = (0, n.Z)(a, Us),
                m = e.getView(),
                d = l();
              (o = (function (e, t) {
                var r = t.action,
                  i = t.date,
                  a = t.today,
                  s = (0, n.Z)(t, Cs);
                switch (((e = "string" == typeof e ? xs[e] : e), r)) {
                  case Gn:
                    i = a || new Date();
                    break;
                  case Hn:
                    break;
                  default:
                    f()(
                      e && "function" == typeof e.navigate,
                      "Calendar View components must implement a static `.navigate(date, action)` method.s",
                    ),
                      (i = e.navigate(i, r, s));
                }
                return i;
              })(
                m,
                (0, i.Z)(
                  (0, i.Z)({}, u),
                  {},
                  { action: t, date: r || o || d, today: d },
                ),
              )),
                c(o, s, t),
                e.handleRangeChange(o, m);
            }),
            (e.handleViewChange = function (t) {
              t !== e.props.view &&
                (function (e, t) {
                  return -1 !== Xs(t.views).indexOf(e);
                })(t, e.props) &&
                e.props.onView(t);
              var r = e.getViews();
              e.handleRangeChange(e.props.date || e.props.getNow(), r[t], t);
            }),
            (e.handleSelectEvent = function () {
              for (
                var t = arguments.length, r = new Array(t), i = 0;
                i < t;
                i++
              )
                r[i] = arguments[i];
              $n(e.props.onSelectEvent, r);
            }),
            (e.handleDoubleClickEvent = function () {
              for (
                var t = arguments.length, r = new Array(t), i = 0;
                i < t;
                i++
              )
                r[i] = arguments[i];
              $n(e.props.onDoubleClickEvent, r);
            }),
            (e.handleKeyPressEvent = function () {
              for (
                var t = arguments.length, r = new Array(t), i = 0;
                i < t;
                i++
              )
                r[i] = arguments[i];
              $n(e.props.onKeyPressEvent, r);
            }),
            (e.handleSelectSlot = function (t) {
              $n(e.props.onSelectSlot, t);
            }),
            (e.handleDrillDown = function (t, r) {
              var i = e.props.onDrillDown;
              i
                ? i(t, r, e.drilldownView)
                : (r && e.handleViewChange(r), e.handleNavigate(Hn, t));
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
                    i = e.events,
                    a = e.backgroundEvents,
                    s = e.style,
                    o = e.className,
                    l = e.elementProps,
                    c = e.date,
                    u = e.getNow,
                    d = e.length,
                    f = e.showMultiDayTimes,
                    y = e.onShowMore,
                    p = e.doShowMoreDrillDown;
                  e.components, e.formats, e.messages, e.culture;
                  var b = (0, n.Z)(e, ks);
                  c = c || u();
                  var B = this.getView(),
                    g = this.state.context,
                    h = g.accessors,
                    w = g.components,
                    v = g.getters,
                    M = g.localizer,
                    z = g.viewNames,
                    R = w.toolbar || Ps,
                    F = B.title(c, { localizer: M, length: d });
                  return m.createElement(
                    "div",
                    Object.assign({}, l, {
                      className: _(o, "rbc-calendar", b.rtl && "rbc-rtl"),
                      style: s,
                    }),
                    r &&
                      m.createElement(R, {
                        date: c,
                        view: t,
                        views: z,
                        label: F,
                        onView: this.handleViewChange,
                        onNavigate: this.handleNavigate,
                        localizer: M,
                      }),
                    m.createElement(
                      B,
                      Object.assign({}, b, {
                        events: i,
                        backgroundEvents: a,
                        date: c,
                        getNow: u,
                        length: d,
                        localizer: M,
                        getters: v,
                        components: w,
                        accessors: h,
                        showMultiDayTimes: f,
                        getDrilldownView: this.getDrilldownView,
                        onNavigate: this.handleNavigate,
                        onDrillDown: this.handleDrillDown,
                        onSelectEvent: this.handleSelectEvent,
                        onDoubleClickEvent: this.handleDoubleClickEvent,
                        onKeyPressEvent: this.handleKeyPressEvent,
                        onSelectSlot: this.handleSelectSlot,
                        onShowMore: y,
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
                  return { context: r.getContext(e) };
                },
              },
              {
                key: "getContext",
                value: function (e) {
                  var t = e.startAccessor,
                    r = e.endAccessor,
                    n = e.allDayAccessor,
                    a = e.tooltipAccessor,
                    s = e.titleAccessor,
                    o = e.resourceAccessor,
                    l = e.resourceIdAccessor,
                    c = e.resourceTitleAccessor,
                    u = e.eventPropGetter,
                    m = e.backgroundEventPropGetter,
                    d = e.slotPropGetter,
                    f = e.slotGroupPropGetter,
                    y = e.dayPropGetter,
                    p = e.view,
                    b = e.views,
                    B = e.localizer,
                    g = e.culture,
                    h = e.messages,
                    w = void 0 === h ? {} : h,
                    v = e.components,
                    _ = void 0 === v ? {} : v,
                    M = e.formats,
                    z = void 0 === M ? {} : M,
                    R = Xs(b);
                  return {
                    viewNames: R,
                    localizer: ha(
                      B,
                      g,
                      z,
                      (function (e) {
                        return (0, i.Z)((0, i.Z)({}, wa), e);
                      })(w),
                    ),
                    getters: {
                      eventProp: function () {
                        return (u && u.apply(void 0, arguments)) || {};
                      },
                      backgroundEventProp: function () {
                        return (m && m.apply(void 0, arguments)) || {};
                      },
                      slotProp: function () {
                        return (d && d.apply(void 0, arguments)) || {};
                      },
                      slotGroupProp: function () {
                        return (f && f.apply(void 0, arguments)) || {};
                      },
                      dayProp: function () {
                        return (y && y.apply(void 0, arguments)) || {};
                      },
                    },
                    components: xn(_[p] || {}, jn(_, R), {
                      eventWrapper: Ln,
                      backgroundEventWrapper: Ln,
                      eventContainerWrapper: Ln,
                      dateCellWrapper: Ln,
                      weekWrapper: Ln,
                      timeSlotWrapper: Ln,
                      timeGutterWrapper: Ln,
                    }),
                    accessors: {
                      start: As(t),
                      end: As(r),
                      allDay: As(n),
                      tooltip: As(a),
                      title: As(s),
                      resource: As(o),
                      resourceId: As(l),
                      resourceTitle: As(c),
                    },
                  };
                },
              },
            ],
          ),
          r
        );
      })(m.Component);
      Ns.defaultProps = {
        events: [],
        backgroundEvents: [],
        elementProps: {},
        popup: !1,
        toolbar: !0,
        view: Vn.MONTH,
        views: [Vn.MONTH, Vn.WEEK, Vn.DAY, Vn.AGENDA],
        step: 30,
        length: 30,
        allDayMaxRows: 1 / 0,
        doShowMoreDrillDown: !0,
        drilldownView: Vn.DAY,
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
      var Ls = (function e(t, r, i) {
          void 0 === i && (i = []);
          var n,
            a = t.displayName || t.name || "Component",
            s =
              !!(n = t) &&
              ("function" != typeof n ||
                (n.prototype && n.prototype.isReactComponent)),
            o = Object.keys(r),
            l = o.map(b);
          !s && i.length && f()(!1);
          var c = (function (e) {
            function n() {
              for (
                var t, n = arguments.length, a = new Array(n), s = 0;
                s < n;
                s++
              )
                a[s] = arguments[s];
              ((t = e.call.apply(e, [this].concat(a)) || this).handlers =
                Object.create(null)),
                o.forEach(function (e) {
                  var i = r[e];
                  t.handlers[i] = function (r) {
                    if (t.props[i]) {
                      var n;
                      t._notifying = !0;
                      for (
                        var a = arguments.length,
                          s = new Array(a > 1 ? a - 1 : 0),
                          o = 1;
                        o < a;
                        o++
                      )
                        s[o - 1] = arguments[o];
                      (n = t.props)[i].apply(n, [r].concat(s)),
                        (t._notifying = !1);
                    }
                    t.unmounted ||
                      t.setState(function (t) {
                        var i,
                          n = t.values;
                        return {
                          values: (0, g.Z)(
                            Object.create(null),
                            n,
                            ((i = {}), (i[e] = r), i),
                          ),
                        };
                      });
                  };
                }),
                i.length &&
                  (t.attachRef = function (e) {
                    t.inner = e;
                  });
              var l = Object.create(null);
              return (
                o.forEach(function (e) {
                  l[e] = t.props[b(e)];
                }),
                (t.state = { values: l, prevProps: {} }),
                t
              );
            }
            (0, h.Z)(n, e);
            var a = n.prototype;
            return (
              (a.shouldComponentUpdate = function () {
                return !this._notifying;
              }),
              (n.getDerivedStateFromProps = function (e, t) {
                var r = t.values,
                  i = t.prevProps,
                  n = {
                    values: (0, g.Z)(Object.create(null), r),
                    prevProps: {},
                  };
                return (
                  o.forEach(function (t) {
                    (n.prevProps[t] = e[t]),
                      !p(e, t) && p(i, t) && (n.values[t] = e[b(t)]);
                  }),
                  n
                );
              }),
              (a.componentWillUnmount = function () {
                this.unmounted = !0;
              }),
              (a.render = function () {
                var e = this,
                  r = this.props,
                  i = r.innerRef,
                  n = (0, B.Z)(r, ["innerRef"]);
                l.forEach(function (e) {
                  delete n[e];
                });
                var a = {};
                return (
                  o.forEach(function (t) {
                    var r = e.props[t];
                    a[t] = void 0 !== r ? r : e.state.values[t];
                  }),
                  m.createElement(
                    t,
                    (0, g.Z)({}, n, a, this.handlers, {
                      ref: i || this.attachRef,
                    }),
                  )
                );
              }),
              n
            );
          })(m.Component);
          (0, w.polyfill)(c),
            (c.displayName = "Uncontrolled(" + a + ")"),
            (c.propTypes = (0, g.Z)(
              { innerRef: function () {} },
              (function (e, t) {
                var r = {};
                return (
                  Object.keys(e).forEach(function (e) {
                    r[b(e)] = y;
                  }),
                  r
                );
              })(r),
            )),
            i.forEach(function (e) {
              c.prototype[e] = function () {
                var t;
                return (t = this.inner)[e].apply(t, arguments);
              };
            });
          var u = c;
          return (
            m.forwardRef &&
              ((u = m.forwardRef(function (e, t) {
                return m.createElement(
                  c,
                  (0, g.Z)({}, e, {
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
            (u.deferControlTo = function (t, i, n) {
              return void 0 === i && (i = {}), e(t, (0, g.Z)({}, r, i), n);
            }),
            u
          );
        })(Ns, {
          view: "onView",
          date: "onNavigate",
          selected: "onSelectEvent",
        }),
        qs = function (e, t, r) {
          var i = e.start,
            n = e.end;
          return r.format(i, "LT", t) + " – " + r.format(n, "LT", t);
        },
        Zs = {
          dateFormat: "DD",
          dayFormat: "DD ddd",
          weekdayFormat: "ddd",
          selectRangeFormat: qs,
          eventTimeRangeFormat: qs,
          eventTimeRangeStartFormat: function (e, t, r) {
            var i = e.start;
            return r.format(i, "LT", t) + " – ";
          },
          eventTimeRangeEndFormat: function (e, t, r) {
            var i = e.end;
            return " – " + r.format(i, "LT", t);
          },
          timeGutterFormat: "LT",
          monthHeaderFormat: "MMMM YYYY",
          dayHeaderFormat: "dddd MMM DD",
          dayRangeHeaderFormat: function (e, t, r) {
            var i = e.start,
              n = e.end;
            return (
              r.format(i, "MMMM DD", t) +
              " – " +
              r.format(n, r.eq(i, n, "month") ? "DD" : "MMMM DD", t)
            );
          },
          agendaHeaderFormat: function (e, t, r) {
            var i = e.start,
              n = e.end;
            return r.format(i, "L", t) + " – " + r.format(n, "L", t);
          },
          agendaDateFormat: "ddd MMM DD",
          agendaTimeFormat: "LT",
          agendaTimeRangeFormat: qs,
        };
      function Gs(e) {
        var t = e ? e.toLowerCase() : e;
        return "FullYear" === t ? (t = "year") : t || (t = void 0), t;
      }
      function Hs(e) {
        function t(t, r) {
          var i,
            n,
            a = e(t).local(),
            s = e(r).local();
          if (!e.tz)
            return (
              a.toDate().getTimezoneOffset() - s.toDate().getTimezoneOffset()
            );
          var o =
            null !==
              (i =
                null == a || null === (n = a._z) || void 0 === n
                  ? void 0
                  : n.name) && void 0 !== i
              ? i
              : e.tz.guess();
          return e.tz.zone(o).utcOffset(+a) - e.tz.zone(o).utcOffset(+s);
        }
        function r(t, r, i) {
          var n = Gs(i);
          return [n ? e(t).startOf(n) : e(t), n ? e(r).startOf(n) : e(r), n];
        }
        function i() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            r = Gs(arguments.length > 1 ? arguments[1] : void 0);
          return r ? e(t).startOf(r).toDate() : e(t).toDate();
        }
        function n(e, t, i) {
          var n = r(e, t, i),
            a = (0, u.Z)(n, 3),
            s = a[0],
            o = a[1],
            l = a[2];
          return s.isSame(o, l);
        }
        function a(e, t, i) {
          var n = r(e, t, i),
            a = (0, u.Z)(n, 3),
            s = a[0],
            o = a[1],
            l = a[2];
          return s.isSameOrBefore(o, l);
        }
        function s(t, r, i) {
          var n = Gs(i);
          return e(t).add(r, n).toDate();
        }
        function o(e, t) {
          var r = Gs(t),
            a = i(e, r);
          return n(a, e) ? a : s(a, 1, r);
        }
        function l(t, r) {
          var i = Gs(
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "day",
            ),
            n = e(t);
          return e(r).diff(n, i);
        }
        function c(t) {
          return e(t).startOf("month").startOf("week").toDate();
        }
        function m(t) {
          return e(t).endOf("month").endOf("week").toDate();
        }
        return new ga({
          formats: Zs,
          firstOfWeek: function (t) {
            var r = t ? e.localeData(t) : e.localeData();
            return r ? r.firstDayOfWeek() : 0;
          },
          firstVisibleDay: c,
          lastVisibleDay: m,
          visibleDays: function (e) {
            for (var t = c(e), r = m(e), i = []; a(t, r); )
              i.push(t), (t = s(t, 1, "d"));
            return i;
          },
          format: function (t, r, i) {
            return ((n = e(t)), (a = i), a ? n.locale(a) : n).format(r);
            var n, a;
          },
          lt: function (e, t, i) {
            var n = r(e, t, i),
              a = (0, u.Z)(n, 3),
              s = a[0],
              o = a[1],
              l = a[2];
            return s.isBefore(o, l);
          },
          lte: a,
          gt: function (e, t, i) {
            var n = r(e, t, i),
              a = (0, u.Z)(n, 3),
              s = a[0],
              o = a[1],
              l = a[2];
            return s.isAfter(o, l);
          },
          gte: function (e, t, i) {
            var n = r(e, t, i),
              a = (0, u.Z)(n, 3),
              s = a[0],
              o = a[1],
              l = a[2];
            return s.isSameOrBefore(o, l);
          },
          eq: n,
          neq: function (e, t, r) {
            return !n(e, t, r);
          },
          merge: function (t, r) {
            if (!t && !r) return null;
            var i = e(r).format("HH:mm:ss"),
              n = e(t).startOf("day").format("MM/DD/YYYY");
            return e(
              "".concat(n, " ").concat(i),
              "MM/DD/YYYY HH:mm:ss",
            ).toDate();
          },
          inRange: function (t, r, i) {
            var n = Gs(
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "day",
              ),
              a = e(t),
              s = e(r),
              o = e(i);
            return a.isBetween(s, o, n, "[]");
          },
          startOf: i,
          endOf: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              r = Gs(arguments.length > 1 ? arguments[1] : void 0);
            return r ? e(t).endOf(r).toDate() : e(t).toDate();
          },
          range: function (t, r) {
            for (
              var i = Gs(
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "day",
                ),
                n = e(t).toDate(),
                o = [];
              a(n, r);

            )
              o.push(n), (n = s(n, 1, i));
            return o;
          },
          add: s,
          diff: l,
          ceil: o,
          min: function (t, r) {
            var i = e(t),
              n = e(r);
            return e.min(i, n).toDate();
          },
          max: function (t, r) {
            var i = e(t),
              n = e(r);
            return e.max(i, n).toDate();
          },
          minutes: function (t) {
            return e(t).minutes();
          },
          getSlotDate: function (t, r, i) {
            return e(t)
              .startOf("day")
              .minute(r + i)
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
            var i = e(r).startOf("day");
            return (
              e(r).diff(i, "minutes") +
              (function (r) {
                return t(e(r).startOf("day"), r);
              })(r)
            );
          },
          continuesPrior: function (t, r) {
            var i = e(t),
              n = e(r);
            return i.isBefore(n, "day");
          },
          continuesAfter: function (t, r, i) {
            var n = e(r),
              a = e(i);
            return n.isSameOrAfter(a, "minutes");
          },
          sortEvents: function (e) {
            var t = e.evtA,
              r = t.start,
              n = t.end,
              a = t.allDay,
              s = e.evtB,
              c = s.start,
              u = s.end,
              m = s.allDay,
              d = +i(r, "day") - +i(c, "day"),
              f = l(r, o(n, "day"), "day"),
              y = l(c, o(u, "day"), "day");
            return (
              d ||
              Math.max(y, 1) - Math.max(f, 1) ||
              !!m - !!a ||
              +r - +c ||
              +n - +u
            );
          },
          inEventRange: function (t) {
            var r = t.event,
              i = r.start,
              n = r.end,
              a = t.range,
              s = a.start,
              o = a.end,
              l = e(i).startOf("day"),
              c = e(n),
              u = e(s),
              m = e(o),
              d = l.isSameOrBefore(m, "day"),
              f = !l.isSame(c, "minutes")
                ? c.isAfter(u, "minutes")
                : c.isSameOrAfter(u, "minutes");
            return d && f;
          },
          isSameDate: function (t, r) {
            var i = e(t),
              n = e(r);
            return i.isSame(n, "day");
          },
          browserTZOffset: function () {
            var t = new Date(),
              r = /-/.test(t.toString()) ? "-" : "",
              i = t.getTimezoneOffset(),
              n = Number("".concat(r).concat(Math.abs(i)));
            return e().utcOffset() > n ? 1 : 0;
          },
        });
      }
    },
    48359: (e, t, r) => {
      "use strict";
      r.d(t, { q: () => v });
      var i = r(47427),
        n = r(8889),
        a = r.n(n),
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
      function m() {
        return (
          (m = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          m.apply(this, arguments)
        );
      }
      function d(e, t) {
        if (null == e) return {};
        var r,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              i,
              n = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++)
              (r = a[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (r = a[i]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                h(e, t, r[t]);
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
      function p(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, w(i.key), i);
        }
      }
      function b(e, t) {
        return (
          (b = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          b(e, t)
        );
      }
      function B(e) {
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
            i = g(e);
          if (t) {
            var n = g(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
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
      function g(e) {
        return (
          (g = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          g(e)
        );
      }
      function h(e, t, r) {
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
            var i = r.call(e, t || "default");
            if ("object" !== u(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === u(t) ? t : String(t);
      }
      var v = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && b(e, t);
        })(f, e);
        var t,
          r,
          n,
          u = B(f);
        function f() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, f),
            u.apply(this, arguments)
          );
        }
        return (
          (t = f),
          (n = [
            {
              key: "renderLineItem",
              value: function (e, t) {
                var r;
                if (i.isValidElement(e)) r = i.cloneElement(e, t);
                else if (a()(e)) r = e(t);
                else {
                  var n = t.x1,
                    s = t.y1,
                    u = t.x2,
                    f = t.y2,
                    y = t.key,
                    p = d(t, l),
                    b = (0, o.L6)(p),
                    B = (b.offset, d(b, c));
                  r = i.createElement(
                    "line",
                    m({}, B, {
                      x1: n,
                      y1: s,
                      x2: u,
                      y2: f,
                      fill: "none",
                      key: y,
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
                  n = r.x,
                  a = r.width,
                  s = r.horizontal;
                if (!e || !e.length) return null;
                var o = e.map(function (e, r) {
                  var i = y(
                    y({}, t.props),
                    {},
                    {
                      x1: n,
                      y1: e,
                      x2: n + a,
                      y2: e,
                      key: "line-".concat(r),
                      index: r,
                    },
                  );
                  return f.renderLineItem(s, i);
                });
                return i.createElement(
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
                  n = r.y,
                  a = r.height,
                  s = r.vertical;
                if (!e || !e.length) return null;
                var o = e.map(function (e, r) {
                  var i = y(
                    y({}, t.props),
                    {},
                    {
                      x1: e,
                      y1: n,
                      x2: e,
                      y2: n + a,
                      key: "line-".concat(r),
                      index: r,
                    },
                  );
                  return f.renderLineItem(s, i);
                });
                return i.createElement(
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
                  n = r.fillOpacity,
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
                  var m = r % t.length;
                  return i.createElement("rect", {
                    key: "react-".concat(r),
                    x: e,
                    y: s,
                    width: u,
                    height: l,
                    stroke: "none",
                    fill: t[m],
                    fillOpacity: n,
                    className: "recharts-cartesian-grid-bg",
                  });
                });
                return i.createElement(
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
                  n = r.fillOpacity,
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
                  var m = r % t.length;
                  return i.createElement("rect", {
                    key: "react-".concat(r),
                    y: e,
                    x: a,
                    height: u,
                    width: o,
                    stroke: "none",
                    fill: t[m],
                    fillOpacity: n,
                    className: "recharts-cartesian-grid-bg",
                  });
                });
                return i.createElement(
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
                  n = t.x,
                  a = t.y,
                  s = t.width,
                  o = t.height;
                return i.createElement("rect", {
                  x: n,
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
                  n = e.width,
                  o = e.height,
                  l = e.horizontal,
                  c = e.vertical,
                  u = e.horizontalCoordinatesGenerator,
                  m = e.verticalCoordinatesGenerator,
                  d = e.xAxis,
                  f = e.yAxis,
                  p = e.offset,
                  b = e.chartWidth,
                  B = e.chartHeight,
                  g = e.syncWithTicks,
                  h = e.horizontalValues,
                  w = e.verticalValues;
                if (
                  !(0, s.hj)(n) ||
                  n <= 0 ||
                  !(0, s.hj)(o) ||
                  o <= 0 ||
                  !(0, s.hj)(t) ||
                  t !== +t ||
                  !(0, s.hj)(r) ||
                  r !== +r
                )
                  return null;
                var v = this.props,
                  _ = v.horizontalPoints,
                  M = v.verticalPoints;
                if ((!_ || !_.length) && a()(u)) {
                  var z = h && h.length;
                  _ = u(
                    {
                      yAxis: f
                        ? y(y({}, f), {}, { ticks: z ? h : f.ticks })
                        : void 0,
                      width: b,
                      height: B,
                      offset: p,
                    },
                    !!z || g,
                  );
                }
                if ((!M || !M.length) && a()(m)) {
                  var R = w && w.length;
                  M = m(
                    {
                      xAxis: d
                        ? y(y({}, d), {}, { ticks: R ? w : d.ticks })
                        : void 0,
                      width: b,
                      height: B,
                      offset: p,
                    },
                    !!R || g,
                  );
                }
                return i.createElement(
                  "g",
                  { className: "recharts-cartesian-grid" },
                  this.renderBackground(),
                  l && this.renderHorizontal(_),
                  c && this.renderVertical(M),
                  l && this.renderHorizontalStripes(_),
                  c && this.renderVerticalStripes(M),
                );
              },
            },
          ]) && p(t.prototype, r),
          n && p(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          f
        );
      })(i.PureComponent);
      h(v, "displayName", "CartesianGrid"),
        h(v, "defaultProps", {
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
      r.d(t, { c: () => fe });
      var i,
        n = r(6256),
        a = r(47427),
        s = r(84148),
        o = r(15819),
        l = r(8889),
        c = r.n(l),
        u = r(24149),
        m = r.n(u),
        d = r(38716),
        f = r.n(d),
        y = r(98176),
        p = r.n(y),
        b = r(49198),
        B = r.n(b),
        g = r(84223),
        h = r(14166),
        w = r(47430),
        v = r(72961),
        _ = r(77125),
        M = r(76325),
        z = r(91140),
        R = r(94797),
        F = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"];
      function S(e) {
        return (
          (S =
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
          S(e)
        );
      }
      function O(e, t) {
        if (null == e) return {};
        var r,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              i,
              n = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++)
              (r = a[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (r = a[i]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      function W() {
        return (
          (W = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          W.apply(this, arguments)
        );
      }
      function E(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(r), !0).forEach(function (t) {
                P(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : E(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function T(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, A(i.key), i);
        }
      }
      function D(e, t) {
        return (
          (D = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          D(e, t)
        );
      }
      function I(e) {
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
            i = C(e);
          if (t) {
            var n = C(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === S(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return x(e);
          })(this, r);
        };
      }
      function x(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function C(e) {
        return (
          (C = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          C(e)
        );
      }
      function P(e, t, r) {
        return (
          (t = A(t)) in e
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
      function A(e) {
        var t = (function (e, t) {
          if ("object" !== S(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var i = r.call(e, t || "default");
            if ("object" !== S(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === S(t) ? t : String(t);
      }
      var U = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && D(e, t);
        })(l, e);
        var t,
          r,
          i,
          n = I(l);
        function l() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, l);
          for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
            r[i] = arguments[i];
          return (
            P(x((e = n.call.apply(n, [this].concat(r)))), "state", {
              isAnimationFinished: !0,
            }),
            P(x(e), "id", (0, M.EL)("recharts-area-")),
            P(x(e), "handleAnimationEnd", function () {
              var t = e.props.onAnimationEnd;
              e.setState({ isAnimationFinished: !0 }), c()(t) && t();
            }),
            P(x(e), "handleAnimationStart", function () {
              var t = e.props.onAnimationStart;
              e.setState({ isAnimationFinished: !1 }), c()(t) && t();
            }),
            e
          );
        }
        return (
          (t = l),
          (i = [
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
                var i = this.props.isAnimationActive,
                  n = this.state.isAnimationFinished;
                if (i && !n) return null;
                var s = this.props,
                  o = s.dot,
                  c = s.points,
                  u = s.dataKey,
                  m = (0, R.L6)(this.props),
                  d = (0, R.L6)(o, !0),
                  f = c.map(function (e, t) {
                    var r = j(
                      j(j({ key: "dot-".concat(t), r: 3 }, m), d),
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
                  y = {
                    clipPath: e
                      ? "url(#clipPath-".concat(t ? "" : "dots-").concat(r, ")")
                      : null,
                  };
                return a.createElement(
                  w.m,
                  W({ className: "recharts-area-dots" }, y),
                  f,
                );
              },
            },
            {
              key: "renderHorizontalRect",
              value: function (e) {
                var t = this.props,
                  r = t.baseLine,
                  i = t.points,
                  n = t.strokeWidth,
                  s = i[0].x,
                  o = i[i.length - 1].x,
                  l = e * Math.abs(s - o),
                  c = m()(
                    i.map(function (e) {
                      return e.y || 0;
                    }),
                  );
                return (
                  (0, M.hj)(r) && "number" == typeof r
                    ? (c = Math.max(r, c))
                    : r &&
                      Array.isArray(r) &&
                      r.length &&
                      (c = Math.max(
                        m()(
                          r.map(function (e) {
                            return e.y || 0;
                          }),
                        ),
                        c,
                      )),
                  (0, M.hj)(c)
                    ? a.createElement("rect", {
                        x: s < o ? s : s - l,
                        y: 0,
                        width: l,
                        height: Math.floor(
                          c + (n ? parseInt("".concat(n), 10) : 1),
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
                  i = t.points,
                  n = t.strokeWidth,
                  s = i[0].y,
                  o = i[i.length - 1].y,
                  l = e * Math.abs(s - o),
                  c = m()(
                    i.map(function (e) {
                      return e.x || 0;
                    }),
                  );
                return (
                  (0, M.hj)(r) && "number" == typeof r
                    ? (c = Math.max(r, c))
                    : r &&
                      Array.isArray(r) &&
                      r.length &&
                      (c = Math.max(
                        m()(
                          r.map(function (e) {
                            return e.x || 0;
                          }),
                        ),
                        c,
                      )),
                  (0, M.hj)(c)
                    ? a.createElement("rect", {
                        x: 0,
                        y: s < o ? s : s - l,
                        width: c + (n ? parseInt("".concat(n), 10) : 1),
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
              value: function (e, t, r, i) {
                var n = this.props,
                  s = n.layout,
                  o = n.type,
                  l = n.stroke,
                  c = n.connectNulls,
                  u = n.isRange,
                  m = (n.ref, O(n, F));
                return a.createElement(
                  w.m,
                  { clipPath: r ? "url(#clipPath-".concat(i, ")") : null },
                  a.createElement(
                    g.H,
                    W({}, (0, R.L6)(m, !0), {
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
                      g.H,
                      W({}, (0, R.L6)(this.props), {
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
                      g.H,
                      W({}, (0, R.L6)(this.props), {
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
                  i = this.props,
                  n = i.points,
                  s = i.baseLine,
                  l = i.isAnimationActive,
                  c = i.animationBegin,
                  u = i.animationDuration,
                  m = i.animationEasing,
                  d = i.animationId,
                  y = this.state,
                  b = y.prevPoints,
                  B = y.prevBaseLine;
                return a.createElement(
                  o.ZP,
                  {
                    begin: c,
                    duration: u,
                    isActive: l,
                    easing: m,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "area-".concat(d),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (i) {
                    var o = i.t;
                    if (b) {
                      var l,
                        c = b.length / n.length,
                        u = n.map(function (e, t) {
                          var r = Math.floor(t * c);
                          if (b[r]) {
                            var i = b[r],
                              n = (0, M.k4)(i.x, e.x),
                              a = (0, M.k4)(i.y, e.y);
                            return j(j({}, e), {}, { x: n(o), y: a(o) });
                          }
                          return e;
                        });
                      return (
                        (l =
                          (0, M.hj)(s) && "number" == typeof s
                            ? (0, M.k4)(B, s)(o)
                            : f()(s) || p()(s)
                            ? (0, M.k4)(B, 0)(o)
                            : s.map(function (e, t) {
                                var r = Math.floor(t * c);
                                if (B[r]) {
                                  var i = B[r],
                                    n = (0, M.k4)(i.x, e.x),
                                    a = (0, M.k4)(i.y, e.y);
                                  return j(j({}, e), {}, { x: n(o), y: a(o) });
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
                        r.renderAreaStatically(n, s, e, t),
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
                  i = r.points,
                  n = r.baseLine,
                  a = r.isAnimationActive,
                  s = this.state,
                  o = s.prevPoints,
                  l = s.prevBaseLine,
                  c = s.totalLength;
                return a &&
                  i &&
                  i.length &&
                  ((!o && c > 0) || !B()(o, i) || !B()(l, n))
                  ? this.renderAreaWithAnimation(e, t)
                  : this.renderAreaStatically(i, n, e, t);
              },
            },
            {
              key: "render",
              value: function () {
                var e,
                  t = this.props,
                  r = t.hide,
                  i = t.dot,
                  n = t.points,
                  o = t.className,
                  l = t.top,
                  c = t.left,
                  u = t.xAxis,
                  m = t.yAxis,
                  d = t.width,
                  y = t.height,
                  p = t.isAnimationActive,
                  b = t.id;
                if (r || !n || !n.length) return null;
                var B = this.state.isAnimationFinished,
                  g = 1 === n.length,
                  h = (0, s.Z)("recharts-area", o),
                  _ = u && u.allowDataOverflow,
                  M = m && m.allowDataOverflow,
                  z = _ || M,
                  F = f()(b) ? this.id : b,
                  S =
                    null !== (e = (0, R.L6)(i)) && void 0 !== e
                      ? e
                      : { r: 3, strokeWidth: 2 },
                  O = S.r,
                  W = void 0 === O ? 3 : O,
                  E = S.strokeWidth,
                  j = void 0 === E ? 2 : E,
                  T = ((0, R.$k)(i) ? i : {}).clipDot,
                  D = void 0 === T || T,
                  I = 2 * W + j;
                return a.createElement(
                  w.m,
                  { className: h },
                  _ || M
                    ? a.createElement(
                        "defs",
                        null,
                        a.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(F) },
                          a.createElement("rect", {
                            x: _ ? c : c - d / 2,
                            y: M ? l : l - y / 2,
                            width: _ ? d : 2 * d,
                            height: M ? y : 2 * y,
                          }),
                        ),
                        !D &&
                          a.createElement(
                            "clipPath",
                            { id: "clipPath-dots-".concat(F) },
                            a.createElement("rect", {
                              x: c - I / 2,
                              y: l - I / 2,
                              width: d + I,
                              height: y + I,
                            }),
                          ),
                      )
                    : null,
                  g ? null : this.renderArea(z, F),
                  (i || g) && this.renderDots(z, D, F),
                  (!p || B) && v.e.renderCallByParent(this.props, n),
                );
              },
            },
          ]) && T(t.prototype, r),
          i && T(t, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          l
        );
      })(a.PureComponent);
      (i = U),
        P(U, "displayName", "Area"),
        P(U, "defaultProps", {
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
          isAnimationActive: !_.x.isSsr,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        }),
        P(U, "getBaseValue", function (e, t, r, i) {
          var n = e.layout,
            a = e.baseValue,
            s = t.props.baseValue,
            o = null != s ? s : a;
          if ((0, M.hj)(o) && "number" == typeof o) return o;
          var l = "horizontal" === n ? i : r,
            c = l.scale.domain();
          if ("number" === l.type) {
            var u = Math.max(c[0], c[1]),
              m = Math.min(c[0], c[1]);
            return "dataMin" === o
              ? m
              : "dataMax" === o || u < 0
              ? u
              : Math.max(Math.min(c[0], c[1]), 0);
          }
          return "dataMin" === o ? c[0] : "dataMax" === o ? c[1] : c[0];
        }),
        P(U, "getComposedData", function (e) {
          var t,
            r = e.props,
            n = e.item,
            a = e.xAxis,
            s = e.yAxis,
            o = e.xAxisTicks,
            l = e.yAxisTicks,
            c = e.bandSize,
            u = e.dataKey,
            m = e.stackedData,
            d = e.dataStartIndex,
            f = e.displayedData,
            y = e.offset,
            p = r.layout,
            b = m && m.length,
            B = i.getBaseValue(r, n, a, s),
            g = "horizontal" === p,
            h = !1,
            w = f.map(function (e, t) {
              var r;
              b
                ? (r = m[d + t])
                : ((r = (0, z.F$)(e, u)),
                  Array.isArray(r) ? (h = !0) : (r = [B, r]));
              var i = null == r[1] || (b && null == (0, z.F$)(e, u));
              return g
                ? {
                    x: (0, z.Hv)({
                      axis: a,
                      ticks: o,
                      bandSize: c,
                      entry: e,
                      index: t,
                    }),
                    y: i ? null : s.scale(r[1]),
                    value: r,
                    payload: e,
                  }
                : {
                    x: i ? null : a.scale(r[1]),
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
              b || h
                ? w.map(function (e) {
                    var t = Array.isArray(e.value) ? e.value[0] : null;
                    return g
                      ? {
                          x: e.x,
                          y: null != t && null != e.y ? s.scale(t) : null,
                        }
                      : { x: null != t ? a.scale(t) : null, y: e.y };
                  })
                : g
                ? s.scale(B)
                : a.scale(B)),
            j({ points: w, baseLine: t, layout: p, isRange: h }, y)
          );
        }),
        P(U, "renderDotItem", function (e, t) {
          return a.isValidElement(e)
            ? a.cloneElement(e, t)
            : c()(e)
            ? e(t)
            : a.createElement(
                h.o,
                W({}, t, { className: "recharts-area-dot" }),
              );
        });
      var k = r(28531),
        X = r(52942),
        N = function () {
          return null;
        };
      (N.displayName = "ZAxis"),
        (N.defaultProps = {
          zAxisId: 0,
          range: [64, 64],
          scale: "auto",
          type: "number",
        });
      var L = r(85458),
        q = r(85674),
        Z = r(81156),
        G = r(58054),
        H = r(37350),
        V = ["option", "isActive"];
      function K() {
        return (
          (K = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          K.apply(this, arguments)
        );
      }
      function $(e, t) {
        if (null == e) return {};
        var r,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              i,
              n = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++)
              (r = a[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (r = a[i]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      function Y(e) {
        var t = e.option,
          r = e.isActive,
          i = $(e, V);
        return "string" == typeof t
          ? a.createElement(
              H.bn,
              K(
                {
                  option: a.createElement(G.v, K({ type: t }, i)),
                  isActive: r,
                  shapeType: "symbols",
                },
                i,
              ),
            )
          : a.createElement(
              H.bn,
              K({ option: t, isActive: r, shapeType: "symbols" }, i),
            );
      }
      function Q(e) {
        return (
          (Q =
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
          Q(e)
        );
      }
      function J() {
        return (
          (J = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          J.apply(this, arguments)
        );
      }
      function ee(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
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
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, le(i.key), i);
        }
      }
      function ie(e, t) {
        return (
          (ie = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          ie(e, t)
        );
      }
      function ne(e) {
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
            i = se(e);
          if (t) {
            var n = se(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === Q(t) || "function" == typeof t)) return t;
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
          if ("object" !== Q(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var i = r.call(e, t || "default");
            if ("object" !== Q(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Q(t) ? t : String(t);
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
            t && ie(e, t);
        })(l, e);
        var t,
          r,
          i,
          n = ne(l);
        function l() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, l);
          for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
            r[i] = arguments[i];
          return (
            oe(ae((e = n.call.apply(n, [this].concat(r)))), "state", {
              isAnimationFinished: !1,
            }),
            oe(ae(e), "handleAnimationEnd", function () {
              e.setState({ isAnimationFinished: !0 });
            }),
            oe(ae(e), "handleAnimationStart", function () {
              e.setState({ isAnimationFinished: !1 });
            }),
            oe(ae(e), "id", (0, M.EL)("recharts-scatter-")),
            e
          );
        }
        return (
          (t = l),
          (i = [
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
                  i = r.shape,
                  n = r.activeShape,
                  s = r.activeIndex,
                  o = (0, R.L6)(this.props);
                return e.map(function (e, r) {
                  var l = s === r,
                    c = l ? n : i,
                    u = te(te({ key: "symbol-".concat(r) }, o), e);
                  return a.createElement(
                    w.m,
                    J(
                      { className: "recharts-scatter-symbol" },
                      (0, Z.bw)(t.props, e, r),
                      {
                        key: "symbol-"
                          .concat(null == e ? void 0 : e.cx, "-")
                          .concat(null == e ? void 0 : e.cy, "-")
                          .concat(null == e ? void 0 : e.size),
                        role: "img",
                      },
                    ),
                    a.createElement(Y, J({ option: c, isActive: l }, u)),
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
                  i = t.isAnimationActive,
                  n = t.animationBegin,
                  s = t.animationDuration,
                  l = t.animationEasing,
                  c = t.animationId,
                  u = this.state.prevPoints;
                return a.createElement(
                  o.ZP,
                  {
                    begin: n,
                    duration: s,
                    isActive: i,
                    easing: l,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "pie-".concat(c),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (t) {
                    var i = t.t,
                      n = r.map(function (e, t) {
                        var r = u && u[t];
                        if (r) {
                          var n = (0, M.k4)(r.cx, e.cx),
                            a = (0, M.k4)(r.cy, e.cy),
                            s = (0, M.k4)(r.size, e.size);
                          return te(
                            te({}, e),
                            {},
                            { cx: n(i), cy: a(i), size: s(i) },
                          );
                        }
                        var o = (0, M.k4)(0, e.size);
                        return te(te({}, e), {}, { size: o(i) });
                      });
                    return a.createElement(
                      w.m,
                      null,
                      e.renderSymbolsStatically(n),
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
                  i = this.state.prevPoints;
                return !(r && t && t.length) || (i && B()(i, t))
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
                  i = e.yAxis,
                  n = e.children,
                  s = (0, R.NN)(n, L.W);
                return s
                  ? s.map(function (e, n) {
                      var s = e.props,
                        o = s.direction,
                        l = s.dataKey;
                      return a.cloneElement(e, {
                        key: "".concat(o, "-").concat(l, "-").concat(t[n]),
                        data: t,
                        xAxis: r,
                        yAxis: i,
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
                  i = r.points,
                  n = r.line,
                  s = r.lineType,
                  o = r.lineJointType,
                  l = (0, R.L6)(this.props),
                  u = (0, R.L6)(n);
                if ("joint" === s)
                  e = i.map(function (e) {
                    return { x: e.cx, y: e.cy };
                  });
                else if ("fitting" === s) {
                  var m = (0, M.wr)(i),
                    d = m.xmin,
                    f = m.xmax,
                    y = m.a,
                    p = m.b,
                    b = function (e) {
                      return y * e + p;
                    };
                  e = [
                    { x: d, y: b(d) },
                    { x: f, y: b(f) },
                  ];
                }
                var B = te(
                  te(te({}, l), {}, { fill: "none", stroke: l && l.fill }, u),
                  {},
                  { points: e },
                );
                return (
                  (t = a.isValidElement(n)
                    ? a.cloneElement(n, B)
                    : c()(n)
                    ? n(B)
                    : a.createElement(g.H, J({}, B, { type: o }))),
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
                  i = e.line,
                  n = e.className,
                  o = e.xAxis,
                  l = e.yAxis,
                  c = e.left,
                  u = e.top,
                  m = e.width,
                  d = e.height,
                  y = e.id,
                  p = e.isAnimationActive;
                if (t || !r || !r.length) return null;
                var b = this.state.isAnimationFinished,
                  B = (0, s.Z)("recharts-scatter", n),
                  g = o && o.allowDataOverflow,
                  h = l && l.allowDataOverflow,
                  _ = g || h,
                  M = f()(y) ? this.id : y;
                return a.createElement(
                  w.m,
                  {
                    className: B,
                    clipPath: _ ? "url(#clipPath-".concat(M, ")") : null,
                  },
                  g || h
                    ? a.createElement(
                        "defs",
                        null,
                        a.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(M) },
                          a.createElement("rect", {
                            x: g ? c : c - m / 2,
                            y: h ? u : u - d / 2,
                            width: g ? m : 2 * m,
                            height: h ? d : 2 * d,
                          }),
                        ),
                      )
                    : null,
                  i && this.renderLine(),
                  this.renderErrorBar(),
                  a.createElement(
                    w.m,
                    { key: "recharts-scatter-symbols" },
                    this.renderSymbols(),
                  ),
                  (!p || b) && v.e.renderCallByParent(this.props, r),
                );
              },
            },
          ]) && re(t.prototype, r),
          i && re(t, i),
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
          isAnimationActive: !_.x.isSsr,
          animationBegin: 0,
          animationDuration: 400,
          animationEasing: "linear",
        }),
        oe(ce, "getComposedData", function (e) {
          var t = e.xAxis,
            r = e.yAxis,
            i = e.zAxis,
            n = e.item,
            a = e.displayedData,
            s = e.xAxisTicks,
            o = e.yAxisTicks,
            l = e.offset,
            c = n.props.tooltipType,
            u = (0, R.NN)(n.props.children, q.b),
            m = f()(t.dataKey) ? n.props.dataKey : t.dataKey,
            d = f()(r.dataKey) ? n.props.dataKey : r.dataKey,
            y = i && i.dataKey,
            p = i ? i.range : N.defaultProps.range,
            b = p && p[0],
            B = t.scale.bandwidth ? t.scale.bandwidth() : 0,
            g = r.scale.bandwidth ? r.scale.bandwidth() : 0,
            h = a.map(function (e, a) {
              var l = (0, z.F$)(e, m),
                p = (0, z.F$)(e, d),
                h = (!f()(y) && (0, z.F$)(e, y)) || "-",
                w = [
                  {
                    name: f()(t.dataKey) ? n.props.name : t.name || t.dataKey,
                    unit: t.unit || "",
                    value: l,
                    payload: e,
                    dataKey: m,
                    type: c,
                  },
                  {
                    name: f()(r.dataKey) ? n.props.name : r.name || r.dataKey,
                    unit: r.unit || "",
                    value: p,
                    payload: e,
                    dataKey: d,
                    type: c,
                  },
                ];
              "-" !== h &&
                w.push({
                  name: i.name || i.dataKey,
                  unit: i.unit || "",
                  value: h,
                  payload: e,
                  dataKey: y,
                  type: c,
                });
              var v = (0, z.Hv)({
                  axis: t,
                  ticks: s,
                  bandSize: B,
                  entry: e,
                  index: a,
                  dataKey: m,
                }),
                _ = (0, z.Hv)({
                  axis: r,
                  ticks: o,
                  bandSize: g,
                  entry: e,
                  index: a,
                  dataKey: d,
                }),
                M = "-" !== h ? i.scale(h) : b,
                R = Math.sqrt(Math.max(M, 0) / Math.PI);
              return te(
                te({}, e),
                {},
                {
                  cx: v,
                  cy: _,
                  x: v - R,
                  y: _ - R,
                  xAxis: t,
                  yAxis: r,
                  zAxis: i,
                  width: 2 * R,
                  height: 2 * R,
                  size: M,
                  node: { x: l, y: p, z: h },
                  tooltipPayload: w,
                  tooltipPosition: { x: v, y: _ },
                  payload: e,
                },
                u && u[a] && u[a].props,
              );
            });
          return te({ points: h }, l);
        });
      var ue = r(90291),
        me = r(56886),
        de = r(52871),
        fe = (0, n.z)({
          chartName: "ComposedChart",
          GraphicalChild: [X.x, U, k.$, ce],
          axisComponents: [
            { axisType: "xAxis", AxisComp: ue.K },
            { axisType: "yAxis", AxisComp: me.B },
            { axisType: "zAxis", AxisComp: N },
          ],
          formatAxisMap: de.t9,
        });
    },
    8114: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => B });
      var i = r(84148),
        n = r(47427),
        a = r(48679),
        s = r.n(a),
        o = r(5502),
        l = r(76325),
        c = r(90481),
        u = r(94797);
      function m(e) {
        return (
          (m =
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
          m(e)
        );
      }
      function d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                y(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function y(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" !== m(e) || null === e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var i = r.call(e, t || "default");
                if ("object" !== m(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" === m(t) ? t : String(t);
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
      function p(e, t) {
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
              var i,
                n,
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
                    !(l = (i = a.call(r)).done) &&
                    (o.push(i.value), o.length !== t);
                    l = !0
                  );
              } catch (e) {
                (c = !0), (n = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((s = r.return()), Object(s) !== s)
                  )
                    return;
                } finally {
                  if (c) throw n;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return b(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return b(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
        return i;
      }
      var B = (0, n.forwardRef)(function (e, t) {
        var r = e.aspect,
          a = e.initialDimension,
          m = void 0 === a ? { width: -1, height: -1 } : a,
          d = e.width,
          y = void 0 === d ? "100%" : d,
          b = e.height,
          B = void 0 === b ? "100%" : b,
          g = e.minWidth,
          h = void 0 === g ? 0 : g,
          w = e.minHeight,
          v = e.maxHeight,
          _ = e.children,
          M = e.debounce,
          z = void 0 === M ? 0 : M,
          R = e.id,
          F = e.className,
          S = e.onResize,
          O = e.style,
          W = void 0 === O ? {} : O,
          E = (0, n.useRef)(null),
          j = (0, n.useRef)();
        (j.current = S),
          (0, n.useImperativeHandle)(t, function () {
            return Object.assign(E.current, {
              get current() {
                return (
                  console.warn(
                    "The usage of ref.current.current is deprecated and will no longer be supported.",
                  ),
                  E.current
                );
              },
            });
          });
        var T = p(
            (0, n.useState)({
              containerWidth: m.width,
              containerHeight: m.height,
            }),
            2,
          ),
          D = T[0],
          I = T[1],
          x = (0, n.useCallback)(function (e, t) {
            I(function (r) {
              var i = Math.round(e),
                n = Math.round(t);
              return r.containerWidth === i && r.containerHeight === n
                ? r
                : { containerWidth: i, containerHeight: n };
            });
          }, []);
        (0, n.useEffect)(
          function () {
            var e = function (e) {
              var t,
                r = e[0].contentRect,
                i = r.width,
                n = r.height;
              x(i, n),
                null === (t = j.current) || void 0 === t || t.call(j, i, n);
            };
            z > 0 && (e = s()(e, z, { trailing: !0, leading: !1 }));
            var t = new ResizeObserver(e),
              r = E.current.getBoundingClientRect(),
              i = r.width,
              n = r.height;
            return (
              x(i, n),
              t.observe(E.current),
              function () {
                t.disconnect();
              }
            );
          },
          [x, z],
        );
        var C = (0, n.useMemo)(
          function () {
            var e = D.containerWidth,
              t = D.containerHeight;
            if (e < 0 || t < 0) return null;
            (0, c.Z)(
              (0, l.hU)(y) || (0, l.hU)(B),
              "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",
              y,
              B,
            ),
              (0, c.Z)(
                !r || r > 0,
                "The aspect(%s) must be greater than zero.",
                r,
              );
            var i = (0, l.hU)(y) ? e : y,
              a = (0, l.hU)(B) ? t : B;
            r &&
              r > 0 &&
              (i ? (a = i / r) : a && (i = a * r), v && a > v && (a = v)),
              (0, c.Z)(
                i > 0 || a > 0,
                "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
                i,
                a,
                y,
                B,
                h,
                w,
                r,
              );
            var s =
              !Array.isArray(_) &&
              (0, o.isElement)(_) &&
              (0, u.Gf)(_.type).endsWith("Chart");
            return n.Children.map(_, function (e) {
              return (0, o.isElement)(e)
                ? (0, n.cloneElement)(
                    e,
                    f(
                      { width: i, height: a },
                      s
                        ? {
                            style: f(
                              {
                                height: "100%",
                                width: "100%",
                                maxHeight: a,
                                maxWidth: i,
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
          [r, _, B, v, w, h, D, y],
        );
        return n.createElement(
          "div",
          {
            id: R ? "".concat(R) : void 0,
            className: (0, i.Z)("recharts-responsive-container", F),
            style: f(
              f({}, W),
              {},
              { width: y, height: B, minWidth: h, minHeight: w, maxHeight: v },
            ),
            ref: E,
          },
          C,
        );
      });
    },
    98758: (e) => {
      "use strict";
      var t = function () {};
      e.exports = t;
    },
    20020: (e, t, r) => {
      "use strict";
      function i(e, t, ...r) {
        console.assert
          ? 0 == r.length
            ? console.assert(!!e, t)
            : console.assert(!!e, t, ...r)
          : e || console.warn(t, ...r);
      }
      r.d(t, { X: () => i });
    },
    78288: (e, t, r) => {
      "use strict";
      r.d(t, {
        NK: () => u,
        Wx: () => d,
        X3: () => g,
        b8: () => y,
        iC: () => o,
        sj: () => l,
      });
      var i = r(10059),
        n = r(39087),
        a = r(79545);
      const s = i.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.gid || n.aR(o.M()),
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
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  store_item_type: {
                    n: 2,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  store_item_id: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  store_item_name: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  discount_event_id: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  creator_id: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtime32_start_time: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  last_update_time: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  template_json: {
                    n: 9,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  partner_jsondata: {
                    n: 10,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  internal_json: {
                    n: 11,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  deleted: { n: 12, br: n.FE.readBool, bw: n.Xc.writeBool },
                  cancelled: { n: 13, br: n.FE.readBool, bw: n.Xc.writeBool },
                  rtime32_cancel_time: {
                    n: 14,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
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
            l.prototype.daily_deal || n.aR(l.M()),
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
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
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
            c.prototype.gid || n.aR(c.M()),
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
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
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
            u.prototype.daily_deal || n.aR(u.M()),
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
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_UpdateDailyDeal_Request";
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
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_UpdateDailyDeal_Response";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.gid || n.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  gid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_DeleteDailyDeal_Request";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_DeleteDailyDeal_Response";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.gid || n.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  gid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_CancelDailyDeal_Request";
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
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_CancelDailyDeal_Response";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.appids || n.aR(b.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_GetDailyDealsForApps_Request";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.daily_deals || n.aR(B.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { daily_deals: { n: 1, c: o, r: !0, q: !0 } },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_GetDailyDealsForApps_Response";
        }
      }
      var g;
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
              m,
              { ePrivilege: 1 },
            );
          }),
          (e.DeleteDailyDeal = function (e, t) {
            return e.SendMsg(
              "DailyDeal.DeleteDailyDeal#1",
              (0, a.MD)(d, t),
              f,
              { ePrivilege: 1 },
            );
          }),
          (e.CancelDailyDeal = function (e, t) {
            return e.SendMsg(
              "DailyDeal.CancelDailyDeal#1",
              (0, a.MD)(y, t),
              p,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDailyDealsForApps = function (e, t) {
            return e.SendMsg(
              "DailyDeal.GetDailyDealsForApps#1",
              (0, a.MD)(b, t),
              B,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          });
      })(g || (g = {}));
    },
    3172: (e, t, r) => {
      "use strict";
      r.d(t, { Fi: () => h, qW: () => v });
      var i = r(10059),
        n = r(39087),
        a = r(79545);
      const s = i.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.bincremental || n.aR(o.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  bincremental: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  friends: { n: 2, c: l, r: !0, q: !0 },
                  max_friend_count: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  active_friend_count: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  friends_limit_hit: {
                    n: 5,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.ulfriendid || n.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  ulfriendid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  efriendrelationship: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList_Friend";
        }
      }
      const c = i.Message;
      class u extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.groupid || n.aR(u.M()),
            c.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  groupid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  name: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  accountid_members: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListCategory";
        }
      }
      class m extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.initialize(this, e, 0, -1, void 0, null);
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
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Request";
        }
      }
      class d extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.categories || n.aR(d.M()),
            c.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: { categories: { n: 1, c: u, r: !0, q: !0 } },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Response";
        }
      }
      class f extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.accountid || n.aR(f.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  clanid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  chat_group_id: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListFavoriteEntry";
        }
      }
      class y extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Request";
        }
      }
      class p extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.favorites || n.aR(p.M()),
            c.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { favorites: { n: 1, c: f, r: !0, q: !0 } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Response";
        }
      }
      class b extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.favorites || n.aR(b.M()),
            c.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { favorites: { n: 1, c: f, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Request";
        }
      }
      class B extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new B();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Response";
        }
      }
      class g extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.favorites || n.aR(g.M()),
            c.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { favorites: { n: 1, c: f, r: !0, q: !0 } },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_FavoritesChanged_Notification";
        }
      }
      class h extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.initialize(this, e, 0, -1, void 0, null);
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
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Request";
        }
      }
      class w extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.friendslist || n.aR(w.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = { proto: w, fields: { friendslist: { n: 1, c: o } } }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Response";
        }
      }
      var v, _;
      !(function (e) {
        (e.GetCategories = function (e, t) {
          return e.SendMsg("FriendsList.GetCategories#1", (0, a.MD)(m, t), d, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetFriendsList = function (e, t) {
            return e.SendMsg(
              "FriendsList.GetFriendsList#1",
              (0, a.MD)(h, t),
              w,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.GetFavorites#1", (0, a.MD)(y, t), p, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.SetFavorites#1", (0, a.MD)(b, t), B, {
              ePrivilege: 1,
            });
          });
      })(v || (v = {})),
        (function (e) {
          e.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: g,
          };
        })(_ || (_ = {}));
    },
    88016: (e, t, r) => {
      "use strict";
      r.d(t, {
        FE: () => Q,
        eQ: () => L,
        pQ: () => ae,
        tE: () => se,
        xs: () => $,
      });
      var i = r(10059),
        n = r(39087),
        a = r(79545);
      const s = i.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.steamid || n.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Request";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.summary || n.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  summary: { n: 1, c },
                  timestamp_updated: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  auditid_highwater: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Response";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.points || n.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  points: {
                    n: 1,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  points_earned: {
                    n: 2,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  points_spent: {
                    n: 3,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Response_Summary";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.amount || n.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  amount: {
                    n: 1,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  ecurrency: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetPointsForSpend_Request";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.points || n.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  points: {
                    n: 1,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetPointsForSpend_Response";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.defid || n.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  defid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  expected_points_cost: {
                    n: 2,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPoints_Request";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.defid || n.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  defid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  num_levels: {
                    n: 2,
                    d: 1,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForBadgeLevel_Request";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.defid || n.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  defid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  communityitemid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsToUpgradeItem_Request";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.communityitemid || n.aR(p.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  bundle_community_item_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint64String,
                    pbr: n.FE.readPackedUint64String,
                    bw: n.Xc.writeRepeatedUint64String,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPoints_Response";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.customization_type || n.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  customization_type: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Request";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.purchaseid || n.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Response";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.customization_type || n.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  customization_type: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  new_level: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request";
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
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.serial_number || n.aR(w.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  serial_number: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  controller_code: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RegisterForSteamDeckRewards_Request";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.granted_profile_modifier || n.aR(v.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  granted_profile_modifier: {
                    n: 1,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RegisterForSteamDeckRewards_Response";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.target_type || n.aR(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  target_type: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  targetid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  reactionid: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_AddReaction_Request";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new M();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_AddReaction_Response";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.target_type || n.aR(z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  target_type: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  targetid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactions_Request";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.reactionids || n.aR(R.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  reactionids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactions_Response";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.steamid || n.aR(F.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Request";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.total || n.aR(S.M()),
            s.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  total: { n: 1, c: O, r: !0, q: !0 },
                  user_reviews: { n: 2, c: O, r: !0, q: !0 },
                  ugc: { n: 3, c: O, r: !0, q: !0 },
                  profile: { n: 4, c: O, r: !0, q: !0 },
                  forum_topics: { n: 5, c: O, r: !0, q: !0 },
                  comments: { n: 6, c: O, r: !0, q: !0 },
                  total_given: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  total_received: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  total_points_given: {
                    n: 9,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  total_points_received: {
                    n: 10,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Response";
        }
      }
      class O extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.reactionid || n.aR(O.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  reactionid: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  given: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  received: { n: 3, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  points_given: {
                    n: 4,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  points_received: {
                    n: 5,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = n.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown";
        }
      }
      class W extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new W();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Request";
        }
      }
      class E extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.reactions || n.aR(E.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: { reactions: { n: 3, c: j, r: !0, q: !0 } },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = n.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Response";
        }
      }
      class j extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.reactionid || n.aR(j.M()),
            s.initialize(this, e, 0, -1, [4, 5], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  reactionid: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  points_cost: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  points_transferred: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  valid_target_types: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: n.FE.readEnum,
                    pbr: n.FE.readPackedEnum,
                    bw: n.Xc.writeRepeatedEnum,
                  },
                  valid_ugc_types: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = n.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig";
        }
      }
      class T extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new T();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetProfileCustomizationsConfig_Request";
        }
      }
      class D extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.points_cost || n.aR(D.M()),
            s.initialize(this, e, 0, -1, [3, 4], null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  points_cost: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  upgrade_points_cost: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  purchasable_customization_types: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: n.FE.readEnum,
                    pbr: n.FE.readPackedEnum,
                    bw: n.Xc.writeRepeatedEnum,
                  },
                  upgradable_customization_types: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: n.FE.readEnum,
                    pbr: n.FE.readPackedEnum,
                    bw: n.Xc.writeRepeatedEnum,
                  },
                  max_slots_per_type: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  max_upgradable_level: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = n.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetProfileCustomizationsConfig_Response";
        }
      }
      class I extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new I();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Request";
        }
      }
      class x extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.apps || n.aR(x.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: { apps: { n: 1, c: C, r: !0, q: !0 } },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = n.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Response";
        }
      }
      class C extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.appid || n.aR(C.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  has_items_anyone_can_purchase: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  event_app: { n: 3, br: n.FE.readBool, bw: n.Xc.writeBool },
                  hero_carousel_image: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = n.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Response_EligibleApp";
        }
      }
      class P extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.appid || n.aR(P.M()),
            s.initialize(this, e, 0, -1, [15], null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  defid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  type: { n: 3, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  community_item_class: {
                    n: 4,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  community_item_type: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  point_cost: {
                    n: 6,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  timestamp_created: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  timestamp_updated: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  timestamp_available: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  timestamp_available_end: {
                    n: 14,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  quantity: {
                    n: 10,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  internal_description: {
                    n: 11,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  active: { n: 12, br: n.FE.readBool, bw: n.Xc.writeBool },
                  community_item_data: { n: 13, c: A },
                  bundle_defids: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  usable_duration: {
                    n: 16,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  bundle_discount: {
                    n: 17,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = n.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(P.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition";
        }
      }
      class A extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.item_name || n.aR(A.M()),
            s.initialize(this, e, 0, -1, [9], null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  item_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_title: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_description: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_image_small: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_image_large: {
                    n: 5,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_movie_webm: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_movie_mp4: {
                    n: 7,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_movie_webm_small: {
                    n: 10,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_movie_mp4_small: {
                    n: 11,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  animated: { n: 8, br: n.FE.readBool, bw: n.Xc.writeBool },
                  badge_data: { n: 9, c: U, r: !0, q: !0 },
                  profile_theme_id: {
                    n: 12,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = n.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(A.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition_CommunityItemData";
        }
      }
      class U extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.level || n.aR(U.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  level: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  image: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = n.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition_BadgeData";
        }
      }
      class k extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.bonusid || n.aR(k.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  bonusid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  active: { n: 3, br: n.FE.readBool, bw: n.Xc.writeBool },
                  points: { n: 4, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  timestamp_start: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  timestamp_end: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  internal_description: {
                    n: 7,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = n.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardPurchaseBonus";
        }
      }
      class X extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new X();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetActivePurchaseBonuses_Request";
        }
      }
      class N extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.bonuses || n.aR(N.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: { bonuses: { n: 1, c: k, r: !0, q: !0 } },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = n.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetActivePurchaseBonuses_Response";
        }
      }
      class L extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.appids || n.aR(L.M()),
            s.initialize(
              this,
              e,
              0,
              -1,
              [1, 3, 9, 10, 11, 12, 13, 14, 15, 17, 18],
              null,
            );
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  time_available: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  community_item_classes: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: n.FE.readInt32,
                    pbr: n.FE.readPackedInt32,
                    bw: n.Xc.writeRepeatedInt32,
                  },
                  language: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  count: { n: 5, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  cursor: { n: 6, br: n.FE.readString, bw: n.Xc.writeString },
                  sort: { n: 7, d: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  sort_descending: {
                    n: 8,
                    d: !0,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  reward_types: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: n.FE.readEnum,
                    pbr: n.FE.readPackedEnum,
                    bw: n.Xc.writeRepeatedEnum,
                  },
                  excluded_community_item_classes: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: n.FE.readInt32,
                    pbr: n.FE.readPackedInt32,
                    bw: n.Xc.writeRepeatedInt32,
                  },
                  definitionids: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  filters: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: n.FE.readEnum,
                    pbr: n.FE.readPackedEnum,
                    bw: n.Xc.writeRepeatedEnum,
                  },
                  filter_match_all_category_tags: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeRepeatedString,
                  },
                  filter_match_any_category_tags: {
                    n: 14,
                    r: !0,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeRepeatedString,
                  },
                  contains_definitionids: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  include_direct_purchase_disabled: {
                    n: 16,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  excluded_content_descriptors: {
                    n: 17,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  excluded_appids: {
                    n: 18,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  search_term: {
                    n: 19,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = n.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(L.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_QueryRewardItems_Request";
        }
      }
      class q extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.definitions || n.aR(q.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  definitions: { n: 1, c: P, r: !0, q: !0 },
                  total_count: {
                    n: 2,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  count: { n: 3, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  next_cursor: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = n.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(q.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_QueryRewardItems_Response";
        }
      }
      class Z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.requests || n.aR(Z.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: { requests: { n: 1, c: L, r: !0, q: !0 } },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = n.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Request";
        }
      }
      class G extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.responses || n.aR(G.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: { responses: { n: 1, c: H, r: !0, q: !0 } },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = n.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Response";
        }
      }
      class H extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.eresult || n.aR(H.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  eresult: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  response: { n: 2, c: q },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = n.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(H.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Response_Response";
        }
      }
      class V extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.steamid || n.aR(V.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = n.Bh(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(V.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEquippedProfileItems_Request";
        }
      }
      class K extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.active_definitions || n.aR(K.M()),
            s.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  active_definitions: { n: 1, c: P, r: !0, q: !0 },
                  inactive_definitions: { n: 2, c: P, r: !0, q: !0 },
                  bundle_definitions: { n: 3, c: P, r: !0, q: !0 },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = n.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(K.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEquippedProfileItems_Response";
        }
      }
      class $ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.language || n.aR($.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  language: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = n.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA($.M(), e, t);
        }
        static fromObject(e) {
          return n.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2($.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_ClaimItem_Request";
        }
      }
      class Y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.communityitemid || n.aR(Y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  next_claim_time: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  reward_item: { n: 3, c: P },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = n.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_ClaimItem_Response";
        }
      }
      class Q extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.language || n.aR(Q.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  language: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = n.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Q.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_CanClaimItem_Request";
        }
      }
      class J extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.can_claim || n.aR(J.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  can_claim: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  next_claim_time: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  reward_item: { n: 3, c: P },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = n.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(J.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_CanClaimItem_Response";
        }
      }
      class ee extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.sale_reward_def_id || n.aR(ee.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  sale_reward_def_id: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  virtual_item_reward_event_id: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtime_start_time: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtime_end_time: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = n.Bh(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ee.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamItemRewardDefinition";
        }
      }
      class te extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.virtual_item_reward_event_id || n.aR(te.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  virtual_item_reward_event_id: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = n.Bh(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(te.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_GetRewardDefinitions_Request";
        }
      }
      class re extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.definitions || n.aR(re.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: { definitions: { n: 1, c: ee, r: !0, q: !0 } },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = n.Bh(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(re.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_GetRewardDefinitions_Response";
        }
      }
      class ie extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.definitions || n.aR(ie.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  definitions: { n: 1, c: ee, r: !0, q: !0 },
                  action: { n: 2, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = n.Bh(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ie.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_SetRewardDefinitions_Request";
        }
      }
      class ne extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ne();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_SetRewardDefinitions_Response";
        }
      }
      var ae, se;
      !(function (e) {
        (e.GetPointsForSpend = function (e, t) {
          return e.SendMsg(
            "LoyaltyRewards.GetPointsForSpend#1",
            (0, a.MD)(u, t),
            m,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetSummary = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetSummary#1",
              (0, a.MD)(o, t),
              l,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.RedeemPoints = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPoints#1",
              (0, a.MD)(d, t),
              p,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsForBadgeLevel = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForBadgeLevel#1",
              (0, a.MD)(f, t),
              p,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsToUpgradeItem = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsToUpgradeItem#1",
              (0, a.MD)(y, t),
              p,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsForProfileCustomization = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomization#1",
              (0, a.MD)(b, t),
              B,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsForProfileCustomizationUpgrade = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1",
              (0, a.MD)(g, t),
              h,
              { ePrivilege: 1 },
            );
          }),
          (e.RegisterForSteamDeckRewards = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RegisterForSteamDeckRewards#1",
              (0, a.MD)(w, t),
              v,
              { ePrivilege: 1 },
            );
          }),
          (e.AddReaction = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.AddReaction#1",
              (0, a.MD)(_, t),
              M,
              { ePrivilege: 1 },
            );
          }),
          (e.GetReactions = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactions#1",
              (0, a.MD)(z, t),
              R,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetReactionsSummaryForUser = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactionsSummaryForUser#1",
              (0, a.MD)(F, t),
              S,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetReactionConfig = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactionConfig#1",
              (0, a.MD)(W, t),
              E,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetProfileCustomizationsConfig = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetProfileCustomizationsConfig#1",
              (0, a.MD)(T, t),
              D,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetEligibleApps = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetEligibleApps#1",
              (0, a.MD)(I, t),
              x,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetActivePurchaseBonuses = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetActivePurchaseBonuses#1",
              (0, a.MD)(X, t),
              N,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.QueryRewardItems = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.QueryRewardItems#1",
              (0, a.MD)(L, t),
              q,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.BatchedQueryRewardItems = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.BatchedQueryRewardItems#1",
              (0, a.MD)(Z, t),
              G,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetEquippedProfileItems = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetEquippedProfileItems#1",
              (0, a.MD)(V, t),
              K,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(ae || (ae = {})),
        (function (e) {
          (e.ClaimItem = function (e, t) {
            return e.SendMsg(
              "SaleItemRewards.ClaimItem#1",
              (0, a.MD)($, t),
              Y,
              { ePrivilege: 1 },
            );
          }),
            (e.CanClaimItem = function (e, t) {
              return e.SendMsg(
                "SaleItemRewards.CanClaimItem#1",
                (0, a.MD)(Q, t),
                J,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.GetRewardDefinitions = function (e, t) {
              return e.SendMsg(
                "SaleItemRewards.GetRewardDefinitions#1",
                (0, a.MD)(te, t),
                re,
                { bConstMethod: !0, ePrivilege: 4 },
              );
            }),
            (e.SetRewardDefinitions = function (e, t) {
              return e.SendMsg(
                "SaleItemRewards.SetRewardDefinitions#1",
                (0, a.MD)(ie, t),
                ne,
                { ePrivilege: 4 },
              );
            });
        })(se || (se = {}));
    },
    44237: (e, t, r) => {
      "use strict";
      r.d(t, {
        $k: () => E,
        Ax: () => l,
        Bn: () => L,
        F5: () => B,
        MJ: () => O,
        Pe: () => d,
        SL: () => z,
        UD: () => h,
        Vi: () => U,
        Vt: () => P,
        nQ: () => _,
        rA: () => F,
        yp: () => D,
      });
      var i = r(10059),
        n = r(39087),
        a = r(79545),
        s = r(80002);
      const o = i.Message;
      class l extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.gid || n.aR(l.M()),
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
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  title: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  type: { n: 3, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  visibility: { n: 4, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  priority: { n: 5, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  association_type: {
                    n: 6,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  associated_id: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  associated_name: {
                    n: 8,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  start_date: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  end_date: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  country_allow: {
                    n: 11,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  country_deny: {
                    n: 12,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  ownership_restrictions_overridden: {
                    n: 13,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  must_own_appid: {
                    n: 14,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  must_not_own_appid: {
                    n: 15,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  must_own_packageid: {
                    n: 16,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  must_not_own_packageid: {
                    n: 17,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  must_have_launched_appid: {
                    n: 18,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  additional_restrictions: {
                    n: 19,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  template_type: {
                    n: 20,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  template_vars: {
                    n: 21,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  flags: { n: 22, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  creator_name: {
                    n: 23,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  template_vars_json: {
                    n: 24,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  additional_restrictions_json: {
                    n: 25,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
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
            c.prototype.gid || n.aR(c.M()),
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
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  title: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  type: { n: 3, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  associated_item_id: { n: 4, c: s.oY },
                  associated_item: { n: 5, c: s.VL },
                  associated_name: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  template_type: {
                    n: 10,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  template_vars_json: {
                    n: 11,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
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
            u.prototype.country || n.aR(u.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  country: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  anonymous_user: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetActiveMarketingMessages_Request";
        }
      }
      class m extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.messages || n.aR(m.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  messages: { n: 1, c: l, r: !0, q: !0 },
                  time_next_message_age: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetActiveMarketingMessages_Response";
        }
      }
      class d extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.include_seen_messages || n.aR(d.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  include_seen_messages: {
                    n: 1,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  country_code: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  elanguage: { n: 3, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  operating_system: {
                    n: 4,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  client_package_version: {
                    n: 5,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  context: { n: 6, c: s.WJ },
                  data_request: { n: 7, c: s.Qn },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Request";
        }
      }
      class f extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.messages || n.aR(f.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { messages: { n: 1, c: y, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Response";
        }
      }
      class y extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.already_seen || n.aR(y.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  already_seen: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  message: { n: 2, c },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser";
        }
      }
      class p extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.country_code || n.aR(p.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  country_code: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  elanguage: { n: 3, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  operating_system: {
                    n: 4,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  client_package_version: {
                    n: 5,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Request";
        }
      }
      class b extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.has_pending_messages || n.aR(b.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  has_pending_messages: {
                    n: 1,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  pending_message_count: {
                    n: 2,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Response";
        }
      }
      class B extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.gid || n.aR(B.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  gid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  context: { n: 2, c: s.WJ },
                  data_request: { n: 3, c: s.Qn },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetDisplayMarketingMessage_Request";
        }
      }
      class g extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.message || n.aR(g.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m || (g.sm_m = { proto: g, fields: { message: { n: 1, c } } }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetDisplayMarketingMessage_Response";
        }
      }
      class h extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.gid || n.aR(h.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  gid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  display_index: {
                    n: 2,
                    d: 0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  template_type: {
                    n: 3,
                    d: 0,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_MarkMessageSeen_Notification";
        }
      }
      class w extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.gid || n.aR(w.M()),
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
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessage_Request";
        }
      }
      class v extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.message || n.aR(v.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = { proto: v, fields: { message: { n: 1, c: l } } }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessage_Response";
        }
      }
      class _ extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.lookup_type || n.aR(_.M()),
            o.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  lookup_type: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  gid: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  message_type: { n: 3, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  gidlist: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: n.FE.readFixed64String,
                    pbr: n.FE.readPackedFixed64String,
                    bw: n.Xc.writeRepeatedFixed64String,
                  },
                  title: { n: 5, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_FindMarketingMessages_Request";
        }
      }
      class M extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.messages || n.aR(M.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { messages: { n: 1, c: l, r: !0, q: !0 } },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = n.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_FindMarketingMessages_Response";
        }
      }
      class z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.message || n.aR(z.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  message: { n: 1, c: l },
                  from_json: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_CreateMarketingMessage_Request";
        }
      }
      class R extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.gid || n.aR(R.M()),
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
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_CreateMarketingMessage_Response";
        }
      }
      class F extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.gid || n.aR(F.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  gid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  message: { n: 2, c: l },
                  from_json: { n: 3, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_UpdateMarketingMessage_Request";
        }
      }
      class S extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new S();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_UpdateMarketingMessage_Response";
        }
      }
      class O extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.gid || n.aR(O.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  gid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = n.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DeleteMarketingMessage_Request";
        }
      }
      class W extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new W();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DeleteMarketingMessage_Response";
        }
      }
      class E extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.gid || n.aR(E.M()),
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
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = n.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessageViewerStats_Request";
        }
      }
      class j extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.rt_time_hour || n.aR(j.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  rt_time_hour: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  seen_count: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  template_type: {
                    n: 3,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  display_index: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = n.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessageHourlyStats";
        }
      }
      class T extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.stats || n.aR(T.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: { stats: { n: 1, c: j, r: !0, q: !0 } },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = n.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessageViewerStats_Response";
        }
      }
      class D extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.rt_start_time || n.aR(D.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  rt_start_time: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rt_end_time: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = n.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request";
        }
      }
      class I extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.stats || n.aR(I.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { stats: { n: 1, c: j, r: !0, q: !0 } },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = n.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response";
        }
      }
      class x extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.partnerid || n.aR(x.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  partnerid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = n.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPartnerReadyToPublishMessages_Request";
        }
      }
      class C extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.messages || n.aR(C.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: { messages: { n: 1, c, r: !0, q: !0 } },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = n.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPartnerReadyToPublishMessages_Response";
        }
      }
      class P extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.gid || n.aR(P.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  gid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  partnerid: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = n.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(P.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_PartnerPublishMessage_Request";
        }
      }
      class A extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new A();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_PartnerPublishMessage_Response";
        }
      }
      class U extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.gid || n.aR(U.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  gid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  partnerid: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = n.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPartnerMessagePreview_Request";
        }
      }
      class k extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.message || n.aR(k.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = { proto: k, fields: { message: { n: 1, c: l } } }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = n.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPartnerMessagePreview_Response";
        }
      }
      class X extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.appids || n.aR(X.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = n.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(X.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessage_GetMarketingMessagesForApps_Request";
        }
      }
      class N extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.messages || n.aR(N.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: { messages: { n: 1, c: l, r: !0, q: !0 } },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = n.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessage_GetMarketingMessagesForApps_Response";
        }
      }
      var L;
      !(function (e) {
        (e.GetActiveMarketingMessages = function (e, t) {
          return e.SendMsg(
            "MarketingMessages.GetActiveMarketingMessages#1",
            (0, a.MD)(u, t),
            m,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetMarketingMessagesForUser = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessagesForUser#1",
              (0, a.MD)(d, t),
              f,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.DoesUserHavePendingMarketingMessages = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.DoesUserHavePendingMarketingMessages#1",
              (0, a.MD)(p, t),
              b,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetDisplayMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessage#1",
              (0, a.MD)(B, t),
              g,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetDisplayMarketingMessageForUser = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessageForUser#1",
              (0, a.MD)(B, t),
              g,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetDisplayMarketingMessageAdmin = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessageAdmin#1",
              (0, a.MD)(B, t),
              g,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.MarkMessageSeen = function (e, t) {
            return e.SendNotification(
              "MarketingMessages.MarkMessageSeen#1",
              (0, a.MD)(h, t),
              { ePrivilege: 1 },
            );
          }),
          (e.GetMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessage#1",
              (0, a.MD)(w, t),
              v,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.CreateMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.CreateMarketingMessage#1",
              (0, a.MD)(z, t),
              R,
              { ePrivilege: 4 },
            );
          }),
          (e.UpdateMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.UpdateMarketingMessage#1",
              (0, a.MD)(F, t),
              S,
              { ePrivilege: 5 },
            );
          }),
          (e.DeleteMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.DeleteMarketingMessage#1",
              (0, a.MD)(O, t),
              W,
              { ePrivilege: 4 },
            );
          }),
          (e.FindMarketingMessages = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.FindMarketingMessages#1",
              (0, a.MD)(_, t),
              M,
              { ePrivilege: 5 },
            );
          }),
          (e.GetMarketingMessageViewerStats = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessageViewerStats#1",
              (0, a.MD)(E, t),
              T,
              { ePrivilege: 4 },
            );
          }),
          (e.GetMarketingMessagesViewerRangeStats = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessagesViewerRangeStats#1",
              (0, a.MD)(D, t),
              I,
              { ePrivilege: 4 },
            );
          }),
          (e.GetPartnerReadyToPublishMessages = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetPartnerReadyToPublishMessages#1",
              (0, a.MD)(x, t),
              C,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.PublishPartnerMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.PublishPartnerMessage#1",
              (0, a.MD)(P, t),
              A,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetPartnerMessagePreview = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetPartnerMessagePreview#1",
              (0, a.MD)(U, t),
              k,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetMarketingMessagesForApps = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessagesForApps#1",
              (0, a.MD)(X, t),
              N,
              { ePrivilege: 4 },
            );
          });
      })(L || (L = {}));
    },
    5697: (e, t, r) => {
      "use strict";
      r.d(t, {
        Al: () => _,
        Bp: () => y,
        CX: () => b,
        Fc: () => o,
        I8: () => q,
        IJ: () => l,
        L2: () => V,
        Ng: () => N,
        QN: () => G,
        bn: () => g,
        eh: () => u,
        nd: () => te,
        ow: () => d,
        s6: () => J,
        v9: () => re,
        zP: () => Y,
      });
      var i = r(10059),
        n = r(39087),
        a = r(79545);
      const s = i.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.promotion_id || n.aR(o.M()),
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
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  admin_jsondata: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  partner_jsondata: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  input_jsondata: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  partner_readonly_jsondata: {
                    n: 10,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  partner_writable_jsondata: {
                    n: 11,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  assets_readonly_jsondata: {
                    n: 12,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  assets_writable_jsondata: {
                    n: 13,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  rtime32_start_time: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtime32_end_time: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  partner_id: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  input_access_key: {
                    n: 8,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  last_update_time: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
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
            l.prototype.plan || n.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m || (l.sm_m = { proto: l, fields: { plan: { n: 1, c: o } } }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
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
            c.prototype.promotion_id || n.aR(c.M()),
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
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  input_access_key: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
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
            u.prototype.plan || n.aR(u.M()),
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
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_UpdatePlan_Request";
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
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_UpdatePlan_Response";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.promotion_id || n.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlan_Request";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.plan || n.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m || (f.sm_m = { proto: f, fields: { plan: { n: 1, c: o } } }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlan_Response";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Request";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.plan || n.aR(p.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { plan: { n: 1, c: o, r: !0, q: !0 } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Response";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.rtime || n.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  rtime: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  upto_rtime: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlansUpdatedSince_Request";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.plans || n.aR(B.M()),
            s.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  plans: { n: 1, c: o, r: !0, q: !0 },
                  deleted_plan_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readFixed64String,
                    pbr: n.FE.readPackedFixed64String,
                    bw: n.Xc.writeRepeatedFixed64String,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlansUpdatedSince_Response";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.promotion_id || n.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Request";
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
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Response";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.token || n.aR(w.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  token: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SearchPlan_Request";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.plan || n.aR(v.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: { plan: { n: 1, c: o, r: !0, q: !0 } },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SearchPlan_Response";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.appids || n.aR(_.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  exclude_sales: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  exclude_direct_featuring: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Request";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.plans || n.aR(M.M()),
            s.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  plans: { n: 1, c: o, r: !0, q: !0 },
                  apps_included_in_sales: { n: 2, c: z, r: !0, q: !0 },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = n.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Response";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.appids || n.aR(z.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  clan_event_gid: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Response_CAppIncludedInSales";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.partnerid || n.aR(R.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  partnerid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  start_date_after_rtime: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  start_date_before_rtime: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  show_hidden: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForPartner_Request";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.plans || n.aR(F.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: { plans: { n: 1, c: o, r: !0, q: !0 } },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForPartner_Response";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.input_access_key || n.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  input_access_key: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByInputAccessKey_Request";
        }
      }
      class O extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.plan || n.aR(O.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m || (O.sm_m = { proto: O, fields: { plan: { n: 1, c: o } } }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = n.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByInputAccessKey_Response";
        }
      }
      class W extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.promotion_id || n.aR(W.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  value: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = n.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_MarkLocalizationAssetComplete_Request";
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
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_MarkLocalizationAssetComplete_Response";
        }
      }
      class j extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.promotion_id || n.aR(j.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  notification_type: {
                    n: 2,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  only_explicit_email_addresses: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = n.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Request";
        }
      }
      class T extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new T();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Response";
        }
      }
      class D extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.promotion_id || n.aR(D.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = n.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSentNotification_Request";
        }
      }
      class I extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.results || n.aR(I.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { results: { n: 1, c: x, r: !0, q: !0 } },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = n.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSentNotification_Response";
        }
      }
      class x extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.notification_id || n.aR(x.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  notification_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  tracking_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  email_address: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  accountid: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  status: { n: 5, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  type: { n: 6, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  rt_send_time: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = n.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionNotificationResults";
        }
      }
      class C extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.promotion_id || n.aR(C.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = n.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Request";
        }
      }
      class P extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new P();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Response";
        }
      }
      class A extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.promotion_id || n.aR(A.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  add: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                  email_address: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = n.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(A.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Request";
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
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Response";
        }
      }
      class k extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.spotlight_due_date || n.aR(k.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  spotlight_due_date: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  marketing_message_due_date: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  discount_event_due_date: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = n.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionRequirements";
        }
      }
      class X extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.inviteid || n.aR(X.M()),
            s.initialize(this, e, 0, -1, [16], null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  inviteid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  invite_account: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtinvitetime: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtexpiretime: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  type: { n: 6, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  accept_account: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtaccepttime: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtdatechosen: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  discount_eventid: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  packageid: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  bundleid: {
                    n: 12,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  primary_partnerid: {
                    n: 13,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  deadlines: { n: 14, c: k },
                  notify_partner: {
                    n: 15,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  additional_email: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeRepeatedString,
                  },
                  promotion_id: {
                    n: 17,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  cancelled: { n: 18, br: n.FE.readBool, bw: n.Xc.writeBool },
                  rtime32_cancel_time: {
                    n: 19,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = n.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(X.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvitation";
        }
      }
      class N extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.invite || n.aR(N.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  invite: { n: 1, c: X },
                  queue_email_to_send: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = n.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_SetInvite_Request";
        }
      }
      class L extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.inviteid || n.aR(L.M()),
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
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = n.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(L.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_SetInvite_Response";
        }
      }
      class q extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.inviteid || n.aR(q.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  inviteid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  packageid: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  bundleid: { n: 4, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  partnerid: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  promotion_id: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = n.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(q.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Request";
        }
      }
      class Z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.invites || n.aR(Z.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: { invites: { n: 1, c: X, r: !0, q: !0 } },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = n.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Response";
        }
      }
      class G extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.inviteid || n.aR(G.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  inviteid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  only_notify_additional_email: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = n.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Request";
        }
      }
      class H extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new H();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Response";
        }
      }
      class V extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.inviteid || n.aR(V.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  inviteid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = n.Bh(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(V.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Request";
        }
      }
      class K extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.accountid || n.aR(K.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  partnerid: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  email_address: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = n.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(K.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInviteReceive";
        }
      }
      class $ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.targets || n.aR($.M()),
            s.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  targets: { n: 1, c: K, r: !0, q: !0 },
                  additional_email_address: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeRepeatedString,
                  },
                  valve_account_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  operation_email: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = n.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA($.M(), e, t);
        }
        static fromObject(e) {
          return n.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2($.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Response";
        }
      }
      class Y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.inviteid || n.aR(Y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  inviteid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  rtdatechosen: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  discount_days: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  discount_info: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  skip_discount_event: {
                    n: 5,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = n.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_AcceptInvite_Request";
        }
      }
      class Q extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Q();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_AcceptInvite_Response";
        }
      }
      class J extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.inviteid || n.aR(J.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  inviteid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = n.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(J.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_CancelInvite_Request";
        }
      }
      class ee extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ee();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_CancelInvite_Response";
        }
      }
      var te, re;
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
              m,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanPartnerInfo = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanPartnerInfo#1",
              (0, a.MD)(u, t),
              m,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanInputData = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanInputData#1",
              (0, a.MD)(u, t),
              m,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.DeletePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.DeletePlan#1",
              (0, a.MD)(g, t),
              h,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlan#1",
              (0, a.MD)(d, t),
              f,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAllActivePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllActivePlan#1",
              (0, a.MD)(y, t),
              p,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlansUpdatedSince = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlansUpdatedSince#1",
              (0, a.MD)(b, t),
              B,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SearchPlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SearchPlan#1",
              (0, a.MD)(w, t),
              v,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAllPlansForApps = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllPlansForApps#1",
              (0, a.MD)(_, t),
              M,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetAllPlansForPartner = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllPlansForPartner#1",
              (0, a.MD)(R, t),
              F,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlanByInputAccessKey = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanByInputAccessKey#1",
              (0, a.MD)(S, t),
              O,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.MarkLocalizationAssetComplete = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.MarkLocalizationAssetComplete#1",
              (0, a.MD)(W, t),
              E,
              { ePrivilege: 1 },
            );
          }),
          (e.SendNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SendNotification#1",
              (0, a.MD)(j, t),
              T,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetSentNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetSentNotification#1",
              (0, a.MD)(D, t),
              I,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ResendNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.ResendNotification#1",
              (0, a.MD)(C, t),
              P,
              { ePrivilege: 1 },
            );
          }),
          (e.SetPromotionEmailTarget = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SetPromotionEmailTarget#1",
              (0, a.MD)(A, t),
              U,
              { ePrivilege: 1 },
            );
          });
      })(te || (te = {})),
        (function (e) {
          (e.SetInvite = function (e, t) {
            return e.SendMsg(
              "PromotionEventInvites.SetInvite#1",
              (0, a.MD)(N, t),
              L,
              { ePrivilege: 4 },
            );
          }),
            (e.GetInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetInvite#1",
                (0, a.MD)(q, t),
                Z,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.AcceptInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.AcceptInvite#1",
                (0, a.MD)(Y, t),
                Q,
                { ePrivilege: 1 },
              );
            }),
            (e.CancelInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.CancelInvite#1",
                (0, a.MD)(J, t),
                ee,
                { ePrivilege: 4 },
              );
            }),
            (e.ResendEmailInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.ResendEmailInvite#1",
                (0, a.MD)(G, t),
                H,
                { ePrivilege: 4 },
              );
            }),
            (e.GetEmailTargets = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetEmailTargets#1",
                (0, a.MD)(V, t),
                $,
                { ePrivilege: 4 },
              );
            });
        })(re || (re = {}));
    },
    16861: (e, t, r) => {
      "use strict";
      r.d(t, {
        Rg: () => d,
        XB: () => w,
        XD: () => _,
        ik: () => p,
        pA: () => R,
        rf: () => E,
        u2: () => x,
        vc: () => g,
        xQ: () => u,
      });
      var i = r(10059),
        n = r(39087),
        a = r(79545);
      const s = i.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.packageids || n.aR(o.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  packageids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerPaidGivenPackageList_Request";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.paid || n.aR(l.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: { paid: { n: 1, c, r: !0, q: !0 } },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerPaidGivenPackageList_Response";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.partnerid || n.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  partnerid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  packageid: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerPaidGivenPackageList_Response_CPackageAndPartnerPair";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.opt_in_name || n.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  targeting_flag: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  settings_flag: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  email_templates: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  start_rtime: {
                    n: 5,
                    d: 0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  end_rtime: {
                    n: 6,
                    d: 0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_CreatePartnerAppOptInEmail_Request";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.email_def_id || n.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_CreatePartnerAppOptInEmail_Response";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.email_def_id || n.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  targeting_flag: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  settings_flag: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  email_templates: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  start_rtime: {
                    n: 5,
                    d: 0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  end_rtime: {
                    n: 6,
                    d: 0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  reviewed: {
                    n: 7,
                    d: !1,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_UpdatePartnerAppOptInEmail_Request";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_UpdatePartnerAppOptInEmail_Response";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.accounts_examined || n.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  accounts_examined: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  accounts_emailed: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  accounts_not_emailed_opted_out: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  accounts_email_failed: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  completed: { n: 5, br: n.FE.readBool, bw: n.Xc.writeBool },
                  rt_last_updated: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppOptInEmailStats";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.email_def_id || n.aR(p.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  force_resend: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SendPartnerAppOptInEmailAndWait_Request";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.results || n.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = { proto: b, fields: { results: { n: 1, c: y } } }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SendPartnerAppOptInEmailAndWait_Response";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.opt_in_name || n.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  targeting_flag: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  settings_flag: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  email_templates: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  start_rtime: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  end_rtime: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  stats: { n: 7, c: y },
                  creator_accountid: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  create_time: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  last_update_time: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  email_def_id: {
                    n: 11,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  completed: { n: 12, br: n.FE.readBool, bw: n.Xc.writeBool },
                  aborted: { n: 13, br: n.FE.readBool, bw: n.Xc.writeBool },
                  deleted: { n: 14, br: n.FE.readBool, bw: n.Xc.writeBool },
                  reviewed: { n: 15, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppOptInEmailDef";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.opt_in_name || n.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerAppOptInEmailDefAndStats_Request";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.defs || n.aR(h.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { defs: { n: 1, c: B, r: !0, q: !0 } },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerAppOptInEmailDefAndStats_Response";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.email_def_id || n.aR(w.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetEstimatePartnerAppOptInEmail_Request";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.stats || n.aR(v.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = { proto: v, fields: { stats: { n: 1, c: y } } }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetEstimatePartnerAppOptInEmail_Response";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.email_def_id || n.aR(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  partnerid: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_TestFirePartnerAppOptInEmail_Request";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new M();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_TestFirePartnerAppOptInEmail_Response";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.accountid || n.aR(z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  partnerid: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtime_notified: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  ignored_unverified_email: {
                    n: 5,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  ignored_email_optout: {
                    n: 6,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  status: { n: 7, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  send_rtime: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerOptInEmailTracking";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.email_def_id || n.aR(R.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInEmailTracking_Request";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.email_def_id || n.aR(F.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  results: { n: 2, c: z, r: !0, q: !0 },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInEmailTracking_Response";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.appid || n.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  opt_in: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                  opt_in_name: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  jsondata: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  type: { n: 5, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  accountid_add: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_opted_in: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_updated: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  accountid_lastmod: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  invited: { n: 10, br: n.FE.readBool, bw: n.Xc.writeBool },
                  accountid_remove: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_opted_out: {
                    n: 12,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  pruned: { n: 13, br: n.FE.readBool, bw: n.Xc.writeBool },
                  accountid_prune: {
                    n: 14,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_pruned: {
                    n: 15,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  additional_featuring: {
                    n: 16,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  feature_day: {
                    n: 17,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  accountid_invited: {
                    n: 18,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  no_planned_discount: {
                    n: 19,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  pending_review: {
                    n: 20,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appeal_state: {
                    n: 21,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  accountid_appeal: {
                    n: 22,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppOptInData";
        }
      }
      class O extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.appid || n.aR(O.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = n.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetSinglePartnerAppOptIns_Request";
        }
      }
      class W extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.data || n.aR(W.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: { data: { n: 1, c: S, r: !0, q: !0 } },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = n.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetSinglePartnerAppOptIns_Response";
        }
      }
      class E extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.appids || n.aR(E.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  additional_featuring: {
                    n: 2,
                    d: !0,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  opt_in_name: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = n.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SetFeaturingOnPartnerAppOptIn_Request";
        }
      }
      class j extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.appids || n.aR(j.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = n.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SetFeaturingOnPartnerAppOptIn_Response";
        }
      }
      class T extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.inviteid || n.aR(T.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  inviteid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  accountid_sender: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  email: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  real_name: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  note: { n: 5, br: n.FE.readString, bw: n.Xc.writeString },
                  time_sent: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  current_state: {
                    n: 7,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  pub_rights: {
                    n: 8,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  app_rights: {
                    n: 9,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  time_receiver_responded: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  accountid: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_partner_responded: {
                    n: 12,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  accountid_partner: {
                    n: 13,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  partnerid: {
                    n: 14,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_last_updated: {
                    n: 15,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  sender_ip: {
                    n: 16,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = n.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "MembershipInvite";
        }
      }
      class D extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.partnerid || n.aR(D.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  partnerid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  filter_states: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readEnum,
                    pbr: n.FE.readPackedEnum,
                    bw: n.Xc.writeRepeatedEnum,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = n.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMembershipInvite_GetInvites_Request";
        }
      }
      class I extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.invites || n.aR(I.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { invites: { n: 1, c: T, r: !0, q: !0 } },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = n.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMembershipInvite_GetInvites_Response";
        }
      }
      var x, C;
      !(function (e) {
        (e.GetSinglePartnerAppOptIn = function (e, t) {
          return e.SendMsg(
            "Publishing.GetSinglePartnerAppOptIn#1",
            (0, a.MD)(O, t),
            W,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.SetFeaturingOnPartnerAppOptIn = function (e, t) {
            return e.SendMsg(
              "Publishing.SetFeaturingOnPartnerAppOptIn#1",
              (0, a.MD)(E, t),
              j,
              { ePrivilege: 1 },
            );
          }),
          (e.CreatePartnerAppOptInEmails = function (e, t) {
            return e.SendMsg(
              "Publishing.CreatePartnerAppOptInEmails#1",
              (0, a.MD)(u, t),
              m,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePartnerAppOptInEmails = function (e, t) {
            return e.SendMsg(
              "Publishing.UpdatePartnerAppOptInEmails#1",
              (0, a.MD)(d, t),
              f,
              { ePrivilege: 1 },
            );
          }),
          (e.SendPartnerOptInEmailAndWait = function (e, t) {
            return e.SendMsg(
              "Publishing.SendPartnerOptInEmailAndWait#1",
              (0, a.MD)(p, t),
              b,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPartnerAppOptInEmailDefAndStats = function (e, t) {
            return e.SendMsg(
              "Publishing.GetPartnerAppOptInEmailDefAndStats#1",
              (0, a.MD)(g, t),
              h,
              { ePrivilege: 1 },
            );
          }),
          (e.GetEstimatePartnerAppOptInEmail = function (e, t) {
            return e.SendMsg(
              "Publishing.GetEstimatePartnerAppOptInEmail#1",
              (0, a.MD)(w, t),
              v,
              { ePrivilege: 1 },
            );
          }),
          (e.TestFirePartnerAppOptInEmail = function (e, t) {
            return e.SendMsg(
              "Publishing.TestFirePartnerAppOptInEmail#1",
              (0, a.MD)(_, t),
              M,
              { ePrivilege: 1 },
            );
          }),
          (e.GetOptInEmailTracking = function (e, t) {
            return e.SendMsg(
              "Publishing.GetOptInEmailTracking#1",
              (0, a.MD)(R, t),
              F,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPartnerPaidGivenPackageList = function (e, t) {
            return e.SendMsg(
              "Publishing.GetPartnerPaidGivenPackageList#1",
              (0, a.MD)(o, t),
              l,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          });
      })(x || (x = {})),
        (function (e) {
          e.GetInvites = function (e, t) {
            return e.SendMsg(
              "PartnerMembershipInvite.GetInvites#1",
              (0, a.MD)(D, t),
              I,
              { bConstMethod: !0, ePrivilege: 11 },
            );
          };
        })(C || (C = {}));
    },
    13557: (e, t, r) => {
      "use strict";
      r.d(t, { Ts: () => M, o0: () => c, yg: () => y });
      var i = r(10059),
        n = r(39087),
        a = r(79545);
      const s = i.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.communityitemid || n.aR(o.M()),
            s.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  item_type: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appid: { n: 3, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  owner: { n: 4, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  attributes: { n: 5, c: l, r: !0, q: !0 },
                  used: { n: 6, br: n.FE.readBool, bw: n.Xc.writeBool },
                  owner_origin: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  amount: {
                    n: 8,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_CommunityItem";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.attributeid || n.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  attributeid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  value: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_CommunityItem_Attribute";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.filter_appids || n.aR(c.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  filter_appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityInventory_Request";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.items || n.aR(u.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: { items: { n: 1, c: o, r: !0, q: !0 } },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityInventory_Response";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.appid || n.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  item_type: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  language: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  broadcast_channel_id: {
                    n: 5,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  keyvalues_as_json: {
                    n: 6,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityItemDefinitions_Request";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.item_definitions || n.aR(d.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: { item_definitions: { n: 1, c: f, r: !0, q: !0 } },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityItemDefinitions_Response";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.item_type || n.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  item_type: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  item_name: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_title: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_description: {
                    n: 5,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_image_small: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_image_large: {
                    n: 7,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_key_values: {
                    n: 8,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_series: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  item_class: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  editor_accountid: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  active: { n: 12, br: n.FE.readBool, bw: n.Xc.writeBool },
                  item_image_composed: {
                    n: 13,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_image_composed_foil: {
                    n: 14,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  deleted: { n: 15, br: n.FE.readBool, bw: n.Xc.writeBool },
                  item_last_changed: {
                    n: 16,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  broadcast_channel_id: {
                    n: 17,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  item_movie_webm: {
                    n: 18,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_movie_mp4: {
                    n: 19,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_movie_webm_small: {
                    n: 20,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_movie_mp4_small: {
                    n: 21,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  item_internal_name: {
                    n: 22,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityItemDefinitions_Response_ItemDefinition";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.appid || n.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  communityitemid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  activate: { n: 3, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_ActivateProfileModifierItem_Request";
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
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_ActivateProfileModifierItem_Response";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.timestamp_start || n.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  timestamp_start: {
                    n: 1,
                    d: 0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  timestamp_end: {
                    n: 2,
                    d: 4294967295,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetNumTradingCardsEarned_Request";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.num_trading_cards || n.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  num_trading_cards: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetNumTradingCardsEarned_Response";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.eventid || n.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  eventid: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  include_inactive: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_VirtualItemRewardDefinition_Request";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.eventid || n.aR(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  eventid: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  item_bucket: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appid: { n: 3, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  active: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                  rarity: { n: 5, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  package_to_grant: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  game_item_id: {
                    n: 7,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  community_item_class: {
                    n: 8,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  community_item_type: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  loyalty_point_type: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  amount: {
                    n: 11,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  rtime_time_active: {
                    n: 12,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  loyalty_reward_defid: {
                    n: 13,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  user_badge_to_grant: {
                    n: 14,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  user_badge_level: {
                    n: 15,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  virtual_item_def_id: {
                    n: 16,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVirtualItemRewardDefinition";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.rewards || n.aR(w.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: { rewards: { n: 1, c: h, r: !0, q: !0 } },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_VirtualItemRewardDefinition_Response";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.eventid || n.aR(v.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  eventid: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  itemsdefs: { n: 2, c: h, r: !0, q: !0 },
                  action: { n: 3, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_SetVirtualItemRewardDefinition_Request";
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
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_SetVirtualItemRewardDefinition_Response";
        }
      }
      var M;
      !(function (e) {
        (e.GetCommunityInventory = function (e, t) {
          return e.SendMsg(
            "Quest.GetCommunityInventory#1",
            (0, a.MD)(c, t),
            u,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetCommunityItemDefinitions = function (e, t) {
            return e.SendMsg(
              "Quest.GetCommunityItemDefinitions#1",
              (0, a.MD)(m, t),
              d,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 4 },
            );
          }),
          (e.ActivateProfileModifierItem = function (e, t) {
            return e.SendMsg(
              "Quest.ActivateProfileModifierItem#1",
              (0, a.MD)(y, t),
              p,
              { ePrivilege: 1 },
            );
          }),
          (e.GetNumTradingCardsEarned = function (e, t) {
            return e.SendMsg(
              "Quest.GetNumTradingCardsEarned#1",
              (0, a.MD)(b, t),
              B,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetVirtualItemRewardDefinition = function (e, t) {
            return e.SendMsg(
              "Quest.GetVirtualItemRewardDefinition#1",
              (0, a.MD)(g, t),
              w,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.SetVirtualItemRewardDefinition = function (e, t) {
            return e.SendMsg(
              "Quest.SetVirtualItemRewardDefinition#1",
              (0, a.MD)(v, t),
              _,
              { ePrivilege: 4 },
            );
          });
      })(M || (M = {}));
    },
    40354: (e, t, r) => {
      "use strict";
      r.d(t, {
        Aw: () => h,
        Fz: () => _,
        R_: () => m,
        Zq: () => j,
        tQ: () => T,
      });
      var i = r(10059),
        n = r(39087),
        a = r(79545);
      const s = i.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.voteid || n.aR(o.M()),
            s.initialize(this, e, 0, -1, [5, 7], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  voteid: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  active: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                  start_time: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  end_time: { n: 4, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  app_discounts: { n: 5, c: l, r: !0, q: !0 },
                  grouped_vote_options: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  groups: { n: 7, c, r: !0, q: !0 },
                  internal_name: {
                    n: 8,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  localization: { n: 9, c: u },
                  reveal_time: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  release_date_min: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  winner_appid: {
                    n: 12,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  flag: { n: 13, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  release_date_max: {
                    n: 14,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  item_type: {
                    n: 15,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.appid || n.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  discount: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_AppDefinition";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.groupid || n.aR(c.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  groupid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  group_name: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  app_discounts: { n: 3, c: l, r: !0, q: !0 },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_GroupDefinition";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.title || n.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  title: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  title_linebreak: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  title_award: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  award_description: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_Localization";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.language || n.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  language: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  sale_appid: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitions_Request";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.votes || n.aR(d.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: { votes: { n: 1, c: o, r: !0, q: !0 } },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitions_Response";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.voteid || n.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  voteid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  communityitemid: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamAwardsUserVote";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.sale_appid || n.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  sale_appid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserVotes_Request";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.user_votes || n.aR(p.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { user_votes: { n: 1, c: f, r: !0, q: !0 } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserVotes_Response";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.voteid || n.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  voteid: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  sale_appid: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetVote_Request";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.user_votes || n.aR(B.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { user_votes: { n: 1, c: f, r: !0, q: !0 } },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetVote_Response";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.category_id || n.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  category_id: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  last_updated: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwardsNomination";
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
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetUserNominations_Request";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.nominations || n.aR(w.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: { nominations: { n: 1, c: g, r: !0, q: !0 } },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetUserNominations_Response";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.steamid || n.aR(v.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  code: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetOtherUserNominations_Request";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.category_id || n.aR(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  category_id: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  nominated_id: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  source: { n: 3, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_Nominate_Request";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.nominations || n.aR(M.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { nominations: { n: 1, c: g, r: !0, q: !0 } },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = n.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_Nominate_Response";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.category_id || n.aR(z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  category_id: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Request";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.played_app || n.aR(R.M()),
            s.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  played_app: { n: 1, c: F, r: !0, q: !0 },
                  suggested_events: { n: 2, c: S, r: !0, q: !0 },
                  suggested_apps: { n: 3, c: O, r: !0, q: !0 },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.appid || n.aR(F.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  playtime: { n: 2, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_PlayedApps";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.clanid || n.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  clanid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  appid: { n: 3, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent";
        }
      }
      class O extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.appid || n.aR(O.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = n.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_SuggestedApp";
        }
      }
      class W extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.generate_new || n.aR(W.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  generate_new: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = n.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationShareLink_Request";
        }
      }
      class E extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.code || n.aR(E.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  code: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = n.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationShareLink_Response";
        }
      }
      var j, T;
      !(function (e) {
        (e.GetVoteDefinitions = function (e, t) {
          return e.SendMsg(
            "StoreSales.GetVoteDefinitions#1",
            (0, a.MD)(m, t),
            d,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.SetVote = function (e, t) {
            return e.SendMsg("StoreSales.SetVote#1", (0, a.MD)(b, t), B, {
              ePrivilege: 1,
            });
          }),
          (e.GetUserVotes = function (e, t) {
            return e.SendMsg("StoreSales.GetUserVotes#1", (0, a.MD)(y, t), p, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          });
      })(j || (j = {})),
        (function (e) {
          (e.GetUserNominations = function (e, t) {
            return e.SendMsg(
              "SteamAwards.GetUserNominations#1",
              (0, a.MD)(h, t),
              w,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
            (e.GetOtherUserNominations = function (e, t) {
              return e.SendMsg(
                "SteamAwards.GetOtherUserNominations#1",
                (0, a.MD)(v, t),
                w,
                { bConstMethod: !0, ePrivilege: 2 },
              );
            }),
            (e.Nominate = function (e, t) {
              return e.SendMsg("SteamAwards.Nominate#1", (0, a.MD)(_, t), M, {
                bConstMethod: !0,
                ePrivilege: 1,
              });
            }),
            (e.GetNominationRecommendations = function (e, t) {
              return e.SendMsg(
                "SteamAwards.GetNominationRecommendations#1",
                (0, a.MD)(z, t),
                R,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.GetNominationShareLink = function (e, t) {
              return e.SendMsg(
                "SteamAwards.GetNominationShareLink#1",
                (0, a.MD)(W, t),
                E,
                { ePrivilege: 1 },
              );
            });
        })(T || (T = {}));
    },
  },
]);
