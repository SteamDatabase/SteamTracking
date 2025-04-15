/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4843],
  {
    40323: function (e, t) {
      var i, r, n;
      (r = []),
        (i = function e() {
          "use strict";
          var t =
              "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                  ? window
                  : void 0 !== t
                    ? t
                    : {},
            i = !t.document && !!t.postMessage,
            r = t.IS_PAPA_WORKER || !1,
            n = {},
            s = 0,
            a = {
              parse: function (i, r) {
                var o = (r = r || {}).dynamicTyping || !1;
                if (
                  (b(o) && ((r.dynamicTypingFunction = o), (o = {})),
                  (r.dynamicTyping = o),
                  (r.transform = !!b(r.transform) && r.transform),
                  r.worker && a.WORKERS_SUPPORTED)
                ) {
                  var h = (function () {
                    if (!a.WORKERS_SUPPORTED) return !1;
                    var i,
                      r,
                      o =
                        ((i = t.URL || t.webkitURL || null),
                        (r = e.toString()),
                        a.BLOB_URL ||
                          (a.BLOB_URL = i.createObjectURL(
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
                      h = new t.Worker(o);
                    return (h.onmessage = g), (h.id = s++), (n[h.id] = h);
                  })();
                  return (
                    (h.userStep = r.step),
                    (h.userChunk = r.chunk),
                    (h.userComplete = r.complete),
                    (h.userError = r.error),
                    (r.step = b(r.step)),
                    (r.chunk = b(r.chunk)),
                    (r.complete = b(r.complete)),
                    (r.error = b(r.error)),
                    delete r.worker,
                    void h.postMessage({ input: i, config: r, workerId: h.id })
                  );
                }
                var c = null;
                return (
                  a.NODE_STREAM_INPUT,
                  "string" == typeof i
                    ? ((i = (function (e) {
                        return 65279 === e.charCodeAt(0) ? e.slice(1) : e;
                      })(i)),
                      (c = r.download ? new u(r) : new d(r)))
                    : !0 === i.readable && b(i.read) && b(i.on)
                      ? (c = new l(r))
                      : ((t.File && i instanceof File) ||
                          i instanceof Object) &&
                        (c = new f(r)),
                  c.stream(i)
                );
              },
              unparse: function (e, t) {
                var i = !1,
                  r = !0,
                  n = ",",
                  s = "\r\n",
                  o = '"',
                  h = o + o,
                  u = !1,
                  f = null,
                  d = !1;
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
                        (i = t.quotes),
                      ("boolean" != typeof t.skipEmptyLines &&
                        "string" != typeof t.skipEmptyLines) ||
                        (u = t.skipEmptyLines),
                      "string" == typeof t.newline && (s = t.newline),
                      "string" == typeof t.quoteChar && (o = t.quoteChar),
                      "boolean" == typeof t.header && (r = t.header),
                      Array.isArray(t.columns))
                    ) {
                      if (0 === t.columns.length)
                        throw new Error("Option columns is empty");
                      f = t.columns;
                    }
                    void 0 !== t.escapeChar && (h = t.escapeChar + o),
                      ("boolean" == typeof t.escapeFormulae ||
                        t.escapeFormulae instanceof RegExp) &&
                        (d =
                          t.escapeFormulae instanceof RegExp
                            ? t.escapeFormulae
                            : /^[=+\-@\t\r].*$/);
                  }
                })();
                var l = new RegExp(p(o), "g");
                if (
                  ("string" == typeof e && (e = JSON.parse(e)),
                  Array.isArray(e))
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
                function c(e, t, i) {
                  var a = "";
                  "string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t));
                  var o = Array.isArray(e) && 0 < e.length,
                    h = !Array.isArray(t[0]);
                  if (o && r) {
                    for (var u = 0; u < e.length; u++)
                      0 < u && (a += n), (a += _(e[u], u));
                    0 < t.length && (a += s);
                  }
                  for (var f = 0; f < t.length; f++) {
                    var d = o ? e.length : t[f].length,
                      l = !1,
                      c = o
                        ? 0 === Object.keys(t[f]).length
                        : 0 === t[f].length;
                    if (
                      (i &&
                        !o &&
                        (l =
                          "greedy" === i
                            ? "" === t[f].join("").trim()
                            : 1 === t[f].length && 0 === t[f][0].length),
                      "greedy" === i && o)
                    ) {
                      for (var p = [], g = 0; g < d; g++) {
                        var m = h ? e[g] : g;
                        p.push(t[f][m]);
                      }
                      l = "" === p.join("").trim();
                    }
                    if (!l) {
                      for (var v = 0; v < d; v++) {
                        0 < v && !c && (a += n);
                        var y = o && h ? e[v] : v;
                        a += _(t[f][y], v);
                      }
                      f < t.length - 1 && (!i || (0 < d && !c)) && (a += s);
                    }
                  }
                  return a;
                }
                function _(e, t) {
                  if (null == e) return "";
                  if (e.constructor === Date)
                    return JSON.stringify(e).slice(1, 25);
                  var r = !1;
                  d &&
                    "string" == typeof e &&
                    d.test(e) &&
                    ((e = "'" + e), (r = !0));
                  var s = e.toString().replace(l, h);
                  return (r =
                    r ||
                    !0 === i ||
                    ("function" == typeof i && i(e, t)) ||
                    (Array.isArray(i) && i[t]) ||
                    (function (e, t) {
                      for (var i = 0; i < t.length; i++)
                        if (-1 < e.indexOf(t[i])) return !0;
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
            (a.WORKERS_SUPPORTED = !i && !!t.Worker),
            (a.NODE_STREAM_INPUT = 1),
            (a.LocalChunkSize = 10485760),
            (a.RemoteChunkSize = 5242880),
            (a.DefaultDelimiter = ","),
            (a.Parser = _),
            (a.ParserHandle = c),
            (a.NetworkStreamer = u),
            (a.FileStreamer = f),
            (a.StringStreamer = d),
            (a.ReadableStreamStreamer = l),
            t.jQuery)
          ) {
            var o = t.jQuery;
            o.fn.parse = function (e) {
              var i = e.config || {},
                r = [];
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
                    r.push({
                      file: this.files[n],
                      inputElem: this,
                      instanceConfig: o.extend({}, i),
                    });
                }),
                n(),
                this
              );
              function n() {
                if (0 !== r.length) {
                  var t,
                    i,
                    n,
                    h,
                    u = r[0];
                  if (b(e.before)) {
                    var f = e.before(u.file, u.inputElem);
                    if ("object" == typeof f) {
                      if ("abort" === f.action)
                        return (
                          (t = "AbortError"),
                          (i = u.file),
                          (n = u.inputElem),
                          (h = f.reason),
                          void (b(e.error) && e.error({ name: t }, i, n, h))
                        );
                      if ("skip" === f.action) return void s();
                      "object" == typeof f.config &&
                        (u.instanceConfig = o.extend(
                          u.instanceConfig,
                          f.config,
                        ));
                    } else if ("skip" === f) return void s();
                  }
                  var d = u.instanceConfig.complete;
                  (u.instanceConfig.complete = function (e) {
                    b(d) && d(e, u.file, u.inputElem), s();
                  }),
                    a.parse(u.file, u.instanceConfig);
                } else b(e.complete) && e.complete();
              }
              function s() {
                r.splice(0, 1), n();
              }
            };
          }
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
                var t = y(e);
                (t.chunkSize = parseInt(t.chunkSize)),
                  e.step || e.chunk || (t.chunkSize = null),
                  (this._handle = new c(t)),
                  ((this._handle.streamer = this)._config = t);
              }.call(this, e),
              (this.parseChunk = function (e, i) {
                if (this.isFirstChunk && b(this._config.beforeFirstChunk)) {
                  var n = this._config.beforeFirstChunk(e);
                  void 0 !== n && (e = n);
                }
                (this.isFirstChunk = !1), (this._halted = !1);
                var s = this._partialLine + e;
                this._partialLine = "";
                var o = this._handle.parse(s, this._baseIndex, !this._finished);
                if (!this._handle.paused() && !this._handle.aborted()) {
                  var h = o.meta.cursor;
                  this._finished ||
                    ((this._partialLine = s.substring(h - this._baseIndex)),
                    (this._baseIndex = h)),
                    o && o.data && (this._rowCount += o.data.length);
                  var u =
                    this._finished ||
                    (this._config.preview &&
                      this._rowCount >= this._config.preview);
                  if (r)
                    t.postMessage({
                      results: o,
                      workerId: a.WORKER_ID,
                      finished: u,
                    });
                  else if (b(this._config.chunk) && !i) {
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
                  : r &&
                    this._config.error &&
                    t.postMessage({
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
                      ((t.onload = k(this._chunkLoaded, this)),
                      (t.onerror = k(this._chunkError, this))),
                    t.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !i,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var e = this._config.downloadRequestHeaders;
                    for (var r in e) t.setRequestHeader(r, e[r]);
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
                  i && 0 === t.status && this._chunkError();
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
                var i = t.statusText || e;
                this._sendError(new Error(i));
              });
          }
          function f(e) {
            var t, i;
            (e = e || {}).chunkSize || (e.chunkSize = a.LocalChunkSize),
              h.call(this, e);
            var r = "undefined" != typeof FileReader;
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
                var e = this._input;
                if (this._config.chunkSize) {
                  var n = Math.min(
                    this._start + this._config.chunkSize,
                    this._input.size,
                  );
                  e = i.call(e, this._start, n);
                }
                var s = t.readAsText(e, this._config.encoding);
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
                if (!this._finished) {
                  var e,
                    i = this._config.chunkSize;
                  return (
                    i
                      ? ((e = t.substring(0, i)), (t = t.substring(i)))
                      : ((e = t), (t = "")),
                    (this._finished = !t),
                    this.parseChunk(e)
                  );
                }
              });
          }
          function l(e) {
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
          function c(e) {
            var t,
              i,
              r,
              n = Math.pow(2, 53),
              s = -n,
              o = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              h =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              u = this,
              f = 0,
              d = 0,
              l = !1,
              c = !1,
              g = [],
              m = { data: [], errors: [], meta: {} };
            if (b(e.step)) {
              var v = e.step;
              e.step = function (t) {
                if (((m = t), w())) E();
                else {
                  if ((E(), 0 === m.data.length)) return;
                  (f += t.data.length),
                    e.preview && f > e.preview
                      ? i.abort()
                      : ((m.data = m.data[0]), v(m, u));
                }
              };
            }
            function k(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function E() {
              return (
                m &&
                  r &&
                  (R(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      a.DefaultDelimiter +
                      "'",
                  ),
                  (r = !1)),
                e.skipEmptyLines &&
                  (m.data = m.data.filter(function (e) {
                    return !k(e);
                  })),
                w() &&
                  (function () {
                    if (m)
                      if (Array.isArray(m.data[0])) {
                        for (var t = 0; w() && t < m.data.length; t++)
                          m.data[t].forEach(i);
                        m.data.splice(0, 1);
                      } else m.data.forEach(i);
                    function i(t, i) {
                      b(e.transformHeader) && (t = e.transformHeader(t, i)),
                        g.push(t);
                    }
                  })(),
                (function () {
                  if (!m || (!e.header && !e.dynamicTyping && !e.transform))
                    return m;
                  function t(t, i) {
                    var r,
                      n = e.header ? {} : [];
                    for (r = 0; r < t.length; r++) {
                      var s = r,
                        a = t[r];
                      e.header && (s = r >= g.length ? "__parsed_extra" : g[r]),
                        e.transform && (a = e.transform(a, s)),
                        (a = C(s, a)),
                        "__parsed_extra" === s
                          ? ((n[s] = n[s] || []), n[s].push(a))
                          : (n[s] = a);
                    }
                    return (
                      e.header &&
                        (r > g.length
                          ? R(
                              "FieldMismatch",
                              "TooManyFields",
                              "Too many fields: expected " +
                                g.length +
                                " fields but parsed " +
                                r,
                              d + i,
                            )
                          : r < g.length &&
                            R(
                              "FieldMismatch",
                              "TooFewFields",
                              "Too few fields: expected " +
                                g.length +
                                " fields but parsed " +
                                r,
                              d + i,
                            )),
                      n
                    );
                  }
                  var i = 1;
                  return (
                    !m.data.length || Array.isArray(m.data[0])
                      ? ((m.data = m.data.map(t)), (i = m.data.length))
                      : (m.data = t(m.data, 0)),
                    e.header && m.meta && (m.meta.fields = g),
                    (d += i),
                    m
                  );
                })()
              );
            }
            function w() {
              return e.header && 0 === g.length;
            }
            function C(t, i) {
              return (
                (r = t),
                e.dynamicTypingFunction &&
                  void 0 === e.dynamicTyping[r] &&
                  (e.dynamicTyping[r] = e.dynamicTypingFunction(r)),
                !0 === (e.dynamicTyping[r] || e.dynamicTyping)
                  ? "true" === i ||
                    "TRUE" === i ||
                    ("false" !== i &&
                      "FALSE" !== i &&
                      ((function (e) {
                        if (o.test(e)) {
                          var t = parseFloat(e);
                          if (s < t && t < n) return !0;
                        }
                        return !1;
                      })(i)
                        ? parseFloat(i)
                        : h.test(i)
                          ? new Date(i)
                          : "" === i
                            ? null
                            : i))
                  : i
              );
              var r;
            }
            function R(e, t, i, r) {
              var n = { type: e, code: t, message: i };
              void 0 !== r && (n.row = r), m.errors.push(n);
            }
            (this.parse = function (n, s, o) {
              var h = e.quoteChar || '"';
              if (
                (e.newline ||
                  (e.newline = (function (e, t) {
                    e = e.substring(0, 1048576);
                    var i = new RegExp(p(t) + "([^]*?)" + p(t), "gm"),
                      r = (e = e.replace(i, "")).split("\r"),
                      n = e.split("\n"),
                      s = 1 < n.length && n[0].length < r[0].length;
                    if (1 === r.length || s) return "\n";
                    for (var a = 0, o = 0; o < r.length; o++)
                      "\n" === r[o][0] && a++;
                    return a >= r.length / 2 ? "\r\n" : "\r";
                  })(n, h)),
                (r = !1),
                e.delimiter)
              )
                b(e.delimiter) &&
                  ((e.delimiter = e.delimiter(n)),
                  (m.meta.delimiter = e.delimiter));
              else {
                var u = (function (t, i, r, n, s) {
                  var o, h, u, f;
                  s = s || [",", "\t", "|", ";", a.RECORD_SEP, a.UNIT_SEP];
                  for (var d = 0; d < s.length; d++) {
                    var l = s[d],
                      c = 0,
                      p = 0,
                      g = 0;
                    u = void 0;
                    for (
                      var m = new _({
                          comments: n,
                          delimiter: l,
                          newline: i,
                          preview: 10,
                        }).parse(t),
                        v = 0;
                      v < m.data.length;
                      v++
                    )
                      if (r && k(m.data[v])) g++;
                      else {
                        var y = m.data[v].length;
                        (p += y),
                          void 0 !== u
                            ? 0 < y && ((c += Math.abs(y - u)), (u = y))
                            : (u = y);
                      }
                    0 < m.data.length && (p /= m.data.length - g),
                      (void 0 === h || c <= h) &&
                        (void 0 === f || f < p) &&
                        1.99 < p &&
                        ((h = c), (o = l), (f = p));
                  }
                  return { successful: !!(e.delimiter = o), bestDelimiter: o };
                })(
                  n,
                  e.newline,
                  e.skipEmptyLines,
                  e.comments,
                  e.delimitersToGuess,
                );
                u.successful
                  ? (e.delimiter = u.bestDelimiter)
                  : ((r = !0), (e.delimiter = a.DefaultDelimiter)),
                  (m.meta.delimiter = e.delimiter);
              }
              var f = y(e);
              return (
                e.preview && e.header && f.preview++,
                (t = n),
                (i = new _(f)),
                (m = i.parse(t, s, o)),
                E(),
                l ? { meta: { paused: !0 } } : m || { meta: { paused: !1 } }
              );
            }),
              (this.paused = function () {
                return l;
              }),
              (this.pause = function () {
                (l = !0),
                  i.abort(),
                  (t = b(e.chunk) ? "" : t.substring(i.getCharIndex()));
              }),
              (this.resume = function () {
                u.streamer._halted
                  ? ((l = !1), u.streamer.parseChunk(t, !0))
                  : setTimeout(u.resume, 3);
              }),
              (this.aborted = function () {
                return c;
              }),
              (this.abort = function () {
                (c = !0),
                  i.abort(),
                  (m.meta.aborted = !0),
                  b(e.complete) && e.complete(m),
                  (t = "");
              });
          }
          function p(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function _(e) {
            var t,
              i = (e = e || {}).delimiter,
              r = e.newline,
              n = e.comments,
              s = e.step,
              o = e.preview,
              h = e.fastMode,
              u = (t =
                void 0 === e.quoteChar || null === e.quoteChar
                  ? '"'
                  : e.quoteChar);
            if (
              (void 0 !== e.escapeChar && (u = e.escapeChar),
              ("string" != typeof i || -1 < a.BAD_DELIMITERS.indexOf(i)) &&
                (i = ","),
              n === i)
            )
              throw new Error("Comment character same as delimiter");
            !0 === n
              ? (n = "#")
              : ("string" != typeof n || -1 < a.BAD_DELIMITERS.indexOf(n)) &&
                (n = !1),
              "\n" !== r && "\r" !== r && "\r\n" !== r && (r = "\n");
            var f = 0,
              d = !1;
            (this.parse = function (a, l, c) {
              if ("string" != typeof a)
                throw new Error("Input must be a string");
              var _ = a.length,
                g = i.length,
                m = r.length,
                v = n.length,
                y = b(s),
                k = [],
                E = [],
                w = [],
                C = (f = 0);
              if (!a) return Q();
              if (e.header && !l) {
                var R = a.split(r)[0].split(i),
                  S = [],
                  O = {},
                  x = !1;
                for (var I in R) {
                  var D = R[I];
                  b(e.transformHeader) && (D = e.transformHeader(D, I));
                  var T = D,
                    A = O[D] || 0;
                  for (
                    0 < A && ((x = !0), (T = D + "_" + A)), O[D] = A + 1;
                    S.includes(T);
                  )
                    T = T + "_" + A;
                  S.push(T);
                }
                if (x) {
                  var L = a.split(r);
                  (L[0] = S.join(i)), (a = L.join(r));
                }
              }
              if (h || (!1 !== h && -1 === a.indexOf(t))) {
                for (var F = a.split(r), z = 0; z < F.length; z++) {
                  if (((w = F[z]), (f += w.length), z !== F.length - 1))
                    f += r.length;
                  else if (c) return Q();
                  if (!n || w.substring(0, v) !== n) {
                    if (y) {
                      if (((k = []), B(w.split(i)), J(), d)) return Q();
                    } else B(w.split(i));
                    if (o && o <= z) return (k = k.slice(0, o)), Q(!0);
                  }
                }
                return Q();
              }
              for (
                var M = a.indexOf(i, f),
                  j = a.indexOf(r, f),
                  U = new RegExp(p(u) + p(t), "g"),
                  q = a.indexOf(t, f);
                ;
              )
                if (a[f] !== t)
                  if (n && 0 === w.length && a.substring(f, f + v) === n) {
                    if (-1 === j) return Q();
                    (f = j + m), (j = a.indexOf(r, f)), (M = a.indexOf(i, f));
                  } else if (-1 !== M && (M < j || -1 === j))
                    w.push(a.substring(f, M)),
                      (f = M + g),
                      (M = a.indexOf(i, f));
                  else {
                    if (-1 === j) break;
                    if ((w.push(a.substring(f, j)), H(j + m), y && (J(), d)))
                      return Q();
                    if (o && k.length >= o) return Q(!0);
                  }
                else
                  for (q = f, f++; ; ) {
                    if (-1 === (q = a.indexOf(t, q + 1)))
                      return (
                        c ||
                          E.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: k.length,
                            index: f,
                          }),
                        W()
                      );
                    if (q === _ - 1) return W(a.substring(f, q).replace(U, t));
                    if (t !== u || a[q + 1] !== u) {
                      if (t === u || 0 === q || a[q - 1] !== u) {
                        -1 !== M && M < q + 1 && (M = a.indexOf(i, q + 1)),
                          -1 !== j && j < q + 1 && (j = a.indexOf(r, q + 1));
                        var P = K(-1 === j ? M : Math.min(M, j));
                        if (a.substr(q + 1 + P, g) === i) {
                          w.push(a.substring(f, q).replace(U, t)),
                            a[(f = q + 1 + P + g)] !== t &&
                              (q = a.indexOf(t, f)),
                            (M = a.indexOf(i, f)),
                            (j = a.indexOf(r, f));
                          break;
                        }
                        var N = K(j);
                        if (a.substring(q + 1 + N, q + 1 + N + m) === r) {
                          if (
                            (w.push(a.substring(f, q).replace(U, t)),
                            H(q + 1 + N + m),
                            (M = a.indexOf(i, f)),
                            (q = a.indexOf(t, f)),
                            y && (J(), d))
                          )
                            return Q();
                          if (o && k.length >= o) return Q(!0);
                          break;
                        }
                        E.push({
                          type: "Quotes",
                          code: "InvalidQuotes",
                          message:
                            "Trailing quote on quoted field is malformed",
                          row: k.length,
                          index: f,
                        }),
                          q++;
                      }
                    } else q++;
                  }
              return W();
              function B(e) {
                k.push(e), (C = f);
              }
              function K(e) {
                var t = 0;
                if (-1 !== e) {
                  var i = a.substring(q + 1, e);
                  i && "" === i.trim() && (t = i.length);
                }
                return t;
              }
              function W(e) {
                return (
                  c ||
                    (void 0 === e && (e = a.substring(f)),
                    w.push(e),
                    (f = _),
                    B(w),
                    y && J()),
                  Q()
                );
              }
              function H(e) {
                (f = e), B(w), (w = []), (j = a.indexOf(r, f));
              }
              function Q(e) {
                return {
                  data: k,
                  errors: E,
                  meta: {
                    delimiter: i,
                    linebreak: r,
                    aborted: d,
                    truncated: !!e,
                    cursor: C + (l || 0),
                  },
                };
              }
              function J() {
                s(Q()), (k = []), (E = []);
              }
            }),
              (this.abort = function () {
                d = !0;
              }),
              (this.getCharIndex = function () {
                return f;
              });
          }
          function g(e) {
            var t = e.data,
              i = n[t.workerId],
              r = !1;
            if (t.error) i.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var s = {
                abort: function () {
                  (r = !0),
                    m(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: v,
                resume: v,
              };
              if (b(i.userStep)) {
                for (
                  var a = 0;
                  a < t.results.data.length &&
                  (i.userStep(
                    {
                      data: t.results.data[a],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    s,
                  ),
                  !r);
                  a++
                );
                delete t.results;
              } else
                b(i.userChunk) &&
                  (i.userChunk(t.results, s, t.file), delete t.results);
            }
            t.finished && !r && m(t.workerId, t.results);
          }
          function m(e, t) {
            var i = n[e];
            b(i.userComplete) && i.userComplete(t), i.terminate(), delete n[e];
          }
          function v() {
            throw new Error("Not implemented.");
          }
          function y(e) {
            if ("object" != typeof e || null === e) return e;
            var t = Array.isArray(e) ? [] : {};
            for (var i in e) t[i] = y(e[i]);
            return t;
          }
          function k(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function b(e) {
            return "function" == typeof e;
          }
          return (
            r &&
              (t.onmessage = function (e) {
                var i = e.data;
                if (
                  (void 0 === a.WORKER_ID && i && (a.WORKER_ID = i.workerId),
                  "string" == typeof i.input)
                )
                  t.postMessage({
                    workerId: a.WORKER_ID,
                    results: a.parse(i.input, i.config),
                    finished: !0,
                  });
                else if (
                  (t.File && i.input instanceof File) ||
                  i.input instanceof Object
                ) {
                  var r = a.parse(i.input, i.config);
                  r &&
                    t.postMessage({
                      workerId: a.WORKER_ID,
                      results: r,
                      finished: !0,
                    });
                }
              }),
            ((u.prototype = Object.create(h.prototype)).constructor = u),
            ((f.prototype = Object.create(h.prototype)).constructor = f),
            ((d.prototype = Object.create(d.prototype)).constructor = d),
            ((l.prototype = Object.create(h.prototype)).constructor = l),
            a
          );
        }),
        void 0 === (n = "function" == typeof i ? i.apply(t, r) : i) ||
          (e.exports = n);
    },
    94649: function (e, t) {
      var i, r, n;
      (r = []),
        (i = function e() {
          "use strict";
          var t =
              "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                  ? window
                  : void 0 !== t
                    ? t
                    : {},
            i = !t.document && !!t.postMessage,
            r = i && /blob:/i.test((t.location || {}).protocol),
            n = {},
            s = 0,
            a = {
              parse: function (i, r) {
                var o = (r = r || {}).dynamicTyping || !1;
                if (
                  (b(o) && ((r.dynamicTypingFunction = o), (o = {})),
                  (r.dynamicTyping = o),
                  (r.transform = !!b(r.transform) && r.transform),
                  r.worker && a.WORKERS_SUPPORTED)
                ) {
                  var h = (function () {
                    if (!a.WORKERS_SUPPORTED) return !1;
                    var i,
                      r,
                      o =
                        ((i = t.URL || t.webkitURL || null),
                        (r = e.toString()),
                        a.BLOB_URL ||
                          (a.BLOB_URL = i.createObjectURL(
                            new Blob(["(", r, ")();"], {
                              type: "text/javascript",
                            }),
                          ))),
                      h = new t.Worker(o);
                    return (h.onmessage = g), (h.id = s++), (n[h.id] = h);
                  })();
                  return (
                    (h.userStep = r.step),
                    (h.userChunk = r.chunk),
                    (h.userComplete = r.complete),
                    (h.userError = r.error),
                    (r.step = b(r.step)),
                    (r.chunk = b(r.chunk)),
                    (r.complete = b(r.complete)),
                    (r.error = b(r.error)),
                    delete r.worker,
                    void h.postMessage({ input: i, config: r, workerId: h.id })
                  );
                }
                var c = null;
                return (
                  a.NODE_STREAM_INPUT,
                  "string" == typeof i
                    ? (c = r.download ? new u(r) : new d(r))
                    : !0 === i.readable && b(i.read) && b(i.on)
                      ? (c = new l(r))
                      : ((t.File && i instanceof File) ||
                          i instanceof Object) &&
                        (c = new f(r)),
                  c.stream(i)
                );
              },
              unparse: function (e, t) {
                var i = !1,
                  r = !0,
                  n = ",",
                  s = "\r\n",
                  o = '"',
                  h = o + o,
                  u = !1,
                  f = null;
                !(function () {
                  if ("object" == typeof t) {
                    if (
                      ("string" != typeof t.delimiter ||
                        a.BAD_DELIMITERS.filter(function (e) {
                          return -1 !== t.delimiter.indexOf(e);
                        }).length ||
                        (n = t.delimiter),
                      ("boolean" == typeof t.quotes ||
                        Array.isArray(t.quotes)) &&
                        (i = t.quotes),
                      ("boolean" != typeof t.skipEmptyLines &&
                        "string" != typeof t.skipEmptyLines) ||
                        (u = t.skipEmptyLines),
                      "string" == typeof t.newline && (s = t.newline),
                      "string" == typeof t.quoteChar && (o = t.quoteChar),
                      "boolean" == typeof t.header && (r = t.header),
                      Array.isArray(t.columns))
                    ) {
                      if (0 === t.columns.length)
                        throw new Error("Option columns is empty");
                      f = t.columns;
                    }
                    void 0 !== t.escapeChar && (h = t.escapeChar + o);
                  }
                })();
                var d = new RegExp(p(o), "g");
                if (
                  ("string" == typeof e && (e = JSON.parse(e)),
                  Array.isArray(e))
                ) {
                  if (!e.length || Array.isArray(e[0])) return c(null, e, u);
                  if ("object" == typeof e[0]) return c(f || l(e[0]), e, u);
                } else if ("object" == typeof e)
                  return (
                    "string" == typeof e.data && (e.data = JSON.parse(e.data)),
                    Array.isArray(e.data) &&
                      (e.fields || (e.fields = e.meta && e.meta.fields),
                      e.fields ||
                        (e.fields = Array.isArray(e.data[0])
                          ? e.fields
                          : l(e.data[0])),
                      Array.isArray(e.data[0]) ||
                        "object" == typeof e.data[0] ||
                        (e.data = [e.data])),
                    c(e.fields || [], e.data || [], u)
                  );
                throw new Error("Unable to serialize unrecognized input");
                function l(e) {
                  if ("object" != typeof e) return [];
                  var t = [];
                  for (var i in e) t.push(i);
                  return t;
                }
                function c(e, t, i) {
                  var a = "";
                  "string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t));
                  var o = Array.isArray(e) && 0 < e.length,
                    h = !Array.isArray(t[0]);
                  if (o && r) {
                    for (var u = 0; u < e.length; u++)
                      0 < u && (a += n), (a += _(e[u], u));
                    0 < t.length && (a += s);
                  }
                  for (var f = 0; f < t.length; f++) {
                    var d = o ? e.length : t[f].length,
                      l = !1,
                      c = o
                        ? 0 === Object.keys(t[f]).length
                        : 0 === t[f].length;
                    if (
                      (i &&
                        !o &&
                        (l =
                          "greedy" === i
                            ? "" === t[f].join("").trim()
                            : 1 === t[f].length && 0 === t[f][0].length),
                      "greedy" === i && o)
                    ) {
                      for (var p = [], g = 0; g < d; g++) {
                        var m = h ? e[g] : g;
                        p.push(t[f][m]);
                      }
                      l = "" === p.join("").trim();
                    }
                    if (!l) {
                      for (var v = 0; v < d; v++) {
                        0 < v && !c && (a += n);
                        var y = o && h ? e[v] : v;
                        a += _(t[f][y], v);
                      }
                      f < t.length - 1 && (!i || (0 < d && !c)) && (a += s);
                    }
                  }
                  return a;
                }
                function _(e, t) {
                  if (null == e) return "";
                  if (e.constructor === Date)
                    return JSON.stringify(e).slice(1, 25);
                  e = e.toString().replace(d, h);
                  var r =
                    ("boolean" == typeof i && i) ||
                    (Array.isArray(i) && i[t]) ||
                    (function (e, t) {
                      for (var i = 0; i < t.length; i++)
                        if (-1 < e.indexOf(t[i])) return !0;
                      return !1;
                    })(e, a.BAD_DELIMITERS) ||
                    -1 < e.indexOf(n) ||
                    " " === e.charAt(0) ||
                    " " === e.charAt(e.length - 1);
                  return r ? o + e + o : e;
                }
              },
            };
          if (
            ((a.RECORD_SEP = String.fromCharCode(30)),
            (a.UNIT_SEP = String.fromCharCode(31)),
            (a.BYTE_ORDER_MARK = "\ufeff"),
            (a.BAD_DELIMITERS = ["\r", "\n", '"', a.BYTE_ORDER_MARK]),
            (a.WORKERS_SUPPORTED = !i && !!t.Worker),
            (a.NODE_STREAM_INPUT = 1),
            (a.LocalChunkSize = 10485760),
            (a.RemoteChunkSize = 5242880),
            (a.DefaultDelimiter = ","),
            (a.Parser = _),
            (a.ParserHandle = c),
            (a.NetworkStreamer = u),
            (a.FileStreamer = f),
            (a.StringStreamer = d),
            (a.ReadableStreamStreamer = l),
            t.jQuery)
          ) {
            var o = t.jQuery;
            o.fn.parse = function (e) {
              var i = e.config || {},
                r = [];
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
                    r.push({
                      file: this.files[n],
                      inputElem: this,
                      instanceConfig: o.extend({}, i),
                    });
                }),
                n(),
                this
              );
              function n() {
                if (0 !== r.length) {
                  var t,
                    i,
                    n,
                    h,
                    u = r[0];
                  if (b(e.before)) {
                    var f = e.before(u.file, u.inputElem);
                    if ("object" == typeof f) {
                      if ("abort" === f.action)
                        return (
                          (t = "AbortError"),
                          (i = u.file),
                          (n = u.inputElem),
                          (h = f.reason),
                          void (b(e.error) && e.error({ name: t }, i, n, h))
                        );
                      if ("skip" === f.action) return void s();
                      "object" == typeof f.config &&
                        (u.instanceConfig = o.extend(
                          u.instanceConfig,
                          f.config,
                        ));
                    } else if ("skip" === f) return void s();
                  }
                  var d = u.instanceConfig.complete;
                  (u.instanceConfig.complete = function (e) {
                    b(d) && d(e, u.file, u.inputElem), s();
                  }),
                    a.parse(u.file, u.instanceConfig);
                } else b(e.complete) && e.complete();
              }
              function s() {
                r.splice(0, 1), n();
              }
            };
          }
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
                var t = y(e);
                (t.chunkSize = parseInt(t.chunkSize)),
                  e.step || e.chunk || (t.chunkSize = null),
                  (this._handle = new c(t)),
                  ((this._handle.streamer = this)._config = t);
              }.call(this, e),
              (this.parseChunk = function (e, i) {
                if (this.isFirstChunk && b(this._config.beforeFirstChunk)) {
                  var n = this._config.beforeFirstChunk(e);
                  void 0 !== n && (e = n);
                }
                (this.isFirstChunk = !1), (this._halted = !1);
                var s = this._partialLine + e;
                this._partialLine = "";
                var o = this._handle.parse(s, this._baseIndex, !this._finished);
                if (!this._handle.paused() && !this._handle.aborted()) {
                  var h = o.meta.cursor;
                  this._finished ||
                    ((this._partialLine = s.substring(h - this._baseIndex)),
                    (this._baseIndex = h)),
                    o && o.data && (this._rowCount += o.data.length);
                  var u =
                    this._finished ||
                    (this._config.preview &&
                      this._rowCount >= this._config.preview);
                  if (r)
                    t.postMessage({
                      results: o,
                      workerId: a.WORKER_ID,
                      finished: u,
                    });
                  else if (b(this._config.chunk) && !i) {
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
                  : r &&
                    this._config.error &&
                    t.postMessage({
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
                      ((t.onload = k(this._chunkLoaded, this)),
                      (t.onerror = k(this._chunkError, this))),
                    t.open("GET", this._input, !i),
                    this._config.downloadRequestHeaders)
                  ) {
                    var e = this._config.downloadRequestHeaders;
                    for (var r in e) t.setRequestHeader(r, e[r]);
                  }
                  if (this._config.chunkSize) {
                    var n = this._start + this._config.chunkSize - 1;
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + n,
                    );
                  }
                  try {
                    t.send();
                  } catch (e) {
                    this._chunkError(e.message);
                  }
                  i && 0 === t.status
                    ? this._chunkError()
                    : (this._start += this._config.chunkSize);
                }
              }),
              (this._chunkLoaded = function () {
                4 === t.readyState &&
                  (t.status < 200 || 400 <= t.status
                    ? this._chunkError()
                    : ((this._finished =
                        !this._config.chunkSize ||
                        this._start >
                          (function (e) {
                            var t = e.getResponseHeader("Content-Range");
                            return null === t
                              ? -1
                              : parseInt(t.substr(t.lastIndexOf("/") + 1));
                          })(t)),
                      this.parseChunk(t.responseText)));
              }),
              (this._chunkError = function (e) {
                var i = t.statusText || e;
                this._sendError(new Error(i));
              });
          }
          function f(e) {
            var t, i;
            (e = e || {}).chunkSize || (e.chunkSize = a.LocalChunkSize),
              h.call(this, e);
            var r = "undefined" != typeof FileReader;
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
                var e = this._input;
                if (this._config.chunkSize) {
                  var n = Math.min(
                    this._start + this._config.chunkSize,
                    this._input.size,
                  );
                  e = i.call(e, this._start, n);
                }
                var s = t.readAsText(e, this._config.encoding);
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
                if (!this._finished) {
                  var e = this._config.chunkSize,
                    i = e ? t.substr(0, e) : t;
                  return (
                    (t = e ? t.substr(e) : ""),
                    (this._finished = !t),
                    this.parseChunk(i)
                  );
                }
              });
          }
          function l(e) {
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
          function c(e) {
            var t,
              i,
              r,
              n = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,
              s =
                /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
              o = this,
              h = 0,
              u = 0,
              f = !1,
              d = !1,
              l = [],
              c = { data: [], errors: [], meta: {} };
            if (b(e.step)) {
              var g = e.step;
              e.step = function (t) {
                if (((c = t), k())) v();
                else {
                  if ((v(), 0 === c.data.length)) return;
                  (h += t.data.length),
                    e.preview && h > e.preview ? i.abort() : g(c, o);
                }
              };
            }
            function m(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function v() {
              if (
                (c &&
                  r &&
                  (w(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      a.DefaultDelimiter +
                      "'",
                  ),
                  (r = !1)),
                e.skipEmptyLines)
              )
                for (var t = 0; t < c.data.length; t++)
                  m(c.data[t]) && c.data.splice(t--, 1);
              return (
                k() &&
                  (function () {
                    if (c)
                      if (Array.isArray(c.data[0])) {
                        for (var t = 0; k() && t < c.data.length; t++)
                          c.data[t].forEach(i);
                        c.data.splice(0, 1);
                      } else c.data.forEach(i);
                    function i(t) {
                      b(e.transformHeader) && (t = e.transformHeader(t)),
                        l.push(t);
                    }
                  })(),
                (function () {
                  if (!c || (!e.header && !e.dynamicTyping && !e.transform))
                    return c;
                  function t(t, i) {
                    var r,
                      n = e.header ? {} : [];
                    for (r = 0; r < t.length; r++) {
                      var s = r,
                        a = t[r];
                      e.header && (s = r >= l.length ? "__parsed_extra" : l[r]),
                        e.transform && (a = e.transform(a, s)),
                        (a = E(s, a)),
                        "__parsed_extra" === s
                          ? ((n[s] = n[s] || []), n[s].push(a))
                          : (n[s] = a);
                    }
                    return (
                      e.header &&
                        (r > l.length
                          ? w(
                              "FieldMismatch",
                              "TooManyFields",
                              "Too many fields: expected " +
                                l.length +
                                " fields but parsed " +
                                r,
                              u + i,
                            )
                          : r < l.length &&
                            w(
                              "FieldMismatch",
                              "TooFewFields",
                              "Too few fields: expected " +
                                l.length +
                                " fields but parsed " +
                                r,
                              u + i,
                            )),
                      n
                    );
                  }
                  var i = 1;
                  return (
                    !c.data[0] || Array.isArray(c.data[0])
                      ? ((c.data = c.data.map(t)), (i = c.data.length))
                      : (c.data = t(c.data, 0)),
                    e.header && c.meta && (c.meta.fields = l),
                    (u += i),
                    c
                  );
                })()
              );
            }
            function k() {
              return e.header && 0 === l.length;
            }
            function E(t, i) {
              return (
                (r = t),
                e.dynamicTypingFunction &&
                  void 0 === e.dynamicTyping[r] &&
                  (e.dynamicTyping[r] = e.dynamicTypingFunction(r)),
                !0 === (e.dynamicTyping[r] || e.dynamicTyping)
                  ? "true" === i ||
                    "TRUE" === i ||
                    ("false" !== i &&
                      "FALSE" !== i &&
                      (n.test(i)
                        ? parseFloat(i)
                        : s.test(i)
                          ? new Date(i)
                          : "" === i
                            ? null
                            : i))
                  : i
              );
              var r;
            }
            function w(e, t, i, r) {
              c.errors.push({ type: e, code: t, message: i, row: r });
            }
            (this.parse = function (n, s, o) {
              var h = e.quoteChar || '"';
              if (
                (e.newline ||
                  (e.newline = (function (e, t) {
                    e = e.substr(0, 1048576);
                    var i = new RegExp(p(t) + "([^]*?)" + p(t), "gm"),
                      r = (e = e.replace(i, "")).split("\r"),
                      n = e.split("\n"),
                      s = 1 < n.length && n[0].length < r[0].length;
                    if (1 === r.length || s) return "\n";
                    for (var a = 0, o = 0; o < r.length; o++)
                      "\n" === r[o][0] && a++;
                    return a >= r.length / 2 ? "\r\n" : "\r";
                  })(n, h)),
                (r = !1),
                e.delimiter)
              )
                b(e.delimiter) &&
                  ((e.delimiter = e.delimiter(n)),
                  (c.meta.delimiter = e.delimiter));
              else {
                var u = (function (t, i, r, n, s) {
                  var o, h, u, f;
                  s = s || [",", "\t", "|", ";", a.RECORD_SEP, a.UNIT_SEP];
                  for (var d = 0; d < s.length; d++) {
                    var l = s[d],
                      c = 0,
                      p = 0,
                      g = 0;
                    u = void 0;
                    for (
                      var v = new _({
                          comments: n,
                          delimiter: l,
                          newline: i,
                          preview: 10,
                        }).parse(t),
                        y = 0;
                      y < v.data.length;
                      y++
                    )
                      if (r && m(v.data[y])) g++;
                      else {
                        var k = v.data[y].length;
                        (p += k),
                          void 0 !== u
                            ? 0 < k && ((c += Math.abs(k - u)), (u = k))
                            : (u = k);
                      }
                    0 < v.data.length && (p /= v.data.length - g),
                      (void 0 === h || c <= h) &&
                        (void 0 === f || f < p) &&
                        1.99 < p &&
                        ((h = c), (o = l), (f = p));
                  }
                  return { successful: !!(e.delimiter = o), bestDelimiter: o };
                })(
                  n,
                  e.newline,
                  e.skipEmptyLines,
                  e.comments,
                  e.delimitersToGuess,
                );
                u.successful
                  ? (e.delimiter = u.bestDelimiter)
                  : ((r = !0), (e.delimiter = a.DefaultDelimiter)),
                  (c.meta.delimiter = e.delimiter);
              }
              var d = y(e);
              return (
                e.preview && e.header && d.preview++,
                (t = n),
                (i = new _(d)),
                (c = i.parse(t, s, o)),
                v(),
                f ? { meta: { paused: !0 } } : c || { meta: { paused: !1 } }
              );
            }),
              (this.paused = function () {
                return f;
              }),
              (this.pause = function () {
                (f = !0), i.abort(), (t = t.substr(i.getCharIndex()));
              }),
              (this.resume = function () {
                o.streamer._halted
                  ? ((f = !1), o.streamer.parseChunk(t, !0))
                  : setTimeout(this.resume, 3);
              }),
              (this.aborted = function () {
                return d;
              }),
              (this.abort = function () {
                (d = !0),
                  i.abort(),
                  (c.meta.aborted = !0),
                  b(e.complete) && e.complete(c),
                  (t = "");
              });
          }
          function p(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function _(e) {
            var t,
              i = (e = e || {}).delimiter,
              r = e.newline,
              n = e.comments,
              s = e.step,
              o = e.preview,
              h = e.fastMode,
              u = (t = void 0 === e.quoteChar ? '"' : e.quoteChar);
            if (
              (void 0 !== e.escapeChar && (u = e.escapeChar),
              ("string" != typeof i || -1 < a.BAD_DELIMITERS.indexOf(i)) &&
                (i = ","),
              n === i)
            )
              throw new Error("Comment character same as delimiter");
            !0 === n
              ? (n = "#")
              : ("string" != typeof n || -1 < a.BAD_DELIMITERS.indexOf(n)) &&
                (n = !1),
              "\n" !== r && "\r" !== r && "\r\n" !== r && (r = "\n");
            var f = 0,
              d = !1;
            (this.parse = function (e, a, l) {
              if ("string" != typeof e)
                throw new Error("Input must be a string");
              var c = e.length,
                _ = i.length,
                g = r.length,
                m = n.length,
                v = b(s),
                y = [],
                k = [],
                E = [],
                w = (f = 0);
              if (!e) return j();
              if (h || (!1 !== h && -1 === e.indexOf(t))) {
                for (var C = e.split(r), R = 0; R < C.length; R++) {
                  if (((E = C[R]), (f += E.length), R !== C.length - 1))
                    f += r.length;
                  else if (l) return j();
                  if (!n || E.substr(0, m) !== n) {
                    if (v) {
                      if (((y = []), L(E.split(i)), U(), d)) return j();
                    } else L(E.split(i));
                    if (o && o <= R) return (y = y.slice(0, o)), j(!0);
                  }
                }
                return j();
              }
              for (
                var S = e.indexOf(i, f),
                  O = e.indexOf(r, f),
                  x = new RegExp(p(u) + p(t), "g"),
                  I = e.indexOf(t, f);
                ;
              )
                if (e[f] !== t)
                  if (n && 0 === E.length && e.substr(f, m) === n) {
                    if (-1 === O) return j();
                    (f = O + g), (O = e.indexOf(r, f)), (S = e.indexOf(i, f));
                  } else {
                    if (-1 !== S && (S < O || -1 === O)) {
                      if (-1 === I) {
                        E.push(e.substring(f, S)),
                          (f = S + _),
                          (S = e.indexOf(i, f));
                        continue;
                      }
                      var D = q(S, I, O);
                      if (D && D.nextDelim) {
                        (S = D.nextDelim),
                          (I = D.quoteSearch),
                          E.push(e.substring(f, S)),
                          (f = S + _),
                          (S = e.indexOf(i, f));
                        continue;
                      }
                    }
                    if (-1 === O) break;
                    if ((E.push(e.substring(f, O)), M(O + g), v && (U(), d)))
                      return j();
                    if (o && y.length >= o) return j(!0);
                  }
                else
                  for (I = f, f++; ; ) {
                    if (-1 === (I = e.indexOf(t, I + 1)))
                      return (
                        l ||
                          k.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: y.length,
                            index: f,
                          }),
                        z()
                      );
                    if (I === c - 1) return z(e.substring(f, I).replace(x, t));
                    if (t !== u || e[I + 1] !== u) {
                      if (t === u || 0 === I || e[I - 1] !== u) {
                        var T = F(-1 === O ? S : Math.min(S, O));
                        if (e[I + 1 + T] === i) {
                          E.push(e.substring(f, I).replace(x, t)),
                            e[(f = I + 1 + T + _)] !== t &&
                              (I = e.indexOf(t, f)),
                            (S = e.indexOf(i, f)),
                            (O = e.indexOf(r, f));
                          break;
                        }
                        var A = F(O);
                        if (e.substr(I + 1 + A, g) === r) {
                          if (
                            (E.push(e.substring(f, I).replace(x, t)),
                            M(I + 1 + A + g),
                            (S = e.indexOf(i, f)),
                            (I = e.indexOf(t, f)),
                            v && (U(), d))
                          )
                            return j();
                          if (o && y.length >= o) return j(!0);
                          break;
                        }
                        k.push({
                          type: "Quotes",
                          code: "InvalidQuotes",
                          message:
                            "Trailing quote on quoted field is malformed",
                          row: y.length,
                          index: f,
                        }),
                          I++;
                      }
                    } else I++;
                  }
              return z();
              function L(e) {
                y.push(e), (w = f);
              }
              function F(t) {
                var i = 0;
                if (-1 !== t) {
                  var r = e.substring(I + 1, t);
                  r && "" === r.trim() && (i = r.length);
                }
                return i;
              }
              function z(t) {
                return (
                  l ||
                    (void 0 === t && (t = e.substr(f)),
                    E.push(t),
                    (f = c),
                    L(E),
                    v && U()),
                  j()
                );
              }
              function M(t) {
                (f = t), L(E), (E = []), (O = e.indexOf(r, f));
              }
              function j(e, t) {
                return {
                  data: t ? y[0] : y,
                  errors: k,
                  meta: {
                    delimiter: i,
                    linebreak: r,
                    aborted: d,
                    truncated: !!e,
                    cursor: w + (a || 0),
                  },
                };
              }
              function U() {
                s(j(void 0, !0)), (y = []), (k = []);
              }
              function q(r, n, s) {
                var a = { nextDelim: void 0, quoteSearch: void 0 },
                  o = e.indexOf(t, n + 1);
                if (n < r && r < o && (o < s || -1 === s)) {
                  var h = e.indexOf(i, o);
                  if (-1 === h) return a;
                  o < h && (o = e.indexOf(t, o + 1)), (a = q(h, o, s));
                } else a = { nextDelim: r, quoteSearch: n };
                return a;
              }
            }),
              (this.abort = function () {
                d = !0;
              }),
              (this.getCharIndex = function () {
                return f;
              });
          }
          function g(e) {
            var t = e.data,
              i = n[t.workerId],
              r = !1;
            if (t.error) i.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var s = {
                abort: function () {
                  (r = !0),
                    m(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: v,
                resume: v,
              };
              if (b(i.userStep)) {
                for (
                  var a = 0;
                  a < t.results.data.length &&
                  (i.userStep(
                    {
                      data: t.results.data[a],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    s,
                  ),
                  !r);
                  a++
                );
                delete t.results;
              } else
                b(i.userChunk) &&
                  (i.userChunk(t.results, s, t.file), delete t.results);
            }
            t.finished && !r && m(t.workerId, t.results);
          }
          function m(e, t) {
            var i = n[e];
            b(i.userComplete) && i.userComplete(t), i.terminate(), delete n[e];
          }
          function v() {
            throw new Error("Not implemented.");
          }
          function y(e) {
            if ("object" != typeof e || null === e) return e;
            var t = Array.isArray(e) ? [] : {};
            for (var i in e) t[i] = y(e[i]);
            return t;
          }
          function k(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function b(e) {
            return "function" == typeof e;
          }
          return (
            r &&
              (t.onmessage = function (e) {
                var i = e.data;
                if (
                  (void 0 === a.WORKER_ID && i && (a.WORKER_ID = i.workerId),
                  "string" == typeof i.input)
                )
                  t.postMessage({
                    workerId: a.WORKER_ID,
                    results: a.parse(i.input, i.config),
                    finished: !0,
                  });
                else if (
                  (t.File && i.input instanceof File) ||
                  i.input instanceof Object
                ) {
                  var r = a.parse(i.input, i.config);
                  r &&
                    t.postMessage({
                      workerId: a.WORKER_ID,
                      results: r,
                      finished: !0,
                    });
                }
              }),
            ((u.prototype = Object.create(h.prototype)).constructor = u),
            ((f.prototype = Object.create(h.prototype)).constructor = f),
            ((d.prototype = Object.create(d.prototype)).constructor = d),
            ((l.prototype = Object.create(h.prototype)).constructor = l),
            a
          );
        }),
        void 0 === (n = "function" == typeof i ? i.apply(t, r) : i) ||
          (e.exports = n);
    },
  },
]);
