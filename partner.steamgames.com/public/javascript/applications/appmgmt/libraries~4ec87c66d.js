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
    40323: function (e, t) {
      var n, r, o;
      (r = []),
        (n = function e() {
          "use strict";
          var t =
              "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                  ? window
                  : void 0 !== t
                    ? t
                    : {},
            n = !t.document && !!t.postMessage,
            r = t.IS_PAPA_WORKER || !1,
            o = {},
            i = 0,
            a = {
              parse: function (n, r) {
                var s = (r = r || {}).dynamicTyping || !1;
                if (
                  (E(s) && ((r.dynamicTypingFunction = s), (s = {})),
                  (r.dynamicTyping = s),
                  (r.transform = !!E(r.transform) && r.transform),
                  r.worker && a.WORKERS_SUPPORTED)
                ) {
                  var c = (function () {
                    if (!a.WORKERS_SUPPORTED) return !1;
                    var n,
                      r,
                      s =
                        ((n = t.URL || t.webkitURL || null),
                        (r = e.toString()),
                        a.BLOB_URL ||
                          (a.BLOB_URL = n.createObjectURL(
                            new Blob(
                              [
                                "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                                "(",
                                r,
                                ")();",
                              ],
                              { type: "text/javascript" },
                            ),
                          ))),
                      c = new t.Worker(s);
                    return (c.onmessage = m), (c.id = i++), (o[c.id] = c);
                  })();
                  return (
                    (c.userStep = r.step),
                    (c.userChunk = r.chunk),
                    (c.userComplete = r.complete),
                    (c.userError = r.error),
                    (r.step = E(r.step)),
                    (r.chunk = E(r.chunk)),
                    (r.complete = E(r.complete)),
                    (r.error = E(r.error)),
                    delete r.worker,
                    void c.postMessage({ input: n, config: r, workerId: c.id })
                  );
                }
                var h = null;
                return (
                  a.NODE_STREAM_INPUT,
                  "string" == typeof n
                    ? ((n = (function (e) {
                        return 65279 === e.charCodeAt(0) ? e.slice(1) : e;
                      })(n)),
                      (h = r.download ? new l(r) : new f(r)))
                    : !0 === n.readable && E(n.read) && E(n.on)
                      ? (h = new d(r))
                      : ((t.File && n instanceof File) ||
                          n instanceof Object) &&
                        (h = new u(r)),
                  h.stream(n)
                );
              },
              unparse: function (e, t) {
                var n = !1,
                  r = !0,
                  o = ",",
                  i = "\r\n",
                  s = '"',
                  c = s + s,
                  l = !1,
                  u = null,
                  f = !1;
                !(function () {
                  if ("object" == typeof t) {
                    if (
                      ("string" != typeof t.delimiter ||
                        a.BAD_DELIMITERS.filter(function (e) {
                          return -1 !== t.delimiter.indexOf(e);
                        }).length ||
                        (o = t.delimiter),
                      ("boolean" == typeof t.quotes ||
                        "function" == typeof t.quotes ||
                        Array.isArray(t.quotes)) &&
                        (n = t.quotes),
                      ("boolean" != typeof t.skipEmptyLines &&
                        "string" != typeof t.skipEmptyLines) ||
                        (l = t.skipEmptyLines),
                      "string" == typeof t.newline && (i = t.newline),
                      "string" == typeof t.quoteChar && (s = t.quoteChar),
                      "boolean" == typeof t.header && (r = t.header),
                      Array.isArray(t.columns))
                    ) {
                      if (0 === t.columns.length)
                        throw new Error("Option columns is empty");
                      u = t.columns;
                    }
                    void 0 !== t.escapeChar && (c = t.escapeChar + s),
                      ("boolean" == typeof t.escapeFormulae ||
                        t.escapeFormulae instanceof RegExp) &&
                        (f =
                          t.escapeFormulae instanceof RegExp
                            ? t.escapeFormulae
                            : /^[=+\-@\t\r].*$/);
                  }
                })();
                var d = new RegExp(p(s), "g");
                if (
                  ("string" == typeof e && (e = JSON.parse(e)),
                  Array.isArray(e))
                ) {
                  if (!e.length || Array.isArray(e[0])) return h(null, e, l);
                  if ("object" == typeof e[0])
                    return h(u || Object.keys(e[0]), e, l);
                } else if ("object" == typeof e)
                  return (
                    "string" == typeof e.data && (e.data = JSON.parse(e.data)),
                    Array.isArray(e.data) &&
                      (e.fields || (e.fields = (e.meta && e.meta.fields) || u),
                      e.fields ||
                        (e.fields = Array.isArray(e.data[0])
                          ? e.fields
                          : "object" == typeof e.data[0]
                            ? Object.keys(e.data[0])
                            : []),
                      Array.isArray(e.data[0]) ||
                        "object" == typeof e.data[0] ||
                        (e.data = [e.data])),
                    h(e.fields || [], e.data || [], l)
                  );
                throw new Error("Unable to serialize unrecognized input");
                function h(e, t, n) {
                  var a = "";
                  "string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t));
                  var s = Array.isArray(e) && 0 < e.length,
                    c = !Array.isArray(t[0]);
                  if (s && r) {
                    for (var l = 0; l < e.length; l++)
                      0 < l && (a += o), (a += v(e[l], l));
                    0 < t.length && (a += i);
                  }
                  for (var u = 0; u < t.length; u++) {
                    var f = s ? e.length : t[u].length,
                      d = !1,
                      h = s
                        ? 0 === Object.keys(t[u]).length
                        : 0 === t[u].length;
                    if (
                      (n &&
                        !s &&
                        (d =
                          "greedy" === n
                            ? "" === t[u].join("").trim()
                            : 1 === t[u].length && 0 === t[u][0].length),
                      "greedy" === n && s)
                    ) {
                      for (var p = [], m = 0; m < f; m++) {
                        var g = c ? e[m] : m;
                        p.push(t[u][g]);
                      }
                      d = "" === p.join("").trim();
                    }
                    if (!d) {
                      for (var y = 0; y < f; y++) {
                        0 < y && !h && (a += o);
                        var b = s && c ? e[y] : y;
                        a += v(t[u][b], y);
                      }
                      u < t.length - 1 && (!n || (0 < f && !h)) && (a += i);
                    }
                  }
                  return a;
                }
                function v(e, t) {
                  if (null == e) return "";
                  if (e.constructor === Date)
                    return JSON.stringify(e).slice(1, 25);
                  var r = !1;
                  f &&
                    "string" == typeof e &&
                    f.test(e) &&
                    ((e = "'" + e), (r = !0));
                  var i = e.toString().replace(d, c);
                  return (r =
                    r ||
                    !0 === n ||
                    ("function" == typeof n && n(e, t)) ||
                    (Array.isArray(n) && n[t]) ||
                    (function (e, t) {
                      for (var n = 0; n < t.length; n++)
                        if (-1 < e.indexOf(t[n])) return !0;
                      return !1;
                    })(i, a.BAD_DELIMITERS) ||
                    -1 < i.indexOf(o) ||
                    " " === i.charAt(0) ||
                    " " === i.charAt(i.length - 1))
                    ? s + i + s
                    : i;
                }
              },
            };
          if (
            ((a.RECORD_SEP = String.fromCharCode(30)),
            (a.UNIT_SEP = String.fromCharCode(31)),
            (a.BYTE_ORDER_MARK = "\ufeff"),
            (a.BAD_DELIMITERS = ["\r", "\n", '"', a.BYTE_ORDER_MARK]),
            (a.WORKERS_SUPPORTED = !n && !!t.Worker),
            (a.NODE_STREAM_INPUT = 1),
            (a.LocalChunkSize = 10485760),
            (a.RemoteChunkSize = 5242880),
            (a.DefaultDelimiter = ","),
            (a.Parser = v),
            (a.ParserHandle = h),
            (a.NetworkStreamer = l),
            (a.FileStreamer = u),
            (a.StringStreamer = f),
            (a.ReadableStreamStreamer = d),
            t.jQuery)
          ) {
            var s = t.jQuery;
            s.fn.parse = function (e) {
              var n = e.config || {},
                r = [];
              return (
                this.each(function (e) {
                  if (
                    "INPUT" !== s(this).prop("tagName").toUpperCase() ||
                    "file" !== s(this).attr("type").toLowerCase() ||
                    !t.FileReader ||
                    !this.files ||
                    0 === this.files.length
                  )
                    return !0;
                  for (var o = 0; o < this.files.length; o++)
                    r.push({
                      file: this.files[o],
                      inputElem: this,
                      instanceConfig: s.extend({}, n),
                    });
                }),
                o(),
                this
              );
              function o() {
                if (0 !== r.length) {
                  var t,
                    n,
                    o,
                    c,
                    l = r[0];
                  if (E(e.before)) {
                    var u = e.before(l.file, l.inputElem);
                    if ("object" == typeof u) {
                      if ("abort" === u.action)
                        return (
                          (t = "AbortError"),
                          (n = l.file),
                          (o = l.inputElem),
                          (c = u.reason),
                          void (E(e.error) && e.error({ name: t }, n, o, c))
                        );
                      if ("skip" === u.action) return void i();
                      "object" == typeof u.config &&
                        (l.instanceConfig = s.extend(
                          l.instanceConfig,
                          u.config,
                        ));
                    } else if ("skip" === u) return void i();
                  }
                  var f = l.instanceConfig.complete;
                  (l.instanceConfig.complete = function (e) {
                    E(f) && f(e, l.file, l.inputElem), i();
                  }),
                    a.parse(l.file, l.instanceConfig);
                } else E(e.complete) && e.complete();
              }
              function i() {
                r.splice(0, 1), o();
              }
            };
          }
          function c(e) {
            (this._handle = null),
              (this._finished = !1),
              (this._completed = !1),
              (this._halted = !1),
              (this._input = null),
              (this._baseIndex = 0),
              (this._partialLine = ""),
              (this._rowCount = 0),
              (this._start = 0),
              (this._nextChunk = null),
              (this.isFirstChunk = !0),
              (this._completeResults = { data: [], errors: [], meta: {} }),
              function (e) {
                var t = b(e);
                (t.chunkSize = parseInt(t.chunkSize)),
                  e.step || e.chunk || (t.chunkSize = null),
                  (this._handle = new h(t)),
                  ((this._handle.streamer = this)._config = t);
              }.call(this, e),
              (this.parseChunk = function (e, n) {
                if (this.isFirstChunk && E(this._config.beforeFirstChunk)) {
                  var o = this._config.beforeFirstChunk(e);
                  void 0 !== o && (e = o);
                }
                (this.isFirstChunk = !1), (this._halted = !1);
                var i = this._partialLine + e;
                this._partialLine = "";
                var s = this._handle.parse(i, this._baseIndex, !this._finished);
                if (!this._handle.paused() && !this._handle.aborted()) {
                  var c = s.meta.cursor;
                  this._finished ||
                    ((this._partialLine = i.substring(c - this._baseIndex)),
                    (this._baseIndex = c)),
                    s && s.data && (this._rowCount += s.data.length);
                  var l =
                    this._finished ||
                    (this._config.preview &&
                      this._rowCount >= this._config.preview);
                  if (r)
                    t.postMessage({
                      results: s,
                      workerId: a.WORKER_ID,
                      finished: l,
                    });
                  else if (E(this._config.chunk) && !n) {
                    if (
                      (this._config.chunk(s, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    (s = void 0), (this._completeResults = void 0);
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(s.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(s.errors)),
                      (this._completeResults.meta = s.meta)),
                    this._completed ||
                      !l ||
                      !E(this._config.complete) ||
                      (s && s.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    l || (s && s.meta.paused) || this._nextChunk(),
                    s
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                E(this._config.error)
                  ? this._config.error(e)
                  : r &&
                    this._config.error &&
                    t.postMessage({
                      workerId: a.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function l(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = a.RemoteChunkSize),
              c.call(this, e),
              (this._nextChunk = n
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (e) {
                (this._input = e), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((t = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (t.withCredentials = this._config.withCredentials),
                    n ||
                      ((t.onload = w(this._chunkLoaded, this)),
                      (t.onerror = w(this._chunkError, this))),
                    t.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !n,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var e = this._config.downloadRequestHeaders;
                    for (var r in e) t.setRequestHeader(r, e[r]);
                  }
                  if (this._config.chunkSize) {
                    var o = this._start + this._config.chunkSize - 1;
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + o,
                    );
                  }
                  try {
                    t.send(this._config.downloadRequestBody);
                  } catch (e) {
                    this._chunkError(e.message);
                  }
                  n && 0 === t.status && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                4 === t.readyState &&
                  (t.status < 200 || 400 <= t.status
                    ? this._chunkError()
                    : ((this._start += this._config.chunkSize
                        ? this._config.chunkSize
                        : t.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          (function (e) {
                            var t = e.getResponseHeader("Content-Range");
                            return null === t
                              ? -1
                              : parseInt(t.substring(t.lastIndexOf("/") + 1));
                          })(t)),
                      this.parseChunk(t.responseText)));
              }),
              (this._chunkError = function (e) {
                var n = t.statusText || e;
                this._sendError(new Error(n));
              });
          }
          function u(e) {
            var t, n;
            (e = e || {}).chunkSize || (e.chunkSize = a.LocalChunkSize),
              c.call(this, e);
            var r = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (n = e.slice || e.webkitSlice || e.mozSlice),
                r
                  ? (((t = new FileReader()).onload = w(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = w(this._chunkError, this)))
                  : (t = new FileReaderSync()),
                this._nextChunk();
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var e = this._input;
                if (this._config.chunkSize) {
                  var o = Math.min(
                    this._start + this._config.chunkSize,
                    this._input.size,
                  );
                  e = n.call(e, this._start, o);
                }
                var i = t.readAsText(e, this._config.encoding);
                r || this._chunkLoaded({ target: { result: i } });
              }),
              (this._chunkLoaded = function (e) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(e.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(t.error);
              });
          }
          function f(e) {
            var t;
            c.call(this, (e = e || {})),
              (this.stream = function (e) {
                return (t = e), this._nextChunk();
              }),
              (this._nextChunk = function () {
                if (!this._finished) {
                  var e,
                    n = this._config.chunkSize;
                  return (
                    n
                      ? ((e = t.substring(0, n)), (t = t.substring(n)))
                      : ((e = t), (t = "")),
                    (this._finished = !t),
                    this.parseChunk(e)
                  );
                }
              });
          }
          function d(e) {
            c.call(this, (e = e || {}));
            var t = [],
              n = !0,
              r = !1;
            (this.pause = function () {
              c.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                c.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (e) {
                (this._input = e),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                r && 1 === t.length && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (n = !0);
              }),
              (this._streamData = w(function (e) {
                try {
                  t.push(
                    "string" == typeof e
                      ? e
                      : e.toString(this._config.encoding),
                  ),
                    n &&
                      ((n = !1),
                      this._checkIsFinished(),
                      this.parseChunk(t.shift()));
                } catch (e) {
                  this._streamError(e);
                }
              }, this)),
              (this._streamError = w(function (e) {
                this._streamCleanUp(), this._sendError(e);
              }, this)),
              (this._streamEnd = w(function () {
                this._streamCleanUp(), (r = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = w(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function h(e) {
            var t,
              n,
              r,
              o = Math.pow(2, 53),
              i = -o,
              s = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              c =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              l = this,
              u = 0,
              f = 0,
              d = !1,
              h = !1,
              m = [],
              g = { data: [], errors: [], meta: {} };
            if (E(e.step)) {
              var y = e.step;
              e.step = function (t) {
                if (((g = t), D())) A();
                else {
                  if ((A(), 0 === g.data.length)) return;
                  (u += t.data.length),
                    e.preview && u > e.preview
                      ? n.abort()
                      : ((g.data = g.data[0]), y(g, l));
                }
              };
            }
            function w(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function A() {
              return (
                g &&
                  r &&
                  (k(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      a.DefaultDelimiter +
                      "'",
                  ),
                  (r = !1)),
                e.skipEmptyLines &&
                  (g.data = g.data.filter(function (e) {
                    return !w(e);
                  })),
                D() &&
                  (function () {
                    if (g)
                      if (Array.isArray(g.data[0])) {
                        for (var t = 0; D() && t < g.data.length; t++)
                          g.data[t].forEach(n);
                        g.data.splice(0, 1);
                      } else g.data.forEach(n);
                    function n(t, n) {
                      E(e.transformHeader) && (t = e.transformHeader(t, n)),
                        m.push(t);
                    }
                  })(),
                (function () {
                  if (!g || (!e.header && !e.dynamicTyping && !e.transform))
                    return g;
                  function t(t, n) {
                    var r,
                      o = e.header ? {} : [];
                    for (r = 0; r < t.length; r++) {
                      var i = r,
                        a = t[r];
                      e.header && (i = r >= m.length ? "__parsed_extra" : m[r]),
                        e.transform && (a = e.transform(a, i)),
                        (a = S(i, a)),
                        "__parsed_extra" === i
                          ? ((o[i] = o[i] || []), o[i].push(a))
                          : (o[i] = a);
                    }
                    return (
                      e.header &&
                        (r > m.length
                          ? k(
                              "FieldMismatch",
                              "TooManyFields",
                              "Too many fields: expected " +
                                m.length +
                                " fields but parsed " +
                                r,
                              f + n,
                            )
                          : r < m.length &&
                            k(
                              "FieldMismatch",
                              "TooFewFields",
                              "Too few fields: expected " +
                                m.length +
                                " fields but parsed " +
                                r,
                              f + n,
                            )),
                      o
                    );
                  }
                  var n = 1;
                  return (
                    !g.data.length || Array.isArray(g.data[0])
                      ? ((g.data = g.data.map(t)), (n = g.data.length))
                      : (g.data = t(g.data, 0)),
                    e.header && g.meta && (g.meta.fields = m),
                    (f += n),
                    g
                  );
                })()
              );
            }
            function D() {
              return e.header && 0 === m.length;
            }
            function S(t, n) {
              return (
                (r = t),
                e.dynamicTypingFunction &&
                  void 0 === e.dynamicTyping[r] &&
                  (e.dynamicTyping[r] = e.dynamicTypingFunction(r)),
                !0 === (e.dynamicTyping[r] || e.dynamicTyping)
                  ? "true" === n ||
                    "TRUE" === n ||
                    ("false" !== n &&
                      "FALSE" !== n &&
                      ((function (e) {
                        if (s.test(e)) {
                          var t = parseFloat(e);
                          if (i < t && t < o) return !0;
                        }
                        return !1;
                      })(n)
                        ? parseFloat(n)
                        : c.test(n)
                          ? new Date(n)
                          : "" === n
                            ? null
                            : n))
                  : n
              );
              var r;
            }
            function k(e, t, n, r) {
              var o = { type: e, code: t, message: n };
              void 0 !== r && (o.row = r), g.errors.push(o);
            }
            (this.parse = function (o, i, s) {
              var c = e.quoteChar || '"';
              if (
                (e.newline ||
                  (e.newline = (function (e, t) {
                    e = e.substring(0, 1048576);
                    var n = new RegExp(p(t) + "([^]*?)" + p(t), "gm"),
                      r = (e = e.replace(n, "")).split("\r"),
                      o = e.split("\n"),
                      i = 1 < o.length && o[0].length < r[0].length;
                    if (1 === r.length || i) return "\n";
                    for (var a = 0, s = 0; s < r.length; s++)
                      "\n" === r[s][0] && a++;
                    return a >= r.length / 2 ? "\r\n" : "\r";
                  })(o, c)),
                (r = !1),
                e.delimiter)
              )
                E(e.delimiter) &&
                  ((e.delimiter = e.delimiter(o)),
                  (g.meta.delimiter = e.delimiter));
              else {
                var l = (function (t, n, r, o, i) {
                  var s, c, l, u;
                  i = i || [",", "\t", "|", ";", a.RECORD_SEP, a.UNIT_SEP];
                  for (var f = 0; f < i.length; f++) {
                    var d = i[f],
                      h = 0,
                      p = 0,
                      m = 0;
                    l = void 0;
                    for (
                      var g = new v({
                          comments: o,
                          delimiter: d,
                          newline: n,
                          preview: 10,
                        }).parse(t),
                        y = 0;
                      y < g.data.length;
                      y++
                    )
                      if (r && w(g.data[y])) m++;
                      else {
                        var b = g.data[y].length;
                        (p += b),
                          void 0 !== l
                            ? 0 < b && ((h += Math.abs(b - l)), (l = b))
                            : (l = b);
                      }
                    0 < g.data.length && (p /= g.data.length - m),
                      (void 0 === c || h <= c) &&
                        (void 0 === u || u < p) &&
                        1.99 < p &&
                        ((c = h), (s = d), (u = p));
                  }
                  return { successful: !!(e.delimiter = s), bestDelimiter: s };
                })(
                  o,
                  e.newline,
                  e.skipEmptyLines,
                  e.comments,
                  e.delimitersToGuess,
                );
                l.successful
                  ? (e.delimiter = l.bestDelimiter)
                  : ((r = !0), (e.delimiter = a.DefaultDelimiter)),
                  (g.meta.delimiter = e.delimiter);
              }
              var u = b(e);
              return (
                e.preview && e.header && u.preview++,
                (t = o),
                (n = new v(u)),
                (g = n.parse(t, i, s)),
                A(),
                d ? { meta: { paused: !0 } } : g || { meta: { paused: !1 } }
              );
            }),
              (this.paused = function () {
                return d;
              }),
              (this.pause = function () {
                (d = !0),
                  n.abort(),
                  (t = E(e.chunk) ? "" : t.substring(n.getCharIndex()));
              }),
              (this.resume = function () {
                l.streamer._halted
                  ? ((d = !1), l.streamer.parseChunk(t, !0))
                  : setTimeout(l.resume, 3);
              }),
              (this.aborted = function () {
                return h;
              }),
              (this.abort = function () {
                (h = !0),
                  n.abort(),
                  (g.meta.aborted = !0),
                  E(e.complete) && e.complete(g),
                  (t = "");
              });
          }
          function p(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function v(e) {
            var t,
              n = (e = e || {}).delimiter,
              r = e.newline,
              o = e.comments,
              i = e.step,
              s = e.preview,
              c = e.fastMode,
              l = (t =
                void 0 === e.quoteChar || null === e.quoteChar
                  ? '"'
                  : e.quoteChar);
            if (
              (void 0 !== e.escapeChar && (l = e.escapeChar),
              ("string" != typeof n || -1 < a.BAD_DELIMITERS.indexOf(n)) &&
                (n = ","),
              o === n)
            )
              throw new Error("Comment character same as delimiter");
            !0 === o
              ? (o = "#")
              : ("string" != typeof o || -1 < a.BAD_DELIMITERS.indexOf(o)) &&
                (o = !1),
              "\n" !== r && "\r" !== r && "\r\n" !== r && (r = "\n");
            var u = 0,
              f = !1;
            (this.parse = function (a, d, h) {
              if ("string" != typeof a)
                throw new Error("Input must be a string");
              var v = a.length,
                m = n.length,
                g = r.length,
                y = o.length,
                b = E(i),
                w = [],
                A = [],
                D = [],
                S = (u = 0);
              if (!a) return K();
              if (e.header && !d) {
                var k = a.split(r)[0].split(n),
                  _ = [],
                  x = {},
                  O = !1;
                for (var M in k) {
                  var R = k[M];
                  E(e.transformHeader) && (R = e.transformHeader(R, M));
                  var C = R,
                    T = x[R] || 0;
                  for (
                    0 < T && ((O = !0), (C = R + "_" + T)), x[R] = T + 1;
                    _.includes(C);
                  )
                    C = C + "_" + T;
                  _.push(C);
                }
                if (O) {
                  var P = a.split(r);
                  (P[0] = _.join(n)), (a = P.join(r));
                }
              }
              if (c || (!1 !== c && -1 === a.indexOf(t))) {
                for (var N = a.split(r), L = 0; L < N.length; L++) {
                  if (((D = N[L]), (u += D.length), L !== N.length - 1))
                    u += r.length;
                  else if (h) return K();
                  if (!o || D.substring(0, y) !== o) {
                    if (b) {
                      if (((w = []), U(D.split(n)), V(), f)) return K();
                    } else U(D.split(n));
                    if (s && s <= L) return (w = w.slice(0, s)), K(!0);
                  }
                }
                return K();
              }
              for (
                var z = a.indexOf(n, u),
                  j = a.indexOf(r, u),
                  I = new RegExp(p(l) + p(t), "g"),
                  F = a.indexOf(t, u);
                ;
              )
                if (a[u] !== t)
                  if (o && 0 === D.length && a.substring(u, u + y) === o) {
                    if (-1 === j) return K();
                    (u = j + g), (j = a.indexOf(r, u)), (z = a.indexOf(n, u));
                  } else if (-1 !== z && (z < j || -1 === j))
                    D.push(a.substring(u, z)),
                      (u = z + m),
                      (z = a.indexOf(n, u));
                  else {
                    if (-1 === j) break;
                    if ((D.push(a.substring(u, j)), q(j + g), b && (V(), f)))
                      return K();
                    if (s && w.length >= s) return K(!0);
                  }
                else
                  for (F = u, u++; ; ) {
                    if (-1 === (F = a.indexOf(t, F + 1)))
                      return (
                        h ||
                          A.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: w.length,
                            index: u,
                          }),
                        B()
                      );
                    if (F === v - 1) return B(a.substring(u, F).replace(I, t));
                    if (t !== l || a[F + 1] !== l) {
                      if (t === l || 0 === F || a[F - 1] !== l) {
                        -1 !== z && z < F + 1 && (z = a.indexOf(n, F + 1)),
                          -1 !== j && j < F + 1 && (j = a.indexOf(r, F + 1));
                        var W = Y(-1 === j ? z : Math.min(z, j));
                        if (a.substr(F + 1 + W, m) === n) {
                          D.push(a.substring(u, F).replace(I, t)),
                            a[(u = F + 1 + W + m)] !== t &&
                              (F = a.indexOf(t, u)),
                            (z = a.indexOf(n, u)),
                            (j = a.indexOf(r, u));
                          break;
                        }
                        var H = Y(j);
                        if (a.substring(F + 1 + H, F + 1 + H + g) === r) {
                          if (
                            (D.push(a.substring(u, F).replace(I, t)),
                            q(F + 1 + H + g),
                            (z = a.indexOf(n, u)),
                            (F = a.indexOf(t, u)),
                            b && (V(), f))
                          )
                            return K();
                          if (s && w.length >= s) return K(!0);
                          break;
                        }
                        A.push({
                          type: "Quotes",
                          code: "InvalidQuotes",
                          message:
                            "Trailing quote on quoted field is malformed",
                          row: w.length,
                          index: u,
                        }),
                          F++;
                      }
                    } else F++;
                  }
              return B();
              function U(e) {
                w.push(e), (S = u);
              }
              function Y(e) {
                var t = 0;
                if (-1 !== e) {
                  var n = a.substring(F + 1, e);
                  n && "" === n.trim() && (t = n.length);
                }
                return t;
              }
              function B(e) {
                return (
                  h ||
                    (void 0 === e && (e = a.substring(u)),
                    D.push(e),
                    (u = v),
                    U(D),
                    b && V()),
                  K()
                );
              }
              function q(e) {
                (u = e), U(D), (D = []), (j = a.indexOf(r, u));
              }
              function K(e) {
                return {
                  data: w,
                  errors: A,
                  meta: {
                    delimiter: n,
                    linebreak: r,
                    aborted: f,
                    truncated: !!e,
                    cursor: S + (d || 0),
                  },
                };
              }
              function V() {
                i(K()), (w = []), (A = []);
              }
            }),
              (this.abort = function () {
                f = !0;
              }),
              (this.getCharIndex = function () {
                return u;
              });
          }
          function m(e) {
            var t = e.data,
              n = o[t.workerId],
              r = !1;
            if (t.error) n.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var i = {
                abort: function () {
                  (r = !0),
                    g(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: y,
                resume: y,
              };
              if (E(n.userStep)) {
                for (
                  var a = 0;
                  a < t.results.data.length &&
                  (n.userStep(
                    {
                      data: t.results.data[a],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    i,
                  ),
                  !r);
                  a++
                );
                delete t.results;
              } else
                E(n.userChunk) &&
                  (n.userChunk(t.results, i, t.file), delete t.results);
            }
            t.finished && !r && g(t.workerId, t.results);
          }
          function g(e, t) {
            var n = o[e];
            E(n.userComplete) && n.userComplete(t), n.terminate(), delete o[e];
          }
          function y() {
            throw new Error("Not implemented.");
          }
          function b(e) {
            if ("object" != typeof e || null === e) return e;
            var t = Array.isArray(e) ? [] : {};
            for (var n in e) t[n] = b(e[n]);
            return t;
          }
          function w(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function E(e) {
            return "function" == typeof e;
          }
          return (
            r &&
              (t.onmessage = function (e) {
                var n = e.data;
                if (
                  (void 0 === a.WORKER_ID && n && (a.WORKER_ID = n.workerId),
                  "string" == typeof n.input)
                )
                  t.postMessage({
                    workerId: a.WORKER_ID,
                    results: a.parse(n.input, n.config),
                    finished: !0,
                  });
                else if (
                  (t.File && n.input instanceof File) ||
                  n.input instanceof Object
                ) {
                  var r = a.parse(n.input, n.config);
                  r &&
                    t.postMessage({
                      workerId: a.WORKER_ID,
                      results: r,
                      finished: !0,
                    });
                }
              }),
            ((l.prototype = Object.create(c.prototype)).constructor = l),
            ((u.prototype = Object.create(c.prototype)).constructor = u),
            ((f.prototype = Object.create(f.prototype)).constructor = f),
            ((d.prototype = Object.create(c.prototype)).constructor = d),
            a
          );
        }),
        void 0 === (o = "function" == typeof n ? n.apply(t, r) : n) ||
          (e.exports = o);
    },
    41653: (e, t, n) => {
      "use strict";
      n.d(t, { Vv: () => Ka, Pp: () => Zo, ye: () => Xa });
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
        h = n.n(d),
        p = function () {};
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
      function E(e) {
        this.setState(
          function (t) {
            var n = this.constructor.getDerivedStateFromProps(e, t);
            return null != n ? n : null;
          }.bind(this),
        );
      }
      function A(e, t) {
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
        (E.__suppressDeprecationWarning = !0),
        (A.__suppressDeprecationWarning = !0);
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
      var k = n(61410),
        _ = n.n(k),
        x = "milliseconds",
        O = "seconds",
        M = "minutes",
        R = "hours",
        C = "day",
        T = "week",
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
        I = { month: 1, year: 12, decade: 120, century: 1200 };
      function F(e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0 ? 29 : 28;
      }
      function W(e, t, n) {
        switch (((e = new Date(e)), n)) {
          case x:
          case O:
          case M:
          case R:
          case C:
          case T:
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
            })(e, t * I[n]);
        }
        throw new TypeError('Invalid units: "' + n + '"');
      }
      function H(e, t, n) {
        return W(e, -t, n);
      }
      function U(e, t, n) {
        switch (((e = new Date(e)), t)) {
          case z:
          case L:
          case N:
            e = ie(e, 0);
          case P:
            e = oe(e, 1);
          case T:
          case C:
            e = ne(e, 0);
          case R:
            e = te(e, 0);
          case M:
            e = ee(e, 0);
          case O:
            e = J(e, 0);
        }
        return (
          t === L && (e = H(e, ae(e) % 10, "year")),
          t === z && (e = H(e, ae(e) % 100, "year")),
          t === T &&
            (e = (function (e, t, n) {
              var r = (re(e) + 7 - (n || 0)) % 7;
              return void 0 === t ? r : W(e, t - r, C);
            })(e, 0, n)),
          e
        );
      }
      function Y(e, t, n) {
        switch (((e = U((e = new Date(e)), t, n)), t)) {
          case z:
          case L:
          case N:
          case P:
          case T:
            (e = H((e = W(e, 1, t)), 1, C)).setHours(23, 59, 59, 999);
            break;
          case C:
            e.setHours(23, 59, 59, 999);
            break;
          case R:
          case M:
          case O:
            e = H((e = W(e, 1, t)), 1, x);
        }
        return e;
      }
      var B = ce(function (e, t) {
          return e === t;
        }),
        q = ce(function (e, t) {
          return e !== t;
        }),
        K = ce(function (e, t) {
          return e > t;
        }),
        V = ce(function (e, t) {
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
      function Q(e, t, n, r) {
        return (r = r || "day"), (!t || V(e, t, r)) && (!n || G(e, n, r));
      }
      var J = se("Milliseconds"),
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
          return e(+U(t, r), +U(n, r));
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
        he = n(55205),
        pe = 1 / 0;
      const ve = function (e) {
        return e
          ? (e = (0, he.A)(e)) === pe || e === -1 / 0
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
      function Ee(e, t) {
        return (function (e) {
          var t = we(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var Ae = /([A-Z])/g;
      var De = /^ms-/;
      function Se(e) {
        return (function (e) {
          return e.replace(Ae, "-$1").toLowerCase();
        })(e).replace(De, "-ms-");
      }
      var ke =
        /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      const _e = function (e, t) {
        var n = "",
          r = "";
        if ("string" == typeof t)
          return (
            e.style.getPropertyValue(Se(t)) || Ee(e).getPropertyValue(Se(t))
          );
        Object.keys(t).forEach(function (o) {
          var i = t[o];
          i || 0 === i
            ? !(function (e) {
                return !(!e || !ke.test(e));
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
      function Oe(e) {
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
          var o = Oe(n);
          if (void 0 === r) return o ? o[e] : n[t];
          o ? o.scrollTo(o[e], r) : (n[t] = r);
        };
      }
      const Re = Me("pageXOffset"),
        Ce = Me("pageYOffset");
      function Te(e) {
        var t = we(e),
          n = { top: 0, left: 0, height: 0, width: 0 },
          r = t && t.documentElement;
        return r && xe(r, e)
          ? (void 0 !== e.getBoundingClientRect &&
              (n = e.getBoundingClientRect()),
            (n = {
              top: n.top + Ce(r) - (r.clientTop || 0),
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
        if ("fixed" === _e(e, "position")) n = e.getBoundingClientRect();
        else {
          var o =
            t ||
            (function (e) {
              for (
                var t = we(e), n = e && e.offsetParent;
                Pe(n) &&
                "HTML" !== n.nodeName &&
                "static" === _e(n, "position");
              )
                n = n.offsetParent;
              return n || t.documentElement;
            })(e);
          (n = Te(e)),
            "html" !==
              (function (e) {
                return e.nodeName && e.nodeName.toLowerCase();
              })(o) && (r = Te(o));
          var i = String(_e(o, "borderTopWidth") || 0);
          r.top += parseInt(i, 10) - Ce(o) || 0;
          var a = String(_e(o, "borderLeftWidth") || 0);
          r.left += parseInt(a, 10) - Re(o) || 0;
        }
        var s = String(_e(e, "marginTop") || 0),
          c = String(_e(e, "marginLeft") || 0);
        return (0, y.A)({}, n, {
          top: n.top - r.top - (parseInt(s, 10) || 0),
          left: n.left - r.left - (parseInt(c, 10) || 0),
        });
      }
      const Le = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var ze = new Date().getTime();
      var je = "clearTimeout",
        Ie = function (e) {
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
      Le &&
        ["", "webkit", "moz", "o", "ms"].some(function (e) {
          var t = Fe(e, "request");
          return (
            t in window &&
              ((je = Fe(e, "cancel")),
              (Ie = function (e) {
                return window[t](e);
              })),
            !!Ie
          );
        });
      var We = function (e) {
          "function" == typeof window[je] && window[je](e);
        },
        He = Ie,
        Ue = n(72739);
      function Ye() {
        return (0, f.useState)(null);
      }
      const Be = (e) =>
        e && "function" != typeof e
          ? (t) => {
              e.current = t;
            }
          : e;
      const qe = function (e, t) {
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
      var Ke = "top",
        Ve = "bottom",
        $e = "right",
        Ge = "left",
        Xe = "auto",
        Ze = [Ke, Ve, $e, Ge],
        Qe = "start",
        Je = "end",
        et = "clippingParents",
        tt = "viewport",
        nt = "popper",
        rt = "reference",
        ot = Ze.reduce(function (e, t) {
          return e.concat([t + "-" + Qe, t + "-" + Je]);
        }, []),
        it = [].concat(Ze, [Xe]).reduce(function (e, t) {
          return e.concat([t, t + "-" + Qe, t + "-" + Je]);
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
      var ht = Math.max,
        pt = Math.min,
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
      function Et(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function At(e) {
        return lt(e).getComputedStyle(e);
      }
      function Dt(e) {
        return ["table", "td", "th"].indexOf(Et(e)) >= 0;
      }
      function St(e) {
        return ((ut(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function kt(e) {
        return "html" === Et(e)
          ? e
          : e.assignedSlot || e.parentNode || (dt(e) ? e.host : null) || St(e);
      }
      function _t(e) {
        return ft(e) && "fixed" !== At(e).position ? e.offsetParent : null;
      }
      function xt(e) {
        for (
          var t = lt(e), n = _t(e);
          n && Dt(n) && "static" === At(n).position;
        )
          n = _t(n);
        return n &&
          ("html" === Et(n) ||
            ("body" === Et(n) && "static" === At(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(mt());
                if (
                  /Trident/i.test(mt()) &&
                  ft(e) &&
                  "fixed" === At(e).position
                )
                  return null;
                var n = kt(e);
                for (
                  dt(n) && (n = n.host);
                  ft(n) && ["html", "body"].indexOf(Et(n)) < 0;
                ) {
                  var r = At(n);
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
      function Mt(e, t, n) {
        return ht(e, pt(t, n));
      }
      function Rt(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function Ct(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      const Tt = {
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
            c = Ot(s),
            l = [Ge, $e].indexOf(s) >= 0 ? "height" : "width";
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
                    : Ct(e, Ze),
                );
              })(o.padding, n),
              f = bt(i),
              d = "y" === c ? Ke : Ge,
              h = "y" === c ? Ve : $e,
              p =
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
              y = p / 2 - v / 2,
              b = u[d],
              w = g - f[l] - u[h],
              E = g / 2 - f[l] / 2 + y,
              A = Mt(b, E, w),
              D = c;
            n.modifiersData[r] =
              (((t = {})[D] = A), (t.centerOffset = A - E), t);
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
      function Lt(e) {
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
          h = void 0 === d ? 0 : d,
          p = a.y,
          v = void 0 === p ? 0 : p,
          m = "function" == typeof u ? u({ x: h, y: v }) : { x: h, y: v };
        (h = m.x), (v = m.y);
        var g = a.hasOwnProperty("x"),
          y = a.hasOwnProperty("y"),
          b = Ge,
          w = Ke,
          E = window;
        if (l) {
          var A = xt(n),
            D = "clientHeight",
            S = "clientWidth";
          if (
            (A === lt(n) &&
              "static" !== At((A = St(n))).position &&
              "absolute" === s &&
              ((D = "scrollHeight"), (S = "scrollWidth")),
            o === Ke || ((o === Ge || o === $e) && i === Je))
          )
            (w = Ve),
              (v -=
                (f && A === E && E.visualViewport
                  ? E.visualViewport.height
                  : A[D]) - r.height),
              (v *= c ? 1 : -1);
          if (o === Ge || ((o === Ke || o === Ve) && i === Je))
            (b = $e),
              (h -=
                (f && A === E && E.visualViewport
                  ? E.visualViewport.width
                  : A[S]) - r.width),
              (h *= c ? 1 : -1);
        }
        var k,
          _ = Object.assign({ position: s }, l && Nt),
          x =
            !0 === u
              ? (function (e, t) {
                  var n = e.x,
                    r = e.y,
                    o = t.devicePixelRatio || 1;
                  return { x: vt(n * o) / o || 0, y: vt(r * o) / o || 0 };
                })({ x: h, y: v }, lt(n))
              : { x: h, y: v };
        return (
          (h = x.x),
          (v = x.y),
          c
            ? Object.assign(
                {},
                _,
                (((k = {})[w] = y ? "0" : ""),
                (k[b] = g ? "0" : ""),
                (k.transform =
                  (E.devicePixelRatio || 1) <= 1
                    ? "translate(" + h + "px, " + v + "px)"
                    : "translate3d(" + h + "px, " + v + "px, 0)"),
                k),
              )
            : Object.assign(
                {},
                _,
                (((t = {})[w] = y ? v + "px" : ""),
                (t[b] = g ? h + "px" : ""),
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
              Lt(
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
                Lt(
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
      const It = {
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
      var Ft = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function Wt(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return Ft[e];
        });
      }
      var Ht = { start: "end", end: "start" };
      function Ut(e) {
        return e.replace(/start|end/g, function (e) {
          return Ht[e];
        });
      }
      function Yt(e) {
        var t = lt(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function Bt(e) {
        return yt(St(e)).left + Yt(e).scrollLeft;
      }
      function qt(e) {
        var t = At(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function Kt(e) {
        return ["html", "body", "#document"].indexOf(Et(e)) >= 0
          ? e.ownerDocument.body
          : ft(e) && qt(e)
            ? e
            : Kt(kt(e));
      }
      function Vt(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = Kt(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = lt(r),
          a = o ? [i].concat(i.visualViewport || [], qt(r) ? r : []) : r,
          s = t.concat(a);
        return o ? s : s.concat(Vt(kt(a)));
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
                    r = Yt(e),
                    o = null == (t = e.ownerDocument) ? void 0 : t.body,
                    i = ht(
                      n.scrollWidth,
                      n.clientWidth,
                      o ? o.scrollWidth : 0,
                      o ? o.clientWidth : 0,
                    ),
                    a = ht(
                      n.scrollHeight,
                      n.clientHeight,
                      o ? o.scrollHeight : 0,
                      o ? o.clientHeight : 0,
                    ),
                    s = -r.scrollLeft + Bt(e),
                    c = -r.scrollTop;
                  return (
                    "rtl" === At(o || n).direction &&
                      (s += ht(n.clientWidth, o ? o.clientWidth : 0) - i),
                    { width: i, height: a, x: s, y: c }
                  );
                })(St(e)),
              );
      }
      function Xt(e, t, n, r) {
        var o =
            "clippingParents" === t
              ? (function (e) {
                  var t = Vt(kt(e)),
                    n =
                      ["absolute", "fixed"].indexOf(At(e).position) >= 0 &&
                      ft(e)
                        ? xt(e)
                        : e;
                  return ut(n)
                    ? t.filter(function (e) {
                        return ut(e) && wt(e, n) && "body" !== Et(e);
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
                (t.top = ht(o.top, t.top)),
                (t.right = pt(o.right, t.right)),
                (t.bottom = pt(o.bottom, t.bottom)),
                (t.left = ht(o.left, t.left)),
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
          case Ke:
            t = { x: s, y: n.y - r.height };
            break;
          case Ve:
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
        var l = i ? Ot(i) : null;
        if (null != l) {
          var u = "y" === l ? "height" : "width";
          switch (a) {
            case Qe:
              t[l] = t[l] - (n[u] / 2 - r[u] / 2);
              break;
            case Je:
              t[l] = t[l] + (n[u] / 2 - r[u] / 2);
          }
        }
        return t;
      }
      function Qt(e, t) {
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
          h = n.altBoundary,
          p = void 0 !== h && h,
          v = n.padding,
          m = void 0 === v ? 0 : v,
          g = Rt("number" != typeof m ? m : Ct(m, Ze)),
          y = d === nt ? rt : nt,
          b = e.rects.popper,
          w = e.elements[p ? y : d],
          E = Xt(
            ut(w) ? w : w.contextElement || St(e.elements.popper),
            c,
            u,
            a,
          ),
          A = yt(e.elements.reference),
          D = Zt({
            reference: A,
            element: b,
            strategy: "absolute",
            placement: o,
          }),
          S = $t(Object.assign({}, b, D)),
          k = d === nt ? S : A,
          _ = {
            top: E.top - k.top + g.top,
            bottom: k.bottom - E.bottom + g.bottom,
            left: E.left - k.left + g.left,
            right: k.right - E.right + g.right,
          },
          x = e.modifiersData.offset;
        if (d === nt && x) {
          var O = x[o];
          Object.keys(_).forEach(function (e) {
            var t = [$e, Ve].indexOf(e) >= 0 ? 1 : -1,
              n = [Ke, Ve].indexOf(e) >= 0 ? "y" : "x";
            _[e] += O[n] * t;
          });
        }
        return _;
      }
      const Jt = {
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
                h = n.flipVariations,
                p = void 0 === h || h,
                v = n.allowedAutoPlacements,
                m = t.options.placement,
                g = ct(m),
                y =
                  c ||
                  (g === m || !p
                    ? [Wt(m)]
                    : (function (e) {
                        if (ct(e) === Xe) return [];
                        var t = Wt(e);
                        return [Ut(e), t, Ut(t)];
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
                          var h = d.reduce(function (t, n) {
                            return (
                              (t[n] = Qt(e, {
                                placement: n,
                                boundary: o,
                                rootBoundary: i,
                                padding: a,
                              })[ct(n)]),
                              t
                            );
                          }, {});
                          return Object.keys(h).sort(function (e, t) {
                            return h[e] - h[t];
                          });
                        })(t, {
                          placement: n,
                          boundary: u,
                          rootBoundary: f,
                          padding: l,
                          flipVariations: p,
                          allowedAutoPlacements: v,
                        })
                      : n,
                  );
                }, []),
                w = t.rects.reference,
                E = t.rects.popper,
                A = new Map(),
                D = !0,
                S = b[0],
                k = 0;
              k < b.length;
              k++
            ) {
              var _ = b[k],
                x = ct(_),
                O = Pt(_) === Qe,
                M = [Ke, Ve].indexOf(x) >= 0,
                R = M ? "width" : "height",
                C = Qt(t, {
                  placement: _,
                  boundary: u,
                  rootBoundary: f,
                  altBoundary: d,
                  padding: l,
                }),
                T = M ? (O ? $e : Ge) : O ? Ve : Ke;
              w[R] > E[R] && (T = Wt(T));
              var P = Wt(T),
                N = [];
              if (
                (i && N.push(C[x] <= 0),
                s && N.push(C[T] <= 0, C[P] <= 0),
                N.every(function (e) {
                  return e;
                }))
              ) {
                (S = _), (D = !1);
                break;
              }
              A.set(_, N);
            }
            if (D)
              for (
                var L = function (e) {
                    var t = b.find(function (t) {
                      var n = A.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (S = t), "break";
                  },
                  z = p ? 3 : 1;
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
        return [Ke, $e, Ve, Ge].some(function (t) {
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
                    o = [Ge, Ke].indexOf(r) >= 0 ? -1 : 1,
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
            h = void 0 === d || d,
            p = n.tetherOffset,
            v = void 0 === p ? 0 : p,
            m = Qt(t, {
              boundary: c,
              rootBoundary: l,
              padding: f,
              altBoundary: u,
            }),
            g = ct(t.placement),
            y = Pt(t.placement),
            b = !y,
            w = Ot(g),
            E = "x" === w ? "y" : "x",
            A = t.modifiersData.popperOffsets,
            D = t.rects.reference,
            S = t.rects.popper,
            k =
              "function" == typeof v
                ? v(Object.assign({}, t.rects, { placement: t.placement }))
                : v,
            _ =
              "number" == typeof k
                ? { mainAxis: k, altAxis: k }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, k),
            x = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            O = { x: 0, y: 0 };
          if (A) {
            if (i) {
              var M,
                R = "y" === w ? Ke : Ge,
                C = "y" === w ? Ve : $e,
                T = "y" === w ? "height" : "width",
                P = A[w],
                N = P + m[R],
                L = P - m[C],
                z = h ? -S[T] / 2 : 0,
                j = y === Qe ? D[T] : S[T],
                I = y === Qe ? -S[T] : -D[T],
                F = t.elements.arrow,
                W = h && F ? bt(F) : { width: 0, height: 0 },
                H = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                U = H[R],
                Y = H[C],
                B = Mt(0, D[T], W[T]),
                q = b
                  ? D[T] / 2 - z - B - U - _.mainAxis
                  : j - B - U - _.mainAxis,
                K = b
                  ? -D[T] / 2 + z + B + Y + _.mainAxis
                  : I + B + Y + _.mainAxis,
                V = t.elements.arrow && xt(t.elements.arrow),
                $ = V ? ("y" === w ? V.clientTop || 0 : V.clientLeft || 0) : 0,
                G = null != (M = null == x ? void 0 : x[w]) ? M : 0,
                X = P + K - G,
                Z = Mt(h ? pt(N, P + q - G - $) : N, P, h ? ht(L, X) : L);
              (A[w] = Z), (O[w] = Z - P);
            }
            if (s) {
              var Q,
                J = "x" === w ? Ke : Ge,
                ee = "x" === w ? Ve : $e,
                te = A[E],
                ne = "y" === E ? "height" : "width",
                re = te + m[J],
                oe = te - m[ee],
                ie = -1 !== [Ke, Ge].indexOf(g),
                ae = null != (Q = null == x ? void 0 : x[E]) ? Q : 0,
                se = ie ? re : te - D[ne] - S[ne] - ae + _.altAxis,
                ce = ie ? te + D[ne] + S[ne] - ae - _.altAxis : oe,
                le =
                  h && ie
                    ? (function (e, t, n) {
                        var r = Mt(e, t, n);
                        return r > n ? n : r;
                      })(se, te, ce)
                    : Mt(h ? se : re, te, h ? ce : oe);
              (A[E] = le), (O[E] = le - te);
            }
            t.modifiersData[r] = O;
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
            (("body" !== Et(t) || qt(s)) &&
              (l =
                (r = t) !== lt(r) && ft(r)
                  ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop }
                  : Yt(r)),
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
                      ? Vt(e)
                      : e.contextElement
                        ? Vt(e.contextElement)
                        : [],
                    popper: Vt(t),
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
                  a = Qt(t, { elementContext: "reference" }),
                  s = Qt(t, { altBoundary: !0 }),
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
            zt,
            It,
            nn,
            Jt,
            rn,
            Tt,
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
        hn = {
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
        pn = [];
      const vn = function (e, t, n) {
        var r = void 0 === n ? {} : n,
          o = r.enabled,
          i = void 0 === o || o,
          a = r.placement,
          s = void 0 === a ? "bottom" : a,
          c = r.strategy,
          l = void 0 === c ? "absolute" : c,
          u = r.modifiers,
          d = void 0 === u ? pn : u,
          h = (0, g.A)(r, ["enabled", "placement", "strategy", "modifiers"]),
          p = (0, f.useRef)(),
          v = (0, f.useCallback)(function () {
            var e;
            null == (e = p.current) || e.update();
          }, []),
          m = (0, f.useCallback)(function () {
            var e;
            null == (e = p.current) || e.forceUpdate();
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
          E = b[1],
          A = (0, f.useMemo)(
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
                    E({
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
            [v, m, E],
          );
        return (
          (0, f.useEffect)(
            function () {
              p.current &&
                i &&
                p.current.setOptions({
                  placement: s,
                  strategy: l,
                  modifiers: [].concat(d, [A, dn]),
                });
            },
            [l, s, A, i],
          ),
          (0, f.useEffect)(
            function () {
              if (i && null != e && null != t)
                return (
                  (p.current = un(
                    e,
                    t,
                    (0, y.A)({}, h, {
                      placement: s,
                      strategy: l,
                      modifiers: [].concat(d, [hn, A]),
                    }),
                  )),
                  function () {
                    null != p.current &&
                      (p.current.destroy(),
                      (p.current = void 0),
                      E(function (e) {
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
        Le &&
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
      const En = function (e, t, n, r) {
        return (
          bn(e, t, n, r),
          function () {
            wn(e, t, n, r);
          }
        );
      };
      const An = function (e) {
        const t = (0, f.useRef)(e);
        return (
          (0, f.useEffect)(() => {
            t.current = e;
          }, [e]),
          t
        );
      };
      function Dn(e) {
        const t = An(e);
        return (0, f.useCallback)(
          function (...e) {
            return t.current && t.current(...e);
          },
          [t],
        );
      }
      var Sn = n(67501),
        kn = n.n(Sn);
      const _n = function (e) {
        return we(
          (function (e) {
            return e && "setState" in e
              ? Ue.findDOMNode(e)
              : null != e
                ? e
                : null;
          })(e),
        );
      };
      var xn = function () {};
      var On = function (e) {
        return e && ("current" in e ? e.current : e);
      };
      const Mn = function (e, t, n) {
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
                o = On(e);
              kn()(
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
          u = Dn(function (e) {
            s.current || c(e);
          }),
          d = Dn(function (e) {
            27 === e.keyCode && c(e);
          });
        (0, f.useEffect)(
          function () {
            if (!o && null != e) {
              var t = window.event,
                n = _n(On(e)),
                r = En(n, a, l, !0),
                i = En(n, a, function (e) {
                  e !== t ? u(e) : (t = void 0);
                }),
                s = En(n, "keyup", function (e) {
                  e !== t ? d(e) : (t = void 0);
                }),
                c = [];
              return (
                "ontouchstart" in n.documentElement &&
                  (c = [].slice.call(n.body.children).map(function (e) {
                    return En(e, "mousemove", xn);
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
      var Rn = function (e) {
        var t;
        return "undefined" == typeof document
          ? null
          : null == e
            ? we().body
            : ("function" == typeof e && (e = e()),
              e && "current" in e && (e = e.current),
              (null != (t = e) && t.nodeType && e) || null);
      };
      function Cn(e, t) {
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
      function Tn(e) {
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
          h = e.arrowElement,
          p = e.popperConfig,
          v = void 0 === p ? {} : p,
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
                enabled: !!h,
                options: (0, y.A)(
                  {},
                  null == (o = m.arrow) ? void 0 : o.options,
                  { element: h },
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
          u = Ye(),
          d = u[0],
          h = u[1],
          p = Ye(),
          v = p[0],
          m = p[1],
          b = qe(h, t),
          w = Cn(e.container),
          E = Cn(e.target),
          A = (0, f.useState)(!e.show),
          D = A[0],
          S = A[1],
          k = vn(
            E,
            d,
            Tn({
              placement: o,
              enableEvents: !!e.show,
              containerPadding: a || 5,
              flip: n,
              offset: r,
              arrowElement: v,
              popperConfig: c,
            }),
          ),
          _ = k.styles,
          x = k.attributes,
          O = (0, g.A)(k, ["styles", "attributes"]);
        e.show ? D && S(!1) : e.transition || D || S(!0);
        var M = e.show || (l && !D);
        if (
          (Mn(d, e.onHide, {
            disabled: !e.rootClose || e.rootCloseDisabled,
            clickTrigger: e.rootCloseEvent,
          }),
          !M)
        )
          return null;
        var R = e.children(
          (0, y.A)({}, O, {
            show: !!e.show,
            props: (0, y.A)({}, x.popper, { style: _.popper, ref: b }),
            arrowProps: (0, y.A)({}, x.arrow, { style: _.arrow, ref: m }),
          }),
        );
        if (l) {
          var C = e.onExit,
            T = e.onExiting,
            P = e.onEnter,
            N = e.onEntering,
            L = e.onEntered;
          R = f.createElement(
            l,
            {
              in: e.show,
              appear: !0,
              onExit: C,
              onExiting: T,
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
        return w ? Ue.createPortal(R, w) : null;
      });
      (Pn.displayName = "Overlay"),
        (Pn.propTypes = {
          show: _().bool,
          placement: _().oneOf(it),
          target: _().any,
          container: _().any,
          flip: _().bool,
          children: _().func.isRequired,
          containerPadding: _().number,
          popperConfig: _().object,
          rootClose: _().bool,
          rootCloseEvent: _().oneOf(["click", "mousedown"]),
          rootCloseDisabled: _().bool,
          onHide: function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            var o;
            return e.rootClose
              ? (o = _().func).isRequired.apply(o, [e].concat(n))
              : _().func.apply(_(), [e].concat(n));
          },
          transition: _().elementType,
          onEnter: _().func,
          onEntering: _().func,
          onEntered: _().func,
          onExit: _().func,
          onExiting: _().func,
          onExited: _().func,
        });
      const Nn = Pn;
      var Ln = n(13964);
      const zn = function (e, t) {
        return (0, Ln.A)(e, t);
      };
      function jn(e, t) {
        var n = Oe(e);
        return n ? n.innerHeight : t ? e.clientHeight : Te(e).height;
      }
      var In,
        Fn = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function Wn(e, t) {
        if (!In) {
          var n = document.body,
            r =
              n.matches ||
              n.matchesSelector ||
              n.webkitMatchesSelector ||
              n.mozMatchesSelector ||
              n.msMatchesSelector;
          In = function (e, t) {
            return r.call(e, t);
          };
        }
        return In(e, t);
      }
      function Hn(e, t, n) {
        e.closest && !n && e.closest(t);
        var r = e;
        do {
          if (Wn(r, t)) return r;
          r = r.parentElement;
        } while (r && r !== n && r.nodeType === document.ELEMENT_NODE);
        return null;
      }
      const Un = function (e, t, n, r) {
        for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
          if (t(e[i], i, e)) return i;
        return -1;
      };
      var Yn = n(17267),
        Bn = Math.max;
      const qn = function (e, t, n) {
        var r = null == e ? 0 : e.length;
        if (!r) return -1;
        var o = null == n ? 0 : me(n);
        return o < 0 && (o = Bn(r + o, 0)), Un(e, (0, Yn.A)(t, 3), o);
      };
      var Kn = Math.ceil,
        Vn = Math.max;
      const $n = function (e, t, n, r) {
        for (var o = -1, i = Vn(Kn((t - e) / (n || 1)), 0), a = Array(i); i--; )
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
      function Qn(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++)
          if (((r = e[n]), (o = t[n]), !(r === o || (Zn(r) && Zn(o)))))
            return !1;
        var r, o;
        return !0;
      }
      function Jn(e, t) {
        void 0 === t && (t = Qn);
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
        hr = n(73914);
      const pr = function (e, t) {
        if (e !== t) {
          var n = void 0 !== e,
            r = null === e,
            o = e == e,
            i = (0, hr.A)(e),
            a = void 0 !== t,
            s = null === t,
            c = t == t,
            l = (0, hr.A)(t);
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
          var c = pr(o[r], i[r]);
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
        t = (0, cr.A)(t, (0, dr.A)(Yn.A));
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
      function Er(e) {
        if (((!wr && 0 !== wr) || e) && Le) {
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
      function Ar(e, t) {
        var n = Oe(e);
        return n ? n.innerWidth : t ? e.clientWidth : Te(e).width;
      }
      var Dr = n(87537),
        Sr = n(76805),
        kr = n(78296),
        _r = n(79474);
      function xr(e) {
        return (0, Dr.A)(e) || (0, Sr.A)(e) || (0, kr.A)(e) || (0, _r.A)();
      }
      var Or = n(39234),
        Mr = n(16673),
        Rr = n(9175),
        Cr = n(13217),
        Tr = n(99763),
        Pr = n(84207),
        Nr = n(74603);
      const Lr = function (e, t) {
        return e && (0, Pr.A)(t, (0, Nr.A)(t), e);
      };
      var zr = n(70158);
      const jr = function (e, t) {
        return e && (0, Pr.A)(t, (0, zr.A)(t), e);
      };
      var Ir = n(27066),
        Fr = n(80335),
        Wr = n(25606);
      const Hr = function (e, t) {
        return (0, Pr.A)(e, (0, Wr.A)(e), t);
      };
      var Ur = n(57695),
        Yr = n(72097);
      const Br = Object.getOwnPropertySymbols
        ? function (e) {
            for (var t = []; e; )
              (0, tr.A)(t, (0, Wr.A)(e)), (e = (0, Ur.A)(e));
            return t;
          }
        : Yr.A;
      const qr = function (e, t) {
        return (0, Pr.A)(e, Br(e), t);
      };
      var Kr = n(81218),
        Vr = n(80647);
      const $r = function (e) {
        return (0, Vr.A)(e, zr.A, Br);
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
      var Qr = n(18277);
      const Jr = function (e, t) {
        var n = t ? (0, Qr.A)(e.buffer) : e.buffer;
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
            return (0, Qr.A)(e);
          case "[object Boolean]":
          case "[object Date]":
            return new r(+e);
          case "[object DataView]":
            return Jr(e, n);
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
        ho = fo.A && fo.A.isMap;
      const po = ho ? (0, dr.A)(ho) : uo;
      var vo = n(35181);
      const mo = function (e) {
        return (0, lo.A)(e) && "[object Set]" == (0, Gr.A)(e);
      };
      var go = fo.A && fo.A.isSet;
      const yo = go ? (0, dr.A)(go) : mo;
      var bo = "[object Arguments]",
        wo = "[object Function]",
        Eo = "[object Object]",
        Ao = {};
      (Ao[bo] =
        Ao["[object Array]"] =
        Ao["[object ArrayBuffer]"] =
        Ao["[object DataView]"] =
        Ao["[object Boolean]"] =
        Ao["[object Date]"] =
        Ao["[object Float32Array]"] =
        Ao["[object Float64Array]"] =
        Ao["[object Int8Array]"] =
        Ao["[object Int16Array]"] =
        Ao["[object Int32Array]"] =
        Ao["[object Map]"] =
        Ao["[object Number]"] =
        Ao[Eo] =
        Ao["[object RegExp]"] =
        Ao["[object Set]"] =
        Ao["[object String]"] =
        Ao["[object Symbol]"] =
        Ao["[object Uint8Array]"] =
        Ao["[object Uint8ClampedArray]"] =
        Ao["[object Uint16Array]"] =
        Ao["[object Uint32Array]"] =
          !0),
        (Ao["[object Error]"] = Ao[wo] = Ao["[object WeakMap]"] = !1);
      const Do = function e(t, n, r, o, i, a) {
        var s,
          c = 1 & n,
          l = 2 & n,
          u = 4 & n;
        if ((r && (s = i ? r(t, o, i, a) : r(t)), void 0 !== s)) return s;
        if (!(0, vo.A)(t)) return t;
        var f = (0, or.A)(t);
        if (f) {
          if (((s = Zr(t)), !c)) return (0, Fr.A)(t, s);
        } else {
          var d = (0, Gr.A)(t),
            h = d == wo || "[object GeneratorFunction]" == d;
          if ((0, co.A)(t)) return (0, Ir.A)(t, c);
          if (d == Eo || d == bo || (h && !i)) {
            if (((s = l || h ? {} : (0, so.A)(t)), !c))
              return l ? qr(t, jr(s, t)) : Hr(t, Lr(s, t));
          } else {
            if (!Ao[d]) return i ? t : {};
            s = ao(t, d, c);
          }
        }
        a || (a = new Rr.A());
        var p = a.get(t);
        if (p) return p;
        a.set(t, s),
          yo(t)
            ? t.forEach(function (o) {
                s.add(e(o, n, r, o, t, a));
              })
            : po(t) &&
              t.forEach(function (o, i) {
                s.set(i, e(o, n, r, i, t, a));
              });
        var v = u ? (l ? $r : Kr.A) : l ? zr.A : Nr.A,
          m = f ? void 0 : v(t);
        return (
          (0, Cr.A)(m || t, function (o, i) {
            m && (o = t[(i = o)]), (0, Tr.A)(s, i, e(o, n, r, i, t, a));
          }),
          s
        );
      };
      var So = n(1931);
      const ko = function (e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0;
      };
      const _o = function (e, t) {
        return t.length < 2 ? e : (0, lr.A)(e, fe(t, 0, -1));
      };
      var xo = n(5269);
      const Oo = function (e, t) {
        return (
          (t = (0, So.A)(t, e)),
          null == (e = _o(e, t)) || delete e[(0, xo.A)(ko(t))]
        );
      };
      var Mo = n(77011);
      const Ro = function (e) {
        return (0, Mo.A)(e) ? void 0 : e;
      };
      const Co = function (e) {
        return (null == e ? 0 : e.length) ? sr(e, 1) : [];
      };
      var To = n(75702),
        Po = n(99660);
      const No = (function (e) {
        return (0, Po.A)((0, To.A)(e, void 0, Co), e + "");
      })(function (e, t) {
        var n = {};
        if (null == e) return n;
        var r = !1;
        (t = (0, cr.A)(t, function (t) {
          return (t = (0, So.A)(t, e)), r || (r = t.length > 1), t;
        })),
          (0, Pr.A)(e, $r(e), n),
          r && (n = Do(n, 7, Ro));
        for (var o = t.length; o--; ) Oo(n, t[o]);
        return n;
      });
      var Lo = n(58760),
        zo = Object.prototype,
        jo = zo.hasOwnProperty;
      const Io = (0, yr.A)(function (e, t) {
        e = Object(e);
        var n = -1,
          r = t.length,
          o = r > 2 ? t[2] : void 0;
        for (o && (0, de.A)(t[0], t[1], o) && (r = 1); ++n < r; )
          for (
            var i = t[n], a = (0, zr.A)(i), s = -1, c = a.length;
            ++s < c;
          ) {
            var l = a[s],
              u = e[l];
            (void 0 === u || ((0, Lo.A)(u, zo[l]) && !jo.call(e, l))) &&
              (e[l] = i[l]);
          }
        return e;
      });
      var Fo = n(5536),
        Wo = n(25665),
        Ho = n(30186),
        Uo = n(48693);
      const Yo = function (e, t, n) {
        var r = (0, or.A)(e),
          o = r || (0, co.A)(e) || (0, Uo.A)(e);
        if (((t = (0, Yn.A)(t, 4)), null == n)) {
          var i = e && e.constructor;
          n = o
            ? r
              ? new i()
              : []
            : (0, vo.A)(e) && (0, Ho.A)(i)
              ? (0, Fo.A)((0, Ur.A)(e))
              : {};
        }
        return (
          (o ? Cr.A : Wo.A)(e, function (e, r, o) {
            return t(n, e, r, o);
          }),
          n
        );
      };
      var Bo = n(63376);
      const qo = function (e, t) {
        var n = {};
        return (
          (t = (0, Yn.A)(t, 3)),
          (0, Wo.A)(e, function (e, r, o) {
            (0, Bo.A)(n, r, t(e, r, o));
          }),
          n
        );
      };
      n(22586), n(20237), n(83632), n(43334), n(39920), n(4042), n(14240);
      function Ko(e) {
        return e.children;
      }
      var Vo = "PREV",
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
        Qo = Object.keys(Zo).map(function (e) {
          return Zo[e];
        });
      function Jo(e, t) {
        e && e.apply(null, [].concat(t));
      }
      _().oneOfType([_().string, _().func]),
        _().any,
        _().func,
        _().oneOfType([
          _().arrayOf(_().oneOf(Qo)),
          _().objectOf(function (e, t) {
            if (-1 !== Qo.indexOf(t) && "boolean" == typeof e[t]) return null;
            for (
              var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
              o < n;
              o++
            )
              r[o - 2] = arguments[o];
            return _().elementType.apply(_(), [e, t].concat(r));
          }),
        ]),
        _().oneOfType([_().oneOf(["overlap", "no-overlap"]), _().func]);
      var ei = { seconds: 1e3, minutes: 6e4, hours: 36e5, day: 864e5 };
      function ti(e, t) {
        var n = U(e, "month");
        return U(n, "week", t.startOfWeek());
      }
      function ni(e, t) {
        var n = Y(e, "month");
        return Y(n, "week", t.startOfWeek());
      }
      function ri(e, t) {
        for (var n = ti(e, t), r = ni(e, t), o = []; G(n, r, "day"); )
          o.push(n), (n = W(n, 1, "day"));
        return o;
      }
      function oi(e, t) {
        var n = U(e, t);
        return B(n, e) ? n : W(n, 1, t);
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
          o.push(r), (r = W(r, 1, n));
        return o;
      }
      function ai(e, t) {
        return null == t && null == e
          ? null
          : (null == t && (t = new Date()),
            null == e && (e = new Date()),
            (e = U(e, "day")),
            (e = ne(e, ne(t))),
            (e = te(e, te(t))),
            (e = ee(e, ee(t))),
            J(e, J(t)));
      }
      function si(e) {
        return 0 === ne(e) && 0 === te(e) && 0 === ee(e) && 0 === J(e);
      }
      function ci(e, t, n) {
        return n && "milliseconds" !== n
          ? Math.round(Math.abs(+U(e, n) / ei[n] - +U(t, n) / ei[n]))
          : Math.abs(+e - +t);
      }
      var li = _().oneOfType([_().string, _().func]);
      function ui(e, t, n, r, o) {
        var i = "function" == typeof r ? r(n, o, e) : t.call(e, n, r, o);
        return (
          h()(
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
      function hi(e, t) {
        return ci(e, t, "minutes") + di(e, t);
      }
      function pi(e) {
        var t = U(e, "day");
        return ci(t, e, "minutes") + di(t, e);
      }
      function vi(e, t) {
        return $(e, t, "day");
      }
      function mi(e, t, n) {
        return B(e, t, "minutes") ? V(t, n, "minutes") : K(t, n, "minutes");
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
          l = +U(n, "day") - +U(a, "day"),
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
          s = U(n, "day"),
          c = G(s, a, "day"),
          l = q(s, r, "minutes") ? K(r, i, "minutes") : V(r, i, "minutes");
        return c && l;
      }
      function bi(e, t) {
        return B(e, t, "day");
      }
      function wi(e, t) {
        return si(e) && si(t);
      }
      var Ei = (0, s.A)(function e(t) {
        var n = this;
        (0, a.A)(this, e),
          h()(
            "function" == typeof t.format,
            "date localizer `format(..)` must be a function",
          ),
          h()(
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
          (this.inRange = t.inRange || Q),
          (this.lt = t.lt || $),
          (this.lte = t.lte || G),
          (this.gt = t.gt || K),
          (this.gte = t.gte || V),
          (this.eq = t.eq || B),
          (this.neq = t.neq || q),
          (this.startOf = t.startOf || U),
          (this.endOf = t.endOf || Y),
          (this.add = t.add || W),
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
          (this.getTotalMin = t.getTotalMin || hi),
          (this.getMinutesFromMidnight = t.getMinutesFromMidnight || pi),
          (this.continuesPrior = t.continuesPrior || vi),
          (this.continuesAfter = t.continuesAfter || mi),
          (this.sortEvents = t.sortEvents || gi),
          (this.inEventRange = t.inEventRange || yi),
          (this.isSameDate = t.isSameDate || bi),
          (this.startAndEndAreDateOnly = t.startAndEndAreDateOnly || wi),
          (this.segmentOffset = t.browserTZOffset ? t.browserTZOffset() : 0);
      });
      function Ai(e, t, n, o) {
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
        ki = (function (e) {
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
                    h = e.continuesPrior,
                    p = e.continuesAfter,
                    v = e.accessors,
                    m = e.getters,
                    g = e.children,
                    y = e.components,
                    b = y.event,
                    w = y.eventWrapper,
                    E = e.slotStart,
                    A = e.slotEnd,
                    D = (0, o.A)(e, Si);
                  delete D.resizable;
                  var k = v.title(i),
                    _ = v.tooltip(i),
                    x = v.end(i),
                    O = v.start(i),
                    M = v.allDay(i),
                    R = s || M || d.diff(O, d.ceil(x, "day"), "day") > 1,
                    C = m.eventProp(i, O, x, a),
                    T = f.createElement(
                      "div",
                      { className: "rbc-event-content", title: _ || void 0 },
                      b
                        ? f.createElement(b, {
                            event: i,
                            continuesPrior: h,
                            continuesAfter: p,
                            title: k,
                            isAllDay: M,
                            localizer: d,
                            slotStart: E,
                            slotEnd: A,
                          })
                        : k,
                    );
                  return f.createElement(
                    w,
                    Object.assign({}, this.props, { type: "date" }),
                    f.createElement(
                      "div",
                      Object.assign({}, D, {
                        tabIndex: 0,
                        style: (0, r.A)((0, r.A)({}, C.style), t),
                        className: S("rbc-event", n, C.className, {
                          "rbc-selected": a,
                          "rbc-event-allday": R,
                          "rbc-event-continues-prior": h,
                          "rbc-event-continues-after": p,
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
                      "function" == typeof g ? g(T) : T,
                    ),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      function _i(e, t) {
        return !(!e || null == t) && zn(e, t);
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
      function Mi(e) {
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
          h = e.events,
          p = e.slotStart,
          v = e.slotEnd,
          m = e.onSelect,
          g = e.onDoubleClick,
          y = e.onKeyPress,
          b = e.handleDragStart,
          w = e.popperRef,
          E = e.target,
          A = e.offset;
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
                    h = u.width,
                    p = u.height,
                    v = Te(o),
                    m = v.width,
                    g = v.height,
                    y = f + p,
                    b = d + h,
                    w = a + g,
                    E = s + m,
                    A = n.x,
                    D = n.y;
                  return {
                    topOffset: w > y ? a - g - D : a + D + l,
                    leftOffset: E > b ? s + A - m + c : s + A,
                  };
                })({
                  target: E,
                  offset: A,
                  container: o.current,
                  box: w.current,
                }),
                t = e.topOffset,
                n = e.leftOffset;
              (w.current.style.top = "".concat(t, "px")),
                (w.current.style.left = "".concat(n, "px"));
            },
            [A.x, A.y, E],
          );
        var D = u.width,
          S = { minWidth: D + D / 2 };
        return f.createElement(
          "div",
          { style: S, className: "rbc-overlay", ref: w },
          f.createElement(
            "div",
            { className: "rbc-overlay-header" },
            l.format(p, "dayHeaderFormat"),
          ),
          h.map(function (e, t) {
            return f.createElement(ki, {
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
              continuesPrior: l.lt(i.end(e), p, "day"),
              continuesAfter: l.gte(i.start(e), v, "day"),
              slotStart: p,
              slotEnd: v,
              selected: _i(e, s),
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
      var Ri = f.forwardRef(function (e, t) {
        return f.createElement(Mi, Object.assign({}, e, { popperRef: t }));
      });
      function Ci(e) {
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
          h = e.handleKeyPressEvent,
          p = e.handleDragStart,
          v = e.onHide,
          m = e.overlayDisplay,
          g = (0, f.useRef)(null);
        if (!o.position) return null;
        var y = r;
        isNaN(r) || (y = { x: r, y: r });
        var b = o.position,
          w = o.events,
          E = o.date,
          A = o.end;
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
              Ri,
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
                slotStart: E,
                slotEnd: A,
                onSelect: u,
                onDoubleClick: d,
                onKeyPress: h,
                handleDragStart: p,
              }),
            );
          },
        );
      }
      Ri.propTypes = {
        accessors: _().object.isRequired,
        getters: _().object.isRequired,
        selected: _().object,
        components: _().object.isRequired,
        localizer: _().object.isRequired,
        position: _().object.isRequired,
        show: _().func.isRequired,
        events: _().array.isRequired,
        slotStart: _().instanceOf(Date).isRequired,
        slotEnd: _().instanceOf(Date),
        onSelect: _().func,
        onDoubleClick: _().func,
        onKeyPress: _().func,
        handleDragStart: _().func,
        style: _().object,
        offset: _().shape({ x: _().number, y: _().number }),
      };
      var Ti = f.forwardRef(function (e, t) {
        return f.createElement(Ci, Object.assign({}, e, { containerRef: t }));
      });
      function Pi(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : document;
        return En(n, e, t, { passive: !1 });
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
      Ti.propTypes = {
        popupOffset: _().oneOfType([
          _().number,
          _().shape({ x: _().number, y: _().number }),
        ]),
        overlay: _().shape({
          position: _().object,
          events: _().array,
          date: _().instanceOf(Date),
          end: _().instanceOf(Date),
        }),
        accessors: _().object.isRequired,
        localizer: _().object.isRequired,
        components: _().object.isRequired,
        getters: _().object.isRequired,
        selected: _().object,
        handleSelectEvent: _().func,
        handleDoubleClickEvent: _().func,
        handleKeyPressEvent: _().func,
        handleDragStart: _().func,
        onHide: _().func,
        overlayDisplay: _().func,
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
                return !(!t || !this.selecting) && Ii(t, Fi(e));
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
                        h = d.top,
                        p = d.left,
                        v = d.bottom,
                        m = d.right;
                      if (
                        !Ii(
                          {
                            top: (t = Fi(c)).top - h,
                            left: t.left - p,
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
                var t = zi(e),
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
      function Ii(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = Fi(e),
          o = r.top,
          i = r.left,
          a = r.right,
          s = void 0 === a ? i : a,
          c = r.bottom,
          l = void 0 === c ? o : c,
          u = Fi(t),
          f = u.top,
          d = u.left,
          h = u.right,
          p = void 0 === h ? d : h,
          v = u.bottom;
        return !(
          l - n < f ||
          o + n > (void 0 === v ? f : v) ||
          s - n < d ||
          i + n > p
        );
      }
      function Fi(e) {
        if (!e.getBoundingClientRect) return e;
        var t = e.getBoundingClientRect(),
          n = t.left + Wi("left"),
          r = t.top + Wi("top");
        return {
          top: r,
          left: n,
          right: (e.offsetWidth || 0) + n,
          bottom: (e.offsetHeight || 0) + r,
        };
      }
      function Wi(e) {
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
                        h = r.dayProp(e),
                        p = h.className,
                        v = h.style;
                      return f.createElement(
                        i,
                        { key: n, value: e, range: t },
                        f.createElement("div", {
                          style: v,
                          className: S(
                            "rbc-day-bg",
                            p,
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
                        var o = Fi(t),
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
                        (Jo(e.props.onSelectStart, [r]),
                        (e._initial = { x: r.x, y: r.y })),
                      n.isSelected(t))
                    ) {
                      var l = Fi(t),
                        u = (function (e, t, n, r, o) {
                          var i = -1,
                            a = -1,
                            s = r - 1,
                            c = xi(t, r),
                            l = Oi(t, n.x, o, r),
                            u = t.top < n.y && t.bottom > n.y,
                            f = t.top < e.y && t.bottom > e.y,
                            d = e.y > t.bottom,
                            h = t.top > e.y;
                          return (
                            n.top < t.top &&
                              n.bottom > t.bottom &&
                              ((i = 0), (a = s)),
                            u &&
                              (h
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
                        Jo(e.props.onSelectEnd, [e.state]);
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
        Ui =
          (_().object.isRequired,
          _().object,
          _().bool,
          _().object.isRequired,
          _().object.isRequired,
          _().object.isRequired,
          _().object.isRequired,
          _().func,
          _().func,
          _().func,
          { segments: [], selected: {} }),
        Yi = function (e, t) {
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
            h = l.continuesPrior(t),
            p = l.continuesAfter(t);
          return f.createElement(ki, {
            event: t,
            getters: o,
            localizer: c,
            accessors: r,
            components: u,
            onSelect: i,
            onDoubleClick: a,
            onKeyPress: s,
            continuesPrior: h,
            continuesAfter: p,
            slotStart: l.first,
            slotEnd: l.last,
            selected: _i(t, n),
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
        qi = (function (e) {
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
                        d = Yi(e.props, a);
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
      function Ki(e) {
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
      qi.defaultProps = (0, r.A)({}, Ui);
      var Zi = function (e, t) {
          return e.left <= t && e.right >= t;
        },
        Qi = function (e, t) {
          return e.filter(function (e) {
            return Zi(e, t);
          }).length;
        },
        Ji = (function (e) {
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
                          return Zi(e, o);
                        })[0] || {},
                      l = c.event,
                      u = c.left,
                      d = c.right,
                      h = c.span;
                    if (l) {
                      var p = Math.max(0, u - i);
                      if (this.canRenderSlotEvent(u, h)) {
                        var v = Yi(this.props, l);
                        p && a.push(Bi(n, p, s + "_gap")),
                          a.push(Bi(n, h, s, v)),
                          (i = o = d + 1);
                      } else
                        p && a.push(Bi(n, p, s + "_gap")),
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
                    return 1 === Qi(n, e);
                  });
                },
              },
              {
                key: "renderShowMore",
                value: function (e, t) {
                  var n = this,
                    r = this.props.localizer,
                    o = Qi(e, t);
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
      Ji.defaultProps = (0, r.A)({}, Ui);
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
        return Jn(function (e) {
          for (
            var t = e.range,
              n = e.events,
              o = e.maxRows,
              i = e.minRows,
              a = e.accessors,
              s = e.localizer,
              c = Ki({ dateRange: t, localizer: s }),
              l = c.first,
              u = c.last,
              f = n.map(function (e) {
                return (function (e, t, n, r) {
                  var o = Ki({ dateRange: t, localizer: r }),
                    i = o.first,
                    a = o.last,
                    s = r.diff(i, a, "day"),
                    c = r.max(r.startOf(n.start(e), "day"), i),
                    l = r.min(r.ceil(n.end(e), "day"), a),
                    u = qn(t, function (e) {
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
              h = d.levels,
              p = d.extra,
              v = p.length > 0 ? i - 1 : i;
            h.length < v;
          )
            h.push([]);
          return {
            first: l,
            last: u,
            levels: h,
            extra: p,
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
                Fn(r.querySelectorAll(o)))[0];
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
                  h = e.renderHeader,
                  p = e.onSelect,
                  v = e.localizer,
                  m = e.onSelectStart,
                  g = e.onSelectEnd,
                  y = e.onDoubleClick,
                  b = e.onKeyPress,
                  w = e.resourceId,
                  E = e.longPressThreshold,
                  A = e.isAllDay,
                  D = e.resizable,
                  k = e.showAllEvents;
                if (s) return this.renderDummy();
                var _ = this.slotMetrics(this.props),
                  x = _.levels,
                  O = _.extra,
                  M = k ? ea : Ko,
                  R = u.weekWrapper,
                  C = {
                    selected: i,
                    accessors: c,
                    getters: l,
                    localizer: v,
                    components: u,
                    onSelect: p,
                    onDoubleClick: y,
                    onKeyPress: b,
                    resourceId: w,
                    slotMetrics: _,
                    resizable: D,
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
                    longPressThreshold: E,
                    resourceId: w,
                  }),
                  f.createElement(
                    "div",
                    {
                      className: S(
                        "rbc-row-content",
                        k && "rbc-row-content-scrollable",
                      ),
                      role: "row",
                    },
                    h &&
                      f.createElement(
                        "div",
                        { className: "rbc-row ", ref: this.headingRowRef },
                        r.map(this.renderHeadingCell),
                      ),
                    f.createElement(
                      M,
                      null,
                      f.createElement(
                        R,
                        Object.assign({ isAllDay: A }, C, {
                          rtl: this.props.rtl,
                        }),
                        x.map(function (e, t) {
                          return f.createElement(
                            qi,
                            Object.assign({ key: t, segments: e }, C),
                          );
                        }),
                        !!O.length &&
                          f.createElement(
                            Ji,
                            Object.assign(
                              { segments: O, onShowMore: this.handleShowMore },
                              C,
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
                  h = r.accessors,
                  p = r.getters,
                  v = r.showAllEvents,
                  m = e.state,
                  g = m.needLimitMeasure,
                  y = m.rowLimit,
                  b = (function (e, t, n, r, o) {
                    return e.filter(function (e) {
                      return $i(e, t, n, r, o);
                    });
                  })((0, ue.A)(o), t[0], t[t.length - 1], h, u);
                return (
                  b.sort(function (e, t) {
                    return Xi(e, t, h, u);
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
                    accessors: h,
                    getters: p,
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
                  h = c(n),
                  p = l.format(n, "dateFormat"),
                  v = e.props.components.dateHeader || ia;
                return f.createElement(
                  "div",
                  Object.assign({}, i, {
                    className: S(r, u && "rbc-off-range", d && "rbc-current"),
                    role: "cell",
                  }),
                  f.createElement(v, {
                    label: p,
                    date: n,
                    drilldownView: h,
                    isOffRange: u,
                    onDrillDown: function (t) {
                      return e.handleHeadingClick(n, h, t);
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
                  Jo(e.props.onDrillDown, [t, n]);
              }),
              (e.handleSelectEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Jo(e.props.onSelectEvent, n);
              }),
              (e.handleDoubleClickEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Jo(e.props.onDoubleClickEvent, n);
              }),
              (e.handleKeyPressEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Jo(e.props.onKeyPressEvent, n);
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
                } else f && Jo(c, [n, u(n) || Zo.DAY]);
                Jo(l, [t, n, o]);
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
                    return f.createElement(Ti, {
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
                      Jo(this.props.onSelectSlot, {
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
            case Vo:
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
            h = 0;
          h < l;
          h++
        ) {
          f[h] = new Array(o);
          for (var p = 0; p < o; p++) {
            var v = h * o + p,
              m = v * r;
            d[v] = f[h][p] = i.getSlotDate(t, c, m);
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
      function ha(e, t, n) {
        for (var r = 0; r < e.friends.length; ++r)
          if (!(n.indexOf(e.friends[r]) > -1)) {
            (t = t > e.friends[r].idx ? t : e.friends[r].idx),
              n.push(e.friends[r]);
            var o = ha(e.friends[r], t, n);
            t = t > o ? t : o;
          }
        return t;
      }
      var pa = {
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
            for (var d = t[f], h = [], p = 0; p < 100; ++p) h.push(1);
            for (var v = 0; v < d.friends.length; ++v)
              void 0 !== d.friends[v].idx && (h[d.friends[v].idx] = 0);
            d.idx = h.indexOf(1);
          }
          for (var m = 0; m < t.length; ++m) {
            var g;
            if (!t[m].size) {
              var y = [];
              (g = 100 / (ha(t[m], 0, y) + 1)), (t[m].size = g);
              for (var b = 0; b < y.length; ++b) y[b].size = g;
            }
          }
          for (var w = 0; w < t.length; ++w) {
            var E = t[w];
            E.style.left = E.idx * E.size;
            for (var A = 0, D = 0; D < E.friends.length; ++D) {
              var S = E.friends[D].idx;
              A = A > S ? A : S;
            }
            A <= E.idx && (E.size = 100 - E.idx * E.size);
            var k = 0 === E.idx ? 0 : 3;
            (E.style.width = "calc(".concat(E.size, "% - ").concat(k, "px)")),
              (E.style.height = "calc(".concat(E.style.height, "% - 2px)")),
              (E.style.xOffset = "calc("
                .concat(E.style.left, "% + ")
                .concat(k, "px)"));
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
                  s = void 0 === a ? Ko : a,
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
          h = e.onClick,
          p = e.onDoubleClick,
          v = e.isBackgroundEvent,
          m = e.onKeyPress,
          g = e.components,
          y = g.event,
          b = g.eventWrapper,
          w = i.title(o),
          E = i.tooltip(o),
          A = i.end(o),
          D = i.start(o),
          k = d.eventProp(o, D, A, s),
          _ = t.height,
          x = t.top,
          O = t.width,
          M = t.xOffset,
          R = [
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
          C = v
            ? (0, r.A)(
                (0, r.A)({}, k.style),
                {},
                (0, le.A)(
                  {
                    top: ma(x),
                    height: ma(_),
                    width: "calc(".concat(O, " + 10px)"),
                  },
                  a ? "right" : "left",
                  ma(Math.max(0, M)),
                ),
              )
            : (0, r.A)(
                (0, r.A)({}, k.style),
                {},
                (0, le.A)(
                  { top: ma(x), width: ma(O), height: ma(_) },
                  a ? "right" : "left",
                  ma(M),
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
              onClick: h,
              onDoubleClick: p,
              style: C,
              onKeyPress: m,
              title: E ? ("string" == typeof c ? c + ": " : "") + E : void 0,
              className: S(
                v ? "rbc-background-event" : "rbc-event",
                n,
                k.className,
                {
                  "rbc-selected": s,
                  "rbc-event-continues-earlier": l,
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
        ba = f.forwardRef(function (e, t) {
          return f.createElement(ya, Object.assign({}, e, { innerRef: t }));
        }),
        wa = ["dayProp"],
        Ea = ["eventContainerWrapper"],
        Aa = (function (e) {
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
                  h = i.step,
                  p = i.timeslots,
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
                      n in pa && (r = pa[n]),
                      (t = r) && t.constructor && t.call && t.apply
                        ? r.apply(this, arguments)
                        : []
                    );
                  })({
                    events: n,
                    accessors: c,
                    slotMetrics: g,
                    minimumStartDifference: Math.ceil((h * p) / 2),
                    dayLayoutAlgorithm: v,
                  });
                return b.map(function (t, n) {
                  var i,
                    h = t.event,
                    p = t.style,
                    v = c.end(h),
                    b = c.start(h),
                    w = "eventTimeRangeFormat",
                    E = g.startsBeforeDay(b),
                    A = g.startsAfterDay(v);
                  E
                    ? (w = "eventTimeRangeEndFormat")
                    : A && (w = "eventTimeRangeStartFormat"),
                    (i = E && A ? y.allDay : l.format({ start: b, end: v }, w));
                  var D = E || g.startsBefore(b),
                    S = A || g.startsAfter(v);
                  return f.createElement(ga, {
                    style: p,
                    event: h,
                    label: i,
                    key: "evt_" + n,
                    getters: u,
                    rtl: a,
                    components: d,
                    continuesPrior: D,
                    continuesAfter: S,
                    accessors: c,
                    resource: e.props.resource,
                    selected: _i(h, s),
                    onClick: function (t) {
                      return e._select(
                        (0, r.A)(
                          (0, r.A)({}, h),
                          {},
                          { sourceResource: e.props.resource },
                        ),
                        t,
                      );
                    },
                    onDoubleClick: function (t) {
                      return e._doubleClick(h, t);
                    },
                    isBackgroundEvent: o,
                    onKeyPress: function (t) {
                      return e._keyPress(h, t);
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
                    var o = e.slotMetrics.closestSlotFromPoint(n, Fi(t));
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
                Jo(e.props.onSelectSlot, {
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
                Jo(e.props.onSelectEvent, n);
              }),
              (e._doubleClick = function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Jo(e.props.onDoubleClickEvent, n);
              }),
              (e._keyPress = function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Jo(e.props.onKeyPressEvent, n);
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
                    h = e.components,
                    p = h.eventContainerWrapper,
                    v = (0, o.A)(h, Ea),
                    m = this.slotMetrics,
                    g = this.state,
                    y = g.selecting,
                    b = g.top,
                    w = g.height,
                    E = { start: g.startDate, end: g.endDate },
                    A = u(n),
                    D = A.className,
                    k = A.style,
                    _ = v.dayColumnWrapper || ba;
                  return f.createElement(
                    _,
                    {
                      ref: this.containerRef,
                      date: t,
                      style: k,
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
                      return f.createElement(va, {
                        key: t,
                        group: e,
                        resource: a,
                        getters: d,
                        components: v,
                      });
                    }),
                    f.createElement(
                      p,
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
                          c.format(E, "selectRangeFormat"),
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
      Aa.defaultProps = { dragThroughEvents: !0, timeslots: 2 };
      var Da = function (e) {
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
            h = c.timeGutterWrapper,
            p = (0, f.useMemo)(
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
            v = p.start,
            m = p.end,
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
          var E = (0, f.useCallback)(
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
            h,
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
                  renderSlot: E,
                  getters: l,
                });
              }),
            ),
          );
        },
        Sa = f.forwardRef(function (e, t) {
          return f.createElement(Da, Object.assign({ gutterRef: t }, e));
        }),
        ka = function (e) {
          var t = e.label;
          return f.createElement(f.Fragment, null, t);
        },
        _a = (function (e) {
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
                  r.preventDefault(), Jo(e.props.onDrillDown, [t, n]);
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
                  h = n.resizable,
                  p = u.resourceId(t),
                  v = t
                    ? r.filter(function (e) {
                        return u.resource(e) === p;
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
                  resourceId: p,
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
                  resizable: h,
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
                      h = u.style,
                      p = f.createElement(c, {
                        date: e,
                        label: s,
                        localizer: r,
                      });
                    return f.createElement(
                      "div",
                      {
                        key: n,
                        style: h,
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
                            p,
                          )
                        : f.createElement("span", null, p),
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
                    h = t.getters,
                    p = t.scrollRef,
                    v = t.localizer,
                    m = t.isOverflowing,
                    g = t.components,
                    y = g.timeGutterHeader,
                    b = g.resourceHeader,
                    w = void 0 === b ? ka : b,
                    E = t.resizable,
                    A = {};
                  m &&
                    (A[r ? "marginLeft" : "marginRight"] = "".concat(
                      Er() - 1,
                      "px",
                    ));
                  var D = o.groupEvents(a);
                  return f.createElement(
                    "div",
                    {
                      style: A,
                      ref: p,
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
                        p = o[1];
                      return f.createElement(
                        "div",
                        { className: "rbc-time-header-content", key: a || n },
                        p &&
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
                                label: c.resourceTitle(p),
                                resource: p,
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
                          resourceId: p && a,
                          className: "rbc-allday-cell",
                          selectable: l,
                          selected: e.props.selected,
                          components: d,
                          accessors: c,
                          getters: h,
                          localizer: v,
                          onSelect: e.props.onSelectEvent,
                          onShowMore: e.props.onShowMore,
                          onDoubleClick: e.props.onDoubleClickEvent,
                          onKeyPress: e.props.onKeyPressEvent,
                          onSelectSlot: e.props.onSelectSlot,
                          longPressThreshold: e.props.longPressThreshold,
                          resizable: E,
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
              We(o.rafHandle), (o.rafHandle = He(o.checkOverflow));
            }),
            (o.handleKeyPressEvent = function () {
              o.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              Jo(o.props.onKeyPressEvent, t);
            }),
            (o.handleSelectEvent = function () {
              o.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              Jo(o.props.onSelectEvent, t);
            }),
            (o.handleDoubleClickEvent = function () {
              o.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              Jo(o.props.onDoubleClickEvent, t);
            }),
            (o.handleShowMore = function (e, t, n, i, a) {
              var s = o.props,
                c = s.popup,
                l = s.onDrillDown,
                u = s.onShowMore,
                f = s.getDrilldownView,
                d = s.doShowMoreDrillDown;
              if ((o.clearSelection(), c)) {
                var h = Ne(n, o.containerRef.current);
                o.setState({
                  overlay: {
                    date: t,
                    events: e,
                    position: (0, r.A)((0, r.A)({}, h), {}, { width: "200px" }),
                    target: a,
                  },
                });
              } else d && Jo(l, [t, f(t) || Zo.DAY]);
              Jo(u, [e, t, i]);
            }),
            (o.handleSelectAllDaySlot = function (e, t) {
              var n = o.props.onSelectSlot,
                r = new Date(e[0]),
                i = new Date(e[e.length - 1]);
              i.setDate(e[e.length - 1].getDate() + 1),
                Jo(n, {
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
            (o.memoizedResources = Jn(function (e, t) {
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
                  h = i.dayLayoutAlgorithm,
                  p = this.memoizedResources(this.props.resources, l),
                  v = p.groupEvents(t),
                  m = p.groupEvents(n);
                return p.map(function (t, n) {
                  var i = (0, u.A)(t, 2),
                    p = i[0],
                    g = i[1];
                  return e.map(function (e, t) {
                    var i = (v.get(p) || []).filter(function (t) {
                        return d.inRange(e, l.start(t), l.end(t), "day");
                      }),
                      u = (m.get(p) || []).filter(function (t) {
                        return d.inRange(e, l.start(t), l.end(t), "day");
                      });
                    return f.createElement(
                      Aa,
                      Object.assign({}, o.props, {
                        localizer: d,
                        min: d.merge(e, a),
                        max: d.merge(e, s),
                        resource: g && p,
                        components: c,
                        isNow: d.isSameDate(e, r),
                        key: n + "-" + t,
                        date: e,
                        events: i,
                        backgroundEvents: u,
                        dayLayoutAlgorithm: h,
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
                  h = t.getters,
                  p = t.localizer,
                  v = t.min,
                  m = t.max,
                  g = t.showMultiDayTimes,
                  y = t.longPressThreshold,
                  b = t.resizable;
                i = i || this.state.gutterWidth;
                var w = o[0],
                  E = o[o.length - 1];
                this.slots = o.length;
                var A = [],
                  D = [],
                  k = [];
                return (
                  n.forEach(function (e) {
                    if ($i(e, w, E, d, p)) {
                      var t = d.start(e),
                        n = d.end(e);
                      d.allDay(e) ||
                      p.startAndEndAreDateOnly(t, n) ||
                      (!g && !p.isSameDate(t, n))
                        ? A.push(e)
                        : D.push(e);
                    }
                  }),
                  r.forEach(function (e) {
                    $i(e, w, E, d, p) && k.push(e);
                  }),
                  A.sort(function (e, t) {
                    return Xi(e, t, d, p);
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
                    f.createElement(_a, {
                      range: o,
                      events: A,
                      width: i,
                      rtl: a,
                      getNow: c,
                      localizer: p,
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
                      getters: h,
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
                        localizer: p,
                        min: p.merge(w, v),
                        max: p.merge(w, m),
                        step: this.props.step,
                        getNow: this.props.getNow,
                        timeslots: this.props.timeslots,
                        components: u,
                        className: "rbc-time-gutter",
                        getters: h,
                      }),
                      this.renderEvents(o, D, k, c()),
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
                return f.createElement(Ti, {
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
                            ? Ar(e.gutterRef.current)
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
      var Ma = [
          "date",
          "localizer",
          "min",
          "max",
          "scrollToTime",
          "enableAutoScroll",
        ],
        Ra = (function (e) {
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
                    h = void 0 === d || d,
                    p = (0, o.A)(e, Ma),
                    v = n.range(t, { localizer: r });
                  return f.createElement(
                    Oa,
                    Object.assign({}, p, {
                      range: v,
                      eventOffset: 10,
                      localizer: r,
                      min: a,
                      max: c,
                      scrollToTime: u,
                      enableAutoScroll: h,
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
            case Vo:
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
      var Ca = [
          "date",
          "localizer",
          "min",
          "max",
          "scrollToTime",
          "enableAutoScroll",
        ],
        Ta = (function (e) {
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
                    h = void 0 === d || d,
                    p = (0, o.A)(e, Ca),
                    v = n.range(t, this.props);
                  return f.createElement(
                    Oa,
                    Object.assign({}, p, {
                      range: v,
                      eventOffset: 15,
                      localizer: r,
                      min: a,
                      max: c,
                      scrollToTime: u,
                      enableAutoScroll: h,
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      (Ta.defaultProps = Oa.defaultProps),
        (Ta.navigate = function (e, t, n) {
          var r = n.localizer;
          switch (t) {
            case Vo:
              return r.add(e, -1, "week");
            case $o:
              return r.add(e, 1, "week");
            default:
              return e;
          }
        }),
        (Ta.range = function (e, t) {
          var n = t.localizer,
            r = n.startOfWeek(),
            o = n.startOf(e, "week", r),
            i = n.endOf(e, "week", r);
          return n.range(o, i);
        }),
        (Ta.title = function (e, t) {
          var n = t.localizer,
            r = xr(Ta.range(e, { localizer: n })),
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
        return Ta.range(e, t).filter(function (e) {
          return -1 === [6, 0].indexOf(e.getDay());
        });
      }
      var La,
        za = (function (e) {
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
                    h = (0, o.A)(e, Pa),
                    p = Na(t, this.props);
                  return f.createElement(
                    Oa,
                    Object.assign({}, h, {
                      range: p,
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
          h = (0, f.useRef)(null),
          p = (0, f.useRef)(null),
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
                (r = [Ar(t.children[0]), Ar(t.children[1])]),
                  (o[0] === r[0] && o[1] === r[1]) ||
                    ((h.current.style.width = r[0] + "px"),
                    (p.current.style.width = r[1] + "px")),
                  n
                    ? ((0, Or.A)(e, "rbc-header-overflowing"),
                      (e.style.marginRight = Er() + "px"))
                    : (0, Mr.A)(e, "rbc-header-overflowing");
              }
            }
          },
          b = s.messages,
          w = s.add(r, a, "day"),
          E = s.range(r, w, "day");
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
                          { className: "rbc-header", ref: h },
                          b.date,
                        ),
                        f.createElement(
                          "th",
                          { className: "rbc-header", ref: p },
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
                        E.map(function (e, r) {
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
                            })).map(function (n, h) {
                              var p = t.title(n),
                                v = t.end(n),
                                m = t.start(n),
                                y = i.eventProp(n, m, v, _i(n, u)),
                                b = 0 === h && s.format(e, "agendaDateFormat"),
                                w =
                                  0 === h &&
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
                                  key: o + "_" + h,
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
                                    ? f.createElement(a, { event: n, title: p })
                                    : p,
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
      (za.defaultProps = Oa.defaultProps),
        (za.range = Na),
        (za.navigate = Ta.navigate),
        (za.title = function (e, t) {
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
            case Vo:
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
      var Ia =
          ((La = {}),
          (0, le.A)(La, Zo.MONTH, sa),
          (0, le.A)(La, Zo.WEEK, Ta),
          (0, le.A)(La, Zo.WORK_WEEK, za),
          (0, le.A)(La, Zo.DAY, Ra),
          (0, le.A)(La, Zo.AGENDA, ja),
          La),
        Fa = ["action", "date", "today"];
      var Wa = (function (e) {
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
                      { type: "button", onClick: this.navigate.bind(null, Vo) },
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
        Ua = ["view", "date", "getNow", "onNavigate"],
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
      function Ba(e) {
        if (Array.isArray(e)) return e;
        for (var t = [], n = 0, r = Object.entries(e); n < r.length; n++) {
          var o = (0, u.A)(r[n], 2),
            i = o[0];
          o[1] && t.push(i);
        }
        return t;
      }
      var qa = (function (e) {
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
                ? Yo(
                    t,
                    function (e, t) {
                      return (e[t] = Ia[t]);
                    },
                    {},
                  )
                : "object" === (0, i.A)(t)
                  ? qo(t, function (e, t) {
                      return !0 === e ? Ia[t] : e;
                    })
                  : Ia;
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
                u = (0, o.A)(i, Ua),
                f = e.getView(),
                d = c();
              (s = (function (e, t) {
                var n = t.action,
                  r = t.date,
                  i = t.today,
                  a = (0, o.A)(t, Fa);
                switch (((e = "string" == typeof e ? Ia[e] : e), n)) {
                  case Go:
                    r = i || new Date();
                    break;
                  case Xo:
                    break;
                  default:
                    h()(
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
              Jo(e.props.onSelectEvent, n);
            }),
            (e.handleDoubleClickEvent = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              Jo(e.props.onDoubleClickEvent, n);
            }),
            (e.handleKeyPressEvent = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              Jo(e.props.onKeyPressEvent, n);
            }),
            (e.handleSelectSlot = function (t) {
              Jo(e.props.onSelectSlot, t);
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
                    h = e.showMultiDayTimes,
                    p = e.onShowMore,
                    v = e.doShowMoreDrillDown;
                  e.components, e.formats, e.messages, e.culture;
                  var m = (0, o.A)(e, Ya);
                  l = l || u();
                  var g = this.getView(),
                    y = this.state.context,
                    b = y.accessors,
                    w = y.components,
                    E = y.getters,
                    A = y.localizer,
                    D = y.viewNames,
                    k = w.toolbar || Wa,
                    _ = g.title(l, { localizer: A, length: d });
                  return f.createElement(
                    "div",
                    Object.assign({}, c, {
                      className: S(s, "rbc-calendar", m.rtl && "rbc-rtl"),
                      style: a,
                    }),
                    n &&
                      f.createElement(k, {
                        date: l,
                        view: t,
                        views: D,
                        label: _,
                        onView: this.handleViewChange,
                        onNavigate: this.handleNavigate,
                        localizer: A,
                      }),
                    f.createElement(
                      g,
                      Object.assign({}, m, {
                        events: r,
                        backgroundEvents: i,
                        date: l,
                        getNow: u,
                        length: d,
                        localizer: A,
                        getters: E,
                        components: w,
                        accessors: b,
                        showMultiDayTimes: h,
                        getDrilldownView: this.getDrilldownView,
                        onNavigate: this.handleNavigate,
                        onDrillDown: this.handleDrillDown,
                        onSelectEvent: this.handleSelectEvent,
                        onDoubleClickEvent: this.handleDoubleClickEvent,
                        onKeyPressEvent: this.handleKeyPressEvent,
                        onSelectSlot: this.handleSelectSlot,
                        onShowMore: p,
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
                    h = e.slotGroupPropGetter,
                    p = e.dayPropGetter,
                    v = e.view,
                    m = e.views,
                    g = e.localizer,
                    y = e.culture,
                    b = e.messages,
                    w = void 0 === b ? {} : b,
                    E = e.components,
                    A = void 0 === E ? {} : E,
                    D = e.formats,
                    S = void 0 === D ? {} : D,
                    k = Ba(m);
                  return {
                    viewNames: k,
                    localizer: Ai(
                      g,
                      y,
                      S,
                      (function (e) {
                        return (0, r.A)((0, r.A)({}, Di), e);
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
                        return (h && h.apply(void 0, arguments)) || {};
                      },
                      dayProp: function () {
                        return (p && p.apply(void 0, arguments)) || {};
                      },
                    },
                    components: Io(A[v] || {}, No(A, k), {
                      eventWrapper: Ko,
                      backgroundEventWrapper: Ko,
                      eventContainerWrapper: Ko,
                      dateCellWrapper: Ko,
                      weekWrapper: Ko,
                      timeSlotWrapper: Ko,
                      timeGutterWrapper: Ko,
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
      qa.defaultProps = {
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
      var Ka = (function e(t, n, r) {
          void 0 === r && (r = []);
          var o,
            i = t.displayName || t.name || "Component",
            a =
              !!(o = t) &&
              ("function" != typeof o ||
                (o.prototype && o.prototype.isReactComponent)),
            s = Object.keys(n),
            c = s.map(m);
          !a && r.length && h()(!1);
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
                ((t.componentWillMount = w), (t.componentWillReceiveProps = E)),
              "function" == typeof t.getSnapshotBeforeUpdate)
            ) {
              if ("function" != typeof t.componentDidUpdate)
                throw new Error(
                  "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype",
                );
              t.componentWillUpdate = A;
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
                    n[m(e)] = p;
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
        })(qa, {
          view: "onView",
          date: "onNavigate",
          selected: "onSelectEvent",
        }),
        Va = function (e, t, n) {
          var r = e.start,
            o = e.end;
          return n.format(r, "LT", t) + " – " + n.format(o, "LT", t);
        },
        $a = {
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
        return new Ei({
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
              h = c(n, s(o, "day"), "day"),
              p = c(l, s(u, "day"), "day");
            return (
              d ||
              Math.max(p, 1) - Math.max(h, 1) ||
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
              h = !c.isSame(l, "minutes")
                ? l.isAfter(u, "minutes")
                : l.isSameOrAfter(u, "minutes");
            return d && h;
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
    66251: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => c });
      var r = n(1839),
        o = n(76549),
        i = n(36058),
        a = n(55241),
        s = n(5608),
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
    67501: (e) => {
      "use strict";
      var t = function () {};
      e.exports = t;
    },
  },
]);
