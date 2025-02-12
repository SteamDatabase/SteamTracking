/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [9954],
  {
    40323: function (e, t) {
      var n, o, i;
      (o = []),
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
            o = t.IS_PAPA_WORKER || !1,
            i = {},
            l = 0,
            r = {
              parse: function (n, o) {
                var s = (o = o || {}).dynamicTyping || !1;
                if (
                  (C(s) && ((o.dynamicTypingFunction = s), (s = {})),
                  (o.dynamicTyping = s),
                  (o.transform = !!C(o.transform) && o.transform),
                  o.worker && r.WORKERS_SUPPORTED)
                ) {
                  var a = (function () {
                    if (!r.WORKERS_SUPPORTED) return !1;
                    var n,
                      o,
                      s =
                        ((n = t.URL || t.webkitURL || null),
                        (o = e.toString()),
                        r.BLOB_URL ||
                          (r.BLOB_URL = n.createObjectURL(
                            new Blob(
                              [
                                "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                                "(",
                                o,
                                ")();",
                              ],
                              { type: "text/javascript" },
                            ),
                          ))),
                      a = new t.Worker(s);
                    return (a.onmessage = m), (a.id = l++), (i[a.id] = a);
                  })();
                  return (
                    (a.userStep = o.step),
                    (a.userChunk = o.chunk),
                    (a.userComplete = o.complete),
                    (a.userError = o.error),
                    (o.step = C(o.step)),
                    (o.chunk = C(o.chunk)),
                    (o.complete = C(o.complete)),
                    (o.error = C(o.error)),
                    delete o.worker,
                    void a.postMessage({ input: n, config: o, workerId: a.id })
                  );
                }
                var h = null;
                return (
                  r.NODE_STREAM_INPUT,
                  "string" == typeof n
                    ? ((n = (function (e) {
                        return 65279 === e.charCodeAt(0) ? e.slice(1) : e;
                      })(n)),
                      (h = o.download ? new u(o) : new g(o)))
                    : !0 === n.readable && C(n.read) && C(n.on)
                      ? (h = new c(o))
                      : ((t.File && n instanceof File) ||
                          n instanceof Object) &&
                        (h = new d(o)),
                  h.stream(n)
                );
              },
              unparse: function (e, t) {
                var n = !1,
                  o = !0,
                  i = ",",
                  l = "\r\n",
                  s = '"',
                  a = s + s,
                  u = !1,
                  d = null,
                  g = !1;
                !(function () {
                  if ("object" == typeof t) {
                    if (
                      ("string" != typeof t.delimiter ||
                        r.BAD_DELIMITERS.filter(function (e) {
                          return -1 !== t.delimiter.indexOf(e);
                        }).length ||
                        (i = t.delimiter),
                      ("boolean" == typeof t.quotes ||
                        "function" == typeof t.quotes ||
                        Array.isArray(t.quotes)) &&
                        (n = t.quotes),
                      ("boolean" != typeof t.skipEmptyLines &&
                        "string" != typeof t.skipEmptyLines) ||
                        (u = t.skipEmptyLines),
                      "string" == typeof t.newline && (l = t.newline),
                      "string" == typeof t.quoteChar && (s = t.quoteChar),
                      "boolean" == typeof t.header && (o = t.header),
                      Array.isArray(t.columns))
                    ) {
                      if (0 === t.columns.length)
                        throw new Error("Option columns is empty");
                      d = t.columns;
                    }
                    void 0 !== t.escapeChar && (a = t.escapeChar + s),
                      ("boolean" == typeof t.escapeFormulae ||
                        t.escapeFormulae instanceof RegExp) &&
                        (g =
                          t.escapeFormulae instanceof RegExp
                            ? t.escapeFormulae
                            : /^[=+\-@\t\r].*$/);
                  }
                })();
                var c = new RegExp(f(s), "g");
                if (
                  ("string" == typeof e && (e = JSON.parse(e)),
                  Array.isArray(e))
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
                  var r = "";
                  "string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t));
                  var s = Array.isArray(e) && 0 < e.length,
                    a = !Array.isArray(t[0]);
                  if (s && o) {
                    for (var u = 0; u < e.length; u++)
                      0 < u && (r += i), (r += p(e[u], u));
                    0 < t.length && (r += l);
                  }
                  for (var d = 0; d < t.length; d++) {
                    var g = s ? e.length : t[d].length,
                      c = !1,
                      h = s
                        ? 0 === Object.keys(t[d]).length
                        : 0 === t[d].length;
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
                      for (var b = 0; b < g; b++) {
                        0 < b && !h && (r += i);
                        var w = s && a ? e[b] : b;
                        r += p(t[d][w], b);
                      }
                      d < t.length - 1 && (!n || (0 < g && !h)) && (r += l);
                    }
                  }
                  return r;
                }
                function p(e, t) {
                  if (null == e) return "";
                  if (e.constructor === Date)
                    return JSON.stringify(e).slice(1, 25);
                  var o = !1;
                  g &&
                    "string" == typeof e &&
                    g.test(e) &&
                    ((e = "'" + e), (o = !0));
                  var l = e.toString().replace(c, a);
                  return (o =
                    o ||
                    !0 === n ||
                    ("function" == typeof n && n(e, t)) ||
                    (Array.isArray(n) && n[t]) ||
                    (function (e, t) {
                      for (var n = 0; n < t.length; n++)
                        if (-1 < e.indexOf(t[n])) return !0;
                      return !1;
                    })(l, r.BAD_DELIMITERS) ||
                    -1 < l.indexOf(i) ||
                    " " === l.charAt(0) ||
                    " " === l.charAt(l.length - 1))
                    ? s + l + s
                    : l;
                }
              },
            };
          if (
            ((r.RECORD_SEP = String.fromCharCode(30)),
            (r.UNIT_SEP = String.fromCharCode(31)),
            (r.BYTE_ORDER_MARK = "\ufeff"),
            (r.BAD_DELIMITERS = ["\r", "\n", '"', r.BYTE_ORDER_MARK]),
            (r.WORKERS_SUPPORTED = !n && !!t.Worker),
            (r.NODE_STREAM_INPUT = 1),
            (r.LocalChunkSize = 10485760),
            (r.RemoteChunkSize = 5242880),
            (r.DefaultDelimiter = ","),
            (r.Parser = p),
            (r.ParserHandle = h),
            (r.NetworkStreamer = u),
            (r.FileStreamer = d),
            (r.StringStreamer = g),
            (r.ReadableStreamStreamer = c),
            t.jQuery)
          ) {
            var s = t.jQuery;
            s.fn.parse = function (e) {
              var n = e.config || {},
                o = [];
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
                  for (var i = 0; i < this.files.length; i++)
                    o.push({
                      file: this.files[i],
                      inputElem: this,
                      instanceConfig: s.extend({}, n),
                    });
                }),
                i(),
                this
              );
              function i() {
                if (0 !== o.length) {
                  var t,
                    n,
                    i,
                    a,
                    u = o[0];
                  if (C(e.before)) {
                    var d = e.before(u.file, u.inputElem);
                    if ("object" == typeof d) {
                      if ("abort" === d.action)
                        return (
                          (t = "AbortError"),
                          (n = u.file),
                          (i = u.inputElem),
                          (a = d.reason),
                          void (C(e.error) && e.error({ name: t }, n, i, a))
                        );
                      if ("skip" === d.action) return void l();
                      "object" == typeof d.config &&
                        (u.instanceConfig = s.extend(
                          u.instanceConfig,
                          d.config,
                        ));
                    } else if ("skip" === d) return void l();
                  }
                  var g = u.instanceConfig.complete;
                  (u.instanceConfig.complete = function (e) {
                    C(g) && g(e, u.file, u.inputElem), l();
                  }),
                    r.parse(u.file, u.instanceConfig);
                } else C(e.complete) && e.complete();
              }
              function l() {
                o.splice(0, 1), i();
              }
            };
          }
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
                var t = w(e);
                (t.chunkSize = parseInt(t.chunkSize)),
                  e.step || e.chunk || (t.chunkSize = null),
                  (this._handle = new h(t)),
                  ((this._handle.streamer = this)._config = t);
              }.call(this, e),
              (this.parseChunk = function (e, n) {
                if (this.isFirstChunk && C(this._config.beforeFirstChunk)) {
                  var i = this._config.beforeFirstChunk(e);
                  void 0 !== i && (e = i);
                }
                (this.isFirstChunk = !1), (this._halted = !1);
                var l = this._partialLine + e;
                this._partialLine = "";
                var s = this._handle.parse(l, this._baseIndex, !this._finished);
                if (!this._handle.paused() && !this._handle.aborted()) {
                  var a = s.meta.cursor;
                  this._finished ||
                    ((this._partialLine = l.substring(a - this._baseIndex)),
                    (this._baseIndex = a)),
                    s && s.data && (this._rowCount += s.data.length);
                  var u =
                    this._finished ||
                    (this._config.preview &&
                      this._rowCount >= this._config.preview);
                  if (o)
                    t.postMessage({
                      results: s,
                      workerId: r.WORKER_ID,
                      finished: u,
                    });
                  else if (C(this._config.chunk) && !n) {
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
                      !u ||
                      !C(this._config.complete) ||
                      (s && s.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    u || (s && s.meta.paused) || this._nextChunk(),
                    s
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                C(this._config.error)
                  ? this._config.error(e)
                  : o &&
                    this._config.error &&
                    t.postMessage({
                      workerId: r.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function u(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = r.RemoteChunkSize),
              a.call(this, e),
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
                      ((t.onload = S(this._chunkLoaded, this)),
                      (t.onerror = S(this._chunkError, this))),
                    t.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !n,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var e = this._config.downloadRequestHeaders;
                    for (var o in e) t.setRequestHeader(o, e[o]);
                  }
                  if (this._config.chunkSize) {
                    var i = this._start + this._config.chunkSize - 1;
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + i,
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
          function d(e) {
            var t, n;
            (e = e || {}).chunkSize || (e.chunkSize = r.LocalChunkSize),
              a.call(this, e);
            var o = "undefined" != typeof FileReader;
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
                var e = this._input;
                if (this._config.chunkSize) {
                  var i = Math.min(
                    this._start + this._config.chunkSize,
                    this._input.size,
                  );
                  e = n.call(e, this._start, i);
                }
                var l = t.readAsText(e, this._config.encoding);
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
              i = Math.pow(2, 53),
              l = -i,
              s = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              a =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              u = this,
              d = 0,
              g = 0,
              c = !1,
              h = !1,
              m = [],
              v = { data: [], errors: [], meta: {} };
            if (C(e.step)) {
              var b = e.step;
              e.step = function (t) {
                if (((v = t), _())) R();
                else {
                  if ((R(), 0 === v.data.length)) return;
                  (d += t.data.length),
                    e.preview && d > e.preview
                      ? n.abort()
                      : ((v.data = v.data[0]), b(v, u));
                }
              };
            }
            function S(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function R() {
              return (
                v &&
                  o &&
                  (F(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      r.DefaultDelimiter +
                      "'",
                  ),
                  (o = !1)),
                e.skipEmptyLines &&
                  (v.data = v.data.filter(function (e) {
                    return !S(e);
                  })),
                _() &&
                  (function () {
                    if (v)
                      if (Array.isArray(v.data[0])) {
                        for (var t = 0; _() && t < v.data.length; t++)
                          v.data[t].forEach(n);
                        v.data.splice(0, 1);
                      } else v.data.forEach(n);
                    function n(t, n) {
                      C(e.transformHeader) && (t = e.transformHeader(t, n)),
                        m.push(t);
                    }
                  })(),
                (function () {
                  if (!v || (!e.header && !e.dynamicTyping && !e.transform))
                    return v;
                  function t(t, n) {
                    var o,
                      i = e.header ? {} : [];
                    for (o = 0; o < t.length; o++) {
                      var l = o,
                        r = t[o];
                      e.header && (l = o >= m.length ? "__parsed_extra" : m[o]),
                        e.transform && (r = e.transform(r, l)),
                        (r = y(l, r)),
                        "__parsed_extra" === l
                          ? ((i[l] = i[l] || []), i[l].push(r))
                          : (i[l] = r);
                    }
                    return (
                      e.header &&
                        (o > m.length
                          ? F(
                              "FieldMismatch",
                              "TooManyFields",
                              "Too many fields: expected " +
                                m.length +
                                " fields but parsed " +
                                o,
                              g + n,
                            )
                          : o < m.length &&
                            F(
                              "FieldMismatch",
                              "TooFewFields",
                              "Too few fields: expected " +
                                m.length +
                                " fields but parsed " +
                                o,
                              g + n,
                            )),
                      i
                    );
                  }
                  var n = 1;
                  return (
                    !v.data.length || Array.isArray(v.data[0])
                      ? ((v.data = v.data.map(t)), (n = v.data.length))
                      : (v.data = t(v.data, 0)),
                    e.header && v.meta && (v.meta.fields = m),
                    (g += n),
                    v
                  );
                })()
              );
            }
            function _() {
              return e.header && 0 === m.length;
            }
            function y(t, n) {
              return (
                (o = t),
                e.dynamicTypingFunction &&
                  void 0 === e.dynamicTyping[o] &&
                  (e.dynamicTyping[o] = e.dynamicTypingFunction(o)),
                !0 === (e.dynamicTyping[o] || e.dynamicTyping)
                  ? "true" === n ||
                    "TRUE" === n ||
                    ("false" !== n &&
                      "FALSE" !== n &&
                      ((function (e) {
                        if (s.test(e)) {
                          var t = parseFloat(e);
                          if (l < t && t < i) return !0;
                        }
                        return !1;
                      })(n)
                        ? parseFloat(n)
                        : a.test(n)
                          ? new Date(n)
                          : "" === n
                            ? null
                            : n))
                  : n
              );
              var o;
            }
            function F(e, t, n, o) {
              var i = { type: e, code: t, message: n };
              void 0 !== o && (i.row = o), v.errors.push(i);
            }
            (this.parse = function (i, l, s) {
              var a = e.quoteChar || '"';
              if (
                (e.newline ||
                  (e.newline = (function (e, t) {
                    e = e.substring(0, 1048576);
                    var n = new RegExp(f(t) + "([^]*?)" + f(t), "gm"),
                      o = (e = e.replace(n, "")).split("\r"),
                      i = e.split("\n"),
                      l = 1 < i.length && i[0].length < o[0].length;
                    if (1 === o.length || l) return "\n";
                    for (var r = 0, s = 0; s < o.length; s++)
                      "\n" === o[s][0] && r++;
                    return r >= o.length / 2 ? "\r\n" : "\r";
                  })(i, a)),
                (o = !1),
                e.delimiter)
              )
                C(e.delimiter) &&
                  ((e.delimiter = e.delimiter(i)),
                  (v.meta.delimiter = e.delimiter));
              else {
                var u = (function (t, n, o, i, l) {
                  var s, a, u, d;
                  l = l || [",", "\t", "|", ";", r.RECORD_SEP, r.UNIT_SEP];
                  for (var g = 0; g < l.length; g++) {
                    var c = l[g],
                      h = 0,
                      f = 0,
                      m = 0;
                    u = void 0;
                    for (
                      var v = new p({
                          comments: i,
                          delimiter: c,
                          newline: n,
                          preview: 10,
                        }).parse(t),
                        b = 0;
                      b < v.data.length;
                      b++
                    )
                      if (o && S(v.data[b])) m++;
                      else {
                        var w = v.data[b].length;
                        (f += w),
                          void 0 !== u
                            ? 0 < w && ((h += Math.abs(w - u)), (u = w))
                            : (u = w);
                      }
                    0 < v.data.length && (f /= v.data.length - m),
                      (void 0 === a || h <= a) &&
                        (void 0 === d || d < f) &&
                        1.99 < f &&
                        ((a = h), (s = c), (d = f));
                  }
                  return { successful: !!(e.delimiter = s), bestDelimiter: s };
                })(
                  i,
                  e.newline,
                  e.skipEmptyLines,
                  e.comments,
                  e.delimitersToGuess,
                );
                u.successful
                  ? (e.delimiter = u.bestDelimiter)
                  : ((o = !0), (e.delimiter = r.DefaultDelimiter)),
                  (v.meta.delimiter = e.delimiter);
              }
              var d = w(e);
              return (
                e.preview && e.header && d.preview++,
                (t = i),
                (n = new p(d)),
                (v = n.parse(t, l, s)),
                R(),
                c ? { meta: { paused: !0 } } : v || { meta: { paused: !1 } }
              );
            }),
              (this.paused = function () {
                return c;
              }),
              (this.pause = function () {
                (c = !0),
                  n.abort(),
                  (t = C(e.chunk) ? "" : t.substring(n.getCharIndex()));
              }),
              (this.resume = function () {
                u.streamer._halted
                  ? ((c = !1), u.streamer.parseChunk(t, !0))
                  : setTimeout(u.resume, 3);
              }),
              (this.aborted = function () {
                return h;
              }),
              (this.abort = function () {
                (h = !0),
                  n.abort(),
                  (v.meta.aborted = !0),
                  C(e.complete) && e.complete(v),
                  (t = "");
              });
          }
          function f(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function p(e) {
            var t,
              n = (e = e || {}).delimiter,
              o = e.newline,
              i = e.comments,
              l = e.step,
              s = e.preview,
              a = e.fastMode,
              u = (t =
                void 0 === e.quoteChar || null === e.quoteChar
                  ? '"'
                  : e.quoteChar);
            if (
              (void 0 !== e.escapeChar && (u = e.escapeChar),
              ("string" != typeof n || -1 < r.BAD_DELIMITERS.indexOf(n)) &&
                (n = ","),
              i === n)
            )
              throw new Error("Comment character same as delimiter");
            !0 === i
              ? (i = "#")
              : ("string" != typeof i || -1 < r.BAD_DELIMITERS.indexOf(i)) &&
                (i = !1),
              "\n" !== o && "\r" !== o && "\r\n" !== o && (o = "\n");
            var d = 0,
              g = !1;
            (this.parse = function (r, c, h) {
              if ("string" != typeof r)
                throw new Error("Input must be a string");
              var p = r.length,
                m = n.length,
                v = o.length,
                b = i.length,
                w = C(l),
                S = [],
                R = [],
                _ = [],
                y = (d = 0);
              if (!r) return $();
              if (e.header && !c) {
                var F = r.split(o)[0].split(n),
                  x = [],
                  I = {},
                  E = !1;
                for (var M in F) {
                  var O = F[M];
                  C(e.transformHeader) && (O = e.transformHeader(O, M));
                  var P = O,
                    V = I[O] || 0;
                  for (
                    0 < V && ((E = !0), (P = O + "_" + V)), I[O] = V + 1;
                    x.includes(P);
                  )
                    P = P + "_" + V;
                  x.push(P);
                }
                if (E) {
                  var z = r.split(o);
                  (z[0] = x.join(n)), (r = z.join(o));
                }
              }
              if (a || (!1 !== a && -1 === r.indexOf(t))) {
                for (var k = r.split(o), A = 0; A < k.length; A++) {
                  if (((_ = k[A]), (d += _.length), A !== k.length - 1))
                    d += o.length;
                  else if (h) return $();
                  if (!i || _.substring(0, b) !== i) {
                    if (w) {
                      if (((S = []), B(_.split(n)), W(), g)) return $();
                    } else B(_.split(n));
                    if (s && s <= A) return (S = S.slice(0, s)), $(!0);
                  }
                }
                return $();
              }
              for (
                var D = r.indexOf(n, d),
                  L = r.indexOf(o, d),
                  T = new RegExp(f(u) + f(t), "g"),
                  H = r.indexOf(t, d);
                ;
              )
                if (r[d] !== t)
                  if (i && 0 === _.length && r.substring(d, d + b) === i) {
                    if (-1 === L) return $();
                    (d = L + v), (L = r.indexOf(o, d)), (D = r.indexOf(n, d));
                  } else if (-1 !== D && (D < L || -1 === L))
                    _.push(r.substring(d, D)),
                      (d = D + m),
                      (D = r.indexOf(n, d));
                  else {
                    if (-1 === L) break;
                    if ((_.push(r.substring(d, L)), N(L + v), w && (W(), g)))
                      return $();
                    if (s && S.length >= s) return $(!0);
                  }
                else
                  for (H = d, d++; ; ) {
                    if (-1 === (H = r.indexOf(t, H + 1)))
                      return (
                        h ||
                          R.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: S.length,
                            index: d,
                          }),
                        U()
                      );
                    if (H === p - 1) return U(r.substring(d, H).replace(T, t));
                    if (t !== u || r[H + 1] !== u) {
                      if (t === u || 0 === H || r[H - 1] !== u) {
                        -1 !== D && D < H + 1 && (D = r.indexOf(n, H + 1)),
                          -1 !== L && L < H + 1 && (L = r.indexOf(o, H + 1));
                        var G = q(-1 === L ? D : Math.min(D, L));
                        if (r.substr(H + 1 + G, m) === n) {
                          _.push(r.substring(d, H).replace(T, t)),
                            r[(d = H + 1 + G + m)] !== t &&
                              (H = r.indexOf(t, d)),
                            (D = r.indexOf(n, d)),
                            (L = r.indexOf(o, d));
                          break;
                        }
                        var j = q(L);
                        if (r.substring(H + 1 + j, H + 1 + j + v) === o) {
                          if (
                            (_.push(r.substring(d, H).replace(T, t)),
                            N(H + 1 + j + v),
                            (D = r.indexOf(n, d)),
                            (H = r.indexOf(t, d)),
                            w && (W(), g))
                          )
                            return $();
                          if (s && S.length >= s) return $(!0);
                          break;
                        }
                        R.push({
                          type: "Quotes",
                          code: "InvalidQuotes",
                          message:
                            "Trailing quote on quoted field is malformed",
                          row: S.length,
                          index: d,
                        }),
                          H++;
                      }
                    } else H++;
                  }
              return U();
              function B(e) {
                S.push(e), (y = d);
              }
              function q(e) {
                var t = 0;
                if (-1 !== e) {
                  var n = r.substring(H + 1, e);
                  n && "" === n.trim() && (t = n.length);
                }
                return t;
              }
              function U(e) {
                return (
                  h ||
                    (void 0 === e && (e = r.substring(d)),
                    _.push(e),
                    (d = p),
                    B(_),
                    w && W()),
                  $()
                );
              }
              function N(e) {
                (d = e), B(_), (_ = []), (L = r.indexOf(o, d));
              }
              function $(e) {
                return {
                  data: S,
                  errors: R,
                  meta: {
                    delimiter: n,
                    linebreak: o,
                    aborted: g,
                    truncated: !!e,
                    cursor: y + (c || 0),
                  },
                };
              }
              function W() {
                l($()), (S = []), (R = []);
              }
            }),
              (this.abort = function () {
                g = !0;
              }),
              (this.getCharIndex = function () {
                return d;
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
                pause: b,
                resume: b,
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
          function b() {
            throw new Error("Not implemented.");
          }
          function w(e) {
            if ("object" != typeof e || null === e) return e;
            var t = Array.isArray(e) ? [] : {};
            for (var n in e) t[n] = w(e[n]);
            return t;
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
            o &&
              (t.onmessage = function (e) {
                var n = e.data;
                if (
                  (void 0 === r.WORKER_ID && n && (r.WORKER_ID = n.workerId),
                  "string" == typeof n.input)
                )
                  t.postMessage({
                    workerId: r.WORKER_ID,
                    results: r.parse(n.input, n.config),
                    finished: !0,
                  });
                else if (
                  (t.File && n.input instanceof File) ||
                  n.input instanceof Object
                ) {
                  var o = r.parse(n.input, n.config);
                  o &&
                    t.postMessage({
                      workerId: r.WORKER_ID,
                      results: o,
                      finished: !0,
                    });
                }
              }),
            ((u.prototype = Object.create(a.prototype)).constructor = u),
            ((d.prototype = Object.create(a.prototype)).constructor = d),
            ((g.prototype = Object.create(g.prototype)).constructor = g),
            ((c.prototype = Object.create(a.prototype)).constructor = c),
            r
          );
        }),
        void 0 === (i = "function" == typeof n ? n.apply(t, o) : n) ||
          (e.exports = i);
    },
    67796: (e, t, n) => {
      "use strict";
      n.d(t, { Kv: () => l, N4: () => r });
      var o = n(90626),
        i = n(16666);
      function l(e, t) {
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
          [n] = o.useState(() => ({ current: (0, i.ZR)(t) })),
          [l, r] = o.useState(() => n.current.initialState);
        return (
          n.current.setOptions((t) => ({
            ...t,
            ...e,
            state: { ...l, ...e.state },
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
      function i(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function l(e, t) {
        return (n) => {
          t.setState((t) => ({ ...t, [e]: i(n, t[e]) }));
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
              const i = t(e);
              null != i && i.length && o(i);
            });
          };
        return o(e), n;
      }
      function a(e, t, n) {
        let o,
          i = [];
        return (l) => {
          let r;
          n.key && n.debug && (r = Date.now());
          const s = e(l);
          if (!(s.length !== i.length || s.some((e, t) => i[t] !== e)))
            return o;
          let a;
          if (
            ((i = s),
            n.key && n.debug && (a = Date.now()),
            (o = t(...s)),
            null == n || null == n.onChange || n.onChange(o),
            n.key && n.debug && null != n && n.debug())
          ) {
            const e = Math.round(100 * (Date.now() - r)) / 100,
              t = Math.round(100 * (Date.now() - a)) / 100,
              o = t / 16,
              i = (e, t) => {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              `%c⏱ ${i(t, 5)} /${i(e, 5)} ms`,
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
        HT: () => X,
        ZR: () => Q,
        cU: () => Z,
        h5: () => ee,
        hM: () => Y,
      });
      const d = "debugHeaders";
      function g(e, t, n) {
        var o;
        let i = {
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
            return t(i), e;
          },
          getContext: () => ({ table: e, header: i, column: t }),
        };
        return (
          e._features.forEach((t) => {
            null == t.createHeader || t.createHeader(i, e);
          }),
          i
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
            (t, n, o, i) => {
              var l, r;
              const s =
                  null !=
                  (l =
                    null == o
                      ? void 0
                      : o.map((e) => n.find((t) => t.id === e)).filter(Boolean))
                    ? l
                    : [],
                a =
                  null !=
                  (r =
                    null == i
                      ? void 0
                      : i.map((e) => n.find((t) => t.id === e)).filter(Boolean))
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
                        (null != i && i.includes(e.id))
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
              (t, n, o, i) =>
                h(
                  t,
                  (n = n.filter(
                    (e) =>
                      !(
                        (null != o && o.includes(e.id)) ||
                        (null != i && i.includes(e.id))
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
                var i;
                return h(
                  t,
                  null !=
                    (i =
                      null == o
                        ? void 0
                        : o
                            .map((e) => n.find((t) => t.id === e))
                            .filter(Boolean))
                    ? i
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
                var i;
                return h(
                  t,
                  null !=
                    (i =
                      null == o
                        ? void 0
                        : o
                            .map((e) => n.find((t) => t.id === e))
                            .filter(Boolean))
                    ? i
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
                var o, i, l, r, s, a;
                return [
                  ...(null != (o = null == (i = e[0]) ? void 0 : i.headers)
                    ? o
                    : []),
                  ...(null != (l = null == (r = t[0]) ? void 0 : r.headers)
                    ? l
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
        var i, l;
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
            const i = {
                depth: t,
                id: [o, `${t}`].filter(Boolean).join("_"),
                headers: [],
              },
              l = [];
            e.forEach((e) => {
              const r = [...l].reverse()[0];
              let s,
                a = !1;
              if (
                (e.column.depth === i.depth && e.column.parent
                  ? (s = e.column.parent)
                  : ((s = e.column), (a = !0)),
                r && (null == r ? void 0 : r.column) === s)
              )
                r.subHeaders.push(e);
              else {
                const i = g(n, s, {
                  id: [o, t, s.id, null == e ? void 0 : e.id]
                    .filter(Boolean)
                    .join("_"),
                  isPlaceholder: a,
                  placeholderId: a
                    ? `${l.filter((e) => e.column === s).length}`
                    : void 0,
                  depth: t,
                  index: l.length,
                });
                i.subHeaders.push(e), l.push(i);
              }
              i.headers.push(e), (e.headerGroup = i);
            }),
              a.push(i),
              t > 0 && u(l, t - 1);
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
                    let { colSpan: n, rowSpan: i } = e;
                    (t += n), o.push(i);
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
          c(null != (i = null == (l = a[0]) ? void 0 : l.headers) ? i : []), a
        );
      }
      const f = (e, t, n, o, i, l, r) => {
          let d = {
            id: t,
            index: o,
            original: n,
            depth: i,
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
            subRows: null != l ? l : [],
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
                    const i = {
                      id: `${t.id}_${n.id}`,
                      row: t,
                      column: n,
                      getValue: () => t.getValue(o),
                      renderValue: () => {
                        var t;
                        return null != (t = i.getValue())
                          ? t
                          : e.options.renderFallbackValue;
                      },
                      getContext: a(
                        () => [e, n, t, i],
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
                        null == o.createCell || o.createCell(i, n, t, e);
                      }, {}),
                      i
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
          var o, i;
          const l =
            null == n || null == (o = n.toString()) ? void 0 : o.toLowerCase();
          return Boolean(
            null == (i = e.getValue(t)) ||
              null == (i = i.toString()) ||
              null == (i = i.toLowerCase())
              ? void 0
              : i.includes(l),
          );
        };
      m.autoRemove = (e) => x(e);
      const v = (e, t, n) => {
        var o;
        return Boolean(
          null == (o = e.getValue(t)) || null == (o = o.toString())
            ? void 0
            : o.includes(n),
        );
      };
      v.autoRemove = (e) => x(e);
      const b = (e, t, n) => {
        var o;
        return (
          (null == (o = e.getValue(t)) || null == (o = o.toString())
            ? void 0
            : o.toLowerCase()) === (null == n ? void 0 : n.toLowerCase())
        );
      };
      b.autoRemove = (e) => x(e);
      const w = (e, t, n) => {
        var o;
        return null == (o = e.getValue(t)) ? void 0 : o.includes(n);
      };
      w.autoRemove = (e) => x(e) || !(null != e && e.length);
      const S = (e, t, n) =>
        !n.some((n) => {
          var o;
          return !(null != (o = e.getValue(t)) && o.includes(n));
        });
      S.autoRemove = (e) => x(e) || !(null != e && e.length);
      const C = (e, t, n) =>
        n.some((n) => {
          var o;
          return null == (o = e.getValue(t)) ? void 0 : o.includes(n);
        });
      C.autoRemove = (e) => x(e) || !(null != e && e.length);
      const R = (e, t, n) => e.getValue(t) === n;
      R.autoRemove = (e) => x(e);
      const _ = (e, t, n) => e.getValue(t) == n;
      _.autoRemove = (e) => x(e);
      const y = (e, t, n) => {
        let [o, i] = n;
        const l = e.getValue(t);
        return l >= o && l <= i;
      };
      (y.resolveFilterValue = (e) => {
        let [t, n] = e,
          o = "number" != typeof t ? parseFloat(t) : t,
          i = "number" != typeof n ? parseFloat(n) : n,
          l = null === t || Number.isNaN(o) ? -1 / 0 : o,
          r = null === n || Number.isNaN(i) ? 1 / 0 : i;
        if (l > r) {
          const e = l;
          (l = r), (r = e);
        }
        return [l, r];
      }),
        (y.autoRemove = (e) => x(e) || (x(e[0]) && x(e[1])));
      const F = {
        includesString: m,
        includesStringSensitive: v,
        equalsString: b,
        arrIncludes: w,
        arrIncludesAll: S,
        arrIncludesSome: C,
        equals: R,
        weakEquals: _,
        inNumberRange: y,
      };
      function x(e) {
        return null == e || "" === e;
      }
      const I = {
        getDefaultColumnDef: () => ({ filterFn: "auto" }),
        getInitialState: (e) => ({ columnFilters: [], ...e }),
        getDefaultOptions: (e) => ({
          onColumnFiltersChange: l("columnFilters", e),
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
              var n, o, i;
              return (
                (null == (n = e.columnDef.enableColumnFilter) || n) &&
                (null == (o = t.options.enableColumnFilters) || o) &&
                (null == (i = t.options.enableFilters) || i) &&
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
                  l = null == t ? void 0 : t.find((t) => t.id === e.id),
                  r = i(n, l ? l.value : void 0);
                var s;
                if (E(o, r, e))
                  return null !=
                    (s = null == t ? void 0 : t.filter((t) => t.id !== e.id))
                    ? s
                    : [];
                const a = { id: e.id, value: r };
                var u;
                return l
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
                return null == (o = i(t, e))
                  ? void 0
                  : o.filter((e) => {
                      const t = n.find((t) => t.id === e.id);
                      if (t) {
                        if (E(t.getFilterFn(), e.value, t)) return !1;
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
      function E(e, t, n) {
        return (
          (!(!e || !e.autoRemove) && e.autoRemove(t, n)) ||
          void 0 === t ||
          ("string" == typeof t && !t)
        );
      }
      const M = {
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
            let o, i;
            return (
              n.forEach((t) => {
                const n = t.getValue(e);
                null != n &&
                  (void 0 === o
                    ? n >= n && (o = i = n)
                    : (o > n && (o = n), i < n && (i = n)));
              }),
              [o, i]
            );
          },
          mean: (e, t) => {
            let n = 0,
              o = 0;
            if (
              (t.forEach((t) => {
                let i = t.getValue(e);
                null != i && (i = +i) >= i && (++n, (o += i));
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
            const i = Math.floor(n.length / 2),
              l = n.sort((e, t) => e - t);
            return n.length % 2 != 0 ? l[i] : (l[i - 1] + l[i]) / 2;
          },
          unique: (e, t) =>
            Array.from(new Set(t.map((t) => t.getValue(e))).values()),
          uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
          count: (e, t) => t.length,
        },
        O = {
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
            onGroupingChange: l("grouping", e),
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
                  ? M.sum
                  : "[object Date]" === Object.prototype.toString.call(o)
                    ? M.extent
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
                      : M[e.columnDef.aggregationFn];
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
      const P = {
          getInitialState: (e) => ({ columnOrder: [], ...e }),
          getDefaultOptions: (e) => ({
            onColumnOrderChange: l("columnOrder", e),
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
                const i = L(t, n);
                return (null == (o = i[i.length - 1]) ? void 0 : o.id) === e.id;
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
                  let i = [];
                  if (null != e && e.length) {
                    const t = [...e],
                      n = [...o];
                    for (; n.length && t.length; ) {
                      const e = t.shift(),
                        o = n.findIndex((t) => t.id === e);
                      o > -1 && i.push(n.splice(o, 1)[0]);
                    }
                    i = [...i, ...n];
                  } else i = o;
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
                  })(i, t, n);
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
            onColumnPinningChange: l("columnPinning", e),
          }),
          createColumn: (e, t) => {
            (e.pin = (n) => {
              const o = e
                .getLeafColumns()
                .map((e) => e.id)
                .filter(Boolean);
              t.setColumnPinning((e) => {
                var t, i, l, r, s, a;
                return "right" === n
                  ? {
                      left: (null != (l = null == e ? void 0 : e.left)
                        ? l
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
                        right: (null != (i = null == e ? void 0 : e.right)
                          ? i
                          : []
                        ).filter((e) => !(null != o && o.includes(e))),
                      };
              });
            }),
              (e.getCanPin = () =>
                e.getLeafColumns().some((e) => {
                  var n, o, i;
                  return (
                    (null == (n = e.columnDef.enablePinning) || n) &&
                    (null ==
                      (o =
                        null != (i = t.options.enableColumnPinning)
                          ? i
                          : t.options.enablePinning) ||
                      o)
                  );
                })),
              (e.getIsPinned = () => {
                const n = e.getLeafColumns().map((e) => e.id),
                  { left: o, right: i } = t.getState().columnPinning,
                  l = n.some((e) => (null == o ? void 0 : o.includes(e))),
                  r = n.some((e) => (null == i ? void 0 : i.includes(e)));
                return l ? "left" : !!r && "right";
              }),
              (e.getPinnedIndex = () => {
                var n, o;
                const i = e.getIsPinned();
                return i
                  ? null !=
                    (n =
                      null == (o = t.getState().columnPinning) ||
                      null == (o = o[i])
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
                var i, l;
                return t
                  ? Boolean(null == (n = o[t]) ? void 0 : n.length)
                  : Boolean(
                      (null == (i = o.left) ? void 0 : i.length) ||
                        (null == (l = o.right) ? void 0 : l.length),
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
            onColumnSizingChange: l("columnSizing", e),
            onColumnSizingInfoChange: l("columnSizingInfo", e),
          }),
          createColumn: (e, t) => {
            (e.getSize = () => {
              var n, o, i;
              const l = t.getState().columnSizing[e.id];
              return Math.min(
                Math.max(
                  null != (n = e.columnDef.minSize) ? n : z.minSize,
                  null != (o = null != l ? l : e.columnDef.size) ? o : z.size,
                ),
                null != (i = e.columnDef.maxSize) ? i : z.maxSize,
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
                  i = null == o ? void 0 : o.getCanResize();
                return (l) => {
                  if (!o || !i) return;
                  if (
                    (null == l.persist || l.persist(),
                    D(l) && l.touches && l.touches.length > 1)
                  )
                    return;
                  const r = e.getSize(),
                    s = e
                      ? e
                          .getLeafHeaders()
                          .map((e) => [e.column.id, e.column.getSize()])
                      : [[o.id, o.getSize()]],
                    a = D(l) ? Math.round(l.touches[0].clientX) : l.clientX,
                    u = {},
                    d = (e, n) => {
                      "number" == typeof n &&
                        (t.setColumnSizingInfo((e) => {
                          var o, i;
                          const l =
                              "rtl" === t.options.columnResizeDirection
                                ? -1
                                : 1,
                            r =
                              (n -
                                (null !=
                                (o = null == e ? void 0 : e.startOffset)
                                  ? o
                                  : 0)) *
                              l,
                            s = Math.max(
                              r /
                                (null != (i = null == e ? void 0 : e.startSize)
                                  ? i
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
                  D(l)
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
            onRowSelectionChange: l("rowSelection", e),
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
                    i = e.getPreGroupedRowModel().flatRows;
                  return (
                    t
                      ? i.forEach((e) => {
                          e.getCanSelect() && (o[e.id] = !0);
                        })
                      : i.forEach((e) => {
                          delete o[e.id];
                        }),
                    o
                  );
                });
              }),
              (e.toggleAllPageRowsSelected = (t) =>
                e.setRowSelection((n) => {
                  const o = void 0 !== t ? t : !e.getIsAllPageRowsSelected(),
                    i = { ...n };
                  return (
                    e.getRowModel().rows.forEach((t) => {
                      H(i, t.id, o, !0, e);
                    }),
                    i
                  );
                })),
              (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
              (e.getSelectedRowModel = a(
                () => [e.getState().rowSelection, e.getCoreRowModel()],
                (t, n) =>
                  Object.keys(t).length
                    ? G(e, n)
                    : { rows: [], flatRows: [], rowsById: {} },
                u(e.options, "debugTable"),
              )),
              (e.getFilteredSelectedRowModel = a(
                () => [e.getState().rowSelection, e.getFilteredRowModel()],
                (t, n) =>
                  Object.keys(t).length
                    ? G(e, n)
                    : { rows: [], flatRows: [], rowsById: {} },
                u(e.options, "debugTable"),
              )),
              (e.getGroupedSelectedRowModel = a(
                () => [e.getState().rowSelection, e.getSortedRowModel()],
                (t, n) =>
                  Object.keys(t).length
                    ? G(e, n)
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
              const i = e.getIsSelected();
              t.setRowSelection((l) => {
                var r;
                if (((n = void 0 !== n ? n : !i), e.getCanSelect() && i === n))
                  return l;
                const s = { ...l };
                return (
                  H(
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
                return j(e, n);
              }),
              (e.getIsSomeSelected = () => {
                const { rowSelection: n } = t.getState();
                return "some" === B(e, n);
              }),
              (e.getIsAllSubRowsSelected = () => {
                const { rowSelection: n } = t.getState();
                return "all" === B(e, n);
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
        H = (e, t, n, o, i) => {
          var l;
          const r = i.getRow(t, !0);
          n
            ? (r.getCanMultiSelect() ||
                Object.keys(e).forEach((t) => delete e[t]),
              r.getCanSelect() && (e[t] = !0))
            : delete e[t],
            o &&
              null != (l = r.subRows) &&
              l.length &&
              r.getCanSelectSubRows() &&
              r.subRows.forEach((t) => H(e, t.id, n, o, i));
        };
      function G(e, t) {
        const n = e.getState().rowSelection,
          o = [],
          i = {},
          l = function (e, t) {
            return e
              .map((e) => {
                var t;
                const r = j(e, n);
                if (
                  (r && (o.push(e), (i[e.id] = e)),
                  null != (t = e.subRows) &&
                    t.length &&
                    (e = { ...e, subRows: l(e.subRows) }),
                  r)
                )
                  return e;
              })
              .filter(Boolean);
          };
        return { rows: l(t.rows), flatRows: o, rowsById: i };
      }
      function j(e, t) {
        var n;
        return null != (n = t[e.id]) && n;
      }
      function B(e, t, n) {
        var o;
        if (null == (o = e.subRows) || !o.length) return !1;
        let i = !0,
          l = !1;
        return (
          e.subRows.forEach((e) => {
            if (
              (!l || i) &&
              (e.getCanSelect() && (j(e, t) ? (l = !0) : (i = !1)),
              e.subRows && e.subRows.length)
            ) {
              const n = B(e, t);
              "all" === n
                ? (l = !0)
                : "some" === n
                  ? ((l = !0), (i = !1))
                  : (i = !1);
            }
          }),
          i ? "all" : !!l && "some"
        );
      }
      const q = /([0-9]+)/gm;
      function U(e, t) {
        return e === t ? 0 : e > t ? 1 : -1;
      }
      function N(e) {
        return "number" == typeof e
          ? isNaN(e) || e === 1 / 0 || e === -1 / 0
            ? ""
            : String(e)
          : "string" == typeof e
            ? e
            : "";
      }
      function $(e, t) {
        const n = e.split(q).filter(Boolean),
          o = t.split(q).filter(Boolean);
        for (; n.length && o.length; ) {
          const e = n.shift(),
            t = o.shift(),
            i = parseInt(e, 10),
            l = parseInt(t, 10),
            r = [i, l].sort();
          if (isNaN(r[0])) {
            if (e > t) return 1;
            if (t > e) return -1;
          } else {
            if (isNaN(r[1])) return isNaN(i) ? -1 : 1;
            if (i > l) return 1;
            if (l > i) return -1;
          }
        }
        return n.length - o.length;
      }
      const W = {
          alphanumeric: (e, t, n) =>
            $(N(e.getValue(n)).toLowerCase(), N(t.getValue(n)).toLowerCase()),
          alphanumericCaseSensitive: (e, t, n) =>
            $(N(e.getValue(n)), N(t.getValue(n))),
          text: (e, t, n) =>
            U(N(e.getValue(n)).toLowerCase(), N(t.getValue(n)).toLowerCase()),
          textCaseSensitive: (e, t, n) => U(N(e.getValue(n)), N(t.getValue(n))),
          datetime: (e, t, n) => {
            const o = e.getValue(n),
              i = t.getValue(n);
            return o > i ? 1 : o < i ? -1 : 0;
          },
          basic: (e, t, n) => U(e.getValue(n), t.getValue(n)),
        },
        K = [
          c,
          {
            getInitialState: (e) => ({ columnVisibility: {}, ...e }),
            getDefaultOptions: (e) => ({
              onColumnVisibilityChange: l("columnVisibility", e),
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
                  const i = e.columns;
                  return (
                    null ==
                      (n = i.length
                        ? i.some((e) => e.getIsVisible())
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
          P,
          V,
          p,
          I,
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
              onGlobalFilterChange: l("globalFilter", e),
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
                var n, o, i, l;
                return (
                  (null == (n = e.columnDef.enableGlobalFilter) || n) &&
                  (null == (o = t.options.enableGlobalFilter) || o) &&
                  (null == (i = t.options.enableFilters) || i) &&
                  (null ==
                    (l =
                      null == t.options.getColumnCanGlobalFilter
                        ? void 0
                        : t.options.getColumnCanGlobalFilter(e)) ||
                    l) &&
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
              onSortingChange: l("sorting", e),
              isMultiSortEvent: (e) => e.shiftKey,
            }),
            createColumn: (e, t) => {
              (e.getAutoSortingFn = () => {
                const n = t.getFilteredRowModel().flatRows.slice(10);
                let o = !1;
                for (const t of n) {
                  const n = null == t ? void 0 : t.getValue(e.id);
                  if ("[object Date]" === Object.prototype.toString.call(n))
                    return W.datetime;
                  if ("string" == typeof n && ((o = !0), n.split(q).length > 1))
                    return W.alphanumeric;
                }
                return o ? W.text : W.basic;
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
                        : W[e.columnDef.sortingFn];
                }),
                (e.toggleSorting = (n, o) => {
                  const i = e.getNextSortingOrder(),
                    l = null != n;
                  t.setSorting((r) => {
                    const s = null == r ? void 0 : r.find((t) => t.id === e.id),
                      a =
                        null == r ? void 0 : r.findIndex((t) => t.id === e.id);
                    let u,
                      d = [],
                      g = l ? n : "desc" === i;
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
                    "toggle" === u && (l || i || (u = "remove")),
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
                  var o, i;
                  const l = e.getFirstSortDir(),
                    r = e.getIsSorted();
                  return r
                    ? !!(
                        r === l ||
                        (null != (o = t.options.enableSortingRemoval) && !o) ||
                        (n && null != (i = t.options.enableMultiRemove) && !i)
                      ) && ("desc" === r ? "asc" : "desc")
                    : l;
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
          O,
          {
            getInitialState: (e) => ({ expanded: {}, ...e }),
            getDefaultOptions: (e) => ({
              onExpandedChange: l("expanded", e),
              paginateExpandedRows: !0,
            }),
            createTable: (e) => {
              let t = !1,
                n = !1;
              (e._autoResetExpanded = () => {
                var o, i;
                if (t) {
                  if (
                    null !=
                    (o =
                      null != (i = e.options.autoResetAll)
                        ? i
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
                  var i;
                  const l = !0 === o || !(null == o || !o[e.id]);
                  let r = {};
                  if (
                    (!0 === o
                      ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
                          r[e] = !0;
                        })
                      : (r = o),
                    (n = null != (i = n) ? i : !l),
                    !l && n)
                  )
                    return { ...r, [e.id]: !0 };
                  if (l && !n) {
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
                  var n, o, i;
                  return null !=
                    (n =
                      null == t.options.getRowCanExpand
                        ? void 0
                        : t.options.getRowCanExpand(e))
                    ? n
                    : (null == (o = t.options.enableExpanding) || o) &&
                        !(null == (i = e.subRows) || !i.length);
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
              onPaginationChange: l("pagination", e),
            }),
            createTable: (e) => {
              let t = !1,
                n = !1;
              (e._autoResetPageIndex = () => {
                var o, i;
                if (t) {
                  if (
                    null !=
                    (o =
                      null != (i = e.options.autoResetAll)
                        ? i
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
                    : e.options.onPaginationChange((e) => i(t, e))),
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
                    let o = i(t, n.pageIndex);
                    const l =
                      void 0 === e.options.pageCount ||
                      -1 === e.options.pageCount
                        ? Number.MAX_SAFE_INTEGER
                        : e.options.pageCount - 1;
                    return (
                      (o = Math.max(0, Math.min(o, l))), { ...n, pageIndex: o }
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
                    const n = Math.max(1, i(t, e.pageSize)),
                      o = e.pageSize * e.pageIndex,
                      l = Math.floor(o / n);
                    return { ...e, pageIndex: l, pageSize: n };
                  });
                }),
                (e.setPageCount = (t) =>
                  e.setPagination((n) => {
                    var o;
                    let l = i(t, null != (o = e.options.pageCount) ? o : -1);
                    return (
                      "number" == typeof l && (l = Math.max(-1, l)),
                      { ...n, pageCount: l }
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
              onRowPinningChange: l("rowPinning", e),
            }),
            createRow: (e, t) => {
              (e.pin = (n, o, i) => {
                const l = o
                    ? e.getLeafRows().map((e) => {
                        let { id: t } = e;
                        return t;
                      })
                    : [],
                  r = i
                    ? e.getParentRows().map((e) => {
                        let { id: t } = e;
                        return t;
                      })
                    : [],
                  s = new Set([...r, e.id, ...l]);
                t.setRowPinning((e) => {
                  var t, o, i, l, r, a;
                  return "bottom" === n
                    ? {
                        top: (null != (i = null == e ? void 0 : e.top)
                          ? i
                          : []
                        ).filter((e) => !(null != s && s.has(e))),
                        bottom: [
                          ...(null != (l = null == e ? void 0 : e.bottom)
                            ? l
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
                  const { enableRowPinning: o, enablePinning: i } = t.options;
                  return "function" == typeof o
                    ? o(e)
                    : null == (n = null != o ? o : i) || n;
                }),
                (e.getIsPinned = () => {
                  const n = [e.id],
                    { top: o, bottom: i } = t.getState().rowPinning,
                    l = n.some((e) => (null == o ? void 0 : o.includes(e))),
                    r = n.some((e) => (null == i ? void 0 : i.includes(e)));
                  return l ? "top" : !!r && "bottom";
                }),
                (e.getPinnedIndex = () => {
                  var n, o;
                  const i = e.getIsPinned();
                  if (!i) return -1;
                  const l =
                    null ==
                    (n = "top" === i ? t.getTopRows() : t.getBottomRows())
                      ? void 0
                      : n.map((e) => {
                          let { id: t } = e;
                          return t;
                        });
                  return null != (o = null == l ? void 0 : l.indexOf(e.id))
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
                  var i, l;
                  return t
                    ? Boolean(null == (n = o[t]) ? void 0 : n.length)
                    : Boolean(
                        (null == (i = o.top) ? void 0 : i.length) ||
                          (null == (l = o.bottom) ? void 0 : l.length),
                      );
                }),
                (e._getPinnedRows = (t, n, o) => {
                  var i;
                  return (
                    null == (i = e.options.keepPinnedRows) || i
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
      function Q(e) {
        var t, n;
        const o = [...K, ...(null != (t = e._features) ? t : [])];
        let l = { _features: o };
        const r = l._features.reduce(
          (e, t) =>
            Object.assign(
              e,
              null == t.getDefaultOptions ? void 0 : t.getDefaultOptions(l),
            ),
          {},
        );
        let s = { ...(null != (n = e.initialState) ? n : {}) };
        l._features.forEach((e) => {
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
            l.setState(l.initialState);
          },
          setOptions: (e) => {
            const t = i(e, l.options);
            l.options = ((e) =>
              l.options.mergeOptions
                ? l.options.mergeOptions(r, e)
                : { ...r, ...e })(t);
          },
          getState: () => l.options.state,
          setState: (e) => {
            null == l.options.onStateChange || l.options.onStateChange(e);
          },
          _getRowId: (e, t, n) => {
            var o;
            return null !=
              (o =
                null == l.options.getRowId
                  ? void 0
                  : l.options.getRowId(e, t, n))
              ? o
              : `${n ? [n.id, t].join(".") : t}`;
          },
          getCoreRowModel: () => (
            l._getCoreRowModel ||
              (l._getCoreRowModel = l.options.getCoreRowModel(l)),
            l._getCoreRowModel()
          ),
          getRowModel: () => l.getPaginationRowModel(),
          getRow: (e, t) => {
            let n = (t ? l.getPrePaginationRowModel() : l.getRowModel())
              .rowsById[e];
            if (!n && ((n = l.getCoreRowModel().rowsById[e]), !n))
              throw new Error();
            return n;
          },
          _getDefaultColumnDef: a(
            () => [l.options.defaultColumn],
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
                  ...l._features.reduce(
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
          _getColumnDefs: () => l.options.columns,
          getAllColumns: a(
            () => [l._getColumnDefs()],
            (e) => {
              const t = function (e, n, o) {
                return (
                  void 0 === o && (o = 0),
                  e.map((e) => {
                    const i = (function (e, t, n, o) {
                        var i, l;
                        const r = { ...e._getDefaultColumnDef(), ...t },
                          s = r.accessorKey;
                        let d,
                          g =
                            null !=
                            (i =
                              null != (l = r.id)
                                ? l
                                : s
                                  ? "function" ==
                                    typeof String.prototype.replaceAll
                                    ? s.replaceAll(".", "_")
                                    : s.replace(/\./g, "_")
                                  : void 0)
                              ? i
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
                      })(l, e, o, n),
                      r = e;
                    return (
                      (i.columns = r.columns ? t(r.columns, i, o + 1) : []), i
                    );
                  })
                );
              };
              return t(e);
            },
            u(e, "debugColumns"),
          ),
          getAllFlatColumns: a(
            () => [l.getAllColumns()],
            (e) => e.flatMap((e) => e.getFlatColumns()),
            u(e, "debugColumns"),
          ),
          _getAllFlatColumnsById: a(
            () => [l.getAllFlatColumns()],
            (e) => e.reduce((e, t) => ((e[t.id] = t), e), {}),
            u(e, "debugColumns"),
          ),
          getAllLeafColumns: a(
            () => [l.getAllColumns(), l._getOrderColumnsFn()],
            (e, t) => t(e.flatMap((e) => e.getLeafColumns())),
            u(e, "debugColumns"),
          ),
          getColumn: (e) => l._getAllFlatColumnsById()[e],
        };
        Object.assign(l, c);
        for (let e = 0; e < l._features.length; e++) {
          const t = l._features[e];
          null == t || null == t.createTable || t.createTable(l);
        }
        return l;
      }
      function X() {
        return (e) =>
          a(
            () => [e.options.data],
            (t) => {
              const n = { rows: [], flatRows: [], rowsById: {} },
                o = function (t, i, l) {
                  void 0 === i && (i = 0);
                  const r = [];
                  for (let a = 0; a < t.length; a++) {
                    const u = f(
                      e,
                      e._getRowId(t[a], a, l),
                      t[a],
                      a,
                      i,
                      void 0,
                      null == l ? void 0 : l.id,
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
                          (u.subRows = o(u.originalSubRows, i + 1, u));
                  }
                  return r;
                };
              return (n.rows = o(t)), n;
            },
            u(e.options, "debugTable", 0, () => e._autoResetPageIndex()),
          );
      }
      function J(e, t, n) {
        return n.options.filterFromLeafRows
          ? (function (e, t, n) {
              var o;
              const i = [],
                l = {},
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
                        a.push(g), (l[g.id] = g), i.push(g);
                        continue;
                      }
                      if (t(g) || c.subRows.length) {
                        a.push(g), (l[g.id] = g), i.push(g);
                        continue;
                      }
                    } else
                      (g = c), t(g) && (a.push(g), (l[g.id] = g), i.push(g));
                  }
                  return a;
                };
              return { rows: s(e), flatRows: i, rowsById: l };
            })(e, t, n)
          : (function (e, t, n) {
              var o;
              const i = [],
                l = {},
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
                      a.push(g), i.push(g), (l[g.id] = g);
                    }
                  }
                  return a;
                };
              return { rows: s(e), flatRows: i, rowsById: l };
            })(e, t, n);
      }
      function Y() {
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
              const i = [],
                l = [];
              (null != n ? n : []).forEach((t) => {
                var n;
                const o = e.getColumn(t.id);
                if (!o) return;
                const l = o.getFilterFn();
                l &&
                  i.push({
                    id: t.id,
                    filterFn: l,
                    resolvedValue:
                      null !=
                      (n =
                        null == l.resolveFilterValue
                          ? void 0
                          : l.resolveFilterValue(t.value))
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
                  l.push({
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
                if (((n.columnFilters = {}), i.length))
                  for (let e = 0; e < i.length; e++) {
                    u = i[e];
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
                if (l.length) {
                  for (let e = 0; e < l.length; e++) {
                    d = l[e];
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
              return J(
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
                i = [],
                l = {},
                r = function (t, n, a) {
                  if ((void 0 === n && (n = 0), n >= o.length))
                    return t.map(
                      (e) => (
                        (e.depth = n),
                        i.push(e),
                        (l[e.id] = e),
                        e.subRows && (e.subRows = r(e.subRows, n + 1, e.id)),
                        e
                      ),
                    );
                  const u = o[n],
                    d = (function (e, t) {
                      const n = new Map();
                      return e.reduce((e, n) => {
                        const o = `${n.getGroupingValue(t)}`,
                          i = e.get(o);
                        return i ? i.push(n) : e.set(o, [n]), e;
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
                            const i = e.getColumn(t),
                              l = null == i ? void 0 : i.getAggregationFn();
                            return l
                              ? ((v._groupingValuesCache[t] = l(t, m, c)),
                                v._groupingValuesCache[t])
                              : void 0;
                          },
                        }),
                        p.forEach((e) => {
                          i.push(e), (l[e.id] = e);
                        }),
                        v
                      );
                    });
                  return g;
                },
                a = r(n.rows, 0);
              return (
                a.forEach((e) => {
                  i.push(e), (l[e.id] = e);
                }),
                { rows: a, flatRows: i, rowsById: l }
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
                i = [],
                l = o.filter((t) => {
                  var n;
                  return null == (n = e.getColumn(t.id))
                    ? void 0
                    : n.getCanSort();
                }),
                r = {};
              l.forEach((t) => {
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
                    for (let o = 0; o < l.length; o += 1) {
                      var n;
                      const i = l[o],
                        s = r[i.id],
                        a = s.sortUndefined,
                        u = null != (n = null == i ? void 0 : i.desc) && n;
                      let d = 0;
                      if (a) {
                        const n = void 0 === e.getValue(i.id),
                          o = void 0 === t.getValue(i.id);
                        if (n || o) {
                          if ("first" === a) return n ? -1 : 1;
                          if ("last" === a) return n ? 1 : -1;
                          d = n && o ? 0 : n ? a : -a;
                        }
                      }
                      if ((0 === d && (d = s.sortingFn(e, t, i.id)), 0 !== d))
                        return u && (d *= -1), s.invertSorting && (d *= -1), d;
                    }
                    return e.index - t.index;
                  }),
                  t.forEach((e) => {
                    var t;
                    i.push(e),
                      null != (t = e.subRows) &&
                        t.length &&
                        (e.subRows = s(e.subRows));
                  }),
                  t
                );
              };
              return { rows: s(n.rows), flatRows: i, rowsById: n.rowsById };
            },
            u(e.options, "debugTable", 0, () => e._autoResetPageIndex()),
          );
      }
    },
    54806: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => m });
      var o = n(90626),
        i = n(86709),
        l = n(45747),
        r = n(74500),
        s = n(57168);
      function a(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var u = class extends r.Q {
          #e;
          #t;
          #n;
          #o;
          #i;
          #l;
          #r;
          #s;
          constructor(e, t, n) {
            super(),
              (this.#e = e),
              (this.#o = n),
              (this.#n = []),
              (this.#i = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#i.forEach((e) => {
                e.subscribe((t) => {
                  this.#a(e, t);
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
          setQueries(e, t, n) {
            (this.#n = e),
              (this.#o = t),
              i.j.batch(() => {
                const e = this.#i,
                  t = this.#u(this.#n);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, n),
                );
                const o = t.map((e) => e.observer),
                  i = o.map((e) => e.getCurrentResult()),
                  l = o.some((t, n) => t !== e[n]);
                (e.length !== o.length || l) &&
                  ((this.#i = o),
                  (this.#t = i),
                  this.hasListeners() &&
                    (a(e, o).forEach((e) => {
                      e.destroy();
                    }),
                    a(o, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#a(e, t);
                      });
                    }),
                    this.#d()));
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
            const n = this.#u(e).map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions),
            );
            return [n, (e) => this.#g(e ?? n, t), () => this.#c(n, e)];
          }
          #c(e, t) {
            const n = this.#u(t);
            return n.map((t, o) => {
              const i = e[o];
              return t.defaultedQueryOptions.notifyOnChangeProps
                ? i
                : t.observer.trackResult(i, (e) => {
                    n.forEach((t) => {
                      t.observer.trackProp(e);
                    });
                  });
            });
          }
          #g(e, t) {
            return t
              ? ((this.#l && this.#t === this.#s && t === this.#r) ||
                  ((this.#r = t),
                  (this.#s = this.#t),
                  (this.#l = (0, s.BH)(this.#l, t(e)))),
                this.#l)
              : e;
          }
          #u(e) {
            const t = new Map(this.#i.map((e) => [e.options.queryHash, e])),
              n = [];
            return (
              e.forEach((e) => {
                const o = this.#e.defaultQueryOptions(e),
                  i = t.get(o.queryHash);
                if (i) n.push({ defaultedQueryOptions: o, observer: i });
                else {
                  const e = this.#i.find(
                    (e) => e.options.queryHash === o.queryHash,
                  );
                  n.push({
                    defaultedQueryOptions: o,
                    observer: e ?? new l.$(this.#e, o),
                  });
                }
              }),
              n.sort(
                (t, n) =>
                  e.findIndex(
                    (e) => e.queryHash === t.defaultedQueryOptions.queryHash,
                  ) -
                  e.findIndex(
                    (e) => e.queryHash === n.defaultedQueryOptions.queryHash,
                  ),
              )
            );
          }
          #a(e, t) {
            const n = this.#i.indexOf(e);
            -1 !== n &&
              ((this.#t = (function (e, t, n) {
                const o = e.slice(0);
                return (o[t] = n), o;
              })(this.#t, n, t)),
              this.#d());
          }
          #d() {
            if (this.hasListeners()) {
              this.#l !==
                this.#g(this.#c(this.#t, this.#n), this.#o?.combine) &&
                i.j.batch(() => {
                  this.listeners.forEach((e) => {
                    e(this.#t);
                  });
                });
            }
          }
        },
        d = n(75233),
        g = n(22730),
        c = n(43424),
        h = n(19086),
        f = n(44407),
        p = n(19866);
      function m({ queries: e, ...t }, n) {
        const r = (0, d.jE)(n),
          s = (0, g.w)(),
          a = (0, c.h)(),
          m = o.useMemo(
            () =>
              e.map((e) => {
                const t = r.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = s ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, r, s],
          );
        m.forEach((e) => {
          (0, f.jv)(e), (0, h.LJ)(e, a);
        }),
          (0, h.wZ)(a);
        const [v] = o.useState(() => new u(r, m, t)),
          [b, w, S] = v.getOptimisticResult(m, t.combine);
        o.useSyncExternalStore(
          o.useCallback(
            (e) => (s ? p.l : v.subscribe(i.j.batchCalls(e))),
            [v, s],
          ),
          () => v.getCurrentResult(),
          () => v.getCurrentResult(),
        ),
          o.useEffect(() => {
            v.setQueries(m, t, { listeners: !1 });
          }, [m, t, v]);
        const C = b.some((e, t) => (0, f.EU)(m[t], e))
          ? b.flatMap((e, t) => {
              const n = m[t];
              if (n) {
                const t = new l.$(r, n);
                if ((0, f.EU)(n, e)) return (0, f.iL)(n, t, a);
                (0, f.nE)(e, s) && (0, f.iL)(n, t, a);
              }
              return [];
            })
          : [];
        if (C.length > 0) throw Promise.all(C);
        const R = b.find((e, t) => {
          const n = m[t];
          return (
            n &&
            (0, h.$1)({
              result: e,
              errorResetBoundary: a,
              throwOnError: n.throwOnError,
              query: r.getQueryCache().get(n.queryHash),
            })
          );
        });
        if (R?.error) throw R.error;
        return w(S());
      }
    },
    92148: (e, t, n) => {
      "use strict";
      n.d(t, { Te: () => a, XW: () => u });
      var o = n(90626),
        i = n(72739),
        l = n(59366);
      const r =
        "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      function s(e) {
        const t = o.useReducer(() => ({}), {})[1],
          n = {
            ...e,
            onChange: (n, o) => {
              var l;
              o ? (0, i.flushSync)(t) : t(),
                null == (l = e.onChange) || l.call(e, n, o);
            },
          },
          [s] = o.useState(() => new l.YV(n));
        return (
          s.setOptions(n),
          o.useEffect(() => s._didMount(), []),
          r(() => s._willUpdate()),
          s
        );
      }
      function a(e) {
        return s({
          observeElementRect: l.T6,
          observeElementOffset: l.AO,
          scrollToFn: l.Ox,
          ...e,
        });
      }
      function u(e) {
        return s({
          getScrollElement: () =>
            "undefined" != typeof document ? window : null,
          observeElementRect: l.TH,
          observeElementOffset: l.MH,
          scrollToFn: l.e8,
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
          i = n.initialDeps ?? [];
        return () => {
          var l, r, s, a;
          let u;
          n.key &&
            (null == (l = n.debug) ? void 0 : l.call(n)) &&
            (u = Date.now());
          const d = e();
          if (!(d.length !== i.length || d.some((e, t) => i[t] !== e)))
            return o;
          let g;
          if (
            ((i = d),
            n.key &&
              (null == (r = n.debug) ? void 0 : r.call(n)) &&
              (g = Date.now()),
            (o = t(...d)),
            n.key && (null == (s = n.debug) ? void 0 : s.call(n)))
          ) {
            const e = Math.round(100 * (Date.now() - u)) / 100,
              t = Math.round(100 * (Date.now() - g)) / 100,
              o = t / 16,
              i = (e, t) => {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              `%c⏱ ${i(t, 5)} /${i(e, 5)} ms`,
              `\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0, Math.min(120 - 120 * o, 120))}deg 100% 31%);`,
              null == n ? void 0 : n.key,
            );
          }
          return (
            null == (a = null == n ? void 0 : n.onChange) || a.call(n, o), o
          );
        };
      }
      function i(e, t) {
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
      const l = (e, t, n) => {
          let o;
          return function (...i) {
            e.clearTimeout(o), (o = e.setTimeout(() => t.apply(this, i), n));
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
          const i = (e) => {
            const { width: n, height: o } = e;
            t({ width: Math.round(n), height: Math.round(o) });
          };
          if ((i(n.getBoundingClientRect()), !o.ResizeObserver))
            return () => {};
          const l = new o.ResizeObserver((e) => {
            const t = e[0];
            if (null == t ? void 0 : t.borderBoxSize) {
              const e = t.borderBoxSize[0];
              if (e)
                return void i({ width: e.inlineSize, height: e.blockSize });
            }
            i(n.getBoundingClientRect());
          });
          return (
            l.observe(n, { box: "border-box" }),
            () => {
              l.unobserve(n);
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
          let i = 0;
          const r = g
              ? () => {}
              : l(
                  o,
                  () => {
                    t(i, !1);
                  },
                  e.options.isScrollingResetDelay,
                ),
            s = (o) => () => {
              const { horizontal: l, isRtl: s } = e.options;
              (i = l ? n.scrollLeft * (s ? -1 : 1) : n.scrollTop), r(), t(i, o);
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
          let i = 0;
          const r = g
              ? () => {}
              : l(
                  o,
                  () => {
                    t(i, !1);
                  },
                  e.options.isScrollingResetDelay,
                ),
            s = (o) => () => {
              (i = n[e.options.horizontal ? "scrollX" : "scrollY"]),
                r(),
                t(i, o);
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
          var i, l;
          const r = e + t;
          null == (l = null == (i = o.scrollElement) ? void 0 : i.scrollTo) ||
            l.call(i, {
              [o.options.horizontal ? "left" : "top"]: r,
              behavior: n,
            });
        },
        m = (e, { adjustments: t = 0, behavior: n }, o) => {
          var i, l;
          const r = e + t;
          null == (l = null == (i = o.scrollElement) ? void 0 : i.scrollTo) ||
            l.call(i, {
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
              for (let i = t - 1; i >= 0; i--) {
                const t = e[i];
                if (n.has(t.lane)) continue;
                const l = o.get(t.lane);
                if (
                  (null == l || t.end > l.end
                    ? o.set(t.lane, t)
                    : t.end < l.end && n.set(t.lane, !0),
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
              (e, t, n, o, i) => (
                (this.pendingMeasuredCacheIndexes = []),
                {
                  count: e,
                  paddingStart: t,
                  scrollMargin: n,
                  getItemKey: o,
                  enabled: i,
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
                  enabled: i,
                },
                l,
              ) => {
                if (!i)
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
                for (let i = r; i < e; i++) {
                  const e = o(i),
                    r =
                      1 === this.options.lanes
                        ? s[i - 1]
                        : this.getFurthestMeasurement(s, i),
                    a = r ? r.end + this.options.gap : t + n,
                    u = l.get(e),
                    d = "number" == typeof u ? u : this.options.estimateSize(i),
                    g = a + d,
                    c = r ? r.lane : i % this.options.lanes;
                  s[i] = {
                    index: i,
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
                          i = (t) => e[t].start,
                          l = b(0, o, i, n);
                        let r = l;
                        for (; r < o && e[r].end < n + t; ) r++;
                        return { startIndex: l, endIndex: r };
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
              const i = o.key,
                l = this.elementsCache.get(i);
              l !== e &&
                (l && this.observer.unobserve(l),
                this.observer.observe(e),
                this.elementsCache.set(i, e)),
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
                for (let o = 0, i = e.length; o < i; o++) {
                  const i = t[e[o]];
                  n.push(i);
                }
                return n;
              },
              { key: !1, debug: () => this.options.debug },
            )),
            (this.getVirtualItemForOffset = (e) => {
              const t = this.getMeasurements();
              if (0 !== t.length)
                return i(t[b(0, t.length - 1, (e) => i(t[e]).start, e)]);
            }),
            (this.getOffsetForAlignment = (e, t) => {
              const n = this.getSize(),
                o = this.getScrollOffset();
              "auto" === t &&
                (t = e <= o ? "start" : e >= o + n ? "end" : "start"),
                "start" === t ||
                  ("end" === t ? (e -= n) : "center" === t && (e -= n / 2));
              const i = this.options.horizontal
                  ? "scrollWidth"
                  : "scrollHeight",
                l =
                  (this.scrollElement
                    ? "document" in this.scrollElement
                      ? this.scrollElement.document.documentElement[i]
                      : this.scrollElement[i]
                    : 0) - n;
              return Math.max(Math.min(l, e), 0);
            }),
            (this.getOffsetForIndex = (e, t = "auto") => {
              e = Math.max(0, Math.min(e, this.options.count - 1));
              const n = this.measurementsCache[e];
              if (!n) return;
              const o = this.getSize(),
                i = this.getScrollOffset();
              if ("auto" === t)
                if (n.end >= i + o - this.options.scrollPaddingEnd) t = "end";
                else {
                  if (!(n.start <= i + this.options.scrollPaddingStart))
                    return [i, t];
                  t = "start";
                }
              const l =
                "end" === t
                  ? n.end + this.options.scrollPaddingEnd
                  : n.start - this.options.scrollPaddingStart;
              return [this.getOffsetForAlignment(l, t), t];
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
              const [l, r] = o;
              this._scrollToOffset(l, { adjustments: void 0, behavior: n }),
                "smooth" !== n &&
                  this.isDynamicMode() &&
                  this.targetWindow &&
                  (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(
                    () => {
                      this.scrollToIndexTimeoutId = null;
                      if (this.elementsCache.has(this.options.getItemKey(e))) {
                        const [l] = i(this.getOffsetForIndex(e, r));
                        (t = l),
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
      const b = (e, t, n, o) => {
        for (; e <= t; ) {
          const i = ((e + t) / 2) | 0,
            l = n(i);
          if (l < o) e = i + 1;
          else {
            if (!(l > o)) return i;
            t = i - 1;
          }
        }
        return e > 0 ? e - 1 : 0;
      };
    },
  },
]);
