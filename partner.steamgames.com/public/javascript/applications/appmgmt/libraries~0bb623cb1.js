/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3667],
  {
    33551: (e) => {
      "use strict";
      e.exports = function e(t, r) {
        if (t === r) return !0;
        if (t && r && "object" == typeof t && "object" == typeof r) {
          if (t.constructor !== r.constructor) return !1;
          var i, n, s;
          if (Array.isArray(t)) {
            if ((i = t.length) != r.length) return !1;
            for (n = i; 0 !== n--; ) if (!e(t[n], r[n])) return !1;
            return !0;
          }
          if (t.constructor === RegExp)
            return t.source === r.source && t.flags === r.flags;
          if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === r.valueOf();
          if (t.toString !== Object.prototype.toString)
            return t.toString() === r.toString();
          if ((i = (s = Object.keys(t)).length) !== Object.keys(r).length)
            return !1;
          for (n = i; 0 !== n--; )
            if (!Object.prototype.hasOwnProperty.call(r, s[n])) return !1;
          for (n = i; 0 !== n--; ) {
            var a = s[n];
            if (!e(t[a], r[a])) return !1;
          }
          return !0;
        }
        return t != t && r != r;
      };
    },
    40323: function (e, t) {
      var r, i, n;
      /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/ (i = []),
        (r = function e() {
          var t,
            r =
              "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                  ? window
                  : void 0 !== r
                    ? r
                    : {},
            i = !r.document && !!r.postMessage,
            n = r.IS_PAPA_WORKER || !1,
            s = {},
            a = 0,
            o = {};
          function h(e) {
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
                var t = k(e);
                (t.chunkSize = parseInt(t.chunkSize)),
                  e.step || e.chunk || (t.chunkSize = null),
                  (this._handle = new c(t)),
                  ((this._handle.streamer = this)._config = t);
              }.call(this, e),
              (this.parseChunk = function (e, t) {
                var i = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < i) {
                  let t = this._config.newline;
                  t ||
                    ((s = this._config.quoteChar || '"'),
                    (t = this._handle.guessLineEndings(e, s))),
                    (e = [...e.split(t).slice(i)].join(t));
                }
                this.isFirstChunk &&
                  b(this._config.beforeFirstChunk) &&
                  void 0 !== (s = this._config.beforeFirstChunk(e)) &&
                  (e = s),
                  (this.isFirstChunk = !1),
                  (this._halted = !1),
                  (i = this._partialLine + e);
                var s =
                  ((this._partialLine = ""),
                  this._handle.parse(i, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((e = s.meta.cursor),
                    this._finished ||
                      ((this._partialLine = i.substring(e - this._baseIndex)),
                      (this._baseIndex = e)),
                    s && s.data && (this._rowCount += s.data.length),
                    (i =
                      this._finished ||
                      (this._config.preview &&
                        this._rowCount >= this._config.preview)),
                    n)
                  )
                    r.postMessage({
                      results: s,
                      workerId: o.WORKER_ID,
                      finished: i,
                    });
                  else if (b(this._config.chunk) && !t) {
                    if (
                      (this._config.chunk(s, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = s = void 0;
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
                      !i ||
                      !b(this._config.complete) ||
                      (s && s.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    i || (s && s.meta.paused) || this._nextChunk(),
                    s
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                b(this._config.error)
                  ? this._config.error(e)
                  : n &&
                    this._config.error &&
                    r.postMessage({
                      workerId: o.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function u(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = o.RemoteChunkSize),
              h.call(this, e),
              (this._nextChunk = i
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
                    i ||
                      ((t.onload = v(this._chunkLoaded, this)),
                      (t.onerror = v(this._chunkError, this))),
                    t.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !i,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var e,
                      r = this._config.downloadRequestHeaders;
                    for (e in r) t.setRequestHeader(e, r[e]);
                  }
                  var n;
                  this._config.chunkSize &&
                    ((n = this._start + this._config.chunkSize - 1),
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + n,
                    ));
                  try {
                    t.send(this._config.downloadRequestBody);
                  } catch (e) {
                    this._chunkError(e.message);
                  }
                  i && 0 === t.status && this._chunkError();
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
          function f(e) {
            (e = e || {}).chunkSize || (e.chunkSize = o.LocalChunkSize),
              h.call(this, e);
            var t,
              r,
              i = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (r = e.slice || e.webkitSlice || e.mozSlice),
                i
                  ? (((t = new FileReader()).onload = v(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = v(this._chunkError, this)))
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
                  n =
                    (this._config.chunkSize &&
                      ((n = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (e = r.call(e, this._start, n))),
                    t.readAsText(e, this._config.encoding));
                i || this._chunkLoaded({ target: { result: n } });
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
          function d(e) {
            var t;
            h.call(this, (e = e || {})),
              (this.stream = function (e) {
                return (t = e), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var e, r;
                if (!this._finished)
                  return (
                    (e = this._config.chunkSize),
                    (t = e
                      ? ((r = t.substring(0, e)), t.substring(e))
                      : ((r = t), "")),
                    (this._finished = !t),
                    this.parseChunk(r)
                  );
              });
          }
          function l(e) {
            h.call(this, (e = e || {}));
            var t = [],
              r = !0,
              i = !1;
            (this.pause = function () {
              h.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                h.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (e) {
                (this._input = e),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                i && 1 === t.length && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (r = !0);
              }),
              (this._streamData = v(function (e) {
                try {
                  t.push(
                    "string" == typeof e
                      ? e
                      : e.toString(this._config.encoding),
                  ),
                    r &&
                      ((r = !1),
                      this._checkIsFinished(),
                      this.parseChunk(t.shift()));
                } catch (e) {
                  this._streamError(e);
                }
              }, this)),
              (this._streamError = v(function (e) {
                this._streamCleanUp(), this._sendError(e);
              }, this)),
              (this._streamEnd = v(function () {
                this._streamCleanUp(), (i = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = v(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function c(e) {
            var t,
              r,
              i,
              n,
              s = Math.pow(2, 53),
              a = -s,
              h = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              u =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              f = this,
              d = 0,
              l = 0,
              c = !1,
              _ = !1,
              m = [],
              y = { data: [], errors: [], meta: {} };
            function v(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function w() {
              if (
                (y &&
                  i &&
                  (C(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      o.DefaultDelimiter +
                      "'",
                  ),
                  (i = !1)),
                e.skipEmptyLines &&
                  (y.data = y.data.filter(function (e) {
                    return !v(e);
                  })),
                E())
              ) {
                if (y)
                  if (Array.isArray(y.data[0])) {
                    for (var t = 0; E() && t < y.data.length; t++)
                      y.data[t].forEach(r);
                    y.data.splice(0, 1);
                  } else y.data.forEach(r);
                function r(t, r) {
                  b(e.transformHeader) && (t = e.transformHeader(t, r)),
                    m.push(t);
                }
              }
              function n(t, r) {
                for (var i = e.header ? {} : [], n = 0; n < t.length; n++) {
                  var o = n,
                    f = t[n];
                  (f = ((t, r) =>
                    ((t) => (
                      e.dynamicTypingFunction &&
                        void 0 === e.dynamicTyping[t] &&
                        (e.dynamicTyping[t] = e.dynamicTypingFunction(t)),
                      !0 === (e.dynamicTyping[t] || e.dynamicTyping)
                    ))(t)
                      ? "true" === r ||
                        "TRUE" === r ||
                        ("false" !== r &&
                          "FALSE" !== r &&
                          (((e) => {
                            if (
                              h.test(e) &&
                              ((e = parseFloat(e)), a < e && e < s)
                            )
                              return 1;
                          })(r)
                            ? parseFloat(r)
                            : u.test(r)
                              ? new Date(r)
                              : "" === r
                                ? null
                                : r))
                      : r)(
                    (o = e.header
                      ? n >= m.length
                        ? "__parsed_extra"
                        : m[n]
                      : o),
                    (f = e.transform ? e.transform(f, o) : f),
                  )),
                    "__parsed_extra" === o
                      ? ((i[o] = i[o] || []), i[o].push(f))
                      : (i[o] = f);
                }
                return (
                  e.header &&
                    (n > m.length
                      ? C(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            m.length +
                            " fields but parsed " +
                            n,
                          l + r,
                        )
                      : n < m.length &&
                        C(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            m.length +
                            " fields but parsed " +
                            n,
                          l + r,
                        )),
                  i
                );
              }
              var f;
              y &&
                (e.header || e.dynamicTyping || e.transform) &&
                ((f = 1),
                !y.data.length || Array.isArray(y.data[0])
                  ? ((y.data = y.data.map(n)), (f = y.data.length))
                  : (y.data = n(y.data, 0)),
                e.header && y.meta && (y.meta.fields = m),
                (l += f));
            }
            function E() {
              return e.header && 0 === m.length;
            }
            function C(e, t, r, i) {
              (e = { type: e, code: t, message: r }),
                void 0 !== i && (e.row = i),
                y.errors.push(e);
            }
            b(e.step) &&
              ((n = e.step),
              (e.step = function (t) {
                (y = t),
                  E()
                    ? w()
                    : (w(),
                      0 !== y.data.length &&
                        ((d += t.data.length),
                        e.preview && d > e.preview
                          ? r.abort()
                          : ((y.data = y.data[0]), n(y, f))));
              })),
              (this.parse = function (n, s, a) {
                var h = e.quoteChar || '"';
                return (
                  e.newline || (e.newline = this.guessLineEndings(n, h)),
                  (i = !1),
                  e.delimiter
                    ? b(e.delimiter) &&
                      ((e.delimiter = e.delimiter(n)),
                      (y.meta.delimiter = e.delimiter))
                    : ((h = ((t, r, i, n, s) => {
                        var a, h, u, f;
                        s = s || [
                          ",",
                          "\t",
                          "|",
                          ";",
                          o.RECORD_SEP,
                          o.UNIT_SEP,
                        ];
                        for (var d = 0; d < s.length; d++) {
                          for (
                            var l,
                              c = s[d],
                              p = 0,
                              _ = 0,
                              m = 0,
                              y =
                                ((u = void 0),
                                new g({
                                  comments: n,
                                  delimiter: c,
                                  newline: r,
                                  preview: 10,
                                }).parse(t)),
                              k = 0;
                            k < y.data.length;
                            k++
                          )
                            i && v(y.data[k])
                              ? m++
                              : ((_ += l = y.data[k].length),
                                void 0 === u
                                  ? (u = l)
                                  : 0 < l && ((p += Math.abs(l - u)), (u = l)));
                          0 < y.data.length && (_ /= y.data.length - m),
                            (void 0 === h || p <= h) &&
                              (void 0 === f || f < _) &&
                              1.99 < _ &&
                              ((h = p), (a = c), (f = _));
                        }
                        return {
                          successful: !!(e.delimiter = a),
                          bestDelimiter: a,
                        };
                      })(
                        n,
                        e.newline,
                        e.skipEmptyLines,
                        e.comments,
                        e.delimitersToGuess,
                      )).successful
                        ? (e.delimiter = h.bestDelimiter)
                        : ((i = !0), (e.delimiter = o.DefaultDelimiter)),
                      (y.meta.delimiter = e.delimiter)),
                  (h = k(e)),
                  e.preview && e.header && h.preview++,
                  (t = n),
                  (r = new g(h)),
                  (y = r.parse(t, s, a)),
                  w(),
                  c ? { meta: { paused: !0 } } : y || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return c;
              }),
              (this.pause = function () {
                (c = !0),
                  r.abort(),
                  (t = b(e.chunk) ? "" : t.substring(r.getCharIndex()));
              }),
              (this.resume = function () {
                f.streamer._halted
                  ? ((c = !1), f.streamer.parseChunk(t, !0))
                  : setTimeout(f.resume, 3);
              }),
              (this.aborted = function () {
                return _;
              }),
              (this.abort = function () {
                (_ = !0),
                  r.abort(),
                  (y.meta.aborted = !0),
                  b(e.complete) && e.complete(y),
                  (t = "");
              }),
              (this.guessLineEndings = function (e, t) {
                (e = e.substring(0, 1048576)),
                  (t = new RegExp(p(t) + "([^]*?)" + p(t), "gm"));
                var r = (e = e.replace(t, "")).split("\r");
                if (
                  ((e =
                    1 < (t = e.split("\n")).length &&
                    t[0].length < r[0].length),
                  1 === r.length || e)
                )
                  return "\n";
                for (var i = 0, n = 0; n < r.length; n++)
                  "\n" === r[n][0] && i++;
                return i >= r.length / 2 ? "\r\n" : "\r";
              });
          }
          function p(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function g(e) {
            var t = (e = e || {}).delimiter,
              r = e.newline,
              i = e.comments,
              n = e.step,
              s = e.preview,
              a = e.fastMode,
              h = null,
              u = !1,
              f = null == e.quoteChar ? '"' : e.quoteChar,
              d = f;
            if (
              (void 0 !== e.escapeChar && (d = e.escapeChar),
              ("string" != typeof t || -1 < o.BAD_DELIMITERS.indexOf(t)) &&
                (t = ","),
              i === t)
            )
              throw new Error("Comment character same as delimiter");
            !0 === i
              ? (i = "#")
              : ("string" != typeof i || -1 < o.BAD_DELIMITERS.indexOf(i)) &&
                (i = !1),
              "\n" !== r && "\r" !== r && "\r\n" !== r && (r = "\n");
            var l = 0,
              c = !1;
            (this.parse = function (o, g, _) {
              if ("string" != typeof o)
                throw new Error("Input must be a string");
              var m = o.length,
                y = t.length,
                k = r.length,
                v = i.length,
                w = b(n),
                E = [],
                C = [],
                R = [],
                O = (l = 0);
              if (!o) return P();
              if (a || (!1 !== a && -1 === o.indexOf(f))) {
                for (var S = o.split(r), x = 0; x < S.length; x++) {
                  if (((R = S[x]), (l += R.length), x !== S.length - 1))
                    l += r.length;
                  else if (_) return P();
                  if (!i || R.substring(0, v) !== i) {
                    if (w) {
                      if (((E = []), F(R.split(t)), U(), c)) return P();
                    } else F(R.split(t));
                    if (s && s <= x) return (E = E.slice(0, s)), P(!0);
                  }
                }
                return P();
              }
              for (
                var A = o.indexOf(t, l),
                  I = o.indexOf(r, l),
                  T = new RegExp(p(d) + p(f), "g"),
                  D = o.indexOf(f, l);
                ;
              )
                if (o[l] === f)
                  for (D = l, l++; ; ) {
                    if (-1 === (D = o.indexOf(f, D + 1)))
                      return (
                        _ ||
                          C.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: E.length,
                            index: l,
                          }),
                        z()
                      );
                    if (D === m - 1) return z(o.substring(l, D).replace(T, f));
                    if (f === d && o[D + 1] === d) D++;
                    else if (f === d || 0 === D || o[D - 1] !== d) {
                      -1 !== A && A < D + 1 && (A = o.indexOf(t, D + 1));
                      var L = j(
                        -1 ===
                          (I = -1 !== I && I < D + 1 ? o.indexOf(r, D + 1) : I)
                          ? A
                          : Math.min(A, I),
                      );
                      if (o.substr(D + 1 + L, y) === t) {
                        R.push(o.substring(l, D).replace(T, f)),
                          o[(l = D + 1 + L + y)] !== f && (D = o.indexOf(f, l)),
                          (A = o.indexOf(t, l)),
                          (I = o.indexOf(r, l));
                        break;
                      }
                      if (
                        ((L = j(I)),
                        o.substring(D + 1 + L, D + 1 + L + k) === r)
                      ) {
                        if (
                          (R.push(o.substring(l, D).replace(T, f)),
                          M(D + 1 + L + k),
                          (A = o.indexOf(t, l)),
                          (D = o.indexOf(f, l)),
                          w && (U(), c))
                        )
                          return P();
                        if (s && E.length >= s) return P(!0);
                        break;
                      }
                      C.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: E.length,
                        index: l,
                      }),
                        D++;
                    }
                  }
                else if (i && 0 === R.length && o.substring(l, l + v) === i) {
                  if (-1 === I) return P();
                  (l = I + k), (I = o.indexOf(r, l)), (A = o.indexOf(t, l));
                } else if (-1 !== A && (A < I || -1 === I))
                  R.push(o.substring(l, A)), (l = A + y), (A = o.indexOf(t, l));
                else {
                  if (-1 === I) break;
                  if ((R.push(o.substring(l, I)), M(I + k), w && (U(), c)))
                    return P();
                  if (s && E.length >= s) return P(!0);
                }
              return z();
              function F(e) {
                E.push(e), (O = l);
              }
              function j(e) {
                var t = 0;
                return -1 !== e &&
                  (e = o.substring(D + 1, e)) &&
                  "" === e.trim()
                  ? e.length
                  : t;
              }
              function z(e) {
                return (
                  _ ||
                    (void 0 === e && (e = o.substring(l)),
                    R.push(e),
                    (l = m),
                    F(R),
                    w && U()),
                  P()
                );
              }
              function M(e) {
                (l = e), F(R), (R = []), (I = o.indexOf(r, l));
              }
              function P(i) {
                if (e.header && !g && E.length && !u) {
                  var n = E[0],
                    s = Object.create(null),
                    a = new Set(n);
                  let t = !1;
                  for (let r = 0; r < n.length; r++) {
                    let i = n[r];
                    if (
                      s[
                        (i = b(e.transformHeader) ? e.transformHeader(i, r) : i)
                      ]
                    ) {
                      let e,
                        o = s[i];
                      for (; (e = i + "_" + o), o++, a.has(e); );
                      a.add(e),
                        (n[r] = e),
                        s[i]++,
                        (t = !0),
                        ((h = null === h ? {} : h)[e] = i);
                    } else (s[i] = 1), (n[r] = i);
                    a.add(i);
                  }
                  t && console.warn("Duplicate headers found and renamed."),
                    (u = !0);
                }
                return {
                  data: E,
                  errors: C,
                  meta: {
                    delimiter: t,
                    linebreak: r,
                    aborted: c,
                    truncated: !!i,
                    cursor: O + (g || 0),
                    renamedHeaders: h,
                  },
                };
              }
              function U() {
                n(P()), (E = []), (C = []);
              }
            }),
              (this.abort = function () {
                c = !0;
              }),
              (this.getCharIndex = function () {
                return l;
              });
          }
          function _(e) {
            var t = e.data,
              r = s[t.workerId],
              i = !1;
            if (t.error) r.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var n = {
                abort: function () {
                  (i = !0),
                    m(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: y,
                resume: y,
              };
              if (b(r.userStep)) {
                for (
                  var a = 0;
                  a < t.results.data.length &&
                  (r.userStep(
                    {
                      data: t.results.data[a],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    n,
                  ),
                  !i);
                  a++
                );
                delete t.results;
              } else
                b(r.userChunk) &&
                  (r.userChunk(t.results, n, t.file), delete t.results);
            }
            t.finished && !i && m(t.workerId, t.results);
          }
          function m(e, t) {
            var r = s[e];
            b(r.userComplete) && r.userComplete(t), r.terminate(), delete s[e];
          }
          function y() {
            throw new Error("Not implemented.");
          }
          function k(e) {
            if ("object" != typeof e || null === e) return e;
            var t,
              r = Array.isArray(e) ? [] : {};
            for (t in e) r[t] = k(e[t]);
            return r;
          }
          function v(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function b(e) {
            return "function" == typeof e;
          }
          return (
            (o.parse = function (t, i) {
              var n = (i = i || {}).dynamicTyping || !1;
              if (
                (b(n) && ((i.dynamicTypingFunction = n), (n = {})),
                (i.dynamicTyping = n),
                (i.transform = !!b(i.transform) && i.transform),
                !i.worker || !o.WORKERS_SUPPORTED)
              )
                return (
                  (n = null),
                  o.NODE_STREAM_INPUT,
                  "string" == typeof t
                    ? ((t = ((e) =>
                        65279 !== e.charCodeAt(0) ? e : e.slice(1))(t)),
                      (n = new (i.download ? u : d)(i)))
                    : !0 === t.readable && b(t.read) && b(t.on)
                      ? (n = new l(i))
                      : ((r.File && t instanceof File) ||
                          t instanceof Object) &&
                        (n = new f(i)),
                  n.stream(t)
                );
              ((n = (() => {
                var t;
                return (
                  !!o.WORKERS_SUPPORTED &&
                  ((t = (() => {
                    var t = r.URL || r.webkitURL || null,
                      i = e.toString();
                    return (
                      o.BLOB_URL ||
                      (o.BLOB_URL = t.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            i,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((t = new r.Worker(t)).onmessage = _),
                  (t.id = a++),
                  (s[t.id] = t))
                );
              })()).userStep = i.step),
                (n.userChunk = i.chunk),
                (n.userComplete = i.complete),
                (n.userError = i.error),
                (i.step = b(i.step)),
                (i.chunk = b(i.chunk)),
                (i.complete = b(i.complete)),
                (i.error = b(i.error)),
                delete i.worker,
                n.postMessage({ input: t, config: i, workerId: n.id });
            }),
            (o.unparse = function (e, t) {
              var r = !1,
                i = !0,
                n = ",",
                s = "\r\n",
                a = '"',
                h = a + a,
                u = !1,
                f = null,
                d = !1,
                l =
                  ((() => {
                    if ("object" == typeof t) {
                      if (
                        ("string" != typeof t.delimiter ||
                          o.BAD_DELIMITERS.filter(function (e) {
                            return -1 !== t.delimiter.indexOf(e);
                          }).length ||
                          (n = t.delimiter),
                        ("boolean" != typeof t.quotes &&
                          "function" != typeof t.quotes &&
                          !Array.isArray(t.quotes)) ||
                          (r = t.quotes),
                        ("boolean" != typeof t.skipEmptyLines &&
                          "string" != typeof t.skipEmptyLines) ||
                          (u = t.skipEmptyLines),
                        "string" == typeof t.newline && (s = t.newline),
                        "string" == typeof t.quoteChar && (a = t.quoteChar),
                        "boolean" == typeof t.header && (i = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (0 === t.columns.length)
                          throw new Error("Option columns is empty");
                        f = t.columns;
                      }
                      void 0 !== t.escapeChar && (h = t.escapeChar + a),
                        t.escapeFormulae instanceof RegExp
                          ? (d = t.escapeFormulae)
                          : "boolean" == typeof t.escapeFormulae &&
                            t.escapeFormulae &&
                            (d = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(p(a), "g"));
              if (
                ("string" == typeof e && (e = JSON.parse(e)), Array.isArray(e))
              ) {
                if (!e.length || Array.isArray(e[0])) return c(null, e, u);
                if ("object" == typeof e[0])
                  return c(f || Object.keys(e[0]), e, u);
              } else if ("object" == typeof e)
                return (
                  "string" == typeof e.data && (e.data = JSON.parse(e.data)),
                  Array.isArray(e.data) &&
                    (e.fields || (e.fields = (e.meta && e.meta.fields) || f),
                    e.fields ||
                      (e.fields = Array.isArray(e.data[0])
                        ? e.fields
                        : "object" == typeof e.data[0]
                          ? Object.keys(e.data[0])
                          : []),
                    Array.isArray(e.data[0]) ||
                      "object" == typeof e.data[0] ||
                      (e.data = [e.data])),
                  c(e.fields || [], e.data || [], u)
                );
              throw new Error("Unable to serialize unrecognized input");
              function c(e, t, r) {
                var a = "",
                  o =
                    ("string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t)),
                    Array.isArray(e) && 0 < e.length),
                  h = !Array.isArray(t[0]);
                if (o && i) {
                  for (var u = 0; u < e.length; u++)
                    0 < u && (a += n), (a += g(e[u], u));
                  0 < t.length && (a += s);
                }
                for (var f = 0; f < t.length; f++) {
                  var d = (o ? e : t[f]).length,
                    l = !1,
                    c = o ? 0 === Object.keys(t[f]).length : 0 === t[f].length;
                  if (
                    (r &&
                      !o &&
                      (l =
                        "greedy" === r
                          ? "" === t[f].join("").trim()
                          : 1 === t[f].length && 0 === t[f][0].length),
                    "greedy" === r && o)
                  ) {
                    for (var p = [], _ = 0; _ < d; _++) {
                      var m = h ? e[_] : _;
                      p.push(t[f][m]);
                    }
                    l = "" === p.join("").trim();
                  }
                  if (!l) {
                    for (var y = 0; y < d; y++) {
                      0 < y && !c && (a += n);
                      var k = o && h ? e[y] : y;
                      a += g(t[f][k], y);
                    }
                    f < t.length - 1 && (!r || (0 < d && !c)) && (a += s);
                  }
                }
                return a;
              }
              function g(e, t) {
                var i, s;
                return null == e
                  ? ""
                  : e.constructor === Date
                    ? JSON.stringify(e).slice(1, 25)
                    : ((s = !1),
                      d &&
                        "string" == typeof e &&
                        d.test(e) &&
                        ((e = "'" + e), (s = !0)),
                      (i = e.toString().replace(l, h)),
                      (s =
                        s ||
                        !0 === r ||
                        ("function" == typeof r && r(e, t)) ||
                        (Array.isArray(r) && r[t]) ||
                        ((e, t) => {
                          for (var r = 0; r < t.length; r++)
                            if (-1 < e.indexOf(t[r])) return !0;
                          return !1;
                        })(i, o.BAD_DELIMITERS) ||
                        -1 < i.indexOf(n) ||
                        " " === i.charAt(0) ||
                        " " === i.charAt(i.length - 1))
                        ? a + i + a
                        : i);
              }
            }),
            (o.RECORD_SEP = String.fromCharCode(30)),
            (o.UNIT_SEP = String.fromCharCode(31)),
            (o.BYTE_ORDER_MARK = "\ufeff"),
            (o.BAD_DELIMITERS = ["\r", "\n", '"', o.BYTE_ORDER_MARK]),
            (o.WORKERS_SUPPORTED = !i && !!r.Worker),
            (o.NODE_STREAM_INPUT = 1),
            (o.LocalChunkSize = 10485760),
            (o.RemoteChunkSize = 5242880),
            (o.DefaultDelimiter = ","),
            (o.Parser = g),
            (o.ParserHandle = c),
            (o.NetworkStreamer = u),
            (o.FileStreamer = f),
            (o.StringStreamer = d),
            (o.ReadableStreamStreamer = l),
            r.jQuery &&
              ((t = r.jQuery).fn.parse = function (e) {
                var i = e.config || {},
                  n = [];
                return (
                  this.each(function (e) {
                    if (
                      "INPUT" !== t(this).prop("tagName").toUpperCase() ||
                      "file" !== t(this).attr("type").toLowerCase() ||
                      !r.FileReader ||
                      !this.files ||
                      0 === this.files.length
                    )
                      return !0;
                    for (var s = 0; s < this.files.length; s++)
                      n.push({
                        file: this.files[s],
                        inputElem: this,
                        instanceConfig: t.extend({}, i),
                      });
                  }),
                  s(),
                  this
                );
                function s() {
                  if (0 === n.length) b(e.complete) && e.complete();
                  else {
                    var r,
                      i,
                      s,
                      h,
                      u = n[0];
                    if (b(e.before)) {
                      var f = e.before(u.file, u.inputElem);
                      if ("object" == typeof f) {
                        if ("abort" === f.action)
                          return (
                            (r = "AbortError"),
                            (i = u.file),
                            (s = u.inputElem),
                            (h = f.reason),
                            void (b(e.error) && e.error({ name: r }, i, s, h))
                          );
                        if ("skip" === f.action) return void a();
                        "object" == typeof f.config &&
                          (u.instanceConfig = t.extend(
                            u.instanceConfig,
                            f.config,
                          ));
                      } else if ("skip" === f) return void a();
                    }
                    var d = u.instanceConfig.complete;
                    (u.instanceConfig.complete = function (e) {
                      b(d) && d(e, u.file, u.inputElem), a();
                    }),
                      o.parse(u.file, u.instanceConfig);
                  }
                }
                function a() {
                  n.splice(0, 1), s();
                }
              }),
            n &&
              (r.onmessage = function (e) {
                (e = e.data),
                  void 0 === o.WORKER_ID && e && (o.WORKER_ID = e.workerId),
                  "string" == typeof e.input
                    ? r.postMessage({
                        workerId: o.WORKER_ID,
                        results: o.parse(e.input, e.config),
                        finished: !0,
                      })
                    : ((r.File && e.input instanceof File) ||
                        e.input instanceof Object) &&
                      (e = o.parse(e.input, e.config)) &&
                      r.postMessage({
                        workerId: o.WORKER_ID,
                        results: e,
                        finished: !0,
                      });
              }),
            ((u.prototype = Object.create(h.prototype)).constructor = u),
            ((f.prototype = Object.create(h.prototype)).constructor = f),
            ((d.prototype = Object.create(d.prototype)).constructor = d),
            ((l.prototype = Object.create(h.prototype)).constructor = l),
            o
          );
        }),
        void 0 === (n = "function" == typeof r ? r.apply(t, i) : r) ||
          (e.exports = n);
    },
  },
]);
