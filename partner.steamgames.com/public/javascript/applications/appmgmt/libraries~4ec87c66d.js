/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [1084],
  {
    67406: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => c });
      var r = n(98403),
        o = n(20283),
        i = n(90150),
        a = n(73077),
        s = n(12260),
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
    62759: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => c });
      var r = n(98403),
        o = n(90865),
        i = n(90150),
        a = n(73077),
        s = n(12260),
        c = (0, r.gu)({
          chartName: "LineChart",
          GraphicalChild: o.N,
          axisComponents: [
            { axisType: "xAxis", AxisComp: i.W },
            { axisType: "yAxis", AxisComp: a.h },
          ],
          formatAxisMap: s.pr,
        });
    },
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
            var a = Math.abs(r) <= 16 ? 60 * r : r;
            if (0 === a) return this.utc(o);
            var s = this.clone();
            if (o) return (s.$offset = a), (s.$u = !1), s;
            var c = this.$u
              ? this.toDate().getTimezoneOffset()
              : -1 * this.utcOffset();
            return (
              ((s = this.local().add(a + c, e)).$offset = a),
              (s.$x.$localOffset = c),
              s
            );
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
    84974: (e, t, n) => {
      "use strict";
      n.d(t, { Vv: () => Ba, Pp: () => Go, ye: () => $a });
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
      var E = n(34164),
        S = n(61410),
        x = n.n(S),
        O = "milliseconds",
        k = "seconds",
        M = "minutes",
        R = "hours",
        _ = "day",
        T = "week",
        C = "month",
        P = "year",
        N = "decade",
        z = "century",
        L = {
          milliseconds: 1,
          seconds: 1e3,
          minutes: 6e4,
          hours: 36e5,
          day: 864e5,
          week: 6048e5,
        },
        j = { month: 1, year: 12, decade: 120, century: 1200 };
      function F(e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0 ? 29 : 28;
      }
      function W(e, t, n) {
        switch (((e = new Date(e)), n)) {
          case O:
          case k:
          case M:
          case R:
          case _:
          case T:
            return (function (e, t) {
              var n = new Date(+e + t);
              return (function (e, t) {
                var n = e.getTimezoneOffset(),
                  r = t.getTimezoneOffset();
                return new Date(+t + (r - n) * L.minutes);
              })(e, n);
            })(e, t * L[n]);
          case C:
          case P:
          case N:
          case z:
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
                    return [31, F(e), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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
        return W(e, -t, n);
      }
      function H(e, t, n) {
        switch (((e = new Date(e)), t)) {
          case z:
          case N:
          case P:
            e = oe(e, 0);
          case C:
            e = re(e, 1);
          case T:
          case _:
            e = te(e, 0);
          case R:
            e = ee(e, 0);
          case M:
            e = Q(e, 0);
          case k:
            e = J(e, 0);
        }
        return (
          t === N && (e = I(e, ie(e) % 10, "year")),
          t === z && (e = I(e, ie(e) % 100, "year")),
          t === T &&
            (e = (function (e, t, n) {
              var r = (ne(e) + 7 - (n || 0)) % 7;
              return void 0 === t ? r : W(e, t - r, _);
            })(e, 0, n)),
          e
        );
      }
      function Y(e, t, n) {
        switch (((e = H((e = new Date(e)), t, n)), t)) {
          case z:
          case N:
          case P:
          case C:
          case T:
            (e = I((e = W(e, 1, t)), 1, _)).setHours(23, 59, 59, 999);
            break;
          case _:
            e.setHours(23, 59, 59, 999);
            break;
          case R:
          case M:
          case k:
            e = I((e = W(e, 1, t)), 1, O);
        }
        return e;
      }
      var U = se(function (e, t) {
          return e === t;
        }),
        B = se(function (e, t) {
          return e !== t;
        }),
        V = se(function (e, t) {
          return e > t;
        }),
        q = se(function (e, t) {
          return e >= t;
        }),
        K = se(function (e, t) {
          return e < t;
        }),
        $ = se(function (e, t) {
          return e <= t;
        });
      function G() {
        return new Date(Math.min.apply(Math, arguments));
      }
      function X() {
        return new Date(Math.max.apply(Math, arguments));
      }
      function Z(e, t, n, r) {
        return (r = r || "day"), (!t || q(e, t, r)) && (!n || $(e, n, r));
      }
      var J = ae("Milliseconds"),
        Q = ae("Seconds"),
        ee = ae("Minutes"),
        te = ae("Hours"),
        ne = ae("Day"),
        re = ae("Date"),
        oe = ae("Month"),
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
      function se(e) {
        return function (t, n, r) {
          return e(+H(t, r), +H(n, r));
        };
      }
      var ce = n(55635),
        le = n(8950);
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
      var fe = n(7e4),
        de = n(55205),
        pe = 1 / 0;
      const he = function (e) {
        return e
          ? (e = (0, de.A)(e)) === pe || e === -1 / 0
            ? 17976931348623157e292 * (e < 0 ? -1 : 1)
            : e == e
              ? e
              : 0
          : 0 === e
            ? e
            : 0;
      };
      const ve = function (e) {
        var t = he(e),
          n = t % 1;
        return t == t ? (n ? t - n : t) : 0;
      };
      var me = Math.ceil,
        ge = Math.max;
      const ye = function (e, t, n) {
        t = (n ? (0, fe.A)(e, t, n) : void 0 === t) ? 1 : ge(ve(t), 0);
        var r = null == e ? 0 : e.length;
        if (!r || t < 1) return [];
        for (var o = 0, i = 0, a = Array(me(r / t)); o < r; )
          a[i++] = ue(e, o, (o += t));
        return a;
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
      var Ae = /([A-Z])/g;
      var De = /^ms-/;
      function Ee(e) {
        return (function (e) {
          return e.replace(Ae, "-$1").toLowerCase();
        })(e).replace(De, "-ms-");
      }
      var Se =
        /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      const xe = function (e, t) {
        var n = "",
          r = "";
        if ("string" == typeof t)
          return (
            e.style.getPropertyValue(Ee(t)) || we(e).getPropertyValue(Ee(t))
          );
        Object.keys(t).forEach(function (o) {
          var i = t[o];
          i || 0 === i
            ? !(function (e) {
                return !(!e || !Se.test(e));
              })(o)
              ? (n += Ee(o) + ": " + i + ";")
              : (r += o + "(" + i + ") ")
            : e.style.removeProperty(Ee(o));
        }),
          r && (n += "transform: " + r + ";"),
          (e.style.cssText += ";" + n);
      };
      function Oe(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
            ? e === t || !!(16 & e.compareDocumentPosition(t))
            : void 0;
      }
      function ke(e) {
        return "window" in e && e.window === e
          ? e
          : ("nodeType" in (t = e) &&
              t.nodeType === document.DOCUMENT_NODE &&
              e.defaultView) ||
              !1;
        var t;
      }
      function Me(e) {
        var t = "pageXOffset" === e ? "scrollLeft" : "scrollTop";
        return function (n, r) {
          var o = ke(n);
          if (void 0 === r) return o ? o[e] : n[t];
          o ? o.scrollTo(o[e], r) : (n[t] = r);
        };
      }
      const Re = Me("pageXOffset"),
        _e = Me("pageYOffset");
      function Te(e) {
        var t = be(e),
          n = { top: 0, left: 0, height: 0, width: 0 },
          r = t && t.documentElement;
        return r && Oe(r, e)
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
      var Ce = function (e) {
        return !!e && "offsetParent" in e;
      };
      function Pe(e, t) {
        var n,
          r = { top: 0, left: 0 };
        if ("fixed" === xe(e, "position")) n = e.getBoundingClientRect();
        else {
          var o =
            t ||
            (function (e) {
              for (
                var t = be(e), n = e && e.offsetParent;
                Ce(n) &&
                "HTML" !== n.nodeName &&
                "static" === xe(n, "position");
              )
                n = n.offsetParent;
              return n || t.documentElement;
            })(e);
          (n = Te(e)),
            "html" !==
              (function (e) {
                return e.nodeName && e.nodeName.toLowerCase();
              })(o) && (r = Te(o));
          var i = String(xe(o, "borderTopWidth") || 0);
          r.top += parseInt(i, 10) - _e(o) || 0;
          var a = String(xe(o, "borderLeftWidth") || 0);
          r.left += parseInt(a, 10) - Re(o) || 0;
        }
        var s = String(xe(e, "marginTop") || 0),
          c = String(xe(e, "marginLeft") || 0);
        return (0, y.A)({}, n, {
          top: n.top - r.top - (parseInt(s, 10) || 0),
          left: n.left - r.left - (parseInt(c, 10) || 0),
        });
      }
      const Ne = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var ze = new Date().getTime();
      var Le = "clearTimeout",
        je = function (e) {
          var t = new Date().getTime(),
            n = Math.max(0, 16 - (t - ze)),
            r = setTimeout(e, n);
          return (ze = t), r;
        },
        Fe = function (e, t) {
          return (
            e + (e ? t[0].toUpperCase() + t.substr(1) : t) + "AnimationFrame"
          );
        };
      Ne &&
        ["", "webkit", "moz", "o", "ms"].some(function (e) {
          var t = Fe(e, "request");
          return (
            t in window &&
              ((Le = Fe(e, "cancel")),
              (je = function (e) {
                return window[t](e);
              })),
            !!je
          );
        });
      var We = function (e) {
          "function" == typeof window[Le] && window[Le](e);
        },
        Ie = je,
        He = n(72739);
      function Ye() {
        return (0, f.useState)(null);
      }
      const Ue = (e) =>
        e && "function" != typeof e
          ? (t) => {
              e.current = t;
            }
          : e;
      const Be = function (e, t) {
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
      var Ve = "top",
        qe = "bottom",
        Ke = "right",
        $e = "left",
        Ge = "auto",
        Xe = [Ve, qe, Ke, $e],
        Ze = "start",
        Je = "end",
        Qe = "viewport",
        et = "popper",
        tt = Xe.reduce(function (e, t) {
          return e.concat([t + "-" + Ze, t + "-" + Je]);
        }, []),
        nt = [].concat(Xe, [Ge]).reduce(function (e, t) {
          return e.concat([t, t + "-" + Ze, t + "-" + Je]);
        }, []),
        rt = [
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
      const ot = function (e) {
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
      function it(e) {
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
      function ct(e) {
        return e instanceof at(e).HTMLElement || e instanceof HTMLElement;
      }
      function lt(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof at(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var ut = Math.max,
        ft = Math.min,
        dt = Math.round;
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
      function vt(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          o = 1,
          i = 1;
        t &&
          ct(e) &&
          ((o = (e.offsetWidth > 0 && dt(r.width) / e.offsetWidth) || 1),
          (i = (e.offsetHeight > 0 && dt(r.height) / e.offsetHeight) || 1));
        var a = (st(e) ? at(e) : window).visualViewport,
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
      function mt(e) {
        var t = vt(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function gt(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && lt(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function yt(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function bt(e) {
        return at(e).getComputedStyle(e);
      }
      function wt(e) {
        return ["table", "td", "th"].indexOf(yt(e)) >= 0;
      }
      function At(e) {
        return ((st(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function Dt(e) {
        return "html" === yt(e)
          ? e
          : e.assignedSlot || e.parentNode || (lt(e) ? e.host : null) || At(e);
      }
      function Et(e) {
        return ct(e) && "fixed" !== bt(e).position ? e.offsetParent : null;
      }
      function St(e) {
        for (
          var t = at(e), n = Et(e);
          n && wt(n) && "static" === bt(n).position;
        )
          n = Et(n);
        return n &&
          ("html" === yt(n) ||
            ("body" === yt(n) && "static" === bt(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(pt());
                if (
                  /Trident/i.test(pt()) &&
                  ct(e) &&
                  "fixed" === bt(e).position
                )
                  return null;
                var n = Dt(e);
                for (
                  lt(n) && (n = n.host);
                  ct(n) && ["html", "body"].indexOf(yt(n)) < 0;
                ) {
                  var r = bt(n);
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
      function xt(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function Ot(e, t, n) {
        return ut(e, ft(t, n));
      }
      function kt(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function Mt(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      const Rt = {
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
            s = it(n.placement),
            c = xt(s),
            l = [$e, Ke].indexOf(s) >= 0 ? "height" : "width";
          if (i && a) {
            var u = (function (e, t) {
                return kt(
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
                    : Mt(e, Xe),
                );
              })(o.padding, n),
              f = mt(i),
              d = "y" === c ? Ve : $e,
              p = "y" === c ? qe : Ke,
              h =
                n.rects.reference[l] +
                n.rects.reference[c] -
                a[c] -
                n.rects.popper[l],
              v = a[c] - n.rects.reference[c],
              m = St(i),
              g = m
                ? "y" === c
                  ? m.clientHeight || 0
                  : m.clientWidth || 0
                : 0,
              y = h / 2 - v / 2,
              b = u[d],
              w = g - f[l] - u[p],
              A = g / 2 - f[l] / 2 + y,
              D = Ot(b, A, w),
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
            gt(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function _t(e) {
        return e.split("-")[1];
      }
      var Tt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Ct(e) {
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
          b = $e,
          w = Ve,
          A = window;
        if (l) {
          var D = St(n),
            E = "clientHeight",
            S = "clientWidth";
          if (
            (D === at(n) &&
              "static" !== bt((D = At(n))).position &&
              "absolute" === s &&
              ((E = "scrollHeight"), (S = "scrollWidth")),
            o === Ve || ((o === $e || o === Ke) && i === Je))
          )
            (w = qe),
              (v -=
                (f && D === A && A.visualViewport
                  ? A.visualViewport.height
                  : D[E]) - r.height),
              (v *= c ? 1 : -1);
          if (o === $e || ((o === Ve || o === qe) && i === Je))
            (b = Ke),
              (p -=
                (f && D === A && A.visualViewport
                  ? A.visualViewport.width
                  : D[S]) - r.width),
              (p *= c ? 1 : -1);
        }
        var x,
          O = Object.assign({ position: s }, l && Tt),
          k =
            !0 === u
              ? (function (e, t) {
                  var n = e.x,
                    r = e.y,
                    o = t.devicePixelRatio || 1;
                  return { x: dt(n * o) / o || 0, y: dt(r * o) / o || 0 };
                })({ x: p, y: v }, at(n))
              : { x: p, y: v };
        return (
          (p = k.x),
          (v = k.y),
          c
            ? Object.assign(
                {},
                O,
                (((x = {})[w] = y ? "0" : ""),
                (x[b] = g ? "0" : ""),
                (x.transform =
                  (A.devicePixelRatio || 1) <= 1
                    ? "translate(" + p + "px, " + v + "px)"
                    : "translate3d(" + p + "px, " + v + "px, 0)"),
                x),
              )
            : Object.assign(
                {},
                O,
                (((t = {})[w] = y ? v + "px" : ""),
                (t[b] = g ? p + "px" : ""),
                (t.transform = ""),
                t),
              )
        );
      }
      const Pt = {
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
              placement: it(t.placement),
              variation: _t(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: o,
              isFixed: "fixed" === t.options.strategy,
            };
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              Ct(
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
                Ct(
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
      var Nt = { passive: !0 };
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
            a = r.resize,
            s = void 0 === a || a,
            c = at(t.elements.popper),
            l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            i &&
              l.forEach(function (e) {
                e.addEventListener("scroll", n.update, Nt);
              }),
            s && c.addEventListener("resize", n.update, Nt),
            function () {
              i &&
                l.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, Nt);
                }),
                s && c.removeEventListener("resize", n.update, Nt);
            }
          );
        },
        data: {},
      };
      var Lt = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function jt(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return Lt[e];
        });
      }
      var Ft = { start: "end", end: "start" };
      function Wt(e) {
        return e.replace(/start|end/g, function (e) {
          return Ft[e];
        });
      }
      function It(e) {
        var t = at(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function Ht(e) {
        return vt(At(e)).left + It(e).scrollLeft;
      }
      function Yt(e) {
        var t = bt(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function Ut(e) {
        return ["html", "body", "#document"].indexOf(yt(e)) >= 0
          ? e.ownerDocument.body
          : ct(e) && Yt(e)
            ? e
            : Ut(Dt(e));
      }
      function Bt(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = Ut(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = at(r),
          a = o ? [i].concat(i.visualViewport || [], Yt(r) ? r : []) : r,
          s = t.concat(a);
        return o ? s : s.concat(Bt(Dt(a)));
      }
      function Vt(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function qt(e, t, n) {
        return t === Qe
          ? Vt(
              (function (e, t) {
                var n = at(e),
                  r = At(e),
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
                return { width: i, height: a, x: s + Ht(e), y: c };
              })(e, n),
            )
          : st(t)
            ? (function (e, t) {
                var n = vt(e, !1, "fixed" === t);
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
            : Vt(
                (function (e) {
                  var t,
                    n = At(e),
                    r = It(e),
                    o = null == (t = e.ownerDocument) ? void 0 : t.body,
                    i = ut(
                      n.scrollWidth,
                      n.clientWidth,
                      o ? o.scrollWidth : 0,
                      o ? o.clientWidth : 0,
                    ),
                    a = ut(
                      n.scrollHeight,
                      n.clientHeight,
                      o ? o.scrollHeight : 0,
                      o ? o.clientHeight : 0,
                    ),
                    s = -r.scrollLeft + Ht(e),
                    c = -r.scrollTop;
                  return (
                    "rtl" === bt(o || n).direction &&
                      (s += ut(n.clientWidth, o ? o.clientWidth : 0) - i),
                    { width: i, height: a, x: s, y: c }
                  );
                })(At(e)),
              );
      }
      function Kt(e, t, n, r) {
        var o =
            "clippingParents" === t
              ? (function (e) {
                  var t = Bt(Dt(e)),
                    n =
                      ["absolute", "fixed"].indexOf(bt(e).position) >= 0 &&
                      ct(e)
                        ? St(e)
                        : e;
                  return st(n)
                    ? t.filter(function (e) {
                        return st(e) && gt(e, n) && "body" !== yt(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          i = [].concat(o, [n]),
          a = i[0],
          s = i.reduce(
            function (t, n) {
              var o = qt(e, n, r);
              return (
                (t.top = ut(o.top, t.top)),
                (t.right = ft(o.right, t.right)),
                (t.bottom = ft(o.bottom, t.bottom)),
                (t.left = ut(o.left, t.left)),
                t
              );
            },
            qt(e, a, r),
          );
        return (
          (s.width = s.right - s.left),
          (s.height = s.bottom - s.top),
          (s.x = s.left),
          (s.y = s.top),
          s
        );
      }
      function $t(e) {
        var t,
          n = e.reference,
          r = e.element,
          o = e.placement,
          i = o ? it(o) : null,
          a = o ? _t(o) : null,
          s = n.x + n.width / 2 - r.width / 2,
          c = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case Ve:
            t = { x: s, y: n.y - r.height };
            break;
          case qe:
            t = { x: s, y: n.y + n.height };
            break;
          case Ke:
            t = { x: n.x + n.width, y: c };
            break;
          case $e:
            t = { x: n.x - r.width, y: c };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var l = i ? xt(i) : null;
        if (null != l) {
          var u = "y" === l ? "height" : "width";
          switch (a) {
            case Ze:
              t[l] = t[l] - (n[u] / 2 - r[u] / 2);
              break;
            case Je:
              t[l] = t[l] + (n[u] / 2 - r[u] / 2);
          }
        }
        return t;
      }
      function Gt(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          o = void 0 === r ? e.placement : r,
          i = n.strategy,
          a = void 0 === i ? e.strategy : i,
          s = n.boundary,
          c = void 0 === s ? "clippingParents" : s,
          l = n.rootBoundary,
          u = void 0 === l ? Qe : l,
          f = n.elementContext,
          d = void 0 === f ? et : f,
          p = n.altBoundary,
          h = void 0 !== p && p,
          v = n.padding,
          m = void 0 === v ? 0 : v,
          g = kt("number" != typeof m ? m : Mt(m, Xe)),
          y = d === et ? "reference" : et,
          b = e.rects.popper,
          w = e.elements[h ? y : d],
          A = Kt(
            st(w) ? w : w.contextElement || At(e.elements.popper),
            c,
            u,
            a,
          ),
          D = vt(e.elements.reference),
          E = $t({
            reference: D,
            element: b,
            strategy: "absolute",
            placement: o,
          }),
          S = Vt(Object.assign({}, b, E)),
          x = d === et ? S : D,
          O = {
            top: A.top - x.top + g.top,
            bottom: x.bottom - A.bottom + g.bottom,
            left: A.left - x.left + g.left,
            right: x.right - A.right + g.right,
          },
          k = e.modifiersData.offset;
        if (d === et && k) {
          var M = k[o];
          Object.keys(O).forEach(function (e) {
            var t = [Ke, qe].indexOf(e) >= 0 ? 1 : -1,
              n = [Ve, qe].indexOf(e) >= 0 ? "y" : "x";
            O[e] += M[n] * t;
          });
        }
        return O;
      }
      const Xt = {
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
                g = it(m),
                y =
                  c ||
                  (g === m || !h
                    ? [jt(m)]
                    : (function (e) {
                        if (it(e) === Ge) return [];
                        var t = jt(e);
                        return [Wt(e), t, Wt(t)];
                      })(m)),
                b = [m].concat(y).reduce(function (e, n) {
                  return e.concat(
                    it(n) === Ge
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var n = t,
                            r = n.placement,
                            o = n.boundary,
                            i = n.rootBoundary,
                            a = n.padding,
                            s = n.flipVariations,
                            c = n.allowedAutoPlacements,
                            l = void 0 === c ? nt : c,
                            u = _t(r),
                            f = u
                              ? s
                                ? tt
                                : tt.filter(function (e) {
                                    return _t(e) === u;
                                  })
                              : Xe,
                            d = f.filter(function (e) {
                              return l.indexOf(e) >= 0;
                            });
                          0 === d.length && (d = f);
                          var p = d.reduce(function (t, n) {
                            return (
                              (t[n] = Gt(e, {
                                placement: n,
                                boundary: o,
                                rootBoundary: i,
                                padding: a,
                              })[it(n)]),
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
                x = 0;
              x < b.length;
              x++
            ) {
              var O = b[x],
                k = it(O),
                M = _t(O) === Ze,
                R = [Ve, qe].indexOf(k) >= 0,
                _ = R ? "width" : "height",
                T = Gt(t, {
                  placement: O,
                  boundary: u,
                  rootBoundary: f,
                  altBoundary: d,
                  padding: l,
                }),
                C = R ? (M ? Ke : $e) : M ? qe : Ve;
              w[_] > A[_] && (C = jt(C));
              var P = jt(C),
                N = [];
              if (
                (i && N.push(T[k] <= 0),
                s && N.push(T[C] <= 0, T[P] <= 0),
                N.every(function (e) {
                  return e;
                }))
              ) {
                (S = O), (E = !1);
                break;
              }
              D.set(O, N);
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
      function Zt(e, t, n) {
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
      function Jt(e) {
        return [Ve, Ke, qe, $e].some(function (t) {
          return e[t] >= 0;
        });
      }
      const Qt = {
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
            a = nt.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = it(e),
                    o = [$e, Ve].indexOf(r) >= 0 ? -1 : 1,
                    i =
                      "function" == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    a = i[0],
                    s = i[1];
                  return (
                    (a = a || 0),
                    (s = (s || 0) * o),
                    [$e, Ke].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
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
      const en = {
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
            m = Gt(t, {
              boundary: c,
              rootBoundary: l,
              padding: f,
              altBoundary: u,
            }),
            g = it(t.placement),
            y = _t(t.placement),
            b = !y,
            w = xt(g),
            A = "x" === w ? "y" : "x",
            D = t.modifiersData.popperOffsets,
            E = t.rects.reference,
            S = t.rects.popper,
            x =
              "function" == typeof v
                ? v(Object.assign({}, t.rects, { placement: t.placement }))
                : v,
            O =
              "number" == typeof x
                ? { mainAxis: x, altAxis: x }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, x),
            k = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            M = { x: 0, y: 0 };
          if (D) {
            if (i) {
              var R,
                _ = "y" === w ? Ve : $e,
                T = "y" === w ? qe : Ke,
                C = "y" === w ? "height" : "width",
                P = D[w],
                N = P + m[_],
                z = P - m[T],
                L = p ? -S[C] / 2 : 0,
                j = y === Ze ? E[C] : S[C],
                F = y === Ze ? -S[C] : -E[C],
                W = t.elements.arrow,
                I = p && W ? mt(W) : { width: 0, height: 0 },
                H = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                Y = H[_],
                U = H[T],
                B = Ot(0, E[C], I[C]),
                V = b
                  ? E[C] / 2 - L - B - Y - O.mainAxis
                  : j - B - Y - O.mainAxis,
                q = b
                  ? -E[C] / 2 + L + B + U + O.mainAxis
                  : F + B + U + O.mainAxis,
                K = t.elements.arrow && St(t.elements.arrow),
                $ = K ? ("y" === w ? K.clientTop || 0 : K.clientLeft || 0) : 0,
                G = null != (R = null == k ? void 0 : k[w]) ? R : 0,
                X = P + q - G,
                Z = Ot(p ? ft(N, P + V - G - $) : N, P, p ? ut(z, X) : z);
              (D[w] = Z), (M[w] = Z - P);
            }
            if (s) {
              var J,
                Q = "x" === w ? Ve : $e,
                ee = "x" === w ? qe : Ke,
                te = D[A],
                ne = "y" === A ? "height" : "width",
                re = te + m[Q],
                oe = te - m[ee],
                ie = -1 !== [Ve, $e].indexOf(g),
                ae = null != (J = null == k ? void 0 : k[A]) ? J : 0,
                se = ie ? re : te - E[ne] - S[ne] - ae + O.altAxis,
                ce = ie ? te + E[ne] + S[ne] - ae - O.altAxis : oe,
                le =
                  p && ie
                    ? (function (e, t, n) {
                        var r = Ot(e, t, n);
                        return r > n ? n : r;
                      })(se, te, ce)
                    : Ot(p ? se : re, te, p ? ce : oe);
              (D[A] = le), (M[A] = le - te);
            }
            t.modifiersData[r] = M;
          }
        },
        requiresIfExists: ["offset"],
      };
      function tn(e, t, n) {
        void 0 === n && (n = !1);
        var r,
          o,
          i = ct(t),
          a =
            ct(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = dt(t.width) / e.offsetWidth || 1,
                r = dt(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          s = At(t),
          c = vt(e, a, n),
          l = { scrollLeft: 0, scrollTop: 0 },
          u = { x: 0, y: 0 };
        return (
          (i || (!i && !n)) &&
            (("body" !== yt(t) || Yt(s)) &&
              (l =
                (r = t) !== at(r) && ct(r)
                  ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop }
                  : It(r)),
            ct(t)
              ? (((u = vt(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
              : s && (u.x = Ht(s))),
          {
            x: c.left + l.scrollLeft - u.x,
            y: c.top + l.scrollTop - u.y,
            width: c.width,
            height: c.height,
          }
        );
      }
      function nn(e) {
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
      var rn = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function on() {
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
          i = void 0 === o ? rn : o;
        return function (e, t, n) {
          void 0 === n && (n = i);
          var o,
            a,
            s = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, rn, i),
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
                    reference: st(e)
                      ? Bt(e)
                      : e.contextElement
                        ? Bt(e.contextElement)
                        : [],
                    popper: Bt(t),
                  });
                var a,
                  l,
                  d = (function (e) {
                    var t = nn(e);
                    return rt.reduce(function (e, n) {
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
                  if (on(t, n)) {
                    (s.rects = {
                      reference: tn(t, St(n), "fixed" === s.options.strategy),
                      popper: mt(n),
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
          if (!on(e, t)) return u;
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
                  a = Gt(t, { elementContext: "reference" }),
                  s = Gt(t, { altBoundary: !0 }),
                  c = Zt(a, r),
                  l = Zt(s, o, i),
                  u = Jt(c),
                  f = Jt(l);
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
                t.modifiersData[n] = $t({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            Pt,
            zt,
            Qt,
            Xt,
            en,
            Rt,
          ],
        }),
        cn = function (e) {
          return {
            position: e,
            top: "0",
            left: "0",
            opacity: "0",
            pointerEvents: "none",
          };
        },
        ln = { name: "applyStyles", enabled: !1 },
        un = {
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
        fn = [];
      const dn = function (e, t, n) {
        var r = void 0 === n ? {} : n,
          o = r.enabled,
          i = void 0 === o || o,
          a = r.placement,
          s = void 0 === a ? "bottom" : a,
          c = r.strategy,
          l = void 0 === c ? "absolute" : c,
          u = r.modifiers,
          d = void 0 === u ? fn : u,
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
          b = ot(
            (0, f.useState)({
              placement: s,
              update: v,
              forceUpdate: m,
              attributes: {},
              styles: { popper: cn(l), arrow: {} },
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
                  modifiers: [].concat(d, [D, ln]),
                });
            },
            [l, s, D, i],
          ),
          (0, f.useEffect)(
            function () {
              if (i && null != e && null != t)
                return (
                  (h.current = sn(
                    e,
                    t,
                    (0, y.A)({}, p, {
                      placement: s,
                      strategy: l,
                      modifiers: [].concat(d, [un, D]),
                    }),
                  )),
                  function () {
                    null != h.current &&
                      (h.current.destroy(),
                      (h.current = void 0),
                      A(function (e) {
                        return (0, y.A)({}, e, {
                          attributes: {},
                          styles: { popper: cn(l) },
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
      var pn = !1,
        hn = !1;
      try {
        var vn = {
          get passive() {
            return (pn = !0);
          },
          get once() {
            return (hn = pn = !0);
          },
        };
        Ne &&
          (window.addEventListener("test", vn, vn),
          window.removeEventListener("test", vn, !0));
      } catch (e) {}
      const mn = function (e, t, n, r) {
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
            e.addEventListener(t, a, pn ? r : i);
        }
        e.addEventListener(t, n, r);
      };
      const gn = function (e, t, n, r) {
        var o = r && "boolean" != typeof r ? r.capture : r;
        e.removeEventListener(t, n, o),
          n.__once && e.removeEventListener(t, n.__once, o);
      };
      const yn = function (e, t, n, r) {
        return (
          mn(e, t, n, r),
          function () {
            gn(e, t, n, r);
          }
        );
      };
      const bn = function (e) {
        const t = (0, f.useRef)(e);
        return (
          (0, f.useEffect)(() => {
            t.current = e;
          }, [e]),
          t
        );
      };
      function wn(e) {
        const t = bn(e);
        return (0, f.useCallback)(
          function (...e) {
            return t.current && t.current(...e);
          },
          [t],
        );
      }
      var An = n(67501),
        Dn = n.n(An);
      const En = function (e) {
        return be(
          (function (e) {
            return e && "setState" in e
              ? He.findDOMNode(e)
              : null != e
                ? e
                : null;
          })(e),
        );
      };
      var Sn = function () {};
      var xn = function (e) {
        return e && ("current" in e ? e.current : e);
      };
      const On = function (e, t, n) {
        var r = void 0 === n ? {} : n,
          o = r.disabled,
          i = r.clickTrigger,
          a = void 0 === i ? "click" : i,
          s = (0, f.useRef)(!1),
          c = t || Sn,
          l = (0, f.useCallback)(
            function (t) {
              var n,
                r,
                o = xn(e);
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
                  !Oe(
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
          u = wn(function (e) {
            s.current || c(e);
          }),
          d = wn(function (e) {
            27 === e.keyCode && c(e);
          });
        (0, f.useEffect)(
          function () {
            if (!o && null != e) {
              var t = window.event,
                n = En(xn(e)),
                r = yn(n, a, l, !0),
                i = yn(n, a, function (e) {
                  e !== t ? u(e) : (t = void 0);
                }),
                s = yn(n, "keyup", function (e) {
                  e !== t ? d(e) : (t = void 0);
                }),
                c = [];
              return (
                "ontouchstart" in n.documentElement &&
                  (c = [].slice.call(n.body.children).map(function (e) {
                    return yn(e, "mousemove", Sn);
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
      var kn = function (e) {
        var t;
        return "undefined" == typeof document
          ? null
          : null == e
            ? be().body
            : ("function" == typeof e && (e = e()),
              e && "current" in e && (e = e.current),
              (null != (t = e) && t.nodeType && e) || null);
      };
      function Mn(e, t) {
        var n = (0, f.useState)(function () {
            return kn(e);
          }),
          r = n[0],
          o = n[1];
        if (!r) {
          var i = kn(e);
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
              var t = kn(e);
              t !== r && o(t);
            },
            [e, r],
          ),
          r
        );
      }
      function Rn(e) {
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
      var _n = f.forwardRef(function (e, t) {
        var n = e.flip,
          r = e.offset,
          o = e.placement,
          i = e.containerPadding,
          a = void 0 === i ? 5 : i,
          s = e.popperConfig,
          c = void 0 === s ? {} : s,
          l = e.transition,
          u = Ye(),
          d = u[0],
          p = u[1],
          h = Ye(),
          v = h[0],
          m = h[1],
          b = Be(p, t),
          w = Mn(e.container),
          A = Mn(e.target),
          D = (0, f.useState)(!e.show),
          E = D[0],
          S = D[1],
          x = dn(
            A,
            d,
            Rn({
              placement: o,
              enableEvents: !!e.show,
              containerPadding: a || 5,
              flip: n,
              offset: r,
              arrowElement: v,
              popperConfig: c,
            }),
          ),
          O = x.styles,
          k = x.attributes,
          M = (0, g.A)(x, ["styles", "attributes"]);
        e.show ? E && S(!1) : e.transition || E || S(!0);
        var R = e.show || (l && !E);
        if (
          (On(d, e.onHide, {
            disabled: !e.rootClose || e.rootCloseDisabled,
            clickTrigger: e.rootCloseEvent,
          }),
          !R)
        )
          return null;
        var _ = e.children(
          (0, y.A)({}, M, {
            show: !!e.show,
            props: (0, y.A)({}, k.popper, { style: O.popper, ref: b }),
            arrowProps: (0, y.A)({}, k.arrow, { style: O.arrow, ref: m }),
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
        return w ? He.createPortal(_, w) : null;
      });
      (_n.displayName = "Overlay"),
        (_n.propTypes = {
          show: x().bool,
          placement: x().oneOf(nt),
          target: x().any,
          container: x().any,
          flip: x().bool,
          children: x().func.isRequired,
          containerPadding: x().number,
          popperConfig: x().object,
          rootClose: x().bool,
          rootCloseEvent: x().oneOf(["click", "mousedown"]),
          rootCloseDisabled: x().bool,
          onHide: function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            var o;
            return e.rootClose
              ? (o = x().func).isRequired.apply(o, [e].concat(n))
              : x().func.apply(x(), [e].concat(n));
          },
          transition: x().elementType,
          onEnter: x().func,
          onEntering: x().func,
          onEntered: x().func,
          onExit: x().func,
          onExiting: x().func,
          onExited: x().func,
        });
      const Tn = _n;
      var Cn = n(13964);
      const Pn = function (e, t) {
        return (0, Cn.A)(e, t);
      };
      function Nn(e, t) {
        var n = ke(e);
        return n ? n.innerHeight : t ? e.clientHeight : Te(e).height;
      }
      var zn,
        Ln = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function jn(e, t) {
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
      function Fn(e, t, n) {
        e.closest && !n && e.closest(t);
        var r = e;
        do {
          if (jn(r, t)) return r;
          r = r.parentElement;
        } while (r && r !== n && r.nodeType === document.ELEMENT_NODE);
        return null;
      }
      const Wn = function (e, t, n, r) {
        for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
          if (t(e[i], i, e)) return i;
        return -1;
      };
      var In = n(39648),
        Hn = Math.max;
      const Yn = function (e, t, n) {
        var r = null == e ? 0 : e.length;
        if (!r) return -1;
        var o = null == n ? 0 : ve(n);
        return o < 0 && (o = Hn(r + o, 0)), Wn(e, (0, In.A)(t, 3), o);
      };
      var Un = Math.ceil,
        Bn = Math.max;
      const Vn = function (e, t, n, r) {
        for (var o = -1, i = Bn(Un((t - e) / (n || 1)), 0), a = Array(i); i--; )
          (a[r ? i : ++o] = e), (e += n);
        return a;
      };
      const qn = function (e) {
        return function (t, n, r) {
          return (
            r && "number" != typeof r && (0, fe.A)(t, n, r) && (n = r = void 0),
            (t = he(t)),
            void 0 === n ? ((n = t), (t = 0)) : (n = he(n)),
            (r = void 0 === r ? (t < n ? 1 : -1) : he(r)),
            Vn(t, n, r, e)
          );
        };
      };
      const Kn = qn();
      var $n =
        Number.isNaN ||
        function (e) {
          return "number" == typeof e && e != e;
        };
      function Gn(e, t) {
        return e === t || !(!$n(e) || !$n(t));
      }
      function Xn(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) if (!Gn(e[n], t[n])) return !1;
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
      var hr = n(41040);
      const vr = function (e, t, n) {
        t = t.length
          ? (0, ar.A)(t, function (e) {
              return (0, nr.A)(e)
                ? function (t) {
                    return (0, sr.A)(t, 1 === e.length ? e[0] : e);
                  }
                : e;
            })
          : [hr.A];
        var r = -1;
        t = (0, ar.A)(t, (0, ur.A)(In.A));
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
          n > 1 && (0, fe.A)(e, t[0], t[1])
            ? (t = [])
            : n > 2 && (0, fe.A)(t[0], t[1], t[2]) && (t = [t[0]]),
          vr(e, ir(t, 1), [])
        );
      });
      var yr;
      function br(e) {
        if (((!yr && 0 !== yr) || e) && Ne) {
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
        var n = ke(e);
        return n ? n.innerWidth : t ? e.clientWidth : Te(e).width;
      }
      var Ar = n(87537),
        Dr = n(76805),
        Er = n(78296),
        Sr = n(79474);
      function xr(e) {
        return (0, Ar.A)(e) || (0, Dr.A)(e) || (0, Er.A)(e) || (0, Sr.A)();
      }
      var Or = n(39234),
        kr = n(16673),
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
      var Lr = n(27066),
        jr = n(80335),
        Fr = n(25606);
      const Wr = function (e, t) {
        return (0, Tr.A)(e, (0, Fr.A)(e), t);
      };
      var Ir = n(57695),
        Hr = n(72097);
      const Yr = Object.getOwnPropertySymbols
        ? function (e) {
            for (var t = []; e; )
              (0, Qn.A)(t, (0, Fr.A)(e)), (e = (0, Ir.A)(e));
            return t;
          }
        : Hr.A;
      const Ur = function (e, t) {
        return (0, Tr.A)(e, Yr(e), t);
      };
      var Br = n(81218),
        Vr = n(80647);
      const qr = function (e) {
        return (0, Vr.A)(e, Nr.A, Yr);
      };
      var Kr = n(14645),
        $r = Object.prototype.hasOwnProperty;
      const Gr = function (e) {
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
        ao = n(6314),
        so = n(83658);
      const co = function (e) {
        return (0, so.A)(e) && "[object Map]" == (0, Kr.A)(e);
      };
      var lo = n(23785),
        uo = lo.A && lo.A.isMap;
      const fo = uo ? (0, ur.A)(uo) : co;
      var po = n(35181);
      const ho = function (e) {
        return (0, so.A)(e) && "[object Set]" == (0, Kr.A)(e);
      };
      var vo = lo.A && lo.A.isSet;
      const mo = vo ? (0, ur.A)(vo) : ho;
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
          if (((s = Gr(t)), !c)) return (0, jr.A)(t, s);
        } else {
          var d = (0, Kr.A)(t),
            p = d == yo || "[object GeneratorFunction]" == d;
          if ((0, ao.A)(t)) return (0, Lr.A)(t, c);
          if (d == bo || d == go || (p && !i)) {
            if (((s = l || p ? {} : (0, io.A)(t)), !c))
              return l ? Ur(t, zr(s, t)) : Wr(t, Pr(s, t));
          } else {
            if (!wo[d]) return i ? t : {};
            s = oo(t, d, c);
          }
        }
        a || (a = new Mr.A());
        var h = a.get(t);
        if (h) return h;
        a.set(t, s),
          mo(t)
            ? t.forEach(function (o) {
                s.add(e(o, n, r, o, t, a));
              })
            : fo(t) &&
              t.forEach(function (o, i) {
                s.set(i, e(o, n, r, i, t, a));
              });
        var v = u ? (l ? qr : Br.A) : l ? Nr.A : Cr.A,
          m = f ? void 0 : v(t);
        return (
          (0, Rr.A)(m || t, function (o, i) {
            m && (o = t[(i = o)]), (0, _r.A)(s, i, e(o, n, r, i, t, a));
          }),
          s
        );
      };
      var Do = n(1931);
      const Eo = function (e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0;
      };
      const So = function (e, t) {
        return t.length < 2 ? e : (0, sr.A)(e, ue(t, 0, -1));
      };
      var xo = n(5269);
      const Oo = function (e, t) {
        return (
          (t = (0, Do.A)(t, e)),
          null == (e = So(e, t)) || delete e[(0, xo.A)(Eo(t))]
        );
      };
      var ko = n(77011);
      const Mo = function (e) {
        return (0, ko.A)(e) ? void 0 : e;
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
          return (t = (0, Do.A)(t, e)), r || (r = t.length > 1), t;
        })),
          (0, Tr.A)(e, qr(e), n),
          r && (n = Ao(n, 7, Mo));
        for (var o = t.length; o--; ) Oo(n, t[o]);
        return n;
      });
      var Po = n(58760),
        No = Object.prototype,
        zo = No.hasOwnProperty;
      const Lo = (0, mr.A)(function (e, t) {
        e = Object(e);
        var n = -1,
          r = t.length,
          o = r > 2 ? t[2] : void 0;
        for (o && (0, fe.A)(t[0], t[1], o) && (r = 1); ++n < r; )
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
      var jo = n(5536),
        Fo = n(25665),
        Wo = n(30186),
        Io = n(48693);
      const Ho = function (e, t, n) {
        var r = (0, nr.A)(e),
          o = r || (0, ao.A)(e) || (0, Io.A)(e);
        if (((t = (0, In.A)(t, 4)), null == n)) {
          var i = e && e.constructor;
          n = o
            ? r
              ? new i()
              : []
            : (0, po.A)(e) && (0, Wo.A)(i)
              ? (0, jo.A)((0, Ir.A)(e))
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
      const Uo = function (e, t) {
        var n = {};
        return (
          (t = (0, In.A)(t, 3)),
          (0, Fo.A)(e, function (e, r, o) {
            (0, Yo.A)(n, r, t(e, r, o));
          }),
          n
        );
      };
      n(22586), n(20237), n(83632), n(43334), n(39920), n(4042), n(14240);
      function Bo(e) {
        return e.children;
      }
      var Vo = "PREV",
        qo = "NEXT",
        Ko = "TODAY",
        $o = "DATE",
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
      x().oneOfType([x().string, x().func]),
        x().any,
        x().func,
        x().oneOfType([
          x().arrayOf(x().oneOf(Xo)),
          x().objectOf(function (e, t) {
            if (-1 !== Xo.indexOf(t) && "boolean" == typeof e[t]) return null;
            for (
              var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
              o < n;
              o++
            )
              r[o - 2] = arguments[o];
            return x().elementType.apply(x(), [e, t].concat(r));
          }),
        ]),
        x().oneOfType([x().oneOf(["overlap", "no-overlap"]), x().func]);
      var Jo = { seconds: 1e3, minutes: 6e4, hours: 36e5, day: 864e5 };
      function Qo(e, t) {
        var n = H(e, "month");
        return H(n, "week", t.startOfWeek());
      }
      function ei(e, t) {
        var n = Y(e, "month");
        return Y(n, "week", t.startOfWeek());
      }
      function ti(e, t) {
        for (var n = Qo(e, t), r = ei(e, t), o = []; $(n, r, "day"); )
          o.push(n), (n = W(n, 1, "day"));
        return o;
      }
      function ni(e, t) {
        var n = H(e, t);
        return U(n, e) ? n : W(n, 1, t);
      }
      function ri(e, t) {
        for (
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "day",
            r = e,
            o = [];
          $(r, t, n);
        )
          o.push(r), (r = W(r, 1, n));
        return o;
      }
      function oi(e, t) {
        return null == t && null == e
          ? null
          : (null == t && (t = new Date()),
            null == e && (e = new Date()),
            (e = H(e, "day")),
            (e = te(e, te(t))),
            (e = ee(e, ee(t))),
            (e = Q(e, Q(t))),
            J(e, J(t)));
      }
      function ii(e) {
        return 0 === te(e) && 0 === ee(e) && 0 === Q(e) && 0 === J(e);
      }
      function ai(e, t, n) {
        return n && "milliseconds" !== n
          ? Math.round(Math.abs(+H(e, n) / Jo[n] - +H(t, n) / Jo[n]))
          : Math.abs(+e - +t);
      }
      var si = x().oneOfType([x().string, x().func]);
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
        var t = H(e, "day");
        return ai(t, e, "minutes") + ui(t, e);
      }
      function pi(e, t) {
        return K(e, t, "day");
      }
      function hi(e, t, n) {
        return U(e, t, "minutes") ? q(t, n, "minutes") : V(t, n, "minutes");
      }
      function vi(e) {
        var t = e.evtA,
          n = t.start,
          r = t.end,
          o = t.allDay,
          i = e.evtB,
          a = i.start,
          s = i.end,
          c = i.allDay,
          l = +H(n, "day") - +H(a, "day"),
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
          s = H(n, "day"),
          c = $(s, a, "day"),
          l = B(s, r, "minutes") ? V(r, i, "minutes") : q(r, i, "minutes");
        return c && l;
      }
      function gi(e, t) {
        return U(e, t, "day");
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
          (this.inRange = t.inRange || Z),
          (this.lt = t.lt || K),
          (this.lte = t.lte || $),
          (this.gt = t.gt || V),
          (this.gte = t.gte || q),
          (this.eq = t.eq || U),
          (this.neq = t.neq || B),
          (this.startOf = t.startOf || H),
          (this.endOf = t.endOf || Y),
          (this.add = t.add || W),
          (this.range = t.range || ri),
          (this.diff = t.diff || ai),
          (this.ceil = t.ceil || ni),
          (this.min = t.min || G),
          (this.max = t.max || X),
          (this.minutes = t.minutes || ee),
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
          (this.continuesAfter = t.continuesAfter || hi),
          (this.sortEvents = t.sortEvents || vi),
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
      var Di = [
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
        Ei = (function (e) {
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
                    S = (0, o.A)(e, Di);
                  delete S.resizable;
                  var x = v.title(i),
                    O = v.tooltip(i),
                    k = v.end(i),
                    M = v.start(i),
                    R = v.allDay(i),
                    _ = s || R || d.diff(M, d.ceil(k, "day"), "day") > 1,
                    T = m.eventProp(i, M, k, a),
                    C = f.createElement(
                      "div",
                      { className: "rbc-event-content", title: O || void 0 },
                      b
                        ? f.createElement(b, {
                            event: i,
                            continuesPrior: p,
                            continuesAfter: h,
                            title: x,
                            isAllDay: R,
                            localizer: d,
                            slotStart: A,
                            slotEnd: D,
                          })
                        : x,
                    );
                  return f.createElement(
                    w,
                    Object.assign({}, this.props, { type: "date" }),
                    f.createElement(
                      "div",
                      Object.assign({}, S, {
                        tabIndex: 0,
                        style: (0, r.A)((0, r.A)({}, T.style), t),
                        className: (0, E.A)("rbc-event", n, T.className, {
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
      function Si(e, t) {
        return !(!e || null == t) && Pn(e, t);
      }
      function xi(e, t) {
        return (e.right - e.left) / t;
      }
      function Oi(e, t, n, r) {
        var o = xi(e, r);
        return n
          ? r - 1 - Math.floor((t - e.left) / o)
          : Math.floor((t - e.left) / o);
      }
      function ki(e) {
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
                    i = Te(t),
                    a = i.top,
                    s = i.left,
                    c = i.width,
                    l = i.height,
                    u = Te(r),
                    f = u.top,
                    d = u.left,
                    p = u.width,
                    h = u.height,
                    v = Te(o),
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
            return f.createElement(Ei, {
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
        return f.createElement(ki, Object.assign({}, e, { popperRef: t }));
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
          Tn,
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
      Mi.propTypes = {
        accessors: x().object.isRequired,
        getters: x().object.isRequired,
        selected: x().object,
        components: x().object.isRequired,
        localizer: x().object.isRequired,
        position: x().object.isRequired,
        show: x().func.isRequired,
        events: x().array.isRequired,
        slotStart: x().instanceOf(Date).isRequired,
        slotEnd: x().instanceOf(Date),
        onSelect: x().func,
        onDoubleClick: x().func,
        onKeyPress: x().func,
        handleDragStart: x().func,
        style: x().object,
        offset: x().shape({ x: x().number, y: x().number }),
      };
      var _i = f.forwardRef(function (e, t) {
        return f.createElement(Ri, Object.assign({}, e, { containerRef: t }));
      });
      function Ti(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : document;
        return yn(n, e, t, { passive: !1 });
      }
      function Ci(e, t) {
        return !!(function (e, t) {
          var n = t.clientX,
            r = t.clientY;
          return Fn(document.elementFromPoint(n, r), ".rbc-event", e);
        })(e, t);
      }
      function Pi(e, t) {
        return !!(function (e, t) {
          var n = t.clientX,
            r = t.clientY;
          return Fn(document.elementFromPoint(n, r), ".rbc-show-more", e);
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
        popupOffset: x().oneOfType([
          x().number,
          x().shape({ x: x().number, y: x().number }),
        ]),
        overlay: x().shape({
          position: x().object,
          events: x().array,
          date: x().instanceOf(Date),
          end: x().instanceOf(Date),
        }),
        accessors: x().object.isRequired,
        localizer: x().object.isRequired,
        components: x().object.isRequired,
        getters: x().object.isRequired,
        selected: x().object,
        handleSelectEvent: x().func,
        handleDoubleClickEvent: x().func,
        handleKeyPressEvent: x().func,
        handleDragStart: x().func,
        onHide: x().func,
        overlayDisplay: x().func,
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
                return !(!t || !this.selecting) && Li(t, ji(e));
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
                    !(l = c) || Oe(l, document.elementFromPoint(u, f)))
                  ) {
                    var l, u, f;
                    if (!this.globalMouse && c && !Oe(c, e.target)) {
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
                        !Li(
                          {
                            top: (t = ji(c)).top - p,
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
                  var o = !this.container || Oe(this.container(), e.target),
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
      function Li(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = ji(e),
          o = r.top,
          i = r.left,
          a = r.right,
          s = void 0 === a ? i : a,
          c = r.bottom,
          l = void 0 === c ? o : c,
          u = ji(t),
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
      function ji(e) {
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
      var Wi = (function (e) {
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
                          className: (0, E.A)(
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
                    n = (this._selector = new zi(this.props.container, {
                      longPressThreshold: this.props.longPressThreshold,
                    })),
                    o = function (n, r) {
                      if (!Ci(t, n) && !Pi(t, n)) {
                        var o = ji(t),
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
                      var l = ji(t),
                        u = (function (e, t, n, r, o) {
                          var i = -1,
                            a = -1,
                            s = r - 1,
                            c = xi(t, r),
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
        Ii =
          (x().object.isRequired,
          x().object,
          x().bool,
          x().object.isRequired,
          x().object.isRequired,
          x().object.isRequired,
          x().object.isRequired,
          x().func,
          x().func,
          x().func,
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
            h = l.continuesAfter(t);
          return f.createElement(Ei, {
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
        Ui = (function (e) {
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
                    { className: (0, E.A)(o, "rbc-row") },
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
      function Bi(e) {
        var t = e.dateRange,
          n = e.unit,
          r = void 0 === n ? "day" : n,
          o = e.localizer;
        return { first: t[0], last: o.add(t[t.length - 1], 1, r) };
      }
      function Vi(e) {
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
      function qi(e, t, n, r, o) {
        var i = { start: r.start(e), end: r.end(e) },
          a = { start: t, end: n };
        return o.inEventRange({ event: i, range: a });
      }
      function Ki(e, t) {
        return t.some(function (t) {
          return t.left <= e.right && t.right >= e.left;
        });
      }
      function $i(e, t, n, r) {
        var o = { start: n.start(e), end: n.end(e), allDay: n.allDay(e) },
          i = { start: n.start(t), end: n.end(t), allDay: n.allDay(t) };
        return r.sortEvents({ evtA: o, evtB: i });
      }
      Ui.defaultProps = (0, r.A)({}, Ii);
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
                      r = Vi(t).levels[0],
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
                      var h = Math.max(0, u - i);
                      if (this.canRenderSlotEvent(u, p)) {
                        var v = Hi(this.props, l);
                        h && a.push(Yi(n, h, s + "_gap")),
                          a.push(Yi(n, p, s, v)),
                          (i = o = d + 1);
                      } else
                        h && a.push(Yi(n, h, s + "_gap")),
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
                  return Kn(e, e + t).every(function (e) {
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
                        className: (0, E.A)("rbc-button-link", "rbc-show-more"),
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
      Zi.defaultProps = (0, r.A)({}, Ii);
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
              c = Bi({ dateRange: t, localizer: s }),
              l = c.first,
              u = c.last,
              f = n.map(function (e) {
                return (function (e, t, n, r) {
                  var o = Bi({ dateRange: t, localizer: r }),
                    i = o.first,
                    a = o.last,
                    s = r.diff(i, a, "day"),
                    c = r.max(r.startOf(n.start(e), "day"), i),
                    l = r.min(r.ceil(n.end(e), "day"), a),
                    u = Yn(t, function (e) {
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
              d = Vi(f, Math.max(o - 1, 1)),
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
                className: (0, E.A)(
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
                    className: (0, E.A)(
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
                  t = Nn(this.eventRowRef.current),
                  n =
                    null !== (e = this.headingRowRef) &&
                    void 0 !== e &&
                    e.current
                      ? Nn(this.headingRowRef.current)
                      : 0,
                  r = Nn(this.containerRef.current) - n;
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
                  S = e.resizable,
                  x = e.showAllEvents;
                if (s) return this.renderDummy();
                var O = this.slotMetrics(this.props),
                  k = O.levels,
                  M = O.extra,
                  R = x ? Ji : Bo,
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
                    slotMetrics: O,
                    resizable: S,
                  };
                return f.createElement(
                  "div",
                  { className: o, role: "rowgroup", ref: this.containerRef },
                  f.createElement(Wi, {
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
                      className: (0, E.A)(
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
                      R,
                      null,
                      f.createElement(
                        _,
                        Object.assign({ isAllDay: D }, T, {
                          rtl: this.props.rtl,
                        }),
                        k.map(function (e, t) {
                          return f.createElement(
                            Ui,
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
                  h = r.getters,
                  v = r.showAllEvents,
                  m = e.state,
                  g = m.needLimitMeasure,
                  y = m.rowLimit,
                  b = (function (e, t, n, r, o) {
                    return e.filter(function (e) {
                      return qi(e, t, n, r, o);
                    });
                  })((0, le.A)(o), t[0], t[t.length - 1], p, u);
                return (
                  b.sort(function (e, t) {
                    return $i(e, t, p, u);
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
                  i = (0, o.A)(t, oa),
                  a = e.props,
                  s = a.date,
                  c = a.getDrilldownView,
                  l = a.localizer,
                  u = l.neq(n, s, "month"),
                  d = l.isSameDate(n, s),
                  p = c(n),
                  h = l.format(n, "dateFormat"),
                  v = e.props.components.dateHeader || ra;
                return f.createElement(
                  "div",
                  Object.assign({}, i, {
                    className: (0, E.A)(
                      r,
                      u && "rbc-off-range",
                      d && "rbc-current",
                    ),
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
                  var d = Pe(r, e.containerRef.current);
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
                      i = ye(o, 7);
                    return (
                      (this._weekCount = i.length),
                      f.createElement(
                        "div",
                        {
                          className: (0, E.A)("rbc-month-view", r),
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
            case Vo:
              return r.add(e, -1, "month");
            case qo:
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
            for (var d = t[f], p = [], h = 0; h < 100; ++h) p.push(1);
            for (var v = 0; v < d.friends.length; ++v)
              void 0 !== d.friends[v].idx && (p[d.friends[v].idx] = 0);
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
            for (var D = 0, E = 0; E < A.friends.length; ++E) {
              var S = A.friends[E].idx;
              D = D > S ? D : S;
            }
            D <= A.idx && (A.size = 100 - A.idx * A.size);
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
                  s = void 0 === a ? Bo : a,
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
                          className: (0, E.A)("rbc-time-slot", i.className),
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
      function ha(e) {
        return "string" == typeof e ? e : e + "%";
      }
      function va(e) {
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
          S = i.start(o),
          x = d.eventProp(o, S, D, s),
          O = t.height,
          k = t.top,
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
                (0, r.A)({}, x.style),
                {},
                (0, ce.A)(
                  {
                    top: ha(k),
                    height: ha(O),
                    width: "calc(".concat(M, " + 10px)"),
                  },
                  a ? "right" : "left",
                  ha(Math.max(0, R)),
                ),
              )
            : (0, r.A)(
                (0, r.A)({}, x.style),
                {},
                (0, ce.A)(
                  { top: ha(k), width: ha(M), height: ha(O) },
                  a ? "right" : "left",
                  ha(R),
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
              className: (0, E.A)(
                v ? "rbc-background-event" : "rbc-event",
                n,
                x.className,
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
                  h = i.timeslots,
                  v = i.dayLayoutAlgorithm,
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
                  return f.createElement(va, {
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
                    var o = e.slotMetrics.closestSlotFromPoint(n, ji(t));
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
                    h = p.eventContainerWrapper,
                    v = (0, o.A)(p, ba),
                    m = this.slotMetrics,
                    g = this.state,
                    y = g.selecting,
                    b = g.top,
                    w = g.height,
                    A = { start: g.startDate, end: g.endDate },
                    D = u(n),
                    S = D.className,
                    x = D.style,
                    O = v.dayColumnWrapper || ga;
                  return f.createElement(
                    O,
                    {
                      ref: this.containerRef,
                      date: t,
                      style: x,
                      className: (0, E.A)(
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
                        {
                          className: (0, E.A)(
                            "rbc-events-container",
                            r && "rtl",
                          ),
                        },
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
              sa({ min: v, max: m, timeslots: r, step: o, localizer: i }),
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
                { className: (0, E.A)("rbc-label", n && "rbc-now") },
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
        Da = f.forwardRef(function (e, t) {
          return f.createElement(Aa, Object.assign({ gutterRef: t }, e));
        }),
        Ea = function (e) {
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
                  h = u.resourceId(t),
                  v = t
                    ? r.filter(function (e) {
                        return u.resource(e) === h;
                      })
                    : r;
                return f.createElement(ta, {
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
                    c = void 0 === s ? na : s,
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
                        className: (0, E.A)(
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
                    w = void 0 === b ? Ea : b,
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
                      ref: h,
                      className: (0, E.A)(
                        "rbc-time-header",
                        m && "rbc-overflowing",
                      ),
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
                        f.createElement(ta, {
                          isAllDay: !0,
                          rtl: r,
                          getNow: s,
                          minRows: 2,
                          maxRows: e.props.allDayMaxRows + 1,
                          range: i,
                          events: S.get(a) || [],
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
              We(o.rafHandle), (o.rafHandle = Ie(o.checkOverflow));
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
                var p = Pe(n, o.containerRef.current);
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
                  We(this.rafHandle),
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
                      wa,
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
                  S = [],
                  x = [];
                return (
                  n.forEach(function (e) {
                    if (qi(e, w, A, d, h)) {
                      var t = d.start(e),
                        n = d.end(e);
                      d.allDay(e) ||
                      h.startAndEndAreDateOnly(t, n) ||
                      (!g && !h.isSameDate(t, n))
                        ? D.push(e)
                        : S.push(e);
                    }
                  }),
                  r.forEach(function (e) {
                    qi(e, w, A, d, h) && x.push(e);
                  }),
                  D.sort(function (e, t) {
                    return $i(e, t, d, h);
                  }),
                  f.createElement(
                    "div",
                    {
                      className: (0, E.A)(
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
                      f.createElement(Da, {
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
                      this.renderEvents(o, S, x, c()),
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
      var ka = [
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
                    h = (0, o.A)(e, ka),
                    v = n.range(t, { localizer: r });
                  return f.createElement(
                    Oa,
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
      (Ma.range = function (e, t) {
        return [t.localizer.startOf(e, "day")];
      }),
        (Ma.navigate = function (e, t, n) {
          var r = n.localizer;
          switch (t) {
            case Vo:
              return r.add(e, -1, "day");
            case qo:
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
                    h = (0, o.A)(e, Ra),
                    v = n.range(t, this.props);
                  return f.createElement(
                    Oa,
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
      (_a.defaultProps = Oa.defaultProps),
        (_a.navigate = function (e, t, n) {
          var r = n.localizer;
          switch (t) {
            case Vo:
              return r.add(e, -1, "week");
            case qo:
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
            r = xr(_a.range(e, { localizer: n })),
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
                    h = Ca(t, this.props);
                  return f.createElement(
                    Oa,
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
                (r = [wr(t.children[0]), wr(t.children[1])]),
                  (o[0] === r[0] && o[1] === r[1]) ||
                    ((p.current.style.width = r[0] + "px"),
                    (h.current.style.width = r[1] + "px")),
                  n
                    ? ((0, Or.A)(e, "rbc-header-overflowing"),
                      (e.style.marginRight = br() + "px"))
                    : (0, kr.A)(e, "rbc-header-overflowing");
              }
            }
          },
          b = s.messages,
          w = s.add(r, a, "day"),
          A = s.range(r, w, "day");
        return (
          (o = o.filter(function (e) {
            return qi(e, s.startOf(r, "day"), s.endOf(w, "day"), t, s);
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
                              return qi(
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
                                y = i.eventProp(n, m, v, Si(n, u)),
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
      (Na.defaultProps = Oa.defaultProps),
        (Na.range = Ca),
        (Na.navigate = _a.navigate),
        (Na.title = function (e, t) {
          var n = t.localizer,
            r = xr(Ca(e, { localizer: n })),
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
            case Vo:
              return i.add(e, -o, "day");
            case qo:
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
      var La =
          ((Pa = {}),
          (0, ce.A)(Pa, Go.MONTH, ia),
          (0, ce.A)(Pa, Go.WEEK, _a),
          (0, ce.A)(Pa, Go.WORK_WEEK, Na),
          (0, ce.A)(Pa, Go.DAY, Ma),
          (0, ce.A)(Pa, Go.AGENDA, za),
          Pa),
        ja = ["action", "date", "today"];
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
                      { type: "button", onClick: this.navigate.bind(null, Vo) },
                      t.previous,
                    ),
                    f.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, qo) },
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
                        className: (0, E.A)({ "rbc-active": r === n }),
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
      var Wa = function (e) {
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
        Ia = ["view", "date", "getNow", "onNavigate"],
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
      var Ua = (function (e) {
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
                      return (e[t] = La[t]);
                    },
                    {},
                  )
                : "object" === (0, i.A)(t)
                  ? Uo(t, function (e, t) {
                      return !0 === e ? La[t] : e;
                    })
                  : La;
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
                u = (0, o.A)(i, Ia),
                f = e.getView(),
                d = c();
              (s = (function (e, t) {
                var n = t.action,
                  r = t.date,
                  i = t.today,
                  a = (0, o.A)(t, ja);
                switch (((e = "string" == typeof e ? La[e] : e), n)) {
                  case Ko:
                    r = i || new Date();
                    break;
                  case $o:
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
                : (n && e.handleViewChange(n), e.handleNavigate($o, t));
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
                  var m = (0, o.A)(e, Ha);
                  l = l || u();
                  var g = this.getView(),
                    y = this.state.context,
                    b = y.accessors,
                    w = y.components,
                    A = y.getters,
                    D = y.localizer,
                    S = y.viewNames,
                    x = w.toolbar || Fa,
                    O = g.title(l, { localizer: D, length: d });
                  return f.createElement(
                    "div",
                    Object.assign({}, c, {
                      className: (0, E.A)(
                        s,
                        "rbc-calendar",
                        m.rtl && "rbc-rtl",
                      ),
                      style: a,
                    }),
                    n &&
                      f.createElement(x, {
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
                    x = Ya(m);
                  return {
                    viewNames: x,
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
                        return (h && h.apply(void 0, arguments)) || {};
                      },
                    },
                    components: Lo(D[v] || {}, Co(D, x), {
                      eventWrapper: Bo,
                      backgroundEventWrapper: Bo,
                      eventContainerWrapper: Bo,
                      dateCellWrapper: Bo,
                      weekWrapper: Bo,
                      timeSlotWrapper: Bo,
                      timeGutterWrapper: Bo,
                    }),
                    accessors: {
                      start: Wa(t),
                      end: Wa(n),
                      allDay: Wa(o),
                      tooltip: Wa(i),
                      title: Wa(a),
                      resource: Wa(s),
                      resourceId: Wa(c),
                      resourceTitle: Wa(l),
                    },
                  };
                },
              },
            ],
          ),
          n
        );
      })(f.Component);
      Ua.defaultProps = {
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
      var Ba = (function e(t, n, r) {
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
              (function (e) {
                var t = {};
                return (
                  Object.keys(e).forEach(function (e) {
                    t[m(e)] = h;
                  }),
                  t
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
        })(Ua, {
          view: "onView",
          date: "onNavigate",
          selected: "onSelectEvent",
        }),
        Va = function (e, t, n) {
          var r = e.start,
            o = e.end;
          return n.format(r, "LT", t) + " – " + n.format(o, "LT", t);
        },
        qa = {
          dateFormat: "DD",
          dayFormat: "DD ddd",
          weekdayFormat: "ddd",
          selectRangeFormat: Va,
          eventTimeRangeFormat: Va,
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
          agendaTimeRangeFormat: Va,
        };
      function Ka(e) {
        var t = e ? e.toLowerCase() : e;
        return "FullYear" === t ? (t = "year") : t || (t = void 0), t;
      }
      function $a(e) {
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
          formats: qa,
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
    67501: (e) => {
      "use strict";
      var t = function () {};
      e.exports = t;
    },
  },
]);
