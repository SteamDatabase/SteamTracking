/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6762],
  {
    30565: (e) => {
      e.exports = {
        EventList: "_3iKeBOMuwqPC87BLxvCKll",
        EventRow: "_3HCTdN7N0hxyB7WCoQkX-l",
        EventMainDetails: "_12wSR9wtG84Yh4obIARUAy",
        Title: "_1bLTz07sQnRA0DjTpjXCza",
        StartDate: "_6accgtG1qR7tHFL1wnO58",
        TitleLine: "_3VdcJeFNzpiS6C6nzlzZfv",
        ActionLine: "_2T7-EVSiD7wt3kh-UtbFwJ",
        SearchLine: "_3WR8L9DXe8JRgcUuBlzxCV",
        SearchSummary: "_2ZYKXsT05br_fBl6Al_Ok2",
        SearchMatch: "_3NPtUvJyTjDkKKBkXpmMMh",
        CapacityBarMax: "_1LKv33ip1CbofO_817Nx6_",
        CapacityBarCurrent: "_3lS1D6vNLfl6RVGdhdgWTY",
        Full: "ndEhtgivpXhCilYDnAAVe",
        MonthTitle: "_2OGsXaLxpf_2IFP6hi2egn",
        MonthEvents: "_3dLuE6Vg6u_xDsbtxjzVLZ",
      };
    },
    34283: (e) => {
      e.exports = {
        ImportButtonLabel: "_1QCMW1MwEkiLeTlmhMvSs_",
        AccountSummary: "_3ASk__24cRSvf749cMDwat",
        AccountAvatar: "_2xoRnY-a7zMtF4eXy564LW",
        AccountPersonaName: "_13y5R1N5OAhnGi8UjBv9ZK",
        PartnerList: "_EdCW3WiSPTQsVts-RIeJ",
        PartnerListHeader: "_4TErK934px6TrK1V9JGoD",
        PartnerListRow: "CZqR_ufpzWTsB5Z6N9Zut",
        PartnerListRowSelected: "_2d0ftwVO6CThilpy0rp1mx",
      };
    },
    85761: (e) => {
      e.exports = {
        Ctn: "_8n9wPNrWDu91tlwBW9bHt",
        Indicator: "_355XkH0xfIpJF1YsMX7I7k",
        EmailInfoRow: "_3bta6oovSNKe3Nv2b67SmP",
        EmailField: "_1E-g4exFlAQhvXDqspYTR0",
        RadioButtons: "_1ZG5Z9nFYtYu3B7aksbG67",
        RadioButtonCtn: "_3AoiDJJ1RWLAWBwcOjgm3f",
      };
    },
    13038: (e) => {
      e.exports = {
        Ctn: "_1olTwzPkPjzL36u0WgyDG0",
        Indicator: "_3d0cYrmQzzda_P3DQ994kX",
      };
    },
    30603: (e) => {
      e.exports = {
        ExportToCSV: "_2QfZu5-7jOdld1h2nYbca8",
        Table: "_2JSoC65mCQdxh-B_srjUjf",
      };
    },
    31718: (e) => {
      e.exports = {
        FancyTableRow: "_36QJs1BZ3so19Xl2es3ihH",
        ExpandableRow: "g86xV6xEGOZ54uRvK3oQ4",
        FancyTableHeader: "_2mHaS291U0AFO1q99AVdLy",
        StickyHeader: "_4y4yrbyr89wNqTGLp049k",
        FancyTableCell: "_3m5AH2HSnsvjImS7uUpvxv",
        SortButton: "_2xr81ssapVQO5aalcANmCk",
        ColumnHeader: "_2XdcqH-eLWVp_qatDebc6J",
        ResizeHandle: "USh_UNRX22s8Wml0mCY3M",
        PrevResizeHandle: "_3wzyEuMO8BdQHAkXnneNRR",
        SortIndicator: "_6z0ftV9RCqbZFmC4EOzYZ",
        GroupExpandIndicator: "_3I86V1lT4xbDJ6FDjMIaMq",
        RowGroup: "_uckWydn-lyPGWjFKZ4Tm",
      };
    },
    40323: function (e, t) {
      var n, s, r;
      /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/ (s = []),
        (n = function e() {
          var t,
            n =
              "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                  ? window
                  : void 0 !== n
                    ? n
                    : {},
            s = !n.document && !!n.postMessage,
            r = n.IS_PAPA_WORKER || !1,
            i = {},
            a = 0,
            o = {};
          function l(e) {
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
                var t = _(e);
                (t.chunkSize = parseInt(t.chunkSize)),
                  e.step || e.chunk || (t.chunkSize = null),
                  (this._handle = new m(t)),
                  ((this._handle.streamer = this)._config = t);
              }.call(this, e),
              (this.parseChunk = function (e, t) {
                var s = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < s) {
                  let t = this._config.newline;
                  t ||
                    ((i = this._config.quoteChar || '"'),
                    (t = this._handle.guessLineEndings(e, i))),
                    (e = [...e.split(t).slice(s)].join(t));
                }
                this.isFirstChunk &&
                  S(this._config.beforeFirstChunk) &&
                  void 0 !== (i = this._config.beforeFirstChunk(e)) &&
                  (e = i),
                  (this.isFirstChunk = !1),
                  (this._halted = !1),
                  (s = this._partialLine + e);
                var i =
                  ((this._partialLine = ""),
                  this._handle.parse(s, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((e = i.meta.cursor),
                    this._finished ||
                      ((this._partialLine = s.substring(e - this._baseIndex)),
                      (this._baseIndex = e)),
                    i && i.data && (this._rowCount += i.data.length),
                    (s =
                      this._finished ||
                      (this._config.preview &&
                        this._rowCount >= this._config.preview)),
                    r)
                  )
                    n.postMessage({
                      results: i,
                      workerId: o.WORKER_ID,
                      finished: s,
                    });
                  else if (S(this._config.chunk) && !t) {
                    if (
                      (this._config.chunk(i, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = i = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(i.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(i.errors)),
                      (this._completeResults.meta = i.meta)),
                    this._completed ||
                      !s ||
                      !S(this._config.complete) ||
                      (i && i.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    s || (i && i.meta.paused) || this._nextChunk(),
                    i
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                S(this._config.error)
                  ? this._config.error(e)
                  : r &&
                    this._config.error &&
                    n.postMessage({
                      workerId: o.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function c(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = o.RemoteChunkSize),
              l.call(this, e),
              (this._nextChunk = s
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
                    s ||
                      ((t.onload = j(this._chunkLoaded, this)),
                      (t.onerror = j(this._chunkError, this))),
                    t.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !s,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var e,
                      n = this._config.downloadRequestHeaders;
                    for (e in n) t.setRequestHeader(e, n[e]);
                  }
                  var r;
                  this._config.chunkSize &&
                    ((r = this._start + this._config.chunkSize - 1),
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + r,
                    ));
                  try {
                    t.send(this._config.downloadRequestBody);
                  } catch (e) {
                    this._chunkError(e.message);
                  }
                  s && 0 === t.status && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                4 === t.readyState &&
                  (t.status < 200 || 400 <= t.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || t.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((e) =>
                            null !== (e = e.getResponseHeader("Content-Range"))
                              ? parseInt(e.substring(e.lastIndexOf("/") + 1))
                              : -1)(t)),
                      this.parseChunk(t.responseText)));
              }),
              (this._chunkError = function (e) {
                (e = t.statusText || e), this._sendError(new Error(e));
              });
          }
          function d(e) {
            (e = e || {}).chunkSize || (e.chunkSize = o.LocalChunkSize),
              l.call(this, e);
            var t,
              n,
              s = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (n = e.slice || e.webkitSlice || e.mozSlice),
                s
                  ? (((t = new FileReader()).onload = j(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = j(this._chunkError, this)))
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
                var e = this._input,
                  r =
                    (this._config.chunkSize &&
                      ((r = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (e = n.call(e, this._start, r))),
                    t.readAsText(e, this._config.encoding));
                s || this._chunkLoaded({ target: { result: r } });
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
          function u(e) {
            var t;
            l.call(this, (e = e || {})),
              (this.stream = function (e) {
                return (t = e), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var e, n;
                if (!this._finished)
                  return (
                    (e = this._config.chunkSize),
                    (t = e
                      ? ((n = t.substring(0, e)), t.substring(e))
                      : ((n = t), "")),
                    (this._finished = !t),
                    this.parseChunk(n)
                  );
              });
          }
          function h(e) {
            l.call(this, (e = e || {}));
            var t = [],
              n = !0,
              s = !1;
            (this.pause = function () {
              l.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                l.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (e) {
                (this._input = e),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                s && 1 === t.length && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (n = !0);
              }),
              (this._streamData = j(function (e) {
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
              (this._streamError = j(function (e) {
                this._streamCleanUp(), this._sendError(e);
              }, this)),
              (this._streamEnd = j(function () {
                this._streamCleanUp(), (s = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = j(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function m(e) {
            var t,
              n,
              s,
              r,
              i = Math.pow(2, 53),
              a = -i,
              l = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              c =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              d = this,
              u = 0,
              h = 0,
              m = !1,
              f = !1,
              x = [],
              v = { data: [], errors: [], meta: {} };
            function j(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function w() {
              if (
                (v &&
                  s &&
                  (b(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      o.DefaultDelimiter +
                      "'",
                  ),
                  (s = !1)),
                e.skipEmptyLines &&
                  (v.data = v.data.filter(function (e) {
                    return !j(e);
                  })),
                y())
              ) {
                if (v)
                  if (Array.isArray(v.data[0])) {
                    for (var t = 0; y() && t < v.data.length; t++)
                      v.data[t].forEach(n);
                    v.data.splice(0, 1);
                  } else v.data.forEach(n);
                function n(t, n) {
                  S(e.transformHeader) && (t = e.transformHeader(t, n)),
                    x.push(t);
                }
              }
              function r(t, n) {
                for (var s = e.header ? {} : [], r = 0; r < t.length; r++) {
                  var o = r,
                    d = t[r];
                  (d = ((t, n) =>
                    ((t) => (
                      e.dynamicTypingFunction &&
                        void 0 === e.dynamicTyping[t] &&
                        (e.dynamicTyping[t] = e.dynamicTypingFunction(t)),
                      !0 === (e.dynamicTyping[t] || e.dynamicTyping)
                    ))(t)
                      ? "true" === n ||
                        "TRUE" === n ||
                        ("false" !== n &&
                          "FALSE" !== n &&
                          (((e) => {
                            if (
                              l.test(e) &&
                              ((e = parseFloat(e)), a < e && e < i)
                            )
                              return 1;
                          })(n)
                            ? parseFloat(n)
                            : c.test(n)
                              ? new Date(n)
                              : "" === n
                                ? null
                                : n))
                      : n)(
                    (o = e.header
                      ? r >= x.length
                        ? "__parsed_extra"
                        : x[r]
                      : o),
                    (d = e.transform ? e.transform(d, o) : d),
                  )),
                    "__parsed_extra" === o
                      ? ((s[o] = s[o] || []), s[o].push(d))
                      : (s[o] = d);
                }
                return (
                  e.header &&
                    (r > x.length
                      ? b(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            x.length +
                            " fields but parsed " +
                            r,
                          h + n,
                        )
                      : r < x.length &&
                        b(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            x.length +
                            " fields but parsed " +
                            r,
                          h + n,
                        )),
                  s
                );
              }
              var d;
              v &&
                (e.header || e.dynamicTyping || e.transform) &&
                ((d = 1),
                !v.data.length || Array.isArray(v.data[0])
                  ? ((v.data = v.data.map(r)), (d = v.data.length))
                  : (v.data = r(v.data, 0)),
                e.header && v.meta && (v.meta.fields = x),
                (h += d));
            }
            function y() {
              return e.header && 0 === x.length;
            }
            function b(e, t, n, s) {
              (e = { type: e, code: t, message: n }),
                void 0 !== s && (e.row = s),
                v.errors.push(e);
            }
            S(e.step) &&
              ((r = e.step),
              (e.step = function (t) {
                (v = t),
                  y()
                    ? w()
                    : (w(),
                      0 !== v.data.length &&
                        ((u += t.data.length),
                        e.preview && u > e.preview
                          ? n.abort()
                          : ((v.data = v.data[0]), r(v, d))));
              })),
              (this.parse = function (r, i, a) {
                var l = e.quoteChar || '"';
                return (
                  e.newline || (e.newline = this.guessLineEndings(r, l)),
                  (s = !1),
                  e.delimiter
                    ? S(e.delimiter) &&
                      ((e.delimiter = e.delimiter(r)),
                      (v.meta.delimiter = e.delimiter))
                    : ((l = ((t, n, s, r, i) => {
                        var a, l, c, d;
                        i = i || [
                          ",",
                          "\t",
                          "|",
                          ";",
                          o.RECORD_SEP,
                          o.UNIT_SEP,
                        ];
                        for (var u = 0; u < i.length; u++) {
                          for (
                            var h,
                              m = i[u],
                              g = 0,
                              f = 0,
                              x = 0,
                              v =
                                ((c = void 0),
                                new p({
                                  comments: r,
                                  delimiter: m,
                                  newline: n,
                                  preview: 10,
                                }).parse(t)),
                              _ = 0;
                            _ < v.data.length;
                            _++
                          )
                            s && j(v.data[_])
                              ? x++
                              : ((f += h = v.data[_].length),
                                void 0 === c
                                  ? (c = h)
                                  : 0 < h && ((g += Math.abs(h - c)), (c = h)));
                          0 < v.data.length && (f /= v.data.length - x),
                            (void 0 === l || g <= l) &&
                              (void 0 === d || d < f) &&
                              1.99 < f &&
                              ((l = g), (a = m), (d = f));
                        }
                        return {
                          successful: !!(e.delimiter = a),
                          bestDelimiter: a,
                        };
                      })(
                        r,
                        e.newline,
                        e.skipEmptyLines,
                        e.comments,
                        e.delimitersToGuess,
                      )).successful
                        ? (e.delimiter = l.bestDelimiter)
                        : ((s = !0), (e.delimiter = o.DefaultDelimiter)),
                      (v.meta.delimiter = e.delimiter)),
                  (l = _(e)),
                  e.preview && e.header && l.preview++,
                  (t = r),
                  (n = new p(l)),
                  (v = n.parse(t, i, a)),
                  w(),
                  m ? { meta: { paused: !0 } } : v || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return m;
              }),
              (this.pause = function () {
                (m = !0),
                  n.abort(),
                  (t = S(e.chunk) ? "" : t.substring(n.getCharIndex()));
              }),
              (this.resume = function () {
                d.streamer._halted
                  ? ((m = !1), d.streamer.parseChunk(t, !0))
                  : setTimeout(d.resume, 3);
              }),
              (this.aborted = function () {
                return f;
              }),
              (this.abort = function () {
                (f = !0),
                  n.abort(),
                  (v.meta.aborted = !0),
                  S(e.complete) && e.complete(v),
                  (t = "");
              }),
              (this.guessLineEndings = function (e, t) {
                (e = e.substring(0, 1048576)),
                  (t = new RegExp(g(t) + "([^]*?)" + g(t), "gm"));
                var n = (e = e.replace(t, "")).split("\r");
                if (
                  ((e =
                    1 < (t = e.split("\n")).length &&
                    t[0].length < n[0].length),
                  1 === n.length || e)
                )
                  return "\n";
                for (var s = 0, r = 0; r < n.length; r++)
                  "\n" === n[r][0] && s++;
                return s >= n.length / 2 ? "\r\n" : "\r";
              });
          }
          function g(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function p(e) {
            var t = (e = e || {}).delimiter,
              n = e.newline,
              s = e.comments,
              r = e.step,
              i = e.preview,
              a = e.fastMode,
              l = null,
              c = !1,
              d = null == e.quoteChar ? '"' : e.quoteChar,
              u = d;
            if (
              (void 0 !== e.escapeChar && (u = e.escapeChar),
              ("string" != typeof t || -1 < o.BAD_DELIMITERS.indexOf(t)) &&
                (t = ","),
              s === t)
            )
              throw new Error("Comment character same as delimiter");
            !0 === s
              ? (s = "#")
              : ("string" != typeof s || -1 < o.BAD_DELIMITERS.indexOf(s)) &&
                (s = !1),
              "\n" !== n && "\r" !== n && "\r\n" !== n && (n = "\n");
            var h = 0,
              m = !1;
            (this.parse = function (o, p, f) {
              if ("string" != typeof o)
                throw new Error("Input must be a string");
              var x = o.length,
                v = t.length,
                _ = n.length,
                j = s.length,
                w = S(r),
                y = [],
                b = [],
                E = [],
                C = (h = 0);
              if (!o) return F();
              if (a || (!1 !== a && -1 === o.indexOf(d))) {
                for (var I = o.split(n), D = 0; D < I.length; D++) {
                  if (((E = I[D]), (h += E.length), D !== I.length - 1))
                    h += n.length;
                  else if (f) return F();
                  if (!s || E.substring(0, j) !== s) {
                    if (w) {
                      if (((y = []), N(E.split(t)), z(), m)) return F();
                    } else N(E.split(t));
                    if (i && i <= D) return (y = y.slice(0, i)), F(!0);
                  }
                }
                return F();
              }
              for (
                var R = o.indexOf(t, h),
                  A = o.indexOf(n, h),
                  T = new RegExp(g(u) + g(d), "g"),
                  k = o.indexOf(d, h);
                ;
              )
                if (o[h] === d)
                  for (k = h, h++; ; ) {
                    if (-1 === (k = o.indexOf(d, k + 1)))
                      return (
                        f ||
                          b.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: y.length,
                            index: h,
                          }),
                        P()
                      );
                    if (k === x - 1) return P(o.substring(h, k).replace(T, d));
                    if (d === u && o[k + 1] === u) k++;
                    else if (d === u || 0 === k || o[k - 1] !== u) {
                      -1 !== R && R < k + 1 && (R = o.indexOf(t, k + 1));
                      var M = B(
                        -1 ===
                          (A = -1 !== A && A < k + 1 ? o.indexOf(n, k + 1) : A)
                          ? R
                          : Math.min(R, A),
                      );
                      if (o.substr(k + 1 + M, v) === t) {
                        E.push(o.substring(h, k).replace(T, d)),
                          o[(h = k + 1 + M + v)] !== d && (k = o.indexOf(d, h)),
                          (R = o.indexOf(t, h)),
                          (A = o.indexOf(n, h));
                        break;
                      }
                      if (
                        ((M = B(A)),
                        o.substring(k + 1 + M, k + 1 + M + _) === n)
                      ) {
                        if (
                          (E.push(o.substring(h, k).replace(T, d)),
                          L(k + 1 + M + _),
                          (R = o.indexOf(t, h)),
                          (k = o.indexOf(d, h)),
                          w && (z(), m))
                        )
                          return F();
                        if (i && y.length >= i) return F(!0);
                        break;
                      }
                      b.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: y.length,
                        index: h,
                      }),
                        k++;
                    }
                  }
                else if (s && 0 === E.length && o.substring(h, h + j) === s) {
                  if (-1 === A) return F();
                  (h = A + _), (A = o.indexOf(n, h)), (R = o.indexOf(t, h));
                } else if (-1 !== R && (R < A || -1 === A))
                  E.push(o.substring(h, R)), (h = R + v), (R = o.indexOf(t, h));
                else {
                  if (-1 === A) break;
                  if ((E.push(o.substring(h, A)), L(A + _), w && (z(), m)))
                    return F();
                  if (i && y.length >= i) return F(!0);
                }
              return P();
              function N(e) {
                y.push(e), (C = h);
              }
              function B(e) {
                var t = 0;
                return -1 !== e &&
                  (e = o.substring(k + 1, e)) &&
                  "" === e.trim()
                  ? e.length
                  : t;
              }
              function P(e) {
                return (
                  f ||
                    (void 0 === e && (e = o.substring(h)),
                    E.push(e),
                    (h = x),
                    N(E),
                    w && z()),
                  F()
                );
              }
              function L(e) {
                (h = e), N(E), (E = []), (A = o.indexOf(n, h));
              }
              function F(s) {
                if (e.header && !p && y.length && !c) {
                  var r = y[0],
                    i = Object.create(null),
                    a = new Set(r);
                  let t = !1;
                  for (let n = 0; n < r.length; n++) {
                    let s = r[n];
                    if (
                      i[
                        (s = S(e.transformHeader) ? e.transformHeader(s, n) : s)
                      ]
                    ) {
                      let e,
                        o = i[s];
                      for (; (e = s + "_" + o), o++, a.has(e); );
                      a.add(e),
                        (r[n] = e),
                        i[s]++,
                        (t = !0),
                        ((l = null === l ? {} : l)[e] = s);
                    } else (i[s] = 1), (r[n] = s);
                    a.add(s);
                  }
                  t && console.warn("Duplicate headers found and renamed."),
                    (c = !0);
                }
                return {
                  data: y,
                  errors: b,
                  meta: {
                    delimiter: t,
                    linebreak: n,
                    aborted: m,
                    truncated: !!s,
                    cursor: C + (p || 0),
                    renamedHeaders: l,
                  },
                };
              }
              function z() {
                r(F()), (y = []), (b = []);
              }
            }),
              (this.abort = function () {
                m = !0;
              }),
              (this.getCharIndex = function () {
                return h;
              });
          }
          function f(e) {
            var t = e.data,
              n = i[t.workerId],
              s = !1;
            if (t.error) n.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var r = {
                abort: function () {
                  (s = !0),
                    x(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: v,
                resume: v,
              };
              if (S(n.userStep)) {
                for (
                  var a = 0;
                  a < t.results.data.length &&
                  (n.userStep(
                    {
                      data: t.results.data[a],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    r,
                  ),
                  !s);
                  a++
                );
                delete t.results;
              } else
                S(n.userChunk) &&
                  (n.userChunk(t.results, r, t.file), delete t.results);
            }
            t.finished && !s && x(t.workerId, t.results);
          }
          function x(e, t) {
            var n = i[e];
            S(n.userComplete) && n.userComplete(t), n.terminate(), delete i[e];
          }
          function v() {
            throw new Error("Not implemented.");
          }
          function _(e) {
            if ("object" != typeof e || null === e) return e;
            var t,
              n = Array.isArray(e) ? [] : {};
            for (t in e) n[t] = _(e[t]);
            return n;
          }
          function j(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function S(e) {
            return "function" == typeof e;
          }
          return (
            (o.parse = function (t, s) {
              var r = (s = s || {}).dynamicTyping || !1;
              if (
                (S(r) && ((s.dynamicTypingFunction = r), (r = {})),
                (s.dynamicTyping = r),
                (s.transform = !!S(s.transform) && s.transform),
                !s.worker || !o.WORKERS_SUPPORTED)
              )
                return (
                  (r = null),
                  o.NODE_STREAM_INPUT,
                  "string" == typeof t
                    ? ((t = ((e) =>
                        65279 !== e.charCodeAt(0) ? e : e.slice(1))(t)),
                      (r = new (s.download ? c : u)(s)))
                    : !0 === t.readable && S(t.read) && S(t.on)
                      ? (r = new h(s))
                      : ((n.File && t instanceof File) ||
                          t instanceof Object) &&
                        (r = new d(s)),
                  r.stream(t)
                );
              ((r = (() => {
                var t;
                return (
                  !!o.WORKERS_SUPPORTED &&
                  ((t = (() => {
                    var t = n.URL || n.webkitURL || null,
                      s = e.toString();
                    return (
                      o.BLOB_URL ||
                      (o.BLOB_URL = t.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            s,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((t = new n.Worker(t)).onmessage = f),
                  (t.id = a++),
                  (i[t.id] = t))
                );
              })()).userStep = s.step),
                (r.userChunk = s.chunk),
                (r.userComplete = s.complete),
                (r.userError = s.error),
                (s.step = S(s.step)),
                (s.chunk = S(s.chunk)),
                (s.complete = S(s.complete)),
                (s.error = S(s.error)),
                delete s.worker,
                r.postMessage({ input: t, config: s, workerId: r.id });
            }),
            (o.unparse = function (e, t) {
              var n = !1,
                s = !0,
                r = ",",
                i = "\r\n",
                a = '"',
                l = a + a,
                c = !1,
                d = null,
                u = !1,
                h =
                  ((() => {
                    if ("object" == typeof t) {
                      if (
                        ("string" != typeof t.delimiter ||
                          o.BAD_DELIMITERS.filter(function (e) {
                            return -1 !== t.delimiter.indexOf(e);
                          }).length ||
                          (r = t.delimiter),
                        ("boolean" != typeof t.quotes &&
                          "function" != typeof t.quotes &&
                          !Array.isArray(t.quotes)) ||
                          (n = t.quotes),
                        ("boolean" != typeof t.skipEmptyLines &&
                          "string" != typeof t.skipEmptyLines) ||
                          (c = t.skipEmptyLines),
                        "string" == typeof t.newline && (i = t.newline),
                        "string" == typeof t.quoteChar && (a = t.quoteChar),
                        "boolean" == typeof t.header && (s = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (0 === t.columns.length)
                          throw new Error("Option columns is empty");
                        d = t.columns;
                      }
                      void 0 !== t.escapeChar && (l = t.escapeChar + a),
                        t.escapeFormulae instanceof RegExp
                          ? (u = t.escapeFormulae)
                          : "boolean" == typeof t.escapeFormulae &&
                            t.escapeFormulae &&
                            (u = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(g(a), "g"));
              if (
                ("string" == typeof e && (e = JSON.parse(e)), Array.isArray(e))
              ) {
                if (!e.length || Array.isArray(e[0])) return m(null, e, c);
                if ("object" == typeof e[0])
                  return m(d || Object.keys(e[0]), e, c);
              } else if ("object" == typeof e)
                return (
                  "string" == typeof e.data && (e.data = JSON.parse(e.data)),
                  Array.isArray(e.data) &&
                    (e.fields || (e.fields = (e.meta && e.meta.fields) || d),
                    e.fields ||
                      (e.fields = Array.isArray(e.data[0])
                        ? e.fields
                        : "object" == typeof e.data[0]
                          ? Object.keys(e.data[0])
                          : []),
                    Array.isArray(e.data[0]) ||
                      "object" == typeof e.data[0] ||
                      (e.data = [e.data])),
                  m(e.fields || [], e.data || [], c)
                );
              throw new Error("Unable to serialize unrecognized input");
              function m(e, t, n) {
                var a = "",
                  o =
                    ("string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t)),
                    Array.isArray(e) && 0 < e.length),
                  l = !Array.isArray(t[0]);
                if (o && s) {
                  for (var c = 0; c < e.length; c++)
                    0 < c && (a += r), (a += p(e[c], c));
                  0 < t.length && (a += i);
                }
                for (var d = 0; d < t.length; d++) {
                  var u = (o ? e : t[d]).length,
                    h = !1,
                    m = o ? 0 === Object.keys(t[d]).length : 0 === t[d].length;
                  if (
                    (n &&
                      !o &&
                      (h =
                        "greedy" === n
                          ? "" === t[d].join("").trim()
                          : 1 === t[d].length && 0 === t[d][0].length),
                    "greedy" === n && o)
                  ) {
                    for (var g = [], f = 0; f < u; f++) {
                      var x = l ? e[f] : f;
                      g.push(t[d][x]);
                    }
                    h = "" === g.join("").trim();
                  }
                  if (!h) {
                    for (var v = 0; v < u; v++) {
                      0 < v && !m && (a += r);
                      var _ = o && l ? e[v] : v;
                      a += p(t[d][_], v);
                    }
                    d < t.length - 1 && (!n || (0 < u && !m)) && (a += i);
                  }
                }
                return a;
              }
              function p(e, t) {
                var s, i;
                return null == e
                  ? ""
                  : e.constructor === Date
                    ? JSON.stringify(e).slice(1, 25)
                    : ((i = !1),
                      u &&
                        "string" == typeof e &&
                        u.test(e) &&
                        ((e = "'" + e), (i = !0)),
                      (s = e.toString().replace(h, l)),
                      (i =
                        i ||
                        !0 === n ||
                        ("function" == typeof n && n(e, t)) ||
                        (Array.isArray(n) && n[t]) ||
                        ((e, t) => {
                          for (var n = 0; n < t.length; n++)
                            if (-1 < e.indexOf(t[n])) return !0;
                          return !1;
                        })(s, o.BAD_DELIMITERS) ||
                        -1 < s.indexOf(r) ||
                        " " === s.charAt(0) ||
                        " " === s.charAt(s.length - 1))
                        ? a + s + a
                        : s);
              }
            }),
            (o.RECORD_SEP = String.fromCharCode(30)),
            (o.UNIT_SEP = String.fromCharCode(31)),
            (o.BYTE_ORDER_MARK = "\ufeff"),
            (o.BAD_DELIMITERS = ["\r", "\n", '"', o.BYTE_ORDER_MARK]),
            (o.WORKERS_SUPPORTED = !s && !!n.Worker),
            (o.NODE_STREAM_INPUT = 1),
            (o.LocalChunkSize = 10485760),
            (o.RemoteChunkSize = 5242880),
            (o.DefaultDelimiter = ","),
            (o.Parser = p),
            (o.ParserHandle = m),
            (o.NetworkStreamer = c),
            (o.FileStreamer = d),
            (o.StringStreamer = u),
            (o.ReadableStreamStreamer = h),
            n.jQuery &&
              ((t = n.jQuery).fn.parse = function (e) {
                var s = e.config || {},
                  r = [];
                return (
                  this.each(function (e) {
                    if (
                      "INPUT" !== t(this).prop("tagName").toUpperCase() ||
                      "file" !== t(this).attr("type").toLowerCase() ||
                      !n.FileReader ||
                      !this.files ||
                      0 === this.files.length
                    )
                      return !0;
                    for (var i = 0; i < this.files.length; i++)
                      r.push({
                        file: this.files[i],
                        inputElem: this,
                        instanceConfig: t.extend({}, s),
                      });
                  }),
                  i(),
                  this
                );
                function i() {
                  if (0 === r.length) S(e.complete) && e.complete();
                  else {
                    var n,
                      s,
                      i,
                      l,
                      c = r[0];
                    if (S(e.before)) {
                      var d = e.before(c.file, c.inputElem);
                      if ("object" == typeof d) {
                        if ("abort" === d.action)
                          return (
                            (n = "AbortError"),
                            (s = c.file),
                            (i = c.inputElem),
                            (l = d.reason),
                            void (S(e.error) && e.error({ name: n }, s, i, l))
                          );
                        if ("skip" === d.action) return void a();
                        "object" == typeof d.config &&
                          (c.instanceConfig = t.extend(
                            c.instanceConfig,
                            d.config,
                          ));
                      } else if ("skip" === d) return void a();
                    }
                    var u = c.instanceConfig.complete;
                    (c.instanceConfig.complete = function (e) {
                      S(u) && u(e, c.file, c.inputElem), a();
                    }),
                      o.parse(c.file, c.instanceConfig);
                  }
                }
                function a() {
                  r.splice(0, 1), i();
                }
              }),
            r &&
              (n.onmessage = function (e) {
                (e = e.data),
                  void 0 === o.WORKER_ID && e && (o.WORKER_ID = e.workerId),
                  "string" == typeof e.input
                    ? n.postMessage({
                        workerId: o.WORKER_ID,
                        results: o.parse(e.input, e.config),
                        finished: !0,
                      })
                    : ((n.File && e.input instanceof File) ||
                        e.input instanceof Object) &&
                      (e = o.parse(e.input, e.config)) &&
                      n.postMessage({
                        workerId: o.WORKER_ID,
                        results: e,
                        finished: !0,
                      });
              }),
            ((c.prototype = Object.create(l.prototype)).constructor = c),
            ((d.prototype = Object.create(l.prototype)).constructor = d),
            ((u.prototype = Object.create(u.prototype)).constructor = u),
            ((h.prototype = Object.create(l.prototype)).constructor = h),
            o
          );
        }),
        void 0 === (r = "function" == typeof n ? n.apply(t, s) : n) ||
          (e.exports = r);
    },
    70252: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => In, default: () => Dn });
      var s = n(7850),
        r = n(43527),
        i = n(90626),
        a = n(17083),
        o = n(92757),
        l = n(11577),
        c = n(14932),
        d = n(97058),
        u = n(84811),
        h = n(95695),
        m = n.n(h),
        g = n(38135),
        p = n(45737),
        f = n.n(p),
        x = n(24484),
        v = n(22837),
        _ = n(37085),
        j = n(56545),
        S = n(85737),
        w = n(64753),
        y = n(20194),
        b = n(75233),
        E = n(41735),
        C = n.n(E),
        I = n(17720),
        D = n(78327),
        R = n(32179),
        A = n(21711),
        T = n(44165),
        k = n(95034);
      function M() {
        const [e] = i.useState(() =>
            (0, D.Tc)("events_list", "application_config"),
          ),
          [t] = (0, k.QD)("filter"),
          n = (0, T.f1)(),
          [s, r] = i.useMemo(() => {
            let t = new Array(),
              s = new Array();
            return (
              e.forEach((e) => {
                e.endtime &&
                (function (e, t = !1) {
                  const [n, s = "00:00:00"] = e.trim().split(/\s+/),
                    [r, i, a] = n.split("-").map(Number),
                    [o, l, c] = s.split(":").map(Number),
                    d = t
                      ? Date.UTC(r, i - 1, a, o, l, c ?? 0)
                      : new Date(r, i - 1, a, o, l, c ?? 0).getTime();
                  return Math.floor(d / 1e3);
                })(e.endtime) < n
                  ? s.push(e)
                  : t.push(e);
              }),
              [s, t]
            );
          }, [e, n]);
        return {
          rgOldEvents: s,
          rgEvents: r,
          selectConference: (0, i.useMemo)(
            () => e.find((e) => e.id === t?.toLocaleLowerCase()),
            [e, t],
          ),
        };
      }
      function N(e) {
        return ["usePartnerRevAndBestAppSlow", e];
      }
      async function B(e) {
        const t = `${D.TS.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
          n = { sessionid: (0, D.KC)(), partnerid: e },
          s = await C().get(t, { params: n });
        return s?.data?.data;
      }
      function P(e, t) {
        return e.getQueryData(["usePartnerRevAndBestAppSlow", t]);
      }
      function L(e, t, n) {
        return (0, y.I)({
          queryKey: ["useMeetSteamGetAllRegistration", t, n],
          queryFn: async () => {
            const n = j.w.Init(S.q3);
            n.Body().set_clan_event_gid(t);
            const s = await S.ZK.GetRegistrations(e, n);
            return s.BSuccess()
              ? s
                  .Body()
                  .registrations()
                  .map((e) => e.toObject())
              : [];
          },
          enabled: null != t && 0 != n,
        });
      }
      var F = n(19367),
        z = n.n(F),
        O = n(38390),
        G = n(62216),
        $ = n(96001),
        H = n(16676),
        U = n(31790),
        V = n(26161),
        q = n(78395),
        K = n(21869),
        W = n(22797),
        Y = n(26408),
        J = n(52038),
        Q = n(65),
        Z = n(61859),
        X = n(91675),
        ee = n(30470),
        te = n(30565),
        ne = n.n(te);
      function se(e) {
        const t = re();
        return (0, s.jsx)("div", {
          children: (0, s.jsx)("ol", {
            children: Array.from(t.entries()).map(([e, t]) =>
              (0, s.jsx)(
                "li",
                {
                  children: (0, s.jsx)("a", {
                    href: `${D.TS.PARTNER_BASE_URL}meetsteam/surveyresults/${e}`,
                    target: "_blank",
                    children: t,
                  }),
                },
                e,
              ),
            ),
          }),
        });
      }
      function re() {
        const [e] = (0, i.useState)(() => {
          const e = (0, D.Tc)("survey_list", "application_config") || {},
            t = new Map();
          for (const n of Object.keys(e)) t.set(n, e[n]);
          return t;
        });
        return e;
      }
      function ie(e, t) {
        const n = (function () {
            const [e, t] = (0, i.useState)(location.search);
            return (
              (0, i.useEffect)(() => {
                function e(e) {
                  "urlchange" === e.data && t(location.search);
                }
                return (
                  window.addEventListener("message", e),
                  () => {
                    window.removeEventListener("message", e);
                  }
                );
              }, []),
              e
            );
          })(),
          s = (0, i.useMemo)(() => {
            const s = new URLSearchParams(n.substring(1)).get(e);
            return null != s
              ? null != t
                ? "boolean" == typeof t
                  ? t.constructor("false" !== s)
                  : t.constructor(s)
                : s
              : t;
          }, [e, t, n]),
          [r, a] = (0, i.useState)(s),
          o = i.useCallback(
            (t, s = !1) => {
              const r = new URLSearchParams(n.substring(1));
              if (null != t) {
                if (r.get(e) == t) return;
                r.set(e, String(t));
              } else {
                if (!r.has(e)) return;
                r.delete(e);
              }
              s
                ? history.replaceState(
                    history.state,
                    "",
                    decodeURIComponent(`${window.location.pathname}?${r}`),
                  )
                : history.pushState(
                    history.state,
                    "",
                    decodeURIComponent(`${window.location.pathname}?${r}`),
                  ),
                (0, i.startTransition)(() => {
                  a(t), window.postMessage("urlchange");
                });
            },
            [e, n],
          );
        return [r, o];
      }
      const ae = i.createContext(void 0);
      function oe(e) {
        const { children: t } = e,
          [n, r] = ie("showpastevents", !1);
        return (0, s.jsx)(ae.Provider, {
          value: { bShowArchived: n, setShowArchived: r },
          children: t,
        });
      }
      const le = () => {
        const e = (0, i.useContext)(ae);
        if (!e)
          throw new Error(
            "useMeetSteamArchived must be used within MeetSteamArchivedProvider",
          );
        return e;
      };
      var ce = n(34283),
        de = n.n(ce),
        ue = n(68797),
        he = n(9161),
        me = n(41403),
        ge = n(27144),
        pe = n(81393),
        fe = n(96059);
      class xe {
        m_steamInterface;
        GetSaleFeatureTransport() {
          return this.m_steamInterface;
        }
        static s_Singleton;
        static Get() {
          return (
            xe.s_Singleton ||
              ((xe.s_Singleton = new xe()), xe.s_Singleton.Init()),
            xe.s_Singleton
          );
        }
        Init() {
          const e = (0, x.Tc)("store_feature_token", "application_config");
          (0, pe.wT)(Boolean(e), "require store_feature_token"),
            (this.m_steamInterface = new fe.D(ee.TS.WEBAPI_BASE_URL, e));
        }
      }
      function ve() {
        return xe.Get().GetSaleFeatureTransport().GetServiceTransport();
      }
      var _e = n(6083),
        je = n(66418);
      function Se(e) {
        return (0, y.I)({
          queryKey: ["MeetSteamPartnersForAccount", e],
          queryFn: () =>
            (async function (e) {
              const t = `${je.TS.PARTNER_BASE_URL}meetsteam/admin/ajaxgetpartnersforaccount?accountid=${e}`,
                n = await fetch(t);
              if (!n.ok)
                throw new Error(
                  `Failed to read the partner list for account ${e}`,
                );
              const s = await n.json();
              if (s.success != _.R)
                throw new Error(
                  `Failed to read the partner list for account ${e}: ${s.msg}`,
                );
              return s.partners ?? [];
            })(e),
          enabled: e > 0,
        });
      }
      function we(e, t = {}) {
        const {
            nTimeoutMS: n = 350,
            nTimeoutExtensionMS: s = 125,
            nMaxTimeoutExtensions: r = 3,
          } = t,
          [a, o] = i.useState(e),
          l = i.useRef(void 0);
        return (
          i.useEffect(() => {
            const t = performance.now();
            l.current
              ? t - l.current.tsLastChange < r * n &&
                (l.current.tsScheduledTimeout = Math.max(
                  performance.now() + s,
                  l.current.tsScheduledTimeout,
                ))
              : (l.current = {
                  tsLastChange: t,
                  tsScheduledTimeout: performance.now() + n,
                });
            const i = l.current.tsScheduledTimeout - performance.now(),
              a = window.setTimeout(() => {
                (l.current = void 0), o(e);
              }, i);
            return () => window.clearTimeout(a);
          }, [e, n, s, r]),
          a
        );
      }
      function ye(e) {
        const { hideModal: t, gid: n } = e,
          [r, a] = (0, i.useState)(!1),
          [o, l] = (0, i.useState)(null),
          [c, d] = i.useState(""),
          [u, m] = i.useState(""),
          [g, p] = i.useState(""),
          [f, x] = i.useState(!1),
          v = we(c),
          j = (function (e) {
            const t = e.trim();
            if (!/^\d+$/.test(t)) return 0;
            if (Number(t) > 4294967295) {
              const e = new I.b(t);
              return e.BIsValid() && e.BIsIndividualAccount()
                ? e.GetAccountID()
                : 0;
            }
            return Number(t);
          })(v),
          S = Boolean(v.trim()) && !j,
          w = ve(),
          b = Se(j),
          E = b.data,
          C = (0, y.I)({
            queryKey: ["MeetSteamInviteDirectDialog", n, j],
            queryFn: async () => {
              const e = {
                  steamid: I.b.InitFromAccountID(j).ConvertTo64BitString(),
                  gid: n,
                  type: me.Dk.rV,
                },
                t = await me.Nl.GetUserActionData(w, e);
              return t.BSuccess() && t.Body().jsondata()
                ? JSON.parse(t.Body().jsondata())
                : {};
            },
            enabled: Boolean(n) && j > 0,
          });
        i.useEffect(() => {
          if (!C.isLoading && C.isSuccess) {
            const e = 1 == E?.length ? E[0].partnerid.toString() : "";
            m(C.data.partner_id ? C.data.partner_id.toString() : e),
              p(C.data.email_override ?? ""),
              x(C.data.allow_registration_if_full ?? !1);
          }
        }, [C.isLoading, C.isSuccess, C.data, E]);
        return (0, s.jsxs)(q.o0, {
          strTitle: "Invite User",
          bOKDisabled: !j || r || C.isLoading,
          onOK: async () => {
            a(!0);
            const e = Number.parseInt(u) > 0 ? Number.parseInt(u) : 0,
              s = await Re(
                n,
                [
                  {
                    nAccountID: j,
                    nPartnerID: e,
                    strEmailOverride: g,
                    bAllowRegistrationIfFull: f,
                  },
                ],
                !0,
              ),
              r = s && s.success == _.R;
            r || l("We hit error during invite, check console: " + s?.msg),
              a(!1),
              C.refetch(),
              r && t();
          },
          onCancel: t,
          children: [
            Boolean(o) &&
              (0, s.jsx)("div", {
                className: h.ErrorStylesWithIcon,
                children: o,
              }),
            !r &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("div", {
                    children:
                      "Saving sends an invitation email to this account only, and only if it has not been sent one for this event already. It does not send the invitation emails queued for anyone else. Use the Invitation And Registration Status dialog for those.",
                  }),
                  (0, s.jsx)(H.pd, {
                    type: "text",
                    label: "Account ID or Steam ID",
                    description:
                      "Accepts either the 32-bit account id or the 64-bit steam id",
                    onChange: (e) => d(e.currentTarget.value),
                    value: c,
                  }),
                  S &&
                    (0, s.jsx)("div", {
                      className: h.ErrorStylesWithIcon,
                      children: "That is not a valid account id or steam id.",
                    }),
                  0 != j && (0, s.jsx)(be, { nAccountID: j }),
                  0 != j &&
                    !C.isLoading &&
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(H.pd, {
                          type: "number",
                          label: "Partner ID (optional)",
                          onChange: (e) => m(e.currentTarget.value),
                          value: u,
                        }),
                        (0, s.jsx)(Ee, {
                          rgPartners: E,
                          bLoading: b.isLoading,
                          bFailed: b.isError,
                          strPartnerID: u,
                          SetPartnerID: m,
                        }),
                        (0, s.jsx)(H.pd, {
                          type: "text",
                          label: "Email override (optional)",
                          onChange: (e) => p(e.currentTarget.value.trim()),
                          value: g,
                        }),
                        (0, s.jsx)(H.Yh, {
                          controlled: !0,
                          checked: f,
                          onChange: x,
                          label: "Allow if registration is full",
                        }),
                      ],
                    }),
                ],
              }),
            r &&
              (0, s.jsx)(W.t, {
                size: "small",
                position: "center",
                string: (0, Z.we)("#Saving"),
              }),
            C.isLoading &&
              (0, s.jsx)(W.t, {
                size: "small",
                position: "center",
                string: (0, Z.we)("#Loading"),
              }),
          ],
        });
      }
      function be(e) {
        const { nAccountID: t } = e,
          [n, r] = (0, ge.KT)(t);
        if (r)
          return (0, s.jsx)(W.t, {
            size: "small",
            position: "center",
            string: (0, Z.we)("#Loading"),
          });
        if (!n)
          return (0, s.jsx)("div", {
            className: h.ErrorStylesWithIcon,
            children: `We could not find an account for ${t}.`,
          });
        const i = I.b.InitFromAccountID(t).ConvertTo64BitString();
        return (0, s.jsxs)("div", {
          className: de().AccountSummary,
          children: [
            (0, s.jsx)("img", {
              className: de().AccountAvatar,
              src: n.avatar_url?.replace(/\.jpg$/, "_medium.jpg"),
            }),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("div", {
                  className: de().AccountPersonaName,
                  children: n.persona_name,
                }),
                (0, s.jsx)("a", {
                  href: `${ee.TS.SUPPORT_BASE_URL}account/overview/${i}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: `Account ${t} / SteamID ${i}`,
                }),
              ],
            }),
          ],
        });
      }
      function Ee(e) {
        const {
          rgPartners: t,
          bLoading: n,
          bFailed: r,
          strPartnerID: i,
          SetPartnerID: a,
        } = e;
        return n
          ? (0, s.jsx)(W.t, {
              size: "small",
              position: "center",
              string: "Looking up partner membership",
            })
          : r
            ? (0, s.jsx)("div", {
                className: de().PartnerListHeader,
                children:
                  "We could not look up partner membership, enter the partner id above.",
              })
            : t && 0 != t.length
              ? (0, s.jsxs)("div", {
                  className: de().PartnerList,
                  children: [
                    (0, s.jsx)("div", {
                      className: de().PartnerListHeader,
                      children: "Member of, click to use:",
                    }),
                    t.map((e) =>
                      (0, s.jsxs)(
                        "a",
                        {
                          href: "#",
                          className: (0, J.A)(
                            de().PartnerListRow,
                            e.partnerid.toString() == i
                              ? de().PartnerListRowSelected
                              : "",
                          ),
                          onClick: (t) => {
                            t.preventDefault(), a(e.partnerid.toString());
                          },
                          children: [e.partner_name, " (", e.partnerid, ")"],
                        },
                        e.partnerid,
                      ),
                    ),
                  ],
                })
              : (0, s.jsx)("div", {
                  className: de().PartnerListHeader,
                  children: "This account is not a member of any partner.",
                });
      }
      function Ce(e) {
        const { hideModal: t, gid: n } = e,
          [r, a] = (0, i.useState)(null),
          [o, l] = (0, i.useState)(!1),
          [c, d] = (0, i.useState)(null),
          [u, m] = (0, i.useState)(null),
          [g, p] = (0, i.useState)(null);
        return (0, s.jsxs)(q.o0, {
          strTitle: "Invite Users",
          bOKDisabled: !r || 0 == r.length || null != u,
          strCancelButtonText: null !== u ? "Close" : "Cancel",
          onOK: async () => {
            l(!0);
            const e = await Re(n, r, !1);
            e?.success == _.R
              ? (m(e.rgInvitedAccounts.length), p(e.rgSkippedAccounts.length))
              : d("We hit error during invite, check console: " + e?.msg),
              l(!1);
          },
          onCancel: () => {
            m(null), p(null), l(!1), a(null), t();
          },
          children: [
            Boolean(c) &&
              (0, s.jsx)("div", {
                className: h.ErrorStylesWithIcon,
                children: c,
              }),
            null != u &&
              (0, s.jsxs)("div", {
                children: [
                  "Invited ",
                  (0, _e.D)(u),
                  " accounts, skipped previously invited ",
                  (0, _e.D)(g),
                ],
              }),
            o &&
              (0, s.jsx)(W.t, {
                size: "small",
                position: "center",
                string: (0, Z.we)("#Saving"),
              }),
            (0, s.jsx)("div", {
              children:
                "Saving sends an invitation email to the accounts imported here that have not been sent one for this event already. It does not send the invitation emails queued for anyone else on the event.",
            }),
            null == r
              ? (0, s.jsx)(De, { setInvites: a })
              : (0, s.jsx)(Ie, { rgInvites: r }),
          ],
        });
      }
      function Ie(e) {
        const { rgInvites: t } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              children: ["Total Invites Parsed: ", t.length, " "],
            }),
            (0, s.jsxs)("table", {
              children: [
                (0, s.jsx)("thead", {
                  children: (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsx)("th", { children: "AccountID" }),
                      (0, s.jsx)("th", { children: "PartnerID" }),
                      (0, s.jsx)("th", { children: "Email Override" }),
                    ],
                  }),
                }),
                (0, s.jsx)("tbody", {
                  children: t.map((e, t) =>
                    (0, s.jsxs)(
                      "tr",
                      {
                        children: [
                          (0, s.jsx)("td", { children: e.nAccountID }),
                          (0, s.jsx)("td", { children: e.nPartnerID }),
                          (0, s.jsx)("td", { children: e.strEmailOverride }),
                        ],
                      },
                      "invite" + e.nAccountID + "_" + t,
                    ),
                  ),
                }),
              ],
            }),
          ],
        });
      }
      function De(e) {
        const { setInvites: t } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", {
              children: "Format for CSV File, please use the template below:",
            }),
            (0, s.jsxs)("ul", {
              children: [
                (0, s.jsxs)("li", {
                  children: [
                    (0, s.jsx)("b", { children: "nAccountID" }),
                    " - required, 32-bit integer value, not the 64-bit steam id",
                  ],
                }),
                (0, s.jsxs)("li", {
                  children: [
                    (0, s.jsx)("b", { children: "nPartnerID" }),
                    " - (preferred for biz contact)",
                  ],
                }),
                (0, s.jsxs)("li", {
                  children: [
                    (0, s.jsx)("b", { children: "strOverrideEmail" }),
                    " - (optional, we wil use the email associated with the account and partner or the steamid itself)",
                  ],
                }),
              ],
            }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)("a", {
              href: "#",
              onClick: async (e) => {
                e.preventDefault(), e.stopPropagation();
                const t = [];
                t.push(["nAccountID", "nPartnerID", "strEmailOverride"]),
                  t.push(["388445686", "1", "adils@valvesoftware.com"]);
                he.g.WriteCSVToFile(t, "invite_template.csv");
              },
              children: "Download Template Example",
            }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)("br", {}),
            (0, s.jsx)(H.$n, {
              children: (0, s.jsxs)("label", {
                className: de().ImportButtonLabel,
                htmlFor: "import-discount-input",
                children: [
                  "Choose CSV File",
                  (0, s.jsx)("input", {
                    id: "import-discount-input",
                    type: "file",
                    style: { display: "none" },
                    onChange: async (e) => {
                      if (e.target.files.length >= 1) {
                        const n = e.target.files[0],
                          s = await he.g.ParseCSVFile(n);
                        if (s?.data) {
                          const e = new Array();
                          s.data.forEach((t) => {
                            if (t.nAccountID) {
                              const n = {
                                nAccountID: Number.parseInt(t.nAccountID),
                              };
                              t.nPartnerID &&
                                (n.nPartnerID = Number.parseInt(t.nPartnerID)),
                                t.strEmailOverride &&
                                  (n.strEmailOverride = t.strEmailOverride),
                                e.push(n);
                            }
                          }),
                            t(e);
                        }
                      }
                    },
                  }),
                ],
              }),
            }),
          ],
        });
      }
      async function Re(e, t, n) {
        const s = t.map((e) => e.nAccountID).join(","),
          r = t.map((e) => e.nPartnerID).join(","),
          i = t.map((e) => e.strEmailOverride).join(","),
          a = t.map((e) => (e.bAllowRegistrationIfFull ? "1" : "0")).join(",");
        let o = new FormData();
        o.append("sessionid", (0, D.KC)()),
          o.append("gid", e),
          o.append("accounts", s),
          o.append("partnerids", r),
          o.append("emailoverride", i),
          o.append("allowregistrationiffull", a),
          o.append("forceupdate", n ? "1" : "0");
        const l = `${ee.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
        try {
          const e = await C().post(l, o, { withCredentials: !0 });
          if (e?.data?.success != _.R) {
            let t = (0, ue.H)(e);
            console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
          }
          return e?.data;
        } catch (e) {
          let t = (0, ue.H)(e);
          console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
        }
        return null;
      }
      var Ae = n(16666),
        Te = n(66051),
        ke = n(54806),
        Me = n(58632),
        Ne = n.n(Me);
      function Be(e) {
        const t = ve(),
          n = i.useContext(Le),
          s = (0, y.I)(Fe(n, t, e));
        return s.isLoading ? null : s.data;
      }
      function Pe(e) {
        const t = ve(),
          n = i.useContext(Le);
        return (0, ke.E)({ queries: e.map((e) => Fe(n, t, e)) });
      }
      const Le = i.createContext({
        loadMeetSteamAllRegistration: async (e, t) =>
          await (function (e) {
            ze ||
              (ze = new (Ne())(
                async (t) => {
                  const n = j.w.Init(me.j3);
                  n.Body().set_gids([...t]), n.Body().set_type(me.Dk.rV);
                  const s = await me.Nl.GetMultipleUserActionData(e, n);
                  if (!s.BSuccess())
                    throw `Failed to call GetMultipleUserActionData with details: ${s.GetErrorMessage()}`;
                  const r = new Map();
                  return (
                    s
                      .Body()
                      .entries()
                      .forEach((e) => {
                        try {
                          const t = JSON.parse(e.jsondata());
                          if (!("steamid" in t) || !t.steamid) {
                            t.steamid = e.steamid();
                            const n = new I.b(t.steamid);
                            t.accountid = n.GetAccountID();
                          }
                          const n = e.gid();
                          return (
                            r.has(n) ? r.get(n).push(t) : r.set(n, [t]), [t]
                          );
                        } catch (t) {
                          throw `Failed to parse GetMultipleUserActionData with details: ${e.steamid()}`;
                        }
                      }),
                    t.map((e) => r.get(e) ?? null)
                  );
                },
                { maxBatchSize: 5 },
              ));
            return ze;
          })(e).load(t),
      });
      function Fe(e, t, n) {
        return {
          queryKey: ["MeetSteamAllRegistrationStatus", n],
          queryFn: () => e.loadMeetSteamAllRegistration(t, n),
          enabled: !!n,
        };
      }
      let ze;
      var Oe = n(7860);
      function Ge(e, t) {
        const n = (0, $.a)(),
          s = i.useContext(He),
          r = (0, y.I)(Ue(s, n, e, t));
        return r.isLoading ? null : r.data;
      }
      function $e(e, t) {
        return Oe.L.getQueryData(["PartnerEmailAndName", e, t]);
      }
      const He = i.createContext({
        loadPartnerEmailAndName: async (e, t, n) =>
          await (function (e) {
            Ve ||
              (Ve = new (Ne())(
                async (t) => {
                  const n = j.w.Init(S.g9);
                  n.Body().set_accountids(t.map((e) => e.accountID)),
                    n.Body().set_partnerids(t.map((e) => e.partnerID));
                  const s = await S.ZK.GetBatchPartnerEmailAndName(e, n);
                  if (!s.BSuccess())
                    throw `Failed to call GetBatchPartnerEmailAndName with details: ${s.GetErrorMessage()}`;
                  const r = new Map();
                  return (
                    s
                      .Body()
                      .info()
                      .forEach((e) => {
                        r.set(
                          e.accountid() + "_" + e.partnerid(),
                          e.toObject(),
                        );
                      }),
                    t.map((e) => r.get(e.accountID + "_" + e.partnerID) ?? null)
                  );
                },
                { maxBatchSize: 100 },
              ));
            return Ve;
          })(e).load({ accountID: t, partnerID: n }),
      });
      function Ue(e, t, n, s) {
        return {
          queryKey: ["PartnerEmailAndName", n, s],
          queryFn: () => e.loadPartnerEmailAndName(t, n, s),
          enabled: !!n || !!s,
        };
      }
      let Ve;
      function qe(e) {
        const { rgEventGIDs: t } = e,
          [n, r, a] = (0, w.uD)(),
          [o, l] = (0, i.useState)(null);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("span", { children: " | " }),
            (0, s.jsx)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
              children: "Analyse Top Partner Coverage",
            }),
            (0, s.jsx)(K.E, {
              active: n,
              children: (0, s.jsx)(u.tH, {
                children: (0, s.jsx)(q.o0, {
                  closeModal: a,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                  children: Boolean(null == o)
                    ? (0, s.jsx)(Ze, { rgEventGIDs: t, fnSelectedEvents: l })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(Qe, { rgGidMeetSteamEvents: o }),
                          (0, s.jsx)(H.$n, {
                            onClick: () => l(null),
                            children: "Reset Selection",
                          }),
                        ],
                      }),
                }),
              }),
            }),
          ],
        });
      }
      const Ke = (0, Ae.FB)();
      function We(e) {
        return (
          (e = e?.filter(
            (t, n) =>
              0 == n || !e.slice(0, n).some((e) => e.accountid == t.accountid),
          )),
          e
            ?.map(
              (e) =>
                e.name ||
                $e(e.accountid, e.partner_id)?.realname ||
                e.accountid,
            )
            .join(",") || ""
        );
      }
      function Ye(e) {
        return We(e.cell.getValue());
      }
      function Je(e, t) {
        const n = Pe(t),
          [s, r, a] = (0, i.useMemo)(() => {
            if (n.filter((e) => !e.isLoading).length != n.length)
              return [null, [], []];
            const t = new Map(),
              s = new Set(e),
              r = new Map();
            n.forEach((e) =>
              e.data.forEach((e) => {
                if (
                  s.has(e.partner_id) &&
                  (r.has(e.partner_id)
                    ? r.get(e.partner_id).push(e)
                    : r.set(e.partner_id, [e]),
                  !e.name)
                ) {
                  const n = e.accountid;
                  t.set(`${n}_${e.partner_id}`, {
                    accountID: n,
                    partnerID: e.partner_id,
                  });
                }
              }),
            );
            const i = Array.from(t.values());
            return [r, i.map((e) => e.accountID), i.map((e) => e.partnerID)];
          }, [n, e]),
          o = (function (e, t) {
            const n = (0, $.a)(),
              s = i.useContext(He);
            return (0, ke.E)({ queries: e.map((e, r) => Ue(s, n, e, t[r])) });
          })(r, a);
        return o.filter((e) => !e.isLoading).length == o.length ? s : null;
      }
      function Qe(e) {
        const { rgGidMeetSteamEvents: t } = e,
          n = (function () {
            const [e] = (0, i.useState)(() =>
              (0, x.Tc)("partners_to_verify", "application_config"),
            );
            return e;
          })(),
          r = (0, R.vh)(n),
          a = Je(n, t),
          o = (0, i.useMemo)(() => {
            if (!r || !a) return null;
            const e = [];
            return (
              n.forEach((t) => {
                const n = a.get(t);
                e.push({
                  partner_id: t,
                  partner_name: (0, R.Yd)(t)?.name || "Unknown",
                  invitations:
                    n?.filter(
                      (e) =>
                        e.invited &&
                        !Object.keys(e).some((e) =>
                          e.startsWith("registration_emailed"),
                        ),
                    ) || [],
                  registrations:
                    n?.filter((e) =>
                      Object.keys(e).some((e) =>
                        e.startsWith("registration_emailed"),
                      ),
                    ) || [],
                });
              }),
              e
            );
          }, [r, a, n]),
          l = (0, i.useMemo)(
            () => [
              Ke.accessor("partner_id", { header: "Partner ID", size: 100 }),
              Ke.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
              Ke.accessor("invitations", {
                header: "Invitations",
                cell: Ye,
                size: 300,
              }),
              Ke.accessor("registrations", {
                header: "Registered to Attend",
                cell: Ye,
                size: 300,
              }),
            ],
            [],
          );
        function c() {
          const e = [],
            t = [];
          for (const e of l) t.push(e.header);
          e.push(t);
          for (const t of o) {
            const n = [];
            for (const e of l) {
              const s = t[e.accessorKey];
              n.push(
                "invitations" == e.accessorKey ||
                  "registrations" == e.accessorKey
                  ? We(s)
                  : s.toString(),
              );
            }
            e.push(n);
          }
          he.g.WriteCSVToFile(e, "partneranalysis.csv");
        }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(H.JU, { children: "Partner Analysis" }),
            Boolean(o)
              ? (0, s.jsxs)(u.tH, {
                  children: [
                    (0, s.jsx)(H.$n, {
                      id: "download-csv",
                      onClick: c,
                      style: { width: "120px" },
                      children: "Download CSV",
                    }),
                    (0, s.jsx)(Te.k, {
                      columns: l,
                      data: o,
                      getRowKey: (e) => e,
                      stickyHeader: !0,
                      nItemHeight: 28,
                      overscan: n.length,
                    }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(H.$n, {
                      id: "download-csv",
                      onClick: c,
                      style: { width: "120px" },
                      children: "Download CSV",
                    }),
                  ],
                })
              : (0, s.jsx)(W.t, {
                  string: (0, Z.we)("#Loading"),
                  position: "center",
                }),
          ],
        });
      }
      function Ze(e) {
        const { rgEventGIDs: t, fnSelectedEvents: n } = e,
          [r, a] = (0, i.useState)([]),
          { bShowArchived: o, setShowArchived: l } = le(),
          { bIsLoading: c, events: d } = (0, O.PB)(t),
          u = (0, i.useMemo)(() => {
            const e = Math.floor(new Date().getTime() / 1e3);
            return o && d ? [...d] : d?.filter((t) => t.endTime >= e);
          }, [d, o]);
        return c
          ? (0, s.jsx)(W.t, { string: "Loading..." })
          : (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(H.Yh, {
                  checked: o,
                  onChange: l,
                  label: "Show Past Events",
                }),
                (0, s.jsx)(H.JU, { children: "Choose Events" }),
                u.map((e) =>
                  (0, s.jsx)(
                    Xe,
                    { gidClanEvent: e.GID, rgSelected: r, fnSetSelected: a },
                    e.GID,
                  ),
                ),
                (0, s.jsx)(H.$n, {
                  disabled: 0 == r.length,
                  onClick: () => n(r),
                  children: "Continue",
                }),
              ],
            });
      }
      function Xe(e) {
        const { gidClanEvent: t, rgSelected: n, fnSetSelected: r } = e,
          i = (0, O.RR)(t).GetNameWithFallback(v.Bhc);
        return (0, s.jsx)(H.Yh, {
          label: i,
          checked: n.includes(t),
          onChange: (e) => {
            const s = n.indexOf(t),
              i = Boolean(s >= 0);
            e && !i
              ? r([...n, t])
              : !e && i && r([...n.slice(0, s), ...n.slice(s + 1)]);
          },
        });
      }
      var et = n(39832),
        tt = n(29233),
        nt = n(30603),
        st = n.n(nt);
      function rt(e) {
        const { hideModal: t, gid: n } = e,
          r = Be(n),
          a = (0, b.jE)(),
          [o, l] = (0, i.useMemo)(
            () =>
              r
                ? [
                    r.length,
                    r.filter(
                      (e) =>
                        !e.invitation_emailed &&
                        !e.invite_registration_auto_create,
                    ).length,
                  ]
                : [0, 0],
            [r],
          );
        return (0, s.jsxs)(q.o0, {
          bAlertDialog: !0,
          bAllowFullSize: !0,
          bDisableBackgroundDismiss: !0,
          closeModal: t,
          strDescription:
            "Every account with an invitation or a registration on this event, and where each one is. Rows with no invite are people who registered themselves from the registration link; they are never sent an invitation email.",
          strTitle: "Invitation And Registration Status",
          children: [
            !r &&
              (0, s.jsx)(W.t, {
                size: "medium",
                position: "center",
                string: (0, Z.we)("#Loading"),
              }),
            r &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      "There are ",
                      o,
                      " invitation/registration records.",
                    ],
                  }),
                  l > 0 &&
                    (0, s.jsxs)(H.$n, {
                      onClick: async () => {
                        await (async function (e, t) {
                          let n = new FormData();
                          n.append("sessionid", (0, D.KC)()),
                            n.append("gid", t);
                          const s = `${ee.TS.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
                          try {
                            const r = await C().post(s, n, {
                              withCredentials: !0,
                            });
                            if (r?.data?.success != _.R) {
                              let e = (0, ue.H)(r);
                              console.error(
                                "AsyncSendInviteEmails error: " + e.strErrorMsg,
                                e,
                              );
                            }
                            return (
                              e.invalidateQueries({
                                queryKey: [
                                  "useMeetSteamAllRegistrationStatus",
                                  t,
                                ],
                              }),
                              r?.data
                            );
                          } catch (e) {
                            let t = (0, ue.H)(e);
                            console.error(
                              "AsyncSendInviteEmails error: " + t.strErrorMsg,
                              t,
                            );
                          }
                          return null;
                        })(a, n);
                      },
                      children: [
                        l,
                        " invitation emails are queued for this event. Send them all now?",
                      ],
                    }),
                  (0, s.jsxs)("table", {
                    children: [
                      (0, s.jsx)("thead", {
                        children: (0, s.jsxs)("tr", {
                          children: [
                            (0, s.jsx)("th", { children: "SteamID" }),
                            (0, s.jsx)("th", { children: "Name" }),
                            (0, s.jsx)("th", { children: "invited" }),
                            (0, s.jsx)("th", { children: "Invite Emailed" }),
                            (0, s.jsx)("th", { children: "Partner" }),
                            (0, s.jsx)("th", { children: "Email Override" }),
                          ],
                        }),
                      }),
                      (0, s.jsx)("tbody", {
                        children: r?.map((e) =>
                          (0, s.jsx)(it, { reg: e }, "regentry_" + e.steamid),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      function it(e) {
        const { reg: t } = e,
          [n] = (0, R.UA)(t.partner_id);
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", { children: t.steamid }),
            (0, s.jsx)("td", { children: t.name }),
            (0, s.jsx)("td", { children: Boolean(t.invited) ? "YES" : "" }),
            (0, s.jsx)("td", {
              children: Boolean(t.invitation_emailed) ? "YES" : "",
            }),
            (0, s.jsxs)("td", { children: [n?.name, " (", t.partner_id, ")"] }),
            (0, s.jsx)("td", { children: t.email_override }),
          ],
        });
      }
      function at(e) {
        const { hideModal: t, gid: n, title: r, group: a, session: o } = e,
          l = (0, $.a)(),
          c = Be(n),
          d = L(l, n, a?.group_id),
          [u, h] = (0, i.useMemo)(() => {
            const e = d?.data?.filter((e) => e.session_id == o.id),
              t = new Map(),
              n = new Map();
            return (
              e?.forEach((e) => {
                const s = new tt.b2(e.steamid).GetAccountID();
                if ((t.set(s, e), e.jsondata)) {
                  const t = JSON.parse(e.jsondata);
                  t.pre_event_partner_questions &&
                    n.set(s, t.pre_event_partner_questions);
                }
              }),
              [t, n]
            );
          }, [o, d]),
          m = c?.filter((e) => u.has(new tt.b2(e.steamid).GetAccountID()));
        return (0, s.jsxs)(q.o0, {
          bAlertDialog: !0,
          bAllowFullSize: !0,
          bDisableBackgroundDismiss: !0,
          closeModal: t,
          strDescription: "Show who is registered for this session",
          strTitle: "Session Registration",
          children: [
            (0, s.jsx)("div", {
              className: st().ExportToCSV,
              children: (0, s.jsx)("a", {
                onClick: () =>
                  (function (e, t, n, s, r, i) {
                    const a = [],
                      o = [
                        "SteamID",
                        "Name",
                        "Invited",
                        "Partner",
                        "Game",
                        "Email Override",
                        "Guest Count",
                        "Reg Confirmation Email Sent",
                      ];
                    e.ask_registration_question && o.push("Pre Reg Answer");
                    a.push(o),
                      s.forEach((t) => {
                        const n = [],
                          s = t.partner_id ? (0, R.Yd)(t.partner_id) : void 0;
                        n.push("" + t.steamid),
                          n.push(t.name),
                          n.push(t.invited ? "YES" : ""),
                          n.push(s ? `${s?.name} (${t.partner_id})` : ""),
                          n.push(t.game ? `Game: ${t.game}` : ""),
                          n.push(t.email_override),
                          n.push(
                            "" +
                              (t.guests_registered
                                ? t.guests_registered - 1
                                : 0),
                          );
                        const o = new tt.b2(t.steamid);
                        if (r.has(o.GetAccountID())) {
                          const e = ot(r.get(o.GetAccountID()), t);
                          if (e) {
                            const t = new Date(1e3 * e)
                              .toISOString()
                              .replace("T", " ")
                              .split(".")[0];
                            n.push(t);
                          } else n.push("");
                        } else n.push("");
                        if (e.ask_registration_question) {
                          const t = i
                            .get(o.GetAccountID())
                            ?.find((t) => t.group_id == e.group_id);
                          t && n.push(t.question);
                        }
                        a.push(n);
                        for (let e = 0; e < t.guest_names?.length; e++) {
                          const n = [];
                          n.push("(guest)"),
                            n.push(t.guest_names[e]),
                            a.push(n);
                        }
                      });
                    const l =
                      `meetsteam_${n}_${(0, Z.TW)(t.rtime_start)}_at_${(0, et.KC)(t.rtime_start)}.csv`.replace(
                        /[ <>:"/\\|?*\x00-\x1F]/g,
                        "_",
                      );
                    he.g.WriteCSVToFile(a, l);
                  })(a, o, r, m, u, h),
                children: "Export to CSV",
              }),
            }),
            (0, s.jsxs)("table", {
              className: st().Table,
              children: [
                (0, s.jsx)("thead", {
                  children: (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsx)("th", { children: "SteamID" }),
                      (0, s.jsx)("th", { children: "Name" }),
                      (0, s.jsx)("th", { children: "Invited" }),
                      (0, s.jsx)("th", { children: "Partner" }),
                      (0, s.jsx)("th", { children: "Game" }),
                      (0, s.jsx)("th", { children: "Email Override" }),
                      (0, s.jsxs)("th", {
                        children: [
                          "Guest Count ",
                          (0, s.jsx)(Y.o, {
                            tooltip:
                              "Additional guests, doesn't include main registrant",
                          }),
                        ],
                      }),
                      (0, s.jsx)("th", { children: "Reg Confirm Email Sent" }),
                      a.ask_registration_question &&
                        (0, s.jsx)("th", { children: "Answer" }),
                    ],
                  }),
                }),
                (0, s.jsx)("tbody", {
                  children: m?.flatMap((e) => {
                    const t = new tt.b2(e.steamid).GetAccountID(),
                      n = [
                        (0, s.jsx)(
                          lt,
                          {
                            group: a,
                            regInfo: u.get(t),
                            inviteInfo: e,
                            preRegQuestions: h.get(t),
                          },
                          "regrow" + e.steamid,
                        ),
                      ];
                    for (let t = 0; t < e.guest_names?.length; t++)
                      n.push(
                        (0, s.jsx)(
                          ct,
                          { guestName: e.guest_names[t] },
                          "regguestrow" + e.steamid + "_" + t,
                        ),
                      );
                    return n;
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function ot(e, t) {
        const n = `registration_emailed_${e.group_id}_${e.session_id}`;
        let s = null;
        return n in t && (s = t[n]), s;
      }
      function lt(e) {
        const { inviteInfo: t, regInfo: n, group: r, preRegQuestions: i } = e,
          [a] = (0, R.UA)(t.partner_id),
          o = ot(n, t);
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", { children: t.steamid }),
            (0, s.jsx)("td", { children: t.name }),
            (0, s.jsx)("td", { children: Boolean(t.invited) ? "YES" : "" }),
            (0, s.jsx)("td", { children: a?.name ?? `(${t.partner_id})` }),
            (0, s.jsx)("td", { children: t.game ? `Game: ${t.game}` : "" }),
            (0, s.jsx)("td", { children: t.email_override }),
            (0, s.jsx)("td", {
              children: n.guests_registered ? n.guests_registered - 1 : 0,
            }),
            (0, s.jsx)("td", { children: o ? (0, Z.TW)(o) : "" }),
            r.ask_registration_question &&
              (0, s.jsx)("td", {
                children:
                  i?.find((e) => e.group_id == r.group_id)?.question || "",
              }),
          ],
        });
      }
      function ct(e) {
        const { guestName: t } = e;
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", { children: "(guest)" }),
            (0, s.jsx)("td", { children: t }),
          ],
        });
      }
      var dt = n(2516),
        ut = n(98019);
      function ht(e) {
        return (0, y.I)({
          queryKey: [],
          queryFn: async () =>
            await (async function (e) {
              const t = { sessionid: (0, x.KC)(), gids: e },
                n = `${je.TS.PARTNER_BASE_URL}meetsteam/admin/ajaxgetregistrations`,
                s = await fetch(n, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(t),
                });
              if (!s.ok)
                throw new Error(
                  `Failed to read registrations for gids ${e.join(",")}`,
                );
              const r = await s.json();
              if (r.success != _.R)
                throw new Error(
                  `Failed to read registrations for gids ${e.join(",")}: ${r.msg}`,
                );
              return r.lists ?? [];
            })(e),
          enabled: e && e.length > 0,
        });
      }
      function mt(e) {
        const { rgEventGIDs: t } = e,
          [n, r, a] = (0, w.uD)(),
          [o, l] = (0, i.useState)(null);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("span", { children: " | " }),
            (0, s.jsx)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
              children: "Show Registration Across Events",
            }),
            (0, s.jsx)(K.E, {
              active: n,
              children: (0, s.jsx)(u.tH, {
                children: (0, s.jsx)(q.o0, {
                  closeModal: a,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                  children: Boolean(null == o)
                    ? (0, s.jsx)(Ze, { rgEventGIDs: t, fnSelectedEvents: l })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(pt, { rgGidMeetSteamEvents: o }),
                          (0, s.jsx)(H.$n, {
                            onClick: () => l(null),
                            children: "Reset Selection",
                          }),
                        ],
                      }),
                }),
              }),
            }),
          ],
        });
      }
      const gt = (0, Ae.FB)();
      function pt(e) {
        const { rgGidMeetSteamEvents: t } = e,
          {
            rgAllRegistrations: n,
            rgPartnerIDs: r,
            rgValveAccounts: a,
            rgMapAccountToSessionTimes: o,
          } = (function (e) {
            const t = Pe(e),
              n = (0, ut.qh)(),
              { bIsLoading: s, events: r } = (0, O.PB)(e),
              { data: a } = ht(e),
              [o, l, c] = (0, i.useMemo)(() => {
                if (
                  s ||
                  !a ||
                  0 == a.length ||
                  t.filter((e) => !e.isLoading).length != t.length
                )
                  return [null, null, null];
                const e = new Array(),
                  n = new Set(),
                  i = new Map();
                t.forEach((t) => {
                  t.data.forEach((t) => {
                    t.guests_registered > 0 &&
                      (e.push(t), t.partner_id && n.add(t.partner_id));
                  });
                });
                const o = new Map();
                return (
                  r.forEach((e) => {
                    e.jsondata.meet_steam_groups?.forEach((t) => {
                      t.sessions?.forEach((n) => {
                        o.set(
                          `${e.GID}_${t.group_id}_${n.id}`,
                          `${t.localized_session_title[v.Bhc]}@${(0, et.TW)(n.rtime_start)} ${(0, et.KC)(n.rtime_start)}`,
                        );
                      });
                    });
                  }),
                  a.forEach((e) => {
                    e.rgRegistrations.forEach((t) => {
                      const n = new I.b(t.steamid).GetAccountID(),
                        s =
                          o.get(`${e.gid}_${t.group_id}_${t.session_id}`) ||
                          `${t.group_id}:${t.session_id}`;
                      i.has(n) ? i.set(n, i.get(n) + `,${s}`) : i.set(n, s);
                    });
                  }),
                  [Array.from(n), e, i]
                );
              }, [t, s, a, r]);
            return (0, A.fI)(o)
              ? {
                  rgAllRegistrations: l,
                  rgPartnerIDs: o,
                  rgValveAccounts: n,
                  rgMapAccountToSessionTimes: c,
                }
              : {
                  rgAllRegistrations: void 0,
                  rgPartnerIDs: void 0,
                  rgValveAccounts: void 0,
                  rgMapAccountToSessionTimes: void 0,
                };
          })(t),
          l = (0, R.vh)(r),
          c = (0, i.useMemo)(() => {
            if (!(l && n && a && o)) return null;
            const e = new Map();
            a.forEach((t) => e.set(t.id, t));
            const t = [];
            return (
              n.forEach((n) => {
                const s = (0, R.Yd)(n.partner_id),
                  r = (0, A.Gl)(n.partner_id);
                t.push({
                  partner_id: n.partner_id ? "" + n.partner_id : "",
                  partner_name: s?.name || "Unknown",
                  name: n.name,
                  game: n.game || "",
                  accountid: n.accountid,
                  email: n.email_override,
                  guest_registrated: n.guests_registered - 1,
                  guest_names:
                    n.guest_names?.length > 0 ? n.guest_names.join(",") : "",
                  business_contact:
                    r && r.length > 0
                      ? r
                          .filter((e) => e.is_business_contact)
                          .map((t) => {
                            const n = new I.b(t.steamid),
                              s = e.get(n.GetAccountID());
                            return s?.displayName || t.steamid;
                          })
                          .join(",")
                      : "",
                  sessions: o.get(n.accountid) || "missing data",
                });
              }),
              t
            );
          }, [l, n, a, o]),
          d = ft();
        return l && r && c
          ? (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(H.JU, { children: "Registations" }),
                Boolean(c)
                  ? (0, s.jsxs)(u.tH, {
                      children: [
                        (0, s.jsx)(xt, { rgData: c }),
                        (0, s.jsx)(Te.k, {
                          columns: d,
                          data: c,
                          getRowKey: (e) => e,
                          stickyHeader: !0,
                          nItemHeight: 28,
                          overscan: r.length,
                        }),
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)(xt, { rgData: c }),
                      ],
                    })
                  : (0, s.jsx)(W.t, {
                      string: (0, Z.we)("#Loading"),
                      position: "center",
                    }),
              ],
            })
          : (0, s.jsx)(W.t, { string: (0, Z.we)("#Loading") });
      }
      function ft() {
        return (0, i.useMemo)(
          () => [
            gt.accessor("name", { header: "Name", size: 200 }),
            gt.accessor("accountid", { header: "Account ID", size: 150 }),
            gt.accessor("email", { header: "Email", size: 150 }),
            gt.accessor("guest_registrated", {
              header: "Guest Count",
              size: 100,
            }),
            gt.accessor("guest_names", { header: "Guest's Names", size: 100 }),
            gt.accessor("partner_id", { header: "Partner ID", size: 100 }),
            gt.accessor("partner_name", { header: "Partner Name", size: 300 }),
            gt.accessor("game", { header: "Game Name", size: 150 }),
            gt.accessor("business_contact", {
              header: "Business Contact",
              size: 150,
            }),
            gt.accessor("sessions", { header: "Sessions", size: 150 }),
          ],
          [],
        );
      }
      function xt(e) {
        const { rgData: t } = e,
          n = ft();
        return (0, s.jsx)(H.$n, {
          id: "download-csv",
          onClick: () =>
            (0, dt.K)(
              "registrationdump.csv",
              t,
              n.map((e) => ({
                accessorKey: e.accessorKey,
                header:
                  "string" == typeof e.header
                    ? e.header
                    : (e.accessorKey ?? ""),
              })),
            ),
          style: { width: "120px" },
          children: "Download CSV",
        });
      }
      const vt = i.createContext(void 0);
      function _t(e) {
        const { children: t } = e,
          [n, r] = ie("search", ""),
          [a, o] = (0, i.useState)(() => n || ""),
          l = (0, i.useCallback)(
            (e) => {
              o(e), r(e || void 0, !0);
            },
            [r],
          ),
          c = (0, i.useMemo)(() => ({ strSearch: a, setSearch: l }), [a, l]);
        return (0, s.jsx)(vt.Provider, { value: c, children: t });
      }
      const jt = () => {
        const e = (0, i.useContext)(vt);
        if (!e)
          throw new Error(
            "useMeetSteamSearch must be used within MeetSteamSearchProvider",
          );
        return e;
      };
      function St(e) {
        const { text: t } = e,
          { strSearch: n } = jt(),
          r = (0, i.useMemo)(
            () =>
              (function (e, t) {
                const n = t?.trim().toLowerCase();
                if (!e || !n) return [{ strText: e || "", bMatch: !1 }];
                const s = new Array(),
                  r = e.toLowerCase();
                let i = 0;
                for (let t = r.indexOf(n); t >= 0; t = r.indexOf(n, i))
                  t > i && s.push({ strText: e.slice(i, t), bMatch: !1 }),
                    s.push({ strText: e.slice(t, t + n.length), bMatch: !0 }),
                    (i = t + n.length);
                return (
                  i < e.length && s.push({ strText: e.slice(i), bMatch: !1 }), s
                );
              })(t, n),
            [t, n],
          );
        return (0, s.jsx)(s.Fragment, {
          children: r.map((e, t) =>
            e.bMatch
              ? (0, s.jsx)(
                  "span",
                  { className: ne().SearchMatch, children: e.strText },
                  t,
                )
              : (0, s.jsx)(i.Fragment, { children: e.strText }, t),
          ),
        });
      }
      function wt(e) {
        const t = I.b.InitFromClanID((0, V.H)()),
          n = (function () {
            const [e] = (0, i.useState)(() =>
              (0, x.Tc)("event_gids", "application_config"),
            );
            return e;
          })(),
          { bShowArchived: r, setShowArchived: a } = le(),
          { strSearch: o, setSearch: l } = jt(),
          { bIsLoading: c, events: d } = (0, O.PB)(n),
          {
            rgEventsByMonth: u,
            cEvents: h,
            cMatchingEvents: m,
          } = i.useMemo(() => {
            if (!d)
              return { rgEventsByMonth: null, cEvents: 0, cMatchingEvents: 0 };
            const e =
                r && d
                  ? [...d]
                  : d?.filter((e) => e.endTime >= new Date().getTime() / 1e3),
              t = e.filter((e) =>
                (function (e, t) {
                  if (!t?.trim()) return !0;
                  const n = [
                    e.GID,
                    e.GetNameWithFallback(v.Bhc),
                    e.GetDescriptionWithFallback(v.Bhc),
                  ];
                  return (
                    e.jsondata.meet_steam_groups?.forEach((e) => {
                      n.push(
                        Z.NT.GetWithFallback(e.localized_session_title, v.Bhc),
                      ),
                        n.push(
                          Z.NT.GetWithFallback(
                            e.localized_session_description,
                            v.Bhc,
                          ),
                        ),
                        n.push(
                          Z.NT.GetWithFallback(
                            e.localized_intended_audience,
                            v.Bhc,
                          ),
                        ),
                        n.push(
                          Z.NT.GetWithFallback(e.localized_sesssion_faq, v.Bhc),
                        );
                    }),
                    n.some((e) =>
                      (function (e, t) {
                        const n = t?.trim().toLowerCase();
                        return (
                          !n || (Boolean(e) && e.toLowerCase().includes(n))
                        );
                      })(e, t),
                    )
                  );
                })(e, o),
              ),
              n = Array.from(
                (0, Q.bv)(t, (e) => (0, Q.J2)(new Date(1e3 * e.startTime))),
              );
            return (
              n?.sort((e) => -e[0]),
              {
                rgEventsByMonth: n,
                cEvents: e.length,
                cMatchingEvents: t.length,
              }
            );
          }, [d, r, o]);
        return c
          ? (0, s.jsx)(W.t, {})
          : u
            ? (0, s.jsxs)("div", {
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("a", {
                        href: `${ee.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
                        children: "Open Meet Steam Event Dashboard",
                      }),
                      (0, s.jsx)(qe, { rgEventGIDs: n }),
                      (0, s.jsx)(mt, { rgEventGIDs: n }),
                    ],
                  }),
                  (0, s.jsx)(H.Yh, {
                    checked: r,
                    onChange: a,
                    label: "Show Past Events",
                  }),
                  (0, s.jsxs)("div", {
                    className: ne().SearchLine,
                    children: [
                      (0, s.jsx)(H.pd, {
                        type: "text",
                        placeholder: "Search events",
                        tooltip:
                          "In-memory search of the event id, title and description, and of the session group titles, descriptions and intended audience",
                        value: o,
                        onChange: (e) => l(e?.currentTarget?.value || ""),
                      }),
                      Boolean(o.trim()) &&
                        (0, s.jsxs)("div", {
                          className: ne().SearchSummary,
                          children: [
                            "Showing ",
                            m,
                            " of ",
                            h,
                            " events  ",
                            (0, s.jsx)("a", {
                              href: "#",
                              onClick: (e) => {
                                e.preventDefault(), l("");
                              },
                              children: "Clear",
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, s.jsx)("hr", {}),
                  u.map((e) =>
                    (0, s.jsx)(
                      yt,
                      { month: new Date(1e3 * e[0]), events: e[1] },
                      e[0],
                    ),
                  ),
                ],
              })
            : null;
      }
      function yt(e) {
        const { month: t, events: n } = e,
          r = i.useMemo(() => [...n].sort((e) => -e.startTime), [n]),
          a = new Intl.DateTimeFormat(navigator.language, {
            year: "numeric",
            month: "long",
          }).format(t);
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("div", { className: ne().MonthTitle, children: a }),
            (0, s.jsx)("div", {
              className: ne().MonthEvents,
              children: r.map((e) => (0, s.jsx)(bt, { oEvent: e }, e.GID)),
            }),
          ],
        });
      }
      function bt(e) {
        const { oEvent: t } = e,
          n = t.GID,
          r = I.b.InitFromClanID((0, V.H)()),
          a = (0, $.a)(),
          o = (0, G.my)(a, (0, V.H)(), n),
          l = o.isSuccess ? o.data : null,
          c = t.GetNameWithFallback(v.Bhc),
          d = (0, i.useMemo)(() => {
            const e = new Array();
            return (
              t.jsondata.meet_steam_groups?.forEach((t) => {
                t.sessions.forEach((n, s) => {
                  e.push({ group: t, session: n, firstSession: 0 == s });
                });
              }),
              e
            );
          }, [t.jsondata.meet_steam_groups]);
        return (0, s.jsxs)("div", {
          className: ne().EventRow,
          children: [
            (0, s.jsxs)("div", {
              className: ne().EventMainDetails,
              children: [
                (0, s.jsxs)("div", {
                  className: ne().TitleLine,
                  children: [
                    (0, s.jsx)("div", {
                      className: ne().Title,
                      children: (0, s.jsx)(St, { text: c }),
                    }),
                    (0, s.jsx)("div", {
                      className: ne().StartDate,
                      children: (0, Z.TW)(t?.startTime),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: ne().ActionLine,
                  children: [
                    (0, s.jsx)("div", {
                      children: (0, s.jsx)("a", {
                        href: `${ee.TS.COMMUNITY_BASE_URL}gid/${r.ConvertTo64BitString()}/partnerevents/edit/${n}`,
                        children: "Edit",
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      children: [
                        " | ",
                        (0, s.jsx)("a", {
                          href: `${ee.TS.STORE_BASE_URL}meetsteam/${n}`,
                          children: "View",
                        }),
                      ],
                    }),
                    Boolean(
                      t.BIsUnlistedEvent() &&
                        t.jsondata.meet_steam_groups?.length > 0,
                    ) &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(Rt, { gid: n }),
                          " | ",
                          (0, s.jsx)("a", {
                            href: `${ee.TS.STORE_BASE_URL}meetsteam/attendance?gid=${n}&accountid=${ee.iA.accountid}`,
                            children: "QR Page",
                          }),
                          " | ",
                          (0, s.jsx)("a", {
                            href: `${ee.TS.STORE_BASE_URL}meetsteam/attendeelist?gid=${n}`,
                            children: "Attendance List",
                          }),
                          (0, s.jsx)(Et, { gid: n }),
                          (0, s.jsx)(It, { gid: n }),
                          (0, s.jsx)(Ct, { gid: n }),
                          (0, s.jsx)(Dt, { gid: n }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("div", {
              children: (0, s.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, s.jsx)("thead", {
                    children: (0, s.jsxs)("tr", {
                      children: [
                        (0, s.jsx)("th", { children: "Group" }),
                        (0, s.jsx)("th", { children: "Session Start" }),
                        (0, s.jsx)("th", { children: "Session Duration" }),
                        (0, s.jsx)("th", { children: "Seats" }),
                        (0, s.jsx)("th", {
                          style: { width: "50px" },
                          children: "Registered",
                        }),
                        (0, s.jsx)("th", {
                          style: { width: "50px" },
                          children: "Guests",
                        }),
                        (0, s.jsx)("th", {
                          style: { width: "100px" },
                          children: "Details",
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsxs)("tbody", {
                    children: [
                      (0, s.jsxs)("tr", {
                        children: [
                          Boolean(d.length > 0)
                            ? (0, s.jsx)(
                                Tt,
                                {
                                  gid: n,
                                  group: d[0].group,
                                  session: d[0].session,
                                  rgAvailability: l,
                                },
                                d[0].session.id,
                              )
                            : (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)("td", { children: "None" }),
                                  (0, s.jsx)("td", {}),
                                  (0, s.jsx)("td", {}),
                                  (0, s.jsx)("td", {}),
                                  (0, s.jsx)("td", {}),
                                  (0, s.jsx)("td", {}),
                                ],
                              }),
                          (0, s.jsx)("td", {
                            children:
                              !Boolean(
                                t?.BIsUnlistedEvent() &&
                                  t.jsondata.meet_steam_groups?.length > 0,
                              ) &&
                              (0, s.jsx)("div", {
                                children:
                                  "Invite Disabled. Event need to publish into Unlisted State",
                              }),
                          }),
                        ],
                      }),
                      d
                        .filter((e, t) => t > 0)
                        .map((e) =>
                          (0, s.jsx)(
                            "tr",
                            {
                              children: (0, s.jsx)(Tt, {
                                group: e.group,
                                gid: n,
                                session: e.session,
                                rgAvailability: l,
                                firstSession: e.firstSession,
                              }),
                            },
                            e.session.id,
                          ),
                        ),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function Et(e) {
        const { gid: t } = e,
          n = re();
        return Array.from(n.keys()).includes(t)
          ? (0, s.jsxs)(s.Fragment, {
              children: [
                " | ",
                (0, s.jsx)("a", {
                  href: `${ee.TS.PARTNER_BASE_URL}meetsteam/survey/${t}`,
                  children: "Survey",
                }),
              ],
            })
          : null;
      }
      function Ct(e) {
        const { gid: t } = e,
          [n, r, i] = (0, w.uD)();
        return (0, s.jsxs)("div", {
          children: [
            " | ",
            (0, s.jsxs)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
              children: [
                "Invite via CSV",
                (0, s.jsx)(Y.o, {
                  tooltip:
                    "This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
                }),
              ],
            }),
            (0, s.jsx)(u.tH, {
              children: (0, s.jsx)(K.E, {
                active: n,
                children: (0, s.jsx)(Ce, { hideModal: i, gid: t }),
              }),
            }),
          ],
        });
      }
      function It(e) {
        const { gid: t } = e,
          [n, r, i] = (0, w.uD)();
        return (0, s.jsxs)("div", {
          children: [
            " | ",
            (0, s.jsx)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
              children: "Invite",
            }),
            (0, s.jsx)(u.tH, {
              children: (0, s.jsx)(K.E, {
                active: n,
                children: (0, s.jsx)(ye, { hideModal: i, gid: t }),
              }),
            }),
          ],
        });
      }
      function Dt(e) {
        const { gid: t } = e,
          [n, r, i] = (0, w.uD)();
        return (0, s.jsxs)("div", {
          children: [
            " | ",
            (0, s.jsx)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
              children: "Show Invites",
            }),
            (0, s.jsx)(u.tH, {
              children: (0, s.jsx)(K.E, {
                active: n,
                children: (0, s.jsx)(rt, { hideModal: i, gid: t }),
              }),
            }),
          ],
        });
      }
      function Rt(e) {
        const { gid: t } = e,
          n = (0, $.a)(),
          [r, a] = (0, i.useState)(!1),
          [o, l] = (0, i.useState)(null);
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("a", {
              href: "#",
              onClick: async (e) => {
                e.preventDefault(), e.stopPropagation(), a(!0);
                const s = await (async function (e, t) {
                  const n = j.w.Init(S.VI),
                    s = I.b.InitFromClanID((0, V.H)());
                  n.Body().set_clan_event_gid(t),
                    n.Body().set_steamid(s.ConvertTo64BitString());
                  const r = await S.ZK.TestFireEmails(e, n);
                  return console.log("test fire", r), r.GetEResult();
                })(n, t);
                l(s);
              },
              children: "Email Self",
            }),
            (0, s.jsx)(K.E, {
              active: r,
              children: (0, s.jsxs)(q.o0, {
                bAlertDialog: !0,
                strTitle: "Test Emails",
                closeModal: () => {
                  a(!1), l(null);
                },
                onOK: () => {},
                children: [
                  (0, s.jsx)("div", {
                    children:
                      "This will temporarily register and then de-register you from the event as a way to test the email sending code.",
                  }),
                  Boolean(null == o) &&
                    (0, s.jsx)(W.t, { string: (0, Z.we)("#Loading") }),
                  Boolean(o == _.R) &&
                    (0, s.jsx)("div", { children: "Test Emails Sent" }),
                  Boolean(o && o != _.R) &&
                    (0, s.jsx)("div", {
                      children: "Email Failed to Send. Check console",
                    }),
                ],
              }),
            }),
          ],
        });
      }
      function At(e, t) {
        const n = z().unix(e),
          s = z().unix(e).tz(t),
          r = s.utcOffset() - n.utcOffset(),
          i = new Date(1e3 * (e + 60 * r)),
          a = new Date();
        return `${i.getFullYear() == a.getFullYear() ? ((0, X.$w))(i, !1, !1) : ((0, X._9))(i, !1, !1)} ${(0, X.KC)(e + 60 * r)} ${s.format("z")}`;
      }
      function Tt(e) {
        const {
            gid: t,
            group: n,
            rgAvailability: r,
            session: i,
            firstSession: a = !0,
          } = e,
          o = Z.NT.GetWithFallback(n?.localized_session_title, v.Bhc),
          l = Z.NT.GetWithFallback(n?.localized_session_description, v.Bhc),
          c = Z.NT.GetWithFallback(n?.localized_intended_audience, v.Bhc),
          d = r?.find((e) => e.group_id == n.group_id && e.session_id == i.id),
          [h, m, g] = (0, w.uD)(),
          p = L((0, $.a)(), t, n?.group_id);
        let f = Math.min((d?.guest_count / i.max_capacity) * 100, 100),
          x = d?.guest_count > 0 ? `${f}%` : "0%",
          _ = d?.guest_count >= i.max_capacity;
        const j = Intl.DateTimeFormat().resolvedOptions().timeZone,
          S =
            "in_person" === i.location_type
              ? (i.in_person_time_zone ?? U.hh)
              : j;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            a && Boolean(n)
              ? (0, s.jsxs)("td", {
                  children: [
                    (0, s.jsx)(St, { text: o }),
                    (0, s.jsx)(Y.o, { tooltip: l }),
                    Boolean(c) &&
                      (0, s.jsx)("div", {
                        children: (0, s.jsx)(St, { text: c }),
                      }),
                  ],
                })
              : (0, s.jsx)("td", {}),
            (0, s.jsx)("td", {
              children: (0, s.jsx)("span", { children: At(i.rtime_start, S) }),
            }),
            (0, s.jsx)("td", {
              children: (0, X.IH)(i.rtime_end - i.rtime_start),
            }),
            (0, s.jsxs)("td", {
              children: [
                d?.guest_count || 0,
                " / ",
                i.max_capacity,
                (0, s.jsx)("br", {}),
                (0, s.jsx)("div", {
                  className: ne().CapacityBarMax,
                  children: (0, s.jsx)("div", {
                    className: (0, J.A)(
                      ne().CapacityBarCurrent,
                      _ ? ne().Full : "",
                    ),
                    style: { width: x },
                  }),
                }),
              ],
            }),
            (0, s.jsx)("td", {
              children:
                p.isSuccess &&
                (0, s.jsx)(s.Fragment, {
                  children: p.data?.filter((e) => e.session_id == i.id).length,
                }),
            }),
            (0, s.jsx)("td", {
              children:
                p.isSuccess &&
                (0, s.jsx)(s.Fragment, {
                  children: p.data
                    ?.filter((e) => e.session_id == i.id)
                    .reduce((e, t) => e + t.guests_registered - 1, 0),
                }),
            }),
            (0, s.jsxs)("td", {
              children: [
                (0, s.jsx)(H.$n, { onClick: m, children: "Details" }),
                (0, s.jsx)(u.tH, {
                  children: (0, s.jsx)(K.E, {
                    active: h,
                    children: (0, s.jsx)(at, {
                      gid: t,
                      title: o,
                      group: n,
                      session: i,
                      hideModal: g,
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var kt = n(14987),
        Mt = n(39777),
        Nt = n(44419),
        Bt = n(16021),
        Pt = n(65522),
        Lt = n(48479);
      function Ft(e) {
        const { rgEvents: t } = M(),
          n = (function () {
            const [e] = (0, i.useState)(() =>
              (0, x.Tc)("interest_results", "application_config"),
            );
            return (0, i.useMemo)(
              () => e.map((e) => ((e.results = JSON.parse(e.jsondata)), e)),
              [e],
            );
          })(),
          [r, a] = (0, i.useState)(""),
          o = D.TS.PARTNER_BASE_URL + "meetsteam",
          l = (0, i.useMemo)(() => {
            const e = new Map();
            return (
              n.forEach((t) => {
                t.results?.attending?.forEach((t) => {
                  e.has(t) ? e.set(t, e.get(t) + 1) : e.set(t, 1);
                });
              }),
              e
            );
          }, [n]);
        return (0, s.jsxs)("div", {
          className: ne().EventList,
          children: [
            (0, s.jsx)(H.pd, {
              type: "text",
              value: r,
              onChange: (e) => a(e.currentTarget.value.trim()),
              label: "Filter",
            }),
            (0, s.jsxs)("div", {
              children: ["Total Survey Responses: ", (0, _e.D)(n?.length || 0)],
            }),
            (0, s.jsxs)("div", {
              children: [
                "Link to partner-facing survey: ",
                (0, s.jsx)("a", { href: o, children: o }),
              ],
            }),
            t
              .filter(
                (e) => 0 == r.length || e.name.includes(r) || e.id.includes(r),
              )
              .map((e) =>
                (0, s.jsx)(
                  zt,
                  {
                    conf: e,
                    nInterestCount: l.get(e.id) ?? 0,
                    rgSurveyInterest: n,
                  },
                  e.id,
                ),
              ),
            (0, s.jsx)(Kt, { rgSurveyInterest: n }),
          ],
        });
      }
      function zt(e) {
        const { conf: t, nInterestCount: n, rgSurveyInterest: r } = e;
        return (0, s.jsx)(Lt.qx, {
          title: `${t.name} in ${t.place} around ${t.time}: Interest: ${(0, _e.D)(n)}`,
          bStartMinimized: !0,
          children: (0, s.jsx)(Gt, { conf: t, rgSurveyInterest: r }),
        });
      }
      function Ot(e) {
        if ("number" == typeof e) return e;
        const t = e.slice(-1).toUpperCase(),
          n = parseFloat(e.slice(0, -1));
        switch (t) {
          case "K":
            return 1e3 * n;
          case "M":
            return 1e6 * n;
          case "B":
            return 1e9 * n;
          default:
            return parseFloat(e);
        }
      }
      function Gt(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          r = (0, i.useMemo)(
            () => n.filter((e) => e.results?.attending?.includes(t.id)),
            [t, n],
          ),
          a = (0, ut.qh)(),
          { bComplete: o, nCount: l } = (function (e) {
            const [t, n] = (0, i.useState)(!1),
              [s, r] = (0, i.useState)(0),
              a = (0, b.jE)();
            return (
              (0, i.useEffect)(() => {
                (async () => {
                  let t = 0;
                  for (const n of e) {
                    const e = n.results.partner_id;
                    new I.b(n.steamid).GetAccountID(),
                      await Promise.all([
                        (0, R.qG)(e),
                        a.prefetchQuery({
                          queryKey: N(e),
                          queryFn: async () => B(e),
                        }),
                        (0, A.PQ)(a, e),
                      ]),
                      ++t,
                      r(t);
                  }
                  n(!0);
                })();
              }, [a, e]),
              { bComplete: t, nCount: s }
            );
          })(r);
        return o
          ? a?.length
            ? r && 0 != r.length
              ? (0, s.jsx)($t, { conf: t, rgSurveyInterest: r })
              : (0, s.jsx)("div", { children: "No users with interest" })
            : (0, s.jsx)(W.t, {
                position: "center",
                string: "Loading Valve Account info (this shouldn't take long)",
              })
          : (0, s.jsx)(W.t, {
              position: "center",
              string: `Loading ${l} of ${r.length}`,
            });
      }
      function $t(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          r = (0, b.jE)();
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)(H.$n, {
              onClick: () => {
                const e = [];
                e.push([
                  "AccountID",
                  "Partner ID",
                  "Valve Partner Contacts",
                  "Email Override",
                  "Account Name",
                  "Name",
                  "Have you met steam",
                  "Survey Time",
                  "Attending Other Event Count",
                  "Country",
                  "Alt Language",
                  "Partner Name",
                  "Gross USD",
                  "Best AppID",
                  "Best AppID Name",
                  "Long Term Sales Rank",
                ]),
                  n.forEach((t) => {
                    const n = [],
                      s = new tt.b2(t.steamid);
                    n.push("" + s.GetAccountID());
                    const i = (0, Nt.z0)(s.GetAccountID()),
                      a = t.results.partner_id;
                    n.push("" + a);
                    const o = (0, A.N6)(a).map(
                      (e) => (0, ut.YA)(r, e)?.displayName || "" + e,
                    );
                    n.push(o.join("|"));
                    const l = t.results.email_override || "";
                    n.push("" + l),
                      n.push(i?.m_strPlayerName ? i.m_strPlayerName : "");
                    const c = $e(s.GetAccountID(), a);
                    if (
                      (n.push(c ? c.realname : ""),
                      n.push(t.results.have_you_met_steam ? "yes" : "no"),
                      t.results.submit_time)
                    ) {
                      const e = t.results.submit_time,
                        s = new Date(1e3 * e)
                          .toISOString()
                          .replace("T", " ")
                          .split(".")[0];
                      n.push(s);
                    } else n.push("");
                    n.push("" + t.results.attending?.length),
                      n.push(t.results.country_code),
                      n.push(
                        t.results.preferred_language
                          ? (0, v.LgB)(t.results.preferred_language)
                          : "",
                      );
                    const d = (0, R.Yd)(a);
                    n.push(d ? d.name : "");
                    const u = P(r, a);
                    u
                      ? (n.push("" + Ot(u.strGrossUSD)),
                        n.push("" + u.nBestAppID),
                        n.push(Bt.A.Get().GetApp(u.nBestAppID)?.GetName()),
                        n.push("" + u.nBestAppLongTermSalesRank))
                      : (n.push(""), n.push(""), n.push(""), n.push("")),
                      e.push(n);
                  });
                const s = t.name.replace(" ", "_") + "_conference_interest.csv";
                he.g.WriteCSVToFile(e, s);
              },
              children: "Export to CSV",
            }),
            (0, s.jsxs)("table", {
              className: "landingTable",
              children: [
                (0, s.jsx)("thead", {
                  children: (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsx)("th", { children: "Name and Email" }),
                      (0, s.jsx)("th", { children: "Have you met steam?" }),
                      (0, s.jsx)("th", { children: "Partner" }),
                      (0, s.jsx)("th", { children: "Valve Contacts" }),
                      (0, s.jsx)("th", { children: "Partner Revenue" }),
                      (0, s.jsx)("th", { children: "Biggest Game" }),
                      (0, s.jsx)("th", { children: "Long Term Sales Rank" }),
                      (0, s.jsx)("th", { children: "Attending count?" }),
                      (0, s.jsx)("th", { children: "Alt Language" }),
                      (0, s.jsx)("th", { children: "Country" }),
                      (0, s.jsx)("th", { children: "Submit Survey Time" }),
                    ],
                  }),
                }),
                (0, s.jsx)("tbody", {
                  children: n.map((e) =>
                    (0, s.jsx)(
                      Ht,
                      {
                        strsteamid: e.steamid,
                        partnerID: e.results.partner_id,
                        registration: e.results,
                      },
                      t.id + "_" + e.steamid,
                    ),
                  ),
                }),
              ],
            }),
          ],
        });
      }
      function Ht(e) {
        const { partnerID: t, registration: n } = e;
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", { children: (0, s.jsx)(Ut, { ...e }) }),
            (0, s.jsx)("td", { children: n.have_you_met_steam ? "" : "NO" }),
            (0, s.jsx)(Vt, { nPartnerID: t }),
            (0, s.jsx)("td", { children: n.attending.length }),
            (0, s.jsx)("td", {
              children:
                n.english_not_good && n.preferred_language
                  ? (0, v.LgB)(n.preferred_language)
                  : "",
            }),
            (0, s.jsx)("td", { children: n.country_code }),
            (0, s.jsx)("td", { children: (0, Z.TW)(n.submit_time) }),
          ],
        });
      }
      function Ut(e) {
        const { strsteamid: t, partnerID: n, registration: r } = e,
          i = (0, Nt.hW)(t),
          a = Ge(new tt.b2(t).GetAccountID(), n),
          o = a?.realname || i.data?.m_strPlayerName;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("span", { children: o }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)("span", { children: r.email_override || a?.email }),
          ],
        });
      }
      function Vt(e) {
        const { nPartnerID: t } = e,
          [n] = (0, R.UA)(t),
          r = (function (e) {
            const t = (0, y.I)({
              queryKey: N(e),
              queryFn: async () => B(e),
              enabled: Boolean(e),
            });
            return t.isLoading ? null : t.data;
          })(t),
          i = (0, A.Z4)(t),
          a = (0, b.jE)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("td", { children: n ? n?.name + ` (${t})` : t }),
            (0, s.jsx)("td", {
              children: i
                ?.map((e) => (0, ut.YA)(a, e)?.displayName || "" + e)
                .join(","),
            }),
            (0, s.jsxs)("td", { children: ["$", r?.strGrossUSD] }),
            (0, s.jsx)("td", {
              children:
                r?.nBestAppID > 0
                  ? (0, s.jsx)(qt, { appid: r?.nBestAppID })
                  : "N/A",
            }),
            (0, s.jsx)("td", { children: r?.nBestAppLongTermSalesRank }),
          ],
        });
      }
      function qt(e) {
        const { appid: t } = e,
          n = (0, kt.$5)(t),
          { data: r } = (0, Mt.J$)(n);
        return (0, s.jsx)(Pt.Q, {
          id: n,
          children: (0, s.jsx)("span", { children: r?.name || t }),
        });
      }
      function Kt(e) {
        const { rgSurveyInterest: t } = e,
          n = (0, b.jE)(),
          r =
            ((0, ut.qh)(),
            (0, i.useMemo)(
              () =>
                t.filter((e) =>
                  Boolean(e.results?.suggestion?.trim().length > 0),
                ),
              [t],
            ));
        return (0, s.jsxs)(Lt.qx, {
          title: `Alternative Suggestions (${r.length})`,
          bStartMinimized: !0,
          children: [
            (0, s.jsx)(H.$n, {
              onClick: () => {
                const e = [];
                e.push([
                  "AccountID",
                  "Partner ID",
                  "Email Override",
                  "Account Name",
                  "name",
                  "Attending Other Event Count",
                  "Country",
                  "Alt Language",
                  "Partner Name",
                  "Gross USD",
                  "Best AppID",
                  "Long Term Sales Rank",
                  "Suggestion",
                ]),
                  r.forEach((t) => {
                    const s = [],
                      r = new tt.b2(t.steamid);
                    s.push("" + r.GetAccountID());
                    const i = (0, Nt.z0)(r.GetAccountID()),
                      a = t.results.partner_id;
                    s.push("" + a);
                    const o = t.results.email_override || "";
                    s.push("" + o),
                      s.push(i?.m_strPlayerName ? i.m_strPlayerName : "");
                    const l = $e(r.GetAccountID(), a);
                    s.push(l ? l.realname : ""),
                      s.push("" + t.results.attending?.length),
                      s.push(t.results.country_code),
                      s.push(
                        t.results.preferred_language
                          ? (0, v.LgB)(t.results.preferred_language)
                          : "",
                      );
                    const c = (0, R.Yd)(a);
                    s.push(c ? c.name : "");
                    const d = P(n, a);
                    d
                      ? (s.push("" + Ot(d.strGrossUSD)),
                        s.push("" + d.nBestAppID),
                        s.push("" + d.nBestAppLongTermSalesRank))
                      : (s.push(""), s.push(""), s.push("")),
                      s.push(t.results.suggestion),
                      e.push(s);
                  });
                he.g.WriteCSVToFile(e, "suggestsion.csv");
              },
              children: "Export to CSV (wait until the table populates fully)",
            }),
            (0, s.jsxs)("table", {
              className: "landingTable",
              children: [
                (0, s.jsx)("thead", {
                  children: (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsx)("th", { children: "Name and Email" }),
                      (0, s.jsx)("th", { children: "Partner" }),
                      (0, s.jsx)("th", { children: "Valve Contacts" }),
                      (0, s.jsx)("th", { children: "Partner Revenue" }),
                      (0, s.jsx)("th", { children: "Biggest Game" }),
                      (0, s.jsx)("th", { children: "Long Term Sales Rank" }),
                      (0, s.jsx)("th", { children: "Suggestions" }),
                    ],
                  }),
                }),
                (0, s.jsx)("tbody", {
                  children: r.map((e) =>
                    (0, s.jsx)(Wt, { survey: e }, "suggested" + e.steamid),
                  ),
                }),
              ],
            }),
          ],
        });
      }
      function Wt(e) {
        const { survey: t } = e;
        new tt.b2(t.steamid);
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", {
              children: (0, s.jsx)(Ut, {
                strsteamid: t.steamid,
                partnerID: t.results.partner_id,
                registration: t.results,
              }),
            }),
            (0, s.jsx)(Vt, { nPartnerID: t.results.partner_id }),
            (0, s.jsx)("td", { children: t.results.suggestion.trim() }),
          ],
        });
      }
      const Yt = i.createContext({
        loadUserEmailAndLangs: async (e) =>
          await (function () {
            Qt ||
              (Qt = new (Ne())(
                async (e) => {
                  const t = `${D.TS.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
                    n = { sessionid: (0, D.KC)(), strAccountIDs: e.join(",") },
                    s = await C().get(t, { params: n, withCredentials: !0 });
                  if (!s || 200 != s?.status || s?.data?.success != _.R)
                    throw `Failed to load app to user email and langs: ${((0, ue.H))(s).strErrorMsg}`;
                  const r = new Map();
                  return (
                    s.data.users.forEach((e) => {
                      const t = new I.b(e.steamid);
                      r.set(t.GetAccountID(), e);
                    }),
                    e.map((e) => r.get(e) ?? null)
                  );
                },
                { maxBatchSize: 100 },
              ));
            return Qt;
          })().load(e),
      });
      function Jt(e, t) {
        return {
          queryKey: ["UserEmailAndLangs", t],
          queryFn: () => e.loadUserEmailAndLangs(t),
          enabled: !!t,
        };
      }
      let Qt;
      var Zt = n(73745),
        Xt = n(3049);
      function en(e) {
        const t = (0, $.a)(),
          n = (0, ut.qh)(),
          r = (function (e) {
            const t = (0, y.I)({
              queryKey: ["useMeetSteamSaleOperators"],
              queryFn: async () => {
                const t = j.w.Init(S.Rl),
                  n = new Date();
                n.setFullYear(n.getFullYear() - 2),
                  t.Body().set_rt_oldest_date(0);
                const s = await S.ZK.GetSaleEventOrganizers(e, t);
                return s.BSuccess()
                  ? s
                      .Body()
                      .info()
                      .map((e) => e.toObject())
                  : [];
              },
            });
            return t.isLoading ? null : t.data;
          })(t),
          a = (0, i.useMemo)(() => {
            if (!r || !n) return null;
            const e = new Set(n.map((e) => e.id));
            return r
              .filter((t) => !e.has(t.accountid))
              .sort(
                (e, t) => t.clan_event_gids?.length - e.clan_event_gids.length,
              );
          }, [r, n]);
        return a
          ? (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)(H.$n, {
                  onClick: () => {
                    const e = [];
                    e.push(["User Name", "account id", "Email", "Event Count"]),
                      a.forEach((t) => {
                        const n = (0, Nt.z0)(t.accountid),
                          s =
                            ((r = t.accountid),
                            Oe.L.getQueryData(["UserEmailAndLangs", r]));
                        var r;
                        e.push([
                          n?.m_strPlayerName || "",
                          "" + t.accountid,
                          s?.email_address || "",
                          t.clan_event_gids?.length.toLocaleString((0, Xt.J)()),
                        ]);
                      });
                    he.g.WriteCSVToFile(e, "sale_operators.csv");
                  },
                  children: [
                    "CSV Export",
                    (0, s.jsx)(Y.o, {
                      tooltip:
                        "Wait until the page finishes loading before export",
                    }),
                  ],
                }),
                (0, s.jsxs)("table", {
                  children: [
                    (0, s.jsx)("thead", {
                      children: (0, s.jsxs)("tr", {
                        children: [
                          (0, s.jsx)("th", { children: "User" }),
                          (0, s.jsx)("th", { children: "Email" }),
                          (0, s.jsx)("th", { children: "Events" }),
                        ],
                      }),
                    }),
                    (0, s.jsx)("tbody", {
                      children: a.map((e) =>
                        (0, s.jsx)(tn, { organizer: e }, e.accountid),
                      ),
                    }),
                  ],
                }),
              ],
            })
          : (0, s.jsx)(W.t, { string: (0, Z.we)("#Loading"), size: "medium" });
      }
      function tn(e) {
        const { organizer: t } = e,
          n = (0, i.useMemo)(
            () => I.b.InitFromAccountID(t.accountid).ConvertTo64BitString(),
            [t],
          ),
          r = (0, Nt.hW)(n),
          a = (function (e) {
            const t = i.useContext(Yt);
            return (0, y.I)(Jt(t, e));
          })(t.accountid),
          o = r.data?.m_strPlayerName || "";
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsxs)("td", { children: [o, " (", t.accountid, ")"] }),
            (0, s.jsx)("td", { children: a?.data?.email_address }),
            (0, s.jsx)("td", {
              children: (0, s.jsx)(nn, {
                name: o,
                rgClanEventGIDs: t.clan_event_gids,
              }),
            }),
          ],
        });
      }
      function nn(e) {
        const { name: t, rgClanEventGIDs: n } = e,
          [r, i, a] = (0, Zt.uD)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(H.$n, {
              onClick: i,
              children: ["See ", (0, _e.D)(n.length), " Events"],
            }),
            (0, s.jsx)(K.E, {
              active: r,
              children: (0, s.jsx)(q.o0, {
                bAlertDialog: !0,
                closeModal: a,
                strTitle: `${t}'s Events`,
                children: n.map((e) => (0, s.jsx)(sn, { gid: e }, e)),
              }),
            }),
          ],
        });
      }
      function sn(e) {
        const { gid: t } = e,
          n = (0, O.RR)(t);
        return n
          ? (0, s.jsxs)("a", {
              href: `${ee.TS.COMMUNITY_BASE_URL}gid/${n.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${t}`,
              target: "_blank",
              children: [
                (0, s.jsx)("div", { children: n.GetNameWithFallback(v.Bhc) }),
                (0, s.jsx)("img", { src: n.GetImageURL("capsule", v.Bhc) }),
              ],
            })
          : (0, s.jsxs)("div", { children: ["Loading ", t] });
      }
      function rn(e) {
        const t = (e) =>
            window.sessionStorage.setItem("meetsteamadmin", `?tab=${e.key}`),
          n = [
            {
              name: "Interest Survey Results",
              key: "survey",
              contents: (0, s.jsx)(u.tH, { children: (0, s.jsx)(Ft, {}) }),
              onClick: t,
            },
            {
              name: "Event Management",
              key: "event",
              contents: (0, s.jsx)(u.tH, { children: (0, s.jsx)(wt, {}) }),
              onClick: t,
            },
            {
              name: "Sale Operators",
              key: "saleops",
              contents: (0, s.jsx)(u.tH, { children: (0, s.jsx)(en, {}) }),
              onClick: t,
            },
            {
              name: "Post Event Surveys",
              key: "postsurvey",
              contents: (0, s.jsx)(u.tH, { children: (0, s.jsx)(se, {}) }),
              onClick: t,
            },
          ];
        return (0, s.jsx)(oe, {
          children: (0, s.jsx)(_t, {
            children: (0, s.jsxs)("div", {
              className: f().AdminPageCtn,
              children: [
                (0, s.jsxs)("div", {
                  className: f().PageTitle,
                  children: [
                    "Meet Steam Admin Dashboard ",
                    (0, x.Fd)("current_year", "application_config"),
                  ],
                }),
                (0, s.jsx)("hr", {}),
                (0, s.jsx)(g.V, { tabs: n }),
                (0, s.jsx)("div", { className: m().ClearThings }),
                (0, s.jsx)("br", {}),
              ],
            }),
          }),
        });
      }
      var an = n(65946),
        on = n(79645),
        ln = n(1909),
        cn = n(56330),
        dn = n(85761),
        un = n.n(dn);
      function hn(e) {
        const t = (function () {
            const [e] = (0, i.useState)(() =>
              (0, D.Tc)("registration_open", "application_config"),
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, i.useState)(
              () => (0, D.Tc)("user_reg", "application_config") || {},
            );
            return e;
          })(),
          { data: r } = (0, Nt.js)(D.iA.accountid),
          [a, o] = (0, i.useState)(!1),
          [l, c] = (0, i.useState)(!1),
          [d, u] = (0, i.useState)(!1),
          [h, m] = (0, i.useState)(() => JSON.parse(JSON.stringify(n)));
        return t
          ? !r || r.m_bPlayerNamePending
            ? (0, s.jsx)(W.t, {
                size: "medium",
                position: "center",
                string: (0, Z.we)("#Loading"),
              })
            : (0, s.jsxs)("div", {
                className: (0, J.A)(f().AdminPageCtn, un().Ctn),
                children: [
                  (0, s.jsx)("div", {
                    className: f().PageTitle,
                    children: (0, Z.we)("#MeetSteam_MainTitle"),
                  }),
                  (0, s.jsx)("hr", {}),
                  (0, s.jsx)("div", {
                    className: f().ColumnCtn,
                    children: (0, s.jsxs)("div", {
                      className: f().LeftCol,
                      children: [
                        (0, s.jsxs)("div", {
                          className: f().SectionCtn,
                          children: [
                            (0, s.jsxs)("h1", {
                              children: [
                                " ",
                                (0, Z.PP)(
                                  "#MeetSteam_Intro",
                                  r.m_strPlayerName,
                                  (0, s.jsx)("br", {}),
                                ),
                              ],
                            }),
                            (0, s.jsx)("p", {
                              className: f().IntroText,
                              children: (0, Z.we)("#MeetSteam_Desc1"),
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: f().SectionCtn,
                          children: (0, s.jsx)(fn, {
                            oRegistration: h,
                            fnSetRegistration: m,
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: f().SectionCtn,
                          children: (0, s.jsx)(mn, {
                            oRegistration: h,
                            fnSetRegistration: m,
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className: (0, J.A)(f().SectionCtn, f().ActionBar),
                          children: [
                            (0, s.jsx)(H.jn, {
                              onClick: async () => {
                                c(!0), o(!1), u(!1);
                                const e = `${D.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                                  t = new FormData();
                                t.append("sessionid", (0, D.KC)()),
                                  t.append(
                                    "registrationJson",
                                    JSON.stringify(h),
                                  );
                                try {
                                  const n = await C().post(e, t, {
                                    withCredentials: !0,
                                  });
                                  n.data.success != _.R
                                    ? (console.error(
                                        "MeetSteamLanding failed " +
                                          n.data.success,
                                      ),
                                      o(!0))
                                    : u(!0);
                                } catch (e) {
                                  console.error(
                                    "MeetSteamLanding failed caught",
                                    e,
                                  );
                                }
                                c(!1);
                              },
                              children: (0, Z.we)("#Button_Submit"),
                            }),
                            l &&
                              (0, s.jsx)(W.t, {
                                size: "medium",
                                position: "center",
                                string: (0, Z.we)("#Saving"),
                              }),
                            d &&
                              (0, s.jsx)("div", {
                                children: (0, Z.we)("#Button_Saved"),
                              }),
                            a &&
                              (0, s.jsx)("div", {
                                className: cn.ErrorStylesWithIcon,
                                children: (0, Z.we)(
                                  "#Error_ErrorCommunicatingWithNetwork",
                                ),
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              })
          : (0, s.jsx)("div", {
              className: un().Ctn,
              children: (0, Z.we)("#MeetSteam_closed"),
            });
      }
      function mn(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          { rgEvents: r, rgOldEvents: i, selectConference: a } = M();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("h1", {
              children: (0, Z.we)("#MeetSteam_Events_Interest"),
            }),
            (0, s.jsx)("p", {
              children: (0, Z.PP)(
                "#MeetSteam_Events_title",
                (0, D.Tc)("meet_steam_year", "application_config") || "2025",
              ),
            }),
            (0, s.jsxs)("p", {
              children: [
                (0, s.jsx)("span", {
                  className: un().Indicator,
                  children: "*",
                }),
                " ",
                (0, Z.PP)("#MeetSteam_Events_desc"),
              ],
            }),
            Boolean(a) &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("hr", {}),
                  (0, s.jsx)("p", {
                    children: (0, Z.we)("#MeetSteam_ConferenceOrg"),
                  }),
                  (0, s.jsx)(gn, { ...e, rgConference: [a] }),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)("hr", {}),
                  (0, s.jsx)("h2", {
                    children: (0, Z.we)("#MeetSteam_OtherConference"),
                  }),
                ],
              }),
            (0, s.jsx)(gn, { ...e, rgConference: r }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)(H.pd, {
              type: "text",
              value: t.suggestion || "",
              onChange: (e) => n({ ...t, suggestion: e.currentTarget.value }),
              label: (0, Z.we)("#MeetSteam_others"),
            }),
            Boolean(i?.length > 0) &&
              (0, s.jsx)(Lt.qx, {
                bStartMinimized: !0,
                title: (0, Z.we)("#MeetSteam_PastEvents", i.length),
                children: (0, s.jsx)(gn, { ...e, rgConference: i }),
              }),
          ],
        });
      }
      function gn(e) {
        const { rgConference: t } = e;
        return (0, s.jsxs)("table", {
          children: [
            (0, s.jsx)("thead", {
              children: (0, s.jsxs)("tr", {
                children: [
                  (0, s.jsx)("th", {}),
                  (0, s.jsx)("th", {}),
                  (0, s.jsx)("th", {}),
                  (0, s.jsx)("th", {}),
                ],
              }),
            }),
            (0, s.jsx)("tbody", {
              children: t.map((t) =>
                (0, s.jsxs)(
                  "tr",
                  {
                    children: [
                      (0, s.jsx)("td", {
                        children: t.attending
                          ? (0, s.jsx)("span", {
                              className: un().Indicator,
                              children: "*",
                            })
                          : "",
                      }),
                      (0, s.jsxs)("td", {
                        children: [
                          (0, s.jsx)("div", { children: t.name }),
                          (0, s.jsx)("div", { children: t.place }),
                        ],
                      }),
                      (0, s.jsx)("td", {
                        children: (0, s.jsx)("div", { children: t.time }),
                      }),
                      (0, s.jsx)("td", {
                        children: (0, s.jsx)(pn, { ...e, conf: t }),
                      }),
                    ],
                  },
                  t.id,
                ),
              ),
            }),
          ],
        });
      }
      function pn(e) {
        const { oRegistration: t, fnSetRegistration: n, conf: r } = e;
        return (0, s.jsx)(H.Yh, {
          checked: t.attending?.includes(r.id),
          onChange: (e) => {
            let s = t.attending ? [...t.attending] : [];
            e && !s.includes(r.id)
              ? (s.push(r.id), n({ ...t, attending: s }))
              : !e &&
                s.includes(r.id) &&
                (s.splice(s.indexOf(r.id), 1), n({ ...t, attending: s }));
          },
          tooltip: (0, Z.we)("#MeetSteam_attend_ttip"),
        });
      }
      function fn(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          r = (0, Nt.js)(D.iA.accountid),
          a = (function (e) {
            const t = (function () {
                const [e] = (0, i.useState)(
                  () =>
                    (0, D.Tc)("partner_user_email", "application_config") || "",
                );
                return e;
              })(),
              n = (function () {
                const [e] = (0, i.useState)(() =>
                  (0, D.Tc)("primary_partner_id", "application_config"),
                );
                return e;
              })(),
              s = Ge(D.iA.accountid, e != n ? e : null);
            return e == n ? t : s?.email;
          })(t?.partner_id),
          [o, l] = (0, i.useState)(() =>
            Boolean((t.email_override && t.email_override != a) || !a),
          ),
          [c, d, u] = (0, an.q3)(() => [
            !Boolean(t.have_you_met_steam),
            Boolean(t.english_not_good),
            t.preferred_language,
          ]);
        return r.data
          ? (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("h1", { children: (0, Z.we)("#MeetSteam_You") }),
                (0, s.jsx)("p", { children: (0, Z.we)("#MeetSteam_You_Desc") }),
                (0, s.jsx)(xn, {
                  nPartnerID: t.partner_id,
                  label: (0, Z.we)("#MeetSteam_You_Company"),
                  setPartnerID: (e) => n({ ...t, partner_id: e }),
                }),
                (0, s.jsxs)("div", {
                  className: un().EmailInfoRow,
                  children: [
                    (0, s.jsx)("div", {
                      className: un().EmailField,
                      children: (0, s.jsx)(H.pd, {
                        type: "string",
                        label: (0, Z.we)("#MeetSteam_You_Email"),
                        disabled: !o,
                        value: t.email_override || a || "",
                        placeholder: (0, Z.we)("#MeetSteam_You_EmailMissing"),
                        mustBeEmail: !0,
                        onChange: (e) =>
                          n({ ...t, email_override: e.currentTarget.value }),
                      }),
                    }),
                    !o &&
                      (0, s.jsx)(H.Yh, {
                        checked: o,
                        onChange: l,
                        label: (0, Z.we)("#MeetSteam_You_Update"),
                        tooltip: (0, Z.we)("#MeetSteam_You_Update_ttip"),
                      }),
                  ],
                }),
                (0, s.jsx)(H.JU, {
                  children: (0, Z.we)("#MeetSteam_NeverMet"),
                }),
                (0, s.jsx)(H.Yh, {
                  label: (0, Z.we)("#MeetSteam_NeverMetNo"),
                  checked: c,
                  onChange: (e) => n({ ...t, have_you_met_steam: !e }),
                }),
                (0, s.jsx)(H.JU, {
                  children: (0, Z.we)("#MeetSteam_CapabableEnglish"),
                }),
                (0, s.jsxs)("div", {
                  className: un().RadioButtonCtn,
                  children: [
                    (0, s.jsx)(H.Od, {
                      className: un().RadioButtons,
                      checked: !d,
                      onChange: (e) =>
                        e &&
                        n({
                          ...t,
                          english_not_good: void 0,
                          preferred_language: void 0,
                        }),
                      label: (0, Z.we)("#MeetSteam_CapabableEnglish_Yes"),
                    }),
                    (0, s.jsx)(H.Od, {
                      className: un().RadioButtons,
                      checked: d,
                      onChange: (e) =>
                        e &&
                        n({
                          ...t,
                          english_not_good: !0,
                          preferred_language: (0, v.sfN)(D.TS.LANGUAGE),
                        }),
                      label: (0, Z.we)("#MeetSteam_CapabableEnglish_No"),
                    }),
                  ],
                }),
                d &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("br", {}),
                      (0, s.jsx)(H.JU, {
                        children: (0, Z.we)("#MeetSteam_LanguagePref"),
                      }),
                      (0, s.jsx)(ln.Ng, {
                        selectedLang: u,
                        bAllowUnsetOption: !1,
                        strTooltip: (0, Z.we)("#MeetSteam_LanguagePref_ttip"),
                        fnOnLanguageChanged: (e) =>
                          n({ ...t, preferred_language: e }),
                      }),
                    ],
                  }),
              ],
            })
          : (0, s.jsx)(W.t, {
              size: "medium",
              position: "center",
              string: (0, Z.we)("#Loading"),
            });
      }
      function xn(e) {
        const { nPartnerID: t, setPartnerID: n, label: r } = e,
          i = (0, on.c)(D.iA.accountid);
        if (!i)
          return (0, s.jsx)(W.t, {
            size: "small",
            position: "center",
            string: (0, Z.we)("#Loading"),
          });
        if (1 == i.length) return null;
        const a = [];
        return (
          i.forEach((e) =>
            a.push({ label: e?.partner_name, data: e.partnerid }),
          ),
          (0, s.jsx)(H.m, {
            layout: "inline",
            label: r,
            rgOptions: a,
            selectedOption: t,
            onChange: (e) => {
              n(e.data);
            },
          })
        );
      }
      var vn = n(20587),
        _n = n(13038),
        jn = n.n(_n);
      function Sn(e) {
        const { data: t } = (0, Nt.js)(D.iA.accountid),
          n = (function () {
            const [e] = (0, i.useState)(
              () => (0, D.Tc)("survey_event_name", "application_config") || "",
            );
            return e;
          })(),
          r = (function () {
            const [e] = (0, i.useState)(
              () => (0, D.Tc)("survey_data", "application_config") || "",
            );
            return e;
          })(),
          [a, l] = (0, i.useState)(() => r || ""),
          { surveyGID: c } = (0, o.g)(),
          [d, u] = (0, i.useState)(!1),
          [h, m] = (0, i.useState)(!1),
          [g, p] = (0, i.useState)(!1);
        return !t || t.m_bPlayerNamePending
          ? (0, s.jsx)(W.t, {
              size: "medium",
              position: "center",
              string: (0, Z.we)("#Loading"),
            })
          : (0, s.jsxs)("div", {
              className: (0, J.A)(f().AdminPageCtn, jn().Ctn),
              children: [
                (0, s.jsx)("div", {
                  className: f().PageTitle,
                  children: (0, Z.we)("#MeetSteam_PostSurvey_Title", n),
                }),
                (0, s.jsx)("hr", {}),
                (0, s.jsx)("div", {
                  className: f().ColumnCtn,
                  children: (0, s.jsxs)("div", {
                    className: f().LeftCol,
                    children: [
                      (0, s.jsxs)("div", {
                        className: f().SectionCtn,
                        children: [
                          (0, s.jsx)("div", {
                            children: (0, Z.we)(
                              "#MeetSteam_PostSurvey_Question",
                            ),
                          }),
                          (0, s.jsx)("textarea", {
                            rows: 10,
                            onChange: (e) => l(e.currentTarget.value),
                            value: a,
                            autoFocus: !0,
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: (0, J.A)(f().SectionCtn, f().ActionBar),
                        children: [
                          (0, s.jsx)(H.jn, {
                            onClick: async () => {
                              m(!0), u(!1), p(!1);
                              const e = `${D.TS.PARTNER_BASE_URL}meetsteam/ajaxsubmitsurvey/${c}`,
                                t = new FormData();
                              t.append("gid", c),
                                t.append("sessionid", (0, D.KC)());
                              let n = {
                                gid: c,
                                simple_response: a,
                                submit_time: Math.floor(
                                  new Date().getTime() / 1e3,
                                ),
                              };
                              t.append("surveyjson", JSON.stringify(n));
                              try {
                                const n = await C().post(e, t, {
                                  withCredentials: !0,
                                });
                                n.data.success != _.R
                                  ? (console.error(
                                      "MeetSteamLanding failed " +
                                        n.data.success,
                                    ),
                                    u(!0))
                                  : p(!0);
                              } catch (e) {
                                console.error(
                                  "MeetSteamLanding failed caught",
                                  e,
                                );
                              }
                              m(!1);
                            },
                            children: (0, Z.we)("#Button_Submit"),
                          }),
                          h &&
                            (0, s.jsx)(W.t, {
                              size: "medium",
                              position: "center",
                              string: (0, Z.we)("#Saving"),
                            }),
                          g &&
                            (0, s.jsx)("div", {
                              children: (0, Z.we)("#Button_Saved"),
                            }),
                          d &&
                            (0, s.jsx)("div", {
                              className: cn.ErrorStylesWithIcon,
                              children: (0, Z.we)(
                                "#Error_ErrorCommunicatingWithNetwork",
                              ),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            });
      }
      var wn = n(5695);
      function yn(e) {
        const t = (function () {
            const [e] = (0, i.useState)(
              () => (0, D.Tc)("event_gids", "application_config") || [],
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, i.useState)(
              () => (0, D.Tc)("survey_results", "application_config") || [],
            );
            return e;
          })(),
          r = (function () {
            const e = (function () {
              const [e] = (0, i.useState)(() => {
                const e = new Map(),
                  t =
                    (0, D.Tc)("registration_by_gid", "application_config") ||
                    {};
                for (const n in t) {
                  const s = t[n];
                  e.set(n, s);
                }
                return e;
              });
              return e;
            })();
            return (0, i.useMemo)(() => {
              const t = new Map();
              return (
                e.forEach((e, n) => {
                  e.forEach((e) => {
                    const s = new I.b(e.steamid);
                    t.has(s.GetAccountID()) || t.set(s.GetAccountID(), []),
                      (e.gidEvent = n),
                      t.get(s.GetAccountID()).push(e);
                  });
                }),
                t
              );
            }, [e]);
          })(),
          { surveyGID: a } = (0, o.g)(),
          { bIsLoading: l, events: c } = (0, O.PB)(t),
          [d, u] = (0, i.useMemo)(
            () => [
              n
                .map((e) => {
                  const t = new I.b(e.steamid);
                  if (r.has(t.GetAccountID())) {
                    const e = r.get(t.GetAccountID());
                    return JSON.parse(e[0].jsondata).partner_id;
                  }
                  return null;
                })
                .filter(Boolean),
              n.map((e) => new I.b(e.steamid).GetAccountID()),
            ],
            [r, n],
          ),
          h = (0, R.vh)(d),
          m = (0, ge.B3)(u);
        return !l && h && m
          ? (0, s.jsx)(En, {
              rgSurveyResults: n,
              mapAccountsToReg: r,
              meetSteamEvents: c,
            })
          : (0, s.jsx)(W.t, { string: "Loading Event, Partner and User Info" });
      }
      const bn = (0, Ae.FB)();
      function En(e) {
        const {
            rgSurveyResults: t,
            mapAccountsToReg: n,
            meetSteamEvents: r,
          } = e,
          a = (0, i.useMemo)(() => {
            if (!t) return null;
            const e = new Map();
            r.forEach((t) => e.set(t.GID, t));
            const s = [];
            return (
              t.forEach((t) => {
                const r = JSON.parse(t.jsondata),
                  i = new I.b(t.steamid);
                let a = {
                  feedback: r.simple_response,
                  accountid: i.GetAccountID(),
                };
                if (n.has(i.GetAccountID())) {
                  const t = n.get(i.GetAccountID()),
                    s = JSON.parse(t[0].jsondata);
                  (a.partner_id = s.partner_id),
                    (a.email = s.email_override),
                    (a.name = s.name),
                    (a.registrations = "");
                  const r = (0, R.Yd)(s.partner_id);
                  r && (a.partner_name = r.name),
                    t.forEach((t) => {
                      const n = e.get(t.gidEvent);
                      if (n) {
                        const e = n.jsondata.meet_steam_groups.find(
                          (e) => e.group_id === t.group_id,
                        ).localized_session_title[v.Bhc];
                        a.registrations.length > 0 && (a.registrations += "|"),
                          (a.registrations += e);
                      }
                    });
                } else {
                  const e = (0, ge.CF)(i.GetAccountID());
                  e && (a.name = e.persona_name);
                }
                s.push(a);
              }),
              s
            );
          }, [n, r, t]),
          o = (0, i.useMemo)(
            () => [
              bn.accessor("name", { header: "Name", size: 150 }),
              bn.accessor("feedback", {
                header: "Feedback",
                size: 500,
                cell: wn.Gb,
              }),
              bn.accessor("registrations", {
                header: "Sessions",
                size: 200,
                cell: Cn,
              }),
              bn.accessor("accountid", { header: "Account ID", size: 150 }),
              bn.accessor("email", { header: "Email", size: 150 }),
              bn.accessor("partner_name", {
                header: "Partner Name",
                size: 200,
              }),
            ],
            [],
          );
        return a
          ? (0, s.jsx)(u.tH, {
              children: (0, s.jsxs)("div", {
                className: f().AdminPageCtn,
                children: [
                  (0, s.jsx)("div", {
                    className: f().PageTitle,
                    children: "Survey Results",
                  }),
                  (0, s.jsx)("hr", {}),
                  (0, s.jsx)(H.$n, {
                    id: "download-csv",
                    onClick: () =>
                      (0, dt.K)(
                        "meetsteam_survey_results.csv",
                        a,
                        o.map((e) => ({
                          accessorKey: e.accessorKey,
                          header:
                            "string" == typeof e.header
                              ? e.header
                              : (e.accessorKey ?? ""),
                        })),
                      ),
                    style: { width: "120px" },
                    children: "Download CSV",
                  }),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)(Te.k, {
                    columns: o,
                    data: a,
                    getRowKey: (e) => e,
                    stickyHeader: !0,
                    nItemHeight: 28,
                    overscan: a.length,
                  }),
                ],
              }),
            })
          : (0, s.jsx)(W.t, { string: (0, Z.we)("#Loading") });
      }
      function Cn(e) {
        const t = e.getValue();
        return t?.length > 0
          ? (0, s.jsx)(wn.DP, { text: e.getValue(), regExp: /\|/ })
          : "";
      }
      const In = {
        YearlySurvery: (e = ":year") => `/${e}`,
        PostEventSurvey: (e = ":surveyGID") => `/survey/${e}`,
        AdminDashboard: () => "/admin",
        PostEventSurveyResults: (e = ":surveyGID") => `/surveyresults/${e}`,
      };
      function Dn(e) {
        return (
          (0, i.useEffect)(() => {
            vn.O3.Init();
          }, []),
          (0, s.jsx)(l.m, {
            children: (0, s.jsx)(a.Kd, {
              basename: (0, r.C)() + "meetsteam/",
              children: (0, s.jsxs)(o.dO, {
                children: [
                  (0, s.jsx)(o.qh, {
                    exact: !0,
                    path: r.B.DiagData(),
                    render: (e) =>
                      (0, s.jsx)(c.z, {
                        ...e,
                        strConfigID: "application_config",
                      }),
                  }),
                  (0, s.jsx)(o.qh, {
                    exact: !0,
                    path: In.AdminDashboard(),
                    component: rn,
                  }),
                  (0, s.jsx)(o.qh, {
                    exact: !0,
                    path: In.YearlySurvery(":year(\\d+)"),
                    component: hn,
                  }),
                  (0, s.jsx)(o.qh, {
                    exact: !0,
                    path: In.PostEventSurvey(":surveyGID(\\d+)"),
                    component: Sn,
                  }),
                  (0, s.jsx)(o.qh, {
                    exact: !0,
                    path: In.PostEventSurveyResults(":surveyGID(\\d+)"),
                    component: yn,
                  }),
                  (0, s.jsx)(o.qh, { component: d.a }),
                ],
              }),
            }),
          })
        );
      }
    },
    66051: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => T });
      var s = n(7850),
        r = n(8871),
        i = n(67796),
        a = n(16666),
        o = n(92148),
        l = n(59366),
        c = n(64238),
        d = n.n(c),
        u = n(90626),
        h = n(31718),
        m = n.n(h),
        g = n(76217),
        p = n(23310),
        f = n(94104),
        x = n(9646);
      const v = u.memo(function (e) {
        const {
            virtualizer: t,
            bDynamic: n,
            scrollAlign: r,
            bNativeScrollIntoView: i,
            idx: a,
            rowGap: o,
            renderItem: l,
          } = e,
          c = u.useCallback(
            (e, n, s) => (t.scrollToIndex(a, { align: r }), !0),
            [t, a, r],
          );
        return (0, s.jsx)(g.Z, {
          ref: n ? t.measureElement : void 0,
          navKey: `VirtualizedListIndex-${a}`,
          "data-index": a,
          fnScrollIntoViewHandler: i ? void 0 : c,
          scrollIntoViewWhenChildFocused: "force",
          style: { width: "100%", paddingBottom: o },
          children: l(a),
        });
      });
      function _(e, t) {
        const n = e.getBoundingClientRect().top;
        return t
          ? n - t.getBoundingClientRect().top - t.clientTop + t.scrollTop
          : n + (e.ownerDocument.defaultView?.scrollY ?? 0);
      }
      u.forwardRef(function (e, t) {
        const {
            nRows: n,
            nItemHeight: i,
            nRowGap: a,
            overscan: o,
            renderItem: l,
            bDynamic: c,
            measureElement: d,
            className: h,
            forceVirtualizeType: m,
            hintVirtualizeType: p,
            scrollAlign: x,
            bNativeScrollIntoView: v,
            initialOffset: j,
            onOffsetChange: y,
            ...b
          } = e,
          [E, C] = (0, u.useState)(m ?? p),
          [I, D] = u.useState(),
          [R, A] = u.useState(),
          T = u.useRef(null),
          k = u.useCallback(
            (e) => {
              if (!e) return;
              const t = (0, f._f)(e, "y"),
                n = _(e, "window" == m ? null : t);
              (0, u.startTransition)(() => {
                "window" != m && D(t || void 0),
                  A(n),
                  m || C(t ? "element" : "window");
              });
            },
            [m],
          ),
          M =
            ((N = (e) => {
              if (!T.current) return;
              const t = _(T.current, I);
              (0, u.startTransition)(() => {
                A(t);
              });
            }),
            (0, r.QS)(
              (e) => {
                if (!e) return;
                const t = new e.ownerDocument.defaultView.ResizeObserver(
                  (e) => {
                    N(e[0]);
                  },
                );
                let n = [],
                  s = e;
                for (; s && null != s; )
                  t.observe(s), n.push(s), (s = s.parentElement);
                return () => {
                  n.forEach((e) => t.unobserve(e));
                };
              },
              [N],
            ));
        var N;
        const B = (0, r.Ue)(k, T, M, t),
          P = {
            nRows: n,
            nItemHeight: i,
            nRowGap: a,
            overscan: o,
            renderItem: l,
            bDynamic: c,
            measureElement: d,
            forceVirtualizeType: m,
            hintVirtualizeType: p,
            scrollAlign: x,
            bNativeScrollIntoView: v,
            initialOffset: j,
            onOffsetChange: y,
          };
        return (0, s.jsx)(g.Z, {
          className: h,
          ref: B,
          ...b,
          children: (0, s.jsxs)(u.Suspense, {
            children: [
              "element" === E &&
                (0, s.jsx)(w, { ...P, nScrollMargin: R || 0, elScrollable: I }),
              "window" === E && (0, s.jsx)(S, { ...P, nScrollMargin: R }),
            ],
          }),
        });
      });
      function j(e, t, n) {
        u.useEffect(() => {
          n ||
            (0, u.startTransition)(() => {
              e.measure();
            });
        }, [e, t, n]);
      }
      function S(e) {
        const {
            nScrollMargin: t,
            nRows: n,
            nItemHeight: r,
            nRowGap: i = 10,
            overscan: a = 6,
            initialOffset: l,
            onOffsetChange: c,
            measureElement: d,
            bDynamic: h,
          } = e,
          m = ((0, x.d)(), r + i),
          g = (0, o.XW)({
            count: n,
            scrollMargin: t,
            estimateSize: u.useCallback(() => m, [m]),
            measureElement: d,
            overscan: a,
            initialOffset: l ?? (() => window.scrollY),
            initialRect: void 0,
            observeElementOffset: E,
            observeElementRect: C,
            onChange(e, t) {
              c?.(e.scrollOffset);
            },
          });
        return (
          (g.shouldAdjustScrollPositionOnItemSizeChange = (e) =>
            void 0 !== t && e.start < (g.scrollOffset ?? 0)),
          j(g, m, h),
          (0, s.jsx)(y, { ...e, virtualizer: g })
        );
      }
      function w(e) {
        const {
            nRows: t,
            nScrollMargin: n,
            elScrollable: r,
            nItemHeight: i,
            nRowGap: a = 10,
            overscan: l = 6,
            initialOffset: c,
            onOffsetChange: d,
            measureElement: h,
            bDynamic: m,
          } = e,
          g = i + a,
          p = (0, x.d)(),
          f = (0, o.Te)({
            count: t,
            scrollMargin: n,
            getScrollElement: () => (
              r &&
                f.scrollElement !== r &&
                void 0 === c &&
                (f.scrollOffset = r.scrollTop),
              r ?? null
            ),
            estimateSize: u.useCallback(() => g, [g]),
            measureElement: h,
            overscan: l,
            initialRect: r
              ? void 0
              : {
                  height: p.viewportHeight?.value ?? 1e3,
                  width: p.viewportWidth?.value ?? 1e3,
                },
            initialOffset: c,
            observeElementOffset: E,
            observeElementRect: I,
            onChange(e, t) {
              d?.(e.scrollOffset);
            },
          });
        return (
          (f.shouldAdjustScrollPositionOnItemSizeChange = (e) =>
            void 0 !== r && e.start < (f.scrollOffset ?? 0)),
          j(f, g, m),
          (0, s.jsx)(y, { ...e, virtualizer: f })
        );
      }
      function y(e) {
        const {
            virtualizer: t,
            nRowGap: n,
            renderItem: r,
            bDynamic: i,
            scrollAlign: a = "center",
            bNativeScrollIntoView: o,
          } = e,
          l = t.getVirtualItems(),
          c = l.length ? l[0].start - t.options.scrollMargin : 0,
          d = Math.max(0, t.getTotalSize());
        return (0, s.jsx)(g.Z, {
          "flow-children": "column",
          navEntryPreferPosition: p.iU.MAINTAIN_Y,
          style: { height: `${d}px`, width: "100%", position: "relative" },
          children: (0, s.jsx)("div", {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              transform: `translateY( ${c}px )`,
            },
            children: l.map((e) =>
              (0, s.jsx)(
                v,
                {
                  virtualizer: t,
                  bDynamic: i,
                  scrollAlign: a,
                  bNativeScrollIntoView: o,
                  idx: e.index,
                  rowGap: n,
                  renderItem: r,
                },
                e.key,
              ),
            ),
          }),
        });
      }
      function b(e) {
        return (...t) => {
          queueMicrotask(() => {
            (0, u.startTransition)(() => {
              e(...t);
            });
          });
        };
      }
      function E(e, t) {
        const n = e.scrollElement;
        if (!n) return;
        let s;
        s = b(
          "scrollX" in n
            ? (s) => t(n[e.options.horizontal ? "scrollX" : "scrollY"], s)
            : (s) => t(n[e.options.horizontal ? "scrollLeft" : "scrollTop"], s),
        );
        const r = () => s(!0),
          i = () => s(!1);
        return (
          i(),
          n.addEventListener("scroll", r, { passive: !0 }),
          n.addEventListener("scrollend", i, { passive: !0 }),
          () => {
            n.removeEventListener("scroll", r),
              n.removeEventListener("scrollend", i);
          }
        );
      }
      function C(e, t) {
        const n = e.scrollElement;
        if (!n) return;
        const s = b(() => t({ width: n.innerWidth, height: n.innerHeight }));
        return (
          s(),
          n.addEventListener("resize", s, { passive: !0 }),
          () => {
            n.removeEventListener("resize", s);
          }
        );
      }
      function I(e, t) {
        const n = e.scrollElement;
        if (!n) return;
        const s = b((e) =>
          t({ width: Math.round(e.width), height: Math.round(e.height) }),
        );
        s(n.getBoundingClientRect());
        const r = n.ownerDocument.defaultView;
        if (!r?.ResizeObserver) return () => {};
        const i = new r.ResizeObserver((e) => {
          e[0]?.borderBoxSize[0]
            ? s({
                width: e[0].borderBoxSize[0].inlineSize,
                height: e[0].borderBoxSize[0].blockSize,
              })
            : s(n.getBoundingClientRect());
        });
        return (
          i.observe(n, { box: "border-box" }),
          () => {
            i.unobserve(n);
          }
        );
      }
      var D = n(26408);
      const R = u.createContext(void 0);
      function A(e) {
        const { table: t, setColumnSizeOverride: n } = e,
          r = (0, u.useRef)(t);
        r.current = t;
        const i = (0, u.useMemo)(
          () => ({ table: r.current, setColumnSizeOverride: n }),
          [n],
        );
        return (0, s.jsx)(R.Provider, { value: i, children: e.children });
      }
      const T = u.forwardRef(function (e, t) {
        const {
            data: n,
            columns: r,
            className: c,
            width: d,
            height: h,
            nScrollMargin: m,
            nItemHeight: g,
            nHeaderHeight: p,
            overscan: f = 6,
            stickyHeader: x,
            getRowKey: v,
            initialSorting: _,
            initialColumnFilters: j,
            initialGrouping: S,
            initialExpanded: w,
            initialColumnPinning: y,
            initialColumnVisibility: b,
            onGroupingChange: D,
            onVisibleRowsChange: R,
            renderGroup: T,
            virtualizeType: k = "element",
          } = e,
          B = (0, u.useRef)(null),
          [P, L] = (0, u.useState)({}),
          [F, z] = (0, u.useState)({}),
          O = r.map((e) =>
            "accessorKey" in e
              ? { ...e, filterFn: P[e.accessorKey] ?? e.filterFn }
              : e,
          ),
          G = O.map((e) => {
            let t = F[e.id];
            return (
              void 0 === t && "accessorKey" in e && (t = F[e.accessorKey]),
              (t ??= e.size),
              { ...e, size: t }
            );
          }),
          $ = (0, i.N4)({
            data: n,
            columns: G,
            defaultColumn: { minSize: 60, maxSize: 800 },
            initialState: {
              sorting: _,
              grouping: S ?? [],
              expanded: w,
              columnPinning: y ?? {},
              columnFilters: j,
              columnVisibility: b,
            },
            getCoreRowModel: (0, a.HT)(),
            getSortedRowModel: (0, a.h5)(),
            getFilteredRowModel: (0, a.hM)(),
            getGroupedRowModel: (0, a.cU)(),
            columnResizeMode: "onChange",
          }),
          { rows: H, flatRows: U } = $.getRowModel(),
          V = H.flatMap((e) => (e.getIsExpanded() ? [e, ...e.subRows] : e)),
          q = $.getState().grouping;
        (0, u.useEffect)(() => {
          D?.(q);
        }, [D, q]),
          (0, u.useEffect)(() => {
            R?.(V);
          }, [R, V.length]);
        const K = (0, o.Te)({
            count: V.length,
            scrollMargin: m,
            getScrollElement: u.useCallback(
              () => ("element" === k ? ee.current : window),
              [k],
            ),
            scrollToFn: (e, t, n) =>
              "window" === k ? (0, l.e8)(e, t, n) : (0, l.Ox)(e, t, n),
            estimateSize: u.useCallback(() => g, [g]),
            overscan: f,
            initialRect: void 0,
            observeElementOffset: E,
            observeElementRect: (e, t) => ("window" === k ? C(e, t) : I(e, t)),
            getItemKey(e) {
              const t = V[e];
              return `${t.parentId ?? ""}${v(e, t.original)}`;
            },
          }),
          W = (0, u.useRef)(0),
          Y = u.useMemo(() => {
            const e = $.getFlatHeaders(),
              t = {};
            for (let n = 0; n < e.length; n++) {
              const s = e[n];
              (t[`--header-${s.id}-size`] = `${s.getSize()}px`),
                (t[`--col-${s.column.id}-size`] = `${s.column.getSize()}px`);
            }
            return (W.current += 1), t;
          }, [$.getState().columnSizingInfo, $.getState().columnSizing, r]);
        u.useEffect(() => {
          (0, u.startTransition)(() => {
            K.measure();
          });
        }, [K, g]);
        const J = K.getVirtualItems(),
          Q = J[0]?.start ?? 0,
          Z = K.getTotalSize(),
          X = (0, o.Te)({
            estimateSize: (e) =>
              V[0]?.getVisibleCells()[e].column.getSize() ?? 0,
            count: V[0]?.getVisibleCells().length ?? 0,
            overscan: 6,
            horizontal: !0,
            getScrollElement: u.useCallback(
              () => ("element" === k ? ee.current : window),
              [k],
            ),
            scrollToFn: (e, t, n) =>
              "window" === k ? (0, l.e8)(e, t, n) : (0, l.Ox)(e, t, n),
            rangeExtractor(e) {
              const t = V[0]?.getVisibleCells() ?? [],
                n = new Set((0, l.vp)(e));
              return (
                t.forEach((e, t) => {
                  e.column.getIsPinned() && n.add(t);
                }),
                Array.from(n).sort((e, t) => e - t)
              );
            },
            observeElementOffset: E,
            observeElementRect: (e, t) => ("window" === k ? C(e, t) : I(e, t)),
          });
        (0, u.useEffect)(() => {
          X.measure();
        }, [W.current]),
          (0, u.useImperativeHandle)(
            t,
            () => ({
              getData: () => U.map((e) => e.original),
              getVisibleRows: () => V,
              getState: $.getState,
              getColumns: $.getAllColumns,
              getColumnDefs: () => O,
              setColumnFilters: $.setColumnFilters,
              resetColumnFilters: $.resetColumnFilters,
              setColumnFilterFnOverride: L,
              getColumnFilterFnOverride: () => P,
              getContainerElement: () => ee.current,
              getTableElement: () => B.current,
              scrollToColumn(e, t) {
                X.scrollToIndex(e.getIndex(), t);
              },
            }),
            [
              U,
              V,
              $.setColumnFilters,
              $.resetColumnFilters,
              $.getState,
              $.getAllColumns,
              P,
              O,
              X,
            ],
          );
        const ee = (0, u.useRef)(null),
          te = x ? (p ?? 0) : 0;
        let ne = 0;
        const se = V[0]?.getVisibleCells(),
          re = X.getVirtualItems(),
          ie = re[re.length - 1]?.end;
        for (const e of re) {
          const t = se[e.index];
          t?.column.getIsPinned() && (ne += e.size);
        }
        return (0, s.jsx)(A, {
          table: $,
          setColumnSizeOverride: z,
          children: (0, s.jsx)("div", {
            className: c,
            ref: ee,
            style: {
              width: d,
              height: h,
              overflow: "element" === k ? "auto" : void 0,
              maxWidth: "fit-content",
              scrollPadding: `${te}px 0 0 ${ne}px`,
            },
            children: (0, s.jsxs)("div", {
              role: "table",
              ref: B,
              "aria-rowcount": n.length,
              style: {
                minHeight: Z,
                width: $.getTotalSize(),
                "--virtualPos": `${Q}px`,
                ...Y,
              },
              children: [
                $.getHeaderGroups().map((e) =>
                  (0, s.jsx)(
                    M,
                    { group: e, sticky: x, nHeaderHeight: p },
                    e.id,
                  ),
                ),
                J.map((e) =>
                  (0, s.jsx)(
                    N,
                    {
                      row: V[e.index],
                      size: e.size,
                      rowVirtualizer: X,
                      index: e.index,
                      measureRef: K.measureElement,
                      scrollContainerRef: ee,
                      nItemHeight: g,
                      renderGroup: T,
                      rowEnd: ie,
                    },
                    e.key,
                  ),
                ),
              ],
            }),
          }),
        });
      });
      function k(e) {
        const t = e.getIsPinned();
        return {
          borderRight:
            "left" === t && e.getIsLastColumn("left")
              ? "var(--fancy-table-last-pinned-border, var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
          borderLeft:
            "right" === t && e.getIsFirstColumn("right")
              ? "var(--fancy-table-last-pinned-border,var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
          left: "left" === t ? `${e.getStart("left")}px` : void 0,
          right: "right" === t ? `${e.getAfter("right")}px` : void 0,
          position: t ? "sticky" : "relative",
          minWidth: e.getSize(),
          zIndex: t ? 1 : 0,
        };
      }
      function M(e) {
        const { group: t, sticky: n, nHeaderHeight: r } = e;
        return (0, s.jsx)("div", {
          role: "row",
          className: d()(
            m().FancyTableRow,
            m().FancyTableHeader,
            n && m().StickyHeader,
          ),
          children: t.headers.map((e, n) => {
            const i = t.headers[n - 1],
              a = {},
              o = e.column.getIsSorted();
            o &&
              !e.column.columnDef.meta?.bDisableSortButton &&
              (a["aria-sort"] = "asc" === o ? "ascending" : "descending");
            let l = "div";
            return (
              e.column.getCanSort() &&
                !e.column.columnDef.meta?.bDisableSortButton &&
                ((l = "button"),
                (a.onClick = e.column.getToggleSortingHandler())),
              (0, s.jsx)(
                L,
                {
                  header: e,
                  prevHeader: i,
                  HeaderElement: l,
                  nHeaderHeight: r,
                  sortDirection: o,
                  strTooltip: e.column.columnDef.meta?.strHeaderTooltip,
                  conditionalProps: a,
                },
                e.id,
              )
            );
          }),
        });
      }
      const N = u.memo(function (e) {
        const {
          row: t,
          size: n,
          rowVirtualizer: r,
          measureRef: i,
          index: a,
          nItemHeight: o,
          renderGroup: l,
        } = e;
        return (0, s.jsx)("div", {
          role: "row",
          className: d()(
            m().FancyTableRow,
            t.getCanExpand() && m().ExpandableRow,
          ),
          style: {
            minHeight: t.getCanExpand() ? void 0 : `${n}px`,
            transform: "translateY(var(--virtualPos))",
          },
          "data-even": a % 2 == 0,
          "data-index": a,
          ref: i,
          children: (0, s.jsx)(B, {
            row: t,
            rowVirtualizer: r,
            nItemHeight: o,
            renderGroup: l,
          }),
        });
      });
      function B(e) {
        const { row: t, rowVirtualizer: n, renderGroup: r } = e;
        if (t.getCanExpand()) {
          const e = r ?? (() => t.groupingValue);
          return (0, s.jsxs)("button", {
            className: m().RowGroup,
            "aria-expanded": t.getIsExpanded(),
            onClick: t.getToggleExpandedHandler(),
            children: [
              (0, s.jsx)("div", { className: m().GroupExpandIndicator }),
              e(t),
            ],
          });
        }
        const i = n.getVirtualItems(),
          a = t.getVisibleCells();
        let o,
          l = 0;
        return (0, s.jsx)(s.Fragment, {
          children: i.map((e) => {
            const t = a[e.index],
              r = t.column.getIsPinned();
            return (
              r ? (l += e.size) : void 0 === o && (o = e.start),
              (0, s.jsx)(
                F,
                {
                  cell: t,
                  rowVirtualizer: n,
                  index: e.index,
                  transform: r ? void 0 : `translateX(${o - l}px)`,
                },
                t.id,
              )
            );
          }),
        });
      }
      function P(e, t) {
        const n = (0, u.useContext)(R),
          s = e.columnDef.meta?.bGrowToFit,
          r = e.id,
          i = s ? e.getSize() : 0,
          a = e.getIsSorted();
        (0, u.useLayoutEffect)(() => {
          if (!s) return;
          if (!t.current) return;
          const e = t.current?.scrollWidth;
          if (!e) return;
          const a = t.current.getBoundingClientRect().width,
            o = window.getComputedStyle(t.current);
          let l = e;
          if (e > a) {
            if (o.paddingLeft) {
              let e = parseInt(o.paddingLeft);
              isNaN(e) || (l += e);
            }
            if (o.paddingRight) {
              let e = parseInt(o.paddingRight);
              isNaN(e) || (l += e);
            }
          }
          l > i &&
            n.setColumnSizeOverride((e) => (e[r] > l ? e : { ...e, [r]: l }));
        }, [s, r, n, i, t, a]);
      }
      function L(e) {
        const {
            header: t,
            prevHeader: n,
            HeaderElement: r,
            nHeaderHeight: a,
            sortDirection: o,
            strTooltip: l,
            conditionalProps: c,
          } = e,
          h = (0, u.useRef)(null);
        return (
          P(t.column, h),
          (0, s.jsxs)(
            r,
            {
              role: "columnheader",
              ref: h,
              "data-pinned": !!t.column.getIsPinned(),
              className: d()(
                m().ColumnHeader,
                "button" === r && m().SortButton,
                t.column.columnDef.meta?.headerClassname,
              ),
              style: {
                width: `var(--header-${t.id}-size)`,
                height: void 0 !== a ? `${a}px` : void 0,
                ...k(t.column),
              },
              ...c,
              children: [
                n?.column.getCanResize() &&
                  (0, s.jsx)("div", {
                    role: "presentation",
                    onDoubleClick: () => n.column.resetSize(),
                    onMouseDown: n.getResizeHandler(),
                    onTouchStart: n.getResizeHandler(),
                    onClick: (e) => e.stopPropagation(),
                    className: d()(m().ResizeHandle, m().PrevResizeHandle),
                  }),
                t.isPlaceholder
                  ? null
                  : (0, i.Kv)(t.column.columnDef.header, t.getContext()),
                l && (0, s.jsx)(D.o, { tooltip: l }),
                o &&
                  !t.column.columnDef.meta?.bDisableSortButton &&
                  (0, s.jsx)("div", { className: m().SortIndicator }),
                t.column.getCanResize() &&
                  (0, s.jsx)("div", {
                    role: "presentation",
                    onDoubleClick: () => t.column.resetSize(),
                    onMouseDown: t.getResizeHandler(),
                    onTouchStart: t.getResizeHandler(),
                    onClick: (e) => e.stopPropagation(),
                    className: d()(
                      m().ResizeHandle,
                      t.column.getIsResizing() && m().IsResizing,
                    ),
                  }),
              ],
            },
            t.id,
          )
        );
      }
      function F(e) {
        const { cell: t, rowVirtualizer: n, index: i, transform: a } = e,
          o = u.useRef(null),
          l = (0, r.XB)(o, n.measure);
        return (
          P(t.column, o),
          (0, s.jsx)("div", {
            className: d()(
              m().FancyTableCell,
              t.column.columnDef.meta?.cellClassname,
            ),
            "data-index": i,
            "data-table-column-id": t.column.id,
            ref: l,
            style: {
              width: `var(--col-${t.column.id}-size)`,
              transform: a,
              ...k(t.column),
            },
            children: (0, s.jsx)(z, {
              CellComponent: t.column.columnDef.cell,
              context: t.getContext(),
            }),
          })
        );
      }
      const z = u.memo(
        function (e) {
          return (0, i.Kv)(e.CellComponent, e.context);
        },
        (e, t) => e.context.getValue() === t.context.getValue(),
      );
    },
  },
]);
