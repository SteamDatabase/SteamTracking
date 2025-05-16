/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9136],
  {
    17083: (e, t, r) => {
      "use strict";
      r.d(t, { N_: () => m, k2: () => v });
      var i = r(92757),
        n = r(42891),
        s = r(90626),
        a = r(29248),
        o = r(58584),
        u = r(81115),
        h = r(68841);
      s.Component;
      s.Component;
      var f = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        c = function (e, t) {
          return "string" == typeof e ? (0, a.yJ)(e, null, null, t) : e;
        },
        l = function (e) {
          return e;
        },
        d = s.forwardRef;
      void 0 === d && (d = l);
      var p = d(function (e, t) {
        var r = e.innerRef,
          i = e.navigate,
          n = e.onClick,
          a = (0, u.A)(e, ["innerRef", "navigate", "onClick"]),
          h = a.target,
          f = (0, o.A)({}, a, {
            onClick: function (e) {
              try {
                n && n(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (h && "_self" !== h) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), i());
            },
          });
        return (f.ref = (l !== d && t) || r), s.createElement("a", f);
      });
      var m = d(function (e, t) {
          var r = e.component,
            n = void 0 === r ? p : r,
            m = e.replace,
            _ = e.to,
            g = e.innerRef,
            v = (0, u.A)(e, ["component", "replace", "to", "innerRef"]);
          return s.createElement(i.XZ.Consumer, null, function (e) {
            e || (0, h.A)(!1);
            var r = e.history,
              i = c(f(_, e.location), e.location),
              u = i ? r.createHref(i) : "",
              p = (0, o.A)({}, v, {
                href: u,
                navigate: function () {
                  var t = f(_, e.location),
                    i = (0, a.AO)(e.location) === (0, a.AO)(c(t));
                  (m || i ? r.replace : r.push)(t);
                },
              });
            return (
              l !== d ? (p.ref = t || g) : (p.innerRef = g),
              s.createElement(n, p)
            );
          });
        }),
        _ = function (e) {
          return e;
        },
        g = s.forwardRef;
      void 0 === g && (g = _);
      var v = g(function (e, t) {
        var r = e["aria-current"],
          n = void 0 === r ? "page" : r,
          a = e.activeClassName,
          l = void 0 === a ? "active" : a,
          d = e.activeStyle,
          p = e.className,
          v = e.exact,
          y = e.isActive,
          k = e.location,
          E = e.sensitive,
          b = e.strict,
          w = e.style,
          C = e.to,
          R = e.innerRef,
          S = (0, u.A)(e, [
            "aria-current",
            "activeClassName",
            "activeStyle",
            "className",
            "exact",
            "isActive",
            "location",
            "sensitive",
            "strict",
            "style",
            "to",
            "innerRef",
          ]);
        return s.createElement(i.XZ.Consumer, null, function (e) {
          e || (0, h.A)(!1);
          var r = k || e.location,
            a = c(f(C, r), r),
            u = a.pathname,
            x = u && u.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            O = x
              ? (0, i.B6)(r.pathname, {
                  path: x,
                  exact: v,
                  sensitive: E,
                  strict: b,
                })
              : null,
            A = !!(y ? y(O, r) : O),
            D = "function" == typeof p ? p(A) : p,
            I = "function" == typeof w ? w(A) : w;
          A &&
            ((D = (function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              return t
                .filter(function (e) {
                  return e;
                })
                .join(" ");
            })(D, l)),
            (I = (0, o.A)({}, I, d)));
          var T = (0, o.A)(
            { "aria-current": (A && n) || null, className: D, style: I, to: a },
            S,
          );
          return (
            _ !== g ? (T.ref = t || R) : (T.innerRef = R), s.createElement(m, T)
          );
        });
      });
    },
    94649: function (e, t) {
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
            i = r && /blob:/i.test((t.location || {}).protocol),
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
                            new Blob(["(", i, ")();"], {
                              type: "text/javascript",
                            }),
                          ))),
                      u = new t.Worker(o);
                    return (u.onmessage = _), (u.id = s++), (n[u.id] = u);
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
                var d = null;
                return (
                  a.NODE_STREAM_INPUT,
                  "string" == typeof r
                    ? (d = i.download ? new h(i) : new c(i))
                    : !0 === r.readable && E(r.read) && E(r.on)
                      ? (d = new l(i))
                      : ((t.File && r instanceof File) ||
                          r instanceof Object) &&
                        (d = new f(i)),
                  d.stream(r)
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
                    void 0 !== t.escapeChar && (u = t.escapeChar + o);
                  }
                })();
                var c = new RegExp(p(o), "g");
                if (
                  ("string" == typeof e && (e = JSON.parse(e)),
                  Array.isArray(e))
                ) {
                  if (!e.length || Array.isArray(e[0])) return d(null, e, h);
                  if ("object" == typeof e[0]) return d(f || l(e[0]), e, h);
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
                    d(e.fields || [], e.data || [], h)
                  );
                throw new Error("Unable to serialize unrecognized input");
                function l(e) {
                  if ("object" != typeof e) return [];
                  var t = [];
                  for (var r in e) t.push(r);
                  return t;
                }
                function d(e, t, r) {
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
                    var c = o ? e.length : t[f].length,
                      l = !1,
                      d = o
                        ? 0 === Object.keys(t[f]).length
                        : 0 === t[f].length;
                    if (
                      (r &&
                        !o &&
                        (l =
                          "greedy" === r
                            ? "" === t[f].join("").trim()
                            : 1 === t[f].length && 0 === t[f][0].length),
                      "greedy" === r && o)
                    ) {
                      for (var p = [], _ = 0; _ < c; _++) {
                        var g = u ? e[_] : _;
                        p.push(t[f][g]);
                      }
                      l = "" === p.join("").trim();
                    }
                    if (!l) {
                      for (var v = 0; v < c; v++) {
                        0 < v && !d && (a += n);
                        var y = o && u ? e[v] : v;
                        a += m(t[f][y], v);
                      }
                      f < t.length - 1 && (!r || (0 < c && !d)) && (a += s);
                    }
                  }
                  return a;
                }
                function m(e, t) {
                  if (null == e) return "";
                  if (e.constructor === Date)
                    return JSON.stringify(e).slice(1, 25);
                  e = e.toString().replace(c, u);
                  var i =
                    ("boolean" == typeof r && r) ||
                    (Array.isArray(r) && r[t]) ||
                    (function (e, t) {
                      for (var r = 0; r < t.length; r++)
                        if (-1 < e.indexOf(t[r])) return !0;
                      return !1;
                    })(e, a.BAD_DELIMITERS) ||
                    -1 < e.indexOf(n) ||
                    " " === e.charAt(0) ||
                    " " === e.charAt(e.length - 1);
                  return i ? o + e + o : e;
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
            (a.ParserHandle = d),
            (a.NetworkStreamer = h),
            (a.FileStreamer = f),
            (a.StringStreamer = c),
            (a.ReadableStreamStreamer = l),
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
                    var f = e.before(h.file, h.inputElem);
                    if ("object" == typeof f) {
                      if ("abort" === f.action)
                        return (
                          (t = "AbortError"),
                          (r = h.file),
                          (n = h.inputElem),
                          (u = f.reason),
                          void (E(e.error) && e.error({ name: t }, r, n, u))
                        );
                      if ("skip" === f.action) return void s();
                      "object" == typeof f.config &&
                        (h.instanceConfig = o.extend(
                          h.instanceConfig,
                          f.config,
                        ));
                    } else if ("skip" === f) return void s();
                  }
                  var c = h.instanceConfig.complete;
                  (h.instanceConfig.complete = function (e) {
                    E(c) && c(e, h.file, h.inputElem), s();
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
                var t = y(e);
                (t.chunkSize = parseInt(t.chunkSize)),
                  e.step || e.chunk || (t.chunkSize = null),
                  (this._handle = new d(t)),
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
                    t.open("GET", this._input, !r),
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
                    t.send();
                  } catch (e) {
                    this._chunkError(e.message);
                  }
                  r && 0 === t.status
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
          function c(e) {
            var t;
            u.call(this, (e = e || {})),
              (this.stream = function (e) {
                return (t = e), this._nextChunk();
              }),
              (this._nextChunk = function () {
                if (!this._finished) {
                  var e = this._config.chunkSize,
                    r = e ? t.substr(0, e) : t;
                  return (
                    (t = e ? t.substr(e) : ""),
                    (this._finished = !t),
                    this.parseChunk(r)
                  );
                }
              });
          }
          function l(e) {
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
          function d(e) {
            var t,
              r,
              i,
              n = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,
              s =
                /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
              o = this,
              u = 0,
              h = 0,
              f = !1,
              c = !1,
              l = [],
              d = { data: [], errors: [], meta: {} };
            if (E(e.step)) {
              var _ = e.step;
              e.step = function (t) {
                if (((d = t), k())) v();
                else {
                  if ((v(), 0 === d.data.length)) return;
                  (u += t.data.length),
                    e.preview && u > e.preview ? r.abort() : _(d, o);
                }
              };
            }
            function g(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function v() {
              if (
                (d &&
                  i &&
                  (w(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      a.DefaultDelimiter +
                      "'",
                  ),
                  (i = !1)),
                e.skipEmptyLines)
              )
                for (var t = 0; t < d.data.length; t++)
                  g(d.data[t]) && d.data.splice(t--, 1);
              return (
                k() &&
                  (function () {
                    if (d)
                      if (Array.isArray(d.data[0])) {
                        for (var t = 0; k() && t < d.data.length; t++)
                          d.data[t].forEach(r);
                        d.data.splice(0, 1);
                      } else d.data.forEach(r);
                    function r(t) {
                      E(e.transformHeader) && (t = e.transformHeader(t)),
                        l.push(t);
                    }
                  })(),
                (function () {
                  if (!d || (!e.header && !e.dynamicTyping && !e.transform))
                    return d;
                  function t(t, r) {
                    var i,
                      n = e.header ? {} : [];
                    for (i = 0; i < t.length; i++) {
                      var s = i,
                        a = t[i];
                      e.header && (s = i >= l.length ? "__parsed_extra" : l[i]),
                        e.transform && (a = e.transform(a, s)),
                        (a = b(s, a)),
                        "__parsed_extra" === s
                          ? ((n[s] = n[s] || []), n[s].push(a))
                          : (n[s] = a);
                    }
                    return (
                      e.header &&
                        (i > l.length
                          ? w(
                              "FieldMismatch",
                              "TooManyFields",
                              "Too many fields: expected " +
                                l.length +
                                " fields but parsed " +
                                i,
                              h + r,
                            )
                          : i < l.length &&
                            w(
                              "FieldMismatch",
                              "TooFewFields",
                              "Too few fields: expected " +
                                l.length +
                                " fields but parsed " +
                                i,
                              h + r,
                            )),
                      n
                    );
                  }
                  var r = 1;
                  return (
                    !d.data[0] || Array.isArray(d.data[0])
                      ? ((d.data = d.data.map(t)), (r = d.data.length))
                      : (d.data = t(d.data, 0)),
                    e.header && d.meta && (d.meta.fields = l),
                    (h += r),
                    d
                  );
                })()
              );
            }
            function k() {
              return e.header && 0 === l.length;
            }
            function b(t, r) {
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
                      (n.test(r)
                        ? parseFloat(r)
                        : s.test(r)
                          ? new Date(r)
                          : "" === r
                            ? null
                            : r))
                  : r
              );
              var i;
            }
            function w(e, t, r, i) {
              d.errors.push({ type: e, code: t, message: r, row: i });
            }
            (this.parse = function (n, s, o) {
              var u = e.quoteChar || '"';
              if (
                (e.newline ||
                  (e.newline = (function (e, t) {
                    e = e.substr(0, 1048576);
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
                  (d.meta.delimiter = e.delimiter));
              else {
                var h = (function (t, r, i, n, s) {
                  var o, u, h, f;
                  s = s || [",", "\t", "|", ";", a.RECORD_SEP, a.UNIT_SEP];
                  for (var c = 0; c < s.length; c++) {
                    var l = s[c],
                      d = 0,
                      p = 0,
                      _ = 0;
                    h = void 0;
                    for (
                      var v = new m({
                          comments: n,
                          delimiter: l,
                          newline: r,
                          preview: 10,
                        }).parse(t),
                        y = 0;
                      y < v.data.length;
                      y++
                    )
                      if (i && g(v.data[y])) _++;
                      else {
                        var k = v.data[y].length;
                        (p += k),
                          void 0 !== h
                            ? 0 < k && ((d += Math.abs(k - h)), (h = k))
                            : (h = k);
                      }
                    0 < v.data.length && (p /= v.data.length - _),
                      (void 0 === u || d <= u) &&
                        (void 0 === f || f < p) &&
                        1.99 < p &&
                        ((u = d), (o = l), (f = p));
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
                  (d.meta.delimiter = e.delimiter);
              }
              var c = y(e);
              return (
                e.preview && e.header && c.preview++,
                (t = n),
                (r = new m(c)),
                (d = r.parse(t, s, o)),
                v(),
                f ? { meta: { paused: !0 } } : d || { meta: { paused: !1 } }
              );
            }),
              (this.paused = function () {
                return f;
              }),
              (this.pause = function () {
                (f = !0), r.abort(), (t = t.substr(r.getCharIndex()));
              }),
              (this.resume = function () {
                o.streamer._halted
                  ? ((f = !1), o.streamer.parseChunk(t, !0))
                  : setTimeout(this.resume, 3);
              }),
              (this.aborted = function () {
                return c;
              }),
              (this.abort = function () {
                (c = !0),
                  r.abort(),
                  (d.meta.aborted = !0),
                  E(e.complete) && e.complete(d),
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
              h = (t = void 0 === e.quoteChar ? '"' : e.quoteChar);
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
              c = !1;
            (this.parse = function (e, a, l) {
              if ("string" != typeof e)
                throw new Error("Input must be a string");
              var d = e.length,
                m = r.length,
                _ = i.length,
                g = n.length,
                v = E(s),
                y = [],
                k = [],
                b = [],
                w = (f = 0);
              if (!e) return j();
              if (u || (!1 !== u && -1 === e.indexOf(t))) {
                for (var C = e.split(i), R = 0; R < C.length; R++) {
                  if (((b = C[R]), (f += b.length), R !== C.length - 1))
                    f += i.length;
                  else if (l) return j();
                  if (!n || b.substr(0, g) !== n) {
                    if (v) {
                      if (((y = []), L(b.split(r)), N(), c)) return j();
                    } else L(b.split(r));
                    if (o && o <= R) return (y = y.slice(0, o)), j(!0);
                  }
                }
                return j();
              }
              for (
                var S = e.indexOf(r, f),
                  x = e.indexOf(i, f),
                  O = new RegExp(p(h) + p(t), "g"),
                  A = e.indexOf(t, f);
                ;
              )
                if (e[f] !== t)
                  if (n && 0 === b.length && e.substr(f, g) === n) {
                    if (-1 === x) return j();
                    (f = x + _), (x = e.indexOf(i, f)), (S = e.indexOf(r, f));
                  } else {
                    if (-1 !== S && (S < x || -1 === x)) {
                      if (-1 === A) {
                        b.push(e.substring(f, S)),
                          (f = S + m),
                          (S = e.indexOf(r, f));
                        continue;
                      }
                      var D = U(S, A, x);
                      if (D && D.nextDelim) {
                        (S = D.nextDelim),
                          (A = D.quoteSearch),
                          b.push(e.substring(f, S)),
                          (f = S + m),
                          (S = e.indexOf(r, f));
                        continue;
                      }
                    }
                    if (-1 === x) break;
                    if ((b.push(e.substring(f, x)), M(x + _), v && (N(), c)))
                      return j();
                    if (o && y.length >= o) return j(!0);
                  }
                else
                  for (A = f, f++; ; ) {
                    if (-1 === (A = e.indexOf(t, A + 1)))
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
                    if (A === d - 1) return z(e.substring(f, A).replace(O, t));
                    if (t !== h || e[A + 1] !== h) {
                      if (t === h || 0 === A || e[A - 1] !== h) {
                        var I = F(-1 === x ? S : Math.min(S, x));
                        if (e[A + 1 + I] === r) {
                          b.push(e.substring(f, A).replace(O, t)),
                            e[(f = A + 1 + I + m)] !== t &&
                              (A = e.indexOf(t, f)),
                            (S = e.indexOf(r, f)),
                            (x = e.indexOf(i, f));
                          break;
                        }
                        var T = F(x);
                        if (e.substr(A + 1 + T, _) === i) {
                          if (
                            (b.push(e.substring(f, A).replace(O, t)),
                            M(A + 1 + T + _),
                            (S = e.indexOf(r, f)),
                            (A = e.indexOf(t, f)),
                            v && (N(), c))
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
                          A++;
                      }
                    } else A++;
                  }
              return z();
              function L(e) {
                y.push(e), (w = f);
              }
              function F(t) {
                var r = 0;
                if (-1 !== t) {
                  var i = e.substring(A + 1, t);
                  i && "" === i.trim() && (r = i.length);
                }
                return r;
              }
              function z(t) {
                return (
                  l ||
                    (void 0 === t && (t = e.substr(f)),
                    b.push(t),
                    (f = d),
                    L(b),
                    v && N()),
                  j()
                );
              }
              function M(t) {
                (f = t), L(b), (b = []), (x = e.indexOf(i, f));
              }
              function j(e, t) {
                return {
                  data: t ? y[0] : y,
                  errors: k,
                  meta: {
                    delimiter: r,
                    linebreak: i,
                    aborted: c,
                    truncated: !!e,
                    cursor: w + (a || 0),
                  },
                };
              }
              function N() {
                s(j(void 0, !0)), (y = []), (k = []);
              }
              function U(i, n, s) {
                var a = { nextDelim: void 0, quoteSearch: void 0 },
                  o = e.indexOf(t, n + 1);
                if (n < i && i < o && (o < s || -1 === s)) {
                  var u = e.indexOf(r, o);
                  if (-1 === u) return a;
                  o < u && (o = e.indexOf(t, o + 1)), (a = U(u, o, s));
                } else a = { nextDelim: i, quoteSearch: n };
                return a;
              }
            }),
              (this.abort = function () {
                c = !0;
              }),
              (this.getCharIndex = function () {
                return f;
              });
          }
          function _(e) {
            var t = e.data,
              r = n[t.workerId],
              i = !1;
            if (t.error) r.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var s = {
                abort: function () {
                  (i = !0),
                    g(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: v,
                resume: v,
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
            t.finished && !i && g(t.workerId, t.results);
          }
          function g(e, t) {
            var r = n[e];
            E(r.userComplete) && r.userComplete(t), r.terminate(), delete n[e];
          }
          function v() {
            throw new Error("Not implemented.");
          }
          function y(e) {
            if ("object" != typeof e || null === e) return e;
            var t = Array.isArray(e) ? [] : {};
            for (var r in e) t[r] = y(e[r]);
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
            ((f.prototype = Object.create(u.prototype)).constructor = f),
            ((c.prototype = Object.create(c.prototype)).constructor = c),
            ((l.prototype = Object.create(u.prototype)).constructor = l),
            a
          );
        }),
        void 0 === (n = "function" == typeof r ? r.apply(t, i) : r) ||
          (e.exports = n);
    },
  },
]);
