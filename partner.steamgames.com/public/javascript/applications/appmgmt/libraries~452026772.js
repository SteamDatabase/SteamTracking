/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [2255],
  {
    40323: function (e, t) {
      var r, i, n;
      (i = []),
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
            i = t.IS_PAPA_WORKER || !1,
            n = {},
            s = 0,
            a = {
              parse: function (r, i) {
                var o = (i = i || {}).dynamicTyping || !1;
                if (
                  (k(o) && ((i.dynamicTypingFunction = o), (o = {})),
                  (i.dynamicTyping = o),
                  (i.transform = !!k(i.transform) && i.transform),
                  i.worker && a.WORKERS_SUPPORTED)
                ) {
                  var u = (function () {
                    if (!a.WORKERS_SUPPORTED) return !1;
                    var r,
                      i,
                      o =
                        ((r = t.URL || t.webkitURL || null),
                        (i = e.toString()),
                        a.BLOB_URL ||
                          (a.BLOB_URL = r.createObjectURL(
                            new Blob(
                              [
                                "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                                "(",
                                i,
                                ")();",
                              ],
                              { type: "text/javascript" },
                            ),
                          ))),
                      u = new t.Worker(o);
                    return (u.onmessage = g), (u.id = s++), (n[u.id] = u);
                  })();
                  return (
                    (u.userStep = i.step),
                    (u.userChunk = i.chunk),
                    (u.userComplete = i.complete),
                    (u.userError = i.error),
                    (i.step = k(i.step)),
                    (i.chunk = k(i.chunk)),
                    (i.complete = k(i.complete)),
                    (i.error = k(i.error)),
                    delete i.worker,
                    void u.postMessage({ input: r, config: i, workerId: u.id })
                  );
                }
                var c = null;
                return (
                  a.NODE_STREAM_INPUT,
                  "string" == typeof r
                    ? ((r = (function (e) {
                        return 65279 === e.charCodeAt(0) ? e.slice(1) : e;
                      })(r)),
                      (c = i.download ? new h(i) : new l(i)))
                    : !0 === r.readable && k(r.read) && k(r.on)
                      ? (c = new d(i))
                      : ((t.File && r instanceof File) ||
                          r instanceof Object) &&
                        (c = new f(i)),
                  c.stream(r)
                );
              },
              unparse: function (e, t) {
                var r = !1,
                  i = !0,
                  n = ",",
                  s = "\r\n",
                  o = '"',
                  u = o + o,
                  h = !1,
                  f = null,
                  l = !1;
                !(function () {
                  if ("object" == typeof t) {
                    if (
                      ("string" != typeof t.delimiter ||
                        a.BAD_DELIMITERS.filter(function (e) {
                          return -1 !== t.delimiter.indexOf(e);
                        }).length ||
                        (n = t.delimiter),
                      ("boolean" == typeof t.quotes ||
                        "function" == typeof t.quotes ||
                        Array.isArray(t.quotes)) &&
                        (r = t.quotes),
                      ("boolean" != typeof t.skipEmptyLines &&
                        "string" != typeof t.skipEmptyLines) ||
                        (h = t.skipEmptyLines),
                      "string" == typeof t.newline && (s = t.newline),
                      "string" == typeof t.quoteChar && (o = t.quoteChar),
                      "boolean" == typeof t.header && (i = t.header),
                      Array.isArray(t.columns))
                    ) {
                      if (0 === t.columns.length)
                        throw new Error("Option columns is empty");
                      f = t.columns;
                    }
                    void 0 !== t.escapeChar && (u = t.escapeChar + o),
                      ("boolean" == typeof t.escapeFormulae ||
                        t.escapeFormulae instanceof RegExp) &&
                        (l =
                          t.escapeFormulae instanceof RegExp
                            ? t.escapeFormulae
                            : /^[=+\-@\t\r].*$/);
                  }
                })();
                var d = new RegExp(p(o), "g");
                if (
                  ("string" == typeof e && (e = JSON.parse(e)),
                  Array.isArray(e))
                ) {
                  if (!e.length || Array.isArray(e[0])) return c(null, e, h);
                  if ("object" == typeof e[0])
                    return c(f || Object.keys(e[0]), e, h);
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
                    c(e.fields || [], e.data || [], h)
                  );
                throw new Error("Unable to serialize unrecognized input");
                function c(e, t, r) {
                  var a = "";
                  "string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t));
                  var o = Array.isArray(e) && 0 < e.length,
                    u = !Array.isArray(t[0]);
                  if (o && i) {
                    for (var h = 0; h < e.length; h++)
                      0 < h && (a += n), (a += m(e[h], h));
                    0 < t.length && (a += s);
                  }
                  for (var f = 0; f < t.length; f++) {
                    var l = o ? e.length : t[f].length,
                      d = !1,
                      c = o
                        ? 0 === Object.keys(t[f]).length
                        : 0 === t[f].length;
                    if (
                      (r &&
                        !o &&
                        (d =
                          "greedy" === r
                            ? "" === t[f].join("").trim()
                            : 1 === t[f].length && 0 === t[f][0].length),
                      "greedy" === r && o)
                    ) {
                      for (var p = [], g = 0; g < l; g++) {
                        var _ = u ? e[g] : g;
                        p.push(t[f][_]);
                      }
                      d = "" === p.join("").trim();
                    }
                    if (!d) {
                      for (var y = 0; y < l; y++) {
                        0 < y && !c && (a += n);
                        var v = o && u ? e[y] : y;
                        a += m(t[f][v], y);
                      }
                      f < t.length - 1 && (!r || (0 < l && !c)) && (a += s);
                    }
                  }
                  return a;
                }
                function m(e, t) {
                  if (null == e) return "";
                  if (e.constructor === Date)
                    return JSON.stringify(e).slice(1, 25);
                  var i = !1;
                  l &&
                    "string" == typeof e &&
                    l.test(e) &&
                    ((e = "'" + e), (i = !0));
                  var s = e.toString().replace(d, u);
                  return (i =
                    i ||
                    !0 === r ||
                    ("function" == typeof r && r(e, t)) ||
                    (Array.isArray(r) && r[t]) ||
                    (function (e, t) {
                      for (var r = 0; r < t.length; r++)
                        if (-1 < e.indexOf(t[r])) return !0;
                      return !1;
                    })(s, a.BAD_DELIMITERS) ||
                    -1 < s.indexOf(n) ||
                    " " === s.charAt(0) ||
                    " " === s.charAt(s.length - 1))
                    ? o + s + o
                    : s;
                }
              },
            };
          if (
            ((a.RECORD_SEP = String.fromCharCode(30)),
            (a.UNIT_SEP = String.fromCharCode(31)),
            (a.BYTE_ORDER_MARK = "\ufeff"),
            (a.BAD_DELIMITERS = ["\r", "\n", '"', a.BYTE_ORDER_MARK]),
            (a.WORKERS_SUPPORTED = !r && !!t.Worker),
            (a.NODE_STREAM_INPUT = 1),
            (a.LocalChunkSize = 10485760),
            (a.RemoteChunkSize = 5242880),
            (a.DefaultDelimiter = ","),
            (a.Parser = m),
            (a.ParserHandle = c),
            (a.NetworkStreamer = h),
            (a.FileStreamer = f),
            (a.StringStreamer = l),
            (a.ReadableStreamStreamer = d),
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
                  for (var n = 0; n < this.files.length; n++)
                    i.push({
                      file: this.files[n],
                      inputElem: this,
                      instanceConfig: o.extend({}, r),
                    });
                }),
                n(),
                this
              );
              function n() {
                if (0 !== i.length) {
                  var t,
                    r,
                    n,
                    u,
                    h = i[0];
                  if (k(e.before)) {
                    var f = e.before(h.file, h.inputElem);
                    if ("object" == typeof f) {
                      if ("abort" === f.action)
                        return (
                          (t = "AbortError"),
                          (r = h.file),
                          (n = h.inputElem),
                          (u = f.reason),
                          void (k(e.error) && e.error({ name: t }, r, n, u))
                        );
                      if ("skip" === f.action) return void s();
                      "object" == typeof f.config &&
                        (h.instanceConfig = o.extend(
                          h.instanceConfig,
                          f.config,
                        ));
                    } else if ("skip" === f) return void s();
                  }
                  var l = h.instanceConfig.complete;
                  (h.instanceConfig.complete = function (e) {
                    k(l) && l(e, h.file, h.inputElem), s();
                  }),
                    a.parse(h.file, h.instanceConfig);
                } else k(e.complete) && e.complete();
              }
              function s() {
                i.splice(0, 1), n();
              }
            };
          }
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
                var t = v(e);
                (t.chunkSize = parseInt(t.chunkSize)),
                  e.step || e.chunk || (t.chunkSize = null),
                  (this._handle = new c(t)),
                  ((this._handle.streamer = this)._config = t);
              }.call(this, e),
              (this.parseChunk = function (e, r) {
                if (this.isFirstChunk && k(this._config.beforeFirstChunk)) {
                  var n = this._config.beforeFirstChunk(e);
                  void 0 !== n && (e = n);
                }
                (this.isFirstChunk = !1), (this._halted = !1);
                var s = this._partialLine + e;
                this._partialLine = "";
                var o = this._handle.parse(s, this._baseIndex, !this._finished);
                if (!this._handle.paused() && !this._handle.aborted()) {
                  var u = o.meta.cursor;
                  this._finished ||
                    ((this._partialLine = s.substring(u - this._baseIndex)),
                    (this._baseIndex = u)),
                    o && o.data && (this._rowCount += o.data.length);
                  var h =
                    this._finished ||
                    (this._config.preview &&
                      this._rowCount >= this._config.preview);
                  if (i)
                    t.postMessage({
                      results: o,
                      workerId: a.WORKER_ID,
                      finished: h,
                    });
                  else if (k(this._config.chunk) && !r) {
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
                      !h ||
                      !k(this._config.complete) ||
                      (o && o.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    h || (o && o.meta.paused) || this._nextChunk(),
                    o
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                k(this._config.error)
                  ? this._config.error(e)
                  : i &&
                    this._config.error &&
                    t.postMessage({
                      workerId: a.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function h(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = a.RemoteChunkSize),
              u.call(this, e),
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
                      ((t.onload = b(this._chunkLoaded, this)),
                      (t.onerror = b(this._chunkError, this))),
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
                    var n = this._start + this._config.chunkSize - 1;
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + n,
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
          function f(e) {
            var t, r;
            (e = e || {}).chunkSize || (e.chunkSize = a.LocalChunkSize),
              u.call(this, e);
            var i = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (r = e.slice || e.webkitSlice || e.mozSlice),
                i
                  ? (((t = new FileReader()).onload = b(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = b(this._chunkError, this)))
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
                  var n = Math.min(
                    this._start + this._config.chunkSize,
                    this._input.size,
                  );
                  e = r.call(e, this._start, n);
                }
                var s = t.readAsText(e, this._config.encoding);
                i || this._chunkLoaded({ target: { result: s } });
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
          function l(e) {
            var t;
            u.call(this, (e = e || {})),
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
          function d(e) {
            u.call(this, (e = e || {}));
            var t = [],
              r = !0,
              i = !1;
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
                i && 1 === t.length && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (r = !0);
              }),
              (this._streamData = b(function (e) {
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
              (this._streamError = b(function (e) {
                this._streamCleanUp(), this._sendError(e);
              }, this)),
              (this._streamEnd = b(function () {
                this._streamCleanUp(), (i = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = b(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function c(e) {
            var t,
              r,
              i,
              n = Math.pow(2, 53),
              s = -n,
              o = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              u =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              h = this,
              f = 0,
              l = 0,
              d = !1,
              c = !1,
              g = [],
              _ = { data: [], errors: [], meta: {} };
            if (k(e.step)) {
              var y = e.step;
              e.step = function (t) {
                if (((_ = t), w())) E();
                else {
                  if ((E(), 0 === _.data.length)) return;
                  (f += t.data.length),
                    e.preview && f > e.preview
                      ? r.abort()
                      : ((_.data = _.data[0]), y(_, h));
                }
              };
            }
            function b(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function E() {
              return (
                _ &&
                  i &&
                  (C(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      a.DefaultDelimiter +
                      "'",
                  ),
                  (i = !1)),
                e.skipEmptyLines &&
                  (_.data = _.data.filter(function (e) {
                    return !b(e);
                  })),
                w() &&
                  (function () {
                    if (_)
                      if (Array.isArray(_.data[0])) {
                        for (var t = 0; w() && t < _.data.length; t++)
                          _.data[t].forEach(r);
                        _.data.splice(0, 1);
                      } else _.data.forEach(r);
                    function r(t, r) {
                      k(e.transformHeader) && (t = e.transformHeader(t, r)),
                        g.push(t);
                    }
                  })(),
                (function () {
                  if (!_ || (!e.header && !e.dynamicTyping && !e.transform))
                    return _;
                  function t(t, r) {
                    var i,
                      n = e.header ? {} : [];
                    for (i = 0; i < t.length; i++) {
                      var s = i,
                        a = t[i];
                      e.header && (s = i >= g.length ? "__parsed_extra" : g[i]),
                        e.transform && (a = e.transform(a, s)),
                        (a = R(s, a)),
                        "__parsed_extra" === s
                          ? ((n[s] = n[s] || []), n[s].push(a))
                          : (n[s] = a);
                    }
                    return (
                      e.header &&
                        (i > g.length
                          ? C(
                              "FieldMismatch",
                              "TooManyFields",
                              "Too many fields: expected " +
                                g.length +
                                " fields but parsed " +
                                i,
                              l + r,
                            )
                          : i < g.length &&
                            C(
                              "FieldMismatch",
                              "TooFewFields",
                              "Too few fields: expected " +
                                g.length +
                                " fields but parsed " +
                                i,
                              l + r,
                            )),
                      n
                    );
                  }
                  var r = 1;
                  return (
                    !_.data.length || Array.isArray(_.data[0])
                      ? ((_.data = _.data.map(t)), (r = _.data.length))
                      : (_.data = t(_.data, 0)),
                    e.header && _.meta && (_.meta.fields = g),
                    (l += r),
                    _
                  );
                })()
              );
            }
            function w() {
              return e.header && 0 === g.length;
            }
            function R(t, r) {
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
                          if (s < t && t < n) return !0;
                        }
                        return !1;
                      })(r)
                        ? parseFloat(r)
                        : u.test(r)
                          ? new Date(r)
                          : "" === r
                            ? null
                            : r))
                  : r
              );
              var i;
            }
            function C(e, t, r, i) {
              var n = { type: e, code: t, message: r };
              void 0 !== i && (n.row = i), _.errors.push(n);
            }
            (this.parse = function (n, s, o) {
              var u = e.quoteChar || '"';
              if (
                (e.newline ||
                  (e.newline = (function (e, t) {
                    e = e.substring(0, 1048576);
                    var r = new RegExp(p(t) + "([^]*?)" + p(t), "gm"),
                      i = (e = e.replace(r, "")).split("\r"),
                      n = e.split("\n"),
                      s = 1 < n.length && n[0].length < i[0].length;
                    if (1 === i.length || s) return "\n";
                    for (var a = 0, o = 0; o < i.length; o++)
                      "\n" === i[o][0] && a++;
                    return a >= i.length / 2 ? "\r\n" : "\r";
                  })(n, u)),
                (i = !1),
                e.delimiter)
              )
                k(e.delimiter) &&
                  ((e.delimiter = e.delimiter(n)),
                  (_.meta.delimiter = e.delimiter));
              else {
                var h = (function (t, r, i, n, s) {
                  var o, u, h, f;
                  s = s || [",", "\t", "|", ";", a.RECORD_SEP, a.UNIT_SEP];
                  for (var l = 0; l < s.length; l++) {
                    var d = s[l],
                      c = 0,
                      p = 0,
                      g = 0;
                    h = void 0;
                    for (
                      var _ = new m({
                          comments: n,
                          delimiter: d,
                          newline: r,
                          preview: 10,
                        }).parse(t),
                        y = 0;
                      y < _.data.length;
                      y++
                    )
                      if (i && b(_.data[y])) g++;
                      else {
                        var v = _.data[y].length;
                        (p += v),
                          void 0 !== h
                            ? 0 < v && ((c += Math.abs(v - h)), (h = v))
                            : (h = v);
                      }
                    0 < _.data.length && (p /= _.data.length - g),
                      (void 0 === u || c <= u) &&
                        (void 0 === f || f < p) &&
                        1.99 < p &&
                        ((u = c), (o = d), (f = p));
                  }
                  return { successful: !!(e.delimiter = o), bestDelimiter: o };
                })(
                  n,
                  e.newline,
                  e.skipEmptyLines,
                  e.comments,
                  e.delimitersToGuess,
                );
                h.successful
                  ? (e.delimiter = h.bestDelimiter)
                  : ((i = !0), (e.delimiter = a.DefaultDelimiter)),
                  (_.meta.delimiter = e.delimiter);
              }
              var f = v(e);
              return (
                e.preview && e.header && f.preview++,
                (t = n),
                (r = new m(f)),
                (_ = r.parse(t, s, o)),
                E(),
                d ? { meta: { paused: !0 } } : _ || { meta: { paused: !1 } }
              );
            }),
              (this.paused = function () {
                return d;
              }),
              (this.pause = function () {
                (d = !0),
                  r.abort(),
                  (t = k(e.chunk) ? "" : t.substring(r.getCharIndex()));
              }),
              (this.resume = function () {
                h.streamer._halted
                  ? ((d = !1), h.streamer.parseChunk(t, !0))
                  : setTimeout(h.resume, 3);
              }),
              (this.aborted = function () {
                return c;
              }),
              (this.abort = function () {
                (c = !0),
                  r.abort(),
                  (_.meta.aborted = !0),
                  k(e.complete) && e.complete(_),
                  (t = "");
              });
          }
          function p(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function m(e) {
            var t,
              r = (e = e || {}).delimiter,
              i = e.newline,
              n = e.comments,
              s = e.step,
              o = e.preview,
              u = e.fastMode,
              h = (t =
                void 0 === e.quoteChar || null === e.quoteChar
                  ? '"'
                  : e.quoteChar);
            if (
              (void 0 !== e.escapeChar && (h = e.escapeChar),
              ("string" != typeof r || -1 < a.BAD_DELIMITERS.indexOf(r)) &&
                (r = ","),
              n === r)
            )
              throw new Error("Comment character same as delimiter");
            !0 === n
              ? (n = "#")
              : ("string" != typeof n || -1 < a.BAD_DELIMITERS.indexOf(n)) &&
                (n = !1),
              "\n" !== i && "\r" !== i && "\r\n" !== i && (i = "\n");
            var f = 0,
              l = !1;
            (this.parse = function (a, d, c) {
              if ("string" != typeof a)
                throw new Error("Input must be a string");
              var m = a.length,
                g = r.length,
                _ = i.length,
                y = n.length,
                v = k(s),
                b = [],
                E = [],
                w = [],
                R = (f = 0);
              if (!a) return W();
              if (e.header && !d) {
                var C = a.split(i)[0].split(r),
                  O = [],
                  S = {},
                  x = !1;
                for (var I in C) {
                  var A = C[I];
                  k(e.transformHeader) && (A = e.transformHeader(A, I));
                  var T = A,
                    D = S[A] || 0;
                  for (
                    0 < D && ((x = !0), (T = A + "_" + D)), S[A] = D + 1;
                    O.includes(T);
                  )
                    T = T + "_" + D;
                  O.push(T);
                }
                if (x) {
                  var L = a.split(i);
                  (L[0] = O.join(r)), (a = L.join(i));
                }
              }
              if (u || (!1 !== u && -1 === a.indexOf(t))) {
                for (var q = a.split(i), F = 0; F < q.length; F++) {
                  if (((w = q[F]), (f += w.length), F !== q.length - 1))
                    f += i.length;
                  else if (c) return W();
                  if (!n || w.substring(0, y) !== n) {
                    if (v) {
                      if (((b = []), H(w.split(r)), $(), l)) return W();
                    } else H(w.split(r));
                    if (o && o <= F) return (b = b.slice(0, o)), W(!0);
                  }
                }
                return W();
              }
              for (
                var M = a.indexOf(r, f),
                  j = a.indexOf(i, f),
                  z = new RegExp(p(h) + p(t), "g"),
                  U = a.indexOf(t, f);
                ;
              )
                if (a[f] !== t)
                  if (n && 0 === w.length && a.substring(f, f + y) === n) {
                    if (-1 === j) return W();
                    (f = j + _), (j = a.indexOf(i, f)), (M = a.indexOf(r, f));
                  } else if (-1 !== M && (M < j || -1 === j))
                    w.push(a.substring(f, M)),
                      (f = M + g),
                      (M = a.indexOf(r, f));
                  else {
                    if (-1 === j) break;
                    if ((w.push(a.substring(f, j)), K(j + _), v && ($(), l)))
                      return W();
                    if (o && b.length >= o) return W(!0);
                  }
                else
                  for (U = f, f++; ; ) {
                    if (-1 === (U = a.indexOf(t, U + 1)))
                      return (
                        c ||
                          E.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: b.length,
                            index: f,
                          }),
                        N()
                      );
                    if (U === m - 1) return N(a.substring(f, U).replace(z, t));
                    if (t !== h || a[U + 1] !== h) {
                      if (t === h || 0 === U || a[U - 1] !== h) {
                        -1 !== M && M < U + 1 && (M = a.indexOf(r, U + 1)),
                          -1 !== j && j < U + 1 && (j = a.indexOf(i, U + 1));
                        var Q = B(-1 === j ? M : Math.min(M, j));
                        if (a.substr(U + 1 + Q, g) === r) {
                          w.push(a.substring(f, U).replace(z, t)),
                            a[(f = U + 1 + Q + g)] !== t &&
                              (U = a.indexOf(t, f)),
                            (M = a.indexOf(r, f)),
                            (j = a.indexOf(i, f));
                          break;
                        }
                        var P = B(j);
                        if (a.substring(U + 1 + P, U + 1 + P + _) === i) {
                          if (
                            (w.push(a.substring(f, U).replace(z, t)),
                            K(U + 1 + P + _),
                            (M = a.indexOf(r, f)),
                            (U = a.indexOf(t, f)),
                            v && ($(), l))
                          )
                            return W();
                          if (o && b.length >= o) return W(!0);
                          break;
                        }
                        E.push({
                          type: "Quotes",
                          code: "InvalidQuotes",
                          message:
                            "Trailing quote on quoted field is malformed",
                          row: b.length,
                          index: f,
                        }),
                          U++;
                      }
                    } else U++;
                  }
              return N();
              function H(e) {
                b.push(e), (R = f);
              }
              function B(e) {
                var t = 0;
                if (-1 !== e) {
                  var r = a.substring(U + 1, e);
                  r && "" === r.trim() && (t = r.length);
                }
                return t;
              }
              function N(e) {
                return (
                  c ||
                    (void 0 === e && (e = a.substring(f)),
                    w.push(e),
                    (f = m),
                    H(w),
                    v && $()),
                  W()
                );
              }
              function K(e) {
                (f = e), H(w), (w = []), (j = a.indexOf(i, f));
              }
              function W(e) {
                return {
                  data: b,
                  errors: E,
                  meta: {
                    delimiter: r,
                    linebreak: i,
                    aborted: l,
                    truncated: !!e,
                    cursor: R + (d || 0),
                  },
                };
              }
              function $() {
                s(W()), (b = []), (E = []);
              }
            }),
              (this.abort = function () {
                l = !0;
              }),
              (this.getCharIndex = function () {
                return f;
              });
          }
          function g(e) {
            var t = e.data,
              r = n[t.workerId],
              i = !1;
            if (t.error) r.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var s = {
                abort: function () {
                  (i = !0),
                    _(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: y,
                resume: y,
              };
              if (k(r.userStep)) {
                for (
                  var a = 0;
                  a < t.results.data.length &&
                  (r.userStep(
                    {
                      data: t.results.data[a],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    s,
                  ),
                  !i);
                  a++
                );
                delete t.results;
              } else
                k(r.userChunk) &&
                  (r.userChunk(t.results, s, t.file), delete t.results);
            }
            t.finished && !i && _(t.workerId, t.results);
          }
          function _(e, t) {
            var r = n[e];
            k(r.userComplete) && r.userComplete(t), r.terminate(), delete n[e];
          }
          function y() {
            throw new Error("Not implemented.");
          }
          function v(e) {
            if ("object" != typeof e || null === e) return e;
            var t = Array.isArray(e) ? [] : {};
            for (var r in e) t[r] = v(e[r]);
            return t;
          }
          function b(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function k(e) {
            return "function" == typeof e;
          }
          return (
            i &&
              (t.onmessage = function (e) {
                var r = e.data;
                if (
                  (void 0 === a.WORKER_ID && r && (a.WORKER_ID = r.workerId),
                  "string" == typeof r.input)
                )
                  t.postMessage({
                    workerId: a.WORKER_ID,
                    results: a.parse(r.input, r.config),
                    finished: !0,
                  });
                else if (
                  (t.File && r.input instanceof File) ||
                  r.input instanceof Object
                ) {
                  var i = a.parse(r.input, r.config);
                  i &&
                    t.postMessage({
                      workerId: a.WORKER_ID,
                      results: i,
                      finished: !0,
                    });
                }
              }),
            ((h.prototype = Object.create(u.prototype)).constructor = h),
            ((f.prototype = Object.create(u.prototype)).constructor = f),
            ((l.prototype = Object.create(l.prototype)).constructor = l),
            ((d.prototype = Object.create(u.prototype)).constructor = d),
            a
          );
        }),
        void 0 === (n = "function" == typeof r ? r.apply(t, i) : r) ||
          (e.exports = n);
    },
    54806: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => m });
      var i = r(90626),
        n = r(86709),
        s = r(45747),
        a = r(74500),
        o = r(57168);
      function u(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var h = class extends a.Q {
          #e;
          #t;
          #r;
          #i;
          #n;
          #s;
          #a;
          constructor(e, t, r) {
            super(),
              (this.#e = e),
              (this.#r = []),
              (this.#i = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#i.forEach((e) => {
                e.subscribe((t) => {
                  this.#o(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#i.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, r) {
            (this.#r = e),
              n.j.batch(() => {
                const e = this.#i,
                  t = this.#u(this.#r);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, r),
                );
                const i = t.map((e) => e.observer),
                  n = i.map((e) => e.getCurrentResult()),
                  s = i.some((t, r) => t !== e[r]);
                (e.length !== i.length || s) &&
                  ((this.#i = i),
                  (this.#t = n),
                  this.hasListeners() &&
                    (u(e, i).forEach((e) => {
                      e.destroy();
                    }),
                    u(i, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#o(e, t);
                      });
                    }),
                    this.#h()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#i.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#i;
          }
          getOptimisticResult(e, t) {
            const r = this.#u(e),
              i = r.map((e) =>
                e.observer.getOptimisticResult(e.defaultedQueryOptions),
              );
            return [
              i,
              (e) => this.#f(e ?? i, t),
              () =>
                r.map((e, t) => {
                  const n = i[t];
                  return e.defaultedQueryOptions.notifyOnChangeProps
                    ? n
                    : e.observer.trackResult(n, (e) => {
                        r.forEach((t) => {
                          t.observer.trackProp(e);
                        });
                      });
                }),
            ];
          }
          #f(e, t) {
            return t
              ? ((this.#n && this.#t === this.#a && t === this.#s) ||
                  ((this.#s = t),
                  (this.#a = this.#t),
                  (this.#n = (0, o.BH)(this.#n, t(e)))),
                this.#n)
              : e;
          }
          #u(e) {
            const t = this.#i,
              r = new Map(t.map((e) => [e.options.queryHash, e])),
              i = e.map((e) => this.#e.defaultQueryOptions(e)),
              n = i.flatMap((e) => {
                const t = r.get(e.queryHash);
                return null != t
                  ? [{ defaultedQueryOptions: e, observer: t }]
                  : [];
              }),
              a = new Set(n.map((e) => e.defaultedQueryOptions.queryHash)),
              o = i.filter((e) => !a.has(e.queryHash)),
              u = (e) => {
                const t = this.#e.defaultQueryOptions(e);
                return (
                  this.#i.find((e) => e.options.queryHash === t.queryHash) ??
                  new s.$(this.#e, t)
                );
              },
              h = o.map((e) => ({ defaultedQueryOptions: e, observer: u(e) }));
            return n
              .concat(h)
              .sort(
                (e, t) =>
                  i.indexOf(e.defaultedQueryOptions) -
                  i.indexOf(t.defaultedQueryOptions),
              );
          }
          #o(e, t) {
            const r = this.#i.indexOf(e);
            -1 !== r &&
              ((this.#t = (function (e, t, r) {
                const i = e.slice(0);
                return (i[t] = r), i;
              })(this.#t, r, t)),
              this.#h());
          }
          #h() {
            n.j.batch(() => {
              this.listeners.forEach((e) => {
                e(this.#t);
              });
            });
          }
        },
        f = r(75233),
        l = r(22730),
        d = r(43424),
        c = r(19086),
        p = r(44407);
      function m({ queries: e, ...t }, r) {
        const a = (0, f.jE)(r),
          o = (0, l.w)(),
          u = (0, d.h)(),
          m = i.useMemo(
            () =>
              e.map((e) => {
                const t = a.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = o ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, a, o],
          );
        m.forEach((e) => {
          (0, p.tu)(e), (0, c.LJ)(e, u);
        }),
          (0, c.wZ)(u);
        const [g] = i.useState(() => new h(a, m, t)),
          [_, y, v] = g.getOptimisticResult(m, t.combine);
        i.useSyncExternalStore(
          i.useCallback(
            (e) => (o ? () => {} : g.subscribe(n.j.batchCalls(e))),
            [g, o],
          ),
          () => g.getCurrentResult(),
          () => g.getCurrentResult(),
        ),
          i.useEffect(() => {
            g.setQueries(m, t, { listeners: !1 });
          }, [m, t, g]);
        const b = _.some((e, t) => (0, p.EU)(m[t], e))
          ? _.flatMap((e, t) => {
              const r = m[t];
              if (r) {
                const t = new s.$(a, r);
                if ((0, p.EU)(r, e)) return (0, p.iL)(r, t, u);
                (0, p.nE)(e, o) && (0, p.iL)(r, t, u);
              }
              return [];
            })
          : [];
        if (b.length > 0) throw Promise.all(b);
        const k = _.find((e, t) => {
          const r = m[t];
          return (
            r &&
            (0, c.$1)({
              result: e,
              errorResetBoundary: u,
              throwOnError: r.throwOnError,
              query: a.getQueryCache().get(r.queryHash),
            })
          );
        });
        if (k?.error) throw k.error;
        return y(v());
      }
    },
  },
]);
