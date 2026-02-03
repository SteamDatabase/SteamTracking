/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9505],
  {
    51520: (e) => {
      e.exports = {
        SavedImage: "_1y3QVgsz4daj3E3S5wzwt-",
        SaveButtonCtn: "_2Edwnbc-tjinTT_s7zIKTd",
        SaveButton: "_2hloqzkRkAWkw50l4XPN-N",
        HaventSavedInAShortTime: "_3xoBR2gVk2F0Bmejh20Yhl",
        HaventSavedInALongTime: "_1bg505mDp3agK0eHP0NoxI",
        Pulse: "_3oWE-wt1PQ7Rv2IJ0vCmO",
        SaveSuccessNotification: "_1gabCN13JTZzv2A2fXqGve",
        slideIn: "_2kGhkRiew8we__yyM1878e",
        slideOut: "_2oAIIbl5uoREv1Es4TZkUQ",
        SaveSuccessTitle: "_1d5GXYH4AY9WFkoszJVzsQ",
      };
    },
    40323: function (e, t) {
      var i, n, r;
      /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/ (n = []),
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
            n = !i.document && !!i.postMessage,
            r = i.IS_PAPA_WORKER || !1,
            s = {},
            a = 0,
            o = {};
          function u(e) {
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
                var t = w(e);
                (t.chunkSize = parseInt(t.chunkSize)),
                  e.step || e.chunk || (t.chunkSize = null),
                  (this._handle = new f(t)),
                  ((this._handle.streamer = this)._config = t);
              }.call(this, e),
              (this.parseChunk = function (e, t) {
                var n = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < n) {
                  let t = this._config.newline;
                  t ||
                    ((s = this._config.quoteChar || '"'),
                    (t = this._handle.guessLineEndings(e, s))),
                    (e = [...e.split(t).slice(n)].join(t));
                }
                this.isFirstChunk &&
                  v(this._config.beforeFirstChunk) &&
                  void 0 !== (s = this._config.beforeFirstChunk(e)) &&
                  (e = s),
                  (this.isFirstChunk = !1),
                  (this._halted = !1),
                  (n = this._partialLine + e);
                var s =
                  ((this._partialLine = ""),
                  this._handle.parse(n, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((e = s.meta.cursor),
                    this._finished ||
                      ((this._partialLine = n.substring(e - this._baseIndex)),
                      (this._baseIndex = e)),
                    s && s.data && (this._rowCount += s.data.length),
                    (n =
                      this._finished ||
                      (this._config.preview &&
                        this._rowCount >= this._config.preview)),
                    r)
                  )
                    i.postMessage({
                      results: s,
                      workerId: o.WORKER_ID,
                      finished: n,
                    });
                  else if (v(this._config.chunk) && !t) {
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
                      !n ||
                      !v(this._config.complete) ||
                      (s && s.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    n || (s && s.meta.paused) || this._nextChunk(),
                    s
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                v(this._config.error)
                  ? this._config.error(e)
                  : r &&
                    this._config.error &&
                    i.postMessage({
                      workerId: o.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function h(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = o.RemoteChunkSize),
              u.call(this, e),
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
                      ((t.onload = E(this._chunkLoaded, this)),
                      (t.onerror = E(this._chunkError, this))),
                    t.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !n,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var e,
                      i = this._config.downloadRequestHeaders;
                    for (e in i) t.setRequestHeader(e, i[e]);
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
                  n && 0 === t.status && this._chunkError();
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
            (e = e || {}).chunkSize || (e.chunkSize = o.LocalChunkSize),
              u.call(this, e);
            var t,
              i,
              n = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (i = e.slice || e.webkitSlice || e.mozSlice),
                n
                  ? (((t = new FileReader()).onload = E(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = E(this._chunkError, this)))
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
                      (e = i.call(e, this._start, r))),
                    t.readAsText(e, this._config.encoding));
                n || this._chunkLoaded({ target: { result: r } });
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
            u.call(this, (e = e || {})),
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
            u.call(this, (e = e || {}));
            var t = [],
              i = !0,
              n = !1;
            (this.pause = function () {
              u.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                u.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (e) {
                (this._input = e),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                n && 1 === t.length && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (i = !0);
              }),
              (this._streamData = E(function (e) {
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
              (this._streamError = E(function (e) {
                this._streamCleanUp(), this._sendError(e);
              }, this)),
              (this._streamEnd = E(function () {
                this._streamCleanUp(), (n = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = E(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function f(e) {
            var t,
              i,
              n,
              r,
              s = Math.pow(2, 53),
              a = -s,
              u = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              h =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              l = this,
              d = 0,
              c = 0,
              f = !1,
              m = !1,
              _ = [],
              y = { data: [], errors: [], meta: {} };
            function E(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function k() {
              if (
                (y &&
                  n &&
                  (R(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      o.DefaultDelimiter +
                      "'",
                  ),
                  (n = !1)),
                e.skipEmptyLines &&
                  (y.data = y.data.filter(function (e) {
                    return !E(e);
                  })),
                b())
              ) {
                if (y)
                  if (Array.isArray(y.data[0])) {
                    for (var t = 0; b() && t < y.data.length; t++)
                      y.data[t].forEach(i);
                    y.data.splice(0, 1);
                  } else y.data.forEach(i);
                function i(t, i) {
                  v(e.transformHeader) && (t = e.transformHeader(t, i)),
                    _.push(t);
                }
              }
              function r(t, i) {
                for (var n = e.header ? {} : [], r = 0; r < t.length; r++) {
                  var o = r,
                    l = t[r];
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
                              u.test(e) &&
                              ((e = parseFloat(e)), a < e && e < s)
                            )
                              return 1;
                          })(i)
                            ? parseFloat(i)
                            : h.test(i)
                              ? new Date(i)
                              : "" === i
                                ? null
                                : i))
                      : i)(
                    (o = e.header
                      ? r >= _.length
                        ? "__parsed_extra"
                        : _[r]
                      : o),
                    (l = e.transform ? e.transform(l, o) : l),
                  )),
                    "__parsed_extra" === o
                      ? ((n[o] = n[o] || []), n[o].push(l))
                      : (n[o] = l);
                }
                return (
                  e.header &&
                    (r > _.length
                      ? R(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            _.length +
                            " fields but parsed " +
                            r,
                          c + i,
                        )
                      : r < _.length &&
                        R(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            _.length +
                            " fields but parsed " +
                            r,
                          c + i,
                        )),
                  n
                );
              }
              var l;
              y &&
                (e.header || e.dynamicTyping || e.transform) &&
                ((l = 1),
                !y.data.length || Array.isArray(y.data[0])
                  ? ((y.data = y.data.map(r)), (l = y.data.length))
                  : (y.data = r(y.data, 0)),
                e.header && y.meta && (y.meta.fields = _),
                (c += l));
            }
            function b() {
              return e.header && 0 === _.length;
            }
            function R(e, t, i, n) {
              (e = { type: e, code: t, message: i }),
                void 0 !== n && (e.row = n),
                y.errors.push(e);
            }
            v(e.step) &&
              ((r = e.step),
              (e.step = function (t) {
                (y = t),
                  b()
                    ? k()
                    : (k(),
                      0 !== y.data.length &&
                        ((d += t.data.length),
                        e.preview && d > e.preview
                          ? i.abort()
                          : ((y.data = y.data[0]), r(y, l))));
              })),
              (this.parse = function (r, s, a) {
                var u = e.quoteChar || '"';
                return (
                  e.newline || (e.newline = this.guessLineEndings(r, u)),
                  (n = !1),
                  e.delimiter
                    ? v(e.delimiter) &&
                      ((e.delimiter = e.delimiter(r)),
                      (y.meta.delimiter = e.delimiter))
                    : ((u = ((t, i, n, r, s) => {
                        var a, u, h, l;
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
                            var c,
                              f = s[d],
                              p = 0,
                              m = 0,
                              _ = 0,
                              y =
                                ((h = void 0),
                                new g({
                                  comments: r,
                                  delimiter: f,
                                  newline: i,
                                  preview: 10,
                                }).parse(t)),
                              w = 0;
                            w < y.data.length;
                            w++
                          )
                            n && E(y.data[w])
                              ? _++
                              : ((m += c = y.data[w].length),
                                void 0 === h
                                  ? (h = c)
                                  : 0 < c && ((p += Math.abs(c - h)), (h = c)));
                          0 < y.data.length && (m /= y.data.length - _),
                            (void 0 === u || p <= u) &&
                              (void 0 === l || l < m) &&
                              1.99 < m &&
                              ((u = p), (a = f), (l = m));
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
                        ? (e.delimiter = u.bestDelimiter)
                        : ((n = !0), (e.delimiter = o.DefaultDelimiter)),
                      (y.meta.delimiter = e.delimiter)),
                  (u = w(e)),
                  e.preview && e.header && u.preview++,
                  (t = r),
                  (i = new g(u)),
                  (y = i.parse(t, s, a)),
                  k(),
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
                for (var n = 0, r = 0; r < i.length; r++)
                  "\n" === i[r][0] && n++;
                return n >= i.length / 2 ? "\r\n" : "\r";
              });
          }
          function p(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function g(e) {
            var t = (e = e || {}).delimiter,
              i = e.newline,
              n = e.comments,
              r = e.step,
              s = e.preview,
              a = e.fastMode,
              u = null,
              h = !1,
              l = null == e.quoteChar ? '"' : e.quoteChar,
              d = l;
            if (
              (void 0 !== e.escapeChar && (d = e.escapeChar),
              ("string" != typeof t || -1 < o.BAD_DELIMITERS.indexOf(t)) &&
                (t = ","),
              n === t)
            )
              throw new Error("Comment character same as delimiter");
            !0 === n
              ? (n = "#")
              : ("string" != typeof n || -1 < o.BAD_DELIMITERS.indexOf(n)) &&
                (n = !1),
              "\n" !== i && "\r" !== i && "\r\n" !== i && (i = "\n");
            var c = 0,
              f = !1;
            (this.parse = function (o, g, m) {
              if ("string" != typeof o)
                throw new Error("Input must be a string");
              var _ = o.length,
                y = t.length,
                w = i.length,
                E = n.length,
                k = v(r),
                b = [],
                R = [],
                A = [],
                I = (c = 0);
              if (!o) return G();
              if (a || (!1 !== a && -1 === o.indexOf(l))) {
                for (var S = o.split(i), C = 0; C < S.length; C++) {
                  if (((A = S[C]), (c += A.length), C !== S.length - 1))
                    c += i.length;
                  else if (m) return G();
                  if (!n || A.substring(0, E) !== n) {
                    if (k) {
                      if (((b = []), L(A.split(t)), z(), f)) return G();
                    } else L(A.split(t));
                    if (s && s <= C) return (b = b.slice(0, s)), G(!0);
                  }
                }
                return G();
              }
              for (
                var D = o.indexOf(t, c),
                  O = o.indexOf(i, c),
                  T = new RegExp(p(d) + p(l), "g"),
                  F = o.indexOf(l, c);
                ;
              )
                if (o[c] === l)
                  for (F = c, c++; ; ) {
                    if (-1 === (F = o.indexOf(l, F + 1)))
                      return (
                        m ||
                          R.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: b.length,
                            index: c,
                          }),
                        M()
                      );
                    if (F === _ - 1) return M(o.substring(c, F).replace(T, l));
                    if (l === d && o[F + 1] === d) F++;
                    else if (l === d || 0 === F || o[F - 1] !== d) {
                      -1 !== D && D < F + 1 && (D = o.indexOf(t, F + 1));
                      var x = B(
                        -1 ===
                          (O = -1 !== O && O < F + 1 ? o.indexOf(i, F + 1) : O)
                          ? D
                          : Math.min(D, O),
                      );
                      if (o.substr(F + 1 + x, y) === t) {
                        A.push(o.substring(c, F).replace(T, l)),
                          o[(c = F + 1 + x + y)] !== l && (F = o.indexOf(l, c)),
                          (D = o.indexOf(t, c)),
                          (O = o.indexOf(i, c));
                        break;
                      }
                      if (
                        ((x = B(O)),
                        o.substring(F + 1 + x, F + 1 + x + w) === i)
                      ) {
                        if (
                          (A.push(o.substring(c, F).replace(T, l)),
                          j(F + 1 + x + w),
                          (D = o.indexOf(t, c)),
                          (F = o.indexOf(l, c)),
                          k && (z(), f))
                        )
                          return G();
                        if (s && b.length >= s) return G(!0);
                        break;
                      }
                      R.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: b.length,
                        index: c,
                      }),
                        F++;
                    }
                  }
                else if (n && 0 === A.length && o.substring(c, c + E) === n) {
                  if (-1 === O) return G();
                  (c = O + w), (O = o.indexOf(i, c)), (D = o.indexOf(t, c));
                } else if (-1 !== D && (D < O || -1 === O))
                  A.push(o.substring(c, D)), (c = D + y), (D = o.indexOf(t, c));
                else {
                  if (-1 === O) break;
                  if ((A.push(o.substring(c, O)), j(O + w), k && (z(), f)))
                    return G();
                  if (s && b.length >= s) return G(!0);
                }
              return M();
              function L(e) {
                b.push(e), (I = c);
              }
              function B(e) {
                var t = 0;
                return -1 !== e &&
                  (e = o.substring(F + 1, e)) &&
                  "" === e.trim()
                  ? e.length
                  : t;
              }
              function M(e) {
                return (
                  m ||
                    (void 0 === e && (e = o.substring(c)),
                    A.push(e),
                    (c = _),
                    L(A),
                    k && z()),
                  G()
                );
              }
              function j(e) {
                (c = e), L(A), (A = []), (O = o.indexOf(i, c));
              }
              function G(n) {
                if (e.header && !g && b.length && !h) {
                  var r = b[0],
                    s = Object.create(null),
                    a = new Set(r);
                  let t = !1;
                  for (let i = 0; i < r.length; i++) {
                    let n = r[i];
                    if (
                      s[
                        (n = v(e.transformHeader) ? e.transformHeader(n, i) : n)
                      ]
                    ) {
                      let e,
                        o = s[n];
                      for (; (e = n + "_" + o), o++, a.has(e); );
                      a.add(e),
                        (r[i] = e),
                        s[n]++,
                        (t = !0),
                        ((u = null === u ? {} : u)[e] = n);
                    } else (s[n] = 1), (r[i] = n);
                    a.add(n);
                  }
                  t && console.warn("Duplicate headers found and renamed."),
                    (h = !0);
                }
                return {
                  data: b,
                  errors: R,
                  meta: {
                    delimiter: t,
                    linebreak: i,
                    aborted: f,
                    truncated: !!n,
                    cursor: I + (g || 0),
                    renamedHeaders: u,
                  },
                };
              }
              function z() {
                r(G()), (b = []), (R = []);
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
              i = s[t.workerId],
              n = !1;
            if (t.error) i.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var r = {
                abort: function () {
                  (n = !0),
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
                  var a = 0;
                  a < t.results.data.length &&
                  (i.userStep(
                    {
                      data: t.results.data[a],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    r,
                  ),
                  !n);
                  a++
                );
                delete t.results;
              } else
                v(i.userChunk) &&
                  (i.userChunk(t.results, r, t.file), delete t.results);
            }
            t.finished && !n && _(t.workerId, t.results);
          }
          function _(e, t) {
            var i = s[e];
            v(i.userComplete) && i.userComplete(t), i.terminate(), delete s[e];
          }
          function y() {
            throw new Error("Not implemented.");
          }
          function w(e) {
            if ("object" != typeof e || null === e) return e;
            var t,
              i = Array.isArray(e) ? [] : {};
            for (t in e) i[t] = w(e[t]);
            return i;
          }
          function E(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function v(e) {
            return "function" == typeof e;
          }
          return (
            (o.parse = function (t, n) {
              var r = (n = n || {}).dynamicTyping || !1;
              if (
                (v(r) && ((n.dynamicTypingFunction = r), (r = {})),
                (n.dynamicTyping = r),
                (n.transform = !!v(n.transform) && n.transform),
                !n.worker || !o.WORKERS_SUPPORTED)
              )
                return (
                  (r = null),
                  o.NODE_STREAM_INPUT,
                  "string" == typeof t
                    ? ((t = ((e) =>
                        65279 !== e.charCodeAt(0) ? e : e.slice(1))(t)),
                      (r = new (n.download ? h : d)(n)))
                    : !0 === t.readable && v(t.read) && v(t.on)
                      ? (r = new c(n))
                      : ((i.File && t instanceof File) ||
                          t instanceof Object) &&
                        (r = new l(n)),
                  r.stream(t)
                );
              ((r = (() => {
                var t;
                return (
                  !!o.WORKERS_SUPPORTED &&
                  ((t = (() => {
                    var t = i.URL || i.webkitURL || null,
                      n = e.toString();
                    return (
                      o.BLOB_URL ||
                      (o.BLOB_URL = t.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            n,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((t = new i.Worker(t)).onmessage = m),
                  (t.id = a++),
                  (s[t.id] = t))
                );
              })()).userStep = n.step),
                (r.userChunk = n.chunk),
                (r.userComplete = n.complete),
                (r.userError = n.error),
                (n.step = v(n.step)),
                (n.chunk = v(n.chunk)),
                (n.complete = v(n.complete)),
                (n.error = v(n.error)),
                delete n.worker,
                r.postMessage({ input: t, config: n, workerId: r.id });
            }),
            (o.unparse = function (e, t) {
              var i = !1,
                n = !0,
                r = ",",
                s = "\r\n",
                a = '"',
                u = a + a,
                h = !1,
                l = null,
                d = !1,
                c =
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
                          (i = t.quotes),
                        ("boolean" != typeof t.skipEmptyLines &&
                          "string" != typeof t.skipEmptyLines) ||
                          (h = t.skipEmptyLines),
                        "string" == typeof t.newline && (s = t.newline),
                        "string" == typeof t.quoteChar && (a = t.quoteChar),
                        "boolean" == typeof t.header && (n = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (0 === t.columns.length)
                          throw new Error("Option columns is empty");
                        l = t.columns;
                      }
                      void 0 !== t.escapeChar && (u = t.escapeChar + a),
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
                if (!e.length || Array.isArray(e[0])) return f(null, e, h);
                if ("object" == typeof e[0])
                  return f(l || Object.keys(e[0]), e, h);
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
                  f(e.fields || [], e.data || [], h)
                );
              throw new Error("Unable to serialize unrecognized input");
              function f(e, t, i) {
                var a = "",
                  o =
                    ("string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t)),
                    Array.isArray(e) && 0 < e.length),
                  u = !Array.isArray(t[0]);
                if (o && n) {
                  for (var h = 0; h < e.length; h++)
                    0 < h && (a += r), (a += g(e[h], h));
                  0 < t.length && (a += s);
                }
                for (var l = 0; l < t.length; l++) {
                  var d = (o ? e : t[l]).length,
                    c = !1,
                    f = o ? 0 === Object.keys(t[l]).length : 0 === t[l].length;
                  if (
                    (i &&
                      !o &&
                      (c =
                        "greedy" === i
                          ? "" === t[l].join("").trim()
                          : 1 === t[l].length && 0 === t[l][0].length),
                    "greedy" === i && o)
                  ) {
                    for (var p = [], m = 0; m < d; m++) {
                      var _ = u ? e[m] : m;
                      p.push(t[l][_]);
                    }
                    c = "" === p.join("").trim();
                  }
                  if (!c) {
                    for (var y = 0; y < d; y++) {
                      0 < y && !f && (a += r);
                      var w = o && u ? e[y] : y;
                      a += g(t[l][w], y);
                    }
                    l < t.length - 1 && (!i || (0 < d && !f)) && (a += s);
                  }
                }
                return a;
              }
              function g(e, t) {
                var n, s;
                return null == e
                  ? ""
                  : e.constructor === Date
                    ? JSON.stringify(e).slice(1, 25)
                    : ((s = !1),
                      d &&
                        "string" == typeof e &&
                        d.test(e) &&
                        ((e = "'" + e), (s = !0)),
                      (n = e.toString().replace(c, u)),
                      (s =
                        s ||
                        !0 === i ||
                        ("function" == typeof i && i(e, t)) ||
                        (Array.isArray(i) && i[t]) ||
                        ((e, t) => {
                          for (var i = 0; i < t.length; i++)
                            if (-1 < e.indexOf(t[i])) return !0;
                          return !1;
                        })(n, o.BAD_DELIMITERS) ||
                        -1 < n.indexOf(r) ||
                        " " === n.charAt(0) ||
                        " " === n.charAt(n.length - 1))
                        ? a + n + a
                        : n);
              }
            }),
            (o.RECORD_SEP = String.fromCharCode(30)),
            (o.UNIT_SEP = String.fromCharCode(31)),
            (o.BYTE_ORDER_MARK = "\ufeff"),
            (o.BAD_DELIMITERS = ["\r", "\n", '"', o.BYTE_ORDER_MARK]),
            (o.WORKERS_SUPPORTED = !n && !!i.Worker),
            (o.NODE_STREAM_INPUT = 1),
            (o.LocalChunkSize = 10485760),
            (o.RemoteChunkSize = 5242880),
            (o.DefaultDelimiter = ","),
            (o.Parser = g),
            (o.ParserHandle = f),
            (o.NetworkStreamer = h),
            (o.FileStreamer = l),
            (o.StringStreamer = d),
            (o.ReadableStreamStreamer = c),
            i.jQuery &&
              ((t = i.jQuery).fn.parse = function (e) {
                var n = e.config || {},
                  r = [];
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
                    for (var s = 0; s < this.files.length; s++)
                      r.push({
                        file: this.files[s],
                        inputElem: this,
                        instanceConfig: t.extend({}, n),
                      });
                  }),
                  s(),
                  this
                );
                function s() {
                  if (0 === r.length) v(e.complete) && e.complete();
                  else {
                    var i,
                      n,
                      s,
                      u,
                      h = r[0];
                    if (v(e.before)) {
                      var l = e.before(h.file, h.inputElem);
                      if ("object" == typeof l) {
                        if ("abort" === l.action)
                          return (
                            (i = "AbortError"),
                            (n = h.file),
                            (s = h.inputElem),
                            (u = l.reason),
                            void (v(e.error) && e.error({ name: i }, n, s, u))
                          );
                        if ("skip" === l.action) return void a();
                        "object" == typeof l.config &&
                          (h.instanceConfig = t.extend(
                            h.instanceConfig,
                            l.config,
                          ));
                      } else if ("skip" === l) return void a();
                    }
                    var d = h.instanceConfig.complete;
                    (h.instanceConfig.complete = function (e) {
                      v(d) && d(e, h.file, h.inputElem), a();
                    }),
                      o.parse(h.file, h.instanceConfig);
                  }
                }
                function a() {
                  r.splice(0, 1), s();
                }
              }),
            r &&
              (i.onmessage = function (e) {
                (e = e.data),
                  void 0 === o.WORKER_ID && e && (o.WORKER_ID = e.workerId),
                  "string" == typeof e.input
                    ? i.postMessage({
                        workerId: o.WORKER_ID,
                        results: o.parse(e.input, e.config),
                        finished: !0,
                      })
                    : ((i.File && e.input instanceof File) ||
                        e.input instanceof Object) &&
                      (e = o.parse(e.input, e.config)) &&
                      i.postMessage({
                        workerId: o.WORKER_ID,
                        results: e,
                        finished: !0,
                      });
              }),
            ((h.prototype = Object.create(u.prototype)).constructor = h),
            ((l.prototype = Object.create(u.prototype)).constructor = l),
            ((d.prototype = Object.create(d.prototype)).constructor = d),
            ((c.prototype = Object.create(u.prototype)).constructor = c),
            o
          );
        }),
        void 0 === (r = "function" == typeof i ? i.apply(t, n) : i) ||
          (e.exports = r);
    },
    41756: (e, t, i) => {
      "use strict";
      i.d(t, {
        IB: () => d,
        IW: () => g,
        Wj: () => h,
        X0: () => c,
        r$: () => p,
        yW: () => f,
      });
      var n = i(56545),
        r = i(88942),
        s = i(61739),
        a = i(23809),
        o = i(37403),
        u = i(90626);
      function h(e, t) {
        const i = (0, a.KV)();
        return (0, r.I)({
          queryKey: [
            "crowdin_metadata_for_clan_event",
            e.ConvertTo64BitString(),
            t,
          ],
          queryFn: async () => {
            const r = n.w.Init(o.$5);
            r.Body().set_steamid(e.ConvertTo64BitString()),
              r.Body().set_itemid(t);
            const s = await o.BE.GetClanEventCrowdInMetadata(i, r);
            return 1 != s.GetEResult() ? null : s.Body().toObject();
          },
        });
      }
      async function l(e, t) {
        const i = n.w.Init(o.hA);
        i.Body().set_steamid(t);
        const r = await o.BE.GetClanCrowdInMetadata(e, i);
        if (42 === r.GetEResult())
          return {
            crowdin_project_id: null,
            crowdin_directory_id: null,
            push_by_default: !1,
          };
        if (1 !== r.GetEResult()) throw r.GetEResult();
        return r.Body().toObject();
      }
      function d(e) {
        const t = (0, a.KV)();
        return (0, r.I)({
          queryKey: ["clan_crowdin_mapping", e],
          queryFn: async () => await l(t, e),
        });
      }
      function c(e) {
        return (function (e) {
          const t = (0, a.KV)(),
            i = (0, r.I)({
              queryKey: e.queryKey,
              queryFn: async () => e.queryFn(t, ...e.args),
            });
          return e.children(i);
        })({
          queryKey: ["clan_crowdin_mapping", e.clanSteamId],
          queryFn: l,
          args: [e.clanSteamId],
          children: e.children,
        });
      }
      const f = (0, u.createContext)(null);
      function p(e) {
        const t = d(e.clanInfo.clanSteamID.ConvertTo64BitString());
        let i = !1;
        return (
          t.isSuccess && (i = t.data.push_by_default),
          u.createElement(
            f.Provider,
            {
              value: {
                clanSteamId: e.clanInfo.clanSteamID,
                bPushToCrowdInByDefault: i,
              },
            },
            e.children,
          )
        );
      }
      function g(e, t, i) {
        const r = (0, a.KV)();
        return (0, s.n)({
          mutationKey: ["fetch_translation_for_clan_event", e, t, i],
          mutationFn: async function () {
            return await (async function (e, t, i, r) {
              const s = n.w.Init(o.v7);
              s.Body().set_language(r),
                s.Body().set_steamid(t),
                s.Body().set_itemid(i);
              const a = await o.BE.FetchTranslationFromCrowdIn(e, s);
              if (1 != a.GetEResult())
                throw new Error(
                  `Error from FetchLocalizationForClanEventFromCrowdIn: ${a.GetErrorMessage()} (${a.GetEResult()})`,
                );
              return a.Body().toObject();
            })(r, e, t, i);
          },
          retry: !1,
        });
      }
    },
    9161: (e, t, i) => {
      "use strict";
      i.d(t, { g: () => s });
      var n = i(40323),
        r = i.n(n);
      class s {
        static ParseCSVFile(e) {
          return new Promise((t, i) => {
            const n = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: t,
              error: (e) => i({ errors: [e] }),
            };
            r().parse(e, n);
          });
        }
        static ReadFile(e) {
          return new Promise((t, i) => {
            const n = new FileReader();
            (n.onload = (e) => t(n.result)), n.readAsText(e);
          });
        }
        static WriteFile(e, t) {
          let i = document.createElement("a");
          if (navigator.msSaveBlob) navigator.msSaveBlob(e, t);
          else {
            const t = window.URL.createObjectURL(e);
            i.href = t;
          }
          i.setAttribute("download", t), i.click();
          try {
            document.removeChild(i);
          } catch (e) {}
        }
        static WriteCSVToFile(e, t) {
          const i = r().unparse(e, { header: !0 });
          s.WriteFile(new Blob([i], { type: "text/csv:charset=utf-8;" }), t);
        }
        static WriteXMLToFile(e, t) {
          const i = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let n =
            "<" + i() + 'xml version="1.0" encoding="UTF-8" ' + i() + ">\n";
          (n += new XMLSerializer().serializeToString(e)),
            s.WriteFile(
              new Blob([n], { type: "application/xml:charset=utf-8;" }),
              t,
            );
        }
      }
      s.m_DummyValueForQuestionHack = 0;
    },
    59461: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEFERTQyQ0E1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEFERTQyQ0I1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQURFNDJDODVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQURFNDJDOTVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prxq/1gAAAGJSURBVHjaYvz//z/DQAImhgEG9HTASiDeiiEKigI64Pj/CLAJiBlhcvSwXPc/JjgLxIIgeUYaJ0JBIL4NxMJY5B4BcTitHXAeiA3wyL+kZSJcQMByEEimVbxn/ScM8mmVCK2IsHwhTD2104AwNHFx4VFzAYgNaVUQ7SFg+Q8gdqZVSTifiEQHsvwdvpKQGYiDyIj3HCLiPRubXnSBBVDFE2iV6PA5IAlN0woiLJcG4h8ELD+PzwwYwxiH5sNALIzHgNsELH8DxEKEHCAGxB/xGPIEiNWwaF5PRNDrEQpFEHGZCIO+ArEjksZKIvTEE5OGQEQyEP/7TxwAJThDItRNIjYRwxgGQPz2P3XAEVKyMHJRLAvEu4FYnYLC6D3UnK/ktAkfA7EeEB+kwAEOpFiOr024mIygjyWn9sQn2UOC5VPJrb4JKcglwvLDlLQfiFHkDcR/cVj+CIjZaO0AfNlUidIWFCmKZYD4GpLlgdRowpHaJGMH4v1AfBGIM6nRiqF1v2Dw944BAgwAsWqnpJAiSOIAAAAASUVORK5CYII=";
    },
  },
]);
