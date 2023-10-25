/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4135],
  {
    54905: function (e, t) {
      var r, i, s;
      /* @license
Papa Parse
v5.3.2
https://github.com/mholt/PapaParse
License: MIT
*/ (i = []),
        (r = function e() {
          "use strict";
          var t =
              "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : void 0 !== t
                ? t
                : {},
            r = !t.document && !!t.postMessage,
            i = r && /blob:/i.test((t.location || {}).protocol),
            s = {},
            a = 0,
            n = {
              parse: function (r, i) {
                var o = (i = i || {}).dynamicTyping || !1;
                if (
                  (b(o) && ((i.dynamicTypingFunction = o), (o = {})),
                  (i.dynamicTyping = o),
                  (i.transform = !!b(i.transform) && i.transform),
                  i.worker && n.WORKERS_SUPPORTED)
                ) {
                  var l = (function () {
                    if (!n.WORKERS_SUPPORTED) return !1;
                    var r,
                      i,
                      o =
                        ((r = t.URL || t.webkitURL || null),
                        (i = e.toString()),
                        n.BLOB_URL ||
                          (n.BLOB_URL = r.createObjectURL(
                            new Blob(["(", i, ")();"], {
                              type: "text/javascript",
                            }),
                          ))),
                      l = new t.Worker(o);
                    return (l.onmessage = f), (l.id = a++), (s[l.id] = l);
                  })();
                  return (
                    (l.userStep = i.step),
                    (l.userChunk = i.chunk),
                    (l.userComplete = i.complete),
                    (l.userError = i.error),
                    (i.step = b(i.step)),
                    (i.chunk = b(i.chunk)),
                    (i.complete = b(i.complete)),
                    (i.error = b(i.error)),
                    delete i.worker,
                    void l.postMessage({ input: r, config: i, workerId: l.id })
                  );
                }
                var g = null;
                return (
                  n.NODE_STREAM_INPUT,
                  "string" == typeof r
                    ? (g = i.download ? new u(i) : new d(i))
                    : !0 === r.readable && b(r.read) && b(r.on)
                    ? (g = new m(i))
                    : ((t.File && r instanceof File) || r instanceof Object) &&
                      (g = new c(i)),
                  g.stream(r)
                );
              },
              unparse: function (e, t) {
                var r = !1,
                  i = !0,
                  s = ",",
                  a = "\r\n",
                  o = '"',
                  l = o + o,
                  u = !1,
                  c = null,
                  d = !1;
                !(function () {
                  if ("object" == typeof t) {
                    if (
                      ("string" != typeof t.delimiter ||
                        n.BAD_DELIMITERS.filter(function (e) {
                          return -1 !== t.delimiter.indexOf(e);
                        }).length ||
                        (s = t.delimiter),
                      ("boolean" == typeof t.quotes ||
                        "function" == typeof t.quotes ||
                        Array.isArray(t.quotes)) &&
                        (r = t.quotes),
                      ("boolean" != typeof t.skipEmptyLines &&
                        "string" != typeof t.skipEmptyLines) ||
                        (u = t.skipEmptyLines),
                      "string" == typeof t.newline && (a = t.newline),
                      "string" == typeof t.quoteChar && (o = t.quoteChar),
                      "boolean" == typeof t.header && (i = t.header),
                      Array.isArray(t.columns))
                    ) {
                      if (0 === t.columns.length)
                        throw new Error("Option columns is empty");
                      c = t.columns;
                    }
                    void 0 !== t.escapeChar && (l = t.escapeChar + o),
                      ("boolean" == typeof t.escapeFormulae ||
                        t.escapeFormulae instanceof RegExp) &&
                        (d =
                          t.escapeFormulae instanceof RegExp
                            ? t.escapeFormulae
                            : /^[=+\-@\t\r].*$/);
                  }
                })();
                var m = new RegExp(_(o), "g");
                if (
                  ("string" == typeof e && (e = JSON.parse(e)),
                  Array.isArray(e))
                ) {
                  if (!e.length || Array.isArray(e[0])) return g(null, e, u);
                  if ("object" == typeof e[0])
                    return g(c || Object.keys(e[0]), e, u);
                } else if ("object" == typeof e)
                  return (
                    "string" == typeof e.data && (e.data = JSON.parse(e.data)),
                    Array.isArray(e.data) &&
                      (e.fields || (e.fields = (e.meta && e.meta.fields) || c),
                      e.fields ||
                        (e.fields = Array.isArray(e.data[0])
                          ? e.fields
                          : "object" == typeof e.data[0]
                          ? Object.keys(e.data[0])
                          : []),
                      Array.isArray(e.data[0]) ||
                        "object" == typeof e.data[0] ||
                        (e.data = [e.data])),
                    g(e.fields || [], e.data || [], u)
                  );
                throw new Error("Unable to serialize unrecognized input");
                function g(e, t, r) {
                  var n = "";
                  "string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t));
                  var o = Array.isArray(e) && 0 < e.length,
                    l = !Array.isArray(t[0]);
                  if (o && i) {
                    for (var u = 0; u < e.length; u++)
                      0 < u && (n += s), (n += M(e[u], u));
                    0 < t.length && (n += a);
                  }
                  for (var c = 0; c < t.length; c++) {
                    var d = o ? e.length : t[c].length,
                      m = !1,
                      g = o
                        ? 0 === Object.keys(t[c]).length
                        : 0 === t[c].length;
                    if (
                      (r &&
                        !o &&
                        (m =
                          "greedy" === r
                            ? "" === t[c].join("").trim()
                            : 1 === t[c].length && 0 === t[c][0].length),
                      "greedy" === r && o)
                    ) {
                      for (var _ = [], f = 0; f < d; f++) {
                        var y = l ? e[f] : f;
                        _.push(t[c][y]);
                      }
                      m = "" === _.join("").trim();
                    }
                    if (!m) {
                      for (var B = 0; B < d; B++) {
                        0 < B && !g && (n += s);
                        var h = o && l ? e[B] : B;
                        n += M(t[c][h], B);
                      }
                      c < t.length - 1 && (!r || (0 < d && !g)) && (n += a);
                    }
                  }
                  return n;
                }
                function M(e, t) {
                  if (null == e) return "";
                  if (e.constructor === Date)
                    return JSON.stringify(e).slice(1, 25);
                  var i = !1;
                  d &&
                    "string" == typeof e &&
                    d.test(e) &&
                    ((e = "'" + e), (i = !0));
                  var a = e.toString().replace(m, l);
                  return (i =
                    i ||
                    !0 === r ||
                    ("function" == typeof r && r(e, t)) ||
                    (Array.isArray(r) && r[t]) ||
                    (function (e, t) {
                      for (var r = 0; r < t.length; r++)
                        if (-1 < e.indexOf(t[r])) return !0;
                      return !1;
                    })(a, n.BAD_DELIMITERS) ||
                    -1 < a.indexOf(s) ||
                    " " === a.charAt(0) ||
                    " " === a.charAt(a.length - 1))
                    ? o + a + o
                    : a;
                }
              },
            };
          if (
            ((n.RECORD_SEP = String.fromCharCode(30)),
            (n.UNIT_SEP = String.fromCharCode(31)),
            (n.BYTE_ORDER_MARK = "\ufeff"),
            (n.BAD_DELIMITERS = ["\r", "\n", '"', n.BYTE_ORDER_MARK]),
            (n.WORKERS_SUPPORTED = !r && !!t.Worker),
            (n.NODE_STREAM_INPUT = 1),
            (n.LocalChunkSize = 10485760),
            (n.RemoteChunkSize = 5242880),
            (n.DefaultDelimiter = ","),
            (n.Parser = M),
            (n.ParserHandle = g),
            (n.NetworkStreamer = u),
            (n.FileStreamer = c),
            (n.StringStreamer = d),
            (n.ReadableStreamStreamer = m),
            t.jQuery)
          ) {
            var o = t.jQuery;
            o.fn.parse = function (e) {
              var r = e.config || {},
                i = [];
              return (
                this.each(function (e) {
                  if (
                    "INPUT" !== o(this).prop("tagName").toUpperCase() ||
                    "file" !== o(this).attr("type").toLowerCase() ||
                    !t.FileReader ||
                    !this.files ||
                    0 === this.files.length
                  )
                    return !0;
                  for (var s = 0; s < this.files.length; s++)
                    i.push({
                      file: this.files[s],
                      inputElem: this,
                      instanceConfig: o.extend({}, r),
                    });
                }),
                s(),
                this
              );
              function s() {
                if (0 !== i.length) {
                  var t,
                    r,
                    s,
                    l,
                    u = i[0];
                  if (b(e.before)) {
                    var c = e.before(u.file, u.inputElem);
                    if ("object" == typeof c) {
                      if ("abort" === c.action)
                        return (
                          (t = "AbortError"),
                          (r = u.file),
                          (s = u.inputElem),
                          (l = c.reason),
                          void (b(e.error) && e.error({ name: t }, r, s, l))
                        );
                      if ("skip" === c.action) return void a();
                      "object" == typeof c.config &&
                        (u.instanceConfig = o.extend(
                          u.instanceConfig,
                          c.config,
                        ));
                    } else if ("skip" === c) return void a();
                  }
                  var d = u.instanceConfig.complete;
                  (u.instanceConfig.complete = function (e) {
                    b(d) && d(e, u.file, u.inputElem), a();
                  }),
                    n.parse(u.file, u.instanceConfig);
                } else b(e.complete) && e.complete();
              }
              function a() {
                i.splice(0, 1), s();
              }
            };
          }
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
                var t = h(e);
                (t.chunkSize = parseInt(t.chunkSize)),
                  e.step || e.chunk || (t.chunkSize = null),
                  (this._handle = new g(t)),
                  ((this._handle.streamer = this)._config = t);
              }.call(this, e),
              (this.parseChunk = function (e, r) {
                if (this.isFirstChunk && b(this._config.beforeFirstChunk)) {
                  var s = this._config.beforeFirstChunk(e);
                  void 0 !== s && (e = s);
                }
                (this.isFirstChunk = !1), (this._halted = !1);
                var a = this._partialLine + e;
                this._partialLine = "";
                var o = this._handle.parse(a, this._baseIndex, !this._finished);
                if (!this._handle.paused() && !this._handle.aborted()) {
                  var l = o.meta.cursor;
                  this._finished ||
                    ((this._partialLine = a.substring(l - this._baseIndex)),
                    (this._baseIndex = l)),
                    o && o.data && (this._rowCount += o.data.length);
                  var u =
                    this._finished ||
                    (this._config.preview &&
                      this._rowCount >= this._config.preview);
                  if (i)
                    t.postMessage({
                      results: o,
                      workerId: n.WORKER_ID,
                      finished: u,
                    });
                  else if (b(this._config.chunk) && !r) {
                    if (
                      (this._config.chunk(o, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    (o = void 0), (this._completeResults = void 0);
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(o.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(o.errors)),
                      (this._completeResults.meta = o.meta)),
                    this._completed ||
                      !u ||
                      !b(this._config.complete) ||
                      (o && o.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    u || (o && o.meta.paused) || this._nextChunk(),
                    o
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                b(this._config.error)
                  ? this._config.error(e)
                  : i &&
                    this._config.error &&
                    t.postMessage({
                      workerId: n.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function u(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = n.RemoteChunkSize),
              l.call(this, e),
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
                      ((t.onload = p(this._chunkLoaded, this)),
                      (t.onerror = p(this._chunkError, this))),
                    t.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !r,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var e = this._config.downloadRequestHeaders;
                    for (var i in e) t.setRequestHeader(i, e[i]);
                  }
                  if (this._config.chunkSize) {
                    var s = this._start + this._config.chunkSize - 1;
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + s,
                    );
                  }
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
                var r = t.statusText || e;
                this._sendError(new Error(r));
              });
          }
          function c(e) {
            var t, r;
            (e = e || {}).chunkSize || (e.chunkSize = n.LocalChunkSize),
              l.call(this, e);
            var i = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (r = e.slice || e.webkitSlice || e.mozSlice),
                i
                  ? (((t = new FileReader()).onload = p(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = p(this._chunkError, this)))
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
                  var s = Math.min(
                    this._start + this._config.chunkSize,
                    this._input.size,
                  );
                  e = r.call(e, this._start, s);
                }
                var a = t.readAsText(e, this._config.encoding);
                i || this._chunkLoaded({ target: { result: a } });
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
            l.call(this, (e = e || {})),
              (this.stream = function (e) {
                return (t = e), this._nextChunk();
              }),
              (this._nextChunk = function () {
                if (!this._finished) {
                  var e,
                    r = this._config.chunkSize;
                  return (
                    r
                      ? ((e = t.substring(0, r)), (t = t.substring(r)))
                      : ((e = t), (t = "")),
                    (this._finished = !t),
                    this.parseChunk(e)
                  );
                }
              });
          }
          function m(e) {
            l.call(this, (e = e || {}));
            var t = [],
              r = !0,
              i = !1;
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
                i && 1 === t.length && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (r = !0);
              }),
              (this._streamData = p(function (e) {
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
              (this._streamError = p(function (e) {
                this._streamCleanUp(), this._sendError(e);
              }, this)),
              (this._streamEnd = p(function () {
                this._streamCleanUp(), (i = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = p(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function g(e) {
            var t,
              r,
              i,
              s = Math.pow(2, 53),
              a = -s,
              o = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              l =
                /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/,
              u = this,
              c = 0,
              d = 0,
              m = !1,
              g = !1,
              f = [],
              y = { data: [], errors: [], meta: {} };
            if (b(e.step)) {
              var B = e.step;
              e.step = function (t) {
                if (((y = t), k())) w();
                else {
                  if ((w(), 0 === y.data.length)) return;
                  (c += t.data.length),
                    e.preview && c > e.preview
                      ? r.abort()
                      : ((y.data = y.data[0]), B(y, u));
                }
              };
            }
            function p(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function w() {
              return (
                y &&
                  i &&
                  (R(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      n.DefaultDelimiter +
                      "'",
                  ),
                  (i = !1)),
                e.skipEmptyLines &&
                  (y.data = y.data.filter(function (e) {
                    return !p(e);
                  })),
                k() &&
                  (function () {
                    if (y)
                      if (Array.isArray(y.data[0])) {
                        for (var t = 0; k() && t < y.data.length; t++)
                          y.data[t].forEach(r);
                        y.data.splice(0, 1);
                      } else y.data.forEach(r);
                    function r(t, r) {
                      b(e.transformHeader) && (t = e.transformHeader(t, r)),
                        f.push(t);
                    }
                  })(),
                (function () {
                  if (!y || (!e.header && !e.dynamicTyping && !e.transform))
                    return y;
                  function t(t, r) {
                    var i,
                      s = e.header ? {} : [];
                    for (i = 0; i < t.length; i++) {
                      var a = i,
                        n = t[i];
                      e.header && (a = i >= f.length ? "__parsed_extra" : f[i]),
                        e.transform && (n = e.transform(n, a)),
                        (n = F(a, n)),
                        "__parsed_extra" === a
                          ? ((s[a] = s[a] || []), s[a].push(n))
                          : (s[a] = n);
                    }
                    return (
                      e.header &&
                        (i > f.length
                          ? R(
                              "FieldMismatch",
                              "TooManyFields",
                              "Too many fields: expected " +
                                f.length +
                                " fields but parsed " +
                                i,
                              d + r,
                            )
                          : i < f.length &&
                            R(
                              "FieldMismatch",
                              "TooFewFields",
                              "Too few fields: expected " +
                                f.length +
                                " fields but parsed " +
                                i,
                              d + r,
                            )),
                      s
                    );
                  }
                  var r = 1;
                  return (
                    !y.data.length || Array.isArray(y.data[0])
                      ? ((y.data = y.data.map(t)), (r = y.data.length))
                      : (y.data = t(y.data, 0)),
                    e.header && y.meta && (y.meta.fields = f),
                    (d += r),
                    y
                  );
                })()
              );
            }
            function k() {
              return e.header && 0 === f.length;
            }
            function F(t, r) {
              return (
                (i = t),
                e.dynamicTypingFunction &&
                  void 0 === e.dynamicTyping[i] &&
                  (e.dynamicTyping[i] = e.dynamicTypingFunction(i)),
                !0 === (e.dynamicTyping[i] || e.dynamicTyping)
                  ? "true" === r ||
                    "TRUE" === r ||
                    ("false" !== r &&
                      "FALSE" !== r &&
                      ((function (e) {
                        if (o.test(e)) {
                          var t = parseFloat(e);
                          if (a < t && t < s) return !0;
                        }
                        return !1;
                      })(r)
                        ? parseFloat(r)
                        : l.test(r)
                        ? new Date(r)
                        : "" === r
                        ? null
                        : r))
                  : r
              );
              var i;
            }
            function R(e, t, r, i) {
              var s = { type: e, code: t, message: r };
              void 0 !== i && (s.row = i), y.errors.push(s);
            }
            (this.parse = function (s, a, o) {
              var l = e.quoteChar || '"';
              if (
                (e.newline ||
                  (e.newline = (function (e, t) {
                    e = e.substring(0, 1048576);
                    var r = new RegExp(_(t) + "([^]*?)" + _(t), "gm"),
                      i = (e = e.replace(r, "")).split("\r"),
                      s = e.split("\n"),
                      a = 1 < s.length && s[0].length < i[0].length;
                    if (1 === i.length || a) return "\n";
                    for (var n = 0, o = 0; o < i.length; o++)
                      "\n" === i[o][0] && n++;
                    return n >= i.length / 2 ? "\r\n" : "\r";
                  })(s, l)),
                (i = !1),
                e.delimiter)
              )
                b(e.delimiter) &&
                  ((e.delimiter = e.delimiter(s)),
                  (y.meta.delimiter = e.delimiter));
              else {
                var u = (function (t, r, i, s, a) {
                  var o, l, u, c;
                  a = a || [",", "\t", "|", ";", n.RECORD_SEP, n.UNIT_SEP];
                  for (var d = 0; d < a.length; d++) {
                    var m = a[d],
                      g = 0,
                      _ = 0,
                      f = 0;
                    u = void 0;
                    for (
                      var y = new M({
                          comments: s,
                          delimiter: m,
                          newline: r,
                          preview: 10,
                        }).parse(t),
                        B = 0;
                      B < y.data.length;
                      B++
                    )
                      if (i && p(y.data[B])) f++;
                      else {
                        var h = y.data[B].length;
                        (_ += h),
                          void 0 !== u
                            ? 0 < h && ((g += Math.abs(h - u)), (u = h))
                            : (u = h);
                      }
                    0 < y.data.length && (_ /= y.data.length - f),
                      (void 0 === l || g <= l) &&
                        (void 0 === c || c < _) &&
                        1.99 < _ &&
                        ((l = g), (o = m), (c = _));
                  }
                  return { successful: !!(e.delimiter = o), bestDelimiter: o };
                })(
                  s,
                  e.newline,
                  e.skipEmptyLines,
                  e.comments,
                  e.delimitersToGuess,
                );
                u.successful
                  ? (e.delimiter = u.bestDelimiter)
                  : ((i = !0), (e.delimiter = n.DefaultDelimiter)),
                  (y.meta.delimiter = e.delimiter);
              }
              var c = h(e);
              return (
                e.preview && e.header && c.preview++,
                (t = s),
                (r = new M(c)),
                (y = r.parse(t, a, o)),
                w(),
                m ? { meta: { paused: !0 } } : y || { meta: { paused: !1 } }
              );
            }),
              (this.paused = function () {
                return m;
              }),
              (this.pause = function () {
                (m = !0),
                  r.abort(),
                  (t = b(e.chunk) ? "" : t.substring(r.getCharIndex()));
              }),
              (this.resume = function () {
                u.streamer._halted
                  ? ((m = !1), u.streamer.parseChunk(t, !0))
                  : setTimeout(u.resume, 3);
              }),
              (this.aborted = function () {
                return g;
              }),
              (this.abort = function () {
                (g = !0),
                  r.abort(),
                  (y.meta.aborted = !0),
                  b(e.complete) && e.complete(y),
                  (t = "");
              });
          }
          function _(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function M(e) {
            var t,
              r = (e = e || {}).delimiter,
              i = e.newline,
              s = e.comments,
              a = e.step,
              o = e.preview,
              l = e.fastMode,
              u = (t =
                void 0 === e.quoteChar || null === e.quoteChar
                  ? '"'
                  : e.quoteChar);
            if (
              (void 0 !== e.escapeChar && (u = e.escapeChar),
              ("string" != typeof r || -1 < n.BAD_DELIMITERS.indexOf(r)) &&
                (r = ","),
              s === r)
            )
              throw new Error("Comment character same as delimiter");
            !0 === s
              ? (s = "#")
              : ("string" != typeof s || -1 < n.BAD_DELIMITERS.indexOf(s)) &&
                (s = !1),
              "\n" !== i && "\r" !== i && "\r\n" !== i && (i = "\n");
            var c = 0,
              d = !1;
            (this.parse = function (e, n, m) {
              if ("string" != typeof e)
                throw new Error("Input must be a string");
              var g = e.length,
                M = r.length,
                f = i.length,
                y = s.length,
                B = b(a),
                h = [],
                p = [],
                w = [],
                k = (c = 0);
              if (!e) return D();
              if (l || (!1 !== l && -1 === e.indexOf(t))) {
                for (var F = e.split(i), R = 0; R < F.length; R++) {
                  if (((w = F[R]), (c += w.length), R !== F.length - 1))
                    c += i.length;
                  else if (m) return D();
                  if (!s || w.substring(0, y) !== s) {
                    if (B) {
                      if (((h = []), W(w.split(r)), A(), d)) return D();
                    } else W(w.split(r));
                    if (o && o <= R) return (h = h.slice(0, o)), D(!0);
                  }
                }
                return D();
              }
              for (
                var S = e.indexOf(r, c),
                  z = e.indexOf(i, c),
                  E = new RegExp(_(u) + _(t), "g"),
                  v = e.indexOf(t, c);
                ;

              )
                if (e[c] !== t)
                  if (s && 0 === w.length && e.substring(c, c + y) === s) {
                    if (-1 === z) return D();
                    (c = z + f), (z = e.indexOf(i, c)), (S = e.indexOf(r, c));
                  } else if (-1 !== S && (S < z || -1 === z))
                    w.push(e.substring(c, S)),
                      (c = S + M),
                      (S = e.indexOf(r, c));
                  else {
                    if (-1 === z) break;
                    if ((w.push(e.substring(c, z)), C(z + f), B && (A(), d)))
                      return D();
                    if (o && h.length >= o) return D(!0);
                  }
                else
                  for (v = c, c++; ; ) {
                    if (-1 === (v = e.indexOf(t, v + 1)))
                      return (
                        m ||
                          p.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: h.length,
                            index: c,
                          }),
                        I()
                      );
                    if (v === g - 1) return I(e.substring(c, v).replace(E, t));
                    if (t !== u || e[v + 1] !== u) {
                      if (t === u || 0 === v || e[v - 1] !== u) {
                        -1 !== S && S < v + 1 && (S = e.indexOf(r, v + 1)),
                          -1 !== z && z < v + 1 && (z = e.indexOf(i, v + 1));
                        var T = j(-1 === z ? S : Math.min(S, z));
                        if (e.substr(v + 1 + T, M) === r) {
                          w.push(e.substring(c, v).replace(E, t)),
                            e[(c = v + 1 + T + M)] !== t &&
                              (v = e.indexOf(t, c)),
                            (S = e.indexOf(r, c)),
                            (z = e.indexOf(i, c));
                          break;
                        }
                        var O = j(z);
                        if (e.substring(v + 1 + O, v + 1 + O + f) === i) {
                          if (
                            (w.push(e.substring(c, v).replace(E, t)),
                            C(v + 1 + O + f),
                            (S = e.indexOf(r, c)),
                            (v = e.indexOf(t, c)),
                            B && (A(), d))
                          )
                            return D();
                          if (o && h.length >= o) return D(!0);
                          break;
                        }
                        p.push({
                          type: "Quotes",
                          code: "InvalidQuotes",
                          message:
                            "Trailing quote on quoted field is malformed",
                          row: h.length,
                          index: c,
                        }),
                          v++;
                      }
                    } else v++;
                  }
              return I();
              function W(e) {
                h.push(e), (k = c);
              }
              function j(t) {
                var r = 0;
                if (-1 !== t) {
                  var i = e.substring(v + 1, t);
                  i && "" === i.trim() && (r = i.length);
                }
                return r;
              }
              function I(t) {
                return (
                  m ||
                    (void 0 === t && (t = e.substring(c)),
                    w.push(t),
                    (c = g),
                    W(w),
                    B && A()),
                  D()
                );
              }
              function C(t) {
                (c = t), W(w), (w = []), (z = e.indexOf(i, c));
              }
              function D(e) {
                return {
                  data: h,
                  errors: p,
                  meta: {
                    delimiter: r,
                    linebreak: i,
                    aborted: d,
                    truncated: !!e,
                    cursor: k + (n || 0),
                  },
                };
              }
              function A() {
                a(D()), (h = []), (p = []);
              }
            }),
              (this.abort = function () {
                d = !0;
              }),
              (this.getCharIndex = function () {
                return c;
              });
          }
          function f(e) {
            var t = e.data,
              r = s[t.workerId],
              i = !1;
            if (t.error) r.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var a = {
                abort: function () {
                  (i = !0),
                    y(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: B,
                resume: B,
              };
              if (b(r.userStep)) {
                for (
                  var n = 0;
                  n < t.results.data.length &&
                  (r.userStep(
                    {
                      data: t.results.data[n],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    a,
                  ),
                  !i);
                  n++
                );
                delete t.results;
              } else
                b(r.userChunk) &&
                  (r.userChunk(t.results, a, t.file), delete t.results);
            }
            t.finished && !i && y(t.workerId, t.results);
          }
          function y(e, t) {
            var r = s[e];
            b(r.userComplete) && r.userComplete(t), r.terminate(), delete s[e];
          }
          function B() {
            throw new Error("Not implemented.");
          }
          function h(e) {
            if ("object" != typeof e || null === e) return e;
            var t = Array.isArray(e) ? [] : {};
            for (var r in e) t[r] = h(e[r]);
            return t;
          }
          function p(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function b(e) {
            return "function" == typeof e;
          }
          return (
            i &&
              (t.onmessage = function (e) {
                var r = e.data;
                if (
                  (void 0 === n.WORKER_ID && r && (n.WORKER_ID = r.workerId),
                  "string" == typeof r.input)
                )
                  t.postMessage({
                    workerId: n.WORKER_ID,
                    results: n.parse(r.input, r.config),
                    finished: !0,
                  });
                else if (
                  (t.File && r.input instanceof File) ||
                  r.input instanceof Object
                ) {
                  var i = n.parse(r.input, r.config);
                  i &&
                    t.postMessage({
                      workerId: n.WORKER_ID,
                      results: i,
                      finished: !0,
                    });
                }
              }),
            ((u.prototype = Object.create(l.prototype)).constructor = u),
            ((c.prototype = Object.create(l.prototype)).constructor = c),
            ((d.prototype = Object.create(d.prototype)).constructor = d),
            ((m.prototype = Object.create(l.prototype)).constructor = m),
            n
          );
        }),
        void 0 === (s = "function" == typeof r ? r.apply(t, i) : r) ||
          (e.exports = s);
    },
    44208: (e, t, r) => {
      "use strict";
      r.d(t, {
        $k: () => x,
        Ax: () => f,
        Bn: () => M,
        F5: () => R,
        MJ: () => D,
        Ol: () => d,
        Pe: () => p,
        QS: () => c,
        SL: () => W,
        UD: () => z,
        eh: () => m,
        l$: () => l,
        nQ: () => T,
        rA: () => I,
        tc: () => g,
        xf: () => u,
        yf: () => _,
        yp: () => P,
      });
      var i = r(45878),
        s = r(43898),
        a = r(67328),
        n = r(68562);
      const o = i.Message;
      var l, u, c, d, m, g, _, M;
      !(function (e) {
        (e[(e.k_EMarketingMessageInvalid = 0)] = "k_EMarketingMessageInvalid"),
          (e[(e.k_EMarketingMessageNowAvailable = 1)] =
            "k_EMarketingMessageNowAvailable"),
          (e[(e.k_EMarketingMessageWeekendDeal = 2)] =
            "k_EMarketingMessageWeekendDeal"),
          (e[(e.k_EMarketingMessagePrePurchase = 3)] =
            "k_EMarketingMessagePrePurchase"),
          (e[(e.k_EMarketingMessagePlayNow = 4)] =
            "k_EMarketingMessagePlayNow"),
          (e[(e.k_EMarketingMessagePreloadNow = 5)] =
            "k_EMarketingMessagePreloadNow"),
          (e[(e.k_EMarketingMessageGeneral = 6)] =
            "k_EMarketingMessageGeneral"),
          (e[(e.k_EMarketingMessageDemoQuit = 7)] =
            "k_EMarketingMessageDemoQuit"),
          (e[(e.k_EMarketingMessageGifting = 8)] =
            "k_EMarketingMessageGifting"),
          (e[(e.k_EMarketingMessageEJsKorner = 9)] =
            "k_EMarketingMessageEJsKorner"),
          (e[(e.k_EMarketingMessageUpdate = 10)] = "k_EMarketingMessageUpdate"),
          (e[(e.k_EMarketingMessageMidweekDeal = 11)] =
            "k_EMarketingMessageMidweekDeal"),
          (e[(e.k_EMarketingMessageDailyDeal = 12)] =
            "k_EMarketingMessageDailyDeal");
      })(l || (l = {})),
        (function (e) {
          (e[(e.k_EMarketingMessageNoAssociation = 0)] =
            "k_EMarketingMessageNoAssociation"),
            (e[(e.k_EMarketingMessageAppAssociation = 1)] =
              "k_EMarketingMessageAppAssociation"),
            (e[(e.k_EMarketingMessageSubscriptionAssociation = 2)] =
              "k_EMarketingMessageSubscriptionAssociation"),
            (e[(e.k_EMarketingMessagePublisherAssociation = 3)] =
              "k_EMarketingMessagePublisherAssociation"),
            (e[(e.k_EMarketingMessageGenreAssociation = 4)] =
              "k_EMarketingMessageGenreAssociation"),
            (e[(e.k_EMarketingMessageBundleAssociation = 5)] =
              "k_EMarketingMessageBundleAssociation");
        })(u || (u = {})),
        (function (e) {
          (e[(e.k_EMarketingMessageVisibleBeta = 1)] =
            "k_EMarketingMessageVisibleBeta"),
            (e[(e.k_EMarketingMessageVisiblePublic = 2)] =
              "k_EMarketingMessageVisiblePublic");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_EMarketingMessageLookupInvalid = 0)] =
            "k_EMarketingMessageLookupInvalid"),
            (e[(e.k_EMarketingMessageLookupByGID = 1)] =
              "k_EMarketingMessageLookupByGID"),
            (e[(e.k_EMarketingMessageLookupActive = 2)] =
              "k_EMarketingMessageLookupActive"),
            (e[(e.k_EMarketingMessageLookupByTitleWithType = 3)] =
              "k_EMarketingMessageLookupByTitleWithType"),
            (e[(e.k_EMarketingMessageLookupByGIDList = 4)] =
              "k_EMarketingMessageLookupByGIDList");
        })(d || (d = {})),
        (function (e) {
          (e[(e.k_EMarketingMessageValidRealms_GlobalOnly = 0)] =
            "k_EMarketingMessageValidRealms_GlobalOnly"),
            (e[(e.k_EMarketingMessageValidRealms_SteamChinaOnly = 1)] =
              "k_EMarketingMessageValidRealms_SteamChinaOnly"),
            (e[(e.k_EMarketingMessageValidRealms_GlobalAndSteamChina = 2)] =
              "k_EMarketingMessageValidRealms_GlobalAndSteamChina");
        })(m || (m = {})),
        (function (e) {
          (e[(e.k_EMarketingMessageFilterType_Invalid = 0)] =
            "k_EMarketingMessageFilterType_Invalid"),
            (e[(e.k_EMarketingMessageFilterType_OwnsApps = 1)] =
              "k_EMarketingMessageFilterType_OwnsApps"),
            (e[(e.k_EMarketingMessageFilterType_DoesNotOwnApps = 2)] =
              "k_EMarketingMessageFilterType_DoesNotOwnApps"),
            (e[(e.k_EMarketingMessageFilterType_OwnsPackages = 3)] =
              "k_EMarketingMessageFilterType_OwnsPackages"),
            (e[(e.k_EMarketingMessageFilterType_DoesNotOwnsPackages = 4)] =
              "k_EMarketingMessageFilterType_DoesNotOwnsPackages"),
            (e[(e.k_EMarketingMessageFilterType_WishlistsApps = 5)] =
              "k_EMarketingMessageFilterType_WishlistsApps"),
            (e[(e.k_EMarketingMessageFilterType_FollowsApps = 6)] =
              "k_EMarketingMessageFilterType_FollowsApps"),
            (e[(e.k_EMarketingMessageFilterType_MinPlayTimeApps = 7)] =
              "k_EMarketingMessageFilterType_MinPlayTimeApps"),
            (e[(e.k_EMarketingMessageFilterType_MustLaunchedApps = 8)] =
              "k_EMarketingMessageFilterType_MustLaunchedApps"),
            (e[(e.k_EMarketingMessageFilterType_RecentPlayedApps = 9)] =
              "k_EMarketingMessageFilterType_RecentPlayedApps"),
            (e[(e.k_EMarketingMessageFilterType_RetentionApps = 10)] =
              "k_EMarketingMessageFilterType_RetentionApps"),
            (e[(e.k_EMarketingMessageFilterType_MAX = 11)] =
              "k_EMarketingMessageFilterType_MAX");
        })(g || (g = {})),
        (function (e) {
          (e[(e.k_EMarketingMessageTemplate_Unknown = 0)] =
            "k_EMarketingMessageTemplate_Unknown"),
            (e[(e.k_EMarketingMessageTemplate_Image = 1)] =
              "k_EMarketingMessageTemplate_Image"),
            (e[(e.k_EMarketingMessageTemplate_Animated = 2)] =
              "k_EMarketingMessageTemplate_Animated"),
            (e[(e.k_EMarketingMessageTemplate_Featured_Video = 3)] =
              "k_EMarketingMessageTemplate_Featured_Video"),
            (e[(e.k_EMarketingMessageTemplate_DLC_Override = 4)] =
              "k_EMarketingMessageTemplate_DLC_Override"),
            (e[(e.k_EMarketingMessageTemplate_Replay = 5)] =
              "k_EMarketingMessageTemplate_Replay"),
            (e[(e.k_EMarketingMessageTemplate_MAX = 6)] =
              "k_EMarketingMessageTemplate_MAX");
        })(_ || (_ = {}));
      class f extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.gid || s.aR(f.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  gid: {
                    n: 1,
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                  title: { n: 2, br: s.FE.readString, bw: s.Xc.writeString },
                  type: { n: 3, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  visibility: { n: 4, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  priority: { n: 5, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  association_type: {
                    n: 6,
                    br: s.FE.readEnum,
                    bw: s.Xc.writeEnum,
                  },
                  associated_id: {
                    n: 7,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  associated_name: {
                    n: 8,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  start_date: {
                    n: 9,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  end_date: {
                    n: 10,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  country_allow: {
                    n: 11,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  country_deny: {
                    n: 12,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  ownership_restrictions_overridden: {
                    n: 13,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  must_own_appid: {
                    n: 14,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  must_not_own_appid: {
                    n: 15,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  must_own_packageid: {
                    n: 16,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  must_not_own_packageid: {
                    n: 17,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  must_have_launched_appid: {
                    n: 18,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  additional_restrictions: {
                    n: 19,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  template_type: {
                    n: 20,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  template_vars: {
                    n: 21,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  flags: { n: 22, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  creator_name: {
                    n: 23,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  template_vars_json: {
                    n: 24,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  additional_restrictions_json: {
                    n: 25,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = s.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessageProto";
        }
      }
      class y extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.gid || s.aR(y.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  gid: {
                    n: 1,
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                  title: { n: 2, br: s.FE.readString, bw: s.Xc.writeString },
                  type: { n: 3, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  associated_item_id: { n: 4, c: n.oY },
                  associated_item: { n: 5, c: n.VL },
                  associated_name: {
                    n: 6,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  template_type: {
                    n: 10,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  template_vars_json: {
                    n: 11,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = s.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDisplayMarketingMessage";
        }
      }
      class B extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.country || s.aR(B.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  country: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  anonymous_user: {
                    n: 2,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = s.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetActiveMarketingMessages_Request";
        }
      }
      class h extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.messages || s.aR(h.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  messages: { n: 1, c: f, r: !0, q: !0 },
                  time_next_message_age: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetActiveMarketingMessages_Response";
        }
      }
      class p extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.include_seen_messages || s.aR(p.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  include_seen_messages: {
                    n: 1,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  country_code: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  elanguage: { n: 3, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  operating_system: {
                    n: 4,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  client_package_version: {
                    n: 5,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  context: { n: 6, c: n.WJ },
                  data_request: { n: 7, c: n.Qn },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = s.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Request";
        }
      }
      class b extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.messages || s.aR(b.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { messages: { n: 1, c: w, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = s.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Response";
        }
      }
      class w extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.already_seen || s.aR(w.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  already_seen: { n: 1, br: s.FE.readBool, bw: s.Xc.writeBool },
                  message: { n: 2, c: y },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = s.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser";
        }
      }
      class k extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.country_code || s.aR(k.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  country_code: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  elanguage: { n: 3, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  operating_system: {
                    n: 4,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  client_package_version: {
                    n: 5,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = s.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Request";
        }
      }
      class F extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.has_pending_messages || s.aR(F.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  has_pending_messages: {
                    n: 1,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  pending_message_count: {
                    n: 2,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = s.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Response";
        }
      }
      class R extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.gid || s.aR(R.M()),
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
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                  context: { n: 2, c: n.WJ },
                  data_request: { n: 3, c: n.Qn },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = s.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetDisplayMarketingMessage_Request";
        }
      }
      class S extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.message || s.aR(S.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = { proto: S, fields: { message: { n: 1, c: y } } }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = s.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetDisplayMarketingMessage_Response";
        }
      }
      class z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.gid || s.aR(z.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  gid: {
                    n: 1,
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                  display_index: {
                    n: 2,
                    d: 0,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  template_type: {
                    n: 3,
                    d: _.k_EMarketingMessageTemplate_Unknown,
                    br: s.FE.readEnum,
                    bw: s.Xc.writeEnum,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = s.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_MarkMessageSeen_Notification";
        }
      }
      class E extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.gid || s.aR(E.M()),
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
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = s.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessage_Request";
        }
      }
      class v extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.message || s.aR(v.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = { proto: v, fields: { message: { n: 1, c: f } } }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = s.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessage_Response";
        }
      }
      class T extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.lookup_type || s.aR(T.M()),
            o.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  lookup_type: { n: 1, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  gid: {
                    n: 2,
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                  message_type: { n: 3, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  gidlist: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: s.FE.readFixed64String,
                    pbr: s.FE.readPackedFixed64String,
                    bw: s.Xc.writeRepeatedFixed64String,
                  },
                  title: { n: 5, br: s.FE.readString, bw: s.Xc.writeString },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = s.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_FindMarketingMessages_Request";
        }
      }
      class O extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.messages || s.aR(O.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { messages: { n: 1, c: f, r: !0, q: !0 } },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = s.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_FindMarketingMessages_Response";
        }
      }
      class W extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.message || s.aR(W.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  message: { n: 1, c: f },
                  from_json: { n: 2, br: s.FE.readBool, bw: s.Xc.writeBool },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = s.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_CreateMarketingMessage_Request";
        }
      }
      class j extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.gid || s.aR(j.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  gid: {
                    n: 1,
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = s.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_CreateMarketingMessage_Response";
        }
      }
      class I extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.gid || s.aR(I.M()),
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
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                  message: { n: 2, c: f },
                  from_json: { n: 3, br: s.FE.readBool, bw: s.Xc.writeBool },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = s.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_UpdateMarketingMessage_Request";
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
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_UpdateMarketingMessage_Response";
        }
      }
      class D extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.gid || s.aR(D.M()),
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
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = s.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DeleteMarketingMessage_Request";
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
          return "CMarketingMessages_DeleteMarketingMessage_Response";
        }
      }
      class x extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.gid || s.aR(x.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  gid: {
                    n: 1,
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = s.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessageViewerStats_Request";
        }
      }
      class X extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.rt_time_hour || s.aR(X.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  rt_time_hour: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  seen_count: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  template_type: {
                    n: 3,
                    br: s.FE.readEnum,
                    bw: s.Xc.writeEnum,
                  },
                  display_index: {
                    n: 4,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = s.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(X.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessageHourlyStats";
        }
      }
      class U extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.stats || s.aR(U.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: { stats: { n: 1, c: X, r: !0, q: !0 } },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = s.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessageViewerStats_Response";
        }
      }
      class P extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.rt_start_time || s.aR(P.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  rt_start_time: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  rt_end_time: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = s.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(P.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request";
        }
      }
      class N extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.stats || s.aR(N.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: { stats: { n: 1, c: X, r: !0, q: !0 } },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = s.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response";
        }
      }
      !(function (e) {
        (e.GetActiveMarketingMessages = function (e, t) {
          return e.SendMsg(
            "MarketingMessages.GetActiveMarketingMessages#1",
            (0, a.MD)(B, t),
            h,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetMarketingMessagesForUser = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessagesForUser#1",
              (0, a.MD)(p, t),
              b,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.DoesUserHavePendingMarketingMessages = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.DoesUserHavePendingMarketingMessages#1",
              (0, a.MD)(k, t),
              F,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetDisplayMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessage#1",
              (0, a.MD)(R, t),
              S,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetDisplayMarketingMessageForUser = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessageForUser#1",
              (0, a.MD)(R, t),
              S,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetDisplayMarketingMessageAdmin = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessageAdmin#1",
              (0, a.MD)(R, t),
              S,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.MarkMessageSeen = function (e, t) {
            return e.SendNotification(
              "MarketingMessages.MarkMessageSeen#1",
              (0, a.MD)(z, t),
              { ePrivilege: 1 },
            );
          }),
          (e.GetMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessage#1",
              (0, a.MD)(E, t),
              v,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.CreateMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.CreateMarketingMessage#1",
              (0, a.MD)(W, t),
              j,
              { ePrivilege: 4 },
            );
          }),
          (e.UpdateMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.UpdateMarketingMessage#1",
              (0, a.MD)(I, t),
              C,
              { ePrivilege: 4 },
            );
          }),
          (e.DeleteMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.DeleteMarketingMessage#1",
              (0, a.MD)(D, t),
              A,
              { ePrivilege: 4 },
            );
          }),
          (e.FindMarketingMessages = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.FindMarketingMessages#1",
              (0, a.MD)(T, t),
              O,
              { ePrivilege: 4 },
            );
          }),
          (e.GetMarketingMessageViewerStats = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessageViewerStats#1",
              (0, a.MD)(x, t),
              U,
              { ePrivilege: 4 },
            );
          }),
          (e.GetMarketingMessagesViewerRangeStats = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessagesViewerRangeStats#1",
              (0, a.MD)(P, t),
              N,
              { ePrivilege: 4 },
            );
          });
      })(M || (M = {}));
    },
    5083: (e, t, r) => {
      "use strict";
      r.d(t, { n: () => u, z: () => l });
      var i = r(45878),
        s = r(43898),
        a = r(67328),
        n = r(68562);
      const o = i.Message;
      class l extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.request || s.aR(l.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  request: { n: 1, c: n.eK },
                  include_unpublished: {
                    n: 2,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerStoreBrowse_GetItems_Request";
        }
      }
      var u;
      !(function (e) {
        e.GetItems = function (e, t) {
          return e.SendMsg(
            "PartnerStoreBrowse.GetItems#1",
            (0, a.MD)(l, t),
            n.cR,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        };
      })(u || (u = {}));
    },
    66262: (e, t, r) => {
      "use strict";
      var i = r(45878),
        s = r(43898),
        a = r(67328),
        n = r(93067),
        o = r(68562);
      const l = i.Message;
      var u, c;
      !(function (e) {
        (e[(e.k_EStoreQuerySort_Relevance = 0)] =
          "k_EStoreQuerySort_Relevance"),
          (e[(e.k_EStoreQuerySort_Name = 1)] = "k_EStoreQuerySort_Name"),
          (e[(e.k_EStoreQuerySort_TypeID = 2)] = "k_EStoreQuerySort_TypeID"),
          (e[(e.k_EStoreQuerySort_Regional24hSalesRank = 10)] =
            "k_EStoreQuerySort_Regional24hSalesRank"),
          (e[(e.k_EStoreQuerySort_Global24hSalesRank = 11)] =
            "k_EStoreQuerySort_Global24hSalesRank"),
          (e[(e.k_EStoreQuerySort_RegionalLongTermSalesRank = 12)] =
            "k_EStoreQuerySort_RegionalLongTermSalesRank"),
          (e[(e.k_EStoreQuerySort_GlobalLongTermSalesRank = 13)] =
            "k_EStoreQuerySort_GlobalLongTermSalesRank"),
          (e[(e.k_EStoreQuerySort_WishlistActivityRank = 20)] =
            "k_EStoreQuerySort_WishlistActivityRank"),
          (e[(e.k_EStoreQuerySort_UserReviewScore = 21)] =
            "k_EStoreQuerySort_UserReviewScore"),
          (e[(e.k_EStoreQuerySort_UserReviewScoreAscending = 22)] =
            "k_EStoreQuerySort_UserReviewScoreAscending"),
          (e[(e.k_EStoreQuerySort_DailyActiveUserRank = 30)] =
            "k_EStoreQuerySort_DailyActiveUserRank"),
          (e[(e.k_EStoreQuerySort_VRDailyActiveUserRank = 31)] =
            "k_EStoreQuerySort_VRDailyActiveUserRank"),
          (e[(e.k_EStoreQuerySort_ConcurrentPlayers = 32)] =
            "k_EStoreQuerySort_ConcurrentPlayers"),
          (e[(e.k_EStoreQuerySort_ReleaseDate = 40)] =
            "k_EStoreQuerySort_ReleaseDate"),
          (e[(e.k_EStoreQuerySort_ReleaseDateAscending = 41)] =
            "k_EStoreQuerySort_ReleaseDateAscending");
      })(u || (u = {}));
      class d extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.released_only || s.aR(d.M()),
            l.initialize(this, e, 0, -1, [10, 11, 15, 16, 45], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  released_only: {
                    n: 1,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  coming_soon_only: {
                    n: 2,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  type_filters: { n: 3, c: m },
                  tagids_must_match: { n: 10, c: g, r: !0, q: !0 },
                  tagids_exclude: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: s.FE.readInt32,
                    pbr: s.FE.readPackedInt32,
                    bw: s.Xc.writeRepeatedInt32,
                  },
                  content_descriptors_must_match: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: s.FE.readEnum,
                    pbr: s.FE.readPackedEnum,
                    bw: s.Xc.writeRepeatedEnum,
                  },
                  content_descriptors_excluded: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: s.FE.readEnum,
                    pbr: s.FE.readPackedEnum,
                    bw: s.Xc.writeRepeatedEnum,
                  },
                  regional_top_n_sellers: {
                    n: 40,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  global_top_n_sellers: {
                    n: 41,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  regional_long_term_top_n_sellers: {
                    n: 42,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  global_long_term_top_n_sellers: {
                    n: 43,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  store_page_filter: { n: 44, c: n._v },
                  parent_appids: {
                    n: 45,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters";
        }
      }
      class m extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.include_apps || s.aR(m.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  include_apps: { n: 1, br: s.FE.readBool, bw: s.Xc.writeBool },
                  include_packages: {
                    n: 2,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_bundles: {
                    n: 3,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_games: {
                    n: 10,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_demos: {
                    n: 11,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_mods: {
                    n: 12,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_dlc: { n: 13, br: s.FE.readBool, bw: s.Xc.writeBool },
                  include_software: {
                    n: 14,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_video: {
                    n: 15,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_hardware: {
                    n: 16,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_series: {
                    n: 17,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_music: {
                    n: 18,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters_TypeFilters";
        }
      }
      class g extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.tagids || s.aR(g.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  tagids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: s.FE.readInt32,
                    pbr: s.FE.readPackedInt32,
                    bw: s.Xc.writeRepeatedInt32,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = s.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters_TagFilter";
        }
      }
      class _ extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.start || s.aR(_.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  start: {
                    n: 1,
                    d: 0,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  count: {
                    n: 2,
                    d: 10,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  sort: {
                    n: 10,
                    d: u.k_EStoreQuerySort_Relevance,
                    br: s.FE.readEnum,
                    bw: s.Xc.writeEnum,
                  },
                  filters: { n: 20, c: d },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryParams";
        }
      }
      class M extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.id || s.aR(M.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  id: { n: 1, c: o.oY },
                  score: { n: 2, br: s.FE.readDouble, bw: s.Xc.writeDouble },
                  spellcheck_generated_result: {
                    n: 3,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = s.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryPerResultMetadata";
        }
      }
      class f extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.total_matching_records || s.aR(f.M()),
            l.initialize(this, e, 0, -1, [4, 5], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  total_matching_records: {
                    n: 1,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  start: { n: 2, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  count: { n: 3, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  per_result_metadata: { n: 4, c: M, r: !0, q: !0 },
                  spellcheck_suggestions: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: s.FE.readString,
                    bw: s.Xc.writeRepeatedString,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = s.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryResultMetadata";
        }
      }
      class y extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.query_name || s.aR(y.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  query_name: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  query: { n: 2, c: _ },
                  context: { n: 3, c: o.WJ },
                  data_request: { n: 4, c: o.Qn },
                  override_country_code: {
                    n: 5,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = s.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_Query_Request";
        }
      }
      class B extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.metadata || s.aR(B.M()),
            l.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  metadata: { n: 1, c: f },
                  ids: { n: 2, c: o.oY, r: !0, q: !0 },
                  store_items: { n: 3, c: o.VL, r: !0, q: !0 },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = s.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_Query_Response";
        }
      }
      class h extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.query_name || s.aR(h.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  query_name: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  context: { n: 2, c: o.WJ },
                  search_term: {
                    n: 3,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  max_results: {
                    n: 4,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  filters: { n: 5, c: d },
                  data_request: { n: 6, c: o.Qn },
                  use_spellcheck: {
                    n: 7,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  search_tags: { n: 8, br: s.FE.readBool, bw: s.Xc.writeBool },
                  search_creators: {
                    n: 9,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  prefilter_creators: {
                    n: 10,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_SearchSuggestions_Request";
        }
      }
      class p extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.metadata || s.aR(p.M()),
            l.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  metadata: { n: 1, c: f },
                  ids: { n: 2, c: o.oY, r: !0, q: !0 },
                  store_items: { n: 3, c: o.VL, r: !0, q: !0 },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = s.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_SearchSuggestions_Response";
        }
      }
      !(function (e) {
        (e.Query = function (e, t) {
          return e.SendMsg("StoreQuery.Query#1", (0, a.MD)(y, t), B, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.SearchSuggestions = function (e, t) {
            return e.SendMsg(
              "StoreQuery.SearchSuggestions#1",
              (0, a.MD)(h, t),
              p,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(c || (c = {}));
    },
  },
]);
