/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3025],
  {
    41609: (e) => {
      e.exports = {
        WhitelistCtn: "_1UhmxrINvvaNnHzhCPoill",
        WhitelistRow: "_28TC1EYm0jlWPjyk89xXCL",
        WhitelistNumber: "IY3dF3eWXX1OmE8oYcQKp",
        Disabled: "_2VzE-3UQEHXyAext8t7gLW",
        Grabbing: "_1vSZ5gJndAOamRhVGni8HG",
        DragActive: "_31uDZXKZQlYMd8FK9xdaJb",
        Dropped: "_3bfDVSvzMDkk4s1j0Vw8jI",
        JumpToSection: "oABTo2lkoYYI5YMYaeq_Q",
        BeingDragged: "_3y7I4DL9Hua5OhZ4HgcBB5",
        DragGhost: "_61nYWo98IhSjR8PWtQX9O",
        Grabbable: "riuelIz655g_IBddWfLQ-",
        DisabledGrab: "_2K0C_m1AZvB6yeNaEXXjDD",
        WhitelistAvatar: "_3DGjmH9KW9BAXsEYwH1WpE",
        ButtonCtn: "_1hSqlvDTyj9P6eWTHXutUt",
        DragHighlightContainer: "_2jRMC5JVSK6dsktYus9Gjf",
        DragHighlight: "Y9ryg1Npznt3dpkr7BGp1",
      };
    },
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
      var n, r, i;
      (r = []),
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
            r = t.IS_PAPA_WORKER || !1,
            i = {},
            s = 0,
            a = {
              parse: function (n, r) {
                var o = (r = r || {}).dynamicTyping || !1;
                if (
                  (E(o) && ((r.dynamicTypingFunction = o), (o = {})),
                  (r.dynamicTyping = o),
                  (r.transform = !!E(r.transform) && r.transform),
                  r.worker && a.WORKERS_SUPPORTED)
                ) {
                  var l = (function () {
                    if (!a.WORKERS_SUPPORTED) return !1;
                    var n,
                      r,
                      o =
                        ((n = t.URL || t.webkitURL || null),
                        (r = e.toString()),
                        a.BLOB_URL ||
                          (a.BLOB_URL = n.createObjectURL(
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
                      l = new t.Worker(o);
                    return (l.onmessage = g), (l.id = s++), (i[l.id] = l);
                  })();
                  return (
                    (l.userStep = r.step),
                    (l.userChunk = r.chunk),
                    (l.userComplete = r.complete),
                    (l.userError = r.error),
                    (r.step = E(r.step)),
                    (r.chunk = E(r.chunk)),
                    (r.complete = E(r.complete)),
                    (r.error = E(r.error)),
                    delete r.worker,
                    void l.postMessage({ input: n, config: r, workerId: l.id })
                  );
                }
                var f = null;
                return (
                  a.NODE_STREAM_INPUT,
                  "string" == typeof n
                    ? ((n = (function (e) {
                        return 65279 === e.charCodeAt(0) ? e.slice(1) : e;
                      })(n)),
                      (f = r.download ? new u(r) : new c(r)))
                    : !0 === n.readable && E(n.read) && E(n.on)
                      ? (f = new d(r))
                      : ((t.File && n instanceof File) ||
                          n instanceof Object) &&
                        (f = new h(r)),
                  f.stream(n)
                );
              },
              unparse: function (e, t) {
                var n = !1,
                  r = !0,
                  i = ",",
                  s = "\r\n",
                  o = '"',
                  l = o + o,
                  u = !1,
                  h = null,
                  c = !1;
                !(function () {
                  if ("object" == typeof t) {
                    if (
                      ("string" != typeof t.delimiter ||
                        a.BAD_DELIMITERS.filter(function (e) {
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
                      "string" == typeof t.newline && (s = t.newline),
                      "string" == typeof t.quoteChar && (o = t.quoteChar),
                      "boolean" == typeof t.header && (r = t.header),
                      Array.isArray(t.columns))
                    ) {
                      if (0 === t.columns.length)
                        throw new Error("Option columns is empty");
                      h = t.columns;
                    }
                    void 0 !== t.escapeChar && (l = t.escapeChar + o),
                      ("boolean" == typeof t.escapeFormulae ||
                        t.escapeFormulae instanceof RegExp) &&
                        (c =
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
                  if (!e.length || Array.isArray(e[0])) return f(null, e, u);
                  if ("object" == typeof e[0])
                    return f(h || Object.keys(e[0]), e, u);
                } else if ("object" == typeof e)
                  return (
                    "string" == typeof e.data && (e.data = JSON.parse(e.data)),
                    Array.isArray(e.data) &&
                      (e.fields || (e.fields = (e.meta && e.meta.fields) || h),
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
                function f(e, t, n) {
                  var a = "";
                  "string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t));
                  var o = Array.isArray(e) && 0 < e.length,
                    l = !Array.isArray(t[0]);
                  if (o && r) {
                    for (var u = 0; u < e.length; u++)
                      0 < u && (a += i), (a += m(e[u], u));
                    0 < t.length && (a += s);
                  }
                  for (var h = 0; h < t.length; h++) {
                    var c = o ? e.length : t[h].length,
                      d = !1,
                      f = o
                        ? 0 === Object.keys(t[h]).length
                        : 0 === t[h].length;
                    if (
                      (n &&
                        !o &&
                        (d =
                          "greedy" === n
                            ? "" === t[h].join("").trim()
                            : 1 === t[h].length && 0 === t[h][0].length),
                      "greedy" === n && o)
                    ) {
                      for (var p = [], g = 0; g < c; g++) {
                        var _ = l ? e[g] : g;
                        p.push(t[h][_]);
                      }
                      d = "" === p.join("").trim();
                    }
                    if (!d) {
                      for (var v = 0; v < c; v++) {
                        0 < v && !f && (a += i);
                        var A = o && l ? e[v] : v;
                        a += m(t[h][A], v);
                      }
                      h < t.length - 1 && (!n || (0 < c && !f)) && (a += s);
                    }
                  }
                  return a;
                }
                function m(e, t) {
                  if (null == e) return "";
                  if (e.constructor === Date)
                    return JSON.stringify(e).slice(1, 25);
                  var r = !1;
                  c &&
                    "string" == typeof e &&
                    c.test(e) &&
                    ((e = "'" + e), (r = !0));
                  var s = e.toString().replace(d, l);
                  return (r =
                    r ||
                    !0 === n ||
                    ("function" == typeof n && n(e, t)) ||
                    (Array.isArray(n) && n[t]) ||
                    (function (e, t) {
                      for (var n = 0; n < t.length; n++)
                        if (-1 < e.indexOf(t[n])) return !0;
                      return !1;
                    })(s, a.BAD_DELIMITERS) ||
                    -1 < s.indexOf(i) ||
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
            (a.WORKERS_SUPPORTED = !n && !!t.Worker),
            (a.NODE_STREAM_INPUT = 1),
            (a.LocalChunkSize = 10485760),
            (a.RemoteChunkSize = 5242880),
            (a.DefaultDelimiter = ","),
            (a.Parser = m),
            (a.ParserHandle = f),
            (a.NetworkStreamer = u),
            (a.FileStreamer = h),
            (a.StringStreamer = c),
            (a.ReadableStreamStreamer = d),
            t.jQuery)
          ) {
            var o = t.jQuery;
            o.fn.parse = function (e) {
              var n = e.config || {},
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
                  for (var i = 0; i < this.files.length; i++)
                    r.push({
                      file: this.files[i],
                      inputElem: this,
                      instanceConfig: o.extend({}, n),
                    });
                }),
                i(),
                this
              );
              function i() {
                if (0 !== r.length) {
                  var t,
                    n,
                    i,
                    l,
                    u = r[0];
                  if (E(e.before)) {
                    var h = e.before(u.file, u.inputElem);
                    if ("object" == typeof h) {
                      if ("abort" === h.action)
                        return (
                          (t = "AbortError"),
                          (n = u.file),
                          (i = u.inputElem),
                          (l = h.reason),
                          void (E(e.error) && e.error({ name: t }, n, i, l))
                        );
                      if ("skip" === h.action) return void s();
                      "object" == typeof h.config &&
                        (u.instanceConfig = o.extend(
                          u.instanceConfig,
                          h.config,
                        ));
                    } else if ("skip" === h) return void s();
                  }
                  var c = u.instanceConfig.complete;
                  (u.instanceConfig.complete = function (e) {
                    E(c) && c(e, u.file, u.inputElem), s();
                  }),
                    a.parse(u.file, u.instanceConfig);
                } else E(e.complete) && e.complete();
              }
              function s() {
                r.splice(0, 1), i();
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
                var t = A(e);
                (t.chunkSize = parseInt(t.chunkSize)),
                  e.step || e.chunk || (t.chunkSize = null),
                  (this._handle = new f(t)),
                  ((this._handle.streamer = this)._config = t);
              }.call(this, e),
              (this.parseChunk = function (e, n) {
                if (this.isFirstChunk && E(this._config.beforeFirstChunk)) {
                  var i = this._config.beforeFirstChunk(e);
                  void 0 !== i && (e = i);
                }
                (this.isFirstChunk = !1), (this._halted = !1);
                var s = this._partialLine + e;
                this._partialLine = "";
                var o = this._handle.parse(s, this._baseIndex, !this._finished);
                if (!this._handle.paused() && !this._handle.aborted()) {
                  var l = o.meta.cursor;
                  this._finished ||
                    ((this._partialLine = s.substring(l - this._baseIndex)),
                    (this._baseIndex = l)),
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
                  else if (E(this._config.chunk) && !n) {
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
                      !E(this._config.complete) ||
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
                E(this._config.error)
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
              l.call(this, e),
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
                      ((t.onload = y(this._chunkLoaded, this)),
                      (t.onerror = y(this._chunkError, this))),
                    t.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !n,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var e = this._config.downloadRequestHeaders;
                    for (var r in e) t.setRequestHeader(r, e[r]);
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
          function h(e) {
            var t, n;
            (e = e || {}).chunkSize || (e.chunkSize = a.LocalChunkSize),
              l.call(this, e);
            var r = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (n = e.slice || e.webkitSlice || e.mozSlice),
                r
                  ? (((t = new FileReader()).onload = y(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = y(this._chunkError, this)))
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
          function c(e) {
            var t;
            l.call(this, (e = e || {})),
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
          function d(e) {
            l.call(this, (e = e || {}));
            var t = [],
              n = !0,
              r = !1;
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
                r && 1 === t.length && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (n = !0);
              }),
              (this._streamData = y(function (e) {
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
              (this._streamError = y(function (e) {
                this._streamCleanUp(), this._sendError(e);
              }, this)),
              (this._streamEnd = y(function () {
                this._streamCleanUp(), (r = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = y(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function f(e) {
            var t,
              n,
              r,
              i = Math.pow(2, 53),
              s = -i,
              o = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              l =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              u = this,
              h = 0,
              c = 0,
              d = !1,
              f = !1,
              g = [],
              _ = { data: [], errors: [], meta: {} };
            if (E(e.step)) {
              var v = e.step;
              e.step = function (t) {
                if (((_ = t), k())) b();
                else {
                  if ((b(), 0 === _.data.length)) return;
                  (h += t.data.length),
                    e.preview && h > e.preview
                      ? n.abort()
                      : ((_.data = _.data[0]), v(_, u));
                }
              };
            }
            function y(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function b() {
              return (
                _ &&
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
                  (_.data = _.data.filter(function (e) {
                    return !y(e);
                  })),
                k() &&
                  (function () {
                    if (_)
                      if (Array.isArray(_.data[0])) {
                        for (var t = 0; k() && t < _.data.length; t++)
                          _.data[t].forEach(n);
                        _.data.splice(0, 1);
                      } else _.data.forEach(n);
                    function n(t, n) {
                      E(e.transformHeader) && (t = e.transformHeader(t, n)),
                        g.push(t);
                    }
                  })(),
                (function () {
                  if (!_ || (!e.header && !e.dynamicTyping && !e.transform))
                    return _;
                  function t(t, n) {
                    var r,
                      i = e.header ? {} : [];
                    for (r = 0; r < t.length; r++) {
                      var s = r,
                        a = t[r];
                      e.header && (s = r >= g.length ? "__parsed_extra" : g[r]),
                        e.transform && (a = e.transform(a, s)),
                        (a = C(s, a)),
                        "__parsed_extra" === s
                          ? ((i[s] = i[s] || []), i[s].push(a))
                          : (i[s] = a);
                    }
                    return (
                      e.header &&
                        (r > g.length
                          ? w(
                              "FieldMismatch",
                              "TooManyFields",
                              "Too many fields: expected " +
                                g.length +
                                " fields but parsed " +
                                r,
                              c + n,
                            )
                          : r < g.length &&
                            w(
                              "FieldMismatch",
                              "TooFewFields",
                              "Too few fields: expected " +
                                g.length +
                                " fields but parsed " +
                                r,
                              c + n,
                            )),
                      i
                    );
                  }
                  var n = 1;
                  return (
                    !_.data.length || Array.isArray(_.data[0])
                      ? ((_.data = _.data.map(t)), (n = _.data.length))
                      : (_.data = t(_.data, 0)),
                    e.header && _.meta && (_.meta.fields = g),
                    (c += n),
                    _
                  );
                })()
              );
            }
            function k() {
              return e.header && 0 === g.length;
            }
            function C(t, n) {
              return (
                (r = t),
                e.dynamicTypingFunction &&
                  void 0 === e.dynamicTyping[r] &&
                  (e.dynamicTyping[r] = e.dynamicTypingFunction(r)),
                !0 === (e.dynamicTyping[r] || e.dynamicTyping)
                  ? "true" === n ||
                    "TRUE" === n ||
                    ("false" !== n &&
                      "FALSE" !== n &&
                      ((function (e) {
                        if (o.test(e)) {
                          var t = parseFloat(e);
                          if (s < t && t < i) return !0;
                        }
                        return !1;
                      })(n)
                        ? parseFloat(n)
                        : l.test(n)
                          ? new Date(n)
                          : "" === n
                            ? null
                            : n))
                  : n
              );
              var r;
            }
            function w(e, t, n, r) {
              var i = { type: e, code: t, message: n };
              void 0 !== r && (i.row = r), _.errors.push(i);
            }
            (this.parse = function (i, s, o) {
              var l = e.quoteChar || '"';
              if (
                (e.newline ||
                  (e.newline = (function (e, t) {
                    e = e.substring(0, 1048576);
                    var n = new RegExp(p(t) + "([^]*?)" + p(t), "gm"),
                      r = (e = e.replace(n, "")).split("\r"),
                      i = e.split("\n"),
                      s = 1 < i.length && i[0].length < r[0].length;
                    if (1 === r.length || s) return "\n";
                    for (var a = 0, o = 0; o < r.length; o++)
                      "\n" === r[o][0] && a++;
                    return a >= r.length / 2 ? "\r\n" : "\r";
                  })(i, l)),
                (r = !1),
                e.delimiter)
              )
                E(e.delimiter) &&
                  ((e.delimiter = e.delimiter(i)),
                  (_.meta.delimiter = e.delimiter));
              else {
                var u = (function (t, n, r, i, s) {
                  var o, l, u, h;
                  s = s || [",", "\t", "|", ";", a.RECORD_SEP, a.UNIT_SEP];
                  for (var c = 0; c < s.length; c++) {
                    var d = s[c],
                      f = 0,
                      p = 0,
                      g = 0;
                    u = void 0;
                    for (
                      var _ = new m({
                          comments: i,
                          delimiter: d,
                          newline: n,
                          preview: 10,
                        }).parse(t),
                        v = 0;
                      v < _.data.length;
                      v++
                    )
                      if (r && y(_.data[v])) g++;
                      else {
                        var A = _.data[v].length;
                        (p += A),
                          void 0 !== u
                            ? 0 < A && ((f += Math.abs(A - u)), (u = A))
                            : (u = A);
                      }
                    0 < _.data.length && (p /= _.data.length - g),
                      (void 0 === l || f <= l) &&
                        (void 0 === h || h < p) &&
                        1.99 < p &&
                        ((l = f), (o = d), (h = p));
                  }
                  return { successful: !!(e.delimiter = o), bestDelimiter: o };
                })(
                  i,
                  e.newline,
                  e.skipEmptyLines,
                  e.comments,
                  e.delimitersToGuess,
                );
                u.successful
                  ? (e.delimiter = u.bestDelimiter)
                  : ((r = !0), (e.delimiter = a.DefaultDelimiter)),
                  (_.meta.delimiter = e.delimiter);
              }
              var h = A(e);
              return (
                e.preview && e.header && h.preview++,
                (t = i),
                (n = new m(h)),
                (_ = n.parse(t, s, o)),
                b(),
                d ? { meta: { paused: !0 } } : _ || { meta: { paused: !1 } }
              );
            }),
              (this.paused = function () {
                return d;
              }),
              (this.pause = function () {
                (d = !0),
                  n.abort(),
                  (t = E(e.chunk) ? "" : t.substring(n.getCharIndex()));
              }),
              (this.resume = function () {
                u.streamer._halted
                  ? ((d = !1), u.streamer.parseChunk(t, !0))
                  : setTimeout(u.resume, 3);
              }),
              (this.aborted = function () {
                return f;
              }),
              (this.abort = function () {
                (f = !0),
                  n.abort(),
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
              n = (e = e || {}).delimiter,
              r = e.newline,
              i = e.comments,
              s = e.step,
              o = e.preview,
              l = e.fastMode,
              u = (t =
                void 0 === e.quoteChar || null === e.quoteChar
                  ? '"'
                  : e.quoteChar);
            if (
              (void 0 !== e.escapeChar && (u = e.escapeChar),
              ("string" != typeof n || -1 < a.BAD_DELIMITERS.indexOf(n)) &&
                (n = ","),
              i === n)
            )
              throw new Error("Comment character same as delimiter");
            !0 === i
              ? (i = "#")
              : ("string" != typeof i || -1 < a.BAD_DELIMITERS.indexOf(i)) &&
                (i = !1),
              "\n" !== r && "\r" !== r && "\r\n" !== r && (r = "\n");
            var h = 0,
              c = !1;
            (this.parse = function (a, d, f) {
              if ("string" != typeof a)
                throw new Error("Input must be a string");
              var m = a.length,
                g = n.length,
                _ = r.length,
                v = i.length,
                A = E(s),
                y = [],
                b = [],
                k = [],
                C = (h = 0);
              if (!a) return Q();
              if (e.header && !d) {
                var w = a.split(r)[0].split(n),
                  R = [],
                  S = {},
                  x = !1;
                for (var D in w) {
                  var I = w[D];
                  E(e.transformHeader) && (I = e.transformHeader(I, D));
                  var O = I,
                    B = S[I] || 0;
                  for (
                    0 < B && ((x = !0), (O = I + "_" + B)), S[I] = B + 1;
                    R.includes(O);
                  )
                    O = O + "_" + B;
                  R.push(O);
                }
                if (x) {
                  var T = a.split(r);
                  (T[0] = R.join(n)), (a = T.join(r));
                }
              }
              if (l || (!1 !== l && -1 === a.indexOf(t))) {
                for (var F = a.split(r), L = 0; L < F.length; L++) {
                  if (((k = F[L]), (h += k.length), L !== F.length - 1))
                    h += r.length;
                  else if (f) return Q();
                  if (!i || k.substring(0, v) !== i) {
                    if (A) {
                      if (((y = []), G(k.split(n)), q(), c)) return Q();
                    } else G(k.split(n));
                    if (o && o <= L) return (y = y.slice(0, o)), Q(!0);
                  }
                }
                return Q();
              }
              for (
                var W = a.indexOf(n, h),
                  N = a.indexOf(r, h),
                  M = new RegExp(p(u) + p(t), "g"),
                  j = a.indexOf(t, h);
                ;
              )
                if (a[h] !== t)
                  if (i && 0 === k.length && a.substring(h, h + v) === i) {
                    if (-1 === N) return Q();
                    (h = N + _), (N = a.indexOf(r, h)), (W = a.indexOf(n, h));
                  } else if (-1 !== W && (W < N || -1 === N))
                    k.push(a.substring(h, W)),
                      (h = W + g),
                      (W = a.indexOf(n, h));
                  else {
                    if (-1 === N) break;
                    if ((k.push(a.substring(h, N)), Y(N + _), A && (q(), c)))
                      return Q();
                    if (o && y.length >= o) return Q(!0);
                  }
                else
                  for (j = h, h++; ; ) {
                    if (-1 === (j = a.indexOf(t, j + 1)))
                      return (
                        f ||
                          b.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: y.length,
                            index: h,
                          }),
                        H()
                      );
                    if (j === m - 1) return H(a.substring(h, j).replace(M, t));
                    if (t !== u || a[j + 1] !== u) {
                      if (t === u || 0 === j || a[j - 1] !== u) {
                        -1 !== W && W < j + 1 && (W = a.indexOf(n, j + 1)),
                          -1 !== N && N < j + 1 && (N = a.indexOf(r, j + 1));
                        var z = P(-1 === N ? W : Math.min(W, N));
                        if (a.substr(j + 1 + z, g) === n) {
                          k.push(a.substring(h, j).replace(M, t)),
                            a[(h = j + 1 + z + g)] !== t &&
                              (j = a.indexOf(t, h)),
                            (W = a.indexOf(n, h)),
                            (N = a.indexOf(r, h));
                          break;
                        }
                        var U = P(N);
                        if (a.substring(j + 1 + U, j + 1 + U + _) === r) {
                          if (
                            (k.push(a.substring(h, j).replace(M, t)),
                            Y(j + 1 + U + _),
                            (W = a.indexOf(n, h)),
                            (j = a.indexOf(t, h)),
                            A && (q(), c))
                          )
                            return Q();
                          if (o && y.length >= o) return Q(!0);
                          break;
                        }
                        b.push({
                          type: "Quotes",
                          code: "InvalidQuotes",
                          message:
                            "Trailing quote on quoted field is malformed",
                          row: y.length,
                          index: h,
                        }),
                          j++;
                      }
                    } else j++;
                  }
              return H();
              function G(e) {
                y.push(e), (C = h);
              }
              function P(e) {
                var t = 0;
                if (-1 !== e) {
                  var n = a.substring(j + 1, e);
                  n && "" === n.trim() && (t = n.length);
                }
                return t;
              }
              function H(e) {
                return (
                  f ||
                    (void 0 === e && (e = a.substring(h)),
                    k.push(e),
                    (h = m),
                    G(k),
                    A && q()),
                  Q()
                );
              }
              function Y(e) {
                (h = e), G(k), (k = []), (N = a.indexOf(r, h));
              }
              function Q(e) {
                return {
                  data: y,
                  errors: b,
                  meta: {
                    delimiter: n,
                    linebreak: r,
                    aborted: c,
                    truncated: !!e,
                    cursor: C + (d || 0),
                  },
                };
              }
              function q() {
                s(Q()), (y = []), (b = []);
              }
            }),
              (this.abort = function () {
                c = !0;
              }),
              (this.getCharIndex = function () {
                return h;
              });
          }
          function g(e) {
            var t = e.data,
              n = i[t.workerId],
              r = !1;
            if (t.error) n.userError(t.error, t.file);
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
                pause: v,
                resume: v,
              };
              if (E(n.userStep)) {
                for (
                  var a = 0;
                  a < t.results.data.length &&
                  (n.userStep(
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
                E(n.userChunk) &&
                  (n.userChunk(t.results, s, t.file), delete t.results);
            }
            t.finished && !r && _(t.workerId, t.results);
          }
          function _(e, t) {
            var n = i[e];
            E(n.userComplete) && n.userComplete(t), n.terminate(), delete i[e];
          }
          function v() {
            throw new Error("Not implemented.");
          }
          function A(e) {
            if ("object" != typeof e || null === e) return e;
            var t = Array.isArray(e) ? [] : {};
            for (var n in e) t[n] = A(e[n]);
            return t;
          }
          function y(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function E(e) {
            return "function" == typeof e;
          }
          return (
            r &&
              (t.onmessage = function (e) {
                var n = e.data;
                if (
                  (void 0 === a.WORKER_ID && n && (a.WORKER_ID = n.workerId),
                  "string" == typeof n.input)
                )
                  t.postMessage({
                    workerId: a.WORKER_ID,
                    results: a.parse(n.input, n.config),
                    finished: !0,
                  });
                else if (
                  (t.File && n.input instanceof File) ||
                  n.input instanceof Object
                ) {
                  var r = a.parse(n.input, n.config);
                  r &&
                    t.postMessage({
                      workerId: a.WORKER_ID,
                      results: r,
                      finished: !0,
                    });
                }
              }),
            ((u.prototype = Object.create(l.prototype)).constructor = u),
            ((h.prototype = Object.create(l.prototype)).constructor = h),
            ((c.prototype = Object.create(c.prototype)).constructor = c),
            ((d.prototype = Object.create(l.prototype)).constructor = d),
            a
          );
        }),
        void 0 === (i = "function" == typeof n ? n.apply(t, r) : n) ||
          (e.exports = i);
    },
    80159: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { ContentHubRoutes: () => d, default: () => f });
      var r = n(90626),
        i = n(97058),
        s = n(17083),
        a = n(92757),
        o = n(562),
        l = n(61859);
      function u(e) {
        return r.createElement(a.XG, {
          message: (e) => !(0, o.tV)() || (0, l.we)("#Generel_Discard_Warning"),
        });
      }
      var h = n(43527),
        c = n(65213);
      const d = { ContentHubCategories: () => "/categories/" };
      function f(e) {
        return r.createElement(
          s.Kd,
          { basename: (0, h.C)() + "admin/store/contenthub/" },
          r.createElement(u, null),
          r.createElement(
            a.dO,
            null,
            r.createElement(a.qh, {
              path: d.ContentHubCategories(),
              component: c.A,
            }),
            r.createElement(a.qh, { component: i.a }),
          ),
        );
      }
    },
    56654: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => _ });
      var r = n(90626),
        i = n(73745);
      const s =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC";
      var a = n(44894),
        o = n(62490),
        l = n(41609),
        u = n.n(l),
        h = n(64641),
        c = n.n(h),
        d = n(12155),
        f = n(41735),
        p = n.n(f),
        m = n(25489),
        g = n(52038);
      function _(e) {
        const {
            items: t,
            render: n,
            onDelete: l,
            onEdit: h,
            onReorder: f,
            onMove: _,
            bDisabled: A,
            rowClassName: y,
          } = e,
          [E, b] = r.useState(!1),
          [k, C] = r.useState(void 0),
          [w, R] = r.useState(void 0),
          [S, x] = r.useState(-1),
          [D, I] = r.useState(void 0),
          [O, B] = r.useState(0),
          [T, F] = r.useState(0),
          [L, W] = r.useState(void 0),
          [N, M] = r.useState(""),
          j = r.useRef(),
          z = r.useMemo(() => new Array(), []),
          U = r.useMemo(() => new Array(), []),
          G = r.useMemo(() => p().CancelToken.source(), []),
          P = () => {
            j.current?.firstElementChild &&
              (B(j.current.firstElementChild.getBoundingClientRect().height),
              F(j.current.firstElementChild.getBoundingClientRect().width));
          };
        r.useEffect(() => {
          P();
        }, []),
          r.useEffect(() => () => G.cancel("ReorderableList unmounting"), [G]);
        const H = (e, t) => {
            G.token.reason ||
              (j.current.firstElementChild?.getBoundingClientRect().height >
                0 &&
                O !=
                  j.current.firstElementChild.getBoundingClientRect().height &&
                P(),
              ((e, t) => {
                const n = z[e]?.current;
                if (!n)
                  return void console.error(
                    "start element grab missing element at index " + e,
                  );
                b(!0), x(e), W(void 0), I(e);
                const r = t.clientX - n.getBoundingClientRect().left;
                C(r);
                const i = t.clientY - n.getBoundingClientRect().top;
                R(i),
                  (n.style.position = "fixed"),
                  (n.style.left = t.clientX - r + "px"),
                  (n.style.top = t.clientY - i + "px"),
                  (n.style.zIndex = "1");
              })(t, e),
              e.preventDefault());
          },
          Y = (e, n) => {
            const r = m.OQ(n > e ? n - 1 : n, 0, t.length - 1);
            e != r && (_ ? _(e, r) : (0, o.yY)(t, e, r), X(r), f && f(t));
          },
          Q = (e) => {
            E &&
              !G.token.reason &&
              ((() => {
                const e = z[S]?.current;
                e
                  ? ((e.style.position = ""), (e.style.zIndex = ""))
                  : console.error("end element drag missing element"),
                  b(!1),
                  x(-1),
                  W(void 0),
                  I(void 0);
              })(),
              Y(S, D));
          },
          q = (e) => {
            if (!E || G.token.reason) return;
            const n = e.clientY;
            let r;
            for (let e = 0; e < t.length; e++) {
              if (
                n <
                (U[e].current.getBoundingClientRect().top +
                  2 * U[e].current.getBoundingClientRect().bottom) /
                  3
              ) {
                r = e;
                break;
              }
            }
            I(r ?? t.length),
              ((e) => {
                const t = z[S]?.current;
                t
                  ? ((t.style.left = e.clientX - k + "px"),
                    (t.style.top = e.clientY - w + "px"))
                  : console.error("update grab element missing element");
              })(e);
          };
        (0, i.l6)(window, "mousemove", (e) => q(e)),
          (0, i.l6)(window, "mouseup", (e) => Q()),
          r.useEffect(() => {
            for (let e = z.length; e < t.length; e++)
              z.push(r.createRef()), U.push(r.createRef());
          }, [t.length, z, U]);
        const J = (e) => {
            W(void 0);
            const t = N?.trim(),
              n = Number.parseInt(t);
            if (0 == t.length || isNaN(n)) return;
            const r = n - 1;
            e != r && Y(e, r);
          },
          [V, X] = r.useState(void 0);
        return r.createElement(
          "div",
          { className: u().WhitelistCtn, ref: j },
          t.map((e, i) =>
            r.createElement(
              "div",
              { key: i, ref: U[i] },
              i == D && r.createElement(v, { width: T }),
              r.createElement(
                "div",
                { ref: z[i], className: u().DragGhost },
                i == S &&
                  r.createElement(
                    "div",
                    { className: (0, g.A)(u().WhitelistRow, y) },
                    r.createElement("img", {
                      className: (0, g.A)(u().WhitelistAvatar, u().Grabbing),
                      src: s,
                    }),
                    r.createElement("input", {
                      className: (0, g.A)(
                        u().WhitelistNumber,
                        u().Disabled,
                        u().Grabbing,
                      ),
                      type: "text",
                      value: (D > i ? D - 1 : D) + 1,
                      disabled: !0,
                    }),
                    n(e, i),
                  ),
              ),
              r.createElement(
                "div",
                {
                  className: (0, g.A)(
                    u().WhitelistRow,
                    y,
                    E && u().DragActive,
                    i == S && u().BeingDragged,
                    V == i && u().Dropped,
                  ),
                  onAnimationEnd: () => X(void 0),
                },
                r.createElement("img", {
                  className: (0, g.A)(
                    u().WhitelistAvatar,
                    u().Grabbable,
                    A && u().DisabledGrab,
                  ),
                  src: s,
                  onMouseDown: Boolean(A) ? void 0 : (e) => H(e, i),
                }),
                r.createElement("input", {
                  className: (0, g.A)(u().WhitelistNumber, A && u().Disabled),
                  type: "text",
                  value: L == i ? N : i + 1,
                  disabled: A || i == S,
                  onChange: (e) => M(e.target.value),
                  onKeyDown: (e) =>
                    ((e, t) => {
                      "Enter" === e.key && (J(t), e.currentTarget.blur());
                    })(e, i),
                  onFocus: (e) => {
                    W(i), M(e.target.value);
                  },
                  onBlur: () => J(i),
                }),
                n(e, i),
                Boolean(i != S) &&
                  Boolean(h || l) &&
                  r.createElement(
                    "div",
                    { className: u().ButtonCtn },
                    Boolean(h) &&
                      r.createElement(
                        "div",
                        { className: c().RemoveIcon, onClick: (e) => h(i, e) },
                        r.createElement(d.ffu, null),
                      ),
                    Boolean(l) &&
                      r.createElement("img", {
                        className: c().RemoveIcon,
                        src: a.A,
                        onClick: (e) => l(i, e),
                      }),
                  ),
              ),
              D == t.length &&
                i == t.length - 1 &&
                r.createElement(v, { width: T }),
            ),
          ),
        );
      }
      function v(e) {
        const { width: t } = e;
        return r.createElement(
          "div",
          { className: u().DragHighlightContainer },
          r.createElement("div", {
            className: u().DragHighlight,
            style: { width: t },
          }),
        );
      }
    },
    9161: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => s });
      var r = n(40323),
        i = n.n(r);
      class s {
        static ParseCSVFile(e) {
          return new Promise((t, n) => {
            const r = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: t,
              error: (e) => n({ errors: [e] }),
            };
            i().parse(e, r);
          });
        }
        static ReadFile(e) {
          return new Promise((t, n) => {
            const r = new FileReader();
            (r.onload = (e) => t(r.result)), r.readAsText(e);
          });
        }
        static WriteFile(e, t) {
          let n = document.createElement("a");
          if (navigator.msSaveBlob) navigator.msSaveBlob(e, t);
          else {
            const t = window.URL.createObjectURL(e);
            n.href = t;
          }
          n.setAttribute("download", t), n.click();
          try {
            document.removeChild(n);
          } catch (e) {}
        }
        static WriteCSVToFile(e, t) {
          const n = i().unparse(e, { header: !0 });
          s.WriteFile(new Blob([n], { type: "text/csv:charset=utf-8;" }), t);
        }
        static m_DummyValueForQuestionHack = 0;
        static WriteXMLToFile(e, t) {
          const n = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let r =
            "<" + n() + 'xml version="1.0" encoding="UTF-8" ' + n() + ">\n";
          (r += new XMLSerializer().serializeToString(e)),
            s.WriteFile(
              new Blob([r], { type: "application/xml:charset=utf-8;" }),
              t,
            );
        }
      }
    },
    44894: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      const r =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);
