/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [9954],
  {
    40323: function (e, t) {
      var n, o, l;
      (o = []),
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
            o = !n.document && !!n.postMessage,
            l = n.IS_PAPA_WORKER || !1,
            i = {},
            r = 0,
            s = {};
          function a(e) {
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
              (this.parseChunk = function (e, t) {
                var o = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < o) {
                  let t = this._config.newline;
                  t ||
                    ((i = this._config.quoteChar || '"'),
                    (t = this._handle.guessLineEndings(e, i))),
                    (e = [...e.split(t).slice(o)].join(t));
                }
                this.isFirstChunk &&
                  C(this._config.beforeFirstChunk) &&
                  void 0 !== (i = this._config.beforeFirstChunk(e)) &&
                  (e = i),
                  (this.isFirstChunk = !1),
                  (this._halted = !1),
                  (o = this._partialLine + e);
                var i =
                  ((this._partialLine = ""),
                  this._handle.parse(o, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((e = i.meta.cursor),
                    this._finished ||
                      ((this._partialLine = o.substring(e - this._baseIndex)),
                      (this._baseIndex = e)),
                    i && i.data && (this._rowCount += i.data.length),
                    (o =
                      this._finished ||
                      (this._config.preview &&
                        this._rowCount >= this._config.preview)),
                    l)
                  )
                    n.postMessage({
                      results: i,
                      workerId: s.WORKER_ID,
                      finished: o,
                    });
                  else if (C(this._config.chunk) && !t) {
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
                      !o ||
                      !C(this._config.complete) ||
                      (i && i.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    o || (i && i.meta.paused) || this._nextChunk(),
                    i
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                C(this._config.error)
                  ? this._config.error(e)
                  : l &&
                    this._config.error &&
                    n.postMessage({
                      workerId: s.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function u(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = s.RemoteChunkSize),
              a.call(this, e),
              (this._nextChunk = o
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
                    o ||
                      ((t.onload = S(this._chunkLoaded, this)),
                      (t.onerror = S(this._chunkError, this))),
                    t.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !o,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var e,
                      n = this._config.downloadRequestHeaders;
                    for (e in n) t.setRequestHeader(e, n[e]);
                  }
                  var l;
                  this._config.chunkSize &&
                    ((l = this._start + this._config.chunkSize - 1),
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + l,
                    ));
                  try {
                    t.send(this._config.downloadRequestBody);
                  } catch (e) {
                    this._chunkError(e.message);
                  }
                  o && 0 === t.status && this._chunkError();
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
            (e = e || {}).chunkSize || (e.chunkSize = s.LocalChunkSize),
              a.call(this, e);
            var t,
              n,
              o = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (n = e.slice || e.webkitSlice || e.mozSlice),
                o
                  ? (((t = new FileReader()).onload = S(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = S(this._chunkError, this)))
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
                  l =
                    (this._config.chunkSize &&
                      ((l = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (e = n.call(e, this._start, l))),
                    t.readAsText(e, this._config.encoding));
                o || this._chunkLoaded({ target: { result: l } });
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
          function g(e) {
            var t;
            a.call(this, (e = e || {})),
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
          function c(e) {
            a.call(this, (e = e || {}));
            var t = [],
              n = !0,
              o = !1;
            (this.pause = function () {
              a.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                a.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (e) {
                (this._input = e),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                o && 1 === t.length && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (n = !0);
              }),
              (this._streamData = S(function (e) {
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
              (this._streamError = S(function (e) {
                this._streamCleanUp(), this._sendError(e);
              }, this)),
              (this._streamEnd = S(function () {
                this._streamCleanUp(), (o = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = S(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function h(e) {
            var t,
              n,
              o,
              l,
              i = Math.pow(2, 53),
              r = -i,
              a = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              u =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              d = this,
              g = 0,
              c = 0,
              h = !1,
              m = !1,
              v = [],
              w = { data: [], errors: [], meta: {} };
            function S(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function R() {
              if (
                (w &&
                  o &&
                  (y(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      s.DefaultDelimiter +
                      "'",
                  ),
                  (o = !1)),
                e.skipEmptyLines &&
                  (w.data = w.data.filter(function (e) {
                    return !S(e);
                  })),
                _())
              ) {
                if (w)
                  if (Array.isArray(w.data[0])) {
                    for (var t = 0; _() && t < w.data.length; t++)
                      w.data[t].forEach(n);
                    w.data.splice(0, 1);
                  } else w.data.forEach(n);
                function n(t, n) {
                  C(e.transformHeader) && (t = e.transformHeader(t, n)),
                    v.push(t);
                }
              }
              function l(t, n) {
                for (var o = e.header ? {} : [], l = 0; l < t.length; l++) {
                  var s = l,
                    d = t[l];
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
                              a.test(e) &&
                              ((e = parseFloat(e)), r < e && e < i)
                            )
                              return 1;
                          })(n)
                            ? parseFloat(n)
                            : u.test(n)
                              ? new Date(n)
                              : "" === n
                                ? null
                                : n))
                      : n)(
                    (s = e.header
                      ? l >= v.length
                        ? "__parsed_extra"
                        : v[l]
                      : s),
                    (d = e.transform ? e.transform(d, s) : d),
                  )),
                    "__parsed_extra" === s
                      ? ((o[s] = o[s] || []), o[s].push(d))
                      : (o[s] = d);
                }
                return (
                  e.header &&
                    (l > v.length
                      ? y(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            v.length +
                            " fields but parsed " +
                            l,
                          c + n,
                        )
                      : l < v.length &&
                        y(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            v.length +
                            " fields but parsed " +
                            l,
                          c + n,
                        )),
                  o
                );
              }
              var d;
              w &&
                (e.header || e.dynamicTyping || e.transform) &&
                ((d = 1),
                !w.data.length || Array.isArray(w.data[0])
                  ? ((w.data = w.data.map(l)), (d = w.data.length))
                  : (w.data = l(w.data, 0)),
                e.header && w.meta && (w.meta.fields = v),
                (c += d));
            }
            function _() {
              return e.header && 0 === v.length;
            }
            function y(e, t, n, o) {
              (e = { type: e, code: t, message: n }),
                void 0 !== o && (e.row = o),
                w.errors.push(e);
            }
            C(e.step) &&
              ((l = e.step),
              (e.step = function (t) {
                (w = t),
                  _()
                    ? R()
                    : (R(),
                      0 !== w.data.length &&
                        ((g += t.data.length),
                        e.preview && g > e.preview
                          ? n.abort()
                          : ((w.data = w.data[0]), l(w, d))));
              })),
              (this.parse = function (l, i, r) {
                var a = e.quoteChar || '"';
                return (
                  e.newline || (e.newline = this.guessLineEndings(l, a)),
                  (o = !1),
                  e.delimiter
                    ? C(e.delimiter) &&
                      ((e.delimiter = e.delimiter(l)),
                      (w.meta.delimiter = e.delimiter))
                    : ((a = ((t, n, o, l, i) => {
                        var r, a, u, d;
                        i = i || [
                          ",",
                          "\t",
                          "|",
                          ";",
                          s.RECORD_SEP,
                          s.UNIT_SEP,
                        ];
                        for (var g = 0; g < i.length; g++) {
                          for (
                            var c,
                              h = i[g],
                              f = 0,
                              m = 0,
                              v = 0,
                              w =
                                ((u = void 0),
                                new p({
                                  comments: l,
                                  delimiter: h,
                                  newline: n,
                                  preview: 10,
                                }).parse(t)),
                              b = 0;
                            b < w.data.length;
                            b++
                          )
                            o && S(w.data[b])
                              ? v++
                              : ((m += c = w.data[b].length),
                                void 0 === u
                                  ? (u = c)
                                  : 0 < c && ((f += Math.abs(c - u)), (u = c)));
                          0 < w.data.length && (m /= w.data.length - v),
                            (void 0 === a || f <= a) &&
                              (void 0 === d || d < m) &&
                              1.99 < m &&
                              ((a = f), (r = h), (d = m));
                        }
                        return {
                          successful: !!(e.delimiter = r),
                          bestDelimiter: r,
                        };
                      })(
                        l,
                        e.newline,
                        e.skipEmptyLines,
                        e.comments,
                        e.delimitersToGuess,
                      )).successful
                        ? (e.delimiter = a.bestDelimiter)
                        : ((o = !0), (e.delimiter = s.DefaultDelimiter)),
                      (w.meta.delimiter = e.delimiter)),
                  (a = b(e)),
                  e.preview && e.header && a.preview++,
                  (t = l),
                  (n = new p(a)),
                  (w = n.parse(t, i, r)),
                  R(),
                  h ? { meta: { paused: !0 } } : w || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return h;
              }),
              (this.pause = function () {
                (h = !0),
                  n.abort(),
                  (t = C(e.chunk) ? "" : t.substring(n.getCharIndex()));
              }),
              (this.resume = function () {
                d.streamer._halted
                  ? ((h = !1), d.streamer.parseChunk(t, !0))
                  : setTimeout(d.resume, 3);
              }),
              (this.aborted = function () {
                return m;
              }),
              (this.abort = function () {
                (m = !0),
                  n.abort(),
                  (w.meta.aborted = !0),
                  C(e.complete) && e.complete(w),
                  (t = "");
              }),
              (this.guessLineEndings = function (e, t) {
                (e = e.substring(0, 1048576)),
                  (t = new RegExp(f(t) + "([^]*?)" + f(t), "gm"));
                var n = (e = e.replace(t, "")).split("\r");
                if (
                  ((e =
                    1 < (t = e.split("\n")).length &&
                    t[0].length < n[0].length),
                  1 === n.length || e)
                )
                  return "\n";
                for (var o = 0, l = 0; l < n.length; l++)
                  "\n" === n[l][0] && o++;
                return o >= n.length / 2 ? "\r\n" : "\r";
              });
          }
          function f(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function p(e) {
            var t = (e = e || {}).delimiter,
              n = e.newline,
              o = e.comments,
              l = e.step,
              i = e.preview,
              r = e.fastMode,
              a = null,
              u = !1,
              d = null == e.quoteChar ? '"' : e.quoteChar,
              g = d;
            if (
              (void 0 !== e.escapeChar && (g = e.escapeChar),
              ("string" != typeof t || -1 < s.BAD_DELIMITERS.indexOf(t)) &&
                (t = ","),
              o === t)
            )
              throw new Error("Comment character same as delimiter");
            !0 === o
              ? (o = "#")
              : ("string" != typeof o || -1 < s.BAD_DELIMITERS.indexOf(o)) &&
                (o = !1),
              "\n" !== n && "\r" !== n && "\r\n" !== n && (n = "\n");
            var c = 0,
              h = !1;
            (this.parse = function (s, p, m) {
              if ("string" != typeof s)
                throw new Error("Input must be a string");
              var v = s.length,
                w = t.length,
                b = n.length,
                S = o.length,
                R = C(l),
                _ = [],
                y = [],
                F = [],
                I = (c = 0);
              if (!s) return T();
              if (r || (!1 !== r && -1 === s.indexOf(d))) {
                for (var x = s.split(n), M = 0; M < x.length; M++) {
                  if (((F = x[M]), (c += F.length), M !== x.length - 1))
                    c += n.length;
                  else if (m) return T();
                  if (!o || F.substring(0, S) !== o) {
                    if (R) {
                      if (((_ = []), k(F.split(t)), G(), h)) return T();
                    } else k(F.split(t));
                    if (i && i <= M) return (_ = _.slice(0, i)), T(!0);
                  }
                }
                return T();
              }
              for (
                var E = s.indexOf(t, c),
                  P = s.indexOf(n, c),
                  O = new RegExp(f(g) + f(d), "g"),
                  V = s.indexOf(d, c);
                ;
              )
                if (s[c] === d)
                  for (V = c, c++; ; ) {
                    if (-1 === (V = s.indexOf(d, V + 1)))
                      return (
                        m ||
                          y.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: _.length,
                            index: c,
                          }),
                        D()
                      );
                    if (V === v - 1) return D(s.substring(c, V).replace(O, d));
                    if (d === g && s[V + 1] === g) V++;
                    else if (d === g || 0 === V || s[V - 1] !== g) {
                      -1 !== E && E < V + 1 && (E = s.indexOf(t, V + 1));
                      var z = A(
                        -1 ===
                          (P = -1 !== P && P < V + 1 ? s.indexOf(n, V + 1) : P)
                          ? E
                          : Math.min(E, P),
                      );
                      if (s.substr(V + 1 + z, w) === t) {
                        F.push(s.substring(c, V).replace(O, d)),
                          s[(c = V + 1 + z + w)] !== d && (V = s.indexOf(d, c)),
                          (E = s.indexOf(t, c)),
                          (P = s.indexOf(n, c));
                        break;
                      }
                      if (
                        ((z = A(P)),
                        s.substring(V + 1 + z, V + 1 + z + b) === n)
                      ) {
                        if (
                          (F.push(s.substring(c, V).replace(O, d)),
                          L(V + 1 + z + b),
                          (E = s.indexOf(t, c)),
                          (V = s.indexOf(d, c)),
                          R && (G(), h))
                        )
                          return T();
                        if (i && _.length >= i) return T(!0);
                        break;
                      }
                      y.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: _.length,
                        index: c,
                      }),
                        V++;
                    }
                  }
                else if (o && 0 === F.length && s.substring(c, c + S) === o) {
                  if (-1 === P) return T();
                  (c = P + b), (P = s.indexOf(n, c)), (E = s.indexOf(t, c));
                } else if (-1 !== E && (E < P || -1 === P))
                  F.push(s.substring(c, E)), (c = E + w), (E = s.indexOf(t, c));
                else {
                  if (-1 === P) break;
                  if ((F.push(s.substring(c, P)), L(P + b), R && (G(), h)))
                    return T();
                  if (i && _.length >= i) return T(!0);
                }
              return D();
              function k(e) {
                _.push(e), (I = c);
              }
              function A(e) {
                var t = 0;
                return -1 !== e &&
                  (e = s.substring(V + 1, e)) &&
                  "" === e.trim()
                  ? e.length
                  : t;
              }
              function D(e) {
                return (
                  m ||
                    (void 0 === e && (e = s.substring(c)),
                    F.push(e),
                    (c = v),
                    k(F),
                    R && G()),
                  T()
                );
              }
              function L(e) {
                (c = e), k(F), (F = []), (P = s.indexOf(n, c));
              }
              function T(o) {
                if (e.header && !p && _.length && !u) {
                  var l = _[0],
                    i = Object.create(null),
                    r = new Set(l);
                  let t = !1;
                  for (let n = 0; n < l.length; n++) {
                    let o = l[n];
                    if (
                      i[
                        (o = C(e.transformHeader) ? e.transformHeader(o, n) : o)
                      ]
                    ) {
                      let e,
                        s = i[o];
                      for (; (e = o + "_" + s), s++, r.has(e); );
                      r.add(e),
                        (l[n] = e),
                        i[o]++,
                        (t = !0),
                        ((a = null === a ? {} : a)[e] = o);
                    } else (i[o] = 1), (l[n] = o);
                    r.add(o);
                  }
                  t && console.warn("Duplicate headers found and renamed."),
                    (u = !0);
                }
                return {
                  data: _,
                  errors: y,
                  meta: {
                    delimiter: t,
                    linebreak: n,
                    aborted: h,
                    truncated: !!o,
                    cursor: I + (p || 0),
                    renamedHeaders: a,
                  },
                };
              }
              function G() {
                l(T()), (_ = []), (y = []);
              }
            }),
              (this.abort = function () {
                h = !0;
              }),
              (this.getCharIndex = function () {
                return c;
              });
          }
          function m(e) {
            var t = e.data,
              n = i[t.workerId],
              o = !1;
            if (t.error) n.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var l = {
                abort: function () {
                  (o = !0),
                    v(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: w,
                resume: w,
              };
              if (C(n.userStep)) {
                for (
                  var r = 0;
                  r < t.results.data.length &&
                  (n.userStep(
                    {
                      data: t.results.data[r],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    l,
                  ),
                  !o);
                  r++
                );
                delete t.results;
              } else
                C(n.userChunk) &&
                  (n.userChunk(t.results, l, t.file), delete t.results);
            }
            t.finished && !o && v(t.workerId, t.results);
          }
          function v(e, t) {
            var n = i[e];
            C(n.userComplete) && n.userComplete(t), n.terminate(), delete i[e];
          }
          function w() {
            throw new Error("Not implemented.");
          }
          function b(e) {
            if ("object" != typeof e || null === e) return e;
            var t,
              n = Array.isArray(e) ? [] : {};
            for (t in e) n[t] = b(e[t]);
            return n;
          }
          function S(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function C(e) {
            return "function" == typeof e;
          }
          return (
            (s.parse = function (t, o) {
              var l = (o = o || {}).dynamicTyping || !1;
              if (
                (C(l) && ((o.dynamicTypingFunction = l), (l = {})),
                (o.dynamicTyping = l),
                (o.transform = !!C(o.transform) && o.transform),
                !o.worker || !s.WORKERS_SUPPORTED)
              )
                return (
                  (l = null),
                  s.NODE_STREAM_INPUT,
                  "string" == typeof t
                    ? ((t = ((e) =>
                        65279 !== e.charCodeAt(0) ? e : e.slice(1))(t)),
                      (l = new (o.download ? u : g)(o)))
                    : !0 === t.readable && C(t.read) && C(t.on)
                      ? (l = new c(o))
                      : ((n.File && t instanceof File) ||
                          t instanceof Object) &&
                        (l = new d(o)),
                  l.stream(t)
                );
              ((l = (() => {
                var t;
                return (
                  !!s.WORKERS_SUPPORTED &&
                  ((t = (() => {
                    var t = n.URL || n.webkitURL || null,
                      o = e.toString();
                    return (
                      s.BLOB_URL ||
                      (s.BLOB_URL = t.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            o,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((t = new n.Worker(t)).onmessage = m),
                  (t.id = r++),
                  (i[t.id] = t))
                );
              })()).userStep = o.step),
                (l.userChunk = o.chunk),
                (l.userComplete = o.complete),
                (l.userError = o.error),
                (o.step = C(o.step)),
                (o.chunk = C(o.chunk)),
                (o.complete = C(o.complete)),
                (o.error = C(o.error)),
                delete o.worker,
                l.postMessage({ input: t, config: o, workerId: l.id });
            }),
            (s.unparse = function (e, t) {
              var n = !1,
                o = !0,
                l = ",",
                i = "\r\n",
                r = '"',
                a = r + r,
                u = !1,
                d = null,
                g = !1,
                c =
                  ((() => {
                    if ("object" == typeof t) {
                      if (
                        ("string" != typeof t.delimiter ||
                          s.BAD_DELIMITERS.filter(function (e) {
                            return -1 !== t.delimiter.indexOf(e);
                          }).length ||
                          (l = t.delimiter),
                        ("boolean" != typeof t.quotes &&
                          "function" != typeof t.quotes &&
                          !Array.isArray(t.quotes)) ||
                          (n = t.quotes),
                        ("boolean" != typeof t.skipEmptyLines &&
                          "string" != typeof t.skipEmptyLines) ||
                          (u = t.skipEmptyLines),
                        "string" == typeof t.newline && (i = t.newline),
                        "string" == typeof t.quoteChar && (r = t.quoteChar),
                        "boolean" == typeof t.header && (o = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (0 === t.columns.length)
                          throw new Error("Option columns is empty");
                        d = t.columns;
                      }
                      void 0 !== t.escapeChar && (a = t.escapeChar + r),
                        t.escapeFormulae instanceof RegExp
                          ? (g = t.escapeFormulae)
                          : "boolean" == typeof t.escapeFormulae &&
                            t.escapeFormulae &&
                            (g = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(f(r), "g"));
              if (
                ("string" == typeof e && (e = JSON.parse(e)), Array.isArray(e))
              ) {
                if (!e.length || Array.isArray(e[0])) return h(null, e, u);
                if ("object" == typeof e[0])
                  return h(d || Object.keys(e[0]), e, u);
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
                  h(e.fields || [], e.data || [], u)
                );
              throw new Error("Unable to serialize unrecognized input");
              function h(e, t, n) {
                var r = "",
                  s =
                    ("string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t)),
                    Array.isArray(e) && 0 < e.length),
                  a = !Array.isArray(t[0]);
                if (s && o) {
                  for (var u = 0; u < e.length; u++)
                    0 < u && (r += l), (r += p(e[u], u));
                  0 < t.length && (r += i);
                }
                for (var d = 0; d < t.length; d++) {
                  var g = (s ? e : t[d]).length,
                    c = !1,
                    h = s ? 0 === Object.keys(t[d]).length : 0 === t[d].length;
                  if (
                    (n &&
                      !s &&
                      (c =
                        "greedy" === n
                          ? "" === t[d].join("").trim()
                          : 1 === t[d].length && 0 === t[d][0].length),
                    "greedy" === n && s)
                  ) {
                    for (var f = [], m = 0; m < g; m++) {
                      var v = a ? e[m] : m;
                      f.push(t[d][v]);
                    }
                    c = "" === f.join("").trim();
                  }
                  if (!c) {
                    for (var w = 0; w < g; w++) {
                      0 < w && !h && (r += l);
                      var b = s && a ? e[w] : w;
                      r += p(t[d][b], w);
                    }
                    d < t.length - 1 && (!n || (0 < g && !h)) && (r += i);
                  }
                }
                return r;
              }
              function p(e, t) {
                var o, i;
                return null == e
                  ? ""
                  : e.constructor === Date
                    ? JSON.stringify(e).slice(1, 25)
                    : ((i = !1),
                      g &&
                        "string" == typeof e &&
                        g.test(e) &&
                        ((e = "'" + e), (i = !0)),
                      (o = e.toString().replace(c, a)),
                      (i =
                        i ||
                        !0 === n ||
                        ("function" == typeof n && n(e, t)) ||
                        (Array.isArray(n) && n[t]) ||
                        ((e, t) => {
                          for (var n = 0; n < t.length; n++)
                            if (-1 < e.indexOf(t[n])) return !0;
                          return !1;
                        })(o, s.BAD_DELIMITERS) ||
                        -1 < o.indexOf(l) ||
                        " " === o.charAt(0) ||
                        " " === o.charAt(o.length - 1))
                        ? r + o + r
                        : o);
              }
            }),
            (s.RECORD_SEP = String.fromCharCode(30)),
            (s.UNIT_SEP = String.fromCharCode(31)),
            (s.BYTE_ORDER_MARK = "\ufeff"),
            (s.BAD_DELIMITERS = ["\r", "\n", '"', s.BYTE_ORDER_MARK]),
            (s.WORKERS_SUPPORTED = !o && !!n.Worker),
            (s.NODE_STREAM_INPUT = 1),
            (s.LocalChunkSize = 10485760),
            (s.RemoteChunkSize = 5242880),
            (s.DefaultDelimiter = ","),
            (s.Parser = p),
            (s.ParserHandle = h),
            (s.NetworkStreamer = u),
            (s.FileStreamer = d),
            (s.StringStreamer = g),
            (s.ReadableStreamStreamer = c),
            n.jQuery &&
              ((t = n.jQuery).fn.parse = function (e) {
                var o = e.config || {},
                  l = [];
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
                      l.push({
                        file: this.files[i],
                        inputElem: this,
                        instanceConfig: t.extend({}, o),
                      });
                  }),
                  i(),
                  this
                );
                function i() {
                  if (0 === l.length) C(e.complete) && e.complete();
                  else {
                    var n,
                      o,
                      i,
                      a,
                      u = l[0];
                    if (C(e.before)) {
                      var d = e.before(u.file, u.inputElem);
                      if ("object" == typeof d) {
                        if ("abort" === d.action)
                          return (
                            (n = "AbortError"),
                            (o = u.file),
                            (i = u.inputElem),
                            (a = d.reason),
                            void (C(e.error) && e.error({ name: n }, o, i, a))
                          );
                        if ("skip" === d.action) return void r();
                        "object" == typeof d.config &&
                          (u.instanceConfig = t.extend(
                            u.instanceConfig,
                            d.config,
                          ));
                      } else if ("skip" === d) return void r();
                    }
                    var g = u.instanceConfig.complete;
                    (u.instanceConfig.complete = function (e) {
                      C(g) && g(e, u.file, u.inputElem), r();
                    }),
                      s.parse(u.file, u.instanceConfig);
                  }
                }
                function r() {
                  l.splice(0, 1), i();
                }
              }),
            l &&
              (n.onmessage = function (e) {
                (e = e.data),
                  void 0 === s.WORKER_ID && e && (s.WORKER_ID = e.workerId),
                  "string" == typeof e.input
                    ? n.postMessage({
                        workerId: s.WORKER_ID,
                        results: s.parse(e.input, e.config),
                        finished: !0,
                      })
                    : ((n.File && e.input instanceof File) ||
                        e.input instanceof Object) &&
                      (e = s.parse(e.input, e.config)) &&
                      n.postMessage({
                        workerId: s.WORKER_ID,
                        results: e,
                        finished: !0,
                      });
              }),
            ((u.prototype = Object.create(a.prototype)).constructor = u),
            ((d.prototype = Object.create(a.prototype)).constructor = d),
            ((g.prototype = Object.create(g.prototype)).constructor = g),
            ((c.prototype = Object.create(a.prototype)).constructor = c),
            s
          );
        }),
        void 0 === (l = "function" == typeof n ? n.apply(t, o) : n) ||
          (e.exports = l);
    },
    67796: (e, t, n) => {
      "use strict";
      n.d(t, { Kv: () => i, N4: () => r });
      var o = n(90626),
        l = n(16666);
      function i(e, t) {
        return e
          ? (function (e) {
              return (
                "function" == typeof e &&
                (() => {
                  const t = Object.getPrototypeOf(e);
                  return t.prototype && t.prototype.isReactComponent;
                })()
              );
            })((n = e)) ||
            "function" == typeof n ||
            (function (e) {
              return (
                "object" == typeof e &&
                "symbol" == typeof e.$$typeof &&
                ["react.memo", "react.forward_ref"].includes(
                  e.$$typeof.description,
                )
              );
            })(n)
            ? o.createElement(e, t)
            : e
          : null;
        var n;
      }
      function r(e) {
        const t = {
            state: {},
            onStateChange: () => {},
            renderFallbackValue: null,
            ...e,
          },
          [n] = o.useState(() => ({ current: (0, l.ZR)(t) })),
          [i, r] = o.useState(() => n.current.initialState);
        return (
          n.current.setOptions((t) => ({
            ...t,
            ...e,
            state: { ...i, ...e.state },
            onStateChange: (t) => {
              r(t), null == e.onStateChange || e.onStateChange(t);
            },
          })),
          n.current
        );
      }
    },
    16666: (e, t, n) => {
      "use strict";
      function o() {
        return {
          accessor: (e, t) =>
            "function" == typeof e
              ? { ...t, accessorFn: e }
              : { ...t, accessorKey: e },
          display: (e) => e,
          group: (e) => e,
        };
      }
      function l(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function i(e, t) {
        return (n) => {
          t.setState((t) => ({ ...t, [e]: l(n, t[e]) }));
        };
      }
      function r(e) {
        return e instanceof Function;
      }
      function s(e, t) {
        const n = [],
          o = (e) => {
            e.forEach((e) => {
              n.push(e);
              const l = t(e);
              null != l && l.length && o(l);
            });
          };
        return o(e), n;
      }
      function a(e, t, n) {
        let o,
          l = [];
        return (i) => {
          let r;
          n.key && n.debug && (r = Date.now());
          const s = e(i);
          if (!(s.length !== l.length || s.some((e, t) => l[t] !== e)))
            return o;
          let a;
          if (
            ((l = s),
            n.key && n.debug && (a = Date.now()),
            (o = t(...s)),
            null == n || null == n.onChange || n.onChange(o),
            n.key && n.debug && null != n && n.debug())
          ) {
            const e = Math.round(100 * (Date.now() - r)) / 100,
              t = Math.round(100 * (Date.now() - a)) / 100,
              o = t / 16,
              l = (e, t) => {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              `%c⏱ ${l(t, 5)} /${l(e, 5)} ms`,
              `\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0, Math.min(120 - 120 * o, 120))}deg 100% 31%);`,
              null == n ? void 0 : n.key,
            );
          }
          return o;
        };
      }
      function u(e, t, n, o) {
        return {
          debug: () => {
            var n;
            return null != (n = null == e ? void 0 : e.debugAll) ? n : e[t];
          },
          key: !1,
          onChange: o,
        };
      }
      n.d(t, {
        FB: () => o,
        HT: () => Q,
        ZR: () => X,
        cU: () => Z,
        h5: () => ee,
        hM: () => J,
      });
      const d = "debugHeaders";
      function g(e, t, n) {
        var o;
        let l = {
          id: null != (o = n.id) ? o : t.id,
          column: t,
          index: n.index,
          isPlaceholder: !!n.isPlaceholder,
          placeholderId: n.placeholderId,
          depth: n.depth,
          subHeaders: [],
          colSpan: 0,
          rowSpan: 0,
          headerGroup: null,
          getLeafHeaders: () => {
            const e = [],
              t = (n) => {
                n.subHeaders && n.subHeaders.length && n.subHeaders.map(t),
                  e.push(n);
              };
            return t(l), e;
          },
          getContext: () => ({ table: e, header: l, column: t }),
        };
        return (
          e._features.forEach((t) => {
            null == t.createHeader || t.createHeader(l, e);
          }),
          l
        );
      }
      const c = {
        createTable: (e) => {
          (e.getHeaderGroups = a(
            () => [
              e.getAllColumns(),
              e.getVisibleLeafColumns(),
              e.getState().columnPinning.left,
              e.getState().columnPinning.right,
            ],
            (t, n, o, l) => {
              var i, r;
              const s =
                  null !=
                  (i =
                    null == o
                      ? void 0
                      : o.map((e) => n.find((t) => t.id === e)).filter(Boolean))
                    ? i
                    : [],
                a =
                  null !=
                  (r =
                    null == l
                      ? void 0
                      : l.map((e) => n.find((t) => t.id === e)).filter(Boolean))
                    ? r
                    : [];
              return h(
                t,
                [
                  ...s,
                  ...n.filter(
                    (e) =>
                      !(
                        (null != o && o.includes(e.id)) ||
                        (null != l && l.includes(e.id))
                      ),
                  ),
                  ...a,
                ],
                e,
              );
            },
            u(e.options, d),
          )),
            (e.getCenterHeaderGroups = a(
              () => [
                e.getAllColumns(),
                e.getVisibleLeafColumns(),
                e.getState().columnPinning.left,
                e.getState().columnPinning.right,
              ],
              (t, n, o, l) =>
                h(
                  t,
                  (n = n.filter(
                    (e) =>
                      !(
                        (null != o && o.includes(e.id)) ||
                        (null != l && l.includes(e.id))
                      ),
                  )),
                  e,
                  "center",
                ),
              u(e.options, d),
            )),
            (e.getLeftHeaderGroups = a(
              () => [
                e.getAllColumns(),
                e.getVisibleLeafColumns(),
                e.getState().columnPinning.left,
              ],
              (t, n, o) => {
                var l;
                return h(
                  t,
                  null !=
                    (l =
                      null == o
                        ? void 0
                        : o
                            .map((e) => n.find((t) => t.id === e))
                            .filter(Boolean))
                    ? l
                    : [],
                  e,
                  "left",
                );
              },
              u(e.options, d),
            )),
            (e.getRightHeaderGroups = a(
              () => [
                e.getAllColumns(),
                e.getVisibleLeafColumns(),
                e.getState().columnPinning.right,
              ],
              (t, n, o) => {
                var l;
                return h(
                  t,
                  null !=
                    (l =
                      null == o
                        ? void 0
                        : o
                            .map((e) => n.find((t) => t.id === e))
                            .filter(Boolean))
                    ? l
                    : [],
                  e,
                  "right",
                );
              },
              u(e.options, d),
            )),
            (e.getFooterGroups = a(
              () => [e.getHeaderGroups()],
              (e) => [...e].reverse(),
              u(e.options, d),
            )),
            (e.getLeftFooterGroups = a(
              () => [e.getLeftHeaderGroups()],
              (e) => [...e].reverse(),
              u(e.options, d),
            )),
            (e.getCenterFooterGroups = a(
              () => [e.getCenterHeaderGroups()],
              (e) => [...e].reverse(),
              u(e.options, d),
            )),
            (e.getRightFooterGroups = a(
              () => [e.getRightHeaderGroups()],
              (e) => [...e].reverse(),
              u(e.options, d),
            )),
            (e.getFlatHeaders = a(
              () => [e.getHeaderGroups()],
              (e) => e.map((e) => e.headers).flat(),
              u(e.options, d),
            )),
            (e.getLeftFlatHeaders = a(
              () => [e.getLeftHeaderGroups()],
              (e) => e.map((e) => e.headers).flat(),
              u(e.options, d),
            )),
            (e.getCenterFlatHeaders = a(
              () => [e.getCenterHeaderGroups()],
              (e) => e.map((e) => e.headers).flat(),
              u(e.options, d),
            )),
            (e.getRightFlatHeaders = a(
              () => [e.getRightHeaderGroups()],
              (e) => e.map((e) => e.headers).flat(),
              u(e.options, d),
            )),
            (e.getCenterLeafHeaders = a(
              () => [e.getCenterFlatHeaders()],
              (e) =>
                e.filter((e) => {
                  var t;
                  return !(null != (t = e.subHeaders) && t.length);
                }),
              u(e.options, d),
            )),
            (e.getLeftLeafHeaders = a(
              () => [e.getLeftFlatHeaders()],
              (e) =>
                e.filter((e) => {
                  var t;
                  return !(null != (t = e.subHeaders) && t.length);
                }),
              u(e.options, d),
            )),
            (e.getRightLeafHeaders = a(
              () => [e.getRightFlatHeaders()],
              (e) =>
                e.filter((e) => {
                  var t;
                  return !(null != (t = e.subHeaders) && t.length);
                }),
              u(e.options, d),
            )),
            (e.getLeafHeaders = a(
              () => [
                e.getLeftHeaderGroups(),
                e.getCenterHeaderGroups(),
                e.getRightHeaderGroups(),
              ],
              (e, t, n) => {
                var o, l, i, r, s, a;
                return [
                  ...(null != (o = null == (l = e[0]) ? void 0 : l.headers)
                    ? o
                    : []),
                  ...(null != (i = null == (r = t[0]) ? void 0 : r.headers)
                    ? i
                    : []),
                  ...(null != (s = null == (a = n[0]) ? void 0 : a.headers)
                    ? s
                    : []),
                ]
                  .map((e) => e.getLeafHeaders())
                  .flat();
              },
              u(e.options, d),
            ));
        },
      };
      function h(e, t, n, o) {
        var l, i;
        let r = 0;
        const s = function (e, t) {
          void 0 === t && (t = 1),
            (r = Math.max(r, t)),
            e
              .filter((e) => e.getIsVisible())
              .forEach((e) => {
                var n;
                null != (n = e.columns) && n.length && s(e.columns, t + 1);
              }, 0);
        };
        s(e);
        let a = [];
        const u = (e, t) => {
            const l = {
                depth: t,
                id: [o, `${t}`].filter(Boolean).join("_"),
                headers: [],
              },
              i = [];
            e.forEach((e) => {
              const r = [...i].reverse()[0];
              let s,
                a = !1;
              if (
                (e.column.depth === l.depth && e.column.parent
                  ? (s = e.column.parent)
                  : ((s = e.column), (a = !0)),
                r && (null == r ? void 0 : r.column) === s)
              )
                r.subHeaders.push(e);
              else {
                const l = g(n, s, {
                  id: [o, t, s.id, null == e ? void 0 : e.id]
                    .filter(Boolean)
                    .join("_"),
                  isPlaceholder: a,
                  placeholderId: a
                    ? `${i.filter((e) => e.column === s).length}`
                    : void 0,
                  depth: t,
                  index: i.length,
                });
                l.subHeaders.push(e), i.push(l);
              }
              l.headers.push(e), (e.headerGroup = l);
            }),
              a.push(l),
              t > 0 && u(i, t - 1);
          },
          d = t.map((e, t) => g(n, e, { depth: r, index: t }));
        u(d, r - 1), a.reverse();
        const c = (e) =>
          e
            .filter((e) => e.column.getIsVisible())
            .map((e) => {
              let t = 0,
                n = 0,
                o = [0];
              e.subHeaders && e.subHeaders.length
                ? ((o = []),
                  c(e.subHeaders).forEach((e) => {
                    let { colSpan: n, rowSpan: l } = e;
                    (t += n), o.push(l);
                  }))
                : (t = 1);
              return (
                (n += Math.min(...o)),
                (e.colSpan = t),
                (e.rowSpan = n),
                { colSpan: t, rowSpan: n }
              );
            });
        return (
          c(null != (l = null == (i = a[0]) ? void 0 : i.headers) ? l : []), a
        );
      }
      const f = (e, t, n, o, l, i, r) => {
          let d = {
            id: t,
            index: o,
            original: n,
            depth: l,
            parentId: r,
            _valuesCache: {},
            _uniqueValuesCache: {},
            getValue: (t) => {
              if (d._valuesCache.hasOwnProperty(t)) return d._valuesCache[t];
              const n = e.getColumn(t);
              return null != n && n.accessorFn
                ? ((d._valuesCache[t] = n.accessorFn(d.original, o)),
                  d._valuesCache[t])
                : void 0;
            },
            getUniqueValues: (t) => {
              if (d._uniqueValuesCache.hasOwnProperty(t))
                return d._uniqueValuesCache[t];
              const n = e.getColumn(t);
              return null != n && n.accessorFn
                ? n.columnDef.getUniqueValues
                  ? ((d._uniqueValuesCache[t] = n.columnDef.getUniqueValues(
                      d.original,
                      o,
                    )),
                    d._uniqueValuesCache[t])
                  : ((d._uniqueValuesCache[t] = [d.getValue(t)]),
                    d._uniqueValuesCache[t])
                : void 0;
            },
            renderValue: (t) => {
              var n;
              return null != (n = d.getValue(t))
                ? n
                : e.options.renderFallbackValue;
            },
            subRows: null != i ? i : [],
            getLeafRows: () => s(d.subRows, (e) => e.subRows),
            getParentRow: () =>
              d.parentId ? e.getRow(d.parentId, !0) : void 0,
            getParentRows: () => {
              let e = [],
                t = d;
              for (;;) {
                const n = t.getParentRow();
                if (!n) break;
                e.push(n), (t = n);
              }
              return e.reverse();
            },
            getAllCells: a(
              () => [e.getAllLeafColumns()],
              (t) =>
                t.map((t) =>
                  (function (e, t, n, o) {
                    const l = {
                      id: `${t.id}_${n.id}`,
                      row: t,
                      column: n,
                      getValue: () => t.getValue(o),
                      renderValue: () => {
                        var t;
                        return null != (t = l.getValue())
                          ? t
                          : e.options.renderFallbackValue;
                      },
                      getContext: a(
                        () => [e, n, t, l],
                        (e, t, n, o) => ({
                          table: e,
                          column: t,
                          row: n,
                          cell: o,
                          getValue: o.getValue,
                          renderValue: o.renderValue,
                        }),
                        u(e.options, "debugCells"),
                      ),
                    };
                    return (
                      e._features.forEach((o) => {
                        null == o.createCell || o.createCell(l, n, t, e);
                      }, {}),
                      l
                    );
                  })(e, d, t, t.id),
                ),
              u(e.options, "debugRows"),
            ),
            _getAllCellsByColumnId: a(
              () => [d.getAllCells()],
              (e) => e.reduce((e, t) => ((e[t.column.id] = t), e), {}),
              u(e.options, "debugRows"),
            ),
          };
          for (let t = 0; t < e._features.length; t++) {
            const n = e._features[t];
            null == n || null == n.createRow || n.createRow(d, e);
          }
          return d;
        },
        p = {
          createColumn: (e, t) => {
            (e._getFacetedRowModel =
              t.options.getFacetedRowModel &&
              t.options.getFacetedRowModel(t, e.id)),
              (e.getFacetedRowModel = () =>
                e._getFacetedRowModel
                  ? e._getFacetedRowModel()
                  : t.getPreFilteredRowModel()),
              (e._getFacetedUniqueValues =
                t.options.getFacetedUniqueValues &&
                t.options.getFacetedUniqueValues(t, e.id)),
              (e.getFacetedUniqueValues = () =>
                e._getFacetedUniqueValues
                  ? e._getFacetedUniqueValues()
                  : new Map()),
              (e._getFacetedMinMaxValues =
                t.options.getFacetedMinMaxValues &&
                t.options.getFacetedMinMaxValues(t, e.id)),
              (e.getFacetedMinMaxValues = () => {
                if (e._getFacetedMinMaxValues)
                  return e._getFacetedMinMaxValues();
              });
          },
        },
        m = (e, t, n) => {
          var o, l;
          const i =
            null == n || null == (o = n.toString()) ? void 0 : o.toLowerCase();
          return Boolean(
            null == (l = e.getValue(t)) ||
              null == (l = l.toString()) ||
              null == (l = l.toLowerCase())
              ? void 0
              : l.includes(i),
          );
        };
      m.autoRemove = (e) => I(e);
      const v = (e, t, n) => {
        var o;
        return Boolean(
          null == (o = e.getValue(t)) || null == (o = o.toString())
            ? void 0
            : o.includes(n),
        );
      };
      v.autoRemove = (e) => I(e);
      const w = (e, t, n) => {
        var o;
        return (
          (null == (o = e.getValue(t)) || null == (o = o.toString())
            ? void 0
            : o.toLowerCase()) === (null == n ? void 0 : n.toLowerCase())
        );
      };
      w.autoRemove = (e) => I(e);
      const b = (e, t, n) => {
        var o;
        return null == (o = e.getValue(t)) ? void 0 : o.includes(n);
      };
      b.autoRemove = (e) => I(e) || !(null != e && e.length);
      const S = (e, t, n) =>
        !n.some((n) => {
          var o;
          return !(null != (o = e.getValue(t)) && o.includes(n));
        });
      S.autoRemove = (e) => I(e) || !(null != e && e.length);
      const C = (e, t, n) =>
        n.some((n) => {
          var o;
          return null == (o = e.getValue(t)) ? void 0 : o.includes(n);
        });
      C.autoRemove = (e) => I(e) || !(null != e && e.length);
      const R = (e, t, n) => e.getValue(t) === n;
      R.autoRemove = (e) => I(e);
      const _ = (e, t, n) => e.getValue(t) == n;
      _.autoRemove = (e) => I(e);
      const y = (e, t, n) => {
        let [o, l] = n;
        const i = e.getValue(t);
        return i >= o && i <= l;
      };
      (y.resolveFilterValue = (e) => {
        let [t, n] = e,
          o = "number" != typeof t ? parseFloat(t) : t,
          l = "number" != typeof n ? parseFloat(n) : n,
          i = null === t || Number.isNaN(o) ? -1 / 0 : o,
          r = null === n || Number.isNaN(l) ? 1 / 0 : l;
        if (i > r) {
          const e = i;
          (i = r), (r = e);
        }
        return [i, r];
      }),
        (y.autoRemove = (e) => I(e) || (I(e[0]) && I(e[1])));
      const F = {
        includesString: m,
        includesStringSensitive: v,
        equalsString: w,
        arrIncludes: b,
        arrIncludesAll: S,
        arrIncludesSome: C,
        equals: R,
        weakEquals: _,
        inNumberRange: y,
      };
      function I(e) {
        return null == e || "" === e;
      }
      const x = {
        getDefaultColumnDef: () => ({ filterFn: "auto" }),
        getInitialState: (e) => ({ columnFilters: [], ...e }),
        getDefaultOptions: (e) => ({
          onColumnFiltersChange: i("columnFilters", e),
          filterFromLeafRows: !1,
          maxLeafRowFilterDepth: 100,
        }),
        createColumn: (e, t) => {
          (e.getAutoFilterFn = () => {
            const n = t.getCoreRowModel().flatRows[0],
              o = null == n ? void 0 : n.getValue(e.id);
            return "string" == typeof o
              ? F.includesString
              : "number" == typeof o
                ? F.inNumberRange
                : "boolean" == typeof o || (null !== o && "object" == typeof o)
                  ? F.equals
                  : Array.isArray(o)
                    ? F.arrIncludes
                    : F.weakEquals;
          }),
            (e.getFilterFn = () => {
              var n, o;
              return r(e.columnDef.filterFn)
                ? e.columnDef.filterFn
                : "auto" === e.columnDef.filterFn
                  ? e.getAutoFilterFn()
                  : null !=
                      (n =
                        null == (o = t.options.filterFns)
                          ? void 0
                          : o[e.columnDef.filterFn])
                    ? n
                    : F[e.columnDef.filterFn];
            }),
            (e.getCanFilter = () => {
              var n, o, l;
              return (
                (null == (n = e.columnDef.enableColumnFilter) || n) &&
                (null == (o = t.options.enableColumnFilters) || o) &&
                (null == (l = t.options.enableFilters) || l) &&
                !!e.accessorFn
              );
            }),
            (e.getIsFiltered = () => e.getFilterIndex() > -1),
            (e.getFilterValue = () => {
              var n;
              return null == (n = t.getState().columnFilters) ||
                null == (n = n.find((t) => t.id === e.id))
                ? void 0
                : n.value;
            }),
            (e.getFilterIndex = () => {
              var n, o;
              return null !=
                (n =
                  null == (o = t.getState().columnFilters)
                    ? void 0
                    : o.findIndex((t) => t.id === e.id))
                ? n
                : -1;
            }),
            (e.setFilterValue = (n) => {
              t.setColumnFilters((t) => {
                const o = e.getFilterFn(),
                  i = null == t ? void 0 : t.find((t) => t.id === e.id),
                  r = l(n, i ? i.value : void 0);
                var s;
                if (M(o, r, e))
                  return null !=
                    (s = null == t ? void 0 : t.filter((t) => t.id !== e.id))
                    ? s
                    : [];
                const a = { id: e.id, value: r };
                var u;
                return i
                  ? null !=
                    (u =
                      null == t
                        ? void 0
                        : t.map((t) => (t.id === e.id ? a : t)))
                    ? u
                    : []
                  : null != t && t.length
                    ? [...t, a]
                    : [a];
              });
            });
        },
        createRow: (e, t) => {
          (e.columnFilters = {}), (e.columnFiltersMeta = {});
        },
        createTable: (e) => {
          (e.setColumnFilters = (t) => {
            const n = e.getAllLeafColumns();
            null == e.options.onColumnFiltersChange ||
              e.options.onColumnFiltersChange((e) => {
                var o;
                return null == (o = l(t, e))
                  ? void 0
                  : o.filter((e) => {
                      const t = n.find((t) => t.id === e.id);
                      if (t) {
                        if (M(t.getFilterFn(), e.value, t)) return !1;
                      }
                      return !0;
                    });
              });
          }),
            (e.resetColumnFilters = (t) => {
              var n, o;
              e.setColumnFilters(
                t
                  ? []
                  : null !=
                      (n =
                        null == (o = e.initialState) ? void 0 : o.columnFilters)
                    ? n
                    : [],
              );
            }),
            (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
            (e.getFilteredRowModel = () => (
              !e._getFilteredRowModel &&
                e.options.getFilteredRowModel &&
                (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
              e.options.manualFiltering || !e._getFilteredRowModel
                ? e.getPreFilteredRowModel()
                : e._getFilteredRowModel()
            ));
        },
      };
      function M(e, t, n) {
        return (
          (!(!e || !e.autoRemove) && e.autoRemove(t, n)) ||
          void 0 === t ||
          ("string" == typeof t && !t)
        );
      }
      const E = {
          sum: (e, t, n) =>
            n.reduce((t, n) => {
              const o = n.getValue(e);
              return t + ("number" == typeof o ? o : 0);
            }, 0),
          min: (e, t, n) => {
            let o;
            return (
              n.forEach((t) => {
                const n = t.getValue(e);
                null != n && (o > n || (void 0 === o && n >= n)) && (o = n);
              }),
              o
            );
          },
          max: (e, t, n) => {
            let o;
            return (
              n.forEach((t) => {
                const n = t.getValue(e);
                null != n && (o < n || (void 0 === o && n >= n)) && (o = n);
              }),
              o
            );
          },
          extent: (e, t, n) => {
            let o, l;
            return (
              n.forEach((t) => {
                const n = t.getValue(e);
                null != n &&
                  (void 0 === o
                    ? n >= n && (o = l = n)
                    : (o > n && (o = n), l < n && (l = n)));
              }),
              [o, l]
            );
          },
          mean: (e, t) => {
            let n = 0,
              o = 0;
            if (
              (t.forEach((t) => {
                let l = t.getValue(e);
                null != l && (l = +l) >= l && (++n, (o += l));
              }),
              n)
            )
              return o / n;
          },
          median: (e, t) => {
            if (!t.length) return;
            const n = t.map((t) => t.getValue(e));
            if (
              ((o = n),
              !Array.isArray(o) || !o.every((e) => "number" == typeof e))
            )
              return;
            var o;
            if (1 === n.length) return n[0];
            const l = Math.floor(n.length / 2),
              i = n.sort((e, t) => e - t);
            return n.length % 2 != 0 ? i[l] : (i[l - 1] + i[l]) / 2;
          },
          unique: (e, t) =>
            Array.from(new Set(t.map((t) => t.getValue(e))).values()),
          uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
          count: (e, t) => t.length,
        },
        P = {
          getDefaultColumnDef: () => ({
            aggregatedCell: (e) => {
              var t, n;
              return null !=
                (t =
                  null == (n = e.getValue()) || null == n.toString
                    ? void 0
                    : n.toString())
                ? t
                : null;
            },
            aggregationFn: "auto",
          }),
          getInitialState: (e) => ({ grouping: [], ...e }),
          getDefaultOptions: (e) => ({
            onGroupingChange: i("grouping", e),
            groupedColumnMode: "reorder",
          }),
          createColumn: (e, t) => {
            (e.toggleGrouping = () => {
              t.setGrouping((t) =>
                null != t && t.includes(e.id)
                  ? t.filter((t) => t !== e.id)
                  : [...(null != t ? t : []), e.id],
              );
            }),
              (e.getCanGroup = () => {
                var n, o;
                return (
                  (null == (n = e.columnDef.enableGrouping) || n) &&
                  (null == (o = t.options.enableGrouping) || o) &&
                  (!!e.accessorFn || !!e.columnDef.getGroupingValue)
                );
              }),
              (e.getIsGrouped = () => {
                var n;
                return null == (n = t.getState().grouping)
                  ? void 0
                  : n.includes(e.id);
              }),
              (e.getGroupedIndex = () => {
                var n;
                return null == (n = t.getState().grouping)
                  ? void 0
                  : n.indexOf(e.id);
              }),
              (e.getToggleGroupingHandler = () => {
                const t = e.getCanGroup();
                return () => {
                  t && e.toggleGrouping();
                };
              }),
              (e.getAutoAggregationFn = () => {
                const n = t.getCoreRowModel().flatRows[0],
                  o = null == n ? void 0 : n.getValue(e.id);
                return "number" == typeof o
                  ? E.sum
                  : "[object Date]" === Object.prototype.toString.call(o)
                    ? E.extent
                    : void 0;
              }),
              (e.getAggregationFn = () => {
                var n, o;
                if (!e) throw new Error();
                return r(e.columnDef.aggregationFn)
                  ? e.columnDef.aggregationFn
                  : "auto" === e.columnDef.aggregationFn
                    ? e.getAutoAggregationFn()
                    : null !=
                        (n =
                          null == (o = t.options.aggregationFns)
                            ? void 0
                            : o[e.columnDef.aggregationFn])
                      ? n
                      : E[e.columnDef.aggregationFn];
              });
          },
          createTable: (e) => {
            (e.setGrouping = (t) =>
              null == e.options.onGroupingChange
                ? void 0
                : e.options.onGroupingChange(t)),
              (e.resetGrouping = (t) => {
                var n, o;
                e.setGrouping(
                  t
                    ? []
                    : null !=
                        (n = null == (o = e.initialState) ? void 0 : o.grouping)
                      ? n
                      : [],
                );
              }),
              (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
              (e.getGroupedRowModel = () => (
                !e._getGroupedRowModel &&
                  e.options.getGroupedRowModel &&
                  (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
                e.options.manualGrouping || !e._getGroupedRowModel
                  ? e.getPreGroupedRowModel()
                  : e._getGroupedRowModel()
              ));
          },
          createRow: (e, t) => {
            (e.getIsGrouped = () => !!e.groupingColumnId),
              (e.getGroupingValue = (n) => {
                if (e._groupingValuesCache.hasOwnProperty(n))
                  return e._groupingValuesCache[n];
                const o = t.getColumn(n);
                return null != o && o.columnDef.getGroupingValue
                  ? ((e._groupingValuesCache[n] = o.columnDef.getGroupingValue(
                      e.original,
                    )),
                    e._groupingValuesCache[n])
                  : e.getValue(n);
              }),
              (e._groupingValuesCache = {});
          },
          createCell: (e, t, n, o) => {
            (e.getIsGrouped = () =>
              t.getIsGrouped() && t.id === n.groupingColumnId),
              (e.getIsPlaceholder = () =>
                !e.getIsGrouped() && t.getIsGrouped()),
              (e.getIsAggregated = () => {
                var t;
                return (
                  !e.getIsGrouped() &&
                  !e.getIsPlaceholder() &&
                  !(null == (t = n.subRows) || !t.length)
                );
              });
          },
        };
      const O = {
          getInitialState: (e) => ({ columnOrder: [], ...e }),
          getDefaultOptions: (e) => ({
            onColumnOrderChange: i("columnOrder", e),
          }),
          createColumn: (e, t) => {
            (e.getIndex = a(
              (e) => [L(t, e)],
              (t) => t.findIndex((t) => t.id === e.id),
              u(t.options, "debugColumns"),
            )),
              (e.getIsFirstColumn = (n) => {
                var o;
                return (null == (o = L(t, n)[0]) ? void 0 : o.id) === e.id;
              }),
              (e.getIsLastColumn = (n) => {
                var o;
                const l = L(t, n);
                return (null == (o = l[l.length - 1]) ? void 0 : o.id) === e.id;
              });
          },
          createTable: (e) => {
            (e.setColumnOrder = (t) =>
              null == e.options.onColumnOrderChange
                ? void 0
                : e.options.onColumnOrderChange(t)),
              (e.resetColumnOrder = (t) => {
                var n;
                e.setColumnOrder(
                  t ? [] : null != (n = e.initialState.columnOrder) ? n : [],
                );
              }),
              (e._getOrderColumnsFn = a(
                () => [
                  e.getState().columnOrder,
                  e.getState().grouping,
                  e.options.groupedColumnMode,
                ],
                (e, t, n) => (o) => {
                  let l = [];
                  if (null != e && e.length) {
                    const t = [...e],
                      n = [...o];
                    for (; n.length && t.length; ) {
                      const e = t.shift(),
                        o = n.findIndex((t) => t.id === e);
                      o > -1 && l.push(n.splice(o, 1)[0]);
                    }
                    l = [...l, ...n];
                  } else l = o;
                  return (function (e, t, n) {
                    if (null == t || !t.length || !n) return e;
                    const o = e.filter((e) => !t.includes(e.id));
                    return "remove" === n
                      ? o
                      : [
                          ...t
                            .map((t) => e.find((e) => e.id === t))
                            .filter(Boolean),
                          ...o,
                        ];
                  })(l, t, n);
                },
                u(e.options, "debugTable"),
              ));
          },
        },
        V = {
          getInitialState: (e) => ({
            columnPinning: { left: [], right: [] },
            ...e,
          }),
          getDefaultOptions: (e) => ({
            onColumnPinningChange: i("columnPinning", e),
          }),
          createColumn: (e, t) => {
            (e.pin = (n) => {
              const o = e
                .getLeafColumns()
                .map((e) => e.id)
                .filter(Boolean);
              t.setColumnPinning((e) => {
                var t, l, i, r, s, a;
                return "right" === n
                  ? {
                      left: (null != (i = null == e ? void 0 : e.left)
                        ? i
                        : []
                      ).filter((e) => !(null != o && o.includes(e))),
                      right: [
                        ...(null != (r = null == e ? void 0 : e.right)
                          ? r
                          : []
                        ).filter((e) => !(null != o && o.includes(e))),
                        ...o,
                      ],
                    }
                  : "left" === n
                    ? {
                        left: [
                          ...(null != (s = null == e ? void 0 : e.left)
                            ? s
                            : []
                          ).filter((e) => !(null != o && o.includes(e))),
                          ...o,
                        ],
                        right: (null != (a = null == e ? void 0 : e.right)
                          ? a
                          : []
                        ).filter((e) => !(null != o && o.includes(e))),
                      }
                    : {
                        left: (null != (t = null == e ? void 0 : e.left)
                          ? t
                          : []
                        ).filter((e) => !(null != o && o.includes(e))),
                        right: (null != (l = null == e ? void 0 : e.right)
                          ? l
                          : []
                        ).filter((e) => !(null != o && o.includes(e))),
                      };
              });
            }),
              (e.getCanPin = () =>
                e.getLeafColumns().some((e) => {
                  var n, o, l;
                  return (
                    (null == (n = e.columnDef.enablePinning) || n) &&
                    (null ==
                      (o =
                        null != (l = t.options.enableColumnPinning)
                          ? l
                          : t.options.enablePinning) ||
                      o)
                  );
                })),
              (e.getIsPinned = () => {
                const n = e.getLeafColumns().map((e) => e.id),
                  { left: o, right: l } = t.getState().columnPinning,
                  i = n.some((e) => (null == o ? void 0 : o.includes(e))),
                  r = n.some((e) => (null == l ? void 0 : l.includes(e)));
                return i ? "left" : !!r && "right";
              }),
              (e.getPinnedIndex = () => {
                var n, o;
                const l = e.getIsPinned();
                return l
                  ? null !=
                    (n =
                      null == (o = t.getState().columnPinning) ||
                      null == (o = o[l])
                        ? void 0
                        : o.indexOf(e.id))
                    ? n
                    : -1
                  : 0;
              });
          },
          createRow: (e, t) => {
            (e.getCenterVisibleCells = a(
              () => [
                e._getAllVisibleCells(),
                t.getState().columnPinning.left,
                t.getState().columnPinning.right,
              ],
              (e, t, n) => {
                const o = [...(null != t ? t : []), ...(null != n ? n : [])];
                return e.filter((e) => !o.includes(e.column.id));
              },
              u(t.options, "debugRows"),
            )),
              (e.getLeftVisibleCells = a(
                () => [
                  e._getAllVisibleCells(),
                  t.getState().columnPinning.left,
                ],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.column.id === t))
                    .filter(Boolean)
                    .map((e) => ({ ...e, position: "left" })),
                u(t.options, "debugRows"),
              )),
              (e.getRightVisibleCells = a(
                () => [
                  e._getAllVisibleCells(),
                  t.getState().columnPinning.right,
                ],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.column.id === t))
                    .filter(Boolean)
                    .map((e) => ({ ...e, position: "right" })),
                u(t.options, "debugRows"),
              ));
          },
          createTable: (e) => {
            (e.setColumnPinning = (t) =>
              null == e.options.onColumnPinningChange
                ? void 0
                : e.options.onColumnPinningChange(t)),
              (e.resetColumnPinning = (t) => {
                var n, o;
                return e.setColumnPinning(
                  t
                    ? { left: [], right: [] }
                    : null !=
                        (n =
                          null == (o = e.initialState)
                            ? void 0
                            : o.columnPinning)
                      ? n
                      : { left: [], right: [] },
                );
              }),
              (e.getIsSomeColumnsPinned = (t) => {
                var n;
                const o = e.getState().columnPinning;
                var l, i;
                return t
                  ? Boolean(null == (n = o[t]) ? void 0 : n.length)
                  : Boolean(
                      (null == (l = o.left) ? void 0 : l.length) ||
                        (null == (i = o.right) ? void 0 : i.length),
                    );
              }),
              (e.getLeftLeafColumns = a(
                () => [e.getAllLeafColumns(), e.getState().columnPinning.left],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.id === t))
                    .filter(Boolean),
                u(e.options, "debugColumns"),
              )),
              (e.getRightLeafColumns = a(
                () => [e.getAllLeafColumns(), e.getState().columnPinning.right],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.id === t))
                    .filter(Boolean),
                u(e.options, "debugColumns"),
              )),
              (e.getCenterLeafColumns = a(
                () => [
                  e.getAllLeafColumns(),
                  e.getState().columnPinning.left,
                  e.getState().columnPinning.right,
                ],
                (e, t, n) => {
                  const o = [...(null != t ? t : []), ...(null != n ? n : [])];
                  return e.filter((e) => !o.includes(e.id));
                },
                u(e.options, "debugColumns"),
              ));
          },
        },
        z = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
        k = {
          getDefaultColumnDef: () => z,
          getInitialState: (e) => ({
            columnSizing: {},
            columnSizingInfo: {
              startOffset: null,
              startSize: null,
              deltaOffset: null,
              deltaPercentage: null,
              isResizingColumn: !1,
              columnSizingStart: [],
            },
            ...e,
          }),
          getDefaultOptions: (e) => ({
            columnResizeMode: "onEnd",
            columnResizeDirection: "ltr",
            onColumnSizingChange: i("columnSizing", e),
            onColumnSizingInfoChange: i("columnSizingInfo", e),
          }),
          createColumn: (e, t) => {
            (e.getSize = () => {
              var n, o, l;
              const i = t.getState().columnSizing[e.id];
              return Math.min(
                Math.max(
                  null != (n = e.columnDef.minSize) ? n : z.minSize,
                  null != (o = null != i ? i : e.columnDef.size) ? o : z.size,
                ),
                null != (l = e.columnDef.maxSize) ? l : z.maxSize,
              );
            }),
              (e.getStart = a(
                (e) => [e, L(t, e), t.getState().columnSizing],
                (t, n) =>
                  n
                    .slice(0, e.getIndex(t))
                    .reduce((e, t) => e + t.getSize(), 0),
                u(t.options, "debugColumns"),
              )),
              (e.getAfter = a(
                (e) => [e, L(t, e), t.getState().columnSizing],
                (t, n) =>
                  n
                    .slice(e.getIndex(t) + 1)
                    .reduce((e, t) => e + t.getSize(), 0),
                u(t.options, "debugColumns"),
              )),
              (e.resetSize = () => {
                t.setColumnSizing((t) => {
                  let { [e.id]: n, ...o } = t;
                  return o;
                });
              }),
              (e.getCanResize = () => {
                var n, o;
                return (
                  (null == (n = e.columnDef.enableResizing) || n) &&
                  (null == (o = t.options.enableColumnResizing) || o)
                );
              }),
              (e.getIsResizing = () =>
                t.getState().columnSizingInfo.isResizingColumn === e.id);
          },
          createHeader: (e, t) => {
            (e.getSize = () => {
              let t = 0;
              const n = (e) => {
                var o;
                e.subHeaders.length
                  ? e.subHeaders.forEach(n)
                  : (t += null != (o = e.column.getSize()) ? o : 0);
              };
              return n(e), t;
            }),
              (e.getStart = () => {
                if (e.index > 0) {
                  const t = e.headerGroup.headers[e.index - 1];
                  return t.getStart() + t.getSize();
                }
                return 0;
              }),
              (e.getResizeHandler = (n) => {
                const o = t.getColumn(e.column.id),
                  l = null == o ? void 0 : o.getCanResize();
                return (i) => {
                  if (!o || !l) return;
                  if (
                    (null == i.persist || i.persist(),
                    D(i) && i.touches && i.touches.length > 1)
                  )
                    return;
                  const r = e.getSize(),
                    s = e
                      ? e
                          .getLeafHeaders()
                          .map((e) => [e.column.id, e.column.getSize()])
                      : [[o.id, o.getSize()]],
                    a = D(i) ? Math.round(i.touches[0].clientX) : i.clientX,
                    u = {},
                    d = (e, n) => {
                      "number" == typeof n &&
                        (t.setColumnSizingInfo((e) => {
                          var o, l;
                          const i =
                              "rtl" === t.options.columnResizeDirection
                                ? -1
                                : 1,
                            r =
                              (n -
                                (null !=
                                (o = null == e ? void 0 : e.startOffset)
                                  ? o
                                  : 0)) *
                              i,
                            s = Math.max(
                              r /
                                (null != (l = null == e ? void 0 : e.startSize)
                                  ? l
                                  : 0),
                              -0.999999,
                            );
                          return (
                            e.columnSizingStart.forEach((e) => {
                              let [t, n] = e;
                              u[t] =
                                Math.round(100 * Math.max(n + n * s, 0)) / 100;
                            }),
                            { ...e, deltaOffset: r, deltaPercentage: s }
                          );
                        }),
                        ("onChange" !== t.options.columnResizeMode &&
                          "end" !== e) ||
                          t.setColumnSizing((e) => ({ ...e, ...u })));
                    },
                    g = (e) => d("move", e),
                    c = (e) => {
                      d("end", e),
                        t.setColumnSizingInfo((e) => ({
                          ...e,
                          isResizingColumn: !1,
                          startOffset: null,
                          startSize: null,
                          deltaOffset: null,
                          deltaPercentage: null,
                          columnSizingStart: [],
                        }));
                    },
                    h = n || "undefined" != typeof document ? document : null,
                    f = {
                      moveHandler: (e) => g(e.clientX),
                      upHandler: (e) => {
                        null == h ||
                          h.removeEventListener("mousemove", f.moveHandler),
                          null == h ||
                            h.removeEventListener("mouseup", f.upHandler),
                          c(e.clientX);
                      },
                    },
                    p = {
                      moveHandler: (e) => (
                        e.cancelable &&
                          (e.preventDefault(), e.stopPropagation()),
                        g(e.touches[0].clientX),
                        !1
                      ),
                      upHandler: (e) => {
                        var t;
                        null == h ||
                          h.removeEventListener("touchmove", p.moveHandler),
                          null == h ||
                            h.removeEventListener("touchend", p.upHandler),
                          e.cancelable &&
                            (e.preventDefault(), e.stopPropagation()),
                          c(null == (t = e.touches[0]) ? void 0 : t.clientX);
                      },
                    },
                    m = !!(function () {
                      if ("boolean" == typeof A) return A;
                      let e = !1;
                      try {
                        const t = {
                            get passive() {
                              return (e = !0), !1;
                            },
                          },
                          n = () => {};
                        window.addEventListener("test", n, t),
                          window.removeEventListener("test", n);
                      } catch (t) {
                        e = !1;
                      }
                      return (A = e), A;
                    })() && { passive: !1 };
                  D(i)
                    ? (null == h ||
                        h.addEventListener("touchmove", p.moveHandler, m),
                      null == h ||
                        h.addEventListener("touchend", p.upHandler, m))
                    : (null == h ||
                        h.addEventListener("mousemove", f.moveHandler, m),
                      null == h ||
                        h.addEventListener("mouseup", f.upHandler, m)),
                    t.setColumnSizingInfo((e) => ({
                      ...e,
                      startOffset: a,
                      startSize: r,
                      deltaOffset: 0,
                      deltaPercentage: 0,
                      columnSizingStart: s,
                      isResizingColumn: o.id,
                    }));
                };
              });
          },
          createTable: (e) => {
            (e.setColumnSizing = (t) =>
              null == e.options.onColumnSizingChange
                ? void 0
                : e.options.onColumnSizingChange(t)),
              (e.setColumnSizingInfo = (t) =>
                null == e.options.onColumnSizingInfoChange
                  ? void 0
                  : e.options.onColumnSizingInfoChange(t)),
              (e.resetColumnSizing = (t) => {
                var n;
                e.setColumnSizing(
                  t ? {} : null != (n = e.initialState.columnSizing) ? n : {},
                );
              }),
              (e.resetHeaderSizeInfo = (t) => {
                var n;
                e.setColumnSizingInfo(
                  t
                    ? {
                        startOffset: null,
                        startSize: null,
                        deltaOffset: null,
                        deltaPercentage: null,
                        isResizingColumn: !1,
                        columnSizingStart: [],
                      }
                    : null != (n = e.initialState.columnSizingInfo)
                      ? n
                      : {
                          startOffset: null,
                          startSize: null,
                          deltaOffset: null,
                          deltaPercentage: null,
                          isResizingColumn: !1,
                          columnSizingStart: [],
                        },
                );
              }),
              (e.getTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getLeftTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getLeftHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getCenterTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getCenterHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getRightTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getRightHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              });
          },
        };
      let A = null;
      function D(e) {
        return "touchstart" === e.type;
      }
      function L(e, t) {
        return t
          ? "center" === t
            ? e.getCenterVisibleLeafColumns()
            : "left" === t
              ? e.getLeftVisibleLeafColumns()
              : e.getRightVisibleLeafColumns()
          : e.getVisibleLeafColumns();
      }
      const T = {
          getInitialState: (e) => ({ rowSelection: {}, ...e }),
          getDefaultOptions: (e) => ({
            onRowSelectionChange: i("rowSelection", e),
            enableRowSelection: !0,
            enableMultiRowSelection: !0,
            enableSubRowSelection: !0,
          }),
          createTable: (e) => {
            (e.setRowSelection = (t) =>
              null == e.options.onRowSelectionChange
                ? void 0
                : e.options.onRowSelectionChange(t)),
              (e.resetRowSelection = (t) => {
                var n;
                return e.setRowSelection(
                  t ? {} : null != (n = e.initialState.rowSelection) ? n : {},
                );
              }),
              (e.toggleAllRowsSelected = (t) => {
                e.setRowSelection((n) => {
                  t = void 0 !== t ? t : !e.getIsAllRowsSelected();
                  const o = { ...n },
                    l = e.getPreGroupedRowModel().flatRows;
                  return (
                    t
                      ? l.forEach((e) => {
                          e.getCanSelect() && (o[e.id] = !0);
                        })
                      : l.forEach((e) => {
                          delete o[e.id];
                        }),
                    o
                  );
                });
              }),
              (e.toggleAllPageRowsSelected = (t) =>
                e.setRowSelection((n) => {
                  const o = void 0 !== t ? t : !e.getIsAllPageRowsSelected(),
                    l = { ...n };
                  return (
                    e.getRowModel().rows.forEach((t) => {
                      G(l, t.id, o, !0, e);
                    }),
                    l
                  );
                })),
              (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
              (e.getSelectedRowModel = a(
                () => [e.getState().rowSelection, e.getCoreRowModel()],
                (t, n) =>
                  Object.keys(t).length
                    ? H(e, n)
                    : { rows: [], flatRows: [], rowsById: {} },
                u(e.options, "debugTable"),
              )),
              (e.getFilteredSelectedRowModel = a(
                () => [e.getState().rowSelection, e.getFilteredRowModel()],
                (t, n) =>
                  Object.keys(t).length
                    ? H(e, n)
                    : { rows: [], flatRows: [], rowsById: {} },
                u(e.options, "debugTable"),
              )),
              (e.getGroupedSelectedRowModel = a(
                () => [e.getState().rowSelection, e.getSortedRowModel()],
                (t, n) =>
                  Object.keys(t).length
                    ? H(e, n)
                    : { rows: [], flatRows: [], rowsById: {} },
                u(e.options, "debugTable"),
              )),
              (e.getIsAllRowsSelected = () => {
                const t = e.getFilteredRowModel().flatRows,
                  { rowSelection: n } = e.getState();
                let o = Boolean(t.length && Object.keys(n).length);
                return (
                  o && t.some((e) => e.getCanSelect() && !n[e.id]) && (o = !1),
                  o
                );
              }),
              (e.getIsAllPageRowsSelected = () => {
                const t = e
                    .getPaginationRowModel()
                    .flatRows.filter((e) => e.getCanSelect()),
                  { rowSelection: n } = e.getState();
                let o = !!t.length;
                return o && t.some((e) => !n[e.id]) && (o = !1), o;
              }),
              (e.getIsSomeRowsSelected = () => {
                var t;
                const n = Object.keys(
                  null != (t = e.getState().rowSelection) ? t : {},
                ).length;
                return n > 0 && n < e.getFilteredRowModel().flatRows.length;
              }),
              (e.getIsSomePageRowsSelected = () => {
                const t = e.getPaginationRowModel().flatRows;
                return (
                  !e.getIsAllPageRowsSelected() &&
                  t
                    .filter((e) => e.getCanSelect())
                    .some((e) => e.getIsSelected() || e.getIsSomeSelected())
                );
              }),
              (e.getToggleAllRowsSelectedHandler = () => (t) => {
                e.toggleAllRowsSelected(t.target.checked);
              }),
              (e.getToggleAllPageRowsSelectedHandler = () => (t) => {
                e.toggleAllPageRowsSelected(t.target.checked);
              });
          },
          createRow: (e, t) => {
            (e.toggleSelected = (n, o) => {
              const l = e.getIsSelected();
              t.setRowSelection((i) => {
                var r;
                if (((n = void 0 !== n ? n : !l), e.getCanSelect() && l === n))
                  return i;
                const s = { ...i };
                return (
                  G(
                    s,
                    e.id,
                    n,
                    null == (r = null == o ? void 0 : o.selectChildren) || r,
                    t,
                  ),
                  s
                );
              });
            }),
              (e.getIsSelected = () => {
                const { rowSelection: n } = t.getState();
                return B(e, n);
              }),
              (e.getIsSomeSelected = () => {
                const { rowSelection: n } = t.getState();
                return "some" === j(e, n);
              }),
              (e.getIsAllSubRowsSelected = () => {
                const { rowSelection: n } = t.getState();
                return "all" === j(e, n);
              }),
              (e.getCanSelect = () => {
                var n;
                return "function" == typeof t.options.enableRowSelection
                  ? t.options.enableRowSelection(e)
                  : null == (n = t.options.enableRowSelection) || n;
              }),
              (e.getCanSelectSubRows = () => {
                var n;
                return "function" == typeof t.options.enableSubRowSelection
                  ? t.options.enableSubRowSelection(e)
                  : null == (n = t.options.enableSubRowSelection) || n;
              }),
              (e.getCanMultiSelect = () => {
                var n;
                return "function" == typeof t.options.enableMultiRowSelection
                  ? t.options.enableMultiRowSelection(e)
                  : null == (n = t.options.enableMultiRowSelection) || n;
              }),
              (e.getToggleSelectedHandler = () => {
                const t = e.getCanSelect();
                return (n) => {
                  var o;
                  t &&
                    e.toggleSelected(
                      null == (o = n.target) ? void 0 : o.checked,
                    );
                };
              });
          },
        },
        G = (e, t, n, o, l) => {
          var i;
          const r = l.getRow(t, !0);
          n
            ? (r.getCanMultiSelect() ||
                Object.keys(e).forEach((t) => delete e[t]),
              r.getCanSelect() && (e[t] = !0))
            : delete e[t],
            o &&
              null != (i = r.subRows) &&
              i.length &&
              r.getCanSelectSubRows() &&
              r.subRows.forEach((t) => G(e, t.id, n, o, l));
        };
      function H(e, t) {
        const n = e.getState().rowSelection,
          o = [],
          l = {},
          i = function (e, t) {
            return e
              .map((e) => {
                var t;
                const r = B(e, n);
                if (
                  (r && (o.push(e), (l[e.id] = e)),
                  null != (t = e.subRows) &&
                    t.length &&
                    (e = { ...e, subRows: i(e.subRows) }),
                  r)
                )
                  return e;
              })
              .filter(Boolean);
          };
        return { rows: i(t.rows), flatRows: o, rowsById: l };
      }
      function B(e, t) {
        var n;
        return null != (n = t[e.id]) && n;
      }
      function j(e, t, n) {
        var o;
        if (null == (o = e.subRows) || !o.length) return !1;
        let l = !0,
          i = !1;
        return (
          e.subRows.forEach((e) => {
            if (
              (!i || l) &&
              (e.getCanSelect() && (B(e, t) ? (i = !0) : (l = !1)),
              e.subRows && e.subRows.length)
            ) {
              const n = j(e, t);
              "all" === n
                ? (i = !0)
                : "some" === n
                  ? ((i = !0), (l = !1))
                  : (l = !1);
            }
          }),
          l ? "all" : !!i && "some"
        );
      }
      const q = /([0-9]+)/gm;
      function N(e, t) {
        return e === t ? 0 : e > t ? 1 : -1;
      }
      function U(e) {
        return "number" == typeof e
          ? isNaN(e) || e === 1 / 0 || e === -1 / 0
            ? ""
            : String(e)
          : "string" == typeof e
            ? e
            : "";
      }
      function W(e, t) {
        const n = e.split(q).filter(Boolean),
          o = t.split(q).filter(Boolean);
        for (; n.length && o.length; ) {
          const e = n.shift(),
            t = o.shift(),
            l = parseInt(e, 10),
            i = parseInt(t, 10),
            r = [l, i].sort();
          if (isNaN(r[0])) {
            if (e > t) return 1;
            if (t > e) return -1;
          } else {
            if (isNaN(r[1])) return isNaN(l) ? -1 : 1;
            if (l > i) return 1;
            if (i > l) return -1;
          }
        }
        return n.length - o.length;
      }
      const $ = {
          alphanumeric: (e, t, n) =>
            W(U(e.getValue(n)).toLowerCase(), U(t.getValue(n)).toLowerCase()),
          alphanumericCaseSensitive: (e, t, n) =>
            W(U(e.getValue(n)), U(t.getValue(n))),
          text: (e, t, n) =>
            N(U(e.getValue(n)).toLowerCase(), U(t.getValue(n)).toLowerCase()),
          textCaseSensitive: (e, t, n) => N(U(e.getValue(n)), U(t.getValue(n))),
          datetime: (e, t, n) => {
            const o = e.getValue(n),
              l = t.getValue(n);
            return o > l ? 1 : o < l ? -1 : 0;
          },
          basic: (e, t, n) => N(e.getValue(n), t.getValue(n)),
        },
        K = [
          c,
          {
            getInitialState: (e) => ({ columnVisibility: {}, ...e }),
            getDefaultOptions: (e) => ({
              onColumnVisibilityChange: i("columnVisibility", e),
            }),
            createColumn: (e, t) => {
              (e.toggleVisibility = (n) => {
                e.getCanHide() &&
                  t.setColumnVisibility((t) => ({
                    ...t,
                    [e.id]: null != n ? n : !e.getIsVisible(),
                  }));
              }),
                (e.getIsVisible = () => {
                  var n, o;
                  const l = e.columns;
                  return (
                    null ==
                      (n = l.length
                        ? l.some((e) => e.getIsVisible())
                        : null == (o = t.getState().columnVisibility)
                          ? void 0
                          : o[e.id]) || n
                  );
                }),
                (e.getCanHide = () => {
                  var n, o;
                  return (
                    (null == (n = e.columnDef.enableHiding) || n) &&
                    (null == (o = t.options.enableHiding) || o)
                  );
                }),
                (e.getToggleVisibilityHandler = () => (t) => {
                  null == e.toggleVisibility ||
                    e.toggleVisibility(t.target.checked);
                });
            },
            createRow: (e, t) => {
              (e._getAllVisibleCells = a(
                () => [e.getAllCells(), t.getState().columnVisibility],
                (e) => e.filter((e) => e.column.getIsVisible()),
                u(t.options, "debugRows"),
              )),
                (e.getVisibleCells = a(
                  () => [
                    e.getLeftVisibleCells(),
                    e.getCenterVisibleCells(),
                    e.getRightVisibleCells(),
                  ],
                  (e, t, n) => [...e, ...t, ...n],
                  u(t.options, "debugRows"),
                ));
            },
            createTable: (e) => {
              const t = (t, n) =>
                a(
                  () => [
                    n(),
                    n()
                      .filter((e) => e.getIsVisible())
                      .map((e) => e.id)
                      .join("_"),
                  ],
                  (e) =>
                    e.filter((e) =>
                      null == e.getIsVisible ? void 0 : e.getIsVisible(),
                    ),
                  u(e.options, "debugColumns"),
                );
              (e.getVisibleFlatColumns = t(0, () => e.getAllFlatColumns())),
                (e.getVisibleLeafColumns = t(0, () => e.getAllLeafColumns())),
                (e.getLeftVisibleLeafColumns = t(0, () =>
                  e.getLeftLeafColumns(),
                )),
                (e.getRightVisibleLeafColumns = t(0, () =>
                  e.getRightLeafColumns(),
                )),
                (e.getCenterVisibleLeafColumns = t(0, () =>
                  e.getCenterLeafColumns(),
                )),
                (e.setColumnVisibility = (t) =>
                  null == e.options.onColumnVisibilityChange
                    ? void 0
                    : e.options.onColumnVisibilityChange(t)),
                (e.resetColumnVisibility = (t) => {
                  var n;
                  e.setColumnVisibility(
                    t
                      ? {}
                      : null != (n = e.initialState.columnVisibility)
                        ? n
                        : {},
                  );
                }),
                (e.toggleAllColumnsVisible = (t) => {
                  var n;
                  (t = null != (n = t) ? n : !e.getIsAllColumnsVisible()),
                    e.setColumnVisibility(
                      e
                        .getAllLeafColumns()
                        .reduce(
                          (e, n) => ({
                            ...e,
                            [n.id]:
                              t || !(null != n.getCanHide && n.getCanHide()),
                          }),
                          {},
                        ),
                    );
                }),
                (e.getIsAllColumnsVisible = () =>
                  !e
                    .getAllLeafColumns()
                    .some(
                      (e) => !(null != e.getIsVisible && e.getIsVisible()),
                    )),
                (e.getIsSomeColumnsVisible = () =>
                  e
                    .getAllLeafColumns()
                    .some((e) =>
                      null == e.getIsVisible ? void 0 : e.getIsVisible(),
                    )),
                (e.getToggleAllColumnsVisibilityHandler = () => (t) => {
                  var n;
                  e.toggleAllColumnsVisible(
                    null == (n = t.target) ? void 0 : n.checked,
                  );
                });
            },
          },
          O,
          V,
          p,
          x,
          {
            createTable: (e) => {
              (e._getGlobalFacetedRowModel =
                e.options.getFacetedRowModel &&
                e.options.getFacetedRowModel(e, "__global__")),
                (e.getGlobalFacetedRowModel = () =>
                  e.options.manualFiltering || !e._getGlobalFacetedRowModel
                    ? e.getPreFilteredRowModel()
                    : e._getGlobalFacetedRowModel()),
                (e._getGlobalFacetedUniqueValues =
                  e.options.getFacetedUniqueValues &&
                  e.options.getFacetedUniqueValues(e, "__global__")),
                (e.getGlobalFacetedUniqueValues = () =>
                  e._getGlobalFacetedUniqueValues
                    ? e._getGlobalFacetedUniqueValues()
                    : new Map()),
                (e._getGlobalFacetedMinMaxValues =
                  e.options.getFacetedMinMaxValues &&
                  e.options.getFacetedMinMaxValues(e, "__global__")),
                (e.getGlobalFacetedMinMaxValues = () => {
                  if (e._getGlobalFacetedMinMaxValues)
                    return e._getGlobalFacetedMinMaxValues();
                });
            },
          },
          {
            getInitialState: (e) => ({ globalFilter: void 0, ...e }),
            getDefaultOptions: (e) => ({
              onGlobalFilterChange: i("globalFilter", e),
              globalFilterFn: "auto",
              getColumnCanGlobalFilter: (t) => {
                var n;
                const o =
                  null == (n = e.getCoreRowModel().flatRows[0]) ||
                  null == (n = n._getAllCellsByColumnId()[t.id])
                    ? void 0
                    : n.getValue();
                return "string" == typeof o || "number" == typeof o;
              },
            }),
            createColumn: (e, t) => {
              e.getCanGlobalFilter = () => {
                var n, o, l, i;
                return (
                  (null == (n = e.columnDef.enableGlobalFilter) || n) &&
                  (null == (o = t.options.enableGlobalFilter) || o) &&
                  (null == (l = t.options.enableFilters) || l) &&
                  (null ==
                    (i =
                      null == t.options.getColumnCanGlobalFilter
                        ? void 0
                        : t.options.getColumnCanGlobalFilter(e)) ||
                    i) &&
                  !!e.accessorFn
                );
              };
            },
            createTable: (e) => {
              (e.getGlobalAutoFilterFn = () => F.includesString),
                (e.getGlobalFilterFn = () => {
                  var t, n;
                  const { globalFilterFn: o } = e.options;
                  return r(o)
                    ? o
                    : "auto" === o
                      ? e.getGlobalAutoFilterFn()
                      : null !=
                          (t =
                            null == (n = e.options.filterFns) ? void 0 : n[o])
                        ? t
                        : F[o];
                }),
                (e.setGlobalFilter = (t) => {
                  null == e.options.onGlobalFilterChange ||
                    e.options.onGlobalFilterChange(t);
                }),
                (e.resetGlobalFilter = (t) => {
                  e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
                });
            },
          },
          {
            getInitialState: (e) => ({ sorting: [], ...e }),
            getDefaultColumnDef: () => ({
              sortingFn: "auto",
              sortUndefined: 1,
            }),
            getDefaultOptions: (e) => ({
              onSortingChange: i("sorting", e),
              isMultiSortEvent: (e) => e.shiftKey,
            }),
            createColumn: (e, t) => {
              (e.getAutoSortingFn = () => {
                const n = t.getFilteredRowModel().flatRows.slice(10);
                let o = !1;
                for (const t of n) {
                  const n = null == t ? void 0 : t.getValue(e.id);
                  if ("[object Date]" === Object.prototype.toString.call(n))
                    return $.datetime;
                  if ("string" == typeof n && ((o = !0), n.split(q).length > 1))
                    return $.alphanumeric;
                }
                return o ? $.text : $.basic;
              }),
                (e.getAutoSortDir = () => {
                  const n = t.getFilteredRowModel().flatRows[0];
                  return "string" ==
                    typeof (null == n ? void 0 : n.getValue(e.id))
                    ? "asc"
                    : "desc";
                }),
                (e.getSortingFn = () => {
                  var n, o;
                  if (!e) throw new Error();
                  return r(e.columnDef.sortingFn)
                    ? e.columnDef.sortingFn
                    : "auto" === e.columnDef.sortingFn
                      ? e.getAutoSortingFn()
                      : null !=
                          (n =
                            null == (o = t.options.sortingFns)
                              ? void 0
                              : o[e.columnDef.sortingFn])
                        ? n
                        : $[e.columnDef.sortingFn];
                }),
                (e.toggleSorting = (n, o) => {
                  const l = e.getNextSortingOrder(),
                    i = null != n;
                  t.setSorting((r) => {
                    const s = null == r ? void 0 : r.find((t) => t.id === e.id),
                      a =
                        null == r ? void 0 : r.findIndex((t) => t.id === e.id);
                    let u,
                      d = [],
                      g = i ? n : "desc" === l;
                    var c;
                    ((u =
                      null != r && r.length && e.getCanMultiSort() && o
                        ? s
                          ? "toggle"
                          : "add"
                        : null != r && r.length && a !== r.length - 1
                          ? "replace"
                          : s
                            ? "toggle"
                            : "replace"),
                    "toggle" === u && (i || l || (u = "remove")),
                    "add" === u)
                      ? ((d = [...r, { id: e.id, desc: g }]),
                        d.splice(
                          0,
                          d.length -
                            (null != (c = t.options.maxMultiSortColCount)
                              ? c
                              : Number.MAX_SAFE_INTEGER),
                        ))
                      : (d =
                          "toggle" === u
                            ? r.map((t) =>
                                t.id === e.id ? { ...t, desc: g } : t,
                              )
                            : "remove" === u
                              ? r.filter((t) => t.id !== e.id)
                              : [{ id: e.id, desc: g }]);
                    return d;
                  });
                }),
                (e.getFirstSortDir = () => {
                  var n, o;
                  return (
                    null !=
                    (n =
                      null != (o = e.columnDef.sortDescFirst)
                        ? o
                        : t.options.sortDescFirst)
                      ? n
                      : "desc" === e.getAutoSortDir()
                  )
                    ? "desc"
                    : "asc";
                }),
                (e.getNextSortingOrder = (n) => {
                  var o, l;
                  const i = e.getFirstSortDir(),
                    r = e.getIsSorted();
                  return r
                    ? !!(
                        r === i ||
                        (null != (o = t.options.enableSortingRemoval) && !o) ||
                        (n && null != (l = t.options.enableMultiRemove) && !l)
                      ) && ("desc" === r ? "asc" : "desc")
                    : i;
                }),
                (e.getCanSort = () => {
                  var n, o;
                  return (
                    (null == (n = e.columnDef.enableSorting) || n) &&
                    (null == (o = t.options.enableSorting) || o) &&
                    !!e.accessorFn
                  );
                }),
                (e.getCanMultiSort = () => {
                  var n, o;
                  return null !=
                    (n =
                      null != (o = e.columnDef.enableMultiSort)
                        ? o
                        : t.options.enableMultiSort)
                    ? n
                    : !!e.accessorFn;
                }),
                (e.getIsSorted = () => {
                  var n;
                  const o =
                    null == (n = t.getState().sorting)
                      ? void 0
                      : n.find((t) => t.id === e.id);
                  return !!o && (o.desc ? "desc" : "asc");
                }),
                (e.getSortIndex = () => {
                  var n, o;
                  return null !=
                    (n =
                      null == (o = t.getState().sorting)
                        ? void 0
                        : o.findIndex((t) => t.id === e.id))
                    ? n
                    : -1;
                }),
                (e.clearSorting = () => {
                  t.setSorting((t) =>
                    null != t && t.length ? t.filter((t) => t.id !== e.id) : [],
                  );
                }),
                (e.getToggleSortingHandler = () => {
                  const n = e.getCanSort();
                  return (o) => {
                    n &&
                      (null == o.persist || o.persist(),
                      null == e.toggleSorting ||
                        e.toggleSorting(
                          void 0,
                          !!e.getCanMultiSort() &&
                            (null == t.options.isMultiSortEvent
                              ? void 0
                              : t.options.isMultiSortEvent(o)),
                        ));
                  };
                });
            },
            createTable: (e) => {
              (e.setSorting = (t) =>
                null == e.options.onSortingChange
                  ? void 0
                  : e.options.onSortingChange(t)),
                (e.resetSorting = (t) => {
                  var n, o;
                  e.setSorting(
                    t
                      ? []
                      : null !=
                          (n =
                            null == (o = e.initialState) ? void 0 : o.sorting)
                        ? n
                        : [],
                  );
                }),
                (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
                (e.getSortedRowModel = () => (
                  !e._getSortedRowModel &&
                    e.options.getSortedRowModel &&
                    (e._getSortedRowModel = e.options.getSortedRowModel(e)),
                  e.options.manualSorting || !e._getSortedRowModel
                    ? e.getPreSortedRowModel()
                    : e._getSortedRowModel()
                ));
            },
          },
          P,
          {
            getInitialState: (e) => ({ expanded: {}, ...e }),
            getDefaultOptions: (e) => ({
              onExpandedChange: i("expanded", e),
              paginateExpandedRows: !0,
            }),
            createTable: (e) => {
              let t = !1,
                n = !1;
              (e._autoResetExpanded = () => {
                var o, l;
                if (t) {
                  if (
                    null !=
                    (o =
                      null != (l = e.options.autoResetAll)
                        ? l
                        : e.options.autoResetExpanded)
                      ? o
                      : !e.options.manualExpanding
                  ) {
                    if (n) return;
                    (n = !0),
                      e._queue(() => {
                        e.resetExpanded(), (n = !1);
                      });
                  }
                } else
                  e._queue(() => {
                    t = !0;
                  });
              }),
                (e.setExpanded = (t) =>
                  null == e.options.onExpandedChange
                    ? void 0
                    : e.options.onExpandedChange(t)),
                (e.toggleAllRowsExpanded = (t) => {
                  (null != t ? t : !e.getIsAllRowsExpanded())
                    ? e.setExpanded(!0)
                    : e.setExpanded({});
                }),
                (e.resetExpanded = (t) => {
                  var n, o;
                  e.setExpanded(
                    t
                      ? {}
                      : null !=
                          (n =
                            null == (o = e.initialState) ? void 0 : o.expanded)
                        ? n
                        : {},
                  );
                }),
                (e.getCanSomeRowsExpand = () =>
                  e
                    .getPrePaginationRowModel()
                    .flatRows.some((e) => e.getCanExpand())),
                (e.getToggleAllRowsExpandedHandler = () => (t) => {
                  null == t.persist || t.persist(), e.toggleAllRowsExpanded();
                }),
                (e.getIsSomeRowsExpanded = () => {
                  const t = e.getState().expanded;
                  return !0 === t || Object.values(t).some(Boolean);
                }),
                (e.getIsAllRowsExpanded = () => {
                  const t = e.getState().expanded;
                  return "boolean" == typeof t
                    ? !0 === t
                    : !!Object.keys(t).length &&
                        !e
                          .getRowModel()
                          .flatRows.some((e) => !e.getIsExpanded());
                }),
                (e.getExpandedDepth = () => {
                  let t = 0;
                  return (
                    (!0 === e.getState().expanded
                      ? Object.keys(e.getRowModel().rowsById)
                      : Object.keys(e.getState().expanded)
                    ).forEach((e) => {
                      const n = e.split(".");
                      t = Math.max(t, n.length);
                    }),
                    t
                  );
                }),
                (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
                (e.getExpandedRowModel = () => (
                  !e._getExpandedRowModel &&
                    e.options.getExpandedRowModel &&
                    (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
                  e.options.manualExpanding || !e._getExpandedRowModel
                    ? e.getPreExpandedRowModel()
                    : e._getExpandedRowModel()
                ));
            },
            createRow: (e, t) => {
              (e.toggleExpanded = (n) => {
                t.setExpanded((o) => {
                  var l;
                  const i = !0 === o || !(null == o || !o[e.id]);
                  let r = {};
                  if (
                    (!0 === o
                      ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
                          r[e] = !0;
                        })
                      : (r = o),
                    (n = null != (l = n) ? l : !i),
                    !i && n)
                  )
                    return { ...r, [e.id]: !0 };
                  if (i && !n) {
                    const { [e.id]: t, ...n } = r;
                    return n;
                  }
                  return o;
                });
              }),
                (e.getIsExpanded = () => {
                  var n;
                  const o = t.getState().expanded;
                  return !!(null !=
                  (n =
                    null == t.options.getIsRowExpanded
                      ? void 0
                      : t.options.getIsRowExpanded(e))
                    ? n
                    : !0 === o || (null == o ? void 0 : o[e.id]));
                }),
                (e.getCanExpand = () => {
                  var n, o, l;
                  return null !=
                    (n =
                      null == t.options.getRowCanExpand
                        ? void 0
                        : t.options.getRowCanExpand(e))
                    ? n
                    : (null == (o = t.options.enableExpanding) || o) &&
                        !(null == (l = e.subRows) || !l.length);
                }),
                (e.getIsAllParentsExpanded = () => {
                  let n = !0,
                    o = e;
                  for (; n && o.parentId; )
                    (o = t.getRow(o.parentId, !0)), (n = o.getIsExpanded());
                  return n;
                }),
                (e.getToggleExpandedHandler = () => {
                  const t = e.getCanExpand();
                  return () => {
                    t && e.toggleExpanded();
                  };
                });
            },
          },
          {
            getInitialState: (e) => ({
              ...e,
              pagination: {
                pageIndex: 0,
                pageSize: 10,
                ...(null == e ? void 0 : e.pagination),
              },
            }),
            getDefaultOptions: (e) => ({
              onPaginationChange: i("pagination", e),
            }),
            createTable: (e) => {
              let t = !1,
                n = !1;
              (e._autoResetPageIndex = () => {
                var o, l;
                if (t) {
                  if (
                    null !=
                    (o =
                      null != (l = e.options.autoResetAll)
                        ? l
                        : e.options.autoResetPageIndex)
                      ? o
                      : !e.options.manualPagination
                  ) {
                    if (n) return;
                    (n = !0),
                      e._queue(() => {
                        e.resetPageIndex(), (n = !1);
                      });
                  }
                } else
                  e._queue(() => {
                    t = !0;
                  });
              }),
                (e.setPagination = (t) =>
                  null == e.options.onPaginationChange
                    ? void 0
                    : e.options.onPaginationChange((e) => l(t, e))),
                (e.resetPagination = (t) => {
                  var n;
                  e.setPagination(
                    t
                      ? { pageIndex: 0, pageSize: 10 }
                      : null != (n = e.initialState.pagination)
                        ? n
                        : { pageIndex: 0, pageSize: 10 },
                  );
                }),
                (e.setPageIndex = (t) => {
                  e.setPagination((n) => {
                    let o = l(t, n.pageIndex);
                    const i =
                      void 0 === e.options.pageCount ||
                      -1 === e.options.pageCount
                        ? Number.MAX_SAFE_INTEGER
                        : e.options.pageCount - 1;
                    return (
                      (o = Math.max(0, Math.min(o, i))), { ...n, pageIndex: o }
                    );
                  });
                }),
                (e.resetPageIndex = (t) => {
                  var n, o;
                  e.setPageIndex(
                    t
                      ? 0
                      : null !=
                          (n =
                            null == (o = e.initialState) ||
                            null == (o = o.pagination)
                              ? void 0
                              : o.pageIndex)
                        ? n
                        : 0,
                  );
                }),
                (e.resetPageSize = (t) => {
                  var n, o;
                  e.setPageSize(
                    t
                      ? 10
                      : null !=
                          (n =
                            null == (o = e.initialState) ||
                            null == (o = o.pagination)
                              ? void 0
                              : o.pageSize)
                        ? n
                        : 10,
                  );
                }),
                (e.setPageSize = (t) => {
                  e.setPagination((e) => {
                    const n = Math.max(1, l(t, e.pageSize)),
                      o = e.pageSize * e.pageIndex,
                      i = Math.floor(o / n);
                    return { ...e, pageIndex: i, pageSize: n };
                  });
                }),
                (e.setPageCount = (t) =>
                  e.setPagination((n) => {
                    var o;
                    let i = l(t, null != (o = e.options.pageCount) ? o : -1);
                    return (
                      "number" == typeof i && (i = Math.max(-1, i)),
                      { ...n, pageCount: i }
                    );
                  })),
                (e.getPageOptions = a(
                  () => [e.getPageCount()],
                  (e) => {
                    let t = [];
                    return (
                      e &&
                        e > 0 &&
                        (t = [...new Array(e)].fill(null).map((e, t) => t)),
                      t
                    );
                  },
                  u(e.options, "debugTable"),
                )),
                (e.getCanPreviousPage = () =>
                  e.getState().pagination.pageIndex > 0),
                (e.getCanNextPage = () => {
                  const { pageIndex: t } = e.getState().pagination,
                    n = e.getPageCount();
                  return -1 === n || (0 !== n && t < n - 1);
                }),
                (e.previousPage = () => e.setPageIndex((e) => e - 1)),
                (e.nextPage = () => e.setPageIndex((e) => e + 1)),
                (e.firstPage = () => e.setPageIndex(0)),
                (e.lastPage = () => e.setPageIndex(e.getPageCount() - 1)),
                (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
                (e.getPaginationRowModel = () => (
                  !e._getPaginationRowModel &&
                    e.options.getPaginationRowModel &&
                    (e._getPaginationRowModel =
                      e.options.getPaginationRowModel(e)),
                  e.options.manualPagination || !e._getPaginationRowModel
                    ? e.getPrePaginationRowModel()
                    : e._getPaginationRowModel()
                )),
                (e.getPageCount = () => {
                  var t;
                  return null != (t = e.options.pageCount)
                    ? t
                    : Math.ceil(
                        e.getRowCount() / e.getState().pagination.pageSize,
                      );
                }),
                (e.getRowCount = () => {
                  var t;
                  return null != (t = e.options.rowCount)
                    ? t
                    : e.getPrePaginationRowModel().rows.length;
                });
            },
          },
          {
            getInitialState: (e) => ({
              rowPinning: { top: [], bottom: [] },
              ...e,
            }),
            getDefaultOptions: (e) => ({
              onRowPinningChange: i("rowPinning", e),
            }),
            createRow: (e, t) => {
              (e.pin = (n, o, l) => {
                const i = o
                    ? e.getLeafRows().map((e) => {
                        let { id: t } = e;
                        return t;
                      })
                    : [],
                  r = l
                    ? e.getParentRows().map((e) => {
                        let { id: t } = e;
                        return t;
                      })
                    : [],
                  s = new Set([...r, e.id, ...i]);
                t.setRowPinning((e) => {
                  var t, o, l, i, r, a;
                  return "bottom" === n
                    ? {
                        top: (null != (l = null == e ? void 0 : e.top)
                          ? l
                          : []
                        ).filter((e) => !(null != s && s.has(e))),
                        bottom: [
                          ...(null != (i = null == e ? void 0 : e.bottom)
                            ? i
                            : []
                          ).filter((e) => !(null != s && s.has(e))),
                          ...Array.from(s),
                        ],
                      }
                    : "top" === n
                      ? {
                          top: [
                            ...(null != (r = null == e ? void 0 : e.top)
                              ? r
                              : []
                            ).filter((e) => !(null != s && s.has(e))),
                            ...Array.from(s),
                          ],
                          bottom: (null != (a = null == e ? void 0 : e.bottom)
                            ? a
                            : []
                          ).filter((e) => !(null != s && s.has(e))),
                        }
                      : {
                          top: (null != (t = null == e ? void 0 : e.top)
                            ? t
                            : []
                          ).filter((e) => !(null != s && s.has(e))),
                          bottom: (null != (o = null == e ? void 0 : e.bottom)
                            ? o
                            : []
                          ).filter((e) => !(null != s && s.has(e))),
                        };
                });
              }),
                (e.getCanPin = () => {
                  var n;
                  const { enableRowPinning: o, enablePinning: l } = t.options;
                  return "function" == typeof o
                    ? o(e)
                    : null == (n = null != o ? o : l) || n;
                }),
                (e.getIsPinned = () => {
                  const n = [e.id],
                    { top: o, bottom: l } = t.getState().rowPinning,
                    i = n.some((e) => (null == o ? void 0 : o.includes(e))),
                    r = n.some((e) => (null == l ? void 0 : l.includes(e)));
                  return i ? "top" : !!r && "bottom";
                }),
                (e.getPinnedIndex = () => {
                  var n, o;
                  const l = e.getIsPinned();
                  if (!l) return -1;
                  const i =
                    null ==
                    (n = "top" === l ? t.getTopRows() : t.getBottomRows())
                      ? void 0
                      : n.map((e) => {
                          let { id: t } = e;
                          return t;
                        });
                  return null != (o = null == i ? void 0 : i.indexOf(e.id))
                    ? o
                    : -1;
                });
            },
            createTable: (e) => {
              (e.setRowPinning = (t) =>
                null == e.options.onRowPinningChange
                  ? void 0
                  : e.options.onRowPinningChange(t)),
                (e.resetRowPinning = (t) => {
                  var n, o;
                  return e.setRowPinning(
                    t
                      ? { top: [], bottom: [] }
                      : null !=
                          (n =
                            null == (o = e.initialState)
                              ? void 0
                              : o.rowPinning)
                        ? n
                        : { top: [], bottom: [] },
                  );
                }),
                (e.getIsSomeRowsPinned = (t) => {
                  var n;
                  const o = e.getState().rowPinning;
                  var l, i;
                  return t
                    ? Boolean(null == (n = o[t]) ? void 0 : n.length)
                    : Boolean(
                        (null == (l = o.top) ? void 0 : l.length) ||
                          (null == (i = o.bottom) ? void 0 : i.length),
                      );
                }),
                (e._getPinnedRows = (t, n, o) => {
                  var l;
                  return (
                    null == (l = e.options.keepPinnedRows) || l
                      ? (null != n ? n : []).map((t) => {
                          const n = e.getRow(t, !0);
                          return n.getIsAllParentsExpanded() ? n : null;
                        })
                      : (null != n ? n : []).map((e) =>
                          t.find((t) => t.id === e),
                        )
                  )
                    .filter(Boolean)
                    .map((e) => ({ ...e, position: o }));
                }),
                (e.getTopRows = a(
                  () => [e.getRowModel().rows, e.getState().rowPinning.top],
                  (t, n) => e._getPinnedRows(t, n, "top"),
                  u(e.options, "debugRows"),
                )),
                (e.getBottomRows = a(
                  () => [e.getRowModel().rows, e.getState().rowPinning.bottom],
                  (t, n) => e._getPinnedRows(t, n, "bottom"),
                  u(e.options, "debugRows"),
                )),
                (e.getCenterRows = a(
                  () => [
                    e.getRowModel().rows,
                    e.getState().rowPinning.top,
                    e.getState().rowPinning.bottom,
                  ],
                  (e, t, n) => {
                    const o = new Set([
                      ...(null != t ? t : []),
                      ...(null != n ? n : []),
                    ]);
                    return e.filter((e) => !o.has(e.id));
                  },
                  u(e.options, "debugRows"),
                ));
            },
          },
          T,
          k,
        ];
      function X(e) {
        var t, n;
        const o = [...K, ...(null != (t = e._features) ? t : [])];
        let i = { _features: o };
        const r = i._features.reduce(
          (e, t) =>
            Object.assign(
              e,
              null == t.getDefaultOptions ? void 0 : t.getDefaultOptions(i),
            ),
          {},
        );
        let s = { ...(null != (n = e.initialState) ? n : {}) };
        i._features.forEach((e) => {
          var t;
          s =
            null !=
            (t = null == e.getInitialState ? void 0 : e.getInitialState(s))
              ? t
              : s;
        });
        const d = [];
        let g = !1;
        const c = {
          _features: o,
          options: { ...r, ...e },
          initialState: s,
          _queue: (e) => {
            d.push(e),
              g ||
                ((g = !0),
                Promise.resolve()
                  .then(() => {
                    for (; d.length; ) d.shift()();
                    g = !1;
                  })
                  .catch((e) =>
                    setTimeout(() => {
                      throw e;
                    }),
                  ));
          },
          reset: () => {
            i.setState(i.initialState);
          },
          setOptions: (e) => {
            const t = l(e, i.options);
            i.options = ((e) =>
              i.options.mergeOptions
                ? i.options.mergeOptions(r, e)
                : { ...r, ...e })(t);
          },
          getState: () => i.options.state,
          setState: (e) => {
            null == i.options.onStateChange || i.options.onStateChange(e);
          },
          _getRowId: (e, t, n) => {
            var o;
            return null !=
              (o =
                null == i.options.getRowId
                  ? void 0
                  : i.options.getRowId(e, t, n))
              ? o
              : `${n ? [n.id, t].join(".") : t}`;
          },
          getCoreRowModel: () => (
            i._getCoreRowModel ||
              (i._getCoreRowModel = i.options.getCoreRowModel(i)),
            i._getCoreRowModel()
          ),
          getRowModel: () => i.getPaginationRowModel(),
          getRow: (e, t) => {
            let n = (t ? i.getPrePaginationRowModel() : i.getRowModel())
              .rowsById[e];
            if (!n && ((n = i.getCoreRowModel().rowsById[e]), !n))
              throw new Error();
            return n;
          },
          _getDefaultColumnDef: a(
            () => [i.options.defaultColumn],
            (e) => {
              var t;
              return (
                (e = null != (t = e) ? t : {}),
                {
                  header: (e) => {
                    const t = e.header.column.columnDef;
                    return t.accessorKey
                      ? t.accessorKey
                      : t.accessorFn
                        ? t.id
                        : null;
                  },
                  cell: (e) => {
                    var t, n;
                    return null !=
                      (t =
                        null == (n = e.renderValue()) || null == n.toString
                          ? void 0
                          : n.toString())
                      ? t
                      : null;
                  },
                  ...i._features.reduce(
                    (e, t) =>
                      Object.assign(
                        e,
                        null == t.getDefaultColumnDef
                          ? void 0
                          : t.getDefaultColumnDef(),
                      ),
                    {},
                  ),
                  ...e,
                }
              );
            },
            u(e, "debugColumns"),
          ),
          _getColumnDefs: () => i.options.columns,
          getAllColumns: a(
            () => [i._getColumnDefs()],
            (e) => {
              const t = function (e, n, o) {
                return (
                  void 0 === o && (o = 0),
                  e.map((e) => {
                    const l = (function (e, t, n, o) {
                        var l, i;
                        const r = { ...e._getDefaultColumnDef(), ...t },
                          s = r.accessorKey;
                        let d,
                          g =
                            null !=
                            (l =
                              null != (i = r.id)
                                ? i
                                : s
                                  ? "function" ==
                                    typeof String.prototype.replaceAll
                                    ? s.replaceAll(".", "_")
                                    : s.replace(/\./g, "_")
                                  : void 0)
                              ? l
                              : "string" == typeof r.header
                                ? r.header
                                : void 0;
                        if (
                          (r.accessorFn
                            ? (d = r.accessorFn)
                            : s &&
                              (d = s.includes(".")
                                ? (e) => {
                                    let t = e;
                                    for (const e of s.split(".")) {
                                      var n;
                                      t = null == (n = t) ? void 0 : n[e];
                                    }
                                    return t;
                                  }
                                : (e) => e[r.accessorKey]),
                          !g)
                        )
                          throw new Error();
                        let c = {
                          id: `${String(g)}`,
                          accessorFn: d,
                          parent: o,
                          depth: n,
                          columnDef: r,
                          columns: [],
                          getFlatColumns: a(
                            () => [!0],
                            () => {
                              var e;
                              return [
                                c,
                                ...(null == (e = c.columns)
                                  ? void 0
                                  : e.flatMap((e) => e.getFlatColumns())),
                              ];
                            },
                            u(e.options, "debugColumns"),
                          ),
                          getLeafColumns: a(
                            () => [e._getOrderColumnsFn()],
                            (e) => {
                              var t;
                              if (null != (t = c.columns) && t.length) {
                                let t = c.columns.flatMap((e) =>
                                  e.getLeafColumns(),
                                );
                                return e(t);
                              }
                              return [c];
                            },
                            u(e.options, "debugColumns"),
                          ),
                        };
                        for (const t of e._features)
                          null == t.createColumn || t.createColumn(c, e);
                        return c;
                      })(i, e, o, n),
                      r = e;
                    return (
                      (l.columns = r.columns ? t(r.columns, l, o + 1) : []), l
                    );
                  })
                );
              };
              return t(e);
            },
            u(e, "debugColumns"),
          ),
          getAllFlatColumns: a(
            () => [i.getAllColumns()],
            (e) => e.flatMap((e) => e.getFlatColumns()),
            u(e, "debugColumns"),
          ),
          _getAllFlatColumnsById: a(
            () => [i.getAllFlatColumns()],
            (e) => e.reduce((e, t) => ((e[t.id] = t), e), {}),
            u(e, "debugColumns"),
          ),
          getAllLeafColumns: a(
            () => [i.getAllColumns(), i._getOrderColumnsFn()],
            (e, t) => t(e.flatMap((e) => e.getLeafColumns())),
            u(e, "debugColumns"),
          ),
          getColumn: (e) => i._getAllFlatColumnsById()[e],
        };
        Object.assign(i, c);
        for (let e = 0; e < i._features.length; e++) {
          const t = i._features[e];
          null == t || null == t.createTable || t.createTable(i);
        }
        return i;
      }
      function Q() {
        return (e) =>
          a(
            () => [e.options.data],
            (t) => {
              const n = { rows: [], flatRows: [], rowsById: {} },
                o = function (t, l, i) {
                  void 0 === l && (l = 0);
                  const r = [];
                  for (let a = 0; a < t.length; a++) {
                    const u = f(
                      e,
                      e._getRowId(t[a], a, i),
                      t[a],
                      a,
                      l,
                      void 0,
                      null == i ? void 0 : i.id,
                    );
                    var s;
                    if (
                      (n.flatRows.push(u),
                      (n.rowsById[u.id] = u),
                      r.push(u),
                      e.options.getSubRows)
                    )
                      (u.originalSubRows = e.options.getSubRows(t[a], a)),
                        null != (s = u.originalSubRows) &&
                          s.length &&
                          (u.subRows = o(u.originalSubRows, l + 1, u));
                  }
                  return r;
                };
              return (n.rows = o(t)), n;
            },
            u(e.options, "debugTable", 0, () => e._autoResetPageIndex()),
          );
      }
      function Y(e, t, n) {
        return n.options.filterFromLeafRows
          ? (function (e, t, n) {
              var o;
              const l = [],
                i = {},
                r = null != (o = n.options.maxLeafRowFilterDepth) ? o : 100,
                s = function (e, o) {
                  void 0 === o && (o = 0);
                  const a = [];
                  for (let d = 0; d < e.length; d++) {
                    var u;
                    let g = e[d];
                    const c = f(
                      n,
                      g.id,
                      g.original,
                      g.index,
                      g.depth,
                      void 0,
                      g.parentId,
                    );
                    if (
                      ((c.columnFilters = g.columnFilters),
                      null != (u = g.subRows) && u.length && o < r)
                    ) {
                      if (
                        ((c.subRows = s(g.subRows, o + 1)),
                        (g = c),
                        t(g) && !c.subRows.length)
                      ) {
                        a.push(g), (i[g.id] = g), l.push(g);
                        continue;
                      }
                      if (t(g) || c.subRows.length) {
                        a.push(g), (i[g.id] = g), l.push(g);
                        continue;
                      }
                    } else
                      (g = c), t(g) && (a.push(g), (i[g.id] = g), l.push(g));
                  }
                  return a;
                };
              return { rows: s(e), flatRows: l, rowsById: i };
            })(e, t, n)
          : (function (e, t, n) {
              var o;
              const l = [],
                i = {},
                r = null != (o = n.options.maxLeafRowFilterDepth) ? o : 100,
                s = function (e, o) {
                  void 0 === o && (o = 0);
                  const a = [];
                  for (let d = 0; d < e.length; d++) {
                    let g = e[d];
                    if (t(g)) {
                      var u;
                      if (null != (u = g.subRows) && u.length && o < r) {
                        const e = f(
                          n,
                          g.id,
                          g.original,
                          g.index,
                          g.depth,
                          void 0,
                          g.parentId,
                        );
                        (e.subRows = s(g.subRows, o + 1)), (g = e);
                      }
                      a.push(g), l.push(g), (i[g.id] = g);
                    }
                  }
                  return a;
                };
              return { rows: s(e), flatRows: l, rowsById: i };
            })(e, t, n);
      }
      function J() {
        return (e) =>
          a(
            () => [
              e.getPreFilteredRowModel(),
              e.getState().columnFilters,
              e.getState().globalFilter,
            ],
            (t, n, o) => {
              if (!t.rows.length || ((null == n || !n.length) && !o)) {
                for (let e = 0; e < t.flatRows.length; e++)
                  (t.flatRows[e].columnFilters = {}),
                    (t.flatRows[e].columnFiltersMeta = {});
                return t;
              }
              const l = [],
                i = [];
              (null != n ? n : []).forEach((t) => {
                var n;
                const o = e.getColumn(t.id);
                if (!o) return;
                const i = o.getFilterFn();
                i &&
                  l.push({
                    id: t.id,
                    filterFn: i,
                    resolvedValue:
                      null !=
                      (n =
                        null == i.resolveFilterValue
                          ? void 0
                          : i.resolveFilterValue(t.value))
                        ? n
                        : t.value,
                  });
              });
              const r = (null != n ? n : []).map((e) => e.id),
                s = e.getGlobalFilterFn(),
                a = e.getAllLeafColumns().filter((e) => e.getCanGlobalFilter());
              let u, d;
              o &&
                s &&
                a.length &&
                (r.push("__global__"),
                a.forEach((e) => {
                  var t;
                  i.push({
                    id: e.id,
                    filterFn: s,
                    resolvedValue:
                      null !=
                      (t =
                        null == s.resolveFilterValue
                          ? void 0
                          : s.resolveFilterValue(o))
                        ? t
                        : o,
                  });
                }));
              for (let e = 0; e < t.flatRows.length; e++) {
                const n = t.flatRows[e];
                if (((n.columnFilters = {}), l.length))
                  for (let e = 0; e < l.length; e++) {
                    u = l[e];
                    const t = u.id;
                    n.columnFilters[t] = u.filterFn(
                      n,
                      t,
                      u.resolvedValue,
                      (e) => {
                        n.columnFiltersMeta[t] = e;
                      },
                    );
                  }
                if (i.length) {
                  for (let e = 0; e < i.length; e++) {
                    d = i[e];
                    const t = d.id;
                    if (
                      d.filterFn(n, t, d.resolvedValue, (e) => {
                        n.columnFiltersMeta[t] = e;
                      })
                    ) {
                      n.columnFilters.__global__ = !0;
                      break;
                    }
                  }
                  !0 !== n.columnFilters.__global__ &&
                    (n.columnFilters.__global__ = !1);
                }
              }
              return Y(
                t.rows,
                (e) => {
                  for (let t = 0; t < r.length; t++)
                    if (!1 === e.columnFilters[r[t]]) return !1;
                  return !0;
                },
                e,
              );
            },
            u(e.options, "debugTable", 0, () => e._autoResetPageIndex()),
          );
      }
      function Z() {
        return (e) =>
          a(
            () => [e.getState().grouping, e.getPreGroupedRowModel()],
            (t, n) => {
              if (!n.rows.length || !t.length)
                return (
                  n.rows.forEach((e) => {
                    (e.depth = 0), (e.parentId = void 0);
                  }),
                  n
                );
              const o = t.filter((t) => e.getColumn(t)),
                l = [],
                i = {},
                r = function (t, n, a) {
                  if ((void 0 === n && (n = 0), n >= o.length))
                    return t.map(
                      (e) => (
                        (e.depth = n),
                        l.push(e),
                        (i[e.id] = e),
                        e.subRows && (e.subRows = r(e.subRows, n + 1, e.id)),
                        e
                      ),
                    );
                  const u = o[n],
                    d = (function (e, t) {
                      const n = new Map();
                      return e.reduce((e, n) => {
                        const o = `${n.getGroupingValue(t)}`,
                          l = e.get(o);
                        return l ? l.push(n) : e.set(o, [n]), e;
                      }, n);
                    })(t, u),
                    g = Array.from(d.entries()).map((t, d) => {
                      let [g, c] = t,
                        h = `${u}:${g}`;
                      h = a ? `${a}>${h}` : h;
                      const p = r(c, n + 1, h);
                      p.forEach((e) => {
                        e.parentId = h;
                      });
                      const m = n ? s(c, (e) => e.subRows) : c,
                        v = f(e, h, m[0].original, d, n, void 0, a);
                      return (
                        Object.assign(v, {
                          groupingColumnId: u,
                          groupingValue: g,
                          subRows: p,
                          leafRows: m,
                          getValue: (t) => {
                            if (o.includes(t)) {
                              if (v._valuesCache.hasOwnProperty(t))
                                return v._valuesCache[t];
                              var n;
                              if (c[0])
                                v._valuesCache[t] =
                                  null != (n = c[0].getValue(t)) ? n : void 0;
                              return v._valuesCache[t];
                            }
                            if (v._groupingValuesCache.hasOwnProperty(t))
                              return v._groupingValuesCache[t];
                            const l = e.getColumn(t),
                              i = null == l ? void 0 : l.getAggregationFn();
                            return i
                              ? ((v._groupingValuesCache[t] = i(t, m, c)),
                                v._groupingValuesCache[t])
                              : void 0;
                          },
                        }),
                        p.forEach((e) => {
                          l.push(e), (i[e.id] = e);
                        }),
                        v
                      );
                    });
                  return g;
                },
                a = r(n.rows, 0);
              return (
                a.forEach((e) => {
                  l.push(e), (i[e.id] = e);
                }),
                { rows: a, flatRows: l, rowsById: i }
              );
            },
            u(e.options, "debugTable", 0, () => {
              e._queue(() => {
                e._autoResetExpanded(), e._autoResetPageIndex();
              });
            }),
          );
      }
      function ee() {
        return (e) =>
          a(
            () => [e.getState().sorting, e.getPreSortedRowModel()],
            (t, n) => {
              if (!n.rows.length || null == t || !t.length) return n;
              const o = e.getState().sorting,
                l = [],
                i = o.filter((t) => {
                  var n;
                  return null == (n = e.getColumn(t.id))
                    ? void 0
                    : n.getCanSort();
                }),
                r = {};
              i.forEach((t) => {
                const n = e.getColumn(t.id);
                n &&
                  (r[t.id] = {
                    sortUndefined: n.columnDef.sortUndefined,
                    invertSorting: n.columnDef.invertSorting,
                    sortingFn: n.getSortingFn(),
                  });
              });
              const s = (e) => {
                const t = e.map((e) => ({ ...e }));
                return (
                  t.sort((e, t) => {
                    for (let o = 0; o < i.length; o += 1) {
                      var n;
                      const l = i[o],
                        s = r[l.id],
                        a = s.sortUndefined,
                        u = null != (n = null == l ? void 0 : l.desc) && n;
                      let d = 0;
                      if (a) {
                        const n = void 0 === e.getValue(l.id),
                          o = void 0 === t.getValue(l.id);
                        if (n || o) {
                          if ("first" === a) return n ? -1 : 1;
                          if ("last" === a) return n ? 1 : -1;
                          d = n && o ? 0 : n ? a : -a;
                        }
                      }
                      if ((0 === d && (d = s.sortingFn(e, t, l.id)), 0 !== d))
                        return u && (d *= -1), s.invertSorting && (d *= -1), d;
                    }
                    return e.index - t.index;
                  }),
                  t.forEach((e) => {
                    var t;
                    l.push(e),
                      null != (t = e.subRows) &&
                        t.length &&
                        (e.subRows = s(e.subRows));
                  }),
                  t
                );
              };
              return { rows: s(n.rows), flatRows: l, rowsById: n.rowsById };
            },
            u(e.options, "debugTable", 0, () => e._autoResetPageIndex()),
          );
      }
    },
    92148: (e, t, n) => {
      "use strict";
      n.d(t, { Te: () => a, XW: () => u });
      var o = n(90626),
        l = n(72739),
        i = n(59366);
      const r =
        "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      function s(e) {
        const t = o.useReducer(() => ({}), {})[1],
          n = {
            ...e,
            onChange: (n, o) => {
              var i;
              o ? (0, l.flushSync)(t) : t(),
                null == (i = e.onChange) || i.call(e, n, o);
            },
          },
          [s] = o.useState(() => new i.YV(n));
        return (
          s.setOptions(n),
          o.useEffect(() => s._didMount(), []),
          r(() => s._willUpdate()),
          s
        );
      }
      function a(e) {
        return s({
          observeElementRect: i.T6,
          observeElementOffset: i.AO,
          scrollToFn: i.Ox,
          ...e,
        });
      }
      function u(e) {
        return s({
          getScrollElement: () =>
            "undefined" != typeof document ? window : null,
          observeElementRect: i.TH,
          observeElementOffset: i.MH,
          scrollToFn: i.e8,
          initialOffset: () =>
            "undefined" != typeof document ? window.scrollY : 0,
          ...e,
        });
      }
    },
    59366: (e, t, n) => {
      "use strict";
      function o(e, t, n) {
        let o,
          l = n.initialDeps ?? [];
        return () => {
          var i, r, s, a;
          let u;
          n.key &&
            (null == (i = n.debug) ? void 0 : i.call(n)) &&
            (u = Date.now());
          const d = e();
          if (!(d.length !== l.length || d.some((e, t) => l[t] !== e)))
            return o;
          let g;
          if (
            ((l = d),
            n.key &&
              (null == (r = n.debug) ? void 0 : r.call(n)) &&
              (g = Date.now()),
            (o = t(...d)),
            n.key && (null == (s = n.debug) ? void 0 : s.call(n)))
          ) {
            const e = Math.round(100 * (Date.now() - u)) / 100,
              t = Math.round(100 * (Date.now() - g)) / 100,
              o = t / 16,
              l = (e, t) => {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              `%c⏱ ${l(t, 5)} /${l(e, 5)} ms`,
              `\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0, Math.min(120 - 120 * o, 120))}deg 100% 31%);`,
              null == n ? void 0 : n.key,
            );
          }
          return (
            null == (a = null == n ? void 0 : n.onChange) || a.call(n, o), o
          );
        };
      }
      function l(e, t) {
        if (void 0 === e)
          throw new Error("Unexpected undefined" + (t ? `: ${t}` : ""));
        return e;
      }
      n.d(t, {
        YV: () => v,
        vp: () => s,
        Ox: () => m,
        AO: () => c,
        T6: () => a,
        MH: () => h,
        TH: () => d,
        e8: () => p,
      });
      const i = (e, t, n) => {
          let o;
          return function (...l) {
            e.clearTimeout(o), (o = e.setTimeout(() => t.apply(this, l), n));
          };
        },
        r = (e) => e,
        s = (e) => {
          const t = Math.max(e.startIndex - e.overscan, 0),
            n = Math.min(e.endIndex + e.overscan, e.count - 1),
            o = [];
          for (let e = t; e <= n; e++) o.push(e);
          return o;
        },
        a = (e, t) => {
          const n = e.scrollElement;
          if (!n) return;
          const o = e.targetWindow;
          if (!o) return;
          const l = (e) => {
            const { width: n, height: o } = e;
            t({ width: Math.round(n), height: Math.round(o) });
          };
          if ((l(n.getBoundingClientRect()), !o.ResizeObserver))
            return () => {};
          const i = new o.ResizeObserver((e) => {
            const t = e[0];
            if (null == t ? void 0 : t.borderBoxSize) {
              const e = t.borderBoxSize[0];
              if (e)
                return void l({ width: e.inlineSize, height: e.blockSize });
            }
            l(n.getBoundingClientRect());
          });
          return (
            i.observe(n, { box: "border-box" }),
            () => {
              i.unobserve(n);
            }
          );
        },
        u = { passive: !0 },
        d = (e, t) => {
          const n = e.scrollElement;
          if (!n) return;
          const o = () => {
            t({ width: n.innerWidth, height: n.innerHeight });
          };
          return (
            o(),
            n.addEventListener("resize", o, u),
            () => {
              n.removeEventListener("resize", o);
            }
          );
        },
        g = "undefined" == typeof window || "onscrollend" in window,
        c = (e, t) => {
          const n = e.scrollElement;
          if (!n) return;
          const o = e.targetWindow;
          if (!o) return;
          let l = 0;
          const r = g
              ? () => {}
              : i(
                  o,
                  () => {
                    t(l, !1);
                  },
                  e.options.isScrollingResetDelay,
                ),
            s = (o) => () => {
              const { horizontal: i, isRtl: s } = e.options;
              (l = i ? n.scrollLeft * (s ? -1 : 1) : n.scrollTop), r(), t(l, o);
            },
            a = s(!0),
            d = s(!1);
          return (
            d(),
            n.addEventListener("scroll", a, u),
            n.addEventListener("scrollend", d, u),
            () => {
              n.removeEventListener("scroll", a),
                n.removeEventListener("scrollend", d);
            }
          );
        },
        h = (e, t) => {
          const n = e.scrollElement;
          if (!n) return;
          const o = e.targetWindow;
          if (!o) return;
          let l = 0;
          const r = g
              ? () => {}
              : i(
                  o,
                  () => {
                    t(l, !1);
                  },
                  e.options.isScrollingResetDelay,
                ),
            s = (o) => () => {
              (l = n[e.options.horizontal ? "scrollX" : "scrollY"]),
                r(),
                t(l, o);
            },
            a = s(!0),
            d = s(!1);
          return (
            d(),
            n.addEventListener("scroll", a, u),
            n.addEventListener("scrollend", d, u),
            () => {
              n.removeEventListener("scroll", a),
                n.removeEventListener("scrollend", d);
            }
          );
        },
        f = (e, t, n) => {
          if (null == t ? void 0 : t.borderBoxSize) {
            const e = t.borderBoxSize[0];
            if (e) {
              return Math.round(
                e[n.options.horizontal ? "inlineSize" : "blockSize"],
              );
            }
          }
          return Math.round(
            e.getBoundingClientRect()[
              n.options.horizontal ? "width" : "height"
            ],
          );
        },
        p = (e, { adjustments: t = 0, behavior: n }, o) => {
          var l, i;
          const r = e + t;
          null == (i = null == (l = o.scrollElement) ? void 0 : l.scrollTo) ||
            i.call(l, {
              [o.options.horizontal ? "left" : "top"]: r,
              behavior: n,
            });
        },
        m = (e, { adjustments: t = 0, behavior: n }, o) => {
          var l, i;
          const r = e + t;
          null == (i = null == (l = o.scrollElement) ? void 0 : l.scrollTo) ||
            i.call(l, {
              [o.options.horizontal ? "left" : "top"]: r,
              behavior: n,
            });
        };
      class v {
        constructor(e) {
          (this.unsubs = []),
            (this.scrollElement = null),
            (this.targetWindow = null),
            (this.isScrolling = !1),
            (this.scrollToIndexTimeoutId = null),
            (this.measurementsCache = []),
            (this.itemSizeCache = new Map()),
            (this.pendingMeasuredCacheIndexes = []),
            (this.scrollRect = null),
            (this.scrollOffset = null),
            (this.scrollDirection = null),
            (this.scrollAdjustments = 0),
            (this.elementsCache = new Map()),
            (this.observer = (() => {
              let e = null;
              const t = () =>
                e ||
                (this.targetWindow && this.targetWindow.ResizeObserver
                  ? (e = new this.targetWindow.ResizeObserver((e) => {
                      e.forEach((e) => {
                        this._measureElement(e.target, e);
                      });
                    }))
                  : null);
              return {
                disconnect: () => {
                  var e;
                  return null == (e = t()) ? void 0 : e.disconnect();
                },
                observe: (e) => {
                  var n;
                  return null == (n = t())
                    ? void 0
                    : n.observe(e, { box: "border-box" });
                },
                unobserve: (e) => {
                  var n;
                  return null == (n = t()) ? void 0 : n.unobserve(e);
                },
              };
            })()),
            (this.range = null),
            (this.setOptions = (e) => {
              Object.entries(e).forEach(([t, n]) => {
                void 0 === n && delete e[t];
              }),
                (this.options = {
                  debug: !1,
                  initialOffset: 0,
                  overscan: 1,
                  paddingStart: 0,
                  paddingEnd: 0,
                  scrollPaddingStart: 0,
                  scrollPaddingEnd: 0,
                  horizontal: !1,
                  getItemKey: r,
                  rangeExtractor: s,
                  onChange: () => {},
                  measureElement: f,
                  initialRect: { width: 0, height: 0 },
                  scrollMargin: 0,
                  gap: 0,
                  indexAttribute: "data-index",
                  initialMeasurementsCache: [],
                  lanes: 1,
                  isScrollingResetDelay: 150,
                  enabled: !0,
                  isRtl: !1,
                  ...e,
                });
            }),
            (this.notify = (e) => {
              var t, n;
              null == (n = (t = this.options).onChange) || n.call(t, this, e);
            }),
            (this.maybeNotify = o(
              () => (
                this.calculateRange(),
                [
                  this.isScrolling,
                  this.range ? this.range.startIndex : null,
                  this.range ? this.range.endIndex : null,
                ]
              ),
              (e) => {
                this.notify(e);
              },
              {
                key: !1,
                debug: () => this.options.debug,
                initialDeps: [
                  this.isScrolling,
                  this.range ? this.range.startIndex : null,
                  this.range ? this.range.endIndex : null,
                ],
              },
            )),
            (this.cleanup = () => {
              this.unsubs.filter(Boolean).forEach((e) => e()),
                (this.unsubs = []),
                (this.scrollElement = null),
                (this.targetWindow = null),
                this.observer.disconnect(),
                this.elementsCache.clear();
            }),
            (this._didMount = () => () => {
              this.cleanup();
            }),
            (this._willUpdate = () => {
              var e;
              const t = this.options.enabled
                ? this.options.getScrollElement()
                : null;
              if (this.scrollElement !== t) {
                if ((this.cleanup(), !t)) return void this.maybeNotify();
                (this.scrollElement = t),
                  this.scrollElement && "ownerDocument" in this.scrollElement
                    ? (this.targetWindow =
                        this.scrollElement.ownerDocument.defaultView)
                    : (this.targetWindow =
                        (null == (e = this.scrollElement)
                          ? void 0
                          : e.window) ?? null),
                  this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: void 0,
                    behavior: void 0,
                  }),
                  this.unsubs.push(
                    this.options.observeElementRect(this, (e) => {
                      (this.scrollRect = e), this.maybeNotify();
                    }),
                  ),
                  this.unsubs.push(
                    this.options.observeElementOffset(this, (e, t) => {
                      (this.scrollAdjustments = 0),
                        (this.scrollDirection = t
                          ? this.getScrollOffset() < e
                            ? "forward"
                            : "backward"
                          : null),
                        (this.scrollOffset = e),
                        (this.isScrolling = t),
                        this.maybeNotify();
                    }),
                  );
              }
            }),
            (this.getSize = () =>
              this.options.enabled
                ? ((this.scrollRect =
                    this.scrollRect ?? this.options.initialRect),
                  this.scrollRect[this.options.horizontal ? "width" : "height"])
                : ((this.scrollRect = null), 0)),
            (this.getScrollOffset = () =>
              this.options.enabled
                ? ((this.scrollOffset =
                    this.scrollOffset ??
                    ("function" == typeof this.options.initialOffset
                      ? this.options.initialOffset()
                      : this.options.initialOffset)),
                  this.scrollOffset)
                : ((this.scrollOffset = null), 0)),
            (this.getFurthestMeasurement = (e, t) => {
              const n = new Map(),
                o = new Map();
              for (let l = t - 1; l >= 0; l--) {
                const t = e[l];
                if (n.has(t.lane)) continue;
                const i = o.get(t.lane);
                if (
                  (null == i || t.end > i.end
                    ? o.set(t.lane, t)
                    : t.end < i.end && n.set(t.lane, !0),
                  n.size === this.options.lanes)
                )
                  break;
              }
              return o.size === this.options.lanes
                ? Array.from(o.values()).sort((e, t) =>
                    e.end === t.end ? e.index - t.index : e.end - t.end,
                  )[0]
                : void 0;
            }),
            (this.getMeasurementOptions = o(
              () => [
                this.options.count,
                this.options.paddingStart,
                this.options.scrollMargin,
                this.options.getItemKey,
                this.options.enabled,
              ],
              (e, t, n, o, l) => (
                (this.pendingMeasuredCacheIndexes = []),
                {
                  count: e,
                  paddingStart: t,
                  scrollMargin: n,
                  getItemKey: o,
                  enabled: l,
                }
              ),
              { key: !1 },
            )),
            (this.getMeasurements = o(
              () => [this.getMeasurementOptions(), this.itemSizeCache],
              (
                {
                  count: e,
                  paddingStart: t,
                  scrollMargin: n,
                  getItemKey: o,
                  enabled: l,
                },
                i,
              ) => {
                if (!l)
                  return (
                    (this.measurementsCache = []),
                    this.itemSizeCache.clear(),
                    []
                  );
                0 === this.measurementsCache.length &&
                  ((this.measurementsCache =
                    this.options.initialMeasurementsCache),
                  this.measurementsCache.forEach((e) => {
                    this.itemSizeCache.set(e.key, e.size);
                  }));
                const r =
                  this.pendingMeasuredCacheIndexes.length > 0
                    ? Math.min(...this.pendingMeasuredCacheIndexes)
                    : 0;
                this.pendingMeasuredCacheIndexes = [];
                const s = this.measurementsCache.slice(0, r);
                for (let l = r; l < e; l++) {
                  const e = o(l),
                    r =
                      1 === this.options.lanes
                        ? s[l - 1]
                        : this.getFurthestMeasurement(s, l),
                    a = r ? r.end + this.options.gap : t + n,
                    u = i.get(e),
                    d = "number" == typeof u ? u : this.options.estimateSize(l),
                    g = a + d,
                    c = r ? r.lane : l % this.options.lanes;
                  s[l] = {
                    index: l,
                    start: a,
                    size: d,
                    end: g,
                    key: e,
                    lane: c,
                  };
                }
                return (this.measurementsCache = s), s;
              },
              { key: !1, debug: () => this.options.debug },
            )),
            (this.calculateRange = o(
              () => [
                this.getMeasurements(),
                this.getSize(),
                this.getScrollOffset(),
              ],
              (e, t, n) =>
                (this.range =
                  e.length > 0 && t > 0
                    ? (function ({
                        measurements: e,
                        outerSize: t,
                        scrollOffset: n,
                      }) {
                        const o = e.length - 1,
                          l = (t) => e[t].start,
                          i = w(0, o, l, n);
                        let r = i;
                        for (; r < o && e[r].end < n + t; ) r++;
                        return { startIndex: i, endIndex: r };
                      })({ measurements: e, outerSize: t, scrollOffset: n })
                    : null),
              { key: !1, debug: () => this.options.debug },
            )),
            (this.getIndexes = o(
              () => [
                this.options.rangeExtractor,
                this.calculateRange(),
                this.options.overscan,
                this.options.count,
              ],
              (e, t, n, o) =>
                null === t
                  ? []
                  : e({
                      startIndex: t.startIndex,
                      endIndex: t.endIndex,
                      overscan: n,
                      count: o,
                    }),
              { key: !1, debug: () => this.options.debug },
            )),
            (this.indexFromElement = (e) => {
              const t = this.options.indexAttribute,
                n = e.getAttribute(t);
              return n
                ? parseInt(n, 10)
                : (console.warn(
                    `Missing attribute name '${t}={index}' on measured element.`,
                  ),
                  -1);
            }),
            (this._measureElement = (e, t) => {
              const n = this.indexFromElement(e),
                o = this.measurementsCache[n];
              if (!o) return;
              const l = o.key,
                i = this.elementsCache.get(l);
              i !== e &&
                (i && this.observer.unobserve(i),
                this.observer.observe(e),
                this.elementsCache.set(l, e)),
                e.isConnected &&
                  this.resizeItem(n, this.options.measureElement(e, t, this));
            }),
            (this.resizeItem = (e, t) => {
              const n = this.measurementsCache[e];
              if (!n) return;
              const o = t - (this.itemSizeCache.get(n.key) ?? n.size);
              0 !== o &&
                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                  ? this.shouldAdjustScrollPositionOnItemSizeChange(n, o, this)
                  : n.start <
                    this.getScrollOffset() + this.scrollAdjustments) &&
                  this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: (this.scrollAdjustments += o),
                    behavior: void 0,
                  }),
                this.pendingMeasuredCacheIndexes.push(n.index),
                (this.itemSizeCache = new Map(
                  this.itemSizeCache.set(n.key, t),
                )),
                this.notify(!1));
            }),
            (this.measureElement = (e) => {
              e
                ? this._measureElement(e, void 0)
                : this.elementsCache.forEach((e, t) => {
                    e.isConnected ||
                      (this.observer.unobserve(e),
                      this.elementsCache.delete(t));
                  });
            }),
            (this.getVirtualItems = o(
              () => [this.getIndexes(), this.getMeasurements()],
              (e, t) => {
                const n = [];
                for (let o = 0, l = e.length; o < l; o++) {
                  const l = t[e[o]];
                  n.push(l);
                }
                return n;
              },
              { key: !1, debug: () => this.options.debug },
            )),
            (this.getVirtualItemForOffset = (e) => {
              const t = this.getMeasurements();
              if (0 !== t.length)
                return l(t[w(0, t.length - 1, (e) => l(t[e]).start, e)]);
            }),
            (this.getOffsetForAlignment = (e, t) => {
              const n = this.getSize(),
                o = this.getScrollOffset();
              "auto" === t &&
                (t = e <= o ? "start" : e >= o + n ? "end" : "start"),
                "start" === t ||
                  ("end" === t ? (e -= n) : "center" === t && (e -= n / 2));
              const l = this.options.horizontal
                  ? "scrollWidth"
                  : "scrollHeight",
                i =
                  (this.scrollElement
                    ? "document" in this.scrollElement
                      ? this.scrollElement.document.documentElement[l]
                      : this.scrollElement[l]
                    : 0) - n;
              return Math.max(Math.min(i, e), 0);
            }),
            (this.getOffsetForIndex = (e, t = "auto") => {
              e = Math.max(0, Math.min(e, this.options.count - 1));
              const n = this.measurementsCache[e];
              if (!n) return;
              const o = this.getSize(),
                l = this.getScrollOffset();
              if ("auto" === t)
                if (n.end >= l + o - this.options.scrollPaddingEnd) t = "end";
                else {
                  if (!(n.start <= l + this.options.scrollPaddingStart))
                    return [l, t];
                  t = "start";
                }
              const i =
                "end" === t
                  ? n.end + this.options.scrollPaddingEnd
                  : n.start - this.options.scrollPaddingStart;
              return [this.getOffsetForAlignment(i, t), t];
            }),
            (this.isDynamicMode = () => this.elementsCache.size > 0),
            (this.cancelScrollToIndex = () => {
              null !== this.scrollToIndexTimeoutId &&
                this.targetWindow &&
                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),
                (this.scrollToIndexTimeoutId = null));
            }),
            (this.scrollToOffset = (
              e,
              { align: t = "start", behavior: n } = {},
            ) => {
              this.cancelScrollToIndex(),
                "smooth" === n &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                this._scrollToOffset(this.getOffsetForAlignment(e, t), {
                  adjustments: void 0,
                  behavior: n,
                });
            }),
            (this.scrollToIndex = (
              e,
              { align: t = "auto", behavior: n } = {},
            ) => {
              (e = Math.max(0, Math.min(e, this.options.count - 1))),
                this.cancelScrollToIndex(),
                "smooth" === n &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  );
              const o = this.getOffsetForIndex(e, t);
              if (!o) return;
              const [i, r] = o;
              this._scrollToOffset(i, { adjustments: void 0, behavior: n }),
                "smooth" !== n &&
                  this.isDynamicMode() &&
                  this.targetWindow &&
                  (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(
                    () => {
                      this.scrollToIndexTimeoutId = null;
                      if (this.elementsCache.has(this.options.getItemKey(e))) {
                        const [i] = l(this.getOffsetForIndex(e, r));
                        (t = i),
                          (o = this.getScrollOffset()),
                          Math.abs(t - o) < 1 ||
                            this.scrollToIndex(e, { align: r, behavior: n });
                      } else this.scrollToIndex(e, { align: r, behavior: n });
                      var t, o;
                    },
                  ));
            }),
            (this.scrollBy = (e, { behavior: t } = {}) => {
              this.cancelScrollToIndex(),
                "smooth" === t &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                this._scrollToOffset(this.getScrollOffset() + e, {
                  adjustments: void 0,
                  behavior: t,
                });
            }),
            (this.getTotalSize = () => {
              var e;
              const t = this.getMeasurements();
              let n;
              return (
                (n =
                  0 === t.length
                    ? this.options.paddingStart
                    : 1 === this.options.lanes
                      ? ((null == (e = t[t.length - 1]) ? void 0 : e.end) ?? 0)
                      : Math.max(
                          ...t.slice(-this.options.lanes).map((e) => e.end),
                        )),
                n - this.options.scrollMargin + this.options.paddingEnd
              );
            }),
            (this._scrollToOffset = (e, { adjustments: t, behavior: n }) => {
              this.options.scrollToFn(e, { behavior: n, adjustments: t }, this);
            }),
            (this.measure = () => {
              (this.itemSizeCache = new Map()), this.notify(!1);
            }),
            this.setOptions(e);
        }
      }
      const w = (e, t, n, o) => {
        for (; e <= t; ) {
          const l = ((e + t) / 2) | 0,
            i = n(l);
          if (i < o) e = l + 1;
          else {
            if (!(i > o)) return l;
            t = l - 1;
          }
        }
        return e > 0 ? e - 1 : 0;
      };
    },
  },
]);
