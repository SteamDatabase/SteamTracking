/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3025],
  {
    64641: (e) => {
      e.exports = {
        v6: "_2LxgdMcpWJRjkxZKbmeEEb",
        SubText: "vg0EOhKTLB3tLvshHMr7l",
        AvatarImageContainer: "_33hdFBTwBs64Fcp-bPdf4E",
        GameImageContainer: "_2OYADGuBPiyF7h50OJ0P1B",
        AvatarImage: "_2CQYcCggCXwVzZj2GWng5-",
        STV_HomeGridPreviewDetails: "Yncr-T63YFSJ46cq4Z2BJ",
        ChatAvatarImage: "_1cUR_vD8IvfJgOK1r89j4o",
        EditButton: "VsZ-bdWSNpnM9Vg6gkSyD",
        Small: "_3M4j828iWSVEZZAkypcBi1",
        FlexCenter: "_1R3ycnbAGUAy01o0TW7NNo",
        ThrobberCtn: "_3m7p67FD1Ynjm3BnyyjSSS",
        MarkdownLink: "_1WqumifyJucGDxm2oI6yRQ",
        SummaryTextArea: "cNMZ-dcMVhaQJFes_Ivwo",
        RemoveIcon: "_3NeLW5LAka4S9__PaMFE_J",
      };
    },
    40323: function (e, t) {
      var i, r, n;
      (r = []),
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
            n = i.IS_PAPA_WORKER || !1,
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
                  (this._handle = new f(t)),
                  ((this._handle.streamer = this)._config = t);
              }.call(this, e),
              (this.parseChunk = function (e, t) {
                var r = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < r) {
                  let t = this._config.newline;
                  t ||
                    ((s = this._config.quoteChar || '"'),
                    (t = this._handle.guessLineEndings(e, s))),
                    (e = [...e.split(t).slice(r)].join(t));
                }
                this.isFirstChunk &&
                  v(this._config.beforeFirstChunk) &&
                  void 0 !== (s = this._config.beforeFirstChunk(e)) &&
                  (e = s),
                  (this.isFirstChunk = !1),
                  (this._halted = !1),
                  (r = this._partialLine + e);
                var s =
                  ((this._partialLine = ""),
                  this._handle.parse(r, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((e = s.meta.cursor),
                    this._finished ||
                      ((this._partialLine = r.substring(e - this._baseIndex)),
                      (this._baseIndex = e)),
                    s && s.data && (this._rowCount += s.data.length),
                    (r =
                      this._finished ||
                      (this._config.preview &&
                        this._rowCount >= this._config.preview)),
                    n)
                  )
                    i.postMessage({
                      results: s,
                      workerId: o.WORKER_ID,
                      finished: r,
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
                      !r ||
                      !v(this._config.complete) ||
                      (s && s.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    r || (s && s.meta.paused) || this._nextChunk(),
                    s
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                v(this._config.error)
                  ? this._config.error(e)
                  : n &&
                    this._config.error &&
                    i.postMessage({
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
                      ((t.onload = E(this._chunkLoaded, this)),
                      (t.onerror = E(this._chunkError, this))),
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
            (e = e || {}).chunkSize || (e.chunkSize = o.LocalChunkSize),
              h.call(this, e);
            var t,
              i,
              r = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (i = e.slice || e.webkitSlice || e.mozSlice),
                r
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
                  n =
                    (this._config.chunkSize &&
                      ((n = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (e = i.call(e, this._start, n))),
                    t.readAsText(e, this._config.encoding));
                r || this._chunkLoaded({ target: { result: n } });
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
                this._streamCleanUp(), (r = !0), this._streamData("");
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
              r,
              n,
              s = Math.pow(2, 53),
              a = -s,
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
            function E(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function b() {
              if (
                (y &&
                  r &&
                  (C(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      o.DefaultDelimiter +
                      "'",
                  ),
                  (r = !1)),
                e.skipEmptyLines &&
                  (y.data = y.data.filter(function (e) {
                    return !E(e);
                  })),
                w())
              ) {
                if (y)
                  if (Array.isArray(y.data[0])) {
                    for (var t = 0; w() && t < y.data.length; t++)
                      y.data[t].forEach(i);
                    y.data.splice(0, 1);
                  } else y.data.forEach(i);
                function i(t, i) {
                  v(e.transformHeader) && (t = e.transformHeader(t, i)),
                    _.push(t);
                }
              }
              function n(t, i) {
                for (var r = e.header ? {} : [], n = 0; n < t.length; n++) {
                  var o = n,
                    l = t[n];
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
                              ((e = parseFloat(e)), a < e && e < s)
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
                    (o = e.header
                      ? n >= _.length
                        ? "__parsed_extra"
                        : _[n]
                      : o),
                    (l = e.transform ? e.transform(l, o) : l),
                  )),
                    "__parsed_extra" === o
                      ? ((r[o] = r[o] || []), r[o].push(l))
                      : (r[o] = l);
                }
                return (
                  e.header &&
                    (n > _.length
                      ? C(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            _.length +
                            " fields but parsed " +
                            n,
                          c + i,
                        )
                      : n < _.length &&
                        C(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            _.length +
                            " fields but parsed " +
                            n,
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
                  ? ((y.data = y.data.map(n)), (l = y.data.length))
                  : (y.data = n(y.data, 0)),
                e.header && y.meta && (y.meta.fields = _),
                (c += l));
            }
            function w() {
              return e.header && 0 === _.length;
            }
            function C(e, t, i, r) {
              (e = { type: e, code: t, message: i }),
                void 0 !== r && (e.row = r),
                y.errors.push(e);
            }
            v(e.step) &&
              ((n = e.step),
              (e.step = function (t) {
                (y = t),
                  w()
                    ? b()
                    : (b(),
                      0 !== y.data.length &&
                        ((d += t.data.length),
                        e.preview && d > e.preview
                          ? i.abort()
                          : ((y.data = y.data[0]), n(y, l))));
              })),
              (this.parse = function (n, s, a) {
                var h = e.quoteChar || '"';
                return (
                  e.newline || (e.newline = this.guessLineEndings(n, h)),
                  (r = !1),
                  e.delimiter
                    ? v(e.delimiter) &&
                      ((e.delimiter = e.delimiter(n)),
                      (y.meta.delimiter = e.delimiter))
                    : ((h = ((t, i, r, n, s) => {
                        var a, h, u, l;
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
                                ((u = void 0),
                                new g({
                                  comments: n,
                                  delimiter: f,
                                  newline: i,
                                  preview: 10,
                                }).parse(t)),
                              k = 0;
                            k < y.data.length;
                            k++
                          )
                            r && E(y.data[k])
                              ? _++
                              : ((m += c = y.data[k].length),
                                void 0 === u
                                  ? (u = c)
                                  : 0 < c && ((p += Math.abs(c - u)), (u = c)));
                          0 < y.data.length && (m /= y.data.length - _),
                            (void 0 === h || p <= h) &&
                              (void 0 === l || l < m) &&
                              1.99 < m &&
                              ((h = p), (a = f), (l = m));
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
                        : ((r = !0), (e.delimiter = o.DefaultDelimiter)),
                      (y.meta.delimiter = e.delimiter)),
                  (h = k(e)),
                  e.preview && e.header && h.preview++,
                  (t = n),
                  (i = new g(h)),
                  (y = i.parse(t, s, a)),
                  b(),
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
                for (var r = 0, n = 0; n < i.length; n++)
                  "\n" === i[n][0] && r++;
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
              n = e.step,
              s = e.preview,
              a = e.fastMode,
              h = null,
              u = !1,
              l = null == e.quoteChar ? '"' : e.quoteChar,
              d = l;
            if (
              (void 0 !== e.escapeChar && (d = e.escapeChar),
              ("string" != typeof t || -1 < o.BAD_DELIMITERS.indexOf(t)) &&
                (t = ","),
              r === t)
            )
              throw new Error("Comment character same as delimiter");
            !0 === r
              ? (r = "#")
              : ("string" != typeof r || -1 < o.BAD_DELIMITERS.indexOf(r)) &&
                (r = !1),
              "\n" !== i && "\r" !== i && "\r\n" !== i && (i = "\n");
            var c = 0,
              f = !1;
            (this.parse = function (o, g, m) {
              if ("string" != typeof o)
                throw new Error("Input must be a string");
              var _ = o.length,
                y = t.length,
                k = i.length,
                E = r.length,
                b = v(n),
                w = [],
                C = [],
                S = [],
                R = (c = 0);
              if (!o) return U();
              if (a || (!1 !== a && -1 === o.indexOf(l))) {
                for (var A = o.split(i), x = 0; x < A.length; x++) {
                  if (((S = A[x]), (c += S.length), x !== A.length - 1))
                    c += i.length;
                  else if (m) return U();
                  if (!r || S.substring(0, E) !== r) {
                    if (b) {
                      if (((w = []), D(S.split(t)), W(), f)) return U();
                    } else D(S.split(t));
                    if (s && s <= x) return (w = w.slice(0, s)), U(!0);
                  }
                }
                return U();
              }
              for (
                var O = o.indexOf(t, c),
                  I = o.indexOf(i, c),
                  T = new RegExp(p(d) + p(l), "g"),
                  F = o.indexOf(l, c);
                ;
              )
                if (o[c] === l)
                  for (F = c, c++; ; ) {
                    if (-1 === (F = o.indexOf(l, F + 1)))
                      return (
                        m ||
                          C.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: w.length,
                            index: c,
                          }),
                        j()
                      );
                    if (F === _ - 1) return j(o.substring(c, F).replace(T, l));
                    if (l === d && o[F + 1] === d) F++;
                    else if (l === d || 0 === F || o[F - 1] !== d) {
                      -1 !== O && O < F + 1 && (O = o.indexOf(t, F + 1));
                      var L = M(
                        -1 ===
                          (I = -1 !== I && I < F + 1 ? o.indexOf(i, F + 1) : I)
                          ? O
                          : Math.min(O, I),
                      );
                      if (o.substr(F + 1 + L, y) === t) {
                        S.push(o.substring(c, F).replace(T, l)),
                          o[(c = F + 1 + L + y)] !== l && (F = o.indexOf(l, c)),
                          (O = o.indexOf(t, c)),
                          (I = o.indexOf(i, c));
                        break;
                      }
                      if (
                        ((L = M(I)),
                        o.substring(F + 1 + L, F + 1 + L + k) === i)
                      ) {
                        if (
                          (S.push(o.substring(c, F).replace(T, l)),
                          B(F + 1 + L + k),
                          (O = o.indexOf(t, c)),
                          (F = o.indexOf(l, c)),
                          b && (W(), f))
                        )
                          return U();
                        if (s && w.length >= s) return U(!0);
                        break;
                      }
                      C.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: w.length,
                        index: c,
                      }),
                        F++;
                    }
                  }
                else if (r && 0 === S.length && o.substring(c, c + E) === r) {
                  if (-1 === I) return U();
                  (c = I + k), (I = o.indexOf(i, c)), (O = o.indexOf(t, c));
                } else if (-1 !== O && (O < I || -1 === I))
                  S.push(o.substring(c, O)), (c = O + y), (O = o.indexOf(t, c));
                else {
                  if (-1 === I) break;
                  if ((S.push(o.substring(c, I)), B(I + k), b && (W(), f)))
                    return U();
                  if (s && w.length >= s) return U(!0);
                }
              return j();
              function D(e) {
                w.push(e), (R = c);
              }
              function M(e) {
                var t = 0;
                return -1 !== e &&
                  (e = o.substring(F + 1, e)) &&
                  "" === e.trim()
                  ? e.length
                  : t;
              }
              function j(e) {
                return (
                  m ||
                    (void 0 === e && (e = o.substring(c)),
                    S.push(e),
                    (c = _),
                    D(S),
                    b && W()),
                  U()
                );
              }
              function B(e) {
                (c = e), D(S), (S = []), (I = o.indexOf(i, c));
              }
              function U(r) {
                if (e.header && !g && w.length && !u) {
                  var n = w[0],
                    s = Object.create(null),
                    a = new Set(n);
                  let t = !1;
                  for (let i = 0; i < n.length; i++) {
                    let r = n[i];
                    if (
                      s[
                        (r = v(e.transformHeader) ? e.transformHeader(r, i) : r)
                      ]
                    ) {
                      let e,
                        o = s[r];
                      for (; (e = r + "_" + o), o++, a.has(e); );
                      a.add(e),
                        (n[i] = e),
                        s[r]++,
                        (t = !0),
                        ((h = null === h ? {} : h)[e] = r);
                    } else (s[r] = 1), (n[i] = r);
                    a.add(r);
                  }
                  t && console.warn("Duplicate headers found and renamed."),
                    (u = !0);
                }
                return {
                  data: w,
                  errors: C,
                  meta: {
                    delimiter: t,
                    linebreak: i,
                    aborted: f,
                    truncated: !!r,
                    cursor: R + (g || 0),
                    renamedHeaders: h,
                  },
                };
              }
              function W() {
                n(U()), (w = []), (C = []);
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
              r = !1;
            if (t.error) i.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var n = {
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
                  var a = 0;
                  a < t.results.data.length &&
                  (i.userStep(
                    {
                      data: t.results.data[a],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    n,
                  ),
                  !r);
                  a++
                );
                delete t.results;
              } else
                v(i.userChunk) &&
                  (i.userChunk(t.results, n, t.file), delete t.results);
            }
            t.finished && !r && _(t.workerId, t.results);
          }
          function _(e, t) {
            var i = s[e];
            v(i.userComplete) && i.userComplete(t), i.terminate(), delete s[e];
          }
          function y() {
            throw new Error("Not implemented.");
          }
          function k(e) {
            if ("object" != typeof e || null === e) return e;
            var t,
              i = Array.isArray(e) ? [] : {};
            for (t in e) i[t] = k(e[t]);
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
            (o.parse = function (t, r) {
              var n = (r = r || {}).dynamicTyping || !1;
              if (
                (v(n) && ((r.dynamicTypingFunction = n), (n = {})),
                (r.dynamicTyping = n),
                (r.transform = !!v(r.transform) && r.transform),
                !r.worker || !o.WORKERS_SUPPORTED)
              )
                return (
                  (n = null),
                  o.NODE_STREAM_INPUT,
                  "string" == typeof t
                    ? ((t = ((e) =>
                        65279 !== e.charCodeAt(0) ? e : e.slice(1))(t)),
                      (n = new (r.download ? u : d)(r)))
                    : !0 === t.readable && v(t.read) && v(t.on)
                      ? (n = new c(r))
                      : ((i.File && t instanceof File) ||
                          t instanceof Object) &&
                        (n = new l(r)),
                  n.stream(t)
                );
              ((n = (() => {
                var t;
                return (
                  !!o.WORKERS_SUPPORTED &&
                  ((t = (() => {
                    var t = i.URL || i.webkitURL || null,
                      r = e.toString();
                    return (
                      o.BLOB_URL ||
                      (o.BLOB_URL = t.createObjectURL(
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
                  (t.id = a++),
                  (s[t.id] = t))
                );
              })()).userStep = r.step),
                (n.userChunk = r.chunk),
                (n.userComplete = r.complete),
                (n.userError = r.error),
                (r.step = v(r.step)),
                (r.chunk = v(r.chunk)),
                (r.complete = v(r.complete)),
                (r.error = v(r.error)),
                delete r.worker,
                n.postMessage({ input: t, config: r, workerId: n.id });
            }),
            (o.unparse = function (e, t) {
              var i = !1,
                r = !0,
                n = ",",
                s = "\r\n",
                a = '"',
                h = a + a,
                u = !1,
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
                          (n = t.delimiter),
                        ("boolean" != typeof t.quotes &&
                          "function" != typeof t.quotes &&
                          !Array.isArray(t.quotes)) ||
                          (i = t.quotes),
                        ("boolean" != typeof t.skipEmptyLines &&
                          "string" != typeof t.skipEmptyLines) ||
                          (u = t.skipEmptyLines),
                        "string" == typeof t.newline && (s = t.newline),
                        "string" == typeof t.quoteChar && (a = t.quoteChar),
                        "boolean" == typeof t.header && (r = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (0 === t.columns.length)
                          throw new Error("Option columns is empty");
                        l = t.columns;
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
                var a = "",
                  o =
                    ("string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t)),
                    Array.isArray(e) && 0 < e.length),
                  h = !Array.isArray(t[0]);
                if (o && r) {
                  for (var u = 0; u < e.length; u++)
                    0 < u && (a += n), (a += g(e[u], u));
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
                      var _ = h ? e[m] : m;
                      p.push(t[l][_]);
                    }
                    c = "" === p.join("").trim();
                  }
                  if (!c) {
                    for (var y = 0; y < d; y++) {
                      0 < y && !f && (a += n);
                      var k = o && h ? e[y] : y;
                      a += g(t[l][k], y);
                    }
                    l < t.length - 1 && (!i || (0 < d && !f)) && (a += s);
                  }
                }
                return a;
              }
              function g(e, t) {
                var r, s;
                return null == e
                  ? ""
                  : e.constructor === Date
                    ? JSON.stringify(e).slice(1, 25)
                    : ((s = !1),
                      d &&
                        "string" == typeof e &&
                        d.test(e) &&
                        ((e = "'" + e), (s = !0)),
                      (r = e.toString().replace(c, h)),
                      (s =
                        s ||
                        !0 === i ||
                        ("function" == typeof i && i(e, t)) ||
                        (Array.isArray(i) && i[t]) ||
                        ((e, t) => {
                          for (var i = 0; i < t.length; i++)
                            if (-1 < e.indexOf(t[i])) return !0;
                          return !1;
                        })(r, o.BAD_DELIMITERS) ||
                        -1 < r.indexOf(n) ||
                        " " === r.charAt(0) ||
                        " " === r.charAt(r.length - 1))
                        ? a + r + a
                        : r);
              }
            }),
            (o.RECORD_SEP = String.fromCharCode(30)),
            (o.UNIT_SEP = String.fromCharCode(31)),
            (o.BYTE_ORDER_MARK = "\ufeff"),
            (o.BAD_DELIMITERS = ["\r", "\n", '"', o.BYTE_ORDER_MARK]),
            (o.WORKERS_SUPPORTED = !r && !!i.Worker),
            (o.NODE_STREAM_INPUT = 1),
            (o.LocalChunkSize = 10485760),
            (o.RemoteChunkSize = 5242880),
            (o.DefaultDelimiter = ","),
            (o.Parser = g),
            (o.ParserHandle = f),
            (o.NetworkStreamer = u),
            (o.FileStreamer = l),
            (o.StringStreamer = d),
            (o.ReadableStreamStreamer = c),
            i.jQuery &&
              ((t = i.jQuery).fn.parse = function (e) {
                var r = e.config || {},
                  n = [];
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
                      n.push({
                        file: this.files[s],
                        inputElem: this,
                        instanceConfig: t.extend({}, r),
                      });
                  }),
                  s(),
                  this
                );
                function s() {
                  if (0 === n.length) v(e.complete) && e.complete();
                  else {
                    var i,
                      r,
                      s,
                      h,
                      u = n[0];
                    if (v(e.before)) {
                      var l = e.before(u.file, u.inputElem);
                      if ("object" == typeof l) {
                        if ("abort" === l.action)
                          return (
                            (i = "AbortError"),
                            (r = u.file),
                            (s = u.inputElem),
                            (h = l.reason),
                            void (v(e.error) && e.error({ name: i }, r, s, h))
                          );
                        if ("skip" === l.action) return void a();
                        "object" == typeof l.config &&
                          (u.instanceConfig = t.extend(
                            u.instanceConfig,
                            l.config,
                          ));
                      } else if ("skip" === l) return void a();
                    }
                    var d = u.instanceConfig.complete;
                    (u.instanceConfig.complete = function (e) {
                      v(d) && d(e, u.file, u.inputElem), a();
                    }),
                      o.parse(u.file, u.instanceConfig);
                  }
                }
                function a() {
                  n.splice(0, 1), s();
                }
              }),
            n &&
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
            ((u.prototype = Object.create(h.prototype)).constructor = u),
            ((l.prototype = Object.create(h.prototype)).constructor = l),
            ((d.prototype = Object.create(d.prototype)).constructor = d),
            ((c.prototype = Object.create(h.prototype)).constructor = c),
            o
          );
        }),
        void 0 === (n = "function" == typeof i ? i.apply(t, r) : i) ||
          (e.exports = n);
    },
    80159: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { ContentHubRoutes: () => c, default: () => f });
      var r = i(90626),
        n = i(97058),
        s = i(17083),
        a = i(92757),
        o = i(562),
        h = i(61859);
      function u(e) {
        return r.createElement(a.XG, {
          message: (e) => !(0, o.tV)() || (0, h.we)("#Generel_Discard_Warning"),
        });
      }
      var l = i(43527),
        d = i(65213);
      const c = { ContentHubCategories: () => "/categories/" };
      function f(e) {
        return r.createElement(
          s.Kd,
          { basename: (0, l.C)() + "admin/store/contenthub/" },
          r.createElement(u, null),
          r.createElement(
            a.dO,
            null,
            r.createElement(a.qh, {
              path: c.ContentHubCategories(),
              component: d.A,
            }),
            r.createElement(a.qh, { component: n.a }),
          ),
        );
      }
    },
    9161: (e, t, i) => {
      "use strict";
      i.d(t, { g: () => s });
      var r = i(40323),
        n = i.n(r);
      class s {
        static ParseCSVFile(e) {
          return new Promise((t, i) => {
            const r = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: t,
              error: (e) => i({ errors: [e] }),
            };
            n().parse(e, r);
          });
        }
        static ReadFile(e) {
          return new Promise((t, i) => {
            const r = new FileReader();
            (r.onload = (e) => t(r.result)), r.readAsText(e);
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
          const i = n().unparse(e, { header: !0 });
          s.WriteFile(new Blob([i], { type: "text/csv:charset=utf-8;" }), t);
        }
        static m_DummyValueForQuestionHack = 0;
        static WriteXMLToFile(e, t) {
          const i = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let r =
            "<" + i() + 'xml version="1.0" encoding="UTF-8" ' + i() + ">\n";
          (r += new XMLSerializer().serializeToString(e)),
            s.WriteFile(
              new Blob([r], { type: "application/xml:charset=utf-8;" }),
              t,
            );
        }
      }
    },
    44894: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => r });
      const r =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);
