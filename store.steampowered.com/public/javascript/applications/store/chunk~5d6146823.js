/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6115],
  {
    66272: (e) => {
      e.exports = { BreadContainer: "_3jswbLK3E0Uf47oGyc6qUG" };
    },
    12916: (e) => {
      e.exports = {
        EventTimeSection: "_3HyTVTASSmLacvaM964sgu",
        EventTimeTitle: "_2lG5hFYhu9PGPn6RoFeQOL",
        EventVisibilityItem: "_1she-lvNiCP3ASjTnl4q7x",
        EventEditorInputPaneContainer: "_1fCy4cz5Hyj9wDivcVseuc",
        TimeWidth: "_3JGsBe8Ou5QGqfihv0OPed",
        EventPublishTimeCtn: "_2QIVvn2p9gUwsAlifi-nkM",
        DateWidth: "_2P2kw0vHZogg7Ny7cAjQBo",
        PacificTimeHint: "_18FxDrpsfO5Tt8EFui49hV",
        TimeZone: "-x3Rw6W2fJfWRMs7vKr1I",
        InputBorder: "_1_H1sN2GVTzxSaz55gv03s",
        TimeBlock: "_2xLBsAMYVDoygyWbl2YIzI",
        TimeRowContainer: "BWmgg29ZeDbO6oj7Z1U7T",
        TimeRowDropDown: "_3ECiyuGLUqPzuS1hKCdfDm",
        EndDateAmountCtn: "_1BIlZEGSO_4tw5Lmc1Kkbf",
        EndRound: "jwuNowbLB28M6nkqFkF_C",
        VisibilityItemList: "_3B0QM3cOEqER2AD2Y85NFy",
        VisibilityItems: "_1WleIEEiF-9nJ57tLWkRmS",
        EventEditorVisibilityCtn: "_4gWwydbAbp2t1NCeW9LLV",
        DateErrorCtn: "_1Ao_g72kBAdoOo0lGUG7Mr",
      };
    },
    5065: (e) => {
      e.exports = {
        DashboardView: "_1QwMyGKe9F8g1QnNoMz1JP",
        HeaderCtn: "_3KXER7qT57ii-dLNJO926C",
        TotalsCtn: "FQKvUJASJ1JVJ28HSbIt-",
        EventDetailView: "_2xYo3SIDAveAIlOqU6Tolu",
        HeaderStat: "_3VEmudDnkNmWv6uoQEicRy",
        StatFigure: "_30CaMtSkoYlQf82iQSskB6",
        StatsTitle_ctn: "_1QGGF04ktVe1bIIhdEtXaD",
        StatsTitle: "_3YLaBiVHp_mPV3f8YD9MrK",
        StatsCtnTitle: "_1LlRFhVuQF26o2UG7Vg5s3",
        StatTitle: "_1SPyq_BoQrA60DbjY_Eoke",
        VisibilityNote: "_1G-k1HX2M60Sx-vP4SEe5k",
        StatsActionRow: "_23Ra5sX6-aVU2ayKSkIzE5",
        StatsCtn: "hWCs41T0tFwuGLTHxvthv",
        StatsLeftSection: "_3L-uhfyc1hVkz4mrHwVm9x",
        StatsRightSection: "_1yibDM6eeZtYQXEdjO_Scg",
        ModerationWarningCtn: "_3Jwi3DKhGEzxba2BP4X8wo",
        ModerationWarning: "_1aIU0L2u2GWHUvc2oV1zyd",
        ModerationNote: "_11Z9Iz4InEbE8AVPdJ6iFY",
        DisabledStats: "_2Zp-jzTV09Qjj3uTxcFLN3",
      };
    },
    92451: (e) => {
      e.exports = { DialogCtn: "e7i0Hs6j09gCdPXXjl7Lk" };
    },
    94649: function (e, t) {
      var a, n, i;
      (n = []),
        (a = function e() {
          "use strict";
          var t =
              "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                  ? window
                  : void 0 !== t
                    ? t
                    : {},
            a = !t.document && !!t.postMessage,
            n = a && /blob:/i.test((t.location || {}).protocol),
            i = {},
            r = 0,
            s = {
              parse: function (a, n) {
                var o = (n = n || {}).dynamicTyping || !1;
                if (
                  (w(o) && ((n.dynamicTypingFunction = o), (o = {})),
                  (n.dynamicTyping = o),
                  (n.transform = !!w(n.transform) && n.transform),
                  n.worker && s.WORKERS_SUPPORTED)
                ) {
                  var l = (function () {
                    if (!s.WORKERS_SUPPORTED) return !1;
                    var a,
                      n,
                      o =
                        ((a = t.URL || t.webkitURL || null),
                        (n = e.toString()),
                        s.BLOB_URL ||
                          (s.BLOB_URL = a.createObjectURL(
                            new Blob(["(", n, ")();"], {
                              type: "text/javascript",
                            }),
                          ))),
                      l = new t.Worker(o);
                    return (l.onmessage = v), (l.id = r++), (i[l.id] = l);
                  })();
                  return (
                    (l.userStep = n.step),
                    (l.userChunk = n.chunk),
                    (l.userComplete = n.complete),
                    (l.userError = n.error),
                    (n.step = w(n.step)),
                    (n.chunk = w(n.chunk)),
                    (n.complete = w(n.complete)),
                    (n.error = w(n.error)),
                    delete n.worker,
                    void l.postMessage({ input: a, config: n, workerId: l.id })
                  );
                }
                var _ = null;
                return (
                  s.NODE_STREAM_INPUT,
                  "string" == typeof a
                    ? (_ = n.download ? new c(n) : new d(n))
                    : !0 === a.readable && w(a.read) && w(a.on)
                      ? (_ = new u(n))
                      : ((t.File && a instanceof File) ||
                          a instanceof Object) &&
                        (_ = new m(n)),
                  _.stream(a)
                );
              },
              unparse: function (e, t) {
                var a = !1,
                  n = !0,
                  i = ",",
                  r = "\r\n",
                  o = '"',
                  l = o + o,
                  c = !1,
                  m = null;
                !(function () {
                  if ("object" == typeof t) {
                    if (
                      ("string" != typeof t.delimiter ||
                        s.BAD_DELIMITERS.filter(function (e) {
                          return -1 !== t.delimiter.indexOf(e);
                        }).length ||
                        (i = t.delimiter),
                      ("boolean" == typeof t.quotes ||
                        Array.isArray(t.quotes)) &&
                        (a = t.quotes),
                      ("boolean" != typeof t.skipEmptyLines &&
                        "string" != typeof t.skipEmptyLines) ||
                        (c = t.skipEmptyLines),
                      "string" == typeof t.newline && (r = t.newline),
                      "string" == typeof t.quoteChar && (o = t.quoteChar),
                      "boolean" == typeof t.header && (n = t.header),
                      Array.isArray(t.columns))
                    ) {
                      if (0 === t.columns.length)
                        throw new Error("Option columns is empty");
                      m = t.columns;
                    }
                    void 0 !== t.escapeChar && (l = t.escapeChar + o);
                  }
                })();
                var d = new RegExp(h(o), "g");
                if (
                  ("string" == typeof e && (e = JSON.parse(e)),
                  Array.isArray(e))
                ) {
                  if (!e.length || Array.isArray(e[0])) return _(null, e, c);
                  if ("object" == typeof e[0]) return _(m || u(e[0]), e, c);
                } else if ("object" == typeof e)
                  return (
                    "string" == typeof e.data && (e.data = JSON.parse(e.data)),
                    Array.isArray(e.data) &&
                      (e.fields || (e.fields = e.meta && e.meta.fields),
                      e.fields ||
                        (e.fields = Array.isArray(e.data[0])
                          ? e.fields
                          : u(e.data[0])),
                      Array.isArray(e.data[0]) ||
                        "object" == typeof e.data[0] ||
                        (e.data = [e.data])),
                    _(e.fields || [], e.data || [], c)
                  );
                throw new Error("Unable to serialize unrecognized input");
                function u(e) {
                  if ("object" != typeof e) return [];
                  var t = [];
                  for (var a in e) t.push(a);
                  return t;
                }
                function _(e, t, a) {
                  var s = "";
                  "string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t));
                  var o = Array.isArray(e) && 0 < e.length,
                    l = !Array.isArray(t[0]);
                  if (o && n) {
                    for (var c = 0; c < e.length; c++)
                      0 < c && (s += i), (s += p(e[c], c));
                    0 < t.length && (s += r);
                  }
                  for (var m = 0; m < t.length; m++) {
                    var d = o ? e.length : t[m].length,
                      u = !1,
                      _ = o
                        ? 0 === Object.keys(t[m]).length
                        : 0 === t[m].length;
                    if (
                      (a &&
                        !o &&
                        (u =
                          "greedy" === a
                            ? "" === t[m].join("").trim()
                            : 1 === t[m].length && 0 === t[m][0].length),
                      "greedy" === a && o)
                    ) {
                      for (var h = [], v = 0; v < d; v++) {
                        var E = l ? e[v] : v;
                        h.push(t[m][E]);
                      }
                      u = "" === h.join("").trim();
                    }
                    if (!u) {
                      for (var f = 0; f < d; f++) {
                        0 < f && !_ && (s += i);
                        var g = o && l ? e[f] : f;
                        s += p(t[m][g], f);
                      }
                      m < t.length - 1 && (!a || (0 < d && !_)) && (s += r);
                    }
                  }
                  return s;
                }
                function p(e, t) {
                  if (null == e) return "";
                  if (e.constructor === Date)
                    return JSON.stringify(e).slice(1, 25);
                  e = e.toString().replace(d, l);
                  var n =
                    ("boolean" == typeof a && a) ||
                    (Array.isArray(a) && a[t]) ||
                    (function (e, t) {
                      for (var a = 0; a < t.length; a++)
                        if (-1 < e.indexOf(t[a])) return !0;
                      return !1;
                    })(e, s.BAD_DELIMITERS) ||
                    -1 < e.indexOf(i) ||
                    " " === e.charAt(0) ||
                    " " === e.charAt(e.length - 1);
                  return n ? o + e + o : e;
                }
              },
            };
          if (
            ((s.RECORD_SEP = String.fromCharCode(30)),
            (s.UNIT_SEP = String.fromCharCode(31)),
            (s.BYTE_ORDER_MARK = "\ufeff"),
            (s.BAD_DELIMITERS = ["\r", "\n", '"', s.BYTE_ORDER_MARK]),
            (s.WORKERS_SUPPORTED = !a && !!t.Worker),
            (s.NODE_STREAM_INPUT = 1),
            (s.LocalChunkSize = 10485760),
            (s.RemoteChunkSize = 5242880),
            (s.DefaultDelimiter = ","),
            (s.Parser = p),
            (s.ParserHandle = _),
            (s.NetworkStreamer = c),
            (s.FileStreamer = m),
            (s.StringStreamer = d),
            (s.ReadableStreamStreamer = u),
            t.jQuery)
          ) {
            var o = t.jQuery;
            o.fn.parse = function (e) {
              var a = e.config || {},
                n = [];
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
                    n.push({
                      file: this.files[i],
                      inputElem: this,
                      instanceConfig: o.extend({}, a),
                    });
                }),
                i(),
                this
              );
              function i() {
                if (0 !== n.length) {
                  var t,
                    a,
                    i,
                    l,
                    c = n[0];
                  if (w(e.before)) {
                    var m = e.before(c.file, c.inputElem);
                    if ("object" == typeof m) {
                      if ("abort" === m.action)
                        return (
                          (t = "AbortError"),
                          (a = c.file),
                          (i = c.inputElem),
                          (l = m.reason),
                          void (w(e.error) && e.error({ name: t }, a, i, l))
                        );
                      if ("skip" === m.action) return void r();
                      "object" == typeof m.config &&
                        (c.instanceConfig = o.extend(
                          c.instanceConfig,
                          m.config,
                        ));
                    } else if ("skip" === m) return void r();
                  }
                  var d = c.instanceConfig.complete;
                  (c.instanceConfig.complete = function (e) {
                    w(d) && d(e, c.file, c.inputElem), r();
                  }),
                    s.parse(c.file, c.instanceConfig);
                } else w(e.complete) && e.complete();
              }
              function r() {
                n.splice(0, 1), i();
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
                var t = g(e);
                (t.chunkSize = parseInt(t.chunkSize)),
                  e.step || e.chunk || (t.chunkSize = null),
                  (this._handle = new _(t)),
                  ((this._handle.streamer = this)._config = t);
              }.call(this, e),
              (this.parseChunk = function (e, a) {
                if (this.isFirstChunk && w(this._config.beforeFirstChunk)) {
                  var i = this._config.beforeFirstChunk(e);
                  void 0 !== i && (e = i);
                }
                (this.isFirstChunk = !1), (this._halted = !1);
                var r = this._partialLine + e;
                this._partialLine = "";
                var o = this._handle.parse(r, this._baseIndex, !this._finished);
                if (!this._handle.paused() && !this._handle.aborted()) {
                  var l = o.meta.cursor;
                  this._finished ||
                    ((this._partialLine = r.substring(l - this._baseIndex)),
                    (this._baseIndex = l)),
                    o && o.data && (this._rowCount += o.data.length);
                  var c =
                    this._finished ||
                    (this._config.preview &&
                      this._rowCount >= this._config.preview);
                  if (n)
                    t.postMessage({
                      results: o,
                      workerId: s.WORKER_ID,
                      finished: c,
                    });
                  else if (w(this._config.chunk) && !a) {
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
                      !c ||
                      !w(this._config.complete) ||
                      (o && o.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    c || (o && o.meta.paused) || this._nextChunk(),
                    o
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                w(this._config.error)
                  ? this._config.error(e)
                  : n &&
                    this._config.error &&
                    t.postMessage({
                      workerId: s.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function c(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = s.RemoteChunkSize),
              l.call(this, e),
              (this._nextChunk = a
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
                    a ||
                      ((t.onload = S(this._chunkLoaded, this)),
                      (t.onerror = S(this._chunkError, this))),
                    t.open("GET", this._input, !a),
                    this._config.downloadRequestHeaders)
                  ) {
                    var e = this._config.downloadRequestHeaders;
                    for (var n in e) t.setRequestHeader(n, e[n]);
                  }
                  if (this._config.chunkSize) {
                    var i = this._start + this._config.chunkSize - 1;
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + i,
                    );
                  }
                  try {
                    t.send();
                  } catch (e) {
                    this._chunkError(e.message);
                  }
                  a && 0 === t.status
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
                var a = t.statusText || e;
                this._sendError(new Error(a));
              });
          }
          function m(e) {
            var t, a;
            (e = e || {}).chunkSize || (e.chunkSize = s.LocalChunkSize),
              l.call(this, e);
            var n = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (a = e.slice || e.webkitSlice || e.mozSlice),
                n
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
                  e = a.call(e, this._start, i);
                }
                var r = t.readAsText(e, this._config.encoding);
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
            l.call(this, (e = e || {})),
              (this.stream = function (e) {
                return (t = e), this._nextChunk();
              }),
              (this._nextChunk = function () {
                if (!this._finished) {
                  var e = this._config.chunkSize,
                    a = e ? t.substr(0, e) : t;
                  return (
                    (t = e ? t.substr(e) : ""),
                    (this._finished = !t),
                    this.parseChunk(a)
                  );
                }
              });
          }
          function u(e) {
            l.call(this, (e = e || {}));
            var t = [],
              a = !0,
              n = !1;
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
                n && 1 === t.length && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (a = !0);
              }),
              (this._streamData = S(function (e) {
                try {
                  t.push(
                    "string" == typeof e
                      ? e
                      : e.toString(this._config.encoding),
                  ),
                    a &&
                      ((a = !1),
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
                this._streamCleanUp(), (n = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = S(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function _(e) {
            var t,
              a,
              n,
              i = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,
              r =
                /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
              o = this,
              l = 0,
              c = 0,
              m = !1,
              d = !1,
              u = [],
              _ = { data: [], errors: [], meta: {} };
            if (w(e.step)) {
              var v = e.step;
              e.step = function (t) {
                if (((_ = t), S())) f();
                else {
                  if ((f(), 0 === _.data.length)) return;
                  (l += t.data.length),
                    e.preview && l > e.preview ? a.abort() : v(_, o);
                }
              };
            }
            function E(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function f() {
              if (
                (_ &&
                  n &&
                  (b(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      s.DefaultDelimiter +
                      "'",
                  ),
                  (n = !1)),
                e.skipEmptyLines)
              )
                for (var t = 0; t < _.data.length; t++)
                  E(_.data[t]) && _.data.splice(t--, 1);
              return (
                S() &&
                  (function () {
                    if (_)
                      if (Array.isArray(_.data[0])) {
                        for (var t = 0; S() && t < _.data.length; t++)
                          _.data[t].forEach(a);
                        _.data.splice(0, 1);
                      } else _.data.forEach(a);
                    function a(t) {
                      w(e.transformHeader) && (t = e.transformHeader(t)),
                        u.push(t);
                    }
                  })(),
                (function () {
                  if (!_ || (!e.header && !e.dynamicTyping && !e.transform))
                    return _;
                  function t(t, a) {
                    var n,
                      i = e.header ? {} : [];
                    for (n = 0; n < t.length; n++) {
                      var r = n,
                        s = t[n];
                      e.header && (r = n >= u.length ? "__parsed_extra" : u[n]),
                        e.transform && (s = e.transform(s, r)),
                        (s = y(r, s)),
                        "__parsed_extra" === r
                          ? ((i[r] = i[r] || []), i[r].push(s))
                          : (i[r] = s);
                    }
                    return (
                      e.header &&
                        (n > u.length
                          ? b(
                              "FieldMismatch",
                              "TooManyFields",
                              "Too many fields: expected " +
                                u.length +
                                " fields but parsed " +
                                n,
                              c + a,
                            )
                          : n < u.length &&
                            b(
                              "FieldMismatch",
                              "TooFewFields",
                              "Too few fields: expected " +
                                u.length +
                                " fields but parsed " +
                                n,
                              c + a,
                            )),
                      i
                    );
                  }
                  var a = 1;
                  return (
                    !_.data[0] || Array.isArray(_.data[0])
                      ? ((_.data = _.data.map(t)), (a = _.data.length))
                      : (_.data = t(_.data, 0)),
                    e.header && _.meta && (_.meta.fields = u),
                    (c += a),
                    _
                  );
                })()
              );
            }
            function S() {
              return e.header && 0 === u.length;
            }
            function y(t, a) {
              return (
                (n = t),
                e.dynamicTypingFunction &&
                  void 0 === e.dynamicTyping[n] &&
                  (e.dynamicTyping[n] = e.dynamicTypingFunction(n)),
                !0 === (e.dynamicTyping[n] || e.dynamicTyping)
                  ? "true" === a ||
                    "TRUE" === a ||
                    ("false" !== a &&
                      "FALSE" !== a &&
                      (i.test(a)
                        ? parseFloat(a)
                        : r.test(a)
                          ? new Date(a)
                          : "" === a
                            ? null
                            : a))
                  : a
              );
              var n;
            }
            function b(e, t, a, n) {
              _.errors.push({ type: e, code: t, message: a, row: n });
            }
            (this.parse = function (i, r, o) {
              var l = e.quoteChar || '"';
              if (
                (e.newline ||
                  (e.newline = (function (e, t) {
                    e = e.substr(0, 1048576);
                    var a = new RegExp(h(t) + "([^]*?)" + h(t), "gm"),
                      n = (e = e.replace(a, "")).split("\r"),
                      i = e.split("\n"),
                      r = 1 < i.length && i[0].length < n[0].length;
                    if (1 === n.length || r) return "\n";
                    for (var s = 0, o = 0; o < n.length; o++)
                      "\n" === n[o][0] && s++;
                    return s >= n.length / 2 ? "\r\n" : "\r";
                  })(i, l)),
                (n = !1),
                e.delimiter)
              )
                w(e.delimiter) &&
                  ((e.delimiter = e.delimiter(i)),
                  (_.meta.delimiter = e.delimiter));
              else {
                var c = (function (t, a, n, i, r) {
                  var o, l, c, m;
                  r = r || [",", "\t", "|", ";", s.RECORD_SEP, s.UNIT_SEP];
                  for (var d = 0; d < r.length; d++) {
                    var u = r[d],
                      _ = 0,
                      h = 0,
                      v = 0;
                    c = void 0;
                    for (
                      var f = new p({
                          comments: i,
                          delimiter: u,
                          newline: a,
                          preview: 10,
                        }).parse(t),
                        g = 0;
                      g < f.data.length;
                      g++
                    )
                      if (n && E(f.data[g])) v++;
                      else {
                        var S = f.data[g].length;
                        (h += S),
                          void 0 !== c
                            ? 0 < S && ((_ += Math.abs(S - c)), (c = S))
                            : (c = S);
                      }
                    0 < f.data.length && (h /= f.data.length - v),
                      (void 0 === l || _ <= l) &&
                        (void 0 === m || m < h) &&
                        1.99 < h &&
                        ((l = _), (o = u), (m = h));
                  }
                  return { successful: !!(e.delimiter = o), bestDelimiter: o };
                })(
                  i,
                  e.newline,
                  e.skipEmptyLines,
                  e.comments,
                  e.delimitersToGuess,
                );
                c.successful
                  ? (e.delimiter = c.bestDelimiter)
                  : ((n = !0), (e.delimiter = s.DefaultDelimiter)),
                  (_.meta.delimiter = e.delimiter);
              }
              var d = g(e);
              return (
                e.preview && e.header && d.preview++,
                (t = i),
                (a = new p(d)),
                (_ = a.parse(t, r, o)),
                f(),
                m ? { meta: { paused: !0 } } : _ || { meta: { paused: !1 } }
              );
            }),
              (this.paused = function () {
                return m;
              }),
              (this.pause = function () {
                (m = !0), a.abort(), (t = t.substr(a.getCharIndex()));
              }),
              (this.resume = function () {
                o.streamer._halted
                  ? ((m = !1), o.streamer.parseChunk(t, !0))
                  : setTimeout(this.resume, 3);
              }),
              (this.aborted = function () {
                return d;
              }),
              (this.abort = function () {
                (d = !0),
                  a.abort(),
                  (_.meta.aborted = !0),
                  w(e.complete) && e.complete(_),
                  (t = "");
              });
          }
          function h(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function p(e) {
            var t,
              a = (e = e || {}).delimiter,
              n = e.newline,
              i = e.comments,
              r = e.step,
              o = e.preview,
              l = e.fastMode,
              c = (t = void 0 === e.quoteChar ? '"' : e.quoteChar);
            if (
              (void 0 !== e.escapeChar && (c = e.escapeChar),
              ("string" != typeof a || -1 < s.BAD_DELIMITERS.indexOf(a)) &&
                (a = ","),
              i === a)
            )
              throw new Error("Comment character same as delimiter");
            !0 === i
              ? (i = "#")
              : ("string" != typeof i || -1 < s.BAD_DELIMITERS.indexOf(i)) &&
                (i = !1),
              "\n" !== n && "\r" !== n && "\r\n" !== n && (n = "\n");
            var m = 0,
              d = !1;
            (this.parse = function (e, s, u) {
              if ("string" != typeof e)
                throw new Error("Input must be a string");
              var _ = e.length,
                p = a.length,
                v = n.length,
                E = i.length,
                f = w(r),
                g = [],
                S = [],
                y = [],
                b = (m = 0);
              if (!e) return G();
              if (l || (!1 !== l && -1 === e.indexOf(t))) {
                for (var D = e.split(n), T = 0; T < D.length; T++) {
                  if (((y = D[T]), (m += y.length), T !== D.length - 1))
                    m += n.length;
                  else if (u) return G();
                  if (!i || y.substr(0, E) !== i) {
                    if (f) {
                      if (((g = []), R(y.split(a)), F(), d)) return G();
                    } else R(y.split(a));
                    if (o && o <= T) return (g = g.slice(0, o)), G(!0);
                  }
                }
                return G();
              }
              for (
                var C = e.indexOf(a, m),
                  A = e.indexOf(n, m),
                  I = new RegExp(h(c) + h(t), "g"),
                  k = e.indexOf(t, m);
                ;
              )
                if (e[m] !== t)
                  if (i && 0 === y.length && e.substr(m, E) === i) {
                    if (-1 === A) return G();
                    (m = A + v), (A = e.indexOf(n, m)), (C = e.indexOf(a, m));
                  } else {
                    if (-1 !== C && (C < A || -1 === A)) {
                      if (-1 === k) {
                        y.push(e.substring(m, C)),
                          (m = C + p),
                          (C = e.indexOf(a, m));
                        continue;
                      }
                      var N = H(C, k, A);
                      if (N && N.nextDelim) {
                        (C = N.nextDelim),
                          (k = N.quoteSearch),
                          y.push(e.substring(m, C)),
                          (m = C + p),
                          (C = e.indexOf(a, m));
                        continue;
                      }
                    }
                    if (-1 === A) break;
                    if ((y.push(e.substring(m, A)), x(A + v), f && (F(), d)))
                      return G();
                    if (o && g.length >= o) return G(!0);
                  }
                else
                  for (k = m, m++; ; ) {
                    if (-1 === (k = e.indexOf(t, k + 1)))
                      return (
                        u ||
                          S.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: g.length,
                            index: m,
                          }),
                        P()
                      );
                    if (k === _ - 1) return P(e.substring(m, k).replace(I, t));
                    if (t !== c || e[k + 1] !== c) {
                      if (t === c || 0 === k || e[k - 1] !== c) {
                        var B = O(-1 === A ? C : Math.min(C, A));
                        if (e[k + 1 + B] === a) {
                          y.push(e.substring(m, k).replace(I, t)),
                            e[(m = k + 1 + B + p)] !== t &&
                              (k = e.indexOf(t, m)),
                            (C = e.indexOf(a, m)),
                            (A = e.indexOf(n, m));
                          break;
                        }
                        var L = O(A);
                        if (e.substr(k + 1 + L, v) === n) {
                          if (
                            (y.push(e.substring(m, k).replace(I, t)),
                            x(k + 1 + L + v),
                            (C = e.indexOf(a, m)),
                            (k = e.indexOf(t, m)),
                            f && (F(), d))
                          )
                            return G();
                          if (o && g.length >= o) return G(!0);
                          break;
                        }
                        S.push({
                          type: "Quotes",
                          code: "InvalidQuotes",
                          message:
                            "Trailing quote on quoted field is malformed",
                          row: g.length,
                          index: m,
                        }),
                          k++;
                      }
                    } else k++;
                  }
              return P();
              function R(e) {
                g.push(e), (b = m);
              }
              function O(t) {
                var a = 0;
                if (-1 !== t) {
                  var n = e.substring(k + 1, t);
                  n && "" === n.trim() && (a = n.length);
                }
                return a;
              }
              function P(t) {
                return (
                  u ||
                    (void 0 === t && (t = e.substr(m)),
                    y.push(t),
                    (m = _),
                    R(y),
                    f && F()),
                  G()
                );
              }
              function x(t) {
                (m = t), R(y), (y = []), (A = e.indexOf(n, m));
              }
              function G(e, t) {
                return {
                  data: t ? g[0] : g,
                  errors: S,
                  meta: {
                    delimiter: a,
                    linebreak: n,
                    aborted: d,
                    truncated: !!e,
                    cursor: b + (s || 0),
                  },
                };
              }
              function F() {
                r(G(void 0, !0)), (g = []), (S = []);
              }
              function H(n, i, r) {
                var s = { nextDelim: void 0, quoteSearch: void 0 },
                  o = e.indexOf(t, i + 1);
                if (i < n && n < o && (o < r || -1 === r)) {
                  var l = e.indexOf(a, o);
                  if (-1 === l) return s;
                  o < l && (o = e.indexOf(t, o + 1)), (s = H(l, o, r));
                } else s = { nextDelim: n, quoteSearch: i };
                return s;
              }
            }),
              (this.abort = function () {
                d = !0;
              }),
              (this.getCharIndex = function () {
                return m;
              });
          }
          function v(e) {
            var t = e.data,
              a = i[t.workerId],
              n = !1;
            if (t.error) a.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var r = {
                abort: function () {
                  (n = !0),
                    E(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: f,
                resume: f,
              };
              if (w(a.userStep)) {
                for (
                  var s = 0;
                  s < t.results.data.length &&
                  (a.userStep(
                    {
                      data: t.results.data[s],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    r,
                  ),
                  !n);
                  s++
                );
                delete t.results;
              } else
                w(a.userChunk) &&
                  (a.userChunk(t.results, r, t.file), delete t.results);
            }
            t.finished && !n && E(t.workerId, t.results);
          }
          function E(e, t) {
            var a = i[e];
            w(a.userComplete) && a.userComplete(t), a.terminate(), delete i[e];
          }
          function f() {
            throw new Error("Not implemented.");
          }
          function g(e) {
            if ("object" != typeof e || null === e) return e;
            var t = Array.isArray(e) ? [] : {};
            for (var a in e) t[a] = g(e[a]);
            return t;
          }
          function S(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function w(e) {
            return "function" == typeof e;
          }
          return (
            n &&
              (t.onmessage = function (e) {
                var a = e.data;
                if (
                  (void 0 === s.WORKER_ID && a && (s.WORKER_ID = a.workerId),
                  "string" == typeof a.input)
                )
                  t.postMessage({
                    workerId: s.WORKER_ID,
                    results: s.parse(a.input, a.config),
                    finished: !0,
                  });
                else if (
                  (t.File && a.input instanceof File) ||
                  a.input instanceof Object
                ) {
                  var n = s.parse(a.input, a.config);
                  n &&
                    t.postMessage({
                      workerId: s.WORKER_ID,
                      results: n,
                      finished: !0,
                    });
                }
              }),
            ((c.prototype = Object.create(l.prototype)).constructor = c),
            ((m.prototype = Object.create(l.prototype)).constructor = m),
            ((d.prototype = Object.create(d.prototype)).constructor = d),
            ((u.prototype = Object.create(l.prototype)).constructor = u),
            s
          );
        }),
        void 0 === (i = "function" == typeof a ? a.apply(t, n) : a) ||
          (e.exports = i);
    },
    22305: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => c });
      var n = a(90626),
        i = a(66272),
        r = a(52038),
        s = a(17083),
        o = a(45699),
        l = a(76217);
      function c(e) {
        const { crumbs: t, className: a } = e;
        return t && 0 != t.length
          ? n.createElement(
              "div",
              { className: (0, r.A)(i.BreadContainer, a) },
              n.createElement(
                l.Z,
                { className: "blockbg", "flow-children": "row" },
                t.map((e) => {
                  const t = new Array();
                  return (
                    e.url.startsWith("http")
                      ? t.push(
                          n.createElement(
                            o.Ii,
                            { key: "anchor_" + e.name, href: e.url },
                            e.name,
                          ),
                        )
                      : t.push(
                          n.createElement(
                            s.N_,
                            { key: "link_" + e.name, to: e.url },
                            e.name,
                          ),
                        ),
                    t.push(
                      n.createElement("span", { key: e.name + "span" }, " > "),
                    ),
                    t
                  );
                }),
              ),
              n.createElement("div", { style: { clear: "left" } }),
            )
          : null;
      }
    },
    40224: (e, t, a) => {
      "use strict";
      a.d(t, { K8: () => De, P2: () => Te, jA: () => ye });
      var n = a(34629),
        i = a(22837),
        r = a(20019),
        s = a(41735),
        o = a.n(s),
        l = a(75844),
        c = a(65946),
        m = a(90626),
        d = a(77516),
        u = a(4796),
        _ = a(44165),
        h = a(60746),
        p = a(78327),
        v = a(14947),
        E = a(68797),
        f = a(17720);
      class g {
        constructor(e) {
          (0, v.Gn)(this),
            (this.m_stats = {
              event_gid: "0",
              library_overview_shown: 0,
              library_overview_read: 0,
              app_details_spotlight_shown: 0,
              app_details_spotlight_read: 0,
              app_details_activity_shown: 0,
              app_details_activity_read: 0,
              store_app_page_shown: 0,
              store_app_page_read: 0,
              store_front_page_shown: 0,
              store_front_page_read: 0,
              community_hub_shown: 0,
              community_hub_read: 0,
              news_hub_shown: 0,
              news_hub_read: 0,
              event_scroller_read: 0,
              ...e,
            }),
            (this.m_stats.total_showm =
              this.m_stats.library_overview_shown +
              this.m_stats.app_details_activity_shown +
              this.m_stats.app_details_spotlight_shown +
              this.m_stats.store_app_page_shown +
              this.m_stats.store_front_page_shown +
              this.m_stats.community_hub_shown +
              this.m_stats.news_hub_shown),
            (this.m_stats.total_read =
              this.m_stats.library_overview_read +
              this.m_stats.app_details_activity_read +
              this.m_stats.app_details_spotlight_read +
              this.m_stats.store_app_page_read +
              this.m_stats.store_front_page_read +
              this.m_stats.community_hub_read +
              this.m_stats.news_hub_read +
              this.m_stats.event_scroller_read),
            (this.m_lastUpdateTime = e ? Math.floor(Date.now() / 1e3) : 0);
        }
        reset(e) {
          (this.m_stats.library_overview_shown = e.library_overview_shown),
            (this.m_stats.library_overview_read = e.library_overview_read),
            (this.m_stats.app_details_spotlight_shown =
              e.app_details_spotlight_shown),
            (this.m_stats.app_details_spotlight_read =
              e.app_details_spotlight_read),
            (this.m_stats.app_details_activity_shown =
              e.app_details_activity_shown),
            (this.m_stats.app_details_activity_read =
              e.app_details_activity_read),
            (this.m_stats.store_app_page_shown = e.store_app_page_shown),
            (this.m_stats.store_app_page_read = e.store_app_page_read),
            (this.m_stats.store_front_page_shown = e.store_front_page_shown),
            (this.m_stats.store_front_page_read = e.store_front_page_read),
            (this.m_stats.community_hub_shown = e.community_hub_shown),
            (this.m_stats.community_hub_read = e.community_hub_read),
            (this.m_stats.news_hub_shown = e.news_hub_shown),
            (this.m_stats.news_hub_read = e.news_hub_read),
            (this.m_stats.event_scroller_read = e.event_scroller_read),
            (this.m_stats.total_showm =
              e.library_overview_shown +
              e.app_details_activity_shown +
              e.app_details_spotlight_shown +
              e.store_app_page_shown +
              e.store_front_page_shown +
              e.community_hub_shown +
              e.news_hub_shown),
            (this.m_stats.total_read =
              e.library_overview_read +
              e.app_details_activity_read +
              e.app_details_spotlight_read +
              e.store_app_page_read +
              e.store_front_page_read +
              e.community_hub_read +
              e.news_hub_read +
              e.event_scroller_read),
            (this.m_lastUpdateTime = Date.now() / 1e3);
        }
        m_stats = void 0;
        m_lastUpdateTime = void 0;
      }
      (0, n.Cg)([v.sH], g.prototype, "m_stats", void 0),
        (0, n.Cg)([v.sH], g.prototype, "m_lastUpdateTime", void 0);
      class S {
        m_mapPerEventStats = new Map();
        m_mapSummaryStats = new Map();
        m_bLoadedFromConfig = !1;
        constructor() {
          (0, v.Gn)(this);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, p.Tc)("trackingdatasummary", "application_config");
            this.ValidateStoreDefault(e) &&
              this.m_mapSummaryStats.set(e.clan_account_id, new g(e));
            let t = (0, p.Tc)("trackingdataevents", "application_config");
            this.ValidateStoreDefaultList(t) &&
              t.forEach((e) => {
                let t = f.b.InitFromClanID(e.clan_account_id),
                  a = this.GetKey(t, e.event_gid);
                this.m_mapPerEventStats.set(a, new g(e));
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !(!t || "object" != typeof t || !t.clan_account_id) &&
            "number" == typeof t.clan_account_id &&
            t.clan_account_id > 0
          );
        }
        ValidateStoreDefaultList(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clan_account_id &&
            t[0].clan_account_id > 0
          );
        }
        GetStatsFor(e, t) {
          this.LazyInit();
          let a = this.GetKey(e, t);
          return (
            this.m_mapPerEventStats.has(a) ||
              this.m_mapPerEventStats.set(a, new g(null)),
            this.m_mapPerEventStats.get(a)
          );
        }
        GetTotalStats(e) {
          return (
            this.LazyInit(),
            this.m_mapSummaryStats.has(e.GetAccountID()) ||
              this.m_mapSummaryStats.set(e.GetAccountID(), new g(null)),
            this.m_mapSummaryStats.get(e.GetAccountID())
          );
        }
        GetKey(e, t) {
          return e.GetAccountID() + "_" + t;
        }
        async LoadStatsForEvents(e, t, a) {
          this.LazyInit();
          let n = Date.now() / 1e3,
            i = t.filter((t) => {
              let a = this.GetKey(e, t),
                i = this.m_mapPerEventStats.get(a);
              return !i || null == i.m_stats || i.m_lastUpdateTime < n - 3600;
            });
          if (!i || 0 == i.length) return !0;
          let r = (0, p.xv)() + "actions/ajaxgetpartnereventsreport",
            s = {
              sessionid: p.TS.SESSIONID,
              clan_account_id: e.GetAccountID(),
              gidlist: i.join(","),
            };
          try {
            let t = await o().get(r, {
              params: s,
              withCredentials: !0,
              cancelToken: a?.token,
            });
            return (
              (0, v.h5)(() => {
                this.m_mapSummaryStats.set(
                  e.GetAccountID(),
                  new g(t.data.summary),
                ),
                  t.data.events_detail.forEach((t) => {
                    let a = this.GetKey(e, t.event_gid);
                    if (this.m_mapPerEventStats.has(a)) {
                      this.m_mapPerEventStats.get(a).reset(t);
                    } else this.m_mapPerEventStats.set(a, new g(t));
                  });
              }),
              !0
            );
          } catch (e) {
            let t = (0, E.H)(e);
            console.error("CPartnerEventReportingStore " + t.strErrorMsg, t);
          }
          return !1;
        }
        BHasEventStats(e, t) {
          let a = f.b.InitFromClanID(e),
            n = this.GetKey(a, t),
            i = this.m_mapPerEventStats.get(n);
          return Boolean(i && i.m_stats);
        }
      }
      (0, n.Cg)([v.sH], S.prototype, "m_mapPerEventStats", void 0),
        (0, n.Cg)([v.sH], S.prototype, "m_mapSummaryStats", void 0),
        (0, n.Cg)([v.XI], S.prototype, "LazyInit", null);
      const w = new S();
      var y = a(55263),
        b = a(22305),
        D = a(84811),
        T = a(41550),
        C = a(32541),
        A = a(42011),
        I = a(43616),
        k = a(75113),
        N = a(43667),
        B = a(64940),
        L = a(90316),
        R = a.n(L),
        O = a(67417),
        P = a(96971),
        x = a(71746),
        G = a(95695),
        F = a.n(G),
        H = a(52038),
        M = a(61859),
        U = a(5065),
        V = a(82227),
        j = a(738),
        z = a(33737),
        W = a(51272),
        q = a(6379),
        K = a(99637),
        Q = a(51706),
        Y = a(22797),
        Z = a(94649),
        J = a.n(Z);
      class X {
        static ParseCSVFile(e) {
          return new Promise((t, a) => {
            const n = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: t,
              error: (e) => a({ errors: [e] }),
            };
            J().parse(e, n);
          });
        }
        static ReadFile(e) {
          return new Promise((t, a) => {
            const n = new FileReader();
            (n.onload = (e) => t(n.result)), n.readAsText(e);
          });
        }
        static WriteFile(e, t) {
          let a = document.createElement("a");
          if (navigator.msSaveBlob) navigator.msSaveBlob(e, t);
          else {
            const t = window.URL.createObjectURL(e);
            a.href = t;
          }
          a.setAttribute("download", t), a.click();
          try {
            document.removeChild(a);
          } catch (e) {}
        }
        static WriteCSVToFile(e, t) {
          const a = J().unparse(e, { header: !0 });
          X.WriteFile(new Blob([a], { type: "text/csv:charset=utf-8;" }), t);
        }
        static m_DummyValueForQuestionHack = 0;
        static WriteXMLToFile(e, t) {
          const a = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let n =
            "<" + a() + 'xml version="1.0" encoding="UTF-8" ' + a() + ">\n";
          (n += new XMLSerializer().serializeToString(e)),
            X.WriteFile(
              new Blob([n], { type: "application/xml:charset=utf-8;" }),
              t,
            );
        }
      }
      var $ = a(91675),
        ee = a(14771),
        te = a(92451),
        ae = a.n(te);
      const ne = { include_basic_info: !0 };
      function ie(e) {
        const { clanInfo: t, closeModal: a } = e,
          [n] = (0, y.t7)(t.appid, ne),
          [r, s] = m.useState(!0),
          [l, c] = m.useState(!0),
          d = 1063339200,
          u = _.HD.GetTimeNowWithOverride(),
          [h, v] = m.useState(u - ee.Kp.PerMonth),
          [E, f] = m.useState(u),
          [g, S] = m.useState(-1),
          b = g >= 0;
        return m.createElement(
          Q.o0,
          {
            strTitle: (0, M.we)("#EventDashboard_Stats_title"),
            strDescription: (0, M.we)("#EventDashboard_Stats_desc"),
            closeModal: a,
            bDisableBackgroundDismiss: !0,
            bOKDisabled: b,
            onOK: () =>
              (async function (e, t, a, n, r) {
                const s = new Array(),
                  l = o().CancelToken.source();
                let c = 0;
                r(c);
                const m = 100;
                let d,
                  u = 0,
                  _ = new Array();
                const h = (0, i.sf)(p.TS.LANGUAGE);
                do {
                  if (
                    ((u += 1),
                    (_ = await q.O3.LoadAdjacentPartnerEvents(
                      d,
                      e.clanSteamID,
                      void 0,
                      0,
                      m,
                      { rtime_oldestevent: a, only_summaries: !0 },
                      l,
                    )),
                    _?.length > 0)
                  ) {
                    (c += _.length), r(c), (d = _[_.length - 1].GID);
                    const a = _.filter(
                      (e) => e.startTime <= n && e.BIsVisibleEvent(),
                    ).map((e) => e.GID);
                    a.length > 0 &&
                      (await w.LoadStatsForEvents(e.clanSteamID, a, l),
                      (c += a.length),
                      r(c),
                      a.forEach((a) => {
                        const n = w.GetStatsFor(e.clanSteamID, a),
                          i = q.O3.GetClanEventModel(a),
                          r = i.GetStartTimeAndDateUnixSeconds(),
                          o = i.GetEndTimeAndDateUnixSeconds();
                        s.push({
                          appid: e.appid,
                          app_name: t?.GetName() || "",
                          event_name: i.GetNameWithFallback(h),
                          event_type: i.GetEventTypeAsString(),
                          event_start_date: (0, M.TW)(r) + " @ " + (0, $.KC)(r),
                          event_end_date: (0, M.TW)(o) + " @ " + (0, $.KC)(o),
                          ...n.m_stats,
                          event_gid: "'" + a,
                        });
                      }));
                  }
                } while (_.length == m && u < 100);
                return (
                  X.WriteCSVToFile(
                    s,
                    "event_stats_" +
                      e.group_name.toLocaleLowerCase().replace(/\s/g, "_") +
                      ".csv",
                  ),
                  !0
                );
              })(t, n, r ? d : h, l ? Number.MAX_SAFE_INTEGER : E, S).then(() =>
                a(),
              ),
          },
          Boolean(t.appid && !n)
            ? m.createElement(Y.t, {
                string: (0, M.we)("#Loading"),
                position: "center",
                size: "medium",
              })
            : m.createElement(
                "div",
                { className: ae().DialogCtn },
                m.createElement(
                  "div",
                  { className: "DialogLabel" },
                  (0, M.we)("#EventDashboard_Stats_Oldest_Title"),
                ),
                m.createElement(
                  "div",
                  { className: "_DialogInputContainer _DialogLayout" },
                  m.createElement(z.Yh, {
                    label: (0, M.we)("#EventDashboard_Stats_Oldest"),
                    onChange: s,
                    checked: r,
                    disabled: b,
                  }),
                  !r &&
                    m.createElement(
                      "div",
                      null,
                      (0, M.we)("#EventDashboard_Stats_Oldest_Override"),
                      m.createElement(K.K, {
                        nEarliestTime: d,
                        nLatestTime: l ? void 0 : E,
                        bShowTimeZone: !0,
                        fnGetTimeToUpdate: () => h,
                        fnSetTimeToUpdate: v,
                        disabled: b,
                      }),
                    ),
                ),
                m.createElement(
                  "div",
                  { className: "DialogLabel" },
                  (0, M.we)("#EventDashboard_Stats_Newest_Title"),
                ),
                m.createElement(
                  "div",
                  { className: "_DialogInputContainer _DialogLayout" },
                  m.createElement(z.Yh, {
                    label: (0, M.we)("#EventDashboard_Stats_Newest"),
                    onChange: c,
                    checked: l,
                    disabled: b,
                  }),
                  !l &&
                    m.createElement(
                      "div",
                      null,
                      (0, M.we)("#EventDashboard_Stats_Newest_Override"),
                      m.createElement(K.K, {
                        nEarliestTime: r ? d : h,
                        bShowTimeZone: !0,
                        fnGetTimeToUpdate: () => E,
                        fnSetTimeToUpdate: f,
                        disabled: b,
                      }),
                    ),
                ),
                b &&
                  m.createElement(Y.t, {
                    position: "center",
                    size: "medium",
                    string: (0, M.we)("#EventDashboard_Stats_Progress", g),
                  }),
              ),
        );
      }
      var re = a(56011),
        se = a(26408),
        oe = a(95034);
      function le(e) {
        const {
            summary: t,
            clanSteamID: a,
            bEventIsInModerationQueue: n,
            bIsAllowedInLibrary: i,
            bCompact: r,
          } = e,
          s = t.total_read + t.total_showm,
          [o] = (0, oe.QD)("expanded", !1),
          [l, c] = m.useState(!!o || r);
        if (0 == s) return null;
        const d = u.ac.GetClanInfoByClanAccountID(a.GetAccountID());
        return m.createElement(
          "div",
          { className: (0, H.A)(r ? U.EventDetailView : U.DashboardView) },
          m.createElement(
            "div",
            { className: (0, H.A)(U.HeaderCtn) },
            !r &&
              m.createElement(
                "div",
                { className: U.StatsCtnTitle },
                m.createElement(
                  "div",
                  { className: U.StatTitle },
                  (0, M.we)("#EventDashBoard_SummaryStats_Title"),
                  m.createElement(se.o, {
                    tooltip: (0, M.we)("#EventDashBoard_SummaryStats_Desc"),
                  }),
                ),
                m.createElement(
                  "div",
                  { className: U.StatsActionRow },
                  m.createElement(
                    z.$n,
                    {
                      onClick: (e) =>
                        (0, W.EP)(
                          e,
                          `${p.TS.PARTNER_BASE_URL}/doc/marketing/event_tools/stats`,
                        ),
                    },
                    (0, M.we)("#EventDashBoard_SummaryStats_AboutStats"),
                  ),
                  m.createElement(
                    z.$n,
                    {
                      onClick: (e) =>
                        (0, j.pg)(
                          m.createElement(ie, { clanInfo: d }),
                          (0, re.uX)(e),
                        ),
                    },
                    (0, M.we)("#EventDashBoard_SummaryStats_Export"),
                  ),
                ),
                m.createElement(
                  "div",
                  { className: U.StatsActionRow },
                  m.createElement(
                    z.$n,
                    { onClick: () => c(!l) },
                    (0, M.we)("#EventDashBoard_SummaryStats_Details"),
                  ),
                ),
              ),
            m.createElement(
              "div",
              { className: U.TotalsCtn },
              m.createElement(
                "div",
                { className: U.HeaderStat },
                m.createElement(
                  "span",
                  { className: U.StatDescription },
                  (0, M.we)("#EventDashBoard_SummaryStats_TotalImpressions"),
                ),
                m.createElement(
                  "span",
                  { className: U.StatFigure },
                  (0, V.Dq)(t.total_showm),
                ),
              ),
              m.createElement(
                "div",
                { className: U.HeaderStat },
                m.createElement(
                  "span",
                  { className: U.StatDescription },
                  (0, M.we)("#EventDashBoard_SummaryStats_TotalViews"),
                ),
                m.createElement(
                  "span",
                  { className: U.StatFigure },
                  (0, V.Dq)(t.total_read),
                ),
              ),
            ),
          ),
          Boolean(i && n) &&
            m.createElement(
              "div",
              { className: U.ModerationWarningCtn },
              m.createElement(
                "div",
                { className: U.ModerationWarning },
                (0, M.we)("#EventDashBoard_ModerationQueueWarning"),
              ),
              m.createElement(
                "a",
                {
                  href:
                    p.TS.PARTNER_BASE_URL +
                    "doc/marketing/event_tools/moderation",
                },
                (0, M.we)("#EventDashBoard_Location_ModerationTitle"),
              ),
            ),
          l &&
            m.createElement(
              "div",
              { className: (0, H.A)(U.StatsCtn) },
              i &&
                m.createElement(
                  "div",
                  {
                    className: (0, H.A)(
                      U.StatsLeftSection,
                      n && U.DisabledStats,
                    ),
                  },
                  m.createElement(
                    "div",
                    { className: U.StatsTitle_ctn },
                    m.createElement(
                      "span",
                      null,
                      (0, M.we)("#EventDashBoard_Location_LibraryHome"),
                    ),
                    m.createElement(
                      "span",
                      { className: U.ModerationNote },
                      "( ",
                      (0, M.we)("#EventDashBoard_Location_WaitingModeraion"),
                      " )",
                    ),
                  ),
                  m.createElement(
                    "div",
                    { className: U.StatsTitle },
                    m.createElement(
                      "span",
                      null,
                      (0, M.we)("#EventDashBoard_Summary_LibraryHome_Shown"),
                    ),
                    m.createElement(
                      "span",
                      null,
                      (0, V.Dq)(t.library_overview_shown),
                    ),
                  ),
                  m.createElement(
                    "div",
                    { className: U.StatsTitle },
                    m.createElement(
                      "span",
                      null,
                      (0, M.we)("#EventDashBoard_Summary_LibraryHome_Read"),
                    ),
                    m.createElement(
                      "span",
                      null,
                      (0, V.Dq)(t.library_overview_read),
                    ),
                  ),
                  m.createElement(
                    "div",
                    { className: U.StatsTitle_ctn },
                    m.createElement(
                      "span",
                      null,
                      (0, M.we)("#EventDashBoard_Location_LibraryDetail"),
                    ),
                    m.createElement(
                      "span",
                      { className: U.ModerationNote },
                      "( ",
                      (0, M.we)("#EventDashBoard_Location_WaitingModeraion"),
                      " )",
                    ),
                  ),
                  t.app_details_spotlight_shown > 0 &&
                    m.createElement(
                      m.Fragment,
                      null,
                      m.createElement(
                        "div",
                        { className: U.StatsTitle },
                        m.createElement(
                          "span",
                          null,
                          (0, M.we)(
                            "#EventDashBoard_Summary_AppDetailSpotlight_Shown",
                          ),
                        ),
                        m.createElement(
                          "span",
                          null,
                          (0, V.Dq)(t.app_details_spotlight_shown),
                        ),
                      ),
                      m.createElement(
                        "div",
                        { className: U.StatsTitle },
                        m.createElement(
                          "span",
                          null,
                          (0, M.we)(
                            "#EventDashBoard_Summary_AppDetailSpotlight_Read",
                          ),
                        ),
                        m.createElement(
                          "span",
                          null,
                          (0, V.Dq)(t.app_details_spotlight_read),
                        ),
                      ),
                    ),
                  m.createElement(
                    "div",
                    { className: U.StatsTitle },
                    m.createElement(
                      "span",
                      null,
                      (0, M.we)(
                        "#EventDashBoard_Summary_AppDetailActivity_Shown",
                      ),
                    ),
                    m.createElement(
                      "span",
                      null,
                      (0, V.Dq)(t.app_details_activity_shown),
                    ),
                  ),
                  m.createElement(
                    "div",
                    { className: U.StatsTitle },
                    m.createElement(
                      "span",
                      null,
                      (0, M.we)(
                        "#EventDashBoard_Summary_AppDetailActivity_Read",
                      ),
                    ),
                    m.createElement(
                      "span",
                      null,
                      (0, V.Dq)(t.app_details_activity_read),
                    ),
                  ),
                ),
              m.createElement(
                "div",
                { className: U.StatsRightSection },
                m.createElement(
                  "div",
                  { className: U.StatsTitle_ctn },
                  m.createElement(
                    "span",
                    null,
                    (0, M.we)("#EventDashBoard_Location_StoreDetail"),
                  ),
                ),
                m.createElement(
                  "div",
                  { className: U.StatsTitle },
                  m.createElement(
                    "span",
                    null,
                    (0, M.we)("#EventDashBoard_Summary_StoreAppPage_Shown"),
                  ),
                  m.createElement(
                    "span",
                    null,
                    (0, V.Dq)(t.store_app_page_shown),
                  ),
                ),
                m.createElement(
                  "div",
                  { className: U.StatsTitle },
                  m.createElement(
                    "span",
                    null,
                    (0, M.we)("#EventDashBoard_Summary_StoreAppPage_Read"),
                  ),
                  m.createElement(
                    "span",
                    null,
                    (0, V.Dq)(t.store_app_page_read),
                  ),
                ),
                m.createElement(
                  "div",
                  { className: U.StatsTitle_ctn },
                  m.createElement(
                    "span",
                    null,
                    (0, M.we)("#EventDashBoard_Location_CommunityDetail"),
                  ),
                ),
                m.createElement(
                  "div",
                  { className: U.StatsTitle },
                  m.createElement(
                    "span",
                    null,
                    (0, M.we)("#EventDashBoard_Summary_Community_Shown"),
                  ),
                  m.createElement(
                    "span",
                    null,
                    (0, V.Dq)(t.community_hub_shown),
                  ),
                ),
                m.createElement(
                  "div",
                  { className: U.StatsTitle },
                  m.createElement(
                    "span",
                    null,
                    (0, M.we)("#EventDashBoard_Summary_Community_Read"),
                  ),
                  m.createElement(
                    "span",
                    null,
                    (0, V.Dq)(t.community_hub_read),
                  ),
                ),
                m.createElement(
                  "div",
                  { className: U.StatsTitle_ctn },
                  m.createElement(
                    "span",
                    null,
                    (0, M.we)("#EventDashBoard_Location_NewsHubDetail"),
                  ),
                ),
                m.createElement(
                  "div",
                  { className: U.StatsTitle },
                  m.createElement(
                    "span",
                    null,
                    (0, M.we)("#EventDashBoard_Summary_NewsHub_Shown"),
                  ),
                  m.createElement("span", null, (0, V.Dq)(t.news_hub_shown)),
                ),
                m.createElement(
                  "div",
                  { className: U.StatsTitle },
                  m.createElement(
                    "span",
                    null,
                    (0, M.we)("#EventDashBoard_Summary_NewsHub_Read"),
                  ),
                  m.createElement("span", null, (0, V.Dq)(t.news_hub_read)),
                ),
              ),
            ),
        );
      }
      var ce = a(45359),
        me = a(69409),
        de = a(46416),
        ue = a(14326),
        _e = a(64641),
        he = a.n(_e),
        pe = a(17289),
        ve = a(44332),
        Ee = a(73745),
        fe = a(61336),
        ge = a(92007),
        Se = a(18663);
      const we = m.lazy(() =>
          Promise.all([
            a.e(8970),
            a.e(6597),
            a.e(4607),
            a.e(4539),
            a.e(2797),
            a.e(7436),
            a.e(7403),
            a.e(9214),
            a.e(3270),
            a.e(4796),
            a.e(9063),
            a.e(4095),
            a.e(3045),
            a.e(4339),
            a.e(8199),
            a.e(3818),
            a.e(177),
            a.e(8396),
          ]).then(a.bind(a, 70834)),
        ),
        ye = (0, l.PA)((e) => {
          const {
              event: t,
              lang: a,
              partnerEventStore: n,
              emoticonStore: i,
              nOverrideStartTime: s,
              nOverrideEndTime: o,
              adminPanel: l,
              otherEventRow: c,
              titleBar: d,
            } = e,
            _ = t.appid,
            h = t.clanSteamID.GetAccountID(),
            p = (0, P.MU)(),
            [v, E] = (0, y.t7)(_, {
              include_assets: !0,
              include_platforms: !0,
              include_basic_info: !0,
              include_release: !0,
            }),
            [f, g] = (0, u.TB)(h);
          if (
            (m.useEffect(() => window.scrollTo(0, 0), [_, h]),
            !t.bLoaded || !g || (_ && !v && 2 !== E))
          )
            return m.createElement(
              "div",
              { className: he().FlexCenter, style: { height: "400px" } },
              m.createElement(Y.t, {
                size: "medium",
                string: (0, M.we)("#Loading"),
              }),
            );
          let S = t.GetDescriptionWithFallback(a);
          const w = (0, k.qT)(t, k.PH.k_eStoreNewsHub, "allowRelative");
          return m.createElement(be, {
            event: t,
            lang: a,
            titleBar: d,
            body: m.createElement(
              D.tH,
              null,
              m.createElement(
                "div",
                { className: R().EventDetailTitleContainer },
                m.createElement(b.r, {
                  crumbs: [
                    {
                      name: (0, M.we)("#BreadCrumbs_AllEvents"),
                      url: (0, k.qT)(
                        t,
                        k.PH.k_eStoreUsersNewsHub,
                        "allowRelative",
                      ),
                    },
                    {
                      name: (0, M.we)(
                        "#BreadCrumbs_GameEvents",
                        v?.GetName() || g.group_name,
                      ),
                      url: w,
                    },
                  ],
                }),
                m.createElement(
                  "div",
                  { className: R().EventDetailTitle },
                  t.GetNameWithFallback(a),
                ),
                t.BHasSubTitle(a) &&
                  m.createElement(
                    "div",
                    { className: R().EventDetailsSubTitle },
                    t.GetSubTitle(a),
                  ),
              ),
              Boolean(t.BEventCanShowBroadcastWidget(p)) &&
                m.createElement(
                  "div",
                  { className: R().EventBroadcastCtn },
                  m.createElement(
                    m.Suspense,
                    { fallback: null },
                    m.createElement(we, {
                      event: t,
                      bIsPreview: p,
                      accountIDs: p ? t.jsondata.broadcast_whitelist : void 0,
                    }),
                  ),
                ),
              m.createElement(
                "div",
                { className: (0, H.A)(R().EventColumns, "EventDetail") },
                m.createElement(
                  "div",
                  { className: R().EventDetailsDescription },
                  m.createElement(
                    D.tH,
                    null,
                    t.BHasTag("steam_award_nomination_request") &&
                      m.createElement(B.EventDisplaySteamAwardNomination, {
                        event: t,
                        lang: a,
                        previewMode: p,
                      }),
                    t.BHasTag("steam_award_vote_request") &&
                      m.createElement(B.WinterSaleSteamAwardVoteWrapper, {
                        appID: t.appid,
                        bIsEventActionEnabled: t.BIsEventActionEnabled(),
                        voteCategories: t.GetSteamAwardNomineeCategories(),
                      }),
                  ),
                  m.createElement(
                    D.tH,
                    null,
                    m.createElement(
                      "div",
                      {
                        className: (0, H.A)(
                          "EventDetailsBody",
                          R().EventDetailsBody,
                        ),
                      },
                      m.createElement(I.f, {
                        text: S || "",
                        partnerEventStore: n,
                        showErrorInfo: p,
                        event: t,
                        languageOverride: a,
                      }),
                      Boolean(
                        t.jsondata.bSaleEnabled && t.jsondata.sale_vanity_id,
                      ) &&
                        m.createElement(
                          "div",
                          { className: (0, H.A)(R().ReadMoreCnt) },
                          m.createElement(me.m, { gidEvent: t.GID }),
                          m.createElement(
                            "a",
                            {
                              className: (0, H.A)(F().Button, "LinkButton"),
                              href: (0, fe.k2)(t.GetSaleURL()),
                            },
                            (0, M.we)("#Event_Button_VisitSalePage"),
                          ),
                        ),
                      Boolean(t.jsondata.associated_appid) &&
                        m.createElement(ge.e, {
                          id: t.jsondata.associated_appid,
                          inputType: "game",
                        }),
                    ),
                  ),
                  m.createElement(
                    D.tH,
                    null,
                    m.createElement(x._, { event: t }),
                  ),
                  Boolean(t.jsondata.read_more_link) &&
                    m.createElement(
                      "div",
                      { className: (0, H.A)(R().ReadMoreCnt) },
                      m.createElement(
                        W.uU,
                        {
                          className: (0, H.A)(F().Button),
                          href: t.jsondata.read_more_link,
                        },
                        (0, M.we)("#EventEmail_Button_ClickForMoreDetails"),
                      ),
                    ),
                  m.createElement("span", { className: F().Clear }),
                  m.createElement(
                    D.tH,
                    null,
                    Boolean(t.appid) &&
                      m.createElement(Se.lS, { appid: t.appid }),
                    Boolean(t.jsondata.sale_social_media_items) &&
                      m.createElement(Se.lz, {
                        gidClanEvent: t.GID,
                        rgSocial: t.jsondata.sale_social_media_items,
                      }),
                  ),
                ),
                m.createElement(
                  D.tH,
                  null,
                  m.createElement(Ce, {
                    event: t,
                    lang: a,
                    nOverrideStartTime: s,
                    nOverrideEndTime: o,
                  }),
                ),
              ),
              m.createElement(A.F, {
                eventModel: t,
                emoticonStore: i,
                partnerEventStore: n,
              }),
            ),
            postbody: m.createElement(D.tH, null, l, c),
            footer: m.createElement(
              D.tH,
              null,
              m.createElement(
                "div",
                { className: R().AppSummaryCtn },
                m.createElement(
                  "div",
                  { className: R().EventBodyPosition },
                  Boolean(v) &&
                    m.createElement(
                      "div",
                      { className: R().AppSummaryWidgetTitleCtn },
                      m.createElement(
                        "span",
                        { className: R().Title },
                        (0, M.we)("#CreatorHome_ThisGame"),
                      ),
                      m.createElement(
                        "div",
                        {
                          className: (0, H.A)(
                            R().AppSummaryWidgetCtn,
                            "AppSummaryWidgetCtn",
                          ),
                        },
                        m.createElement(ce.pb, {
                          id: t.appid,
                          type: (0, r.U)(v.GetAppType()),
                        }),
                      ),
                    ),
                  m.createElement(C.LG, { appid: t.appid, bSmallFormat: !0 }),
                ),
              ),
            ),
          });
        }),
        be = (0, l.PA)((e) => {
          const {
              event: t,
              lang: a,
              titleBar: n,
              body: r,
              postbody: s,
              footer: o,
            } = e,
            l = t.GetImageURLWithFallback("background", a),
            c = t.BIsImageSafeForAllAges("background", a),
            d = "lang_" + (0, i.ww)(a),
            u = !!l && t.BImageNeedScreenshotFallback("background", a);
          return m.createElement(
            "div",
            {
              className: (0, H.A)(
                R().EventDetailsPageContainer,
                d,
                F().PartnerEventFont,
                c
                  ? R().DetailArtworkAgeAppropriate
                  : R().DetailArtworkAgeNotAppropriate,
                !l && R().NoTitleArtwork,
                u && R().ScreenshotInsteadOfCover,
              ),
            },
            m.createElement(T.vA, {
              appId: t.appid,
              clanId: t.clanSteamID.GetAccountID(),
            }),
            n,
            m.createElement(De, { strImageURL: l }),
            m.createElement(Te, { strImageURL: l, body: r, postbody: s }),
            Boolean(o) && m.createElement(D.tH, null, o),
          );
        }),
        De = (e) => {
          const { strImageURL: t } = e;
          return m.createElement(
            "div",
            { className: R().EventCoverImageCtn },
            m.createElement(
              "div",
              { className: R().EventCoverImageBlr },
              t &&
                m.createElement(
                  m.Fragment,
                  null,
                  m.createElement("div", {
                    className: R().EventCoverImageFuzz,
                    style: {
                      backgroundColor: "rgb(37, 41, 46)",
                      backgroundImage: `url(${t})`,
                    },
                  }),
                  m.createElement("div", {
                    className: R().EventCoverImage,
                    style: {
                      backgroundColor: "rgb(37, 41, 46)",
                      backgroundImage: `url(${t})`,
                    },
                  }),
                ),
            ),
            t && m.createElement("div", { className: R().CoverImageGradient }),
          );
        },
        Te = (e) => {
          const { body: t, postbody: a, strImageURL: n } = e;
          return m.createElement(
            "div",
            { className: R().EventBodyCtn },
            m.createElement("div", { className: R().EventBackgroundBlurCtn }),
            m.createElement(
              "div",
              { className: R().EventBodyPosition },
              m.createElement(
                "div",
                { className: R().EventBody },
                Boolean(n) &&
                  m.createElement("div", {
                    className: R().EventBackgroundBlur,
                    style: { backgroundImage: `url(${n})` },
                  }),
                m.createElement(D.tH, null, t),
              ),
              Boolean(a) && m.createElement(D.tH, null, a),
            ),
          );
        };
      function Ce(e) {
        const {
            event: t,
            lang: a,
            nOverrideStartTime: n,
            nOverrideEndTime: i,
          } = e,
          [r, s, o, l, d, h] = (0, c.q3)(() => [
            t.appid,
            t.clanSteamID,
            _.HD.GetTimeNowWithOverride(),
            n || t.GetStartTimeAndDateUnixSeconds(),
            t.GetCategoryAsString(),
            t.type,
          ]),
          [p] = (0, y.t7)(r, {
            include_assets: !0,
            include_platforms: !0,
            include_release: !0,
          }),
          [v, E] = (0, u.TB)(s.GetAccountID());
        return E
          ? t.appid && !p
            ? null
            : m.createElement(
                "div",
                { className: R().EventDetailTitleDesc },
                m.createElement(
                  "div",
                  { className: R().EventDetailsSticky },
                  E.is_ogg
                    ? m.createElement(Ae, { appid: E.appid })
                    : m.createElement(Ie, { clanSteamID: s }),
                  m.createElement(O.j, {
                    event: t,
                    nOverrideEndTime: i,
                    nOverrideStartTime: n,
                  }),
                  28 !== h &&
                    o < l &&
                    m.createElement(
                      "div",
                      { className: R().EventDetailTimeInfo },
                      m.createElement(N.j, { eventModel: t, lang: a }),
                    ),
                  m.createElement(
                    "div",
                    { className: R().EventDetailUserType },
                    m.createElement(
                      "div",
                      { className: R().RightSideTitles },
                      (0, M.we)("#EventDisplay_RightColumnTitle_EventType"),
                    ),
                    m.createElement(
                      "div",
                      { className: R().EventDetailsType },
                      d,
                      " ",
                    ),
                  ),
                  m.createElement(Be, { event: t, bIsOGG: E.is_ogg }),
                ),
              )
          : ((0, ve.w)(
              E,
              "EventDetailsRightColumn - clan info (" +
                s.GetAccountID() +
                ") is missing",
            ),
            null);
      }
      function Ae(e) {
        const { appid: t } = e;
        (0, ve.w)(t && 0 != t, "Expected Appid In Game Info Section");
        const [a] = (0, y.t7)(t, {
          include_assets: !0,
          include_platforms: !0,
          include_release: !0,
        });
        return m.createElement(
          "div",
          { className: R().EventDetailGameCallToAction },
          m.createElement(
            "div",
            { className: R().RightSideTitles },
            d.zK.some((e) => t === e)
              ? (0, M.we)("#EventDisplay_RightColumnTitle_Blog")
              : (0, M.we)("#EventDisplay_RightColumnTitle_Game"),
          ),
          m.createElement(de.W, {
            imageType: "header",
            capsule: { id: t, type: "game" },
            bHidePriceIfOwned: !0,
            bHideStatusBanners: !0,
          }),
          m.createElement(
            "div",
            { className: (0, H.A)(R().GameActions) },
            a
              ? m.createElement(ue._, {
                  appid: t,
                  bIsFree: a.BIsFree(),
                  bIsComingSoon: a.BIsComingSoon(),
                  className: R().ActionButton,
                })
              : m.createElement(Y.t, { size: "small", position: "center" }),
          ),
        );
      }
      function Ie(e) {
        const { clanSteamID: t } = e,
          [a, n] = (0, u.TB)(t.GetAccountID());
        return n
          ? m.createElement(
              "div",
              { className: R().EventDetailGameCallToAction },
              m.createElement(
                "div",
                { className: R().RightSideTitles },
                n.group_name,
              ),
              m.createElement(
                pe.m,
                { href: (0, fe.k2)(u.ac.GetCreatorStoreURL(t)) },
                m.createElement("div", {
                  className: R().EventDetailsAvatar,
                  style: { backgroundImage: `url(${n.avatar_full_url})` },
                }),
              ),
            )
          : ((0, ve.w)(
              n,
              "EventDetailsRightCreatorInfo - clan info (" +
                t.GetAccountID() +
                ") is missing",
            ),
            null);
      }
      const ke = ["", "en-US", "en-GB", "zh-CN", "es-ES", "br-BR"];
      let Ne = class extends m.Component {
        GenerateOptions() {
          let e = new Array();
          return (
            ke.forEach((t) =>
              e.push(m.createElement("option", { key: t, value: t }, t)),
            ),
            e
          );
        }
        OnLanguageChange(e) {
          this.props.fnOverrideLocale(e.currentTarget.value);
        }
        render() {
          if (
            !h.KN.Get().GetPartnerEventPermissions(this.props.event.clanSteamID)
              .valve_admin
          )
            return m.createElement("div", null);
          let e = this.GenerateOptions();
          return m.createElement(
            "div",
            { style: { paddingTop: 10 } },
            m.createElement(
              "div",
              {
                className: (0, H.A)(
                  F().FlexColumnContainer,
                  F().ValveOnlyBackground,
                ),
              },
              m.createElement(
                "div",
                {
                  className: (0, H.A)(
                    F().EventEditorTextTitle,
                    F().ValveSupportOnly,
                  ),
                },
                "Valve Support Tools (VO)",
              ),
              m.createElement("span", null, "Override Locale"),
              m.createElement("select", { onChange: this.OnLanguageChange }, e),
            ),
          );
        }
      };
      (0, n.Cg)([Ee.oI], Ne.prototype, "OnLanguageChange", null),
        (Ne = (0, n.Cg)([l.PA], Ne));
      let Be = class extends m.Component {
        m_cancelSignal = o().CancelToken.source();
        componentDidMount() {
          const { event: e } = this.props;
          e.BIsPartnerEvent() &&
            e.BIsVisibleEvent() &&
            h.KN.Get()
              .LoadSingleAppEventPermissions(e.clanSteamID)
              .then((t) => {
                t &&
                  t.can_edit &&
                  w.LoadStatsForEvents(
                    e.clanSteamID,
                    [e.GID],
                    this.m_cancelSignal,
                  );
              });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("EventDisplayEditorInfo cancelled");
        }
        render() {
          const { event: e, bIsOGG: t } = this.props;
          if (!h.KN.Get().GetPartnerEventPermissions(e.clanSteamID).can_edit)
            return null;
          const a =
            e.BIsPartnerEvent() &&
            e.BIsVisibleEvent() &&
            w.GetStatsFor(e.clanSteamID, e.GID);
          return m.createElement(
            D.tH,
            null,
            m.createElement(
              "div",
              { className: R().EditorStatsCtn },
              m.createElement(
                "div",
                { className: R().EditorStatsRow },
                m.createElement(
                  "span",
                  null,
                  (0, M.we)("#EventEditor_Comments"),
                ),
                m.createElement("span", null, (0, V.Dq)(e.nCommentCount)),
              ),
              m.createElement(
                "div",
                { className: R().EditorStatsRow },
                m.createElement(
                  "span",
                  null,
                  (0, M.we)("#EventEditor_UpVotes"),
                ),
                m.createElement(
                  "span",
                  null,
                  e.nVotesUp ? (0, V.Dq)(e.nVotesUp) : 0,
                ),
              ),
              m.createElement(
                "div",
                { className: R().EditorStatsRow },
                m.createElement(
                  "span",
                  null,
                  (0, M.we)("#EventEditor_DownVotes"),
                ),
                m.createElement(
                  "span",
                  null,
                  e.nVotesDown ? (0, V.Dq)(e.nVotesDown) : 0,
                ),
              ),
            ),
            Boolean(a) &&
              m.createElement(
                "div",
                { className: R().EditorStatsCtn },
                (0, M.we)("#EventDashBoard_SummaryStats_Admin_Title"),
                m.createElement(le, {
                  summary: a.m_stats,
                  clanSteamID: e.clanSteamID,
                  bIsAllowedInLibrary: t,
                  bEventIsInModerationQueue: (0, d.Dn)(e),
                  bCompact: !0,
                }),
              ),
          );
        }
      };
      Be = (0, n.Cg)([l.PA], Be);
    },
    99637: (e, t, a) => {
      "use strict";
      a.d(t, { K: () => g });
      var n = a(90626),
        i = a(92298),
        r = a.n(i),
        s = a(44894),
        o = a(44165),
        l = a(95695),
        c = a.n(l),
        m = a(52038),
        d = a(61859),
        u = a(32754),
        _ = a(12916),
        h = a.n(_),
        p = a(87937),
        v = a.n(p);
      const E = "hh:mm a",
        f = "HH:mm";
      function g(e) {
        const {
          nLatestTime: t,
          nEarliestTime: a,
          fnGetTimeToUpdate: i,
          onError: l,
          strAlsoShowTimeZone: _,
          disabled: p,
          bNoDefaultDate: g,
          className: b,
          strDescToolTip: D,
          strDescription: T,
          bShowTimeZone: C,
          strInvalidDateTimeLocalizedMsg: A,
          fnIsValidDateTime: I,
          bWeekdaysOnly: k,
          fnSetTimeToUpdate: N,
          bForce24HourFormat: B,
        } = e;
        let L =
          (function () {
            const e = v()("2025-01-14T13:00:00");
            return e.format("LT").toLowerCase().includes("13");
          })() || B
            ? f
            : E;
        const R = i(),
          [O, P] = n.useState(R > 0 ? v()(1e3 * R) : null),
          [x, G] = n.useState(),
          [F, H] = n.useState(),
          M = (function (e, t, a, i, r) {
            const s = i && i(),
              o = t && !w(t).isValid(),
              l = e && !y(e).isValid();
            let c = null;
            (l || o || "string" == typeof s || !1 === s) &&
              ((c = (0, d.we)(
                a || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              l
                ? (c = (0, d.we)("#DateTimePicker_Time_CannotParse"))
                : o
                  ? (c = (0, d.we)("#DateTimePicker_Date_CannotParse"))
                  : "string" == typeof s && (c = s));
            return (
              n.useEffect(() => {
                r && r(c);
              }, [c, r]),
              c
            );
          })(x, F, A, I, l),
          U = !l && M;
        let V, j;
        if (t && a && t == a && a > o.HD.GetTimeNowWithOverride()) {
          const e = v().unix(a);
          (V = {
            hours: { max: e.hour(), min: e.hour(), step: 0 },
            minutes: { max: e.minute(), min: e.minute(), step: 0 },
            seconds: { max: e.seconds(), min: e.seconds(), step: 0 },
            milliseconds: { max: 0, min: 0, step: 0 },
          }),
            (L = f);
        }
        R || !a || g || (j = v().unix(a));
        const z = v().tz.guess(),
          W = v().unix(R).tz(z),
          q = !!_ && z != _ && v().unix(R).tz(_),
          {
            fnOnInput: K,
            fnOnInputBlur: Q,
            fnOnChange: Y,
          } = S(
            w,
            (e) => {
              if (p) return;
              H(null);
              const t = i(),
                a = v().unix(t || o.HD.GetTimeNowWithOverride());
              (e = e.clone()).hour(a.hour()),
                e.minute(a.minute()),
                e.second(0),
                N(e.unix()),
                P(e);
            },
            H,
          ),
          {
            fnOnInput: Z,
            fnOnInputBlur: J,
            fnOnChange: X,
          } = S(
            y,
            (e) => {
              if (p) return;
              G(null);
              let t = i(),
                n = 0;
              if (t) {
                const a = v().unix(t);
                (e = e.clone()).year(a.year()),
                  e.month(a.month()),
                  e.date(a.date()),
                  (n = e.unix());
              } else {
                n =
                  v().unix(a).hour(0).second(0).minutes(0).unix() +
                  3600 * e.hour() +
                  60 * e.minutes();
              }
              N(n), P(v().unix(n));
            },
            G,
          );
        return n.createElement(
          "div",
          { className: (0, m.A)(h().EventTimeSection, b) },
          n.createElement(
            "div",
            { className: (0, m.A)(h().EventTimeTitle, "DialogLabel") },
            n.createElement(
              u.he,
              { toolTipContent: D, direction: "top" },
              Boolean(T) && n.createElement("span", null, T),
            ),
            U &&
              n.createElement(
                "span",
                { className: h().DateErrorCtn },
                n.createElement("img", { src: s.A }),
                U,
              ),
          ),
          n.createElement(
            "div",
            { className: c().FlexRowContainer },
            n.createElement(
              "div",
              { className: (0, m.A)(c().InputBorder, h().TimeBlock) },
              n.createElement(r(), {
                onChange: Y,
                timeFormat: !1,
                value: null != F ? F : O,
                isValidDate: (e) =>
                  !p &&
                  (function (e, t, a, n) {
                    const i = v().unix(e).hour(0).seconds(0).minute(0);
                    let r = n.unix() >= i.unix();
                    if (r && t && t >= e) {
                      const e = v().unix(t).hour(23).minute(59).seconds(59);
                      r = n.unix() <= e.unix();
                    }
                    r &&
                      a &&
                      ((0 != n.weekday() && 6 != n.weekday()) || (r = !1));
                    return r;
                  })(a, t, k, e),
                initialValue: j,
                inputProps: {
                  placeholder: (0, d.we)("#DateTimePicker_Enter_Date"),
                  className: (0, m.A)(
                    h().DateWidth,
                    "DialogInput",
                    "DialogTextInputBase",
                  ),
                  disabled: p,
                  onChange: (e) => K(e.currentTarget.value),
                  onBlur: (e) => Q(e.currentTarget.value),
                },
              }),
              !!q &&
                n.createElement(
                  "div",
                  { className: h().PacificTimeHint },
                  q.format("L"),
                ),
            ),
            n.createElement(
              "div",
              { className: (0, m.A)(c().InputBorder, h().TimeBlock) },
              n.createElement(r(), {
                onChange: X,
                dateFormat: !1,
                timeFormat: L,
                timeConstraints: V,
                value: null != x ? x : O,
                inputProps: {
                  placeholder: (0, d.we)("#DateTimePicker_Enter_Time"),
                  className: (0, m.A)(
                    h().TimeWidth,
                    "DialogInput",
                    "DialogTextInputBase",
                  ),
                  disabled: p,
                  onChange: (e) => Z(e.currentTarget.value),
                  onBlur: (e) => J(e.currentTarget.value),
                },
              }),
              !!q &&
                n.createElement(
                  "div",
                  { className: h().PacificTimeHint },
                  q.format("LT"),
                ),
            ),
            C &&
              n.createElement(
                "div",
                null,
                n.createElement(
                  "div",
                  { className: h().TimeZone },
                  W.zoneAbbr(),
                ),
                !!q &&
                  n.createElement(
                    "div",
                    { className: h().TimeZone },
                    q.zoneAbbr(),
                  ),
              ),
          ),
          Boolean(V) &&
            n.createElement(
              "div",
              null,
              (0, d.we)("#DateTimePicker_DateTime_Fixed"),
            ),
        );
      }
      function S(e, t, a) {
        const [i, r] = n.useState(!1);
        return {
          fnOnInput: (e) => {
            a(e), r(!0);
          },
          fnOnInputBlur: (a) => {
            if (i) {
              const n = e(a);
              n.isValid() && t(n);
            }
            r(!1);
          },
          fnOnChange: (a) => {
            if (!i)
              if ("string" == typeof a) {
                const n = e(a);
                n.isValid() && t(n);
              } else t(a);
          },
        };
      }
      function w(e) {
        return v()(
          e,
          (function () {
            const e = v()("2025-01-14").format("L").split(/[-/.]/),
              t = e.indexOf("14");
            return e.indexOf("01") < t;
          })()
            ? "M/D/YYYY"
            : "D/M/YYYY",
          !1,
        );
      }
      function y(e) {
        return v()(e, [E, f], !1);
      }
    },
    43068: (e, t, a) => {
      "use strict";
      a.d(t, { P: () => D });
      var n = a(41735),
        i = a.n(n),
        r = a(34629),
        s = a(14947),
        o = a(78327),
        l = a(68797),
        c = a(2160);
      class m {
        m_objApprovalPriviledge = null;
        m_LoadingPriviledgePromise = null;
        BHasSteamChinaAppApprovalPriviledge() {
          return this.m_objApprovalPriviledge?.bHasAccess;
        }
        async HintLoadAppApprovalPriviledge() {
          return this.m_objApprovalPriviledge
            ? this.m_objApprovalPriviledge
            : (this.m_LoadingPriviledgePromise ||
                (this.m_LoadingPriviledgePromise =
                  this.InternalLoadAppApprovalPriviledge()),
              this.m_LoadingPriviledgePromise);
        }
        async InternalLoadAppApprovalPriviledge() {
          const e =
            o.TS.STORE_BASE_URL + "events_admin/ajaxgetscapprovalpriviledge";
          try {
            const t = await i().get(e, { withCredentials: !0 });
            if (1 == t?.data?.success)
              return (
                (this.m_objApprovalPriviledge = {
                  bHasAccess: t.data.bHasAccess,
                }),
                this.m_objApprovalPriviledge
              );
          } catch (e) {
            const t = (0, l.H)(e);
            console.error(
              "CCuratorListStore.InternalLoadAppApprovalPriviledge: error on load: " +
                t.strErrorMsg,
              t,
            );
          }
          return { bHasAccess: !1 };
        }
        static s_Singleton;
        static Get() {
          return m.s_Singleton || (m.s_Singleton = new m()), m.s_Singleton;
        }
        constructor() {
          (0, s.Gn)(this);
          let e = (0, o.Tc)("sc_app_privildge", "application_config");
          this.ValidateStoreDefault(e)
            ? ("dev" === o.TS.WEB_UNIVERSE &&
                console.log(
                  "DEV_DEBUG: CSteamChinaStore: Loading payload from data-*, bHasAccess: " +
                    e.bHasAccess,
                ),
              (this.m_objApprovalPriviledge = e),
              (this.m_LoadingPriviledgePromise = null))
            : (o.iA.logged_in && o.TS.EREALM === c.TU.k_ESteamRealmChina) ||
              (this.m_objApprovalPriviledge = { bHasAccess: !1 });
        }
        ValidateStoreDefault(e) {
          return e && "object" == typeof e && "boolean" == typeof e.bHasAccess;
        }
      }
      (0, r.Cg)([s.sH], m.prototype, "m_objApprovalPriviledge", void 0);
      var d = a(75844),
        u = a(90626),
        _ = a(17720),
        h = a(60746),
        p = a(30756),
        v = a(90316),
        E = a(95695),
        f = a(51706),
        g = a(738),
        S = a(22797),
        w = a(52038),
        y = a(56011),
        b = a(61859);
      const D = (0, d.PA)((e) => {
          const [t, a] = u.useState(null),
            { eventModel: n } = e;
          let r = n.clanSteamID.GetAccountID();
          u.useEffect(() => {
            const e = i().CancelToken.source();
            return (
              (async () => {
                const t = _.b.InitFromClanID(r),
                  n = await h.KN.Get().LoadSingleAppEventPermissions(t),
                  i = await m.Get().HintLoadAppApprovalPriviledge();
                e.token.reason ||
                  a(o.iA.is_support || n.can_edit || i.bHasAccess);
              })(),
              () => e.cancel("SteamChinaAdminPanel is unmounting")
            );
          }, [r]);
          const s = _.b.InitFromClanID(r);
          return o.iA.is_support ||
            h.KN.Get().GetPartnerEventPermissions(s).can_edit
            ? u.createElement(p.g, {
                eventModel: n,
                partnerEventStore: e.partnerEventStore,
                addtionalAdminButtons: t
                  ? [
                      u.createElement(T, {
                        key: "removesteamchina",
                        eventModel: n,
                      }),
                    ]
                  : void 0,
              })
            : m.Get().BHasSteamChinaAppApprovalPriviledge()
              ? u.createElement(
                  "div",
                  { className: v.DisplayAdminPanel },
                  u.createElement(
                    "span",
                    { className: v.DisplayAdminPanel_Title },
                    (0, b.we)("#EventDisplay_Admin_Title"),
                  ),
                  u.createElement(T, {
                    key: "removesteamchina",
                    eventModel: n,
                  }),
                )
              : null;
        }),
        T = (e) => {
          const { eventModel: t } = e;
          return u.createElement(
            "div",
            {
              className: (0, w.A)(
                E.Button,
                v.AdminButton,
                E.ValveOnlyBackground,
              ),
              onClick: (a) => {
                let n = !1;
                (0, g.pg)(
                  u.createElement(
                    f.o0,
                    {
                      strTitle: (0, b.we)(
                        "#EventAdmin_Moderation_HideEventInSC",
                      ),
                      strDescription: (0, b.we)(
                        "#EventAdmin_Moderation_HideEventInSC_Desc",
                      ),
                      bDestructiveWarning: !0,
                      closeModal: e.closeModal,
                      onOK: () => {
                        (n = !0),
                          (async () => {
                            let a = new URLSearchParams();
                            a.append("sessionid", o.TS.SESSIONID),
                              a.append(
                                "clan_accountid",
                                "" + t.clanSteamID.GetAccountID(),
                              ),
                              a.append("gid_clan_event", "" + t.GID);
                            let n = !1,
                              r = 0;
                            try {
                              const e = `${o.TS.STORE_BASE_URL}/events_admin/ajaxhidefromsteamchina`,
                                s = await i().post(e, a, {
                                  withCredentials: !0,
                                });
                              (n =
                                1 == s?.data?.success ||
                                29 == s?.data?.success),
                                29 == s?.data?.success &&
                                  console.warn(
                                    `RemoveEventFromSteamChinaButton: we receive duplicate request ${t.clanSteamID.GetAccountID()} : ${t.GID}; event is still removed from SC`,
                                  ),
                                (r = s?.data?.success);
                            } catch (e) {
                              const t = (0, l.H)(e);
                              (r = t.errorCode),
                                console.error(
                                  "RemoveEventFromSteamChinaButton: error " +
                                    t.strErrorMsg,
                                  t,
                                );
                            }
                            e.closeModal && e.closeModal(),
                              (0, g.pg)(
                                n
                                  ? u.createElement(
                                      f.o0,
                                      { bAlertDialog: !0 },
                                      (0, b.we)("#EventDisplay_Share_Success"),
                                    )
                                  : u.createElement(
                                      f.KG,
                                      null,
                                      (0, b.we)("#EventDisplay_Share_Failure") +
                                        " " +
                                        r,
                                    ),
                                window,
                              );
                          })();
                      },
                    },
                    n &&
                      u.createElement(S.t, {
                        size: "medium",
                        position: "center",
                      }),
                  ),
                  (0, y.uX)(a),
                );
              },
            },
            (0, b.we)("#EventAdmin_Moderation_HideEventInSC"),
          );
        };
    },
  },
]);
