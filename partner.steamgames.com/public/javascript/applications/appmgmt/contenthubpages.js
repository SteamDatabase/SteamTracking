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
                  (E(o) && ((i.dynamicTypingFunction = o), (o = {})),
                  (i.dynamicTyping = o),
                  (i.transform = !!E(i.transform) && i.transform),
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
                    (i.step = E(i.step)),
                    (i.chunk = E(i.chunk)),
                    (i.complete = E(i.complete)),
                    (i.error = E(i.error)),
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
                      (c = i.download ? new h(i) : new d(i)))
                    : !0 === r.readable && E(r.read) && E(r.on)
                      ? (c = new f(i))
                      : ((t.File && r instanceof File) ||
                          r instanceof Object) &&
                        (c = new l(i)),
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
                  l = null,
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
                      l = t.columns;
                    }
                    void 0 !== t.escapeChar && (u = t.escapeChar + o),
                      ("boolean" == typeof t.escapeFormulae ||
                        t.escapeFormulae instanceof RegExp) &&
                        (d =
                          t.escapeFormulae instanceof RegExp
                            ? t.escapeFormulae
                            : /^[=+\-@\t\r].*$/);
                  }
                })();
                var f = new RegExp(p(o), "g");
                if (
                  ("string" == typeof e && (e = JSON.parse(e)),
                  Array.isArray(e))
                ) {
                  if (!e.length || Array.isArray(e[0])) return c(null, e, h);
                  if ("object" == typeof e[0])
                    return c(l || Object.keys(e[0]), e, h);
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
                  for (var l = 0; l < t.length; l++) {
                    var d = o ? e.length : t[l].length,
                      f = !1,
                      c = o
                        ? 0 === Object.keys(t[l]).length
                        : 0 === t[l].length;
                    if (
                      (r &&
                        !o &&
                        (f =
                          "greedy" === r
                            ? "" === t[l].join("").trim()
                            : 1 === t[l].length && 0 === t[l][0].length),
                      "greedy" === r && o)
                    ) {
                      for (var p = [], g = 0; g < d; g++) {
                        var _ = u ? e[g] : g;
                        p.push(t[l][_]);
                      }
                      f = "" === p.join("").trim();
                    }
                    if (!f) {
                      for (var y = 0; y < d; y++) {
                        0 < y && !c && (a += n);
                        var v = o && u ? e[y] : y;
                        a += m(t[l][v], y);
                      }
                      l < t.length - 1 && (!r || (0 < d && !c)) && (a += s);
                    }
                  }
                  return a;
                }
                function m(e, t) {
                  if (null == e) return "";
                  if (e.constructor === Date)
                    return JSON.stringify(e).slice(1, 25);
                  var i = !1;
                  d &&
                    "string" == typeof e &&
                    d.test(e) &&
                    ((e = "'" + e), (i = !0));
                  var s = e.toString().replace(f, u);
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
            (a.FileStreamer = l),
            (a.StringStreamer = d),
            (a.ReadableStreamStreamer = f),
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
                  if (E(e.before)) {
                    var l = e.before(h.file, h.inputElem);
                    if ("object" == typeof l) {
                      if ("abort" === l.action)
                        return (
                          (t = "AbortError"),
                          (r = h.file),
                          (n = h.inputElem),
                          (u = l.reason),
                          void (E(e.error) && e.error({ name: t }, r, n, u))
                        );
                      if ("skip" === l.action) return void s();
                      "object" == typeof l.config &&
                        (h.instanceConfig = o.extend(
                          h.instanceConfig,
                          l.config,
                        ));
                    } else if ("skip" === l) return void s();
                  }
                  var d = h.instanceConfig.complete;
                  (h.instanceConfig.complete = function (e) {
                    E(d) && d(e, h.file, h.inputElem), s();
                  }),
                    a.parse(h.file, h.instanceConfig);
                } else E(e.complete) && e.complete();
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
                if (this.isFirstChunk && E(this._config.beforeFirstChunk)) {
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
                  else if (E(this._config.chunk) && !r) {
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
                      !E(this._config.complete) ||
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
                E(this._config.error)
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
                      ((t.onload = k(this._chunkLoaded, this)),
                      (t.onerror = k(this._chunkError, this))),
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
          function l(e) {
            var t, r;
            (e = e || {}).chunkSize || (e.chunkSize = a.LocalChunkSize),
              u.call(this, e);
            var i = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (r = e.slice || e.webkitSlice || e.mozSlice),
                i
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
          function d(e) {
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
          function f(e) {
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
              (this._streamData = k(function (e) {
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
              (this._streamError = k(function (e) {
                this._streamCleanUp(), this._sendError(e);
              }, this)),
              (this._streamEnd = k(function () {
                this._streamCleanUp(), (i = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = k(function () {
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
              l = 0,
              d = 0,
              f = !1,
              c = !1,
              g = [],
              _ = { data: [], errors: [], meta: {} };
            if (E(e.step)) {
              var y = e.step;
              e.step = function (t) {
                if (((_ = t), w())) b();
                else {
                  if ((b(), 0 === _.data.length)) return;
                  (l += t.data.length),
                    e.preview && l > e.preview
                      ? r.abort()
                      : ((_.data = _.data[0]), y(_, h));
                }
              };
            }
            function k(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function b() {
              return (
                _ &&
                  i &&
                  (R(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      a.DefaultDelimiter +
                      "'",
                  ),
                  (i = !1)),
                e.skipEmptyLines &&
                  (_.data = _.data.filter(function (e) {
                    return !k(e);
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
                      E(e.transformHeader) && (t = e.transformHeader(t, r)),
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
                        (a = C(s, a)),
                        "__parsed_extra" === s
                          ? ((n[s] = n[s] || []), n[s].push(a))
                          : (n[s] = a);
                    }
                    return (
                      e.header &&
                        (i > g.length
                          ? R(
                              "FieldMismatch",
                              "TooManyFields",
                              "Too many fields: expected " +
                                g.length +
                                " fields but parsed " +
                                i,
                              d + r,
                            )
                          : i < g.length &&
                            R(
                              "FieldMismatch",
                              "TooFewFields",
                              "Too few fields: expected " +
                                g.length +
                                " fields but parsed " +
                                i,
                              d + r,
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
                    (d += r),
                    _
                  );
                })()
              );
            }
            function w() {
              return e.header && 0 === g.length;
            }
            function C(t, r) {
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
            function R(e, t, r, i) {
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
                E(e.delimiter) &&
                  ((e.delimiter = e.delimiter(n)),
                  (_.meta.delimiter = e.delimiter));
              else {
                var h = (function (t, r, i, n, s) {
                  var o, u, h, l;
                  s = s || [",", "\t", "|", ";", a.RECORD_SEP, a.UNIT_SEP];
                  for (var d = 0; d < s.length; d++) {
                    var f = s[d],
                      c = 0,
                      p = 0,
                      g = 0;
                    h = void 0;
                    for (
                      var _ = new m({
                          comments: n,
                          delimiter: f,
                          newline: r,
                          preview: 10,
                        }).parse(t),
                        y = 0;
                      y < _.data.length;
                      y++
                    )
                      if (i && k(_.data[y])) g++;
                      else {
                        var v = _.data[y].length;
                        (p += v),
                          void 0 !== h
                            ? 0 < v && ((c += Math.abs(v - h)), (h = v))
                            : (h = v);
                      }
                    0 < _.data.length && (p /= _.data.length - g),
                      (void 0 === u || c <= u) &&
                        (void 0 === l || l < p) &&
                        1.99 < p &&
                        ((u = c), (o = f), (l = p));
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
              var l = v(e);
              return (
                e.preview && e.header && l.preview++,
                (t = n),
                (r = new m(l)),
                (_ = r.parse(t, s, o)),
                b(),
                f ? { meta: { paused: !0 } } : _ || { meta: { paused: !1 } }
              );
            }),
              (this.paused = function () {
                return f;
              }),
              (this.pause = function () {
                (f = !0),
                  r.abort(),
                  (t = E(e.chunk) ? "" : t.substring(r.getCharIndex()));
              }),
              (this.resume = function () {
                h.streamer._halted
                  ? ((f = !1), h.streamer.parseChunk(t, !0))
                  : setTimeout(h.resume, 3);
              }),
              (this.aborted = function () {
                return c;
              }),
              (this.abort = function () {
                (c = !0),
                  r.abort(),
                  (_.meta.aborted = !0),
                  E(e.complete) && e.complete(_),
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
            var l = 0,
              d = !1;
            (this.parse = function (a, f, c) {
              if ("string" != typeof a)
                throw new Error("Input must be a string");
              var m = a.length,
                g = r.length,
                _ = i.length,
                y = n.length,
                v = E(s),
                k = [],
                b = [],
                w = [],
                C = (l = 0);
              if (!a) return H();
              if (e.header && !f) {
                var R = a.split(i)[0].split(r),
                  S = [],
                  A = {},
                  x = !1;
                for (var O in R) {
                  var I = R[O];
                  E(e.transformHeader) && (I = e.transformHeader(I, O));
                  var T = I,
                    F = A[I] || 0;
                  for (
                    0 < F && ((x = !0), (T = I + "_" + F)), A[I] = F + 1;
                    S.includes(T);
                  )
                    T = T + "_" + F;
                  S.push(T);
                }
                if (x) {
                  var L = a.split(i);
                  (L[0] = S.join(r)), (a = L.join(i));
                }
              }
              if (u || (!1 !== u && -1 === a.indexOf(t))) {
                for (var D = a.split(i), M = 0; M < D.length; M++) {
                  if (((w = D[M]), (l += w.length), M !== D.length - 1))
                    l += i.length;
                  else if (c) return H();
                  if (!n || w.substring(0, y) !== n) {
                    if (v) {
                      if (((k = []), N(w.split(r)), K(), d)) return H();
                    } else N(w.split(r));
                    if (o && o <= M) return (k = k.slice(0, o)), H(!0);
                  }
                }
                return H();
              }
              for (
                var j = a.indexOf(r, l),
                  B = a.indexOf(i, l),
                  U = new RegExp(p(h) + p(t), "g"),
                  z = a.indexOf(t, l);
                ;
              )
                if (a[l] !== t)
                  if (n && 0 === w.length && a.substring(l, l + y) === n) {
                    if (-1 === B) return H();
                    (l = B + _), (B = a.indexOf(i, l)), (j = a.indexOf(r, l));
                  } else if (-1 !== j && (j < B || -1 === B))
                    w.push(a.substring(l, j)),
                      (l = j + g),
                      (j = a.indexOf(r, l));
                  else {
                    if (-1 === B) break;
                    if ((w.push(a.substring(l, B)), J(B + _), v && (K(), d)))
                      return H();
                    if (o && k.length >= o) return H(!0);
                  }
                else
                  for (z = l, l++; ; ) {
                    if (-1 === (z = a.indexOf(t, z + 1)))
                      return (
                        c ||
                          b.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: k.length,
                            index: l,
                          }),
                        G()
                      );
                    if (z === m - 1) return G(a.substring(l, z).replace(U, t));
                    if (t !== h || a[z + 1] !== h) {
                      if (t === h || 0 === z || a[z - 1] !== h) {
                        -1 !== j && j < z + 1 && (j = a.indexOf(r, z + 1)),
                          -1 !== B && B < z + 1 && (B = a.indexOf(i, z + 1));
                        var W = q(-1 === B ? j : Math.min(j, B));
                        if (a.substr(z + 1 + W, g) === r) {
                          w.push(a.substring(l, z).replace(U, t)),
                            a[(l = z + 1 + W + g)] !== t &&
                              (z = a.indexOf(t, l)),
                            (j = a.indexOf(r, l)),
                            (B = a.indexOf(i, l));
                          break;
                        }
                        var P = q(B);
                        if (a.substring(z + 1 + P, z + 1 + P + _) === i) {
                          if (
                            (w.push(a.substring(l, z).replace(U, t)),
                            J(z + 1 + P + _),
                            (j = a.indexOf(r, l)),
                            (z = a.indexOf(t, l)),
                            v && (K(), d))
                          )
                            return H();
                          if (o && k.length >= o) return H(!0);
                          break;
                        }
                        b.push({
                          type: "Quotes",
                          code: "InvalidQuotes",
                          message:
                            "Trailing quote on quoted field is malformed",
                          row: k.length,
                          index: l,
                        }),
                          z++;
                      }
                    } else z++;
                  }
              return G();
              function N(e) {
                k.push(e), (C = l);
              }
              function q(e) {
                var t = 0;
                if (-1 !== e) {
                  var r = a.substring(z + 1, e);
                  r && "" === r.trim() && (t = r.length);
                }
                return t;
              }
              function G(e) {
                return (
                  c ||
                    (void 0 === e && (e = a.substring(l)),
                    w.push(e),
                    (l = m),
                    N(w),
                    v && K()),
                  H()
                );
              }
              function J(e) {
                (l = e), N(w), (w = []), (B = a.indexOf(i, l));
              }
              function H(e) {
                return {
                  data: k,
                  errors: b,
                  meta: {
                    delimiter: r,
                    linebreak: i,
                    aborted: d,
                    truncated: !!e,
                    cursor: C + (f || 0),
                  },
                };
              }
              function K() {
                s(H()), (k = []), (b = []);
              }
            }),
              (this.abort = function () {
                d = !0;
              }),
              (this.getCharIndex = function () {
                return l;
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
              if (E(r.userStep)) {
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
                E(r.userChunk) &&
                  (r.userChunk(t.results, s, t.file), delete t.results);
            }
            t.finished && !i && _(t.workerId, t.results);
          }
          function _(e, t) {
            var r = n[e];
            E(r.userComplete) && r.userComplete(t), r.terminate(), delete n[e];
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
          function k(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function E(e) {
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
            ((l.prototype = Object.create(u.prototype)).constructor = l),
            ((d.prototype = Object.create(d.prototype)).constructor = d),
            ((f.prototype = Object.create(u.prototype)).constructor = f),
            a
          );
        }),
        void 0 === (n = "function" == typeof r ? r.apply(t, i) : r) ||
          (e.exports = n);
    },
    80159: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { ContentHubRoutes: () => f, default: () => c });
      var i = r(90626),
        n = r(97058),
        s = r(17083),
        a = r(92757),
        o = r(562),
        u = r(61859);
      function h(e) {
        return i.createElement(a.XG, {
          message: (e) => !(0, o.tV)() || (0, u.we)("#Generel_Discard_Warning"),
        });
      }
      var l = r(43527),
        d = r(65213);
      const f = { ContentHubCategories: () => "/categories/" };
      function c(e) {
        return i.createElement(
          s.Kd,
          { basename: (0, l.C)() + "admin/store/contenthub/" },
          i.createElement(h, null),
          i.createElement(
            a.dO,
            null,
            i.createElement(a.qh, {
              path: f.ContentHubCategories(),
              component: d.A,
            }),
            i.createElement(a.qh, { component: n.a }),
          ),
        );
      }
    },
    9161: (e, t, r) => {
      "use strict";
      r.d(t, { g: () => s });
      var i = r(40323),
        n = r.n(i);
      class s {
        static ParseCSVFile(e) {
          return new Promise((t, r) => {
            const i = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: t,
              error: (e) => r({ errors: [e] }),
            };
            n().parse(e, i);
          });
        }
        static ReadFile(e) {
          return new Promise((t, r) => {
            const i = new FileReader();
            (i.onload = (e) => t(i.result)), i.readAsText(e);
          });
        }
        static WriteFile(e, t) {
          let r = document.createElement("a");
          if (navigator.msSaveBlob) navigator.msSaveBlob(e, t);
          else {
            const t = window.URL.createObjectURL(e);
            r.href = t;
          }
          r.setAttribute("download", t), r.click();
          try {
            document.removeChild(r);
          } catch (e) {}
        }
        static WriteCSVToFile(e, t) {
          const r = n().unparse(e, { header: !0 });
          s.WriteFile(new Blob([r], { type: "text/csv:charset=utf-8;" }), t);
        }
        static m_DummyValueForQuestionHack = 0;
        static WriteXMLToFile(e, t) {
          const r = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let i =
            "<" + r() + 'xml version="1.0" encoding="UTF-8" ' + r() + ">\n";
          (i += new XMLSerializer().serializeToString(e)),
            s.WriteFile(
              new Blob([i], { type: "application/xml:charset=utf-8;" }),
              t,
            );
        }
      }
    },
    44894: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      const i =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);
