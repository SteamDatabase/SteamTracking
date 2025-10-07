/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3516],
  {
    40323: function (e, t) {
      var i, r, s;
      /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/ (r = []),
        (i = function e() {
          var t,
            i =
              "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                  ? window
                  : void 0 !== i
                    ? i
                    : {},
            r = !i.document && !!i.postMessage,
            s = i.IS_PAPA_WORKER || !1,
            n = {},
            o = 0,
            a = {};
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
                var t = b(e);
                (t.chunkSize = parseInt(t.chunkSize)),
                  e.step || e.chunk || (t.chunkSize = null),
                  (this._handle = new f(t)),
                  ((this._handle.streamer = this)._config = t);
              }.call(this, e),
              (this.parseChunk = function (e, t) {
                var r = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < r) {
                  let t = this._config.newline;
                  t ||
                    ((n = this._config.quoteChar || '"'),
                    (t = this._handle.guessLineEndings(e, n))),
                    (e = [...e.split(t).slice(r)].join(t));
                }
                this.isFirstChunk &&
                  v(this._config.beforeFirstChunk) &&
                  void 0 !== (n = this._config.beforeFirstChunk(e)) &&
                  (e = n),
                  (this.isFirstChunk = !1),
                  (this._halted = !1),
                  (r = this._partialLine + e);
                var n =
                  ((this._partialLine = ""),
                  this._handle.parse(r, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((e = n.meta.cursor),
                    this._finished ||
                      ((this._partialLine = r.substring(e - this._baseIndex)),
                      (this._baseIndex = e)),
                    n && n.data && (this._rowCount += n.data.length),
                    (r =
                      this._finished ||
                      (this._config.preview &&
                        this._rowCount >= this._config.preview)),
                    s)
                  )
                    i.postMessage({
                      results: n,
                      workerId: a.WORKER_ID,
                      finished: r,
                    });
                  else if (v(this._config.chunk) && !t) {
                    if (
                      (this._config.chunk(n, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = n = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(n.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(n.errors)),
                      (this._completeResults.meta = n.meta)),
                    this._completed ||
                      !r ||
                      !v(this._config.complete) ||
                      (n && n.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    r || (n && n.meta.paused) || this._nextChunk(),
                    n
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                v(this._config.error)
                  ? this._config.error(e)
                  : s &&
                    this._config.error &&
                    i.postMessage({
                      workerId: a.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function u(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = a.RemoteChunkSize),
              h.call(this, e),
              (this._nextChunk = r
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
                    r ||
                      ((t.onload = k(this._chunkLoaded, this)),
                      (t.onerror = k(this._chunkError, this))),
                    t.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !r,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var e,
                      i = this._config.downloadRequestHeaders;
                    for (e in i) t.setRequestHeader(e, i[e]);
                  }
                  var s;
                  this._config.chunkSize &&
                    ((s = this._start + this._config.chunkSize - 1),
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + s,
                    ));
                  try {
                    t.send(this._config.downloadRequestBody);
                  } catch (e) {
                    this._chunkError(e.message);
                  }
                  r && 0 === t.status && this._chunkError();
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
          function l(e) {
            (e = e || {}).chunkSize || (e.chunkSize = a.LocalChunkSize),
              h.call(this, e);
            var t,
              i,
              r = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (i = e.slice || e.webkitSlice || e.mozSlice),
                r
                  ? (((t = new FileReader()).onload = k(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = k(this._chunkError, this)))
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
                  s =
                    (this._config.chunkSize &&
                      ((s = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (e = i.call(e, this._start, s))),
                    t.readAsText(e, this._config.encoding));
                r || this._chunkLoaded({ target: { result: s } });
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
                var e, i;
                if (!this._finished)
                  return (
                    (e = this._config.chunkSize),
                    (t = e
                      ? ((i = t.substring(0, e)), t.substring(e))
                      : ((i = t), "")),
                    (this._finished = !t),
                    this.parseChunk(i)
                  );
              });
          }
          function c(e) {
            h.call(this, (e = e || {}));
            var t = [],
              i = !0,
              r = !1;
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
                r && 1 === t.length && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (i = !0);
              }),
              (this._streamData = k(function (e) {
                try {
                  t.push(
                    "string" == typeof e
                      ? e
                      : e.toString(this._config.encoding),
                  ),
                    i &&
                      ((i = !1),
                      this._checkIsFinished(),
                      this.parseChunk(t.shift()));
                } catch (e) {
                  this._streamError(e);
                }
              }, this)),
              (this._streamError = k(function (e) {
                this._streamCleanUp(), this._sendError(e);
              }, this)),
              (this._streamEnd = k(function () {
                this._streamCleanUp(), (r = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = k(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function f(e) {
            var t,
              i,
              r,
              s,
              n = Math.pow(2, 53),
              o = -n,
              h = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              u =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              l = this,
              d = 0,
              c = 0,
              f = !1,
              m = !1,
              _ = [],
              y = { data: [], errors: [], meta: {} };
            function k(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function E() {
              if (
                (y &&
                  r &&
                  (w(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      a.DefaultDelimiter +
                      "'",
                  ),
                  (r = !1)),
                e.skipEmptyLines &&
                  (y.data = y.data.filter(function (e) {
                    return !k(e);
                  })),
                R())
              ) {
                if (y)
                  if (Array.isArray(y.data[0])) {
                    for (var t = 0; R() && t < y.data.length; t++)
                      y.data[t].forEach(i);
                    y.data.splice(0, 1);
                  } else y.data.forEach(i);
                function i(t, i) {
                  v(e.transformHeader) && (t = e.transformHeader(t, i)),
                    _.push(t);
                }
              }
              function s(t, i) {
                for (var r = e.header ? {} : [], s = 0; s < t.length; s++) {
                  var a = s,
                    l = t[s];
                  (l = ((t, i) =>
                    ((t) => (
                      e.dynamicTypingFunction &&
                        void 0 === e.dynamicTyping[t] &&
                        (e.dynamicTyping[t] = e.dynamicTypingFunction(t)),
                      !0 === (e.dynamicTyping[t] || e.dynamicTyping)
                    ))(t)
                      ? "true" === i ||
                        "TRUE" === i ||
                        ("false" !== i &&
                          "FALSE" !== i &&
                          (((e) => {
                            if (
                              h.test(e) &&
                              ((e = parseFloat(e)), o < e && e < n)
                            )
                              return 1;
                          })(i)
                            ? parseFloat(i)
                            : u.test(i)
                              ? new Date(i)
                              : "" === i
                                ? null
                                : i))
                      : i)(
                    (a = e.header
                      ? s >= _.length
                        ? "__parsed_extra"
                        : _[s]
                      : a),
                    (l = e.transform ? e.transform(l, a) : l),
                  )),
                    "__parsed_extra" === a
                      ? ((r[a] = r[a] || []), r[a].push(l))
                      : (r[a] = l);
                }
                return (
                  e.header &&
                    (s > _.length
                      ? w(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            _.length +
                            " fields but parsed " +
                            s,
                          c + i,
                        )
                      : s < _.length &&
                        w(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            _.length +
                            " fields but parsed " +
                            s,
                          c + i,
                        )),
                  r
                );
              }
              var l;
              y &&
                (e.header || e.dynamicTyping || e.transform) &&
                ((l = 1),
                !y.data.length || Array.isArray(y.data[0])
                  ? ((y.data = y.data.map(s)), (l = y.data.length))
                  : (y.data = s(y.data, 0)),
                e.header && y.meta && (y.meta.fields = _),
                (c += l));
            }
            function R() {
              return e.header && 0 === _.length;
            }
            function w(e, t, i, r) {
              (e = { type: e, code: t, message: i }),
                void 0 !== r && (e.row = r),
                y.errors.push(e);
            }
            v(e.step) &&
              ((s = e.step),
              (e.step = function (t) {
                (y = t),
                  R()
                    ? E()
                    : (E(),
                      0 !== y.data.length &&
                        ((d += t.data.length),
                        e.preview && d > e.preview
                          ? i.abort()
                          : ((y.data = y.data[0]), s(y, l))));
              })),
              (this.parse = function (s, n, o) {
                var h = e.quoteChar || '"';
                return (
                  e.newline || (e.newline = this.guessLineEndings(s, h)),
                  (r = !1),
                  e.delimiter
                    ? v(e.delimiter) &&
                      ((e.delimiter = e.delimiter(s)),
                      (y.meta.delimiter = e.delimiter))
                    : ((h = ((t, i, r, s, n) => {
                        var o, h, u, l;
                        n = n || [
                          ",",
                          "\t",
                          "|",
                          ";",
                          a.RECORD_SEP,
                          a.UNIT_SEP,
                        ];
                        for (var d = 0; d < n.length; d++) {
                          for (
                            var c,
                              f = n[d],
                              p = 0,
                              m = 0,
                              _ = 0,
                              y =
                                ((u = void 0),
                                new g({
                                  comments: s,
                                  delimiter: f,
                                  newline: i,
                                  preview: 10,
                                }).parse(t)),
                              b = 0;
                            b < y.data.length;
                            b++
                          )
                            r && k(y.data[b])
                              ? _++
                              : ((m += c = y.data[b].length),
                                void 0 === u
                                  ? (u = c)
                                  : 0 < c && ((p += Math.abs(c - u)), (u = c)));
                          0 < y.data.length && (m /= y.data.length - _),
                            (void 0 === h || p <= h) &&
                              (void 0 === l || l < m) &&
                              1.99 < m &&
                              ((h = p), (o = f), (l = m));
                        }
                        return {
                          successful: !!(e.delimiter = o),
                          bestDelimiter: o,
                        };
                      })(
                        s,
                        e.newline,
                        e.skipEmptyLines,
                        e.comments,
                        e.delimitersToGuess,
                      )).successful
                        ? (e.delimiter = h.bestDelimiter)
                        : ((r = !0), (e.delimiter = a.DefaultDelimiter)),
                      (y.meta.delimiter = e.delimiter)),
                  (h = b(e)),
                  e.preview && e.header && h.preview++,
                  (t = s),
                  (i = new g(h)),
                  (y = i.parse(t, n, o)),
                  E(),
                  f ? { meta: { paused: !0 } } : y || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return f;
              }),
              (this.pause = function () {
                (f = !0),
                  i.abort(),
                  (t = v(e.chunk) ? "" : t.substring(i.getCharIndex()));
              }),
              (this.resume = function () {
                l.streamer._halted
                  ? ((f = !1), l.streamer.parseChunk(t, !0))
                  : setTimeout(l.resume, 3);
              }),
              (this.aborted = function () {
                return m;
              }),
              (this.abort = function () {
                (m = !0),
                  i.abort(),
                  (y.meta.aborted = !0),
                  v(e.complete) && e.complete(y),
                  (t = "");
              }),
              (this.guessLineEndings = function (e, t) {
                (e = e.substring(0, 1048576)),
                  (t = new RegExp(p(t) + "([^]*?)" + p(t), "gm"));
                var i = (e = e.replace(t, "")).split("\r");
                if (
                  ((e =
                    1 < (t = e.split("\n")).length &&
                    t[0].length < i[0].length),
                  1 === i.length || e)
                )
                  return "\n";
                for (var r = 0, s = 0; s < i.length; s++)
                  "\n" === i[s][0] && r++;
                return r >= i.length / 2 ? "\r\n" : "\r";
              });
          }
          function p(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function g(e) {
            var t = (e = e || {}).delimiter,
              i = e.newline,
              r = e.comments,
              s = e.step,
              n = e.preview,
              o = e.fastMode,
              h = null,
              u = !1,
              l = null == e.quoteChar ? '"' : e.quoteChar,
              d = l;
            if (
              (void 0 !== e.escapeChar && (d = e.escapeChar),
              ("string" != typeof t || -1 < a.BAD_DELIMITERS.indexOf(t)) &&
                (t = ","),
              r === t)
            )
              throw new Error("Comment character same as delimiter");
            !0 === r
              ? (r = "#")
              : ("string" != typeof r || -1 < a.BAD_DELIMITERS.indexOf(r)) &&
                (r = !1),
              "\n" !== i && "\r" !== i && "\r\n" !== i && (i = "\n");
            var c = 0,
              f = !1;
            (this.parse = function (a, g, m) {
              if ("string" != typeof a)
                throw new Error("Input must be a string");
              var _ = a.length,
                y = t.length,
                b = i.length,
                k = r.length,
                E = v(s),
                R = [],
                w = [],
                C = [],
                O = (c = 0);
              if (!a) return z();
              if (o || (!1 !== o && -1 === a.indexOf(l))) {
                for (var S = a.split(i), x = 0; x < S.length; x++) {
                  if (((C = S[x]), (c += C.length), x !== S.length - 1))
                    c += i.length;
                  else if (m) return z();
                  if (!r || C.substring(0, k) !== r) {
                    if (E) {
                      if (((R = []), F(C.split(t)), U(), f)) return z();
                    } else F(C.split(t));
                    if (n && n <= x) return (R = R.slice(0, n)), z(!0);
                  }
                }
                return z();
              }
              for (
                var I = a.indexOf(t, c),
                  L = a.indexOf(i, c),
                  A = new RegExp(p(d) + p(l), "g"),
                  T = a.indexOf(l, c);
                ;
              )
                if (a[c] === l)
                  for (T = c, c++; ; ) {
                    if (-1 === (T = a.indexOf(l, T + 1)))
                      return (
                        m ||
                          w.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: R.length,
                            index: c,
                          }),
                        j()
                      );
                    if (T === _ - 1) return j(a.substring(c, T).replace(A, l));
                    if (l === d && a[T + 1] === d) T++;
                    else if (l === d || 0 === T || a[T - 1] !== d) {
                      -1 !== I && I < T + 1 && (I = a.indexOf(t, T + 1));
                      var D = M(
                        -1 ===
                          (L = -1 !== L && L < T + 1 ? a.indexOf(i, T + 1) : L)
                          ? I
                          : Math.min(I, L),
                      );
                      if (a.substr(T + 1 + D, y) === t) {
                        C.push(a.substring(c, T).replace(A, l)),
                          a[(c = T + 1 + D + y)] !== l && (T = a.indexOf(l, c)),
                          (I = a.indexOf(t, c)),
                          (L = a.indexOf(i, c));
                        break;
                      }
                      if (
                        ((D = M(L)),
                        a.substring(T + 1 + D, T + 1 + D + b) === i)
                      ) {
                        if (
                          (C.push(a.substring(c, T).replace(A, l)),
                          q(T + 1 + D + b),
                          (I = a.indexOf(t, c)),
                          (T = a.indexOf(l, c)),
                          E && (U(), f))
                        )
                          return z();
                        if (n && R.length >= n) return z(!0);
                        break;
                      }
                      w.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: R.length,
                        index: c,
                      }),
                        T++;
                    }
                  }
                else if (r && 0 === C.length && a.substring(c, c + k) === r) {
                  if (-1 === L) return z();
                  (c = L + b), (L = a.indexOf(i, c)), (I = a.indexOf(t, c));
                } else if (-1 !== I && (I < L || -1 === L))
                  C.push(a.substring(c, I)), (c = I + y), (I = a.indexOf(t, c));
                else {
                  if (-1 === L) break;
                  if ((C.push(a.substring(c, L)), q(L + b), E && (U(), f)))
                    return z();
                  if (n && R.length >= n) return z(!0);
                }
              return j();
              function F(e) {
                R.push(e), (O = c);
              }
              function M(e) {
                var t = 0;
                return -1 !== e &&
                  (e = a.substring(T + 1, e)) &&
                  "" === e.trim()
                  ? e.length
                  : t;
              }
              function j(e) {
                return (
                  m ||
                    (void 0 === e && (e = a.substring(c)),
                    C.push(e),
                    (c = _),
                    F(C),
                    E && U()),
                  z()
                );
              }
              function q(e) {
                (c = e), F(C), (C = []), (L = a.indexOf(i, c));
              }
              function z(r) {
                if (e.header && !g && R.length && !u) {
                  var s = R[0],
                    n = Object.create(null),
                    o = new Set(s);
                  let t = !1;
                  for (let i = 0; i < s.length; i++) {
                    let r = s[i];
                    if (
                      n[
                        (r = v(e.transformHeader) ? e.transformHeader(r, i) : r)
                      ]
                    ) {
                      let e,
                        a = n[r];
                      for (; (e = r + "_" + a), a++, o.has(e); );
                      o.add(e),
                        (s[i] = e),
                        n[r]++,
                        (t = !0),
                        ((h = null === h ? {} : h)[e] = r);
                    } else (n[r] = 1), (s[i] = r);
                    o.add(r);
                  }
                  t && console.warn("Duplicate headers found and renamed."),
                    (u = !0);
                }
                return {
                  data: R,
                  errors: w,
                  meta: {
                    delimiter: t,
                    linebreak: i,
                    aborted: f,
                    truncated: !!r,
                    cursor: O + (g || 0),
                    renamedHeaders: h,
                  },
                };
              }
              function U() {
                s(z()), (R = []), (w = []);
              }
            }),
              (this.abort = function () {
                f = !0;
              }),
              (this.getCharIndex = function () {
                return c;
              });
          }
          function m(e) {
            var t = e.data,
              i = n[t.workerId],
              r = !1;
            if (t.error) i.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var s = {
                abort: function () {
                  (r = !0),
                    _(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: y,
                resume: y,
              };
              if (v(i.userStep)) {
                for (
                  var o = 0;
                  o < t.results.data.length &&
                  (i.userStep(
                    {
                      data: t.results.data[o],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    s,
                  ),
                  !r);
                  o++
                );
                delete t.results;
              } else
                v(i.userChunk) &&
                  (i.userChunk(t.results, s, t.file), delete t.results);
            }
            t.finished && !r && _(t.workerId, t.results);
          }
          function _(e, t) {
            var i = n[e];
            v(i.userComplete) && i.userComplete(t), i.terminate(), delete n[e];
          }
          function y() {
            throw new Error("Not implemented.");
          }
          function b(e) {
            if ("object" != typeof e || null === e) return e;
            var t,
              i = Array.isArray(e) ? [] : {};
            for (t in e) i[t] = b(e[t]);
            return i;
          }
          function k(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function v(e) {
            return "function" == typeof e;
          }
          return (
            (a.parse = function (t, r) {
              var s = (r = r || {}).dynamicTyping || !1;
              if (
                (v(s) && ((r.dynamicTypingFunction = s), (s = {})),
                (r.dynamicTyping = s),
                (r.transform = !!v(r.transform) && r.transform),
                !r.worker || !a.WORKERS_SUPPORTED)
              )
                return (
                  (s = null),
                  a.NODE_STREAM_INPUT,
                  "string" == typeof t
                    ? ((t = ((e) =>
                        65279 !== e.charCodeAt(0) ? e : e.slice(1))(t)),
                      (s = new (r.download ? u : d)(r)))
                    : !0 === t.readable && v(t.read) && v(t.on)
                      ? (s = new c(r))
                      : ((i.File && t instanceof File) ||
                          t instanceof Object) &&
                        (s = new l(r)),
                  s.stream(t)
                );
              ((s = (() => {
                var t;
                return (
                  !!a.WORKERS_SUPPORTED &&
                  ((t = (() => {
                    var t = i.URL || i.webkitURL || null,
                      r = e.toString();
                    return (
                      a.BLOB_URL ||
                      (a.BLOB_URL = t.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            r,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((t = new i.Worker(t)).onmessage = m),
                  (t.id = o++),
                  (n[t.id] = t))
                );
              })()).userStep = r.step),
                (s.userChunk = r.chunk),
                (s.userComplete = r.complete),
                (s.userError = r.error),
                (r.step = v(r.step)),
                (r.chunk = v(r.chunk)),
                (r.complete = v(r.complete)),
                (r.error = v(r.error)),
                delete r.worker,
                s.postMessage({ input: t, config: r, workerId: s.id });
            }),
            (a.unparse = function (e, t) {
              var i = !1,
                r = !0,
                s = ",",
                n = "\r\n",
                o = '"',
                h = o + o,
                u = !1,
                l = null,
                d = !1,
                c =
                  ((() => {
                    if ("object" == typeof t) {
                      if (
                        ("string" != typeof t.delimiter ||
                          a.BAD_DELIMITERS.filter(function (e) {
                            return -1 !== t.delimiter.indexOf(e);
                          }).length ||
                          (s = t.delimiter),
                        ("boolean" != typeof t.quotes &&
                          "function" != typeof t.quotes &&
                          !Array.isArray(t.quotes)) ||
                          (i = t.quotes),
                        ("boolean" != typeof t.skipEmptyLines &&
                          "string" != typeof t.skipEmptyLines) ||
                          (u = t.skipEmptyLines),
                        "string" == typeof t.newline && (n = t.newline),
                        "string" == typeof t.quoteChar && (o = t.quoteChar),
                        "boolean" == typeof t.header && (r = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (0 === t.columns.length)
                          throw new Error("Option columns is empty");
                        l = t.columns;
                      }
                      void 0 !== t.escapeChar && (h = t.escapeChar + o),
                        t.escapeFormulae instanceof RegExp
                          ? (d = t.escapeFormulae)
                          : "boolean" == typeof t.escapeFormulae &&
                            t.escapeFormulae &&
                            (d = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(p(o), "g"));
              if (
                ("string" == typeof e && (e = JSON.parse(e)), Array.isArray(e))
              ) {
                if (!e.length || Array.isArray(e[0])) return f(null, e, u);
                if ("object" == typeof e[0])
                  return f(l || Object.keys(e[0]), e, u);
              } else if ("object" == typeof e)
                return (
                  "string" == typeof e.data && (e.data = JSON.parse(e.data)),
                  Array.isArray(e.data) &&
                    (e.fields || (e.fields = (e.meta && e.meta.fields) || l),
                    e.fields ||
                      (e.fields = Array.isArray(e.data[0])
                        ? e.fields
                        : "object" == typeof e.data[0]
                          ? Object.keys(e.data[0])
                          : []),
                    Array.isArray(e.data[0]) ||
                      "object" == typeof e.data[0] ||
                      (e.data = [e.data])),
                  f(e.fields || [], e.data || [], u)
                );
              throw new Error("Unable to serialize unrecognized input");
              function f(e, t, i) {
                var o = "",
                  a =
                    ("string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t)),
                    Array.isArray(e) && 0 < e.length),
                  h = !Array.isArray(t[0]);
                if (a && r) {
                  for (var u = 0; u < e.length; u++)
                    0 < u && (o += s), (o += g(e[u], u));
                  0 < t.length && (o += n);
                }
                for (var l = 0; l < t.length; l++) {
                  var d = (a ? e : t[l]).length,
                    c = !1,
                    f = a ? 0 === Object.keys(t[l]).length : 0 === t[l].length;
                  if (
                    (i &&
                      !a &&
                      (c =
                        "greedy" === i
                          ? "" === t[l].join("").trim()
                          : 1 === t[l].length && 0 === t[l][0].length),
                    "greedy" === i && a)
                  ) {
                    for (var p = [], m = 0; m < d; m++) {
                      var _ = h ? e[m] : m;
                      p.push(t[l][_]);
                    }
                    c = "" === p.join("").trim();
                  }
                  if (!c) {
                    for (var y = 0; y < d; y++) {
                      0 < y && !f && (o += s);
                      var b = a && h ? e[y] : y;
                      o += g(t[l][b], y);
                    }
                    l < t.length - 1 && (!i || (0 < d && !f)) && (o += n);
                  }
                }
                return o;
              }
              function g(e, t) {
                var r, n;
                return null == e
                  ? ""
                  : e.constructor === Date
                    ? JSON.stringify(e).slice(1, 25)
                    : ((n = !1),
                      d &&
                        "string" == typeof e &&
                        d.test(e) &&
                        ((e = "'" + e), (n = !0)),
                      (r = e.toString().replace(c, h)),
                      (n =
                        n ||
                        !0 === i ||
                        ("function" == typeof i && i(e, t)) ||
                        (Array.isArray(i) && i[t]) ||
                        ((e, t) => {
                          for (var i = 0; i < t.length; i++)
                            if (-1 < e.indexOf(t[i])) return !0;
                          return !1;
                        })(r, a.BAD_DELIMITERS) ||
                        -1 < r.indexOf(s) ||
                        " " === r.charAt(0) ||
                        " " === r.charAt(r.length - 1))
                        ? o + r + o
                        : r);
              }
            }),
            (a.RECORD_SEP = String.fromCharCode(30)),
            (a.UNIT_SEP = String.fromCharCode(31)),
            (a.BYTE_ORDER_MARK = "\ufeff"),
            (a.BAD_DELIMITERS = ["\r", "\n", '"', a.BYTE_ORDER_MARK]),
            (a.WORKERS_SUPPORTED = !r && !!i.Worker),
            (a.NODE_STREAM_INPUT = 1),
            (a.LocalChunkSize = 10485760),
            (a.RemoteChunkSize = 5242880),
            (a.DefaultDelimiter = ","),
            (a.Parser = g),
            (a.ParserHandle = f),
            (a.NetworkStreamer = u),
            (a.FileStreamer = l),
            (a.StringStreamer = d),
            (a.ReadableStreamStreamer = c),
            i.jQuery &&
              ((t = i.jQuery).fn.parse = function (e) {
                var r = e.config || {},
                  s = [];
                return (
                  this.each(function (e) {
                    if (
                      "INPUT" !== t(this).prop("tagName").toUpperCase() ||
                      "file" !== t(this).attr("type").toLowerCase() ||
                      !i.FileReader ||
                      !this.files ||
                      0 === this.files.length
                    )
                      return !0;
                    for (var n = 0; n < this.files.length; n++)
                      s.push({
                        file: this.files[n],
                        inputElem: this,
                        instanceConfig: t.extend({}, r),
                      });
                  }),
                  n(),
                  this
                );
                function n() {
                  if (0 === s.length) v(e.complete) && e.complete();
                  else {
                    var i,
                      r,
                      n,
                      h,
                      u = s[0];
                    if (v(e.before)) {
                      var l = e.before(u.file, u.inputElem);
                      if ("object" == typeof l) {
                        if ("abort" === l.action)
                          return (
                            (i = "AbortError"),
                            (r = u.file),
                            (n = u.inputElem),
                            (h = l.reason),
                            void (v(e.error) && e.error({ name: i }, r, n, h))
                          );
                        if ("skip" === l.action) return void o();
                        "object" == typeof l.config &&
                          (u.instanceConfig = t.extend(
                            u.instanceConfig,
                            l.config,
                          ));
                      } else if ("skip" === l) return void o();
                    }
                    var d = u.instanceConfig.complete;
                    (u.instanceConfig.complete = function (e) {
                      v(d) && d(e, u.file, u.inputElem), o();
                    }),
                      a.parse(u.file, u.instanceConfig);
                  }
                }
                function o() {
                  s.splice(0, 1), n();
                }
              }),
            s &&
              (i.onmessage = function (e) {
                (e = e.data),
                  void 0 === a.WORKER_ID && e && (a.WORKER_ID = e.workerId),
                  "string" == typeof e.input
                    ? i.postMessage({
                        workerId: a.WORKER_ID,
                        results: a.parse(e.input, e.config),
                        finished: !0,
                      })
                    : ((i.File && e.input instanceof File) ||
                        e.input instanceof Object) &&
                      (e = a.parse(e.input, e.config)) &&
                      i.postMessage({
                        workerId: a.WORKER_ID,
                        results: e,
                        finished: !0,
                      });
              }),
            ((u.prototype = Object.create(h.prototype)).constructor = u),
            ((l.prototype = Object.create(h.prototype)).constructor = l),
            ((d.prototype = Object.create(d.prototype)).constructor = d),
            ((c.prototype = Object.create(h.prototype)).constructor = c),
            a
          );
        }),
        void 0 === (s = "function" == typeof i ? i.apply(t, r) : i) ||
          (e.exports = s);
    },
    54806: (e, t, i) => {
      "use strict";
      i.d(t, { E: () => m });
      var r = i(90626),
        s = i(86709),
        n = i(45747),
        o = i(74500),
        a = i(57168);
      function h(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var u = class extends o.Q {
          #e;
          #t;
          #i;
          #r;
          #s;
          #n;
          #o;
          #a;
          constructor(e, t, i) {
            super(),
              (this.#e = e),
              (this.#r = i),
              (this.#i = []),
              (this.#s = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#s.forEach((e) => {
                e.subscribe((t) => {
                  this.#h(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#s.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, i) {
            (this.#i = e),
              (this.#r = t),
              s.j.batch(() => {
                const e = this.#s,
                  t = this.#u(this.#i);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, i),
                );
                const r = t.map((e) => e.observer),
                  s = r.map((e) => e.getCurrentResult()),
                  n = r.some((t, i) => t !== e[i]);
                (e.length !== r.length || n) &&
                  ((this.#s = r),
                  (this.#t = s),
                  this.hasListeners() &&
                    (h(e, r).forEach((e) => {
                      e.destroy();
                    }),
                    h(r, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#h(e, t);
                      });
                    }),
                    this.#l()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#s.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#s;
          }
          getOptimisticResult(e, t) {
            const i = this.#u(e).map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions),
            );
            return [i, (e) => this.#d(e ?? i, t), () => this.#c(i, e)];
          }
          #c(e, t) {
            const i = this.#u(t);
            return i.map((t, r) => {
              const s = e[r];
              return t.defaultedQueryOptions.notifyOnChangeProps
                ? s
                : t.observer.trackResult(s, (e) => {
                    i.forEach((t) => {
                      t.observer.trackProp(e);
                    });
                  });
            });
          }
          #d(e, t) {
            return t
              ? ((this.#n && this.#t === this.#a && t === this.#o) ||
                  ((this.#o = t),
                  (this.#a = this.#t),
                  (this.#n = (0, a.BH)(this.#n, t(e)))),
                this.#n)
              : e;
          }
          #u(e) {
            const t = new Map(this.#s.map((e) => [e.options.queryHash, e])),
              i = [];
            return (
              e.forEach((e) => {
                const r = this.#e.defaultQueryOptions(e),
                  s = t.get(r.queryHash);
                s
                  ? i.push({ defaultedQueryOptions: r, observer: s })
                  : i.push({
                      defaultedQueryOptions: r,
                      observer: new n.$(this.#e, r),
                    });
              }),
              i
            );
          }
          #h(e, t) {
            const i = this.#s.indexOf(e);
            -1 !== i &&
              ((this.#t = (function (e, t, i) {
                const r = e.slice(0);
                return (r[t] = i), r;
              })(this.#t, i, t)),
              this.#l());
          }
          #l() {
            if (this.hasListeners()) {
              this.#n !==
                this.#d(this.#c(this.#t, this.#i), this.#r?.combine) &&
                s.j.batch(() => {
                  this.listeners.forEach((e) => {
                    e(this.#t);
                  });
                });
            }
          }
        },
        l = i(75233),
        d = i(22730),
        c = i(43424),
        f = i(19086),
        p = i(44407),
        g = i(19866);
      function m({ queries: e, ...t }, i) {
        const o = (0, l.jE)(i),
          a = (0, d.w)(),
          h = (0, c.h)(),
          m = r.useMemo(
            () =>
              e.map((e) => {
                const t = o.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = a ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, o, a],
          );
        m.forEach((e) => {
          (0, p.jv)(e), (0, f.LJ)(e, h);
        }),
          (0, f.wZ)(h);
        const [_] = r.useState(() => new u(o, m, t)),
          [y, b, k] = _.getOptimisticResult(m, t.combine);
        r.useSyncExternalStore(
          r.useCallback(
            (e) => (a ? g.l : _.subscribe(s.j.batchCalls(e))),
            [_, a],
          ),
          () => _.getCurrentResult(),
          () => _.getCurrentResult(),
        ),
          r.useEffect(() => {
            _.setQueries(m, t, { listeners: !1 });
          }, [m, t, _]);
        const v = y.some((e, t) => (0, p.EU)(m[t], e))
          ? y.flatMap((e, t) => {
              const i = m[t];
              if (i) {
                const t = new n.$(o, i);
                if ((0, p.EU)(i, e)) return (0, p.iL)(i, t, h);
                (0, p.nE)(e, a) && (0, p.iL)(i, t, h);
              }
              return [];
            })
          : [];
        if (v.length > 0) throw Promise.all(v);
        const E = y.find((e, t) => {
          const i = m[t];
          return (
            i &&
            (0, f.$1)({
              result: e,
              errorResetBoundary: h,
              throwOnError: i.throwOnError,
              query: o.getQueryCache().get(i.queryHash),
            })
          );
        });
        if (E?.error) throw E.error;
        return b(k());
      }
    },
  },
]);
